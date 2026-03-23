Use the hash command to calculate the MD5 or CRC-64 hash of a local file.

**Important**

For ossutil 1.6.16 and later, you can use ossutil as the binary name in the command line regardless of your operating system. For versions earlier than 1.6.16, you must specify a binary name that corresponds to your operating system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

## Command syntax

```
ossutil hash localfile [--type=<value>]
```

The following table describes the parameters and options.

**Parameter or option**

**Description**

localfile

The full path of the local file.

\--type

The type of data computation. The valid values are as follows:

-   md5: Calculates the MD5 hash of the local file.
    
    If you set this parameter to md5, the command returns both the MD5 hash and the Content-MD5 value. The Content-MD5 value is the Base64-encoded 128-bit MD5 hash. For more information about Content-MD5, see [RFC 1864](https://tools.ietf.org/html/rfc1864).
    
-   crc64 (default): Calculates the CRC-64 hash of the local file. The calculation is based on CRC-64/XZ.
    

After you upload a file to a destination bucket, note the following about the file's CRC-64 and MD5 values:

-   You can run the stat command and check the `X-Oss-Hash-Crc64ecma` and `Content-Md5` fields to obtain the CRC-64 and Content-MD5 values of the file. For more information, see [stat (view bucket and object information)](/help/en/oss/developer-reference/stat#concept-303806).
    
-   You cannot run the stat command to view the CRC-64 value of a file that was uploaded to a bucket before OSS supported CRC-64 verification.
    
-   You cannot run the stat command to view the Content-MD5 value of a file that was uploaded using append upload or multipart upload.
    

## Examples

-   Calculate the CRC-64 hash of the local file `test.txt`.
    
    ```
    ossutil hash test.txt --type=crc64
    CRC64-ECMA                  : 295992936743767023
    ```
    
-   Calculate the MD5 hash of the local file `test.txt`.
    
    ```
    ossutil hash test.txt --type=md5
     MD5                         : 01C3C45C03B2AF225EFAD9F911A33D73
     Content-MD5                 : AcPEXAOyryJe+tn5EaM9cw==
    ```
