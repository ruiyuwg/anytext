-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Binary Authorization V1 Client - Class SystemPolicyV1Client (1.1.2) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.5 0.8.7 0.7.0 0.6.1 0.5.13

Reference documentation and code samples for the Google Cloud Binary Authorization V1 Client class SystemPolicyV1Client.

Service Description: API for working with the system policy.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ BinaryAuthorization \\ V1 \\ Client

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

This option should only be used with a pre-constructed Google\\Auth\\FetchAuthTokenInterface or [Google\\ApiCore\\CredentialsWrapper](https://docs.cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored. **Important**: If you are providing a path to a credentials file, or a decoded credentials file as a PHP array, this usage is now DEPRECATED. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. It is recommended to create the credentials explicitly `use Google\Auth\Credentials\ServiceAccountCredentials; use Google\Cloud\BinaryAuthorization\V1\SystemPolicyV1Client; $creds = new ServiceAccountCredentials($scopes, $json); $options = new SystemPolicyV1Client(['credentials' => $creds]);` [https://cloud.google.com/docs/authentication/external/externally-sourced-credentials](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials)

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

### getSystemPolicy

Gets the current system policy in the specified location.

The async variant is [SystemPolicyV1Client::getSystemPolicyAsync()](/php/docs/reference/cloud-binary-authorization/latest/V1.Client.SystemPolicyV1Client#_Google_Cloud_BinaryAuthorization_V1_Client_SystemPolicyV1Client__getSystemPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\BinaryAuthorization\V1\GetSystemPolicyRequest](/php/docs/reference/cloud-binary-authorization/latest/V1.GetSystemPolicyRequest)`  

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

`[Google\Cloud\BinaryAuthorization\V1\Policy](/php/docs/reference/cloud-binary-authorization/latest/V1.Policy)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\BinaryAuthorization\V1\Client\SystemPolicyV1Client;
use Google\Cloud\BinaryAuthorization\V1\GetSystemPolicyRequest;
use Google\Cloud\BinaryAuthorization\V1\Policy;

/**
 * @param string $formattedName The resource name, in the format `locations/&#42;/policy`.
 *                              Note that the system policy is not associated with a project. Please see
 *                              {@see SystemPolicyV1Client::policyName()} for help formatting this field.
 */
function get_system_policy_sample(string $formattedName): void
{
    // Create a client.
    $systemPolicyV1Client = new SystemPolicyV1Client();

    // Prepare the request message.
    $request = (new GetSystemPolicyRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $systemPolicyV1Client->getSystemPolicy($request);
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
    $formattedName = SystemPolicyV1Client::policyName('[PROJECT]');

    get_system_policy_sample($formattedName);
}
```

### getSystemPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\BinaryAuthorization\V1\GetSystemPolicyRequest](/php/docs/reference/cloud-binary-authorization/latest/V1.GetSystemPolicyRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\BinaryAuthorization\V1\Policy](/php/docs/reference/cloud-binary-authorization/latest/V1.Policy)>`

### static::locationPolicyName

Formats a string containing the fully-qualified path to represent a location\_policy resource.

**Parameter**

**Name**

**Description**

`location`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted location\_policy resource.

### static::policyName

Formats a string containing the fully-qualified path to represent a policy resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted policy resource.

### static::projectPolicyName

Formats a string containing the fully-qualified path to represent a project\_policy resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_policy resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   locationPolicy: locations/{location}/policy
-   policy: projects/{project}/policy
-   projectPolicy: projects/{project}/policy

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
