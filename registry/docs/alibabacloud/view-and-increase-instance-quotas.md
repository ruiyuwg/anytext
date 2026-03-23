Quota Center lets you check your Elastic Compute Service (ECS) quota limits and usage, request quota increases, and set up quota alerts. Each quota defines the maximum number of a specific cloud resource or operation available in your Alibaba Cloud account. The system dynamically adjusts quotas based on your actual usage -- request an increase only when you anticipate a significant surge in demand.

## ECS quota types

ECS quotas fall into two categories: general quotas that limit resource counts, and API rate limits that control how frequently you can call OpenAPI operations.

### General quotas

General quotas limit the cloud resources in your account, such as the maximum number of security groups. Three subcategories apply to ECS:

**Quota subcategory**

**What it limits**

**Scope**

**Ecs Quotas by Instance Type**

Maximum number of vCPUs for an ECS instance type, cards for a GPU-accelerated instance, or vGPU-accelerated instances

Per account, per region, per billing method

**Elastic Compute Service**

Resources such as images and security groups

Per account, per region

**Elastic Block Storage** (EBS)

Different types of cloud disks

Per account, per region and zone

### API rate limits

API rate limits control the frequency of OpenAPI calls. For example, the `RunInstances` operation has a rate limit of `100/60(s)`.

**Quota subcategory**

**API version**

**What it covers**

**Increase requests**

**Elastic Compute Service**

`2014-05-26`

Operations related to images, security groups, and block storage

Not supported

**Elastic Block Storage**

`2021-07-30`

Advanced block storage features

Supported

**Important**

ECS API rate limits (API version `2014-05-26`) cannot be increased. EBS API rate limits (API version `2021-07-30`) can be increased.

## View and increase general quotas

The steps for viewing and requesting a quota increase are the same for all three general quota subcategories. The only differences are the console entry point and the available filters.

### Step 1: Open the quota page

Open the Quota Center page for the quota subcategory you want to manage:

**Quota subcategory**

**Console link**

Ecs Quotas by Instance Type

[General Quotas of Ecs Quotas by Instance Type](https://quotas.console.alibabacloud.com/products/ecs-spec/quotas?regionId=cn-hangzhou)

Elastic Compute Service

[General Quotas of Elastic Compute Service](https://quotas.console.alibabacloud.com/products/ecs/quotas?regionId=cn-hangzhou)

Elastic Block Storage

[General Quotas of Elastic Block Storage](https://quotas.console.alibabacloud.com/products/disk/quotas?regionId=cn-hangzhou)

### Step 2: Select the region

Select the region you want to view. For EBS quotas, also select a zone.

### Step 3: Find the quota

How you locate a specific quota depends on the subcategory:

-   **Ecs Quotas by Instance Type**: Filter by the instance type you want to view. For the mapping between quota items and instance types, see [vCPU quota items](/help/en/ecs/user-guide/limitations#d16e67421a0bs) and [GPU and vGPU quota items](/help/en/ecs/user-guide/limitations#185f6a34770xv).
    
-   **Elastic Compute Service** and **Elastic Block Storage**: Search by **quota ID**, name, or description.
    

### Step 4: View quota usage

In the quota list, the **Total Quotas** column shows the upper limit and the **In Use** column shows current usage.

### Step 5: Request a quota increase

1.  In the **Actions** column, click **Apply**.
    
    **Important**
    
    If **Unadjustable** is displayed in the **Actions** column, the quota cannot be increased.
    
2.  In the dialog box, set **Applied Quotas** and **Reason**. Keep the default value for **Notify Result**.
    
    **Note**
    
    -   Specify a reasonable quota value and provide a detailed reason to improve approval chances.
        
    
3.  Click **OK**.
    
4.  In the left-side navigation pane, click **Application Records** to view the approval status. A status of **Approved** indicates a successful increase. You also receive the result by SMS and email.
    

## View and increase API rate limits

### View ECS API rate limits

ECS API rate limits apply to API version `2014-05-26` for operations related to images, security groups, and block storage. These rate limits are view-only and cannot be increased.

1.  Go to the [API Rate Limits of Elastic Compute Service](https://quotas.console.alibabacloud.com/flow-control-products/ecs/quotas) page.
    
2.  Select the region you want to view.
    
3.  In the quota list, find a quota item by its **API Name**. The **Total Quotas** column shows the upper rate limit for the corresponding API operation.
    

### View or increase EBS API rate limits

EBS API rate limits apply to API version `2021-07-30` for advanced block storage features.

1.  Go to the [API Rate Limits of Elastic Block Storage](https://quotas.console.alibabacloud.com/flow-control-products/disk/quotas) page.
    
2.  Select the region you want to view.
    
3.  In the quota list, find a quota item by its **API Name**. The **Total Quotas** column shows the upper rate limit.
    
4.  To request a rate limit increase:
    
    1.  In the **Actions** column, click **Apply**.
        
        **Important**
        
        If **Unadjustable** is displayed in the **Actions** column, the rate limit cannot be increased.
        
    2.  In the dialog box, set **Applied Quotas** and **Reason**. Keep the default value for **Notify Result**.
        
        **Note**
        
        -   Specify a reasonable quota value and provide a detailed reason to improve approval chances.
            
        
    3.  Click **OK**.
        
    4.  In the left-side navigation pane, click **Application Records** to view the approval status. A status of **Approved** indicates a successful increase. You also receive the result by SMS and email.
        

## References

-   [DescribeAccountAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeaccountattributes): Query resource creation quotas in a region, including security groups, Elastic Network Interfaces (ENIs), vCPUs for pay-as-you-go and spot instances, pay-as-you-go cloud disk capacity, dedicated hosts, network types, and real-name verification status.
    
-   [Quota alerts](/help/en/quota-center/user-guide/quota-alerts/): Create an alert for a quota item to receive a notification when usage reaches a preset threshold. This lets you request a quota increase before hitting the limit.
    
-   [Query applications and view application details](/help/en/quota-center/user-guide/query-applications-and-view-application-details): Track the approval status of quota increase requests.
    
-   [Quota Center documentation](/help/en/quota-center/product-overview/what-is-quota-center): Learn about additional quota management operations.
