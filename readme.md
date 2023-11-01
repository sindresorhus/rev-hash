# rev-hash

> Create a hash for file revving

It will create an `md5` hash from an input buffer or string, and truncate it to 10 characters, which is unique enough for this purpose.

If you think you need a different hash algorithm or a longer hash, [you're wrong](https://blog.risingstack.com/automatic-cache-busting-for-your-css/).

## Install

```sh
npm install rev-hash
```

## Usage

```js
import fs from 'node:fs';
import revisionHash from 'rev-hash';

revisionHash(fs.readFileSync('unicorn.png'));
//=> 'bb9d8fe615'

revisionHash('Lorem ipsum dolor sit amet');
//=> 'fea80f2db0'
```

## API

### revisionHash(input)

#### input

Type: `Uint8Array | string`

The data to create a hash from.
