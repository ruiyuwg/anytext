This topic describes how to unmount a Network File System (NFS) file system in the File Storage NAS (NAS) console.

## Prerequisites

-   A NAS file system is created. For more information, see [Create a file system](/help/en/nas/user-guide/create-a-file-system).
    
-   A mount target is created. For more information, see [Manage mount targets](/help/en/nas/user-guide/manage-mount-targets).
    
-   The NAS file system is mounted. For more information, see [Scenarios](/help/en/nas/user-guide/usage-notes#section-ygl-mdt-hbd).
    

## Limits

-   File system
    
    Only NFS file systems are supported.
    
-   Operating system
    
    Only Linux operating systems are supported.
    

## **On the File System List page**

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System > File System List**.
    
3.  In the top navigation bar, select a region.
    
4.  On the File System List page, find the file system and choose **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2924611071/p707751.png) > Unmount** in the Actions column.
    
5.  In the **Unmount** panel, unmount the file system.
    
    1.  Select the mount target of the file system and click **Next**.
        
    2.  Select the ECS instance from which you want to unmount the file system and click **Next**.
        
    3.  Select the unmount directory and click **Unmount**.
        

## **On the Mount Targets tab**

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System > File System List**.
    
3.  In the top navigation bar, select a region.
    
4.  On the File System List page, click the file system to go to the details page.
    
5.  In the left-side navigation pane, click **Mount Targets**.
    
6.  In the Mount Target section, click **Unmount** in the **Actions** column.
    
7.  In the **Unmount** panel, unmount the file system.
    
    1.  Select the ECS instance from which you want to unmount the file system. Click **Next**.
        
    2.  Select the unmount directory and click **Unmount**.
