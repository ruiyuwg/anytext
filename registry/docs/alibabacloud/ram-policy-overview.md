A RAM policy is an authorization policy that is attached to a RAM identity, such as a RAM user, group, or role. You can use RAM policies to manage access permissions for RAM users or roles to Object Storage Service (OSS) resources. These policies define which operations the identity can perform and which resources it can access.

## How it works

A RAM policy uses identity-based authorization. You can attach the policy to a RAM user, group, or role. The policy defines the actions that the identity can perform on specific resources and under specific conditions.

When a RAM identity makes a request to OSS, OSS evaluates all relevant policies, including RAM policies and bucket policies, to determine access. The permission evaluation follows the **explicit deny takes precedence** rule:

1.  **Explicit deny takes precedence**: If a matching Deny statement exists in any policy, the request is **immediately denied**.
    
2.  **Explicit allow**: If no Deny statements match, but at least one Allow statement matches, the request is **allowed**.
    
3.  **Default deny**: If no Deny or Allow statements match, the request is **denied by default**.
    

OSS supports two types of RAM policies: system policies and custom policies. System policies are preconfigured by Alibaba Cloud. You can use them but cannot modify them. Custom policies are created and managed by you and offer more flexible permission configuration.

## Grant system policies

Alibaba Cloud creates system policies. You can grant them directly to RAM identities in the Resource Access Management (RAM) console. The following steps describe how to grant a system policy to a RAM user.

1.  Go to the [Users](https://ram.console.alibabacloud.com/users) page. In the Actions column of the target user, click **Add Permissions**.
    
2.  In the search box, enter the name of a system policy and select the target system policy. OSS supports the following two system policies:
    
    -   [AliyunOSSFullAccess](/help/en/ram/developer-reference/aliyunossfullaccess): Grants full management permissions for OSS.
        
    -   [AliyunOSSReadOnlyAccess](/help/en/ram/developer-reference/aliyunossreadonlyaccess): Grants read-only access to OSS.
        
3.  Click **Confirm New Authorization** to complete the authorization.
    

## Grant custom policies

You can create and manage custom policies. To grant a custom policy, you must first create the policy and then assign it to the target RAM identity.

### Create a custom policy

1.  Go to the [Policies](https://ram.console.alibabacloud.com/policies) page. Click **Create Policy**.
    
2.  Click the **Edit Script** tab. In the editor, enter an authorization policy in the JSON format. You can use the [RAM Policy Editor](https://gosspublic.alicdn.com/ram-policy-editor/index.html) to quickly generate policies.
    
    Example policy: Allows all operations on the `example-bucket` bucket and all objects in the bucket.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "oss:*",
          "Resource": [
            "acs:oss:*:*:example-bucket",
            "acs:oss:*:*:example-bucket/*"
          ]
        }
      ]
    }
    ```
    
    A complete authorization policy includes a **Version** and a **Statement**.
    
    -   **Version**: The version of the policy language. The value is always `1`. Do not change this value.
        
    -   **Statement**: The main body of the policy. It can contain one or more Allow or Deny rules. Each statement includes an **Effect**, an **Action**, a **Resource**, and a **Condition**.
        
        **Policy element**
        
        **Description**
        
        **Effect**
        
        The effect of the policy. Valid values are `Allow` or `Deny`.
        
        **Action**
        
        The specific action to perform on a resource. Supports wildcard characters such as `*`.
        
        **Resource**
        
        The scope of resources the policy applies to.
        
        **Condition**
        
        The condition under which the policy takes effect.
        
        When you configure multiple conditions, **all conditions must be met** (AND logic) for the policy to apply.
        
        For more information about authorization elements, see [Authorization syntax and elements](/help/en/oss/user-guide/authorization-syntax-and-elements).
        
3.  Click **OK**. Enter a **Policy Name**. Then click **OK** to complete the custom policy creation.
    

### **Step 2: Authorize the user identity**

After you create a custom policy, you must assign it to the target RAM identity. The following steps describe how to assign a custom policy to a RAM user.

1.  Go to the [Users](https://ram.console.alibabacloud.com/users) page. In the Actions column of the target user, click **Add Permissions**.
    
2.  In the search box, enter the name of your custom policy and select the target policy.
    
3.  Click **Confirm New Authorization** to complete the authorization.
    

## Common authorization scenarios

The following scenarios describe common use cases for RAM policies. These scenarios cover granting permissions, restricting access, and enforcing security controls. Each scenario includes a complete policy example. Before you use a policy, you must modify parameters, such as the bucket name and folder path, based on your requirements.

### Scenario 1: Grant full control of a bucket to a RAM user

This example shows how to grant a RAM user full control of the `mybucket` bucket.

**Important**

Granting full control of a bucket to a mobile application poses a high security risk. We recommend that you avoid this practice.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "oss:*",
      "Resource": [
        "acs:oss:*:*:mybucket",
        "acs:oss:*:*:mybucket/*"
      ]
    }
  ]
}
```

### Scenario 2: Prevent a RAM user from deleting files that match a pattern in a bucket

This example shows how to prevent a RAM user from deleting all .txt files whose names start with abc in the `mybucket` bucket.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": [
        "oss:DeleteObject"
      ],
      "Resource": [
        "acs:oss:*:*:mybucket/abc*.txt"
      ]
    }
  ]
}
```

### Scenario 3: Grant a RAM user permission to list and read all resources in a bucket

-   This example shows how to grant a RAM user permission to list and read all resources in the `mybucket` bucket using the OSS SDK or ossutil.
    
    **Note**
    
    The ListObjects action requires the resource to be the entire bucket.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "oss:ListObjects",
          "Resource": "acs:oss:*:*:mybucket"
        },
        {
          "Effect": "Allow",
          "Action": "oss:GetObject",
          "Resource": "acs:oss:*:*:mybucket/*"
        }
      ]
    }
    ```
    
-   This example shows how to grant a RAM user permission to list and read all resources in the `mybucket` bucket using the OSS console.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListBuckets",
            "oss:GetBucketStat",
            "oss:GetBucketInfo",
            "oss:GetBucketTagging",
            "oss:GetBucketLifecycle",
            "oss:GetBucketWorm",                      
            "oss:GetBucketVersioning", 
            "oss:GetBucketAcl" 
          ],    
          "Resource": "acs:oss:*:*:*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListObjects",
            "oss:GetBucketAcl"
          ],
          "Resource": "acs:oss:*:*:mybucket"
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:GetObject",
            "oss:GetObjectAcl"
          ],
          "Resource": "acs:oss:*:*:mybucket/*"
        }
      ]
    }
    ```
    

### Scenario 4: Prevent a RAM user from deleting a bucket

This example shows how to prevent a RAM user from deleting the `mybucket` bucket.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "oss:*",
      "Resource": [
        "acs:oss:*:*:mybucket",
        "acs:oss:*:*:mybucket/*"
      ]
    },
    {
      "Effect": "Deny",
      "Action": [
        "oss:DeleteBucket"
      ],
      "Resource": [
        "acs:oss:*:*:mybucket"
      ]
    }
  ]
}
```

### Scenario 5: Grant a RAM user permission to access multiple folders in a bucket

Assume that the `mybucket` bucket stores photos. The bucket contains folders that are named after cities. Each city folder contains subfolders that are named after years.

```
mybucket[Bucket]
  ├── beijing
  │   ├── 2014
  │   └── 2015
  └── hangzhou
      ├── 2014
      └── 2015 
```

You can grant a RAM user read-only access to the `mybucket/hangzhou/2014/` and `mybucket/hangzhou/2015/` folders. Folder-level permissions are an advanced feature. The complexity of the policy varies based on the use case. The following examples describe common approaches.

-   Grant a RAM user permission to read only the content of files in the `mybucket/hangzhou/2014/` and `mybucket/hangzhou/2015/` folders.
    
    If the RAM user knows the full paths of the files, the user can use the paths to directly read the files.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:GetObject"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket/hangzhou/2014/*",
            "acs:oss:*:*:mybucket/hangzhou/2015/*"
          ]
        }
      ]
    }
    ```
    
-   Grant a RAM user permission to list files in the `mybucket/hangzhou/2014/` and `mybucket/hangzhou/2015/` folders using ossutil or an API.
    
    If the RAM user does not know which files exist in the folders, you can add the `ListObjects` permission to allow the user to retrieve the folder content.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:GetObject"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket/hangzhou/2014/*",
            "acs:oss:*:*:mybucket/hangzhou/2015/*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListObjects"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket"
          ],
          "Condition":{
            "StringLike":{
              "oss:Prefix": [
                "hangzhou/2014/*",
                "hangzhou/2015/*"
              ]
            }
          }
        }
      ]
    }
    ```
    
-   Grant a RAM user permission to browse folders using the OSS console.
    
    When you use the OSS console to access the `mybucket/hangzhou/2014/` and `mybucket/hangzhou/2015/` folders, RAM users can start from the root directory and navigate layer by layer to the destination folder.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListBuckets",
            "oss:GetBucketStat",
            "oss:GetBucketInfo",
            "oss:GetBucketTagging",
            "oss:GetBucketLifecycle",
            "oss:GetBucketWorm",                      
            "oss:GetBucketVersioning", 
            "oss:GetBucketAcl" 
          ], 
          "Resource": [
            "acs:oss:*:*:*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:GetObject",
            "oss:GetObjectAcl"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket/hangzhou/2014/*",
            "acs:oss:*:*:mybucket/hangzhou/2015/*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListObjects"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket"
          ],
          "Condition": {
            "StringLike": {
              "oss:Delimiter": "/",
              "oss:Prefix": [
                "",
                "hangzhou/",
                "hangzhou/2014/*",
                "hangzhou/2015/*"
              ]
            }
          }
        }
      ]
    }
    ```
    

### Scenario 6: Prevent a RAM user from deleting any file in a bucket

This example shows how to prevent a RAM user from deleting any file in the `mybucket` bucket.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": [
        "oss:DeleteObject"
      ],
      "Resource": [
        "acs:oss:*:*:mybucket/*"
      ]
    }
  ]
}
```

### Scenario 7: Prevent a RAM user from accessing objects with specific tags

This example shows how to add a Deny statement to prevent a RAM user from accessing objects that have the `status:ok` and `key1:value1` tags in the `examplebucket` bucket.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": [
        "oss:GetObject"
      ],
      "Resource": [
        "acs:oss:*:174649585760xxxx:examplebucket/*"
      ],
      "Condition": {
        "StringEquals": {
          "oss:ExistingObjectTag/status":"ok",
          "oss:ExistingObjectTag/key1":"value1"
        }
      }
    }
  ]
}
```

### Scenario 8: Grant a RAM user permission to access OSS from specific IP addresses

-   Add an IP address restriction to the `Allow` statement.
    
    The following example shows how to add IP address restrictions to an `Allow` statement to grant a RAM user permission to read all resources in the `mybucket` bucket only from the `192.168.0.0/16` and `198.51.100.0/24` IP address ranges.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListBuckets",
            "oss:GetBucketStat",
            "oss:GetBucketInfo",
            "oss:GetBucketTagging",
            "oss:GetBucketAcl" 
          ], 
          "Resource": [
            "acs:oss:*:*:*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListObjects",
            "oss:GetObject"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket",
            "acs:oss:*:*:mybucket/*"
          ],
          "Condition":{
            "IpAddress": {
              "acs:SourceIp": ["192.168.0.0/16", "198.51.100.0/24"]
            },
            "StringNotLike": {
              "acs:SourceVpc": [
                "vpc-*"
              ]
            }
          }
        }
      ]
    }
    ```
    
-   Add IP address restrictions to the `Deny` statement.
    
    This example adds an IP address restriction to a `Deny` statement. It denies all OSS operations for RAM users whose source IP address is outside the `192.168.0.0/16` range.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListBuckets",
            "oss:GetBucketStat",
            "oss:GetBucketInfo",
            "oss:GetBucketTagging",
            "oss:GetBucketAcl" 
          ], 
          "Resource": [
            "acs:oss:*:*:*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "oss:ListObjects",
            "oss:GetObject"
          ],
          "Resource": [
            "acs:oss:*:*:mybucket",
            "acs:oss:*:*:mybucket/*"
          ]
        },
        {
          "Effect": "Deny",
          "Action": "oss:*",
          "Resource": [
            "acs:oss:*:*:*"
          ],
          "Condition":{
            "NotIpAddress": {
              "acs:SourceIp": ["192.168.0.0/16"]
            },
            "StringLike": {
              "acs:SourceVpc": [
                "*"
              ]
            }
          }
        }
      ]
    }
    ```
    
    **Note**
    
    Because Deny statements take precedence, requests from IP addresses outside the `192.168.0.0/16` range to access content in the mybucket bucket are denied.
    

### Scenario 9: Authorize another user through RAM or STS

This example shows how to use RAM or Security Token Service (STS) to authorize a user with the IP address `192.168.0.1` to run the Java SDK client and perform the following actions:

-   List objects whose names start with `foo` in the `mybucket` bucket.
    
-   Upload, download, and delete objects whose names start with `file` in the `mybucket` bucket.
    

```
{
  "Version": "1",
  "Statement": [{
    "Action": [
      "oss:GetBucketAcl",
      "oss:ListObjects"
    ],
    "Resource": [
      "acs:oss:*:177530505652xxxx:mybucket"
    ],
    "Effect": "Allow",
    "Condition": {
      "StringLike": {
        "acs:UserAgent": "*java-sdk*",
        "oss:Prefix": "foo"
      },
      "IpAddress": {
        "acs:SourceIp": "192.168.0.1"
      },
      "StringNotLike": {
        "acs:SourceVpc": [
          "vpc-*"
        ]
      }
    }
  },
    {
      "Action": [
        "oss:PutObject",
        "oss:GetObject",
        "oss:DeleteObject"
      ],
      "Resource": [
        "acs:oss:*:177530505652xxxx:mybucket/file*"
      ],
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "acs:UserAgent": "java-sdk"
        },
        "IpAddress": {
          "acs:SourceIp": "192.168.0.1"
        },
        "StringNotLike": {
          "acs:SourceVpc": [
            "vpc-*"
          ]
        }
      }
    }
  ]
}
```

### Scenario 10: Prevent public ACL settings for buckets and objects

This example shows how to prevent the access control lists (ACLs) of buckets and objects from being set to public. This helps protect your data in OSS.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": [
        "oss:PutBucket",
        "oss:PutBucketAcl"
      ],
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "oss:x-oss-acl": "private"
        }
      }
    },
    {
      "Effect": "Deny",
      "Action": [
        "oss:PutObject",
        "oss:PutObjectAcl"
      ],
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "oss:x-oss-object-acl": [
            "private",
            "default"
          ]
        }
      }
    }
  ]
}
```

### Scenario 11: Grant a RAM user permission to use IMM features

This RAM policy grants a RAM user permission to use the document processing feature of Intelligent Media Management (IMM).

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "oss:GetObject",
        "oss:PutObject",
        "oss:PostProcessTask",
        "oss:ProcessImm"
      ],
      "Resource": "*"
    },
    {
      "Action": [
        "imm:CreateOfficeConversionTask",
        "imm:GetWebofficeURL"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Action": "ram:PassRole",
      "Resource": "acs:ram:*:*:role/aliyunimmdefaultrole"
    }
  ]
}
```

### Scenario 12: Grant a RAM user permission to change storage redundancy type

-   Grant a RAM user permission to change the storage redundancy type for a specific bucket.
    
    This example shows how to grant a RAM user permission to change the storage redundancy type for the `mybucket` bucket.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:CreateBucketDataRedundancyTransition",
            "oss:GetBucketDataRedundancyTransition",
            "oss:ListBucketDataRedundancyTransition",
            "oss:DeleteBucketDataRedundancyTransition"
          ],
          "Resource": "acs:oss:*:*:mybucket"
        }
      ]
    }
    ```
    
-   Grant a RAM user permission to change the storage redundancy type for all buckets.
    
    **Important**
    
    This example grants permission to change the storage redundancy type for all buckets in your Alibaba Cloud account. Use this permission with caution.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:CreateBucketDataRedundancyTransition",
            "oss:GetBucketDataRedundancyTransition",
            "oss:ListBucketDataRedundancyTransition",
            "oss:DeleteBucketDataRedundancyTransition"
          ],
          "Resource": "acs:oss:*:*:*"
        }
      ]
    }
    ```
    

### Scenario 13: Grant a RAM user permission to purchase OSS resource plans

This RAM policy grants a RAM user permission to purchase OSS resource plans.

**Important**

After a RAM user purchases an OSS resource plan, the owner of the Alibaba Cloud account must complete the payment. To allow the RAM user to pay for the order, the account owner must grant the `bss:PayOrder` permission to the RAM user. The `bss:PayOrder` permission is a high-risk permission because it involves financial operations. Grant this permission only when necessary.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "oss:CreateOrder",
      "Resource": "acs:oss:*:*:*"
    }
  ]
}
```

### Scenario 14: Grant a RAM user permission to activate OSS

This RAM policy grants a RAM user permission to activate OSS.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "oss:ActivateProduct",
      "Resource": "acs:oss:*:*:*"
    }
  ]
}
```

### Scenario 15: Grant a RAM user permission to read and write data in buckets with specific tags

The following RAM policy grants a RAM user read and write permissions on data in a bucket that has the tag key key1 and the tag value value1.

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "oss:ListBuckets",
        "oss:GetBucketStat",
        "oss:GetBucketInfo",
        "oss:GetBucketAcl",
        "oss:ListObjects",
        "oss:PutObject",
        "oss:GetObject"
      ],
      "Resource": [
        "acs:oss:*:*:*"
      ],
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "oss:BucketTag/key1": "value1"
        }
      }
    }
  ]
}
```

**Note**

After this policy takes effect, the RAM user can perform the specified actions only on OSS buckets that are tagged with `key1=value1`. The behavior varies based on the access method:

-   When you call the `ListBuckets` operation using the OSS SDK or ossutil, you must include tag filtering parameters, such as `tag-key=key1,tag-value=value1`. If the policy is correctly configured, the response includes only the buckets that match the tag condition.
    
-   When you call the `ListBuckets` operation using the OSS console, the request fails because the console cannot pass tag parameters. The request violates the `oss:BucketTag/key1=value1` policy condition. The system returns a permission error.
    
-   Other operations, such as `PutObject` and `GetObject`, are also subject to the tag condition. The target bucket must have the `key1=value1` tag.
    

## Going live

Follow these security best practices when you configure RAM policies and manage RAM identities. These practices help reduce the risk of data breaches and ensure precise permission control:

-   **Apply the principle of least privilege**: Grant only the minimum permissions that are required to complete a task. Avoid granting broad permissions, such as `oss:*`, unless it is absolutely necessary. The principle of least privilege reduces the attack surface and lowers the risks that are caused by permission abuse or mistakes.
    
-   **Use RAM roles and STS temporary credentials**: For applications, especially those that are deployed on ECS instances or in containers, we recommend that you use RAM roles and STS temporary credentials to access OSS. Temporary credentials automatically expire. This prevents you from having to hard-code long-term AccessKey pairs in your code or configuration files and significantly reduces the risk of AccessKey pair leaks.
    
-   **Separate human users from programmatic users**: Create separate RAM users for human users and applications. This allows for professional identity management and fine-grained permission control.
    
    -   **Human users**: Enable **console access**. Human users can use a username and password to log on to the Alibaba Cloud console. We recommend that you enable multi-factor authentication (MFA) for human users.
        
    -   **Programmatic users**: Enable **programmatic access**. Programmatic users can use AccessKey pairs to call API operations and access cloud resources.
        
-   **Securely manage AccessKey pairs**:
    
    -   Do not store the AccessKey IDs and AccessKey secrets of RAM users in application code. This increases the risk of credential exposure.
        
    -   Use STS tokens or environment variables to provide access credentials.
        
    -   Rotate AccessKey pairs on a regular basis.
        
-   **Secure RAM roles**:
    
    -   After you create a RAM role, do not change its trusted entity unless it is necessary. Unplanned changes may disrupt your business or cause permission escalation.
        
    -   Set a reasonable expiration time for STS tokens. Long-lived tokens increase security risks.
        
-   **Regularly audit permissions**: Review and remove unused RAM users and permission policies. Make sure that the permissions are aligned with your current business needs.
    
-   **Strengthen security using conditions**: Add `Condition` elements to policies to restrict the source IP address or VPC. Multi-dimensional conditions add extra layers of protection for data access.
    
    **Important**
    
    When you configure RAM policies, make sure that they are aligned with your network architecture. We recommend that you use both the `acs:SourceIp` and `acs:SourceVpc` conditions for two-factor access control. Relying on a single condition creates security blind spots. For example, if you restrict only public IP addresses, traffic from a VPC can bypass the rule if the traffic exits through a matching public IP address.
    

## References

-   [System policies for Object Storage Service](/help/en/oss/user-guide/oss)
    
-   [Use RAM user AccessKeys to access OSS](/help/en/oss/developer-reference/use-the-accesskey-pair-of-a-ram-user-to-initiate-a-request)
    
-   [Use STS temporary credentials to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss)
    
-   [Cross-account access to OSS using RAM roles](/help/en/oss/user-guide/cross-account-access-by-ram-role)
    
-   [Control OSS access permissions with RAM Policy](/help/en/oss/user-guide/access-control-base-on-ram-policy)
