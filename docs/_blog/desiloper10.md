---
title: 이미지 표현하기
date: 2022-04-26 10:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: 'https://img.insight.co.kr/static/2019/07/24/700/vx4x2i3868u950f28372.jpg'
summary: 덕질을 해보자
---

##### 하나, img 태그를 사용 (저장된 이미지 / 이미지 url)

- img 태그를 통해 직접적으로 이미지를 불러 올 수 있다.

```html
<img src="{저장된 이미지 주소}" />

<img src="{이미지 링크}" />
```

##### 둘, css 백그라운드 이미지 (저장된 이미지 / 이미지 url)

- div등의 태그의 배경화면으로 설정하여 불러 올 수 있다.
- 만약 body등에 배경화면 이미지를 넣을때 작은 이미지를 넣을 경우, 기본값은 '반복'이므로 주의하여 설정한다.

```html
<div class="bg"></div>
```

```css
bg {
  width: 300px;
  height: 400px;
  background-image: url('{저장된 이미지 주소 or 이미지 링크}');
}
```
