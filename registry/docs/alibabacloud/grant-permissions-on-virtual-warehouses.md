This topic describes the statements that are used to manage permissions on virtual warehouses, such as the statement to view access permissions on virtual warehouses and the statement to configure a default virtual warehouse for an instance or a user.

## **Precautions**

-   Only Hologres V2.0.4 and later support the virtual warehouse feature. If the version of your Hologres instance is earlier than V2.0.4, manually upgrade your Hologres instance in the Hologres console or join the DingTalk group for technical support. For more information about how to manually upgrade your Hologres instance in the Hologres console, see the "Manual upgrade" section in [Instance upgrades](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv). For more information about how to obtain technical support, see [How to get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   Before you use the virtual warehouse feature, you must join the Hologres DingTalk group to apply for background configurations.
    

## **View access permissions of users on all virtual warehouses**

-   Syntax
    
    Execute the following SQL statement to view access permissions of users on all virtual warehouses on the connected instance:
    
    ```
    SELECT * FROM hologres.hg_warehouse_users;
    ```
    
-   Fields
    
    The following table describes the fields in the hg\_warehouse\_users table.
    
    **Field**
    
    **Data type**
    
    **Description**
    
    **Example**
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse.
    
    init\_warehouse
    
    warehouse\_id
    
    INTEGER
    
    The unique ID of the virtual warehouse.
    
    1
    
    username
    
    TEXT
    
    The name of the user who has permissions on the virtual warehouse.
    
    BASIC$user1
    

## **View default virtual warehouses of all users**

-   Syntax
    
    Execute the following SQL statement to view the default virtual warehouses of all users in the connected instance. Only one default virtual warehouse is configured for each user.
    
    ```
    SELECT * FROM hologres.hg_user_default_warehouse;
    ```
    
-   Fields
    
    The following table describes the fields in the hg\_user\_default\_warehouse table.
    
    **Field**
    
    **Data type**
    
    **Description**
    
    **Example**
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse.
    
    init\_warehouse
    
    warehouse\_id
    
    INTEGER
    
    The unique ID of the virtual warehouse.
    
    1
    
    username
    
    TEXT
    
    The name of the user who has permissions on the virtual warehouse.
    
    BASIC$user1
    

## **Configure a default virtual warehouse for an instance**

-   Syntax
    
    Execute the following SQL statement to configure a default virtual warehouse for an instance.
    
    **Note**
    
    By default, all users of the instance have permissions on the default virtual warehouse.
    
    ```
    CALL hg_set_default_warehouse ('<warehouse_name>');
    ```
    
-   Fields
    
    **Field**
    
    **Data type**
    
    **Description**
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse that you want to configure as the default virtual warehouse.
    

## **Grant permissions on a virtual warehouse to a user**

-   Syntax
    
    Execute the following SQL statement to grant permissions on a virtual warehouse to a user:
    
    ```
    CALL hg_grant_warehouse_access_privilege ('<warehouse_name>','"<user_name>"');
    ```
    
-   Fields
    
    **Field**
    
    **Data type**
    
    **Description**
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse on which you want to grant permissions.
    
    user\_name
    
    TEXT
    
    The user ID. Examples:
    
    -   RAM user: p4\_2xxxxxxxxx
        
    -   Custom account: BASIC$user1
        
    

## **Revoke permissions on a virtual warehouse from a user**

-   Syntax
    
    Execute the following SQL statement to revoke permissions on a virtual warehouse from a user:
    
    ```
    CALL hg_revoke_warehouse_access_privilege ('<warehouse_name>','"<user_name>"');
    ```
    
-   Fields
    
    **Field**
    
    **Data type**
    
    **Description**
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse on which you want to revoke permissions.
    
    user\_name
    
    TEXT
    
    The name of the user. Examples:
    
    -   RAM user: p4\_2xxxxxxxxx
        
    -   Custom account: BASIC$user1
        
    

## **Configure a default virtual warehouse for a user**

-   Syntax
    
    -   Execute the following statement to configure a default virtual warehouse for a user:
        
        ```
        CALL hg_set_user_default_warehouse ('"<user_name>"','<warehouse_name>');
        ```
        
    -   Execute the following statement to remove the default virtual warehouse from a user:
        
        ```
        CALL hg_reset_user_default_warehouse ('"<user_name>"');
        ```
        
    
-   Fields
    
    **Field**
    
    **Data type**
    
    **Description**
    
    user\_name
    
    TEXT
    
    The name of the user. Examples:
    
    -   RAM user: p4\_2xxxxxxxxx
        
    -   Custom account: BASIC$user1
        
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse that you want to configure as the default virtual warehouse.
    

## **Release connections to virtual warehouses**

-   Precautions
    
    -   Only users that are assigned the superuser role on an instance can execute the SQL statement to release connections to virtual warehouses in the instance.
        
    -   Users that are assigned the superuser role on an instance can access all virtual warehouses in the instance. The SQL statement does not release the connections of users to whom the superuser role is assigned.
        
    
-   Syntax
    
    ```
    SELECT hg_kill_unprivileged_warehouse_connections(); 
    ```
