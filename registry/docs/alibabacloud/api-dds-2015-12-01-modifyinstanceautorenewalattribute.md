Enables or disables auto-renewal for an ApsaraDB for MongoDB instance.

## Operation description

Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) .

This operation is applicable to subscription instances.

**Note** When auto-renewal is enabled, your payment will be collected nine days before the expiration date of ApsaraDB for MongoDB. Ensure that your account has sufficient balance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyInstanceAutoRenewalAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyInstanceAutoRenewalAttribute)

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

dds:ModifyInstanceAutoRenewalAttribute

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

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

The region ID of the instance. You can call the [DescribeDBInstanceAttribute](/help/en/mongodb/api-describedbinstanceattribute) operation to query the region ID of the instance.

cn-hangzhou

DBInstanceId

string

Yes

The ID of the instance.

dds-bp15da1923e3\*\*\*\*

Duration

string

No

The auto-renewal period. Valid values: **1** to **12**. Unit: month.

**Note** This parameter is valid only when **AutoRenew** is set to **true**.

1

AutoRenew

string

Yes

Specifies whether to enable auto-renewal. Valid values:

-   **true**
-   **false**

**Note** If this parameter is set to **true**, you must set the **Duration** parameter.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

EFD65226-08CC-4C4D-B6A4-CB3C382F67B0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "EFD65226-08CC-4C4D-B6A4-CB3C382F67B0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDbInstanceId.NotFound

Specified instance does not exist.

Instance not found. Refresh the page to check whether the instance has been released.

400

InvalidDbInstanceIdInvalid

Instance dbInstanceId is invalid.

\-

400

InstanceAutoRenewInvalid

Instance auto renewal is invalid.

\-

400

InstanceChargeTypeInvalid

Instance charge type is invalid.

The instance charge type is invalid.

400

InvalidDuration.Invalid

Instance duration is invalid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-10-16

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyInstanceAutoRenewalAttribute?updateTime=2024-10-16#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyInstanceAutoRenewalAttribute?updateTime=2023-10-09#workbench-doc-change-demo)
