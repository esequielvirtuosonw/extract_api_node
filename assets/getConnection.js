const { Pool } = require('pg')
pgAccess = require('../config/config').postgreSql

const pool = new Pool(pgAccess)

module.exports = pool