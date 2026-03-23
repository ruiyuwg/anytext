Some Express Connect partners have already connected their networks to Alibaba Cloud access points. If you choose one of these Express Connect partners, you only need to connect your data center to the partner's access point, and then request them to create a hosted connection for you.

## Prerequisites

-   One of the following preparations is completed by the Express Connect partner:
    
    -   For a new hosted connection, the Express Connect partner has [created a shared port](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-we6-ay8-jok) for you.
        
    -   For an existing hosted connection, the Express Connect partner has [added a shared port](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-bq7-o08-qxq) for you.
        
-   You have [enabled billing for outbound data transfer](/help/en/express-connect/product-overview/outbound-data-transfer-fees).
    
-   You have read and understood the [billing rules](/help/en/express-connect/product-overview/billing-overview/#section-s76-2bc-qtx) of hosted connections.
    

## Procedure

**Scenario**

**Procedure**

Create a shared port to establish a new hosted connection

1.  The Express Connect partner [creates a shared port](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-we6-ay8-jok).
    
2.  The tenant [accepts the shared port](#section-whf-01n-2vk).
    
    -   If the tenant is specified as the payer, the tenant must pay the resource usage fee when accepting the shared port.
        
    -   When the partner pays the port resource usage fee, the tenant only needs to accept the shared port.
        
3.  The tenant [creates a VBR](#section-ixv-si7-3af).
    

Add a shared port to an existing hosted connection

1.  The Express Connect partner [adds a shared port](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-bq7-o08-qxq).
    
2.  The tenant [accepts the shared port](#section-whf-01n-2vk).
    
    -   If the tenant is specified as the payer, the tenant must pay the resource usage fee when accepting the shared port.
        
    -   If the Express Connect partner is specified as the payer, the tenant does not need to pay the resource usage fee.
        
3.  The Express Connect partner [confirms the shared port](/help/en/express-connect/user-guide/manage-connections-for-tenants#step-nst-g72-j2c).
    
    After the Express Connect partner confirms the shared port, the VBR that the Express Connect partner created for the tenant is automatically associated with the shared port. In this case, the tenant does not need to create a VBR.
    

## Step 1: Accept a shared port

After the Express Connect partner creates a shared port for a new hosted connection or adds a shared port for your existing hosted connection, you must accept the shared port in the Express Connect console and pay the resource usage fee.

**Note**

If the payment is already completed by the Express Connect partner, you only need to accept the shared port.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region of the hosted connection.
    
3.  On the **Physical Connection** page, find the ID of the hosted connection that you want to manage and click **Accept and Pay** in the **Actions** column.
    
    ![接收共享端口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0188114361/p335807.png)
    
4.  In the **Accept** dialog box, click **OK**.
    
5.  In the panel that appears, confirm the information such as the region and specification of the shared port, click **Buy Now**, and then complete the payment.
    
    After the payment is completed, the **Status** of the hosted connection changes to **Active**, and the **Construction Process** changes to **Complete**.
    
    **Note**
    
    After the tenant accepts the shared port that is added to the existing hosted connection of the tenant, the Express Connect partner must confirm the shared port. Then, the VBR is associated with the newly added shared port. The configuration of the VBR is not changed and your service is not interrupted in this process.
    

## Step 2: Create a VBR

After you accept the shared port, you must create a VBR for the shared port. The VBR is used to exchange data between the virtual private cloud (VPC) and your data center. You can create only one VBR for each shared port.

**Important**

If you already have a VBR, after you complete [Step 1: Accept a shared port](#section-whf-01n-2vk), your existing VBR is automatically associated with the shared port. In this case, you do not need to create a VBR.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Physical Connection** page, click the ID of the hosted connection that you want to manage.
    
4.  On the **VBR** tab, click **Create VBR**.
    
5.  In the **Create VBR** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Account**
    
    By default, **Current Account** is selected. If you use the default setting, the VBR that you create belongs to the account with which you log on to the console.
    
    **Name**
    
    Enter a name for the VBR.
    
    **Physical Connection Information**
    
    Select **Shared Physical Connection**, and select the ID of the shared port. Make sure that the construction of the shared port is completed and the shared port is in the normal state.
    
    **VLAN ID**
    
    By default, the VLAN ID specified by the Express Connect partner is displayed. You cannot change the VLAN ID.
    
    **Alibaba Cloud Side IPv4 Address**
    
    Specify an IPv4 address for the VBR to route network traffic from the VPC to the data center.
    
    **Client-side IPv4 Interconnect IP**
    
    Specify an IPv4 address for the gateway device in the data center to route network traffic from the data center to the VPC.
    
    **IPv4 Subnet Mask**
    
    Enter the subnet mask of the IPv4 addresses that you specified for the Alibaba Cloud gateway and the data center gateway. You can enter a long subnet mask because only two IP addresses are required.
    
    **Note**
    
    After you create the VBR, you can set the bandwidth of the VBR, modify the configurations of the VBR, or delete the VBR. For more information, see [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#task-2037143).
    

## **What to do next**

### **Delete a VBR**

For more information, see [Delete a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#section-9z0-ubw-s5h).

### Stop instance access

You can disable a shared port as needed. Before you disable a shared port, make sure that the VBR associated with the shared port is deleted.

**Important**

-   A stopped instance is not released. You can contact a partner to recover the instance to normal status as needed.
    
-   A disabled shared port is still billed. For more information, see [Resource usage fees](/help/en/express-connect/product-overview/resource-usage-fee). If you no longer need to use a shared port, you can [unsubscribe](/help/en/express-connect/product-overview/refund-rules) from the shared port and release it.
    

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  On the Physical Connection page, find the shared port and choose **![2024-06-25_13-43-02.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3274807271/p839501.png)** > **Terminate** in the Actions column.
    
4.  In the message that appears, click **OK**.
    

### **Delete a shared port**

Before you can delete a shared port, make sure that the VBR associated with the shared port is deleted.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region of the shared port.
    
3.  On the Physical Connection page, find the shared port and click **Delete** in the **Actions** column.
    
    -   If the port has expired, click **OK** in the **Confirm Deletion** dialog box.
        
    -   If the port is still billed, click **OK** in the **Confirm Deletion** dialog box. You will be redirected to the refund page. For more information, see [Unsubscription and refund policies](/help/en/express-connect/product-overview/refund-rules).
        

## References

-   [CreatePhysicalConnectionOccupancyOrder](/help/en/express-connect/api-vpc-2016-04-28-createphysicalconnectionoccupancyorder-efficiency-channels): creates an order for resource usage.
    
-   [ConfirmPhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-confirmphysicalconnection-efficiency-channels): confirms an Express Connect circuit. If this operation succeeds, the status of the Express Connect circuit changes to **Confirmed**.
    
-   [CreateVirtualBorderRouter](/help/en/express-connect/api-vpc-2016-04-28-createvirtualborderrouter-efficiency-channels): creates a VBR.
