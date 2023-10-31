import {Buffer} from 'node:buffer';
import {expectType} from 'tsd';
import revisionHash from './index.js';

expectType<string>(revisionHash('Lorem ipsum dolor sit amet'));
expectType<string>(revisionHash(new Uint8Array([1, 2, 3, 4, 5])));
expectType<string>(revisionHash(Buffer.from('Lorem ipsum dolor sit amet')));
