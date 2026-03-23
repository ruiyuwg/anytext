You can call the BatchSetCdnDomainConfig operation to configure multiple domain names in a batch.

## Operation description

-   The call frequency for a single user is limited to 3 calls per second.
    
-   You can configure up to 50 domain names in a batch. Separate the domain names with commas (,).
    
-   When you call the BatchSetCdnDomainConfig operation to configure features for a domain name, a unique ConfigId is generated. You can use the ConfigId to update or delete configurations. For more information, see [Query and use a ConfigId](/help/en/cdn/developer-reference/usage-notes-on-configid).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/BatchSetCdnDomainConfig)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/BatchSetCdnDomainConfig)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cdn:BatchSetCdnDomainConfig

update

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainNames}`

None

-   ram:CreateServiceLinkedRole

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DomainNames

string

Yes

The accelerated domain names. Separate multiple domain names with commas (,). Note the following limits:

-   You can specify up to 50 domain names at a time.
    
-   The number of domain names × the number of features must be less than or equal to 50.
    

www.example.com

Functions

string

Yes

A list of features. You can specify up to 50 features at a time. The format is as follows:

-   **functionName** (The feature name. Required.): For a list of configurable features, see [Features](/help/en/cdn/developer-reference/parameters-for-configuring-features-for-domain-names). Separate multiple parameters with commas (,).
    
-   **argName** (The parameter name. Required.): A configuration item for **functionName**. You can configure multiple items.
    
-   **argValue** (The parameter value. Required.): The value of the configuration item for **functionName**.
    
-   **parentid** (The rule condition ID. Optional.): You can create conditional rules by configuring the **condition** feature (rules engine). Conditional rules match and filter user requests by detecting various parameters in the requests. For more information about the **condition** feature, see Parameters for domain name configuration features. After a conditional rule is created, a corresponding [configid](/help/en/cdn/developer-reference/usage-notes-on-configid) is generated. Other features can reference this configid as the ParentId parameter. This lets you combine conditional rules with feature configurations for more flexible settings.
    

If you set **parentId** to **\-1**, the existing conditional rule in the configuration is deleted.

```
   "functionArgs": [{
     "argName": "Parameter A", 
     "argValue": "Value of Parameter A"
    }, 
  {
    "argName": "Parameter B", 
    "argValue": "Value of Parameter B"
     }], 
 "functionName": "Feature name",
 "parentId": Optional. The configid of the referenced conditional rule.
}]
```

The following example shows a configuration that does not use **parentId**. The **origin\_request\_header** feature is used to add an origin-fetch HTTP header.

```
        "functionArgs": [{
            "argName": "header_operation_type",
            "argValue": "add"
        }, {
            "argName": "header_name",
            "argValue": "Accept-Encoding"
        }, {
            "argName": "header_value",
            "argValue": "gzip"
        }, {
            "argName": "duplicate",
            "argValue": "off"
        }],
        "functionName": "origin_request_header"
}]
```

The following example shows a configuration that uses **parentId**. The **origin\_request\_header** feature is used to add an origin-fetch HTTP header and references the conditional rule with **configid=222728944812032**.

```
        "functionArgs": [{
            "argName": "header_operation_type",
            "argValue": "add"
        }, {
            "argName": "header_name",
            "argValue": "Accept-Encoding"
        }, {
            "argName": "header_value",
            "argValue": "gzip"
        }, {
            "argName": "duplicate",
            "argValue": "off"
        }],
        "functionName": "origin_request_header",
        "parentId": 222728944812032
}]
```

The following example shows how to remove a reference to a conditional rule. The **origin\_request\_header** feature already references the conditional rule with **configid=222728944812032**. To remove the reference, set **parentId** to **\-1**.

```
        "functionArgs": [{
            "argName": "header_operation_type",
            "argValue": "add"
        }, {
            "argName": "header_name",
            "argValue": "Accept-Encoding"
        }, {
            "argName": "header_value",
            "argValue": "gzip"
        }, {
            "argName": "duplicate",
            "argValue": "off"
        }],
        "functionName": "origin_request_header",
        "parentId": -1
}]
```

\[{"functionArgs": \[{"argName": "key","argValue": "Content-Encoding"},{"argName": "value","argValue": "gzip"}\],"functionName": "set\_resp\_header"} \]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

DomainConfigList

object

DomainConfigModel

array<object>

The list of domain name configurations.

object

ConfigId

integer

The configuration ID. If 0 is returned, the configuration failed. Reconfigure the feature.

1234567

DomainName

string

The domain name.

www.example.com

FunctionName

string

The feature name.

set\_resp\_header

## Examples

Success response

`JSON` format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368",
  "DomainConfigList": {
    "DomainConfigModel": [
      {
        "ConfigId": 1234567,
        "DomainName": "www.example.com",
        "FunctionName": "set_resp_header"
      }
    ]
  }
}
```

Error response

`JSON` format

```
[{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":5068995}]
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidFunctions.Malformed

The specified Functions is incorrectly formatted.

400

InvalidArgValue.Malformed

The specified ArgValue is invalid.

Specified ArgValue is malformed.

400

Invalid%s.ValueNotSupported

\[%s\] is not supported.

400

Invalid%s.Malformed

The specified ArgValue \[%s\] is invalid.

400

MissingParameter%s

The specified value of ArgName\[%s\] is missing.

You must specify this parameter.

400

InvalidFunctionArgs.Malformed

The specified FunctionArgs is invalid.

The specified feature parameter is invalid.

400

MissingParameter

The specified ArgValue is missing.

400

InvalidHeaderKey.ValueNotSupported

The specified value of parameter HeaderKey is not supported.

The specified HTTP header is invalid. Valid values: Content-Type, Cache-Control, Content-Disposition, Content-Language, Expires, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Max-Age, Access-Control-Expose-Headers, and Access-Control-Allow-Credentials.

400

TooManyDomains

The count of domain is over 50.

400

InvalidRule.Malformed

%s

400

ConfigurationConflicts

The staging environment has a configuration in effect and cannot modify the production environment configuration.

Failed to modify the parameter settings in the production environment because the parameter settings are different from those in the stating environment. Set parameters in the staging environment before you publish them to the production environment.

400

InvalidFunction.NotSupported

The domain is not supported to set the function.

This feature is not supported for domain names.

400

InvalidDomain.BelongToConfigGroup

This Domain activated in configuration group and should modify by config group.

400

EntityNotExist.Role

EntityNotExist.Role

400

MissingParameterFunctions

The specified value of Functions is missing.

400

NoPermission.SLR

The current user does not have permission to create servicelinkedrole. Please contact the Alibaba Cloud account or administrator to authorize AliyunCDNFullAccess or custom policy:Service Name:cdn-ddos.cdn.aliyuncs.com,Role: AliyunServiceRoleForCDNAccessingDDoS,Permission: ram: CreateServiceLinkedRole

You are not authorized to create service-linked roles. Obtain the AliyunCDNFullAccess permission or custom permission policies used to create service-linked roles from your Alibaba Cloud account or the administrator. Obtain custom permissions based on the following information: Service Name: cdn-ddos.cdn.aliyuncs.com, Service-linked Role Name: AliyunServiceRoleForCDNAccessingDDoS, Required Permission: ram:CreateServiceLinkedRole.

400

ConfigExceedLimit

Count of config entries exceeds the limit.

The upper limit is reached.

400

EdgeScriptCountExceedLimit

The number of rules exceeds the default limit.

The number of rules exceeds the limit. To increase the limit, submit a ticket.

400

EdgeScripOptionsHasInnerConfig

The extension has a background configuration or a parameter of this configuration is invalid. For more information, submit a ticket.

The extension has a background configuration or a configured parameter is invalid. For more information, submit a ticket.

400

EdgeScriptGrammarNotSupport

A background customization rule exists or a parameter of this configuration is invalid. For more information, submit a ticket.

A background custom rule exists or a configured parameter is invalid. For more information, submit a ticket.

400

EdgeScriptNotSupportJs

JavaScript rules are not supported. For more information, submit a ticket.

JavaScript rules are not supported. For more information, submit a ticket.

400

ServiceInvokeFailed

Failed to invoke service.

An internal server error occurred.

400

ConfigParentExceedLimit

Config parent exceed limit.

The referenced advanced conditional rule exceeds the threshold.

400

Function.InvalidParentId

The specified parentId does not exist.

The specified rule does not exist.

400

BatchSetBusinessError

some configs error:%s

A configuration error occurred: %s

400

ConfigDuplicate

Duplicate configuration. This function has already been configured and cannot be added repeatedly.

Duplicate configuration. This function has already been configured and cannot be added repeatedly.

400

FunctionArgError

The function parameter of the domain configuration is incorrect.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/BatchSetCdnDomainConfig#workbench-doc-change-demo) for a complete list.
