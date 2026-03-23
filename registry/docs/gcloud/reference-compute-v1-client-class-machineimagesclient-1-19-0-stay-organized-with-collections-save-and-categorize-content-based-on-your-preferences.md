-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class MachineImagesClient (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class MachineImagesClient.

Service Description: The MachineImages API.

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

### delete

Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::deleteAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__deleteAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.DeleteMachineImageRequest)`  

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

`[Google\ApiCore\OperationResponse](https://googleapis.github.io/gax-php#Google/ApiCore/OperationResponse)`

### get

Returns the specified machine image.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::getAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__getAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.GetMachineImageRequest)`  

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

`[Google\Cloud\Compute\V1\MachineImage](/php/docs/reference/cloud-compute/1.19.0/V1.MachineImage)`

### getIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::getIamPolicyAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__getIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetIamPolicyMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.GetIamPolicyMachineImageRequest)`  

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

`[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/1.19.0/V1.Policy)`

### insert

Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::insertAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__insertAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.InsertMachineImageRequest)`  

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

`[Google\ApiCore\OperationResponse](https://googleapis.github.io/gax-php#Google/ApiCore/OperationResponse)`

### list

Retrieves a list of machine images that are contained within the specified project.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::listAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__listAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListMachineImagesRequest](/php/docs/reference/cloud-compute/1.19.0/V1.ListMachineImagesRequest)`  

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

### setIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::setIamPolicyAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__setIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\SetIamPolicyMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.SetIamPolicyMachineImageRequest)`  

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

`[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/1.19.0/V1.Policy)`

### testIamPermissions

Returns permissions that a caller has on the specified resource.

The async variant is [Google\\Cloud\\Compute\\V1\\Client\\MachineImagesClient::testIamPermissionsAsync()](/php/docs/reference/cloud-compute/1.19.0/V1.Client.MachineImagesClient#_Google_Cloud_Compute_V1_Client_MachineImagesClient__testIamPermissionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\TestIamPermissionsMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.TestIamPermissionsMachineImageRequest)`  

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

`[Google\Cloud\Compute\V1\TestPermissionsResponse](/php/docs/reference/cloud-compute/1.19.0/V1.TestPermissionsResponse)`

### deleteAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.DeleteMachineImageRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### getAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.GetMachineImageRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### getIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetIamPolicyMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.GetIamPolicyMachineImageRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### insertAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.InsertMachineImageRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### listAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListMachineImagesRequest](/php/docs/reference/cloud-compute/1.19.0/V1.ListMachineImagesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### setIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\SetIamPolicyMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.SetIamPolicyMachineImageRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### testIamPermissionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\TestIamPermissionsMachineImageRequest](/php/docs/reference/cloud-compute/1.19.0/V1.TestIamPermissionsMachineImageRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)`

### getOperationsClient

Return an GlobalOperationsClient object with the same endpoint as $this.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\GlobalOperationsClient](/php/docs/reference/cloud-compute/1.19.0/V1.GlobalOperationsClient)`

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

`[Google\ApiCore\OperationResponse](https://googleapis.github.io/gax-php#Google/ApiCore/OperationResponse)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
