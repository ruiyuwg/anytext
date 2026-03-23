Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeMaskingRules)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeMaskingRules)

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

polardb:DescribeMaskingRules

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/{#resource-id}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBClusterId

string

Yes

The ID of the cluster.

**Note** You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of the clusters that belong to your Alibaba Cloud account, such as cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RuleNameList

string

No

The name of the masking rule.

testrule

InterfaceVersion

string

No

Queries data masking rules or encryption rules. Valid values:

v1: queries data masking rules. v2: queries data encryption rules.

v1

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The ID of the request.

2F83D131-1C18-4599-889D-729A9D\*\*\*\*\*\*

Message

string

The message that is returned for the request.

**Note** If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.

Successful

Success

boolean

Indicates whether the request is successful. Valid value:

-   **true**
-   **false**

true

Data

object

The result data that is returned.

RuleList

array

Details about the masking rules.

RuleList

string

The detailed configurations of the masking rule.

**Note** For more information, see the `RuleConfig` parameter in the [ModifyMaskingRules](/help/en/polardb/polardb-for-mysql/api-modifymaskingrules) operation.

"{\\"testrule\\":{\\"auto\\":{\\"databases\\":\[\],\\"tables\\":\[\\"t1\\"\],\\"columns\\":\[\\"c1\\"\]},\\"applies\_to\\":\[\],\\"description\\":\\"This rule will be applied to the columns c1 in table t1\\",\\"enabled\\":\\"true\\"}}"

RuleVersion

string

The version of the masking rule. Valid values: v1 and v2. Default value: v1

v1

DBClusterId

string

The ID of the cluster.

pc-bp1s826a1up\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2F83D131-1C18-4599-889D-729A9D******",
  "Message": "Successful",
  "Success": true,
  "Data": {
    "RuleList": [
      {
        "testrule": {
          "auto": {
            "databases": [],
            "tables": [
              "t1"
            ],
            "columns": [
              "c1"
            ]
          },
          "applies_to": [],
          "description": "This rule will be applied to the columns c1 in table t1",
          "enabled": true
        }
      }
    ],
    "RuleVersion": "v1"
  },
  "DBClusterId": "pc-bp1s826a1up******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Abs.InvalidAccount.NotFound

account is not found.

The account does not exist.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-02

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeMaskingRules?updateTime=2024-01-02#workbench-doc-change-demo)

2023-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeMaskingRules?updateTime=2023-09-12#workbench-doc-change-demo)
