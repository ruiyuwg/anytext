-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V1p1beta1 Client - Class Resource (1.20.2) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Security Command Center V1p1beta1 Client class Resource.

Information related to the Google Cloud resource that is associated with this finding.

Generated from protobuf message `google.cloud.securitycenter.v1p1beta1.ListFindingsResponse.ListFindingsResult.Resource`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V1p1beta1 \\ ListFindingsResponse \\ ListFindingsResult

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

The full resource name of the resource. See: [https://cloud.google.com/apis/design/resource\_names#full\_resource\_name](https://cloud.google.com/apis/design/resource_names#full_resource_name)

`↳ project_name`

`string`  

The full resource name of project that the resource belongs to.

`↳ project_display_name`

`string`  

The human readable name of project that the resource belongs to.

`↳ parent_name`

`string`  

The full resource name of resource's parent.

`↳ parent_display_name`

`string`  

The human readable name of resource's parent.

`↳ folders`

`array<[Google\Cloud\SecurityCenter\V1p1beta1\Folder](/php/docs/reference/cloud-security-center/1.20.2/V1p1beta1.Folder)>`  

Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.

### getName

The full resource name of the resource. See: [https://cloud.google.com/apis/design/resource\_names#full\_resource\_name](https://cloud.google.com/apis/design/resource_names#full_resource_name)

**Returns**

**Type**

**Description**

`string`

### setName

The full resource name of the resource. See: [https://cloud.google.com/apis/design/resource\_names#full\_resource\_name](https://cloud.google.com/apis/design/resource_names#full_resource_name)

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProjectName

The full resource name of project that the resource belongs to.

**Returns**

**Type**

**Description**

`string`

### setProjectName

The full resource name of project that the resource belongs to.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProjectDisplayName

The human readable name of project that the resource belongs to.

**Returns**

**Type**

**Description**

`string`

### setProjectDisplayName

The human readable name of project that the resource belongs to.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getParentName

The full resource name of resource's parent.

**Returns**

**Type**

**Description**

`string`

### setParentName

The full resource name of resource's parent.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getParentDisplayName

The human readable name of resource's parent.

**Returns**

**Type**

**Description**

`string`

### setParentDisplayName

The human readable name of resource's parent.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFolders

Contains a Folder message for each folder in the assets ancestry.

The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setFolders

Contains a Folder message for each folder in the assets ancestry.

The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\SecurityCenter\V1p1beta1\Folder](/php/docs/reference/cloud-security-center/1.20.2/V1p1beta1.Folder)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
