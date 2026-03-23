To keep Lindorm secure and stable, access to instances is denied by default. Before you use a Lindorm instance, you must configure a whitelist to allow external devices to access it. For a higher level of security, you should regularly maintain your whitelist.

## Preparations

Before you configure a whitelist for a Lindorm instance, you must obtain the IP address of the client that you want to add. The required IP address varies based on the client's location.

**Client location**

**Network type for connection**

**Method to obtain the client IP address**

(Recommended) ECS instance

virtual private cloud (VPC)

[Find the IP address of an ECS instance](/help/en/ecs/user-guide/network-faq/#section-vpl-qbg-qgb)

**Note**

Ensure that the ECS instance and the Lindorm instance are in the same VPC.

Local

Public network

Choose a method based on the operating system of the on-premises device:

-   Linux: On the on-premises device, run the `curl ipinfo.io |grep ip` command to get the public IP address.
    
-   Windows:
    
    -   Method 1: On the on-premises device, visit [IP Query](https://www.ip138.com/?spm=a2c4g.11186623.0.0.562f62b023bFwh) to get the public IP address.
        
    -   Method 2: Open the command prompt (CMD) and run the `curl ifconfig.me` command.
        

## Procedure

**Warning**

Setting the IP address range to 0.0.0.0/0 allows all IP addresses to access the Lindorm instance. This action creates a high security risk for your Lindorm instance. Do not add 0.0.0.0/0 to the whitelist.

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, choose **Access Control**.
    
5.  Click **Create Whitelist**.
    
6.  In the **Create Whitelist** dialog box, set the **Whitelist Name** and **Whitelist**.
    
    **Important**
    
    -   The group name can contain only letters, digits, and underscores (\_).
        
    -   The following formats are supported for IP addresses and IP address ranges.
        
        -   A single IP address, such as 192.0.XX.XX.
            
        -   IP address ranges in [CIDR format](/help/en/vpc/frequently-asked-questions#section-bi8-4gn-jag) (Classless Inter-Domain Routing). For example, 192.0.XX.XX/24. The number after the slash (/) indicates the prefix length, which can be an integer from 1 to 32.
            
    -   Separate multiple IP addresses or IP address ranges with a comma (,).
        
    -   To deny access from all IP addresses, set the IP address to 127.0.0.1.
        
    
7.  Click **OK**.
    
    After the group is created, you can click **Modify Group** in the Actions column for the target **Whitelist Name** to modify its whitelisted IP addresses. You can also create new whitelist groups to manage different IP addresses.
