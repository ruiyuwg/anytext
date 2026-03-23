This topic describes how to configure an Active Directory (AD) domain controller on an Elastic Compute Service (ECS) instance and connect an ApsaraDB RDS for PostgreSQL instance to a self-managed AD domain.

## Background information

AD is a directory service that is provided by Microsoft. A directory is a hierarchical structure that stores information about the objects on the same LAN. An enterprise can store data, such as computer accounts, user accounts, and groups, in a directory. This way, the enterprise can improve the security of the data and manage the data in a more convenient manner.

You can connect your RDS instance to a self-managed AD domain. This way, you can manage your enterprise in a centralized manner and can configure IP address whitelists at the database level and the user level to improve the security of your data.

**Note**

You can modify the information of the AD domain controller in the pg\_hba.conf file of your RDS instance or add the information of the AD domain controller to the pg\_hba.conf file of your RDS instance. You can configure the AD domain controller and the pg\_hba.conf file in the ApsaraDB RDS console. For more information, see [Introduction of pg\_hba.conf file](https://www.postgres.org/docs/11/auth-pg-hba-conf.html).

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs PostgreSQL 10 or later.
        
    -   The RDS instance runs a minor engine version of 20210228 or later. For more information about how to update the minor engine version of your RDS instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance).
        
    -   The RDS instance uses cloud disks.
        
-   An ECS instance is created. For more information, see [Create an ECS instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console). Your RDS instance must access the self-managed AD domain by using a private IP address. Therefore, the ECS instance must meet the following conditions:
    
    -   The ECS instance and your RDS instance reside in the same virtual private cloud (VPC).
        
    -   The security group to which the ECS instance belongs is configured to allow access from the private IP address of your RDS instance. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule).
        
    -   The firewall of the ECS instance is disabled by default. If the firewall is enabled for the ECS instance, you must configure the firewall to allow access from the private IP address of your RDS instance.
        
    -   The image of the ECS instance runs Windows Server 2016 or later.
        
-   The domain account belongs to the Domain Admins group.
    
-   Your Alibaba Cloud account is used to log on to the ApsaraDB RDS console.
    

## Procedure

1.  Configure an AD domain controller for the ECS instance.
    
    1.  Log on to the ECS instance.
        
        **Note**
        
        The AD domain controller must run a Windows Server system. We recommend that you use Windows Server 2016 or later. In this example, the AD domain controller runs Windows Server 2016.
        
    2.  Search for and open **Server Manager**.
        
    3.  In the left-side navigation pane, click **Dashboard**. On the page that appears, click **Add roles and features**.
        
        ![添加角色和功能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2714903461/p354593.png)
        
    4.  In the **Add Roles and Features Wizard**, configure the following parameters.
        
        **Tab**
        
        **Description**
        
        **Before You Begin**
        
        Use the default settings.
        
        **Installation Type**
        
        Use the default settings.
        
        **Server Selection**
        
        Use the default settings.
        
        **Server Roles**
        
        -   Select **Active Directory Domain Services**. In the dialog box that appears, click **Add Features**.
            
        -   Select **DNS Server**. In the dialog box that appears, click **Add Features**.
            
            **Note**
            
            Make sure that your computer uses a fixed IP address. If the IP address dynamically changes, the DNS server becomes unavailable.
            
        
        **Features**
        
        Use the default settings.
        
        **AD DS**
        
        Use the default settings.
        
        **DNS Server**
        
        Use the default settings.
        
        **Install**
        
        Click **Install** to add the role that you configured.
        
    5.  After the role is added, click **Close** to close the wizard.
        
    6.  In the left-side navigation pane of **Server Manager**, click **AD DS**. In the upper-right corner of the page that appears, click **More**.
        
        ![AD DS更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2714903461/p354601.png)
        
    7.  In the **All Servers Task Details and Notifications** wizard, click **Promote this server to a domain controller**.
        
        ![将此服务器提升为域控制器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2714903461/p354603.png)
        
    8.  In the **Active Directory Domain Services Configuration Wizard**, configure the following parameters.
        
        **Tab**
        
        **Description**
        
        **Deployment Configuration**
        
        Select **Add a new forest** and configure the **Root domain name** parameter.
        
        **Note**
        
        In this example, the **Root domain name** parameter is set to `pgsqldomain.net`, where `pgsqldomain` is the prefix and `net` is the suffix of the domain name. You can specify a value based on your business requirement and use the same value during the whole process.
        
        ![添加新林，设置域名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1020994461/p354611.png)
        
        **Domain Controller Options**
        
        Specify a **Directory Service Restore Mode (DSRM) password**.![设置还原密码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2714903461/p354612.png)
        
        **Server Selection**
        
        Clear **Create DNS delegation**. ![创建 DNS 委派](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2714903461/p354620.png)
        
        **Additional Options**
        
        Use the default settings.
        
        **Paths**
        
        Use the default settings.
        
        **Review Options**
        
        Use the default settings.
        
        **Prerequisites Check**
        
        Click **Install**.
        
        **Note**
        
        After the ECS instance is promoted to an AD domain controller, you must restart the ECS instance. Then, you can perform the subsequent steps.
        
2.  Add an administrator user to the AD domain controller.
    
    1.  Log on to the ECS instance. Then, search for and open **Server Manager**.
        
    2.  In the left-side navigation pane of **Server Manager**, click **AD DS**, right-click the AD domain controller that you want to configure, and then select **Active Directory Users and Computers**.![添加ad用户](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2714903461/p354644.png)
        
    3.  Click **pgsqldomain.net**, right-click **Users**, and then choose **New** > **User**.![添加用户](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1020994461/p354648.png)
        
        **Note**
        
        **pgsqldomain.net** is the root domain name that is specified in the **Active Directory Domain Services Configuration Wizard**.
        
    4.  Specify a username and click **Next**.![新建对象-用户](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3714903461/p354652.png)
        
    5.  Specify a password, select **Password never expires**, and then click **Next**. Then, click **Finish**.![设置密码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3714903461/p354653.png)
        
    6.  Double-click the created user and add the user to the **Domain Admins** administrator group.![加入管理员组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3714903461/p354656.png)
        
        After the user is added to the Domain Admins administrator group, the following page appears.![添加管理员组结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3714903461/p354657.png)
        
3.  Add a standard user to the AD domain controller for logon.
    
    **Note**
    
    You must perform the same operations that are described in [Add an administrator user to the AD domain controller](#step-5ot-9da-mq4). A standard user does not need to be added to the **Domain Admins** administrator group.
    
    In this example, a standard user named `ldapuser` is added to the AD domain controller. This user is used to log on to your RDS instance.
    
4.  Configure security group rules for the ECS instance.
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
        
    3.  In the top navigation bar, select the region in which the ECS instance resides.
        
    4.  On the **Instances** page, find the required ECS instance and click the ID of the ECS instance.
        
    5.  In the left-side navigation pane, click **Security Groups**. On the page that appears, click **Add Rules** in the **Actions** column.
        
        **Note**
        
        A number of ports need to be enabled for the AD domain controller. We recommend that you configure a separate security group for the AD domain controller rather than configuring the AD domain controller in the same security group as other ECS instances.
        
    6.  On the **Inbound** tab, click **Add Rule** to create a rule to allow your RDS instance to access the ECS instance over the following ports.
        
        **Protocol type**
        
        **Port range**
        
        **Description**
        
        TCP
        
        88
        
        The port for the Kerberos authentication protocol.
        
        TCP
        
        135
        
        The port for the Remote Procedure Call (RPC) protocol.
        
        TCP/UDP
        
        389
        
        The port for the Lightweight Directory Access Protocol (LDAP).
        
        TCP
        
        445
        
        The port for the Common Internet File System (CIFS) protocol.
        
        TCP
        
        3268
        
        The port for Global Catalog.
        
        TCP/UDP
        
        53
        
        The port for the DNS service.
        
        TCP
        
        49152 to 65535
        
        The default dynamic port range for connections. Enter a value in the following format: 49152/65535.
        
5.  Configure the RDS instance
    
    1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
        
    2.  Create an account named `ldapuser`. For more information, see [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-kxw-k1p-ydb).![dbadminrds账号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3714903461/p354749.png)
        
        **Note**
        
        The username of the account of your RDS instance must be the same as the name of the standard user that is created for the AD domain controller. The passwords of the two accounts can be different. When the AD domain controller is enabled for access control, the AD domain controller verifies the password of the standard user. When the AD domain controller is disabled for access control, ApsaraDB RDS verifies the password of the account of your RDS instance. You can set the password of the account on the **Accounts** page in the ApsaraDB RDS console.
        
    3.  In the left-side navigation pane, click **Accounts**. On the page that appears, click the **AD Domain Services** tab.
        
        If the **AD Domain Service** tab is opened for the first time, the system creates the following two records by default:
        
        ```
        host    all            all    0.0.0.0/0    md5
        host    replication    all    0.0.0.0/0    md5
        ```
        
        You can delete or modify the records.
        
    4.  Click **Edit** of the first record and modify the following parameters.
        
        **Note**
        
        The following table describes only the parameters that are used in the provided example. For more information, see [Official documentation of PostgreSQL](https://www.postgresql.org/docs/11/auth-pg-hba-conf.html).
        
        **Parameter**
        
        **Example**
        
        **Description**
        
        **Priority**
        
        0
        
        The priority of the record. If you set this parameter to 0, the record has the highest priority and is automatically generated. Modify the first record and set this parameter to 0. The value 0 specifies the highest priority for the AD domain service.
        
        **TYPE**
        
        host
        
        Valid values:
        
        -   host: The record matches TCP/IP connections, including SSL connections and non-SSL connections.
            
        -   hostssl: The record matches only TCP/IP connections that are established over SSL.
            
            **Note**
            
            This parameter takes effect only when SSL encryption is enabled for your RDS instance. For more information, see [Configure SSL encryption for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-ssl-encryption-for-an-apsaradb-rds-for-postgresql-instance#task-1079262).
            
        -   hostnossl: The AD domain verifies only TCP/IP connections that are established over non-SSL connections.
            
        
        **DATABASE**
        
        all
        
        The database that the specified users are allowed to access. If the value of this parameter is all, the specified users are allowed to access all databases of your RDS instance. If you specify multiple entries, separate the entries with commas (,).
        
        **USER**
        
        ldapuser
        
        The user that is allowed to access your RDS instance. Valid values: the created usernames of the AD domain controller. If you specify multiple entries, separate the entries with commas (,).
        
        **Note**
        
        This parameter can be set only to the usernames of standard users that are created in the AD domain.
        
        **ADDRESS**
        
        0.0.0.0/0
        
        The IP addresses from which the specified users can access the specified databases. If you set this parameter to 0.0.0.0/0, the specified users are allowed to access the specified databases from all IP addresses.
        
        **MASK**
        
        None
        
        The mask for the IP address in the record. If the value of the ADDRESS parameter is an IP address, you can use this parameter to specify the mask of the IP address.
        
        **METHOD**
        
        ldap
        
        **Note**
        
        LDAP is a protocol that is used to access the directories of databases. In this topic, LDAP is used as an example.
        
        This parameter specifies the authentication method of LDAP. Valid values:
        
        -   trust
            
        -   reject
            
        -   scram-sha-256
            
        -   md5
            
        -   password
            
        -   gss
            
        -   sspi
            
        -   ldap
            
        -   radius
            
        -   cert
            
        -   pam
            
        
        **Note**
        
        The valid values of this parameter must be in lowercase letters.
        
        **OPTION**
        
        ldapserver=_<Private IP address of the ECS instance>_ ldapbasedn="CN=Users,DC=_Prefix of the root domain name, pgsqldomain in this example_,DC=_Suffix of the root domain name, net in this example_" ldapbinddn="CN=_<Username of the administrator user of the AD domain>_,CN=Users,DC=_Prefix of the root domain name, pgsqldomain in this example_,DC=_Suffix of the root domain name, net in this example_" ldapbindpasswd="_<Password of the administrator user of the AD domain>_" ldapsearchattribute="sAMAccountName"
        
        The options of the authentication method. In this topic, LDAP is used as an example. You must specify this parameter. For more information, see [Authentication Methods](https://www.postgresql.org/docs/11/auth-methods.html).
        
    5.  Click **add** to the right of the AD domain service record to add a record. The following information provides the valid values of the new record.
        
        ```
        host    all            all    0.0.0.0/0    md5
        ```
        
    6.  Click **OK**. Then, click **Submit**.
        
        **Note**
        
        After you click Submit, the status of your RDS instance changes to **Maintaining Instance** for about 1 minute. The new configurations take effect only for new connections. You must close the existing connections and re-establish these connections for the new configurations to take effect.
        
6.  Optional. Import the service information about multiple AD domains at a time. You can also manually add the service information about the AD domain.![导入AD域服务信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125353561/p357276.png)
    
    The following import methods are supported:
    
    -   Overwrite existing service information.
        
    -   Additional service information (highest priority): If you select this option, the service information of the AD domain is appended to the beginning of the existing service information. The priority of the appended information is higher than the priority of the existing service information.
        
    -   Additional service information (lowest priority): If you select this option, the service information of the AD domain is appended to the end of the existing service information. The priority of the appended information is lower than the priority of the existing service information.
        
    
    Valid format:
    
    ```
    TYPE|DATABASE|USER1|ADDRESS|MASK|METHOD|OPTION
    ```
    
    Enter the service information that you want to import in the **Edit AD domain** text box. For more information about the parameters, see [Parameters](#table-ldm-dd5-kip).
    
    Sample configuration:
    
    ```
    host|all|<Username of the standard account of the AD domain>|0.0.0.0/0||ldap|ldapserver=<Private IP address of the ECS instance> ldapbasedn="CN=Users,DC=<Prefix of the root domain name, pgsqldomain in this example>,DC=<Suffix of the root domain name, net in this example>" ldapbinddn="CN=<Username of the administrator user of the AD domain>,CN=Users,DC=<Prefix of the root domain name, pgsqldomain in this example>,DC=<Suffix of the root domain name, net in this example>" ldapbindpasswd="<Password of the administrator user of the AD domain>" ldapsearchattribute="sAMAccountName"
    ```
    
7.  Test the connectivity.
    
    Use a PostgreSQL command-line tool to connect to your RDS instance.
    
    **Note**
    
    You can connect to your RDS instance by using multiple methods. In this topic, a PostgreSQL command-line tool is used. You must install the PostgreSQL client before you use the PostgreSQL command-line tool. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance#concept-stt-3hg-wdb).
    
    Run the following command and use the username and password of the standard account of the AD domain controller to connect to your RDS instance:
    
    ```
    psql -h <Endpoint of your RDS instance> -U <Username of the standard account of the AD domain> -p 5432 -d postgres
    ```
    

## View the modification history of AD domain service information

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Accounts**. On the page that appears, click the **AD Domain Services Edit History** tab.
    
3.  Click **changedetails** in the **Actions** column to view the change details. If the modification fails, the status is **Not Taking Effect**. You can click **Change log** to view the error message.![查看AD域修改记录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3125353561/p355015.png)
