An IP whitelist contains IP addresses or security groups that are allowed to access a PolarDB for MySQL cluster. After you create a cluster, only the IP addresses of your on-premises environment or ECS instances that are added to the whitelists can access the cluster.

## Precautions

-   PolarDB cannot automatically obtain the private IP addresses of ECS instances in virtual private clouds (VPCs). If you want to use the private IP address of an ECS instance to access a PolarDB for MySQL cluster, you must manually add the IP address to the IP whitelist of the cluster.
    
-   You can configure IP address whitelists and security group settings for an RDS instance. The ECS instances in the IP whitelist and the ECS instances in the security group that is added to the cluster whitelist can access the PolarDB for MySQL cluster.
    
-   The **ali\_dms\_group** (for [Data Management](/help/en/dms/product-overview/what-is-dms#task-1919582)), **hdm\_security\_ips** (for [Database Autonomy Service](/help/en/das/product-overview/what-is-das#concept-2419191)), and **dtspolardb** (for [Data Transmission Service](/help/en/dts/product-overview/what-is-dts)) whitelists are automatically created when you use the relevant services. To ensure that the services can be used as normal, do not modify or delete these IP whitelists.
    
    **Important**
    
    Do not add your service IP addresses to these IP whitelists. Otherwise, your service IP addresses may be overwritten when the related services are updated. Consequently, service interruption may occur.
    
    ![白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3785337061/p186814.png)
    
-   You can create up to 50 IP address whitelists for a cluster, and add up to 1,000 IP addresses or CIDR blocks to the whitelists in total.
    

## Scenarios

A whitelist contains IP addresses or security groups that are allowed to access a PolarDB for MySQL cluster. You can configure an IP whitelist to reinforce the security of a PolarDB for MySQL cluster. We recommend that you update the IP whitelist on a regular basis. In most cases, you must configure an IP whitelist in the following scenarios:

-   You want to connect your ECS instance to a PolarDB for MySQL cluster. You can find the IP addresses of the ECS instance in the **Instance Details** page. Then, add one of the IP addresses to the IP whitelist of the cluster.
    
    **Note**
    
    -   Your ECS instance and the PolarDB for MySQL cluster are in the same VPC. Add the private IP address of the ECS instance or the CIDR block of the VPC to which the ECS instance belongs to the whitelist.
        
    -   Your ECS instance and the PolarDB for MySQL cluster are not in the same VPC. Add the public IP address of the ECS instance or the security group to which the ECS instance belongs to the whitelist. You can also migrate the ECS instance to the VPC to which the PolarDB for MySQL cluster belongs. Then, add the private IP address of the ECS instance or the CIDR block of the VPC to which the ECS instance belongs to the whitelist.
        
    
-   If you want to connect on-premises servers, computers, or other cloud instances to the PolarDB cluster, add the relevant public IP addresses to the IP whitelist of the cluster.
    

## Procedure

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). Click **Clusters** in the left-side navigation pane. Select a region in the upper-left corner and click the ID of the cluster that you want to manage to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Whitelists**.
    
3.  On the **Whitelists** page, you can click **Add IP Whitelist** to add an IP whitelist or click **Modify** to modify an existing IP whitelist.
    
    -   Add an IP whitelist
        
        Click **Add IP Whitelist**. In the **Add IP Whitelist** panel, specify the name of the IP whitelist and enter the IP addresses that are allowed to access the cluster.
        
    -   Modify an IP whitelist
        
        On the right side of an IP whitelist name, click **Modify**. In the **Modify Whitelist** panel, enter the IP addresses that are allowed to access the cluster.
        
    
    **Note**
    
    -   The name of the IP whitelist must meet the following requirements:
        
        -   It can contain lowercase letters, digits, and underscores (\_).
            
        -   It must start with a letter and end with a letter or digit.
            
        -   It must be 2 to 120 characters in length.
            
    -   For IP addresses in the whitelist:
        
        -   You can enter IP addresses and CIDR blocks. For example, you can enter the `192.168.0.1` IP address and the `192.168.0.0/24` CIDR block.
            
        -   When you add multiple IP addresses or CIDR blocks, separate them with commas (,), for example, `192.168.0.1,192.168.0.0/24`.
            
        -   `127.0.0.1` indicates that no IP address is allowed to access the cluster.
            
        -   `0.0.0.0/0` indicates that any IP address is allowed to access the cluster. To ensure the security of your database instance, we recommend that you do not add this IP address to the whitelist unless necessary.
            
    -   A `default` IP whitelist that contains only the IP address `127.0.0.1` is automatically created for each cluster. This IP whitelist blocks all IP addresses.
        
    

## **FAQ**

### **Why am I unable to connect an ECS instance to a** PolarDB **cluster**?

Use the following steps to troubleshoot the issue:

1.  Check whether the PolarDB cluster is in the **Running** state.
    
2.  Check whether the database endpoint, port, account, and password are correct. For more information, see [Obtain the database endpoint and port](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#7ff66e95f9liw).
    
3.  Check the network conditions. You can run `ping` or `telnet` commands in the ECS instance to test the network connectivity.
    
4.  If you are using a **Private** endpoint:
    
    1.  Check whether the ECS instance and the PolarDB cluster reside in the same VPC. If not, you cannot use the **Private** endpoint. You can use one of the following methods to place the ECS instance and PolarDB clusters in the same VPC:
        
        -   Switch the VPC in which the ECS instance resides.
            
        -   If the PolarDB cluster uses the default VPC, you can switch the VPC in which the PolarDB cluster resides. For more information, see [Change the default VPC and default vSwitch](/help/en/polardb/polardb-for-mysql/user-guide/change-the-vpc-and-vswitch#17869d614ejh0).
            
        -   Use Cloud Enterprise Network (CEN) to allow communication between VPCs. For more information, see [Connect VPCs in the same region](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router).
            
    2.  Check whether the private IP address, CIDR block, or security group of the ECS instance is added to the whitelist of the PolarDB cluster. For more information, see [Configure a whitelist](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#98bf7f43ecbic).
        
5.  If you are using a **Public** endpoint, check whether the public IP address or security group of the ECS instance is added to the whitelist of the PolarDB cluster. For more information, see [Configure a whitelist](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#98bf7f43ecbic).
    

**Note**

Virtual hosts and lightweight servers cannot be used to connect to a PolarDB cluster by using a **Private** endpoint.

### **Why am I unable to connect to the** PolarDB **cluster** from my local environment?

Use the following steps to troubleshoot the issue:

1.  Check whether the PolarDB cluster is in the **Running** state.
    
2.  Check whether the database endpoint, port, account, and password are correct. For more information, see [Obtain the database endpoint and port](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#7ff66e95f9liw).
    
    **Note**
    
    A **Public** endpoint must be used. If you are using an ECS instance that resides in the same VPC as the PolarDB cluster, a **Private** endpoint can be used.
    
3.  Check the network conditions. You can run `ping` or `telnet` commands in your local environment to test the network connectivity.
    
4.  Check whether the public IP address or CIDR block of your local environment is added to the whitelist of the PolarDB cluster. For more information, see [Configure a whitelist](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#98bf7f43ecbic).
    
    Use the following methods to obtain the public IP address of your local environment:
    
    -   Linux: Open the CLI, enter the `curl ifconfig.me` command, and then press the Enter key.
        
    -   Windows: Open Command Prompt, enter the `curl ip.me` command, and then press the Enter key.
        
    -   macOS: Start Terminal, enter the `curl ifconfig.me` command, and then press the Enter key.
        
    
    If a proxy is used for your local network environment, the IP address obtained by the preceding method may not be your actual public IP address. You can add the `0.0.0.0/0` CIDR block to the whitelist of the PolarDB cluster. After you connect to the cluster, run the `SHOW PROCESSLIST;` command to obtain the public IP address and add it to the whitelist of the cluster. Then, delete the `0.0.0.0/0` CIDR block from the whitelist.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p901141.png)
    

### **I cannot connect to** the PolarDB **cluster. The following error is returned:** Can't connect to MySQL server on 'xxx'or Connection timed out

It is possible that the public IP address or CIDR block of the current environment is not added to the whitelist of the PolarDB cluster, or the public IP address or CIDR block added to the whitelist is incorrect.

Use the following methods to obtain the public IP address of your local environment:

-   Linux: Open the CLI, enter the `curl ifconfig.me` command, and then press the Enter key.
    
-   Windows: Open Command Prompt, enter the `curl ip.me` command, and then press the Enter key.
    
-   macOS: Start Terminal, enter the `curl ifconfig.me` command, and then press the Enter key.
    

If a proxy is used for your local network environment, the IP address obtained by the preceding method may not be your actual public IP address. You can add the `0.0.0.0/0` CIDR block to the whitelist of the PolarDB cluster. After you connect to the cluster, run the `SHOW PROCESSLIST;` command to obtain the public IP address and add it to the whitelist of the cluster. Then, delete the `0.0.0.0/0` CIDR block from the whitelist.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p901141.png)

For more information, see [Troubleshoot issues related to an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/troubleshoot-ip-whitelist-issues).

## **References**

-   [Configure a global IP whitelist template](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-global-ip-whitelist-template): You can configure one set of IP whitelist templates to manage the whitelists of all PolarDB clusters associated with the template.
    
-   [Configure a security group](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-security-group): After a security group is added, all ECS instances in the security group are added to the whitelist of the PolarDB cluster. Changes to the security group are automatically synchronized to the whitelist. You don't need to modify the whitelist of the PolarDB cluster after new ECS instances are added to the security group.
    

## Related API operations

**API**

**Description**

[DescribeDBClusterAccessWhitelist](/help/en/polardb/api-polardb-2017-08-01-describedbclusteraccesswhitelist)

Queries the IP addresses that are allowed to access a specified PolarDB for MySQL cluster.

[ModifyDBClusterAccessWhitelist](/help/en/polardb/api-polardb-2017-08-01-modifydbclusteraccesswhitelist)

Modifies the IP addresses that are allowed to access a specified PolarDB for MySQL cluster.
