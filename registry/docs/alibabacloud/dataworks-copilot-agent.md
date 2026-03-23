The DataWorks Agent uses natural language interaction, combined with the deep cognitive and planning capabilities of a Large Language Model (LLM), to complete complex data integration, development, and governance tasks. It enables end-to-end automation from requirements to results, significantly boosting your productivity. This topic describes the features, use cases, and core mechanisms of the DataWorks Agent.

## **Overview**

The DataWorks Agent is built on a proprietary Agent client. Unlike the [DataWorks Agent with third-party clients](/help/en/dataworks/user-guide/dataworks-agent-with-mcp), you do not need to install additional software or perform complex configurations. You can use it directly within the relevant DataWorks modules.

Using a **describe your needs to get results** natural language interaction model, DataWorks Agent delivers a **requirements-as-code** development experience. Simply describe what you need in plain language to complete tasks like data development, which significantly improves your productivity. The DataWorks Agent operates as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1967324771/CAEQUxiBgID1tbqW5RkiIGEwYTAxNTc2NzFiYjRhZmNhOTY0ZWZlOGRlZGZiZmMw5574875_20250807114327.065.svg)

## **Access the agent**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the left-side navigation pane, choose **Data Development and O&M** > **DataStudio**. Select your workspace and open Data Studio.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png), icon in the upper-right corner of the Data Studio page to open Copilot Chat. The Ask mode is enabled by default. In the lower-left corner of the dialog box, switch to the **Agent** mode.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8272738671/p1044354.png)
    

## **Quick start**

#### **Step 1: Switch to Agent mode**

On the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner to open Copilot Chat. In the lower-left corner of the dialog box, switch to the **Agent** mode.

#### **Step 2: Select an agent**

You can click `/` or enter `/` in the input box to open the Agent menu. Select the agent best suited for your task. The agent types include: **Data Integration Agent**, **Data Map Agent**, **Data Studio Agent**, **Data Governance Agent**, and **Data O&M Agent**.

**Note**

In the corresponding product module, DataWorks automatically selects the appropriate Agent, so you do not need to select one manually.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8146380771/p1053865.png)

#### **Step 3: Add context (Optional)**

You can provide more context to Copilot by entering `@` in the dialog box or clicking `@` in the lower-right corner to select and add the required context type.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8272738671/p1044380.png)

The supported types are:

-   **Table**: Reference metadata from one or more tables.
    
-   **Node/Code Files**: Reference code from a specific node.
    
-   **Data Album**: Reference a data album from Data Map.
    
-   **Rules**: Temporarily apply one or more specified rules to the current conversation.
    
-   **Upload File**: Upload a local document to use as context.
    

#### **Step 4: Switch the LLM (Optional)**

By default, Copilot uses the DataWorks default model. In this mode, the Agent intelligently schedules and allocates models based on the task scenario, and supports seamless switching between multiple models. You can also click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5125032771/p1054684.png) icon at the bottom of the dialog box to select a different supported LLM from the menu.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5125032771/p1054714.png)

The supported models are:

**Model type**

**Supported regions**

**DataWorks default model**

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Japan (Tokyo).

**Qwen3-Coder**

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Japan (Tokyo).

**Qwen3-Max**

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and China (Chengdu).

**GLM4.7**

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and China (Chengdu).

#### **Step 5:** Refine requests via multi-turn chat

Enter your request in the dialog box. You can engage in a multi-turn conversation by asking follow-up questions or providing additional details to progressively refine your intent until the Agent fully understands and produces the desired result.

## **Use cases**

The DataWorks Agent uses the deep understanding and task orchestration capabilities of LLMs to support scenarios such as data integration, development, governance, Data Map, and O&M. The following table compares these capabilities.

**Agent scenario**

**Description**

Data Integration

Allows you to describe data synchronization requirements in natural language (such as Chinese or English). The system automatically parses the semantics and intelligently generates the corresponding data synchronization task configuration. This includes the source and target data source types, table structure mappings, column filtering conditions, partitioning strategies, and scheduling parameters.

Data Studio

Provides a natural language-based ETL development experience, covering the entire process from requirements analysis and code generation to workflow creation and release.

Data Governance

The DataWorks Data Governance Agent transitions enterprise data governance from a proactive to an "autonomous" model. Data governance no longer requires complex data analysis and extensive form-based configuration changes. Instead, you can use natural language commands that are converted into precise governance actions. The Agent then uses expert-level capabilities to configure and automatically execute these governance operations.

Data Map

This agent focuses on improving the efficiency of finding and understanding data. Through AI-driven natural language interaction, you can quickly explore metadata in various scenarios across vast amounts of data.

Data O&M

This agent is designed to provide comprehensive health assessments and problem localization for task instances. By integrating analysis from multiple dimensions—including dependency chains, resource levels, historical run trends, change impacts, log anomalies, and data quality—it automatically generates a structured diagnostic report.

### **Use case 1: Data Integration Agent**

**Description**: You can describe data synchronization requirements in natural language (such as Chinese or English). The system automatically parses the semantics and intelligently generates the corresponding data synchronization task configuration. This includes the source and target data source types, table structure mappings, column filtering conditions, partitioning strategies, and scheduling parameters.

**Steps:**

1.  Enter `/` in the dialog box and select **Data Integration Agent**.
    
2.  Describe your data synchronization requirements, including the source, target, table names, and synchronization method. For example: "Create an offline synchronization task to synchronize the `ods_user_info_d` table from MySQL to the `ods_user_info_d` table in MaxCompute."
    
3.  The Agent parses your request and automatically populates the data source, table mappings, and other information to create a data synchronization node.
    
4.  After the node is created, you can click to view and modify it.
    

### **Use case 2: Data Studio Agent**

**Description**: This agent provides a natural language-based ETL development experience, covering the entire process from requirements analysis and code generation to workflow creation and release.

**Steps:**

1.  Describe your data development requirement in natural language and add context as needed. For example: "Build a user profile analysis workflow".
    
2.  The Agent breaks down the task into multiple steps (such as creating nodes, generating code, and configuring dependencies) and executes them.
    
3.  For the generated node code, you can review it and choose whether to keep or discard the changes.
    

### **Use case 3: Data Governance Agent**

**Description**: The DataWorks Data Governance Agent transitions enterprise data governance from a proactive to an "autonomous" model. Data governance no longer requires complex data analysis and extensive form-based configuration changes. Instead, you can use natural language commands that are converted into precise governance actions. The Agent then uses expert-level capabilities to configure and automatically execute these governance operations.

**Core capabilities**:

-   **Quality rule configuration**: Use natural language to help you automatically configure quality monitoring rules for specified key tables. The Data Governance Agent can intelligently analyze the column types, business semantics, and importance of a specified table to automatically recommend and configure appropriate monitoring rules. These rules can include primary key uniqueness, non-null constraints, and enumeration range checks, efficiently completing work that previously required extensive data exploration and rule configuration.
    
    -   _Example: "Automatically generate quality rules for the core user dimension table_ `_dim_user_info_`_."_
        
    -   _Example: "Automatically configure quality rules related to table row counts for tables starting with_ `_ods__`_."_
        
-   **Quality issue resolution**: For quality issues that the system automatically discovers in the data governance module, such as "Frequently accessed tables without quality rules" or "Tables produced by high-priority baseline tasks without quality rules", you can provide governance requirements in natural language. The system then automatically analyzes the issues and performs the corresponding remediation actions.
    
    -   _Example: "Find frequently accessed tables that do not have quality rules, and then recommend and configure rules for them."_
        
    -   _Example: "Help me resolve issues related to the data quality dimension."_
        

### **Use case 4: Data Map Agent**

**Description**: This agent focuses on improving the efficiency of finding and understanding data. Through AI-driven natural language interaction, you can quickly explore metadata in various scenarios across vast amounts of data.

**Core capabilities**:

-   **Natural language search**: Supports natural language Q&A, allowing you to quickly locate target data based on your business intent without needing precise keywords. For example, _"Find summary tables related to user activity."_
    
-   **Automatic scope adjustment**: Supports specifying a scope in the conversation. The Agent will automatically understand the semantics and quickly locate data within that scope. For example, _"In the adm\_bi project, find tables related to business operations."_
    
-   **Deep data understanding**: It also supports asking follow-up questions about target data to quickly obtain details such as data lineage, owner, and column definitions. For example, _"@dws\_bi\_metric\_di what are the direct downstream dependencies of this table? Who are the owners that would be affected by changes?"_
    

### **Use case 5: Data O&M Agent**

**Description**: This agent is designed to provide comprehensive health assessments and problem localization for task instances. By integrating analysis from multiple dimensions—including dependency chains, resource levels, historical run trends, change impacts, log anomalies, and data quality—it automatically generates a structured diagnostic report.

For more information about the Data O&M Agent, see [AI-powered O&M](/help/en/dataworks/user-guide/ai-operation-and-maintenance).

## **How it works**

### **1\. Storage management**

The Data Studio Agent supports creating nodes and files in project or personal directories. To ensure accurate storage management:

-   **Storage location settings**: Configure the **The default storage path for generating code files** in the Copilot settings center. For more information, see [Personal settings](/help/en/dataworks/user-guide/dataworks-copilot-settings#50c16b7d4exwu).
    
-   **Conflict handling mechanism**: When the generated node type is inconsistent with the current directory's rules (for example, if you ask to create a data integration node in a personal directory), the Agent prompts you for confirmation before proceeding.
    

### **2\. Complex task handling**

For development requirements with complex logic, the Agent provides status feedback throughout the entire lifecycle:

-   **To-do list**: The Agent breaks down a complex task into multiple sub-steps and displays them as a To-do list. The status of each item is automatically updated as the execution progresses.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5125032771/p1054698.png)
    
-   **Execution summary**: At the end of the workflow, the Agent compiles and outputs a summary report of the entire task. This report consolidates the completed operations and generated resources for an efficient review.
    

### **3\. Token usage and performance**

After a task is completed, the Agent provides quantitative feedback to help you assess the execution efficiency and scale of model calls:

-   **Task duration statistics**: The system automatically records and displays the total time elapsed for the task, allowing you to evaluate the efficiency of the automated process.
    
-   **Token consumption measurement**: Accurately counts the number of input and output Tokens generated during the interaction.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5125032771/p1054705.png)
    

### **4\. Intelligent model scheduling**

Copilot introduces an intelligent model allocation mechanism designed to create an "intent-driven" development experience, so you no longer need to focus on selecting the underlying model:

-   **Fully automatic model allocation (DataWorks default model)**: The Agent defaults to the DataWorks default model. In this mode, the Agent identifies and breaks down your development intent, and then automatically dispatches the optimal model to handle sub-tasks.
    
-   **Dynamic multi-model coordination (DataWorks default model)**: In the DataWorks default model, the Agent can schedule tasks across different models. It flexibly switches between multiple models within a single conversation based on the real-time needs of the task, ensuring that each part of a complex task is matched with the most suitable model.
    
-   **Manual model switching**: While automation meets most needs, you can switch from the DataWorks default model and specify a different model for specific scenarios.
    

## **Related documents**

To learn about custom Agent features, see [DataWorks Agent with third-party clients](/help/en/dataworks/user-guide/dataworks-agent-with-mcp).
