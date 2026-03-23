-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud KMS Inventory V1 Client - Class ProtectedResource (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.0 1.2.3 1.1.1 1.0.4 0.4.5 0.3.1 0.2.3 0.1.2

Reference documentation and code samples for the Google Cloud KMS Inventory V1 Client class ProtectedResource.

Metadata about a resource protected by a Cloud KMS key.

Generated from protobuf message `google.cloud.kms.inventory.v1.ProtectedResource`

## Namespace

Google \\ Cloud \\ Kms \\ Inventory \\ V1

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

The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.

`↳ project`

`string`  

Format: `projects/{PROJECT_NUMBER}`.

`↳ project_id`

`string`  

The ID of the project that owns the resource.

`↳ cloud_product`

`string`  

The Cloud product that owns the resource. Example: `compute`

`↳ resource_type`

`string`  

Example: `compute.googleapis.com/Disk`

`↳ location`

`string`  

Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.

`↳ labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

A key-value pair of the resource's labels (v1) to their values.

`↳ crypto_key_version`

`string`  

The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto\_key\_versions.

`↳ crypto_key_versions`

`string[]`  

The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto\_key\_version.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.

### getName

The full resource name of the resource.

Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.

**Returns**

**Type**

**Description**

`string`

### setName

The full resource name of the resource.

Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.

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

Format: `projects/{PROJECT_NUMBER}`.

**Returns**

**Type**

**Description**

`string`

### setProject

Format: `projects/{PROJECT_NUMBER}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProjectId

The ID of the project that owns the resource.

**Returns**

**Type**

**Description**

`string`

### setProjectId

The ID of the project that owns the resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCloudProduct

The Cloud product that owns the resource.

Example: `compute`

**Returns**

**Type**

**Description**

`string`

### setCloudProduct

The Cloud product that owns the resource.

Example: `compute`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getResourceType

Example: `compute.googleapis.com/Disk`

**Returns**

**Type**

**Description**

`string`

### setResourceType

Example: `compute.googleapis.com/Disk`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLocation

Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.

**Returns**

**Type**

**Description**

`string`

### setLocation

Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLabels

A key-value pair of the resource's labels (v1) to their values.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

A key-value pair of the resource's labels (v1) to their values.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getCryptoKeyVersion

The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto\_key\_versions.

**Returns**

**Type**

**Description**

`string`

### setCryptoKeyVersion

The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto\_key\_versions.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCryptoKeyVersions

The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto\_key\_version.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<string>`

### setCryptoKeyVersions

The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto\_key\_version.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.

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

Last updated 2026-03-18 UTC.
