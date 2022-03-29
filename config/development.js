module.exports = {
    mysql: {
      // 測試伺服器
      host: '127.0.0.1',
      port: '3306',
      user: 'your-database-username',
      password: 'your-password',
      database: 'your-database-name',
      waitForConnections: true,
      connectionLimit: 50,
      queueLimit: 0
    }
  }