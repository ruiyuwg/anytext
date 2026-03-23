This topic describes how to install and use the Alibaba Cloud CLI extension for Visual Studio Code (VS Code). In this example, the `DescribeInstances` operation of Elastic Compute Service is called by using the Alibaba Cloud CLI extension in the VS Code editor.

## **Prerequisites**

1.  Alibaba Cloud CLI is installed, and the profile information is configured for Alibaba Cloud CLI. For more information about how to install Alibaba Cloud CLI and configure the profile information, see [Use Alibaba Cloud CLI to call API operations](/help/en/cli/quickly-start-using-alibaba-cloud-cli).
    
2.  The `_AliyunECSReadOnlyAccess_` permission is granted to the Resource Access Management (RAM) user that you use to access Alibaba Cloud CLI.ECS
    

## **Overview**

To use the Alibaba Cloud CLI extension to call the `DescribeInstances` operation of ECS in the VS Code editor, perform the following steps:

1.  Install the Alibaba Cloud CLI extension, which is named `Alibaba Cloud CLI Tools`.
    
2.  Create a file with the file name extension `.aliyun` and write the command for calling the `DescribeInstances` operation in the file.
    
3.  Select the command that you want to run and run the command in the editor or on the terminal.
    

## **Step 1: Install the Alibaba Cloud CLI extension**

## Install the extension from the marketplace

1.  In the left-side activity bar of the VS Code editor, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850262.png) icon.
    
2.  Enter `Alibaba Cloud CLI Tools` in the search box. Select Alibaba Cloud CLI Tools from the search results and click **Install**.
    

## Install the extension from a browser

1.  Visit the official page of [Alibaba Cloud CLI Tools](https://marketplace.visualstudio.com/items?itemName=alibabacloud-openapi.aliyuncli) in the marketplace in a browser and click **Install**. You are navigated to the Alibaba Cloud CLI extension page in the VS Code editor.
    
2.  Click **Install**.
    

After the Alibaba Cloud CLI extension is installed, the icon and current configuration of the Alibaba Cloud CLI extension are displayed in the bottom status bar. You can click the icon to configure the profile information for the extension.

## **Step 2: Write a command**

1.  In the VS Code editor, choose **File** > **New File**. In the dialog box that appears, enter `example.aliyun` to create a file with the file name extension `.aliyun`.
    
    **Note**
    
    When you write code in the `.aliyun` file, the Alibaba Cloud CLI extension provides command completion hints. This greatly improves your coding efficiency.
    
    ## Auto completion for commands
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850349.png)
    
    ## Auto completion for methods
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850383.png)
    
    ## Auto completion for parameters
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850393.png)
    
2.  Write the following command based on the hints and specify the parameters as needed.
    
    ```
    aliyun ecs DescribeInstances --InstanceIds "['i-bp118piqciobxjkb****']"
    ```
    

## **Step 3: Run the command**

After a command is written, you can run the command on the terminal or in the editor.

## Run the complete command on the terminal

Click **run** above the command that you want to run to open the terminal and run the complete command.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850574.png)

## Run the selected part of the command on the terminal

1.  Press and hold the left mouse button to select the part of the command that you want to run. Right-click the selected part.
    
2.  Choose **Alibaba Cloud CLI** > **Run Line in Terminal** to open the terminal and run the selected part of the command.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850690.png)
    

## Run the selected part of the command in the editor

1.  Press and hold the left mouse button to select the part of the command that you want to run. Right-click the selected part.
    
2.  Choose **Alibaba Cloud CLI** > **Run Line in Editor** to run the selected part in the VS Code editor.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1802540371/p850716.png)
