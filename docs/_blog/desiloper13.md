---
title: text-align 예제
date: 2022-05-03 08:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: '/assets/img/desiloper/desiloper13_01.png'
summary: 글자 가로 정렬
---

위 이미지는 동일한 div에 **text-align**이라는 속성값으로 텍스트의 정렬을 지정한 것이다.

예제 html + css은 아래와 같다.

<br>

- **HTML**

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>텍스트 왼쪽 정렬</h2>
    <div class="left">
      <p>text-align: left</p>
    </div>

    <h2>텍스트 가운데 정렬</h2>
    <div class="center">
      <p>text-align: center</p>
    </div>

    <h2>텍스트 오른쪽 정렬</h2>
    <div class="right">
      <p>text-align: right</p>
    </div>
  </body>
</html>
```

- **CSS**

```css
div {
  margin: auto;
  width: 300px;
  height: 100px;
  border: 3px solid #73ad21;
}

.left {
  text-align: left;
}

h2,
.center {
  text-align: center;
}

.right {
  text-align: right;
}
```
