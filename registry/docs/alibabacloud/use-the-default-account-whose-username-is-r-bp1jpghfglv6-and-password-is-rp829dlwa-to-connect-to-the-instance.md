Tair (Redis OSS-compatible) supports creating multiple accounts. You can set read-only or read and write permissions for these accounts. This helps you manage instances more flexibly, minimize operational errors, and improve data security.

## Background information

To ensure data security, the system automatically creates a Default Account after an instance is created. Typically, the **Default Account** is named after the instance ID, such as r-bp1jpghfglv6\*\*\*\*\*\*. You cannot delete or replace the default account or modify the permissions of the account. You can view or reset the password of the default account on the **Account Management** page in the Tair (Redis OSS-compatible) console.

You can use the **default account** to log on to your instance in the same way as in open source Redis, where you need only to enter the password of the account. The following example shows how to log on to a Tair instance by using redis-cli:

```
# Use the default account whose username is r-bp1jpghfglv6****** and password is Rp829dlwa to connect to the instance. 
redis-cli -h r-bp1zx****.redis.rds.aliyuncs.com -p 6379 -a Rp829dlwa
```

**Note**

The name of the default account is default for specific instances. The name that is displayed in the console prevails.

## Prerequisites

The database engine version of the instance is Redis 4.0 or later.

**Note**

If the database engine version of your instance does not meet this requirement, evaluate your business needs and upgrade the major version of the instance. For more information, see [Major version upgrade](/help/en/redis/user-guide/upgrade-the-major-version-1#task-ast-xh3-3gb).

## **Notes**

-   You can create a maximum of 20 accounts for a single instance.
    
-   For instances of Redis Open-Source Edition 4.0 and 5.0 (earlier than version 5.0.8), account names are case-insensitive. For instances that run version 5.0.8 or later, account names are case-sensitive.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Account Management**.
    
3.  In the upper-right corner of the page, click **Create**.
    
4.  In the dialog box that appears, set the account information.
    
    **Configuration**
    
    **Description**
    
    **Account Type**
    
    -   **Local account**: You must record the password for this account or configure the database account password in plaintext in your application code.
        
    -   **KMS-managed account**: The account password of the instance is managed by [KMS](/help/en/kms/key-management-service/product-overview/what-is-key-management-service-1). Your application does not need to configure a static database account password. When the application accesses the instance, it calls the relevant KMS API operations to get the instance account and password information. For more information, see [Manage instance password credentials using KMS](/help/en/redis/use-cases/use-kms-to-manage-redis-credentials).
        
    
    **Account**
    
    The account name must meet the following requirements:
    
    -   It must start with a letter and can contain only lowercase letters, digits, and underscores (\_).
        
    -   It must be no more than 35 characters in length.
        
    -   It cannot be a [reserved word for Redis accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#section-u3q-817-om3).
        
    
    **Privilege**
    
    Set the permissions for the account:
    
    -   **Read-only**: The account has permission to read data but not to modify it.
        
    -   **Read/Write**: The account has permission to read, write, and delete data.
        
    
    **Password**
    
    Set the password for the account. The password must meet the following requirements:
    
    -   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters are:
        
        !@#$%^&\*()+-=\_
        
    -   It must be 8 to 32 characters in length.
        
    
    **Confirm Password**
    
    Enter the password again to confirm.
    
    **Description** (Optional)
    
    The description of the account. It must meet the following requirements:
    
    -   It must start with a letter or a Chinese character, and cannot start with http:// or https://.
        
    -   It can contain letters, Chinese characters, digits, underscores (\_), and hyphens (-).
        
    -   It must be 2 to 256 characters in length.
        
    
5.  Click **OK**.
    
    After the new account is created, wait for about one minute and then refresh the console page. The account status changes to **Active**.
    
    **Note**
    
    -   The password format for a new account is `user:password`. For example, if the new account is named `testaccount` and the password is `Rp829dlwa`, the logon password for the instance is `testaccount:Rp829dlwa`. For more information, see [Log on to an instance](/help/en/redis/user-guide/logon-methods#task-2232441).
        
    -   If you use a third-party database management tool, such as RDM, to connect to a Redis instance, enter `user:password` in the password field.
        
    
6.  **Optional:** Manage accounts as needed by performing the following steps:
    
    -   Reset a password
        
        In the **Actions** column of the target account, click **Reset Password**. In the dialog box that appears, set a new password for the account and click **OK**.
        
    -   Modify permissions
        
        In the **Actions** column of the target account, click **Modify Privilege**. In the dialog box that appears, select the required permissions and click **OK**.
        
    -   Modify the description
        
        In the **Actions** column of the target account, click **Modify Description**. In the dialog box that appears, set a new description and click **OK**.
        
    -   Delete an account
        
        In the **Operation** column of the target account, click **![更多 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0215287061/p96323.png)** > **Delete**. In the dialog box that appears, click **OK**.
        
        **Warning**
        
        After you delete an account, you can no longer use it to log on. To prevent disruptions to your client connections, update your client to use a different account and password before you delete the account.
        

## Reserved words for Redis account names

When you create an account, the account name cannot be any of the following reserved words. The words are separated by commas (,).

**Initial**

**Reserved word**

a~c

add,admin,all,alter,analyze,and,as,asc,asensitive,aurora,before,between,bigint,binary,blob,both,by,call,cascade,case,change,char,character,check,collate,column,condition,connection,constraint,continue,convert,create,cross,current\_date,current\_time,current\_timestamp,current\_user,cursor

d~f

database,databases,day\_hour,day\_microsecond,day\_minute,day\_second,dec,decimal,declare,default,delayed,delete,desc,describe,deterministic,distinct,distinctrow,div,double,drc\_rds,drop,dual,each,eagleye,else,elseif,enclosed,escaped,exists,exit,explain,false,fetch,float,float4,float8,for,force,foreign,from,fulltext

g~l

goto,grant,group,guest,having,high\_priority,hour\_microsecond,hour\_minute,hour\_second,if,ignore,in,index,infile,information\_schema,inner,inout,insensitive,insert,int,int1,int2,int3,int4,int8,integer,interval,into,is,iterate,join,key,keys,kill,label,leading,leave,left,like,limit,linear,lines,load,localtime,localtimestamp,lock,long,longblob,longtext,loop,low\_priority

m~r

match,mediumblob,mediumint,mediumtext,middleint,minute\_microsecond,minute\_second,mod,modifies,mysql,natural,no\_write\_to\_binlog,not,null,numeric,on,optimize,option,optionally,or,order,out,outer,outfile,precision,primary,procedure,purge,raid0,range,read,reads,real,references,regexp,release,rename,repeat,replace,replicator,require,restrict,return,revoke,right,rlike,root

s~z

schema,schemas,second\_microsecond,select,sensitive,separator,set,show,smallint,spatial,specific,sql,sql\_big\_result,sql\_calc\_found\_rows,sql\_small\_result,sqlexception,sqlstate,sqlwarning,ssl,starting,straight\_join,table,terminated,test,then,tinyblob,tinyint,tinytext,to,trailing,trigger,true,undo,union,unique,unlock,unsigned,update,usage,use,using,utc\_date,utc\_time,utc\_timestamp,values,varbinary,varchar,varcharacter,varying,when,where,while,with,write,x509,xor,xtrabak,year\_month,zerofill

## Related API operations

**API operation**

**Description**

[CreateAccount](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createaccount-redis)

Creates an account with specific permissions in an instance.

[GrantAccountPrivilege](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-grantaccountprivilege-redis)

Modifies the permissions of an account in an instance.

[ModifyAccountDescription](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyaccountdescription-redis)

Modifies the description of an account in an instance.

[ModifyAccountPassword](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyaccountpassword-redis)

Modifies the password of a specified account in an instance.

[DeleteAccount](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-deleteaccount-redis)

Deletes a specified account from an instance.

## FAQ

### **What do I do if I fail to create an account?**

-   You can create a maximum of 20 accounts for each instance. If you exceed this limit, delete unused accounts and then try again.
    
-   If you are creating accounts consecutively, wait until the status of the previous account becomes Active before you create the next one.
    
-   You can upgrade the minor version of the instance and then try to create the account again.
    

## References

[Connect to an instance using redis-cli](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db)
