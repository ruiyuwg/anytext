ALIYUN::ROS::StackInstances is used to create stack instances within specified accounts in specified regions.

## Syntax

```
{
  "Type": "ALIYUN::ROS::StackInstances",
  "Properties": {
    "OperationPreferences": Map,
    "RetainStacks": Boolean,
    "RegionIds": List,
    "AccountIds": List,
    "ParameterOverrides": Map,
    "StackGroupName": String,
    "DeploymentTargets": Map,
    "OperationDescription": String,
    "DisableRollback": Boolean,
    "TimeoutInMinutes": Integer
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

OperationPreferences

Map

No

No

The preferences of the operation to create the stack instances.

For more information, see [OperationPreferences properties](#section-jzp-uuk-cd9).

**Note**

-   You can specify one of the MaxConcurrentCount and MaxConcurrentPercentage parameters, but not both.
-   You can specify one of the FailureToleranceCount and FailureTolerancePercentage parameters, but not both.

RetainStacks

Boolean

No

No

Specifies whether to retain stacks when the stack instances are deleted.

You can specify whether to delete or retain the stacks that are associated with the stack instances when the stack instances are deleted. Valid values:

-   true: retains the relevant stacks when the stack instances are deleted.
-   false: deletes the relevant stacks when the stack instances are deleted.

RegionIds

List

Yes

No

The IDs of the regions in which you want to create the stack instances.

You can specify a maximum of 20 region IDs.

AccountIds

List

No

No

The IDs of the accounts within which you want to use self-managed permissions to deploy stacks.

You can specify a maximum of 20 account IDs.

ParameterOverrides

Map

No

No

The parameters that you want to override.

None

StackGroupName

String

Yes

No

The name of the stack group.

The name must be unique within a region.

The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (\_). The name must start with a digit or letter.

DeploymentTargets

Map

No

No

The folders in which you want to use the service-managed permissions to deploy stacks.

For more information, see [DeploymentTargets property](#section-8vf-dnv-vw5).

OperationDescription

String

No

No

The description of the operation to create the stack instances.

The description must be 1 to 256 characters in length.

DisableRollback

Boolean

No

No

Specifies whether to enable rollback that is triggered when the stack instances fail to be created.

Valid values:

-   true: disables rollback.
-   false: enables rollback. This is the default value.

TimeoutInMinutes

Integer

No

No

The timeout period to create the stack instances.

Default value: 60.

Unit: minutes.

## OperationPreferences syntax

```
"OperationPreferences": {
  "MaxConcurrentPercentage": Integer,
  "MaxConcurrentCount": Integer,
  "FailureTolerancePercentage": Integer,
  "FailureToleranceCount": Integer
}
```

## OperationPreferences properties

     

Property

Type

Required

Editable

Description

Constraint

MaxConcurrentPercentage

Integer

No

No

The maximum percentage of the number of accounts within which operations can be concurrently performed on stacks to the total number of accounts in each region.

If the numeric value in the percentage is not an integer, Resource Orchestration Service (ROS) rounds the number down to the nearest integer.

If you do not set the MaxConcurrentPercentage parameter, the default value 1 is used.

Valid values: 1 to 100.

MaxConcurrentCount

Integer

No

No

The maximum number of accounts within which operations can be concurrently performed on stacks in each region.

If you do not set the MaxConcurrentCount parameter, the default value 1 is used.

Valid values: 1 to 20.

FailureTolerancePercentage

Integer

No

No

The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region.

If the value is exceeded in a region, ROS stops the operation in the region.

If the numeric value in the percentage is not an integer, ROS rounds the number down to the nearest integer.

If you do not set the FailureTolerancePercentage parameter, the default value 0 is used.

Valid values: 0 to 100.

FailureToleranceCount

Integer

No

No

The number of accounts within which stack operation failures are allowed in each region.

If the value is exceeded in a region, ROS stops the operation in the region.

If ROS stops the operation in one region, ROS also stops the operation in other regions.

If you do not set the FailureToleranceCount parameter, the default value 0 is used.

Valid values: 0 to 100.

## DeploymentTargets syntax

```
"DeploymentTargets": {
  "RdFolderIds": List
}
```

## DeploymentTargets property

     

Property

Type

Required

Editable

Description

Constraint

RdFolderIds

List

No

No

The folder IDs of the resource directory.

You can specify a maximum of five folder IDs.

You can create stack instances in all members that are contained in the specified folders.

If you specify the Root folder, stack instances are created in all members in the resource directory.

**Note** To view the folder IDs, go to the Overview page in the Resource Management console. For more information, see [View the basic information of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder#task-fjx-xq1-dhb).

## Response parameters

Fn::GetAtt

-   LastOperationId: the operation ID.
-   Stacks: the details of stacks.

## Example

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RegionIds": {
      "Type": "Json"
    },
    "ParameterOverrides": {
      "Type": "Json"
    },
    "StackGroupName": {
      "Type": "String"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ROS::StackInstances",
      "Properties": {
        "RegionIds": {
          "Ref": "RegionIds"
        },
        "ParameterOverrides": {
          "Ref": "ParameterOverrides"
        },
        "StackGroupName": {
          "Ref": "StackGroupName"
        }
      }
    }
  },
  "Outputs": {
    "LastOperationId": {
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LastOperationId"
        ]
      }
    },
    "Stacks": {
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Stacks"
        ]
      }
    }
  }
}
```
