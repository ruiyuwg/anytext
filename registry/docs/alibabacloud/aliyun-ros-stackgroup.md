ALIYUN::ROS::StackGroup is used to create a stack group.

## Syntax

```
{
  "Type": "ALIYUN::ROS::StackGroup",
  "Properties": {
    "Description": String,
    "Parameters": Map,
    "ResourceGroupId": String,
    "DynamicTemplateBody": Map,
    "StackGroupName": String,
    "TemplateVersion": String,
    "AdministrationRoleName": String,
    "TemplateBody": Map,
    "TemplateURL": String,
    "AutoDeployment": Map,
    "PermissionModel": String,
    "ExecutionRoleName": String,
    "TemplateId": String
  }
}
```

## Parameters

     

Parameter

Type

Required

Editable

Description

Constraint

Description

String

No

No

The description of the stack group.

The description must be 1 to 256 characters in length.

Parameters

Map

No

No

The details of parameters.

None

ResourceGroupId

String

No

No

The ID of the resource group.

If you do not specify this parameter, the stack group is added to the default resource group.

DynamicTemplateBody

Map

No

No

The structure that contains the template body.

You can use function expressions provided by Resource Orchestration Service (ROS) to obtain the template content.

StackGroupName

String

Yes

No

The name of the stack group.

The name must be unique within a region.

The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (\_). The name must start with a digit or letter.

TemplateVersion

String

No

No

The version of the template.

By default, if you do not specify this parameter, the latest version is used.

AdministrationRoleName

String

No

No

The name of the RAM role that you specify for the administrator account in ROS when you create a self-managed stack group.

You must specify the name of the RAM role for the administrator account in ROS when you create a self-managed stack group.

If you do not specify this parameter, the default value AliyunROSStackGroupAdministrationRole is used. You can use the administrator role in ROS to assume the AliyunROSStackGroupExecutionRole execution role to perform operations on the stacks that correspond to stack instances in the stack group.

The name must be 1 to 64 characters in length, and can contain letters, digits, and hyphens (-).

TemplateBody

Map

No

No

The structure that contains the template body.

The template body must be 1 to 524,288 bytes in length.

If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.

**Note** You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.

TemplateURL

String

No

No

The URL of the file that contains the template body.

The URL must point to a template on a web server or in an Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length.

Examples for OSS URLs: `oss://ros/template/demo` and `oss://ros/template/demo?RegionId=cn-hangzhou`.

By default, if you do not specify the region of the OSS bucket, the value of the RegionId parameter is used as the region.

**Note** You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.

AutoDeployment

Map

No

No

The information about automatic deployment settings.

For more information, see [Parameters of AutoDeployment](#section-4do-ynh-rg5)

PermissionModel

String

No

No

The permission model.

Valid values:

-   SELF\_MANAGED: the self-managed permission model.
    
    If you create a self-managed stack group, you must create RAM roles for the administrator and execution accounts, and establish a trust relationship between the accounts to deploy stacks within the execution account.
    
-   SERVICE\_MANAGED: the service-managed permission model.
    
    If you create a service-managed stack group, ROS creates service-linked roles for the administrator and execution accounts, and the administrator account uses its role to deploy stacks within the execution account.
    

**Note** If you use the service-managed permission model to deploy stacks, make sure that your account is a management account or delegated administrator account in the resource directory and the trusted access feature is enabled for the account. For more information, see [Step 1: (Optional) Create a delegated administrator account](/help/en/ros/user-guide/step-1-create-a-delegated-administrator-account#task-2111428) and [Step 2: Enable trusted access](/help/en/ros/user-guide/step-2-enable-trusted-access#task-2104762).

ExecutionRoleName

String

No

No

The name of the RAM role that you specify for the execution account when you create a self-managed stack group.

You must specify the name of the RAM role for the execution account when you create a self-managed stack group.

If you do not specify this parameter, the default value AliyunROSStackGroupExecutionRole is used. You can use this role in ROS to perform operations on the stacks that correspond to stack instances in the stack group.

The name must be 1 to 64 characters in length, and can contain letters, digits, and hyphens (-).

TemplateId

String

No

No

The ID of the template.

This parameter applies to shared and private templates.

**Note** You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.

## Syntax of AutoDeployment

```
"AutoDeployment": {
  "Enabled": Boolean,
  "RetainStacksOnAccountRemoval": Boolean
}
```

## Parameters of AutoDeployment

     

Parameter

Type

Required

Editable

Description

Constraint

Enabled

Boolean

Yes

No

Specifies whether to enable automatic deployment.

Valid values:

-   true: enables automatic deployment.
    
    If you add a member to the folder to which a stack group belongs after you enable automatic deployment, ROS deploys the stack instances in the stack group within this member.
    
    If you remove a member from the folder, the stack group deletes the stack instances within this member.
    
-   false: disables automatic deployment.
    
    After you disable automatic deployment, the stack instances remain unchanged if you change the members in the folder.
    

RetainStacksOnAccountRemoval

Boolean

No

No

Specifies whether to retain stacks in a member if you remove the member from the folder.

Valid values:

-   true: retains the stacks.
-   false: deletes the stacks.

**Note** You must specify this parameter if the Enabled parameter is set to true.

## Response parameters

Fn::GetAtt

StackGroupId: the ID of the stack group.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "StackGroupName": {
      "Type": "String"
    },
    "TemplateId": {
      "Type": "String"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ROS::StackGroup",
      "Properties": {
        "StackGroupName": {
          "Ref": "StackGroupName"
        },
        "TemplateId": {
          "Ref": "TemplateId"
        }
      }
    }
  },
  "Outputs": {
    "StackGroupId": {
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "StackGroupId"
        ]
      }
    }
  }
}
```
