-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Analytics Admin V1beta Client - Class FirebaseLink (0.15.1) Stay organized with collections Save and categorize content based on your preferences.

0.31.3 (latest) 0.31.2 0.30.0 0.29.1 0.28.1 0.27.0 0.26.0 0.25.2 0.24.2 0.23.0 0.22.5 0.20.0 0.19.0 0.18.1 0.17.0 0.16.0 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.2

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Analytics Admin V1beta Client class FirebaseLink.

A link between a GA4 property and a Firebase project.

Generated from protobuf message `google.analytics.admin.v1beta.FirebaseLink`

## Namespace

Google \\ Analytics \\ Admin \\ V1beta

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

Output only. Example format: properties/1234/firebaseLinks/5678

`↳ project`

`string`  

Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project\_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Time when this FirebaseLink was originally created.

### getName

Output only. Example format: properties/1234/firebaseLinks/5678

**Returns**

**Type**

**Description**

`string`

### setName

Output only. Example format: properties/1234/firebaseLinks/5678

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProject

Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project\_name that contains a project number.

Format: 'projects/{project number}' Example: 'projects/1234'

**Returns**

**Type**

**Description**

`string`

### setProject

Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project\_name that contains a project number.

Format: 'projects/{project number}' Example: 'projects/1234'

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. Time when this FirebaseLink was originally created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Time when this FirebaseLink was originally created.

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
