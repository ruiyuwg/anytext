Create and manage resource groups with dedicated machines (subscription or pay-as-you-go) or virtual groups that unify multiple resource types.

## Dedicated resource groups

### Resource types

Dedicated resources support subscription-based and pay-as-you-go billing.

**Type**

**Billing method**

**Management**

**Supported resources**

Subscription resources

Subscription

Purchase machines, renew subscriptions, delete pay-as-you-go machines, and delete resource groups. For more information, see [Manage machines in dedicated resource groups](#section-h0v-ie8-7s6).

For supported resource types, see [EAS dedicated machine subscription](https://common-buy-intl.alibabacloud.com/?commodityCode=learn_EasDedicatedPrepay_public_intl&regionId=cn-shanghai).

Pay-as-you-go resources

Pay-as-you-go

For more information, see [EAS dedicated machine pay-as-you-go](https://common-buy-intl.alibabacloud.com/?commodityCode=learn_EasDedicatedPostpay_public_intl&regionId=cn-shanghai).

**Important**

Billing starts immediately after purchase, even if no services are deployed. Delete unused pay-as-you-go machines promptly to reduce costs.

### Create a dedicated resource group

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  On the **Elastic Algorithm Service (EAS)** page, click the **Resource Groups** tab. On the **Dedicated Resource Groups** tab, select **New Resource Group** > **New Subscription Resource Group** or **New Pay-as-you-go Resource Group**. Configure parameters.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    Select **Subscription** or **Pay-as-you-go**.
    
    **Region and Zone**
    
    Select the region and zone for the resource group.
    
    **Machine Specification**
    
    GPU and CPU specifications are supported. For the complete list, see [EAS dedicated machine subscription](https://common-buy-intl.alibabacloud.com/?commodityCode=learn_EasDedicatedPrepay_public_intl&regionId=cn-shanghai) or [EAS dedicated machine pay-as-you-go](https://common-buy-intl.alibabacloud.com/?commodityCode=learn_EasDedicatedPostpay_public_intl&regionId=cn-shanghai).
    
    **Note**
    
    Supported specifications vary by region.
    
    **System Disk**
    
    Each machine includes a free 200 GB system disk. Expand storage from 200 GB to 2,000 GB. For charges on extra capacity, see [EAS billing](/help/en/pai/billing-of-eas#concept-1822927).
    
    **Note**
    
    All service instances share system disk storage. If the system disk runs out of space, instances consuming large amounts of storage are evicted. For instances that read from or write to local disk during runtime, see [Mount storage](/help/en/pai/user-guide/mount-storage-to-services#section-6bq-97k-nu4).
    
    **Purchase Method**
    
    Select **New Resource Group** or **Existing Resource Group**.
    
    If selecting **Existing Resource Group**, configure **Resource Group ID**.
    
    **Resource Group ID**
    
    Select an existing resource group ID from the list.
    
    **Quantity**
    
    Specify the number of machines. Valid values: 1 to 9999.
    
    **Duration**
    
    Select subscription duration: 1 month, 2 months, 3 months, 6 months, or 1 year (subscription resources only).
    
    **Auto-renewal upon expiration**
    
    Automatically renew resources upon expiration (subscription resources only).
    

3.  Click **Buy Now**.
    
    After payment succeeds, the system allocates resources automatically. View created resource groups or modify names on the **Resource Groups** tab.
    
    **Note**
    
    (Subscription resources only) If resource group creation fails due to insufficient resources or other reasons, the system creates a refund order automatically. The payment is returned to your account.
    

### Manage machines in dedicated resource groups

Purchase machines

1.  On the **Resource Groups** tab, select the target resource group.
    
2.  Click **Purchase Machine**, then select and purchase a subscription or pay-as-you-go machine. For parameter descriptions, see [Create a dedicated resource group](#section-xnc-l8f-fux).
    

Renew instances

(subscription instances only)

Extend the usage duration of a machine. For example, renewing a machine for one month extends its usage period by one month.

1.  On the details page of the dedicated resource group, go to the **Machine List** tab. In the **Operations** column of the subscription machine, click ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5838171861/p601565.png) and select **Renew**.
    
2.  On the **Renewal** page, configure **Duration** and click **Buy Now**.
    

Delete machines from dedicated resource groups

Pay-as-you-go machines: On the dedicated resource group details page, click **Delete** in the **Operations** column for the target instance.

Subscription machines: For more information, see [EAS FAQ](/help/en/pai/faq-about-eas#cf23052256003).

View machine resource usage in resource groups

On the **Resource Groups** tab, click the target resource group name. On the **Machine List** tab, view CPU, GPU, and memory usage and total capacity.

Stop scheduling

When a machine instance is **Running**, click **Stop Scheduling** in the **Operations** column to prevent new workloads from being assigned to it. To resume scheduling, click **Restart Scheduling**.

**Note**

After you stop scheduling, services already running on the machine continue. If a service is restarted, it deploys on other available machines in the resource group.

Drain nodes

Click **Drain Node** to stop service instances on the machine. The instances are redeployed on other available machines in the resource group.

**Important**

Draining a node aborts tasks running on the machine. Use this operation with caution.

## Virtual resource groups

A virtual resource group combines different resource types, such as public resources, resource quotas, and EAS dedicated resources. This structure enables unified deployment and scheduling across multiple resource types.

### Create a virtual resource group

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  On the **Elastic Algorithm Service (EAS)** page, click the **Resource Groups** tab. On the **Virtual Resource Groups** tab, click **New Virtual Resource Group**. Select [Spot Instance](/help/en/pai/user-guide/work-with-the-public-resource-group#161cf7fb6c5ma) for the public resource group. Configure multiple resource types and set scheduling priorities (1 = lowest, 9 = highest).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287513471/p931248.png)
    

### Use a virtual resource group

When deploying a service, in the **Resource Deployment** section, set **Resource Type** to **EAS Resource Group**. From the **Resource Group** list, select **Virtual Resource Group**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0186104471/p931244.png)

## Reference

-   For model service deployment parameters, see [Custom deployment](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/#multiTask1281).
    
-   Configure VPC direct connections for services deployed in dedicated resource groups. See [Access public or private resources from EAS](/help/en/pai/user-guide/configure-network-connectivity).
    
-   Configure Simple Log Service for resource groups to collect EAS service logs in your own SLS Logstore. See [Configure Simple Log Service for a resource group](/help/en/pai/user-guide/configure-log-collection-for-a-resource-group).
    

## FAQ

1.  **Can I deploy multiple models in one resource group?**
    
    Yes. Deploy multiple model services in a single resource group if sufficient resources are available.
    
2.  **Can surplus EAS inference resources be used for DLC distributed training?**
    
    No. EAS dedicated resources can only deploy services and cannot be used in DLC.
