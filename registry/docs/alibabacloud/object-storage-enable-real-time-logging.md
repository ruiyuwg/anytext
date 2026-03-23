An Object Storage Service (OSS) bucket is considered compliant if real-time logging is enabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An OSS bucket is considered compliant if real-time logging is enabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable real-time logging for Object Storage Service

Rule identifier

[oss-bucket-realtime-log-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-realtime-log-enabled)

Tags

OSS,Bucket

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

For instructions on remediating non-compliant resources, see [Real-time log query](/help/en/oss/user-guide/real-time-log-query/).
