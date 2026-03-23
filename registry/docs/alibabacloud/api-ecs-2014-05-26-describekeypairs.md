Queries one or more key pairs.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeKeyPairs)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeKeyPairs)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:DescribeKeyPairs

get

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the key pair. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

KeyPairName

string

No

The name of the key pair. You can use the asterisk (\*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:

-   `*SshKey`: queries key pairs whose names end with SshKey, including the key pair named SshKey.
-   `SshKey*`: queries key pairs whose names start with SshKey, including the key pair named SshKey.
-   `*SshKey*`: queries key pairs whose names include SshKey, including the key pair named SshKey.
-   `SshKey`: queries the key pair named SshKey.

\*SshKey\*

KeyPairFingerPrint

string

No

The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see [RFC 4716](https://tools.ietf.org/html/rfc4716).

ABC1234567

PageNumber

integer

No

The number of the page to return. Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page. Maximum value: 50.

Default value: 10.

10

IncludePublicKey

boolean

No

Specifies whether to include PublicKey in the response. Default value: false.

false

ResourceGroupId

string

No

The ID of the resource group. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is set.

rg-amnhr7u7c7hj\*\*\*\*

Tag

array<object>

No

The tags.

object

No

Key

string

No

The key of tag N of the key pair. Valid values of N: 1 to 20.

If a single tag is specified to query resources, up to 1,000 resources that are bound with this tag can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that are bound with all these tags can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N of the key pair. Valid values of N: 1 to 20.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number of the returned page.

1

TotalCount

integer

The total number of key pairs.

1

KeyPairs

array<object>

The information of the key pairs.

KeyPair

object

CreationTime

string

The time when the key pair was created.

2023-09-04T08:33Z

KeyPairName

string

The name of the key pair.

testKeyPairName

KeyPairFingerPrint

string

The fingerprint of the key pair.

ABC1234567

ResourceGroupId

string

The ID of the resource group.

rg-amnhr7u7c7hj\*\*\*\*

PublicKey

string

The content of the public key.

ssh-rsa\*\*\*\*

Tags

array<object>

The tags of the key pair.

Tag

object

TagValue

string

The tag value of the key pair.

TestValue

TagKey

string

The tag key of the key pair.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 1,
  "KeyPairs": {
    "KeyPair": [
      {
        "CreationTime": "2023-09-04T08:33Z",
        "KeyPairName": "testKeyPairName",
        "KeyPairFingerPrint": "ABC1234567",
        "ResourceGroupId": "rg-amnhr7u7c7hj****",
        "PublicKey": "ssh-rsa****",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeKeyPairs?updateTime=2024-12-17#workbench-doc-change-demo)

2024-02-01

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeKeyPairs?updateTime=2024-02-01#workbench-doc-change-demo)
