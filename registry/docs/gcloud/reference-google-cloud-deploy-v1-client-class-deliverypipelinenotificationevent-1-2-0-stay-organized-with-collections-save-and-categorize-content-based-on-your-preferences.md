-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class DeliveryPipelineNotificationEvent (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class DeliveryPipelineNotificationEvent.

Payload proto for "clouddeploy.googleapis.com/deliverypipeline\_notification" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification.

Generated from protobuf message `google.cloud.deploy.v1.DeliveryPipelineNotificationEvent`

## Namespace

Google \\ Cloud \\ Deploy \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ message`

`string`  

Debug message for when a notification fails to send.

`↳ pipeline_uid`

`string`  

Unique identifier of the `DeliveryPipeline`.

`↳ delivery_pipeline`

`string`  

The name of the `Delivery Pipeline`.

`↳ type`

`int`  

Type of this notification, e.g. for a Pub/Sub failure.

### getMessage

Debug message for when a notification fails to send.

**Returns**

**Type**

**Description**

`string`

### setMessage

Debug message for when a notification fails to send.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPipelineUid

Unique identifier of the `DeliveryPipeline`.

**Returns**

**Type**

**Description**

`string`

### setPipelineUid

Unique identifier of the `DeliveryPipeline`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDeliveryPipeline

The name of the `Delivery Pipeline`.

**Returns**

**Type**

**Description**

`string`

### setDeliveryPipeline

The name of the `Delivery Pipeline`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getType

Type of this notification, e.g. for a Pub/Sub failure.

**Returns**

**Type**

**Description**

`int`

### setType

Type of this notification, e.g. for a Pub/Sub failure.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
