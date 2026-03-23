Queries logs in a project. You can use this operation to query logs at the project level.

## Operation description

### [](#usage-notes)Usage notes

-   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).

The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](/help/en/sls/manage-a-project/).
-   Indexes are configured before you query logs. For more information, see [Create indexes](/help/en/sls/create-indexes).
-   Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](/help/en/sls/log-search-overview) and [Log analysis overview](/help/en/sls/log-analysis-overview).
-   You must set query to a standard SQL statement.
-   You must specify a Logstore in the FROM clause of an SQL statement. A Logstore can be used as an SQL table.
-   You must specify a time range in an SQL statement by using the \_\_date\_\_ or \_\_time\_\_ parameter. The value of the \_\_date\_\_ parameter is a timestamp. The value of the \_\_time\_\_ parameter is an integer, and the unit of the value is seconds.

### [](#authentication-resources)Authentication resources

The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.

Action

Resource

`log:GetProjectLogs`

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/GetProjectLogs)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/GetProjectLogs)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request syntax

```
GET /logs HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

project

string

Yes

The name of the project.

ali-test-project

query

string

Yes

The standard SQL statement. In this example, the SQL statement queries the number of page views (PVs) from 2022-03-01 10:41:40 to 2022-03-01 10:56:40 in a Logstore whose name is nginx-moni.

SELECT COUNT(\*) as pv FROM nginx-moni where \_\_time\_\_ &gt; 1646102500 and \_\_time\_\_ &lt; 1646103400

powerSql

boolean

No

Specifies whether to enable the Dedicated SQL feature. For more information, see [Enable Dedicated SQL](/help/en/sls/dedicated-sql/). Valid values:

-   true
-   false (default): enables the Standard SQL feature.

You can use the powerSql or **query** parameter to configure Dedicated SQL.

false

Sample requests

GET /logs?query=SELECT COUNT(\*) as pv FROM nginx-moni where **time** > 1646102500 and **time** < 1646103400&powerSql=false HTTP/1.1 Host:ali-test-project.ch-hangzhou.log.aliyuncs.com Content-Type:application/json

## Response parameters

Parameter

Type

Description

Example

headers

object

x-log-progress

string

The status of the query and analysis results. Valid values:

-   Complete: The query is successful, and the complete query and analysis results are returned.
-   Incomplete: The query is successful, but the query and analysis results are incomplete. To obtain the complete results, you must repeat the request.

Complete

x-log-count

long

The total number of logs in the query and analysis results.

10000

x-log-processed-rows

long

The number of lines that are processed based on the request.

10000

x-log-elapsed-millisecond

long

The time that is consumed by the request. Unit: milliseconds.

5

Server

string

The name of the server.

nginx

Content-Type

string

The content type of the response body.

application/json

Content-Length

string

The content length of the response body.

0

Connection

string

Indicates whether the connection is persistent. Valid values: close and keep-alive. close: The connection is non-persistent. A new TCP connection is established for each HTTP request. keep-alive: The connection is persistent. After a TCP connection is established, the connection remains open, and no more time or bandwidth is consumed to establish new connections.

close

Date

string

The time when the response was returned.

Sun, 27 May 2018 08:25:04 GMT

x-log-requestid

string

The request ID.

5B0A6B60BB6EE39764D458B5

array<object>

The logs that are returned.

object

The log that is returned.

string

The log that is returned.

{"Key1" : "value"}

## Examples

Sample success responses

`JSON`format

```
[
  {
    "key": {
      "Key1": "value"
    }
  }
]
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
