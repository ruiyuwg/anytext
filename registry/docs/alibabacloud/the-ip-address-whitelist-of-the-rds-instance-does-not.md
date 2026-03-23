This rule checks whether the IP whitelist of an RDS instance contains public IP addresses. If no public IP addresses are included, the instance is considered compliant.

## **Scenarios**

In enterprise internal systems, when the IP whitelist of an RDS instance does not contain public network IPs, it ensures that the database allows access only from application servers within the internal network. This enhances data security.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

This rule checks whether the IP whitelist of an RDS instance contains public IP addresses. If no public IP addresses are included, the instance is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

RDS instance IP whitelist does not contain public network

Rule identifier

[rds-white-list-internet-ip-access-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-white-list-internet-ip-access-check)

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation guidance**

For more information, see [Configure an IP whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance).
