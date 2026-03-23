Before using Simple Log Service (SLS) SDK for iOS to call the operations of SLS, install SLS SDK for iOS.

## Prerequisites

-   Simple Log Service is [activated](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   [Access credentials are configured](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   An iOS development environment is set up. For more information, see [Apple Developer](https://developer.apple.com).
    

## Procedure

1.  Create an iOS project.
    
2.  In the project folder, create a Podfile and enter the command that is used to import the dependencies of SLS SDK for iOS in the file.
    
    ```
    # You must import the following master repositories: 
    source 'https://github.com/CocoaPods/Specs.git'
    source 'https://github.com/aliyun-sls/Specs.git'
    # If you want to use a repository available in the Chinese mainland, you must import the following repository:
    source 'https://gitee.com/aliyun-sls/Specs.git'
    
    pod 'AliyunLogProducer', '~> 4.3.17'
    ```
    
    For more information about versions, see [Release notes of Alibaba Cloud Simple Log Service SDK for iOS](https://github.com/aliyun/aliyun-log-ios-sdk/releases) on GitHub.
    
3.  In the project folder, run the following command to import the dependencies:
    
    ```
    pod install --repo-update
    ```
    
    After SLS SDK for iOS is installed, you can call the operations that are encapsulated in the SDK in the project.
    

## References

-   If an API call fails, the response from Simple Log Service includes an error code. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
    
-   In addition to its native SDK, Simple Log Service also supports the common Alibaba Cloud SDKs. For more information, see [Simple Log Service\_SDK Center\_Alibaba Cloud OpenAPI Explorer](https://api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=python-tea&tab=primer-doc).
    
-   Simple Log Service provides a command-line interface (CLI) for automated configuration. For more information, see [Overview of Simple Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).
    
-   For more information about sample code, see [Alibaba Cloud Simple Log Service SDK for iOS](https://github.com/aliyun/aliyun-log-ios-sdk) on GitHub.
    

## What to do next

[Get started with Simple Log Service SDK for iOS](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-ios#task-2106932)
