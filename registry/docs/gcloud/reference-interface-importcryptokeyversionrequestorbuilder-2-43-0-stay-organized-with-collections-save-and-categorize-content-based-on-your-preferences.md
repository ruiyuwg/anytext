-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ImportCryptoKeyVersionRequestOrBuilder (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.84.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.8 2.5.3 2.4.4 2.3.1

```
public interface ImportCryptoKeyVersionRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAlgorithm()

```
public abstract CryptoKeyVersion.CryptoKeyVersionAlgorithm getAlgorithm()
```

Required. The algorithm of the key being imported. This does not need to match the version\_template of the CryptoKey this version imports into.

`.google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm algorithm = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[CryptoKeyVersion.CryptoKeyVersionAlgorithm](/java/docs/reference/google-cloud-kms/2.43.0/com.google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm)`

The algorithm.

### getAlgorithmValue()

```
public abstract int getAlgorithmValue()
```

Required. The algorithm of the key being imported. This does not need to match the version\_template of the CryptoKey this version imports into.

`.google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm algorithm = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for algorithm.

### getCryptoKeyVersion()

```
public abstract String getCryptoKeyVersion()
```

Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created.

If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via \[ImportCryptoKeyVersion\]\[\], and be in DESTROYED or IMPORT\_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.

`string crypto_key_version = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cryptoKeyVersion.

### getCryptoKeyVersionBytes()

```
public abstract ByteString getCryptoKeyVersionBytes()
```

Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created.

If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via \[ImportCryptoKeyVersion\]\[\], and be in DESTROYED or IMPORT\_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.

`string crypto_key_version = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cryptoKeyVersion.

### getImportJob()

```
public abstract String getImportJob()
```

Required. The name of the ImportJob that was used to wrap this key material.

`string import_job = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The importJob.

### getImportJobBytes()

```
public abstract ByteString getImportJobBytes()
```

Required. The name of the ImportJob that was used to wrap this key material.

`string import_job = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for importJob.

### getParent()

```
public abstract String getParent()
```

Required. The name of the CryptoKey to be imported into.

The create permission is only required on this key when creating a new CryptoKeyVersion.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The name of the CryptoKey to be imported into.

The create permission is only required on this key when creating a new CryptoKeyVersion.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getRsaAesWrappedKey()

```
public abstract ByteString getRsaAesWrappedKey()
```

Optional. This field has the same meaning as wrapped\_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.

`bytes rsa_aes_wrapped_key = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The rsaAesWrappedKey.

### getWrappedKey()

```
public abstract ByteString getWrappedKey()
```

Optional. The wrapped key material to import.

Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208).

When wrapping with import methods (RSA\_OAEP\_3072\_SHA1\_AES\_256 or RSA\_OAEP\_4096\_SHA1\_AES\_256 or RSA\_OAEP\_3072\_SHA256\_AES\_256 or RSA\_OAEP\_4096\_SHA256\_AES\_256),

this field must contain the concatenation of: <ol> <li>An ephemeral AES-256 wrapping key wrapped with the public\_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. </li> <li>The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). </li> </ol>

This format is the same as the format produced by PKCS#11 mechanism CKM\_RSA\_AES\_KEY\_WRAP.

When wrapping with import methods (RSA\_OAEP\_3072\_SHA256 or RSA\_OAEP\_4096\_SHA256),

this field must contain the formatted key to be imported, wrapped with the public\_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.

`bytes wrapped_key = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The wrappedKey.

### getWrappedKeyMaterialCase()

```
public abstract ImportCryptoKeyVersionRequest.WrappedKeyMaterialCase getWrappedKeyMaterialCase()
```

**Returns**

**Type**

**Description**

`[ImportCryptoKeyVersionRequest.WrappedKeyMaterialCase](/java/docs/reference/google-cloud-kms/2.43.0/com.google.cloud.kms.v1.ImportCryptoKeyVersionRequest.WrappedKeyMaterialCase)`

### hasRsaAesWrappedKey()

```
public abstract boolean hasRsaAesWrappedKey()
```

Optional. This field has the same meaning as wrapped\_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.

`bytes rsa_aes_wrapped_key = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rsaAesWrappedKey field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
