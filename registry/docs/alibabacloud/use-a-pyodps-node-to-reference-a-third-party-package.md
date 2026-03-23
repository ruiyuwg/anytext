If the standard PyODPS features do not meet your complex business requirements, you can reuse existing Python code or use open source libraries. DataWorks offers two methods to extend data processing capabilities. You can load custom scripts by referencing them as resources, or you can integrate powerful third-party packages by configuring the runtime environment with a custom image or O&M Assistant. This topic describes how to call custom Python scripts and use open source packages in DataWorks PyODPS nodes.

## Use cases

Select the appropriate method based on your environment and requirements.

**Case**

**Resource group type**

**Solution**

Depends on open source third-party packages

Serverless resource group

[Install open source packages using a custom image](#be936c9266qx0)

Exclusive resource group for scheduling

[Install open source packages using O&M Assistant](#9573879c5c044)

Depends only on custom `.py` script files

Serverless resource group or exclusive resource group for scheduling

[Reference custom Python resources](#b8228878752b8)

The following figure shows the main process for each solution.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146867671/CAEQUxiBgMCIu_3H3BkiIGQ5NTNmMDJmNTY0NjQzZmE5NjVjZmZiMTBmMGI4NjUx5736475_20250919195314.093.svg)

## Preparations

Before you start, you must understand the following two key concepts to determine which configuration method to use.

#### **Concept description**

1.  **Node type: PyODPS 2 vs. PyODPS 3**
    
    -   **PyODPS 2**: Based on the Python 2.7 environment.
        
    -   **PyODPS 3**: Based on the Python 3.7+ environment.
        
    -   **Recommendation**: We strongly recommend that you use PyODPS 3 because official support for Python 2 has ended. This topic uses PyODPS 3 as the primary example.
        
2.  **Resource group type:**
    
    -   [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) (recommended): This type of resource group is elastic and maintenance-free. You can use [custom images](/help/en/dataworks/user-guide/custom-image) to manage third-party dependencies. This solution is powerful and flexible.
        
    -   [Exclusive resource groups for scheduling](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-scheduling#task-2494507) (not recommended): You must purchase and maintain ECS servers in advance. Resources cannot be elastically scaled. Installing dependencies using [O&M Assistant](/help/en/dataworks/user-guide/use-the-maintenance-assistant-feature#concept-2347122) has many restrictions and may lead to dependency conflicts.
        

#### **Determine resource group type**

In the [DataWorks console](https://dataworks.console.aliyun.com/), go to the **Resource Group** page in the **Workspace Details** panel to view the type of resource group that is attached to your workspace.

-   If the type is **General-purpose Type**, you are using a serverless resource group.
    
-   If the type is **Data Scheduling**, you are using an exclusive resource group for scheduling.
    

## Install open source packages using a custom image

**Important**

This method applies to serverless resource groups.

This section guides you through a complete end-to-end case. You will create a custom environment that contains the `pendulum` package. Then, you will call it in a PyODPS 3 node to obtain and format the current time in a specific time zone.

#### **Step 1: Create a custom image that contains** `**pendulum**`

Custom images are used to prepare the runtime environment for serverless resource groups.

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the navigation pane on the left, click **Image Management**.
    
2.  Click the **Custom Images** tab.
    
3.  In the upper-left corner, click **Create Image**. On the page that appears, configure the following key parameters.
    
    **Parameter**
    
    **Description**
    
    **Image Name**
    
    The name of the custom image. For example, `pyodps3_with_pendulum`.
    
    **Reference Type**
    
    Select **DataWorks Official Image**.
    
    **Image Name/ID**
    
    From the drop-down list, select the official DataWorks image **dataworks\_pyodps\_task\_pod**.
    
    **Supported Task Types**
    
    Select the **PyODPS 3** task type.
    
    **Installation Package**
    
    Select **Python3**, and then select the **pendulum** package from the drop-down list.
    
    > To install a non-built-in open source package, you can install it manually in Script mode. For more information about configuration methods, see [Create custom image parameters](/help/en/dataworks/user-guide/custom-image#e82e56b21cdbf).
    
    **Important**
    
    If you install open source packages from the Internet, the VPC that is attached to the serverless resource group must [have public network access enabled](/help/en/dataworks/user-guide/advanced-case-analysis-of-best-selling-category-of-commodity-orders#2d0f5eeb03l6k).
    
4.  Click **OK** to create the custom image.
    
5.  On the **Custom Images** page, test and then deploy the target image. You can deploy the image only after it passes the test.
    
6.  Find the target image, and in the **Actions** column, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4899001271/p799705.png)** > **Change Workspace** to **associate** the custom image to a workspace.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0540368571/p1009180.png)
    

#### **Step 2: Create and configure a PyODPS 3 node**

1.  In the navigation pane on the left, click **Data Development And O&M** > **Data Development**. From the drop-down list, select the target **workspace** and click **Go to Data Development**.
    
2.  Under an existing **business flow**, create a **PyODPS 3** node. For example, you can name the node `pyodps3_pendulum_test`.
    
3.  In the code editor for the `pyodps_pendulum_test` node, enter the following **Python 3** code:
    
    ```
    # Pendulum is pre-installed in the custom image and can be imported directly. (Python 3 syntax)
    import pendulum
    print("Start testing the third-party package pendulum...")
    try:
        # Use pendulum to get the current time in the "Asia/Shanghai" time zone.
        shanghai_time = pendulum.now('Asia/Shanghai')
    
        # Print the formatted time and time zone information.
        print(f"Successfully imported the 'pendulum' package.")
        print(f"The current time in Shanghai is: {shanghai_time.to_datetime_string()}")
        print(f"The corresponding time zone is: {shanghai_time.timezone_name}")
    
        print("\nTest passed! The PyODPS node successfully called the third-party package.")
    except Exception as e:
        print(f"Test failed. An error occurred: {e}")
    ```
    

#### **Step 3: Test and verify the result**

1.  In the toolbar, click the ![**](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9912707471/p100471.png) icon to run the code. In the **Parameters** dialog box, select the `pyodps3_with_pendulum` **image** that you created.
    
    **Important**
    
    If you cannot find the target image, make sure that the image is attached to the current workspace. For more information, see Substep 6 in Step 1.
    
2.  View the run logs at the bottom of the page. The following output indicates that the `pendulum` package was successfully called.
    
    ```
    Start testing the third-party package pendulum...
    Successfully imported the 'pendulum' package.
    The current time in Shanghai is: 2025-09-27 15:45:00
    The corresponding time zone is: Asia/Shanghai
    Test passed! The PyODPS node successfully called the third-party package.
    ```
    

#### **Step 4: Deploy the PyODPS 3 node**

After you complete the test, go to **Properties** > **Resource Group** on the right side of the node editor. Select the prepared **serverless resource group** and change the image to the custom **image** `pyodps3_with_pendulum`. Then, deploy the node to the Operation Center.

## **Install open source packages using O&M Assistant**

**Important**

This method is for exclusive resource groups for scheduling, which are no longer recommended. We recommend that you migrate to serverless resource groups, which are more powerful and flexible.

1.  Log on to the [DataWorks workspace list](https://dataworks.console.aliyun.com/workspace/list). In the top navigation bar, switch to the correct region. Find the target workspace and click **Details** in the **Actions** column to go to the workspace product page.
    
2.  In the navigation pane on the left, click **Resource Group**. Find the associated exclusive resource group for scheduling and, in the **Actions** column, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3844907371/p889335.png)** > **O&M Assistant**.
    
3.  On the **O&M Assistant** page, click **Create Command** in the upper-left corner.
    
4.  Enter the appropriate command based on your Python version.
    
    -   **Python 3 (PyODPS 3)**: Keep the other default options. From the drop-down list, select the **pendulum** installation package under the Python3 package type.
        
    -   **Python 2 (PyODPS 2)**: Select the Manual Input mode and enter the command content.
        
        ```
        pip install --upgrade pip
        pip install "pendulum<2.0"
        ```
        
5.  On the **O&M Assistant** page, click **Run Command** in the Operation column. After the command is successfully executed, you can directly use `import pendulum` in the corresponding PyODPS node.
    

## **Reference custom Python resources**

If you only want to call a function from another `.py` file that you wrote, perform the following steps:

1.  **Create a Python resource**:
    
    1.  On the Data Development page, right-click the target **business flow** and select **Create Resource** > **MaxCompute** > **Python**.
        
    2.  In the **Create Resource** dialog box, enter a **Name** for the resource (for example, `my_utils.py`) and click **Create**.
        
    3.  Enter the following code in the Python resource.
        
        ```
        # my_utils.py Python 3 syntax
        def say_hello(name):
            print(f"Hello, {name}! This is from my_utils module.")
        ```
        
    4.  **Save** and **submit** the resource.
        
2.  **Create a PyODPS 3 node and reference the resource**:
    
    -   In the target business flow, right-click **MaxCompute**, select **Create Node** > **PyODPS 3**, and create the node.
        
    -   In the node, reference the resource using `##@resource_reference{"my_utils.py"}`. The code is as follows:
        
        ```
        ##@resource_reference{"my_utils.py"}
        import sys
        import os
        #Add the current directory where the resource is located to the search path of the Python interpreter.
        sys.path.append(os.path.dirname(os.path.abspath('my_utils.py')))
        #Now you can import and use it like a normal module.
        import my_utils
        my_utils.say_hello("DataWorks")
        ```
        
3.  **Run** the node. The output **"Hello, DataWorks! This is from my\_utils module."** appears in the log.
    

## FAQ

-   **When I manually install a package using a command, why does the custom image test not progress for a long time?**
    
    -   If the runtime environment of the task depends on a third-party package on the Internet, the VPC that is attached to the serverless resource group must have public network access enabled. For more information, see [Enable public network access for a resource group](/help/en/dataworks/user-guide/advanced-case-analysis-of-best-selling-category-of-commodity-orders#2d0f5eeb03l6k).
        
    -   You can also try switching to a different Python package source, such as https://mirrors.aliyun.com/pypi/simple/. Alibaba Cloud mirrors do not require public network access.
        
-   **What can I do if importing a third-party package fails?**
    
    1.  Make sure that the custom image is deployed successfully.
        
    2.  Make sure that the task type (PyODPS 2 or 3) supported by the image matches the type of node that you created.
        
    3.  Make sure that the custom image is correctly selected in the scheduling configuration of the PyODPS node.
        
        > You cannot select a public resource group.
        
    4.  Check whether the installed package version is compatible with your Python version. For example, `pendulum` 2.0 and later versions do not support Python 2.
        

## **References**

-   [Basic operations of MaxCompute PyODPS](/help/en/maxcompute/user-guide/basic-operations/#concept-wnh-bmf-cfb)
    
-   [Develop a PyODPS 3 task](/help/en/dataworks/user-guide/create-a-pyodps-3-node)
    
-   [Develop a PyODPS 2 task](/help/en/dataworks/user-guide/create-a-pyodps-2-node)
    
-   [Custom images in DataWorks](/help/en/dataworks/user-guide/custom-image)
