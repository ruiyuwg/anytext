After initializing the KMS instance SDK client, you can use it to call the Sign and Verify APIs for signing and verification. This topic provides code examples for this.

Complete example

```
<?php

if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}

use AlibabaCloud\Dkms\Gcs\OpenApi\Util\Models\RuntimeOptions;
use AlibabaCloud\Dkms\Gcs\Sdk\Client as AlibabaCloudDkmsGcsSdkClient;
use AlibabaCloud\Dkms\Gcs\OpenApi\Models\Config as AlibabaCloudDkmsGcsOpenApiConfig;
use AlibabaCloud\Dkms\Gcs\Sdk\Models\SignRequest;
use AlibabaCloud\Dkms\Gcs\Sdk\Models\VerifyRequest;
use AlibabaCloud\Tea\Utils\Utils as AlibabaCloudTeaUtils;

// Specify the path to the ClientKey file obtained from KMS application management.
// $clientKeyFile = '<CLIENT_KEY_FILE_PATH>';

// Alternatively, specify the content of the ClientKey file obtained from KMS application management.
$clientKeyContent = '<CLIENT_KEY_CONTENT>';

// Specify the encryption password entered when creating the ClientKey in KMS application management.
$password = getenv('<CLIENT_KEY_PASSWORD>');

// Specify the VPC address of your KMS instance.
$endpoint = '<DKMS_INSTANCE_SERVICE_ADDRESS>';

// Specify the ID of the asymmetric master key created in KMS.
$keyId = '<ASYMMETRIC_CMK_ID>';

// Signature algorithm.
$algorithm = '<SIGN_ALGORITHM>';

// Message to be signed.
$message = '<MESSAGE_DATA>';

// Message data type to be signed: RAW for raw data, DIGEST for summary.
$messageType = "RAW";

// SDK Client object for the KMS instance.
$client = getDkmsGcsSdkClient();
if (is_null($client)) exit(1);

// Example of using the encryption service instance for signing and signature verification.
signVerifySample();

/**
 * Example of using the encryption service instance for signing and signature verification.
 * @return void
 */
function signVerifySample(){
    global $client, $keyId, $message, $messageType, $algorithm;

    $signatureCtx = signSample($client, $keyId, $message, $messageType, $algorithm);
    if ($signatureCtx !== null) {
        $verifyResult = verifySample($client, $message, $signatureCtx);
        if (!$verifyResult) {
            echo 'verify failed' . PHP_EOL;
        } else {
            echo 'signVerifySample success' . PHP_EOL;
        }
    }
}

/**
 * Signing example.
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param string $keyId
 * @param string $message
 * @param string $messageType
 * @param string $algorithm
 * @return SignatureContext
 */
function signSample($client, $keyId, $message, $messageType, $algorithm) {
    // Construct a signing request.
    $signRequest = new SignRequest();
    $signRequest->keyId = $keyId;
    $signRequest->algorithm = $algorithm;
    $signRequest->message = AlibabaCloudTeaUtils::toBytes($message);
    $signRequest->messageType = $messageType;
    $runtimeOptions = new RuntimeOptions();
    // Ignore the certificate.
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the signing API to perform signing.
        $signResponse = $client->signWithOptions($signRequest, $runtimeOptions);
        // Key ID.
        $keyId = $signResponse->keyId;
        // Signature value.
        $signature = $signResponse->signature;
        // Message type.
        $messageType = $signResponse->messageType;
        // Signature algorithm.
        $algorithm = $signResponse->algorithm;
        var_dump($signResponse->toMap());
        return new SignatureContext([
            'keyId' => $keyId,
            'signature' => $signature,
            'messageType' => $messageType,
            'algorithm' => $algorithm
        ]);
    } catch (Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
    return null;
}

/**
 * Signature verification example.
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param string $message
 * @param SignatureContext $ctx
 * @return bool|null
 */
function verifySample($client, $message, $ctx) {
    // Construct a signature verification request.
    $verifyRequest = new VerifyRequest();
    $verifyRequest->keyId = $ctx->keyId;
    $verifyRequest->signature = $ctx->signature;
    $verifyRequest->message = AlibabaCloudTeaUtils::toBytes($message);
    $verifyRequest->messageType = $ctx->messageType;
    $verifyRequest->algorithm = $ctx->algorithm;
    $runtimeOptions = new RuntimeOptions();
    // Ignore the server certificate.
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the signature verification API to perform verification.
        $verifyResponse = $client->verifyWithOptions($verifyRequest, $runtimeOptions);
        // Verification result.
        $value = $verifyResponse->value;
        var_dump($verifyResponse->toMap());
        return $value;
    } catch (Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
    return null;
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

/**
 * The signature context may be stored.
 */
class SignatureContext
{
    public function __construct($config = [])
    {
        if (!empty($config)) {
            foreach ($config as $k => $v) {
                $this->{$k} = $v;
            }
        }
    }
    /**
     * @var string
     */
    public $keyId;

    /**
     * @var int[]
     */
    public $signature;

    /**
     * @var string
     */
    public $messageType;

    /**
     * @var string
     * Use default algorithm value, if the value is not set.
     */
    public $algorithm;
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

### Call the [Sign](/help/en/kms/key-management-service/developer-reference/sign-1) API to perform digital signing using an asymmetric key

```
/**
 * Signing example.
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param string $keyId
 * @param string $message
 * @param string $messageType
 * @param string $algorithm
 * @return SignatureContext
 */
function signSample($client, $keyId, $message, $messageType, $algorithm) {
    // Construct a signing request.
    $signRequest = new SignRequest();
    $signRequest->keyId = $keyId;
    $signRequest->algorithm = $algorithm;
    $signRequest->message = AlibabaCloudTeaUtils::toBytes($message);
    $signRequest->messageType = $messageType;
    $runtimeOptions = new RuntimeOptions();
    // Ignore the certificate.
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the signing API to perform signing.
        $signResponse = $client->signWithOptions($signRequest, $runtimeOptions);
        // Key ID.
        $keyId = $signResponse->keyId;
        // Signature value.
        $signature = $signResponse->signature;
        // Message type.
        $messageType = $signResponse->messageType;
        // Signature algorithm.
        $algorithm = $signResponse->algorithm;
        var_dump($signResponse->toMap());
        return new SignatureContext([
            'keyId' => $keyId,
            'signature' => $signature,
            'messageType' => $messageType,
            'algorithm' => $algorithm
        ]);
    } catch (Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
    return null;
}
```

### Call the [Verify](/help/en/kms/key-management-service/developer-reference/verify-1) API to verify the digital signature using an asymmetric key

```
/**
 * Signature verification example.
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param string $message
 * @param SignatureContext $ctx
 * @return bool|null
 */
function verifySample($client, $message, $ctx) {
    // Construct a signature verification request.
    $verifyRequest = new VerifyRequest();
    $verifyRequest->keyId = $ctx->keyId;
    $verifyRequest->signature = $ctx->signature;
    $verifyRequest->message = AlibabaCloudTeaUtils::toBytes($message);
    $verifyRequest->messageType = $ctx->messageType;
    $verifyRequest->algorithm = $ctx->algorithm;
    $runtimeOptions = new RuntimeOptions();
    // Ignore the server certificate.
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the signature verification API to perform verification.
        $verifyResponse = $client->verifyWithOptions($verifyRequest, $runtimeOptions);
        // Verification result.
        $value = $verifyResponse->value;
        var_dump($verifyResponse->toMap());
        return $value;
    } catch (Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
    return null;
}
```
