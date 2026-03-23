-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Datastore V1 Client - Class PropertyReference (2.0.5) Stay organized with collections Save and categorize content based on your preferences.

2.0.5 (latest) 2.0.4 1.34.2 1.33.1 1.32.3 1.31.0 1.30.0 1.29.2 1.28.2 1.26.0 1.25.0 1.24.4 1.23.0 1.22.1 1.21.2 1.19.0 1.18.1 1.17.1

Reference documentation and code samples for the Cloud Datastore V1 Client class PropertyReference.

A reference to a property relative to the kind expressions.

Generated from protobuf message `google.datastore.v1.PropertyReference`

## Namespace

Google \\ Cloud \\ Datastore \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

A reference to a property. Requires: \* \* MUST be a dot-delimited (`.`) string of segments, where each segment conforms to [entity property name](/php/docs/reference/cloud-datastore/latest/V1.Entity#_Google_Cloud_Datastore_V1_Entity__getProperties__) limitations.

### getName

A reference to a property.

Requires:

-   MUST be a dot-delimited (`.`) string of segments, where each segment conforms to [entity property name](/php/docs/reference/cloud-datastore/latest/V1.Entity#_Google_Cloud_Datastore_V1_Entity__getProperties__) limitations.

**Returns**

**Type**

**Description**

`string`

### setName

A reference to a property.

Requires:

-   MUST be a dot-delimited (`.`) string of segments, where each segment conforms to [entity property name](/php/docs/reference/cloud-datastore/latest/V1.Entity#_Google_Cloud_Datastore_V1_Entity__getProperties__) limitations.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
