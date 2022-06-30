---
title: VSCode D2coding 폰트 적용하기
date: 2022-05-31
tags:
  - develog
  - vscode
  - D2coding
  - font
author: ella
featuredimg: 'https://user-images.githubusercontent.com/6773678/33363823-54504d84-d525-11e7-9b26-0d2b9aec53f9.png'
summary: feat. 네이버
---

<h3>
  <a href="https://github.com/naver/d2codingfont">D2coding 다운로드 링크</a>
</h3>

위 링크로 들어가서 Readme.md의 다운로드에서 받으면 된다.

각자 OS에 맞게 적용하면 되나, 여기서는 맥북 기준으로 작성한다.

다운로드받은 압축 파일을 풀고, `서체관리자`에서 해당 폰트들을 등록한다.

그 다음, vscode의 **Preferences**에서 **font**를 검색하고 `Editor: Font Family` 리스트의 맨 앞에 D2coding을 적어준다.

만약 합자(ligature)를 사용하고 싶다면  `Editor: Font Family` 리스트의 맨 앞에 **D2Coding ligature**만 적는다고 해서 적용되지 않는다.

 `Editor: Font Ligatures`에서 **setting.json**을 수정해줘야한다.

```json
{
  ...,
  "editor.fontLigatures": true,
}
```

설정파일을 저장하면 정상적으로 합자를 확인 할 수 있으며,

나는 폰트가 너무 작아보여서 폰트사이즈도 조금 키워서 사용하는 중이다.