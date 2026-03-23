MaxCompute provides a MapReduce programming interface. You can create a MaxCompute MR node to schedule and run MapReduce jobs written in Java to process large-scale datasets.

## **Background**

MapReduce is a distributed computing framework that combines user-written business logic with built-in components to create a complete distributed program that runs concurrently on a Hadoop cluster. MaxCompute provides two versions of the MapReduce programming interface. For more information, see [MapReduce](/help/en/maxcompute/overview-24).

-   MaxCompute MapReduce: The native interface of MaxCompute. It provides fast execution, enables rapid development, and does not expose the file system.
    
-   Extended MaxCompute MapReduce (MR2): An extension to MaxCompute MapReduce that supports more complex job scheduling. Its MapReduce implementation is consistent with the native MaxCompute interface.
    

In DataWorks, you can use a MaxCompute MR node to schedule and run MaxCompute MapReduce tasks and integrate them with other jobs.

## Prerequisites

-   A MaxCompute computing resource is [attached to the DataWorks workspace](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb6140ogu).
    
-   The required resources are uploaded and published. For more information, see [Resource management](/help/en/dataworks/user-guide/resource-management-of-data-studio/).
    

**Note**

You must upload and publish your resources before you create a MaxCompute MR node.

## **Limitations**

For the limitations on using MaxCompute MR nodes, see [Limits](/help/en/maxcompute/user-guide/limits-3).

## **Procedure**

1.  In the MaxCompute MR node editor, perform the following steps.
    
    #### Develop the MR code
    
    This example uses a MaxCompute MR node to`count the occurrences of each string in the wc_in table and write the results to the wc_out table.`
    
    1.  Upload, submit, and publish the`mapreduce-examples.jar` resource. For more information, see [Resource management](/help/en/dataworks/user-guide/resource-management-of-data-studio/).
        
        **Note**
        
        For more information about the internal logic of the`mapreduce-examples.jar` package, see [WordCount example](/help/en/maxcompute/user-guide/wordcount-example#concept-rtv-dhg-vdb).
        
    2.  Enter the following sample code in the editor.
        
        ```
        -- Create the input table.
        CREATE TABLE IF NOT EXISTS wc_in (key STRING, VALUE STRING);
        -- Create the output table.
        CREATE TABLE IF NOT EXISTS wc_out (key STRING, cnt BIGINT);
            --- Create the system dual table.
            DROP TABLE IF EXISTS dual;
            CREATE TABLE dual(id BIGINT); -- If the pseudo table does not exist in the workspace, you must create it and initialize its data.
            --- Initialize data in the system pseudo table.
            INSERT OVERWRITE TABLE dual SELECT count(*) FROM dual;
            --- Insert sample data into the input table wc_in.
            INSERT OVERWRITE TABLE wc_in SELECT * FROM (
            SELECT 'project','val_pro' FROM dual 
            UNION ALL 
            SELECT 'problem','val_pro' FROM dual
            UNION ALL 
            SELECT 'package','val_a' FROM dual
            UNION ALL 
            SELECT 'pad','val_a' FROM dual
              ) b;
        -- Reference the JAR resource that you just uploaded. You can find this resource in the Resource section, right-click it, and choose Reference Resource.
        --@resource_reference{"mapreduce-examples.jar"}
        jar -resources mapreduce-examples.jar -classpath ./mapreduce-examples.jar com.aliyun.odps.mapred.open.example.WordCount wc_in wc_out
        ```
        
        **Note**
        
        Code description:
        
        -   `--@resource_reference`: You can right-click a resource name in the **Resource** section and choose **Reference Resource** to automatically generate this statement.
            
        -   `-resources`: The name of the referenced JAR resource file.
            
        -   `-classpath`: The path to the JAR package. Since the resource is referenced, the path is always`./` followed by the JAR filename.
            
        -   `com.aliyun.odps.mapred.open.example.WordCount`: The Main Class in the JAR package called during execution. This name must exactly match the Main Class in the JAR package.
            
        -   `wc_in`: The name of the input table for the MapReduce job. This table was created in the preceding code.
            
        -   `wc_out`: The name of the output table for the MapReduce job. This table was created in the preceding code.
            
        -   If a MapReduce job uses multiple JAR resources, format the classpath as`-classpath ./xxxx1.jar,./xxxx2.jar`, separating the paths with a comma (,).
            
        
    
    #### **Run the MR job**
    
    1.  In the **Run Configuration** section on the right, configure the **Compute Engine Instance**, **Compute Quota**, and **Resource Group**.
        
        **Note**
        
        To access a data source on the Public Network or in a Virtual Private Cloud (VPC), you must use a scheduling resource group that can connect to the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    2.  In the toolbar, click **Run**. In the **Parameters** dialog box that appears, select your MaxCompute data source and run the job.
        
    
    #### **(Optional) View the results**
    
    Query the data in the output table`wc_out` using a MaxCompute SQL node.
    
    ```
    SELECT * FROM wc_out;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+
    | key        | cnt        |
    +------------+------------+
    | package    | 1          |
    | pad        | 1          |
    | problem    | 1          |
    | project    | 1          |
    | val_a      | 2          |
    | val_pro    | 2          |
    +------------+------------+
    ```
    
2.  If the node needs to run periodically, configure its scheduling properties. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After you configure the node, you must deploy it. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is deployed, you can view its status in the O&M Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## Related documentation

For more information about developing MaxCompute MR jobs for different use cases, see:

-   [MapOnly example](/help/en/maxcompute/user-guide/maponly-example)
    
-   [MultipleInOut example](/help/en/maxcompute/user-guide/multipleinout-example)
    
-   [MultiJobs example](/help/en/maxcompute/user-guide/multijobs-example)
    
-   [Resource usage example](/help/en/maxcompute/user-guide/resource-usage-example)
    
-   [Examples of using partitioned tables as input](/help/en/maxcompute/user-guide/examples-of-using-partitioned-tables-as-input)
    

Find solutions to common issues that can occur when you run MR jobs. For more information, see [FAQ about MaxCompute MapReduce](/help/en/maxcompute/user-guide/faq-about-maxcompute-mapreduce).
