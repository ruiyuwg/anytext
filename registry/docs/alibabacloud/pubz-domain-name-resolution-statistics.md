The **Domain Statistics** feature of **Public Zone** provides detailed resolution statistics for domain names and subdomains. You can use this feature to identify resolution issues for specific domain names and optimize their resolution performance.

## **Scenarios**

-   View the query volume rankings for specific domain names.
    
-   Locate subdomains with sudden spikes or drops in query volume.
    
-   Analyze the sources of resolution queries and line hit rates for specific domain names.
    
-   Optimize the resolution configuration for individual domain names.
    

## **Procedure**

1.  Go to the [Alibaba Cloud DNS - Statistics Dashboard](https://dnsnext.console.alibabacloud.com/dashboard).
    
2.  By default, the **Resolution Dashboard** > **Public Zone** tab is selected.
    
3.  On the right, switch to the **Domain Statistics** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1045932.png)
    
4.  In the upper-right corner of the module, click the drop-down list to select a DNS resolution cluster. The page then displays the data for the selected cluster.
    

## **Module description**

### **1\.** **Overview**

**Important**

The data for this feature comes from domain names that have DNS network traffic analysis enabled. Ensure that DNS network traffic analysis is enabled for at least one domain name.

**Metric name**

**Description**

Number of subdomains with query volume spikes in the last 24 hours

Displays the number of subdomains that have a sudden increase in query volume within the last 24 hours. You can use this metric to quickly identify domain names with unusual traffic.

Number of subdomains with query volume drops in the last 24 hours

Displays the number of subdomains that have a sudden decrease in query volume within the last 24 hours. You can use this metric to quickly identify domain names with unusual drops in traffic.

Number of subdomains with negative responses in the last 24 hours

Displays the number of subdomains that received negative responses within the last 24 hours. You can use this metric to identify domain names that may have configuration issues.

In the Overview section, you can perform the following operations:

-   Click **Set Period** to set the statistical period for the overview data (daily, weekly, or monthly).
    
-   In the upper-right corner of the page, use the drop-down list to **select a DNS resolution cluster**. This lets you analyze metric data by region to accurately identify traffic exceptions.
    
-   Click **Alert Notifications** to configure alert notification rules.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1048212.png)

### **2\.** **Statistics Summary**

This section provides the following two rankings:

**Ranking**

**Description**

Domain name query volume ranking

Ranks domain names by resolution query volume and displays a list of the domain names with the highest query volumes. You can sort by resolution query volume and view the network traffic analysis status for each domain name.

Subdomain query volume ranking

Ranks subdomains by resolution query volume and displays a list of the subdomains with the highest query volumes. You can sort by resolution query volume, view the network traffic analysis status for each subdomain, and quickly navigate to domain name monitoring.

You can perform the following operations:

-   In the time range selector, select a time range to view (Today or Custom time range).
    
-   From the domain name drop-down list, select a specific domain name to filter the results.
    
-   From the sorting drop-down list, select a sorting method.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1048473.png)

### **3\.** **Statistics Details**

In the Domain name resolution statistics details section, you can perform the following operations:

-   In the time range selector, select a time range to view (Today or Custom time range).
    
-   From the domain name drop-down list, select a specific domain name to filter the results.
    
-   Switch between tabs to view statistical data from different dimensions.
    

## **Query Volume**

**Note**

Domain names that use a paid DNS edition or have [DNS network traffic analysis enabled](/help/en/dns/yw-domain-name-on-off-traffic-analysis#9055d9cf6fe53) are included in the query volume ranking.

This tab contains the following:

-   **Domain Name Query Volume Statistics**: Displays a trend chart of queries per second (QPS) for the selected domain name.
    
-   **Subdomain Query Volume Ranking**: Displays the query volume ranking for each subdomain of the selected domain name. This section also provides a quick link to domain name monitoring.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1048221.png)

**Usage recommendations**

To determine if DNS resolution traffic has been migrated to **Public Zone**, you can use this feature to check the resolution query data for the domain name. If the resolution query volume gradually increases, it indicates that resolution traffic is being directed to **Public Zone** after the migration.

## **Query Sources**

**Important**

The data for the **Global Statistics** feature is collected from domain names that have DNS network traffic analysis enabled. Ensure that DNS network traffic analysis is enabled for at least one domain name.

This tab displays the distribution of resolution query sources, with data organized by dimensions such as geographic location and ISP.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1048232.png)

**Usage recommendations**

Use the resolution query source analysis feature to determine which regional resolution requests are being routed to **Public Zone**. If some regions or ISPs show no traffic, it may be because the local ISP's DNS cache has not expired. This would prevent resolution traffic from the local network from being directed to the Alibaba Cloud public authoritative DNS servers.

## **Resolution Route Analysis**

**Important**

The data for the **Global Statistics** feature is collected from domain names that have DNS network traffic analysis enabled. Ensure that DNS network traffic analysis is enabled for at least one domain name.

This tab displays the hit rates of resolution lines, including an analysis of the usage of custom and default lines.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1048238.png)

**Usage recommendations**

If you configured smart DNS resolution lines for a domain name, for example, by adding a fine-grained resolution policy, you can use the **Resolution Route Analysis** feature to check whether the new resolution line is receiving query hits. This helps you determine whether the resolution policy is receiving DNS traffic.

## **Rtype and Rcode Analysis**

**Important**

The data for the **Global Statistics** feature is collected from domain names that have DNS network traffic analysis enabled. Ensure that DNS network traffic analysis is enabled for at least one domain name.

This tab contains the following:

-   **Query Type**: Displays statistics and distribution for different DNS request types, such as A, AAAA, and CNAME.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7739819671/p1048239.png)
    
-   **Denied Response Type**: Displays statistics and distribution for negative responses, such as NXDOMAIN and NODATA.
    
    **Note**
    
    Type descriptions:
    
    -   NXDOMAIN (Non-Existent Domain): The queried domain name does not exist.
        
    -   NXRRSET: The domain name exists, but the requested record type (RRset) does not. This is also known as a NODATA scenario.
        
    -   SERVFAIL (Server Failure): The query could not be processed because of a problem with the target DNS server.
        
    -   REFUSED: The DNS server refuses to perform the specified operation for policy reasons. For example, the server may refuse to provide resolution to a specific requester or perform a specific operation on the specified data, such as a zone transfer.
        
        You may want to provide resolution for specific requesters, or prevent certain operations, such as a zone transfer, on specified data.
        
    -   FORMERR (Format Error): The DNS server could not interpret the query request.
        
    -   NOTIMP (Not Implemented): The DNS server does not support the requested query type.
        
    
    1.  Click a negative response type card.
        
    2.  The table in the upper-right section aggregates data by domain name and displays the data in descending order of detection count.
        
    3.  Click **View** in the Actions column for a domain name. The table in the lower-right section then aggregates data by source address and displays the data in descending order of detection count.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5429819671/p1048129.png)
        

**Usage recommendations**

When you troubleshoot the accuracy of domain name resolution for endpoints, such as PCs and mobile phones, you can use the **Rtype and Rcode Analysis** feature to find the relevant resolution response logs. In the logs, you can check the source IP address of the DNS request and its region and ISP properties to determine whether a scheduling inaccuracy issue exists.

## **Resolution Quality Analysis**

**Important**

The data for the **Global Statistics** feature is collected from domain names that have DNS network traffic analysis enabled. Ensure that DNS network traffic analysis is enabled for at least one domain name.

This tab displays metric data and trend charts related to resolution quality. You can use this data to evaluate the resolution response quality and performance of a domain name.

**Note**

**How resolution success rate is calculated**

`Resolution success rate = Number of valid responses that match the requested record type (QTYPE) / Total number of resolutions`

**Valid response**: A response that contains resource record data that matches the requested type. For example, a request for an A record is successful if an IPv4 address is returned. The request is considered failed if the response is an NXDOMAIN, NODATA, or another status that does not include an A record. Similarly, a request for an AAAA record is successful only if an IPv6 address is returned.

**Recommendation**: The resolution success rate is used to measure the stability and availability of the resolution service. This metric is heavily influenced by invalid queries because the domain names and record types that clients query cannot be controlled. For example, a client might query for randomly generated, non-existent domain names. In general, a stable curve indicates normal performance. You do not need to aim for the highest possible value. Instead, you should consider this metric as one part of a comprehensive analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5429819671/p1048149.png)
