Data Transmission Service (DTS) offers two methods for creating tasks: configuring before purchase and purchasing before configuration. The configure-before-purchase method is recommended for immediate task setup. The purchase-before-configure method is ideal if you need to secure a budget before finalizing the task details. This document describes how to create Data Migration, Data Synchronization, Data Subscription, Data Verification, and Serverless tasks using the purchase-before-configure method.

## Prerequisites

-   [Register an Alibaba Cloud account](/help/en/account/sign-up-with-alibaba-cloud).
    
-   Ensure your account has sufficient balance for pay-as-you-go tasks.
    

## Billing

For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Data verification task

1.  Go to the purchase page using one of the following methods:
    
    -   Go to the [DTS Purchase Page](https://common-buy-intl.aliyun.com/dts/postpay#/buy).
        
    -   At the top of the **Verification Task** list, click **Purchase Instance**.
        
    
2.  Configure the data verification task parameters as described in the table below.
    
    **Important**
    
    -   Data verification tasks support only pay-as-you-go billing.
        
    -   Separate purchase of Incremental Data Verification is not supported.
        
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    Basic Configuration
    
    Billing Method
    
    Select **Pay-as-you-go**.
    
    Function
    
    Select **Data Verification**.
    
    Data Validation Type
    
    This parameter is fixed to **Full Data Verification**.
    
    Source Instance
    
    Select the database type of the source instance.
    
    Region of source Instance
    
    Select the region where the source database is located. The region cannot be changed after purchase.
    
    Destination Instance
    
    Select the database type of the destination instance.
    
    Destination Region
    
    Select the region where the destination database is located. The region cannot be changed after purchase.
    
    Resource Group
    
    Select the [resource group](/help/en/resource-management/product-overview/what-is-resource-management#section-pyt-r5j-jd4) for the verification task.
    
    Quantity
    
    Quantity
    
    The number of data verification tasks to purchase at once. Default: 1. Maximum: 99.
    
3.  Click **Buy Now** and follow the on-screen instructions to complete the payment.
    

Next step: [Configure the Data Verification Task in the task list](/help/en/dts/user-guide/enable-data-verification#section-p4f-fs4-7yu).

## Serverless task

1.  Go to the purchase page using one of the following methods:
    
    -   Go to the [DTS Purchase Page](https://common-buy-intl.aliyun.com/dts/postpay#/buy).
        
    -   At the top of the **Data Synchronization Tasks** list, click **Purchase Instance**.
        
    
2.  Configure the serverless task parameters as described in the table below.
    
    **Note**
    
    -   Currently, only Data Synchronization supports pay-as-you-go Serverless task purchases.
        
    -   Purchase-before-configure Serverless instances have a default DU range of 1-16.
        
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    Basic Configuration
    
    Billing Method
    
    Select **Pay-as-you-go**.
    
    Function
    
    Select **Data Synchronization (Serverless)**.
    
    Incremental Data Verification
    
    Select whether to enable incremental data verification for the serverless task.
    
    Source Instance
    
    Select the database type of the source instance.
    
    Region of source Instance
    
    Select the region where the source database is located. The region cannot be changed after purchase.
    
    Destination Instance
    
    Select the database type of the destination instance.
    
    Destination Region
    
    Defaults to the same Region as the source database and cannot be modified.
    
    Synchronization Topology
    
    Use **One-way Synchronization** for data sharding or scaling, query and report offloading, and building real-time data warehouses, and **Two-way Synchronization** for active geo-redundancy, geo-disaster recovery and cross-border replication.
    
    Resource Group
    
    Select the [resource group](/help/en/resource-management/product-overview/what-is-resource-management#section-pyt-r5j-jd4) for the serverless task.
    
    Quantity
    
    Quantity
    
    The number of serverless tasks to purchase at once. Default: 1. Maximum: 99.
    
3.  Click **Buy Now** and follow the on-screen instructions to complete the payment.
    

Next step: Configure your serverless task. The process is similar to that of a data synchronization task. For instructions, see [Configure a Synchronization Task](/help/en/dts/getting-started/configure-a-data-synchronization-task-using-the-new-dts-console#task-2068001).

## Data migration task

1.  Go to the purchase page using one of the following methods:
    
    -   Go to the [DTS Purchase Page](https://common-buy-intl.aliyun.com/dts/postpay#/buy).
        
    -   At the top of the **Data Migration** list, click **Purchase Instance**.
        
    
2.  Configure the data migration task parameters as described in the table below.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    Basic Configuration
    
    Billing Method
    
    Data migration supports only **Pay-as-you-go**.
    
    Function
    
    Select **Data Migration**.
    
    Incremental Data Verification
    
    Select whether to enable incremental data verification for the migration task.
    
    Region
    
    Select the region where the destination database is located.
    
    Specification
    
    Select a link specification based on your performance requirements. Higher specifications result in faster migration speeds. For details, see [Data migration link specifications](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
    
    Resource Group
    
    Select the [resource group](/help/en/resource-management/product-overview/what-is-resource-management#section-pyt-r5j-jd4) for the migration task.
    
    Quantity
    
    Quantity
    
    The number of data migration tasks to purchase at once. Default: 1. Maximum: 99.
    
3.  Click **Buy Now** and follow the on-screen instructions to complete the payment.
    

Next step: [Configure a Migration Task](/help/en/dts/getting-started/configure-a-data-migration-task-using-the-new-dts-console#task-2067996).

## Data synchronization task

**Important**

-   If you need to purchase a cross-border synchronization task, you must apply for permission to enable cross-border data synchronization. For more information, see [Apply for cross-border data synchronization permissions](/help/en/dts/user-guide/apply-for-permissions-to-synchronize-data-across-borders#task-2233937).
    

1.  Go to the purchase page using one of the following methods:
    
    -   Go to the [DTS Purchase Page](https://common-buy-intl.aliyun.com/dts/postpay#/buy).
        
    -   At the top of the **Data Synchronization Tasks** list, click **Purchase Instance**.
        
    
2.  Configure the data synchronization task parameters as described in the table below.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    Basic Configuration
    
    Billing Method
    
    -   **Subscription**: A prepaid method suitable for long-term tasks. It is more cost-effective than Pay-As-You-Go and offers discounts for longer durations.
        
    -   **Pay-as-you-go**: You are charged on an hourly basis. This method is suitable for short-term needs. To save costs, you can release the task at any time.
        
    
    Cluster Type of DTS Instance
    
    Select **Public Cluster**.
    
    **Note**
    
    This option only applies when **Billing Method** is set to **Subscription**.
    
    Function
    
    Select **Data Synchronization**.
    
    Incremental Data Verification
    
    Select whether to enable incremental data validation for the synchronization task.
    
    **Note**
    
    The **Subscription** billing method does not support enabling incremental data verification.
    
    Source Instance
    
    Select the database type of the source instance for data synchronization.
    
    Region of source Instance
    
    Select the region where the source database is located. The Region cannot be changed after purchase.
    
    Destination Instance
    
    Select the database type of the destination instance.
    
    Destination Region
    
    Select the region where the destination database is located. The Region cannot be changed after purchase.
    
    Synchronization Topology
    
    Select the [data synchronization topology](/help/en/dts/user-guide/synchronization-topologies). Options: **One-way Synchronization** or **Two-way Synchronization**.
    
    Synchronization Link Specification
    
    DTS provides link specifications with different performance levels, measured by records synchronized per second. For details, see [Data synchronization link specifications](/help/en/dts/product-overview/specifications-of-data-synchronization-channels#concept-26605-zh).
    
    **Note**
    
    For production environments, select a specification of **small** or higher to ensure adequate synchronization speed.
    
    Resource Group
    
    Select the [resource group](/help/en/resource-management/product-overview/what-is-resource-management#section-pyt-r5j-jd4) for the synchronization task.
    
    Quantity
    
    Order Time
    
    Select the duration for the task. Monthly options: 1-9 months. Annual options: 1-3 years.
    
    **Note**
    
    -   This option only applies when **Billing Method** is set to **Subscription**.
        
    -   Enable **Auto-renewal** at expiration if needed.
        
    
    Quantity
    
    The number of data synchronization tasks to purchase at once. Default: 1. Maximum: 99.
    
3.  Click **Buy Now** and follow the on-screen instructions to complete the payment.
    

Next step: [Configure a Synchronization Task](/help/en/dts/getting-started/configure-a-data-synchronization-task-using-the-new-dts-console#task-2068001).

## Change tracking task

1.  Go to the purchase page using one of the following methods:
    
    -   Go to the [DTS Purchase Page](https://common-buy-intl.aliyun.com/dts/postpay#/buy).
        
    -   At the top of the **Change Tracking** list, click **Purchase Instance**.
        
    
2.  Configure the change tracking task parameters as described in the table below.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    Basic Configuration
    
    Billing Method
    
    -   **Subscription**: A prepaid method suitable for long-term tasks. It is more cost-effective than Pay-As-You-Go and offers discounts for longer durations.
        
    -   **Pay-As-You-Go**: You are charged on an hourly basis. This method is suitable for short-term needs. To save costs, you can release the task at any time.
        
    
    Cluster Type of DTS Instance
    
    Select **Public Cluster**.
    
    **Note**
    
    This option only applies when **Billing Method** is set to **Subscription**.
    
    Function
    
    Select **Change tracking**.
    
    Instance Type
    
    Select the type of the database to subscribe to.
    
    Source Region
    
    Select the region where the source database is located. The region cannot be changed after purchase.
    
    Resource Group
    
    Select the [resource group](/help/en/resource-management/product-overview/what-is-resource-management#section-pyt-r5j-jd4) for the change tracking task.
    
    Quantity
    
    Order Time
    
    Select the duration for the task. Monthly options: 1-9 months. Annual options: 1-3 years.
    
    **Note**
    
    -   This option only applies when **Billing Method** is set to **Subscription**.
        
    -   Enable **Auto-renewal** at expiration if needed.
        
    
    Quantity
    
    The number of change tracking tasks to purchase at once. The default is 1.
    
3.  Click **Buy Now** and follow the on-screen instructions to complete the payment.
    

Next step: [Configure a Subscription Task](/help/en/dts/getting-started/configure-a-change-tracking-task-using-the-new-dts-console).
