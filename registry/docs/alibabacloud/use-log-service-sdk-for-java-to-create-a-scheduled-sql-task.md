Call the CreateScheduledSQL API to create a Scheduled SQL task.

**Note**

The Simple Log Service (SLS) SDK for Scheduled SQL is no longer updated. Use the [Alibaba Cloud SDK](https://api.aliyun.com/api-tools/sdk/Sls?version=2020-12-30&language=java-async-tea&tab=primer-doc) to manage [Scheduled SQL](https://api.aliyun.com/api/Sls/2020-12-30/CreateScheduledSQL?sdkStyle=dara).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8936386571/p1002978.png)

## **Prerequisites**

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   Simple Log Service SDK for Java is initialized. For more information, see [Initialize Simple Log Service SDK for Java](/help/en/sls/developer-reference/initialize-the-log-service-java-sdk).
    

## Background information

SLS provides the Scheduled SQL feature to periodically analyze data, store aggregate data, and project and filter data. A Scheduled SQL task supports standard SQL-92 and the SLS query and analysis syntax. The task runs periodically based on a scheduling rule and writes the results to a destination database, which can be a logstore or a Metricstore.

You can create a Scheduled SQL task in the SLS console. For more information, see [Create a Scheduled SQL task](/help/en/sls/logstore-import-logstore#task-2098733).

SLS also provides the ScheduledSQL, JobSchedule, and ScheduledSQLConfiguration classes for creating Scheduled SQL tasks using the Java SDK.

-   ScheduledSQL: Creates a Scheduled SQL task.
    
-   JobSchedule: Creates a scheduling task for a Scheduled SQL task.
    
-   ScheduledSQLConfiguration: Creates the basic configurations for a Scheduled SQL task.
    

## Parameters

### Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

**project**

String

Yes

The name of the project.

ali-test-project

**scheduledSql**

Object

Yes

The configurations of the Scheduled SQL task.

\-

#### **ScheduledSQL**

The following table describes the parameters.

**Parameter**

**Type**

**Required**

**Description**

**Example**

**name**

String

Yes

The name of the Scheduled SQL task. The name must follow these rules:

-   The name must be unique within a project.
    
-   The name can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   The name must start and end with a lowercase letter or a digit.
    
-   The name must be 4 to 63 characters in length.
    

export-123-456

**displayName**

String

Yes

The display name of the Scheduled SQL task. In the SLS console, choose **Task Management** > **Scheduled SQL** to view the list of display names for Scheduled SQL tasks.

my-scheduled-sql-job

**description**

String

No

The description of the Scheduled SQL task.

this is a scheduled sql job.

**configuration**

Object

Yes

The configurations of the Scheduled SQL task.

\-

**schedule**

Object

Yes

The scheduling configurations of the task.

\-

#### **JobSchedule**

Use `JobSchedule jobSchedule = new JobSchedule();` to create a scheduling task for a Scheduled SQL task. The following table describes the parameters.

**Parameter**

**Type**

**Required**

**Description**

**Example**

**type**

String

Yes

The frequency at which the Scheduled SQL task is scheduled. Each time the task is scheduled, an execution instance is generated. The scheduling interval determines the scheduling time of each execution instance.

-   FixedRate: The Scheduled SQL task is scheduled at a fixed interval. The interval is specified by the interval parameter.
    
-   Hourly: The Scheduled SQL task is scheduled once every hour.
    
-   Daily: The Scheduled SQL task is scheduled once a day at a fixed time.
    
-   Cron: The Scheduled SQL task is scheduled at the interval specified by a cron expression.
    

FixedRate

**interval**

String

No

Specifies the fixed interval when type is set to FixedRate.

-   3s: 3 seconds.
    
-   5m: 5 minutes.
    
-   2h: 2 hours.
    

50m

**cronExpression**

String

No

If you set type to Cron, configure the cron expression.

A cron expression is accurate to the minute and uses a 24-hour clock. For example, `0 0/1 * * *` indicates that the task runs once every hour, starting from 00:00.

To configure a time zone, you must set the scheduling type to **Cron**. For a list of common time zones, see [Time zones](/help/en/sls/time-zones-2#concept-2071766).

None

**runImmediately**

boolean

No

Specifies whether to run the scheduled task immediately.

False

**timeZone**

String

No

The time zone of the cron expression. The default value is empty, which indicates UTC+8.

+0800

**delay**

int

No

The time to delay the execution after the scheduled time. Unit: seconds. Valid values: 0 to 120.

If data is written to the logstore with a delay, configure a delayed execution to ensure data integrity.

10

#### **ScheduledSQLConfiguration**

Use `ScheduledSQLConfiguration scheduledSQLConfiguration = generateConfig();` to create the configurations for a Scheduled SQL task. The following table describes the parameters.

**Parameter**

**Type**

**Required**

**Description**

**Example**

**script**

String

Yes

The query statement.

\*|select count(1)

**sqlType**

String

Yes

The SQL type. The value is fixed as searchQuery.

searchQuery

**resourcePool**

String

Yes

The type of the resource pool. The value is fixed as enhanced. SLS provides enhanced resource pools for data analytics.

enhanced

**roleArn**

String

Yes

The Alibaba Cloud Resource Name (ARN) of the RAM role that is used to read data from the source logstore. For more information about how to obtain the ARN, see [Grant a custom RAM role the permissions to analyze data in the source logstore](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task#section-7yt-07b-st7).

`acs:ram::11111111:role/aliyunlogetlrole`

**destRoleArn**

String

Yes

The ARN of the RAM role that is used to write data to the destination logstore. For more information about how to obtain the ARN, see the following topics:

-   If the source logstore and destination logstore belong to the same Alibaba Cloud account, see [Grant a custom RAM role the permissions to write data to the destination logstore](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task#section-y0g-xgw-dqb).
    
-   If the source logstore and destination logstore belong to different Alibaba Cloud accounts, see [Step 2: Grant RAM role b of Account B the permissions to write data to the destination logstore](/help/en/sls/grant-a-ram-role-the-permissions-to-access-logstores-across-alibaba-cloud-accounts#section-x7c-o0e-sye).
    

`acs:ram::11111111:role/aliyunlogetlrole`

**sourceLogstore**

String

Yes

The name of the source logstore.

source-logstore

**destEndpoint**

String

Yes

The endpoint of the destination logstore.

**Note**

-   Communication between Alibaba Cloud services. For example, if you use an ECS instance in the same region to access SLS, use a private endpoint. The private endpoint is `http://cn-hangzhou-intranet.log.aliyuncs.com`.
    
-   Access to SLS over the Internet. For example, if you use an API or SDK to access SLS over the Internet from your on-premises machine, use a public endpoint. The public endpoint is `http://cn-hangzhou.log.aliyuncs.com`.
    
-   Compared with private endpoints, public endpoints incur charges for outbound traffic over the Internet. For more information, see [Billing items of Simple Log Service](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    

For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance#title-bqu-zsi-7nv).

`http://cn-hangzhou-intranet.log.aliyuncs.com`

**destProject**

String

Yes

The name of the destination project.

my-project

**destLogstore**

String

Yes

The name of the destination logstore.

my-logstore

**dataFormat**

String

Yes

The write mode.

-   log2log: Imports data from a logstore to a logstore. This means that data from the source logstore is processed by a Scheduled SQL task and then stored in the destination logstore.
    
-   log2metric: Imports data from a logstore to a Metricstore. This means that data from the source logstore is processed by a Scheduled SQL task and then stored in the destination Metricstore.
    
-   metric2metric: Imports data from a Metricstore to a Metricstore. This means that data from the source Metricstore is processed by a Scheduled SQL task and then stored in the destination Metricstore.
    

log2log

**fromTimeExpr**

String

Yes

The expression for the start of the SQL time window. For more information, see [Time expression syntax](/help/en/sls/time-expression-syntax#concept-2067490).

@m - 12s

**toTimeExpr**

String

Yes

The expression for the end of the SQL time window. For more information, see [Time expression syntax](/help/en/sls/time-expression-syntax#concept-2067490).

@m

**maxRetries**

Long

Yes

The maximum number of retries if the SQL analysis fails. If the number of retries exceeds this value, the execution instance stops and fails.

10

**maxRunTimeInSeconds**

Long

Yes

The maximum runtime for an SQL analysis. If the runtime exceeds this value, the execution instance stops and fails.

60

**fromTime**

Long

Yes

The time when scheduling starts.

**Important**

The scheduling time of an instance must be within this range. If the time is outside this range, the Scheduled SQL task no longer generates new instances.

1653965045

**toTime**

Long

Yes

The time when scheduling ends. A value of 0 indicates that scheduling never ends.

1653968045

**parameters**

Object

Yes

If you set dataFormat to log2metric or metric2metric, configure the SQL parameters. For more information about the configuration items, see

[Log2MetricParameters](#3f01a2c4365cg) and [Metric2MetricParameters](#5b261b6cdds44).

```
{
  addLabels: "{}",
  hashLabels: "[]",
  labelKeys: "[\"your label1\",\"your label2\"]",
  metricKeys: "[\"your Indicator1\",\"your Indicator2\"]",
  metricName: "",
  timeKey: ""
}
```

#### **parameters**

-   When you import data from a logstore to a Metricstore using a Scheduled SQL task, you must also configure the following parameters:
    
    Table 1. Log2MetricParameters
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **metricKeys**
    
    `"[\"a\", \"b\", \"c\"]"`
    
    The metric columns. This corresponds to the Metric Columns parameter in the SQL Configurations section of the console.
    
    SLS aggregates data based on your query statement. Select one or more columns that contain numeric values from the query results as metric columns. For more information, see [Time series data](/help/en/sls/metric#concept-2539048).
    
    **labelKeys**
    
    `"[\"d\", \"e\", \"f\"]"`
    
    The label columns. This corresponds to the Labels parameter in the SQL Configurations section of the console.
    
    SLS aggregates data based on your query statement. Select one or more columns from the query results as label data. For more information, see [Time series data](/help/en/sls/metric#concept-2539048).
    
    **hashLabels**
    
    `"[\"d\", \"f\"]"`
    
    This corresponds to the Rehash parameter in the SQL Configurations section of the console.
    
    After you enable **Rehash**, configure **Hash Columns**. This allows data with the same column value to be written to the same shard, which improves data locality and query performance.
    
    The values of the **Hash Columns** depend on the query results. Select one or more columns from the query results as hash columns. For example, if you set **Hash Columns** to status, data with the same value for the status field is written to the same shard.
    
    **addLabels**
    
    `"[\"m\":\"h\", \"n\":\"i\"]"`
    
    This corresponds to the Additional Labels parameter in the SQL Configurations section of the console.
    
    Add static labels in key-value pairs to identify the properties of the metrics.
    
    For example, set label\_key to app and label\_value to ingress-nginx.
    
    **timeKey**
    
    time
    
    This corresponds to the Time Column parameter in the SQL Configurations section of the console.
    
    -   If you select a time column from the query results (the column value is a UNIX timestamp, such as `atime:1627025331`), the system uses this column as the time for the time series data.
        
    -   If you select **Empty**, the system uses the start time of the query time range as the time for the time series data.
        
    
    ![Log2MetricParameters](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3928005961/p444851.png)
    
-   When you import data from a Metricstore to a Metricstore using a Scheduled SQL task, you must also configure the following parameters:
    
    Table 2. Metric2MetricParameters
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **metricName**
    
    my-metric
    
    If you want to change the name of the metric that you are analyzing, you can enter a new metric name. For more information, see [Time series data](/help/en/sls/metric#concept-2539048).
    
    **Important**
    
    We recommend that you change the metric name only when you are analyzing a single metric. This renames the metric.
    
    If you are analyzing multiple metrics, changing the metric name renames all metrics to the same new name.
    
    **hashLabels**
    
    `"{\"m\":\"h\", \"n\":\"i\"}"`
    
    This corresponds to the Rehash parameter in the SQL Configurations section of the console.
    
    After you enable **Rehash**, you can configure **Hash Columns**. This allows data with the same label value to be written to the same shard, which improves data locality and query performance.
    
    The values of the **Hash Columns** depend on the existing label information of the time series data. For example, if the existing label information is `{"alert_id":"alert-1608815762-545495","alert_name":"alert_closed","status":"inactive"}`, the valid values for **Hash Columns** are alert\_id, alert\_name, and status. If you set **Hash Columns** to status, data with the same value for the status field is written to the same shard.
    
    **addLabels**
    
    `"{\"m\":\"h\", \"n\":\"i\"}"`
    
    This corresponds to the Additional Labels parameter in the SQL Configurations section of the console.
    
    Add static labels in key-value pairs to identify the properties of the metrics.
    
    For example, set label\_key to app and label\_value to ingress-nginx.
    
    ![Metric2MetricParameters](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3928005961/p444853.png)
    

### Response parameters

For more information about the response parameters, see [CreateScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-createscheduledsql).

## Examples

This example shows how to create an App.java file that stores the analysis results from a source logstore in a destination logstore.

```
import com.aliyun.openservices.log.Client;
import com.aliyun.openservices.log.common.*;
import com.aliyun.openservices.log.exception.LogException;
import com.aliyun.openservices.log.request.CreateScheduledSQLRequest;

public class App {
    // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.
    static String accessId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    static String accessKey = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");

    // Set the project and logstore names.
    static String sourceProject="ali-test-project";
    static String destProject="my-project";
    static String sourceLogstore = "source-logstore";
    static String destLogstore = "my-logstore";
    static String roleArn = "acs:ram::11111111:role/aliyunlogetlrole";
    // Set the endpoint for SLS. This example uses the endpoint for the China (Hangzhou) region. Replace it with your actual endpoint.
    static String endpoint = "http://cn-hangzhou.log.aliyuncs.com";
    static String destEndpoint = "http://cn-hangzhou-intranet.log.aliyuncs.com";
    static long fromTime = 1648105200; // 15:00:00, March 23, 2022
    private static String script = "* | select a, b, c from log";

    private static ScheduledSQLBaseParameters generateParams(String dataFormat) {
        if (dataFormat.equalsIgnoreCase("log2log")) {
            return null;
        } else if (dataFormat.equalsIgnoreCase("log2metric")) {
            Log2MetricParameters params = new Log2MetricParameters();
            params.setMetricKeys("[\"a\", \"b\", \"c\"]");
            params.setLabelKeys("[\"d\", \"e\", \"f\"]");
            params.setHashLabels("[\"d\", \"f\"]");
            params.setAddLabels("{\"m\":\"h\", \"n\":\"i\"}");
            params.setTimeKey("time");
            return params;
        } else if (dataFormat.equalsIgnoreCase("metric2metric")) {
            Metric2MetricParameters params = new Metric2MetricParameters();
            params.setMetricName("name");
            params.setHashLabels("[\"d\", \"f\"]");
            params.setAddLabels("{\"m\":\"h\", \"n\":\"i\"}");
            return params;
        }
        return null;
    }

    private static ScheduledSQLConfiguration generateConfig() {
        ScheduledSQLConfiguration scheduledSQLConfiguration = new ScheduledSQLConfiguration();
        scheduledSQLConfiguration.setScript(script);
        scheduledSQLConfiguration.setSqlType("searchQuery");
        scheduledSQLConfiguration.setResourcePool("enhanced");
        scheduledSQLConfiguration.setRoleArn(roleArn);
        scheduledSQLConfiguration.setDestRoleArn(roleArn);
        scheduledSQLConfiguration.setSourceLogstore(sourceLogstore);
        scheduledSQLConfiguration.setDestEndpoint(destEndpoint);
        scheduledSQLConfiguration.setDestProject(destProject);
        scheduledSQLConfiguration.setDestLogstore(destLogstore);
        scheduledSQLConfiguration.setDataFormat("log2log");
        scheduledSQLConfiguration.setFromTimeExpr("@m-1m");
        scheduledSQLConfiguration.setToTimeExpr("@m");
        scheduledSQLConfiguration.setMaxRetries(20);
        scheduledSQLConfiguration.setMaxRunTimeInSeconds(600);
        scheduledSQLConfiguration.setFromTime(fromTime);
        scheduledSQLConfiguration.setToTime(0L);

        ScheduledSQLBaseParameters params = generateParams(scheduledSQLConfiguration.getDataFormat());
        scheduledSQLConfiguration.setParameters(params);

        return scheduledSQLConfiguration;
    }

    private static ScheduledSQL generateScheduledSQL() {
        ScheduledSQL scheduledSQLStructure = new ScheduledSQL();
        scheduledSQLStructure.setName("export-123-456");
        scheduledSQLStructure.setDisplayName("my-scheduled-sql-job");
        scheduledSQLStructure.setDescription("This is a scheduled SQL job.");
        ScheduledSQLConfiguration scheduledSQLConfiguration = generateConfig();
        scheduledSQLStructure.setConfiguration(scheduledSQLConfiguration);
        JobSchedule jobSchedule = new JobSchedule();
        jobSchedule.setType(JobScheduleType.FIXED_RATE);
        jobSchedule.setInterval("1m");
        jobSchedule.setDelay(10);
        jobSchedule.setRunImmediately(false);
        scheduledSQLStructure.setSchedule(jobSchedule);
        return scheduledSQLStructure;
    }

    public static void main(String[] args) {
        Client client = new Client(endpoint, accessId, accessKey);
        ScheduledSQL scheduledSQL = generateScheduledSQL();
        CreateScheduledSQLRequest request = new CreateScheduledSQLRequest(sourceProject, scheduledSQL);
        try {
            client.createScheduledSQL(request);
        } catch (LogException e) {
            e.printStackTrace();
        }
    }
} 
```

## References

-   For more information about the API operations to manage Scheduled SQL tasks, see the following topics:
    
    -   [CreateScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-createscheduledsql)
        
    -   [DeleteScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-deletescheduledsql)
        
    -   [UpdateScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-updatescheduledsql)
        
    -   [EnableScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-enablescheduledsql)
        
    -   [DisableScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-disablescheduledsql)
        
    -   [ListScheduledSQLs](/help/en/sls/developer-reference/api-sls-2020-12-30-listscheduledsqls)
        
    -   [GetScheduledSQL](/help/en/sls/developer-reference/api-sls-2020-12-30-getscheduledsql)
        
    
-   For more sample code, see [Alibaba Cloud Simple Log Service SDK for Java](https://github.com/aliyun/aliyun-log-java-sdk) on GitHub.
