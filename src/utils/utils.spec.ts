import {Base64} from '.';
import {BitOperations} from './bitOperations';

describe('Utils Test section', () => {
  describe('Base 64', () => {
    const base64 = new Base64(new BitOperations());

    it('method hex2b64', () => {
      const stringTohexa = '123456';
      const resultSpect = base64.hex2b64(stringTohexa);
      expect(resultSpect).toBe('');
    });
  });
});
