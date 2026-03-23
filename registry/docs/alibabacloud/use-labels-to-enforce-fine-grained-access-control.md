Use tags to identify and categorize your cloud resources. Resource Access Management (RAM) lets you manage user identities and control their access to cloud resources through permission policies. By combining tags with RAM permission policies, you can implement fine-grained access control that grants different users access to specific clusters.

Controlling a RAM user's permissions with tags, known as tag-based authorization, works as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7705453671/CAEQTxiBgMD3ybLt1BkiIDFjYTRhODQ2OWE1YTQyMDY4ZTk5ZWJhZjE5YmQzY2Q43963382_20230830144006.372.svg)

## Procedure

Use your Alibaba Cloud account to create a custom permission policy. In this policy, you require that a RAM user specifies certain tags to manage Alibaba Cloud Container Service for Kubernetes (ACK) clusters. Then, attach this policy to the RAM user.

1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) with your Alibaba Cloud account. Create a custom permission policy. For instructions, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-2149286). In the policy, use the [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms) element to restrict access by setting tag conditions on your cloud resources.
    
    **Note**
    
    An Alibaba Cloud account has full administrative permissions over all resources in the account. Alternatively, you can create a RAM user and grant the `AdministratorAccess` permission to designate it as an account administrator. This administrator can manage all cloud resources within the account. For more information, see [Create a RAM user as an account administrator](/help/en/ram/create-admin-user).
    
    The following condition keys are supported by ACK:
    
    **Tag condition key**
    
    **Description**
    
    `acs:RequestTag`
    
    Requires that API requests include specific tags.
    
    Requests that do not include tag parameters will fail authorization.
    
    `acs:ResourceTag`
    
    Restricts access to resources that have specific tags.
    
    Requests that do not include a resource ID parameter will fail authorization.
    
    For policy examples, see [Examples](#8973fe169776j).
    
3.  Attach the custom permission policy to the RAM User. For instructions, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800). When defining your policy, refer to the sections on [Resource types that support tags](#e340d17ce35xc) and [Actions that do not support tag-level authorization](#a31f2db9dcjgu).
    
    **Note**
    
    Before you grant permissions to an existing RAM user, review their current permission policies to avoid duplicates or conflicts.
    

## **Examples**

This section provides example policies for different scenarios. Use these templates as a starting point and configure them according to the principle of least privilege.

**Permission policy**

**Description**

**Result**

```
{
    "Version": "1",
    "Statement": [{
        "Effect": "Allow",
        "Action": "cs:CreateCluster",
        "Resource": "*",
        "Condition": {
            "StringEquals": {
                "acs:RequestTag/test": "foo"
            }
        }
    }]
}
```

Allows creating clusters only with the `test:foo` tag.

-   If you add the `test:foo` tag in the `advanced options` when creating a cluster, the creation is successful.
    
-   Attempting to create an ACK cluster without the `test:foo` tag fails with the following error: ![ack](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0114940171/p477477.png)
    

```
{
    "Version": "1",
    "Statement": [{
        "Effect": "Allow",
        "Action": [
            "cs:DescribeClustersV1",
            "cs:GetClusters"
        ],
        "Resource": "*",
        "Condition": {
            "StringEquals": {
                "acs:ResourceTag/test": "foo"
            }
        }
    }]
}
```

Allows viewing only clusters with the `test:foo` tag in the cluster list.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  View the clusters in the list.
    
    -   If no clusters have the `test:foo` tag, the cluster list is empty.
        
    -   After you add the `test:foo` tag to a cluster, it appears in the list.
        

```
{
    "Version": "1",
    "Statement": [{
        "Effect": "Deny",
        "Action": [
            "cs:UntagResources",
            "cs:ListTagResources",
            "cs:TagResources",
            "cs:ModifyClusterTags"
        ],
        "Resource": "*"
    }]
}
```

Prevents users from modifying tags.

Attempting to modify a tag fails with the following error:

![tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2040470171/p477478.png)

## **References**

### **Resource types that support tags**

In ACK, only the resource types listed in the following table support tag-based authorization.

**Service name**

**Service code**

**Resource type**

ACK

cs

cluster: cluster

### Actions that do not support tag-based authorization

The actions in the following table do not support tag-based authorization. For example policies, see [Custom permission policy examples](#79116d6ae25bi).

**Action**

**Description**

cs:OpenAckService

Enable ACK

cs:ListOperationPlans

Query the automatic O&M schedules of a cluster

cs:CancelOperationPlan

Cancel a pending automatic O&M plan

cs:DescribeTaskInfo

Query the details of a task

cs:PauseTask

Pause a task

cs:CancelTask

Cancel a task

cs:ResumeTask

Restore a task

cs:CreateKubernetesTrigger

Create an application trigger

cs:DeleteTriggerHook

Delete a trigger

cs:CreateTemplate

Create an orchestration template

cs:DeleteTemplate

Delete an orchestration template

cs:UpdateTemplate

Update an orchestration template

cs:DescribeTemplates

Query all orchestration templates

cs:DescribeTemplateAttribute

Query the details of an orchestration template

cs:ListUserKubeConfigStates

Query the KubeConfig status list of all clusters that belong to a specific user

cs:ListAddons

Query the list of available components

cs:DescribeAddon

Query information about a specific component

cs:DescribeAddons

Query information about all components

cs:DescribeEvents

Query event details

cs:DescribeEventsForRegion

Query events in a specific region

cs:DescribeKubernetesVersionMetadata

Query the details of a Kubernetes version

cs:CheckServiceRole

Check whether a specific service role is assigned

cs:DescribePatternTypes

Query instance types

cs:CheckUserClustersActivity

Check the active status of a user in a specific cluster

cs:CreateSessionMessage

Create an ACK AI Assistant session

cs:UpdateMessageFeedback

Update ACK AI Assistant message feedback

cs:DescribeKubeConfigManagementTaskList

List the tasks related to kubeconfig files

cs:ListHaveKubeconfigDeletedAccounts

Query the users whose accounts have deleted RAM users or RAM roles, but whose kubeconfig files remain active.

cs:ListKubeConfigRecycle

List the kubeconfig files in the recycle bin within the current Alibaba Cloud account

cs:RestoreKubeConfigRecycleItem

Restore a deleted kubeconfig file from the recycle bin

cs:RestoreMultiKubeConfigRecycleItems

Batch restore deleted kubeconfig files from the recycle bin

cs:DeleteKubeConfigRecycleItem

Permanently delete a kubeconfig file from the recycle bin

cs:DescribeKubernetesVersionMetadata

Query the details of a Kubernetes version

cs:DescribePolicies

Query the policy list

cs:DescribePolicyDetails

Query the details of a specific policy

cs:DescribeUserInstances

Obtain the node list required to add an existing node

cs:DescribeUserPermission

Query the permissions of a RAM user or a RAM role

cs:UpdateUserPermissions

Update the Role-Based Access Control (RBAC) permissions of a specific RAM user or RAM role

cs:CleanUserPermissions

Clear the certificate of a specific user and the related RBAC permissions

cs:QueryAlertContact

Query an alert contact

cs:AddOrUpdateAlertContact

Update an alert contact

cs:DeleteAlertContact

Delete an alert contact

cs:QueryAlertContactGroup

Query alert contact groups

cs:AddOrUpdateAlertContactGroup

Update an alert contact group

cs:DeleteAlertContactGroup

Delete an alert contact group

cs:DescribeUserQuota

Query quota information

cs:ListOperationPlans

Query the list of auto O&M task plans

cs:CancelOperationPlan

Cancel auto O&M task plans

cs:DescribeTasks

Query the task list

#### **Custom** permission **policy examples**

**Important**

A RAM user or a RAM role that has account-level permissions can perform operations on resources within the entire account. Make sure that the permissions granted to the RAM user or RAM role meet your expectations and follow the principle of least privilege.

For resource types that do not support tag-based authorization, granting permissions with tag conditions has no effect. You must create a custom permission policy for these resources. When you grant permissions, set the resource scope to **Account Level** and do not specify any tag conditions in the policy content.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1804447371/p906612.png)The following two policy examples can be modified as needed.

-   The `Action` element lists all read-only actions that do not support tag-based authorization.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "cs:DescribeAddon",
            "cs:DescribeAddons",
            "cs:DescribeEvents",
            "cs:DescribeEventsForRegion",
            "cs:DescribeKubeConfigManagementTaskList",
            "cs:DescribeKubernetesVersionMetadata",
            "cs:DescribePatternTypes",
            "cs:DescribePolicies",
            "cs:DescribePolicyDetails",
            "cs:DescribeTaskInfo",
            "cs:DescribeTemplateAttribute",
            "cs:DescribeTemplates",
            "cs:DescribeUserInstances",
            "cs:DescribeUserPermission",
            "cs:ListAddons",
            "cs:ListHaveKubeconfigDeletedAccounts",
            "cs:ListKubeConfigRecycle",
            "cs:ListOperationPlans",
            "cs:ListUserKubeConfigStates",
            "cs:QueryAlertContact",
            "cs:QueryAlertContactGroup",
            "cs:CheckServiceRole",
            "cs:DescribeTasks",
            "cs:DescribeUserQuota",
            "cs:ListOperationPlans",
            "cs:CheckUserClustersActivity"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
    
-   The `Action` element lists all actions that do not support tag-based authorization.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "cs:AddOrUpdateAlertContact",
            "cs:AddOrUpdateAlertContactGroup",
            "cs:CancelOperationPlan",
            "cs:CancelTask",
            "cs:CheckServiceRole",
            "cs:CheckUserClustersActivity",
            "cs:CleanUserPermissions",
            "cs:CreateKubernetesTrigger",
            "cs:CreateSessionMessage",
            "cs:CreateTemplate",
            "cs:DeleteAlertContact",
            "cs:DeleteAlertContactGroup",
            "cs:DeleteKubeConfigRecycleItem",
            "cs:DeleteTemplate",
            "cs:DeleteTriggerHook",
            "cs:DescribeAddon",
            "cs:DescribeAddons",
            "cs:DescribeEvents",
            "cs:DescribeEventsForRegion",
            "cs:DescribeKubeConfigManagementTaskList",
            "cs:DescribeKubernetesVersionMetadata",
            "cs:DescribePatternTypes",
            "cs:DescribePolicies",
            "cs:DescribePolicyDetails",
            "cs:DescribeTaskInfo",
            "cs:DescribeTemplateAttribute",
            "cs:DescribeTemplates",
            "cs:DescribeUserInstances",
            "cs:DescribeUserPermission",
            "cs:ListAddons",
            "cs:ListHaveKubeconfigDeletedAccounts",
            "cs:ListKubeConfigRecycle",
            "cs:ListOperationPlans",
            "cs:ListUserKubeConfigStates",
            "cs:OpenAckService",
            "cs:DescribeTasks",
            "cs:PauseTask",
            "cs:QueryAlertContact",
            "cs:QueryAlertContactGroup",
            "cs:RestoreKubeConfigRecycleItem",
            "cs:RestoreMultiKubeConfigRecycleItems",
            "cs:ResumeTask",
            "cs:UpdateMessageFeedback",
            "cs:DescribeUserQuota",
            "cs:ListOperationPlans",
            "cs:CancelOperationPlan",
            "cs:UpdateTemplate",
            "cs:UpdateUserPermissions"
          ],
          "Resource": "*"
        }
      ]
    }
    ```
