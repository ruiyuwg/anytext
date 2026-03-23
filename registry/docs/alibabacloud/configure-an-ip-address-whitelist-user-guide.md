To ensure the security and stability of AnalyticDB for PostgreSQL databases, AnalyticDB for PostgreSQL instances block access from all IP addresses by default. Before you can use an AnalyticDB for PostgreSQL instance, you must add the IP addresses or CIDR blocks of your client to a whitelist of the AnalyticDB for PostgreSQL instance. A properly configured IP address whitelist can make your AnalyticDB for PostgreSQL instance more secure. We recommend that you maintain IP address whitelists on a regular basis.

## Preparations

Before you configure a whitelist for an AnalyticDB for PostgreSQL instance, you must obtain the IP addresses of your client based on its installation location by using the following methods.

**Client installation location**

**Network type**

**How to obtain IP addresses**

[ECS instance](/help/en/ecs/user-guide/what-is-ecs) (recommended)

VPC

Check the IP address of the Elastic Computer Service (ECS) instance. For more information, see the "[How do I query the IP addresses of ECS instances?](/help/en/ecs/user-guide/network-faq/#li-co5-68x-dfz)" section of the Network FAQ topic.

**Note**

Make sure that the ECS and AnalyticDB for PostgreSQL instances reside in the same virtual private cloud (VPC). The VPC IDs of the two instances must be the same. If the VPC IDs are different, change the VPC of the ECS instance. For more information, see [Change the VPC of an ECS instance](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance).

On-premises device or third-party cloud

Internet

The method that is used to obtain the public IP address of the on-premises device may vary based on your network environment or operating system.

-   Linux: Open the CLI, enter the `curl ifconfig.me` command, and then press Enter.
    
-   Windows: Visit [query my IP](https://www.ip138.com/) on the on-premises device to obtain its public IP address.
    
-   macOS: Start Terminal, enter the `curl ifconfig.me` command, and then press Enter.
    

## Procedure

1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).
2.  In the upper-left corner of the console, select a region.
3.  Find the instance that you want to manage and click the instance ID.
4.  In the left-side navigation pane, click **Security Controls**.
    
5.  On the **Security Controls** page, perform the following operations:
    
    -   Create a whitelist
        
        1.  Click **Create Whitelist**.
            
        2.  In the **Create Whitelist** panel, configure the parameters that are described in the following table.
            
            **Parameter**
            
            **Description**
            
            **Whitelist Name**
            
            The name of the whitelist.
            
            -   The name can contain lowercase letters, digits, and underscores (\_).
                
            -   The name must start with a lowercase letter and end with a lowercase letter or a digit.
                
            -   The name must be 2 to 32 characters in length.
                
            
            **IP Addresses**
            
            The IP addresses or CIDR blocks that are allowed to access the instance.
            
            -   Separate multiple IP addresses with commas (,). A maximum of 999 unique IP addresses can be specified.
                
            -   You can enter specific IP addresses such as 10.23.12.24 and [CIDR blocks](/help/en/vpc/faq-about-cidr-blocks#section-hlx-k34-tdb) such as 10.23.12.24/24. /24 indicates the length of the IP address prefix. An IP address prefix can be 1 to 32 bits in length.
                
            -   If you set the prefix length to 0, for example, 0.0.0.0/0 or 127.0.0.1/0, all IP addresses are allowed to access the instance. This poses a high security risk. Proceed with caution.
                
            -   The IP address 127.0.0.1 indicates that no external IP addresses are allowed to access the instance.
                
            
        3.  Click **OK**.
            
    -   Modify a whitelist
        
        1.  Find the whitelist that you want to modify and click **Modify**.
            
        2.  In the Modify Whitelist panel, add or remove IP addresses or CIDR blocks in the **IP Addresses** section.
            
            **Note**
            
            You cannot modify the **Whitelist Name**.
            
        3.  Click **OK**.
            
    -   Delete a whitelist
        
        **Note**
        
        The default whitelist cannot be deleted.
        
        1.  Find the whitelist that you want to delete and click **Delete**.
            
        2.  In the **Delete Whitelist** message, click **OK**.
            
    -   Clear the default whitelist
        
        1.  Click **Clear** to the right of the default whitelist.
            
        2.  In the **Clear Whitelist** message, click **OK**.
            
            After you clear the default whitelist, it contains only 127.0.0.1.
            
    

## Related operations

**Operation**

**Description**

[DescribeDBInstanceIPArrayList](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describedbinstanceiparraylist)

Queries the IP addresses that are allowed to access an instance.

[ModifySecurityIps](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-modifysecurityips)

Modifies the IP addresses that are allowed to access an instance.
