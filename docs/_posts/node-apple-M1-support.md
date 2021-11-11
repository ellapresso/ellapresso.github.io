---
title: 맥북 Apple M1칩 노드 16버전 이슈 해결
date: 2021-10-14
tags: 
  - develog
  - node
  - apple M1
  - npm
author: ella
featuredimg: 'https://images.unsplash.com/photo-1568777036071-f9a769596a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1351&q=80'
summary: For a moment she wondered how she had happened to wake so early.
---

npm install을 했는데 만약 Only Mac 64 bits supported. 라는 문구와 함께 노드모듈이 받아지지 않을 경우 해결 방법.

이 맥에 관하여 : 칩 - Apple M1 인 경우.

<a href='https://nodejs.org/ko/'>https://nodejs.org/ko/</a>

위 링크에서 14.18.1 LTS버전을 받는다. (터미널로 설지 하지 않고 사이트에서 진행)

``
$ nvm use 14
``

해결.



16버전과 Apple M1간의 이슈가 있는듯.

ARM64 가 아니라 64-bit 이어야 하는데, 그냥 homebrew로 최신 노드를 설치하게 되면 ARM64로 설치되기 때문에

해당 오류가 발생한다.