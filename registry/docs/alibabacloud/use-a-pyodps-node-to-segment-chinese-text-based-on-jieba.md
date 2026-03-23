In scenarios in which you want to perform text analysis, information retrieval, text mining, feature extraction, search engine building, machine translation, or language model training, you can use a PyODPS node in DataWorks to segment Chinese text based on the open source segmentation tool Jieba and analyze and process text. If the default dictionary of Jieba cannot meet your business requirements, you can create a custom dictionary to add entries or modify segmentation results.

## Background information

DataWorks provides PyODPS nodes. You can edit Python code and use MaxCompute SDK for Python on PyODPS nodes of DataWorks for data development. PyODPS nodes of DataWorks include PyODPS 2 nodes and PyODPS 3 nodes. PyODPS 3 provides a simple, easy-to-use API and can be installed by using pip. This way, you can better use the resources and features of MaxCompute. We recommend that you use PyODPS 3 nodes for data development. For more information, see [Develop a PyODPS 3 task](/help/en/dataworks/user-guide/create-a-pyodps-3-node#task-2503258).

**Important**

-   PyODPS 3 nodes support only Python 3.X. PyODPS 2 nodes support Python 2.X and Python 3.X. If you want to use Python 2.X, you can select only PyODPS 2 nodes.
    
-   The operations in this topic are only for reference. We recommend that you do not use them in the production environment.
    

## Prerequisites

1.  A DataWorks workspace is created. For more information, see [Create and manage workspaces](/help/en/dataworks/user-guide/create-and-manage-workspaces/).
    
2.  A MaxCompute data source is added and is associated with the workspace. For more information, see [Add a MaxCompute data source and associate the data source with a workspace](/help/en/dataworks/user-guide/create-a-maxcompute-data-source).
    

## Preparation: Download the open source Jieba package

Follow the instructions that are shown in the following figure to download the [open source Jieba package](https://github.com/fxsjy/jieba) from GitHub.![clone](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1728707061/p141586.png)

## Practice 1: Use the open source Jieba package to segment Chinese text

1.  Create a workflow. For more information, see [Create a workflow](/help/en/dataworks/user-guide/create-a-workflow#task-2510738).
    
2.  Create a MaxCompute resource and upload the **jieba-master.zip** package.
    
    1.  Right-click the name of the created workflow and choose **Create Resource** > **MaxCompute** > **Archive**.
        
    2.  In the **Create Resource** dialog box, configure the parameters and click **Create**.
        
        ![新建资源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1728707061/p141601.png)The following table describes some of the parameters.
        
        **Parameter**
        
        **Description**
        
        **File**
        
        Click **Upload** and upload the downloaded jieba-master.zip package as prompted.
        
        **Name**
        
        The name of the resource. The resource name can be different from the name of the file that you upload but must comply with specific conventions. You can specify a custom resource name as prompted. In this practice, this parameter is set to **jieba-master.zip**.
        
    3.  Click the ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6681659951/p72472.png) icon in the top toolbar to commit the resource.
        
3.  Create a table named **jieba\_test** and a table named **jieba\_result**. The jieba\_test table is used to store test data. The jieba\_result table is used to store the test result.
    
    To create a table, perform the following operations: Right-click the name of the created workflow and choose **Create Table** > **MaxCompute** > **Table**. In the Create Table dialog box, configure the parameters as prompted and click Create. Then, execute a DDL statement to configure fields in the table. After the tables are created, commit the tables to the development environment. For more information about how to create tables, see [Create and manage MaxCompute tables](/help/en/dataworks/user-guide/create-and-manage-maxcompute-tables).
    
    The following table describes the DDL statements that are used to configure fields in the two tables.
    
    **Table**
    
    **DDL statement**
    
    **Description**
    
    jieba\_test
    
    ```
    CREATE TABLE jieba_test (
        `chinese` string,
        `content` string
    );
    ```
    
    Stores test data.
    
    jieba\_result
    
    ```
    CREATE TABLE jieba_result (
        `chinese` string
    ) ;
    ```
    
    Stores the test result.
    
4.  Download test data and import the test data to the jieba\_test table.
    
    1.  Download the [jieba\_test.csv](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/124882/cn_zh/1562725154626/jieba_test.csv) file that contains test data to your on-premises machine.
        
    2.  Click the ![导入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8511359951/p75130.png) icon in the Scheduled Workflow pane of the **DataStudio** page.
        
    3.  In the **Data Import Wizard** dialog box, enter the name of the table jieba\_test to which you want to import data, select the table, and then click **Next**.
        
    4.  Upload the jieba\_test.csv file from your on-premises machine, configure upload information, preview data, and then click **Next**.
        
    5.  Select **By Name** and click **Import Data**.
        
5.  Create a PyODPS 3 node.
    
    1.  Right-click the name of the created workflow and choose **Create Node** > **MaxCompute** > **PyODPS 3**.
        
    2.  In the **Create Node** dialog box, configure the **Name** parameter and click **Confirm**. In this example, the node is named word\_split.
        
6.  Use the open source Jieba package to run segmentation code.
    
    Run the following sample code on the PyODPS 3 node to segment the test data in the jieba\_test table and return the first 10 rows of segmentation result data:
    
    ```
    def test(input_var):
        import jieba
        result = jieba.cut(input_var, cut_all=False)
        return "/ ".join(result)
    
    # odps.stage.mapper.split.size can be used to improve the execution parallelism.
    hints = {
        'odps.isolation.session.enable': True,
        'odps.stage.mapper.split.size': 64,
    }
    libraries =['jieba-master.zip']  # Reference the jieba-master.zip package.
    src_df = o.get_table('jieba_test').to_df()  # Reference the data in the jieba_test table.
    result_df = src_df.chinese.map(test).persist('jieba_result', hints=hints, libraries=libraries)
    print(result_df.head(10))  # Display the first 10 rows of segmentation result data. You can view more data in the jieba_result table.
    ```
    
    **Note**
    
    odps.stage.mapper.split.size can be used to improve the execution parallelism. For more information, see [Flag parameters](/help/en/maxcompute/user-guide/flag-parameters#concept-2278178).
    
7.  View the result.
    
    You can use one of the following methods to view the execution result of the Jieba segmentation program:
    
    -   Method 1: View the execution result of the Jieba segmentation program on the **Runtime Log** tab in the lower part of the page.
        
    -   Method 2: Click **Ad Hoc Query** in the left-side navigation pane of the DataStudio page and create an ad hoc query node to view the data in the jieba\_result table.
        
        ```
        select * from jieba_result;
        ```
        

## Practice 2: Use a custom dictionary to segment Chinese text

If the default dictionary of the Jieba tool does not meet your requirements, you can use a custom dictionary. This section provides an example on how to use a custom dictionary to segment Chinese text.

1.  Create a MaxCompute resource.
    
    You can use a PyODPS user-defined function (UDF) to read resources uploaded to MaxCompute. The resources can be tables or files. In this case, you must write the UDF as a closure function or a function of the callable class.
    
    **Note**
    
    You can create MaxCompute functions in DataWorks to reference complex UDFs. For more information, see [Create and use a MaxCompute function](/help/en/dataworks/user-guide/create-and-use-custom-functions#task-1930135).
    
    In this section, a closure function is called to reference the custom dictionary file key\_words.txt that is uploaded to MaxCompute.
    
    1.  Create a MaxCompute function of the File type.
        
        Right-click the name of the created workflow and choose **Create Resource** > **MaxCompute** > **File**. In the Create Resource dialog box, set the Name parameter to key\_words.txt and click **Create**.
        
    2.  On the configuration tab of the key\_words.txt resource, enter the content of the custom dictionary and save and commit the resource.
        
        The following content is the example content of the custom dictionary. You can enter the content of the custom dictionary based on your test requirements.
        
        ```
        增量备份
        安全合规
        ```
        
2.  Use the custom dictionary to run segmentation code.
    
    Run the following sample code on the PyODPS 3 node to segment the test data in the jieba\_test table and return the first 10 rows of segmentation result data:
    
    ```
    def test(resources):
        import jieba
        fileobj = resources[0]
        jieba.load_userdict(fileobj)
    
        def h(input_var):  # Call the nested h() function to load the dictionary and segment text.
            result = jieba.cut(input_var, cut_all=False)
            return "/ ".join(result)
    
        return h
    
    # odps.stage.mapper.split.size can be used to improve the execution parallelism.
    hints = {
        'odps.isolation.session.enable': True,
        'odps.stage.mapper.split.size': 64,
    }
    libraries =['jieba-master.zip']  # Reference the jieba-master.zip package.
    src_df = o.get_table('jieba_test').to_df()  # Reference the data in the jieba_test table.
    
    file_object = o.get_resource('key_words.txt') # Call the get_resource() function to reference the MaxCompute resource.
    mapped_df = src_df.chinese.map(test, resources=[file_object])  # Call the map function to transfer the resources parameter.
    result_df = mapped_df.persist('jieba_result2', hints=hints, libraries=libraries)
    print(result_df.head(10))  # Display the first 10 rows of segmentation result data. You can view more data in the jieba_result2 table.
    ```
    
    **Note**
    
    odps.stage.mapper.split.size can be used to improve the execution parallelism. For more information, see [Flag parameters](/help/en/maxcompute/user-guide/flag-parameters#concept-2278178).
    
3.  View the result.
    
    You can use one of the following methods to view the execution result of the custom dictionary:
    
    -   Method 1: View the execution result of the custom dictionary on the **Runtime Log** tab in the lower part of the page.
        
    -   Method 2: Click **Ad Hoc Query** in the left-side navigation pane of the DataStudio page and create an ad hoc query node to view the data in the jieba\_result2 table.
        
        ```
        select * from jieba_result2;
        ```
