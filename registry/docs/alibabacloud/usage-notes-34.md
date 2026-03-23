Simple Log Service (SLS) and Alibaba Cloud Virtual Private Cloud (VPC) jointly provide the flow log feature. Use the feature to record the traffic of a VPC, the traffic of an elastic network interface (ENI) in the VPC, and the traffic of a vSwitch in the VPC. You can check access control rules, monitor network traffic, and troubleshoot network errors based on the flow logs. This topic describes the assets, billing, and limits of the flow log feature.

## Feature description

Use the flow log feature to capture the network traffic of a specific ENI, VPC, or vSwitch. If you enable the flow log feature for a VPC or a vSwitch, traffic that is transferred over the ENIs in the VPC or the vSwitch is captured. The ENIs that are created after the flow log feature is enabled are included.

The flow log feature captures traffic, records the traffic information in logs, and then sends the logs to SLS. Each log records a five-tuple of network traffic that is captured within a specific time window. The time window is approximately 10 minutes. During the time window, the flow log feature aggregates traffic data and sends the traffic data as logs to SLS. For more information about the fields in flow logs, see [Log fields](/help/en/sls/log-fields-27#task-1357837).

## Assets

-   Custom project and logstore
    
    **Important**
    
    -   Do not delete the project or logstore that is related to VPC flow logs. Otherwise, VPC flow logs cannot be sent to SLS.
        
    -   When you create a custom logstore, take note that billable items that are involved vary based on the billing mode of the logstore. For more information, see [Billable items](/help/en/sls/billing-item/#main-2351612).
        
    -   If you select Enable Log Analysis Report when you enable the flow log feature, the data retention period of the logstore that stores VPC flow logs is forcefully changed to seven days.
        
    
-   Dedicated dashboards
    
    By default, SLS generates three dashboards after you enable the feature.
    
    **Note**
    
    Do not make changes to the dedicated dashboards because the dashboards may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    _Logstore Name_\-vpc\_flow\_log\_traffic\_cn
    
    Displays the overall traffic information about a VPC. The information includes Source Address Heat Map by Bytes, Top 10 Flow by Bytes, and Top 10 Action/Protocol by Bytes.
    
    _Logstore Name_\-vpc\_flow\_log\_rejection\_cn
    
    Displays information about the traffic that is rejected by security groups and network access control lists (ACLs). The information includes Total REJECT Bytes, REJECT Bytes Ratio, Total REJECT Packets, and REJECT Packets Ratio.
    
    _Logstore Name_\-vpc\_flow\_log\_overview\_cn
    
    Displays the overall information about a VPC. The information includes Total Actions, Total ACCEPT Bytes, Total REJECT Bytes, and Total ACCEPT Packets.
    

## Billing

The flow log feature allows you to deliver only the network logs that are extracted to SLS. When you use the flow log feature, you are charged for SLS usage and network log extraction.

-   Fees for network log extraction
    
    You are charged based on the data amount of network logs that are extracted. The fees are included in the bills of VPC. For more information, see [Billing of flow logs](/help/en/vpc/user-guide/billing-of-flow-logs#concept-2234514).
    
-   Fees for SLS usage
    
    -   If the dedicated logstore uses the pay-by-feature billing mode, you are charged for storage, read traffic, number of requests, data transformation, and data shipping after the flow logs are collected from VPC to SLS. The fees are included in the bills of SLS. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
        
    -   If the dedicated logstore uses the pay-by-ingested-data billing mode, you are charged for storage of raw data that is written after the flow logs are collected from VPC to SLS. The fees are included in the bills of SLS. For more information, see [Billable items for the pay-by-ingested-data mode](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
        

## Limits

-   Supported regions
    
    The VPC that you use must reside in the same region as the project that you specify in SLS. The following table describes the regions in which the flow log feature is supported.
    
    **Area**
    
    **Supported region**
    
    Asia Pacific
    
    China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok)
    
    Europe & Americas
    
    Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia)
    
    Middle East
    
    UAE (Dubai)
    
-   Resources
    
    **Quota name**
    
    **Description**
    
    **Default limit**
    
    **Increase quota**
    
    **vpc\_quota\_flowlog\_inst\_nums\_per\_user**
    
    The number of flow log instances that can be created by a user.
    
    10
    
    Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page or [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=peer) to request a quota increase.
    
-   Use the flow log feature to capture the traffic of a VPC, the traffic of an ENI in the VPC, and the traffic of a vSwitch in the VPC. If you enable the flow log feature for a VPC, ENIs in the VPC, and vSwitches in the VPC, only one set of flow logs is generated.
