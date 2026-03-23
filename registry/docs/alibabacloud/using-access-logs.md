Use Global Accelerator (GA) access logs to analyze user behavior, identify geographic traffic patterns, and troubleshoot issues. GA integrates with Simple Log Service (SLS) to collect and deliver access logs for endpoint groups.

## Introduction to Access Logs

You can enable access logging for one or more endpoint groups of a GA instance. Logs are delivered to an SLS Logstore in the same region as the endpoint group. Each log entry includes fields such as client source IP address, client source port, destination IP address, destination port, and acceleration region. For field details, see [Log field reference](#dca6ec47e9zxm).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5049323771/CAEQVBiBgMCf_Jv15hkiIGM1N2U2MTFmNmE1ZjQzMjk5MGQzN2YwMWExOTg5M2E23963382_20230830144006.372.svg)

### Use cases

-   **Troubleshoot issues**
    
    Use access logs to quickly locate and resolve problems.
    
    For example, you can check the status of Global Accelerator acknowledgement messages using the **status** field to troubleshoot why access requests did not receive the expected response.
    
-   **Business planning**
    
    Analyze access logs to support business planning and resource scaling.
    
    For example, you can use the Traffic Trend in acceleration areas to upgrade bandwidth in advance to support business growth or downgrade bandwidth to reduce costs. You can also use the **http\_host** field in access logs to view the list of hosts that accessed your application during a specific time period, preparing for application updates.
    

### Billing

The GA access log feature is free. You pay only for SLS usage. For more information, see [Billing of Simple Log Service](/help/en/sls/billable-items#concept-xzl-hjg-vgb).

### Limits

-   Access logging is available only in regions where SLS is supported. For more information, see [Supported regions](/help/en/sls/sls-supported-regions1#reference-2084283).
    
-   Only standard GA instances support access logs. Basic GA instances do not. All procedures in this topic apply to standard GA instances.
    
-   You cannot collect access logs for endpoint groups deployed on an Alibaba Cloud point of presence (PoP) node.
    
-   You cannot query domain names of endpoints.
    
-   If you cannot use the access log feature, your instance version may not support it. To use this feature, contact your business manager to upgrade the instance.
    

## Create an access log

Before you begin, make sure listeners and endpoint groups are added to your GA instance. For more information, see [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#task-2382120).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click the ID of the GA instance.
    
3.  On the instance details page, click the **Access Log** tab.
    
4.  On the **Access Log** tab, click **Create Access Log**. In the **Storage Configuration** dialog box, configure the following parameters and click **OK**.
    
    ![创建访问日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1819615461/p357811.png)
    
    **Configuration**
    
    **Description**
    
    **Select Storage Content**
    
    **Listener ID/Name**
    
    Select an existing listener.
    
    **Endpoint Group ID/Name**
    
    Select a destination endpoint group.
    
    **Storage Settings**
    
    **Region**
    
    By default, the region where the endpoint group resides is selected.
    
    **Project**
    
    A resource management unit in SLS used for resource isolation and control.
    
    Click **Select Project** to choose an existing project, or click **Create Project** to create one.
    
    **Logstore**
    
    A unit in SLS for collecting, storing, and querying log data.
    
    Click **Select Logstore** to choose an existing Logstore, or click **Create Logstore** to create one.
    
    **Custom Headers**
    
    **Enable Custom Headers**
    
    When enabled, GA records specified HTTP headers in the `ga_headers` field of access logs.
    
    **Note**
    
    -   The custom header feature is rolling out in a phased release. Contact your account manager to enable it.
        
    -   The default maximum size for custom headers is 1 KB. You can increase it to 4 KB. Contact your account manager to request this change.
        
    -   After you enable this feature, your log data volume may increase, which can result in additional charges for Simple Log Service (SLS). For more information, see [Simple Log Service billing](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
        
    
    **header name**
    
    Enter the name of the HTTP header to record. Separate multiple names with semicolons (;). If left blank, all headers are recorded.
    
    **Note**
    
    When you perform this operation, the system checks whether the service-linked role AliyunServiceRoleForGaFlowlog exists for GA.
    
    -   If the role does not exist, the system automatically creates it and attaches the policy AliyunServiceRolePolicyForGaFlowlog. This grants GA permission to access SLS and deliver flow logs to SLS.
        
    -   If the role already exists, the system does not recreate it.
        
    
    For more information, see [AliyunServiceRoleForGaFlowlog](/help/en/ga/security-and-compliance/aliyunserviceroleforgaflowlog#concept-1936239).
    
    After creation, view the access log on the **Access Log** tab. ![访问日志列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1819615461/p357861.png)
    

## More actions

**Operation**

**Description**

View an access log

1.  On the **Access Log** tab, find the access log and click **View Log** in the **Actions** column to open the SLS console.
    
2.  View and analyze the access log. For more information, see [Usage examples](#example-152-6ea-9bf).
    

**Edit Custom Header**

On the **Access Log** tab, find the access log and click **Edit Custom Header** in the **Actions** column. After updating the configuration, click **OK**.

Delete an access log

1.  On the **Access Log** tab, find the access log and click **Delete** in the **Actions** column.
    
2.  In the **Delete Log** dialog box, click **OK**.
    

After SLS collects an access log, you can download, deliver, process, and alert on the log data. For more information, see [Common operations on logs of Alibaba Cloud services](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#concept-2534704).

## Usage examples

### View raw access logs

On the **Raw Logs** tab of the Logstore page, you can view the raw log entries.

For example, you can click the **client\_ip** field to view client IP address information. ![查看访问日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4506515461/p357835.png)

### Query specific access logs

On the Logstore page, you can enter an SQL statement in the Search & Analyze search box to query specific access logs.

For example, you can follow the steps below to query the geographic distribution of client IP addresses. ![热力图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4506515461/p357889.png)

**ordinal number**

**Description**

1

Enter the following SQL statement to generate a heat map of client IP addresses and view the top 10 regions where clients are located. This helps with capacity planning.

```
* | select  ip_to_geo(client_ip) as address, count(1) as count group by address order by count desc limit 10
```

2

Select a time range and click **Search & Analyze**.

3

On the **Graph** > **Properties** tab, click the ![高德热力图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1347045461/p379254.png) icon to view the geographic distribution of client IP addresses.

## Log field reference

The following fields are available in access logs in SLS.

**Field**

**Description**

accelerator\_region

The acceleration region.

client\_ip

The client IP address (source IP address).

client\_port

The client port (source port).

egress\_bytes

This refers to the traffic returned during the sampling period.

endpoint\_group\_id

The ID of the endpoint group.

endpoint\_group\_region

The region where the endpoint group is deployed.

endpoint\_ip

The endpoint IP address (destination IP address).

endpoint\_port

The endpoint port (destination port).

ga\_id

The ID of the GA instance.

ingress\_bytes

The inbound traffic during the sampling period.

listener\_id

The ID of the listener.

protocol

The network transmission protocol used by the listener.

status

The status of the response packet sent by GA.

time

The time when the log entry was generated.

upstream\_connect\_time

The connection duration.

upstream\_first\_byte\_time

The time to first byte.

The following fields are available only for HTTP and HTTPS listeners.

**Field**

**Description**

http\_host

The Host header of the request.

http\_referer

The HTTP Referer header of the request received by GA.

request\_method

The request method.

request\_uri

The URI of the request received by GA.

ga\_headers

The custom header content. When the custom header feature is enabled, GA records specified HTTP headers in this field.
