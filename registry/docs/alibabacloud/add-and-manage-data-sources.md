A data source is an object on the DataWorks platform that stores the connection information for an external data system, such as a database or storage service. After you create a data source, you can reference it in DataWorks to read and write data. DataWorks supports many data source types, including mainstream databases, big data storage, and message queues. To ensure data security, workspaces in standard mode support data source environment isolation. You can configure separate data sources for the development and production environments. The development data source is used only for node development and testing, while the production data source is used only for the scheduled execution of published nodes. This strict separation prevents test operations from affecting production data.

## Features

#### **Data source usage**

Data sources in DataWorks are managed and maintained in the **Management Center** > **Data Source** section of a workspace. After a data source is created and its connection is tested, you can use it in various DataWorks modules. The following table provides examples of data source use cases.

**Feature module**

**Scenario**

**Supported data source types**

**Data Integration**

Execute data sync tasks. Supports data migration between different data sources, such as from MySQL to MaxCompute. Supports various methods like single table, whole database, offline, and real-time.

[Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations)

**Data Development**

Supports node development, testing, and scheduled execution. If the workspace is in standard mode, the system automatically uses the development or production data source configuration based on the environment during task execution.

[Compute engines](#31d27f3d190kd), [Database nodes](/help/en/dataworks/user-guide/new-studio-database-node#ac57ac8e208t9)

**Data Map**

Collects data source metadata. You can view table schemas and data lineage.

[Supported data sources and metadata acquisition methods](/help/en/dataworks/user-guide/metadata-collection/)

**DataAnalysis**

Connects to databases for data processing, analysis, transformation, and visualization.

[Supported data sources](/help/en/dataworks/user-guide/sql-query)

**DataService Studio**

Generates API services based on data source table schemas to provide data query interfaces.

[Supported data sources for generating APIs](/help/en/dataworks/user-guide/configure-a-data-source)

#### **Data source environment isolation**

To ensure data security, workspaces in standard mode support the **data source environment isolation** feature. You can configure separate data sources for the development and production environments. The development data source is used only for node development and testing, while the production data source is used only for the scheduled execution of published nodes. This strict separation prevents test operations from affecting production data. For more information, see [Data source environments](#025f80e1d94gt).

#### **Data source types**

DataWorks supports two types of data sources that have distinct features and purposes. The following table compares their core differences.

**Comparison Dimensions**

**Regular type**

**Metadata type**

Core purpose

Stores connection information for accessing physical data. It is the foundation for reading, writing, and processing data.

Stores connection information for a data lake metadata center. It is used only for metadata acquisition and governance.

Processed object

Physical data.

Descriptive information (metadata) about the data, such as the structure of databases, tables, and fields.

Usable for task execution

Yes. The source and destination in a sync task must reference this type of data source.

No. It cannot be used as the input or output of a task.

Typical examples

MySQL, MaxCompute, Hologres, DLF, and OSS.

Paimon Catalog.

In summary, use a regular data source to read, write, or process data. Use a metadata data source to import the table structure of a data lake, such as Paimon, into DataWorks for governance and viewing.

## Prerequisites

Before you configure a data source, ensure that you meet the following prerequisites:

-   **Permissions**: You must be a workspace administrator, have the O&M role for the target workspace, or be a RAM user with the `AliyunDataWorksFullAccess` or `AdministratorAccess` policy. For more information about authorization, see [Workspace-level module permission management](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3) and [Grant permissions to a RAM user](/help/en/cms/cloudmonitor-1-0/user-guide/grant-permissions-to-a-ram-user).
    
-   **Connection information**: Prepare the required information for the data source, such as the instance or connection address (Endpoint or JDBC URL), port, database name, username, and password.
    
-   **Network connectivity**: Ensure that the network of the DataWorks [resource group](/help/en/dataworks/user-guide/resource-group-management/) can access your data source. If your data source is accessed over the public network and you use a **Serverless resource group**, you must configure a [NAT Gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and EIPs for the VPC that is attached to the resource group. Otherwise, the connection fails.
    

## Notes

-   **Limits**: Data sources created across regions, across accounts, or using an AccessKey ID and AccessKey secret can be used only for data synchronization, not for data development or task scheduling.
    
-   **Differences in creation**: In standard mode, data sources created in the **Management Center** include information for both the development and production environments. Data sources created in **Data Integration** include only production environment information. We recommend that you create and maintain all data sources in the Management Center.
    

## **Creation methods: Automatic and manual**

**Creation method**

**Description**

**Scenarios**

**Automatic creation**

When you attach a compute engine (such as MaxCompute or Hologres) to a workspace, the system automatically creates and manages the corresponding data source. The lifecycle of this data source is tied to the compute engine, and its permissions are inherited from the compute engine.

**Recommended**: When the data source is used for **Data Development**, you **must** use this method. Otherwise, tasks cannot run.

**Manual creation**

Manually enter the connection information, credentials, and other parameters for the data source. You can control the lifecycle and permission allocation of the data source.

Applies to all data source types, especially in scenarios such as data integration and DataService Studio, or when fine-grained access control is required.

## **Feature access**

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the navigation pane on the left, click **Data Source** to go to the **Data Source List** page.
    
3.  In the upper-left corner of the page, click **Add Data Source**.
    

## **Create a data source**

### **Step 1: Select a connection mode**

DataWorks supports **Instance Mode** and **Connection String Mode** for configuring data source connection information.

#### Scenario 1: Instance mode (current Alibaba Cloud account)

If your data source is an Alibaba Cloud product, such as RDS or PolarDB, and the instance belongs to your current Alibaba Cloud account, you can select **Instance Mode**. You only need to specify the **Region** and **Instance**, and the system automatically retrieves the latest data source information. You do not need to set the address or port.

-   If a suitable instance is not available and you need to purchase a new one, **we recommend that you specify the same virtual private cloud (VPC) for the instance as the one used by the DataWorks resource group.** This practice reduces network configuration tasks.
    
-   **If a data source instance already exists and its VPC is different from the VPC used by the DataWorks resource group,** [you must configure network connectivity](/help/en/dataworks/user-guide/network-connectivity-1/) **to ensure that the data source can be used.**
    

#### Scenario 2: Instance mode (other Alibaba Cloud accounts)

When you add a data source and select the instance mode, you can access an instance in **Another Alibaba Cloud Account** by creating a cross-account data source. To do this, configure the **Other Alibaba Cloud Account ID** and **RAM Role Name**.

For a cross-account data source, ensure the following:

-   The RAM role has access permissions to the destination data source. For more information about cross-account authorization, see [Cross-account authorization (RDS, Hive, or Kafka)](/help/en/dataworks/user-guide/configure-cross-account-authorization) and [Cross-account authorization (MaxCompute, Hologres)](/help/en/dataworks/user-guide/add-a-maxcompute-data-source-across-accounts).
    
-   [Network connectivity](/help/en/dataworks/user-guide/solution-3-network-connection-of-different-primary-accounts) is established between the **resource group** of the current account and the **data source** of the other account.
    

#### Scenario 3: Connection string mode

For self-managed data sources deployed on ECS instances or in on-premises data centers, data sources on the public network, or Alibaba Cloud instances that cannot be accessed over the private network, use **Connection String Mode**. You can manually configure the network address (Endpoint or JDBC URL), port, database name, and credentials (username and password or AccessKey).

-   When you use connection string mode to configure a data source, ensure network connectivity between the IP address and port of the data source and the DataWorks resource group. Configure **public network access**, **security groups**, and **whitelists** as needed. For more information, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity).
    
-   If your data source IP address changes frequently or cannot be accessed directly by IP address, for example, when the data source is hosted by a domain name and must be accessed externally, you can resolve this issue by [attaching a host to an exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#70e8fe832a57g) or configuring [internal DNS resolution (PrivateZone)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups#83f4b4bc8087a) for a Serverless resource group.
    

**Important**

When you use **Connection String Mode**, DataWorks automatically parses the JDBC URL. If the URL contains unsupported parameters, **the system automatically removes them**. To retain special parameters, to contact technical support.

### Step 2: Enter connection information

In standard mode, you must configure connection information for the development and production environments separately. You can use the same or different configurations for the two environments.

-   Data Source Name: Must be unique within the workspace. We recommend using a name that clearly identifies the business and environment, such as `rds_mysql_order_dev`.
    
-   Data Source Description: Briefly describe the purpose of the data source.
    
-   Connection Information: Based on the connection mode that you selected, enter the instance or URL address, port, and other information for the data source.
    

### **Step 3: Set the account and password**

DataWorks supports multiple authentication methods for data sources. You can set the credentials based on the data source type and the parameters on the configuration page. Ensure that the credentials provide access permissions to the database. Otherwise, errors occur.

**Authentication method**

**Scenarios**

**Username and password**

Applies to most database types, such as RDS and StarRocks. DataWorks can access the data source using a **username and password**. The credentials must be provided by the data source owner.

**Resource Access Management (RAM) users**

Supports the following methods. Applies to Alibaba Cloud products that support RAM user authentication, such as MaxCompute and Hologres. You can set permissions as needed.

-   **Alibaba Cloud account**: The root account of the current tenant. Has the highest permissions. Use with caution.
    
-   **RAM user**: You can specify another RAM user under the current Alibaba Cloud account to access the data source.
    
-   **RAM role**: Access through role assumption. Supports fine-grained access control and provides high security. For configuration guidance, see [Configure a data source using RAM role-based authorization](/help/en/dataworks/user-guide/use-the-ram-role-based-authorization-mode-to-add-a-data-source).
    
-   **Task owner**: The RAM user specified as the owner of the task or node.
    
-   **Executor**: The currently logged-on account.
    

**Kerberos authentication**

A third-party identity authentication mechanism. Applies to big data components such as Hive, HDFS, and HBase. To use Kerberos authentication, you must upload authentication files such as keytab and krb5.conf. For configuration guidance, see [Manage third-party authentication files](/help/en/dataworks/user-guide/manage-third-party-authentication-files#section-7oz-p11-cb2).

**AccessKey**

An [AccessKey pair](/help/en/ram/user-guide/accesskey-pair-management/) is a permanent access credential provided by Alibaba Cloud. It consists of an **AccessKey ID** and an **AccessKey secret**. It applies to data sources such as OSS and Tablestore. AccessKey pairs have lower security. Keep them secure. If other logon methods are available, such as RAM role-based authorization, we recommend that you use them instead.

If your database has SSL authentication enabled, you must also enable it when you create the data source. For more information about the procedure, see [Add SSL authentication to a PostgreSQL data source](/help/en/dataworks/user-guide/postgresql-data-source#8668d0da4fsee).

### **Step 4: Test connectivity**

At the bottom of the page, click **Test Connectivity** for the resource group that is attached to the workspace. This step is crucial to ensure that DataWorks can successfully access your data source.

-   If **Connected** is displayed, the configuration is correct.
    
-   If **Not Connected** is displayed, a diagnostic tool appears to help you troubleshoot the issue. Common causes include incorrect credentials, network issues such as an unconfigured IP address whitelist, or a missing NAT Gateway.
    
-   In standard mode, ensure that both the **development environment** and the **production environment** are **Connected**. Otherwise, errors occur later.
    

You can configure the network based on the data source's configuration mode, region, instance ownership, and deployment location. The following table lists common configuration scenarios.

Scenario

Instructions

The data source is an Alibaba Cloud product and belongs to the **same Alibaba Cloud account** and is in the **same region** as the DataWorks workspace.

[Connect to a data source in the same account and region](/help/en/dataworks/user-guide/scheme-1-connect-with-the-main-account-and-the-same-regional-network)

The data source is an Alibaba Cloud product and belongs to the **same Alibaba Cloud account** as the DataWorks workspace but is in a **different region**.

[Connect to a data source in the same account but a different region](/help/en/dataworks/user-guide/scheme-2-connect-with-the-main-account-and-networks-in-different-regions)

The data source is an Alibaba Cloud product but belongs to a **different Alibaba Cloud account** than the DataWorks workspace.

[Connect to a data source in a different account](/help/en/dataworks/user-guide/solution-3-network-connection-of-different-primary-accounts)

The data source is deployed on an Alibaba Cloud ECS instance.

[Connect to a self-managed data source on an ECS instance](/help/en/dataworks/user-guide/solution-4-network-connectivity-of-data-sources-deployed-in-ecs)

The data source is deployed in an on-premises data center.

[Connect to an on-premises data source](/help/en/dataworks/user-guide/solution-5-idc-data-source-network-connectivity)

The data source has a public endpoint.

[Connect to a data source over the public network](/help/en/dataworks/user-guide/solution-6-internet-data-source-network-connectivity)

## **Manage the data source**

On the data source management page, you can filter data sources by **Data Source Type** and **Data Source Name**. You can also perform the following management operations on a target data source:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1511738671/p993029.png)

### Edit, clone, and permissions

-   **Edit**: Modify the configuration of the data source as needed. The name and applicable environment of the data source cannot be changed.
    
    > Data sources that are automatically created when you attach a compute engine in [Compute engine management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/) cannot be edited directly. To modify them, you must edit them on the Compute engine management page.
    
-   **Clone**: Quickly create a new data source that has the same configuration as the current one.
    
-   **Permission management**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7264338071/p759996.png) icon to manage cross-workspace permissions for the data source. You can grant other workspaces or specific users in other workspaces permission to use the current data source. After you grant the **Usable** permission, the user can view and use the data source but cannot edit it.
    
    > For other questions related to data source permissions, see [Data source permission management](/help/en/dataworks/management-of-permissions-on-data-sources#concept-2564841).
    

### Delete a data source and its impact

On the data source list, click the delete button for a data source to delete it. However, data sources that are automatically created when you attach a compute engine in [Compute engine management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/) cannot be deleted directly. In the navigation pane on the left of the Management Center, click **Compute Engine**, find the compute engine that you want to delete, and then click **Detach**. This operation also deletes the data source.

Deleting a data source has the following impact on the **Data Integration** module:

**Prerequisite**: Before you delete a data source, confirm whether it is associated with any sync tasks in the production environment.

**Solution**: If there are associated tasks, first use [Batch Operations](/help/en/dataworks/user-guide/perform-operations-on-multiple-dataworks-objects-at-a-time) to change the data source for the tasks, and then commit and publish them again.

**Deletion scenario**

**Impact**

Delete both the **development** and **production** environments

• Production tasks will fail and cannot run.

• The data source will not be visible when you configure new tasks in the development environment.

Only the **development** environment

• Production tasks can run normally.

• However, when you edit the task, metadata (such as the table schema) cannot be retrieved.

• The data source will not be visible when you configure new tasks in the development environment.

Only the **production** environment

• Production tasks will fail and cannot run.

• Tasks that use this data source in the development environment cannot be committed and published to the production environment.

The impact on **other** modules is as follows:

**Feature module**

**Risk Level**

**Core impact and solution**

**Operation Center**

High

Impact: All scheduled computing or data integration tasks that depend on this data source will fail.

Solution: Use [Batch Operations](/help/en/dataworks/user-guide/perform-operations-on-multiple-dataworks-objects-at-a-time) to change the data source for the tasks and republish them.

**DataService Studio API**

High

Impact: All calls to [API services generated from a data source](/help/en/dataworks/user-guide/generate-api/) and [service orchestration](/help/en/dataworks/use-service-orchestration) based on this data source will fail.

Solution: Change the data source for the affected APIs.

**DataAnalysis**

Medium

Impact: In the **DataAnalysis** module, [query tasks](/help/en/dataworks/user-guide/sql-query) for this data source will fail.

Solution: When you execute SQL queries, switch to another available data source.

**Data Quality**

Medium

Impact: Configured [Data Quality monitoring rule tasks](/help/en/dataworks/user-guide/view-monitoring-results#title-sl7-nli-bw1) will report exceptions.

Solution: Go to the Operation Center and disassociate the tasks from the DQC rules, or modify the rules.

> If the data source has been authorized for use by users across workspaces, tasks that use the data source across workspaces also fail after the data source is deleted.

## Advanced information

### **Data source environments**

#### **Workspace modes: Basic vs. standard**

To meet different security control requirements for production data, DataWorks provides basic and standard modes for workspaces. For more information, see [Differences between workspace modes](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).

-   **Basic mode**: Has only one environment. All development operations directly affect production. This mode is suitable for quick validation or personal testing.
    
-   **Standard mode**: Recommended for enterprises. It has built-in development and production environments. You can configure different data sources, such as a test database and a production database, or different access permissions for the two environments to achieve data isolation.
    

#### **Data source environment isolation**

Workspaces in [standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode) support data source environment isolation. A data source with the same name can have two sets of configurations: one for the development environment and one for the production environment. You can set two different databases or instances to isolate the data that tasks operate on during testing and production scheduling. This practice ensures the security of production data. For example, when you run data development or offline sync tasks, the system automatically accesses the corresponding database based on the task's current environment. This prevents node testing and other operations from contaminating data in the production database.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1213291771/CAEQUxiBgICkzqG13BkiIGQzOWJkMzRhNmM1YTRhN2RhZjNkZjNmNDE2Zjk3ZDI54970985_20250312161225.027.svg)

**Note**

-   In the **Data Integration** module, only single-table offline sync tasks in standard mode workspaces support development and production environment isolation for data sources. All other types of **sync tasks** use the production environment data source.
    
-   If you configure only the production environment and not the development environment for a data source, you cannot select that data source when you configure nodes in Data Development.
    
-   If you upgrade a workspace from basic mode to standard mode, the original data source is split into two isolated data sources for the production and development environments. For more information, see [Upgrade the workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).
    

### **Relationship with data sources in the Data Integration module**

Basic mode

When a workspace is in basic mode, it has only one environment. There is no difference between data sources created in Data Integration and those created in the Management Center.

Standard mode

-   When you create a data source in the Management Center, a data source with the same name is automatically created in Data Integration. They share the **production environment** configuration.
    
-   When you create a data source in Data Integration, a data source with the same name is also automatically created in the Management Center. However, this data source has only production environment information, and the development environment information is missing. You must add the development environment information before you can use this data source in **Data Development**.
    
-   To ensure that data source information is complete, we recommend that you always create and manage all data sources in the Management Center.
    

## FAQ

-   **Q: In a standard mode workspace, a task that has a configured data source runs successfully in the development environment but fails during production scheduling. Why?**
    
    **A:**
    
    1.  Check whether the connectivity test is successful for both the development and production environments of the data source.
        
    2.  Check whether the data in the development and production databases is consistent and meets the business requirements.
        
    3.  **What are the development and production data sources used for?**
        
        You can configure separate data sources for the development and production environments. The development data source is used only for node development and testing, while the production data source is used only for the scheduled execution of published nodes. This strict separation prevents test operations from affecting production data.
        
-   **Q: Why does the data source connectivity test fail?**
    
    **A**: This issue is usually caused by the following reasons. Check them one by one. For more information about network connectivity configuration, see [Network connectivity configuration](/help/en/dataworks/user-guide/network-connectivity-1/).
    
    -   **Incorrect credentials**: Check whether the username and password that you entered are correct.
        
    -   **Access object**: Check whether the name of the connection object, such as the database or bucket, is correct and whether the username and password provide the required access permissions.
        
    -   **Incorrect address or port**: Check whether the connection address and port number of the data source are correct. If the address is a host domain name, ensure that the domain name can be resolved. For more information, see [internal DNS resolution (PrivateZone)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups#83f4b4bc8087a).
        
    -   **Network issue**: Check whether the network between the data source and the resource group is connected. If the data source has a whitelist, check whether the vSwitch CIDR block that is attached to the resource group has been added to the whitelist. If you use a Serverless resource group to connect to a public data source, check whether you have [configured a NAT Gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) as required.
        
-   **Q: What is the difference between compute resources and data sources?**
    
    **A:**
    
    -   A **compute engine** is a resource instance in DataWorks that can be used to execute data processing and analysis tasks. It has computing capabilities and usually refers to an underlying compute engine, such as [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute), [Hologres](/help/en/hologres/product-overview/what-is-hologres), or [AnalyticDB](/help/en/analyticdb/product-overview/product-overview-3). It is used mainly for data development and scheduling tasks.
        
    -   A **data source** in DataWorks is used to connect to different data storage services. It has data storage and management functions. The role of a data source is to provide interfaces for reading and writing data. It is used mainly for synchronization and integration tasks. In addition, data sources can support features such as database nodes, DataService Studio APIs, and query analysis.
        
-   **Q: What is the difference between a DLF data source and a Paimon Catalog data source?**
    
    **A:** A **DLF data source** is a regular data source. It can be used for data integration and data analysis. It also supports metadata management for Paimon and Iceberg tables that use DLF to register metadata. A **Paimon Catalog data source** is used only for metadata acquisition from Paimon lake formats that do not originate from DLF. This type of data source supports governance features such as metadata retrieval, viewing, and quality monitoring. It cannot be used for data synchronization.
