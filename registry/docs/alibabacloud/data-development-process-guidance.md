Data Studio is an intelligent data lakehouse development platform built on Alibaba Cloud’s decades of big data experience. It supports a wide range of Alibaba Cloud computing services and delivers capabilities for intelligent extract, transform, and load (ETL), data catalog management, and cross-engine workflow orchestration. With personal development environments that support Python development, Notebook analysis, and Git integration, along with a rich plugin ecosystem, Data Studio enables integrated real-time and offline processing, data lakehouse unification, and seamless big data and AI workflows—helping you manage data across the entire “Data+AI” lifecycle.

## **Introduction to Data Studio**

Data Studio is an intelligent data lakehouse development platform that incorporates Alibaba Cloud’s big data construction methodology. It is deeply integrated with dozens of Alibaba Cloud big data and AI computing services, such as MaxCompute, EMR, Hologres, Flink, and PAI, and provides intelligent ETL development services for data warehouses, data lakes, and OpenLake data lakehouse architectures. It supports:

-   **Data lakehouse and multi-engine support**  
    Access data in data lakes (such as OSS) and data warehouses (such as MaxCompute) and perform multi-engine hybrid development through a unified data catalog and a wide range of engine nodes.
    
-   **Flexible workflows and scheduling**  
    Provides a variety of flow control nodes to visually orchestrate cross-engine tasks in workflows. It also offers time-driven scheduling and event-driven triggered scheduling.
    
-   **Open Data+AI development environment**  
    Provides a personal development environment with customizable dependencies and a Notebook that supports mixed SQL and Python programming. Features such as datasets and Git integration help you build an open and flexible AI research and development workstation.
    
-   **Intelligent assistance and AI engineering**  
    The built-in Copilot intelligent assistant supports you throughout the code development process. Professional PAI algorithm nodes and LLM nodes provide native support for end-to-end AI engineering.
    

## **Basic concepts of Data Studio**

**Concept**

**Term**

**Core value**

**Keywords**

**Workflow**

An organizational and orchestration unit for tasks

Manages dependencies and automates scheduling for complex tasks. It acts as a "container" for development and scheduling.

Visualization, DAG, recurring/triggered, orchestration

**Node**

The smallest execution unit in a workflow

Where you write code and implement specific business logic. It is an atomic operation for data processing.

SQL, Python, Shell, data integration

**Custom image**

A standardized snapshot of an environment

Ensures that the environment is extensible, consistent, and reproducible.

Environment hardening, standardization, replicability, consistency

**Scheduling**

A rule for automatically triggering a task

Automates data production by converting manual tasks into automatically runnable production tasks.

Recurring scheduling, triggered scheduling, dependency, automation

**Data catalog**

A unified metadata workbench

Organizes and manages data assets (such as tables) and computing resources (such as functions and resources) in a structured way.

Metadata, table management, data exploration

**Dataset**

A logical mapping to external storage

Connects to external unstructured data, such as images and documents. It is a key data bridge for AI development.

OSS/NAS access, data mounting, unstructured

**Notebook**

An interactive Data+AI development canvas

Integrates SQL and Python code to accelerate data exploration and algorithm validation.

Interactive, multi-language, visualization, exploratory analysis

## **Data Studio process guide**

Data Studio provides processes for data warehouse development and AI development. The following sections show two common paths. Explore other paths as needed.

### **General path: Data warehouse development process for recurring ETL tasks**

This process is suitable for building enterprise-level data warehouses to achieve stable and automated batch data processing.

-   **Target audience**: Data engineers, ETL developers.
    
-   **Core objective**: Build a stable, standardized, and automatically schedulable enterprise-level data warehouse for batch data processing and report generation.
    
-   **Key technologies**: Data catalog, recurring workflow, SQL node, scheduling configuration.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8766702771/CAEQUxiBgICkloz14BkiIDBkMWQ3MDVhZDZlYTQ0OGM4ODVkNzY5ZTI0Y2FiMDgx6122961_20260106171111.683.svg)

**Step**

**Phase name**

**Core operation and purpose**

**Key path and reference**

**1**

**Associate a compute engine**

Associate one or more core compute engines, such as MaxCompute, with the workspace to serve as the execution environment for all SQL tasks.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7431648671/p1035705.png)

**Console** **\>** **Workspace Configuration**

> For more information, see [Associate a computing resource](/help/en/dataworks/user-guide/create-and-manage-compute-resources/#9aa7bbe6a6ep1).

**2**

**Manage the data catalog**

Create or explore the table schemas required for each layer of the data warehouse (such as ODS, DWD, and ADS) in the data catalog. This defines the input and output for data processing.

> We recommend that you use the [data modeling](/help/en/dataworks/user-guide/data-modeling-overview/) module to build your data warehouse system.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7571900771/p1041098.png)

**Data Studio > Data Catalog**

> For more information, see [Data Catalog](/help/en/dataworks/user-guide/data-directory/).

**3**

**Create a scheduled workflow**

Create a scheduled workflow in the workspace directory to serve as a container for organizing and managing related ETL tasks.

**Data Studio > Workspace Directory > Periodic Scheduling**

> For more information, see [Orchestrate a recurring workflow](/help/en/dataworks/user-guide/workflow).

**4**

**Develop and debug nodes**

Create nodes such as ODPS SQL nodes. Write the core ETL logic (data cleaning, transformation, and aggregation) in the editor and debug the nodes.

-   **Data Studio > Node Development > Node Editor**
    
-   **Data Studio > Node Development > Debugging Configuration**
    

> For more information, see [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/).

**5**

**Develop with Copilot assistance**

Use DataWorks Copilot to generate, correct, rewrite, and convert SQL and Python code.

-   **Data Studio > Node Development > Copilot**
    
-   **Data Studio > Copilot > Agent**
    
    > For more information, see [DataWorks Copilot](/help/en/dataworks/user-guide/dataworks-agent).
    

**6**

**Orchestrate and schedule nodes**

On the DAG canvas of the workflow, define the upstream and downstream dependencies between nodes by dragging and connecting them. Various flow control nodes are supported to enable complex flow orchestration.

Configure scheduling properties for the workflow or nodes in the production environment, such as the scheduling cycle, time, and dependencies. Supports large-scale scheduling of tens of millions of tasks per day.

-   **Data Studio > Workflow > Workflow Canvas**
    
-   **Data Studio > Node Development > Scheduling Configuration**
    

> For more information, see [General flow control nodes](/help/en/dataworks/user-guide/for-each-node) and [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).

**7**

**Deploy and O&M**

-   **Deploy**: Deploy the debugged node or workflow to the production environment through the deployment.
    
-   **O&M**: In the Operation Center, monitor tasks, configure alerts, backfill data, and perform recurring validation. Use intelligent baselines to ensure tasks are completed on time and use monitoring alerts to promptly handle abnormal tasks.
    

-   **Data Studio > Node/Workflow Details > Deploy Node/Workflow**
    
-   **Operation Center** **\>** **Auto Triggered Node O&M** **>** **Auto Triggered Nodes**
    
    > For more information, see [Deploy a node or workflow](/help/en/dataworks/user-guide/task-release/) and [Basic O&M operations for auto triggered nodes](/help/en/dataworks/user-guide/perform-basic-maintenance-operations-on-auto-triggered-nodes).
    

**Note**

For a related getting started example, see [Advanced: Analyze best-selling product categories](/help/en/dataworks/user-guide/advanced-case-analysis-of-best-selling-category-of-commodity-orders).

### **Advanced path: Big data and AI development process**

This process is suitable for AI model development, data science exploration, and building real-time AI applications. It emphasizes environmental flexibility and interactivity. The specific process may vary based on actual needs.

-   **Target audience**: AI engineers, data scientists, algorithm engineers.
    
-   **Core objective**: Perform data exploration, model training, and algorithm validation, or build real-time AI applications such as retrieval-augmented generation (RAG) and real-time inference services.
    
-   **Key technologies**: Personal development environment, Notebook, event-triggered workflow, dataset, custom image.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8766702771/CAEQUxiBgMCN3ZH14BkiIDBhOWRmMGFkMGM4ZjRkZDlhNWVkZTViNzcwMTgzYTM16122961_20260106171111.683.svg)

**Steps**

**Stage name**

**Core operation and purpose**

**Key path and reference documents**

**1**

**Create a personal development environment**

Create an isolated and customizable cloud container instance to serve as the environment for installing complex Python dependencies and performing professional AI development.

**Data Studio > Personal Development Environment**

> For more information, see [Personal development environment](/help/en/dataworks/user-guide/personal-development-environment/).

**2**

**Create an event-triggered workflow**

Create a workflow in the workspace directory that is driven by external events. This provides an orchestration container for real-time AI applications.

**Data Studio > Workspace Directory > Event-triggered Workflow**

> For more information, see [Event-triggered workflow](/help/en/dataworks/user-guide/trigger-based-workflow).

**3**

**Create and set a trigger**

Configure a trigger in the Operation Center to define which external event, such as an OSS event or a Kafka message event, will start the workflow.

-   **Create: Operation Center > Trigger Management**
    
-   **Use: Data Studio > Event-triggered Workflow > Scheduling Configuration**
    

> For more information, see [Manage triggers](/help/en/dataworks/user-guide/manage-triggers) and [Design an event-triggered workflow](/help/en/dataworks/user-guide/trigger-based-workflow#4968e13041qjb).

**4**

**Create a Notebook node**

Create the core development unit for writing AI/Python code. Typically, exploration is first done in a Notebook in the personal folder.

**Project Folder > Event-triggered Workflow > Notebook Node**

> For more information, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#f0e24788b27nt).

**5**

**Create and use a dataset**

Register unstructured data (such as images and documents) stored in OSS/NAS as a dataset. Then, mount it to the development environment or task for code access.

-   **Create: Data Map > Data Catalog > Dataset**
    
-   **Use: Data Studio > Personal Development Environment > Dataset Configuration**
    

> For more information, see [Manage Datasets](/help/en/dataworks/user-guide/manage-datasets) and [Use datasets](/help/en/dataworks/user-guide/use-datasets).

**6**

**Develop and debug the Notebook/node**

Write algorithm logic, explore data, validate models, and iterate quickly in the interactive environment provided by the personal development environment.

**Data Studio > Notebook Editor**

> For more information, see [Basic Notebook development](/help/en/dataworks/user-guide/basic-notebook-development).

**7**

**Install custom dependency packages**

In the terminal of the personal development environment or in a Notebook cell, use tools such as `pip` to install all third-party Python libraries required for the model.

**Data Studio > Personal Development Environment > Terminal**

> For more information, see [Appendix: Complete your personal development environment](/help/en/dataworks/user-guide/make-a-mirror-image-of-a-personal-development-instance#7adcd7dd8c5w8).

**8**

**Create a custom image**

Solidify the personal development environment with all dependencies configured into a standardized image. This ensures that the production environment is identical to the development environment.

> If you have not installed custom dependency packages, skip this step.

-   **Data Studio > Personal Development Environment > Manage Environment**
    
-   **Console > Custom Image**
    

> For more information, see [Create a DataWorks image from a personal development environment](/help/en/dataworks/user-guide/make-a-mirror-image-of-a-personal-development-instance).

**9**

**Configure node scheduling**

In the scheduling configuration of the production node, you must specify the custom image created in the previous step as the runtime environment and mount the required datasets.

**Data Studio > Notebook Node > Scheduling**

> For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).

**10**

**Deploy and O&M**

-   **Deploy**: Deploy the configured event-triggered workflow to the production environment.
    
-   **O&M**: Trigger a real event, such as uploading a file, to verify that the end-to-end process is smooth and perform trigger validation.
    

-   **Data Studio > Node/Workflow Details > Deploy Node/Workflow**
    
-   **Operation Center** **\>** **Manually Triggered Node O&M** **>** **Manually Triggered Node**
    
    > For more information, see [Deploy node and workflow](/help/en/dataworks/user-guide/task-release/) and [Run and manage one-time tasks](/help/en/dataworks/user-guide/manage-and-run-manually-triggered-nodes).
    

## **Core modules of Data Studio**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8766702771/CAEQUxiBgMCajNv14BkiIGI2YWVlN2QwMTEyYTRlOGZhMjNhMGEzOWMxYzQ0NTgz4602768_20241009132650.833.svg)

**Core module**

**Main capabilities**

**Workflow orchestration**

Provides a visual DAG canvas that lets you easily build and manage complex task projects by dragging and dropping. It supports [recurring workflow orchestration](/help/en/dataworks/user-guide/workflow), [event-triggered workflows](/help/en/dataworks/user-guide/trigger-based-workflow), and [manually triggered workflows](/help/en/dataworks/user-guide/manual-workflow/) to meet automation needs in different scenarios.

**Execution environments and modes**

Provides flexible and open development environments to improve development efficiency and collaboration.

-   **Execution environment**: Supports a default development environment, a [personal development environment](/help/en/dataworks/user-guide/personal-development-environment/), and [custom images](/help/en/dataworks/user-guide/custom-image) to meet personalized development needs. It also supports [Git integration](/help/en/dataworks/user-guide/git-synchronization-and-code-merging/) for code version control, allowing developers to use familiar tools.
    
-   **Development mode**: Provides a [project folder](/help/en/dataworks/user-guide/dataworks-project-development) (for team collaboration), a [personal folder](/help/en/dataworks/user-guide/personal-directory-project-development) (for personal development and testing), and a manual folder (for temporary tasks) to effectively isolate and manage development assets.
    

**Node development**

Supports a wide range of node types and compute engines for flexible data processing and analysis.

-   **Compute engine**: Seamlessly integrates with big data compute engines such as MaxCompute, EMR, Hologres, and Flink, along with AI computing services like PAI.
    
-   **Node type**: Provides data integration, SQL, Python, Shell, Notebook, LLM, and various AI interactive nodes to meet diverse needs such as data synchronization, cleaning, processing, and AI training.
    

> For more information, see [Computing resource management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/) and [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/).

**Node scheduling**

Provides powerful and flexible automated scheduling capabilities to ensure tasks are executed on time and in order.

-   **Scheduling mechanism**: Supports time-based (year, month, day, hour, minute, second) recurring scheduling, along with scheduling triggered by events or OpenAPI.
    
-   **Scheduling dependency**: Supports setting complex dependencies within the same cycle, across cycles, across workflows, and across workspaces. It also supports dependencies between different scheduling cycles and different types of tasks.
    
-   **Scheduling policy**: Supports configuring advanced policies such as task effective period, rerun on failure, dry-run, and freeze.
    
-   **Scheduling parameter**: Supports workflow parameters, workspace parameters, context parameters, and node parameters.
    
    > For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    

**Development resource management**

Provides unified management of various assets involved in the data development process.

-   **Data catalog**: Provides data lakehouse metadata management capabilities, supporting the creation, viewing, and management of data tables.
    
-   **Functions and resources**: Supports the management and referencing of user-defined functions (UDFs) and various resource files, such as JAR and Python files.
    
-   **Dataset**: Supports mounting and managing datasets from external storage such as OSS/NAS.
    
    > For more information, see [Data Catalog](/help/en/dataworks/user-guide/data-directory/), [Resource Management](/help/en/dataworks/user-guide/resource-management-of-data-studio/), and [Use datasets](/help/en/dataworks/user-guide/use-datasets).
    

**Quality control**

Built-in multiple control mechanisms to ensure the standardization of the data production process and the accuracy of the output data.

-   **Code review**: Supports manual code review before task publication to ensure code quality.
    
-   **Flow control**: Can be combined with smoke testing, governance item checks, and extensions for automated validation during task submission and publication.
    
-   **Data Quality**: Can be associated with Data Quality monitoring rules to automatically trigger data validation after a task runs, allowing for the immediate discovery of data issues.
    
    > For more information, see [Code review](/help/en/dataworks/user-guide/code-review-data-studio), [Configure check items](/help/en/dataworks/user-guide/configuration-check-items), [Smoke testing](/help/en/dataworks/user-guide/smoke-test-not-available), and [Configure Data Quality rules](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
    

**Openness and extensibility**

Provides a rich set of open interfaces and extension points for easy integration with external systems and custom development.

-   **OpenAPI**: Provides comprehensive API interfaces that support programmatic management and operation of development tasks.
    
-   **Event messages**: Supports subscribing to data development-related event messages to enable interaction with external systems.
    
    > For more information, see [OpenAPI](/help/en/dataworks/user-guide/openapi), [OpenEvent](/help/en/dataworks/user-guide/openevent/), and [Extensions](/help/en/dataworks/user-guide/extensions/).
    

## **Data Studio billing**

-   DataWorks charges (costs appear on DataWorks bills)
    
    -   **Resource group fees**: Node development and personal developer environments require resource groups. Depending on the resource group type, you incur either [Serverless resource group fees](/help/en/dataworks/new-resource-group-overview) or [fees for exclusive resource groups for scheduling](/help/en/dataworks/exclusive-resource-groups-for-scheduling).
        
        > If you use a [large model service](/help/en/dataworks/user-guide/llm-service-management/), you also incur Serverless resource group fees.
        
    -   **Task scheduling fees**: If you publish a task to the production environment for scheduled execution, you incur [task scheduling fees](/help/en/dataworks/billing-description-of-task-scheduling) (when using a Serverless resource group) or [fees for exclusive resource groups for scheduling](/help/en/dataworks/exclusive-resource-groups-for-scheduling) (when using an exclusive resource group).
        
    -   **Data Quality fees**: If you configure quality monitoring for a periodic task and an instance is successfully triggered, you incur [Data Quality instance fees](/help/en/dataworks/resource-costs#8b1ddd8f69cpt).
        
    -   **Smart baseline fees**: If you configure a smart baseline for a periodic task, you incur [smart baseline instance fees](/help/en/dataworks/resource-costs#bf3eb9d58aov4) for baselines that are in the enabling status.
        
    -   **Alert text message and phone call fees**: If you configure alert monitoring for a periodic task and a text message or phone call is successfully triggered, you incur [alert text message and phone call fees](/help/en/dataworks/resource-costs#996d5441841t2).
        
        **Note**
        
        These costs are associated with the Data Development, Data Quality, and Operation Center modules.
        
-   Charges from other services (costs do not appear on DataWorks bills)
    
    When you run a Data Development node task, you may incur **compute engine and storage fees**, such as OSS storage fees. These fees are not charged by DataWorks.
    

## **Get started with Data Studio**

### **Create or enable the new Data Studio**

-   When you create a workspace, select **Use Data Studio (New Version)**. For specific operations, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#section-5te-m4n-59y).
    
-   The old version of DataStudio supports migrating data to the **new Data Studio** by clicking the **Upgrade to Data Studio** button at the top of the **Data Development** page and following the on-screen instructions. For more information, see [Data Studio upgrade guide](/help/en/dataworks/user-guide/data-studio-upgrade-guide).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7571900771/p1041308.png)
    

### **Go to the new Data Studio**

Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.

## **FAQ**

-   **Q: How can I determine whether I'm using the new or old version of Data Studio?**
    
    **A:** The page styles are completely different. The new version looks like the screenshots in this document, while the old version is shown in the figure below.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7571900771/p1042162.png)
    
-   **Q: Can I revert to the old version of Data Studio after upgrading to the new version?**
    
    **A:** The upgrade from the old version to the new version is an **irreversible operation**. After a successful upgrade, you cannot revert to the old version. Before switching, we recommend that you first create a workspace with the new Data Studio enabled for testing. Ensure that the new version meets your business needs before upgrading. In addition, data in the new and old versions of Data Studio are independent of each other.
    
-   **Q: Why don't I see the** **Use Data Studio (New Version)** **option when I create a workspace?**
    
    **A:** If you do not see this option on the interface, it means that your workspace has already enabled the new Data Studio by default.
    
    **Important**
    
    If you encounter any problems while using the new Data Studio, you can join the [exclusive DingTalk group for DataWorks Data Studio upgrade support](https://qr.dingtalk.com/action/joingroup?code=v1,k1,beuiETdvtb+IOvKdSbTI7Bw/kI5mTAnQ1rrIPIujErQ=&_dt_no_comment=1&origin=1) for assistance.
