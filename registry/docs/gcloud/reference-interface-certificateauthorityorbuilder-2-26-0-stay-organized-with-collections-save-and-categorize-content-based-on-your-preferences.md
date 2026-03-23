-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CertificateAuthorityOrBuilder (2.26.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public interface CertificateAuthorityOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. Labels with user-defined metadata.

`map<string, string> labels = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAccessUrls()

```
public abstract CertificateAuthority.AccessUrls getAccessUrls()
```

Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls access_urls = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.AccessUrls](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls)`

The accessUrls.

### getAccessUrlsOrBuilder()

```
public abstract CertificateAuthority.AccessUrlsOrBuilder getAccessUrlsOrBuilder()
```

Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls access_urls = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.AccessUrlsOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrlsOrBuilder)`

### getCaCertificateDescriptions(int index)

```
public abstract CertificateDescription getCaCertificateDescriptions(int index)
```

Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.

`repeated .google.cloud.security.privateca.v1beta1.CertificateDescription ca_certificate_descriptions = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CertificateDescription](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateDescription)`

### getCaCertificateDescriptionsCount()

```
public abstract int getCaCertificateDescriptionsCount()
```

Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.

`repeated .google.cloud.security.privateca.v1beta1.CertificateDescription ca_certificate_descriptions = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCaCertificateDescriptionsList()

```
public abstract List<CertificateDescription> getCaCertificateDescriptionsList()
```

Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.

`repeated .google.cloud.security.privateca.v1beta1.CertificateDescription ca_certificate_descriptions = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CertificateDescription](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateDescription)>`

### getCaCertificateDescriptionsOrBuilder(int index)

```
public abstract CertificateDescriptionOrBuilder getCaCertificateDescriptionsOrBuilder(int index)
```

Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.

`repeated .google.cloud.security.privateca.v1beta1.CertificateDescription ca_certificate_descriptions = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CertificateDescriptionOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateDescriptionOrBuilder)`

### getCaCertificateDescriptionsOrBuilderList()

```
public abstract List<? extends CertificateDescriptionOrBuilder> getCaCertificateDescriptionsOrBuilderList()
```

Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.

`repeated .google.cloud.security.privateca.v1beta1.CertificateDescription ca_certificate_descriptions = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.security.privateca.v1beta1.CertificateDescriptionOrBuilder>`

### getCertificatePolicy()

```
public abstract CertificateAuthority.CertificateAuthorityPolicy getCertificatePolicy()
```

Optional. The CertificateAuthorityPolicy to enforce when issuing Certificates from this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy certificate_policy = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

The certificatePolicy.

### getCertificatePolicyOrBuilder()

```
public abstract CertificateAuthority.CertificateAuthorityPolicyOrBuilder getCertificatePolicyOrBuilder()
```

Optional. The CertificateAuthorityPolicy to enforce when issuing Certificates from this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy certificate_policy = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicyOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicyOrBuilder)`

### getConfig()

```
public abstract CertificateConfig getConfig()
```

Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.

`.google.cloud.security.privateca.v1beta1.CertificateConfig config = 4 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[CertificateConfig](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateConfig)`

The config.

### getConfigOrBuilder()

```
public abstract CertificateConfigOrBuilder getConfigOrBuilder()
```

Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.

`.google.cloud.security.privateca.v1beta1.CertificateConfig config = 4 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[CertificateConfigOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateConfigOrBuilder)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The time at which this CertificateAuthority was created.

`.google.protobuf.Timestamp create_time = 15 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The time at which this CertificateAuthority was created.

`.google.protobuf.Timestamp create_time = 15 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDeleteTime()

```
public abstract Timestamp getDeleteTime()
```

Output only. The time at which this CertificateAuthority will be deleted, if scheduled for deletion.

`.google.protobuf.Timestamp delete_time = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The deleteTime.

### getDeleteTimeOrBuilder()

```
public abstract TimestampOrBuilder getDeleteTimeOrBuilder()
```

Output only. The time at which this CertificateAuthority will be deleted, if scheduled for deletion.

`.google.protobuf.Timestamp delete_time = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getGcsBucket()

```
public abstract String getGcsBucket()
```

Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.

`string gcs_bucket = 13 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The gcsBucket.

### getGcsBucketBytes()

```
public abstract ByteString getGcsBucketBytes()
```

Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.

`string gcs_bucket = 13 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for gcsBucket.

### getIssuingOptions()

```
public abstract CertificateAuthority.IssuingOptions getIssuingOptions()
```

Optional. The IssuingOptions to follow when issuing Certificates from this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions issuing_options = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.IssuingOptions](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions)`

The issuingOptions.

### getIssuingOptionsOrBuilder()

```
public abstract CertificateAuthority.IssuingOptionsOrBuilder getIssuingOptionsOrBuilder()
```

Optional. The IssuingOptions to follow when issuing Certificates from this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions issuing_options = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.IssuingOptionsOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptionsOrBuilder)`

### getKeySpec()

```
public abstract CertificateAuthority.KeyVersionSpec getKeySpec()
```

Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec key_spec = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.KeyVersionSpec](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec)`

The keySpec.

### getKeySpecOrBuilder()

```
public abstract CertificateAuthority.KeyVersionSpecOrBuilder getKeySpecOrBuilder()
```

Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec key_spec = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.KeyVersionSpecOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpecOrBuilder)`

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityOrBuilder#com_google_cloud_security_privateca_v1beta1_CertificateAuthorityOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. Labels with user-defined metadata.

`map<string, string> labels = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. Labels with user-defined metadata.

`map<string, string> labels = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. Labels with user-defined metadata.

`map<string, string> labels = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Optional. Labels with user-defined metadata.

`map<string, string> labels = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLifetime()

```
public abstract Duration getLifetime()
```

Required. The desired lifetime of the CA certificate. Used to create the "not\_before\_time" and "not\_after\_time" fields inside an X.509 certificate.

`.google.protobuf.Duration lifetime = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The lifetime.

### getLifetimeOrBuilder()

```
public abstract DurationOrBuilder getLifetimeOrBuilder()
```

Required. The desired lifetime of the CA certificate. Used to create the "not\_before\_time" and "not\_after\_time" fields inside an X.509 certificate.

`.google.protobuf.Duration lifetime = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getName()

```
public abstract String getName()
```

Output only. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The resource name for this CertificateAuthority in the format `projects/*/locations/*/certificateAuthorities/*`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPemCaCertificates(int index)

```
public abstract String getPemCaCertificates(int index)
```

Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.

`repeated string pem_ca_certificates = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

The pemCaCertificates at the given index.

### getPemCaCertificatesBytes(int index)

```
public abstract ByteString getPemCaCertificatesBytes(int index)
```

Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.

`repeated string pem_ca_certificates = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

The bytes of the pemCaCertificates at the given index.

### getPemCaCertificatesCount()

```
public abstract int getPemCaCertificatesCount()
```

Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.

`repeated string pem_ca_certificates = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of pemCaCertificates.

### getPemCaCertificatesList()

```
public abstract List<String> getPemCaCertificatesList()
```

Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.

`repeated string pem_ca_certificates = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the pemCaCertificates.

### getState()

```
public abstract CertificateAuthority.State getState()
```

Output only. The State for this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.State state = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.State](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. The State for this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.State state = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getSubordinateConfig()

```
public abstract SubordinateConfig getSubordinateConfig()
```

Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.

`.google.cloud.security.privateca.v1beta1.SubordinateConfig subordinate_config = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SubordinateConfig](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.SubordinateConfig)`

The subordinateConfig.

### getSubordinateConfigOrBuilder()

```
public abstract SubordinateConfigOrBuilder getSubordinateConfigOrBuilder()
```

Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.

`.google.cloud.security.privateca.v1beta1.SubordinateConfig subordinate_config = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SubordinateConfigOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.SubordinateConfigOrBuilder)`

### getTier()

```
public abstract CertificateAuthority.Tier getTier()
```

Required. Immutable. The Tier of this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier tier = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.Tier](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier)`

The tier.

### getTierValue()

```
public abstract int getTierValue()
```

Required. Immutable. The Tier of this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier tier = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for tier.

### getType()

```
public abstract CertificateAuthority.Type getType()
```

Required. Immutable. The Type of this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.Type type = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.Type](/java/docs/reference/google-cloud-security-private-ca/2.26.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Type)`

The type.

### getTypeValue()

```
public abstract int getTypeValue()
```

Required. Immutable. The Type of this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.Type type = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for type.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The time at which this CertificateAuthority was updated.

`.google.protobuf.Timestamp update_time = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The time at which this CertificateAuthority was updated.

`.google.protobuf.Timestamp update_time = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasAccessUrls()

```
public abstract boolean hasAccessUrls()
```

Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls access_urls = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the accessUrls field is set.

### hasCertificatePolicy()

```
public abstract boolean hasCertificatePolicy()
```

Optional. The CertificateAuthorityPolicy to enforce when issuing Certificates from this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy certificate_policy = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the certificatePolicy field is set.

### hasConfig()

```
public abstract boolean hasConfig()
```

Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.

`.google.cloud.security.privateca.v1beta1.CertificateConfig config = 4 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the config field is set.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The time at which this CertificateAuthority was created.

`.google.protobuf.Timestamp create_time = 15 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteTime()

```
public abstract boolean hasDeleteTime()
```

Output only. The time at which this CertificateAuthority will be deleted, if scheduled for deletion.

`.google.protobuf.Timestamp delete_time = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteTime field is set.

### hasIssuingOptions()

```
public abstract boolean hasIssuingOptions()
```

Optional. The IssuingOptions to follow when issuing Certificates from this CertificateAuthority.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions issuing_options = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the issuingOptions field is set.

### hasKeySpec()

```
public abstract boolean hasKeySpec()
```

Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec key_spec = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the keySpec field is set.

### hasLifetime()

```
public abstract boolean hasLifetime()
```

Required. The desired lifetime of the CA certificate. Used to create the "not\_before\_time" and "not\_after\_time" fields inside an X.509 certificate.

`.google.protobuf.Duration lifetime = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the lifetime field is set.

### hasSubordinateConfig()

```
public abstract boolean hasSubordinateConfig()
```

Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.

`.google.cloud.security.privateca.v1beta1.SubordinateConfig subordinate_config = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the subordinateConfig field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The time at which this CertificateAuthority was updated.

`.google.protobuf.Timestamp update_time = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
