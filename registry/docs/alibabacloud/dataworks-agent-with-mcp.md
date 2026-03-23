The DataWorks Agent is based on the Model Context Protocol (MCP). It connects to the DataWorks MCP Server and other big data MCP servers, such as the Hologres MCP Server, to provide capabilities like data development, Task O&M, and Data Integration in DataWorks using natural language.

**Important**

This feature requires a third-party client. For a more streamlined agent experience, see [DataWorks Agent](/help/en/dataworks/user-guide/dataworks-copilot-agent).

## **How it works**

The DataWorks Agent allows you to perform big data development tasks through a conversational interface. It uses a Large Language Model (LLM) to parse your requests and calls MCP Server capabilities to execute them.

For example, if you ask, "How many workspaces do I have?", the agent uses the LLM to parse the request and call the **ListProjects** tool. This tool, provided by the [DataWorks MCP Server](https://github.com/aliyun/alibabacloud-dataworks-mcp-server) through the built-in [DataWorks OpenAPI](/help/en/dataworks/developer-reference/use-dataworks-openapi), queries and returns the result. For more complex tasks, the LLM may interact with the MCP Server multiple times.

The DataWorks Agent not only integrates with the DataWorks MCP Server but also connects to [other MCP Servers](https://github.com/modelcontextprotocol/servers). You can also choose your own LLM, such as [Qwen](https://tongyi.aliyun.com/), DeepSeek, or OpenAI.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3948324771/CAEQUxiBgID_voaC5RkiIDFjYWE1ODFmMDczYTQ4YmNiZjI3NDI2Y2YyZDk2ZDM55035958_20250403112102.400.svg)

Try the following prompts to explore more of the DataWorks Agent's capabilities.

**Scope**

**Example prompts**

**Data Development**

**\[Query tasks\]** Find all paused `MaxCompute SQL` data development nodes in the project directory of this workspace.

**\[Rename tasks\]** Rename the nodes found above to "invalid\_node\_to\_delete". Use sequence numbers to distinguish between multiple nodes.

**\[Create tasks\]** Create five `MaxCompute SQL` nodes in the project directory of this workspace. The names should start with `MC_Demo`, be connected by underscores, and end with an auto-incrementing number starting from 01.

**Task O&M**

**\[Rerun failed tasks\]** In this workspace, find tasks that failed on `20250330` and rerun their instances. Note that `bizdate` is a timestamp in milliseconds.

**\[Query failed instances\]** In the project directory of this workspace, find instances that failed on `20250331`. The format for `bizdate` is a timestamp in milliseconds.

**\[Analyze rerun properties\]** Analyze the rerun properties of these tasks. If a task is rerunnable, rerun it.

**Data Integration**

**\[Synchronize a single MySQL table to MaxCompute\]** Create a batch Data Integration task in the current workspace with the following settings:

-   **Source**: `mc_test_mysql` (table name: `users`)
    
-   **Destination**: `mc_test_maxcompute` (destination table name: `users`, same as the source table)
    
-   **Resource group**: `mc_test_res`
    
-   **Field mapping method**: Automatic mapping by name (maps columns with the same name in the source and destination tables).
    

**Data analysis**

**\[Sales analysis\]** Analyze the sales trends of the top 10 best-selling products this month from the \`order\` table.

## Limitations

This feature is only available in workspaces with Data Studio (New Version) enabled, and can only be used in a [personal development environment](/help/en/dataworks/user-guide/personal-development-environment/#4fe94ed8c9p6h).

**Important**

After you restart a personal development environment, you must reinstall the MCP Server feature. Proceed with caution.

## **Billing**

Using the DataWorks Agent incurs the following charges:

-   **DataWorks OpenAPI call charges**
    
    When the agent calls DataWorks OpenAPI through the MCP Server, you are billed according to the [OpenAPI billing standards](/help/en/dataworks/resource-costs#b5dac7134fgzt).
    
-   **LLM token charges**
    
    When the agent parses user intent and generates natural language responses, it calls the LLM you have configured, such as Qwen. This process consumes input and output tokens, and you are billed by your chosen model provider. For example, if you use the `**qwen-coder-plus**` model from Alibaba Cloud Model Studio (Bailian), charges are calculated based on the [Bailian billing description](/help/en/model-studio/billing-for-model-studio).
    

## Quick start

After you [configure the DataWorks Agent](#ba156375f6b8f), click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937708.png) icon in the upper-right corner of the Cline page to open the chat interface and try it out by querying for members of the current workspace.

**Enter this prompt**: Query members of the current workspace.

**The agent executes the task in the following steps:**

1.  **Request parsing and confirmation**: The agent parses your intent, such as "query members of the current workspace", automatically identifies that it needs to call the `ListProjectMembers` API, and prompts you to confirm required parameters such as the target workspace (ProjectId).
    
2.  **API call and response**: After you approve the action, the agent calls the `ListProjectMembers` OpenAPI, retrieves the member list for the workspace, and returns it in a structured format that includes roles and account types. For more information about the `ListProjectMembers` OpenAPI, see [ListProjectMembers - Query the member list of a workspace](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-listprojectmembers).
    
    **Note**
    
    -   During execution, the system prompts you to confirm relevant operations and obtain necessary information. You can click **Approve** to proceed or **Reject** to deny the operation.
        
    -   The specific steps may vary slightly depending on the task's complexity, the chosen LLM, and the model version. The execution flow is determined by the agent's real-time parsing and interaction.
        
    

## **Configure DataWorks Agent**

The DataWorks Agent uses an MCP client plug-in, such as Cline, to build the front-end chat interface and connects to the [DataWorks MCP Server](https://github.com/aliyun/alibabacloud-dataworks-mcp-server) and other [Alibaba Cloud MCP servers](https://github.com/aliyun?q=mcp+server&type=all&language=&sort=) through the MCP Server configuration.

**Note**

You can connect to more [open source MCP servers](https://github.com/modelcontextprotocol/servers/) as needed to enhance the capabilities of the DataWorks Agent.

### **Before you begin**

-   You have [created a workspace](/help/en/dataworks/user-guide/create-a-workspace) and selected **Use Data Studio (New Version)**.
    
-   (Optional. Required for RAM users.) The RAM user for task development must be added to the workspace and granted the **Development** or **Workspace Manager** role. The Workspace Manager role has extensive permissions, so grant it with caution. For details on adding members, see [Add workspace members](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you are using an Alibaba Cloud account, you can skip this step.
    
-   You have [created a personal development environment instance](/help/en/dataworks/user-guide/personal-development-environment/#a47aea58f20q0).
    
    **Note**
    
    If your personal development environment is bound to a Virtual Private Cloud (VPC), you must configure [internet access for the personal development environment](/help/en/dataworks/user-guide/network-connectivity-between-personal-development-environments-and-computing-resources).
    

### **Step 1: Enter personal development environment**

Follow these steps to enable and enter your personal development environment.

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6415913371/p862794.png) icon next to **Personal Development Environment** in the top navigation bar to check the status of your personal development environment instance and enter it.
    
    -   **If the instance status is** ****Running****: Click the running personal development environment instance under ****Personal Development Environment**** to enter it.
        
    -   **If the instance is in any other state**: Click **Management Environment** in the pop-up window. On the **Personal Development Environment Instances** page, find the instance you created, click **Start** in the **Actions** column, and wait for the **Instance Status** to change to **Running**. Then, click the instance to enter the personal development environment.
        
    
    **Note**
    
    When an icon similar to ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937594.png) appears in the ****Personal Development Environment**** area, it means you have entered the personal development environment.
    

### **Step 2: Install Cline**

After entering the personal development environment, follow these steps to configure the DataWorks Agent. This document uses Cline as an example.

**Important**

If you selected the `dataworks-mcp:py3.11-ubuntu22.04` image when you created the personal development environment instance, you do not need to [upgrade the program engine](#a01677c328nje) or [install the Cline extension](#dc5039f491t30).

#### **Upgrade program engine**

If you are using a previous personal development environment or have already installed the Cline extension, you need to upgrade the program engine to use the extension feature. If you have already upgraded, you can skip this step.

**One-click Upgrade**: After entering the personal development environment, if a pop-up window prompts you to upgrade the underlying engine for compatibility, click the **One-click Upgrade** button to complete the upgrade.

**Upgrade with commands**: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937984.png) icon in the bottom-left corner of the toolbar to open the terminal. Enter the following upgrade command and press Enter to upgrade.

```
wget https://nodejs.org/dist/v20.19.0/node-v20.19.0-linux-x64.tar.xz
tar xf node-v20.19.0-linux-x64.tar.xz
mv /etc/dsw/node /etc/dsw/node14
mv node-v20.19.0-linux-x64 /etc/dsw/node

bash <(curl -s https://dataworks-notebook-${REGION}.oss-${REGION}.aliyuncs.com/public-datasets/aone-release/dwcode-server/scripts/update.sh)  0.2.169
```

**Note**

You do not need to manually replace `${REGION}` in the command. The system automatically identifies and fills in the current region information. You can also run the `echo ${REGION}` command in the terminal to confirm the resolved region value.

After the upgrade is complete, click **Reload** in the pop-up window to apply the latest changes.

#### **Install Cline extension**

Follow these steps to install the Cline extension in your personal development environment to serve as your agent's chat window.

1.  In the personal development environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937608.png) icon in the left navigation pane to go to the **Extensions** page.
    
2.  Enter `Cline` in the search box on the Extensions page.
    
3.  Find the Cline extension that appears below.
    
4.  Click **Install** in the lower-right corner of the Cline extension and wait for the installation to complete.
    
5.  After installation, on the Data Studio page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) in the upper-right corner of the top navigation bar to open Copilot Chat, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937633.png) to switch to Cline.
    
6.  You can also right-click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0110101771/p1054267.png) icon to **Configure Keybindings**, **Move to** > **Secondary Sidebar**, or **Move to** > **Panel**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0110101771/p1054227.png)

### **Step 3: Configure LLM API key**

After installing the Cline extension, follow these steps to configure your API key. This example shows how to connect to the Alibaba Cloud Model Studio (Bailian) API using the OpenAI Compatible mode.

**Note**

-   To connect to a model in a different mode, configure the parameters as provided in the interface.
    
-   Only the **Use your own API key** method is currently supported. The **Get Started for Free** method is not supported.
    

1.  On the Data Studio personal development environment page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3651099371/p916753.png) in the upper-right corner of the top navigation bar to open Copilot Chat, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937633.png) to switch to Cline.
    
2.  On the Cline page, click **Use your own API key** and configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **API Provider**
    
    Specifies the API service provider. Select `OpenAI Compatible`. This indicates that you will use an OpenAI-compatible interface to connect to the Alibaba Cloud Model Studio (Bailian) API.
    
    **Base URL**
    
    The base URL of the API service, which specifies the root address for API requests.
    
    For example, the OpenAI-compatible API endpoint address provided by the Alibaba Cloud Model Studio (Bailian) API is `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`.
    
    **API key**
    
    The key used for authentication. You can obtain this API key from the [Alibaba Cloud Model Studio (Bailian) console](https://modelstudio.console.alibabacloud.com/?apiKey=1#/api-key).
    
    **Model ID**
    
    Specifies the model you want to use. Different models have different functions and performance characteristics.
    
    Select `qwen-coder-plus` or `qwen-plus`:
    
    -   `**qwen-coder-plus**`: Suitable for code generation and programming tasks.
        
    -   `**qwen-plus**`: Suitable for general text generation and processing tasks.
        
    
3.  Click the **Let's go!** button below to complete the API key configuration.
    

### **Step 4: Configure MCP Server**

After configuring the API key, follow these steps to connect to and configure the DataWorks MCP Server. For more information about the DataWorks MCP Server, see [Appendix: DataWorks MCP Server](#27a1ec9d9atjp).

1.  On the Cline page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2417285471/p937656.png) icon in the upper-right corner to go to the **Marketplace** tab of **MCP Server**.
    
2.  Switch to the **Installed** tab to view installed MCP servers.
    
3.  Click **Configure MCP Servers** to open the `cline_mcp_settings.json` configuration file. DataWorks provides a default configuration for `alibabacloud-dataworks-mcp-server`. The configuration is as follows:
    
    ```
    {
      "mcpServers": {
        "alibabacloud-dataworks-mcp-server": {
          "command": "npx",
          "args": [
            "alibabacloud-dataworks-mcp-server"
          ],
          "env": {
            "REGION": "cn-shanghai",
            "ALIBABA_CLOUD_CREDENTIALS_URI": "http://localhost:7002/api/v1/credentials/0",
            "TOOL_CATEGORIES": "SERVER_IDE_DEFAULT"
          },
          "disabled": false,
          "autoApprove": [],
          "timeout": 60
        }
      }
    }
    ```
    
    **Parameter**
    
    **Description**
    
    **command**
    
    **npx**, which indicates the command method provided by dataworks-mcp-server.
    
    **args**
    
    **alibabacloud-dataworks-mcp-server**, which indicates the command argument for dataworks-mcp-server.
    
    **env**
    
    **REGION**
    
    The region where the current DataWorks workspace is located. The example uses **cn-shanghai**.
    
    **ALIBABA\_CLOUD\_CREDENTIALS\_URI**
    
    Specifies the URI for Alibaba Cloud credentials.
    
    **Important**
    
    This parameter is effective only in the DataWorks personal development environment and is used to obtain Alibaba Cloud user authentication.
    
    **TOOL\_CATEGORIES**
    
    Configures the allowlist of `Tool` categories. Enter the OpenAPI categories here, separated by commas.
    
    Example: `"TOOL_CATEGORIES":"Data Sources,Workspace Management,Resource Group Management,Data Map,Data Integration,Data Studio (New Version),Task O&M,Data Service,Open Platform,Data Quality,Tag Management,Security Center,SERVER_IDE_DEFAULT"`.
    
    **Note**
    
    -   `SERVER_IDE_DEFAULT` refers to the default `Tools` in the personal development environment. The other service categories can be found in the left-side directory tree on the [DataWorks - OpenAPI Overview](https://api.aliyun.com/document/dataworks-public/2024-05-18/overview) page.
        
    -   To improve model loading performance and user experience, `TOOL_CATEGORIES` is set to `SERVER_IDE_DEFAULT` in the default configuration. To enable all OpenAPI tools, you can remove this configuration item.
        
    
    **TOOL\_NAMES**
    
    Configures the allowlist of `Tool` names. Enter the OpenAPI names here, separated by commas.
    
    Example: `"TOOL_NAMES":"ListProjects,CreateNode,UpdateNode"`.
    
    **Note**
    
    You can find the `TOOL_NAMES` on the [DataWorks - OpenAPI Overview](https://api.aliyun.com/document/dataworks-public/2024-05-18/overview) page.
    
4.  After you save the configuration, when the list of available Tools loads, this confirms that `alibabacloud-dataworks-mcp-server` is installed and configured. You can now start using the DataWorks MCP Server features.
    
    **Note**
    
    If the information fails to load, confirm whether you have [upgraded the program engine](#a01677c328nje).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0110101771/p1054282.png)
    
5.  You can extend the capabilities of the DataWorks Agent by directly editing the `cline_mcp_settings.json` configuration file or by installing other MCP servers from the **Marketplace**. For example, to use Hologres-related features in the DataWorks Agent, you can connect to the [Hologres MCP Server](https://github.com/aliyun/alibabacloud-hologres-mcp-server).
    

## FAQ

-   **Q**: When I run a preset prompt on the MCP Server, the API request is unresponsive or remains in a running state for a long time. What could be the cause and how can I fix it?
    
    **A**: If an API request remains in a running state for a long time without returning a result, it may be due to a compatibility issue with an older version of the program engine. We recommend that you [upgrade the program engine](#a01677c328nje).
    
-   **Q**: How can I optimize the model's response speed?
    
    **A**: To improve response performance, you can take the following measures:
    
    -   Reduce the number of simultaneously enabled MCP servers to lower system resource overhead.
        
    -   In the MCP Server's configuration file, explicitly specify `TOOL_CATEGORIES` or `TOOL_NAMES` through the `env` parameter to load only the necessary toolsets, thereby reducing the number of imported `Tools`.
        

## **Appendix: DataWorks MCP Server**

[MCP](https://modelcontextprotocol.io/introduction) (Model Context Protocol) is a protocol that provides standardized context for Large Language Models (LLMs). It defines a standard way for large models to connect to different data sources and tools, enabling them to understand and process information more effectively. An MCP client can call the capabilities of various MCP servers through the MCP protocol.

The DataWorks MCP Server encapsulates the [DataWorks OpenAPI](/help/en/dataworks/developer-reference/use-dataworks-openapi) and provides the big data capabilities of DataWorks. You can integrate the [DataWorks MCP Server](https://github.com/aliyun/alibabacloud-dataworks-mcp-server) into third-party products, programs, or agents to quickly call DataWorks capabilities.

**Important**

When you use the agent outside the DataWorks personal development environment, you need to configure **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** (obtain them [**here**](https://ram.console.alibabacloud.com/profile/access-keys)) in the **env** parameter and delete the **ALIBABA\_CLOUD\_CREDENTIALS\_URI** configuration.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3948324771/CAEQUxiBgIDRsYmC5RkiIGUzZjNjZjAwZWY4ZTQyOWY4NzY2YmE0NDc1OTYwMTFm5035958_20250403112102.400.svg)
