DataWorks lets you create nodes, such as Hive, MapReduce (MR), Presto, and Spark SQL, based on an E-MapReduce (EMR) cluster. This lets you configure EMR task workflows, periodically schedule them, and manage their metadata. This topic describes how to register an EMR cluster that belongs to the same Alibaba Cloud account or a different Alibaba Cloud account.

## Background information

[E-MapReduce](/help/en/emr/emr-product-overview/) (EMR) is a big data processing solution that runs on the Alibaba Cloud platform.

EMR is based on the open source Apache Hadoop and Apache Spark. It lets you use other systems in the Hadoop and Spark ecosystems to analyze and process data. EMR can also exchange data with other Alibaba Cloud data storage systems and databases, such as Object Storage Service (OSS) and Relational Database Service (RDS). Alibaba Cloud EMR provides different deployment modes to meet various user needs, such as deployment on ECS, on ACK, and Serverless.

You can select from multiple EMR components to run EMR tasks in DataWorks. The optimal configurations vary depending on the component. When you configure an EMR cluster, see [EMR cluster configuration recommendations](/help/en/dataworks/user-guide/development-process-of-an-emr-node-in-dataworks#3d36c36051z9r) to select the appropriate configuration.

## **Supported cluster types**

You must create an EMR cluster and register it with DataWorks before you can use the cluster to run tasks. DataWorks supports registering the following cluster types: [DataLake cluster (new data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs), [Custom cluster: EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs), [Hadoop cluster (old data lake): EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs), [Spark cluster: EMR on ACK](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack), and [EMR Serverless Spark](/help/en/emr/emr-serverless-spark/product-overview/what-is-emr-serverless-spark) cluster.

**Important**

-   You can use EMR Hadoop clusters (old data lake) of the following versions in DataWorks:
    
    EMR-3.38.2, EMR-3.38.3, EMR-4.9.0, EMR-5.6.0, EMR-3.26.3, EMR-3.27.2, EMR-3.29.0, EMR-3.32.0, EMR-3.35.0, EMR-4.3.0, EMR-4.4.1, EMR-4.5.0, EMR-4.5.1, EMR-4.6.0, EMR-4.8.0, EMR-5.2.1, EMR-5.4.3
    
-   Hadoop clusters (old data lake) are no longer recommended. Migrate to DataLake clusters as soon as possible. For more information, see [Migrate a Hadoop cluster to a DataLake cluster](/help/en/emr/emr-on-ecs/use-cases/migrate-data-from-a-hadoop-cluster-to-a-datalake-cluster).
    

**Note**

If the type of cluster you are using cannot be registered in DataWorks, [submit a ticket](https://smartservice.console.alibabacloud.com/) to contact technical support.

## **Limits**

-   **Permission limits**: Only the following RAM users or RAM roles can register an EMR cluster. For more information, see [Grant permissions to a RAM user](/help/en/emr/emr-on-ecs/user-guide/grant-permissions-to-ram-users#section-efm-tri-nux).
    
    -   An Alibaba Cloud account.
        
    -   A RAM user or RAM role that has the DataWorks `Workspace Administrator role` and the `AliyunEMRFullAccess` policy.
        
    -   A RAM user or RAM role that has the `AliyunDataWorksFullAccess` and `AliyunEMRFullAccess` policies.
        
-   **Region limits**: EMR Serverless Spark is available only in China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), Germany (Frankfurt), and US (Virginia).
    
-   **Task type**: DataWorks does not support running EMR Flink tasks.
    
-   **Task execution**: DataWorks supports running EMR tasks using [serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) (recommended) or exclusive resource groups for scheduling (old version).
    
-   **Task governance**:
    
    -   Only SQL tasks in EMR Hive, EMR Spark, and EMR Spark SQL nodes support data lineage generation. If the cluster version is 5.9.1, 3.43.1, or later, all these nodes support viewing table-level and field-level lineage.
        
        **Note**
        
        For Spark-type nodes, if the EMR cluster version is 5.8.0, 3.42.0, or later, the nodes support viewing table-level and field-level lineage. If the EMR cluster version is earlier than 5.8.0 or 3.42.0, only Spark 2.x supports viewing table-level lineage.
        
    -   To manage metadata for a DataLake or custom cluster in DataWorks, you must first configure EMR-HOOK on the cluster. If EMR-HOOK is not configured, metadata cannot be displayed in real time, audit logs cannot be generated, and data lineage cannot be displayed in DataWorks. In this case, EMR-related governance tasks cannot be performed. Currently, EMR-HOOK can be configured only for EMR Hive and EMR Spark SQL services. For more information, see [Configure EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access) and [Configure E-HOOK for Spark SQL](/help/en/emr/emr-on-ecs/user-guide/sparksql-uses-the-extension-to-record-data-kinship-and-access).
        
-   For EMR clusters with Kerberos authentication enabled, you must add an inbound rule to the security group to allow access on the UDP port from the vSwitch CIDR block that is associated to the resource group.
    
    **Note**
    
    On the **Basic Information** tab of the EMR cluster, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9770355371/p884762.png) icon for **Cluster Security Group** to open the **Security Group Details** tab. On the **Security Group Details** tab, click **Inbound** in the **Rule** section and select **Add Rule**. Set **Protocol Type** to **Custom UDP**. For **Port Range**, check the `/etc/krb5.conf` file in the EMR cluster for the corresponding KDC port. Set **Destination** to the vSwitch CIDR block that is associated to the resource group.
    

## Precautions

-   To isolate development and production environments in a standard mode workspace, you must register two different EMR clusters. The metadata for these two clusters must be stored using one of the following methods:
    
    -   Method 1 (recommended for data lake solutions): Store the metadata in two different data catalogs in Data Lake Formation (DLF). For more information, see [Switch the metastore type](/help/en/emr/emr-on-ecs/user-guide/use-dlf-for-unified-metadata-storage).
        
    -   Method 2: Store the metadata in two different databases in Relational Database Service (RDS). For more information, see [Configure a self-managed RDS database](/help/en/emr/emr-on-ecs/user-guide/configure-a-self-managed-apsaradb-rds-for-mysql-database).
        
-   An EMR cluster can be registered to multiple workspaces within the same Alibaba Cloud account but cannot be registered to workspaces that belong to different Alibaba Cloud accounts.
    
-   To ensure that the DataWorks resource group can access the EMR cluster, check the security group rules of the EMR cluster if the connection fails. This may occur even if the resource group and cluster are in the same virtual private cloud (VPC) and use the same vSwitch. Add an inbound rule for the corresponding vSwitch CIDR block and the [ports of common open source components](/help/en/emr/emr-on-ecs/user-guide/common-ports-of-open-source-components). For more information, see [Manage EMR cluster security groups](/help/en/emr/emr-on-ecs/user-guide/manage-security-groups-1).
    

## Step 1: Go to the EMR cluster page

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the navigation pane on the left, click **Cluster Management**. On the **Cluster Management** page, click **Register Cluster**. Select **E-MapReduce** for Cluster Type To Register. The **Register EMR Cluster** page appears.
    

## Step 2: Register an EMR cluster

On the **Register EMR Cluster** page, configure the cluster information.

**Note**

For a standard mode workspace, you must configure cluster information for the development and production environments separately. For more information about workspace modes, see [Differences between workspace modes](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).

-   **Display Name of Cluster**: The display name of the cluster in DataWorks. The name must be unique.
    
-   **Alibaba Cloud Account To Which Cluster Belongs**: Select the account that owns the EMR cluster that you want to register to the current workspace.
    
    **Note**
    
    You cannot register an **EMR Serverless Spark** cluster across Alibaba Cloud accounts.
    

Configure the parameters based on the selected account type.

### **Alibaba Cloud Account To Which Cluster Belongs: Current Alibaba Cloud Account**

If you select **Current Alibaba Cloud Account** for Alibaba Cloud Account To Which Cluster Belongs, configure the following parameters:

**Parameter**

**Description**

**Cluster Type**

Select the type of EMR cluster to register. For the cluster types that can be registered in DataWorks, see [Limits](#8ff070d050o8j).

**Cluster**

Select the EMR cluster under the current account to register to DataWorks.

**Note**

If you select **EMR Serverless Spark** as the cluster type, follow the instructions on the UI to select the **E-MapReduce Workspace** (the cluster to register), default engine version, default resource queue, and other information.

**Default Access Identity**

Defines the identity used to access the EMR cluster in the current workspace.

-   **Development environment**: You can use the cluster account `hadoop` or the cluster account mapped to the task executor.
    
-   **Production environment**: You can use the cluster account `hadoop`, or the cluster account mapped to the task owner, Alibaba Cloud account, or RAM user.
    

**Note**

If you select an option that maps to a cluster account, such as the task owner, Alibaba Cloud account, or RAM user, you can manually configure the mapping between DataWorks tenant members and specific EMR cluster accounts. For more information, see [Configure cluster identity mappings](/help/en/dataworks/user-guide/configure-cluster-identity-mapping). The mapped cluster account is used to run EMR tasks in DataWorks. If no mapping is configured, DataWorks uses the following policies:

-   If a **RAM user (sub-account)** runs the task: DataWorks defaults to using an EMR cluster system account with the same name as the current operator. If the cluster has LDAP or Kerberos authentication enabled, the task fails.
    
-   If an **Alibaba Cloud account** runs the task: The DataWorks task reports an error.
    

**Pass Proxy User Information**

Specifies whether to pass proxy user information.

**Note**

When an authentication method such as LDAP or Kerberos is enabled, the cluster issues an authentication credential to each regular user. To simplify permission management, you can use a superuser (real user) to proxy a regular user (proxy user) for permission authentication. In this case, when accessing the cluster as a proxy user, the superuser's identity authentication information is used. You only need to add the user as a proxy user.

-   **Pass**: When you run a task in the EMR cluster, data access permissions are verified and controlled based on the proxy user.
    
    -   **DataStudio and DataAnalysis**: The Alibaba Cloud account name of the task executor is dynamically passed. The proxy user information is the information of the task executor.
        
    -   **Operation Center**: The Alibaba Cloud account name of the default access identity configured during cluster registration is passed. The proxy user information is the information of the default access identity.
        
-   **Do Not Pass**: When you run a task in the EMR cluster, data access permissions are verified and controlled based on the account authentication method configured during cluster registration.
    

The method used to pass proxy user information varies based on the type of EMR task:

-   **EMR Kyuubi tasks**: The proxy user information is passed using the `hive.server2.proxy.user` configuration item.
    
-   **EMR Spark tasks and non-JDBC-mode EMR Spark SQL tasks**: The proxy user information is passed using the `-proxy-user` configuration item.
    

**Configuration Files**

If you select **HADOOP** as the cluster type, you can go to the [EMR console](https://emr.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.409f7f41uT0j4X#/region/cn-hangzhou/resource/all/ecs/list) to obtain the configuration files. For more information, see [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations). After exporting, rename the files according to the upload requirements on the UI.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0085603071/p728073.png)

You can also [log on to the EMR cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster) and go to the following paths to obtain the related configuration files.

```
/etc/ecm/hadoop-conf/core-site.xml
/etc/ecm/hadoop-conf/hdfs-site.xml
/etc/ecm/hadoop-conf/mapred-site.xml
/etc/ecm/hadoop-conf/yarn-site.xml
/etc/ecm/hive-conf/hive-site.xml
/etc/ecm/spark-conf/spark-defaults.conf
/etc/ecm/spark-conf/spark-env.sh
```

### **Alibaba Cloud Account To Which Cluster Belongs: Another Alibaba Cloud Account**

If you select **Another Alibaba Cloud Account** for Alibaba Cloud Account To Which Cluster Belongs, configure the following parameters:

**Parameter**

**Description**

**UID of Alibaba Cloud Account**

The UID of the Alibaba Cloud account that owns the EMR cluster.

**RAM Role**

The RAM role used to access the EMR cluster. This role must meet the following conditions:

-   The RAM role is created in the other Alibaba Cloud account.
    
-   The RAM role in the other Alibaba Cloud account is granted permissions to access the DataWorks service in the current account.
    

**Note**

For more information about registering an EMR cluster across accounts, see [Scenario: Register a cross-account EMR cluster](/help/en/dataworks/user-guide/cross-account-registration-for-emr-cluster).

**EMR Cluster Type**

Select the type of EMR cluster to register. Currently, only `EMR on ECS: DataLake cluster`, `EMR on ECS: Hadoop cluster`, and `EMR on ECS: Custom cluster` are supported for cross-account registration.

**EMR Cluster**

Select the EMR cluster from the other account to register to DataWorks.

**Configuration Files**

Configure the configuration files as prompted on the UI. For more information about how to obtain the configuration files, see [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations). After exporting, rename the files according to the upload requirements on the UI.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0085603071/p728073.png)

You can also [log on to the EMR cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster) and go to the following paths to obtain the related configuration files.

```
/etc/ecm/hadoop-conf/core-site.xml
/etc/ecm/hadoop-conf/hdfs-site.xml
/etc/ecm/hadoop-conf/mapred-site.xml
/etc/ecm/hadoop-conf/yarn-site.xml
/etc/ecm/hive-conf/hive-site.xml
/etc/ecm/spark-conf/spark-defaults.conf
/etc/ecm/spark-conf/spark-env.sh
```

**Default Access Identity**

Defines the identity used to access the EMR cluster in the current workspace.

-   **Development environment**: You can use the cluster account hadoop or the cluster account mapped to the task owner.
    
-   **Production environment**: You can use the cluster account hadoop, or the cluster account mapped to the task owner, Alibaba Cloud account, or RAM user.
    

**Note**

If you select an option that maps to a cluster account, such as the task owner, Alibaba Cloud account, or RAM user, you can manually configure the mapping between DataWorks tenant members and specific EMR cluster accounts. For more information, see [Configure cluster identity mappings](/help/en/dataworks/user-guide/configure-cluster-identity-mapping). The mapped cluster account is used to run EMR tasks in DataWorks. If no mapping is configured, DataWorks uses the following policies:

-   If a **RAM user (sub-account)** runs the task: DataWorks defaults to using an EMR cluster system account with the same name as the current operator. If the cluster has LDAP or Kerberos authentication enabled, the task fails.
    
-   If an **Alibaba Cloud account** runs the task: The DataWorks task reports an error.
    

**Pass Proxy User Information**

Specifies whether to pass proxy user information.

**Note**

When an authentication method such as LDAP or Kerberos is enabled, the cluster issues an authentication credential to each regular user. To simplify permission management, you can use a superuser (real user) to proxy a regular user (proxy user) for permission authentication. In this case, when accessing the cluster as a proxy user, the superuser's identity authentication information is used. You only need to add the user as a proxy user.

-   **Pass**: When you run a task in the EMR cluster, data access permissions are verified and controlled based on the proxy user.
    
    -   **DataStudio and DataAnalysis**: The Alibaba Cloud account name of the task executor is dynamically passed. The proxy user information is the information of the task executor.
        
    -   **Operation Center**: The Alibaba Cloud account name of the default access identity configured during cluster registration is passed. The proxy user information is the information of the default access identity.
        
-   **Do Not Pass**: When you run a task in the EMR cluster, data access permissions are verified and controlled based on the account authentication method configured during cluster registration.
    

The method used to pass proxy user information varies based on the type of EMR task:

-   **EMR Kyuubi tasks**: The proxy user information is passed using the `hive.server2.proxy.user` configuration item.
    
-   **EMR Spark tasks and non-JDBC-mode EMR Spark SQL tasks**: The proxy user information is passed using the `-proxy-user` configuration item.
    

## Step 3: Initialize a resource group

You must initialize the resource group when you **first register a cluster, change cluster service configurations** (for example, modify core-site.xml), or **upgrade a component version**. This step ensures that the resource group can access EMR and that the current environment configuration of the resource group can run EMR tasks.

1.  On the **Cluster Management** page, find the tab of the registered EMR cluster and click **Initialize Resource Group** in the upper-right corner.
    
2.  Find the required resource group and click **Initialize**.
    
    > You can initialize serverless resource groups or exclusive resource groups for scheduling (old version).
    
3.  Wait for 1 to 2 minutes for the initialization to complete, and then click OK.
    

**Important**

-   If the initialization fails, use the connectivity diagnosis tool to help troubleshoot the cause.
    
-   Initializing a resource group may cause running tasks to fail. Unless it is necessary to reinitialize the resource group immediately (for example, to prevent many tasks from failing after cluster configurations are changed), we recommend that you initialize the resource group during off-peak hours.
    

## What to do next

-   Data development: Refer to the [Data development process guide](/help/en/dataworks/user-guide/common-development-process) to configure the relevant component environments.
    
-   [Configure cluster identity mappings](/help/en/dataworks/user-guide/configure-cluster-identity-mapping): If the default access identity for the EMR cluster is not the hadoop account, you must configure cluster identity mappings to control the resources that a RAM user can access in DataWorks.
    
-   [Set global YARN resource queues](/help/en/dataworks/user-guide/configure-global-yarn-resource-queue): Use YARN resource queue mappings to specify the YARN queues that are used by each module. You can also specify whether to overwrite the configurations of each module.
    
-   [Set global Spark parameters](/help/en/dataworks/user-guide/configure-global-spark-parameters): Refer to the [official Spark documentation](https://spark.apache.org/docs/latest/index.html) to customize global Spark parameters. You can also specify whether the workspace-level Spark parameter configuration overwrites the module-level configurations for parameters that have the same name.
    
-   [Set Kyuubi connection information](/help/en/dataworks/user-guide/set-the-kyuubi-connection-information-of-the-cluster): If you want to use a custom account and password to log on to Kyuubi and run tasks, refer to this document to customize the Kyuubi connection information.
