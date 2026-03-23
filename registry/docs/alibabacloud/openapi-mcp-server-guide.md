Model Context Protocol (MCP) is a standardized protocol that enables Large Language Models (LLMs) to interact with external tools and data sources, such as APIs and databases. By centralizing tool-calling logic in a server, MCP allows an LLM to invoke a wide range of functions through a single, unified protocol. This topic describes how to create and use OpenAPI MCP Server to allow LLMs to manage your Alibaba Cloud resources by calling APIs.

## **Create an MCP server**

**Note**

If you perform this task as a RAM user, you must be granted the required permissions. For more information, see [Grant permissions on OpenAPI MCP Server to a RAM user](#c3ab297089zwd).

1.  Go to the [OpenAPI MCP Server page](https://api.alibabacloud.com/mcp), click the **Create an MCP Server** tab, and configure the following parameters:
    
    **Note**
    
    Due to the context length and tool selection limitations of most LLMs, we recommend adding no more than 30 APIs to a single MCP server. If you need to use more APIs, create multiple MCP servers.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name must be 3 to 16 characters in length and can contain only lowercase letters, digits, hyphens (-), and underscores (\_). Example: `mcp-demo`.
    
    **Document Language**
    
    The language for the API descriptions in the generated tools.
    
    **OAuth Configuration**
    
    **Alibaba Cloud Official OAuth**: Suitable for local clients, such as AI Coding Assistant Lingma, Cherry Studio, and Cursor.
    
    **Note**
    
    A RAM administrator must install and assign the official OpenAPI MCP Server application from the [RAM console > OAuth Preview > Third-party Application](https://ram.console.alibabacloud.com/applications?activeTab=ThirdParty) page. If this is not done, OAuth authorization will fail for your MCP server. For more information, see [Install and authorize a third-party application](/help/en/ram/third-party-application-authorization).
    
    **Custom OAuth**: Suitable for self-managed platforms and third-party services, such as Dify, AgentScope, and Claude.
    
    **Multi-account MCP**
    
    Specify whether to enable the centralized management of MCP servers across multiple accounts. For more information, see [Use OpenAPI MCP Server in multi-account scenarios](/help/en/openapi/how-to-use-openapi-mcp-server-in-multi-account-scenarios).
    
    **List of Cloud Products and APIs**
    
    Configure cloud services and their APIs for the MCP server.
    
    -   You can select APIs for only one cloud service at a time. To add APIs from other services, click **Add Cloud Products and APIs** after confirming your current selection.
        
    -   To add more APIs for a service you have already added, click **Add APIs**.
        
    
    **Terraform Tools**
    
    Integrate Terraform tools into the MCP server through Terraform HCL code. For more information, see [Use Terraform tools in OpenAPI MCP Server](/help/en/openapi/how-to-use-terraform-tools-in-openapi-mcp-server).
    
    **Note**
    
    Terraform tools only support creating resources but not modifying resources.
    
    **System Tools**
    
    System tools are built-in official tools. If selected, they will be integrated into your MCP server.
    
    **Description**
    
    Add a description for the MCP server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3935878571/p960436.png)
    
2.  Click **Create** and confirm the risk warning. After the server is created, the system provides the Streamable HTTP endpoint, SSE endpoint, and client configuration details. These are required to connect a client to the MCP server.
    

## **Configure the MCP server in a client**

You can use the MCP server in common clients, such as [Cherry Studio](https://docs.cherry-ai.com/cherry-studio/download), [Cursor](https://cursor.com/cn), [Lingma](/help/en/lingma/user-guide/installation-guide), and [Cline](https://cline.bot/). Refer to the configuration method for your client.

**Note**

If you are using the MCP server in Dify, see [Integrate an OpenAPI MCP server in Dify](/help/en/openapi/integrating-openapi-mcp-server-in-dify).

### **One-click configuration**

**Note**

You must install [Cherry Studio](https://docs.cherry-ai.com/cherry-studio/download) or [Cursor](https://cursor.com/cn) beforehand.

If you use the MCP server in Cherry Studio or Cursor, you can use the **one-click configuration** feature to configure it.

### **Manual configuration**

## Cherry Studio

**Note**

Ensure that [Cherry Studio](https://docs.cherry-ai.com/cherry-studio/download) is installed.

1.  Configure the model server in Cherry Studio.
    
    1.  We recommend using the qwen3-235b-a22b model from Alibaba Cloud Model Studio.
        
        The API key is generated in the [Model Studio](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key) console. The API address is `https://dashscope.aliyuncs.com/compatible-mode/v1/`.
        
    2.  After you add the model, edit it to configure capabilities such as networking, inference, and tools.
        
2.  Configure the MCP server.
    
    1.  In the **Settings** > **MCP Servers** section, add a server.
        
    2.  Configure the MCP server. Enter a name, select **Streamable HTTP** as the type, and for the URL, enter the **Streamable HTTP endpoint** that was provided when you created the MCP server.
        
    3.  Click Save. Then, the system redirects you to the User Authorization page. Review the authorization information, and click **Authorize**. For a detailed introduction to OAuth, see [OAuth Management](https://www.alibabacloud.com/help/en/ram/user-guide/oauth-management/).
        
        **Note**
        
        You must grant the required API operation permissions to the RAM user participating in the authorization beforehand. Otherwise, permission errors may occur. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p964812.png)
        
        After authorization is complete, Cherry Studio automatically starts the MCP server.
        

## Cursor

**Note**

Ensure that [Cursor](https://cursor.com/cn) is installed. This example uses the Free Edition of Cursor. You can download the edition that suits your needs.

1.  In the Cursor menu bar, choose **File** > **Preferences** > **Cursor Settings** > **Tools & Integrations**, and click Add Custom MCP to configure MCP servers.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985463.png)
    
2.  From the MCP server's details page, copy the client configuration JSON, paste it into the mcp.json file, then press Ctrl+S to save.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985471.png)
    
3.  Complete the authorization on the User Authorization page. For a detailed introduction to OAuth, see [OAuth Management](https://www.alibabacloud.com/help/en/ram/user-guide/oauth-management/).
    
    **Note**
    
    You must grant the required API operation permissions to the RAM user participating in the authorization beforehand. Otherwise, permission errors may occur. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985474.png)
    
4.  You can view the configured MCP server information in Cursor Settings.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985472.png)
    

## AI Coding Assistant Lingma

**Note**

Ensure that [Lingma](/help/en/lingma/user-guide/installation-guide) is installed.

1.  Open the Lingma plug-in and click **MCP tools** on the introduction page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6786363671/p960460.png)
    
2.  In the upper-right corner of the pop-up window, click the `**+**` icon and select Add manually.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p960465.png)
    
3.  In the Add MCP Server window, configure the following parameters and click Add.
    
    Name
    
    The name of the MCP server. We recommend that it be the same as the name you entered on the Alibaba Cloud OpenAPI MCP Server page.
    
    Type
    
    Select `STDIO`.
    
    Command
    
    Enter `npx`.
    
    Arguments
    
    The format is `mcp-remote-alibaba-cloud <SSE Endpoint>`.
    
    **Note**
    
    Only the SSE Endpoint is supported. Obtain the SSE Endpoint from the details provided after you create the MCP service.
    
4.  Complete the authorization on the User Authorization page. For a detailed introduction to OAuth, see [OAuth Management](https://www.alibabacloud.com/help/en/ram/user-guide/oauth-management/).
    
    **Note**
    
    You must grant the required API operation permissions to the RAM user participating in the authorization beforehand. Otherwise, permission errors may occur. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p964813.png)
    
    The following figure shows the successful configuration of the MCP server in Lingma:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p960495.png)
    

## Cline

**Note**

Ensure that the Cline plug-in is installed in your IDE. This topic uses VS Code as an example. For more information, see [Cline](https://cline.bot/).

1.  Open the Cline plug-in in VS Code and enter your API key.
    
2.  On the top menu bar, click MCP Servers to configure the MCP server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985415.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985420.png)
    
3.  Complete the authorization on the User authorization page. For a detailed introduction to OAuth, see [OAuth Management](https://www.alibabacloud.com/help/en/ram/user-guide/oauth-management/).
    
    **Note**
    
    You must grant the required API operation permissions to the RAM user participating in the authorization beforehand. Otherwise, permission errors may occur. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985424.png)
    
4.  After authorization is complete, the configuration is successful if the newly configured MCP server appears in the MCP Servers section at the bottom of Cline.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985425.png)
    

## Inspector

**Note**

-   This section just provides a brief introduction. For more information, see [Inspector](https://github.com/modelcontextprotocol/inspector?tab=readme-ov-file).
    
-   Your Node.js version must be 22.7.5 or later.
    

1.  In the terminal, run the following command to start Inspector. After it starts, you can access it at [http://localhost:6274](http://localhost:6274) by default.
    
    ```
    npx @modelcontextprotocol/inspector
    ```
    
2.  In the left-side navigation pane of the MCP Inspector client, select a transport type. This example uses **Streamable HTTP**. In the URL field, enter the **Streamable HTTP endpoint** that was generated when you created the MCP server, and click **Connect**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p990747.png)
    
3.  Complete the authorization on the User Authorization page. For a detailed introduction to OAuth, see [OAuth Management](https://www.alibabacloud.com/help/en/ram/user-guide/oauth-management/).
    
    **Note**
    
    You must grant the required API operation permissions to the RAM user participating in the authorization beforehand. Otherwise, permission errors may occur. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985474.png)
    
4.  After authorization is complete, you can see the MCP server's information on the Tools tab.
    
5.  You can click any tool to view its details on the right. You can also set parameters to run the tool.
    

## **Use the MCP server**

After configuration, you can use the MCP server to manage your cloud resources. For more information, see the "[More methods to integrate MCP servers](#2cf9054e182q0)" section in this topic.

## Cherry Studio

1.  From the text box menu, select the MCP server.
    
2.  Test the MCP server. For example, you can query the ECS instances in a region:
    
    ```
    Please query the ECS instances in region cn-chengdu and set x_mcp_region_id to cn-chengdu.
    ```
    
    **Note**
    
    The result should be accurate if the MCP server selects the correct API and configures the request parameters properly. If an error occurs, you can try changing the MCP server's configurations to resolve it.
    

## Cursor

1.  Select the model and API key. Because Cursor has specific requirements for LLM providers, see [Supported providers](https://docs.cursor.com/settings/api-keys#supported-providers) for more information. This example uses the default values.
    
2.  In the Cursor dialog box, click Add Context and select your MCP server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985484.png)
    
3.  In the dialog box, enter a natural language query to test your MCP server. For example, enter "Please query the number of ECS instances in the China (Chengdu) region and show only the instance count" and press Enter. When prompted, click Run tool to proceed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985485.png)
    
4.  View the execution result. The result should be accurate if the MCP server selects the correct API and configures the request parameters properly. If an error occurs, you can try changing the MCP server's configurations to resolve it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985490.png)
    

## Lingma

1.  In Lingma, select a model from the **Agent** drop-down list and enter a prompt. For example, to query the ECS instances in the China (Chengdu) region, you must set x\_mcp\_region\_id to the region ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p960506.png)
    
2.  Follow the prompts in Lingma to execute the task.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p960507.png)
    
3.  View the result. The result should be accurate if the MCP server selects the correct API and configures the request parameters properly. If an error occurs, you can try changing the MCP server's configurations to resolve it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p960510.png)
    

## Cline

1.  In the Cline dialog window, enter a natural language query to test your MCP server. For example, enter "Please query the number of ECS instances in the China (Chengdu) region."
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985434.png)
    
    The figure above shows that Cline uses the configured MCP server and selects the DescribeInstances API. The value for the RegionId parameter is also taken from the input.
    
2.  Review the execution result. The result should be accurate if the MCP server selects the correct API and configures the request parameters properly. If an error occurs, you can try changing the MCP server's configurations to resolve it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881747571/p985445.png)
    

## **Modify the MCP server's configurations to enhance output accuracy**

If an LLM provides inaccurate responses based on the MCP server, you can modify the API overview, description, or request parameter descriptions on the MCP server's details page to improve its understanding of API features. The following examples show how to modify the MCP server's configurations.

### **Example 1: Errors or inaccurate data when operating on resources outside the China (Hangzhou) region**

MCP servers use x\_mcp\_region\_id to switch endpoints. If an LLM fails to understand from your input that it must pass x\_mcp\_region\_id, it operates on resources in the China (Hangzhou) region by default.

You can resolve this issue in one of two ways:

-   Explicitly tell the LLM the desired value of x\_mcp\_region\_id in your prompt.
    
    ```
    Query the ECS instances in the China (Qingdao) region and set x_mcp_region_id to cn-qingdao.
    ```
    
-   Adjust the API overview or the RegionId parameter's description on the MCP server's details page.
    
    For example, you can add "Pass the user-specified region to x\_mcp\_region\_id" to the API overview. Alternatively, you can add "If the RegionId parameter is specified, it must be passed along with x\_mcp\_region\_id" to the RegionId description.
    
    Procedure
    
    1.  Go to the [View MCP Servers](https://api.aliyun.com/mcp/servers) page, find the desired MCP server and click **Edit** in the Actions column.
        
    2.  Select the desired API and click **Edit** in the Actions column.
        
    3.  Modify the API overview, request description, and parameter descriptions.
        
    4.  After you save the changes, disconnect from the MCP server on the client and then reconnect for the changes to take effect.
        

### **Example 2: Delete optional parameters from an API**

API documents include parameters for all possible use cases, but some optional parameters might not be necessary in most use cases. You can delete these optional parameters on the MCP server. When passing parameters, the LLM will not access the deleted parameters. This reduces the model's error rate and decreases token usage.

## **Access control for MCP servers**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3935878571/p1011711.png)

An AI agent that integrates with the OpenAPI MCP Server has no inherent identity or permissions to access Alibaba Cloud. It acts as a proxy, performing operations on behalf of a user. The workflow is initiated by a client through an OAuth flow. After the user grants consent, the AI agent receives temporary credentials. All subsequent operations are performed under the user's identity and are constrained by the user's permissions. This ensures adherence to the principle of least privilege and provides clear auditability, as all actions are logged in ActionTrail under the authorizing user's identity.

**Applicable agents** : Cherry Studio, Lingma, Qwen Code, Cursor, Claude Code, Dify, AgentScope, and LangGraph.

## **FAQ**

### **1\. Can the MCP client call all APIs defined in the toolset?**

Not necessarily. The success of an API call depends on the permissions of the RAM user who authorized the client. If the user lacks permission to call a specific API, the LLM's attempt to call it will also fail.

To resolve this, a RAM administrator must grant the necessary permissions to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

**Important**

To prevent accidental data loss, avoid granting RAM users permissions for destructive actions, such as deleting resources. An LLM could misunderstand a prompt and invoke a deletion API, which could negatively impact your business.

### **2\. When I logged as a RAM user, why did I receive a "permission denied" error when creating an MCP server?**

-   Ask a RAM administrator to attach the AliyunOpenAPIMCPServerFullAccess policy to your RAM user account. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
-   Alternatively, ask a RAM administrator to attach a custom policy to your RAM user account:
    
    1.  The RAM administrator can create a custom policy in the [RAM console](https://ram.console.alibabacloud.com/applications?spm=api-workbench..0.0.2f07e85cHf095m&activeTab=ThirdParty). For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
        
        The policy document is as follows:
        
        **Access policy for an MCP server**
        
        This policy grants permissions to create, update, query, and delete an MCP server. It also grants permissions to query the MCP server's system tools.
        
        ```
        {
          "Version": "1",
          "Statement": [
            {
              "Action": [
                "openapiexplorer:*Mcp*",
                "ram:*Application*"
              ],
              "Resource": "*",
              "Effect": "Allow"
            }
          ]
        }
        ```
        
    2.  Ask a RAM administrator to attach the custom policy to your RAM user account. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        

### **3\. If an MCP server's endpoint is exposed, can anyone use it?**

No. Even if an endpoint is exposed, it cannot be used by unauthorized parties. When a client connects to the endpoint, it initiates an OAuth flow that requires the user to authenticate and grant consent. The system then validates that the user's account matches the account that owns the MCP server. Access is granted only if the accounts match.

## **More ways to integrate MCP**

-   Integrate with Dify by using a custom OAuth application configuration. This is supported in Dify 1.8.0 and later. For more information, see [Integrate an OpenAPI MCP server in Dify](/help/en/openapi/integrating-openapi-mcp-server-in-dify).
    
-   Integrate with agents by using the official MCP SDK to handle the OAuth flow. For more information, see [Integrate an OpenAPI MCP server with an AI agent](/help/en/openapi/integrating-openapi-mcp-server-into-agent).
