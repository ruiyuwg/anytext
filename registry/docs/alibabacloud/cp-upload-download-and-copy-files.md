You can use the `cp` command to efficiently manage and migrate data. This command supports uploading, downloading, and copying single or multiple objects.

## Notes

-   Please make sure that the necessary permissions have been granted before initiating upload, download, or copy operations. For more information, see [Grant custom policy permissions to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   The `cp` command does not support cross-account or cross-region copy operations.
    
-   You can download specified versions of objects stored in versioning-enabled buckets.
    

## Upload files

You can use the `cp` command to upload local files as objects to an OSS bucket. The command supports large object uploads and provides various options, such as setting permissions for uploaded objects and filtering objects that meet specific conditions. You can also use the `-r` option to recursively upload all objects in a directory.

## Download files

You can use the `cp` command to download objects from an OSS bucket to your local machine. The command supports downloading single or multiple objects. You can also set a time range to filter objects from a specific period. You can optimize the download by configuring options such as throttling.

## Copy files

You can also use the `cp` command to copy objects between different buckets in the same region, or between different directories in the same bucket. The object content remains unchanged during the copy operation. By default, tags and object attributes are also copied. Note that cross-account and cross-region copy operations are not supported.

## References

-   [cp (upload objects)](/help/en/oss/developer-reference/cp-upload-file)
    
-   [cp (download objects)](/help/en/oss/developer-reference/cp-download-file)
    
-   [cp (copy objects)](/help/en/oss/developer-reference/cp-1)
