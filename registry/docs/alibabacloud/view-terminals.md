The device list provides a comprehensive overview of all user devices connected to the Secure Access Service Edge (SASE) platform. This topic describes how to view information about these devices.

## Background

Secure Access Service Edge (SASE) uses Alibaba Cloud Points of Presence (POPs) to accelerate traffic from devices to your internal enterprise applications. Devices must have the SASE client installed to access these applications. Once the SASE client is installed on a device, you can use the device list to view real-time information such as the device's online status, version, and network traffic. This helps you manage your enterprise devices more efficiently.

## Procedure

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Terminal Management** > **Terminals**.
    
3.  On the **Terminals** page, you can view the number of **Register Terminal**, the **Online Terminal Trend**, and lists of **Register Terminal** and **Unregistered Terminal**. You can also configure the devices.
    

## **View the number of registered devices**

The device count is displayed across the following dimensions: **Total Terminals**, **Windows Terminals**, **macOS Terminals**, **Linux Terminals**, **Android Terminals**, **iOS Terminals**, and **WUYING Workspace**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009051.png)

## **View the online device trend**

You can view a trend graph and the peak number of online devices for a specified time period.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009057.png)

You can set the time range for the trend graph. The supported time ranges are **Last 24 Hours**, **Last 7 Days**, **Last 1 Month**, and **Last 3 Months**.

Click the ![图标3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5133020371/p359424.png) icon to expand the time range drop-down list and select a time range.

To set the time range to **Last 1 Month** or **Last 3 Months**, you must enable Simple Log Service (SLS). For more information, see [Log analysis](/help/en/sase/user-guide/log-analysis-feature#task-98586-zh).

## **View the device list**

The device list shows information about registered and unregistered devices.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009076.png)

### **View registered device information**

This section provides information about devices that run Windows, Windows Wuying, macOS, Linux, iOS, Android, and HarmonyOS. You can view information such as **Terminal Name**, **Terminal Tag**, **Operating System**, **Device Owner**, **Department**, **Owner**, **Sharing Settings**, and **MAC Address**. You can also perform the following operations on these devices.

-   **Import corporate devices**
    
    1.  Click **Import Enterprise Device**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009109.png)
        
    2.  In the **Import Enterprise Device** dialog box, click **Download Import Template**. Enter the MAC addresses of your corporate devices in the template file. Upload the file by **Drag and Drop File to Upload** or clicking **View Local File**. Click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009090.png)
        
    3.  After the upload is complete, click **Imported MAC Addresses** to view the corporate devices you have imported.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009111.png)
        
-   **Set default display columns**
    
    Click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5133020371/p359407.png) icon in the upper-right corner of the list. In the **Default Display Configuration** dialog box, select the columns you want to display. The columns include **Terminal Name**, **Operating System**, **Operating System Version**, **Department**, and **Owner**. Then, click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009093.png)
    
-   **Configure device sharing**
    
    -   **Global Sharing**: Allows multiple employee accounts to access the same office device.
        
        To enable global sharing, click **Global Sharing**.
        
    -   **Disable Sharing**: When global sharing is disabled, each office device can be accessed only by the last account that logged on.
        
        To disable global sharing, click **Disable Sharing**.
        
    -   **Sharing Settings**: If sharing is enabled for a device, multiple employee accounts can access it. If sharing is disabled, only the last logged-on account can access the device.
        
        In the **Sharing Settings** column, you can manually enable or disable sharing for a specific device.
        
-   **Export device information**
    
    -   **Export All**
        
        Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009149.png) icon in the upper-right corner of the list to export information for all registered devices.
        
    -   **Batch Export**
        
        Click **Batch Export** to export information about the selected devices on the current page.
        
-   **Query device information**
    
    You can filter the device list by criteria such as version number, device tag, device status, device ownership, sharing status, username, department, MAC address, device name, device IP address, office zone, and system serial number (SN).
    
-   **Log collection**
    
    Click **Collect Logs** to retrieve and download logs from the device.
    
-   **Device handling**
    
    In the **Actions** column for a device, click **Terminal Handling** and then click **Lock** or **Mark as Lost**.
    
    **Note**
    
    -   If you lock a device, SASE immediately breaks the device's connection to internal enterprise applications. To unlock the device, an employee must contact an administrator.
        
    -   If you report a device as lost, SASE immediately breaks its connection to internal enterprise applications. To remove the lost status, an employee can update the device's status in the device management section of the SASE client or contact an administrator.
        
    
-   **Batch Operations**
    
    Click **Batch Manage** to manage the selected devices on the current page. You can perform the following actions: **Batch Delete**, **Batch Unbind**, **Enable Device Sharing**, **Disable Device Sharing**, **Batch Change Device Type**, and **Batch Export**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009154.png)
    
-   **View device details**
    
    1.  Click the target **Terminal Name**.
        
    2.  On the **Details** page, you can view the device's **Basic Information**, **Software Information**, **Online**, and **Log Collection** tasks.
        
        **Important**
        
        -   Viewing software information and online status is not supported for iOS or Android devices.
            
        -   To use the online status feature, the client version must be 4.x or later.
            
        
        -   **Basic Information**: Displays information about the device, such as its operating system, version, and MAC address. This section also shows the device status, including the current username, department, and logon status, along with historical logon accounts.
            
        -   **Software Information**: Information about the software installed on the device, including the name, company, version, and installation time.
            
        -   **Online**: A heatmap that shows the online status of devices.
            
        -   **Log Collection**: Displays a list of log collection tasks. You can click **Collect** to create a log collection task.
            

### **View unregistered device information**

This section displays information about dumb terminals and devices on the username and password whitelist. You can perform the following operations on these devices.

-   **Dumb terminals**
    
    -   **View**: Click **Dumb Terminal**. The device list then displays all dumb terminals.
        
    -   **Add**: Click **Add Terminal** to add a device individually. Enter the **MAC Address**, **MAC Address Mask**, **Device Vendor**, **Device Name**, and **Device Type**. Alternatively, click **Import Devices** to add devices in batches by uploading a file.
        
        **Note**
        
        For example, if you set the MAC address to cc:46:d6:00:00:00 and the MAC address mask to ffff-ff00-0000, all devices with MAC addresses that start with cc:46:d6 are matched.
        
    -   **Edit**: To modify the information for a dumb terminal, locate the device and click **Edit** in the **Actions** column.
        
    -   **Export:** Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009176.png) icon to export the information of all dumb terminals.
        
    -   **Disable:** To disable an existing dumb terminal, find the device and click **Disable** in the **Actions** column.
        
    -   **Delete**: To delete a dumb terminal, locate the device. In the **Actions** column, click **Delete**. You can also select multiple devices to delete them in a batch.
        
        **Important**
        
        A deleted device must be re-registered before it can be used to log on to the SASE client again.
        
    
-   **Username and password whitelist**
    
    -   **View**: Click **Terminal Whitelist**. The device list then displays the username and password whitelist.
        
    -   **Add**: Click **Add Account and Password**. Enter the **MAC Address**, **Device Vendor**, **Device Name**, **Device Type**, **Account**, and **Password** to add a device. You can also click **Import Devices** to add devices in batches by uploading a file.
        
    -   **Edit**: To modify a device's information on the username and password whitelist, locate the device. In the **Actions** column, click **Edit**.
        
    -   **Export:** Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307058571/p1009176.png) to export information for all dumb terminal devices.
        
    -   **Delete**: To remove a device from the username and password whitelist, find the device in the list. In the **Actions** column, click **Delete**. You can also delete multiple devices in a batch.
        
        **Important**
        
        If a device is deleted, you must re-register it to log on to the SASE client.
