Set up Claude Code to use Coding Plan models via Anthropic API-compatible endpoints.

## **Install Claude Code**

## Manual installation

## macOS/Linux

1.  Install [Node.js](https://nodejs.org/en/download/) v18.0 or later.
    
2.  Run the following command:
    
    ```
    npm install -g @anthropic-ai/claude-code
    ```
    
3.  Verify installation (successful if version number appears):
    
    ```
    claude --version
    ```
    

## Windows

Install WSL or [Git for Windows](https://git-scm.com/install/windows), then run in WSL or Git Bash:

```
npm install -g @anthropic-ai/claude-code
```

> For details, see the [Windows setup guide](https://docs.anthropic.com/en/docs/claude-code/setup#windows-setup) in the official Claude Code documentation.

## **Install with Qwen Code**

Use Qwen Code to automate installation and avoid configuration issues.

1.  Install [Qwen Code](/help/en/model-studio/qwen-code-coding-plan) first.
    
2.  Start Qwen Code:
    
    ```
    qwen
    ```
    
3.  Enter this instruction:
    
    ## macOS/Linux
    
    ```
    Help me install Claude Code. 1. Prerequisite: Node.js (v18.0 or later) must be installed. 2. If Node.js is installed, run the command: npm install -g @anthropic-ai/claude-code. After installation, run claude --version to verify that the installation is successful.
    ```
    
    ## Windows
    
    ```
    Help me install Claude Code. 1. Prerequisites: Node.js (v18.0 or later) and Git for Windows must be installed. If they are not installed, please install them. 2. If the prerequisites are met, run the command: npm install -g @anthropic-ai/claude-code. After installation, run claude --version to verify that the installation is successful.
    ```
    
4.  Approve command execution until installation completes.
    
5.  Exit Qwen Code:
    
    ```
    /exit
    ```
    

### **Connection settings**

Configure these settings:

1.  `ANTHROPIC_BASE_URL`: `https://coding-intl.dashscope.aliyuncs.com/apps/anthropic`
    
2.  `ANTHROPIC_AUTH_TOKEN`: Your Coding Plan [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan)
    
3.  `ANTHROPIC_MODEL`: A [supported model](/help/en/model-studio/coding-plan)
    

## macOS/Linux

1.  Create and open `~/.claude/settings.json`:
    
    > `~` is your home directory. Create `.claude` folder if needed: `mkdir -p ~/.claude`
    
    ```
    nano ~/.claude/settings.json
    ```
    
2.  Replace YOUR\_API\_KEY with your [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan):
    
    ```
    {
        "env": {
            "ANTHROPIC_AUTH_TOKEN": "YOUR_API_KEY",
            "ANTHROPIC_BASE_URL": "https://coding-intl.dashscope.aliyuncs.com/apps/anthropic",
            "ANTHROPIC_MODEL": "qwen3.5-plus"
        }
    }
    ```
    
    Save and restart terminal to apply settings.
    
3.  Create or edit `~/.claude.json` and set `hasCompletedOnboarding` to `true`:
    
    ```
    {
      "hasCompletedOnboarding": true
    }
    ```
    
    > `hasCompletedOnboarding` must be a top-level field (not nested).
    
    This prevents the `Unable to connect to Anthropic services` error on startup.
    

## Windows

1.  Create and open `C:\Users\YourUsername\.claude\settings.json`:
    
    ## CMD
    
    1.  Create the folder.
        
        ```
        if not exist "%USERPROFILE%\.claude" mkdir "%USERPROFILE%\.claude"
        ```
        
    2.  Create and open the file.
        
        ```
        notepad "%USERPROFILE%\.claude\settings.json"
        ```
        
    
    ## PowerShell
    
    1.  Create the folder.
        
        ```
        mkdir -Force $HOME\.claude
        ```
        
    2.  Create and open the file.
        
        ```
        notepad $HOME\.claude\settings.json
        ```
        
    
2.  Replace YOUR\_API\_KEY with your [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/coding_plan):
    
    ```
    {
        "env": {
            "ANTHROPIC_AUTH_TOKEN": "YOUR_API_KEY",
            "ANTHROPIC_BASE_URL": "https://coding-intl.dashscope.aliyuncs.com/apps/anthropic",
            "ANTHROPIC_MODEL": "qwen3.5-plus"
        }
    }
    ```
    
    Save and restart terminal to apply settings.
    
3.  Create or edit `C:\Users\YourUsername\.claude.json` and set `hasCompletedOnboarding` to `true`:
    
    ```
    {
      "hasCompletedOnboarding": true
    }
    ```
    

### **Get started**

1.  Navigate to your project and start Claude Code:
    
    ```
    cd path/to/your_project
    claude
    ```
    
2.  Grant file execution permission after startup.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1924991771/p1040228.png)
    
3.  Run `/status` to verify configuration (model, Base URL, API key).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2428202771/p1054776.png)
    
4.  Start a conversation in Claude Code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2148019671/p1040230.png)
    

### **Switch models**

1.  **At startup**: `claude --model <model_name>` (e.g., `claude --model qwen3-coder-next`)
    
2.  **During session**: `/model <model_name>` (e.g., `/model qwen3-coder-next`)
    

### **Common commands**

**Command**

**Description**

**Example**

/init

Generate a CLAUDE.md file in project root for project-level instructions and context.

/init

/status

View configuration (model, API key, Base URL).

/status

/model <model\_name>

Switch models.

/model qwen3-coder-next

/clear

Clear conversation history.

/clear

/plan

Enter planning mode to analyze solutions without modifying code.

/plan

/compact

Compress conversation history to free context window space.

/compact

/config

Open configuration menu for language, theme, and other settings.

/config

See [official documentation](https://code.claude.com/docs/en/overview) for more commands.

## Extend capabilities

Extend Claude Code with MCP and skills (e.g., web search for real-time info, image understanding for analysis). See [Best practices](/help/en/model-studio/coding-plan-best-practices/) for details.

## **Install and use IDE extension**

Claude Code IDE extension supports VS Code, VS Code-based IDEs (Cursor, Trae), and JetBrains IDEs (IntelliJ IDEA, PyCharm).

## VS Code

1.  Complete [connection settings](#15a5a014e5uy8). Windows: install WSL or [Git for Windows](https://git-scm.com/install/windows).
    
2.  Open VS Code, search for `Claude Code for VS Code` in marketplace, and install.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4632940771/p1053283.png)
    
3.  Restart VS Code and click the upper-right icon to open Claude Code.
    
    ![截屏2026-02-06 17](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4632940771/p1053286.png)
    
    If Anthropic login appears, complete [connection settings](#15a5a014e5uy8) first.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8862072771/p1057253.png)
    
4.  Switch models: Type `/` → General config → set [supported model](/help/en/model-studio/coding-plan-overview) in Selected Model → start new conversation.
    
    ![截屏2026-02-06 17](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4632940771/p1053288.png)
    

## JetBrains

1.  Complete [installation](#9fc9401286mkk) and [connection settings](#15a5a014e5uy8).
    
2.  Open JetBrains IDE (IntelliJ IDEA, PyCharm, etc.), search for `Claude Code` in marketplace, and install.
    
    ![2026-02-25_16-27-56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7428202771/p1054855.jpg)
    
3.  Restart IDE, click upper-right icon to start, and use `/model <model_name>` to switch models.
    
    ![2026-02-25_16-40-33](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7428202771/p1054867.jpg)
    
    If `Not logged in. Please run /login` appears, complete [connection settings](#15a5a014e5uy8) first.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8862072771/p1057292.png)
    

## Error codes

See [Common errors and solutions](/help/en/model-studio/coding-plan-faq#a9248c44029g6).

## FAQ

See [FAQ](/help/en/model-studio/coding-plan-faq).

## **Best practices**

##### **1\. Manage context**

-   **Clear regularly**: Use `/clear` to reset conversations, preventing old context interference and saving tokens.
    
-   **Compress proactively**: Use `/compact` to summarize key decisions and modified files, retaining core memory.
    
-   **Specify files explicitly**: Use `@` to reference files (e.g., `write a test for @auth.py`), preventing inefficient full-project scans.
    
-   **Use sub-agents**: For large tasks, let Claude start sub-agents. Sub-agents return concise conclusions, preserving main conversation context.
    

##### **2\. Plan first, then execute**

-   **Enable Plan mode**: Analyze solutions before complex tasks without modifying files.
    
    -   Quick access: Press `Shift + Tab` twice.
        
    -   Prompt format: "First, output a detailed implementation plan. Modify files only after I confirm."
        
-   **Reduce trial-and-error**: Ensure closed-loop logic before code changes.
    

##### **3\. Consolidate core project knowledge: Write CLAUDE.md**

-   **Include key info**: CLAUDE.md auto-loads at session start. Add build commands, code specs, and workflows.
    
-   **Maintain dynamically**: Keep content concise. Record only global conventions; add rules as project evolves.
    

##### **4\. Extend capabilities: MCP and skills**

-   [**MCP**](https://code.claude.com/docs/en/mcp): Install a mature MCP Server to connect to external services. For example, [add a web search MCP](/help/en/model-studio/web-search-for-coding-plan).
    
-   [**Skills**](https://code.claude.com/docs/en/skills): Write a detailed skill description. Claude decides whether to call the tool based on the definition of its purpose. For example, [add a visual understanding skill](/help/en/model-studio/add-vision-skill).
    
-   **Skills vs MCP**: Skills teach "how" (workflow knowledge), MCP provides "tools" (external interfaces). They're complementary; skills can also integrate external APIs.
    

##### **5\. Automated guardrails: Hooks**

-   [**Use hooks**](https://code.claude.com/docs/en/hooks): Hooks auto-run scripts at Claude workflow lifecycle nodes (e.g., PreToolUse for pre-execution validation), ensuring 100% execution of key validations.
    
-   **Configuration methods**:
    
    1.  `/hooks` for interactive setup.
        
    2.  Edit `.claude/settings.json`.
        
    3.  Ask Claude to write it (e.g., "Write a hook that runs eslint after every file edit").
        

##### **6\. Establish a self-check loop**

-   **Enforce validation**: Run test cases (`pytest`, `npm test`) after code changes.
    
-   **Define success criteria**: Ensure compilation passes and API returns 200 (use `curl` to verify).
    
-   **Visual feedback**: Take browser screenshots for frontend changes to verify UI.
