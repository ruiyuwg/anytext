Queries the information about resource plans of an Alibaba Cloud service.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/DescribeResourcePackageProduct)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/DescribeResourcePackageProduct)

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

bss:DescribeProduct

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

ProductCode

string

Yes

The code of the service.

ossbag

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The status code returned.

Success

Message

string

The message returned.

Successful!

RequestId

string

The ID of the request.

BBEF51A3-E933-4F40-A534-C673CBDB9C80

Success

boolean

Indicates whether the request is successful.

true

OrderId

long

The ID of the order.

72353765387

Data

object

The data returned.

ResourcePackages

array<object>

The details about the resource plans.

ResourcePackage

object

ProductType

string

The type of the service.

ossbag

Name

string

The name of the resource plan.

Object Storage Service (OSS) resource plan (monthly)

ProductCode

string

The code of the service.

ossbag

PackageTypes

array<object>

The types of the resource plans.

PackageType

object

Code

string

The code of the resource plan.

FPT\_ossbag\_deadlineAcc\_CdnOut\_common\_sz

Name

string

The name of the resource plan type.

Back-to-origin traffic plan - China (Shenzhen)

Properties

array<object>

The properties of the resource plan.

Property

object

Name

string

The name of the property.

region

Value

string

The value of the property.

cn-shenzhen

Specifications

array<object>

The specifications of the resource plan.

Specification

object

Name

string

The name of the specification.

1TB

Value

string

The value of the specification.

1024

AvailableDurations

array<object>

The validity periods available for the resource plan.

AvailableDuration

object

Value

integer

The value of the validity period.

6

Name

string

The name of the validity period.

6 Month

Unit

string

The unit of the validity period for the resource plan. Valid values:

-   Month
-   Year

Default value: Month.

Month

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "Success",
  "Message": "Successful!",
  "RequestId": "BBEF51A3-E933-4F40-A534-C673CBDB9C80",
  "Success": true,
  "OrderId": 72353765387,
  "Data": {
    "ResourcePackages": {
      "ResourcePackage": [
        {
          "ProductType": "ossbag",
          "Name": "Object Storage Service (OSS) resource plan (monthly)\n",
          "ProductCode": "ossbag",
          "PackageTypes": {
            "PackageType": [
              {
                "Code": "FPT_ossbag_deadlineAcc_CdnOut_common_sz",
                "Name": "Back-to-origin traffic plan - China (Shenzhen)\n",
                "Properties": {
                  "Property": [
                    {
                      "Name": "region",
                      "Value": "cn-shenzhen"
                    }
                  ]
                },
                "Specifications": {
                  "Specification": [
                    {
                      "Name": "1TB",
                      "Value": 1024,
                      "AvailableDurations": {
                        "AvailableDuration": [
                          {
                            "Value": 6,
                            "Name": "6 Month",
                            "Unit": "Month"
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NotApplicable

This API is not applicable for caller.

\-

400

NotAuthorized

This API is not authorized for caller.

\-

400

MissingParameter

Absent some mandatory parameter for this request.

\-

400

InvalidParameter

This request contain some invalid parameter

\-

400

InvalidOwner

The specified owner doesn't belong to caller.

Invalid user identity.

400

ProductCodeMissing

Parameter ProductCode is missing.

\-

400

ProductNotSupported

Product currently is not supported.

\-

500

InternalError

The request processing has failed due to some unknown error.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/DescribeResourcePackageProduct?updateTime=2024-04-19#workbench-doc-change-demo)
