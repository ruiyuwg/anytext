The DataStudio service of DataWorks allows you to define the development and scheduling properties of auto triggered tasks. DataStudio works with Operation Center to provide a visualized development interface for tasks of various types of compute engines, such as MaxCompute, Hologres, and E-MapReduce (EMR). You can configure settings on the visualized development interface to perform intelligent code development, multi-engine task orchestration in workflows, and standardized task deployment. This way, you can build offline data warehouses, real-time data warehouses, and ad hoc analysis systems to ensure efficient and stable data production. This topic describes the terms that are used in DataStudio, the capabilities provided by DataStudio, and preparations before data development in DataStudio.

## Go to the DataStudio page

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.

**Note**

DataStudio is supported only on Chrome version 69 or later on PC.

## **Module introduction**

### **Capability overview**

The following figure shows the main features provided by DataStudio. For more information, see the [Appendix: Terms related to data development](#section-x8z-kc5-uxv) section in this topic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7089002771/CAEQTxiBgMC4pcSS2BkiIGE0ZTg2YzYwMjlkZDRiZjA4MDNjMGE5MjdkYjI0MzMz4835237_20241223134133.499.svg)

**Feature**

**Description**

**Object organization and management**

DataStudio provides a mechanism to organize and manage objects in DataWorks.

-   Object organization: The following two-level management mode is provided: **Solution** > **Workflow**. DataWorks allows you to organize objects in the directory tree of a workflow or on the configuration tab of a workflow. You can create required objects in the directory tree of a workflow or drag components on the configuration tab of the workflow to build a data processing workflow. You can use solutions to manage workflows.
    
-   Object management: You can create and manage nodes, tables, resources, and functions in a visualized manner.
    

For more information, see [Create a workflow](/help/en/dataworks/user-guide/create-a-workflow#task-2510738) and the [Management modes](#section-mmx-65b-ubv) section in this topic.

**Note**

Limits on the maximum numbers of workflows and objects that you can create in DataStudio in each [workspace](/help/en/dataworks/user-guide/overview-45):

-   Workflow: You can create a maximum of `10,000` workflows.
    
-   Object (node, file, table, resource, or function): For DataWorks Enterprise Edition, you can create a maximum of `200,000` objects. For DataWorks Professional Edition, DataWorks Standard Edition, or DataWorks Basic Edition, you can create a maximum of `100,000` objects.
    

If the numbers of workflows and objects in the current workspace reach the upper limit, you can no longer create a workflow or object.

**Task development**

-   Various capabilities:
    
    -   Provides nodes of a wide range of compute engine types to fully encapsulate compute engine capabilities.
        
    -   Provides general nodes. You can combine general nodes and nodes of a specific compute engine type in DataWorks to process complex business logic. For example, you can enable external systems to trigger the scheduling of nodes in DataWorks, check whether files exist, route results based on logical conditions, execute code of specific nodes in loops, and pass output between nodes.
        
-   Simple operations:
    
    -   Allows you to develop data on the configuration tab of a workflow in a visualized manner. You can drag components to perform hybrid orchestration of tasks of different compute engine types.
        
    -   Provides an intelligent SQL editor. The SQL editor provides features such as code hinting, display of the code structure by using SQL operators, and permission verification.
        

For information about the node types that are supported by DataWorks, see [Supported node types](/help/en/dataworks/user-guide/dataworks-nodes/#task-2294522).

**Task scheduling**

-   Trigger methods: The scheduling of tasks can be triggered by external systems, events, or output of ancestor tasks. The output of ancestor tasks triggers task scheduling based on inner lineage parsing.
    
-   Dependencies: You can configure same-cycle and cross-cycle dependencies. You can also configure dependencies between different types of tasks whose scheduling frequencies are different.
    
-   Execution control: You can determine whether to rerun a task and manage the scheduling time of a task based on the output of its ancestor task. You can specify a validity period during which a task is automatically run as scheduled and the scheduling type of a task. For example, you can specify a task as a dry-run task or freeze a task. After you specify a task as a dry-run task, the system returns a success response for the task without running the task. The scheduling of descendant tasks of the task is not blocked. After you freeze a task, the system does not run the task, and the scheduling of descendant tasks of the task is blocked.
    
-   Idempotence: DataStudio provides a rerun mechanism that you can use to configure custom rerun conditions and rerun times.
    

For more information about task scheduling, see [Configure time properties](/help/en/dataworks/user-guide/configure-time-properties-1#task-2119752) and [Guide to configuring scheduling dependencies](/help/en/dataworks/user-guide/scheduling-dependency-configuration-guide#concept-2201251).

**Task debugging**

You can debug a task or a workflow. For more information, see [Task debugging process](/help/en/dataworks/user-guide/debugging-procedure#task-2195039).

**Process control**

DataStudio provides a standardized task deployment mechanism and various methods to perform process control. You can perform operations that include but are not limited to the following operations for process control:

-   Review code and perform [smoke testing](/help/en/dataworks/user-guide/perform-smoke-testing#task-2230073) before a task is deployed. This helps block the execution of the process in which an error occurs in the production environment. For information about code review, see [Code review](/help/en/dataworks/user-guide/code-review#task-1961915).
    
-   Customize process control on task committing and deployment to the production environment, in combination with [governance items](/help/en/dataworks/user-guide/overview-8#concept-2112899) provided by Data Governance Center and verification logic customized based on extensions.
    

**Other features**

-   Openness: DataWorks [Open Platform](/help/en/dataworks/overview-31#concept-2075638) provides various API operations and a large number of built-in extension points. You can subscribe to event messages related to data development on DataWorks Open Platform.
    
-   Permission control: You can manage the permissions on service modules of DataWorks and the data access permissions. For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).
    
-   Viewing of operation records: DataWorks is integrated with ActionTrail. This allows you to query recent DataWorks behavior events of your Alibaba Cloud account in ActionTrail. For more information, see [View operation records on the DataStudio page](/help/en/dataworks/user-guide/view-data-development-operation-records#main-2284744).
    

### **Introduction to the DataStudio page**

You can follow the instructions that are described in [Data Studio feature guide](/help/en/dataworks/user-guide/features-on-the-datastudio-page#concept-2168172) to use the features of each module on the DataStudio page.

### **Development process**

DataWorks DataStudio allows you to create different compute engine types of real-time synchronization tasks, batch synchronization tasks, batch processing tasks, and manually triggered tasks. For more information about data synchronization, see [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/#concept-dr3-k2v-42b). The configuration requirements on tasks of different compute engine types vary. Take note of the precautions and related instructions on the development of tasks of different compute engine types in DataWorks before you develop tasks based on the task type.

-   **Instructions on the development of tasks of different compute engine types**: You can add different data sources to DataWorks to develop tasks in DataWorks. The configuration requirements on tasks of different compute engine types vary. For more information, see the following topics:
    
    -   [Usage notes for developing MaxCompute tasks in DataWorks](/help/en/dataworks/user-guide/usage-notes-for-maxcompute-nodes-in-dataworks#task-2279070)
        
    -   [Usage notes for developing Hologres tasks in DataWorks](/help/en/dataworks/user-guide/development-process-of-hologres-nodes-in-dataworks#task-2279347)
        
    -   [Usage notes for developing EMR tasks in DataWorks](/help/en/dataworks/user-guide/development-process-of-an-emr-node-in-dataworks#task-2232070)
        
-   **Common development process**: The following two workspace modes are available: [standard mode and basic mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b). The node development process varies based on the workspace mode.
    
    Task development process in a workspace in standard mode.![标准模式工作空间开发流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0810127761/p555653.png)
    
    Task development process in a workspace in basic mode.![简单模式工作空间开发流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0810127761/p555654.png)
    
    -   Basic process: For example, you want to develop tasks in a workspace in standard mode. The development process includes the following stages: development, debugging, configuration of scheduling settings, task committing, task deployment, and O&M. For more information, see [General development process](/help/en/dataworks/user-guide/common-development-process#task-2295204).
        
    -   Process control: During task development, you can perform operations such as [code review](/help/en/dataworks/user-guide/code-review#task-1961915) and [smoke testing](/help/en/dataworks/user-guide/perform-smoke-testing#task-2230073) provided by DataStudio and use check items preset in [Data Governance Center](/help/en/dataworks/user-guide/overview-8#concept-2112899) and verification logic customized based on extensions in [Open Platform](/help/en/dataworks/overview-31#concept-2075638) to ensure that specified standards and requirements on task development are met.
        
        **Note**
        
        The process control operations vary based on the workspace mode. The actual process control operations shall prevail.
        

### **Management modes**

A workflow is a basic unit for code development and resource management. A workflow is an abstract business entity that allows you to develop code based on your business requirements. Workflows and nodes in different workspaces are separately developed. For more information about workflows, see [Create a workflow](/help/en/dataworks/user-guide/create-a-workflow#task-2510738).

Workflows can be displayed in a directory tree or in a panel. The display modes enable you to organize code from the business perspective and show the resource classification and business logic in a more efficient manner.

-   The directory tree allows you to organize your code by task type.
    
-   The panel shows the business logic in a workflow.
    

![开发组织结构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5239712561/p332102.png)

## **Get started with DataStudio**

### **Environment preparation**

To use Data Modeling, DataStudio, or schedule tasks periodically in Operation Center, associate the created data sources or clusters as computing resources in DataStudio. Only after the resources are associated can you access data from the corresponding data sources or clusters and perform related operations. Otherwise, you will not be able to create any DataStudio nodes.

1.  Add a data source or cluster of a specific type based on the type of tasks that you want to develop and schedule.
    
    **Data source or cluster type**
    
    **Description**
    
    [MaxCompute](/help/en/dataworks/user-guide/create-a-maxcompute-data-source)
    
    The first time you add a MaxCompute data source to DataWorks, DataWorks automatically associates the data source with DataStudio. You do not need to follow the instructions that are described in this topic to manually associate the data source with DataStudio. For MaxCompute data sources that are added later, you must manually associate the data sources with DataStudio.
    
    [Hologres](/help/en/dataworks/user-guide/create-a-hologres-data-source)
    
    After you add a data source of one of these types, you must follow the instructions that are described in this topic to manually associate the data source with DataStudio.
    
    [AnalyticDB for PostgreSQL](/help/en/dataworks/user-guide/create-an-analyticdb-for-postgresql-data-source)
    
    [AnalyticDB for MySQL V3.0](/help/en/dataworks/user-guide/bind-analyticdb-for-mysql3-0-computing-resources)
    
    [ClickHouse](/help/en/dataworks/user-guide/create-a-clickhouse-data-source)
    
    [EMR](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks)
    
    After you register a cluster to DataWorks, DataWorks associates the cluster with DataStudio. You do not need to follow the instructions that are described in this topic to manually associate the cluster with DataStudio.
    
    [Cloudera's Distribution Including Apache Hadoop (CDH) or Cloudera Data Platform (CDP)](/help/en/dataworks/user-guide/preparation-obtain-cdh-cluster-information-and-configure-network-connectivity)
    
2.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
3.  In the left-side navigation pane, click Computing Resource.
    
    If the **Computing Resource** module is not displayed in the left-side navigation pane, you must go to the [Personal Settings](/help/en/dataworks/user-guide/personal-settings#section-m60-5vd-u33) tab and select Computing Resource in the DataStudio Modules section to allow the Computing Resource module to be displayed in the left-side navigation pane of the DataStudio page. For more information, see [Module management](/help/en/dataworks/user-guide/personal-settings#section-1fi-zsb-vdz).
    
4.  Associate a data source or cluster.
    
    On the **Computing Resource** page, search for the desired data source or cluster by **computing resource name** or **computing resource type** and click **Associate**. After you associate the data source or cluster with DataStudio, you can read data from the data source or cluster based on the connection information and perform relevant data development operations.
    
    **Note**
    
    If data source or cluster information changes, but the data on the current page is not updated in time, refresh the current page to update the cached data.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2542819371/p900191.png)
    
    -   A data source or a cluster may fail to be associated with DataStudio in the following scenarios:
        
        -   The configurations of the data sources or clusters of specific types do not support association with DataStudio. For example, you cannot associate a data source that is added by using an AccessKey pair with DataStudio. For more information about limits on the association, see the descriptions that are displayed in the DataWorks console when you associate a data source or a cluster with DataStudio.
            
        -   The configurations in the development or production environment are missing.
            
        -   A MaxCompute data source cannot be associated with multiple DataWorks workspaces at the same time.
            
        
        **Note**
        
        The reason why a data source or cluster cannot be associated with DataStudio varies based on the type of the data source or cluster. You can troubleshoot issues based on the reason that is displayed when you try to associate the data source or cluster with DataStudio.
        
    -   Only the following types of data sources or clusters can be associated with DataStudio: MaxCompute, EMR, Hologres, AnalyticDB for MySQL, ClickHouse, CDH, CDP, and AnalyticDB for PostgreSQL.
        
    -   The types and number of data sources or clusters that can be associated with DataStudio vary based on the DataWorks edition. For more information, see [Feature details by DataWorks edition](/help/en/dataworks/user-guide/differences-among-dataworks-editions).
        

### **Getting started**

You can refer to [Getting started with DataStudio](/help/en/dataworks/user-guide/getting-started-with-data-development/) to learn the basic operations in data development and the data development process.

### **Node types supported by DataStudio**

The DataStudio service of DataWorks allows you to create various types of nodes. You can enable DataWorks to periodically schedule instances that are generated for nodes. You can also select a specific type of node to develop data based on your business requirements. For more information about the node types that are supported by DataWorks, see [Supported node types](/help/en/dataworks/user-guide/dataworks-nodes/#task-2294522).

## **Appendix: Terms related to data development**

-   Terms related to task development
    
    **Term**
    
    **Description**
    
    **Solution**
    
    A collection of workflows. A solution is a group of workflows that are dedicated to a specific business goal. A workflow can be added to multiple solutions. After you develop a solution and add a workflow to the solution, other users can reference and modify the workflow in their solutions for collaborative development.
    
    **Workflow**
    
    An abstract business entity and a collection of tasks, tables, resources, and functions for a specific business requirement. Tasks in this type of workflow are triggered to run as scheduled.
    
    **Manually triggered workflow**
    
    A collection of tasks, tables, resources, and functions for a specific business requirement.
    
    Tasks in this type of workflow are manually triggered to run.
    
    **DAG**
    
    The abbreviation of `directed acyclic graph`. A DAG is used to display nodes and their dependencies. In DataStudio, all tasks in a workflow are displayed in the same DAG. This facilitates task development and dependency configuration.
    
    **Task**
    
    A basic execution unit of DataWorks. DataWorks runs tasks in sequence based on the dependencies between the tasks.
    
    **Node**
    
    A task in a DAG. DataWorks runs nodes in sequence based on the dependencies between the nodes.
    
-   Terms related to task scheduling
    
    **Term**
    
    **Description**
    
    **Dependency**
    
    Used to define the sequence in which tasks are run. If Node B can run only after Node A finishes running, Node A is the ancestor node of Node B, and Node B depends on Node A. In a DAG, dependencies are represented by arrows between nodes.
    
    **Output name**
    
    The identifier used to distinguish the current node from other nodes. An output name is globally unique. A node can contain multiple output names. Scheduling dependencies between nodes are configured based on output names.
    
    **Output table name**
    
    We recommend that you use the name of the table generated by the current task as the output table name. Proper configuration of an output table name can help check whether data is from an expected ancestor table when you configure dependencies for a descendant node. We recommend that you do not manually modify an output table name that is generated based on automatic parsing. The output table name serves only as an identifier. Modifying an output table name does not affect the name of the table that is actually generated by executing SQL statements. The name of an actually generated table is subject to the SQL logic.
    
    **Note**
    
    An **output name** must be globally unique. However, no such limit is imposed on an **output table name**.
    
    **Resource group for scheduling**
    
    A resource group that is used for task scheduling. For more information about resource groups, see [Overview of DataWorks resource groups](/help/en/dataworks/dataworks-resource-group-overview).
    
    **Scheduling parameter**
    
    Configured for a node when the node is scheduled to run. The values of scheduling parameters are dynamically replaced at the scheduling time of the node. If you want to obtain information about the runtime environment, such as the date and time, during repeated running of code, you can dynamically assign values to variables in the code based on the definition of scheduling parameters in DataWorks.
    
    **Data timestamp**
    
    The previous day of the scheduling time (the time when you want to schedule the node). In offline computing scenarios, a data timestamp represents the date on which a business transaction is conducted. The value of a data timestamp is accurate to the day. For example, if you collect statistical data on the turnover of the previous day on the current day, the previous day is the date on which the business transaction is conducted and represents the data timestamp.
    
    **Scheduling time**
    
    The time when you want to schedule the task to process business data. The scheduling time is accurate to the second. The scheduling time can be different from the actual time at which the task is scheduled to run. The actual time at which a task is run is affected by multiple factors.
