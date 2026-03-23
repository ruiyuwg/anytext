-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class ConversationProfilesClient (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class ConversationProfilesClient.

Service Description: Service for managing [ConversationProfiles](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile).

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

```
$conversationProfilesClient = new ConversationProfilesClient();
try {
    $conversationProfile = 'conversation_profile';
    $participantRole = Role::ROLE_UNSPECIFIED;
    $suggestionFeatureType = Type::TYPE_UNSPECIFIED;
    $operationResponse = $conversationProfilesClient->clearSuggestionFeatureConfig($conversationProfile, $participantRole, $suggestionFeatureType);
    $operationResponse->pollUntilComplete();
    if ($operationResponse->operationSucceeded()) {
        $result = $operationResponse->getResult();
        // doSomethingWith($result)
    } else {
        $error = $operationResponse->getError();
        // handleError($error)
    }
    // Alternatively:
    // start the operation, keep the operation name, and resume later
    $operationResponse = $conversationProfilesClient->clearSuggestionFeatureConfig($conversationProfile, $participantRole, $suggestionFeatureType);
    $operationName = $operationResponse->getName();
    // ... do other work
    $newOperationResponse = $conversationProfilesClient->resumeOperation($operationName, 'clearSuggestionFeatureConfig');
    while (!$newOperationResponse->isDone()) {
        // ... do other work
        $newOperationResponse->reload();
    }
    if ($newOperationResponse->operationSucceeded()) {
        $result = $newOperationResponse->getResult();
        // doSomethingWith($result)
    } else {
        $error = $newOperationResponse->getError();
        // handleError($error)
    }
} finally {
    $conversationProfilesClient->close();
}
```

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Namespace

Google \\ Cloud \\ Dialogflow \\ V2

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

### clearSuggestionFeatureConfig

Clears a suggestion feature from a conversation profile for the given participant role.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

-   `metadata`: [ClearSuggestionFeatureConfigOperationMetadata](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ClearSuggestionFeatureConfigOperationMetadata)
-   `response`: [ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)

**Parameters**

**Name**

**Description**

`conversationProfile`

`string`  

Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

`participantRole`

`int`  

Required. The participant role to remove the suggestion feature config. Only HUMAN\_AGENT or END\_USER can be used. For allowed values, use constants defined on [Google\\Cloud\\Dialogflow\\V2\\Participant\\Role](/php/docs/reference/cloud-dialogflow/1.5.0/V2.Participant.Role)

`suggestionFeatureType`

`int`  

Required. The type of the suggestion feature to remove. For allowed values, use constants defined on [Google\\Cloud\\Dialogflow\\V2\\SuggestionFeature\\Type](/php/docs/reference/cloud-dialogflow/1.5.0/V2.SuggestionFeature.Type)

`optionalArgs`

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
use Google\Cloud\Dialogflow\V2\ConversationProfile;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;
use Google\Cloud\Dialogflow\V2\Participant\Role;
use Google\Cloud\Dialogflow\V2\SuggestionFeature\Type;
use Google\Rpc\Status;

/**
 * @param string $conversationProfile   The Conversation Profile to add or update the suggestion feature
 *                                      config. Format: `projects/<Project ID>/locations/<Location
 *                                      ID>/conversationProfiles/<Conversation Profile ID>`.
 * @param int    $participantRole       The participant role to remove the suggestion feature
 *                                      config. Only HUMAN_AGENT or END_USER can be used.
 * @param int    $suggestionFeatureType The type of the suggestion feature to remove.
 */
function clear_suggestion_feature_config_sample(
    string $conversationProfile,
    int $participantRole,
    int $suggestionFeatureType
): void {
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $conversationProfilesClient->clearSuggestionFeatureConfig(
            $conversationProfile,
            $participantRole,
            $suggestionFeatureType
        );
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var ConversationProfile $result */
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
    $conversationProfile = '[CONVERSATION_PROFILE]';
    $participantRole = Role::ROLE_UNSPECIFIED;
    $suggestionFeatureType = Type::TYPE_UNSPECIFIED;

    clear_suggestion_feature_config_sample(
        $conversationProfile,
        $participantRole,
        $suggestionFeatureType
    );
}
```

### createConversationProfile

Creates a conversation profile in the specified project.

ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via [GetConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfilesClient#_Google_Cloud_Dialogflow_V2_ConversationProfilesClient__getConversationProfile__) API.

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The project to create a conversation profile for. Format: `projects/<Project ID>/locations/<Location ID>`.

`conversationProfile`

`[Google\Cloud\Dialogflow\V2\ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)`  

Required. The conversation profile to create.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\ConversationProfile;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;

/**
 * @param string $formattedParent                The project to create a conversation profile for.
 *                                               Format: `projects/<Project ID>/locations/<Location ID>`. Please see
 *                                               {@see ConversationProfilesClient::projectName()} for help formatting this field.
 * @param string $conversationProfileDisplayName Human readable name for this profile. Max length 1024 bytes.
 */
function create_conversation_profile_sample(
    string $formattedParent,
    string $conversationProfileDisplayName
): void {
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $conversationProfile = (new ConversationProfile())
        ->setDisplayName($conversationProfileDisplayName);

    // Call the API and handle any network failures.
    try {
        /** @var ConversationProfile $response */
        $response = $conversationProfilesClient->createConversationProfile(
            $formattedParent,
            $conversationProfile
        );
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
    $formattedParent = ConversationProfilesClient::projectName('[PROJECT]');
    $conversationProfileDisplayName = '[DISPLAY_NAME]';

    create_conversation_profile_sample($formattedParent, $conversationProfileDisplayName);
}
```

### deleteConversationProfile

Deletes the specified conversation profile.

**Parameters**

**Name**

**Description**

`name`

`string`  

Required. The name of the conversation profile to delete. Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;

/**
 * @param string $formattedName The name of the conversation profile to delete.
 *                              Format: `projects/<Project ID>/locations/<Location
 *                              ID>/conversationProfiles/<Conversation Profile ID>`. Please see
 *                              {@see ConversationProfilesClient::conversationProfileName()} for help formatting this field.
 */
function delete_conversation_profile_sample(string $formattedName): void
{
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Call the API and handle any network failures.
    try {
        $conversationProfilesClient->deleteConversationProfile($formattedName);
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
    $formattedName = ConversationProfilesClient::conversationProfileName(
        '[PROJECT]',
        '[CONVERSATION_PROFILE]'
    );

    delete_conversation_profile_sample($formattedName);
}
```

### getConversationProfile

Retrieves the specified conversation profile.

**Parameters**

**Name**

**Description**

`name`

`string`  

Required. The resource name of the conversation profile. Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\ConversationProfile;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;

/**
 * @param string $formattedName The resource name of the conversation profile.
 *                              Format: `projects/<Project ID>/locations/<Location
 *                              ID>/conversationProfiles/<Conversation Profile ID>`. Please see
 *                              {@see ConversationProfilesClient::conversationProfileName()} for help formatting this field.
 */
function get_conversation_profile_sample(string $formattedName): void
{
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Call the API and handle any network failures.
    try {
        /** @var ConversationProfile $response */
        $response = $conversationProfilesClient->getConversationProfile($formattedName);
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
    $formattedName = ConversationProfilesClient::conversationProfileName(
        '[PROJECT]',
        '[CONVERSATION_PROFILE]'
    );

    get_conversation_profile_sample($formattedName);
}
```

### listConversationProfiles

Returns the list of all conversation profiles in the specified project.

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The project to list all conversation profiles from. Format: `projects/<Project ID>/locations/<Location ID>`.

`optionalArgs`

`array`  

Optional.

`↳ pageSize`

`int`  

The maximum number of resources contained in the underlying API response. The API may return fewer values in a page, even if there are additional values to be retrieved.

`↳ pageToken`

`string`  

A page token is used to specify a page of values to be returned. If no page token is specified (the default), the first page of values will be returned. Any page token used here must have been generated by a previous call to the API.

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
use Google\Cloud\Dialogflow\V2\ConversationProfile;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;

/**
 * @param string $formattedParent The project to list all conversation profiles from.
 *                                Format: `projects/<Project ID>/locations/<Location ID>`. Please see
 *                                {@see ConversationProfilesClient::projectName()} for help formatting this field.
 */
function list_conversation_profiles_sample(string $formattedParent): void
{
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $conversationProfilesClient->listConversationProfiles($formattedParent);

        /** @var ConversationProfile $element */
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
    $formattedParent = ConversationProfilesClient::projectName('[PROJECT]');

    list_conversation_profiles_sample($formattedParent);
}
```

### setSuggestionFeatureConfig

Adds or updates a suggestion feature in a conversation profile.

If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

-   `metadata`: [SetSuggestionFeatureConfigOperationMetadata](/php/docs/reference/cloud-dialogflow/1.5.0/V2.SetSuggestionFeatureConfigOperationMetadata)
-   `response`: [ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)

If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.

**Parameters**

**Name**

**Description**

`conversationProfile`

`string`  

Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

`participantRole`

`int`  

Required. The participant role to add or update the suggestion feature config. Only HUMAN\_AGENT or END\_USER can be used. For allowed values, use constants defined on [Google\\Cloud\\Dialogflow\\V2\\Participant\\Role](/php/docs/reference/cloud-dialogflow/1.5.0/V2.Participant.Role)

`suggestionFeatureConfig`

`[Google\Cloud\Dialogflow\V2\HumanAgentAssistantConfig\SuggestionFeatureConfig](/php/docs/reference/cloud-dialogflow/1.5.0/V2.HumanAgentAssistantConfig.SuggestionFeatureConfig)`  

Required. The suggestion feature config to add or update.

`optionalArgs`

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
use Google\Cloud\Dialogflow\V2\ConversationProfile;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;
use Google\Cloud\Dialogflow\V2\HumanAgentAssistantConfig\SuggestionFeatureConfig;
use Google\Cloud\Dialogflow\V2\Participant\Role;
use Google\Rpc\Status;

/**
 * @param string $conversationProfile The Conversation Profile to add or update the suggestion feature
 *                                    config. Format: `projects/<Project ID>/locations/<Location
 *                                    ID>/conversationProfiles/<Conversation Profile ID>`.
 * @param int    $participantRole     The participant role to add or update the suggestion feature
 *                                    config. Only HUMAN_AGENT or END_USER can be used.
 */
function set_suggestion_feature_config_sample(
    string $conversationProfile,
    int $participantRole
): void {
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $suggestionFeatureConfig = new SuggestionFeatureConfig();

    // Call the API and handle any network failures.
    try {
        /** @var OperationResponse $response */
        $response = $conversationProfilesClient->setSuggestionFeatureConfig(
            $conversationProfile,
            $participantRole,
            $suggestionFeatureConfig
        );
        $response->pollUntilComplete();

        if ($response->operationSucceeded()) {
            /** @var ConversationProfile $result */
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
    $conversationProfile = '[CONVERSATION_PROFILE]';
    $participantRole = Role::ROLE_UNSPECIFIED;

    set_suggestion_feature_config_sample($conversationProfile, $participantRole);
}
```

### updateConversationProfile

Updates the specified conversation profile.

ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via [GetConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfilesClient#_Google_Cloud_Dialogflow_V2_ConversationProfilesClient__getConversationProfile__) API.

**Parameters**

**Name**

**Description**

`conversationProfile`

`[Google\Cloud\Dialogflow\V2\ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)`  

Required. The conversation profile to update.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The mask to control which fields to update.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\ConversationProfile](/php/docs/reference/cloud-dialogflow/1.5.0/V2.ConversationProfile)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Dialogflow\V2\ConversationProfile;
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;
use Google\Protobuf\FieldMask;

/**
 * @param string $conversationProfileDisplayName Human readable name for this profile. Max length 1024 bytes.
 */
function update_conversation_profile_sample(string $conversationProfileDisplayName): void
{
    // Create a client.
    $conversationProfilesClient = new ConversationProfilesClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $conversationProfile = (new ConversationProfile())
        ->setDisplayName($conversationProfileDisplayName);
    $updateMask = new FieldMask();

    // Call the API and handle any network failures.
    try {
        /** @var ConversationProfile $response */
        $response = $conversationProfilesClient->updateConversationProfile(
            $conversationProfile,
            $updateMask
        );
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
    $conversationProfileDisplayName = '[DISPLAY_NAME]';

    update_conversation_profile_sample($conversationProfileDisplayName);
}
```

### getLocation

Gets information about a location.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ name`

`string`  

Resource name for the location.

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
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;
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
    $conversationProfilesClient = new ConversationProfilesClient();

    // Call the API and handle any network failures.
    try {
        /** @var Location $response */
        $response = $conversationProfilesClient->getLocation();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### listLocations

Lists information about the supported locations for this service.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ name`

`string`  

The resource that owns the locations collection, if applicable.

`↳ filter`

`string`  

The standard list filter.

`↳ pageSize`

`int`  

The maximum number of resources contained in the underlying API response. The API may return fewer values in a page, even if there are additional values to be retrieved.

`↳ pageToken`

`string`  

A page token is used to specify a page of values to be returned. If no page token is specified (the default), the first page of values will be returned. Any page token used here must have been generated by a previous call to the API.

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
use Google\Cloud\Dialogflow\V2\ConversationProfilesClient;
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
    $conversationProfilesClient = new ConversationProfilesClient();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $conversationProfilesClient->listLocations();

        /** @var Location $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

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

### static::agentName

Formats a string containing the fully-qualified path to represent a agent resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted agent resource.

### static::cXSecuritySettingsName

Formats a string containing the fully-qualified path to represent a cx\_security\_settings resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`securitySettings`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted cx\_security\_settings resource.

### static::conversationModelName

Formats a string containing the fully-qualified path to represent a conversation\_model resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversationModel`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted conversation\_model resource.

### static::conversationProfileName

Formats a string containing the fully-qualified path to represent a conversation\_profile resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`conversationProfile`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted conversation\_profile resource.

### static::documentName

Formats a string containing the fully-qualified path to represent a document resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`knowledgeBase`

`string`  

`document`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted document resource.

### static::knowledgeBaseName

Formats a string containing the fully-qualified path to represent a knowledge\_base resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`knowledgeBase`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted knowledge\_base resource.

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

### static::projectName

Formats a string containing the fully-qualified path to represent a project resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project resource.

### static::projectAgentName

Formats a string containing the fully-qualified path to represent a project\_agent resource.

**Parameter**

**Name**

**Description**

`project`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_agent resource.

### static::projectConversationModelName

Formats a string containing the fully-qualified path to represent a project\_conversation\_model resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`conversationModel`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_conversation\_model resource.

### static::projectConversationProfileName

Formats a string containing the fully-qualified path to represent a project\_conversation\_profile resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`conversationProfile`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_conversation\_profile resource.

### static::projectKnowledgeBaseName

Formats a string containing the fully-qualified path to represent a project\_knowledge\_base resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`knowledgeBase`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_knowledge\_base resource.

### static::projectKnowledgeBaseDocumentName

Formats a string containing the fully-qualified path to represent a project\_knowledge\_base\_document resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`knowledgeBase`

`string`  

`document`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_knowledge\_base\_document resource.

### static::projectLocationAgentName

Formats a string containing the fully-qualified path to represent a project\_location\_agent resource.

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

The formatted project\_location\_agent resource.

### static::projectLocationConversationModelName

Formats a string containing the fully-qualified path to represent a project\_location\_conversation\_model resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`conversationModel`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_location\_conversation\_model resource.

### static::projectLocationConversationProfileName

Formats a string containing the fully-qualified path to represent a project\_location\_conversation\_profile resource.

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

The formatted project\_location\_conversation\_profile resource.

### static::projectLocationKnowledgeBaseName

Formats a string containing the fully-qualified path to represent a project\_location\_knowledge\_base resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`knowledgeBase`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_location\_knowledge\_base resource.

### static::projectLocationKnowledgeBaseDocumentName

Formats a string containing the fully-qualified path to represent a project\_location\_knowledge\_base\_document resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`location`

`string`  

`knowledgeBase`

`string`  

`document`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_location\_knowledge\_base\_document resource.

### static::parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   agent: projects/{project}/agent
-   cXSecuritySettings: projects/{project}/locations/{location}/securitySettings/{security\_settings}
-   conversationModel: projects/{project}/locations/{location}/conversationModels/{conversation\_model}
-   conversationProfile: projects/{project}/conversationProfiles/{conversation\_profile}
-   document: projects/{project}/knowledgeBases/{knowledge\_base}/documents/{document}
-   knowledgeBase: projects/{project}/knowledgeBases/{knowledge\_base}
-   location: projects/{project}/locations/{location}
-   project: projects/{project}
-   projectAgent: projects/{project}/agent
-   projectConversationModel: projects/{project}/conversationModels/{conversation\_model}
-   projectConversationProfile: projects/{project}/conversationProfiles/{conversation\_profile}
-   projectKnowledgeBase: projects/{project}/knowledgeBases/{knowledge\_base}
-   projectKnowledgeBaseDocument: projects/{project}/knowledgeBases/{knowledge\_base}/documents/{document}
-   projectLocationAgent: projects/{project}/locations/{location}/agent
-   projectLocationConversationModel: projects/{project}/locations/{location}/conversationModels/{conversation\_model}
-   projectLocationConversationProfile: projects/{project}/locations/{location}/conversationProfiles/{conversation\_profile}
-   projectLocationKnowledgeBase: projects/{project}/locations/{location}/knowledgeBases/{knowledge\_base}
-   projectLocationKnowledgeBaseDocument: projects/{project}/locations/{location}/knowledgeBases/{knowledge\_base}/documents/{document}

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

## Constants

### SERVICE\_NAME

```
Value: 'google.cloud.dialogflow.v2.ConversationProfiles'
```

The name of the service.

### SERVICE\_ADDRESS

```
Value: 'dialogflow.googleapis.com'
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

Last updated 2026-03-18 UTC.
