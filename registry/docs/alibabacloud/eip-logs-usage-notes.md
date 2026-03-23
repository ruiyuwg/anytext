Simple Log Service and Elastic IP Address (EIP) jointly launch the fine-grained monitoring feature to send fine-grained monitoring data of network bandwidth as logs to Simple Log Service. You can use the fine-grained monitoring feature to monitor the fluctuations in the Internet service traffic and adjust the peak bandwidth of an EIP at the earliest opportunity. This topic describes the assets, billing, and limits of the fine-grained monitoring feature.

## Features

A large amount of Border Gateway Protocol (BGP) traffic over the Internet flows through EIPs. BGP traffic is time-sensitive and requires high-quality Internet bandwidth. If the Internet bandwidth usage of an EIP reaches 100% but the bandwidth specification is not upgraded, throttling may be triggered on BGP traffic and packet loss may occur. As a result, client performance and user experience are severely degraded. The fine-grained monitoring feature allows you to monitor traffic fluctuations in real time and adjust the peak bandwidth of an EIP to prevent high response latency caused by limited bandwidth.

The fine-grained monitoring feature allows you to view the following monitoring data:

-   Outbound and inbound peak bandwidth of an EIP per second
    
    Unit: bit/s
    
-   Outbound and inbound packets of an EIP per second
    
    Unit: packets per second (PPS)
    
-   Outbound and inbound lost packets of an EIP per second
    
    Unit: PPS
    
-   New inbound and outbound TCP connections of an EIP per second
    
    Unit: PPS
    

## Assets

-   Custom project and logstore
    
    **Important**
    
    -   Before you disable the fine-grained monitoring feature, do not delete the project or logstore that is related to EIP logs. Otherwise, EIP logs cannot be sent to Simple Log Service.
        
    -   When you create a custom logstore, note that billable items that are involved vary based on the billing mode of the logstore. For more information, see [Billable items](/help/en/sls/billing-item/#main-2351612).
        
    -   After you enable the fine-grained monitoring feature, the data retention period of the custom logstore that is related to an EIP is forcefully changed to 7 days.
        
    
-   Dedicated dashboard
    
    By default, Simple Log Service generates a dashboard after you enable the feature.
    
    **Note**
    
    We recommend that you do not make changes to the dedicated dashboard because the dashboard may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    _eip\_monitoring_
    
    Allows you to monitor the fluctuations of Internet data transfer in real time. These fluctuations include the peak inbound and outbound bandwidth per second, inbound and outbound packet rates per second, inbound and outbound packet loss rates per seconds, and inbound and outbound TCP session establishment rates.
    

## Billing

-   You are not charged when you use the logging feature of EIP.
    
-   If the custom logstore uses the pay-by-feature billing mode, you are charged for storage, read traffic, number of requests, data transformation, and data shipping after the logs are collected from EIP to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If the custom logstore uses the pay-by-ingested-data billing mode, you are charged for the ingested raw data volume after the logs are collected from EIP to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
    

## Limits

-   The Simple Log Service project that stores EIP logs must reside in the same region as the elastic IP address (EIP).
    
-   You can use an Alibaba Cloud account to enable the fine-grained monitoring feature for a maximum of 10 EIPs.
    
    If you need to enable the fine-grained monitoring feature for more EIPs, you must submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
