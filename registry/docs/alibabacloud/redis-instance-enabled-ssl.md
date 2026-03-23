Checks whether the Secure Sockets Layer (SSL) encryption feature is enabled for each ApsaraDB for Redis instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the SSL encryption feature for an ApsaraDB for Redis instance to improve link security. After you enable the feature, you must install SSL certificates that are issued by certificate authorities (CAs) on your application. You can use the SSL encryption feature to encrypt connections at the transport layer to increase data security and ensure data integrity.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SSL encryption feature is enabled for each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If the SSL encryption feature is disabled for an ApsaraDB for Redis instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-yr1-0bf-eis).

## Rule details

 

Item

Description

Rule name

redis-instance-enabled-ssl

Rule identifier

redis-instance-enabled-ssl

Tag

Redis and SSL

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.

## Incompliance remediation

Enable the SSL encryption feature for an ApsaraDB for Redis instance. For more information, see [Configure SSL encryption](/help/en/redis/user-guide/configure-ssl-encryption#concept-jdh-mdv-h2b "This topic describes how to enable SSL encryption for an ApsaraDB for MongoDB instance to enhance link security. After you enable SSL encryption, you must install SSL certificates that are issued by certificate authorities (CAs) on your application. SSL encryption can encrypt connections at the transport layer to increase data security and ensure data integrity.").
