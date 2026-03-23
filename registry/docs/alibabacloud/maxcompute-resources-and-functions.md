DataStudio lets you manage resources in a MaxCompute project. You can create resources from local files or Object Storage Service (OSS) files and register them as functions for use in data development nodes. This topic describes how to create various types of MaxCompute resources and functions in Resource Management.

## **Prerequisites**

-   You have [attached a MaxCompute compute resource](/help/en/dataworks/create-and-manage-compute-resources-new-data-development#356a824bfcncq).
    
-   You have developed the resource files. You can upload the files from your local machine or retrieve them from Object Storage Service (OSS). If you create resources by uploading files from OSS, you must meet the following conditions.
    
    -   You have activated OSS, created a bucket, and stored the resource files that you want to upload in the OSS bucket. For more information, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4) and [Simple upload](/help/en/oss/user-guide/simple-upload).
        
        **Note**
        
        For more information about the supported resource files, see [Resource description](#44137f5770f42).
        
    -   The Alibaba Cloud account that you use to upload the file must have permissions to access the target bucket. To prevent permission issues, [grant permissions to the relevant account](/help/en/oss/user-guide/permissions-and-access-control-overview) before you upload the file.
        

## **Go to Resource Management**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the Resource Management icon ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5314298371/p840004.png) to go to the **Resource Management** page.
    
3.  On the page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5912420571/p942995.png) icon to create a new resource or function. Alternatively, you can first click **Create Directory** to organize your resources. Then, right-click the target folder and choose the type of resource or function to create.
    

## **Create and manage resources**

### **Resource description**

[Resources](/help/en/maxcompute/product-overview/resource) are the foundation for implementing [user-defined function (UDF)](/help/en/maxcompute/user-guide/overview-22) or [MapReduce](/help/en/maxcompute/user-guide/mapreduce/) features in MaxCompute. In DataStudio, you can use the visual interface to upload resources that are stored on your local machine or in OSS. These resources can be read and used during the execution of UDFs and MapReduce. The following MaxCompute resource types are supported.

**Important**

Uploading resources to MaxCompute using DataWorks incurs MaxCompute [storage fees](/help/en/maxcompute/product-overview/storage-fee).

**Resource type**

**Description**

**Python**

Stores Python code used to register Python UDFs. The file name extension is `.py`.

**JAR**

A compiled Java JAR package used to run Java programs. The file name extension is `.jar`.

**Archive**

Only compressed files such as `.zip`, `.tgz`, `.tar.gz`, `.tar`, and `.jar` can be uploaded as resources. The compression type is distinguished by the file name extension of the resource.

**File**

When you create a resource of the `File` type, you can upload any file. The actual usage depends on the support of each engine.

### **Limits**

Note the following limits when you upload resources:

-   **Resource size**:
    
    -   Online editing: Python resources can be up to **10 MB**. File resources can be up to **500 KB**.
        
    -   Upload from local machine: You can upload a resource of up to **500 MB**.
        
    -   Upload from OSS: You can upload a resource of up to **500 MB**.
        
-   **Resource publishing**: If you use a [standard mode workspace](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode), you must publish the resource to the production environment for it to take effect.
    
    **Note**
    
    The data source information might differ between the development and production environments. Before you query tables or resources in an environment, confirm the data source information for that environment.
    
-   **Resource management**: In DataWorks, you can view and manage only the resources that you upload using the DataWorks interface.
    

### **Create resources**

MaxCompute resources can be uploaded from your local machine or from OSS. You can directly reference the created resources in data development or create functions from them.

1.  On the Resource Management page, in the **Create Resource or Function** dialog box that appears, configure the **Type**, **Path**, and **Name** of the resource.
    
2.  Upload a local file or an OSS file as the source. The following table describes the key parameters for uploading resources.
    
    **Configuration item**
    
    **Configuration description**
    
    **File Source**
    
    The source of the object file. The supported sources are **On-premises** and **OSS**.
    
    **File Content**
    
    -   If you select **On-premises**, click **Upload** to upload a local file.
        
    -   If you select **OSS**, select the corresponding OSS file from the drop-down list.
        
    
    **Data Source**
    
    Select the data source to which the uploaded MaxCompute resource belongs.
    
3.  In the top toolbar, click **Save** and then **Publish** the resource. Only [published](/help/en/dataworks/user-guide/task-release/) resources can be used in Data Development.
    

### **Use resources**

After you create a resource, you can reference it in a data development node. To do this, click **Resource Management** in the navigation pane on the left, find the target resource, right-click it, and select **Reference Resources**. After the resource is successfully referenced, code in the `##@resource_reference{"Resource Name"}` format is added to your node.

**Note**

For example, a PyODPS 3 node displays the code as `##@resource_reference{"example.py"}`. The display format varies based on the node type.

Alternatively, you can [create a function](#9007662fb5zp0) from a resource and then use it in a developer node.

### **Manage resources**

In DataWorks, you can view and manage only the resources that you upload using the visual interface. On the Resource Management page, click a resource to perform management operations.

-   **View historical versions**: View and compare published resource versions to see the changes between them.
    
    **Note**
    
    To compare versions, you must select at least two versions.
    
-   **Delete resource**: This operation deletes the resource from the development environment. To delete the resource from the production environment, you must publish this change. After the publish task is successful, the resource is also deleted from the production environment. For more information, see [Publish a task](/help/en/dataworks/user-guide/deploy-nodes#task-2470114).
    
-   **View other resources.**
    
    MaxCompute might contain resources uploaded using methods other than DataWorks. You can view these resources in the following ways.
    
    -   Use the [data catalog](/help/en/dataworks/user-guide/data-directory/) to **view** all resources in a MaxCompute project.
        
        After you add a MaxCompute project to the data catalog, you can open the corresponding MaxCompute folder in the data catalog and view all resources in the current project under the resource directory.
        
    -   Use a [MaxCompute SQL node](/help/en/dataworks/user-guide/maxcompute-sql-node) to **view** other resources in a MaxCompute project.
        
        -   View all resources in the current project. When you create a **MaxCompute SQL** script in Data Development and execute this command, the system accesses the MaxCompute compute resource that is attached to the development environment by default.
            
            ```
            list resources;
            ```
            
        -   View all resources in a specified project.
            
            ```
            use MaxCompute_project_name;
            list resources;
            ```
            
        
        For more information about command operations, see [Resource operations](/help/en/maxcompute/user-guide/resource-operations#concept-pps-h1f-vdb).
        

## **Create and manage functions**

Before you create a function, ensure that you have [created a resource](#d9321d4a480df).

**Note**

To prepare the MaxCompute resource file, see [UDF Development (Java)](/help/en/maxcompute/user-guide/java-udfs) and [UDF Development (Python 3)](/help/en/maxcompute/user-guide/python-3-udfs).

### **Function description**

In DataStudio, you can register resources as functions in Resource and Function Management. In Data Development or SQL queries, you can also [create a function](#9007662fb5zp0) from an uploaded and published resource, create embedded functions using `JAVA`, `PYTHON2`, or `PYTHON3`, or directly [use MaxCompute built-in functions](#d0b3e6f0ee0ha).

### **Create a function**

1.  On the **Resource Management** page, in the **Create Resource or Function** dialog box that appears, configure the **Type**, **Path**, and **Name** of the function.
    
2.  Create a function resource and configure its information.
    
    Before you configure a MaxCompute function, make sure that you have registered the MaxCompute project as a compute resource in DataWorks and have uploaded a MaxCompute resource. The following table describes the key parameters for a **MaxCompute function**.
    
    **Parameter**
    
    **Description**
    
    **Function Type**
    
    Select the function type. Valid values: **MATH** (mathematical operation function), **AGGREGATE** (aggregate function), **STRING** (string processing function), **DATE** (date function), **ANALYTIC** (window function), and **OTHER** (other function).
    
    **Class Name**
    
    The class name of the UDF, in `resource_name.class_name` format. The resource name can be a Java package name or a Python resource name.
    
    When you create a user-defined function in DataWorks, you can use MaxCompute resources of the JAR and Python types. The class name is configured differently for different resource types:
    
    -   When the **resource type is JAR**, the **Class Name** must be in the `packageName.ActualClassName` format. You can obtain this value from `IntelliJ IDEA` using the `Copy Reference` statement.
        
        For example, if `com.aliyun.odps.examples.udf` is the Java package name and `UDAFExample` is the actual class name, the **Class Name** parameter is set to `com.aliyun.odps.examples.udf.UDAFExample`.
        
    -   When **the resource type is Python**, the format for the **Class Name** is `PythonResourceName.ActualClassName`.
        
        For example, if the Python resource name is `LcLognormDist_sh` and the actual class name is `LcLognormDist_sh`, the **Class Name** parameter is set to `LcLognormDist_sh.LcLognormDist_sh`.
        
    
    **Note**
    
    -   Do not add the `.jar` or `.py` suffix when you enter the resource name.
        
    -   The resource must be submitted and published before it can be used.
        
    
    **Type**
    
    Select **Resource Function** or **Embedded Function**:
    
    -   If you select **Resource Function**, you only need to configure the **Resources**.
        
    -   When you select **[Embedded Function](/help/en/maxcompute/user-guide/code-embedded-udfs)**, in addition to selecting the **Resources**, you also need to configure the **Language** (`JAVA`, `PYTHON2`, or `PYTHON3`) and **Code**.
        
    
    **Resource List**
    
    Select the resources to use to register the function.
    
    -   **Visual Mode**: You can select only resources that have been uploaded or added to DataWorks.
        
    -   **Code Editor**: You can enter all resources in the corresponding data source. If the UDF calls multiple resources, separate them with commas (,).
        
    
    **Note**
    
    -   You do not need to enter the path of the added resources.
        
    -   For resources that DataWorks does not support uploading through the visualization feature, such as table resources, or resources that have been uploaded to MaxCompute through other methods and are not managed by DataWorks visualization, you can manually enter them in script mode.
        
    
    **Command Syntax**
    
    An example of how to use this UDF.
    
3.  In the top toolbar, click **Save** and then **Publish** the function. Only [published](/help/en/dataworks/user-guide/task-release/) functions can be used in Data Development.
    

### **Use functions**

#### **Use a user-defined function**

After a function is created and published, you can directly reference it in data development or SQL queries.

-   When you edit a data development node, click **Resource Management** in the navigation pane on the left. Then, find the target resource or function, right-click it, and select **Insert Function**.
    
    After the function is successfully referenced, the name of the user-defined function is automatically inserted into the node editing page, for example, `example_function()`.
    
-   When you edit an SQL query, you can directly use the created function.
    

```
SELECT example_function(column_name) FROM table;
```

#### **Use a built-in function**

DataWorks supports two types of functions: user-defined functions and MaxCompute built-in functions. You can [view the built-in functions by type](/help/en/maxcompute/user-guide/built-in-functions-1/) or [view them in alphabetical order](/help/en/maxcompute/user-guide/built-in-functions/).

-   **Notes**: For information about notes on using built-in functions, see [Notes](/help/en/maxcompute/user-guide/overview#section-qjz-ngt-lcd).
    
-   **Limits**: For information about the limits on built-in functions, see [Limits of JSON functions](/help/en/maxcompute/user-guide/overview#19d84660162oa) and [Limits of string functions](/help/en/maxcompute/user-guide/overview#c44215c141pkp).
    
-   You can view built-in functions in one of the following three ways:
    
    -   [View built-in functions by type](/help/en/maxcompute/user-guide/built-in-functions-1/).
        
    -   [View built-in functions sorted alphabetically](/help/en/maxcompute/user-guide/built-in-functions/).
        
    -   Use the following command in a MaxCompute SQL node to view built-in functions.
        
        ```
        show builtin functions [<function_name>]; --<function_name> is the name of a specific built-in function.
        ```
        
        **Note**
        
        -   `<function_name>` is a placeholder. Replace it with the name of a built-in function.
            
        -   If you use the MaxCompute client (odpscmd) to run the `show builtin functions;` command, the odpscmd version must be 0.43.0 or later.
            
        
-   For typical use cases of built-in functions, see:
    
    -   [Example of a precision issue with the ROUND function](/help/en/maxcompute/use-cases/fix-the-precision-issue-of-the-round-function).
        
    -   [Example of implementing the functionality of the GROUP\_CONCAT function](/help/en/maxcompute/use-cases/implement-capabilities-provided-by-the-group-concat-function).
        
-   To troubleshoot issues that you encounter when you use built-in functions, see:
    
    -   [Common built-in function error codes](/help/en/maxcompute/user-guide/common-errors-for-built-in-functions)
        
    -   [Built-in function FAQ](/help/en/maxcompute/user-guide/faq-about-built-in-functions)
        

### **Manage functions**

On the Resource Management page, click a function to perform management operations.

-   **View historical versions**: Click the Version button on the right side of the function editing page. You can view and compare saved or published function versions to see the changes between them.
    
    **Note**
    
    To compare versions, you must select at least two versions.
    
-   **Delete a function**: Right-click the target function and select **Delete**.
    
    To delete the function from the production environment, you must publish this change. After the publish task is successful, the function is also deleted from the production environment. For more information, see [Publish a task](/help/en/dataworks/user-guide/deploy-nodes#task-2470114).
    

#### **View the list of user-defined functions**

```
// View the functions in the MaxCompute compute resource project attached to the current DataWorks workspace.
SHOW FUNCTIONS;
```

#### **View the details of a user-defined function**

-   Use the `DESCRIBE` command or its abbreviation `DESC`, followed by the function name, to view the details of a user-defined function.
    
    ```
    // Use the abbreviated form to view the details of a user-defined function
    DESC FUNCTION <function_name>;
    ```
    
-   In DataWorks, if the required processing logic in your business workflow cannot be implemented by existing functions, you can write a MaxCompute user-defined function. You can then upload and associate the corresponding resources, such as JAR packages and Python files, to extend your data processing capabilities.
    

## **FAQ**

**Q: After I upload a resource through DataWorks and define it as a user-defined function (UDF), can I use it in DataAnalysis SQL queries and in ODPS SQL nodes in Data Development?**

A: Yes, you can. UDFs registered through DataWorks are stored in the MaxCompute project. Therefore, you can use them in both [MaxCompute SQL nodes](/help/en/dataworks/user-guide/maxcompute-sql-node) and in DataAnalysis [SQL Query (Legacy)](/help/en/dataworks/user-guide/sql-query).
