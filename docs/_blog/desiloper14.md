---
title: 센터 본능
date: 2022-05-03 09:00:00
tags:
  - 디발자
  - 코딩하는디자이너
  - 우당탕탕
  - html
  - css
author: ella
featuredimg: '/assets/img/desiloper/desiloper14.png'
summary: 가운데로 정렬해봐요
---

(위 사진) **Before** >> **After**

이전 게시글(<a href="https://ellapresso.github.io/2022/05/03/desiloper13/">링크</a>)의 이미지와 동일한 상태 (위 이미지의 왼쪽)에서 모든 css를 제거한 다음 진행합니다.

<br>

**텍스트 또는 한 컴포넌트를 중앙으로 옮기는 방법에는 뭐가 있을까?**

<br>

#### 1. div에 여백을 줘보자

```css
div {
  ...
  padding-top: 50px;
}
```

이 경우 div에 설정해 놓은 height 100px에 padding이 들어가게 되면서, div의 높이가 달라지게 된다.

#### 2. line height를 적용해보자

```css
div {
  ...
  line-height: 68px;
}
```

이 경우 p태그의 텍스트 줄 높이를 설정해주는 것이므로, p태그에 기본으로 적용되어있는 margin값을 더한다음, div높이에서 뺀 높이를 적용 해 줘야 한다.

100 - (16 + 16) **즉,** div 높이 - (p태그 상단 마진 + p태그 하단 마진)

<img src="/assets/img/desiloper/desiloper14_01.png"> << `tip. 개발자도구 이용`

만약 그 높이보다 더 큰 숫자로 설정하게 될 경우,

텍스트 범위가 div를 넘어가게 되면서 원하는대로 텍스트가 가운데에 오지 않고,

css가 일그러지게 될 수 있다.

#### 3. flex 해버리자

```css
div {
  ...
  display: flex;
}
```

**display: flex**를 적용하고 나면, 만약 이전 게시글에서 css를 지우지 않고 넘어왔더라도 아마 모든 텍스트가 상단 좌측 이미지 처럼 좌측에 나열됨을 볼 수 있을 것이다.

**align-items**와 **justify-content**를 적용해주기 위해서는 반드시 선언해 줘야하는 속성으로, 더 유동적이고 유연하게 css를 적용 할 수 있게 해준다.

```css
div {
  ...
  align-items: center;
}
```

align-items를 적용해주면 세로측 중앙에 정렬이 되어서 자동으로 가운데에 위치하게 된다.

그럼 마지막으로 가로측 중앙에 정렬해보자.

```css
div {
  ...
  justify-content: center;
}
```

상단 우측의 이미지처럼 나오면 끝이다.
