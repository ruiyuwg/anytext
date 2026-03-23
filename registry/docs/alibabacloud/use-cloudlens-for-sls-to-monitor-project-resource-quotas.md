This topic describes how to use CloudLens for SLS to monitor the quota usage and overages of project resources based on error logs and metrics, and apply to increase resource quotas. Error logs and metrics belong to global logs.

## **Background information**

CloudLens for SLS provides unified observability by using Simple Log Service. The application allows you to enable log collection for instance logs and global logs with a few clicks. Instance logs are classified into important logs, detailed logs, and job operational logs. Global logs are classified into audit logs, billing logs, error logs, and metrics.

**Log type**

**Subtype**

**Monitoring scenario**

Instance logs

Detailed logs

Access traffic monitoring

Access exception monitoring

Important logs

Consumer group monitoring

Logtail collection monitoring

Job operational logs

Data transformation (new) monitoring

Scheduled SQL job monitoring

Global logs

Audit logs

Resource operation monitoring

Error logs

Quota overage monitoring

Access exception monitoring

Operation exception monitoring

Metrics

Access traffic monitoring

Access exception monitoring

Resource quota usage monitoring

Billing logs

Resource usage tracking

For more information about log types, see [Log types of CloudLens applications](/help/en/sls/log-types-of-cloudlens-applications).

## **Prerequisites**

-   A RAM user is created and the required permissions are granted to the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Grant the operation permissions on CloudLens for SLS to a RAM user](/help/en/sls/authorize-ram-users-to-operate-cloudlens-for-sls).
    
-   The log collection feature is enabled for the following global logs: error logs and metrics. For more information, see [Enable the log collection feature](/help/en/sls/enable-the-log-collection-feature-1).
    

**Important**

-   To monitor resource quota usage in real time, you must enable the log collection feature for the following global logs: error logs and metrics. The two types of global logs must be stored in the same project.
    
-   If monitoring logs are stored in a project that is in use, the resource quotas of the project are consumed. We recommend that you select the dedicated project that resides in a recommended region. For example, the `log-service-{User ID}-cn-hangzhou` project in the China (Hangzhou) region.
    

## **View the Quota Monitoring dashboard**

On the Quota Monitoring dashboard of CloudLens for SLS, you can view the overview of resource quota alerting, the real-time quota usage details of key project resources, and the quota overage details of project resources.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Log Application** > **Cloud Service Lens** section, click **CloudLens for SLS**.
    
3.  In the left-side navigation pane, choose **Report Center** > **Quota Monitoring** to view the quota information.
    

### Overview of resource quota alerting

The report displays the resources whose quota usage exceeds 80% and the distribution of resources whose quotas exceed the upper limit.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6866934961/p690994.png)

### Real-time quota usage details of key project resources

The report displays the real-time usage details of basic project resource quotas and data read/write quotas.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6866934961/p690999.png)

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6866934961/p691000.png)

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2403944371/p691001.png)

### Quota overage details of project resources

The report displays the quota overage details of project resources.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6866934961/p691002.png)

## **Resource monitoring**

CloudLens for SLS supports basic monitoring for resource quotas and data read/write quotas, and advanced monitoring for Logstores, machine groups, and project writes.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Log Application** section, click **CloudLens for SLS**.
    
3.  In the left-side navigation pane of the **CloudLens for SLS** page, click **Anomaly Detection** to configure an alert rule for resource monitoring.
    

### Quota monitoring

The following table describes the metric categories for quota monitoring.

**Category**

**Metric**

**Description**

Real-time usage monitoring

[Basic Resource Quota Usage](#GPoPz)

-   Monitors whether the numbers of Logstores, machine groups, and Logtail configurations in a project exceed the specified thresholds.
    
-   Dependent Metricstore: internal-monitor-metric
    

[Data Read/Write Quota Usage](#zaPPb)

-   Monitors the number of times that the write traffic quota of a project is exceeded and the number of times that the write operation quota of the project is exceeded.
    
-   Dependent Metricstore: internal-monitor-metric
    

Quota overage monitoring

[Resource Quota Exceeded Count](#P3sfZ)

-   Monitors the number of times that the basic resource quotas are exceeded and the number of times that the read/write quotas are exceeded.
    
-   Dependent Logstore: internal-error\_log
    

#### **Basic Resource Quota Usage**

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Basic Resource Quota Usage
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * | select Project, region, logstore_ratio, machine_group_ratio, logtail_config_ratio from 
        (SELECT A.id as Project , A.region as region, 
        round(COALESCE(SUM(B.count_logstore), 0)/cast(json_extract(A.quota, '$.logstore') as double) * 100, 3)  as logstore_ratio,  cast(json_extract(A.quota, '$.logstore') as double) as quota_logstore, 
        round(COALESCE(SUM(C.count_machine_group), 0)/cast(json_extract(A.quota, '$.machine_group') as double) * 100, 3)  as machine_group_ratio, cast(json_extract(A.quota, '$.machine_group') as double) as quota_machine_group, 
        round(COALESCE(SUM(D.count_logtail_config), 0)/cast(json_extract(A.quota, '$.config') as double) * 100, 3)  as logtail_config_ratio, cast(json_extract(A.quota, '$.config') as double) as quota_logtail_config
        FROM  "resource.sls.cmdb.project" as A
        LEFT JOIN (
          SELECT project, COUNT(*) AS count_logstore
          FROM "resource.sls.cmdb.logstore" as B
          GROUP BY project
        ) AS B ON A.id = B.project 
        LEFT JOIN (
          SELECT project, COUNT(*) AS count_machine_group
          FROM "resource.sls.cmdb.machine_group" as C
          GROUP BY project
        ) AS C ON A.id = C.project
        LEFT JOIN (
          SELECT project, COUNT(*) AS count_logtail_config
          FROM "resource.sls.cmdb.logtail_config" as D
          GROUP BY project
        ) AS D ON A.id = D.project 
        group by  A.id, A.quota, A.region) 
        where quota_logstore is not null and quota_machine_group is not null and quota_logtail_config is not null  and (logstore_ratio > 80 or machine_group_ratio > 80 or logtail_config_ratio > 80) limit 10000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   If one of the following conditions is met, a Critical alert is triggered: the Logstore quota usage exceeds 90%, the machine group quota usage exceeds 90%, and the Logtail configuration quota usage exceeds 90%.
        
    -   If one of the following conditions is met, a Medium alert is triggered: the Logstore quota usage exceeds 80%, the machine group quota usage exceeds 80%, and the Logtail configuration quota usage exceeds 80%.
        
    
    -   When data matches the expression `logstore_ratio > 90 || machine_group_ratio > 90 || logtail_config_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `logstore_ratio > 80 || machine_group_ratio > 80 || logtail_config_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691201.png)
    
4.  After you configure the parameters, click **OK**.
    

#### **Data Read/Write Quota Usage**

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Data Read/Write Quota Usage
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 5 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        (*)| select Project, region, inflow_ratio, write_cnt_ratio from (SELECT cmdb.id as Project, cmdb.region as region, round(COALESCE(M.name1,0)/round(cast(json_extract(cmdb.quota, '$.inflow_per_min') as double)/1000000000, 3) * 100, 3) as inflow_ratio, round(COALESCE(M.name2,0)/cast(json_extract(cmdb.quota, '$.write_cnt_per_min') as double) * 100, 3) as write_cnt_ratio
         from "resource.sls.cmdb.project" as cmdb  
        LEFT JOIN (
             select project,  round(MAX(name1)/1000000000, 3) as name1, MAX(name2) as name2 from (SELECT __time_nano__ as time, element_at( split_to_map(__labels__, '|', '#$#') , 'project') as project,   sum(CASE WHEN __name__ = 'logstore_origin_inflow_bytes' THEN __value__ ELSE NULL END) AS name1,
          sum(CASE WHEN __name__ = 'logstore_write_count' THEN __value__ ELSE NULL END) AS name2
          FROM "internal-monitor-metric.prom" where __name__ in ('logstore_origin_inflow_bytes','logstore_write_count' ) and regexp_like(element_at( split_to_map(__labels__, '|', '#$#') , 'project') , '.*')  group by project,time )group by project) AS M ON cmdb.id = M.project) where inflow_ratio > 80 or write_cnt_ratio > 80  limit 10000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   If the usage of the write traffic quota of a project exceeds 90% or the usage of the write operation quota of the project exceeds 90%, a Critical alert is triggered.
        
    -   If the usage of the write traffic quota of a project exceeds 80% or the usage of the write operation quota of the project exceeds 80%, a Medium alert is triggered.
        
    
    -   When data matches the expression `where inflow_ratio > 90 || write_cnt_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `where inflow_ratio > 80 || write_cnt_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691199.png)
    
4.  After you configure the parameters, click **OK**.
    

#### **Resource Quota Exceeded Count**

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Resource Quota Exceeded Count
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Logstore
        
    -   Authorization: Default
        
    -   Logstore: internal-error\_log
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        ((* and (ErrorCode: ExceedQuota or ErrorCode: QuotaExceed or ErrorCode: ProjectQuotaExceed or ErrorCode:WriteQuotaExceed or ErrorCode: ShardWriteQuotaExceed or ErrorCode: ShardReadQuotaExceed)))| SELECT Project,
        CASE 
        WHEN ErrorMsg like '%Project write quota exceed: inflow%' then 'The project write traffic quota is exceeded.'
        WHEN ErrorMsg like '%Project write quota exceed: qps%' then 'The project write operation quota is exceeded.'
        WHEN ErrorMsg like '%dashboard quota exceed%' then 'The dashboard quota is exceeded.'
        WHEN ErrorMsg like '%config count%' then 'The Logtail configuration quota is exceeded.'
        WHEN ErrorMsg like '%machine group count%' then 'The Machine group quota is exceeded.'
        WHEN ErrorMsg like '%Alert count %' then 'The alert rule quota is exceeded.'
        WHEN ErrorMsg like '%logstore count %' then 'The Logstore quota is exceeded.'
        WHEN ErrorMsg like '%shard count%' then 'The shard quota is exceeded.'
        WHEN ErrorMsg like '%shard write bytes%' then 'The shard write traffic quota is exceeded.'
        WHEN ErrorMsg like '%shard write quota%' then 'The shard write operation quota is exceeded.'
        WHEN ErrorMsg like '%user can only run%' then 'The concurrent SQL analysis operation quota is exceeded.'
            ELSE ErrorMsg
          END AS ErrorMsg, 
        COUNT(1) AS count GROUP BY Project, ErrorMsg Limit 1000
        ```
        
    
    **Group Evaluation**
    
    No Grouping
    
    **Trigger Condition**
    
    **Note**
    
    -   If one of the preceding quotas is exceeded for more than 10 times, a Critical alert is triggered.
        
    -   If one of the preceding quotas is exceeded for more than one time, a Medium alert is triggered.
        
    
    -   When data matches the expression `count > 10`, Severity: Critical
        
    -   When data matches the expression `count > 1`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691198.png)
    
4.  After you configure the parameters, click **OK**.
    

### **Advanced monitoring**

The following table describes the metric categories for advanced monitoring.

**Category**

**Scenario**

**Metric**

**Description**

Basic resource quotas

[Logstore monitoring](#d233adc01cbyo)

Real-time Usage

-   Monitors whether the number of Logstores in a project exceeds the specified threshold.
    
-   Dependent Metricstore: internal-monitor-metric
    

Quota Exceeded

-   Monitors the number of times that the Logstore quota of a project is exceeded.
    
-   Dependent Logstore: internal-error\_log
    

[Machine group monitoring](#ed3f65401ckuh)

Real-time Usage

-   Monitors whether the number of machine groups in a project exceeds the specified threshold.
    
-   Dependent Metricstore: internal-monitor-metric
    

Quota Exceeded

-   Monitors the number of times that the machine group quota of a project is exceeded.
    
-   Dependent Logstore: internal-error\_log
    

[Logtail configuration monitoring](#705968411clb9)

Real-time Usage

-   Monitors whether the number of Logtail configurations in a project exceeds the specified threshold.
    
-   Dependent Metricstore: internal-monitor-metric
    

Quota Exceeded

-   Monitors the number of times that the Logtail configuration quota of a project is exceeded.
    
-   Dependent Logstore: internal-error\_log
    

Data read/write quotas

[Project write traffic monitoring](#749404b11cghw)

Real-time Usage

-   Monitors whether the write traffic of a project exceeds the specified threshold.
    
-   Dependent Metricstore: internal-monitor-metric
    

Quota Exceeded

-   Monitors the number of times that the write traffic quota of a project is exceeded.
    
-   Dependent Logstore: internal-error\_log
    

[Project write operation monitoring](#5e6cd3511ct7l)

Real-time Usage

-   Monitors whether the number of write operations of a project exceeds the specified threshold.
    
-   Dependent Metricstore: internal-monitor-metric
    

Quota Exceeded

-   Monitors the number of times that the write operation quota of a project is exceeded.
    
-   Dependent Logstore: internal-error\_log
    

#### Logstore monitoring

## Real-time Usage

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Logstore Quota Usage
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * |  select Project, region, round(count_logstore/quota_logstore * 100, 3)  as logstore_ratio from 
        (SELECT A.id as Project , A.region as region, COALESCE(SUM(B.count_logstore), 0)  AS count_logstore , cast(json_extract(A.quota, '$.logstore') as double)  as quota_logstore
        FROM  "resource.sls.cmdb.project" as A
        LEFT JOIN (
          SELECT project, COUNT(*) AS count_logstore
          FROM "resource.sls.cmdb.logstore" as B
          GROUP BY project
        ) AS B ON A.id = B.project 
        group by A.id, A.quota, A.region) where  quota_logstore is not null   order by logstore_ratio desc limit 1000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   If the number of Logstores in a project exceeds 90% of the quota, a Critical alert is triggered.
        
    -   If the number of Logstores in a project exceeds 80% of the quota, a Medium alert is triggered.
        
    
    -   When data matches the expression `logstore_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `logstore_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5543044961/p691217.png)
    
4.  After you configure the parameters, click **OK**.
    

## Quota Exceeded

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Logstore Quota Exceeded
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Logstore
        
    -   Authorization: Default
        
    -   Logstore: internal-error\_log
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * and (ErrorCode: ExceedQuota or ErrorCode: QuotaExceed or ErrorCode: ProjectQuotaExceed or ErrorCode:WriteQuotaExceed)| SELECT Project, 
        COUNT(1) AS count where ErrorMsg like '%logstore count %' GROUP BY Project ORDER BY count DESC LIMIT 1000
        ```
        
    
    **Group Evaluation**
    
    No Grouping
    
    **Trigger Condition**
    
    **Note**
    
    -   If the Logstore quota of a project is exceeded for more than 10 times, a Critical alert is triggered.
        
    -   If the Logstore quota of a project is exceeded for more than one time, a Medium alert is triggered.
        
    
    -   When data matches the expression `count > 10`, Severity: Critical
        
    -   When data matches the expression `count > 1`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691214.png)
    
4.  After you configure the parameters, click **OK**.
    

#### Machine group monitoring

## Real-time Usage

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Machine Group Quota Usage
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * |  select Project, region, round(count_machine_group/quota_machine_group * 100, 3)  as machine_group_ratio from 
        (SELECT A.id as Project , A.region as region, COALESCE(SUM(B.count_machine_group), 0)  AS count_machine_group , cast(json_extract(A.quota, '$.machine_group') as double)  as quota_machine_group
        FROM  "resource.sls.cmdb.project" as A
        LEFT JOIN (
          SELECT project, COUNT(*) AS count_machine_group
          FROM "resource.sls.cmdb.machine_group" as B
          GROUP BY project
        ) AS B ON A.id = B.project 
        group by A.id, A.quota, A.region) where  quota_machine_group is not null   order by machine_group_ratio desc limit 1000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   If the number of machine groups in a project exceeds 90% of the quota, a Critical alert is triggered.
        
    -   If the number of machine groups in a project exceeds 80% of the quota, a Medium alert is triggered.
        
    
    -   When data matches the expression `machine_group_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `machine_group_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5543044961/p691223.png)
    
4.  After you configure the parameters, click **OK**.
    

## Quota Exceeded

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Machine Group Quota Exceeded
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Logstore
        
    -   Authorization: Default
        
    -   Logstore: internal-error\_log
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * and (ErrorCode: ExceedQuota or ErrorCode: QuotaExceed or ErrorCode: ProjectQuotaExceed or ErrorCode:WriteQuotaExceed)| SELECT Project, 
        COUNT(1) AS count where ErrorMsg like '%machine group count%' GROUP BY Project ORDER BY count DESC LIMIT 1000
        ```
        
    
    **Group Evaluation**
    
    No Grouping
    
    **Trigger Condition**
    
    **Note**
    
    -   If the machine group quota of a project is exceeded for more than 10 times, a Critical alert is triggered.
        
    -   If the machine group quota of a project is exceeded for more than one time, a Medium alert is triggered.
        
    
    -   When data matches the expression `count > 10`, Severity: Critical
        
    -   When data matches the expression `count > 1`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691214.png)
    
4.  After you configure the parameters, click **OK**.
    

#### Logtail configuration monitoring

## Real-time Usage

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameter that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Logtail Configuration Quota Usage
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * |  select Project, region, round(count_logtail_config/quota_logtail_config * 100, 3)  as logtail_config_ratio from 
        (SELECT A.id as Project , A.region as region, COALESCE(SUM(B.count_logtail_config), 0)  AS count_logtail_config , cast(json_extract(A.quota, '$.config') as double)  as quota_logtail_config
        FROM  "resource.sls.cmdb.project" as A
        LEFT JOIN (
          SELECT project, COUNT(*) AS count_logtail_config
          FROM "resource.sls.cmdb.logtail_config" as B
          GROUP BY project
        ) AS B ON A.id = B.project 
        group by A.id, A.quota, A.region) where  quota_logtail_config is not null   order by logtail_config_ratio desc limit 1000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   The number of Logtail configurations in a project exceeds 90% of the quota, a Critical alert is triggered.
        
    -   The number of Logtail configurations in a project exceeds 80% of the quota, a Medium alert is triggered.
        
    
    -   When data matches the expression `logtail_config_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `logtail_config_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5543044961/p691230.png)
    
4.  After you configure the parameters, click **OK**.
    

## Quota Exceeded

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Logtail Configuration Quota Exceeded
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Logstore
        
    -   Authorization: Default
        
    -   Logstore: internal-error\_log
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * and (ErrorCode: ExceedQuota or ErrorCode: QuotaExceed or ErrorCode: ProjectQuotaExceed or ErrorCode:WriteQuotaExceed)| SELECT Project, 
        COUNT(1) AS count where ErrorMsg like '%config count%' GROUP BY Project ORDER BY count DESC LIMIT 1000
        ```
        
    
    **Group Evaluation**
    
    No Grouping
    
    **Trigger Condition**
    
    **Note**
    
    -   If the Logtail configuration quota of a project is exceeded for more than 10 times, a Critical alert is triggered.
        
    -   If the Logtail configuration quota of a project is exceeded for more than one time, a Medium alert is triggered.
        
    
    -   When data matches the expression `count > 10`, Severity: Critical
        
    -   When data matches the expression `count > 1`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691232.png)
    
4.  After you configure the parameters, click **OK**.
    

#### Project write traffic monitoring

## Real-time Usage

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameter that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Project Write Traffic
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        (*)| SELECT Project, region , round(count_inflow/cast(quota_inflow as double) * 100, 3) as inflow_ratio
        FROM
        (SELECT cmdb.id as Project, cmdb.region as region, COALESCE(M.name1,0) as count_inflow, round(cast(json_extract(cmdb.quota, '$.inflow_per_min') as double)/1000000000, 3) as quota_inflow  from "resource.sls.cmdb.project" as cmdb  
        LEFT JOIN (
            select project,  round(MAX(name1)/1000000000, 3) as name1 from (SELECT __time_nano__ as time, element_at( split_to_map(__labels__, '|', '#$#') , 'project') as project,   sum(CASE WHEN __name__ = 'logstore_origin_inflow_bytes' THEN __value__ ELSE NULL END) AS name1
            FROM "internal-monitor-metric.prom" where __name__ ='logstore_origin_inflow_bytes' and regexp_like(element_at( split_to_map(__labels__, '|', '#$#') , 'project') , '.*') group by project,time )group by project) AS M ON cmdb.id = M.project )order by inflow_ratio desc  limit 1000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   If the usage of the write traffic quota of a project exceeds 90%, a Critical alert is triggered.
        
    -   If the usage of the write traffic quota of a project exceeds 80%, a Medium alert is triggered.
        
    
    -   When data matches the expression `inflow_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `inflow_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691233.png)
    
4.  After you configure the parameters, click **OK**.
    

## Quota Exceeded

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameter that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Project Write Traffic Quota Exceeded
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Logstore
        
    -   Authorization: Default
        
    -   Logstore: internal-error\_log
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * and (ErrorCode: ExceedQuota or ErrorCode: QuotaExceed or ErrorCode: ProjectQuotaExceed or ErrorCode:WriteQuotaExceed)| SELECT Project, 
        COUNT(1) AS count where ErrorMsg like '%Project write quota exceed: inflow%' GROUP BY Project ORDER BY count DESC LIMIT 1000
        ```
        
    
    **Group Evaluation**
    
    No Grouping
    
    **Trigger Condition**
    
    **Note**
    
    -   If the write traffic quota of a project is exceeded for more than 10 times, a Critical alert is triggered.
        
    -   If the write traffic quota of a project is exceeded for more than one time, a Medium alert is triggered.
        
    
    -   When data matches the expression `count > 10`, Severity: Critical
        
    -   When data matches the expression `count > 1`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691241.png)
    
4.  After you configure the parameters, click **OK**.
    

#### Project write operation monitoring

## Real-time Usage

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameter that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Project Write Operation Quota Usage
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Metricstore
        
    -   Authorization: Default
        
    -   Metricstore: internal-monitor-metric
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        (*)| SELECT Project, region,  round(count_write_cnt/cast(quota_write_cnt as double) * 100, 3) as write_cnt_ratio
        FROM
        (SELECT cmdb.id as Project, cmdb.region as region, COALESCE(M.name1,0) as count_write_cnt,
        cast(json_extract(cmdb.quota, '$.write_cnt_per_min') as bigint) as quota_write_cnt from "resource.sls.cmdb.project" as cmdb  
        LEFT JOIN (
            select project,  MAX(name1) as name1 from (SELECT __time_nano__ as time, element_at( split_to_map(__labels__, '|', '#$#') , 'project') as project, 
          sum(CASE WHEN __name__ = 'logstore_write_count' THEN __value__ ELSE NULL END) AS name1
          FROM "internal-monitor-metric.prom" where __name__  = 'logstore_write_count' and regexp_like(element_at( split_to_map(__labels__, '|', '#$#') , 'project') , '.*')  group by project,time )group by project) AS M ON cmdb.id = M.project ) order by write_cnt_ratio desc  limit 1000
        ```
        
    
    **Group Evaluation**
    
    Auto Label
    
    **Trigger Condition**
    
    **Note**
    
    -   If the number of write operations of a project exceeds 90% of the quota, a Critical alert is triggered.
        
    -   If the number of write operations of a project exceeds 80% of the quota, a Medium alert is triggered.
        
    
    -   When data matches the expression `inflow_ratio > 90`, Severity: Critical
        
    -   When data matches the expression `inflow_ratio > 80`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5543044961/p691249.png)
    
4.  After you configure the parameters, click **OK**.
    

## Quota Exceeded

1.  Click **Create Alert** to configure an alert rule.
    
2.  Select a project for which you want to create an alert rule. You must select the project that stores error logs and metrics.
    
3.  Specify alert trigger conditions and an alert policy based on your business scenario.
    
    The following table describes the parameters that you can configure. You can retain the default settings for other parameters. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service#section-nhx-uf4-hz6).
    
    **Parameter**
    
    **Value**
    
    **Rule Name**
    
    Project Write Operation Quota Exceeded
    
    **Check Frequency**
    
    Fixed Interval, 15 Minutes
    
    **Query Statistics**
    
    -   Type: Logstore
        
    -   Authorization: Default
        
    -   Logstore: internal-error\_log
        
    -   Time Range: 15 Minutes(Relative)
        
    -   Query:
        
        **Important**
        
        By default, an SQL statement can return a maximum of 100 rows of data. If you add limit 1000 to the end of the statement, a maximum of 1,000 rows of data can be returned.
        
        ```
        * and (ErrorCode: ExceedQuota or ErrorCode: QuotaExceed or ErrorCode: ProjectQuotaExceed or ErrorCode:WriteQuotaExceed)| SELECT Project, 
        COUNT(1) AS count where ErrorMsg like '%Project write quota exceed: qps%' GROUP BY Project ORDER BY count DESC LIMIT 1000
        ```
        
    
    **Group Evaluation**
    
    No Grouping
    
    **Trigger Condition**
    
    **Note**
    
    -   If the write operation quota of a project is exceeded for more than 10 times, a Critical alert is triggered.
        
    -   If the write operation quota of a project is exceeded for more than one time, a Medium alert is triggered.
        
    
    -   When data matches the expression `count > 10`, Severity: Critical
        
    -   When data matches the expression `count > 1`, Severity: Medium
        
    
    **Destination**
    
    Simple Log Service Notification
    
    **Alert Policy**
    
    Standard Mode
    
    **Action Policy**
    
    Select an existing action policy based on your business requirements, or click **Add** to create an action policy. For more information, see [Create an action policy](/help/en/sls/create-an-action-policy/).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691246.png)
    
4.  After you configure the parameters, click **OK**.
    

## **Apply to increase resource quotas**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691259.png) icon.
    
4.  Click **Management** next to **Resource Quotas**.
    
5.  In the **Resource Quotas** panel, increase the quotas of the required resources and click **Save**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6781044961/p691260.png)
