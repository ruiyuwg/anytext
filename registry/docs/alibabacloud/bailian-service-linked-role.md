Model Studio uses service-linked roles (SLRs) to access other Alibaba Cloud services. SLRs are automatically created in RAM when you first authorize a feature.

## Role summary

> To view all service-linked roles, go to the **Roles** page in the [RAM console](https://ram.console.alibabacloud.com/).

**Role name**

**Feature**

**Grants access to**

`AliyunServiceRoleForSFMAccessFC`

[Workflow applications](/help/en/model-studio/workflow-application/)

[Function Compute (FC)](/help/en/functioncompute/fc/product-overview/what-is-function-compute)

`AliyunServiceRoleForSFMDataHubOSSImport`

[Data Management](/help/en/model-studio/manage-data/)

[Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss)

`AliyunServiceRoleForSFMAccessingMNS`

[Data Management](/help/en/model-studio/manage-data/) uses this role to access [Simple Message Queue (SMQ, formerly MNS)](/help/en/mns/product-overview/what-is-mns) queues for [OSS](/help/en/oss/user-guide/what-is-oss) change notifications

## AliyunServiceRoleForSFMAccessFC

### Scenario

Workflow applications use this role to access Function Compute (FC) resources. The role is automatically created when you first authorize a workflow to use FC.

### Permissions

System policy: `AliyunServiceRolePolicyForSFMAccessFC`

```
{
  "Action": [
    "fc:ListFunctions",
    "fc:InvokeFunction"
  ],
  "Resource": "*",
  "Effect": "Allow"
}
```

**Permission**

**What it allows**

`fc:ListFunctions`

List available functions in FC

`fc:InvokeFunction`

Invoke functions from workflow nodes

### Delete this role

**Warning**

After deletion, workflow applications cannot create or invoke FC nodes. Proceed with caution.

Before deletion:

1.  Remove all Function Compute nodes from published workflow applications.
    
2.  Republish the affected workflows.
    

For deletion steps, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q).

## AliyunServiceRoleForSFMDataHubOSSImport

### Scenario

Data Management uses this role to access OSS resources. The role is automatically created when you first authorize OSS data import.

### Permissions

System policy: `AliyunServiceRolePolicyForSFMDataHubOSSImport`

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "oss:ListBuckets",
        "oss:GetBucketLocation",
        "oss:GetBucketTagging"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "oss:DoMetaQuery",
        "oss:GetBucketInfo",
        "oss:GetBucketStat",
        "oss:GetBucketTransferAcceleration",
        "oss:GetCnameToken",
        "oss:GetMetaQueryStatus",
        "oss:GetObject",
        "oss:GetObjectTagging",
        "oss:DescribeRegions",
        "oss:ListObjects",
        "oss:ListObjectVersions"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "oss:BucketTag/bailian-datahub-access": [
            "read"
          ]
        }
      }
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "datahub.sfm.aliyuncs.com"
        }
      }
    }
  ]
}
```

Policy statements:

**Statement**

**Scope**

**What it allows**

1

All OSS buckets

List buckets and retrieve bucket location and tags

2

Buckets tagged `bailian-datahub-access: read`

Read objects, query metadata, and list object versions

3

RAM (self-cleanup)

Delete this service-linked role

> Statement 2 applies only to buckets tagged `bailian-datahub-access: read`. Buckets without this tag are not accessible.

### Delete this role

**Warning**

After deletion, Data Management cannot access OSS resources. Proceed with caution.

Before deletion:

1.  Verify no OSS import tasks are in progress.
    

For deletion steps, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q).

## AliyunServiceRoleForSFMAccessingMNS

### Scenario

Data Management uses this role to access Simple Message Queue (SMQ, formerly MNS) queues for OSS change notifications. This enables automatic sync when your OSS data changes. The role is automatically created when you first authorize OSS change notifications.

### Permissions

System policy: `AliyunServiceRolePolicyForSFMAccessingMNS`

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "mns:GetQueueAttributes",
        "mns:GetSubscriptionAttributes",
        "mns:GetTopicAttributes",
        "mns:ListEventNotifications",
        "mns:GetAccountAttributes",
        "mns:ListEvents",
        "mns:ListProducts",
        "mns:ListQueue",
        "mns:ListSubscriptionByTopic",
        "mns:ListTagResources",
        "mns:ListTopic",
        "mns:ReceiveMessage",
        "mns:DeleteMessage"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "mns:CreateQueue",
        "mns:DeleteQueue",
        "mns:SetQueueAttributes"
      ],
      "Resource": "acs:mns:*:*:/queues/bailian-oss-event*"
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "mns-access.sfm.aliyuncs.com"
        }
      }
    }
  ]
}
```

Policy statements:

**Statement**

**Scope**

**What it allows**

1

All SMQ resources

Read queue attributes, list topics and subscriptions, receive and delete messages

2

Queues named `bailian-oss-event*` only

Create, delete, and configure queues for OSS event processing

3

RAM (self-cleanup)

Delete this service-linked role

### Delete this role

**Important**

This policy is defined for Model Studio use only. Do not modify, delete, or grant it to any RAM identity other than this service-linked role.

For deletion steps, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q).
