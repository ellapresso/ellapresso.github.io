#!/usr/bin/env sh

# abort on errors
set -e

# push main branch
git add -A
git commit -m '[ADD] post'
git push

# build
npm run docs:build

cp ads.txt docs/.vuepress/dist/ads.txt
# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
# git branch main
# git checkout main
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ellapresso/ellapresso.github.io.git main:gh-pages

cd -