Before you can use Simple Log Service SDK for PHP to call the API operations of Simple Log Service, you must install Simple Log Service SDK for PHP. This topic describes how to install Simple Log Service SDK for PHP.

## Prerequisites

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
    
    An Alibaba Cloud account has permissions to call all API operations. If you use the AccessKey pair of an Alibaba Cloud account, security risks may occur. We recommend that you create and use a RAM user to call API operations or perform routine O&M. Make sure that the RAM user is granted the permissions to perform operations on Simple Log Service resources. For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).
    
-   A PHP development environment is installed. For more information, visit the [official website of PHP](https://www.php.net/downloads).
    
    Simple Log Service SDK for PHP supports PHP 5.2.1 and later versions. You can run the `php -v` command to check the version of PHP that is installed.
    

## Install Simple Log Service SDK for PHP

1.  [Download the latest installation package of Simple Log Service SDK for PHP](https://github.com/aliyun/aliyun-log-php-sdk).
    
2.  Decompress the aliyun-log-php-sdk-master.zip installation package.
    
3.  Copy the directory that you obtained in Step [2](#step-rym-mcy-mif) to the project folder.
    
    You do not need to perform additional steps to install Simple Log Service SDK for PHP. Simple Log Service SDK for PHP contains SDK code, third-party dependencies, and an Autoloader class. These components help you process calls in a simplified manner.
    
    You can run the **require\_once** command to reference Simple Log Service SDK for PHP in the project file.
    
    ```
    require_once realpath(dirname(__FILE__) . '/../Log_Autoload.php');
    ```
    

## Related operations

You can use the Composer dependency manager to reference Simple Log Service SDK for PHP in the project file.

After you install Composer, you can use one of the following methods to reference Simple Log Service SDK for PHP in your project file. For more information about how to install Composer, visit the [official website of Composer](https://www.phpcomposer.com/).

-   Use the Command Prompt.
    
    ```
    composer require  alibabacloud/aliyun-log-php-sdk
    ```
    
-   Use the composer.json configuration file.
    
    ```
    {
        "require": {
            "alibabacloud/aliyun-log-php-sdk": "0.6.*"
        }
    }
    ```
    

## References

-   If the response that is returned by Log Service contains error information after you call an API operation, the call fails. You can handle errors based on the error codes that are returned when API calls fail. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
-   Alibaba Cloud OpenAPI Explorer provides debugging capabilities, SDKs, examples, and related documents. You can use OpenAPI Explorer to debug Log Service API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Portal](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).
-   Log Service provides the command-line interface (CLI) to meet the requirements for automated configurations in Log Service. For more information, see [Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).

## What to do next

[Get started with Log Service SDK for PHP](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-php#task-2103383)
