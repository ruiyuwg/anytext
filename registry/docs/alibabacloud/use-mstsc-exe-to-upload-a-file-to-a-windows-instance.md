You can use Remote Desktop Connection, also known as Microsoft Terminal Services Client (MSTSC), which is a built-in Windows tool, on an on-premises Windows computer to connect to a Windows Elastic Compute Service (ECS) instance and upload files to the instance. You can also use Windows App, a remote connection tool suitable for macOS, on an on-premises macOS computer to connect to a Windows ECS instance and upload files to the instance. This topic describes how to use Remote Desktop Connection or Windows App on an on-premises Windows or macOS computer to upload files to a Windows ECS instance.

## **Tools**

-   #### [Remote Desktop Connection on an on-premises Windows computer](#5723e82023dw9)
    
    Remote Desktop Connection is a built-in Windows tool for uploading files from an on-premises Windows computer to a Windows ECS instance.
    
    **Limits**
    
    **On-premises operating system**
    
    **Instance network configuration**
    
    **File size**
    
    **Transfer speed**
    
    **Maximum number of files**
    
    Windows
    
    The Windows ECS instance is associated with a static public IP address (public IP address that is automatically assigned) or an elastic IP address (EIP).
    
    None
    
    None
    
    None
    
-   #### [Windows App on an on-premises macOS computer](#5365db4e670i3)
    
    Windows App is a remote connection tool developed by Microsoft for Windows. After you download and install Windows App on an on-premises macOS computer, you can use Windows App to transfer files to a Windows ECS instance.
    
    **Limits**
    
    **On-premises operating system**
    
    **Instance network configuration**
    
    **File size**
    
    **Transfer speed**
    
    **Maximum number of files**
    
    macOS
    
    The Windows ECS instance is associated with a static public IP address or an EIP.
    
    None
    
    None
    
    None
    

## **Preparations**

-   **Check the status of a Windows ECS instance**. The operations described in this topic can be performed on a Windows ECS instance only if the instance is in the **Running** state.
    
    **Check the status of a Windows ECS instance**
    
    You can view the status of a Windows ECS instance on the Instance page in the ECS console. The following figure shows that a Windows ECS instance is in the Running state.
    
    > For information about how to check the status of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901892.png)
    
-   **Obtain the public IP address of the Windows ECS instance**. The public IP address of the Windows ECS instance is required to connect to the instance and perform the operations described in this topic.
    
    **Obtain the public IP address of the Windows ECS instance**
    
    You can view the public IP address of the Windows ECS instance in the IP Address column on the Instance page in the ECS console, as shown in the following figure.
    
    > For information about how to check information about an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information). For information about how to enable public bandwidth for an ECS instance to allow the instance to access the Internet, see [Enable public bandwidth](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901895.png)
    
-   **Check the security groups of the Windows ECS instance**. Before you can use Remote Desktop Connection or Windows App to transfer files to the Windows ECS instance, check that the Remote Desktop Protocol (RDP) port is open in a security group of the instance. The default RDP port is port 3389.
    
    **Check that a rule for opening the RDP port exists in a security group of the Windows ECS instance**
    
    Remote Desktop Connection and Windows App transfer files over RDP. An **inbound** rule must be added to a security group of the Windows ECS instance to open the RDP port. The following table describes the rule. For information about how to add a security group rule, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule).
    
    **Action**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    **Allow**
    
    1
    
    **Custom TCP**
    
    RDP port, which is port 3389 by default
    
    **Specify the public IP address of your on-premises computer or the CIDR block to which the public IP address belongs.**
    
    **Warning**
    
    If you specify `0.0.0.0/0`, access on the specified port is allowed for all IPv4 addresses, which poses security risks. Proceed with caution.
    
    You can obtain the public IP address of your on-premises computer from `[https://cip.cc/](https://cip.cc/)`.
    
    For example, if the public IP address of your on-premises computer is `118.xxx.xxx.xx8`, add a rule to a security group of the Windows ECS instance, as shown in the following figure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901920.png)
    

## **Use Remote Desktop Connection to transfer files between an on-premises Windows computer and a Windows ECS instance**

If your on-premises computer runs Windows, you can use Remote Desktop Connection to connect to a Windows ECS instance and upload files to the instance.

**Important**

If you want to upload a large file or a large number of files to a Windows ECS instance, compress the files into a compressed package and then upload the package to the instance. This improves transfer efficiency. For more information, see [Compress and upload files](/help/en/ecs/user-guide/file-compression).

### **Step 1: Use Remote Desktop Connection to connect to a Windows ECS instance and redirect an on-premises drive**

1.  Press **Windows logo key+R** to open the Run dialog box. Enter `mstsc` and press the Enter key to start **Remote Desktop Connection**.
    
2.  In the **Remote Desktop Connection** dialog box, perform the following steps to connect to a Windows ECS instance:
    
    1.  Click **Show Options**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901782.png)
        
    2.  On the **General** tab, configure the following parameters:
        
        -   **Computer**: Enter the static public IP address or EIP of the Windows ECS instance.
            
        -   **User name**: Enter a username. The default username is **Administrator**.
            
    3.  On the **Local Resources** tab, select **Clipboard** and click **More**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901785.png)
        
    4.  Select the disk under **Drives** on which the file that you want to upload is stored, and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901789.png)
        
    5.  Click **Connect** to connect to the Windows ECS instance. The desktop of the instance is displayed.
        

### **Step 2: Upload or download a file**

After you connect to the Windows ECS instance, you can find the redirected drive of your on-premises computer in **This Computer** on the instance. Double-click the redirected drive to access the disk on your on-premises computer. Then, you can move files between the on-premises disk and a directory on the instance to upload or download files between the instance and your on-premises computer.

-   **Double-click the redirected drive on the Windows ECS instance to access the disk on your on-premises computer**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901807.png)
    
-   **Upload a file from your on-premises computer to the Windows ECS instance**
    
    > To upload a file from your on-premises computer to the Windows ECS instance, press Ctrl+C and Ctrl+V to copy the file from your on-premises computer to the Windows ECS instance.
    
    ![2025-01-08_17-32-09 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901828.gif)
    
-   **Download a file from the Windows ECS instance to your on-premises computer**
    
    > To download a file from the Windows ECS instance to your on-premises computer, press Ctrl+C and Ctrl+V to copy the file from the Windows ECS instance to your on-premises computer.
    
    ![2025-01-08_17-34-26 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p901832.gif)
    

## **Use Windows App to transfer files between an on-premises macOS computer and a Windows ECS instance**

If your on-premises computer runs macOS, you can use Windows App to connect to a Windows ECS instance and transfer files to the instance. To transfer files by using Windows App on an on-premises macOS computer, perform the following steps.

**Important**

If you want to upload a large file or a large number of files to a Windows ECS instance, you can compress the files into a compressed package and upload the package to the instance. This improves transfer efficiency. For more information, see [Compress and upload files](/help/en/ecs/user-guide/file-compression).

### **Step 1: Download and install Windows App**

Click [Windows App](https://aka.ms/macOSWindowsApp) to download and install Windows App from the Mac App Store.

### **Step 2: Connect to a Windows ECS instance**

1.  Start Windows App and choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1583357371/p902122.png)** > **Add PC** in the upper-right corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902121.png)
    
2.  On the **Add PC** page, enter the public IP address of the Windows ECS instance to which you want to connect.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902135.png)
    
3.  Redirect a folder on your on-premises computer.
    
    If you redirect a folder on your on-premises computer to the Windows ECS instance to which you want to connect, you share the folder with the instance. This allows you to access files in the folder on the instance. Perform the following steps:
    
    Click the **Folders** tab, select **Redirect folders**, click the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1583357371/p902144.png)** icon, and then follow the on-screen instructions to add a folder that you want to redirect. The redirected folder appears in the folder list, as shown in the following figure.
    
    > In this example, the folder that contains the macOS **documents**, which is `/Users/<username>/Documents`, is used.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902148.png)
    
4.  Click **Add**.
    
5.  On the Devices page, find the Windows ECS instance that you added in the previous step and **double-click** the instance. In the dialog box that appears, configure the **Username** and **Password** parameters and click **Continue** to connect to the instance. After the instance is connected, the desktop of the instance appears.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902214.png)
    

### **Step 3: Upload or download a file**

After you connect to the Windows ECS instance, you can find the redirected folder of your on-premises computer in **This Computer** on the instance. Double-click the redirected folder to access the folder on your on-premises computer. Then, you can move files between the on-premises folder and a directory on the instance to upload or download files between the instance and your on-premises computer.

-   **Double-click the redirected folder on the Windows ECS instance to access the folder on your on-premises computer**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902207.png)
    
-   **Upload a file from your on-premises computer to the Windows ECS instance**
    
    > To upload a file from your on-premises computer to the Windows ECS instance, press Ctrl+C and Ctrl+V to copy the file from your on-premises computer to the Windows ECS instance.
    
    ![2025-01-09_11-45-33 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902210.gif)
    
    After the operation is complete, the file is uploaded to the Windows ECS instance.
    
-   **Download a file from the Windows ECS instance to your on-premises computer**
    
    > To download a file from the Windows ECS instance to your on-premises computer, press Ctrl+C and Ctrl+V to copy the file from the Windows ECS instance to your on-premises computer.
    
    ![2025-01-09_11-46-38 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8935447371/p902212.gif)
    
    After the operation is complete, you can find the downloaded file in the redirected folder on your on-premises computer.
    

## **References**

-   After you upload files to a Windows ECS instance, you can back up the files. For more information, see [Create snapshot manually](/help/en/ecs/user-guide/create-a-snapshot).
    
-   You can use Object Storage Service (OSS) to store and manage files. For more information, see [Get started with the OSS console](/help/en/oss/user-guide/console-quick-start).
