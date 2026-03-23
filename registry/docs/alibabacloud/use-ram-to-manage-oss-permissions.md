This topic describes how to manage Object Storage Service (OSS) permissions of Resource Access Management (RAM) users. In the RAM console, you can create custom policies and attach them to the RAM users.

## Background information

-   Before you manage OSS permissions of RAM users, take note of the following system policies:
    
    -   AliyunOSSFullAccess: grants a RAM user the permissions to manage OSS buckets.
        
    -   AliyunECSReadOnlyAccess: grants read-only permissions on OSS buckets.
        
    
    If the system policies cannot meet your business requirements, you can create custom policies.
    
-   Before you manage OSS permissions of RAM users, take note of the OSS permissions. For more information, see [RAM Policy](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb).
    

## Procedure

1.  Create a RAM user.
    
    For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Create a custom policy.
    
    For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb) and [Policy examples](#section-mlc-ww2-vgb).
    
3.  Attach the policy to the RAM user.
    
    For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

## Policy examples

-   Example 1: Authorize a RAM user to manage a bucket named `myphotos`.
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "oss:*",
                "Resource": [
                    "acs:oss:*:*:myphotos",
                    "acs:oss:*:*:myphotos/*"
                ]
            }
        ]
    }
    ```
    
-   Example 2: Authorize a RAM user to list and read resources in a bucket.
    
    -   To authorize a RAM user to list and read resources in a bucket named `myphotos` by using the OSS SDK or OSS CLI, use the following sample script:
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": "oss:ListObjects",
                    "Resource": "acs:oss:*:*:myphotos"
                },
                {
                    "Effect": "Allow",
                    "Action": "oss:GetObject",
                    "Resource": "acs:oss:*:*:myphotos/*"
                }
            ]
        }
        ```
        
    -   To authorize a RAM user to use the OSS console to list and read resources in a bucket named myphotos, use the following sample script:
        
        **Note**
        
        When a RAM user logs on to the OSS console, the `ListBuckets`, `GetBucketAcl`, and `GetObjectAcl` operations are called to check whether the bucket is public.
        
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
                    "Resource": "acs:oss:*:*:*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "oss:ListObjects",
                        "oss:GetBucketAcl"
                    ],
                    "Resource": "acs:oss:*:*:myphotos"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "oss:GetObject",
                        "oss:GetObjectAcl"
                    ],
                    "Resource": "acs:oss:*:*:myphotos/*"
                }
            ]
        }
        ```
        
-   Example 3: Authorize a RAM user to use a specific IP address to access an OSS bucket.
    
    -   Add an IP address condition to the `Allow` element. This allows a RAM user to read data from the `myphotos` bucket by using an IP address in the `192.168.0.0/16` or `172.16.0.1/16` CIDR block.
        
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
                        "acs:oss:*:*:myphotos",
                        "acs:oss:*:*:myphotos/*"
                    ],
                    "Condition":{
                        "IpAddress": {
                            "acs:SourceIp": ["192.168.0.0/16", "172.16.1.0/16"]
                        }
                    }
                }
            ]
        }
        ```
        
    -   Add an IP address condition to the `Deny` element. If the IP address of a RAM user is not in the `192.168.0.0/16` CIDR block, the RAM user cannot access or manage the myphotos bucket.
        
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
                        "acs:oss:*:*:myphotos",
                        "acs:oss:*:*:myphotos/*"
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
                        }
                    }
                }
            ]
        }
        ```
        
        **Note**
        
        A policy with the Deny command has a higher priority than a policy with the Allow command. When a RAM user attempts to read data from the `myphotos` bucket, but the IP address is not in the `192.168.0.0/16` CIDR block, OSS notifies the RAM user that the RAM user does not have the required permissions.
        
-   Example 4: Authorize a RAM user to read data from an OSS directory.
    
    In this example, the bucket that stores photos is named `myphotos`. The bucket contains multiple folders that are named based on the location where the photos were captured. Each folder contains subfolders that are named based on the years when the photos were captured.
    
    ```
    myphotos[Bucket]
      ├── beijing
      │   ├── 2014
      │   └── 2015
      ├── hangzhou
      │   ├── 2013
      │   ├── 2014
      │   └── 2015 // Grant read-only permissions on this folder to a RAM user.
      └── qingdao
          ├── 2014
          └── 2015
    ```
    
    You can create different RAM policies to grant read-only permissions on the `myphotos/hangzhou/2015/` folder to a RAM user Authorization based on directories is an advanced feature of RAM policies. The complexity of RAM policies varies based on scenarios. You can refer to the RAM policies in the following scenarios to grant permissions to RAM users:
    
    -   Scenario 1: Authorize a RAM user to read data from objects in the folder, but do not authorize the RAM user to list objects.
        
        In this scenario, the RAM user can use the full path to read object data. We recommend that you attach this policy to your applications.
        
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
                        "acs:oss:*:*:myphotos/hangzhou/2015/*"
                    ]
                }
            ]
        }
        ```
        
    -   Scenario 2: Authorize a RAM user to use the OSS CLI to access the `myphotos/hangzhou/2015/` folder and list objects in the folder.
        
        In this scenario, the RAM user can use the OSS CLI or call operations to read data from the folder. We recommend that you use this policy to grant related permissions to your software developers.
        
        In this scenario, the `ListObjects` permission is required.
        
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
                        "acs:oss:*:*:myphotos/hangzhou/2015/*"
                    ]
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "oss:ListObjects"
                    ],
                    "Resource": [
                        "acs:oss:*:*:myphotos"
                    ],
                    "Condition":{
                        "StringLike":{
                            "oss:Prefix":"hangzhou/2015/*"
                        }
                    }
                }
            ]
        }
        ```
        
    -   Scenario 3: Authorize a RAM user to use the OSS console to access the folder.
        
        In this scenario, the RAM user can use a visual OSS client (for example, Windows File Explorer) to access the `myphotos/hangzhou/2015/` folder.
        
        The following permissions are required:
        
        -   Permission to list all `buckets`
            
        -   Permission to list folders under `myphotos`
            
        -   Permission to list folders under `myphotos/hangzhou`
            
        
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
                        "oss:GetObject",
                        "oss:GetObjectAcl"
                    ],
                    "Resource": [
                        "acs:oss:*:*:myphotos/hangzhou/2015/*"
                    ]
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "oss:ListObjects"
                    ],
                    "Resource": [
                        "acs:oss:*:*:myphotos"
                    ],
                    "Condition": {
                        "StringLike": {
                            "oss:Delimiter": "/",
                            "oss:Prefix": [
                                "",
                                "hangzhou/",
                                "hangzhou/2015/*"
                            ]
                        }
                    }
                }
            ]
        }
        ```
