To use DataWorks to develop and manage tasks on a Cloudera Distribution Including Apache Hadoop (CDH) cluster, you must associate the CDH cluster to DataWorks as a computing resource. After the cluster is associated, you can use this computing resource in DataWorks for operations such as data synchronization and development.

## **Prerequisites**

-   The Resource Access Management (RAM) user who performs the operation has been added to the workspace and assigned the Workspace Administrator role.
    
-   A CDH cluster is deployed.
    
    **Note**
    
    DataWorks supports CDH clusters that are deployed in non-Alibaba Cloud ECS environments. However, the deployment environment must be connected to an Alibaba Cloud virtual private cloud (VPC). To establish the connection, see [Network Connectivity for IDC Data Sources](/help/en/dataworks/user-guide/solution-5-idc-data-source-network-connectivity).
    
-   A resource group is associated to the workspace, and network connectivity is confirmed.
    
    -   If you use a serverless resource group, you only need to ensure connectivity between the CDH computing resources and the [serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   If you [use legacy exclusive resource groups](/help/en/dataworks/user-guide/use-legacy-resource-groups/), you must ensure connectivity between the CDH computing resources and the **exclusive resource group for scheduling** for the corresponding scenario.
        

## **Limits**

-   **Region restrictions**: This feature is available in China (Beijing), China (Shanghai), China (Shenzhen), China (Hangzhou), China (Zhangjiakou), China (Chengdu), and Germany (Frankfurt).
    
-   **Permission restrictions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No additional permissions are required.
    
    **Alibaba Cloud RAM user/RAM role**
    
    -   Only workspace members who have the **O&M** and **Workspace administrator** roles or the `AliyunDataWorksFullAccess` permission can create computing resources. For more information, see [Grant users space administrator permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
        
    

## **Go to the computing resource list page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. From the drop-down list, select your workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource**.
    

## **Associate the CDH computing resource**

On the [Computing Resource](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource) page, you can configure and associate a CDH computing resource.

1.  Select the type of computing resource to associate.
    
    1.  Click **Associate Computing Resource** to go to the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **CDH**. You are redirected to the **Associate CDH Computing Resource** configuration page.
        
2.  Configure the CDH computing resource.
    
    On the **Associate CDH Computing Resource** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Configuration description**
    
    **Cluster Version**
    
    Select the version of the cluster that you want to register.
    
    You can select the CDH 5.16.2, CDH 6.1.1, CDH 6.2.1, CDH 6.3.2, or CDP 7.1.7 versions that are provided by DataWorks. For these versions, the component versions are fixed to the versions specified for each component in [Cluster connection information](/help/en/dataworks/user-guide/register-a-cdh-or-cdp-cluster-to-dataworks#99d38f1371ty9). If these cluster versions do not meet your requirements, you can select **Custom Version** and configure the component versions as needed.
    
    **Note**
    
    -   The components that you need to configure vary based on the cluster version. The UI determines the required components.
        
    -   If you register a **Custom Version** cluster with DataWorks, only legacy exclusive resource groups for scheduling are supported. After the registration is complete, you must [submit a ticket](https://smartservice.console.alibabacloud.com/) to the helpdesk to initialize the environment.
        
    
    **Cluster Name**
    
    Select the name of a cluster that is registered in another workspace to load its configurations, or enter a custom name to create a new configuration.
    
    **Cluster Connection Information**
    
    **Hive Connection Information**
    
    Used to submit Hive jobs to the cluster.
    
    -   **HiveServer2 configuration format**: `jdbc:hive2://<host>:<port>/<database>`
        
    -   **Metastore configuration format:**`thrift://<host>:<port>`
        
    
    **How to obtain parameters**: For more information, see [Obtain CDH or CDP cluster information and configure network connectivity](/help/en/dataworks/user-guide/preparation-obtain-cdh-cluster-information-and-configure-network-connectivity).
    
    **Component version selection**: The system automatically detects the component versions for the current cluster.
    
    **Note**
    
    If you use a serverless resource group to access CDH components using a domain name, you must configure [authoritative resolution](/help/en/dns/add-a-built-in-authoritative-domain-name) for the CDH component domain names and [set their effective scope](/help/en/dns/set-domain-name-effective-range) in **PrivateZone** of Alibaba Cloud DNS.
    
    **Impala Connection Information**
    
    Used to submit Impala jobs.
    
    **Configuration format**: `jdbc:impala://<host>:<port>/<schema>`.
    
    **Spark Connection Information**
    
    To use the Spark component in DataWorks, you can select a default version and configure it here.
    
    **Yarn Connection Information**
    
    Configurations for submitting tasks and viewing task details.
    
    -   **Yarn.Resourcemanager.Address configuration format**: `http://<host>:<port>`
        
        **Note**
        
        The address for submitting Spark or MapReduce tasks.
        
    -   **Jobhistory.Webapp.Address configuration format**: `http://<host>:<port2>`
        
        **Note**
        
        The web UI address of the JobHistory Server. You can access this address in a browser to view the details of historical tasks.
        
    
    **MapReduce Connection Information**
    
    To use the MapReduce component in DataWorks, you can select a default version and configure it here.
    
    **Presto Connection Information**
    
    Used to submit Presto jobs.
    
    **JDBC address information configuration format**: `jdbc:presto://<host>:<port>/<catalog>/<schema>`
    
    **Note**
    
    This is not a default CDH component. Configure it as needed.
    
    **Cluster Configuration Files**
    
    **Configure Core-Site File**
    
    Contains global configurations for the Hadoop Core library, such as common I/O settings for Hadoop Distributed File System (HDFS) and MapReduce.
    
    Upload this file to run Spark or MapReduce tasks.
    
    **Configure Hdfs-Site File**
    
    Contains HDFS configurations, such as block size, number of backups, and path names.
    
    **Configure Mapred-Site File**
    
    Used to configure MapReduce parameters, such as the execution mode and scheduling behavior of MapReduce jobs.
    
    Upload this file to run MapReduce tasks.
    
    **Configure Yarn-Site File**
    
    Contains all configurations related to YARN daemons, such as environment configurations for the resource manager, node managers, and application runtime.
    
    Upload this file to run Spark or MapReduce tasks, or if you set the account mapping type to Kerberos.
    
    **Configure Hive-Site File**
    
    Contains various parameters for configuring Hive, such as database connection information, Hive Metastore settings, and the execution engine.
    
    Upload this file if you set the account mapping type to Kerberos.
    
    **Configure Spark-Defaults File**
    
    Used to specify the default configurations for Spark job execution. You can use the `spark-defaults.conf` file to preset parameters, such as memory size and the number of CPU cores. Spark applications use these parameter settings at runtime.
    
    Upload this file to run Spark tasks.
    
    **Configure Config.Properties File**
    
    Contains configurations for the Presto server, such as global properties for the coordinator and worker nodes in the Presto cluster.
    
    Upload this file if you use the Presto component and set the account mapping type to OPEN LDAP or Kerberos.
    
    **Configure Presto.Jks File**
    
    Used to store security certificates, including private keys and public key certificates issued to applications. In the Presto database query engine, the `presto.jks` file is used to enable SSL/TLS encrypted communication for Presto processes to ensure the security of data transmission.
    
    **Default Access Identity**
    
    If you choose to use an identity that is associated with a mapped cluster account, you can go to the **Account Mapping** tab on the **Computing Resources** page to [set the cluster identity mapping](/help/en/dataworks/user-guide/set-up-cluster-identity-mapping).
    
    -   **Development environment**: You can select Cluster account or Mapped cluster account of task executor.
        
    -   **Production environment**: You can select Cluster account, Mapped cluster account of task owner, Mapped cluster account of Alibaba Cloud account, or Mapped cluster account of RAM user.
        
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource instance. At runtime, you can select the computing resource for a task based on this name.
    
3.  Click **Confirm** to complete the CDH computing resource configuration.
    

## Resource group initialization

**If you register a cluster for the first time or change cluster service configurations** (such as modifying core-site.xml), you must initialize the resource group. This ensures that the resource group can access the CDH cluster after you [configure network connectivity](/help/en/dataworks/user-guide/preparation-obtain-cdh-cluster-information-and-configure-network-connectivity#f4748f0173ftq).

1.  On the **Computing Resource** page, find the CDH computing resource that you created. In the upper-right corner, click **Initialize Resource Group**.
    
2.  Click **Initialize** next to the desired resource group. After the resource group is initialized, click **OK**.
    

## **(Optional) Set a YARN resource queue**

On the **Computing Resource** page, find the CDH cluster that you associated. On the **YARN Resource Queue** tab, click **EditYARN Resource Queue** to set a dedicated YARN resource queue for tasks in different modules.

## **(Optional) Set Spark-related parameters**

You can set dedicated Spark property parameters for tasks in different modules.

1.  On the **Computing Resource** page, find the CDH cluster that you associated.
    
2.  On the **Spark-related Parameter** tab, click **EditSpark-related Parameter** to go to the page where you can edit Spark parameters for the CDH cluster.
    
3.  Click **Add** below a module. Enter the **Spark Property Name** and the corresponding **Spark Property Value** to set the [Spark property information](https://spark.apache.org/docs/latest/configuration.html).
    

## **(Optional) Configure host settings**

If you use a DataWorks **serverless resource group** to connect to a **CDH cluster that has Kerberos authentication enabled**, task submission may fail.

This issue occurs because the Kerberos authentication mechanism relies on **hostnames** for secure communication. In some network environments, standard DNS resolution services may fail to resolve a cluster's IP address to the hostname that is registered in Kerberos. This causes the authentication to fail.

The **Host Configuration** feature lets you manually configure a static **IP-to-hostname mapping table** for a CDH computing resource. After the configuration, DataWorks prioritizes this mapping when it accesses your CDH cluster to ensure that Kerberos authentication is successful.

1.  Find the CDH computing resource that you want to configure and click **Host Configuration**.
    
2.  In the dialog box that appears, enter the mapping in the format of `IP address Hostname`. **Each line represents one mapping record**.
    
3.  Click **OK** to save the configuration.
    
4.  After you save the configuration, the configured hostname information appears on the computing resource card. This indicates that the configuration has taken effect.
    

**Important**

-   **Format requirement**: The `IP address` and `Hostname` must be separated by **one or more spaces**.
    
-   **Configuration integrity**: Ensure that you configure correct mappings for all key nodes that are involved in Kerberos authentication and task execution, such as NameNode, ResourceManager, and NodeManagers.
    
-   **Applicable scope**: This host configuration **applies only to the current computing resource** and does not affect other computing resources in the workspace.
    

## What to do next

After you configure the CDH computing resources, you can use [CDH-related nodes](/help/en/dataworks/user-guide/cdh-new-data-studio/) in Data Studio to perform data development operations.
