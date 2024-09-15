const { exec } = require('child_process')
const { program } = require('commander')
const getFormatedDate = require('./utils')
const { databaseSelected } = require('./db/index.js')
// const readline = require('readline')

program
  .version('0.0.1a')
  .description('Database Backup and Restore CLI')
  .helpOption(true)

program
  .command('backup')
  .description('Backup the database')
  .option('-db, --db <db>', 'Database system')
  .option('-h, --host <host>', 'Database host (default: localhost)')
  .option('-u, --user <user>', 'Database user (ie: root, postgres)')
  .option('-pw, --password <password>', 'Database password')
  .option('-p, --port <port>', 'Database port (ie: 5432)')
  .option('-d, --database <database>', 'Database name')
  .action((options) => {
    const { db, host, user, port, password, database } = options

    const dirName = 'backups'

    if (!database) {
      console.error('Database name is required for backup.')
      return
    }
    const backupTimestamp = getFormatedDate()

    const dbInstance = databaseSelected(
      db,
      user,
      database,
      password,
      host,
      port
    )

    const command = `${dbInstance.binaries()} "host=${dbInstance.host} port=${
      dbInstance.port
    } dbname=${dbInstance.database} user=${dbInstance.user} password=${
      dbInstance.password
    }" > ${dirName}/DUMP_${backupTimestamp}.sql`

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during backup: ${error.message}`)
        return
      }
      if (stderr) {
        console.error(`Stderr during backup: ${stderr}`)
        return
      }
      console.log('Backup successful:', stdout)
    })
  })

program.parse(process.argv)
