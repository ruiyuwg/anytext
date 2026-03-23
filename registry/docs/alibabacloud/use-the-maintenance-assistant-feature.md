Install third-party packages for tasks running on exclusive resource groups for scheduling using O&M Assistant. Use one-click installation for common packages or Shell commands for custom packages.

## **Usage notes**

-   Resource groups: [Exclusive resource groups for scheduling](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-scheduling) only.
    
-   Permissions required: You need one of the following policies: **AliyunDataWorksFullAccess** or **ModifyResourceGroup**.
    
    > For more information, see [Product and console access control: RAM Policy](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#task-2154716).
    
-   Packages installed on an exclusive resource group for scheduling affect all tasks running on that group. Version conflicts or compatibility issues may impact all tasks. Carefully select and test packages before installation.
    

## **Quotas and limits**

-   **Command management**: You cannot modify existing installation commands. Create new commands or delete existing ones.
    
-   **Applicable node types**: Python packages installed via O&M Assistant work only for Python nodes (such as PyODPS 2 or PyODPS 3) running on the resource group.
    
    > For MaxCompute Python UDFs, see [UDF example: Use third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs#task-1994991).
    
-   **Command support**: Custom commands do not support `pip` commands.
    

## Access O&M Assistant

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, click **Resource Group** to go to the Resource Groups page.
    
2.  On the **Exclusive Resource Groups** tab, find the resource group for **Data Scheduling**, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4183405071/p697470.png) icon next to the **Resource Group**, and select **O&M Assistant**.
    

## Install a third-party package

### **Create an installation command**

1.  On the O&M Assistant page, click **Create Command** and select an installation method.
    
    ## Quick installation
    
    Use this method for common packages preset in DataWorks.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2977129571/p1012859.png)
    
    Parameters:
    
    **Parameter**
    
    **Description**
    
    **Command Name**
    
    The custom identifier for the command.
    
    **Command Type**
    
    Select **Quick Installation**.
    
    DataWorks generates the Shell installation command automatically.
    
    **Package to Install**
    
    Select the package and version to install. DataWorks supports common packages for **Python 2**, **Python 3**, and **Yum**, including:
    
    -   **Aliyun-python-sdk-core**: Core library for Alibaba Cloud Python SDK
        
    -   **NumPy**: High-performance multi-dimensional arrays and numerical computing
        
    -   **Pandas**: Data structures and analysis tools for structured data.
        
    
    See the interface for the complete list.
    
    **Generated Shell Script**
    
    DataWorks auto-generates the installation command.
    
    Example: Selecting **aliyun-python-sdk-core** generates `pip install aliyun-python-sdk-core`.
    
    **Timeout**
    
    Maximum execution time in seconds. The command stops if it times out.
    
    ## Manual installation
    
    Use custom Shell commands when built-in packages don't meet your needs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2977129571/p1012860.png)
    
    **Parameter**
    
    **Description**
    
    **Command Name**
    
    The custom identifier for the command.
    
    **Command Type**
    
    Select **Manual Installation**.
    
    **Command Content**
    
    Enter the command to execute. Example: `yum install -y git`.
    
    **Important**
    
    -   Custom commands cannot use `pip` commands.
        
    -   Test commands before executing in production.
        
    -   Reference packages using absolute paths.
        
    
    **Installation Directories**
    
    Directory paths the command can access. Separate multiple paths with semicolons (`;`). DataWorks adds these to a whitelist for access.
    
    -   Install to `/home/` or non-`/home/` directories. For `/home/` installations, use: `/home/admin/usertools/tools/`.
        
    -   Default: `/home/admin/usertools/tools/`.
        
    
    **Timeout**
    
    Maximum execution time in seconds. The command stops if it times out.
    
2.  Click **OK** to save the command configuration.
    

### **Execute the installation command**

On the O&M Assistant page, find your command and click **Run command** in the **Actions** column. The system generates a command execution record.

### View execution results

In the command record, view **Execution Status** and **Command Content**. Click **View Result** in the **Actions** column to analyze logs if the command fails. After successful installation, the package is available in tasks running on the current resource group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2977129571/p1012998.png)

### **View the environment configuration**

On the O&M Assistant page, click **View Detailed Environment Configuration** in the upper-left corner to see installed packages, versions, and status for the current resource group.

## Use installed packages

#### New version of Data Studio:

1.  **Go to Data Studio**: Go to the [DataWorks Workspaces page](https://dataworks.console.aliyun.com/workspace/list), switch to your target region, find your workspace, and click **Shortcuts** > **DataStudio**.
    
2.  **Configure the resource group**: In your task node, click **Scheduling** in the right pane.
    
    -   **Resource Group**: Select **Exclusive Resource Group for Scheduling**.
        
        > If the target resource group is not displayed, go to the [Resource Group page](https://dataworks.console.aliyun.com/resource/list) and click **Associate Workspace**.
        
3.  **Debug the node**: In the **Run Configuration** pane, configure **Computing Resource**, **Resource Group**, and **Script Parameters**, then click **Running Duration** in the toolbar.
    
4.  **Publish the node**: Click **Publish** in the toolbar to deploy to production.
    

#### Legacy version of DataStudio:

1.  **Go to DataStudio:** Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview), switch to your region, click **Data Development and O&M** > **Data Development**, select your workspace, and click **Go to Data Development**.
    
2.  **Configure the resource group**: In your task node, click **Properties** in the right pane.
    
    -   **Resource Group**: Select **Exclusive Resource Group for Scheduling**.
        
        > If the target resource group is not displayed, go to the [Resource Group page](https://dataworks.console.aliyun.com/resource/list) and click **Associate Workspace**.
        
3.  **Debug the node**: Click **Run with Parameters** (![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3813353471/p936284.png)), configure **Resource Group Name**, then click **Run**.
    
4.  **Publish the node**: Click **Save** and **Submit** to deploy to production.
    

## **References**

For detailed examples of using installed packages:

-   [Use third-party packages and custom Python scripts in PyODPS nodes](/help/en/dataworks/user-guide/use-a-pyodps-node-to-reference-a-third-party-package#task-1954895)
    
-   [Use a PyODPS node for Jieba Chinese tokenization](/help/en/dataworks/user-guide/use-a-pyodps-node-to-segment-chinese-text-based-on-jieba)
