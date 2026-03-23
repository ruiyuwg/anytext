Resource Access Management (RAM) is a service provided by Alibaba Cloud to manage user identities and resource access permissions. RAM allows you to create and manage multiple RAM users within an Alibaba Cloud account. This topic describes how to use RAM policies to control access from RAM users to Alibaba Cloud resources. For example, you can authorize a RAM user to manage only a specific File Storage NAS file system.

**Warning**

When you grant permissions to RAM users, we recommend that you grant the least permissions to each RAM user. If you grant more permissions than necessary, security risks may arise.

## Procedure

1.  Create a RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Select the permission policies that you want to grant to the RAM user.
    
    Permission policies include **system policies** and **custom policies**.
    
    -   **System policies**: the default permission policies that are provided by Alibaba Cloud. The following system policies are commonly used in File Storage NAS:
        
        -   AliyunNASFullAccess (not recommended): grants a RAM user full access to a NAS file system. To ensure the security of your NAS file system, we recommend that you do not grant this permission to a RAM user.
            
        -   AliyunNASReadOnlyAccess: grants a RAM user read-only access to a NAS file system.
            
    -   **Custom policies**: the permission policies that are customized. Custom policies allow you to manage permissions in a more fine-grained and flexible manner.
        
        You can create custom policies by writing scripts based on your business requirements. The following examples are provided for reference. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-2149286).
        
    
3.  Grant permissions to the RAM user.
    
    Attach the permission policies selected in [Step 2](#li-csk-d20-n4w) to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

## Example 1: Grant a RAM user the permissions on a NAS file system

### Grant a RAM user full access to a NAS file system

`07d****294` is the ID of the file system. Replace the ID with the actual value.

**Note**

You cannot grant a RAM user the permissions to view a specific NAS file system. If you want to grant a RAM user full access to a specific NAS file system, grant the RAM user the permissions to view all NAS file systems and then grant the RAM user the permissions to delete and modify a specific NAS file system.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "nas:*",
            "Resource": [
                  "acs:nas:*:*:filesystem/07d****294"
            ]
        },
        {
            "Effect": "Allow",
            "Action": "nas:CreateMountTarget",
            "Resource": "acs:vpc:*:*:vswitch/*"
        },
        {
            "Effect": "Allow",
            "Action": "cms:Query*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "nas:DescribeFileSystems",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "nas:DescribeAccessGroups",
                "nas:DescribeAccessRules"
            ],
            "Resource": "acs:nas:*:*:accessgroup/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "vpc:DescribeVpcs",
                "vpc:DescribeVSwitches"
            ],
            "Resource": "*"
        }
    ]
}
```

### Grant a RAM user the permissions to modify a NAS file system

`07d****294` is the ID of the file system. Replace the ID with the actual value.

```
{
    "Statement": [{
        "Effect": "Allow",
        "Action": [
            "nas:DescribeFileSystems",
            "nas:ModifyFileSystem"
        ],
        "Resource": "acs:nas:*:*:filesystem/07d****294"
    }],
    "Version": "1"
}
```

### Grant a RAM user the permissions to view all NAS file systems

```
{
    "Statement": [{
        "Effect": "Allow",
        "Action": "nas:DescribeFileSystems",
        "Resource": "*"
    }],
    "Version": "1"
}
```

## Example 2: Grant a RAM user the permissions on the mount targets of a NAS file system

The following sample code shows how to grant a RAM user full access to the mount targets of a NAS file system whose ID is `07d****294`.

```
{
    "Statement": [{
        "Effect": "Allow",
        "Action": [
            "nas:CreateMountTarget",
            "nas:DescribeMountTargets",
            "nas:ModifyMountTarget",
            "nas:DeleteMountTarget"
        ],
        "Resource": [
            "acs:nas:*:*:filesystem/07d****294",
            "acs:vpc:*:*:vswitch/*"
        ]
    }],
    "Version": "1"
}
```

## Example 3: Grant a RAM user the permissions on the permission groups of a NAS file system

The following sample code shows how to grant a RAM user full access to the permission groups of a NAS file system.

```
{
    "Statement": [{
        "Effect": "Allow",
        "Action": [
            "nas:CreateAccessGroup",
            "nas:DescribeAccessGroups",
            "nas:ModifyAccessGroup",
            "nas:DeleteAccessGroup",
            "nas:CreateAccessRule",
            "nas:DescribeAccessRules",
            "nas:ModifyAccessRule",
            "nas:DeleteAccessRule"
        ],
        "Resource": "acs:nas:*:*:accessgroup/*"
    }],
    "Version": "1"
}
```

## Example 4: Grant a RAM user the permissions to view the monitoring metrics of all NAS file systems

The following sample code shows how to grant a RAM user the permissions to view the monitoring metrics of all NAS file systems.

```
{
    "Statement": [{
        "Effect": "Allow",
        "Action": "cms:Query*",
        "Resource": "*"
    }],
    "Version": "1"
}
```

## Example 5: Grant a RAM user the permissions to manage the recycle bin of a NAS file system

### Grant a RAM user full access to the recycle bin of a NAS file system

`07d****294` is the ID of the file system. Replace the ID with the actual value.

```
{
    "Statement": [{
            "Effect": "Allow",
            "Action": [
                "nas:EnableRecycleBin",
                "nas:DisableAndCleanRecycleBin ",
                "nas:UpdateRecycleBinAttribute",
                "nas:GetRecycleBinAttribute",
                "nas:CreateRecycleBinRestoreJob",
                "nas:CreateRecycleBinDeleteJob",
                "nas:CancelRecycleBinJob",
                "nas:ListRecycleBinJobs",
                "nas:ListRecycledDirectoriesAndFiles",
                "nas:ListRecentlyRecycledDirectories"
            ],
            "Resource": [
                "acs:nas:*:*:filesystem/07d****294"
            ]
        }
    ],
    "Version": "1"
}
```

### Grant a RAM user the permissions to restore files temporarily stored in the recycle bin of a NAS file system

`07d****294` is the ID of the file system. Replace the ID with the actual value.

```
{
    "Statement": [{
            "Effect": "Allow",
            "Action": [
                "nas:GetRecycleBinAttribute",
                "nas:CreateRecycleBinRestoreJob",
                "nas:CancelRecycleBinJob",
                "nas:ListRecycleBinJobs",
                "nas:ListRecycledDirectoriesAndFiles",
                "nas:ListRecentlyRecycledDirectories"
            ],
            "Resource": [
                "acs:nas:*:*:filesystem/07d****294"
            ]
        }
    ],
    "Version": "1"
}
```

### Grant a RAM user the permissions to permanently delete files from the recycle bin of a NAS file system

`07d****294` is the ID of the file system. Replace the ID with the actual value.

```
{
    "Statement": [{
            "Effect": "Allow",
            "Action": [
                "nas:GetRecycleBinAttribute",
                "nas:CreateRecycleBinDeleteJob",
                "nas:CancelRecycleBinJob",
                "nas:ListRecycleBinJobs",
                "nas:ListRecycledDirectoriesAndFiles",
                "nas:ListRecentlyRecycledDirectories"
            ],
            "Resource": [
                "acs:nas:*:*:filesystem/07d****294"
            ]
        }
    ],
    "Version": "1"
}
```

### Grant a RAM user the permissions to modify the configurations for the recycle bin of a NAS file system

`07d****294` is the ID of the file system. Replace the ID with the actual value.

```
{
    "Statement": [{
            "Effect": "Allow",
            "Action": [
                "nas:EnableRecycleBin",
                "nas:UpdateRecycleBinAttribute",
                "nas:DisableAndCleanRecycleBin",
                "nas:GetRecycleBinAttribute"
            ],
            "Resource": [
                "acs:nas:*:*:filesystem/07d****294"
            ]
        }
    ],
    "Version": "1"
}
```

## Appendix: Custom policies

You can use the RAM console to create a custom policy. If you set **Configuration Mode** to **Script**, you must configure the parameters in the Policy Document section based on the JSON template. The following table lists the values of the Action and Resource parameters. For more information, see [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb).

**API**

**Action**

**Resource**

**Description**

File system

CreateFileSystem

nas:CreateFileSystem

acs:nas:<region>:<account-id>:filesystem/\*

Creates a file system.

DeleteFileSystem

nas:DeleteFileSystem

acs:nas:<region>:<account-id>:filesystem/<filesystemid>

Deletes a file system.

ModifyFileSystem

nas:ModifyFileSystem

acs:nas:<region>:<account-id>:filesystem/<filesystemid>

Modifies a file system.

DescribeFileSystems

nas:DescribeFileSystems

acs:nas:<region>:<account-id>:filesystem/<filesystemid>

Queries file systems.

Mount target

CreateMountTarget

nas:CreateMountTarget

-   acs:nas:<region>:<account-id>:filesystem/<filesystemid>
    
-   acs:vpc:\*:\*:vswitch/\*
    

Creates a mount target.

DeleteMountTarget

nas:DeleteMountTarget

acs:nas:<region>:<account-id>:filesystem/<filesystemid>

Deletes a mount target.

ModifyMountTarget

nas:ModifyMountTarget

acs:nas:<region>:<account-id>:filesystem/<filesystemid>

Modifies a mount target.

DescribeMountTargets

nas:DescribeMountTargets

acs:nas:<region>:<account-id>:filesystem/<filesystemid>

Queries the mount targets of a file system.

Permission group

CreateAccessGroup

nas:CreateAccessGroup

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Creates a permission group.

DeleteAccessGroup

nas:DeleteAccessGroup

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Deletes a permission group.

ModifyAccessGroup

nas:ModifyAccessGroup

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Modifies a permission group.

DescribeAccessGroups

nas:DescribeAccessGroups

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Queries the permission groups of a file system.

CreateAccessRule

nas:CreateAccessRule

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Creates a rule for a permission group.

DeleteAccessRule

nas:DeleteAccessRule

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Deletes a rule from a permission group.

ModifyAccessRule

nas:ModifyAccessRule

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Modifies a rule of a permission group.

DescribeAccessRule

nas:DescribeAccessRule

acs:nas:<region>:<account-id>:accessgroup/<accessgroupname>

Queries the rules of a permission group.

## FAQ

-   [Why do I need to use RAM to grant the required permissions when I create a mount target in the classic network?](/help/en/nas/user-guide/faq-about-advanced-management-features#section-rz6-dpp-fmb)
    
-   [How do I obtain an AccessKey pair?](/help/en/nas/user-guide/faq-about-advanced-management-features#section-47e-l1q-tvq)
