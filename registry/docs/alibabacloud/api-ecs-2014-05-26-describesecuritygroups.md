Queries the basic information of security groups. You can query the information by various filter conditions, such as the region ID, security group ID, and security group type.

## Operation description

-   **Paged query**: We recommend that you specify `MaxResults` and `NextToken`.
    
    -   If the response does not include `NextToken`, the current page of results is the last page and no more results are to be returned.
    -   During a paged query, when you call the DescribeSecurityGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results.
    -   When you call the DescribeSecurityGroups operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.
-   When you use Alibaba Cloud CLI to call an API operation, you must specify request parameter values of different data types in required formats. For more information, see [Parameter formats](/help/en/cli/parameter-format-overview).
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSecurityGroups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSecurityGroups)

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

ecs:DescribeSecurityGroups

get

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/*`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

-   ecs:tag

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

SecurityGroupIds

string

No

The security group IDs. Set this parameter to a JSON array that consists of up to 100 security group IDs. Separate the security group IDs with commas (,).

\["sg-bp67acfmxazb4p\*\*\*\*", "sg-bp67acfmxazb4p\*\*\*\*", "sg-bp67acfmxazb4p\*\*\*\*",....\]

VpcId

string

No

The ID of the virtual private cloud (VPC) to which the security group belongs.

vpc-bp67acfmxazb4p\*\*\*\*

SecurityGroupType

string

No

The type of the security group. Valid values:

-   normal: basic security group
-   enterprise: advanced security group

**Note** If you do not specify this parameter, both basic and advanced security groups are queried.

normal

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

e71d8a535bd9cc11

MaxResults

integer

No

The maximum number of entries per page. If you specify this parameter, both `MaxResults` and `NextToken` are used for a paged query.

Maximum value: 100.

Default value: 10.

10

NetworkType

string

No

The network type of the security group. Valid values:

-   vpc
-   classic

vpc

SecurityGroupName

string

No

The name of the security group.

SGTestName

IsQueryEcsCount

boolean

No

Specifies whether to query the capacity of the security group. If you set this parameter to True, the `EcsCount` and `AvailableInstanceAmount` values in the response are valid.

**Note** This parameter is deprecated.

null

ResourceGroupId

string

No

The ID of the resource group to which the security group belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response. You can call the [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) operation to query the most recent resource group list.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is configured.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags to add to the security groups.

object

No

The tag to add to the security group.

key

string

No

The tag key of the security group.

**Note** This parameter will be deprecated in the future. We recommend that you use Tag.N.Key to ensure compatibility.

testkey

Key

string

No

The key of tag N to add to the security group. Valid values of N: 1 to 20.

Up to 1,000 resources that match the tags specified can be returned in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N to add to the security group. Valid values of N: 1 to 20.

TestValue

value

string

No

The tag value of the security group.

**Note** This parameter will be deprecated in the future. We recommend that you use Tag.N.Value to ensure compatibility.

testvalue

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks your AccessKey pair, the permissions of the RAM user, and the required parameters. If the request passes the dry run, the DryRunOperation error code is returned. Otherwise, an error message is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

SecurityGroupId

string

No

The security group ID.

sg-bp67acfmxazb4p\*\*\*\*

FuzzyQuery

boolean

No

**Note** This parameter is deprecated.

null

PageNumber

integer

No

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

PageSize

integer

No

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

10

ServiceManaged

boolean

No

Specifies whether to query managed security groups. Valid values:

-   true
-   false

false

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

RegionId

string

The region ID of the security group.

cn-hangzhou

NextToken

string

A pagination token. If the return value of this parameter is empty when MaxResults and NextToken are used for a paged query, no next page exists.

e71d8a535bd9cc11

SecurityGroups

array<object>

The information about the security groups.

SecurityGroup

object

The information about the security group.

SecurityGroupId

string

The ID of the security group.

sg-bp67acfmxazb4p\*\*\*\*

SecurityGroupName

string

The name of the security group.

SGTestName

Description

string

The description of the security group.

TestDescription

SecurityGroupType

string

The type of the security group. Valid values:

-   normal: basic security group
-   enterprise: advanced security group

normal

VpcId

string

The ID of the VPC to which the security group belongs.

vpc-bp67acfmxazb4p\*\*\*\*

CreationTime

string

The time when the security group was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.

2021-08-31T03:12:29Z

EcsCount

integer

The number of private IP addresses that are contained in the security group. For more information, see the "Security group capacity" section in [Basic security groups and advanced security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups#section-kj9-e46-6v5).

If you set IsQueryEcsCount to True, the return value of EcsCount is valid.

**Note** This parameter is deprecated. The returned quantity is provided only for reference. The actual quantity may differ from the returned quantity.

0

AvailableInstanceAmount

integer

The number of private IP addresses that can be added to the security group. For more information, see the "Security group capacity" section in [Basic security groups and advanced security groups](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups#section-kj9-e46-6v5).

If you set IsQueryEcsCount to True, the return value of AvailableInstanceAmount is valid.

**Note** This parameter is deprecated. The returned quantity is provided only for reference. The actual quantity may differ from the returned quantity.

0

ResourceGroupId

string

The ID of the resource group to which the security group belongs.

rg-bp67acfmxazb4p\*\*\*\*

ServiceManaged

boolean

Indicates whether the user of the security group is an Alibaba Cloud service or a distributor.

false

ServiceID

long

The ID of the distributor to which the security group belongs.

12345678910

Tags

array<object>

The tags of the security group.

Tag

object

The tag of the security group.

TagValue

string

The value of the tag.

TestValue

TagKey

string

The key of the tag.

TestKey

RuleCount

integer

The number of rules in the security group.

100

GroupToGroupRuleCount

integer

The number of rules that reference security groups in the security group.

5

TotalCount

integer

The total number of security groups returned. If `MaxResults` and `NextToken` are specified in the request, the value of this parameter is not returned.

20

PageNumber

integer

The page number.

**Note** This parameter will be deprecated in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

PageSize

integer

The number of entries per page.

**Note** This parameter will be deprecated in the future. We recommend that you use NextToken and MaxResults for a paged query.

10

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "RegionId": "cn-hangzhou",
  "NextToken": "e71d8a535bd9cc11",
  "SecurityGroups": {
    "SecurityGroup": [
      {
        "SecurityGroupId": "sg-bp67acfmxazb4p****",
        "SecurityGroupName": "SGTestName",
        "Description": "TestDescription",
        "SecurityGroupType": "normal",
        "VpcId": "vpc-bp67acfmxazb4p****",
        "CreationTime": "2021-08-31T03:12:29Z",
        "EcsCount": 0,
        "AvailableInstanceAmount": 0,
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "ServiceManaged": false,
        "ServiceID": 12345678910,
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "RuleCount": 100,
        "GroupToGroupRuleCount": 5
      }
    ]
  },
  "TotalCount": 20,
  "PageNumber": 1,
  "PageSize": 10
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NotSupported.PageNumberAndPageSize

The parameters PageNumber and PageSize are currently not supported, please use NextToken and MaxResults instead.

\-

400

InValidParameter.NextToken

The parameter NextToken is invalid.

The specified NextToken parameter is invalid.

400

MissingParameter.RegionId

The input parameter RegionId that is mandatory for processing this request is not supplied.

The RegionId parameter is required.

400

InvalidParameter.SecurityGroupType

The specified SecurityGroupType is not valid.

The specified SecurityGroupType parameter is invalid.

400

InvalidSecurityGroupId.Malformed

The specified parameter SecurityGroupId is not valid.

The specified SecurityGroupId parameter is invalid.

400

InvalidSecurityGroupName.Malformed

The specified parameter SecurityGroupName is not valid.

The specified SecurityGroupName parameter is not valid. This parameter is empty by default. If you specify a security group name, the name must be 2 to 128 characters in length and start with a letter. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-) and cannot start with http:// or https. The security group name is displayed in the ECS console.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroups?updateTime=2025-03-12#workbench-doc-change-demo)

2024-09-23

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroups?updateTime=2024-09-23#workbench-doc-change-demo)

2023-11-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroups?updateTime=2023-11-14#workbench-doc-change-demo)

2023-04-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroups?updateTime=2023-04-07#workbench-doc-change-demo)

2021-12-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroups?updateTime=2021-12-05#workbench-doc-change-demo)

2021-10-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroups?updateTime=2021-10-12#workbench-doc-change-demo)
