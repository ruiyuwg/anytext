This topic describes how to use the probe command to detect exceptions of network connectivity between the local client and Object Storage Service (OSS), check upload and download bandwidths, and obtain the status of local symbolic links.

## **Usage notes**

To check upload bandwidth, you must have the `oss:GetObject`, `oss:PutObject`, and `oss:DeleteObject` permissions. To check download bandwidth, you must have the `oss:GetObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Command description

You can run the probe command to detect exceptions of network connectivity between the local client and OSS and check the upload and download bandwidths. You can also run this command to check the status of a large number of symbolic links before you upload them.

-   Detect network exceptions
    
    ossutil checks the status of the network connection between the local client and OSS by uploading or downloading objects. To upload or download objects to the specified path when you detect network exceptions, we recommend that you specify the names of the objects. If you need only to detect network exceptions, you can run the command without specifying object names. ossutil generates temporary objects for detection and deletes the objects after the network is detected.
    
-   Check upload and download bandwidths
    
    When you run this command to check upload and download bandwidths, OSS provides a recommended number of concurrent upload and download tasks based on the CPU of your local devices and your network bandwidth. You can use the recommended number of concurrent tasks to maximize the usage of your network bandwidth.
    
-   Check the status of local symbolic links
    
    When you upload a large number of symbolic links, the upload is interrupted when one of the links is abnormal. We recommend that you check the status of local symbolic links before you upload them. If one of the symbolic links is abnormal, fix the issue before you upload the links.
    

After you run the probe command, you can view the procedure and task result.

-   Detect network exceptions by uploading or downloading objects
    
    -   A check mark (√) indicates that the check result is positive. A cross sign (×) indicates that the check result is negative.
        
    -   If the detection succeeds, ossutil returns the information about the upload or download task, including the size of the uploaded or downloaded object, the time used to complete the upload or download task, and the path to which the object is uploaded or downloaded.
        
    -   If the detection fails, ossutil returns the error causes or error codes, which can be used to troubleshoot the errors.
        
        For more information about error codes, see [Overview](/help/en/oss/user-guide/overview-14#concept-dt2-hq3-wdb).
        
    -   After a detection is complete, ossutil creates a log file named in the `logOssProbe+DetectionCompletionTime.log` format in the installation directory. The log file contains detailed information about the probe command.
        
-   Check a specific item
    
    When you run the probe command to check the upload and download bandwidths or the status of local symbolic links, ossutil provides the check results and suggestions.
    

## Check the network connection status by uploading an object and generate a report

ossutil can check the network connection status between the local client and the specified bucket by uploading an object to the bucket.

-   Command syntax
    
    ```
    ossutil probe {--upload [file_name]} {--bucket bucket_name} [--object object_name] [--addr domain_name] [--upmode]
    ```
    
    The following table describes the parameters in the preceding command.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    \--upload
    
    /
    
    Yes
    
    Specifies that the network connection detection is performed by uploading an object.
    
    file\_name
    
    string
    
    No
    
    The full path of the local file that you want to upload to the bucket. If you do not specify this parameter, ossutil generates a temporary file and detects network connection by uploading the file.
    
    \--bucket
    
    string
    
    No
    
    The name of the bucket.
    
    \--object
    
    string
    
    No
    
    The name of the object that you want to upload. If you specify this parameter in the command, ossutil stores the uploaded object in the specified bucket by using the specified name. If you do not specify this parameter in the command, ossutil deletes the uploaded object after the network connection detection is complete.
    
    \--addr
    
    string
    
    No
    
    Specifies the network address. ossutil uses a ping operation to check the network connection between your local computer and the specified address.
    
    Default value: `www.aliyun.com`.
    
    \--upmode
    
    string
    
    No
    
    The method used to upload the object.
    
    Valid values:
    
    -   normal (default): The object is uploaded by using simple upload.
        
    -   append: The object is uploaded by using append upload.
        
    -   multipart: The object is uploaded by using multipart upload.
        
    
-   Sample commands
    
    -   Check the network by uploading a random object and specifying the network address
        
        In this example, the bucket to which the object is uploaded is named examplebucket and the network address to check is `aliyun.com`. Sample command:
        
        ```
        ossutil probe --upload --bucket examplebucket --addr aliyun.com
        ```
        
        Sample output:
        
        ```
        begin parse parameters and prepare file...[√]
        begin network detection...[√]
        begin upload file(normal)...[√]
        
        *************************  upload result  *************************
        upload file:success
        upload file size:143360(byte)
        upload time consuming:456(ms)
        (only the time consumed by probe command)
        
        upload object is oss-test-probe-1716280906324488100-quky8a902r
        
        ************************* report log info*************************
        report log file:E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\logOssProbe20240521164146.log
        ```
        
    -   Check network connectivity by uploading a specified object in default simple upload mode and delete the uploaded object after detection is complete
        
        In this example, the example.txt file is uploaded from D:\\localpath to the examplebucket bucket. Sample command:
        
        ```
        ossutil probe --upload D:\localpath\example.txt --bucket examplebucket 
        ```
        
        Sample output:
        
        ```
        begin parse parameters and prepare file...[√]
        begin network detection...[√]
        begin upload file(normal)...[√]
        
        *************************  upload result  *************************
        upload file:success
        upload file size:9(byte)
        upload time consuming:366(ms)
        (only the time consumed by probe command)
        
        upload object is oss-test-probe-1716281191298397500-hi8237d15e
        
        ************************* report log info*************************
        report log file:E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\logOssProbe20240521164631.log
        ```
        

## Check network connectivity by downloading an object from the object URL and generate a report

ossutil can check network connectivity between the local client and a bucket by downloading an object from the bucket based on the object URL.

-   Command syntax
    
    ```
    ossutil probe {--download} {--url http_url} [--addr=domain_name] [file_name]
    ```
    
    The following table describes the parameters in the preceding command.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    \--download
    
    /
    
    Yes
    
    Specifies that the network connection check is performed by downloading an object.
    
    \--url
    
    string
    
    Yes
    
    The URL of the object that you want to download. ossutil uses this URL to download the object to a local directory.
    
    -   If the access control list (ACL) of the object that you want to download is public-read, set this parameter to the URL of the object. Example: `https://examplebucket.oss-cn-beijing.aliyuncs.com/example.jpg`.
        
    -   If the ACL of the object that you want to download is private, set this parameter to the signed URL of the object. The URL must be enclosed in double quotation marks (""). Example: `"https://examplebucket.oss-cn-beijing.aliyuncs.com/example.jpg?Expires=1552015472&OSSAccessKeyId=TMP.******5r9f1FV12y8_Qis6LUVmvoSCUSs7aboCCHtydQ0axN32Sn-UvyY3AAAwLAIUarYNLcO87AKMEcE5O3A******oCFAQuRdZYyVFyqOW8QkGAN-bamUiQ&Signature=bIa4llbMbldrl7rwckr%2FXXvTtxw%3D"`.
        
    
    \--addr
    
    string
    
    No
    
    Specifies the network address. ossutil uses a ping operation to check the network connection between your local computer and the specified address.
    
    Default value: `www.aliyun.com`.
    
    file\_name
    
    string
    
    No
    
    The local path to which the object is downloaded.
    
    -   If you specify only the object name but do not specify a directory, the object is stored by using the specified name in the installation directory of ossutil.
        
    -   If you specify only a directory but do not specify the object name, the object is stored by using its original name in the specified directory.
        
    -   If you do not specify this parameter, the object is stored by using its original name in the installation directory of ossutil.
        
    
-   Sample commands
    
    -   Check network connectivity by downloading a specific object from the object URL and rename the object
        
        In this example, the `example.txt` object whose ACL is public-read is downloaded from `https://examplebucket.oss-cn-beijing.aliyuncs.com/example.txt` to a local directory and renamed `/localfile/test.txt`. Sample command:
        
        ```
        ossutil probe --download --url https://examplebucket.oss-cn-beijing.aliyuncs.com/example.txt  /localfile/test.txt
        ```
        
        Sample output:
        
        ```
        begin parse parameters and prepare object...[√]
        begin network detection...[√]
        begin download file...[√]
        
        *************************  download result  *************************
        download file:success
        download file size:9(byte)
        download time consuming:278(ms)
        (only the time consumed by probe command)
        
        download file is E:\localfile\test.txt
        
        ************************* report log info*************************
        report log file:E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\logOssProbe20240521173050.log
                                        
        ```
        
    -   Check network connectivity by downloading an object from its URL and specifying the network address for a ping test
        
        In this example, the `example.txt` object whose ACL is public-read is downloaded from `https://examplebucket.oss-cn-beijing.aliyuncs.com/example.txt` to a local directory and the network address for a ping test is `aliyun.com`. Sample command:
        
        ```
        ossutil probe --download --url https://examplebucket.oss-cn-beijing.aliyuncs.com/example.txt --addr aliyun.com
        ```
        
        Sample output:
        
        ```
        begin parse parameters and prepare object...[√]
        begin network detection...[√]
        begin download file...[√]
        
        *************************  download result  *************************
        download file:success
        download file size:9(byte)
        download time consuming:316(ms)
        (only the time consumed by probe command)
        
        download file is E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\example.txt
        
        ************************* report log info*************************
        report log file:E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\logOssProbe20240521173448.log                               
        ```
        

## Check network connectivity by downloading an object and generate a report

ossutil can check network connectivity between the local client and a bucket by downloading an object from the bucket.

-   Command syntax
    
    ```
    ossutil probe {--download} {--bucket bucket_name} [--object object_name] [--addr domain_name] [file_name]
    ```
    
    The following table describes the parameters in the preceding command.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    \--download
    
    /
    
    Yes
    
    Specifies that the network connection check is performed by downloading an object.
    
    \--bucket
    
    string
    
    Yes
    
    The name of the bucket.
    
    \--object
    
    string
    
    No
    
    The name of the object that you want to download. If you specify this parameter in the command, ossutil downloads the specified object to a local directory. If you do not specify this parameter in the command, ossutil generates a temporary object, uploads the object to the specified bucket, and then downloads the object. After the network connection check is complete, ossutil deletes the temporary object from the bucket.
    
    \--addr
    
    string
    
    No
    
    Specifies the network address. ossutil uses a ping operation to check the network connection between your local computer and the specified address.
    
    Default value: `www.aliyun.com`.
    
    file\_name
    
    string
    
    No
    
    The local path to which the object is downloaded.
    
    -   If you specify only the object name but do not specify a directory, the object is stored by using the specified name in the installation directory of ossutil.
        
    -   If you specify only a directory but do not specify the object name, the object is stored by using its original name in the specified directory.
        
    -   If you do not specify this parameter, the object is stored by using its original name in the installation directory of ossutil.
        
    
-   Sample commands
    
    -   Check network connectivity by downloading an object and rename the object
        
        In this example, the `ossfolder/example.txt` object is downloaded from the examplebucket bucket and renamed `/localfolder/text.txt`. Sample command:
        
        ```
        ossutil probe --download --bucket examplebucket --object ossfolder/example.txt /localfolder/text.txt
        ```
        
        Sample output:
        
        ```
        begin parse parameters and prepare object...[√]
        begin network detection...[√]
        begin download file...[√]
        
        *************************  download result  *************************
        download file:success
        download file size:9(byte)
        download time consuming:416(ms)
        (only the time consumed by probe command)
        
        download file is E:\localfolder\text.txt
        
        ************************* report log info*************************
        report log file:E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\logOssProbe20240521180217.log
        ```
        
    -   Check the network connectivity status by downloading a temporary object and specifying the address of the network for a ping test
        
        In this example, a temporary object is downloaded from the examplebucket bucket. The network address to check is `aliyun.com`. Sample command:
        
        ```
        ossutil probe --download --bucket examplebucket --addr aliyun.com
        ```
        
        Sample output:
        
        ```
        begin parse parameters and prepare object...[√]
        begin network detection...[√]
        begin download file...[√]
        
        *************************  download result  *************************
        download file:success
        download file size:143360(byte)
        download time consuming:865(ms)
        (only the time consumed by probe command)
        
        download file is E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\oss-test-probe-1716286063484973300-rrmrfgtv8w
        
        ************************* report log info*************************
        report log file:E:\00-OSS\01-ossutil\05-v2\ossutil-2.0.0-beta.24041600-windows-amd64\logOssProbe20240521180533.log
        ```
        

## Check a specific item

You can run the probe command to check a specific item, such as the status of local symbolic links, the upload bandwidth, or the download bandwidth. ossutil returns the names of abnormal symbolic links and a recommended number of concurrent uploads and downloads based on the check results of the specific check item.

-   Command syntax
    
    ```
    ossutil probe {--probe-item item_value} {--bucket bucket-name} [--object object_name][--parallel <value>][--part-size <value>][--runtime <value>]
    ```
    
    The following table describes the parameters in the preceding command.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    \--probe-item
    
    string
    
    Yes
    
    The item that you want to check.
    
    Valid values:
    
    -   cycle-symlink: ossutil checks whether abnormal symbolic links exist in the local path.
        
    -   upload-speed: ossutil checks the upload bandwidth.
        
    -   download-speed: ossutil checks the download bandwidth.
        
    -   download-time: ossutil checks the amount of time required to download an object.
        
    
    \--bucket
    
    string
    
    Yes when the value of \--probe-item is not `cycle-symlink`
    
    The name of the bucket.
    
    \--object
    
    string
    
    Yes when \--probe-item is set to `download-speed`
    
    The path of the object. The object must exist. We recommend that you specify an object that is larger than 5 MB in size. Example: `ossfolder/example.txt`.
    
    \--parallel
    
    int
    
    No
    
    The number of concurrent tasks for an operation on a single object. Default value: 1.
    
    **Note**
    
    This parameter takes effect only when \--probe-item is set to `download-time`.
    
    \--part-size
    
    int
    
    No
    
    The part size. Unit: bytes. By default, ossutil determines the part size based on the object size.
    
    Valid values: 1 to 9223372036854775807.
    
    **Note**
    
    This parameter takes effect only when \--probe-item is set to `download-time`.
    
    \--runtime
    
    int
    
    No
    
    The execution time. If the execution time is reached, the command execution is interrupted.
    
    **Note**
    
    This parameter takes effect only when \--probe-item is set to `upload-speed` or `download-speed`.
    
-   Sample commands
    
    -   In this example, ossutil checks whether abnormal symbolic links exist in the localfolder directory.
        
        Sample command:
        
        ```
        ossutil probe --probe-item cycle-symlink  D:\localfolder
        ```
        
        Sample output:
        
        ```
         success
        
        0.009583(s) elapsed
        ```
        
        The output indicates that no abnormal symbolic links exist in the path.
        
    -   Check the upload bandwidth
        
        In this example, ossutil uploads a temporary object to a bucket named examplebucket and returns a recommended number of concurrent uploads based on the hardware performance and the upload bandwidth.
        
        Sample command:
        
        ```
        ossutil probe --probe-item upload-speed --bucket examplebucket
        ```
        
        Sample output:
        
        ```
        cpu core count:8
        parallel:8,average speed:1956.41(KB/s),current speed:2976.00(KB/s),max speed:2976.00(KB/s)
        parallel:9,average speed:1903.45(KB/s),current speed:1216.00(KB/s),max speed:2720.00(KB/s)
        parallel:10,average speed:1945.38(KB/s),current speed:1184.00(KB/s),max speed:3168.00(KB/s)
        parallel:11,average speed:2102.07(KB/s),current speed:7840.00(KB/s),max speed:7840.00(KB/s)
        parallel:12,average speed:1899.03(KB/s),current speed:1568.00(KB/s),max speed:3168.00(KB/s)
        parallel:13,average speed:1934.34(KB/s),current speed:1760.00(KB/s),max speed:8544.00(KB/s)
        parallel:14,average speed:1765.52(KB/s),current speed:1984.00(KB/s),max speed:2880.00(KB/s)
        parallel:15,average speed:2284.14(KB/s),current speed:2016.00(KB/s),max speed:6688.00(KB/s)
        parallel:16,average speed:2544.55(KB/s),current speed:4032.00(KB/s),max speed:9344.00(KB/s)
        
        suggest parallel is 16, max average speed is 2544.55(KB/s)
        ```
        
        The output indicates that the device has a 8-core CPU, that the maximum average upload bandwidth is 2544.55 KB/s, and that the recommended number of concurrent uploads is 16.
        
    -   Check the download bandwidth
        
        In this example, ossutil downloads the `example.txt` object from the examplebucket bucket and recommends the number of concurrent downloads based on the hardware performance and download bandwidth.
        
        Sample command:
        
        ```
        ossutil probe --probe-item download-speed --bucket examplebucket --object example.txt
        ```
        
        Sample output:
        
        ```
        cpu core count:8
        parallel:8,average speed:1.41(KB/s),current speed:1.69(KB/s),max speed:1.78(KB/s)
        parallel:9,average speed:1.48(KB/s),current speed:1.02(KB/s),max speed:1.95(KB/s)
        parallel:10,average speed:1.52(KB/s),current speed:1.60(KB/s),max speed:2.11(KB/s)
        parallel:11,average speed:1.41(KB/s),current speed:2.17(KB/s),max speed:2.34(KB/s)
        parallel:12,average speed:1.86(KB/s),current speed:1.71(KB/s),max speed:2.47(KB/s)
        parallel:13,average speed:1.90(KB/s),current speed:0.58(KB/s),max speed:2.65(KB/s)
        parallel:14,average speed:1.17(KB/s),current speed:0.99(KB/s),max speed:2.29(KB/s)
        parallel:15,average speed:1.86(KB/s),current speed:1.42(KB/s),max speed:2.84(KB/s)
        parallel:16,average speed:1.93(KB/s),current speed:0.76(KB/s),max speed:2.56(KB/s)
        
        suggest parallel is 16, max average speed is 1.93(KB/s)
        ```
        
        The output indicates that the device has a 8-core CPU, that the maximum average download bandwidth is 1.93 KB/s, and that the recommended number of concurrent downloads is 16.
        
    -   Check the download bandwidth and specify the maximum execution time
        
        In this example, a maximum execution time is specified for ossutil to download the `example.zip` object from the examplebucket bucket and return a recommended number of concurrent downloads based on the hardware performance and download bandwidth.
        
        ```
        ossutil probe --probe-item download-speed --bucket examplebucket --object  example.zip --runtime 2
        ```
        
        Sample output:
        
        ```
        cpu core count:8
        parallel:8,average speed:937.76(KB/s),current speed:952.00(KB/s),max speed:1044.00(KB/s)))
        parallel:9,average speed:935.59(KB/s),current speed:936.00(KB/s),max speed:1016.00(KB/s))
        parallel:10,average speed:924.45(KB/s),current speed:940.00(KB/s),max speed:968.00(KB/s)
        parallel:11,average speed:930.48(KB/s),current speed:828.00(KB/s),max speed:1104.00(KB/s))
        parallel:12,average speed:908.21(KB/s),current speed:920.00(KB/s),max speed:1000.00(KB/s))
        parallel:13,average speed:923.86(KB/s),current speed:992.00(KB/s),max speed:992.00(KB/s)
        parallel:14,average speed:794.14(KB/s),current speed:776.00(KB/s),max speed:948.00(KB/s)
        parallel:15,average speed:835.28(KB/s),current speed:936.00(KB/s),max speed:960.00(KB/s)
        parallel:16,average speed:935.62(KB/s),current speed:932.00(KB/s),max speed:984.00(KB/s)
        
        suggest parallel is 8, max average speed is 937.76(KB/s)
        
        run download-speed  2 seconds with parallel 8
        parallel:8,average speed:809.67(KB/s),current speed:651.08(KB/s),max speed:891.08(KB/s)
        281.731035(s) elapsed
        ```
        
    -   Check the time consumed by a download
        
        In this example, ossutil downloads the `example.txt` object from the examplebucket bucket and returns the time consumed by the download task. Sample command:
        
        ```
        ossutil probe --probe-item download-time --bucket examplebucket --object example.txt
        ```
        
        Sample output:
        
        ```
        download-speed part-size:-1, parallel:1 total bytes:9, cost:0.057 s, avg speed:NaN(kB/s)
        
        0.539351(s) elapsed
        ```
        
    -   Check the time consumed by a download and set the part size
        
        In this example, ossutil downloads the `example.zip` object from the examplebucket bucket based on the specified part size and returns the time consumed by the download task.
        
        ```
        ossutil probe --probe-item download-time --bucket examplebucket --object example.zip --part-size 10000000
        ```
        
        Sample output:
        
        ```
        downloading average speed:904.75(KB/s),current speed:1777.62(KB/s),max speed:1868.00(KB/s)
        download-speed part-size:10000000, parallel:1 total bytes:11881599, cost:12.831 s, avg speed:966.92(kB/s)
        
        13.188139(s) elapsed
        ```
        
    -   Check the time consumed by a download and configure the concurrency level
        
        In this example, ossutil downloads the `example.zip` object from the examplebucket bucket based on the specified part size and returns the time consumed by the download task.
        
        ```
        ossutil probe --probe-item download-time --bucket examplebucket --object example.zip --parallel 3
        ```
        
        Sample output:
        
        ```
        downloading average speed:910.58(KB/s),current speed:1740.00(KB/s),max speed:1876.00(KB/s)
        download-speed part-size:-1, parallel:3 total bytes:11881599, cost:12.728 s, avg speed:966.92(kB/s)
        
        12.984432(s) elapsed
        ```
