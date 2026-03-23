A global database network (GDN) replicates data across regions for cross-region disaster recovery or active geo-redundancy.

## Prerequisites

Before you begin, make sure that you have a PolarDB for Oracle cluster with the following configuration:

-   Database engine: Oracle-compatible 2.0
    
-   Edition: Enterprise Edition
    
-   High-availability mode: Single zone with **Hot standby storage cluster** disabled
    

## Supported regions

GDN supports more than 10 regions worldwide. The available regions for a secondary cluster depend on the primary cluster location.

**Primary cluster location**

**Secondary cluster regions**

Chinese mainland

Same region as the primary cluster, or any other region in the Chinese mainland. To request additional regions, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).

Outside the Chinese mainland

China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London).

**Important**

For regions outside the Chinese mainland, sign the [Cross-Border Data Transfer Compliance Agreement](https://page-intl.aliyun.com/form/act866838213/index.htm) before creating a secondary cluster.

## Limitations

-   A GDN supports one primary cluster and up to four secondary clusters.
    
-   The primary and secondary clusters must use the same database engine version: Oracle-compatible 2.0.
    
-   Node specifications of a secondary cluster must be greater than or equal to those of the primary cluster. We recommend that you use the same specifications.
    
-   Each cluster can belong to only one GDN.
    
-   Clusters in a GDN do not support the [serverless feature](/help/en/polardb/polardb-for-oracle/serverless/).
    
-   Clusters in a GDN do not support database and table restoration.
    

## Billing

Cross-region data transmission within a GDN is free. Pay only for the PolarDB [clusters](/help/en/polardb/polardb-for-oracle/billable-items).

## Create a GDN

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Global Database Network**.
    
3.  On the **Global Database Network** page, click **Create GDN**.
    
4.  In the **Create GDN** dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Compatibility**
    
    Select **Oracle**.
    
    **Version**
    
    The value is fixed to **Active-passive**.
    
    **Name**
    
    The name of the GDN. We recommend that you specify a descriptive name for easy identification. The name does not need to be unique.
    
    **Primary Region**
    
    The region of the primary cluster. Determine which cluster to use as the primary cluster, then select the corresponding region.
    
    **Primary Cluster**
    
    Select an existing cluster as the primary cluster of the GDN.
    
5.  Click **OK**.
    

The GDN appears on the **Global Database Network** page. To complete the setup, add a secondary cluster to the GDN.

## Delete a GDN

**Important**

-   You can delete a GDN only if it contains only the primary cluster. Remove all secondary clusters first.
    
-   A deleted GDN cannot be recovered.
    
-   After you delete a GDN, applications connected to it can no longer access the database. Update the connection code in your applications immediately.
    

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Global Database Network**.
    
3.  Find the target GDN and click **Delete** in the **Actions** column.
    
    **Note**
    
    If **Delete** is grayed out, the GDN still contains secondary clusters. Remove them before deleting the GDN.
    
4.  Read the notes in the dialog box, then click **OK**.
    

## FAQ

**How many GDNs can an account create?**

There is no limit.

**Can I change the primary cluster after creating a GDN?**

Yes. You can switch the primary cluster for the target GDN in the PolarDB console.

## References

-   [Global Database Network (GDN)](/help/en/polardb/polardb-for-oracle/global-database-gdn/): GDN architecture and common use cases.
    
-   [Add and manage a secondary cluster](/help/en/polardb/polardb-for-oracle/adding-and-managing-slave-clusters): Add a secondary cluster to a GDN.
    
-   [Connect to a global database network](/help/en/polardb/polardb-for-oracle/connect-to-the-global-database-network): Connection methods for a GDN.
    

## API reference

**API**

**Description**

[CreateGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-createglobaldatabasenetwork)

Create a GDN.

[DeleteGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-deleteglobaldatabasenetwork)

Delete a GDN.

[DescribeGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-describeglobaldatabasenetwork)

Query details of a specific GDN.

[DescribeGlobalDatabaseNetworks](/help/en/polardb/polardb-for-mysql/api-describeglobaldatabasenetworks#doc-api-polardb-DescribeGlobalDatabaseNetworks)

Query all GDNs.

[ModifyGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-modifyglobaldatabasenetwork)

Modify GDN settings.
