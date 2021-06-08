import React from 'react'
import LazyImg from './lazy-img'

export default {
  title: 'LazyImg',
}

const imgs = []
;(() => {
  for (let i = 1; i < 21; ++i) {
    imgs.push(
      `https://good-oss.oss-cn-shanghai.aliyuncs.com/avatar/avatar${i}.jpg?x-oss-process=image/resize,h_500`
    )
  }
})()

export const Lazy = () => {
  return (
    <>
      图片懒加载测试
      <div>
        {imgs.map(item => (
          <div key={item}>
            <LazyImg
              lazy
              nativeLazy={false}
              src={item}
              srcSet={item}
              style={{ minHeight: 500 }}
            />
          </div>
        ))}
      </div>
    </>
  )
}
