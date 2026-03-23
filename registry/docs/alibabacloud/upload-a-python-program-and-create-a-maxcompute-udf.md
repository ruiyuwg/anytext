After developing a Python program, upload it to your MaxCompute project as a resource. Then, create a MaxCompute user-defined function (UDF). This topic describes how to upload the Python program as a resource and create the UDF in MaxCompute.

## Prerequisites

A Python program is developed and debugged. For more information about how to develop and debug a Python program, see [Develop a Python UDF](/help/en/maxcompute/user-guide/develop-a-python-udf#task-2457034).

## Background information

MaxCompute Studio allows you to upload a Python program to your MaxCompute project and create a MaxCompute UDF with a few clicks. We recommend that you use this method to perform these operations.

You can also separately perform the preceding operations on MaxCompute Studio. For more information about how to create a MaxCompute UDF, see [Create a function](/help/en/maxcompute/user-guide/manage-functions-in-a-visualized-manner#section-uqz-c53-zl4).

## Procedure

1.  In the left-side navigation pane of IntelliJ IDEA, click **Project**, right-click the Python program in the **scripts** folder, and then select **Deploy to server…**.
    
2.  In the **Submit resource and register function** dialog box, configure the parameters.
    
    ![Submit resource and register function](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8080191461/p347282.png)
    
    **Parameter**
    
    **Description**
    
    **MaxCompute Project**
    
    The name of the MaxCompute project to which the Python program belongs. This parameter is automatically specified. You do not need to select a MaxCompute project from the drop-down list.
    
    **Resource file**
    
    The local directory in which the resource file of the Python program is stored after the program is uploaded as a resource.
    
    **Resource name**
    
    The name of the resource as which you want to upload the Python program to the MaxCompute project.
    
    **Resource comment**
    
    The comment of the resource.
    
    **Extra resources**
    
    Other resource files that are required for creating a MaxCompute UDF. You can select a required resource file from the resource list. If the MaxCompute UDF depends on multiple resource files, press and hold the Ctrl key, and click the required files in sequence to select them.
    
    **Main class**
    
    The class of the MaxCompute UDF that you want to create. The value of this parameter is in the format of Python script name.Class name.
    
    **Function name**
    
    The name of the MaxCompute UDF that you want to create by using MaxCompute Studio based on the Python program. The UDF name is used when you call the UDF in SQL statements.
    
    **Force update if already exists**
    
    If you select this option, the UDF or resource that you create overwrites the existing UDF or resource that has the same name in your MaxCompute project.
    
3.  Click **OK**.
    
    After you complete the preceding operations, you can call the MaxCompute UDF in SQL statements.
