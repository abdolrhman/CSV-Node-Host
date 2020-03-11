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
}

module.exports = Db;
