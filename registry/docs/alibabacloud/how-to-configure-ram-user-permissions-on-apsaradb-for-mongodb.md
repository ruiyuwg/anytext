Resource Access Management (RAM) provides fine-grained access control for ApsaraDB for MongoDB. Use RAM to grant specific management permissions to RAM users and enforce the principle of least privilege.

**Note** RAM controls cloud platform management operations such as creating or deleting instances. It does not control database-level access such as reading or writing data. To manage database-level access, configure users and roles within MongoDB.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with RAM administrator privileges
    
-   A RAM user created in the [RAM console](https://ram.console.alibabacloud.com/). For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540)
    

## Grant permissions to a RAM user

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the target RAM user and click **Add Permissions** in the **Actions** column. > **Tip:** To grant permissions to multiple RAM users at once, select the RAM users and click **Add Permissions** at the bottom of the page.
    
4.  In the **Grant Permission** panel, configure the following parameters:
    
    **Important**
    
    If you select **Resource Group** for **Resource Scope**, make sure that ApsaraDB for MongoDB supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group). For more information about how to grant permissions on a resource group, see [Use a resource group to grant a RAM user the permissions to manage a specific ECS instance](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
    
    **Note** The system automatically identifies high-risk system policies such as AdministratorAccess and AliyunRAMFullAccess. Avoid attaching high-risk policies unless absolutely necessary.
    
    **Parameter**
    
    **Description**
    
    **Resource Scope**
    
    **Account**: The policy takes effect on the current Alibaba Cloud account. **Resource Group**: The policy takes effect on a specific resource group.
    
    **Principal**
    
    The RAM user to which permissions are granted. The current RAM user is selected by default.
    
    **Policy**
    
    The policy to attach. Select one or more system policies or custom policies.
    
5.  Click **Grant permissions**.
    
6.  Click **Close**.
    

## System policies

ApsaraDB for MongoDB provides two system policies:

**Policy**

**Type**

**Description**

**AliyunMongoDBFullAccess**

Full access

Grants full management permissions on all ApsaraDB for MongoDB resources.

**AliyunMongoDBReadOnlyAccess**

Read-only

Grants read-only permissions on ApsaraDB for MongoDB resources. Limited to Describe\* operations.

Use **AliyunMongoDBFullAccess** for administrators who manage instances. Use **AliyunMongoDBReadOnlyAccess** for users who only need to view instance information, monitoring data, or backup status.

## Custom policies

Custom policies provide fine-grained access control over specific API operations and instances. For the full syntax reference, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).

### Resource description format

Specify resources in the `Resource` element using the following format:

```
acs:dds:$regionid:$accountid:dbinstance/$dbinstanceid
```

**Variable**

**Description**

**Example**

`$regionid`

Region ID of the instance. Use `*` for all regions.

`cn-hangzhou`, `*`

`$accountid`

Alibaba Cloud account ID. Use `*` for all accounts.

`1234567890`, `*`

`$dbinstanceid`

Instance ID. Use `*` for all instances.

`dds-bp1234567890`, `*`

**Resource description examples:**

**Target**

**Resource value**

A specific instance in a specific region

`acs:dds:cn-hangzhou:1234567890:dbinstance/dds-bp1234567890`

All instances in a specific region

`acs:dds:cn-hangzhou:*:dbinstance/*`

All instances across all regions

`acs:dds:*:*:dbinstance/*`

### Authorizable API operations

The following tables list all API operations that can be authorized through RAM.

#### Instance lifecycle

**Operation**

**Description**

`CreateDBInstance`

Creates an ApsaraDB for MongoDB instance.

`ModifyDBInstanceSpec`

Modifies the configurations of an ApsaraDB for MongoDB instance.

`DeleteDBInstance`

Deletes an ApsaraDB for MongoDB instance.

`RestartDBInstance`

Restarts an ApsaraDB for MongoDB instance.

`RenewDBInstance`

Renews an ApsaraDB for MongoDB instance.

#### Instance information

**Operation**

**Description**

`DescribeDBInstances`

Queries ApsaraDB for MongoDB instances.

`DescribeDBInstanceAttribute`

Queries the attributes of an ApsaraDB for MongoDB instance.

`ModifyDBInstanceDescription`

Modifies the description of an ApsaraDB for MongoDB instance.

`DescribeReplicaSetRole`

Queries the primary/secondary attribute of an ApsaraDB for MongoDB instance.

`DescribeDBInstancePerformance`

Queries the performance metrics of an ApsaraDB for MongoDB instance.

#### Security and access control

**Operation**

**Description**

`DescribeSecurityIps`

Queries the whitelists of an ApsaraDB for MongoDB instance.

`ModifySecurityIps`

Modifies the whitelists of an ApsaraDB for MongoDB instance.

#### Account management

**Operation**

**Description**

`DescribeAccounts`

Queries the database accounts of an ApsaraDB for MongoDB instance.

`ResetAccountPassword`

Resets the account password for an ApsaraDB for MongoDB instance.

`ModifyAccountDescription`

Modifies the description of a database account on an ApsaraDB for MongoDB instance.

#### Backup and restore

**Operation**

**Description**

`DescribeBackupPolicy`

Queries the backup policy of an ApsaraDB for MongoDB instance.

`ModifyBackupPolicy`

Modifies the backup policy of an ApsaraDB for MongoDB instance.

`CreateBackup`

Creates a backup for an ApsaraDB for MongoDB instance.

`RestoreDBInstance`

Restores the data of an ApsaraDB for MongoDB instance.

#### Network configuration

**Operation**

**Description**

`ModifyDBInstanceNetworkType`

Modifies the network type of an ApsaraDB for MongoDB instance.

### Custom policy examples

Copy and modify the following JSON policies to match your requirements.

#### Example 1: Read-only access to a specific instance

Grant read-only access to a single instance. Replace the region ID, account ID, and instance ID with your actual values.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dds:DescribeDBInstances",
        "dds:DescribeDBInstanceAttribute",
        "dds:DescribeDBInstancePerformance",
        "dds:DescribeReplicaSetRole",
        "dds:DescribeSecurityIps",
        "dds:DescribeAccounts",
        "dds:DescribeBackupPolicy"
      ],
      "Resource": "acs:dds:cn-hangzhou:1234567890:dbinstance/dds-bp1234567890"
    }
  ]
}
```

#### Example 2: Backup management only

Allow a RAM user to manage backups without granting access to instance configuration or security settings.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dds:DescribeBackupPolicy",
        "dds:ModifyBackupPolicy",
        "dds:CreateBackup",
        "dds:RestoreDBInstance",
        "dds:DescribeDBInstances"
      ],
      "Resource": "acs:dds:*:*:dbinstance/*"
    }
  ]
}
```

**Note** `dds:DescribeDBInstances` is included so that the RAM user can list instances in the console and navigate to the backup settings.

#### Example 3: Full access in a specific region

Grant full management permissions on all ApsaraDB for MongoDB instances in the China (Hangzhou) region only.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "dds:*",
      "Resource": "acs:dds:cn-hangzhou:*:dbinstance/*"
    }
  ]
}
```

## Core concepts

**Concept**

**Description**

**RAM user**

An identity created under your Alibaba Cloud account. Each RAM user has its own credentials and can be granted specific permissions to manage ApsaraDB for MongoDB instances through the console or API.

**System policy**

A predefined policy created and maintained by Alibaba Cloud. System policies cannot be modified.

**Custom policy**

A user-defined policy for fine-grained access to specific operations or instances. You can create, update, and delete custom policies based on your requirements.

**Resource scope**

The boundary within which a policy takes effect. Permissions can apply to the entire Alibaba Cloud account or to a specific resource group.

## Best practices

-   **Start with system policies.** Use **AliyunMongoDBFullAccess** or **AliyunMongoDBReadOnlyAccess** for most scenarios. Create custom policies only when finer control is required.
    
-   **Apply least-privilege access.** Grant only the minimum permissions a RAM user needs. For example, a monitoring user needs only `Describe*` operations, not `Modify*` or `Delete*` operations.
    
-   **Restrict resources by instance.** Use the resource description format to limit permissions to specific instances rather than granting access to all instances with a wildcard (`*`).
    
-   **Separate duties.** Assign different custom policies to different RAM users based on their roles. For example, separate backup operators from instance administrators.
    
-   **Review permissions regularly.** Audit RAM user permissions periodically and revoke permissions that are no longer needed.
    
-   **Avoid high-risk policies.** Do not attach AdministratorAccess or AliyunRAMFullAccess unless the RAM user requires broad access across all Alibaba Cloud services.
    

## References

-   [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540)
    
-   [Create a custom policy](/help/en/ram/create-a-custom-policy)
    
-   [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb)
    
-   [Services that work with RAM](/help/en/ram/product-overview/services-that-work-with-ram)
    
-   [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group)
