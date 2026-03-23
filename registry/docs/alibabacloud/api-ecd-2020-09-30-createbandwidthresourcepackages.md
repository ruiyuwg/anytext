Creates data transfer plans.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateBandwidthResourcePackages)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateBandwidthResourcePackages)

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

ecd:CreateBandwidthResourcePackages

create

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

The ID of the region. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.

cn-hangzhou

PackageSize

integer

Yes

The size of the data transfer plan. Valid values: 10 to 1000. Unit: GiB.

100

Amount

integer

No

The number of the data transfer plans that you want to create at the same time. Valid values: 1 to 20. Default value: 1.

1

Period

integer

No

The subscription duration. The valid values of this parameter vary based on the value of `PeriodUnit`.

-   If `PeriodUnit` is set to `Month`, the valid values of Period are 1, 3, and 6.
-   If `PeriodUnit` is set to `Year`, the valid value of Period is 1.

Default value: 1.

1

PeriodUnit

string

No

The unit of the subscription duration.

Valid values:

-   Month (default)
-   Year

Month

AutoPay

boolean

No

Specifies whether to enable the auto-payment feature.

true

PromotionId

string

No

The ID of the promotional activity.

youhuiquan\_promotion\_option\_id\_for\_blank

## Response parameters

Parameter

Type

Description

Example

object

OrderId

long

The ID of the order.

24251717783\*\*\*\*

RequestId

string

The ID of a request.

AE7B699F-625C-587E-BC5F-1395CA969681

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": 0,
  "RequestId": "AE7B699F-625C-587E-BC5F-1395CA969681"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2021-12-10

Add Operation

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/CreateBandwidthResourcePackages?updateTime=2021-12-10#workbench-doc-change-demo)
