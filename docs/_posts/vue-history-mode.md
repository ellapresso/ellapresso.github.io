---
title: Vue 히스토리모드 새로고침 오류
date: 2022-02-14
tags:
  - develog
  - express
  - vue.js
  - history
  - 새로고침
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg'
summary: 새로고침하게 해주세요
---

(저는 express로 vue를 띄워 사용하고 있습니다. 왜인지는 모릅니다...ㅎ)



뷰의 라우터에는 hash모드와 history모드가 있다.

hash모드의 경우 url의 생김새가 **localhost/#/login**과 같은 형태라면

history모드는 우리가 흔히 아는 url의 형태를 가지고 있다.

_그런데 SPA로 되어있는 우리의 뷰는 호락호락하게 우리에게 url을 주지 않더라..._

history모드로 생성 할 경우, 앱은 잘 동작하는데

만약, 새로고침을 하게 되면 페이지를 찾지 못한다.

이때 해결 해 줄 수 있는 방법으로 검색했을때는 다들 **vue.config.js**파일에서 **devServer**에 **historyAipFallback:true**를 넣어 주라고 하던데

내가 원하는 답은 아니었다.

두번째는 **connect-history-api-fallback**를 npm으로 설치 한 후 express로 앱을 띄울때 사용해주는것.

```js
const history = require('connect-history-api-fallback');
const app = express();
const server = http.createServer(app);

app.use(history());

server.listen(3000, () => {
  console.log(`server started at port3000`);
});
```

바로 해결되어 버려서 잠시 현타온 사건.


