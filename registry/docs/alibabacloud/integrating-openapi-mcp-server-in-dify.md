This topic describes how to deploy a Dify server and integrate it with an OpenAPI Model Context Protocol (MCP) server by using a custom OAuth application for authentication.

## Prerequisites

Before you begin, ensure that you have:

-   An Elastic Compute Service (ECS) instance with a minimum of 2 vCPUs and 4 GiB of RAM
    
-   Docker installed on the ECS instance
    
-   Dify version 1.8.0 or later
    

## Overview

The MCP is an open standard that enables AI applications to securely connect with external tools and data sources. This integration allows your Dify applications to interact with Alibaba Cloud services through natural language queries.

### How it works

The integration works as follows:

1.  The OpenAPI MCP server exposes Alibaba Cloud APIs as tools for AI agents.
    
2.  After you connect Dify to the OpenAPI MCP server, Dify automatically discovers the available tools.
    
3.  Your Dify agents can then invoke these tools to perform actions based on natural language prompts.
    
4.  Secure access to your Alibaba Cloud resources is managed through the OAuth 2.1 authorization flow.
    

### Integration steps

The integration process consists of the following steps:

1.  Deploy a Dify server on an ECS instance.
    
2.  Create an OAuth application in the RAM console.
    
3.  Create an OpenAPI MCP server.
    
4.  Connect Dify to the OpenAPI MCP server.
    
5.  Configure a model in Dify.
    
6.  Test the integration.
    

## Procedure

### Step 1: Deploy a Dify server

This procedure shows how to deploy a Dify server on an [ECS instance](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key) by using Docker.

1.  Install [Docker](/help/en/ecs/user-guide/install-and-use-docker) on the ECS instance.
    
2.  Run the following command to download the [Dify code](https://github.com/langgenius/dify):
    
    ```
    git clone https://github.com/langgenius/dify.git
    ```
    
3.  Run the following command to create a Dify configuration file:
    
    ```
    cd dify/docker
    cp .env.example .env
    vim .env
    ```
    
4.  In the `.env` configuration file, find the following configuration items and set their values:
    
    **Note**
    
    The values that you set here must match the **callback URI** that you configure for the **OAuth application** in a later step.
    
    **Configuration item**
    
    **Value**
    
    **CONSOLE\_API\_URL**
    
    `http://<Public IP address or domain name of the ECS instance>`. For a local deployment, use `http://127.0.0.1`.
    
    **CONSOLE\_WEB\_URL**
    
    `http://<Public IP address or domain name of the ECS instance>`. For a local deployment, use `http://127.0.0.1`.
    
    **SERVICE\_API\_URL**
    
    `http://<Public IP address or domain name of the ECS instance>`. For a local deployment, use `http://127.0.0.1`.
    
    **APP\_API\_URL**
    
    `http://<Public IP address or domain name of the ECS instance>`. For a local deployment, use `http://127.0.0.1`.
    
    **APP\_WEB\_URL**
    
    `http://<Public IP address or domain name of the ECS instance>`. For a local deployment, use `http://127.0.0.1`.
    
    **FILES\_URL**
    
    `http://<Public IP address or domain name of the ECS instance>`. For a local deployment, use `http://127.0.0.1`.
    
5.  Run the following commands to start the Dify server:
    
    ```
    # Stop and remove all containers and networks for the project
    docker compose down
    
    # Create and start all services in the background (detached mode)
    docker compose up -d
    ```
    
    If the server starts successfully, you see the following container status messages indicating all services are running. If an error occurs, re-run `docker compose up -d` until all services start successfully.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006463.png)
    

### Step 2: Create an OAuth application

Create an OAuth application in the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/applications). When you configure the parameters, note the following:

**Parameter**

**Description**

**OAuth Protocol Version**

Must be **2.1**.

**Application Type**

Select **Web Application** or **Native Application**. This application type is used for server-side applications like Dify.

**Access Token Validity**

Set an appropriate validity period based on your security requirements.

**Refresh Token Validity**

Set an appropriate validity period based on your security requirements.

**Callback Address**

This must be `http://<Public IP address or domain name of the ECS instance>/console/api/mcp/oauth/callback`. This URI must use the same URL that you configured in the Dify `.env` file.

**OAuth Scope**

Must be `/acs/mcp-server`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006485.png)

### Step 3: Create an OpenAPI MCP server

1.  Go to the [Alibaba Cloud OpenAPI MCP Server](https://api.alibabacloud.com/mcp) page.
    
2.  Create an MCP server or select an existing one.
    
3.  Set **OAuth configuration** to **Custom OAuth** and select the OAuth application you created in Step 2.
    
    **Note**
    
    When you select **Custom OAuth**, the OpenAPI MCP server uses your application to handle the authorization flow. It redirects users to the callback URI to grant Dify access.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006480.png)
    

### Step 4: Connect Dify to the MCP server

1.  In your browser, navigate to the public IP address of your ECS instance to access the Dify console. Complete the initial setup and logon.
    
2.  Navigate to **Tools** > **MCP** and add your MCP server. For **Server URL**, enter the **Streamable HTTP endpoint** from your Alibaba Cloud OpenAPI MCP Server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006679.png)
    
3.  Click **Add & Authorize** to initiate the OAuth flow. After you approve the authorization request, Dify automatically discovers and displays the tools available from the MCP server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006690.png)
    

### Step 5: Configure a model in Dify

Dify supports a variety of AI models, including Qwen, DeepSeek, and OpenAI's GPT series. For more information, see [Model configuration overview](https://docs.dify.ai/zh-hans/guides/model-configuration).

1.  In the Dify console, navigate to **Settings** from your user profile menu.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006700.png)
    
2.  In the **Model Provider** section, add and configure a model. This example uses a Qwen model. For more information about Qwen, see [Model overview](/help/en/model-studio/models#850732b1aabs0).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006704.png)
    
3.  Enter your API key and configure the model settings. You must set a default model for reasoning and another for embeddings.
    
    **Note**
    
    The model that you choose for reasoning must support tool use, such as qwen3-max-preview or DeepSeek-R1.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006716.png)
    

### Step 6: Test the integration

Test the integration by creating a simple agent application in Dify.

1.  Create an agent application. Make sure to select **Agent** as the application type.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006727.png)
    
2.  In the agent's settings, click **Add** in the **Tools** section. Select the MCP server that you added to Dify.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006732.png)
    
3.  Go to the **Debug & Preview** panel and test the integration with a natural language prompt, such as "Query the number of ECS instances in the Hangzhou region."
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4442397571/p1006758.png)
