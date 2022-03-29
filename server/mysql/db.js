import mysql from 'mysql'
const config = require('config-lite')({
  filename: process.env.NODE_ENV,
  config_basedir: __dirname,
  config_dir: 'config'
})
const pool = mysql.createPool(config.mysql)
export default pool