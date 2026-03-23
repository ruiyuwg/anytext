This feature natively integrates the processing capabilities of large AI models into the DataWorks Data Integration pipeline. It upgrades traditional data synchronization from simple data transport to intelligent processing. You can call AI models in real time to analyze, process, and enhance data as it is transferred from the source to the destination. This process unlocks the hidden value of unstructured data.

## Function introduction

-   **Applicable customers**: This feature is designed for enterprise users who need to perform advanced analysis and processing on data during data synchronization. It is especially useful for companies that want to use AI to improve data quality and extract value from data.
    
-   **Seamless integration into the sync pipeline**: AI processing is a built-in step in Data Integration that connects seamlessly with the processes of reading data from the source and writing data to the destination.
    
-   **Support for various NLP tasks**: You can perform multiple natural language processing (NLP) tasks on text data during synchronization, such as sentiment analysis, summary generation, keyword extraction, and text translation.
    

## Scenarios

**Industry**

**Typical application**

Customer service / E-commerce

Analyze the **sentiment** of user comments and customer service tickets in real time. Automatically extract **core issues** and **key feedback points**.

Compliance / Legal / Scientific research

During synchronization, automatically generate **summaries** and extract **key information** from policy documents, legal contracts, and research papers.

Manufacturing / Supply chain / Healthcare

Intelligently analyze device logs, supply chain feedback, or doctor-patient communication records to enable **threat alerts** and **service quality optimization**.

Cross-language collaboration

**Automatically translate** social media comments, news articles, or business documents into a single language during synchronization to allow for centralized analysis.

## **Preparations**

-   Create a workspace that uses [Data Studio (new version)](/help/en/dataworks/user-guide/overview-new-data-studio/).
    
-   Prepare the large model service required for AI-assisted processing. The preparation process varies based on the selected large model service provider:
    
    -   Alibaba Cloud DataWorks model service: Deploy a model and start the model service in [Model Service Management](/help/en/dataworks/user-guide/llm-service-management/).
        
    -   Alibaba Cloud Model Studio: Activate [Alibaba Cloud Model Studio](/help/en/model-studio/what-is-model-studio) and [obtain an API key](/help/en/model-studio/get-api-key).
        
    -   Alibaba Cloud PAI-Marketplace: Activate [Platform for AI (PAI)](/help/en/pai/product-overview/what-is-machine-learning-platform-for-ai/) and obtain a token for the model service.
        
-   You can manually configure data source information or use existing data sources for offline sync tasks.
    
-   Ensure that the workspace is attached to a [resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and that the resource group can connect to the data source.
    

## **Billing**

In addition to DataWorks subscription fees and resource group fees, this feature also incurs [model inference (call) fees](/help/en/model-studio/billing-for-model-studio#5b96ab3ed2who).

## **Example**

This example uses Hologres to demonstrate how to use the AI-assisted processing feature during an offline sync task from one Hologres table to another. The goal is to translate the data in the `feedback_info` column of the source table into English and synchronize it with the destination table.

Prepare data for the source table

```
CREATE TABLE customer_feedback (
    id BIGINT PRIMARY KEY,
    device STRING,
    feedback_info STRING,
    pt INT
)
PARTITIONED BY (pt)
DISTRIBUTED BY HASH(id)
WITH (table_type='Duplication');

INSERT INTO customer_feedback (id, device, feedback_info, pt)
VALUES
(8, 'Huawei MateBook D14', 'Affordable, suitable for students, performance is adequate', 2020),
(1, 'iphone', 'This product is okay, I have used it for 1 year', 2013),
(10, 'Bose QuietComfort 35 II', 'A classic among noise-canceling headphones, maximum comfort', 2021);
```

## **1\. Create an offline sync task**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965353.png) to go to the Data Studio page. To the right of **Workspace Directories**, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965354.png) and choose **Create Node** > **Data Integration** > **Batch Synchronization**. The New Node dialog box is displayed.
    
3.  Set the **Path**, **Data Source and Destination**, and **Name** for the node, then click **OK** to create an offline sync node.
    
    This topic uses a Hologres-to-Hologres sync task as an example to describe the AI-assisted processing feature.
    

## **2\. Configure the sync task**

After you create the offline sync node, the task configuration page is displayed. On this page, configure the following settings:

### **1\. Data source**

Configure the source and destination for the data synchronization task.

-   **Type**: The source and destination data source types selected in the [Create an offline sync task](#afff3df480tlb) step. This setting cannot be modified. To change the data source types, you must create a new offline sync task.
    
-   **Data Source**：Select an existing data source from the drop-down list, or click **Add Data Source** to create a new one.
    

### **2\. Runtime resource**

1.  Select the **Resource Group** for the sync task. If you use a serverless resource group, you can also specify the number of CUs to allocate for the task in the **Resource Usage(CU)** field.
    
2.  After you select a **Resource Group**, Data Integration automatically checks the connectivity between the resource group and the source and destination data sources. You can also click **Connectivity Check** to perform the check manually.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965378.png)

### **3\. Source**

Configure the information for the source table, such as the **Schema**, **Table**, **Partition**, and **Data Filtering** conditions. You can click **Data Preview** to preview the data that will be synchronized.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965441.png)

### **4\. Data processing**

1.  In the data processing section, you can **Enable** the data processing feature. This feature requires additional computing resources and increases the resource overhead of the task.
    
2.  Click **Add Node**, select **AI Process**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965498.png)
    
3.  Configure the settings for AI-assisted processing.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9067950671/p965496.png)
    
    The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Model Provider**
    
    Supported providers are [DataWorks Model Service](/help/en/dataworks/user-guide/llm-service-management/), [Aliyun Bailian](/help/en/model-studio/what-is-model-studio), and [PAI Model Gallery](/help/en/pai/product-overview/what-is-machine-learning-platform-for-ai/).
    
    **Model Endpoint**
    
    Select **PAI Model Gallery** and enter the model invocation Endpoint. To obtain the Endpoint, see [Test service invocation](/help/en/pai/user-guide/dedicated-service-gateway/#4d854744188i7).
    
    **Model Name**
    
    The model responsible for intelligent data processing. Select one as needed.
    
    **API Key**
    
    The API key to access the model. Obtain it from the model provider.
    
    -   Alibaba Cloud Model Studio: [Obtain a Model Studio API key](/help/en/model-studio/get-api-key).
        
    -   Alibaba Cloud PAI-Marketplace: Go to the deployed EAS task, [start online debugging](/help/en/pai/user-guide/call-a-service-over-a-public-endpoint), and obtain the token. Enter the token as the API key.
        
    
    **Processing Description**
    
    Use natural language to describe the processing for the source field. Write the field name in the `#{column_name}` format. For example, in this case, enter `Translate '#{feedback_info}' into English`.
    
    **Output Field**
    
    Enter the name of the field where the result will be stored. If the field does not exist, a new field is automatically created.
    
    **Note**
    
    In this example, the `feedback_info` field from the source table is translated into English and stored in the `feedback_processed` field.
    
4.  You can click **Data Output Preview** in the upper-right corner of the AI-assisted processing section to preview the final output data.
    
5.  (Optional) You can configure multiple data processing flows that execute sequentially.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965540.png)
    

### **5\. Destination**

1.  Configure the information for the destination table of the data synchronization, such as the **Schema**, **Table**, and **Partition**.
    
    -   You can click **Generate Target Table Schema** to quickly generate the schema for the destination table.
        
    -   If a destination table already exists, you can select it.
        
2.  Configure the **Write Mode** and the **Write Conflict Strategy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965549.png)
    
3.  Configure whether to delete existing data in the Hologres table before synchronization.
    
4.  (Optional) Configure the **Maximum Connections**.
    
    The **Maximum Connections** setting takes effect only when the write mode is `SQL(INSERT INTO)`. When you start the task, ensure that the Hologres instance has a sufficient number of idle connections. A single task can use up to nine connections.
    

### **6\. Destination field mapping**

After you configure the source, data processing, and destination, the field mapping between the source and destination tables is displayed. By default, fields are mapped by name and position. You can modify the mapping as needed.

**Note**

In this example, in addition to mapping the existing source table fields (`id`, `device`, `feedback_info`, and `pt`) by name, you must also manually map the `feedback_processed` field, which stores the translated result from the source table, to the `translate_feedback` field in the destination table.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2576949471/p965560.png)

## **3\. Test the task**

1.  In the right-side panel of the offline sync task configuration page, click **Run Configuration**. Configure the **Resource Group** and any related **Script Parameters** to use for testing this node.
    
2.  In the toolbar at the top of the node configuration page, click **Save** and then click **Run**. After the task finishes running, verify that the result is successful. You can then check the destination database to confirm that the table data is correct.
    

## **4\. Configure scheduling**

To run an offline sync node periodically, you must set the **Scheduling Policies** in the **Scheduling** section on the right side of the page and configure the relevant [node scheduling properties](/help/en/dataworks/user-guide/node-scheduling/).

## **5\. Publish the node**

Click the **Publish** icon in the node toolbar to start the [publishing flow](/help/en/dataworks/user-guide/task-release/). This flow publishes the task to the production environment. Periodic scheduling takes effect only after the task is published.

## **What to do next: Task O&M**

After the node is published, you can click **Backfill Data** or Perform O&M in the publishing flow.

-   **Backfill Data**: You can use this option to backfill data for the current node only. For more complex data backfill features, go to Operation Center. For more information, see [Run a data backfill task and view the data backfill instance (New)](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node).
    
-   **Perform** **O&M**: After a task is published, it is automatically managed by Operation Center. In Operation Center, you can view the running status of the task or manually trigger its execution. For more information, see [Operation Center](/help/en/dataworks/user-guide/operation-center-1/).
