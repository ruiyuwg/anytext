This topic describes the event list, event types, and message formats in DataWorks, and details each field in an event message.

## **Background**

DataWorks categorizes events as Regular Events or Extension Point Events. This classification depends on whether an event can block a DataWorks operation and allow a subscribed self-managed service to return a result.

-   **Regular Event**: You can subscribe to this type of event by using Open Events (OpenEvent), but it does not block internal DataWorks operations. For more information, see [Open Events (OpenEvent)](/help/en/dataworks/user-guide/openevent/).
    
-   **Extension Point Event**: After you subscribe to this type of event, you can use the Extensions feature to provide a custom response. When an [extension](/help/en/dataworks/user-guide/extensions/) is used to control an operation, the operation pauses until your extension returns a result.
    

The following list categorizes the supported events by module and specifies each event's classification (**Regular Event** or **Extension Point Event**), the **Type** used in EventBridge, and the **eventCode** used for Extensions.

-   **Type:** The field used to filter event messages in EventBridge. For details, see [Enable event message subscription](/help/en/dataworks/user-guide/enable-event-message-subscription-1#title-6ut-zud-vj2).
    
-   **eventCode**: The code that corresponds to an Event Type. During local development, you can obtain this code from the event message sent by DataWorks.
    

## **Workspace events**

Workspace-level modules generate **Workspace-level Events**. For example, events occur when a node runs in DataStudio or when the status of an auto-triggered instance changes in the Operation Center. The following **Event List** details the supported events for each module, their types (Regular Event or Extension Point Event), and their message format.

The **Message formats** tab in this section provides a partial description of the message format. For the complete message format sent to EventBridge or Function Compute, see [Appendix: Message formats](#e10d7321b4faj)**.**

### **DataWorks events**

## Events

**Event type**

**Event and trigger**

**Regular Event**

**Extension Point Event**

**EventBridge event type**

**Extension event code**

Node Change

Create a node

-   Deploy a new node to the production environment.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824878.png)

`dataworks:NodeChange:NodeChangeCreated`

`node-change-created`

Update a node

-   Modify a node in the development environment.
    
-   Deploy changes to the production environment.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824868.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824878.png)

`dataworks:NodeChange:NodeChangeUpdated`

`node-change-updated`

File Change

-   Node
    
-   Resource
    
-   Function
    

File Deletion Pre-event

Triggered when you delete a file in the development environment.

**Note**

The system moves deleted files to the recycle bin.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824879.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824869.png)

`dataworks:FileChange:DeleteFile`

`delete-file`

File Commit Pre-event

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824880.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824870.png)

`dataworks:FileChange:CommitFile`

`commit-file`

File Deployment Pre-event

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824882.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824871.png)

`dataworks:FileChange:DeployFile`

`deploy-file`

Code Run Pre-event

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824883.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824872.png)

`dataworks:FileChange:RunFile`

`run-file`

Table Change

Table Commit Pre-event

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824885.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824874.png)

`dataworks:TableChange:CommitTable`

`commit-table`

Table Deployment Pre-event

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824886.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824875.png)

`dataworks:TableChange:DeployTable`

`deploy-table`

## Message format

#### **Node change events (create and update)**

The following example shows the message body for a node creation, modification, or deletion event. The event payload is in the `data` field.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "nodeName": "****",
    "programType": "ODPS_SQL",
    "cronExpress": "00 04 00 * * ?",
    "blockBusiness": false,
    "schedulerType": "NORMAL",
    "ownerId": "19****735",
    "priority": 1,
    "baselineId": 70***287,
    "operator": "19***735", // The UID of the operator.
    "eventCode": "node-change-created",
    "repeatability": true,
    "modifyTime": 17***864,
    "createTime": 17***864,
    "tenantId": 28***656,
    "nodeId": 70***003,
    "projectId": 9***4
  }
}
```

The following table describes the fields in the event message.

**Parameter**

**Type**

**Description**

**nodeName**

String

The node name.

**programType**

String

The code type of the file. You can call the [ListFileType](/help/en/dataworks/api-listfiletype#doc-api-dataworks-public-ListFileType) operation or refer to [supported node types](/help/en/dataworks/user-guide/dataworks-nodes/) for more information.

**cronExpress**

String

The cron expression for periodic scheduling.

This parameter corresponds to the **Schedule** > **Properties** > **Cron Expression** for a **DataStudio** task in the [DataWorks Console](https://partners-intl.aliyun.com).

After you configure the **Scheduling Cycle** and **Scheduled Time**, DataWorks automatically generates a Cron Expression. Examples:

-   Scheduled to run at 05:30 every day: `00 30 05 * * ?`
    
-   Scheduled to run at the 15th minute of each hour: `00 15 * * * ?`
    
-   Scheduled to run every 10 minutes: `00 00/10 * * * ?`
    
-   Scheduled to run every 10 minutes from 08:00 to 17:00 every day: `00 00-59/10 8-17 * * * ?`
    
-   Scheduled to run at 00:20 on the first day of each month: `00 20 00 1 * ?`
    
-   Scheduled to run every three months, starting from 00:10 on January 1: `00 10 00 1 1-12/3 ?`
    
-   Scheduled to run at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`
    

**Note**

Cron expression limits:

-   The minimum scheduling interval is 5 minutes.
    
-   The earliest scheduled time is 00:05 each day.
    

**schedulerType**

String

The scheduling type of the node. Valid values:

-   **NORMAL (0)**: A normal, auto-triggered task. The task is run periodically.
    
-   **MANUAL (1)**: A manual task. The task is not run periodically.
    
-   **PAUSE (2)**: A frozen task. The task is run periodically, but its status is immediately set to Failed upon startup.
    
-   **SKIP (3)**: A dry-run task. The task is run periodically, but its status is immediately set to Succeeded upon startup.
    
-   **SKIP\_UNCHOOSE (4)**: An unselected task in a temporary workflow. Applies only to temporary workflows. Its status is immediately set to Succeeded upon startup.
    
-   **SKIP\_CYCLE (5)**: A weekly or monthly task whose scheduling cycle has not been reached. The task is run periodically, but its status is immediately set to Succeeded upon startup.
    
-   **CONDITION\_UNCHOOSE (6)**: A downstream task that is not selected by an ancestor branch node (IF). It is treated as a dry-run task.
    
-   **REALTIME\_DEPRECATED (7)**: A real-time generated periodic instance that has expired. Its status is immediately set to Succeeded.
    

**ownerId**

String

The Alibaba Cloud account ID of the node owner. If this parameter is not specified, it defaults to the caller's Alibaba Cloud account ID.

**priority**

Integer

The node priority. Valid values are 1, 3, 5, 7, and 8. A larger value indicates a higher priority.

**baselineId**

Long

The baseline ID.

**repeatability**

Boolean

Specifies whether the node can be rerun.

-   **true**: The node can be rerun.
    
-   **false**: The node cannot be rerun.
    

**modifyTime**

Long

The modification time of the node.

**createTime**

Long

The creation time of the node.

**nodeId**

Long

The node ID.

**projectId**

Long

The ID of the workspace to which the node belongs.

**tenantId**

Long

The tenant ID.

**operator**

String

The UID of the operator who created, modified, or deleted the node.

**eventCode**

String

The extension event code.

#### File change events (commit, deploy, run, and delete)

-   The following example shows the message body for file **commit** and **deploy** events. The event payload is in the `data` field.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "fileName": "******",
        "extensionBizId": "eb******9ce",
        "changeType": "0",
        "blockBusiness": false,
        "dataSourceName": "0_******engine",
        "operator": "19***735",
        "eventCode": "commit-file",
        "fileCreateTime": "2024-07-12 11:08:50",
        "tenantId": 28***656,
        "fileOwner": "19***735",
        "fileVersion": 1,
        "projectId": 9***4,
        "fileType": 10,
        "fileId": 50***830,
        "resourceType": 1
      }
    }
    ```
    
    The following table describes the fields in the event message.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **operator**
    
    String
    
    The UID of the operator who committed or deployed the file.
    
    **projectId**
    
    Long
    
    The ID of the workspace to which the file belongs.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **nodeId**
    
    Long
    
    The ID of the node.
    
    **fileType**
    
    Long
    
    The code type of the file. You can call the [ListFileType](/help/en/dataworks/api-listfiletype#doc-api-dataworks-public-ListFileType) operation or refer to [supported node types](/help/en/dataworks/user-guide/dataworks-nodes/) for more information.
    
    **fileName**
    
    String
    
    The file name.
    
    **fileOwner**
    
    String
    
    The file owner.
    
    **extensionBizId**
    
    String
    
    The process ID of the extension hook.
    
    **changeType**
    
    String
    
    The type of change to the file. Valid values:
    
    -   **0**: Create a file.
        
    -   **1**: Update a file.
        
    -   **2**: Delete a file.
        
    
    **fileCreateTime**
    
    String
    
    The time when the file was created, in the `yyyy-MM-dd HH:mm:ss` format.
    
    **fileId**
    
    Long
    
    The file ID.
    
    **fileVersion**
    
    Long
    
    The file version.
    
    **dataSourceName**
    
    String
    
    The data source name.
    
    **eventCode**
    
    String
    
    The extension event code.
    
-   The following example shows the message body for file delete and run events. The event payload is in the `data` field.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "fileName": "***",
        "extensionBizId": "bf******6e3",
        "blockBusiness": false,
        "operator": "19***735",
        "eventCode": "delete-file",
        "fileCreateTime": "2024-07-12 11:08:50", // The time when the file was created.
        "tenantId": 28***656,
        "fileOwner": "19***735", // The owner of the file.
        "nodeId": 70***003,
        "projectId": 9***4,
        "fileType": 10,
        "fileId": 50***830,
        "resourceType": 1
      }
    }
    ```
    
    The following table describes the fields in the event message.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **operator**
    
    String
    
    The UID of the operator who deleted or ran the file.
    
    **projectId**
    
    Long
    
    The ID of the workspace to which the file belongs.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **nodeId**
    
    Long
    
    The ID of the node.
    
    **fileType**
    
    Long
    
    The code type of the file. You can call the [ListFileType](/help/en/dataworks/api-listfiletype#doc-api-dataworks-public-ListFileType) operation or refer to [supported node types](/help/en/dataworks/user-guide/dataworks-nodes/) for more information.
    
    **fileName**
    
    String
    
    The file name.
    
    **fileOwner**
    
    String
    
    The file owner.
    
    **extensionBizId**
    
    String
    
    The process ID of the extension blocking process.
    
    **fileCreateTime**
    
    String
    
    The time when the file was created, in the `yyyy-MM-dd HH:mm:ss` format.
    
    **fileId**
    
    Long
    
    The file ID.
    
    **eventCode**
    
    String
    
    The extension event code.
    

#### Table change events (commit and deploy)

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "operator": "**************",
    "projectId": 12*****56,
    "tenantId": 12******56,
    "extensionBizId": "12***56",
    "tableName":"table1",
    "tableType":"ODPS",  
    "maxComputeProject":"project1"
  }
}
```

The following table describes the fields in the event message.

**Parameter**

**Type**

**Description**

**operator**

String

The UID of the operator who committed or deployed the table.

**projectId**

Long

The workspace ID.

**tenantId**

Long

The tenant ID.

**extensionBizId**

String

The process ID of the extension hook.

**tableName**

String

The table name.

**tableType**

String

The table type. The value is **ODPS**.

**maxComputeProject**

String

The name of the MaxCompute Project.

### **Data integration event list**

## Event list

**Event type**

**Event**

**Regular Event**

**Extension Point Event**

**EventBridge event type**

**Extension event code (eventCode)**

Node change event

Start Job

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

`dataworks:NodeChange:StartDiJob`

`start-diJob`

Batch Start Job

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

`dataworks:NodeChange:BatchStartDiJob`

`batch-start-diJob`

## Message formats

#### Node change event: Start job

The following example shows the message body for the **Node change event: Start Job**. The `data` field contains the event payload.

```
## Message V1: Start Job event (table count <= 500)
{
    "datacontenttype": "application/json;charset=utf-8",
    "data": {
        "eventCode": "start-diJob",
        "extensionBizId": "0a4***b8ae",
        "extensionBizName": "sync_mysql_to_odps_20240726_192307",
        "appId": 293624,
        "showTableMapping": true,
        "tenantId": 28***656,
        "blockBusiness": true,
        "id": 5280,
        "projectId": 9***4,
        "tableMapping": [
            {
                "srcTable": "xb_test_116",
                "dstDatasourceName": "odps_first",
                "srcDatabaseName": "xiaobo_sharding_79fz",
                "srcDatasourceName": "mysql_3357_pub_ip_1",
                "dstTable": "ods_xb_test_116"
            },
            {
                "srcTable": "xb_test_117",
                "dstDatasourceName": "odps_first",
                "srcDatabaseName": "xiaobo_sharding_79fz",
                "srcDatasourceName": "mysql_3357_pub_ip_1",
                "dstTable": "ods_xb_test_117"
            },
            {
                "srcTable": "xb_test_118",
                "dstDatasourceName": "odps_first",
                "srcDatabaseName": "xiaobo_sharding_79fz",
                "srcDatasourceName": "mysql_3357_pub_ip_1",
                "dstTable": "ods_xb_test_118"
            },
            {
                "srcTable": "xb_test_135",
                "dstDatasourceName": "odps_first",
                "srcDatabaseName": "xiaobo_sharding_79fz",
                "srcDatasourceName": "mysql_3357_pub_ip_1",
                "dstTable": "ods_xb_test_135"
            }
        ],
        "operator": "1504650005316516"
    }
}

## Message V2: Start Job event (table count <= 500)
{
    "datacontenttype": "application/json;charset=utf-8",
    "data": {
        "extensionBizId": "59d***50fc",
        "extensionBizName": "sync_mysql_to_holo_20240911_170801",
        "blockBusiness": true,
        "operator": "19***735",
        "setting": {
            "lastStartPosition": "2024-09-11 12:00:00"
        },
        "eventCode": "start-diJob",
        "jobId": 5777,
        "forceRun": false,
        "appId": 293624,
        "showTableMapping": true,
        "tenantId": 28***656,
        "startAsV2": false,
        "tableMapping": [
            {
                "srcTable": "test_verify1",
                "dstDatasourceName": "molin_db",
                "srcDatabaseName": "di_test",
                "srcDatasourceName": "mysql_public",
                "dstTable": "test_verify1"
            },
            {
                "srcTable": "test_verify1_dst",
                "dstDatasourceName": "molin_db",
                "srcDatabaseName": "di_test",
                "srcDatasourceName": "mysql_public",
                "dstTable": "test_verify1_dst"
            },
            {
                "srcTable": "mysql_0_timetest2",
                "dstDatasourceName": "molin_db",
                "srcDatabaseName": "di_test",
                "srcDatasourceName": "mysql_public",
                "dstTable": "mysql_0_timetest2"
            }
        ]
    }
}

## Message V2: Start Job event (table count > 500, showTableMapping is false)
{
    "datacontenttype": "application/json;charset=utf-8",
    "data": {
        "eventCode": "start-diJob",
        "jobId": 5502,
        "forceRun": false,
        "extensionBizId": "f4c***7cbc",
        "extensionBizName": "sync_mysql_to_holo_20240412_213634",
        "appId": 330914,
        "showTableMapping": false,
        "tenantId": 28***656,
        "blockBusiness": true,
        "startAsV2": false,
        "operator": "19***735",
        "setting": {
            "lastStartPosition": "2024-04-12 22:07:02",
            "startDateTime": "2024-09-10 17:00:00",
            "timeZone": "Asia/Shanghai"
        }
    }
}

## Regular expression example
{
    "datacontenttype": "application/json;charset=utf-8",
    "data": {
        "eventCode": "start-diJob",
        "jobId": 5778,
        "forceRun": false,
        "extensionBizId": "a5d***75ba",
        "extensionBizName": "sync_mysql_to_holo_20240912_170517",
        "appId": 293624,
        "showTableMapping": true,
        "tenantId": 28***656,
        "blockBusiness": true,
        "startAsV2": false,
        "tableMapping": [
            {
                "srcTable": "test.*",
                "dstDatasourceName": "molin_db",
                "srcDatabaseName": ".*",
                "srcDatasourceName": "mysql_public",
                "dstTable": "aaa"
            },
            {
                "srcTable": "shard.*",
                "dstDatasourceName": "molin_db",
                "srcDatabaseName": ".*",
                "srcDatasourceName": "mysql_public",
                "dstTable": "vvv"
            }
        ],
        "operator": "19***735"
    }
}
```

The following table describes the fields.

**Parameter**

**Type**

**Description**

**projectId**

Long

The ID of the DataWorks workspace.

**operator**

String

The operator's UID.

**extensionBizName**

String

The name of the solution.

**showTableMapping**

Boolean

Specifies whether to return the table mapping. Valid values:

-   **true**: Returns the table mapping.
    
-   **false**: Does not return the table mapping.
    

If the number of tables exceeds 500, `showTableMapping` defaults to `false`.

**tableMapping**

JSONArray

An array of objects defining each table mapping.

**srcDatasourceName**

String

The name of the data source from which data is read.

**srcDatabaseName**

String

The name of the source database.

**srcTable**

String

The name of the source table.

**dstDatasourceName**

String

The name of the data source to which data is written.

**dstTable**

String

The name of the destination table.

**tenantId**

Long

The ID of the tenant.

**eventCode**

String

The extension event code.

#### Node change event: Batch start job

The following example shows the message body for the **Node change event: Batch Start Job**. The `data` field contains the event payload.

```
{
    "datacontenttype": "application/json;charset=utf-8",
    "data": {
        "needErrorMessage": false,
        "extensionBizId": "2de***c4c6",
        "extensionBizName": "sync_mysql_to_holo_20240911_170801,sync_mysql_to_odps_20240726_192307",
        "errorMessageOnlyFailedFileIds": false,
        "blockBusiness": true,
        "env": "prod",
        "operator": "15***516",
        "setting": {
            "startDateTime": "2024-09-12 14:00:00",
            "timeZone": "Asia/Shanghai"
        },
        "jobIds": [
            5777,
            5679
        ],
        "eventCode": "batch-start-diJob",
        "tableMappings": [
            {
                "extensionBizName": "sync_mysql_to_holo_20240911_170801",
                "id": 5777,
                "tableMapping": [
                    {
                        "srcTable": "test_verify1",
                        "dstDatasourceName": "molin_db",
                        "srcDatabaseName": "di_test",
                        "srcDatasourceName": "mysql_public",
                        "dstTable": "test_verify1"
                    },
                    {
                        "srcTable": "test_verify1_dst",
                        "dstDatasourceName": "molin_db",
                        "srcDatabaseName": "di_test",
                        "srcDatasourceName": "mysql_public",
                        "dstTable": "test_verify1_dst"
                    },
                    {
                        "srcTable": "mysql_0_timetest2",
                        "dstDatasourceName": "molin_db",
                        "srcDatabaseName": "di_test",
                        "srcDatasourceName": "mysql_public",
                        "dstTable": "mysql_0_timetest2"
                    }
                ]
            },
            {
                "extensionBizName": "sync_mysql_to_odps_20240726_192307",
                "id": 5679,
                "tableMapping": [
                    {
                        "srcTable": "xb_test_116",
                        "dstDatasourceName": "odps_first",
                        "srcDatabaseName": "xiaobo_sharding_79fz",
                        "srcDatasourceName": "mysql_3357_pub_ip_1",
                        "dstTable": "ods_xb_test_116"
                    },
                    {
                        "srcTable": "xb_test_117",
                        "dstDatasourceName": "odps_first",
                        "srcDatabaseName": "xiaobo_sharding_79fz",
                        "srcDatasourceName": "mysql_3357_pub_ip_1",
                        "dstTable": "ods_xb_test_117"
                    },
                    {
                        "srcTable": "xb_test_118",
                        "dstDatasourceName": "odps_first",
                        "srcDatabaseName": "xiaobo_sharding_79fz",
                        "srcDatasourceName": "mysql_3357_pub_ip_1",
                        "dstTable": "ods_xb_test_118"
                    },
                    {
                        "srcTable": "xb_test_135",
                        "dstDatasourceName": "odps_first",
                        "srcDatabaseName": "xiaobo_sharding_79fz",
                        "srcDatasourceName": "mysql_3357_pub_ip_1",
                        "dstTable": "ods_xb_test_135"
                    }
                ]
            }
        ],
        "appId": 293624,
        "showTableMapping": true,
        "tenantId": 52***018,
        "projectId": 9***4
    }
}
```

The following table describes the fields.

**Parameter**

**Type**

**Description**

**projectId**

Long

The ID of the DataWorks workspace.

**operator**

String

The operator's UID.

**extensionBizName**

String

The name of the solution.

**setting**

JSONObject

The startup configuration.

**startDateTime**

String

The scheduled start time, formatted as `YYYY-MM-DD HH:MM:SS`.

**timeZone**

String

The time zone for the `startDateTime`, such as `Asia/Shanghai`.

**tableMappings**

JSONArray

An array containing the details for each table mapping.

**srcDatasourceName**

String

The name of the data source from which data is read.

**srcDatabaseName**

String

The name of the source database.

**srcTable**

String

The name of the source table.

**dstDatasourceName**

String

The name of the data source to which data is written.

**dstTable**

String

The name of the destination table.

**showTableMapping**

Boolean

Specifies whether to return the table mapping. Valid values:

-   **true**: Returns the table mapping.
    
-   **false**: Does not return the table mapping.
    

If the number of tables exceeds 500, `showTableMapping` defaults to `false`.

**tenantId**

Long

The ID of the tenant.

**eventCode**

String

The extension event code.

### **Operation center events**

## Event list

**Important**

Modifying a node's scheduling resource group or owner triggers the `node-change-updated` event.

**Event type**

**Event and operation**

**Regular Event**

**Extension Point Event**

**EventBridge event type**

**(Type)**

**Extension event code (eventCode)**

Node change event

Delete a node

-   Undeploy a node from the production environment.
    
-   Delete a node from the recycle bin.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

`dataworks:NodeChange:NodeChangeDeleted`

`node-change-deleted`

Pre-event for node Undeploy

Triggered when you undeploy an auto-triggered node from the production environment.

**Note**

This operation also deletes the node in DataStudio and moves it to the recycle bin.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

`dataworks:NodeChange:UndeployNode`

`undeploy-node`

Pre-event for node freeze

**Important**

This event also triggers the `node-change-updated` event.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

`dataworks:NodeChange:FreezeNode`

`freeze-node`

Pre-event for node unfreeze

**Important**

This event also triggers the `node-change-updated` event.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

`dataworks:NodeChange:UnFreezeNode`

`unfreeze-node`

Backfill Data Operation Event

Pre-event for Backfill Data

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p826830.png)

`dataworks:BackfillDataOperate:BackfillData`

`backfill-data`

Instance Status Change

Triggered when the status of an auto-triggered instance changes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844906.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844908.png)

`dataworks:InstanceStatusChanges:InstanceStatusChanges`

`instance-status-changes`

Instance Change Event

Freeze an instance

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844908.png)

`dataworks:InstanceChange:FreezeInstance`

`freeze-instance`

Unfreeze an instance

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844908.png)

`dataworks:InstanceChange:UnfreezeInstance`

`unfreeze-instance`

Terminate an instance

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844908.png)

`dataworks:InstanceChange:KillInstance`

`kill-instance`

Rerun an instance

-   Rerun an instance
    
-   Rerun descendant Instances
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844908.png)

`dataworks:InstanceChange:RerunInstance`

`rerun-instance`

Set an instance to Succeeded

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p844908.png)

`dataworks:InstanceChange:SetInstanceSuccess`

`set-instance-success`

Delete an instance's specified upstream dependencies

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902177.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

`dataworks:InstanceChange:DeleteTaskInstanceDependencies`

`delete-task-instance-dependencies`

Pre-event for instance freeze

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902177.png)

`dataworks:InstanceChange:PreFreezeInstance`

`pre-freeze-instance`

Pre-event for instance unfreeze

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902177.png)

`dataworks:InstanceChange:PreUnfreezeInstance`

`pre-unfreeze-instance`

Pre-event for instance rerun

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902177.png)

`dataworks:InstanceChange:PreRerunInstance`

`pre-rerun-instance`

Pre-event for set instance to Succeeded

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902177.png)

`dataworks:InstanceChange:PreSetInstanceSuccess`

`pre-set-instance-success`

Pre-event for instance kill

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902177.png)

`dataworks:InstanceChange:PreKillInstance`

`pre-kill-instance`

Delete an expired instance

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891578371/p902178.png)

`dataworks:InstanceChange:ExpiredTaskInstancesDeleted`

`expired-task-instances-deleted`

Workflow Status Change

Change the status of a Workflow

-   Backfill data for an instance
    
-   Run a manually triggered Workflow
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

`dataworks:DagStatusChanges:DagStatusChanges`

`dag-status-changes`

Monitoring and Alerting

Sending a monitoring alert

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824877.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824867.png)

`dataworks:MonitorAlert:WorkbenchMonitorAlert`

`workbench-monitor-alert`

## Message format

#### **Node change events**

-   The following is an example of the message body format for a node deletion event. The message body is the content of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "nodeName": "",
        "programType": "ODPS_SQL",
        "cronExpress": "00 20 00 * * ?",
        "schedulerType": "NORMAL",
        "ownerId": "19****735",
        "priority": 1,
        "baselineId": 117801853,
        "repeatability": true,
        "modifyTime": 1646364549642,
        "createTime": 1646364549642,
        "datasource": "odps_source",
        "tenantId": 28378****10656,
        "nodeId": 100***150,
        "projectId": 30**95,
        "operator": "19***735"  // The operator who performed this action.
      }
    }
    ```
    
    The following table describes the fields in the event message.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **nodeName**
    
    String
    
    The name of the node.
    
    **programType**
    
    String
    
    The code type of the file. You can call the [ListFileType](/help/en/dataworks/api-listfiletype#doc-api-dataworks-public-ListFileType) operation or see [Supported node types](/help/en/dataworks/user-guide/dataworks-nodes/) for more information.
    
    **cronExpress**
    
    String
    
    The cron expression for periodic scheduling.
    
    This parameter corresponds to the of a **DataStudio** task in the [DataWorks Console](https://partners-intl.aliyun.com).
    
    After you configure the **Scheduling Cycle** and **Scheduled Time**, DataWorks automatically generates a cron expression. Examples:
    
    -   Scheduled to run at 5:30 AM every day: `00 30 05 * * ?`
        
    -   Runs at the 15th minute of every hour: `00 15 * * * ?`
        
    -   Schedules a task to run every 10 minutes: `00 00/10 * * * ?`
        
    -   Runs once every 10 minutes from 8:00 to 17:00 every day:`00 00-59/10 8-17 * * * ?`
        
    -   Automatically runs at 00:20 on the 1st of every month: `00 20 00 1 * ?`
        
    -   Starting at 00:10 on January 1, run once every 3 months: `00 10 00 1 1-12/3 ?`
        
    -   Automatic scheduling at 00:05 every Tuesday and Friday: `00 05 00 * * 2,5`
        
    
    **Note**
    
    Cron expression limits:
    
    -   The minimum scheduling interval is 5 minutes.
        
    -   The earliest scheduled time is 00:05 each day.
        
    
    **schedulerType**
    
    String
    
    The scheduling type of the node instance. Valid values:
    
    -   **NORMAL (0)**: A normal, auto-triggered node that the scheduling system runs periodically.
        
    -   **MANUAL (1)**: A manual node. The scheduling system does not run it periodically.
        
    -   **PAUSE (2)**: A frozen node. The scheduling system runs it periodically, but its status is immediately set to Failed when it starts.
        
    -   **SKIP (3)**: A dry-run node. The scheduling system runs it periodically, but its status is immediately set to Succeeded when it starts.
        
    -   **SKIP\_UNCHOOSE (4)**: An unselected node in a temporary workflow. This type is used only in temporary workflows, and its status is immediately set to Succeeded when it starts.
        
    -   **SKIP\_CYCLE (5)**: A weekly or monthly node that is outside its scheduling cycle. The scheduling system runs the node periodically, but its status is immediately set to Succeeded upon startup.
        
    -   **CONDITION\_UNCHOOSE (6)**: A downstream node that is not selected by an ancestor branch node. This node is treated as a dry-run node.
        
    -   **REALTIME\_DEPRECATED (7)**: An expired, real-time, auto-triggered instance whose status is immediately set to Succeeded.
        
    
    **ownerId**
    
    String
    
    The Alibaba Cloud account ID of the node's owner. If empty, this parameter defaults to the caller's account ID.
    
    **priority**
    
    Integer
    
    The priority of the task. The valid values are 1, 3, 5, 7, or 8. The larger the value, the higher the priority.
    
    **baselineId**
    
    Long
    
    The ID of the baseline.
    
    **repeatability**
    
    Boolean
    
    Specifies whether the node can be rerun. Valid values:
    
    -   **true**: The node can be rerun.
        
    -   **false**: The node cannot be rerun.
        
    
    **modifyTime**
    
    Long
    
    The last modified time of the node.
    
    **createTime**
    
    Long
    
    The creation time of the node.
    
    **nodeId**
    
    Long
    
    The ID of the node.
    
    **projectId**
    
    Long
    
    The ID of the workspace to which the node belongs.
    
    **tenantId**
    
    Long
    
    The ID of the tenant to which the node belongs.
    
    **operator**
    
    String
    
    The user ID (UID) of the operator who performed the action on the node.
    
-   The message body format for node freeze, unfreeze, and undeploy events (that is, the content of the `data` field in an event message) is as follows.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "operator": "19***735",
        "projectId": 12***56,
        "tenantId": 28***656,
        "nodeIds":[1,2,3],
        "extensionBizId": "12***56"
      }
    }
    ```
    
    The following table describes the fields in the event message.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **operator**
    
    String
    
    The user ID (UID) of the operator who performed the action.
    
    **projectId**
    
    Long
    
    The ID of the workspace to which the node belongs.
    
    **tenantId**
    
    Long
    
    The ID of the tenant.
    
    **nodeIds**
    
    Array
    
    The IDs of the nodes affected by the operation.
    
    **extensionBizId**
    
    String
    
    The ID of the check process in an extension.
    

#### **Node data backfill**

The following example shows the message body for a data backfilling event. The payload is the content of the `data` field in the event message.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "excludeNodeIds":[],
    "rootNodeId": 1000****271,
    "startFutureInstanceImmediately": false,
    "useMultipleTimePeriods": true,
    "operator": "19***735",
    "eventCode": "backfill-data",
    "multipleTimePeriods": "[{\"bizBeginTime\":\"2022-04-17\",\"bizEndTime\":\"2022-04-17\"}]",
    "parallelGroup": 1,
    "rootNodeProjectId": 12*****8,
    "isParallel": false,
    "name": "P_fff_20220418_215404",
    "tenantId": 16935*****3377,
    "includeNodeIds":
    [
      10***271
    ],
    "projectId": 9***4,
    "order": "asc",
    "extensionBizId": "12***56"
  }
}
```

The following table describes the fields in the payload.

**Parameter**

**Type**

**Description**

**name**

String

The name of the workflow containing the nodes to backfill.

**rootNodeId**

Long

The ID of the root node in the workflow.

**rootNodeProjectId**

Long

The ID of the workspace that contains the workflow's root node.

**includeNodeIds**

Array

An array of node IDs to include in the data backfill.

**excludeNodeIds**

Array

An array of node IDs to exclude from the data backfill. The system generates a dry-run instance for each excluded node. When the system schedules a dry-run instance, it immediately sets the instance's status to Succeeded without running its script.

**bizBeginTime**

String

The start date of a Data timestamp period specified in the `multipleTimePeriods` parameter. The format is `YYYY-MM-DD`.

**bizEndTime**

String

The end date of a Data timestamp period specified in the `multipleTimePeriods` parameter. The format is `YYYY-MM-DD`.

**isParallel**

Boolean

Specifies whether backfill instances for different data timestamps can run in parallel.

-   **true**: Instances can run in parallel.
    
-   **false**: Instances run sequentially.
    

**parallelGroup**

Integer

The number of instance groups to run in parallel. A value of `1` means instances are not grouped.

**startFutureInstanceImmediately**

Boolean

Specifies whether to immediately run instances that are scheduled for a future time.

-   **true**: Future-dated instances run immediately, ignoring their scheduled time.
    
-   **false**: Future-dated instances run at their scheduled time.
    

**order**

String

Specifies the execution order for backfill instances based on their Data timestamp.

-   **asc**: Runs instances in ascending order of their Data timestamp.
    
-   **desc**: Runs instances in descending order of their Data timestamp.
    

**multipleTimePeriods**

String

Specifies segmented Data timestamp periods. Example: `[{\"bizBeginTime\":\"2022-04-17\",\"bizEndTime\":\"2022-04-17\"}]`.

**tenantId**

Long

The tenant ID.

**projectId**

Long

The ID of the workspace where the data backfill operation takes place.

**operator**

String

The ID of the user who initiated the backfill operation.

**extensionBizId**

String

The business process ID of the extension.

**eventCode**

String

The code that identifies the event type. For this event, the value is `backfill-data`.

#### **Task status change event**

The following example shows the message body for a Task Status Change Event. The body is the value of the`data` field.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "beginWaitTimeTime": 1652700576000,
    "dagId": 446***330,
    "dagType": 0,
    "eventCode": "instance-status-changes",
    "taskType": 0,
    "modifyTime": 1652700577000,
    "createTime": 1652543233000,
    "appId": 3*****2,
    "tenantId": 235454***432001,
    "opCode": 31,
    "flowId": 1,
    "nodeId": 100***219,
    "beginWaitResTime": 1652700577000,
    "taskId": 453***169,
    "status": 3
  }
}
```

The following table describes the fields.

**Parameter**

**Type**

**Description**

**finishTime**

Long

The time the task instance finished.

**beginWaitTimeTime**

Long

The time the task instance began waiting for its scheduled runtime.

**beginRunningTime**

Long

The time the task instance started running.

**dagId**

Long

You can retrieve the DAG details based on the `DagId`.

**dagType**

Integer

The type of the DAG. Valid values:

-   **0**: Scheduled task
    
-   **1**: Manual task
    
-   **2**: Smoke testing
    
-   **3**: Data backfill
    
-   **4**: Temporary workflow
    
-   **5**: Manually triggered workflow
    

**taskType**

Integer

The scheduling type of the task instance. Valid values:

-   **0**: NORMAL: A standard scheduled task that runs periodically.
    
-   **1**: MANUAL: A manual task that does not run periodically.
    
-   **2**: PAUSE: A frozen task. This task runs periodically, but its status is immediately set to Failed upon startup.
    
-   **3**: SKIP: A dry-run task. This task runs periodically, but its status is immediately set to Succeeded upon startup.
    
-   **4**: SKIP\_UNCHOOSE: An unselected task in a temporary workflow. This type exists only in temporary workflows. Its status is immediately set to Succeeded upon startup.
    
-   **5**: SKIP\_CYCLE: A weekly or monthly task outside its current scheduling cycle. Its status is immediately set to Succeeded upon startup.
    
-   **6**: CONDITION\_UNCHOOSE: A downstream task not selected by an ancestor branch (IF) node. It is treated as a dry-run task.
    
-   **7**: REALTIME\_DEPRECATED: A real-time, periodically generated instance that has expired. Its status is immediately set to Succeeded.
    

**modifyTime**

Long

The time the task instance was last modified.

**createTime**

Long

The time the task instance was created.

**appId**

Long

The ID of the workspace. To obtain this ID, call the [ListProjects](/help/en/dataworks/api-listprojects#doc-api-dataworks-public-ListProjects) operation.

**tenantId**

Long

The ID of the tenant that owns the workspace where the task instance runs.

**opCode**

Integer

The operation code for the task instance. You can ignore this field.

**flowId**

Long

The ID of the Workflow.

-   For a scheduled task instance, the default value is 1.
    
-   For a task instance in a manually triggered workflow or an internal workflow, this field indicates the actual workflow ID.
    

**nodeId**

Long

The ID of the node that corresponds to the task instance.

**beginWaitResTime**

Long

The time the task instance started waiting for resources.

**taskId**

Long

The ID of the task instance.

**status**

Integer

The Status of the Task. Valid values:

-   **1**: Not run.
    
-   **2**: Waiting for the scheduled time specified by **dueTime** or **cycleTime**.
    
-   **3**: Waiting for Resources.
    
-   **4**: Running.
    
-   **7**: The Task is sent to Data Quality for data validation.
    
-   **8**: Checking Branch conditions.
    
-   **5**: Failed.
    
-   **6**: Succeeded.
    

**eventCode**

String

The event code for the extension.

#### **Instance change events**

This example shows the format of the message body for instance change events. The `data` field contains the event payload.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "eventCode": "freeze-instance",
    "operator": "19***735",
    "projectId": 12***8,
    "projectType": "PROD",
    "taskIds": [
      523***9736
    ],
    "tenantId": 28***656
  }
}
```

The following table describes the fields.

**Parameter**

**Type**

**Description**

**operator**

String

The UID of the user who performed the operation on the instance. Operations include freeze, unfreeze, terminate, rerun, and Set to Succeeded.

**projectType**

String

The runtime environment. Valid values:

-   **PROD**: The production environment.
    
-   **DEV**: The development environment.
    

**taskIds**

List<Long>

A list of instance IDs.

**projectId**

Long

The DataWorks workspace ID.

**tenantId**

Long

The tenant ID for the instance's DataWorks workspace.

**eventCode**

String

The event code.

#### **Instance operation pre-events**

The following example shows the message body for an instance operation pre-event, which is the value of the `data` field in the event message.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "eventCode": "pre-freeze-instance",
    "extensionBizId": "055***afaa",
    "extensionBizName": "Node Name",
    "projectId": 9***4,
    "taskIds": [
      523536569736
    ],
    "tenantId": 28***656,
    "operator": "19***735"
  }
}
```

The following table describes the fields in the sample message.

**Parameter**

**Type**

**Description**

**extensionBizId**

String

The business ID of the extension hook process.

**extensionBizName**

String

The name of the target resource. If multiple resources are affected, this field may contain a summary.

**projectId**

Long

The DataWorks workspace ID.

**taskIds**

List<Long>

A list of instance IDs.

**tenantId**

String

The tenant ID of the workspace that contains the instance.

**operator**

Long

The UID of the user who performed the operation on the instance.

**eventCode**

String

The extension point event code.

#### **Delete expired instances**

The following sample shows an event message for an `expired-task-instances-deleted` event. The event payload is the content of the `data` field.

```
{
    "datacontenttype": "application/json;charset=utf-8",
    "data": {
        "eventCode": "expired-task-instances-deleted",
        "deletedTaskInstanceIds": [
            524***035,
            524***498,
            524***637
        ],
        "appId": 307303,
        "tenantId": 28***656,
        "blockBusiness": false,
        "owner": "1107***538",
        "operationTime": 1734505954897
    }
}
```

The following table describes the fields in the event payload.

**Parameter**

**Type**

**Description**

**deletedTaskInstanceIds**

List

The IDs of the deleted instances.

**owner**

String

The user ID of the instance owner.

**operationTime**

Long

The timestamp of the operation.

**blockBusiness**

Boolean

Specifies whether the extension point blocks the business flow. Valid values:

-   **true**: The flow is blocked.
    
-   **false**: The flow is not blocked.
    

**appId**

Long

The ID of the DataWorks workspace that contains the deleted instances.

**tenantId**

String

The ID of the tenant that owns the workspace.

**operator**

Long

This field is not used in this event.

**eventCode**

String

The event code of the extension point.

#### **Remove upstream dependencies**

The following is an example of the message entity format (i.e., the content of the data field in the event message) for removing specified upstream dependencies of an instance:

```
{
    "datacontenttype": "application/json;charset=utf-8",
    "aliyunaccountid": "110******38",
    "aliyunpublishtime": "2024-12-18T07:12:35.463Z",
    "data": {
        "eventCode": "delete-task-instance-dependencies",
        "upstreamTaskInstanceIds": [
            52******35,
            52******98,
            52******37
        ],
        "appId": 3***03,
        "tenantId": 52******36,
        "blockBusiness": false,
        "taskInstanceId": 52******49,
        "operator": "19***735",
        "operationTime": 1734505954897
    }
}
```

The following table describes the fields in the message payload.

**Parameter**

**Type**

**Description**

**taskInstanceId**

Long

The ID of the downstream instance.

**upstreamTaskInstanceIds**

List

The IDs of the upstream instances removed as dependencies.

**operator**

String

The operator's UID.

**operationTime**

Long

The timestamp of the operation.

#### **Workflow status change event**

The following example shows the payload for a Workflow status change event. This payload is the value of the `data` field in the event message.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "bizDate": "2022-11-07 00:00:00",
    "createTime": "2022-11-08 10:56:32",
    "dagId": 500358972116,
    "dagName": "P_test_spark_true_copy_20221108_105631",
    "eventCode": "dag-status-changes",
    "dagType": 3,
    "flowId": 1,
    "flowName": "ATCLOUD_FLOW",
    "operator": "11****538",
    "projectEnv": "PROD",
    "projectId": 25***63,
    "status": 6,
    "tenantId": 52***736
  }
}
```

The following table describes the fields in the payload.

**Parameter**

**Type**

**Description**

**bizDate**

String

The data timestamp of the workflow. The format is `yyyy-mm-dd hh24:mi:ss`.

**createTime**

String

The creation time of the workflow. The format is `yyyy-mm-dd hh24:mi:ss`.

**dagId**

Long

The ID of the directed acyclic graph (DAG). You can use this ID to query the details of the DAG.

**dagName**

String

The name of the workflow.

**dagType**

Integer

The type of the DAG. Valid values:

-   **0**: scheduled task.
    
-   **1**: manual task.
    
-   **2**: smoke testing.
    
-   **3**: data backfill.
    
-   **4**: temporary workflow.
    
-   **5**: manually triggered workflow.
    

**flowId**

Integer

The ID of the business process that contains the workflow.

**flowName**

String

The name of the business process that contains the workflow.

**operator**

String

The UID of the user who triggered the workflow.

**projectEnv**

String

The workflow environment. Valid values:

-   **DEV**: development environment.
    
-   **PROD**: production environment.
    

**tenantId**

Long

The ID of the tenant that owns the workspace.

**projectId**

Long

The workspace ID.

**status**

Integer

The status of the workflow instance. Valid values:

-   **1**: not run.
    
-   **4**: running.
    
-   **5**: failed.
    
-   **6**: succeeded.
    

**eventCode**

String

The event code for the extension point.

#### **Monitoring and alerting**

-   The following is an example of the message body format for a baseline alert. The message body is the content of the `data` field in the message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "eventCode": "workbench-monitor-alert",
        "alarmType": "SLA_ALERT",
        "baselineId": 137***723,
        "baselineName": "ods layer check task -- hourly",
        "baselineStatus": 3,
        "bizDate": 1654444800000,
        "inGroupId": 14,
        "nodeId": 1000***8734,
        "projectId": 76***34,
        "taskId": 307***3778,
        "tenantId": 28***656
      }
    }
    ```
    
    The following table describes the fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **alarmType**
    
    String
    
    The alert type. Valid values:
    
    -   **SLA\_ALERT**
        
    -   **REMIND\_ALERT**
        
    -   **TOPIC\_ALERT**
        
    
    **baselineId**
    
    Long
    
    The baseline ID.
    
    **baselineName**
    
    String
    
    The baseline name.
    
    **baselineStatus**
    
    Integer
    
    The baseline status. Valid values:
    
    -   **\-1**: Abnormal.
        
    -   **1**: Safe.
        
    -   **2**: Warning.
        
    -   **3**: Overtime.
        
    
    **bizDate**
    
    Long
    
    The business date.
    
    **inGroupId**
    
    Integer
    
    The cycle number of the baseline instance. For a daily baseline, the value is `1`, and for an hourly baseline, the value range is `[1,24]`.
    
    **nodeId**
    
    Long
    
    The ID of the node that caused the baseline to become abnormal.
    
    **projectId**
    
    Long
    
    The ID of the workspace that contains the baseline.
    
    **taskId**
    
    Long
    
    The ID of the node instance that caused the baseline to become abnormal.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **eventCode**
    
    String
    
    The event code for the extension.
    
-   The following is an example of the message body for an event alert, which is the content of the `data` field in the message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "alarmType": "TOPIC_ALERT",
        "nodeId": 1000***315,
        "projectId": 91***09,
        "taskId": 307***0357,
        "taskStatus": 5,
        "tenantId": 28***656,
        "topicId": 1084769
      }
    }
    ```
    
    The following table describes the fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **alarmType**
    
    String
    
    The alert type. Valid values:
    
    -   **SLA\_ALERT**
        
    -   **REMIND\_ALERT**
        
    -   **TOPIC\_ALERT**
        
    
    **topicId**
    
    Long
    
    The topic ID.
    
    **taskStatus**
    
    String
    
    The status of the node instance that triggered the event.
    
    **nodeId**
    
    Integer
    
    The ID of the node that triggered the event.
    
    **projectId**
    
    Long
    
    The ID of the workspace that contains the node that triggered the event.
    
    **taskId**
    
    Long
    
    The ID of the node instance that triggered the event.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
-   The following sample shows the message body format for a task rule alert (the content of the `data` field in the message).
    
    **Note**
    
    A rule can apply to objects such as task nodes, baselines, workspaces, and workflows.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "alarmType": "REMIND_ALERT",
        "nodeIds": "1000***5472,1000***5473,1000***5474",
        "projectId": 9***4,
        "remindId": 7605,
        "remindName": "Error alert",
        "remindType": "ERROR",
        "remindUnit": "NODE",
        "taskIds": "307***0896,307***0870,307***0855",
        "tenantId": 28***656
      }
    }
    ```
    
    The following table describes the fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **alarmType**
    
    String
    
    The alert type. Valid values:
    
    -   **SLA\_ALERT**
        
    -   **REMIND\_ALERT**
        
    -   **TOPIC\_ALERT**
        
    
    **nodeIds**
    
    String
    
    The IDs of the nodes that triggered the alert.
    
    **remindId**
    
    Long
    
    The rule ID.
    
    **remindType**
    
    String
    
    The trigger condition for the rule. Valid values:
    
    -   **FINISHED**: The task is completed.
        
    -   **UNFINISHED**: The task is not completed.
        
    -   **ERROR**: An error occurred during the run.
        
    -   **CYCLE\_UNFINISHED**: The task did not complete within the scheduling cycle.
        
    -   **TIMEOUT**: The run timed out.
        
    
    **projectId**
    
    Long
    
    The ID of the workspace containing the node that triggered the rule.
    
    **remindUnit**
    
    String
    
    The object type that triggered the rule. Valid values:
    
    -   **NODE**: Task node.
        
    -   **GATEWAY\_RES**: Exclusive resource group for scheduling.
        
    -   **DI\_RES**: Resource group for Data Integration.
        
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **taskId**
    
    String
    
    The IDs of the instances that triggered the alert.
    
    **remindName**
    
    String
    
    The rule name.
    
-   The message body format for a resource group rule alert (i.e., the content of the `data` field in the message) is as follows.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "alarmType": "REMIND_ALERT",
        "projectId": 9***4,
        "remindId": 200***186,
        "remindName": "Exclusive Resource Group Alert",
        "remindType": "RES_GROUP_THRESHOLD",
        "remindUnit": "GATEWAY_RES",
        "resourceGroupIdentifier": "S_res_group_195820716552192_1650965857744",
        "resourceGroupName": "emr_exclusive_scheduld",
        "resourceGroupType": "GATEWAY",
        "tenantId": 28***656
      }
    }
    ```
    
    The following table describes the fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **alarmType**
    
    String
    
    The alert type. Valid values:
    
    -   **SLA\_ALERT**
        
    -   **REMIND\_ALERT**
        
    -   **TOPIC\_ALERT**
        
    
    **remindId**
    
    Long
    
    The rule ID.
    
    **remindType**
    
    String
    
    The trigger condition for the rule. Valid values:
    
    -   **FINISHED**: The task is completed.
        
    -   **UNFINISHED**: The task is not completed.
        
    -   **ERROR**: An error occurred during the run.
        
    -   **CYCLE\_UNFINISHED**
        
    -   **TIMEOUT**: The operation timed out.
        
    -   **RES\_GROUP\_THRESHOL**: Resource group utilization.
        
    -   **RES\_GROUP\_WAIT\_AMOUNT**: The number of resource instances waiting in the resource group.
        
    
    **projectId**
    
    Long
    
    The ID of the workspace that contains the node that triggers the rule.
    
    **remindUnit**
    
    String
    
    The object type for the trigger rule. Valid values are as follows:
    
    -   **NODE**: Task node.
        
    -   **GATEWAY\_RES**: Exclusive resource group for scheduling.
        
    -   **DI\_RES**: Resource group for Data Integration.
        
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **remindName**
    
    String
    
    The name of the rule.
    
    **resourceGroupIdentifier**
    
    String
    
    The unique identifier for the resource group.
    
    **resourceGroupName**
    
    String
    
    The name of the resource group.
    
    **resourceGroupType**
    
    String
    
    The type of the resource group. Valid values:
    
    -   **GATEWAY**: Resource group for scheduling.
        
    -   **DI**: Resource group for Data Integration.
        
    

### **Security Center events**

## Events

**Event type**

**Event**

**Regular Event**

**Extension Point Event**

**EventBridge event type**

**Extension event code (eventCode)**

Approval Center

Permission Request created

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825001.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825004.png)

`dataworks:ApprovalChange:ApprovalChangeCreated`

`approval-change-created`

Permission Request finished

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825003.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825001.png)

`dataworks:ApprovalChange:ApprovalChangeFinished`

`approval-change-finished`

Security Center (Table Permission Request)

Table Permission Request: Before Create

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825001.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825004.png)

`dataworks:ApprovalChange:ApprovalChangeBeforeCreate`

`approval-change-before-create`

## Message format

#### **Approval Center**

-   The following examples show the event payloads for creating and completing an Approval Request. The payload is the value of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "appId":194209,
        "assignee":"286098539641742899",
        "assigneeName":"yupeng.sunyp",
        "createTime":1652094363000,
        "eventType":"approval",
        "process":{
          "applicant":"286098539641742899",
          "applicantName":"yupeng.sunyp",
          "approvalContent":{
            "applyPeriod":"2997964800000",
            "applyReason":"Test",
            "arrayData":[
              {
                "ownerBaseId":"1822***45",
                "objectType":"TABLE",
                "odpsTable":"loghub_070103",
                "envType":1,
                "projectGuid":"odps.b_mc1",
                "objectGuid":"odps.b_mc1.loghub_070103",
                "tenantId":28***656,
                "objectName":"loghub_070103",
                "ownerAccountName":"ALIYUN$******(******)",
                "odpsProject":"B_MC1",
                "projectName":"B_MC1",
                "actions":[
                  "Select",
                  "Describe"
                ],
                "projectId":9***4,
                "workspaceId":"9***4"
              }
            ],
            "contentType":"application/json",
            "granteeAccounts":[
              {
                "granteeId":"2860985***99",
                "granteeTypeSub":103,
                "granteeType":1,
                "granteeName":"RAM$dataworks_3h1_1:yupeng.sunyp"
              },
              {
                "granteeId":"237857631119109360",
                "granteeTypeSub":105,
                "granteeType":1,
                "granteeName":"RAM$dataworks_3h1_1:dev"
              }
            ],
            "odpsProjectName":"B_MC1",
            "projectEnv":"1",
            "resourceSummary":"loghub_070103",
            "tenantId":28***656,
            "workspaceId":194209
          },
          "assignmentCategory":"MaxCompute",
          "createTime":1652094363000,
          "processDefinitionId":"definition-3dcc9ce7-d29d-435d-a908-60d4355ff5e2",
          "processId":"528535869984706",
          "status":"Pending",
          "title":"MaxComputeTable",
          "updateTime":1652094363000
        },
        "processId":"528535869984706",
        "status":"Submit",
        "eventCode": "approval-change-created",
        "taskId":"528535870015424",
        "tenantId":28***656,
        "updateTime":1652094364000
      }
    }{
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "appId":227859,
        "assignee":"286098539641742899",
        "eventCode": "approval-change-finished",
        "assigneeName":"******.******",
        "comments":"ces",
        "createTime":1652095981000,
        "eventType":"approval",
        "process":{
            "applicant":"286098***2899",
            "applicantName":"yupeng.sunyp",
            "approvalContent":{
                "applyPeriod":"2997964800000",
                "applyReason":"Test",
                "arrayData":[
                    {
                        "ownerBaseId":"2382***884", 
                        "objectType":"TABLE",
                        "odpsTable":"cdd",
                        "objectNameCn":"******",
                        "envType":1,
                        "projectGuid":"odps.da_simple_202112",
                        "objectGuid":"odps.da_simple_202112.cdd",
                        "tenantId":0,
                        "objectName":"cdd",
                        "ownerAccountName":"RAM$******(******)",
                        "odpsProject":"da_simple_202112",
                        "projectName":"da_simple_202112",
                        "actions":[
                            "Select",
                            "Describe"
                        ],
                        "projectId":9***4,
                        "workspaceId":"9***4"
                    }
                ],
                "contentType":"application/json",
                "granteeAccounts":[
                    {
                        "granteeId":"286***899",
                        "granteeTypeSub":103,
                        "granteeType":1,
                        "granteeName":"RAM$dataworks_3h1_1:yupeng.sunyp"
                    }
                ],
                "odpsProjectName":"da_simple_202112",
                "projectEnv":"1",
                "resourceSummary":"cdd",
                "tenantId":28***656,
                "workspaceId":227859
            },
            "assignmentCategory":"MaxCompute",
            "createTime":1652095981000,
            "processDefinitionId":"definition-6e6418e6-c65f-4f26-a673-88576b1c1e4a",
            "processId":"528***192",
            "status":"Pending",
            "title":"MaxComputeTable",
            "updateTime":1652095981000
        }
    }
    ```
    
    The following table describes the fields.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **appId**
    
    Long
    
    The application ID.
    
    **assignee**
    
    String
    
    The ID of the approver.
    
    **assigneeName**
    
    String
    
    The name of the approver.
    
    **comments**
    
    String
    
    The comments for the approval request.
    
    **createTime**
    
    Long
    
    The timestamp when the approval request was created.
    
    **processId**
    
    String
    
    The ID of the workflow.
    
    **status**
    
    String
    
    The status of the approval request.
    
    **taskId**
    
    String
    
    The ID of the approval task.
    
    **tenantId**
    
    String
    
    The tenant ID.
    
    **updateTime**
    
    String
    
    The timestamp when the approval request was updated.
    
    **eventType**
    
    String
    
    The type of the event.
    
    **process**
    
    Object
    
    The workflow object.
    
    **applicant**
    
    String
    
    The ID of the applicant.
    
    **applicantName**
    
    String
    
    The name of the applicant.
    
    **assignmentCategory**
    
    String
    
    The category of the approval request.
    
    **createTime**
    
    String
    
    The timestamp when the workflow was created.
    
    **processDefinitionId**
    
    String
    
    The ID of the workflow definition.
    
    **processId**
    
    String
    
    The ID of the workflow.
    
    **status**
    
    String
    
    The status of the workflow.
    
    **title**
    
    String
    
    The title of the workflow.
    
    **updateTime**
    
    Long
    
    The timestamp when the workflow was updated.
    
    **approvalContent**
    
    Object
    
    The details of the approval request.
    
    **applyPeriod**
    
    String
    
    The validity period of the requested permissions.
    
    **applyReason**
    
    String
    
    The reason for the approval request.
    
    **contentType**
    
    String
    
    The type of the approval content.
    
    **odpsProjectName**
    
    String
    
    The name of the MaxCompute project.
    
    **resourceSummary**
    
    String
    
    The resource summary.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **workspaceId**
    
    Long
    
    The workspace ID.
    
    **projectEnv**
    
    String
    
    The environment of the MaxCompute project.
    
    **granteeAccounts**
    
    Array
    
    A list of grantee accounts.
    
    .**granteeId**
    
    String
    
    The ID of the grantee.
    
    **granteeType**
    
    String
    
    The type of the grantee.
    
    **granteeTypeSub**
    
    String
    
    The subtype of the grantee.
    
    **granteeName**
    
    String
    
    The name of the grantee.
    
    **arrayData**
    
    Array
    
    An array of authorization details. For more information, see [this topic](#).
    
    **eventType**
    
    String
    
    The type of the event.
    
-   The following example shows the event payload for an Approval Request completion event. The payload is the value of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "appId": 227859,
        "assignee": "286098539641742899",
        "eventCode": "approval-change-finished",
        "assigneeName": "******.******",
        "comments": "ces",
        "createTime": 1652095981000,
        "eventType": "approval",
        "process": {
          "applicant": "2860****899",
          "applicantName": "yupeng.sunyp",
          "approvalContent": {
            "applyPeriod": "2997***0000",
            "applyReason": "Test",
            "arrayData": [
              {
                "ownerBaseId": "2382***8*884",
                "objectType": "TABLE",
                "odpsTable": "cdd",
                "objectNameCn": "******",
                "envType": 1,
                "projectGuid": "odps.da_simple_202112",
                "objectGuid": "odps.da_simple_202112.cdd",
                "tenantId": 0,
                "objectName": "cdd",
                "ownerAccountName": "RAM$******(******)",
                "odpsProject": "da_simple_202112",
                "projectName": "da_simple_202112",
                "actions": [
                  "Select",
                  "Describe"
                ],
                "projectId": 9***4,
                "workspaceId": "9***4"
              }
            ],
            "contentType": "application/json",
            "granteeAccounts": [
              {
                "granteeId": "286***899",
                "granteeTypeSub": 103,
                "granteeType": 1,
                "granteeName": "RAM$dataworks_3h1_1:yupeng.sunyp"
              }
            ],
            "odpsProjectName": "da_simple_202112",
            "projectEnv": "1",
            "resourceSummary": "cdd",
            "tenantId": 28***656,
            "workspaceId": 227859
          },
          "assignmentCategory": "MaxCompute",
          "createTime": 1652095981000,
          "processDefinitionId": "definition-6e6418e6-c65f-4f26-a673-88576b1c1e4a",
          "processId": "528***192",
          "status": "Pending",
          "title": "MaxComputeTable",
          "updateTime": 1652095981000
        }
      }
    }
    ```
    
    The following table describes the fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **appId**
    
    Long
    
    The workspace ID.
    
    **assignee**
    
    String
    
    The ID of the approver.
    
    **assigneeName**
    
    String
    
    The approver's name.
    
    **comments**
    
    String
    
    The approval comments.
    
    **createTime**
    
    Long
    
    The creation timestamp of the approval request.
    
    **processId**
    
    String
    
    The ID of the approval request.
    
    **status**
    
    String
    
    The status of the approval request.
    
    **taskId**
    
    String
    
    The ID of the approval task.
    
    **tenantId**
    
    String
    
    The tenant ID.
    
    **updateTime**
    
    String
    
    The timestamp of the last update to the approval request.
    
    **eventType**
    
    String
    
    The type of the event.
    
    **process**
    
    Object
    
    Details about the approval process.
    
    **applicant**
    
    String
    
    The ID of the applicant.
    
    **applicantName**
    
    String
    
    The applicant's name.
    
    **assignmentCategory**
    
    String
    
    The category of the requested resource.
    
    **createTime**
    
    String
    
    The creation timestamp of the workflow.
    
    **processDefinitionId**
    
    String
    
    The ID of the workflow definition.
    
    **processId**
    
    String
    
    The ID of the workflow instance.
    
    **status**
    
    String
    
    The status of the workflow.
    
    **title**
    
    String
    
    The title of the workflow.
    
    **updateTime**
    
    Long
    
    The timestamp of the last update to the workflow.
    
    **approvalContent**
    
    Object
    
    Contains the approval details.
    
    **applyPeriod**
    
    String
    
    The permission validity period.
    
    **applyReason**
    
    String
    
    The reason for the request.
    
    **contentType**
    
    String
    
    The content type.
    
    **odpsProjectName**
    
    String
    
    The name of the MaxCompute project.
    
    **resourceSummary**
    
    String
    
    A summary of the requested resource.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **workspaceId**
    
    Long
    
    The workspace ID.
    
    **projectEnv**
    
    String
    
    The project environment.
    
    **granteeAccounts**
    
    List
    
    A list of grantee accounts.
    
    **granteeId**
    
    String
    
    The ID of the grantee.
    
    **granteeType**
    
    String
    
    The type of the grantee.
    
    **granteeTypeSub**
    
    String
    
    The subtype of the grantee, which specifies the account type. Valid values:
    
    -   `ACCOUNT_PRD` (101): An Alibaba Cloud account used for production scheduling.
        
    -   `ACCOUNT_APP` (102): An application account.
        
    -   `ACCOUNT_USER` (103): A personal Alibaba Cloud account.
        
    -   `ACCOUNT_DEPT` (104): A departmental account.
        
    -   `ACCOUNT_MOCK` (106): A mock account.
        
    -   `ACCOUNT_OTHER_USER` (105): The Alibaba Cloud account of another user.
        
    
    **granteeName**
    
    String
    
    The name of the grantee.
    
    **arrayData**
    
    List
    
    A list of objects that contain the authorization details. For more information, see [this topic](#).
    
    **eventType**
    
    String
    
    The type of the event.
    

#### **Security Center:** Table permission pre-creation event

The following sample shows the message body for a table permission request pre-creation event. The message body is the payload in the `data` field.

```
{
  "datacontenttype": "application/json;charset=utf-8",
  "data": {
    "eventType": "approval-create-before",
    "operator":"19***735",
    "order":{
      "applyReason":"Test",
      "deadlineDate":"1",
      "deadlineType":"month",
      "granteeObjectList":[
        {
          "granteeId":"1239****8872"
        }
      ],
      "projectMeta":{
        "envCode":1,
        "labelSecurity":false,
        "objectMetaList":[
          {
            "action":[
              "Select",
              "Describe"
            ],
            "name":"tablei",
            "projectGuid":"odps.d11aa"
          }
        ],
        "projectId":2****0,
        "projectName":"d11aa"
      }
    },
    "projectId":2****0,
    "tenantId":5564****6465
  }
}
```

The following table describes the fields in the payload.

**Parameter**

**Type**

**Description**

**operator**

String

The UID of the request's initiator.

**projectId**

Long

The ID of the workspace where the request was initiated.

**tenantId**

Long

The tenant ID where the request was initiated.

**order**

Object

The request details.

**applyReason**

String

The reason for the request.

**deadlineDate**

String

The duration of the validity period.

**deadlineType**

String

The time unit for the validity period. Valid values: `day` and `month`.

**granteeObjectList**

Array

A list of grantees.

**granteeId**

String

The ID of the grantee, which is a RAM User ID.

**projectMeta**

Object

The metadata of the workspace.

**envCode**

Integer

The environment of the workspace. Valid values: `0` for the development environment and `1` for the production environment.

**labelSecurity**

Boolean

Specifies whether to enable label-level control.

-   `true`: Label-level control is enabled.
    
-   `false`: Label-level control is disabled.
    

**objectMetaList**

Array

A list of objects that require authorization.

**action**

Array

The actions to authorize, such as `Select` or `Describe` on a table.

**name**

String

The name of the table requiring permissions.

**projectGuid**

String

The GUID of the workspace where the table is located.

**projectName**

String

The name of the workspace where the table is located.

**eventType**

String

The event type.

#### **Appendix: Authorization data (MaxCompute)**

In DataWorks, when an approval or a Table Permission Request is triggered for a [Security Center](#543e90d4d49k3) event, `arrayData` data is added to the event message that is sent to **EventBridge**. When the `assignmentCategory` type is `MaxCompute`, the content of `arrayData` is as follows:

```
{
    "ownerBaseId":"1822931104031845",
    "objectType":"TABLE",
    "odpsTable":"oracle_************",
    "envType":1,
    "projectGuid":"odps.***********",
    "objectGuid":"odps.******.******",
    "tenantId":0,
    "objectName":"oracle_******",
    "ownerAccountName":"ALIYUN***************",
    "odpsProject":"dataworks******",
    "projectName":"dataworks******",
    "actions":[
      "Select",
      "Describe"
    ],
    "projectId":9***4,
    "workspaceId":"9***4"
  }
```

**Parameter**

**Type**

**Description**

**ownerBaseId**

String

Specifies the base ID of the table owner.

**ownerAccountName**

String

Specifies the name of the table owner.

**objectType**

String

Specifies the object type.

**odpsTable**

String

Specifies the table name.

**envType**

Long

Specifies the type of environment where the table is located.

**projectGuid**

String

Specifies the GUID of the MaxCompute project.

**objectGuid**

String

Specifies the GUID of the object.

**objectName**

String

Specifies the object name.

**odpsProject**

String

Specifies the MaxCompute project name.

**projectName**

String

Specifies the name of the DataWorks project.

**projectId**

Long

Specifies the project ID.

**workspaceId**

String

Specifies the workspace ID.

**actions**

Array

Lists the granted permissions.

#### **Authorization payload for DataService**

In DataWorks, when an approval or table permission request is triggered in [Security Center](#543e90d4d49k3), the event message sent to **EventBridge** includes an `arrayData` field. If the `assignmentCategory` is `DataService`, the `arrayData` payload has the following structure:

```
{
    "resourceId":"DsApiDeploy/******/workspaceId/******/dsDeployId/******",
    "ownerName":"******",
    "resourceVersion":1,
    "name":"api_api",
    "dsDeployId":"******",
    "workspaceName":"da_******",
    "id":"******",
    "type":1,
    "ownerId":"19****735",
    "url":"https://******.data.aliyun.com/?projectId=******&type=api&id=******&version=***&defaultProjectId=******",
    "workspaceId":"******"
  }
```

The following table describes the fields.

**Parameter**

**Type**

**Description**

**resourceId**

String

The resource ID.

**ownerName**

String

The name of the resource owner.

**resourceVersion**

Long

The version of the resource.

**name**

String

The name of the resource.

**dsDeployId**

String

The deployment ID of the DataService API.

**workspaceName**

String

The name of the workspace.

**id**

String

The unique ID of the resource.

**type**

String

The type of the resource. Valid values:

-   **1**: API
    
-   **2**: Function
    
-   **3**: Service Orchestration
    

**ownerId**

String

The unique identifier of the resource owner.

**url**

String

The URL of the DataService endpoint.

**workspaceId**

String

The workspace ID.

### **Data quality events**

## Events

**Event type**

**Event and operation**

**Regular Event**

**Extension Point Event**

**EventBridge type**

**Extension event code**

Data Quality Check

Check result feedback

-   Triggers when a user provides feedback on a check result.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824984.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824986.png)

`dataworks:DqcCheck:DqcCheckFeedbackEvent`

`dqc-check-feedback-event`

Check completed

-   Emitted when a rule check is complete. The payload includes the check result, such as whether the check **Passed** and **Sample** data.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

`dataworks:DqcCheck:DqcCheckFinishedEvent`

`dqc-check-finished-event`

Pre-events for data quality rules

Pre-event for batch create data quality rules

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:BatchCreateDataQualityRules`

`batch-create-data-quality-rules`

Pre-event for batch update data quality rules

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:BatchUpdateDataQualityRules`

`batch-update-data-quality-rules`

Pre-event for batch delete data quality rules

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:BatchDeleteDataQualityRules`

`batch-delete-data-quality-rules`

Pre-event for update Data Quality Rule

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:UpdateDataQualityRule`

`update-data-quality-rule`

Pre-events for data quality evaluation tasks

Pre-event for create data quality evaluation task

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:CreateDataQualityEvaluationTask`

`create-data-quality-evaluation-task`

Pre-event for update data quality evaluation task

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:UpdateDataQualityEvaluationTask`

`update-data-quality-evaluation-task`

Pre-event for clone data quality evaluation task

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:CloneDataQualityEvaluationTask`

`clone-data-quality-evaluation-task`

Pre-event for batch delete data quality evaluation tasks

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:BatchDeleteDataQualityEvaluationTasks`

`batch-delete-data-quality-evaluation-tasks`

Pre-events for data quality evaluation task notifications

Pre-event for create data quality evaluation task notification

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:CreateDataQualityEvaluationTaskNotification`

`create-data-quality-evaluation-task-notification`

Pre-event for update data quality evaluation task notification

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:UpdateDataQualityEvaluationTaskNotification`

`update-data-quality-evaluation-task-notification`

Pre-event for delete data quality evaluation task notification

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824987.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p824985.png)

`dataworks:DqcCheck:DeleteDataQualityEvaluationTaskNotification`

`delete-data-quality-evaluation-task-notification`

## Message format

#### **Data quality check**

-   The following example shows the message body for a Data Quality Check feedback event. The body is the value of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "ruleCheckId": 521771452,
        "feedbackContent": "Skip",
        "ruleId": 28610334,
        "createUser": "110755000425****",
        "taskId": "167644814****9a26ecf4063a88797",
        "beginTime": "1676448145000",
        "envType": "ODPS",
        "projectName": "test_mc_2303_kongjian",
        "projectId": 9***4,
        "tenantId": 28***656
      }
    }
    ```
    
    The following table describes these fields.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **ruleId**
    
    Long
    
    The data quality rule ID.
    
    **ruleCheckId**
    
    Long
    
    The auto-incrementing ID of the data quality check result.
    
    **feedbackContent**
    
    String
    
    The feedback content.
    
    **createUser**
    
    String
    
    The ID of the user who provided the feedback.
    
    **taskId**
    
    String
    
    The ID of the data quality task.
    
    **beginTime**
    
    String
    
    The time when the feedback was provided.
    
    **envType**
    
    String
    
    The data source type for the table associated with the rule. Valid values: ODPS, E-MapReduce (EMR), and HOLO.
    
    **projectName**
    
    String
    
    The name of the DataWorks Workspace.
    
    **projectId**
    
    Long
    
    The ID of the DataWorks workspace.
    
    **tenantId**
    
    Long
    
    The ID of the DataWorks tenant.
    
-   The following example shows the message body for a Data Quality Check completion event. The body is the value of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "data": {
        "projectId": 9***4,
        "tenantId": 28***656,
        "id": 52177****,
        "taskId": "1671***7a6",
        "entityId": 1562***,
        "ruleId": 28610334,
        "property": "-",
        "bizdate": "2023-02-09 00:00:00",
        "dateType": "YMD",
        "actualExpression": "ds\u003d20230210",
        "matchExpression": "ds\u003d$[yyyymmdd]",
        "blockType": 1,
        "checkResult": 0,
        "eventCode": "dqc-check-finished-event",
        "checkResultStatus": 0,
        "methodName": "table_count",
        "beginTime": "2023-02-15 20:14:48",
        "endTime": "2023-02-15 20:14:55",
        "timeConsuming": "7s",
        "externalType": "CWF2",
        "externalId": "triggerByManual",
        "discrete": false,
        "fixedCheck": true,
        "referenceValue": [
          {
            "bizDate": "3000-12-31 00:00:00",
            "discreteProperty": "Number of table rows, 1-day difference",
            "value": 0.0,
            "singleCheckResult": 0
          }
        ],
        "sampleValue": [
          {
            "bizDate": "2023-02-09 00:00:00",
            "value": 3.0
          }
        ],
        "trend": "\u003e\u003d",
        "expectValue": 0.0,
        "op": "\u003e\u003d",
        "projectName": "test_mc_2303_kongjian",
        "tableName": "sx_dim_1209_001",
        "templateId": 47,
        "checkerType": 0,
        "ruleName": "Difference from previous day",
        "isPrediction": false,
        "feedbackStatus": 0,
        "whetherToFilterDirtyData": false
      }
    }
    ```
    
    The following table describes these fields:
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **id**
    
    Long
    
    The primary key ID for the check process. A new ID is generated for each triggered check.
    
    **projectId**
    
    Long
    
    The ID of the DataWorks workspace.
    
    **tenantId**
    
    Long
    
    The ID of the DataWorks tenant.
    
    **taskId**
    
    String
    
    The ID of the check task.
    
    **entityId**
    
    Long
    
    The ID of the partition filter expression.
    
    **ruleId**
    
    Long
    
    The data quality rule ID.
    
    **property**
    
    String
    
    The column in the source table that the rule monitors.
    
    **bizdate**
    
    Long
    
    The data timestamp. For offline data, this is typically the day before the check runs.
    
    **dateType**
    
    String
    
    The type of scheduling cycle. The typical value is **YMD**, which indicates a yearly, monthly, or daily task.
    
    **actualExpression**
    
    String
    
    The actual partition of the data source table being checked.
    
    **matchExpression**
    
    String
    
    The partition filter expression.
    
    **blockType**
    
    Integer
    
    Indicates the rule's strength. Valid values:
    
    -   `1`: Strong rule.
        
    -   `0`: Weak rule.
        
    
    If a strong rule (`1`) triggers a critical alert, the associated scheduling task is blocked.
    
    **checkResult**
    
    Integer
    
    The result of the check. Valid values:
    
    -   \-2: The check was skipped.
        
    -   \-1: An exception occurred during the check.
        
    -   0: The check passed.
        
    -   1: The warning threshold was triggered.
        
    -   2: The critical threshold was triggered.
        
    
    **methodName**
    
    String
    
    The aggregation method for the check. Examples: `avg`, `count`, `sum`, `min`, `max`, `count_distinct`, `user_defined`, `table_count`, `table_size`, `table_dt_load_count`, `table_dt_refuseload_count`, `null_value`, `null_value/table_count`, `(table_count-count_distinct)/table_count`, and `table_count-count_distinct`.
    
    **beginTime**
    
    Long
    
    The time when the check process started.
    
    **endTime**
    
    Long
    
    The time when the check process ended.
    
    **timeConsuming**
    
    String
    
    The duration of the check task.
    
    **externalType**
    
    String
    
    The type of the scheduling system. Currently, only `CWF2` is supported. If this field is empty, the check was triggered manually.
    
    **externalId**
    
    String
    
    -   If **externalType** is `CWF2`, this field indicates the node ID of the scheduling task.
        
    -   If **externalType** is empty, the value is `triggerByManual`, which indicates a manually triggered task.
        
    
    **discrete**
    
    Boolean
    
    `true` if the check is discrete; `false` otherwise.
    
    **fixedCheck**
    
    Boolean
    
    `true` if this is a fixed-value check; `false` otherwise.
    
    **referenceValue**
    
    The historical sample values.
    
    **bizDate**
    
    Long
    
    The data timestamp. For offline data, this is typically the day before the check runs.
    
    **discreteProperty**
    
    String
    
    The value of the sample field after being grouped by the `GROUP BY` clause. For example, if grouped by a `gender` field, the value of `discreteProperty` could be 'male', 'female', or 'null'.
    
    **value**
    
    Decimal
    
    The historical Sample Value.
    
    **singleCheckResult**
    
    Integer
    
    The result of a single check.
    
    **sampleValue**
    
    The current sample values.
    
    **bizDate**
    
    Long
    
    The data timestamp. For offline data, this is typically the day before the check runs.
    
    **value**
    
    Decimal
    
    The current Sample Value.
    
    **trend**
    
    String
    
    The trend of the check result.
    
    **expectValue**
    
    Double
    
    The expected value.
    
    **op**
    
    String
    
    The comparison operator.
    
    **projectName**
    
    String
    
    The name of the DataWorks Workspace.
    
    **tableName**
    
    String
    
    The name of the table monitored by the rule.
    
    **templateId**
    
    Integer
    
    The ID of the check template that is used.
    
    **checkerType**
    
    Integer
    
    The type of the checker.
    
    **ruleName**
    
    String
    
    The name of the rule.
    
    **isPrediction**
    
    Boolean
    
    `true` if the result is a prediction; `false` otherwise.
    
    **comment**
    
    String
    
    The description of the check rule.
    
    **eventCode**
    
    String
    
    The unique code that identifies the event type.
    

#### **Pre-operation events**

-   The following example shows the event payload for a **pre-event for the batch creation of data quality rules**. The payload is the content of the `data` field in the event message.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "batch-create-data-quality-rules",
          "projectId": 30***03,
          "tenantId": 28***656,
          "operator": "19***735",
          "operationTime": 1734505954897,
          "dataQualityTaskId": 1001,
          "target": {
            "databaseType": "maxcompute",
            "tableGuid": "odps.project_demo.tb_table_demo"
          },
          "rules": [
            {
              "name": "Table row count is greater than 0",
              "enabled": true,
              "severity": "High",
              "description": "Data quality rule creation check",
              "templateCode": "system:table:table_count:fixed:0",
              "samplingConfig": {
                "metric": "count"
              },
              "checkingConfig": {
                "type": "fixed",
                "thresholds": {
                  "expected": {
                    "expression": "$checkValue > 0"
                  },
                  "critical": {
                    "expression": "$checkValue <= 0"
                  }
                }
              }
            }
          ]
        }
    }
    ```
    
    The following table describes the key fields.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    projectId
    
    Long
    
    The ID of the DataWorks workspace.
    
    operator
    
    String
    
    The User ID (UID) of the operator.
    
    operationTime
    
    Long
    
    The operation timestamp, in Unix milliseconds.
    
    dataQualityTaskId
    
    Long
    
    The ID of the data quality evaluation task associated with the rule. This field is optional.
    
    target
    
    DataQualityTarget
    
    The object checked by the data quality rules.
    
    databaseType
    
    String
    
    The type of the target table's database. Valid values:
    
    -   MaxCompute
        
    -   EMR
        
    -   CDH
        
    -   Hologres
        
    -   AnalyticDB for PostgreSQL
        
    
    tableGuid
    
    String
    
    The unique ID of the table in Data Map.
    
    rules
    
    List<DataQualityRule>
    
    A list of data quality rules.
    
    name
    
    String
    
    The name of the rule.
    
    enabled
    
    Boolean
    
    Specifies whether the rule is enabled.
    
    severity
    
    String
    
    The severity of the rule, which corresponds to the strong/weak rule setting on the UI. Valid values:
    
    -   High
        
    -   Normal
        
    
    description
    
    String
    
    The description of the rule.
    
    templateCode
    
    String
    
    The code of the rule template used to create the rule.
    
    samplingConfig
    
    SamplingConfig
    
    The sampling configuration.
    
    metric
    
    String
    
    The name of the sampling metric. Valid values:
    
    -   Count: The number of rows in the table.
        
    -   Min: The minimum value of a field.
        
    -   Max: The maximum value of a field.
        
    -   Avg: The average value of a field.
        
    -   DistinctCount: The number of distinct values in a field.
        
    -   DistinctPercent: The percentage of distinct values in a field relative to the total row count.
        
    -   DuplicatedCount: The number of duplicate values in a field.
        
    -   DuplicatedPercent: The percentage of duplicate values in a field relative to the total row count.
        
    -   TableSize: The size of the table.
        
    -   NullValueCount: The number of rows with a null value in a field.
        
    -   NullValuePercent: The percentage of rows with a null value in a field.
        
    -   GroupCount: The number of rows for each distinct value in a field after a GROUP BY operation.
        
    -   CountNotIn: The number of rows that contain values not in a specified list.
        
    -   CountDistinctNotIn: The number of distinct values not in a specified list.
        
    -   UserDefinedSql: A custom SQL query for sampling.
        
    
    checkingConfig
    
    CheckingConfig
    
    The configuration for validating samples.
    
    type
    
    String
    
    The threshold calculation method. Valid values:
    
    -   Fixed
        
    -   Fluctuation
        
    -   FluctuationDiscrete
        
    -   Auto
        
    -   Average
        
    -   Variance
        
    
    thresholds
    
    Thresholds
    
    The threshold configuration.
    
    expected
    
    Threshold
    
    The expected threshold configuration.
    
    expression
    
    String
    
    The threshold expression.
    
    critical
    
    Threshold
    
    The threshold configuration for a critical alert.
    
-   This example shows the payload for a **pre-event for batch-updating data quality rules**, which is the value of the `data` field.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "update-data-quality-rule",
          "projectId": 30***03,
          "tenantId": 28***656,
          "operator": "19***735",
          "operationTime": 1734505954897,
          "id": 100001,
          "name": "Table row count is greater than 0",
          "enabled": true,
          "severity": "High",
          "description": "Test for Data Quality Rule creation",
          "templateCode": "system:table:table_count:fixed:0",
          "samplingConfig": {
            "metric": "count"
          },
          "checkingConfig": {
            "type": "fixed",
            "thresholds": {
              "expected": {
                "expression": "$checkValue > 0"
              },
              "critical": {
                "expression": "$checkValue <= 0"
              }
            }
          }
        }
    }
    ```
    
    This table describes the key fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **eventCode**
    
    String
    
    The event code.
    
    **projectId**
    
    Long
    
    The workspace ID.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **operator**
    
    String
    
    The user UID.
    
    **operationTime**
    
    Long
    
    The operation timestamp, in milliseconds.
    
    **id**
    
    Long
    
    The rule ID.
    
    **name**
    
    String
    
    The name of the rule.
    
    **enabled**
    
    Boolean
    
    Specifies if the data quality rule is enabled. Valid values:
    
    **true**: The rule is enabled.
    
    **false**: The rule is disabled.
    
    **severity**
    
    String
    
    The severity of the rule. This value corresponds to the strong/weak rule setting in the UI. Valid values:
    
    -   High
        
    -   Normal
        
    
    **description**
    
    String
    
    The description of the rule.
    
    **templateCode**
    
    String
    
    The code for the rule template.
    
    **samplingConfig**
    
    SamplingConfig
    
    The sampling configuration.
    
    **metric**
    
    String
    
    The sampling metric. Valid values:
    
    -   Count: The total number of rows in the table.
        
    -   Min: The minimum value of a specified field.
        
    -   Max: The maximum value of a specified field.
        
    -   Avg: The average value of a specified field.
        
    -   DistinctCount: The number of distinct values in a specified field.
        
    -   DistinctPercent: The percentage of distinct values in a specified field relative to the total number of rows.
        
    -   DuplicatedCount: The number of duplicate values in a specified field.
        
    -   DuplicatedPercent: The percentage of duplicate values in a specified field relative to the total number of rows.
        
    -   TableSize: The storage size of the table.
        
    -   NullValueCount: The number of rows where a specified field is null.
        
    -   NullValuePercent: The percentage of rows where a specified field is null.
        
    -   GroupCount: The number of rows for each distinct value after grouping by a specified field.
        
    -   CountNotIn: The number of rows whose value is not in a specified enumeration.
        
    -   CountDistinctNotIn: The number of distinct values that are not in a specified enumeration.
        
    -   UserDefinedSql: A custom SQL query used for sampling.
        
    
    **checkingConfig**
    
    CheckingConfig
    
    The sample validation configuration.
    
    **type**
    
    String
    
    The threshold calculation method. Valid values:
    
    -   Fixed
        
    -   Fluctation
        
    -   FluctationDiscreate
        
    -   Auto
        
    -   Average
        
    -   Variance
        
    
    **thresholds**
    
    Thresholds
    
    The threshold configuration.
    
    **expected**
    
    Threshold
    
    The expected threshold configuration.
    
    **expression**
    
    String
    
    The threshold expression.
    
    **critical**
    
    Threshold
    
    The threshold configuration for a critical alert.
    
-   The following example shows the event payload for a **Pre-event for batch deleting data quality rules**, which is the content of the `data` field in the event message.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
            "eventCode": "batch-delete-data-quality-rules",
            "ids": [
                10***01,
                10***02,
                10***03
            ],
            "projectId": 30***03,
            "tenantId": 524***4736,
            "operator": "19***735",
            "operationTime": 1734505954897
        }
    }
    ```
    
    The following table describes the key fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    projectId
    
    Long
    
    The DataWorks workspace ID.
    
    operator
    
    String
    
    The operator UID.
    
    operationTime
    
    Long
    
    The operation timestamp.
    
    ids
    
    List<Long>
    
    A list of IDs for the deleted data quality rules.
    
    tenantId
    
    String
    
    The tenant ID.
    
    eventCode
    
    String
    
    The event code.
    
-   The following sample shows the message body for the **Update Data Quality Rule pre-event**. The message body is the content of the `data` field in the event message.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "update-data-quality-rule",
          "projectId": 30***03,
          "tenantId": 524***4736,
          "operator": "110***3538",
          "operationTime": 1734505954897,
          "id": 100001,
          "name": "Table row count is greater than 0",
          "enabled": true,
          "severity": "High",
          "description": "Test for data quality rule creation check",
          "templateCode": "system:table:table_count:fixed:0",
          "samplingConfig": {
            "metric": "count"
          },
          "checkingConfig": {
            "type": "fixed",
            "thresholds": {
              "expected": {
                "expression": "$checkValue > 0"
              },
              "critical": {
                "expression": "$checkValue <= 0"
              }
            }
          }
        }
    }
    ```
    
    The following table describes the important fields.
    
    **Field Name**
    
    **Type**
    
    **Description**
    
    **eventCode**
    
    String
    
    Event code.
    
    **projectId**
    
    Long
    
    Workspace ID.
    
    **tenantId**
    
    Long
    
    Tenant ID.
    
    **operator**
    
    String
    
    User ID (UID).
    
    **operationTime**
    
    Long
    
    Operation time.
    
    **id**
    
    Long
    
    Rule ID.
    
    **name**
    
    String
    
    Rule name.
    
    **enabled**
    
    Boolean
    
    Specifies whether the rule is enabled.
    
    **true**: Enabled.
    
    **false**: Not enabled.
    
    **severity**
    
    String
    
    The severity of the rule. This corresponds to the strong/weak rule setting on the page.
    
    -   High
        
    -   Normal
        
    
    **description**
    
    String
    
    Description of the rule.
    
    **templateCode**
    
    String
    
    Partition settings for the partitioned table.
    
    **samplingConfig**
    
    SamplingConfig
    
    Settings required for sampling.
    
    **metric**
    
    String
    
    The name of the metric used for sampling.
    
    -   Count: Number of table rows.
        
    -   Min: Minimum field value.
        
    -   Max: Maximum field value.
        
    -   Avg: Average field value.
        
    -   DistinctCount: Number of distinct field values.
        
    -   DistinctPercent: Ratio of distinct field values to the total row count.
        
    -   DuplicatedCount: Number of duplicate field values.
        
    -   DuplicatedPercent: Ratio of duplicate field values to the total row count.
        
    -   TableSize: Table size.
        
    -   NullValueCount: Number of rows with a null field value.
        
    -   NullValuePercent: Percentage of rows with a null field value.
        
    -   GroupCount: Row count for each value after grouping by field.
        
    -   CountNotIn: Number of rows that do not match the enumeration.
        
    -   CountDistinctNotIn: Number of distinct values that do not match the enumeration.
        
    -   UserDefinedSql: Sample data using a custom SQL statement.
        
    
    **checkingConfig**
    
    CheckingConfig
    
    Sample check settings.
    
    **type**
    
    String
    
    The method for calculating the threshold.
    
    -   Fixed
        
    -   Fluctuation
        
    -   FluctuationDiscrete
        
    -   Auto
        
    -   Average
        
    -   Variance
        
    
    **thresholds**
    
    Thresholds
    
    Threshold settings.
    
    **expected**
    
    Threshold
    
    Expected threshold settings.
    
    **expression**
    
    String
    
    Threshold expression.
    
    **critical**
    
    Threshold
    
    Settings for the critical alert threshold.
    

#### **Data quality monitoring pre-events (**Create, Update, Clone, and Batch Delete**)**

-   The following sample shows the format of the message body (the content of the `data` field in the event message) for **Create and Update pre-events for data quality monitoring**.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "create-data-quality-evaluation-task",
          "name": "Table data accuracy monitoring",
          "description": "After a scheduled instance that writes data to the table runs successfully, a monitoring task is triggered to check whether the output data meets expectations",
          "target": {
            "databaseType": "emr",
            "tableGuid": "an-emr-table-guid"
          },
          "trigger": {
            "type": "ByScheduledTaskInstance",
            "taskIds": [
              1001,
              1002
            ]
          },
          "dataSourceId": 201,
          "runtimeConf": "{ \"queue\": \"default\", \"sqlEngine\": \"HIVE_SQL\" }",
          "rules": [
            {
              "name": "Table row count is greater than 0",
              "enabled": true,
              "severity": "High",
              "description": "Test for the create operation of the data quality rule",
              "templateCode": "system:table:table_count:fixed:0",
              "samplingConfig": {
                "metric": "count"
              },
              "checkingConfig": {
                "type": "fixed",
                "thresholds": {
                  "expected": {
                    "expression": "$checkValue > 0"
                  },
                  "critical": {
                    "expression": "$checkValue <= 0"
                  }
                }
              }
            }, 
            {
              "id": 100002,
              "name": "Table row count is greater than 100",
              "checkingConfig": {
                "type": "fixed",
                "thresholds": {
                  "expected": {
                    "expression": "$checkValue > 100"
                  },
                  "critical": {
                    "expression": "$checkValue <= 100"
                  }
                }
              }
            }
          ],
          "hooks": [
            {
              "type": "BlockTaskInstance",
              "condition": "(${severity} == \"High\" AND ${status} == \"Critical\") OR (${severity} == \"High\" AND ${status} == \"Error\")"
            }
          ],
          "notifications": {
            "condition": "(${severity} == \"High\" AND ${status} == \"Warned\") OR (${severity} == \"Normal\" AND ${status} == \"Critical\") OR (${severity} == \"Normal\" AND ${status} == \"Warned\") OR (${severity} == \"Normal\" AND ${status} == \"Error\")",
            "notifications": [
              {
                "channels": [
                  "Mail",
                  "Sms"
                ],
                "notificaionReceivers": [
                  {
                    "receiverType": "AliUid",
                    "receiverValues": [
                      "1107550004253538", 
                      "51107550004253538"
                    ]
                  }
                ]
              }, 
              {
                "channels": [
                  "Dingding"
                ],
                "notificaionReceivers": [
                  {
                    "receiverType": "DingdingUrl",
                    "receiverValues": [
                      "https://api.dingding.com/message-boxes/b1/messages",
                      "https://api.dingding.com/message-boxes/b2/messages"
                    ],
                    "extension": "{ \"atAll\": true }"
                  }
                ]
              }
            ]
          },
          "projectId": 30***03,
          "tenantId": 524***4736,
          "operator": "110***3538",
          "operationTime": 1734505954897
        }
    }
    ```
    
    The following table describes the important fields.
    
    **Field Name**
    
    **Field Type**
    
    **Description**
    
    **eventCode**
    
    String
    
    The event code.
    
    **name**
    
    String
    
    The name of the data quality monitoring task.
    
    **description**
    
    String
    
    The description of the data quality evaluation task.
    
    **target**
    
    DataQualityTarget
    
    The monitored object of the data quality evaluation task.
    
    **databaseType**
    
    String
    
    For datasets of the table type, this is the database type to which the table belongs.
    
    -   MaxCompute
        
    -   EMR
        
    -   CDH
        
    -   Hologres
        
    -   AnalyticDB for PostgreSQL
        
    
    **tableGuid**
    
    String
    
    The unique ID of the table in Data Map.
    
    **trigger**
    
    DataQualityEvaluationTaskTrigger
    
    The trigger configuration for the data quality evaluation task.
    
    **type**
    
    String
    
    The type of event that can trigger the data quality evaluation task.
    
    -   ByScheduledTaskInstance: The task is triggered after a scheduled instance runs successfully. This is supported only in public cloud scenarios.
        
    -   ByManual: The task is triggered manually.
        
    
    **taskIds**
    
    Array<Long>
    
    This field takes effect when type is set to ByScheduledTaskInstance. It specifies the scheduled node instances that can trigger the task after they run successfully.
    
    **dataSourceId**
    
    Long
    
    The data source to use when the data quality evaluation task runs.
    
    **runtimeConf**
    
    String
    
    Settings for using the data source. Currently, you can only specify the YARN queue for E-MapReduce (EMR) and set the SQL engine to SPARK-SQL when collecting data from EMR tables.
    
    **rules**
    
    List<DataQualityRule>
    
    A list of data quality rules. For more information about the parameters, see [Data quality rule pre-event parameters](#0efd27b7aa30u).
    
    **hooks**
    
    Array<DataQualityEvaluationTaskHook>
    
    Callback configuration in the lifecycle of a data quality evaluation task instance. Currently, only one hook that blocks a scheduling task is supported.
    
    **type**
    
    String
    
    The type of subsequent action.
    
    BlockTaskInstance: Blocks the execution of a DataWorks node instance.
    
    **condition**
    
    String
    
    The trigger condition for the hook.
    
    **notifications**
    
    Array<Notification>
    
    The specific alert notification settings.
    
    **projectId**
    
    Long
    
    The ID of the workspace.
    
    **tenantId**
    
    Long
    
    The tenant ID.
    
    **operator**
    
    String
    
    The operator UID.
    
    **operationTime**
    
    Long
    
    The operation time.
    
-   The following sample shows the format of the message body (the content of the `data` field in the event message) for the **Clone data quality monitoring pre-event**.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "clone-data-quality-evaluation-task",
          "id": 10001,
          "targets": [
            {
              "databaseType": "emr",
              "tableGuid": "an-emr-table-guid"
            },
            {
              "databaseType": "emr",
              "tableGuid": "another-emr-table-guid"
            }
          ],
          "projectId": 9***4,
          "tenantId": 28***656,
          "operator": "19***735",
          "operationTime": 1734505954897
        }
    }
    ```
    
    The following table describes the important fields.
    
    **Field Name**
    
    **Field Type**
    
    **Description**
    
    **projectId**
    
    Long
    
    The ID of the DataWorks workspace.
    
    **tenantId**
    
    String
    
    The tenant ID.
    
    **operator**
    
    String
    
    The operator UID.
    
    **operationTime**
    
    Long
    
    The operation time.
    
    **targets**
    
    List<DataQualityTarget>
    
    The destination targets to which the data quality monitoring task will be cloned.
    
    **databaseType**
    
    String
    
    For datasets of the table type, this is the database type to which the table belongs.
    
    -   MaxCompute
        
    -   EMR
        
    -   CDH
        
    -   Hologres
        
    -   AnalyticDB for PostgreSQL
        
    
    **tableGuid**
    
    String
    
    The unique ID of the table in Data Map.
    
    **id**
    
    Long
    
    The ID of the source data quality monitoring task to clone.
    
    **eventCode**
    
    String
    
    The event code.
    
-   The following sample shows the format of the message body (the content of the `data` field in the event message) for the **Batch Delete data quality monitoring pre-event**.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "batch-delete-data-quality-evaluation-tasks",
          "ids": [
            10001,
            10002
          ],
          "projectId": 9***4,
          "tenantId": 28***656,
          "operator": "19***735,
          "operationTime": 1734505954897
        }
    }
    ```
    
    The following table describes the important fields.
    
    **Field Name**
    
    **Field Type**
    
    **Description**
    
    **projectId**
    
    Long
    
    The ID of the DataWorks workspace.
    
    **operator**
    
    String
    
    The operator UID.
    
    **operationTime**
    
    Long
    
    The operation time.
    
    **ids**
    
    List<Long>
    
    A list of IDs of the data quality monitoring tasks to be deleted.
    
    **tenantId**
    
    String
    
    The tenant ID.
    
    **eventCode**
    
    String
    
    The event code**.**
    

#### **Alert subscription pre-events**

-   The following example shows the message body for a **pre-event for creating an alert subscription for a data quality evaluation task**. This is the payload from the `data` field of the event message.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "create-data-quality-evaluation-task-notification",
          "dataQualityEvaluationTaskId": 10001,
          "channel": "sms",
          "receiverValue": "1107***38",
          "projectId": 30***03,
          "operator": "110***3538",
          "operationTime": 1734505954897
        }
    }
    ```
    
    The following table describes the key fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **projectId**
    
    Long
    
    The DataWorks workspace ID.
    
    **operator**
    
    String
    
    The UID of the user who performed the operation.
    
    **operationTime**
    
    Long
    
    The timestamp of the operation.
    
    **dataQualityEvaluationTaskId**
    
    Long
    
    The ID of the data quality evaluation task.
    
    **channel**
    
    String
    
    The notification channel type. Valid values:
    
    -   Email
        
    -   SMS
        
    -   Phone
        
    -   Lark
        
    -   WeChat
        
    -   DingTalk
        
    -   Custom Webhook
        
    
    **receiverValue**
    
    String
    
    The notification recipient.
    
    **eventCode**
    
    String
    
    The event code.
    
-   The following example shows the message body for a **pre-event for updating an alert subscription for a data quality evaluation task**. This is the payload from the `data` field of the event message.
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "data": {
          "eventCode": "update-data-quality-evaluation-task-notification",
          "dataQualityEvaluationTaskId": 10001,
          "currentChannel": "sms",
          "currentReceiverValue": "1107***538",
          "updatedChannel": "sms",
          "updatedReceiverValue": "1107***538",
          "projectId": 30***03,
          "operator": "110***3538",
          "operationTime": 1734505954897
        
    }
    ```
    
    The following table describes the key fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **projectId**
    
    Long
    
    The DataWorks workspace ID.
    
    **operator**
    
    String
    
    The UID of the user who performed the operation.
    
    **operationTime**
    
    Long
    
    The timestamp of the operation.
    
    **dataQualityEvaluationTaskId**
    
    Long
    
    The ID of the data quality evaluation task.
    
    **currentChannel**
    
    String
    
    The current notification channel type. Valid values:
    
    -   Email
        
    -   SMS
        
    -   Phone
        
    -   Lark
        
    -   WeChat
        
    -   DingTalk
        
    -   Custom Webhook
        
    
    **currentReceiverValue**
    
    String
    
    The current notification recipient.
    
    **updatedChannel**
    
    String
    
    The updated notification channel type. Valid values:
    
    -   Email
        
    -   SMS
        
    -   Phone
        
    -   Lark
        
    -   WeChat
        
    -   DingTalk
        
    -   Custom Webhook
        
    
    **updatedReceiverValue**
    
    String
    
    The updated notification recipient.
    
    **eventCode**
    
    String
    
    The event code.
    

## **Tenant-level events**

Tenant-level modules generate tenant-level events, for example, **an event triggered when a Workspace is deleted in the Console**. The **Event List** below describes the events supported by each module, their classification as regular or extension point events, and their corresponding message format.

The **Message formats** tab provides a partial description of the message format. For the full message sent to EventBridge or Function Compute, see the [Appendix: Message formats](#e10d7321b4faj).

### **Console event list**

## Events

**Event type**

**Event and operation**

**Regular Event**

**Extension Point Event**

**EventBridge type (Type)**

**Extension code (eventCode)**

Workspace Deletion

Pre-event for Workspace Deletion

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825046.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825048.png)

`dataworks:ProjectChange:DeleteProject`

`delete-project`

Post-event for Workspace Deletion

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825049.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825050.png)

`dataworks:ProjectChange:ProjectDeleted`

`project-deleted`

## Message format

#### **Workspace deletion event**

-   A sample of the message body format (i.e., the content of the `data` field in the event message) for the pre-event of a tenant deleting a workspace is as follows.
    
    ```
    {
     
      "data": {
        "eventCode": "delete-project",
        "projectId": 7***7, // The ID of the workspace.
        "tenantId": 2807****0784, // The ID of the tenant.
        "operator": "19***735
    }
    ```
    
    The following table describes the fields in the preceding example.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **operator**
    
    String
    
    The UID of the user who deletes the DataWorks Workspace.
    
    **projectId**
    
    Long
    
    The ID of the DataWorks workspace to be deleted.
    
    **tenantId**
    
    Long
    
    The ID of the tenant that contains the workspace to be deleted.
    
    **eventCode**
    
    String
    
    The event code of the extension point event.
    
-   The following is a sample of the message body format (the content of the `data` field in the event message) for the event that is triggered after a tenant deletes a workspace.
    
    ```
    {
        
        "data": {
            "eventCode": "project-deleted",
            "tenantId": 28***656,
            "blockBusiness": false,
            "projectName": "test2",
            "projectId": 9***4,
            "operator": "19***735",
            "timestamp": 1702260556896
       } 
    }
    ```
    
    The following table describes the fields in the preceding example.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **operator**
    
    String
    
    The UID of the user who deleted the DataWorks Workspace.
    
    **projectId**
    
    Long
    
    The ID of the deleted DataWorks Workspace.
    
    **projectName**
    
    String
    
    The name of the deleted DataWorks Workspace.
    
    **tenantId**
    
    Long
    
    The ID of the tenant to which the deleted workspace belonged.
    
    **timestamp**
    
    Long
    
    The timestamp indicating when the message was sent.
    
    **eventCode**
    
    String
    
    The event code of the extension point event.
    

### **Upload and download events**

## Events

**Event type**

**Event**

**Regular Event**

**Extension Point Event**

**EventBridge type**

**Event code**

Upload and Download Events

Pre-event for Data Download (File Generation)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825063.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825069.png)

`dataworks:ResourcesDownload:DownloadResources`

`download-resources`

Pre-event for Data Download (File Download)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825066.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825070.png)

`dataworks:ResourcesDownload:DownloadResourcesExecute`

`download-resources-execute`

Pre-event for Data Upload

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825067.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5836949271/p825071.png)

`dataworks:ResourcesUpload:UploadDataToTable`

`upload-data-to-table`

## Message formats

#### **Data upload and download**

-   The following is an example of the message body format for a **Pre-event for Data Download (File Generation)**. The message body is the content of the `data` field in an event message.
    
    ```
    { 
        "data": {
            "eventCode": "download-resources",
            "moduleType": "sqlx_query",
            "operatorBaseId": "123936573******",
            "operatorUid": "14931896037*******",
            "fileName": "File Name.csv",
            "fileSize": 10241024,
            "datasourceId": "1111",
            "datasourceName": "odps_first",
            "queryDwProjectId": "9***4",
            "queryDwProjectName": "test_project",
            "dataRowSize": "123456",
            "sqlText": "select sku_code, sku_name from dim_sku",
        }
    }
    ```
    
    The following table describes the fields.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **moduleType**
    
    String
    
    The source of the downloaded data. Valid values:
    
    -   entity\_transfer: Data downloaded from .
        
    -   `develop_query`: Data downloaded via an SQL query in **DataStudio**.
        
    -   sqlx\_query: Data queried and downloaded by using SQL statements in .
        
    -   dw\_excel: Data downloaded from .
        
    
    **operatorBaseId**
    
    String
    
    The BaseID of the user who downloaded the data.
    
    **operatorUid**
    
    String
    
    The UID of the user who downloaded the data.
    
    **fileName**
    
    String
    
    The name of the downloaded file.
    
    **fileSize**
    
    Long
    
    The size of the downloaded file, in bytes.
    
    **datasourceId**
    
    String
    
    The ID of the data source containing the downloaded data.
    
    **datasourceName**
    
    String
    
    The name of the data source containing the downloaded data.
    
    **queryDwProjectId**
    
    String
    
    The ID of the DataWorks Workspace containing the downloaded data.
    
    **queryDwProjectName**
    
    String
    
    The name of the DataWorks workspace containing the downloaded data.
    
    **dataRowSize**
    
    Long
    
    The number of rows downloaded.
    
    **sqlText**
    
    String
    
    The SQL query used to download the data.
    
    **eventCode**
    
    String
    
    The event code for the extension point event.
    
-   The following is a sample of the message body format for a **Pre-event for Data Download (File Download)** event, which is the content of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "aliyunaccountid": "1493189603770213",
      "aliyunpublishtime": "2023-12-11T02:10:00.194Z",
      "data": {
        "eventCode": "download-resources-execute",
        "moduleType": "sqlx_query",
        "operatorBaseId": "123936573******",
        "operatorUid": "14931896037*******",
        "fileName": "File Name.csv",
        "fileSize": 10241024,
        "datasourceId": "1111",
        "datasourceName": "odps_first",
        "queryDwProjectId": "9***4",
        "queryDwProjectName": "test_project",
        "dataRowSize": "123456",
        "sqlText": "select sku_code, sku_name from dim_sku",
        "ip": "198.10.X.X"
      },
      "aliyunoriginalaccountid": "149318960******",
      "specversion": "1.0",
      "aliyuneventbusname": "default",
      "id": "2c3e41e5-3486-40ce-87d4-910f989cf2a7",
      "source": "acs.dataworks",
      "time": "2023-12-11T10:10:00.117Z",
      "aliyunregionid": "cn-shanghai",
      "type": "dataworks:ResourcesDownload:DownloadResourcesExecute"
    }
    ```
    
    The following table describes the key fields.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **moduleType**
    
    String
    
    The source of the downloaded data. Valid values:
    
    -   entity\_transfer: Data downloaded from .
        
    -   `develop_query`: Data downloaded via an SQL query in **DataStudio**.
        
    -   sqlx\_query: The data that you query and download using SQL statements in .
        
    -   dw\_excel: Data downloaded from .
        
    
    **operatorBaseId**
    
    String
    
    The BaseID of the user who downloaded the data.
    
    **operatorUid**
    
    String
    
    The UID of the user who downloaded the data.
    
    **fileName**
    
    String
    
    The name of the downloaded file.
    
    **fileSize**
    
    Long
    
    The size of the downloaded file, in bytes.
    
    **datasourceId**
    
    String
    
    The ID of the data source containing the downloaded data.
    
    **datasourceName**
    
    String
    
    The name of the data source containing the downloaded data.
    
    **queryDwProjectId**
    
    String
    
    The ID of the DataWorks Workspace containing the downloaded data.
    
    **queryDwProjectName**
    
    String
    
    The name of the DataWorks workspace containing the downloaded data.
    
    **dataRowSize**
    
    Long
    
    The number of rows downloaded.
    
    **sqlText**
    
    String
    
    The SQL query used to download the data.
    
    **ip**
    
    String
    
    The IP address of the user who performed the download.
    
    **eventCode**
    
    String
    
    The event code for the extension point event.
    
-   The following is a sample of the message body format for a Pre-event for Data Upload. The message body is the content of the `data` field in the event message.
    
    ```
    {
      "datacontenttype": "application/json;charset=utf-8",
      "aliyunaccountid": "1493189603770213",
      "aliyunpublishtime": "2023-12-11T02:10:00.194Z",
      "data": {
        "eventCode": "upload-data-to-table",
        "uploadSourceType": "LOCAL",
        "optTableType": "CREATE",
        "targetEngineType": "MAXCOMPUTE",
        "writeType": "OVERWRITE",
        "conflictMode": "IGNORE",
        "operatorBaseId": "12312*****",
        "operatorUid": "1222222*****",
        "datasourceId": "1111",
        "datasourceName": "odps_first",
        "tableGuid": "odps.mc_project.test_table",
        "queryDwProjectId": "9***4",
        "queryDwProjectName": "test_project",
        "fileSize": 123456
      },
      "aliyunoriginalaccountid": "149318960******",
      "specversion": "1.0",
      "aliyuneventbusname": "default",
      "id": "2c3e41e5-3486-40ce-87d4-910f989cf2a7",
      "source": "acs.dataworks",
      "time": "2023-12-11T10:10:00.117Z",
      "aliyunregionid": "cn-shanghai",
      "type": "dataworks:ResourcesUpload:UploadDataToTable"
    }
    ```
    
    The following table describes the fields in the payload.
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **uploadSourceType**
    
    String
    
    The source of the uploaded data. Valid values:
    
    -   `LOCAL`: A local file.
        
    -   `OSS`: An Object Storage Service (OSS) object.
        
    -   DW\_EXCEL: Uploads data from in DataWorks.
        
    -   `HTTP`: An HTTP file.
        
    
    **optTableType**
    
    String
    
    The data upload type. Valid values:
    
    -   `CREATE`: Upload data to a new table.
        
    -   `IMPORT`: Upload data to an existing table.
        
    
    **targetEngineType**
    
    String
    
    The destination engine type. Valid values:
    
    -   `MaxCompute`
        
    -   `EMR Hive`
        
    -   `Hologres`
        
    
    **writeType**
    
    String
    
    The write mode for the destination table. Valid values:
    
    -   `OVERWRITE`: Overwrite the existing data in the table.
        
    -   `APPEND`: Append the uploaded data to the table.
        
    
    **conflictMode**
    
    String
    
    The policy for handling primary key conflicts when uploading data to the destination table.
    
    -   `IGNORE`: If a primary key conflict occurs, the uploaded data is ignored.
        
    -   `REPLACE`: If a primary key conflict occurs, the existing row is deleted and the new row is inserted. Any fields not present in the new row are set to `NULL`.
        
    -   `UPDATE`: Updates the existing row with data from the new row. Only the fields specified in the upload are affected. Other fields in the destination table remain unchanged.
        
    
    **operatorBaseId**
    
    String
    
    The BaseID of the user who uploaded the data.
    
    **operatorUid**
    
    String
    
    The UID of the user who uploaded the data.
    
    **datasourceId**
    
    String
    
    The ID of the destination Data Source.
    
    **datasourceName**
    
    String
    
    The name of the destination Data Source.
    
    **tableGuid**
    
    String
    
    The GUID of the table. Examples:
    
    -   MaxCompute: `odps.maxcomputeProject.tableName`.
        
    -   EMR\_Hive: `emr_hive.emrClusterId.schema.tableName`.
        
    -   Holo: `holo.hologresInstanceId.database`.
        
    
    **queryDwProjectId**
    
    String
    
    The ID of the DataWorks workspace that contains the table.
    
    **queryDwProjectName**
    
    String
    
    The name of the DataWorks workspace containing the destination table.
    
    **fileSize**
    
    Long
    
    The size of the uploaded file, in bytes.
    
    **eventCode**
    
    String
    
    The event code for the extension point event.
    

## **Appendix: Message formats**

## EventBridge message format

After you configure an event distribution channel in [Open Events (OpenEvent)](/help/en/dataworks/user-guide/openevent/), events are filtered by the event type (Type) that you configure in **EventBridge** when a workspace-level or **Tenant-level** event is triggered in DataWorks. The following example shows the message format that DataWorks sends to EventBridge through the event distribution channel.

```
{ 
 "datacontenttype": "application/json;charset=utf-8", // The format of the data field. Only application/json is supported.
  "data": {
    // The message content varies by message type. The following two fields are standard. For event-specific messages, see the preceding sections.
    "tenantId": 28378****10656, // The ID of the tenant.
    "eventCode": "xxxx"
  },
  "id": "539fd8f4-4ea1-4625-aa8b-6c906674****", // The unique identifier for the event.
  "source": "acs.dataworks", // The source of the event. This value indicates that the event is pushed by DataWorks.
  "specversion": "1.0",
  "subject": "",
  "time": "2020-11-19T21:04:41+08:00", // The time when the event was generated.
  "type": "dataworks:InstanceStatusChanges:InstanceStatusChanges", // The type of the event. You can use this value to filter all messages pushed by DataWorks in the EventBridge console. Each event has a unique type value. For the specific type value of each event, see the preceding sections.
  "aliyunaccountid": "123456789098****", // The ID of the Alibaba Cloud account.
  "aliyunpublishtime": "2020-11-19T21:04:42.179PRC", // The time when EventBridge received the event.
  "aliyuneventbusname": "default", // The name of the event bus in EventBridge that receives DataWorks events.
  "aliyunregionid": "cn-hangzhou", // The region where the event is received.
  "aliyunpublishaddr": "172.25.XX.XX"
}
```

A complete event message includes the message body and basic information such as the event ID, source, and generation time. The following table describes the key fields.

**Parameter**

**Type**

**Description**

**data**

Object

The event payload. The structure and fields of the payload vary by event type. For more information, see the following sections:

For the message format of DataStudio events, see [Events of DataStudio](#cbe0a615037ev).

For the message format of Data Integration events, see [Events of Data Integration](#028dd2d53fa6a).

For the message format of Operation Center events, see [Events of Operation Center](#d9259ff46211r).

For the message format of Security Center events, see [Events of Security Center](#076e7bc565eeu).

For the message format of Data Quality events, see [Events of Data Quality](#5fef696a83pmj).

**id**

String

The unique ID of the event.

**type**

String

The event type. Examples:

-   `dataworks:FileChange:CommitFile`: Indicates a file commit event.
    
-   `dataworks:FileChange:DeployFile`: Indicates a file deployment event.
    

You can use this event type in the EventBridge console to filter messages from DataWorks. Each event has a unique type value. For the specific type value for each event, see the preceding sections.

## Function Compute message format

When you configure an [Extension](/help/en/dataworks/user-guide/extensions/) in DataWorks to use Function Compute, DataWorks sends a JSON message to Function Compute when the corresponding extension point event is triggered. The following example shows the message format.

```
{
	"blockBusiness": true,
	"eventCategoryType": "resources-download", // The event category.
	"eventType": "upload-data-to-table", // The event type.
	"extensionBizId": "job_6603***070",
	"messageBody": {
             // The message content varies by message type. The following two fields are standard. For event-specific messages, see the preceding sections.
             "tenantId": 28378****10656, // The ID of the tenant.
             "eventCode": "xxxx"
	},
	"messageId": "52d44ee7-b51f-4d4d-afeb-*******" // A unique identifier for the event.
}
```

The following table describes the key fields.

**Parameter**

**Type**

**Description**

messageId

String

The unique ID of the event.

messageBody

Object

The event payload from DataWorks. Use this field in your extension development. The content of this field varies by message type.

tenantId

Long

The ID of the tenant. Each Alibaba Cloud account corresponds to a tenant in DataWorks. You can find the tenant ID under User Info in the top-right corner of the DataStudio page.

eventCode

String

The event code that identifies a specific class of events. For the `eventCode` corresponding to each event type, see the **Event code in Extensions** column in the tables in [this topic](#).
