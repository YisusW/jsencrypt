'use strict';

const extendStatics = (d, b) => {
    const extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function(d, b) { d.__proto__ = b; }) ||
      function(d, b) { for (let p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
    return extendStatics(d, b);
  };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
