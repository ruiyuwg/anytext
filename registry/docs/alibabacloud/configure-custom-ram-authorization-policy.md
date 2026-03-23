Create custom Resource Access Management (RAM) policies to grant fine-grained permissions on Platform for AI (PAI) computing resources, including resource pools and resource quotas.

## Resource hierarchy

PAI organizes computing resources into two levels: resource pools and resource quotas.

### Resource pool

A resource pool holds purchased computing resources for AI development. These resources are organized into dedicated resource groups. Cloud-native resources in a resource pool include general computing resources and Lingjun resources.

For more information, see [Overview](/help/en/pai/user-guide/untitled-document-1699340310864).

### Resource quota

A resource quota is a subset of AI computing resources drawn from the resource pool. After you associate a resource quota with a workspace, workspace members use those resources for AI development and online service deployment.

Resource quotas follow a tree structure:

-   A **root resource quota** is created directly from resource pool resources.
    
-   Each root resource quota divides into one or more **child resource quotas**.
    
-   Each child resource quota further divides into additional child resource quotas.
    

For more information, see [Overview](/help/en/pai/user-guide/resource-quota-overview).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8491613771/CAEQJRiBgMC9zufh.hgiIDAyOWIyMDE1MWE4MDQ1MjRiZGZmOTQ4MjQ5NTIwY2Iw4199921_20240131212402.740.svg)

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account
    
-   Permissions to create RAM policies and attach them to RAM users
    

## Procedure

1.  Create a RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
2.  Create a custom policy on the JSON tab. For more information, see the "Create a custom policy on the JSON tab" section in [Create custom policies](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2). Use the policy examples in the following sections as a reference.
    
3.  Attach the custom policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

## ARN reference

PAI resources use the following Alibaba Cloud Resource Name (ARN) patterns in authorization policies:

**Resource type**

**ARN pattern**

**Example**

Specific dedicated resource group

`acs:pai:*:*:resourcegroup/{name}`

`acs:pai:*:*:resourcegroup/resourcegroup1`

All resource quotas

`acs:pai:*:*:quota/*`

\--

Specific root resource quota

`acs:pai:*:*:quota/{quotaId}`

`acs:pai:*:*:quota/quota1`

Children of a root resource quota

`acs:pai:*:*:quota/{quotaId}/*`

`acs:pai:*:*:quota/quota1/*`

Specific child resource quota (any parent)

`acs:pai:*:*:quota/*/{quotaId}`

`acs:pai:*:*:quota/*/quota1.2`

Children of a child resource quota (any parent)

`acs:pai:*:*:quota/*/{quotaId}/*`

`acs:pai:*:*:quota/*/quota1.2/*`

## API action reference

The following table lists the PAI, Virtual Private Cloud (VPC), and Elastic Compute Service (ECS) API actions used in authorization policies.

**Action**

**Description**

`pai:*ResourceGroup*`

All resource group operations (wildcard)

`pai:GetResourceGroup`

Retrieve details of a dedicated resource group

`pai:ListResourceGroups`

List dedicated resource groups

`pai:UpdateResourceGroup`

Update a dedicated resource group

`pai:CreateQuota`

Create a resource quota

`pai:UpdateQuota`

Update a resource quota

`pai:ScaleQuota`

Scale a resource quota

`pai:DeleteQuota`

Delete a resource quota

`pai:GetQuota`

Retrieve details of a resource quota

`pai:ListQuotas`

List resource quotas

`vpc:DescribeVpcs`

List VPCs

`vpc:DescribeVSwitches`

List vSwitches

`ecs:DescribeSecurityGroups`

List security groups

## Policy examples

### Manage the resource pool

**Scenario:** Grant a RAM user full management permissions over the resource pool, including the ability to view, create, update, and delete dedicated resource groups.

**What this policy grants:** All resource group operations on all dedicated resource groups, plus read access to VPC and security group information.

**Note**

VPC permissions are required because creating a dedicated resource group on the **Resource Pool** page in the PAI console requires VPC configuration.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "pai:*ResourceGroup*"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "vpc:DescribeVpcs",
        "vpc:DescribeVSwitches",
        "ecs:DescribeSecurityGroups"
      ],
      "Resource": "*"
    }
  ]
}
```

### Create, scale, and delete root resource quotas

**Scenario:** Grant a RAM user permissions to create, update, scale, or delete root resource quotas, but restrict which dedicated resource groups the user draws resources from.

**What this policy grants:**

-   Read and update access to three specific dedicated resource groups: `resourcegroup1`, `resourcegroup2`, and `resourcegroup3`.
    
-   Full quota management on all resource quotas created from those resource groups.
    

A root resource quota contains resources from one or more dedicated resource groups. This policy requires both resource pool permissions (to access the source resource groups) and quota permissions.

The following example limits the RAM user to three dedicated resource groups. The ARN `acs:pai:*:*:quota/*` grants management of all resource quotas created from those resource groups.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "pai:GetResourceGroup",
        "pai:ListResourceGroups",
        "pai:UpdateResourceGroup"
      ],
      "Resource": [
        "acs:pai:*:*:resourcegroup/resourcegroup1",
        "acs:pai:*:*:resourcegroup/resourcegroup2",
        "acs:pai:*:*:resourcegroup/resourcegroup3"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "pai:CreateQuota",
        "pai:UpdateQuota",
        "pai:ScaleQuota",
        "pai:DeleteQuota",
        "pai:GetQuota",
        "pai:ListQuotas"
      ],
      "Resource": [
        "acs:pai:*:*:quota/*"
      ]
    }
  ]
}
```

### Manage a root resource quota

**Scenario:** Grant a RAM user permissions to manage a specific root resource quota and its child resource quotas, without granting resource pool permissions.

**What this policy grants** (using `quota1` as an example):

-   View `quota1`.
    
-   Update the metadata of `quota1`, such as the tag and description.
    
-   Create, update, scale, and delete child resource quotas under `quota1`.
    

This policy contains two statements:

**Statement**

**Scope**

**Actions**

1

Child resource quotas of `quota1` (`acs:pai:*:*:quota/quota1/*`)

CreateQuota, UpdateQuota, ScaleQuota, DeleteQuota, GetQuota, ListQuotas

2

`quota1` itself (`acs:pai:*:*:quota/quota1`)

UpdateQuota, GetQuota, ListQuotas

**Note**

The second statement grants only read and update access to `quota1` itself. Full create, scale, and delete operations apply only to its child resource quotas in the first statement.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "pai:CreateQuota",
        "pai:UpdateQuota",
        "pai:ScaleQuota",
        "pai:DeleteQuota",
        "pai:GetQuota",
        "pai:ListQuotas"
      ],
      "Resource": [
        "acs:pai:*:*:quota/quota1/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "pai:UpdateQuota",
        "pai:GetQuota",
        "pai:ListQuotas"
      ],
      "Resource": [
        "acs:pai:*:*:quota/quota1"
      ]
    }
  ]
}
```

### Manage a child resource quota

**Scenario:** Grant a RAM user permissions to manage a specific child resource quota and its own child resource quotas.

**What this policy grants** (using `quota1.2` as an example):

-   View `quota1.2`.
    
-   Update the metadata of `quota1.2`, such as the tag and description.
    
-   Create, update, scale, and delete child resource quotas under `quota1.2`.
    

This policy contains two statements:

**Statement**

**Scope**

**Actions**

1

Child resource quotas of `quota1.2` (`acs:pai:*:*:quota/*/quota1.2/*`)

CreateQuota, UpdateQuota, ScaleQuota, DeleteQuota, GetQuota, ListQuotas

2

`quota1.2` itself (`acs:pai:*:*:quota/*/quota1.2`)

UpdateQuota, GetQuota, ListQuotas

**Note**

The wildcard `*` before `quota1.2` in the ARN matches any parent path in the quota hierarchy.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "pai:CreateQuota",
        "pai:UpdateQuota",
        "pai:ScaleQuota",
        "pai:DeleteQuota",
        "pai:GetQuota",
        "pai:ListQuotas"
      ],
      "Resource": [
        "acs:pai:*:*:quota/*/quota1.2/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "pai:UpdateQuota",
        "pai:GetQuota",
        "pai:ListQuotas"
      ],
      "Resource": [
        "acs:pai:*:*:quota/*/quota1.2"
      ]
    }
  ]
}
```

### Add VPC permissions for Lingjun resource quotas

**Scenario:** Grant VPC read permissions required when creating root or child resource quotas that use Lingjun resources in the China (Ulanqab) region.

**What this policy grants:** Read access to VPCs, vSwitches, and security groups. Append this statement to any quota management policy when VPC configuration is needed.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "vpc:DescribeVpcs",
        "vpc:DescribeVSwitches",
        "ecs:DescribeSecurityGroups"
      ],
      "Resource": "*"
    }
  ]
}
```
