Lifecycle rules automatically trigger storage class transitions and deletions. Each operation incurs fees that vary by storage class, region, and whether objects are deleted before their minimum storage duration expires. Understanding these fees before you configure rules helps you avoid unexpected charges.

## Request fees for transitions and deletions (required)

Every lifecycle-triggered transition or deletion calls an internal API operation, which generates a Put request fee.

**Operation**

**API operation**

**Billing basis**

Transition an object to another storage class

CommitTransition

Put request fees for the **source** storage class

Delete an object

ExpireObject

Put request fees for the storage class at the time of deletion

Delete a part

AbortMultipartUpload

Put request fees for the storage class at the time of deletion

**Billing rule:** Put request fees are calculated based on the number of successful requests.

**Important**

Keep the following in mind when configuring transition and deletion rules:

-   Transitioning objects **out of** Infrequent Access, Archive, or Cold Archive to any other storage class incurs higher Put request fees than transitioning objects out of Standard.
    
-   **In regions in the Chinese mainland:** Deleting Infrequent Access, Archive, or Cold Archive objects or parts via lifecycle rules incurs higher Put request fees than deleting Standard objects or parts. No Put request fees apply when lifecycle rules delete Deep Cold Archive objects or parts.
    
-   **In the China (Hong Kong) region and regions outside China:** No Put request fees apply when lifecycle rules delete objects or parts of any storage class.
    
-   Put request fees for deleting a delete marker are charged based on the Standard storage class.
    

For pricing details, see [Request fees](/help/en/oss/api-operation-calling-fees#concept-2558398).

## Early deletion fees (conditional)

If a lifecycle rule transitions or deletes an Infrequent Access, Archive, Cold Archive, or Deep Cold Archive object before its minimum storage duration expires, OSS charges you for the remaining days in that storage class.

**Minimum storage durations by storage class:**

**Storage class**

**Minimum duration**

**Duration starts from**

Infrequent Access

30 days

Last-Modified time in OSS

Archive

60 days

Last-Modified time in OSS

Cold Archive

180 days

Time the object is transitioned to Cold Archive

Deep Cold Archive

180 days

Time the object is transitioned to Deep Cold Archive

**Examples:**

**Example 1: Infrequent Access early deletion**

A Standard object is stored for 10 days, transitioned to Infrequent Access, stored for 5 days, then deleted.

-   Storage fees: 10 days (Standard) + 5 days (Infrequent Access)
    
-   Early deletion fees: **15 days** of Infrequent Access storage capacity (30 - 10 - 5 = 15 remaining days)
    

**Note**

For Infrequent Access, the 30-day minimum is measured from the object's Last-Modified time, not from the transition date. The 10 days spent in Standard count toward the 30-day minimum.

**Example 2: Archive early deletion (multi-tier transition)**

A Standard object is stored for 10 days, transitioned to Infrequent Access for 5 days, then transitioned to Archive, stored for 5 days, then deleted.

-   Storage fees: 10 days (Standard) + 5 days (Infrequent Access) + 5 days (Archive)
    
-   Early deletion fees: **40 days** of Archive storage capacity (60 - 10 - 5 - 5 = 40 remaining days)
    

**Note**

For Archive, the 60-day minimum is also measured from the object's Last-Modified time. The 10 days in Standard and 5 days in Infrequent Access count toward the 60-day minimum.

**Example 3: Cold Archive early deletion**

A Standard object is stored for 10 days, transitioned to Cold Archive, stored for 1 day, then deleted.

-   Storage fees: 10 days (Standard) + 1 day (Cold Archive)
    
-   Early deletion fees: **179 days** of Cold Archive storage capacity (180 - 1 = 179 remaining days)
    

**Example 4: Deep Cold Archive early deletion (transition from Cold Archive)**

A Cold Archive object is stored for 10 days, transitioned to Deep Cold Archive, stored for 1 day, then deleted.

-   Storage fees: 10 days (Cold Archive) + 1 day (Deep Cold Archive)
    
-   Early deletion fees:
    
    -   **170 days** of Cold Archive storage capacity (180 - 10 = 170 remaining days)
        
    -   **179 days** of Deep Cold Archive storage capacity (180 - 1 = 179 remaining days)
        

For pricing details, see [Storage fees](/help/en/oss/storage-fees).

## Data restoration fees (conditional)

Transitioning objects to colder storage classes reduces storage costs, but reading or restoring those objects incurs additional fees. The fee structure depends on the storage class.

**Storage class**

**How you access data**

**Fees incurred**

Infrequent Access

Direct read

Data retrieval fees

Archive

Direct read (real-time access)

Fees for real-time access of Archive objects

Archive

Restore, then read

Put request fees + data retrieval capacity fees

Cold Archive / Deep Cold Archive

Restore, then read

Retrieval request fees + retrieval capacity fees + temporary restoration capacity fees

**Important**

For Cold Archive and Deep Cold Archive objects, retrieval fees vary by restoration priority — a higher priority incurs higher fees.

## What's next

To avoid early deletion fees, make sure the minimum storage duration is met before a lifecycle rule transitions or deletes an object. For guidance, see [How do I avoid fees for early deletion of objects?](/help/en/oss/how-can-i-avoid-the-cost-of-insufficient-storage)
