-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AwsVolumeTemplateOrBuilder (0.28.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public interface AwsVolumeTemplateOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getIops()

```
public abstract int getIops()
```

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

`int32 iops = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The iops.

### getKmsKeyArn()

```
public abstract String getKmsKeyArn()
```

Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes.

If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

`string kms_key_arn = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The kmsKeyArn.

### getKmsKeyArnBytes()

```
public abstract ByteString getKmsKeyArnBytes()
```

Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes.

If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

`string kms_key_arn = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for kmsKeyArn.

### getSizeGib()

```
public abstract int getSizeGib()
```

Optional. The size of the volume, in GiBs.

When unspecified, a default value is provided. See the specific reference in the parent resource.

`int32 size_gib = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The sizeGib.

### getVolumeType()

```
public abstract AwsVolumeTemplate.VolumeType getVolumeType()
```

Optional. Type of the EBS volume.

When unspecified, it defaults to GP2 volume.

`.google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType volume_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsVolumeTemplate.VolumeType](/java/docs/reference/google-cloud-gke-multi-cloud/0.28.0/com.google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType)`

The volumeType.

### getVolumeTypeValue()

```
public abstract int getVolumeTypeValue()
```

Optional. Type of the EBS volume.

When unspecified, it defaults to GP2 volume.

`.google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType volume_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for volumeType.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
