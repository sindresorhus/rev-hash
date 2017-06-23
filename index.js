'use strict';
var crypto = require('crypto');

module.exports = function (buf) {
	if ('string' != typeof buf && !Buffer.isBuffer(buf)) {
		throw new TypeError('Expected a buffer or string');
	}

	return crypto.createHash('md5').update(buf).digest('hex').slice(0, 10);
};
