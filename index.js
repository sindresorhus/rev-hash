import crypto from 'node:crypto';
import {Buffer} from 'node:buffer';

export default function revisionHash(data) {
	if (typeof data !== 'string' && !Buffer.isBuffer(data)) {
		throw new TypeError('Expected a Buffer or string');
	}

	return crypto.createHash('md5').update(data).digest('hex').slice(0, 10);
}
