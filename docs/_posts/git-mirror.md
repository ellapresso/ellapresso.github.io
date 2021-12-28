---
title: git 저장소 히스토리까지 이전하기
date: 2021-12-28 17:00:00
tags:
  - develog
  - git
  - git history
author: ella
featuredimg: 'https://miro.medium.com/max/2400/1*iqg8cuVlhPAshz_L84PDqg.png'
summary: 내 커밋이력 소듕해
---

코드 저장소를 옮기면서, 커밋 이력까지 모조리 옮기고 싶은 경우가 종종 있다.

보통은 가장 최신 이력의 상태로 가져가버리는 경우도 많은데,

히스토리 관리를 위해서 전부 가져가는것은 생각보다 쉽다.

우선 기존 사용하고 있던 저장소를 clone 한다. (또는 clone받아 사용중인 디렉토리로 들어간다.)

그리고 새로운 remote (이동할 저장소)를 연결 해 준다.

그럼 현재 위치의 디렉토리에 `git remote`라고 명령어를 쳐보면 두개의 원격 저장소가 나온다.

하나는 기존 원격저장소 (A) , 하나는 새로운 원격 저장소 (B).

우선 A를 pull받아 최신화 된 상태라고 가정하고,

`git push --mirror B`를 실행하면 끗......

깰꼼하게 옮길 수 있다.