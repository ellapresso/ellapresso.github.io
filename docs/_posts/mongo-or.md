---
title: 교집합을 제외한 리스트 뽑기
date: 2022-07-21
tags:
  - develog
  - mongodb
  - mongoose
  - nodejs
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2016/01/30/18/11/africa-1170243_1280.jpg'
summary: ... ㄴㅇㄱ
---

##### 예시 배열

```json
const documents = [
  { "yn": true, "cate": "animal", "name": "rabbit"},
  { "yn": false, "cate": "animal", "name": "rat"},
  { "yn": true, "cate": "animal", "name": "pig"},
  { "yn": false, "cate": "animal", "name": "bird"},
  { "yn": false, "cate": "color", "name": "pink"},
  { "yn": true, "cate": "color", "name": "black"},
  { "yn": false, "cate": "color", "name": "white"},
]
```

##### 문제

yn이 true이면서 cate가 animal이 아닌 목록을 빼야 한다.

##### 풀이

처음에는 그냥 아래와 같이 생각했다. (aggregate를 사용함)

```js
Document.aggregate([$match: {$and: [{"yn": {$ne : false}}, {"cate": {$ne: "animal"}}]}]);
or
Document.aggregate([$match: {$and: [{"yn": true}, {"cate": {$ne: "animal"}}]}]);
```

그런데도 결과값이 원하는대로 나오지 않았다.
$ne 대신 $not도 써 보았으나, 정규식을 작성해야 하므로 true나 false같은 Boolean값을 추려내가 어려웠다.

##### 정답

```js
Document.aggregate([$match: {$or: [{"yn": false}, {"cate": {$ne: "animal"}}]}]);
```
