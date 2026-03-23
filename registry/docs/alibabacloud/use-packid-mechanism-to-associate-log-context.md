A [contextual query](/help/en/sls/contextual-query) specifies a log source, such as a specific machine or file. It retrieves the logs before and after a specific log from that source to obtain contextual information. When you process a large volume of logs, you can add a PackId identifier to group related logs. Using a PackId lets you quickly and completely query related log groups to efficiently locate the log context. This topic describes how to add a PackId to a log.

## How it works

The server uses the PackId mechanism to associate log context. The PackId is in the format `Context Prefix-Log Group ID`, for example, `5FA51423DDB54FDA-1E3`. The PackId consists of the following parts:

-   **Context Prefix**: An uppercase hexadecimal number. For example, `5FA51423DDB54FDA`. Logs with the same context prefix belong to the same log context.
    
-   **Log Group ID**: An uppercase hexadecimal number. For example, `1E3`. Within the same log context, the `Log Group ID` increments. For example, `1E3` and `1E4` are adjacent log groups in the same log context.
    

The client generates the PackId and sends it to the server with the log write request. Logs that have the same context prefix are considered to be in the same log context.

## Automatically generate a PackId

-   **Logs written using a producer SDK**: Log data sent from the same producer object instance belongs to the same context and can be used directly for contextual queries. For example, when you [use Aliyun Log Java Producer to write log data](/help/en/sls/developer-reference/use-aliyun-log-java-producer-to-write-log-data-to-log-service) or write logs with the [C SDK](/help/en/sls/developer-reference/log-service-sdk-for-c), the system automatically generates and includes a PackId as the context identity.
    
-   **Logs collected by Logtail**: For logs collected using [Logtail](/help/en/sls/use-logtail-to-collect-data/#concept-ppd-yx5-vdb), a PackId is automatically generated and included. Logs from the same log file on the same collection object, such as a host or pod, belong to the same context and can be used directly for contextual queries.
    

## Manually generate a PackId and upload it using the PutLogs API

### Parameter descriptions

You can use the [PutLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-putlogs) API to write logs to Simple Log Service. After you manually generate a PackId, place it in the LogTags property of the [LogGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-loggroup) in the [PutLogs request](/help/en/sls/developer-reference/api-sls-2020-12-30-putlogs#api-detail-35). Set the Key to `__pack_id__`. The following code provides an example:

```
{
  "Topic": "my-topic",
  "Source": "127.0.0.1",
  "LogTags": [
      {
        "Key": "__pack_id__",
        "Value": "5FA51423DDB54FDA-1"
      },
      {
        "Key": "my_other_tag_key",
        "Value": "my_other_tag_value"
      }
   ],
   "Logs": [
     {
       "Time": 1728961415,
        "Contents": [
            {
              "Key": "hello",
              "Value": "world"
            }
        ]
     }
   ]
}
```

### Sample code

## Java example

1.  Add the following dependencies to the pom.xml file.
    
    ```
     <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version>27.0.1-jre</version>
    </dependency>
    <dependency>
        <groupId>com.aliyun.openservices</groupId>
        <artifactId>aliyun-log</artifactId>
        <version>0.6.111</version>
    </dependency>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>2.0.12</version>
    </dependency>
    ```
    
2.  Use the following code to manually generate a PackId and upload it using the PutLogs API. Replace the parameters `project`, `logstore`, `endpoint`, `accessKeyId`, and `accessKeySecret` as needed.
    
    ```
    package org.example;
    
    import com.aliyun.openservices.log.Client;
    import com.aliyun.openservices.log.common.LogItem;
    import com.aliyun.openservices.log.common.TagContent;
    import com.aliyun.openservices.log.exception.LogException;
    import com.aliyun.openservices.log.request.PutLogsRequest;
    import com.google.common.base.Charsets;
    import com.google.common.hash.Hashing;
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;
    
    import java.lang.management.ManagementFactory;
    import java.net.InetAddress;
    import java.net.NetworkInterface;
    import java.net.SocketException;
    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.Enumeration;
    import java.util.List;
    import java.util.concurrent.atomic.AtomicLong;
    
    public class Main {
        private static final String TAG_PACK_ID = "__pack_id__";
        private static final int TOKEN_LEN = 4;
    
        public static void main(String[] args) throws LogException {
            System.out.println("Hello world!");
            // Use the same PackIdGenerator for the same context.
            PackIdGenerator generator1 = new PackIdGenerator();
            System.out.println(generator1.generateNewPackId());
            System.out.println(generator1.generateNewPackId());
            System.out.println(generator1.generateNewPackId());
            // Use different PackIdGenerators for different contexts.
            PackIdGenerator generator2 = new PackIdGenerator();
            System.out.println(generator2.generateNewPackId());
            System.out.println(generator2.generateNewPackId());
    
            // Configure for logs.
            String project = "project";
            String logstore = "logstore";
            String topic = "topic";
            String source = "127.0.0.1";
            Client client = new Client("endpoint", "accessKeyId", "accessKeySecret");
            List<LogItem> logs = new ArrayList<>();
            LogItem log = new LogItem();
            log.PushBack("hello", "world");
            logs.add(log);
    
            // Send a log request.
            PutLogsRequest req = new PutLogsRequest(project, logstore, topic, source, logs);
            // Put the pack ID in the tag list.
            req.SetTags(Arrays.asList(new TagContent(TAG_PACK_ID, generator1.generateNewPackId())));
            client.PutLogs(req);
    
            // Send a log request.
            PutLogsRequest req2 = new PutLogsRequest(project, logstore, topic, source, logs);
            req.SetTags(Arrays.asList(new TagContent(TAG_PACK_ID, generator1.generateNewPackId())));
            client.PutLogs(req2);
        }
    
        public static class NetworkUtils {
            private NetworkUtils() {
            }
    
            public static boolean isIpAddress(final String ipAddress) {
                if (ipAddress == null || ipAddress.isEmpty()) {
                    return false;
                }
                try {
                    final String[] tokens = ipAddress.split("\\.");
                    if (tokens.length != TOKEN_LEN) {
                        return false;
                    }
                    for (String token : tokens) {
                        int i = Integer.parseInt(token);
                        if (i < 0 || i > 255) {
                            return false;
                        }
                    }
                    return true;
                } catch (Exception ex) {
                    return false;
                }
            }
    
            public static String getLocalMachineIp() {
                try {
                    Enumeration<NetworkInterface> networkInterfaces = NetworkInterface.getNetworkInterfaces();
                    while (networkInterfaces.hasMoreElements()) {
                        NetworkInterface ni = networkInterfaces.nextElement();
                        if (!ni.isUp()) {
                            continue;
                        }
                        Enumeration<InetAddress> addresses = ni.getInetAddresses();
                        while (addresses.hasMoreElements()) {
                            final InetAddress address = addresses.nextElement();
                            if (!address.isLinkLocalAddress() && address.getHostAddress() != null) {
                                String ipAddress = address.getHostAddress();
                                if ("127.0.0.1".equals(ipAddress)) {
                                    continue;
                                }
                                if (isIpAddress(ipAddress)) {
                                    return ipAddress;
                                }
                            }
                        }
                    }
                } catch (SocketException ex) {
                    // swallow it
                }
                return null;
            }
        }
    
        public static class PackIdGenerator {
            private static final Logger LOGGER = LoggerFactory.getLogger(PackIdGenerator.class);
            private static final AtomicLong GENERATORID = new AtomicLong(0);
            private final String packIdPrefix;
            private final AtomicLong batchId = new AtomicLong(0);
    
            public PackIdGenerator() {
                packIdPrefix = generatePackIdPrefix(GENERATORID.getAndIncrement()).toUpperCase() + "-";
            }
    
            public String generateNewPackId() {
                return packIdPrefix + Long.toHexString(batchId.getAndIncrement()).toUpperCase();
            }
    
            private String generatePackIdPrefix(Long instanceId) {
                String ip = NetworkUtils.getLocalMachineIp();
                if (ip == null) {
                    LOGGER.warn("Failed to get local machine ip, set ip to 127.0.0.1");
                    ip = "127.0.0.1";
                }
                String name = ManagementFactory.getRuntimeMXBean().getName();
                String input = ip + "-" + name + "-" + instanceId;
                return Hashing.farmHashFingerprint64().hashString(input, Charsets.US_ASCII).toString();
            }
        }
    
    }
    ```
    
    Parameter descriptions in the sample code
    
    **Parameter**
    
    **Parameter descriptions**
    
    **Example**
    
    project
    
    The name of the Simple Log Service project.
    
    test-project
    
    logstore
    
    The name of the Logstore in Simple Log Service.
    
    test-logstore
    
    endpoint
    
    The public endpoint of Simple Log Service. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
    
    cn-hangzhou.log.aliyuncs.com
    
    accessKeyId
    
    The ID used to identify the user. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    
    accessKeySecret
    
    The password used to verify that you own the AccessKey ID. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    yourAccessKeySecret
    

## Go example

1.  Run the following commands in the command line to install the Go SDK and the protobuf dependency package.
    
    ```
    go get -u github.com/aliyun/aliyun-log-go-sdk
    go get google.golang.org/protobuf
    ```
    
2.  Use the following code to manually generate a PackId and upload it using the PutLogs API. Replace the parameters `project`, `logstore`, `endpoint`, `accessKeyId`, and `accessKeySecret` as needed.
    
    ```
    package main
    
    import (
    	"crypto/md5"
    	"fmt"
    	"os"
    	"sync/atomic"
    	"time"
    
    	sls "github.com/aliyun/aliyun-log-go-sdk"
    	"google.golang.org/protobuf/proto"
    )
    
    func main() {
    	// Use the same PackIdGenerator for the same context.
    	g1 := NewPackIdGenerator()
    	fmt.Println(g1.Generate())
    	fmt.Println(g1.Generate())
    	fmt.Println(g1.Generate())
    	// Use different PackIdGenerators for different contexts.
    	g2 := NewPackIdGenerator()
    	fmt.Println(g2.Generate())
    	fmt.Println(g2.Generate())
    
    	// Configure for logs.
    	project := "project"
    	logstore := "logStore"
    	topic := "topic"
    	source := "source"
    
    	client := sls.CreateNormalInterface("endpoint", "accessKeyId", "accessKeySecret", "")
    
    	logs := []*sls.Log{
    		{
    			Time: proto.Uint32(uint32(time.Now().Unix())),
    			Contents: []*sls.LogContent{
    				{
    					Key:   proto.String("hello"),
    					Value: proto.String("world"),
    				},
    				{
    					Key:   proto.String("hi"),
    					Value: proto.String("world"),
    				},
    			},
    		},
    	}
    	// Use the PostLogStoreLogsV2 API to write logs.
    	err := client.PostLogStoreLogsV2(project, logstore, &sls.PostLogStoreLogsRequest{
    		LogGroup: &sls.LogGroup{
    			Topic:  &topic,
    			Source: &source,
    			Logs:   logs,
    			LogTags: []*sls.LogTag{
    				{
    					Key:   proto.String("__pack_id__"), // Add the pack ID to the tag list.
    					Value: proto.String(g1.Generate()),
    				},
    			},
    		},
    	})
    	if err != nil {
    		panic(err)
    	}
    
    	// Use the PutLogs API to write logs. g1.Generate() regenerates a new pack ID.
    	err = client.PutLogs(project, logstore, &sls.LogGroup{
    		Topic:  &topic,
    		Source: &source,
    		Logs:   logs,
    		LogTags: []*sls.LogTag{
    			{
    				Key:   proto.String("__pack_id__"), // Add the pack ID to the tag list.
    				Value: proto.String(g1.Generate()),
    			},
    		},
    	})
    	if err != nil {
    		panic(err)
    	}
    
    }
    
    type PackIdGenerator struct {
    	prefix string
    	id     atomic.Uint64
    }
    
    func NewPackIdGenerator() *PackIdGenerator {
    	return &PackIdGenerator{
    		prefix: generatePackIDPrefix(),
    		id:     atomic.Uint64{},
    	}
    }
    
    func (g *PackIdGenerator) Generate() string {
    	return fmt.Sprintf("%s-%X", g.prefix, g.id.Add(1))
    }
    
    // Make context by (hostname, pid, time).
    func generatePackIDPrefix() string {
    	m := md5.New()
    	m.Write([]byte(time.Now().String()))
    	hostName, _ := os.Hostname()
    	m.Write([]byte(hostName))
    	m.Write([]byte(fmt.Sprintf("%v", os.Getpid())))
    	return fmt.Sprintf("%X", m.Sum(nil))
    }
    ```
    
    Parameter descriptions in the sample code
    
    **Parameter name**
    
    **Description**
    
    **Example**
    
    project
    
    The name of the Simple Log Service project.
    
    test-project
    
    logstore
    
    The name of the Logstore in Simple Log Service.
    
    test-logstore
    
    endpoint
    
    The public endpoint of Simple Log Service. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
    
    cn-hangzhou.log.aliyuncs.com
    
    accessKeyId
    
    The ID used to identify the user. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    
    accessKeySecret
    
    The password used to verify that you own the AccessKey ID. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    yourAccessKeySecret
    

### View log context information

1.  On the page of the target Project, click the target LogStore. On the **Raw Logs** > **Raw** tab, find the target log and click the ![Query logs-004](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2887102371/p863478.png) icon.
    
    **Note**
    
    When logs are submitted using the [PutLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-putlogs) API, Simple Log Service groups logs that have the same PackId context prefix into a single log context. You can click the **Context View** feature to view the contextual information of a specific log. This displays all log groups that share the same context prefix and highlights the target log.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2887102371/p863494.png)
    
2.  Scroll up or down to view the context of the specified log.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0068948671/p863495.png)
    

## References

-   To learn how to view the context of a log in the console, see [Contextual query](/help/en/sls/contextual-query).
    
-   To learn how to write log data to Simple Log Service using an SDK or API, see [Use Aliyun Log Java Producer to write log data](/help/en/sls/developer-reference/use-aliyun-log-java-producer-to-write-log-data-to-log-service), [C SDK](/help/en/sls/developer-reference/log-service-sdk-for-c), or [PutLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-putlogs).
