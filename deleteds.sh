#!/usr/bin/env sh
while find . -name ".DS_Store" -exec  ls {} \;

do

echo "delete .DS_Store"
find . -name ".DS_Store" -exec  rm -f {} \;
sleep 3600

done
