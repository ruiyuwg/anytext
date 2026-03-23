This topic explains how to pass parameters by using a PyODPS node in DataWorks.

## Prerequisites

-   [MaxCompute is activated](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   [DataWorks is activated](/help/en/dataworks/purchase-guide#concept-1215588).
    
-   A business flow is created in DataWorks. For more information, see [Create a workflow](/help/en/dataworks/create-a-workflow-1#concept-m1t-nzl-s2b).
    

## Procedure

**Note**

This example uses the basic mode of DataWorks. When creating a workspace, by default, **Participate in Public Preview of Data Studio** is not enabled, and this example does not apply to workspaces participating in the Data Studio public preview.

1.  Prepare test data.
    
    1.  Create a table and upload data. For more information, see [Create tables and upload data](/help/en/dataworks/create-tables-and-upload-data#task-2363400).
        
        In this example, use the following table creation statements and source data:
        
        -   The following statement creates the partitioned table user\_detail:
            
            ```
            CREATE TABLE IF NOT EXISTS user_detail
            (
            userid    BIGINT COMMENT 'User ID',
            job       STRING COMMENT 'Job type',
            education STRING COMMENT 'Education level'
            ) COMMENT 'User information table'
            PARTITIONED BY (dt STRING COMMENT 'Date',region STRING COMMENT 'Region');
            ```
            
        -   The following statement creates the source data table user\_detail\_ods:
            
            ```
            CREATE TABLE IF NOT EXISTS user_detail_ods
            (
              userid    BIGINT COMMENT 'User ID',
              job       STRING COMMENT 'Job type',
              education STRING COMMENT 'Education level',
              dt STRING COMMENT 'Date',
              region STRING COMMENT 'Region'
            );
            ```
            
        -   Save the test data as the user\_detail.txt file. Upload this file to the user\_detail\_ods table:
            
            ```
            0001,Internet,Bachelor,20190715,beijing
            0002,Education,junior college,20190716,beijing
            0003,Finance,master,20190715,shandong
            0004,Internet,master,20190715,beijing
            ```
            
        
    2.  Write data from the source data table `user_detail_ods` to the partitioned table `user_detail`.
        
        1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
            
        2.  In the left-side navigation pane, click **Workspace**.
            
        3.  Find the target workspace, choose **Shorcuts** > **Data Development** in the **Actions** column.
            
        4.  Right-click the business flow and choose **Create Node** > **ODPS SQL**.
            
        5.  Enter a node name and click **Confirm**.
            
        6.  Enter the following code in the ODPS SQL node:
            
            ```
            INSERT OVERWRITE TABLE user_detail PARTITION (dt, region) 
            SELECT userid, job, education, dt, region FROM user_detail_ods;
            ```
            
        7.  Click **Run** to complete the data writing.
            
2.  Use PyODPS to pass parameters.
    
    1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
        
    2.  In the left-side navigation pane, click **Workspace**.
        
    3.  Find the target workspace, choose **Shorcuts** > **Data Development** in the **Actions** column.
        
    4.  On the **Data Development** page, right-click the created business flow and select **Create Node** > **PyODPS 2**.
        
    5.  Enter a node name and click **Confirm**.
        
    6.  Enter the following code in the PyODPS 2 node to pass parameters:
        
        ```
        import sys
        reload(sys)
        print('dt=' + args['dt'])
        # Change the default encoding format to UTF-8.
        sys.setdefaultencoding('utf8')
        # Obtain the user_detail table.
        t = o.get_table('user_detail')
        # Receive the partition field that is passed.
        with t.open_reader(partition='dt=' + args['dt'] + ',region=beijing') as reader1:
            count = reader1.count
        print("Query data in the partitioned table:")
        for record in reader1:
            print record[0],record[1],record[2]
        ```
        
    7.  Click **Run with Parameters**.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6357290061/p72614.png)
        
    8.  In the **Parameters** dialog box, configure the parameters and click **Run**.
        
        Configure the following parameters:
        
        -   **Resource Group Name**: Select **Default Resource Group**.
            
        -   **dt**: Set to dt=20190715.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8734029371/p823897.png)
        
    9.  View the operation results in the **Operation Log**.![运行日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6397290061/p52360.jpg)
