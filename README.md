[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=true)](http://www.apache.org/licenses/LICENSE-2.0)
![gitter](https://badges.gitter.im/Join%20Chat.svg)

![logo.jloads.com](https://logo.jloads.com/6/cover.png)

TODO:
https://www.npmjs.com/package/javascript-obfuscator
To install or update nvm, you can use the install script using cURL:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash


<!--
  Title: JavaScript Obfuscator
  Description: A powerful obfuscator for JavaScript and Node.js.
  Author: Timofey Kachalov
  -->

# JavaScript obfuscator

![logo](https://raw.githubusercontent.com/javascript-obfuscator/javascript-obfuscator/master/images/logo.png)

JavaScript Obfuscator is a powerful free obfuscator for JavaScript, containing a variety of features which provide protection for your source code.

**Key features:**
- variables renaming
- strings extraction and encryption
- dead code injection
- control flow flattening
- various code transformations
- and [more](#javascript-obfuscator-options)...

The example of obfuscated code: [github.com](https://github.com/javascript-obfuscator/javascript-obfuscator/blob/master/examples/javascript-obfuscator.js)

#### Online version:
[obfuscator.io](https://obfuscator.io)

#### Plugins:
* Webpack plugin: [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator)
* Webpack loader: [obfuscator-loader](https://github.com/javascript-obfuscator/obfuscator-loader)
* Gulp: [gulp-javascript-obfuscator](https://github.com/javascript-obfuscator/gulp-javascript-obfuscator)
* Grunt: [grunt-contrib-obfuscator](https://github.com/javascript-obfuscator/grunt-contrib-obfuscator)
* Rollup: [rollup-plugin-javascript-obfuscator](https://github.com/javascript-obfuscator/rollup-plugin-javascript-obfuscator)
* Weex: [weex-devtool](https://www.npmjs.com/package/weex-devtool)
* Malta: [malta-js-obfuscator](https://github.com/fedeghe/malta-js-obfuscator)
* Netlify plugin: [netlify-plugin-js-obfuscator](https://www.npmjs.com/package/netlify-plugin-js-obfuscator)

[![npm version](https://badge.fury.io/js/javascript-obfuscator.svg)](https://badge.fury.io/js/javascript-obfuscator)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjavascript-obfuscator%2Fjavascript-obfuscator.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjavascript-obfuscator%2Fjavascript-obfuscator?ref=badge_shield)
![Build Status](https://github.com/javascript-obfuscator/javascript-obfuscator/workflows/JavaScript%20Obfuscator%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/javascript-obfuscator/javascript-obfuscator/badge.svg)](https://coveralls.io/github/javascript-obfuscator/javascript-obfuscator)
[![Backers on Open Collective](https://opencollective.com/javascript-obfuscator/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/javascript-obfuscator/sponsors/badge.svg)](#sponsors)
[![xscode](https://img.shields.io/badge/Available%20on-xs%3Acode-blue?style=?style=plastic&logo=appveyor&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////////VXz1bAAAAAJ0Uk5T/wDltzBKAAAAlUlEQVR42uzXSwqAMAwE0Mn9L+3Ggtgkk35QwcnSJo9S+yGwM9DCooCbgn4YrJ4CIPUcQF7/XSBbx2TEz4sAZ2q1RAECBAiYBlCtvwN+KiYAlG7UDGj59MViT9hOwEqAhYCtAsUZvL6I6W8c2wcbd+LIWSCHSTeSAAECngN4xxIDSK9f4B9t377Wd7H5Nt7/Xz8eAgwAvesLRjYYPuUAAAAASUVORK5CYII=)](https://xscode.com/sanex3339/javascript-obfuscator)

#### You can support this project by donating:
* (OpenCollective) https://opencollective.com/javascript-obfuscator
* PayPal credit card [https://www.paypal.com/donate](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=javascript-obfuscator@yandex.ru&lc=US&no_note=0&item_name=Support+javascript-obfuscator&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted)
* PayPal https://www.paypal.me/javascriptobfuscator
* (Bitcoin) 1Nv2773RDNzodHDxuxaYkTvwBkYRHmPhnG

Huge thanks to all supporters!

#### *NOTE! the README on the master branch might not match that of the latest stable release!*

#### If you have a question, check this section first: [FAQ](#frequently-asked-questions)

## :warning: Important
##### Only obfuscate the code that belongs to you.

It is not recommended to obfuscate vendor scripts and polyfills, since the obfuscated code is 15-80% slower (depends on options) and the files are significantly larger.

## Installation

#### Using Yarn or NPM

Install the package with Yarn or NPM and add it to your `dependencies` or `devDependencies`:

```sh
$ yarn add --dev javascript-obfuscator
```
or
```sh
$ npm install --save-dev javascript-obfuscator
```

#### In a Browser

From CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/javascript-obfuscator/dist/index.browser.js"></script>
```

From `node_modules`:

```html
<script src="./node_modules/javascript-obfuscator/dist/index.browser.js"></script>
```

## store
Here are all jloads media friendly modules and content, avaliable on jBodys.com

+ [Welcome to GitHub Pages | www](http://www.jbodys.com/)


## Usage

```javascript
var JavaScriptObfuscator = require('javascript-obfuscator');


# jLoads - streaming application interface

## stay native and react faster!
only for old school javascript developers
+ JSON definition
+ native JS code over framework's
+ modularisation over refactoring

Are you for legacy code ready?

+ let's try with jLoads
     

## Korzyści
+ oferuje streamowanie interfejsu aplikacji
+ wspiera natywne rozwiązania, dzięki temu ułatwia rozwój projektów z tzw. kodem zastanym (legacy code)
+ stworzony dla programistów szukających prostych rozwiązań nastawionych na utrzymanie starszych aplikacji
+ zorientowany na modularyzację oraz płaską ale rozproszoną strukturę projektu
+ wspiera proces refaktoryzacji, modularyzacja pozwala na szybkie wdrożenie, dając gwarancję zgodnego, bo natywnego kodu na dekady
+ modularyzacja pozwala na stosowanie najnowszych rozwiązań i ominięcie pułapek stojących za frameworkami z ich aktualizacją
Obecnie rozwiązanie jLoads dotyczy frontendu, ale trwają pracę nad wykorzystaniem NodeJS do wsparcia backendu, co pozwoli na uruchomienie kodu bez opóźnieniea wynikającego z ładowania plików po załadowaniu strony.



[![Github](https://img.shields.io/github/followers/jloads?label=Follow&style=social)](https://github.com/jloads)

- 🔭 I’m currently working on Softreck Projects
I'm Tom ... some backend developer mostly focused on PHP, JAVA, JavaScript, Python, Bash
I am here to improve to share my ideas in interface application streaming
Feel free to use my code, I spent many hours to give my ideas life, but it's still not perfect, don't hesitate to improve the code and use it to your own projects!
- 💬 Ask me about home education


## [Dokumentacja jLoads](https://docs.jloads.com)
+ [All projects on github](https://github.com/jloads/)
+ [zmiany w projekcie changelog.md](changelog.md)

## Poniżej znajduje sie lista submodułów ładowanych w tym projekcie poprzez skrypty: 
    clone.sh
    pull.sh 
    push.sh

Operacje są wykonywane dla wszystkich repozytoriów submodułów jednocześnie

## Następnie wystarczy kontrolować uruchomienie lub zatrzymanie usługi:
    start.sh
    stop.sh


## Submoduły wchodzące w skład projektu [jloads](https://github.com/jloads/jloads)

+ [github.com/jloads/src - kod źródłowy](https://github.com/jloads/src/)

+ [get/ - zminimalizowany kod źródłowy](https://get.jloads.com/)
    + [github.com/jloads/get](https://github.com/jloads/get/)

+ [build/ - skrypty do minimalizowania](https://get.jloads.com/)
    + [github.com/jloads/build](https://github.com/jloads/get/)

+ [examples/ - przykładowe strony html z użyciem jloads](https://examples.jloads.com/)
    + [github.com/jloads/examples](https://github.com/jloads/examples/)
   
+ [github.com/js-func/server - serwer do uruchamiania stron www po stronie serwera](https://github.com/js-func/server)




# Przykładowe MVP
implementacja MVP z biblioteką jLoads

### Proste przeładowanie tła, tekstu, grafiki
+ [get.jloads.com](https://get.jloads.com/)


### Formularz
+ [FaaS](https://www.faas.ovh/)
+ [faas-ovh/www: Website](https://github.com/faas-ovh/www)

### Edytor
+ [edit](https://edit.ovh/)
+ [plainedit/flat: Edit is an example on ovh domain](https://github.com/plainedit/flat)

### Aplikacja do nauki gramatyki
+ [www.gramatyka .de](https://www.gramatyka.de/)
+ [tom-sapletta-com/gramatyka-de: Nauka Gramatyki Niemieckiej poprzez matrycę](https://github.com/tom-sapletta-com/gramatyka-de)
