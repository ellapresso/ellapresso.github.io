---
title: 우당탕탕 CSS 박스 모델 입문
date: 2022-04-13 13:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2017/03/01/10/03/businessman-2108029_1280.jpg'
summary: 레이아웃을 위하여
---

#### CSS 기본 BOX 모델

문서의 레이아웃을 계산할 때, 브라우저의 렌더링 엔진은 표준 CSS 기본 박스 모델에 따라 각각의 요소를 사각형 박스로 표현.

CSS는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정 함. (참고: <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">mdn</a>)

하나의 박스에 구성된 네 부분

1. 콘텐츠 영역
2. 안쪽 여백 영역 (패딩)
3. 테두리 영역
4. 바깥쪽 여백 영역 (마진)

#### 각 영역별 속성 (이외 더 많은 속성이 있다.)

##### 1. 콘텐츠 영역

각 콘텐츠 영역의 크기를 지정 할 수 있다.

1. width
2. max-width
3. min-width
4. height
5. max-height
6. min-height
7. box-sizing

##### 2. 안쪽 여백 영역

콘텐츠 영역 가장 테두리가 감싸고 있는 영역이다.

1. padding
2. padding-top
3. padding-bottom
4. padding-right
5. padding-left

##### 3. 테두리 영역

1. border-width
2. border

##### 4. 바깥쪽 여백 영역

콘텐츠 테두리를 감싸고 있는 영역이다. 요소간 바깥여백이 공유되면 명확하지 않을 수 있다.

1. margin
2. margin-top
3. margin-bottom
4. margin-right
5. margin-left
