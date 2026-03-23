This topic describes how to manage instances in HoloWeb, including editing and deleting both logged-on and logged-off instances.

## Background information

You can perform management operations on both logged-on and logged-off instances. The following table describes the operations.

**Instance type**

**Management operations**

[Manage logged-off instances](#section-pfx-iko-4au)

You can perform the following operations on logged-off instances:

-   Log on to an instance
    
-   Edit an instance
    
-   Remove an instance
    

[Manage logged-on instances](#section-a7n-ozi-17i)

You can perform the following operations on logged-on instances:

-   Refresh
    
-   Edit an instance
    
-   Manage users
    
-   Grant DB permissions
    
-   Switch the logon database
    
-   Create a database
    
-   Log off
    
-   Remove an instance
    

## Manage Unregistered Instances

You can log on to, edit, and delete logged-off instances.

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  On the **Metadata Management** tab, right-click the target logged-off instance to perform management operations.![登录实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273414.png)
    
    **Note**
    
    -   The logged-off instances section displays all instances in the current region under your Alibaba Cloud account for which you have access permissions.
        
    -   When you activate a Hologres engine instance, the system automatically creates a logged-off instance of VPC network type. This instance is displayed in the list with a ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon. You cannot edit its details or delete it.
        
    
    You can perform the following operations:
    
    -   **Connect to Instance**
        
        Right-click the target instance and select **Connect to Instance**. For more information about logging on to an instance, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#task-2523198).
        
    -   **Edit Instance**
        
        Right-click the target instance and select **Edit Instance**. For more information about editing instance parameters, see [Edit instance parameter description](/help/en/hologres/user-guide/connect-to-an-instance#table-uwm-4gq-0jt).
        
        **Note**
        
        -   The ![Internet instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429393261/p273449.png) icon indicates an Internet\-type instance, for which you can edit all parameters.
            
        -   For VPC\-type instances, indicated by the ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon, you can only edit the Description field.
            
        
    -   **Delete Instance**
        
        Right-click the target instance and select **Delete Instance**. After confirming the instance information, click **OK** to delete the instance.
        
        **Note**
        
        Currently, only instances with the ![Internet instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429393261/p273449.png) icon of the Internet type can be deleted, while instances with the ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon of the VPC type cannot be deleted.
        
    

## Manage logged-on instances

You can refresh, edit, manage users and permissions, switch databases, log off, and delete logged-on instances.

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  On the **Metadata Management** tab, right-click the target logged-on instance to perform management operations.
    
    **Note**
    
    -   The Unlogged-in Instances section displays all instances in the current region that your Alibaba Cloud account has permission to access.
        
    -   When you activate a Hologres engine instance, the system automatically creates a logged-off instance of VPC network type. This instance is displayed in the list with a ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon. You cannot edit its details or delete it.
        
    
    You can perform the following operations:
    
    -   **Refresh**
        
        After modifying the instance, refresh it to synchronize the information.
        
    -   **Edit Instance**
        
        Right-click the target instance and select **Edit Instance** to edit the instance. For more information about editing instance parameters, see [Edit instance parameter description](/help/en/hologres/user-guide/connect-to-an-instance#table-uwm-4gq-0jt).
        
        **Note**
        
        -   The ![Public network instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429393261/p273449.png) icon indicates a public network\-type instance, for which you can edit all parameters.
            
        -   For VPC\-type instances, indicated by the ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon, you can only modify the description.
            
        
    -   **Copy Instance URL**
        
        Right-click the target instance and select **Copy Instance URL**. The system copies the Hologres instance link, which you can then paste.
        
    -   **Users**
        
        Right-click the target instance and select **Users**. On the **Users** page, you can add or delete users for the instance. For more information about user management, see [User management](/help/en/hologres/user-guide/manage-users#concept-1954882).
        
    -   **DB Authorization**
        
        Right-click the target instance and select **DB Authorization**. On the **DB Authorization** page, you can create and authorize new databases, or modify the permissions of existing databases. For more information about DB authorization, see [DB management](/help/en/hologres/user-guide/manage-databases#task-1954883).
        
    -   **IP address whitelist**
        
        Right-click the target instance and select **IP address whitelist**. On the **IP address whitelist** page, you can configure an IP address whitelist to manage access. For more information about IP address whitelists, see [IP address whitelist](/help/en/hologres/security-and-compliance/configure-an-ip-address-whitelist#task-2037120).
        
    -   **Switch Database**
        
        Right-click the target instance and select **Switch Database**. On the **Connect to Instance** page, you can switch the database for the current instance. For more information about switching databases, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#task-2523198).
        
    -   **Create Database**
        
        Right-click the target instance and select **Create Database**. On the **Create Database** page, you can create a new database for the current instance. The newly created database then appears in the list. For more information about creating a database, see [Create a database](/help/en/hologres/user-guide/manage-a-database#section-3h0-iua-1p1).
        
    -   **Log Off**
        
        Right-click the target instance and select **Log Off**. After confirming the instance information, click **OK** to log off. The instance is then moved to the list of logged-off instances.
        
    -   **Delete Instance**
        
        You can delete the instance. Right-click the target instance and select **Delete Instance**. After confirming the instance information, click **OK** to delete the instance.
        
        **Note**
        
        You can only delete public network\-type instances, which are indicated by the ![public network instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429393261/p273449.png) icon. VPC\-type instances, indicated by the ![VPC network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229393261/p273444.png) icon, cannot be deleted.
