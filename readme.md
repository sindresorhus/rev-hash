# rev-hash [![Build Status](https://travis-ci.org/sindresorhus/rev-hash.svg?branch=master)](https://travis-ci.org/sindresorhus/rev-hash)

> Create a hash for file revving

It will create an `md5` hash from an input buffer or string, and truncate it to 10 characters, which is unique enough for this purpose.

If you think you need a different hash algorithm or a longer hash, [you're wrong](http://blog.risingstack.com/automatic-cache-busting-for-your-css/).


## Install

```
$ npm install --save rev-hash
```


## Usage

```js
var fs = require('fs');
var revHash = require('rev-hash');
var buffer = fs.readFileSync('unicorn.png');

revHash(buffer);
//=> 'bb9d8fe615'

revHash(revableContentString);
//=> '9e107d9d37'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
