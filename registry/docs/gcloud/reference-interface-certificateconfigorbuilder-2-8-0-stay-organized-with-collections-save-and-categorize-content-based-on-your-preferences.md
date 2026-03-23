-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CertificateConfigOrBuilder (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public interface CertificateConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getPublicKey()

```
public abstract PublicKey getPublicKey()
```

Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.

`.google.cloud.security.privateca.v1.PublicKey public_key = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[PublicKey](/java/docs/reference/google-cloud-security-private-ca/2.8.0/com.google.cloud.security.privateca.v1.PublicKey)

The publicKey.

### getPublicKeyOrBuilder()

```
public abstract PublicKeyOrBuilder getPublicKeyOrBuilder()
```

Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.

`.google.cloud.security.privateca.v1.PublicKey public_key = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[PublicKeyOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.8.0/com.google.cloud.security.privateca.v1.PublicKeyOrBuilder)

### getSubjectConfig()

```
public abstract CertificateConfig.SubjectConfig getSubjectConfig()
```

Required. Specifies some of the values in a certificate that are related to the subject.

`.google.cloud.security.privateca.v1.CertificateConfig.SubjectConfig subject_config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[CertificateConfig.SubjectConfig](/java/docs/reference/google-cloud-security-private-ca/2.8.0/com.google.cloud.security.privateca.v1.CertificateConfig.SubjectConfig)

The subjectConfig.

### getSubjectConfigOrBuilder()

```
public abstract CertificateConfig.SubjectConfigOrBuilder getSubjectConfigOrBuilder()
```

Required. Specifies some of the values in a certificate that are related to the subject.

`.google.cloud.security.privateca.v1.CertificateConfig.SubjectConfig subject_config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[CertificateConfig.SubjectConfigOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.8.0/com.google.cloud.security.privateca.v1.CertificateConfig.SubjectConfigOrBuilder)

### getX509Config()

```
public abstract X509Parameters getX509Config()
```

Required. Describes how some of the technical X.509 fields in a certificate should be populated.

`.google.cloud.security.privateca.v1.X509Parameters x509_config = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[X509Parameters](/java/docs/reference/google-cloud-security-private-ca/2.8.0/com.google.cloud.security.privateca.v1.X509Parameters)

The x509Config.

### getX509ConfigOrBuilder()

```
public abstract X509ParametersOrBuilder getX509ConfigOrBuilder()
```

Required. Describes how some of the technical X.509 fields in a certificate should be populated.

`.google.cloud.security.privateca.v1.X509Parameters x509_config = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[X509ParametersOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.8.0/com.google.cloud.security.privateca.v1.X509ParametersOrBuilder)

### hasPublicKey()

```
public abstract boolean hasPublicKey()
```

Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.

`.google.cloud.security.privateca.v1.PublicKey public_key = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the publicKey field is set.

### hasSubjectConfig()

```
public abstract boolean hasSubjectConfig()
```

Required. Specifies some of the values in a certificate that are related to the subject.

`.google.cloud.security.privateca.v1.CertificateConfig.SubjectConfig subject_config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the subjectConfig field is set.

### hasX509Config()

```
public abstract boolean hasX509Config()
```

Required. Describes how some of the technical X.509 fields in a certificate should be populated.

`.google.cloud.security.privateca.v1.X509Parameters x509_config = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the x509Config field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
