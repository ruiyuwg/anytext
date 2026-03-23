-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1beta4 Client - Class SqlDatabasesServiceClient (0.3.1) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Sql Admin V1beta4 Client class SqlDatabasesServiceClient.

Service Description:

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

```
$sqlDatabasesServiceClient = new SqlDatabasesServiceClient();
try {
    $response = $sqlDatabasesServiceClient->delete();
} finally {
    $sqlDatabasesServiceClient->close();
}
```

## Namespace

Google \\ Cloud \\ Sql \\ V1beta4

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

### delete

Deletes a database from a Cloud SQL instance.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ database`

`string`  

Name of the database to be deleted in the instance.

`↳ instance`

`string`  

Database instance ID. This does not include the project ID.

`↳ project`

`string`  

Project ID of the project that contains the instance.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Sql\V1beta4\Operation](/php/docs/reference/cloud-sql-admin/0.3.1/V1beta4.Operation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Sql\V1beta4\Operation;
use Google\Cloud\Sql\V1beta4\SqlDatabasesServiceClient;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function delete_sample(): void
{
    // Create a client.
    $sqlDatabasesServiceClient = new SqlDatabasesServiceClient();

    // Call the API and handle any network failures.
    try {
        /** @var Operation $response */
        $response = $sqlDatabasesServiceClient->delete();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### get

Retrieves a resource containing information about a database inside a Cloud SQL instance.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ database`

`string`  

Name of the database in the instance.

`↳ instance`

`string`  

Database instance ID. This does not include the project ID.

`↳ project`

`string`  

Project ID of the project that contains the instance.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Sql\V1beta4\Database](/php/docs/reference/cloud-sql-admin/0.3.1/V1beta4.Database)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Sql\V1beta4\Database;
use Google\Cloud\Sql\V1beta4\SqlDatabasesServiceClient;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function get_sample(): void
{
    // Create a client.
    $sqlDatabasesServiceClient = new SqlDatabasesServiceClient();

    // Call the API and handle any network failures.
    try {
        /** @var Database $response */
        $response = $sqlDatabasesServiceClient->get();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### insert

Inserts a resource containing information about a database inside a Cloud SQL instance.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ instance`

`string`  

Database instance ID. This does not include the project ID.

`↳ project`

`string`  

Project ID of the project that contains the instance.

`↳ body`

`Database`  

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Sql\V1beta4\Operation](/php/docs/reference/cloud-sql-admin/0.3.1/V1beta4.Operation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Sql\V1beta4\Operation;
use Google\Cloud\Sql\V1beta4\SqlDatabasesServiceClient;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function insert_sample(): void
{
    // Create a client.
    $sqlDatabasesServiceClient = new SqlDatabasesServiceClient();

    // Call the API and handle any network failures.
    try {
        /** @var Operation $response */
        $response = $sqlDatabasesServiceClient->insert();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### list

Lists databases in the specified Cloud SQL instance.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ instance`

`string`  

Cloud SQL instance ID. This does not include the project ID.

`↳ project`

`string`  

Project ID of the project that contains the instance.

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Sql\V1beta4\DatabasesListResponse](/php/docs/reference/cloud-sql-admin/0.3.1/V1beta4.DatabasesListResponse)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Sql\V1beta4\DatabasesListResponse;
use Google\Cloud\Sql\V1beta4\SqlDatabasesServiceClient;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function list_sample(): void
{
    // Create a client.
    $sqlDatabasesServiceClient = new SqlDatabasesServiceClient();

    // Call the API and handle any network failures.
    try {
        /** @var DatabasesListResponse $response */
        $response = $sqlDatabasesServiceClient->list();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### patch

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ database`

`string`  

Name of the database to be updated in the instance.

`↳ instance`

`string`  

Database instance ID. This does not include the project ID.

`↳ project`

`string`  

Project ID of the project that contains the instance.

`↳ body`

`Database`  

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Sql\V1beta4\Operation](/php/docs/reference/cloud-sql-admin/0.3.1/V1beta4.Operation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Sql\V1beta4\Operation;
use Google\Cloud\Sql\V1beta4\SqlDatabasesServiceClient;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function patch_sample(): void
{
    // Create a client.
    $sqlDatabasesServiceClient = new SqlDatabasesServiceClient();

    // Call the API and handle any network failures.
    try {
        /** @var Operation $response */
        $response = $sqlDatabasesServiceClient->patch();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

### update

Updates a resource containing information about a database inside a Cloud SQL instance.

**Parameters**

**Name**

**Description**

`optionalArgs`

`array`  

Optional.

`↳ database`

`string`  

Name of the database to be updated in the instance.

`↳ instance`

`string`  

Database instance ID. This does not include the project ID.

`↳ project`

`string`  

Project ID of the project that contains the instance.

`↳ body`

`Database`  

`↳ retrySettings`

`RetrySettings|array`  

Retry settings to use for this call. Can be a [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) object, or an associative array of retry settings parameters. See the documentation on [Google\\ApiCore\\RetrySettings](https://googleapis.github.io/gax-php#Google/ApiCore/RetrySettings) for example usage.

**Returns**

**Type**

**Description**

`[Google\Cloud\Sql\V1beta4\Operation](/php/docs/reference/cloud-sql-admin/0.3.1/V1beta4.Operation)`

**Example**

```
use Google\ApiCore\ApiException;
use Google\Cloud\Sql\V1beta4\Operation;
use Google\Cloud\Sql\V1beta4\SqlDatabasesServiceClient;

/**
 * This sample has been automatically generated and should be regarded as a code
 * template only. It will require modifications to work:
 *  - It may require correct/in-range values for request initialization.
 *  - It may require specifying regional endpoints when creating the service client,
 *    please see the apiEndpoint client configuration option for more details.
 */
function update_sample(): void
{
    // Create a client.
    $sqlDatabasesServiceClient = new SqlDatabasesServiceClient();

    // Call the API and handle any network failures.
    try {
        /** @var Operation $response */
        $response = $sqlDatabasesServiceClient->update();
        printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
    } catch (ApiException $ex) {
        printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
    }
}
```

## Constants

### SERVICE\_NAME

```
Value: 'google.cloud.sql.v1beta4.SqlDatabasesService'
```

The name of the service.

### SERVICE\_ADDRESS

```
Value: 'sqladmin.googleapis.com'
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
