#!/usr/bin/env sh

# abort on errors
set -e

# build
rm -rf dist
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/speier/isped.eu.git main:gh-pages

cd -
