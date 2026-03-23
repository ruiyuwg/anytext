-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Certificate Authority Service V1beta1 Client - Class RevocationReason (1.0.3) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.3 1.7.3 1.5.0 1.4.2 1.3.1 1.2.2 1.1.0 1.0.3

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Certificate Authority Service V1beta1 Client class RevocationReason.

A [RevocationReason](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.RevocationReason) indicates whether a [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) has been revoked, and the reason for revocation. These correspond to standard revocation reasons from RFC 5280. Note that the enum labels and values in this definition are not the same ASN.1 values defined in RFC 5280. These values will be translated to the correct ASN.1 values when a CRL is created.

Protobuf type `google.cloud.security.privateca.v1beta1.RevocationReason`

## Methods

### name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### REVOCATION\_REASON\_UNSPECIFIED

```
Value: 0
```

Default unspecified value. This value does indicate that a [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) has been revoked, but that a reason has not been recorded.

Generated from protobuf enum `REVOCATION_REASON_UNSPECIFIED = 0;`

### KEY\_COMPROMISE

```
Value: 1
```

Key material for this [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) may have leaked.

Generated from protobuf enum `KEY_COMPROMISE = 1;`

### CERTIFICATE\_AUTHORITY\_COMPROMISE

```
Value: 2
```

The key material for a certificate authority in the issuing path may have leaked.

Generated from protobuf enum `CERTIFICATE_AUTHORITY_COMPROMISE = 2;`

### AFFILIATION\_CHANGED

```
Value: 3
```

The subject or other attributes in this [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) have changed.

Generated from protobuf enum `AFFILIATION_CHANGED = 3;`

### SUPERSEDED

```
Value: 4
```

This [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) has been superseded.

Generated from protobuf enum `SUPERSEDED = 4;`

### CESSATION\_OF\_OPERATION

```
Value: 5
```

This [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) or entities in the issuing path have ceased to operate.

Generated from protobuf enum `CESSATION_OF_OPERATION = 5;`

### CERTIFICATE\_HOLD

```
Value: 6
```

This [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) should not be considered valid, it is expected that it may become valid in the future.

Generated from protobuf enum `CERTIFICATE_HOLD = 6;`

### PRIVILEGE\_WITHDRAWN

```
Value: 7
```

This [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) no longer has permission to assert the listed attributes.

Generated from protobuf enum `PRIVILEGE_WITHDRAWN = 7;`

### ATTRIBUTE\_AUTHORITY\_COMPROMISE

```
Value: 8
```

The authority which determines appropriate attributes for a [Certificate](/php/docs/reference/cloud-security-private-ca/1.0.3/V1beta1.Certificate) may have been compromised.

Generated from protobuf enum `ATTRIBUTE_AUTHORITY_COMPROMISE = 8;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
