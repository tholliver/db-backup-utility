const { exec } = require('child_process')
const { program } = require('commander')

program.version('1.0.0').description('Database backup tool')

program
  .command('backup')
  .description('Backup database')
  .action(() => {
    const command = ''

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`Error during backup: ${error.message}`)
        return
      }
      if (stderr) {
        console.error('Stderr during backup', stderr)
        return
      }
      console.log('Backup sucessful: ', stdout)
    })
  })
