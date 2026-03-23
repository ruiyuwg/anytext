-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Asset V1 Client - Class SearchAllResourcesRequest (2.3.3) Stay organized with collections Save and categorize content based on your preferences.

2.3.3 (latest) 2.3.2 2.2.3 2.1.3 2.0.1 1.16.4 1.14.1 1.13.2 1.12.2 1.11.3 1.10.2 1.9.2

Reference documentation and code samples for the Google Cloud Asset V1 Client class SearchAllResourcesRequest.

Search all resources request.

Generated from protobuf message `google.cloud.asset.v1.SearchAllResourcesRequest`

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

`↳ scope`

`string`  

Required. A scope can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope. The allowed values are: \* \* projects/{PROJECT\_ID} (e.g., "projects/foo-bar") \* \* projects/{PROJECT\_NUMBER} (e.g., "projects/12345678") \* \* folders/{FOLDER\_NUMBER} (e.g., "folders/1234567") \* \* organizations/{ORGANIZATION\_NUMBER} (e.g., "organizations/123456")

`↳ query`

`string`  

Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more information. If not specified or empty, it will search all the resources within the specified `scope`. Examples: \* \* `name:Important` to find Google Cloud resources whose name contains `Important` as a word. \* \* `name=Important` to find the Google Cloud resource whose name is exactly `Important`. \* \* `displayName:Impor*` to find Google Cloud resources whose display name contains `Impor` as a prefix of any word in the field. \* \* `location:us-west*` to find Google Cloud resources whose location contains both `us` and `west` as prefixes. \* \* `labels:prod` to find Google Cloud resources whose labels contain `prod` as a key or value. \* \* `labels.env:prod` to find Google Cloud resources that have a label `env` and its value is `prod`. \* \* `labels.env:*` to find Google Cloud resources that have a label `env`. \* \* `tagKeys:env` to find Google Cloud resources that have directly attached tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`. \* \* `tagValues:prod*` to find Google Cloud resources that have directly attached tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`. \* \* `tagValueIds=tagValues/123` to find Google Cloud resources that have directly attached tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`. \* \* `effectiveTagKeys:env` to find Google Cloud resources that have directly attached or inherited tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`. \* \* `effectiveTagValues:prod*` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`. \* \* `effectiveTagValueIds=tagValues/123` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`. \* \* `kmsKey:key` to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains `key` as a word. This field is deprecated. Use the `kmsKeys` field to retrieve Cloud KMS key information. \* \* `kmsKeys:key` to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word `key`. \* \* `relationships:instance-group-1` to find Google Cloud resources that have relationships with `instance-group-1` in the related resource name. \* \* `relationships:INSTANCE_TO_INSTANCEGROUP` to find Compute Engine instances that have relationships of type `INSTANCE_TO_INSTANCEGROUP`. \* \* `relationships.INSTANCE_TO_INSTANCEGROUP:instance-group-1` to find Compute Engine instances that have relationships with `instance-group-1` in the Compute Engine instance group resource name, for relationship type `INSTANCE_TO_INSTANCEGROUP`. \* \* `sccSecurityMarks.key=value` to find Cloud resources that are attached with security marks whose key is `key` and value is `value`. \* \* `sccSecurityMarks.key:*` to find Cloud resources that are attached with security marks whose key is `key`. \* \* `state:ACTIVE` to find Google Cloud resources whose state contains `ACTIVE` as a word. \* \* `NOT state:ACTIVE` to find Google Cloud resources whose state doesn't contain `ACTIVE` as a word. \* \* `createTime<1609459200` to find Google Cloud resources that were created before `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds. \* \* `updateTime>1609459200` to find Google Cloud resources that were updated after `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds. \* \* `Important` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields. \* \* `Impor*` to find Google Cloud resources that contain `Impor` as a prefix of any word in any of the searchable fields. \* \* `Important location:(us-west1 OR global)` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields and are also located in the `us-west1` region or the `global` location.

`↳ asset_types`

`string[]`  

Optional. A list of asset types that this request searches for. If empty, it will search all the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types). Regular expressions are also supported. For example: \* \* "compute.googleapis.com._" snapshots resources whose asset type starts with "compute.googleapis.com". \* \* "._Instance" snapshots resources whose asset type ends with "Instance". \* \* "._Instance._" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID\_ARGUMENT error will be returned.

`↳ page_size`

`int`  

Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero or a negative value, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.

`↳ page_token`

`string`  

Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.

`↳ order_by`

`string`  

Optional. A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add " DESC" after the field name to indicate descending order. Redundant space characters are ignored. Example: "location DESC, name". Only the following fields in the response are sortable: \* \* name \* \* assetType \* \* project \* \* displayName \* \* description \* \* location \* \* createTime \* \* updateTime \* \* state \* \* parentFullResourceName \* \* parentAssetType

`↳ read_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Optional. A comma-separated list of fields that you want returned in the results. The following fields are returned by default if not specified: \* \* `name` \* \* `assetType` \* \* `project` \* \* `folders` \* \* `organization` \* \* `displayName` \* \* `description` \* \* `location` \* \* `labels` \* \* `tags` \* \* `effectiveTags` \* \* `networkTags` \* \* `kmsKeys` \* \* `createTime` \* \* `updateTime` \* \* `state` \* \* `additionalAttributes` \* \* `parentFullResourceName` \* \* `parentAssetType` Some fields of large size, such as `versionedResources`, `attachedResources`, `effectiveTags` etc., are not returned by default, but you can specify them in the `read_mask` parameter if you want to include them. If `"*"` is specified, all [available fields](https://cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources#resourcesearchresult) are returned. Examples: `"name,location"`, `"name,versionedResources"`, `"*"`. Any invalid field path will trigger INVALID\_ARGUMENT error.

### getScope

Required. A scope can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope.

The allowed values are:

-   projects/{PROJECT\_ID} (e.g., "projects/foo-bar")
-   projects/{PROJECT\_NUMBER} (e.g., "projects/12345678")
-   folders/{FOLDER\_NUMBER} (e.g., "folders/1234567")
-   organizations/{ORGANIZATION\_NUMBER} (e.g., "organizations/123456")

**Returns**

**Type**

**Description**

`string`

### setScope

Required. A scope can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope.

The allowed values are:

-   projects/{PROJECT\_ID} (e.g., "projects/foo-bar")
-   projects/{PROJECT\_NUMBER} (e.g., "projects/12345678")
-   folders/{FOLDER\_NUMBER} (e.g., "folders/1234567")
-   organizations/{ORGANIZATION\_NUMBER} (e.g., "organizations/123456")

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getQuery

Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more information. If not specified or empty, it will search all the resources within the specified `scope`.

Examples:

-   `name:Important` to find Google Cloud resources whose name contains `Important` as a word.
-   `name=Important` to find the Google Cloud resource whose name is exactly `Important`.
-   `displayName:Impor*` to find Google Cloud resources whose display name contains `Impor` as a prefix of any word in the field.
-   `location:us-west*` to find Google Cloud resources whose location contains both `us` and `west` as prefixes.
-   `labels:prod` to find Google Cloud resources whose labels contain `prod` as a key or value.
-   `labels.env:prod` to find Google Cloud resources that have a label `env` and its value is `prod`.
-   `labels.env:*` to find Google Cloud resources that have a label `env`.
-   `tagKeys:env` to find Google Cloud resources that have directly attached tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`.
-   `tagValues:prod*` to find Google Cloud resources that have directly attached tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`.
-   `tagValueIds=tagValues/123` to find Google Cloud resources that have directly attached tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`.
-   `effectiveTagKeys:env` to find Google Cloud resources that have directly attached or inherited tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`.
-   `effectiveTagValues:prod*` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`.
-   `effectiveTagValueIds=tagValues/123` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`.
-   `kmsKey:key` to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains `key` as a word. This field is deprecated. Use the `kmsKeys` field to retrieve Cloud KMS key information.
-   `kmsKeys:key` to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word `key`.
-   `relationships:instance-group-1` to find Google Cloud resources that have relationships with `instance-group-1` in the related resource name.
-   `relationships:INSTANCE_TO_INSTANCEGROUP` to find Compute Engine instances that have relationships of type `INSTANCE_TO_INSTANCEGROUP`.
-   `relationships.INSTANCE_TO_INSTANCEGROUP:instance-group-1` to find Compute Engine instances that have relationships with `instance-group-1` in the Compute Engine instance group resource name, for relationship type `INSTANCE_TO_INSTANCEGROUP`.
-   `sccSecurityMarks.key=value` to find Cloud resources that are attached with security marks whose key is `key` and value is `value`.
-   `sccSecurityMarks.key:*` to find Cloud resources that are attached with security marks whose key is `key`.
-   `state:ACTIVE` to find Google Cloud resources whose state contains `ACTIVE` as a word.
-   `NOT state:ACTIVE` to find Google Cloud resources whose state doesn't contain `ACTIVE` as a word.
-   `createTime<1609459200` to find Google Cloud resources that were created before `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds.
-   `updateTime>1609459200` to find Google Cloud resources that were updated after `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds.
-   `Important` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields.
-   `Impor*` to find Google Cloud resources that contain `Impor` as a prefix of any word in any of the searchable fields.
-   `Important location:(us-west1 OR global)` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields and are also located in the `us-west1` region or the `global` location.

**Returns**

**Type**

**Description**

`string`

### setQuery

Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more information. If not specified or empty, it will search all the resources within the specified `scope`.

Examples:

-   `name:Important` to find Google Cloud resources whose name contains `Important` as a word.
-   `name=Important` to find the Google Cloud resource whose name is exactly `Important`.
-   `displayName:Impor*` to find Google Cloud resources whose display name contains `Impor` as a prefix of any word in the field.
-   `location:us-west*` to find Google Cloud resources whose location contains both `us` and `west` as prefixes.
-   `labels:prod` to find Google Cloud resources whose labels contain `prod` as a key or value.
-   `labels.env:prod` to find Google Cloud resources that have a label `env` and its value is `prod`.
-   `labels.env:*` to find Google Cloud resources that have a label `env`.
-   `tagKeys:env` to find Google Cloud resources that have directly attached tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`.
-   `tagValues:prod*` to find Google Cloud resources that have directly attached tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`.
-   `tagValueIds=tagValues/123` to find Google Cloud resources that have directly attached tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`.
-   `effectiveTagKeys:env` to find Google Cloud resources that have directly attached or inherited tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`.
-   `effectiveTagValues:prod*` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`.
-   `effectiveTagValueIds=tagValues/123` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`.
-   `kmsKey:key` to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains `key` as a word. This field is deprecated. Use the `kmsKeys` field to retrieve Cloud KMS key information.
-   `kmsKeys:key` to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word `key`.
-   `relationships:instance-group-1` to find Google Cloud resources that have relationships with `instance-group-1` in the related resource name.
-   `relationships:INSTANCE_TO_INSTANCEGROUP` to find Compute Engine instances that have relationships of type `INSTANCE_TO_INSTANCEGROUP`.
-   `relationships.INSTANCE_TO_INSTANCEGROUP:instance-group-1` to find Compute Engine instances that have relationships with `instance-group-1` in the Compute Engine instance group resource name, for relationship type `INSTANCE_TO_INSTANCEGROUP`.
-   `sccSecurityMarks.key=value` to find Cloud resources that are attached with security marks whose key is `key` and value is `value`.
-   `sccSecurityMarks.key:*` to find Cloud resources that are attached with security marks whose key is `key`.
-   `state:ACTIVE` to find Google Cloud resources whose state contains `ACTIVE` as a word.
-   `NOT state:ACTIVE` to find Google Cloud resources whose state doesn't contain `ACTIVE` as a word.
-   `createTime<1609459200` to find Google Cloud resources that were created before `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds.
-   `updateTime>1609459200` to find Google Cloud resources that were updated after `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds.
-   `Important` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields.
-   `Impor*` to find Google Cloud resources that contain `Impor` as a prefix of any word in any of the searchable fields.
-   `Important location:(us-west1 OR global)` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields and are also located in the `us-west1` region or the `global` location.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAssetTypes

Optional. A list of asset types that this request searches for. If empty, it will search all the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types).

Regular expressions are also supported. For example:

-   "compute.googleapis.com.\*" snapshots resources whose asset type starts with "compute.googleapis.com".
-   ".\*Instance" snapshots resources whose asset type ends with "Instance".
-   "._Instance._" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID\_ARGUMENT error will be returned.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<string>`

### setAssetTypes

Optional. A list of asset types that this request searches for. If empty, it will search all the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types).

Regular expressions are also supported. For example:

-   "compute.googleapis.com.\*" snapshots resources whose asset type starts with "compute.googleapis.com".
-   ".\*Instance" snapshots resources whose asset type ends with "Instance".
-   "._Instance._" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID\_ARGUMENT error will be returned.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero or a negative value, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero or a negative value, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPageToken

Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOrderBy

Optional. A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add " DESC" after the field name to indicate descending order. Redundant space characters are ignored.

Example: "location DESC, name". Only the following fields in the response are sortable:

-   name
-   assetType
-   project
-   displayName
-   description
-   location
-   createTime
-   updateTime
-   state
-   parentFullResourceName
-   parentAssetType

**Returns**

**Type**

**Description**

`string`

### setOrderBy

Optional. A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add " DESC" after the field name to indicate descending order. Redundant space characters are ignored.

Example: "location DESC, name". Only the following fields in the response are sortable:

-   name
-   assetType
-   project
-   displayName
-   description
-   location
-   createTime
-   updateTime
-   state
-   parentFullResourceName
-   parentAssetType

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getReadMask

Optional. A comma-separated list of fields that you want returned in the results. The following fields are returned by default if not specified:

-   `name`
-   `assetType`
-   `project`
-   `folders`
-   `organization`
-   `displayName`
-   `description`
-   `location`
-   `labels`
-   `tags`
-   `effectiveTags`
-   `networkTags`
-   `kmsKeys`
-   `createTime`
-   `updateTime`
-   `state`
-   `additionalAttributes`
-   `parentFullResourceName`
-   `parentAssetType` Some fields of large size, such as `versionedResources`, `attachedResources`, `effectiveTags` etc., are not returned by default, but you can specify them in the `read_mask` parameter if you want to include them. If `"*"` is specified, all [available fields](https://cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources#resourcesearchresult) are returned.

Examples: `"name,location"`, `"name,versionedResources"`, `"*"`. Any invalid field path will trigger INVALID\_ARGUMENT error.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasReadMask

### clearReadMask

### setReadMask

Optional. A comma-separated list of fields that you want returned in the results. The following fields are returned by default if not specified:

-   `name`
-   `assetType`
-   `project`
-   `folders`
-   `organization`
-   `displayName`
-   `description`
-   `location`
-   `labels`
-   `tags`
-   `effectiveTags`
-   `networkTags`
-   `kmsKeys`
-   `createTime`
-   `updateTime`
-   `state`
-   `additionalAttributes`
-   `parentFullResourceName`
-   `parentAssetType` Some fields of large size, such as `versionedResources`, `attachedResources`, `effectiveTags` etc., are not returned by default, but you can specify them in the `read_mask` parameter if you want to include them. If `"*"` is specified, all [available fields](https://cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources#resourcesearchresult) are returned.

Examples: `"name,location"`, `"name,versionedResources"`, `"*"`. Any invalid field path will trigger INVALID\_ARGUMENT error.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`scope`

`string`  

Required. A scope can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope.

The allowed values are:

-   -   projects/{PROJECT\_ID} (e.g., "projects/foo-bar")
-   -   projects/{PROJECT\_NUMBER} (e.g., "projects/12345678")
-   -   folders/{FOLDER\_NUMBER} (e.g., "folders/1234567")
-   -   organizations/{ORGANIZATION\_NUMBER} (e.g., "organizations/123456")

`query`

`string`  

Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more information. If not specified or empty, it will search all the resources within the specified `scope`.

Examples:

-   -   `name:Important` to find Google Cloud resources whose name contains `Important` as a word.
-   -   `name=Important` to find the Google Cloud resource whose name is exactly `Important`.
-   -   `displayName:Impor*` to find Google Cloud resources whose display name contains `Impor` as a prefix of any word in the field.
-   -   `location:us-west*` to find Google Cloud resources whose location contains both `us` and `west` as prefixes.
-   -   `labels:prod` to find Google Cloud resources whose labels contain `prod` as a key or value.
-   -   `labels.env:prod` to find Google Cloud resources that have a label `env` and its value is `prod`.
-   -   `labels.env:*` to find Google Cloud resources that have a label `env`.
-   -   `tagKeys:env` to find Google Cloud resources that have directly attached tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`.
-   -   `tagValues:prod*` to find Google Cloud resources that have directly attached tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`.
-   -   `tagValueIds=tagValues/123` to find Google Cloud resources that have directly attached tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`.
-   -   `effectiveTagKeys:env` to find Google Cloud resources that have directly attached or inherited tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`.
-   -   `effectiveTagValues:prod*` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`.
-   -   `effectiveTagValueIds=tagValues/123` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`.
-   -   `kmsKey:key` to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains `key` as a word. This field is deprecated. Use the `kmsKeys` field to retrieve Cloud KMS key information.
-   -   `kmsKeys:key` to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word `key`.
-   -   `relationships:instance-group-1` to find Google Cloud resources that have relationships with `instance-group-1` in the related resource name.
-   -   `relationships:INSTANCE_TO_INSTANCEGROUP` to find Compute Engine instances that have relationships of type `INSTANCE_TO_INSTANCEGROUP`.
-   -   `relationships.INSTANCE_TO_INSTANCEGROUP:instance-group-1` to find Compute Engine instances that have relationships with `instance-group-1` in the Compute Engine instance group resource name, for relationship type `INSTANCE_TO_INSTANCEGROUP`.
-   -   `sccSecurityMarks.key=value` to find Cloud resources that are attached with security marks whose key is `key` and value is `value`.
-   -   `sccSecurityMarks.key:*` to find Cloud resources that are attached with security marks whose key is `key`.
-   -   `state:ACTIVE` to find Google Cloud resources whose state contains `ACTIVE` as a word.
-   -   `NOT state:ACTIVE` to find Google Cloud resources whose state doesn't contain `ACTIVE` as a word.
-   -   `createTime<1609459200` to find Google Cloud resources that were created before `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds.
-   -   `updateTime>1609459200` to find Google Cloud resources that were updated after `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds.
-   -   `Important` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields.
-   -   `Impor*` to find Google Cloud resources that contain `Impor` as a prefix of any word in any of the searchable fields.
-   -   `Important location:(us-west1 OR global)` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields and are also located in the `us-west1` region or the `global` location.

`assetTypes`

`string[]`  

Optional. A list of asset types that this request searches for. If empty, it will search all the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types).

Regular expressions are also supported. For example:

-   -   "compute.googleapis.com.\*" snapshots resources whose asset type starts with "compute.googleapis.com".
-   -   ".\*Instance" snapshots resources whose asset type ends with "Instance".
-   -   "._Instance._" snapshots resources whose asset type contains "Instance".

See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID\_ARGUMENT error will be returned.

**Returns**

**Type**

**Description**

`[SearchAllResourcesRequest](/php/docs/reference/cloud-asset/latest/V1.SearchAllResourcesRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
