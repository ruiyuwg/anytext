If the built-in functions provided by MaxCompute cannot meet your business requirements, you can develop user-defined functions (UDFs) in MaxCompute Studio to implement business features. This topic describes how to use MaxCompute Studio to develop and debug Java UDFs.

## Prerequisites

Before you begin, make sure that you have completed the following operations:

-   A connection to a MaxCompute project is created on MaxCompute Studio. For more information, see [Manage project connections](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405).
    
-   A MaxCompute Java module is created. For more information, see [Create a MaxCompute Java module](/help/en/maxcompute/user-guide/create-a-maxcompute-java-module#task-2456992).
    

## Background information

You can follow the instructions in this topic to develop a UDF, or choose **MaxCompute** > **Create UDF** to directly create a UDF.

## Write a UDF

1.  In the left-side navigation pane of the **Project** tab, choose **src** > **main** > **java**, right-click java, and then choose **New** > **MaxCompute Java**.
    
    ![11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7374992361/p89042.png)
    
2.  Specify **Name**, select the **UDF** class, and then press Enter.
    
    ![新建Class](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2716721061/p1947.png)
    
    **Name**: the name of the MaxCompute Java class. If you need to create a package, enter packagename.classname. Then, the system automatically creates a package.
    
3.  After you create a MaxCompute Java class, develop a Java program in the editor.
    
    ![编写程序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8787646161/p1948.png)
    

## Perform a local run to debug the UDF

Perform a local run to test the UDF and check whether the results meet your expectations.

1.  Right-click the Java script that you wrote and select **Run**.
    
2.  In the **Run/Debug Configurations** dialog box, configure the runtime parameters.
    
    ![debug](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9040744061/p95989.png)
    
    -   MaxCompute project: the MaxCompute project in which the UDF runs. To perform a local run, select **local** from the drop-down list.
        
        **Note**
        
        -   If you want to use table data in a MaxCompute project, you must modify the endpoint and specify a project name in the MaxCompute project field. If the table data in the MaxCompute project is not downloaded to the warehouse directory, the data is downloaded first. If the data is already downloaded, skip this step.
            
        -   If you select local from the drop-down list of MaxCompute project, interaction between MaxCompute data or resources and the local project is not required. This way, you can develop, test, and debug UDFs in the local environment.
            
        
    -   MaxCompute table: the name of the MaxCompute table in which the UDF runs.
        
    -   Table columns: the columns in the MaxCompute table in which the UDF runs.
        
    
3.  Click **OK** to run the UDF.
    
    **Note**
    
    -   The system reads data from the specified table in warehouse as the input during the local run. You can view the log output in the console.
        
    

## Perform unit testing to debug the UDF

Refer to the unit testing examples in the examples directory and write your test case.![**](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5387200161/p95765.png)

## What to do next

After you develop and debug a UDF, you must package, upload, and register the UDF code to make the UDF available in MaxCompute. For more information, see [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#task-2457652).

## **References**

For more information about how to use Python to develop UDFs in MaxCompute Studio, see [Develop a Python UDF](/help/en/maxcompute/user-guide/develop-a-python-udf).
