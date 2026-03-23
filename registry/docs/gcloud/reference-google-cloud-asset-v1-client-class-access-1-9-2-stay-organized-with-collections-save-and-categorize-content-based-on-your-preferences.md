-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Asset V1 Client - Class Access (1.9.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.3 (latest) 2.3.2 2.2.3 2.1.3 2.0.1 1.16.4 1.14.1 1.13.2 1.12.2 1.11.3 1.10.2 1.9.2

Reference documentation and code samples for the Google Cloud Asset V1 Client class Access.

An IAM role or permission under analysis.

Generated from protobuf message `google.cloud.asset.v1.IamPolicyAnalysisResult.Access`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ role`

`string`  

The role.

`↳ permission`

`string`  

The permission.

`↳ analysis_state`

`[Google\Cloud\Asset\V1\IamPolicyAnalysisState](/php/docs/reference/cloud-asset/1.9.2/V1.IamPolicyAnalysisState)`  

The analysis state of this access.

### getRole

The role.

Generated from protobuf field `string role = 1;`

**Returns**

**Type**

**Description**

`string`

### hasRole

### setRole

The role.

Generated from protobuf field `string role = 1;`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPermission

The permission.

Generated from protobuf field `string permission = 2;`

**Returns**

**Type**

**Description**

`string`

### hasPermission

### setPermission

The permission.

Generated from protobuf field `string permission = 2;`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAnalysisState

The analysis state of this access.

Generated from protobuf field `.google.cloud.asset.v1.IamPolicyAnalysisState analysis_state = 3;`

**Returns**

**Type**

**Description**

`[Google\Cloud\Asset\V1\IamPolicyAnalysisState](/php/docs/reference/cloud-asset/1.9.2/V1.IamPolicyAnalysisState)|null`

### hasAnalysisState

### clearAnalysisState

### setAnalysisState

The analysis state of this access.

Generated from protobuf field `.google.cloud.asset.v1.IamPolicyAnalysisState analysis_state = 3;`

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Asset\V1\IamPolicyAnalysisState](/php/docs/reference/cloud-asset/1.9.2/V1.IamPolicyAnalysisState)`  

**Returns**

**Type**

**Description**

`$this`

### getOneofAccess

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
