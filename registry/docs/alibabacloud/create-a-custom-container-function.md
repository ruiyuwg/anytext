If the built-in runtimes in Function Compute do not meet your business needs, you can use a Custom Container function. This topic describes how to create a Custom Container function in the Function Compute console or using Serverless Devs.

## **Precautions**

To create a Custom Container function in Function Compute, you must use an image from an [Alibaba Cloud Container Registry](https://cr.console.alibabacloud.com/cn-hangzhou/instances) repository that is in the same region and under the same account. When you build an image on a Mac computer with an Apple chip or another machine with an ARM architecture, you must specify the build platform of the image as Linux/Amd64. For example: `docker build --platform linux/amd64 -t $IMAGE_NAME .`.

## Prerequisites

-   Container Registry
    
    -   [Create an instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance#task488)
        
        **Note**
        
        -   You can create a Personal Edition or Enterprise Edition instance. We recommend that you use an Enterprise Edition instance.
            
        -   Container Registry (ACR) Personal Edition is intended for individual developers. It is available as a free trial with quotas during the public preview period. It does not provide a Service-Level Agreement (SLA) or compensation for damages, and is subject to usage limits. For more information about the limits, see [Notes on creating a Personal Edition instance](/help/en/acr/user-guide/create-a-container-registry-personal-edition-instance#section-rsx-587-kea).
            
        
    -   [Create a namespace](/help/en/acr/getting-started/build-images-on-container-registry-enterprise-edition-instances#section-m0h-3y9-s89)
        
    -   [Create an image repository](/help/en/acr/getting-started/build-images-on-container-registry-enterprise-edition-instances#section-7ek-3k0-l1n)
        
-   Serverless Devs
    
    -   [Install Serverless Devs and its dependencies](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
        
    -   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
        

## Create a function in the console

### Step 1: Create a service and grant permissions

1.  Create a service in the [Function Compute console](https://fc.console.alibabacloud.com/).
    
    For more information, see [Create a service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4).
    
2.  Attach the **AliyunContainerRegistryReadOnlyAccess** or **AliyunContainerRegistryFullAccess** access policy to the target service.
    
    For more information, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619). Function Compute requires the permissions in the specified policy to retrieve a temporary account for the default instance in Container Registry. Function Compute then uses this temporary account to push the image from your private image repository.
    

### Step 2: Create a function

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, click **Create Function**.
4.  On the **Create Function** page, select **Use Container Image**, configure the following parameters as needed, and then click **Create**.
    
    -   **Basic Settings**: Specify basic information for the function, such as the function name and handler type.
        
        **Configuration Item**
        
        **Description**
        
        **Function Name**
        
        Enter a custom function name. If you leave this blank, Function Compute automatically creates one for you.
        
        **Handler Type**
        
        Select the function type. This determines whether the function handles event requests or HTTP requests. The following options are available:
        
        -   **Handle event requests**: The function is triggered by a timer, an API or software development kit (SDK) call, or a trigger from another Alibaba Cloud service.
            
        -   **Handle HTTP requests**: The function handles HTTP or WebSocket requests. For web scenarios, we recommend that you **Use Custom Runtime**.
            
        
    -   **Image Configuration**: Select the image that is used to create the function.
        
        **Configuration Item**
        
        **Description**
        
        **Image Selection Method**
        
        You can **Use Sample Image** or use your own image to create the function.
        
        -   **Use Sample Image**: Select a sample image provided by Function Compute.
            
        -   **Use an image from ACR**: Click **Select Image from ACR** under the **Container Image** parameter. In the **Select Container Image** panel that appears, select the **Container Instance** and **ACR Image Repository**. Then, find the target image in the image list and click **Select** in the **Actions** column.
            
            **Note**
            
            -   You cannot use public images from an ACR repository that belongs to another account.
                
            -   For Container Registry Enterprise Edition, Function Compute uses the tag of the image that you select to create function instances.
                
                -   If you use an Enterprise Edition image (Premium Edition or Standard Edition), we recommend that you enable the **Immutable** setting for the **image version**. Otherwise, if the image tag is updated elsewhere, Function Compute pulls the latest image data to start instances. For more information, see [Enable immutable image versions](/help/en/acr/user-guide/turn-on-immutable-image-version#task-1961931).
                    
                -   If you use an Enterprise Edition image (Basic Edition) or ACR Personal Edition, you must update the function in the Function Compute console with the new image information after you update an image tag with the same name in the image repository. Then, Function Compute uses the new image to start instances.
                    
                
            
        
        **Start Command**
        
        The start command for the container. If you leave this blank, the Entrypoint or CMD from the image is used by default.
        
        **Listening Port**
        
        The port on which the HTTP server in the container image listens. The default port is 9000.
        
    -   **Advanced Configuration**: Configure instance-related settings and the execution timeout period for the function.
        
        **Configuration Item**
        
        **Description**
        
        **Use a GPU?**
        
        Based on your business needs, select whether to use a GPU-accelerated instance. By default, a CPU instance is used and a GPU-accelerated instance is not used. For more information, see [Instance types](/help/en/functioncompute/fc-2-0/user-guide/instance-types-and-instance-modes#section-a4w-gig-a8m). For information about the billing of various instance types, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).
        
        -   **Use GPU**
            
        -   **Do not use GPU**
            
        
        **Instance Specifications**
        
        -   Select **Use GPU**
            
            Select a **GPU Card Type**. Then, based on your business needs, select a proper **GPU Memory** specification. Function Compute automatically selects the **vCPU** and **Memory** specifications based on your GPU selection. Flexible ratios are not supported.
            
        -   Select **Do not use GPU**
            
            Based on your business needs, select or manually enter a proper combination of **vCPU** and **Memory** specifications.
            
        
        For information about the billing of each resource, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).
        
        **Note**
        
        The ratio of vCPUs (in cores) to memory (in GB) must be set to a value in the range of 1:1 to 1:4.
        
        **Ephemeral Disk Size**
        
        Based on your business needs, select a disk size. Function Compute provides a free quota of up to 512 MB for disk usage. For more information, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).
        
        **Instance Concurrency**
        
        Set the concurrency of the function instance. For more information, see [Set instance concurrency](/help/en/functioncompute/fc-2-0/user-guide/configure-instance-concurrency#task-2552850).
        
        **Execution Timeout**
        
        Set the timeout period. The default value is 60 seconds. The maximum value is 86400 seconds. We recommend that you set this parameter to 600 seconds.
        
        **Time Zone**
        
        Select the time zone for the function. After you set the time zone, an environment variable named **TZ** is automatically added to the function. The value of this variable is the time zone that you set.
        
    -   **Environment Variables**: Set environment variables for the function runtime environment. For more information, see [Environment variables](/help/en/functioncompute/fc-2-0/user-guide/fc-environment-variables#multiTask2981).
        
    -   **Trigger Configurations**: Configure a trigger to execute the function. For more information, see [Manage triggers](/help/en/functioncompute/fc-2-0/user-guide/manage-triggers#concept3804).
        
    
    After the function is created, you can view and update it in the function list of the target service.
    

**Note**

When you update a function, you can only change the configured listening port. You cannot delete the port or add other listening ports. If you configure a listening port when you create a function, the port is retained if you do not specify a listening port during the update.

## Use Serverless Devs to create a function

You can use Serverless Devs to build a container image, push it to a repository, and deploy a function in a single step.

1.  Run the following command to initialize the project. Enter the address of the ACR image repository as prompted.
    
    ```
    sudo s init start-fc-custom-container-event-nodejs14
    ```
    
    Sample output:
    
    ```
     Serverless Awesome: https://github.com/Serverless-Devs/package-awesome
    
     Please input your project name (init dir) start-fc-custom-container-event-nodejs14
     file decompression completed
    
         ____  _     _ ___  _ _     _        _____ ____
        /  _ \/ \   / \\  \/// \ /\/ \  /|  /    //   _\
        | / \|| |   | | \  / | | ||| |\ ||  |  __\|  /
        | |-||| |_/\| | / /  | \_/|| | \||  | |   |  \__
        \_/ \|\____/\_//_/   \____/\_/  \|  \_/   \____/
     please select credential alias default
    
        Welcome to the Aliyun FC start application
         This application requires to open these services:
             FC : https://fc.console.alibabacloud.com/
             ACR: https://cr.console.alibabacloud.com/
    
         * Note: The actions are declared in s.yaml:
            Pre-deployment execution: sudo s build --use-docker --dockerfile ./code/Dockerfile
           If you do not need to build the project every time, do not need to build it before deployment, or have already built it manually, you can comment out this part.
           > PS: You also need to modify the image field in s.yaml to the address of your ACR configuration during deployment.
         * The project is initialized. You can go to the project directory and use s deploy to deploy the project.
    
     Thanks for using Serverless-Devs
     You could [cd /test/test1/start-fc-custom-container-event-nodejs14] and enjoy your serverless journey!
     If you need help for this example, you can use [s -h] after you enter folder.
     Document Star: https://github.com/Serverless-Devs/Serverless-Devs
     Do you want to deploy the project immediately? No
    ```
    
2.  Run the following command to navigate to the project directory.
    
    ```
    cd start-fc-custom-container-event-nodejs14
    ```
    
3.  Edit the `s.yaml` file. For more information about the parameters in the YAML file, see [YAML specifications](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands#section-pkh-tcl-y3z).
    
4.  Run the following command to deploy the project.
    
    ```
    sudo s deploy
    ```
    
    Sample output:
    
    ```
    [2021-12-15 07:54:30] [INFO] [S-CLI] - Start ...
    [2021-12-15 07:54:30] [INFO] [S-CLI] - Start the pre-action
    [2021-12-15 07:54:30] [INFO] [S-CLI] - Action: s build --use-docker --dockerfile ./code/Dockerfile
    [2021-12-15 07:54:31] [INFO] [S-CLI] - Start ...
    [2021-12-15 07:54:32] [INFO] [FC-BUILD] - Build artifact start...
    [2021-12-15 07:54:32] [INFO] [FC-BUILD] - Use docker for building.
    [2021-12-15 07:54:32] [INFO] [FC-BUILD] - Building image...
    Sending build context to Docker daemon   5.12kB
    Step 1/7 : FROM node:14.5.0-alpine3.11
     ---> 5d97b3d11dc1
    ......
    Step 7/7 : ENTRYPOINT [ "node", "server.js" ]
     ---> Using cache
     ---> a5ef1c015e7e
    Successfully built a5ef1c015e7e
    Successfully tagged registry.cn-hangzhou.aliyuncs.com/fc-example/test:nginx
    SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
    Build image(registry.cn-hangzhou.aliyuncs.com/fc-example/test:nginx) successfully
    [2021-12-15 07:54:33] [INFO] [FC-BUILD] - Build artifact successfully.
    
    Tips for next step
    ======================
    * Invoke Event Function: s local invoke
    * Invoke Http Function: s local start
    * Deploy Resources: s deploy
    End of method: build
    [2021-12-15 07:54:33] [INFO] [S-CLI] - End the pre-action
    [2021-12-15 07:54:34] [INFO] [FC-DEPLOY] - Using region: cn-hangzhou
    [2021-12-15 07:54:34] [INFO] [FC-DEPLOY] - Using access alias: default
    [2021-12-15 07:54:34] [INFO] [FC-DEPLOY] - Using accessKeyID: yourAccessKeyID
    [2021-12-15 07:54:34] [INFO] [FC-DEPLOY] - Using accessKeySecret: yourAccessKeySecret
    [2021-12-15 07:54:34] [INFO] [FC-DEPLOY] - Checking Service hello-world-service exists
    [2021-12-15 07:54:35] [INFO] [FC-DEPLOY] - Setting role: AliyunFCDefaultRole
    [2021-12-15 07:54:35] [INFO] [RAM] - Checking Role AliyunFCDefaultRole exists
    [2021-12-15 07:54:35] [INFO] [RAM] - Updating role: AliyunFCDefaultRole
    [2021-12-15 07:54:35] [INFO] [RAM] - Checking Policy AliyunFCDefaultRolePolicy exists
    [2021-12-15 07:54:35] [INFO] [FC-DEPLOY] - Checking Function nodejs14-event-function exists
    [2021-12-15 07:54:36] [INFO] [FC-DEPLOY] - Using image registry: registry.cn-hangzhou.aliyuncs.com
    [2021-12-15 07:54:36] [INFO] [FC-DEPLOY] - Try to use a temporary token for docker login
    Login to registry: registry.cn-hangzhou.aliyuncs.com with user: cr_temp_user
    Pushing docker image: registry.cn-hangzhou.aliyuncs.com/fc-example/test:nginx...
    The push refers to repository [registry.cn-hangzhou.aliyuncs.com/fc-example/test]
    cdf38e7753b7: Layer already exists                                                                                                                                                           43128f71725b: Layer already exists                                                                                                                                                           0fb36a16ab83: Layer already exists                                                                                                                                                           dd966b9fd474: Layer already exists                                                                                                                                                           a1915d7a1111: Layer already exists                                                                                                                                                           c4491b3ee709: Layer already exists                                                                                                                                                           9fb10d900487: Layer already exists                                                                                                                                                           3e207b409db3: Layer already exists                                                                                                                                                           nginx: digest: sha256:02b69157def85ceb72f32cb1c5845d00e1d8df19caf6eaf720a9bc77bb57db76 size: 1991
    √ Make service hello-world-service success.
    √ Make function hello-world-service/nodejs14-event-function success.
    [2021-12-15 07:54:39] [INFO] [FC-DEPLOY] - Checking Service hello-world-service exists
    [2021-12-15 07:54:39] [INFO] [FC-DEPLOY] - Checking Function nodejs14-event-function exists
    
    There is auto config in the service: hello-world-service
    
    Tips for next step
    ======================
    * Display information of the deployed resource: s info
    * Display metrics: s metrics
    * Display logs: s logs
    * Invoke remote function: s invoke
    * Remove Service: s remove service
    * Remove Function: s remove function
    * Remove Trigger: s remove trigger
    * Remove CustomDomain: s remove domain
    
    
    
    helloworld:
      region:   cn-hangzhou
      service:
        name: hello-world-service
      function:
        name:       nodejs14-event-function
        runtime:    custom-container
        handler:    not-used
        memorySize: 256
        timeout:    60
    ```
    
5.  Run the following command to test the function.
    
    ```
    sudo s invoke -e "{\"key\":\"val\"}"
    ```
    
    Sample output:
    
    ```
    [2021-12-15 08:00:17] [INFO] [S-CLI] - Start ...
    ========= FC invoke Logs begin =========
    FC Invoke Start RequestId: 768945c8-f92d-428e-89c2-ecd50883****
    {"key":"val"}
    FC Invoke End RequestId: 768945c8-f92d-428e-89c2-ecd50883****
    
    Duration: 3.05 ms, Billed Duration: 4 ms, Memory Size: 256 MB, Max Memory Used: 10.77 MB
    ========= FC invoke Logs end =========
    
    FC Invoke Result:
    OK
    
    
    End of method: invoke
    ```
    

## **References**

-   If you want to use a GPU-accelerated instance, you must create a Custom Container function. For more information about how to select GPU instance specifications, see [Instance types and modes](/help/en/functioncompute/fc-2-0/user-guide/instance-types-and-instance-modes).
    
-   Custom Container functions may have longer cold start times because the container image's base environment requires additional time for data download and decompression. To reduce the cold start time, see [Best practices for reducing cold starts](/help/en/functioncompute/fc-2-0/user-guide/overview-3#section-e70-asi-3lz).
    
-   You can also call an API to create a function. For more information, see [CreateFunction](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-createfunction).
    
-   For more information about the scenarios for and differences among the built-in, custom, and custom container runtimes that Function Compute provides, see [Select a function runtime](/help/en/functioncompute/fc-2-0/product-overview/function-runtime-selection).
