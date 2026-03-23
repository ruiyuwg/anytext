In Elastic Desktop Service (EDS), cloud computer policies contain rules to manage user experience, security, audits, peripherals, collaboration, and AI assistance for cloud computers. This topic describes audit-related rules.

## **Background information**

### **Scenarios**

You may need to audit operations that are performed on cloud computers to meet security audit requirements of your enterprise. The rules rely on the screen recording audit feature that is in public preview. You can record the operations performed by end users on cloud computers, and then play back the recording files for auditing anytime.

### **Applicable scope**

The screen recording audit feature applies to cloud computers that only meet the following conditions:

-   Use the Adaptive Streaming Protocol (ASP). For more information, see [Adaptive Streaming Protocol (ASP)](/help/en/wuying-workspace/product-overview/asp).
    
-   Run Windows or Linux.
    
-   Use system images whose versions are V0.1.0 or later, or custom images that are created based on the system images.
    

### **Billing**

-   This feature is a valued-added feature and is in public preview. You can use the feature free of charge during the public preview. After the public preview ends, you are charged for using the feature. An announcement that includes the billing rules will be released in advance.
    
-   Screen recording files are stored in an Object Storage Service (OSS) bucket that is automatically created for you. You are charged for using the bucket. For information about the billing of OSS, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).
    

### **Usage notes**

**Important**

Screen recording might capture private data of end users. Make sure that related permissions are obtained from the end users.

## Prerequisites

Screen recording files are stored in OSS buckets in the region where cloud computers are created. If end users use VPN software on cloud computers, make sure that `*.aliyuncs.com` is added to the whitelist. This prevents failures of uploading screen recording files to the buckets.

## Configuration description

In the **Screen Recording Audit** section, turn on **Screen Recording Audit**, read the **Usage Notes on Screen Recording Audit**, click **I have read and agree to enable the feature**, and then configure the following parameters.

**Note**

Screen recording audit supports using **two screens** at the same time. It records all user activities on both screens.

**Parameter**

**Description**

**Type**

Select a screen recording type. Valid values:

-   **Whole-process**: A recording immediately starts when end users connect to cloud computers and ends when the end users disconnect from the cloud computers.
    
-   **Interval-based**: A recording starts and ends within a specific period of time when end users connect to cloud computers. If the end users disconnect from the cloud computers before the specified period of time for recording is reached, the recording ends. If you select this option, you must also configure the **Interval** parameter.
    
-   **Operation-triggered**: A recording is triggered when the system detects specific operations in the following conditions. If you select this option, you must also configure the **Operation-triggered** parameter. Valid values:
    
    -   **File Upload/Download-triggered**: The recording starts when end users download or upload files between cloud computers and local computers.
        
    -   **Command-triggered**: The recording starts when end users enter commands by using input devices such as keyboards, mouses, or tablets.
        
    
    **Note**
    
    After you specify operations that can trigger screen recording, the system starts screen recording when specified operations are detected. When the system does not detect the specified operations, the recording ends 10 minutes later. If the system no longer detects the specified operations within the 10 minutes, the screen recording ends when the 10 minutes elapse. If the system detects the specified operations within the 10 minutes, the time of the recording is extended by another 10 minutes.
    
-   **Session Lifecycle Listening**: A recording starts when a session is created and ends when the session is closed. We recommend that you select this option for robotic process automation (RPA) scenarios.
    
    **Note**
    
    If you select Whole-process, a recording ends when an end user disconnects from a cloud computer. If you select Session Lifecycle Listening, a recording ends when a session of a cloud computer is closed. To close the session, the end user must stop the cloud computer, or the specified keep-active duration is reached after the end user disconnects from the cloud computer.
    

**Audio**

Specifies whether to record audio generated on cloud computers during screen recording. Valid values: **Video** and **Video and Audio**.

**Frame Rate**

The frame rate. Valid values: 2 fps, 5 fps, 10 fps, and 15 fps.

Larger frame rates ensure smoother recording but require more storage space. You can specify a frame rate based on your business requirements and storage space.

**File Length**

The length of a recording file. Valid values: 10 minutes, 20 minutes, 30 minutes, and 60 minutes. The screen recording files are automatically split and uploaded to an OSS bucket based on the specified length. If the file size reaches 300 MB but the specified length is not reached, EDS preferentially uploads the first 300 MB data.

**Save To**

The location to which a recording file is stored. By default, screen recording files of a cloud computer are stored in an OSS bucket that is in the same region as the cloud computer. You are charged for using OSS buckets to store the files. For more information, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).

**Important**

If end users use VPN software on cloud computers, make sure that `*.aliyuncs.com` is added to the whitelist to prevent failures of uploading screen recording files to the buckets.

After screen recording is complete, you can view or download the screen recording files in the console. For more information, see [Play back or download screen recordings](/help/en/wuying-workspace/user-guide/play-back-or-download-screen-recordings#task-2206912).

**Retention Period**

By default, screen recording files are retained in an OSS bucket for 15 days. Valid values: 1 to 180. Unit: day.

**Warning**

The system stores screen recording files in OSS buckets for a period of time. When the period of time elapses, the files are permanently deleted from the buckets and the **Screen Recordings** page in the EDS console.

## FAQ

### I created a cloud computer and associated a policy with the cloud computer. In the policy, the screen recording audit feature is enabled. However, the system prompts that the image version of the cloud computer is outdated. What do I do?

To use the screen recording audit feature, the cloud computer must meet the following conditions:

-   Use the Adaptive Streaming Protocol (ASP). For more information, see [Adaptive Streaming Protocol (ASP)](/help/en/wuying-workspace/product-overview/asp).
    
-   Run Windows or Linux.
    
-   Use system images whose versions are V0.1.0 or later, or custom images that are created based on the system images.
    

If the system prompts that the image version of the cloud computer is outdated, you must change the image of the cloud computer. For more information, see [Change the image of a cloud computer or cloud computer pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools#task-2074648).

### Does EDS automatically delete screen recording files that are stored in OSS buckets?

-   Screen recording files are stored in OSS buckets based on the period of time that you specified when you enabled the screen recording audit feature. EDS automatically deletes the screen recordings when the retention period elapses.
    
-   If you delete a policy in which the screen recording audit feature is enabled, EDS retains the screen recording files of all cloud computers with which the policy is associated until the retention period elapses. Then, the system deletes the screen recording files.
    

## References

-   [Policy overview](/help/en/wuying-workspace/user-guide/cloud-computer-policy-overview)
    
-   [Create and manage cloud computer policies](/help/en/wuying-workspace/user-guide/create-and-manage-cloud-computer-policies)
    
-   [FAQ about policies](/help/en/wuying-workspace/user-guide/policy-faq)
