OSS-HDFS automatic storage tiering reduces storage costs for compliance or archival data that must be retained but is rarely read. The feature moves data between storage classes based on access patterns—pushing cold data to Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive, and pulling hot data back to Standard when needed.

## How it works

Automatic storage tiering uses two layers that work together:

1.  **Storage policy (JindoFS layer)**: Run a `setStoragePolicy` command to tag objects in a directory with the target storage class (for example, `transition-storage-class: IA`).
    
2.  **Lifecycle rule (OSS layer)**: When you enable the feature in the OSS console, OSS automatically creates lifecycle rules that act on those tags. Objects in the `.dlsdata/` directory that carry a matching tag are converted to the target storage class one day after their last modification.
    

This two-layer model means the JindoFS command marks data for transition, and OSS executes the actual class conversion on its daily schedule.

**Storage class**

**Policy value**

**Tag value**

IA

`CLOUD_IA`

`IA`

Archive

`CLOUD_AR`

`Archive`

Cold Archive

`CLOUD_COLD_AR`

`ColdArchive`

Deep Cold Archive

`CLOUD_DEEP_COLD_AR`

`DeepColdArchive`

**Supported transitions:**

-   Hot to cold: Standard → IA → Archive → Cold Archive → Deep Cold Archive
    
-   Cold to hot: Deep Cold Archive → Cold Archive → Archive → IA → Standard
    

## Limits and prerequisites

### Supported regions

**Storage class**

**Supported regions**

IA, Archive, Cold Archive

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Zhangjiakou), China (Ulanqab), China (Hong Kong), Singapore, Germany (Frankfurt), US (Silicon Valley), US (Virginia), Indonesia (Jakarta)

Deep Cold Archive

China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Zhangjiakou), China (Ulanqab), Singapore

### JindoSDK version

JindoSDK 6.8.0 or later is required.

If your JindoSDK version is earlier than 6.8.0, you cannot create objects directly in IA, Archive, Cold Archive, or Deep Cold Archive directories. As a workaround, create the object in a Standard directory, then move it using the [rename](https://hadoop.apache.org/docs/r3.1.0/api/org/apache/hadoop/fs/FileSystem.html#rename-org.apache.hadoop.fs.Path-org.apache.hadoop.fs.Path-) operation.

### Tickets required

You must submit a [support ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) before using the feature:

-   **IA, Archive, and Cold Archive**: One ticket covers all three classes.
    
-   **Deep Cold Archive**: Submit a separate ticket.
    
-   **First-time activation**: If the feature has never been enabled on your account, a single ticket activates all four storage classes.
    

### Conversion size limits

-   Converting Archive, Cold Archive, or Deep Cold Archive objects to Standard or IA in one operation: maximum 5 TB total.
    
-   Archive, Cold Archive, or Deep Cold Archive objects in the Processing state at once: maximum 50 TB.
    

### Lifecycle rule safety

**Important**

After you enable automatic storage tiering, OSS automatically creates lifecycle rules for each tag value. Do not modify or delete these rules. Doing so may cause data loss or OSS-HDFS errors.

## Billing

### Data retrieval fees

Reading IA, Archive, Cold Archive, or Deep Cold Archive objects incurs data retrieval fees. Avoid storing frequently accessed data in these storage classes. See [Data processing fees](/help/en/oss/data-processing-fees#concept-2558464).

### Tag fees

Setting a storage policy adds a `transition-storage-class` tag to each data block. Tags are billed under OSS object tagging rules. See [Object tagging fees](/help/en/oss/object-tagging-fees).

### Minimum storage duration

Each storage class has a minimum storage duration. Objects transitioned before reaching the minimum are still charged for the full minimum period.

**Storage class**

**Minimum duration**

IA

30 days

Archive

60 days

Cold Archive

180 days

Deep Cold Archive

180 days

**How the clock is counted varies by target class:**

-   **IA and Archive**: The clock is not reset on conversion. Days spent in the prior class count toward the minimum, so prior storage time reduces the remaining obligation.
    
-   **Cold Archive and Deep Cold Archive**: The clock resets on conversion. The full 180-day minimum applies from the conversion date, regardless of prior storage duration.
    

**Examples:**

**Conversion path**

**Age before conversion**

**Remaining minimum to serve**

**Billing for prior class**

Standard (10 d) → IA

10 days

IA for 20 more days

Standard: 10 days

IA (10 d) → Archive

10 days

Archive for 50 more days

IA: 10 days

Standard (10 d) → Cold Archive

10 days

Cold Archive for 180 more days

Standard: 10 days

Standard (10 d) → Deep Cold Archive

10 days

Deep Cold Archive for 180 more days

Standard: 10 days

Cold Archive (10 d) → IA

10 days

Cold Archive for 170 more days, **or** IA for 30 days after conversion

Cold Archive: 10 days

## Enable automatic storage tiering

### Step 1: Set up JindoFS SDK

Before you begin, ensure that you have:

-   Data written to OSS-HDFS
    
-   JindoSDK 6.8.0 or later installed (see [Connect non-EMR clusters to OSS-HDFS](/help/en/oss/user-guide/connect-non-emr-clusters-to-oss-hdfs#task-2243844))
    
-   A submitted support ticket (see [Tickets required](#section-a31f0dc9))
    

1.  Connect to an Elastic Compute Service (ECS) instance. See [Connect to an instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#section-fqu-flq-xvv).
    
2.  Download the [JindoFS SDK](https://github.com/aliyun/alibabacloud-jindodata/blob/latest/docs/user/zh/jindofs/jindofs_cli_download.md) JAR package.
    
3.  Go to the `bin` directory of the extracted package:
    
    ```
       cd jindofs-sdk-x.x.x-linux/bin/
    ```
    
4.  Create a configuration file named `jindosdk.cfg` in the `bin` directory:
    
    ```
       [client]
       fs.oss.accessKeyId = <your-access-key-id>
       fs.oss.accessKeySecret = <your-access-key-secret>
       fs.oss.endpoint = cn-hangzhou.oss-dls.aliyuncs.com
    ```
    
    Replace `cn-hangzhou.oss-dls.aliyuncs.com` with the endpoint for your region.
    
5.  Set the `JINDOSDK_CONF_DIR` environment variable to the absolute path of the `jindosdk.cfg` configuration file:
    
    ```
       export JINDOSDK_CONF_DIR=<JINDOSDK_CONF_DIR>
    ```
    

### Step 2: Assign a storage policy

Run `setStoragePolicy` on the directory containing the data to tier. The command tags all objects in that directory for conversion.

**Target storage class**

**Command**

IA

`./jindofs fs -setStoragePolicy -path oss://examplebucket/dir1 -policy CLOUD_IA`

Archive

`./jindofs fs -setStoragePolicy -path oss://examplebucket/dir2 -policy CLOUD_AR`

Cold Archive

`./jindofs fs -setStoragePolicy -path oss://examplebucket/dir3 -policy CLOUD_COLD_AR`

Deep Cold Archive

`./jindofs fs -setStoragePolicy -path oss://examplebucket/dir4 -policy CLOUD_DEEP_COLD_AR`

**Note**

If no policy is set on an object or subdirectory, it inherits the policy of its parent directory.

### Step 3: Enable the feature in the OSS console

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the target bucket name.
    
3.  In the left-side navigation tree, choose **Data Lake** > **OSS-HDFS**.
    
4.  On the **OSS-HDFS** tab, click **Configure**.
    
5.  In the **Basic Settings** section of the **Automatic Storage Tiering** panel, turn on **Status**. OSS automatically creates lifecycle rules for each tag value. Each rule converts objects in `.dlsdata/` that carry the corresponding tag one day after their last modification.
    
    ![Automatic Storage Tiering settings panel](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9031809661/p486769.jpg)
    
6.  Click **OK**.
    

After enabling the feature:

-   OSS loads the lifecycle rules within 24 hours of creation.
    
-   Lifecycle rules run once per day at 08:00 (UTC+8). The exact completion time varies by object count.
    
-   Objects reach their target storage class within at least 48 hours.
    

## Storage policy commands

### setStoragePolicy

```
./jindofs fs -setStoragePolicy -path <path> -policy <policy>
```

Assigns a storage policy to all objects in a path.

**Parameter**

**Description**

`-path`

Path of the object or directory

`-policy`

Storage policy to apply. Valid values: `CLOUD_STD` (Standard), `CLOUD_IA` (IA), `CLOUD_AR` (Archive), `CLOUD_COLD_AR` (Cold Archive), `CLOUD_DEEP_COLD_AR` (Deep Cold Archive), `CLOUD_AR_RESTORED` (temporarily restored Archive), `CLOUD_COLD_AR_RESTORED` (temporarily restored Cold Archive), `CLOUD_DEEP_COLD_AR_RESTORED` (temporarily restored Deep Cold Archive)

### getStoragePolicy

```
./jindofs fs -getStoragePolicy -path <path>
```

Returns the storage policy assigned to a path.

### unsetStoragePolicy

```
./jindofs fs -unsetStoragePolicy -path <path>
```

Removes the storage policy from a path.

### checkStoragePolicy

```
./jindofs fs -checkStoragePolicy -path <path>
```

Returns the conversion task status for objects in a path.

**Status**

**Meaning**

`Pending`

Conversion task is queued

`Submitted`

Conversion task has been submitted

`Processing`

Conversion task is running

`Finalized`

Conversion task is complete

**Note**

This command reports OSS-HDFS metadata conversion task status only. It does not reflect the processing status of tasks submitted to OSS.

### Restore Archive or cold-tier objects

```
./jindofs fs -setStoragePolicy -path <path> -policy <policy> -restoreDays <days>
```

Temporarily restores Archive, Cold Archive, or Deep Cold Archive objects for direct access.

**Parameter**

**Description**

`-policy`

`CLOUD_AR_RESTORED` (Archive), `CLOUD_COLD_AR_RESTORED` (Cold Archive), or `CLOUD_DEEP_COLD_AR_RESTORED` (Deep Cold Archive)

`-restoreDays`

Retention period of the restored object in days. Default: `1`. Valid range: 1–7 for Archive; 1–365 for Cold Archive and Deep Cold Archive

**Before restoring:**

-   Wait at least two days after applying `CLOUD_AR`, `CLOUD_COLD_AR`, or `CLOUD_DEEP_COLD_AR` before running a restore.
    
-   After restoration starts, Archive objects become readable within several minutes. Cold Archive and Deep Cold Archive objects take several hours.
    
-   After the retention period ends, the object can no longer be read. To extend access, restore again during the retention period—allow at least two days between restoration operations.
    

**Important**

The total size of Archive, Cold Archive, or Deep Cold Archive objects you can convert to Standard or IA in a single operation cannot exceed 5 TB. The total size of Archive, Cold Archive, or Deep Cold Archive objects in the Processing state cannot exceed 50 TB.

## FAQ

-   [What do I do if I accidentally delete a lifecycle rule configured for OSS-HDFS data after enabling automatic storage tiering?](/help/en/oss/user-guide/oss-hdfs-service-faqs#3d4345c52660x)
    
-   [Can I convert the storage class of objects from Archive or Cold Archive to Standard or IA?](/help/en/oss/user-guide/oss-hdfs-service-faqs#462e16cfa1vxe)
    

## Related topics

-   [Storage classes](/help/en/oss/user-guide/overview-53/)
    
-   [Storage fees](/help/en/oss/storage-fees)
