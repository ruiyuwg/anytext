The Personal Directory provides each developer with a private space to manage, debug, create, and maintain code.

## **Features**

Files in the Personal Directory are categorized into **My Files** and **Local Files**. The following table describes these two file types:

**Type**

**Name**

**Storage directory**

**Storage provider**

**Storage path**

**Terminal operations**

**My Files**

**My Files**

The default directory in your Personal Directory.

DataWorks

/

No

**Local Files**

**Note**

This directory does not exist by default. You must add Local Files manually.

Dataset mount path name

Default storage directory for the [Personal Development Environment](/help/en/dataworks/user-guide/personal-development-environment/) instance.

If you specify a [dataset](/help/en/dataworks/user-guide/personal-development-environment/#ed7a8c32f74kq) for your Personal Development Environment instance, the storage provider is the NAS or Object Storage Service (OSS) configured for the dataset.

Specified during instance creation.

Yes

**workspace**

If no dataset is specified for the Personal Development Environment instance, the storage provider is DataWorks.

`/mnt/workspace`

Yes

Local directory name

If not using a Personal Development Environment, you can add a directory from your local device.

Your local device

The path you select when you add the local directory.

No

## **Access Personal Directory**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  On the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2208852471/p854101.png) icon to go to the data development page. Then, click **Personal Directory** in the directory tree.
    

## **Manage personal files**

You can add personal files in various ways to suit your needs.

### **Create a personal file**

In the **Personal Directory**, click **My Files**. In the toolbar, click the **New SQL File** icon to quickly create a personal SQL file in My Files. By default, the following four file types can be executed directly:

-   `.sql`: SQL file.
    
-   `.ipynb`: [Notebook](/help/en/dataworks/user-guide/basic-notebook-development) file.
    
-   `.py`: Python file.
    
-   `.sh`: Shell file.
    

Click **My Files**. In the toolbar, click the **Create a file** icon to create personal files in more formats. You must **specify a file extension** to set the file type.

**Note**

-   You can create any file type in the Personal Directory, but only the types listed above are executable.
    
-   The Personal Directory supports reading and writing other file types that `Visual Studio Code` supports, but it does not provide syntax highlighting, a development environment, or execution support.
    

### **Add Local Files**

In addition to the default **My Files** directory, you can add local directories, including their files and code repositories, to your **Personal Directory**.

-   **Method 1**: In the toolbar, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5487394571/p995517.png) icon and select a local directory to add to your Personal Directory.
    
    **Important**
    
    Without a Personal Development Environment, "local" refers to your device, and you must grant the browser permission to access its files. With a Personal Development Environment, "local" refers to the environment's instance.
    
-   **Method 2**: In the Local Files directory, right-click and select **Add Local Directory to Personal Directory...** from the context menu.
    
    > If you no longer need a directory, find it, right-click it, and select **Delete Local Directory From Personal Directory...** from the menu. This action removes the directory from your Personal Directory but does not permanently delete its contents.
    

### **Locate files**

The Personal Directory offers several features to help you quickly locate files and improve development efficiency.

**1\. Locate the currently open file**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5771174471/p917722.png) icon to the right of the **Personal Directory** to quickly locate the file currently open in the right-side panel within the directory tree.

**2\. Quickly open a directory in the terminal**

In the Local Files directory of your Personal Development Environment, find the target directory, right-click it, and select **Open In Integrated Terminal** from the context menu. This action opens a terminal and navigates to the directory's path.

**3\. Search for a file**

In the search box above the **Project Directory** in **Data Studio**, you can search for a specific file by its name.

> A maximum of 2,048 search results can be displayed.

**4\. Search for a file by code snippet**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841035.png) icon to the right of the **Personal Directory** to search for files that contain a specific code snippet. For more information, see [Code Search](/help/en/dataworks/user-guide/code-search-of-new-ide).

## **Use personal files**

You can use your personal files in the following ways:

-   You can run `.sql` and `.py` files from the Personal Directory on the compute resource bound to the workspace.
    
-   You can submit supported file types (`.ipynb`, `.sh`, `.py`, and `.sql`) to the [Project Directory](/help/en/dataworks/user-guide/dataworks-project-development), configure their scheduling properties, and deploy them to the production environment.
    
-   You can submit `.py` files from your Personal Directory as MaxCompute resources or functions for use in job development.
    

### **Method 1: Run in the Personal Directory**

This method is ideal for daily development, testing, and ad-hoc queries. You can create a temporary file in your Personal Directory to test and verify small code snippets.

1.  **Configure run parameters**
    
    -   In your Personal Directory, find the `Shell`, `Python`, or `SQL` file you want to run. Click the file to open the editor. In the **Run Configuration** panel on the right, set the run parameters.
        
        **Parameter**
        
        **Description**
        
        **Type**
        
        Select the type of compute resource required to run the file.
        
        **Compute Resource**
        
        Select a compute resource bound to the workspace.
        
        **Resource Group**
        
        Select the resource group to use for running the file.
        
    -   Notebook files must be run in a Personal Development Environment. For more information, see [Basic development in a Notebook](/help/en/dataworks/user-guide/basic-notebook-development#b5ab6e1f96704).
        
2.  **Run and debug the code**
    
    On the file details page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5487394571/p924533.png) icon in the toolbar to run the task.
    

### **Method 2: Submit to the Project Directory**

This method converts your file into a schedulable node, allowing you to configure it as a scheduled task and integrate it into the project workflow.

1.  **Start the submission process**
    
    In your Personal Directory, find the file you want to submit to the Project Directory and double-click the filename to open its details. In the toolbar at the top of the file, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5487394571/p924536.png) icon to submit the file to the Project Directory.
    
2.  **Configure submission parameters**
    
    **Parameter**
    
    **Description**
    
    **Select node type**
    
    Select the type of node to create from the file. The system automatically selects a node type that matches the current file type.
    
    -   **SQL file**: Submitted as a MaxCompute SQL node by default.
        
    -   **Notebook file**: Submitted as a Notebook node by default.
        
    -   **Python file**: Submitted as a Python node by default.
        
    -   **Shell file**: Submitted as a Shell node by default.
        
    
    **Select the path for the node**
    
    Select a path for the node in the Project Directory.
    
    **Confirm the node name**
    
    Use the original filename for the node or define a new name.
    

### **Method 3: Submit Python files as resources or functions**

Data Studio allows you to submit `.py` files from your Personal Directory as MaxCompute resources or functions for use in data development nodes.

1.  **Start the submission process**
    
    In your Personal Directory, find the `.py` file you want to submit. Double-click the filename to open its details. In the toolbar at the top of the file, click the dropdown menu next to the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5487394571/p924536.png) icon and select **Submit As Function** or **Submit As Resource**.
    
2.  **Configure submission parameters**
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    -   If you select **Submit As Function**, the type defaults to `MaxCompute Function`.
        
    -   If you select **Submit As Resource**, the type defaults to `MaxCompute Python`.
        
    
    **Path**
    
    The default path is the root directory (`/`). To use a different path, you must first create the directory in [Resource Management](/help/en/dataworks/user-guide/resource-management-of-data-studio/).
    
    **Submission Type**
    
    -   **New**: Creates a new function or resource at the specified path in Resource Management. When you select this option, you must configure a **Name** for the resource or function.
        
    -   **Associate With Existing File**: Associates with an existing resource or function. When you select this option, you must configure the **Existing Resource**.
        
        -   When associating with an existing function, the Python code in the current `.py` file replaces the original function's **Code**.
            
        -   When associating with an existing resource, the current `.py` file replaces the original resource's **File Content**.
            
    
3.  Click **Confirm** and follow the on-screen instructions.
    
    -   If you select **New** as the **Submission Type**, you are redirected to the creation page for the corresponding resource or function.
        
    -   If you select **Associate With Existing File** as the **Submission Type**, you are redirected to the edit page for the existing function or resource.
        
    
    For detailed descriptions of MaxCompute function and resource configuration parameters, see [MaxCompute resources and functions](/help/en/dataworks/user-guide/maxcompute-resources-and-functions).
