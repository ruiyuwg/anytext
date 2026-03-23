ossutil is a command-line tool for managing objects in Object Storage Service (OSS). Use it to upload, download, copy, and delete objects on Windows, Linux, and macOS.

**Important**

We recommend that you install and use [ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/) for new projects. ossutil 2.0 requires only an AccessKey ID, AccessKey secret, and region ID for initial configuration; it also adds richer filter options for batch operations, supports JSON/YAML/XML output formats, and lets you pass sensitive parameters via environment variables. See [Install ossutil 2.0](/help/en/oss/install-ossutil2). If you have existing scripts that depend on ossutil 1.x commands, continue with this guide.

To get started: download the package for your operating system, install and configure ossutil with your endpoint and AccessKey pair, then verify the installation.

## Download ossutil

The latest version is **1.7.19**. Download the package that matches your operating system and CPU architecture. To verify the download, compare the file's SHA-256 checksum against the value in the table.

**Platform**

**Download**

**SHA-256 checksum**

Linux x86 32-bit

[ossutil-v1.7.19-linux-386.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-linux-386.zip)

`f8a4a7e1df8529b06a3f3cca194a1c99163cb3b8ab3b5d64228c207c3ae63b86`

Linux x86 64-bit

[ossutil-v1.7.19-linux-amd64.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-linux-amd64.zip)

`dcc512e4a893e16bbee63bc769339d8e56b21744fd83c8212a9d8baf28767343`

Linux ARM 32-bit

[ossutil-v1.7.19-linux-arm.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-linux-arm.zip)

`ffe8b479e5fd3c0e146a14cd32e8ef5736d23f6c8de157944288ee09db2d7b1d`

Linux ARM 64-bit

[ossutil-v1.7.19-linux-arm64.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-linux-arm64.zip)

`f612c2a88d4d28363e254168d521fac5df632f2547ba84eaebacf6497dc04d57`

macOS 64-bit

[ossutil-v1.7.19-mac-amd64.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-mac-amd64.zip)

`9cf82a53fe24d8b5cc3dfb441787e0ea19c24dd7a1246653d5f1a28b7923d6fe`

macOS ARM 64-bit

[ossutil-v1.7.19-mac-arm64.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-mac-arm64.zip)

`10ece4d328c5d2440833adc5f4167168e9b2a4c5d364f673b0c45bcc4fd02ec5`

Windows x86 32-bit

[ossutil-v1.7.19-windows-386.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-windows-386.zip)

`772469ef02b91e893f7211acf732c2c07cd93214552ed7cf84157d3d9b9fb799`

Windows x86 64-bit

[ossutil-v1.7.19-windows-amd64.zip](https://gosspublic.alicdn.com/ossutil/1.7.19/ossutil-v1.7.19-windows-amd64.zip)

`8e9176aedc87d230ccd97dc7236b16564f2a068609ed301acdc73dc27faf7e77`

For earlier versions and release notes, see the [ossutil GitHub releases](https://github.com/aliyun/ossutil/releases).

## Install and configure ossutil

### Linux

1.  Run the following command to download and install ossutil:
    
    > The installer requires a decompression tool such as `unzip` or `7z`. ossutil is installed to `/usr/bin/` by default.
    
    ```
       sudo -v ; curl https://gosspublic.alicdn.com/ossutil/install.sh | sudo bash
    ```
    
2.  Run the configuration command:
    
    ```
       ossutil config
    ```
    
3.  When prompted, enter the path for the configuration file, or press Enter to use the default (`/home/user/.ossutilconfig`):
    
    ```
       Please enter the config file name,the file name can include path(default /home/user/.ossutilconfig, carriage return will use the default file.
       If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
    ```
    
    If you save the configuration file to a custom path (for example, `/home/config`), add `-c` to every ossutil command:
    
    ```
       ossutil ls oss://examplebucket -c /home/config
    ```
    
4.  Select the display language. Enter `CH` for Chinese or `EN` for English. The default is the language of your operating system.
    
5.  Enter the endpoint, AccessKey ID, and AccessKey secret when prompted. If you use temporary credentials from Security Token Service (STS), also enter the `stsToken` value. **Quick setup with ROS** To quickly create an AccessKey pair for a RAM user with full OSS access, use the [Resource Orchestration Service (ROS) wizard](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false). In the **Security Confirmation** section, select **I confirm that Alibaba Cloud ROS may create RAM resources**, then click **Create**. ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png) After the stack is created, copy the AccessKey pair from the **Outputs** tab. ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6291845471/p872601.png)
    
    **Important**
    
    Starting March 20, 2025, new OSS users must use a [custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) for data API operations on buckets in Chinese mainland regions. Default public endpoints are restricted for these operations. See the [policy change announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for the full list of affected operations. If you access OSS over HTTPS, [bind a valid SSL certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    `endpoint`
    
    Yes
    
    The endpoint for your bucket's region. For example, the public endpoint for Singapore is `https://oss-ap-southeast-1.aliyuncs.com`. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint: `https://oss-ap-southeast-1-internal.aliyuncs.com`. For a full list, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    `accessKeyID`
    
    Yes
    
    The AccessKey ID of your RAM user. To create an AccessKey pair, see [Create an AccessKey pair for a RAM user](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
    `accessKeySecret`
    
    Yes
    
    The AccessKey secret of your RAM user.
    
    `stsToken`
    
    No
    
    Required only when using temporary credentials from STS. Leave blank otherwise. To generate an STS token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).
    

### Windows

1.  Download the Windows package from the table above.
    
2.  Decompress the package and run `ossutil.bat`.
    
3.  Run the configuration command:
    
    ```
       ossutil config
    ```
    
4.  When prompted, enter the path for the configuration file, or press Enter to use the default (`C:\Users\user\.ossutilconfig`):
    
    ```
       Please enter the config file name,the file name can include path(default C:\Users\user\.ossutilconfig, carriage return will use the default file.
       If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
    ```
    
    If you save the configuration file to a custom path (for example, `c:\ossutil\config`), add `-c` to every ossutil command:
    
    ```
       ossutil ls oss://examplebucket -c c:\ossutil\config
    ```
    
5.  Select the display language. Enter `EN` for English. The default is the language of your operating system.
    
6.  Enter the endpoint, AccessKey ID, AccessKey secret, and optionally `stsToken`. See the parameter table in the Linux section above.
    

### macOS

1.  Run the following command to download and install ossutil:
    
    > ossutil is installed to `/usr/local/bin` by default.
    
    ```
       sudo -v ; curl https://gosspublic.alicdn.com/ossutil/install.sh | sudo bash
    ```
    
2.  Run the configuration command:
    
    ```
       ossutil config
    ```
    
3.  When prompted, enter the path for the configuration file, or press Enter to use the default (`/Users/user/.ossutilconfig`):
    
    ```
       Please enter the config file name,the file name can include path(default /Users/user/.ossutilconfig, carriage return will use the default file.
       If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
    ```
    
    If you save the configuration file to a custom path (for example, `/home/config`), add `-c` to every ossutil command:
    
    ```
       ossutil ls oss://examplebucket -c /home/config
    ```
    
4.  Select the display language. Enter `CH` for Chinese or `EN` for English. The default is the language of your operating system.
    
5.  Enter the endpoint, AccessKey ID, AccessKey secret, and optionally `stsToken`. See the parameter table in the Linux section above.
    

## Verify the installation

Run `ossutil` without arguments:

```
ossutil
```

A successful installation displays the ossutil help output:

```
NAME:
   ossutil - A tool to manage your oss objects

USAGE:
   ossutil [global options] command [command options] [arguments...]

VERSION:
   v1.7.19
...
```

## What's next

After installation, use ossutil to manage your objects:

-   [Upload objects](/help/en/oss/developer-reference/upload-objects-6) — `ossutil cp`
    
-   [Download objects](/help/en/oss/developer-reference/download-objects-5) — `ossutil cp`
    
-   [Copy objects](/help/en/oss/developer-reference/copy-objects-4) — `ossutil cp`
    
-   [Delete objects](/help/en/oss/developer-reference/rm) — `ossutil rm`
