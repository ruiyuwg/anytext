ossutil 2.0 simplifies Object Storage Service (OSS) management across operating systems and enables fast file upload, download, synchronization, and management. You can use it for large-scale data migration and daily operations, making it ideal for developers, operations engineers, and businesses.

**Operating system**

**System architecture**

**Download link**

**SHA256 checksum**

Linux

x86\_32

[ossutil-2.2.1-linux-386.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-386.zip)

09726a85eb35f863fc584f4fa1ca5e6a8805729083bc29ec91e803f0eb64bcc7

x86\_64

[ossutil-2.2.1-linux-amd64.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-amd64.zip)

fbf1026bd383a5d9bee051cd64a6226c730357ba569491f7c7b91af66560ef1d

arm32

[ossutil-2.2.1-linux-arm.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-arm.zip)

30fed1691d774a3d1872cae0fc266122b8f9c68c990199361d974406f7d2ef5a

arm64

[ossutil-2.2.1-linux-arm64.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-arm64.zip)

b7680e79aec0adc9d42a12b795612680a58efec1fad24b0ceb9e13b2390c6652

macOS

x86\_64

[ossutil-2.2.1-mac-amd64.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-mac-amd64.zip)

a1bf1491037e138e52b0b92cdfd620decdc9e22d8dd1d8699226a8f2596b0cc2

arm64

[ossutil-2.2.1-mac-arm64.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-mac-arm64.zip)

326bff983e8e02142fc4e68d07f129475f9cbafb9777ed57cd7b6640edd8595c

Windows

x86\_32

[ossutil-2.2.1-windows-386.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-windows-386.zip)

36043ddeed88188f36b41b631fae3c6909ffffb661d34bc1d5405863f9064d0c

x86\_64

[ossutil-2.2.1-windows-amd64.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-windows-amd64.zip)

a7c22a0172fdca0e54cb8366f1ae8a869bc6bb64c1899352eb62d8eb9a1a9af0

amd64

[ossutil-2.2.1-windows-amd64-go1.20.zip](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-windows-amd64-go1.20.zip)

8670b88437be62053aa4b3d2da7695fa410f451693833534faa7b20e39c8eded

## Quick integration

To get started with the ossutil 2.0 command line interface, follow these steps:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714423771/CAEQUBiBgMCq6.ap2RkiIGRkZDE2MTVjOGNlYTRiY2Y5MmNkZTI4NDA1ZWVjZmRj5272737_20250624105943.598.svg)

### **Install ossutil**

### **Linux**

1.  Install the unzip tool.
    
    ### Alibaba Cloud Linux
    
    ```
    sudo yum install -y unzip
    ```
    
    ### CentOS
    
    ```
    sudo yum install -y unzip
    ```
    
    ## Ubuntu
    
    ```
    sudo apt install -y unzip
    ```
    
2.  Select the installation package for your operating system and architecture ([Linux x86 32-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-386.zip), [Linux x86 64-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-amd64.zip), [Linux ARM 32-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-arm.zip), or [Linux ARM 64-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-arm64.zip)). You can also use curl to download the package. The following example shows how to use curl on a Linux x86\_64 system:
    
    ```
    curl -o ossutil-2.2.1-linux-amd64.zip https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-linux-amd64.zip
    ```
    
3.  In the directory where you downloaded the package, run the following command to unzip it.
    
    ```
    unzip ossutil-2.2.1-linux-amd64.zip
    ```
    
4.  Change to the ossutil-2.2.1-linux-amd64 directory.
    
    ```
    cd ossutil-2.2.1-linux-amd64
    ```
    
5.  In the current directory, run the following command.
    
    ```
    chmod 755 ossutil
    ```
    
6.  Run the following command to make ossutil globally available.
    
    ```
    sudo mv ossutil /usr/local/bin/ && sudo ln -s /usr/local/bin/ossutil /usr/bin/ossutil
    ```
    
7.  To verify the installation, run the `ossutil` command.
    
    ```
    ossutil
    ```
    
    If the help information for ossutil is displayed, the installation is successful.
    

### **Windows**

1.  Install ossutil.
    
    1.  Select the installation package for your operating system and architecture ([Windows x86 32-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-windows-386.zip), [Windows x86 64-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-windows-amd64.zip), or [Windows 7, Windows 8, Windows Server 2008R2](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-windows-amd64-go1.20.zip)).
        
    2.  Unzip the downloaded .zip package to a destination folder, and then go to the unzipped directory.
        
    3.  Add the path of the unzipped ossutil folder to the system environment variable.
        
        1.  Click the path bar of the current directory and copy the folder path.
            
        2.  Open the **Environment Variables** dialog box. In the **System Variables** section, double-click the **Path** variable. Click **New** and paste the path to the ossutil folder into the new entry.
            
    4.  To verify the installation, run the ossutil command.
        
        ```
        ossutil
        ```
        
        If the help information for ossutil is displayed, the installation is successful.
        
    

### **macOS**

1.  Select the installation package for your operating system and architecture ([macOS x86 64-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-mac-amd64.zip) or [macOS ARM 64-bit](https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-mac-arm64.zip)). You can also use curl to download the package. The following example shows how to use curl on a macOS ARM64 system:
    
    ```
    curl -o ossutil-2.2.1-mac-arm64.zip  https://gosspublic.alicdn.com/ossutil/v2/2.2.1/ossutil-2.2.1-mac-arm64.zip
    ```
    
2.  In the directory where you downloaded the package, run the following command to unzip it.
    
    ```
    unzip ossutil-2.2.1-mac-arm64.zip
    ```
    
3.  Change to the ossutil-2.2.1-mac-arm64 directory.
    
    ```
    cd ossutil-2.2.1-mac-arm64
    ```
    
4.  In the current directory, run the following command.
    
    ```
    chmod 755 ossutil
    ```
    
5.  Run the following command to make ossutil globally available.
    
    ```
    sudo mv ossutil /usr/local/bin/ && sudo ln -s /usr/local/bin/ossutil /usr/bin/ossutil
    ```
    
6.  Verify that ossutil has been successfully installed.
    
    ```
    ossutil
    ```
    
    If the help information for ossutil is displayed, the installation is successful.
    

### Configure **ossutil**

To prevent operation failures that are caused by missing configurations, use the ossutil config command wizard to quickly configure your AccessKey ID, AccessKey secret, and region ID. To manage advanced configurations, see the [Configuration guide](#65af941549umg) for information about how to manually [configure access credentials](#7413ab74b5tab).

> The following example shows how to use the configuration wizard to quickly configure the AccessKey pair of a RAM user as your access credentials.

### Linux

1.  Run the configuration command.
    
    ```
    ossutil config
    ```
    
2.  When prompted, set the path for the configuration file. Press Enter to use the default path.
    
    ```
    Please enter the config file name,the file name can include path(default /root/.ossutilconfig, carriage return will use the default file. If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
    ```
    
    By default, ossutil uses /root/.ossutilconfig as the configuration file.
    
3.  Follow the prompts to set the AccessKey ID, AccessKey secret, and region ID.
    
    1.  Enter your AccessKey ID.
        
        ```
        Please enter Access Key ID [****************id]:yourAccessKeyID
        ```
        
    2.  Enter your AccessKey secret.
        
        ```
        Please enter Access Key Secret [****************sk]:yourAccessKeySecret
        ```
        
    3.  Enter the region where the OSS data center is located. If you do not specify a value, the default value cn-hangzhou is used.
        
        ```
        Please enter Region [ap-southeast-1]:ap-southeast-1
        ```
        
    4.  Enter the endpoint for the OSS data center. If you do not require a custom endpoint, press Enter to skip this parameter.
        
        After you configure the region in the previous step, the public endpoint that corresponds to that region ID is used by default. For example, if you set `region-id` to `ap-southeast-1`, the default public endpoint is `https://oss-ap-southeast-1.aliyuncs.com`.
        
        If you require a custom endpoint for the region where your OSS data center is located, enter the endpoint information. For example, if you want to access OSS from other Alibaba Cloud services in the same region, use an internal endpoint, such as `https://oss-ap-southeast-1-internal.aliyuncs.com`.
        
        ```
        Please enter Endpoint (optional, use public endpoint by default) [None]: https://oss-ap-southeast-1-internal.aliyuncs.com
        ```
        
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    accessKeyID
    
    Yes
    
    The AccessKey pair for your account. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
    Quickly create a RAM user with OSS management permissions and an AccessKey pair using a ROS script
    
    On the [**Create Stack**](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false) page of the Resource Orchestration Service (ROS) console, select the confirmation checkbox under **Security Confirmation**, and then click **Create**.
    
    ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png)
    
    After the stack is created, copy the AccessKey pair from the **Outputs** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4234594571/p948495.png)
    
    accessKeySecret
    
    Yes
    
    Region
    
    Yes
    
    The ID of the region where the bucket is located. This topic uses the Singapore region as an example. Set the value to `ap-southeast-1`. For more information about region IDs, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
    endpoint
    
    No
    
    The endpoint of the region where the bucket is located. If you do not manually set an endpoint, the public endpoint corresponding to the Region is automatically used. You must explicitly specify an internal endpoint. For example, this topic uses the public endpoint for Singapore. Set the value to `https://oss-ap-southeast-1.aliyuncs.com`.
    
    If you want to access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. Set the value to `https://oss-ap-southeast-1-internal.aliyuncs.com`.
    
    For more information about the endpoints of different regions, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **Important**
    
    Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting **March 20, 2025, new OSS users** must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets located in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access your data via HTTPS, you must [bind a valid SSL Certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain. This is **mandatory for OSS Console access**, as the console enforces HTTPS.
    

### Windows

1.  Run the configuration command.
    
    ```
    ossutil config
    ```
    
2.  When prompted, set the path for the configuration file. Press Enter to use the default path.
    
    ```
    Please enter the config file name,the file name can include path(default "C:\Users\issuser\.ossutilconfig", carriage return will use the default file. If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
    ```
    
    By default, ossutil uses C:\\Users\\issuser\\.ossutilconfig as the configuration file.
    
3.  Follow the prompts to set the AccessKey ID, AccessKey secret, and region ID.
    
    1.  Enter your AccessKey ID.
        
        ```
        Please enter Access Key ID [****************id]:yourAccessKeyID
        ```
        
    2.  Enter your AccessKey secret.
        
        ```
        Please enter Access Key Secret [****************sk]:yourAccessKeySecret
        ```
        
    3.  Enter the region where the OSS data center is located. If you do not specify a value, the default value cn-hangzhou is used.
        
        ```
        Please enter Region [ap-southeast-1]:ap-southeast-1
        ```
        
    4.  Enter the endpoint for the OSS data center. If you do not require a custom endpoint, press Enter to skip this parameter.
        
        After you configure the region in the previous step, the public endpoint that corresponds to that region ID is used by default. For example, if you set `region-id` to `ap-southeast-1`, the default public endpoint is `https://oss-ap-southeast-1.aliyuncs.com`.
        
        If you require a custom endpoint for the region where your OSS data center is located, enter the endpoint information. For example, if you want to access OSS from other Alibaba Cloud services in the same region, use an internal endpoint, such as `https://oss-ap-southeast-1-internal.aliyuncs.com`.
        
        ```
        Please enter Endpoint (optional, use public endpoint by default) [None]: https://oss-ap-southeast-1-internal.aliyuncs.com
        ```
        
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    accessKeyID
    
    Yes
    
    The AccessKey pair for your account. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
    Quickly create a RAM user with OSS management permissions and an AccessKey pair using a ROS script
    
    On the [**Create Stack**](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false) page of the Resource Orchestration Service (ROS) console, select the confirmation checkbox under **Security Confirmation**, and then click **Create**.
    
    ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png)
    
    After the stack is created, copy the AccessKey pair from the **Outputs** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4234594571/p948522.png)
    
    accessKeySecret
    
    Yes
    
    Region
    
    Yes
    
    The ID of the region where the bucket is located. This topic uses the Singapore region as an example. Set the value to `ap-southeast-1`. For more information about region IDs, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
    endpoint
    
    No
    
    The endpoint of the region where the bucket is located. If you do not manually set an endpoint, the public endpoint corresponding to the Region is automatically used. You must explicitly specify an internal endpoint. For example, this topic uses the public endpoint for Singapore. Set the value to `https://oss-ap-southeast-1.aliyuncs.com`.
    
    If you want to access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. Set the value to `https://oss-ap-southeast-1-internal.aliyuncs.com`.
    
    For more information about the endpoints of different regions, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **Important**
    
    Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting **March 20, 2025, new OSS users** must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets located in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access your data via HTTPS, you must [bind a valid SSL Certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain. This is **mandatory for OSS Console access**, as the console enforces HTTPS.
    

### macOS

1.  Run the configuration command.
    
    ```
    ossutil config
    ```
    
2.  When prompted, set the path for the configuration file. Press Enter to use the default path.
    
    ```
    Please enter the config file name,the file name can include path(default "/Users/user/.ossutilconfig", carriage return will use the default file. If you specified this option to other file, you should specify --config-file option to the file when you use other commands): 
    ```
    
    By default, ossutil uses /Users/user/.ossutilconfig as the configuration file.
    
3.  Follow the prompts to set the AccessKey ID, AccessKey secret, and region ID.
    
    1.  Enter your AccessKey ID.
        
        ```
        Please enter Access Key ID [****************id]:yourAccessKeyID
        ```
        
    2.  Enter your AccessKey secret.
        
        ```
        Please enter Access Key Secret [****************sk]:yourAccessKeySecret
        ```
        
    3.  Enter the region where the OSS data center is located. If you do not specify a value, the default value cn-hangzhou is used.
        
        ```
        Please enter Region [ap-southeast-1]:ap-southeast-1
        ```
        
    4.  Enter the endpoint for the OSS data center. If you do not require a custom endpoint, press Enter to skip this parameter.
        
        After you configure the region in the previous step, the public endpoint that corresponds to that region ID is used by default. For example, if you set `region-id` to `ap-southeast-1`, the default public endpoint is `https://oss-ap-southeast-1.aliyuncs.com`.
        
        If you require a custom endpoint for the region where your OSS data center is located, enter the endpoint information. For example, if you want to access OSS from other Alibaba Cloud services in the same region, use an internal endpoint, such as `https://oss-ap-southeast-1-internal.aliyuncs.com`.
        
        ```
        Please enter Endpoint (optional, use public endpoint by default) [None]: https://oss-ap-southeast-1-internal.aliyuncs.com
        ```
        
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    accessKeyID
    
    Yes
    
    The AccessKey pair for your account. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
    Quickly create a RAM user with OSS management permissions and an AccessKey pair using a ROS script
    
    On the [**Create Stack**](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false) page of the Resource Orchestration Service (ROS) console, select the confirmation checkbox under **Security Confirmation**, and then click **Create**.
    
    ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png)
    
    After the stack is created, copy the AccessKey pair from the **Outputs** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4234594571/p948523.png)
    
    accessKeySecret
    
    Yes
    
    Region
    
    Yes
    
    The ID of the region where the bucket is located. This topic uses the Singapore region as an example. Set the value to `ap-southeast-1`. For more information about region IDs, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
    endpoint
    
    No
    
    The endpoint of the region where the bucket is located. If you do not manually set an endpoint, the public endpoint corresponding to the Region is automatically used. You must explicitly specify an internal endpoint. For example, this topic uses the public endpoint for Singapore. Set the value to `https://oss-ap-southeast-1.aliyuncs.com`.
    
    If you want to access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. Set the value to `https://oss-ap-southeast-1-internal.aliyuncs.com`.
    
    For more information about the endpoints of different regions, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **Important**
    
    Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting **March 20, 2025, new OSS users** must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets located in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access your data via HTTPS, you must [bind a valid SSL Certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain. This is **mandatory for OSS Console access**, as the console enforces HTTPS.
    

### Run commands

1.  Create a bucket.
    
    ```
    ossutil mb oss://examplebucket
    ```
    
    The following output indicates that the examplebucket is created.
    
    ```
    0.668238(s) elapsed
    ```
    
2.  Upload a file to the bucket.
    
    1.  Create a local file named `uploadFile.txt`.
        
        ```
        echo 'Hello, OSS!' > uploadFile.txt
        ```
        
    2.  Upload the file to the `examplebucket`.
        
        ```
        ossutil cp uploadFile.txt oss://examplebucket
        ```
        
        The following output indicates that the file is uploaded to the `examplebucket`.
        
        ```
        Success: Total 1 file, size 12 B, Upload done:(1 objects, 12 B), avg 44 B/s
        
        0.271779(s) elapsed
        ```
        
3.  Download the file.
    
    Download the uploadFile.txt sample file from the examplebucket to the localfolder.
    
    ```
    ossutil cp oss://examplebucket/uploadFile.txt localfolder/
    ```
    
    The following output indicates that the file is downloaded to the localfolder.
    
    ```
    Success: Total 1 object, size 12 B, Download done:(1 files, 12 B), avg 74 B/s
    
    0.162447(s) elapsed
    ```
    
4.  List the files in the examplebucket.
    
    ```
    ossutil ls oss://examplebucket
    ```
    
    The following output indicates that the files in the examplebucket are listed.
    
    ```
    LastModifiedTime                   Size(B)  StorageClass   ETAG                                  ObjectName
    2024-11-26 14:35:29 +0800 CST           12      Standard   1103F650EB2C292D179A032D2A97B0F5      oss://examplebucket/uploadFile.txt
    Object Number is: 1
    
    0.124679(s) elapsed
    ```
    
5.  Delete uploadFile.txt from the examplebucket.
    
    ```
    ossutil rm oss://examplebucket/uploadFile.txt
    ```
    
    The following output indicates that uploadFile.txt is deleted from the examplebucket.
    
    ```
    0.295530(s) elapsed
    ```
    
6.  Delete the examplebucket.
    
    ```
    ossutil rb oss://examplebucket
    ```
    
    The following output indicates that the examplebucket is deleted.
    
    ```
    0.478659(s) elapsed
    ```
    

## **Configuration guide**

ossutil supports configuration via configuration files, environment variables, and command-line options, offering a high degree of flexibility.

### **Configuration precedence**

ossutil reads configurations in the following order of precedence:

**Command-line options** (such as `-i`, `-k`, and `-e`) > **Environment variables** (such as `OSS_ACCESS_KEY_ID`) > **Configuration file** (`~/.ossutilconfig`)

**Note**

Starting from version 2.2.0, you can use the \`--ignore-env-var\` command-line option to ignore environment variables prefixed with \`OSS\_\`.

### **Configuration file**

You can configure `ossutil` using a configuration file. The default path for this file is `~/.ossutilconfig`, but you can specify a custom path with the `-c` option. If you use the default configuration file, you do not need to specify its path and can run `ossutil` commands directly. For example:

```
ossutil ls oss://examplebucket
```

If you use a custom configuration file path, such as `/path/yourconfig`, you must specify the path using the `-c` option. For example:

```
ossutil -c /path/yourconfig ls oss://examplebucket
```

#### **Configuration file format**

The configuration file uses the INI format. In this format, configuration parameters are organized into sections as key-value pairs. You can use the --profile option to select a specific section. By default, ossutil uses the settings in the \[default\] section. To use other settings, you can create and reference other named configurations.

##### **Sections and key-value pairs**

Each section in the configuration file is identified by a name enclosed in square brackets (`[ ]`). Settings within a section use the `key=value` format. Example:

```
[default]
accessKeyID = "your-access-key-id"
accessKeySecret = "your-access-key-secret"
```

-   Section settings use the `key=value` format.
    
-   Section names and keys are not case-sensitive.
    
-   Configuration parameter keys support multiple formats, such as all lowercase, camelCase, kebab-case (hyphen-separated), and snake\_case (underscore-separated). For example, accesskeyid, accessKeyId, access-key-id, and access\_key\_id all refer to the same parameter name.
    
-   Lines starting with a number sign (#) are comments.
    

##### **Supported section types**

**Section name**

**Description**

**Other information**

\[default\]

Stores the default settings. This section is used when the --profile option is not set.

A simplified form of \[profile default\].

\[profile name\]

Configures parameters that can be referenced using --profile name.

Supports referencing other configurations using source\_profile.

\[buckets name\]

Configures endpoints for specific buckets, including region, endpoint, and addressing style.

Supports inline notation.

**Note**

You can use the config command to view and set configuration content. For more information, see [config](/help/en/oss/developer-reference/config-create-configuration-file).

#### **Section type: profile**

This section configures access credentials and global parameters. It supports the following parameter names:

-   Access credential parameters
    
    **Parameter name**
    
    **Alias**
    
    **Description**
    
    mode
    
    /
    
    Authentication mode.
    
    Valid values: AK, StsToken, RamRoleArn, EcsRamRole, and Anonymous.
    
    access-key-id
    
    accessKeyId
    
    access\_key\_id
    
    The AccessKey ID used to access OSS.
    
    access-key-secret
    
    accessKeySecret
    
    access\_key\_secret
    
    The AccessKey secret used to access OSS.
    
    sts-token
    
    stsToken
    
    sts\_token
    
    The Security Token Service (STS) token used to access OSS.
    
    role-arn
    
    roleArn
    
    role\_arn
    
    The ARN of the RAM role. This is mainly used in RamRoleArn mode.
    
    role-session-name
    
    roleSessionName
    
    role\_session\_name
    
    The session name. This is mainly used in RamRoleArn mode.
    
    ecs-role-name
    
    ecsRoleName
    
    ecs\_role\_name
    
    The role name. This is mainly used in EcsRamRole mode.
    
    credential-process
    
    credentialProcess
    
    credential\_process
    
    Specifies an external command.
    
    credential-uri
    
    credentialUri
    
    credential\_uri
    
    Specifies a URI from which to obtain access credentials.
    
    oidc-provider-arn
    
    oidcProviderArn
    
    oidc\_provider\_arn
    
    Specifies the Alibaba Cloud Resource Name (ARN) of the OIDC provider in the format `acs:ram::account-id:oidc-provider/provider-name`.
    
    oidc-token-file-path
    
    oidcTokenFilePath
    
    oidc\_token\_file\_path
    
    Specifies the file path for the OIDC token.
    
    credential-process-timeout
    
    credentialProcessTimeout
    
    credential\_process\_timeout
    
    Specifies the timeout period for external credential requests, in seconds. The default value is 15 (15 seconds). The maximum value is 600 (10 minutes). For example, `credential-process-timeout = 60` sets a 60-second timeout. Supported since version 2.0.3.
    
-   Global parameters
    
    **Parameter name**
    
    **Alias**
    
    **Description**
    
    region
    
    /
    
    The region ID. This parameter is required.
    
    loglevel
    
    /
    
    The log level. Valid values:
    
    -   off (default)
        
    -   info
        
    -   debug
        
    
    read-timeout
    
    readTimeout
    
    read\_timeout
    
    The timeout period for client read and write requests. Unit: seconds. Default value: 20.
    
    connect-timeout
    
    connectTimeout
    
    connect\_timeout
    
    The timeout period for client connections. Unit: seconds. Default value: 10.
    
    retry-times
    
    retryTimes
    
    retry\_times
    
    The number of retries when an error occurs. Default value: 10.
    
    skip-verify-cert
    
    skipVerifyCert
    
    skip\_verify\_cert
    
    Skips server-side digital certificate verification.
    
    sign-version
    
    signVersion
    
    sign\_version
    
    The signature algorithm version used for requests. Valid values:
    
    -   v1
        
    -   v4 (default)
        
    
    output-format
    
    outputFormat
    
    output\_format
    
    The output format. Valid values:
    
    -   raw (default)
        
    -   json
        
    -   xml
        
    -   yaml
        
    
    addressing-style
    
    addressingStyle
    
    addressing\_style
    
    The format of the request address. Valid values:
    
    -   virtual (default)
        
    -   path
        
    -   cname
        
    
    language
    
    /
    
    The display language.
    
    endpoint
    
    /
    
    The public endpoint. This parameter is optional.
    
-   Other parameters
    
    **Parameter name**
    
    **Alias**
    
    **Description**
    
    source-profile
    
    sourceProfile
    
    source\_profile
    
    References parameters from a specified profile. Example:
    
    ```
    [profile cred]
    access-key-id=ak
    access-key-secret=sk
    
    [profile dev]
    region=cn-hangzhou
    source-profile=cred
    ```
    
    buckets
    
    /
    
    References parameters from a specified buckets section.
    
    ```
    [profile dev]
    region=cn-hangzhou
    access-key-id=ak
    access-key-secret=sk
    buckets=dev-bucket
    
    [buckets dev-bucket]
    bucket-name-hz =
     endpoint=oss-cn-hangzhou-internal.aliyuncs.com
    bucket-name-bj =
     region=cn-beijing
    ```
    
    endpoint-suffix-list-path-style
    
    /
    
    Specifies a list of endpoint suffixes for which the path-style request mode is automatically used. Separate multiple suffixes with commas (`,`). Supported since version 2.2.0.
    
    Example 1: `endpoint-suffix-list-path-style=DEFAULT`
    
    Example 2: `endpoint-suffix-list-path-style=DEFAULT,.path-style.com`
    
    DEFAULT: Indicates the built-in default list, which is currently .privatelink.aliyuncs.com
    

#### **Section type: buckets**

This section configures mappings between specific buckets and endpoints. It supports a nested structure, dividing the buckets section into subsections by \`bucket-name =\`. The format is:

```
[buckets name]
bucket-name = 
  key=value
```

In this format, \`name\` refers to the name of the buckets section, \`bucket-name\` refers to the name of a specific bucket, and \`key=value\` represents the configuration parameters. It supports the following parameters:

**Parameter name**

**Alias**

**Description**

region

/

The region where the data center is located.

If not set, the region value from the profile that references this parameter is used.

endpoint

/

The public endpoint. This parameter is optional.

addressing-style

addressingStyle

addressing\_style

The format of the request address. Valid values:

virtual (default): Uses the virtual-hosted-style request address format.

path: Uses the path-style request address format.

cname: Uses the CNAME request address format.

The following example shows a buckets section:

```
[buckets dev-bucket]
bucket-hz-01 = 
  region=cn-hangzhou
bucket-hz-02 = 
  region=cn-hangzhou
  endpoint=test.com
  addressing-style=cname
bucket-bj-01 = 
  region=cn-beijing
```

### **Configure environment variables**

You can configure environment variables by following these steps.

## Linux

1.  In the command-line interface, run the following commands to append the environment variable settings to the `~/.bashrc` file:
    
    ```
    echo "export OSS_ACCESS_KEY_ID='your-access-key-id'" >> ~/.bashrc
    echo "export OSS_ACCESS_KEY_SECRET='your-access-key-secret'" >> ~/.bashrc
    ```
    
2.  Run the following command to apply the changes:
    
    ```
    source  ~/.bashrc
    ```
    
3.  Run the following commands to check whether the environment variables are effective:
    
    ```
    echo $OSS_ACCESS_KEY_ID
    echo $OSS_ACCESS_KEY_SECRET
    ```
    

## macOS

1.  In the terminal, run the following command to view the default shell type:
    
    ```
    echo $SHELL
    ```
    
2.  Perform the following operations based on your default shell type.
    
    #### **Zsh**
    
    1.  Run the following commands to append the environment variable settings to the `~/.zshrc` file:
        
        ```
        echo "export OSS_ACCESS_KEY_ID='your-access-key-id'" >> ~/.zshrc
        echo "export OSS_ACCESS_KEY_SECRET='your-access-key-secret'" >> ~/.zshrc
        ```
        
    2.  Run the following command to apply the changes:
        
        ```
        source ~/.zshrc
        ```
        
    3.  Run the following commands to check whether the environment variables are effective:
        
        ```
        echo $OSS_ACCESS_KEY_ID
        echo $OSS_ACCESS_KEY_SECRET
        ```
        
    
    #### **Bash**
    
    1.  Run the following commands to append the environment variable settings to the `~/.bash_profile` file:
        
        ```
        echo "export OSS_ACCESS_KEY_ID='your-access-key-id'" >> ~/.bash_profile
        echo "export OSS_ACCESS_KEY_SECRET='your-access-key-secret'" >> ~/.bash_profile
        ```
        
    2.  Run the following command to apply the changes:
        
        ```
        source ~/.bash_profile
        ```
        
    3.  Run the following commands to check whether the environment variables are effective:
        
        ```
        echo $OSS_ACCESS_KEY_ID
        echo $OSS_ACCESS_KEY_SECRET
        ```
        
    

## Windows

1.  In the Command Prompt (CMD), run the following commands:
    
    ```
    setx OSS_ACCESS_KEY_ID "your-access-key-id"
    setx OSS_ACCESS_KEY_SECRET "your-access-key-secret"
    ```
    
2.  Open a new CMD window.
    
3.  In the new CMD window, run the following commands to check whether the environment variables are effective:
    
    ```
    echo %OSS_ACCESS_KEY_ID%
    echo %OSS_ACCESS_KEY_SECRET%
    ```
    

The following environment variables can be configured:

**Environment variable name**

**Corresponding parameter name**

OSS\_ACCESS\_KEY\_ID

access-key-id

OSS\_ACCESS\_KEY\_SECRET

access-key-secret

OSS\_SESSION\_TOKEN

sts-token

OSS\_ROLE\_ARN

ram-role-arn

OSS\_ROLE\_SESSION\_NAME

role-session-name

OSS\_REGION

region

OSS\_ENDPOINT

endpoint

OSSUTIL\_CONFIG\_FILE

config-file

OSSUTIL\_PROFILE

profile

### Configure command-line options

ossutil provides multiple command-line options, including [global command-line options](#d7282c6664szl). These options have the highest priority and override parameters set in configuration files or environment variables.

**Important**

Passing an AccessKey pair through command-line options can expose the key in log systems, creating a security risk. Use this method with caution.

```
ossutil ls oss://examplebucket -i "your-access-key-id" -k "your-access-key-secret" --region cn-hangzhou
```

## **Access credential configuration**

### **Use the AccessKey pair of a RAM user**

If your application operates in a secure, stable environment that is resistant to external attacks, requires long-term access to OSS, and cannot frequently rotate credentials, initialize the credential provider using the AccessKey pair (AccessKey ID and AccessKey secret) from an Alibaba Cloud account or a RAM user. However, this approach necessitates manual maintenance of the AccessKey pair, thereby increasing security risks and maintenance complexity.

## **Configuration file**

You can create the following configuration file and save it as `~/.ossutilconfig`.

```
[default]
accessKeyID = yourAccessKeyID
accessKeySecret = yourAccessKeySecret
region=ap-southeast-1
```

You can run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

## **Environment variables**

```
export OSS_ACCESS_KEY_ID=yourAccessKeyID
export OSS_ACCESS_KEY_SECRET=yourAccessKeySecret
ossutil ls oss://examplebucket
```

## **Command-line options**

You can run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket -i yourAccessKeyID -k yourAccessKeySecret
```

### **Use an STS token**

If your application requires temporary access to OSS, you can initialize the credential provider with temporary identity credentials—such as an AccessKey ID, an AccessKey secret, and a security token—obtained from the STS service. This method requires you to manually maintain the STS token, which increases both security risks and maintenance complexity. Additionally, you must manually refresh the STS token each time you need to access OSS temporarily.

## **Configuration file**

Create the following configuration file and save it as `~/.ossutilconfig`.

```
[default]
accessKeyID = yourSTSAccessKeyID
accessKeySecret = yourSTSAccessKeySecret
stsToken = yourSecurityToken
region=ap-southeast-1
```

Run the following command to query objects in the example bucket.

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

## **Environment variables**

```
export OSS_ACCESS_KEY_ID=yourSTSAccessKeyID
export OSS_ACCESS_KEY_SECRET=yourSTSAccessKeySecret
export OSS_SESSION_TOKEN=yourSecurityToken
ossutil ls oss://examplebucket
```

## **Command-line options**

Run the following command to query objects in the example bucket.

```
ossutil ls oss://examplebucket -i yourSTSAccessKeyID -k yourSTSAccessKeySecret -t yourSecurityToken --region cn-hangzhou
```

### **Use a RAMRoleARN**

If your application requires authorized access to OSS, such as for cross-account access, you can initialize the credential provider by specifying a RAMRoleARN. This method uses Security Token Service (STS) tokens. By specifying the Alibaba Cloud Resource Name (ARN) of a RAM role, the provider calls the AssumeRole operation to obtain a temporary token and automatically renews it before the session expires. You can also set the `policy` parameter to further restrict the permissions for the session.

**Important**

-   An Alibaba Cloud account has full permissions on its resources. If the AccessKey pair of an Alibaba Cloud account is leaked, it creates a significant security risk. Do not use the AccessKey pair of an Alibaba Cloud account. Instead, use the AccessKey pair of a RAM user with the minimum required permissions.
    
-   For more information about how to create an AccessKey pair for a RAM user, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#section-rjh-18m-7kp). The AccessKey ID and AccessKey secret of a RAM user are displayed only when they are created. You must save them immediately. If you forget them, you must create a new AccessKey pair for rotation.
    
-   For more information about how to obtain a RAMRoleARN, see [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).
    

Generate the following configuration file and save it as `~/.ossutilconfig`. You cannot configure these settings using environment variables or command-line options.

```
[default]
accessKeyID = yourAccessKeyID
accessKeySecret = yourAccessKeySecret
mode = RamRoleArn
roleArn = acs:ram::137918634953****:role/Alice
roleSessionName = session_name_example
region=ap-southeast-1
```

Run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

### **Use an EcsRamRole**

If your application runs on an ECS instance, an ECI instance, or a worker node of Container Service for Kubernetes, you can initialize the credential provider with an EcsRamRole. This method is based on Security Token Service (STS) tokens. EcsRamRole lets you associate a role with an ECS instance, an ECI instance, or a worker node of Container Service for Kubernetes to automatically refresh the STS token within the instance. This method does not require you to provide an AccessKey pair or an STS token, which eliminates the risks of manual maintenance. For more information about how to obtain an EcsRamRole, see [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

**Note**

This method does not support environment variables.

#### **EcsRamRole mode**

## Configuration file

Create the following configuration file and save it as `~/.ossutilconfig`.

```
[default]
mode = EcsRamRole
# ecsRoleName is optional. If not set, it is automatically obtained.
ecsRoleName = EcsRamRoleOss 
region=ap-southeast-1
```

Run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

## Command Line Interface

Run the following command to query objects in the `examplebucket`.

```
ossutil ls oss://examplebucket --mode EcsRamRole
```

#### **EcsRamRole** IMDSv2**pattern**

**Note**

Starting from version 2.2.0, ECS RAM Role supports IMDSv2 mode.

## Configuration file

Generate the following configuration file and save it as `~/.ossutilconfig`.

```
[default]
mode = Ali-EcsRamRole
# The ecsRoleName parameter is optional. If you do not set this parameter, the value is automatically obtained.
ecsRoleName = EcsRamRoleOss 
region=ap-southeast-1
```

You can run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

## Command line interface

You can run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket --mode Ali-EcsRamRole
```

### **Use an OIDCRoleARN**

After you assign a RAM role to worker nodes in Container Service for Kubernetes, applications running in pods on those nodes can retrieve the STS token for the associated role from the metadata service (Metadata Server), just as applications deployed on ECS instances do. However, if you deploy untrusted applications on the cluster—such as customer-submitted applications whose source code is not open—those applications might obtain the STS token for the worker node’s instance RAM role from the metadata service. To prevent security risks to your cloud resources and enable untrusted applications to securely retrieve the required STS tokens while enforcing application-level least privilege, use the RAM Roles for Service Accounts (RRSA) feature. This method uses an STS token under the hood. An ACK cluster creates and mounts an OpenID Connect (OIDC) token file for each application pod and injects relevant configuration information into environment variables. The Credentials tool retrieves this configuration from the environment variables and calls the STS AssumeRoleWithOIDC operation to obtain the STS token for the attached role. Because this method does not require an AccessKey pair or a pre-existing STS token, it eliminates risks associated with manual maintenance. For more information, see [Pod permission isolation based on RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

Create the following configuration file and save it as `~/.ossutilconfig`. You cannot configure this using environment variables or command-line options.

```
[default]
mode = oidcRoleArn
# Specifies the Alibaba Cloud Resource Name (ARN) of the OIDC provider. The format is acs:ram::account-id:oidc-provider/provider-name.
OIDCProviderArn=acs:ram::113511544585****:oidc-provider/TestOidcProvider
# Specifies the file path for the OIDC token.
OIDCTokenFilePath=OIDCTokenFilePath
# Enter the ARN of the role to assume. The format is acs:ram::113511544585****:oidc-provider/TestOidcProvider.
roleArn=acs:ram::113511544585****:role/testoidc
# A custom role session name to distinguish different tokens.
roleSessionName= TestOidcAssumedRoleSession
region=ap-southeast-1
```

Run the following command to query objects in the examplebucket.

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

### **Obtain credentials from an external process**

ossutil can start an independent external process by executing an external command. This process runs and returns its result to ossutil via standard output. You can use such an external process to obtain credentials.

**Note**

-   The command that generates credentials must not be accessible by unapproved processes or users to avoid security risks.
    
-   The command that generates credentials must not write any secret information to stderr or stdout because this information could be captured or logged, which can expose it to unauthorized users.
    

You can use an external command to retrieve long-term or temporary credentials in the following formats.

## Long-term credentials

```
{
  "AccessKeyId" : "ak",
  "AccessKeySecret" : "sk"
}
```

## Temporary credentials

```
{
  "AccessKeyId" : "ak",
  "AccessKeySecret" : "sk",
  "Expiration" : "2023-12-29T07:45:02Z",
  "SecurityToken" : "token"
}
```

Generate the following configuration file and save it to `~/.ossutilconfig`. You cannot configure these settings using environment variables or command-line options.

```
[default]
mode = Process
credentialProcess = user-cmd
region=ap-southeast-1
```

You can run the following command to query the objects in the examplebucket:

```
ossutil ls oss://examplebucket -c ~/.ossutilconfig
```

### **Anonymous access**

If you only need to access OSS resources with public-read permission, you can use anonymous access without providing credentials.

```
ossutil cat oss://bucket/public-object --mode Anonymous
```

## **Command reference**

You can use ossutil to run three types of commands: high-level commands, API-level commands, and helper commands.

### **Command structure**

The general format for ossutil commands is as follows:

```
ossutil command [argument] [flags]  

ossutil command subcommond [argument] [flags]  

ossutil topic
```

-   argument: A string parameter.
    
-   flags: Options that support a short-name style (`-o[=value]/ -o [ value]`) and a long-name style (`--options[=value]/--options[ value]`). If you specify an option multiple times, only the last value takes effect.
    

The following are examples of commands:

-   Command: `ossutil cat oss://bucket/object`
    
-   Multi-level command: `ossutil api get-bucket-cors --bucket bucketexample`
    
-   Help topic: `ossutil filter`
    

### **Command list**

You can use ossutil to run three types of commands:

-   High-level commands
    
    You can use these commands for common bucket and object operations, such as creating or deleting buckets, copying data, and modifying object properties.
    
    **Command name**
    
    **Description**
    
    [mb](/help/en/oss/developer-reference/mb-create-storage-space)
    
    Creates a bucket
    
    [rb](/help/en/oss/developer-reference/rb-delete-bucket)
    
    Deletes a bucket
    
    [du](/help/en/oss/developer-reference/du-get-size)
    
    Gets the storage size of a bucket or a specified prefix
    
    [stat](/help/en/oss/developer-reference/stat2)
    
    Displays the description of a bucket or object
    
    [mkdir](/help/en/oss/developer-reference/mkdir-create-directory)
    
    Creates an object whose name ends with a forward slash (`/`)
    
    [append](/help/en/oss/developer-reference/append-append-upload)
    
    Appends content to the end of an appendable object
    
    [cat](/help/en/oss/developer-reference/cat-output-file-contents)
    
    Concatenates object content to standard output
    
    [ls](/help/en/oss/developer-reference/ls-list-resources-under-the-account-level)
    
    Lists buckets or objects
    
    [cp](/help/en/oss/developer-reference/cp-upload-download-and-copy-files/)
    
    Uploads, downloads, or copies objects
    
    [rm](/help/en/oss/developer-reference/rm-deleted)
    
    Deletes objects in a bucket
    
    [set-props](/help/en/oss/developer-reference/set-props-set-object-properties)
    
    Sets the properties of an object
    
    [presign](/help/en/oss/developer-reference/presign-generate-presigned-url)
    
    Generates a signed URL for an object
    
    [restore](/help/en/oss/developer-reference/restore-unfrozen-file)
    
    Restores a frozen object to a readable state
    
    [revert](/help/en/oss/developer-reference/revert-recovery-version)
    
    Restores an object to a specified version
    
    [sync](/help/en/oss/developer-reference/sync-synchronizing-files/)
    
    Synchronizes a local file directory or objects from a source to a destination
    
    [hash](/help/en/oss/developer-reference/hash-calculate-crc64-or-md5)
    
    Calculates the hash value of a file or object
    
-   You can use these commands to directly call API operations and configure their parameters.
    
    **Note**
    
    Only a subset of commands is listed. Run `ossutil api -h` to view all available commands.
    
    **Command name**
    
    **Description**
    
    [put-bucket-acl](/help/en/oss/developer-reference/manage-bucket-access-permissions)
    
    Sets or modifies the access permissions of a bucket
    
    [get-bucket-acl](/help/en/oss/developer-reference/get-bucket-acl)
    
    Gets access permissions
    
    ....
    
    [put-bucket-cors](/help/en/oss/developer-reference/put-bucket-cors)
    
    Sets cross-origin resource sharing rules
    
    [get-bucket-cors](/help/en/oss/developer-reference/get-bucket-cors)
    
    Gets cross-origin resource sharing rules
    
    [delete-bucket-cors](/help/en/oss/developer-reference/delete-a-cross-domain-resource-sharing-rule)
    
    Deletes cross-origin resource sharing rules
    
-   You can use these commands to configure files or access additional help topics.
    
    **Command name**
    
    **Description**
    
    [help](/help/en/oss/developer-reference/get-help-information)
    
    Gets help information
    
    [config](/help/en/oss/developer-reference/config-create-configuration-file)
    
    Creates a configuration file to store configuration items and access credentials
    
    [update](/help/en/oss/developer-reference/update-ossutil-version-upgrade)
    
    Updates the version
    
    [version](/help/en/oss/developer-reference/version-displays-version-information)
    
    Displays version information
    
    [probe](/help/en/oss/developer-reference/probe-probe-state)
    
    Probes commands
    

### **Command option types**

**Option type**

**Option**

**Description**

String

\--option string

-   String parameters can contain alphanumeric characters, symbols, and spaces from the ASCII character set.
    
-   If the string contains spaces, it must be enclosed in quotation marks.
    

Example: --acl private.

Boolean

\--option

Enables or disables an option.

Example: --dry-run.

Integer

\--option Int

An unsigned integer.

Example: --read-timeout 10.

Timestamp

\--option Time

ISO 8601 format, which is DateTime or Date.

Example: --max-mtime 2006-01-02T15:04:05.

Byte unit suffix

\--option SizeSuffix

The default unit is bytes (B). You can also use unit suffixes. Supported suffixes are K (KiB) = 1024 bytes, M (MiB), G (GiB), T (TiB), P (PiB), and E (EiB).

Example: Minimum size is 1024 bytes.

\--min-size 1024

\--min-size 1K

Time unit suffix

\--option Duration

A time unit. The default unit is seconds. Supported suffixes are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks), M (months), and y (years).

Decimals are supported. Example: 1.5 days.

\--min-age 1.5d

String list

\--option strings

Supports single or multiple options with the same name. Supports multiple values separated by commas (,).

An input that accepts a single value from multiple options.

Example: --metadata user=jack,email=ja\*\*@test.com --metadata address=china

String array

\--option stringArray

Supports single or multiple options with the same name. Only supports single values for multiple options.

Example: --include \*.jpg --include \*.txt.

### **Load data from sources other than the command line**

You typically provide parameter values on the command line. However, for complex parameter values, you may need to load them from a file. When you chain multiple command operations, you may need to load parameter values from standard input. For parameters that support multiple loading methods, the following conventions apply:

-   A value that starts with `file://` indicates that the value is loaded from a file path.
    
-   A parameter value of `-` indicates that the value is loaded from standard input.
    

For example, to set the cross-origin resource sharing (CORS) configuration for a bucket in JSON format, load the parameters from a file. The cors-configuration.json file contains the following content:

```
{
  "CORSRule": {
    "AllowedOrigin": ["www.aliyun.com"],
    "AllowedMethod": ["PUT","GET"],
    "MaxAgeSeconds": 10000
  }
}
```

```
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration file://cors-configuration.json
```

To load the CORS parameters as an option value, use the compact form of cors-configuration.json:

```
{"CORSRule":{"AllowedOrigin":["www.aliyun.com"],"AllowedMethod":["PUT","GET"],"MaxAgeSeconds":10000}}
```

```
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration  "{\"CORSRule\":{\"AllowedOrigin\":[\"www.aliyun.com\"],\"AllowedMethod\":[\"PUT\",\"GET\"],\"MaxAgeSeconds\":10000}}"
```

The following is an example of how to load parameters from standard input:

```
cat cors-configuration.json | ossutil api put-bucket-cors --bucket examplebucket --cors-configuration -
```

### **Control command output**

#### **Output format**

You can use the `--output-format` parameter to adjust the output format for subcommands under `ossutil api`, and for the `du` and `stat` commands. The following formats are currently supported:

**Format name**

**Description**

raw

Outputs the content in its original format, as returned by the server.

json

Outputs in JSON string format.

yaml

Outputs in YAML string format.

xml

Outputs in XML string format.

For example, the original output for `get-bucket-cors` is as follows:

```
ossutil api get-bucket-cors --bucket bucketexample
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>www.aliyun.com</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <MaxAgeSeconds>10000</MaxAgeSeconds>
  </CORSRule>
  <ResponseVary>false</ResponseVary>
</CORSConfiguration>
```

The JSON output is as follows:

```
ossutil api get-bucket-cors --bucket bucketexample --output-format json
{
  "CORSRule": {
    "AllowedMethod": [
      "PUT",
      "GET"
    ],
    "AllowedOrigin": "www.aliyun.com",
    "MaxAgeSeconds": "10000"
  },
  "ResponseVary": "false"
}
```

#### **Filter output**

ossutil provides a built-in, JSON-based client-side filtering feature that you can use with the `--output-query` option.

**Note**

This option is supported only for subcommands under ossutil api.

This feature uses JMESPath syntax. When you use this feature, ossutil converts the returned content to JSON, filters it using JMESPath, and then displays the result in the specified format. For more information about JMESPath syntax, see [JMESPath Specification](https://jmespath.org/specification.html#).

For example, to display only the AllowedMethod content for get-bucket-cors, run the following command:

```
ossutil api get-bucket-cors --bucket bucketexample --output-query CORSRule.AllowedMethod --output-format json
[
  "PUT",
  "GET"
]
```

#### **Human-readable display**

For high-level commands such as du and stat, you can use the `--human-readable` option to display byte and count data in a human-readable format. Byte data is converted to a format with Ki, Mi, Gi, Ti, or Pi suffixes (base 1024). Count data is converted to a format with k, m, g, t, or p suffixes (base 1000).

Example: Raw mode

```
ossutil stat oss://bucketexample
ACL                         : private
AccessMonitor               : Disabled
ArchiveObjectCount          : 2
ArchiveRealStorage          : 10
ArchiveStorage              : 131072
...
StandardObjectCount         : 119212
StandardStorage             : 66756852803
Storage                     : 66756852813
StorageClass                : Standard
TransferAcceleration        : Disabled
```

Friendly mode

```
ossutil stat oss://bucketexample --human-readable
ACL                         : private
AccessMonitor               : Disabled
ArchiveObjectCount          : 2
ArchiveRealStorage          : 10
ArchiveStorage              : 131.072k
...
StandardObjectCount         : 119.212k
StandardStorage             : 66.757G
Storage                     : 66.757G
StorageClass                : Standard
TransferAcceleration        : Disabled
```

### **Command return codes**

When you call ossutil from a process, you cannot view the output in real time. After the process completes, ossutil returns different return codes based on the result. You can retrieve the return code of the most recent run to analyze and troubleshoot issues. The following table describes the return codes and their meanings.

## Linux

Run the following command to retrieve the return code: `echo $?`.

## Windows

Run the following command to retrieve the return code: `echo %errorlevel%`.

## macOS

Run the following command to retrieve the return code: `echo $?`.

**Return code**

**Description**

0

The command was successful. The request sent to the server was executed normally, and the server returned a 200 response.

1

Parameter error. For example, a required subcommand or parameter is missing, or an unknown command or parameter was used.

2

The command was parsed successfully and a request was sent to the specified service, but the service returned an error (a non-2xx response).

3

A non-server error was encountered when calling the OSS Go SDK.

4

An error occurred in some requests during a batch operation, such as \`cp\` or \`rm\`.

5

Interruption error. A command was canceled by pressing Ctrl+C during execution.

## **Command-line options**

Some command-line operations require additional parameters to specify the target or set options, while others do not. For commands that take parameters, provide appropriate parameter values to achieve the desired functionality. For example:

```
ossutil ls --profile dev
```

The command `ossutil ls --profile dev` lets you specify a particular configuration file using the parameter value `dev`. Options that take parameters usually require a space or an equal sign (=) to separate the option name from the parameter value, such as `--profile dev` or `--profile=dev`. If a parameter value contains spaces, you must enclose the entire value in double quotation marks to ensure that the command is parsed correctly, such as `--description "OSS bucket list"`.

### **Global command-line options**

**Parameter**

**Type**

**Description**

\-i, --access-key-id

string

The AccessKey ID used to access OSS.

\-k, --access-key-secret

string

The AccessKey secret used to access OSS.

\--addressing-style

string

The format of the request address. Valid values:

-   virtual (default value), indicating the virtual hosting mode **.**
    
-   path: path-style.
    
-   cname: custom domain name mode.
    

\-c, --config-file

string

The path to the configuration file. The default value is `~\\.ossutilconfig`.

\--connect-timeout

int

The timeout period for client connections. Unit: seconds. Default value: 10.

\-n, --dry-run

/

Performs a dry run without making any changes.

\-e, --endpoint

string

The public endpoint.

\-h, --help

/

Displays help information.

\--language

string

The display language.

\--loglevel

string

The log level. Valid values:

-   off (default)
    
-   info
    
-   debug
    

\--mode

string

The authentication mode. Valid values:

-   AK: AccessKey pair.
    
-   StsToken: temporary security credential.
    
-   EcsRamRole: authenticates using an ECS instance RAM role.
    
-   Anonymous: anonymous access.
    

\--output-format

string

The output format. Default value: raw.

\--output-query

string

The JMESPath query condition.

\--profile

string

Specifies the profile in the configuration file.

\-q, --quiet

/

Quiet mode, which prints as little information as possible.

\--read-timeout

int

The timeout period for client read and write requests. Unit: seconds. Default value: 20.

\--region

string

The region where the data center is located. Set the value to cn-hangzhou.

\--retry-times

int

The number of retries when an error occurs. Default value: 10.

\--sign-version

string

The signature algorithm version used for requests. Valid values:

-   v1
    
-   v4 (default)
    

\--skip-verify-cert

/

Skips server-side digital certificate verification.

\-t, --sts-token

string

The STS token used to access OSS.

\--proxy

string

Specifies a proxy server. Supported since version 2.0.1.

The value can be one of the following:

-   Direct configuration: Directly specify the details of the proxy server. Examples:
    
    -   `http://proxy.example.com:8080`
        
    -   `https://proxy.example.com:8443`
        
-   `env`: Indicates that the `HTTP_PROXY` and `HTTPS_PROXY` environment variables are used to obtain proxy server information. You need to configure these two environment variables in the operating system. Examples:
    
    -   `HTTP_PROXY=http://proxy.example.com:8080`
        
    -   `HTTPS_PROXY=https://proxy.example.com:8443`
        
    
    After configuring these environment variables, set the value of the proxy server option to `env`, and the system will automatically use the proxy settings from these variables.
    

\--log-file

string

Specifies the log output file. Supported since version 2.0.1. The value can be:

-   `-`: Outputs logs to standard output (Stdout).
    
-   `File path`: Specifies a file path to which logs are output.
    

If no log output file is specified, logs are output to the default configuration file.

\--cloudbox-id

string

The CloudBox ID, used in CloudBox scenarios. Supported since version 2.1.0.

\--ignore-env-var

/

Ignores all environment variable configurations prefixed with `OSS_`. Supported since version 2.2.0.

\--bind-address

string

Specifies the local IP address (IPv4 or IPv6) to which outbound connections are bound. Supported since version 2.2.0.

\--account-id

string

The account ID, used for identity identification and resource ownership judgment in vector bucket scenarios. Supported since version 2.2.0.

### **Common command-line options**

**Command scope**

**Supported options**

All high-level commands

-   \--encoding-type string: The encoding method for input object or file names. Valid value: url.
    
-   \--request-payer string: The payment method for the request. If it is a pay-by-requester mode, set this value to requester.
    

Commands that support batch operations

-   \--start-after/--end-with (, \] : Specifies the query range for keys (exclusive start, inclusive end).
    
-   filter option: Set filter conditions for object/file names, object/file directories, object/file sizes, object/file times, and object metadata. For specific filtering rules, see [Filter options](/help/en/oss/developer-reference/advanced-commands/#331825ba29zi4).
    
-   \--limited-num: Sets the amount of data returned by the query interface.
    
-   \--recursive/-r: Performs a recursive operation, accessing all files or objects under the root directory, including subdirectories.
    
-   \--dirs/-d: Accesses only the files or objects in the root directory, not including subdirectories.
    
    **Note**
    
    For objects, this is simulated using the Delimiter method, which requires scanning all objects under the prefix. The more objects there are, the more time-consuming it is.
    
-   \--force/-f: Forces the operation without a confirmation prompt.
    
-   \--list-objects: Uses the ListObjects interface to list objects.
    

Commands that support destination filtering rules

-   \--update: Skips all files at the destination that already exist and are newer than the source files. If a file at the destination has the same modification time as the source file, the file is updated.
    
-   \--size-only: Compares only the file size and synchronizes only if the file sizes are different.
    
-   \--checksum: Compares CRC-64. It first compares file sizes, and if they are the same, it then compares CRC-64. If CRC-64 does not exist on one side, they are considered inconsistent. This is only valid for object-to-object copies.
    
-   \--ignore-existing: Skips files that already exist. Supported since version 2.0.3.
    

Commands that support single objects

\--version-id string: The version ID of the object.

Commands that support list mode

\--list-format: The format of the list file. Valid values: plain, inventory.

\--list-manifest-from: Reads the description information of the list file format from a file. This parameter must be set when the list file format is inventory.

## **FAQ**

### **When I run an ossutil command, the error "region must be set in sign version 4" is reported**

Cause: The region ID was not configured when you set up ossutil 2.0.

Solution: To prevent operation failures due to missing configuration items when using ossutil, ensure that you configure the necessary basic items: AccessKey ID, AccessKey secret, and region ID. The region ID is especially important because the signature has been upgraded to V4, making it a required item. For more information about how to obtain a region ID, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
