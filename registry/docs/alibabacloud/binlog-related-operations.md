This topic describes how to enable, disable, and manage the Binlog service from the OceanBase console.

## **Limits**

The Binlog service is available only to customers on the allowlist and is free for a limited time. To use this service, contact OceanBase Technical Support.

## **Enable the Binlog service**

The Binlog service is disabled by default in OceanBase. You can enable it in the tenant workspace or the tenant instance workspace. The following steps describe how to enable the service in the tenant workspace:

1.  Log on to the [OceanBase Management Console](https://oceanbase.console.alibabacloud.com).
    
2.  In the navigation pane on the left, click **Instances**. In the instance list, select the target cluster instance to open its workspace.
    
3.  In the navigation pane on the left, click **Tenant Management**. In the tenant list, select the target tenant to open its workspace.![Binlog开通..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6971435861/p637626.png)
    
4.  Next to **Binlog Service**, click **Enable**. In the pop-up window, click **OK** to enable the Binlog service.
    
    **Note**
    
    -   Binlog files do not occupy the disk space of the database instance.
        
    -   Binlog files are automatically deleted based on the retention period. The default retention period is 18 hours. The maximum storage size is 50 GB. If this limit is exceeded, the system automatically deletes the oldest log files.
        
    -   For OceanBase Database V3.x versions later than V3.2.4.4 or V4.x versions later than V4.1.0.1, when you enable the Binlog service, the system also sets a MySQL compatibility parameter. This parameter makes the output of SHOW CREATE TABLE/DATABASE compatible with MySQL. For example, after you enable the Binlog service, the service sets the `_show_ddl_in_compat_mode` parameter to 1 by default. As a result, `SHOW CREATE TABLE` returns a statement in MySQL compatibility mode. To display OceanBase Database-specific syntax, set `_show_ddl_in_compat_mode` to 0 in the current session, or turn off the MySQL compatibility switch for the Binlog service.
        
        The MySQL mode of OceanBase Database has unique extensions, such as various types of subpartitions and List Default partitions. If you have created tables using these features, the displayed content will differ from the actual OceanBase Database schema when compatibility mode is enabled. Use this feature with caution.
        
    

## **Manage binlogs**

After enabling the Binlog service, you can modify its retention period, view performance monitoring data, or disable the service in the tenant workspace or tenant instance workspace as needed.

![Binlog相关操作..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6971435861/p637628.png)

1.  For OceanBase Database V3.x versions later than V3.2.4.4 or V4.x versions later than V4.1.0.1, next to **Binlog Service**, click **Actions** > **Parameter Settings**. You can then modify the Binlog retention period or disable DDL output compatibility. If you disable DDL output compatibility, the output includes additional OceanBase-specific parameters, such as storage information. This may affect tools that rely on the command's output.
    
2.  For other versions of OceanBase Database, next to **Binlog Service**, click **Actions** > **Modify Retention Period**. You can set the retention period to a value from 1 to 240 hours. Files that exceed the retention period are automatically deleted.
    
3.  Next to **Binlog Service**, click **Actions** > **View Performance Monitoring** to open the tenant's performance monitoring page and view the Binlog disk usage.
    
4.  Next to **Binlog Service**, click **Actions** > **Disable Binlog Service**. After the Binlog service is disabled, all existing log files are deleted and the storage space they occupy is released.
