This topic describes how to use a PyODPS node to query data based on specific criteria.

## Prerequisites

Before you begin, complete the following tasks:

-   You have [activated MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   You have [activated DataWorks](/help/en/dataworks/purchase-guide#concept-1215588).
    
-   You have [created a workflow](/help/en/dataworks/create-a-workflow-1#concept-m1t-nzl-s2b) in DataWorks. The procedure in this topic is based on a DataWorks workspace that uses basic mode and has not joined the public preview of DataStudio.
    

## Procedure

1.  Download the test dataset and import it to MaxCompute.
    
    1.  Download and decompress the [Iris](https://archive.ics.uci.edu/static/public/53/iris.zip) dataset, and rename iris.data to iris.csv.
        
    2.  Create a table named pyodps\_iris and upload the iris.csv dataset. For more information, see [Create a table and upload data](/help/en/dataworks/create-tables-and-upload-data#task-2363400).
        
        The following statement is used to create the table.
        
        ```
        CREATE TABLE if not exists pyodps_iris
        (
        sepallength  DOUBLE comment 'sepal length (cm)',
        sepalwidth   DOUBLE comment 'sepal width (cm)',
        petallength  DOUBLE comment 'petal length (cm)',
        petalwidth   DOUBLE comment 'petal width (cm)',
        name         STRING comment 'type'
        );
        ```
        
2.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
3.  In the left navigation pane, click **Workspace**.
    
4.  In the **Actions** column, choose **Shortcuts** > **Data Development**.
    
5.  On the Data Development page, right-click the flow and select **Create Node** > **MaxCompute** > **PyODPS 2**.
    
6.  In the **Create Node** dialog box, enter a node name and click **Confirm**.
    
7.  Enter the following code in the PyODPS node.
    
    ```
    import sys
    reload(sys)
    # Change the default encoding of the system.
    sys.setdefaultencoding('utf8')
    
    iris = DataFrame(o.get_table('pyodps_iris'))
    # Method 1: Return the output based on a condition.
    with o.execute_sql('select * from pyodps_iris WHERE sepallength > 5 ').open_reader() as reader4:
        print reader4.raw
        for record in reader4:
            print record["sepallength"],record["sepalwidth"],record["petallength"],record["petalwidth"],record["name"]
    
    # Method 2: Obtain the data result using the filter condition of an ODPS DataFrame.
    print iris[iris.sepallength > 5].head(5)
    
    # Method 3: Return the output using the query method.
    print iris.query("(sepallength < 5) and (petallength > 1.5)").head(5)
    ```
    
8.  Click ![Run](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6570122061/p148536.png).
    
    ![Click the Run button](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3087290061/p54321.jpg)
    
9.  You can view the result in the **Log**.
    
    ```
    Executing user script with PyODPS 0.8.0
    
    "sepallength","sepalwidth","petallength","petalwidth","name"
    5.1,3.5,1.4,0.2,"Iris-setosa"
    5.4,3.9,1.7,0.4,"Iris-setosa"
    5.4,3.7,1.5,0.2,"Iris-setosa"
    5.8,4.0,1.2,0.2,"Iris-setosa"
    5.7,4.4,1.5,0.4,"Iris-setosa"
    5.4,3.9,1.3,0.4,"Iris-setosa"
    5.1,3.5,1.4,0.3,"Iris-setosa"
    5.7,3.8,1.7,0.3,"Iris-setosa"
    5.1,3.8,1.5,0.3,"Iris-setosa"
    5.4,3.4,1.7,0.2,"Iris-setosa"
    5.1,3.7,1.5,0.4,"Iris-setosa"
    5.1,3.3,1.7,0.5,"Iris-setosa"
    5.2,3.5,1.5,0.2,"Iris-setosa"
    5.2,3.4,1.4,0.2,"Iris-setosa"
    5.4,3.4,1.5,0.4,"Iris-setosa"
    5.2,4.1,1.5,0.1,"Iris-setosa"
    5.5,4.2,1.4,0.2,"Iris-setosa"
    5.5,3.5,1.3,0.2,"Iris-setosa"
    5.1,3.4,1.5,0.2,"Iris-setosa"
    5.1,3.8,1.9,0.4,"Iris-setosa"
    5.1,3.8,1.6,0.2,"Iris-setosa"
    5.3,3.7,1.5,0.2,"Iris-setosa"
    7.0,3.2,4.7,1.4,"Iris-versicolor"
    6.4,3.2,4.5,1.5,"Iris-versicolor"
    6.9,3.1,4.9,1.5,"Iris-versicolor"
    5.5,2.3,4.0,1.3,"Iris-versicolor"
    6.5,2.8,4.6,1.5,"Iris-versicolor"
    5.7,2.8,4.5,1.3,"Iris-versicolor"
    6.3,3.3,4.7,1.6,"Iris-versicolor"
    6.6,2.9,4.6,1.3,"Iris-versicolor"
    5.2,2.7,3.9,1.4,"Iris-versicolor"
    5.9,3.0,4.2,1.5,"Iris-versicolor"
    6.0,2.2,4.0,1.0,"Iris-versicolor"
    6.1,2.9,4.7,1.4,"Iris-versicolor"
    5.6,2.9,3.6,1.3,"Iris-versicolor"
    6.7,3.1,4.4,1.4,"Iris-versicolor"
    5.6,3.0,4.5,1.5,"Iris-versicolor"
    5.8,2.7,4.1,1.0,"Iris-versicolor"
    6.2,2.2,4.5,1.5,"Iris-versicolor"
    5.6,2.5,3.9,1.1,"Iris-versicolor"
    5.9,3.2,4.8,1.8,"Iris-versicolor"
    6.1,2.8,4.0,1.3,"Iris-versicolor"
    6.3,2.5,4.9,1.5,"Iris-versicolor"
    6.1,2.8,4.7,1.2,"Iris-versicolor"
    6.4,2.9,4.3,1.3,"Iris-versicolor"
    6.6,3.0,4.4,1.4,"Iris-versicolor"
    6.8,2.8,4.8,1.4,"Iris-versicolor"
    6.7,3.0,5.0,1.7,"Iris-versicolor"
    6.0,2.9,4.5,1.5,"Iris-versicolor"
    5.7,2.6,3.5,1.0,"Iris-versicolor"
    5.5,2.4,3.8,1.1,"Iris-versicolor"
    5.5,2.4,3.7,1.0,"Iris-versicolor"
    5.8,2.7,3.9,1.2,"Iris-versicolor"
    6.0,2.7,5.1,1.6,"Iris-versicolor"
    5.4,3.0,4.5,1.5,"Iris-versicolor"
    6.0,3.4,4.5,1.6,"Iris-versicolor"
    6.7,3.1,4.7,1.5,"Iris-versicolor"
    6.3,2.3,4.4,1.3,"Iris-versicolor"
    5.6,3.0,4.1,1.3,"Iris-versicolor"
    5.5,2.5,4.0,1.3,"Iris-versicolor"
    5.5,2.6,4.4,1.2,"Iris-versicolor"
    6.1,3.0,4.6,1.4,"Iris-versicolor"
    5.8,2.6,4.0,1.2,"Iris-versicolor"
    5.6,2.7,4.2,1.3,"Iris-versicolor"
    5.7,3.0,4.2,1.2,"Iris-versicolor"
    5.7,2.9,4.2,1.3,"Iris-versicolor"
    6.2,2.9,4.3,1.3,"Iris-versicolor"
    5.1,2.5,3.0,1.1,"Iris-versicolor"
    5.7,2.8,4.1,1.3,"Iris-versicolor"
    6.3,3.3,6.0,2.5,"Iris-virginica"
    5.8,2.7,5.1,1.9,"Iris-virginica"
    7.1,3.0,5.9,2.1,"Iris-virginica"
    6.3,2.9,5.6,1.8,"Iris-virginica"
    6.5,3.0,5.8,2.2,"Iris-virginica"
    7.6,3.0,6.6,2.1,"Iris-virginica"
    7.3,2.9,6.3,1.8,"Iris-virginica"
    6.7,2.5,5.8,1.8,"Iris-virginica"
    7.2,3.6,6.1,2.5,"Iris-virginica"
    6.5,3.2,5.1,2.0,"Iris-virginica"
    6.4,2.7,5.3,1.9,"Iris-virginica"
    6.8,3.0,5.5,2.1,"Iris-virginica"
    5.7,2.5,5.0,2.0,"Iris-virginica"
    5.8,2.8,5.1,2.4,"Iris-virginica"
    6.4,3.2,5.3,2.3,"Iris-virginica"
    6.5,3.0,5.5,1.8,"Iris-virginica"
    7.7,3.8,6.7,2.2,"Iris-virginica"
    7.7,2.6,6.9,2.3,"Iris-virginica"
    6.0,2.2,5.0,1.5,"Iris-virginica"
    6.9,3.2,5.7,2.3,"Iris-virginica"
    5.6,2.8,4.9,2.0,"Iris-virginica"
    7.7,2.8,6.7,2.0,"Iris-virginica"
    6.3,2.7,4.9,1.8,"Iris-virginica"
    6.7,3.3,5.7,2.1,"Iris-virginica"
    7.2,3.2,6.0,1.8,"Iris-virginica"
    6.2,2.8,4.8,1.8,"Iris-virginica"
    6.1,3.0,4.9,1.8,"Iris-virginica"
    6.4,2.8,5.6,2.1,"Iris-virginica"
    7.2,3.0,5.8,1.6,"Iris-virginica"
    7.4,2.8,6.1,1.9,"Iris-virginica"
    7.9,3.8,6.4,2.0,"Iris-virginica"
    6.4,2.8,5.6,2.2,"Iris-virginica"
    6.3,2.8,5.1,1.5,"Iris-virginica"
    6.1,2.6,5.6,1.4,"Iris-virginica"
    7.7,3.0,6.1,2.3,"Iris-virginica"
    6.3,3.4,5.6,2.4,"Iris-virginica"
    6.4,3.1,5.5,1.8,"Iris-virginica"
    6.0,3.0,4.8,1.8,"Iris-virginica"
    6.9,3.1,5.4,2.1,"Iris-virginica"
    6.7,3.1,5.6,2.4,"Iris-virginica"
    6.9,3.1,5.1,2.3,"Iris-virginica"
    5.8,2.7,5.1,1.9,"Iris-virginica"
    6.8,3.2,5.9,2.3,"Iris-virginica"
    6.7,3.3,5.7,2.5,"Iris-virginica"
    6.7,3.0,5.2,2.3,"Iris-virginica"
    6.3,2.5,5.0,1.9,"Iris-virginica"
    6.5,3.0,5.2,2.0,"Iris-virginica"
    6.2,3.4,5.4,2.3,"Iris-virginica"
    5.9,3.0,5.1,1.8,"Iris-virginica"
    5.1 3.5 1.4 0.2 Iris-setosa
    5.4 3.9 1.7 0.4 Iris-setosa
    5.4 3.7 1.5 0.2 Iris-setosa
    5.8 4.0 1.2 0.2 Iris-setosa
    5.7 4.4 1.5 0.4 Iris-setosa
    5.4 3.9 1.3 0.4 Iris-setosa
    5.1 3.5 1.4 0.3 Iris-setosa
    5.7 3.8 1.7 0.3 Iris-setosa
    5.1 3.8 1.5 0.3 Iris-setosa
    5.4 3.4 1.7 0.2 Iris-setosa
    5.1 3.7 1.5 0.4 Iris-setosa
    5.1 3.3 1.7 0.5 Iris-setosa
    5.2 3.5 1.5 0.2 Iris-setosa
    5.2 3.4 1.4 0.2 Iris-setosa
    5.4 3.4 1.5 0.4 Iris-setosa
    5.2 4.1 1.5 0.1 Iris-setosa
    5.5 4.2 1.4 0.2 Iris-setosa
    5.5 3.5 1.3 0.2 Iris-setosa
    5.1 3.4 1.5 0.2 Iris-setosa
    5.1 3.8 1.9 0.4 Iris-setosa
    5.1 3.8 1.6 0.2 Iris-setosa
    5.3 3.7 1.5 0.2 Iris-setosa
    7.0 3.2 4.7 1.4 Iris-versicolor
    6.4 3.2 4.5 1.5 Iris-versicolor
    6.9 3.1 4.9 1.5 Iris-versicolor
    5.5 2.3 4.0 1.3 Iris-versicolor
    6.5 2.8 4.6 1.5 Iris-versicolor
    5.7 2.8 4.5 1.3 Iris-versicolor
    6.3 3.3 4.7 1.6 Iris-versicolor
    6.6 2.9 4.6 1.3 Iris-versicolor
    5.2 2.7 3.9 1.4 Iris-versicolor
    5.9 3.0 4.2 1.5 Iris-versicolor
    6.0 2.2 4.0 1.0 Iris-versicolor
    6.1 2.9 4.7 1.4 Iris-versicolor
    5.6 2.9 3.6 1.3 Iris-versicolor
    6.7 3.1 4.4 1.4 Iris-versicolor
    5.6 3.0 4.5 1.5 Iris-versicolor
    5.8 2.7 4.1 1.0 Iris-versicolor
    6.2 2.2 4.5 1.5 Iris-versicolor
    5.6 2.5 3.9 1.1 Iris-versicolor
    5.9 3.2 4.8 1.8 Iris-versicolor
    6.1 2.8 4.0 1.3 Iris-versicolor
    6.3 2.5 4.9 1.5 Iris-versicolor
    6.1 2.8 4.7 1.2 Iris-versicolor
    6.4 2.9 4.3 1.3 Iris-versicolor
    6.6 3.0 4.4 1.4 Iris-versicolor
    6.8 2.8 4.8 1.4 Iris-versicolor
    6.7 3.0 5.0 1.7 Iris-versicolor
    6.0 2.9 4.5 1.5 Iris-versicolor
    5.7 2.6 3.5 1.0 Iris-versicolor
    5.5 2.4 3.8 1.1 Iris-versicolor
    5.5 2.4 3.7 1.0 Iris-versicolor
    5.8 2.7 3.9 1.2 Iris-versicolor
    6.0 2.7 5.1 1.6 Iris-versicolor
    5.4 3.0 4.5 1.5 Iris-versicolor
    6.0 3.4 4.5 1.6 Iris-versicolor
    6.7 3.1 4.7 1.5 Iris-versicolor
    6.3 2.3 4.4 1.3 Iris-versicolor
    5.6 3.0 4.1 1.3 Iris-versicolor
    5.5 2.5 4.0 1.3 Iris-versicolor
    5.5 2.6 4.4 1.2 Iris-versicolor
    6.1 3.0 4.6 1.4 Iris-versicolor
    5.8 2.6 4.0 1.2 Iris-versicolor
    5.6 2.7 4.2 1.3 Iris-versicolor
    5.7 3.0 4.2 1.2 Iris-versicolor
    5.7 2.9 4.2 1.3 Iris-versicolor
    6.2 2.9 4.3 1.3 Iris-versicolor
    5.1 2.5 3.0 1.1 Iris-versicolor
    5.7 2.8 4.1 1.3 Iris-versicolor
    6.3 3.3 6.0 2.5 Iris-virginica
    5.8 2.7 5.1 1.9 Iris-virginica
    7.1 3.0 5.9 2.1 Iris-virginica
    6.3 2.9 5.6 1.8 Iris-virginica
    6.5 3.0 5.8 2.2 Iris-virginica
    7.6 3.0 6.6 2.1 Iris-virginica
    7.3 2.9 6.3 1.8 Iris-virginica
    6.7 2.5 5.8 1.8 Iris-virginica
    7.2 3.6 6.1 2.5 Iris-virginica
    6.5 3.2 5.1 2.0 Iris-virginica
    6.4 2.7 5.3 1.9 Iris-virginica
    6.8 3.0 5.5 2.1 Iris-virginica
    5.7 2.5 5.0 2.0 Iris-virginica
    5.8 2.8 5.1 2.4 Iris-virginica
    6.4 3.2 5.3 2.3 Iris-virginica
    6.5 3.0 5.5 1.8 Iris-virginica
    7.7 3.8 6.7 2.2 Iris-virginica
    7.7 2.6 6.9 2.3 Iris-virginica
    6.0 2.2 5.0 1.5 Iris-virginica
    6.9 3.2 5.7 2.3 Iris-virginica
    5.6 2.8 4.9 2.0 Iris-virginica
    7.7 2.8 6.7 2.0 Iris-virginica
    6.3 2.7 4.9 1.8 Iris-virginica
    6.7 3.3 5.7 2.1 Iris-virginica
    7.2 3.2 6.0 1.8 Iris-virginica
    6.2 2.8 4.8 1.8 Iris-virginica
    6.1 3.0 4.9 1.8 Iris-virginica
    6.4 2.8 5.6 2.1 Iris-virginica
    7.2 3.0 5.8 1.6 Iris-virginica
    7.4 2.8 6.1 1.9 Iris-virginica
    7.9 3.8 6.4 2.0 Iris-virginica
    6.4 2.8 5.6 2.2 Iris-virginica
    6.3 2.8 5.1 1.5 Iris-virginica
    6.1 2.6 5.6 1.4 Iris-virginica
    7.7 3.0 6.1 2.3 Iris-virginica
    6.3 3.4 5.6 2.4 Iris-virginica
    6.4 3.1 5.5 1.8 Iris-virginica
    6.0 3.0 4.8 1.8 Iris-virginica
    6.9 3.1 5.4 2.1 Iris-virginica
    6.7 3.1 5.6 2.4 Iris-virginica
    6.9 3.1 5.1 2.3 Iris-virginica
    5.8 2.7 5.1 1.9 Iris-virginica
    6.8 3.2 5.9 2.3 Iris-virginica
    6.7 3.3 5.7 2.5 Iris-virginica
    6.7 3.0 5.2 2.3 Iris-virginica
    6.3 2.5 5.0 1.9 Iris-virginica
    6.5 3.0 5.2 2.0 Iris-virginica
    6.2 3.4 5.4 2.3 Iris-virginica
    5.9 3.0 5.1 1.8 Iris-virginica
    Sql compiled:
    CREATE TABLE tmp_pyodps_xxxx LIFECYCLE 1 AS
    SELECT *
    FROM xxx.`pyodps_iris` t1
    WHERE t1.`sepallength` > 5
    Instance ID: 2019xxxx
      Log view: http://logview.odps.aliyun.com/logview/?h=http://service.cn.maxcompute.aliyun.com/api&p=xxxx&i=2019xxxx&token=xxxx
    
       sepallength  sepalwidth  petallength  petalwidth         name
    0          5.1         3.5          1.4         0.2  Iris-setosa
    1          5.4         3.9          1.7         0.4  Iris-setosa
    2          5.4         3.7          1.5         0.2  Iris-setosa
    3          5.8         4.0          1.2         0.2  Iris-setosa
    4          5.7         4.4          1.5         0.4  Iris-setosa
    Sql compiled:
    CREATE TABLE tmp_pyodps_xxxx LIFECYCLE 1 AS
    SELECT *
    FROM xxxx.`pyodps_iris` t1
    WHERE (t1.`sepallength` < 5) AND (t1.`petallength` > 1.5)
    Instance ID: 2019xxxx
      Log view: http://logview.odps.aliyun.com/logview/?h=http://service.cn.maxcompute.aliyun.com/api&p=xxxx&i=2019xxxx&token=xxxx
    
       sepallength  sepalwidth  petallength  petalwidth             name
    0          4.8         3.4          1.6         0.2      Iris-setosa
    1          4.8         3.4          1.9         0.2      Iris-setosa
    2          4.7         3.2          1.6         0.2      Iris-setosa
    3          4.8         3.1          1.6         0.2      Iris-setosa
    4          4.9         2.4          3.3         1.0  Iris-versicolor
    ```
