Checks whether SSL encryption is enabled for an ApsaraDB RDS instance.

## Scenario

To enhance link security, we recommend that you enable SSL encryption and install SSL certificates that are issued by Certificate Authorities (CAs) on your application services. This ensures the security and integrity of data in transmission.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If SSL encryption is enabled for the ApsaraDB RDS instance, the configuration is considered compliant.
-   If SSL encryption is not enabled for the ApsaraDB RDS instance, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-ssl

Rule ID

rds-instance-enabled-ssl

Tag

RDS

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## Non-compliance remediation

Configure SSL encryption for the ApsaraDB RDS instance. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
