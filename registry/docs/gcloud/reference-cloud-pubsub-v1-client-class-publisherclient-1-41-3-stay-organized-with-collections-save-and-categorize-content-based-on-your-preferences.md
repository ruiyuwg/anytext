-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud PubSub V1 Client - Class PublisherClient (1.41.3) Stay organized with collections Save and categorize content based on your preferences.

2.19.1 (latest) 2.19.0 2.18.0 2.17.0 2.16.2 2.15.1 2.14.0 2.13.2 2.12.0 2.11.3 2.10.1 2.9.1 2.8.2 2.7.0 2.6.0 2.5.2 2.4.0 2.3.0 2.2.1 2.1.2 1.50.0 1.49.0 1.48.0 1.47.0 1.46.5 1.45.2 1.44.0 1.43.2 1.42.1 1.41.3 1.40.1 1.39.3

Reference documentation and code samples for the Cloud PubSub V1 Client class PublisherClient.

Service Description: The service that an application uses to manipulate topics, and to send messages to a topic.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

```
$publisherClient = new PublisherClient();
try {
    $name = 'name';
    $response = $publisherClient->createTopic($name);
} finally {
    $publisherClient->close();
}
```

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parseName method to extract the individual identifiers contained within formatted names that are returned by the API.

## Methods

### deletedTopicName

Formats a string containing the fully-qualified path to represent a _deleted-topic_ resource.

**Returns**

**Type**

**Description**

`string`

The formatted \_deleted-topic\_ resource.

### projectName

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

### projectTopicName

Formats a string containing the fully-qualified path to represent a project\_topic resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`topic`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted project\_topic resource.

### schemaName

Formats a string containing the fully-qualified path to represent a schema resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`schema`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted schema resource.

### subscriptionName

Formats a string containing the fully-qualified path to represent a subscription resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`subscription`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted subscription resource.

### topicName

Formats a string containing the fully-qualified path to represent a topic resource.

**Parameters**

**Name**

**Description**

`project`

`string`  

`topic`

`string`  

**Returns**

**Type**

**Description**

`string`

The formatted topic resource.

### parseName

Parses a formatted name string and returns an associative array of the components in the name.

The following name formats are supported: Template: Pattern

-   deletedTopic: _deleted-topic_
-   project: projects/{project}
-   projectTopic: projects/{project}/topics/{topic}
-   schema: projects/{project}/schemas/{schema}
-   subscription: projects/{project}/subscriptions/{subscription}
-   topic: projects/{project}/topics/{topic}

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

### createTopic

Creates the given topic with the given name. See the [resource name rules](https://cloud.google.com/pubsub/docs/admin#resource_names).

**Parameters**

**Name**

**Description**

`name`

`string`  

Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.

`optionalArgs`

`array`  

Optional.

`↳ labels`

`array`  

See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`↳ messageStoragePolicy`

`MessageStoragePolicy`  

Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.

`↳ kmsKeyName`

`string`  

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.

`↳ schemaSettings`

`SchemaSettings`  

Settings for validating messages published against a schema.

`↳ satisfiesPzs`

`bool`  

Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.

`↳ messageRetentionDuration`

`Duration`  

Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\PubSub\V1\Topic](/php/docs/reference/cloud-pubsub/1.41.3/V1.Topic)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\PubSub\V1\PublisherClient;
use Google\Cloud\PubSub\V1\Topic;

/**
 * @param string $name The name of the topic. It must have the format
 *                     `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
 *                     and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
 *                     underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
 *                     signs (`%`). It must be between 3 and 255 characters in length, and it
 *                     must not start with `"goog"`.
 */
function create_topic_sample(string $name): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var Topic $response */
        $response = $publisherClient->createTopic($name);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $name = '[NAME]';

    create_topic_sample($name);
}
```

### deleteTopic

Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.

**Parameters**

**Name**

**Description**

`topic`

`string`  

Required. Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\PubSub\V1\PublisherClient;

/**
 * @param string $formattedTopic Name of the topic to delete.
 *                               Format is `projects/{project}/topics/{topic}`. Please see
 *                               {@see PublisherClient::topicName()} for help formatting this field.
 */
function delete_topic_sample(string $formattedTopic): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        $publisherClient->deleteTopic($formattedTopic);
        printf('Call completed successfully.' . PHP_EOL);
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedTopic = PublisherClient::topicName('[PROJECT]', '[TOPIC]');

    delete_topic_sample($formattedTopic);
}
```

### detachSubscription

Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED\_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.

**Parameters**

**Name**

**Description**

`subscription`

`string`  

Required. The subscription to detach. Format is `projects/{project}/subscriptions/{subscription}`.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\PubSub\V1\DetachSubscriptionResponse](/php/docs/reference/cloud-pubsub/1.41.3/V1.DetachSubscriptionResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\PubSub\V1\DetachSubscriptionResponse;
use Google\Cloud\PubSub\V1\PublisherClient;

/**
 * @param string $formattedSubscription The subscription to detach.
 *                                      Format is `projects/{project}/subscriptions/{subscription}`. Please see
 *                                      {@see PublisherClient::subscriptionName()} for help formatting this field.
 */
function detach_subscription_sample(string $formattedSubscription): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var DetachSubscriptionResponse $response */
        $response = $publisherClient->detachSubscription($formattedSubscription);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedSubscription = PublisherClient::subscriptionName('[PROJECT]', '[SUBSCRIPTION]');

    detach_subscription_sample($formattedSubscription);
}
```

### getTopic

Gets the configuration of a topic.

**Parameters**

**Name**

**Description**

`topic`

`string`  

Required. The name of the topic to get. Format is `projects/{project}/topics/{topic}`.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\PubSub\V1\Topic](/php/docs/reference/cloud-pubsub/1.41.3/V1.Topic)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\PubSub\V1\PublisherClient;
use Google\Cloud\PubSub\V1\Topic;

/**
 * @param string $formattedTopic The name of the topic to get.
 *                               Format is `projects/{project}/topics/{topic}`. Please see
 *                               {@see PublisherClient::topicName()} for help formatting this field.
 */
function get_topic_sample(string $formattedTopic): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var Topic $response */
        $response = $publisherClient->getTopic($formattedTopic);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedTopic = PublisherClient::topicName('[PROJECT]', '[TOPIC]');

    get_topic_sample($formattedTopic);
}
```

### listTopicSnapshots

Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.

**Parameters**

**Name**

**Description**

`topic`

`string`  

Required. The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`.

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
use Google\Cloud\PubSub\V1\PublisherClient;

/**
 * @param string $formattedTopic The name of the topic that snapshots are attached to.
 *                               Format is `projects/{project}/topics/{topic}`. Please see
 *                               {@see PublisherClient::topicName()} for help formatting this field.
 */
function list_topic_snapshots_sample(string $formattedTopic): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $publisherClient->listTopicSnapshots($formattedTopic);

        /** @var string $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element);
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedTopic = PublisherClient::topicName('[PROJECT]', '[TOPIC]');

    list_topic_snapshots_sample($formattedTopic);
}
```

### listTopicSubscriptions

Lists the names of the attached subscriptions on this topic.

**Parameters**

**Name**

**Description**

`topic`

`string`  

Required. The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`.

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
use Google\Cloud\PubSub\V1\PublisherClient;

/**
 * @param string $formattedTopic The name of the topic that subscriptions are attached to.
 *                               Format is `projects/{project}/topics/{topic}`. Please see
 *                               {@see PublisherClient::topicName()} for help formatting this field.
 */
function list_topic_subscriptions_sample(string $formattedTopic): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $publisherClient->listTopicSubscriptions($formattedTopic);

        /** @var string $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element);
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedTopic = PublisherClient::topicName('[PROJECT]', '[TOPIC]');

    list_topic_subscriptions_sample($formattedTopic);
}
```

### listTopics

Lists matching topics.

**Parameters**

**Name**

**Description**

`project`

`string`  

Required. The name of the project in which to list topics. Format is `projects/{project-id}`.

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
use Google\Cloud\PubSub\V1\PublisherClient;
use Google\Cloud\PubSub\V1\Topic;

/**
 * @param string $formattedProject The name of the project in which to list topics.
 *                                 Format is `projects/{project-id}`. Please see
 *                                 {@see PublisherClient::projectName()} for help formatting this field.
 */
function list_topics_sample(string $formattedProject): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var PagedListResponse $response */
        $response = $publisherClient->listTopics($formattedProject);

        /** @var Topic $element */
        foreach ($response as $element) {
            printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
        }
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedProject = PublisherClient::projectName('[PROJECT]');

    list_topics_sample($formattedProject);
}
```

### publish

Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.

**Parameters**

**Name**

**Description**

`topic`

`string`  

Required. The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`.

`messages`

`array<[Google\Cloud\PubSub\V1\PubsubMessage](/php/docs/reference/cloud-pubsub/1.41.3/V1.PubsubMessage)>`  

Required. The messages to publish.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\PubSub\V1\PublishResponse](/php/docs/reference/cloud-pubsub/1.41.3/V1.PublishResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\PubSub\V1\PublishResponse;
use Google\Cloud\PubSub\V1\PublisherClient;
use Google\Cloud\PubSub\V1\PubsubMessage;

/**
 * @param string $formattedTopic The messages in the request will be published on this topic.
 *                               Format is `projects/{project}/topics/{topic}`. Please see
 *                               {@see PublisherClient::topicName()} for help formatting this field.
 */
function publish_sample(string $formattedTopic): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $messages = [new PubsubMessage()];

    // Call the API and handle any network failures.
    try {
        /** @var PublishResponse $response */
        $response = $publisherClient->publish($formattedTopic, $messages);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $formattedTopic = PublisherClient::topicName('[PROJECT]', '[TOPIC]');

    publish_sample($formattedTopic);
}
```

### updateTopic

Updates an existing topic. Note that certain properties of a topic are not modifiable.

**Parameters**

**Name**

**Description**

`topic`

`[Google\Cloud\PubSub\V1\Topic](/php/docs/reference/cloud-pubsub/1.41.3/V1.Topic)`  

Required. The updated topic object.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. Indicates which fields in the provided topic to update. Must be specified and non-empty. Note that if `update_mask` contains "message\_storage\_policy" but the `message_storage_policy` is not set in the `topic` provided above, then the updated value is determined by the policy configured at the project or organization level.

`optionalArgs`

`array`  

Optional.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\PubSub\V1\Topic](/php/docs/reference/cloud-pubsub/1.41.3/V1.Topic)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\PubSub\V1\PublisherClient;
use Google\Cloud\PubSub\V1\Topic;
use Google\Protobuf\FieldMask;

/**
 * @param string $topicName The name of the topic. It must have the format
 *                          `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
 *                          and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
 *                          underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
 *                          signs (`%`). It must be between 3 and 255 characters in length, and it
 *                          must not start with `"goog"`.
 */
function update_topic_sample(string $topicName): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $topic = (new Topic())
        ->setName($topicName);
    $updateMask = new FieldMask();

    // Call the API and handle any network failures.
    try {
        /** @var Topic $response */
        $response = $publisherClient->updateTopic($topic, $updateMask);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function callSample(): void
{
    $topicName = '[NAME]';

    update_topic_sample($topicName);
}
```

### getIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

**Parameters**

**Name**

**Description**

`resource`

`string`  

REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.

`optionalArgs`

`array`  

Optional.

`↳ options`

`GetPolicyOptions`  

OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.

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
use Google\Cloud\PubSub\V1\PublisherClient;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being requested.
 *                         See the operation documentation for the appropriate value for this field.
 */
function get_iam_policy_sample(string $resource): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $publisherClient->getIamPolicy($resource);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
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

**Parameters**

**Name**

**Description**

`resource`

`string`  

REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.

`policy`

`[Google\Cloud\Iam\V1\Policy](https://googleapis.github.io/common-protos-php#Google/Cloud/Iam/V1/Policy)`  

REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.

`optionalArgs`

`array`  

Optional.

`↳ updateMask`

`FieldMask`  

OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

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
use Google\Cloud\PubSub\V1\PublisherClient;

/**
 * @param string $resource REQUIRED: The resource for which the policy is being specified.
 *                         See the operation documentation for the appropriate value for this field.
 */
function set_iam_policy_sample(string $resource): void
{
    // Create a client.
    $publisherClient = new PublisherClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $policy = new Policy();

    // Call the API and handle any network failures.
    try {
        /** @var Policy $response */
        $response = $publisherClient->setIamPolicy($resource, $policy);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
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

**Parameters**

**Name**

**Description**

`resource`

`string`  

REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.

`permissions`

`string[]`  

The set of permissions to check for the `resource`. Permissions with wildcards (such as '_' or 'storage._') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).

`optionalArgs`

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
use Google\Cloud\Iam\V1\TestIamPermissionsResponse;
use Google\Cloud\PubSub\V1\PublisherClient;

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
    $publisherClient = new PublisherClient();

    // Prepare any non-scalar elements to be passed along with the request.
    $permissions = [$permissionsElement,];

    // Call the API and handle any network failures.
    try {
        /** @var TestIamPermissionsResponse $response */
        $response = $publisherClient->testIamPermissions($resource, $permissions);
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}

/**
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

## Constants

### SERVICE\_NAME

```
Value: 'google.pubsub.v1.Publisher'
```

The name of the service.

### SERVICE\_ADDRESS

```
Value: 'pubsub.googleapis.com'
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
