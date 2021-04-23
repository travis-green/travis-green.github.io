(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{389:function(e,a,s){"use strict";s.r(a);var n=s(18),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sql语句大全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql语句大全"}},[e._v("#")]),e._v(" SQl语句大全")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("1、说明：创建数据库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("CREATE DATABASE database-name\n")])])]),s("p",[e._v("2、说明：删除数据库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("drop database dbname\n")])])]),s("p",[e._v("3、说明：备份sql server\n--- 创建 备份数据的 device")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("USE master\nEXEC sp_addumpdevice 'disk', 'testBack', 'c:\\mssql7backup\\MyNwind_1.dat'\n")])])]),s("p",[e._v("--- 开始 备份")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("BACKUP DATABASE pubs TO testBack\n")])])]),s("p",[e._v("4、说明：创建新表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("create table tabname(col1 type1 [not null] [primary key],col2 type2 [not null],..)\n")])])]),s("p",[e._v("根据已有的表创建新表：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("A：create table tab_new like tab_old (使用旧表创建新表)\nB：create table tab_new as select col1,col2… from tab_old definition only\n")])])]),s("p",[e._v("5、说明：删除新表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("drop table tabname\n")])])]),s("p",[e._v("6、说明：增加一个列")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Alter table tabname add column col type\n")])])]),s("p",[e._v("注：列增加后将不能删除。DB2中列加上后数据类型也不能改变，唯一能改变的是增加varchar类型的长度。")]),e._v(" "),s("p",[e._v("7、说明：添加主键：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" Alter table tabname add primary key(col)\n")])])]),s("p",[e._v("说明：删除主键：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Alter table tabname drop primary key(col)\n")])])]),s("p",[e._v("8、说明：创建索引：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("create [unique] index idxname on tabname(col….)\n")])])]),s("p",[e._v("删除索引：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("drop index idxname\n")])])]),s("p",[e._v("注：索引是不可更改的，想更改必须删除重新建。\n9、说明：创建视图：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("create view viewname as select statement\n")])])]),s("p",[e._v("删除视图：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("drop view viewname\n")])])]),s("p",[e._v("10、说明：几个简单的基本的sql语句\n选择：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from table1 where 范围\n")])])]),s("p",[e._v("插入：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert into table1(field1,field2) values(value1,value2)\n")])])]),s("p",[e._v("删除：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("delete from table1 where 范围\n")])])]),s("p",[e._v("更新：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("update table1 set field1=value1 where 范围\n")])])]),s("p",[e._v("查找：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from table1 where field1 like ’%value1%’---like的语法很精妙，查资料!\n")])])]),s("p",[e._v("排序：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from table1 order by field1,field2 [desc]\n")])])]),s("p",[e._v("总数：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select count as totalcount from table1\n")])])]),s("p",[e._v("求和：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select sum(field1) as sumvalue from table1\n")])])]),s("p",[e._v("平均：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select avg(field1) as avgvalue from table1\n")])])]),s("p",[e._v("最大：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select max(field1) as maxvalue from table1\n")])])]),s("p",[e._v("最小：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select min(field1) as minvalue from table1\n")])])]),s("p",[e._v("11、说明：几个高级查询运算词\nA： UNION 运算符\n"),s("strong",[e._v("UNION 运算符通过组合其他两个结果表（例如 TABLE1 和 TABLE2）并消去表中任何重复行而派生出一个结果表。当 ALL 随 UNION 一起使用时（即 UNION ALL），不消除重复行。两种情况下，派生表的每一行不是来自 TABLE1 就是来自 TABLE2。")]),e._v("\nB： EXCEPT 运算符\n"),s("strong",[e._v("EXCEPT 运算符通过包括所有在 TABLE1 中但不在 TABLE2 中的行并消除所有重复行而派生出一个结果表。当 ALL 随 EXCEPT 一起使用时 (EXCEPT ALL)，不消除重复行。")]),e._v("\nC： INTERSECT 运算符\n"),s("strong",[e._v("INTERSECT 运算符通过只包括 TABLE1 和 TABLE2 中都有的行并消除所有重复行而派生出一个结果表。当 ALL 随 INTERSECT 一起使用时 (INTERSECT ALL)，不消除重复行。")]),e._v("\n注：使用运算词的几个查询结果行必须是一致的。\n12、说明：使用外连接\nA、left （outer） join：\n"),s("strong",[e._v("左外连接（左连接）：结果集几包括连接表的匹配行，也包括左连接表的所有行。")]),e._v("\nSQL:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select a.a, a.b, a.c, b.c, b.d, b.f from a LEFT OUT JOIN b ON a.a = b.c\n")])])]),s("p",[e._v("B：right （outer） join:\n"),s("strong",[e._v("右外连接(右连接)：结果集既包括连接表的匹配连接行，也包括右连接表的所有行。")]),e._v("\nC：full/cross （outer） join：\n"),s("strong",[e._v("全外连接：不仅包括符号连接表的匹配行，还包括两个连接表中的所有记录。")]),e._v("\n12、分组:Group by:\n"),s("strong",[e._v("一张表，一旦分组完成后，查询后只能得到组相关的信息。\n组相关的信息：（统计信息） count,sum,max,min,avg  分组的标准)\n在SQLServer中分组时：不能以text,ntext,image类型的字段作为分组依据\n在selecte统计函数中的字段，不能和普通的字段放在一起；")]),e._v("\n13、对数据库进行操作：\n"),s("strong",[e._v("分离数据库： sp_detach_db; 附加数据库：sp_attach_db 后接表明，附加需要完整的路径名")]),e._v("\n14.如何修改数据库的名称:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("sp_renamedb 'old_name', 'new_name'\n")])])]),s("p",[e._v("二、提升\n1、说明：复制表(只复制结构,源表名：a 新表名：b) (Access可用)\n法一：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * into b from a where 1<>1（仅用于SQlServer）\n")])])]),s("p",[e._v("法二：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select top 0 * into b from a\n")])])]),s("p",[e._v("2、说明：拷贝表(拷贝数据,源表名：a 目标表名：b) (Access可用)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert into b(a, b, c) select d,e,f from b;\n")])])]),s("p",[e._v("3、说明：跨数据库之间表的拷贝(具体数据使用绝对路径) (Access可用)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert into b(a, b, c) select d,e,f from b in ‘具体数据库’ where 条件\n")])])]),s("p",[e._v("例子：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('..from b in \'"&Server.MapPath(".")&"\\data.mdb" &"\' where..\n')])])]),s("p",[e._v("4、说明：子查询(表名1：a 表名2：b)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select a,b,c from a where a IN (select d from b ) 或者: select a,b,c from a where a IN (1,2,3)\n")])])]),s("p",[e._v("5、说明：显示文章、提交人和最后回复时间")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select a.title,a.username,b.adddate from table a,(select max(adddate) adddate from table where table.title=a.title) b\n")])])]),s("p",[e._v("6、说明：外连接查询(表名1：a 表名2：b)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select a.a, a.b, a.c, b.c, b.d, b.f from a LEFT OUT JOIN b ON a.a = b.c\n")])])]),s("p",[e._v("7、说明：在线视图查询(表名1：a )")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from (SELECT a,b,c FROM a) T where t.a > 1;\n")])])]),s("p",[e._v("8、说明：between的用法,between限制查询数据范围时包括了边界值,not between不包括")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from table1 where time between time1 and time2\nselect a,b,c, from table1 where a not between 数值1 and 数值2\n")])])]),s("p",[e._v("9、说明：in 的使用方法")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from table1 where a [not] in (‘值1’,’值2’,’值4’,’值6’)\n")])])]),s("p",[e._v("10、说明：两张关联表，删除主表中已经在副表中没有的信息")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("delete from table1 where not exists ( select * from table2 where table1.field1=table2.field1 )\n")])])]),s("p",[e._v("11、说明：四表联查问题：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from a left inner join b on a.a=b.b right inner join c on a.a=c.c inner join d on a.a=d.d where .....\n")])])]),s("p",[e._v("12、说明：日程安排提前五分钟提醒")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("SQL: select * from 日程安排 where datediff('minute',f开始时间,getdate())>5\n")])])]),s("p",[e._v("13、说明：一条sql 语句搞定数据库分页")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select top 10 b.* from (select top 20 主键字段,排序字段 from 表名 order by 排序字段 desc) a,表名 b where b.主键字段 = a.主键字段 order by a.排序字段\n")])])]),s("p",[e._v("具体实现：\n关于数据库分页：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" declare @start int,@end int\n  @sql  nvarchar(600)\n  set @sql=’select top’+str(@end-@start+1)+’+from T where rid not in(select top’+str(@str-1)+’Rid from T where Rid>-1)’\n  exec sp_executesql @sql\n")])])]),s("p",[e._v("注意：在top后不能直接跟一个变量，所以在实际应用中只有这样的进行特殊的处理。Rid为一个标识列，如果top后还有具体的字段，这样做是非常有好处的。因为这样可以避免 top的字段如果是逻辑索引的，查询的结果后实际表中的不一致（逻辑索引中的数据有可能和数据表中的不一致，而查询时如果处在索引则首先查询索引）\n14、说明：前10条记录")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select top 10 * form table1 where 范围\n")])])]),s("p",[e._v("15、说明：选择在每一组b值相同的数据中对应的a最大的记录的所有信息(类似这样的用法可以用于论坛每月排行榜,每月热销产品分析,按科目成绩排名,等等.)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select a,b,c from tablename ta where a=(select max(a) from tablename tb where tb.b=ta.b)\n")])])]),s("p",[e._v("16、说明：包括所有在 TableA 中但不在 TableB和TableC 中的行并消除所有重复行而派生出一个结果表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("(select a from tableA ) except (select a from tableB) except (select a from tableC)\n")])])]),s("p",[e._v("17、说明：随机取出10条数据")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select top 10 * from tablename order by newid()\n")])])]),s("p",[e._v("18、说明：随机选择记录")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select newid()\n")])])]),s("p",[e._v("19、说明：删除重复记录")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("1),delete from tablename where id not in (select max(id) from tablename group by col1,col2,...)\n2),select distinct * into temp from tablename\n  delete from tablename\n  insert into tablename select * from temp\n")])])]),s("p",[e._v("评价： 这种操作牵连大量的数据的移动，这种做法不适合大容量但数据操作\n3),例如：在一个外部表中导入数据，由于某些原因第一次只导入了一部分，但很难判断具体位置，这样只有在下一次全部导入，这样也就产生好多重复的字段，怎样删除重复字段")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("alter table tablename\n")])])]),s("p",[e._v("--添加一个自增列")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("add  column_b int identity(1,1)\n delete from tablename where column_b not in(\nselect max(column_b)  from tablename group by column1,column2,...)\nalter table tablename drop column column_b\n")])])]),s("p",[e._v("20、说明：列出数据库里所有的表名")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select name from sysobjects where type='U' // U代表用户\n")])])]),s("p",[e._v("21、说明：列出表里的所有的列名")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select name from syscolumns where id=object_id('TableName')\n")])])]),s("p",[e._v("22、说明：列示"),s("strong",[e._v("type、vender、pcs")]),e._v("字段，以type字段排列，case可以方便地实现多重选择，类似select 中的case。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select type,sum(case vender when 'A' then pcs else 0 end),sum(case vender when 'C' then pcs else 0 end),sum(case vender when 'B' then pcs else 0 end) FROM tablename group by type\n")])])]),s("p",[e._v("显示结果：")]),e._v(" "),s("blockquote",[s("p",[e._v("type vender pcs\n电脑 A 1\n电脑 A 1\n光盘 B 2\n光盘 A 2\n手机 B 3\n手机 C 3")])]),e._v(" "),s("p",[e._v("23、说明：初始化表table1")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("TRUNCATE TABLE table1\n")])])]),s("p",[e._v("24、说明：选择从10到15的记录")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select top 5 * from (select top 15 * from table order by id asc) table_别名 order by id desc\n")])])]),s("p",[e._v("三、技巧\n1、1=1，1=2的使用，在SQL语句组合时用的较多\n“where 1=1” 是表示选择全部    “where 1=2”全部不选，\n如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("if @strWhere !=''\nbegin\nset @strSQL = 'select count(*) as Total from [' + @tblName + '] where ' + @strWhere\nend\nelse\nbegin\nset @strSQL = 'select count(*) as Total from [' + @tblName + ']'\nend\n")])])]),s("p",[e._v("我们可以直接写成\n错误！未找到目录项。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("set @strSQL = 'select count(*) as Total from [' + @tblName + '] where 1=1 安定 '+ @strWhere \n")])])]),s("p",[e._v("2、收缩数据库\n--重建索引")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("DBCC REINDEX\nDBCC INDEXDEFRAG\n")])])]),s("p",[e._v("--收缩数据和日志")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("DBCC SHRINKDB\nDBCC SHRINKFILE\n")])])]),s("p",[e._v("3、压缩数据库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("dbcc shrinkdatabase(dbname)\n")])])]),s("p",[e._v("4、转移数据库给新用户以已存在用户权限")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("exec sp_change_users_login 'update_one','newname','oldname'\ngo\n")])])]),s("p",[e._v("5、检查备份集")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("RESTORE VERIFYONLY from disk='E:\\dvbbs.bak'\n")])])]),s("p",[e._v("6、修复数据库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("ALTER DATABASE [dvbbs] SET SINGLE_USER\nGO\nDBCC CHECKDB('dvbbs',repair_allow_data_loss) WITH TABLOCK\nGO\nALTER DATABASE [dvbbs] SET MULTI_USER\nGO\n")])])]),s("p",[e._v("7、日志清除")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("SET NOCOUNT ON\nDECLARE @LogicalFileName sysname,\n @MaxMinutes INT,\n @NewSize INT\n \nUSE tablename -- 要操作的数据库名\nSELECT  @LogicalFileName = 'tablename_log', -- 日志文件名\n@MaxMinutes = 10, -- Limit on time allowed to wrap log.\n @NewSize = 1  -- 你想设定的日志文件的大小(M)\nSetup / initialize\nDECLARE @OriginalSize int\nSELECT @OriginalSize = size\n FROM sysfiles\n WHERE name = @LogicalFileName\nSELECT 'Original Size of ' + db_name() + ' LOG is ' +\n CONVERT(VARCHAR(30),@OriginalSize) + ' 8K pages or ' +\n CONVERT(VARCHAR(30),(@OriginalSize*8/1024)) + 'MB'\n FROM sysfiles\n WHERE name = @LogicalFileName\nCREATE TABLE DummyTrans\n (DummyColumn char (8000) not null)\n \nDECLARE @Counter    INT,\n @StartTime DATETIME,\n @TruncLog   VARCHAR(255)\nSELECT @StartTime = GETDATE(),\n @TruncLog = 'BACKUP LOG ' + db_name() + ' WITH TRUNCATE_ONLY'\nDBCC SHRINKFILE (@LogicalFileName, @NewSize)\nEXEC (@TruncLog)\n-- Wrap the log if necessary.\nWHILE @MaxMinutes > DATEDIFF (mi, @StartTime, GETDATE()) -- time has not expired\n AND @OriginalSize = (SELECT size FROM sysfiles WHERE name = @LogicalFileName) \n AND (@OriginalSize * 8 /1024) > @NewSize \n BEGIN -- Outer loop.\nSELECT @Counter = 0\n WHILE   ((@Counter < @OriginalSize / 16) AND (@Counter < 50000))\n BEGIN -- update\n INSERT DummyTrans VALUES ('Fill Log') DELETE DummyTrans\n SELECT @Counter = @Counter + 1\n END\n EXEC (@TruncLog) \n END\nSELECT 'Final Size of ' + db_name() + ' LOG is ' +\n CONVERT(VARCHAR(30),size) + ' 8K pages or ' +\n CONVERT(VARCHAR(30),(size*8/1024)) + 'MB'\n FROM sysfiles\n WHERE name = @LogicalFileName\nDROP TABLE DummyTrans\nSET NOCOUNT OFF\n")])])]),s("p",[e._v("8、说明：更改某个表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("exec sp_changeobjectowner 'tablename','dbo'\n")])])]),s("p",[e._v("9、存储更改全部表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("CREATE PROCEDURE dbo.User_ChangeObjectOwnerBatch\n@OldOwner as NVARCHAR(128),\n@NewOwner as NVARCHAR(128)\nAS\nDECLARE @Name    as NVARCHAR(128)\nDECLARE @Owner   as NVARCHAR(128)\nDECLARE @OwnerName   as NVARCHAR(128)\nDECLARE curObject CURSOR FOR\nselect 'Name'    = name,\n   'Owner'    = user_name(uid)\nfrom sysobjects\nwhere user_name(uid)=@OldOwner\norder by name\nOPEN   curObject\nFETCH NEXT FROM curObject INTO @Name, @Owner\nWHILE(@@FETCH_STATUS=0)\nBEGIN   \nif @Owner=@OldOwner\nbegin\n   set @OwnerName = @OldOwner + '.' + rtrim(@Name)\n   exec sp_changeobjectowner @OwnerName, @NewOwner\nend\n-- select @name,@NewOwner,@OldOwner\nFETCH NEXT FROM curObject INTO @Name, @Owner\nEND\nclose curObject\ndeallocate curObject\nGO\n")])])]),s("p",[e._v("10、SQL SERVER中直接循环写入数据")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("declare @i int\nset @i=1\nwhile @i<30\nbegin\n    insert into test (userid) values(@i)\n    set @i=@i+1\nend\n")])])]),s("p",[e._v("案例：\n有如下表，要求就裱中所有沒有及格的成績，在每次增長0.1的基礎上，使他們剛好及格:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" Name     score\n Zhangshan 80\n Lishi       59\n Wangwu      50\n Songquan 69\nwhile((select min(score) from tb_table)<60)\nbegin\nupdate tb_table set score =score*1.01\nwhere score<60\nif  (select min(score) from tb_table)>60\n  break\n else\n    continue\nend\n")])])]),s("p",[e._v("数据开发-经典")]),e._v(" "),s("p",[e._v("1.按姓氏笔画排序:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Select * From TableName Order By CustomerName Collate Chinese_PRC_Stroke_ci_as //从少到多\n")])])]),s("p",[e._v("2.数据库加密:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select encrypt('原始密码')\nselect pwdencrypt('原始密码')\nselect pwdcompare('原始密码','加密后密码') = 1--相同；否则不相同 encrypt('原始密码')\nselect pwdencrypt('原始密码')\nselect pwdcompare('原始密码','加密后密码') = 1--相同；否则不相同\n")])])]),s("p",[e._v("3.取回表中字段:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("declare @list varchar(1000),\n@sql nvarchar(1000)\nselect @list=@list+','+b.name from sysobjects a,syscolumns b where a.id=b.id and a.name='表A'\nset @sql='select '+right(@list,len(@list)-1)+' from 表A'\nexec (@sql)\n")])])]),s("p",[e._v("4.查看硬盘分区:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("EXEC master..xp_fixeddrives\n")])])]),s("p",[e._v("5.比较A,B表是否相等:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("if (select checksum_agg(binary_checksum(*)) from A)\n     =\n    (select checksum_agg(binary_checksum(*)) from B)\nprint '相等'\nelse\nprint '不相等'\n")])])]),s("p",[e._v("6.杀掉所有的事件探察器进程:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("DECLARE hcforeach CURSOR GLOBAL FOR SELECT 'kill '+RTRIM(spid) FROM master.dbo.sysprocesses\nWHERE program_name IN('SQL profiler',N'SQL 事件探查器')\nEXEC sp_msforeach_worker '?'\n")])])]),s("p",[e._v("7.记录搜索:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("开头到N条记录\nSelect Top N * From 表\n-------------------------------\nN到M条记录(要有主索引ID)\nSelect Top M-N * From 表 Where ID in (Select Top M ID From 表) Order by ID   Desc\n----------------------------------\nN到结尾记录\nSelect Top N * From 表 Order by ID Desc\n")])])]),s("p",[e._v("案例\n例如1：一张表有一万多条记录，表的第一个字段 RecID 是自增长字段， 写一个SQL语句，找出表的第31到第40个记录。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select top 10 recid from A where recid not  in(select top 30 recid from A)\n")])])]),s("p",[e._v("分析：如果这样写会产生某些问题，如果recid在表中存在逻辑索引。\nselect top 10 recid from A where……是从索引中查找，而后面的select top 30 recid from A则在数据表中查找，这样由于索引中的顺序有可能和数据表中的不一致，这样就导致查询到的不是本来的欲得到的数据。\n解决方案\n1，** 用order by select top 30 recid from A order by ricid 如果该字段不是自增长，就会出现问题**\n2， "),s("strong",[e._v("在那个子查询中也加条件：select top 30 recid from A where recid>-1")]),e._v("\n例2：查询表中的最后以条记录，并不知道这个表共有多少数据,以及表结构。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("    set @s = 'select top 1 * from T   where pid not in (select top ' + str(@count-1) + ' pid  from  T)'\n\nprint @s      exec  sp_executesql  @s\n")])])]),s("p",[e._v("9：获取当前数据库中的所有用户表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select Name from sysobjects where xtype='u' and status>=0\n")])])]),s("p",[e._v("10：获取某一个表的所有字段")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select name from syscolumns where id=object_id('表名')\nselect name from syscolumns where id in (select id from sysobjects where type = 'u' and name = '表名')\n")])])]),s("p",[e._v("两种方式的效果相同\n11：查看与某一个表相关的视图、存储过程、函数")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select a.* from sysobjects a, syscomments b where a.id = b.id and b.text like '%表名%'\n")])])]),s("p",[e._v("12：查看当前数据库中所有存储过程")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select name as 存储过程名称 from sysobjects where xtype='P'\n")])])]),s("p",[e._v("13：查询用户创建的所有数据库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from master..sysdatabases D where sid not in(select sid from master..syslogins where name='sa')\n")])])]),s("p",[e._v("或者")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select dbid, name AS DB_NAME from master..sysdatabases where sid <> 0x01\n")])])]),s("p",[e._v("14：查询某一个表的字段和数据类型")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select column_name,data_type from information_schema.columns\nwhere table_name = '表名'\n")])])]),s("p",[e._v("15：不同服务器数据库之间的数据操作\n--创建链接服务器")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("exec sp_addlinkedserver   'ITSV ', ' ', 'SQLOLEDB ', '远程服务器名或ip地址 '\nexec sp_addlinkedsrvlogin  'ITSV ', 'false ',null, '用户名 ', '密码 '\n")])])]),s("p",[e._v("--查询示例")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from ITSV.数据库名.dbo.表名\n")])])]),s("p",[e._v("--导入示例")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * into 表 from ITSV.数据库名.dbo.表名\n")])])]),s("p",[e._v("--以后不再使用时删除链接服务器")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("exec sp_dropserver  'ITSV ', 'droplogins '\n")])])]),s("p",[e._v("--连接远程/局域网数据(openrowset/openquery/opendatasource)\n--1、openrowset\n--查询示例")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * from openrowset( 'SQLOLEDB ', 'sql服务器名 '; '用户名 '; '密码 ',数据库名.dbo.表名)\n")])])]),s("p",[e._v("--生成本地表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select * into 表 from openrowset( 'SQLOLEDB ', 'sql服务器名 '; '用户名 '; '密码 ',数据库名.dbo.表名)\n")])])]),s("p",[e._v("--把本地表导入远程表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert openrowset( 'SQLOLEDB ', 'sql服务器名 '; '用户名 '; '密码 ',数据库名.dbo.表名)\nselect *from 本地表\n")])])]),s("p",[e._v("--更新本地表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("update b\nset b.列A=a.列A\n from openrowset( 'SQLOLEDB ', 'sql服务器名 '; '用户名 '; '密码 ',数据库名.dbo.表名)as a inner join 本地表 b\non a.column1=b.column1\n")])])]),s("p",[e._v("--openquery用法需要创建一个连接\n--首先创建一个连接创建链接服务器")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("exec sp_addlinkedserver   'ITSV ', ' ', 'SQLOLEDB ', '远程服务器名或ip地址 '\n")])])]),s("p",[e._v("--查询")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("select *\nFROM openquery(ITSV,  'SELECT *  FROM 数据库.dbo.表名 ')\n")])])]),s("p",[e._v("--把本地表导入远程表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert openquery(ITSV,  'SELECT *  FROM 数据库.dbo.表名 ')\nselect * from 本地表\n")])])]),s("p",[e._v("--更新本地表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("update b\nset b.列B=a.列B\nFROM openquery(ITSV,  'SELECT * FROM 数据库.dbo.表名 ') as a \ninner join 本地表 b on a.列A=b.列A\n")])])]),s("p",[e._v("--3、opendatasource/openrowset")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("SELECT   *\nFROM   opendatasource( 'SQLOLEDB ',  'Data Source=ip/ServerName;User ID=登陆名;Password=密码 ' ).test.dbo.roy_ta\n")])])]),s("p",[e._v("--把本地表导入远程表")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert opendatasource( 'SQLOLEDB ',  'Data Source=ip/ServerName;User ID=登陆名;Password=密码 ').数据库.dbo.表名\nselect * from 本地表 \n")])])]),s("p",[e._v('SQL Server基本函数\n1.字符串函数 长度与分析用\n1,datalength(Char_expr) 返回字符串包含字符数,但不包含后面的空格\n2,substring(expression,start,length) 取子串，字符串的下标是从“1”，start为起始位置，length为字符串长度，实际应用中以len(expression)取得其长度\n3,right(char_expr,int_expr) 返回字符串右边第int_expr个字符，还用left于之相反\n4,isnull( check_expression , replacement_value )如果check_expression為空，則返回replacement_value的值，不為空，就返回check_expression字符操作类\n5,Sp_addtype 自定義數據類型\n例如：EXEC sp_addtype birthday, datetime, \'NULL\'\n6,set nocount {on|off}\n使返回的结果中不包含有关受 Transact-SQL 语句影响的行数的信息。如果存储过程中包含的一些语句并不返回许多实际的数据，则该设置由于大量减少了网络流量，因此可显著提高性能。SET NOCOUNT 设置是在执行或运行时设置，而不是在分析时设置。\nSET NOCOUNT 为 ON 时，不返回计数（表示受 Transact-SQL 语句影响的行数）。\nSET NOCOUNT 为 OFF 时，返回计数\n常识\n在SQL查询中：from后最多可以跟多少张表或视图：256\n在SQL语句中出现 Order by,查询时，先排序，后取\n在SQL中，一个字段的最大容量是8000，而对于nvarchar(4000),由于nvarchar是Unicode码。\nSQLServer2000同步复制技术实现步骤\n一、 预备工作\n1.发布服务器,订阅服务器都创建一个同名的windows用户,并设置相同的密码,做为发布快照文件夹的有效访问用户\n--管理工具\n--计算机管理\n--用户和组\n--右键用户\n--新建用户\n--建立一个隶属于administrator组的登陆windows的用户（SynUser）\n2.在发布服务器上,新建一个共享目录,做为发布的快照文件的存放目录,操作:\n我的电脑--D:\\ 新建一个目录,名为: PUB\n--右键这个新建的目录\n--属性--共享\n--选择"共享该文件夹"\n--通过"权限"按纽来设置具体的用户权限,保证第一步中创建的用户(SynUser) 具有对该文件夹的所有权限\n--确定\n3.设置SQL代理(SQLSERVERAGENT)服务的启动用户(发布/订阅服务器均做此设置)\n开始--程序--管理工具--服务\n--右键SQLSERVERAGENT\n--属性--登陆--选择"此账户"\n--输入或者选择第一步中创建的windows登录用户名（SynUser）\n--"密码"中输入该用户的密码\n4.设置SQL Server身份验证模式,解决连接时的权限问题(发布/订阅服务器均做此设置)\n企业管理器\n--右键SQL实例--属性\n--安全性--身份验证\n--选择"SQL Server 和 Windows"\n--确定\n5.在发布服务器和订阅服务器上互相注册\n企业管理器\n--右键SQL Server组\n--新建SQL Server注册...\n--下一步--可用的服务器中,输入你要注册的远程服务器名 --添加\n--下一步--连接使用,选择第二个"SQL Server身份验证"\n--下一步--输入用户名和密码（SynUser）\n--下一步--选择SQL Server组,也可以创建一个新组\n--下一步--完成\n6.对于只能用IP,不能用计算机名的,为其注册服务器别名（此步在实施中没用到）\n(在连接端配置,比如,在订阅服务器上配置的话,服务器名称中输入的是发布服务器的IP)\n开始--程序--Microsoft SQL Server--客户端网络实用工具\n--别名--添加\n--网络库选择"tcp/ip"--服务器别名输入SQL服务器名\n--连接参数--服务器名称中输入SQL服务器ip地址\n--如果你修改了SQL的端口,取消选择"动态决定端口",并输入对应的端口号\n二、 正式配置\n1、配置发布服务器\n打开企业管理器，在发布服务器（B、C、D）上执行以下步骤:\n(1) 从[工具]下拉菜单的[复制]子菜单中选择[配置发布、订阅服务器和分发]出现配置发布和分发向导\n(2) [下一步] 选择分发服务器 可以选择把发布服务器自己作为分发服务器或者其他sql的服务器（选择自己）\n(3) [下一步] 设置快照文件夹\n采用默认\\servername\\Pub\n(4) [下一步] 自定义配置\n可以选择:是,让我设置分发数据库属性启用发布服务器或设置发布设置\n否,使用下列默认设置（推荐）\n(5) [下一步] 设置分发数据库名称和位置 采用默认值\n(6) [下一步] 启用发布服务器 选择作为发布的服务器\n(7) [下一步] 选择需要发布的数据库和发布类型\n(8) [下一步] 选择注册订阅服务器\n(9) [下一步] 完成配置\n2、创建出版物\n发布服务器B、C、D上\n(1)从[工具]菜单的[复制]子菜单中选择[创建和管理发布]命令\n(2)选择要创建出版物的数据库，然后单击[创建发布]\n(3)在[创建发布向导]的提示对话框中单击[下一步]系统就会弹出一个对话框。对话框上的内容是复制的三个类型。我们现在选第一个也就是默认的快照发布(其他两个大家可以去看看帮助)\n(4)单击[下一步]系统要求指定可以订阅该发布的数据库服务器类型,\nSQLSERVER允许在不同的数据库如 orACLE或ACCESS之间进行数据复制。\n但是在这里我们选择运行"SQL SERVER 2000"的数据库服务器\n(5)单击[下一步]系统就弹出一个定义文章的对话框也就是选择要出版的表\n注意: 如果前面选择了事务发布 则再这一步中只能选择带有主键的表\n(6)选择发布名称和描述\n(7)自定义发布属性 向导提供的选择:\n是 我将自定义数据筛选,启用匿名订阅和或其他自定义属性\n否 根据指定方式创建发布 （建议采用自定义的方式）\n(8)[下一步] 选择筛选发布的方式\n(9)[下一步] 可以选择是否允许匿名订阅\n1)如果选择署名订阅,则需要在发布服务器上添加订阅服务器\n方法: [工具]->[复制]->[配置发布、订阅服务器和分发的属性]->[订阅服务器] 中添加\n否则在订阅服务器上请求订阅时会出现的提示:改发布不允许匿名订阅\n如果仍然需要匿名订阅则用以下解决办法\n[企业管理器]->[复制]->[发布内容]->[属性]->[订阅选项] 选择允许匿名请求订阅\n2)如果选择匿名订阅,则配置订阅服务器时不会出现以上提示\n(10)[下一步] 设置快照 代理程序调度\n(11)[下一步] 完成配置\n当完成出版物的创建后创建出版物的数据库也就变成了一个共享数据库\n有数据\nsrv1.库名..author有字段:id,name,phone,\nsrv2.库名..author有字段:id,name,telphone,adress\n要求：\nsrv1.库名..author增加记录则srv1.库名..author记录增加\nsrv1.库名..author的phone字段更新，则srv1.库名..author对应字段telphone更新\n--*/\n--大致的处理步骤\n--1.在 srv1 上创建连接服务器,以便在 srv1 中操作 srv2,实现同步\nexec sp_addlinkedserver \'srv2\',\'\',\'SQLOLEDB\',\'srv2的sql实例名或ip\'\nexec sp_addlinkedsrvlogin \'srv2\',\'false\',null,\'用户名\',\'密码\'\ngo\n--2.在 srv1 和 srv2 这两台电脑中,启动 msdtc(分布式事务处理服务),并且设置为自动启动\n。我的电脑--控制面板--管理工具--服务--右键 Distributed Transaction Coordinator--属性--启动--并将启动类型设置为自动启动\ngo\n--然后创建一个作业定时调用上面的同步处理存储过程就行了\n企业管理器\n--管理\n--SQL Server代理\n--右键作业\n--新建作业\n--"常规"项中输入作业名称\n--"步骤"项\n--新建\n--"步骤名"中输入步骤名\n--"类型"中选择"Transact-SQL 脚本(TSQL)"\n--"数据库"选择执行命令的数据库\n--"命令"中输入要执行的语句: exec p_process\n--确定\n--"调度"项\n--新建调度\n--"名称"中输入调度名称\n--"调度类型"中选择你的作业执行安排\n--如果选择"反复出现"\n--点"更改"来设置你的时间安排\n然后将SQL Agent服务启动,并设置为自动启动,否则你的作业不会被执行\n设置方法:\n我的电脑--控制面板--管理工具--服务--右键 SQLSERVERAGENT--属性--启动类型--选择"自动启动"--确定.\n--3.实现同步处理的方法2,定时同步\n--在srv1中创建如下的同步处理存储过程')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("create proc p_process\nas\n")])])]),s("p",[e._v("--更新修改过的数据")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("update b set name=i.name,telphone=i.telphone\nfrom srv2.库名.dbo.author b,author i\nwhere b.id=i.id and\n(b.name <> i.name or b.telphone <> i.telphone)\n")])])]),s("p",[e._v("--插入新增的数据")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("insert srv2.库名.dbo.author(id,name,telphone)\nselect id,name,telphone from author i\nwhere not exists(\nselect * from srv2.库名.dbo.author where id=i.id)\n")])])]),s("p",[e._v("--删除已经删除的数据(如果需要的话)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("delete b\nfrom srv2.库名.dbo.author b\nwhere not exists(\nselect * from author where id=b.id)\ngo\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);