-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class GenAiCacheServiceClient (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class GenAiCacheServiceClient.

Service Description: Service for managing Vertex AI's CachedContent resource.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1 \\ Client

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

The credentials to be used by the client to authorize API calls. This option accepts either a path to a credentials file, or a decoded credentials file as a PHP array. _Advanced usage_: In addition, this option can also accept a pre-constructed [Google\\Auth\\FetchAuthTokenInterface](https://googleapis.github.io/google-auth-library-php/main/Google/Auth/FetchAuthTokenInterface) object or [Google\\ApiCore\\CredentialsWrapper](https://cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored. _Important_: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud Platform, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information [https://cloud.google.com/docs/authentication/external/externally-sourced-credentials](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials)

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

The transport used for executing network requests. May be either the string `rest` or `grpc`. Defaults to `grpc` if gRPC support is detected on the system. _Advanced usage_: Additionally, it is possible to pass in an already instantiated Google\\ApiCore\\Transport\\TransportInterface object. Note that when this object is provided, any settings in $transportConfig, and any $apiEndpoint setting, will be ignored.

`↳ transportConfig`

`array`  

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'grpc' => \[...\], 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\GrpcTransport::build()](https://cloud.google.com/php/docs/reference/gax/latest/Transport.GrpcTransport.html#_Google_ApiCore_Transport_GrpcTransport__build__) and [Google\\ApiCore\\Transport\\RestTransport::build()](https://cloud.google.com/php/docs/reference/gax/latest/Transport.RestTransport.html#_Google_ApiCore_Transport_RestTransport__build__) methods for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

`↳ logger`

`false|LoggerInterface`  

A PSR-3 compliant logger. If set to false, logging is disabled, ignoring the 'GOOGLE\_SDK\_PHP\_LOGGING' environment flag

### createCachedContent

Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.

The async variant is [GenAiCacheServiceClient::createCachedContentAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__createCachedContentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\CreateCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CreateCachedContentRequest)`  

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

`[Google\Cloud\AIPlatform\V1\CachedContent](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CachedContent)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\CachedContent;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\AIPlatform\V1\CreateCachedContentRequest;

/**
 * @param string $formattedParent The parent resource where the cached content will be created
 *                                Please see {@see GenAiCacheServiceClient::locationName()} for help formatting this field.
 */
function create_cached_content_sample(string $formattedParent): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $cachedContent = new CachedContent();
    $request = (new CreateCachedContentRequest())
        ->setParent($formattedParent)
        ->setCachedContent($cachedContent);

    // Call the API and handle any network failures.
    try {
        /** @var CachedContent $response */
        $response = $genAiCacheServiceClient->createCachedContent($request);
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
    $formattedParent = GenAiCacheServiceClient::locationName('[PROJECT]', '[LOCATION]');

    create_cached_content_sample($formattedParent);
}
```

### deleteCachedContent

Deletes cached content

The async variant is [GenAiCacheServiceClient::deleteCachedContentAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__deleteCachedContentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\DeleteCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.DeleteCachedContentRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\AIPlatform\V1\DeleteCachedContentRequest;

/**
 * @param string $formattedName The resource name referring to the cached content
 *                              Please see {@see GenAiCacheServiceClient::cachedContentName()} for help formatting this field.
 */
function delete_cached_content_sample(string $formattedName): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $request = (new DeleteCachedContentRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $genAiCacheServiceClient->deleteCachedContent($request);
        printf('Call completed successfully.' . PHP_EOL);
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
    $formattedName = GenAiCacheServiceClient::cachedContentName(
        '[PROJECT]',
        '[LOCATION]',
        '[CACHED_CONTENT]'
    );

    delete_cached_content_sample($formattedName);
}
```

### getCachedContent

Gets cached content configurations

The async variant is [GenAiCacheServiceClient::getCachedContentAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__getCachedContentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\GetCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.GetCachedContentRequest)`  

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

`[Google\Cloud\AIPlatform\V1\CachedContent](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CachedContent)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\CachedContent;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\AIPlatform\V1\GetCachedContentRequest;

/**
 * @param string $formattedName The resource name referring to the cached content
 *                              Please see {@see GenAiCacheServiceClient::cachedContentName()} for help formatting this field.
 */
function get_cached_content_sample(string $formattedName): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $request = (new GetCachedContentRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var CachedContent $response */
        $response = $genAiCacheServiceClient->getCachedContent($request);
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
    $formattedName = GenAiCacheServiceClient::cachedContentName(
        '[PROJECT]',
        '[LOCATION]',
        '[CACHED_CONTENT]'
    );

    get_cached_content_sample($formattedName);
}
```

### listCachedContents

Lists cached contents in a project

The async variant is [GenAiCacheServiceClient::listCachedContentsAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__listCachedContentsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\ListCachedContentsRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.ListCachedContentsRequest)`  

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
use Google\Cloud\AIPlatform\V1\CachedContent;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\AIPlatform\V1\ListCachedContentsRequest;

/**
 * @param string $formattedParent The parent, which owns this collection of cached contents. Please see
 *                                {@see GenAiCacheServiceClient::locationName()} for help formatting this field.
 */
function list_cached_contents_sample(string $formattedParent): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $request = (new ListCachedContentsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $genAiCacheServiceClient->listCachedContents($request);

        /** @var CachedContent $element */
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
    $formattedParent = GenAiCacheServiceClient::locationName('[PROJECT]', '[LOCATION]');

    list_cached_contents_sample($formattedParent);
}
```

### updateCachedContent

Updates cached content configurations

The async variant is [GenAiCacheServiceClient::updateCachedContentAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__updateCachedContentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\UpdateCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.UpdateCachedContentRequest)`  

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

`[Google\Cloud\AIPlatform\V1\CachedContent](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CachedContent)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\CachedContent;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\AIPlatform\V1\UpdateCachedContentRequest;
use Google\Protobuf\FieldMask;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_cached_content_sample(): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $cachedContent = new CachedContent();
    $updateMask = new FieldMask();
    $request = (new UpdateCachedContentRequest())
        ->setCachedContent($cachedContent)
        ->setUpdateMask($updateMask);

    // Call the API and handle any network failures.
    try {
        /** @var CachedContent $response */
        $response = $genAiCacheServiceClient->updateCachedContent($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### getLocation

Gets information about a location.

The async variant is [GenAiCacheServiceClient::getLocationAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__getLocationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\GetLocationRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.GetLocationRequest.html)`  

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

`[Google\Cloud\Location\Location](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.Location.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\Location\GetLocationRequest;
use Google\Cloud\Location\Location;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function get_location_sample(): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $request = new GetLocationRequest();

    // Call the API and handle any network failures.
    try {
        /** @var Location $response */
        $response = $genAiCacheServiceClient->getLocation($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### listLocations

Lists information about the supported locations for this service.

The async variant is [GenAiCacheServiceClient::listLocationsAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__listLocationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\ListLocationsRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.ListLocationsRequest.html)`  

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
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\Location\ListLocationsRequest;
use Google\Cloud\Location\Location;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function list_locations_sample(): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $request = new ListLocationsRequest();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $genAiCacheServiceClient->listLocations($request);

        /** @var Location $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### getIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

The async variant is [GenAiCacheServiceClient::getIamPolicyAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__getIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\GetIamPolicyRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.GetIamPolicyRequest.html)`  

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

`[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\Policy;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being requested.
 *                         See the operation documentation for the appropriate value for this field.
 */
function get_iam_policy_sample(string $resource): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $request = (new GetIamPolicyRequest())
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $genAiCacheServiceClient->getIamPolicy($request);
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
    $resource = '[RESOURCE]';

    get_iam_policy_sample($resource);
}
```

### setIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

The async variant is [GenAiCacheServiceClient::setIamPolicyAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__setIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\SetIamPolicyRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.SetIamPolicyRequest.html)`  

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

`[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being specified.
 *                         See the operation documentation for the appropriate value for this field.
 */
function set_iam_policy_sample(string $resource): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $policy = new Policy();
    $request = (new SetIamPolicyRequest())
        ->setResource($resource)
        ->setPolicy($policy);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $genAiCacheServiceClient->setIamPolicy($request);
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
    $resource = '[RESOURCE]';

    set_iam_policy_sample($resource);
}
```

### testIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.

Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

The async variant is [GenAiCacheServiceClient::testIamPermissionsAsync()](/php/docs/reference/cloud-ai-platform/1.15.0/V1.Client.GenAiCacheServiceClient#_Google_Cloud_AIPlatform_V1_Client_GenAiCacheServiceClient__testIamPermissionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\TestIamPermissionsRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

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

`[Google\Cloud\Iam\V1\TestIamPermissionsResponse](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\AIPlatform\V1\Client\GenAiCacheServiceClient;
use Google\Cloud\Iam\V1\TestIamPermissionsRequest;
use Google\Cloud\Iam\V1\TestIamPermissionsResponse;

/**
 * @param string $resource           REQUIRED: The resource for which the policy detail is being requested.
 *                                   See the operation documentation for the appropriate value for this field.
 * @param string $permissionsElement The set of permissions to check for the `resource`. Permissions with
 *                                   wildcards (such as '*' or 'storage.*') are not allowed. For more
 *                                   information see
 *                                   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
function test_iam_permissions_sample(string $resource, string $permissionsElement): void
{
    // Create a client.
    $genAiCacheServiceClient = new GenAiCacheServiceClient();

    // Prepare the request message.
    $permissions = [$permissionsElement,];
    $request = (new TestIamPermissionsRequest())
        ->setResource($resource)
        ->setPermissions($permissions);

    // Call the API and handle any network failures.
    try {
        /** @var TestIamPermissionsResponse $response */
        $response = $genAiCacheServiceClient->testIamPermissions($request);
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
    $resource = '[RESOURCE]';
    $permissionsElement = '[PERMISSIONS]';

    test_iam_permissions_sample($resource, $permissionsElement);
}
```

### createCachedContentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\CreateCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CreateCachedContentRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\AIPlatform\V1\CachedContent](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CachedContent)>`

### deleteCachedContentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\DeleteCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.DeleteCachedContentRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### getCachedContentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\GetCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.GetCachedContentRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\AIPlatform\V1\CachedContent](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CachedContent)>`

### listCachedContentsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\ListCachedContentsRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.ListCachedContentsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### updateCachedContentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\AIPlatform\V1\UpdateCachedContentRequest](/php/docs/reference/cloud-ai-platform/1.15.0/V1.UpdateCachedContentRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\AIPlatform\V1\CachedContent](/php/docs/reference/cloud-ai-platform/1.15.0/V1.CachedContent)>`

### getLocationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\GetLocationRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.GetLocationRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Location\Location](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.Location.html)>`

### listLocationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\ListLocationsRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.ListLocationsRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### getIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\GetIamPolicyRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.GetIamPolicyRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)>`

### setIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\SetIamPolicyRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.SetIamPolicyRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)>`

### testIamPermissionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\TestIamPermissionsRequest](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Iam\V1\TestIamPermissionsResponse](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

### static::cachedContentName

Formats a string containing the fully-qualified path to represent a cached\_content resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`cachedContent`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted cached\_content resource.

### static::locationName

Formats a string containing the fully-qualified path to represent a location resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted location resource.

### static::ragCorpusName

Formats a string containing the fully-qualified path to represent a rag\_corpus resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`ragCorpus`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted rag\_corpus resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   cachedContent: projects/{project}/locations/{location}/cachedContents/{cached\_content}
-   location: projects/{project}/locations/{location}
-   ragCorpus: projects/{project}/locations/{location}/ragCorpora/{rag\_corpus}

The optional $template argument can be supplied to specify a particular pattern, and must match one of the templates listed above. If no $template argument is provided, or if the $template argument does not match one of the templates listed, then parseName will check each of the supported templates, and return the first match.

**Parameters**

**Name**

**Description**

`formattedName`

`string`  

The formatted name string

`template`

`?string`  

Optional name of template to match

**Returns**

**Type**

**Description**

`array`

An associative array from name component IDs to component values.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
