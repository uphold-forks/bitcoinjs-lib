const createHash = require('create-hash');
const x11hash = require('@dashevo/x11-hash-js');

export function ripemd160(buffer: Buffer): Buffer {
  try {
    return createHash('rmd160')
      .update(buffer)
      .digest();
  } catch (err) {
    return createHash('ripemd160')
      .update(buffer)
      .digest();
  }
}

export function sha1(buffer: Buffer): Buffer {
  return createHash('sha1')
    .update(buffer)
    .digest();
}

export function sha256(buffer: Buffer): Buffer {
  return createHash('sha256')
    .update(buffer)
    .digest();
}

export function hash160(buffer: Buffer): Buffer {
  return ripemd160(sha256(buffer));
}

export function hash256(buffer: Buffer): Buffer {
  return sha256(sha256(buffer));
}

export function x11(buffer: Buffer): Buffer {
  return Buffer.from(x11hash.digest(Buffer.from(buffer), 1, 0), 'hex');
}
