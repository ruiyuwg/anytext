Checks whether the bucket policy of each Object Storage Service (OSS) bucket denies read access from the Internet. If so, the evaluation result is Compliant.

## Scenarios

If an OSS bucket allows read access from the Internet, data leaks may occur when the data is exposed to the Internet. Therefore, an OSS bucket must deny read access from the Internet.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the bucket policy of each OSS bucket denies read access from the Internet, the evaluation result is Compliant.
-   If the bucket policy of each OSS bucket allows read access from the Internet, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-public-read-prohibited

Rule identifier

oss-bucket-public-read-prohibited

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

Set the Bucket ACL parameter of an OSS bucket to Private. For more information, see [Modify the ACL of a bucket](/help/en/oss/modify-bucket-acls#concept-d2d-3gz-5db).
