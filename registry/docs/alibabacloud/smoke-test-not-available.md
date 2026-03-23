To ensure that scheduling nodes run as expected, we recommend that you perform smoke testing on your nodes. Smoke testing checks whether the parameter replacement logic and running results of scheduling nodes meet your expectations, helping you prevent basic configuration errors that might affect online data.

## Node types that support smoke testing

DataWorks allows you to perform smoke testing on the following types of nodes when you deploy the nodes:

**Category**

**Node type**

Data Integration

Batch synchronization

MaxCompute

MaxCompute SQL, MaxCompute Script, PyODPS 2, PyODPS 3, MaxCompute MR, and SQL script template

Hologres

Hologres SQL

EMR

EMR Hive, EMR Impala, EMR MR, EMR Presto, EMR Shell, EMR Spark, EMR Trino, and EMR Kyuubi

CDH

CDH Hive, CDH Spark, CDH Spark SQL, CDH MR, CDH Presto, and CDH Impala

Lindorm

Lindorm Spark and Lindrom Spark SQL

ClickHouse

ClickHouse SQL

ADB

ADB Spark and ADB Spark SQL

Data Quality

Data quality monitoring

General-purpose

Shell node, Function Compute, and SSH

Algorithm

PAI DLC and PAI Designer

## Enable the forcible smoke testing feature

A workspace administrator can enable the forcible smoke testing feature for the workspace. After this feature is enabled, nodes in the current workspace must pass smoke testing before they can be deployed to the production environment.

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1952859471/p963845.png) **icon and select **Data Studio Settings**.
    
3.  On the Settings page, click the **Security Settings and Others** tab. In the **Smoke Testing** section of the tab, turn on the **Force smoking test** switch.
    

## Perform smoke testing

1.  After you complete code development for a node, click **Deploy** in the top toolbar of the configuration tab of the node to go to the deployment process.
    
2.  Initiate smoke testing.
    
    1.  If your workspace is in basic mode, the node needs to be run only on one computing resource in the workspace. In this case, you must first click **Deploy** to deploy the node to the computing resource and then **initiate smoke testing**.
        
    2.  If your workspace is in standard mode, the development environment and production environment are isolated. Before you deploy the node to the production environment, you must click **Initiate Smoke Testing**. Then, the smoke testing will be performed in the development environment.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1952859471/p963904.png)
        
3.  After you go to the Smoke Testing panel, select a data timestamp for performing smoke testing.
    
    **Note**
    
    If you set the Data Timestamp parameter to the current day or the previous day, the related smoke testing instance will not run until the scheduling time arrives. For example, if the current time is `12:00 on June 2, 2024`, the scheduling time of your node is `15:00`, and you select `June 1, 2024` as the data timestamp, the actual time when the node is run will be `15:00 on June 2, 2024`. In this case, the smoke testing instance will not run until the scheduling time `15:00` arrives.
    

## View smoke testing records

1.  Go to the smoke testing records page.
    
    -   **Method 1**: In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1952859471/p963944.png) icon to go to the SMOKE TESTING RECORDS pane.
        
    -   **Method 2**: On the DEPLOY tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1952859471/p963951.png) icon to go to the SMOKE TESTING RECORDS pane after you click Initiate Smoke Testing.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1952859471/p963948.png)
        
2.  In the **SMOKE TESTING RECORDS** page, view the information such as the **testing time**, **testing status**, **tester**, and **data timestamp**.
    
3.  In the SMOKE TESTING RECORDS pane, find the desired testing record and click **View Log** to view the detailed execution logs of the smoke testing. If the value of the **Test Status** parameter is **Running**, you can click **Stop** to stop the testing.
