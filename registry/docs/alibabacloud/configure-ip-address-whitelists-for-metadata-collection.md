To ensure that you can collect the metadata of a data source and use the category management feature in Data Map, you must enable whitelist-based access control for the data source. After whitelist-based access control is enabled for the data source, you can access the data source and collect its metadata. This topic describes how to configure IP address whitelists for metadata collection.

## Background information

The metadata collection feature allows you to collect metadata from various data sources. This way, you can manage the metadata in a centralized manner. After the metadata of a data source is collected, you can view the metadata in Data Map. Before you collect metadata from the data source, check whether whitelist-based access control is enabled for the data source. If this feature is enabled, you must add the CIDR blocks of the region where your DataWorks workspace resides to an IP address whitelist for the data source.

## **Precautions**

-   The IP address whitelist of a data source varies based on the resource group that is used to [collect the metadata](/help/en/dataworks/user-guide/metadata-collection/) of the data source.
    
    -   If you use **an exclusive resource group for Data Integration**, **an exclusive resource group for scheduling**, or **a new-version resource group (general-purpose resource group)** to collect the metadata of a data source, you do not need to refer to this topic. Instead, you can refer to [Network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity) and [Configure an IP address whitelist](/help/en/dataworks/user-guide/add-whitelist).
        
    -   If you use the **default resource group** to collect the metadata of a data source, you need to configure the IP address whitelist provided in this topic for the data source at the data source side.
        
-   The IP address whitelist provided in this topic contains public IP addresses. If you need to collect metadata over an internal network due to business or security requirements, use [an exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration), [an exclusive resource group for scheduling](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-scheduling), or [a new-version resource group (general-purpose resource group)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
-   After you configure an IP address whitelist for a data source, you can select a resource group from the Resource Group Name drop-down list in the Configure Collection Plan dialog box and click **Test Network Connectivity** to test the network connection between the data source and the resource group.
    

## Configure an IP address whitelist for metadata collection from a data source

1.  Check whether whitelist-based access control is enabled for the data source.
    
    For information about the types of data sources from which metadata can be collected, see [Metadata collection](/help/en/dataworks/user-guide/metadata-collection/#task-2313958).
    
    The method that you can use to view the IP address whitelist for metadata collection from a data source varies based on the data source type. For more information, you can [submit a ticket](https://smartservice.console.alibabacloud.com/) or consult Alibaba Cloud technical engineers.
    
    -   If whitelist-based access control is not enabled for the data source, you can directly use Data Map to collect the metadata of the data source.
        
    -   If the **default resource group** is used for metadata collection and whitelist-based access control is enabled for the data source, you must perform the next step to configure an IP address whitelist for the data source.
        
    
2.  Configure an IP address whitelist for the data source.
    
    Add the CIDR blocks or IP addresses of the region where your DataWorks workspace resides to the IP address whitelist of the data source. The following table lists the CIDR blocks or IP addresses of each region. You may need to configure IP address whitelists for different types of data sources from different entry points. For more information, you can [submit a ticket](https://smartservice.console.alibabacloud.com/) or consult Alibaba Cloud technical engineers.
    
    **Region**
    
    **CIDR block or IP address**
    
    China (Shanghai)
    
    100.104.189.64/26,11.115.110.10/24,11.115.109.9/24,47.102.181.128/26,47.102.181.192/26,47.102.234.0/26,47.102.234.64/26,100.104.38.192/26
    
    China (Hangzhou)
    
    100.104.135.128/26,11.193.215.233/24,11.194.73.32/24,118.31.243.0/26,118.31.243.64/26,118.31.243.128/26,118.31.243.192/26,100.104.242.0/26,8.139.99.192/26,8.139.112.0/26,8.139.112.64/26,8.139.112.128/26
    
    China (Shenzhen)
    
    100.104.46.128/26,11.192.91.119/24,120.77.195.128/26,120.77.195.192/26,120.77.195.64/26,47.112.86.0/26,100.104.138.128/26
    
    China (Beijing)
    
    100.104.37.128/26,11.193.82.20/24,11.197.254.171/24,39.107.223.0/26,39.107.223.64/26,39.107.223.128/26,39.107.223.192/26,100.104.152.128/26
    
    China (Chengdu)
    
    100.104.88.64/26,11.195.57.28/24,47.108.46.0/26,47.108.46.64/26,47.108.46.128/26,47.108.46.192/26,100.104.248.128/26
    
    China (Zhangjiakou)
    
    100.104.197.0/26,11.193.236.121/24,47.92.185.0/26,47.92.185.64/26,47.92.185.128/26,47.92.185.192/26,100.104.75.64/26
    
    UK (London)
    
    8.208.84.22, 100.104.161.0/26
    

## Precautions for configuring an IP address whitelist

In this section, an ApsaraDB RDS instance is used to describe the precautions for configuring an IP address whitelist. Before you add CIDR blocks to an IP address whitelist of an ApsaraDB RDS instance, take note of the following items:

ApsaraDB RDS supports standard IP address whitelists and enhanced IP address whitelists. The IP address whitelist that you configured for the ApsaraDB RDS instance may affect the connection to the instance.

-   If you configure a standard IP address whitelist for an ApsaraDB RDS instance, you must take note of the following items:
    
    -   You can add IP addresses from both the classic network and VPCs to the same IP address whitelist.
        
    -   Shared resource groups and exclusive resource groups for scheduling use the same whitelist.
        
        **Note**
        
        The IP addresses in a standard IP address whitelist can be used to access the ApsaraDB RDS instance over both the classic network and VPCs.
        
-   If you configure an enhanced IP address whitelist for an ApsaraDB RDS instance, you must take note of the following items:
    
    -   You must add IP addresses from the classic network and VPCs to different IP address whitelists.
        
        **Note**
        
        You must specify the network isolation mode of each enhanced IP address whitelist. For example, if the Network Type Allowed for Instance Access parameter is set to Classic Network/Public IP for an IP address whitelist, the IP addresses in the IP address whitelist can be used to access an ApsaraDB RDS instance only over the classic network. In this case, you cannot connect to the ApsaraDB RDS instance over VPCs from these IP addresses.
        
    -   If you use an exclusive resource group for scheduling to access the ApsaraDB RDS instance over a VPC, an IP address whitelist of the VPC type is used.
        
    -   If the ApsaraDB RDS instance resides in a VPC and you use a shared resource group to access the instance, an IP address whitelist of the VPC type is used.
        
    -   If you access the ApsaraDB RDS instance over the Internet or the classic network, an IP address whitelist of the classic network type is used.
        
-   If you switch the network isolation mode of an ApsaraDB RDS instance from the standard whitelist mode to the enhanced whitelist mode, you must take note of the following item:
    
    The standard IP address whitelist is replicated into two enhanced IP address whitelists that contain the same CIDR blocks. The two enhanced IP address whitelists have different network isolation modes.
    

Other precautions:

-   If you configure IP address whitelists for your ApsaraDB RDS instance, the workloads on the instance are not interrupted.
    
-   The IP address whitelist labeled default can be cleared, but cannot be deleted.
    
-   Do not modify or delete the IP address whitelists that are generated for other Alibaba Cloud services. If you delete these IP address whitelists, the related Alibaba Cloud services cannot connect to your ApsaraDB RDS instance. For example, if you delete the IP address whitelist **ali\_dms\_group** that is automatically generated for [Data Management (DMS)](/help/en/dms/product-overview/what-is-dms#task-1919582) or the IP address whitelist **hdm\_security\_ips** that is automatically generated for Database Autonomy Service (DAS), DMS or DAS cannot access your ApsaraDB RDS instance.
    
    **Note**
    
    We recommend that you create a separate IP address whitelist for DataWorks in your ApsaraDB RDS instance.
    
-   The IP address whitelist labeled default contains only the IP address 127.0.0.1. This indicates that all IP addresses cannot be used to access your ApsaraDB RDS instance.
    

For more information about how to configure an IP address whitelist for an ApsaraDB RDS instance, see [Use a database client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb). You can use a similar method to configure IP address whitelists for other types of data sources. To configure IP address whitelists for other types of data sources, see the related instructions.

## What to do next

After the IP address whitelists are configured and category management permissions are granted, you can collect metadata and manage categories in Data Map. For more information, see [Metadata collection](/help/en/dataworks/user-guide/metadata-collection/#task-2313958) or [Category management: Configuration management](/help/en/dataworks/user-guide/configuration-management/#task-1949654).
