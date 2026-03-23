To share resources across multiple VPCs in the same region, you can use Cloud Enterprise Network (CEN) to enable connection between VPCs.

This topic describes how to use a CEN to connect two VPCs in the same region as an introductory example. You can extend it to connecting multiple VPCs.

## Scenario

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3516534471/CAEQMRiBgICylp29nBkiIDViNjVjZjdjYTM4NTQ4MGNhZjQwNDk3OTM2NzhlMDZm4729461_20241028200639.331.svg)

Two VPCs have been created in the China (Hangzhou) region as illustrated in the preceding figure. Each VPC has two vSwitches for disaster recovery and an ECS instance to verify connectivity:

-   VPC1
    
    -   IPv4 CIDR block: 10.0.0.0/16
        
    -   vSwitch 1 in Zone J. CIDR block: 10.0.0.0/24
        
    -   vSwitch 2 in Zone K. CIDR block: 10.0.1.0/24
        
    -   ECS1 address: 10.0.0.1
        
-   VPC2
    
    -   IPv4 CIDR block: 172.16.0.0/16
        
    -   vSwitch 1 in Zone J. CIDR block: 172.16.0.0/24
        
    -   vSwitch 2 in Zone K. CIDR block: 172.16.1.0/24
        
    -   ECS2 address: 172.16.0.1
        

You can connect both VPCs to the transit router of the CEN to enable connection.

**Important**

Ensure that the CIDR blocks of the VPCs do not overlap with each other when you plan the network.

## Procedure

### Step 1: Create CEN

1.  Go to the [CEN console](https://cen.console.alibabacloud.com/cen). Choose the **Instances** in the left-side navigation pane, and click **Create CEN Instance**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872314.png)

2.  On the **Create CEN Instance** dialog box, enter a **Name** and click **OK**. `cen1` is entered in this example.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872316.png)

3.  Click **View Details** to go to the details page when prompted **the CEN instance is created**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872461.png)

### Step 2: Create a transit router

1.  On the CEN instance details page, click **Create Transit Router**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872483.png)

2.  In the **Create Transit Router** dialog box, select a region to deploy the transit router, leave other parameters at their default value, and click **OK**. In this example, **China (Hangzhou)** is chosen.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872484.png)

3.  Close the dialog box when prompted **The transit router is created**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872494.png)

4.  You can find the transit router on the CEN instance details page.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872563.png)

### Step 3: Connect VPCs to the transit router

1.  In the **Actions** column of the transit router, click **Create Connection**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872502.png)

2.  On the **Connect with Peer Network Instance** page, choose **Virtual Private Cloud (VPC)** as the instance type. Enter `Attach1` in the **Attachment Name** and select `VPC1` for the network instance. Leave other parameters at their default value and click **OK**.
    
    **Note**
    
    The system automatically selects two zones for the current VPC to realize disaster recovery. If your VPC has only one vSwitch, create another vSwitch in a different zone.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2516534471/p940892.png)

3.  The dialog box indicates that you have connected VPC1 to the transit router. To connect `VPC2`, click **Create More Connections**, and enter `Attach2` in the **Attachment Name**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4182260471/p872583.png)

4.  Click **Return to the List** after the connection has been created.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872634.png)

5.  You can see two VPC connections, `Attach1` and `Attach2`, on the details page of transit routers.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872839.png)

### Step 4: Verify connectivity

**Note**

Before verification, ensure that the security group rules for two ECS instances allow for communication between VPCs. For more information, see [View security group rules](/help/en/ecs/user-guide/view-security-group-rules#task-1357273) and [Add security group rules](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).

Log on to ECS1 and run the `ping` command to test the connectivity with ECS2.

```
ping 172.16.0.1
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9086033371/p872790.png)

A `ping` response as shown in the preceding figure confirms the connections between `VPC1` and `VPC2`.

## What to do next

-   To visualize the network topology, see [View resource topology](/help/en/cen/user-guide/view-resource-topology).
    
-   To create connections between VPCs in different regions, see [Connect VPCs in different regions](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts).
    
-   To analyze traffic through the transit router, see [Configure flow logs](/help/en/cen/user-guide/configure-a-flow-log).
