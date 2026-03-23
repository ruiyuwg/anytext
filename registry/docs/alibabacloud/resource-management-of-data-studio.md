The resource management feature in DataStudio lets you create and manage resources and functions for MaxCompute, EMR, CDH, and Flink. You can use these resources and functions in data development or SQL queries.

## **Introduction**

The Resource Management feature in DataStudio supports the centralized management of resources and functions. You can upload and create resources from OSS or local storage. You can also register these resources as functions to use in data development nodes. The Resource Management feature supports only the resources and functions that are created using the Resource Management module.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6955013671/CAEQTxiBgMDY04Gi0hkiIDU1YjllMjdhZjIyMzRhZDY5OTQzN2ViOGYzM2E5MmJm5034835_20250410110537.455.svg)

## **Prerequisites**

The following prerequisites must be met before you can create a resource by uploading a file from OSS:

-   You have activated OSS. You must also [create a bucket](/help/en/oss/user-guide/create-a-bucket-4) and store the files that you want to upload in the bucket. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload).
    
-   The Alibaba Cloud account that you use to upload the file must have permissions to access the destination bucket. To avoid permission-related issues, [grant the required permissions](/help/en/oss/user-guide/permissions-and-access-control-overview) to the account before you upload the file.
    

## **Limitations**

-   **Resource size**: You can upload a resource of up to 500 MB.
    
-   **Resource publishing**: If you use a workspace in standard mode, you must publish the resource to the production environment. After the resource is published, it becomes available in the production project.
    
    **Note**
    
    The data source information in the development environment is different from that in the production environment. Before you query tables or resources in an environment, make sure that you are aware of the data source information for that environment.
    
-   **Resource Management**: DataWorks lets you view and manage only the resources that are uploaded using DataWorks.
    

## **Supported resources and functions**

### **Resources**

Resource Management lets you upload and create resources visually. You can use the created resources in data development tasks or to create user-defined functions.

**Data source**

**Resource**

**Supported creation methods**

**Local**

**OSS**

[**MaxCompute**](/help/en/maxcompute/product-overview/what-is-maxcompute)

**MaxCompute Python**

The written Python code that is used to register a Python user-defined function (UDF). The file name extension is `.py`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p938215.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p938215.png)

**MaxCompute Jar**

A compiled Java JAR package that is used to run a Java program. The file name extension is `.jar`.

**MaxCompute Archive**

You can upload only compressed files with the file name extension `.zip`, `.tgz`, `.tar.gz`, or `.tar` as resources. The compression type is identified by the file name extension of the resource.

**MaxCompute File**

You can upload a file of any type as a File resource. The actual usage is subject to the support of each DPI engine.

[**EMR**](/help/en/emr/product-introduction-1)

**EMR Jar**

A compiled Java JAR package that is used to run a Java program. The file name extension is `.jar`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p938215.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p938215.png)

**EMR File**

You can upload a file of any type as a File resource. The actual usage is subject to the support of each DPI engine.

[**CDH**](https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/cdh_intro.html)

**CDH Jar**

A compiled Java JAR package that is used to run a Java program. The file name extension is `.jar`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p938215.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6912420571/p938220.png)

**CDH File**

You can upload a file of any type as a File resource. The actual usage is subject to the support of each DPI engine.

[**Flink**](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink)

**Flink Jar**

A compiled Java JAR package that is used to run a Java program. The file name extension is `.jar`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p938215.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6912420571/p938220.png)

### **Functions**

You can use resources to create MaxCompute, EMR, CDH, and Flink functions. These functions can be used in **Data Development** and **SQL Query**.

## **Procedure**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5314298371/p840004.png) icon to open the **Resource Management** page.
    
3.  On the **Resource Management** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p942995.png) icon to create a new resource or function. Alternatively, you can first click **New Folder**. After you plan your folder structure, right-click the corresponding folder, select **New**, and then create a resource or function.
    

## **Create and manage resources and functions**

-   [MaxCompute resources and functions](/help/en/dataworks/user-guide/maxcompute-resources-and-functions).
    
-   [EMR resources and functions](/help/en/dataworks/user-guide/emr-resources-and-functions).
    
-   [CDH resources and functions](/help/en/dataworks/user-guide/cdh-resources-and-functions).
    
-   [Flink resources and functions](/help/en/dataworks/user-guide/flink-resources-and-functions).
    

## **Other operations**

### **Clone resources and functions**

You can clone existing resources and functions to quickly create new resources and functions.

1.  In the **Resource Management** pane on the left, right-click the resource or function that you want to clone and select **Clone** from the pop-up menu.
    
2.  In the dialog box that appears, change the **Name** and **Path**, or keep the default values, and then click **Confirm**.
    
3.  After the cloning is complete, you can view the cloned resource or function in **Resource Management** and edit or modify its parameters.
    

### **Version management**

You can use the view and compare features for version management to quickly analyze the differences between resource or function versions and make adjustments.

1.  In the **Resource Management** pane on the left, double-click the name of the resource or function for which you want to manage versions to open the edit page of the resource or function.
    
2.  In the right-side pane of the edit page for the resource or function, click **Version**. On the **Version** page, you can view and manage information on the **Developer Record** and **Publish Record** tabs.
    
    -   **View** a **version**:
        
        1.  On the **Developer Record** or **Publish Record** tab, find the version of the resource or function that you want to view.
            
        2.  Click **View** in the **Operation** column to open the product page and view the code of the resource or function.
            
    -   **Compare** **versions**:
        
        On the **Developer Record** or **Publish Record** tab, you can compare different versions of a resource or function. The following steps use a developer record as an example to describe how to compare versions.
        
        -   **Compare versions in the development or production environment**: On the **Developer Record** tab, select two versions and click **Compare** at the top to compare the code and scheduling configurations of the two versions.
            
        -   **Compare versions between the development environment and the production or build environment**:
            
            1.  On the **Developer Record** tab, locate a version of the resource or function.
                
            2.  Click **Compare** in the **Operation** column. On the product page, select a version from the **Publish Record** or **Build Record** tab to start the comparison.
                
    -   **Download** a **version**:
        
        You can download file versions only from the **Developer Record** tab for a published **Resource** file. On the **Developer Record** tab, find the target version and click the **Download** button in the **Actions** column to download the resource file to your local computer.
