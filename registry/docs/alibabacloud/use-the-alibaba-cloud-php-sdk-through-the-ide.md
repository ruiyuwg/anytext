This topic describes how to use Alibaba Cloud SDKs for PHP in an integrated development environment (IDE) on Windows. In this example, Visual Studio (VS) Code is used.

## **Prerequisites**

-   PHP and Composer are installed. For more information, see [Install PHP on Windows](/help/en/sdk/developer-reference/installing-php).
    
-   VS Code is installed. For more information, see [Build a PHP development environment on Windows](/help/en/sdk/developer-reference/building-a-php-development-environment-in-windows).
    

## **Use an SDK**

### **Use a sample project provided in OpenAPI Explorer**

**Note**

You may fail to download a sample project for a specific API operation. In this case, you can use an SDK in an existing project. For more information, see the [Use an SDK in an existing project](#fa61c810a543l) section of this topic.

1.  Go to [OpenAPI Explorer](https://api.alibabacloud.com/api). Search for the API operation that you want to call. In this example, the DescribeRegions operation of Elastic Compute Service (ECS) is used. Enter DescribeRegions in the search box and click the operation name in the search results to go to the API debugging page.
    
    ![1716346246233_4A41CC11-FA46-4973-BC7B-C4AAD6E7F3F0](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5351698171/p803198.png)
    
2.  On the Parameters tab, specify the parameters based on your requirements. When you specify the parameters, read the information on the Document tab on the right side of the debugging page. Make sure that you understand the usage notes of the operation and the description of each parameter. Pay attention to billing-related information.
    
    ![1716346635851_0B018C7F-D759-497b-B529-58E23E4AC41B](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5351698171/p803200.png)
    
3.  On the **SDK Sample Code** tab on the right side of the debugging page, select the PHP programming language and click Download Project to download the complete sample project package to your computer. Then, decompress the package.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1324952271/p817246.png)
    
4.  Open the decompressed package in VS Code and run the `composer install` command in the terminal to install the dependencies that are required by the sample project.
    
    The following error may be reported when you run the `composer install` command:
    
    ```
    Your requirements could not be resolved to an installable set of packages.
    
      Problem 1
        - Root composer.json requires alibabacloud/ecs-20140526 ^4.1.6 -> satisfiable by alibabacloud/ecs-20140526[4.1.6].
        - alibabacloud/ecs-20140526 4.1.6 requires alibabacloud/tea-utils ^0.2.20 -> found alibabacloud/tea-utils[dev-master, 0.1.0, ..., 0.2.19] but it does not match the constraint.
    ```
    
    To fix the error, you can modify the version of the alibabacloud/ecs-20140526 dependency in the composer.json file.
    
    ```
    "alibabacloud/ecs-20140526": "^4.1",
    ```
    
5.  Run the `php src/Sample.php` command in the terminal to run the sample code. If `"statusCode":200` is returned in the response, the call is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9085643371/p817396.png)
    

### Use an SDK in an existing project

1.  Go to [SDK Center](https://api.alibabacloud.com/api-tools/sdk) and select the cloud service whose SDK you want to use. In this example, ECS is used. Select **V2.0** from the **SDK Generation** drop-down list and select **PHP** in the All languages section.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1324952271/p817424.png)
    
2.  Open VS Code. In the top navigation bar, choose File > Open Folder. Create and select a project folder or select an existing project folder. In this example, a folder named phpprojects is created and selected.
    
3.  Copy the command that is used to install the SDK and run the command in the terminal to install the SDK.
    
4.  In the EXPLORER panel, right-click the blank area and select New File to create a PHP file. Name the file demo.php.
    
5.  Initialize a client. To call Alibaba Cloud API operations, you must initialize a client first. In this example, an ECS client is initialized.
    
    **Important**
    
    1.  You must use an AccessKey pair to complete identity verification when you initialize the client. In this case, you must obtain an AccessKey pair in advance. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
        
    2.  After you obtain the AccessKey pair of a RAM user, you must configure the AccessKey pair in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    3.  For more information about how to configure the endpoint, see [Endpoints](/help/en/openapi/endpoints).
        
    
    ```
    <?php
    use AlibabaCloud\Credentials\Credential\Config;
    use AlibabaCloud\SDK\Ecs\V20140526\Ecs;
    
    
    class Sample
    {
        /**
         * Create an ECS client.
         * You can use this method to initialize and return an ECS client, which can be used to call API operations of ECS. 
         * You can obtain the AccessKey ID and AccessKey secret from environment variables to configure the ECS client. This prevents leakage of sensitive information and ensures secure access to the sensitive information. 
         * 
         * @return Ecs Return a configured ECS client.
         */
        public static function createClient()
        {
            // Create a configuration object.
            $config = new Config([
                "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), // Obtain the AccessKey ID of a Resource Access Management (RAM) user from an environment variable.
                "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"), // Obtain the AccessKey secret of the RAM user from an environment variable.
                "endpoint" => "ecs.cn-hangzhou.aliyuncs.com" // Specify the ECS endpoint.
            ]);
    
            // Create another ECS client based on the preceding configurations.
            return new Ecs($config);
        }
    }
    ```
    
6.  Call the API operation. Before you call an API operation, you must read the corresponding [API documentation](https://next.api.alibabacloud.com/document). In this example, the DescribeRegions operation of ECS is used.
    
    **Note**
    
    Each API operation has a request object, named in the ${API name}${Request} format. Example: DescribeRegionsRequest.
    
    ```
    <?php
    
    require_once 'vendor/autoload.php';
    
    use AlibabaCloud\SDK\Ecs\V20140526\Ecs;
    use AlibabaCloud\SDK\Ecs\V20140526\Models\DescribeRegionsRequest;
    use AlibabaCloud\Tea\Utils\Utils\RuntimeOptions;
    use Darabonba\OpenApi\Models\Config;
    
    
    class Sample
    {
        /**
         * Create an ECS client.
         * You can use this method to initialize and return an ECS client, which can be used to call API operations of ECS. 
         * You can obtain the AccessKey ID and AccessKey secret from environment variables to configure the ECS client. This prevents leakage of sensitive information and ensures secure access to the sensitive information. 
         * 
         * @return Ecs Return a configured ECS client.
         */
        public static function createClient()
        {
            // Create a configuration object.
            $config = new Config([
                "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), // Obtain the AccessKey ID of a RAM user from an environment variable.
                "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"), // Obtain the AccessKey secret of the RAM user from an environment variable.
                "endpoint" => "ecs.cn-hangzhou.aliyuncs.com" // Specify the ECS endpoint.
            ]);
    
            // Create another ECS client based on the preceding configurations.
            return new Ecs($config);
        }
        /**
         * 
         * This function is used to show how to use an SDK client to call the DescribeRegions operation. 
         * You can use this function to create a client, construct a request object, and call the operation. 
         * If the call fails, exceptions are captured and error messages are returned. 
         */
        public static function main()
        {
            // Create an SDK client.
            $client = self::createClient();
            // Create a DescribeRegionsRequest request object and do not specify parameters for the request object.
            $describeRegionsRequest = new DescribeRegionsRequest([]);
            // Create a RuntimeOptions instance and do not specify parameters for the instance.
            $runtime = new RuntimeOptions([]);
            try {
                // Use the describeRegionsWithOptions method in the client to call the operation.
                // The try-catch block is used to capture possible exceptions.
                $result = $client->describeRegionsWithOptions($describeRegionsRequest, $runtime);
                print_r($result);
            } catch (Exception $error) {
                // Handle exceptions with caution in actual business scenarios and never ignore exceptions in your project. In this example, the information is displayed for reference only. 
                var_dump($error->message);
            }
        }
    }
    
    Sample::main();
    ```
    
7.  Handle exceptions. Handle exceptions with caution in actual business scenarios and never ignore exceptions in your project. We recommend that you properly handle exceptions by performing operations such as reporting exceptions, recording logs, and performing retries. This helps ensure the robustness and stability of your system. For more information about how to handle exceptions in SDKs for PHP, see [Handle an exception](/help/en/sdk/developer-reference/exception-handling-5).
    
    ```
    <?php
    
    require_once 'vendor/autoload.php';
    
    use AlibabaCloud\SDK\Ecs\V20140526\Ecs;
    use AlibabaCloud\SDK\Ecs\V20140526\Models\DescribeRegionsRequest;
    use AlibabaCloud\Tea\Utils\Utils\RuntimeOptions;
    use Darabonba\OpenApi\Models\Config;
    
    
    class Sample
    {
        /**
         * Create an ECS client.
         * You can use this method to initialize and return an ECS client, which can be used to call API operations of ECS. 
         * You can obtain the AccessKey ID and AccessKey secret from environment variables to configure the ECS client. This prevents leakage of sensitive information and ensures secure access to the sensitive information. 
         * 
         * @return Ecs Return a configured ECS client.
         */
        public static function createClient()
        {
            // Create a configuration object.
            $config = new Config([
                "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), // Obtain the AccessKey ID of a RAM user from an environment variable.
                "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"), // Obtain the AccessKey secret of the RAM user from an environment variable.
                "endpoint" => "ecs.cn-hangzhou.aliyuncs.com" // Specify the ECS endpoint.
            ]);
    
            // Create another ECS client based on the preceding configurations.
            return new Ecs($config);
        }
        /**
         * 
         * This function is used to show how to use an SDK client to call the DescribeRegions operation. 
         * You can use this function to create a client, construct a request object, and call the operation. 
         * If the call fails, exceptions are captured and error messages are returned. 
         */
        public static function main()
        {
            // Create an SDK client.
            $client = self::createClient();
            // Create a DescribeRegionsRequest request object and do not specify parameters for the request object.
            $describeRegionsRequest = new DescribeRegionsRequest([]);
            // Create a RuntimeOptions instance and do not specify parameters for the instance.
            $runtime = new RuntimeOptions([]);
            try {
                // Use the describeRegionsWithOptions method in the client to call the operation.
                // The try-catch block is used to capture possible exceptions.
                $result = $client->describeRegionsWithOptions($describeRegionsRequest, $runtime);
                print_r($result);
            } catch (Exception $error) {
                if ($error instanceof TeaError) {
                    // Handle exceptions with caution in actual business scenarios and never ignore exceptions in your project. In this example, the information is displayed for reference only. 
                    print_r("message:" . $error->getMessage() . "\n");
                    print_r("code:" . $error->getCode() . "\n");
                    print_r($error->data);
                } elseif ($error instanceof TeaUnableRetryError) {
                    // Handle exceptions with caution in actual business scenarios and never ignore exceptions in your project. In this example, the information is displayed for reference only. 
                    print_r($error->getLastException());
                } else {
                    // Handle exceptions with caution in actual business scenarios and never ignore exceptions in your project. In this example, the information is displayed for reference only. 
                    print_r("message:" . $error->getMessage());
                }
            }
        }
    }
    
    Sample::main();
    ```
    

## **FAQ**

-   What do I do if an error "cURL error 60: SSL certificate problem: unable to get local issuer certificate" is reported when I call an API operation?
    
    -   You need to download a trusted certificate authority (CA) certificate. For example, you can download a CA certificate from Mozilla. For more information, see [CA certificates extracted from Mozilla](https://curl.se/docs/caextract.html).
        
    -   Configure the path of the SSL certificate for PHP. Search for the curl.cainfo parameter in the php.ini file, set the value of this parameter to the absolute path of the CA certificate, and then remove the semicolon (;) before the parameter.
        
    -   Restart the PHP service.
        

## **References**

-   [Integrate Alibaba Cloud Darabonba SDK for PHP](/help/en/sdk/developer-reference/v2-php-integrated-sdk)
    
-   [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-php-access-credentials)
    

## **Advanced references**

-   [Configure an HTTPS request](/help/en/sdk/developer-reference/https-request-configuration-1)
    
-   [Configure a proxy](/help/en/sdk/developer-reference/configure-a-proxy-7)
    
-   [Configure a timeout period](/help/en/sdk/developer-reference/timeout-configurations-4)
    
-   [Configure a retry mechanism](/help/en/sdk/developer-reference/configure-a-retry-mechanism-5)
