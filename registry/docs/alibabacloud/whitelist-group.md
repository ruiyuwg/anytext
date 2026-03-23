This topic describes how to add a whitelist group for a cluster instance. IP addresses on a whitelist of a cluster instance can access all tenants in the cluster instance.

## Background

-   ApsaraDB for OceanBase allows you to add whitelist groups for cluster instances. Each cluster instance has a default whitelist group that cannot be deleted. When you connect to a cluster instance for the first time, you must first configure an IP address whitelist for the cluster instance.
    
-   You can add a maximum of 10 whitelist groups for a cluster instance. Each whitelist group must have a unique name and cannot be empty. Each whitelist group supports a maximum of 40 whitelists.
    
-   Whitelist groups ensure access security for cluster instances. We recommend that you maintain whitelist groups regularly.
    

## Procedure

1.  In the left-side navigation pane, click **Instances** and select the target cluster instance to go to the **Cluster Instance Workspace** page.
    
2.  In the left-side navigation pane, click **Security Settings**.
    
3.  On the **Whitelist** tab, click **Add Whitelist Group**.
    
    **Note**
    
    To view the help information about how to add a whitelist group, click **How can I configure a whitelist?**.
    
    ![白名单分组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8773911861/p338550.png)
    
4.  Specify **Group Name** and **IP Address**.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7773911861/p282712.png)
    
    Parameter
    
    Description
    
    Group Name
    
    The whitelist group name must be 2 to 32 characters in length, start with a lowercase letter, end with a lowercase letter or digit, and contain only lowercase letters, digits, and underscores (\_).
    
    IP Address
    
    -   You can enter an IP address, for example, 192.168.0.1, or a CIDR block, for example, 192.168.0.0/24.
        
    -   Separate multiple IP addresses with commas (,), for example, 192.168.0.1,192.168.0.0/24.
        
    -   127.0.0.1 indicates that no access from any IP address is allowed.
        
    -   0.0.0.0 indicates that access from all IP addresses is allowed.
        
    -   Changes to the whitelist of the cluster instance take effect for all tenants.
        
    -   Each whitelist group supports a maximum of 40 whitelists.
        
    
5.  Click **OK**.
    
6.  After a whitelist is added, click the Edit icon next to the whitelist group to add or remove whitelists. Click the Copy icon to copy an existing whitelist.
