After you upgrade or convert an Elastic Compute Service (ECS) instance's operating system, such as from Ubuntu 20 to Ubuntu 22 or CentOS 7 to RHEL 7, the **Operating System** value that you selected when you created the instance and is displayed on the instance details page of the ECS console may differ from the actual operating system of the instance. This topic describes how to calibrate the operating system of an instance in the ECS console.

**Important**

-   The operating system calibration feature is in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   You can only use this feature to calibrate the operating system of an instance to forms such as CentOS\_64, CentOS\_32, and CentOS\_arm64. You cannot use it to calibrate to a specific minor version like CentOS 7.9 or Ubuntu 22.04. After you calibrate the operating system of an instance, you cannot restore the original operating system value. Proceed with caution.
    

## **Procedure**

1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the instance that you want to manage. In the **Actions** column, choose **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8728692471/p929705.png)** > **Instance Attributes** > **Calibrate Operating System**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8728692471/p929696.png)
    
4.  In the **Calibrate Operating System** dialog box, select **Operating System Name** and click **Confirm**.
    
    **Note**
    
    If you cannot find the target operating system in the drop-down list, we recommend that you select a value from the following operating systems:
    
    -   Linux: OtherLinux\_64, OtherLinux\_32, or OtherLinux\_arm64
        
    -   Windows: OtherWindows\_x86\_64, OtherWindows\_x86\_32, or OtherWindows\_arm64
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8728692471/p929995.png)
    
5.  After the calibration is complete, view the calibration result in the **Operating System** parameter on the **Instance Details** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8728692471/p930362.png)
