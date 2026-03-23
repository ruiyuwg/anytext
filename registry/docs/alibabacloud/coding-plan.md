Monthly subscription for AI coding tools — top models at fixed, predictable pricing.

## **Plan details**

**Note**

Effective March 20, 2026 at 00:00:00 (UTC+8), the Lite plan will no longer accept new subscriptions. Existing subscribers retain full access to usage, renewal, and upgrade options. [Announcement](https://www.alibabacloud.com/zh/notice/detail?_p_lc=1&id=1781)

**Pro**

Models

Recommended: **qwen3.5-plus** (vision), **kimi-k2.5** (vision), **glm-5**, **MiniMax-M2.5**

More: qwen3-max-2026-01-23, qwen3-coder-next, qwen3-coder-plus, glm-4.7

Pricing

**$50**/month

Quota

-   **6,000** requests per 5 hours
    
-   **45,000** requests per week
    
-   **90,000** requests per month
    

**Quota usage:** Each query consumes quota based on model invocations. Simple tasks use ~5-10 invocations, complex tasks use 10-30+. Usage varies by task complexity, context length, and tool usage. Check your usage on the [Coding Plan page](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan).

## **Getting started**

### **Step 1: Subscribe to Coding Plan**

Go to the [Coding Plan page](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan), select a plan, and complete the purchase.

Subscribe directly with your Alibaba Cloud account. RAM users require authorization first.

**Steps to authorize a RAM user**

1.  **Add a user:** Log on to Alibaba Cloud Model Studio with your Alibaba Cloud account. Go to the [Permissions](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=app#/authority) page for your target workspace. Click **Add User** to add the RAM user. Enter a username and click **OK**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9842172771/p1057319.png)
    
2.  **Grant permissions:** Click **Permissions** to the right of the user. Add **Administrator** and click **Confirm**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9842172771/p1057328.png)
    

### **Step 2: Get your plan-specific API key and base URL**

Get and configure your plan's API key and base URL to ensure its quota is deducted correctly.

-   **API key:** Go to the [Coding Plan page](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan) to get your plan-specific API key, in the format of `sk-sp-xxxxx`.
    
-   **Base URL:** Use one of the following base URLs depending on your tool. For detailed instructions, see the corresponding documentation.
    
    -   **OpenAI compatible:** `https://coding-intl.dashscope.aliyuncs.com/v1`
        
    -   **Anthropic compatible:** `https://coding-intl.dashscope.aliyuncs.com/apps/anthropic`
        

**Note**

The API key and base URL for Coding Plan differ from the API key (`sk-xxxxx`) and base URL (`https://dashscope-intl.aliyuncs.com/xxxxxx`) for Model Studio's pay-as-you-go service. Do not use them interchangeably.

### **Step 3: Choose an AI tool**

[**OpenClaw** Open-source, self-hosted personal AI assistant](/help/en/model-studio/openclaw-coding-plan)

[**OpenCode** Open-source AI coding agent](/help/en/model-studio/opencode-coding-plan)

[**Claude Code** AI terminal coding assistant with natural language support](/help/en/model-studio/claude-code-coding-plan)

[**Codex** Command-line coding tool from OpenAI](/help/en/model-studio/codex-coding-plan)

[**Cline** VS Code extension with intelligent code completion and debugging](/help/en/model-studio/cline-coding-plan)

[**Cursor** AI-native code editor](/help/en/model-studio/cursor-coding-plan)

[**Qwen Code** Open-source command-line AI tool optimized for Qwen3-Coder](/help/en/model-studio/qwen-code-coding-plan)

[**Kilo Code** IDE extension for efficient coding](/help/en/model-studio/kilo-code-coding-plan)

[**Kilo CLI** Lightweight, high-performance command-line coding tool](/help/en/model-studio/kilo-cli-coding-plan)

For more tools (such as other IDEs), see [Other tools](/help/en/model-studio/other-tools-coding-plan).

## **Before you subscribe**

Coding Plan is **non-refundable**. Review these points before subscribing:

1.  **No API calls:** Use Coding Plan only in coding tools like Claude Code or OpenClaw. Do not use it for automated scripts, custom application backends, or non-interactive batch API calls. **Using your Coding Plan API key outside the allowed scope constitutes misuse or abuse. Your subscription may be suspended, or your API key may be revoked.**
    
2.  **Account policy:** Coding Plan is for the subscriber's personal use only. Account sharing is prohibited and may result in subscription suspension.
    

## FAQ

### I purchased Coding Plan. Why am I still being charged or seeing overdue payments?

This typically happens if you're using the general Model Studio API Key and Base URL instead of Coding Plan's. Switch to your Coding Plan exclusive API key (starts with `sk-sp-`) and Base URL (contains `coding.dashscope.aliyuncs.com`). For setup steps, see [Get your plan-specific API key and base URL](#2531c37fd64f9).

For more questions, see [full FAQ](/help/en/model-studio/coding-plan-faq).
