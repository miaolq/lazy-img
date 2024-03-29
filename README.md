# lazy-img

[![Build Status](https://travis-ci.com/miaolq/lazy-img.svg?branch=main)](https://travis-ci.com/miaolq/lazy-img)

React 版本的图片懒加载组件 [示例]

## Props

- lazy: 是否进行懒加载，默认否。
- nativeLazy: 是否优先使用浏览器的 loading 属性实现懒加载，默认是。若浏览器不支持 loading 属性，采用 IntersectionObserver API 实现懒加载。若浏览器不支持 IntersectionObserver，则会立即加载。可在引入本库之前引入[IntersectionObserver Polyfill]
- placeholder：可使用小图片作为占位符，默认空。

## 注意

- 除了 loading 属性，lazy-img 组件支持传入所有 img 属性
- lazy，nativeLazy，placeholder 在初次渲染生效，后续改动无效
- 可以使用 customObserver 来覆盖 rootMargin，threshold 等属性
- 给 img 一个高度/最小高度，可以防止页面抖动，也可以避免所有图片一开始就在视口内，导致懒加载失效

## todo

- 图片主题色
- 过度效果
- 图片链接处理

## 参考

- [react-component-library]
- [the-complete-guide-to-lazy-loading-images]
- [browser-level-image-lazy-loading]
- [图片主题色占位符](https://manu.ninja/dominant-colors-for-lazy-loading-images/)

[intersectionobserver polyfill]: https://github.com/w3c/IntersectionObserver/tree/main/polyfill
[react-component-library]: https://blog.harveydelaney.com/creating-your-own-react-component-library/
[the-complete-guide-to-lazy-loading-images]: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
[browser-level-image-lazy-loading]: https://web.dev/browser-level-image-lazy-loading/
[示例]: https://www.chromatic.com/component?appId=60dd56293e7bce003b03c3bd&name=LazyImg
