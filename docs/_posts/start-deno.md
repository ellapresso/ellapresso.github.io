---
title: Deno와 Node
date: 2020-06-17 00:00:00
tags:
  - develog
  - tistory
  - deno
  - node
author: ella
featuredimg: '/assets/img/deno_cover_wide.jpeg'
summary: deno를 시작하기전...
originlink: https://ellapresso.tistory.com/107
---
<span style="font-size:12px">Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience. It's built on V8, Rust, and Tokio.</span>

<br>

Deno는 Node.js 창립자 Ryan Dahl이 만든 자바스크립트 및 타입스크립트 런타임이다.

Nodejs에서 고치고 싶었던 부분들을 2018년 6월 발표하더니 뚝딱 만들어 낸것이 바로 이것이다.._(천재들은 뭔가 다른가 봄..)_

<br> 

처음 Deno를 소개할때 Ryan Dahl이 **데노**라고 발음했으나

로고가 공룡처럼 보여서 그런지 점차 **디노**라고 불리고 있고, 잠정적으로 디노로 결정되어 가는듯 하다.

Deno는 Node의 애너그램으로 Node를 반으로 잘라서 **( no | de )**, 앞뒤를 바꾸면 deno가 된다.

<br>

node.js와의 차이점 : <a href='https://www.youtube.com/watch?v=M3BM9TB-8yA'>JSconf</a>

top level await _(async없이 await 할 수 있다!)_, 외부라이브러리를 사용할때의 보안 문제 해결, 외부라이브러리를 url로 import하는 것이 가장 큰 차이점이라고 볼 수 있을것 같다.