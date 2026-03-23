This topic describes how to enable the access log management feature in the Server Load Balancer (SLB) console. After you enable the feature, you can collect Layer 7 access logs of Classic Load Balancer (CLB) to Log Service.

## Prerequisites

-   A CLB instance is created. For more information, see [Create a CLB instance](/help/en/slb/classic-load-balancer/getting-started/create-a-clb-instance#task-bh5-dll-vdb).
    
-   A Layer 7 listener, such as an HTTP or HTTPS listener, is configured for the CLB instance. For more information, see [Add an HTTP listener](/help/en/slb/classic-load-balancer/user-guide/add-an-http-listener-1#task-1563673) or [Add an HTTPS listener](/help/en/slb/classic-load-balancer/user-guide/add-an-https-listener-1#task-1563673).
    
-   A project and a Logstore are created in the region where the CLB instance resides. For more information, see [Create a project and a Logstore](/help/en/sls/getting-started#section-2l7-ol2-zro).
    

## Procedure

**Important**

Before you can use a Resource Access Management (RAM) user to enable the access log management feature, you must grant the required permissions to the RAM user. For more information, see [RAM user authorization](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#section-gr9-t1o-2xe).

1.  Log on to the [SLB console](https://slb.console.alibabacloud.com/slb).
    
2.  In the top navigation bar, select the required region.
    
3.  In the left-side navigation pane, choose ****CLB** > **Logs** > **Access Log****.
    
4.  Authorize SLB to assume the AliyunLogArchiveRole role to access Log Service.
    
    This operation is required only when you enable the access log management feature for the first time. You must complete the authorization by using your Alibaba Cloud account.
    
    **Warning**
    
    Do not revoke permissions from the AliyunLogArchiveRole role or delete the role. Otherwise, CLB access logs cannot be sent to Log Service.
    
5.  On the **Access Log (Layer-7)** page, find the CLB instance and click **Configure** in the Actions column.
    
6.  In the **Configure Logging** panel, select the project and Logstore, and click **OK**.
    
    After you complete the configuration, Log Service automatically creates indexes for the Logstore. If indexes were already created for the Logstore, the existing indexes are overwritten.
    

## What to do next

**Operation**

**Description**

Query access logs

On the **Access Log (Layer-7)** page, find the CLB instance and click **View Logs** in the **Actions** column. For more information, see [Query access log data](/help/en/slb/classic-load-balancer/user-guide/configure-access-logs#section-u8r-q6y-1zy).

Disable the access log management feature

On the **Access Log (Layer-7)** page, find the CLB instance and click **Delete** in the **Actions** column. For more information, see [Disable access logs](/help/en/slb/classic-load-balancer/user-guide/configure-access-logs#section-5lg-iza-3mq).

**Important**

The project and the logs that are sent to Log Service are not automatically deleted after you disable the access log management feature. To prevent unwanted fees after you disable the feature, we recommend that you manually delete the project in the Log Service console. For more information, see [Manage a project](/help/en/sls/manage-a-project/#section-on2-3gx-ndb).

## What to do next

After Layer 7 CLB access logs are collected to Log Service, you can perform various operations on the collected logs in the Log Service console. For example, you can query, analyze, download, ship, and transform the logs. You can also configure alerts based on the logs. For more information, see [Common operations on logs of Alibaba Cloud services](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#concept-2534704).
