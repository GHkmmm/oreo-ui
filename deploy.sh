rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:GHkmmm/oreo-ui-website.git &&
git push origin master -f &&
cd -
echo https://ghkmmm.github.io/oreo-ui-website