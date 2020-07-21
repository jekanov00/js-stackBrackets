'use strict';

class Stack {
  constructor (maxSize = 10000) {
    this._size = 0;
    this._maxSize = maxSize;
  }

  get size () {
    return this._size;
  }

  push (value) {
    this[this._size++] = value;
    if (this.size >= this._maxSize) {
      throw new RangeError('Stack Overflow');
    }
    return this.size;
  }

  pop () {
    if (this.isEmpty) {
      return;
    }
    const value = this[--this._size];
    delete this[this.size];
    return value;
  }

  pick () {
    return this[this.size - 1];
  }

  get isEmpty () {
    return this.size === 0;
  }
}

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isRightBracketSequence (str) {
  if (str.length) {
    const brackets = new Stack();
    for (let elem of str) {
      if (elem === '(') {
        brackets.push(1);
      } else if (elem === '{') {
        brackets.push(2);
      } else if (elem === '[') {
        brackets.push(3);
      }
        if (elem === ')' && brackets.pick() === 1) {
          if (brackets.isEmpty){
            return false;
          }
          brackets.pop();
        } else if (elem === '}' && brackets.pick() === 2) {
          if (brackets.isEmpty){
            return false;
          }
          brackets.pop();
        } else if (elem === ']' && brackets.pick() === 3) {
          if (brackets.isEmpty){
            return false;
          }
          brackets.pop();
        } else if ([')', '}', ']'].includes(elem)) {
          return false;
        }
    }
    return brackets.isEmpty;
  } else {
    return false;
  }
}