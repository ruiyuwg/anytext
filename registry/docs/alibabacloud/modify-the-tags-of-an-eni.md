You can use elastic network interfaces (ENIs) to deploy high-availability clusters and perform cost-effective failover and fine-grained network management. You can modify ENI attributes, unbind ENIs from Elastic Compute Service (ECS) instances, or delete ENIs in the ECS console or by calling API operations.

## **Modify ENI attributes**

You can modify the attributes of an elastic network interface (ENI) based on your business requirements. For a secondary ENI, you can change the name, description, and associated security groups. For the primary ENI, you can change only the name and description. To change the security groups associated with the primary ENI, you must change the security groups associated with the Elastic Compute Service (ECS) instance to which the ENI is bound.

### **Considerations**

When you replace the security groups associated with an ENI, take note of the following items:

-   Security group rules in the security groups associated with an ECS instance apply to the primary ENI bound to the instance. If you want to replace the security groups associated with the primary ENI, you can replace the security groups associated with the ECS instance to which the primary ENI is bound. For more information, see the [Add an ECS instance to or remove an ECS instance from security groups or replace the security groups of an ECS instance](/help/en/ecs/user-guide/manage-ecs-instances-in-security-groups#9e4c2420d12fl) section of the "Associate security groups with an instance (primary ENI)" topic.
    
-   A secondary ENI must be associated with at least one security group. Each secondary ENI of an ECS instance can be associated with a limited number of security groups. For more information, see the [Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota) section of the "Limits" topic.
    
-   The secondary ENIs of an ECS instance and the security groups to which you want to add the secondary ENIs must use the same network type. If the secondary ENIs of the ECS instance and the security groups use the VPC network type, they must belong to the same VPC.
    
-   A secondary ENI can be added only to security groups that are of the same type (basic or advanced). For more information, see [Basic security groups and advanced security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups).
    

### **Procedure**

You can change the names and descriptions of the primary and secondary ENIs, and the security groups associated with the secondary ENIs in the ECS console or by calling an API operation.

#### **Use the ECS console**

1.  Go to [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the ENI whose attributes you want to modify to go to the ENI details page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5042267371/p910142.png)
    
    -   **ENI Name**: Click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1214961171/p460470.png) icon and follow the on-screen instructions to specify a new ENI name.
        
    -   **Description**: Click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1214961171/p460470.png) icon and follow the on-screen instructions to specify a new ENI description.
        
    -   **Change Security Groups**: Click **Change Security Groups**. In the **Change Security Groups** dialog box, select new security groups to which you want to add the ENI or delete the security groups from which you want to remove the ENI. Retain at least one security group associated with the ENI.
        

#### **Call an API operation**

-   You can call the ModifyNetworkInterfaceAttribute operation to change the name, description, and associated security groups of an ENI. For more information, see [ModifyNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifynetworkinterfaceattribute).
    
-   You can call the [DescribeNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describenetworkinterfaceattribute) operation to query the attributes of the ENI specified by **NetworkInterfaceId**.
    

## **Unbind an ENI**

On an ECS instance to which multiple ENIs are bound, you can unbind a secondary ENI from the instance if you no longer require the ENI.

### **Prerequisites**

-   The primary ENI cannot be unbound from an instance and is automatically released when the instance is released.
    
-   The ECS instance from which you want to unbind a secondary ENI is in the **Stopped** or **Running** state.
    
    If the instance type of an ECS instance does not support hot swapping of secondary ENIs, you can unbind secondary ENIs from the instance only after you stop the instance.
    
    **ECS instance types that do not support the hot swapping feature of secondary ENIs**
    
    **Instance family**
    
    **Instance type**
    
    s6, shared standard instance family
    
    ecs.s6-c1m1.small, ecs.s6-c1m2.large, ecs.s6-c1m2.small, ecs.s6-c1m4.large, and ecs.s6-c1m4.small
    
    e, economy instance family
    
    ecs.e-c1m1.large, ecs.e-c1m2.large, ecs.e-c1m4.large, ecs.e-c4m1.large, and ecs.e-c2m1.large
    
    t6, burstable instance family
    
    ecs.t6-c1m1.large, ecs.t6-c1m2.large, ecs.t6-c1m4.large, ecs.t6-c2m1.large, and ecs.t6-c4m1.large
    
    t5, burstable instance family
    
    ecs.t5-c1m1.large, ecs.t5-c1m2.large, ecs.t5-c1m4.large, ecs.t5-lc1m1.small, ecs.t5-lc1m2.large, ecs.t5-lc1m2.small, ecs.t5-lc1m4.large, and ecs.t5-lc2m1.nano
    
    xn4, n4, mn4, and e4, previous-generation shared instance families
    
    -   ecs.xn4.small
        
    -   ecs.n4.small and ecs.n4.large
        
    -   ecs.mn4.small and ecs.mn4.large
        
    -   ecs.e4.small and ecs.e4.large
        
    
-   If elastic Remote Direct Memory Access (eRDMA) is enabled for the secondary ENI that you want to unbind, you must check whether applications are using eRDMA. If applications are using eRDMA, you must stop the applications. The eRDMA kernel module cannot unbind the eRDMA-enabled secondary ENI if you do not stop user-mode applications that are using eRDMA. An eRDMA-enabled secondary ENI is also referred to as a **secondary elastic RDMA interface (ERI)**.
    
    **View and stop applications that are using eRDMA**
    
    1.  Connect to a Linux instance.
        
        For more information, see [Connect to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#t1850146.html).
        
    2.  Run the following command to view the reference count of the eRDMA kernel module:
        
        ```
        lsmod | grep erdma
        ```
        
        -   If 0 is returned, no action is required.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6367425271/p835034.png)
            
        -   If a non-zero value is returned, eRDMA is being used by applications. You must stop the applications that are using eRDMA.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6367425271/p835070.png)
            
    3.  Query and stop the applications that are using eRDMA until the reference count of the eRDMA kernel module reaches 0.
        
        Sample command.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6367425271/p835072.png)
        
    

### **Procedure**

#### **Use the ECS console**

1.  Go to [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the secondary ENI that you want to unbind and is in the **InUse** state and click **Unbind from Instance** in the **Operation** column.
    
4.  In the **Unbind from Instance** message, confirm the information and click **Confirm**.
    
    If the status of the ENI changes to **Available** after you refresh the ENI list, the ENI is unbound from the instance.
    

#### **Call an API operation**

To unbind an ENI from an ECS instance, call the [DetachNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachnetworkinterface) operation and set the **NetworkInterfaceId** parameter to the ID of the ENI that you want to unbind and the **InstanceId** parameter to the ID of the instance from which you want to unbind the ENI.

-   If you used the **network configuration file** to configure the ENI and released the ENI from an instance, we recommend that you delete or modify the ENI configuration file and then restart the network service. This ensures the consistent ENI information on the instance. For more information, see [Method 2: Manual configuration using network configuration files](/help/en/ecs/user-guide/create-and-use-an-eni#ea144dab3f9m2).
    
-   After you unbind the ENI from the ECS instance, you can bind the ENI to a different ECS instance in the same virtual private cloud (VPC) and zone. When you create an instance, you can select an ENI in the **Available** state in the same VPC and zone as the instance and bind the ENI to the instance as the primary or secondary ENI. This allows you to reuse the ENI resources, such as network configurations and ENI features. For information about how to bind an ENI to an instance, see the [Bind an ENI to an instance](/help/en/ecs/user-guide/create-and-use-an-eni#1aac4914ddgy4) section in the "Create and use an ENI" topic.
    

## **Manage ENIs by tag**

The increasing number of cloud resources leads to more complex management difficulties. To better manage your resources, configure tags to classify and tag resources that have the same characteristics, such as ENIs that belong to the same organization or serve the same purpose.

You can use tags to easily retrieve resources and perform fine-grained resource management. For information about how to use tags, the resources that support tags, and the limits on tags, see [Tags](/help/en/ecs/user-guide/label-overview#concept-jzp-qtd-zdb) and the "Tag limits" section of the [Limits](/help/en/ecs/user-guide/limitations#TagsQuota) topic.

### **Procedure**

1.  Go to [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the ENI whose tags you want to manage, move the pointer over the ![edit-tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7369075571/p293260.png) icon in the **Tag** column, and then click **Edit** to configure tags.
    
4.  In the **Configure Tags** dialog box, select a tag key and a tag value or enter a new tag key and a new tag value, and then click **OK**.
    

## **Delete an ENI**

If you no longer require an ENI, unbind the ENI from an instance and delete the ENI to prevent resource wastes.

### **Prerequisites**

-   The ENI that you want to delete is in the **Available** state.
    
    The primary ENI cannot be unbound from an instance and is automatically released when the instance is released.
    
-   If a secondary ENI that you want to delete is bound to an ECS instance, unbind the secondary ENI from the instance. For more information, see the [Unbind an ENI](#4b97d04944inz) section of this topic.
    

### **Considerations**

-   For an ENI for which you enable the **Release with Instance** feature, the ENI can be deleted along with the instance when the instance is released if the ENI is never unbound from the instance.
    
-   After you delete an ENI, the system automatically removes the ENI from all associated security groups and reclaims all private IP addresses of the ENI.
    
-   The **elastic IP addresses (EIPs) associated with an ENI is retained** after the ENI is deleted. If you no longer require an EIP, separately release the EIP. After the EIP is released, billing for the EIP stops. For more information, see [Release a pay-as-you-go EIP](/help/en/eip/release-an-eip).
    

### **Procedure**

#### **Use the ECS console**

1.  Go to [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the ENI that you want to delete and is in the **Available** state and choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1502025961/p472553.png)** > **Delete** in the **Operation** column.
    
4.  In the message that appears, click **OK**.
    
    On the Elastic Network Interfaces page, refresh the ENI list. If the ENI is deleted, the ENI is no longer displayed.
    

#### **Call an API operation**

To delete an ENI, call the [DeleteNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletenetworkinterface) operation and set the **NetworkInterfaceId** parameter to the ID of the ENI that you want to delete.
