---
title: 우당탕탕 CSS 문법 맛보기
date: 2022-04-13 11:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_1280.jpg'
summary: CSS, 이렇게 사용해요
---

#### CSS는 이렇게 생겼습니다

###### css 예시

```css
.arrow {
  color: #dfdfdf;
}

span {
  font-size: 12px;
}

p {
  border: medium solid;
}

.red div {
  margin-top: 10px;
  color: #dddd;
}
```

<br>

#### 선택자와 선언부

```css
div {
  /* ▲ 선택자 */
  border: 1px solid; /* 선언부 */
}
```

- 선택자는 디자인을 적용할 html 요소
- 선언부는 정의된 **속성**과 해당 속성에 적용할 **값**을 기재

<br>

#### css의 위치

- 브라우저가 자동으로 인식하여 적용하기도 하지만, 기본적으로는 head 태그 안에 적용.

```html
<head>
  <!-- 첫번째 방법 (html파일에 직접 적용) -->
  <style>
    .red-font {
      color: red;
    }
  </style>

  <!-- 두번째 방법 (내부에 분리된 css 파일 사용) -->
  <link rel="stylesheet" type="text/css" href="style.css" />

  <!-- 세번째 방법 (외부 링크 사용) -->
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.site.com/css/style.css"
  />
</head>
```

- 각 html요소에 직접 적용 가능

```html
<!-- 네번째 방법 (인라인 스타일) -->
<div style="font-color:red">
  <p>hello world</p>
</div>
```

<br>

##### CSS 적용 우선순위

1. 인라인 스타일
2. 내부 스타일 시트
3. 외부 스타일 시트
4. 브라우저 디자인 정의

###### 예외사항

- 선언부에서 해당 속성값에 !important를 사용할 경우, 다른 선언보다 우선시 됩니다.
- 하지만 사용전에 다른 해결방법은 없는지 **반드시** 찾아보세요!

```css
div span {
  color: red;
}

.black-font {
  color: black !important;
}
```
