'use strict';

import {Utils} from '../app.keys'

export class BitOperations {

  public int2char(n: number) {
    return Utils.BI_RM.charAt(n);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {number}
   */
  public op_and(x: number, y: number): number {
    return x & y;
  }

  /**
   * 
   * @param {number} x
   * @param {number} y
   * @return {number}
   */
  public op_or(x: number, y: number): number {
    return x | y;
  }

  /**
   * 
   * @param {number} x
   * @param {number} y
   * @return {number}
   */
  public op_xor(x: number, y: number): number {
    return x ^ y;
  }

  /**
   * 
   * @param  {number} x
   * @param  {number} y
   * @return {number}
   */
  public op_andnot(x: number, y: number): number {
    return x & ~y;
  }

  /**
   * @description index of lowest 1-bit in x, x < 2^31
   * @param {number} x
   * @return {number}
   */
  public lbit(x: number): number {
    if (x == 0) {
      return -1;
    }
    let r = 0;
    if ((x & 0xffff) == 0) {
      x >>= 16;
      r += 16;
    }
    if ((x & 0xff) == 0) {
      x >>= 8;
      r += 8;
    }
    if ((x & 0xf) == 0) {
      x >>= 4;
      r += 4;
    }
    if ((x & 3) == 0) {
      x >>= 2;
      r += 2;
    }
    if ((x & 1) == 0) {
      ++r;
    }
    return r;
  }

  /**
   * @description number of 1 bits in x
   * @param {number} x
   * @return {number}
   */
  public cbit(x: number): number {
    let r = 0;
    while (x != 0) {
      x &= x - 1;
      ++r;
    }
    return r;
  }

}
