Deploy model services on elastic public resources with pay-as-you-go billing. Use [spot instances](/help/en/ecs/user-guide/what-is-a-spot-instance) to reduce costs and configure multiple instance types to prevent deployment failures when inventory is low.

## Billing

Public resources are billed on pay-as-you-go basis. For more information, see [Billing of Elastic Algorithm Service (EAS)](/help/en/pai/billing-of-eas#concept-1822927).

**Billing start**

-   When you deploy a model service on public resources using specific instance types, billing starts after the service is deployed and enters the **Running** state.
    
-   Platform for AI (PAI) provides a free 30 GiB system disk for each instance node in public resources. Expand the system disk on pay-as-you-go basis. Billing for the system disk starts immediately upon creation.
    

**Billing stop**

-   To stop a service and its billing, go to the **Elastic Algorithm Service (EAS)** tab on the **Inference Service** page. In the **Actions** column for the service, click **Stop**.
    

**Important**

-   Stop idle model services promptly to avoid unnecessary charges.
    
-   Ensure that a stopped service is no longer needed to prevent business disruptions.
    
-   When using public resources, if instance creation fails due to insufficient resources, the system automatically retries once resources become available. Stop or delete such services if they are no longer needed.
    
    To determine if a failure is caused by insufficient resources, click the service name to go to the service details page and check the instance status.
    
    ![EAS instance status](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8525498371/p912602.png)
    

## Delete a service

Delete a service when it is no longer needed to stop billing. Before deletion, ensure the service is not actively processing requests.

### Prerequisites

Before deleting a service, verify:

-   No active requests: Check the service monitoring to confirm zero active requests.
    
-   No dependencies: Verify no other services or applications are calling this service endpoint.
    
-   RAM permissions: Ensure your account has eas:DeleteService permission.
    

### Procedure

1.  Go to the **Elastic Algorithm Service (EAS)** tab.
    
2.  On the **Inference Service** page, locate the service.
    
3.  In the **Actions** column, click **Delete**.
    
4.  In the confirmation dialog, review the service name and click **Confirm**.
    
    The service is deleted within 30 seconds. Billing stops immediately.
    

**Important**

Deletion is permanent. Service data, logs, and configuration are not recoverable. Export logs before deletion if needed.

### Troubleshoot deletion failures

If deletion fails, check the following:

**Error**

**Cause**

**Solution**

Service has active requests

Service is processing requests or has pending tasks

Stop the service first. Wait 5 minutes for requests to complete, then delete

Service is referenced by other services

Other EAS services call this service endpoint

Remove dependencies first. Update calling services to remove references, then delete

Permission denied

Account lacks eas:DeleteService permission

Contact administrator to grant RAM policy with DeleteService permission

Instance stuck in deleting state

System is releasing resources. Instance may have failed to delete

Wait 5 minutes. If still stuck, submit a ticket with service ID and region

## Spot instances

Spot Instances allow you to deploy services in preemptible mode by setting a price ceiling, offering cost-effective compute resources.

-   **Benefits**
    
    -   **Cost savings**: Spot Instances offer low prices. Prices fluctuate in real-time based on supply and demand, typically offering significant discounts compared to standard pay-as-you-go instances on public resources.
        
    -   **Price tiers**: Spot Instances are available with or without a protection period. The price tiers, from lowest to highest, are: no protection period < one-hour protection period < standard instance.
        
-   **Acquisition conditions**
    
    -   A spot Instance is acquired when there is sufficient inventory and your bid price meets or exceeds the current market price.
        
-   **Release conditions**: Instance release is determined by the spot instance retention period setting.
    
    -   **One-hour protection period**: Guarantees one hour of uninterrupted usage. The instance will not be released during this period but may be automatically released after the protection period ends.
        
    -   **No protection period**: Continuous use is not guaranteed. The instance may be automatically released at any time due to changes in inventory or market price.
        
-   **Billing model**
    
    -   Spot Instances use a pay-as-you-go model, with charges calculated based on the real-time market price.
        

## Multiple instance types

If you specify only a single instance type when deploying a service, deployment can fail or be delayed due to insufficient inventory of that type. To address this, EAS supports selecting multiple instance types during deployment. The system iterates through the specified instance types in the configuration to launch resources, which significantly reduces the risk of deployment failure caused by a single type being out of stock.

-   **Instance usage order**
    
    When you create or update a service, specify multiple instance types, such as Spot Instances and standard instances. During deployment, the system attempts to use these instances in the order you configured them. If a Spot Instance bid fails or an instance type is out of stock, the system automatically proceeds to the next instance type in the configured list.
    
-   **Resource release and reallocation**
    
    If a configured spot Instance is released due to changes in inventory or market price, EAS automatically reallocates the highest-priority available resource based on your configuration to ensure service continuity.
    

## Expand system disk storage

PAI provides a free 30 GiB system disk for each instance node on public resources. If you need more capacity, additional capacity is billed based on usage. For more information about billing, see [Billing of Elastic Algorithm Service (EAS)](/help/en/pai/billing-of-eas).

**Important**

The maximum system disk size is 2000 GiB. Exceeding this limit will cause the model service deployment to fail.

## Procedure

### Configure in the console

The following steps use custom deployment as an example.

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
    -   **To create a new service**: On the **Inference Service** tab, click **Deploy Service**. Then, select **Custom Model Deployment** > **Custom Deployment**.
        
    -   **To update an existing service**: On the **Inference Service** tab, find the service and click **Update** in the **Actions** column.
        
2.  In the **Resource Information** section, set **Resource Type** to **Public Resource Group**. Click the resource specification field and select a desired specification from the list.
    
3.  (Optional) Enable spot bidding. Turn on the **Bidding** switch, set a bid price, and select a spot instance retention period.
    
    **Note**
    
    -   The **Bidding** switch is only available for resource specifications that support spot Instances.
        
    -   When using Spot Instances, we recommend configuring standard instance types to prevent deployment failures if your bid is unsuccessful.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4731943671/p930454.png)
    
4.  (Optional) Configure multiple instance types. Click **Add** to configure multiple instances.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4731943671/p930456.png)
    
5.  **Configure a system disk**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7070673671/p955076.png)
    

### Configure with EASCMD client

To deploy a model service using the EASCMD client, see [Deploy services using EASCMD](/help/en/doc-detail/465149.html#task-2268242).

If you are deploying with the EASCMD client for the first time, first configure the parameters in the console to generate the complete JSON configuration. You can then find it in the **Service Configuration** section.

Example JSON parameters for resource deployment:

```
{
    "metadata": {
        "name": "test",
        "instance": 1,
        "workspace_id": "your-workspace-id",
        "disk": "40Gi"
    },
    "cloud": {
        "computing": {
            "instances": [
                {
                    "type": "ecs.c8i.2xlarge",
                    "spot_price_limit": 1
                },
                {
                    "type": "ecs.c8i.xlarge"
                }
            ],
            "disable_spot_protection_period": true
        }
    },
    "containers": [
        {
            "image": "eas-registry-vpc.cn-hangzhou.cr.aliyuncs.com/pai-eas/python-inference:py39-ubuntu2004",
            "script": "python app.py",
            "port": 8000
        }
    ]
}
```

**Parameter**

**Description**

**metadata**

**instance**

Number of instances to start for the service. In the example JSON file, this is set to 1.

**disk**

System disk size. Public resource groups provide a free 30 GiB. If you need more capacity, you are charged based on actual usage. Maximum value is 2000 GiB.

**cloud**

**computing**

**instances**

Prioritized list of instance types for deployment. Multiple types can be configured. If a bid for an instance type fails or inventory is insufficient, the system sequentially tries the next instance type in the configuration.

-   **type**: Instance type.
    
-   **spot\_price\_limit** (Optional):
    
    -   When this parameter is configured, the corresponding instance type is a spot Instance, and the value is its maximum price limit in USD. This supports pay-as-you-go.
        
    -   When this parameter is not configured, the corresponding instance type is a standard pay-as-you-go instance.
        

**disable\_spot\_protection\_period**

Supported values:

-   **false** (Default): Provides a one-hour protection period after the spot Instance is successfully created. The instance will not be released during this period, even if the market price exceeds your bid.
    
-   **true**: Disables the protection period. A spot Instance without a protection period is priced lower than one with a protection period.
    

## FAQ

### What to do if public resources are out of stock

When you deploy popular models with a large number of parameters, public resources may have insufficient inventory. Consider the following solutions:

-   **Switch to another region**. Resource availability varies by region. Switch to a different region to find available public resources.
    
    **Important**
    
    Consider switching to the Ulanqab region to use Lingjun Spot Resources (no whitelist approval is required). These resources can be preempted, so be mindful of your bid price.
    
-   [Use a dedicated resource group](/help/en/pai/user-guide/work-with-dedicated-resource-groups). Some instance types are not available through public resources. Purchase dedicated resources for EAS by visiting [EAS Dedicated Machine Subscription](https://common-buy-intl.alibabacloud.com/?commodityCode=learn_EasDedicatedPrepay_public_intl&regionId=cn-shanghai).
    
    **Important**
    
    Billing for pay-as-you-go dedicated resources starts immediately after a successful purchase, regardless of whether they are used to deploy a service. Delete unused pay-as-you-go instances promptly to avoid unnecessary charges.
    

## References

-   Public resources do not guarantee resource availability. We recommend using dedicated resources to deploy services. For more information, see [Use EAS resource groups](/help/en/pai/user-guide/work-with-dedicated-resource-groups).
    
-   If you need to connect directly to your service through a VPC for high-speed access and low latency, or your EAS service needs to access other cloud products in the same VPC, see [Access the Internet or internal networks from EAS](/help/en/pai/user-guide/configure-network-connectivity#multiTask1215).
    
-   Configure a log service for public resources. Logs generated by EAS services deployed on public resources are stored in the log service, allowing you to monitor your EAS services in real time. For more information, see [Configure Simple Log Service for a resource group](/help/en/pai/user-guide/configure-log-collection-for-a-resource-group#task-2266539).
