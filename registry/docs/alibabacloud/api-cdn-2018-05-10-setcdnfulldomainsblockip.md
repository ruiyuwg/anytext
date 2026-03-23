Blocks or unblocks IP addresses. This setting applies to all domain names in your account.

## Operation description

-   To use this operation, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
-   This operation is suitable for blocking or unblocking a maximum of 1,000 IP addresses or CIDR blocks at a time.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/SetCdnFullDomainsBlockIP)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/SetCdnFullDomainsBlockIP)

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

cdn:SetCdnFullDomainsBlockIP

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

IPList

string

Yes

The IP addresses that you want to block or unblock. Separate multiple IP addresses with commas (,). You can specify up to 1,000 IP addresses.

1.XXX.XXX.1,2.XXX.XXX.2

OperationType

string

Yes

The type of the operation.

-   block
    
-   unblock
    

block

BlockInterval

integer

No

The duration for which IP addresses or CIDR blocks are blocked. Unit: seconds. The value **0** specifies that IP addresses or CIDR blocks are permanently blocked. This parameter is available only if you set **OperationType** to **block**.

3000

UpdateType

string

No

The type of the blocking duration. This parameter is available only if you set **OperationType** to **block**. Valid values:

-   **cover**: Default. The blocking duration that is specified in the request takes effect.
    
-   **uncover**: The longer of the blocking duration in the request or the remaining blocking duration takes effect.
    
-   When the value is left empty, **cover** is used.
    

cover

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

Schema of Response

Code

integer

The status code. The status code 0 indicates that the call is successful. If another status code is returned, the call fails.

0

Message

string

The additional information returned. If the request was successful, OK is returned. If the request failed, an error message is returned.

OK

RequestId

string

The request ID.

23ACE7E2-2302-42E3-98F8-E5E697FD86C3

## Examples

Success response

`JSON` format

```
{
  "Code": 0,
  "Message": "OK",
  "RequestId": "23ACE7E2-2302-42E3-98F8-E5E697FD86C3"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The specified parameter is invalid.

400

QuotaExceeded

The quota is exceeded.

The quota is exhausted.

403

OperationDenied

You do not have access to this operation.

You are not authorized to operate the specified resource; please check your authorization using RAM.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/SetCdnFullDomainsBlockIP#workbench-doc-change-demo) for a complete list.
