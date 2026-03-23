Connect Kilo Code to Model Studio's Coding Plan API.

Kilo Code works with VS Code (including Cursor and Trae) and JetBrains IDEs (IntelliJ IDEA, PyCharm). See [the official docs](https://kilo.ai/docs/code-with-ai) for more details.

## VS Code

1.  In VS Code, open Extensions, search for Kilo Code, and install it (trust the publisher when prompted). After installation, open Kilo Code from the sidebar.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2768980771/p1054374.png)
    
2.  Select Bring my own Key.
    
    ![截屏2026-02-12 18](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2768980771/p1054375.png)
    
3.  Enter the following settings:
    
    -   **API Provider**: OpenAI Compatible
        
    -   **Base URL**: `https://coding-intl.dashscope.aliyuncs.com/v1`
        
    -   **API Key**: Your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan) (format: `sk-sp-xxxxx`).
        
    -   **Model**: Enter a [supported model](/help/en/model-studio/coding-plan-overview) and click Use custom.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2768980771/p1054379.png)
    
    Click **Save**.
    
4.  Start using Kilo Code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2768980771/p1054383.png)
    

## JetBrains

1.  In a JetBrains IDE, open Plugins, search for `Kilo Code`, and install it.
    
    ![2026-02-25_20-58-38](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340222771/p1054922.jpg)
    
2.  After installation, restart the IDE. Click the icon on the right, then click **Bring my own Key** and enter the following settings.
    
    > If you previously used Kilo Code, click the settings icon in the upper-right corner.
    
    -   **API Provider**: OpenAI Compatible
        
    -   **Base URL**: `https://coding-intl.dashscope.aliyuncs.com/v1`
        
    -   **API Key**: Your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan) (format: `sk-sp-xxxxx`).
        
    -   **Model**: Enter a [supported model](/help/en/model-studio/coding-plan-overview) and click Use custom.
        
    
    Click **Save** in the upper-right corner.
    
    ![2026-02-27_11-36-24](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340222771/p1055243.jpg)
    
3.  Start using Kilo Code. To switch models, click the gear icon in the upper-right corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340222771/p1055242.png)
