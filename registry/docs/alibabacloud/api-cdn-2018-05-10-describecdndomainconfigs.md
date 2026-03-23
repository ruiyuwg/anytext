You can call the DescribeCdnDomainConfigs operation to retrieve the configurations of an accelerated domain name. You can query the configurations of multiple features in a single call.

## Operation description

**Note**

The throttling limit for a single user is 100 calls per second.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnDomainConfigs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnDomainConfigs)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cdn:DescribeCdnDomainConfigs

get

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DomainName

string

Yes

The accelerated domain name. You can query only one domain name at a time.

example.com

FunctionNames

string

No

The names of the features. Separate multiple feature names with commas (,). For more information about feature names, see [Parameters for domain name configurations](/help/en/cdn/developer-reference/parameters-for-configuring-features-for-domain-names).

aliauth

ConfigId

string

No

The ID of the feature configuration. For more information about how to query and use a ConfigId, see [Usage of ConfigId](/help/en/cdn/developer-reference/usage-notes-on-configid).

6295

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

C80705BF-0F76-41FA-BAD1-5B59296A4E59

DomainConfigs

object

DomainConfig

array<object>

The domain name configurations.

object

Status

string

The status of the configuration. Valid values:

-   **success**: The configuration is successful.
    
-   **testing**: The configuration is being tested.
    
-   **failed**: The configuration failed.
    
-   **configuring**: The configuration is in progress.
    

success

ParentId

string

The ID of the rule condition. This parameter is optional.

You can create a rule condition by configuring the **condition** feature (rules engine) in [Parameters for domain name configurations](/help/en/cdn/developer-reference/parameters-for-configuring-features-for-domain-names). A rule condition can match and filter user requests by detecting various parameters in the requests. After a rule condition is created, a corresponding [ConfigId](/help/en/cdn/developer-reference/usage-notes-on-configid) is generated. The ConfigId can be referenced by other features as the ParentId parameter. This way, you can combine rule conditions and feature configurations to create more flexible configurations.

For more information about the configuration procedure, see [Configure domain names in batches](/help/en/cdn/api-batchsetcdndomainconfig) or the ParentId configuration example in this topic.

222728944812032

ConfigId

string

The configuration ID.

6295

FunctionName

string

The name of the feature.

aliauth

FunctionArgs

object

FunctionArg

array<object>

The parameter settings for each feature.

object

ArgName

string

The parameter name. This is a configuration item of **functionName**. You can configure multiple configuration items.

auth\_type

ArgValue

string

The parameter value. This is the value of the configuration item for **functionName**.

req\_auth

## ParentId configuration example

If parentId is set to **\-1**, the existing rule conditions in the configuration are deleted.

```
   "functionArgs": [{
     "argName": "Feature parameter A", 
     "argValue": "Value of feature parameter A"
    }, 
  {
    "argName": "Feature parameter B", 
    "argValue": "Value of feature parameter B"
     }], 
 "functionName": "Feature name",
 "parentId": "Optional. The configid of the referenced rule condition."
}]
```

The following example shows how to use the **origin\_request\_header** feature to add an origin fetch HTTP request header without using **parentId**. The request parameters are as follows:

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

The following example shows a configuration that uses parentId. In this example, the **origin\_request\_header** feature is used to add an origin fetch HTTP request header and reference the rule condition with a **configid** of **222728944812032**. The request parameters are as follows:

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
        "parentId": "222728944812032"
}]
```

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C80705BF-0F76-41FA-BAD1-5B59296A4E59",
  "DomainConfigs": {
    "DomainConfig": [
      {
        "Status": "success",
        "ParentId": "222728944812032",
        "ConfigId": "6295",
        "FunctionName": "aliauth",
        "FunctionArgs": {
          "FunctionArg": [
            {
              "ArgName": "auth_type",
              "ArgValue": "req_auth"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Invalid%s.ValueNotSupported

FunctionName \[%s\] is not supported.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnDomainConfigs#workbench-doc-change-demo) for a complete list.
