'use strict';

import {Utils} from '../app.keys';
import {BitOperations} from './bitOperations';

export class Base64 {

  constructor(private bitOperations: BitOperations) {}

  public hex2b64(h) {
    let i: number;
    let c: number;
    let ret = '';
    for (i = 0; i + 3 <= h.length; i += 3) {
      c = parseInt(h.substring(i, i + 3), 16);
      ret += Utils.b64map.charAt(c >> 6) + Utils.b64map.charAt(c & 63);
    }
    if (i + 1 === h.length) {
      c = parseInt(h.substring(i, i + 1), 16);
      ret += Utils.b64map.charAt(c << 2);
    } else if (i + 2 === h.length) {
      c = parseInt(h.substring(i, i + 2), 16);
      ret += Utils.b64map.charAt(c >> 2) + Utils.b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) {
      ret += Utils.b64pad;
    }
    return ret;
  }

  /**
   * @description convert a base64 string to hex
   * @param {string} s
   */
  public b64tohex(s: string) {
    let ret = '';
    let i: number;
    let k = 0; // b64 state, 0-3
    let slop = 0;
    for (i = 0; i < s.length; ++i) {
      if (s.charAt(i) === Utils.b64pad) {
        break;
      }
      const v = Utils.b64map.indexOf(s.charAt(i));
      if (v < 0) {
        continue;
      }
      if (k === 0) {
        ret += this.bitOperations.int2char(v >> 2);
        slop = v & 3;
        k = 1;
      } else if (k === 1) {
        ret += this.bitOperations.int2char((slop << 2) | (v >> 4));
        slop = v & 0xf;
        k = 2;
      } else if (k === 2) {
        ret += this.bitOperations.int2char(slop);
        ret += this.bitOperations.int2char(v >> 2);
        slop = v & 3;
        k = 3;
      } else {
        ret += this.bitOperations.int2char((slop << 2) | (v >> 4));
        ret += this.bitOperations.int2char(v & 0xf);
        k = 0;
      }
    }
    if (k === 1) {
      ret += this.bitOperations.int2char(slop << 2);
    }
    return ret;
  }

}
