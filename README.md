##  Database Backup Utility

A database backup utility that can backup and restore any DB. Check [Supported databases](#supported-databases). Here the full details: https://roadmap.sh/projects/database-backup-utility

<!-- 
[Ref](https://roadmap.sh/projects/database-backup-utility/solutions?u=66e6d423f34c8868ec615e2f): -->

### Previous to use the tool: 

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

## How to use

###  Backup Examples: 

In PostgreSQL:

```
node cli backup -db postgresql -h localhost --user pguser --password secretPass --port 5433 --database DummyDatabase
```

In MySQL:

```
node cli backup -db mysql -h localhost -u root -pw secretPass -p 3306 -d sakila
```

**Currently, the backup files are saved in the project's directory, inside the [backups] folder.**

###  Restore Examples: 

*FEATURE NOT AVAIABLE YET*

For more details: 

```
node cli -h

node cli.js backup --help
```

#### Supported databases

- MySQL 
- PostgreSQL
