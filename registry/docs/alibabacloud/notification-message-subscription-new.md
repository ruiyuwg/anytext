Alibaba Cloud DNS provides two types of notifications: operation change notifications and alert notifications.

## **Subscribe to operation change notifications**

### **Notification content**

-   Deleting a custom domain name (Zone)
    
-   Attaching a custom domain name (Zone) to or detaching it from a VPC
    
-   Deleting a DNS record
    
-   Modifying a DNS record
    
-   Pausing a DNS record
    
    **Important**
    
    -   No notifications are sent when you add custom domain names (Zones) or enable DNS records.
        
    

### **Procedure**

1.  Go to the [Basic Message Reception](https://notifications2.console.alibabacloud.com/subscribeMsg) page.
    
2.  In the navigation pane on the left, under **Message Settings**, click **Common Settings**. Then, select the **Alibaba Cloud DNS Operation Notifications** checkbox.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8176718171/p798901.png)
    
    **Important**
    
    -   You can also select other types of notifications, such as overdue payments or instance expiration and release.
        
    -   The supported notification methods are **Internal Message**, **Email**.
        
    -   To modify the contacts for a message type, click the **Modify** button next to the message type.
        
    

## **Throttling alerts**

PrivateZone sets thresholds for the number of DNS queries that can be initiated by endpoints such as ECS instances and containers in a VPC:

**Item**

**Limit**

Resolution queries from a single ECS instance in a VPC

500 queries/second

Resolution queries from all ECS instances in a VPC

No limits

External recursive resolution queries from a single ECS instance in a VPC

600 queries/second

External recursive resolution queries from all ECS instances in a VPC

5,000 queries/second

If the number of DNS queries from an endpoint in a VPC exceeds the specified threshold, throttling is triggered. You can receive throttling alerts using one of the following two methods.

-   **Method 1**: Enable network traffic analysis for your private zone. You can then view the alert history in the global network traffic analysis report.
    
-   **Method 2**: Subscribe to events. When DNS query throttling is triggered for a private zone, an alert notification is sent to the specified contacts. The following procedure describes how to configure this method.
    

### **Procedure**

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
3.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
    
4.  Configure the parameters and click the **Submit** button.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8176718171/p799033.png)
    
    **Important**
    
    You can customize alert contacts by clicking the **Create Notification Configuration** button in the notification configuration settings. The **Contact Group** is populated with the alert contacts from Cloud Monitor. For more information, see [Manage notification configurations](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies).
