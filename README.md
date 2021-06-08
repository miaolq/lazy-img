# lazy-img

React 版本的图片懒加载组件 [示例]

## 特点

- 使用简单，仅在 img 属性基础上新增了 lazy， nativeLazy 属性
- lazy: 是否进行懒加载，nativeLazy: 如果懒加载，是否优先使用浏览器的 loading 属性实现
- 优先使用浏览器的 loading 属性实现懒加载
- 若不支持 loading 属性，采用 IntersectionObserver API 实现懒加载，性能好
- 若浏览器不支持 IntersectionObserver，则会立即加载。可在引入本库之前引入[IntersectionObserver Polyfill]

## 注意

- 除了 loading 属性，lazy-img 组件支持传入所有 img 属性
- lazy，nativeLazy 在初次渲染生效，后续改动无效
- 可以使用 customObserver 来自定义 observer，来覆盖 rootMargin，threshold 等属性
- 给 img 一个高度/最小高度，可以防止页面抖动，也可以避免所有图片一开始就在视口内，导致懒加载失效

## todo

- placeholder 或者 图片主题色
- 过度效果
- 图片链接处理

## 参考

- [react-component-library]
- [the-complete-guide-to-lazy-loading-images]
- [browser-level-image-lazy-loading]

[intersectionobserver polyfill]: https://github.com/w3c/IntersectionObserver/tree/main/polyfill
[react-component-library]: https://blog.harveydelaney.com/creating-your-own-react-component-library/
[the-complete-guide-to-lazy-loading-images]: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
[browser-level-image-lazy-loading]: https://web.dev/browser-level-image-lazy-loading/
[示例]: https://codepen.io/miaolq/pen/abJjNYm?editors=1010
