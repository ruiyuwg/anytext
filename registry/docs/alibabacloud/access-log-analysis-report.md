You can use Log Service to analyze user access logs based on different analysis types, including basic information, data distribution and trends, top ranking, error information, performance metrics, and user profiles in Dynamic Route for CDN (DCDN). Log Service also provides 16 fine-grained dimensions that you can use to summarize the information. This way, you can obtain a comprehensive overview of your service status.

## Prerequisites

[Simple Log Service](https://sls.console.alibabacloud.com/lognext/open) is activated.

## Report classification

**Note**

All logs are valid for three minutes.

The types of log analysis are listed below:

-   Basic information: **Total number of page views (PVs)**, **Total number of unique visitors (UVs)**, and **Percentage of error requests**
    
-   Data distribution and trends: **Distribution of PVs** and **Trends of PVs**
    
-   Top ranking: **Top 10 URIs** and **Top 10 IP addresses**
    
-   Error information: **Trends of error codes**, **Top 10 domain names in which errors occur**, **Top 10 URIs in which errors occur**, and **Top 10 IP addresses in which errors occur**
    
-   Performance metrics: **Cache hit ratio** and **Response latency every 5 minutes**
    
-   User profiles: **Distribution of UVs**, **Distribution of Referers**, and **Distribution of user agents (UAs)**
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **Logs** > **Real-time Logs**.
    
3.  On the Real-time Logs page, click **Analytics and Alerting** in the Actions column of the project that you want to query. You are redirected to the dashboard page in the Log Service console. The analysis report of the specified log type is loaded on the page.
    
    ![Analytics and Alerting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2173715561/p431089.png)
    
4.  On the dashboard page in the Log Service console, click **Time Range** to select the time range of logs that you want to query.
    
5.  Click **Refresh**, and select a refresh frequency based on your business requirements. For example, you can select **Once** or **Auto Refresh**.
    
6.  Select a **domain name**, a **URI**, or an **IP address** to analyze log data. The analysis report that is displayed varies based on the domain name, URI, and IP address.
    
    **Note**
    
    One log is generated for each request.
    
    **Type**
    
    **Dimension**
    
    **Result**
    
    Basic information
    
    **Total number of PVs**
    
    The total number of requests.
    
    **Total number of UVs**
    
    The total number of IP addresses that visit a site.
    
    **Percentage of error requests**
    
    The percentage of error requests.
    
    **Note**
    
    Percentage of error requests = Total number of 4xx status codes/Total number of logs
    
    Data distribution and trends
    
    **Distribution of PVs**
    
    The distribution of PVs is displayed on a map of China or a map of the world.
    
    If you move the pointer over a region, a small window appears and displays the name of the region and the number of PVs in the specified time range.
    
    **Trends of PVs every 5 minutes**
    
    The changes in the PVs on the specified date. The time granularity is five minutes.
    
    Top ranking
    
    **Top10 URI**
    
    Domain names, URIs, and numbers of visits are displayed.
    
    **Top10 IP**
    
    IP addresses and number of visits are displayed.
    
    Error message
    
    **Trends of error codes**
    
    The trends of 4xx status codes are displayed in a double line graph.
    
    **Top 10 domain names in which errors occur**
    
    The top 10 domain names in which errors occur are displayed in a table.
    
    **Top 10 URIs in which errors occur**
    
    The top 10 URIs in which errors occur are displayed in a table.
    
    **Top 10 IP addresses in which errors occur**
    
    The top 10 IP addresses in which errors occur are displayed in a table.
    
    Performance metrics
    
    **Cache hit ratio**
    
    The changes in the cache hit ratio are displayed in a trend graph.
    
    **Response latency every 5 minutes**
    
    The response latency is displayed in a trend graph.
    
    User profiles
    
    **Distribution of UVs**
    
    The distribution of UVs is displayed on a map of China or a map of the world.
    
    If you move the pointer over a region, a small window appears and displays the name of the region and the number of UVs in the specified time range.
    
    **Distribution of Referers**
    
    The distribution of Referers is displayed in a table. You can view the data of the refer\_domain and total fields.
    
    **Distribution of UAs**
    
    The distribution of UAs is displayed in a table. You can view the data of the user\_agent and total fields.
    

## Scenarios

-   Scenario 1: Analyze the effect of an advertisement. The advertisement is posted on a URI.
    
    -   Filter condition: Select a domain name and a URI.
        
    -   Analysis method:
        
        -   You can view the **Distribution of PVs** graph to obtain the geographical distribution of PVs and UVs for the advertisement. Then, you can analyze the effect of the advertisement in each region.
            
        -   You can view the **Trends of PV every 5 minutes** graph to obtain the visit trend of the advertisement.
            
        -   You can use the **Distribution of Referers** to view the channels from which users visit the advertisement.
            
-   Scenario 2: Optimize the design of API operations for a website based on data analysis
    
    -   Filter condition: Select a time range for the Time Range field.
        
    -   Analysis method: You can view **Top 10 URIs** and analyze information about API calls and the response performance of each API to optimize the design of API operations for the website, such as deletion and merging.
        
-   Scenario 3: Identify possible threats
    
    -   You can view **Top 10 URIs** and **Top 10 IP addresses** to identify whether your services are vulnerable to attacks. For example, normally, your website is accessed up to 20 times per second. Analysis shows that the number of requests per second for your website is more than 100. In this case, your website may be attacked. You can add the IP address that attacks your website to the blacklist to block the IP address from accessing your website.
        
    -   You can view **Distribution of Referers** and analyze the information about the Referer to check whether your service has hotlinking. If a proportion of requests are from an unknown domain name, the resources on your website may be accessed by the unknown domain name.
