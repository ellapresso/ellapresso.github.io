---
title: PM2 + Vuetify
date: 2021-12-23 10:00:00
tags:
  - develog
  - tistory
  - pm2
  - ssr
  - webpack
  - vuetify
  - vuetifyjs/webpack-ssr
  - webpack-ssr
author: ella
featuredimg: 'https://miro.medium.com/max/2400/1*iqg8cuVlhPAshz_L84PDqg.png'
summary: vuetify 작업물 pm2로 띄우기 - 01
---

vuetify store에서 material pro vuetify 템플릿을 구매하여 열심히 작업을 했는데,

pm2로 띄우려다 보니 제대로 된 소개글이 없어서 헤매다가 하나씩 시작해보았다.(아마 내가 너무 찾기 귀찮았겠지만)
<br/>
<br/>

우선 pm2와 vue-cli, vue-cli-init을 설치한다.

vue-cli-init은 생략이 가능 할 수도 있는데, 에러가 날 경우 설치 해 주면 된다.
<br/>
<br/>

` npm i pm2 -g `

` npm i @vue/cli -g`

` npm i @vue/cli-init -g `
<br/>
<br/>

모두 global로 설치해 준다음 아래 순서대로 띄워본다.
<br/>
<br/>

` vue init vuetifyjs/webpack-ssr app-name `

` cd app-name `

` npm install `

` npm start `
<br/>
<br/>

그럼 기본적으로 뭐가 뜨긴 뜸.

Vue.js + Vuetify SSR + Pm2 완성.
<br/>
<br/>

그런데 내가 원하는 것은 vuetify 템플릿 작업물을 pm2로 띄우는 것.

이제 연습을 완료했으니 실제 템플릿에 추가작업을 해줘야 하는거다.......