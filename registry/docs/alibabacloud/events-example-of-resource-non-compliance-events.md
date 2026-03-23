This topic provides an example of resource non-compliance events that are delivered to Message Service (MNS) for storage. The following sections describe the content of the example and the parameters involved.

## Example

In single-account mode, you use an Alibaba Cloud account whose ID is `120886317861****` and you have an ECS instance named `test_Instance` in the China (Beijing) region. The non-compliance events of the resource are delivered to MNS. The following code shows a sample event:

```
{
    "annotation": "{\"configuration\":\"classic\",\"desiredValue\":\"vpc\",\"operator\":\"StringEquals\",\"property\":\"$.InstanceNetworkType\"}",
    "riskLevel": "Warning",
    "dataType": "NonCompliantNotification",
    "evaluationResultIdentifier": {
        "orderingTimestamp": 1630907917476,
        "evaluationResultQualifier": {
            "resourceId": "i-2ze1qff61suafi71****",
            "configRuleName": "ecs-instances-in-vpc",
            "configRuleId": "cr-b9046457e0d9003f****",
            "captureTime": 1630907917476,
            "resourceName": "test_Instance",
            "configRuleArn": "acs:config::120886317861****:rule/cr-b9046457e0d9003f****",
            "regionId": "cn-beijing",
            "resourceOwnerId": 120886317861****,
            "resourceType": "ACS::ECS::Instance"
        }
    },
    "eventType": "ResourceCompliance",
    "invokingEventMessageType": "Manual",
    "complianceType": "NON_COMPLIANT",
    "accountId": 120886317861****,
    "requestId": "a13f5505-427d-41ef-ab2e-606394abb9a8",
    "eventName": "NonCompliant",
    "notificationCreationTime": 1630907919929
}
```

## Parameters

The following table describes the parameters involved in resource non-compliance events that are delivered to MNS.

**Parameter**

**Description**

annotation

The description of the non-compliant configuration.

riskLevel

The risk level of the resources that do not comply with the rule. Valid values:

-   `Info`: low risk
    
-   `Warning`: medium risk
    
-   `Critical`: high risk
    

dataType

The type of the message received by MNS. Valid values:

-   `ConfigurationItemChangeNotification`: resource change log
    
-   `NonCompliantNotification`: resource incompliance event
    

evaluationResultIdentifier

The information about the compliance evaluation result, including the timestamp when the compliance evaluation was performed and the detailed compliance evaluation result.

orderingTimestamp

The timestamp when the compliance evaluation was performed.

evaluationResultQualifier

The details of the compliance evaluation result. The details include the ID, name, and type of the resource, and the name and ID of the rule that was triggered.

eventType

The type of the event. Valid values:

-   `ResourceChange`: resource change event
    
-   `ResourceCompliance`: resource non-compliance event
    

invokingEventMessageType

The trigger type of the rule. Valid values:

-   `ScheduledNotification`: The rule is periodically triggered.
    
-   `ConfigurationItemChangeNotification`: The rule is triggered by configuration changes.
    
-   `Manual`: The rule is manually triggered.
    

complianceType

The compliance evaluation result. Set the value to `NON_COMPLIANT`.

accountId

The ID of the account to which the resource belongs. Cloud Config supports the following types of accounts:

-   Ordinary account: An ordinary account is an independent Alibaba Cloud account that is not included in a resource directory by a management account.
-   Management account: A management account is an Alibaba Cloud account that enables a resource directory and manages all member accounts.
-   Member account: A member account is an Alibaba Cloud account in a resource directory.

-   Single-account mode: Enter the ID of an independent Alibaba Cloud account that is not added to a resource directory by using a management account.
    
-   Multi-account mode: Enter a management account ID or a member account ID.
    

eventName

The name of the event. Set the value to `NonCompliant`.

notificationCreationTime

The timestamp when the message was generated.
