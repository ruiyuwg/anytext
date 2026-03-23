Queries the information about a pending event.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePendingMaintenanceAction)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePendingMaintenanceAction)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

polardb:DescribePendingMaintenanceAction

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Region

string

Yes

The region ID of the pending event. You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the regions and zones that are supported by PolarDB.

**Note**-   You can set this parameter to **all** to view all pending events within your account.
-   If you set `Region` to **all**, you must set `TaskType` to **all**.

all

TaskType

string

Yes

The task type of pending events. Valid values:

-   **DatabaseSoftwareUpgrading**: database software upgrades
-   **DatabaseHardwareMaintenance**: hardware maintenance and upgrades
-   **DatabaseStorageUpgrading**: database storage upgrades
-   **DatabaseProxyUpgrading**: minor version upgrades of the proxy
-   **all**: queries the details of the pending events of all preceding types.

**Note** If the `Region` parameter is set to **all**, the `TaskType` parameter must be set to **all**.

all

IsHistory

integer

No

Specifies whether to return the historical tasks. Valid values:

-   **0**: returns the current task.
-   **1**: returns the historical tasks.

Default value: **0**.

0

PageSize

integer

No

The number of entries per page. Valid values: **30**, **50**, and **100**.

Default value: **30**.

30

PageNumber

integer

No

The number of the page to return. Specify the parameter to a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.

1

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

TotalRecordCount

integer

The total number of returned entries.

1

RequestId

string

The ID of the request.

2F029645-FED9-4FE8-A6D3-488954\*\*\*\*\*\*

PageSize

integer

The number of entries per page.

30

PageNumber

integer

The page number.

1

Items

array<object>

Details about tasks.

Items

object

Status

integer

The status of the pending task.

-   If you set the `IsHistory` parameter to **0**, the status of the pending task is returned. Valid values:
    
    -   **2**: The start time of the task is to be specified.
    -   **3**: The task is pending.
    -   **4**: The task is running. In this case, you cannot modify the execution time.
-   If you set the `IsHistory` parameter to **1**, the details of the historical tasks are returned. Valid values:
    
    -   **5**: The task is completed and executed.
    -   **6**: The task is completed but fails to be executed.
    -   **7**: The task is canceled.

3

PrepareInterval

string

The preparation time that is required before the pending event is switched. The time follows the `HH:mm:ss` format.

04:00:00

Deadline

string

The deadline before which the task can be executed. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-06-11T15:59:59Z

DBType

string

The type of the database engine. Valid values:

-   **MySQL**
-   **PostgreSQL**
-   **Oracle**

MySQL

TaskType

string

The type of the pending event.

DatabaseSoftwareUpgrading

StartTime

string

The time when the task was executed in the background. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-06-09T18:00:00Z

DBVersion

string

The version of the database engine.

-   Valid values for the MySQL database engine:
    
    -   **5.6**
    -   **5.7**
    -   **8.0**
-   Valid values for the PostgreSQL database engine:
    
    -   **11**
    -   **14**
-   Valid value for the Oracle database engine: **11**
    

8.0

ModifiedTime

string

The time when the parameter was modified. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-06-09T22:00:42Z

DBClusterId

string

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*

Region

string

The region ID of the pending event.

cn-hangzhou

ResultInfo

string

The execution result of the task. Valid values:

-   **manualCancel**: The task is manually canceled.
-   **paramCheckNotPass**: The task fails to pass the parameter check.

**Note** This parameter is returned only when the value of the `Status` parameter is **6** or **7**. The value 6 indicates that the task is completed but fails to be executed. The value 7 indicates that the task is canceled.

manualCancel

CreatedTime

string

The time when the task was created. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-06-09T22:00:42Z

Id

integer

The ID of the task.

111111

SwitchTime

string

The time when the pending event was switched. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-06-09T22:00:00Z

## Examples

Sample success responses

`JSON`format

```
{
  "TotalRecordCount": 1,
  "RequestId": "2F029645-FED9-4FE8-A6D3-488954******",
  "PageSize": 30,
  "PageNumber": 1,
  "Items": [
    {
      "Status": 3,
      "PrepareInterval": "04:00:00",
      "Deadline": "2020-06-11T15:59:59Z",
      "DBType": "MySQL",
      "TaskType": "DatabaseSoftwareUpgrading",
      "StartTime": "2020-06-09T18:00:00Z",
      "DBVersion": 8,
      "ModifiedTime": "2020-06-09T22:00:42Z",
      "DBClusterId": "pc-************",
      "Region": "cn-hangzhou",
      "ResultInfo": "manualCancel",
      "CreatedTime": "2020-06-09T22:00:42Z",
      "Id": 111111,
      "SwitchTime": "2020-06-09T22:00:00Z"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
