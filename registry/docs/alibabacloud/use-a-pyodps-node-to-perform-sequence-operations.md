This topic describes how to perform sequence and execution operations in PyODPS.

## Procedure

1.  You have [created a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project).
    
2.  Ensure that you have [created a DataWorks workspace](/help/en/dataworks/user-guide/create-a-workspace#task-2279955). This topic uses a workspace that is in public preview for DataStudio as an example.
    
3.  Create a table named `pyodps_iris` in DataWorks.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select a region in the upper-left corner.
        
    2.  On the **Workspaces** page, find the target workspace and in the **Actions** column, choose **Shortcuts** > **DataStudio**.
        
    3.  On the **Debugging Configurations** page, select **Computing Resource** and **Resource Group**.
        
        If no resource group is displayed, click Create Resource Group and wait a few minutes for the resource group to be created. On the **Resource Groups** page, attach a workspace to the resource group.
        
    4.  Run the following statement in a MaxCompute SQL node to create the `pyodps_iris` table.
        
        ```
        CREATE TABLE if not exists pyodps_iris
        (
        sepallength  DOUBLE comment 'Sepal length (cm)',
        sepalwidth   DOUBLE comment 'Sepal width (cm)',
        petallength  DOUBLE comment 'Petal length (cm)',
        petalwidth   DOUBLE comment 'Petal width (cm)',
        name         STRING comment 'Species'
        );
        ```
        
4.  Download the test dataset and import it into MaxCompute.
    
    1.  Download and decompress the [Iris flower](https://archive.ics.uci.edu/static/public/53/iris.zip) dataset. Rename the `iris.data` file to `iris.csv`.
        
    2.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and select a region in the upper-left corner.
        
    3.  In the navigation pane on the left, choose **Data Integration** > **Data Upload and Download**.
        
    4.  Click **Go to** **Data Upload and Download**.
        
    5.  In the navigation pane on the left, click the upload icon ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4960874671/p1031714.png), and click **Upload Data**.
        
5.  On the DataStudio page, create a new MaxCompute **PyODPS 2** node. Enter the following sample code and click Run.
    
    ```
    from odps import DataFrame
    iris = DataFrame(o.get_table('iristable_new'))
    
    # Get columns.
    print iris.sepallength.head(5)
    
    print iris['sepallength'].head(5)
    
    # View the data type of a column.
    print iris.sepallength.dtype
    
    # Change the data type of a column.
    iris.sepallength.astype('int')
    
    # Perform calculations.
    print iris.groupby('name').sepallength.max().head(5)
    
    print iris.sepallength.max()
    
    # Rename a column.
    print iris.sepalwidth.rename('speal_width').head(5)
    
    # Perform simple column operations.
    print (iris.sepallength + iris.sepalwidth).rename('sum_sepal').head(5)
    ```
    
6.  Create and run a PyODPS node named PyExecute with the following code:
    
    ```
    from odps import options
    from odps import DataFrame
    
    # View the Logview URL of the runtime instance.
    options.verbose = True
    iris = DataFrame(o.get_table('pyodps_iris'))
    iris[iris.sepallength < 5].exclude('sepallength')[:5].execute()
    
    my_logs = []
    def my_loggers(x):
      my_logs.append(x)
    
    options.verbose_log = my_loggers
    
    iris[iris.sepallength < 5].exclude('sepallength')[:5].execute()
    
    print(my_logs)
    
    # Cache the intermediate Collection result.
    cached = iris[iris.sepalwidth < 3.5].cache()
    print cached.head(3)
    
    # Perform asynchronous and parallel execution.
    from odps.df import Delay
    delay = Delay() # Create a Delay object.
    df = iris[iris.sepalwidth < 5].cache()  # A common dependency exists.
    future1 = df.sepalwidth.sum().execute(delay=delay) # The system immediately returns a future object, but the execution is not started.
    future2 = df.sepalwidth.mean().execute(delay=delay)
    future3 = df.sepalwidth.max().execute(delay=delay)
    
    delay.execute(n_parallel=3)
    
    print future1.result()
    print future2.result()
    print future3.result()
    ```
