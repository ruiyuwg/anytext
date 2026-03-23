After initializing the KMS instance SDK client, you can use it to call the `Encrypt` and `Decrypt` APIs for data encryption and decryption. This topic provides code examples for this.

## **Complete example**

```
<?php

if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}

use AlibabaCloud\Dkms\Gcs\OpenApi\Util\Models\RuntimeOptions;
use AlibabaCloud\Dkms\Gcs\Sdk\Client as AlibabaCloudDkmsGcsSdkClient;
use AlibabaCloud\Dkms\Gcs\OpenApi\Models\Config as AlibabaCloudDkmsGcsOpenApiConfig;
use AlibabaCloud\Dkms\Gcs\Sdk\Models\DecryptRequest;
use AlibabaCloud\Dkms\Gcs\Sdk\Models\EncryptRequest;
use AlibabaCloud\Tea\Utils\Utils as AlibabaCloudTeaUtils;

/**
 * ClientKey parameter passing supports the following three methods:
 * 1. By specifying the ClientKey.json file path.
 * Example:
 *      String clientKeyFile = "<CLIENT_KEY_FILE_PATH>";
 *      String password = "<CLIENT_KEY_PASSWORD>";
 *      Config cfg = new Config();
 *      cfg.setClientKeyFile(clientKeyFile);
 *      cfg.setPassword(password);
 *
 * 2. By specifying the ClientKey content.
 * Example:
 *      String clientKeyContent = "<CLIENT_KEY_CONTENT>";
 *      String password = "<CLIENT_KEY_PASSWORD>";
 *      Config cfg = new Config();
 *      cfg.setClientKeyContent(clientKeyContent);
 *      cfg.setPassword(password);
 *
 * 3. By specifying the private key and AccessKeyId.
 * Example:
 *      String accessKeyId = "<CLIENT_KEY_KEYID>";
 *      String privateKey = "<PARSE_FROM_CLIENT_KEY_PRIVATEKEY_DATA>";
 *      Config cfg = new Config();
 *      cfg.setAccessKeyId(accessKeyId);
 *      cfg.setPrivateKey(privateKey);
 *
 */

// Fill in the ClientKey file path you obtained from KMS application management.
// $clientKeyFile = '<CLIENT_KEY_FILE_PATH>';

// Alternatively, fill in the ClientKey file content you obtained from KMS application management.
$clientKeyContent = '<CLIENT_KEY_CONTENT>';

// Fill in the encryption password you entered when creating the ClientKey in KMS application management.
$password = getenv('CLIENT_KEY_PASSWORD');

// Fill in your KMS instance VPC address.
$endpoint = '<DKMS_INSTANCE_SERVICE_ADDRESS>';

// Fill in the master key ID you created in KMS.
$keyId = '<CMK_ID>';

// Encryption and decryption algorithm.
$algorithm = '<ENCRYPT_ALGORITHM>';

// Plaintext to be encrypted.
$plaintext = '<ENCRYPT_PLAINTEXT>';

// KMS instance SDK Client object.
$client = getDkmsGcsSdkClient();
if (is_null($client)) exit(1);

// Example of using KMS for symmetric key encryption and decryption.
aesEncryptDecryptSample();

/**
 * Example of using KMS instance for encryption and decryption.
 * @return void
 */
function aesEncryptDecryptSample()
{
    global $client, $keyId, $plaintext, $algorithm;

    $cipherCtx = aesEncryptSample($client, $keyId, $plaintext, $algorithm);
    if ($cipherCtx !== null) {
        $decryptResult = AlibabaCloudTeaUtils::toString(aesDecryptSample($client, $cipherCtx));
        if ($plaintext !== $decryptResult) {
            echo 'decrypt result not match the plaintext' . PHP_EOL;
        } else {
            echo 'aesEncryptDecryptSample success' . PHP_EOL;
        }
    }
}

/**
 * Encryption example.
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param string $keyId
 * @param string $plaintext
 * @param string $algorithm
 * @return AesEncryptContext
 */
function aesEncryptSample($client, $keyId, $plaintext, $algorithm)
{
    // Construct encryption request.
    $encryptRequest = new EncryptRequest();
    $encryptRequest->keyId = $keyId;
    $encryptRequest->algorithm = $algorithm;
    $encryptRequest->plaintext = AlibabaCloudTeaUtils::toBytes($plaintext);
    $runtimeOptions = new RuntimeOptions();
    // Ignore the server certificate.
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the encryption API to encrypt.
        $encryptResponse = $client->encryptWithOptions($encryptRequest, $runtimeOptions);
        // Key ID.
        $keyId = $encryptResponse->keyId;
        // When the master key is a symmetric key, the decrypt API requires the Iv returned by encryption.
        $iv = $encryptResponse->iv;
        // Data ciphertext.
        $cipher = $encryptResponse->ciphertextBlob;
        // Encryption algorithm.
        $algorithm = $encryptResponse->algorithm;
        var_dump($encryptResponse->toMap());
        return new AesEncryptContext([
            'keyId' => $keyId,
            'iv' => $iv,
            'ciphertextBlob' => $cipher,
            'algorithm' => $algorithm
        ]);
    } catch (\Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
    return null;
}

/**
 * Decryption example.
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param AesEncryptContext $ctx
 * @return int[]|null
 */
function aesDecryptSample($client, $ctx)
{
    // Construct decryption request object.
    $decryptRequest = new DecryptRequest();
    $decryptRequest->keyId = $ctx->keyId;
    $decryptRequest->ciphertextBlob = $ctx->ciphertextBlob;
    $decryptRequest->algorithm = $ctx->algorithm;
    $decryptRequest->iv = $ctx->iv;
    $runtimeOptions = new RuntimeOptions();
    // Ignore the certificate.
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the decryption API to decrypt.
        $decryptResponse = $client->decryptWithOptions($decryptRequest, $runtimeOptions);
        var_dump($decryptResponse->toMap());
        return $decryptResponse->plaintext;
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
 * Construct KMS instance SDK Client object.
 * @return AlibabaCloudDkmsGcsSdkClient
 */
function getDkmsGcsSdkClient()
{
    global $clientKeyContent, $password, $endpoint;

    // Construct KMS instance SDK Client configuration.
    $config = new AlibabaCloudDkmsGcsOpenApiConfig();
    // Set the connection protocol to "https". The KMS instance service only allows access through the HTTPS protocol.
    $config->protocol = 'https';
    // Client Key.
    $config->clientKeyContent = $clientKeyContent;
    // Client Key password.
    $config->password = $password;
    // Set the endpoint to <your KMS Instance Id>.cryptoservice.kms.aliyuncs.com.
    $config->endpoint = $endpoint;
    // Instance CA certificate.
    $config->caFilePath = 'path/to/caCert.pem';

    // Construct KMS instance SDK Client object.
    return new AlibabaCloudDkmsGcsSdkClient($config);
}


/**
 * The aes encrypt context may be stored.
 */
class AesEncryptContext
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
    public $iv;

    /**
     * @var int[]
     */
    public $ciphertextBlob;

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

### Call the [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2) API to encrypt data using a symmetric key

```
/**
 * Encryption example
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param string $keyId
 * @param string $plaintext
 * @param string $algorithm
 * @return AesEncryptContext
 */
function aesEncryptSample($client, $keyId, $plaintext, $algorithm)
{
    // Construct encryption request
    $encryptRequest = new EncryptRequest();
    $encryptRequest->keyId = $keyId;
    $encryptRequest->algorithm = $algorithm;
    $encryptRequest->plaintext = AlibabaCloudTeaUtils::toBytes($plaintext);
    $runtimeOptions = new RuntimeOptions();
    // Ignore the server certificate
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the encryption API to encrypt
        $encryptResponse = $client->encryptWithOptions($encryptRequest, $runtimeOptions);
        // Key ID
        $keyId = $encryptResponse->keyId;
        // When the master key is a symmetric key, the decrypt API requires the Iv returned by encryption
        $iv = $encryptResponse->iv;
        // Data ciphertext
        $cipher = $encryptResponse->ciphertextBlob;
        // Encryption algorithm
        $algorithm = $encryptResponse->algorithm;
        var_dump($encryptResponse->toMap());
        return new AesEncryptContext([
            'keyId' => $keyId,
            'iv' => $iv,
            'ciphertextBlob' => $cipher,
            'algorithm' => $algorithm
        ]);
    } catch (\Exception $error) {
        if ($error instanceof \AlibabaCloud\Tea\Exception\TeaError) {
            var_dump($error->getErrorInfo());
        }
        var_dump($error->getMessage());
        var_dump($error->getTraceAsString());
    }
    return null;
}
```

### Call the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) API to decrypt ciphertext using a symmetric key

```
/**
 * Decryption example
 * @param AlibabaCloudDkmsGcsSdkClient $client
 * @param AesEncryptContext $ctx
 * @return int[]|null
 */
function aesDecryptSample($client, $ctx)
{
    // Construct decryption request object
    $decryptRequest = new DecryptRequest();
    $decryptRequest->keyId = $ctx->keyId;
    $decryptRequest->ciphertextBlob = $ctx->ciphertextBlob;
    $decryptRequest->algorithm = $ctx->algorithm;
    $decryptRequest->iv = $ctx->iv;
    $runtimeOptions = new RuntimeOptions();
    // Ignore the certificate
    //$runtimeOptions->ignoreSSL = true;

    try {
        // Call the decryption API to decrypt
        $decryptResponse = $client->decryptWithOptions($decryptRequest, $runtimeOptions);
        var_dump($decryptResponse->toMap());
        return $decryptResponse->plaintext;
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
