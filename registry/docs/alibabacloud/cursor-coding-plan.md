Use Coding Plan in Cursor.

**Note**

**Cursor Pro or higher** is required for custom models like Coding Plan. Free-tier users will see [an error](#32ef56ca9foo1).

1.  Download and install Cursor from the [official website](https://cursor.com/features).
    
2.  Click ![2026-02-03_16-52-37](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7913570771/p1052115.jpg) → **Cursor Settings** → **Models**.
    
3.  Enable **OpenAI API Key** and enter your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan).
    
4.  Enable **Override OpenAI Base URL** and set it to `https://coding-intl.dashscope.aliyuncs.com/v1`.
    
5.  In the **Add or search model** text box, enter a model name from the [supported models list](/help/en/model-studio/coding-plan-overview), then click **Add Custom Model**.
    
    Replace dots with hyphens: kimi-k2.5 → **kimi-k2-5**, glm-4.7 → **glm-4-7**. Use exact names from [Coding Plan overview](/help/en/model-studio/coding-plan) for other models.
    

Select your model in the chat panel to begin chatting.

> If your model doesn't appear, click **Auto** to disable Auto mode and then select it from the dropdown.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6593441771/p1053933.png)

## **FAQ**

### Q: **Why don't Coding Plan models work in Cursor?**

A: If you see these errors:

1.  The model xxx does not work with your current plan or API key.
    
2.  Named models unavailable. Free plans can only use Auto. Switch to Auto or upgrade plans to continue.
    

Cursor Free only supports Auto mode. Upgrade to **Cursor Pro or higher** to use custom models like Coding Plan.

### "We're having trouble connecting to the model provider" or "Unauthorized User API key"

Check the following:

-   **Verify the model name.** The model may not exist. See [Model list](/help/en/model-studio/models) for supported names.
    
-   **Check for provider conflicts.** After configuring Model Studio's base URL and API key, requests to other providers fail. To switch back, disable or reconfigure **OpenAI API Key** and **Override OpenAI Base URL**.
    
-   **Rule out Cursor compatibility issues.** Some models may not work due to Cursor limitations. Try another model to isolate the issue.
