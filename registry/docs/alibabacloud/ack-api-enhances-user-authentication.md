Beginning August 18, 2021, Container Service for Kubernetes (ACK) implements enhanced authentication when Resource Access Management (RAM) users and roles make API calls. To prevent authentication errors due to unauthorized API calls, you must check the RAM policies that are attached to the RAM users and roles within your Alibaba Cloud account and add the required permissions based on your needs.

## Impact

After enhanced authentication is used, if a RAM user or role attempts to perform an unauthorized operation, the ACK console or API returns an error message that contains the following content: RAM policy Forbidden or STSToken policy Forbidden. The RAM action that is required to perform the operation is also included in the error message.

The following error message contains a RAM action named cs:DescribeEvents:

```
RAM policy Forbidden for action cs:DescribeEvents
```

The following table lists API operations and the RAM actions that are required to call the API operations. If your RAM user or role is unauthorized to call the API operations in the following table, log on to the RAM console and grant the required permissions to the RAM user or role.

Operation

RAM Action

Description

DescribeEvents

cs:DescribeEvents

[Queries user events](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeEvents?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fB1NhBR)

StartAlert

cs:StartAlert

[Enables an alert rule](https://next.api.alibabacloud.com/document/CS/2015-12-15/StartAlert?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fB1NhBR)

StopAlert

cs:StopAlert

[Disables an alert rule](https://next.api.alibabacloud.com/document/CS/2015-12-15/StopAlert?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fB1NhBR)

DeleteAlertContact

cs:DeleteAlertContact

[Deletes an alert contact](https://next.api.alibabacloud.com/document/CS/2015-12-15/DeleteAlertContact?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fB1NhBR)

DeleteAlertContactGroup

cs:DeleteAlertContactGroup

[Deletes an alert contact group](https://next.api.alibabacloud.com/document/CS/2015-12-15/DeleteAlertContactGroup?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fB1NhBR)

OpenAckService

cs:OpenAckService

[Activates ACK](https://next.api.alibabacloud.com/document/CS/2015-12-15/OpenAckService?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fB1NhBR)

DescribeClusterResources

cs:DescribeClusterResources

[Queries all resources in a cluster by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterResources?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeUserQuota

cs:DescribeUserQuota

[Queries resource quotas](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeUserQuota?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClustersV1

cs:DescribeClustersV1

[Queries the details about all clusters](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClustersV1?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeExternalAgent

cs:DescribeExternalAgent

[Queries a cluster registration proxy by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeExternalAgent?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeKubernetesVersionMetadata

cs:DescribeKubernetesVersionMetadata

[Queries the supported Kubernetes versions](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeKubernetesVersionMetadata?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusterAddonUpgradeStatus

cs:DescribeClusterAddonUpgradeStatus

[Queries the upgrade progress of cluster add-ons](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterAddonUpgradeStatus?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusters

cs:DescribeClusters

[Queries all clusters within the account, including Kubernetes clusters and Swarm clusters](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusters?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusterNamespaces

cs:DescribeClusterNamespaces

[Queries the namespaces in a cluster](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterNamespaces?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

ModifyCluster

cs:ModifyCluster

[Modifies the cluster configurations by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

MigrateCluster

cs:MigrateCluster

[Migrates a cluster](https://next.api.alibabacloud.com/document/CS/2015-12-15/MigrateCluster?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

UpdateK8sClusterUserConfigExpire

cs:UpdateK8sClusterUserConfigExpire

[Updates the expiration time of custom configurations](https://next.api.alibabacloud.com/document/CS/2015-12-15/UpdateK8sClusterUserConfigExpire?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusterNodes

cs:DescribeClusterNodes

[Queries the details about all nodes in a cluster by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterNodes?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusterAttachScripts

cs:DescribeClusterAttachScripts

[Queries the script that is used to add instances to a cluster](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterAttachScripts?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

GetUpgradeStatus

cs:GetUpgradeStatus

[Queries the upgrade progress of a cluster by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/GetUpgradeStatus?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

UpgradeCluster

cs:UpgradeCluster

[Upgrades a cluster by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/UpgradeCluster?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

PauseClusterUpgrade

cs:PauseClusterUpgrade

[Pauses the upgrade of a cluster](https://next.api.alibabacloud.com/document/CS/2015-12-15/PauseClusterUpgrade?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

CancelClusterUpgrade

cs:CancelClusterUpgrade

[Cancels the upgrade of a cluster](https://next.api.alibabacloud.com/document/CS/2015-12-15/CancelClusterUpgrade?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

CreateTemplate

cs:CreateTemplate

[Creates an orchestration template](https://next.api.alibabacloud.com/document/CS/2015-12-15/CreateTemplate?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeTemplates

cs:DescribeTemplates

[Queries the details about all orchestration templates](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeTemplates?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeTemplateAttribute

cs:DescribeTemplateAttribute

[Queries the details about an orchestration template by template ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeTemplateAttribute?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

UpdateTemplate

cs:UpdateTemplate

[Updates an orchestration template by template ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/UpdateTemplate?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DeleteTemplate

cs:DeleteTemplate

[Deletes an orchestration template by template ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DeleteTemplate?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

CreateKubernetesTrigger

cs:CreateKubernetesTrigger

[Creates a trigger for an application](https://next.api.alibabacloud.com/document/CS/2015-12-15/CreateKubernetesTrigger?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

GetKubernetesTrigger

cs:GetKubernetesTrigger

[Queries the triggers of an application by application name](https://next.api.alibabacloud.com/document/CS/2015-12-15/GetKubernetesTrigger?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DeleteKubernetesTrigger

cs:DeleteKubernetesTrigger

[Deletes a trigger by trigger ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DeleteKubernetesTrigger?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

InstallClusterAddons

cs:InstallClusterAddons

[Installs components in a cluster](https://next.api.alibabacloud.com/document/CS/2015-12-15/InstallClusterAddons?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeAddons

cs:DescribeAddons

[Queries the details about all supported components](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeAddons?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusterAddonsUpgradeStatus

cs:DescribeClusterAddonsUpgradeStatus

[Queries the upgrade progress of a component by component name](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterAddonsUpgradeStatus?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

DescribeClusterAddonsVersion

cs:DescribeClusterAddonsVersion

[Queries the details about all components in a cluster by cluster ID](https://next.api.alibabacloud.com/document/CS/2015-12-15/DescribeClusterAddonsVersion?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

ModifyClusterConfiguration

cs:ModifyClusterConfiguration

[Applies only to managed clusters](https://next.api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterConfiguration?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

UpgradeClusterAddons

cs:UpgradeClusterAddons

[Upgrades a component to a specified version by component name](https://next.api.alibabacloud.com/document/CS/2015-12-15/UpgradeClusterAddons?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

PauseComponentUpgrade

cs:PauseComponentUpgrade

[Pauses the upgrade of a component](https://next.api.alibabacloud.com/document/CS/2015-12-15/PauseComponentUpgrade?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

ResumeComponentUpgrade

cs:ResumeComponentUpgrade

[Resumes the upgrade of a component](https://next.api.alibabacloud.com/document/CS/2015-12-15/ResumeComponentUpgrade?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

CancelComponentUpgrade

cs:CancelComponentUpgrade

[Cancels the upgrade of a component](https://next.api.alibabacloud.com/document/CS/2015-12-15/CancelComponentUpgrade?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

UnInstallClusterAddons

cs:UnInstallClusterAddons

[Uninstalls a component by component name](https://next.api.alibabacloud.com/document/CS/2015-12-15/UnInstallClusterAddons?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

CreateAutoscalingConfig

cs:CreateAutoscalingConfig

[Configures auto scaling](https://next.api.alibabacloud.com/document/CS/2015-12-15/CreateAutoscalingConfig?spm=api-workbench.Product%20Home%20Page.0.0.32e01e0fWDleYg)

## Modify a RAM policy

The following example shows how to modify the RAM policy that is attached to a RAM user or role. For more information about RAM authorization, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).

Scenario 1: A RAM user can perform only the cs:Get\* action on a cluster and requires permissions on all read-only operations related to the cluster

The following code block shows the RAM policy when a RAM user can perform only the `cs:Get*` action on a cluster:

```
{
    "Statement": [
        {
            "Action": "cs:Get*",
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/c2e63856bcd714197****"
            ]
        }
    ],
    "Version": "1"
}
```

If the RAM user requires permissions on all read-only operations related to the cluster, modify the RAM policy as shown in the following code block:

```
{
    "Statement": [
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/c2e63856bcd714197****"
            ]
        }
    ],
    "Version": "1"
}
```

**Note** The `cs:Get*` action does not include all read-only operations. To grant the RAM user permissions on all read-only operations, you must add the `cs:List*` and `cs:Describe*` actions to the RAM policy.

Scenario 2: Grant a RAM user the permissions on an individual operation related to a cluster

To grant a RAM user the permissions on an individual operation related to a cluster, you need only to add the RAM action that corresponds to the operation in the RAM policy.

The following code block shows the current RAM policy:

```
{
    "Statement": [
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/c2e63856bcd714197****"
            ]
        }
    ],
    "Version": "1"
}
```

To grand the permissions on the `ModifyCluster` operation, you must add the corresponding RAM action `cs:ModifyCluster` to the RAM policy, as shown in the following code block:

```
{
    "Statement": [
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*",
                "cs:ModifyCluster"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/c2e63856bcd714197****"
            ]
        }
    ],
    "Version": "1"
}
```

Scenario 3: Grant a RAM user permissions on operations that are not specific to individual clusters

Some API operations are not specific to individual clusters, such as `CreateCluster`, `DescribeClusters`, and `DescribeEvents`. To grant a RAM user permissions on these operations, you must not specify cluster IDs in the `Resource` section.

The following code block shows the current RAM policy:

```
{
    "Statement": [
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/c2e63856bcd714197****"
            ]
        }
    ],
    "Version": "1"
}
```

To grant the permissions on the `DescribeEvents` operation, you must add the corresponding RAM action `cs:DescribeEvents` to the RAM policy, as shown in the following code block:

```
{
    "Statement": [
        {
            "Action": [
                "cs:DescribeEvents"
            ],
            "Effect": "Allow",
            "Resource": [
              "*"
            ]
        },
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/c2e63856bcd714197****"
            ]
        }
    ],
    "Version": "1"
}
```
