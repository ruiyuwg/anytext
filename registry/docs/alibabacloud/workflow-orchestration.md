A workflow is a tool that automates data processing flows. It provides a drag-and-drop interface that lets you integrate various types of task nodes. This simplifies the process of establishing downstream dependencies between tasks, accelerates the setup of data processing flows, and improves development efficiency.

## What is a workflow?

A workflow is a core unit in DataWorks for orchestrating and managing data tasks. It visually organizes multiple task nodes, such as SQL, Shell, Python, data synchronization, and Check nodes, into a directed acyclic graph (DAG). This structure establishes clear downstream dependencies and enables unified scheduling and execution to build stable and maintainable data pipelines. Additionally, workflows can be orchestrated with one another to support development in complex business scenarios.

A workflow essentially integrates separate data tasks into a structured, visual process. This shifts the focus from managing individual tasks to managing an entire data production line. The core value of a workflow lies in three main areas:

-   **Abstract and visualize development flows**  
    You can encapsulate nodes with dependencies, such as SQL and Shell, into a business-oriented workflow, such as "Daily Active User Analysis", to form a clear DAG. This not only clarifies the technical path but also helps non-technical staff understand the data forwarding logic, promoting alignment between business and technology.
    
-   **Atomic management of development and O&M**  
    As the smallest unit for changes and operations, a workflow supports holistic submission, deployment, and O&M, such as testing, rerunning, and data backfill. This prevents production issues caused by partial modifications and ensures end-to-end consistency and stability.
    
-   **Define boundaries for team collaboration**  
    In a multi-team environment, a workflow clarifies ownership and responsibility. For example, the transaction team is responsible for transaction data, while the product team is responsible for product data. This enables permission isolation and issue tracking. Standardized outputs also support efficient, decoupled collaboration between upstream and downstream teams.
    

## Workflow type comparison

DataWorks currently recommends two main types of workflows:

-   **Scheduled workflow**: A workflow that automatically runs on a fixed schedule, such as hourly, daily, or weekly, making it suitable for data processing scenarios that require regular execution. It is triggered by a configured scheduling rule, and the execution of its inner nodes is controlled by the scheduled time.
    
-   **Event-triggered workflow**: An on-demand workflow triggered by external signals, such as manual operations, OpenAPI calls, or event messages. It is suitable for scenarios that require real-time processing or a response to external events. This type of workflow does not rely on a fixed scheduling cycle and supports manual, API, and event triggers.
    

**Feature**

**Scheduled workflow**

**Event-triggered workflow**

**Manual workflow (not recommended)**

**Scheduling method**

Triggered by scheduled time and dependencies

Manual/Event/API trigger

Manual run

**Scenarios**

Daily/Hourly/Weekly/Monthly batch

Real-time processing/On-demand execution/External integration

Temporary tasks (for backward compatibility)

**Parameter priority**

Node > Workflow > Workspace

Node > Workflow > Workspace

Workflow > Node

**Typical use case**

T+1 reports at midnight daily

Automatic processing upon OSS file arrival

One-time data fix

**Important**

-   A triggered workflow can also be used as a manually run workflow when it is not bound to a trigger to gradually replace manually triggered workflows.
    
-   Manually triggered workflows are mainly for compatibility with older data development patterns. Do not use them for new projects.
    

## **Quick selection guide**

Answer the following three questions to quickly determine the right workflow type for you:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0588880771/CAEQUxiBgMDfp66r4hkiIGVkNzg2MjQ0Njg3MDQyZTE4NWRjNmQ1ZDU0OWIwOWM56225414_20260115155851.969.svg)

## **References**

Select the appropriate document based on your scenario:

-   For scheduled scheduling scenarios, see [Scheduled workflow orchestration](/help/en/dataworks/user-guide/workflow).
    
-   For event-driven scenarios, see [Event-triggered workflows](/help/en/dataworks/user-guide/trigger-based-workflow).
    
-   For O&M and monitoring, see [Operation Center overview](/help/en/dataworks/user-guide/overview-of-operation-center).
