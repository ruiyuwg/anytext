Extend LLM capabilities with custom plugins when official plugins don't meet your needs. This guide covers creation, testing, and usage for integrating third-party APIs.

## **Workflow**

1.  **Create** **a plugin:** Define the basic information for the plugin.
    
2.  **Add a tool****:** Configure the specific API path, request parameters, and response data for the plugin.
    
3.  **Test and publish:** Test the API connectivity online and publish the tool after you confirm that it functions as expected.
    
4.  **Use in an application:** Associate the plugin with an agent and call it through conversational tests or API integration.
    

## **Create a custom plugin**

## **Create a custom-developed plugin**

### **Step 1: Create a plugin**

1.  Go to the **[Plugins](https://modelstudio.console.alibabacloud.com/?tab=app#/component-manage)** page and click **Create Plugin**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9875566671/p948583.png)
    
2.  Enter the plugin information.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9875566671/p948589.png)
    
    **Plug-in Name**: Enter a semantic name. Chinese and English are supported.
    
    > Example: Dormitory Convention Query Tool Test
    
    **Plug-in Description**: A brief description of the plugin's features and use cases. This helps the LLM determine whether to call the plugin for the current task. Use natural language for the description.
    
    > Example: Queries the content of a specific dormitory convention entry based on the input numeric index.
    
    **Plug-in URL**: The endpoint of the plugin.
    
    > Example:https://domitorgreement-plugin-example-icohrkdjxy.cn-beijing.fcapp.run
    
    -   Under the same domain name, different paths represent separate APIs. Each path corresponds to the **Tool Path** when you create a tool below.
        
    -   Different tools under the same plugin share the same domain name. Each tool’s path corresponds to an independent API.
        
        For example, a plugin named xx contains two APIs:
        
        Query: https://xxx.com/query
        
        Delete: https://xxx.com/delete
        
        In this example, `https://xxx.com` corresponds to the **Plug-in URL**, and `/query` and `/delete` correspond to the **Tool Path** when you create a tool below. This indicates that the plugin contains two tools.
        
    
    If authentication is required, turn on the **Enable Authentication** switch and enter the authentication settings.
    
    **Authentication parameter description**
    
    **Headers** (Optional)
    
    Pass authentication information through a custom header when authentication is required.
    
    **Enable Authentication** (Optional)
    
    Specifies whether authentication is required when an Alibaba Cloud Model Studio application calls your custom plugin. This depends on the security policy of the API provider.
    
    **Authentication Type**
    
    Authentication includes two types: **Service-level Authentication** and **User-level Authentication**.
    
    -   **Location**: You can place the authentication information in the Header or Query.
        
        -   **Header**: Places the authentication information in the Authorization field of the HTTP request header. This information is not visible in the URL.
            
        -   **Query**: Places the authentication information in the URL, for example, https://example.com?api\_key=123456.
            
    -   **Parameter Name**: If you place the authentication information in the Query, enter the parameter used for authentication, such as \`api\_key\`. If you place it in the Header, the parameter defaults to \`Authorization\`.
        
    -   **Type**:
        
        -   **basic**: Does not add any prefix to the token you provide.
            
        -   **bearer**: Adds the \`Bearer\` prefix to the token.
            
        -   **appcode**: Adds the \`APPCODE\` prefix to the token.
            
        
        Both types are placed in the authentication parameter field. For example, if you select \`bearer\`, the call to the plugin becomes (\`Authorization\`: \`Bearer <YOUR\_TOKEN>\`).
        
    -   **Token** (Service-level Authentication): The authentication token obtained from the API provider, such as an API key.
        
    
3.  After you finish, click **Confirm Create Plug-in** > **Create Tool** or click **Continue to Add Tool**.
    

### **Step 2: Create a tool**

1.  Enter the tool information, configure input and output parameters, and set advanced configurations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9875566671/p948908.png)
    
    **Tool parameter description**
    
    **Tool information**
    
    **Tool Name**
    
    Enter a semantic name. Chinese and English are supported.
    
    **Tool Description**
    
    A brief description of the tool's features and scenarios.
    
    This helps the LLM determine whether to call the tool for the current task. Use natural language for the description and provide examples if possible.
    
    **Tool Path**
    
    The relative path to the **Plug-in URL**.
    
    The path must start with a forward slash (/).
    
    This path is appended to the **Plug-in URL** to build the complete URL.
    
    **Request Method**
    
    Select the GET or POST request method to call the API operation as needed.
    
    **Submission Method**
    
    The encoding type for the request or response.
    
    -   **application/json**: The body content is in JSON format.
        
    -   **application/x-www-form-urlencoded**: Encodes form data as key-value pairs.
        
        -   This encoding method is used for POST requests. Form data is encoded as key-value pairs and transmitted through URL encoding. Multiple key-value pairs are separated by ampersands (&), and each key and value are separated by equal signs (=). URL encoding converts special characters into a percent sign (%) followed by two hexadecimal digits. For example, a space is encoded as %20, & is encoded as %26, and = is encoded as %3D.
            
        -   Example: `name=John Doe&age=25` is encoded as `name=John%20Doe&age=25`.
            
    
    **Configure input and output parameters**
    
    **Configure Input Parameters**
    
    Click **Add Input Parameter** to configure the parameter information.
    
    **Parameter Name**: Use a meaningful name to help the LLM understand what parameter information to identify. For example, `city`.
    
    **Parameter Description**: A concise and accurate description of the input parameter's function. This helps the LLM better understand how to retrieve the parameter. For example, for `date`, you can describe it as a date and further specify the format, such as `yyyy-MM-dd`.
    
    **Type**: The parameter type.
    
    **Important**
    
    Sub-properties of the Object type cannot be empty. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p905454.png) icon at the end of the object's row to add a sub-property.
    
    **Passing Method**: Set this accurately.
    
    -   **LLM Recognition**: Indicates that the value of this parameter needs to be extracted by the LLM from the user's input.
        
    -   **Business Pass-through**: Indicates that the value of this parameter is passed through from an external source without being processed or modified.
        
        When you call an application using the DashScope SDK or an HTTP interface, the input parameters of the business pass-through type in the plugin are passed to the application through `biz_params` and `user_defined_params`. For more information, see [Pass plugin parameters via API](/help/en/model-studio/pass-through-of-application-parameters).
        
    
    **Configure Output Parameters**
    
    Click **Add Output Parameters** to configure the parameter information. All parameters are **required**.
    
    The LLM filters and reorganizes the results returned by the API based on the output parameter definitions and the user's query to generate the final answer.
    
    Like input parameters, output parameters should be described as concisely and accurately as possible, with minimal nesting levels.
    
    **Important**
    
    Both GET and POST request methods support the Object parameter type. However, sub-properties of the Object type cannot be empty. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p905454.png) icon at the end of the object's row to add a sub-property.
    
    **Advanced Configuration (Optional)**
    
    **Advanced Configuration**
    
    Provide calling examples for the LLM to reduce missed recalls and false recalls.
    
    This is typically used in scenarios where input parameters are complex and model construction is prone to errors. Providing examples improves the accuracy of the LLM when calling the plugin.
    
    **Value**: The expected input parameters that the LLM should construct when a user enters the current query. Example: If a user enters 'What is the weather in Hangzhou tomorrow?', the expected input parameters are `{"city": "Hangzhou", "date": "2025-04-25"}`.
    
2.  Click **Save Draft** after configuring.
    
3.  Test the tool's API connectivity online.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9875566671/p948913.png)
    
    Click **Test Tool**, enter the authentication information (if authentication is enabled) and the input parameter values, then click **Start Running**.
    
    > If the run fails, adjust the configuration based on the error message in the **Run Result** and test again until it runs successfully.
    
    Enter input parameter values manually or in code. For complex input parameters, use **Code Editing** to submit complete input parameters and values in JSON format.
    
4.  After the test passes, click **Publish**. Only tools that are **Published** can be called in an application.
    

## Use a plugin

## Console

-   **Method 1**: In the **Tools**, add a published tool to an application.
    
    > A tool can only be associated with an **Agent Application** in the **same workspace**.
    
    1.  In the tool's row, click **Add to Application** and select the target application.
        
    2.  Verify the tool has been added in the application.
        
        > Add up to 10 tools. The application selects which tool to call.
        
    3.  Test whether the plugin works as expected.
        
        -   No authentication: You can chat with the LLM in the input box to test the plugin.
            
        -   User-level or service-level authentication: Before starting the conversation, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p905403.png) to configure the authentication token to be passed. If you do not leave the current page, you only need to configure it once.
            
        -   If a tool's input parameter has its **Passing Method** set to **Business Pass-through**, you must click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p905403.png) to configure the variable value to be passed before starting the conversation. If you do not leave the current page, you only need to enter it once.
            
    4.  After testing, **Publish** the application.
        
-   **Method 2**: In the **Plugins**, add tools from a plugin to an agent.
    
    1.  Find the target plugin and click **Add to Agent**.
        
        > A tool can only be associated with an **Agent Application** in the **same workspace**.
        
        > By default, only published tools are added. You can select up to 10 published tools to add to an agent application.
        
    2.  Refer to the steps in **Method 1** to test the plugin on the application's product page and then **Publish** the application.
        
-   **Method 3**: Add plugin tools in the **[Alibaba Cloud Model Studio](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center)**, test the plugin functionality, and **Publish** the application.
    

## API

**Get the tool ID**

Pass the tool ID when calling via API to identify the tool correctly.

1.  In the **Plugins**, find the plugin that the tool belongs to and click **View Details**.
    
2.  Hover your mouse over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p902180.png) icon next to the tool name.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p902183.png) icon to copy the tool ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5373935471/p906346.png)
    

-   When you call an application via an API, if the associated plugin has business pass-through parameters or has **User-level Authentication** enabled, you must use the `biz_params` parameter to pass authentication or pass-through parameter information. For more information, see [Application Calling - DashScope API](/help/en/model-studio/dashscope-api-reference/).
    

## **Manage custom plugins and tools**

**Delete a plugin**

**Important**

Warning: Deleting a plugin deletes all its tools and breaks applications using them. This cannot be undone.

In the **Plugins**, find the target plugin and click **...** > **Delete**.

**Edit a plugin**

1.  In the **Plugins**, find the target plugin and click **View Details**.
    
2.  In the upper-right corner, click **Modify Plug-in**, modify the plugin information, and save your changes.
    
    Changes take effect immediately. Modifying URL, header, or authentication may affect tool calls—test and republish tools.
    

**Editing tools**

Test and republish after modifying tool information.

1.  In the **Plugins**, find the plugin that the tool belongs to and click **View Details**.
    
2.  In the tool's row, click **Modify**, modify the tool information, and click **Save Draft**.
    
3.  Click **Test Tool** to test the tool online.
    
4.  After the run is successful, click **Publish**.
    

**Delete a tool**

**Important**

Warning: Deleting a tool breaks applications using it. This cannot be undone.

1.  In the **Plugins**, find the plugin that the tool belongs to and click **View Details**.
    
2.  In the tool's row, click **Delete**.
    

## **Error codes**

The following table lists common error messages that may occur when you publish a tool:

**Error code**

**Error message**

**Description**

**130040**

Parameter description is missing for xx

The parameter description for xx is missing. Add it and republish the tool.

**130022**

Failed to save tool information. Check whether the example parameters are correct.

A sub-property of an Object type parameter in the input or output parameters is empty. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6153267371/p905454.png) icon at the end of the object's row to add a sub-property.

Or, the request method is GET, but an input parameter is configured as the Object type. The GET request method does not support Object type input parameters—select a different type.
