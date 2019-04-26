import {expectType} from 'tsd';
import revisionHash = require('.');

expectType<string>(revisionHash('Lorem ipsum dolor sit amet'));
expectType<string>(revisionHash(Buffer.from('Lorem ipsum dolor sit amet')));
