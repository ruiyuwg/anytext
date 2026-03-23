-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class EnvironmentsClient (1.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class EnvironmentsClient.

Service Description: Service for managing [Environments](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Environment).

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ Dialogflow \\ V2 \\ Client

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

The credentials to be used by the client to authorize API calls. This option accepts either a path to a credentials file, or a decoded credentials file as a PHP array. _Advanced usage_: In addition, this option can also accept a pre-constructed [Google\\Auth\\FetchAuthTokenInterface](https://googleapis.github.io/google-auth-library-php/main/Google/Auth/FetchAuthTokenInterface) object or [Google\\ApiCore\\CredentialsWrapper](https://googleapis.github.io/gax-php#Google/ApiCore/CredentialsWrapper) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored.

`↳ credentialsConfig`

`array`  

Options used to configure credentials, including auth token caching, for the client. For a full list of supporting configuration options, see [Google\\ApiCore\\CredentialsWrapper::build()](https://googleapis.github.io/gax-php#Google/ApiCore/CredentialsWrapper#method_build) .

`↳ disableRetries`

`bool`  

Determines whether or not retries defined by the client configuration should be disabled. Defaults to `false`.

`↳ clientConfig`

`string|array`  

Client method configuration, including retry settings. This option can be either a path to a JSON file, or a PHP array containing the decoded JSON data. By default this settings points to the default client config file, which is provided in the resources folder.

`↳ transport`

`string|TransportInterface`  

The transport used for executing network requests. May be either the string `rest` or `grpc`. Defaults to `grpc` if gRPC support is detected on the system. _Advanced usage_: Additionally, it is possible to pass in an already instantiated [Google\\ApiCore\\Transport\\TransportInterface](https://googleapis.github.io/gax-php#Google/ApiCore/Transport/TransportInterface) object. Note that when this object is provided, any settings in $transportConfig, and any $apiEndpoint setting, will be ignored.

`↳ transportConfig`

`array`  

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'grpc' => \[...\], 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\GrpcTransport::build()](https://googleapis.github.io/gax-php#Google/ApiCore/Transport/GrpcTransport#method_build) and [Google\\ApiCore\\Transport\\RestTransport::build()](https://googleapis.github.io/gax-php#Google/ApiCore/Transport/RestTransport#method_build) methods for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

### createEnvironment

Creates an agent environment.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::createEnvironmentAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__createEnvironmentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\CreateEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.CreateEnvironmentRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\Environment](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Environment)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
use Google\Cloud\Dialogflow\V2\CreateEnvironmentRequest;
use Google\Cloud\Dialogflow\V2\Environment;

/**
 * @param string $formattedParent The agent to create an environment for.
 *                                Supported formats:
 *
 *                                - `projects/<Project ID>/agent`
 *                                - `projects/<Project ID>/locations/<Location ID>/agent`
 *                                Please see {@see EnvironmentsClient::agentName()} for help formatting this field.
 * @param string $environmentId   The unique id of the new environment.
 */
function create_environment_sample(string $formattedParent, string $environmentId): void
{
    // Create a client.
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $environment = new Environment();
    $request = (new CreateEnvironmentRequest())
        ->setParent($formattedParent)
        ->setEnvironment($environment)
        ->setEnvironmentId($environmentId);

    // Call the API and handle any network failures.
    try {
        /** @var Environment $response */
        $response = $environmentsClient->createEnvironment($request);
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
    $formattedParent = EnvironmentsClient::agentName('[PROJECT]');
    $environmentId = '[ENVIRONMENT_ID]';

    create_environment_sample($formattedParent, $environmentId);
}
```

### deleteEnvironment

Deletes the specified agent environment.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::deleteEnvironmentAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__deleteEnvironmentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\DeleteEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.DeleteEnvironmentRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
use Google\Cloud\Dialogflow\V2\DeleteEnvironmentRequest;

/**
 * @param string $formattedName The name of the environment to delete.
 *                              / Format:
 *
 *                              - `projects/<Project ID>/agent/environments/<Environment ID>`
 *                              - `projects/<Project ID>/locations/<Location
 *                              ID>/agent/environments/<Environment ID>`
 *
 *                              The environment ID for the default environment is `-`. Please see
 *                              {@see EnvironmentsClient::environmentName()} for help formatting this field.
 */
function delete_environment_sample(string $formattedName): void
{
    // Create a client.
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $request = (new DeleteEnvironmentRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $environmentsClient->deleteEnvironment($request);
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
    $formattedName = EnvironmentsClient::environmentName('[PROJECT]', '[ENVIRONMENT]');

    delete_environment_sample($formattedName);
}
```

### getEnvironment

Retrieves the specified agent environment.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::getEnvironmentAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__getEnvironmentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\GetEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.GetEnvironmentRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\Environment](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Environment)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
use Google\Cloud\Dialogflow\V2\Environment;
use Google\Cloud\Dialogflow\V2\GetEnvironmentRequest;

/**
 * @param string $formattedName The name of the environment.
 *                              Supported formats:
 *
 *                              - `projects/<Project ID>/agent/environments/<Environment ID>`
 *                              - `projects/<Project ID>/locations/<Location
 *                              ID>/agent/environments/<Environment ID>`
 *
 *                              The environment ID for the default environment is `-`. Please see
 *                              {@see EnvironmentsClient::environmentName()} for help formatting this field.
 */
function get_environment_sample(string $formattedName): void
{
    // Create a client.
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $request = (new GetEnvironmentRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Environment $response */
        $response = $environmentsClient->getEnvironment($request);
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
    $formattedName = EnvironmentsClient::environmentName('[PROJECT]', '[ENVIRONMENT]');

    get_environment_sample($formattedName);
}
```

### getEnvironmentHistory

Gets the history of the specified environment.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::getEnvironmentHistoryAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__getEnvironmentHistoryAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\GetEnvironmentHistoryRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.GetEnvironmentHistoryRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://googleapis.github.io/gax-php#Google/ApiCore/PagedListResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
use Google\Cloud\Dialogflow\V2\EnvironmentHistory\Entry;
use Google\Cloud\Dialogflow\V2\GetEnvironmentHistoryRequest;

/**
 * @param string $formattedParent The name of the environment to retrieve history for.
 *                                Supported formats:
 *
 *                                - `projects/<Project ID>/agent/environments/<Environment ID>`
 *                                - `projects/<Project ID>/locations/<Location
 *                                ID>/agent/environments/<Environment ID>`
 *
 *                                The environment ID for the default environment is `-`. Please see
 *                                {@see EnvironmentsClient::environmentName()} for help formatting this field.
 */
function get_environment_history_sample(string $formattedParent): void
{
    // Create a client.
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $request = (new GetEnvironmentHistoryRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $environmentsClient->getEnvironmentHistory($request);

        /** @var Entry $element */
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
    $formattedParent = EnvironmentsClient::environmentName('[PROJECT]', '[ENVIRONMENT]');

    get_environment_history_sample($formattedParent);
}
```

### listEnvironments

Returns the list of all non-default environments of the specified agent.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::listEnvironmentsAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__listEnvironmentsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\ListEnvironmentsRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.ListEnvironmentsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://googleapis.github.io/gax-php#Google/ApiCore/PagedListResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
use Google\Cloud\Dialogflow\V2\Environment;
use Google\Cloud\Dialogflow\V2\ListEnvironmentsRequest;

/**
 * @param string $formattedParent The agent to list all environments from.
 *                                Format:
 *
 *                                - `projects/<Project ID>/agent`
 *                                - `projects/<Project ID>/locations/<Location ID>/agent`
 *                                Please see {@see EnvironmentsClient::agentName()} for help formatting this field.
 */
function list_environments_sample(string $formattedParent): void
{
    // Create a client.
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $request = (new ListEnvironmentsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $environmentsClient->listEnvironments($request);

        /** @var Environment $element */
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
    $formattedParent = EnvironmentsClient::agentName('[PROJECT]');

    list_environments_sample($formattedParent);
}
```

### updateEnvironment

Updates the specified agent environment.

This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment continues serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update an agent version in the default environment. WARNING: this will negate all recent changes to the draft agent and can't be undone. You may want to save the draft agent to a version before calling this method.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::updateEnvironmentAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__updateEnvironmentAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\UpdateEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.UpdateEnvironmentRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\Environment](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Environment)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
use Google\Cloud\Dialogflow\V2\Environment;
use Google\Cloud\Dialogflow\V2\UpdateEnvironmentRequest;
use Google\Protobuf\FieldMask;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_environment_sample(): void
{
    // Create a client.
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $environment = new Environment();
    $updateMask = new FieldMask();
    $request = (new UpdateEnvironmentRequest())
        ->setEnvironment($environment)
        ->setUpdateMask($updateMask);

    // Call the API and handle any network failures.
    try {
        /** @var Environment $response */
        $response = $environmentsClient->updateEnvironment($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### getLocation

Gets information about a location.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::getLocationAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__getLocationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\GetLocationRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Location/GetLocationRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Location\Location](https://googleapis.github.io/common-protos-php#Google/Cloud/Location/Location)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
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
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $request = new GetLocationRequest();

    // Call the API and handle any network failures.
    try {
        /** @var Location $response */
        $response = $environmentsClient->getLocation($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### listLocations

Lists information about the supported locations for this service.

The async variant is [Google\\Cloud\\Dialogflow\\V2\\Client\\EnvironmentsClient::listLocationsAsync()](/php/docs/reference/cloud-dialogflow/1.14.0/V2.Client.EnvironmentsClient#_Google_Cloud_Dialogflow_V2_Client_EnvironmentsClient__listLocationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\ListLocationsRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Location/ListLocationsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://googleapis.github.io/gax-php#Google/ApiCore/PagedListResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\Dialogflow\V2\Client\EnvironmentsClient;
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
    $environmentsClient = new EnvironmentsClient();

    // Prepare the request message.
    $request = new ListLocationsRequest();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $environmentsClient->listLocations($request);

        /** @var Location $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### createEnvironmentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\CreateEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.CreateEnvironmentRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### deleteEnvironmentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\DeleteEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.DeleteEnvironmentRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getEnvironmentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\GetEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.GetEnvironmentRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getEnvironmentHistoryAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\GetEnvironmentHistoryRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.GetEnvironmentHistoryRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listEnvironmentsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\ListEnvironmentsRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.ListEnvironmentsRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### updateEnvironmentAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dialogflow\V2\UpdateEnvironmentRequest](/php/docs/reference/cloud-dialogflow/1.14.0/V2.UpdateEnvironmentRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getLocationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\GetLocationRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Location/GetLocationRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listLocationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\ListLocationsRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Location/ListLocationsRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### static::agentName

Formats a string containing the fully-qualified path to represent a agent resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted agent resource.

### static::environmentName

Formats a string containing the fully-qualified path to represent a environment resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`environment`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted environment resource.

### static::fulfillmentName

Formats a string containing the fully-qualified path to represent a fulfillment resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted fulfillment resource.

### static::projectAgentName

Formats a string containing the fully-qualified path to represent a project\_agent resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_agent resource.

### static::projectEnvironmentName

Formats a string containing the fully-qualified path to represent a project\_environment resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`environment`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_environment resource.

### static::projectFulfillmentName

Formats a string containing the fully-qualified path to represent a project\_fulfillment resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_fulfillment resource.

### static::projectLocationAgentName

Formats a string containing the fully-qualified path to represent a project\_location\_agent resource.

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

The formatted project\_location\_agent resource.

### static::projectLocationEnvironmentName

Formats a string containing the fully-qualified path to represent a project\_location\_environment resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`environment`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_location\_environment resource.

### static::projectLocationFulfillmentName

Formats a string containing the fully-qualified path to represent a project\_location\_fulfillment resource.

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

The formatted project\_location\_fulfillment resource.

### static::projectLocationVersionName

Formats a string containing the fully-qualified path to represent a project\_location\_version resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`version`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_location\_version resource.

### static::projectVersionName

Formats a string containing the fully-qualified path to represent a project\_version resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`version`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_version resource.

### static::versionName

Formats a string containing the fully-qualified path to represent a version resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`version`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted version resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   agent: projects/{project}/agent
-   environment: projects/{project}/agent/environments/{environment}
-   fulfillment: projects/{project}/agent/fulfillment
-   projectAgent: projects/{project}/agent
-   projectEnvironment: projects/{project}/agent/environments/{environment}
-   projectFulfillment: projects/{project}/agent/fulfillment
-   projectLocationAgent: projects/{project}/locations/{location}/agent
-   projectLocationEnvironment: projects/{project}/locations/{location}/agent/environments/{environment}
-   projectLocationFulfillment: projects/{project}/locations/{location}/agent/fulfillment
-   projectLocationVersion: projects/{project}/locations/{location}/agent/versions/{version}
-   projectVersion: projects/{project}/agent/versions/{version}
-   version: projects/{project}/agent/versions/{version}

The optional $template argument can be supplied to specify a particular pattern, and must match one of the templates listed above. If no $template argument is provided, or if the $template argument does not match one of the templates listed, then parseName will check each of the supported templates, and return the first match.

**Parameters**

**Name**

**Description**

`formattedName`

`string`  

The formatted name string

`template`

`string`  

Optional name of template to match

**Returns**

**Type**

**Description**

`array`

An associative array from name component IDs to component values.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
