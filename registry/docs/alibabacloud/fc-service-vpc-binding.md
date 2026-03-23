Checks whether the functions of a service can be invoked only in specific virtual private clouds (VPCs).

## Scenarios

We recommend that you allow only requests from specific VPCs to invoke the functions of a service without affecting normal business operations. This reduces business security risks.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the functions of the service can be invoked only in specific VPCs, the evaluation result is compliant.
-   If the functions of the service can be invoked over the Internet, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-9gs-twt-tf9).

## Rule details

 

Item

Description

Rule name

fc-service-vpc-binding

Rule ID

fc-service-vpc-binding

Tag

FC and Service

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Time interval

24 hours

Supported resource type

Function Compute trigger

Input parameter

None

## Non-compliance remediation

Specify that the functions of the service can be invoked only in specific VPCs. For more information, see [Configure network settings](/help/en/functioncompute/fc-2-0/user-guide/configure-network-settings#multitask-2259926 "By default, you can invoke the functions that are created in a service only over the Internet. You cannot invoke the functions in virtual private clouds (VPCs). To allow the functions to access resources in a VPC or allow requests from specified VPCs to invoke the functions, you must manually configure the network settings and the permissions for the service. The network settings take effect at the service level and apply to all functions in the service. This topic describes how to configure the network settings for a service in the console.").
