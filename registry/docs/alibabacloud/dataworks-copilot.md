The DataWorks Copilot Code Programming Assistant uses natural language to help you efficiently generate, optimize, explain, and test SQL and Python code. You can access this feature through the intelligent editor or Copilot Ask. This topic describes the core capabilities and scenarios of the code programming assistant in detail.

## **Function overview**

The DataWorks Copilot Code Programming Assistant is based on a Large Language Model (LLM) and provides intelligent SQL and Python programming support for data developers. It supports two interaction modes: the **intelligent code editor** (for real-time completion and right-click shortcuts) and **Copilot Chat (Ask mode)** (for natural language Q&A interaction). Its core capabilities include code generation, refactoring, debugging, optimization, explanation, comment generation, test case design, syntax Q&A, intelligent Notebook cell creation, and cross-engine quick table search. You can add context, such as tables, nodes, data albums, rules, or local files, to improve the accuracy of its responses. It also supports switching between multiple large language models. The assistant is out-of-the-box and requires no coding experience. It significantly improves the efficiency of data modeling, extract, transform, and load (ETL) development, and debugging. This facilitates accessible, high-quality, and efficient data development.

## **Feature entry points**

### **Intelligent code editor**

**Scenario 1: Intelligent code completion**

**Instructions**: When developing code-based nodes, Copilot intelligently predicts and recommends code snippets based on the context, such as your code and referenced table schemas. Completion suggestions appear automatically. You can press the Tab key to accept a suggestion.

**Scenario 2: Right-click menu shortcuts**

**Instructions**: In the intelligent code editor, you can select the desired code, right-click, and choose **Copilot** from the shortcut menu.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3146464671/p1024016.png)

### **Copilot Chat (Ask mode)**

Ask mode is the default mode for Copilot Chat and is ideal for solving specific coding problems through a question-and-answer format. It helps you complete tasks such as code generation, code refactoring, code debugging, comment generation, code explanation, code optimization, code testing, code Q&A, intelligent Notebook cell generation, and quick table search. While using Copilot Chat in Ask mode, you can select code in the editor to provide context for your requests.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1044403.png)

## **Getting started**

This section uses Copilot Chat (Ask mode) as an example to help you get started quickly.

#### **Step 1: Open Copilot Chat (Ask mode)**

-   Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the navigation pane on the left, choose **Data Development and O&M** > **DataStudio**. On the page that appears, select the desired workspace and click Enter Data Development (Data Studio).
    
-   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the top navigation bar on the Data Studio page to open Copilot Chat in Ask mode.
    

#### **Step 2: Add context (Optional)**

To help Copilot better understand your requirements, you can add context. Enter `@` in the dialog box or click the `@` icon in the lower-right corner of the dialog box to use this feature. This lets you select the type of context to add.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1044323.png)

The supported types are:

-   **Table**: Reference the metadata of one or more tables.
    
-   **Node/Code file**: Reference the code in a specific node.
    
-   **Data album**: Reference a data album from Data Map.
    
-   **Rules**: Temporarily apply one or more rules to the current conversation.
    
-   **Local file**: Upload a local document as background information.
    

#### **Step 3: Switch the large language model (Optional)**

By default, Copilot uses the **default model**. To change this, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1041310.png) icon at the bottom of the dialog box and select a different large language model from the menu. The supported models are shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1044324.png)

#### **Step 4: Submit a question and engage in a multi-turn conversation**

Enter your requirements in the dialog box. You can use a multi-turn conversation to refine your request by asking follow-up questions or providing additional information. This helps Copilot fully understand your intent and produce the desired result.

## **Detailed features**

Copilot Chat in Ask mode can generate SQL and Python code from natural language. It also provides features such as code continuation, refactoring, optimization, explanation, debugging, and test case generation. The core features include the following:

**Capability Type**

**Description**

**Example (What you can say to Copilot)**

`Code generation/SQL generation`

Generates code based on your instructions.

"Help me write an SQL query to find the top three products with the highest sales in each city from the `sales` table."

`Code refactoring/SQL refactoring`

Refactors the specified code based on your requirements.

"Rewrite this SQL query that uses `JOIN` to use a window function instead."

`Code debugging/SQL debugging`

Finds and fixes errors in the specified code.

"This SQL query fails with an `invalid identifier` error. Help me find the mistake."

`Comment generation`

Generates comments for the specified code.

"Add comments to this complex SQL logic to explain the purpose of each common table expression (CTE)."

`Code explanation`

Explains the specified code.

"Explain what `PARTITION BY` and `ROW_NUMBER()` mean in this code."

`Code optimization`

Optimizes the specified code.

"This query is very slow. Help me optimize it and check for any performance bottlenecks."

`Code testing`

Provides a test plan for the specified code.

"Design some test cases for this SQL query that calculates user retention rate. What edge cases should be considered?"

`Code Q&A`

Answers questions about code syntax, functions, and more.

"What is the difference between the `explode` function and `lateral view` in MaxCompute?"

`Intelligent Notebook cell generation`

Intelligently generates a code cell in a Notebook.

"Create a cell that uses pandas to read the `/data/users.csv` file and display the first 5 rows."

`Quick table search`

Searches for a table by keyword.

"Find all tables related to 'user'."

### **Code generation/SQL generation**

**Description**: Generates code based on your instructions in natural language.

**Instructions**: Use one of the following methods:

-   In the code editor, you can right-click a blank area and choose **Copilot** > **Generate SQL** to open the Copilot interface. Then, enter your request in natural language to have the large language model generate the code.
    
-   In the code editor, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the top navigation bar on the DataStudio page to open Copilot Chat in Ask mode. In the chat input box, enter `/`, select **Code Generation**, and then enter your request in natural language. The Large Language Model (LLM) will then generate the required code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015539371/p875540.png)
    

### **Code refactoring/SQL refactoring**

**Description**: Refactors the specified code based on your instructions in natural language.

**Instructions**: Use one of the following methods:

-   In the code editor, you can select the code you want to refactor, right-click, and choose **Copilot** > **Refactor SQL**. This opens the Copilot interface where you can enter your requirements.
    
-   In the code editor, select the code you want to refactor and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the DataStudio top navigation bar to open Copilot Chat in Ask mode. In the chat input box, enter `/`, select **Rewrite Code**, enter your requirements, and click **Send**. Copilot will then return the result.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1042164.png)
    

### **Code debugging/SQL debugging**

**Description**: DataWorks Copilot can find and fix errors in a code snippet.

**Instructions**: Use one of the following methods:

-   In the code editor, select the target code, right-click the selection, and then select **Copilot** > **SQL Correction** to open the Copilot interface.
    
-   In the code editor, select the code you want to debug and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the Data Studio page's top navigation bar to open Copilot Chat in Ask mode. In the dialog box, enter `/`, select **Code Error correction**, and click **Send**. Copilot will then return the result.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1042217.png)
    

### **Comment generation**

**Description**: DataWorks Copilot can generate comments for SQL code to improve its readability.

**Instructions**: Use one of the following methods:

-   In the code editor, you can select the code, right-click, and choose **Copilot** > **Generate comments** to open the Copilot interface.
    
-   In the code editor, select the code and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the Data Studio top navigation bar to open Copilot Chat in Ask mode. In the chat input box, enter `/`, select **Generate Comments**, and click **Send**. Copilot will then return the result.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1042176.png)
    

### **Code explanation**

**Description**: DataWorks Copilot can explain SQL code to improve its readability and help you understand its logic.

**Instructions**: In the code editor, select the code you want explained and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the Data Studio top navigation bar to open Copilot Chat in Ask mode. In the chat input box, enter `/`, select **Code Explanation**, and click **Send**. Copilot will then return the result.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0489238671/p1042137.png)

### **Code optimization**

**Description**: DataWorks Copilot can optimize SQL code to simplify its logic, improve execution efficiency, and reduce the database load.

**Instructions**: In the code editor, select the code you want to optimize and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the Data Studio navigation bar to open Copilot Chat in Ask mode. In the chat input box, enter `/`, select **Code Optimization**, and click **Send**. Copilot will then return the results.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916739.png)

### **Code testing**

**Description**: DataWorks Copilot can provide a test plan for your SQL code. This helps you generate test cases to verify that each part of the task works as expected.

**Instructions**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the DataStudio page's top navigation bar to open Copilot Chat in Ask mode. In the chat input box, enter `/` and select **Code Test**. Then, select the code you want to test in the editor, click **Send**, and wait for Copilot to return the results.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916749.png)

### **Code Q&A**

**Description**: DataWorks Copilot can answer questions about SQL syntax or MaxCompute functions by providing explanations and usage examples.

**Instructions**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the Data Studio page's top navigation bar to open Copilot in Ask mode. In the dialog box, enter your question, click Send, and wait for Copilot to return the result.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015539371/p875608.png)

### **Intelligent Notebook cell generation**

**Description**: You can enter a keyword to generate a Notebook cell.

**Instructions:** Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the DataStudio page's top navigation bar to open Copilot in Ask mode. In the dialog box, enter `/` and select **Generate Notebook Cell**. Then, enter keywords in the input field and click **Send**. Copilot will generate the corresponding Notebook node.

### **Quick table search**

**Description**: You can enter a keyword to search for tables across all compute engines and data sources.

**Instructions**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) icon in the upper-right corner of the DataStudio page's top navigation bar to open Copilot in Ask mode. In the chat input box, enter `/` and select **Quick Table Search**. Then, enter your keywords in the input field and click **Send**. Copilot will return a list of tables from all attached compute engines and data sources that match your keywords.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3991766471/p951932.png)
