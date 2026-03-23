MaxCompute integrates with Alibaba Cloud Shell to provide a web-based command-line client. This lets you run odpscmd commands directly from your browser without installing a local client. This topic covers important considerations and provides basic examples to get you started with odpscmd in Cloud Shell.

## **Prerequisites**

If you connect as a RAM user, ensure the user has the **AliyunCloudShellFullAccess** permission. For more information on granting permissions, see [Authorize RAM users](/help/en/cloud-shell/access-control-ram).

## Limitations

**Note**

Cloud Shell is a web-based command-line tool provided by Alibaba Cloud. MaxCompute integrates with Cloud Shell to provide a pre-configured client environment, allowing you to use odpscmd without manual installation. For more information about Cloud Shell, see [What is Cloud Shell?](/help/en/cloud-shell/what-is-the-cloud-command-line).

-   **Cloud Shell limitations**
    
    **Limits**
    
    **Limitations**
    
    Number of virtual machines
    
    Cloud Shell creates only one virtual machine at a time, regardless of how many session windows are open. All session windows automatically connect to this virtual machine.
    
    Session window
    
    You can open up to five session windows.
    
    Destruction on inactivity
    
    A session is stopped after 30 minutes of inactivity or when all session windows are closed. The virtual machine is destroyed 15 minutes after the session stops. When you restart Cloud Shell, a new virtual machine is created.
    
    Destruction on expiration
    
    The virtual machine created for Cloud Shell has a 1-hour lifetime. After 1 hour, Cloud Shell immediately destroys the virtual machine. When you restart Cloud Shell, a new virtual machine is created.
    
    File storage
    
    Cloud Shell mounts 10 GB of temporary storage space. You can store files in the /home/shell folder, but this space is reset when the virtual machine is destroyed. For persistent storage, you can mount a bucket. The bucket is automatically loaded each time you start Cloud Shell.
    
    Prohibited use
    
    Long-term use and malicious processes, such as compute-intensive or network-intensive tasks, are not supported. This can cause your session to be stopped or disabled without warning.
    
-   **Supported regions**
    
    You can use Cloud Shell to connect to MaxCompute projects in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), and China (Shenzhen).
    

## **Usage notes**

**Data residency and security**: The Cloud Shell service and its temporary storage are hosted in the China (Shanghai) region. When you connect to a MaxCompute project in a different region, your data is transferred across regions to Shanghai for processing. Ensure this cross-region data transfer complies with your organization's data residency policies before you proceed.

## Start the odpscmd in Cloud Shell

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the upper-left corner.
    
2.  On the **Projects** page, click **Command Line** in the upper-right corner.
    
3.  In the **Choose Project** dialog box, select the project that you want to manage and click **OK**.
    
    **Note**
    
    If a dialog box about mounting an NAS file system appears, you can mount one as needed. For more information, see [(Optional) Mount a NAS file system](#a8cb024026frn).
    
    After Cloud Shell (odpscmd) is loaded, the interface appears, as shown in the following figure.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8379091371/p695606.png)
    

## **(Optional) Mount a NAS file system**

Cloud Shell provides 10 GB of temporary storage space. This space is reset when the virtual machine is destroyed. For persistent storage, you can mount a NAS file system, which is automatically loaded each time Cloud Shell starts. To mount a NAS file system, perform the following steps.

In the **MaxCompute Cloud CMD** window, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8379091371/p694824.png) icon, select **Mount Storage Space**, and then attach a NAS file system.

**Note**

Mounting a NAS file system incurs storage fees. After you finish using the file system, detach it promptly. For more information about NAS storage fees, see [Billing overview](/help/en/nas/product-overview/overview-1).

## **Use Cloud Shell (odpscmd)**

Cloud Shell (odpscmd) for MaxCompute supports all SQL commands that can be run on a local client. This section provides examples of how to run SQL commands and transfer data using Cloud Shell (odpscmd).

### **Run SQL commands**

To create a table named `result_table1`, run the following command:

```
CREATE TABLE IF NOT EXISTS result_table1 (
 education STRING comment 'Education level',
 num BIGINT comment 'Number of people');
```

After the table is created, run the following command to view it:

```
SHOW TABLES;
```

### **Data transmission**

-   Upload a file
    
    1.  Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8379091371/p695693.png) icon and select **Upload** to upload a local file. This topic uses the [result.txt](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230719/njyf/result.txt) file as an example.
        
        After the upload is complete, press `Ctrl+C` to exit the Cloud Shell (odpscmd) environment. Then, run the `ll` command to verify that the file is uploaded and view the file path.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8379091371/p695665.png)
        
        After you confirm that the file is uploaded, run the following command to return to the Cloud Shell (odpscmd) environment:
        
        ```
        cloudshell-odpscmd -p <project.name>
        ```
        
    2.  Run the following command to upload the `result.txt` file to MaxCompute:
        
        ```
        tunnel upload result.txt result_table1;
        ```
        
-   Download a file
    
    1.  Run the following command to download the `result_table1` table from MaxCompute to Cloud Shell (odpscmd):
        
        ```
        Tunnel download result_table1 result_table1.txt;
        ```
        
    2.  Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8379091371/p695693.png) icon and select **Download** to download the `result_table1.txt` file to your local computer.
        
        After the download is complete, the result is shown in the following figure.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8379091371/p695695.png)
