The cp command transfers files or directories between your local system and Object Storage Service (OSS), or within OSS. This command supports upload, download, and copy operations, including concurrent transfers and Resumable Transfer.

Before using the cp command, ensure that you have [installed and configured ossutil](/help/en/oss/developer-reference/install-ossutil).

## Usage note

Before performing an upload, download, or copy, ensure the RAM User or RAM Role associated with your access credentials has the necessary permissions for the target bucket and objects. For details on authorization, see [Grant custom policy permissions to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## How it works

The `ossutil cp` command automatically determines whether to upload, download, or copy based on the source and destination path types.

ossutil automatically selects a transfer method based on file size:

-   Files smaller than the resumable transfer threshold are transferred in a single operation. By default, this threshold is 100 MB and can be changed using the `--bigfile-threshold` option.
    
-   If the file size is greater than or equal to the threshold, **Resumable Transfer** is used. If an upload is interrupted, the transferred portion is stored temporarily in the bucket as parts. To avoid storage costs, clean up these parts regularly. [Delete parts](/help/en/oss/developer-reference/rm#li-n3o-5sr-xg9) manually or configure [lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb) to delete them automatically.
    

When a Resumable Transfer fails, ossutil automatically creates a directory named `.ossutil_checkpoint` to store checkpoint information. This directory is automatically deleted upon successful completion of the transfer. You can also use the \--checkpoint-dir option to specify a custom directory for these checkpoint records.

## Upload objects

Use the [cp (upload objects)](/help/en/oss/developer-reference/upload-objects-6) command to upload local resources, such as files, images, and videos, to a specified Bucket.

-   **Upload a single object**: Upload a file from a specified local path to a bucket.
    
-   **Upload in bulk**: Upload an entire directory, including all its subdirectories and files.
    
-   **Filter by condition**: Use the `--include` and `--exclude` options for fine-grained bulk uploads. For example, you can upload only `.log` files or exclude all temporary (`.tmp`) files.
    

## Download objects

Use the [cp (download objects)](/help/en/oss/developer-reference/download-objects-5) command to download objects from OSS to your local system. This command supports downloading multiple objects, limiting the download speed, and downloading a specific version of an object from a versioning-enabled bucket.

-   **Download a single object**: Download a specified object.
    
-   **Download in bulk**: Download an entire directory structure from a bucket to your local system.
    
-   **Download a specific version**: If Versioning is enabled for your bucket, you can download a specific historical version of an object.
    

## Copy objects

Use the [cp (copy objects)](/help/en/oss/developer-reference/copy-objects-4) command to copy an object to a destination Bucket within the same region, or to another directory in the current Bucket. The copy operation does not change the object's content.

-   **Cross-bucket copy**: Copy an object from one bucket to another within the same region.
    
-   **In-bucket copy (for moving/renaming)**: Copy an object from one directory to another within the same bucket. This is commonly used to simulate 'move' or 'rename' operations, which are achieved by copying the object and then deleting the source.
    

The `ossutil cp` command cannot directly copy objects across different regions. To copy objects between buckets in different regions, use [Cross-Region Replication](/help/en/oss/user-guide/cross-region-replication-overview/) (CRR).

## Apply in production

### Tune concurrent performance

If the default concurrency level does not meet your performance requirements, you can adjust the **\-j, --jobs** and **\--parallel** options. By default, ossutil calculates the value for 'parallel' based on the file size. For bulk transfers of large files, the effective concurrency is the number of jobs multiplied by the parallel count.

-   If the server or Elastic Compute Service (ECS) instance running the command has limited resources (such as network bandwidth, memory, or CPU), consider lowering the concurrency values. If resources are underutilized, gradually increase the values.
    
-   Excessive concurrency can reduce performance due to thread-switching overhead and resource contention, and may even cause EOF errors. Adjust **\-j, --jobs** and **\--parallel** based on your machine's resources. When performance testing, start with a low concurrency level and gradually increase it to find the optimal value.
    

### Limit transfer rates

To prevent excessive bandwidth consumption, use the `--maxupspeed` or `--maxdownspeed` options to limit the upload or download rate.

## References

-   [cp (upload objects)](/help/en/oss/developer-reference/upload-objects-6)
    
-   [cp (download objects)](/help/en/oss/developer-reference/download-objects-5)
    
-   [cp (copy objects)](/help/en/oss/developer-reference/copy-objects-4)
