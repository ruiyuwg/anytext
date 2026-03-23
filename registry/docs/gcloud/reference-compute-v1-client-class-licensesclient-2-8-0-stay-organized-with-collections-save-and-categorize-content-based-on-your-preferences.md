-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class LicensesClient (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class LicensesClient.

Service Description: The Licenses API.

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

`array|[Google\ApiCore\Options\ClientOptions](https://docs.cloud.google.com/php/docs/reference/gax/latest/Options.ClientOptions.html)`  

Optional. Options for configuring the service API wrapper.

`↳ apiEndpoint`

`string`  

The address of the API remote host. May optionally include the port, formatted as "

`↳ credentials`

`FetchAuthTokenInterface|CredentialsWrapper`  

This option should only be used with a pre-constructed Google\\Auth\\FetchAuthTokenInterface or [Google\\ApiCore\\CredentialsWrapper](https://docs.cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored. **Important**: If you are providing a path to a credentials file, or a decoded credentials file as a PHP array, this usage is now DEPRECATED. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. It is recommended to create the credentials explicitly `use Google\Auth\Credentials\ServiceAccountCredentials; use Google\Cloud\Compute\V1\LicensesClient; $creds = new ServiceAccountCredentials($scopes, $json); $options = new LicensesClient(['credentials' => $creds]);` [https://cloud.google.com/docs/authentication/external/externally-sourced-credentials](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials)

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

The transport used for executing network requests. At the moment, supports only `rest`. _Advanced usage_: Additionally, it is possible to pass in an already instantiated Google\\ApiCore\\Transport\\TransportInterface object. Note that when this object is provided, any settings in $transportConfig, and any $apiEndpoint setting, will be ignored.

`↳ transportConfig`

`array`  

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\RestTransport::build()](https://docs.cloud.google.com/php/docs/reference/gax/latest/Transport.RestTransport.html#_Google_ApiCore_Transport_RestTransport__build__) method for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

`↳ logger`

`false|LoggerInterface`  

A PSR-3 compliant logger. If set to false, logging is disabled, ignoring the 'GOOGLE\_SDK\_PHP\_LOGGING' environment flag

`↳ universeDomain`

`string`  

The service domain for the client. Defaults to 'googleapis.com'.

### delete

Deletes the specified license.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::deleteAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__deleteAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.DeleteLicenseRequest)`  

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

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\DeleteLicenseRequest;
use Google\Rpc\Status;

/**
 * @param string $license Name of the license resource to delete.
 * @param string $project Project ID for this request.
 */
function delete_sample(string $license, string $project): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $request = (new DeleteLicenseRequest())
        ->setLicense($license)
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $licensesClient->delete($request);
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
    $license = '[LICENSE]';
    $project = '[PROJECT]';

    delete_sample($license, $project);
}
```

### get

Returns the specified License resource.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::getAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__getAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.GetLicenseRequest)`  

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

`[Google\Cloud\Compute\V1\License](/php/docs/reference/cloud-compute/latest/V1.License)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\GetLicenseRequest;
use Google\Cloud\Compute\V1\License;

/**
 * @param string $license Name of the License resource to return.
 * @param string $project Project ID for this request.
 */
function get_sample(string $license, string $project): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $request = (new GetLicenseRequest())
        ->setLicense($license)
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var License $response */
        $response = $licensesClient->get($request);
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
    $license = '[LICENSE]';
    $project = '[PROJECT]';

    get_sample($license, $project);
}
```

### getIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::getIamPolicyAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__getIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetIamPolicyLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.GetIamPolicyLicenseRequest)`  

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

`[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/latest/V1.Policy)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\GetIamPolicyLicenseRequest;
use Google\Cloud\Compute\V1\Policy;

/**
 * @param string $project  Project ID for this request.
 * @param string $resource Name or id of the resource for this request.
 */
function get_iam_policy_sample(string $project, string $resource): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $request = (new GetIamPolicyLicenseRequest())
        ->setProject($project)
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $licensesClient->getIamPolicy($request);
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
    $resource = '[RESOURCE]';

    get_iam_policy_sample($project, $resource);
}
```

### insert

Create a License resource in the specified project.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::insertAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__insertAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.InsertLicenseRequest)`  

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

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\InsertLicenseRequest;
use Google\Cloud\Compute\V1\License;
use Google\Rpc\Status;

/**
 * @param string $project Project ID for this request.
 */
function insert_sample(string $project): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $licenseResource = new License();
    $request = (new InsertLicenseRequest())
        ->setLicenseResource($licenseResource)
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $licensesClient->insert($request);
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

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud orwindows-cloud.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::listAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__listAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListLicensesRequest](/php/docs/reference/cloud-compute/latest/V1.ListLicensesRequest)`  

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
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\ListLicensesRequest;

/**
 * @param string $project Project ID for this request.
 */
function list_sample(string $project): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $request = (new ListLicensesRequest())
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $licensesClient->list($request);

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

### setIamPolicy

Sets the access control policy on the specified resource.

Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::setIamPolicyAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__setIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\SetIamPolicyLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.SetIamPolicyLicenseRequest)`  

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

`[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/latest/V1.Policy)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\GlobalSetPolicyRequest;
use Google\Cloud\Compute\V1\Policy;
use Google\Cloud\Compute\V1\SetIamPolicyLicenseRequest;

/**
 * @param string $project  Project ID for this request.
 * @param string $resource Name or id of the resource for this request.
 */
function set_iam_policy_sample(string $project, string $resource): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
    $request = (new SetIamPolicyLicenseRequest())
        ->setGlobalSetPolicyRequestResource($globalSetPolicyRequestResource)
        ->setProject($project)
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $licensesClient->setIamPolicy($request);
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
    $resource = '[RESOURCE]';

    set_iam_policy_sample($project, $resource);
}
```

### testIamPermissions

Returns permissions that a caller has on the specified resource.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::testIamPermissionsAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__testIamPermissionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\TestIamPermissionsLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.TestIamPermissionsLicenseRequest)`  

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

`[Google\Cloud\Compute\V1\TestPermissionsResponse](/php/docs/reference/cloud-compute/latest/V1.TestPermissionsResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\TestIamPermissionsLicenseRequest;
use Google\Cloud\Compute\V1\TestPermissionsRequest;
use Google\Cloud\Compute\V1\TestPermissionsResponse;

/**
 * @param string $project  Project ID for this request.
 * @param string $resource Name or id of the resource for this request.
 */
function test_iam_permissions_sample(string $project, string $resource): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $testPermissionsRequestResource = new TestPermissionsRequest();
    $request = (new TestIamPermissionsLicenseRequest())
        ->setProject($project)
        ->setResource($resource)
        ->setTestPermissionsRequestResource($testPermissionsRequestResource);

    // Call the API and handle any network failures.
    try {
        /** @var TestPermissionsResponse $response */
        $response = $licensesClient->testIamPermissions($request);
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
    $resource = '[RESOURCE]';

    test_iam_permissions_sample($project, $resource);
}
```

### update

Updates a License resource in the specified project.

_Caution_ This resource is intended for use only by third-party partners who are creatingCloud Marketplace images.

The async variant is [LicensesClient::updateAsync()](/php/docs/reference/cloud-compute/latest/V1.Client.LicensesClient#_Google_Cloud_Compute_V1_Client_LicensesClient__updateAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\UpdateLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.UpdateLicenseRequest)`  

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

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Compute\V1\Client\LicensesClient;
use Google\Cloud\Compute\V1\License;
use Google\Cloud\Compute\V1\UpdateLicenseRequest;
use Google\Rpc\Status;

/**
 * @param string $license The license name for this request.
 * @param string $project Project ID for this request.
 */
function update_sample(string $license, string $project): void
{
    // Create a client.
    $licensesClient = new LicensesClient();

    // Prepare the request message.
    $licenseResource = new License();
    $request = (new UpdateLicenseRequest())
        ->setLicense($license)
        ->setLicenseResource($licenseResource)
        ->setProject($project);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $licensesClient->update($request);
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
    $license = '[LICENSE]';
    $project = '[PROJECT]';

    update_sample($license, $project);
}
```

### deleteAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.DeleteLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.GetLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Compute\V1\License](/php/docs/reference/cloud-compute/latest/V1.License)>`

### getIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetIamPolicyLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.GetIamPolicyLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/latest/V1.Policy)>`

### insertAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.InsertLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### listAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListLicensesRequest](/php/docs/reference/cloud-compute/latest/V1.ListLicensesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### setIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\SetIamPolicyLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.SetIamPolicyLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/latest/V1.Policy)>`

### testIamPermissionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\TestIamPermissionsLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.TestIamPermissionsLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Compute\V1\TestPermissionsResponse](/php/docs/reference/cloud-compute/latest/V1.TestPermissionsResponse)>`

### updateAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\UpdateLicenseRequest](/php/docs/reference/cloud-compute/latest/V1.UpdateLicenseRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getOperationsClient

Return an GlobalOperationsClient object with the same endpoint as $this.

**Returns**

**Type**

**Description**

`[GlobalOperationsClient](/php/docs/reference/cloud-compute/latest/V1.Client.GlobalOperationsClient)`

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

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
