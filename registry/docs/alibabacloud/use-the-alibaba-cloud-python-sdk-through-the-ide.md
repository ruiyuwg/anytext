This topic describes how to use Alibaba Cloud SDKs for Python in an Integrated Development Environment (IDE) on Windows. In this example, PyCharm is used.

## **Prerequisites**

-   Python is installed. For more information, see [Install Python](/help/en/sdk/developer-reference/installing-python).
    
-   PyCharm is installed. For more information, see [Build a Python development environment on Windows](/help/en/sdk/developer-reference/installing-python-ide-on-windows).
    

## **Use SDKs**

### **Use a sample project provided in OpenAPI Explorer**

**Note**

You may be unable to download sample projects for specific API operations. In this case, [use SDKs in your existing projects](#ac58d31285zb7).

1.  Go to [OpenAPI Explorer](https://api.alibabacloud.com/api). Search for the API operation that you want to use. In this example, the DescribeInstanceTypeFamilies operation of Elastic Compute Service (ECS) is used. Enter DescribeInstanceTypeFamilies in the search box, and click DescribeInstanceTypeFamilies in the search results to go to the API debugging page.
    
    ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1779598171/p801785.png)
    
2.  On the **Parameters** tab in the middle column, specify the parameters based on your business requirements. When you specify the parameters, read the information on the **Document** tab in the rightmost column. Make sure that you understand the usage notes of the operation and the description of each parameter. Pay attention to billing-related information. In this example, the DescribeInstanceTypeFamilies operation supports two request parameters. You must specify a value such as cn-hangzhou for the RegionId parameter. The Generation parameter is optional. You can set this parameter to ecs-5, which indicates the V-series instance family. You can view the valid values of the parameters on the Document tab.
    
    ![2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1779598171/p801786.png)
    
3.  On the **SDK Sample Code** tab in the rightmost column, select a programming language and click **Download Project** to download the complete SDK project to your computer. Then, decompress the package.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1779598171/p801787.png)
    
4.  Open PyCharm, choose File > Open, and select the decompressed project file. In the Creating Virtual Environment dialog box, click OK and wait for the Python virtual environment to be created and dependent resources to be downloaded.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1779598171/p804292.png)
    
    **Note**
    
    If the required dependent resources are not downloaded, run the `python3 setup.py install` command in the terminal.
    
5.  Before you call this operation, you must obtain an AccessKey pair as the access credential. We recommend that you use the AccessKey pair of a Resource Access Management (RAM) user. For more information, see the [Create an AccessKey pair for a RAM user](/help/en/ram/user-guide/create-an-accesskey-pair) section of the "Create an AccessKey pair" topic.
    
    **Important**
    
    After you obtain the AccessKey pair of a RAM user, you must configure the AccessKey pair in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
6.  Run the SDK demo code.
    
    In the lower part of the PyCharm console, click the Terminal icon or press `Alt+F12` to open the terminal. In the terminal, run the following command.
    
    ```
    python ./alibabacloud_sample/sample.py
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9925643371/p804293.png)
    
7.  View the result. Click anywhere in the Run window in the lower part of the console and press `Ctrl+F` to search for `statusCode`. If `"statusCode":200` is displayed, the call was successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9925643371/p804296.png)
    

### **Use an SDK in an existing project**

1.  Obtain the SDK.
    
    Go to [SDK Center](https://api.alibabacloud.com/api-tools/sdk) and select the cloud service whose SDK you want to use. In this example, Elastic Compute Service (ECS) is used. Select **V2.0** as the SDK version and **Python** as the programming language.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9925643371/p801577.png)
    
2.  Install the SDK.
    
    In PyCharm, press `ALT+F12` to open the terminal, copy the installation command to the terminal, and then press the Enter key.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1779598171/p801584.png)
    
3.  Create a .py file.
    
    Right-click the project name and choose New > Python File. In the dialog box that appears, enter the file name, select Python file, and then press the Enter key to create a file. In this example, a file named sdk\_demo.py is created.
    
4.  Initialize the client.
    
    If you want to call the ECS API, you must initialize the ECS client first.
    
    **Important**
    
    1.  You must use an AccessKey pair to complete identity verification when you initialize the client. In this case, you must obtain an AccessKey pair in advance. For more information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
        
    2.  After you obtain the AccessKey pair of a RAM user, you must configure the AccessKey pair in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    3.  For more information about how to configure the endpoint, see [Endpoints](/help/en/openapi/endpoints).
        
    
    ```
    import os
    
    from alibabacloud_ecs20140526 import client as ecs_client
    from alibabacloud_tea_openapi import models as open_api_models
    
    
    def init_ecs_client():
        """
        Initialize the ECS client. 
    
        This function takes no arguments. 
    
        Return result:
            ecs_client. Client: an initialized ECS client object that can be used for further operations on ECS. 
        """
        # Create an ECS configuration object and read the AccessKey pair from the environment variables.
        ecs_config = open_api_models.Config()
        ecs_config.access_key_id = os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID']
        ecs_config.access_key_secret = os.environ['ALIBABA_CLOUD_ACCESS_KEY_SECRET']
        # Specify the endpoint.
        ecs_config.endpoint = 'ecs-cn-hangzhou.aliyuncs.com'
    
        # Use the configurations to initialize and return the ECS client.
        return ecs_client.Client(ecs_config)
    
    
    if __name__ == '__main__':
        client = init_ecs_client()
    ```
    
5.  Call the API operation. Before you call an API operation, you must read the corresponding [API documentation](https://next.api.alibabacloud.com/document). In this example, the DescribeRegions operation of ECS is used.
    
    **Note**
    
    Each API operation has a request object, named in the ${API name}${Request} format. Example: DescribeRegionsRequest.
    
    ```
    import os
    
    from alibabacloud_ecs20140526 import client as ecs_client
    from alibabacloud_tea_openapi import models as open_api_models
    from alibabacloud_ecs20140526 import models as ecs_20140526_models
    
    
    def init_ecs_client():
        """
        Initialize the ECS client. 
    
        This function takes no arguments. 
    
        Return result:
            ecs_client. Client: an initialized ECS client object that can be used for further operations on ECS. 
        """
        # Create an ECS configuration object and read the AccessKey pair from the environment variables.
        ecs_config = open_api_models.Config()
        ecs_config.access_key_id = os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID']
        ecs_config.access_key_secret = os.environ['ALIBABA_CLOUD_ACCESS_KEY_SECRET']
        # Specify the endpoint.
        ecs_config.endpoint = 'ecs-cn-hangzhou.aliyuncs.com'
    
        # Use the configurations to initialize and return the ECS client.
        return ecs_client.Client(ecs_config)
    
    
    if __name__ == '__main__':
        # Initialize the ECS client.
        client = init_ecs_client()
        # Create a DescribeRegionsRequest request object.
        describeRegions_request = ecs_20140526_models.DescribeRegionsRequest()
        # Send a describeRegions request to query the available regions.
        response = client.describe_regions(describeRegions_request)
        print(response.body)
    ```
    
6.  Handle exceptions.
    
    In V2.0 SDKs for Python, exceptions are handled by Tea.exceptions. Exceptions are divided into the following two types:
    
    1.  UnretryableException: This type of exceptions are caused by network issues. Such an exception is thrown if the number of retries reaches the upper limit.
        
    2.  TeaException: This type of exceptions are caused by business errors.
        
    
    ```
    import os
    
    from Tea.exceptions import UnretryableException, TeaException
    from alibabacloud_ecs20140526 import client as ecs_client
    from alibabacloud_tea_openapi import models as open_api_models
    from alibabacloud_ecs20140526 import models as ecs_20140526_models
    
    
    def init_ecs_client():
        """
        Initialize the ECS client. 
    
        This function takes no arguments. 
    
        Return result:
            ecs_client. Client: an initialized ECS client object that can be used for further operations on ECS. 
        """
        # Create an ECS configuration object and read the AccessKey pair from the environment variables.
        ecs_config = open_api_models.Config()
        ecs_config.access_key_id = os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID']
        ecs_config.access_key_secret = os.environ['ALIBABA_CLOUD_ACCESS_KEY_SECRET']
        # Specify the endpoint.
        ecs_config.endpoint = 'ecs-cn-hangzhou.aliyuncs.com'
    
        # Use the configurations to initialize and return the ECS client.
        return ecs_client.Client(ecs_config)
    
    
    if __name__ == '__main__':
        try:
            # Initialize the ECS client.
            client = init_ecs_client()
            # Create a DescribeRegionsRequest request object.
            describeRegions_request = ecs_20140526_models.DescribeRegionsRequest()
            # Send a describeRegions request to query the available regions.
            response = client.describe_regions(describeRegions_request)
            # Display the response.
            print(response.body)
        except UnretryableException as e:
            # Handle network exceptions.
            print(e)
        except TeaException as e:
            # Handle business exceptions.
            print(e)
        except Exception as e:
            # Handle other exceptions.
            print(e)
    ```
    
7.  Optional. You can also copy the sample code provided in OpenAPI Explorer to a file to run the sample code. For more information about how to obtain the sample code, see [Automatic generation of SDK examples](/help/en/openapi/user-guide/sdk-code-is-automatically-generated).
    

## **Related operations**

-   [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-python-access-credentials)
    
-   [Exception handling](/help/en/sdk/developer-reference/handle-an-exception-1)
    

## **Advanced operations**

-   [Configure an endpoint](/help/en/sdk/developer-reference/configure-an-endpoint-7)
    
-   [Configure an HTTPS request](/help/en/sdk/developer-reference/configure-an-https-request)
    
-   [Configure a proxy](/help/en/sdk/developer-reference/configure-a-proxy)
    
-   [Configure a timeout period](/help/en/sdk/developer-reference/configure-a-timeout-period)
    
-   [Configure a retry mechanism](/help/en/sdk/developer-reference/configure-a-retry-mechanism)
    
-   [Send asynchronous requests](/help/en/sdk/developer-reference/use-the-asynchronous-calls-feature-7)
