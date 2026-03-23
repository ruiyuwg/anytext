Cross-region replication (CRR) and Same-region replication (SRR) interact differently with versioning, lifecycle rules, server-side encryption, and retention policies. This topic explains the exact behavior for each combination so you can configure replication without unintended data loss or encryption misconfiguration.

## Replication with versioning

### Constraints

-   Enable replication only between buckets with the **same versioning state** — both enabled or both disabled.
    
-   Do not change the versioning state of either bucket while replication is active.
    
-   To pause versioning on either bucket, delete the replication rule first.
    

### Delete behavior

When an object is deleted from a versioning-enabled source bucket, the outcome depends on whether a version ID is specified and which replication policy is configured.

**Delete request type**

**Replication policy**

**Result**

Without a version ID

Sync additions and modifications

OSS creates a delete marker in the source bucket and replicates it to the destination bucket. The object is not deleted from either bucket.

Without a version ID

Sync additions, deletions, and modifications

Same as above — a delete marker is created and replicated. The object is not deleted.

With a specific version ID

Sync additions and modifications

The specified version is deleted from the source bucket only. The destination bucket retains the object.

With a specific version ID

Sync additions, deletions, and modifications

The specified version is deleted from both the source and destination buckets.

> When no version ID is specified, OSS creates a delete marker instead of permanently deleting the object. This protects the destination bucket from accidental or unintended deletions. To permanently delete a specific version, specify the version ID in the delete request.

## Replication with lifecycle rules

Replication propagates the **outcomes** of lifecycle rules — not the rules themselves. If a lifecycle rule is configured only on the source bucket, OSS processes object expiration and storage class transitions in the source bucket and replicates those outcomes to the destination bucket. To apply the same retention behavior to both buckets, configure the same lifecycle rule on the destination bucket separately.

Additional behavior to be aware of:

-   **Object creation time is preserved.** Replicated objects retain the original creation timestamp from the source bucket, not the time of replication. This affects when lifecycle rules trigger on the destination bucket.
    
-   **Replication may complete after lifecycle deletion.** If a lifecycle rule deletes an object in the source bucket while replication is in progress, replication may still complete. The replica is retained in the destination bucket.
    
-   **Noncurrent versions can be permanently deleted.** With CRR on a versioning-enabled bucket, delete markers are replicated to the destination bucket. When a delete marker becomes the current version, the previous current version becomes a noncurrent version. If the destination bucket has a lifecycle rule that deletes noncurrent versions — for example, after one day — the noncurrent version is permanently deleted when the condition is met.
    

**Warning**

Lifecycle rules that delete noncurrent versions on the destination bucket can cause unintended data loss. Review your lifecycle configuration carefully before enabling replication with versioning.

## Replication with server-side encryption

### Supported encryption types

Same-account replication supports objects with the following encryption states:

-   Unencrypted
    
-   SSE-OSS (OSS-managed keys)
    
-   SSE-KMS (KMS-managed keys)
    

For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db).

### How encryption is applied to replicated objects

For encrypted source objects, the destination object's encryption type is determined by the source object's encryption type and the replication rule configuration — not by the destination bucket's default encryption settings. Unencrypted source objects are re-encrypted using the destination bucket's default encryption settings.

The following table shows the outcome for each combination of source encryption, destination bucket encryption, and replication rule configuration.

**Source object encryption**

**Destination bucket encryption**

**Replication rule CMK configuration**

**Destination object encryption**

Unencrypted

Unencrypted

—

Unencrypted

Unencrypted

SSE-OSS

—

SSE-OSS

Unencrypted

SSE-KMS (no CMK ID)

—

SSE-KMS (no CMK ID)

SSE-KMS with CMK ID1

Any

No CMK ID configured

SSE-KMS with CMK ID1

SSE-KMS with CMK ID1

Any

CMK ID2 configured

SSE-KMS with CMK ID2

SSE-OSS

Any

—

SSE-OSS

SSE-KMS

Any

Do not replicate KMS-encrypted objects

Not replicated

SSE-KMS

Any

CMK ID configured

SSE-KMS with the configured CMK ID

**Key rules:**

-   **Unencrypted source objects** use the destination bucket's encryption method.
    
-   **SSE-OSS source objects** retain SSE-OSS encryption regardless of the destination bucket's settings.
    
-   **SSE-KMS source objects** use the customer master key (CMK) ID configured in the replication rule. If no CMK ID is set in the rule, the source object's CMK ID is used. To skip replication of KMS-encrypted objects entirely, configure the rule accordingly.
    

### CMK ID behavior with SSE-KMS

-   If no CMK ID is specified, the default CMK managed by KMS is used for encryption and decryption.
    
-   If a CMK ID is specified, that CMK is used.
    

## Replication with retention policies

A locked retention policy (Write Once Read Many, or WORM) prevents objects from being modified or deleted until their retention period expires. Reads and uploads are still allowed.

For more information, see [Retention policies](/help/en/oss/user-guide/oss-retention-policies#concept-lnj-4rl-cfb).

### How WORM affects replication

Source operations and replication are independent. An operation can succeed in the source bucket and still fail to replicate to the destination bucket. When the destination object is under WORM protection, replication of any modification or deletion is blocked — even if the same operation succeeded on the source object.

**Source object under WORM?**

**Operation in source bucket**

**Destination object under WORM?**

**Operation replicated to destination?**

No

Add

Yes

No

No

Overwrite

Yes

No

No

Delete

Yes

No

No

Add

No

Yes

No

Overwrite

No

Yes

No

Delete

No

Yes

Yes

Add

No impact

Yes
