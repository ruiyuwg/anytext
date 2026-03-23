Server Migration Center (SMC) allows you to migrate incremental data from a VMware VM to Alibaba Cloud. You can specify the time interval between incremental migration operations. Incremental migration reduces the VM downtime and the total duration of cutover. This topic describes how to migrate incremental data from a VMware VM without an agent.

## **Limits**

When you create an incremental migration job, you must set the Destination Type parameter to ECS Image.

## **Procedure**

## Step 1: Enable CBT

In this topic, vCenter 6.7 is used. Perform the following steps to enable Changed Block Tracking (CBT). To migrate incremental data from a VMware VM, you must enable CBT for the VM. If you disable CBT, full data is migrated from the VMware VM. If CBT is already enabled, skip this step.

**Warning**

Before you enable CBT, make sure that no snapshots are generated for the VMware VM. Otherwise, the incremental data migrated by using CBT may be incorrect. If you delete the snapshots of the VMware VM when you enable CBT, execute the ./disk/migrate\_configure file in the /root/smc directory, which is the home directory of the SMC client. This way, you can reobtain the configuration information about the VMware VM.

To enable CBT, make sure that the following conditions are met:

-   The version of the ESXi host is ESXi 4.0 or later.
    
-   The VM hardware version is 7 or later.
    
-   The I/O operations of the VMware VM must be performed in the ESXi storage.
    
-   The VMware VM supports Raw Device Mapping (RDM) and Virtual Machine File System (VMFS) in virtual compatibility mode and Network File System (NFS).
    
-   The VMware VM does not use independent persistent or nonpersistent disks to store data.
    

1.  Log on to vCenter Server.
    
2.  Right-click the VMware VM that has been powered off and select **Edit Settings**.![ada](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6695102761/p525422.png)
    
3.  On the **Edit Settings** page, click the **VM Options** tab.![adad5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6695102761/p525425.png)
    
4.  Click **Advanced** and then click **EDIT CONFIGURATION...** next to **Configuration Parameters**.![ada5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6695102761/p525428.png)
    
5.  On the **Configuration Parameters** page, click **ADD CONFIGURATION PARAMS** and add the parameters that are described in the following table.![adaaaaaa56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6695102761/p525431.png)
    
    **Name**
    
    **Value**
    
    **Description**
    
    ctkEnabled
    
    TRUE
    
    Specifies whether to use CTK files.
    
    scsi0:0.ctkEnabled
    
    TRUE
    
    Specifies whether to allow the use of CTK files for the hard disk whose small computer systems interface (SCSI) ID is 0:0.
    
    scsi0:1.ctkEnabled
    
    TRUE
    
    Specifies whether to allow the use of CTK files for the hard disk whose SCSI ID is 0:1.
    
    In the scsix:x.ctkEnabled parameter, x:x indicates the SCSI ID. Replace x:x with an SCSI ID based on your business requirements. In this topic, hard disks whose SCSI IDs are 0:0 and 0:1 are used. To query the SCSI IDs of hard disks in the VM, go to the **Virtual Hardware** tab of the **Edit Settings** page.![adda](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6695102761/p527029.png)
    
6.  Click **OK**. Then, right-click the VMware VM and choose **Power** > **Power On** to power on the VMware VM.
    
    If CBT is enabled, a xx-ctk.vmdk file is added to each virtual disk and snapshot disk.![adad5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6695102761/p525433.png)
    

## Step 2: Perform the full migration

1.  After you import the information about a migration source in the SMC console, perform the following steps to create and start an incremental migration job. You do not need to stop your services that are running on the VM. For more information, see [Migrate VMware VMs without agents](/help/en/smc/user-guide/migrate-vmware-vms-without-agents).
    
    When you perform the migration configuration, turn on **Automatic Incremental Synchronization**. Configure the following parameters related to automatic incremental migration:
    
    -   **Automatic Incremental Synchronization**: specifies whether to enable automatic incremental migration. Turn on this switch.
        
    -   **Synchronization Interval**: the time interval between two consecutive incremental migration operations. For example, if **Synchronization Interval** is set to 1 hour, the next incremental synchronization will start 1 hour after the completion of the current incremental synchronization. You can specify a time interval in the range of one hour to seven days.
        
    -   **Maximum Reserved Images**: the maximum number of images that can be retained during incremental migration. Valid values: 1 to 10. An image is generated for each incremental migration operation. If the total number of images exceeds the upper limit, the earliest unused image is deleted.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p819600.png)
    
2.  View the migration results.
    
    If the migration progress is 100%, the first full migration is completed and a full image is generated. Each time the migration is completed, the real-time status of the migration is **Waiting** to wait for the arrival of the next frequency cycle and continue to migrate incremental data
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p821166.png)
    
    **Note**
    
    You can perform the following operations based on your business requirements:
    
    -   Verify the migration result: You can click **![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229177951/p63650.png)** > **Create an instance** in the **Actions** column of the migration source, and use this image to create an Elastic Compute Service (ECS) instance for verification.
        
    -   Modify the synchronization interval: You can click **![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229177951/p63650.png)** > **Automatic Incremental Synchronization** in the **Actions** column of the migration source to modify the synchronization interval as prompted. The modification will take effect after the next incremental synchronization ends, not immediately.
        
    -   Stop the migration task: You can click **![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229177951/p63650.png)** > **Pause Migration Job** in the **Actions** column of the migration source to stop the migration task as prompted.
        
    -   Cancel the incremental migration task: You can click **![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3229177951/p63650.png)** > **Cancel Migration** in the **Actions** column of the migration source to cancel the incremental migration task as prompted.
        
    

## Step 3: Stop the services on the VMware VM and run the incremental migration job again

To ensure that all data can be migrated to Alibaba Cloud, stop the services on the VMware VM and run the incremental migration job during off-peak hours.

In the SMC console, manually run the incremental migration job or wait for the job to automatically run.

**Note**

-   The image generated for each incremental migration operation is a full image of the source server at a specific point in time. The image contains the incremental data at the point in time of migration and all earlier migrated data.
    
-   After automatic incremental synchronization or manual incremental synchronization starts, **data comparison** is performed firstly. The data comparison speed is related to the disk I/O capacity and is not limited to the network bandwidth. Therefore, the comparison time is affected by the disk I/O capacity and the amount of disk data. After the data comparison is completed, the incremental data is transmitted, and the time spent in the incremental data transmission phase is affected by the incremental data size and network bandwidth. For more information, see [Estimate the time required for migration and test the data transfer speed](/help/en/smc/use-cases/estimate-the-time-required-for-migration-and-test-the-data-transfer-speed).
    

1.  Log on to the source server and stop the services on the source server.
    
2.  In the SMC console, manually run the incremental migration job or wait for the job to automatically run.
    
    **Note**
    
    SMC automatically runs the incremental migration job based on the value of the **Synchronization Interval** parameter.
    

### Step 4: Complete incremental synchronization

After the last incremental migration operation is complete, perform the following steps to complete incremental migration.

1.  On the OS Migration page, find the migration job that you want to manage and click **Complete Incremental Synchronization** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p819039.png)
    
2.  In the **Run Incremental Job** dialog box, click **OK**.
    
    You can also select **Perform One Last Synchronization** in the **Run Incremental Job** dialog box to perform the last incremental migration operation.![add56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0547762861/p625447.png)
    
3.  On the **Migration Jobs** page, view the status of the created job.
    
    The amount of time required for data transmission is subject to factors such as the data size of the migration source and network bandwidth. Wait until the migration job is complete.
    

## Verify the migration result

-   If the migration job enters the **Completed** state, the migration is successful.
    
    After the migration is complete, an Alibaba Cloud custom image is generated. You can use your pointer to slide the scrollbar at the bottom to the right and click **View Report** in the **Migration Deliverables** column to view the check result of the image. For more information, see [View the image check results](/help/en/smc/user-guide/configure-image-check#1f7c2030ebra4) step of the "Configure image check" topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4840613371/p810468.png)
    
    ### **(Recommended) Manually verify the migration result**
    
    You can click **Create Instance** in the **Actions** column to go to the ECS instance creation page in the ECS console. The custom ECS image created by the migration job is selected by default for you to create an ECS instance. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
    
    ### **Use the automatic migration result verification feature**
    
    **Note**
    
    To use this feature, you must install the Cloud Assistant Agent in your instance, and the system version of the instance must support this feature. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    
    This feature uses the `ACS-SMC-CreateAndVerifyInstance` template provided by Alibaba Cloud CloudOps Orchestration Service (OOS) to automatically verify whether the image generated by the migration job can be used to create an ECS instance and whether the ECS instance can start as expected.
    
    1.  Click **Verify Migration Result** in the **Actions** column.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p817392.png)
        
    2.  In the dialog box that appears, read the instructions on the verification process and click **Verify Now**.
        
        You can also click **Customize Verification Parameters** to configure the parameters.
        
    3.  In the **Verify Migration Result** column, view the verification result. Valid values:
        
        -   **Verified**: indicates that the migration is successful. You can click **Details** to check the verification result.
            
        -   **Not Verified**: indicates that the migration failed. You can click **View Cause** to troubleshoot the failure.
            
        
        You can also click the ![...](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714973061/p169257.png) icon in the Actions column and select **View Verification Records in OOS Console** to view the template history.
        
    
    After the server is migrated, you must perform the following operations to ensure normal operation of your business:
    
    -   Verify the integrity and correctness of the data. For more information, see the [How do I check my system after I migrate a Linux server?](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check my system after I migrate a Windows server?](/help/en/smc/support/faq#section-thf-9yp-xf8) section of the "FAQ" topic.
        
    -   Manually start the applications and services after the migration if automatic start is not enabled for the applications and services on the source server.
        
    -   The IP address changes after the migration job is complete. If the service involves the configuration of the IP address, modify the domain name resolution and ICP filing after the migration.
        
        -   If a domain name has been bound to the source server, the public IP address of the server is changed after the migration. In this case, you must resolve the domain name to the new public IP address of the server. For more information, see [Add website resolution](/help/en/dns/add-an-a-record-to-a-website-domain).
            
        -   If you want to keep the private IP address unchanged, you can modify the private IP address after the migration is complete.
            
            -   Migrate a server to an **ECS Image**: Modify the private IP address when creating an ECS instance. For more information, see [Specify the primary private IPv4 address when creating an ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#e3c6288083hpl).
                
            -   Migrate a server to a **Destination Instance**: If you have not modified the IPv4 private network address in the advanced configuration of the [Migration Settings](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance#48ee7a1a54pq6) step, you can also modify the IPv4 private network address after migration. For more information, see [Change the primary private IPv4 address for an existing ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
                
    
-   The migration test failed if the migration job enters the **Drill Exception** state.
    
    In this case, you need to check the test report, fix the test items that are in the **Critical** state, and then perform a test again. For more information, see [Configure a migration test](/help/en/smc/user-guide/configuration-migration-walkthrough).
    
-   If **Error** is displayed in the **Real-time Migration Status** column, the migration failed.
    
    In this case, you need to perform the following operations:
    
    1.  Click **Troubleshoot Errors** in the **Actions** column and fix issues based on the error code and description. For more information, see [FAQ about Server Migration Center (SMC)](/help/en/smc/support/faq#concept-610474) and [Errors occurred during a server migration](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  After the issues are fixed, click **Retry Migration** in the **Actions** column of the migration job.
        
        The migration job resumes from the point where it was suspended.
        
        **Important**
        
        If the intermediate instance is released, you must create another migration job. For more information, see the [What do I do if I release an intermediate instance by accident?](/help/en/smc/support/faq#section-1nu-xd1-bip) section of the "FAQ" topic.
        
    

## Clear resources

During the migration, SMC creates a temporary pay-as-you-go intermediate instance named `No_Delete_SMC_Transition_Instance` within the destination Alibaba Cloud account. The method to clear resources depends on whether the migration is successful.

-   If the migration is successful, the intermediate instance is automatically released. No manual operation is required.
    
-   If the migration failed, the intermediate instance is not automatically released and incurs fees as long as the migration job exists. You can release the intermediate instance in one of the following ways to reduce costs:
    
    -   If you no longer need the migration job, click the ID the migration job. On the job details page, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1414911271/p810498.png)** > **Clear migration task** in the **Actions** column in the Migration Jobs section to delete the migration job and release the intermediate instance at a time.
        
    -   Manually release the intermediate instance. For more information, see [Release an instance](/help/en/ecs/user-guide/release-an-instance).
