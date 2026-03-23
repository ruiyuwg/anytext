You can use Cloud Shell to download a large number of logs from Simple Log Service and upload the logs to Object Storage Service (OSS) within a short period of time. This topic describes how to use Cloud Shell to download logs.

## Prerequisites

If you use a Resource Access Management (RAM) user to download logs, make sure that the following permissions are granted to the RAM user:

-   Read-only permission on Simple Log Service: AliyunLogReadOnlyAccess. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#task-xsk-ttc-ry).
    
-   Permissions to use Cloud Shell. For more information, see [Grant a RAM user the permissions to use Cloud Shell](/help/en/cloud-shell/access-control-ram#topic-2148475).
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  In the left-side navigation pane, click **Log Storage**. In the **Logstores** list, click the logstore you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5148375171/p768903.png)
    
4.  In the search box, enter a query statement. Then, specify a query time range and click **Search & Analyze**.
    
    After you obtain logs, you can use Cloud Shell to download the logs and save the logs to OSS. Then, you can download a large number of logs from OSS at a time.
    
5.  In the upper-right corner of the page, click the ![cloudshell](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1261181271/p334939.png) icon.
    
6.  Follow the on-screen instructions to complete the verification.
    
7.  If you want to persistently store common scripts and files, click **Create Now** in the **Storage Space** dialog box.
    
    You can associate and mount an File Storage NAS file system to persistently store your common scripts and files. If you do not associate or mount the NAS file system, your files are deleted after the NAS file system is released. When you use Cloud Shell to download logs, Cloud Shell creates a Performance NAS file system that uses the pay-as-you-go billing method. You are charged for using NAS, and a small fee is generated. For more information, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548).
    
    **Note**
    
    -   When you connect to Cloud Shell for the first time, Cloud Shell automatically creates a virtual machine (VM) for you within 30 seconds. If you open multiple Cloud Shell windows, all windows are connected to the same VM. The number of VMs does not increase regardless of whether you open a new Cloud Shell window.
        
    -   The Cloud Shell server resides in the China (Shanghai) region. If you download logs from a Logstore that does not reside in the China (Shanghai) region, you are charged for data transfer over the Internet. For more information, see [Pricing of Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing?spm=a3c0i.139163.9288850920.1.7690637avzyiqo).
        
    
    After Cloud Shell is started, a Cloud Shell window appears.
    
    ```
    Welcome to Alibaba Cloud Shell!
    
    Type "help" to learn about Cloud Shell
    Type "aliyun" to use Alibaba Cloud CLI
    
    You may be interested in these tutorials below.
    ---------------------------  |  ---------------------------
    Download logs from Simple Log Service                 |  cloudshell://tutorial/sls-download-log
    Use Alibaba Cloud CLI to manage cloud resources |  cloudshell://tutorial/aliyun-cli
    
    For more tutorials, visit https://api.aliyun.com/#/lab
    shell@Alicloud:~$ 
    ```
    
8.  Run the get\_log\_all command to download logs to the download\_data.txt file of Cloud Shell.
    
    ```
    aliyunlog log get_log_all --project="aliyun-test-project" --logstore="aliyun-test-logstore" --from_time="2024-07-01 00:00:00+8:00" --to_time="2024-07-02 15:40:00+8:00"  --query="your sql" --format-output=json >>download_data.txt
    ```
    
    For more information about how to use the get\_log\_all command, see [get\_log\_all](/help/en/sls/developer-reference/get-log-all).
    
9.  Upload the downloaded logs to OSS. Then, download the logs in OSS.
    
    1.  Run the following command to view the OSS buckets that you can manage. This helps you determine the OSS bucket in which you can store the log file:
        
        ```
        aliyun oss ls
        ```
        
        If the command is successful, the system returns a list of OSS buckets that you can manage.
        
        ```
        CreationTime                                 Region    StorageClass    BucketName
        2021-09-24 02:03:08 +0000 UTC        oss-cn-beijing        Standard    oss://fyytset
        2021-09-26 03:27:10 +0000 UTC       oss-cn-hangzhou        Standard    oss://demo
        Bucket Number is: 2
        ```
        
    2.  Run the `ll` command to find the file of the downloaded logs.
        
        In this example, `download_data.txt` is the required log file.
        
    3.  Run the following command to upload the log file to your OSS bucket for subsequent download operations:
        
        ```
        aliyun oss cp download_data.txt oss://demo --region cn-hangzhou
        ```
        
        If the following information is returned, the log file is uploaded:
        
        ```
        Succeed: Total num: 1, size: 3,198,090. OK num: 1(upload 1 files).
        
        average speed 12792000(byte/s)
        
        0.250823(s) elapsed
        ```
        
    4.  Log on to the OSS console and download the download\_data.txt log file.
        
        A large number of logs are downloaded at a time by using Cloud Shell.
        

## What to do next

[Use the Simple Log Service console, Simple Log Service CLI, or Simple Log Service SDK to download logs](/help/en/sls/download-logs)
