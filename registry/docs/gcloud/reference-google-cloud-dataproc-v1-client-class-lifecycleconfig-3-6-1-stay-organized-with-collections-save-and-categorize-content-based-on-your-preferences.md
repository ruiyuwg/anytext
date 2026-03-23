-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc V1 Client - Class LifecycleConfig (3.6.1) Stay organized with collections Save and categorize content based on your preferences.

3.14.0 (latest) 3.13.4 3.12.0 3.11.0 3.10.1 3.9.0 3.8.1 3.7.1 3.6.1 3.5.1 3.4.0 3.3.0 3.2.2 2.9.1 2.8.2 2.7.0 2.6.1 2.5.0 2.3.0 2.2.3 2.1.0 2.0.0

Reference documentation and code samples for the Google Cloud Dataproc V1 Client class LifecycleConfig.

Specifies the cluster auto-delete schedule configuration.

Generated from protobuf message `google.cloud.dataproc.v1.LifecycleConfig`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ idle_delete_ttl`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).

`↳ auto_delete_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).

`↳ auto_delete_ttl`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).

`↳ idle_start_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).

### getIdleDeleteTtl

Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)|null`

### hasIdleDeleteTtl

### clearIdleDeleteTtl

### setIdleDeleteTtl

Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

**Returns**

**Type**

**Description**

`$this`

### getAutoDeleteTime

Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasAutoDeleteTime

### setAutoDeleteTime

Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getAutoDeleteTtl

Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)|null`

### hasAutoDeleteTtl

### setAutoDeleteTtl

Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

**Returns**

**Type**

**Description**

`$this`

### getIdleStartTime

Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasIdleStartTime

### clearIdleStartTime

### setIdleStartTime

Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getTtl

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
