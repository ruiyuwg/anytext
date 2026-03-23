Workflow applications streamline complex tasks by breaking them down into a series of steps. In Alibaba Cloud Model Studio, you can create a workflow application that integrates large language models (LLMs), APIs, and other nodes to reduce the need for extensive coding. This topic describes how to create a workflow application.

**Important**

-   **Console restrictions:** Only **International Edition users** who created applications before **April 21, 2025** can access the **Application Development** tab, as shown in the following figure.
    
    > This tab contains the following features: Applications ([agent application](/help/en/model-studio/single-agent-application) and [workflow application](/help/en/model-studio/workflow-application/)), Components ([prompt engineering](/help/en/model-studio/prompt-template) and [plug-in](/help/en/model-studio/plug-in-overview#undefined)), and Data ([knowledge base](/help/en/model-studio/rag-knowledge-base) and [application data](/help/en/model-studio/data-import-instructions)). **These are all preview features. Use them with caution in production environments.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0799390671/p1017153.png)
    
-   **API call limits:** Only **International Edition users** who created applications before **April 21, 2025**, can call the [application data, knowledge base, and prompt engineering APIs](/help/en/model-studio/api-bailian-2023-12-29-dir/).
    

## **Application introduction**

### **Why use workflow applications**

Workflows are crucial in modern software development and business management. They simplify complex tasks into manageable steps to boost efficiency. Workflow applications in Alibaba Cloud Model Studio define the task execution order, assign responsibilities, and establish step dependencies. This enables automation and streamlines processes.

Workflow applications are useful in scenarios such as:

-   **Travel planning**: You can use workflow plug-ins to select parameters such as destinations to automatically generate travel plans, including flights, accommodations, and attraction recommendations.
    
-   **Report analysis**: For complex datasets, you can combine data processing, analysis, and visualization plug-ins to generate structured and formatted analysis reports that meet different business requirements.
    
-   **Customer support**: You can use automated workflows to process customer inquiries, including problem classification, to improve the response speed and accuracy of customer service.
    
-   **Content creation**: You can generate content such as articles and marketing copy. Users only need to enter the topic and requirements, and the system automatically generates content that meets the requirements.
    
-   **Education and training**: You can design personalized learning plans through workflows, including learning progress tracking and assessments, to facilitate autonomous student learning.
    
-   **Medical consultation**: Based on the symptoms that a patient enters, you can combine multiple analysis tools to generate a preliminary diagnosis or recommend related examinations to help doctors make further judgments.
    

### **Supported models**

For more information about the models, see [Model list and pricing](/help/en/model-studio/models).

For more information about the API call rate limits of each model, see [Rate limits](/help/en/model-studio/rate-limit).

-   [Qwen-Max](/help/en/model-studio/models#cfc131abafghw)
    
-   [Qwen-Plus](/help/en/model-studio/models#6c45e49509gtr)
    
-   [Qwen-Turbo](/help/en/model-studio/models#8708390fdb66x)
    
-   [Qwen-VL](/help/en/model-studio/vision)
    

**Note**

The list of models supported in the agent application is definitive.

## **Use cases**

This section uses an example of creating a workflow application to determine whether a text message involves telecommunication fraud.

1.  Go to the [**Application Management**](https://bailian.console.alibabacloud.com/#/app-center) page, click **Create Application**, select **Workflow Application**, and click **Create Task-based Workflow** to open the workflow configuration page.
    

2.  Configure the Start node: Delete the default city and date parameters. The input node has a built-in default parameter **query**, so no other parameters are needed here.
    

3.  Add an LLM node to identify fraud information:
    
    Drag the **LLM** node from the left-side pane to the canvas, connect the Start node to the LLM node, and configure the corresponding parameters. You can use the default settings for parameters that are not mentioned.
    
    -   **Model Configuration**: Qwen-Plus
        
    -   **System Prompt**:
        
        ```
        Analyze and determine whether the given information is suspected of fraud. Provide a definite answer on whether there is a suspicion of fraud.
         Processing requirements: Carefully review the content of the information, focusing on keywords and typical fraud patterns, such as requests for urgent transfers, provision of personal information, and promises of unrealistic benefits. 
        Procedure: 
        1. Identify key elements in the information, including but not limited to the sender's identity, requests made, promised returns, and any urgency expressions. 
        2. Compare with known fraud case characteristics to check if there are similar tactics or language patterns in the information. 
        3. Evaluate the overall reasonableness of the information, considering whether the requests made are in line with conventional logic and processes. 
        4. If the information contains links or attachments, do not click or download them directly to avoid potential security risks, and remind users of the dangers of such content. 
        Output format: Clearly indicate whether the information exhibits characteristics of fraud and briefly explain the basis for judgment. If there is a suspicion of fraud, provide some suggestions or preventive measures to protect user safety.
        ```
        
    -   **User Prompt**:
        
        ```
        Determine whether "${sys.query}" is suspected of being fraudulent information.
        ```
        

![p910525](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1877435471/p937422.svg)

4.  Connect the LLM node and the End node, and configure the variables of the End node. You can use the default settings for parameters that are not mentioned.
    
    -   **Input:** Enter `/` to insert a variable: `LLM.result`
        

![p910524](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1877435471/p937423.svg)

5.  Click **Test** in the upper-right corner, enter `Your package has been stored at the pickup station for several days. Please come and collect it at your earliest convenience`, and then click **Execute**. After the workflow finishes running, the output node displays the **Run Result**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2117701471/p910476.png)

6.  Click **Test** in the upper-right corner again, enter `You have a message about winning 1 million. Please check it`, and then click **Execute**. After the workflow finishes running, the output node displays the **Run Result**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2117701471/p910477.png)

7.  If the current workflow application works as expected, click **Publish** in the upper-right corner to publish the application for subsequent calls.
    

## **Node description**

Nodes are the core functional units of workflow applications. Each node is responsible for a specific task, such as executing an operation, triggering a condition, processing data, or determining the process flow. Nodes are flexible building blocks that you can assemble to build efficient and intelligent automated processes.

### **Start/End**

-   **When to use**
    
    -   When you design a workflow, you must define the structure and content of the input and output parameters in the Start and End nodes.
        
-   **How to use**
    
    -   **Start node**
        
        **Component**
        
        **Description**
        
        Variable name
        
        The name of the input parameter. Subsequent nodes can call the variable by its name.
        
        Type
        
        The data type of the input parameter. Currently, only String, Boolean, and Number are supported. To pass an Array or Object, you must parse it yourself before it enters the workflow.
        
        Description
        
        The description of the input parameter, used to explain the purpose of the parameter.
        
        **Note**
        
        In addition to custom variables, the application has several built-in utility variables:
        
        -   **query**
            
            The user query variable. It is used to receive the prompt variable from API calls or text sent by users in the test window.
            
        -   **historyList (only available in conversational workflows)**
            
            This is the conversation history list. The application uses it to automatically maintain conversation history records and provide a multi-round conversation experience.
            
        -   **imageList (only available in conversational workflows)**
            
            This is the image list. It stores images that users upload in the test window. Currently, only a single image can be stored.
            
        
    -   **End node**
        
        **Component**
        
        **Description**
        
        Output mode
        
        The format of the output parameters. Text Output and JSON Output are supported.
        
        Text Box (in text output mode)
        
        You can arrange the paragraph format of the output content. This field supports text input and variable references and is suitable for unstructured content.
        
        Variable name/Variable value (only effective in JSON mode)
        
        You must arrange the output content in JSON format. You can customize variable names. This field supports text input and variable references and is suitable for structured content.
        
        Return result
        
        This parameter is effective only when the application is called using an API. It determines whether to output the node content. For more information about the purpose of this component, see [Control node content using Return Result](/help/en/model-studio/application-calling-guide#2b7d99ee3btrk).
        

### **Knowledge Base**

-   **Why use it**
    
    This node helps you extract the most relevant content from a large information source, such as a repository of documents, FAQs, and product information. This prepares the data for subsequent AI Q&A.
    
-   **Functions and features and usage**
    
    -   You can search one or more knowledge bases to retrieve relevant document segments. This allows the AI to access more context and provide more professional or accurate answers. This node is often used with LLM nodes.
        
    -   It is especially useful for building conversational workflows and intelligent customer service systems.
        
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Input
    
    `content`: You can directly enter text or reference variables output from previous nodes.
    
    `imageList`: Supports image search. You can directly enter image links or reference variables output from previous nodes.
    
    Select knowledge base
    
    Specify the knowledge bases to search in. Multiple selections are supported.
    
    Output
    
    Name the result variable of this node, such as `kbResult`.
    
-   **Sample output structure**:
    
    ```
    {
      "rewriteQuery": "...",
      "chunkList": [
        {
          "score": 0.36,
          "documentName": "Document Name",
          "title": "Document Title",
          "content": "Related Content Segment",
          "imagesUrl": "Image URL"
        }
      ]
    }
    ```
    
    The `chunkList` is the most commonly used part of the output. It contains document segments and their similarity scores.
    

**Note**

A higher search result score indicates a stronger match. You can filter, sort, or combine the results in subsequent nodes.

Local vector databases are not supported. You must upload your files to a knowledge base to use this feature.

### **LLM**

-   **Why use it**
    
    This is the "intelligent brain" of the entire workflow. It can understand language, generate text, analyze images, and participate in multi-round conversations. You can use it to write copy, summarize text, or even analyze image content if you use a VL series model.
    
-   **Functions and features**
    
    -   It supports processing a single input at a time or processing a large amount of data in batches.
        
    -   You can configure different LLMs, such as Qwen-Plus. You can select the appropriate model based on its performance, speed, or other features.
        
-   **Node parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Mode selection
    
    Single processing mode: This mode performs a fast search using a lower search ratio and not using query rewriting.
    
    Batch processing mode: In batch processing mode, the node runs multiple times. Each time it runs, an item from the list is sequentially assigned to the batch processing variable. This process continues until all items in the list have been processed or the specified maximum number of batch processing times is reached.
    
    Batch processing configuration:
    
    -   Maximum number of batch processing times (range: 1-100, default for regular user: 100): The upper limit for batch processing runs.
        
        **Note**
        
        The actual number of batch processing times is the minimum length of the user-input arrays. If no input variable is specified, the number of times is determined by the number of batches in the configuration.
        
    -   Number of parallel runs (range: 1-10): The concurrency limit for batch processing. If you set this parameter to 1, all tasks are executed sequentially.
        
    
    Model configuration
    
    Select a suitable LLM and adjust the model parameters. For more information about the supported models, see [Supported models](#a901b84b35s5r).
    
    When you select a VL model:
    
    -   Model input parameters: vlImageUrl can reference parameters or input image links.
        
    -   Image source: You can select Image Set or Video Frame.
        
        -   Image Set: The model considers the uploaded images to be independent and matches the corresponding images for understanding based on the question.
            
        -   Video Frame: The model considers the uploaded images to be from the same video and understands the images as a whole in sequence. At least four video frames are required.
            
    
    Parameter configuration
    
    Temperature coefficient: Used to adjust the diversity of the generated content. A higher temperature value increases the randomness of the generated text, producing more unique outputs. A lower temperature value makes the generated content more conservative and consistent.
    
    > DeepSeek R1 do not support this configuration.
    
    Maximum reply length: Limits the maximum length of the text generated by the model, excluding the prompt. This limit varies by model type, and the specific maximum value may differ.
    
    System Prompt
    
    You can use this parameter to define the model's role, task, and output format. For example: "You are a math expert who specializes in solving math problems. Output the problem-solving process and results in the specified format."
    
    User Prompt
    
    Configure the prompt template. Variable insertion is supported. The LLM processes and generates content based on the prompt configuration.
    
    Output
    
    The variable name for the processing result of this node. Subsequent nodes use this variable to identify and process the result.
    
    > DeepSeek R1 support outputting the deep thinking process (reasoningContent).
    
    **Note**
    
    To integrate the application into your business using an API, see [Application call](/help/en/model-studio/application-calling-guide#8219e0c236wra).
    
-   **LLM node in a conversational workflow**
    
    -   Unlike the LLM node in a task-based workflow, this node supports multi-round conversation configuration. The model can use selected historical conversation information as input.
        
        **Multi-round conversation configuration**: The conversational application collects the variables required in the **"Context"** from the previous conversation rounds and passes them as input parameters to the LLM.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887864.png)
        
    -   Context: Declares the context input that the LLM requires. The default ${System Variable.historyList} represents the application input and output from previous conversation rounds. Other parameters refer to application parameters from previous conversation rounds.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887869.png)
        
-   **Text model node example**
    
    On the **Test** interface, enter `chip engineer` in the **query** parameter:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p903669.png)
    
    End node output:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p903663.png)
    
-   **Image model node example**
    
    The LLM supports single or multiple images as input in both **URL** and **base64** formats.
    
    **Note**
    
    A single image can be passed directly. For example: `https://****.com/****.jpg`.
    
    Multiple images can be passed as a list. For example: `["URL","URL","URL"]`.
    
    On the **Test** interface, enter `https://****.com/****.jpg` in the **query** parameter.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p903753.png)
    
    End node output:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p903565.png)
    

### **API**

**Note**

-   The default timeout for the API node is 5000 ms and cannot be adjusted.
    
-   To ensure that the API node can successfully access the target service, add the Model Studio application service IP addresses (`47.93.216.17` and `39.105.109.77`) to the inbound rule whitelist of your target server's security group or firewall.
    

-   **Definition**
    
    You can call custom API services using POST, GET, PUT, PATCH, and DELETE methods and output the API call results.
    
    **Call method**
    
    **Purpose**
    
    POST
    
    Used to submit data to the server to create a new resource.
    
    GET
    
    Used to retrieve a representation of a resource without modifying data on the server.
    
    PUT
    
    Used to update the representation of a specified resource on the server or create a new resource on the server.
    
    PATCH
    
    Used to partially update a resource on the server.
    
    DELETE
    
    Used to delete a specified resource from the server.
    
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    API address
    
    Enter the API address to be called. You can select **POST**, **GET**, **PUT**, **PATCH**, or **DELETE**.
    
    Header settings
    
    Set the **Header** parameters by setting **KEY** and **VALUE**.
    
    Param settings
    
    Set the **Param** parameters by setting **KEY** and **VALUE**.
    
    Body settings
    
    You can select **none**, **form-data**, **raw**, or **JSON**.
    
    Output
    
    The variable name for the processing result of this node, used for subsequent nodes to identify and process the result of this node.
    
    **Note**
    
    To integrate the application into your business using an API, see [Application call](/help/en/model-studio/application-calling-guide#8219e0c236wra).
    
-   **Node example**
    
    Use the POST method to call an API.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887881.png)
    

### **Intent Classification**

-   **Definition**
    
    Intelligently classifies and matches user input based on intent descriptions and selects a branch to execute.
    
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Input
    
    The variable to be processed by this node, used to identify the content to be processed. You can reference variables from ancestor or Start nodes or directly enter variable values.
    
    Model configuration
    
    Model selection: Qwen-Plus.
    
    Intent configuration
    
    Configure different intents and enter intent descriptions. The model matches subsequent links based on the intent descriptions, such as "For calculating math problems" and "For Q&A about weather-related knowledge".
    
    Other intents
    
    If no intent is matched, this link is matched.
    
    Intent mode
    
    -   Single-selection mode: The LLM selects the most appropriate intent from the existing intent configurations as the output.
        
    -   Multi-selection mode: The LLM selects all matching intents from the existing intent configurations as the output.
        
    
    Thinking mode
    
    -   Fast mode: This mode can avoid outputting complex inference processes, thereby improving processing speed. It is suitable for simple scenarios.
        
    -   Effect mode: This mode thinks step by step to more accurately match the corresponding classification.
        
    
    Advanced configuration
    
    The advanced configuration content is provided to the model as an additional prompt. Here, you can enter more conditions or provide more examples to make the model's classification results more in line with your requirements.
    
    **Example**
    
    Suppose you are developing a customer service system for an e-commerce platform, and users may ask various questions about order inquiries, returns and exchanges, and payments. To ensure that the model classifies accurately, you can add relevant prompts and examples in the advanced configuration.
    
    ```
    Please classify the intent based on the following examples:
    Case 1: User enters "I want to return the coat I just bought", classified as "Return/Exchange".
    Case 2: User enters "Please help me check the shipping status of my order", classified as "Order Inquiry".
    Condition: Only process queries related to orders, and ignore payment and technical issues.
    ```
    
    Effect:
    
    User input: `"When can the book I ordered on your website last week be delivered to my home?"`
    
    Classification result: `"Order Inquiry"`
    
    In this instance, the advanced configuration guides the model to classify "query delivery time" as the "Order Inquiry" intent by providing specific classification cases, while also limiting the classification scope and excluding other irrelevant questions.
    
    Context
    
    After the context capability is enabled, the system automatically records historical conversation information in Message format. When the model is called, the context is passed in, and the model generates content based on the context.
    
    > This configuration item is only available in the Intent Classification node of conversational workflows.
    
    **Note**
    
    If you enable context, the variable type you pass to this node must be List.
    
    Output
    
    The variable name for the processing result of this node, used for subsequent nodes to identify and process the result of this node.
    
    **Note**
    
    -   This node supports context in conversational workflows.
        
    -   Running this node consumes tokens, and the consumption amount is displayed at runtime.
        
    

### **Text Conversion**

-   **Definition**
    
    This node is used for text content conversion and processing, such as extracting specific content and converting formats. It supports a template mode.
    
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Output mode
    
    **Text Output** and **JSON Output** are supported.
    
    Input
    
    Use an LLM to specify a processing method to convert the content to be processed into a specific format for subsequent nodes. You can reference the processing results of ancestor nodes through variable configuration.
    
    -   **Text Output**: Enter `/` to insert a variable.
        
    -   **JSON Output**: Variable Name | Reference/Input | Variable.
        
    
-   **Node example**
    
    The following is a simple example of a Text Conversion node. The workflow logic is as follows: First, the user enters a keyword. Then, this keyword is passed to the Text Conversion node, where it is processed internally to generate a corresponding output reply. Finally, the reply is output through the End node, completing the entire process.
    
    On the **Test** interface, enter `mathematics` in the **query** parameter:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887560.png)
    
    End node output:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887563.png)
    

### **Script Conversion**

-   **Definition**
    
    This node processes input content using script code and converts it into a template or a specific output format. This process includes parsing, converting, and formatting the input data to ensure consistency and readability.
    
-   **Node example**
    
    This is a Python script conversion example: The `city` and `date` variables are passed in from an ancestor node and stored in the `params` key-value pair. After conversion, a JSON object is output, containing `result`, `result.key0`, and `result.key1`. The JSON Schema of the code's return value must be consistent with the node's defined output.
    
    **Note**
    
    **What is a JSON Schema?**
    
    A JSON Schema is a data structure specification. It allows other nodes in the platform to clearly understand which fields (such as `result` and `key1`) and data types this node will output. This makes it easier for you to reference them in descendant nodes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887898.png)
    
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Input
    
    Defines the input data for this node. You can provide input in two ways:
    
    -   **Static value (Input)**: Directly fill in a fixed value in the left-side input panel, such as `Beijing`.
        
    -   **Dynamic variable (Reference)**: Reference the output of an ancestor node. For example, if the previous node is named `node_a` and its output has a field named `city_name`, you can select `node_a.output.city_name` to reference it.
        
    
    Output
    
    The result produced by the node's code logic. The dictionary returned by the `return` statement in the code will be the output of this node.
    
    For example, if `{'result': 'Processing successful'}` is returned, descendant nodes can obtain the string "Processing successful" using `this_node_name.result`.
    
    Code
    
    Write the core logic code.
    
    -   **Obtain input**: Use the built-in `params` object to obtain input parameters.
        
    -   **Return output**: The processing function `main` must `return` a dictionary/object, whose key-value pairs will constitute the node's output.
        
    

### **Conditional Judgement**

-   **Definition**
    
    This node sets conditional branches. When a variable meets a condition, the flow proceeds to the corresponding subsequent branch. It supports AND/OR condition configurations. Multiple conditions are executed sequentially from top to bottom.
    
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Conditional branch
    
    Enter the conditional judgement statement.
    
    Other
    
    Outputs that do not require conditional judgement can be output from here.
    
-   **Node example**
    
    The following is a simple example of a Conditional Judgement node. The workflow logic is as follows: The user first enters two parameters, which are then passed to the Conditional Judgement node. The node performs a conditional judgement on the parameters and then generates an output reply through different branches of the Text Conversion node. Finally, the End node outputs the generated reply.
    
    On the **Test** interface, enter `12345` in the **scert** parameter and `admin` in the **admin** parameter:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887918.png)
    
    End node output:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p887920.png)
    

### **Function Compute**

-   **Definition**
    
    This node authorizes the Alibaba Cloud Function Compute service and calls custom services in Function Compute.
    
-   **Parameter configuration**
    
    **Parameter name**
    
    **Parameter description**
    
    Input
    
    The variable to be processed by this node, used to identify the content to be processed. You can reference variables from ancestor or Start nodes or directly enter variable values.
    
    Region
    
    Select a region: **Singapore**, **Kuala Lumpur**, **Jakarta**.
    
    Service configuration
    
    Select the service configuration.
    
    Output
    
    The variable name for the processing result of this node, used for subsequent nodes to identify and process the result of this node.
    

### **Plugin**

-   **Definition**
    
    You can configure plug-in nodes in your workflow application to expand its capabilities and perform more complex tasks. Alibaba Cloud Model Studio provides a series of official plug-ins, such as Quark Search, Calculator, and Python Code Interpreter. You can also create custom plug-ins based on specific requirements.
    
    > For more information, see [Plugin overview](/help/en/model-studio/plug-in-overview#00edef12dc50q).
    

## Publish the application

After you publish an application, it can be called using an API or shared with RAM users under the same Alibaba Cloud account on a web page. You can click the **Publish** button in the upper-right corner of the agent application management page.

### Call using an API

On the **Sharing Channels** tab of the workflow application, you can click **API Call** to view the method for calling the agent application using an API.

> Note: You must replace YOUR\_API\_KEY with your API key to initiate the call.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7234755471/p893618.png)

The following section answers common questions about API calls:

-   For more information about call methods (HTTP/SDK), see [Application call](/help/en/model-studio/application-calling-guide#8219e0c236wra).
    
-   For more information about the detailed parameters of the call interface, see [Application call parameter information](/help/en/model-studio/dashscope-api-reference/).
    
-   For more information about call parameter passing issues, see [Pass-through of application parameters](/help/en/model-studio/pass-through-of-application-parameters).
    
-   For more information about call error messages, see [Error messages](/help/en/model-studio/error-code) for solutions.
    
-   The application itself does not have a concurrency limit. The limit is mainly related to the model that you call internally. For more information about the models, see [Model list](/help/en/model-studio/models#9f8890ce29g5u).
    
-   Currently, you cannot call the Xiyan service in a workflow. You can call a custom API service using the API node.
    

**Note**

The API call timeout is 300 seconds and cannot be modified.

### **Other call methods (conversational workflow applications)**

For more information about other sharing methods, see [Application sharing](/help/en/model-studio/share-an-application).

## **View workflow application versions**

1.  Click **Publish** in the upper-right corner of the workflow configuration page. In the publish dialog box, enter the version information, such as 1.0.0, and then click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p906387.png)

2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p906393.png) icon at the top of the page. In the **History** panel, you can view or use different versions of the current workflow application as needed by clicking **Use this version** or **Return to current canvas**.
    
    > You can also click **Export this version in DSL** at the top to export the DSL of the selected historical version of the workflow.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0096637371/p906451.png)

3.  **Optional**: View or search for the current canvas node in the toolbar.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2117701471/p910532.png)

## **Delete and copy workflow applications**

You can find the published application card in **Application Management** and perform operations such as **deleting and copying workflows, and modifying application names** under **More** > **Copy Application/Delete Application**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0264755471/p921165.png)

## **FAQ**

## Workflow application related

**How can I write the results of a workflow run to a database?**

You can use a Script Conversion node to write the content of the previous node to a database.

**How can I upload a file when building a workflow application in Alibaba Cloud Model Studio?**

You can add an API node to the workflow application to implement the file upload feature.

**How can I upload an image?**

You can use a VL model and pass the image URL in a specified parameter.

**Can I use an asynchronous task API in a workflow application?**

The timeout for a workflow application is 300 seconds. We do not recommend that you use an asynchronous task API in the flow.

**How can the frontend call the API and stream the output in an Alibaba Cloud Model Studio workflow?**

Frontend calling is not currently supported.

**Why can't I import a standalone .yaml file into an Alibaba Cloud Model Studio workflow?**

Importing a standalone .yaml file is not supported. You must provide a compressed package that contains an md5 file. We recommend that you regenerate the MD5.

**Can variable names in an Alibaba Cloud Model Studio workflow be in Chinese?**

Variable names cannot be in Chinese.

**How is conversation history stored?**

Workflow applications save data for only one month. You must save conversation records yourself. The session\_id is valid for one hour.

## Node related

**Why does an error occur when the Intent Classification node with context enabled is running?**

If the Intent Classification node has context enabled, the variable that you pass to this node must be of the List type.

**Why does an error occur when I use the API call node with streaming output?**

The API node in a workflow does not support streaming output, but the HTTP API itself does. We recommend that you use an agent orchestration application to call other agent applications to achieve streaming return results.

**How can I handle the slow response speed of the Conditional Judgement node in an Alibaba Cloud Model Studio workflow?**

1.  Check the workflow configuration. Ensure that each node in the workflow is configured correctly, especially the Conditional Judgement node. Avoid unnecessarily complex calculations or data processing, which can increase the response time.
    
2.  Optimize the code logic. If a custom script is used for the condition judgement, try to optimize the script logic and reduce unnecessary loops or data processing to improve execution efficiency.
    
3.  Perform a batch test. Test the average response time of the current workflow to determine whether there are performance bottlenecks under specific conditions.
    

**How can an LLM node stream the thinking process?**

You must add a Text Conversion node after the LLM node, configure the `reasoning_content` variable, and enable the return result switch. The return condition must be received by the End node.

**Why can't I customize the output parameters of an LLM node?**

1.  Use a script node to process the output. Add a script node after the LLM node to process its output. This lets you convert the output to your required format or add output parameters.
    
2.  Configure a Batch node: If you use an LLM node in a Batch node, you can select the output of the LLM node as the final output in the Batch node configuration. The specific steps are as follows:
    
    -   Add an LLM node to the Batch node.
        
    -   In the Batch node configuration, select the output of the LLM node as the final output `resultList`.
        

For more information, see [Pass-through of application parameters](/help/en/model-studio/pass-through-of-application-parameters).

**Why does a workflow API call node have no return result and have parameter passing issues?**

Confirm that the API key and base URL are correct. Confirm that the input parameters are configured correctly, adjust the field input type, and use model observation to view model usage details.

**Why am I having issues calling Excel data from the knowledge base?**

You cannot directly call local files. You can implement local calls using MCP. You must process the text content from the knowledge base node output yourself. We recommend that you add an LLM to convert the table before you pass it to the script for processing.
