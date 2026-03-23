**Important**

DataWorks no longer recommends using legacy resource groups, which include exclusive resource groups and shared resource groups. Serverless resource groups provide more features and use resources more efficiently to prevent waste. We recommend that you use [Serverless resource groups](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u).

## **Overview of legacy resource groups**

DataWorks legacy resource groups include **exclusive resource groups** and **shared resource groups**. These resource groups are categorized based on scenarios such as task scheduling, data integration, and DataService Studio. The categories include the following: **exclusive resource groups for scheduling, exclusive resource groups for Data Integration, exclusive resource groups for DataService Studio, shared resource groups for scheduling, and shared resource groups for DataService Studio**. In DataWorks, scheduling resource groups ensure that tasks are scheduled and run. Data Integration resource groups ensure data transmission for data integration tasks. DataService Studio resource groups ensure that API calls are processed.

**Resource group type**

**Billing method**

**Resource group description**

**Scheduling resource group**

**Data Integration resource group**

**DataService Studio resource group**

**Exclusive resource group**

Subscription

-   These are platform-hosted resource groups. After you purchase one, you have exclusive access to it.
    
-   You can attach a resource group to a workspace to implement resource isolation between workspaces.
    
-   Supports flexible configurations such as scale-out, scale-in, upgrades, and specification changes.
    

[Billing of exclusive resource groups for scheduling](/help/en/dataworks/exclusive-resource-groups-for-scheduling#concept-2036168)

[Billing of exclusive resource groups for Data Integration](/help/en/dataworks/exclusive-resource-groups-for-data-integration#concept-2036167)

[Billing for exclusive resource groups for DataService Studio](/help/en/dataworks/exclusive-resource-groups-for-dataservice-studio#concept-2070032)

**Note**

Exclusive resource groups for DataService Studio are available only in the China (Shanghai) region.

**Shared resource group**

Pay-as-you-go

When you activate DataWorks, Alibaba Cloud DataWorks automatically provides shared resource groups (shared resource groups for DataService Studio and shared resource groups for scheduling). Shared resource groups are shared by all DataWorks tenants. During peak hours, tasks may need to wait for resources.

[Use shared resource groups](/help/en/dataworks/user-guide/use-a-shared-resource-group#concept-2418005)

\-

[Use shared resource groups](/help/en/dataworks/user-guide/use-a-shared-resource-group#concept-2418005)

## **Comparison between shared and exclusive resource groups**

#### **Scheduling resource groups**

**Category**

**Shared resource group for scheduling**

**Exclusive resource group for scheduling**

**Machine Ownership**

Maintained by DataWorks. These are shared resources that all tenants compete for.

Maintained by DataWorks. These are computing resources exclusively used by a single tenant.

**Network connectivity**

Network connectivity is not guaranteed. This includes but is not limited to the following scenarios:

-   The data source is on the internet but has a whitelist that blocks access from unknown IP addresses.
    
-   The data source is in an Alibaba Cloud VPC network.
    

You can configure network settings to connect to complex network environments. For more information, see [Billing of exclusive resource groups for scheduling](/help/en/dataworks/exclusive-resource-groups-for-scheduling#concept-2036168).

**Task timeliness**

These resources are shared by all DataWorks users, so timeliness is not guaranteed.

These resources are exclusively used by a single tenant. You can control the number of concurrent tasks that the resource group runs and ensure that tasks are executed on time.

**Scenarios**

Because tenants share resources, many tasks can easily cause task congestion in a workspace. These resource groups are suitable only for scenarios that require low concurrency and a low frequency of calls.

Tenants can control the number of concurrent tasks that the resource group runs. These resource groups support operations such as scale-out, scale-in, and specification changes. This meets the requirements of scenarios that involve many tasks and have high requirements for timeliness.

**Billing method**

Pay-as-you-go. For more information, see [Scheduling instance fees](/help/en/dataworks/billing-description-of-task-scheduling).

Subscription. For more information, see [Billing of exclusive resource groups for scheduling: Subscription](/help/en/dataworks/product-overview/billing-of-subscription-exclusive-resource-groups-for-scheduling#concept-l3y-4y3-thb).

**Other comparisons**

-   Timeliness requirements: Shared resource groups for scheduling are shared by all DataWorks users. If your tasks have strict timeliness requirements, we recommend that you select an exclusive resource group for scheduling.
    
-   Access to non-public environments with whitelist restrictions: Shared resource groups do not support access to non-public environments that have whitelist restrictions. If you have this requirement, use an exclusive resource group for scheduling.
    
-   Task volume requirements: If you have many daily scheduling tasks, you can select a subscription exclusive resource group for scheduling.
    

#### **Data Integration resource groups**

**Category**

**Exclusive resource group for Data Integration**

Machine resource ownership

Maintained by DataWorks. These are computing resources that are exclusively used by a single tenant.

Network

-   Provides public network access.
    
-   You can configure [network settings](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b) to access databases in any network environment.
    

Supported data sources

All data sources.

Task execution timeliness requirements

Exclusively used by a tenant. You can control the number of concurrent tasks that the resource group runs and ensure that tasks are executed on time.

Scenarios

Many important production tasks.

Billing

Subscription. For more information, see [Billing of exclusive resource groups for Data Integration: Subscription](/help/en/dataworks/billing-of-subscription-exclusive-resource-groups-for-data-integration#concept-ujk-qy3-thb).

Selection guide

-   Timeliness requirements: If data integration tasks are run with high concurrency and cannot be run during off-peak hours, your business requires exclusive computing resources to ensure fast and stable data transmission. In this case, you can use an exclusive resource group for Data Integration.
    
-   Access to internal network environments: Exclusive resource groups for Data Integration provide public network access. If your database is on the internet, you can use an exclusive resource group for Data Integration to perform synchronization over the internet. Some databases cannot be directly synchronized over the internet due to their own attributes. For more information, see the documentation for each data source and plug-in: [Supported data sources and reader/writer plug-ins](/help/en/dataworks/supported-data-source-types-and-plug-ins#concept-uzy-hgv-42b).
    
-   Access to complex environments: To access databases in complex network environments, select a subscription exclusive resource group for Data Integration. For more information about network solutions, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
    
-   Real-time synchronization: You must use an exclusive resource group for Data Integration to perform real-time data synchronization.
    
-   Support for custom data source resource groups: Some data sources can be used only with exclusive resource groups for Data Integration. For more information, see [Data sources supported by real-time synchronization](/help/en/dataworks/plug-ins-for-data-sources-that-support-real-time-synchronization#concept-2361472).
    

### **Data service resource group**

Shared resource groups for DataService Studio are shared by tenants. If your business needs to make API calls to DataService Studio with high concurrency and high frequency, and requires timely results, you need dedicated computing resources to ensure the availability and stability of DataService Studio. In this scenario, select an exclusive resource group for DataService Studio in DataWorks. For more information about billing, see [Billing of exclusive resource groups for DataService Studio: Subscription](/help/en/dataworks/billing-of-subscription-exclusive-resource-groups-for-dataservice-studio) and [DataService Studio](/help/en/dataworks/dataservice-studio-1).

### **Billing**

For more information about the billing for different types of resource groups, see [Billing of legacy resource groups](/help/en/dataworks/untitled-document-1702373462002/).

### **Notes**

-   When you activate DataWorks, it provides pay-as-you-go shared resource groups by default. You can also purchase subscription exclusive resource groups, or upgrade to DataWorks Standard Edition, Professional Edition, or Enterprise Edition to use your IDC machines as resource groups for running DataWorks tasks.
    
-   Different types of legacy resource groups are used for tasks in different execution stages. This topic uses offline task scheduling as an example to describe how DataWorks dispatches offline tasks and which resource groups are used during task execution. For more information, see [Dispatch mechanism for tasks that use legacy resource groups](/help/en/dataworks/dataworks-resource-group-overview#6f4cb2efac0ok).
    
-   In the same execution stage, you can select different types of resource groups for a task. For example, for offline task scheduling, you can select a subscription exclusive resource group for scheduling or a pay-as-you-go shared resource group for scheduling. For offline data integration tasks, you can select a subscription exclusive resource group for Data Integration. For more information, see [Comparison between shared and exclusive resource groups](/help/en/dataworks/dataworks-resource-group-overview#f4b9259237j16).
    
-   Shared resource groups and exclusive resource groups in DataWorks are integrated with Security Center Free Edition by default. This provides basic security hardening capabilities, such as unusual logon detection, DDoS attack detection, and vulnerability scans for mainstream server types. For more information, see [Security Center Free Edition](/help/en/security-center/product-overview/introduction-to-security-center-basic).
    

### **Dispatch mechanism for tasks that use legacy resource groups**

DataWorks uses scheduling resource groups to dispatch offline tasks to different engines or server resources for execution. For example, scheduling resource groups dispatch tasks to the MaxCompute engine for execution. They also dispatch offline data synchronization tasks to Data Integration task execution resources for execution.![公共数据集成资源组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9941718761/p332139.png)
