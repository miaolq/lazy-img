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
  placeholder?: string
}

export type LoadingType = 'lazy' | 'eager'

const supportNativeLazy = 'loading' in HTMLImageElement.prototype
const supportIo =
  'IntersectionObserver' in window && 'IntersectionObserverEntry' in window

const callbackKey = Symbol('__ReactImgIoCallback')
const newObserver = (ioOptions?: IntersectionObserverInit) =>
  new IntersectionObserver(
    (entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio) {
          entry.target[callbackKey]?.()
          delete entry.target[callbackKey]
          ob.unobserve(entry.target)
        }
      })
    },
    {
      root: null,
      rootMargin: '100px 100px',
      threshold: 0,
      ...ioOptions,
    }
  )

let observer = supportIo ? newObserver() : null

export const customObserver = (ioOptions?: IntersectionObserverInit) => {
  observer = newObserver(ioOptions)
}

const LazyImg: React.FC<ReactImgProps> = props => {
  const {
    src,
    srcSet,
    lazy = false,
    nativeLazy = true,
    placeholder,
    ...rest
  } = props

  const ref = useRef<HTMLImageElement>()

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
    if (placeholder) {
      return { src: placeholder }
    }
    return {}
  })

  useEffect(() => {
    const { _lazy, _useNativeLazy, _executed } = dataRef.current

    if (_lazy && !_useNativeLazy && !_executed && observer) {
      observer.observe(ref.current)
      ref.current[callbackKey] = () => {
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
