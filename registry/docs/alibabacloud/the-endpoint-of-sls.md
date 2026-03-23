Simple Log Service (SLS) lets you download logs or query and analysis results to your local computer. This topic describes the available download methods and procedures.

## Download methods

Download logs or query and analysis results from the SLS console, OpenAPI, Cloud Shell, command-line interface (CLI), or SDK.

**Important**

-   If you use the SLS CLI or an SDK, you can download an unlimited amount of data. However, downloads may be interrupted by network issues.
    
-   Only the console supports compressed downloads.
    
-   If a logstore uses the pay-by-ingested-data billing method, you are not charged for downloading query and analysis results (SQL results). For more information, see [Pay-by-ingested-data](/help/en/sls/billing-per-amount-of-data-written#main-2351526).
    
-   If a logstore uses the pay-by-feature billing method, you are charged for using the Dedicated SQL feature when you download query and analysis results (SQL results). For more information about billing, see [Billable items for the pay-by-feature billing method](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    

**Item**

**Download from the console (Recommended)**

**Download using OpenAPI**

**Download using the CLI**

**Download using Cloud Shell**

**Download using an SDK**

Data volume limit

-   Query only: You can download up to 20 million rows of data from logstores in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), and Singapore regions. For other regions, you can download up to 1 million rows. The data volume cannot exceed 20 GB.
    
-   SQL analysis: You can download up to 1 million rows of data. The data volume cannot exceed 2 GB.
    

-   Query only: You can download up to 20 million rows of data from logstores in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), and Singapore regions. For other regions, you can download up to 1 million rows. The data volume cannot exceed 20 GB.
    
-   SQL analysis: You can download up to 1 million rows of data. The data volume cannot exceed 2 GB.
    

-   Query only: Unlimited.
    
-   SQL analysis: You can download up to 1 million rows of data. The data volume cannot exceed 2 GB.
    

-   Query only: Unlimited.
    
-   SQL analysis: You can download up to 1 million rows of data. The data volume cannot exceed 2 GB.
    

-   Query only: Unlimited.
    
-   SQL analysis: You can download up to 1 million rows of data. The data volume cannot exceed 2 GB.
    

Deployment

None.

None.

Manually install the SLS CLI.

Automatic deployment. You must wait for initialization on first use.

Manually install an SLS SDK and write custom code.

Authorization

[Download permission configuration](#6a16422d06435)

[Download permission configuration](#6a16422d06435)

Manual configuration.

Automatic configuration.

Manual configuration.

Dedicated SQL

The Dedicated SQL feature is used to download SQL analysis results.

The Dedicated SQL feature is used to download SQL analysis results.

Not used.

Not used.

Configure parameters as needed.

Outbound internet traffic

None.

None.

If the tool is deployed on an ECS instance in the same region as the project and you use an SLS private endpoint, no outbound internet traffic fees are incurred.

If the project is in the China (Shanghai) region, no outbound internet traffic fees are incurred.

If the tool is deployed on an ECS instance in the same region as the project and you use an SLS private endpoint, no outbound internet traffic fees are incurred.

NAS integration

None.

None.

Manual configuration, if required.

Automatic configuration.

Manual configuration, if required.

You can also ship logs to Object Storage Service (OSS) and then download them from OSS. For more information, see [Create an OSS data shipping job (new version)](/help/en/sls/create-oss-shipping-tasks-new-version#task-2156382).

**Download permission configuration (click to view)**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:ListDownloadJobs",
        "log:CreateDownloadJob",
        "log:GetDownloadJob",
        "log:DeleteDownloadJob"
      ],
      "Resource": [
        "acs:log:*:*:project/your-project-name/downloadjob/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

## Procedure

### Download from the console

SLS lets you download logs or query and analysis results directly from the console to your local computer. The download procedure is similar for both. This section uses log downloads as an example. To download query and analysis results, run a query and analysis, and then on the **Graph** tab, click **Download Log**.

**Important**

-   If the number of logs exceeds the limit for a single download, only the maximum number of logs is downloaded. To download all logs, narrow the time range for your query and download the logs in batches.
    
-   Each Alibaba Cloud account supports up to three concurrent download operations. The total number of downloads is not limited. An error may occur if you start more than three concurrent downloads or if multiple RAM users download logs at the same time. If an error occurs, wait for the other operations to complete and try again.
    
-   Download records from the last 24 hours are saved. Older records are automatically deleted.
    
-   If a download task fails because of a network error or an inaccurate query, the system automatically retries the task. If the task still fails after three retries, its status changes to Failed.
    

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project.
    
3.  On the **Log Storage** > **Logstores** tab, click the logstore.
    
4.  Enter a search statement and select a time range.
    
5.  On the **Raw Logs** tab, choose **![下载日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0571777961/p103211.png)** > **Download Log**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6697065371/p874595.png)
    
6.  In the **Download Log** dialog box, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    The name of the download task.
    
    **Log Quantity**
    
    Select the number of logs to download.
    
    **Data Format**
    
    The CSV and JSON formats are supported.
    
    -   If you select CSV, the column names in the file are generated based on the fields of the first 100 logs. If subsequent logs contain new fields, the new fields are stored in the last column of the CSV file in JSON format. The name of the last column is empty.
        
    -   If you select JSON, the content of each log is converted to JSON format and written to the file as a single line.
        
    
    **Quote**
    
    Select a quote character to enclose special characters in logs and prevent them from being escaped.
    
    **Download Inaccurate Results**
    
    If you set this parameter to **No**, the download fails if the query results are inaccurate.
    
    **Compression Method**
    
    Supported compression methods include gzip, lz4, and zstd. You can also choose not to compress the logs.
    
    If you download many logs, we strongly recommend that you compress them. This can significantly reduce the download volume and time.
    
7.  In the **Download Tasks** dialog box, wait for the task **Status** to change to **Successful**. Then, click **Download** to save the logs to your local computer.
    
    You can also select **![Download Logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0571777961/p103211.png)** > **Download Tasks** on the **Raw Logs** tab to open the **Download Tasks** dialog box and view the download records.
    

## Download through OpenAPI

Call the [CreateDownloadJob](/help/en/sls/developer-reference/api-sls-2020-12-30-createdownloadjob) operation to create a log download task.

**Important**

-   If the number of logs exceeds the limit for a single download, only the maximum number of logs is downloaded. To download all logs, narrow the time range for your query and download the logs in batches.
    
-   Each Alibaba Cloud account supports up to three concurrent download operations. The total number of downloads is not limited. An error may occur if you start more than three concurrent downloads or if multiple RAM users download logs at the same time. If an error occurs, wait for the other operations to complete and try again.
    
-   Download records from the last 24 hours are saved. Older records are automatically deleted.
    
-   If a download task fails because of a network error or an inaccurate query, the system automatically retries the task. If the task still fails after three retries, its status changes to Failed.
    

### Download using Cloud Shell

Cloud Shell is located in the China (Shanghai) region. If your logstore is not in the China (Shanghai) region, outbound internet traffic fees are incurred when you download logs. For more information about pricing, see [Pricing](https://www.alibabacloud.com/product/log-service/pricing?spm=a3c0i.139163.9288850920.1.7690637avzyiqo). For instructions, see [Use Cloud Shell to download log data](/help/en/sls/developer-reference/use-cloud-shell-to-download-logs-from-log-service#task-2113828).

### Download using the CLI

To download a large volume of logs, use the CLI.

1.  Install the CLI. For more information, see [Install the CLI](/help/en/sls/developer-reference/install-log-service-cli#task-2082420).
    
2.  Obtain the AccessKey pair for your account. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
    
3.  Run the command to download logs. For more information, see [get\_log\_all](/help/en/sls/developer-reference/get-log-all).
    
    For example, run the download command in the CLI. After the command runs successfully, the logs are automatically downloaded to the `downloaded_data.txt` file in the current directory.
    
    ```
    aliyunlog log get_log_all --project="aliyun-test-project" --logstore="aliyun-test-logstore" --from_time="2024-07-01 15:33:00+8:00" --to_time="2024-07-09 15:23:00+8:00"  --query="status:200|select request_method as method,COUNT(*) as pv group by method order by pv" --region-endpoint="cn-hangzhou.log.aliyuncs.com" --format-output=json --access-id="LT***CyGg" --access-key="8P***zi" >> ./downloaded_data.txt
    ```
    

For more information, see [Use the SLS CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).

### Download using an SDK

To download a large volume of logs, use an SDK.

**Note**

The SDK operation for downloading logs is the same as the operation for querying logs.

The following Python SDK code provides an example:

```
import os
import time

from aliyun.log import LogClient
from aliyun.log import GetLogsRequest

# The endpoint of SLS.
endpoint = 'cn-qingdao.log.aliyuncs.com'
# Obtain the AccessKey ID and AccessKey secret from environment variables.
accessKeyId = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
accessKey = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')
# The project name.
project = 'your-project-name'
# The logstore name.
logstore = 'your-logstore-name'
client = LogClient(endpoint, accessKeyId, accessKey)
request = GetLogsRequest("project1", "logstore1", fromTime=int(time()-3600), toTime=int(time()), topic='', query="*", line=100, offset=0, reverse=False)
# or
# request = GetLogsRequest("project1", "logstore1", fromTime="2018-1-1 10:10:10", toTime="2018-1-1 10:20:10", topic='', query="*", line=100, offset=0, reverse=False)


res = client.get_logs(request)
res.log_print()
```

For more information, see [SDK Reference Overview](/help/en/sls/developer-reference/overview-of-log-service-sdk#reference-n3h-2sq-zdb).
