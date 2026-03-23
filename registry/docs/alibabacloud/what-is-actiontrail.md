ActionTrail is a service that monitors and records the operations of your Alibaba Cloud account. The operations include your access to and use of cloud services by using the Alibaba Cloud Management Console, APIs, and SDKs. ActionTrail records these operations as events. You can download these events from the ActionTrail console or configure ActionTrail to deliver these events to Simple Log Service Logstores or Object Storage Service (OSS) buckets. Then, you can perform behavior analysis, security analysis, resource change tracking, and compliance auditing based on the events.

The following figure shows how ActionTrail works. ![principle](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5733539371/p142058.png)

## Features

-   Out-of-the-box service: ActionTrail can track the operations of your Alibaba Cloud account without manual intervention. By default, ActionTrail tracks the operations that are performed in the last 90 days and records these operations as events. You can query these events in the ActionTrail console.
    
    **Note**
    
    If you want to save events for more than 90 days, you must create a trail. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail#task-2418644) or [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail#task-2462362).
    
-   Self-service management: You can create a trail to deliver events to a Simple Log Service Logstore as logs or to an OSS bucket as log files. You can use the retrieval and analysis features of Simple Log Service to manage the logs. You can also transfer the logs to big data services for management. For example, you can authorize other services to access the logs, define the lifecycle rules of the logs, archive, retrieve, and analyze the logs, and configure alert rules for the logs.
    
-   Multi-dimensional event query: ActionTrail allows you to query events from multiple dimensions, such as the event time, username, resource type, resource name, and event name.
    

## Scenarios

-   Compliance with MLPS requirements: Multi-Level Protection Scheme (MLPS) 2.0 stipulates that the operations of your Alibaba Cloud account must be recorded and the corresponding records must be stored for at least 180 days. To comply with these requirements, you can use ActionTrail to record the operations as events. Then, you can configure ActionTrail to deliver the events to Simple Log Service Logstores or OSS buckets for long-term storage.
    
-   Security analysis: ActionTrail records the operations of your Alibaba Cloud account as events. This way, you can identify security issues in your Alibaba Cloud account based on the events.
    
    For example, you can configure a trail to deliver events to a specific Simple Log Service Logstore as logs. This allows you to store the logs for a long period of time and execute SQL statements to analyze the logs. ![senerio](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5005539371/p142069.png)
    
-   Resource change tracking: You can locate the cause of an anomaly that occurs when you use your resources based on the events that are recorded by ActionTrail. For example, if one of your Elastic Compute Service (ECS) instances is shut down, you can use ActionTrail to check the person who performed the shutdown operation, the time when the shutdown operation was performed, and the IP address from which the shutdown operation was performed.
    
-   Compliance auditing: If you use Resource Access Management (RAM) to manage the members in your organization, ActionTrail records the operations of each member as events. This ensures that the operations of all members in your organization are recorded for compliance auditing. You can create trails to track different types of operations that are performed in different regions and deliver the events to different OSS buckets or Simple Log Service Logstores based on the responsibilities of auditors.
    
    For example, if you have deployed resources in the China site (aliyun.com) and the international site (alibabacloud.com), you can create trails to track the operations that are performed in different countries and regions and deliver the events to local storage objects based on the specific data security requirements of each country or region.
    
    ![Scenarios](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5713287761/p82783.png)
    

## Benefits

-   Quick recording: ActionTrail records the operations that are performed by users in the Alibaba Cloud Management Console or by calling APIs and the operations that are performed by Alibaba Cloud services by using RAM roles. When an operation is performed, ActionTrail tracks and records the operation in 10 minutes.
    
-   Detailed records: ActionTrail records the detailed contextual information of your operations. You can query the events that are performed in the last 90 days in the ActionTrail console or by calling API operations. For example, you can obtain the following information about a specific operation: the person who performed the operation, the time when the operation was performed, the object on which the operation was performed, the IP address from which the operation was performed, whether the operation was performed by using the Alibaba Cloud Management Console or APIs, the result of the operation, and the cause of failure if the operation failed.
    
-   High stability and reliability: You can configure ActionTrail to deliver events to Simple Log Service or OSS. Simple Log Service and OSS are highly available and allow you to encrypt the audit data and manage access permissions on the audit data. This ensures high security of the audit data. ActionTrail notifies you when an event is delivered.
    
-   Custom tracking: ActionTrail allows you to create up to five trails in each region to deliver events to OSS buckets or Simple Log Service Logstores. This helps you track different types of operations that are performed in different regions and back up various types of data for organization members according to their responsibilities.
    
    **Note**
    
    Do not deliver events that are of the same type and are generated in the same region to a single OSS bucket or Simple Log Service Logstore.
    
-   Transparent O&M: ActionTrail records operations that are related to Alibaba Cloud services as events and stores the events in a near real-time manner. If you configure ActionTrail to deliver events to Simple Log Service as logs, you can query and analyze logs, configure alerts, and generate reports. Backed by these transparent O&M features, ActionTrail can meet your requirements on analyzing and auditing operations related to Alibaba Cloud services.
