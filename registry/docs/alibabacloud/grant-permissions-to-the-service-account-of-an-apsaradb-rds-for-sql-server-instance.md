When you seek help from Alibaba Cloud technical support to locate problems that occurred on your ApsaraDB RDS for SQL Server instance, you may need to grant permissions to the service account of your RDS instance. The service account is used by Alibaba Cloud technical support to perform operations on the databases of your RDS instance. After the specified expiration time elapses, ApsaraDB RDS deletes the service account.

## Prerequisites

Your RDS instance runs SQL Server 2008 R2 with local SSDs.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
2.  In the left-side navigation pane, click Accounts.
3.  On the Service Account Permissions tab, find the permission that you want to grant to the service account and turn on the switch in the Permission Status column.
    
    -   For issues that are related to IP address whitelists or parameters, you can grant only the Configuration Permission to the service account.
    -   For performance issues that are caused by applications, you must grant the Data Permission to the service account.
    
    ![account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9227788761/p595760.png)
    
4.  In the dialog box that appears, specify the expiration time of the service account and click OK.

## Revoke the permissions or change the expiration time

After you grant permissions to the service account, you can revoke the permissions or change the expiration time on the Service Account Permissions tab at any time.
