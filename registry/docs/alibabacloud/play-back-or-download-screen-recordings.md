Elastic Desktop Service (EDS) provides the screen recording audit feature. Once an administrator enables the feature for a cloud computer, the system automatically records the operations of an end user when the end user uses the cloud computer. The feature allows administrators to audit the behavior of end users on cloud computers for security purposes. This topic describes how to view or download a screen recording file.

## Background information

After end users connect to cloud computers, whether the operations performed on the cloud computers are automatically recorded relies on the policies associated with the cloud computers. For more information, see [Audit-related rules](/help/en/wuying-workspace/user-guide/audit-related-rules#task-2221326).

If the screen recording audit feature is enabled in policies associated with cloud computers and the images of the cloud computers support screen recording, the system automatically records the operations performed by end users upon their connections. The system starts screen recording based on the recording type configured in the policies, and constantly uploads the recording files to Object Storage Service (OSS) buckets.

Before you play back or download a screen recording file, take note of the following items:

-   Make sure that you have the permissions to enable the screen recording audit feature as a Resource Access Management (RAM) user. For more information, see [Attach an EDS system policy to a RAM user](/help/en/wuying-workspace/user-guide/grant-a-ram-user#task-2090313).
    
-   Screen recording files belong to the cloud computers for which the screen recording audit feature is enabled.
    
-   When the system uploads screen recording files, each file is 32 MB in size. If a screen recording file is larger than the specified size, the file is split into small files. If the screen recording file is smaller than the specified size, the screen recording continues until cloud computers are disconnected.
    

## Procedure

After the system stops recording operations of an end user on a cloud computer, the screen recording files are uploaded to an OSS bucket. To play back or download screen recording files of a cloud computer, perform the following operations:

1.  Log on to the [EDS console](https://eds.console.alibabacloud.com/).
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  Click one of the following tabs to proceed based on the screen recording scope.
    
    #### **Cloud computer**
    
    1.  In the left-side navigation pane, choose **Resources & Terminals** > **Cloud Computers**.
        
    2.  On the **Cloud Computers** page, find the cloud computer that you want to manage, click the ⋮ icon in the **Actions** column, and then choose **Play Back**.
        
    
    #### **Cloud computer pool**
    
    1.  In the left-side navigation pane, choose **Resources & Terminals** > **Cloud Computer Pools**.
        
    2.  On the **Cloud Computer Pools** page, find the cloud computer pool that you want to manage and click its ID.
        
    3.  Click the **Cloud Computer Information** tab, find the cloud computer that you want to manage, click the ⋮ icon in the **Actions** column, and then choose **Play Back**.
        
    
    #### **All screen recording files**
    
    1.  In the left-side navigation pane, choose **Audits** > **Screen Recordings**.
        
    2.  You can filter desired screen recording files by cloud computer ID, username, or time.
        
    
4.  Click **Play Back** or **Download**.
    
    **Note**
    
    If you click Play Back, you are redirected to a new page. You can play back the screen recording file on the new page. Common features, such as the draggable progress bar, full-screen mode, picture-in-picture (PiP) mode, and playback speed control are supported.
    

## FAQ

### **What do I do if I cannot find the screen recording files of a cloud computer for which the screen recording audit feature is enabled?**

To troubleshoot this issue, perform the following operations:

-   Check whether the cloud computer meets the following conditions:
    
    -   Use the Adaptive Streaming Protocol (ASP). For more information, see [Adaptive Streaming Protocol (ASP)](/help/en/wuying-workspace/product-overview/asp).
        
    -   Run Windows or Linux (Linux Ubuntu 20.04).
        
    -   Use system images whose versions are V0.1.0 or later, or custom images that are created based on the system images.
        
-   Check whether an end user is connected to or is using the cloud computer.
    

### **Can the system automatically delete screen recording files that are stored in OSS buckets?**

-   Screen recording files are stored in OSS buckets based on the retention period configured when you enabled the screen recording audit feature. The system automatically deletes the screen recording files when the retention period elapses.
    
-   Even if you disassociate the policy in which the screen recording audit feature is enabled from a cloud computer and delete the policy, the system retains the screen recording files of all associated cloud computers until the specified retention period elapses. The retention period of the screen recording files is still valid based on the configurations of the deleted policy. When the retention period elapses, the system automatically deletes the files.
