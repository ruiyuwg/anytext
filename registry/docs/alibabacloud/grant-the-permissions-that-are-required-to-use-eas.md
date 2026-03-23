If you want to access Elastic Algorithm Service (EAS) of Platform for AI (PAI) as a Resource Access Management (RAM) user, you must grant the required permissions to the RAM user by using your Alibaba Cloud account. This topic describes how to grant permissions to a RAM user to access EAS.

## Background information

You can grant permissions to a RAM user to access EAS by using one of the following methods:

-   [Grant a RAM user full permissions on EAS](#section-z0q-5u0-lxc)
    
    Use the AliyunPAIEASFullAccess system policy that provides full permissions on EAS. After you attach the policy to the RAM user, the RAM user can use all features of EAS.
    
-   [Grant a RAM user read-only permissions on EAS](#section-gqo-3al-v7l)
    
    Use the AliyunPAIEASReadOnlyAccess system policy that provides read-only permissions on EAS. After you attach the policy to the RAM user, the RAM user can query and view model services that are deployed in EAS.
    
-   [Create a custom policy](#section-mny-3kp-74c)
    
    If the preceding methods do not meet your requirements, you can create a custom policy to grant permissions to the RAM user in a fine-grained manner. For example, you can create a custom policy to grant permissions to the RAM user to query and modify model services or dedicated resource groups in EAS.
    

## Grant a RAM user full permissions on EAS

This section describes how to grant permissions to a RAM user to use all features of EAS.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Grant a RAM user full permissions on EAS. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
    Take note of the following parameters:
    
    -   **Resource Scope**: Set this parameter to **Account**.
        
    -   **Policy**: Select **System Policy** AliyunPAIEASFullAccess.
        
        **Note**
        
        Object Storage Service (OSS) permissions are related to data security. The AliyunPAIEASFullAccess policy does not provide OSS permissions. You must separately grant the RAM user OSS permissions. For more information, see [RAM Policy Editor](/help/en/oss/ram-policy-editor#concept-mx2-yb4-vdb).
        
    

## Grant a RAM user read-only permissions on EAS

This section describes how to grant permissions to a RAM user to query and view model services that are deployed in EAS.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Grant a RAM user full permissions on EAS. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
    Take note of the following parameters:
    
    -   **Resource Scope**: Set this parameter to **Account**.
        
    -   **Policy**: Select **system policy** AliyunPAIEASReadOnlyAccess.
        
    

## Create a custom policy

This section describes how to grant permissions to a RAM user to query and modify model services or dedicated resource groups in EAS by creating a custom policy.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Create a custom policy. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
    
    **Important**
    
    When you specify the policy document, we recommend that you follow the principle of least privilege.
    
    The following code provides a sample policy document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "eas:CreateInstance",
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "eas:DescribeService",
                    "eas:DeleteService",
                    "eas:UpdateService",
                    "eas:UpdateServiceVersion"
                ],
                "Resource": [
                    "acs:eas:<region>:<uid>:service/eas-m-xxx1",// Modify this configuration based on your business requirements and the instructions in the "Policy description" section of this topic. 
                    "acs:eas:<region>:<uid>:service/eas-m-xxx2"
                ],
            }
        ]
    }
    ```
    
    For information about the configurations of the Action and Resource elements, see the [Policy description](#section-wah-o5e-prg) section of this topic.
    
3.  Attach the policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
    Take note of the following parameters:
    
    -   **Resource Scope**: Set this parameter to **Account**.
        
    -   **Policy**: Select the custom policy that you created in Step 2.
        
    

## Policy description

Each policy contains the Action and Resource elements. The Action element specifies the action to be performed, and the Resource element specifies the principal on which the action is performed. The following table lists the valid values for the Action and Resource elements.

-   Action
    
    **Category**
    
    **Action**
    
    **Description**
    
    Service-related action
    
    eas:CreateService
    
    Creates model services.
    
    eas:ListServices
    
    Views model services.
    
    eas:DescribeService
    
    Views the details of model services.
    
    eas:DeleteService
    
    Deletes model services.
    
    eas:DeleteServiceLabel
    
    Deletes tags of model services.
    
    eas:ListServiceInstances
    
    Views information about EAS instances.
    
    eas:DeleteServiceInstances
    
    Restarts EAS instances.
    
    eas:UpdateService
    
    Updates model services or add versions.
    
    eas:UpdateServiceVersion
    
    Switches between versions of model services.
    
    eas:StartService
    
    Starts model services.
    
    eas:StopService
    
    Stops model services.
    
    eas:UpdateService
    
    Updates model services.
    
    eas:UpdateServiceLabel
    
    Updates tags of model services.
    
    eas:RestartService
    
    Restarts model services.
    
    eas:CreateServiceAutoScaler
    
    Enables auto scaling for model services.
    
    eas:CreateServiceCronScaler
    
    Enables scheduled auto scaling for model services.
    
    eas:DeleteServiceAutoScaler
    
    Disables auto scaling for model services.
    
    eas:DeleteServiceCronScaler
    
    Disables scheduled auto scaling for model services.
    
    eas:DescribeServiceAutoScaler
    
    Views the auto scaling status of model services.
    
    eas:DescribeServiceCronScaler
    
    Views information about scheduled auto scaling for model services.
    
    eas:UpdateServiceAutoScaler
    
    Updates auto scaling configurations of model services.
    
    eas:UpdateServiceCronScaler
    
    Updates scheduled auto scaling configurations of model services.
    
    eas:CreateAppService
    
    Creates an application service.
    
    eas:UpdateServiceSafetyLock
    
    Updates the service security lock.
    
    eas:UpdateServiceInstance
    
    Updates the attributes of service instances.
    
    eas:UpdateAppService
    
    Updates an application service.
    
    eas:DescribeServiceDiagnosis
    
    Views diagnostic details of services.
    
    eas:DescribeServiceInstanceDiagnosis
    
    Views diagnostic details of service instances.
    
    eas:DescribeServiceEvent
    
    Views model service deployment events.
    
    eas:DescribeGroup
    
    Views service group details.
    
    eas:ListServiceVersions
    
    Views the historical versions of a service.
    
    eas:ListServiceContainers
    
    Views the container list of a service.
    
    eas:ListGroups
    
    Views the list of service groups.
    
    eas:CreateServiceMirror
    
    Creates traffic mirror sessions.
    
    eas:DescribeServiceMirror
    
    Views the status of traffic mirror sessions.
    
    eas:UpdateServiceMirror
    
    Updates the configuration of traffic mirror sessions.
    
    eas:DeleteServiceMirror
    
    Closes traffic mirror sessions.
    
    eas:ReleaseService
    
    Specifies the traffic ratio for blue-green deployment.
    
    eas:DescribeServiceLog
    
    Views logs of model services.
    
    Resource group-related action
    
    eas:CreateResource
    
    Creates dedicated resource groups.
    
    eas:DescribeResource
    
    Views basic information about dedicated resource groups.
    
    eas:ListResources
    
    Views dedicated resource groups.
    
    eas:DeleteResource
    
    Deletes dedicated resource groups.
    
    eas:UpdateResource
    
    Updates basic information about dedicated resource groups.
    
    eas:ListResourceInstances
    
    Views instances of dedicated resource groups.
    
    eas:ListResourceInstanceWorker
    
    Views containers hosted on instances of dedicated resource groups.
    
    eas:ListResourceServices
    
    Views model services deployed in dedicated resource groups.
    
    eas:CreateResourceInstances
    
    Adds instances to dedicated resource groups.
    
    eas:UpdateResourceInstance
    
    Updates instances in a dedicated resource group.
    
    eas:DeleteResourceInstances
    
    Removes instances from dedicated resource groups.
    
    eas:UpdateResourceDLink
    
    Updates the status of Virtual Private Cloud (VPC) direct connection for dedicated resource groups.
    
    eas:DescribeResourceDLink
    
    Views the status of VPC direct connection of dedicated resource groups.
    
    eas:DeleteResourceDLink
    
    Deletes VPC direct connection configurations of dedicated resource groups.
    
    eas:CreateResourceLog
    
    Enables log shipper for dedicated resource groups.
    
    eas:DescribeResourceLog
    
    Views the status of log shipper for dedicated resource groups.
    
    eas:DeleteResourceLog
    
    Disables log shipper for dedicated resource groups.
    
    Stress testing-related action
    
    eas:CreateBenchmarkTask
    
    Creates a stress testing task.
    
    eas:DeleteBenchmarkTask
    
    Deletes a stress testing task.
    
    eas:DescribeBenchmarkTask
    
    Views the details of a stress testing task.
    
    eas:DescribeBenchmarkTaskReport
    
    Views the report of a stress testing task.
    
    eas:ListBenchmarkTask
    
    Views the list of stress testing tasks.
    
    eas:StartBenchmarkTask
    
    Starts a stress testing task.
    
    eas:StopBenchmarkTask
    
    Stops a stress testing task.
    
    eas:UpdateBenchmarkTask
    
    Updates a stress testing task.
    
    Private gateway-related action
    
    eas:CreateGateway
    
    Creates a private gateway.
    
    eas:DescribeGateway
    
    Views the details of a private gateway.
    
    eas:UpdateGateway
    
    Updates a private gateway.
    
    eas:CreateGatewayIntranetLinkedVpc
    
    Creates an internal endpoint of a private gateway.
    
    eas:ListGatewayIntranetLinkedVpc
    
    Views internal endpoints of a private gateway.
    
    eas:DeleteGatewayIntranetLinkedVpc
    
    Deletes an internal endpoint of a private gateway.
    
    eas:DeleteGateway
    
    Deletes a private gateway.
    
    eas:ListPrivileges
    
    Check the user's whitelist configuration
    
-   Resource
    
    The Resource element in EAS is in the following format:
    
    ```
    acs:eas:<region>:<uid>:<resource_type>/<id>
    ```
    
    Replace the following parameters with actual values:
    
    -   <region>: the region in which the model service or dedicated resource group is deployed.
        
    -   <uid>: the UID of the account to which the resource belongs.
        
    -   <resource\_type>: the resource type. For example, if you want to manage resources related to model services, set the value to service. If you want to manage resources related to resource groups, set the value to resource.
        
    -   <id>: the ID of the model service or dedicated resource group.
        
    
    The following examples show the values of the Resource element in the following scenarios: managing model services deployed in public resource groups, managing model services deployed in dedicated resource groups, and managing dedicated resource groups.
    
    -   Manage model services that are deployed in EAS
        
        -   Manage a model service that is deployed in a public resource group
            
            ```
            acs:eas:cn-hangzhou:123456789012****:service/eas-m-u12fxt9ml1syoj****
            ```
            
            The value of Resource specifies the model service eas-m-u12fxt9ml1syoj\*\*\*\* that is deployed in a public resource group. The model service is deployed in the China (Hangzhou) region and belongs to the account named 123456789012\*\*\*\*.
            
            ```
            acs:eas:cn-hangzhou:123456789012****:service/your_service_name
            ```
            
            The value of Resource specifies the model service your\_service\_name that is deployed in a public resource group. The model service is deployed in the China (Hangzhou) region and belongs to the account named 123456789012\*\*\*\*.
            
        -   Manage a model service that is deployed in a dedicated resource group
            
            ```
            acs:eas:cn-shanghai:123456789012****:resource/eas-r-jksauxqjsai81****/service/eas-m-iaskn1skn1us****
            ```
            
            The value of Resource specifies the model service eas-m-iaskn1skn1us\*\*\*\* that is deployed in the dedicated resource group eas-r-jksauxqjsai8\*\*\*\*. The model service is deployed in the China (Shanghai) region and belongs to the account named 123456789012\*\*\*\*.
            
            ```
            acs:eas:cn-shanghai:123456789012****:resource/eas-r-jksauxqjsai8****/service/your_private_service
            ```
            
            The value of Resource specifies the model service your\_private\_service that is deployed in the dedicated resource group eas-r-jksauxqjsai8\*\*\*\*. The model service is deployed in the China (Shanghai) region and belongs to the account named 123456789012\*\*\*\*.
            
    -   Manage a dedicated resource group
        
        ```
        acs:eas:cn-beijing:123456789012****:resource/eas-r-jksauxqjsai8****
        ```
        
        The value of Resource specifies the dedicated resource group eas-r-jksauxqjsai8\*\*\*\*. The dedicated resource group is deployed in the China (Beijing) region and belongs to the account named 123456789012\*\*\*\*.
        
    -   Use a wildcard character
        
        You can use the asterisk (\*) wildcard character in Resource to specify more than one resource.
        
        The following examples show the values of Resource when wildcard characters are used:
        
        -   ```
            acs:eas:*:123456789012****:service/*
            ```
            
            The value of Resource specifies model services that belong to the account named 123456789012\*\*\*\* and are deployed in public resource groups across all regions.
            
        -   ```
            acs:eas:cn-hangzhou:123456789012****:resource/eas-r-jksauxqjsai8****/*
            ```
            
            The value of Resource specifies all model services that belong to the account named 123456789012\*\*\*\* and are deployed in the dedicated resource group eas-r-jksauxqjsai8\*\*\*\* in the China (Hangzhou) region.
            
        -   ```
            acs:eas:*:123456789012****:*
            ```
            
            The value of Resource specifies all resource groups and model services that belong to the account named 123456789012\*\*\*\* in all regions.
            
        -   ```
            acs:eas:*:123456789012****:service/prefix*
            ```
            
            The value of Resource specifies all resource groups and model services that belong to the account named 123456789012\*\*\*\* in regions whose names contain a `prefix` prefix.
