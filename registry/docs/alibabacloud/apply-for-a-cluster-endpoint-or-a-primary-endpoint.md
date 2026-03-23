You can use a cluster endpoint or the primary endpoint of a PolarDB cluster to connect to the cluster. This topic describes how to apply for and manage cluster endpoints or primary endpoints.

## **Preparations**

You can connect to the cluster and view its information by performing the steps in [Database connection](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/) before you manage the database endpoint.

## View the endpoint and port number

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/)..
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the **Database Connections** section of the **Basic Information** page, move the pointer over the endpoint to view the **Network Information** in the dialog box that appears, including the endpoint and port number.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768700.png)
    

**Note**

-   If you use a domain name to connect to a database, you can click **Bind Private Domain Name** to bind the domain name to a private endpoint. This allows you to retain the original database domain name after the database is migrated to the cloud. Only **Private** endpoints can be bound to private domain names. For more information, see [Private domain names](/help/en/polardb/polardb-for-mysql/user-guide/private-domain-names#task-2473542).
    
-   The default port number of an endpoint that is used by a PolarDB cluster is 3306. You can change the port number. For more information, see [Change the endpoint of a cluster](#section-ljw-83w-f13).
    

## Apply for a public cluster endpoint or a primary endpoint

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the **Database Connections** section of the **Basic Information** page, find the endpoint and click **Apply** on the right of **Public**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768704.png)
    
    **Note**
    
    You can apply only for **Public** endpoints. After you create a cluster, a default **Private** endpoint is generated. You do not need to apply for this endpoint.
    
5.  In the dialog box that appears, specify a prefix for the endpoint and click **OK**.
    
    **Note**
    
    The prefix of the endpoint must meet the following requirements:
    
    -   It must be 6 to 40 characters in length and can contain lowercase letters, digits, and hyphens (-).
        
    -   It must start with a lowercase letter and end with a digit or letter.
        
    
    After an application for the cluster endpoint is approved, all features that can be provided by PolarProxy are supported. You can modify the parameter settings of the features provided by PolarProxy based on your business requirements. For more information, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301).
    

## Create a custom cluster endpoint

In the **Database Connections** section of the **Basic Information** page, click **Create Custom Cluster Endpoint**. In the dialog box that appears, create a custom cluster endpoint and configure the features provided by PolarProxy for the custom cluster endpoint. For more information, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768493.png)

**Note**

PolarDB for MySQL Cluster Edition allows you to specify a VPC and a vSwitch when you create an endpoint. For more information, see [Change the VPC and vSwitch for a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/change-the-vpc-and-vswitch).

## Change the endpoint of a cluster

In the **Database Connections** section of the **Basic Information** page, find the endpoint and choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768716.png) > **Edit** on the right of **Private** or **Public** to modify the endpoint.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768715.png)

**Important**

-   The prefix of the endpoint must meet the following requirements:
    
    -   It must be 6 to 40 characters in length and can contain lowercase letters, digits, and hyphens (-).
        
    -   It must start with a lowercase letter and end with a digit or letter.
        
-   The port number must be within the range of 3000 to 5999.
    
-   If SSL is enabled for the endpoint, the cluster restarts after you modify the endpoint.
    
-   If SSL is enabled for the endpoint, the total length of the new endpoint cannot exceed 64 characters.
    

**Note**

PolarDB for MySQL Cluster Edition allows you to change the VPC and vSwitch of a single endpoint. For more information, see [Change the VPC and vSwitch for a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/change-the-vpc-and-vswitch).

## Delete an endpoint

**Important**

-   Before you delete an endpoint, make sure that your application is connected to the cluster by using another endpoint.
    
-   The deleted endpoint cannot be restored. You can click **Apply** next to the required endpoint type in the console to apply for a new endpoint.
    
-   The default cluster endpoint can be modified but cannot be deleted. Custom cluster endpoints can be deleted.
    

In the **Database Connections** section of the **Basic Information** page, find the endpoint and click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768716.png) > **Release** on the right of **Public** to release the endpoint.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768722.png)

**Note**

Only **Public** endpoints can be released.

## What to do next

[Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301)

## Related API operations

**Operation**

**Description**

[DescribeDBClusterEndpoints](/help/en/polardb/api-polardb-2017-08-01-describedbclusterendpoints)

Queries the endpoints of a specified PolarDB cluster.

[CreateDBEndpointAddress](/help/en/polardb/api-polardb-2017-08-01-createdbendpointaddress)

Creates a public endpoint for a specified PolarDB cluster.

[ModifyDBEndpointAddress](/help/en/polardb/api-polardb-2017-08-01-modifydbendpointaddress)

Modifies the endpoints of a PolarDB cluster.

[DeleteDBEndpointAddress](/help/en/polardb/api-polardb-2017-08-01-deletedbendpointaddress)

Deletes the public endpoints of a PolarDB cluster.
