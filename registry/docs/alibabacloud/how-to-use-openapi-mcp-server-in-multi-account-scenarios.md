When you have multiple Alibaba Cloud accounts, creating and managing a separate OpenAPI MCP server for each account is inefficient. The multi-account feature allows you to use a single MCP server to securely access and manage resources across multiple accounts.

**Important**

The multi-account MCP server feature is implemented by assuming a RAM role. OAuth authorization must be performed by a RAM user or another RAM role. You cannot use the Alibaba Cloud account for this feature.

## **Multi-account MCP server parameters**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1010967.png)

**Multi-account MCP**

**Valid value**

**Description**

**Only this account**

The MCP server can operate only on cloud resources in the current account.

**Multiple accounts**

The MCP server can operate on cloud resources in the current account and in other accounts.

**Multi-account RAM role name**

**Valid value**

**Use case**

**Description**

**Resource Directory Management Role: ResourceDirectoryAccountAccessRole**

If your organization [uses a resource directory to manage a multi-account environment](/help/en/resource-management/resource-directory/getting-started/use-a-resource-directory-to-quickly-establish-a-structure-for-the-accounts-and-resources-of-an-enterprise), and you are operating from the management account of the resource directory, you can select this role to manage resources in all member accounts.

Resource Directory automatically creates a service-linked role named ResourceDirectoryAccountAccessRole in all member accounts. The trust policy for this role automatically designates the management account as a trusted entity, granting it permission to assume the role and access member accounts.

**Custom Roles**

If your organization does not use a resource directory to manage a multi-account environment, choose this option.

In the target account, you must manually create a RAM role and specify the Alibaba Cloud account that hosts the OpenAPI MCP server as the trusted principal.

**Note**

Attach the necessary policies to the RAM role.

## **Example 1: Using the Resource Directory management role**

If your organization uses a resource directory, you can directly assume the ResourceDirectoryAccountAccessRole in member accounts to access their cloud resources from the management account.

### **1\. Create an OpenAPI MCP server in the management account**

In the management account, go to the [Alibaba Cloud OpenAPI MCP Server page](https://api.alibabacloud.com/mcp) to create an MCP server. Set **Multi-account MCP** to **Multiple accounts** and **Multi-account RAM role name** to **ResourceDirectoryAccountAccessRole**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011420.png)

### **2\. Monitor member account resources from the MCP client**

This example uses AI Coding Assistant Lingma.

1.  Complete the MCP server configuration according [to configuring a MCP server in Lingma](/help/en/openapi/user-guide/openapi-mcp-server-guide#81bbc7b729bij).
    
2.  In the Lingma chat window, select an LLM from the **Agent** drop-down list and enter a natural language query. Example: "Query the running status of ECS instances in account 1234567890\*\*\*\*\*\* in the cn-hangzhou region."![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011445.png)
    
3.  When you execute the MCP tool, the OpenAPI MCP Server automatically assumes the role for the target account (if permissions are sufficient) and performs the operation within that account.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011435.png)
    

## **Example 2: Using a custom role**

This example demonstrates how an O&M team in a central account can use a custom RAM role to securely access and manage resources in other business accounts (such as R&D or marketing). This approach centralizes management and improves efficiency compared to manually assuming roles in different accounts.

### **1\. Create a RAM role**

In each business account that the O&M team needs to access, create a RAM role that the O&M account can assume.

1.  In the [RAM console](https://ram.console.alibabacloud.com/roles/create), navigate to the **Create Role** page. Select **Cloud Account** as the principal type and specify the O&M team's account as the trusted principal.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011406.png)
    
2.  Attach policies to the RAM role that grant the required permissions for the O&M team to perform their tasks. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#section-7cn-w4q-b89).
    
3.  Provide the name of this RAM role to the O&M team.
    

### **2\. Create an OpenAPI MCP Server**

From the O&M team's Alibaba Cloud account, go to the [Alibaba Cloud OpenAPI MCP Server](https://api.alibabacloud.com/mcp) page. When creating the MCP server, set **Multi-account MCP** to **Multiple accounts**, select **Custom Roles** for **Multi-account RAM role name**, and enter the RAM role name from the business account into the **Custom Roles** field.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011400.png)

### **3\. Monitor business account resources from the MCP client**

An O&M engineer can now monitor the running status of ECS instances from an MCP client. This example uses Lingma.

1.  Complete the MCP server configuration according [to configuring a MCP server in Lingma](/help/en/openapi/user-guide/openapi-mcp-server-guide#81bbc7b729bij).
    
2.  In the Lingma chat window, select an LLM from the Agent drop-down list and enter a natural language query. Example: "Query the running status of ECS instances in account 1234567890\*\*\*\*\*\* in the cn-hangzhou region."
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011331.png)
    
3.  When you execute the MCP tool, the OpenAPI MCP Server automatically assumes the role for the target account (if permissions are sufficient) and performs the operation within that account.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4371878571/p1011336.png)
