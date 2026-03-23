After you create a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you must set IP address whitelists and create initial accounts for the cluster. Then, you can connect to the cluster and manage databases.

## Considerations

-   By default, only the IP address 127.0.0.1 is specified as a whitelist of the cluster. This whitelist blocks connections from all IP addresses.
    
-   If you specify % or 0.0.0.0/0 as a whitelist of the cluster, the whitelist allows connections from all IP addresses. However, this setting will compromise database security. We recommend that you do not use this setting.
    
-   An PolarDB cluster cannot automatically retrieve internal IP addresses of Elastic Compute Service (ECS) instances in a Virtual Private Cloud (VPC). You must add the internal IP addresses to a whitelist of the cluster.
    
-   The following whitelists are automatically created when you use certain services: **ali\_dms\_group** (for DMS), **hdm\_security\_ips** (for DAS), and **dtspolardb** (for DTS). Do not modify or delete these whitelists. Otherwise, the related services cannot connect to the cluster.
    
    **Note**
    
    Do not add your service IP addresses to these IP whitelists. Otherwise, your service IP addresses may be overwritten when the related services are updated. Consequently, service interruption may occur.
    
-   You can use IP whitelist templates to manage global IP whitelist configurations. For more information, see [Configure a global IP whitelist template](/help/en/polardb/polardb-for-oracle/configure-a-global-ip-whitelist-template).
    

## Set IP address whitelists

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Whitelists**.
    
5.  On the **Whitelists** page, you can click **Add IP Whitelist** to add an IP whitelist or click **Modify** to modify an existing IP whitelist.
    
    -   Add an IP whitelist
        
        1.  Click **Add IP Whitelist**.
            
        2.  In the **Add IP Whitelist** panel, specify the name of the IP whitelist and enter the IP addresses that are allowed to access the cluster.
            
            **Note**
            
            The name of the IP whitelist must meet the following requirements:
            
            -   The name can contain lowercase letters, digits, and underscores (\_).
                
            -   The name must start with a letter and end with a letter or digit.
                
            -   The name must be 2 to 120 characters in length.
                
            
    -   Modify an IP whitelist
        
        1.  On the right side of an IP whitelist name, click **Modify**.
            
        2.  In the **Modify Whitelist** panel, enter the IP addresses that are allowed to access the cluster.
            
            **Note**
            
            -   A `default` IP whitelist that contains only the IP address `127.0.0.1` is automatically created for each cluster. This IP whitelist blocks all IP addresses.
                
            -   If you set an IP whitelist to a percent sign (`%`) or `0.0.0.0/0`, all IP addresses are allowed to access the cluster. We recommend that you do not use this configuration unless necessary because it compromises database security.
                
            
    
6.  Click **OK**.
    
    **Note**
    
    You can create at most 50 IP whitelists and add at most 1,000 IP addresses or CIDR blocks to the 50 IP whitelists.
    

## What to do next

After you set whitelists and create database accounts, you can connect to the cluster and manage databases.

-   [Create a database account](/help/en/polardb/polardb-for-oracle/create-database-accounts)
    
-   [Connect to a cluster](/help/en/polardb/polardb-for-oracle/connect-to-a-polardb-cluster)
    

## FAQ

-   Q: I have added the IP address of an ECS instance to the IP address whitelist of an Apsara PolarDB cluster, but I still cannot connect to the cluster from the ECS instance. How can I deal with this issue?
    
    A: Perform the following tasks to resolve this issue:
    
    1.  Check whether the IP address whitelist is valid. If you connect to the cluster through an internal endpoint, you must add an internal IP address of the ECS instance to a whitelist. If you connect to the cluster through a public endpoint, you must add the public IP address of the ECS instance to the whitelist.
        
    2.  Check whether both instances run in the same type of network. If the ECS instance runs in a classic network, you can migrate the ECS instance to the VPC network where the cluster is located. For more information, see [Overview of migration solutions](/help/en/vpc/migrate-a-classic-network-to-a-vpc/).
        
        **Note**
        
        If you want to connect the ECS instance to other internal resources that are located in a classic network, do not migrate the ECS instance to the VPC network. Otherwise, the ECS instance cannot connect to these internal resources after migration.
        
        You can also use the [ClassicLink](/help/en/vpc/overview-2) feature to connect the classic network to the VPC network.
        
    3.  Check whether both instances run in the same VPC network. If they do not run in the same VPC, you must purchase a new PolarDB cluster, or activate the [Cloud Enterprise Network](/help/en/cen/user-guide/connect-network-instances-created-by-the-same-account-and-in-the-same-region) service to connect these VPCs.
        
    
-   Q: How can I deal with the failure to connect to the cluster through a public endpoint?
    
    A: Perform the following tasks to resolve the issue:
    
    1.  If you connect to the cluster from an ECS instance through a public endpoint, make sure that you have added the public IP address of the ECS instance to an IP address whitelist of the cluster.
        
    2.  Specify 0.0.0.0/0 as an IP address whitelist of the cluster and try to connect to the cluster. If you can connect to the cluster, the public endpoint you have ever specified as an IP address whitelist is incorrect. You must check the public endpoint. For more information, see [View or apply for an endpoint](/help/en/polardb/polardb-for-postgresql/view-or-apply-for-an-endpoint#task-1580381).
        
    
-   Q: How can I connect to an PolarDB cluster through an internal endpoint?
    
    A: If you want to connect to an PolarDB cluster from an ECS instance through an internal endpoint, the following conditions must be met:
    
    -   Both instances must be located in the same region.
        
    -   Both instances must run in the same type of network. If the network is a VPC network, they must run the same VPC network.
        
    -   The internal IP address of the ECS instance is listed in an IP address whitelist of the cluster.
