Use the Simple Log Service (SLS) SDK for Go to create a project and logstore, configure an index, write logs, and query the results.

## Before you begin

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   The Simple Log Service SDK for Go is initialized. For more information, see [Initialize the Go SDK for Simple Log Service](/help/en/sls/developer-reference/initialize-the-log-service-go-sdk).
    

## Procedure

### Step 1: Create a project

Call `CreateProject` to create an SLS project.

**Parameter**

**Type**

**Required**

**Description**

**Example**

projectName

string

Yes

The project name. The name must be globally unique within an Alibaba Cloud region and cannot be changed after the project is created. Naming rules:

-   Can contain only lowercase letters, digits, and hyphens (-).
    
-   Must start and end with a lowercase letter or a digit.
    
-   Must be 3 to 63 characters in length.
    

test-project

description

string

Yes

The description of the project.

this is test

```
// Create a project.
ProjectName := "aliyun-test-project"
Description := "test"
project, err := client.CreateProject(ProjectName, Description)
if err != nil {
    if e, ok := err.(*sls.Error); ok && e.Code == "ProjectAlreadyExist" {
        log.Printf("Project : %s already created or has a global name conflict in Alibaba Cloud scope", ProjectName)
    } else {
        log.Fatalf("Create project : %s failed %v", ProjectName, err)
        os.Exit(1)
    }
} else {
    log.Printf("Project : %s created successfully", project.Name)
    time.Sleep(60 * time.Second)
}
```

### Step 2: Create a logstore

Call `CreateLogStore` to create a logstore in the project.

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

ali-test-project

logstoreName

string

Yes

The name of the logstore. The name must be unique within the project. Naming rules:

-   Can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   Must start and end with a lowercase letter or a digit.
    
-   Must be 3 to 63 characters in length.
    

my-logstore

shardCount

int

Yes

The number of shards.

2

ttl

int

Yes

The data retention period, in days. Valid values: 1 to 3650. A value of 3650 specifies permanent retention.

1

autoSplit

bool

No

Specifies whether to enable automatic sharding. `true`: enables automatic sharding. `false`: disables automatic sharding.

true

maxSplitShard

int

No

The maximum number of shards for automatic splitting. Valid values: 1 to 256. **Note**: This parameter is required if autoSplit is set to true.

64

```
// Create a Logstore.
LogStoreName := "aliyun-test-logstore"
var ttl, shardCnt, maxSplitShard int = 3, 2, 64
var autoSplit bool = true
err = client.CreateLogStore(ProjectName, LogStoreName, ttl, shardCnt, autoSplit, maxSplitShard)
if err != nil {
    if e, ok := err.(*sls.Error); ok && e.Code == "LogStoreAlreadyExist" {
        log.Printf("LogStore : %s already created", LogStoreName)
    } else {
        log.Fatalf("Create LogStore : %s failed %v", LogStoreName, err)
        os.Exit(1)
    }
} else {
    log.Printf("Create logstore : %v successfully", LogStoreName)
    time.Sleep(10 * time.Second)
}
```

### Step 3: Create an index

Call `CreateIndex` to enable log querying on the logstore. An index has two parts:

-   **Field index** (`Keys`): Indexes specific fields. Each `sls.IndexKey` specifies the delimiter characters (`Token`), case sensitivity (`CaseSensitive`), and data type (`Type`).
    
-   **Full-text index** (`Line`): Enables full-text search across all log content. The `sls.IndexLine` struct specifies the delimiter characters (`Token`), case sensitivity, and optional field inclusion/exclusion lists (`IncludeKeys`, `ExcludeKeys`).
    

The `Token` field contains the delimiter characters used for text segmentation. SLS splits text at these delimiter characters to produce searchable terms.

```
// Create an index for the Logstore.
index := sls.Index{
    // Field index.
    Keys: map[string]sls.IndexKey{
        "col_0": {
            Token:         []string{" "},
            CaseSensitive: false,
            Type:          "long",
        },
        "col_1": {
            Token:         []string{",", ":", " "},
            CaseSensitive: false,
            Type:          "text",
        },
    },
    // Full-text index.
    Line: &sls.IndexLine{
        Token:         []string{",", ":", " "},
        CaseSensitive: false,
        IncludeKeys:   []string{},
        ExcludeKeys:   []string{},
    },
}
err = client.CreateIndex(ProjectName, LogStoreName, index)
if err != nil {
    if e, ok := err.(*sls.Error); ok && e.Code == "IndexAlreadyExist" {
        log.Printf("Index : already created")
    } else {
        log.Fatalf("Create Index failed %v", err)
        os.Exit(1)
    }
} else {
    log.Println("CreateIndex success")
    time.Sleep(60 * time.Second)
}
```

### Step 4: Write data

Call `PutLogs` to write log data to the logstore. Each request sends one log group (`sls.LogGroup`), which contains a batch of log entries.

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The destination project.

aliyun-test-project

logstore

string

Yes

The destination logstore.

aliyun-test-logstore

topic

string

No

The log topic. If this parameter is not specified or is left empty, the value is set to `""`.

test

source

string

No

The log source. If this parameter is not specified or is left empty, the IP address of the host on which the producer runs is used.

203.0.113.10

content

Slice

Yes

The log or list of logs to send. The log must be in the [LogItem](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-logitem) format.

\-

The following example writes 10 log groups, each containing 100 logs with 10 fields (`col_0` through `col_9`) -- 1,000 logs in total.

```
// Write data to the Logstore.
for loggroupIdx := 0; loggroupIdx < 10; loggroupIdx++ {
    logs := []*sls.Log{}
    for logIdx := 0; logIdx < 100; logIdx++ {
        content := []*sls.LogContent{}
        for colIdx := 0; colIdx < 10; colIdx++ {
            if colIdx == 0 {
                content = append(content, &sls.LogContent{
                    Key:   proto.String(fmt.Sprintf("col_%d", colIdx)),
                    Value: proto.String(fmt.Sprintf("%d", rand.Intn(10000000))),
                })
            } else {
                content = append(content, &sls.LogContent{
                    Key:   proto.String(fmt.Sprintf("col_%d", colIdx)),
                    Value: proto.String(fmt.Sprintf("loggroup idx: %d, log idx: %d, col idx: %d, value: %d", loggroupIdx, logIdx, colIdx, rand.Intn(10000000))),
                })
            }
        }
        log := &sls.Log{
            Time:     proto.Uint32(uint32(time.Now().Unix())),
            Contents: content,
        }
        logs = append(logs, log)
    }
    loggroup := &sls.LogGroup{
        Topic:  proto.String("test"),
        Source: proto.String("203.0.113.10"),
        Logs:   logs,
    }

    err = client.PutLogs(ProjectName, LogStoreName, loggroup)
    if err != nil {
        log.Fatalf("PutLogs failed %v", err)
        os.Exit(1)
    }
    log.Println("PutLogs success")
    time.Sleep(time.Second)
}
```

### Step 5: Query data

Call `GetLogs` to query log data. Pagination behavior depends on the statement type:

**Statement type**

`**line**`

`**offset**`

`**reverse**`

**How to paginate**

**Query-only** (for example, `* and col_0 > 9000000`)

Valid. Maximum value: **100**. Specifies the maximum number of logs to return per request.

Valid. Specifies the start position.

Valid.

Set `line` and `offset`. For example, first page: `line=100, offset=0`. Second page: `line=100, offset=100`.

**Analytic** (contains SQL aggregation or transformation)

Set to **0**.

Set to **0**.

Set to **false**.

Use `LIMIT`, `OFFSET`, and `ORDER BY` clauses in the SQL statement. Setting `line`, `offset`, or `reverse` to other values causes an error.

For more information, see Paginate query and analysis results.

```
// Query logs.
// For a query-only statement, the line, offset, and reverse parameters are valid.
// For an analytic statement, set line to 0, offset to 0, and reverse to false.
response, err := client.GetLogs(ProjectName, LogStoreName, "test", time.Now().Unix()-1800, time.Now().Unix(), "* and col_0 > 9000000", 100, 1, true)
if err != nil {
    log.Fatalf("GetLogs failed %v", err)
    os.Exit(1)
}
log.Printf("Get %d logs", response.Count)
logs := response.Logs
for i := range logs {
    for k, v := range logs[i] {
        log.Printf("key: %s, value: %s", k, v)
    }
    log.Println("======")
}
```

## Complete sample code

Create a file named `SLSQuickStart.go` and paste the following code. This program runs all five steps end-to-end.

```
package main

import (
    "fmt"
    "log"
    "math/rand"
    "os"
    "time"

    sls "github.com/aliyun/aliyun-log-go-sdk"
    "github.com/gogo/protobuf/proto"
)

func main() {
    // SLS endpoint. This example uses the China (Hangzhou) region.
    // Replace with your actual endpoint. Format: {region-id}.log.aliyuncs.com
    Endpoint := "cn-hangzhou.log.aliyuncs.com"

    // Obtain the AccessKey ID and AccessKey Secret from environment variables.
    AccessKeyId := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
    AccessKeySecret := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
    // Temporary security token for the RAM role.
    // An empty value means no temporary security token is used.
    SecurityToken := ""
    // Create an SLS client.
    provider := sls.NewStaticCredentialsProvider(AccessKeyId, AccessKeySecret, SecurityToken)
    client := sls.CreateNormalInterfaceV2(Endpoint, provider)

    // Create a project.
    ProjectName := "aliyun-test-project"
    Description := "test"
    project, err := client.CreateProject(ProjectName, Description)
    if err != nil {
        if e, ok := err.(*sls.Error); ok && e.Code == "ProjectAlreadyExist" {
            log.Printf("Project : %s already created or has a global name conflict in Alibaba Cloud scope", ProjectName)
        } else {
            log.Fatalf("Create project : %s failed %v", ProjectName, err)
            os.Exit(1)
        }
    } else {
        log.Printf("Project : %s created successfully", project.Name)
        time.Sleep(60 * time.Second)
    }

    // Create a Logstore.
    LogStoreName := "aliyun-test-logstore"
    err = client.CreateLogStore(ProjectName, LogStoreName, 3, 2, true, 64)
    if err != nil {
        if e, ok := err.(*sls.Error); ok && e.Code == "LogStoreAlreadyExist" {
            log.Printf("LogStore : %s already created", LogStoreName)
        } else {
            log.Fatalf("Create LogStore : %s failed %v", LogStoreName, err)
            os.Exit(1)
        }
    } else {
        log.Printf("Create logstore : %v successfully", LogStoreName)
        time.Sleep(10 * time.Second)
    }

    // Create an index for the Logstore.
    index := sls.Index{
        // Field index.
        Keys: map[string]sls.IndexKey{
            "col_0": {
                Token:         []string{" "},
                CaseSensitive: false,
                Type:          "long",
            },
            "col_1": {
                Token:         []string{",", ":", " "},
                CaseSensitive: false,
                Type:          "text",
            },
        },
        // Full-text index.
        Line: &sls.IndexLine{
            Token:         []string{",", ":", " "},
            CaseSensitive: false,
            IncludeKeys:   []string{},
            ExcludeKeys:   []string{},
        },
    }
    err = client.CreateIndex(ProjectName, LogStoreName, index)
    if err != nil {
        if e, ok := err.(*sls.Error); ok && e.Code == "IndexAlreadyExist" {
            log.Printf("Index : already created")
        } else {
            log.Fatalf("Create Index failed %v", err)
            os.Exit(1)
        }
    } else {
        log.Println("CreateIndex success")
        time.Sleep(60 * time.Second)
    }

    // Write data to the Logstore.
    for loggroupIdx := 0; loggroupIdx < 10; loggroupIdx++ {
        logs := []*sls.Log{}
        for logIdx := 0; logIdx < 100; logIdx++ {
            content := []*sls.LogContent{}
            for colIdx := 0; colIdx < 10; colIdx++ {
                if colIdx == 0 {
                    content = append(content, &sls.LogContent{
                        Key:   proto.String(fmt.Sprintf("col_%d", colIdx)),
                        Value: proto.String(fmt.Sprintf("%d", rand.Intn(10000000))),
                    })
                } else {
                    content = append(content, &sls.LogContent{
                        Key:   proto.String(fmt.Sprintf("col_%d", colIdx)),
                        Value: proto.String(fmt.Sprintf("loggroup idx: %d, log idx: %d, col idx: %d, value: %d", loggroupIdx, logIdx, colIdx, rand.Intn(10000000))),
                    })
                }
            }
            log := &sls.Log{
                Time:     proto.Uint32(uint32(time.Now().Unix())),
                Contents: content,
            }
            logs = append(logs, log)
        }
        loggroup := &sls.LogGroup{
            Topic:  proto.String("test"),
            Source: proto.String("203.0.113.10"),
            Logs:   logs,
        }

        err = client.PutLogs(ProjectName, LogStoreName, loggroup)
        if err != nil {
            log.Fatalf("PutLogs failed %v", err)
            os.Exit(1)
        }
        log.Println("PutLogs success")
        time.Sleep(time.Second)
    }

    // Query logs.
    // For a query-only statement, the line, offset, and reverse parameters are valid.
    // The line parameter specifies the maximum number of logs to return per query (max 100).
    // Use line and offset for paging. Example: first page line=100, offset=0;
    // second page line=100, offset=100.
    //
    // For an analytic statement, set line to 0, offset to 0, and reverse to false.
    // Use LIMIT, OFFSET, and ORDER BY in the SQL statement for pagination.
    // Otherwise, an error is reported.
    //
    // For more information, see Paginate query and analysis results.
    response, err := client.GetLogs(ProjectName, LogStoreName, "test", time.Now().Unix()-1800, time.Now().Unix(), "* and col_0 > 9000000", 100, 1, true)
    if err != nil {
        log.Fatalf("GetLogs failed %v", err)
        os.Exit(1)
    }
    log.Printf("Get %d logs", response.Count)
    logs := response.Logs
    for i := range logs {
        for k, v := range logs[i] {
            log.Printf("key: %s, value: %s", k, v)
        }
        log.Println("======")
    }
}
```

For more sample code, see [Aliyun Log Go SDK](https://github.com/aliyun/aliyun-log-go-sdk).

## Expected output

When the program runs successfully, the output looks similar to the following:

```
Project : aliyun-test-project created successfully.
Create logstore : aliyun-test-logstore successfully.
CreateIndex success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
PutLogs success
Get 61 logs
key: source, value: 203.0.113.10
key: time, value: 1627282116
key: col_0, value: 9886757
key: col_1, value: loggroup idx: 6, log idx: 87, col idx: 1, value: 2673724
key: col_2, value: loggroup idx: 6, log idx: 87, col idx: 2, value: 5822012
key: col_8, value: loggroup idx: 6, log idx: 87, col idx: 8, value: 3996746
key: topic, value: test
key: col_9, value: loggroup idx: 6, log idx: 87, col idx: 9, value: 7646111
key: col_3, value: loggroup idx: 6, log idx: 87, col idx: 3, value: 8872632
key: col_4, value: loggroup idx: 6, log idx: 87, col idx: 4, value: 1839836
key: col_5, value: loggroup idx: 6, log idx: 87, col idx: 5, value: 6967415
key: col_6, value: loggroup idx: 6, log idx: 87, col idx: 6, value: 5872057
key: col_7, value: loggroup idx: 6, log idx: 87, col idx: 7, value: 3227909
======
......
```

## What's next

-   Explore additional SDK operations and advanced usage patterns in the [Aliyun Log Go SDK repository](https://github.com/aliyun/aliyun-log-go-sdk).
    
-   Learn how to [Initialize the Go SDK for Simple Log Service](/help/en/sls/developer-reference/initialize-the-log-service-go-sdk) with different authentication methods.
