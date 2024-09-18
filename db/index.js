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

  backupCommand(path, filename) {
    return `${this.dump()} > ${path}/${filename}.sql`
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

  backupCommand(path, filename) {
    return `${this.dump()} > ${path}/${filename}.sql`
  }
}

class MongoDB {
  constructor(user, database, password, host, port) {
    this.user = user || 'admin'
    this.database = database
    this.password = password
    this.host = host || 'localhost'
    this.port = port || 27017
  }
  binaries() {
    return 'mongodump'
  }

  dump() {
    return `${this.binaries()} -h ${this.host}:${this.port} -d ${
      this.database
    } -u ${this.user} -p ${this.password} -o ./`
  }

  backupCommand(path, filename) {
    return `${this.dump()} -o ./${path}`
  }
}

const dbCredentialSetter = {
  mysql: (
    user = 'root',
    database = '',
    password = '',
    host = 'localhost',
    port = 3306
  ) => new MySQL(user, database, password, host, port),

  postgresql: (
    user = 'postgres',
    database = '',
    password = '',
    host = 'localhost',
    port = 5432
  ) => new PostgreSQL(user, database, password, host, port),

  mongodb: (
    user = 'admin',
    database = '',
    password = '',
    host = 'localhost',
    port = 27017
  ) => new MongoDB(user, database, password, host, port),

  default: () => {
    console.error('Database type not recognized or specified.')
  },
}

const databaseSelected = (db, ...args) => {
  const setter = dbCredentialSetter[db] || dbCredentialSetter.default
  return setter(...args)
}

module.exports = { databaseSelected }
