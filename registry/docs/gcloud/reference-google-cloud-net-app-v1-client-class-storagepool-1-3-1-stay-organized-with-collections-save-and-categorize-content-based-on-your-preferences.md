-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Net App V1 Client - Class StoragePool (1.3.1) Stay organized with collections Save and categorize content based on your preferences.

1.10.2 (latest) 1.10.1 1.9.0 1.8.1 1.7.0 1.6.1 1.4.0 1.3.1 1.2.1 1.1.1 1.0.1 0.3.1 0.2.6 0.1.1

Reference documentation and code samples for the Google Cloud Net App V1 Client class StoragePool.

StoragePool is a container for volumes with a service level and capacity.

Volumes can be created in a pool of sufficient available capacity. StoragePool capacity is what you are billed for.

Generated from protobuf message `google.cloud.netapp.v1.StoragePool`

## Namespace

Google \\ Cloud \\ NetApp \\ V1

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

Identifier. Name of the storage pool

`↳ service_level`

`int`  

Required. Service level of the storage pool

`↳ capacity_gib`

`int|string`  

Required. Capacity in GIB of the pool

`↳ volume_capacity_gib`

`int|string`  

Output only. Allocated size of all volumes in GIB in the storage pool

`↳ volume_count`

`int`  

Output only. Volume count of the storage pool

`↳ state`

`int`  

Output only. State of the storage pool

`↳ state_details`

`string`  

Output only. State details of the storage pool

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Create time of the storage pool

`↳ description`

`string`  

Optional. Description of the storage pool

`↳ labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Optional. Labels as key value pairs

`↳ network`

`string`  

Required. VPC Network name. Format: projects/{project}/global/networks/{network}

`↳ active_directory`

`string`  

Optional. Specifies the Active Directory to be used for creating a SMB volume.

`↳ kms_config`

`string`  

Optional. Specifies the KMS config to be used for volume encryption.

`↳ ldap_enabled`

`bool`  

Optional. Flag indicating if the pool is NFS LDAP enabled or not.

`↳ psa_range`

`string`  

Optional. This field is not implemented. The values provided in this field are ignored.

`↳ encryption_type`

`int`  

Output only. Specifies the current pool encryption key source.

`↳ global_access_allowed`

`bool`  

Deprecated. Used to allow SO pool to access AD or DNS server from other regions.

`↳ allow_auto_tiering`

`bool`  

Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

`↳ replica_zone`

`string`  

Optional. Specifies the replica zone for regional storagePool.

`↳ zone`

`string`  

Optional. Specifies the active zone for regional storagePool.

### getName

Identifier. Name of the storage pool

**Returns**

**Type**

**Description**

`string`

### setName

Identifier. Name of the storage pool

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getServiceLevel

Required. Service level of the storage pool

**Returns**

**Type**

**Description**

`int`

### setServiceLevel

Required. Service level of the storage pool

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getCapacityGib

Required. Capacity in GIB of the pool

**Returns**

**Type**

**Description**

`int|string`

### setCapacityGib

Required. Capacity in GIB of the pool

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getVolumeCapacityGib

Output only. Allocated size of all volumes in GIB in the storage pool

**Returns**

**Type**

**Description**

`int|string`

### setVolumeCapacityGib

Output only. Allocated size of all volumes in GIB in the storage pool

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getVolumeCount

Output only. Volume count of the storage pool

**Returns**

**Type**

**Description**

`int`

### setVolumeCount

Output only. Volume count of the storage pool

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. State of the storage pool

**Returns**

**Type**

**Description**

`int`

### setState

Output only. State of the storage pool

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getStateDetails

Output only. State details of the storage pool

**Returns**

**Type**

**Description**

`string`

### setStateDetails

Output only. State details of the storage pool

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

Output only. Create time of the storage pool

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Create time of the storage pool

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

Optional. Description of the storage pool

**Returns**

**Type**

**Description**

`string`

### setDescription

Optional. Description of the storage pool

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

Optional. Labels as key value pairs

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

Optional. Labels as key value pairs

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getNetwork

Required. VPC Network name.

Format: projects/{project}/global/networks/{network}

**Returns**

**Type**

**Description**

`string`

### setNetwork

Required. VPC Network name.

Format: projects/{project}/global/networks/{network}

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getActiveDirectory

Optional. Specifies the Active Directory to be used for creating a SMB volume.

**Returns**

**Type**

**Description**

`string`

### setActiveDirectory

Optional. Specifies the Active Directory to be used for creating a SMB volume.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getKmsConfig

Optional. Specifies the KMS config to be used for volume encryption.

**Returns**

**Type**

**Description**

`string`

### setKmsConfig

Optional. Specifies the KMS config to be used for volume encryption.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLdapEnabled

Optional. Flag indicating if the pool is NFS LDAP enabled or not.

**Returns**

**Type**

**Description**

`bool`

### setLdapEnabled

Optional. Flag indicating if the pool is NFS LDAP enabled or not.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getPsaRange

Optional. This field is not implemented. The values provided in this field are ignored.

**Returns**

**Type**

**Description**

`string`

### setPsaRange

Optional. This field is not implemented. The values provided in this field are ignored.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEncryptionType

Output only. Specifies the current pool encryption key source.

**Returns**

**Type**

**Description**

`int`

### setEncryptionType

Output only. Specifies the current pool encryption key source.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getGlobalAccessAllowed

Deprecated. Used to allow SO pool to access AD or DNS server from other regions.

**Returns**

**Type**

**Description**

`bool`

### hasGlobalAccessAllowed

### clearGlobalAccessAllowed

### setGlobalAccessAllowed

Deprecated. Used to allow SO pool to access AD or DNS server from other regions.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getAllowAutoTiering

Optional. True if the storage pool supports Auto Tiering enabled volumes.

Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

**Returns**

**Type**

**Description**

`bool`

### setAllowAutoTiering

Optional. True if the storage pool supports Auto Tiering enabled volumes.

Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getReplicaZone

Optional. Specifies the replica zone for regional storagePool.

**Returns**

**Type**

**Description**

`string`

### setReplicaZone

Optional. Specifies the replica zone for regional storagePool.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getZone

Optional. Specifies the active zone for regional storagePool.

**Returns**

**Type**

**Description**

`string`

### setZone

Optional. Specifies the active zone for regional storagePool.

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
