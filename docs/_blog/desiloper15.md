---
title: 포지션을 지정해보자
date: 2022-05-03 10:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2018/01/19/15/29/cat-3092650_1280.jpg'
summary: 너의 포지션은
---

이제 css 위치를 지정하는것 중에서 좀 골치 아픈 녀석을 다뤄보겠습니다.

아래 목록 클릭시 해당 설명부분으로 이동합니다.

#### 목록

1. <a href="./#position-relative">relative</a>
2. <a href="./#position-absolute">absolute</a>
3. <a href="./#position-fixed">fixed</a>
4. <a href="./#position-sticky">sticky</a>
5. <a href="./#position-float">float</a>

<br>

아무것도 지정하지 않았을 때, position값은 **static**이 기본값입니다.

이때는 각 태그들이 차례대로 왼쪽에서 오른쪽으로, 위에서 아래로 차례대로 쌓이는 형태가 됩니다.

#### position: relative;

relative로 지정할 경우, 차례로 쌓이는 것이 아닌, 지정해준 위치에 가게 됩니다.

```css
.top {
  position: relative;
  top: 30px;
}
.left {
  position: relative;
  left: 30px;
}
.right {
  position: relative;
  right: 30px;
}
.bottom {
  position: relative;
  bottom: 30px;
}
```

<img src="/assets/img/desiloper/desiloper15_01.png">

bottom을 보면 예상밖의 위치에 있는걸 알 수 있는데요, (저는 좀 더 아래쪽에 위치 할 줄 알았습니다..)

쉽게 이해를 시켜 드리자면

**top** (원래 있던 위치의 위로 여백을 30px만큼)

**left** (원래 있던 위치의 왼쪽으로 여백을 30px만큼)

**right** (원래 있던 위치의 오른쪽로 여백을 30px만큼)

**bottom** (원래 있던 위치의 아래쪽으로 여백을 30px만큼, 이때 기준은 적용되는 태그의 **바닥면**을 기준으로 합니다.)

#### position: absolute;

통상적으로 어떤 태그에 absolute를 선언하게 될 경우, 해당 부모 태그에는 relative를 선언해 줘야 합니다.

**position을 가지고 있는 가장 가까운 조상요소를 기준으로 삼아서 적용**이 되므로,

**원래 위치해 있던 자리를 잃어버리게** 됩니다.

```css
h2 {
  text-align: center;
}
body {
  position: relative;
}
div {
  margin: auto;
  width: 300px;
  height: 100px;
  border: 3px solid lightseagreen;
}
span {
  background-color: yellow;
}
.top {
  position: absolute;
  top: 20px;
}
.left {
  position: absolute;
  left: 50px;
}
.right {
  position: absolute;
  right: 50px;
}
.bottom {
  position: absolute;
  bottom: 50px;
}
```

아래 그림은 왼쪽 (부모에 relative를 주지 않은 경우), 오른쪽 (body에 relative를 준 경우) 입니다.
<img src="/assets/img/desiloper/desiloper15_02.png">

우측 이미지의 선택된 영역은 **개발자 도구**로 본 body 태그 부분입니다.

조상요소에 relative를 선언해 주지 않으니 브라우저를 기준으로 딱 붙어버리는걸 볼 수 있네요.

**absolute**는 **relative**와 다르게 직관적으로 부모요소로부터 얼만큼 떨어지면 되는지 알 수 있죠?

absolute에서는 **position을 가지고 있는 가까운 부모요소를 기준으로 삼아서 적용**된다는 점이 중요해요.

위치를 지정하려고 했는데 잘 되지않는다면 해당 조상요소에 적용된 속성을 **반드시** 확인해야합니다.

#### position: fixed;

원하는위치에 고정(fixed)시키는 속성이에요.

웹페이지를 구경다니다보면, 고객센터 안내등의 문구와 함께 아무리 스크롤을 해도 따라다니는것들이 바로 이 속성을 가진 아이들입니다.

문서상에서는 해당 영역은 존재하지 않아요.

#### position: sticky;

그냥 있으면 모르는데 스크롤등을 움직이면 마치 그곳에 딱 붙어있는것 처럼 고정된 상단 메뉴들을 보셨을거에요.

해당 속성을 가진 아이들입니다.

이 속성의 경우 반드시 top, right, bottom, left속성을 주어야 해요.

또, 부모나 조상 요소에 반드시 overflow속성이 있어야 동작해요.

#### position: float;

처음에는 문서에서 이미지를 넣기 위해 사용되었어요.

워드나 한글문서에서 이미지를 넣을때 이미지의 양 옆 혹은 좌,우로 텍스트들이 이미지가 있는 곳을 제외하고 나열된 것을 보셨을 텐데 바로 그 용도입니다.

말 그대로 자연스럽게 요소들이 섞일 수 있게 하는 속성이에요.

문서상에서는 해당 영역은 존재하지 않아요.
