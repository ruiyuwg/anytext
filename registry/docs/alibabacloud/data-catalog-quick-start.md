This guide walks you through creating your first catalog in Data Lake Formation (DLF), then shows how to ingest and analyze data in your data lakehouse.

## Prerequisites

Before you begin, make sure that you have:

-   Completed the [DLF setup](/help/en/dlf/dlf-2-0/getting-started/authorize-and-activate-dlf) (activation and authorization, required only once)
    
-   (If using a RAM user) The following permissions:
    
    -   **API permissions:** The `AliyunDLFFullAccess` permission policy, or a policy that includes catalog-related authorization actions. For details, see [RAM authorization action reference](/help/en/dlf/dlf-2-0/user-guide/ram-permission-actions-for-dlf).
        
    -   **Data permissions:** The `super_administrator` or `admin` system role, or a custom role with catalog-related permissions. For details, see [Configure data permissions](/help/en/dlf/dlf-2-0/getting-started/quickly-configure-permissions).
        

## Create a catalog

A catalog is the top-level container for organizing metadata in your data lakehouse. When you create a catalog, choose a storage redundancy type based on your use case, data volumes, availability, and budget requirements.

1.  Log on to the [DLF console](https://dlf-next.console.alibabacloud.com/).
    
2.  On the **Catalogs** page, click **Create Catalog**.
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Catalog Name**
    
    A unique name for the catalog.
    
    **Description**
    
    A description of the catalog.
    
    **Storage Type**
    
    Fixed to **Standard Storage**.
    
    **Storage Redundancy Type**
    
    The redundancy policy for your data. See the following table for details.
    
    **Storage redundancy options:**
    
    **Option**
    
    **Behavior**
    
    **Default**
    
    **LRS** (Locally Redundant Storage)
    
    Stores data in a single zone. If the zone becomes unavailable, data is inaccessible.
    
    Yes
    
    **ZRS** (Zone-Redundant Storage)
    
    Replicates data across multiple zones within a region for higher data availability. Incurs higher costs than LRS.
    
    No
    
    **Important**
    
    After a catalog is created, you cannot change the redundancy type from ZRS to LRS.
    
4.  Read and select the **Terms of Service**, then click **Create Catalog**.
    

For more information, see [Manage catalogs](/help/en/dlf/dlf-2-0/user-guide/manage-catalogs).

## Ingest data into your data lakehouse

After you create a catalog, sync raw data to your data lakehouse by using tools such as Flink CDC and DataWorks Data Integration.

## Analyze data in your data lakehouse

Query and extract insights from your data lakehouse by using the following engines:

-   **EMR Serverless Spark** -- batch read and write operations
    
-   **Realtime Compute for Apache Flink** -- streaming read and write operations
    
-   **EMR Serverless StarRocks** -- extract insights from data
    

## Next steps

-   [Manage catalogs](/help/en/dlf/dlf-2-0/user-guide/manage-catalogs) -- create, modify, and delete catalogs
    
-   [Configure data permissions](/help/en/dlf/dlf-2-0/getting-started/quickly-configure-permissions) -- set up roles and access control
    
-   [RAM authorization action reference](/help/en/dlf/dlf-2-0/user-guide/ram-permission-actions-for-dlf) -- review available permission actions
