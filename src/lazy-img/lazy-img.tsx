import React, { useEffect, useRef, useState } from 'react'

type ReactImage = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'loading'
>

export interface ReactImgProps extends ReactImage {
  nativeLazy?: boolean
  lazy?: boolean
}

export type LoadingType = 'lazy' | 'eager'

export const cbKey = '__ReactImgIoCallback'
const supportNativeLazy = 'loading' in HTMLImageElement.prototype
const supportIo =
  'IntersectionObserver' in window && 'IntersectionObserverEntry' in window

let observer
if (supportIo) {
  observer = new IntersectionObserver(
    (entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio) {
          const fn = entry.target[cbKey]
          fn()
          delete entry.target[cbKey]
          ob.unobserve(entry.target)
        }
      })
    },
    {
      root: null,
      rootMargin: '100px 100px',
      threshold: 0,
    }
  )
}

export const customObserver = (ob: IntersectionObserver) => {
  observer = ob
}

const LazyImg: React.FC<ReactImgProps> = props => {
  const { src, srcSet, lazy = false, nativeLazy = true, ...rest } = props

  const ref = useRef()

  const dataRef = useRef({
    _lazy: lazy,
    _useNativeLazy: supportNativeLazy && nativeLazy,
    _executed: false,
    _loading:
      lazy && supportNativeLazy && nativeLazy
        ? { loading: 'lazy' as LoadingType }
        : {},
  })

  const [inner, setInner] = useState(() => {
    if (!dataRef.current._lazy || dataRef.current._useNativeLazy) {
      return { src, srcSet }
    }
    return {}
  })

  useEffect(() => {
    const { _lazy, _useNativeLazy, _executed } = dataRef.current

    if (_lazy && !_useNativeLazy && !_executed && observer) {
      observer.observe(ref.current)
      ;(ref.current as any)[cbKey] = () => {
        setInner({ src, srcSet })
        dataRef.current._executed = true
      }
      return
    }

    setInner({ src, srcSet })
  }, [src, srcSet])

  return <img {...rest} {...inner} {...dataRef.current._loading} ref={ref} />
}

export default LazyImg
