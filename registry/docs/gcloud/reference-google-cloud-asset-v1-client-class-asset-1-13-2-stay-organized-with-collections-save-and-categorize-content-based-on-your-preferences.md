-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Asset V1 Client - Class Asset (1.13.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.3 (latest) 2.3.2 2.2.3 2.1.3 2.0.1 1.16.4 1.14.1 1.13.2 1.12.2 1.11.3 1.10.2 1.9.2

Reference documentation and code samples for the Google Cloud Asset V1 Client class Asset.

An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE\_TO\_INSTANCEGROUP relationship).

See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

Generated from protobuf message `google.cloud.asset.v1.Asset`

## Namespace

Google \\ Cloud \\ Asset \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The last update timestamp of an asset. update\_time is updated when create/update/delete operation is performed.

`↳ name`

`string`  

The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.

`↳ asset_type`

`string`  

The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

`↳ resource`

`[Google\Cloud\Asset\V1\Resource](/php/docs/reference/cloud-asset/1.13.2/V1.Resource)`  

A representation of the resource.

`↳ iam_policy`

`[Google\Cloud\Iam\V1\Policy](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/Policy)`  

A representation of the IAM policy set on a Google Cloud resource. There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information.

`↳ org_policy`

`array<Google\Cloud\OrgPolicy\V1\Policy>`  

A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource.

`↳ access_policy`

`Google\Identity\AccessContextManager\V1\AccessPolicy`  

Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies).

`↳ access_level`

`Google\Identity\AccessContextManager\V1\AccessLevel`  

Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels).

`↳ service_perimeter`

`Google\Identity\AccessContextManager\V1\ServicePerimeter`  

Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview).

`↳ os_inventory`

`Google\Cloud\OsConfig\V1\Inventory`  

A representation of runtime OS Inventory information. See [this topic](https://cloud.google.com/compute/docs/instances/os-inventory-management) for more information.

`↳ related_assets`

`Google\Cloud\Asset\V1\RelatedAssets`  

DEPRECATED. This field only presents for the purpose of backward-compatibility. The server will never generate responses with this field. The related assets of the asset of one relationship type. One asset only represents one type of relationship.

`↳ related_asset`

`[Google\Cloud\Asset\V1\RelatedAsset](/php/docs/reference/cloud-asset/1.13.2/V1.RelatedAsset)`  

One related asset of the current asset.

`↳ ancestors`

`array`  

The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]`

### getUpdateTime

The last update timestamp of an asset. update\_time is updated when create/update/delete operation is performed.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

The last update timestamp of an asset. update\_time is updated when create/update/delete operation is performed.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getName

The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.

**Returns**

**Type**

**Description**

`string`

### setName

The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAssetType

The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

**Returns**

**Type**

**Description**

`string`

### setAssetType

The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

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

A representation of the resource.

**Returns**

**Type**

**Description**

`[Google\Cloud\Asset\V1\Resource](/php/docs/reference/cloud-asset/1.13.2/V1.Resource)|null`

### hasResource

### clearResource

### setResource

A representation of the resource.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Asset\V1\Resource](/php/docs/reference/cloud-asset/1.13.2/V1.Resource)`  

**Returns**

**Type**

**Description**

`$this`

### getIamPolicy

A representation of the IAM policy set on a Google Cloud resource.

There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information.

**Returns**

**Type**

**Description**

`[Google\Cloud\Iam\V1\Policy](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/Policy)|null`

### hasIamPolicy

### clearIamPolicy

### setIamPolicy

A representation of the IAM policy set on a Google Cloud resource.

There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Iam\V1\Policy](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/Policy)`  

**Returns**

**Type**

**Description**

`$this`

### getOrgPolicy

A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy).

There can be more than one organization policy with different constraints set on a given resource.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setOrgPolicy

A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy).

There can be more than one organization policy with different constraints set on a given resource.

**Parameter**

**Name**

**Description**

`var`

`array<Google\Cloud\OrgPolicy\V1\Policy>`  

**Returns**

**Type**

**Description**

`$this`

### getAccessPolicy

Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies).

**Returns**

**Type**

**Description**

`Google\Identity\AccessContextManager\V1\AccessPolicy|null`

### hasAccessPolicy

### setAccessPolicy

Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies).

**Parameter**

**Name**

**Description**

`var`

`Google\Identity\AccessContextManager\V1\AccessPolicy`  

**Returns**

**Type**

**Description**

`$this`

### getAccessLevel

Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels).

**Returns**

**Type**

**Description**

`Google\Identity\AccessContextManager\V1\AccessLevel|null`

### hasAccessLevel

### setAccessLevel

Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels).

**Parameter**

**Name**

**Description**

`var`

`Google\Identity\AccessContextManager\V1\AccessLevel`  

**Returns**

**Type**

**Description**

`$this`

### getServicePerimeter

Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview).

**Returns**

**Type**

**Description**

`Google\Identity\AccessContextManager\V1\ServicePerimeter|null`

### hasServicePerimeter

### setServicePerimeter

Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview).

**Parameter**

**Name**

**Description**

`var`

`Google\Identity\AccessContextManager\V1\ServicePerimeter`  

**Returns**

**Type**

**Description**

`$this`

### getOsInventory

A representation of runtime OS Inventory information. See [this topic](https://cloud.google.com/compute/docs/instances/os-inventory-management) for more information.

**Returns**

**Type**

**Description**

`Google\Cloud\OsConfig\V1\Inventory|null`

### hasOsInventory

### clearOsInventory

### setOsInventory

A representation of runtime OS Inventory information. See [this topic](https://cloud.google.com/compute/docs/instances/os-inventory-management) for more information.

**Parameter**

**Name**

**Description**

`var`

`Google\Cloud\OsConfig\V1\Inventory`  

**Returns**

**Type**

**Description**

`$this`

### getRelatedAssets

DEPRECATED. This field only presents for the purpose of backward-compatibility. The server will never generate responses with this field.

The related assets of the asset of one relationship type. One asset only represents one type of relationship.

**Returns**

**Type**

**Description**

`Google\Cloud\Asset\V1\RelatedAssets|null`

### hasRelatedAssets

### clearRelatedAssets

### setRelatedAssets

DEPRECATED. This field only presents for the purpose of backward-compatibility. The server will never generate responses with this field.

The related assets of the asset of one relationship type. One asset only represents one type of relationship.

**Parameter**

**Name**

**Description**

`var`

`Google\Cloud\Asset\V1\RelatedAssets`  

**Returns**

**Type**

**Description**

`$this`

### getRelatedAsset

One related asset of the current asset.

**Returns**

**Type**

**Description**

`[Google\Cloud\Asset\V1\RelatedAsset](/php/docs/reference/cloud-asset/1.13.2/V1.RelatedAsset)|null`

### hasRelatedAsset

### clearRelatedAsset

### setRelatedAsset

One related asset of the current asset.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Asset\V1\RelatedAsset](/php/docs/reference/cloud-asset/1.13.2/V1.RelatedAsset)`  

**Returns**

**Type**

**Description**

`$this`

### getAncestors

The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself.

Example: `["projects/123456789", "folders/5432", "organizations/1234"]`

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAncestors

The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself.

Example: `["projects/123456789", "folders/5432", "organizations/1234"]`

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getAccessContextPolicy

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
