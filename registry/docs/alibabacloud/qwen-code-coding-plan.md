Set up Coding Plan with Qwen Code CLI and IDE extensions.

## **Install Qwen Code**

### **Install**

## **macOS/Linux**

Install Qwen Code (version `≥ 0.11.1`) in your terminal.

```
bash -c "$(curl -fsSL https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.sh)"
```

Verify installation. A version number confirms successful installation.

```
qwen --version
```

## **Windows**

1.  **Open CMD as an administrator**
    
    In the taskbar search box, type `CMD` and select **Run as administrator**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4604223771/p1058837.png)
    
2.  **Install Qwen Code**
    
    Install Qwen Code (version `≥ 0.11.1`) in CMD.
    
    ```
    curl -fsSL -o %TEMP%\install-qwen.bat https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.bat && %TEMP%\install-qwen.bat
    ```
    
3.  **Verify the installation**
    
    After installation, **close and reopen** `**CMD**` to apply environment variable changes, then verify installation.
    
    ```
    qwen --version
    ```
    

### **Connection settings**

1.  Set up Coding Plan in Qwen Code.
    
    1.  Enter `qwen` to start Qwen Code.
        
        > Run in your project directory.
        
        ```
        qwen
        ```
        
    2.  Use arrow keys (↑ or ↓) to select **Alibaba Cloud Coding Plan** and press Enter.
        
        > If Coding Plan appears by default, skip this step.
        
        > If the chat window appears directly, run `/auth` to open the settings page.
        
        ![2026-03-04_10-10-08](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7213562771/p1056400.jpg)
        
    3.  Select **Alibaba Cloud (alibabacloud.com)** and press Enter. Qwen Code automatically sets the Coding Plan base URL.
        
        ![2026-03-04_10-12-18](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5529962771/p1056410.jpg)
        
    4.  Enter your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan).
        
        ![2026-03-04_10-15-55](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7213562771/p1056414.jpg)
        
2.  Start a conversation in Qwen Code.
    
    ![2026-03-04_10-25-32](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7213562771/p1056418.jpg)
    

### **Common commands**

**Note**

These commands are for the Qwen Code CLI. IDE extensions support a subset only.

**Command**

**Description**

**Example**

`/model`

Switch the model for the current session.

`/model`

`/auth`

Change the authentication method.

`/auth`

`/init`

Analyze the current directory and create a QWEN.md context file for project-level instructions.

`/init`

`/clear`

Clear the terminal and start a new chat session.

`/clear`

`/compress`

Replace chat history with a summary to save tokens.

`/compress`

`/settings`

Open settings to configure the language, theme, and other options.

`/settings`

`/summary`

Generate a project summary from the chat history.

`/summary`

`/resume`

Resume a previous chat session.

`/resume`

`/stats`

Show detailed statistics information for the current session.

`/stats`

`/help`

Show help information for available commands.

`/help` or `/?`

`/quit`

Exit Qwen Code.

`/quit`

For more commands and usage details, see [official Qwen Code documentation](https://qwenlm.github.io/qwen-code-docs/en/users/features/commands/).

## **Switch models (optional)**

Enter `/model` to switch between models supported by Coding Plan.

If your preferred model (like `MiniMax-M2.5` or `glm-5`) isn't listed, update Qwen Code to the latest version.

1.  Enter `/quit` to exit.
    
2.  Update to latest version.
    
    ```
    npm install -g @qwen-code/qwen-code@latest
    ```
    
3.  Restart Qwen Code.
    
    ```
    qwen
    ```
    
4.  Enter `/model` to select new models.
    

## Use Qwen Code IDE extension (optional)

Use Qwen Code extensions in VS Code and JetBrains IDEs for AI-powered coding.

## **VS Code**

Use VS Code version 1.85.0 or later.

1.  In VS Code, search for `Qwen Code Companion` in the extension marketplace and install it.![2026-02-26_19-30-08](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4660222771/p1055147.jpg)
    
2.  Edit or create `settings.json` and replace `YOUR_API_KEY` with your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan). File location:
    
    -   macOS / Linux: `~/.qwen/settings.json`
        
    -   Windows: `C:\Users\your-username\.qwen\settings.json`
        
    
    > If you installed Qwen Code CLI and configured Coding Plan, skip this step. Configuration is automatic.
    
    ```
    {
      "env": {
        "BAILIAN_CODING_PLAN_API_KEY": "YOUR_API_KEY"
      },
      "modelProviders": {
        "openai": [
          {
            "id": "qwen3.5-plus",
            "name": "[Bailian Coding Plan for Global/Intl] qwen3.5-plus",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY",
            "generationConfig": {
              "extra_body": {
                "enable_thinking": true
              }
            }
          },
          {
            "id": "qwen3-coder-plus",
            "name": "[Bailian Coding Plan for Global/Intl] qwen3-coder-plus",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY"
          },
          {
            "id": "qwen3-coder-next",
            "name": "[Bailian Coding Plan for Global/Intl] qwen3-coder-next",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY"
          },
          {
            "id": "qwen3-max-2026-01-23",
            "name": "[Bailian Coding Plan for Global/Intl] qwen3-max-2026-01-23",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY",
            "generationConfig": {
              "extra_body": {
                "enable_thinking": true
              }
            }
          },
          {
            "id": "glm-4.7",
            "name": "[Bailian Coding Plan for Global/Intl] glm-4.7",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY",
            "generationConfig": {
              "extra_body": {
                "enable_thinking": true
              }
            }
          },
          {
            "id": "glm-5",
            "name": "[Bailian Coding Plan for Global/Intl] glm-5",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY",
            "generationConfig": {
              "extra_body": {
                "enable_thinking": true
              }
            }
          },
          {
            "id": "MiniMax-M2.5",
            "name": "[Bailian Coding Plan for Global/Intl] MiniMax-M2.5",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY",
            "generationConfig": {
              "extra_body": {
                "enable_thinking": true
              }
            }
          },
          {
            "id": "kimi-k2.5",
            "name": "[Bailian Coding Plan for Global/Intl] kimi-k2.5",
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "envKey": "BAILIAN_CODING_PLAN_API_KEY",
            "generationConfig": {
              "extra_body": {
                "enable_thinking": true
              }
            }
          }
        ]
      },
      "security": {
        "auth": {
          "selectedType": "openai"
        }
      },
      "codingPlan": {
        "region": "global",
        "version": "b52d5e055670583e6835f2fa5494bdc1b83c6c63516151eaa828774068fccb51"
      },
      "model": {
        "name": "qwen3.5-plus"
      },
      "$version": 3
    }
    ```
    
3.  Click the upper-right icon to start Qwen Code. To switch models, enter or click `/` and select `Switch model`.
    
    ![2026-02-27_10-38-30](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4660222771/p1055188.jpg)
    

## **JetBrains**

Ensure your JetBrains IDE supports Agent Client Protocol (ACP).

1.  Qwen Code IDE plugin requires Qwen Code CLI. First, install CLI and configure Coding Plan. See [Install Qwen Code](#eb79ae808fpe8).
    
2.  Open JetBrains IDE, navigate to **AI Chat** panel, and click **Install Plugin**. The IDE installs JetBrains AI Assistant plugin.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4660222771/p1055148.png)
    
3.  In **AI Chat**, click the upper-right three-dot menu and select **Add Custom Agent**. Enter this configuration and replace `/path/to/qwen` with your Qwen Code installation path. To find the path:
    
    -   macOS / Linux: `which qwen`
        
    -   Windows: `where qwen` (CMD) or `Get-Command qwen` (PowerShell)
        
    
    ```
    {
      "agent_servers": {
        "qwen": {
          "command": "/path/to/qwen",
          "args": ["--acp"],
          "env": {}
        }
      }
    }
    ```
    
4.  After configuration completes, Qwen Code appears in **AI Chat**. Switch models in the lower-right corner.
    
    ![2026-02-27_09-52-59](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4660222771/p1055156.jpg)
    

## **Learn more**

For advanced features like sub-agents, MCP, and skills, see [official Qwen Code documentation](https://qwenlm.github.io/qwen-code-docs/en/users/overview/).

## Error codes

See [Common errors and solutions](/help/en/model-studio/coding-plan-faq#a9248c44029g6).

## FAQ

See [FAQ](/help/en/model-studio/coding-plan-faq).
