-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc V1 Client - Class BatchControllerClient (3.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.14.0 (latest) 3.13.4 3.12.0 3.11.0 3.10.1 3.9.0 3.8.1 3.7.1 3.6.1 3.5.1 3.4.0 3.3.0 3.2.2 2.9.1 2.8.2 2.7.0 2.6.1 2.5.0 2.3.0 2.2.3 2.1.0 2.0.0

Reference documentation and code samples for the Google Cloud Dataproc V1 Client class BatchControllerClient.

Service Description: The BatchController provides methods to manage batch workloads.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ Dataproc \\ V1 \\ Client

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

### createBatch

Creates a batch workload that executes asynchronously.

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::createBatchAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__createBatchAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\CreateBatchRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.CreateBatchRequest)`  

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

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\Dataproc\V1\Batch;
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
use Google\Cloud\Dataproc\V1\CreateBatchRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource where this batch will be created. Please see
 *                                {@see BatchControllerClient::locationName()} for help formatting this field.
 */
function create_batch_sample(string $formattedParent): void
{
    // Create a client.
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $batch = new Batch();
    $request = (new CreateBatchRequest())
        ->setParent($formattedParent)
        ->setBatch($batch);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $batchControllerClient->createBatch($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Batch $result */
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
    $formattedParent = BatchControllerClient::locationName('[PROJECT]', '[LOCATION]');

    create_batch_sample($formattedParent);
}
```

### deleteBatch

Deletes the batch workload resource. If the batch is not in terminal state, the delete fails and the response returns `FAILED_PRECONDITION`.

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::deleteBatchAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__deleteBatchAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\DeleteBatchRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.DeleteBatchRequest)`  

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
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
use Google\Cloud\Dataproc\V1\DeleteBatchRequest;

/**
 * @param string $formattedName The fully qualified name of the batch to retrieve
 *                              in the format
 *                              "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID"
 *                              Please see {@see BatchControllerClient::batchName()} for help formatting this field.
 */
function delete_batch_sample(string $formattedName): void
{
    // Create a client.
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $request = (new DeleteBatchRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $batchControllerClient->deleteBatch($request);
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
    $formattedName = BatchControllerClient::batchName('[PROJECT]', '[LOCATION]', '[BATCH]');

    delete_batch_sample($formattedName);
}
```

### getBatch

Gets the batch workload resource representation.

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::getBatchAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__getBatchAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\GetBatchRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.GetBatchRequest)`  

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

`[Google\Cloud\Dataproc\V1\Batch](/php/docs/reference/cloud-dataproc/3.12.0/V1.Batch)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dataproc\V1\Batch;
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
use Google\Cloud\Dataproc\V1\GetBatchRequest;

/**
 * @param string $formattedName The fully qualified name of the batch to retrieve
 *                              in the format
 *                              "projects/PROJECT_ID/locations/DATAPROC_REGION/batches/BATCH_ID"
 *                              Please see {@see BatchControllerClient::batchName()} for help formatting this field.
 */
function get_batch_sample(string $formattedName): void
{
    // Create a client.
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $request = (new GetBatchRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Batch $response */
        $response = $batchControllerClient->getBatch($request);
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
    $formattedName = BatchControllerClient::batchName('[PROJECT]', '[LOCATION]', '[BATCH]');

    get_batch_sample($formattedName);
}
```

### listBatches

Lists batch workloads.

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::listBatchesAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__listBatchesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\ListBatchesRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.ListBatchesRequest)`  

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
use Google\Cloud\Dataproc\V1\Batch;
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
use Google\Cloud\Dataproc\V1\ListBatchesRequest;

/**
 * @param string $formattedParent The parent, which owns this collection of batches. Please see
 *                                {@see BatchControllerClient::locationName()} for help formatting this field.
 */
function list_batches_sample(string $formattedParent): void
{
    // Create a client.
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $request = (new ListBatchesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $batchControllerClient->listBatches($request);

        /** @var Batch $element */
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
    $formattedParent = BatchControllerClient::locationName('[PROJECT]', '[LOCATION]');

    list_batches_sample($formattedParent);
}
```

### getIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::getIamPolicyAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__getIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\GetIamPolicyRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/GetIamPolicyRequest)`  

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

`[Google\Cloud\Iam\V1\Policy](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/Policy)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\Policy;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being requested.
 *                         See the operation documentation for the appropriate value for this field.
 */
function get_iam_policy_sample(string $resource): void
{
    // Create a client.
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $request = (new GetIamPolicyRequest())
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $batchControllerClient->getIamPolicy($request);
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

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::setIamPolicyAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__setIamPolicyAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\SetIamPolicyRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/SetIamPolicyRequest)`  

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

`[Google\Cloud\Iam\V1\Policy](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/Policy)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being specified.
 *                         See the operation documentation for the appropriate value for this field.
 */
function set_iam_policy_sample(string $resource): void
{
    // Create a client.
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $policy = new Policy();
    $request = (new SetIamPolicyRequest())
        ->setResource($resource)
        ->setPolicy($policy);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $batchControllerClient->setIamPolicy($request);
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

The async variant is [Google\\Cloud\\Dataproc\\V1\\Client\\BatchControllerClient::testIamPermissionsAsync()](/php/docs/reference/cloud-dataproc/3.12.0/V1.Client.BatchControllerClient#_Google_Cloud_Dataproc_V1_Client_BatchControllerClient__testIamPermissionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\TestIamPermissionsRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/TestIamPermissionsRequest)`  

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

`[Google\Cloud\Iam\V1\TestIamPermissionsResponse](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/TestIamPermissionsResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dataproc\V1\Client\BatchControllerClient;
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
    $batchControllerClient = new BatchControllerClient();

    // Prepare the request message.
    $permissions = [$permissionsElement,];
    $request = (new TestIamPermissionsRequest())
        ->setResource($resource)
        ->setPermissions($permissions);

    // Call the API and handle any network failures.
    try {
        /** @var TestIamPermissionsResponse $response */
        $response = $batchControllerClient->testIamPermissions($request);
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

### createBatchAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\CreateBatchRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.CreateBatchRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### deleteBatchAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\DeleteBatchRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.DeleteBatchRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getBatchAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\GetBatchRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.GetBatchRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listBatchesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Dataproc\V1\ListBatchesRequest](/php/docs/reference/cloud-dataproc/3.12.0/V1.ListBatchesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\GetIamPolicyRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/GetIamPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### setIamPolicyAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\SetIamPolicyRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/SetIamPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### testIamPermissionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Iam\V1\TestIamPermissionsRequest](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/TestIamPermissionsRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getOperationsClient

Return an OperationsClient object with the same endpoint as $this.

**Returns**

**Type**

**Description**

`[Google\ApiCore\LongRunning\OperationsClient](https://googleapis.github.io/gax-php#Google/ApiCore/LongRunning/OperationsClient)`

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

### static::batchName

Formats a string containing the fully-qualified path to represent a batch resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`batch`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted batch resource.

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

### static::serviceName

Formats a string containing the fully-qualified path to represent a service resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`service`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted service resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   batch: projects/{project}/locations/{location}/batches/{batch}
-   location: projects/{project}/locations/{location}
-   service: projects/{project}/locations/{location}/services/{service}

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

Last updated 2026-03-19 UTC.
