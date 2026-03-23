Large language models (LLMs) cannot directly access proprietary knowledge bases or retrieve real-time dynamic information. To address this bottleneck, Alibaba Cloud Model Studio provides agent applications. An agent lets you integrate an LLM with external tools without writing any code, which extends the model's capabilities.

**Important**

-   **Console restrictions:** Only **International Edition users** who created applications before **April 21, 2025** can access the **Application Development** tab, as shown in the following figure.
    
    > This tab contains the following features: Applications ([agent application](/help/en/model-studio/single-agent-application) and [workflow application](/help/en/model-studio/workflow-application/)), Components ([prompt engineering](/help/en/model-studio/prompt-template) and [plug-in](/help/en/model-studio/plug-in-overview#undefined)), and Data ([knowledge base](/help/en/model-studio/rag-knowledge-base) and [application data](/help/en/model-studio/data-import-instructions)). **These are all preview features. Use them with caution in production environments.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0799390671/p1017153.png)
    
-   **API call limits:** Only **International Edition users** who created applications before **April 21, 2025**, can call the [application data, knowledge base, and prompt engineering APIs](/help/en/model-studio/api-bailian-2023-12-29-dir/).
    

## **Basic principles**

An agent is driven by a prompt and completes complex tasks by coordinating multiple external capabilities. After receiving a request, the LLM performs intention recognition and task planning. It then makes autonomous decisions and calls one or more external capabilities to execute the task. Finally, it integrates the information to generate a response.

Model Studio agents support the following core capabilities:

1.  **Knowledge base**: Connects to external knowledge bases. This allows the application to answer questions based on private data and solves the problem of LLMs being unable to access specific information.
    
2.  **Plug-in**: Calls pre-built efficiency tools on the platform, such as tools for code execution, image generation, and weather queries.
    

## **Quick start**

### Create a basic agent

1.  Go to the [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) page in the Model Studio console. Click **\+ Create Application**. On the **Agent Application** tab, click ****Create Now****.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1005328.png)
    
2.  On the application configuration page, select a model from the model selection drop-down menu, such as `Qwen-Plus`. You can keep the default settings for other parameters if you have no specific requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1009431.png)
    
3.  After the application is created, enter `Hello` in the dialog box on the left to test it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1005360.png)
    

## Agent capabilities

Alibaba Cloud Model Studio agent applications can be extended by selecting models, optimizing system prompts, adding RAG, and calling plug-ins.

### Model

The model is the core that drives the agent to think, infer, and make decisions. Model Studio agents support Qwen models.

1.  **Select a model**
    
    From the model selection drop-down menu, select a model, such as `Qwen-Plus`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1009459.png)
    
    Click **More Models** to select other models.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1009462.png)
    
2.  **Configure parameters**
    
    Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1007468.png) to the right of the model drop-down list to select and configure parameters. The supported parameters are as follows:
    
    1.  **Maximum Response Length**: The length limit for the model's generation, excluding the prompt. The maximum allowed length varies by model.
        
    2.  **Context Turns**: Sets the maximum number of historical conversation turns to input to the model. The more turns you include, the stronger the conversational relevance.
        
    3.  **temperature**: Controls the randomness and diversity of the generation. A higher value leads to more diversity, while a lower value leads to more consistency. The value ranges from \[0, 2).
        
    4.  **enable\_thinking**: Specifies whether to enable the thinking mode. Some models that do not support thinking mode do not allow you to configure the enable\_thinking parameter.
        
        > After you enable the thinking mode, the model performs more internal reasoning and context processing when generating a response, which increases token consumption.
        

### System prompt

A system prompt is a meta-instruction preset for the agent. It defines the agent's role, code of conduct, and capability boundaries to ensure consistency, controllability, and task compliance during interactions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1009415.png)

1.  **Configure a prompt**
    
    Set the system prompt to `Please answer my question in the style of "One Hundred Years of Solitude"`. The following is a comparison of the results:
    
    -   Without a system prompt:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1008856.png)
        
    -   Configuring the system prompt
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1008859.png)
        

### **Knowledge base**

Retrieval-augmented generation (RAG) allows an agent to query external knowledge bases and use the most relevant retrieved information as the direct basis for generating answers. When dealing with private knowledge or vertical domain Q&A, RAG can significantly improve the accuracy of the agent's answers and reduce hallucinations. For more information, see [Knowledge base (RAG)](/help/en/model-studio/knowledge-base/).

> The text retrieved by RAG also occupies the large language model's context window. Therefore, you need to adjust the retrieval strategy and text length as needed to make full use of the context window and avoid exceeding its limits.

### **Plug-in**

By calling plug-ins, agent applications can perform specific tasks, such as code execution, web search, and text-to-image generation. Model Studio provides a variety of official plugins and supports adding custom plugins. For more information, see [Plug-in overview](/help/en/model-studio/plug-in-overview#0bbb546d962ms).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1009411.png)

## **Agent interaction**

### **Text conversation**

Text conversation is the core interaction method of agent applications, providing an intelligent and personalized multi-turn conversation experience.

Text conversation supports two main input methods:

1.  **Text input:** Enter text to converse with the agent.
    
2.  **File upload:** Upload files as attachments for the agent. Various formats, such as documents, images, videos, and audio, are supported.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2427319571/p1009444.png)
    

## Publish and call an agent

Model Studio agents support external calls through an API. They also support one-click publishing to third-party platforms and integration into other business processes through components.

### Publish an application

**Important**

Publishing an application is a prerequisite for all subsequent agent application calls and integrations.

Click the **Publish** button in the upper-right corner of the agent application management page, then click **Confirm Publish** to complete the application publishing.

> If the application is not being published for the first time, a pop-up window will show the changes since the last publication.

**Note**

If the application was created by a RAM account, confirm that you have the service-linked role permission `ram:CreateServiceLinkedRole` before publishing. For more information, see [Service-linked Role](/help/en/model-studio/bailian-service-linked-role).

### **Call through an API**

On the **Publish Channels** tab of the agent application, click **View API** to the right of **API Call** to see the methods for calling the agent application through an API.

> Replace YOUR\_API\_KEY with your Model Studio API key to invoke the API.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8886625471/p911660.png)

## **Agent management**

### Delete and copy

You can find the published application card in **Application Management**. In the **More** > **Copy Application/Delete Application** menu, you can **delete or copy the agent, or modify the application name**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6765685471/p921163.png)

### **Version management**

Through the version management feature, you can edit historical version descriptions, or select and use previously published historical versions.

1.  On the **Application Configuration** tab of the agent application, click **Version Management** in the upper-right corner of the top navigation bar.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6765685471/p934802.png)
    
2.  In the list of historical versions, select the target version:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6849833471/p934803.png)
    
    -   To modify the version information, hover your mouse over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6849833471/p934804.png) icon and click it. In the **Edit Version Description** dialog box, make changes as needed, and then click **OK**.
        
    -   To use this historical version, click **Overwrite Current Draft**, and then click **Confirm** in the confirmation dialog box.
        
        > The content of this historical version will overwrite the current draft content.
        
    

## Billing

The billing for agent features mainly includes the following aspects:

1.  **Model calls**
    
    Agents incur model call fees. The specific fees depend on the model type and the number of input and output tokens.
    
    For specific model types and corresponding billing rules, see [Models](/help/en/model-studio/models).
    
2.  **Knowledge base**
    
    1.  The knowledge base feature is free for a limited time.
        
    2.  Text segments retrieved from the knowledge base increase the number of model input tokens, which may lead to an increase in model inference (call) fees. For more information, see [Knowledge base billing](/help/en/model-studio/rag-knowledge-base#bb7f7287f29ak).
        

## **Supported models**

**Note**

Data updates may be delayed. The list of supported models is subject to what is displayed within the agent application.

-   [Qwen-Plus](/help/en/model-studio/models#03a05ab98953u)
    
-   [Qwen-Max](/help/en/model-studio/models#b00bc62972qtn)
    
-   [QwenVL-Max](/help/en/model-studio/models#88a4ba679cay7)
    
-   [QwenVL-Plus](/help/en/model-studio/models#4dfc2e52fams1)
    
-   [Qwen-Turbo](/help/en/model-studio/models#218847c4b35vb)
    

## **FAQ**

How are Model Studio applications billed?

Creating an application does not incur fees. However, if you call the application for Q&A, model call fees will be charged based on the type of model called.

I configured a knowledge base, but the agent's answers are not related to the knowledge base content. How can I solve this?

1.  First, perform a knowledge base hit test to check the similarity score between the question and the knowledge base content. If the score is low, try optimizing the retrieval configuration to ensure that the model prioritizes retrieving answers from the knowledge base.
    
2.  Add a restriction in the prompt skill settings, requiring the model to answer only based on the knowledge base content and avoid using the large language model's own knowledge to generate replies.
    
3.  If the problem persists, it may be due to the characteristics of the model itself. We recommend trying other models to obtain more stable output.
    

Is there a timeout limit for custom plug-ins?

Yes, there is. The timeout limit is 5 seconds.

Can I create agent applications through an API?

You can use the assistant API to create large language model applications, whose functions are similar to agent applications. However, applications created by the assistant API **cannot be managed in the console**. For more information, see the [Assistant API documentation](/help/en/model-studio/assistant-api/).
