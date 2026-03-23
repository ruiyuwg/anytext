When multiple end users share an Elastic Desktop Service (EDS) environment, resource-level policies let you control which cloud computers, regions, or resource types each RAM user can manage. This reduces the risk of data leaks and unauthorized changes.

## Prerequisites

Before you begin, make sure that you have:

-   RAM user accounts for each person who needs restricted access. See [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540)
    
-   Cloud computer IDs and region IDs for the resources you want to reference in your policies (available in the EDS console)
    

## Restrict access to specific cloud computers

In this scenario, two cloud computers already exist: **desktop-1** and **desktop-2**. The policy grants a RAM user full access to desktop-1 and explicitly denies access to desktop-2.

### Step 1: Create the cloud computers

Create two cloud computers named desktop-1 and desktop-2. See [Create cloud computers](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3#task-1963849).

### Step 2: Create a custom policy

In the RAM console, create a custom policy with the following JSON. See [Create custom policies](/help/en/ram/create-a-custom-policy-1#task-2149286).

This policy allows the RAM user to view, modify, and delete resources of desktop-1 in the EDS console or through the EDS API. It denies all operations on desktop-2.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ecd:*",
      "Resource": "acs:ecd:cn-shanghai:<account-id>:ecddesktop/<desktop-1-id>"
    },
    {
      "Effect": "Deny",
      "Action": "ecd:*",
      "Resource": "acs:ecd:cn-shanghai:<account-id>:ecddesktop/<desktop-2-id>"
    },
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": [
        "acs:ecd:*:*:officesite/*",
        "acs:ecd:*:*:ecdpolicy/*",
        "acs:ecd:*:*:ecdimage/*",
        "acs:ecd:*:*:ecdbundle/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ecd:DescribeRegions"
      ],
      "Resource": "*"
    }
  ]
}
```

**Note**

Replace the following placeholders before saving the policy.

**Placeholder**

**Replace with**

**Example**

`<account-id>`

Your Alibaba Cloud account ID

`128985087662****`

`<desktop-1-id>`

The ID of the cloud computer to allow

`ecd-akk6qnr7cc9yq****`

`<desktop-2-id>`

The ID of the cloud computer to deny

`ecd-3d3y5w4vd56a8****`

**Statement breakdown:**

**Statement**

**Effect**

**Scope**

1

Allow

All EDS actions on desktop-1 in the China (Shanghai) region

2

Deny

All EDS actions on desktop-2 in the China (Shanghai) region

3

Allow

All actions on supporting resources (office sites, policies, images, bundles) across all regions. Required for the EDS console to function.

4

Allow

The `DescribeRegions` action on all resources. Required for region selection in the EDS console.

### Step 3: Attach the policy to a RAM user

Attach the custom policy to the RAM user whose permissions you want to restrict. See [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

### Step 4: Verify the policy

Log in as the RAM user and attempt to view, modify, or delete desktop-1 and desktop-2 in the EDS console or through the EDS API.

**Expected results:**

**Cloud computer**

**Result**

desktop-1

All operations succeed.

desktop-2

A "no permission" error message appears, confirming that the policy is in effect.

![No permission error message](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6934766961/p466275.png)

## Restrict cloud computer creation to a specific region

In this scenario, the policy allows a RAM user to manage cloud computers only in the China (Shanghai) region. Only operations in the China (Shanghai) region are allowed. Operations in all other regions are not permitted because no Allow statement covers them.

### Step 1: Log on to the RAM console

Log on to the [RAM console](https://ram.console.alibabacloud.com/).

### Step 2: Create a custom policy

Create a custom policy with the following JSON. See [Create custom policies](/help/en/ram/create-a-custom-policy-1#task-2149286).

This policy allows the RAM user to create, view, and delete cloud computers only in the China (Shanghai) region using the EDS console or the EDS API.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ecd:*",
      "Resource": "acs:ecd:cn-shanghai:<account-id>:*"
    },
    {
      "Effect": "Deny",
      "Action": "ecd:*",
      "Resource": "acs:ecd:cn-hangzhou:<account-id>:*"
    },
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": [
        "acs:ecd:*:*:officesite/*",
        "acs:ecd:*:*:ecdpolicy/*",
        "acs:ecd:*:*:ecdimage/*",
        "acs:ecd:*:*:ecdbundle/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ecd:DescribeRegions"
      ],
      "Resource": "*"
    }
  ]
}
```

**Note**

Replace the following placeholder before saving the policy.

**Placeholder**

**Replace with**

**Example**

`<account-id>`

Your Alibaba Cloud account ID

`128985087662****`

**Statement breakdown:**

**Statement**

**Effect**

**Scope**

1

Allow

All EDS actions on all resources in the China (Shanghai) region

2

Deny

All EDS actions on all resources in the China (Hangzhou) region

3

Allow

All actions on supporting resources (office sites, policies, images, bundles) across all regions. Required for the EDS console to function.

4

Allow

The `DescribeRegions` action on all resources. Required for region selection in the EDS console.

### Step 3: Attach the policy to a RAM user

Attach the custom policy to the RAM user whose permissions you want to restrict. See [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

### Step 4: Verify the policy

Log in as the RAM user and attempt to create a cloud computer in the EDS console or through the EDS API.

**Expected results:**

**Region**

**Result**

China (Shanghai)

Create, view, and delete operations succeed.

China (Hangzhou)

A "no permission" error message appears, confirming that the policy is in effect.

![No permission error message](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6934766961/p467257.png)

## ARN format for EDS resources

Resource Access Management (RAM) policies reference resources by their Alibaba Cloud Resource Name (ARN). EDS resource ARNs follow this format:

```
acs:ecd:<region>:<account-id>:<resource-type>/<resource-id>
```

**Field**

**Description**

**Example**

`acs`

Alibaba Cloud Service prefix (fixed)

`acs`

`ecd`

EDS service code (fixed)

`ecd`

`<region>`

Region ID where the resource resides. Use `*` for all regions.

`cn-shanghai`

`<account-id>`

Your Alibaba Cloud account ID. Use `*` for all accounts.

`128985087662****`

`<resource-type>/<resource-id>`

Resource type and its unique ID. Use `*` for all resources of that type.

`ecddesktop/ecd-akk6qnr7cc9yq****`

### EDS resource types

**Resource type**

**ARN pattern**

**Description**

Cloud computer

`ecddesktop/<desktop-id>`

A specific cloud computer instance

Office site

`officesite/<officesite-id>`

A virtual office network

Policy

`ecdpolicy/<policy-id>`

An EDS security policy

Image

`ecdimage/<image-id>`

A cloud computer image

Bundle

`ecdbundle/<bundle-id>`

A desktop specification package

## Supported regions

Resource-level policies are available in the following regions.

**Region**

**Region ID**

China (Hangzhou)

cn-hangzhou

China (Shanghai)

cn-shanghai

China (Shenzhen)

cn-shenzhen

China (Beijing)

cn-beijing

Singapore

ap-southeast-1

Japan (Tokyo)

ap-northeast-1

Philippines (Manila)

ap-southeast-6

## Related information

-   [Policy overview](/help/en/ram/policy-overview#concept-tfz-4wf-xdb)
    
-   [What is RAM?](/help/en/ram/product-overview/what-is-ram#concept-oyr-zzv-tdb)
