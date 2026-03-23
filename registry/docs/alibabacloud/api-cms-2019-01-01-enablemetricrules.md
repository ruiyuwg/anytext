Enables alert rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/EnableMetricRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/EnableMetricRules)

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

cms:EnableMetricRules

update

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RuleId

array

Yes

The IDs of the alert rules.

Valid values of N: 1 to 100.

For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist).

ab05733c97b7ce239fb1b53393dc1697c123\*\*\*\*

string

No

The ID of the alert rule.

Valid values of N: 1 to 100.

For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist).

GroupProcess\_67800278\_2FE7D515-4BBD-447B-BC1A-3F17ED49\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The HTTP status code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

success

RequestId

string

The request ID.

FF38D33A-67C1-40EB-AB65-FAEE51EDB644

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "success",
  "RequestId": "FF38D33A-67C1-40EB-AB65-FAEE51EDB644",
  "Success": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

%s

%s

500

%s

%s

500

InternalError

The request processing has failed due to some unknown error.

402

LimitExceeded

The quota for this customer had been reached.

403

%s

%s

404

%s

%s

503

%s

%s

429

Throttli∂ngException

The request was denied due to request throttling.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/EnableMetricRules#workbench-doc-change-demo) for a complete list.
