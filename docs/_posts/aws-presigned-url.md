---
title: 프론트에서 이미지 s3 업로드 하기
date: 2023-01-19
tags:
  - develog
  - aws
  - presigned url
  - createPresignedPost
author: ella
featuredimg: '/assets/img/aws-presigned-url-01.png'
summary: 서버는 url만 줄거에요
---

1. 클라이언트가 서버에 presigned url 요청
2. 서버가 aws에 presigned url 요청
3. 서버가 클라이언트에 응답 값 전달
4. 전달받은 값으로 클라이언트가 aws에 직접 업로드
5. 서버에 업로드 완료/실패 전달

<br>

<hr>

용량이 큰 이미지를 업로드 할 경우 서버가 받는 부담을 줄이고, 이미지 업로드 완료 시점을 클라이언트가 컨트롤 하기 위한 방법으로 presigned url을 도입하였다.

aws s3에 업로드를 하기 위해서는 정확한 url이 필요하며, 버킷주소와 업로드 될 객체(이미지) 이름까지 미리 지정되어 있어야 한다고 이해하는게 편하다.

<hr>

### 1. 클라이언트가 서버에 presigned url 요청

서버에 이미지와 함께 업로드 되어야 하는 데이터를 전송하며, s3에 업로드하기 위한 권한을 요청한다.

### 2. 서버가 aws에 presigned url 요청

aws s3에 저장되는 이미지의 경우, 파일명이 동일하면 새로 생성되는것이 아니라 덮어쓰기가 된다.

따라서 클라이언트에서 이미지 이름을 전달 받았더라도, 서버에서 별도로 관리하는것을 권장한다.

```js
const AWS = require('aws-sdk')
AWS.config.update({
  accessKeyId: `${ACCESS_KEY_ID}`,
  secretAccessKey: `${ACCESS_KEY}`,
  region: `${REGION}`,
})
const s3 = new AWS.S3();

const presingedUrl = await s3.createPresignedPost({
  Bucket: `${bucket}`,
  Expires: 600, // 권한 만료 시간
  Fields: {
    key: `${설명1}`,
    'Content-Type': `${업로드 될 이미지의 contentType}`,
  },
  Conditions: [
    ['starts-with', '$key', `${설명2}`],
    ['content-length-range', 0, `${업로드 할 이미지의 허용 최대 값}`],
    ['starts-with', '$Content-Type', `${설명3}`],
    { 'x-amz-algorithm': `${사용 할 알고리즘}` },
  ],
})
```

###### 설명1

업로드 될 이미지의 버킷 내 객체 주소: 버킷내의 image폴더 안에 저장하려고 한다면, `/image` 라고 넣으면 된다.

###### 설명2

실제로 클라이언트에서 업로드 할 때, 키값이 맞는지 유효성 체크를 하기 위한 값이다.

starts-with는 key값이 ~로 시작해야 한다는 의미이다.

###### 설명3

_설명2_ 참고. 보통 `/image` 또는 `/video`를 사용하는듯.

<details>
  <summary>참고 링크</summary>
  <div markdown="1">
    1. 객체 키 (이름) 유의 사항 (<a href="https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/object-keys.html">링크</a>)
  </div>
    <div markdown="2">
    2. 미리 서명된 URL을 생성하여 객체 업로드 (<a href="https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/PresignedUrlUploadObject.html">링크</a>)
  </div>
</details>

### 3. 서버가 클라이언트에 응답 값 전달

위 코드에서 전달받은 `presingedUrl`을 클라이언트에 전달 한다.

presingedUrl은 실제 url이 아니고, 업로드 할 수 있도록 권한을 부여한 객체에 대한 정보라고 보면 된다.

aws가 발급한 presingedUrl 예시:

```json
{
  "fields": {
    "key": "",
    "Content-Type": "",
    "bucket": "",
    "X-Amz-Algorithm": "",
    "X-Amz-Credential": "",
    "X-Amz-Date": "",
    "Policy": "",
    "X-Amz-Signature": ""
  }
}
```

### 4. 전달받은 값으로 클라이언트가 aws에 직접 업로드

위 필드 값을 body에 넣어 클라이언트가 직접 s3에 업로드 하면 된다.
업로드 url은 버킷url이다.

### 5. 서버에 업로드 완료/실패 전달

클라이언트에서 업로드가 완료/실패 하면, 서버에 이미지 업로드 결과를 알린다.

서버는 완료요청을 받을 경우, 미리 받은 데이터들을 저장하거나 실패한 경우 이미 업로드한 이미지를 지우는 등의 행동을 할 수 있다.
