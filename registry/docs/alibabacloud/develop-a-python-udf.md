MaxCompute Studio allows you to develop Python user-defined functions (UDFs). This topic describes how to develop, test, and publish a Python UDF.

## Prerequisites

The following operations are complete:

-   [Manage project connections](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405)
-   [Configure a Python development environment](/help/en/maxcompute/user-guide/configure-a-python-development-environment#task-2457055)

## Develop a Python UDF

1.  In the Project section, right-click scripts under the MaxCompute script module and choose New > MaxCompute Python.
2.  In the Create new MaxCompute python class dialog box, enter a class name in the Name field, select python UDF from the Kind drop-down list, and then click OK.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6654130061/p3402.png)
    
3.  Write the UDF code in the code editor.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6654130061/p3403.png)
    

## Test the Python UDF

After the UDF is developed, you must test whether the UDF code works as expected. MaxCompute Studio supports local runs for you to locally test code. You can download specific sample data from a table to your on-premises machine, run the code on the sample data, and debug the code.

1.  Right-click the developed Python UDF and select RUN.
2.  In the Edit configuration dialog box, configure the parameters and click OK.
    
    ![**](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8437953861/p96067.png)
    
    -   MaxCompute project: the MaxCompute project in which the UDF runs. If your MaxCompute project that you created by performing the operations provided in [Manage project connections](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405) is connected, the name of the MaxCompute project is used in this field. You can also add other projects as prompted.
    -   MaxCompute table: the name of the MaxCompute table in which the UDF runs. You can select a table in the MaxCompute project from the drop-down list.
    -   Table columns: the columns in the MaxCompute table in which the UDF runs.
    -   Download Record limit: the maximum number of records that can be downloaded. Default value: 100.
    
    **Note**
    
    -   If the specified data is already downloaded, MaxCompute Studio does not download the data again. To download the data again, run the Tunnel command on the MaxCompute client.
    -   By default, 100 records are downloaded. To download more sample data, run the Tunnel command on the MaxCompute client or use the table download feature of MaxCompute Studio.
    -   After the sample data is downloaded, you can view the data in the data file of the table under the warehouse directory.
    
3.  MaxCompute Studio obtains the sample data from the data file based on the columns you specified and calls the UDF to locally run it on the sample data.
    
    **Note** Local runs are implemented by using the pyou script that the MaxCompute SDK for Python (PyODPS) provides. The command for starting a local run is `pyou hello.Plus<data`. After you install PyODPS, you can run the related command to check whether the pyou script exists:
    
    -   For Windows, run the `${python}/../Scripts/pyou` command.
    -   For macOS, run the `${python}/../pyou` command.
    
4.  View the output on the Console tab, check whether the UDF works as expected, and debug the code if required.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6654130061/p3412.png)
    

## Publish the Python UDF

After the Python UDF is tested, you can publish it to the production environment. For more information, see [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf#task-2130253).
