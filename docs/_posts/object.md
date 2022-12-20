---
title: 자바스크립트 객체 접근자
date: 2022-11-17 12:00:00
tags:
  - javascript
  - object
  - 속성 접근자
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2020/04/20/04/02/brick-5066286_960_720.jpg'
summary: 괄호는 되는데 .는 안될 때
---

sequelize객체에서 특정 속성을 부르기 위해 .을 사용하여 접근했는데 데이터가 나오지 않았음.
계속 뭔가 이상하다면서 삽질을 하다가, 접근방법을 바꾸어서 []로 했더니 잘 나옴

찾아보니 Symbol등은 Object 객체에 접근할 때 자바스크립트 식별자가 아니므로 점 표기법으로 접근 할 수 없다.
