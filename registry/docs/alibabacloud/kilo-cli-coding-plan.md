Configure and use Kilo CLI with Coding Plan.

Configure the model provider in `~/.config/kilo/config.json` to connect Kilo CLI to Coding Plan. See [Set up Coding Plan in Kilo CLI](#947837c5f65rc).

## Install Kilo CLI

1.  Install [Node.js](https://nodejs.org/en/download/) (v18.0 or later).
    
2.  In your terminal, install Kilo CLI:
    
    ```
    npm install -g @kilocode/cli
    ```
    
    Verify installation (a version number confirms success):
    
    ```
    kilo --version
    ```
    

## **Set up Coding Plan in Kilo CLI**

1.  Open `~/.config/kilo/config.json` in a text editor.
    
    ```
    vim ~/.config/kilo/config.json
    ```
    
    Paste the configuration below. Replace `YOUR_API_KEY` with your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan). To view or switch available models, see [Coding Plan overview](/help/en/model-studio/coding-plan-overview#b01f82a4218kx).
    
    ```
    {
      "$schema": "https://kilo.ai/config.json",
      "provider": {
        "bailian": {
          "npm": "@ai-sdk/anthropic",
          "name": "Alibaba Cloud Model Studio",
          "options": {
            "baseURL": "https://coding-intl.dashscope.aliyuncs.com/apps/anthropic/v1",
            "apiKey": "YOUR_API_KEY"
          },
          "models": {
            "qwen3.5-plus": {
              "name": "Qwen3.5 Plus",
              "options": {
                "thinking": {
                  "type": "enabled",
                  "budgetTokens": 1024
                }
              }
            },
            "qwen3-max-2026-01-23": {
              "name": "Qwen3 Max 0123"
            },
            "qwen3-coder-next": {
              "name": "Qwen3 Coder Next"
            },
            "qwen3-coder-plus": {
              "name": "Qwen3 Coder Plus"
            },
            "MiniMax-M2.5": {
              "name": "MiniMax M2.5",
              "options": {
                "thinking": {
                  "type": "enabled",
                  "budgetTokens": 1024
                }
              }
            },
            "glm-5": {
              "name": "GLM-5",
              "options": {
                "thinking": {
                  "type": "enabled",
                  "budgetTokens": 1024
                }
              }
            },
            "glm-4.7": {
              "name": "GLM-4.7",
              "options": {
                "thinking": {
                  "type": "enabled",
                  "budgetTokens": 1024
                }
              }
            },
            "kimi-k2.5": {
              "name": "Kimi K2.5",
              "options": {
                "thinking": {
                  "type": "enabled",
                  "budgetTokens": 1024
                }
              }
            }
          }
        }
      }
    }
    ```
    

## **Use Kilo CLI**

1.  After configuration, restart Kilo CLI. Run `/models`, search for `Alibaba Cloud Model Studio`, and select a model.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0593441771/p1054362.png)
    
2.  Start a conversation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0593441771/p1054364.png)
    
    For more commands and usage, see the [Kilo Code documentation](https://kilo.ai/docs/code-with-ai/platforms/cli).
