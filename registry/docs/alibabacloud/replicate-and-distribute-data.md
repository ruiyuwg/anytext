Simple Log Service allows you to replicate data from a source Logstore and distribute the data to multiple destination Logstores. You can create a data transformation rule for the source Logstore to replicate data. This topic describes how to replicate data from a source Logstore and distribute the data to multiple destination Logstores in typical scenarios.

## Scenario

A data analytics company wants to replicate all log entries from a source Logstore and distribute the log entries to two destination Logstores. The replication and distribution features of Simple Log Service allow the company to use the e\_set function to specify tags, use the e\_split function to categorize the log entries based on the specified tags, and then use the e\_output function to distribute each category of log entries to the destination Logstore that matches the tag for the category. The following figure shows the basic logic of the process. ![split](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1420613171/p228486.png)Before you begin, make sure that the following operations are complete:

-   Evaluate the performance of two storage destinations named target-a and target-b. For example, evaluate the number of shards in each of the storage destinations. For more information, see [Performance guide](/help/en/sls/performance-guide#concept-2055068).
    
-   Create two projects named target-a and target-b. Then, create two Logstores named logstore-a and logstore-b. For more information, see [Manage a project](/help/en/sls/manage-a-project/#concept-mxk-414-vdb) and [Manage a Logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  In the left-side navigation pane, click **Log Storage**. In the **Logstores** list, click the Logstore that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5148375171/p768903.png)
    
4.  In the upper-left corner of the page that appears, click **Data Transformation**.
    
5.  In the code editor that appears, enter the following data transformation statements:
    
    ```
    e_set("tags", "target-a,target-b")
    e_split("tags")
    e_if(op_eq(v("tags"), "target-a"), e_output("target-a"))
    e_if(op_eq(v("tags"), "target-b"), e_output("target-b"))
    e_drop()
    ```
    
    -   Use the e\_set function to specify target-a and target-b as tags for raw log entries. For more information, see [e\_set](/help/en/sls/field-processing-functions#section-w06-8wp-cx1).
        
    -   Use the e\_split function to categorize raw log entries based on the tags that you specify. For more information, see [e\_split](/help/en/sls/event-processing-functions#section-urg-dob-o79).
        
    -   Use the e\_output function to distribute the log entries that are categorized by the e\_split function to the target-a and target-b storage destinations. For more information, see [e\_output](/help/en/sls/event-processing-functions#section-zi7-wtp-30c).
        
    -   Use the e\_drop() function to specify conditions. If a log entry does not meet the specified conditions, the log entry is discarded and is not distributed. For more information, see [e\_drop](/help/en/sls/event-processing-functions#section-sn7-4pm-kly).
        
    
6.  Click **Preview Data**.
    
    On the Transformation Results tab, the specified tags are added to raw log entries. The raw log entries that contain the target-a tag are distributed to the target-a storage destination, and the raw log entries that contain the target-b tag are distributed to the target-b storage destination.
    
7.  Click **Save as Transformation Job**.
    
8.  In the **Create Data Transformation Job** panel, configure the parameters. The following tables describe the parameters.
    
    1.  Configure the basic parameters.
        
        **Parameter**
        
        **Description**
        
        Job Name
        
        The name of the data transformation job. In this example, the name of the job is test.
        
        Authorization Method
        
        The method that is used to authorize Simple Log Service to read data from the source Logstore. In this example, Default Role is selected.
        
    2.  Configure the parameters for the target-a storage destination.
        
        **Parameter**
        
        **Description**
        
        Destination Name
        
        The name of the storage destination. In this example, the name of the storage destination is target-a.
        
        Destination Region
        
        The region where the destination project resides. In this example, China (Hangzhou) is selected.
        
        Destination Project
        
        The name of the destination project. In this example, the name of the storage destination is target-a.
        
        Target Store
        
        The name of the destination Logstore. In this example, the name of the destination Logstore is logstore-a.
        
        Authorization Method
        
        The method that is used to authorize Simple Log Service to read data from and write data to target-a.
        
        In this example, Default Role is selected.
        
    3.  Configure the parameters for the target-b storage destination.
        
        **Parameter**
        
        **Description**
        
        Destination Name
        
        The name of the storage destination. In this example, the name of the storage destination is target-b.
        
        Destination Region
        
        The region where the destination project resides. In this example, China (Hangzhou) is selected.
        
        Destination Project
        
        The name of the destination project. In this example, the name of the destination project is target-b.
        
        Target Store
        
        The name of the destination Logstore. In this example, the name of the destination Logstore is logstore-b.
        
        Authorization Method
        
        The method that is used to authorize Simple Log Service to read data from and write data to target-b.
        
        In this example, Default Role is selected.
        
    4.  Configure the parameters in the Time Range for Data Transformation section.
        
        **Parameter**
        
        **Description**
        
        Time Range
        
        The time range for data transformation. If you select All, Simple Log Service transforms all log entries in the source Logstore.
        
9.  Click **OK**.
    

## Result

-   Open the target-a project. On the **Log Storage** > **Logstores** tab, select the logstore-a Logstore. Then, you can view the log entries that are distributed to the logstore-a Logstore.
    
-   Open the target-b project. On the **Log Storage** > **Logstores** tab, select the logstore-b Logstore. Then, you can view the log entries that are distributed to the logstore-b Logstore.
