An Elastic Compute Service (ECS) security group is a virtual firewall that is used to control the inbound and outbound traffic of ECS instances in the security group. This topic describes how to configure the security group settings of PolarDB to allow the ECS instances in a security group to access a PolarDB for PostgreSQL (Compatible with Oracle) cluster.

## Scenarios

After you create a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you cannot connect to the cluster from ECS instances. You must configure a security group for the PolarDB for PostgreSQL (Compatible with Oracle) cluster. Then, you can access the PolarDB for PostgreSQL (Compatible with Oracle) cluster from the ECS instances in the security group.

**Note**

-   For more information about security groups and how to configure a security group in the ECS console, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).
    
-   You can configure both IP whitelists and security groups. After you add IP addresses to IP whitelists and add ECS instances to security groups of a PolarDB for PostgreSQL (Compatible with Oracle) cluster, the specified IP addresses and ECS instances can access the cluster.
    

## Precautions

-   You can only add ECS security groups of the same network type as that of the PolarDB for PostgreSQL (Compatible with Oracle) cluster. For example, if your PolarDB cluster is deployed in a virtual private cloud (VPC), you can add only security groups of the VPC type.
    
-   You can create up to 10 security groups for each PolarDB for PostgreSQL (Compatible with Oracle) cluster.
    
-   When you configure a security group for the PolarDB for PostgreSQL (compatible with Oracle) cluster, only the IP addresses of ECS instances in the security group are added to the whitelist of the cluster, regardless of the rules of the ECS security group.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  Find the cluster and click its ID.
    
5.  In the left-side navigation pane, choose **Settings and Management** > **Cluster Whitelists**.
    
6.  On the **Cluster Whitelists** page, you can click **Select Security Group** to add a security group. You can also click **Configure** in the **Actions** column to change the security groups.
    
    ![安全组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6974511071/p186889.png)
    
7.  In the **Select Security Group** panel, select one or more security groups and click **OK**.
    
    ![选中](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5974511071/p186892.png)
    

## Related API operations

**Operation**

**Description**

[DescribeDBClusterAccessWhitelist](/help/en/polardb/polardb-for-mysql/api-describedbclusteraccesswhitelist#doc-api-polardb-DescribeDBClusterAccessWhitelist)

Queries the IP addresses that are allowed to access a specified PolarDB cluster.

[ModifyDBClusterAccessWhitelist](/help/en/polardb/polardb-for-mysql/api-modifydbclusteraccesswhitelist#doc-api-polardb-ModifyDBClusterAccessWhitelist)

Modifies the IP addresses that are allowed to access a specified PolarDB cluster.
