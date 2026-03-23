Checks whether the Secure Sockets Layer (SSL) encryption feature is enabled for each PolarDB cluster. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the SSL encryption feature for a PolarDB cluster. After you enable the feature, you must install SSL certificates that are issued by certificate authorities (CAs) on your application. This helps improve the security of connections. This feature helps you encrypt connections at the transport layer to improve communication security and ensure data integrity.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SSL encryption feature is enabled for each PolarDB cluster, the evaluation result is Compliant.
-   If the SSL encryption feature is disabled for a PolarDB cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-duw-zqf-gwg).

## Rule details

 

Item

Description

Rule name

polardb-cluster-enabled-ssl

Rule identifier

polardb-cluster-enabled-ssl

Tag

PolarDB and SSL

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB cluster

Input parameter

None.

## Incompliance remediation

Enable the SSL encryption feature for a PolarDB cluster. For more information, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption#task-2407132 "This topic describes how to make data transmission more security by configuring SSL encryption. You must enable SSL encryption and install SSL certificates that are issued by certificate authorities (CAs) in the required applications. SSL is used to encrypt connections at the transport layer and enhance the security and integrity of the transmitted data. However, SSL encryption increases the round-trip time.").
