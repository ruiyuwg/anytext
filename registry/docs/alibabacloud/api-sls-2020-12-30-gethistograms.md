You can call the GetHistograms operation to query the distribution of logs that meet the search criteria in a specified Logstore.

## Operation description

### Interface description

-   The Host in the request syntax consists of the project name and the Simple Log Service Endpoint. You must specify the project in the Host.
    
-   The subintervals in the response are divided consistently. If the requested time range is the same, the subinterval division in the response is also the same.
    
-   If the number of logs in a query varies greatly, the Simple Log Service application programming interface (API) cannot predict how many calls are needed to retrieve the full result. You must check the status of the progress member in each response. This status indicates whether to call the operation again to retrieve the final result. Each repeated call consumes the same number of query CUs.
    
-   The delay between when a log is written to a Logstore and when it can be queried using the GetHistograms and GetLogs operations varies by log type. Simple Log Service classifies logs into two types based on their timestamps:
    -   Real-time data: The log timestamp is within the range of (-180 seconds, +900 seconds\] relative to the server's current time. For example, if a log's timestamp is UTC 2014-09-25 12:03:00 and the server receives it at UTC 2014-09-25 12:05:00, the log is processed as real-time data. The maximum latency for real-time data to become searchable is 3 seconds. In 99.9% of cases, the data is searchable within 1 second.
        
    -   Historical data: The log timestamp is within the range of \[-7 × 86400 seconds, -180 seconds) relative to the server's current time. For example, if a log's timestamp is UTC 2014-09-25 12:00:00 and the server receives it at UTC 2014-09-25 12:05:00, the log is processed as historical data. This typically happens during data backfill.
        

**Note**

Simple Log Service calculates the difference between the log time (the \_\_time\_\_ field) and the time the server received the log (the \_\_tag\_\_:\_\_receive\_time\_\_ field). If the difference is in the range of (-180 seconds, 900 seconds\], the data is real-time data. If the difference is in the range of \[-7 × 86400 seconds, -180 seconds), the data is historical data.

-   Simple Log Service provides a Java software development kit (SDK) example for using the GetHistograms query. For more information, see [Use GetHistograms to query log distribution](/help/en/sls/developer-reference/use-gethistograms-to-query-the-distribution-of-logs).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/GetHistograms)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/GetHistograms)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
GET /logstores/{logstore}/index?type=histogram HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

logstore

string

Yes

The name of the Logstore.

test-logstore

## Request parameters

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

from

integer

Yes

The beginning of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.

1409529600

to

integer

Yes

The end of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.

1409569200

topic

string

No

The topic of the log.

topic

query

string

No

The search statement. Only search statements are supported. Analytic statements are not supported. For more information about the syntax of search statements, see [Search syntax](/help/en/sls/log-search-overview).

with\_pack\_meta

## Response elements

**Element**

**Type**

**Description**

**Example**

array

object

from

integer

The beginning of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.

The time range is a left-closed, right-open interval. This means that the subinterval includes the start time but not the end time. If the values of from and to are the same, the interval is invalid and an error is returned.

1409529600

to

integer

The end of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.

The time range is a left-closed, right-open interval. This means that the subinterval includes the start time but not the end time. If the values of from and to are the same, the interval is invalid and an error is returned.

1409569200

count

integer

The number of logs that are found in the subinterval.

2

progress

string

Indicates whether the query result in the subinterval is complete.

Complete: The query is complete and the result is complete.

Incomplete: The query is complete but the result is incomplete. Send the request again to obtain the complete result.

Complete

## Examples

Success response

`JSON` format

```
[
  {
    "from": 1409529600,
    "to": 1409569200,
    "count": 2,
    "progress": "Complete"
  }
]
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/GetHistograms#workbench-doc-change-demo) for a complete list.
