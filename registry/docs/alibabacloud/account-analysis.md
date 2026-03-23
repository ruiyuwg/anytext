This topic explains how ESA account analytics provides visualized analysis of different metrics from all the websites under your account and walks you through how to use it.

## What is account analytics

Account analytics generates data from various ESA records, including user logins, permission changes, API calls, account associations, security events, access paths, popularity metrics, and property information. You can assess your account's security, usage, and behavioral patterns based on a predefined set of dimensions.

-   **Geographic distribution**
    
    Pinpoint target markets for regional service and refine market strategy based on traffic distribution in different countries or regions.
    
-   **Performance evaluation**
    
    Spot and fix issues by analyzing page views, error code volumes, and other metrics.
    
-   **Resource planning**
    
    Plan bandwidth resources and design cache policies based on traffic data.
    
-   **Security and compliance**
    
    Enhance security by monitoring encrypted requests and support your compliance efforts.
    
-   **Comprehensive traffic and user behavior analysis**
    
    Access multidimensional reports, including overview metrics, country/region distribution, and top data rankings, for in-depth insights into traffic patterns and user behavior to inform data-driven decision-making.
    

## **Check on the dashboard**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list), and in the navigation pane on the left, choose **Analytics and Logs** > **Account Analytics**.
    
2.  [Filter](/help/en/edge-security-acceleration/esa/user-guide/how-to-use-filter-criteria) your data by time and other query characteristics.
    
3.  Optional. You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5217519271/p849147.png) icon to print the report or the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5217519271/p849155.png) icon to download it.
    

## **Account analytics panels**

You can see overall metrics, an overview panel, a country/region panel, and a top data panel:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9498975371/p898512.png)

### **Overall metrics**

-   **Total Traffic**: The sum of all traffic transferred to the client from ESA.
    
-   **Client Requests**: Traffic received by ESA from clients.
    
-   **Total Requests**: The total number of requests received from the client by ESA. When a user views a web page, the browser typically generates multiple requests to the server to load all the content. 
    
-   **Page Views**: The total number of successful HTTP responses with content-type HTML.
    
-   **Metric change**: Move the pointer over the arrow beside each metric to see the period-over-period change data. It is not displayed if no data is available for the previous period.
    

### **Overview panel**

In the overview panel, you can visualize the number of page views over time through an interactive line chart. This enables you to monitor website performance and identify access trends that matter to you.

The available dimensions are:

-   Website
    
-   Referer
    
-   Host
    
-   Country/Region
    
-   Chinese Mainland Provinces
    
-   Path
    
-   Edge Status Code
    
-   Origin Status Code
    
-   Browser Type
    
-   OS Type
    
-   Device Type
    
-   Client IP
    
-   HTTP Version
    
-   X-Requested-With Header
    
-   Cache Status
    
-   User Agent
    
-   Client ISP
    
-   Client ASN
    
-   HTTP Method
    
-   Content Type
    

### **Country/region panel**

This is an interactive map that shows the traffic by country or region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9498975371/p898522.png)

### **Top data panels**

You can filter the data to view the top five, ten, or fifteen results in the available dimensions:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9498975371/p898533.png)

## **Example use case for account analytics**

**Scenario**

Enhancing security against unauthorized access attempts.

**Background**

Customer A, a fintech company, has observed frequent logon failures across multiple user accounts, with the attempts originating from various IP addresses. This pattern suggests that malicious attackers might be trying to breach account passwords, which could affect user experience and trust.

**Solution**

Customer A uses the account analytics feature to observe account logon activities. They detect patterns of abnormal logon attempts and discover multiple accounts experiencing repeated failed logons within a short period, with an abnormal increase in attempts.

Customer A takes action by using the security protection feature of ESA to create logon protection rules, blacklist suspicious IP addresses, temporarily lock high-threat accounts, and require their users to reset passwords.
