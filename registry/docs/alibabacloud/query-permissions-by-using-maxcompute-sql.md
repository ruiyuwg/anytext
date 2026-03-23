MaxCompute allows you to query the permissions of a user or role, or the permissions on an object by using MaxCompute SQL. This topic describes how to query permissions by using MaxCompute SQL and provides examples.

The following table describes the permission query operations that you can perform after you grant permissions to a user or role based on the authorization methods that are provided by MaxCompute.

**Scenario**

**Operation**

**Queried by**

**Operation platform**

Query the permissions of a role

[Query the permissions of a specified role](#ac7f10b07b7sn)

[Query the permissions of a specified role and information about the users that are assigned the role](#section-p48-3i5-x67)

Project owner or a user that is assigned the Super\_Administrator or Admin role

-   [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    
-   [DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    

Query the permissions of a user

[Query the permissions of the current user and information about the role that is assigned to the user](#section-dap-fe0-3lj)

[Query the permissions of a specified user and information about the role that is assigned to the user](#section-8q1-yn8-fbx)

Query the ACL-based permissions on an object

[Query the ACL-based permissions on a specified object](#section-46t-zs8-bpt)

Query the label-based permissions

[Query all highly sensitive data tables that the current user can access](#section-lvy-ozv-3dp)

[Query highly sensitive data tables of a specified level that the current user can access](#section-aoe-bch-4ja)

[Query highly sensitive data tables that a specified user can access](#section-3hj-pad-qno)

[Query highly sensitive data tables of a specified level that a specified user can access](#section-8qy-cth-hn2)

[Query users who are authorized to access a specified sensitive data table](#section-n39-alm-hat)

[Query users of a specified level who can access a specified sensitive data table](#section-bcu-x3h-tr0)

[Query the permissions of a specified user on a specified sensitive data table](#section-rhv-05e-pjh)

[Query the sensitivity levels of all columns in a specified table](#section-k82-xyr-by6)

Query the permissions on a package

[Query the permissions on a specified package](#section-a54-s2r-f37)

[Query the permissions on an object in a specified package](#section-s83-uay-81d)

[Query the label-based permissions on a table in a specified package](#section-5qe-o1a-130)

MaxCompute displays Letters A, D, C, and G to present the permissions of a user or role in the query result.

-   A: Allow. The operation is allowed.
    
-   D: Deny. The operation is denied.
    
-   C: With Condition. The permissions can be granted with conditions.
    
-   G: With Grant Option. The permissions on the specified object can be granted.
    

## **Query the permissions of a specified role**

-   Syntax
    
    ```
    show grants for role <role_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    role\_name
    
    Yes
    
    The name of the role whose permissions you want to query.
    
    You can run the `list roles;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the role.
    
-   Query result
    
    The query result includes the ACL-based, policy-based, and Download permissions.
    
-   Examples
    
    The Worker role is used in the test\_project\_a project. Sample command:
    
    ```
    show grants for role Worker;
    ```
    
    The following result is returned:
    
    ```
    Authorization Type: ACL
    [role/Worker]
    A       projects/test_project_a: CreateTable | CreateResource | CreateInstance | CreateFunction | List
    A       projects/test_project_a/tables/bank_data: Download | Describe | Select	Expires:20xx-xx-xxTxx:xx:xx+xxxx     
    
    Authorization Type: Policy
    [role/Worker]
    A       projects/test_project_a/tables/bak*: Download
    A       projects/test_project_a/tables/sale_detail: Update
    A       projects/test_project_a/tables/tb_*: Download | Drop
    A       projects/test_project_a/tables/view_1: Drop
    ```
    

## Query the permissions of a specified role and information about the users that are assigned the role

-   Syntax
    
    ```
    describe role <role_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    role\_name
    
    Yes
    
    The name of the role whose permissions you want to query.
    
    You can run the `list roles;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the role.
    
-   Query result
    
    The query result includes the ACL-based, policy-based, and Download permissions.
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project, and the Worker role is used in the project. Sample command:
    
    ```
    describe role Worker;
    ```
    
    The following result is returned:
    
    ```
    [users]
    RAM$Bob@aliyun.com:Allen
    
    Authorization Type: ACL
    A       projects/test_project_a: CreateTable | CreateResource | CreateInstance | CreateFunction | List
    A       projects/test_project_a/tables/bank_data: Download    
    
    Authorization Type: Policy
    A       projects/test_project_a/tables/bak*: Download
    A       projects/test_project_a/tables/sale_detail: Update
    A       projects/test_project_a/tables/tb_*: Download | Drop
    A       projects/test_project_a/tables/view_1: Drop
    ```
    

## Query the permissions of the current user and information about the role that is assigned to the user

-   Syntax
    
    ```
    show grants;
    ```
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   If the current user is the project owner, the Alibaba Cloud account of the user and the projects that are created by the user are returned.
        
    -   If the current user is not the project owner, the role that is assigned to the user and the ACL-based, policy-based, and Download permissions of the user are returned.
        
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project. Allen is a RAM user that is added to the project.
    
    -   If you access the project by using the Alibaba Cloud account Bob@aliyun.com, run the `show grants;` command. The following result is returned:
        
        ```
        [ALIYUN$Bob@aliyun.com]
        projects/test_project_a: Project Owner
        ```
        
    -   If you access the project by using the RAM user Allen, run the `show grants;` command. The following result is returned:
        
        ```
        [roles]
        worker
        
        Authorization Type: ACL
        [user/RAM$Bob@aliyun.com:Allen]
        A       projects/test_project_a: CreateTable | CreateResource | CreateInstance | CreateFunction | List
        A       projects/test_project_a/packages/project_test_b.datashare: Read
        
        Authorization Type: Policy
        [role/worker]
        A       projects/test_project_a/tables/tb_*: Drop | Download
        ```
        

## Query the permissions of a specified user and information about the role that is assigned to the user

-   Syntax
    
    ```
    show grants for <user_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    user\_name
    
    Yes
    
    The name of the user whose permissions you want to query.
    
    You can run the `list users;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the list of the users.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   If the current user is the project owner, the Alibaba Cloud account of the user and the projects that are created by the user are returned.
        
    -   If the current user is not the project owner, the role that is assigned to the user and the ACL-based, policy-based, and Download permissions of the user are returned.
        
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project. Allen is a RAM user that is added to the project.
    
    -   Query the permissions of the Alibaba Cloud account Bob@aliyun.com. Sample command:
        
        ```
        show grants for ALIYUN$Bob@aliyun.com;
        ```
        
        The following result is returned:
        
        ```
        [ALIYUN$Bob@aliyun.com]
        projects/test_project_a: Project Owner
        ```
        
    -   Query the permissions of the RAM user Allen. Sample command:
        
        ```
        show grants for RAM$Bob@aliyun.com:Allen;
        ```
        
        The following result is returned:
        
        ```
        [roles]
        worker
        
        Authorization Type: ACL
        [user/RAM$Bob@aliyun.com:Allen]
        A       projects/test_project_a: CreateTable | CreateResource | CreateInstance | CreateFunction | List
        A       projects/test_project_a/packages/project_test_b.datashare: Read
        
        Authorization Type: Policy
        [role/worker]
        A       projects/test_project_a/tables/tb_*: Drop | Download
        ```
        

## Query the ACL-based permissions on a specified object

-   Syntax
    
    ```
    show acl for <object_name> [on type <object_type>];
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    object\_name
    
    Yes
    
    The name of the object on which you want to query ACL-based permissions.
    
    -   Project: To view the name of a MaxCompute project, log on to [the MaxCompute console](https://workbench-intl.data.aliyun.com/consolenew?#/MCEngines). In the top navigation bar, select a region. Then, view the name of the MaxCompute project on the **Project management** tab. When you query information about a project, you can only obtain information about the current project.
        
    -   Table or view: To obtain the name of a table or view, run the `show tables;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db).
        
    -   Resource: To obtain the name of a resource, run the `list resources;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db).
        
    -   Function: To obtain the name of a function, run the `list functions;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db).
        
    -   Instance: To obtain the name of an instance, run the `show instances;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Instance names are the same as instance IDs in MaxCompute.
        
    
    object\_type
    
    No
    
    The type of the object on which you want to query ACL-based permissions.
    
    Valid values:
    
    -   Project: The object is a project.
        
    -   Table: The object is a table.
        
    -   Model: The object is a model.
        
    -   Resource: The object is a resource file.
        
    -   Function: The object is a function.
        
    -   Instance: The object is an instance.
        
    
    By default, if you do not specify `on type <object_type>`, the type of the object is Table.
    
-   Query result
    
    The query result includes the information of the roles and users that have the permissions on the specified object and the ACL-based permissions.
    
-   Example
    
    View the permissions on an object in the test\_project\_a project.
    
    -   Query the permissions on the project. Sample command:
        
        ```
        show acl for test_project_a on type project;
        ```
        
        The following result is returned:
        
        ```
        Authorization Type: Implicit
        AG      project_owner/ALIYUN$Bob@aliyun.com: All
        AG      admin/ALIYUN$Bob@aliyun.com: All
        
        Authorization Type: ACL
        A       role/worker(projects/test_project_a): CreateTable | CreateResource | CreateInstance | CreateFunction | List
        A       role/worker1(projects/test_project_a): CreateTable | CreateResource | CreateInstance | CreateFunction | List
        A       role/worker2(projects/test_project_a): CreateTable | CreateResource | CreateInstance | CreateFunction
        ```
        
    -   Query the permissions on a table. Sample command:
        
        ```
        show acl for sale_detail on type table;
        ```
        
        The following result is returned:
        
        ```
        Authorization Type: Implicit
        AG      project_owner/ALIYUN$Bob@aliyun.com: All
        AG      admin/ALIYUN$Bob@aliyun.com: All
        AG      object_creator/ALIYUN$Bob@aliyun.com: All
        
        Authorization Type: ACL
        A       user/RAM$Bob@aliyun.com:Allen(acs:odps:*:projects/test_project_a/tables/sale_detail/customer_id): Describe | Select
        A       user/RAM$Bob@aliyun.com:Allen(acs:odps:*:projects/test_project_a/tables/sale_detail/shop_name): Describe | Select
        ```
        
    -   Query the permissions on a resource. Sample command:
        
        ```
        show acl for udtf.jar on type resource;
        ```
        
        The following result is returned:
        
        ```
        Authorization Type: Implicit
        AG      project_owner/ALIYUN$Bob@aliyun.com: All
        AG      admin/ALIYUN$Bob@aliyun.com: All
        AG      object_creator/ALIYUN$Bob@aliyun.com: All
        
        Authorization Type: ACL
        A       user/RAM$Bob@aliyun.com:Allen(acs:odps:*:projects/test_project_a/resources/udtf.jar): Read | Write
        ```
        
    -   Query the permissions on a function. Sample command:
        
        ```
        show acl for UDTFResource on type function;
        ```
        
        The following result is returned:
        
        ```
        Authorization Type: Implicit
        AG      project_owner/ALIYUN$Bob@aliyun.com: All
        AG      admin/ALIYUN$Bob@aliyun.com: All
        AG      object_creator/ALIYUN$Bob@aliyun.com: All
        
        Authorization Type: ACL
        A       role/worker1(acs:odps:*:projects/test_project_a/registration/functions/udtfresource): Download
        A       user/RAM$Bob@aliyun.com:Allen(acs:odps:*:projects/test_project_a/registration/functions/udtfresource): All
        ```
        
    -   Query the permissions on an instance. Sample command:
        
        ```
        show acl for 20220105031923461ghu**** on type instance;
        ```
        
        The following result is returned:
        
        ```
        Authorization Type: Implicit
        AG      project_owner/ALIYUN$Bob@aliyun.com: All
        AG      admin/ALIYUN$Bob@aliyun.com: All
        AG      object_creator/ALIYUN$Bob@aliyun.com: All
        
        Authorization Type: ACL
        A       user/RAM$Bob@aliyun.com:Allen(acs:odps:*:projects/test_project_a/instances/20220105031923461ghu****): All
        ```
        

## Query all highly sensitive data tables that the current user can access

-   Syntax
    
    ```
    show label grants;
    ```
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   User Label: the access level of the current user.
        
    -   TableName: the name of the highly sensitive data table that the current user can access.
        
    -   GrantedLabel: the level of sensitive data that the current user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project. Allen is a RAM user that is added to the project.
    
    -   If you access the project by using the Alibaba Cloud account Bob@aliyun.com, run the `show label grants;` command. The following result is returned:
        
        ```
        User Label: 0
        
        +--------------+--------------+--------------------------+
        | TableName    | GrantedLabel | Expires                  |
        +--------------+--------------+--------------------------+
        | bank_data    | 3            | 2022-07-04T16:30:47+0800 |
        +--------------+--------------+--------------------------+
        | bank_data_pt | 4            | 2022-07-04T16:36:04+0800 |
        +--------------+--------------+--------------------------+
        ```
        
    -   If you access the project by using the RAM user Allen, run the `show label grants;` command. The following result is returned:
        
        ```
        User Label: 1
        
        +-------------+--------------+--------------------------+
        | TableName   | GrantedLabel | Expires                  |
        +-------------+--------------+--------------------------+
        | sale_detail | 2            | 2022-01-09T11:43:27+0800 |
        +-------------+--------------+--------------------------+
        ```
        

## Query highly sensitive data tables of a specified level that the current user can access

-   Syntax
    
    ```
    show label <level> grants;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    level
    
    Yes
    
    The specified level of the sensitive data.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   User Label: the access level of the current user.
        
    -   TableName: the name of the highly sensitive data table that the current user can access.
        
    -   GrantedLabel: the level of sensitive data that the current user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project. Allen is a RAM user that is added to the project.
    
    -   If you access the project by using the Alibaba Cloud account Bob@aliyun.com, run the following command:
        
        ```
        show label 3 grants;
        ```
        
        The following result is returned:
        
        ```
        User Label: 0
        
        +--------------+--------------+--------------------------+
        | TableName    | GrantedLabel | Expires                  |
        +--------------+--------------+--------------------------+
        | bank_data    | 3            | 2022-07-04T16:30:47+0800 |
        +--------------+--------------+--------------------------+
        ```
        
    -   If you access the project by using the RAM user Allen, run the following command:
        
        ```
        show label 2 grants;
        ```
        
        The following result is returned:
        
        ```
        User Label: 1
        
        +-------------+--------------+--------------------------+
        | TableName   | GrantedLabel | Expires                  |
        +-------------+--------------+--------------------------+
        | sale_detail | 2            | 2022-01-09T11:43:27+0800 |
        +-------------+--------------+--------------------------+
        ```
        

## Query highly sensitive data tables that a specified user can access

-   Syntax
    
    ```
    show label grants for user <user_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    user\_name
    
    Yes
    
    The name of the user whose permissions you want to query.
    
    You can run the `list users;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the list of the users.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   User Label: the access level of the current user.
        
    -   TableName: the name of the highly sensitive data table that the current user can access.
        
    -   GrantedLabel: the level of sensitive data that the current user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project. Allen is a RAM user that is added to the project. Query highly sensitive data tables that the RAM user Allen can access. Sample command:
    
    ```
    show label grants for user RAM$Bob@aliyun.com:Allen;
    ```
    
    The following result is returned:
    
    ```
    User Label: 2
    
    +-----------+--------------+--------------------------+
    | TableName | GrantedLabel | Expires                  |
    +-----------+--------------+--------------------------+
    | bank_data | 3            | 2022-07-04T16:29:32+0800 |
    +-----------+--------------+--------------------------+
    ```
    

## Query highly sensitive data tables of a specified level that a specified user can access

-   Syntax
    
    ```
    show label <level> grants for user <user_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    level
    
    Yes
    
    The specified level of the sensitive data.
    
    user\_name
    
    Yes
    
    The name of the user whose permissions you want to query.
    
    You can run the `list users;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the list of the users.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   User Label: the access level of the current user.
        
    -   TableName: the name of the highly sensitive data table that the current user can access.
        
    -   GrantedLabel: the level of sensitive data that the current user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    The Alibaba Cloud account Bob@aliyun.com is the owner of the test\_project\_a project. Allen is a RAM user that is added to the project. Query highly sensitive data tables that the RAM user Allen can access. Sample command:
    
    ```
    show label 3 grants for user RAM$Bob@aliyun.com:Allen;
    ```
    
    The following result is returned:
    
    ```
    User Label: 2
    
    +-----------+--------------+--------------------------+
    | TableName | GrantedLabel | Expires                  |
    +-----------+--------------+--------------------------+
    | bank_data | 3            | 2022-07-04T16:29:32+0800 |
    +-----------+--------------+--------------------------+
    ```
    

## Query users who are authorized to access a specified sensitive data table

-   Syntax
    
    ```
    show label grants on table <table_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    table\_name
    
    Yes
    
    The name of the specified sensitive data table.
    
    You can run the `show tables;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the name of the table.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   Sensitive Label Range: the sensitive data level range of the current table.
        
    -   UserName: the users and roles that can access the specified sensitive data table.
        
    -   GrantedLabel: the level of the sensitive data that the user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    Query users who can access the highly sensitive data table sale\_detail in the test\_project\_a project. Sample command:
    
    ```
    show label grants on table sale_detail;
    ```
    
    The following result is returned:
    
    ```
    Sensitive Label Range: [3, 4]
    
    +-------------------------------------------------+--------------+--------------------------+
    | UserName                                        | GrantedLabel | Expires                  |
    +-------------------------------------------------+--------------+--------------------------+
    | worker                                          | 4            | 2022-07-04T11:23:35+0800 |
    +-------------------------------------------------+--------------+--------------------------+
    | RAM$Bob@aliyun.com:Allen                        | 4            | 2022-07-04T17:54:00+0800 |
    +-------------------------------------------------+--------------+--------------------------+
    ```
    

## Query users of a specified level who can access a specified sensitive data table

-   Syntax
    
    ```
    show label <level> grants on table <table_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    level
    
    Yes
    
    The specified level of the sensitive data.
    
    table\_name
    
    Yes
    
    The name of the specified sensitive data table.
    
    You can run the `show tables;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the name of the table.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   Sensitive Label Range: the sensitive data level range of the current table.
        
    -   UserName: the users and roles that can access the specified sensitive data table.
        
    -   GrantedLabel: the level of the sensitive data that the user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    Query users who can access the highly sensitive data table sale\_detail in the test\_project\_a project. Sample command:
    
    ```
    show label 4 grants on table sale_detail;
    ```
    
    The following result is returned:
    
    ```
    Sensitive Label Range: [3, 4]
    
    +-------------------------------------------------+--------------+--------------------------+
    | UserName                                        | GrantedLabel | Expires                  |
    +-------------------------------------------------+--------------+--------------------------+
    | worker                                          | 4            | 2022-07-04T11:23:35+0800 |
    +-------------------------------------------------+--------------+--------------------------+
    | RAM$Bob@aliyun.com:Allen                        | 4            | 2022-07-04T17:54:00+0800 |
    +-------------------------------------------------+--------------+--------------------------+
    ```
    

## Query the permissions of a specified user on a specified sensitive data table

-   Syntax
    
    ```
    show label [<label>] grants on table <table_name> for user <user_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    label
    
    No
    
    The specified level of the sensitive data.
    
    table\_name
    
    Yes
    
    The name of the specified sensitive data table.
    
    You can run the `show tables;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the name of the table.
    
    user\_name
    
    Yes
    
    The name of the user whose permissions you want to query.
    
    You can run the `list users;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the list of the users.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   User Label: the access level label of the current user.
        
    -   Column: the columns of the specified sensitive data table that the user can access.
        
    -   GrantedLabel: the level of the sensitive data that the user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    Query the data that the RAM user Allen can access the table sale\_detail in the test\_project\_a project. Sample command:
    
    ```
    show label grants on table sale_detail for user RAM$Bob@aliyun.com:Allen;
    ```
    
    The following result is returned:
    
    ```
    User Label: 2
    +-------------+--------------+--------------------------+
    | Column      | GrantedLabel | Expires                  |
    +-------------+--------------+--------------------------+
    | customer_id | 4            | 2022-07-04T17:54:00+0800 |
    +-------------+--------------+--------------------------+
    | shop_name   | 4            | 2022-07-04T17:54:00+0800 |
    +-------------+--------------+--------------------------+
    | total_price | 4            | 2022-07-04T17:54:00+0800 |
    +-------------+--------------+--------------------------+
    ```
    

## Query the sensitivity levels of all columns in a specified table

-   Syntax
    
    ```
    describe <table_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    table\_name
    
    Yes
    
    The name of the specified sensitive data table.
    
    You can run the `show tables;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to obtain the name of the table.
    
-   Query result
    
    The query result includes TableLabel, MaxLabel, and Label. TableLabel indicates the sensitivity level of the current table. MaxLabel indicates the maximum sensitivity level of the columns in the table. Label indicates the sensitivity level of each column.
    
-   Example
    
    Query the sensitivity levels of the table sale\_detail and the columns of the table in the test\_project\_a project. Sample command:
    
    ```
    describe sale_detail;
    ```
    
    The following result is returned:
    
    ```
    +------------------------------------------------------------------------------------+
    | Owner: ALIYUN$Bob@aliyun.com | Project: project_test_a                             |
    | TableComment:                                                                      |
    +------------------------------------------------------------------------------------+
    | CreateTime:               2021-12-13 11:27:04                                      |
    | LastDDLTime:              2021-12-13 11:27:04                                      |
    | LastModifiedTime:         2021-12-13 11:27:26                                      |
    +------------------------------------------------------------------------------------+
    | TableLabel:               3                                                        |
    | MaxLabel:                 L4                                                       |
    +------------------------------------------------------------------------------------+
    | InternalTable: YES      | Size: 784                                                |
    +------------------------------------------------------------------------------------+
    | Native Columns:                                                                    |
    +------------------------------------------------------------------------------------+
    | Field           | Type       | Label | Comment                                     |
    +------------------------------------------------------------------------------------+
    | shop_name       | string     | 4     |                                             |
    | customer_id     | string     | 4     |                                             |
    | total_price     | double     | 3     |                                             |
    +------------------------------------------------------------------------------------+
    | Partition Columns:                                                                 |
    +------------------------------------------------------------------------------------+
    | sale_date       | string     |                                                     |
    | region          | string     |                                                     |
    +------------------------------------------------------------------------------------+
    ```
    

## Query the permissions on a specified package

-   Syntax
    
    ```
    show acl for <project_name>.<package_name> on type package;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    project\_name
    
    Yes
    
    The name of the project to which the specified package belongs.
    
    You can run the `describe package <package_name>;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the project to which the package belongs.
    
    package\_name
    
    Yes
    
    The name of the specified package.
    
    You can run the `show packages;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the specified package.
    
-   Query result
    
    The query result includes the information of the built-in roles and users who have the permissions to manage objects in a MaxCompute project and the ACL-based permissions.
    
-   Example
    
    Query the permissions on the package datashare that is installed in the test\_project\_b project. Sample command:
    
    ```
    show acl for test_project_b.datashare on type package;
    ```
    
    The following result is returned:
    
    ```
    Authorization Type: Implicit
    AG      project_owner/ALIYUN$Bob@aliyun.com: All
    AG      admin/ALIYUN$Bob@aliyun.com: All
    
    Authorization Type: ACL
    A       user/RAM$Amy@aliyun.com:Bella(acs:odps:*:projects/test_project_b/packages/test_project_a.datashare): Read
    ```
    

## Query the permissions on an object in a specified package

-   Syntax
    
    ```
    show grants on <object_type> <object_name> privilegeproperties ("refobject"="true", "refproject"="<project_name>", "package"="<package
    _name>");
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    object\_type
    
    Yes
    
    The type of the object in the package on which you want to query the permissions.
    
    You can run the `describe package <project_name>.<package_name>;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the type of the object in the package.
    
    object\_name
    
    Yes
    
    The name of the object in the package on which you want to query the permissions.
    
    You can run the `describe package <project_name>.<package_name>;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the object in the package.
    
    project\_name
    
    Yes
    
    The name of the project to which the specified package belongs.
    
    You can run the `describe package <project_name>.<package_name>;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the project to which the package belongs.
    
    package\_name
    
    Yes
    
    The name of the specified package.
    
    You can run the `show packages;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the specified package.
    
-   Query result
    
    The query result includes the information of the built-in roles and users who have the permissions to manage a specified object in a MaxCompute project and the ACL-based permissions.
    
-   Example
    
    Query the permissions on the table sale\_detail in the package datashare that is installed in the MaxCompute project. Sample command:
    
    ```
    show grants on Table sale_detail privilegeproperties ("refobject"="true", "refproject"="test_project_a", "package"="datashare");
    ```
    
    The following result is returned:
    
    ```
    Authorization Type: Implicit
    AG      project_owner/: All
    
    Authorization Type: InstalledObjecACL
    [datashare]
    A       user/RAM$Amy@aliyun.com:Bella(acs:odps:*:projects/test_project_a/tables/sale_detail): Select
    ```
    

## Query the label-based permissions on a table in a specified package

-   Syntax
    
    ```
    show label grants on table <table_name> privilegeproperties ("refobject"="true", "refproject"="<project_name>", "package"="<package_name>");
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    table\_name
    
    Yes
    
    The name of the table in the specified package on which the label-based permissions you want to query.
    
    You can run the `describe package <project_name>.<package_name>;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the table in the package.
    
    project\_name
    
    Yes
    
    The name of the project to which the specified package belongs.
    
    You can run the `describe package <package_name>;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the project to which the package belongs.
    
    package\_name
    
    Yes
    
    The name of the specified package.
    
    You can run the `show packages;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the name of the specified package.
    
-   Query result
    
    The query result varies based on whether the current user is the project owner:
    
    -   Sensitive Label Range: the sensitive data level range of the current table.
        
    -   UserName: the users and roles that can access the specified sensitive data table.
        
    -   GrantedLabel: the level of the sensitive data that the user can access.
        
    -   Expires: the time at which the permissions expire.
        
    
-   Example
    
    Query the label-based permissions on the table sale\_detail in the package datashare that is installed in the MaxCompute project. Sample command:
    
    ```
    show label grants on table sale_detail privilegeproperties ("refobject"="true", "refproject"="test_project_a", "package"="datashare");
    ```
    
    The following result is returned:
    
    ```
    Sensitive Label Range: [2, 4]
    
    +-------------------------------------------------+--------------+--------------------------+
    | UserName                                        | GrantedLabel | Expires                  |
    +-------------------------------------------------+--------------+--------------------------+
    | RAM$Amy@aliyun.com:Bella                        | 3            | 2022-07-12T22:24:24+0800 |
    +-------------------------------------------------+--------------+--------------------------+
    ```
