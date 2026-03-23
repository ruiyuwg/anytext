AI-powered O&M is a feature in DataWorks, powered by DataWorks Copilot, that provides comprehensive health assessments and issue diagnostics for **task instances**. By analyzing multiple factors including dependency chains, resource levels, historical performance trends, change impacts, log anomalies, and data quality, it automatically generates a structured diagnostic report. The report reveals the root cause of a problem, provides clear solutions, and offers one-click actions to resolve it. This shifts your O&M from reactive to proactive, significantly improving efficiency.

## Feature overview

AI-powered O&M is a one-stop, intelligent tool for task O&M in DataWorks, an upgrade to the original intelligent O&M feature. When you encounter issues such as task failures, slow runtimes, or resource contention, DataWorks AI-powered O&M automatically analyzes the entire task lifecycle to quickly identify the root cause and provide solutions with one-click O&M actions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051228.png)

**Core capabilities**:

-   **Comprehensive diagnosis**: Covers every task state, from not running and waiting to running and completed (success or failure). The diagnostic scope supports individual instances, workflows, and entire projects. It provides a thorough diagnosis by analyzing dependencies, resource usage, historical performance, and log content, and supports contextual follow-up questions.
    
-   **Root cause analysis**: Pinpoints the root cause by correlating multidimensional information, going beyond a simple error log.
    
-   **Interactive O&M**: Allows you to issue O&M commands (such as Rerun, Set to Success, or modify a Resource Group) directly in a chat dialog. It simplifies complex operations into one-click buttons, significantly improving O&M efficiency.
    

## **Quick start**

This section guides you through a complete diagnostic process for a typical use case: troubleshooting a failed task instance.

1.  **Start a diagnosis**
    
    1.  Navigate to **Operation Center** > **Cycle Task** and find the failed target instance.
        
    2.  Click the instance name to expand its DAG. Hover over the instance and click the **AI Diagnosis** button in the quick action bar.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051159.png)
        
2.  **Wait for the AI analysis**
    
    The DataWorks Copilot assistant opens on the right and displays "DataWorks Copilot is processing...". As it works, Copilot shows its analysis steps, helping you understand its "thought" process. The following figure shows a typical diagnostic flow. You can expand any step to view details.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051242.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051243.png)
    
3.  **Read the diagnostic report**
    
    After a few seconds, Copilot returns a structured diagnostic report. Focus on the following sections:
    
    -   **Abnormal Findings**: This section identifies anomalies and deduces the root cause from the available context.
        
    -   **Analysis Process**: This section details the evidence chain supporting the AI's conclusions.
        
    -   **Solution and Prevention Suggestions**: Provides specific, actionable steps to fix the issue and long-term recommendations to prevent it from recurring.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051246.png)
    
4.  **Implement the solution**
    
    Follow the suggestions in the report.
    
    -   Immediate actions: The report often provides quick actions directly related to the problem. For example, for a resource group issue, it might offer a shortcut to modify the task's resource group. As shown in the following figure, you can reply with `Yes` to let the AI guide you through modifying the resource group.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051236.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051244.png)
        
    -   Interactive operations: If the report does not provide a specific action, you can enter commands in the chat to resolve the issue. For example, enter "Modify the resource group for task xxx", and Copilot guides you through the process. By using natural language, the AI can dynamically understand complex contextual requests, which simplifies operations and is ideal for unstructured O&M scenarios.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051237.png)
        

**Note**

The content of the diagnostic report and the suggested solutions vary depending on the cause of the failure. The information provided is for reference only. For a list of supported O&M agent operations, see [O&M actions](#1edf1c4d69ayq).

## Considerations

-   Project-level diagnosis or analyses involving a large number of instances may take 1 to 5 minutes to complete.
    
-   You can analyze dependencies across workspaces. However, viewing detailed results requires membership in the target workspace.
    

## **Access AI diagnosis**

You can access AI-powered O&M from multiple entry points in DataWorks.

#### **Global entry point (Copilot)**

On any page in DataWorks, open the Copilot chat in the upper-right corner, switch Copilot to Agent mode, and select `/Data O&M`:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155800771/p1051175.png)

You can enter `Diagnose instance [Instance ID]`, reference an instance with `@<Instance ID>` to provide context, or diagnose a project with a prompt like: .

**Note**

From the global entry point, you must specify the `/Data O&M` agent. In contextual entry points, the O&M agent is used by default.

#### **Contextual entry points**

**Location**

**How to access**

**Operation Center** > **AI-powered O&M**

In Operation Center, click AI-powered O&M in the left navigation pane.

Operation Center > Instance List

In the Actions column, click **More** > **AI Diagnosis**. This supports diagnosis for scheduled instances, test instances, and data backfill instances.

Operation Center > DAG

Hover over a node instance and click the **AI Diagnosis** button.

Instance Running Logs tab

On the Log Diagnosis page, click the **AI Diagnosis** button at the top. This automatically opens Copilot and submits the diagnosis command.

Log Diagnosis page

In the dialog box in the middle of the page, enable **AI Diagnosis**, enter an instance ID or project ID, and start the diagnosis.

> Note: The original \*\*Intelligent Diagnosis\*\* button has been renamed to \*\*Log Diagnosis\*\* and now focuses on analyzing the content of the current log.

## Use cases

### Instance-level issues

**Type**

**Example command**

Task failure

`Diagnose instance: <Instance ID>` or reference the context with `@<Instance ID>`.

Slow runtime

`Why did instance <Instance ID> run slow today?`

Long wait time

`Check why instance <Instance ID> is still waiting`.

Dependency blocking

`Show the failed parent nodes for instance <Instance ID>`.

## O&M actions

From the diagnostic report or within the Copilot conversation, you can perform the following actions on individual or multiple tasks or instances in your workspace:

**Important**

All actions performed in the AI chat require your manual review and confirmation before they are executed.

**Actions**

**Description**

Rerun instance

Reruns the current instance.

Set to Success

Sets the instance's status to "Successful".

Suspend/Resume instance

Controls the scheduling state.

Modify resource group

Switches the resource group.

Modify priority

Adjusts the scheduling priority, which affects baseline scheduling.

Refresh instance

Updates the instance with the latest task configuration.

> You must have the **Project Owner** or **O&M** role in the target workspace.
