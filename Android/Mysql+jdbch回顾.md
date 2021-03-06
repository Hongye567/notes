
## mysql

### 数据库，数据库管理系统：

数据库：存储数据的仓库

数据库管理系统：管理数据库的软件系统

数据模型：层次模型，网状模型，关系模型（Mysql）
  
### 数据类型：

数值型：

int , bigint,smallint,float,double,decimal

字符型：

char,varchar,text,blob

时间：

date ,time ,datetime ,timestamp

NULL：

null

### 数据库的基本操作：

登录数据库：`mysql -u用户名 -p密码`

查看数据库：`show databases ;`

创建数据库： `create database 数据库名;`

删除数据库： `drop database 数据库名;`

使用数据库： `use 数据库名;`

创建表:`create table 表名(字段名 数据类型,....);`

查看表：`show tables ;`

查看表结构：` desc 表名;`

查看建表语句：`show create table 表名;`

修改表结构：

增加列：`alter table 表名 add 列名 数据类型 ;`

删除列: `alter table 表名 drop 列名 ;`

修改列数据类型： `alter table 表名 modify 列名 数据类型 ;`

修改列名 : `alter table 表名 change 旧列名 新列名 数据类型 ;`

修改表名 : `alter table 旧表名 rename 新表名 ;`

修改数据库名 ：

1,建新库

2,`alter table 旧库名.旧表名1,旧库名.旧表名2 rename 新库名.新表名,新库名.新表名`

3,删除旧库

 插入语句：

`insert into 表名 [(字段名1,字段名2,...)] values(值1，值2,....);`

 `insert into 表名 set 字段名=值1，字段名=值2 .... ;`

`insert into 表名 [(字段名1,字段名2,..)] select * from 表名2 ;`

删除语句：

`delete from 表名 where 条件;`

`truncate 表名;`

更新语句：

`update 表名 set 字段名=值1 ,... where 条件 ;`

查询语句

基本查询语句语法：

```sql
select [字段名1，字段名2,...] from 表名
where 条件表达式
[group by ] 
[having ]
[order by {asc|desc}];
```

### 运算符：

比较运算符：

> \>,<,>=,<=,=,<>
in(值1,值2,值3....)
 between and
is null
like("表达式") %代表多个字符 _代表单个字符

逻辑运算符：

> and && 与 两边都为真时，结果为真
or || 或 两边有一边为真时，结果为真
 not ! 非 将表达式结果取反

聚合函数：

> count(*) 计算总数
sum(列名) 求和
avg(列名) 平均数
max(列名)/min(列名) 求最大/最小值

分组查询一般情况下和聚合函数一起使用，having 和 group by 一起使用，将分组后的结果进行筛选

排序

```sql
select * from student order by score desc , clsid asc ; 
```

连接查询：

内连接：

```sql
select * from 表名1 inner join 表名2 on 连接条件
```

左连接：

```sql
select * from 表名1 left join 表名2 on 连接条件
```

将表1的内容全部展示，表2中如没有想对应的数据则以 null 填充

右连接: 

```sql
select * from  表名1 right join 表名2 on 连接条件
```
将表2的内容全部展示，表1中如没有想对应的数据则以 null 填充

常用函数：

字符函数：

> concat(s1,s1),concat_ws(x,s1,s2,s3)
trim(s),ltrim(s),rtrim(s), trim(s1 from s)

数学函数:

> rand(),rand(x),round(x),round(x,y),truncate(x,y)
ceil(x),ceiling(x),floor(x),mod(x),abs(x),squrt(x),pi()

日期函数：

> curdate(),curtime(),now(),year(d),month(d),day(d),monthname(d)

jdbc

1,将驱动 jar 包，加入项目 libs 文件夹下，build path --> add to build path

2，加载驱动

```java
Class.forName("com.mysql.jdbc.Driver")
```

3, 获取连接 

```java
Connection conn = DriverManager.getConnection(url,user,pwd);
```

url: 主协议:子协议://主机名:端口号/数据库名

jdbc:mysql://localhost:3306/数据库名

4，编写sql语句，创建语句对象

```java
prepareStatement ps = conn.prepareStatement(sql);
```

为ps 设置参数

ps.setObject(i,obj); i 代表问号所在的位置

5,执行sql,处理结果

查询返回的时ResultSet

6，释放资源

   


     




  




     



  