---
title: HTML + CSS 연습예제
date: 2022-07-11 21:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2018/03/06/17/40/paper-3204064_1280.jpg'
summary: 테이블 가지고 놀기
---

### table 태그로 아래 그림 만들기

  <table style="width:300px;height:300px">
    <tr>
      <th colspan="2" style="border:1px solid;"></th>
      <th rowspan="2" style="border:1px solid;"></th>
      <th rowspan="3" style="border:1px solid;"></th>
    </tr>
    <tr>
      <th colspan="2" style="border:1px solid;"></th>
    </tr>
    <tr>
      <th colspan="3" style="border:1px solid;"></th>
    </tr>
    <tr>
      <th style="border:1px solid;"></th>
      <th style="border:1px solid;"></th>
      <th style="border:1px solid;"></th>
      <th style="border:1px solid;"></th>
    </tr>
  </table>

```html
<table>
  <tr>
    <th colspan="2"></th>
    <th rowspan="2"></th>
    <th rowspan="3"></th>
  </tr>
  <tr>
    <th colspan="2"></th>
  </tr>
  <tr>
    <th colspan="3"></th>
  </tr>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
</table>
```

```css
th {
  border: 1px solid;
  width: 100px;
  height: 100px;
}
```

### div로 아래 그림 맨들기

  <div class="div-tag" style="display:flex;">
    <div>
      <div class="div-tag" style="display:flex;">
        <div>
          <div class="w2" style="width:120px;height:60px;border:1px solid;"></div>
          <div class="w2" style="width:120px;height:60px;border:1px solid;"></div>
        </div>
        <div class="w1 h2" style="width:60px;height:120px;border:1px solid;margin-bottom:0;"></div>
      </div>
      <div class="w3" style="width:180px;height:60px;border:1px solid;"></div>
    </div>
    <div class="w1 h3" style="width:60px;height:180px;border:1px solid;margin-bottom:0;"></div>
  </div>
  <div class="div-tag" style="display:flex;">
    <div class="w1" style="width:60px;height:60px;border:1px solid;"></div>
    <div class="w1" style="width:60px;height:60px;border:1px solid;"></div>
    <div class="w1" style="width:60px;height:60px;border:1px solid;"></div>
    <div class="w1" style="width:60px;height:60px;border:1px solid;"></div>
  </div>

```html
<div class="div-tag">
  <div>
    <div class="div-tag">
      <div>
        <div class="w2"></div>
        <div class="w2"></div>
      </div>
      <div class="w1 h2"></div>
    </div>
    <div class="w3"></div>
  </div>
  <div class="w1 h3"></div>
</div>
<div class="div-tag">
  <div class="w1"></div>
  <div class="w1"></div>
  <div class="w1"></div>
  <div class="w1"></div>
</div>
```

```css
.div-tag {
  display: flex;
}
.w1 {
  border: 1px solid;
  width: 100px;
  height: 100px;
}
.w2 {
  border: 1px solid;
  width: 200px;
  height: 100px;
}
.w3 {
  border: 1px solid;
  width: 300px;
  height: 100px;
}
.h2 {
  border: 1px solid;
  width: 100px;
  height: 200px;
}
.h3 {
  border: 1px solid;
  width: 100px;
  height: 300px;
}
```
