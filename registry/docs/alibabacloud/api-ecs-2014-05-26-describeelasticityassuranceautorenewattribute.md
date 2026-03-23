Queries the auto-renewal attribute of elasticity assurances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeElasticityAssuranceAutoRenewAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeElasticityAssuranceAutoRenewAttribute)

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

ecs:DescribeElasticityAssuranceAutoRenewAttribute

get

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}`

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

The region ID of the elasticity assurance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PrivatePoolOptions.Id

array

No

The IDs of elasticity assurances.

**Limits**: You can specify up to 50 elasticity assurance IDs in a single request.

string

No

The ID of the elasticity assurance.

eap-bp67acfmxazb4\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The information of queried elasticity assurances.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

ElasticityAssuranceRenewAttributes

array<object>

The auto-renewal attribute of the elasticity assurances.

ElasticityAssuranceRenewAttribute

object

The auto-renewal attribute of the elasticity assurance.

PeriodUnit

string

The unit of the auto-renewal period. Valid values:

-   Month (default)
-   Year

Month

Period

integer

The auto-renewal period. Valid values: Valid values: 1, 2, 3, 6, 12, 24, and 36.

1

PrivatePoolOptionsId

string

The ID of the elasticity assurance.

eap-bp67acfmxazb4\*\*\*\*

RenewalStatus

string

Indicates whether auto-renewal is enabled for the elasticity assurance. Valid values:

-   AutoRenewal: Auto-renewal is enabled for the elasticity assurance.
-   Normal: Auto-renewal is disabled for the elasticity assurance.
-   NotRenewal: The elasticity assurance is not renewed.

Normal

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "ElasticityAssuranceRenewAttributes": {
    "ElasticityAssuranceRenewAttribute": [
      {
        "PeriodUnit": "Month",
        "Period": 1,
        "PrivatePoolOptionsId": "eap-bp67acfmxazb4****\n",
        "RenewalStatus": "Normal"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Invalid.PrivatePoolOptionsId

The specified PrivatePoolOptions.Id is invalid.

The specified PrivatePoolOptions.Id parameter is invalid.

400

Invalid.TooManyPrivatePoolOptions.Ids

Too many PrivatePoolOptions.Ids in this request.

The number of specified private pool IDs exceeds the upper limit.

400

MissingParameter.PrivatePoolOptionsId

The specified PrivatePoolOptions.Id should not be null.

The PrivatePoolOptions.Id parameter is required.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
