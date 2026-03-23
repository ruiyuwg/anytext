DataWorks allows you to create a custom policy and attach the policy to a RAM user to perform fine-grained permission management. After you attach a custom policy to a RAM user, the RAM user is granted the permissions that are defined in the policy. This topic describes the custom policies that can be used to manage permissions on the DataWorks services and the entities in the DataWorks console. This topic also provides examples on how to use custom policies to manage permissions on the entities in the DataWorks console.

## Prerequisites

-   You are familiar with the syntax of RAM policies. For more information, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).
    
-   You are familiar with information about permission management for the DataWorks services and the entities in the DataWorks console. For more information, see [Manage permissions on the DataWorks services and the entities in the DataWorks console by using RAM policies](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#task-2154716).
    

## Precautions

In this topic, custom policies are used. After you create a custom policy and attach the custom policy to a RAM user, the RAM user can have permissions to perform the related operations. For information about how to grant permissions to a RAM user, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

## Custom policies used to manage permissions on the DataWorks services

### Custom policy 1: Prohibit a RAM user from performing all operations

The workspace administrator can attach a policy that prohibits RAM users from performing all operations to a RAM user. After the policy is attached, the RAM user cannot use all features of DataWorks. For example, the RAM user cannot perform operations in the DataWorks console, use the features of different services, or call API operations.

Sample policy:

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Deny",
            "Action": "dataworks:*",
            "Resource": "*"
        }
    ]
}
```

### Custom policy 2: Prohibit a RAM user from calling API operations

The workspace administrator can attach a policy that prohibits RAM users from calling API operations to a RAM user. After the policy is attached, the RAM user cannot call DataWorks API operations.

Sample policy:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "dataworks:*",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "dataworks:Scope": "OpenAPI"
        }
      }
    }
  ]
}
```

### Custom policy 3: Prohibit a RAM user from accessing DataWorks services

The workspace administrator can attach a policy that prohibits RAM users from accessing DataWorks services to a RAM user. After the policy is attached, the RAM user cannot access DataWorks services.

**Note**

This policy prohibits a RAM user only from accessing services. If the RAM user is granted the permissions to call API operations of a specific service, the RAM user can call the API operations.

Sample policy:

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Deny",
            "Action": "dataworks:*",
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "dataworks:Scope": "Page"
                }
            }
        }
    ]
}
```

## Custom policies used to manage permissions on the entities in the DataWorks console

Custom policies used to manage permissions on operations in the DataWorks console can be categorized based on resource types.

**Note**

Before you configure the Resource element in a custom policy, take note of the following items:

-   When you create a custom policy, replace the content that starts with the placeholder `$` in the Resource column of the following table with an actual ID. For example, you must replace `$regionid` with the ID of a region and `$accountid` with the UID of an Alibaba Cloud account.
    
-   The asterisk (`*`) is a wildcard. You can replace the asterisk with specific values to scale down the scope of permission management. For example, if you replace `workspace/*` with `workspace/workspaceid`, the policy takes effect in the specified workspace.
    

### Entity type 1: Workspace

![工作空间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6512033961/p389529.png)

**Action**

**Resource**

**Description**

CreateWorkspace

acs:dataworks:$regionid:$accountid:workspace/\*

Creates a workspace.

ModifyWorkspace

acs:dataworks:$regionid:$accountid:workspace/$workspaceName

Modifies a workspace.

DeleteWorkspace

acs:dataworks:$regionid:$accountid:workspace/$workspaceName

Deletes a workspace.

DisableWorkspace

acs:dataworks:$regionid:$accountid:workspace/$workspaceName

Disables a workspace.

EnableWorkspace

acs:dataworks:$regionid:$accountid:workspace/$workspaceName

Enables a workspace.

**Example: Authorize a custom role to modify a workspace**

Sample policy:

```
{
    "Statement": [
        {
            "Action": "dataworks:ModifyWorkspace",
            "Effect": "Allow",
            "Resource": "acs:dataworks:$regionid:$accountid:workspace/$workspaceName"
        }
    ],
    "Version": "1"
}
```

### Entity type 2: Resource group

![资源组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6512033961/p389536.png)

**Action**

**Resource**

**Description**

**Precautions**

ListResourceGroup

acs:dataworks:$regionid:$accountid:exclusive\_resource\_group/\*

Displays the Exclusive Resource Groups tab in the DataWorks console. If a RAM user is not granted this permission, the Exclusive Resource Groups tab is invisible to the RAM user in the DataWorks console.

The ListResourceGroup permission and ShowResourceGroupDetail permission are often used together to determine whether a RAM user can view exclusive resource groups.

-   If the RAM user is granted only the ListResourceGroup permission, the Exclusive Resource Groups tab is displayed but the tab is blank.
    
-   If the RAM user is granted the ListResourceGroup permission and the ShowResourceGroupDetail permission, the Exclusive Resource Groups tab is displayed. On the tab, the RAM user can view the details of the resource groups that are specified by the ShowResourceGroupDetail action.
    

**Note**

-   Before you grant the ShowResourceGroupDetail permission to a RAM user, you must grant the ListResourceGroup permission to the RAM user. If the RAM user is granted only the ShowResourceGroupDetail permission, the RAM user cannot view the details of exclusive resource groups.
    
-   The AliyunDataWorksReadOnlyAccess policy contains the ListResourceGroup and ShowResourceGroupDetail permissions.
    

ShowResourceGroupDetail

acs:dataworks:$regionid:$accountid:exclusive\_resource\_group/$resourceGroupName

Displays the details of the specified resource groups.

CreateResourceGroup

acs:dataworks:$regionid:$accountid:exclusive\_resource\_group/\*

Creates an exclusive resource group.

This permission allows a RAM user only to create a resource group in the DataWorks console based on a purchase order ID. This permission does not allow a RAM user to purchase exclusive resources. To allow a RAM user to purchase, scale, or renew a resource group or change the specifications of a resource group, you must attach the AliyunDataWorksFullAccess and AliyunBSSOrderAccess policies to the RAM user.

ModifyResourceGroup

acs:dataworks:$regionid:$accountid:exclusive\_resource\_group/$resourceGroupName

Modifies an exclusive resource group.

\-

-   **Example 1: Authorize a custom role to view and manage an exclusive resource group**
    
    Sample policy:
    
    ```
    {
    "Statement": [
    {
    "Action": "dataworks:ListResourceGroup",
    "Effect": "Allow",
    "Resource": "acs:dataworks:*:1111:exclusive_resource_group/*"
    },
    {
    "Action": "dataworks:ShowResourceGroupDetail",
    "Effect": "Allow",
    "Resource": "acs:dataworks:*:11111:exclusive_resource_group/resourceGroupName2"
    },
    {
    "Action": "dataworks:ModifyResourceGroup",
    "Effect": "Allow",
    "Resource": "acs:dataworks:*:111:exclusive_resource_group/resourceGroupName2"
    }
    ],
    "Version": "1"
    }
    ```
    
-   **Example 2: Authorize a custom role to view resource groups that reside in the China (Shanghai) region and create and modify exclusive resource groups**
    
    **Note**
    
    In this example, a RAM user that is granted the related permissions can create a resource group based on a purchase order ID but cannot purchase exclusive resources.
    
    Sample policy:
    
    ```
    {
      "Statement": [
        {
          "Action": "dataworks:ListResourceGroup",
          "Effect": "Allow",
          "Resource": "acs:dataworks:*:$accountid:exclusive_resource_group/*"
        },
        {
          "Action": "dataworks:ShowResourceGroupDetail",
          "Effect": "Allow",
          "Resource": "acs:dataworks:cn-shanghai:$accountid:exclusive_resource_group/*"
        },
        {
          "Action": "dataworks:CreateResourceGroup",
          "Effect": "Allow",
          "Resource": "acs:dataworks:cn-shanghai:$accountid:exclusive_resource_group/*"
        },
        {
          "Action": "dataworks:ModifyResourceGroup",
          "Effect": "Allow",
          "Resource": "acs:dataworks:cn-shanghai:$accountid:exclusive_resource_group/resourceGroupName1"
        },
        {
          "Action": "dataworks:ModifyResourceGroup",
          "Effect": "Allow",
          "Resource": "acs:dataworks:cn-shanghai:$accountid:exclusive_resource_group/resourceGroupName2"
        }
      ],
      "Version": "1"
    }
    ```
    

### Entity type 3: Alert information

![报警信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4596733371/p389543.png)

**Action**

**Resource**

**Description**

ListContacts

acs:dataworks:$regionid:$accountid:contacts\_ram\_user/\*

Lists the alert contacts.

ModifyContacts

acs:dataworks:$regionid:$accountid:contacts\_ram\_user/\*

Modifies the information of the alert contacts.

ListAlarmResource

acs:dataworks:$regionid:$accountid:alarm\_resource/\*

Lists the alert resources.

SetUpperLimits

acs:dataworks:$regionid:$accountid:alarm\_resource/\*

Specifies upper limits for the usage of alert resources.

**Example: Authorize a custom role to view alert resources, specify upper limits for the usage of alert resources, and view alert contacts**

Sample policy:

```
{
  "Statement": [
    {
      "Action": "dataworks:ListAlarmResource",
      "Effect": "Allow",
      "Resource": "*"
    },
    {
      "Action": "dataworks:SetUpperLimits",
      "Effect": "Allow",
      "Resource": "acs:dataworks:$regionid:$accountid:alarm_resource/*"
    },
    {
      "Action": "dataworks:ListContacts",
      "Effect": "Allow",
      "Resource": "acs:dataworks:$regionid:$accountid:contacts_ram_user/*"
    },
    {
      "Action": "dataworks:ModifyContacts",
      "Effect": "Allow",
      "Resource": "acs:dataworks:$regionid:$accountid:contacts_ram_user/*"
    }
  ],
  "Version": "1"
}
```
