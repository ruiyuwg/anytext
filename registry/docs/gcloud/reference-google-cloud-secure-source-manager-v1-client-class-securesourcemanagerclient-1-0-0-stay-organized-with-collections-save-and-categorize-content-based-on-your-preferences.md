-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Secure Source Manager V1 Client - Class SecureSourceManagerClient (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

1.7.0 (latest) 1.6.3 1.5.0 1.4.1 1.3.3 1.2.0 1.1.0 1.0.0 0.2.5 0.1.0

Reference documentation and code samples for the Google Cloud Secure Source Manager V1 Client class SecureSourceManagerClient.

Service Description: Secure Source Manager API

Access Secure Source Manager instances, resources, and repositories.

This API is split across two servers: the Control Plane and the Data Plane.

Data Plane endpoints are hosted directly by your Secure Source Manager instance, so you must connect to your instance's API hostname to access them. The API hostname looks like the following:

https://\[instance-id\]-\[project-number\]-api.\[location\].sourcemanager.dev

For example,

[https://my-instance-702770452863-api.us-central1.sourcemanager.dev](https://my-instance-702770452863-api.us-central1.sourcemanager.dev)

Data Plane endpoints are denoted with **Host: Data Plane**.

All other endpoints are found in the normal Cloud API location, namely, `securcesourcemanager.googleapis.com`.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ SecureSourceManager \\ V1 \\ Client

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

### createInstance

Creates a new instance in a given project and location.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::createInstanceAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__createInstanceAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\CreateInstanceRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.CreateInstanceRequest)`  

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
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\CreateInstanceRequest;
use Google\Cloud\SecureSourceManager\V1\Instance;
use Google\Rpc\Status;

/**
 * @param string $formattedParent Value for parent. Please see
 *                                {@see SecureSourceManagerClient::locationName()} for help formatting this field.
 * @param string $instanceId      ID of the instance to be created.
 */
function create_instance_sample(string $formattedParent, string $instanceId): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $instance = new Instance();
    $request = (new CreateInstanceRequest())
        ->setParent($formattedParent)
        ->setInstanceId($instanceId)
        ->setInstance($instance);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $secureSourceManagerClient->createInstance($request);
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
    $formattedParent = SecureSourceManagerClient::locationName('[PROJECT]', '[LOCATION]');
    $instanceId = '[INSTANCE_ID]';

    create_instance_sample($formattedParent, $instanceId);
}
```

### createRepository

Creates a new repository in a given project and location.

**Host: Data Plane**

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::createRepositoryAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__createRepositoryAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\CreateRepositoryRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.CreateRepositoryRequest)`  

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
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\CreateRepositoryRequest;
use Google\Cloud\SecureSourceManager\V1\Repository;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The project in which to create the repository. Values are of the
 *                                form `projects/{project_number}/locations/{location_id}`
 *                                Please see {@see SecureSourceManagerClient::locationName()} for help formatting this field.
 * @param string $repositoryId    The ID to use for the repository, which will become the final
 *                                component of the repository's resource name. This value should be 4-63
 *                                characters, and valid characters are /[a-z][0-9]-/.
 */
function create_repository_sample(string $formattedParent, string $repositoryId): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $repository = new Repository();
    $request = (new CreateRepositoryRequest())
        ->setParent($formattedParent)
        ->setRepository($repository)
        ->setRepositoryId($repositoryId);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $secureSourceManagerClient->createRepository($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Repository $result */
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
    $formattedParent = SecureSourceManagerClient::locationName('[PROJECT]', '[LOCATION]');
    $repositoryId = '[REPOSITORY_ID]';

    create_repository_sample($formattedParent, $repositoryId);
}
```

### deleteInstance

Deletes a single instance.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::deleteInstanceAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__deleteInstanceAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\DeleteInstanceRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.DeleteInstanceRequest)`  

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
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\DeleteInstanceRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedName Name of the resource. Please see
 *                              {@see SecureSourceManagerClient::instanceName()} for help formatting this field.
 */
function delete_instance_sample(string $formattedName): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new DeleteInstanceRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $secureSourceManagerClient->deleteInstance($request);
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
    $formattedName = SecureSourceManagerClient::instanceName('[PROJECT]', '[LOCATION]', '[INSTANCE]');

    delete_instance_sample($formattedName);
}
```

### deleteRepository

Deletes a Repository.

**Host: Data Plane**

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::deleteRepositoryAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__deleteRepositoryAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\DeleteRepositoryRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.DeleteRepositoryRequest)`  

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
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\DeleteRepositoryRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedName Name of the repository to delete.
 *                              The format is
 *                              projects/{project_number}/locations/{location_id}/repositories/{repository_id}. Please see
 *                              {@see SecureSourceManagerClient::repositoryName()} for help formatting this field.
 */
function delete_repository_sample(string $formattedName): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new DeleteRepositoryRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $secureSourceManagerClient->deleteRepository($request);
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
    $formattedName = SecureSourceManagerClient::repositoryName(
        '[PROJECT]',
        '[LOCATION]',
        '[REPOSITORY]'
    );

    delete_repository_sample($formattedName);
}
```

### getIamPolicyRepo

Get IAM policy for a repository.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::getIamPolicyRepoAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__getIamPolicyRepoAsync__) .

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
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being requested.
 *                         See the operation documentation for the appropriate value for this field.
 */
function get_iam_policy_repo_sample(string $resource): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new GetIamPolicyRequest())
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $secureSourceManagerClient->getIamPolicyRepo($request);
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

    get_iam_policy_repo_sample($resource);
}
```

### getInstance

Gets details of a single instance.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::getInstanceAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__getInstanceAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\GetInstanceRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.GetInstanceRequest)`  

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

`[Google\Cloud\SecureSourceManager\V1\Instance](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Instance)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\GetInstanceRequest;
use Google\Cloud\SecureSourceManager\V1\Instance;

/**
 * @param string $formattedName Name of the resource. Please see
 *                              {@see SecureSourceManagerClient::instanceName()} for help formatting this field.
 */
function get_instance_sample(string $formattedName): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new GetInstanceRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Instance $response */
        $response = $secureSourceManagerClient->getInstance($request);
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
    $formattedName = SecureSourceManagerClient::instanceName('[PROJECT]', '[LOCATION]', '[INSTANCE]');

    get_instance_sample($formattedName);
}
```

### getRepository

Gets metadata of a repository.

**Host: Data Plane**

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::getRepositoryAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__getRepositoryAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\GetRepositoryRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.GetRepositoryRequest)`  

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

`[Google\Cloud\SecureSourceManager\V1\Repository](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Repository)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\GetRepositoryRequest;
use Google\Cloud\SecureSourceManager\V1\Repository;

/**
 * @param string $formattedName Name of the repository to retrieve.
 *                              The format is
 *                              `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. Please see
 *                              {@see SecureSourceManagerClient::repositoryName()} for help formatting this field.
 */
function get_repository_sample(string $formattedName): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new GetRepositoryRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Repository $response */
        $response = $secureSourceManagerClient->getRepository($request);
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
    $formattedName = SecureSourceManagerClient::repositoryName(
        '[PROJECT]',
        '[LOCATION]',
        '[REPOSITORY]'
    );

    get_repository_sample($formattedName);
}
```

### listInstances

Lists Instances in a given project and location.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::listInstancesAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__listInstancesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\ListInstancesRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.ListInstancesRequest)`  

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
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\Instance;
use Google\Cloud\SecureSourceManager\V1\ListInstancesRequest;

/**
 * @param string $formattedParent Parent value for ListInstancesRequest. Please see
 *                                {@see SecureSourceManagerClient::locationName()} for help formatting this field.
 */
function list_instances_sample(string $formattedParent): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new ListInstancesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $secureSourceManagerClient->listInstances($request);

        /** @var Instance $element */
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
    $formattedParent = SecureSourceManagerClient::locationName('[PROJECT]', '[LOCATION]');

    list_instances_sample($formattedParent);
}
```

### listRepositories

Lists Repositories in a given project and location.

**Host: Data Plane**

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::listRepositoriesAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__listRepositoriesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\ListRepositoriesRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.ListRepositoriesRequest)`  

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
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;
use Google\Cloud\SecureSourceManager\V1\ListRepositoriesRequest;
use Google\Cloud\SecureSourceManager\V1\Repository;

/**
 * @param string $formattedParent Parent value for ListRepositoriesRequest. Please see
 *                                {@see SecureSourceManagerClient::locationName()} for help formatting this field.
 */
function list_repositories_sample(string $formattedParent): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new ListRepositoriesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $secureSourceManagerClient->listRepositories($request);

        /** @var Repository $element */
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
    $formattedParent = SecureSourceManagerClient::locationName('[PROJECT]', '[LOCATION]');

    list_repositories_sample($formattedParent);
}
```

### setIamPolicyRepo

Set IAM policy on a repository.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::setIamPolicyRepoAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__setIamPolicyRepoAsync__) .

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
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being specified.
 *                         See the operation documentation for the appropriate value for this field.
 */
function set_iam_policy_repo_sample(string $resource): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $policy = new Policy();
    $request = (new SetIamPolicyRequest())
        ->setResource($resource)
        ->setPolicy($policy);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $secureSourceManagerClient->setIamPolicyRepo($request);
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

    set_iam_policy_repo_sample($resource);
}
```

### testIamPermissionsRepo

Test IAM permissions on a repository.

IAM permission checks are not required on this method.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::testIamPermissionsRepoAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__testIamPermissionsRepoAsync__) .

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
use Google\Cloud\Iam\V1\TestIamPermissionsRequest;
use Google\Cloud\Iam\V1\TestIamPermissionsResponse;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

/**
 * @param string $resource           REQUIRED: The resource for which the policy detail is being requested.
 *                                   See the operation documentation for the appropriate value for this field.
 * @param string $permissionsElement The set of permissions to check for the `resource`. Permissions with
 *                                   wildcards (such as '*' or 'storage.*') are not allowed. For more
 *                                   information see
 *                                   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
function test_iam_permissions_repo_sample(string $resource, string $permissionsElement): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $permissions = [$permissionsElement,];
    $request = (new TestIamPermissionsRequest())
        ->setResource($resource)
        ->setPermissions($permissions);

    // Call the API and handle any network failures.
    try {
        /** @var TestIamPermissionsResponse $response */
        $response = $secureSourceManagerClient->testIamPermissionsRepo($request);
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

    test_iam_permissions_repo_sample($resource, $permissionsElement);
}
```

### getIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::getIamPolicyAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__getIamPolicyAsync__) .

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
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being requested.
 *                         See the operation documentation for the appropriate value for this field.
 */
function get_iam_policy_sample(string $resource): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = (new GetIamPolicyRequest())
        ->setResource($resource);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $secureSourceManagerClient->getIamPolicy($request);
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

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::setIamPolicyAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__setIamPolicyAsync__) .

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
use Google\Cloud\Iam\V1\Policy;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being specified.
 *                         See the operation documentation for the appropriate value for this field.
 */
function set_iam_policy_sample(string $resource): void
{
    // Create a client.
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $policy = new Policy();
    $request = (new SetIamPolicyRequest())
        ->setResource($resource)
        ->setPolicy($policy);

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $secureSourceManagerClient->setIamPolicy($request);
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

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::testIamPermissionsAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__testIamPermissionsAsync__) .

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
use Google\Cloud\Iam\V1\TestIamPermissionsRequest;
use Google\Cloud\Iam\V1\TestIamPermissionsResponse;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

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
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $permissions = [$permissionsElement,];
    $request = (new TestIamPermissionsRequest())
        ->setResource($resource)
        ->setPermissions($permissions);

    // Call the API and handle any network failures.
    try {
        /** @var TestIamPermissionsResponse $response */
        $response = $secureSourceManagerClient->testIamPermissions($request);
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

### getLocation

Gets information about a location.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::getLocationAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__getLocationAsync__) .

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
use Google\Cloud\Location\GetLocationRequest;
use Google\Cloud\Location\Location;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

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
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = new GetLocationRequest();

    // Call the API and handle any network failures.
    try {
        /** @var Location $response */
        $response = $secureSourceManagerClient->getLocation($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### listLocations

Lists information about the supported locations for this service.

The async variant is [Google\\Cloud\\SecureSourceManager\\V1\\Client\\SecureSourceManagerClient::listLocationsAsync()](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.Client.SecureSourceManagerClient#_Google_Cloud_SecureSourceManager_V1_Client_SecureSourceManagerClient__listLocationsAsync__) .

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
use Google\Cloud\Location\ListLocationsRequest;
use Google\Cloud\Location\Location;
use Google\Cloud\SecureSourceManager\V1\Client\SecureSourceManagerClient;

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
    $secureSourceManagerClient = new SecureSourceManagerClient();

    // Prepare the request message.
    $request = new ListLocationsRequest();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $secureSourceManagerClient->listLocations($request);

        /** @var Location $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### createInstanceAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\CreateInstanceRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.CreateInstanceRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### createRepositoryAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\CreateRepositoryRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.CreateRepositoryRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### deleteInstanceAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\DeleteInstanceRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.DeleteInstanceRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### deleteRepositoryAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\DeleteRepositoryRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.DeleteRepositoryRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getIamPolicyRepoAsync

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

### getInstanceAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\GetInstanceRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.GetInstanceRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getRepositoryAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\GetRepositoryRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.GetRepositoryRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listInstancesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\ListInstancesRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.ListInstancesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listRepositoriesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\SecureSourceManager\V1\ListRepositoriesRequest](/php/docs/reference/cloud-securesourcemanager/1.0.0/V1.ListRepositoriesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### setIamPolicyRepoAsync

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

### testIamPermissionsRepoAsync

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

`[Google\ApiCore\OperationResponse](https://googleapis.github.io/gax-php#Google/ApiCore/OperationResponse)`

### static::cryptoKeyName

Formats a string containing the fully-qualified path to represent a crypto\_key resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`keyRing`

`string`  

`cryptoKey`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted crypto\_key resource.

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

### static::repositoryName

Formats a string containing the fully-qualified path to represent a repository resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`repository`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted repository resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   cryptoKey: projects/{project}/locations/{location}/keyRings/{key\_ring}/cryptoKeys/{crypto\_key}
-   instance: projects/{project}/locations/{location}/instances/{instance}
-   location: projects/{project}/locations/{location}
-   repository: projects/{project}/locations/{location}/repositories/{repository}

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
