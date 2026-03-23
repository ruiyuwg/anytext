Alibaba Cloud provides the AccessKey pair audit feature. You can use the feature to query and manage the usage records of an AccessKey pair. This helps you monitor the security of your account and detect potential risks at the earliest opportunity. You can use the ActionTrail console to query the basic information about an AccessKey pair, the accessed Alibaba Cloud services by using the AccessKey pair, and related IP addresses and resources based on your business requirements.

## Prerequisites

An AccessKey ID is obtained. For more information, see [Obtain an AccessKey pair](/help/en/doc-detail/175967.html#task-354412).

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **AccessKey Pair Audit**.
    
3.  On the **AccessKey Pair Audit** page, enter the AccessKey ID that you want to query and click the ![查询按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854518661/p282855.png) icon.
    
4.  In the **Basic Information** section, view and query the information about the AccessKey pair, such as **AccessKey ID**, **account ID** (Alibaba Cloud account ID or RAM user ID), **Username**, **Last Accessed At**, and **Service Last Accessed**.
    
5.  In the **Alibaba Cloud Service** section, you can perform the following operations based on your business requirements:
    
    -   View accessed Alibaba Cloud services
        
        In the **Alibaba Cloud Service** section, view the accessed Alibaba Cloud services and the points in time at which the Alibaba Cloud services were last accessed in the **Service Name** and **Last Accessed At** columns.
        
    -   Query events
        
        Find the required Alibaba Cloud service and click **Event List** in the **Actions** column. In the Event List panel, you can view information about the service-related events, such as **Event Name**, **Last Accessed At**, and **Region**. You can also view the details of an event.
        
        **Note**
        
        -   For more information about event fields, see [Management event structure](/help/en/actiontrail/user-guide/management-event-structure#concept-28819-zh).
            
        -   After you enable the advanced event query feature, you can click **View More Records** in the Actions column to view more information about an event. For more information about how to enable the advanced event query feature, see [Enable the advanced event query feature](/help/en/actiontrail/user-guide/enable-the-advanced-event-query-feature#task-2041742).
            
        
    -   Query IP addresses
        
        Find the required Alibaba Cloud service and click **IP Address List** in the **Actions** column. In the IP Address List panel, you can view information about the service-related IP addresses, such as **IP**, **Last Used At**, and **Region**. You can also view the details of an IP address.
        
    -   Query resources
        
        Find the required Alibaba Cloud service and click **Resource List** in the **Actions** column. In the Resource List panel, you can view information about the service-related resources, such as **Resource Type**, **Resource Name**, **Last Used At**, and **Region**. You can also view the details of a resource.
        
        For more information about the types of resources supported by the AccessKey pair audit feature, go to the [Supported Cloud Services](https://actiontrail.console.alibabacloud.com/resources) tab.
        
    

## **Related operations**

-   You can query an AccessKey pair in Resource Access Management (RAM). For more information, see [View the information about AccessKey pairs of a RAM user](/help/en/ram/user-guide/view-the-accesskey-pairs-of-a-ram-user).
    
-   You can call API operations to query events related to an AccessKey pair. For more information, see [AccessKey pair audit](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-dir-accesskey-pair-audit/).
    
-   You can use the event query feature to query the usage records of an AccessKey pair. For more information, see [How do I query Alibaba Cloud services that are accessed by using an AccessKey pair and the call records of the AccessKey pair?](/help/en/actiontrail/support/how-do-i-query-alibaba-cloud-services-that-are-accessed-by-using-an-accesskey-pair-and-the-call-records-of-the-accesskey-pair)
