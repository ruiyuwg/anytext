This topic describes how to use a PyODPS node to read data from a partitioned table.

## Prerequisites

The following operations are completed:

-   MaxCompute is activated. For more information, see [Activate MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   DataWorks is activated. For more information, see [Activate DataWorks](/help/en/dataworks/purchase-guide#concept-1215588).
    
-   A workflow is created in the DataWorks console. In this example, a workflow is created for a DataWorks workspace in basic mode. For more information, see [Create a workflow](/help/en/dataworks/create-a-workflow-1#concept-m1t-nzl-s2b).
    

## Procedure

1.  Prepare test data.
    
    1.  Create a partitioned table and a source table, and import data to the source table. For more information, see [Create tables and upload data](/help/en/dataworks/create-tables-and-upload-data#task-2363400).
        
        In this example, use the following table creation statements and source data.
        
        -   Execute the following statement to create a partitioned table named user\_detail:
            
            ```
            create table if not exists user_detail
            (
            userid    BIGINT comment 'user ID',
            job       STRING comment 'job type',
            education STRING comment 'education level'
            ) comment 'user information table'
            partitioned by (dt STRING comment 'date',region STRING comment 'region');
            ```
            
        -   Execute the following statement to create a source table named user\_detail\_ods:
            
            ```
            create table if not exists user_detail_ods
            (
              userid    BIGINT comment 'user ID',
              job       STRING comment 'job type',
              education STRING comment 'education level',
              dt STRING comment 'date',
              region STRING comment 'region'
            );
            ```
            
        -   Create a source data file named user\_detail.txt and save the following data to the file. Import the data to the user\_detail\_ods table.
            
            ```
            0001,Internet,bachelor,20190715,beijing
            0002,education,junior college,20190716,beijing
            0003,finance,master,20190715,shandong
            0004,Internet,master,20190715,beijing
            ```
            
        
    2.  Right-click the workflow and choose **Create Node** > **MaxCompute** > **ODPS SQL**.
        
    3.  In the Create Node dialog box, specify **Name** and click **Confirm**.
        
    4.  On the configuration tab of the ODPS SQL node, enter the following code in the code editor:
        
        ```
        insert overwrite table user_detail partition (dt,region)
        select userid,job,education,dt,region from user_detail_ods;
        ```
        
    5.  Click the **Run** icon in the toolbar to insert the data from the user\_detail\_ods table into the user\_detail partitioned table.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6357290061/p72612.png)
        
2.  Use a PyODPS node to read data from a partitioned table.
    
    1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
        
    2.  In the left-side navigation pane, click **Workspace**.
        
    3.  Find your workspace, and choose **Shortcuts** > **Data Development** in the **Actions** column.
        
    4.  On the **DataStudio** page, right-click the created workflow and choose **Create Node** > **MaxCompute** > **PyODPS 2**.
        
    5.  In the Create Node dialog box, specify **Name** and click **Confirm**.
        
    6.  On the configuration tab of the PyODPS 2 node, enter the following code in the code editor:
        
        ```
        import sys
        from odps import ODPS
        reload(sys)
        print('dt=' + args['dt'])
        # Set UTF-8 as the default encoding format.
        sys.setdefaultencoding('utf8')
        # Obtain the partitioned table.
        t = o.get_table('user_detail')
        # Check whether the specified partition exists.
        print t.exist_partition('dt=20190715,region=beijing')
        # View all partitions in the partitioned table.
        for partition in t.partitions:
            print partition.name
        # You can use one of the following methods to query data in the partitioned table:
        # Method 1
        with t.open_reader(partition='dt=20190715,region=beijing') as reader1:
            count = reader1.count
        print("Query data in the partitioned table by using Method 1:")
        for record in reader1:
            print record[0],record[1],record[2]
        # Method 2
        print("Query data in the partitioned table by using Method 2:")
        reader2 = t.open_reader(partition='dt=20190715,region=beijing')
        for record in reader2:
            print record["userid"],record["job"],record["education"]
        # Method 3
        print("Query data in the partitioned table by using Method 3:")
        for record in o.read_table('user_detail', partition='dt=20190715,region=beijing'):
            print record["userid"],record["job"],record["education"]
        ```
        
    7.  Click the **Run with Parameters** icon in the toolbar.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6357290061/p72614.png)
        
    8.  In the **Parameters** dialog box, configure parameters and click **Run**.
        
        Parameter description:
        
        -   **Resource Group Name**: Select **Common scheduler resource group**.
            
        -   **dt**: Set this parameter to dt=20190715.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2006361271/p823900.png)
        
    9.  View the running result of the PyODPS 2 node on the **Run Log** tab.![Run Log](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6357290061/p52364.jpg)
