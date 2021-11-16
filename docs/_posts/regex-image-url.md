---
title: 이미지 주소 정규식 으로 유효성 판별하기
date: 2021-04-19
tags:
  - develog
  - RegEx
  - tistory
  - image url
  - 크롤링
author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2020/05/25/17/21/link-5219567_1280.jpg'
summary: 크롤링 작업의 부산물
originlink: https://ellapresso.tistory.com/114
---

웹 크롤링 도중 발생한 이슈이다.
각 사이트의 이미지 주소를 크롤링하다 보면 이미지 주소의 형태가 각기각색이다.
처음부터 잘 판별하여 긁어오면 좋겠지만,
누군가 작업해 둔 이후 결과물을 다시 유효성 검사를 통해 다듬는 과정에서 삽질한 내역이다.

<hr>


검색으로 찾은 url 정규식 가져와서 고쳐쓰기

```
예시 링크

1) https://www.naver.comhttps://naver.com
2) www.naver.com/img/images/products/12345/13131313?ss_key=ASDF2QWERU.2QWER3M
3) http://www.naver.comhttp://www.naver.com/img/images/products/12345/13131313?ss_key=ASDF2QWERU
4) www.daum.co.kr/web/prod/small/202/221d7613b7935c4c30e4df13f.jpg
```

 <hr>


정규식 고쳐가기


``
(http(s)?\:\/\/)?([a-z0-9-:\w]+\.*)+[a-z0-9]{2,4}([\/])([\/a-z 0-9-%#?&\.=\w])*(\.[a-z]{2,4})*
``

``
(http(s)?\:\/\/)?([a-z0-9-:\w]+\.*)+[a-z0-9]{2,4}(:[0-9])?([\/])([\/a-z 0-9-%#?&\.=\w])*(\.[a-z]{2,4})*
``

``
(http(s)?\:\/\/)?([a-z0-9-:\w]+\.*)+[a-z0-9]{2,4}(:\d)?([\/])([\/a-z 0-9-%#?&\.=\w])*(\.[a-z]{2,4})*
``

``
(http(s)?\:\/\/)?([a-z0-9-:\w]+\.*)+[a-z\d]{2,4}(:\d)?([\/])([\/ -%#?&\.=\w])*(\.[a-z]{2,4})?
``

``
(http(s)?\:\/\/)?([-:\w]+\.*)+[a-z\d]{2,4}(:\d)?([\/ \-%#?&\.=\w])*
``
<hr>


https://www.naver.comhttps://naver.com  같이 똥같을때 



정규식 고쳐가기



앞부분 url만 매칭(뒤의 https까지 매칭되버림)

``
(http(s)?\:\/\/)(?!\1)?([-:\w]+\.*)+[a-z\d]{2,4}(:\d)?([\/ \-%#?&\.=\w])*
``