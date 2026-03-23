-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Contact Center Insights V1 Client - Class ContactCenterInsightsClient (2.2.1) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.3 2.2.1 2.1.1 2.0.1 1.9.5 1.8.0 1.7.1 1.6.2 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.3

Reference documentation and code samples for the Google Cloud Contact Center Insights V1 Client class ContactCenterInsightsClient.

Service Description: An API that lets users analyze and explore their business conversation data.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ ContactCenterInsights \\ V1 \\ Client

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

The credentials to be used by the client to authorize API calls. This option accepts either a path to a credentials file, or a decoded credentials file as a PHP array. _Advanced usage_: In addition, this option can also accept a pre-constructed [Google\\Auth\\FetchAuthTokenInterface](https://googleapis.github.io/google-auth-library-php/main/Google/Auth/FetchAuthTokenInterface) object or [Google\\ApiCore\\CredentialsWrapper](https://cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html) object. Note that when one of these objects are provided, any settings in $credentialsConfig will be ignored.

`↳ credentialsConfig`

`array`  

Options used to configure credentials, including auth token caching, for the client. For a full list of supporting configuration options, see [Google\\ApiCore\\CredentialsWrapper::build()](https://cloud.google.com/php/docs/reference/gax/latest/CredentialsWrapper.html#_Google_ApiCore_CredentialsWrapper__build__) .

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

Configuration options that will be used to construct the transport. Options for each supported transport type should be passed in a key for that transport. For example: $transportConfig = \[ 'grpc' => \[...\], 'rest' => \[...\], \]; See the [Google\\ApiCore\\Transport\\GrpcTransport::build()](https://cloud.google.com/php/docs/reference/gax/latest/Transport.GrpcTransport.html#_Google_ApiCore_Transport_GrpcTransport__build__) and [Google\\ApiCore\\Transport\\RestTransport::build()](https://cloud.google.com/php/docs/reference/gax/latest/Transport.RestTransport.html#_Google_ApiCore_Transport_RestTransport__build__) methods for the supported options.

`↳ clientCertSource`

`callable`  

A callable which returns the client cert as a string. This can be used to provide a certificate and private key to the transport layer for mTLS.

`↳ logger`

`false|LoggerInterface`  

A PSR-3 compliant logger. If set to false, logging is disabled, ignoring the 'GOOGLE\_SDK\_PHP\_LOGGING' environment flag

### bulkAnalyzeConversations

Analyzes multiple conversations in a single request.

The async variant is [ContactCenterInsightsClient::bulkAnalyzeConversationsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__bulkAnalyzeConversationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkAnalyzeConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkAnalyzeConversationsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\BulkAnalyzeConversationsRequest;
use Google\Cloud\ContactCenterInsights\V1\BulkAnalyzeConversationsResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Rpc\Status;

/**
 * @param string $formattedParent    The parent resource to create analyses in. Please see
 *                                   {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 * @param string $filter             Filter used to select the subset of conversations to analyze.
 * @param float  $analysisPercentage Percentage of selected conversation to analyze, between
 *                                   [0, 100].
 */
function bulk_analyze_conversations_sample(
    string $formattedParent,
    string $filter,
    float $analysisPercentage
): void {
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new BulkAnalyzeConversationsRequest())
        ->setParent($formattedParent)
        ->setFilter($filter)
        ->setAnalysisPercentage($analysisPercentage);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->bulkAnalyzeConversations($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var BulkAnalyzeConversationsResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');
    $filter = '[FILTER]';
    $analysisPercentage = 0.0;

    bulk_analyze_conversations_sample($formattedParent, $filter, $analysisPercentage);
}
```

### bulkDeleteConversations

Deletes multiple conversations in a single request.

The async variant is [ContactCenterInsightsClient::bulkDeleteConversationsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__bulkDeleteConversationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkDeleteConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkDeleteConversationsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\BulkDeleteConversationsRequest;
use Google\Cloud\ContactCenterInsights\V1\BulkDeleteConversationsResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource to delete conversations from.
 *                                Format:
 *                                projects/{project}/locations/{location}
 *                                Please see {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function bulk_delete_conversations_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new BulkDeleteConversationsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->bulkDeleteConversations($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var BulkDeleteConversationsResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    bulk_delete_conversations_sample($formattedParent);
}
```

### bulkDownloadFeedbackLabels

Download feedback labels in bulk.

The async variant is [ContactCenterInsightsClient::bulkDownloadFeedbackLabelsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__bulkDownloadFeedbackLabelsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkDownloadFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkDownloadFeedbackLabelsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\BulkDownloadFeedbackLabelsRequest;
use Google\Cloud\ContactCenterInsights\V1\BulkDownloadFeedbackLabelsResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource for new feedback labels. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function bulk_download_feedback_labels_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new BulkDownloadFeedbackLabelsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->bulkDownloadFeedbackLabels($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var BulkDownloadFeedbackLabelsResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    bulk_download_feedback_labels_sample($formattedParent);
}
```

### bulkUploadFeedbackLabels

Upload feedback labels in bulk.

The async variant is [ContactCenterInsightsClient::bulkUploadFeedbackLabelsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__bulkUploadFeedbackLabelsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkUploadFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkUploadFeedbackLabelsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\BulkUploadFeedbackLabelsRequest;
use Google\Cloud\ContactCenterInsights\V1\BulkUploadFeedbackLabelsResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource for new feedback labels. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function bulk_upload_feedback_labels_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new BulkUploadFeedbackLabelsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->bulkUploadFeedbackLabels($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var BulkUploadFeedbackLabelsResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    bulk_upload_feedback_labels_sample($formattedParent);
}
```

### calculateIssueModelStats

Gets an issue model's statistics.

The async variant is [ContactCenterInsightsClient::calculateIssueModelStatsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__calculateIssueModelStatsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CalculateIssueModelStatsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateIssueModelStatsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\CalculateIssueModelStatsResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateIssueModelStatsResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\CalculateIssueModelStatsRequest;
use Google\Cloud\ContactCenterInsights\V1\CalculateIssueModelStatsResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;

/**
 * @param string $formattedIssueModel The resource name of the issue model to query against. Please see
 *                                    {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function calculate_issue_model_stats_sample(string $formattedIssueModel): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new CalculateIssueModelStatsRequest())
        ->setIssueModel($formattedIssueModel);

    // Call the API and handle any network failures.
    try {
        /** @var CalculateIssueModelStatsResponse $response */
        $response = $contactCenterInsightsClient->calculateIssueModelStats($request);
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
    $formattedIssueModel = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    calculate_issue_model_stats_sample($formattedIssueModel);
}
```

### calculateStats

Gets conversation statistics.

The async variant is [ContactCenterInsightsClient::calculateStatsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__calculateStatsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CalculateStatsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateStatsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\CalculateStatsResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateStatsResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\CalculateStatsRequest;
use Google\Cloud\ContactCenterInsights\V1\CalculateStatsResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;

/**
 * @param string $formattedLocation The location of the conversations. Please see
 *                                  {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function calculate_stats_sample(string $formattedLocation): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new CalculateStatsRequest())
        ->setLocation($formattedLocation);

    // Call the API and handle any network failures.
    try {
        /** @var CalculateStatsResponse $response */
        $response = $contactCenterInsightsClient->calculateStats($request);
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
    $formattedLocation = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    calculate_stats_sample($formattedLocation);
}
```

### createAnalysis

Creates an analysis. The long running operation is done when the analysis has completed.

The async variant is [ContactCenterInsightsClient::createAnalysisAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createAnalysisAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateAnalysisRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateAnalysisRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Analysis;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateAnalysisRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource of the analysis. Please see
 *                                {@see ContactCenterInsightsClient::conversationName()} for help formatting this field.
 */
function create_analysis_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $analysis = new Analysis();
    $request = (new CreateAnalysisRequest())
        ->setParent($formattedParent)
        ->setAnalysis($analysis);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->createAnalysis($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Analysis $result */
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
    $formattedParent = ContactCenterInsightsClient::conversationName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]'
    );

    create_analysis_sample($formattedParent);
}
```

### createAnalysisRule

Creates a analysis rule.

The async variant is [ContactCenterInsightsClient::createAnalysisRuleAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createAnalysisRuleAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateAnalysisRuleRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\AnalysisRule](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.AnalysisRule)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\AnalysisRule;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateAnalysisRuleRequest;

/**
 * @param string $formattedParent The parent resource of the analysis rule. Required. The location
 *                                to create a analysis rule for. Format: `projects/<Project
 *                                ID>/locations/<Location ID>` or `projects/<Project
 *                                Number>/locations/<Location ID>`
 *                                Please see {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function create_analysis_rule_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $analysisRule = new AnalysisRule();
    $request = (new CreateAnalysisRuleRequest())
        ->setParent($formattedParent)
        ->setAnalysisRule($analysisRule);

    // Call the API and handle any network failures.
    try {
        /** @var AnalysisRule $response */
        $response = $contactCenterInsightsClient->createAnalysisRule($request);
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    create_analysis_rule_sample($formattedParent);
}
```

### createConversation

Creates a conversation.

Note that this method does not support audio transcription or redaction. Use `conversations.upload` instead.

The async variant is [ContactCenterInsightsClient::createConversationAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createConversationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateConversationRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Conversation](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Conversation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Conversation;
use Google\Cloud\ContactCenterInsights\V1\CreateConversationRequest;

/**
 * @param string $formattedParent The parent resource of the conversation. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function create_conversation_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $conversation = new Conversation();
    $request = (new CreateConversationRequest())
        ->setParent($formattedParent)
        ->setConversation($conversation);

    // Call the API and handle any network failures.
    try {
        /** @var Conversation $response */
        $response = $contactCenterInsightsClient->createConversation($request);
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    create_conversation_sample($formattedParent);
}
```

### createFeedbackLabel

Create feedback label.

The async variant is [ContactCenterInsightsClient::createFeedbackLabelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createFeedbackLabelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateFeedbackLabelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\FeedbackLabel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.FeedbackLabel)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateFeedbackLabelRequest;
use Google\Cloud\ContactCenterInsights\V1\FeedbackLabel;

/**
 * @param string $formattedParent The parent resource of the feedback label. Please see
 *                                {@see ContactCenterInsightsClient::conversationName()} for help formatting this field.
 */
function create_feedback_label_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $feedbackLabel = new FeedbackLabel();
    $request = (new CreateFeedbackLabelRequest())
        ->setParent($formattedParent)
        ->setFeedbackLabel($feedbackLabel);

    // Call the API and handle any network failures.
    try {
        /** @var FeedbackLabel $response */
        $response = $contactCenterInsightsClient->createFeedbackLabel($request);
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
    $formattedParent = ContactCenterInsightsClient::conversationName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]'
    );

    create_feedback_label_sample($formattedParent);
}
```

### createIssueModel

Creates an issue model.

The async variant is [ContactCenterInsightsClient::createIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateIssueModelRequest;
use Google\Cloud\ContactCenterInsights\V1\IssueModel;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource of the issue model. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function create_issue_model_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $issueModel = new IssueModel();
    $request = (new CreateIssueModelRequest())
        ->setParent($formattedParent)
        ->setIssueModel($issueModel);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->createIssueModel($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var IssueModel $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    create_issue_model_sample($formattedParent);
}
```

### createPhraseMatcher

Creates a phrase matcher.

The async variant is [ContactCenterInsightsClient::createPhraseMatcherAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createPhraseMatcherAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreatePhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreatePhraseMatcherRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\PhraseMatcher](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.PhraseMatcher)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreatePhraseMatcherRequest;
use Google\Cloud\ContactCenterInsights\V1\PhraseMatcher;
use Google\Cloud\ContactCenterInsights\V1\PhraseMatcher\PhraseMatcherType;

/**
 * @param string $formattedParent   The parent resource of the phrase matcher. Required. The location
 *                                  to create a phrase matcher for. Format: `projects/<Project
 *                                  ID>/locations/<Location ID>` or `projects/<Project
 *                                  Number>/locations/<Location ID>`
 *                                  Please see {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 * @param int    $phraseMatcherType The type of this phrase matcher.
 */
function create_phrase_matcher_sample(string $formattedParent, int $phraseMatcherType): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $phraseMatcher = (new PhraseMatcher())
        ->setType($phraseMatcherType);
    $request = (new CreatePhraseMatcherRequest())
        ->setParent($formattedParent)
        ->setPhraseMatcher($phraseMatcher);

    // Call the API and handle any network failures.
    try {
        /** @var PhraseMatcher $response */
        $response = $contactCenterInsightsClient->createPhraseMatcher($request);
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');
    $phraseMatcherType = PhraseMatcherType::PHRASE_MATCHER_TYPE_UNSPECIFIED;

    create_phrase_matcher_sample($formattedParent, $phraseMatcherType);
}
```

### createQaQuestion

Create a QaQuestion.

The async variant is [ContactCenterInsightsClient::createQaQuestionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createQaQuestionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateQaQuestionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaQuestion](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaQuestion)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateQaQuestionRequest;
use Google\Cloud\ContactCenterInsights\V1\QaQuestion;

/**
 * @param string $formattedParent The parent resource of the QaQuestion. Please see
 *                                {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 */
function create_qa_question_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $qaQuestion = new QaQuestion();
    $request = (new CreateQaQuestionRequest())
        ->setParent($formattedParent)
        ->setQaQuestion($qaQuestion);

    // Call the API and handle any network failures.
    try {
        /** @var QaQuestion $response */
        $response = $contactCenterInsightsClient->createQaQuestion($request);
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
    $formattedParent = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );

    create_qa_question_sample($formattedParent);
}
```

### createQaScorecard

Create a QaScorecard.

The async variant is [ContactCenterInsightsClient::createQaScorecardAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createQaScorecardAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateQaScorecardRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecard](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecard)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateQaScorecardRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecard;

/**
 * @param string $formattedParent The parent resource of the QaScorecard. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function create_qa_scorecard_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $qaScorecard = new QaScorecard();
    $request = (new CreateQaScorecardRequest())
        ->setParent($formattedParent)
        ->setQaScorecard($qaScorecard);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecard $response */
        $response = $contactCenterInsightsClient->createQaScorecard($request);
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    create_qa_scorecard_sample($formattedParent);
}
```

### createQaScorecardRevision

Creates a QaScorecardRevision.

The async variant is [ContactCenterInsightsClient::createQaScorecardRevisionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createQaScorecardRevisionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateQaScorecardRevisionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateQaScorecardRevisionRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision;

/**
 * @param string $formattedParent The parent resource of the QaScorecardRevision. Please see
 *                                {@see ContactCenterInsightsClient::qaScorecardName()} for help formatting this field.
 */
function create_qa_scorecard_revision_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $qaScorecardRevision = new QaScorecardRevision();
    $request = (new CreateQaScorecardRevisionRequest())
        ->setParent($formattedParent)
        ->setQaScorecardRevision($qaScorecardRevision);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecardRevision $response */
        $response = $contactCenterInsightsClient->createQaScorecardRevision($request);
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
    $formattedParent = ContactCenterInsightsClient::qaScorecardName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]'
    );

    create_qa_scorecard_revision_sample($formattedParent);
}
```

### createView

Creates a view.

The async variant is [ContactCenterInsightsClient::createViewAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__createViewAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateViewRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\View](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.View)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\CreateViewRequest;
use Google\Cloud\ContactCenterInsights\V1\View;

/**
 * @param string $formattedParent The parent resource of the view. Required. The location to create
 *                                a view for.
 *                                Format: `projects/<Project ID>/locations/<Location ID>` or
 *                                `projects/<Project Number>/locations/<Location ID>`
 *                                Please see {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function create_view_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $view = new View();
    $request = (new CreateViewRequest())
        ->setParent($formattedParent)
        ->setView($view);

    // Call the API and handle any network failures.
    try {
        /** @var View $response */
        $response = $contactCenterInsightsClient->createView($request);
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    create_view_sample($formattedParent);
}
```

### deleteAnalysis

Deletes an analysis.

The async variant is [ContactCenterInsightsClient::deleteAnalysisAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteAnalysisAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteAnalysisRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteAnalysisRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteAnalysisRequest;

/**
 * @param string $formattedName The name of the analysis to delete. Please see
 *                              {@see ContactCenterInsightsClient::analysisName()} for help formatting this field.
 */
function delete_analysis_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteAnalysisRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteAnalysis($request);
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
    $formattedName = ContactCenterInsightsClient::analysisName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]',
        '[ANALYSIS]'
    );

    delete_analysis_sample($formattedName);
}
```

### deleteAnalysisRule

Deletes a analysis rule.

The async variant is [ContactCenterInsightsClient::deleteAnalysisRuleAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteAnalysisRuleAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteAnalysisRuleRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteAnalysisRuleRequest;

/**
 * @param string $formattedName The name of the analysis rule to delete. Please see
 *                              {@see ContactCenterInsightsClient::analysisRuleName()} for help formatting this field.
 */
function delete_analysis_rule_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteAnalysisRuleRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteAnalysisRule($request);
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
    $formattedName = ContactCenterInsightsClient::analysisRuleName(
        '[PROJECT]',
        '[LOCATION]',
        '[ANALYSIS_RULE]'
    );

    delete_analysis_rule_sample($formattedName);
}
```

### deleteConversation

Deletes a conversation.

The async variant is [ContactCenterInsightsClient::deleteConversationAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteConversationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteConversationRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteConversationRequest;

/**
 * @param string $formattedName The name of the conversation to delete. Please see
 *                              {@see ContactCenterInsightsClient::conversationName()} for help formatting this field.
 */
function delete_conversation_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteConversationRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteConversation($request);
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
    $formattedName = ContactCenterInsightsClient::conversationName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]'
    );

    delete_conversation_sample($formattedName);
}
```

### deleteFeedbackLabel

Delete feedback label.

The async variant is [ContactCenterInsightsClient::deleteFeedbackLabelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteFeedbackLabelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteFeedbackLabelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteFeedbackLabelRequest;

/**
 * @param string $formattedName The name of the feedback label to delete. Please see
 *                              {@see ContactCenterInsightsClient::feedbackLabelName()} for help formatting this field.
 */
function delete_feedback_label_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteFeedbackLabelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteFeedbackLabel($request);
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
    $formattedName = ContactCenterInsightsClient::feedbackLabelName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]',
        '[FEEDBACK_LABEL]'
    );

    delete_feedback_label_sample($formattedName);
}
```

### deleteIssue

Deletes an issue.

The async variant is [ContactCenterInsightsClient::deleteIssueAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteIssueAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteIssueRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteIssueRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteIssueRequest;

/**
 * @param string $formattedName The name of the issue to delete. Please see
 *                              {@see ContactCenterInsightsClient::issueName()} for help formatting this field.
 */
function delete_issue_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteIssueRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteIssue($request);
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
    $formattedName = ContactCenterInsightsClient::issueName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]',
        '[ISSUE]'
    );

    delete_issue_sample($formattedName);
}
```

### deleteIssueModel

Deletes an issue model.

The async variant is [ContactCenterInsightsClient::deleteIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteIssueModelRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedName The name of the issue model to delete. Please see
 *                              {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function delete_issue_model_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteIssueModelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->deleteIssueModel($request);
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
    $formattedName = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    delete_issue_model_sample($formattedName);
}
```

### deletePhraseMatcher

Deletes a phrase matcher.

The async variant is [ContactCenterInsightsClient::deletePhraseMatcherAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deletePhraseMatcherAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeletePhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeletePhraseMatcherRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeletePhraseMatcherRequest;

/**
 * @param string $formattedName The name of the phrase matcher to delete. Please see
 *                              {@see ContactCenterInsightsClient::phraseMatcherName()} for help formatting this field.
 */
function delete_phrase_matcher_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeletePhraseMatcherRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deletePhraseMatcher($request);
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
    $formattedName = ContactCenterInsightsClient::phraseMatcherName(
        '[PROJECT]',
        '[LOCATION]',
        '[PHRASE_MATCHER]'
    );

    delete_phrase_matcher_sample($formattedName);
}
```

### deleteQaQuestion

Deletes a QaQuestion.

The async variant is [ContactCenterInsightsClient::deleteQaQuestionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteQaQuestionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteQaQuestionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteQaQuestionRequest;

/**
 * @param string $formattedName The name of the QaQuestion to delete. Please see
 *                              {@see ContactCenterInsightsClient::qaQuestionName()} for help formatting this field.
 */
function delete_qa_question_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteQaQuestionRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteQaQuestion($request);
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
    $formattedName = ContactCenterInsightsClient::qaQuestionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]',
        '[QA_QUESTION]'
    );

    delete_qa_question_sample($formattedName);
}
```

### deleteQaScorecard

Deletes a QaScorecard.

The async variant is [ContactCenterInsightsClient::deleteQaScorecardAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteQaScorecardAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteQaScorecardRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteQaScorecardRequest;

/**
 * @param string $formattedName The name of the QaScorecard to delete. Please see
 *                              {@see ContactCenterInsightsClient::qaScorecardName()} for help formatting this field.
 */
function delete_qa_scorecard_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteQaScorecardRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteQaScorecard($request);
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
    $formattedName = ContactCenterInsightsClient::qaScorecardName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]'
    );

    delete_qa_scorecard_sample($formattedName);
}
```

### deleteQaScorecardRevision

Deletes a QaScorecardRevision.

The async variant is [ContactCenterInsightsClient::deleteQaScorecardRevisionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteQaScorecardRevisionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteQaScorecardRevisionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteQaScorecardRevisionRequest;

/**
 * @param string $formattedName The name of the QaScorecardRevision to delete. Please see
 *                              {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 */
function delete_qa_scorecard_revision_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteQaScorecardRevisionRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteQaScorecardRevision($request);
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
    $formattedName = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );

    delete_qa_scorecard_revision_sample($formattedName);
}
```

### deleteView

Deletes a view.

The async variant is [ContactCenterInsightsClient::deleteViewAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deleteViewAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteViewRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeleteViewRequest;

/**
 * @param string $formattedName The name of the view to delete. Please see
 *                              {@see ContactCenterInsightsClient::viewName()} for help formatting this field.
 */
function delete_view_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeleteViewRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        $contactCenterInsightsClient->deleteView($request);
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
    $formattedName = ContactCenterInsightsClient::viewName('[PROJECT]', '[LOCATION]', '[VIEW]');

    delete_view_sample($formattedName);
}
```

### deployIssueModel

Deploys an issue model. Returns an error if a model is already deployed.

An issue model can only be used in analysis after it has been deployed.

The async variant is [ContactCenterInsightsClient::deployIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deployIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeployIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeployIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeployIssueModelRequest;
use Google\Cloud\ContactCenterInsights\V1\DeployIssueModelResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedName The issue model to deploy. Please see
 *                              {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function deploy_issue_model_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeployIssueModelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->deployIssueModel($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var DeployIssueModelResponse $result */
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
    $formattedName = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    deploy_issue_model_sample($formattedName);
}
```

### deployQaScorecardRevision

Deploy a QaScorecardRevision.

The async variant is [ContactCenterInsightsClient::deployQaScorecardRevisionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__deployQaScorecardRevisionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeployQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeployQaScorecardRevisionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\DeployQaScorecardRevisionRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision;

/**
 * @param string $formattedName The name of the QaScorecardRevision to deploy. Please see
 *                              {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 */
function deploy_qa_scorecard_revision_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new DeployQaScorecardRevisionRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecardRevision $response */
        $response = $contactCenterInsightsClient->deployQaScorecardRevision($request);
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
    $formattedName = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );

    deploy_qa_scorecard_revision_sample($formattedName);
}
```

### exportInsightsData

Export insights data to a destination defined in the request body.

The async variant is [ContactCenterInsightsClient::exportInsightsDataAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__exportInsightsDataAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ExportInsightsDataRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ExportInsightsDataRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ExportInsightsDataRequest;
use Google\Cloud\ContactCenterInsights\V1\ExportInsightsDataResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource to export data from. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function export_insights_data_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ExportInsightsDataRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->exportInsightsData($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var ExportInsightsDataResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    export_insights_data_sample($formattedParent);
}
```

### exportIssueModel

Exports an issue model to the provided destination.

The async variant is [ContactCenterInsightsClient::exportIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__exportIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ExportIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ExportIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ExportIssueModelRequest;
use Google\Cloud\ContactCenterInsights\V1\ExportIssueModelResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedName The issue model to export. Please see
 *                              {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function export_issue_model_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ExportIssueModelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->exportIssueModel($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var ExportIssueModelResponse $result */
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
    $formattedName = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    export_issue_model_sample($formattedName);
}
```

### getAnalysis

Gets an analysis.

The async variant is [ContactCenterInsightsClient::getAnalysisAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getAnalysisAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetAnalysisRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetAnalysisRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Analysis](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Analysis)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Analysis;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetAnalysisRequest;

/**
 * @param string $formattedName The name of the analysis to get. Please see
 *                              {@see ContactCenterInsightsClient::analysisName()} for help formatting this field.
 */
function get_analysis_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetAnalysisRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Analysis $response */
        $response = $contactCenterInsightsClient->getAnalysis($request);
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
    $formattedName = ContactCenterInsightsClient::analysisName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]',
        '[ANALYSIS]'
    );

    get_analysis_sample($formattedName);
}
```

### getAnalysisRule

Get a analysis rule.

The async variant is [ContactCenterInsightsClient::getAnalysisRuleAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getAnalysisRuleAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetAnalysisRuleRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\AnalysisRule](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.AnalysisRule)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\AnalysisRule;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetAnalysisRuleRequest;

/**
 * @param string $formattedName The name of the AnalysisRule to get. Please see
 *                              {@see ContactCenterInsightsClient::analysisRuleName()} for help formatting this field.
 */
function get_analysis_rule_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetAnalysisRuleRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var AnalysisRule $response */
        $response = $contactCenterInsightsClient->getAnalysisRule($request);
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
    $formattedName = ContactCenterInsightsClient::analysisRuleName(
        '[PROJECT]',
        '[LOCATION]',
        '[ANALYSIS_RULE]'
    );

    get_analysis_rule_sample($formattedName);
}
```

### getConversation

Gets a conversation.

The async variant is [ContactCenterInsightsClient::getConversationAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getConversationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetConversationRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Conversation](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Conversation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Conversation;
use Google\Cloud\ContactCenterInsights\V1\GetConversationRequest;

/**
 * @param string $formattedName The name of the conversation to get. Please see
 *                              {@see ContactCenterInsightsClient::conversationName()} for help formatting this field.
 */
function get_conversation_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetConversationRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Conversation $response */
        $response = $contactCenterInsightsClient->getConversation($request);
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
    $formattedName = ContactCenterInsightsClient::conversationName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]'
    );

    get_conversation_sample($formattedName);
}
```

### getEncryptionSpec

Gets location-level encryption key specification.

The async variant is [ContactCenterInsightsClient::getEncryptionSpecAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getEncryptionSpecAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetEncryptionSpecRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetEncryptionSpecRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\EncryptionSpec](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.EncryptionSpec)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\EncryptionSpec;
use Google\Cloud\ContactCenterInsights\V1\GetEncryptionSpecRequest;

/**
 * @param string $formattedName The name of the encryption spec resource to get. Please see
 *                              {@see ContactCenterInsightsClient::encryptionSpecName()} for help formatting this field.
 */
function get_encryption_spec_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetEncryptionSpecRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var EncryptionSpec $response */
        $response = $contactCenterInsightsClient->getEncryptionSpec($request);
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
    $formattedName = ContactCenterInsightsClient::encryptionSpecName('[PROJECT]', '[LOCATION]');

    get_encryption_spec_sample($formattedName);
}
```

### getFeedbackLabel

Get feedback label.

The async variant is [ContactCenterInsightsClient::getFeedbackLabelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getFeedbackLabelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetFeedbackLabelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\FeedbackLabel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.FeedbackLabel)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\FeedbackLabel;
use Google\Cloud\ContactCenterInsights\V1\GetFeedbackLabelRequest;

/**
 * @param string $formattedName The name of the feedback label to get. Please see
 *                              {@see ContactCenterInsightsClient::feedbackLabelName()} for help formatting this field.
 */
function get_feedback_label_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetFeedbackLabelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var FeedbackLabel $response */
        $response = $contactCenterInsightsClient->getFeedbackLabel($request);
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
    $formattedName = ContactCenterInsightsClient::feedbackLabelName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]',
        '[FEEDBACK_LABEL]'
    );

    get_feedback_label_sample($formattedName);
}
```

### getIssue

Gets an issue.

The async variant is [ContactCenterInsightsClient::getIssueAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getIssueAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetIssueRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetIssueRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Issue](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Issue)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetIssueRequest;
use Google\Cloud\ContactCenterInsights\V1\Issue;

/**
 * @param string $formattedName The name of the issue to get. Please see
 *                              {@see ContactCenterInsightsClient::issueName()} for help formatting this field.
 */
function get_issue_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetIssueRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Issue $response */
        $response = $contactCenterInsightsClient->getIssue($request);
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
    $formattedName = ContactCenterInsightsClient::issueName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]',
        '[ISSUE]'
    );

    get_issue_sample($formattedName);
}
```

### getIssueModel

Gets an issue model.

The async variant is [ContactCenterInsightsClient::getIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\IssueModel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.IssueModel)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetIssueModelRequest;
use Google\Cloud\ContactCenterInsights\V1\IssueModel;

/**
 * @param string $formattedName The name of the issue model to get. Please see
 *                              {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function get_issue_model_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetIssueModelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var IssueModel $response */
        $response = $contactCenterInsightsClient->getIssueModel($request);
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
    $formattedName = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    get_issue_model_sample($formattedName);
}
```

### getPhraseMatcher

Gets a phrase matcher.

The async variant is [ContactCenterInsightsClient::getPhraseMatcherAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getPhraseMatcherAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetPhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetPhraseMatcherRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\PhraseMatcher](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.PhraseMatcher)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetPhraseMatcherRequest;
use Google\Cloud\ContactCenterInsights\V1\PhraseMatcher;

/**
 * @param string $formattedName The name of the phrase matcher to get. Please see
 *                              {@see ContactCenterInsightsClient::phraseMatcherName()} for help formatting this field.
 */
function get_phrase_matcher_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetPhraseMatcherRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var PhraseMatcher $response */
        $response = $contactCenterInsightsClient->getPhraseMatcher($request);
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
    $formattedName = ContactCenterInsightsClient::phraseMatcherName(
        '[PROJECT]',
        '[LOCATION]',
        '[PHRASE_MATCHER]'
    );

    get_phrase_matcher_sample($formattedName);
}
```

### getQaQuestion

Gets a QaQuestion.

The async variant is [ContactCenterInsightsClient::getQaQuestionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getQaQuestionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetQaQuestionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaQuestion](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaQuestion)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetQaQuestionRequest;
use Google\Cloud\ContactCenterInsights\V1\QaQuestion;

/**
 * @param string $formattedName The name of the QaQuestion to get. Please see
 *                              {@see ContactCenterInsightsClient::qaQuestionName()} for help formatting this field.
 */
function get_qa_question_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetQaQuestionRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var QaQuestion $response */
        $response = $contactCenterInsightsClient->getQaQuestion($request);
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
    $formattedName = ContactCenterInsightsClient::qaQuestionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]',
        '[QA_QUESTION]'
    );

    get_qa_question_sample($formattedName);
}
```

### getQaScorecard

Gets a QaScorecard.

The async variant is [ContactCenterInsightsClient::getQaScorecardAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getQaScorecardAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetQaScorecardRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecard](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecard)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetQaScorecardRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecard;

/**
 * @param string $formattedName The name of the QaScorecard to get. Please see
 *                              {@see ContactCenterInsightsClient::qaScorecardName()} for help formatting this field.
 */
function get_qa_scorecard_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetQaScorecardRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecard $response */
        $response = $contactCenterInsightsClient->getQaScorecard($request);
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
    $formattedName = ContactCenterInsightsClient::qaScorecardName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]'
    );

    get_qa_scorecard_sample($formattedName);
}
```

### getQaScorecardRevision

Gets a QaScorecardRevision.

The async variant is [ContactCenterInsightsClient::getQaScorecardRevisionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getQaScorecardRevisionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetQaScorecardRevisionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetQaScorecardRevisionRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision;

/**
 * @param string $formattedName The name of the QaScorecardRevision to get. Please see
 *                              {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 */
function get_qa_scorecard_revision_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetQaScorecardRevisionRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecardRevision $response */
        $response = $contactCenterInsightsClient->getQaScorecardRevision($request);
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
    $formattedName = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );

    get_qa_scorecard_revision_sample($formattedName);
}
```

### getSettings

Gets project-level settings.

The async variant is [ContactCenterInsightsClient::getSettingsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getSettingsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetSettingsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetSettingsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Settings](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Settings)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetSettingsRequest;
use Google\Cloud\ContactCenterInsights\V1\Settings;

/**
 * @param string $formattedName The name of the settings resource to get. Please see
 *                              {@see ContactCenterInsightsClient::settingsName()} for help formatting this field.
 */
function get_settings_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetSettingsRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var Settings $response */
        $response = $contactCenterInsightsClient->getSettings($request);
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
    $formattedName = ContactCenterInsightsClient::settingsName('[PROJECT]', '[LOCATION]');

    get_settings_sample($formattedName);
}
```

### getView

Gets a view.

The async variant is [ContactCenterInsightsClient::getViewAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__getViewAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetViewRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\View](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.View)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\GetViewRequest;
use Google\Cloud\ContactCenterInsights\V1\View;

/**
 * @param string $formattedName The name of the view to get. Please see
 *                              {@see ContactCenterInsightsClient::viewName()} for help formatting this field.
 */
function get_view_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new GetViewRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var View $response */
        $response = $contactCenterInsightsClient->getView($request);
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
    $formattedName = ContactCenterInsightsClient::viewName('[PROJECT]', '[LOCATION]', '[VIEW]');

    get_view_sample($formattedName);
}
```

### importIssueModel

Imports an issue model from a Cloud Storage bucket.

The async variant is [ContactCenterInsightsClient::importIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__importIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ImportIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ImportIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ImportIssueModelRequest;
use Google\Cloud\ContactCenterInsights\V1\ImportIssueModelResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource of the issue model. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function import_issue_model_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ImportIssueModelRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->importIssueModel($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var ImportIssueModelResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    import_issue_model_sample($formattedParent);
}
```

### ingestConversations

Imports conversations and processes them according to the user's configuration.

The async variant is [ContactCenterInsightsClient::ingestConversationsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__ingestConversationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\IngestConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.IngestConversationsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\IngestConversationsRequest;
use Google\Cloud\ContactCenterInsights\V1\IngestConversationsResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource for new conversations. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function ingest_conversations_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new IngestConversationsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->ingestConversations($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var IngestConversationsResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    ingest_conversations_sample($formattedParent);
}
```

### initializeEncryptionSpec

Initializes a location-level encryption key specification. An error will result if the location has resources already created before the initialization. After the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.

The async variant is [ContactCenterInsightsClient::initializeEncryptionSpecAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__initializeEncryptionSpecAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\InitializeEncryptionSpecRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.InitializeEncryptionSpecRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\EncryptionSpec;
use Google\Cloud\ContactCenterInsights\V1\InitializeEncryptionSpecRequest;
use Google\Cloud\ContactCenterInsights\V1\InitializeEncryptionSpecResponse;
use Google\Rpc\Status;

/**
 * @param string $encryptionSpecKmsKey The name of customer-managed encryption key that is used to
 *                                     secure a resource and its sub-resources. If empty, the resource is secured
 *                                     by our default encryption key. Only the key in the same location as this
 *                                     resource is allowed to be used for encryption. Format:
 *                                     `projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}`
 */
function initialize_encryption_spec_sample(string $encryptionSpecKmsKey): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $encryptionSpec = (new EncryptionSpec())
        ->setKmsKey($encryptionSpecKmsKey);
    $request = (new InitializeEncryptionSpecRequest())
        ->setEncryptionSpec($encryptionSpec);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->initializeEncryptionSpec($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var InitializeEncryptionSpecResponse $result */
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
    $encryptionSpecKmsKey = '[KMS_KEY]';

    initialize_encryption_spec_sample($encryptionSpecKmsKey);
}
```

### listAllFeedbackLabels

List all feedback labels by project number.

The async variant is [ContactCenterInsightsClient::listAllFeedbackLabelsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listAllFeedbackLabelsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListAllFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListAllFeedbackLabelsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\FeedbackLabel;
use Google\Cloud\ContactCenterInsights\V1\ListAllFeedbackLabelsRequest;

/**
 * @param string $formattedParent The parent resource of all feedback labels per project. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_all_feedback_labels_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListAllFeedbackLabelsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listAllFeedbackLabels($request);

        /** @var FeedbackLabel $element */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_all_feedback_labels_sample($formattedParent);
}
```

### listAnalyses

Lists analyses.

The async variant is [ContactCenterInsightsClient::listAnalysesAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listAnalysesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListAnalysesRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListAnalysesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Analysis;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListAnalysesRequest;

/**
 * @param string $formattedParent The parent resource of the analyses. Please see
 *                                {@see ContactCenterInsightsClient::conversationName()} for help formatting this field.
 */
function list_analyses_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListAnalysesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listAnalyses($request);

        /** @var Analysis $element */
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
    $formattedParent = ContactCenterInsightsClient::conversationName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]'
    );

    list_analyses_sample($formattedParent);
}
```

### listAnalysisRules

Lists analysis rules.

The async variant is [ContactCenterInsightsClient::listAnalysisRulesAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listAnalysisRulesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListAnalysisRulesRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListAnalysisRulesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\AnalysisRule;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListAnalysisRulesRequest;

/**
 * @param string $formattedParent The parent resource of the analysis rules. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_analysis_rules_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListAnalysisRulesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listAnalysisRules($request);

        /** @var AnalysisRule $element */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_analysis_rules_sample($formattedParent);
}
```

### listConversations

Lists conversations.

The async variant is [ContactCenterInsightsClient::listConversationsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listConversationsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListConversationsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Conversation;
use Google\Cloud\ContactCenterInsights\V1\ListConversationsRequest;

/**
 * @param string $formattedParent The parent resource of the conversation. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_conversations_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListConversationsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listConversations($request);

        /** @var Conversation $element */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_conversations_sample($formattedParent);
}
```

### listFeedbackLabels

List feedback labels.

The async variant is [ContactCenterInsightsClient::listFeedbackLabelsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listFeedbackLabelsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListFeedbackLabelsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\FeedbackLabel;
use Google\Cloud\ContactCenterInsights\V1\ListFeedbackLabelsRequest;

/**
 * @param string $formattedParent The parent resource of the feedback labels. Please see
 *                                {@see ContactCenterInsightsClient::conversationName()} for help formatting this field.
 */
function list_feedback_labels_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListFeedbackLabelsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listFeedbackLabels($request);

        /** @var FeedbackLabel $element */
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
    $formattedParent = ContactCenterInsightsClient::conversationName(
        '[PROJECT]',
        '[LOCATION]',
        '[CONVERSATION]'
    );

    list_feedback_labels_sample($formattedParent);
}
```

### listIssueModels

Lists issue models.

The async variant is [ContactCenterInsightsClient::listIssueModelsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listIssueModelsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListIssueModelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssueModelsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\ListIssueModelsResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssueModelsResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListIssueModelsRequest;
use Google\Cloud\ContactCenterInsights\V1\ListIssueModelsResponse;

/**
 * @param string $formattedParent The parent resource of the issue model. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_issue_models_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListIssueModelsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var ListIssueModelsResponse $response */
        $response = $contactCenterInsightsClient->listIssueModels($request);
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_issue_models_sample($formattedParent);
}
```

### listIssues

Lists issues.

The async variant is [ContactCenterInsightsClient::listIssuesAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listIssuesAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListIssuesRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssuesRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\ListIssuesResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssuesResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListIssuesRequest;
use Google\Cloud\ContactCenterInsights\V1\ListIssuesResponse;

/**
 * @param string $formattedParent The parent resource of the issue. Please see
 *                                {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function list_issues_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListIssuesRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var ListIssuesResponse $response */
        $response = $contactCenterInsightsClient->listIssues($request);
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
    $formattedParent = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    list_issues_sample($formattedParent);
}
```

### listPhraseMatchers

Lists phrase matchers.

The async variant is [ContactCenterInsightsClient::listPhraseMatchersAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listPhraseMatchersAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListPhraseMatchersRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListPhraseMatchersRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListPhraseMatchersRequest;
use Google\Cloud\ContactCenterInsights\V1\PhraseMatcher;

/**
 * @param string $formattedParent The parent resource of the phrase matcher. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_phrase_matchers_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListPhraseMatchersRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listPhraseMatchers($request);

        /** @var PhraseMatcher $element */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_phrase_matchers_sample($formattedParent);
}
```

### listQaQuestions

Lists QaQuestions.

The async variant is [ContactCenterInsightsClient::listQaQuestionsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listQaQuestionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListQaQuestionsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListQaQuestionsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListQaQuestionsRequest;
use Google\Cloud\ContactCenterInsights\V1\QaQuestion;

/**
 * @param string $formattedParent The parent resource of the questions. Please see
 *                                {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 */
function list_qa_questions_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListQaQuestionsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listQaQuestions($request);

        /** @var QaQuestion $element */
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
    $formattedParent = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );

    list_qa_questions_sample($formattedParent);
}
```

### listQaScorecardRevisions

Lists all revisions under the parent QaScorecard.

The async variant is [ContactCenterInsightsClient::listQaScorecardRevisionsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listQaScorecardRevisionsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListQaScorecardRevisionsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListQaScorecardRevisionsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListQaScorecardRevisionsRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision;

/**
 * @param string $formattedParent The parent resource of the scorecard revisions. To list all
 *                                revisions of all scorecards, substitute the QaScorecard ID with a '-'
 *                                character. Please see
 *                                {@see ContactCenterInsightsClient::qaScorecardName()} for help formatting this field.
 */
function list_qa_scorecard_revisions_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListQaScorecardRevisionsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listQaScorecardRevisions($request);

        /** @var QaScorecardRevision $element */
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
    $formattedParent = ContactCenterInsightsClient::qaScorecardName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]'
    );

    list_qa_scorecard_revisions_sample($formattedParent);
}
```

### listQaScorecards

Lists QaScorecards.

The async variant is [ContactCenterInsightsClient::listQaScorecardsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listQaScorecardsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListQaScorecardsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListQaScorecardsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListQaScorecardsRequest;
use Google\Cloud\ContactCenterInsights\V1\QaScorecard;

/**
 * @param string $formattedParent The parent resource of the scorecards. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_qa_scorecards_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListQaScorecardsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listQaScorecards($request);

        /** @var QaScorecard $element */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_qa_scorecards_sample($formattedParent);
}
```

### listViews

Lists views.

The async variant is [ContactCenterInsightsClient::listViewsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__listViewsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListViewsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListViewsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\ListViewsRequest;
use Google\Cloud\ContactCenterInsights\V1\View;

/**
 * @param string $formattedParent The parent resource of the views. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function list_views_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new ListViewsRequest())
        ->setParent($formattedParent);

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $contactCenterInsightsClient->listViews($request);

        /** @var View $element */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    list_views_sample($formattedParent);
}
```

### queryMetrics

Query metrics.

The async variant is [ContactCenterInsightsClient::queryMetricsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__queryMetricsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\QueryMetricsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QueryMetricsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\QueryMetricsRequest;
use Google\Cloud\ContactCenterInsights\V1\QueryMetricsResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedLocation The location of the data.
 *                                  "projects/{project}/locations/{location}"
 *                                  Please see {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 * @param string $filter            Filter to select a subset of conversations to compute the
 *                                  metrics. Must specify a window of the conversation create time to compute
 *                                  the metrics. The returned metrics will be from the range [DATE(starting
 *                                  create time), DATE(ending create time)).
 *
 */
function query_metrics_sample(string $formattedLocation, string $filter): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new QueryMetricsRequest())
        ->setLocation($formattedLocation)
        ->setFilter($filter);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->queryMetrics($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var QueryMetricsResponse $result */
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
    $formattedLocation = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');
    $filter = '[FILTER]';

    query_metrics_sample($formattedLocation, $filter);
}
```

### tuneQaScorecardRevision

Fine tune one or more QaModels.

The async variant is [ContactCenterInsightsClient::tuneQaScorecardRevisionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__tuneQaScorecardRevisionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\TuneQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.TuneQaScorecardRevisionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\TuneQaScorecardRevisionRequest;
use Google\Cloud\ContactCenterInsights\V1\TuneQaScorecardRevisionResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource for new fine tuning job instance. Please see
 *                                {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 * @param string $filter          Filter for selecting the feedback labels that needs to be
 *                                used for training.
 *                                This filter can be used to limit the feedback labels used for tuning to a
 *                                feedback labels created or updated for a specific time-window etc.
 */
function tune_qa_scorecard_revision_sample(string $formattedParent, string $filter): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new TuneQaScorecardRevisionRequest())
        ->setParent($formattedParent)
        ->setFilter($filter);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->tuneQaScorecardRevision($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var TuneQaScorecardRevisionResponse $result */
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
    $formattedParent = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );
    $filter = '[FILTER]';

    tune_qa_scorecard_revision_sample($formattedParent, $filter);
}
```

### undeployIssueModel

Undeploys an issue model.

An issue model can not be used in analysis after it has been undeployed.

The async variant is [ContactCenterInsightsClient::undeployIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__undeployIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UndeployIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UndeployIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\UndeployIssueModelRequest;
use Google\Cloud\ContactCenterInsights\V1\UndeployIssueModelResponse;
use Google\Rpc\Status;

/**
 * @param string $formattedName The issue model to undeploy. Please see
 *                              {@see ContactCenterInsightsClient::issueModelName()} for help formatting this field.
 */
function undeploy_issue_model_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new UndeployIssueModelRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->undeployIssueModel($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var UndeployIssueModelResponse $result */
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
    $formattedName = ContactCenterInsightsClient::issueModelName(
        '[PROJECT]',
        '[LOCATION]',
        '[ISSUE_MODEL]'
    );

    undeploy_issue_model_sample($formattedName);
}
```

### undeployQaScorecardRevision

Undeploy a QaScorecardRevision.

The async variant is [ContactCenterInsightsClient::undeployQaScorecardRevisionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__undeployQaScorecardRevisionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UndeployQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UndeployQaScorecardRevisionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision;
use Google\Cloud\ContactCenterInsights\V1\UndeployQaScorecardRevisionRequest;

/**
 * @param string $formattedName The name of the QaScorecardRevision to undeploy. Please see
 *                              {@see ContactCenterInsightsClient::qaScorecardRevisionName()} for help formatting this field.
 */
function undeploy_qa_scorecard_revision_sample(string $formattedName): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $request = (new UndeployQaScorecardRevisionRequest())
        ->setName($formattedName);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecardRevision $response */
        $response = $contactCenterInsightsClient->undeployQaScorecardRevision($request);
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
    $formattedName = ContactCenterInsightsClient::qaScorecardRevisionName(
        '[PROJECT]',
        '[LOCATION]',
        '[QA_SCORECARD]',
        '[REVISION]'
    );

    undeploy_qa_scorecard_revision_sample($formattedName);
}
```

### updateAnalysisRule

Updates a analysis rule.

The async variant is [ContactCenterInsightsClient::updateAnalysisRuleAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateAnalysisRuleAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateAnalysisRuleRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\AnalysisRule](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.AnalysisRule)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\AnalysisRule;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\UpdateAnalysisRuleRequest;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_analysis_rule_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $analysisRule = new AnalysisRule();
    $request = (new UpdateAnalysisRuleRequest())
        ->setAnalysisRule($analysisRule);

    // Call the API and handle any network failures.
    try {
        /** @var AnalysisRule $response */
        $response = $contactCenterInsightsClient->updateAnalysisRule($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateConversation

Updates a conversation.

The async variant is [ContactCenterInsightsClient::updateConversationAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateConversationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateConversationRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Conversation](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Conversation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Conversation;
use Google\Cloud\ContactCenterInsights\V1\UpdateConversationRequest;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_conversation_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $conversation = new Conversation();
    $request = (new UpdateConversationRequest())
        ->setConversation($conversation);

    // Call the API and handle any network failures.
    try {
        /** @var Conversation $response */
        $response = $contactCenterInsightsClient->updateConversation($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateFeedbackLabel

Update feedback label.

The async variant is [ContactCenterInsightsClient::updateFeedbackLabelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateFeedbackLabelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateFeedbackLabelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\FeedbackLabel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.FeedbackLabel)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\FeedbackLabel;
use Google\Cloud\ContactCenterInsights\V1\UpdateFeedbackLabelRequest;
use Google\Protobuf\FieldMask;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_feedback_label_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $feedbackLabel = new FeedbackLabel();
    $updateMask = new FieldMask();
    $request = (new UpdateFeedbackLabelRequest())
        ->setFeedbackLabel($feedbackLabel)
        ->setUpdateMask($updateMask);

    // Call the API and handle any network failures.
    try {
        /** @var FeedbackLabel $response */
        $response = $contactCenterInsightsClient->updateFeedbackLabel($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateIssue

Updates an issue.

The async variant is [ContactCenterInsightsClient::updateIssueAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateIssueAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateIssueRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateIssueRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Issue](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Issue)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Issue;
use Google\Cloud\ContactCenterInsights\V1\UpdateIssueRequest;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_issue_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $issue = new Issue();
    $request = (new UpdateIssueRequest())
        ->setIssue($issue);

    // Call the API and handle any network failures.
    try {
        /** @var Issue $response */
        $response = $contactCenterInsightsClient->updateIssue($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateIssueModel

Updates an issue model.

The async variant is [ContactCenterInsightsClient::updateIssueModelAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateIssueModelAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateIssueModelRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\IssueModel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.IssueModel)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\IssueModel;
use Google\Cloud\ContactCenterInsights\V1\UpdateIssueModelRequest;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_issue_model_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $issueModel = new IssueModel();
    $request = (new UpdateIssueModelRequest())
        ->setIssueModel($issueModel);

    // Call the API and handle any network failures.
    try {
        /** @var IssueModel $response */
        $response = $contactCenterInsightsClient->updateIssueModel($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updatePhraseMatcher

Updates a phrase matcher.

The async variant is [ContactCenterInsightsClient::updatePhraseMatcherAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updatePhraseMatcherAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdatePhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdatePhraseMatcherRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\PhraseMatcher](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.PhraseMatcher)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\PhraseMatcher;
use Google\Cloud\ContactCenterInsights\V1\PhraseMatcher\PhraseMatcherType;
use Google\Cloud\ContactCenterInsights\V1\UpdatePhraseMatcherRequest;

/**
 * @param int $phraseMatcherType The type of this phrase matcher.
 */
function update_phrase_matcher_sample(int $phraseMatcherType): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $phraseMatcher = (new PhraseMatcher())
        ->setType($phraseMatcherType);
    $request = (new UpdatePhraseMatcherRequest())
        ->setPhraseMatcher($phraseMatcher);

    // Call the API and handle any network failures.
    try {
        /** @var PhraseMatcher $response */
        $response = $contactCenterInsightsClient->updatePhraseMatcher($request);
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
    $phraseMatcherType = PhraseMatcherType::PHRASE_MATCHER_TYPE_UNSPECIFIED;

    update_phrase_matcher_sample($phraseMatcherType);
}
```

### updateQaQuestion

Updates a QaQuestion.

The async variant is [ContactCenterInsightsClient::updateQaQuestionAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateQaQuestionAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateQaQuestionRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaQuestion](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaQuestion)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\QaQuestion;
use Google\Cloud\ContactCenterInsights\V1\UpdateQaQuestionRequest;
use Google\Protobuf\FieldMask;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_qa_question_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $qaQuestion = new QaQuestion();
    $updateMask = new FieldMask();
    $request = (new UpdateQaQuestionRequest())
        ->setQaQuestion($qaQuestion)
        ->setUpdateMask($updateMask);

    // Call the API and handle any network failures.
    try {
        /** @var QaQuestion $response */
        $response = $contactCenterInsightsClient->updateQaQuestion($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateQaScorecard

Updates a QaScorecard.

The async variant is [ContactCenterInsightsClient::updateQaScorecardAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateQaScorecardAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateQaScorecardRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\QaScorecard](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecard)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\QaScorecard;
use Google\Cloud\ContactCenterInsights\V1\UpdateQaScorecardRequest;
use Google\Protobuf\FieldMask;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_qa_scorecard_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $qaScorecard = new QaScorecard();
    $updateMask = new FieldMask();
    $request = (new UpdateQaScorecardRequest())
        ->setQaScorecard($qaScorecard)
        ->setUpdateMask($updateMask);

    // Call the API and handle any network failures.
    try {
        /** @var QaScorecard $response */
        $response = $contactCenterInsightsClient->updateQaScorecard($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateSettings

Updates project-level settings.

The async variant is [ContactCenterInsightsClient::updateSettingsAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateSettingsAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateSettingsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateSettingsRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\Settings](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Settings)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Settings;
use Google\Cloud\ContactCenterInsights\V1\UpdateSettingsRequest;
use Google\Protobuf\FieldMask;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_settings_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $settings = new Settings();
    $updateMask = new FieldMask();
    $request = (new UpdateSettingsRequest())
        ->setSettings($settings)
        ->setUpdateMask($updateMask);

    // Call the API and handle any network failures.
    try {
        /** @var Settings $response */
        $response = $contactCenterInsightsClient->updateSettings($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### updateView

Updates a view.

The async variant is [ContactCenterInsightsClient::updateViewAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__updateViewAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateViewRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\View](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.View)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\UpdateViewRequest;
use Google\Cloud\ContactCenterInsights\V1\View;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_view_sample(): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $view = new View();
    $request = (new UpdateViewRequest())
        ->setView($view);

    // Call the API and handle any network failures.
    try {
        /** @var View $response */
        $response = $contactCenterInsightsClient->updateView($request);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### uploadConversation

Create a long-running conversation upload operation. This method differs from `CreateConversation` by allowing audio transcription and optional DLP redaction.

The async variant is [ContactCenterInsightsClient::uploadConversationAsync()](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Client.ContactCenterInsightsClient#_Google_Cloud_ContactCenterInsights_V1_Client_ContactCenterInsightsClient__uploadConversationAsync__) .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UploadConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UploadConversationRequest)`  

A request to house fields associated with the call.

`callOptions`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://cloud.google.com/php/docs/reference/gax/latest/RetrySettings.html) for example usage.

**Returns**

**Type**

**Description**

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\ApiCore\OperationResponse;
use Google\Cloud\ContactCenterInsights\V1\Client\ContactCenterInsightsClient;
use Google\Cloud\ContactCenterInsights\V1\Conversation;
use Google\Cloud\ContactCenterInsights\V1\UploadConversationRequest;
use Google\Rpc\Status;

/**
 * @param string $formattedParent The parent resource of the conversation. Please see
 *                                {@see ContactCenterInsightsClient::locationName()} for help formatting this field.
 */
function upload_conversation_sample(string $formattedParent): void
{
    // Create a client.
    $contactCenterInsightsClient = new ContactCenterInsightsClient();

    // Prepare the request message.
    $conversation = new Conversation();
    $request = (new UploadConversationRequest())
        ->setParent($formattedParent)
        ->setConversation($conversation);

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $contactCenterInsightsClient->uploadConversation($request);
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var Conversation $result */
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
    $formattedParent = ContactCenterInsightsClient::locationName('[PROJECT]', '[LOCATION]');

    upload_conversation_sample($formattedParent);
}
```

### bulkAnalyzeConversationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkAnalyzeConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkAnalyzeConversationsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### bulkDeleteConversationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkDeleteConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkDeleteConversationsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### bulkDownloadFeedbackLabelsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkDownloadFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkDownloadFeedbackLabelsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### bulkUploadFeedbackLabelsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\BulkUploadFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.BulkUploadFeedbackLabelsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### calculateIssueModelStatsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CalculateIssueModelStatsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateIssueModelStatsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\CalculateIssueModelStatsResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateIssueModelStatsResponse)>`

### calculateStatsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CalculateStatsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateStatsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\CalculateStatsResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CalculateStatsResponse)>`

### createAnalysisAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateAnalysisRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateAnalysisRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### createAnalysisRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateAnalysisRuleRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\AnalysisRule](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.AnalysisRule)>`

### createConversationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateConversationRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Conversation](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Conversation)>`

### createFeedbackLabelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateFeedbackLabelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\FeedbackLabel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.FeedbackLabel)>`

### createIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### createPhraseMatcherAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreatePhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreatePhraseMatcherRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\PhraseMatcher](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.PhraseMatcher)>`

### createQaQuestionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateQaQuestionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaQuestion](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaQuestion)>`

### createQaScorecardAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateQaScorecardRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecard](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecard)>`

### createQaScorecardRevisionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateQaScorecardRevisionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)>`

### createViewAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\CreateViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.CreateViewRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\View](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.View)>`

### deleteAnalysisAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteAnalysisRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteAnalysisRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteAnalysisRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteAnalysisRuleRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteConversationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteConversationRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteFeedbackLabelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteFeedbackLabelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteIssueAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteIssueRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteIssueRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### deletePhraseMatcherAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeletePhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeletePhraseMatcherRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteQaQuestionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteQaQuestionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteQaScorecardAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteQaScorecardRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteQaScorecardRevisionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteQaScorecardRevisionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deleteViewAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeleteViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeleteViewRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<void>`

### deployIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeployIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeployIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### deployQaScorecardRevisionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\DeployQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.DeployQaScorecardRevisionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)>`

### exportInsightsDataAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ExportInsightsDataRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ExportInsightsDataRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### exportIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ExportIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ExportIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### getAnalysisAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetAnalysisRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetAnalysisRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Analysis](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Analysis)>`

### getAnalysisRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetAnalysisRuleRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\AnalysisRule](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.AnalysisRule)>`

### getConversationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetConversationRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Conversation](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Conversation)>`

### getEncryptionSpecAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetEncryptionSpecRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetEncryptionSpecRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\EncryptionSpec](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.EncryptionSpec)>`

### getFeedbackLabelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetFeedbackLabelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\FeedbackLabel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.FeedbackLabel)>`

### getIssueAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetIssueRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetIssueRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Issue](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Issue)>`

### getIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\IssueModel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.IssueModel)>`

### getPhraseMatcherAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetPhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetPhraseMatcherRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\PhraseMatcher](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.PhraseMatcher)>`

### getQaQuestionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetQaQuestionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaQuestion](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaQuestion)>`

### getQaScorecardAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetQaScorecardRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecard](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecard)>`

### getQaScorecardRevisionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetQaScorecardRevisionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)>`

### getSettingsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetSettingsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetSettingsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Settings](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Settings)>`

### getViewAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\GetViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.GetViewRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\View](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.View)>`

### importIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ImportIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ImportIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### ingestConversationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\IngestConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.IngestConversationsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### initializeEncryptionSpecAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\InitializeEncryptionSpecRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.InitializeEncryptionSpecRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### listAllFeedbackLabelsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListAllFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListAllFeedbackLabelsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listAnalysesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListAnalysesRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListAnalysesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listAnalysisRulesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListAnalysisRulesRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListAnalysisRulesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listConversationsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListConversationsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListConversationsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listFeedbackLabelsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListFeedbackLabelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListFeedbackLabelsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listIssueModelsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListIssueModelsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssueModelsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\ListIssueModelsResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssueModelsResponse)>`

### listIssuesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListIssuesRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssuesRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\ListIssuesResponse](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListIssuesResponse)>`

### listPhraseMatchersAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListPhraseMatchersRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListPhraseMatchersRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listQaQuestionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListQaQuestionsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListQaQuestionsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listQaScorecardRevisionsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListQaScorecardRevisionsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListQaScorecardRevisionsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listQaScorecardsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListQaScorecardsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListQaScorecardsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### listViewsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\ListViewsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.ListViewsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\PagedListResponse](https://cloud.google.com/php/docs/reference/gax/latest/PagedListResponse.html)>`

### queryMetricsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\QueryMetricsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QueryMetricsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### tuneQaScorecardRevisionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\TuneQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.TuneQaScorecardRevisionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### undeployIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UndeployIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UndeployIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

### undeployQaScorecardRevisionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UndeployQaScorecardRevisionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UndeployQaScorecardRevisionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecardRevision](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecardRevision)>`

### updateAnalysisRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateAnalysisRuleRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateAnalysisRuleRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\AnalysisRule](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.AnalysisRule)>`

### updateConversationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateConversationRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Conversation](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Conversation)>`

### updateFeedbackLabelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateFeedbackLabelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateFeedbackLabelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\FeedbackLabel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.FeedbackLabel)>`

### updateIssueAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateIssueRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateIssueRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Issue](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Issue)>`

### updateIssueModelAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateIssueModelRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateIssueModelRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\IssueModel](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.IssueModel)>`

### updatePhraseMatcherAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdatePhraseMatcherRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdatePhraseMatcherRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\PhraseMatcher](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.PhraseMatcher)>`

### updateQaQuestionAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateQaQuestionRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateQaQuestionRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaQuestion](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaQuestion)>`

### updateQaScorecardAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateQaScorecardRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateQaScorecardRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\QaScorecard](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.QaScorecard)>`

### updateSettingsAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateSettingsRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateSettingsRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\Settings](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.Settings)>`

### updateViewAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UpdateViewRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UpdateViewRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\Cloud\ContactCenterInsights\V1\View](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.View)>`

### uploadConversationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\ContactCenterInsights\V1\UploadConversationRequest](/php/docs/reference/cloud-contact-center-insights/2.2.1/V1.UploadConversationRequest)`  

`optionalArgs`

`array`  

**Returns**

**Type**

**Description**

`[GuzzleHttp\Promise\PromiseInterface](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-GuzzleHttp.Promise.Promise.html)<[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)>`

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

`[Google\ApiCore\OperationResponse](https://cloud.google.com/php/docs/reference/gax/latest/OperationResponse.html)`

### static::analysisName

Formats a string containing the fully-qualified path to represent a analysis resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversation`

`string`  

`analysis`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted analysis resource.

### static::analysisRuleName

Formats a string containing the fully-qualified path to represent a analysis\_rule resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`analysisRule`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted analysis\_rule resource.

### static::conversationName

Formats a string containing the fully-qualified path to represent a conversation resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversation`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted conversation resource.

### static::conversationProfileName

Formats a string containing the fully-qualified path to represent a conversation\_profile resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversationProfile`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted conversation\_profile resource.

### static::encryptionSpecName

Formats a string containing the fully-qualified path to represent a encryption\_spec resource.

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

The formatted encryption\_spec resource.

### static::feedbackLabelName

Formats a string containing the fully-qualified path to represent a feedback\_label resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversation`

`string`  

`feedbackLabel`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted feedback\_label resource.

### static::issueName

Formats a string containing the fully-qualified path to represent a issue resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`issueModel`

`string`  

`issue`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted issue resource.

### static::issueModelName

Formats a string containing the fully-qualified path to represent a issue\_model resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`issueModel`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted issue\_model resource.

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

### static::participantName

Formats a string containing the fully-qualified path to represent a participant resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`conversation`

`string`  

`participant`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted participant resource.

### static::phraseMatcherName

Formats a string containing the fully-qualified path to represent a phrase\_matcher resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`phraseMatcher`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted phrase\_matcher resource.

### static::projectConversationParticipantName

Formats a string containing the fully-qualified path to represent a project\_conversation\_participant resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`conversation`

`string`  

`participant`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_conversation\_participant resource.

### static::projectLocationConversationParticipantName

Formats a string containing the fully-qualified path to represent a project\_location\_conversation\_participant resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversation`

`string`  

`participant`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_location\_conversation\_participant resource.

### static::qaQuestionName

Formats a string containing the fully-qualified path to represent a qa\_question resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`qaScorecard`

`string`  

`revision`

`string`  

`qaQuestion`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted qa\_question resource.

### static::qaScorecardName

Formats a string containing the fully-qualified path to represent a qa\_scorecard resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`qaScorecard`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted qa\_scorecard resource.

### static::qaScorecardResultName

Formats a string containing the fully-qualified path to represent a qa\_scorecard\_result resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`qaScorecardResult`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted qa\_scorecard\_result resource.

### static::qaScorecardRevisionName

Formats a string containing the fully-qualified path to represent a qa\_scorecard\_revision resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`qaScorecard`

`string`  

`revision`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted qa\_scorecard\_revision resource.

### static::recognizerName

Formats a string containing the fully-qualified path to represent a recognizer resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`recognizer`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted recognizer resource.

### static::settingsName

Formats a string containing the fully-qualified path to represent a settings resource.

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

The formatted settings resource.

### static::viewName

Formats a string containing the fully-qualified path to represent a view resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`view`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted view resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   analysis: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}
-   analysisRule: projects/{project}/locations/{location}/analysisRules/{analysis\_rule}
-   conversation: projects/{project}/locations/{location}/conversations/{conversation}
-   conversationProfile: projects/{project}/locations/{location}/conversationProfiles/{conversation\_profile}
-   encryptionSpec: projects/{project}/locations/{location}/encryptionSpec
-   feedbackLabel: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback\_label}
-   issue: projects/{project}/locations/{location}/issueModels/{issue\_model}/issues/{issue}
-   issueModel: projects/{project}/locations/{location}/issueModels/{issue\_model}
-   location: projects/{project}/locations/{location}
-   participant: projects/{project}/conversations/{conversation}/participants/{participant}
-   phraseMatcher: projects/{project}/locations/{location}/phraseMatchers/{phrase\_matcher}
-   projectConversationParticipant: projects/{project}/conversations/{conversation}/participants/{participant}
-   projectLocationConversationParticipant: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}
-   qaQuestion: projects/{project}/locations/{location}/qaScorecards/{qa\_scorecard}/revisions/{revision}/qaQuestions/{qa\_question}
-   qaScorecard: projects/{project}/locations/{location}/qaScorecards/{qa\_scorecard}
-   qaScorecardResult: projects/{project}/locations/{location}/qaScorecardResults/{qa\_scorecard\_result}
-   qaScorecardRevision: projects/{project}/locations/{location}/qaScorecards/{qa\_scorecard}/revisions/{revision}
-   recognizer: projects/{project}/locations/{location}/recognizers/{recognizer}
-   settings: projects/{project}/locations/{location}/settings
-   view: projects/{project}/locations/{location}/views/{view}

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

Last updated 2026-03-18 UTC.
