Checks whether the automatic fingerprint collection feature is enabled for the assets of a specified type in the Security Center console. If so, the evaluation result is Compliant.

## Scenarios

Enabling the automatic fingerprint collection feature for the assets of a specified type in the Security Center console is an effective way to improve the security of cloud resources. It helps users discover and resolve security issues in a timely manner and ensure the security and stability of cloud resources.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the automatic fingerprint collection feature is enabled for the assets of a specified type in the Security Center console, the evaluation result is Compliant.
    
-   If the automatic fingerprint collection feature is not enabled for the assets of a specified type in the Security Center console, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

security-center-fingerprint-collect-enabled

Rule ID

[security-center-fingerprint-collect-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=security-center-fingerprint-collect-enabled)

Tag

SecurityCenter

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

All resources

Input parameter

type. Default value: scheduler\_process\_period

## **Non-compliance remediation**

Enable the automatic fingerprint collection feature for the assets of a specified type in the Security Center console. For more information, see [Use the asset fingerprints feature](/help/en/security-center/user-guide/use-the-asset-fingerprints-feature).
