-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class SslPoliciesClient (1.28.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class SslPoliciesClient.

Service Description: The SslPolicies API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

## Namespace

Google \\ Cloud \\ Compute \\ V1 \\ Client

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`options`

`array`  

Optional. Options for configuring the service API wrapper.

`↳ apiEndpoint`

`string`  

The address of the API remote host. May optionally include the port, formatted as "

`↳ credentials`

`string|array|FetchAuthTokenInterface|CredentialsWrapper`  

The credentials to be used by the client to authorize API calls. This option accepts either a path to a credentials file, or a decoded credentials file as a PHP array. _Advanced usage_: In addition, this option can also accept a pre-constructed Google\\Auth\\FetchAuthTokenInterface object or [Google\\ApiCore\\CredentialsWrapper](https://cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored. _Important_: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud Platform, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information [https://cloud.google.com/docs/authentication/external/externally-sourced-credentials](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials)

`↳ credentialsConfig`

`array`  

Options used to configure credentials, including auth token caching, for the client. For a full list of supporting configuration options, see [Google\\ApiCore\\CredentialsWrapper::build()](https://cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html#_Google_ApiCore_CredentialsWrapper__build__) .

`↳ disableRetries`

`bool`  

Determines whether or not retries defined by the client configuration should be disabled. Defaults to `false`.

`↳ clientConfig`

`string|array`  

Client method configuration, including retry settings. This option can be either a path to a JSON file, or a PHP array containing the decoded JSON data. By default this settings points to the default client config file, which is provided in the resources folder.

`↳ transport`

`string|TransportInterface`  

The transport used for executing network requests. At the moment, supports only `rest`. _Advanced usage_: Additionally, it is possible to pass in an already instantiated Google\\ApiCore\\Transport\\TransportInterface object. Note that when this object is provided, any settings in $transportConfig, and any $apiEndpoint setting, will be ignored.

`↳ transportConfig`

`array`  

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\RestTransport::build()](https://cloud.google.com/php/docs/reference/gax/latest/Transport.RestTransport.html#_Google_ApiCore_Transport_RestTransport__build__) method for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

`↳ logger`

`false|LoggerInterface`  

A PSR-3 compliant logger. If set to false, logging is disabled, ignoring the 'GOOGLE\_SDK\_PHP\_LOGGING' environment flag

### aggregatedList

Retrieves the list of all SslPolicy resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

The async variant is [SslPoliciesClient::aggregatedListAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__aggregatedListAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AggregatedListSslPoliciesRequest](/php/docs/reference/cloud-compute/1.28.0/V1.AggregatedListSslPoliciesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\Compute\V1\AggregatedListSslPoliciesRequest;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;

/**
 * @param string $project Name of the project scoping this request.
 */
function aggregated_list_sample(string $project): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $request = (new AggregatedListSslPoliciesRequest())
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $sslPoliciesClient->aggregatedList($request);

        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';

    aggregated_list_sample($project);
}
```

### delete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

The async variant is [SslPoliciesClient::deleteAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__deleteAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.DeleteSslPolicyRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;
use Google\Cloud\Compute\V1\DeleteSslPolicyRequest;
use Google\Rpc\Status;

/**
 * @param string $project   Project ID for this request.
 * @param string $sslPolicy Name of the SSL policy to delete. The name must be 1-63 characters long, and comply with RFC1035.
 */
function delete_sample(string $project, string $sslPolicy): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $request = (new DeleteSslPolicyRequest())
        ->setProject($project)
        ->setSslPolicy($sslPolicy);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $sslPoliciesClient->delete($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            printf('Operation completed successfully.' . PHP_EOL);
        } else {
            /** @var Status $error */
            $error = $response->getError();
            printf('Operation failed with error data: %s' . PHP_EOL, $error->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';
    $sslPolicy = '[SSL_POLICY]';

    delete_sample($project, $sslPolicy);
}
```

### get

Lists all of the ordered rules present in a single specified policy.

The async variant is [SslPoliciesClient::getAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__getAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.GetSslPolicyRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\SslPolicy](/php/docs/reference/cloud-compute/1.28.0/V1.SslPolicy)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;
use Google\Cloud\Compute\V1\GetSslPolicyRequest;
use Google\Cloud\Compute\V1\SslPolicy;

/**
 * @param string $project   Project ID for this request.
 * @param string $sslPolicy Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.
 */
function get_sample(string $project, string $sslPolicy): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $request = (new GetSslPolicyRequest())
        ->setProject($project)
        ->setSslPolicy($sslPolicy);

    // Call the API and handle any network failures.
    try {
        /** @var SslPolicy $response */
        $response = $sslPoliciesClient->get($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';
    $sslPolicy = '[SSL_POLICY]';

    get_sample($project, $sslPolicy);
}
```

### insert

Returns the specified SSL policy resource.

The async variant is [SslPoliciesClient::insertAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__insertAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.InsertSslPolicyRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;
use Google\Cloud\Compute\V1\InsertSslPolicyRequest;
use Google\Cloud\Compute\V1\SslPolicy;
use Google\Rpc\Status;

/**
 * @param string $project Project ID for this request.
 */
function insert_sample(string $project): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $sslPolicyResource = new SslPolicy();
    $request = (new InsertSslPolicyRequest())
        ->setProject($project)
        ->setSslPolicyResource($sslPolicyResource);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $sslPoliciesClient->insert($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            printf('Operation completed successfully.' . PHP_EOL);
        } else {
            /** @var Status $error */
            $error = $response->getError();
            printf('Operation failed with error data: %s' . PHP_EOL, $error->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';

    insert_sample($project);
}
```

### list

Lists all the SSL policies that have been configured for the specified project.

The async variant is [SslPoliciesClient::listAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__listAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListSslPoliciesRequest](/php/docs/reference/cloud-compute/1.28.0/V1.ListSslPoliciesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;
use Google\Cloud\Compute\V1\ListSslPoliciesRequest;

/**
 * @param string $project Project ID for this request.
 */
function list_sample(string $project): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $request = (new ListSslPoliciesRequest())
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $sslPoliciesClient->list($request);

        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';

    list_sample($project);
}
```

### listAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

The async variant is [SslPoliciesClient::listAvailableFeaturesAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__listAvailableFeaturesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListAvailableFeaturesSslPoliciesRequest](/php/docs/reference/cloud-compute/1.28.0/V1.ListAvailableFeaturesSslPoliciesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\SslPoliciesListAvailableFeaturesResponse](/php/docs/reference/cloud-compute/1.28.0/V1.SslPoliciesListAvailableFeaturesResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;
use Google\Cloud\Compute\V1\ListAvailableFeaturesSslPoliciesRequest;
use Google\Cloud\Compute\V1\SslPoliciesListAvailableFeaturesResponse;

/**
 * @param string $project Project ID for this request.
 */
function list_available_features_sample(string $project): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $request = (new ListAvailableFeaturesSslPoliciesRequest())
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var SslPoliciesListAvailableFeaturesResponse $response */
        $response = $sslPoliciesClient->listAvailableFeatures($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';

    list_available_features_sample($project);
}
```

### patch

Patches the specified SSL policy with the data included in the request.

The async variant is [SslPoliciesClient::patchAsync()](/php/docs/reference/cloud-compute/1.28.0/V1.Client.SslPoliciesClient#_Google_Cloud_Compute_V1_Client_SslPoliciesClient__patchAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\PatchSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.PatchSslPolicyRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Compute\V1\Client\SslPoliciesClient;
use Google\Cloud\Compute\V1\PatchSslPolicyRequest;
use Google\Cloud\Compute\V1\SslPolicy;
use Google\Rpc\Status;

/**
 * @param string $project   Project ID for this request.
 * @param string $sslPolicy Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.
 */
function patch_sample(string $project, string $sslPolicy): void
{
    // Create a client.
    $sslPoliciesClient = new SslPoliciesClient();

    // Prepare the request message.
    $sslPolicyResource = new SslPolicy();
    $request = (new PatchSslPolicyRequest())
        ->setProject($project)
        ->setSslPolicy($sslPolicy)
        ->setSslPolicyResource($sslPolicyResource);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $sslPoliciesClient->patch($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            printf('Operation completed successfully.' . PHP_EOL);
        } else {
            /** @var Status $error */
            $error = $response->getError();
            printf('Operation failed with error data: %s' . PHP_EOL, $error->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * Helper to execute the sample.
 *
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $project = '[PROJECT]';
    $sslPolicy = '[SSL_POLICY]';

    patch_sample($project, $sslPolicy);
}
```

### aggregatedListAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AggregatedListSslPoliciesRequest](/php/docs/reference/cloud-compute/1.28.0/V1.AggregatedListSslPoliciesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### deleteAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.DeleteSslPolicyRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.GetSslPolicyRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Compute\V1\SslPolicy](/php/docs/reference/cloud-compute/1.28.0/V1.SslPolicy)>`

### insertAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.InsertSslPolicyRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### listAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListSslPoliciesRequest](/php/docs/reference/cloud-compute/1.28.0/V1.ListSslPoliciesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listAvailableFeaturesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListAvailableFeaturesSslPoliciesRequest](/php/docs/reference/cloud-compute/1.28.0/V1.ListAvailableFeaturesSslPoliciesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Compute\V1\SslPoliciesListAvailableFeaturesResponse](/php/docs/reference/cloud-compute/1.28.0/V1.SslPoliciesListAvailableFeaturesResponse)>`

### patchAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\PatchSslPolicyRequest](/php/docs/reference/cloud-compute/1.28.0/V1.PatchSslPolicyRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getOperationsClient

Return an GlobalOperationsClient object with the same endpoint as $this.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\GlobalOperationsClient](/php/docs/reference/cloud-compute/1.28.0/V1.GlobalOperationsClient)`

### resumeOperation

Resume an existing long running operation that was previously started by a long running API method. If $methodName is not provided, or does not match a long running API method, then the operation can still be resumed, but the OperationResponse object will not deserialize the final response.

**Parameters**

**Name**

**Description**

`operationName`

`string`  

The name of the long running operation

`methodName`

`string`  

The name of the method used to start the operation

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
