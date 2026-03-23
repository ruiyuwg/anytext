To develop and manage E-MapReduce (EMR) tasks in DataWorks, you must first associate your EMR cluster to a DataWorks workspace as a computing resource. After the cluster is associated, you can use this computing resource for operations in DataWorks, such as data synchronization and development.

## **Prerequisites**

-   You have [created a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm) in DataWorks, and your RAM user has been added to the workspace and assigned the Workspace Administrator role.
    
-   You have [created an EMR cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page).
    
    -   **Supported cluster types**:
        
        -   [DataLake cluster (new data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
            
        -   [Custom cluster: EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
            
        -   [Hadoop cluster (legacy data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
            
        -   [Spark cluster: EMR on ACK](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack)
            
    -   This computing resource can be associated only to workspaces that have the ****Use Data Studio (New Version)**** option enabled.
        
        **Note**
        
        Workspaces that do **not** enable ****Use Data Studio (New Version)**** can use **Cluster Management** as described in [DataStudio (legacy version): Associate an EMR computing resource](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks).
        
-   You have associated a resource group to the workspace and established network connectivity.
    
    -   If you use a Serverless resource group, you only need to ensure that the EMR computing resource can connect to the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   If you [use a legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/), you must ensure that the EMR computing resource can connect to the **exclusive resource group for scheduling** for the relevant scenario.
        

## **Limits**

-   **Product limits:**
    
    -   For an EMR cluster with Kerberos authentication enabled, you must add an inbound rule to its security group. This rule must allow access from the vSwitch CIDR block of the associated resource group over the UDP protocol.
        
        **Note**
        
        Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9770355371/p884762.png) icon next to **Cluster Security Group** in the **Basic Information** section of the EMR cluster to open the **Security Group Details** tab. On the **Rules** tab, click **Inbound**, and then click **Add Rule**. For **Protocol**, select **Custom UDP**. For **Port Range**, enter the KDC port specified in the `/etc/krb5.conf` file of the EMR cluster. Set **Source** to the vSwitch CIDR block that is associated with the resource group.
        
    -   To manage metadata for DataLake or custom clusters in DataWorks, you can configure EMR-HOOK on the cluster or when you [set SPARK parameters](#2ece83be73fmx). If you do not configure EMR-HOOK, real-time metadata, audit logs, and data lineages cannot be displayed in DataWorks. In addition, EMR governance tasks cannot be run. Currently, only the EMR Hive and EMR Spark SQL services support EMR-HOOK configuration. For more information about the configuration, see [Configure EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access) and [Configure EMR-HOOK for Spark SQL](/help/en/emr/emr-on-ecs/user-guide/sparksql-uses-the-extension-to-record-data-kinship-and-access).
        
        **Note**
        
        -   You can [configure the EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access) in the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). After the configuration is complete, you do not need to reinitialize the resource group.
            
        -   You can [configure the EMR-HOOK for Spark SQL](/help/en/emr/emr-on-ecs/user-guide/sparksql-uses-the-extension-to-record-data-kinship-and-access) in two ways:
            
            -   Configure it in the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). You must reinitialize the resource group.
                
            -   You can configure the settings in the computing resource by [setting SPARK property parameters](#2ece83be73fmx). You do not need to reinitialize the resource group.
                
        
-   **Region availability**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia).
    
-   **Permissions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No additional permissions are required.
    
    **Alibaba Cloud RAM user/RAM role**
    
    Only workspace members with the **O&M** and **Workspace Administrator** roles or the `AliyunDataWorksFullAccess` permission can create computing resources. For more information, see [Grant space administrator permissions to a user](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## **Precautions**

-   DataWorks supports the following versions of EMR Hadoop clusters (legacy data lake):
    
    `EMR-3.38.2`, `EMR-3.38.3`, `EMR-4.9.0`, `EMR-5.6.0`, `EMR-3.26.3`, `EMR-3.27.2`, `EMR-3.29.0`, `EMR-3.32.0`, `EMR-3.35.0`, `EMR-4.3.0`, `EMR-4.4.1`, `EMR-4.5.0`, `EMR-4.5.1`, `EMR-4.6.0`, `EMR-4.8.0`, `EMR-5.2.1`, and `EMR-5.4.3`.
    
-   Hadoop clusters (legacy data lake) are deprecated. We recommend that you migrate to DataLake clusters as soon as possible. For more information, see [Migrate Hadoop clusters to DataLake clusters](/help/en/emr/emr-on-ecs/use-cases/migrate-data-from-a-hadoop-cluster-to-a-datalake-cluster).
    

## **Go to the computing resource list page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. From the drop-down list, select your workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource**.
    

## **Associate an EMR computing resource**

On the [computing resource page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), perform the following steps to associate an EMR computing resource.

1.  Select the computing resource type.
    
    1.  Click **Associate Computing Resource** to go to the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **EMR**. You are then redirected to the **Associate EMR Computing Resource** configuration page.
        
2.  Configure the EMR computing resource.
    
    On the **Associate EMR Computing Resource** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Alibaba Cloud Account to Which Cluster Belongs**
    
    You can select **Current Alibaba Cloud Account** or **Aother Alibaba Cloud Account**.
    
    **Note**
    
    When you select **Aother Alibaba Cloud Account**, you can follow the instructions in [Scenario: Register a cross-account EMR cluster](/help/en/dataworks/user-guide/cross-account-registration-for-emr-cluster) to grant the required permissions. Then, enter the parameters as prompted on the interface.
    
    **Cluster Type**
    
    Select the cluster type as needed.
    
    **Note**
    
    Supported cluster types:
    
    -   [DataLake cluster (new data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
        
    -   [Custom cluster: EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
        
    -   [Hadoop cluster (legacy data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)
        
    -   [Spark cluster: EMR on ACK](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack)
        
    
    **Cluster**
    
    Select the EMR cluster that you want to use.
    
    **Default Access Identity**
    
    -   **Development environment**: You can use the cluster account `hadoop` or the cluster account that is mapped to the task executor.
        
    -   **Production environment**: You can use the cluster account `hadoop` or the cluster account that is mapped to the task owner, the Alibaba Cloud account, or a RAM user.
        
        **Note**
        
        When you select the cluster account mapped to the task owner, an Alibaba Cloud account, or a RAM user as the default access identity, you can refer to [Set cluster identity mapping](/help/en/dataworks/user-guide/configure-cluster-identity-mapping) to manually configure the mapping between DataWorks tenant members and specified EMR cluster accounts. If you run EMR tasks in DataWorks without configuring this mapping, DataWorks handles the situation as follows:
        
        -   If a RAM user runs the task: The task is run by default by the EMR cluster system account that has the same name as the current operator. If the cluster has LDAP or Kerberos authentication enabled, the task fails.
            
        -   If the Alibaba Cloud account runs the task: The DataWorks task execution fails.
            
        
    
    **Pass Proxy User Information**
    
    Specifies whether to pass proxy user information.
    
    **Note**
    
    When authentication methods such as LDAP or Kerberos are enabled, the cluster issues a credential to each regular user. To simplify permission management, you can have a superuser (real user) proxy a regular user (proxy user) for authentication. When a proxy user accesses the cluster, the superuser's identity is used for authentication. You only need to add the user as a proxy user.
    
    -   **Pass**: When a task runs on the EMR cluster, data access permissions are verified and controlled based on the proxy user.
        
        -   **DataStudio and DataAnalysis**: The Alibaba Cloud account name of the task executor is dynamically passed as the proxy user information.
            
        -   **Operation Center**: The Alibaba Cloud account name of the default access identity configured during cluster registration is passed as the proxy user information.
            
    -   **Do Not Pass**: When a task runs on the EMR cluster, data access permissions are verified and controlled based on the identity verification method configured during cluster registration.
        
    
    Proxy user information is passed differently for different types of EMR tasks:
    
    -   **EMR Kyuubi tasks**: Passed through the `hive.server2.proxy.user` configuration item.
        
    -   **EMR Spark tasks and non-Java Database Connectivity (JDBC) EMR Spark SQL tasks**: Passed through the `-proxy-user` configuration item.
        
    
    **Configuration File**
    
    When you select **HADOOP** as the cluster type, you can go to the [EMR console](https://emr.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.409f7f41uT0j4X#/region/cn-hangzhou/resource/all/ecs/list) to obtain the configuration file. For more information, see [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations). After you export a service configuration file, change the name of the file based on the file upload requirements of the GUI.
    
    You can also [log on to the EMR cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster) to obtain the relevant configuration files from the following paths.
    
    ```
    /etc/ecm/hadoop-conf/core-site.xml
    /etc/ecm/hadoop-conf/hdfs-site.xml
    /etc/ecm/hadoop-conf/mapred-site.xml
    /etc/ecm/hadoop-conf/yarn-site.xml
    /etc/ecm/hive-conf/hive-site.xml
    /etc/ecm/spark-conf/spark-defaults.conf
    /etc/ecm/spark-conf/spark-env.sh
    ```
    
    **Computing Resource Instance Name**
    
    A custom name for the computing resource instance. You can select the computing resource for a task to run on based on this name.
    
3.  Click **OK** to complete the configuration.
    

## Initialize the resource group

You must initialize the resource group when you **register a cluster for the first time, change cluster service configurations,** or **upgrade component versions**, for example, by modifying the core-site.xml file. This ensures that the resource group can connect to the EMR cluster after you [configure network connectivity](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).

1.  On the **Computing Resource** page, find the EMR computing resource that you associated and click **Initialize Resource Group** in the upper-right corner**.**
    
2.  Find the resource group that you want to initialize and click **Initialize**. After the resource group is initialized, click **OK**.
    

## **(Optional) Configure a YARN resource queue**

You can go to the **Computing Resource** page to find the EMR cluster that you associated. On the **YARN Resource Queue** tab, click **EditYARN Resource Queue** to [set a global YARN resource queue](/help/en/dataworks/user-guide/configure-global-yarn-resource-queue#819af59047eju) for tasks in different modules.

## **(Optional) Set S**park-related **parameters**

Set specific SPARK property parameters for tasks in different modules.

1.  On the **Computing Resource** page, find the EMR cluster that you Associateed.
    
2.  On the Spark-related Parameters tab, click **EditSpark-related Parameter** to go to the page for editing the SPARK parameters of the EMR cluster.
    
3.  By clicking the **Add** button below a module and entering a **Spark Property Name** and its corresponding **Spark Property Value**, you can [set global Spark parameters](/help/en/dataworks/user-guide/configure-global-spark-parameters) for the task.
    

## What to do next

-   [Configure Kyuubi connection information](/help/en/dataworks/user-guide/set-the-kyuubi-connection-information-of-the-cluster): To use a custom account and password to log on to Kyuubi and run related tasks, see this document for instructions on how to customize the Kyuubi connection information.
    
-   After you configure the EMR computing resources, you can perform data development in Data Studio using [EMR-related nodes](/help/en/dataworks/user-guide/emr-data-studio-new/).
