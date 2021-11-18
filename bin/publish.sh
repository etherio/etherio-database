#!/bin/bash

version=$(cat package.json|grep version|cut -d ' ' -f 4)
mode=${1:-'patch'}

echo

sleep 1
echo ">> Deleting v${version:-'0.0.0'}"
yarn clean

sleep 1

next_version=$(npx semver ${version:-'0.0.0'} -i $mode)
echo ">> changing semantic version ${version:-'0.0.0'} to ${next_version}"

sleep 1

echo
echo ">> Building v$version"
yarn build

sleep 1

echo
echo ">> Pushing v$version to Github"
git add --all
git commit -m "[publish:$mode]"
git push origin master

sleep 1

echo ">> Publishing package v$version to npm"
npm publish --access public
