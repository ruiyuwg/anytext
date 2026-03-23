The Realtime Compute for Apache Flink extension for VS Code streamlines the local development process for Flink jobs. You can use the extension to develop, deploy, and publish Flink jobs from your local environment. You can also sync job configurations from your online environment. This topic describes how to use the VS Code extension.

## **Prerequisites**

-   You have [created a workspace](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
-   You have [obtained an AccessKey pair](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe) with the [permissions](/help/en/flink/realtime-flink/user-guide/grant-permissions-for-the-development-console) for the target namespace.
    
-   You have downloaded and installed [**VS Code**](https://code.visualstudio.com/) v1.74.0+ .
    

## **Limitations**

-   Log configuration is not supported.
    
-   Pulling existing jobs is not supported.
    

## **Install and configure the extension**

1.  Download and install the extension.
    
    -   Method 1: Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=OpenSourceFrontendTeam.vscode-flink-studio&ssr=false#overview) and install Flink Realtime Compute Studio.
        
    -   Method 2:
        
        1.  Open VS Code and click **EXTENSIONS** in the left navigation menu.
            
        2.  In the search bar, enter `Flink Realtime Compute Studio`.
            
        3.  Click **Install**.
            
2.  In the menu bar, click **File** > **Open Folder** and select a local folder.
    
3.  Configure the AccessKey information.
    
    ### **Workspace-wide**
    
    1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p807194.png) in the left menu bar. In the **Configure AK&SK** section, click **Configure in a .vvprc file**. The extension automatically creates a file with the `.vvprc` extension.
        
        ![截屏2024-07-16 13](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0807042271/p821491.png)
        
    2.  Enter the following configuration information.
        
        ```
        {
          "accessKey": "xxx",
          "secretKey": "xxx",
          "namespace": "xxx",
          "workspace": "xxx",
          "regionId" : "xxx"
        }
        ```
        
        **Parameter**
        
        **Description**
        
        **Notes**
        
        **accessKey**
        
        The AccessKey ID of your account.
        
        See [How do I find my AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
        
        **secretKey**
        
        The AccessKey secret of your account.
        
        **namespace**
        
        The name of the Flink namespace.
        
        See [View and delete a namespace](/help/en/flink/realtime-flink/user-guide/create-and-manage-a-namespace#section-4f5-ok9-kz3).
        
        **workspace**
        
        The ID of the Flink workspace.
        
        See [How do I view information such as the workspace ID?](/help/en/flink/realtime-flink/support/reference#section-lpq-5h8-0l9).
        
        **regionId**
        
        The region ID.
        
        See the region ID in [Endpoints](/help/en/flink/realtime-flink/developer-reference/api-ververica-2022-07-18-endpoint).
        
    
    ### **Globally**
    
    1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p807194.png) in the left menu bar.
        
    2.  Click **Configure AK&SK** > **Configure in global user settings**. You are redirected to the global settings of VS Code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7337042271/p821492.png)
        
    3.  Select **User** or **Workspace** to configure the settings as needed.
        
        **Note**
        
        The **User** configuration applies to all projects and workspaces in the VS Code editor and is stored in the global configuration file. The **Workspace** configuration applies only to the currently open workspace.
        
        **Parameter**
        
        **Description**
        
        **Notes**
        
        **Access Key**
        
        The AccessKey ID of your account.
        
        See [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
        
        **Secret Key**
        
        The AccessKey secret of your account.
        
        See [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
        
        **Namespace**
        
        The name of the Flink namespace.
        
        See [View and delete a namespace](/help/en/flink/realtime-flink/user-guide/create-and-manage-a-namespace#section-4f5-ok9-kz3).
        
        **Workspace**
        
        The ID of the Flink workspace.
        
        See [How do I view information such as the workspace ID?](/help/en/flink/realtime-flink/support/reference#section-lpq-5h8-0l9)
        
        **Region ID**
        
        The region ID.
        
        See the region ID in [Endpoints](/help/en/flink/realtime-flink/developer-reference/api-ververica-2022-07-18-endpoint).
        
    
    **Note**
    
    Configuration priority: Current folder > Parent folder > Global.
    
    After the configuration is applied, the name of the corresponding namespace appears in the status bar at the bottom of the job editor.
    
4.  (Optional) Install the following extensions to improve your coding efficiency.
    
    -   Flink SQL: Install [Flink SQL Language Features](https://marketplace.visualstudio.com/items?itemName=OpenSourceFrontendTeam.vscode-flink-sql). This extension provides Flink SQL support.
        
    -   Flink configuration: Install [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml). This extension provides an auto-complete feature for YAML scripts.
        

## **Procedure**

### **Step 1: Create a job**

-   Method 1: Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p807194.png) in the left menu bar. In the **QUICK START** section, click **Create a new deployment**. Enter a name at the top and press `Enter` to create a `.vvp` file. This creates a job with default fields.
    
    ![vscode0](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p807202.png)
    
-   Method 2: In the file tree, create a `.vvp` file.
    

### **Step 2: Configure the job**

Configure job settings visually:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p770635.png)

Alternatively, click **Raw File** in the upper-left corner to configure the job in the source file. In the UI form, click a parameter name to navigate to the corresponding location in the source file.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p806466.png)

-   Basic settings:
    
    SQL job
    
    **Parameter**
    
    **Description**
    
    Deployment Name
    
    The name of the job.
    
    Execution Mode
    
    The deployment mode. Valid values: STREAM and BATCH.
    
    Engine Version
    
    The engine version to run the job. See [Engine version](/help/en/flink/realtime-flink/product-overview/engine-version#concept-2206172). Use the recommended version.
    
    Deployment Target
    
    The destination resource queue for the job. For more information, see [Manage resource queues](/help/en/flink/realtime-flink/user-guide/manage-resource-queues).
    
    Deployment Type
    
    Select SQL.
    
    SQL Script
    
    Click **Open in external editor** to open the local editor and write your code.
    
    **Note**
    
    The editor opened from here is a virtual file, not a file in the actual file system. Because of this, if you reopen VS Code while the virtual file is still open, the editor window displays the `The editor could not be opened because the file was not found` error message. To fix this, click **Open in external editor** again.
    
    Additional Dependencies
    
    The URI of the additional dependencies required for the job.
    
    Description
    
    Enter remarks for the job.
    
    JAR job
    
    For more information about parameter settings, see [Deploy a JAR job](/help/en/flink/realtime-flink/user-guide/create-a-deployment#ff4cade0e0e2a).
    
    **Parameter**
    
    **Description**
    
    DeploymentName
    
    The name of the job.
    
    Execution Mode
    
    The deployment mode. Valid values: STREAM and BATCH.
    
    Engine Version
    
    The engine version to run the job. See [Engine version](/help/en/flink/realtime-flink/product-overview/engine-version#concept-2206172). Use the recommended version.
    
    Deployment Target
    
    The destination resource queue for the job. For more information, see [Manage resource queues](/help/en/flink/realtime-flink/user-guide/manage-resource-queues).
    
    Deployment Type
    
    The type of job to deploy. Select **JAR**.
    
    JAR URI
    
    The OSS path or URL of the JAR package.
    
    Make sure you have uploaded the dependency files to **Artifacts** in the Development Console or to a bound OSS bucket.
    
    Entry Point Class
    
    The entry point class of the program. If your JAR package does not specify a main class, enter the standard path of your entry point class.
    
    Entry Point Main Arguments
    
    Enter the input parameters to be invoked in the main method.
    
    Additional Dependencies
    
    The OSS path or URL of the destination additional dependency files. Only URLs that end with a file name are supported.
    
    Make sure you have uploaded the dependency files to **Artifacts** in the Development Console or to a bound OSS bucket.
    
    Description
    
    Enter remarks for the job.
    
    Python job
    
    For more information about parameter settings, see [Deploy a Python job](/help/en/flink/realtime-flink/user-guide/create-a-deployment#ea7e55c0e0xls).
    
    **Parameter**
    
    **Description**
    
    Deployment Name
    
    The name of the job.
    
    Execution Mode
    
    The deployment mode. Valid values: STREAM and BATCH.
    
    Engine Version
    
    The engine version to run the job. See [Engine version](/help/en/flink/realtime-flink/product-overview/engine-version#concept-2206172). Use the recommended version.
    
    Deployment Target
    
    The destination resource queue for the job. For more information, see [Manage resource queues](/help/en/flink/realtime-flink/user-guide/manage-resource-queues).
    
    Deployment Type
    
    The type of job to deploy. Select **Python**.
    
    Python Uri
    
    The address of the Python job file. The file can be a .py or .zip file.
    
    Entry Module
    
    The entry class for the program.
    
    -   Optional for .py files.
        
    -   Required for .zip files.
        
    
    Entry Point Main Arguments
    
    Enter the input arguments in the main method.
    
    Python Libraries
    
    Third-party Python packages, added to the PYTHONPATH of the Python worker process so that they can be directly accessed in Python UDFs. For more information, see [Use third-party Python packages](/help/en/flink/realtime-flink/developer-reference/use-python-dependencies#section-bed-4cc-lj2).
    
    Python Archives
    
    Archive files. For more information, see [Use a custom Python virtual environment](/help/en/flink/realtime-flink/developer-reference/use-python-dependencies#section-mug-8wi-mom) and [Use data files](/help/en/flink/realtime-flink/developer-reference/use-python-dependencies#section-hxe-2xw-amg).
    
    Additional Dependencies
    
    The OSS path or URL of the destination additional dependency files.
    
    Make sure you have uploaded the dependency files to **Artifacts** in the Development Console or to a bound OSS bucket.
    
    Description
    
    Enter remarks for the job.
    
-   **Resources**: See [Configure job resources](/help/en/flink/realtime-flink/user-guide/configure-deployment-resources).
    
-   **Parameters**: See [Parameters](/help/en/flink/realtime-flink/user-guide/configure-a-deployment#section-o8m-6ee-10k).
    

### **Step 3: Deploy the job**

After you configure the job, click **Create** at the bottom of the page to deploy it. For an existing local job, click **Update** to deploy your changes.

For SQL jobs, the extension validates the SQL script, resource plan, and other job configurations, and then displays the validation results.

### **Step 4: Start the job**

For a deployed job, the current job status is displayed in the upper-right corner. Click **Start** and select a startup mode. For more information, see [Start a job](/help/en/flink/realtime-flink/user-guide/start-a-deployment#uicontrol-mle-mpv-b51).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p771975.png)

### **Step 5: Perform job O&M**

![vscode.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5489410271/p807154.png)

-   **Open Online**: View the detailed running status of the job or perform O&M operations in the Development Console.
    
-   **Synchronize**: Synchronize jobs from the console. Click **Synchronize** to open the job preview page (SQL draft updates not available). After confirmation, click **Accept** in the upper-right corner. The extension then overwrites the local job file with the job file from the cloud.
    
-   **Cancel**: Stop the job.
    

## References

-   [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors)
    
-   [Develop JAR jobs](/help/en/flink/realtime-flink/user-guide/develop-a-jar-draft)
    
-   [Develop Python jobs](/help/en/flink/realtime-flink/user-guide/develop-a-pyflink-job)
    
-   [High-performance Flink SQL optimization techniques](/help/en/flink/realtime-flink/user-guide/optimize-flink-sql)
