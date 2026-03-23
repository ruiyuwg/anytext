This topic provides answers to some frequently asked questions about peripherals during the use of a cloud computer.

## **Table of contents**

**Item**

**FAQ**

Common parameters

-   [What types of USB peripherals are supported by cloud computers?](#faq-supported-usb-devices)
    
-   [What do I do if the toolbar on my cloud computer does not have the Devices option?](#faq-citrix-usb-redirection-disabled)
    

Keyboard and mouse

-   [What do I do if a USB keyboard fails to work on my cloud computer?](#faq-keyboard-malfunction)
    
-   [What do I do if I cannot move the pointer as expected when I play a game or use 3D software on my cloud computer?](#faq-relative-mouse)
    

Printer and webcam

-   [What do I do if a Windows cloud computer fails to connect to a printer and the 0x0000011b error is reported?](#faq-printer-0x0000011b)
    
-   [What do I do if the printer manufacturer does not provide a printer driver for Windows Server?](#faq-windows-server-driver)
    
-   [What do I do if a cloud computer fails to detect my USB webcam?](#faq-cannot-recognize-camera)
    

USB flash drive and UKey device

-   [How do I use a UKey device on a cloud computer?](#faq-how-to-use-ukey)
    
-   [What do I do if an inserted UKey device is not displayed in the peripheral list on a cloud computer?](#faq-ukey-not-found)
    
-   [What do I do if I cannot use a UKey device that is displayed in the peripheral list?](#faq-ukey-not-working)
    
-   [What do I do if I fail to transfer files to and from a USB flash drive?](#faq-usb-drive-file-transfer)
    

Mobile phone and tablet

-   [Can I connect my cloud computer to a mobile phone or tablet?](#faq-support-mobile-pad)
    
-   [What do I do if an on-premises device can detect an ADB device but my cloud computer cannot detect it?](#faq-adb-not-detected)
    
-   [What do I do if the mouse pointer is not displayed or the mouse does not operate as expected when I connect to my cloud computer from an iPad?](#faq-ipad-pointer)
    

## Common parameters

### **What types of USB peripherals are supported by cloud computers?**

EDS provides the USB redirection feature, and you can connect USB peripherals, such as printers, USB flash drives, graphics tablets, and webcams, to cloud computers. For more information, see [Use peripherals on a cloud computer](/help/en/wtc/user-guide/peripheral-access-overview#task-2108244).

**Note**

If you cannot use peripherals on your cloud computer, contact the administrator to check whether the USB redirection feature is enabled in the policy that is associated with the cloud computer.

### **What do I do if the toolbar on my cloud computer does not have the Devices option?**

The Devices option is not displayed after you connect to the non-ASP cloud computer that runs Ubuntu and manually update its operating system (OS).

In most cases, the USB redirection feature determines whether the Devices option is displayed on the toolbar. If the administrator enables the USB redirection feature for your cloud computers, the Devices option appears. Otherwise, the Devices option does not appear. If the administrator has enabled the USB redirection feature but the Devices option still does not appear, you must contact the administrator. The administrator can perform the following operations based on the Ubuntu version:

-   If the cloud computer runs Linux Ubuntu 18.04, the administrator can change the image of the cloud computer to update its OS in the EDS console, and you do not need to manually update the OS on the cloud computer.
    
-   If you need a cloud computer that runs Linux Ubuntu 20.04, the administrator can use a cloud computer template in which the OS is Linux Ubuntu 20.04 to create a cloud computer.
    

## Keyboard and mouse

### **What do I do if a USB keyboard fails to work on my cloud computer?**

If the keyboard fails to work as expected or other exceptions occur, such as `1.00, 0.90, 0.80...` displayed when you press the **A** key and `1.00, 0.60...` displayed when you press the **S** key, the possible cause is that the keyboard keys get stuck. You can use one of the following methods to resolve the issue:

-   Press the `Ctrl` key. If the issue persists, disconnect the cloud computer and reconnect to it.
    
-   Replace the image. For more information, see [Change the image of a cloud computer or cloud computer pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools).
    

### **What do I do if I cannot move the pointer as expected when I play a game or use 3D software on my cloud computer?**

To resolve the issue, you need to enable the cursor confinement feature in the cloud computer settings.

**Important**

-   After you enable the cursor confinement feature, the cursor confinement setting takes effect only for the current connection. After you disconnect from the cloud computer and reconnect to the cloud computer, the cursor confinement feature is disabled.
    
-   The following example uses a Windows client of V7.11. The operations vary based on the actual client version.
    

1.  Connect to the cloud computer.
    
2.  Click DesktopAssistant on the desktop of the cloud computer and click **Settings**.
    
3.  Choose **Preferences** > **Control**.
    
4.  On the **Control** tab, turn on the **Confine Cursor** switch.
    
    After you turn on the **Confine Cursor** switch, the pointer is confined within the cloud computer desktop. You cannot move the pointer to areas other than the cloud computer desktop.
    
    **Note**
    
    Areas other than the cloud computer desktop include areas other than the cloud computer window and DesktopAssistant. DesktopAssistant is a part of the client page and does not belong to the cloud computer desktop.
    
5.  (Optional) You can use the default shortcut key (Esc+Esc, `Ctrl+Alt+2`, or `Ctrl+Option+2`) to disable the cursor confinement feature. You can also specify a custom shortcut key in the **Release Cursor Shortcut** section.
    

## Printer and webcam

### **What do I do if a Windows cloud computer fails to connect to a printer and the 0x0000011b error is reported?**

You can connect an on-premises printer to a Windows cloud computer by using a USB cable, and the printer is shared within a local area network (LAN). Other cloud computers in the LAN can access the cloud computer over a specific IP address to use the printer. If the message "Windows cannot connect to the printer" and the `0x0000011b` error is reported, you can perform the following steps to add a registry on the cloud computer that shares the printer and the cloud computer that wants to access the shared printer:

1.  On the cloud computers, press the shortcut keys `Win+R` to open the Run dialog box, enter `regedit`, and then click **OK** to open Registry Editor.
    
2.  Go to the directory `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print` in the registry editor and press Enter.
    
3.  Right-click a blank area in the panel and choose **New** > **DWORD (32-bit) Value**.
    
4.  Specify a name for the registry file that you created in the previous step as `RpcAuthnLevelPrivacyEnabled` and change the value to `0`.
    

### **What do I do if the printer manufacturer does not provide a printer driver for Windows Server?**

Common printer manufacturers provide drivers for Windows 7, Windows 10, and Windows 11. Some manufacturers also provide drivers for Windows Server 2016 and Windows Server 2019. If the printer manufacturer does not provide a printer driver for Windows Server 2016 and Windows Server 2019, refer to the following solution.

#### **Solution**

1.  Obtain the driver for Windows 10 from the official website of the printer.
    
2.  Install the driver on your cloud computer.
    
    -   If the driver can work as expected on the cloud computer, the driver is compatible with Windows Server 2016 or Windows Server 2019. Then, you can use the printer on the cloud computer.
        
    -   If the driver cannot be installed, you must find the path to the files of the driver to install the driver.
        
        1.  Decompress the obtained driver package on the cloud computer.
            
        2.  In the property panel of the printer to which you want to install the driver, click the **Advanced** tab and click **New Driver**.
            
        3.  In the panel that appears, click **Have Disk**, select the path where the driver is decompressed, and then follow the on-screen instructions to proceed.
            
            **Note**
            
            If multiple printer drivers are available after decompression and you cannot determine which driver to install, you can check the name of the printer driver that is used on your local computer and then select a path to install it.
            

### **What do I do if a cloud computer fails to detect my USB webcam?**

#### Problem description

My cloud computer fails to detect the USB webcam that is connected to my local computer.

#### Causes

These issues may occur due to the following causes:

-   The USB redirection feature is disabled in the policy associated with the cloud computer.
    
-   The USB webcam is disconnected.
    
-   The USB webcam cable is loosely connected to the USB port, or the USB webcam cable is damaged.
    

#### **Solution**

You can perform the following steps to resolve the issue:

1.  Make sure that your administrator enables the USB redirection feature in the policy. For more information, see [Peripheral control](/help/en/wuying-workspace/user-guide/peripheral-related-rules).
    
2.  On the desktop of the cloud computer, open DesktopAssistant, click **Peripherals**. In the **Peripherals** panel, find the USB webcam and click **Connect** in the Actions column.
    
    ![panel_peripheral_camera.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9264485271/p833319.png)
    
3.  Unplug and reinsert the USB webcam cable, or use another USB cable.
    

## USB flash drive and UKey device

### **How do I use a UKey device on a cloud computer?**

UKey devices fall into the following categories: human interface devices (HIDs), MASSSTORAGE devices, and composite devices of HID and MASSSTORAGE. The following items describe how to use each of the preceding types of UKey devices:

-   **HID**
    
    By default, a device of this type uses USB redirection. When you connect such a device to your cloud computer, use the default settings.
    
    If this device is not displayed in the peripheral list on your cloud computer, the device may be included in the blacklist. In this case, you must perform the following steps to add the device to the whitelist.
    
    **Note**
    
    In the following example, a Windows client of Alibaba Cloud Workspace V6.0 is used. The actual client version that you use shall prevail.
    
    1.  On the card display page of the Windows client, click the ![个人中心logo.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1113029071/p762901.png)icon and select **Settings**.
        
    2.  In the **Settings** panel, click **Peripherals**.
        
    3.  On the **Local Peripheral** tab, find the device that you want to manage and click **Whitelist** in the **USB Redirection Blacklisting/Whitelisting** column.
        
    4.  Unplug the UKey device and plug it again. Alternatively, reconnect to the cloud computer.
        
    
-   **MASSSTORAGE** and **composite devices of HID and MASSSTORAGE**
    
    You cannot determine whether a device is a UKey device or another type of storage device from the appearance of the two types of devices. By default, these two types of devices are connected by using device redirection. However, device redirection does not take effect for UKey devices. To resolve the issue, perform the following steps:
    
    1.  On the desktop of the cloud computer, wake up DesktopAssistant, click Settings, and then click **Peripherals**.
        
    2.  In the **Peripherals** dialog box, click **Advanced Peripheral Settings**.
        
    3.  In the **Advanced Peripheral Settings** dialog box, click **Unknown Device**.
        
    4.  Find the UKey device that you want to manage and select **USB Redirection**.
        
    5.  Unplug the device and then plug it again.
        

### **What do I do if an inserted UKey device is not displayed in the peripheral list on a cloud computer?**

#### **Problem description**

The administrator has enabled the USB redirection feature for the cloud computer, but you cannot find the Ukey device from the peripheral list of the cloud computer after you plug in the device.

#### **Cause**

The device has been added to the device blacklist by default.

#### **Solution**

1.  On the card display page of the client, click the ![个人中心logo.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1113029071/p762901.png) icon and select **Settings**.
    
2.  In the **Settings** panel, click **Peripherals**.
    
3.  On the displayed page for peripherals, find the device and add the device to the whitelist.
    
4.  Unplug the UKey device and then plug it again. Alternatively, reconnect to the cloud computer.
    

### **What do I do if I cannot use a UKey device that is displayed in the peripheral list?**

The administrator has enabled the USB redirection feature for the cloud computer in the EDS console, an inserted UKey device is displayed in the peripheral list on the cloud computer, and the device is in the Normal state. However, the device does not respond to any operation. In this case, you can perform the following steps:

-   Change the redirection mode of the UKey device to **USB Redirection**
    
    1.  On the desktop of the cloud computer, wake up DesktopAssistant, click Settings, and then click **Peripherals**.
        
    2.  In the **Peripherals** dialog box, click **Advanced Peripheral Settings**.
        
    3.  In the **Advanced Peripheral Settings** dialog box, click **Unknown Device**.
        
    4.  Find the UKey device that you want to manage and select **USB Redirection**.
        
    5.  Unplug the device and then plug it again.
        
-   Install the required driver
    
    Many redirected UKey devices require the corresponding drivers before they can work as expected on cloud computers. If you cannot use a UKey device after it is connected to and displayed on a cloud computer, you must install the required driver.
    

### **What do I do if I fail to transfer files to and from a USB flash drive?**

After you insert a USB flash drive, the drive is displayed on the cloud computer. However, you cannot modify files in the drive or upload files from and download files to the drive. In this case, you must contact the administrator to modify the policy associated with the cloud computer and set the Local Disk Mapping parameter to Read/Write.

**Procedure**:

1.  On the **Policies** page, find the policy that is associated with the cloud computer and click **Change Policy** in the **Actions** column.
    
2.  In the **Change Policy** panel, click the **Basic Policy** tab.
    
3.  Set **Local Disk Mapping** to **Read/Write**.
    
4.  Reconnect to the cloud computer.
    

## Mobile phone and tablet

### **Can I connect my cloud computer to a mobile phone or tablet?**

Yes. Only Adaptive Streaming Protocol (ASP)-based cloud computers that run Windows can connect to specific models of mobile phones and tablets that run Android. However, the connection to these mobile devices is not stable. Proceed with caution. Although your cloud computer can connect to other models of Android mobile devices by using USB redirection and the status of the devices is **Available**, you cannot use the devices as expected on the cloud computer. Cloud computers can be connected to the following models of Android mobile phones and tablets:

-   Xiaomi 6 Series
    
-   Xiaomi 10 Series
    
-   MEIZU
    
-   Huawei Nova 6
    

If you want to use Android mobile phones and tablets on cloud computers, the following conditions must be met:

-   You have configured Android Debug Bridge (ADB) environment variables on your cloud computer and the on-premises device that runs the cloud computer.
    
-   The cloud computer must be able to detect these Android devices.
    

#### **Check whether ADB environment variables are configured for the on-premises device and the cloud computer**

Open Command Prompt on the on-premises device and the cloud computer and run the `adb` command.

-   If an ADB version is returned in the command output, ADB environment variables are configured.
    
-   Otherwise, ADB environment variables are not configured.
    

If you do not configure ADB environment variables, perform the following operations on the on-premises device and the cloud computer:

1.  Go to Start and search for `environment variables`. Then click **Edit the system environment variables** from the search result.
    
2.  Add the `ANDROID_HOME` variable.
    
    1.  In the **System Properties** dialog box, click the **Advanced** tab and then click **Environment Variables**.
        
    2.  In the **Environment Variables** dialog box, click **New** in the lower part of the **System variables** section.
        
    3.  In the **New System Variable** dialog box, specify the variable name and variable value and click **OK**.
        
        The variable name is `ANDROID_HOME`, and the variable value is the path to adb.exe, such as `D:\platform-tools`.
        
3.  Modify the `Path` variable.
    
    1.  In the **System variables** section of the **Environment Variables** dialog box, select the `Path` variable and click **Edit**.
        
    2.  In the **Edit environment variable** dialog box, click **New**, enter `%ANDROID_HOME%` in the blank row, and then click **OK**.
        

#### **Check whether the cloud computer can recognize an Android device**

After you connect an Android device to the on-premises device, open Command Prompt and run the `adb devices` command.

-   If only the `List of device attached` message is returned in the command output and no other information is appended to the message, the cloud computer cannot recognize the Android device.
    
-   If a serial number is appended to the message, the cloud computer detects the Android device.
    

### **What do I do if an on-premises device can detect an ADB device but my cloud computer cannot detect it?**

#### **Problem description**

What do I do if an on-premises device can detect an ADB device but my cloud computer cannot detect it?

#### **Cause**

You have not configured ADB environment variables on the cloud computer.

#### **Solution**

Perform the following steps on the cloud computer to configure environment variables:

1.  Go to Start and search for `environment variables`. Then click **Edit the system environment variables** from the search result.
    
2.  Add the `ANDROID_HOME` variable.
    
    1.  In the **System Properties** dialog box, click the **Advanced** tab and then click **Environment Variables**.
        
    2.  In the **Environment Variables** dialog box, click **New** in the lower part of the **System variables** section.
        
    3.  In the **New System Variable** dialog box, specify the variable name and variable value and click **OK**.
        
        The variable name is `ANDROID_HOME`, and the variable value is the path to adb.exe, such as `D:\platform-tools`.
        
3.  Modify the `Path` variable.
    
    1.  In the **System variables** section of the **Environment Variables** dialog box, select the `Path` variable and click **Edit**.
        
    2.  In the **Edit environment variable** dialog box, click **New**, enter `%ANDROID_HOME%` in the blank row, and then click **OK**.
        
4.  Optional. Verify that the environment variables are added. Open Command Prompt on the cloud computer and run the `adb` command. If an ADB version number is returned in the command output, the environment variables are added.
    

### **What do I do if the mouse pointer is not displayed or the mouse does not operate as expected when I connect to my cloud computer from an iPad?**

#### **Problem description**

-   Mouse pointer display: The mouse pointer on the cloud computer overlaps the iPadOS pointer, which shows up as a translucent gray circle.
    
-   Excel operations:
    
    -   Multiple columns cannot be selected simultaneously by using the mouse.
        
    -   After a single column is selected, cells in the column can only be selected by double-clicking, not by a single left-click.
        

#### **Cause**

The Perform Touch Gestures feature has been turned on in the iPad settings. As a result, the iPadOS pointer cannot be hidden in the cloud computer, and the two mouse pointers may overlap. Also, mouse operations are treated as click actions, thus causing operation issues in Excel and other applications.

#### **Solution**

Perform the following steps to turn off Perform Touch Gestures:

1.  Open **Settings** on your iPad.
    
2.  Choose **Accessibility** > **Touch** > **AssistiveTouch**, and turn off **Perform Touch Gestures**.
