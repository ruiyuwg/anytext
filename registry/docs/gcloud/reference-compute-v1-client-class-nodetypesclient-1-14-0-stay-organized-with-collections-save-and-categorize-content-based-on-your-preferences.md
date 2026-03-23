-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class NodeTypesClient (1.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class NodeTypesClient.

Service Description: The NodeTypes API.

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

The transport used for executing network requests. At the moment, supports only `rest`. _Advanced usage_: Additionally, it is possible to pass in an already instantiated [Google\\ApiCore\\Transport\\TransportInterface](https://googleapis.github.io/gax-php#Google/ApiCore/Transport/TransportInterface) object. Note that when this object is provided, any settings in $transportConfig, and any $apiEndpoint setting, will be ignored.

`↳ transportConfig`

`array`  

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\RestTransport::build()](https://googleapis.github.io/gax-php#Google/ApiCore/Transport/RestTransport#method_build) method for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

### aggregatedList

Retrieves an aggregated list of node types.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\NodeTypesClient::aggregatedListAsync()](/php/docs/reference/cloud-compute/1.14.0/V1.Client.NodeTypesClient#_Google_Cloud_Compute_V1_Client_NodeTypesClient__aggregatedListAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AggregatedListNodeTypesRequest](/php/docs/reference/cloud-compute/1.14.0/V1.AggregatedListNodeTypesRequest)`  

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

### get

Returns the specified node type.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\NodeTypesClient::getAsync()](/php/docs/reference/cloud-compute/1.14.0/V1.Client.NodeTypesClient#_Google_Cloud_Compute_V1_Client_NodeTypesClient__getAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetNodeTypeRequest](/php/docs/reference/cloud-compute/1.14.0/V1.GetNodeTypeRequest)`  

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

`[Google\Cloud\Compute\V1\NodeType](/php/docs/reference/cloud-compute/1.14.0/V1.NodeType)`

### list

Retrieves a list of node types available to the specified project.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\NodeTypesClient::listAsync()](/php/docs/reference/cloud-compute/1.14.0/V1.Client.NodeTypesClient#_Google_Cloud_Compute_V1_Client_NodeTypesClient__listAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListNodeTypesRequest](/php/docs/reference/cloud-compute/1.14.0/V1.ListNodeTypesRequest)`  

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

### aggregatedListAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AggregatedListNodeTypesRequest](/php/docs/reference/cloud-compute/1.14.0/V1.AggregatedListNodeTypesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetNodeTypeRequest](/php/docs/reference/cloud-compute/1.14.0/V1.GetNodeTypeRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListNodeTypesRequest](/php/docs/reference/cloud-compute/1.14.0/V1.ListNodeTypesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
