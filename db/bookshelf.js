var environment = process.env.NODE_ENV || 'development';
var knex = require('knex')(config);
var config = require('../knexfile.js')[environment];
bookshelf.plugin('registry');

module.exports = require('bookshelf')(knex);
