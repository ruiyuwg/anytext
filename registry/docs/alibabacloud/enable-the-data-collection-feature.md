CloudLens for CLB allows you to enable the data collection feature with a few clicks to collect Classic Load Balancer (CLB) access logs, Cloud Config logs, and CloudMonitor events. This topic describes how to enable the data collection feature for CLB instances. This topic also describes the operations that you can perform after you enable the feature.

## Prerequisites

-   A CLB instance is created. For more information, see [Create a CLB instance](/help/en/slb/classic-load-balancer/getting-started/create-a-clb-instance#task-bh5-dll-vdb).
    
-   A Layer 7 listener such as an HTTP or HTTPS listener is configured for the CLB instance. For more information, see [Add an HTTP listener](/help/en/slb/classic-load-balancer/user-guide/add-an-http-listener-1#task-1563673) or [Add an HTTPS listener](/help/en/slb/classic-load-balancer/user-guide/add-an-https-listener-1#task-1563673).
    
-   A project and a Logstore are created in Simple Log Service. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
-   Cloud Config is activated before you can collect Cloud Config logs. For more information, see [Quick start for Cloud Config](/help/en/cloud-config/latest/quick-start-for-ordinary-accounts#task-2075717).
    
-   EventBridge is activated before you can collect CloudMonitor events. For more information, see [Step 1: Activate EventBridge](/help/en/eventbridge/getting-started/activate-eventbridge-and-grant-permissions-to-a-ram-user#section-0ki-hgr-via).
    

## Authorization

**Important**

The first time you enable the data collection feature, you must grant the required permissions. If the required permissions are already granted, you can skip this operation.

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  On the **Cloud Service Lens** tab in the **Log Application** section, click **CloudLens for CLB**.
    
3.  Follow the on-screen instructions to enable CloudLens for CLB.
    
    When you enable the application, Simple Log Service automatically authorizes CloudLens for CLB to assume the AliyunServiceRolePolicyForSLSAudit service-linked role to collect CLB logs. For more information, see [Manage the AliyunServiceRoleForSLSAudit service-linked role](/help/en/sls/manage-the-aliyunserviceroleforslsaudit-service-linked-role#concept-2089820).
    

## Enable data collection

CloudLens for CLB allows you to collect CLB access logs, Cloud Config logs, and CloudMonitor events. The operations that are performed to collect CLB access logs are similar to the operations that are performed to collect Cloud Config logs and CloudMonitor events. In this example, enable data collection for CLB access logs.

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  On the **Cloud Service Lens** tab in the **Log Application** section, click **CloudLens for CLB**.
    
3.  On the **CLB Instance Access** tab of the **Access Management** page, find the CLB instance for which you want to enable data collection and click **Enable**.
    
4.  In the **Enable Access Logs Collect** dialog box, select the project and the Logstore. Then, click **Confirm**.
    
    **Important**
    
    -   To manage the logs in an efficient manner, we recommend that you store the collected logs in the recommended project and Logstore.
        
    -   The first time you enable data collection for Cloud Config logs, the **Cloud Config Logs** dialog box appears. Click **Authorize Now** to grant Simple Log Service the permissions to collect logs from Cloud Config.
        
    

## What to do next

After you enable CloudLens for CLB, you can perform the following operations on the **Access Management** page.

**Operation**

**Description**

Manage CLB instances

After you enable CloudLens for CLB, CloudLens for CLB displays all CLB instances within the current Alibaba Cloud account.

Click the CLB instance that you want to manage. Then, you are navigated to the SLB console. You can view the details about the CLB instance and create a listener for the instance. For more information, see [CLB overview](/help/en/slb/classic-load-balancer/user-guide/clb-instance/#concept-fsy-ssm-vdb).

Disable data collection

-   Find the CLB instance for which you want to disable data collection and click **Disable** in the Access Logs column.
    
-   Click **Disable** in the Actions column of **Cloud Config Logs** to disable data collection for Cloud Config logs.
    
-   Click **Disable** in the Actions column of **CloudMonitor Events** to disable data collection for CloudMonitor events.
    

Query and analyze access logs

Find the CLB instance whose access logs you want to query and analyze and click **Access Logs** in the Actions column. Then, you are navigated to the Logstore in which the access logs are stored. You can view, query, and analyze the access logs. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).

Modify the data retention period

On the **Destination Logstore** tab, find the Logstore whose data retention period you want to modify and click the ![Modify the data retention period](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8671458461/p341815.png) icon.

Use the updated data collection feature

If log shipping is enabled for your CLB instance in the SLB console and you enable data collection in the Simple Log Service console when you use CloudLens for CLB, access logs are automatically collected. However, no anomaly detection or metric extraction is performed. You can click **Upgrade**. Then, CloudLens for CLB automatically detects anomalies, extracts metrics, and generates assets such as detection results, Metricstores, and inspection jobs.
