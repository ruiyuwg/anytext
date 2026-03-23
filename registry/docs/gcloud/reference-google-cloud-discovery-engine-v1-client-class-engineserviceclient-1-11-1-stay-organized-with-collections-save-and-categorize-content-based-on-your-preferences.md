-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Discovery Engine V1 Client - Class EngineServiceClient (1.11.1) Stay organized with collections Save and categorize content based on your preferences.

1.11.1 (latest) 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.1 1.5.1 1.4.0 1.3.3 1.2.0 1.1.0 1.0.0 0.11.3 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.1

Reference documentation and code samples for the Google Cloud Discovery Engine V1 Client class EngineServiceClient.

Service Description: Service for managing Engine configuration.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ DiscoveryEngine \\ V1 \\ Client

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`options`

`array|[Google\ApiCore\Options\ClientOptions](https://docs.cloud.google.com/php/docs/reference/gax/latest/Options.ClientOptions.html)`  

Optional. Options for configuring the service API wrapper.

`↳ apiEndpoint`

`string`  

The address of the API remote host. May optionally include the port, formatted as "

`↳ credentials`

`FetchAuthTokenInterface|CredentialsWrapper`  

This option should only be used with a pre-constructed Google\\Auth\\FetchAuthTokenInterface or [Google\\ApiCore\\CredentialsWrapper](https://docs.cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored. **Important**: If you are providing a path to a credentials file, or a decoded credentials file as a PHP array, this usage is now DEPRECATED. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. It is recommended to create the credentials explicitly `use Google\Auth\Credentials\ServiceAccountCredentials; use Google\Cloud\DiscoveryEngine\V1\EngineServiceClient; $creds = new ServiceAccountCredentials($scopes, $json); $options = new EngineServiceClient(['credentials' => $creds]);` [https://cloud.google.com/docs/authentication/external/externally-sourced-credentials](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials)

`↳ credentialsConfig`

`array`  

Options used to configure credentials, including auth token caching, for the client. For a full list of supporting configuration options, see [Google\\ApiCore\\CredentialsWrapper::build()](https://docs.cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html#_Google_ApiCore_CredentialsWrapper__build__) .

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

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'grpc' => \[...\], 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\GrpcTransport::build()](https://docs.cloud.google.com/php/docs/reference/gax/latest/Transport.GrpcTransport.html#_Google_ApiCore_Transport_GrpcTransport__build__) and [Google\\ApiCore\\Transport\\RestTransport::build()](https://docs.cloud.google.com/php/docs/reference/gax/latest/Transport.RestTransport.html#_Google_ApiCore_Transport_RestTransport__build__) methods for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

`↳ logger`

`false|LoggerInterface`  

A PSR-3 compliant logger. If set to false, logging is disabled, ignoring the 'GOOGLE\_SDK\_PHP\_LOGGING' environment flag

`↳ universeDomain`

`string`  

The service domain for the client. Defaults to 'googleapis.com'.

### createEngine

Creates a Engine.

The async variant is [EngineServiceClient::createEngineAsync()](/php/docs/reference/cloud-discoveryengine/latest/V1.Client.EngineServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_EngineServiceClient__createEngineAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\CreateEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.CreateEngineRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)<Google\Cloud\DiscoveryEngine\V1\Engine>`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\DiscoveryEngine\V1\Client\EngineServiceClient;
use Google\Cloud\DiscoveryEngine\V1\CreateEngineRequest;
use Google\Cloud\DiscoveryEngine\V1\Engine;
use Google\Cloud\DiscoveryEngine\V1\SolutionType;
use Google\Rpc\Status;

/**
 * @param string $formattedParent    The parent resource name, such as
 *                                   `projects/{project}/locations/{location}/collections/{collection}`. Please see
 *                                   {@see EngineServiceClient::collectionName()} for help formatting this field.
 * @param string $engineDisplayName  The display name of the engine. Should be human readable. UTF-8
 *                                   encoded string with limit of 1024 characters.
 * @param int    $engineSolutionType The solutions of the engine.
 * @param string $engineId           The ID to use for the
 *                                   [Engine][google.cloud.discoveryengine.v1.Engine], which will become the
 *                                   final component of the [Engine][google.cloud.discoveryengine.v1.Engine]'s
 *                                   resource name.
 *
 *                                   This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
 *                                   standard with a length limit of 63 characters. Otherwise, an
 *                                   INVALID_ARGUMENT error is returned.
 */
function create_engine_sample(
    string $formattedParent,
    string $engineDisplayName,
    int $engineSolutionType,
    string $engineId
): void {
    // Create a client.
    $engineServiceClient = new EngineServiceClient();

    // Prepare the request message.
    $engine = (new Engine())
        ->setDisplayName($engineDisplayName)
        ->setSolutionType($engineSolutionType);
    $request = (new CreateEngineRequest())
        ->setParent($formattedParent)
        ->setEngine($engine)
        ->setEngineId($engineId);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $engineServiceClient->createEngine($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Engine $result */
            $result = $response->getResult();
            printf('Operation successful with response data: %s' . PHP_EOL, $result->serializeToJsonString());
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
    $formattedParent = EngineServiceClient::collectionName('[PROJECT]', '[LOCATION]', '[COLLECTION]');
    $engineDisplayName = '[DISPLAY_NAME]';
    $engineSolutionType = SolutionType::SOLUTION_TYPE_UNSPECIFIED;
    $engineId = '[ENGINE_ID]';

    create_engine_sample($formattedParent, $engineDisplayName, $engineSolutionType, $engineId);
}
```

### deleteEngine

Deletes a Engine.

The async variant is [EngineServiceClient::deleteEngineAsync()](/php/docs/reference/cloud-discoveryengine/latest/V1.Client.EngineServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_EngineServiceClient__deleteEngineAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\DeleteEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.DeleteEngineRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)<null>`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\DiscoveryEngine\V1\Client\EngineServiceClient;
use Google\Cloud\DiscoveryEngine\V1\DeleteEngineRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedName Full resource name of
 *                              [Engine][google.cloud.discoveryengine.v1.Engine], such as
 *                              `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
 *
 *                              If the caller does not have permission to delete the
 *                              [Engine][google.cloud.discoveryengine.v1.Engine], regardless of whether or
 *                              not it exists, a PERMISSION_DENIED error is returned.
 *
 *                              If the [Engine][google.cloud.discoveryengine.v1.Engine] to delete does not
 *                              exist, a NOT_FOUND error is returned. Please see
 *                              {@see EngineServiceClient::engineName()} for help formatting this field.
 */
function delete_engine_sample(string $formattedName): void
{
    // Create a client.
    $engineServiceClient = new EngineServiceClient();

    // Prepare the request message.
    $request = (new DeleteEngineRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $engineServiceClient->deleteEngine($request);
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
    $formattedName = EngineServiceClient::engineName(
        '[PROJECT]',
        '[LOCATION]',
        '[COLLECTION]',
        '[ENGINE]'
    );

    delete_engine_sample($formattedName);
}
```

### getEngine

Gets a Engine.

The async variant is [EngineServiceClient::getEngineAsync()](/php/docs/reference/cloud-discoveryengine/latest/V1.Client.EngineServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_EngineServiceClient__getEngineAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\GetEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.GetEngineRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`Google\Cloud\DiscoveryEngine\V1\Engine`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\DiscoveryEngine\V1\Client\EngineServiceClient;
use Google\Cloud\DiscoveryEngine\V1\Engine;
use Google\Cloud\DiscoveryEngine\V1\GetEngineRequest;

/**
 * @param string $formattedName Full resource name of
 *                              [Engine][google.cloud.discoveryengine.v1.Engine], such as
 *                              `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. Please see
 *                              {@see EngineServiceClient::engineName()} for help formatting this field.
 */
function get_engine_sample(string $formattedName): void
{
    // Create a client.
    $engineServiceClient = new EngineServiceClient();

    // Prepare the request message.
    $request = (new GetEngineRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Engine $response */
        $response = $engineServiceClient->getEngine($request);
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
    $formattedName = EngineServiceClient::engineName(
        '[PROJECT]',
        '[LOCATION]',
        '[COLLECTION]',
        '[ENGINE]'
    );

    get_engine_sample($formattedName);
}
```

### listEngines

Lists all the Engines associated with the project.

The async variant is [EngineServiceClient::listEnginesAsync()](/php/docs/reference/cloud-discoveryengine/latest/V1.Client.EngineServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_EngineServiceClient__listEnginesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\ListEnginesRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.ListEnginesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\DiscoveryEngine\V1\Client\EngineServiceClient;
use Google\Cloud\DiscoveryEngine\V1\Engine;
use Google\Cloud\DiscoveryEngine\V1\ListEnginesRequest;

/**
 * @param string $formattedParent The parent resource name, such as
 *                                `projects/{project}/locations/{location}/collections/{collection_id}`. Please see
 *                                {@see EngineServiceClient::collectionName()} for help formatting this field.
 */
function list_engines_sample(string $formattedParent): void
{
    // Create a client.
    $engineServiceClient = new EngineServiceClient();

    // Prepare the request message.
    $request = (new ListEnginesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $engineServiceClient->listEngines($request);

        /** @var Engine $element */
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
    $formattedParent = EngineServiceClient::collectionName('[PROJECT]', '[LOCATION]', '[COLLECTION]');

    list_engines_sample($formattedParent);
}
```

### updateEngine

Updates an Engine

The async variant is [EngineServiceClient::updateEngineAsync()](/php/docs/reference/cloud-discoveryengine/latest/V1.Client.EngineServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_EngineServiceClient__updateEngineAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\UpdateEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.UpdateEngineRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://docs.cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`Google\Cloud\DiscoveryEngine\V1\Engine`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\DiscoveryEngine\V1\Client\EngineServiceClient;
use Google\Cloud\DiscoveryEngine\V1\Engine;
use Google\Cloud\DiscoveryEngine\V1\SolutionType;
use Google\Cloud\DiscoveryEngine\V1\UpdateEngineRequest;

/**
 * @param string $engineDisplayName  The display name of the engine. Should be human readable. UTF-8
 *                                   encoded string with limit of 1024 characters.
 * @param int    $engineSolutionType The solutions of the engine.
 */
function update_engine_sample(string $engineDisplayName, int $engineSolutionType): void
{
    // Create a client.
    $engineServiceClient = new EngineServiceClient();

    // Prepare the request message.
    $engine = (new Engine())
        ->setDisplayName($engineDisplayName)
        ->setSolutionType($engineSolutionType);
    $request = (new UpdateEngineRequest())
        ->setEngine($engine);

    // Call the API and handle any network failures.
    try {
        /** @var Engine $response */
        $response = $engineServiceClient->updateEngine($request);
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
    $engineDisplayName = '[DISPLAY_NAME]';
    $engineSolutionType = SolutionType::SOLUTION_TYPE_UNSPECIFIED;

    update_engine_sample($engineDisplayName, $engineSolutionType);
}
```

### createEngineAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\CreateEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.CreateEngineRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### deleteEngineAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\DeleteEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.DeleteEngineRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getEngineAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\GetEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.GetEngineRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<Google\Cloud\DiscoveryEngine\V1\Engine>`

### listEnginesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\ListEnginesRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.ListEnginesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### updateEngineAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\DiscoveryEngine\V1\UpdateEngineRequest](/php/docs/reference/cloud-discoveryengine/latest/V1.UpdateEngineRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<Google\Cloud\DiscoveryEngine\V1\Engine>`

### getOperationsClient

Return an OperationsClient object with the same endpoint as $this.

**Returns**

**Type**

**Description**

`Google\LongRunning\Client\OperationsClient`

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

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

### static::collectionName

Formats a string containing the fully-qualified path to represent a collection resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`collection`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted collection resource.

### static::engineName

Formats a string containing the fully-qualified path to represent a engine resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`collection`

`string`  

`engine`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted engine resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   collection: projects/{project}/locations/{location}/collections/{collection}
-   engine: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}

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

Last updated 2026-03-18 UTC.
