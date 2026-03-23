-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class RegionOperationsClient (1.10.1) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class RegionOperationsClient.

Service Description: The RegionOperations API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

```
$regionOperationsClient = new RegionOperationsClient();
try {
    $operation = 'operation';
    $project = 'project';
    $region = 'region';
    $response = $regionOperationsClient->delete($operation, $project, $region);
} finally {
    $regionOperationsClient->close();
}
```

This service has a new (beta) implementation. See [Google\\Cloud\\Compute\\V1\\Client\\RegionOperationsClient](/php/docs/reference/cloud-compute/1.10.1/V1.Client.RegionOperationsClient) to use the new surface.

## Namespace

Google \\ Cloud \\ Compute \\ V1

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

### delete

Deletes the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`operation`

`string`  

Name of the Operations resource to delete.

`project`

`string`  

Project ID for this request.

`region`

`string`  

Name of the region for this request.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\DeleteRegionOperationResponse](/php/docs/reference/cloud-compute/1.10.1/V1.DeleteRegionOperationResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\DeleteRegionOperationResponse;
use Google\Cloud\Compute\V1\RegionOperationsClient;

/**
 * @param string $operation Name of the Operations resource to delete.
 * @param string $project   Project ID for this request.
 * @param string $region    Name of the region for this request.
 */
function delete_sample(string $operation, string $project, string $region): void
{
    // Create a client.
    $regionOperationsClient = new RegionOperationsClient();

    // Call the API and handle any network failures.
    try {
        /** @var DeleteRegionOperationResponse $response */
        $response = $regionOperationsClient->delete($operation, $project, $region);
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
    $operation = '[OPERATION]';
    $project = '[PROJECT]';
    $region = '[REGION]';

    delete_sample($operation, $project, $region);
}
```

### get

Retrieves the specified region-specific Operations resource.

**Parameters**

**Name**

**Description**

`operation`

`string`  

Name of the Operations resource to return.

`project`

`string`  

Project ID for this request.

`region`

`string`  

Name of the region for this request.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\Operation](/php/docs/reference/cloud-compute/1.10.1/V1.Operation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Operation;
use Google\Cloud\Compute\V1\RegionOperationsClient;

/**
 * @param string $operation Name of the Operations resource to return.
 * @param string $project   Project ID for this request.
 * @param string $region    Name of the region for this request.
 */
function get_sample(string $operation, string $project, string $region): void
{
    // Create a client.
    $regionOperationsClient = new RegionOperationsClient();

    // Call the API and handle any network failures.
    try {
        /** @var Operation $response */
        $response = $regionOperationsClient->get($operation, $project, $region);
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
    $operation = '[OPERATION]';
    $project = '[PROJECT]';
    $region = '[REGION]';

    get_sample($operation, $project, $region);
}
```

### list

Retrieves a list of Operation resources contained within the specified region.

**Parameters**

**Name**

**Description**

`project`

`string`  

Project ID for this request.

`region`

`string`  

Name of the region for this request.

`optionalArgs`

`array`  

Optional.

`↳ filter`

`string`  

A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: `labels.owner:*` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: `(scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake")` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: `(cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true)` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.

`↳ maxResults`

`int`  

The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)

`↳ orderBy`

`string`  

Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.

`↳ pageToken`

`string`  

A page token is used to specify a page of values to be returned. If no page token is specified (the default), the first page of values will be returned. Any page token used here must have been generated by a previous call to the API.

`↳ returnPartialSuccess`

`bool`  

Opt-in for partial success behavior which provides partial results in case of failure. The default value is false.

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
use Google\Cloud\Compute\V1\RegionOperationsClient;

/**
 * @param string $project Project ID for this request.
 * @param string $region  Name of the region for this request.
 */
function list_sample(string $project, string $region): void
{
    // Create a client.
    $regionOperationsClient = new RegionOperationsClient();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $regionOperationsClient->list($project, $region);

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
    $region = '[REGION]';

    list_sample($project, $region);
}
```

### wait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.

**Parameters**

**Name**

**Description**

`operation`

`string`  

Name of the Operations resource to return.

`project`

`string`  

Project ID for this request.

`region`

`string`  

Name of the region for this request.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\Operation](/php/docs/reference/cloud-compute/1.10.1/V1.Operation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Operation;
use Google\Cloud\Compute\V1\RegionOperationsClient;

/**
 * @param string $operation Name of the Operations resource to return.
 * @param string $project   Project ID for this request.
 * @param string $region    Name of the region for this request.
 */
function wait_sample(string $operation, string $project, string $region): void
{
    // Create a client.
    $regionOperationsClient = new RegionOperationsClient();

    // Call the API and handle any network failures.
    try {
        /** @var Operation $response */
        $response = $regionOperationsClient->wait($operation, $project, $region);
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
    $operation = '[OPERATION]';
    $project = '[PROJECT]';
    $region = '[REGION]';

    wait_sample($operation, $project, $region);
}
```

## Constants

### SERVICE\_NAME

```
Value: 'google.cloud.compute.v1.RegionOperations'
```

The name of the service.

### SERVICE\_ADDRESS

```
Value: 'compute.googleapis.com'
```

The default address of the service.

### DEFAULT\_SERVICE\_PORT

```
Value: 443
```

The default port of the service.

### CODEGEN\_NAME

```
Value: 'gapic'
```

The name of the code generator, to be included in the agent header.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
