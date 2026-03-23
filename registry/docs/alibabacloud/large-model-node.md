Large language model (LLM) nodes let you process unstructured text data directly within DataWorks pipelines. Instead of writing custom algorithms, use natural language prompts to perform AI tasks such as:

-   Text summarization
    
-   Sentiment analysis
    
-   Content classification
    
-   Information extraction
    

You can add these AI capabilities to existing extract, transform, and load (ETL) pipelines for data like user reviews, product descriptions, and customer service logs.

## Prerequisites

Deploy an LLM service in DataWorks before you create an LLM node. For instructions, see [Deploy a model](/help/en/dataworks/user-guide/deploy-model#ff6816406aefn).

**Important**

Your choice of [model](/help/en/dataworks/user-guide/llm-service-management/#5f5a82c8b45c0) and resource specifications directly affects the performance and response speed of the model service. The model service also incurs [resource group fees](/help/en/dataworks/user-guide/deploy-model#5683801226n9m).

## Node settings

**Setting**

**Description**

**Model Service**

The LLM service you deployed in the prerequisites step.

**Model Name**

The model to use from the selected model service.

**System Prompt**

Defines the model's role, capabilities, and behavioral guidelines. Supports the `${param}` syntax to reference parameters.

**User Prompt**

The question or instruction sent to the model. DataWorks provides four built-in templates. Supports the `${param}` syntax to reference parameters.

### Parameter syntax

Both **System Prompt** and **User Prompt** support the `${param}` format to reference node or pipeline parameters. For example:

```
Please select items that match ${catalog}.
```

In this prompt, `catalog` is a node or pipeline parameter whose value is resolved at runtime.

## Example: Pass data through an LLM node

This example builds a three-node pipeline that passes a value from an assignment node through an LLM node and outputs the result with a MaxCompute SQL node.

![Pipeline structure](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1249621671/p1016062.png)

### Step 1: Create a model service

1.  Open the [DataWorks LLM service console](https://dataworks.console.aliyun.com/llmservice).
    
2.  Create a model service based on Qwen3-1.7B.
    
3.  For **Resource Group**, select the resource group attached to your current workspace.
    

### Step 2: Create the pipeline

Go to **Data Studio** and create a pipeline with three nodes: an assignment node, an LLM node, and a MaxCompute SQL node.

### Step 3: Configure the assignment node

1.  Set the language mode to Shell in the toolbar in the lower-right corner. For more information, see [Assignment node](/help/en/dataworks/user-guide/assignment-node#96b297c543q36).
    
2.  Enter the following code:
    
    ```
    echo 'DataWorks';
    ```
    

### Step 4: Configure the LLM node

1.  Select the **Model Service** and **Model Name** you created in Step 1.
    
2.  Set **User Prompt** to:
    
    ```
    Write an introduction about ${title} with a word limit of ${length}.
    ```
    
3.  In the configuration pane on the right, go to **Run Configuration** > **Resource Group**. Select the same resource group you chose when you created the model service.
    
4.  In the configuration pane on the right, go to **Scheduling** > **Scheduling Parameters**. Add two parameters:
    
    **Parameter**
    
    **Value**
    
    `title`
    
    Output of the assignment node
    
    `length`
    
    `300` (static value)
    
    > To attach the output from an upstream node, click the ![attach icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1249621671/p1018099.png) icon to the right of the value input box.
    
    ![LLM node scheduling parameters](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1249621671/p1016091.png)
    

### Step 5: Configure the MaxCompute SQL node

**Important**

The MaxCompute SQL node requires a MaxCompute computing resource. If you don't have one, use a Shell node instead to display the output.

1.  Enter the following code:
    
    ```
    select '${content}';
    ```
    
2.  In the configuration pane on the right, go to **Run Configuration** > **Resource Group**. Select the same resource group you chose when you created the model service.
    
3.  In the configuration pane on the right, go to **Scheduling** > **Scheduling Parameters**. Add the `content` parameter and set its value to the output of the LLM node (llmtest).
    
    > To attach the output from an upstream node, click the ![attach icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1249621671/p1018099.png) icon to the right of the value input box.
    
    ![MaxCompute SQL node configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1249621671/p1016098.png)
    

### Step 6: Run the pipeline

1.  Return to the pipeline view and click **Run** at the top.
    
2.  Enter the run parameters in the pop-up window.
    

### Expected output

After the pipeline runs successfully, the MaxCompute SQL node returns a result similar to:

```
DataWorks is an enterprise data development and management platform from Alibaba Cloud. It supports data collection, cleansing, integration, scheduling, and visualization for large-scale data processing.
It provides a visual interface, connects to various data sources, and features powerful task scheduling and data quality monitoring.
DataWorks handles both real-time and batch processing, helping enterprises manage data as assets and improve efficiency.
Its unified process helps build reliable data pipelines for data governance and intelligent analysis.
```
