The operation log module in Elastic Desktop Service (EDS) Enterprise records logs of administrator and end user activities. This topic describes how to view operation logs.

## Background information

Operation logs help you monitor and audit the operations performed by administrators and end users. Administrator operation logs record the behavior when administrators access and use cloud computers in the EDS Enterprise console or call the EDS API. End user operation logs record the behavior when end users start, stop, reset, connect to, and disconnect from cloud computers. Operation logs can be used to analyze security risks, trace resource change behavior, and audit behavior compliance.

## View administrator operation logs

Administrator operation logs are generated based on Alibaba Cloud ActionTrail to monitor and record the activities performed by using Alibaba Cloud accounts. You can use the administrator logs to analyze security risks, trace resource changes, and audit behavior compliance.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Administrator Operation Logs** tab, specify a query condition and period of time and click the icon to query logs.
    
    -   Query conditions: You can query events by read/write type, event name, operator, resource type, resource name, event type, or sensitive action.
        
    -   Time range: By default, the operation logs of the previous 7 days before the current point in time are displayed. You can specify a time range.
        
5.  View the information about an event.
    
    -   Each event records the occurrence time, operator, event name, and related resource.
        
    -   Click **View Event Details** in the **Actions** column to view details, including API request ID, event source, event source IP address, and more. In the **Event Record** section, you can view event details in JSON format. For more information about the fields of an event, see [Management event structure](/help/en/actiontrail/user-guide/management-event-structure#concept-28819-zh).
        

## View end user operation logs

Operations performed by end users on cloud computers, such as connecting to, starting, and stopping cloud computers, are recorded in user operation logs. You can check end user operation logs to audit for any abnormal operations.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **User Operation Logs** tab, select or enter a query condition, value, or time to filter logs.
    
    End user operation logs that meet the filtering conditions are displayed. Each end user operation log includes the following information:
    
    -   Event: event ID, event type, and occurrence time.
        
    -   User: username of the end user related to an event.
        
    -   Cloud computer: cloud computer ID and name, cloud computer pool ID and name, and office network ID and name.
        
    -   Client: client OS, client version, and client IP address.
        
    
    **Note**
    
    If you want to export logs in the query result, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6004701671/p1014194.png) in the upper-right corner of the tab. Events are exported in an Excel file, and you can download the file to your local device.
    

## View file transfer logs

File transfer logs track the file transfer activities of end users. EDS Enterprise allows end users to transfer files between cloud computers and on-premises devices by using clipboards and the file transfer feature. You can check file transfer logs to audit for any abnormal operations.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Logs**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **File Transfer Log** tab, select or enter a query condition, value, or time to filter logs.
    
    File transfer logs that meet the filtering conditions are displayed. Each file transfer log includes details such as the username, cloud computer name or ID, and operation type.
    
    **Note**
    
    If you want to export logs in the query result, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6004701671/p1014194.png) in the upper-right corner of the tab. Events are exported in an Excel file, and you can download the file to your local device.
    

## What to do next

You can deliver user operation logs from EDS Enterprise to Logstores in Simple Log Service. This way, Simple Log Service (SLS) can audit and monitor the operation logs, and send alerts at the earliest opportunity to prevent data leaks when logs of suspicious activities are detected. For more information, see [Deliver user operation logs to Logstores](/help/en/wuying-workspace/user-guide/ship-user-operation-logs#task-2245287).
