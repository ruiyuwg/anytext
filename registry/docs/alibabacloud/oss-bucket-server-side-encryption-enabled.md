Checks whether the Encryption Method parameter of the server-side encryption feature of each Object Storage Service (OSS) bucket is set to OSS-managed. If so, the evaluation result is Compliant.

## Scenarios

If only basic encryption capabilities are required for OSS buckets and you do not need to manage keys, you can set the Encryption Method parameter of the server-side encryption feature of an OSS bucket to OSS-managed. This ensures the privacy, autonomy, and security of your business data.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the Encryption Method parameter of the server-side encryption feature of each OSS bucket is set to OSS-managed, the evaluation result is Compliant.
-   If the Encryption Method parameter of the server-side encryption feature of each OSS bucket is not set to OSS-managed, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-server-side-encryption-enabled

Rule identifier

oss-bucket-server-side-encryption-enabled

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

Set the Encryption Method parameter of the server-side encryption feature of an OSS bucket to OSS-managed. For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db "Object Storage Service (OSS) encrypts objects uploaded to a bucket that has server-side encryption enabled and stores the encrypted objects. When you call GetObject to download an object, the object is retrieved after OSS decrypts the object. The x-oss-server-side-encryption header is contained in the response to declare that the object is encrypted on the server side.").
