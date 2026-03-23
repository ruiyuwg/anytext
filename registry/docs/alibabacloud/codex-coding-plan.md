Codex is an intelligent coding agent from OpenAI. Use it with Coding Plan.

To use Codex with Coding Plan, modify the model\_provider, model, and base\_url parameters in `~/.codex/config.toml`. For details, see [Set up Coding Plan in Codex](#1a0f4ca3dbf10).

## **Install Codex**

1.  Install [Node.js](https://nodejs.org/en/download/) v18.0 or later.
    
2.  Install Codex 0.80.0 or earlier (required for Chat and Completions API support):
    
    ```
    npm install -g @openai/codex@0.80.0
    ```
    
    Verify the installation (a version number confirms success):
    
    ```
    codex --version
    ```
    

## **Set up Coding Plan in Codex**

1.  **Modify the config file**
    
    Copy the following content into `~/.codex/config.toml`. For `model`, select a [supported model](/help/en/model-studio/coding-plan-overview).
    
    **Note**
    
    Codex versions later than 0.80.0 do not support the Chat and Completions APIs that Coding Plan uses. Install version 0.80.0 or earlier.
    
    ```
    model_provider = "Model_Studio_Coding_Plan"
    model = "qwen3.5-plus"
    [model_providers.Model_Studio_Coding_Plan]
    name = "Model_Studio_Coding_Plan"
    base_url = "https://coding-intl.dashscope.aliyuncs.com/v1"
    env_key = "OPENAI_API_KEY"
    wire_api = "chat"
    ```
    
2.  **Configure the environment variable**
    
    Set the `OPENAI_API_KEY` environment variable to your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan).
    
    ## macOS
    
    1.  Run the following command in the terminal to check your default shell.
        
        ```
        echo $SHELL
        ```
        
    2.  Set the environment variable based on your shell type:
        
        ## Zsh
        
        ```
        # Replace YOUR_API_KEY with your Coding Plan API key.
        echo 'export OPENAI_API_KEY="YOUR_API_KEY"' >> ~/.zshrc
        ```
        
        ## Bash
        
        ```
        # Replace YOUR_API_KEY with your Coding Plan API key.
        echo 'export OPENAI_API_KEY="YOUR_API_KEY"' >> ~/.bash_profile
        ```
        
    3.  Reload your shell configuration:
        
        ## Zsh
        
        ```
        source ~/.zshrc
        ```
        
        ## Bash
        
        ```
        source ~/.bash_profile
        ```
        
    
    ## Windows
    
    ## CMD
    
    1.  Set the environment variable.
        
        ```
        REM Replace YOUR_API_KEY with your Coding Plan API key
        setx OPENAI_API_KEY "YOUR_API_KEY"
        ```
        
    2.  Open a new CMD window and verify it's set:
        
        ```
        echo %OPENAI_API_KEY%
        ```
        
    
    ## PowerShell
    
    1.  In PowerShell, set the environment variable.
        
        ```
        # Replace YOUR_API_KEY with your Coding Plan API key
        [Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "YOUR_API_KEY", [EnvironmentVariableTarget]::User)
        ```
        
    2.  Open a new PowerShell window and verify it's set:
        
        ```
        echo $env:OPENAI_API_KEY
        ```
        
    

## **Use Codex**

1.  Open a new terminal and launch Codex:
    
    ```
    codex
    ```
    
    Skip the update prompt (newer versions don't support Coding Plan).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4632940771/p1053322.png)
    
2.  Start a conversation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4632940771/p1053323.png)
