-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Notebooks V2 Client - Class DataDisk (0.7.5) Stay organized with collections Save and categorize content based on your preferences.

1.1.3 (latest) 1.1.2 1.0.5 0.7.5 0.6.2 0.5.0 0.4.1 0.3.6

Reference documentation and code samples for the Google Cloud Notebooks V2 Client class DataDisk.

An instance-attached disk resource.

Generated from protobuf message `google.cloud.notebooks.v2.DataDisk`

## Namespace

Google \\ Cloud \\ Notebooks \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ disk_size_gb`

`int|string`  

Optional. The size of the disk in GB attached to this VM instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to 100.

`↳ disk_type`

`int`  

Optional. Input only. Indicates the type of the disk.

`↳ disk_encryption`

`int`  

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.

`↳ kms_key`

`string`  

Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk\_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys.

### getDiskSizeGb

Optional. The size of the disk in GB attached to this VM instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to 100.

**Returns**

**Type**

**Description**

`int|string`

### setDiskSizeGb

Optional. The size of the disk in GB attached to this VM instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to 100.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getDiskType

Optional. Input only. Indicates the type of the disk.

**Returns**

**Type**

**Description**

`int`

### setDiskType

Optional. Input only. Indicates the type of the disk.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getDiskEncryption

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.

**Returns**

**Type**

**Description**

`int`

### setDiskEncryption

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getKmsKey

Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk\_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys.

**Returns**

**Type**

**Description**

`string`

### setKmsKey

Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk\_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys.

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
