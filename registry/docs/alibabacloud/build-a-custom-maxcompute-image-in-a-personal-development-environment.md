DataWorks lets you simultaneously generate a MaxCompute custom image when you create a custom image in a personal development environment. This simplifies the use of MaxCompute custom images in DataWorks nodes, such as PyODPS 3 and Notebook nodes. This topic describes how to build and use MaxCompute custom images in DataWorks.

## **Background information**

The [MaxCompute image management](/help/en/maxcompute/user-guide/custom-image) feature lets you create custom images. These images can be directly referenced in scenarios such as SQL UDF, PyODPS, and MaxFrame development, eliminating the need for complex resource packaging and uploading. In DataWorks, you can build a MaxCompute image at the same time you build a DataWorks image from a personal development environment.

## **Prerequisites**

-   You have [created a workspace that **uses the new version of Data Studio**](/help/en/dataworks/user-guide/create-a-workspace) and [attached MaxCompute computing resources](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#67f03da03fw07).
    
-   You have [created a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and **associate it to the workspace**.
    

## **Create a MaxCompute custom image**

### **Preparations**

-   You have activated Alibaba Cloud Container Registry (ACR) and created a **Standard Edition** or higher version of an ACR instance. For more information, see [Create an Enterprise instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance), [Create a namespace](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-ayi-138-9w1), and [Create an image repository](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-saf-rbb-nu4).
    
-   You have configured access control for the ACR instance over a virtual private cloud (VPC). For more information, see [Configure access control for a VPC](/help/en/acr/user-guide/configure-access-over-vpcs).
    
-   You have the required permissions to manage ACR and MaxCompute custom images. For more information, see [Custom images](/help/en/maxcompute/user-guide/custom-image).
    

### **Notes**

When you create a MaxCompute custom image:

-   **Image size**: The maximum size of a single MaxCompute image is `10 GB`.
    
-   **Number of images**: A single MaxCompute tenant can upload a **maximum** of `10` images.
    

When you use a MaxCompute image, note that DataWorks builds MaxCompute images based on a Python 3.11 environment. To run a MaxCompute image built by DataWorks, you must ensure that your Python environment is version `3.11`.

### **Create a personal development environment instance**

Go to Data Studio and create a personal development environment instance. You must use the `**dataworks-maxcompute:py3.11-ubuntu20.04**` image to simultaneously create a MaxCompute custom image.

1.  Go to Data Studio.
    
    1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
        
    2.  On the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2208852471/p854101.png) icon in the navigation pane on the left to go to the **Data Studio** page.
        
2.  Go to the personal development environment creation page. At the top of the page, click **Personal development environment** and create a personal development environment instance.
    
    -   If you do not have a personal development environment instance, click **New Instance** to create one.
        
    -   If you have a personal development environment instance, click **Management** **Environment**. Then, in the list of personal development environment instances, click **New Instance**.
        
3.  Configure the personal development environment. When you create a MaxCompute custom image in DataWorks, you must configure the following parameters for the personal development environment. For information about other parameters, see [Create a personal development environment instance](/help/en/dataworks/user-guide/personal-development-environment/).
    
    -   **Image Configuration**: Select `**dataworks-maxcompute:py3.11-ubuntu20.04**`.
        
        **Note**
        
        -   You must select the `**dataworks-maxcompute:py3.11-ubuntu20.04**` image to create a MaxCompute custom image.
            
        -   A DataWorks custom image built from the `**dataworks-maxcompute:py3.11-ubuntu20.04**` base image can be used to develop MaxFrame jobs in DataWorks Notebook, General Python, and Shell nodes.
            
        
    -   **Network Settings**: Select the VPC that is configured for the ACR instance. This ensures that the personal development environment instance can push the image to the ACR instance.
        

### **Configure the image environment**

In the terminal of your personal development environment instance, install the third-party dependencies required for MaxCompute development. This topic uses `jieba` as an example.

1.  At the top of the Data Studio page, click **Personal development environment** and then click the personal development environment instance that you created in [Create a personal development environment instance](#d854dfbd54xu4).
    
2.  In the toolbar at the bottom of Data Studio, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0844208471/p955554.png) icon on the left to open the terminal.
    
3.  In the terminal of the personal development environment, run the following commands to download the `jieba` third-party dependency and verify its installation.
    
    ```
    ## Install the third-party dependency.
    pip install jieba;
    
    ## View the third-party dependency.
    pip show jieba;
    ```
    

### **Save the custom image**

Create a DataWorks image from your personal development environment and choose to create a MaxCompute image at the same time. The system automatically uploads the generated image to the ACR instance that is managed by the same account.

1.  Go to the personal development environment instance management page.
    
    1.  At the top of the page, click the name of the personal development environment instance that you created, which is displayed in the **Personal development environment** section.
        
    2.  In the dialog box that appears, select **Management Environment** to go to the **Personal Development Environment Instances** page.
        
2.  Go to the image creation page.
    
    1.  On the personal development environment instance page, find the personal development environment instance that you created.
        
    2.  In the **Actions** column of the instance, click **Create Image**.
        
3.  Configure the image as described in the following table. After you complete the configuration, click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Image Name**
    
    The custom name of the DataWorks image. If the image is synced to MaxCompute, the name defined here is used as the name of the MaxCompute image. Example: `image_jieba`.
    
    **Image Instance**
    
    Select a Standard Edition or higher ACR instance. For more information about how to create an ACR instance, see [Create an Enterprise instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance).
    
    **Note**
    
    Only **Standard Edition** or higher ACR instances can be used to build MaxCompute custom images.
    
    **Namespace**
    
    Select a namespace for the ACR instance. For more information about how to create a namespace, see [Create a namespace](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-ayi-138-9w1).
    
    **Image Repository**
    
    Select an image repository for the ACR instance. For more information about how to create an image repository, see [Create an image repository](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#title-saf-rbb-nu4).
    
    **Image Version**
    
    The custom image version.
    
    **Sync To MaxCompute**
    
    In this example, select **Yes**. After you select this option, the image is built as a MaxCompute image when the DataWorks image is published.
    
    **Note**
    
    This option is related to the **Image Instance** that you select. You can select ACR image instances whose **Instance Type** is **Standard Edition** or higher. Other instances cannot be selected by default.
    
    **Task Type**
    
    Select the task types for which the DataWorks image can be used. In this example, you can select to use the image for Notebook development.
    
    -   **Notebook**
        
    -   **Python**
        
    -   **Shell**
        
    
4.  Check the image save status.
    
    On the list of instances, find the image column for your personal development environment to view the save status.
    
5.  Click **Confirm** to create the image.
    
6.  To the right of the personal development environment instance, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0844208471/p959457.png) icon and select the **Image** checkbox to display the column.
    
7.  Wait for the image to be created. Hover the mouse over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0844208471/p955621.png) icon to the right of **Saved**, and click **Here** in the pop-up window to go to the **Image Management** page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0844208471/p955617.png)
    

### **Publish the custom image**

After the image from the personal development environment instance is saved in Data Studio, publish the custom image. This operation syncs the image from the ACR instance to DataWorks and MaxCompute, which generates both a DataWorks custom image and a MaxCompute custom image.

1.  Go to the [DataWorks workspace list](https://dataworks.console.aliyun.com/workspace/list) page and switch to the destination region in the top navigation bar.
    
2.  In the navigation pane on the left, go to the **Image Management** > **Custom Images** tab. **Test** the destination image. After the test is **successful**, **Publish** the image.
    
    **Note**
    
    -   When you test a custom image, select a Serverless resource group for **Test Resource Group**.
        
    -   The **VPC that is attached to the Serverless resource group** selected for testing and publishing must be the same as the **VPC configured in ACR**.
        
    -   If your custom image obtains third-party packages from the Internet and the test fails, check whether the VPC that is attached to the **Test Resource Group** can access the Internet. To configure Internet access for a VPC, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).
        
    
3.  Refresh the page and confirm that the **Publishing Status** of the image in the image list changes to **Published**.
    
4.  In the **Actions** column of the destination image, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4899001271/p799705.png)** > **Change Workspace** to attach the custom image to a workspace.
    

### **Confirm the MaxCompute image status**

Publishing a DataWorks image automatically creates a corresponding MaxCompute image. Once the image status on the **Image Management** > **Custom Images** tab in the DataWorks console changes to Published, you can go to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/cn-shanghai/project-list). Follow the steps in [Add a custom image to MaxCompute](/help/en/maxcompute/user-guide/custom-image#1473184190bja) to view the new MaxCompute custom image.

## Use a **MaxCompute** custom image

### **Notes**

-   To use MaxFrame for development, the `MaxFrame` service must be included in the image. To run a MaxCompute custom image in DataWorks, the image must be built in a `Python 3.11` environment.
    
-   To use a MaxCompute custom image for MaxFrame job development in DataWorks, make sure that the task runs in a DataWorks image that has a MaxFrame runtime environment. The requirements are as follows:
    
    -   **Notebook node**: Select the official image `dataworks-notebook:py3.11-ubuntu22.04`, or a DataWorks custom image built from this official image or the `dataworks-maxcompute:py3.11-ubuntu20.04` image.
        
    -   **PyODPS 3 node**: Select the official image `dataworks_pyodps_py311_task_pod`, or a DataWorks custom image built from this official image.
        
    -   **Python node**: [Create a personal development environment instance that has the MaxFrame service](#d854dfbd54xu4) based on the `dataworks-maxcompute:py3.11-ubuntu20.04` image, and [save it as a DataWorks custom image that supports Python task types](#91a56a09d3g9d).
        
    -   **Other nodes:** Make sure that the DataWorks custom image contains a MaxFrame runtime environment and is built in a `Python 3.11` environment.
        

### **Go to Data Development**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  On the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2208852471/p854101.png) icon in the navigation pane on the left to go to the **Data Development** page.
    

### **Use the image in a Notebook node**

The following example shows how to use a MaxCompute custom image in a Notebook node for MaxFrame development. This example uses the `jieba` package from the MaxCompute custom image.

1.  Create a Notebook node.
    
    1.  At the top of the page, click **Personal development environment** and select the personal development environment instance that you created.
        
    2.  To the right of Workspace Directories, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3390150471/p859711.png) icon and choose **Create Node** > **Notebook**. The **Create Node** dialog box appears.
        
    3.  In the **Create Node** dialog box, enter a **Name** for the node and click **OK** to go to the node editing page.
        
2.  Edit the code for the Notebook node.
    
    ```
    # -*- coding: utf-8 -*-
    from odps import ODPS
    from maxframe.session import new_session
    import maxframe.dataframe as md  # Make sure that the maxframe.dataframe module is correctly imported.
    from maxframe import config
    
    # Prepare the dataset.
    test_data = [
        "Grass growing on the old plain"
    ]
    # Define a function to process data using the jieba package from the MaxCompute custom image.
    # Use the MaxCompute custom image.
    def image_test():
        config.options.sql.settings = {
            "odps.session.image": "image_jieba"  # In this example, the MaxCompute image is named image_jieba. You can view the image name in the MaxCompute console.
        }
        def process(row):
            import jieba
            result = jieba.cut(row, cut_all=False)
            return "/".join(result)
        # Establish a MaxFrame connection.
        odps = %odps
        session = new_session(odps) 
        # Print the Logview URL to view execution details.
        logview = session.get_logview_address()
        print("logview:", logview)
        # Create a MaxFrame DataFrame.
        # Encapsulate local test data, such as ["Grass growing on the old plain"], into a MaxFrame DataFrame object.
        df = md.DataFrame(test_data, columns=["raw_text"])
        # Apply the tokenization function to process the data in the DataFrame object.
        df["processed_text"] = df["raw_text"].map(process, dtype='object')
        print("Output:",df.execute().fetch())
    image_test()
    print("Data processing completed!")
    ```
    
3.  On the left side of the node editing page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0844208471/p955642.png) icon. In the dialog box that appears, select a `Python 3.11` version for the **Kernel**. Run the node and view the log information.
    

### **Use the image in a PyODPS 3 node**

The following example shows how to use a MaxCompute custom image in a PyODPS 3 node for MaxFrame development. This example uses the `jieba` package from the MaxCompute custom image.

1.  Create a PyODPS 3 node.
    
    1.  To the right of **Workspace Directories**, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3390150471/p859711.png) icon and choose **Create Node** > **MaxCompute** > **PyODPS 3**. The **Create Node** dialog box appears.
        
    2.  In the **Create Node** dialog box, enter a **Name** for the node and click **OK** to go to the node editing page.
        
2.  Edit the code for the PyODPS 3 node.
    
    ```
    # -*- coding: utf-8 -*-
    from odps import ODPS, options
    from odps.df import DataFrame
    import pandas as pd
    # Prepare table data.
    options.sql.settings = {"odps.isolation.session.enable": True}
    # Create a test table.
    table = o.create_table('jieba_work_tb', 'col string', if_not_exists=True)
    # Add instance data.
    instance = o.run_sql("insert into table jieba_work_tb values ('Grass growing on the old plain')")
    instance.wait_for_success()
    # Define a function to process data using the jieba package from the MaxCompute custom image.
    def image_test():
        def process(row):
            import jieba
            result = jieba.cut(row, cut_all=False)
            return "/".join(result)
        #  Encapsulate the table as a DataFrame object.
        df = o.get_table("jieba_work_tb").to_df()
        # Apply the tokenization function to process the data in the DataFrame object.
        df = df.col.map(process).execute(image='image_jieba') # In this example, the MaxCompute image is named image_jieba. You can view the image name in the MaxCompute console.
        print("Output:",df)
    image_test()
    print("Data processing completed!")
    ```
    
3.  Configure the PyODPS 3 node.
    
    On the right side of the node editing page, click **Debugging Configurations** and configure the node based on the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Computing Resource**
    
    Select the MaxCompute computing resource that you attached.
    
    **Resource Group**
    
    Select the Serverless resource group that you attached.
    
    **Image**
    
    Select `**dataworks_pyodps_py311_task_pod:prod_20241210**`.
    
4.  In the toolbar at the top of the node editing page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0844208471/p955642.png) icon to run the node.
