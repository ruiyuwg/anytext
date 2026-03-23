Data Studio is an intelligent data lakehouse development platform that incorporates 15 years of Alibaba's big data experience. It is compatible with various Alibaba Cloud compute services and provides intelligent extract, transform, and load (ETL), data catalog management, and cross-engine workflow orchestration. Data Studio supports Python development, Notebook analysis, and Git integration through personal development environments. It also features a rich plug-in ecosystem to integrate real-time and offline computing, data lakehouses, and big data with AI. This helps you manage the entire 'Data+AI' lifecycle.

## **Introduction to Data Studio**

Data Studio is an intelligent data lakehouse development platform built on 15 years of Alibaba's big data methodologies. It is deeply integrated with various big data and AI compute services from Alibaba Cloud, such as MaxCompute, E-MapReduce, Hologres, Realtime Compute for Apache Flink, and PAI. It provides intelligent ETL development services for data warehouses, data lakes, and OpenLake data lakehouse architectures. Data Studio supports the following features:

-   **Data catalog**: A data catalog with metadata management capabilities for data lakehouses.
    
-   **Workflow**: A development model that supports the orchestration of workflows that contain real-time, offline, and AI nodes for various engine types.
    
-   **Personal development environment**: Provides support for Python node development and debugging, interactive analysis using Notebook, and integration with Git for code management and NAS or OSS for storage.
    
-   **Notebook**: An intelligent and interactive tool for data development and analysis. It supports SQL or Python analysis for various data engines, lets you run or debug code instantly, and provides visualized data results.
    

## **Enable the** Data Studio (new version)

You can enable the Data Studio (new version) in one of the following ways:

-   When you create a workspace, select **Use Data Studio (New Version)**. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#section-5te-m4n-59y).
    
-   In the legacy DataStudio, click the **Upgrade To New Version** button at the top of the page. Follow the on-screen instructions to migrate your data to the Data Studio (new version).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3783537371/p898030.png)
    
-   The Data Studio (new version) is available in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Thailand (Bangkok), Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia).
    

**Important**

-   If you encounter problems when you use the Data Studio (new version), you can join the [exclusive DingTalk group for DataWorks upgrade support](https://qr.dingtalk.com/action/joingroup?code=v1,k1,beuiETdvtb+IOvKdSbTI7Bw/kI5mTAnQ1rrIPIujErQ=&_dt_no_comment=1&origin=1).
    
-   Data in the Data Studio (new version) and the DataStudio (legacy version) is independent and not interoperable.
    
-   The upgrade from the DataStudio (legacy version) to the new version is an **irreversible operation**. You cannot roll back to the legacy version after a successful upgrade. Before you switch, we recommend that you create a test workspace with the Data Studio (new version) enabled. This lets you ensure that the new version meets your business requirements before you upgrade.
    
-   Starting from February 19, 2025, when an Alibaba Cloud account is used to activate DataWorks and create a workspace for the first time in a region that supports the Data Studio (new version), the new version is enabled by default. The legacy version will no longer be supported.
    

## **Go to Data Studio**

Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.

**Note**

-   This entry point is visible only for workspaces where the **Use Data Studio (New Version)** feature is enabled. For more information, see [Enable the Data Studio (new version)](#27a565e00bib0).
    
-   Data Studio is supported only on Chrome 69 or later on a PC.
    

## **Main features of Data Studio**

The main features of are described in this section. For more information, see [Appendix: Data Studio concepts](#84999283e9ucz).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0758947671/CAEQUBiBgIDfooGY2RkiIDViYzJlNDRiZTlhYjQyMjI5NWE1ZjY4OGQ4NGVlZWMy4602768_20241009132650.833.svg)

**Type**

**Description**

**Flow control**

DataWorks Data Studio provides a **Workflow** development model. A workflow is a new development method that provides a visualized directed acyclic graph (DAG) interface from a business perspective. This makes it easy to manage complex node projects.

For more information, see [Auto triggered workflows](/help/en/dataworks/user-guide/workflow), [Event-triggered workflows](/help/en/dataworks/user-guide/trigger-based-workflow), and [Manually triggered workflows](/help/en/dataworks/user-guide/manual-workflow/).

**Note**

In DataWorks Data Studio, the following limits apply to the number of inner nodes and objects that can be created in each [workspace](/help/en/dataworks/user-guide/overview-45):

-   Inner nodes: Each workflow can contain a maximum of `400` nodes.
    
-   Objects (workflows, nodes, files, tables, resources, and functions): For users of DataWorks Enterprise Edition, the maximum number of objects is `200,000`. For users of DataWorks Professional Edition, Standard Edition, and Basic Edition, the maximum number of objects is `100,000`.
    

If the number of workflows and objects in your workspace reaches the limit, you cannot create new ones.

**Task development**

-   **Richer capabilities**:
    
    -   Provides a wide range of engine nodes that fully encapsulate engine capabilities.
        
    -   Provides general-purpose nodes that can be combined with engine nodes to handle complex logic. Examples include complex flow controls such as scheduling triggered by external systems, file object checks, conditional branches, looped code execution, and passing of output results.
        
    -   Based on Realtime Compute for Apache Flink, it supports Flink stream computing node development and collaborative development between Flink and other engines such as MaxCompute and Hologres.
        
-   **Simpler operations**:
    
    -   Provides a visual workflow development mechanism. You can drag and drop components to quickly orchestrate hybrid nodes that use multiple engines.
        
    -   Provides an intelligent SQL editor. The SQL editor offers features such as code hinting, visual display of SQL operator structures, and permission verification.
        

For more information about the node types that DataWorks supports, see [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/).

**Task Scheduling**

-   **Trigger methods**: Supports scheduling triggered by external systems, events, or upstream nodes based on auto-captured lineage.
    
-   **Dependency types**: Supports same-cycle and cross-cycle dependencies, along with dependencies between different scheduling cycles and node types.
    
-   **Execution control**: Supports setting whether a node can be rerun. Allows you to control the overall scheduling time of downstream nodes through upstream nodes. Supports setting the effective period for a scheduling node. Supports defining the scheduling type of a node. For example, dry-run (does not execute and does not block downstream node scheduling) or freeze (does not execute and blocks downstream node scheduling).
    
-   **Idempotence assurance**: Provides a node rerun mechanism. Supports custom rerun conditions and the number of reruns.
    

For more information about scheduling, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).

**Quality control**

Provides a standardized node publishing mechanism and various quality control methods. These include but are not limited to the following scenarios:

-   **Code review**: Provides manual [code review](/help/en/dataworks/user-guide/code-review-data-studio) before a node is published and supports blocking the publishing of problematic production scheduling flows.
    
-   **Checks and verification**: Supports custom and automated flow control for node submission and publishing to production scheduling. This can be done using [governance item checks](/help/en/dataworks/user-guide/overview-8#concept-2112899) from Data Management, custom validation logic from extension programs, and other methods.
    
-   **Data Quality**: Supports associating [quality monitoring](/help/en/dataworks/data-quality-overview) with scheduling nodes. This triggers quality rule checks after a node runs, helping you detect data issues right away.
    

**Others**

-   **Open capabilities**: Integrates with the [Open Platform](/help/en/dataworks/overview-31#concept-2075638) to provide a rich set of OpenAPI operations. It also has many built-in extension points, allowing you to subscribe to messages about Data Studio events through the DataWorks Open Platform.
    
-   **Access control**: Supports control over feature permissions and data access permissions. For more information, see [Manage module-level permissions in a workspace](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).
    

## **Data Studio interface**

You can use the [Data Studio feature guide](/help/en/dataworks/user-guide/ide-interface-description-and-settings) to learn about the Data Studio interface and the features of each module.

## **Node development process**

Data Studio in DataWorks supports the creation of real-time sync tasks, offline scheduling tasks (including offline sync tasks and offline processing tasks), and manually triggered tasks for various engine types. For more information about data synchronization, see [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/#concept-dr3-k2v-42b).

DataWorks workspaces are available in [standard mode and basic mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b). The node development process differs between the two modes. The following diagrams show the development processes for both modes.

**Development process in a standard mode workspace**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0758947671/CAEQUBiBgIChyP6X2RkiIDdiNmEyMDEyMTlkODQ1N2VhNjg4M2E0MDI1Y2E2MDYx4603380_20240929110723.706.svg)

**Development process in a basic mode workspace**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0758947671/CAEQUBiBgIC.0PSX2RkiIDQ3MjNjNWU0MDEwMzQ4YThiNGUxYWY1YmM5ZmFkZmZi4603380_20240929112113.413.svg)

-   **Basic process**: In standard mode, for example, the development process for a scheduling node includes development, debugging, scheduling configuration, publishing, and O&M. For more information about the general development process, see [Data development process guide](/help/en/dataworks/user-guide/data-development-process-guidance).
    
-   **Flow control**: During node development, you can use features such as the built-in [code review](/help/en/dataworks/user-guide/code-review-data-studio) in Data Studio, preset checks in [Data Management](/help/en/dataworks/user-guide/overview-8#concept-2112899), and custom logic validation using extension programs from the [Open Platform](/help/en/dataworks/overview-31#concept-2075638) to ensure that development nodes comply with your standards.
    

## **Data development methods**

Data Studio lets you customize the development process. You can quickly build data processing flows using workflows, or you can manually create individual task nodes and then configure their dependencies.

For more information, see [Workflow orchestration](/help/en/dataworks/user-guide/workflow-orchestration/).

## **Collection of nodes supported by Data Studio**

Data Studio supports various node types, including data integration, MaxCompute, Hologres, EMR, Flink, Python, Notebook, and AnalyticDB for MySQL nodes. Many of these node types support recurring scheduling. You can select the appropriate nodes for your development operations as needed. For a list of nodes that DataWorks supports, see [Supported node types](/help/en/dataworks/user-guide/dataworks-nodes/).

## **Appendix: Data Studio concepts**

### **Task Development**

**Concept**

**Description**

**Workflow**

A new development method that provides a visualized DAG interface from a business perspective. This makes it easy to manage complex node projects. A workflow supports orchestrating dozens of node types, such as data integration, MaxCompute, Hologres, EMR, Flink, Python, Notebook, and AnalyticDB for MySQL nodes. It also supports workflow-level scheduling configuration. Recurring and event-triggered workflows are supported.

**Manually triggered workflow**

A collection of nodes, tables, resources, and functions for a specific business requirement.

The difference between a manually triggered workflow and a recurring workflow is that nodes in a manually triggered workflow must be triggered manually, while nodes in a recurring workflow are triggered on a schedule.

**Task node**

A task node is the basic execution unit in DataWorks. Data Studio provides various node types. These include data integration nodes for data synchronization, compute engine nodes for data cleansing (such as ODPS SQL, Hologres SQL, and EMR Hive), and general-purpose nodes for complex logic processing (such as zero load nodes for managing multiple nodes and do-while nodes for looping code). You can combine these nodes to meet your data processing needs.

### **Node scheduling concepts**

**Concept**

**Description**

**Dependency**

Dependencies between nodes define their execution order. If node B can run only after node A runs, we say that A is an upstream dependency of B, or B depends on A. In a DAG, dependencies are represented by arrows between nodes.

**Output name**

The name of the output point for each task. It is a virtual entity used to connect upstream and downstream tasks when you set up dependencies within a single tenant (Alibaba Cloud account).

When you set up an upstream or downstream dependency for a task, you must use the output name, not the node name or ID. After setup, the output name of a task also serves as the input name for its downstream nodes.

**Output table name**

We recommend that you set the output table name to the output table of the current node. Correctly specifying the output table name helps downstream nodes confirm whether the data comes from the expected ancestor table. We recommend that you do not manually modify the output table name if it is automatically parsed. The output table name is only an identifier. Modifying it does not affect the actual output table name in the SQL script. The actual output table name is determined by the SQL logic.

**Note**

The output name of a node must be globally unique, but the output table name does not have this restriction.

**Schedule resource group**

Refers to the [resource group](/help/en/dataworks/user-guide/resource-group-management/) used for node scheduling.

**Scheduling parameter**

[Scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters) are variables in code that are dynamically assigned values at runtime. If you want your code to obtain information from the runtime environment during repeated runs, such as the date or time, you can use the scheduling parameters defined by the DataWorks CDN mapping system to dynamically assign values to variables in your code.

**Data timestamp**

This usually refers to the date directly related to business activities, reflecting the actual time when the business data was generated. This concept is particularly important in offline computing scenarios. For example, in a retail business, you might need to calculate the turnover for October 10, 2024. This calculation often starts in the early morning of October 11, 2024. The calculated data actually represents the turnover for October 10, 2024. In this case, October 10, 2024 is the data timestamp.

**Scheduled time**

The time point, accurate to the minute, that a user sets for a recurring task to run.

**Important**

Many factors can affect when a node runs. A node does not necessarily run immediately at its scheduled time. Before a node runs, DataWorks checks whether its upstream nodes have run successfully, whether the scheduled time has been reached, and whether schedule resources are sufficient. The node is triggered only after all these conditions are met.
