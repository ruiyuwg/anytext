A virtual private cloud (VPC) mount target is an access point of a Cloud Parallel File Storage (CPFS) for Lingjun file system in a VPC. Each mount target is displayed as a domain name. If you use CPFS for Lingjun with general Platform for AI (PAI) computing resources, you must add a VPC mount target for the CPFS for Lingjun file system before you can access the file system by using the mount target.

## **Prerequisites**

A CPFS for Lingjun file system is created. For more information, see [Create a file system](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system).

## Usage notes

-   You need to add a VPC mount target only if you use CPFS for Lingjun with general computing resources. You do not need to add a VPC mount target if you use CPFS for Lingjun with Lingjun resources.
    
-   You can add VPC mount targets only for CPFS for Lingjun file systems whose versions are V2.5.0 and later.
    
-   VPC mount targets only support mounting by PAI general computing resources and ACS CPU pods. They do not support mounting and access by ECS or Elastic GPU Service (EGS) instances directly created by customers.
    
-   CPFS for Lingjun supports simultaneous mounting by both Lingjun resources and general computing resources, sharing storage performance. If you need to improve VPC mounting performance, submit a ticket to request an evaluation.
    

## **Add a VPC mount target**

1.  Log on to the [File Storage NAS (NAS) console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** > **File System List**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the file system that you want to manage and click **Add Mount Target** in the **Actions** column.
    
5.  In the **Add Mount Target** dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    VPC Network
    
    The VPC in which you want to create the mount target. If no VPC is available, create a VPC in the [VPC console](https://vpc.console.alibabacloud.com/).
    
    You must select the VPC in which the general PAI computing resources reside. Otherwise, you cannot use the mount target to access the CPFS for Lingjun file system.
    
    vSwitch
    
    The vSwitch that resides in the VPC.
    
6.  Click **OK**.
    

## View the domain name of a mount target

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** > **File System List**.
    
3.  In the top navigation bar, select a region.
    
4.  Click the ID of the file system that you want to view to go to the details page of the file system.
    
5.  In the left-side pane, click **Mount Targets**. In the **Mount Target** section, move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9560151571/p981290.png) icon in the **Mount Target** column of a mount target, and you can view the domain name of the mount target.
    

## View the clients on which a file system is mounted

You can view the IP addresses of general PAI computing resources on which a CPFS for Lingjun file system is mounted.

**Important**

You can query only the general PAI computing resources that are using CPFS for Lingjun in the last minute. Resources that have a CPFS for Lingjun file system mounted but are not using the file system may not be queried.

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **File System** > **File System List**.
    
3.  In the top navigation bar, select a region.
    
4.  Click the ID of the file system that you want to view to go to the details page of the file system.
    
5.  In the left-side bar, click **Mount Targets**. In the mount target list, click **Client List** in the **Actions** column of a mount target. In the Client List dialog box, you can view the IP addresses of the general PAI computing resources on which the CPFS for Lingjun file system is mounted.
    
    You can also click **View** to access the instance page in the ECS console to view the details of the target client.
    

## Delete a mount target

In the **Mount Target** section, find the mount target that you want to delete and click **Delete** in the Actions column.

**Warning**

-   After deleting a mount target, you cannot restore the mount target. Proceed with caution.
    
-   If you do not need a mount target to mount and access the file system, we recommend that you switch the mounted file system and then delete the mount target. Otherwise, the server may not respond to the command when you delete the mount target.
    

## What to do next

After adding a mount target, you must create a dataset in the PAI console and select this dataset when you create an AI development task. For more information, see [Create and manage datasets](/help/en/pai/user-guide/create-and-manage-datasets).
