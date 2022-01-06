---
title: nginx 서버 띄우기
date: 2022-01-13 14:00:00
tags:
  - develog
  - pm2
  - nginx
  - nginx.conf

author: ella
featuredimg: 'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg'
summary: nginx 설정
---

아무 세팅도 되어있지 않은 서버에 하나씩 구성해보는 재미가 쏠쏠한 요즘..

오늘은 외부에 노출되지는 않더라도 허용된 접근 권한 내에서 브라우저에 작업한 앱을 띄우는것을 해 보았다.

`원하는 것 : 서버IP를 브라우저에 치면 사이트가 ta-da!`

## nginx 설정

1. nginx 설치.

2. /etc/nginx/nginx.conf 설정
  
  ```
  http {
    ...
    include /etc/nginx/sites-enabled/*;
  }
  ```

3. /etc/nginx/site-available/ 생성 및 설정
  
  위 경로에 설정파일을 생성한다.

  ```
  server {
    listen 80 default_server;
    listen [::]:80 default_server;
    index index.html;
    
    server_name  server-name;
    root /home/app;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        proxy_pass http://localhost:{{pm2로 띄운 port}};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
        proxy_read_timeout 240s;
    }
}
  ```

4. /etc/nginx/site-enable/ 생성 및 심볼릭 링크

```
  ln -s /etc/nginx/site-available/conffile /etc/nginx/site-enable/conffile
```

5. 방화벽 80 포트 Open

```
  # 80포트 설정
  firewall-cmd --zone=public --permanent --add-port=80/tcp
  # 변경사항 적용
  firewall-cmd --reload
  # 변경사항 확인
  firewall-cmd --zone=public --list-all
```

6. nginx test && reload

아래 명령어로 nginx 설정파일을 확인 한다.
```
nginx -t
```
문제가 없으면 재시작해준다.
```
systemctl restart nginx
```

일단 대충 복붙해 넣다가 성공은 휘뚜루마뚜루 되었는데 설정파일의 항목들이 나타내는게 뭔지, 어떻게 연결되어 있는지 좀 더 찾아 볼 필요가 있을 것 같다.