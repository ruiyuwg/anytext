To organize objects in a bucket, you can use directories. This topic describes how to use the mkdir command to create directories in Object Storage Service (OSS).

## **Usage notes**

-   To create a directory, you must have the `oss:GetObject` and `oss:PutObject` permissions. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   For ossutil 1.6.16 and later, you can directly use ossutil as the binary name in the command line. You do not need to update the binary name based on the operating system. For ossutil earlier than 1.6.16, you must specify a binary name that corresponds to the operating system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## Command syntax

```
ossutil mkdir oss://bucketname/dirname [--encoding-type <value>]
```

The following table describes the parameters and options in the command syntax.

**Parameter/Option**

**Description**

bucketname

The name of the bucket for which you want to create a directory.

dirname

The name of the directory that you want to create. A directory name must end with a forward slash (/). If you do not end the directory name with a forward slash (/), ossutil automatically adds one at the end.

\--encoding-type

The encoding type used to encode the directory name, which is specified by the part following `oss://bucket_name` in the value of dirname. Valid value: url. If you do not specify this option, the directory name is not encoded.

## Examples

You can perform the following steps to upload an object to the specified directory:

1.  Create a directory.
    
    -   Create a single-level directory
        
        ```
        ossutil mkdir oss://examplebucket/dir/
        ```
        
        If a similar output is returned, a directory named dir/ is created in a bucket named examplebucket.
        
        ```
        0.385877(s) elapsed
        ```
        
    -   Create a multi-level directory
        
        To further classify objects stored in a directory, you can create multi-level directories. For example, you can run the following command to create a subdirectory that is named 2021/ within the Photo/ directory to store images that are generated in 2021:
        
        ```
        ossutil mkdir oss://examplebucket/Photo/2021/ 
        ```
        
        If you delete the 2021/ subdirectory and its parent directory Photo/ which does not contain any objects, the Photo/ directory is also deleted.
        
2.  Upload an object to the directory
    
    You can run the following command to upload an object named exampleobject.txt to the dir/ directory in a bucket named examplebucket:
    
    ```
    ossutil cp exampleobject.txt oss://examplebucket/dir/
    ```
    
    If a similar output is returned, the object is uploaded to the directory.
    
    ```
    Succeed: Total num: 1, size: 0. OK num: 1(upload 1 files).
    
    average speed 0(byte/s)
    ```
    

## Common options

If you use ossutil to switch to a bucket that is located in another region, add the \-e option to specify the endpoint of the region in which the bucket is located. If you use ossutil to switch to a bucket that belongs to another Alibaba Cloud account, add the \-i option to specify the AccessKey ID of the specified account, and add the \-k option to specify the AccessKey secret of the specified account.

For example, you can run the following command to create a directory named dir/ in the examplebucket bucket that is located in the China (Hangzhou) region and owned by another Alibaba Cloud account:

```
ossutil mkdir oss://examplebucket/dir/ -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeySecretID  -k yourAccessKeySecret
```

For more information about common options, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).
