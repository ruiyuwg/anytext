Queries a list of protected resources.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/ListProtectedResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/ListProtectedResources)

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

hbr:ListProtectedResources

list

\*All Resource

`*`

None

None

## Request syntax

```
GET  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

NextToken

string

No

The token to start the next page of results. An empty value indicates that there are no more results.

aWQj\*\*\*\*\*\*\*\*MCMy

MaxResults

integer

No

The number of entries to return on each page.

Valid values: 10 to 100. Default value: 10.

10

CreatedByProduct

string

No

The product that protects the resource. Valid value:

-   **BASIC**: File Backup Essential Edition.
    

BASIC

SourceType

string

No

The type of the data source. Valid value:

-   **ECS\_FILE**: ECS File Backup.
    

ECS\_FILE

ResourceId

string

No

The resource ID.

-   If SourceType is set to **ECS\_FILE**, this parameter indicates the ECS instance ID.
    

i-wz95\*\*\*\*\*\*\*\*\*\*\*\*7zrd

Skip

integer

No

The number of entries to skip in a paged query. If the value of this parameter exceeds the total number of entries that meet the query conditions, an empty list is returned. The value must be a multiple of MaxResults.

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

EB09\*\*\*\*-\*\*\*\*-\*\*\*\*-\*\*\*\*-\*\*\*\*\*\*\*\*6C38

Code

string

The HTTP status code. A value of 200 indicates a successful request.

200

Message

string

The message returned. If the request is successful, `successful` is returned. If the request fails, an error message is returned.

successful

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

TotalCount

integer

The total number of protected resources.

3

ProtectedResources

array<object>

The list of protected resources.

object

SourceType

string

The ID of the resource.

-   **SourceType=ECS\_FILE**: The ID of the ECS instance.
    

ECS\_FILE

ResourceId

string

The resource ID.

-   **SourceType=ECS\_FILE**: The ID of the ECS instance.
    

i-wz95\*\*\*\*\*\*\*\*\*\*\*\*7zrd

ResourceOwnerId

integer

The UID of the user who owns the resource.

1024\*\*\*\*\*\*\*\*0703

CreatedByProduct

string

The product that protects the resource. Valid value:

-   **BASIC**: ECS File Backup Essential Edition.
    

BASIC

SnapshotCount

integer

The number of backups.

30

ProtectedResourceId

string

The ID of the protected resource.

pr-0004\*\*\*\*\*\*\*\*\*\*\*\*gs61

ProtectedDataSize

integer

The size of the protected data, in bytes.

-   If SourceType is **ECS\_FILE**, this parameter indicates the size of the backed-up block storage.
    

107374182400

MaxResults

integer

The number of results to return for each query.

Valid values: 10 to 100. Default value: 10.

10

NextToken

string

The token for the next page. If NextToken is empty, there are no more pages.

eyJJ\*\*\*\*\*\*\*\*\*\*\*\*MX0=

## Examples

Success response

`JSON` format

```
{
  "RequestId": "EB09****-****-****-****-********6C38",
  "Code": "200",
  "Message": "successful",
  "Success": true,
  "TotalCount": 3,
  "ProtectedResources": [
    {
      "SourceType": "ECS_FILE",
      "ResourceId": "i-wz95************7zrd",
      "ResourceOwnerId": 0,
      "CreatedByProduct": "BASIC",
      "SnapshotCount": 30,
      "ProtectedResourceId": "pr-0004************gs61",
      "ProtectedDataSize": 107374182400
    }
  ],
  "MaxResults": 10,
  "NextToken": "eyJJ************MX0="
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/ListProtectedResources#workbench-doc-change-demo) for a complete list.
