#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy files from dist
cp -rf .vuepress/dist/ ./

git add .
git commit -m 'deploy'
git push
