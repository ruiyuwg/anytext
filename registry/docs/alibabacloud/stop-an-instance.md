You can stop Elastic Compute Service (ECS) instances in standard mode or economical mode.

**Important**

If you stop an instance, services that are running on the instance are interrupted. Proceed with caution when you perform this operation.

## Considerations

-   Spot Instances: After you stop a spot instance, you cannot restart the instance if resources are insufficient or your bid price is lower than the market price. In this case, the spot instance is reclaimed. For more information, see [Overview](/help/en/ecs/user-guide/what-is-a-spot-instance).
    
-   Subscription instances: After you stop a subscription instance, the billing of the instance continues, and the expiration time of the instance is not affected.
    
-   Pay-as-you-go instances: After you stop a pay-as-you-go instance, the billing of the instance continues until you release the instance. For more information, see [Release an instance](/help/en/ecs/user-guide/release-an-instance#concept-jfp-wbf-5db).
    

## **Stop an instance in the ECS console**

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the ECS instance that you want to stop to go to the instance details page. In the upper-right corner of the page, click **All Actions**. In the pane that appears, search for and click **Stop**.
    
4.  Configure the **Stopped By** or **Stop Mode** parameter and click **Confirm**.
    

**Parameter**

**Description**

Stopped By

-   **Stop**: stops the instance by properly shutting down the instance.
    
-   **Force Stop**: forcefully stops the instance. This is equivalent to a power-off and may cause data loss if the operating system has not yet written data to the disks.
    

Stop Mode

**Important**

Only pay-as-you-go instances that reside in virtual private clouds (VPCs) support this parameter.

-   **Standard Mode**: The resources of the instance are retained and continue to be billed after you stop the instance.
    
-   **Economical Mode (Formerly Known as No Fees for Stopped Instances)**: After you stop the instance, the following events occur:
    
    -   Billing for the following resources of the instance stops: computing resources (vCPUs and memory), images, and public bandwidth of the static public IP address (if any) that uses the pay-by-bandwidth metering method.
        
    -   Billing for the following resources of the instance continues: system disk, data disks, and public bandwidth of the elastic IP address (EIP) (if any) that uses the pay-by-bandwidth metering method.
        
    -   The vCPUs, memory, and public IP address are released. The private IP address is retained. When you restart the instance, it may fail to start or its public IP address may change.
        
        **Important**
        
        -   **Restart failure risk**: Since the vCPU and memory are released when an instance is stopped in Economical Mode, the instance may fail to restart due to insufficient inventory or overdue payments. If the instance fails to restart due to insufficient inventory, try again later or change the instance type. If it fails to restart due to overdue payments, add funds to your account. For more information, see the [Risks](/help/en/ecs/user-guide/economical-mode#section-y82-e8u-176) section of the "Economical mode" topic and [Overdue payments](/help/en/ecs/overdue-payments#376b46703cv6w).
            
        -   **Public IP address change risk**: If an instance is assigned a public IP address, the address is released when you stop the instance in Economical Mode. When you restart the instance, a new public IP address is assigned to it, which may be different from the original one.
            
        

When the instance is stopped, the instance enters the **Stopped** state.

## **Stop instances by calling API operations**

You can stop one or more ECS instances by calling the following API operations. For information about how to call API operations, see [Integration overview](/help/en/ecs/developer-reference/integration-overview).

-   [StopInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-stopinstance): stops an ECS instance that is in the Running state.
    
-   [StopInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-stopinstances): stops one or more ECS instances that are in the Running state.
    

## **FAQ**

### **What do I do if an ECS instance remains in the Stopping state for an extended period of time?**

If your ECS instance remains in the **Stopping** state for an extended period of time, the instance may be in a normal or abnormal stop process. Check the stop progress of the operating system and resolve the preceding issue based on the stop status of the operating system.

-   Normal stop: The ECS instance is being stopped as expected, and the stop process is relatively long because the operating system is installing system patches or the low operating system specifications cause the delayed stop response.
    
    > A normal stop operation first releases internal system processes. If an instance encounters an operating system exception or its internal processes cannot be released, the instance remains in the **Stopping** state. After approximately 10 to 20 minutes, a forced restart is automatically triggered to recover the instance.
    
-   Abnormal stop: An instance stop exception occurs. For example, the stop process does not start because an error occurs in the operating system when you stop the instance.
    

**Solution:**

1.  View the screenshots of the ECS instance to obtain the stop progress of the operating system.
    
    For more information, see [View system logs and screenshots](/help/en/ecs/user-guide/view-system-logs-and-screenshots).
    
2.  If you cannot identify the issue, connect to the instance by using Virtual Network Computing (VNC) and view the stop progress of the operating system.
    
    For more information, see [Connect to an instance using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
3.  Select a handling method based on the stop status of the operating system.
    
    -   Normal stop: Wait for the operating system stop process to complete.
        
    -   Abnormal stop: If an exception occurs, connect to the instance by using VNC and manually handle the stop issue.
        
    
    You can also forcefully stop an instance as described in this topic based on your business requirements.
    
    **Important**
    
    A **force stop** operation is equivalent to a physical shutdown and may cause data loss if instance data is not written to disks.
