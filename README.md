react-ssr-optimization-demo
===========================

This repo shows how to use 'electrode-react-ssr-caching' with (or without) Webpack.

Usage
=====

```
npm install
NODE_ENV=production node index.js # run directly
webpack && NODE_ENV=production node build.js # run compiled webpack
```

Output
======

The output of the program verifies the caching is indeed working.

```
renderCount is 1
renderCount is 1
renderCount is 1
```
