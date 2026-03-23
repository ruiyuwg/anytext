Simple Log Service (SLS) and File Storage NAS (NAS) jointly launch the log analysis feature. You can use the feature to collect NAS access logs in real time. You can also query, analyze, transform, and consume the collected logs. This topic describes the assets, billing, and limits of the log analysis feature.

## Assets

-   Dedicated project and Logstore
    
    After you enable the log analysis feature, SLS creates a project named nas-Alibaba Cloud account ID-Region ID in the region where your NAS file system resides and then creates a dedicated Logstore in the project.
    
    -   General-purpose NAS file system
        
        -   If the file system uses Network File System (NFS), the Logstore is named nas-nfs.
            
        -   If the file system uses Server Message Block (SMB), the Logstore is named nas-smb-access-log.
            
    -   Extreme NAS file system
        
        The Logstore is named nas-extreme-nfs.
        
    
    **Important**
    
    -   Do not delete the project or Logstore that is related to NAS logs. Otherwise, NAS logs cannot be sent to SLS.
        
    -   If you have enabled the pay-by-ingested-data billing mode, SLS automatically creates a dedicated Logstore that uses the pay-by-ingested-data billing mode. If you want to switch the billing mode from pay-by-ingested-data to pay-by-feature, you can modify the configurations of the Logstore. For more information, see [Modify the configurations of a Logstore](/help/en/sls/manage-a-logstore#section-evc-rjx-ndb).
        
    
-   Dedicated dashboards
    
    After you enable the log analysis feature, SLS automatically creates dashboards. The following table describes the dashboards.
    
    **Note**
    
    -   Only General-purpose NAS file systems support dedicated dashboards. We recommend that you do not make changes to the dedicated dashboard because the dashboard may be upgraded or updated at any time.
        
    -   You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
        
    
    **Protocol type**
    
    **Dashboard**
    
    **Description**
    
    NFS
    
    nas-nfs-nas\_summary\_dashboard\_cn
    
    Displays information about the overall status of NAS. The information includes the number of recently accessed volumes, the number of the clients that recently access NAS, total write traffic, and total read traffic.
    
    nas-nfs-nas\_audit\_dashboard\_cn
    
    Displays information about the operations on NAS file systems. The information includes the numbers of create operations, deleted files, and read files.
    
    nas-nfs-nas\_detail\_dashboard\_cn
    
    Displays the details of NAS file systems. The details include the number of recently accessed files and operation trends.
    
    SMB
    
    nas-smb-nas\_audit\_dashboard
    
    Displays information about the file events of NAS file systems. The information includes the files that are recently created, deleted, read, and written.
    

## Billing

-   If your Logstore uses the pay-by-feature billing mode, you are charged for storage, read traffic, the number of requests, data transformation, and data shipping after the logs are collected from NAS to SLS. The fees are included in the bills of SLS. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If your Logstore uses the pay-by-ingested-data billing mode, you are charged for ingested raw data after the logs are collected from NAS to SLS. The fees are included in the bills of SLS. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
    

## Limits

You can write only NAS access logs to the dedicated Logstore of NAS. No limits are imposed on the query, analysis, and alerting features.
