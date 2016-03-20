React JS (ES6 or ES2015) JSPM starter
=========

[![GitHub version](https://badge.fury.io/gh/MacKentoch%2Freact-es6-jspm-starter.svg)](https://badge.fury.io/gh/MacKentoch%2Freact-es6-jspm-starter)

This is a simple `ReactJS + ES6 + JSPM` starter with minimalist content.

**feature :** 

- ReactJS (> 0.14)
- ES6 (*or ES2015 as it is now called since recent time*)
- jspm (*System JS and jspm = speed of light workflow from zero*)
  - more information on using jspm with react : [in this nice article](http://egorsmirnov.me/2015/10/11/react-and-es6-part5.html) 
- babel (<6)
  - babel6 is a breaking change by itself. A new repo will be created soon with jspm-babel6.
  Right now (mid-december 2015) automatic `jspm init` will provide babel<6
- a simple hello world component (see : `./src/app/**`).



##Intallation :

*Be sure to have JSPM installed otherwise install it before :*
```bash
npm install jspm -g
```

**From root directory** : 

```bash
npm install && jspm install
```






##use as DEV  : 

1- start a server 

*Be sure to have jspm-server installed globally or install it :*
```bash
npm install -g jspm-server
```

**From root directory** : 

```bash
jspm-server
```
2- browser should open by itself, otherwise go `http://localhost:8080` 

>NOTE : index.html is the html configured for dev. See scripts tags where system js grab your raw jsx (magic comes from config and jspm packages) :

```html
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
		System.import('./src/app/main.jsx!');
</script>		
``` 



##use as PROD  : 

1- It doesn't need any server since application is bundled. Any server or just static html : `./index-PROD.html` is ok


>NOTE : application scripts are already bundled but if you need to bundle on your own, in terminal from root directory :

```bash
jspm bundle-sfx src/app/main.jsx! public/js/bundleFromJSPM.js --minify
```

>See script tag needed is just your bundle :

```html
<script src="./public/js/bundleFromJSPM.js"></script>
``` 


##License

The MIT License (MIT)

Copyright (c) 2016 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
