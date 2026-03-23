Retrieves DLF roles.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListRoles)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListRoles)

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

dlf:ListRoles

get

\*All Resource

`*`

None

None

## Request syntax

```
GET /api/metastore/auth/roles/list HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

NextPageToken

string

No

The pagination token used to retrieve the next page of results. If a NextPageToken is not returned in the response, pass an empty string ("").

token!

RoleNamePattern

string

No

A regular expression that the role name must match. Fuzzy search is supported. For example, .\*test.\*.

.\*test.\*

PageSize

integer

No

The number of entries to return on each page. The maximum value is 1,000.

100

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

RequestId

string

The ID of the request.

B7F4B621-E41E-4C84-B97F-42B5380A32BB

Code

string

The response code.

OK

Message

string

The message returned.

.

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

True

NextPageToken

string

The pagination token that is used to retrieve the next page of results.

2cb472ec1bf84f8d92f9c4baa0d21c19aa

Roles

[Roles](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-roles)

The roles.

\[ { "Description":"reserved by the system", "DisplayName":"admin", "UpdateTime":0, "IsPredefined":1, "Name":"admin" } \]

## Examples

Success response

`JSON` format

```
{
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
  "Code": "OK",
  "Message": ".",
  "Success": true,
  "NextPageToken": "2cb472ec1bf84f8d92f9c4baa0d21c19aa",
  "Roles": [
    {
      "Name": "role_name",
      "Description": "role description",
      "Users": [
        {
          "PrincipalArn": "acs:ram::[AliyunAccountId]:user/username_abc"
        }
      ],
      "DisplayName": "显示名称，允许中文",
      "PrincipalArn": "acs:dlf::111:role/role_name",
      "CreateTime": 1647323053,
      "UpdateTime": 1647323053,
      "IsPredefined": 1
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/ListRoles#workbench-doc-change-demo) for a complete list.
