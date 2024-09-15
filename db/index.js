class MySQL {
  constructor(user, database, password, host, port) {
    this.user = user || 'root'
    this.database = database
    this.password = password
    this.host = host || 'localhost'
    this.port = port || 3306
  }

  binaries() {
    return 'mysqldump'
  }
}

class PostgreSQL {
  constructor(user, database, password, host, port) {
    this.user = user || 'postgres'
    this.database = database
    this.password = password
    this.host = host || 'localhost'
    this.port = port || 5432
  }
  binaries() {
    return 'pg_dump'
  }
}

const dbCredentialSetter = {
  mysql: (
    user = 'root',
    database = 'defaultDB',
    password = '',
    host = 'localhost',
    port = 3306
  ) => new MySQL(user, database, password, host, port),

  postgresql: (
    user = 'postgres',
    database = 'defaultDB',
    password = '',
    host = 'localhost',
    port = 5432
  ) => new PostgreSQL(user, database, password, host, port),

  default: () => {
    console.error('Database type not recognized or specified.')
    return null
  },
}

const databaseSelected = (db, ...args) => {
  const setter = dbCredentialSetter[db] || dbCredentialSetter.default
  return setter(...args)
}

module.exports = { databaseSelected }
