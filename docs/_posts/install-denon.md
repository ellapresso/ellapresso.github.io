---
title: denon 설치하기!
date: 2020-06-24 00:00:10
tags:
  - develog
  - tistory
  - deno
  - node
  - denon
author: ella
featuredimg: 'https://blog.kakaocdn.net/dn/qqhFU/btqE6Nm9lf6/okcMkzhfasXZDDtC17nKI0/img.png'
summary: How to Start Denon
originlink: https://ellapresso.tistory.com/108
---


deno를 사용할때 nodejs에서 nodemon과 같은 일을 하는 Third Party Module을 소개한다.

denon으로 이름도 아마 nodemon에서 따온것 같고, 공룡에 뿔달린것 _너무 귀엽다.._

이 모듈 또한 마찬가지로, deno대신 denon run 으로 실행해주면 해당 파일을 모니터링하고 있다가, 수정되면 다시 시작해준다.

**설치 방법**

```
deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts
```

우선, deno가 설치 되어 있어야 한다. (<a href='https://ellapresso.github.io/2020/06/24/install-deno/'>Deno 설치하기</a>)

설치가 되고 나면, 기존에 디노 실행명령어인 **deno run [파일명]** 대신 **denon run [파일명]** 으로 사용해주면 된다.

<img src='https://blog.kakaocdn.net/dn/cscDve/btqE42lHnqJ/huS0dqMh2rrXihKUab6Kw1/img.png'/>


만약 설치후에 실행이 잘 안되거나 위와 같은 문구가 뜬다면,

~/.bash_profile에 export 부터 한줄 쭉 복붙해 넣어준다. (**source .bash_profile** - 설정재시작 잊지말자)



denon --version 으로 확인해보면 오늘날짜 기준으로 버전 v2.2.0이 뜬다.