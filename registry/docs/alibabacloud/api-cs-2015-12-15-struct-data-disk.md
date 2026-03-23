Parameter

Type

Description

Example

object

The configurations of the node data disk.

category

string

The category of data disk. Valid values:

-   `cloud`: basic disk.
-   `cloud_efficiency`: ultra disk
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: Enterprise ESSD (ESSD).
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.
-   `elastic_ephemeral_disk_premium`: premium elastic ephemeral disk.
-   `elastic_ephemeral_disk_standard`: standard elastic ephemeral disk.

Default value: `cloud_efficiency`.

cloud\_ssd

size

long

The size of the data disk. Unit: GiB.

Valid values: 40 to 32768.

Default value: `120`.

40

encrypted

string

Specifies whether to encrypt the data disk. Valid values:

-   `true`: encrypts the data disk.
-   `false`: does not encrypt the data disk.

Default value: `false`.

true

kms\_key\_id

string

The ID of the Key Management Service (KMS) key that is used to encrypt the data disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

auto\_snapshot\_policy\_id

string

The ID of the automatic snapshot policy. The system performs automatic backup for a cloud disk based on the specified automatic snapshot policy.

By default, this parameter is empty, which indicates that automatic backup is disabled.

sp-2zej1nogjvovnz4z\*\*\*\*

performance\_level

string

The performance level (PL) of the data disk. This parameter takes effect only for an ESSD. This parameter is related to the disk size. For more information, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL1

provisioned\_iops

long

The preset IOPS of the data disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

This parameter is available only if `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

1000

bursting\_enabled

boolean

Specifies whether to enable the burst feature for the data disk. Valid values:

-   `true`: enables the burst feature.
-   `false`: disables the burst feature for the data disk.

This parameter is available only if `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

true

auto\_format

boolean

Specifies whether to automatically mount the data disk.

true

file\_system

string

The file system that is mounted. This parameter takes effect only if auto\_format is set to true. Valid values: ext4 and xfs.

ext4

mount\_target

string

The path to which the data disk is mounted. You must specify a valid path.

/mnt/path1

disk\_name

string

The data disk name. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

DataDiskName

device

string

The mount target of the data disk. If you do not specify this parameter, the system automatically assigns a mount target when you create an Elastic Compute Service (ECS) instance. Valid values: /dev/xvdb to /dev/xvdz.

/dev/xvdb

snapshot\_id

string

The ID of the snapshot that you want to use to create the data disk. If this parameter is specified, the specified size of the data disk is ignored. The size of the disk equals the size of the specified snapshot. If the snapshot was created on or before July 15, 2013, the API request is rejected and the InvalidSnapshot.TooOld message is returned.

s-280s7\*\*\*\*
