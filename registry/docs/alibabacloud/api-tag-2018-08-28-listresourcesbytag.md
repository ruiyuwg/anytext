Queries resources to which a specified tag is added or resources to which a specified tag is not added.

## Operation description

This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListResourcesByTag)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListResourcesByTag)

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

tag:ListResourcesByTag

get

\*All Resources

`*`

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

The region ID.

For more information about region IDs, see [Endpoints](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-endpoint) .

cn-shenzhen

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResult

integer

No

The number of entries to return on each page.

Default value: 50. Maximum value: 1000.

50

ResourceType

string

Yes

The resource type. This parameter specifies a filter condition for the query.

-   If you set the FuzzyType parameter to EQUAL, you can set this parameter to a value obtained from the response of the [ListSupportResourceTypes](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listsupportresourcetypes) operation.
-   If you set the FuzzyType parameter to NOT, you can set this parameter to a resource type provided in **Types of resources that support queries based on the NOT operator**.

ALIYUN::VPC::VPC

FuzzyType

string

No

The type of the query. Valid values:

-   EQUAL: exact match for resources to which the specified tag is added. This is the default value.
-   NOT: exact match for resources to which the specified tag is not added.

EQUAL

TagFilter.Value

string

No

The tag value. This parameter specifies a filter condition for the query.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

v1

TagFilter.Key

string

Yes

The tag key. This parameter specifies a filter condition for the query.

The tag key can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.

k1

IncludeAllTags

boolean

No

Specifies whether to return the information of tags added to the resources. Valid values:

-   False: does not return the information of tags added to the resources. This is the default value.
-   True: returns the information of all tags added to the resources.

False

**Types of resources that support queries based on the NOT operator:**

-   ALIYUN::ADB::CLUSTER
-   ALIYUN::ALB::ACL
-   ALIYUN::ALB::LOADBALANCER
-   ALIYUN::ALB::SECURITYPOLICY
-   ALIYUN::ALB::SERVERGROUP
-   ALIYUN::ALIDNS::DOMAIN
-   ALIYUN::BASTIONHOST::INSTANCE
-   ALIYUN::BPSTUDIO::APPLICATION
-   ALIYUN::BPSTUDIO::TEMPLATE
-   ALIYUN::CAS::INSTANCE
-   ALIYUN::CDN::DOMAIN
-   ALIYUN::CDS::CLUSTER
-   ALIYUN::CEN::BANDWIDTHPACKAGE
-   ALIYUN::CEN::CEN
-   ALIYUN::CS::CLUSTER
-   ALIYUN::DBAUDIT::INSTANCE
-   ALIYUN::DCDN::DOMAIN
-   ALIYUN::DDOSBGP::INSTANCE
-   ALIYUN::DDOSCOO::INSTANCE
-   ALIYUN::DDS::INSTANCE
-   ALIYUN::DRDS::INSTANCE
-   ALIYUN::ECS::DDH
-   ALIYUN::ECS::DDHCLUSTER
-   ALIYUN::ECS::DISK
-   ALIYUN::ECS::ENI
-   ALIYUN::ECS::INSTANCE
-   ALIYUN::ECS::KEYPAIR
-   ALIYUN::ECS::LAUNCHTEMPLATE
-   ALIYUN::ECS::SECURITYGROUP
-   ALIYUN::ECS::SNAPSHOT
-   ALIYUN::EDAS::APPLICATION
-   ALIYUN::EDAS::CLUSTER
-   ALIYUN::ELASTICSEARCH::INSTANCE
-   ALIYUN::EMR::CLUSTER
-   ALIYUN::EMR::FLOWPROJECT
-   ALIYUN::HBR::CLIENT
-   ALIYUN::HBR::HANAINSTANCE
-   ALIYUN::HBR::VAULT
-   ALIYUN::KVSTORE::INSTANCE
-   ALIYUN::MULTIMOD::CLUSTER
-   ALIYUN::OCEANBASE::INSTANCE
-   ALIYUN::OOS::EXECUTION
-   ALIYUN::OOS::PARAMETER
-   ALIYUN::OOS::SECRETPARAMETER
-   ALIYUN::OOS::STATECONFIGURATION
-   ALIYUN::OOS::TEMPLATE
-   ALIYUN::OSS::BUCKET
-   ALIYUN::OUTBOUNDBOT::INSTANCE
-   ALIYUN::POLARDB::CLUSTER
-   ALIYUN::PVTZ::ZONE
-   ALIYUN::RDS::INSTANCE
-   ALIYUN::VPC::COMMONBANDWIDTHPACKAGE
-   ALIYUN::VPC::EIP
-   ALIYUN::VPC::NATGATEWAY
-   ALIYUN::VPC::VPC

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

7D61FF74-61C2-5768-B01F-05FC97F24F35

NextToken

string

Indicates whether the `next query` is required.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the `token` used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

Resources

array<object>

The information of the resources.

TagResource

object

The information of the resources.

ResourceId

string

The ID of the resource.

vpc-wz9pifyuw26esxd05\*\*\*\*

Tags

array<object>

The information of the tags.

This parameter is returned only if the `IncludeAllTags` parameter is set to `True`.

Tag

object

The information of the tags.

Key

string

The tag key.

k1

Value

string

The tag value.

v1

Category

string

The type of the tag. Valid values:

-   custom
-   system

custom

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7D61FF74-61C2-5768-B01F-05FC97F24F35",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "Resources": [
    {
      "ResourceId": "vpc-wz9pifyuw26esxd05****",
      "Tags": [
        {
          "Key": "k1",
          "Value": "v1",
          "Category": "custom"
        }
      ]
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Invalid.MsgEndPoint

The MsgEndPoint is invalid.

The MsgEndPoint is invalid.

400

Invalid.MsgQueue

The MsgQueue is invalid.

The MsgQueue is invalid.

400

InvalidParameter.Tags

The specified value of parameter Tags is not valid.

The specified value of parameter Tags is not valid.

400

InvalidParameter.Tags

The Tags' parameter cannot be empty, and JSON parsing should adhere to the format of a Map.

The Tags parameter cannot be empty. JSON parsing must conform to the Map format, for example, {"key":"value"}

400

Duplicate.TagKey

The Tag.N.Key contains duplicate keys, please check the duplicate tag key.

Duplicate tag key exists.

400

InvalidParameter.TagKey

The TagKey parameter is invalid. The following TagKeys are invalid: %s.

Illegal tag keys exist in the parameter. Illegal tag keys are as follows: %s

400

MetaTagKeyHasValue

The specified TagKey already bind tag value

\-

400

NumberExceed.TagKeys

The maximum number of TagKeys is exceeded.

The maximum number of tag keys is exceeded.

400

InvalidParameter.TagValue

The TagValue parameter is invalid. The following TagValues are invalid: %s.

The parameter contains illegal tag values. Illegal tag values are as follows: %s

403

Invalid.NextToken

The parameter NextToken is invalid.

The parameter NextToken is invalid.

403

InvalidParamter.NextToken

NextToken parameter is illegal.

NextToken parameter is illegal.

403

FuzzyType.NotSupport

Fuzzy queries are not supported.

Fuzzy queries are not supported.

403

NumberExceed.Tags

The maximum number of Tags is exceeded.

The maximum number of Tags is exceeded.

403

QuotaExceed.TagsPerResource

The maximum number of tags for each resource is exceeded.

The maximum number of tags for each resource is exceeded.

403

Duplicate.TagKey

The Tag.N.Key contains duplicate keys.

The Tag.N.Key contains duplicate keys.

403

InvalidParameter.Key

The Key is invalid.

\-

403

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

The Tag.N.Key parameter is invalid.

403

MetaTagKey.BindingResources

Binding resource exists for tag key.

Binding resource exists for tag key.

403

MetaTagKeyNotFound

The meta tag key is not found.

\-

403

NoPermissionKey.Category

Some keys cannot be modified because the user does not have permission.

Some keys cannot be modified because the user does not have permission.

403

NoPermissionKey.Operator

You are not authorized to operate the tag key.

You are not authorized to operate the tag key.

403

InvalidParameter.Category

The specified Category is invalid. Valid values are Custom and System.

The specified Category is invalid. Valid values are Custom and System.

403

InvalidParameter.TagValue

The Tag.N.Value parameter is invalid.

The Tag.N.Value parameter is invalid.

403

InvalidParameter.Value

The Value is invalid.

\-

404

MissingParameter.Tags

You must specify Tags.

You must specify Tags.

404

Missing.TagKey

Tag.N.Value has been specified and you must specify Tag.N.Key.

Tag.N.Value has been specified and you must specify Tag.N.Key.

404

MissingParameter.Key

The Key must not be empty.

\-

404

MissingParameter.TagKey

You must specify TagKey.

You must specify TagKey.

404

MissingParameter.TagKeyValueParamList

The parameter TagKeyValueParamList must not be null.

You must specify TagKeyValueParamList.

404

MissingParameter.Value

The Value must not be empty.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-12-06

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListResourcesByTag?updateTime=2022-12-06#workbench-doc-change-demo)

2022-11-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListResourcesByTag?updateTime=2022-11-21#workbench-doc-change-demo)
