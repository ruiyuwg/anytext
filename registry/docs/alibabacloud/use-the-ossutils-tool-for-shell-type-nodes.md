DataWorks Shell nodes, including common Shell and EMR Shell nodes, have the ossutil tool pre-installed. This lets you perform tasks such as file uploads, downloads, batch operations, and bucket management. This topic describes how to use the ossutil command-line tool in Shell and EMR Shell nodes to access OSS.

## Function overview

DataWorks Shell nodes, including common Shell and EMR Shell nodes, have the Alibaba Cloud OSS command-line tool `ossutil` pre-installed. This lets you perform tasks such as file uploads, downloads, batch operations, and bucket management. You can use ossutil to access OSS by configuring access credentials in a configuration file or using command-line parameters. For more information about how to configure ossutil, see [Configure ossutil](/help/en/oss/developer-reference/configure-ossutil).

**Note**

`ossutil` is pre-installed in the DataWorks environment, so you do not need to install it. The default path is `/home/admin/usertools/tools/ossutil64`. You can run the `ls -l /home/admin/usertools/tools/` command to view the list of tools in this directory and confirm that `ossutil64` exists. The following figure shows a sample output.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043671.png)

The following sections use a Shell node as an example to describe the two configuration methods.

## **Access OSS using command-line parameters**

1.  In the Shell node, edit the node content. The following sample code uses `ossutil` to connect to a specified OSS Endpoint and lists all buckets that the current account has permission to access.
    
    ```
    /home/admin/usertools/tools/ossutil64 -e <OSSEndPoint> -i <AccessKeyID> -k <AccessKeySecret> ls -s 
    if [[ $? == 0 ]];then
        echo "access oss success"
    else
        echo "failed"
        exit 1
    fi
    echo "finished"
    ```
    
    **Note**
    
    Replace `OSSEndPoint`, `AccessKeyID`, and `AccessKeySecret` in the code with your actual values. For more information about the parameters, see [Configure ossutil](/help/en/oss/developer-reference/configure-ossutil).
    
    **Important**
    
    Passing an AccessKey pair through command-line parameters poses a security risk of key exposure. We recommend that you use this method with caution.
    
2.  Verify the result.
    
    Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3891244371/p860545.png) icon and select a serverless resource group to run the Shell node task. The following figure shows a sample result.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043703.png)
    

## **Access OSS using a configuration file**

1.  Create an ossutil configuration file and upload it to OSS.
    
    1.  Create a configuration file.
        
        On your local machine, create a file named `myconfig.txt`. The following code provides an example of the file content.
        
        ```
        [Credentials]
        language = EN
        endpoint = <Endpoint> #For example, oss-cn-shanghai.aliyuncs.com
        accessKeyID = <AccessKeyID>
        accessKeySecret = <AccessKeySecret>
        ```
        
        **Note**
        
        Replace `Endpoint`, `AccessKeyID`, and `AccessKeySecret` with your Alibaba Cloud OSS Endpoint and the AccessKey pair of a RAM user that has the required permissions. Do not enclose the parameter values in quotation marks. For more information about the parameters, see [Configure ossutil](/help/en/oss/developer-reference/configure-ossutil).
        
    2.  Upload the configuration file.
        
        Upload the `myconfig.txt` file to OSS. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload).
        
    3.  View the download link.
        
        In the **Actions** column for the uploaded file in OSS, click **Details**. Disable **Use HTTPS** and click **Copy File URL**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043690.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043691.png)
        
2.  Download the configuration file to a serverless resource group.
    
    On the DataWorks **Image Management** page, create a custom image and download the configuration file to the Serverless resource group.
    
    1.  Create an image.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and switch to the destination region. In the navigation pane on the left, click **Image Management**. On the **Image Management** page, go to the **Custom Images** tab and click **Create Image**. In the Create Image panel, set the following parameters to create the image.
        
        **Parameter**
        
        **Example Value**
        
        **Image Name**
        
        You can customize the command name.
        
        **Image Description**
        
        Description of the custom command.
        
        **Reference Type**
        
        DataWorks Official Image (default).
        
        **Image Namespace**
        
        DataWorks Default (default).
        
        **Image Repository**
        
        DataWorks Default (default).
        
        **Image Name/ID**
        
        Select `dataworks_shell_task_pod:xxx`. This is the official DataWorks image for Shell nodes.
        
        **Visible Scope**
        
        Select a scope as needed.
        
        -   Visible Only to Creator.
            
        -   Visible to All.
            
        
        **Using sub-products**
        
        Data Studio (default).
        
        **Supported Task Type**
        
        Shell (default).
        
        **Installation Package**
        
        From the **Installation Package** drop-down list, select `Script`. In the command box, enter the following command.
        
        ```
        # Download
        wget 'http://<yourConfigURL>' -O /home/admin/usertools/tools/<configName>
        ```
        
        **Note**
        
        -   Replace `http://<yourConfigURL>` with the file URL that you copied from the OSS console.
            
        -   You can set the `<configName>` parameter to `myconfig.txt`, which is the name of the file to download from OSS.
            
        
        Click **Confirm** to create the image.
        
    2.  Test publishing.
        
        In the **Actions** column for the image you created, click **Publish**. On the **Publish Image** page, select a **Test Resource Group** and click **Test** next to **Test Result**. After the **Test Succeeded** message appears, click **Publish**.
        
    3.  For the custom image that you published, click the ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7056933961/p421690.png) icon in the Actions column and select **Modify Workspace**. Bind the image to the target workspace.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043698.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043699.png)
        
3.  Use the ossutil command-line tool with the configuration file.
    
    1.  Create a common Shell node.
        
        1.  Go to the Data Studio page.
            
            Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and switch to the destination region. In the navigation pane on the left, choose **Data Development and O&M** > **Data Studio**. Select the target workspace from the drop-down list and click **Go to Data Studio**.
            
        2.  Create a common Shell node.
            
            In Data Studio, right-click the target business flow, choose **Create Node**, and then select **Shell** in the **General** folder.
            
    2.  In the Shell node, edit the node content. The following sample code uses `ossutil` to connect to the OSS Endpoint specified in `myconfig.txt` and lists all buckets that the account specified in `myconfig.txt` has permission to access.
        
        ```
        /home/admin/usertools/tools/ossutil64 -c /home/admin/usertools/tools/myconfig.txt ls -s
        ```
        
    3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3891244371/p860545.png) icon. Select the serverless resource group that you used for testing when you published the image, and specify the **custom image** that you created and published. Then, run the Shell node task. Upon successful execution, the following figure shows a sample result.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943358671/p1043703.png)
        
    4.  On the **Scheduling Configuration** tab for the node, in the **Resource Property** section, select the target resource group and specify the **custom image** that you created and published. Save the scheduling configuration. Then, commit the Shell node to the development environment and publish it to the production environment.
        

## **References**

In the latest version of Data Studio, you can attach a RAM role to a Shell node. This allows the node to use Security Token Service (STS) to dynamically obtain temporary security credentials and securely call ossutil to access OSS. For more information, see [Configure a node to use a specific RAM role](/help/en/dataworks/user-guide/node-scheduling/#cd68d00e6fu9l).
