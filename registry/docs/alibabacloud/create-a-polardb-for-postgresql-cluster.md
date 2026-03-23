This topic describes how to create a PolarDB for PostgreSQL cluster in the PolarDB console.

## Prerequisites

An Alibaba Cloud account is registered and is used to log on to the PolarDB console. For more information, see [Register and log on to an Alibaba Cloud account](/help/en/polardb/polardb-for-postgresql/register-and-log-on-to-an-alibaba-cloud-account#concept-k5l-p4q-tdb).

## Background information

-   A PolarDB for PostgreSQL cluster of Enterprise Edition or Standard Edition consists of one primary node and a maximum of 15 read-only nodes. To ensure high availability, at least one read-only node is required to implement the active-active architecture. A node is a virtual database server. You can create and manage multiple databases on a node.
    
    **Note**
    
    -   PolarDB for PostgreSQL supports only Virtual Private Cloud (VPC). Each VPC is an isolated network on Alibaba Cloud and is more secure than the classic network.
        
    -   To fully leverage the performance capabilities of PolarDB, your PolarDB cluster needs to be deployed in the same internal network with other Alibaba Cloud services. We recommend that you deploy PolarDB clusters and Elastic Compute Service (ECS) instances in the same VPC to make full use of the capabilities provided by PolarDB. If your ECS instance is deployed in a classic network, you need to migrate the instance to a VPC.
        
    
-   The PolarDB for PostgreSQL Distributed Edition cluster is a distributed database solution developed based on the PolarDB for PostgreSQL centralized edition. The cluster uses a compute node (CN) and data node (DN) two-layer architecture to decouple compute and storage and provide distributed scaling capabilities. The cluster combines the strengths of a distributed database with the proven capabilities of the PolarDB for PostgreSQL centralized edition and can meet the diverse performance and reliability requirements of enterprise-level applications.
    

## **Procedure**

For instructions about how to create a cluster, see the following topics:

-   Enterprise Edition: [Purchase a pay-as-you-go cluster](/help/en/polardb/polardb-for-postgresql/purchase-a-pay-as-you-go-cluster-2) or [Purchase a subscription cluster](/help/en/polardb/polardb-for-postgresql/purchase-a-subscription-cluster).
    
-   Standard Edition: [Purchase a pay-as-you-go cluster](/help/en/polardb/polardb-for-postgresql/buy-a-pay-as-you-go-cluster) or [Purchase a subscription cluster](/help/en/polardb/polardb-for-postgresql/purchase-package-year-package-month-cluster).
    
-   Distributed Edition: [Purchase a Distributed Edition cluster](/help/en/polardb/polardb-for-postgresql/purchase-polardb-pg-distributed-edition-cluster).
    

## Related API operations

**API**

**Description**

[CreateDBCluster](/help/en/polardb/api-polardb-2017-08-01-createdbcluster)

Creates a PolarDB cluster.

[DescribeDBClusters](/help/en/polardb/api-polardb-2017-08-01-describedbclusters)

Queries PolarDB clusters.

[DescribeDBClusterAttribute](/help/en/polardb/api-polardb-2017-08-01-describedbclusterattribute)

Queries the information about a PolarDB cluster.

[DescribeAutoRenewAttribute](/help/en/polardb/api-polardb-2017-08-01-describeautorenewattribute)

Queries the auto-renewal feature status for a subscription PolarDB cluster.

[ModifyAutoRenewAttribute](/help/en/polardb/api-polardb-2017-08-01-modifyautorenewattribute)

Configures the auto-renewal feature for a subscription PolarDB cluster.
