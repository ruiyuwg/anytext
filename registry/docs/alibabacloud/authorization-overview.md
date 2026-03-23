Before using the data transformation feature, you must have the permissions to perform related operations for data transformation and to access the required data.

-   If you use an Alibaba Cloud account, you need only to authorize a data transformation task to access the required data before you can run the task.
    
    **Important**
    
    To ensure the security of your cloud resources, we recommend that you use a Resource Access Management (RAM) user.
    
-   If you use a RAM user, you must authorize the user to perform the related operations and authorize a data transformation task to access the required data before you can run the task.
    

## Permissions to perform related operations

The operations include creating, deleting, modifying, and viewing a data transformation task. The operations also include previewing transformation results.

-   You can use an Alibaba Cloud account to perform the operations. The account has the management permissions on Simple Log Service that are specified by the AliyunLogFullAccess policy. If you use an Alibaba Cloud account to run a data transformation task, you do not need to grant the permissions to perform related operations.
    
-   You can also use a RAM user to perform the operations. If you use a RAM user to run a data transformation task, you must grant the user the permissions to perform related operations by using an Alibaba Cloud account. We recommend that you use a RAM user. For more information, see [Grant a RAM user the permissions to manage a data transformation job](/help/en/sls/authorized-ram-user-operation-data-processing#task-2005445).
    

## Permissions to access the required data

The following procedure describes how a data transformation task works. Steps 1 and 3 involve data access. The system needs to read data from a source logstore and write transformed data to one or more destination logstores.

1.  Read data from the source logstore.
    
2.  Transform the data.
    
3.  Write the transformed data to the destination logstores.
    

You can grant permissions to access the required data using a default role or custom role.

-   Default role: You can authorize a data transformation task to assume the system role AliyunLogETLRole to read data from a source logstore and write transformed data to one or more destination logstores. For more information, see [Access data by using a default role](/help/en/sls/access-data-by-using-a-default-role#task-2564983).
    
    The AliyunLogETLRole role has access permissions on logstores.
    
-   Custom role: You can authorize a data transformation task to assume a custom role to read data from a source logstore and write transformed data to one or more destination logstores. For more information, see [Access data by using a custom role](/help/en/sls/access-data-by-using-a-custom-role#task-2565033).
    
    You must use an Alibaba Cloud account to grant the access permissions on logstores to the custom role.
