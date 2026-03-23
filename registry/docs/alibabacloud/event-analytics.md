The Events dashboard collects and analyzes data from security events to help you identify threats and assess risks to take appropriate actions.

## **Before you begin**

Security events may use sampled data to improve performance. When the sampling rate is less than 100%, the events dashboard may not show all events, and the filter may not return your expected results.

To display all events, we recommend that you select a smaller time range.

## Check on event analytics reports

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click your target website.
    
2.  In the navigation pane on the left, choose **Security** > **Events**.
    
3.  [Filter](/help/en/edge-security-acceleration/esa/user-guide/how-to-use-filter-criteria) your data by time and other query characteristics.
    
4.  Optional. You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5217519271/p849147.png) icon to print the report or the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5217519271/p849155.png) icon to download it.
    
5.  Optional. Click **Create Custom WAF Rule from Filters** to create a [custom rule](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules) based on your applied filters.
    

## Event analytics panels

The event analytics dashboard displays only the information about requests processed or flagged by ESA security services. Note that each HTTP/S request may generate one or more security events, but the raw HTTP/S request is not displayed.

You can see a top data panel and an Events panel.

### Top data panel

You can filter the data to view the top five or all results in an available dimension:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0501892471/p922753.png)

The available dimensions are:

-   Action
    
-   Host
    
-   Country/Region
    
-   Client ASN
    
-   Client ISP
    
-   Client IP
    
-   Path
    
-   HTTP Version
    
-   HTTP Method
    

### **Events panel**

Events panel shows an interactive chart that displays the same dimensions as the top data panel.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0501892471/p922758.png)

In both panels, you can move your mouse pointer over a dimension name and click **Filter** or **Exclude** to filter out or exclude data from your analytics report.

## **Event sources**

The sources include security events such as WAF blocking records, bot activities, DDoS events, origin server access control, and ActionTrail. You can customize the query time to target specific events and trace back data for the last 30 days.

## **Sampling logs**

Sampling logs are based on adaptive sampling, which dynamically adjusts the sampling rate according to your website's incoming HTTP(S) traffic volume.

You can use filters to narrow down the query results. Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7854385371/p898625.png) for more information.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0501892471/p922766.png)
