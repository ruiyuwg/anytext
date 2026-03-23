Building large language model (LLM) applications often requires creating similar prompts for different scenarios, a process that can be time-consuming and difficult to maintain. Prompt templates solve this problem by separating the fixed structure of a prompt from its dynamic variables. This lets you create reusable templates so you can manage, optimize, and generate prompts efficiently.

**Important**

This topic is applicable only to the International Edition (Singapore region).

## **Workflow**

1.  **Create a template**: Create and save a template in the Alibaba Cloud Model Studio console or using an API to obtain a unique template ID.
    
2.  **Retrieve the template**: Use the API and the template ID to retrieve the template content.
    
3.  **Generate the prompt**: Populate the template variables with business data to generate the final prompt.
    
4.  **Use the template**: Send the generated prompt to the target model to obtain a result.
    

## Template types

Prompt templates are divided into [pre-built prompt templates](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market/prompt) and [custom prompt templates](https://modelstudio.console.alibabacloud.com/?tab=app#/component-manage/prompt).

**Dimension**

**Pre-built Prompt Template**

**Custom Prompt Template**

**Source**

Provided by Model Studio. They cover multiple business scenarios.

[You can create custom templates in the console or using an API](#dbf41d0b57qd1)

**Effectiveness**

Optimized for stable performance.

Designed and tested by users. The effectiveness depends on the design quality.

**Ease of use**

No extra development is needed. You can call them directly from the console or using an API.

You may need to optimize them through several iterations. This requires an understanding of [prompt design principles and optimization methods](/help/en/model-studio/prompt-engineering-guide), such as using clear instructions, providing examples, and applying format constraints. You also need some development and technical skills.

**Scenarios**

-   For general scenarios, such as creative copywriting and office assistance.
    
-   For users with little experience in prompt design.
    

-   For complex or specific business scenarios, such as financial risk control and medical consultation.
    
-   For scenarios that require strict output formats, such as JSON or lists.
    

**Modifiable**

No.

Yes, as needed.

### **Pre-built prompt templates**

#### **1\. View templates**

Go to the [Prompts](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market/prompt) page to view and use the pre-built prompt templates that Model Studio provides for different scenarios.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8929073671/p950410.png)

#### **2\. View and manage templates**

**View**: Click **View Details** on a template card to view the template's name, content, variables, and ID.

**Manage**:

-   Click **Copy Prompt** to copy the template content.
    
-   Click **. . .** > **Create Application**. The template content is automatically populated in the prompt editor of the **Agent Application**. You can use it directly or modify it for your business scenario.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8929073671/p950437.png)
    
-   Click **. . .** > **Copy Template**. A custom prompt template named "Pre-built Template Name\_Copy\_Timestamp" is created on the [Prompts](https://modelstudio.console.alibabacloud.com/?tab=app#/component-manage/prompt) page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8929073671/p950501.png)
    

### **Custom prompt templates**

#### **1\. Create a template**

You can create custom prompt templates in the **console** or using an **API**.

#### **Console**

-   **Modify a pre-built prompt template**
    
    On a [pre-built prompt template](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market/prompt) card, click **. . .** > **Copy Template**. A custom prompt template named "Pre-built Template Name\_Copy\_Timestamp" is created.
    
-   **Create a template based on business requirements**
    
    On the **[Prompts](https://modelstudio.console.alibabacloud.com/?tab=app#/component-manage/prompt)** page, click **Create Prompt**. After you complete the configurations, click **Save** to create the template. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8929073671/p935584.png)
    

#### **API**

1.  **Obtain a workspace ID**: For more information, see [Get an APP ID and a Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id).
    
2.  **Create a custom prompt template**: Use the [CreatePromptTemplate](/help/en/model-studio/api-bailian-2023-12-29-createprompttemplate) API.
    

#### **2\. View and manage templates**

**View**: After you create a custom prompt template, you can view it on the [Prompts](https://modelstudio.console.alibabacloud.com/?tab=app#/component-manage/prompt) page.

**Manage**:

-   Click **Modify** on a template card to modify the template content.
    
-   Click **Copy Prompt** to copy the template content.
    
-   Click **. . .** > **Create Application**. The template content is automatically populated in the prompt editor of the **Agent Application**. You can use it directly or modify it for your business scenario.
    
-   Click **. . .** > **Copy Template**. A custom prompt template named "Custom Template Name\_Copy\_Timestamp" is created on the current page.
    
-   Click **. . .** > **Delete** to delete the created template.
    

## **Use prompt templates**

## Console

1.  On a pre-built or custom prompt template, click **Use Prompt** > **Create Application**. The template content is automatically populated in the prompt of the agent application.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8929073671/p950437.png)
    
2.  Set a model for the application and enter a question to test the prompt.
    

## API

1.  Go to [GetPromptTemplate](/help/en/model-studio/api-bailian-2023-12-29-getprompttemplate) and click **Debug**.
    
2.  On the **Parameters** tab, enter the workspaceId and promptTemplateId.
    
    -   **workspaceId**: The ID of the workspace. [Get an APP ID and a Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id).
        
    -   **promptTemplateId**: The ID of the prompt template. Get the template ID from the template card.
        
3.  Click **Initiate Call** to debug the API online.
    

## SDK

1.  Go to [GetPromptTemplate](/help/en/model-studio/api-bailian-2023-12-29-getprompttemplate) and click **Debug**.
    
2.  On the **Parameters** tab, enter the workspaceId and promptTemplateId. After you complete the settings, the workspaceId and promptTemplateId are automatically populated in the SDK example.
    
    -   **workspaceId**: The ID of the workspace. [Get an APP ID and a Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id).
        
    -   **promptTemplateId**: The ID of the prompt template. Get the template ID from the template card.
        
3.  On the debug page, click **SDK Sample Code**.
    
4.  You can **run the example** online, or **download the full project** and run it after you set the accessKeyId and accessKeySecret.
    
    > For more information about how to obtain the keys, see [Obtain an AccessKey and an AgentKey](/help/en/model-studio/get-accesskey-appid-and-agentkey).
    

## Error codes

If a call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) to resolve the issue.

## **FAQ**

**Q: What is the difference between calling the** `**GetPromptTemplate**` **API and concatenating strings directly in the code?**

A: The advantages of managing prompts with the `GetPromptTemplate` API are:

-   Separation of logic and content: You can update and optimize prompts in the Model Studio console without modifying or redeploying your application code.
    
-   Centralized management and collaboration: All prompts are stored centrally. This makes it easier for teams, such as prompt engineers and developers, to collaborate, manage versions, and reuse prompts.
    
-   Guaranteed consistency: Ensures that the version and structure of prompts used in different parts of an application or across different services are consistent. This avoids inconsistencies caused by manual maintenance.
