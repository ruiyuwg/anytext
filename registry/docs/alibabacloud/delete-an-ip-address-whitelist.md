When an external device no longer needs to access an ApsaraDB for MongoDB instance, we recommend that you delete the IP address of the external device from the IP address whitelists of the instance in a timely manner to ensure the security of the instance. This topic describes how to delete an IP address whitelist from an ApsaraDB for MongoDB instance.

## Background information

The proper settings of IP address whitelists can enhance access security of ApsaraDB for MongoDB instances. We recommend that you maintain the IP address whitelists of your instance on a regular basis.

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, choose **Data Security** > **Whitelist Settings**.
    
3.  Perform one of the following operations based on your business requirements:
    
    -   Delete an IP address from an IP address whitelist
        
        -   **Manually modify the IP address whitelist**
            
            1.  Find the IP address whitelist from which you want to delete the IP address and then click **Manually Modify** in the **Actions** column.
                
            2.  In the Manually Modify panel, click the **IPv4** or **IPv6** tab based on the format of the IP address.
                
                **Note**
                
                IPv6 is supported only by instances that run MongoDB 4.2.
                
            3.  In the **IP Whitelist** field, delete the IP address.
                
            4.  Click **OK**.
                
        -   **Load the IP addresses of ECS instances**
            
            1.  Find the IP address whitelist from which you want to delete the IP address and then click **Import ECS Internal IP** in the **Actions** column.
                
            2.  In the right-side list of the **IP Whitelist** field in the Import ECS Internal IP panel, select the IP address.
                
            3.  Click the ![向左](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3173091561/p353048.png) icon. Then, the IP address is displayed in the left-side list of the **IP Whitelist** field.
                
            4.  Click **OK**.
                
    -   Delete an IP address whitelist where all IP addresses are no longer used
        
        1.  Find the IP address whitelist that you want to delete and then click **Delete Whitelist** in the **Actions** column.
            
        2.  In the **Delete Whitelist** message, click **OK**.
