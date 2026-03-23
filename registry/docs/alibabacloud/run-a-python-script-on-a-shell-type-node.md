DataWorks provides Shell nodes that you can use to run Python scripts. This topic describes how to use a common Shell node or an E-MapReduce (EMR) Shell node to run Python 2 or Python 3 scripts.

## **Background information**

DataWorks allows you to upload Python scripts as resources. You can specify the execution path of Python 3 or Python 2 scripts in a common Shell node or an EMR Shell node to reference uploaded resources for Python script running.

## **Prerequisites**

-   For information about the prerequisites of using an EMR Shell node, see [Create an EMR Shell node](/help/en/dataworks/user-guide/create-an-emr-shell-node#364a0bc8c0d72).
    
-   For information about the prerequisites of using a common Shell node, see [Create a Shell node](/help/en/dataworks/user-guide/create-a-shell-node#11cfc81aa0l6j).
    
-   A third-party package is installed based on the resource group that you use. The third-party package must be referenced when you run Python scripts on a DataWorks resource group.
    
    -   If you use a serverless resource group (recommended), you can use the image management feature to install the third-party package. For more information, see [Manage images](/help/en/dataworks/user-guide/custom-image).
        
    -   If you use an exclusive resource group for scheduling, you can use the O&M Assistant feature to install the third-party package. For more information, see [Use the O&M Assistant feature](/help/en/dataworks/user-guide/use-the-maintenance-assistant-feature#concept-2347122).
        
    
    **Note**
    
    The third-party package that you want to install must support `Python 2` and `Python 3`.
    

## **Limits**

-   For information about the limits imposed when you use an EMR Shell node, see [Create an EMR Shell node](/help/en/dataworks/user-guide/create-an-emr-shell-node#title-i4v-vdt-ms2).
    
-   For information about the limits imposed when you use a common Shell node, see [Create a Shell node](/help/en/dataworks/user-guide/create-a-shell-node#title-3g0-q05-iv6).
    

## Use a Shell node to run Python scripts

DataWorks allows you to use a common Shell node or an EMR Shell node to run Python scripts by referencing resources. The path to access Python scripts varies based on the Python version.

-   Python 2: `python xx.py`
    
-   Python 3: `/home/tops/bin/python3 xx.py`
    

The following sections describe how to use the two types of access paths in detail. You can select a method to run Python scripts based on your business requirements.

## Use a common Shell node to run Python scripts

1.  Create a resource.
    
    1.  Go to the DataStudio page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select a desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select a desired workspace from the drop-down list and click **Go to Data Development**.
        
    2.  Create a MaxCompute Python resource.
        
        On the DataStudio page, find the desired workflow, right-click the workflow name, and then choose **Create Resource** > **MaxCompute** > **Python**. In the Create Resource dialog box, set the Name parameter to `mc.py` and click Create.
        
        **Note**
        
        `mc.py` is a sample resource name. You can specify the resource name based on your business requirements.
        
    3.  Edit the MaxCompute Python resource.
        
        On the configuration tab of the MaxCompute Python resource, develop node code. Sample code:
        
        ## Python 3
        
        ```
        print('This is a test text')
        ```
        
        ## Python 2
        
        ```
        print "This is a test text"
        ```
        
    4.  Separately click the ![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8828477951/p103600.png) and ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p98393.png) icons in the top toolbar of the configuration tab of the resource to save and commit the resource.
        
2.  Reference the resource.
    
    1.  Create a common Shell node.
        
        On the DataStudio page, find the desired workflow, right-click the workflow name, and then choose **Create Node** > **General** > **Shell**. In the Create Node dialog box, configure the Name parameter and click Confirm.
        
    2.  Reference the resource.
        
        On the configuration tab of the common Shell node, find the `mc.py` resource that **you want to reference** under **Resource** in the **MaxCompute** folder, right-click the resource name, and then select **Insert Resource Path**.
        
        If the information that is shown in the following figure appears on the configuration tab of the common Shell node, the resource is referenced by the common Shell node.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p860540.png)
        
3.  Verify the result.
    
    ## Use Python 3 to run the referenced resource in the common Shell node
    
    1.  Configure the common Shell node.
        
        Add the following Python 3 command execution path to the configuration tab of the common Shell node:
        
        ```
        ##@resource_reference{"mc.py"}
        /home/tops/bin/python3 mc.py
        ```
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861447.png) icon. In the Warning message, click Continue to Run. In the Runtime Parameters dialog box, select a resource group, specify a custom image, and then click OK. The information that is shown in the following figure is returned.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861523.png)
        
    
    ## Use Python 2 to run the referenced resource in the common Shell node
    
    1.  Configure the common Shell node.
        
        Add the following Python 2 command execution path to the configuration tab of the common Shell node:
        
        ```
        ##@resource_reference{"mc.py"}
        python mc.py
        ```
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861447.png) icon. In the Warning message, click Continue to Run. In the Runtime Parameters dialog box, select a resource group, specify a custom image, and then click OK. The information that is shown in the following figure is returned.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861523.png)
        
    

## Use an EMR Shell node to run Python scripts

1.  Create a resource.
    
    1.  Go to the DataStudio page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select a desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select a desired workspace from the drop-down list and click **Go to Data Development**.
        
    2.  Create an EMR file resource.
        
        On the DataStudio page, find the desired workflow, right-click the workflow name, and then choose **Create Resource** > **EMR** > **EMR File**. In the Create Resource dialog box, select Local for the **File Source** parameter and click **Upload** to upload the `emr.py` script. Then, click Create. Sample script content:
        
        ## Python 3
        
        ```
        print('This is a test text')
        ```
        
        ## Python 2
        
        ```
        print "This is a test text"
        ```
        
        **Note**
        
        `emr.py` is a sample resource name. You can specify the resource name based on your business requirements.
        
    3.  Click the ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p98393.png) icon in the top toolbar of the configuration tab of the resource to commit the resource.
        
2.  Reference the resource.
    
    1.  Create an EMR Shell node.
        
        On the DataStudio page, find the desired workflow, right-click the workflow name, and then choose **Create Node** > **EMR** > **EMR Shell**. In the Create Node dialog box, configure the Name parameter and click Confirm.
        
    2.  Reference the EMR file resource.
        
        Find the `emr.py` resource that you want to reference under **Resource** in the **EMR** folder, right-click the resource name, and then select **Insert Resource Path**.
        
        If the information that is shown in the following figure appears on the configuration tab of the EMR Shell node, the resource is referenced by the EMR Shell node.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3382941371/p860569.png)
        
3.  Verify the result.
    
    ## Use Python 3 to run the referenced resource in the EMR Shell node
    
    1.  Configure the EMR Shell node.
        
        Add the Python 3 command execution path `/home/tops/bin/python3` to the configuration tab of the EMR Shell node.
        
        ```
        ##@resource_reference{"emr.py"}
        /home/tops/bin/python3 emr.py
        ```
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861430.png) icon. In the Parameters dialog box, select a resource group, specify a custom image, and then click Run. The information that is shown in the following figure is returned.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861542.png)
        
    
    ## Use Python 2 to run the referenced resource in the EMR Shell node
    
    1.  Configure the EMR Shell node.
        
        Add the Python 2 command execution path `python` to the configuration tab of the EMR Shell node.
        
        ```
        ##@resource_reference{"emr.py"}
        python emr.py
        ```
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861430.png) icon. In the Parameters dialog box, select a resource group, specify a custom image, and then click Run. The information that is shown in the following figure is returned.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6172941371/p861542.png)
