Queries the versions of a policy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ram/2015-05-01/ListPolicyVersions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ram/2015-05-01/ListPolicyVersions)

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

ram:ListPolicyVersions

get

Policy

`acs:ram:*:{#accountId}:policy/{#PolicyName}`

Policy

`acs:ram:*:system:policy/{#PolicyName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PolicyType

string

No

The type of the policy. Valid values: `System` and `Custom`.

Custom

PolicyName

string

No

The name of the policy.

OSS-Administrator

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

7B8A4E7D-6CFF-471D-84DF-195A7A241ECB

PolicyVersions

object

PolicyVersion

array<object>

The information about the policy versions.

object

The information about the policy version.

IsDefaultVersion

boolean

Indicates whether the policy version is the default version.

false

PolicyDocument

string

The document of the policy.

{ "Statement": \[{ "Action": \["oss:\*"\], "Effect": "Allow", "Resource": \["acs:oss:\*:\*:\*"\]}\], "Version": "1"}

VersionId

string

The ID of the policy version.

v3

CreateDate

string

The time when the version was created.

2015-02-26T01:25:52Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
  "PolicyVersions": {
    "PolicyVersion": [
      {
        "IsDefaultVersion": false,
        "PolicyDocument": "{ \"Statement\": [{ \"Action\": [\"oss:*\"], \"Effect\": \"Allow\", \"Resource\": [\"acs:oss:*:*:*\"]}], \"Version\": \"1\"}",
        "VersionId": "v3",
        "CreateDate": "2015-02-26T01:25:52Z"
      }
    ]
  }
}
```

Error response

`JSON` format

```
{
    "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
    "PolicyVersions": {
        "PolicyVersion": [
            {
                "VersionId": "v3",
                "IsDefaultVersion": false,
                "CreateDate": "2015-01-23T12:33:18Z"
            },
            {
                "VersionId": "v5",
                "IsDefaultVersion": true,
                "CreateDate": "2015-02-26T01:25:52Z"
            }
        ]
    }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ram/2015-05-01/ListPolicyVersions#workbench-doc-change-demo) for a complete list.
