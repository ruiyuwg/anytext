-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class Heartbeat (1.26.2) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class Heartbeat.

A periodic message with information that can be used to checkpoint the state of a stream.

Generated from protobuf message `google.bigtable.v2.ReadChangeStreamResponse.Heartbeat`

## Namespace

Google \\ Cloud \\ Bigtable \\ V2 \\ ReadChangeStreamResponse

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ continuation_token`

`[Google\Cloud\Bigtable\V2\StreamContinuationToken](/php/docs/reference/cloud-bigtable/1.26.2/V2.StreamContinuationToken)`  

A token that can be provided to a subsequent `ReadChangeStream` call to pick up reading at the current stream position.

`↳ estimated_low_watermark`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

An estimate of the commit timestamp that is usually lower than or equal to any timestamp for a record that will be delivered in the future on the stream. It is possible that, under particular circumstances that a future record has a timestamp is is lower than a previously seen timestamp. For an example usage see [https://beam.apache.org/documentation/basics/#watermarks](https://beam.apache.org/documentation/basics/#watermarks)

### getContinuationToken

A token that can be provided to a subsequent `ReadChangeStream` call to pick up reading at the current stream position.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\V2\StreamContinuationToken](/php/docs/reference/cloud-bigtable/1.26.2/V2.StreamContinuationToken)|null`

### hasContinuationToken

### clearContinuationToken

### setContinuationToken

A token that can be provided to a subsequent `ReadChangeStream` call to pick up reading at the current stream position.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Bigtable\V2\StreamContinuationToken](/php/docs/reference/cloud-bigtable/1.26.2/V2.StreamContinuationToken)`  

**Returns**

**Type**

**Description**

`$this`

### getEstimatedLowWatermark

An estimate of the commit timestamp that is usually lower than or equal to any timestamp for a record that will be delivered in the future on the stream. It is possible that, under particular circumstances that a future record has a timestamp is is lower than a previously seen timestamp. For an example usage see [https://beam.apache.org/documentation/basics/#watermarks](https://beam.apache.org/documentation/basics/#watermarks)

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasEstimatedLowWatermark

### clearEstimatedLowWatermark

### setEstimatedLowWatermark

An estimate of the commit timestamp that is usually lower than or equal to any timestamp for a record that will be delivered in the future on the stream. It is possible that, under particular circumstances that a future record has a timestamp is is lower than a previously seen timestamp. For an example usage see [https://beam.apache.org/documentation/basics/#watermarks](https://beam.apache.org/documentation/basics/#watermarks)

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
