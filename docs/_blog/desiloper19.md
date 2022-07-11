---
title: HTML + CSS + JS 연습예제
date: 2022-07-11 22:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
  - js
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2014/02/04/10/13/clocks-257911_1280.jpg'
summary: 시계 만들기
---

### 실시간 시계 만들기

<img src="/assets/img/desiloper/clock.png">

```html
<div id="clock"></div>
```

```css
#clock {
  border: 10px solid blueviolet;
  border-radius: 40px;
  text-align: center;
  width: 500px;
  line-height: 50px;
  font-size: 50px;
  margin: auto;
}
```

```js
function setClock() {
  const now = new Date()
  const s = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
  document.getElementById('clock').innerHTML = s
  // setTimeout (지정한 시간마다 특정 함수를 실행 시켜줌.)
  setTimeout('setClock()', 1000) // 1000 : 1초 지정해줌
  console.log(now.getSeconds()) // 매 초마다 콘솔에 찍힘.
}

setClock()
```
