-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class NetworkFirewallPoliciesClient (1.10.1) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Compute V1 Client class NetworkFirewallPoliciesClient.

Service Description: The NetworkFirewallPolicies API.

This class is currently experimental and may be subject to changes.

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

### addAssociation

Inserts an association for the specified firewall policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::addAssociationAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AddAssociationNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.AddAssociationNetworkFirewallPolicyRequest)`  

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

### addRule

Inserts a rule into a firewall policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::addRuleAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AddRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.AddRuleNetworkFirewallPolicyRequest)`  

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

### cloneRules

Copies rules to the specified firewall policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::cloneRulesAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\CloneRulesNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.CloneRulesNetworkFirewallPolicyRequest)`  

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

### delete

Deletes the specified policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::deleteAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.DeleteNetworkFirewallPolicyRequest)`  

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

Returns the specified network firewall policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::getAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\FirewallPolicy](/php/docs/reference/cloud-compute/1.10.1/V1.FirewallPolicy)`

### getAssociation

Gets an association with the specified name.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::getAssociationAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetAssociationNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetAssociationNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\FirewallPolicyAssociation](/php/docs/reference/cloud-compute/1.10.1/V1.FirewallPolicyAssociation)`

### getIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::getIamPolicyAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetIamPolicyNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetIamPolicyNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/1.10.1/V1.Policy)`

### getRule

Gets a rule of the specified priority.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::getRuleAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetRuleNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\FirewallPolicyRule](/php/docs/reference/cloud-compute/1.10.1/V1.FirewallPolicyRule)`

### insert

Creates a new policy in the specified project using the data included in the request.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::insertAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.InsertNetworkFirewallPolicyRequest)`  

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

Lists all the policies that have been configured for the specified project.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::listAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListNetworkFirewallPoliciesRequest](/php/docs/reference/cloud-compute/1.10.1/V1.ListNetworkFirewallPoliciesRequest)`  

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

### patch

Patches the specified policy with the data included in the request.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::patchAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\PatchNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.PatchNetworkFirewallPolicyRequest)`  

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

### patchRule

Patches a rule of the specified priority.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::patchRuleAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\PatchRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.PatchRuleNetworkFirewallPolicyRequest)`  

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

### removeAssociation

Removes an association for the specified firewall policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::removeAssociationAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\RemoveAssociationNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.RemoveAssociationNetworkFirewallPolicyRequest)`  

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

### removeRule

Deletes a rule of the specified priority.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::removeRuleAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\RemoveRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.RemoveRuleNetworkFirewallPolicyRequest)`  

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

### setIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::setIamPolicyAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\SetIamPolicyNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.SetIamPolicyNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\Policy](/php/docs/reference/cloud-compute/1.10.1/V1.Policy)`

### testIamPermissions

Returns permissions that a caller has on the specified resource.

The async variant is Google\\Cloud\\Compute\\V1\\Client\\BaseClient\\self::testIamPermissionsAsync() .

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\TestIamPermissionsNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.TestIamPermissionsNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\TestPermissionsResponse](/php/docs/reference/cloud-compute/1.10.1/V1.TestPermissionsResponse)`

### addAssociationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AddAssociationNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.AddAssociationNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### addRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\AddRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.AddRuleNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### cloneRulesAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\CloneRulesNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.CloneRulesNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### deleteAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\DeleteNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.DeleteNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getAssociationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetAssociationNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetAssociationNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\GetIamPolicyNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetIamPolicyNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\GetRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.GetRuleNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### insertAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\InsertNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.InsertNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### listAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\ListNetworkFirewallPoliciesRequest](/php/docs/reference/cloud-compute/1.10.1/V1.ListNetworkFirewallPoliciesRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### patchAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\PatchNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.PatchNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### patchRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\PatchRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.PatchRuleNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### removeAssociationAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\RemoveAssociationNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.RemoveAssociationNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### removeRuleAsync

**Parameters**

**Name**

**Description**

`request`

`[Google\Cloud\Compute\V1\RemoveRuleNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.RemoveRuleNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\SetIamPolicyNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.SetIamPolicyNetworkFirewallPolicyRequest)`  

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

`[Google\Cloud\Compute\V1\TestIamPermissionsNetworkFirewallPolicyRequest](/php/docs/reference/cloud-compute/1.10.1/V1.TestIamPermissionsNetworkFirewallPolicyRequest)`  

`optionalArgs = []`

`array`  

**Returns**

**Type**

**Description**

`GuzzleHttp\Promise\PromiseInterface`

### getOperationsClient

Return an GlobalOperationsClient object with the same endpoint as $this.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\GlobalOperationsClient](/php/docs/reference/cloud-compute/1.10.1/V1.GlobalOperationsClient)`

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
