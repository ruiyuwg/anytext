After initializing the KMS instance SDK client, you can use it to call the GetSecretValue API for retrieving the secret value. This topic provides code examples for this.

## **Complete example**

```
<?php

if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}

use AlibabaCloud\Dkms\Gcs\OpenApi\Util\Models\RuntimeOptions;
use AlibabaCloud\Dkms\Gcs\Sdk\Client as AlibabaCloudDkmsGcsSdkClient;
use AlibabaCloud\Dkms\Gcs\OpenApi\Models\Config as AlibabaCloudDkmsGcsOpenApiConfig;
use AlibabaCloud\Dkms\Gcs\Sdk\Models\GetSecretValueRequest;

// Specify the path of the ClientKey file that you obtained in KMS application management.
// $clientKeyFile = '<CLIENT_KEY_FILE_PATH>';

// Alternatively, specify the content of the ClientKey file that you obtained in KMS application management.
$clientKeyContent = '<CLIENT_KEY_CONTENT>';

// Specify the encryption password that you entered when creating the ClientKey in KMS application management.
$password = getenv('CLIENT_KEY_PASSWORD');

// Specify the VPC address of your KMS instance.
$endpoint = '<DKMS_INSTANCE_SERVICE_ADDRESS>';

// Specify the name of the credential that you created in KMS.
$secretName = '<SECRET_NAME>';

// SDK Client object for the KMS instance.
$client = getDkmsGcsSdkClient();
if (is_null($client)) exit(1);

// Example of retrieving KMS secret values.
getSecretValueSample();

function getSecretValueSample(){
    global $client, $secretName;

    // Construct a request to retrieve secret values.
    $getSecretValueRequest = new GetSecretValueRequest([
        'secretName' => $secretName,
    ]);
    // Ignore the server certificate.
    $runtimeOptions = new RuntimeOptions();
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the operation to retrieve secret values.
        $getSecretValueResponse = $client->getSecretValueWithOptions($getSecretValueRequest, $runtimeOptions);

        // Secret name.
        $_secretName = $getSecretValueResponse->secretName;
        // Secret value.
        $_secretData = $getSecretValueResponse->secretData;

        var_dump($getSecretValueResponse->toMap());
    } catch (\Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
}

/**
 * Construct the SDK Client object for the KMS instance.
 * @return AlibabaCloudDkmsGcsSdkClient
 */
function getDkmsGcsSdkClient()
{
    global $clientKeyContent, $password, $endpoint;

    // Construct the SDK Client configuration for the KMS instance.
    $config = new AlibabaCloudDkmsGcsOpenApiConfig();
    // Set the connection protocol to "https". The KMS instance service only allows access through the HTTPS protocol.
    $config->protocol = 'https';
    // Client Key.
    $config->clientKeyContent = $clientKeyContent;
    // Client Key password.
    $config->password = $password;
    // Set the endpoint to <KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com.
    $config->endpoint = $endpoint;
    // Instance CA certificate.
    $config->caFilePath = 'path/to/caCert.pem';

    // Construct the SDK Client object for the KMS instance.
    return new AlibabaCloudDkmsGcsSdkClient($config);
}
```

## **Example walkthrough**

### [Initialize client](/help/en/kms/key-management-service/developer-reference/initialize-the-client-of-php)

```
<?php

use AlibabaCloud\Dkms\Gcs\Sdk\Client as AlibabaCloudDkmsGcsSdkClient;
use AlibabaCloud\Dkms\Gcs\OpenApi\Models\Config as AlibabaCloudDkmsGcsOpenApiConfig;


function getDkmsGcsSdkClient()
{
    global $clientKeyContent, $password, $endpoint;

    // Construct the KMS instance SDK client configuration.
    $config = new AlibabaCloudDkmsGcsOpenApiConfig();
    // The connection protocol. Set the value to https. The KMS instance service only allows access through the HTTPS protocol.
    $config->protocol = 'https';
    // Client Key.
    $config->clientKeyContent = $clientKeyContent;
    // Client Key security token.
    $config->password = $password;
    // The endpoint of your KMS instance. Set the value in the following format: <ID of your KMS instance >.cryptoservice.kms.aliyuncs.com.
    $config->endpoint = $endpoint;
    // Instance CA certificate.
    $config->caFilePath = 'path/to/caCert.pem';

    // Construct the KMS instance SDK client object.
    return new AlibabaCloudDkmsGcsSdkClient($config);
}
```

### Call the [GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2) API

```
function getSecretValueSample(){
    global $client, $secretName;

    // Construct a request to retrieve a secret value.
    $getSecretValueRequest = new GetSecretValueRequest([
        'secretName' => $secretName,
    ]);
    // Ignore the server certificate.
    $runtimeOptions = new RuntimeOptions();
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the API to retrieve a secret value.
        $getSecretValueResponse = $client->getSecretValueWithOptions($getSecretValueRequest, $runtimeOptions);

        // Secret name.
        $_secretName = $getSecretValueResponse->secretName;
        // Secret value.
        $_secretData = $getSecretValueResponse->secretData;

        var_dump($getSecretValueResponse->toMap());
    } catch (\Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
}
```
