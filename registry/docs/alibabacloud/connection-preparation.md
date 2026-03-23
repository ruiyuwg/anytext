To ensure secure access to a Tair (Redis OSS-compatible) instance, you need to **establish network connectivity between your client and the instance** and **configure IP address whitelists**.

## **Establish network connectivity**

When you connect to a Tair (Redis-compatible) instance, network connectivity between the client and the instance is essential for a successful connection. Select an appropriate network type based on the client location.

**Client location**

**Recommended network type**

**Description**

[Elastic Compute Service (ECS)](/help/en/ecs/user-guide/what-is-ecs) or [Container Service for Kubernetes (ACK)](/help/en/ack/product-overview/product-introduction)

[Virtual Private Cloud (VPC)](/help/en/vpc/what-is-vpc)

-   When the client and the Tair (Redis-compatible) instance belong to the same VPC, network connectivity is established by default, and you can directly configure a whitelist.
    
    How do I determine whether they belong to the same VPC?
    
    1.  Go to the ECS or ACK console, click the instance ID to go to the instance details page and check the VPC information in the network information section.
        
    2.  Go to the Tair or Redis console, click the instance ID to go to the instance details page and check the VPC information in the basic information section.
        
    3.  Compare the VPCs of the two instances to determine whether they are the same.
        
    
-   If they do not belong to the same VPC, the following applies:
    
    -   If the instances reside in the same region, you can [change the VPC of the ECS instance](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance#task-2526213) or [change the VPC of the Tair instance](/help/en/redis/user-guide/change-the-vpc-or-vswitch-of-an-instance#section-bkr-37r-fkm) to the same VPC.
        
    -   To connect the instances across accounts or regions over VPC, you can establish [VPC peering connections](/help/en/vpc/vpc-peer-to-peer-connection).
        

On-premises client

Internet

You need to configure an IP address whitelist first, and then [apply for a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#section-3td-wzn-8zz).

Server in the self-managed data center

[Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/)

Connect your data center to the Tair instance over an Express Connect circuit to enable network connectivity between on-premises and cloud environments.

**Note**

For more information about network connectivity, see [Network connection planning](/help/en/vpc/vpc-network-planning#36d6702e6fos4).

## **Configure IP address whitelists**

Only IP addresses in the whitelists of an instance can access the instance.

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Whitelist Settings**.
    
3.  Add appropriate IP addresses to the whitelist based on the client location.
    
    ## ECS
    
    1.  In the Actions column corresponding to the **default** security group, click **Modify**.
        
    2.  Set **Method to Add IP Address** to **Import ECS Internal IP Address**. The panel displays the private IP addresses of ECS instances in the same region as the instance.
        
        > Move the pointer over an IP address to view the ID and name of the ECS instance to which the IP address is assigned.
        
    3.  Select the required IP addresses and move them to the right-side section.
        
    4.  Click **OK**.
        
    
    ## ACK
    
    1.  Click the **Security Groups** tab next to the Whitelist Setting tab.
        
    2.  Click **Add Security Group**, select the security group corresponding to ACK in the dialog box, and then move it to the right-side section.
        
        > ACK security group: **Cluster Information** > **Basic Information** > **Network** > **Control Plane Security Group**.
        
    3.  Click **OK**.
        
    
    ## On-premises client
    
    1.  To obtain your public IP address, enter the curl ifconfig.me command in the command line of your client.
        
    2.  In the Actions column corresponding to the **default** security group, click **Modify**. Add the public IP address you obtained.
        
    3.  Click **OK**.
        
    
    **Note**
    
    If your client's IP address changes dynamically, see [How do I configure whitelists for dynamic IP addresses?](#410faba9d28at)
    
    For more information about configuring whitelists, see [Configure whitelists](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
    

**Note**

If you connect the instances over the Internet, after configuring a whitelist, [apply for a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#section-3td-wzn-8zz) in the Connection Information section of the instance details page.

Next, refer to the following topics to connect to your instance:

-   [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db)
    
-   [Use redis-cli to connect to an instance](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db)
    
-   [Use DMS to connect to an instance](/help/en/redis/user-guide/log-on-to-an-apsaradb-for-redis-instance-by-using-dms#concept-jvw-c24-tdb)
    

## FAQ

### **How do I configure whitelists for dynamic IP addresses?**

-   For ECS instances in an auto scaling group, see [Automate the addition or removal of the private IP addresses of ECS instances to or from the IP address whitelists of Tair instances](/help/en/redis/use-cases/automatically-add-or-remove-the-private-ip-addresses-of-ecs-instances-to-or-from-the-ip-address-whitelist-of-an-apsaradb-for-redis-instance).
    
-   For IP addresses within a fixed range, you can configure a whitelist using [CIDR notation](/help/en/vpc/faq-about-cidr-blocks). For example, 10.23.12.0/24 represents the IP address range from 10.23.12.0 to 10.23.12.255.
    
-   For IP addresses outside a fixed range, you can use a script to monitor IP address changes and call the [ModifySecurityIps](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifysecurityips-redis) operation to update the whitelist accordingly.
