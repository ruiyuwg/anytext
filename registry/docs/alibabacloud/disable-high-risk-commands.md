You can configure the #no\_loose\_disabled-commands parameter in the console to disable specific commands that may degrade the performance of Tair (Redis OSS-compatible) and cause data loss.

## Background information

In specific scenarios, unlimited use of commands may cause issues. Specific commands such as FLUSHALL and FLUSHDB clear most or all of the data. Improper use of commands such as KEYS and HGETALL may block the Tair (Redis OSS-compatible) service and affect service performance. You can disable specific commands based on your business requirements.

To ensure stable instance performance, Tair (Redis OSS-compatible) does not allow commands such as CONFIG to be disabled. For more information, see [Commands that cannot be disabled](/help/en/redis/user-guide/disable-high-risk-commands#section-719-h69-vmi).

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Parameter Settings**.
    
3.  On the System Parameters tab, find the #no\_loose\_disabled-commands parameter and click **Modify** in the **Actions** column.
    
4.  In the dialog box that appears, specify the commands that you want to disable.
    
    **Important**
    
    -   The commands that you specify can contain only lowercase letters. Separate multiple commands with commas (,). Example: keys,flushdb.
        
    -   After you disable a command, its subcommands are also disabled. For example, after you disable the script command, commands such as SCRIPT EXISTS and SCRIPT LOAD are also disabled. However, you cannot disable subcommands individually.
        
    
5.  Click **OK**.
    

## Execution result

If you use [redis-cli](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db) to connect to an instance and run the disabled FLUSHALL command, Tair returns the error message: `ERR command 'FLUSHALL' not support for normal user` or `NOPERM this user has no permissions to run the 'flushall' command`.

## Commands that cannot be disabled

The following commands cannot be disabled: CONFIG, MIGRATE, RESTORE-ASKING, LASTSAVE, BGREWRITEAOF, REPLICAOF, BGSAVE, PFDEBUG, PFSELFTEST, SLAVEOF, ACL-related commands, MODULE-related commands, and DEBUG-related commands.

## Related API operations

**API operation**

**Description**

[DescribeParameters](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeparameters-redis)

Queries the configuration and operational parameters of an instance.

[ModifyInstanceConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceconfig-redis)

Modifies the parameter settings of an instance.
