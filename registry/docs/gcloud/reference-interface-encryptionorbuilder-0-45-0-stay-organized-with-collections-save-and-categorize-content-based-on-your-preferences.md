-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EncryptionOrBuilder (0.45.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public interface EncryptionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAes128()

```
public abstract Encryption.Aes128Encryption getAes128()
```

Configuration for HLS AES-128 encryption.

`.google.cloud.video.livestream.v1.Encryption.Aes128Encryption aes128 = 4;`

**Returns**

**Type**

**Description**

`[Encryption.Aes128Encryption](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.Aes128Encryption)`

The aes128.

### getAes128OrBuilder()

```
public abstract Encryption.Aes128EncryptionOrBuilder getAes128OrBuilder()
```

Configuration for HLS AES-128 encryption.

`.google.cloud.video.livestream.v1.Encryption.Aes128Encryption aes128 = 4;`

**Returns**

**Type**

**Description**

`[Encryption.Aes128EncryptionOrBuilder](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.Aes128EncryptionOrBuilder)`

### getDrmSystems()

```
public abstract Encryption.DrmSystems getDrmSystems()
```

Required. Configuration for DRM systems.

`.google.cloud.video.livestream.v1.Encryption.DrmSystems drm_systems = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Encryption.DrmSystems](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.DrmSystems)`

The drmSystems.

### getDrmSystemsOrBuilder()

```
public abstract Encryption.DrmSystemsOrBuilder getDrmSystemsOrBuilder()
```

Required. Configuration for DRM systems.

`.google.cloud.video.livestream.v1.Encryption.DrmSystems drm_systems = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Encryption.DrmSystemsOrBuilder](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.DrmSystemsOrBuilder)`

### getEncryptionModeCase()

```
public abstract Encryption.EncryptionModeCase getEncryptionModeCase()
```

**Returns**

**Type**

**Description**

`[Encryption.EncryptionModeCase](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.EncryptionModeCase)`

### getId()

```
public abstract String getId()
```

Required. Identifier for this set of encryption options.

`string id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The id.

### getIdBytes()

```
public abstract ByteString getIdBytes()
```

Required. Identifier for this set of encryption options.

`string id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for id.

### getMpegCenc()

```
public abstract Encryption.MpegCommonEncryption getMpegCenc()
```

Configuration for MPEG-Dash Common Encryption (MPEG-CENC).

`.google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption mpeg_cenc = 6;`

**Returns**

**Type**

**Description**

`[Encryption.MpegCommonEncryption](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption)`

The mpegCenc.

### getMpegCencOrBuilder()

```
public abstract Encryption.MpegCommonEncryptionOrBuilder getMpegCencOrBuilder()
```

Configuration for MPEG-Dash Common Encryption (MPEG-CENC).

`.google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption mpeg_cenc = 6;`

**Returns**

**Type**

**Description**

`[Encryption.MpegCommonEncryptionOrBuilder](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.MpegCommonEncryptionOrBuilder)`

### getSampleAes()

```
public abstract Encryption.SampleAesEncryption getSampleAes()
```

Configuration for HLS SAMPLE-AES encryption.

`.google.cloud.video.livestream.v1.Encryption.SampleAesEncryption sample_aes = 5;`

**Returns**

**Type**

**Description**

`[Encryption.SampleAesEncryption](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.SampleAesEncryption)`

The sampleAes.

### getSampleAesOrBuilder()

```
public abstract Encryption.SampleAesEncryptionOrBuilder getSampleAesOrBuilder()
```

Configuration for HLS SAMPLE-AES encryption.

`.google.cloud.video.livestream.v1.Encryption.SampleAesEncryption sample_aes = 5;`

**Returns**

**Type**

**Description**

`[Encryption.SampleAesEncryptionOrBuilder](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.SampleAesEncryptionOrBuilder)`

### getSecretManagerKeySource()

```
public abstract Encryption.SecretManagerSource getSecretManagerKeySource()
```

For keys stored in Google Secret Manager.

`.google.cloud.video.livestream.v1.Encryption.SecretManagerSource secret_manager_key_source = 7;`

**Returns**

**Type**

**Description**

`[Encryption.SecretManagerSource](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.SecretManagerSource)`

The secretManagerKeySource.

### getSecretManagerKeySourceOrBuilder()

```
public abstract Encryption.SecretManagerSourceOrBuilder getSecretManagerKeySourceOrBuilder()
```

For keys stored in Google Secret Manager.

`.google.cloud.video.livestream.v1.Encryption.SecretManagerSource secret_manager_key_source = 7;`

**Returns**

**Type**

**Description**

`[Encryption.SecretManagerSourceOrBuilder](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.SecretManagerSourceOrBuilder)`

### getSecretSourceCase()

```
public abstract Encryption.SecretSourceCase getSecretSourceCase()
```

**Returns**

**Type**

**Description**

`[Encryption.SecretSourceCase](/java/docs/reference/google-cloud-live-stream/0.45.0/com.google.cloud.video.livestream.v1.Encryption.SecretSourceCase)`

### hasAes128()

```
public abstract boolean hasAes128()
```

Configuration for HLS AES-128 encryption.

`.google.cloud.video.livestream.v1.Encryption.Aes128Encryption aes128 = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the aes128 field is set.

### hasDrmSystems()

```
public abstract boolean hasDrmSystems()
```

Required. Configuration for DRM systems.

`.google.cloud.video.livestream.v1.Encryption.DrmSystems drm_systems = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the drmSystems field is set.

### hasMpegCenc()

```
public abstract boolean hasMpegCenc()
```

Configuration for MPEG-Dash Common Encryption (MPEG-CENC).

`.google.cloud.video.livestream.v1.Encryption.MpegCommonEncryption mpeg_cenc = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the mpegCenc field is set.

### hasSampleAes()

```
public abstract boolean hasSampleAes()
```

Configuration for HLS SAMPLE-AES encryption.

`.google.cloud.video.livestream.v1.Encryption.SampleAesEncryption sample_aes = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sampleAes field is set.

### hasSecretManagerKeySource()

```
public abstract boolean hasSecretManagerKeySource()
```

For keys stored in Google Secret Manager.

`.google.cloud.video.livestream.v1.Encryption.SecretManagerSource secret_manager_key_source = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the secretManagerKeySource field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
