An Object Storage Service (OSS) bucket is considered compliant if cross-region replication is enabled. This rule uses detection results from Backup Disaster Recovery (BDRC). If BDRC is not enabled or no detection results are available, the rule is not applicable.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An Object Storage Service (OSS) bucket is considered compliant if cross-region replication is enabled. This rule uses detection results from Backup Disaster Recovery (BDRC). If BDRC is not enabled or no detection results are available, the rule is not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable cross-region replication for OSS buckets

Rule identifier

[oss-bucket-remote-replication](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-remote-replication)

Tag

OSS

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::OSS::Bucket

Input parameters

None

## **Remediation**

For remediation instructions, see [Check Object Storage Service (OSS) resources](/help/en/bdrc/user-guide/oss-buckets).
