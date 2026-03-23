-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Eventarc V1 Client - Class FilteringAttribute (2.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.5 2.0.1 1.3.5 1.2.2 1.1.1 1.0.5

Reference documentation and code samples for the Google Cloud Eventarc V1 Client class FilteringAttribute.

A representation of the FilteringAttribute resource.

Filtering attributes are per event type.

Generated from protobuf message `google.cloud.eventarc.v1.FilteringAttribute`

## Namespace

Google \\ Cloud \\ Eventarc \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ attribute`

`string`  

Output only. Attribute used for filtering the event type.

`↳ description`

`string`  

Output only. Description of the purpose of the attribute.

`↳ required`

`bool`  

Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise.

`↳ path_pattern_supported`

`bool`  

Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format.

### getAttribute

Output only. Attribute used for filtering the event type.

**Returns**

**Type**

**Description**

`string`

### setAttribute

Output only. Attribute used for filtering the event type.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

Output only. Description of the purpose of the attribute.

**Returns**

**Type**

**Description**

`string`

### setDescription

Output only. Description of the purpose of the attribute.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRequired

Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise.

**Returns**

**Type**

**Description**

`bool`

### setRequired

Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getPathPatternSupported

Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format.

**Returns**

**Type**

**Description**

`bool`

### setPathPatternSupported

Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
