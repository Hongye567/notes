
## 修改表结构

### 增加列：

```sql
alter table 表名 add 列名 数据类型;
```

### 更改列名： 

```sql
alter table 表名 change 旧列名 新列名 数据类型;
```

### 更改数据类型：

```sql
alter table 表名 modify 列名 数据类型;
```

### 删除列： 

```sql
alter table 表名 drop 列名;
```

### 修改表名： 

```sql
alter table 旧表名 rename 新表名;
```

### 修改数据库名：

1，建新库 

```sql
create database 新库名;
```

2，

```sql
alter table 旧库名.旧表名 rename 新库名.新表名;
```

3，删除旧库;

### 查看表结构：

```sql
desc 表名;
```

### 查看建表语句: 

```sql
show create table 表名;
```

### 插入数据：

```sql
insert into 表名 [(列名1，列名2，....)] values(值1,值2,....);
insert into 表名 set 列名1=值1,列名2=值2,.... ;
insert into 表名 [(列名1，列名2，....)] values(值1,值2,....),(值1,值2,....);
```

### 修改数据：

```sql
update 表名 set 列名=新值,..... where 条件表达式 ;
```

### 删除数据：

```sql
delete from 表名 where 条件表达式;
truncate 表名;
```

## 数据完整性概念：

保证数据库里的数据尽可能保持一致，正确

### 分类：

域完整性：又可以成为列完整性 非空（not null）,default 

实体完整性： 又可以称为行完整性 主键（primary key） ,唯一键（unique）

参照完整性： 又可以称为引用完整性 外键（foreign key（列名））

## 创建主键的语法：

1，
```sql
create table 表名（列名 数据类型 primary key ,.....）;
```

2，
```sql
alter table 表名 add primary key（列名）;
```

3，
```sql
alter table 表名 add constraint pk primary key(列名);
```

4，
```sql
alter table 表名 modify 列名 数据类型 not null unique;
```

### 删除主键：

1，
```sql
alter table 表名 drop primary key ;
```

2，
```sql
alter table 表名 drop index 列名; 
```

### 创建非空，唯一键：

1，
```sql
create table 表名(列名 数据类型 unique,列名 数据类型 not null...);
```

2,
```sql
alter table 表名 modify 列名 数据类型 unique, 列名 数据类型 not null,.... ;
```

### 创建外键：

```sql
create table 表名(列名 数据类型, foreign key(列名) references 主表表名(列名));
alter table 表名 add foreign key(列名) references 主表表名(列名);
```

1,先建主表，而且与从表相关联的字段必须是唯一键或主键（班级表）

2,建立从表(学生表)

3，建立关联关系

 