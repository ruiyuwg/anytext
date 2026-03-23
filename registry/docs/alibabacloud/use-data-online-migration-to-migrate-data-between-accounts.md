Cross-region replication (CRR) automatically and asynchronously copies objects from a source bucket to a destination bucket in a different region under another Alibaba Cloud account. Common use cases include disaster recovery, isolated cross-account backups, and data residency compliance.

Cross-account CRR requires coordination between two accounts. The overall flow:

1.  **Source account**: Create a RAM role and grant it read access to the source bucket.
    
2.  **Destination account**: Update the destination bucket policy to grant that RAM role write access.
    
3.  **Source account**: Create a CRR rule that links the two buckets and starts replication.
    

## Prerequisites

Before you begin, ensure that you have:

-   Access to both the source and destination Alibaba Cloud accounts
    
-   The source bucket and destination bucket already created in their respective regions
    
-   Sufficient RAM permissions in the source account to create roles and custom policies
    
-   Sufficient permissions in the destination account to modify bucket policies
    

> If you and the destination account administrator are different people, complete Step 1 first, then share the RAM role ARN with the destination account administrator so they can complete Step 2 independently.

## Step 1: Create and authorize a RAM role in the source account

### Create the RAM role

1.  Go to the [Create Role](https://ram.console.alibabacloud.com/roles/create) page.
    
2.  Set **Principal Type** to **Cloud Service** and **Principal Name** to **Object Storage Service**.
    
3.  Complete the role creation.
    

### Grant the role read access to the source bucket

Create a custom policy with the minimum permissions required for replication:

1.  On the [Create Policy](/help/en/kms/key-management-service/security-and-compliance/modify-a-key-policy) page, click the **Script Editor** tab and paste the following policy. Replace `src-bucket` with your source bucket name.
    
    ```
       {
         "Version": "1",
         "Statement": [
           {
             "Effect": "Allow",
             "Action": [
               "oss:ReplicateList",
               "oss:ReplicateGet"
             ],
             "Resource": [
               "acs:oss:*:*:src-bucket",
               "acs:oss:*:*:src-bucket/*"
             ]
           }
         ]
       }
    ```
    
2.  On the [Roles](https://ram.console.alibabacloud.com/roles) page, find the role you created and click **Grant Permission**. Select the custom policy from the previous step and click **OK**.
    

### (Optional) Grant the role KMS access

If the objects to be replicated are encrypted with Key Management Service (KMS), the RAM role also needs KMS permissions. On the [Roles](https://ram.console.alibabacloud.com/roles) page, find the role, click **Grant Permission**, set **Policy** to `AliyunKMSCryptoUserAccess`, and click **OK**.

### Copy the role ARN

On the [Roles](https://ram.console.alibabacloud.com/roles) page, click the role name to open **Basic Information** and copy the ARN. The format is:

```
acs:ram::<Source Account UID>:role/<Role Name>
```

Keep this ARN — you need it in Step 2 and Step 3.

## Step 2: Authorize the RAM role in the destination account

Log in to the destination account and update the destination bucket policy to allow the source RAM role to write objects.

### Add the bucket policy using the console

1.  Go to the [Buckets](https://oss.console.alibabacloud.com/bucket)[Buckets](https://oss.console.alibabacloud.com/bucket) page and click the destination bucket.
    
2.  In the left navigation pane, choose **Access Control** > **Bucket Policy**.
    
3.  Click the **Add in GUI** tab, then click **Receive Objects to Replicate**.
    
4.  In the panel, configure the following:
    
    **Parameter**
    
    **Value**
    
    **Obtain UID and RAM Role From**
    
    Select **Source RAM role ARN for replication**
    
    **Source RAM Role ARN for Replication**
    
    Paste the ARN you copied in Step 1
    
    **Purpose**
    
    Select **Cross-account replication**
    
5.  Click **Generate Policy**, then click **Save**.
    

### (Optional) Configure a destination KMS key

If you want to replicate KMS-encrypted objects into the destination bucket, [set a key policy](/help/en/kms/key-management-service/security-and-compliance/modify-a-key-policy) for the destination KMS key. Add the source RAM role ARN as an **Other Account User**. The policy must include `kms:Decrypt` and `kms:GenerateDataKey` permissions so the role can create encrypted objects in the destination bucket.

> The console wizard typically includes these permissions by default. If you configure the key policy using the OpenAPI instead, add them manually.

### Alternative: Add the bucket policy using JSON

For more flexibility, click **Add Rule by Syntax** on the Bucket Policy page and paste a JSON policy directly. Use the following template:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "oss:ReplicateList",
        "oss:ReplicateGet",
        "oss:ReplicatePut",
        "oss:ReplicateDelete"
      ],
      "Principal": [
        "arn:sts::<Source Account UID>:assumed-role/<Role Name>/*"
      ],
      "Resource": [
        "acs:oss:*:<Destination Account UID>:<Destination Bucket Name>",
        "acs:oss:*:<Destination Account UID>:<Destination Bucket Name>/*"
      ]
    }
  ]
}
```

Replace the placeholders with the actual values:

**Placeholder**

**Value**

`<Source Account UID>`

UID of the source Alibaba Cloud account

`<Role Name>`

Name of the RAM role created in Step 1

`<Destination Account UID>`

UID of the destination Alibaba Cloud account

`<Destination Bucket Name>`

Name of the destination bucket

**Important**

Keep the following in mind when using a JSON policy:

-   A new policy **overwrites** any existing bucket policy. Make sure the new policy includes all required authorization rules.
    
-   If the RAM role name contains uppercase letters, convert them to lowercase in the `Principal` field. For example, `AliyunOssDrsRole` must appear as `aliyunossdrsrole`.
    

## Step 3: Create a CRR rule in the source account

After both accounts are authorized, log in to the source account and create the replication rule.

1.  Go to the [Buckets](https://oss.console.alibabacloud.com/bucket)[Buckets](https://oss.console.alibabacloud.com/bucket) page and click the source bucket.
    
2.  In the left navigation pane, choose **Data Management** > **Cross-Region Replication**.
    
3.  Click **Cross-Region Replication** and configure the rule:
    

### Configure destination bucket

Select **Specify a bucket that belongs to another Alibaba Cloud account**, then select the destination region and enter the destination bucket name.

### Configure replication policy

**Parameter**

**Options and notes**

**Objects to Replicate**

**Synchronize all files**: replicates all objects. **Objects with Specified Prefix**: replicates only objects matching the prefix. Up to 10 prefixes by default; contact support to increase the limit to a maximum of 100.

**Replicate Delete Operations**

**No** (recommended for disaster recovery): new and modified objects are replicated; deletions in the source bucket do not affect the destination bucket. **Yes**: deletions are replicated to keep both buckets in sync — deleted objects in the destination bucket cannot be recovered.

**Replicate Historical Data**

Replicates objects that existed before the rule was created. Objects with the same name in the destination bucket are overwritten. Enable versioning on both buckets to avoid data loss.

**Replicate KMS-encrypted Objects**

**Replicate**: KMS-encrypted objects are replicated and remain encrypted; requires the destination KMS key ARN from Step 2. **Do not replicate**: KMS-encrypted objects are excluded from replication.

**RAM Role**

Select the RAM role created in Step 1.

> When **Replicate Delete Operations** is set to **No** and versioning is enabled on the source bucket, deleting an object without specifying a version ID creates a delete marker in the source bucket. That delete marker **is** replicated to the destination bucket.

> To check the encryption status of objects and buckets, use [HeadObject](/help/en/oss/developer-reference/headobject#reference-bgh-cbw-wdb) and [GetBucketEncryption](/help/en/oss/developer-reference/getbucketencryption#concept-262215).

### (Optional) Configure replication acceleration

**Parameter**

**Description**

**Transfer Acceleration**

Improves transfer speed for replication between the Chinese mainland and regions outside the Chinese mainland. [Transfer acceleration fees](/help/en/oss/transfer-acceleration-fees#concept-2558603) apply.

**Replication time control (RTC)**

Keeps the replication delay for most incremental data within 10 minutes. Supported only between specific regions. [RTC fees](/help/en/oss/rtc-traffic-fees#concept-2261469) apply. For details, see [RTC feature overview](/help/en/oss/user-guide/rtc).

1.  Review all settings carefully and click **OK**, then click **Confirm Enable**.
    

**Important**

A CRR rule cannot be modified or deleted after creation. To stop replication, disable the replication task.

The replication task starts within a few minutes. Data replication is asynchronous — depending on object size, object count, and cross-region network latency, it can take from a few minutes to several hours. Monitor progress on the **Cross-Region Replication** tab of the source bucket, where you can view the synchronization status of both historical and incremental data.

## What gets replicated

**Replicated**

**Not replicated**

New objects added after the rule is created

Storage class changes triggered by a lifecycle rule or `CopyObject`

Modified objects

Updates to `LastAccessTime`

Delete operations (if **Replicate Delete Operations** is set to **Yes**)

KMS-encrypted objects (if **Replicate KMS-encrypted Objects** is set to **Do not replicate**)

Delete markers (when versioning is enabled and an object is deleted without a version ID, even when **Replicate Delete Operations** is set to **No**)

Objects uploaded using multipart upload (each part is replicated as uploaded; the complete object is replicated after `CompleteMultipartUpload`)

Historical data (if **Replicate Historical Data** is enabled)

## FAQ

#### Why aren't storage class changes or last-access-time updates replicated?

Replication is triggered only by writes to object content — additions, modifications, and deletions. Changing an object's storage class (via a lifecycle rule or `CopyObject`) and updating `LastAccessTime` don't write new content, so they don't trigger replication.

To work around this:

-   **Sync storage class**: Configure an identical lifecycle rule on the destination bucket.
    
-   **Sync \`LastAccessTime\`**: Access the object directly in the destination bucket (for example, with a `GetObject` request).
    

#### Are objects uploaded using multipart upload replicated?

Yes. When an object is uploaded using multipart upload, each part upload is replicated to the destination bucket as it completes. After the merge (`CompleteMultipartUpload`) is complete in the source bucket, the complete object is then replicated as a whole to the destination bucket.

#### Is there a simpler way to grant permissions to the RAM role?

Grant the `AliyunOSSFullAccess` system policy directly to the RAM role. This skips creating a custom policy. However, `AliyunOSSFullAccess` grants full access to all OSS resources in the account — too broad for production environments. Use the least-privilege custom policy from Step 1 instead.

#### Besides the console wizard, can I configure the destination bucket policy using JSON?

Yes. On the Bucket Policy page, click **Add Rule by Syntax** to write the policy directly in JSON. See the [JSON policy template](#section-316ac9d6) in Step 2 for the required fields and format.
