'use strict';

require('dotenv').config({ path: '../../../.env' });
const index = require('./index');

(async () => {
  try {
    const result = await index.handler({}, {});
    console.log('results', result);
    process.exit();
  } catch (err) {
    console.log('Error', err);
  }
})();