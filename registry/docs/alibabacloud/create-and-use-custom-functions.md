If the built-in functions provided by MaxCompute cannot meet your business requirements, you can create user-defined functions (UDFs) to meet your diverse business requirements. This topic describes how to create a MaxCompute UDF in a visualized manner in DataWorks.

## **Background information**

UDFs are used to extend the existing function library to provide more data processing features. You can specify code logic and computing methods of tasks based on your business requirements for queries. For more information, see [Overview](/help/en/maxcompute/user-guide/overview-22). In addition to the visualized method that you can use to create a UDF in DataWorks, you can also use MaxCompute Studio or the CLI in MaxCompute to create a UDF. For more information, see [Use MaxCompute Studio to create a UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#task-2457652) and [Use the CLI in MaxCompute to create a UDF](/help/en/maxcompute/user-guide/function-operations#title-kff-itx-6ya).

## Prerequisites

Before you can create a MaxCompute UDF, you must upload an existing resource or create a resource and add the resource to DataWorks in a visualized manner. For more information, see [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#section-0tf-1wy-k5s).

**Note**

When creating MaxCompute resources, you can refer to [Develop a UDF in Java](/help/en/maxcompute/user-guide/java-udfs) and [Develop a UDF in Python 3](/help/en/maxcompute/user-guide/python-3-udfs) to prepare the required MaxCompute resource files.

## Limits

DataWorks allows you to view and manage UDFs that are uploaded in a visualized manner only in the DataWorks console. If you add UDFs to a MaxCompute compute engine by using other tools such as MaxCompute Studio, you must use the **MaxCompute function** feature in DataWorks DataStudio to manually load the UDFs to DataWorks. You can view and manage the UDFs in DataWorks after the loading is complete. For more information, see [Manage MaxCompute functions](/help/en/dataworks/user-guide/maxcompute-functions#task-2368889).

## Register a function

1.  Go to the DataStudio page.
    

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.

3.  Create a workflow. For more information, see [Create an auto triggered workflow](/help/en/dataworks/user-guide/create-a-workflow#section-hdc-2dj-jlv).
    
4.  Create a function.
    
    1.  Expand the desired workflow, right-click **MaxCompute**, and then select **Create Function**.
        
    2.  In the **Create Function** dialog box, enter a **Name** and a **Path**.
        
    3.  Click **Create**.
        
    4.  In the **Register Function** section of the configuration tab that appears, configure the parameters that are described in the following table.
        
        ![注册函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2191061061/p136461.png)
        
        **Parameter**
        
        **Description**
        
        **Function Type**
        
        The type of the function. Valid values: **Mathematical Operation Functions**, **Aggregate Functions**, **String Processing Functions**, **Date Functions**, **Window Functions**, and **Other Functions**. For more information, see [Use built-in functions](/help/en/dataworks/user-guide/functions#concept-orh-v5r-q2b).
        
        **Engine Instance MaxCompute**
        
        The MaxCompute compute engine. The value of this parameter cannot be changed.
        
        **Function Name**
        
        The name of the function. You can use the function name to reference the function in SQL statements. The function name must be globally unique and cannot be changed after the function is registered.
        
        **Owner**
        
        The owner of the function. The default owner is the account that is used to log on to the DataWorks console. You can change the value of this parameter.
        
        **Class Name**
        
        The name of the class that implements the UDF. Configure this parameter in the `Resource name.Class name` format. The resource name can be the name of a Java or Python package.
        
        When you register UDFs in the DataWorks console, you can reference MaxCompute resources including JAR packages and Python resources. The value format of this parameter varies based on the resource type:
        
        -   If the resource type is JAR, configure the **Class Name** parameter in the `JAR package name.Actual class name` format. You can query the class name by executing the `copy reference` statement in IntelliJ IDEA.
            
            For example, if `com.aliyun.odps.examples.udf` is the Java package name and `UDAFExample` is the class name, the value of the **Class Name** parameter is `com.aliyun.odps.examples.udf.UDAFExample`.
            
        -   If the resource type is Python, configure the **Class Name** parameter in the `Python resource name.Actual class name` format.
            
            For example, if `LcLognormDist_sh` is the Python resource name and `LcLognormDist_sh` is the class name, the value of the **Class Name** parameter is `LcLognormDist_sh.LcLognormDist_sh`.
            
            **Note**
            
            -   You do not need to include the .jar or .py suffix in the resource name.
                
            -   You can use a resource after the resource is committed and deployed. For information about how to create a MaxCompute resource, see [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#task-2509662).
                
            
        
        **Resources**
        
        Select the resources that you want to use to register the function.
        
        -   Visual Mode: If you select this mode, you can select only the resources that have been uploaded or added to DataWorks.
            
        -   Code Editor: If you select this mode, you can select all resources in the MaxCompute compute engine.
            
        
        **Note**
        
        -   You do not need to specify the path of the added resources.
            
        -   If multiple resources are referenced in the UDF, separate the resource names with commas (,).
            
        
        **Description**
        
        The description of the UDF.
        
        **Expression Syntax**
        
        The syntax of the UDF. Example: `test`.
        
        **Parameter Description**
        
        The description of the input and output parameters that are supported.
        
        **Return Value**
        
        Optional. The return value. Example: 1.
        
        **Example**
        
        Optional. The example of the function.
        
5.  Click the ![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6681659951/p103147.png) icon in the top toolbar to save the UDF.
    
6.  Commit the UDF.
    
    1.  Click the ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6681659951/p103148.png) icon in the top toolbar.
        
    2.  In the **Submit** dialog box, enter your comments in the **Change description** field.
        
    3.  Click **Confirm**.
        

For information about how to view the functions in a MaxCompute compute engine and the change history of the functions, and how to perform other operations, see [Manage MaxCompute functions](/help/en/dataworks/user-guide/maxcompute-functions#task-2368889).

## View the function version and roll back the function

In the MaxCompute folder in the Business Flow section in the Scheduled Workflow pane, you can right-click the name of a MaxCompute function and select **View Earlier Versions** to view the earlier versions of the function or roll back the function.

![查看](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0537849761/p558530.png)

## Use UDFs in nodes

If you want to use a UDF in a node, you can directly reference the name of the UDF in the code of the node. In detail, you can find the UDF in the Scheduled Workflow pane, right-click the UDF name, and then select **Insert Function**. This way, the UDF is displayed on the configuration tab of the node.![节点中使用函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9437849761/p558528.png)

## Appendix 1: View UDFs

-   You can run the `SHOW FUNCTIONS` command to view all registered UDFs in a MaxCompute project that is added to a DataWorks workspace as a data source.
    
-   MaxCompute provides various types of built-in functions. For more information, see [Overview of built-in functions](/help/en/maxcompute/user-guide/overview#concept-2174967).
    

```
// View functions in the current project. 
SHOW FUNCTIONS;
```

## **Appendix 2: View the details of a UDF**

-   You can run the `DESCRIBE` or abbreviated `DESC` command followed by a UDF name to view the details of a UDF.
    
    ```
    // Use the abbreviated DESC command to view the details of a UDF.
    DESC FUNCTION <function_name>;
    ```
    
-   In DataWorks, if the processing logic that is required in your workflow cannot be implemented by using existing functions, you can write a MaxCompute UDF and upload and associate a corresponding resource such as a JAR package or a Python file to manage and expand your data processing capabilities. For more information, see [Manage MaxCompute resources](/help/en/dataworks/user-guide/manage-maxcompute-resources#task-2368888).
    

## **Best practices**

After you create a UDF, you can follow the instructions that are described in [Grant access to a specific UDF to a specified user](/help/en/dataworks/user-guide/grant-access-to-a-specific-udf-to-a-specified-user) to implement access control on the UDF.

## **References**

-   MaxCompute allows you to package a Java program into a JAR file, upload the JAR file as a MaxCompute resource, and register a MaxCompute UDF with a few clicks. For more information, see [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#task-2457652).
    
-   For information about FAQ about MaxCompute UDFs that are written in Java, see [FAQ about MaxCompute Java UDFs](/help/en/maxcompute/user-guide/faq-about-maxcompute-java-udfs).
    
-   For information about FAQ about MaxCompute UDFs that are written in Python, see [FAQ about MaxCompute Python UDFs](/help/en/maxcompute/user-guide/faq-about-maxcompute-python-udfs).
    

## **FAQ**

Q: After a UDF is registered based on specific resources uploaded in the DataWorks console, the UDF can be used by ODPS SQL nodes in DataStudio. Can the UDF be used in SQL Query of DataAnalysis?

A: Yes, the UDF can be used in SQL Query of DataAnalysis. UDFs registered in the DataWorks console are stored in MaxCompute projects. Therefore, the UDFs can be used not only in ODPS SQL nodes but also in SQL Query of DataAnalysis.
