const { isObject, filter } = require('lodash');

/**
 * Db represent a basic ORM for our CSV
 */
class Db {
  constructor() {
    this.rows = [];
  }

  add(row) {
    if (!isObject(row)) {
      throw new Error('row must be an object');
    }
    this.rows.push(row);
  }

  find(predicate) {
    return Promise.resolve(filter(this.rows, predicate));
  }

  fuzzyFind(predicate) {
    const key = Object.keys(predicate)[0];
    const value = Object.values(predicate)[0];
    return Promise.resolve(
      this.rows.filter(o => {
        return o[key].includes(value);
      })
    );
  }
}

module.exports = Db;
