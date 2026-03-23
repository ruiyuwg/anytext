Get an API key to call models and applications.

## Get an API key

**Important**

Use your [Alibaba Cloud account](/help/en/model-studio/permission-management-overview#24ca2dad7djzs) or a [RAM user](/help/en/model-studio/permission-management-overview#24ca2dad7djzs) with `administrator` or `API-Key` [page permissions](/help/en/model-studio/member-management#febd776ce5lbx).

1.  Go to the [Alibaba Cloud Model Studio console](https://modelstudio.console.alibabacloud.com/), select your target region in the upper-right corner. Go to the [API key](https://modelstudio.console.alibabacloud.com/?tab=playground#/api-key) page and click **Create API Key**.
    
2.  In the pop-up window, configure the following settings and click **OK**:
    
    -   **Owner Account**: Select the Alibaba Cloud account (digit-only ID in the **Account** column).
        
    -   **Workspace**: Select the default workspace.
        
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2182544571/p994217.png) icon next to the API key to copy it.
    
    > Root accounts can view all API keys. RAM users can only view keys they created.
    
    ![2026-02-11_11-56-27](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8027380771/p1054137.jpg)
    

**When should you choose a different account or workspace?**

For team collaboration or cost allocation:

-   **Owner Account**: To bind a key to a specific member, select the corresponding RAM user. If the user is removed from the workspace, the key becomes invalid.
    
-   **Workspace**: Workspaces isolate resources and permissions for different projects or teams. To control model access or split billing, create a sub-workspace and select it from the list.
    

See [Permission management](/help/en/model-studio/permission-management-overview) and [Billing and cost management](/help/en/model-studio/bill-query-and-cost-management).

## Use API keys

**Note**

[Coding Plan](/help/en/model-studio/coding-plan) requires a dedicated API key (format: `sk-sp-xxxxx`), not the general Model Studio API key (format: `sk-xxxxx`). For the dedicated API key and base URL, see [Get your plan-specific API key and base URL](/help/en/model-studio/coding-plan-quickstart#2782cf93b1w8h).

-   **Method 1: Call models in** [**third-party tools**](/help/en/model-studio/use-chat-client-or-development-tool/)**.**
    
    If you use a tool such as Chatbox to call a model, you typically need:
    
    -   The API key from this topic
        
    -   The base URL for the region where the API key was created:
        
        -   **Singapore**: `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`
            
        -   **US (Virginia)**: `https://dashscope-us.aliyuncs.com/compatible-mode/v1`
            
        -   **China (Beijing)**: `https://dashscope.aliyuncs.com/compatible-mode/v1`
            
        -   **China (Hong Kong)**: `https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1`
            
        -   **Germany (Frankfurt)**: `https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1`. Replace `{WorkspaceId}` with your actual [Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#d3eb3cd37b7fu).
            
    -   The model name, such as qwen-plus
        
    
    Set up developer tools: [Chatbox](/help/en/model-studio/chatbox), [Cline](/help/en/model-studio/cline), [Claude Code](/help/en/model-studio/claude-code), [Dify](/help/en/model-studio/dify), [OpenClaw (formerly Clawdbot/Moltbot)](/help/en/model-studio/openclaw), [Postman](/help/en/model-studio/first-call-to-image-and-video-api), [Qwen Code](/help/en/model-studio/qwen-code).
    
-   **Method 2: Call models in code**
    
    [Call the Qwen API](/help/en/model-studio/first-api-call-to-qwen) in code. [Set the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables) to avoid hardcoding it in source code.
    

Never share your API key publicly. Unauthorized use can cause security breaches or financial loss.

## API key permissions

An API key’s permissions are determined by its **workspace**. **All API keys in the same workspace share identical permissions**. You do not need separate keys for different model types (such as text-to-text, text-to-image, speech synthesis).

-   **Default workspace API key:** You can use this API key to call all [standard models](/help/en/model-studio/models) and [applications](/help/en/model-studio/application-introduction) in the default workspace.
    
-   **Sub-workspace keys:** can call standard models that the sub-workspace has been [granted access to](/help/en/model-studio/use-workspace#f2e68d7ba7ubk), and applications within that sub-workspace.
    

**Note**

Fine-grained access control for API keys is currently supported only in the [China (Beijing) region](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/api-key):

-   Specify an IP address whitelist to restrict which IP addresses can use this API key.
    
-   Configure model-level authorization to limit this API key’s access to specific models.
    

## API key validity

API keys remain valid permanently unless deleted manually.

To grant temporary access to third-party applications or users, or to control high-risk operations such as accessing or deleting sensitive data, [generate a temporary API key](/help/en/model-studio/generate-temporary-api-key) (valid for 60 seconds). This avoids exposing long-term API keys and reduces leak risk.

## FAQ

**Q**: How many API keys can I create under one Alibaba Cloud account?

A: Each Alibaba Cloud account supports up to 10 workspaces (including the default workspace), and each workspace supports up to 20 API keys.

**Q**: If a RAM user is deleted, are the API keys they created still usable?

A: After you [disable or delete a RAM user](/help/en/ram/user-guide/delete-a-ram-user) in the RAM console, all API keys created by the user become invalid and can no longer be used to call models.
