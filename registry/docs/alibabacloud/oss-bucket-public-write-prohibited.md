Checks whether the Bucket ACL parameter of each Object Storage Service (OSS) bucket is set to Private. If so, the evaluation result is Compliant.

## Scenarios

If an OSS bucket allows read and write access from the Internet, unauthorized tampering may occur when the data is exposed to the Internet. Therefore, an OSS bucket must deny read and write access from the Internet.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the Bucket ACL parameter of each OSS bucket is set to Private, the evaluation result is Compliant.
-   If the Bucket ACL parameter of an OSS bucket is set to Public Read or Public Read/Write, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-public-write-prohibited

Rule identifier

oss-bucket-public-write-prohibited

Tag

OSS and Bucket

Automatic remediation

Yes

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

None

## Incompliance remediation

Set the Bucket ACL of an OSS bucket to Private. For more information, see [Modify the ACL of a bucket](/help/en/oss/modify-bucket-acls#concept-d2d-3gz-5db).
