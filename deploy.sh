#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'devdocs.codenom.com' > CNAME

git init
git add -A
git commit -m 'Deploy docs to GitHub'
git push -f git@github.com:codenomdev/bantucms-docs.git master:gh-pages

cd -