Large language models (LLMs) lack private knowledge, and their general knowledge can be outdated. The industry commonly uses retrieval-augmented generation (RAG) technology to retrieve relevant information from external sources based on user input. This retrieved content is then combined with the user's query and provided to the LLM to generate more accurate answers. The knowledge base feature, which is the RAG capability of Model Studio, effectively supplements private knowledge and provides the latest information.

**Important**

-   **Console restrictions:** Only **International Edition users** who created applications before **April 21, 2025** can access the **Application Development** tab, as shown in the following figure.
    
    > This tab contains the following features: Applications ([agent application](/help/en/model-studio/single-agent-application) and [workflow application](/help/en/model-studio/workflow-application/)), Components ([prompt engineering](/help/en/model-studio/prompt-template) and [plug-in](/help/en/model-studio/plug-in-overview#undefined)), and Data ([knowledge base](/help/en/model-studio/rag-knowledge-base) and [application data](/help/en/model-studio/data-import-instructions)). **These are all preview features. Use them with caution in production environments.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0799390671/p1017153.png)
    
-   **API call limits:** Only **International Edition users** who created applications before **April 21, 2025**, can call the [application data, knowledge base, and prompt engineering APIs](/help/en/model-studio/api-bailian-2023-12-29-dir/).
    

**Application without a dedicated knowledge base**

Without a dedicated knowledge base, the LLM cannot accurately answer questions about specific domains.

![无](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9944540371/p829329.png)

**Application with a dedicated knowledge base**

With a dedicated knowledge base, the LLM can accurately answer questions about specific domains.

![有](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9944540371/p829330.png)

## Model availability

You can use a knowledge base with the following models. [Set up a Qwen knowledge base](#39147e299cujr)

-   Qwen-Max/Plus/Turbo
    
-   QwenVL-Max/Plus
    
-   Qwen (Qwen2.5, etc.)
    

> The list above may be updated at any time. Refer to the models that are available on the [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) page when you create an application for the most current list.

## Getting started

This section describes how to build a LLM Q&A application that can answer questions about a specific domain (in this case, a fictional "Bailian phone") without writing any code.

### **1\. Build a knowledge base**

1.  Go to the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page and click **Create Knowledge Base**. Enter a **Name**, leave the other settings at their default values, and click **Next Step**.
    
2.  Select the **Default Category** and upload the [Bailian Phones Specifications.docx](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250808/iuhfqg/Bailian+Phones+Specifications.docx) file. Click **Next Step**, and then click **Import**.
    

### 2\. Integrate with a business application

After you create a knowledge base, you can associate it with a specific application (which must be in the same [workspace](/help/en/model-studio/use-workspace) as the knowledge base) or an external application to process retrieval requests.

## Integrate with an agent application

1.  Go to the [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) page, find the target agent application, and click **Configure** on its card. Then, select a model for the application.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4477050671/p1012905.png)
    
2.  Click the **+** button to the right of **Document** to add the knowledge base that you created in the previous step. You can keep the default values for the similarity threshold and weight.
    
    **(Optional) Similarity threshold: Filters retrieval results**
    
    The knowledge base uses semantic search to find text in your private data or files that is relevant to the query intent, even if the keywords are completely different.
    
    For example, a user queries: `Which Bailian phone is good for photography?`
    
    However, the actual answer (Qwen Vivid 7...) does not contain any keywords from the user's query.
    
    > The keyword similarity in the table below is calculated based on the [Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index), and the semantic similarity is based on the [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity) calculated by the `text-embedding-v4`
    
    **Retrieved text**
    
    **Keyword similarity**
    
    **Semantic similarity**
    
    Qwen Vivid 7: A new experience in smart photography
    
    0
    
    **0.43**
    
    Bailian Ace Ultra: The choice for gamers
    
    0.17
    
    0.32
    
    Bailian Flex Fold+: A new era of foldable screens
    
    0.25
    
    0.24
    
    **Similarity threshold:** Only text with a semantic similarity score higher than this value is retrieved. If this value is set too high, the knowledge base discards all relevant text.
    
    **(Optional) Weight: Influences the retrieval order for multiple knowledge bases**
    
    When an agent application is associated with multiple knowledge bases, you can assign a weight to each knowledge base based on the importance of the information source. During multi-channel recall, if multiple knowledge bases contain relevant text segments, the system **prioritizes text segments from the knowledge base with a higher weight**.
    
    -   **Key limitation:** Weights **only take effect between knowledge bases of the same type**. For example, the weight of a Document Search knowledge base does not affect the retrieval order of a Data Query knowledge base, and vice versa.
        
    -   **How it works:** The system first calculates the relevance of the user's question to the content in each knowledge base and filters for the most relevant text segments. Then, it multiplies the similarity score of each text segment by the weight of its corresponding knowledge base. After reranking the results based on these weighted scores, the system provides them to the LLM to reference when generating an answer. Segments with higher weighted scores are more likely to be used.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2338693671/CAEQTxiBgMDGvuzR1RkiIDUwNjJmMjE2YmVkMzQwNWM4ZGNiNzEzOGE3MTJiNzQ55048849_20250411113302.016.svg)
    
3.  Ask a question in the input box on the right. The LLM will use the knowledge base that you created to generate an answer.
    
    > For example: "Please help me choose the best Bailian phone for photography that costs less than 3,000 yuan."
    

## Integrate with a workflow application

1.  Go to the [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) page, find the target workflow application, and click **Configure** on its card. Then, drag a **Knowledge Base** node onto the canvas and connect it after the **Start** node.
    
2.  Configure the Knowledge Base node:
    
    1.  **Input:** In the **Value** drop-down list to the right of the variable name `content`, select **Built-in Variable** > **query**.
        
    2.  **Select Knowledge Base**: Select the knowledge base that you created in the previous step.
        
    3.  **Set** **topK** (Optional): This determines the number of knowledge segments returned to descendant nodes (usually LLM nodes).
        
        > Increasing this value usually improves the accuracy of the LLM's answers, but it also increases the number of input tokens consumed by the LLM.
        
3.  Drag a **LLM** node onto the canvas and connect it after the Knowledge Base node and before the **End** node.
    
4.  Configure the LLM node:
    
    1.  In the **Model Configuration** list, select a model for the node.
        
    2.  In the **Prompt** field, enter a prompt that instructs the LLM to use the knowledge base. You must enter / to insert the `result` variable, which represents the results returned by the knowledge base retrieval.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3238693671/p1008820.png)
        
5.  Configure the End node: Enter `/`, then select **LLM 1** > **result** to output the result returned by the LLM.
    
6.  Click **Test** in the upper-right corner of the page. Then, ask a question in the input box on the right. The LLM will use the knowledge base that you created to generate an answer.
    
    > For example: "Please help me choose the best Bailian phone for photography that costs less than 3,000 yuan."
    

## Integrate with an external application

In addition to building applications in Model Studio, you can also use the retrieval capability of a knowledge base as an independent RAG service. Using the [GenAI Service Platform SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29), you can quickly integrate this service into external AI applications.

For detailed integration steps, see the [Knowledge base API guide](/help/en/model-studio/rag-knowledge-base-api-guide#97e90525ae054).

### **3\. Optimize the knowledge base (Optional)**

If knowledge retrieval is incomplete or the content is inaccurate during the Q&A process, see [Optimize knowledge base performance](/help/en/model-studio/rag-optimization).

## User guide

On the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, you can view and manage all knowledge bases in the current [workspace](/help/en/model-studio/use-workspace).

> **Knowledge Base ID:** The value of the `ID` field on each knowledge base card. It is used for API calls and other scenarios.

## Create a knowledge base

1.  On the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, click **Create Knowledge Base**.
    
2.  Select the appropriate **Knowledge Base Type** based on your application scenario. A single knowledge base can only support one type. You cannot change the knowledge base type after creation.
    
    -   **Document Search (for retrieval scenarios)**
        
        -   **Scenarios:**
            
            -   This type is suitable for retrieving unstructured data (data that is not organized in a predefined table schema, including text, tables, and images), such as internal company documents and product manuals.
                
            -   If [a file contains images and you need the application to return them in the answer](#225902728eqjb), select **Document Search**.
                
        -   **Data Source Integration:** You can upload local files or [import from Alibaba Cloud Object Storage Service (OSS)](/help/en/model-studio/data-import-instructions#a2b61704136bj).
            
            **Creation instructions (Document Search)**
            
            1.  **Select data:** Specify the data source (containing files or content) for the knowledge base. The content of the data source is imported into the knowledge base for subsequent retrieval. Two methods are supported: **Local Upload** and **Cloud Import** (selecting an existing category or file).
                
                -   **Local Upload:** Upload files directly from your computer. Expand the collapsible panel below to learn how to select a parsing method.
                    
                    **Data parsing settings**
                    
                    Configure the parsing policy based on your requirements. If you are unsure which to choose, you can keep the default settings.
                    
                    -   **Digital Parsing**: Does not support parsing illustrations or charts in files.
                        
                    -   **Intelligent Parsing:** For illustrations in a file, the parser identifies and extracts the text from the images and generates text summaries. These summaries, along with other non-image content in the file, are chunked, converted into embeddings, and used for knowledge base retrieval.
                        
                    -   **LLM Parsing:** If you use an agent application with the [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo) model, you can ask questions about the content of illustrations and charts in files. To enable the recognition and understanding of illustrations and charts in files, select **LLM Parsing**.
                        
                    -   **Qwen VL parsing:** This method is specifically for image files. You can specify the Qwen-VL model and provide a prompt to guide the recognition and extraction of the image layout and elements.
                        
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8060835471/p946164.png)
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p935554.png)
                    
                -   **Cloud Import:** Import existing files from application data or Object Storage Service (OSS). For detailed instructions, see [Data import](/help/en/model-studio/data-import-instructions).
                    
            2.  **Index configuration:** Defines how imported data is processed and stored, which directly affects retrieval performance.
                
                > Among the following configuration items, only "Vector storage" may incur fees if you choose ADB-PG. All other configurations are free.
                
                ## Metadata extraction
                
                Metadata is a set of additional properties related to unstructured data. These properties are integrated into text segments as key-value pairs.
                
                -   **Purpose:** Metadata provides important contextual information for text segments and can significantly improve the accuracy of knowledge base retrieval. For example, imagine a knowledge base that contains thousands of product introduction files, where the file names are the product names. When a user searches for "functional overview of Product A", if the body of every file contains "functional overview" but does not mention "Product A", the knowledge base might retrieve many irrelevant text segments. However, if the product name is added as metadata to all text segments, the knowledge base can accurately filter for text segments related to "Product A" that also contain "functional overview". This improves retrieval accuracy and reduces the number of input tokens consumed by the model.
                    
                -   **Usage:** When you [call an application using an API](/help/en/model-studio/application-calling-guide#4100253b7chc3), you can specify **metadata** in the `metadata_filter` request parameter. When retrieving from the knowledge base, the application first filters relevant files based on the **metadata**.
                    
                -   **Note:** After a knowledge base is created, you **cannot configure metadata extraction**.
                    
                
                **How to configure metadata**
                
                Enable **Metadata Extraction**, and then click **Settings** to add unified or personalized metadata to **all files in the knowledge base**. During chunking, the metadata of each file is integrated into its respective text segments. The figure below shows the meta information template used in the example above:
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713762371/p852409.png)
                
                **Instructions for creating a meta information template**
                
                **Value extraction methods:**
                
                -   **Constant:** Adds a fixed property to all files in the knowledge base.
                    
                    > As shown in the example above, if all files in the knowledge base have the same author, you can uniformly set a constant field named `author`.
                    
                -   **Variable:** Adds a variable property to each file in the knowledge base. Currently supported properties include `file_name` and `cat_name`. When you select `file_name`, Model Studio adds the file's name to its metadata, as shown in the example above. When you select `cat_name`, Model Studio adds the name of the category where the file is located to the file's metadata.
                    
                -   **LLM:** The system matches the text content of each file in the knowledge base according to the specified **Entity Description** rule. The system automatically identifies and extracts relevant information from the file and adds this information as properties to the file's metadata.
                    
                    > As shown in the meta information template in the example above, to extract all years mentioned in each file as a property of the file, you can set a LLM field named `date` with the following entity description configuration:
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713762371/p854652.png)
                    
                -   **Regular:** The system matches the text content of each file in the knowledge base according to the specified regular expression. Content that matches the expression is extracted and added as a property to the file's metadata.
                    
                    > As shown in the meta information template in the example above, to extract all references mentioned in each file, assuming the references follow the pattern of starting with " and ending with ", you can set a regular expression field named `reference` with the following regular expression configuration:
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713762371/p854654.png)
                    
                -   **Keyword search**: The system searches for preset keywords in each file and adds the found keywords as properties to that file's metadata.
                    
                    > For example, in the meta information template from the example above, our preset keywords are:
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713762371/p854655.png)
                    
                    > However, because only the keywords "financing", "industry", "green", and "capital" appeared in this file, the system only extracted these four keywords as the value for the file's `keywords` property.
                    
                
                **Used for Retrieval**: When enabled, the metadata fields and values are included in the knowledge base retrieval along with the text segment content. When disabled, only the text segment content is used for retrieval.
                
                **Used for Model Reply**: When enabled, the metadata fields and values are included in the LLM's response generation process along with the text segment content. When disabled, only the text segment content is used for the LLM's response generation process.
                
                ## Excel header assembly
                
                When enabled, the knowledge base treats the first row of all XLSX and XLS format files as the table header and automatically appends it to each text segment (data row). This prevents the LLM from mistakenly treating the header as a regular data row.
                
                > If the knowledge base contains files in other formats, such as PDF, you do not need to enable this setting.
                
                ## Chunking method
                
                Select **Intelligent Splitting** (Recommended).
                
                > **Purpose:** The knowledge base splits files into text segments (chunks) and converts these chunks into vectors using a vector model. The text segments and their corresponding vectors are then stored as key-value pairs in a vector database. After the knowledge base is created, you can view or edit the specific content (text and images) of each text segment.
                
                > **Note:** After a knowledge base is created, you **cannot change the document chunking method**. An unsuitable chunking policy can reduce retrieval and recall performance.
                
                ## Multi-round conversation rewriting
                
                When this feature is enabled, the system calls a dedicated lightweight model to rewrite the user's current question into an independent, contextually complete new query by incorporating the conversation history. This new query is then used for knowledge base retrieval.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2338693671/CAEQTxiBgMCZ25bO1RkiIGExNmE5YjM3M2VhODQwMzZhZmJhMzhmMzUxMDkzNWQ14464811_20240625101944.455.svg)
                
                ## Embedding model
                
                Embedding models convert original input prompts and knowledge text into numerical embeddings to calculate their semantic similarity.The default model (which cannot be changed) supports multiple languages in addition to Chinese and English and normalizes the resulting vectors.
                
                Vector dimensions generated by different vector models in the knowledge base:
                
                > The following vector dimensions cannot be changed.
                
                -   text-embedding-v2: 1,536 dimensions
                    
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2338693671/CAEQTxiBgIDk443S1RkiIDQ3YWUzNDhlZGNmMzQxNTFiZTkxMWFmZjUwNTc1MjRi4464811_20240625101944.455.svg)
                
                ## Reranking model
                
                The reranking model performs a secondary ranking on the candidate segments that are initially retrieved by the vector search and returns the top-K text segments with the highest similarity scores. The **Official Ranking** model (recommended) combines semantic relevance with keyword matching algorithms (such as BM25) to better handle queries that require precise keyword hits. If you only need semantic ranking, select the **GTE-ReRank** model.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2338693671/CAEQTxiBgMDB3pHS1RkiIGZkY2QwY2Y2MmU4NzQ2YWJhMWY4MGMxMWYyZDgyMzA34464811_20240625101944.455.svg)
                
                ## Similarity threshold
                
                This threshold represents the minimum similarity score for a text segment to be retrieved. It is used to filter the text segments returned by the reranking model. Only text segments with a score that exceeds this value are retrieved.
                
                **Note**
                
                This setting is the **default similarity threshold** for the knowledge base. When you associate the knowledge base with a specific application, you can also set a separate threshold for that application, which overrides the knowledge base's default similarity threshold.
                
                Lowering this threshold is expected to retrieve more text segments, but may retrieve some less relevant ones. Raising this threshold reduces the number of retrieved text segments. If set too high, it causes the knowledge base to discard relevant text segments.
                
                > You can use hit testing to fine-tune the similarity threshold to balance the recall rate and precision.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2338693671/CAEQTxiBgMDB3pHS1RkiIGZkY2QwY2Y2MmU4NzQ2YWJhMWY4MGMxMWYyZDgyMzA34464811_20240625101944.455.svg)
                
                ## Maximum recalls
                
                Suppose an application is associated with three knowledge bases: A1, A2, and A3. The system retrieves segments related to the user's input from these bases, reranks them using a reranking model, and selects the top-K most relevant segments to provide to the LLM as context for its response. This value, K, is the **Maximum recall count** (up to a limit of 20). It determines the number of text segments that the reranking model provides to the LLM for reference.
                
                > Increasing this value can improve the accuracy of the LLM's response, but it also increases the number of input tokens consumed by the LLM.
                
                ## **Vector storage**
                
                Select a vector database to store text vectors. The **Platform Storage** vector database is sufficient for the basic functional needs of a knowledge base. For advanced features, such as managing, auditing, or monitoring the database, we recommend selecting **ADB-PG** (AnalyticDB for PostgreSQL).
                
                > Note that when you purchase an ADB-PG instance, you must enable **Vector Engine Optimization**. Otherwise, Model Studio cannot use this instance.
                
            
    -   **Data Query (for Chatbot or NL2SQL scenarios)**
        
        -   **Scenarios:**
            
            -   This type is suitable for building Q&A systems based on structured data (data organized in a predefined table schema), such as FAQ, product data, or personnel information query assistants.
                
            -   If your data consists of complete FAQ Q&A pairs, select **Data Query**. For example, if you have an Excel file that contains two columns, `Question` and `Answer`, a Data Query knowledge base lets you retrieve information only from the `Question` column and use only the content from the `Answer` column as a reference for the LLM's response.
                
                > A Document Search knowledge base cannot easily achieve this effect.
                
            -   You can import multiple Excel files with **completely identical table schemas**.
                
        -   **Data Source Integration:** You can upload local XLS or XLSX files.
            
            **Creation instructions (Data Query)**
            
            1.  **Select data:** Specify a data source, such as files or content, to import into the knowledge base for subsequent retrieval.The following two methods are supported: **Local upload** and **Cloud import** (select existing data tables from application data).
                
                **Note**
                
                The data source cannot be changed after the knowledge base is created, and a single knowledge base cannot support multiple data sources at the same time.
                
                -   **Local Upload:** Upload data tables (XLS or XLSX format, and the **first row must be the table header**) directly from your computer.
                    
                -   **Cloud import (Select data table):** Select an existing data table in your application. For the procedure, see [Data Import](/help/en/model-studio/data-import-instructions).
                    
            2.  **Index configuration:** Defines how imported data is processed and stored, which directly affects retrieval performance.
                
                > Among the following configuration items, only "Vector storage" may incur fees if you choose ADB-PG. All other configurations are free.
                
                ## Participate in retrieval/Participate in model response
                
                -   **Participate In Retrieval**: When enabled, the knowledge base is allowed to search within this column of data.
                    
                -   **Include In Model Response**: When enabled, the retrieval results from this column are used as input for the LLM to generate a response. For example, in the configuration shown in the following figure, **Include In Retrieval** is enabled for the "Name", "Gender", "Position", and "Age" columns, and **Include In Model Response** is enabled for the "Name" and "Position" columns. In this case, the knowledge base retrieves data from all columns. However, only the content from the "Name" and "Position" columns of the retrieved data is provided to the LLM to help generate the response.
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6129904471/p932647.png)
                    
                    As shown in the figure below, because "Age" is not enabled to participate in the model response, the LLM still cannot answer the question "What is Zhang San's age?" after being associated with this knowledge base.
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6129904471/p932648.png)
                    
                
                ### Multi-round conversation rewriting
                
                When this feature is enabled, the system calls a dedicated lightweight model to rewrite the user's current question into an independent, contextually complete new query by incorporating the conversation history. This new query is then used for knowledge base retrieval.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgMCZ25bO1RkiIGExNmE5YjM3M2VhODQwMzZhZmJhMzhmMzUxMDkzNWQ14464811_20240625101944.455.svg)
                
                ### Embedding model
                
                Embedding models convert original input prompts and knowledge text into numerical embeddings to calculate their semantic similarity.The default model (which cannot be changed) supports multiple languages in addition to Chinese and English and normalizes the resulting vectors.
                
                Vector dimensions generated by different vector models in the knowledge base:
                
                > The following vector dimensions cannot be changed.
                
                -   text-embedding-v2: 1,536 dimensions
                    
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgIDk443S1RkiIDQ3YWUzNDhlZGNmMzQxNTFiZTkxMWFmZjUwNTc1MjRi4464811_20240625101944.455.svg)
                
                ### Reranking model
                
                The reranking model performs a secondary ranking on the candidate segments that are initially retrieved by the vector search and returns the top-K text segments with the highest similarity scores. The **Official Ranking** model (recommended) combines semantic relevance with keyword matching algorithms (such as BM25) to better handle queries that require precise keyword hits. If you only need semantic ranking, select the **GTE-ReRank** model.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgMDB3pHS1RkiIGZkY2QwY2Y2MmU4NzQ2YWJhMWY4MGMxMWYyZDgyMzA34464811_20240625101944.455.svg)
                
                ### Similarity threshold
                
                This threshold represents the minimum similarity score for a text segment to be retrieved. It is used to filter the text segments returned by the reranking model. Only text segments with a score that exceeds this value are retrieved.
                
                **Note**
                
                This setting is the **default similarity threshold** for the knowledge base. When you associate the knowledge base with a specific application, you can also set a separate threshold for that application, which overrides the knowledge base's default similarity threshold.
                
                Lowering this threshold is expected to retrieve more text segments, but may retrieve some less relevant ones. Raising this threshold reduces the number of retrieved text segments. If set too high, it causes the knowledge base to discard relevant text segments.
                
                > You can use hit testing to fine-tune the similarity threshold to balance the recall rate and precision.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgMDB3pHS1RkiIGZkY2QwY2Y2MmU4NzQ2YWJhMWY4MGMxMWYyZDgyMzA34464811_20240625101944.455.svg)
                
                ### Maximum recalls
                
                Suppose an application is associated with three knowledge bases: A1, A2, and A3. The system retrieves segments related to the user's input from these bases, reranks them using a reranking model, and selects the top-K most relevant segments to provide to the LLM as context for its response. This value, K, is the **Maximum recall count** (up to a limit of 20). It determines the number of text segments that the reranking model provides to the LLM for reference.
                
                > Increasing this value can improve the accuracy of the LLM's response, but it also increases the number of input tokens consumed by the LLM.
                
                ### **Vector storage**
                
                Select a vector database to store text vectors. The **Platform Storage** vector database is sufficient for the basic functional needs of a knowledge base. For advanced features, such as managing, auditing, or monitoring the database, we recommend selecting **ADB-PG** (AnalyticDB for PostgreSQL).
                
                > Note that when you purchase an ADB-PG instance, you must enable **Vector Engine Optimization**. Otherwise, Model Studio cannot use this instance.
                
            
    -   **Image Q&A (for search-by-image scenarios)**
        
        -   **Scenarios:**
            
            -   This type is suitable for building multimodal retrieval applications such as search by image and search by image plus text, like a product shopping guide or Image Q&A assistant.
                
        -   **Data Source:** You can upload local XLS or XLSX files.
            
            > XLS and XLSX files must contain **publicly accessible** image URLs to build image indexes. For details, see the creation instructions below.
            
            **Creation instructions (Image Q&A)**
            
            1.  **Select data:** Specify a data source, such as a file or content, for the knowledge base. The content from the data source is imported into the knowledge base for subsequent retrieval.The following two methods are supported: **local upload** and **cloud import** (select an existing data table from application data).
                
                **Note**
                
                The data source cannot be changed after the knowledge base is created, and a single knowledge base cannot support multiple data sources at the same time.
                
                -   **Local Upload:** Upload data tables (XLS or XLSX format) directly from your computer.
                    
                    **Note**
                    
                    -   **Field:** The data table should contain at least one field of type `image_url` to generate the image index.
                        
                    -   **Build process:** The knowledge base accesses the image URL in the `image_url` field, extracts visual features, and converts them into stored vectors.
                        
                    -   **Retrieval process:** The knowledge base compares the vector generated from the user's uploaded image with the stored image vectors for similarity and returns the most relevant records.
                        
                    
                -   **Cloud import (select a data table):** Select an existing data table from the application data in Model Studio. For more information, see [Data Import](/help/en/model-studio/data-import-instructions).
                    
            2.  **Index configuration:** Defines how imported data is processed and stored, which directly affects retrieval performance.
                
                > Among the following configuration items, only "Vector storage" may incur fees if you choose ADB-PG. All other configurations are free.
                
                ### Participate in retrieval/Participate in model response
                
                -   **Participate In Retrieval**: When enabled, the knowledge base is allowed to search within this column of data.
                    
                -   **Include In Model Response**: When enabled, the retrieval results from this column are used as input for the LLM to generate a response. For example, in the configuration shown in the following figure, **Include In Retrieval** is enabled for the "Name", "Gender", "Position", and "Age" columns, and **Include In Model Response** is enabled for the "Name" and "Position" columns. In this case, the knowledge base retrieves data from all columns. However, only the content from the "Name" and "Position" columns of the retrieved data is provided to the LLM to help generate the response.
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6129904471/p932647.png)
                    
                    As shown in the figure below, because "Age" is not enabled to participate in the model response, the LLM still cannot answer the question "What is Zhang San's age?" after being associated with this knowledge base.
                    
                    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6129904471/p932648.png)
                    
                
                ### Multi-round conversation rewriting
                
                When this feature is enabled, the system calls a dedicated lightweight model to rewrite the user's current question into an independent, contextually complete new query by incorporating the conversation history. This new query is then used for knowledge base retrieval.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgMCZ25bO1RkiIGExNmE5YjM3M2VhODQwMzZhZmJhMzhmMzUxMDkzNWQ14464811_20240625101944.455.svg)
                
                ## Vector model
                
                Vector models convert original input Prompts, knowledge text, and images into numerical vectors for similarity comparison. The default **multimodal embedding v1 (multimodal-embedding-v1)** model (which cannot be changed) supports both Chinese and English and various image and video formats, normalizes the vector results, and is suitable for most scenarios. For more information, see [Text and Multimodal Embedding](/help/en/model-studio/embedding).
                
                ### Reranking model
                
                The reranking model performs a secondary ranking on the candidate segments that are initially retrieved by the vector search and returns the top-K text segments with the highest similarity scores. The **Official Ranking** model (recommended) combines semantic relevance with keyword matching algorithms (such as BM25) to better handle queries that require precise keyword hits. If you only need semantic ranking, select the **GTE-ReRank** model.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgMDB3pHS1RkiIGZkY2QwY2Y2MmU4NzQ2YWJhMWY4MGMxMWYyZDgyMzA34464811_20240625101944.455.svg)
                
                ### Similarity threshold
                
                This threshold represents the minimum similarity score for a text segment to be retrieved. It is used to filter the text segments returned by the reranking model. Only text segments with a score that exceeds this value are retrieved.
                
                **Note**
                
                This setting is the **default similarity threshold** for the knowledge base. When you associate the knowledge base with a specific application, you can also set a separate threshold for that application, which overrides the knowledge base's default similarity threshold.
                
                Lowering this threshold is expected to retrieve more text segments, but may retrieve some less relevant ones. Raising this threshold reduces the number of retrieved text segments. If set too high, it causes the knowledge base to discard relevant text segments.
                
                > You can use hit testing to fine-tune the similarity threshold to balance the recall rate and precision.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3338693671/CAEQTxiBgMDB3pHS1RkiIGZkY2QwY2Y2MmU4NzQ2YWJhMWY4MGMxMWYyZDgyMzA34464811_20240625101944.455.svg)
                
                ### Maximum recalls
                
                Suppose an application is associated with three knowledge bases: A1, A2, and A3. The system retrieves segments related to the user's input from these bases, reranks them using a reranking model, and selects the top-K most relevant segments to provide to the LLM as context for its response. This value, K, is the **Maximum recall count** (up to a limit of 20). It determines the number of text segments that the reranking model provides to the LLM for reference.
                
                > Increasing this value can improve the accuracy of the LLM's response, but it also increases the number of input tokens consumed by the LLM.
                
                ## Vector storage
                
                Select a vector database to store text vectors. The **Platform Storage** vector database is sufficient for the basic functional needs of a knowledge base. For advanced features, such as managing, auditing, or monitoring the database, we recommend selecting **ADB-PG** (AnalyticDB for PostgreSQL).
                
                > Note that when you purchase an ADB-PG instance, you must enable **Vector Engine Optimization**. Otherwise, Model Studio cannot use this instance.
                
            
3.  During peak hours, the entire creation process may take several hours, depending on the data volume. Please wait patiently.
    

## Update a knowledge base

Any changes to the knowledge base content are synchronized in real time with all applications that reference it.

## Document Search knowledge bases

-   **Automatic update (Recommended)**
    
    You can achieve this by integrating the APIs for OSS, FC, and Model Studio knowledge bases. Just follow these simple steps:
    
    1.  **Create a bucket:** Go to the [OSS console](https://oss.console.alibabacloud.com/bucket) and create an OSS Bucket to store your original files.
        
    2.  **Create a knowledge base**: Create an unstructured knowledge base to store private knowledge content.
        
    3.  **Create a user-defined function**: Go to the [FC console](https://fc.console.alibabacloud.com) and create a function for file change events, such as file creation and deletion. For more information, see [Create a function](/help/en/functioncompute/fc/user-guide/creating-a-web-function). These functions synchronize file changes in OSS to the created knowledge base by calling the relevant APIs from the [Knowledge base API guide](/help/en/model-studio/rag-knowledge-base-api-guide#74606b2cebwu8).
        
    4.  **Create an OSS trigger**: In FC, associate an [OSS trigger](/help/en/functioncompute/fc/user-guide/overview-of-oss-trigger) with the user-defined function that you created in the previous step. When a file change event is detected (for example, when a new file is uploaded to OSS), the corresponding trigger is activated, which triggers FC to execute the corresponding function.
        
    
-   **Manual update**
    
    On the [Knowledge base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, find the target knowledge base, and click **View Details** on its card.
    
    -   **How to add a new file**: Click **Upload Data** and select the existing files in the application data. For more information, see [How to upload files to application data](/help/en/model-studio/data-import-instructions).
        
    -   **How to delete a file**: Find the target file and click **Delete** on its right.
        
        > This operation only removes the file from the knowledge base and does not delete the source file in [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
        
    -   **How to modify file content:** In-place updates and overwriting file uploads are not supported. You must first delete the old version of the file from the knowledge base and then re-import the new, modified version.
        
        > Note: Keeping the old version of the file may lead to outdated content being retrieved and recalled.
        

## Data Query and Image Q&A knowledge bases

-   **Automatic update**
    
    Not supported.
    
-   **Manual update**
    
    When the data source of a knowledge base is a data table in Application Data, it can only be updated manually. The process involves two steps.
    
    1.  **Step 1: Update the data table**
        
        Go to the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center?dataType=1) tab. In the list on the left, select the target data table, and click **Import Data**.
        
        -   **How to insert new data:** Set Import Type to **Incremental Upload**. You need to upload an Excel file that **only contains the table header and the new data rows**.
            
            > The file's header must match the current table schema. You can use the **Download Template** feature on the page to obtain a standard header file and fill in the new data directly.
            
        -   **How to delete data:** Set Import Type to **Upload and Overwrite**. You need to upload an Excel file that **contains the header and the latest full data (with the records to be deleted removed)**.
            
            > How to obtain the full data: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713762371/p849939.png) icon on the page to download the data in XLSX format.
            
        -   **How to modify data:** Set Import Type to **Upload and Overwrite**. You need to upload an Excel file that **contains the header and the latest full data (including the corresponding modifications)**.
            
    2.  **Step 2: Synchronize changes to the knowledge base**
        
        Return to the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) list, find the target knowledge base, and click **View Details** on its card. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0713762371/p816740.png) icon at the top left of the data table. After you confirm the operation, the latest content of the data table is synced to the knowledge base.
        
        > You still need to manually repeat the above steps after each subsequent update. Data changes cannot be automatically synchronized for knowledge bases that use "Application Data" as the data source.
        

## Edit a knowledge base

After a knowledge base is created, you can only modify the **Knowledge Base Name**, **Knowledge Base Description**, and **Similarity Threshold**. Other configurations cannot be changed. Editing a knowledge base using an API is not supported.

**Procedure:** On the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, find the target knowledge base, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2620490671/p1015599.png) icon on its card, and then click **Edit**.

## Delete a knowledge base

**Note**

This operation does not delete the source files or data tables in [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).

**Warning**

This operation is irreversible. Please proceed with caution.

Before you can delete a knowledge base, you must first disassociate it from all **published** applications.

> Associated unpublished applications will not block the delete operation.

**Steps to delete a knowledge base**

1.  For each **published** application associated with the knowledge base, perform the following operations:
    
    1.  On the [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) page, find the application associated with the knowledge base, and click **Configure**.
        
    2.  Remove the knowledge base from the knowledge base list. Click **Publish** in the upper-right corner of the page and follow the instructions to republish the application.
        
    3.  Repeat the above steps for all published applications associated with the knowledge base.
        
2.  On the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, find the target knowledge base, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2620490671/p1015599.png) icon on the card, and then click **Delete**.
    

## Hit testing

Imagine that you have built a knowledge base, but you find that in actual use, the AI application often provides irrelevant answers or fails to find information that exists in the knowledge base. Hit testing is a key tool that helps you identify and resolve these issues proactively.

With hit testing, you can:

-   Verify whether the knowledge base can provide effective knowledge input for the AI application.
    
-   Fine-tune the similarity threshold to balance recall rate and accuracy.
    
-   Discover content gaps or quality issues in the knowledge base.
    

### **Scenario examples**

-   **Scenario 1: Customer inquires about product price**
    
    ```
    Test input: "How much is your Bailian phone?"
    Expected result: Should be able to retrieve relevant text segments containing price information.
    ```
    
-   **Scenario 2: Troubleshooting a technical issue**
    
    ```
    Test input: "What should I do if my device can't connect to WiFi?"
    Expected result: Should be able to retrieve relevant text segments about WiFi connection troubleshooting.
    ```
    

### **Procedure**

1.  On the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, find the target knowledge base, and click **Hit Test** on its card.
    
2.  Enter a question in the test interface (we recommend collecting frequently asked user questions in advance) and observe the retrieval results.
    
    -   **Retrieval result:** The hit result for this test keyword (sorted by similarity in descending order). Click any segment to view its specific content.
        
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2338693671/p852037.png)**Icon:** For a Image Q&A knowledge base, the system first converts the input image into a vector and retrieves relevant records. Then, it sends these records along with the question to the LLM to generate an answer. For Document Search or Data Query knowledge bases, the uploaded image does not participate in the retrieval.
        
3.  Confirm whether the relevant text segments are correctly retrieved. If not, you need to adjust the similarity threshold and repeat the previous step.
    
4.  Click **View Historical Retrieval Records** to compare the retrieval performance under different past threshold settings.
    

#### ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p849449.png)

## Quotas and limits

-   For information about the data sources and capacity supported by a knowledge base, see [Knowledge base quotas and limits](/help/en/model-studio/rag-knowledge-base-specifications).
    
-   Each application can be associated with a maximum of 5 Document Search knowledge bases, 5 Data Query knowledge bases, and 1 Image Q&A knowledge base.
    

## Billing

The knowledge base feature is free of charge, but you may incur fees when you call an [application](/help/en/model-studio/application-introduction) that references a knowledge base.

**Step**

**Billing information**

[Build a knowledge base](#c0fa1080aerzp)

Free of charge.

[Integrating with business applications](#db7f40d0f3a0q)

When you call an application, text segments retrieved from the knowledge base increase the number of input tokens for the LLM. This may lead to an increase in model inference (call) costs. For details about model inference (call) costs, see [Billable items](/help/en/model-studio/billing-for-model-studio#c1fabcbe9fklk).

> Note: If you only retrieve from a specified knowledge base by calling the [Retrieve API](/help/en/model-studio/api-bailian-2023-12-29-retrieve) and do not use an application for generation, you will not be charged.

[Management and O&M](#b1bfab3bec5da)

Free of charge.

## **API reference**

-   For the latest complete list of knowledge base APIs and their input and output parameters, see [API references (knowledge base)](/help/en/model-studio/api-bailian-2023-12-29-dir-knowledge-base/).
    
-   For specific usage instructions and code examples for the related APIs, see [Knowledge base API guide](/help/en/model-studio/rag-knowledge-base-api-guide).
    

## FAQ

### **Building a knowledge base**

-   **Q: Can the file or data table that has been imported into the knowledge base be deleted from Application Data?**
    
    -   **Document Search knowledge bases:** Yes, you can. The files in Application Data and the knowledge base are independent data copies. Deleting the source file in Application Data does not affect the file that is already imported into the knowledge base.
        
    -   **Data Query and Image Q&A knowledge bases:** No, you cannot. Doing so causes abnormalities in functions such as data synchronization and viewing the knowledge base.
        
    

### **Handling images and multimodal content**

-   **Q: My file contains illustrations that need to be returned in the application's response. How should I handle this?**
    
    ## **Use a Document Search knowledge base**
    
    **Method 1 (only for agent applications)**
    
    1.  When you [create a knowledge base](#c0fa1080aerzp), for Knowledge base type, select **Document Search**, and for Scenario, select **With Illustrations**.
        
        > The knowledge base extracts summaries from the file's illustrations. The LLM autonomously decides whether to insert images based on the relevance of the summary to the question.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4477050671/p998062.png)
        
    2.  When you create or edit an agent application, select the **Qwen-Plus** or **Qwen-Plus-Latest** model (these two have been tested to have the best performance). Click the **+** button to the right of **Document** and add the knowledge base that you created in the previous step.
        
        > Note: The "With illustrations" and "Show source" features cannot be enabled at the same time.
        
    3.  Actual Q&A effect:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p903021.png)
        
    
    **Method 2 (for agent applications and workflow applications)**
    
    1.  Upload an image to a publicly accessible location and obtain its complete URL. We recommend that you use OSS. For more information, see [Upload an image to OSS and use its file URL](/help/en/oss/user-guide/console-quick-start).
        
    2.  Insert the full URL (relative paths are not supported) into the file. Please note: **Directly embedding image files in the document is not supported** (for example, by copying and pasting or inserting a local image from the menu). You must use a publicly accessible URL to reference the image.
        
        > If you have followed the instructions but the image still does not display, check if the URL in the text segment is complete. Confirm if there are any extra spaces or special characters, which might be misinterpreted by the system. If there are issues, you can edit and correct them directly.
        
        **Example of correctly referencing an image in a file**
        
        **Sample prompt template**
        
        **Actual Q&A effect**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p877345.png)
        
        ```
        # Knowledge Base
        Please remember the following materials, they may be helpful for answering questions.
        ${documents}
        
        # Requirements
        If there are images, please display them.
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p903021.png)
        
        **Example of incorrectly referencing an image in a file**
        
        **Sample prompt template**
        
        **Actual Q&A effect**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p877348.png)
        
        ```
        # Knowledge Base
        Please remember the following materials, they may be helpful for answering questions.
        ${documents}
        
        # Requirements
        If there are images, please display them.
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p903031.png)
        
        **Explanation:** When an image is inserted directly into a file, the application will not display the image in its response.
        
    
    ## **Use a Image Q&A knowledge base**
    
    1.  Upload an image to a location that is accessible over the internet and obtain its full URL. We recommend that you use OSS. For detailed instructions, see [Upload an image to OSS and use its file URL](/help/en/oss/user-guide/console-quick-start).
        
    2.  On the [Table](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center?dataType=1) tab, create a new data table and add an **image\_url** field to store the complete URL of an image.
        
        **Note**
        
        -   The **image\_url** field does not support relative paths.
            
        -   A single **image\_url** field does not support storing multiple image URLs. If a single record needs to be associated with multiple images, you must create a separate `image_url` field for each image, such as `image_1` and `image_2`.
            
        -   The current version does not support storing multiple image URLs in a single field.
            
        -   Ensure that the size of the image file pointed to by each **image\_url** in the data table does not exceed 3 MB. Exceeding the limit causes the knowledge base creation to fail.
            
        -   After a data table is created, you can no longer add or modify fields of type **image\_url**. Please reserve all potentially needed image fields when you initially design the table schema.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4477050671/p1012933.png)
        
    3.  When you [build a knowledge base](#c0fa1080aerzp), select **Image Q&A** as the **Knowledge Base Type**.
        
    4.  When you create or edit an agent application, click the **+** button to the right of **Image** (Image Q&A knowledge base) and add the knowledge base that you created in the previous step. Change the prompt template to:
        
        ```
        # Knowledge Base
        Please remember the following materials, they may be helpful for answering questions.
        ${documents}
        
        # Requirements
        If there are images, please display them.
        ```
        
    5.  Next, ask a question in the input box on the right.
        
        > For example: "Briefly introduce the Model Studio X1 phone."
        
        **Example of correctly referencing an image**
        
        **Sample prompt template**
        
        **User prompt and the result returned by the application**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4477050671/p877419.png)
        
        ```
        # Knowledge Base
        Please remember the following materials, they may be helpful for answering questions.
        ${documents}
        
        # Requirements
        If there are images, please display them.
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p903021.png)
        
    

### **Permissions and security**

-   **Q: When operating a knowledge base, I encounter the error "Missing permissions for this module". How should I handle this?**
    
    By default, a [RAM user](/help/en/model-studio/permission-management-overview#24ca2dad7djzs) cannot perform write operations such as creating, updating, or deleting knowledge bases. An Alibaba Cloud account must grant the user `Administrator` [page permissions](/help/en/model-studio/member-management#febd776ce5lbx), or permissions that include at least `ApplicationData-FullAccess` and `KnowledgeBase-FullAccess`.
    
-   **Q: Are knowledge bases private? Can other organizations or users access them?**
    
    Knowledge bases are restricted to members within their workspace for access and operations. They are not publicly accessible.
    
-   **Q: Will Alibaba Cloud use the knowledge bases under my account to answer other users' questions?**
    
    Alibaba Cloud strictly protects data privacy and will never use your knowledge base to answer other users' questions or for model training. For details on our commitment to data security and privacy, see the [Privacy policy](/help/en/model-studio/privacy-notice).
    

### **Migration and export**

-   **Q: How do I export a knowledge base to my local machine?**
    
    A one-click export is not supported. As an alternative, you can manually obtain the data in the following ways:
    
    -   Download original files or data tables from [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
        
    -   Write a script to batch pull document and segment data by calling the `[ListChunks](/help/en/model-studio/api-bailian-2023-12-29-listchunks)` API.
