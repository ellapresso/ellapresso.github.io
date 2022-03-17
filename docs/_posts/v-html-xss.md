---
title: v-html의 xss취약점 보완하기
date: 2022-03-17
tags:
  - develog
  - vue.js
  - v-html
  - xss
  - toast-ui-editor
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2019/11/08/10/34/cyber-4610993_1280.jpg'
summary: xss취약점을 보완한 에디터
---

참고링크 : <a href="https://velog.io/@gogo78/TOAST-UI-EDITOR%EB%A5%BC-%EB%B6%99%EC%9D%B4%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B4%EA%B2%83%EB%93%A4">**TOAST UI EDITOR를 붙이면서 배운것들**</a>

<br>

html로 저장된 게시글의 내용을 불러올때, 뷰에서 사용 할 수 있는 방법은 **v-html**을 사용하는 것이다.

그런데 서칭중에 **xss**에 취약하다는 글을 발견하고, 해결방안을 찾던 중 위 게시글을 발견했다.

다행히도(?) 애초에 글을 저장 할 때 **toast-ui-editor**를 사용하고 있었고, 뷰어를 사용하여 불러온 html을 그리게 했다.

사용 방법은 아래 npm 사이트를 참고.

<a href="https://www.npmjs.com/package/@toast-ui/vue-editor">**@toast-ui/vue-editor -npm**</a>
