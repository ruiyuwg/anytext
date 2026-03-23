The IP whitelist function provides access control for your MongoDB instance by limiting IP addresses that can connect to your database, enhancing security. Properly configuring the IP whitelist serves as the first layer of security for your MongoDB database. By default, only 127.0.0.1 (localhost) is added to the IP whitelist, which means external clients will be denied access until you add their specific IP addresses.

## **Prerequisites**

-   You have successfully [created an instance](/help/en/mongodb/getting-started/create-an-instance).
    
-   The instance status is **Running**.
    

## **Procedure**

The following steps describe how to modify the default whitelist group of an instance. For more information about how to create another whitelist group or configure a security group, see [Configure an IP addresswhitelist or an ECS security group for an instance](/help/en/mongodb/user-guide/configure-a-whitelist-or-an-ecs-security-group-for-an-apsaradb-for-mongodb-instance/).

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the resource group and region to which the desired instance belongs. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane of the instance details page, choose **Data Security** > **Whitelist Settings**.
    
3.  In the **Whitelist Settings** page, choose one of the following methods to modify your whitelist group:
    
    ### Manual configuration
    
    1.  Click **Modify** in the **Actions** column of the target group.
        
    2.  In the **IP Whitelist** field of the **Manually Modify** panel, enter IP addresses or IP address ranges:
        
        -   Support for single IP address format, e.g., 10.23.12.24.
            
        -   Support for 0.0.0.0/0.
            
            **Warning**
            
            Setting to 0.0.0.0/0 means no restrictions are imposed on the sources of IP addresses accessing the database. This leaves the cloud database MongoDB database vulnerable to high security risks. Use with caution.
            
        -   Support for CIDR format, e.g., 10.23.12.24/24, where /24 indicates the length of the prefix in the address in the range \[1, 32\].
            
        -   Separate multiple IP addresses or IP address ranges with commas (,).
            
        
    3.  Click **OK**.
        
    
    ### **Load ECS private IP addresses**
    
    1.  Click **Add Internal IP Addresses of ECS Instances** in the **Action** column of the target group.
        
    2.  In **IP Whitelist** of the **Import ECS Internal IP** panel, select the ECS internal IP address to be added.
        
    3.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4774458671/p1045880.png).
        
    4.  Click **OK**.
        
    

## **Next steps**

After configuring the IP whitelist, you can [connect to the MongoDB instance](/help/en/mongodb/getting-started/connection-instance).

## **FAQ**

**Which IP address should I add to the whitelist before connecting to the instance?**

Determine the IP address to add according to your network environment and connection method:

-   Connect via local client (public network connection)
    
    You need to first obtain the public IP of the local client, then add the IP address to the whitelist.
    
-   Connect via ECS client
    
    -   ECS instance and MongoDB instance are in the same VPC: You can connect via private network. When adding the whitelist, directly select **Add Internal IP Addresses of ECS Instances**, which adds the ECS VPC IP address to the whitelist.
        
    -   ECS instance and MongoDB instance are not in the same VPC: You can connect via public network. You can check the ECS public IP in the ECS console and add the ECS public IP to the whitelist.
        
-   Connect via DMS
    
    By default, when connecting via DMS, the instance automatically adds the DMS IP address to the whitelist without manual setting. If the instance fails to automatically add the DMS IP address to the whitelist, you can manually [add DMS IP address ranges](/help/en/dms/configure-an-ip-address-whitelist).
