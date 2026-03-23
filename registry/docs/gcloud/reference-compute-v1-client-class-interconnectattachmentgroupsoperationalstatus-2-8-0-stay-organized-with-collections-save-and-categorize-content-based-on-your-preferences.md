-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class InterconnectAttachmentGroupsOperationalStatus (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class InterconnectAttachmentGroupsOperationalStatus.

Generated from protobuf message `google.cloud.compute.v1.InterconnectAttachmentGroupsOperationalStatus`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ attachment_statuses`

`array<[InterconnectAttachmentGroupsOperationalStatusAttachmentStatus](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupsOperationalStatusAttachmentStatus)>`  

`↳ configured`

`[InterconnectAttachmentGroupConfigured](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupConfigured)`  

`↳ group_status`

`string`  

Output only. Summarizes the status of the group. Check the GroupStatus enum for the list of possible values.

`↳ intent`

`[InterconnectAttachmentGroupIntent](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupIntent)`  

`↳ operational`

`[InterconnectAttachmentGroupConfigured](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupConfigured)`  

Output only. The operational state of the group, including only active Attachments.

### getAttachmentStatuses

Generated from protobuf field `repeated .google.cloud.compute.v1.InterconnectAttachmentGroupsOperationalStatusAttachmentStatus attachment_statuses = 491132860;`

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[InterconnectAttachmentGroupsOperationalStatusAttachmentStatus](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupsOperationalStatusAttachmentStatus)>`

### setAttachmentStatuses

Generated from protobuf field `repeated .google.cloud.compute.v1.InterconnectAttachmentGroupsOperationalStatusAttachmentStatus attachment_statuses = 491132860;`

**Parameter**

**Name**

**Description**

`var`

`array<[InterconnectAttachmentGroupsOperationalStatusAttachmentStatus](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupsOperationalStatusAttachmentStatus)>`  

**Returns**

**Type**

**Description**

`$this`

### getConfigured

Generated from protobuf field `optional .google.cloud.compute.v1.InterconnectAttachmentGroupConfigured configured = 295631422;`

**Returns**

**Type**

**Description**

`[InterconnectAttachmentGroupConfigured](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupConfigured)|null`

### hasConfigured

### clearConfigured

### setConfigured

Generated from protobuf field `optional .google.cloud.compute.v1.InterconnectAttachmentGroupConfigured configured = 295631422;`

**Parameter**

**Name**

**Description**

`var`

`[InterconnectAttachmentGroupConfigured](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupConfigured)`  

**Returns**

**Type**

**Description**

`$this`

### getGroupStatus

Output only. Summarizes the status of the group.

Check the GroupStatus enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasGroupStatus

### clearGroupStatus

### setGroupStatus

Output only. Summarizes the status of the group.

Check the GroupStatus enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getIntent

Generated from protobuf field `optional .google.cloud.compute.v1.InterconnectAttachmentGroupIntent intent = 426849948;`

**Returns**

**Type**

**Description**

`[InterconnectAttachmentGroupIntent](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupIntent)|null`

### hasIntent

### clearIntent

### setIntent

Generated from protobuf field `optional .google.cloud.compute.v1.InterconnectAttachmentGroupIntent intent = 426849948;`

**Parameter**

**Name**

**Description**

`var`

`[InterconnectAttachmentGroupIntent](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupIntent)`  

**Returns**

**Type**

**Description**

`$this`

### getOperational

Output only. The operational state of the group, including only active Attachments.

**Returns**

**Type**

**Description**

`[InterconnectAttachmentGroupConfigured](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupConfigured)|null`

### hasOperational

### clearOperational

### setOperational

Output only. The operational state of the group, including only active Attachments.

**Parameter**

**Name**

**Description**

`var`

`[InterconnectAttachmentGroupConfigured](/php/docs/reference/cloud-compute/latest/V1.InterconnectAttachmentGroupConfigured)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
