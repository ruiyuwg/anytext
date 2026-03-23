-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner V1 Client - Class BatchCreateSessionsRequest (1.79.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner V1 Client class BatchCreateSessionsRequest.

The request for BatchCreateSessions.

Generated from protobuf message `google.spanner.v1.BatchCreateSessionsRequest`

## Namespace

Google \\ Cloud \\ Spanner \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ database`

`string`  

Required. The database in which the new sessions are created.

`↳ session_template`

`[Google\Cloud\Spanner\V1\Session](/php/docs/reference/cloud-spanner/1.79.0/V1.Session)`  

Parameters to be applied to each created session.

`↳ session_count`

`int`  

Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting [session\_count](/php/docs/reference/cloud-spanner/1.79.0/V1.BatchCreateSessionsRequest#_Google_Cloud_Spanner_V1_BatchCreateSessionsRequest__getSessionCount__) as necessary).

### getDatabase

Required. The database in which the new sessions are created.

**Returns**

**Type**

**Description**

`string`

### setDatabase

Required. The database in which the new sessions are created.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSessionTemplate

Parameters to be applied to each created session.

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\V1\Session](/php/docs/reference/cloud-spanner/1.79.0/V1.Session)|null`

### hasSessionTemplate

### clearSessionTemplate

### setSessionTemplate

Parameters to be applied to each created session.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Spanner\V1\Session](/php/docs/reference/cloud-spanner/1.79.0/V1.Session)`  

**Returns**

**Type**

**Description**

`$this`

### getSessionCount

Required. The number of sessions to be created in this batch call.

The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting [session\_count](/php/docs/reference/cloud-spanner/1.79.0/V1.BatchCreateSessionsRequest#_Google_Cloud_Spanner_V1_BatchCreateSessionsRequest__getSessionCount__) as necessary).

**Returns**

**Type**

**Description**

`int`

### setSessionCount

Required. The number of sessions to be created in this batch call.

The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting [session\_count](/php/docs/reference/cloud-spanner/1.79.0/V1.BatchCreateSessionsRequest#_Google_Cloud_Spanner_V1_BatchCreateSessionsRequest__getSessionCount__) as necessary).

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`database`

`string`  

Required. The database in which the new sessions are created. Please see Google\\Cloud\\Spanner\\V1\\SpannerClient::databaseName() for help formatting this field.

`sessionCount`

`int`  

Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting [session\_count](/php/docs/reference/cloud-spanner/1.79.0/V1.BatchCreateSessionsRequest#_Google_Cloud_Spanner_V1_BatchCreateSessionsRequest__getSessionCount__) as necessary).

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\V1\BatchCreateSessionsRequest](/php/docs/reference/cloud-spanner/1.79.0/V1.BatchCreateSessionsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
