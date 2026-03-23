Cloud Shell uses temporary storage for the `$HOME` directory, which means your files are lost when the instance is released. To save your files and configurations permanently, you can mount a [File Storage NAS (NAS)](/help/en/nas/product-overview/what-is-nas) file system to serve as your persistent `$HOME` directory.

## **Prerequisites**

-   Cloud Shell creates a pay-as-you-go NAS file system of the Performance class for persistent storage. You are charged for using this file system. For more information, see [NAS billing overview](/help/en/nas/product-overview/overview-1).
    
-   To ensure security, we recommend logging on to the console and using Cloud Shell as a RAM identity (RAM user or RAM role) instead of the Alibaba Cloud account. The RAM identity must have the necessary permissions to manage the resources you intend to work with. For more information, see [RAM-based access control](/help/en/nas/security-and-compliance/use-ram-for-access-control/).
    

## **Procedure**

Follow these steps to mount or unmount a NAS file system for persistent storage in your Cloud Shell environment.

### Mount a NAS file system

1.  In the toolbar, choose the **storage icon** > **Mount File Storage**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8765926271/p836996.png)
    
2.  In the dialog box, click **Create Now**. Cloud Shell then creates and mounts a new NAS file system. The initial setup might take a few minutes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8765926271/p836997.png)
    
3.  After the mount is complete, your Cloud Shell session restarts automatically. This process can take up to 30 seconds.
    
4.  Once your session restarts, persistent storage is active. To view the ID of the mounted NAS file system, choose the **storage icon** > **Mount File Storage** in the toolbar. The menu displays the file system ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8765926271/p837613.png)
    
5.  Click the file system ID to open the NAS console and view the file system's details.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8765926271/p837641.png)
    

### Unmount a NAS file system

1.  In the toolbar, choose the **storage icon** > **Unmount File Storage**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8765926271/p837005.png)
    
2.  In the confirmation dialog box, click **Unmount Now** to unmount the file system from Cloud Shell.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8765926271/p837008.png)
    
    **Note**
    
    -   Unmounting the file system does not delete it. You will continue to be charged for the NAS file system until you manually delete it in the NAS console. Deleting a file system permanently removes all its data. For more information, see [Release a NAS file system](/help/en/nas/release-a-nas-file-system#task-2263439).
        
    -   If you unmount but do not delete the file system, Cloud Shell remounts the same file system the next time you mount storage.
        
    
3.  After the unmount is complete, your Cloud Shell session restarts automatically. This process can take up to 30 seconds.
    
4.  After the session restarts, your `$HOME` directory reverts to using temporary storage. Files in the temporary storage are deleted when the session ends.
    

## **References**

-   [Upload or download files](/help/en/cloud-shell/user-guide/upload-and-download-files)
    
-   [Visual code editor of Cloud Shell](/help/en/cloud-shell/user-guide/visual-code-editor)
