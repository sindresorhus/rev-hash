/**
Create a hash for file revving.

@param data - The data to create a hash from.

@example
```
import fs from 'node:fs';
import revisionHash from 'rev-hash';

revisionHash(fs.readFileSync('unicorn.png'));
//=> 'bb9d8fe615'

revisionHash('Lorem ipsum dolor sit amet');
//=> 'fea80f2db0'
```
*/
export default function revisionHash(data: Uint8Array | string): string;
