Prevent-overwrite rules protect files in an OSS bucket from being overwritten after their initial upload. Rules are scoped by file path, file extension, and user identity — so you can apply targeted protection without locking down the entire bucket.

## Behavior and limitations

Before configuring rules, understand what the feature does and does not protect against:

**Scenario**

**Behavior**

**Initial concurrent uploads**

If multiple clients upload the same file simultaneously for the first time, one version is written successfully even if a rule matches. After the file exists, subsequent overwrites are blocked.

**Internal OSS operations**

Lifecycle transitions and cross-region replication (CRR) are not blocked. These system-initiated operations bypass prevent-overwrite rules to keep core features functional.

**Versioning**

Rules have no effect when bucket versioning is enabled or suspended.

## How it works

When OSS receives a write request for an existing file, it evaluates the request against configured rules in the order they were created:

1.  **Path matching** — checks whether the file path matches the rule's prefix and suffix conditions.
    
2.  **Identity matching** — checks whether the requester matches the Authorized User setting.
    
3.  **Decision** — if all conditions match, OSS blocks the operation and returns a `FileAlreadyExists` error. If no rule matches, the overwrite is allowed.
    

All conditions in a rule must be satisfied together. A partial match does not trigger the rule.

## Protect specific file types

Protect configuration files and log files in a production folder from being overwritten by specific users.

### Prerequisites

Before you begin, make sure you have:

-   An OSS bucket
    
-   Access to the OSS console with sufficient permissions to manage bucket settings
    

### Steps

1.  On the [Buckets](https://oss.console.alibabacloud.com/bucket) page, click the name of the target bucket.
    
2.  In the left navigation pane, choose **Data Management** > **File overwrite prohibited**.
    
3.  Click **New rule added to prohibit overwrite writes** and configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Rule ID**
    
    Optional. Leave blank to auto-generate a UUID, or enter a unique ID.
    
    `protect-configs-json`
    
    **File name prefix**
    
    The folder path to protect.
    
    `production/configs/`
    
    **File name extension**
    
    The file extension to protect. Leave blank to protect all file types in the path.
    
    `.json`
    
    **Authorized User**
    
    The RAM users, RAM roles, or other accounts the rule restricts. Use `*` to restrict all users.
    
    RAM user ARN
    
4.  Click **OK**.
    

### Verify the rule

1.  Use a restricted account to upload a file with the same name to `production/configs/app.json`.
    
2.  Confirm that a `FileAlreadyExists` error is returned.
    
3.  Confirm that other users can upload files normally and that uploads to paths outside the prefix and suffix conditions succeed normally.
    

## Set a global protection policy

Protect all files in a critical path from being overwritten by any user.

### Steps

1.  On the [Buckets](https://oss.console.alibabacloud.com/bucket) page, click the name of the target bucket.
    
2.  In the left navigation pane, choose **Data Management** > **File overwrite prohibited**.
    
3.  Click **New rule added to prohibit overwrite writes** and configure the following parameters:
    
    **Parameter**
    
    **Value**
    
    **Rule ID**
    
    Optional. Leave blank to auto-generate.
    
    **File name prefix**
    
    `critical-data/`
    
    **File name extension**
    
    Leave blank to protect all file types.
    
    **Authorized User**
    
    `*` (all accounts)
    
4.  Click **OK**.
    

### Verify the rule

1.  Use any account to attempt to overwrite `critical-data/database.sql`.
    
2.  Confirm that a `FileAlreadyExists` error is returned.
    
3.  Confirm that files in `public-data/` can still be overwritten normally.
    

## Matching rules

**Rule**

**Detail**

**Maximum rules per bucket**

100

**Maximum prefix and suffix length**

1,023 characters each

**Matching type**

Exact string matching only. Regular expressions and wildcard characters are not supported for prefix and suffix fields.

**Prefix matching**

`logs/` matches `logs/app.log` but not `dev-logs/app.log`.

**Suffix matching**

`.txt` matches `readme.txt` but not `readme.TXT` or `readme.txt.bak`.

**Authorized User**

Supports the `*` wildcard. For details, see the Principal configuration in [Common examples of bucket policies](/help/en/oss/user-guide/common-examples-of-bucket-policy).

**Rule ID**

Optional. Auto-generates a universally unique identifier (UUID) if left blank. Must be unique within the bucket.

## FAQ

### I left Authorized Users blank, and now even I can't overwrite files. How do I restore access?

Leaving the Authorized Users field blank applies the rule to all users, including the bucket owner and root Alibaba Cloud account. To restore overwrite access, do one of the following:

-   Delete the rule in the console.
    
-   Narrow the scope by setting a more specific prefix or suffix.
    
-   Set Authorized User to specific users so the restriction applies only to them.
    

### I set the prefix to `logs/*.txt` to match all .txt files in the logs folder, but it doesn't work. Why?

OSS prefix matching treats `*` as a literal character, not a wildcard. The system looks for a file named exactly `logs/*.txt`. To match all `.txt` files in the `logs/` folder, configure the rule with:

-   **File name prefix**: `logs/`
    
-   **File name extension**: `.txt`
    

### What happens if I leave both the prefix and suffix blank?

The rule applies to the entire bucket. Combined with an empty Authorized Users field, all users — including the bucket owner — are blocked from overwriting any file. If Authorized Users specifies certain users, only those users are restricted.
