This topic describes how to install and use the Alibaba Cloud API Toolkit extension in Visual Studio Code (VS Code).

## **Installation of Alibaba Cloud API Toolkit**

### **Prerequisites**

[VS Code](https://code.visualstudio.com/) is installed.

This topic describes two methods to install Alibaba Cloud API Toolkit.

### Method 1: Download and install the extension from Extensions

1.  In the left-side navigation bar of VS Code, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9490565171/p785901.png) icon.
    
2.  Search for Alibaba Cloud API Toolkit and click **Install**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6931976171/p794737.png)

### **Method 2: Download the installation package from a browser**

1.  Visit the [Alibaba Cloud API Toolkit](https://marketplace.visualstudio.com/items?itemName=alibabacloud-openapi.vscode-alicloud-api) page on the official Marketplace of VS Code in a browser. Click **Install**. The VS Code client is invoked and the Alibaba Cloud API Toolkit page appears.
    
2.  On the Alibaba Cloud API Toolkit page in VS Code, click **Install**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6931976171/p794736.png)

### Verify the installation

After the extension is installed, the Alibaba Cloud icon appears in the left-side navigation pane.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3736682371/p794739.png)

## **Configuration of user identity and credential**

You must configure user identity and credential before you call API operations. Only AccessKey pairs are supported as credentials for this extension. You can follow the following procedures to configure user identity and credential.

### **Add or modify identity and credential configurations**

1.  Install the Alibaba Cloud CLI Tools extension.
    
    1.  Visit the [Alibaba Cloud CLI Tools](https://marketplace.visualstudio.com/items?itemName=alibabacloud-openapi.aliyuncli) page in a browser and click **Install**.
        
    2.  In the message that appears, click **Open**.
        
    3.  On the Alibaba Cloud CLI Tools page in VS Code, click **Install**.
        
    4.  After the extension is installed, the Alibaba Cloud icon appears in the left-side navigation pane.
        
    
    **Note**
    
    You can also directly install Alibaba Cloud CLI Tools in VS Code. For more information, see [Use the Alibaba Cloud CLI extension for VS Code](/help/en/cli/use-alibaba-cloud-cli-visual-studio-code-plug-in).
    
2.  Configure the identity and credential.
    
    1.  In the top navigation bar of VS Code, choose **Terminal** > **New Terminal**.
        
    2.  Run the `aliyun configure` command on the terminal and complete the configurations as prompted. You can use an existing AccessKey pair or [create a new one](/help/en/ram/user-guide/create-an-accesskey-pair).
        
        **Important**
        
        To reduce the risk of an AccessKey pair leak, the AccessKey secret is displayed only when you create it and cannot be retrieved later. You must store it in a secure location.
        
    3.  Press Enter after you configure each line of command. If **Saving profile\[xxx\] ...Done.** is returned, the profile is saved. If **!!! Configure Failed please configure again !!!** is returned, the identity and credential failed to be verified due to invalid parameter format or values. In this case, the profile is still saved.
        
        ```
        $ aliyun configure
        Configuring profile 'default' ...
        Aliyun Access Key ID [None]: <Your AccessKey ID>
        Aliyun Access Key Secret [None]: <Your AccessKey Secret>
        Default Region Id [None]: cn-hangzhou
        Default output format [json]: json
        Default Language [zh]: zh
        ```
        
        **Important**
        
        An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, your resources are exposed to great risks. We recommend that you use the AccessKey pair of a Resource Access Management (RAM) user.
        

### **View and switch user identities**

1.  In the status bar in the lower-left corner, click the Alibaba Cloud icon. You can view the configured users in the top search box.
    
2.  Click a profile name to switch the user identity.
    

## **Overview of Alibaba Cloud API Toolkit**

Alibaba Cloud API Toolkit is a lightweight Alibaba Cloud API tool. You can use Alibaba Cloud API Toolkit to quickly query the API operations of Alibaba Cloud services in VS Code. You can also use this extension to debug API operations, and generate and insert SDK sample code.

### Subscription to Alibaba Cloud services

Alibaba Cloud API Toolkit allows you to subscribe to Alibaba Cloud services with a few clicks, supports different versions of APIs of Alibaba Cloud services, and provides prompts for recommended versions. You can press `Ctrl+Cmd+K` (`Ctrl+Win+K` in Windows) to search for and subscribe to Alibaba Cloud services without the need to use a configuration file.

### API search

Alibaba Cloud API Toolkit allows you to search for the APIs to which you have subscribed. You can press `Ctrl+Cmd+L` (`Ctrl+Win+L` in Windows) to search for and view the API references corresponding to the subscribed APIs. You can also insert code snippets.

### API reference preview

You can click an API operation to open a new tab and view the corresponding API reference on the tab. The API reference contains information such as the usage notes, request parameters, response parameters, and error codes.

### API debugging

-   After the identity and credential are verified, you can use Alibaba Cloud API Toolkit to debug API operations.
    
-   You can debug Alibaba Cloud APIs by configuring parameters and view the debugging results.
    
-   You can directly view the returned results of API operations in VS Code.
    

## Use sample code

**Note**

Before you use the sample code provided by Alibaba Cloud API Toolkit, you must install the SDK of an Alibaba Cloud service.

### **Install the SDK of an Alibaba Cloud service**

1.  Go to [SDK Center](https://api.alibabacloud.com/api-tools/sdk) and click the Alibaba Cloud service whose API you want to call. On the page that appears, set the **SDK Version** parameter to **V2.0** and the All languages parameter to **TypeScript**. In this example, Elastic Compute Service (ECS) is used.
    
    ```
    npm install --save @alicloud/ecs20140526@4.1.8
    ```
    
2.  Run the install command on the terminal.
    

### **Generate SDK sample code**

-   #### **View SDK sample code**
    
    Alibaba Cloud API Toolkit allows you to generate [SDK](https://www.alibabacloud.com/help/en/sdk/) sample code. You can generate SDK sample code for different programming languages by configuring parameters. You can also view SDK sample code or save SDK sample code as a new file in VS Code.
    
-   #### **Insert code snippets**
    
    Alibaba Cloud API Toolkit allows you to insert sample code snippets of SDKs for multiple programming languages with a few clicks. Supported programming languages include Java, Java in asynchronous mode, TypeScript, Python, Go, PHP, and C#. This helps you generate SDK sample code with ease.
    
    -   Method 1: Enter the API operation to which you have subscribed in the editor to search for the code snippet of the API operation.
        
    -   Method 2: Press `Ctrl+Cmd+L` (`Ctrl+Win+L` in Windows) to search for an API operation and insert a code snippet.
        

### **Complete and run the code**

-   Complete the code
    
    -   Modify the endpoint.
        
        Log on to [OpenAPI Explorer](https://next.api.alibabacloud.com/home), move the pointer over **Cloud Products** in the top navigation bar, and then click an Alibaba Cloud service. On the Regions tab of the page that appears, you can view the supported endpoints.
        
    -   Specify request parameters. For more information, see the [API reference preview](#20dd758fbci9u) section of this topic.
        
    -   Optional. Add logging.
        
    -   Save the code.
        
        ```
        import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
        import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
        export default class DescribeRegion {
            static async main(args: string[]): Promise<void> {
                let config = new $OpenApi.Config({
                    // Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables are configured in the code runtime environment. 
                    accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
                    accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
                    // Specify an endpoint. For more information, see endpoints at https://api.aliyun.com/product/Ecs.
                    endpoint: `ecs.cn-hangzhou.aliyuncs.com`,
                });
                let client = new Ecs20140526(config);
                let describeRegionsRequest = new $Ecs20140526.DescribeRegionsRequest({});
                let response = await client.describeRegions(describeRegionsRequest);
                console.log(response.body?.regions?.region);
            }
        }
        ```
        
-   Run the code
    
    1.  Run the following command on the terminal to compile the TypeScript file into a JavaScript file:
        
        ```
        tsc client.ts # client.ts is the file name.
        ```
        
    2.  Create a main.js file and copy the following code in the edit section:
        
        ```
        const { default: Describeregion } = require("./describeregion");
        
        Describeregion.main();
        ```
        
    3.  Run the following command on the terminal to run the sample code:
        
        ```
        node .\main.js
        ```
        
    4.  View the result. If the result displayed in the following figure is returned, the call is successful.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1755773271/p836431.png)
        

## **Feedback**

If you have questions when you use Alibaba Cloud API Toolkit, you can submit feedback on the [GitHub repository](https://github.com/aliyun/alibabacloud-api-vscode-toolkit/issues). This helps improve the experience of using Alibaba Cloud API Toolkit in VS Code.
