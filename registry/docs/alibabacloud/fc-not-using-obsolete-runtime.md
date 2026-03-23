A Function Compute (FC) function is considered compliant if its runtime is not deprecated. Effective April 20, 2025, this rule detects the following deprecated runtimes: nodejs12, nodejs10, nodejs8, dotnetcore2.1, python2.7, nodejs6, and nodejs4.4.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Detection logic**

-   An FC function is compliant if its runtime is not deprecated. Effective April 20, 2025, this rule detects the following deprecated runtime versions: nodejs12, nodejs10, nodejs8, dotnetcore2.1, python2.7, nodejs6, and nodejs4.4.
    

## **Rule details**

**Parameter**

**Description**

Rule name

FC functions do not use deprecated runtimes

Rule identifier

[fc-function-runtime-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=fc-function-runtime-check)

Tag

Function

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::FC::Function

Input parameters

runtimes (Default value: nodejs12,nodejs10,nodejs8,dotnetcore2.1,python2.7,nodejs6,nodejs4.4)

## **Remediation**

To remediate a non-compliant resource, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions).
