-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Logging V2 Client - Class TailLogEntriesResponse (1.27.1) Stay organized with collections Save and categorize content based on your preferences.

2.0.0-RC1 1.34.5 (latest) 1.33.0 1.32.3 1.31.3 1.30.3 1.29.0 1.28.5 1.27.1 1.26.0 1.25.5 1.24.10

Reference documentation and code samples for the Stackdriver Logging V2 Client class TailLogEntriesResponse.

Result returned from `TailLogEntries`.

Generated from protobuf message `google.logging.v2.TailLogEntriesResponse`

## Namespace

Google \\ Cloud \\ Logging \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ entries`

`array<[Google\Cloud\Logging\V2\LogEntry](/php/docs/reference/cloud-logging/1.27.1/V2.LogEntry)>`  

A list of log entries. Each response in the stream will order entries with increasing values of `LogEntry.timestamp`. Ordering is not guaranteed between separate responses.

`↳ suppression_info`

`array<[Google\Cloud\Logging\V2\TailLogEntriesResponse\SuppressionInfo](/php/docs/reference/cloud-logging/1.27.1/V2.TailLogEntriesResponse.SuppressionInfo)>`  

If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response.

### getEntries

A list of log entries. Each response in the stream will order entries with increasing values of `LogEntry.timestamp`. Ordering is not guaranteed between separate responses.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setEntries

A list of log entries. Each response in the stream will order entries with increasing values of `LogEntry.timestamp`. Ordering is not guaranteed between separate responses.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Logging\V2\LogEntry](/php/docs/reference/cloud-logging/1.27.1/V2.LogEntry)>`  

**Returns**

**Type**

**Description**

`$this`

### getSuppressionInfo

If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSuppressionInfo

If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Logging\V2\TailLogEntriesResponse\SuppressionInfo](/php/docs/reference/cloud-logging/1.27.1/V2.TailLogEntriesResponse.SuppressionInfo)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
