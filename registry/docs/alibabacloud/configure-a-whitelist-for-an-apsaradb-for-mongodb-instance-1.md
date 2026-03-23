To keep your ApsaraDB for MongoDB database secure and stable, access to your instance is blocked by default. The default whitelist contains only the IP address 127.0.0.1. Before using an ApsaraDB for MongoDB instance, configure a whitelist to allow external devices to access it. Correctly configured whitelists provide a higher level of security. Maintain your whitelists regularly.

## Background information

-   Before you use the destination instance for the first time, [add a whitelist group](/help/en/mongodb/user-guide/configure-an-ip-address-whitelist#concept-xpy-wcx-w2b).
    
-   After you add a whitelist, the connection address of the instance appears on the **Basic Information** and **Database Connections** pages.
    

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Replica Set Instances** or **Sharded Cluster Instances** based on the instance type.
    
3.  In the upper-left corner of the page, select the resource group and region where the instance is located.
    
4.  Click the ID of the target instance, or click **Actions** in the **Manage** column of the target instance.
    
5.  In the navigation pane on the left of the instance details page, click **Data Security** > **Whitelist Settings**.
    
6.  In the **Whitelist Settings** section, modify the whitelist of the instance using one of the following methods.
    
    ## Manual modification
    
    1.  In the **Actions** column of the target group, click **Modify**.
        
    2.  In the **Manually Modify** panel, enter IP addresses or CIDR blocks in the **IP Whitelist** text box.
        
        -   The following formats are supported for IP addresses and CIDR blocks.
            
            -   A single IP address, such as 10.23.12.24.
                
            -   0.0.0.0/0
                
                **Warning**
                
                Setting the whitelist to 0.0.0.0/0 allows access from any IP address. This exposes your ApsaraDB for MongoDB database to high security risks. Use this value with caution.
                
            -   [CIDR notation](/help/en/vpc/frequently-asked-questions#section-bi8-4gn-jag), which stands for Classless Inter-Domain Routing. For example, 10.23.12.24/24. The /24 indicates that the prefix is 24 bits in length. The valid range for the prefix length is 1 to 32.
                
        -   Separate multiple IP addresses or CIDR blocks with a comma (,).
            
        
    3.  Click **OK**.
        
    
    ## **Load private IP addresses of ECS instances**
    
    1.  In the **Actions** column of the target group, click **Load ECS Private IP**.
        
    2.  In the **Add ECS Private IP** panel, select the private IP addresses of the ECS instances that you want to add from the **IP Whitelist** list.
        
    3.  Click ![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2905510461/p332519.png).
        
    4.  Click **OK**.
        
    

## FAQ

**Why can't I connect even after adding my IP to the whitelist?**

If you are unable to connect to MongoDB, you may be using an incorrect public IP address. Follow these steps to find the public IP address of your on-premises device:

1.  Temporarily add the IP address `0.0.0.0/0` [to the whitelist of the MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Warning**
    
    The IP address `0.0.0.0/0` allows access from any IP address and poses a security risk. Use this IP address with caution. If you use it, remove it from the whitelist promptly.
    
2.  [Log on to the MongoDB instance using Mongo Shell](/help/en/mongodb/user-guide/connect-to-an-apsaradb-for-mongodb-instance-over-the-internet#8e958a7543ia6).
    
    If you still cannot connect to the MongoDB instance after you add the IP address `0.0.0.0/0` to the whitelist, try to [connect to the MongoDB instance using DMS](/help/en/mongodb/user-guide/manage-apsaradb-for-mongodb-instances-by-using-dms). Check whether the account, password, and authentication database are correct.
    
3.  Run the following command to query information about the Mongo Shell client.
    
    ```
    db.currentOp({"appName" : "MongoDB Shell","active" : true})
    ```
    
    Example:![客户端IP查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1335298951/p44647.png)
    
    **Note**
    
    If you log on to the MongoDB instance using other methods, you can run the following command to query information about all clients.
    
    ```
    db.runCommand({currentOp: 1, "active" : true})
    ```
    
4.  Add the obtained IP address to the whitelist of the MongoDB instance, and then delete the IP address `0.0.0.0/0` from the whitelist.
    

**Why can I still not connect to the instance even though the whitelist is correctly configured?**

Confirm that the network environment and the instance endpoint are correct. ApsaraDB for MongoDB supports connections over the private network and the public network. You must use different endpoints for different network environments.

For information about other troubleshooting methods, see [Connections and networks](/help/en/mongodb/support/connection-access-and-network).

**How do I configure the whitelist if the client IP address is dynamic?**

If the client IP address is not fixed, you can [connect to MongoDB from a local client through an SSL-VPN tunnel](/help/en/mongodb/user-guide/connect-a-local-client-to-an-apsaradb-for-mongodb-instance-by-using-an-ssl-vpn-tunnel#concept-185604) or add the CIDR block of your client to the whitelist.

**Important**

When you add the CIDR block of your client to the whitelist, minimize the range of the CIDR block as needed to reduce security risks.
