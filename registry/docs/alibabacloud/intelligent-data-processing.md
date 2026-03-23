During data synchronization, raw data may have inconsistent formats, redundant information, or be unstructured. The built-in data processing feature of DataWorks offline sync tasks lets you clean, process with AI assistance, and vectorize data directly within the data synchronization pipeline. This simplifies the extract, transform, and load (ETL) architecture.

## **Limits**

-   This feature is available only in workspaces where the new version of Data Development is enabled.
    
-   Only Serverless resource groups are supported.
    
-   This feature is currently available only for some channels that sync single non-partitioned tables offline.
    
-   Enabling data processing consumes additional compute units (CUs). Monitor your resource quota.
    

## **Configuration entry point**

1.  On the configuration page of a new or existing offline sync task, scroll down to the Data processing section.
    
2.  By default, this feature is disabled. Click the toggle to enable the data processing module for configuration.
    

![PixPin_2025-12-18_11-09-31](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5142936671/p1036153.png)

## **Features**

After you enable the data processing module, you can add one or more of the following processing rules as needed.

### **1\. String replacement**

String replacement is a basic and common data cleaning feature. You can set multiple replacement rules for different fields in the current task.

**Codeless UI configuration**

In the **Data processing list**, click the **+** **Add Node** button and select **String replacement** to add a new replacement rule. The configuration items are described as follows:

**Configuration item**

**Description**

**Name**

Enter a custom name for the replacement rule that is easy to identify.

**Description**

(Optional) Provide a detailed description of the rule's purpose.

**Field name**

Click the **+** **Add Rule** button to add a field rule. Select a field from the source table's field drop-down list to apply this rule.

**Content to replace**

Enter the original string to find and replace.

**Replace with**

Enter the new string.

`.*` (Regular expression matching)

A toggle to enable regular expressions. This lets you use a regular expression to find the original string to replace.

`Aa` (Case-sensitive)

A toggle to control whether the search for the content to replace is case-sensitive. The search is case-insensitive by default.

You can add multiple rules for fine-grained replacement of different content in different fields. For example, you can create a rule to replace `'male'` with `'1'` in the `gender` field, and another rule to replace `'active'` with `'valid'` in the `status` field.

**Data output preview**

1.  After configuring the rules, click **Data output preview** in the upper-right corner of the Data processing section.
    
2.  In the dialog box that appears, configure the **Input data**. Two methods are supported:
    
    -   **Automatic**: The system fetches data from the output of the ancestor node by default. You can click **Refetch upstream output** to refresh the data.
        
    -   **Manual**: Click **\+ Manually construct data** to enter custom values for each field in a data row, or to test specific boundary conditions such as `NULL` or empty strings.
        
3.  Click the **Preview** button in the **Preview result** area.
    
4.  The system executes all configured processing rules and displays the results below. Compare the results with your expectations to verify that the rules are configured correctly.
    

**Note**

The preview results are for testing and reference only. The final execution results depend on the actual task runtime.

**Code editor configuration**

To configure data processing in the code editor, add a JSON object with `"category": "map"` and `"stepType": "stringreplace"` to the \`steps\` module of the JSON script. For more information about the general configuration process in the code editor, see [Code editor configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor).

```
{
  "category": "map",
  "stepType": "stringreplace",
  "parameter": {
    "condition": [
      {
        "name": "<field_to_process>",
        "replaceString": "<string_to_replace>",
        "replaceByString": "<replacement_string>",
        "useRegex": false,
        "caseSensitive": false
      }
    ]
  },
  "displayName": "<rule_name>",
  "description": "<rule_description>"
}
```

### **2\. AI-assisted processing**

This feature calls a built-in large language model (LLM) to intelligently process the content of specified fields, adding more business value to your data.

Core scenarios:

-   Content summarization: Extract key summaries from large blocks of text, such as product reviews or news articles.
    
-   Information extraction: Extract key information, such as names, addresses, and contact details, from unstructured text.
    
-   Text translation: Translate field content into a specified language.
    
-   Sentiment analysis: Determine the sentiment of text (such as positive, negative, or neutral).
    

Configuration and usage:  
When you **Add Node**, select AI-assisted processing. For details on the configuration methods and typical use cases for this feature, see [AI-assisted processing](/help/en/dataworks/user-guide/offline-synchronization-task-ai-auxiliary-processing).  
  

### **3\. Data vectorization**

Data vectorization is the process of converting text or other data types into high-dimensional mathematical vectors using an embedding model. These vectors capture the semantic information of the data. They are a key step in building AI applications such as retrieval-augmented generation (RAG), semantic search, and recommendation systems.

Core scenarios:

-   Build a knowledge base: Vectorize text data from documents, tickets, and product manuals, and then store it in a vector database to serve as an external knowledge base for an LLM.
    
-   Personalized recommendation: Calculate similarity based on vector representations of users and items to provide precise recommendations.
    

Configuration and usage:  
When you click **Add Node**, select **Data vectorization**. Then, select the fields to process and the embedding model to use. For detailed configuration instructions and examples, see [Vectorization processing](/help/en/dataworks/user-guide/data-integration-supports-embedded-vectorization).  
  

## **References**

-   [Codeless UI configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui)
    
-   [Vectorization processing](/help/en/dataworks/user-guide/data-integration-supports-embedded-vectorization)
    
-   [AI-assisted processing](/help/en/dataworks/user-guide/offline-synchronization-task-ai-auxiliary-processing)
