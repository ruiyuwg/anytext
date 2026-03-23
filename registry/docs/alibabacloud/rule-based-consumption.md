Simple Log Service SDK supports multiple programming languages. You can use the SDK to consume log data. This topic describes how to use Simple Log Service SDK to consume log data.

## **Prerequisites**

-   [Simple Log Service](https://sls.console.alibabacloud.com) is activated.
    
-   The Simple Log Service SDK for Python is initialized.
    

## **Background information**

You can call the PullLogs operation to query log data based on the specified cursors. For more information, see [PullLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-pulllogs). Applications that are developed by using programming languages such as Java, Python, and Go can consume data that is collected by Simple Log Service as consumers or consumer groups.

Simple Log Service supports Simple Log Service Processing Language (SPL) in the following scenarios: real-time consumption, scan-based query, and Logtail collection. For more information, see [SPL overview](/help/en/sls/spl-overview/).

## Procedure

Before you use Simple Log Service SDK for Java, make sure that the SDK is installed. For more information, see [Install Simple Log Service SDK for Java](/help/en/sls/developer-reference/install-log-service-sdk-for-java#task-2094103).

### Use the SDK

The following example shows how to call the PullLogs operation of Simple Log Service SDK to obtain log data for consumption. For more information, see [PullLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-pulllogs).

#### **Parameters**

**Parameter**

**Type**

**Required**

**Description**

**project**

string

Yes

The name of the Simple Log Service project. For more information, see [Manage a project](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

**logStore**

string

Yes

The name of the Simple Log Service Logstore. A Simple Log Service Logstore is used to collect, store, and query logs. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore#title-lb2-cdj-s9y).

**shardId**

int

Yes

The ID of the shard in the Logstore. For more information, see [Shard](/help/en/sls/shard).

#### **Add Maven dependencies**

Open the `pom.xml` file in the root directory of your Java project and add the following code:

```
<dependency>
  <groupId>com.google.protobuf</groupId>
  <artifactId>protobuf-java</artifactId>
  <version>2.5.0</version>
</dependency>
<dependency>
<groupId>com.aliyun.openservices</groupId>
  <artifactId>aliyun-log</artifactId>
  <version>0.6.99</version>
</dependency>
```

#### **Create a file named** `**PullLogsDemo.java**`

Sample code:

```
import com.aliyun.openservices.log.Client;
import com.aliyun.openservices.log.common.Consts;
import com.aliyun.openservices.log.common.LogGroupData;
import com.aliyun.openservices.log.common.Shard;
import com.aliyun.openservices.log.exception.LogException;
import com.aliyun.openservices.log.request.PullLogsRequest;
import com.aliyun.openservices.log.response.ListShardResponse;
import com.aliyun.openservices.log.response.PullLogsResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PullLogsDemo {
    // The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint.
    private static final String endpoint = "cn-hangzhou.log.aliyuncs.com";
    // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
    private static final String accessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    private static final String accessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    // The name of the project.
    private static final String project = "your_project";
    // The name of the Logstore.
    private static final String logStore = "your_logstore";

    public static void main(String[] args) throws Exception {
        // Create a client for Simple Log Service.
        Client client = new Client(endpoint, accessKeyId, accessKeySecret);
        // Query the shards of the Logstore.
        ListShardResponse resp = client.ListShard(project, logStore);
        System.out.printf("%s has %d shards\n", logStore, resp.GetShards().size());
        Map<Integer, String> cursorMap = new HashMap<Integer, String>();
        for (Shard shard : resp.GetShards()) {
            int shardId = shard.getShardId();
            // Use the BEGIN cursor or obtain a specific cursor to consume log data. If you want to use the END cursor to consume log data, use Consts.CursorMode.END.
            cursorMap.put(shardId, client.GetCursor(project, logStore, shardId, Consts.CursorMode.BEGIN).GetCursor());
        }
        try {
            while (true) {
                // Obtain logs from each shard.
                for (Shard shard : resp.GetShards()) {
                    int shardId = shard.getShardId();
                    PullLogsRequest request = new PullLogsRequest(project, logStore, shardId, 1000, cursorMap.get(shardId));
                    PullLogsResponse response = client.pullLogs(request);
                    // Obtain logs from log groups by logic. Logs are usually stored in log groups. 
                    List<LogGroupData> logGroups = response.getLogGroups();
                    System.out.printf("Get %d logGroup from logStore:%s:\tShard:%d\n", logGroups.size(), logStore, shardId);
                    // Move the cursor after the obtained logs are processed. 
                    cursorMap.put(shardId, response.getNextCursor());
                }
            }
        } catch (LogException e) {
            System.out.println("error code :" + e.GetErrorCode());
            System.out.println("error message :" + e.GetErrorMessage());
            throw e;
        }
    }
}
```

### Use the SDK and SPL

The following example shows how to call the PullLogs operation of Simple Log Service SDK to obtain log data for SPL-based consumption. For more information, see [PullLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-pulllogs).

#### **Parameters**

**Parameter**

**Type**

**Required**

**Description**

**project**

string

Yes

The name of the Simple Log Service project. For more information, see [Manage a project](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

**logStore**

string

Yes

The name of the Simple Log Service Logstore. A Simple Log Service Logstore is used to collect, store, and query logs. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore#title-lb2-cdj-s9y).

**shardId**

int

Yes

The ID of the shard in the Logstore. For more information, see [Shard](/help/en/sls/shard).

#### **Add Maven dependencies**

Open the `pom.xml` file in the root directory of your Java project and add the following code:

```
<dependency>
  <groupId>com.google.protobuf</groupId>
  <artifactId>protobuf-java</artifactId>
  <version>2.5.0</version>
</dependency>
<dependency>
<groupId>com.aliyun.openservices</groupId>
  <artifactId>aliyun-log</artifactId>
  <version>0.6.99</version>
</dependency>
```

#### **Create a file named** `**PullLogsWithSPLDemo.java**`

Sample code:

```
import com.aliyun.openservices.log.Client;
import com.aliyun.openservices.log.common.*;
import com.aliyun.openservices.log.common.Consts;
import com.aliyun.openservices.log.exception.LogException;
import com.aliyun.openservices.log.request.PullLogsRequest;
import com.aliyun.openservices.log.response.ListShardResponse;
import com.aliyun.openservices.log.response.PullLogsResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PullLogsWithSPLDemo {
    // The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint.
    private static final String endpoint = "cn-hangzhou.log.aliyuncs.com";
    // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
    private static final String accessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    private static final String accessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    // The name of the project.
    private static final String project = "your_project";
    // The name of the Logstore.
    private static final String logStore = "your_logstore";

    public static void main(String[] args) throws Exception {
        // Create a client for Simple Log Service.
        Client client = new Client(endpoint, accessKeyId, accessKeySecret);
        // Query the shards of the Logstore.
        ListShardResponse resp = client.ListShard(project, logStore);
        System.out.printf("%s has %d shards\n", logStore, resp.GetShards().size());
        Map<Integer, String> cursorMap = new HashMap<Integer, String>();
        for (Shard shard : resp.GetShards()) {
            int shardId = shard.getShardId();
            // Use the BEGIN cursor or obtain a specific cursor to consume log data. If you want to use the END cursor to consume log data, use Consts.CursorMode.END.
            cursorMap.put(shardId, client.GetCursor(project, logStore, shardId, Consts.CursorMode.BEGIN).GetCursor());
        }
        try {
            while (true) {
                // Obtain logs from each shard.
                for (Shard shard : resp.GetShards()) {
                    int shardId = shard.getShardId();
                    PullLogsRequest request = new PullLogsRequest(project, logStore, shardId, 1000, cursorMap.get(shardId));
                    request.setQuery("* | where cast(body_bytes_sent as bigint) > 14000");
                    request.setPullMode("scan_on_stream");
                    PullLogsResponse response = client.pullLogs(request);
                    // Obtain logs from log groups by logic. Logs are usually stored in log groups. 
                    List<LogGroupData> logGroups = response.getLogGroups();
                    System.out.printf("Get %d logGroup from logStore:%s:\tShard:%d\n", logGroups.size(), logStore, shardId);

                    // Move the cursor after the obtained logs are processed. 
                    cursorMap.put(shardId, response.getNextCursor());
                }
            }
        } catch (LogException e) {
            System.out.println("error code :" + e.GetErrorCode());
            System.out.println("error message :" + e.GetErrorMessage());
            throw e;
        }
    }
}
```

## **References**

-   [Overview of Simple Log Service SDK for Java](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-java)
    
-   [Use Simple Log Service SDK for Java to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-consumer-groups)
    
-   For more information about sample code, see [Alibaba Cloud Log Service SDK for Java](https://github.com/aliyun/aliyun-log-java-sdk) on GitHub.
