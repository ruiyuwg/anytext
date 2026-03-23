-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateCertificateRequestOrBuilder (2.51.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public interface CreateCertificateRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCertificate()

```
public abstract Certificate getCertificate()
```

Required. A Certificate with initial field values.

`.google.cloud.security.privateca.v1.Certificate certificate = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.Certificate)`

The certificate.

### getCertificateId()

```
public abstract String getCertificateId()
```

Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a CertificateAuthority in the Enterprise \[CertificateAuthority.Tier\]\[\], but is optional and its value is ignored otherwise.

`string certificate_id = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The certificateId.

### getCertificateIdBytes()

```
public abstract ByteString getCertificateIdBytes()
```

Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a CertificateAuthority in the Enterprise \[CertificateAuthority.Tier\]\[\], but is optional and its value is ignored otherwise.

`string certificate_id = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for certificateId.

### getCertificateOrBuilder()

```
public abstract CertificateOrBuilder getCertificateOrBuilder()
```

Required. A Certificate with initial field values.

`.google.cloud.security.privateca.v1.Certificate certificate = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[CertificateOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CertificateOrBuilder)`

### getIssuingCertificateAuthorityId()

```
public abstract String getIssuingCertificateAuthorityId()
```

Optional. The resource ID of the CertificateAuthority that should issue the certificate. This optional field will ignore the load-balancing scheme of the Pool and directly issue the certificate from the CA with the specified ID, contained in the same CaPool referenced by `parent`. Per-CA quota rules apply. If left empty, a CertificateAuthority will be chosen from the CaPool by the service. For example, to issue a Certificate from a Certificate Authority with resource name "projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca", you can set the parent to "projects/my-project/locations/us-central1/caPools/my-pool" and the issuing\_certificate\_authority\_id to "my-ca".

`string issuing_certificate_authority_id = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The issuingCertificateAuthorityId.

### getIssuingCertificateAuthorityIdBytes()

```
public abstract ByteString getIssuingCertificateAuthorityIdBytes()
```

Optional. The resource ID of the CertificateAuthority that should issue the certificate. This optional field will ignore the load-balancing scheme of the Pool and directly issue the certificate from the CA with the specified ID, contained in the same CaPool referenced by `parent`. Per-CA quota rules apply. If left empty, a CertificateAuthority will be chosen from the CaPool by the service. For example, to issue a Certificate from a Certificate Authority with resource name "projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca", you can set the parent to "projects/my-project/locations/us-central1/caPools/my-pool" and the issuing\_certificate\_authority\_id to "my-ca".

`string issuing_certificate_authority_id = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for issuingCertificateAuthorityId.

### getParent()

```
public abstract String getParent()
```

Required. The resource name of the CaPool associated with the Certificate, in the format `projects/*/locations/*/caPools/*`.

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

Required. The resource name of the CaPool associated with the Certificate, in the format `projects/*/locations/*/caPools/*`.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getRequestId()

```
public abstract String getRequestId()
```

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`string request_id = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The requestId.

### getRequestIdBytes()

```
public abstract ByteString getRequestIdBytes()
```

Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`string request_id = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for requestId.

### getValidateOnly()

```
public abstract boolean getValidateOnly()
```

Optional. If this is true, no Certificate resource will be persisted regardless of the CaPool's tier, and the returned Certificate will not contain the pem\_certificate field.

`bool validate_only = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The validateOnly.

### hasCertificate()

```
public abstract boolean hasCertificate()
```

Required. A Certificate with initial field values.

`.google.cloud.security.privateca.v1.Certificate certificate = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the certificate field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
