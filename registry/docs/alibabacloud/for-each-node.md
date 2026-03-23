In a data processing workflow, use the **for-each node** to execute the same subtask for each item in a list, such as a list of filenames or partitions. The node automatically iterates over the result set from an upstream node (typically an assignment node) and executes its internal loop body for each element. This eliminates the need to manually create a task for each item, allowing for more dynamic and automated workflows.

## Use cases

The **for-each node** is ideal for parameterized execution where the same analysis or processing logic runs on data from different business units, product lines, or configuration items. For example, if your company has multiple product lines and you need to generate a separate daily report for each one, the processing logic is identical, but the target data is different.

Similar to a `for` loop in a programming language, the **for-each node** automatically iterates over a list of items (such as table names, partition names, or filenames) and executes a predefined sub-workflow for each item. This significantly enhances the automation and flexibility of your workflows.

## Usage notes

-   **Edition**: DataWorks Standard Edition or higher.
    
-   **Permissions**: You need to have the **Development** or **Workspace Manager** role in your DataWorks workspace. For more information, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    

## How it works

The for-each node acts as a container that encapsulates a customizable sub-workflow, known as the loop body. It operates as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3297702771/CAEQUxiBgMD.lbie4BkiIDk3ZDY3YmY3NmQ2NTQ5ZDViNjVhYzllYjIxN2UzNjYy5831686_20251028143947.592.svg)

1.  **Data input**: The for-each node depends on an upstream **assignment node or another value-assigning node** (for example, an EMR Hive node). It retrieves a **result set** in array format by binding to the `loopDataArray` parameter.
    
2.  **Loop execution**: After the node starts, it iterates through each element of the **result set**. For each element, it fully executes the internal **loop body** once (from `start` to `end`).
    
    **Note**
    
    The start and end nodes are not editable. They only mark the beginning and end of the loop body.
    
3.  **Data passing**: In each iteration, nodes within the **loop body** can access the current element's value through **built-in variables**, such as `${dag.foreach.current}`.
    

#### **Built-in variables**

**Important**

Variables in the `${...}` format use a template syntax specific to DataWorks. DataWorks parses these parameters directly and statically replaces them.

Inside the for-each loop body, use the following **built-in variables** to access loop status and data:

**Built-in variable**

**Description**

**Analogy to a for loop**

`${dag.loopDataArray}`

Retrieves the complete **result set** from the upstream **assignment node**.

Consider the following for loop:

```
for(int i=0;i<data.length;i++) {
   print(data[i]);
}
```

-   `${dag.loopDataArray}` is equivalent to `data`.
    
-   `${dag.foreach.current}` is equivalent to `data[i]`.
    
-   `${dag.offset}` is equivalent to `i`.
    
-   `${dag.loopTimes}` is equivalent to `i+1`.
    

`${dag.foreach.current}`

Gets the data item being processed in the **current** loop.

`${dag.offset}`

Gets the **offset** of the current loop, starting from **0**.

`${dag.loopTimes}`

Gets the **iteration number** of the current loop, starting from **1**.

When the upstream output is a **two-dimensional array** (such as a SQL query result), you can also use the following syntax for precise value retrieval:

Other variables

Description

`${dag.foreach.current}`

Gets the current data row (a one-dimensional array) as a string, with elements separated by commas (`,`).

`${dag.foreach.current[n]}`

Gets the `n`th element from the current data row (a one-dimensional array).

`${dag.loopDataArray[i][j]}`

Gets the value from the `i`th row and `j`th column of the entire **result set**.

> The for-each node does not currently support nested loops. This syntax is for value retrieval only.

## Limitations

-   **Execution mode**: The loop supports both **serial execution** and **parallel execution**. Choose **parallel execution** when iterations are independent of each other.
    
-   **Loop limit**: By default, the maximum number of iterations is **128**. This can be increased to a maximum of **1024**.
    
-   **Debugging restrictions**: You cannot run a for-each node directly in **DataStudio**. You must **deploy** the task to **Operation Center** and test it by running a [data backfill](/help/en/dataworks/user-guide/smoke-test-not-available).
    
-   **Execution restrictions**: The for-each node cannot be run individually. This includes **smoke testing**, **data backfill**, and manual runs.
    
-   **Control flow within the loop body**: When using a **branch node** within the loop body, you must ensure all branches converge into a single **merge node** before connecting to the `end` node. This guarantees the logical integrity of the loop body.
    
-   **Rerun limitations**: After the node is deployed for scheduling, an **automatic rerun upon failure** will **resume from the point of failure**. However, a manual **rerun** restarts the entire for-each node from the beginning.
    

## Procedure

This procedure guides you through configuring a complete for-each task. We use an assignment node as the upstream node and a Shell node within the loop body to print the results.

1.  **Prepare the upstream data (configure the assignment node)**
    
    Create an [assignment node](/help/en/dataworks/user-guide/assignment-node) and configure its output to provide a **result set** for the downstream for-each node to iterate over.
    
    1.  In the workflow, create an **assignment node** (for example, `assign`) and place it upstream of the for-each node.
        
    2.  Double-click the **assignment node**, and select a language. For example, use `Python 2` to output an array with four elements:
        
        > The assignment node will then output \[10,20,30,40\] to the downstream node. It automatically splits the last line of the output by commas to create an array.
        
        ```
        print "10,20,30,40"
        ```
        
    3.  The assignment node automatically generates an output parameter named `outputs` to represent its result set.
        
    4.  **Save** the assignment node.
        
2.  **Configure the for-each node to consume the data**
    
    Configure the for-each node to receive the upstream data and use it within its **loop body**.
    
    1.  Double-click the for-each node to enter its internal canvas.
        
    2.  On the **Scheduling settings** panel on the right, locate the `loopDataArray` parameter under **Scheduling parameters** and click **Bind**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5129206671/p1021283.png)
        
    3.  In the dialog box that appears, set **Value Source** to the `outputs` parameter of the upstream **assignment node** (`assign`). This action automatically establishes a dependency.
        
    4.  In the **for-each loop body**, click **Create Inner Node** and select a `Shell` node.
        
        > In a real-world scenario, you can configure any type of node.
        
    5.  Double-click the new Shell node and use **built-in variables** in the code to access and print loop information:
        
        ```
        #!/bin/bash
        # Use ${dag.loopTimes} to get the current loop number
        echo "Current loop number is: ${dag.loopTimes}"
        
        # Use ${dag.foreach.current} to get the current data item
        echo "Current item is: ${dag.foreach.current}"
        ```
        
    6.  (Optional) On the **Scheduling settings** panel on the right, configure the properties under **Scheduling strategy**.
        
        -   **Maximum number of cycles**: Defaults to **128** and can be increased to a maximum of **1024**.
            
            **Important**
            
            This parameter determines the maximum number of times the loop body can run. If you are processing a large amount of data, ensure this value is high enough to cover all items.
            
        -   **Execution mode**: Select an option. For this example, select **Serial**.
            
            -   **Serial**: Runs iterations sequentially.
                
            -   **Parallel**: Runs iterations concurrently to improve task efficiency. When configured for parallel execution, the failure of one batch does not affect others, and scheduling continues until all batches are complete. The default concurrency is 5, with a maximum of 20.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5129206671/p1026010.png)
                
    7.  **Save** the Shell node.
        
3.  **Deploy, run, and verify**
    
    Submit the workflow to **Operation Center** for execution and verify the results of the for-each node.
    
    1.  Return to the main workflow canvas and click the **Deploy** button on the toolbar to deploy the entire workflow.
        
    2.  Go to **Operation Center** > **Task O&M** > **Periodic Task**, and perform [smoke testing](/help/en/dataworks/user-guide/test-an-auto-triggered-node-and-view-test-instances-of-the-node#section-m86-lwx-ljm) on the target workflow.
        
        **Important**
        
        Do not run smoke testing on the for-each node alone. Because the for-each node depends on the output of the upstream assignment node, you must start the test from the **assignment node** to ensure the node receives its required input data.
        
    3.  After the **test instance** runs successfully, find the for-each node instance in the list. Then, open it, right-click it, and select **View Inner Nodes**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5129206671/p1022520.png)
        
    4.  In the inner node view, inspect the Shell node instances generated by each loop. Open the **runtime log** of any instance to view the output for that iteration and verify that the output is correct.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5129206671/p1022551.png)
        

## Use cases: Handling different data formats

#### **Scenario 1: Processing a one-dimensional array (Shell/Python output)**

-   **assignment node output**: 2025-11-01,2025-11-02,2025-11-03
    
-   **Number of iterations**: 3
    
-   **In the second iteration**:
    
    -   The value of `${dag.foreach.current}` is `2025-11-02`.
        
    -   The value of `${dag.loopTimes}` is `2`.
        

#### **Scenario 2: Processing a two-dimensional array (SQL output)**

-   **assignment node (MaxCompute SQL) output**:
    
    ```
    +-----+----------+
    | id  | city     |
    +-----+----------+
    | 101 | beijing  |
    | 102 | shanghai |
    +-----+----------+
    ```
    
-   **Number of iterations**: 2
    
-   **In the second iteration**:
    
    -   The value of `${dag.foreach.current}` is `102,shanghai`.
        
    -   The value of `${dag.loopTimes}` is `2`.
        
    -   The value of `${dag.foreach.current[0]}` is `102`.
        
    -   The value of `${dag.foreach.current[1]}` is `shanghai`.
        

## **Use case: Batch process data from partitioned tables for multiple lines of business**

This example shows how to use an **assignment node** and a **for-each node** to batch process user behavioral data from multiple lines of business.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3297702771/CAEQUxiBgIDXoMSN4BkiIGIyNzRhMGMzZTViNzRkNmQ5OGI0NzYzOThiZGIwMmI45876846_20251112162716.224.svg)

### **Background**

Assume that you are a data developer for a large internet company. You are responsible for processing data from three core lines of business: e-commerce, finance, and logistics. More lines of business may be added in the future. You need to run the same aggregation logic on the user behavioral logs of these three lines of business every day. The logic calculates the PV for each user and stores the results in a unified aggregate table.

-   Upstream source tables (DWD layer):
    
    -   `dwd_user_behavior_ecom_d`: E-commerce user behavior table.
        
    -   `dwd_user_behavior_finance_d`: Finance user behavior table.
        
    -   `dwd_user_behavior_logistics_d`: Logistics user behavior table.
        
    -   `dwd_user_behavior_${line-of-business}_d`: User behavior tables for other potential lines of business.
        
    -   These tables have the same schema and are partitioned by day (`dt`).
        
-   Downstream destination table (DWS layer):
    
    -   `dws_user_summary_d`: User aggregate table.
        
    -   This table is partitioned by both line of business (`biz_line`) and day (`dt`). It is used to store the aggregated results for all lines of business.
        

Creating a separate task for each line of business is costly to maintain and prone to errors. If you use a for-each node, you only need to maintain one set of processing logic. The system automatically traverses all lines of business to complete the calculations.

### **Data preparation**

First, create the example tables and insert test data. This example uses the data timestamp 20251010.

1.  [Associate a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source) with the workspace.
    
2.  Go to Data Studio and create a MaxCompute SQL node.
    
3.  Create the source tables: Add the following code to the MaxCompute SQL node, select it, and run it.
    
    ```
    -- E-commerce user behavior table
    CREATE TABLE IF NOT EXISTS dwd_user_behavior_ecom_d (
        user_id     STRING COMMENT 'User ID',
        action_type STRING COMMENT 'Behavior type',
        event_time  BIGINT COMMENT 'Millisecond-level UNIX timestamp of the event occurrence'
    ) 
    COMMENT 'Details of e-commerce user behavioral logs'
    PARTITIONED BY (dt STRING COMMENT 'Date partition in yyyymmdd format');
    
    INSERT OVERWRITE TABLE dwd_user_behavior_ecom_d PARTITION (dt='20251010') VALUES
    ('user001', 'click',        1760004060000), -- 2025-10-10 10:01:00.000
    ('user002', 'browse',       1760004150000), -- 2025-10-10 10:02:30.000
    ('user001', 'add_to_cart',  1760004300000); -- 2025-10-10 10:05:00.000
    -- Verify that the e-commerce user behavior table is created.
    SELECT * FROM dwd_user_behavior_ecom_d where dt='20251010';
    
    -- Finance user behavior table
    CREATE TABLE IF NOT EXISTS dwd_user_behavior_finance_d (
        user_id     STRING COMMENT 'User ID',
        action_type STRING COMMENT 'Behavior type',
        event_time  BIGINT COMMENT 'Millisecond-level UNIX timestamp of the event occurrence'
    ) 
    COMMENT 'Details of finance user behavioral logs'
    PARTITIONED BY (dt STRING COMMENT 'Date partition in yyyymmdd format');
    
    INSERT OVERWRITE TABLE dwd_user_behavior_finance_d PARTITION (dt='20251010') VALUES
    ('user003', 'open_app',      1760020200000), -- 2025-10-10 14:30:00.000
    ('user003', 'transfer',      1760020215000), -- 2025-10-10 14:30:15.000
    ('user003', 'check_balance', 1760020245000), -- 2025-10-10 14:30:45.000
    ('user004', 'open_app',      1760020300000); -- 2025-10-10 14:31:40.000
    -- Verify that the finance user behavior table is created.
    SELECT * FROM dwd_user_behavior_finance_d where dt='20251010';
    
    -- Logistics user behavior table
    CREATE TABLE IF NOT EXISTS dwd_user_behavior_logistics_d (
        user_id     STRING COMMENT 'User ID',
        action_type STRING COMMENT 'Behavior type',
        event_time  BIGINT COMMENT 'Millisecond-level UNIX timestamp of the event occurrence'
    ) 
    COMMENT 'Details of logistics user behavioral logs'
    PARTITIONED BY (dt STRING COMMENT 'Date partition in yyyymmdd format');
    
    INSERT OVERWRITE TABLE dwd_user_behavior_logistics_d PARTITION (dt='20251010') VALUES
    ('user001', 'check_status',    1760032800000), -- 2025-10-10 18:00:00.000
    ('user005', 'schedule_pickup', 1760032920000); -- 2025-10-10 18:02:00.000
    
    -- Verify that the logistics user behavior table is created.
    SELECT * FROM dwd_user_behavior_logistics_d where dt='20251010';
    ```
    
4.  Create the destination table: Add the following code to the MaxCompute SQL node, select it, and run it.
    
    ```
    CREATE TABLE IF NOT EXISTS dws_user_summary_d (
        user_id     STRING COMMENT 'User ID',
        pv          BIGINT COMMENT 'Daily popularity'
    ) 
    COMMENT 'Daily user popularity aggregate table'
    PARTITIONED BY (
        dt           STRING COMMENT 'Date partition in yyyymmdd format',
        biz_line     STRING COMMENT 'Line-of-business partition, such as ecom, finance, logistics'
    );
    ```
    
    **Important**
    
    If the workspace uses the standard mode, you must deploy this node to the production environment and perform a data backfill.
    

### **Workflow implementation**

1.  Create a workflow. In the **Scheduling** pane on the right, set the scheduling parameter bizdate to the previous day `$[yyyymmdd-1]`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5663206671/p1025990.png)
    
2.  In the workflow, create an assignment node named `get_biz_list`. Write the following code in MaxCompute SQL. This node outputs a list of lines of business to process.
    
    ```
    -- Output all lines of business to be processed
    SELECT 'ecom' AS biz_line
    UNION ALL
    SELECT 'finance' AS biz_line
    UNION ALL
    SELECT 'logistics' AS biz_line;
    ```
    
3.  Configure the for-each node
    
    -   Return to the workflow canvas and create a downstream for-each node for the assignment node.
        
    -   Go to the settings page of the for-each node. On the **Scheduling** tab on the right, under **Scheduling Parameters** > **Script Parameters**, set the value of the loopDataArray parameter to the outputs of the get\_biz\_list node.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5663206671/p1025996.png)
        
    -   In the for-each node loop body, click **Create Internal Node**. Create a MaxCompute SQL node and write the processing logic for the loop body.
        
        **Note**
        
        -   This script is driven by the for-each node and runs once for each line of business.
            
        -   The built-in variable `${dag.foreach.current}` is dynamically replaced with the current line-of-business name at runtime. The expected iteration values are `ecom`, `finance`, and `logistics`.
            
        
        ```
        SET odps.sql.allow.dynamic.partition=true;
        
        INSERT OVERWRITE TABLE dws_user_summary_d PARTITION (dt='${bizdate}', biz_line)
        SELECT
            user_id,
            COUNT(*) AS pv,
            '${dag.foreach.current}' AS biz_line
        FROM
            dwd_user_behavior_${dag.foreach.current}_d
        WHERE
            dt = '${bizdate}'
        GROUP BY
            user_id;
        ```
        
4.  Add a verification node
    
    Return to the workflow canvas. For the for-each node, click **Create Descendant Node**. Create a MaxCompute SQL node and add the following code.
    
    ```
    SELECT * FROM dws_user_summary_d WHERE dt='20251010' ORDER BY biz_line, user_id;
    ```
    

### **Deploy and run**

Deploy the workflow to the production environment. In Operation Center, navigate to **Auto Triggered Node O&M** > **Auto Triggered Nodes**, find the target workflow, run a test, and select `'20251010'` as the data timestamp.

After the run is complete, view the run log in the test instance. The expected output of the final node is:

**user\_id**

**pv**

**dt**

**biz\_line**

user001

2

20251010

ecom

user002

1

20251010

ecom

user003

3

20251010

finance

user004

1

20251010

finance

user001

1

20251010

logistics

user005

1

20251010

logistics

### **Advantages**

-   **High extensibility**: If a new line of business is added, you only need to add one line of SQL code in the assignment node. You do not need to modify the processing logic.
    
-   **Easy maintenance**: All lines of business share the same processing logic. A change in one place takes effect for all of them.
    

## FAQ

-   **Q: Why can't I run a for-each node directly in DataStudio for testing?**
    
    A: This is a design limitation. The node requires a complete scheduling environment to resolve its **node context** and dependencies; therefore, you cannot debug it directly in DataStudio. You must deploy the task to **Operation Center** and test it by using **data backfill** or a scheduled run.
    
-   **Q: Why does smoke testing a for-each node by itself fail or do nothing?**
    
    A: The loop data for a for-each node comes from its `loopDataArray` input parameter, which must be **bound** to the `outputs` parameter of an upstream **assignment node**. If you run the for-each node by itself, it will fail or be skipped because it cannot retrieve an input **result set**.
    
-   **Q: Why did my loop run only once?** 
    
    A: This usually happens because the system parsed the output from the upstream assignment node as a single element. Check your output:
    
    -   1\. Is it a single string without any delimiters?
        
    -   2\. If you expect to iterate over multiple items, make sure they are separated by commas (`,`). For example, `'item1,item2,item3'` will loop three times, whereas `'item1 item2 item3'` will loop only once.
