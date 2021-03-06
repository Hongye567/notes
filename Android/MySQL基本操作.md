
MySQL表格的增删改查

注：如果没有进入数据库，表名可以使用 数据库名.表名 代替

## 一、数据库的操作

### 1、查询	查询已有数据库

```sql
show databases;
```

### 2、增加	创建新的数据库

```sql
create database [if not exists] 数据库名;	
```

不可创建已经存在的数据库

方括号部分可写可不写，如果不确定该数据库是否存在可加上

### 3、删除

```sql
drop database [if exists] 数据库名;
```

不可删除不存在的数据库

### 4、更改

严格意义上说是没有更改的，但我们可以先创建一个空的数据库，然后将原有数据库中的表移动到新的数据库中，再删除原有的数据库就好了

```sql
create database 新数据库名;
show tables from 原数据库名;
alter table 原数据库名.表名 rename 新数据库名.表名;
drop database 原数据库名;
```

## 二、表的操作

### 1、查询

1)查询某书库中已有表

```sql
show tables;
```

2)查询某表的数据结构

```sql
describe/desc 表名;
show columns from 表名 [from 数据库名];
```

3)查询表中数据

```sql
select *from 表名;
```

### 2、增加

1)对表中列的操作

```sql
alter table 表名 add 列名 类型;
```

2)对表中数据的操作

a)	
```sql
insert into 表名 [(列名1,列名2,...列名n)] values (值表达式1,值表达式2,...值表达式n);
```

可一次性多行

```sql
insert into 表名 [(列名1,列名2,...列名n)] values (值表达式11,值表达式12,...值表达式1n),
						(值表达式21,值表达式22,...值表达式2n),
						...
						(值表达式n1,值表达式n2,...值表达式nn);
```

注：值表达式的类型必须与前面列名保持一致

b)	
```sql
insert into 表名 set 列名1=值表达式1,列名2=值表达式2,...列名n=值表达式n;
```

c)	
```sql
insert into 表名1 [(列名1,列名2,...)] select {*|列名1,列名2,...} from 表名2
```

### 3、删除

1)对表中列的操作

```sql
alter table 表名 drop 列名;
```

2)对表中数据的操作


a)	
```sql
delete from 表名 [where 条件语句];
```

注：如果不添加方括号中内容，则直接删除表中所有数据

b)	
```sql
truncate 表名;
```

### 4、更改

1)更改表名

```sql
alter table 旧表名 rename 新表名;
```

2)对表中列的操作

a)更改列名

```sql
alter table 表名 change 旧列名 新列名 类型;
```

b)更改列的类型

```sql
alter table 表名 modify 列名 类型;
```
					
3)更改表中数据

```sql
update 表名 set 列名=新值表达式 [where 条件语句];
```

注：如果不添加方括号中内容，则更改整列的数据
