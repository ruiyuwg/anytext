A Redis instance is considered compliant if Secure Sockets Layer (SSL) is enabled and its Transport Layer Security (TLS) version is one of the versions specified in the parameter.

## **Scenarios**

To ensure secure data transmission, enable SSL for Redis instances and use a secure TLS version, such as TLSv1.2 or TLSv1.3.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is considered compliant if SSL is enabled and its TLS version is one of the versions specified in the parameter. The default parameter values are TLSv1.2 and TLSv1.3.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable SSL and use a specified TLS version for a Redis instance

Rule identifier

[redis-instance-tls-version-check](https://confignew.console.alibabacloud.com/library/managed-rules/redis-instance-tls-version-check?scene=parameters)

Tags

Redis, TLS

Auto-remediation

Not supported

Trigger mechanism for rules

Periodic

Trigger frequency

24 hours

Supported resource types

Redis instance

Input parameters

tlsVersion

## **Remediation**

For remediation steps, see [Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption).
