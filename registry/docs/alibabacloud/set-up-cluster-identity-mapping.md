After you register a CDH or CDP cluster in DataWorks, you can map a DataWorks tenant member's Alibaba Cloud account to a specified identity account in the cluster. This mapping allows the tenant member to access the CDH or CDP cluster using the mapped cluster identity. The configuration procedure is similar for both CDP and CDH clusters. This topic uses a CDH cluster as an example to describe the procedure in detail.

## **Mapping types**

When you register a CDH cluster in DataWorks, you can use the **Default Access Identity** parameter to configure the account used to execute CDH cluster tasks. For more information, see [Configure the default access identity for the cluster](/help/en/dataworks/user-guide/register-a-cdh-or-cdp-cluster-to-dataworks#9354a2b372fo2). The following table describes the accounts that you can configure for the **Default Access Identity** parameter and their supported mapping types.

**Supported account types and descriptions**

**Supported mapping types and descriptions**

**Cluster account**

The cluster account that you specify is used to execute the code of CDH tasks in the CDH cluster regardless of who runs the CDH tasks in DataWorks.

For example, the configured cluster account is used to run CDH tasks that are submitted by an Alibaba Cloud account, a RAM user that is assigned the Workspace Administrator role, or a RAM user that is assigned only the Developer role.

**No Authentication**

If you set **Default Access Identity** to a cluster account, the **Mapping Type** between the Alibaba Cloud account and the cluster account is **No Authentication** by default.

**Important**

If you set **Default Access Identity** to a mapping account, you cannot set the **Mapping Type** to **No Authentication**. Otherwise, the CDH task fails because no access identity is available for the Alibaba Cloud account. You can select **System Account Mapping**, **OPEN LDAP Account Mapping**, or **Kerberos Account Mapping** as needed.

**Mapping account**

When different workspace members run CDH tasks in DataWorks, the CDH system account, Kerberos account, or OPEN LDAP account that is mapped to their Alibaba Cloud accounts (Alibaba Cloud account or RAM user) is used to execute the task code in the cluster.

If you select a mapping account, you must [go to the cluster account mapping configuration page](#a9ba6140720dx) to configure the CDH account to which the Alibaba Cloud account is mapped after you register the CDH cluster.

**Important**

An Alibaba Cloud account fails to run a CDH task in the following cases:

-   No cluster account is mapped to the Alibaba Cloud account.
    
-   A cluster account is mapped to the Alibaba Cloud account, but the mapping type is set to **No Authentication**.
    

**System Account Mapping**

-   You can customize the mapping between an Alibaba Cloud account and a system account of a CDH cluster, such as the administrator account of Cloudera Manager or a Hadoop account. After the mapping is configured, the tasks submitted by the Alibaba Cloud account are run by the mapped system account.
    
-   You can use this method if you want to isolate permissions on data that can be accessed by different Alibaba Cloud accounts in the CDH cluster when you run tasks.
    

**OPEN LDAP Account Mapping**

-   You can customize the mapping between an Alibaba Cloud account and an OPEN LDAP account of a CDH cluster. After the mapping is configured, the tasks submitted by the Alibaba Cloud account are run by the mapped OPEN LDAP account.
    
-   If you use the Presto component and select OPEN LDAP account mapping, you must configure the `Config.Properties` and `Presto.Jks` files in the basic information of the cluster.
    
    **Note**
    
    After LDAP authentication is enabled for a CDH cluster, you must provide LDAP identity authentication (LDAP username and password) to access the cluster. This improves the security of the service.
    

**Kerberos Account Mapping**

-   You can customize the mapping between an Alibaba Cloud account and a Kerberos account of a CDH cluster. After the mapping is configured, the tasks submitted by the Alibaba Cloud account are run by the mapped Kerberos account.
    
-   If Kerberos authentication is enabled for Hive MetaStore of the CDH cluster, you must use this mapping type. Otherwise, metadata acquisition is affected.
    
-   If you use the Presto component and select Kerberos account mapping, you must configure the `Config.Properties` and `Presto.Jks` files in the basic information of the cluster.
    
-   You can use this method if you want to isolate database permissions on data that can be accessed by different Alibaba Cloud accounts in the CDH cluster when you run tasks.
    
    **Note**
    
    A **Kerberos Account** is an access account for a CDH cluster. It is used for identity authentication and authorization to ensure secure communication between users and services in the CDH cluster. The CDH cluster uses the Sentry or Ranger component to configure different permissions for **Kerberos Accounts** to implement database permission isolation. After this type of mapping is configured, the **Alibaba Cloud Account** that is mapped to a **Kerberos Account** has the same data access permissions on the CDH cluster.
    

## **Prerequisites**

-   The CDH cluster account that you want to map is created.
    
-   Before you use Kerberos account mapping, ensure that the Kerberos service is enabled for the cluster.
    
-   Before you use OPEN LDAP account mapping, ensure that the OPEN LDAP service is enabled for the cluster.
    
-   You have attached a CDH computing resource to a DataWorks workspace.
    

## Step 1: Go to the cluster account mapping configuration page

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). After you switch to the destination region, in the navigation pane on the left, click **More** > **Management Center**. Select the desired workspace from the drop-down list and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resources**.
    
3.  On the computing resources page, find the target CDH cluster and click **Account Mapping** > **Edit Account Mapping** under the cluster name.
    
    On this page, you can configure the mapping between a DataWorks Alibaba Cloud account and a CDH cluster account. This mapping determines which cluster account is used to run CDH tasks that are submitted by the Alibaba Cloud account.
    

## Step 2: Set up cluster account mapping

Follow these steps to configure the cluster account that is used to execute CDH tasks in DataWorks.

1.  Select a mapping type.
    
    You can select **No Authentication**, **System Account Mapping**, **OPEN LDAP Account Mapping**, or **Kerberos Account Mapping**. For more information, see [Mapping types](#a283b650723nv).
    
2.  Configure the cluster account mapping.
    
    Configure the account mapping based on the selected type.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6750642071/p731056.png)
    
    **Note**
    
    If you select **No Authentication**, no mapping configuration is required. The platform runs tasks using the cluster account that was configured in the basic information when the CDH or CDP cluster was registered. For more information, see Attach a CDH computing resource.
    
    ### **System Account Mapping**
    
    Configure the mapping between an Alibaba Cloud account (an Alibaba Cloud account or a RAM user) and a CDH cluster system account. Add the required account information as instructed on the page.
    
    -   **Run tasks using an Alibaba Cloud account**: Select an Alibaba Cloud account and configure the mapped cluster system account.
        
    -   **Run tasks using a RAM user**: Select a RAM user and configure the mapped cluster system account. The following two types of mappings are supported:
        
        -   Same-name mapping (default): Runs a CDH task using a cluster system account that has the same name as the mapped RAM user. For example:
            
            -   RAM user: **ram\_user\_1@xxx.onaliyun.com**
                
            -   Cluster account with the same name: **ram\_user\_1**
                
            
            CDH tasks submitted using **ram\_user\_1@xxx.onaliyun.com** are run by **ram\_user\_1**.
            
            **Note**
            
            -   By default, when you use a RAM user to run a CDH task in DataWorks, a cluster system account with the same name is used to run the task in the CDH cluster. You can also use a cluster account that has a different name.
                
            -   To prevent task failures, ensure that an account with the same name exists in the CDH cluster. You can go to the **CDH Cluster Management** > **User Management** page to configure the account.
                
            
        -   Different-name mapping: Runs a CDH task using a cluster system account that has a different name from the mapped RAM user. Configure the mapping as instructed on the page.
            
    
    ### **Kerberos Account Mapping**
    
    Configure the mapping between an Alibaba Cloud account (an Alibaba Cloud account or a RAM user) and a CDH cluster Kerberos account. A Kerberos account uses the **Instance name@Realm name** format, for example, cdn\_test@HADOOP.COM.
    
    Kerberos authentication requires a **keytab authentication file** and a **krb5.conf configuration file**.
    
    -   krb5.conf configuration file: Stores the configurations of the Key Distribution Center (KDC) server.
        
    -   keytab authentication file: Stores the identity verification credentials of the resource entity. The file must be named in the **Kerberos account.keytab** format.
        
    
    Add the required account and upload the required files as instructed on the page.
    
    **Note**
    
    -   If Kerberos authentication is enabled for Hive MetaStore of the CDH cluster, you must use this mapping type. Otherwise, metadata acquisition is affected.
        
    -   If you use the Presto component and select Kerberos account mapping, you must configure the `Config.Properties` and `Presto.Jks` files in the basic information of the cluster.
        
    -   Ensure that the Kerberos service is enabled for the cluster.
        
    
    ### **OPEN LDAP Account Mapping**
    
    Configure the mapping between an Alibaba Cloud account (an Alibaba Cloud account or a RAM user) and a CDH cluster OPEN LDAP account. Add the required account information as instructed on the page.
    
    **Note**
    
    -   If you use the Presto component and select OPEN LDAP account mapping, you must configure the `Config.Properties` and `Presto.Jks` files in the basic information of the cluster.
        
    -   Ensure that the OPEN LDAP service is enabled for the cluster.
        
    
3.  Click **Finish Editing**. The account mapping is now configured. Tasks run by an Alibaba Cloud account will use the mapped cluster account.
