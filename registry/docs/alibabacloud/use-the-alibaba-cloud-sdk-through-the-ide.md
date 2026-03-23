This topic describes how to use Alibaba Cloud SDKs for Java in an Integrated Development Environment (IDE) on Windows. In this example, IntelliJ IDEA is used.

## **Prerequisites**

-   The Java Development Kit (JDK) is installed. For more information, see [Install the JDK on Windows](/help/en/sdk/developer-reference/jdk-installation).
    
-   IntelliJ IDEA is installed. For more information, see [Build a Java development environment on Windows](/help/en/sdk/developer-reference/building-a-java-development-environment-in-windows).
    

## **Use SDKs**

## **Use a sample project provided in OpenAPI Explorer**

1.  Go to [OpenAPI Explorer](https://api.alibabacloud.com/api). Search for the API operation that you want to use. In this example, the DescribeInstanceTypeFamilies operation of Elastic Compute Service (ECS) is used. Enter DescribeInstanceTypeFamilies in the search box, and click DescribeInstanceTypeFamilies in the search results to go to the API debugging page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796687.png)
    
2.  On the **Parameters** tab in the middle column, specify the parameters based on your business requirements. When you specify the parameters, read the information on the **Document** tab in the rightmost column. Make sure that you understand the usage notes of the operation and the description of each parameter. Pay attention to billing-related information. In this example, the DescribeInstanceTypeFamilies operation supports two request parameters. You must specify a value such as cn-hangzhou for the RegionId parameter. The Generation parameter is optional. You can set this parameter to ecs-5, which indicates the V-series instance family. You can view the valid values of the parameters on the Document tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796688.png)
    
3.  On the **SDK Sample Code** tab in the rightmost column, select a programming language and click **Download Project** to download the complete SDK project to your computer. Then, decompress the package.
    
    **Note**
    
    The complete project contains the SDK information and the demo for calling the API operation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796690.png)
    
4.  Open IntelliJ IDEA, choose File > Open in the top navigation bar, and then select the decompressed project folder. Wait for Maven to automatically install the dependency.
    
5.  Before you call this operation, you must obtain an AccessKey pair as the access credential. We recommend that you use the AccessKey pair of a Resource Access Management (RAM) user. For more information, see the [Create an AccessKey pair for a RAM user](/help/en/ram/user-guide/create-an-accesskey-pair) section of the "Create an AccessKey pair" topic.
    
    **Important**
    
    After you obtain the AccessKey pair of a RAM user, you must configure the AccessKey pair in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
6.  Run the SDK demo code.
    
    In the left-side directory tree, double-click Sample to open it. Click the Run icon in the upper-right corner of the editor to run the code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3342353371/p800756.png)
    
7.  View the result. Click anywhere in the Run window in the lower part of the console and press `Ctrl+F` to search for `statusCode`. If `"statusCode":200` is displayed, the call was successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3342353371/p800758.png)
    

## Install an SDK in an existing project

1.  Obtain the SDK.
    
    Go to [SDK Center](https://api.alibabacloud.com/api-tools/sdk) and select the cloud service whose SDK you want to use. In this example, ECS is used. Select **V2.0** as the SDK version and **Java** as the programming language. In the **Installation Method** section of the Quick Start tab, select **Apache Maven**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0239598171/p796381.png)
    
2.  Import the SDK.
    
    Open the Maven project that you created in IntelliJ IDEA. In the pom.xml file, create the <dependencies></dependencies> tag and copy the code obtained in Step 1 within the tag.
    
    ```
        <dependencies>
            <!--ECS V2.0 SDK -->
            <dependency>
                <groupId>com.aliyun</groupId>
                <artifactId>ecs20140526</artifactId>
                <version>5.1.2</version>
            </dependency>
        </dependencies>
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796500.png)
    
3.  Right-click the project name and choose Maven > Reload project to download the Maven dependency.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796428.png)
    
4.  Create a Java class.
    
    In the src/main/java directory of the project, right-click the java folder and choose New > Java Class. In this example, the Java class is named Sample.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796438.png)
    
5.  Initialize the cloud service client.
    
    **Important**
    
    1.  You must use an AccessKey pair to complete identity verification when you initialize the client. In this case, you must obtain an AccessKey pair in advance. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
        
    2.  After you obtain the AccessKey pair of a RAM user, you must configure the AccessKey pair in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    3.  For more information about how to configure the endpoint, see [Endpoints](/help/en/openapi/endpoints).
        
    
    ```
    import com.aliyun.ecs20140526.Client;
    import com.aliyun.teaopenapi.models.Config;
    
    public class Sample {
        public static void main(String[] args) throws Exception {
            Config config = new Config()
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            config.endpoint = "ecs-cn-hangzhou.aliyuncs.com";
            Client client = new Client(config);
        }
    }
    ```
    
6.  Call the API operation.
    
    Before you call an API operation, you must read the corresponding [API documentation](https://next.api.alibabacloud.com/document).
    
    In the Maven dependency for a cloud service, the cloud service SDK provides a request class and response class for each API operation. A request class defines the parameters and value types. A response class defines the response parameters. This prevents spelling mistakes when you call the operation.
    
    For example, for the describeInstanceTypeFamilies operation, its request class is DescribeInstanceTypeFamiliesRequest and response class is DescribeInstanceTypeFamiliesResponse.
    
    **Note**
    
    Naming rule for request classes: API name + Request
    
    Naming rule for response classes: API name + Response
    
    ```
    import com.aliyun.ecs20140526.Client;
    import com.aliyun.ecs20140526.models.DescribeInstanceTypeFamiliesRequest;
    import com.aliyun.ecs20140526.models.DescribeInstanceTypeFamiliesResponse;
    import com.aliyun.teaopenapi.models.Config;
    
    public class Sample {
        public static void main(String[] args) throws Exception {
                Config config = new Config()
                        .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                        .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
                config.endpoint = "ecs-cn-hangzhou.aliyuncs.com";
                Client client = new Client(config);
                DescribeInstanceTypeFamiliesRequest describeInstanceTypeFamiliesRequest = new DescribeInstanceTypeFamiliesRequest();
                describeInstanceTypeFamiliesRequest.setRegionId("cn-hangzhou");
                DescribeInstanceTypeFamiliesResponse describeInstanceTypeFamiliesResponse = client.describeInstanceTypeFamilies(describeInstanceTypeFamiliesRequest);
        }
    }
    ```
    
7.  Handle exceptions. Alibaba Cloud SDKs handle exceptions in a unified manner.
    
    TeaException: This type of exceptions are caused by business errors. The following three parameters are provided to handle such an exception:
    
    -   code: the error code that is returned when the exception occurs.
        
    -   message: the error message that is returned when the exception occurs. The message contains the ID of the API request for which the exception is thrown.
        
    -   data: the detailed error information that is returned by the server when an exception occurs.
        
    
    ```
    import com.aliyun.ecs20140526.Client;
    import com.aliyun.ecs20140526.models.DescribeInstanceTypeFamiliesRequest;
    import com.aliyun.ecs20140526.models.DescribeInstanceTypeFamiliesResponse;
    import com.aliyun.tea.TeaException;
    import com.aliyun.teaopenapi.models.Config;
    
    public class Sample {
        public static void main(String[] args) {
            try {
                Config config = new Config()
                        .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                        .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
                config.endpoint = "ecs-cn-hangzhou.aliyuncs.com";
                Client client = new Client(config);
                DescribeInstanceTypeFamiliesRequest describeInstanceTypeFamiliesRequest = new DescribeInstanceTypeFamiliesRequest();
                describeInstanceTypeFamiliesRequest.setRegionId("cn-hangzhou");
                DescribeInstanceTypeFamiliesResponse describeInstanceTypeFamiliesResponse = client.describeInstanceTypeFamilies(describeInstanceTypeFamiliesRequest);
            } catch (TeaException teaException) {
                // Handle exceptions with caution in your actual business scenario and do not ignore exceptions in your project. In this example, error messages are printed for reference only. 
                // Display the error code.
                System.out.println(teaException.getCode());
                // Display the error message. The error message contains the request ID.
                System.out.println(teaException.getMessage());
                // Display the detailed error information that is returned by the server.
                System.out.println(teaException.getData());
            } catch (Exception e) {
                TeaException error = new TeaException(e.getMessage(), e);
                // Handle exceptions with caution in your actual business scenario and do not ignore exceptions in your project. In this example, error messages are printed for reference only. 
                // The error message.
                System.out.println(error.getMessage());
                // The URL of the corresponding error diagnostics.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            }
        }
    }
    ```
    

## **FAQ**

-   #### **What do I do if the "java: error: release version X not supported" error message is returned when I run the code?**
    
    Press `Ctrl+Alt+Shift+S` to open the Project Structure dialog box. Click Modules in the left-side navigation pane. Select a value from the Language level drop-down list based on the JDK version that you use. For example, if you use JDK 8, select 8-Lambdas, type annotations etc. Click Apply and then click OK.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p796707.png)
    
-   #### **What do I do if the "java: Compilationfailed: internal java compiler error" error message is returned when I run the code?**
    
    In the top navigation bar of the IntelliJ IDEA console, choose File > Settings. In the Settings dialog box, choose Build, Execution, Deployment > Compiler > Java Compiler in the left-side navigation pane. Set the project bytecode version and target bytecode version to the version of the JDK that you use. For example, if you use JDK 8, set the versions to 8. Click Apply and then click OK.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1319598171/p800749.png)
    

## **Related operations**

-   [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials)
    
-   [Handle an exception](/help/en/sdk/developer-reference/exception-handling)
    

## **Advanced operations**

-   [Configure an endpoint](/help/en/sdk/developer-reference/endpoint-configuration)
    
-   [Connection pool of HTTP client](/help/en/sdk/developer-reference/connection-pool-of-an-http-client)
    
-   [Configure an HTTPS request](/help/en/sdk/developer-reference/using-https)
    
-   [Configure a proxy](/help/en/sdk/developer-reference/proxy)
    
-   [Configure timeout periods](/help/en/sdk/developer-reference/timeout-configuration)
    
-   [Configure a retry mechanism](/help/en/sdk/developer-reference/configuration-for-retries)
