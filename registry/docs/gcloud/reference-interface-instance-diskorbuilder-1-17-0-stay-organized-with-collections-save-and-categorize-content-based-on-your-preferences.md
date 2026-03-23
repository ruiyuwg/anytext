-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Instance.DiskOrBuilder (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public static interface Instance.DiskOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAutoDelete()

```
public abstract boolean getAutoDelete()
```

Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).

`bool auto_delete = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The autoDelete.

### getBoot()

```
public abstract boolean getBoot()
```

Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.

`bool boot = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The boot.

### getDeviceName()

```
public abstract String getDeviceName()
```

Indicates a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.

If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks.

`string device_name = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The deviceName.

### getDeviceNameBytes()

```
public abstract ByteString getDeviceNameBytes()
```

Indicates a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.

If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks.

`string device_name = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for deviceName.

### getDiskSizeGb()

```
public abstract long getDiskSizeGb()
```

Indicates the size of the disk in base-2 GB.

`int64 disk_size_gb = 4;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The diskSizeGb.

### getGuestOsFeatures(int index)

```
public abstract Instance.Disk.GuestOsFeature getGuestOsFeatures(int index)
```

Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

`repeated .google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature guest_os_features = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Instance.Disk.GuestOsFeature](/java/docs/reference/google-cloud-notebooks/1.17.0/com.google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature)`

### getGuestOsFeaturesCount()

```
public abstract int getGuestOsFeaturesCount()
```

Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

`repeated .google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature guest_os_features = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getGuestOsFeaturesList()

```
public abstract List<Instance.Disk.GuestOsFeature> getGuestOsFeaturesList()
```

Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

`repeated .google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature guest_os_features = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[GuestOsFeature](/java/docs/reference/google-cloud-notebooks/1.17.0/com.google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature)>`

### getGuestOsFeaturesOrBuilder(int index)

```
public abstract Instance.Disk.GuestOsFeatureOrBuilder getGuestOsFeaturesOrBuilder(int index)
```

Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

`repeated .google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature guest_os_features = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Instance.Disk.GuestOsFeatureOrBuilder](/java/docs/reference/google-cloud-notebooks/1.17.0/com.google.cloud.notebooks.v1.Instance.Disk.GuestOsFeatureOrBuilder)`

### getGuestOsFeaturesOrBuilderList()

```
public abstract List<? extends Instance.Disk.GuestOsFeatureOrBuilder> getGuestOsFeaturesOrBuilderList()
```

Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.

`repeated .google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature guest_os_features = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.notebooks.v1.Instance.Disk.GuestOsFeatureOrBuilder>`

### getIndex()

```
public abstract long getIndex()
```

A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.

`int64 index = 6;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The index.

### getInterface()

```
public abstract String getInterface()
```

Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values:

-   `NVME`
-   `SCSI`

`string interface = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The interface.

### getInterfaceBytes()

```
public abstract ByteString getInterfaceBytes()
```

Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values:

-   `NVME`
-   `SCSI`

`string interface = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for interface.

### getKind()

```
public abstract String getKind()
```

Type of the resource. Always compute#attachedDisk for attached disks.

`string kind = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The kind.

### getKindBytes()

```
public abstract ByteString getKindBytes()
```

Type of the resource. Always compute#attachedDisk for attached disks.

`string kind = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for kind.

### getLicenses(int index)

```
public abstract String getLicenses(int index)
```

A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images.

`repeated string licenses = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The licenses at the given index.

### getLicensesBytes(int index)

```
public abstract ByteString getLicensesBytes(int index)
```

A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images.

`repeated string licenses = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the licenses at the given index.

### getLicensesCount()

```
public abstract int getLicensesCount()
```

A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images.

`repeated string licenses = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of licenses.

### getLicensesList()

```
public abstract List<String> getLicensesList()
```

A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images.

`repeated string licenses = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the licenses.

### getMode()

```
public abstract String getMode()
```

The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values:

-   `READ_ONLY`
-   `READ_WRITE`

`string mode = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The mode.

### getModeBytes()

```
public abstract ByteString getModeBytes()
```

The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values:

-   `READ_ONLY`
-   `READ_WRITE`

`string mode = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for mode.

### getSource()

```
public abstract String getSource()
```

Indicates a valid partial or full URL to an existing Persistent Disk resource.

`string source = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The source.

### getSourceBytes()

```
public abstract ByteString getSourceBytes()
```

Indicates a valid partial or full URL to an existing Persistent Disk resource.

`string source = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for source.

### getType()

```
public abstract String getType()
```

Indicates the type of the disk, either `SCRATCH` or `PERSISTENT`. Valid values:

-   `PERSISTENT`
-   `SCRATCH`

`string type = 12;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public abstract ByteString getTypeBytes()
```

Indicates the type of the disk, either `SCRATCH` or `PERSISTENT`. Valid values:

-   `PERSISTENT`
-   `SCRATCH`

`string type = 12;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
