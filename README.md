# ts-react-test

Need to learn some Typescript and React.

I'm primarily using [this site](http://blog.mgechev.com/2015/07/05/using-jsx-react-with-typescript/) to get started.

1. I used `npm init` to create my package.json
2. Because I'm using typescript, need to install it.
```
    npm install -g typescript typings browserify http-server
```
3. I believe this is the proper way of doing things - 
```
    npm install --save react react-dom
    typings install --save --ambient react react-dom
```
4. Build:
```
    tsc --jsx react --module commonjs ./app/test.tsx
```
5. Browserify for getting client scripts to work:
```
    browserify app/test.js -o bundle.js
```
6. Use http-server to test:
```
    http-server
```
