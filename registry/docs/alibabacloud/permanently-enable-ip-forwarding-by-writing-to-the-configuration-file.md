Use the IPv4 or IPv6 gateway with the gateway route table to direct inbound traffic from the Internet to security devices for inspection and filtering. This helps prevent malicious attacks and unauthorized access, ensuring security protection. This topic demonstrates how to use the IPv4 gateway and gateway route table to manage traffic entering the virtual private clouds (VPCs).

## **Scenario**

Some businesses deploy third-party security devices in VPCs for traffic scrubbing. These devices include cybersecurity hardware or software from independent vendors, such as firewalls and intrusion detection systems. By modifying the system route entry in the gateway route table and associating it with the IPv4 gateway, inbound Internet traffic is redirected to these security devices for scrutiny, letting you manage access to the VPC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5054672671/CAEQTxiBgIDF2eWz0xkiIDczMzUxYTljNTFhMjRjMjhiY2JjZjVhZTU0YjQ5YTM04537623_20240724152005.068.svg)

## **Prerequisites**

-   A VPC has been created in the China (Shanghai) region, with two Elastic Compute Service (ECS) instances named ECS-A and ECS-B within it.
    
-   Two [custom route tables](/help/en/vpc/network-traffic-management-using-custom-routing-tables) have been created and respectively attached to vSwitch 1 and vSwitch 2.
    

## **Procedure**

### **Step 1: Create** an IPv4 gateway **and bind the gateway route table**

1.  Create and activate the IPv4 gateway.
    
    1.  Log on to the [IPv4 Gateway console](https://vpc.console.alibabacloud.com/ipv4/cn-hangzhou/ipv4s). From the top menu bar, choose the region where your VPC is located. China (Shanghai) is chosen in this example.
        
    2.  Click **Create IPv4 Gateway**, select the VPC, and click **Create**.![igw-table1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918819.png)
        
    3.  Select the route table attached to the vSwitch associated with ECS-A and click **Activate**.
        
        **Note**
        
        -   Upon activation, the system will add a default route with the destination CIDR block `0.0.0.0/0` pointing to the IPv4 gateway to the route table of the vSwitch. This lets the vSwitch linked to the route table access the Internet. If there is already a default route pointing to `0.0.0.0/0`, you cannot add another one for the IPv4 gateway.
            
        -   Before the IPv4 gateway is activated, VPC traffic remains unaffected. However, activation may cause a brief network interruption as the traffic path changes.
            
        
        ![igw-table2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4737156471/p918823.png)
        
    4.  Activate the gateway and configure the vSwitch route table.
        
        ![igw-table3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918825.png)
        
2.  Create a gateway route table.
    
    1.  Log on to the [Route Table console](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/route-tables). Select the China (Shanghai) region from the top menu bar.
        
    2.  Click **Create Route Table**, select the VPC, choose **Associated Resource Type** as **Border Gateway**, enter the name for the route table, and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918827.png)
        
3.  Associate the gateway route table.
    
    1.  In the gateway route table details page, associate the border gateway.
        
        ![igw-table5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918831.png)
        
    2.  Ensure the border gateway status is **Active**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918833.png)
        

### **Step 2: Configure security devices**

**Important**

The ECS-A instance is treated as a security device in this example and requires configuring IP traffic forwarding. If you are using **third-party security devices**, contact the device provider to assist with deployment.

In this example, the operating system is Alibaba Cloud Linux 3.2104 64-bit.

Log on to ECS-A and run the following command to enable IP traffic forwarding:

#### **Permanently enabled**

```
# Permanently enable IP forwarding (by writing to the configuration file)
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
# Take effect immediately
sysctl -p
```

#### **Invalid after instance restart**

```
# Temporarily enable IP forwarding (invalid after restart)
sysctl -w net.ipv4.ip_forward=1
```

### **Step 3: Configure routing**

1.  Configure the custom route table for outbound traffic.
    
    1.  On the **Route Tables** page, find the custom route table associated with the vSwitch where ECS-B resides and click its ID.
        
    2.  Navigate to the **Route Entry List** > **Custom Route** tab and create a route entry with the destination CIDR block `0.0.0.0/0` specifying ECS-A (security device) as the next hop.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9562632471/p918834.png)
        
2.  Configure the gateway route table for inbound traffic.
    
    1.  On the **Route Tables** page, find the gateway route table you created and click its ID.
        
    2.  Navigate to the **Route Entry List** > **System Route** tab to view the system route entries. A system route with the vSwitch CIDR block as the destination is automatically added.
        
    3.  Edit the **Destination CIDR Block** to point to vSwitch 2 and set the next hop as ECS-A (security device).![igw-table8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918837.png)
        
    4.  Once configured, the system route entry will become a custom one. Ensure that the status of the route entry is **Active**.
        
        ![igw-table9](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918838.png)
        

### **Verify the results**

**Note**

Ensure that the configurations of [network ACL](/help/en/vpc/network-acl-overview) and [security groups](/help/en/ecs/user-guide/overview-44) do not interfere with the ECS connectivity test.

#### **Verify inbound traffic access**

Access the public IP address of ECS-B in a browser by navigating to `http://<ECS-B Elastic IP Address>`.

![igw-table12](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p918993.png)

#### **Verify inbound traffic flows through ECS-A**

Log on to ECS-A and run `tcpdump dst host <ECS-B private IP>` to capture traffic to ECS-B.

Access the public IP address of ECS-B in a browser and check the packet capture results on ECS-A.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562632471/p919741.png)

## **Additional operations**

### **Manage IPv6 traffic**

The IPv4 gateway manages public IPv4 traffic at the VPC border. To manage IPv6 traffic entering the VPC, you must create an [IPv6 gateway](/help/en/ipv6-gateway/product-overview/what-is-an-ipv6-gateway/) and associate it with the gateway route table.

**Note**

The system automatically creates an IPv6 gateway for VPCs that have IPv6 enabled. Make sure the IPv6 Internet bandwidth is enabled for the IPv6 address of ECS instances to [connect ECS and IPv6 Internet](/help/en/ipv6-gateway/getting-started/allow-an-ecs-instance-in-a-vpc-to-communicate-with-external-ipv6-clients-over-the-internet#section-hh0-5ut-dru).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5054672671/CAEQTxiBgMDzruez0xkiIDQzZTU2ZjI2YmJlYjQzMDI4MmQ4YjhjMTFlMjM5YmE44537623_20240724152005.068.svg)

1.  Create a gateway route table and associate it with the IPv6 gateway.
    
    1.  Log on to the [Route Table console](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/route-tables). In the top menu bar, select the region where the IPv6 gateway is located.
        
    2.  Click **Create Route Table**, select the VPC, choose **Associated Resource Type** as **Border Gateway**, enter a name, and click **OK**.
        
    3.  On the gateway route table product page, click **Associated Border Gateway** > **Associate Border Gateway**, select the IPv6 gateway, and associate it.
        
2.  Configure the gateway route table for inbound IPv6 traffic.
    
    1.  Navigate to the **Route Entry List** > **System Route** tab to view the system route entries. A system route is automatically created with the vSwitch CIDR block specified as the destination.
        
    2.  Modify IPv6 route entry whose **Destination CIDR Block** is vSwitch 2, and set the next hop as ECS-A (security device).
        

### **Modify inbound routing over the Internet**

Modify the system route entries of the gateway route table to adjust public inbound routing.

The next hop for IPv4 or IPv6 routes can be modified to **ECS Instance**, **ENI**, and **GWLB Endpoint**.

**Note**

-   You can only modify the system route entries of the gateway route table. You cannot create custom ones.
    
-   After you edit and save a system route entry, it becomes a custom one. Deleting it will cause it to revert to a system route entry.
    
-   Take note of the following when you edit system route entries in the gateway route table:
    
    -   ECS instance/Elastic Network Interface (ENI): Access specified ECS instances or ENIs in the vSwitch. This is typically used to securely redirect Internet traffic to particular instances. To modify instances, you must delete the existing route entry and re-enter the system route information, because direct replacement is not supported.
        
    -   [Gateway Load Balancer (GWLB) Endpoint](/help/en/slb/gateway-based-load-balancing-gwlb/getting-started/gwlb-quickly-implements-load-balancing-for-ipv4-services): Access the specified endpoint within the vSwitch. This is typically used to reroute Internet traffic to third-party security appliances in GWLB.
        
        Depending on the region, the next hop can be modified to a **GWLB Endpoint**. For more information about the supported regions, see [regions that support GWLB Endpoint](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/regions-and-zones-supported-by-gwlb#8bca1144aeywx).
        

### **Detach** the gateway route table

Unbind the gateway route table from the IPv4 or IPv6 gateway to remove the gateway routing capability.

1.  On the **Route Tables** page, find the gateway route table and click its ID.
    
2.  Click the **Associated Border Gateway** tab, find the gateway, and click **Unbind** in the **Actions** column.
    
3.  In the pop-up dialog box, click **OK**.
    

### **Delete the gateway route table**

Detach the border gateway before deleting the gateway route table if it is currently associated.

1.  On the **Route Tables** page, find the gateway route table, and then click **Delete** in the **Actions** column.
    
2.  In the **Delete Route Table** dialog box, click **OK**.
    

## **References**

-   For more information on the IPv4 gateway, its usage guide, and limitations, see [IPv4 gateway](/help/en/vpc/ipv4-gateway-overview).
    
-   You can also manage the gateway route table by calling the following APIs:
    
    -   [AssociateRouteTableWithGateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associateroutetablewithgateway): Associate the route table with the gateway.
        
    -   [DissociateRouteTableFromGateway](/help/en/vpc/developer-reference/api-vpc-2016-04-28-dissociateroutetablefromgateway): Disassociate it from the gateway.
        
    -   [UpdateGatewayRouteTableEntryAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-updategatewayroutetableentryattribute): Modify the next hop of the gateway route table.
        
    -   [ListGatewayRouteTableEntries](/help/en/vpc/developer-reference/api-vpc-2016-04-28-listgatewayroutetableentries): Query the list of gateway route tables.
