In the new version of Data Studio, you can create a custom image from your personal development environment. This image can be used for data studio in other personal development environments. This topic describes how to create an image from a personal development environment instance.

## **Background**

When you develop and test in a personal development environment, you may need to use various third-party dependencies. You can install and configure these dependencies in the current environment. You can also create a custom image of the current environment to share dependencies with other personal development environments and workspaces.

Images created from a personal development environment support `Notebook`, `Python`, and `Shell` task types. After an image is created, you cannot change its task type or other configurations.

## **Prerequisites**

-   A [virtual private cloud (VPC)](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) is created.
    
-   A [personal development environment instance](/help/en/dataworks/user-guide/personal-development-environment/#82145210b9ce8) is created and attached to a VPC.
    
-   The Alibaba Cloud Container Registry (ACR) service is activated:
    
    -   An [Enterprise instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance), a [namespace](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-ayi-138-9w1), and an [image repository](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-saf-rbb-nu4) are created, and [access control for the VPC](/help/en/acr/user-guide/configure-access-over-vpcs) is configured.
        
    -   [Cloud DNS PrivateZone](/help/en/privatezone/latest/subscribe-service#topic-2036625) is activated. For billing details, see [Product Billing](/help/en/dns/product-billing).
        

**Important**

-   The **VPC attached to the personal development environment instance**, [**the VPC attached to Alibaba Cloud Container Registry**](/help/en/acr/user-guide/cross-account-access-to-container-registry-service-enterprise-edition-instances-by-using-vpc-sharing-service), and the **VPC attached to the test resource group when you publish the image** must be the same.
    
-   If a program in your personal development environment needs to obtain third-party dependencies from the Internet, you must configure Internet access for the VPC. For more information, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).
    

## **Step 1: Access the personal development environment**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  At the top of the page, click Personal development environment to select an existing personal development environment instance.
    

## **Step 2: Create an image of a personal development environment instance**

1.  Before you create an image from a personal development environment instance, you **must enhance the personal development environment**.
    
    **Important**
    
    When you [enhance your personal development environment](#3c31314ad7zqr), you can [install open-source dependencies](#b0e1705984ol5) or [install third-party dependencies](#d3b948ed96dwn) to meet your business requirements.
    
2.  After you configure your personal development environment, click the **Personal development environment** drop-down list at the top of the page. Select **Management Environment** to open the instance list panel for your personal development environment.
    
3.  Create a custom image.
    
    Find the target instance in the list of personal development environment instances and click **Create Image** in the **Actions** column. Configure the **Image Instance**, **Namespace**, **Image Repository**, **Image Version**, and **Task Type** parameters as specified in the [Prerequisites](#3b8c0351f9rt9) section.
    
    **Parameter**
    
    **Description**
    
    **Image Name**
    
    The custom name of the DataWorks image.
    
    **Image Instance**
    
    Select an ACR instance. For more information about how to create an ACR instance, see [Create an Enterprise instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance).
    
    **Namespace**
    
    Select a namespace for the ACR instance. For more information about how to create a namespace, see [Create a namespace](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-ayi-138-9w1).
    
    **Image Repository**
    
    Select an image repository for the ACR instance. For more information about how to create an image repository, see [Create an image repository](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-saf-rbb-nu4).
    
    **Image Version**
    
    The custom version of the image.
    
    **Sync To MaxCompute**
    
    The default value is **No**.
    
    **Note**
    
    This option depends on the **Image Instance** that you select. This option is available for ACR image instances of **Standard Edition** or later. For other instance types, this option is unavailable by default.
    
    -   If you select Yes, a DataWorks custom image is generated by default. When the DataWorks image is published, it is also built as a MaxCompute image. For more information, see [Create a MaxCompute image from a personal development environment](/help/en/dataworks/user-guide/build-a-custom-maxcompute-image-in-a-personal-development-environment).
        
    -   If you select No, only a DataWorks custom image is generated. It is not built as a MaxCompute image.
        
    
    **Task Type**
    
    Select the task types that can use the DataWorks image that you are creating.
    
    -   **Notebook**
        
    -   **Python**
        
    -   **Shell**
        
    
4.  After completing the configuration, click **Confirm** to create the image.
    
    **Important**
    
    -   When you create an image, ensure that **the VPC attached to the personal development environment instance** and [**the VPC attached to Alibaba Cloud Container Registry**](/help/en/acr/user-guide/cross-account-access-to-container-registry-service-enterprise-edition-instances-by-using-vpc-sharing-service) are the same.
        
    -   The image creation process may take 1 to 5 minutes to complete, depending on the image size and network conditions.
        
    -   After the image is created, you **cannot modify the image** in Image Management.
        
    
5.  Wait for the image to be created.
    

## **Step 3: Publish the custom image**

After a custom image is created, go to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Navigate to the **Image Management** > **Custom Images** tab. Then, **Test** and **Publish** the target image. Note the following during testing and publishing:

-   When you test a custom image, select a Serverless resource group.
    
-   The **VPC attached to the Serverless resource group** that you select for testing and publishing must be the same as the **VPC configured in Alibaba Cloud Container Registry (ACR)**.
    
-   Only images that **pass the test** can be published.
    
-   If your custom image cannot download third-party packages from the Internet and the test times out, verify that the VPC attached to the **Test Resource Group** has Internet access. For more information about how to enable Internet access for a VPC, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).
    

## **Step 4: Modify the workspace to which the image belongs**

You can change the workspace to which an image belongs.

1.  On the **Image Management** > **Custom Images** tab of the DataWorks console, find the **published** custom image.
    
2.  Click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4899001271/p799705.png)** > **Change Workspace** in the **Actions** column to bind the custom image to a workspace.
    

## **Step 5: Use the custom image**

After you change the workspace to which the image belongs, you can navigate to that workspace. When you develop `Notebook`, `Python`, or `Shell` nodes in the workspace, you can configure the custom image for the nodes. The following steps use a Python node as an example.

1.  In the **Workspace Directories** pane on the left of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1801897371/p882180.png) icon and choose **Create Node** > **General** > **Python**.
    
2.  After you develop the node, click **Run Configuration** on the right. Configure the **Resource Group** and select the tool environment **Image** required for your Python code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1801897371/p882202.png)
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1801897371/p882217.png) icon to test the Python code.
    
4.  After the test is successful, click **Scheduling**. On the Scheduling Strategy tab, configure the **Image** for the **recurring schedule** of the Python node.
    
    **Note**
    
    -   The image specified in **Scheduling** must match the one in **Run Configuration**.
        
    -   You can configure an image for a Notebook node only in **Scheduling**.
        
    
5.  After completing the scheduling configuration, **Save** and **Publish** the Python node.
    

## **What to do next**

**Persistent image**: DataWorks lets you build custom images as persistent images. This eliminates the need to redeploy the image environment for each run. The same image environment is used each time a task node runs. This ensures a consistent runtime environment and reduces task runtime, computing costs, and traffic costs. For more information, see [5\. Build a persistent image](/help/en/dataworks/user-guide/custom-image#d5ddef0999cxy).

## **Appendix: Enhance a personal development environment**

The dependencies in the default personal development environment that DataWorks creates may not meet your code development requirements. You can install dependencies to enhance your personal development environment.

### **Install open-source dependencies**

You can install required open-source dependencies in your personal development environment instance. The following steps use the jieba dependency as an example.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2999467471/p952705.png) icon in the lower-left corner of the the Data Studio page to go to the **TERMINAL** tab.
    
2.  In the terminal, run the following command to install the jieba library.
    
    ```
    pip install jieba
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1980247471/p951900.png)
    
3.  After the jieba library is installed, you can create a `.py` file in the **Personal Directory** > **workspace** directory, add the following code to the file, and save it.
    
    ```
    import sys
    import jieba
    '''Get the system input parameter arg'''
    for arg in sys.argv:
        print(f"argv: {arg}")
    '''Call the jieba class to tokenize the input data and print the output'''    
    seg_list = jieba.cut(sys.argv[1], cut_all=False)
    print("Default Mode: " + "/ ".join(seg_list))
    print('finish')
    ```
    
    Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1980247471/p951904.png) to save the Python code after you finish editing.
    
4.  In the terminal, run the following command to run the Python file.
    
    ```
    python file_name.py "I am the big data governance platform document"
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1980247471/p951916.png)
    

A successful run indicates that the jieba library is installed in the personal development environment.

### **Install third-party dependencies**

## **Install by cloning a Python project using Git**

To clone a Python project using the `git clone` command, you must configure Internet access for your VPC. For more information, see [Configure an Internet NAT gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet#d1cdff6ee67fj).

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2999467471/p952705.png) icon in the lower-left corner of the the Data Studio page to go to the **TERMINAL** tab.
    
2.  In the terminal, run the following command to navigate to the workspace folder.
    
    ```
    cd /mnt/workspace
    ```
    
3.  Use the \`git clone\` command to clone the Python project from Git to the workspace folder.
    
    ```
    # When you clone the Git code, replace the URL with your own.
    git clone https://github.com/example/Example-Python.git
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1801897371/p877078.png)
    
4.  Install the cloned Python project.
    
    1.  Navigate to the cloned Python directory.
        
        ```
        cd Example-Python
        ```
        
    2.  Install the Python project.
        
        ```
        pip install .
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1801897371/p877090.png)
        

## **Install by uploading a Python project from your computer**

1.  Upload the Python project from your computer to the **Personal Directory** > **workspace** directory. Then, navigate to the Python project folder in the terminal.
    
    ```
    cd /mnt/workspace/"Python_code_folder"
    ```
    
2.  Run the following command to install the Python project.
    
    ```
    pip install .
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1801897371/p877067.png)
    

## **Install a Python program by uploading it from your computer**

To install a Python program in your personal development environment, perform the following steps.

1.  You can upload the compressed Python program package from your computer to the **Personal Directory** > **workspace** directory, and then use the terminal to decompress the package and view the Python compile path.
    
    ```
    cat 'decompressed_python_project_name' /bin/pip
    ```
    
2.  Create the Python compile path.
    
    ```
    #Create the Python compile path that you found.
    mkdir -p 'The Python compile path that you found'
    ```
    
3.  Move the decompressed folder to the Python compile path.
    
    ```
    mv 'decompressed_python_project_name' /'python_compile_path_found'
    ```
    
4.  You can replace the Python package with your Python program.
    
    ```
    for src in idle3 pydoc3 python3 python3-config pip3; do \
        dst="$(echo "$src" | tr -d 3)"; \
        [ -s "/usr/local/bin/$src" ]; \
        [ ! -e "/usr/local/bin/$dst" ]; \
        mv /usr/local/bin/$dst /usr/local/bin/${dst}_bak
        ln -svT "your_python_compilation_path/bin/$src" "/usr/local/bin/$dst"; \
    done
    ```
    

After the installation is complete, test and run the third-party dependency in the personal development environment to verify the installation.
