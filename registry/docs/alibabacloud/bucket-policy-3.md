Bucket policies are resource-based authorization policies that let bucket owners grant other users access to specific resources in Object Storage Service (OSS). Use the `bucket-policy` command to add, modify, query, or delete bucket policies on a bucket.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:PutBucketPolicy` permission to add or modify bucket policies
    
-   The `oss:GetBucketPolicy` permission to query bucket policies
    
-   The `oss:DeleteBucketPolicy` permission to delete bucket policies
    

To attach these permissions to a RAM user, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   For ossutil 1.6.16 and later, use `ossutil` as the binary name directly in the command line. For ossutil earlier than 1.6.16, update the binary name based on the operating system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   For more information about bucket policies, see [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/#concept-2071378).
    

## Add or modify bucket policies

Before running this command, create a JSON file on your local computer and define the bucket policies in it. A single JSON file can contain multiple policy statements, but the total size cannot exceed 16 KB.

When you run the command, ossutil reads the policies from the JSON file and writes them to the bucket.

**Warning**

Adding bucket policies overwrites all existing bucket policies on the bucket.

**Syntax**

```
ossutil bucket-policy --method put oss://<bucketname> <local_json_file>
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The name of the bucket to add or modify policies for

`local_json_file`

Yes

The path to the local JSON file containing the bucket policies

**Examples**

The following examples show common bucket policy configurations. In all examples, the bucket owner has UID `174649585760**�PH1�**`.

**Example 1: Allow anonymous read access from a specific IP address**

This policy allows only anonymous requests from `10.10.10.10` to read all objects in `examplebucket`.

```
{
    "Statement": [
        {
            "Action": [
                "oss:GetObject",
                "oss:GetObjectAcl",
                "oss:ListObjects",
                "oss:RestoreObject",
                "oss:GetVodPlaylist",
                "oss:ListObjectVersions",
                "oss:GetObjectVersion",
                "oss:GetObjectVersionAcl",
                "oss:RestoreObjectVersion"
            ],
            "Condition": {
                "IpAddress": {
                    "acs:SourceIp": [
                        "10.10.10.10"
                    ]
                }
            },
            "Effect": "Allow",
            "Principal": [
                "*"
            ],
            "Resource": [
                "acs:oss:*:174649585760xxxx:examplebucket/*"
            ]
        },
        {
            "Action": [
                "oss:ListObjects",
                "oss:GetObject"
            ],
            "Condition": {
                "StringLike": {
                    "oss:Prefix": [
                        "*"
                    ]
                },
                "IpAddress": {
                    "acs:SourceIp": [
                        "10.10.10.10"
                    ]
                }
            },
            "Effect": "Allow",
            "Principal": [
                "*"
            ],
            "Resource": [
                "acs:oss:*:174649585760xxxx:examplebucket"
            ]
        }
    ],
    "Version": "1"
}
```

**Example 2: Grant a RAM user read-only access to specific directories**

This policy grants RAM user `20214760404935xxxx` read-only access to the `hangzhou/2020` and `hangzhou/2015` directories in `examplebucket`.

```
{
    "Statement": [
        {
            "Action": [
                "oss:GetObject",
                "oss:GetObjectAcl",
                "oss:ListObjects",
                "oss:RestoreObject",
                "oss:GetVodPlaylist",
                "oss:ListObjectVersions",
                "oss:GetObjectVersion",
                "oss:GetObjectVersionAcl",
                "oss:RestoreObjectVersion"
            ],
            "Effect": "Allow",
            "Principal": [
                "20214760404935xxxx"
            ],
            "Resource": [
                "acs:oss:*:174649585760xxxx:examplebucket/hangzhou/2020/*",
                "acs:oss:*:174649585760xxxx:examplebucket/hangzhou/2015/*"
            ]
        },
        {
            "Action": [
                "oss:ListObjects",
                "oss:GetObject"
            ],
            "Condition": {
                "StringLike": {
                    "oss:Prefix": [
                        "hangzhou/2020/*",
                        "hangzhou/2015/*"
                    ]
                }
            },
            "Effect": "Allow",
            "Principal": [
                "20214760404935xxxx"
            ],
            "Resource": [
                "acs:oss:*:174649585760xxxx:examplebucket"
            ]
        }
    ],
    "Version": "1"
}
```

**Example 3: Block all anonymous access to a directory**

This policy denies all anonymous requests to objects in the `hangzhou/2021/` directory of `examplebucket`.

```
{
    "Statement": [
        {
            "Action": [
                "oss:RestoreObject",
                "oss:ListObjects",
                "oss:AbortMultipartUpload",
                "oss:PutObjectAcl",
                "oss:GetObjectAcl",
                "oss:ListParts",
                "oss:DeleteObject",
                "oss:PutObject",
                "oss:GetObject",
                "oss:GetVodPlaylist",
                "oss:PostVodPlaylist",
                "oss:PublishRtmpStream",
                "oss:ListObjectVersions",
                "oss:GetObjectVersion",
                "oss:GetObjectVersionAcl",
                "oss:RestoreObjectVersion"
            ],
            "Effect": "Deny",
            "Principal": [
                "*"
            ],
            "Resource": [
                "acs:oss:*:174649585760xxxx:examplebucket/hangzhou/2021/*"
            ]
        },
        {
            "Action": [
                "oss:ListObjects",
                "oss:GetObject"
            ],
            "Condition": {
                "StringLike": {
                    "oss:Prefix": [
                        "hangzhou/2021/*"
                    ]
                }
            },
            "Effect": "Deny",
            "Principal": [
                "*"
            ],
            "Resource": [
                "acs:oss:*:174649585760xxxx:examplebucket"
            ]
        }
    ],
    "Version": "1"
}
```

After creating the JSON file, apply the policy to the bucket:

```
ossutil bucket-policy --method put oss://examplebucket local_json_file
```

A response similar to the following confirms the policy was applied:

```
1.125101(s) elapsed
```

## Query bucket policies

Retrieve the current bucket policies and optionally save them to a local JSON file. If you omit `local_json_file`, the policies are printed to stdout instead.

**Syntax**

```
ossutil bucket-policy --method get oss://<bucketname> [local_json_file]
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The name of the bucket whose policies you want to retrieve

`local_json_file`

No

The local file to save the retrieved policies; if omitted, policies are printed to stdout

**Example: retrieve, edit, and reapply a policy**

A common workflow is to retrieve existing policies, update them, then reapply:

1.  Retrieve the current policies and save them to a file:
    
    ```
       ossutil bucket-policy --method get oss://examplebucket local_json_file
    ```
    
    A response similar to the following confirms the policies were saved:
    
    ```
       0.212407(s) elapsed
    ```
    
2.  Open `local_json_file` and make the necessary changes.
    
3.  Reapply the updated policies:
    
    ```
       ossutil bucket-policy --method put oss://examplebucket local_json_file
    ```
    

## Delete bucket policies

Delete all bucket policies from a bucket when you no longer need them for access authorization.

**Warning**

This command deletes **all** bucket policies on the bucket at once.

**Syntax**

```
ossutil bucket-policy --method delete oss://<bucketname>
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The name of the bucket whose policies you want to delete

**Example**

```
ossutil bucket-policy --method delete oss://examplebucket
```

A response similar to the following confirms all policies were deleted:

```
0.530750(s) elapsed
```

## Cross-region and cross-account access

To manage bucket policies on a bucket in a different region or owned by a different Alibaba Cloud account, add the following options to any command:

**Option**

**Required**

**Description**

`-e`

When targeting a different region

The endpoint of the region where the bucket is located

`-i`

When targeting a different account

The AccessKey ID of that account

`-k`

When targeting a different account

The AccessKey secret of that account

**Example**

Configure a bucket policy on `examplebucket` in the China (Hangzhou) region, owned by a different Alibaba Cloud account:

```
ossutil bucket-policy --method put oss://examplebucket local_json_file -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
