const express = require('express');
const router = express.Router();
const transformer = require('../modules/transformer');

/**
 * Main Route
 * @req obj
 * @res obj
 * @return ObjMap - filtered csv data
 */
router.get('/', async function(req, res, next) {
  const query = req.query;
  let data = await transformer(__dirname + '/../modules/Dataset.csv');
  if (query) {
    data = await data.find(query);
  }
  res.send({ data }).status(200);
});

/**
 * Fuzzy/Free Search
 * @req obj
 * @res obj
 * @return ObjMap - filtered csv data
 */
router.get('/freeTxt', async function(req, res, next) {
  const query = req.query;
  let data = await transformer(__dirname + '/../modules/Dataset.csv');
  if (query) {
    data = await data.fuzzyFind(query);
  }
  res.send({ data }).status(200);
});

module.exports = router;
