After you develop and debug a Java program, you must package the Java program into a JAR file and upload the JAR file to your MaxCompute project as a resource. Then, you can create a MaxCompute user-defined function (UDF) that is called during subsequent data development. This topic describes how to package a Java program into a JAR file, upload the JAR file as a MaxCompute resource, and create a MaxCompute UDF with a few clicks.

## Prerequisites

A Java program is developed and debugged. For more information about how to develop and debug a Java program, see [Develop a UDF](/help/en/maxcompute/user-guide/develop-a-udf#task-2457023), [Develop a MapReduce program](/help/en/maxcompute/user-guide/develop-a-mapreduce-program#task-2457360), or [Develop Graph programs](/help/en/maxcompute/user-guide/develop-graph#task-2457636).

## Feature description

MaxCompute Studio allows you to package a Java program into a JAR file, upload the JAR file to your MaxCompute project, and then create a MaxCompute UDF with a few clicks. We recommend that you use this method to perform these operations.

You can also perform the following operations in sequence in MaxCompute Studio:

1.  Package a Java program into a JAR file. For more information, see [Generate a JAR file](https://www.jetbrains.com/help/idea/2020.1/artifacts.html).
    
2.  Upload a JAR file to MaxCompute. For more information, see the "Add resources" section in [Manage resources in a visualized manner](/help/en/maxcompute/user-guide/manage-resources-in-a-visualized-manner#section-630-z7e-gvk).
    
3.  Create a MaxCompute UDF. For more information, see the "Create a function" section in [Register a UDF](/help/en/maxcompute/user-guide/manage-functions-in-a-visualized-manner#section-uqz-c53-zl4).
    

## Procedure

1.  In the left-side navigation pane of IntelliJ IDEA, click **Project**. Choose **src** > **main** > **java**, right-click the Java program that you compiled, and then select **Deploy to server…**.
    
2.  In the **Package a jar, submit resource and register function** dialog box, configure the parameters.
    
    ![打包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6120037361/p2060.png)
    
    **Parameter**
    
    **Description**
    
    **MaxCompute project**
    
    The name of the MaxCompute project to which the Java program belongs. This parameter is automatically specified. You do not need to select a MaxCompute project from the drop-down list.
    
    **Resource file**
    
    The local directory in which the JAR file of the Java program is stored.
    
    **Resource name**
    
    The name of the resource as which you want to upload the JAR file to the MaxCompute project.
    
    **Resource comment**
    
    The comment of the resource.
    
    **Extra resources**
    
    Other resource files that are required for creating a MaxCompute UDF. You can select a required resource file from the resource list. **If the MaxCompute UDF depends on multiple resource files, press and hold the Ctrl key, and click the required files in sequence to select them.** In the Extra resources field, the resources that are added to the MaxCompute project are displayed. For more information about how to add resources, see the "Add resources" section in [Manage resources in a visualized manner](/help/en/maxcompute/user-guide/manage-resources-in-a-visualized-manner#section-630-z7e-gvk).
    
    **Main class**
    
    The class of the MaxCompute UDF that you want to create. The class is defined in the Java program.
    
    **Function name**
    
    The name of the MaxCompute UDF that you want to create on MaxCompute Studio based on the JAR file. The UDF name is used when you call the UDF in SQL statements.
    
    **Force update if already exists**
    
    If you select this option, the UDF or resource that you create overwrites the existing UDF or resource that has the same name in your MaxCompute project.
    
3.  Click **OK**.
    
    After you complete the preceding operations, you can call the MaxCompute UDF in SQL statements.
    

## **What to do next**

After you create a Java UDF, you can use MaxCompute SQL to call the Java UDF.

-   Use a UDF in a MaxCompute project: The method is similar to that of a built-in function. You can use a UDF by referring to the method of using a built-in function.
    
-   Use a UDF across projects: Use a UDF of Project B in Project A. Sample statement: `SELECT B:<udf_naem> (<arg0>, <arg1>) FROM <table_name>;`. For more information about cross-project sharing, see [Cross-project resource access based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb).
    

## **References**

-   For answers to frequently asked questions about developing and calling Java UDFs, see [FAQ about MaxCompute Java UDFs](/help/en/maxcompute/user-guide/faq-about-maxcompute-java-udfs).
    
-   For UDF development examples, see [UDF development examples](/help/en/maxcompute/user-guide/udf-development-example-summary).
