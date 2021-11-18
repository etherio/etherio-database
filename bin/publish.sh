#!/bin/bash

package_json='package.json'
version=$(cat $package_json | grep version | cut -d ' ' -f 4 | cut -d '"' -f 2)
mode=${1:-'patch'}

echo

sleep 1
echo ">> Deleting v${version}"
yarn clean

sleep 1

echo ">> changing semantic version $version to $next_version"
next_version=$(npx semver $version -i $mode)
package_raw=$(cat $package_json)
package_raw=$(echo ${package_raw/"$version"/"$next_version"})
echo $package_raw | npx json > $package_json

sleep 1

echo
echo ">> Building v$version"
yarn build

sleep 1

echo
echo ">> Pushing v$version to Github"
git add --all
git commit -m "[publish:$mode]"
git tag v$next_version
git push origin master --tag v$next_version

sleep 1

echo ">> Publishing package v$version to npm"
npm publish --access public
