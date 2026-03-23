This topic describes how to get started with Simple Log Service SDK for PHP and perform common operations.

## Prerequisites

-   [Simple Log Service](https://sls.console.alibabacloud.com) is activated.
    
-   A Resource Access Management (RAM) user is created, and the required permissions are granted to the RAM user. For more information, see [Create a RAM user and grant permissions to the RAM user](/help/en/sls/using-the-openapi-example#78541bf01a5df).
    
-   The **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** environment variables are configured. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Important**
    
    -   The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use the AccessKey pair of a RAM user to call API operations or perform routine O&M.
        
    -   We recommend that you do not save the AccessKey ID or AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked, and the security of all resources within your account may be compromised.
        
    
-   Simple Log Service SDK for PHP is installed. For more information, see [Install Simple Log Service SDK for PHP](/help/en/sls/developer-reference/install-log-service-sdk-for-php#task-2103382).
    

## Sample code

This example shows how to create a `test.php` file in the same directory as `aliyun-log-php-sdk-master` and call the createLogstore interface to create a logstore. Aliyun\_Log\_Client is a PHP client that you can use to manage Simple Log Service resources, such as projects and logstores. Before you can use Simple Log Service SDK for PHP to initiate a request, you must initialize a client instance. For more code samples, see [aliyun-log-php-sdk](https://github.com/aliyun/aliyun-log-php-sdk).

```
<?PHP
require_once realpath(dirname(__FILE__).'/aliyun-log-php-sdk-master/Log_Autoload.php');
class test
{

    public static function main()
    {
        // The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
        $endpoint = 'cn-hangzhou.log.aliyuncs.com';
        // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.
        $accessKeyId = getenv('ALIBABA_CLOUD_ACCESS_KEY_ID');
        $accessKey = getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET');
        // Create a Simple Log Service client.
        $client = new Aliyun_Log_Client($endpoint, $accessKeyId, $accessKey);
        //The name of the project. 
        $project = 'aliyun-test-project';
        // The name of the logstore. 
        $logstore = 'aliyun-test-logstore';
        // The data retention period. Unit: days. If you set the value to 3650, data is permanently stored. 
        $infrequentAccessTTL = 30;
        // The number of shards.
        $shardCount = 2;
        // Create a logstore.
        $req2 = new Aliyun_Log_Models_CreateLogstoreRequest($project, $logstore, $infrequentAccessTTL, $shardCount);
        $res2 = $client->createLogstore($req2);
    }


}
test::main();
```
