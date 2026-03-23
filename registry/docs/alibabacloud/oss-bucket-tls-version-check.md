An OSS bucket is considered compliant if Transport Layer Security (TLS) is enabled and it uses a TLS version within the specified range.

## **Scenarios**

To ensure secure data transmission, configure your OSS buckets to serve content over HTTPS, which uses TLS encryption. Use a secure TLS version, such as TLSv1.2 or TLSv1.3.

## **Risk level**

Default risk level: Medium.

You can change the risk level of this rule as needed.

## **Detection logic**

-   An OSS bucket is considered compliant if TLS is enabled and its TLS version is within the range specified by the parameter. The default TLS versions are TLSv1.2 and TLSv1.3.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the TLS version of an OSS bucket

Rule identifier

[oss-bucket-tls-version-check](https://confignew.console.alibabacloud.com/library/managed-rules/oss-bucket-tls-version-check?scene=parameters)

Tags

OSS, TLS

Auto-remediation

Not supported

Trigger type

Periodic

Trigger frequency

24 hours

Supported resource types

OSS bucket

Input parameters

tlsVersion

## **Remediation**

To fix a non-compliant resource, see [Set the TLS version](/help/en/oss/user-guide/set-tls-version).
