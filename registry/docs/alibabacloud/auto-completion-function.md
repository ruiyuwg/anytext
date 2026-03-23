Alibaba Cloud CLI provides the automatic code completion feature that is compatible with zsh and bash. When you use Alibaba Cloud CLI, you can manually enable the automatic code completion feature to improve the efficiency of code writing. No additional configuration is required in Linux or macOS. The automatic code completion feature is not supported in Windows.

## **Enable or disable the automatic code completion feature**

You can run the following commands to enable or disable the automatic code completion feature. Only zsh and bash are supported.

-   Run the following command to enable the automatic code completion feature
    
    ```
    aliyun auto-completion
    ```
    
-   Run the following command to disable the automatic code completion feature
    
    ```
    aliyun auto-completion --uninstall
    ```
    

## **Examples**

When you enter part of a command or a parameter in Alibaba Cloud CLI, the automatic code completion feature automatically completes the partially typed command or parameter, or displays a list of recommended commands or parameters. The following examples show the usage of the automatic code completion feature in different scenarios.

### **Example 1: Display a list of recommended commands**

1.  Enter the first letter of the command to be completed and press the `**_Tab_**` key. In this example, the first letter is C.
    
    ```
    aliyun ecs C
    ```
    
2.  The system displays a list of available commands that start with `C`.
    
    ```
    CancelAutoSnapshotPolicy          CopyImage                         CreateDemand                      
    CreateHpcCluster                  CreateNatGateway                  CreateSimulatedSystemEvents
    CancelCopyImage                   CopySnapshot                      CreateDeploymentSet               
    CreateImage                       CreateNetworkInterface            CreateSnapshot
    ```
    

### **Example 2: Display a list of recommended parameters**

1.  Enter the first letter of the parameter to be completed and press the `**_Tab_**` key. In this example, the first letter is D.
    
    ```
    aliyun ecs CreateImage --D
    ```
    
2.  The system displays a list of parameters that start with `D` and are available for the command.
    
    ```
    --Description                     --DiskDeviceMapping.1.SnapshotId
    --DetectionStrategy
    --DiskDeviceMapping.1.Device
    --DiskDeviceMapping.1.Size
    ```
