-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Workflows V1 Client - Class WorkflowsClient (0.4.2) Stay organized with collections Save and categorize content based on your preferences.

1.3.0 (latest) 1.2.1 1.1.1 1.0.3 0.5.5 0.4.2 0.3.0 0.2.17

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Workflows V1 Client class WorkflowsClient.

Service Description: Workflows is used to deploy and execute workflow programs.

Workflows makes sure the program executes reliably, despite hardware and networking interruptions.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

This class is currently experimental and may be subject to changes.

## Namespace

Google \\ Cloud \\ Workflows \\ V1 \\ Client

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

### createWorkflow

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a [ALREADY\_EXISTS](https://googleapis.github.io/common-protos-php#ALREADY_EXISTS) error.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::createWorkflowAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__createWorkflowAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\CreateWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.CreateWorkflowRequest)`  

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
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;
use Google\Cloud\Workflows\V1\CreateWorkflowRequest;
use Google\Cloud\Workflows\V1\Workflow;
use Google\Rpc\Status;

/**
 * @param string $formattedParent Project and location in which the workflow should be created.
 *                                Format:  projects/{project}/locations/{location}
 *                                Please see {@see WorkflowsClient::locationName()} for help formatting this field.
 * @param string $workflowId      The ID of the workflow to be created. It has to fulfill the
 *                                following requirements:
 *
 *                                * Must contain only letters, numbers, underscores and hyphens.
 *                                * Must start with a letter.
 *                                * Must be between 1-64 characters.
 *                                * Must end with a number or a letter.
 *                                * Must be unique within the customer project and location.
 */
function create_workflow_sample(string $formattedParent, string $workflowId): void
{
    // Create a client.
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $workflow = new Workflow();
    $request = (new CreateWorkflowRequest())
        ->setParent($formattedParent)
        ->setWorkflow($workflow)
        ->setWorkflowId($workflowId);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $workflowsClient->createWorkflow($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Workflow $result */
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
    $formattedParent = WorkflowsClient::locationName('[PROJECT]', '[LOCATION]');
    $workflowId = '[WORKFLOW_ID]';

    create_workflow_sample($formattedParent, $workflowId);
}
```

### deleteWorkflow

Deletes a workflow with the specified name.

This method also cancels and deletes all running executions of the workflow.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::deleteWorkflowAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__deleteWorkflowAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\DeleteWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.DeleteWorkflowRequest)`  

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
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;
use Google\Cloud\Workflows\V1\DeleteWorkflowRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedName Name of the workflow to be deleted.
 *                              Format: projects/{project}/locations/{location}/workflows/{workflow}
 *                              Please see {@see WorkflowsClient::workflowName()} for help formatting this field.
 */
function delete_workflow_sample(string $formattedName): void
{
    // Create a client.
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $request = (new DeleteWorkflowRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $workflowsClient->deleteWorkflow($request);
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
    $formattedName = WorkflowsClient::workflowName('[PROJECT]', '[LOCATION]', '[WORKFLOW]');

    delete_workflow_sample($formattedName);
}
```

### getWorkflow

Gets details of a single workflow.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::getWorkflowAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__getWorkflowAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\GetWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.GetWorkflowRequest)`  

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

`[Google\Cloud\Workflows\V1\Workflow](/php/docs/reference/cloud-workflows/0.4.2/V1.Workflow)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;
use Google\Cloud\Workflows\V1\GetWorkflowRequest;
use Google\Cloud\Workflows\V1\Workflow;

/**
 * @param string $formattedName Name of the workflow for which information should be retrieved.
 *                              Format: projects/{project}/locations/{location}/workflows/{workflow}
 *                              Please see {@see WorkflowsClient::workflowName()} for help formatting this field.
 */
function get_workflow_sample(string $formattedName): void
{
    // Create a client.
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $request = (new GetWorkflowRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Workflow $response */
        $response = $workflowsClient->getWorkflow($request);
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
    $formattedName = WorkflowsClient::workflowName('[PROJECT]', '[LOCATION]', '[WORKFLOW]');

    get_workflow_sample($formattedName);
}
```

### listWorkflows

Lists workflows in a given project and location.

The default order is not specified.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::listWorkflowsAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__listWorkflowsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\ListWorkflowsRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.ListWorkflowsRequest)`  

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
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;
use Google\Cloud\Workflows\V1\ListWorkflowsRequest;
use Google\Cloud\Workflows\V1\Workflow;

/**
 * @param string $formattedParent Project and location from which the workflows should be listed.
 *                                Format: projects/{project}/locations/{location}
 *                                Please see {@see WorkflowsClient::locationName()} for help formatting this field.
 */
function list_workflows_sample(string $formattedParent): void
{
    // Create a client.
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $request = (new ListWorkflowsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $workflowsClient->listWorkflows($request);

        /** @var Workflow $element */
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
    $formattedParent = WorkflowsClient::locationName('[PROJECT]', '[LOCATION]');

    list_workflows_sample($formattedParent);
}
```

### updateWorkflow

Updates an existing workflow.

Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::updateWorkflowAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__updateWorkflowAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\UpdateWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.UpdateWorkflowRequest)`  

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
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;
use Google\Cloud\Workflows\V1\UpdateWorkflowRequest;
use Google\Cloud\Workflows\V1\Workflow;
use Google\Rpc\Status;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_workflow_sample(): void
{
    // Create a client.
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $workflow = new Workflow();
    $request = (new UpdateWorkflowRequest())
        ->setWorkflow($workflow);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $workflowsClient->updateWorkflow($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Workflow $result */
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
```

### getLocation

Gets information about a location.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::getLocationAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__getLocationAsync__) .

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
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;

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
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $request = new GetLocationRequest();

    // Call the API and handle any network failures.
    try {
        /** @var Location $response */
        $response = $workflowsClient->getLocation($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### listLocations

Lists information about the supported locations for this service.

The async variant is [Google\\Cloud\\Workflows\\V1\\Client\\WorkflowsClient::listLocationsAsync()](/php/docs/reference/cloud-workflows/0.4.2/V1.Client.WorkflowsClient#_Google_Cloud_Workflows_V1_Client_WorkflowsClient__listLocationsAsync__) .

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
use Google\Cloud\Workflows\V1\Client\WorkflowsClient;

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
    $workflowsClient = new WorkflowsClient();

    // Prepare the request message.
    $request = new ListLocationsRequest();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $workflowsClient->listLocations($request);

        /** @var Location $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### createWorkflowAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\CreateWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.CreateWorkflowRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### deleteWorkflowAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\DeleteWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.DeleteWorkflowRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getWorkflowAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\GetWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.GetWorkflowRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listWorkflowsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\ListWorkflowsRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.ListWorkflowsRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### updateWorkflowAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Workflows\V1\UpdateWorkflowRequest](/php/docs/reference/cloud-workflows/0.4.2/V1.UpdateWorkflowRequest)`  

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

### static::workflowName

Formats a string containing the fully-qualified path to represent a workflow resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`workflow`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted workflow resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   cryptoKey: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}
-   location: projects/{project}/locations/{location}
-   workflow: projects/{project}/locations/{location}/workflows/{workflow}

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
