CloudLens for ALB allows you to enable data collection for the access logs of Application Load Balancer (ALB) instances with a few clicks. This topic describes how to enable data collection in CloudLens for ALB. This topic also describes the operations that you can perform after you enable data collection.

## Prerequisites

-   An ALB instance is created. For more information, see [Create an ALB instance](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances#task-1999195).
    
-   A project and a Logstore are created in Simple Log Service. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    

## Authorization

**Important**

You need to perform this operation only once.

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  In the **Log Application** section, click the **Cloud Service Lens** tab. Then, click **CloudLens for ALB**.
    
3.  Follow the on-screen instructions to enable CloudLens for ALB.
    
    When you enable the application, Simple Log Service automatically authorizes CloudLens for ALB to assume the AliyunServiceRolePolicyForSLSAudit service-linked role to collect ALB access logs. For more information, see [Manage the AliyunServiceRoleForSLSAudit service-linked role](/help/en/sls/manage-the-aliyunserviceroleforslsaudit-service-linked-role#concept-2089820).
    

## Enable data collection

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  In the **Log Application** section, click the **Cloud Service Lens** tab. Then, click **CloudLens for ALB**.
    
3.  On the **ALB Instance Access** tab of the **Access Management** page, find the ALB instance for which you want to enable data collection and click **Enable**.
    
4.  In the **Enable Access Logs Collect** dialog box, select the project and the Logstore. Then, click **Confirm**.
    

## What to do next

After you enable CloudLens for ALB, you can perform the following operations on the **Access Management** page.

**Operation**

**Description**

Manage ALB instances

After you enable CloudLens for ALB, CloudLens for ALB displays all ALB instances within your Alibaba Cloud account.

Click the ALB instance that you want to manage. Then, you are navigated to the SLB console. You can view the details about the ALB instance and create a listener for the instance. For more information, see [View details of an ALB instance](/help/en/doc-detail/214653.html#task-2075597).

Disable data collection

Find the ALB instance for which you want to disable data collection and click **Disable** in the Access Logs column.

Query and analyze data

Find the ALB instance whose data you want to query and analyze and click **Access Logs** in the Actions column. Then, you are navigated to the Logstore in which the data is stored. You can view, query, and analyze the raw logs. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).

Modify data retention periods

On the **Destination Logstore** tab, find the Logstore that you want to manage and click the ![Modify Data Retention Period](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8671458461/p341815.png) icon to modify the retention period of data in the Logstore.

Use the updated data collection feature

If you enable log shipping for your ALB instance in the SLB console and enable log collection in the Simple Log Service console by using CloudLens for ALB, CloudLens for ALB automatically collects access logs, but does not automatically detect anomalies or extracts metrics. You can click **Upgrade**. Then, CloudLens for ALB automatically detects anomalies, extracts metrics, and generates assets such as detection results, Metricstores, and inspection jobs.

## What to do next

[View reports](/help/en/sls/view-reports#task-2183021)
