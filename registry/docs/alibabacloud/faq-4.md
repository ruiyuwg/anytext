This topic covers common problems when using the versioning feature in OSS, including unexpected storage charges, slow listing performance, and data size discrepancies.

## Why am I being charged more after enabling versioning?

When versioning is enabled, OSS stores every version of an object — not just the latest one. Overwriting an object does not delete the previous version; it becomes a noncurrent version and continues to accrue storage charges.

**Important**

Frequently overwritten objects accumulate noncurrent versions quickly, which can significantly increase storage costs. To control costs, configure a lifecycle rule using `NonCurrentVersionExpiration` to automatically expire noncurrent versions.

**Example: storage cost for a 30-day month**

-   **Day 1:** Upload a 20 GB object using `PutObject`. Storage class: Standard (locally redundant storage).
    
-   **Day 16:** Upload a 40 GB version of the same object using `PutObject`.
    

After day 16, both versions coexist in the bucket. The 20 GB version (now noncurrent) is stored for the full 30 days, and the 40 GB version is stored for the remaining 15 days.

Monthly storage cost: (20 GB - 5 GB) x USD 0.016/GB/month + 40 GB x USD 0.016/GB/month / 30 days x 15 days = **USD 0.56**

**Note**

The 5 GB deduction in this example reflects the free storage tier applied to the noncurrent version.

The storage costs of the object for the month is calculated based on the following equation: (20 GB - 5 GB) × USD 0.016 per GB per month + 40 GB × USD 0.016 per GB per month ÷ 30 days × 15 days = USD 0.56.

For pricing details across storage classes, see [Storage fees](/help/en/oss/storage-fees#concept-2558327).

## Why is listing objects slow on my versioning-enabled bucket?

Slow `GetBucket (ListObjects)` responses on a versioning-enabled bucket are typically caused by one of two conditions:

**Too many noncurrent versions:** Objects accumulate noncurrent versions over time. Listing operations must scan significantly more metadata for each object, which degrades performance.

**Too many expired delete markers:** A delete marker is created each time you delete an object without specifying a version ID. Expired delete markers that accumulate without cleanup also slow down listing.

**Step 1: Identify the cause**

Use either of the following methods to inspect your bucket:

-   Call `GetBucketVersions (ListObjectVersions)` to check version counts per object. For more information, see [ListObjectVersions (GetBucketVersions)](/help/en/oss/developer-reference/listobjectversions#reference-n2s-xy3-fhb).
    
-   Use the bucket inventory feature to get a full report of objects, noncurrent versions, and delete markers across the bucket. For more information, see [Bucket inventory](/help/en/oss/user-guide/bucket-inventory#concept-2381539).
    

**Step 2: Configure lifecycle rules to clean up the bucket**

**Rule**

**Purpose**

`NonCurrentVersionExpiration`

Expire noncurrent versions after a specified number of days

`ExpiredObjectDeleteMarker`

Remove expired delete markers automatically

For lifecycle rule configuration details, see [Configuration elements](/help/en/oss/user-guide/configuration-elements#concept-262491).

**Note**

Configure both lifecycle rules when you enable versioning — do not wait for performance to degrade.

## Why does the object size on the Objects page differ from the storage usage on the Overview page?

The Objects page shows only the current (latest) version of each object by default. Previous versions are hidden, so their storage is not reflected in the size shown on that page.

To make the sizes consistent, click **Show** in the upper-right corner of the object list. This displays all versions, and the total size will match the storage usage on the Overview page.
