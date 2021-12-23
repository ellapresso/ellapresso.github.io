---
title: express + Vuetify
date: 2021-12-23 16:00:00
tags:
  - develog
  - tistory
  - pm2
  - express
  - vuetify
  - nodejs
  - express-generator
author: ella
featuredimg: '/assets/img/vuetify.png'
summary: vuetify 작업물 pm2로 띄우기 - 02
---

vuetifyjs/webpack-ssr로 서버를 한번 띄워보고 나니 궁금증이 생겼다.

구매한 뷰티파이 템플릿에서 뭔가 제공하지는 않을까?

vue-server-renderer를 사용하던데 어디서 어떻게 쓰고 있는걸까?

그냥 단순하게 node서버를 띄운다음에 view 만 띄워주면 안되는걸까?
<br>
<br>

그래서 이번에는 어렵게 가지 않고 내가 할 줄 아는걸 해보기로 했다.
<br>
<br>

우선 뷰티파이 템플릿 안에 express app을 만든다.

` express --no-view my-app `
<br>
<br>

그냥 하면 에러가 날 수 있다.

` npm i express-generator -g `

global에 express-generator를 먼저 설치 해 주고 하자.
<br>
<br>

그다음, 뷰티파이 템플릿 안의 *vue.config.js* 파일에서 다음 설정을 넣어준다.

` outputDir: path.resolve(__dirname, './my-app/dist') `
<br>
<br>

그리고나서 빌드해주면, 설정한 위치에 dist 디렉토리가 생성된다.

그다음 뷰티파이 템플릿 안의 ecosystem.config.js에서 다음 설정을 넣어준다음, 콘솔도 찍어본다.

` script: "./my-app/app.js" `

``` js
// my-app/app.js
app.listen(port, (req, res) => {
  console.log(`server started at port ${port}`);
})
```
<br>
<br>

성공적으로...뜬다 떠 ~

` pm2 start ecosystem.config.js `