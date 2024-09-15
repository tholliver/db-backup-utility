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

  dump() {
    return `${this.binaries()} -u ${this.user} -p${this.password} -h ${
      this.host
    } -P ${this.port} ${this.database}`
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

  dump() {
    return `${this.binaries()} "host=${this.host} port=${this.port} dbname=${
      this.database
    } user=${this.user} password=${this.password}"`
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
  },
}

const databaseSelected = (db, ...args) => {
  const setter = dbCredentialSetter[db] || dbCredentialSetter.default
  return setter(...args)
}

module.exports = { databaseSelected }
