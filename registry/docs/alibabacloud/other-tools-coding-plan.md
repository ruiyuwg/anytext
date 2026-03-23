Connect third-party coding tools or IDE extensions to Coding Plan using the OpenAI or Anthropic-compatible protocol.

## **Compatible protocols**

Configure one of the following API protocols to connect your coding tool to Coding Plan.

> Use your API key only in interactive coding tools such as Claude Code or OpenClaw. Do not use it in automated scripts, application backends, or non-interactive batch processes. **Using your API key outside the allowed scope may result in your subscription being paused or your API key being revoked.**

-   **OpenAI compatible:**
    
    -   **Base URL**: `https://coding-intl.dashscope.aliyuncs.com/v1`
        
    -   **API Key**: Enter your Coding Plan-specific [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan).
        
    -   **Model**: See [Coding Plan overview](/help/en/model-studio/coding-plan-overview#b01f82a4218kx).
        
-   **Anthropic compatible:**
    
    -   **Base URL**: `https://coding-intl.dashscope.aliyuncs.com/apps/anthropic`
        
    -   **API Key**: Enter your Coding Plan-specific [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan).
        
    -   **Model**: See [Coding Plan overview](/help/en/model-studio/coding-plan-overview#b01f82a4218kx).
        

The following example shows how to connect CoPaw with the OpenAI compatible protocol.

1.  Start CoPaw. In the left navigation pane, go to **Settings** > **Models**. Click **Add Provider**. Enter any **Provider ID** and **Display Name** you like, and set **Default Base URL** to the OpenAI-compatible Base URL.
    
    ![2026-03-02_10-23-14](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7190242771/p1055640.jpg)
    
2.  Click **Settings** to enter your Coding Plan-specific [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan). Click **Models** to add the [supported models](/help/en/model-studio/coding-plan-overview#b01f82a4218kx).
    
    ![2026-03-02_10-35-39](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7190242771/p1055644.jpg)
    
3.  In the **LLM Configuration** section at the top, select the provider you added, choose a model, and click **Save** to start a conversation.
    
    ![2026-03-02_10-46-48](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7190242771/p1055647.jpg)
    

> For more details, see the [CoPaw official documentation](https://copaw.agentscope.io/docs/console#Cloud-providers).

## Unsupported tool types

Coding Plan is designed for AI coding tools and OpenClaw-type agents only. The following tool types are **not supported**:

-   **Workflow or automation platforms**: such as Dify, n8n, or Coze.
    
-   **API testing tools**: such as Postman or Insomnia.
    
-   **Custom applications**: such as automated scripts or application backends that make direct API calls.
    

> Using your API key outside the allowed scope may result in your subscription being paused or your API key being revoked.

## Use in IDE

**Note**

Some coding tools, such as Tongyi Lingma Individual Edition, Cursor Free Plan, Trae, and Qoder, do not support custom endpoints and cannot connect directly to Coding Plan.

To use Coding Plan in a VS Code-based IDE (such as Cursor or Trae) or a JetBrains IDE (such as IntelliJ IDEA or PyCharm), install one of the following:

-   [Claude Code IDE extension](/help/en/model-studio/claude-code-ide-plugin-coding-plan)
    
-   [Kilo Code](/help/en/model-studio/kilo-code-coding-plan)
    
-   [Qwen Code IDE extension](/help/en/model-studio/qwen-code-coding-plan#e5a1d71a00jtx)
