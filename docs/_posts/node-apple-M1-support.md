---
title: Macbook M1 node v.16 issue
date: 2021-10-14
tags: 
  - develog
  - node
  - apple M1
  - npm
  - tistory
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2020/12/23/21/46/macbook-air-5856077_1280.jpg'
summary: node 16 version이라서 오류난다고?
originlink: https://ellapresso.tistory.com/115
---

npm install을 했는데 만약 Only Mac 64 bits supported. 라는 문구와 함께 노드모듈이 받아지지 않을 경우 해결 방법.

Apple M1 인 경우 ARM64인지 64-bit인지 확인 필요!

<a href='https://nodejs.org/ko/'>https://nodejs.org/ko/</a>

위 링크에서 14.18.1 LTS버전을 받는다. (터미널로 설지 하지 않고 사이트에서 진행)

``
$ nvm use 14
``

해결.



16버전과 Apple M1간의 이슈가 있는듯.

ARM64 가 아니라 64-bit 이어야 하는데, 그냥 homebrew로 최신 노드를 설치하게 되면 ARM64로 설치되기 때문에 해당 오류가 발생한다.