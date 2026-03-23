-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Functions V1 Client - Class EventTrigger (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.6 1.7.0 1.6.5 1.5.0 1.4.2 1.3.1 1.2.0 1.1.2 1.0.3

Reference documentation and code samples for the Google Cloud Functions V1 Client class EventTrigger.

Describes EventTrigger, used to request that events be sent from another service.

Generated from protobuf message `google.cloud.functions.v1.EventTrigger`

## Namespace

Google \\ Cloud \\ Functions \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ event_type`

`string`  

Required. The type of event to observe. For example: `providers/cloud.storage/eventTypes/object.change` and `providers/cloud.pubsub/eventTypes/topic.publish`. Event types match pattern `providers/*/eventTypes/*.*`. The pattern contains: 1. namespace: For example, `cloud.storage` and `google.firebase.analytics`. 2. resource type: The type of resource on which event occurs. For example, the Google Cloud Storage API includes the type `object`. 3. action: The action that generates the event. For example, action for a Google Cloud Storage Object is 'change'. These parts are lowercase.

`↳ resource`

`string`  

Required. The resource(s) from which to observe events, for example, `projects/_/buckets/myBucket`. Not all syntactically correct values are accepted by all services. For example: 1. The authorization model must support it. Google Cloud Functions only allows EventTriggers to be deployed that observe resources in the same project as the `CloudFunction`. 2. The resource type must match the pattern expected for an `event_type`. For example, an `EventTrigger` that has an `event_type` of "google.pubsub.topic.publish" should have a resource that matches Google Cloud Pub/Sub topics. Additionally, some services may support short names when creating an `EventTrigger`. These are always returned in the normalized "long" format. See each _service's_ documentation for supported formats.

`↳ service`

`string`  

The hostname of the service that should be observed. If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace.

`↳ failure_policy`

`[Google\Cloud\Functions\V1\FailurePolicy](/php/docs/reference/cloud-functions/1.5.0/V1.FailurePolicy)`  

Specifies policy for failed executions.

### getEventType

Required. The type of event to observe. For example: `providers/cloud.storage/eventTypes/object.change` and `providers/cloud.pubsub/eventTypes/topic.publish`.

Event types match pattern `providers/*/eventTypes/*.*`. The pattern contains:

1.  namespace: For example, `cloud.storage` and `google.firebase.analytics`.
2.  resource type: The type of resource on which event occurs. For example, the Google Cloud Storage API includes the type `object`.
3.  action: The action that generates the event. For example, action for a Google Cloud Storage Object is 'change'. These parts are lowercase.

**Returns**

**Type**

**Description**

`string`

### setEventType

Required. The type of event to observe. For example: `providers/cloud.storage/eventTypes/object.change` and `providers/cloud.pubsub/eventTypes/topic.publish`.

Event types match pattern `providers/*/eventTypes/*.*`. The pattern contains:

1.  namespace: For example, `cloud.storage` and `google.firebase.analytics`.
2.  resource type: The type of resource on which event occurs. For example, the Google Cloud Storage API includes the type `object`.
3.  action: The action that generates the event. For example, action for a Google Cloud Storage Object is 'change'. These parts are lowercase.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getResource

Required. The resource(s) from which to observe events, for example, `projects/_/buckets/myBucket`.

Not all syntactically correct values are accepted by all services. For example:

1.  The authorization model must support it. Google Cloud Functions only allows EventTriggers to be deployed that observe resources in the same project as the `CloudFunction`.
2.  The resource type must match the pattern expected for an `event_type`. For example, an `EventTrigger` that has an `event_type` of "google.pubsub.topic.publish" should have a resource that matches Google Cloud Pub/Sub topics. Additionally, some services may support short names when creating an `EventTrigger`. These are always returned in the normalized "long" format. See each _service's_ documentation for supported formats.

**Returns**

**Type**

**Description**

`string`

### setResource

Required. The resource(s) from which to observe events, for example, `projects/_/buckets/myBucket`.

Not all syntactically correct values are accepted by all services. For example:

1.  The authorization model must support it. Google Cloud Functions only allows EventTriggers to be deployed that observe resources in the same project as the `CloudFunction`.
2.  The resource type must match the pattern expected for an `event_type`. For example, an `EventTrigger` that has an `event_type` of "google.pubsub.topic.publish" should have a resource that matches Google Cloud Pub/Sub topics. Additionally, some services may support short names when creating an `EventTrigger`. These are always returned in the normalized "long" format. See each _service's_ documentation for supported formats.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getService

The hostname of the service that should be observed.

If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace.

**Returns**

**Type**

**Description**

`string`

### setService

The hostname of the service that should be observed.

If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFailurePolicy

Specifies policy for failed executions.

**Returns**

**Type**

**Description**

`[Google\Cloud\Functions\V1\FailurePolicy](/php/docs/reference/cloud-functions/1.5.0/V1.FailurePolicy)|null`

### hasFailurePolicy

### clearFailurePolicy

### setFailurePolicy

Specifies policy for failed executions.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Functions\V1\FailurePolicy](/php/docs/reference/cloud-functions/1.5.0/V1.FailurePolicy)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
