Funcraft is discontinued. If you use Funcraft to manage Function Compute resources, we recommend that you migrate the resources to Serverless Devs for management. Serverless Devs provides more features. For example, it allows you to perform stress testing, and install dependencies. This topic describes how to migrate Function Compute resources from Funcraft to different components of Serverless Devs.

## Migration methods

The Function Compute team provides components such as the FC and ROS components based on Serverless Devs. This section describes the methods for migrating Function Compute resources from Funcraft to the FC and ROS components. You can select one of the migration methods as required. For more information about the components of Serverless Devs, see [Components](/help/en/functioncompute/fc-2-0/developer-reference/what-is-serverless-devs#section-2y7-7z9-n50).

### Migrate resources from Funcraft to the FC component of Serverless Devs

You can use one of the following methods to migrate resources:

-   Method 1: Run the conversion command (recommended)
    
    In the directory of the function managed by using Funcraft, run the following command to convert the YAML file of Funcraft into a YAML file that can be identified by Serverless Devs:
    
    ```
    s cli fc fun2s --target s.yaml
    ```
    
    After the conversion command is run, an s.yaml file is generated in the project directory.
    
    When you run the conversion command to migrate resources, specify the following parameters as needed:
    
    -   \--source: the path of the function managed by using Funcraft.
        
    -   \--target: the name of the YAML file in which the migrated function is defined. By default, the name of the file in which the migrated function is defined is s.yaml or s.yml. To customize the name of the YAML file, specify this parameter.
        
    -   \--force: forcibly overwrites the file if the specified file name already exists.
        
    -   (Required) \--region string: the region in which you want to deploy resources.
        
    
    Sample command output:
    
    ```
     fc-transform.zip file decompression completed
    [2021-09-02T10:31:28.870] [INFO ] [FC-TRANSFORM] - Using funcraft yaml: /test/demo/template.yml
    [2021-09-02T10:31:28.884] [INFO ] [FC-TRANSFORM] - Reminder serverless devs yaml path: /test/demo/s.yaml
    
    Tips for next step
    
    ======================
    * Invoke Event Function: s local invoke -t s.yaml
    * Invoke Http Function: s local start -t s.yaml
    * Deploy Resources: s deploy -t s.yaml
    
    End of method: fun2s
    ```
    
-   Method 2: Synchronize resources
    
    If your resources are deployed to Function Compute, you can run the commands for synchronizing resources to synchronize the resources. This way, you can use Serverless Devs to manage projects. For more information about how to synchronize resources, see [Sync commands](https://github.com/devsapp/fc/blob/main/docs/en/command/sync.md).
    

### Migrate resources from Funcraft to the ROS component of Serverless Devs

In the directory of the function managed by using Funcraft, run the following command to convert the YAML file of Funcraft into a YAML file that can be identified by Serverless Devs:

```
s cli fc-transform fun2ros --target s.yaml
```

After the conversion command is run, an s.yaml file is generated in the project directory.

When you run the conversion command to migrate resources, specify the following parameters as needed:

-   \--source: the path of the function managed by using Funcraft.
    
-   \--target: the name of the YAML file in which the migrated function is defined. By default, the name of the file in which the migrated function is defined is s.yaml or s.yml. To customize the name of the YAML file, specify this parameter.
    
-   \--force: forcibly overwrites the file if the specified file name already exists.
    
-   (Required) \--region string: the region in which you want to deploy resources.
    

Sample command output:

```
[2021-09-02T10:34:53.909] [INFO ] [FC-TRANSFORM] - Using funcraft yaml: /test/demo/template.yml
[2021-09-02T10:34:53.923] [INFO ] [FC-TRANSFORM] - Reminder serverless devs yaml path: /test/demo/s.yaml

Tips for next step

======================
* Deploy Resources: s deploy -t s.yaml

End of method: fun2ros
```
