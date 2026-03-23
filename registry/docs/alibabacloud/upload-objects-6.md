Use the cp command to upload local files or directories to a specified bucket. This command supports simple uploads, resumable uploads, batch uploads, and incremental uploads. You can also specify details such as object metadata, storage class, and the access control list (ACL) during the upload.

## How it works

When you use the cp command to upload a file, ossutil automatically selects an upload method based on the file size:

-   **Simple upload**: Used for files smaller than the resumable upload threshold. The default threshold is 100 MB, which you can change using the `--bigfile-threshold` option.
    
-   **Resumable upload**: Used for files that are greater than or equal to the threshold. If an upload is interrupted, the uploaded parts are temporarily stored in the bucket. To avoid storage costs, you must clean up these parts periodically. You can manually [delete parts](/help/en/oss/developer-reference/rm#li-n3o-5sr-xg9) or configure [lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb) for automatic deletion.
    

## **Notes**

-   Starting with ossutil 1.6.16, you can use ossutil as the binary name on all supported operating systems. In earlier versions, you must use the OS-specific binary name for your system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions for all operations. However, a Resource Access Management (RAM) user or a RAM role has no permissions by default. The Alibaba Cloud account owner or an administrator must grant permissions using a [RAM policy](/help/en/oss/ram-policy-overview/) or a [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API Action**

**Description**

`oss:PutObject`

Uploads an object.

`oss:PutObjectTagging`

Optional. Required when you upload an object and set its tags.

`kms:GenerateDataKey`

Optional. Required when you upload an object and enable server-side encryption with KMS.

`kms:Decrypt`

## Command syntax

```
ossutil cp file_url cloud_url [options]
```

The following table describes the parameters and options.

**Parameter**

**Description**

file\_url

The path of the local file. If the source is a directory, the path must end with a path separator (/ or \\). For example, `/localfolder/examplefile.txt` on a Linux system or `D:\localfolder\examplefile.txt` on a Windows system.

cloud\_url

The path of the object, in the format `oss://bucket[/prefix]`. Example: `oss://examplebucket/examplefile.txt`.

\-r, --recursive

Performs the operation recursively. When you specify this option, ossutil performs the operation on all matching objects in the bucket. Otherwise, ossutil performs the operation only on the specified single object.

\-f --force

Forces the operation to proceed without a confirmation prompt.

\-u，--update

Uploads a file only if the destination object does not exist or if the source file was modified more recently than the destination object.

\--maxupspeed

The maximum upload speed. Unit: KB/s. The default value is 0, which indicates that the upload speed is not limited.

\--enable-symlink-dir

Uploads linked subdirectories. This option is disabled by default.

\--disable-all-symlink

Ignores all linked subfiles and linked subdirectories during an upload.

\--disable-ignore-error

Does not ignore errors during batch operations.

\--only-current-dir

Uploads only the files in the specified source directory, ignoring its subdirectories.

\--bigfile-threshold

The size threshold for a resumable upload. Unit: bytes.

Default value: 100 MB

Valid values: 0 to 9223372036854775807

\--part-size

The size of each part. Unit: bytes. By default, ossutil calculates an appropriate part size based on the file size.

Valid values: 1 to 9223372036854775807

\--checkpoint-dir

The directory that stores resumable upload records. If a resumable upload fails, ossutil automatically creates a directory named `.ossutil_checkpoint` and records checkpoint information in it. After the resumable upload is successful, the directory is deleted. If you specify this option, make sure that the specified directory can be deleted.

\--encoding-type

The encoding format of the filename. Set the value to url. If you do not specify this option, the filename is not encoded.

\--include

Includes all files that meet the specified conditions. For more information about the syntax and examples, see [Batch upload files that meet specified conditions](/help/en/oss/developer-reference/upload-objects-6#section-aw8-ss4-8r1).

\--exclude

Excludes all files that meet the specified conditions. For more information about the syntax and examples, see [Batch upload files that meet specified conditions](/help/en/oss/developer-reference/upload-objects-6#section-aw8-ss4-8r1).

\--meta

The metadata of the file. This includes standard HTTP headers and user-defined metadata, which starts with `x-oss-meta-`. The metadata must be in the `header:value#header:value` format. Example: `Cache-Control:no-cache#Content-Encoding:gzip`. For more information about metadata supported by OSS, see [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/#concept-lkf-swy-5db).

\--acl

The access control list (ACL) of the file. Valid values:

-   default (default): The ACL of the object is the same as the ACL of the bucket.
    
-   private: Only the owner of the bucket can read and write the objects in the bucket. Other users cannot access the objects.
    
-   public-read: Only the bucket owner can write to the objects in the bucket. Other users, including anonymous users, can read the objects. This can cause data leaks and unexpectedly high fees. If malicious users write illegal information to the objects, your legitimate rights and interests may be infringed. Do not configure this permission except in special scenarios.
    
-   public-read-write: Anyone, including anonymous users, can read and write the objects in the bucket. This can cause data leaks and unexpectedly high fees. Use caution when you configure this permission.
    

\--snapshot-path

The directory that stores snapshot information for uploaded files. In the next upload, ossutil reads the snapshot information from the specified directory to perform an incremental upload.

\--disable-crc64

Disables 64-bit cyclic redundancy check (CRC-64) data validation. By default, ossutil enables CRC-64 validation for data transmission.

\--disable-dir-object

Does not generate an object for the directory when you upload files.

\--payer

The payment method for the request. If you want the requester to pay the fees for traffic, requests, and other resources that are generated by accessing the specified path, set this option to requester.

\--tagging

The tags to add to the object during the upload. The format is `TagkeyA=TagvalueA&TagkeyB=TagvalueB....`.

\-j，--jobs

The number of concurrent tasks for operations on multiple files. The default value is 3. Valid values: 1 to 10000.

\--parallel

The number of concurrent tasks for operations on a single file. Valid values: 1 to 10000. If you do not set this option, ossutil determines the value based on the operation type and file size.

\--start-time

A UNIX timestamp. Objects last modified before this time are ignored.

**Note**

Only ossutil 1.7.18 and later support this parameter. For more information about upgrading, see [update (Upgrade ossutil)](/help/en/oss/developer-reference/update).

\--end-time

A UNIX timestamp. Objects last modified after this time are ignored.

**Note**

-   If you specify both \`start-time\` and \`end-time\`, the copy command is executed only for files that were last modified between the specified start and end times.
    
-   Only ossutil 1.7.18 and later support this parameter. For more information about how to upgrade the version, see [update (Upgrade ossutil)](/help/en/oss/developer-reference/update).
    

For more information about other common options for this command, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).

If the default number of concurrent tasks does not meet your performance requirements, you can adjust the **\-j, --jobs** and **\--parallel** options. By default, ossutil calculates the value of the \`parallel\` option based on the file size. When you transfer large files in batches, the actual number of concurrent tasks is the value of the \`jobs\` option multiplied by the value of the \`parallel\` option.

-   If the ECS instance or server that runs the command has limited resources, such as network bandwidth, memory, or CPU, you can reduce the number of concurrent tasks to a value such as 100 or less. If resources are not fully utilized, you can increase the number of concurrent tasks.
    
-   An excessively high number of concurrent tasks may decrease performance because of thread switching overhead and resource competition. This can even cause EOF errors. Adjust the **\-j, --jobs** and **\--parallel** options based on the actual resources of your machine. When you perform stress testing, start with a low number of concurrent tasks and gradually increase the number to find the optimal value.
    

## Examples

The following examples are run on a Linux system. You must modify the parameters based on your operating system and actual environment. The following conventions are used in the examples:

-   Bucket name: `examplebucket`
    
-   OSS directory: `desfolder/`
    
-   Local directory: `localfolder/`
    
-   Local file: `examplefile.txt`
    

### Upload a single file

-   Upload a file to a specified directory and use the original filename as the object name. If you do not specify an object name in OSS, the original filename is used by default. If you specify a name, the object is saved with that name in OSS.
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/
    ```
    
-   Upload a single file and use the \--meta option to set the metadata of the file. The metadata must be in the `header:value#header:value...` format.
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/examplefile.txt --meta=Cache-Control:no-cache#Content-Encoding:gzip
    ```
    

### Batch uploads

-   Upload only the files in a folder
    
    Add the \-r option to the cp command to upload only the files from a local folder to a specified path in OSS.
    
    ```
    ossutil cp -r localfolder/ oss://examplebucket/desfolder/
    ```
    
-   Upload files from a folder within a specified time range
    
    Upload files from a local folder to a specified OSS path. The files must be modified between 10:09:18 (UTC+8) on October 31, 2023 and 12:55:58 (UTC+8) on October 31, 2023.
    
    ```
    ossutil cp -r localfolder/ oss://examplebucket/desfolder/ --start-time 1698718158 --end-time 1698728158
    ```
    
-   Upload a folder and its files
    
    Use the cp command with the \-r option to upload a local folder and its files to a specified OSS path. For each subdirectory, OSS creates a corresponding 0 KB object that ends with a forward slash (/). However, OSS does not create a corresponding object for the specified folder. To create an object for the folder, you can use the [mkdir (create directories)](/help/en/oss/developer-reference/mkdir) command.
    
    ```
    ossutil cp -r localfolder/ oss://examplebucket/desfolder/localfolder/
    ```
    
-   Uploading a folder and skipping existing files
    
    When you retry a failed batch upload, you can specify the \--update (or \-u) option to skip successfully uploaded files and perform an incremental upload. For example:
    
    ```
    ossutil cp -r localfolder/ oss://examplebucket/desfolder/ -u
    ```
    
-   Upload only the files in the current directory and ignore subdirectories
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --only-current-dir -r
    ```
    
-   Upload without creating a directory object
    
    In OSS, a directory is represented by a 0 KB object whose name ends with a forward slash (/). When you upload a directory, you can add the \--disable-dir-object parameter. If you add this parameter, ossutil does not create an object for the directory, but you can still see the corresponding directory structure in the OSS console. When you delete all the files in the directory, the directory is also deleted.
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --disable-dir-object -r
    ```
    
-   Upload files in a linked subdirectory
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --enable-symlink-dir -r
    ```
    
-   Ignore all linked subfiles and linked subdirectories during an upload
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ -r --disable-all-symlink
    ```
    

### **Batch upload files that meet specified conditions**

When you upload files in batches, you can specify the \--include and \--exclude options to upload only the files that meet the specified conditions.

The \--include and \--exclude options support the following formats:

-   Asterisk (\*): Matches any number of characters. For example, \*.txt matches all TXT files.
    
-   Question mark (?): Matches a single character. For example, abc?.jpg matches all JPG files whose names are "abc" followed by a single character, such as abc1.jpg.
    
-   \[sequence\]: Matches any character in the sequence. For example, abc\[1-5\].jpg matches files named abc1.jpg to abc5.jpg.
    
-   \[!sequence\]: Matches any character outside the sequence. For example, abc\[!0-7\].jpg matches files whose names are not abc0.jpg to abc7.jpg.
    

A rule can contain multiple include and exclude conditions. ossutil matches each file against the conditions from left to right to determine whether to include or exclude the file. For example, consider a folder that contains a file named test.txt. Different matching rules produce the following results.

-   Rule 1: `--include "*test*" --exclude "*.txt"` . When the rule matches `--include "*test*"`, the result is that test.txt meets the condition. When the rule continues to match `--exclude "*.txt"`, test.txt is excluded because its filename contains .txt. The final result is that test.txt is not uploaded.
    
-   Rule 2: `--exclude "*.txt" --include "*test*"`. The file test.txt is first excluded by the `--exclude "*.txt"` rule. However, the subsequent `--include "*test*"` rule includes test.txt because its filename contains "test". As a result, test.txt is uploaded.
    
-   Rule 3: `--include "*test*" --exclude "*.txt" --include "te?t.txt"` . First, the `--include "*test*"` rule includes test.txt. Next, the `--exclude "*.txt"` rule excludes test.txt. Finally, the `--include "te?t.txt"` rule includes test.txt again. Therefore, test.txt is uploaded.
    

**Important**

You cannot specify a directory format in the conditions. For example, `--include "/usr/test/.jpg"` is not supported.

The following are examples:

-   Upload all files in the TXT format
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --include "*.txt" -r
    ```
    
-   Upload all files whose names contain abc and are not in the JPG or TXT format
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --include "*abc*" --exclude "*.jpg" --exclude "*.txt" -r
    ```
    

### **Throttle uploads**

When you upload files, you can use the \--maxupspeed option to limit the maximum upload speed in KB/s. The following are examples:

-   Upload a file and set the speed limit to 1 MB/s
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/ --maxupspeed 1024
    ```
    
-   Upload a folder and set the speed limit to 1 MB/s
    
    ```
    ossutil cp -r localfolder/ oss://examplebucket/desfolder/ --maxupspeed 1024
    ```
    

### **Upload and set object tags**

When you upload a file, you can use the \--tagging option to set object tags. Separate multiple tags with ampersands (&). The following is an example:

```
ossutil cp examplefile.txt oss://examplebucket/desfolder/ --tagging "abc=1&bcd=2&……"
```

For more information about object tagging, see [object tagging](/help/en/oss/developer-reference/object-tagging-10#concept-1614441).

### **Upload and specify a storage class**

When you upload a file, you can use the \--meta option to set its storage class. Valid values are:

-   Standard: Standard
    
-   IA: Infrequent Access
    
-   Archive: Archive Storage
    
-   ColdArchive: Cold Archive
    
-   DeepColdArchive: Deep Cold Archive
    

If you do not specify a storage class during the upload, the object inherits the storage class of the bucket. For more information, see [Storage classes](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb).

The following are examples of uploading a file and specifying a storage class:

-   Upload a single file and set its storage class to Infrequent Access
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/ --meta X-oss-Storage-Class:IA
    ```
    
-   Upload a folder and set the storage class of its files to Standard
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --meta X-oss-Storage-Class:Standard -r
    ```
    

### **Upload and specify an ACL**

When you upload a file, you can use the \--acl option to set its **access control list** (ACL). Valid values for the file ACL are:

-   default: inherits the ACL of the bucket (default)
    
-   private: private
    
-   public-read: public-read
    
-   public-read-write: Public read and write access.
    

The following are examples:

-   Upload a single file and set its ACL to private
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/ --acl private
    ```
    
-   Upload a folder and set the ACL of its files to public-read
    
    ```
    ossutil cp localfolder/ oss://examplebucket/desfolder/ --acl public-read  -r
    ```
    

### **Upload and specify an encryption method**

When you upload a file, you can specify a server-side encryption method to encrypt the file before it is saved in the bucket. The following are examples:

-   Upload a file and specify SSE-OSS as the encryption method and AES256 as the encryption algorithm
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/ --meta=x-oss-server-side-encryption:AES256
    ```
    
-   Upload a file, specify SSE-KMS as the encryption method and do not specify a CMK ID
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/ --meta=x-oss-server-side-encryption:KMS
    ```
    
    When you use KMS encryption, you are charged a small fee for using KMS keys. For more information, see [KMS pricing](/help/en/kms/key-management-service/support/billing-of-kms#section-br1-k3j-kfb).
    
-   Upload a file and specify SSE-KMS as the encryption method and a CMK ID
    
    ```
    ossutil cp examplefile.txt oss://examplebucket/desfolder/ --meta=x-oss-server-side-encryption:KMS#x-oss-server-side-encryption-key-id:7bd6e2fe-cd0e-483e-acb0-f4b9e1******
    ```
    

For more information about server-side encryption, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db).

### **Upload and generate snapshots**

When you upload files in batches, if you specify the \--snapshot-path option, ossutil generates a snapshot of the file upload progress in the specified directory. The snapshot records the \`lastModifiedTime\` of the successfully uploaded local files. During the next upload, ossutil compares the \`lastModifiedTime\` to determine whether to skip the file. Therefore, when you use this option, you must ensure that no other users change the corresponding object in OSS between the two uploads. The \--snapshot-path option is suitable for accelerating incremental uploads. The following is an example:

```
ossutil cp -r localfolder/ oss://examplebucket/desfolder/ --snapshot-path=path                                
```

**Important**

-   ossutil does not automatically delete the snapshot information in the snapshot-path directory. To prevent the snapshot information from becoming too large, you must periodically delete unneeded snapshots from the snapshot-path directory.
    
-   Reading and writing snapshot information incurs additional overhead. Do not use this option if you are uploading a small number of files in a batch, if the network condition is good, or if other users are operating the same object. For these scenarios, you can use the \--update option for incremental uploads.
    
-   You can use the \--update and \--snapshot-path options at the same time. ossutil first checks the \`snapshot-path\` information to determine whether to skip a file. If the file is not skipped based on the snapshot, ossutil then uses the \--update option to determine whether to skip the file.
    

### **Upload and configure pay-by-requester**

```
ossutil cp localfolder/examplefile.txt oss://examplebucket/ --payer=requester
```

### Cross-account or cross-region **uploads**

Use the `-e`, `-i`, and `-k` common options to upload the local file exampleobject.txt to the desfolder/ directory in the examplebucket bucket. This bucket is located in the China (Shanghai) region and is owned by another Alibaba Cloud account.

**Note**

You must specify the endpoint that corresponds to the region where the bucket is located. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

```
ossutil cp exampleobject.txt oss://examplebucket/desfolder/ -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID  -k yourAccessKeySecret
```
