-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Apigee Registry V1 Client - Class ProvisioningClient (1.1.3) Stay organized with collections Save and categorize content based on your preferences.

1.1.3 (latest) 1.1.2 1.0.4 0.5.5 0.4.2 0.3.2 0.2.7

Reference documentation and code samples for the Google Cloud Apigee Registry V1 Client class ProvisioningClient.

Service Description: The service that is used for managing the data plane provisioning of the Registry.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ ApigeeRegistry \\ V1 \\ Client

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

This option should only be used with a pre-constructed Google\\Auth\\FetchAuthTokenInterface or [Google\\ApiCore\\CredentialsWrapper](https://docs.cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored. **Important**: If you are providing a path to a credentials file, or a decoded credentials file as a PHP array, this usage is now DEPRECATED. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. It is recommended to create the credentials explicitly `use Google\Auth\Credentials\ServiceAccountCredentials; use Google\Cloud\ApigeeRegistry\V1\ProvisioningClient; $creds = new ServiceAccountCredentials($scopes, $json); $options = new ProvisioningClient(['credentials' => $creds]);` [https://cloud.google.com/docs/authentication/external/externally-sourced-credentials](https://cloud.google.com/docs/authentication/external/externally-sourced-credentials)

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

### createInstance

Provisions instance resources for the Registry.

The async variant is [ProvisioningClient::createInstanceAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__createInstanceAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ApigeeRegistry\V1\CreateInstanceRequest](/php/docs/reference/cloud-apigee-registry/latest/V1.CreateInstanceRequest)`  

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

`[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)<[Google\Cloud\ApigeeRegistry\V1\Instance](/php/docs/reference/cloud-apigee-registry/latest/V1.Instance)>`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
use Google\Cloud\ApigeeRegistry\V1\CreateInstanceRequest;
use Google\Cloud\ApigeeRegistry\V1\Instance;
use Google\Cloud\ApigeeRegistry\V1\Instance\Config;
use Google\Rpc\Status;

/**
 * @param string $formattedParent           Parent resource of the Instance, of the form: `projects/&#42;/locations/*`
 *                                          Please see {@see ProvisioningClient::locationName()} for help formatting this field.
 * @param string $instanceId                Identifier to assign to the Instance. Must be unique within scope of the
 *                                          parent resource.
 * @param string $instanceConfigCmekKeyName The Customer Managed Encryption Key (CMEK) used for data encryption.
 *                                          The CMEK name should follow the format of
 *                                          `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`,
 *                                          where the `location` must match InstanceConfig.location.
 */
function create_instance_sample(
    string $formattedParent,
    string $instanceId,
    string $instanceConfigCmekKeyName
): void {
    // Create a client.
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $instanceConfig = (new Config())
        ->setCmekKeyName($instanceConfigCmekKeyName);
    $instance = (new Instance())
        ->setConfig($instanceConfig);
    $request = (new CreateInstanceRequest())
        ->setParent($formattedParent)
        ->setInstanceId($instanceId)
        ->setInstance($instance);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $provisioningClient->createInstance($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Instance $result */
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
    $formattedParent = ProvisioningClient::locationName('[PROJECT]', '[LOCATION]');
    $instanceId = '[INSTANCE_ID]';
    $instanceConfigCmekKeyName = '[CMEK_KEY_NAME]';

    create_instance_sample($formattedParent, $instanceId, $instanceConfigCmekKeyName);
}
```

### deleteInstance

Deletes the Registry instance.

The async variant is [ProvisioningClient::deleteInstanceAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__deleteInstanceAsync__) .

**Parameters**

**Name**

**Description**

`request`

`Google\Cloud\ApigeeRegistry\V1\DeleteInstanceRequest`  

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
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
use Google\Cloud\ApigeeRegistry\V1\DeleteInstanceRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedName The name of the Instance to delete.
 *                              Format: `projects/&#42;/locations/&#42;/instances/*`. Please see
 *                              {@see ProvisioningClient::instanceName()} for help formatting this field.
 */
function delete_instance_sample(string $formattedName): void
{
    // Create a client.
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $request = (new DeleteInstanceRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $provisioningClient->deleteInstance($request);
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
    $formattedName = ProvisioningClient::instanceName('[PROJECT]', '[LOCATION]', '[INSTANCE]');

    delete_instance_sample($formattedName);
}
```

### getInstance

Gets details of a single Instance.

The async variant is [ProvisioningClient::getInstanceAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__getInstanceAsync__) .

**Parameters**

**Name**

**Description**

`request`

`Google\Cloud\ApigeeRegistry\V1\GetInstanceRequest`  

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

`[Google\Cloud\ApigeeRegistry\V1\Instance](/php/docs/reference/cloud-apigee-registry/latest/V1.Instance)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
use Google\Cloud\ApigeeRegistry\V1\GetInstanceRequest;
use Google\Cloud\ApigeeRegistry\V1\Instance;

/**
 * @param string $formattedName The name of the Instance to retrieve.
 *                              Format: `projects/&#42;/locations/&#42;/instances/*`. Please see
 *                              {@see ProvisioningClient::instanceName()} for help formatting this field.
 */
function get_instance_sample(string $formattedName): void
{
    // Create a client.
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $request = (new GetInstanceRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Instance $response */
        $response = $provisioningClient->getInstance($request);
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
    $formattedName = ProvisioningClient::instanceName('[PROJECT]', '[LOCATION]', '[INSTANCE]');

    get_instance_sample($formattedName);
}
```

### getLocation

Gets information about a location.

The async variant is [ProvisioningClient::getLocationAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__getLocationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\GetLocationRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.GetLocationRequest.html)`  

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

`[Google\Cloud\Location\Location](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.Location.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
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
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $request = new GetLocationRequest();

    // Call the API and handle any network failures.
    try {
        /** @var Location $response */
        $response = $provisioningClient->getLocation($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### listLocations

Lists information about the supported locations for this service.

The async variant is [ProvisioningClient::listLocationsAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__listLocationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\ListLocationsRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.ListLocationsRequest.html)`  

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
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
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
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $request = new ListLocationsRequest();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $provisioningClient->listLocations($request);

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

The async variant is [ProvisioningClient::getIamPolicyAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__getIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\GetIamPolicyRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.GetIamPolicyRequest.html)`  

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

`[Google\Cloud\Iam\V1\Policy](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\Policy;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being requested.
 *                         See the operation documentation for the appropriate value for this field.
 */
function get_iam_policy_sample(string $resource): void
{
    // Create a client.
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $request = (new GetIamPolicyRequest())
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $provisioningClient->getIamPolicy($request);
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

The async variant is [ProvisioningClient::setIamPolicyAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__setIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\SetIamPolicyRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.SetIamPolicyRequest.html)`  

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

`[Google\Cloud\Iam\V1\Policy](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being specified.
 *                         See the operation documentation for the appropriate value for this field.
 */
function set_iam_policy_sample(string $resource): void
{
    // Create a client.
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $policy = new Policy();
    $request = (new SetIamPolicyRequest())
        ->setResource($resource)
        ->setPolicy($policy);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $provisioningClient->setIamPolicy($request);
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

The async variant is [ProvisioningClient::testIamPermissionsAsync()](/php/docs/reference/cloud-apigee-registry/latest/V1.Client.ProvisioningClient#_Google_Cloud_ApigeeRegistry_V1_Client_ProvisioningClient__testIamPermissionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\TestIamPermissionsRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

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

`[Google\Cloud\Iam\V1\TestIamPermissionsResponse](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ApigeeRegistry\V1\Client\ProvisioningClient;
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
    $provisioningClient = new ProvisioningClient();

    // Prepare the request message.
    $permissions = [$permissionsElement,];
    $request = (new TestIamPermissionsRequest())
        ->setResource($resource)
        ->setPermissions($permissions);

    // Call the API and handle any network failures.
    try {
        /** @var TestIamPermissionsResponse $response */
        $response = $provisioningClient->testIamPermissions($request);
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

### createInstanceAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ApigeeRegistry\V1\CreateInstanceRequest](/php/docs/reference/cloud-apigee-registry/latest/V1.CreateInstanceRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### deleteInstanceAsync

**Parameters**

**Name**

**Description**

`request`

`Google\Cloud\ApigeeRegistry\V1\DeleteInstanceRequest`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getInstanceAsync

**Parameters**

**Name**

**Description**

`request`

`Google\Cloud\ApigeeRegistry\V1\GetInstanceRequest`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ApigeeRegistry\V1\Instance](/php/docs/reference/cloud-apigee-registry/latest/V1.Instance)>`

### getLocationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\GetLocationRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.GetLocationRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Location\Location](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.Location.html)>`

### listLocationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Location\ListLocationsRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Location.ListLocationsRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://docs.cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### getIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\GetIamPolicyRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.GetIamPolicyRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Iam\V1\Policy](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)>`

### setIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\SetIamPolicyRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.SetIamPolicyRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Iam\V1\Policy](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)>`

### testIamPermissionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\TestIamPermissionsRequest](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsRequest.html)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\Iam\V1\TestIamPermissionsResponse](https://docs.cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.TestIamPermissionsResponse.html)>`

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

### static::instanceName

Formats a string containing the fully-qualified path to represent a instance resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`instance`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted instance resource.

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

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   instance: projects/{project}/locations/{location}/instances/{instance}
-   location: projects/{project}/locations/{location}

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
