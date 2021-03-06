
查看MySQL数据库的编码

```sql
	mysql> SHOW VARIABLES LIKE 'character_set_%';
	+--------------------------+---------------------------------------------------------+
	| Variable_name            | Value                                                   |
	+--------------------------+---------------------------------------------------------+
	| character_set_client     | gbk                                                     |
	| character_set_connection | gbk                                                     |
	| character_set_database   | latin1                                                  |
	| character_set_filesystem | binary                                                  |
	| character_set_results    | gbk                                                     |
	| character_set_server     | gbk                                                     |
	| character_set_system     | utf8                                                    |
	| character_sets_dir       | C:\Program Files\MySQL\MySQL Server 5.5\share\charsets\ |
	+--------------------------+---------------------------------------------------------+
	8 rows in set (0.00 sec)

	mysql> SHOW VARIABLES LIKE 'collation_%';
	+----------------------+-------------------+
	| Variable_name        | Value             |
	+----------------------+-------------------+
	| collation_connection | gbk_chinese_ci    |
	| collation_database   | latin1_swedish_ci |
	| collation_server     | gbk_chinese_ci    |
	+----------------------+-------------------+
	3 rows in set (0.00 sec)
```

查看MySQL基本配置	mysql> \s

```sql
	mysql> \s
	--------------
	C:\Program Files\MySQL\MySQL Server 5.5\bin\mysql.exe  Ver 14.14 Distrib 5.5.25a, for Win32 (x86)

	Connection id:          11
	Current database:
	Current user:           root@localhost
	SSL:                    Not in use
	Using delimiter:        ;
	Server version:         5.5.25a MySQL Community Server (GPL)
	Protocol version:       10
	Connection:             localhost via TCP/IP
	Server characterset:    gbk
	Db     characterset:    gbk
	Client characterset:    gbk
	Conn.  characterset:    gbk
	TCP port:               3306
	Uptime:                 46 min 46 sec

	Threads: 1  Questions: 76  Slow queries: 0  Opens: 35  Flush tables: 1  Open tab
	les: 1  Queries per second avg: 0.027
	--------------
```

通过MySQL命令行修改：(编码可选)

```sql
mysql> set character_set_client=utf8;
mysql> set character_set_connection=utf8;
mysql> set character_set_database=utf8;
mysql> set character_set_results=utf8;
mysql> set character_set_server=utf8;
mysql> set character_set_system=utf8;
mysql> set collation_connection=utf8;
mysql> set collation_database=utf8;
mysql> set collation_server=utf8;
```

### 修改数据库的字符集

```sql
mysql> use mydb;
mysql> alter database mydb character set utf8;
```

### 创建指定字符集的数据库

```sql
mysql> create database mydb character set utf8;
```

### 修改表的字符集

```sql
mysql> alter table type character set utf8;
```

### 创建指定字符集的表

```sql
mysql> create table type(...) default charset=utf8;
```

### 修改字段的字符集

```sql
mysql> alter table type modify type_name varchar(50) CHARACTER SET utf8;
```
	