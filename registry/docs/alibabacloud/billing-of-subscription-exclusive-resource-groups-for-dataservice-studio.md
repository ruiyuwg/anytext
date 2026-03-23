When external applications call APIs that you create in DataService Studio, you must use exclusive resource groups for DataService Studio to ensure high queries per second (QPS) and availability. Exclusive resource groups for DataService Studio provide dedicated computing resources and isolated environments. This improves the processing efficiency of high-concurrency API calls, helps you achieve efficient data returns, and enables secure data sharing. This topic describes the performance metrics, billing, and usage of exclusive resource groups for DataService Studio.

## Exclusive resource groups for DataService Studio are not recommended

**DataWorks no longer recommends using exclusive resource groups for DataService Studio.** [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) **instead.** Serverless resource groups include the core features of earlier versions of resource groups, such as exclusive resource groups for scheduling, exclusive resource groups for Data Integration, exclusive resource groups for DataService Studio, and public resource groups. You can use a single serverless resource group to perform operations such as data synchronization, task scheduling and execution, and API service calls and management.

## Use cases

-   Handling high-frequency, high-concurrency calls to DataService Studio APIs that require timely data returns.
    
-   Flexibly adjusting the size of resource groups.
    
-   Accessing data sources over the Internet, in Alibaba Cloud Virtual Private Clouds (VPCs), or in on-premises data centers (IDCs).
    

## Limitations

-   Exclusive resource groups for DataService Studio use the **subscription** billing method. You cannot delete or release a resource group before it expires. After a resource group expires, its service is stopped, and the resource is released at a scheduled time.
    
-   Exclusive resource groups for DataService Studio are available only in the China (Shanghai) and China (Hong Kong) regions.
    

## Performance metrics

**Resource group specifications**

**Maximum QPS****1**

**SLA**

**Supported regions**

api.s1.small

500

99.95%

-   China (Shanghai)
    
-   China (Hong Kong)
    

api.s1.medium

1000

99.95%

api.s1.large

2000

99.95%

The **maximum queries per second (QPS)** of an exclusive resource group is calculated based on actual business scenarios. Refer to the following information to estimate the QPS threshold.

-   Whether the API is generated in the code editor.
    
-   Whether the paging feature is enabled for API response results.
    
-   The average execution time of the SQL statement configured for the API on the data source is 100 ms.
    
-   The average size of data returned by a single API call is 3,000 bytes.
    

If your business scenario differs significantly from the preceding assumptions, join the [DataWorks DingTalk group](https://wx.dingtalk.com/invite-page/weixin.html?spm=a2c4g.11186623.2.13.6fdf2cde85Daz9&bizSource=____source____&corpId=dingd0cf799086f27cb135c2f4657eb6378f&inviterUid=A26F27643C000F2D94460A2FDF52346D&encodeDeptId=6B32040BBEAFAF1DE93FD50C752B256A) for technical support. We will recommend suitable resource group specifications based on your business scenario.

## Billing standards

**Region**

**Specifications**

**Price (USD/month)**

China (Shanghai)

api.s1.small

325.3

api.s1.medium

650.6

api.s1.large

1301.2

China (Hong Kong)

api.s1.small

953.00

api.s1.medium

1906.00

api.s1.large

3813.00

## Billing details

### Change specifications (upgrade)

You can upgrade the resource configuration of an exclusive resource group for DataService Studio in the DataWorks console at any time. You only need to pay the price difference for the upgraded resources for the remaining subscription period. For more information, see [Change specifications](/help/en/dataworks/user-guide/change-the-specifications-of-a-resource-group#task-2207323).

**Note**

-   An upgrade changes only the resource specifications of an existing order. It does not increase the number of resource groups.
    
-   After you upgrade the specifications, the new configuration takes effect within 10 minutes of payment.
    

### Renewal, service suspension, and release

You can renew an exclusive resource group before it expires, or wait for the service to be suspended and the resource group to be automatically released after it expires. For more information, see [Expiration and renewal](/help/en/dataworks/expiration-and-renewal#task-2209905).

**Important**

After a resource group is released, all tasks that rely on it can no longer run.
