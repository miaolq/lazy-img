import React from 'react'
import LazyImg from './lazy-img'

export default {
  title: 'LazyImg',
}

const imgs = [
  'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
]

export const NativeLazy = () => {
  return (
    <>
      <h1>图片懒加载(默认情况使用浏览器loading：lazy属性自动懒加载)</h1>
      <div>
        {imgs.map(item => (
          <div key={item}>
            <LazyImg lazy src={item} style={{ height: 500 }} />
          </div>
        ))}
      </div>
    </>
  )
}

const imgs2 = [
  'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
  'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&h=500&q=80',
]
export const Lazy = () => {
  return (
    <>
      <h1>图片懒加载（不使用loading属性，手动实现的懒加载）</h1>
      <div>
        {imgs2.map(item => (
          <div key={item}>
            <LazyImg
              lazy
              nativeLazy={false}
              src={item}
              style={{ height: 500 }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

const imgs3 = [
  'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1553736026-ff14d158d222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
]

export const LazyWithPlaceholder = () => {
  return (
    <>
      <h1>懒加载与占位图效果（placeholder需要与nativeLazy = false一起使用）</h1>
      <div>
        {imgs3.map(item => (
          <div key={item}>
            <LazyImg
              lazy
              nativeLazy={false}
              src={item}
              placeholder={item.replace('w=800', 'h=30')}
              style={{ height: 500 }}
            />
          </div>
        ))}
      </div>
    </>
  )
}
