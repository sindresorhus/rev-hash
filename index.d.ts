import {Buffer} from 'node:buffer';

/**
Create a hash for file revving.

@param data - The data to create a hash from.
@param size - The size of the generated hash, default 10, maximum 32

@example
```
import fs from 'node:fs';
import revisionHash from 'rev-hash';

revisionHash(fs.readFileSync('unicorn.png'));
//=> 'bb9d8fe615'

revisionHash('Lorem ipsum dolor sit amet');
//=> 'fea80f2db0'

revisionHash('Lorem ipsum dolor sit amet', 16);
//=> 'fea80f2db003d4eb'
```
*/
export default function revisionHash(data: Buffer | string, size?: number): string;
