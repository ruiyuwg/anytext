This topic describes how to use Alibaba Cloud SDKs for Node.js in an Integrated Development Environment (IDE) on Windows. In this example, Visual Studio (VS) Code is used.

## **Prerequisites**

-   Node.js is installed. For more information, see [](/help/en/sdk/developer-reference/install-node-js-in-windows).
    
-   VS Code is installed. For more information, see [Build a Node.js development environment on Windows](/help/en/sdk/developer-reference/build-a-node-js-development-environment-in-windows).
    

## **Use SDKs**

### **Use a sample project provided in OpenAPI Explorer**

**Note**

You may be unable to download sample projects for specific API operations. In this case, [use SDKs in your existing projects](#b56da48d08udd).

1.  Go to [OpenAPI Explorer](https://api.alibabacloud.com/api). Search for the API operation that you want to use. In this example, the DescribeRegions operation of Elastic Compute Service (ECS) is used. Enter DescribeRegions in the search box and click the operation name in the search results to go to the API debugging page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802653.png)
    
2.  On the **Parameters** tab in the middle column, specify the parameters based on your requirements. When you specify the parameters, read the information on the **Document** tab in the rightmost column. Make sure that you understand the usage notes of the operation and the description of each parameter. Pay attention to billing-related information.
    
    In this example, the DescribeRegions operation supports three request parameters.
    
    Parameter
    
    Required
    
    Description
    
    InstanceChargeType
    
    No
    
    The billing method of instances. The supported regions vary based on the billing method. Default value: PrePaid, which indicates the subscription billing method.
    
    ResourceType
    
    No
    
    The resource type. The supported regions vary based on the resource type. Default value: instance.
    
    AcceptLanguage
    
    No
    
    The language in which the response is to be returned. Default value: zh-CN.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802658.png)
    
3.  On the **SDK Sample Code** tab in the rightmost column, select a programming language and click **Download Project** to download the complete SDK project to your computer. Then, decompress the package.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802709.png)
    
4.  Open VS Code, choose File > Open Folder in the top navigation bar, and then select the decompressed folder.
    
5.  In the top navigation bar, choose Terminal > New Terminal. The TERMINAL window appears in the lower part of the console.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p804251.png)
    
6.  Run the following command in the terminal to install TypeScript:
    
    ```
     npm install -g typescript
    ```
    
7.  Run the following command in the terminal to read the `package.json` file in the project, parse all the dependencies listed in the file, and download them to the `node_modules` directory of the project.
    
    ```
    npm install
    ```
    
8.  Run the following command in the terminal to compile the `.ts` TypeScript files into `.js` JavaScript files based on the `tsconfig.json` configuration file. The JavaScript files are usually stored in the specified output directory such as `dist` for subsequent running or deployment.
    
    ```
    tsc
    ```
    
9.  Run the following command in the terminal to run the sample code:
    
    ```
    node ./dist/client.js
    ```
    
10.  View the result. Click anywhere in the terminal and press `Ctrl+F` to search for `statusCode`. If `"statusCode":200` is displayed, the call was successful.
     
     ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p804247.png)
     

### **Use an SDK in an existing project**

1.  Open VS Code. In the top navigation bar, choose File > Open Folder. Create and select a project folder or select an existing project folder. In this example, a folder named tssdkproject is created and selected.
    
2.  In the top navigation bar, choose Terminal > New Terminal. The TERMINAL window appears in the lower part of the console.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802759.png)
    
3.  Obtain the SDK.
    
    Visit [SDK Center](https://api.alibabacloud.com/api-tools/sdk) and select the cloud service whose SDK you want to use. In this example, ECS is used. Select **V2.0** as the SDK version and **TypeScript** as the programming language.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802714.png)
    
4.  Install the SDK.
    
    Copy the installation command to the terminal and press the Enter key.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7871698171/p802763.png)
    
5.  Create a file Click the New File... icon to the right of the project name and enter a file name such as ecsDescribeRegions.js.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802767.png)
    
6.  Initialize the client.
    
    If you want to call the ECS API, you must initialize the ECS client first.
    
    **Important**
    
    1.  You must use an AccessKey pair to complete identity verification when you initialize the client. In this case, you must obtain an AccessKey pair in advance. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
        
    2.  After you obtain the AccessKey pair of a RAM user, you must configure the AccessKey pair in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    3.  For more information about how to configure the endpoint, see [Endpoints](/help/en/openapi/endpoints).
        
    
    ```
    // Import the ECS client and the API client.
    const ecs20140526 = require('@alicloud/ecs20140526');
    const openapiclient = require('@alicloud/openapi-client');
    
    /**
     * Initialize the configurations of the ECS client.
     * Use the AccessKey ID and AccessKey secret configured in the environment variables to complete identity verification and set the endpoint to ecs.cn-hangzhou.aliyuncs.com.
     */
    const ecsconfig = new openapiclient.Config();
    ecsconfig.accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID; // Obtain the AccessKey ID from the environment variables.
    ecsconfig.accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET; // Obtain the AccessKey secret from the environment variables.
    ecsconfig.endpoint = 'ecs.cn-hangzhou.aliyuncs.com'; // Specify the endpoint of ECS.
    
    // Create a client instance for the ECS API of version 20140526.
    const ecs20140526client = new ecs20140526.default(ecsconfig);
    ```
    
7.  Call the API operation. Before you call an API operation, you must read the corresponding [API documentation](https://next.api.alibabacloud.com/document). In this example, the DescribeRegions operation of ECS is used.
    
    **Note**
    
    Each API operation has a request object, named in the ${API name}${Request} format. Example: DescribeRegionsRequest.
    
    ```
    // Import the ECS client and the API client.
    const ecs20140526 = require('@alicloud/ecs20140526');
    const openapiclient = require('@alicloud/openapi-client');
    
    /**
     * Initialize the configurations of the ECS client.
     * Use the AccessKey ID and AccessKey secret configured in the environment variables to complete identity verification and set the endpoint to ecs.cn-hangzhou.aliyuncs.com.
     */
    const ecsconfig = new openapiclient.Config();
    ecsconfig.accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID; // Obtain the AccessKey ID from the environment variables.
    ecsconfig.accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET; // Obtain the AccessKey secret from the environment variables.
    ecsconfig.endpoint = 'ecs.cn-hangzhou.aliyuncs.com'; // Specify the endpoint of ECS.
    
    // Create a client instance for the ECS API of version 20140526.
    const ecs20140526client = new ecs20140526.default(ecsconfig);
    const describeRegionsRequest = new ecs20140526.DescribeRegionsRequest();
    // Initiate a request to query the available regions.
    ecs20140526client.describeRegions(describeRegionsRequest).then((res)=>{
        console.log(res);
    })
    
    ```
    
8.  Handle exceptions.
    
    In V2.0 SDKs for Node.js, exceptions are divided into two types: exceptions that are caused by business errors and exceptions that are caused by network issues. An exception caused by network issues is thrown if the number of retries reaches the upper limit. Relevant external exception modules are not available to the two types of exceptions. Therefore, the two types of exceptions are not distinguished in the following sample code.
    
    ```
    // Import the ECS client and the API client.
    const ecs20140526 = require('@alicloud/ecs20140526');
    const openapiclient = require('@alicloud/openapi-client');
    
    /**
     * Initialize the configurations of the ECS client.
     * Use the AccessKey ID and AccessKey secret configured in the environment variables to complete identity verification and set the endpoint to ecs.cn-hangzhou.aliyuncs.com.
     */
    const ecsconfig = new openapiclient.Config();
    ecsconfig.accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID; // Obtain the AccessKey ID from the environment variables.
    ecsconfig.accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET; // Obtain the AccessKey secret from the environment variables.
    ecsconfig.endpoint = 'ecs.cn-hangzhou.aliyuncs.com'; // Specify the endpoint of ECS.
    
    // Create a client instance for the ECS API of version 20140526.
    const ecs20140526client = new ecs20140526.default(ecsconfig);
    const describeRegionsRequest = new ecs20140526.DescribeRegionsRequest();
    // Initiate a request to query the available regions.
    ecs20140526client.describeRegions(describeRegionsRequest).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.message);
        throw err;
    });
    ```
    
9.  Run the SDK demo code.
    
    1.  If you have installed the Code Runner extension, right-click anywhere in the editor and select Run Code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p802996.png)
        
    2.  Run the code by using the node command in the terminal. Example: `node .\ecsDescribeRegions.js`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p803009.png)
        
    3.  Select the file you want to execute such as ecsDescribeRegions.js. Click the Run and Debug icon in the left-side navigation bar or press `Ctrl+Shift+D`. Then, click Run and Debug to run the code.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2071698171/p803007.png)
        
10.  Optional. You can also copy the sample code provided in OpenAPI Explorer to a file to run the sample code. For more information about how to obtain the sample code, see [Automatic generation of SDK examples](/help/en/openapi/user-guide/sdk-code-is-automatically-generated).
     

## **Related operations**

-   [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-node-js-access-credentials)
    
-   [Handle an exception](/help/en/sdk/developer-reference/handle-an-exception)
    

## **Advanced operations**

-   [Configure an endpoint](/help/en/sdk/developer-reference/configure-an-endpoint-1)
    
-   [Configure an HTTPS request](/help/en/sdk/developer-reference/configure-an-https-request-1)
    
-   [Configure a proxy](/help/en/sdk/developer-reference/configure-a-proxy-1)
    
-   [Configure a timeout period](/help/en/sdk/developer-reference/configure-a-timeout-period-1)
    
-   [Configure a retry mechanism](/help/en/sdk/developer-reference/configure-a-retry-mechanism-1)
