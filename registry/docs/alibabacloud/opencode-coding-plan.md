Set up and use Coding Plan with OpenCode.

## **Install OpenCode**

1.  Install or update [Node.js](https://nodejs.org/en/download/) (v18.0+).
    
2.  In your terminal, install OpenCode:
    
    ```
    npm install -g opencode-ai
    ```
    
    Verify the installation (a version number appears if successful):
    
    ```
    opencode -v
    ```
    

## **Set up Coding Plan**

Create and open `opencode.json` at one of these paths:

-   macOS or Linux: `~/.config/opencode/opencode.json`
    
-   Windows: `C:\Users\<username>\.config\opencode\opencode.json`
    

Add these settings:

-   `baseURL`: Set to `https://coding-intl.dashscope.aliyuncs.com/apps/anthropic/v1` (not the general Model Studio endpoint).
    
-   `apiKey`: Replace `YOUR_API_KEY` with your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan), in the format of `sk-sp-xxx`.
    

**Note**

Save the config file and restart OpenCode to apply settings.

```
{
    "$schema": "https://opencode.ai/config.json",
    "provider": {
        "bailian-coding-plan": {
            "npm": "@ai-sdk/anthropic",
            "name": "Model Studio Coding Plan",
            "options": {
                "baseURL": "https://coding-intl.dashscope.aliyuncs.com/apps/anthropic/v1",
                "apiKey": "YOUR_API_KEY"
            },
            "models": {
                "qwen3.5-plus": {
                    "name": "Qwen3.5 Plus",
                    "modalities": {
                        "input": ["text", "image"],
                        "output": ["text"]
                    },
                    "options": {
                        "thinking": {
                            "type": "enabled",
                            "budgetTokens": 8192
                        }
                    },
                    "limit": {
                        "context": 1000000,
                        "output": 65536
                    }
                },
                "qwen3-max-2026-01-23": {
                    "name": "Qwen3 Max 2026-01-23",
                    "modalities": {
                        "input": ["text"],
                        "output": ["text"]
                    },
                    "limit": {
                        "context": 262144,
                        "output": 32768
                    }
                },
                "qwen3-coder-next": {
                    "name": "Qwen3 Coder Next",
                    "modalities": {
                        "input": ["text"],
                        "output": ["text"]
                    },
                    "limit": {
                        "context": 262144,
                        "output": 65536
                    }
                },
                "qwen3-coder-plus": {
                    "name": "Qwen3 Coder Plus",
                    "modalities": {
                        "input": ["text"],
                        "output": ["text"]
                    },
                    "limit": {
                        "context": 1000000,
                        "output": 65536
                    }
                },
                "MiniMax-M2.5": {
                    "name": "MiniMax M2.5",
                    "modalities": {
                        "input": ["text"],
                        "output": ["text"]
                    },
                    "options": {
                        "thinking": {
                            "type": "enabled",
                            "budgetTokens": 8192
                        }
                    },
                    "limit": {
                        "context": 196608,
                        "output": 24576
                    }
                },
                "glm-5": {
                    "name": "GLM-5",
                    "modalities": {
                        "input": ["text"],
                        "output": ["text"]
                    },
                    "options": {
                        "thinking": {
                            "type": "enabled",
                            "budgetTokens": 8192
                        }
                    },
                    "limit": {
                        "context": 202752,
                        "output": 16384
                    }
                },
                "glm-4.7": {
                    "name": "GLM-4.7",
                    "modalities": {
                        "input": ["text"],
                        "output": ["text"]
                    },
                    "options": {
                        "thinking": {
                            "type": "enabled",
                            "budgetTokens": 8192
                        }
                    },
                    "limit": {
                        "context": 202752,
                        "output": 16384
                    }
                },
                "kimi-k2.5": {
                    "name": "Kimi K2.5",
                    "modalities": {
                        "input": ["text", "image"],
                        "output": ["text"]
                    },
                    "options": {
                        "thinking": {
                            "type": "enabled",
                            "budgetTokens": 8192
                        }
                    },
                    "limit": {
                        "context": 262144,
                        "output": 32768
                    }
                }
            }
        }
    }
}
```

**Note**

The `budgetTokens` setting controls the maximum number of tokens for the thinking process. Setting it too low may interrupt the model's reasoning.

> For MiniMax-M2.5: `budgetTokens` + `output` must be ≤ 32,768.

### **Use OpenCode**

In your terminal, start OpenCode:

```
opencode
```

Type `/models`, search for `Model Studio Coding Plan`, and select a model.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6593441771/p1053279.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6593441771/p1053280.png)

## **FAQ**

See [FAQ](/help/en/model-studio/coding-plan-faq).
