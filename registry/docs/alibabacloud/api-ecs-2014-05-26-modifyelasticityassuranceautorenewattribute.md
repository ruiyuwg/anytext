Modifies the auto-renewal attribute of elasticity assurances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyElasticityAssuranceAutoRenewAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyElasticityAssuranceAutoRenewAttribute)

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

ecs:ModifyElasticityAssuranceAutoRenewAttribute

update

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

The ID of the region to which the elasticity assurance belongs. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Period

integer

No

The auto-renewal period for the elasticity assurance.

-   Valid values when `PeriodUnit` is set to `Year`: 1, 3, and 5.
-   Valid values when `PeriodUnit` is set to `Month`: 1.

Default value: 1.

1

PeriodUnit

string

No

The unit of the renewal duration. Valid values:

-   Month
-   Year

Default value: Month.

Month

RenewalStatus

string

No

The auto-renewal status of the elasticity assurance. Valid values:

-   AutoRenewal: Auto-renewal is enabled for the elasticity assurance.
-   Normal: Auto-renewal is disabled for the elasticity assurance.
-   NotRenewal: The elasticity assurance is not renewed. The system no longer sends an expiration notification but sends only a renewal notification three days before the elasticity assurance expires. You can change the value of this parameter from NotRenewal to `Normal` for an elasticity assurance, and then manually renew the elasticity assurance. Alternatively, you can set the RenewalStatus parameter to AutoRenewal.

Normal

PrivatePoolOptions.Id

array

No

The IDs of elasticity assurances.

**Note** You can renew up to 50 elasticity assurances at a time.

string

No

The ID of the elasticity assurance to be modified.

eap-bp1bgwq0gqeukw1l\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

2A4EA075-CB5B-41B7-B0EB-70D339F64DE7

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2A4EA075-CB5B-41B7-B0EB-70D339F64DE7"
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

InvalidParameter.Period

The specified Period is not valid.

The specified effective date is invalid.

400

InvalidParameter.PeriodUnit

The specified PeriodUnit is not supported.

The specified PeriodUnit parameter is invalid.

400

MissingParameter.PrivatePoolOptionsId

The specified PrivatePoolOptions.Id should not be null.

The PrivatePoolOptions.Id parameter is required.

403

InvalidParameter.RenewalStatus

The specified parameter RenewalStatus is not valid.

The specified RenewalStatus parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
