By default, Tair (Redis OSS-compatible) provides Virtual Private Cloud (VPC) endpoints for instances. To connect to an instance over the Internet, you must apply for a public endpoint for the instance first.

## Precautions

-   You cannot apply for public endpoints for cloud-native cluster instances in direct connection mode.
    
-   For security concerns, you still need to enter a password when you use a public endpoint to connect to an instance for which password-free access is enabled.
    
-   Public endpoints may expose your instances to security risks. Proceed with caution.
    

## Network types of endpoints

**Network type**

**Description**

VPC

-   A VPC is a private network dedicated to you on Alibaba Cloud. VPCs are logically isolated from each other to provide higher security and performance. For more information about VPCs, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)
    
-   By default, an instance provides a VPC endpoint. You can connect to an instance over a VPC to achieve higher security and performance.
    

Internet

Security risks exist if you use a public endpoint to connect to an instance. For this reason, instances are not automatically assigned public endpoints. In the following scenarios, you can apply for a public endpoint for instance and use the endpoint to connect to the instance:

-   The device on which the client is installed, such as an [Elastic Compute Service (ECS) instance](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome), and the instance are not deployed in the same VPC.
    
-   The device on which the client is installed and the instance are not deployed in the same region.
    
-   The client is installed on a device outside of Alibaba Cloud, such as an on-premises device.
    

**Note**

-   To accelerate and secure data transmission, we recommend that you migrate your applications to an ECS instance that is deployed in the same region and has the same network type as your instance. This allows you to connect to the instance by using a VPC endpoint.
    
-   The bandwidth and connection limits of the instance are shared by connections to the instance over public and VPC endpoints. For example, assume that the bandwidth of an instance is 96 Mbit/s. If connections to the instance over VPC endpoints use a bandwidth of 70 Mbit/s, connections to the instance over public endpoints can use up to 26 Mbit/s bandwidth.
    

## Billing

You are not charged for applying for public endpoints and the traffic that is generated when you use public endpoints to connect to your instances.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the **Connection Information** section, click **Apply for Endpoint** to the right of **Public Access**.
    
    **Note**
    
    If the instance is a cloud-native cluster instance in direct connection mode, the **Apply for Endpoint** button is not displayed or is dimmed.
    
3.  In the panel that appears, enter an endpoint and a port number.
    
    **Parameter**
    
    **Description**
    
    **Endpoint**
    
    -   You can modify only the prefix of the endpoint. By default, the prefix is the instance ID.
        
    -   The prefix must be 8 to 40 characters in length and can contain lowercase letters and digits. It must start with a lowercase letter.
        
    
    **Port**
    
    When you modify the endpoint, you can also modify the port number. Valid values for this parameter: 1024 to 65535.
    
4.  Click **OK**.
    
    After the application is submitted, the public endpoint is displayed in the **Connection Information** section.
    

## Related API operations

**API operation**

**Description**

[AllocateInstancePublicConnection](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-allocateinstancepublicconnection-redis#main-107864)

Applies for a public endpoint for an instance.

## FAQ

### **Are you charged for applying for a public endpoint?**

You are not charged for applying for public endpoints and the traffic that is generated when you use public endpoints to connect to your instances.

### **Why am I unable to find the entry point to apply for a public endpoint for an instance?**

No option is available to apply for a public endpoint due to two reasons:

-   If the VPC endpoint is not displayed in the **Connection Information** section, no whitelist is configured for the instance. Configure a whitelist first. For more information, see [Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb).
    
-   Public endpoints are not supported for cloud-native cluster instances in direct connection mode. You can connect to these instances over VPC.
    
    **Note**
    
    Check whether the instance is a cloud-native cluster instance that runs in direct connection mode. For more information, see [How do I know whether an instance is a cloud-native cluster instance that runs in direct connection mode?](/help/en/redis/user-guide/view-endpoints#36b5409677sg3)
    
    If the ECS instance where your application resides is not in the same VPC as the Tair (Redis OSS-compatible) instance, or if your application is not hosted on Alibaba Cloud, you can configure the cloud-native cluster instance to run in proxy mode. A cloud-native cluster instance cannot be directly switched from the direct connection mode to the proxy mode. You can use the **instance restoration** feature to migrate and reconfigure the setup. This involves restoring backup data from the source instance to a new instance and selecting **Proxy** as the connection mode. For more information, see [Restore data from a backup set to a new instance](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance#task-2489089).
    
    **Warning**
    
    After the new cloud-native cluster instance is created with a new connection mode, modify the connection code accordingly. Otherwise, the instance cannot be connected. Proceed with caution.
    

### **Can I enable password-free access when I connect to an instance over the Internet?**

You can enable password-free access for an instance only when you connect to the instance over a VPC. When you connect to the instance over the Internet, you still need to enter a password for authentication.

### **What do I do if the "Current engine version does not support operations" error occurs?**

The current minor engine version is outdated. Update the minor engine version and try again. For more information, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

## What to do next

[Use a public endpoint to connect to an instance](/help/en/redis/user-guide/use-a-public-endpoint-to-connect-to-an-apsaradb-for-redis-instance#task-xcl-p2d-5db)
