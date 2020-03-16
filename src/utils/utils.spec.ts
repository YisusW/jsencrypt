// import {Base64} from './base64';
import {BitOperations} from './bitOperations';

class Base64 {
  constructor(private bitOperations: BitOperations) {}
  hex2b64(s: string) {
    return s;
  }
}

describe('Utils Test section', () => {
  describe('Base 64', () => {
    const base64 = new Base64(new BitOperations());

    it('method hex2b64', () => {
      const stringTohexa = '123456';
      const resultSpect = base64.hex2b64(stringTohexa);
      expect(resultSpect).toEqual('sd');
    });
  });
});
