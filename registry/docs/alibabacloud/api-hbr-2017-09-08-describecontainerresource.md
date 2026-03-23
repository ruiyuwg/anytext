Queries the list of container cluster resources.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeContainerResource)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeContainerResource)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageNumber

integer

No

The page number for paged queries. Pages start from 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.

10

ClusterId

string

No

The cluster ID.

cc-0005\*\*\*\*\*\*\*\*\*\*hhjw

ResourceType

string

No

The resource type. Valid value:

-   **PV**: persistent volume (PV).
    

PV

ResourceId

string

No

The resource ID.

-   **ResourceType=PV**: The persistent volume ID.
    

a9ab843d-\*\*\*\*-\*\*\*\*-8e46-1d67a82128a7

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

D98A2895-745B-5530-A8C1-9A86F0A82354

Success

boolean

Indicates whether the request succeeded.

-   true: succeeded
    
-   false: failed
    

true

Code

string

The return code. A value of 200 indicates success.

200

Message

string

The response message. Returns "successful" on success or an error message on failure.

successful

PageSize

integer

The number of entries per page in a paged query.

10

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of records.

8

Resources

array<object>

The list of resources.

object

The list of resources.

ResourceInfo

string

Resource details.

{"pv\_name":"nas-a9ab843d-\*\*\*\*-\*\*\*\*-8e46-1d67a82128a7","pv\_size":"1000Gi","storage\_class":"opk8s-nas","pvc\_name":"\*\*-pvc","namespace":"default"}

ClusterIdentifier

string

The cluster identifier.

c21b653f\*\*\*\*\*\*\*\*695e892e718c419a4

ResourceType

string

The resource type.

PV

ResourceId

string

The resource ID.

a9ab843d-\*\*\*\*-\*\*\*\*-8e46-1d67a82128a7

ClusterId

string

The cluster ID.

cc-0005\*\*\*\*\*\*\*\*\*\*hhjw

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D98A2895-745B-5530-A8C1-9A86F0A82354",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageSize": 10,
  "PageNumber": 1,
  "TotalCount": 8,
  "Resources": [
    {
      "ResourceInfo": "{\"pv_name\":\"nas-a9ab843d-****-****-8e46-1d67a82128a7\",\"pv_size\":\"1000Gi\",\"storage_class\":\"opk8s-nas\",\"pvc_name\":\"**-pvc\",\"namespace\":\"default\"}",
      "ClusterIdentifier": "c21b653f********695e892e718c419a4",
      "ResourceType": "PV",
      "ResourceId": "a9ab843d-****-****-8e46-1d67a82128a7\n",
      "ClusterId": "cc-0005**********hhjw"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeContainerResource#workbench-doc-change-demo) for a complete list.
