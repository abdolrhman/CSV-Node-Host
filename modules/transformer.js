const csvParse = require('csv-parse');
const fs = require('fs');
const { merge } = require('lodash');
const Db = require('./db');

/**
 * Load the CVS file and bind Db ORM
 * @param filePath
 * @param options
 * @return {Promise<Db>}
 */
function createFromFile(filePath, options = {}) {
  const db = new Db();

  const parser = csvParse(merge(options, { columns: true }));

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parser)
      .on('data', db.add.bind(db))
      .on('error', reject)
      .on('finish', () => resolve(db));
  });
}

module.exports = createFromFile;
