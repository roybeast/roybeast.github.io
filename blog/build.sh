#!/usr/bin/env bash

yarn react-scripts build || exit 1
for f in $(ls build); do
    mv build/$f ../$f
done
