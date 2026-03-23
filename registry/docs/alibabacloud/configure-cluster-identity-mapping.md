This topic describes how to manually configure a mapping between the Alibaba Cloud account of a DataWorks tenant member and the account of a specified identity in an E-MapReduce (EMR) cluster. This way, the tenant member can use the specified identity of the mapped cluster to run tasks in DataWorks.

## Precautions

-   A mapping between a tenant member account and an EMR cluster account takes effect for all workspaces in which the EMR cluster is registered. Do not modify the EMR cluster unless it is required for your business.
    
-   If you do not configure a mapping between a tenant member account and an EMR cluster account by following the instructions in this topic, DataWorks issues tasks to the EMR cluster for running based on the following policies by default:
    
    -   If you use **a RAM user**, the system account of the EMR cluster that has the same name as the RAM user is used to run the tasks. If Lightweight Directory Access Protocol (LDAP) or Kerberos authentication is not enabled for the EMR cluster, you must configure a mapping between the RAM user and the system account of the EMR cluster by performing the operations in this topic. Otherwise, the tasks fail to be run in DataWorks.
        
    -   If you use an **Alibaba Cloud account**, you must manually configure a mapping between the Alibaba Cloud account and the EMR cluster account regardless of whether LDAP or Kerberos authentication is enabled for the EMR cluster. Otherwise, the tasks fail to be run in DataWorks.
        
        **Note**
        
        The account that is used by a user to access an EMR cluster in DataWorks varies based on the access identity that you specified when you registered the EMR cluster.
        
        -   Run tasks as a RAM user: When you [bind an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources) in DataWorks, select **Cluster Account Mapped to Account of Task Owner** or **Cluster Account Mapped to RAM User** as the default access identity.
            
        -   Run tasks as an Alibaba Cloud account: When you [bind an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources) in DataWorks, select **Cluster Account Mapped to Alibaba Cloud Account** as the default access identity.
            
        

## Usage Notes

-   **Authentication method**
    
    DataWorks does not allow you to configure a mapping between a tenant member account and an EMR cluster account for which LDAP authentication and Kerberos authentication are enabled. If you configure this type of mapping, tasks fail to be run in DataWorks.
    
-   **Whitelist configuration**
    
    If Ranger authentication is enabled for an EMR cluster, you must add DataWorks to the whitelist of the EMR cluster to ensure that DataWorks can access the EMR cluster. For information about how to add DataWorks to the whitelist of an EMR cluster, see the [Appendix: Add DataWorks to the whitelist of an EMR cluster](#b50383d050y5i) section in this topic.
    
-   **User management**
    
    If you use an account that is not a system account of an EMR cluster for identity authentication, such as Kerberos authentication, you must enable the related authentication service for the EMR cluster and add the account that is used to develop EMR tasks in DataWorks to the authentication service. For more information, see [Configure Kerberos authentication](/help/en/dataworks/user-guide/manage-third-party-authentication-files#xref-jqx-ej0-eje).
    
-   **Data permissions**
    
    You can manage permissions on services in an EMR cluster. This way, data operation permissions of DataWorks users are isolated. For example, you can use Ranger to manage the permissions of an EMR cluster account that maps to an Alibaba Cloud account.
    
    If Data Lake Formation (DLF) is specified as the metadata storage service for an EMR cluster and the DLF-Auth component is used to enable the data permission management feature of DLF, you can request for data permissions in Security Center in the DataWorks console. For more information, see [DLF data access control](/help/en/dataworks/user-guide/manage-permissions-on-dlf).
    

-   **Mapping configuration**
    
    Take note that tasks fail to be run in DataWorks in the scenarios that are described in the following table.
    
    **Scenario**
    
    **Description**
    
    **A system account of an EMR cluster is used for mapping configuration in DataWorks**
    
    -   A RAM user is used to run tasks in DataWorks. However, no EMR cluster account has the same name as the RAM user.
        
    -   A RAM user is used to run tasks in DataWorks and a mapping between the RAM user and an EMR cluster account is manually configured. However, the account or password of the mapped EMR cluster is different from the actual account or password of the EMR cluster.
        
    -   An Alibaba Cloud account is used to run tasks in DataWorks. However, the Alibaba Cloud account is not mapped to an EMR cluster account.
        
    
    **The LDAP or Kerberos account mapping type is used in DataWorks**
    
    -   The LDAP or Kerberos authentication service is enabled for an EMR cluster, but a mapping is not configured or is incorrectly configured between a tenant member account and the EMR cluster account in DataWorks.
        
    -   The Kerberos account mapping type is used in DataWorks. However, the Kerberos authentication service is not enabled for the EMR cluster account.
        
    -   The LDAP account mapping type is used in DataWorks. However, the LDAP authentication service is not enabled for the related component in the EMR cluster.
        
    
    **Note**
    
    If you configure an LDAP account mapping in DataWorks, SQL tasks in DataWorks, such as Hive, Impala, Presto, and Trino tasks, use the mapped EMR cluster account for authentication by default. However, if LDAP authentication is not enabled for the related component in the EMR cluster, the tasks fail.
    

## Limits

-   Only users with the following roles can configure identity mappings for members of the current workspace:
    
    -   An Alibaba Cloud account
        
    -   RAM users or RAM roles to which the AliyunDataWorksFullAccess and AliyunEMRFullAccess policies are attached
        
    -   RAM users or RAM roles that are assigned the Workspace Administrator role and attached the AliyunEMRFullAccess policy
        
-   Member accounts that do not belong to the preceding types can be used to configure identity mappings only for themselves.
    

## Go to the page for editing cluster account mappings

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resources** to go to the **Computing Resources** page.
    
3.  In the list of computing resources, find the target EMR cluster and click **Account Mappings**. On the page that appears, click **Edit Account Mappings** in the upper-right corner to go to the cluster account mapping editing page.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7883033371/p718638.png)
    

## Configure a mapping between a tenant member account and the EMR cluster account

On the cluster account mapping editing page, configure the cluster identity mapping.

1.  Upload a configuration file.
    
    1.  If Kerberos authentication is enabled for the cluster, [download the authentication credentials](/help/en/emr/manage-user-accounts#section-rxo-cfs-mik) from the cluster.
        
    2.  Click **Upload Keystore File** and upload the downloaded credentials. This step ensures that [EMR Trino](/help/en/dataworks/user-guide/create-an-emr-trino-node) and [EMR Presto](/help/en/dataworks/user-guide/create-an-emr-presto-node) tasks run as expected.
        

2.  Configure a mapping.
    
    -   **Configuration Mode**: You can customize the mapping for the current cluster or select **Reference Configurations of Another Cluster** to use an existing mapping configuration.
        
    -   **Mapping Type**: The account type for cluster authentication. You can select System Account Mapping, OPEN LDAP Account Mapping, or Kerberos Account Mapping.
        
    
    **Note**
    
    -   If you set **Mapping Type** to **Mapping to Kerberos Account**, you must upload a **Keystore** file.
        
    -   Before you select Kerberos account mapping, make sure that the Kerberos authentication service is enabled for the EMR cluster. For more information, see [Enable Kerberos](/help/en/emr/emr-on-ecs/user-guide/overview-13/#section-vz7-tmy-bmw).
        
    -   Before you select OPEN LDAP account mapping, make sure that the [LDAP authentication service](/help/en/dataworks/configure-an-emr-data-lake-cluster#section-gfh-vih-q79) is enabled for the related component in the EMR cluster. If you configure an LDAP account mapping in DataWorks, SQL tasks in DataWorks, such as Hive, Impala, Presto, and Trino tasks, use the mapped EMR cluster account for authentication by default. However, if LDAP authentication is not enabled for the related component in the EMR cluster, the tasks fail.
        
    
3.  Click **Confirm** to save the cluster account mapping settings.
    

## Appendix: Add DataWorks to the whitelist of an EMR cluster

If Ranger is enabled for an EMR cluster, you must add DataWorks to the whitelist of the EMR cluster and restart the Hive service before you can develop EMR tasks in DataWorks. Otherwise, the following error is reported when the EMR tasks are run: `Cannot modify spark.yarn.queue at runtime` or `Cannot modify SKYNET_BIZDATE at runtime`.

1.  Configure a whitelist.
    
    Add a custom parameter that consists of a key and a value. The following sample code provides an example of a custom parameter that is configured for the Hive service in the EMR cluster:
    
    ```
    hive.security.authorization.sqlstd.confwhitelist.append=tez.*|spark.*|mapred.*|mapreduce.*|ALISA.*|SKYNET.*
    ```
    
    **Note**
    
    In the preceding code, ALISA.\* and SKYNET.\* are supported only for DataWorks.
    

2.  Restart the service.
    
    After the whitelist is configured, you must restart the Hive service for the configurations to take effect.
