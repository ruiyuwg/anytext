This topic describes how to quickly deploy OpenClaw (Clawdbot) on the **Elastic Desktop Service** (EDS) Enterprise Edition.

## **Preparations**

-   **Accounts and permissions:** Activate an [Alibaba Cloud account](/help/en/account/sign-up-with-alibaba-cloud), and complete your personal information.
    

## **Create and log on to a cloud computer**

The following steps describe how to deploy a cloud computer that includes the OpenClaw (Clawdbot) service. For more configuration options and parameter descriptions, see [Create a Cloud Desktop](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3).

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  Click **Create Cloud Computer** and select **Custom Purchase**.
    
3.  For **OS**, select **Community Image**, then select the `OpenClaw` image.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3230413771/p1058457.png)
    
    **Note**
    
    -   This image is currently supported in the China (Hangzhou), China (Beijing), China (Shanghai), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Thailand (Bangkok), Germany (Frankfurt), and US (Virginia) regions.
        
    -   Select a 4 vCPU/8 GiB memory or higher computing specification.
        
    
4.  Complete other configurations. For related configuration items and descriptions, see [Create a Cloud Desktop](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3).
    
5.  After the cloud computer is created and [is allocated to users](/help/en/wuying-workspace/user-guide/assign-cloud-computers-to-end-users), go to the client to [log on to the cloud computer](/help/en/wtc/getting-started/end-user-quick-start#sc-enterprise-signin).
    
    **Note**
    
    -   If you have not created a user, see [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user#task-2071329) or [Create and manage enterprise AD accounts](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users#task-1987654) to create an account for the user.
        
    -   If you have not installed the client, go to the [Alibaba Cloud Workspace client](https://www.alibabacloud.com/zh/product/cloud-desktop/download-client) to download the required client. macOS, Windows, Android, and iOS clients are supported.
        
    

## **Configure the OpenClaw Environment**

1.  On the cloud computer, open the OpenClaw configuration panel.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3230413771/p1058328.png)
    
2.  Go to the model settings and configure your API key. The default model is provided by the Alibaba Cloud Model Studio Coding Plan and uses the `qwen3.5-plus` model. Subscribe to the [Alibaba Cloud Model Studio Coding Plan](https://www.aliyun.com/benefit/scene/codingplan?spm=a2c4g.11186623.0.0.538536a3XAWqs3) to use the service with a monthly call quota paying a fixed monthly fee. After you purchase the plan, go to the [Coding Plan API Key management page](https://modelstudio.console.alibabacloud.com/cn-beijing/?spm=a2c4g.11186623.0.0.538536a3XAWqs3&tab=globalset#/efm/coding_plan) to generate and save your API key.
    
    **Note**
    
    The Alibaba Cloud Model Studio Coding Plan currently supports models such as qwen3.5-plus, kimi-k2.5, MiniMax-M2.5, and glm-5. For the complete list of supported models, see [Supported models for Coding Plan](/help/en/model-studio/coding-plan#dc0d98da6ev4j). You can select any one of these models. You cannot specify more than one model.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0400162771/p1051240.png)
    
3.  (Optional) Click **Add Model** below to configure a different model. To add an Alibaba Cloud Model Studio Large Language Model, do the following:
    
    1.  Go to the [Alibaba Cloud Model Studio console](https://modelstudio.console.alibabacloud.com/?tab=model#/model-market) and click **Dashboard** in the upper-left corner.
        
    2.  In the navigation pane on the left, choose [Key Management](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key), and click **Create API Key**.
        
        **Note**
        
        -   The API key starts with `**sk-**`.
            
        -   After you configure the API key, using OpenClaw will incur model call fees. To avoid unexpected fees, promptly check the billing details of the models you use.
            
        -   After creating the API key, go to Key Management and click the copy icon to copy it.
            
        
    3.  Complete the parameter settings:
        
        -   **Model Name**: See [Models](/help/en/model-studio/models) for a name, such as `qwen3-max-2026-01-23`.
            
        -   **BASE URL**: `https://dashscope.aliyuncs.com/compatible-mode/v1`.
            
        -   **API Key:** Enter the API key created in the previous step.
            
    4.  Click **Test Connection**. After the test passes, click **Save and Set as Default**.
        

## **Integrate IM software (Channel Settings)**

In Channel settings, select the desired IM software to integrate it. Because the image encapsulates the necessary integration features, you only need to configure the required keys without additional development or deployment work.

### **Integrate DingTalk**

Through the DingTalk application and chatbot, users can converse with the chatbot to enable OpenClaw to complete tasks. Integration mainly includes the following steps:

-   Create a DingTalk application.
    
-   Retrieve the DingTalk application's **Client ID** and **Client Secret**, and connect these security credentials with OpenClaw in the cloud computer.
    
-   Create and integrate a DingTalk chatbot to enable real-time interaction with users.
    

For detailed steps, see [Develop a DingTalk Enterprise Chatbot](https://open.dingtalk.com/document/dingstart/robot-application-overview).

### **Integrate QQ**

Through the QQ chatbot and QQ channels, users can converse with the chatbot via QQ to enable OpenClaw to complete tasks. Integration mainly includes the following steps:

-   Create a QQ chatbot.
    
-   Retrieve the QQ chatbot's **AppID**, **Token**, and **AppSecret**, and connect these security credentials with OpenClaw in the cloud computer.
    
-   Create a QQ channel and add the chatbot.
    
-   Configure network communication between the QQ chatbot sandbox environment and OpenClaw in the cloud computer.
    

For detailed steps, see [QQ Chatbot Official Documentation](https://bot.q.qq.com/wiki/develop/api-v2/)

### **Integrate Lark**

Through the Lark application and chatbot, users can converse with the chatbot via Lark to drive OpenClaw to complete tasks. Integration mainly includes the following steps:

-   Create a Lark application and connect it with OpenClaw in the cloud computer using security credentials.
    
-   Configure the Lark application and chatbot.
    
-   Retrieve the Lark chatbot pairing code and approve it in OpenClaw.
    

For detailed steps, see [Lark Developer Documentation](https://open.feishu.cn/document/home/index).

## **Skills provided by the image**

For details about the skills provided in the image, see [Skills](https://docs-lincore.wuying.com/zh/docs/guide/openclaw/skill-list/).
