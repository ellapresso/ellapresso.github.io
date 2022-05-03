---
title: 폰트 적용하기
date: 2022-04-26 11:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2016/04/30/13/12/sutterlin-1362879_1280.jpg'
summary: PPT 발표에서 폰트 난리난적, 있쟈나여~
---

속성은 여러가지가 있지만, 쉽게 떠올릴 수 있는 몇가지를 짚어보겠습니다.

```css
* {
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  letter-spacing: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-indent: 10px;
  text-align: center;
  text-decoration: underline;
  text-shadow: 5px 5px 5px red;
}
```

- font-family: 적용할 폰트를 우선순위대로 나열.
  - 맨 앞 Segoe UI를 적용한다. 없으면 다음 폰트인 Tahoma를 적용한다.
  - 폰트명에 띄어쓰기가 있을 경우 ''로 묶어 나타내준다.
  - 설치되어있지 않을 경우, 시스템 폰트가 적용된다.

<br/>

- letter-spacing: 자간을 의미한다.
  - 글자 사이간격을 띄워줄 수 있다.

<br/>

- font-weight: 글자 굵기를 설정한다.
  - bold, lighter등으로 설정할 수 있고, 100, 200, 300 등 숫자로 표기도 가능하다.

<br/>

- text-transform: 영문자를 대문자 혹은 소문자로 변경 할 수 있다.
  - uppercase로 설정하면 대문자, lowercase로 설정하면 소문자로 표기된다.

<br/>

- text-indent: 들여쓰기를 줄 수 있다.

<br/>

- text-align: 텍스트 정렬
  - align은 수평정렬을 의미하므로 왼쪽, 가운데, 오른쪽을 기억하자.

<br/>

- text-decoration: 글자 꾸밈
  - a링크의 경우 여러가지 decoration이 붙어 있다.

<br/>

- text-shadow: 텍스트에 그림자 효과를 줄 수 있다.
  - x축, y축, blur정도, 색상 순으로 작성한다.
