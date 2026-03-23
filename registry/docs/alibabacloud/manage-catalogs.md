A catalog is the top-level container for organizing metadata in Data Lake Formation (DLF). Catalogs group databases and tables into a hierarchical structure, allowing you to separate metadata across teams, manage data storage, and simplify governance.

## **Prerequisites**

Before you begin, make sure that you have:

-   [Set up DLF](/help/en/dlf/dlf-2-0/getting-started/authorize-and-activate-dlf) (one-time activation and authorization)
    
-   (RAM users) The `AliyunDLFFullAccess` permission policy, or a custom policy that includes catalog-related authorization actions. For more information, see [RAM authorization action reference](/help/en/dlf/dlf-2-0/user-guide/ram-permission-actions-for-dlf).
    
-   (RAM users) The `super_administrator` or `admin` system role, or a custom role with catalog-related data permissions. For more information, see [Configure data permissions](/help/en/dlf/dlf-2-0/getting-started/quickly-configure-permissions#b962d44888d2j).
    

**Note**

RAM users require both API permissions and data permissions to manage catalogs.

## **Limitations**

A maximum of 10 catalogs can be created per account in each region. To request an increase, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

## **Create a catalog**

1.  Log on to the [Data Lake Formation console](https://dlf-next.console.alibabacloud.com/).
    
2.  On the **Catalogs** page, click **Create Catalog**.
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Required**
    
    **Default**
    
    **Description**
    
    **Catalog Name**
    
    Yes
    
    \--
    
    A unique name for the catalog.
    
    **Description**
    
    No
    
    \--
    
    A text description for the catalog.
    
    **Storage Type**
    
    Yes
    
    Standard Storage
    
    Fixed to **Standard Storage**.
    
    **Storage Redundancy Type**
    
    Yes
    
    LRS
    
    The redundancy policy for data storage. Valid values: **LRS** and **ZRS**.
    
    **Storage Redundancy Type** options:
    
    -   **LRS** (Locally Redundant Storage): Stores data within a single zone. If the zone becomes unavailable, data is inaccessible. This is the default option.
        
    -   **ZRS** (Zone-Redundant Storage): Replicates data across multiple zones within a region, providing higher availability.
        
    
    **Important**
    
    -   After a catalog is created, the redundancy type cannot be changed from ZRS to LRS.
        
    -   ZRS provides higher data availability but incurs higher costs than LRS.
        
    
4.  Read and select **Terms of Service**, then click **Create Catalog**.
    

## **View a catalog**

1.  In the left navigation pane, click **Catalogs**.
    
2.  Click the name of the catalog to open its detail page.
    
3.  On the **Details** tab, view the basic information of the catalog.
    
4.  Click the **Permissions** tab to grant catalog-level permissions to DLF users or roles. For more information, see [Manage data authorizations](/help/en/dlf/dlf-2-0/user-guide/manage-data-permissions).
    
5.  Click the **Storage Optimization** tab to configure storage tiering. For more information, see [Configure storage optimization](#5c2f8ef27fc21).
    
6.  Click the **Catalog Configuration** tab to set up a lifecycle policy for file fragments and overwrite default properties for creating Paimon tables. For more information, see [Configure catalog settings](#d73e5a839b3hk).
    

## **Delete a catalog**

**Important**

Before you delete a catalog, delete all tables from the `default` database and all other user-created databases within the catalog.

1.  On the **Catalogs** page, find the target catalog and click **Delete** in the **Actions** column.
    
2.  In the dialog box, click **OK**.
    

## **Configure storage optimization**

On the **Storage Optimization** tab, configure **Intelligent Tiering** to automatically tier hot and cold data across all tables in a catalog based on lifecycle rules.

### Catalog-level and table-level behavior

-   **Catalog-level**: When enabled at the catalog level, **Intelligent Tiering** applies automatically to all tables in the catalog and inherits catalog settings. Table-level settings can override catalog-level settings, but doing so removes the "Inherited from Catalog" status for that table.
    
-   **Table-level**: Even if catalog-level **Intelligent Tiering** is disabled, you can enable and configure it independently for individual tables.
    

### Tiering strategy

**Strategy**

**Description**

**Last Access Time**

Rules are triggered based on the last access time of table or partition data.

**Last Update Time**

Rules are triggered based on the last update time of table or partition data.

### Tiering rules

Configure rules to transition data between storage classes automatically. The minimum storage duration varies by storage class.

**Rule**

**Default (days)**

**Description**

**Transition to Infrequent Access**

30

Moves data to the Infrequent Access (IA) storage class after the specified number of days. Data in IA storage remains accessible by compute engines, but with reduced performance.

**Transition to Archive**

60

Moves data to the Archive storage class after the specified number of days. Data in Archive storage is inaccessible by compute engines.

**Transition to Cold Archive**

180

Moves data to the Cold Archive storage class after the specified number of days. Data in Cold Archive storage is inaccessible by compute engines.

For **Transition to Infrequent Access** and **Transition to Archive**, an additional option is available:

-   **Convert to Standard Storage Upon Access**: DLF automatically converts the partition or non-partitioned table back to the Standard storage class when accessed.
    

**Note**

The **Convert to Standard Storage Upon Access** option is only available when **Tiering Strategy** is set to **Last Access Time**.

## **Configure catalog settings**

On the **Catalog Configuration** tab, configure the following catalog-level settings.

### File fragment lifecycle

Specify the expiration time for file fragments. The minimum value is 1 day. Expired fragments are automatically deleted and cannot be recovered.

### Advanced settings

Overwrite the default properties for creating Paimon tables. For more information, see [Paimon Table](/help/en/dlf/dlf-2-0/user-guide/manage-paimon-tables).

## Next steps

-   [Manage data authorizations](/help/en/dlf/dlf-2-0/user-guide/manage-data-permissions): Grant catalog-level permissions to users and roles.
    
-   [Paimon Table](/help/en/dlf/dlf-2-0/user-guide/manage-paimon-tables): Create and manage Paimon tables within a catalog.
