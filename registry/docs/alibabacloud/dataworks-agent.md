Eliminate tedious data tasks and streamline your workflow with DataWorks Copilot, the built-in AI assistant for DataWorks. DataWorks Copilot frees you from repetitive and inefficient work, so you can focus on innovation and problem-solving. Integrated into DataWorks, Copilot helps you do more with simple natural language commands. Use it to:

-   **Generate code**: Instantly transform your ideas into high-quality, standards-compliant code.
    
-   **Automate task creation**: Complete data development and data governance tasks to automate your workflows.
    
-   **Leverage team knowledge**: Incorporate best practices and business knowledge as context in every interaction.
    

## **Overview**

### **What is DataWorks Copilot**

DataWorks Copilot is the AI assistant for DataWorks, the all-in-one intelligent data development and governance platform. Using AI inference and Natural Language Processing (NLP), Copilot helps you quickly perform a wide range of coding tasks in SQL and Python based on natural language prompts. Its capabilities include code generation, code completion, code refactoring, optimization, explanation, debugging, and test case generation. As an intelligent engine for data development, Copilot understands your business requirements through context. With the support of your organization's custom knowledge base, DataWorks Copilot helps you perform ETL and data analysis tasks with greater ease and efficiency, saving you time and effort.

DataWorks Copilot integrates three core capabilities—**the Agent, an AI coding assistant,** and **quick AI actions**—deeply into various DataWorks modules to deliver an all-new intelligent data experience.

### **Core benefits**

-   **Increase efficiency**: Significantly shorten development and analysis cycles with automatic code generation, intelligent completions, and natural language interaction.
    
-   **Lower the barrier to entry**: Allows users unfamiliar with complex SQL or product operations to quickly start and complete data development and data governance tasks using natural language.
    
-   **Ensure quality**: Improve code quality and maintainability by using AI for code debugging, optimization, and test case generation.
    
-   **Preserve knowledge**: Build a custom enterprise knowledge base to integrate company standards, business terminology, and technical guidelines into the AI, to ensure knowledge retention and consistent application.
    

### **Availability and policies**

-   **Eligible users**: Customers using DataWorks Basic Edition or higher. Some features are only available in the new Data Studio.
    
-   **Available regions**: China (Zhangjiakou), China (Beijing), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Japan (Tokyo).
    
-   **Current stage**: Public preview. To get started, an Alibaba Cloud account owner, tenant administrator, or a user with equivalent permissions must click the Copilot icon, read the [DataWorks Copilot Service Agreement](https://terms.alicdn.com/legal-agreement/terms/common_platform_service/20231008141040441/20231008141040441.html), and click **Confirm Participation**. Once confirmed, all users under that Alibaba Cloud account can start using Copilot.
    
-   **Billing**: DataWorks Copilot is free of charge during the public preview. After the public preview ends, it will become a paid service. The specific pricing model will be announced later.
    

## **Quick start**

### **Accessing Copilot**

You can interact with Copilot in the following ways:

-   **Global entry point**: Click the Copilot icon in the upper-right corner of the DataWorks interface to open the Copilot Chat window.
    
-   **In the editor**: In the intelligent code editor for code-based nodes, open Copilot using the context menu (right-click) or a keyboard shortcut.
    
-   **Embedded in modules**: Look for quick action buttons marked with the **Copilot icon** in specific product modules.
    

### **UI overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0173290771/p1053884.png)

**Note**

From the global entry point, Copilot provides predefined scenario-based examples, such as data synchronization, intelligent table discovery, Data Development, and data governance. You can click a card to quickly get a sample prompt for that scenario, to lower the learning curve and improve interaction efficiency.

## **Core features**

### **Agent: Automate complex tasks**

#### **Overview**

The DataWorks Agent service ushers in a new era of automation for data development and data governance. It goes beyond simple Q&A to act as an intelligent agent that can autonomously complete complex tasks.

With the DataWorks Agent, you can use natural language to automate tasks in DataWorks, including data integration, Data Development, Data Map, and data governance. Powered by the reasoning and planning capabilities of a Large Language Model (LLM), the Agent understands your goals, breaks them down into steps, creates an execution plan, and calls the relevant tools in the MCP Server to carry out the task automatically. DataWorks is continuously expanding and updating the toolset in the DataWorks MCP Server to provide a more intelligent and efficient product experience for Data Development and data governance.

#### **Key features**

-   **Deep understanding and autonomous planning**: Identifies complex intentions through context awareness and multi-turn conversations, and autonomously breaks down tasks into executable multi-step plans.
    
-   **Automated Data Development and data governance**: Integrates with core DataWorks product capabilities and processes, utilizes contextual data, and includes a built-in DataWorks toolset.
    

#### **Access**

1.  In the Copilot Chat window, switch from **Ask mode** to **Agent mode**.
    
2.  Based on your task, type `/` and select the appropriate Agent type.
    
3.  Ask a question to give the Agent a command.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8146380771/p1053865.png)
    

#### **Use cases**

##### **Use case 1: Data Studio Agent**

**Description**: Provides a natural language-based ETL development experience, covering the entire process from requirements analysis and code generation to workflow creation and deployment.

##### **Use case 2: Data Integration Agent**

**Description**: Allows you to describe data synchronization requirements in natural language. The Agent automatically parses your intent and generates the corresponding data synchronization task configuration. This includes source and destination data source types, table schema mappings, field filtering conditions, partitioning strategies, and scheduling parameters.

##### **Use case 3: Data Map Agent**

**Description**: Improves the efficiency of data discovery and understanding. AI-driven natural language interaction lets you quickly explore metadata in various scenarios across massive datasets.

**Core capabilities**:

-   **Natural language search**: Supports natural language Q&A, allowing you to quickly find target data based on business intent without needing exact keywords. For example, _"Find the summary tables related to user activity."_
    
-   **Automatic scope adjustment**: Supports specifying a scope in the conversation. The Agent automatically understands the context and locates data within that scope. For example, _"In the adm\_bi project, find tables related to business operations."_
    
-   **In-depth data understanding**: Supports follow-up questions about target data to quickly obtain details such as data lineage, owners, and field definitions. For example, _"What are the direct downstream dependencies of the @dws\_bi\_metric\_di table? Which owners will be affected if it changes?"_
    

##### **Use case 4: Data Governance Agent**

**Description**: The DataWorks Data Governance Agent helps your organization transition from proactive to autonomous data governance. Data governance is no longer about complex data analysis and extensive configuration changes. Now, you can issue natural language commands that are converted into precise governance actions, configured with expert-level capabilities, and executed automatically.

**Core capabilities**:

-   **Configure quality rules**: Use natural language to automatically configure quality monitoring rules for specified key tables. The Data Governance Agent can intelligently analyze the field types, business semantics, and importance of a table to recommend and configure appropriate monitoring rules, such as primary key uniqueness, non-null constraints, and enum value range checks. This efficiently completes work that previously required extensive data exploration and rule configuration.
    
    -   _Example: Automatically generate quality rules for the core user dimension table_ `_dim_user_info_`_._
        
    -   _Example: For tables starting with_ `_ods__`_, automatically configure quality rules related to table row counts._
        
-   **Remediate quality issues**: For quality issues that the data asset governance module automatically discovers, such as "Frequently accessed tables without quality rules" or "Tables produced by high-priority baseline tasks without quality rules," you can directly provide governance requirements in natural language. The Agent will automatically analyze the issue and perform the corresponding remediation actions.
    
    -   _Example: Find frequently accessed tables that have no quality rules, then recommend and configure them._
        
    -   _Example: Help me resolve issues in the data quality dimension._
        

##### **Use case 5: Data O&M Agent**

**Description**: Provides a comprehensive health assessment and issue diagnosis for task instances. It analyzes multiple dimensions such as dependency chains, resource levels, historical run trends, change impacts, log anomalies, and data quality, and automatically generates a structured diagnostic report.

For more information about the Data O&M Agent, see [AI-powered O&M](/help/en/dataworks/user-guide/ai-operation-and-maintenance).

### **AI coding assistant**

#### **Overview**

The DataWorks Copilot AI coding assistant, built on a Large Language Model (LLM), uses natural language to efficiently complete tasks like generating, optimizing, explaining, and testing SQL and Python code. To ensure the best results, you can switch between different models, including the DataWorks default model, Qwen, and DeepSeek, significantly improving the efficiency of ETL development and data analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5728702771/CAEQUxiBgICm2b.44hkiIGUyMGU2YjljOWNkNTRiYmU5MDUyOTRlMmJiZGMwNmRj5857446_20251106163907.726.svg)

#### **Key features**

-   **Switch between multiple models**: Supports various models, including the default model, Qwen, and DeepSeek.
    
-   **End-to-end ETL support**: Supports code generation, Q&A, refactoring, optimization, debugging, commenting, test case generation, and explanation for both SQL and Python.
    
-   **Context awareness**: Understands dialogue history, code, table schemas, data lineage, and custom knowledge bases.
    

#### **Access**

##### **Intelligent code editor**

**Use case 1: Intelligent code completion**

**How to use**: While developing a code-based node, Copilot predicts and recommends subsequent code snippets based on the context (such as code you have already entered and referenced table schemas). Suggestions appear automatically. Press the Tab key to accept them.

**Use case 2: Right-click menu shortcuts**

**How to use**: In the intelligent code editor, select the desired code, right-click, and choose **Copilot** from the context menu.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3146464671/p1024016.png)

##### **Copilot Chat (Ask mode)**

Ask mode is the default mode for Copilot Chat and is suitable for solving specific coding problems in a Q&A format. It supports code generation, code refactoring, code debugging, comment generation, code explanation, code optimization, code testing, code Q&A, intelligent Notebook cell generation, and quick table finding. When using Copilot Chat in Ask mode, you can select code in the editor to use as context for targeted operations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0173290771/p1053876.png)

#### **Use cases**

##### **Use case 1: Generate ETL scripts**

**Description**: You can express your business requirements in natural language, and DataWorks Copilot will automatically convert your instructions into SQL or Python statements.

**Example**: "Based on the dwd\_ec\_trd\_create\_ord\_di table, calculate the sales amount, sales volume, SKU count, buyer count, and seller count for each SPU from September 1, 2024, to September 18, 2024."

##### **Use case 2: Code completion**

**Description**: DataWorks Copilot intelligently completes the SQL you are writing.

**Example**: No command is needed. Suggestions are generated automatically. Accept the suggestion by pressing the Tab key.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015539371/p875359.png)

##### **Use case 3: Refactor existing code**

**Description**: You can modify existing code by describing your requirements in natural language. DataWorks Copilot will refactor the specified code accordingly.

**Example**: "Modify the SQL to transpose its results from columns to rows using unpivot."

##### **Use case 4: Debug code**

**Description**: In DataWorks, you can proactively check for errors in your code before execution. If a code error occurs after running, you can also use one-click debugging to fix it. DataWorks Copilot will explain the cause of the error and provide the corrected code.

**Example**: Select the code, right-click, and choose the quick command.

##### **Use case 5: Explain code**

**Description**: DataWorks Copilot can explain the content of your specified code to improve its readability and help you understand it.

**Example**: "Explain this SQL."

##### **Use case 6: Generate code comments**

**Description**: DataWorks Copilot can generate comments for specified code, improving its completeness and readability.

**Example**: "Add a comment for each field."

##### **Use case 7: Code Q&A**

**Description**: You can ask questions about SQL syntax or MaxCompute functions in natural language. DataWorks Copilot will provide explanations and usage examples to help you understand them.

**Example**: "How do I write a mapjoin in MaxCompute?"

##### **Use case 8: Optimize code performance**

**Description**: In the DataWorks Copilot Chat window, you can initiate SQL optimization for specified code. This simplifies the code logic, such as using JOINs to combine multiple tables, which improves code execution efficiency and reduces the load on the database.

**Example**: Select the code and use the quick command in the chat window.

##### **Use case 9: Generate test cases**

**Description**: In the DataWorks Copilot Chat window, you can generate test cases for specified code. DataWorks Copilot will create a complete test report that covers multiple perspectives, including unit tests, code performance, and boundary condition validation. It also generates test code, which you can use to verify that each part of your task code works as expected.

**Example**: "Generate SQL test cases and explain the testing steps."

### **Quick AI actions**

DataWorks modules such as Data Development, O&M, and Data Quality use the power of LLMs to provide convenient and intelligent product operations. This offers an intelligent product experience for developers and enterprise users, helping them complete operations in DataWorks more efficiently.

#### **Visualize query results**

-   **Description**: In DataWorks Data Development and Data Analysis, you can use the DataWorks Copilot chart assistant to generate visualizations and data insights from your query results with a single click.
    
-   **How to access**: After a node runs or a SQL query completes, switch to the visualization tab in the results area.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p914137.png)
    

#### **Intelligent table creation**

-   **Description**: In the Data Studio catalog, you can use the DataWorks Copilot table creation assistant to create a table just by entering keywords for the table name. You can also trigger it with one click to fill in recommended field names and descriptions.
    
-   **How to access**:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3645539371/p875613.png)
    

#### **Generate publish descriptions**

-   **Description**: In Data Studio, during the publishing process, you can use the DataWorks Copilot publishing assistant to generate a deployment description with a single click, improving publishing efficiency.
    
-   **How to access**:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3991766471/p951939.png)
    

#### **Diagnose task failures**

-   **Description**: The intelligent diagnosis feature in the DataWorks Operation Center is integrated with LLMs such as Qwen and DeepSeek-R1 (671B). When a task fails, you can click Perform Diagnostics. The LLM instantly extracts key information from the logs, provides an error analysis and solution, and recommends quick actions to fix the error, allowing AI to handle your O&M.
    
-   **How to access**: On the Operation Center page, click **Auto Triggered Node O&M** > **Auto Triggered Instances** in the left-side navigation pane. On the Auto Triggered Instances page, click a failed instance, select the failed node, and then click **Perform Diagnostics** in the lower-right corner to run an intelligent diagnosis on the task.
    

#### **Recommend data quality rules**

-   **Description**: You can open Copilot with a single click to quickly generate data quality rules for a specific data table or business scenario. This uses the complete metadata in DataWorks and supports multiple data source types and multi-dimensional quality checks.
    
-   **How to access**: On the Data Quality page, click **Configure Rules** > **Configure By Table** in the left-side navigation pane. On the page that appears, select the target table and click **Create Monitor** on the right to configure quality rules for that table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3991766471/p951940.png)
    

#### **DataService Studio APIs**

-   **Description**: DataService Studio can use the Copilot assistant to quickly create APIs. Based on your business requirements, it generates a SQL script with a single click and automatically parses it into request and response parameters for an API.
    
-   **How to access**: In the DataService Studio module, create a new API and select the code editor mode.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3146464671/p1023950.png)
    

## **Advanced features and best practices**

### **Improve accuracy with context**

To make Copilot's answers more relevant to your company's standards and business scenarios, provide it with precise knowledge.

#### **Custom knowledge (Rules)**

-   **Description**: Rules are a set of guidelines, standards, and background knowledge that you define for Copilot. They guide how Copilot thinks and responds.
    
-   **How to configure**: In the upper-right corner of the Copilot Chat window, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3146464671/p1020500.png) icon to go to the Rules configuration page.
    
-   **Enterprise-level and Personal-level Rules**:
    
    -   **Enterprise-level Rules**: Administrators configure these rules centrally and can apply them to a specific scope. Use them to define company-wide business terminology, coding standards, and more.
        
    -   **Personal-level Rules**: Individual users configure these rules, which apply only to them. Use them to define personal preferences, frequently used code snippets, and more.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0173290771/p1053885.png)
    

#### **Specify context**

-   **Description**: In each conversation, you can specify the **context** related to the current task. This allows Copilot to focus on that information and provide more accurate results.
    
-   **Supported context types**:
    
    -   **Table**: Reference metadata from one or more tables.
        
    -   **Node/Code file**: Reference the code within a specific node.
        
    -   **Data collections**: Reference data collections from Data Map.
        
    -   **Rules**: Temporarily apply one or more Rules to the current conversation.
        
    -   **Local file**: Upload local documents to use as background information.
        
-   **How to reference context**: In the Copilot Chat input box, type `@` or click `+` to open the context selector and add items.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0173290771/p1053894.png)
    

### **Manage conversations**

#### **Conversation history**

Copilot automatically saves your recent conversations.

-   **Scope**: You can view up to **100** conversation records from the last **7 days**.
    
-   **How to access**: In the Copilot Chat window, click "History" in the upper-right corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0173290771/p1053895.png)
    

#### **Best practice: New chat per task**

**Start a new chat for each independent task**.

-   **Reason**: This prevents the context of different tasks from interfering with each other, allowing Copilot to focus on the current task and provide more accurate and relevant responses.
    

## **FAQ**

-   **Q: Why are Copilot's answers inaccurate or not what I expected?**
    
    A: The likely reason is insufficient context. Try providing more precise background information using the methods described in [Specify context](#a9b1cabf2ayke).
    
-   **Q: What is the difference between Ask mode and Agent mode? How do I choose?**
    
    A: **Ask mode** is suitable for simple, single-turn tasks like generating a code snippet or explaining a function. **Agent mode** is designed for complex tasks that require multiple steps and the use of various tools.
    
-   **Q: How can I make Copilot respond in English?**
    
    A:You can guide Copilot to respond in English in the following ways:
    
    -   Add a clear instruction to your prompt, such as `"Please respond in English"`, `"Respond in English"`, or `"Explain in English"`.
        
    -   Switch the DataWorks interface to English to improve the model's consistency and accuracy in English output.
