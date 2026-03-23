After obtaining the required permissions, you can create hosted connections to provide access services for tenants. You can associate one Virtual Border Router (VBR) with each hosted connection.

## Partner requirements

Before you help tenants connect to Alibaba Cloud through pre-established Express Connect circuits, you must meet the following requirements:

-   Establish redundant connections to different Alibaba Cloud access points by using at least two carrier-compliant Express Connect circuits for each access point. You must also have the required permissions for Alibaba Cloud network products. To apply for partner permissions, contact your account manager.
    
-   Comply with the [network limitations](/help/en/express-connect/product-overview/limits#section-hya-hth-38s) when you connect to Alibaba Cloud.
    
-   Use switches that support bandwidth management and traffic monitoring to connect to tenants. Enable the traffic monitoring feature on the switches to monitor traffic between you and your tenants. The monitoring data must include the transmission rate in bps, the packet forwarding rate in pps, and the byte count for both normal and dropped packets.
    
-   Configure bandwidth QoS limits and Address Resolution Protocol (ARP) packet rate limits on the access devices closest to your tenants. A typical rate limit for ARP packets is 1 pps per user.
    
-   If your network limits the rate of Internet Control Message Protocol (ICMP) packets, ensure that the limit is greater than 500 ICMP ECHO REQUEST packets per second.
    
-   Plan tenant bandwidth carefully. Ensure that the total bandwidth of all hosted connections does not exceed the bandwidth of the parent Express Connect circuit.
    
-   Pre-plan VLAN IDs for your tenants. Ensure that each VLAN ID is unique for all hosted connections on the same Express Connect circuit.
    
-   For tenants that require high availability, provision their hosted connections redundantly across different Express Connect circuits.
    

## Prerequisites

-   You have requested and received permissions to create hosted connections in the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/expressconnect/quotasoducts). For more information, see [Apply for permissions to create hosted connections](#section-afl-p66-xrp).
    
-   Your Express Connect circuit has been installed and a physical connection port has been created. For more information, see [Apply for an Express Connect circuit (Classic Mode)](/help/en/express-connect/user-guide/classic-mode#task-2367309).
    
-   Obtain the Alibaba Cloud account ID of the new tenant before you create a hosted connection for them.
    
-   Before you convert a connection for an existing tenant:
    
    -   Inform the tenant in advance about the service upgrade and ensure they have enabled billing for outbound data transfer.
        
    -   Ensure that the tenant's VBR instance supports bandwidth configuration.
        
    -   By default, the tenant's account is billed. To use your currently logged-in account for payment, contact your account manager to request this permission.
        

## Apply for hosted connection permissions

**Important**

Only the five compliant carriers—China Mobile, China Unicom, China Telecom, CITIC Telecom, and China Broadcasting Network—are eligible to apply for permissions to create hosted connections.

1.  Log on to the [Quota Center](https://quotas.console.alibabacloud.com/products) console.
    
2.  In the left-side navigation pane, choose **Products** > **Privileges**.
    
3.  On the **Products with Privileges** page, find the **Networking** section and click **Express Connect**.
    
4.  On the **Privileges** page, find the quota for hosted connections (Quota name: **Shared port below 1G can be purchased**, Quota ID: **ec/can\_buy\_1G\_vpconn**), and then click **Apply** in the **Actions** column.
    
5.  In the **Apply for Privileges** dialog box, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Quota ID**
    
    The system automatically displays the quota ID.
    
    **Description**
    
    The system automatically displays the description of the quota ID.
    
    **Quota Value**
    
    Select the value for the quota application.
    
    -   **Valid**
        
    -   **Invalid**
        
    
    In this example, **Valid** is selected.
    
    **Time**
    
    Set the start time and end time for the quota.
    
    **Note**
    
    -   This parameter is required only when you set **Quota Value** to **Valid**.
        
    -   The application is valid for one day, and the start time is the application date.
        
    
    **Reason**
    
    Enter a reason for the application. The following example shows a valid reason:
    
    XX Partner Customer: YYYY (Customer Name + Alibaba Cloud primary account ID), requires an XX Mbit/s connection to Alibaba Cloud. Application to add hosted connection purchase permissions to the allowlist.
    
    **Notify Result**
    
    Specify whether to receive a notification about the result.
    
    -   **Yes**
        
    -   **No**
        
    

## Creating a hosted connection for a new tenant

When a new tenant connects to Alibaba Cloud through your Express Connect circuit for the first time, you must create a hosted connection for them based on their requirements.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region.
    
3.  You can open the **Create Shared Port** panel in either of the following ways:
    
    -   On the **Physical Connection** page, find the target Express Connect circuit instance and click **Create Shared Port** in the **Actions** column.
        
    -   On the **Physical Connection** page, click the ID of the target Express Connect circuit instance. On the **Shared Physical Connection** tab, click **Create Shared Port**.
        
4.  In the **Create Shared Port** panel, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Account ID**
    
    Enter the tenant's Alibaba Cloud account ID.
    
    By default, **Pay by Other Account** is selected, which means the tenant is billed for the hosted connection resource occupancy fee.
    
    **VLAN ID**
    
    Specify a **VLAN ID** for the VBR instance to isolate resources. The **VLAN ID** ranges from 0 to 2999.
    
    -   If you set the **VLAN ID** to 0, the VBR uses a Layer 3 router interface instead of a VLAN interface. In this mode, each Express Connect circuit corresponds to one VBR.
        
    -   If you set the **VLAN ID** to a value from 1 to 2999, the VBR uses a Layer 3 subinterface based on the VLAN. In this mode, each VLAN ID corresponds to one VBR, allowing a single Express Connect circuit to connect to VPCs under different accounts. VBRs in different VLANs are isolated at Layer 2 and cannot communicate with each other.
        
    
    **Note**
    
    After the tenant accepts the hosted connection, they cannot change the VLAN ID when creating the VBR instance.
    
    **Shared Physical Connection Bandwidth Limit**
    
    Select a bandwidth specification based on the tenant's requirements.
    
    **Resource Group**
    
    Select a resource group for the instance.
    
    You can click **Manage Resource Group** to go to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) to create or modify a resource group. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Tags**
    
    Select an existing tag or enter a new tag key and value to classify and manage the hosted connection instance.
    
    **Note**
    
    You can add tags to a hosted connection only when the tenant is not the payer.
    
    After the hosted connection is created, its **Status** is displayed as **Pending for Acceptance** on the **Shared Physical Connection** tab.
    
5.  In the confirmation dialog box, click **OK**.
    
6.  Notify the tenant to accept the hosted connection and complete the payment. For more information, see [Tenant operation guide](/help/en/express-connect/user-guide/operation-guide-for-tenants#concept-2066804).
    

## Convert a connection for an existing tenant

You can use the connection conversion feature to migrate a tenant from a shared VBR instance to a dedicated hosted connection. This process does not affect the tenant's services. After the conversion, a new hosted connection instance is created under the tenant's account. After the tenant accepts the hosted connection and you confirm the conversion, the tenant's VBR instance is automatically associated with the new hosted connection.

After the conversion, you are no longer charged for the VBR instance. If you have prepaid for the VBR instance, you can request a refund. For more information, see [Alibaba Cloud Product Unsubscription Rules](/help/en/user-center/rules-for-canceling-the-subscription-of-an-alibaba-cloud-service).

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region.
    
3.  On the **Physical Connection** page, click the ID of the target Express Connect circuit instance.
    
4.  On the **VBR** tab, find the tenant's VBR instance.
    
5.  If a bandwidth value is not set for the tenant's VBR instance, you must set one first. In the **Actions** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0368114361/p336367.png)** > **Bandwidth Settings**. In the **Bandwidth Settings** panel, set the **Bandwidth Cap** and click **OK**.
    
    **Note**
    
    You cannot set the **Bandwidth Cap** for the VBR instance to **Speed Unlimited**.
    
6.  On the **VBR** tab, find the VBR instance, and in the **Actions** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0368114361/p336367.png)** > **Transform to Shared Port**. In the dialog box that appears, click **OK**.
    
    By default, **Pay by Other Account** is selected, which means the tenant is billed for resource usage fees.
    
7.  Notify the tenant to accept the hosted connection and complete the payment. For more information, see [Tenant operation guide](/help/en/express-connect/user-guide/operation-guide-for-tenants#concept-2066804).
    
8.  On the **VBR** tab, find the tenant's VBR instance, and in the column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0368114361/p336367.png)** > **Confirm**. In the dialog box that appears, click **OK**.
    

## Modify the VLAN ID

VBR instances use VLAN IDs for resource isolation. You can modify the VLAN ID based on your network plan, but you must ensure that each VLAN ID is unique for all hosted connections on the same Express Connect circuit.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region.
    
3.  On the **Physical Connection** page, click the ID of the target Express Connect circuit instance.
    
4.  On the **Shared Physical Connection** tab, find the target hosted connection instance, and click **Edit** in the **Actions** column.
    
5.  In the **Modify Shared Port** dialog box, change the **VLAN ID** and click **OK**.
    

## **More operations**

When you are the payer for the hosted connection, you can perform the following operations on the hosted connection and its associated VBR instance.

### **Disable a connection**

You can disable a hosted connection and its associated VBR instance to make them unavailable. The disabled instances are not released and can be re-enabled later.

**Important**

Disabled instances continue to incur charges. For billing details, see [Port resource usage fees](/help/en/express-connect/product-overview/resource-usage-fee) and [Renewal management](/help/en/express-connect/product-overview/manage-renewal#t2057942.html). If you no longer need the instances, you can unsubscribe from them to release the resources. For more information, see [Unsubscription rules](/help/en/express-connect/product-overview/refund-rules).

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region.
    
3.  You can disable a hosted connection and its associated VBR instance.
    
    -   Disable a VBR instance
        
        1.  On the **Physical Connection** page, click the target Express Connect circuit instance ID.
            
        2.  On the **VBR** tab, find the tenant's VBR instance and click **Disable** in the **Actions** column.
            
        3.  In the **Terminating the VBR** dialog box, click **OK**.
            
    -   Disable a hosted connection instance
        
        1.  On the **Physical Connection** page, click the target Express Connect circuit instance ID.
            
        2.  On the **Shared Physical Connection** tab, find the target hosted connection instance and click **Disable** in the **Actions** column.
            
        3.  In the **Terminate Physical Connection** dialog box, click **OK**.
            
    
    After a connection is disabled, the instance status changes to **Disabled**. You can click **Recover** in the **Actions** column to restore the instance to normal operation.
    

### **Delete a VBR instance**

You can delete a VBR instance that belongs to a tenant (another account). Before you delete the VBR instance, you must first disable it. For more information, see [Disable a connection](#section-s81-9dc-3cl).

**Note**

This section describes how to delete a VBR instance that belongs to a tenant. To delete a VBR instance under your own account, see [Delete a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#section-9z0-ubw-s5h).

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region.
    
3.  On the **Physical Connection** page, click the ID of the target Express Connect circuit instance.
    
4.  On the **VBR** tab, find the tenant's VBR instance, and in the **Actions** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0368114361/p336367.png)** > **Delete**.
    
5.  In the **Delete VBR** dialog box, click **OK**.
    

### **Delete a hosted connection**

Before you delete a hosted connection, you must delete its associated VBR instance. For more information, see [Delete a VBR instance](#section-oii-mlh-hwo).

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the target region.
    
3.  On the **Physical Connection** page, click the ID of the target Express Connect circuit instance.
    
4.  On the **Shared Physical Connection** tab, find the target hosted connection instance, and in the **Actions** column, choose **![2024-06-25_13-43-02.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6625807271/p839262.png)** > **Delete**.
    
    -   If the instance has expired, click **OK** in the **Confirm Deletion** dialog box.
        
    -   If the instance is still within its billing cycle, click **OK** in the **Confirm Deletion** dialog box. The system initiates a refund and redirects you to the unsubscription center. For more information, see [Unsubscription rules](/help/en/express-connect/product-overview/refund-rules).
        

## Related documents

-   Operations
    
    You can view the real-time connection status of your physical connection interface to identify exceptions. For more information, see [Monitor and create alerts for a physical connection interface](/help/en/express-connect/user-guide/monitoring-and-alerting-for-connections-over-express-connect-circuits#t2100151.html).
    
-   API references
    
    -   [CreateVirtualPhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-createvirtualphysicalconnection-efficiency-channels): Creates a hosted connection.
        
    -   [CreateVpconnFromVbr](/help/en/express-connect/api-vpc-2016-04-28-createvpconnfromvbr-efficiency-channels): Converts a connection from a shared VBR model to a shared port model.
        
    -   [UpdateVirtualPhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-updatevirtualphysicalconnection-efficiency-channels): Modifies the VLAN ID of a hosted connection.
        
    -   [TerminatePhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-terminatephysicalconnection-efficiency-channels): Disables an Express Connect circuit.
        
    -   [TerminateVirtualBorderRouter](/help/en/express-connect/api-vpc-2016-04-28-terminatevirtualborderrouter-efficiency-channels): Disables a Virtual Border Router (VBR).
        
    -   [DeleteVirtualBorderRouter](/help/en/express-connect/api-vpc-2016-04-28-deletevirtualborderrouter-efficiency-channels): Deletes a Virtual Border Router (VBR).
        
    -   [DeletePhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-deletephysicalconnection-efficiency-channels): Deletes an Express Connect circuit.
        
    -   [CreatePhysicalConnectionOccupancyOrder](/help/en/express-connect/api-vpc-2016-04-28-createphysicalconnectionoccupancyorder-efficiency-channels): Creates a resource usage order for a hosted connection when the partner is the payer.
        

## **FAQ**

### **Error: Cross-site hosted connection is not allowed**

This error occurs when the partner's account and the tenant's account are registered with different regions or sites. Alibaba Cloud Express Connect does not support creating hosted connections across sites. For example:

-   The partner has an international account and the tenant has a China site account.
    
-   The partner has a Unicom Wocloud virtual provider account and the tenant has a China site account.
    

### Error: Insufficient bandwidth resources

This error occurs because the total bandwidth of all hosted connections provisioned on the Express Connect circuit exceeds the circuit's bandwidth. You must release unused hosted connections to proceed.

### Error: Invalid Bandwidth parameter

Your permissions to manage hosted connections have expired. You must re-apply for the permissions. For more information, see [Apply for permissions to create hosted connections](/help/en/express-connect/user-guide/manage-connections-for-tenants#title-jds-tva-ibq).

### Error: The specified bandwidth is invalid

Your permissions to manage hosted connections have expired. You must re-apply for the permissions. For more information, see [Apply for permissions to create hosted connections](/help/en/express-connect/user-guide/manage-connections-for-tenants#title-jds-tva-ibq).
