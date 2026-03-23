You can call the DescribeChildInstanceRegions operation to query the regions where you can attach network instances to a Cloud Enterprise Network (CEN) instance.

## Operation description

The regions that CEN supports vary based on the network instance type. You can specify the `ProductType` parameter to query the regions that CEN supports for a specific type of network instance. If you do not specify the `ProductType` parameter, the system queries the regions supported for all network instance types by default.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeChildInstanceRegions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeChildInstanceRegions)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProductType

string

No

The type of the network instance. Valid values:

-   **VPC**: a virtual private cloud (VPC).
    
-   **VBR**: a virtual border router (VBR).
    
-   **CCN**: a Cloud Connect Network (CCN) instance.
    

VPC

AcceptLanguage

string

No

The language of the response. Valid values:

zh-CN

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

D5CEED59-36AA-47CC-9D81-16F71C46BD80

Regions

object

Region

array<object>

A list of regions.

object

LocalName

string

The name of the region.

China (Hangzhou)

RegionId

string

The region ID.

cn-hangzhou

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D5CEED59-36AA-47CC-9D81-16F71C46BD80",
  "Regions": {
    "Region": [
      {
        "LocalName": "China (Hangzhou)\n",
        "RegionId": "cn-hangzhou"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

MissingParameter.OwnerIdOrOwnerAccount

The input parameter OwnerAccount or OwnerId that is mandatory for processing this request is not supplied

The error message returned because the OwnerId or OwnerAccount parameter is not set.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeChildInstanceRegions#workbench-doc-change-demo) for a complete list.
