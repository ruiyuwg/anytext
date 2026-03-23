PAI Flow lets you develop end-to-end machine learning workflows. It offers the same workflow features as the [visualization-based modeling Designer](/help/en/pai/user-guide/machine-learning-designer-overview) of Platform for AI (PAI) and lets you periodically schedule workflows.

## **Limits**

-   **Product limits**
    
    -   PAI Flow is supported only in **DataWorks Workspace (New Version)**.
        
    -   PAI Flow currently supports only the **Source/Target** and **RAG Data Processing** nodes.
        
    -   PAI Flow supports only [Serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
-   **Region limits**: PAI Flow is available in China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Hong Kong), Singapore, Indonesia (Jakarta), Japan (Tokyo), Germany (Frankfurt), US (Silicon Valley), and US (Virginia).
    

## **Prerequisites**

A **DataWorks DataStudio (New) workspace** and a **Platform for AI workspace** have been provisioned.

-   When you [create a workspace](/help/en/dataworks/user-guide/create-a-workspace#title-w6b-8zu-dsq), check **Create An AI Workspace With The Same Name**. This action automatically creates and attaches a PAI workspace with the same name.
    
-   You can enable the **Schedule PAI Algorithm Tasks** feature for an existing workspace in the **Management Center**. This operation automatically creates a PAI workspace with the same name as the DataWorks workspace.
    

## **Creating a PAIFlow**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the Data Studio project folder, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4373769471/p962294.png) icon and select **New Node** > **Algorithm** > **PAI Flow**. This creates a new PAI Flow node and opens the **PAI Flow** orchestration page.
    

## **Developing PAIFlow**

**PAI Flow** provides various visual modeling nodes for designing flows and developing custom nodes.

1.  In **PAI Flow**, you can select a node from the left, drag it to the canvas, and connect the nodes to design the flow.
    
2.  After you design the flow, click a node to configure it in the right-side pane.
    
    **Node type**
    
    **Node**
    
    **Description**
    
    **Source/Destination**
    
    [Read Table](/help/en/pai/user-guide/read-table)
    
    The Read Table component reads data from a MaxCompute table. By default, it reads tables from the current project.
    
    [Read OSS Data](/help/en/pai/user-guide/read-file-data)
    
    This component reads a file or folder from a path in an Object Storage Service (OSS) `Bucket`.
    
    [Read CSV File](/help/en/pai/user-guide/read-csv-file)
    
    The component supports reading `CSV` file data from `OSS`, `HTTP`, and Hadoop Distributed File System (`HDFS`).
    
    [Write to Table](/help/en/pai/user-guide/write-table)
    
    This component writes input data to `MaxCompute`.
    
    **retrieval-augmented generation (RAG) Data Processing**
    
    RAG Text Parsing and Splitting
    
    Reads and parses text files (such as `HTML`, `PDF`, `Markdown`, and `Text`) in the input directory. It generates consecutive text blocks that do not exceed the specified block size and saves them to the specified output path in `JSONline` format.
    
    RAG Embedding Generation
    
    Loads all parsed and split document files (`JSONline` format) from the specified directory. It then uses an `Embedding` model to generate text embeddings.
    
    RAG Knowledge Base Index Synchronization
    
    Synchronizes input data to the destination knowledge base index.
    
    **Note**
    
    When you configure a file path, you can include a **variable** in the path. For example: `https://examplebucket.oss-cn-hangzhou.aliyuncs.com/${variable}/example.csv`. You can use [scheduling parameters](/help/en/dataworks/user-guide/scheduling-parameters-of-datastudio/) as variables. This allows the recurring schedule to read from or write to different storage paths.
    
3.  After you develop the node, you can configure the **[Scheduling Configuration](/help/en/dataworks/user-guide/node-scheduling/)** for the **PAI Flow** node in the right-hand toolbar of the flow orchestration page. This ensures that the node is periodically scheduled after it is published to the production environment.
    
    **Note**
    
    When you configure scheduling, only [Serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) are supported for the schedule resource group.
    

## **Publish a PAI Flow node**

After you test the PAI Flow node and configure its scheduling settings, you must commit and publish the **PAI Flow** node. The node will then run periodically according to the scheduling configuration.

1.  To save the **PAI Flow** node, click **Save** in the toolbar at the top.
    
2.  After the node is saved, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4373769471/p962441.png) icon in the toolbar to open the publishing panel. For more information, see [Publish tasks](/help/en/dataworks/user-guide/task-release/#9f45b04abeoi5). Click **Publish to Production** to publish the task.
    

## **What to do next**

After the PAI Flow node is published, click **Go to O&M** in the publishing panel. You are redirected to the [Recurring Tasks](/help/en/dataworks/user-guide/auto-triggered-node-o-and-m/) page, where you can view the node's scheduling and running status.

**Note**

In the directed acyclic graph (DAG), you can view the internal tasks only after you open the PAI Flow node.
