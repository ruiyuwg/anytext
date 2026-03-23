A Cloud Storage Gateway is considered compliant if all its shares have server-side encryption enabled. This rule does not apply to gateways that have no configured shares.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   If all shares in a Cloud Storage Gateway have server-side encryption enabled, the gateway is considered compliant.
    
-   If a Cloud Storage Gateway has no shares configured, the gateway is considered not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Server-side encryption for Cloud Storage Gateway shares

Rule identifier

[csg-server-side-encryption-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=csg-server-side-encryption-enabled)

Tag

\[CloudStorageGateway\]

Automatic remediation

Not supported

Rule trigger

24-hour period

Supported resource types

\[ACS::CloudStorageGateway::Gateway\]

Request parameters

None

## **Remediation**

For remediation steps, see [Configure a share](/help/en/csg/user-guide/configure-shares).
