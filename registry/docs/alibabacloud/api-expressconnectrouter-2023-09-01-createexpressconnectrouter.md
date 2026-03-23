Creates an Express Connect Router (ECR).

## Operation description

After an Express Connect Router (ECR) instance is created, its status is **Active**.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ExpressConnectRouter/2023-09-01/CreateExpressConnectRouter)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ExpressConnectRouter/2023-09-01/CreateExpressConnectRouter)

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

expressconnectrouter:CreateExpressConnectRouter

create

\*ExpressConnectRouter

`acs:expressconnectrouter::{#accountId}:expressconnectrouter/*`

None

-   expressconnectrouter:CreateServiceLinkedRole

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Name

string

No

The name of the ECR instance.

**Note**

The name can be empty or 0 to 128 characters in length. It cannot start with http:// or https://.

test

Description

string

No

The description of the ECR instance.

**Note**

The description can be empty or 0 to 256 characters in length. It cannot start with http:// or https://.

test

ResourceGroupId

string

No

The ID of the resource group to which the ECR instance belongs.

rg-acfmvvajg5q\*\*\*\*

AlibabaSideAsn

integer

Yes

The autonomous system number (ASN) of the ECR instance. Valid values: 45104 (default), 64512 to 65534, and 4200000000 to 4294967294. The ASN 65025 is reserved for use by Alibaba Cloud.

45104

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: sends a check request without modifying service resources.
    
-   **false** (default): sends a normal request.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a value from your client and make sure that the value is unique among different requests. The \`ClientToken\` parameter supports only ASCII characters.

**Note**

If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each request.

02fb3da4-130e-11e9-8e44-00\*\*\*\*

Tag

array<object>

No

The tags.

You can add up to 20 tags.

object

No

The tag information.

Key

string

No

The tag key. The key cannot be an empty string. The key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The tag value. The value can be an empty string. The tag value can be up to 128 characters in length, cannot start with `acs:`, and cannot contain `http://` or `https://`.

TestValue

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RpcResponse

RequestId

string

The request ID.

6FABF516-FED3-5697-BDA2-B18C5D9A\*\*\*\*

Success

boolean

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

True

Code

string

The response code. A value of 200 indicates that the request was successful. For information about other error codes, see the "Error codes" section.

200

Message

string

The response message.

OK

HttpStatusCode

integer

The HTTP status code.

200

DynamicCode

string

The dynamic error code.

IllegalParamFormat.Name

DynamicMessage

string

The dynamic error message that is used to replace the `%s` placeholder in the \`Message\` parameter.

**Note**

For example, if the value of **Message** is **The value of input parameter %s is not valid.** and the value of **DynamicMessage** is **DtsJobId**, the returned message is **The value of input parameter DtsJobId is not valid.**

The param format of Name \*\*\*\* is illegal.

AccessDeniedDetail

string

Details about the access denial.

Authentication is failed for \*\*\*\*

EcrId

string

The ID of the ECR instance.

ecr-fu8rszhgv7623c\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6FABF516-FED3-5697-BDA2-B18C5D9A****\n",
  "Success": true,
  "Code": "200",
  "Message": "OK",
  "HttpStatusCode": 200,
  "DynamicCode": "IllegalParamFormat.Name",
  "DynamicMessage": "The param format of Name **** is illegal.",
  "AccessDeniedDetail": "Authentication is failed for ****",
  "EcrId": "ecr-fu8rszhgv7623c****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParamFormat.%s

The param format of %s is illegal.

Illegal parameter format

400

OperationFailed.UserNotInWhiteList

The current user is not in the whitelist.

The leased line gateway product is opened through the whitelist, and the current user does not have the operation permission. Please contact customer service personnel to add the current user to the white list.

400

QuotaExceeded.EcrCountPerUser

ECR Quota Exceeded.

The number of dedicated gateway instances that you can create has reached the quota limit. Please contact your business manager to apply for a larger quota.

400

Conflict.ASNOfECR

ASN already used by other ECR.

The specified ASN is used by other ECR. Change to an unconfigured ASN.

400

MissingParam.%s

The param of %s is missing.

The request parameters are not specified. Please check the corresponding parameters and try again.

400

IllegalParam.AlibabaSideAsn

The entered Bgp Asn is incorrect.

The currently entered BgpAsn is incorrect, please check and re-enter

400

Conflict.Lock

There are other unfinished operations.

You currently have other unfinished operations, please try again later

See [Error Codes](https://api.alibabacloud.com/document/ExpressConnectRouter/2023-09-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ExpressConnectRouter/2023-09-01/CreateExpressConnectRouter#workbench-doc-change-demo) for a complete list.
