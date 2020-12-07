const crypto = require('crypto');

// creating 256 bits keys for refresh and access tokens
const key1 = crypto.randomBytes(32).toString('hex');
const key2 = crypto.randomBytes(32).toString('hex');

console.table({key1, key2});