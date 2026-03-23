Serverless resource groups combine the capabilities of exclusive resource groups for scheduling, Data Integration, and DataService Studio. This guide explains how to create, configure, bind, monitor, and manage serverless resource groups.

**Important**

Ensure that you have read [Resource group management](/help/en/dataworks/user-guide/resource-group-management/) and understand the core concepts and benefits of serverless resource groups.

## Prerequisites

-   **Permissions**:
    
    -   **Purchase permissions**: Attach the `AliyunBSSOrderAccess` and `AliyunDataWorksFullAccess` policies to your account.
        
        > You also need the AliyunVPCReadOnlyAccess permission to read VPC information.
        
    -   **Management permissions**: Only a **Workspace Administrator** of the target DataWorks workspace can associate or modify resource groups.
        
        > If you are unsure how to grant permissions, see [View the permissions of a RAM user](/help/en/ram/user-guide/view-the-permissions-of-a-ram-user) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800). For information about permission control for other resource group operations, see [Custom policies used to manage permissions on the entities in the DataWorks console](/help/en/dataworks/user-guide/create-a-custom-policy#section-h9x-px0-lq2).
        
-   **Environment and network planning**:
    
    -   **Region consistency**: The resource group must be in the same region as your DataWorks workspace.
        
    -   **VPC planning**: Serverless resource groups rely on a VPC. Ensure you have a [VPC and vSwitch](/help/en/vpc/vpc-and-vswitch) ready.
        
        **Important**
        
        -   Avoid changing the bound VPC and vSwitch, as this may cause task failures.
            
        -   serverless resource groups do not support VPCs that use the 21 CIDR block. IP addresses in the range of `21.0.X.X` to `21.255.XXX.XXX` cannot be used.
            
        
    -   **Network connectivity**: Configure [network connectivity](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source) to allow the resource group to access data sources.
        
        **Important**
        
        By default, serverless resource groups do not have internet access. To access data sources over the internet, configure an [Internet NAT Gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and an EIP for the VPC bound to the serverless resource group.
        

## **Create a serverless resource group**

1.  Go to the Resource Groups page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, click **Resource Group** to go to the Resource Groups page.
    
2.  Click **Create Resource Group** and configure the following parameters:
    
    > If you are using an older version, these operations are performed on the **Exclusive Resource Groups** tab.
    
    **Parameter**
    
    **Description**
    
    **Region and Zone**
    
    Select the region where your DataWorks workspace resides.
    
    **Billing Mode**
    
    Available modes include prepaid Subscription and postpaid pay-as-you-go.
    
    -   Pay-as-you-go: Ideal for testing or fluctuating loads. No fees are incurred when idle. Supports [Convert pay-as-you-go to Subscription](#2fd884e816ywp).
        
        **Important**
        
        Pay-as-you-go Max CU: The total specification limit for a single pay-as-you-go resource group is 500 CUs.
        
    -   Subscription: Best for stable, long-term production workloads. Offers lower costs. Converting Subscription to pay-as-you-go is not supported.
        
    
    You can purchase multiple resource groups with different billing methods to meet your business needs.
    
    **Resource Group Specifications**
    
    For subscription billing, configure the resource group specifications. The minimum purchase is 2 CUs, with scaling increments of 1 CU.
    
    `1 CU = 1 CPU Core + 4 GiB Memory`. For specific purchase suggestions and minimum specification requirements for running various tasks, see [Performance metrics](/help/en/dataworks/new-resource-group-overview#4a1273623e2gr).
    
    **VPC**
    
    Select the VPC and vSwitch for the resource group connection. If no options are available in the drop-down list, go to the [VPC console](https://vpc.console.alibabacloud.com/vpc/) to create one.
    
    > For more information about VPCs, see [What is VPC?](/help/en/vpc/what-is-vpc).
    
    -   Data source and serverless resource group are in the same account and region: Configure the VPC and vSwitch where the data source resides.
        
    -   Data source is in another complex network environment: You need to connect the VPC bound to the serverless resource group with the VPC where the data source resides using [VPN Gateway](/help/en/vpn/product-overview/what-is-vpn-gateway#concept-r5s-gzv-wdb) or [Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/#concept-ipg-pry-xdb). For details, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source).
        
    
    **Important**
    
    -   You can bind multiple VPCs to a resource group. Additional VPCs can be added after purchase.
        
    -   If the resource group billing mode is **Subscription**, the VPC configured here is applied to DataService Studio, data calculation, and data integration. You cannot bind a new VPC or change the VPC for DataService Studio later. Please plan ahead.
        
    
    **vSwitch**
    
    **Billing Cycle**
    
    When the billing mode is **Subscription**, you need to set the billing cycle.
    
    **Important**
    
    We recommend selecting **Auto-renewal** to prevent service interruptions due to expiration. If selected, the Unified Auto Renewal Cycle is monthly, and fees are automatically deducted at the real-time price before the instance expires.
    
    **Service Linked Role**
    
    For the first purchase, create the service-linked role ([AliyunServiceRoleForDataWorks](/help/en/dataworks/user-guide/dataworks-service-linked-role-1)). Subsequent purchases automatically use this role.
    
    > This role is used to access VPCs, elastic network interfaces (ENIs), and security group resources. If you encounter the prompt `Please create AliyunServiceRoleForDataWorks`, provide [this authorization URL](https://dataworks.console.aliyun.com/slr?request=%5B%22AliyunServiceRoleForDataworksEngine%22%5D) to the primary account holder or a user with sufficient permissions to grant authorization, and then proceed.
    

## **Configure and use the resource group**

### **1\.** Associate **with workspace**

You must associate the resource group with a workspace before using it in tasks.

-   Associate a resource group when creating a workspace
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, click **Workspace** to go to the Workspaces page.
        
    2.  Click **Create Workspace**. On the **Create Workspace** page, set the **Default Resource Group of DataWorks Workspace** parameter in the advanced settings to your new resource group.
        
-   Associate a resource group with an existing workspace
    
    1.  Go to the Resource Groups page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, click **Resource Group** to go to the Resource Groups page.
        
    2.  Click **Associate Workspace** in the **Actions** column of the target resource group. Locate the desired workspace and click **Associate** in the **Actions** column.
        

### **2\. Configure network connectivity**

Configure network connectivity to enable data source access. By default, serverless resource groups do not have outbound internet access.

**Scenario 1: Access data sources in a VPC (e.g., RDS, self-managed database on ECS)**

Ensure the resource group and data source reside in the same VPC, or connect them via CEN or VPC peering.

**Scenario 2: Access public addresses**

To enable internet access, configure a NAT Gateway and EIP for the VPC bound to the resource group.

**Scenario 3: Access local IDC**

You need to connect your VPC and IDC network using [VPN Gateway](/help/en/vpn/product-overview/what-is-vpn-gateway#concept-r5s-gzv-wdb) or [Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/#concept-ipg-pry-xdb).

> For more complex network scenarios, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source).

### **3\. Use in tasks**

Assign the serverless resource group to your data integration, scheduling, and data service tasks.

-   **For Data Integration tasks**: In the **Resource Group** section of the synchronization task, select the serverless resource group you created.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1014208571/p1007028.png)
    
-   **For data development tasks (Shell, Python, etc.)**: In the node configuration tab on the right, navigate to **Scheduling** > **Scheduling Policies** > **Resource Group** and select your serverless resource group.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1014208571/p1007030.png)
    
-   **For DataService Studio APIs**: In the API configuration panel on the right, select your serverless resource group in the **Resource Group** field.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1014208571/p1007031.png)
    

> To view all involved resource groups, see [General reference: Change the resource groups used by tasks](/help/en/dataworks/user-guide/change-the-resource-group-used-by-nodes).

## **O&M and monitoring**

### **Assign CU quotas to tasks**

Set **Maximum CUs** or **Minimum CUs** limits for specific task types.

-   Configure **Maximum CUs** for pay-as-you-go resource groups to prevent excessive resource usage.
    
-   Configure **Minimum CUs** for subscription resource groups to set a minimum guaranteed quota.
    

**Operation**: On the resource group list page, find the target group, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6332958171/p761535.png) > **Manage Quota** in the **Actions** column, and adjust the **Maximum CUs** or **Minimum CUs** values for the specific usage type.

> Alternatively, click the **Resource Group Name** to enter the details page. Click **Quota Management** in the upper-right corner to modify these values.

**Important**

Single task CU suggestion: For [computational tasks](/help/en/dataworks/new-resource-group-overview#c854e795460nu) (e.g., Python, Notebook, PyODPS), we recommend allocating no more than 16 CUs per task (limit is 64 CUs) for optimal startup performance and stability. For synchronization tasks (excluding real-time synchronization), the maximum assignment is 16 CUs per task.

### **Adjust scheduling concurrency limits**

You can manually set a concurrency limit to control the maximum number of simultaneous tasks. This setting limits the number of running tasks but does not affect the internal execution logic of individual tasks. A single resource group can run up to **50** scheduling tasks simultaneously by default, adjustable to a maximum of **200**.

**Operation**: On the resource group list page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6332958171/p761535.png) > **Specify Threshold for Parallel Threads of Data Scheduling** in the **Actions** column of the target resource group. Then, modify the value.

> Alternatively, click the **Resource Group Name** to enter the details page. Click **Specify Threshold for Parallel Threads of Data Scheduling** in the upper-right corner to modify the value.

### View resource group utilization

If a Subscription resource group is under heavy load, new tasks may be queued due to insufficient CUs. You can monitor running tasks, current utilization, historical usage trends, and resource consumption per task.

**Operation**: On the resource group list page, check the **Used CUs** column for the target resource group.

> You can also click the **Resource Group Name** to enter the details page. Use the **Resource Usage** curve to review historical data and inspect details of running or queued tasks for each scenario.

### Scale resource groups

If utilization is consistently high, scale out the **Subscription** resource group to improve performance. Conversely, if usage is low, scale in to reduce costs.

1.  In the resource group list, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6332958171/p761535.png) > **Scale Out** or **Scale In** in the **Actions** column.
    
    **Important**
    
    Scaling in may cause performance degradation. Evaluate carefully before proceeding.
    
2.  On the scaling page, adjust the **Resource Group Specifications**, accept the **Terms of Service**, and click **Buy Now**.
    

## **Cost management**

### **Freeze and enable pay-as-you-go**

-   **Freeze pay-as-you-go serverless resource groups**: The system automatically freezes pay-as-you-go resource groups after 7 days of inactivity. You can view the status on the resource group list page. A resource group is considered inactive if:
    
    -   Scheduling tasks: No scheduling tasks are running.
        
    -   Data calculation tasks: No [computational tasks](/help/en/dataworks/new-resource-group-overview#c854e795460nu) are executing.
        
    -   Data Integration tasks: No data integration tasks are running.
        
    -   Data Analysis queries: No data analysis queries are executing.
        
    -   Connectivity tests: No connectivity tests are being performed.
        
    -   Metadata collection: No metadata collection tasks are running.
        
    -   Personal development environment: The resource group is not supporting a personal development environment.
        
    -   Data service: The resource group is not supporting data services.
        
    -   Large model service: The resource group is not supporting large model services.
        
-   **Enable frozen serverless resource groups**: To reactivate a frozen serverless resource group, locate it in the list and click **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4052958171/p746354.png)** > **Start** in the Actions column.
    

### **Convert pay-as-you-go to Subscription**

You can convert a pay-as-you-go serverless resource group to Subscription. Upon conversion, billing switches to the [Subscription rate](/help/en/dataworks/new-resource-group-overview#e0b70e04e3dj3).

1.  In the resource group list, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0106440571/p974247.png) button in the **Actions** column of the target resource group, and select **Billing Type Conversion**.
    
2.  In the dialog box, adjust the **Destination Instance Type** and **Duration** as needed.
    
3.  Click **OK** to proceed to the checkout page and **Subscribe**.
    

**Important**

Converting from pay-as-you-go to Subscription takes approximately 1 to 2 minutes. Running tasks are not affected.

### **Renew and unsubscribe**

If a resource group status is **Expired** in the list view, click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4052958171/p746354.png) > **Renew** in the **Actions** column.

To unsubscribe from a serverless resource group, click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4052958171/p746354.png) > **Unsubscribe** in the **Actions** column. For details, see [General reference: Stop using DataWorks](/help/en/dataworks/disable-auto-renewal-for-subscription-resources#9e098ff208mox).

## **FAQ**

**Q: Are there regional restrictions for purchasing?**

A: Yes, limits are as follows:

-   If using a serverless general-purpose resource group in a virtual operator environment, verify availability with your provider.
    
-   Purchasing is not supported in the Thailand (Bangkok) region.
    

**Q: How can a serverless resource group access a hostname?**

A: Serverless resource groups do not support direct hostname resolution (modifying /etc/hosts). You must use **Private DNS (PrivateZone)** for hostname resolution.

1.  [Activate Private DNS](/help/en/dns/pvtz-opening-service).
    
    **Note**
    
    If already activated, skip this step.
    
2.  [Add a Zone](/help/en/dns/pvtz-add-remove-built-in-authoritative-domain-names#3a43d2b05dy8u).
    
    For example, to resolve the hostname `header-1-cn-shanghai`, configure authoritative resolution for the domain `header-1-cn-shanghai`. Adjust this parameter based on your specific hostname.
    
3.  [Add a resolution record](/help/en/dns/pvtz-add-resolution-record).
    
    Set the **Record Value** to the `Private IP Address` of the host bound to the domain.
    
4.  [Configure the resolution scope](/help/en/dns/set-domain-name-effective-range).
    
    Select the VPC bound to your resource group as the scope.
    

## **References**

-   Use the smart monitoring feature in the Operation Center to track resource group utilization and pending instance counts. For details, see [Create custom rules](/help/en/dataworks/user-guide/create-a-custom-alert-rule#section-us8-vdg-t65).
    
-   If tasks require a specific environment (e.g., third-party dependencies), create a [custom image](/help/en/dataworks/user-guide/custom-image) containing the necessary packages. Assign this image as the runtime environment when configuring the task on the serverless resource group.
