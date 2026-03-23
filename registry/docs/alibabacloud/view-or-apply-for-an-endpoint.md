To connect to a PolarDB cluster, specify its endpoint. PolarDB provides private and public endpoints for the primary and cluster endpoints. This topic describes how to view and apply for an endpoint in the PolarDB console.

## Endpoints

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0161317471/CAEQORiBgICIpt24rBkiIDEyNzFlZGFlNjBhOTQ4ZmU4OGQ2MTI3ZjlkZGFlN2Q14148544_20240103153515.629.svg)

**Endpoint type**

**Description**

**Supported network types**

Cluster endpoint (recommended)

-   A PolarDB cluster has a default cluster endpoint. All requests that use this endpoint are handled by [PolarProxy](/help/en/polardb/polardb-for-oracle/cluster-endpoint/).
    
-   The default cluster endpoint supports automatic read/write splitting, where write requests are sent to the primary node while read requests are sent to read-only nodes.
    

-   Private
    
-   Public
    

Primary endpoint

A PolarDB cluster supports only one primary endpoint. The primary endpoint has the following features:

-   It always connects to the primary node and supports read and write operations.
    
-   It automatically connects to the new primary node if the primary node fails.
    

Custom endpoint

-   You can create up to five custom endpoints. All requests that use a custom endpoint are handled by [PolarProxy](/help/en/polardb/polardb-for-oracle/cluster-endpoint/).
    
-   You can configure the read/write mode and a load balancing policy for a custom endpoint. A custom endpoint supports read/write splitting or read-only workloads.
    
-   You can associate one or more read-only nodes with a custom endpoint. Requests that use the custom endpoint are sent only to the associated read-only nodes.
    

**Note**

You can associate a PolarDB custom endpoint with a single node. However, if the node fails, the endpoint may be unavailable for up to 1 hour. As such, this setup is not recommended for production environments.

## Private and public endpoints

**Network type**

**Description**

**Scenarios**

Private

-   Accessing a PolarDB cluster by using a private endpoint ensures optimal performance
    
-   When you create a cluster, a default private endpoint is created, which you can [modify](/help/en/polardb/polardb-for-oracle/modify-or-delete-an-endpoint-1#title-bgc-b3b-te0) but cannot delete.
    

For example:

-   If an Elastic Compute Service (ECS) instance is deployed in the same virtual private cloud (VPC) as the cluster, the ECS instance can connect to the cluster by using a private endpoint.
    
-   You can use Data Management (DMS) to access a cluster.
    

Public

-   You can [apply for](#title-4mg-ooh-lwm) or [delete](/help/en/polardb/polardb-for-oracle/modify-or-delete-an-endpoint-1#title-yl6-n7v-epu) a public endpoint.
    
-   Accessing a PolarDB cluster by using a public endpoint does not ensure optimal performance.
    

For example, you can connect to your cluster by using a public endpoint to perform maintenance operations.

## View endpoints and ports

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to its **Basic Information** page.
    
2.  In the **Database Connections** section of the **Basic Information** page, move your cursor over the desired endpoint. In the **Network Information** section in the dialog box that appears, you can view the endpoint and port number.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6203876471/p953278.png)
    

**Note**

If you previously connected to your cluster by using a domain name and you want to retain the original domain name after the cluster is migrated to the cloud, you can click  **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7000120171/p768716.png) > Bind Private Domain Name** to bind the private domain name. Only **Private** endpoints support binding [private domain names](/help/en/polardb/polardb-for-oracle/private-domain-names).

## Apply for a public endpoint

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to its **Basic Information** page.
    
2.  In the **Database Connections** section of the **Basic Information** page, find the desired endpoint and click **Apply** to apply for a public endpoint.
    
3.  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6203876471/p953294.png)
    
    **Note**
    
    You can apply only for **Public** endpoints. **Private** endpoints are automatically created when you create a cluster or a custom endpoint. You do not need to apply for private endpoints.
    
4.  In the dialog box that appears, set the endpoint prefix and click **OK**.
    
    **Note**
    
    The endpoint prefix must meet the following requirements:
    
    -   It must be 6 to 40 characters in length and can contain lowercase letters, digits, and hyphens (-).
        
    -   It must start with a letter and end with a digit or a letter.
        
    

## What to do next

[Connect to the cluster](/help/en/polardb/polardb-for-oracle/connect-to-polardb/)

## Related API operations

**Operation**

**Description**

[CreateDBEndpointAddress](/help/en/polardb/api-polardb-2017-08-01-createdbendpointaddress)

Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.

[DescribeDBClusterEndpoints](/help/en/polardb/api-polardb-2017-08-01-describedbclusterendpoints)

Queries the endpoints of a PolarDB cluster.
