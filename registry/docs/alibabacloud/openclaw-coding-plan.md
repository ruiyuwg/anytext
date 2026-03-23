Set up and use Coding Plan with OpenClaw. OpenClaw (formerly Moltbot/Clawdbot) is an open-source personal AI assistant platform that supports interaction with AI through multiple messaging channels.

## Install OpenClaw

## Manual installation

1.  Install or update Node.js
    
    1.  Check your current version. Your `Node.js` version must be v22.0 or later.
        
        > If the command returns “command not found”, Node.js is not installed. If the version number is lower than v22.0, update Node.js.
        
        ```
        node -v
        ```
        
    2.  Download and install. Visit [Node.js](https://nodejs.org/en/download/), select the Long Term Support (LTS) version with `version number >= 22.x.x`, and download the installer for your operating system.
        
        > For example, on Windows, download the Windows Installer (.msi). On macOS, download the macOS Installer (.pkg).
        
2.  Install OpenClaw:
    
    ## macOS/Linux
    
    Run in your terminal:
    
    ```
    curl -fsSL https://openclaw.ai/install.sh | bash
    ```
    
    ## Windows
    
    1.  Open Command Prompt as an administrator.
        
        Type `CMD` in the taskbar search box. Then, select **Run as administrator**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4604223771/p1058837.png)
        
    2.  Run the installation command
        
        In `CMD`, install OpenClaw:
        
        ```
        iwr -useb https://openclaw.ai/install.ps1 | iex
        ```
        
    
3.  After installation, follow the on-screen prompts to configure OpenClaw. See the reference settings.
    
    **Item**
    
    **Configuration**
    
    I understand this is powerful and inherently risky. Continue?
    
    Select Yes
    
    Onboarding mode
    
    Select QuickStart
    
    Model/auth provider
    
    Select Skip for now. You can configure this later.
    
    Filter models by provider
    
    Select All providers
    
    Default model
    
    Use default settings
    
    Select channel (QuickStart)
    
    Select Skip for now. You can configure this later.
    
    Configure skills now? (recommended)
    
    Select No. You can configure this later.
    
    Enable hooks?
    
    Press the space bar to select Skip for now. Press Enter to continue.
    
    How do you want to hatch your bot?
    
    Select Hatch in TUI.
    

## **Use Qwen Code to guide installation**

OpenClaw requires Node.js. Manual installation may cause configuration issues. Use Qwen Code to install and verify automatically.

1.  Install and configure [Qwen Code](/help/en/model-studio/qwen-code-coding-plan).
    
2.  Launch Qwen Code from your terminal.
    
    ```
    qwen
    ```
    
3.  Enter the following instruction in the Qwen Code chat window.
    
    ## macOS/Linux
    
    ```
      Install OpenClaw and complete initial setup by running these commands:
      1. Prerequisite: Install Node.js (v22.0 or later). Check with node --version. Do not uninstall existing Node.js if upgrading.
      2. curl -fsSL https://openclaw.ai/install.sh | bash -s -- --no-onboard
      3. openclaw gateway install
      4. openclaw onboard --non-interactive --accept-risk --flow quickstart --auth-choice skip --skip-channels --skip-skills
      5. Run openclaw status to confirm OpenClaw is running normally
    ```
    
    ## Windows
    
    ```
      Install OpenClaw and complete initial setup by running these commands:
      1. Prerequisite: Install Node.js (v22.0 or later). Check with node --version.
      2. iwr -useb https://openclaw.ai/install.ps1 | iex
      3. openclaw gateway install
      4. openclaw onboard --non-interactive --accept-risk --flow quickstart --auth-choice skip --skip-channels --skip-skills
      5. Run openclaw status to confirm OpenClaw is running normally
    ```
    
4.  Allow Qwen Code to run commands until installation finishes.
    
5.  Enter `/exit` to exit Qwen Code.
    
    ```
    /exit
    ```
    

## **Set up Coding Plan in OpenClaw**

-   If OpenClaw is deployed on Simple Application Server, use **Method 2** to configure it via the GUI.
    
-   If OpenClaw is deployed locally or on Elastic Computing Service (ECS), use **Method 1** to configure it with AI Agent guidance, such as Qwen Code. If you are familiar with OpenClaw configuration, use **Method 3** to edit the configuration file directly.
    

## Method 1: Configure with Qwen Code guidance

1.  Install and configure [Qwen Code](/help/en/model-studio/qwen-code-coding-plan).
    
2.  Launch Qwen Code from your terminal.
    
    ```
    qwen
    ```
    
3.  Enter the following instruction in the Qwen Code chat window.
    
    > Replace YOUR\_API\_KEY with your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan).
    
    ```
    Configure OpenClaw to connect to Coding Plan as follows:
    1. Open the config file: ~/.openclaw/openclaw.json
    2. Locate or create the following fields and merge the configuration (keep existing settings. Add new fields if missing):
    {
      "models": {
        "mode": "merge",
        "providers": {
          "bailian": {
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "apiKey": "YOUR_API_KEY",
            "api": "openai-completions",
            "models": [
              {
                "id": "qwen3.5-plus",
                "name": "qwen3.5-plus",
                "reasoning": false,
                "input": ["text", "image"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 1000000,
                "maxTokens": 65536,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "qwen3-max-2026-01-23",
                "name": "qwen3-max-2026-01-23",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 65536,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "qwen3-coder-next",
                "name": "qwen3-coder-next",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 65536
              },
              {
                "id": "qwen3-coder-plus",
                "name": "qwen3-coder-plus",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 1000000,
                "maxTokens": 65536
              },
              {
                "id": "MiniMax-M2.5",
                "name": "MiniMax-M2.5",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 196608,
                "maxTokens": 32768
              },
              {
                "id": "glm-5",
                "name": "glm-5",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 202752,
                "maxTokens": 16384,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "glm-4.7",
                "name": "glm-4.7",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 202752,
                "maxTokens": 16384,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "kimi-k2.5",
                "name": "kimi-k2.5",
                "reasoning": false,
                "input": ["text", "image"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 32768,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              }
            ]
          }
        }
      },
      "agents": {
        "defaults": {
          "model": {
            "primary": "bailian/qwen3.5-plus"
          },
          "models": {
            "bailian/qwen3.5-plus": {},
            "bailian/qwen3-max-2026-01-23": {},
            "bailian/qwen3-coder-next": {},
            "bailian/qwen3-coder-plus": {},
            "bailian/MiniMax-M2.5": {},
            "bailian/glm-5": {},
            "bailian/glm-4.7": {},
            "bailian/kimi-k2.5": {}
          }
        }
      },
      "gateway": {
        "mode": "local"
      }
    } 
    3. Save the config file
    4. Run openclaw gateway restart to restart the OpenClaw gateway and apply changes.
    ```
    
4.  Allow Qwen Code to run commands until installation finishes.
    
5.  Restart the Qwen Code chat window and verify the configuration.
    
    ```
    openclaw status
    ```
    

## Method 2: Configure via GUI

If you deploy OpenClaw using [Simple Application Server](/help/en/simple-application-server/use-cases/quickly-deploy-and-use-openclaw), you can configure Coding Plan using the GUI. For more information, see [Configure Coding Plan on Simple Application Server](/help/en/simple-application-server/use-cases/quickly-deploy-and-use-openclaw#44b3e078397lp).

## Method 3: Edit config file directly

## Edit config file using terminal

1.  Open the configuration file:
    
    ```
    nano ~/.openclaw/openclaw.json
    ```
    
2.  **First-time setup**: Paste the configuration below into the file. Replace `YOUR_API_KEY` with your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan).
    
    **Existing setup**: To keep existing settings, do not replace the entire file. For more information, see [How to safely modify existing configuration?](#56a69a77cdfos)
    
    ```
    {
      "models": {
        "mode": "merge",
        "providers": {
          "bailian": {
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "apiKey": "YOUR_API_KEY",
            "api": "openai-completions",
            "models": [
              {
                "id": "qwen3.5-plus",
                "name": "qwen3.5-plus",
                "reasoning": false,
                "input": ["text", "image"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 1000000,
                "maxTokens": 65536,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "qwen3-max-2026-01-23",
                "name": "qwen3-max-2026-01-23",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 65536,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "qwen3-coder-next",
                "name": "qwen3-coder-next",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 65536
              },
              {
                "id": "qwen3-coder-plus",
                "name": "qwen3-coder-plus",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 1000000,
                "maxTokens": 65536
              },
              {
                "id": "MiniMax-M2.5",
                "name": "MiniMax-M2.5",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 196608,
                "maxTokens": 32768
              },
              {
                "id": "glm-5",
                "name": "glm-5",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 202752,
                "maxTokens": 16384,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "glm-4.7",
                "name": "glm-4.7",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 202752,
                "maxTokens": 16384,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "kimi-k2.5",
                "name": "kimi-k2.5",
                "reasoning": false,
                "input": ["text", "image"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 32768,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              }
            ]
          }
        }
      },
      "agents": {
        "defaults": {
          "model": {
            "primary": "bailian/qwen3.5-plus"
          },
          "models": {
            "bailian/qwen3.5-plus": {},
            "bailian/qwen3-max-2026-01-23": {},
            "bailian/qwen3-coder-next": {},
            "bailian/qwen3-coder-plus": {},
            "bailian/MiniMax-M2.5": {},
            "bailian/glm-5": {},
            "bailian/glm-4.7": {},
            "bailian/kimi-k2.5": {}
          }
        }
      },
      "gateway": {
        "mode": "local"
      }
    }
    ```
    
3.  Save and exit. Then, apply the configuration.
    
    ```
    openclaw gateway restart
    ```
    

## Edit config file using Web UI

1.  Open the OpenClaw dashboard (Web UI). Your browser typically opens it at `http://127.0.0.1/:xxxx`.
    
    ```
    openclaw dashboard
    ```
    
2.  In the Web UI, select **Config** > **RAW** (or **Config** > **RAW**) from the navigation pane on the left.
    
    1.  **First-time setup**: Copy the following configuration into the **Raw JSON5** field, replacing any existing content.
        
        **Existing setup**: To keep existing settings, do not replace the entire file. For more information, see [How to safely modify existing configuration?](#56a69a77cdfos)
        
    2.  Replace `YOUR_API_KEY` with your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7680563771/p1059706.png)
        
    
    ```
    {
      "models": {
        "mode": "merge",
        "providers": {
          "bailian": {
            "baseUrl": "https://coding-intl.dashscope.aliyuncs.com/v1",
            "apiKey": "YOUR_API_KEY",
            "api": "openai-completions",
            "models": [
              {
                "id": "qwen3.5-plus",
                "name": "qwen3.5-plus",
                "reasoning": false,
                "input": ["text", "image"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 1000000,
                "maxTokens": 65536,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "qwen3-max-2026-01-23",
                "name": "qwen3-max-2026-01-23",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 65536,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "qwen3-coder-next",
                "name": "qwen3-coder-next",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 65536
              },
              {
                "id": "qwen3-coder-plus",
                "name": "qwen3-coder-plus",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 1000000,
                "maxTokens": 65536
              },
              {
                "id": "MiniMax-M2.5",
                "name": "MiniMax-M2.5",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 196608,
                "maxTokens": 32768
              },
              {
                "id": "glm-5",
                "name": "glm-5",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 202752,
                "maxTokens": 16384,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "glm-4.7",
                "name": "glm-4.7",
                "reasoning": false,
                "input": ["text"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 202752,
                "maxTokens": 16384,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              },
              {
                "id": "kimi-k2.5",
                "name": "kimi-k2.5",
                "reasoning": false,
                "input": ["text", "image"],
                "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
                "contextWindow": 262144,
                "maxTokens": 32768,
                "compat": {
                  "thinkingFormat": "qwen"
                }
              }
            ]
          }
        }
      },
      "agents": {
        "defaults": {
          "model": {
            "primary": "bailian/qwen3.5-plus"
          },
          "models": {
            "bailian/qwen3.5-plus": {},
            "bailian/qwen3-max-2026-01-23": {},
            "bailian/qwen3-coder-next": {},
            "bailian/qwen3-coder-plus": {},
            "bailian/MiniMax-M2.5": {},
            "bailian/glm-5": {},
            "bailian/glm-4.7": {},
            "bailian/kimi-k2.5": {}
          }
        }
      },
      "gateway": {
        "mode": "local"
      }
    }
    ```
    
3.  In the top-right corner, click **Save**, then click **Update** to apply the configuration.
    
    > After saving, the API key displays as “\_\_OPENCLAW\_REDACTED\_\_” for security. This only affects the frontend display. It does not impact actual API calls.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2344052771/p1055860.png)
    

## **Use OpenClaw**

Use OpenClaw through either the Web UI or the TUI.

## Web UI

1.  Open the OpenClaw dashboard (Web UI) from a new terminal:
    
    ```
    openclaw dashboard
    ```
    
2.  Start a conversation in the Web UI.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5547569671/p1050227.png)
    

## TUI

1.  Open the Text User Interface (TUI) from a new terminal:
    
    ```
    openclaw tui
    ```
    
2.  Start a conversation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5547569671/p1050228.png)
    

## **Switch models**

-   **Switch models in the current session (temporary)**
    
    Run `openclaw tui` in the terminal to enter the **TUI interface**. Then, use `/model <model name>` to switch models for the current session.
    
    ```
    /model qwen3-coder-next
    ```
    
    > The message “model set to qwen3-coder-next” indicates that the change has taken effect.
    
-   **Change the default model (permanent)**
    
    Update the `agents.defaults.model.primary` field to set the default model for every new session. For more information, see [Edit config file](#cc5b5358b3woj).
    
    ```
    {
        "agents": {
            "defaults": {
                "model": {
                    "primary": "bailian/qwen3.5-plus"
                }
            }
        }
    }
    ```
    

## Learn more

### **Use and create skills**

A Skill is a modular knowledge package defined by a SKILL.md file. Based on your request, an agent automatically matches and loads the corresponding Skill to perform a task. OpenClaw includes the built-in `find-skills` Skill. Ask the agent to discover and install new Skills. For example, "Find a weather skill for me".

Search for and install skills from [ClawHub](https://clawhub.ai/):

```
clawhub install <skill-slug>   
```

For more information about creating custom skills, see the [OpenClaw documentation](https://docs.openclaw.ai/tools/creating-skills).

## FAQ

#### **How do I view models configured for Coding Plan?**

Run `openclaw tui` to open the TUI. Type `/model` to list available models. Press Enter to select a model. Press Esc to exit the list.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2344052771/p1055791.png)

#### **Why do I get “HTTP 401: Incorrect API key provided.” or “No API key found for provider xxx”?**

Possible causes:

1.  Your API key may be invalid, expired, empty, incorrectly formatted, or mismatched with the endpoint. Verify that you are using the API key specific to your Coding Plan, that you copied the entire key without leading or trailing spaces, and that your subscription is active.
    
2.  A stale configuration cache has caused a configuration error. Delete the `providers` section from `~/.openclaw/agents/main/agent/models.json` and restart OpenClaw.
    

#### **I already configured other channels like DingTalk. How do I safely add Coding Plan models without losing my existing configuration?**

-   **Do not replace the entire file.** This overwrites your custom settings. Instead, edit the file to add the new model configuration.
    
-   Choose one of the following methods:
    
    -   **If OpenClaw responds normally**: Enter the following instruction in the OpenClaw chat to merge the configuration.
        
    -   If OpenClaw is unresponsive or has no models configured, for more information, see [Qwen Code guided configuration](#640bfbc4fcgez).
        

**Note**

If you installed OpenClaw using Simple Application Server, you can use the GUI to add Coding Plan models. For more information, see [Add Coding Plan on Simple Application Server](/help/en/simple-application-server/use-cases/openclaw-faq#ed63e8bbddn6q).

For more questions, see the [FAQ](/help/en/model-studio/coding-plan-faq).
