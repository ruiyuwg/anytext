-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Policy Simulator V1 Client - Class AccessStateDiff (1.3.4) Stay organized with collections Save and categorize content based on your preferences.

1.3.4 (latest) 1.3.3 1.2.0 1.1.1 1.0.3 0.2.5 0.1.1

Reference documentation and code samples for the Google Cloud Policy Simulator V1 Client class AccessStateDiff.

A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.

Generated from protobuf message `google.cloud.policysimulator.v1.AccessStateDiff`

## Namespace

Google \\ Cloud \\ PolicySimulator \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ baseline`

`[ExplainedAccess](/php/docs/reference/cloud-policysimulator/latest/V1.ExplainedAccess)`  

The results of evaluating the access tuple under the current (baseline) policies. If the [AccessState](/php/docs/reference/cloud-policysimulator/latest/V1.AccessState) couldn't be fully evaluated, this field explains why.

`↳ simulated`

`[ExplainedAccess](/php/docs/reference/cloud-policysimulator/latest/V1.ExplainedAccess)`  

The results of evaluating the access tuple under the proposed (simulated) policies. If the AccessState couldn't be fully evaluated, this field explains why.

`↳ access_change`

`int`  

How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies.

### getBaseline

The results of evaluating the access tuple under the current (baseline) policies.

If the [AccessState](/php/docs/reference/cloud-policysimulator/latest/V1.AccessState) couldn't be fully evaluated, this field explains why.

**Returns**

**Type**

**Description**

`[ExplainedAccess](/php/docs/reference/cloud-policysimulator/latest/V1.ExplainedAccess)|null`

### hasBaseline

### clearBaseline

### setBaseline

The results of evaluating the access tuple under the current (baseline) policies.

If the [AccessState](/php/docs/reference/cloud-policysimulator/latest/V1.AccessState) couldn't be fully evaluated, this field explains why.

**Parameter**

**Name**

**Description**

`var`

`[ExplainedAccess](/php/docs/reference/cloud-policysimulator/latest/V1.ExplainedAccess)`  

**Returns**

**Type**

**Description**

`$this`

### getSimulated

The results of evaluating the access tuple under the proposed (simulated) policies.

If the AccessState couldn't be fully evaluated, this field explains why.

**Returns**

**Type**

**Description**

`[ExplainedAccess](/php/docs/reference/cloud-policysimulator/latest/V1.ExplainedAccess)|null`

### hasSimulated

### clearSimulated

### setSimulated

The results of evaluating the access tuple under the proposed (simulated) policies.

If the AccessState couldn't be fully evaluated, this field explains why.

**Parameter**

**Name**

**Description**

`var`

`[ExplainedAccess](/php/docs/reference/cloud-policysimulator/latest/V1.ExplainedAccess)`  

**Returns**

**Type**

**Description**

`$this`

### getAccessChange

How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies.

**Returns**

**Type**

**Description**

`int`

Enum of type [AccessChangeType](/php/docs/reference/cloud-policysimulator/latest/V1.AccessStateDiff.AccessChangeType).

### setAccessChange

How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies.

**Parameter**

**Name**

**Description**

`var`

`int`  

Enum of type [AccessChangeType](/php/docs/reference/cloud-policysimulator/latest/V1.AccessStateDiff.AccessChangeType).

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
