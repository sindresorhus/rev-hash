import {Buffer} from 'node:buffer';
import {expectType} from 'tsd';
import revisionHash from './index.js';

expectType<string>(revisionHash('Lorem ipsum dolor sit amet'));
expectType<string>(revisionHash(Buffer.from('Lorem ipsum dolor sit amet')));
