import crypto from 'node:crypto';
import {types} from 'node:util';

export default function revisionHash(data) {
	if (typeof data !== 'string' && !types.isUint8Array(data)) {
		throw new TypeError('Expected a Uint8Array or string');
	}

	return crypto.createHash('md5').update(data).digest('hex').slice(0, 10);
}
