##  Database Backup Utility

A database backup utility that can backup and restore any DB. Check [Supported databases](#suported-databases).
<!-- [Ref](https://roadmap.sh/projects/database-backup-utility/solutions?u=66e6d423f34c8868ec615e2f):
https://roadmap.sh/projects/database-backup-utility -->

### Previus to use the tool: 

Please ensure that the binaries for the database you wish to dump or restore are installed. If you already have a server running, verify that the binaries are included in your system's PATH.

[PostgreSQL](https://www.postgresql.org/download/)

[MySQL Community Edition](https://www.mysql.com/products/community/)

### How to install:

Make sure you have installed [Node.js](https://nodejs.org/en)

Open a command line: 

```
git clone https://github.com/tholliver/db-backup-utility.git

cd db-backup-utility

npm install 
```

## How tu use: 

###  Examples: 

Here a sample with PostgreSQL:

```
node cli backup -db postgresql -h localhost --user pguser --password secretPass --port 5433 --database DummyDatabase
```

For more details: 

```
node cli -h

node cli.js backup --help
```

#### Supported databases

- MySQL 
- PostgreSQL
