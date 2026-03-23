Queries the available acceleration regions of a Global Accelerator (GA) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ga/2019-11-20/ListAvailableBusiRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ga/2019-11-20/ListAvailableBusiRegions)

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

ga:ListAvailableBusiRegions

list

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

The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.

cn-hangzhou

AcceleratorId

string

No

The ID of the GA instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

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

DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6

Regions

array<object>

The information about the regions.

Regions

object

The information about the region.

LocalName

string

The name of the region.

China (Qingdao)

RegionId

string

The ID of the region.

cn-qingdao

Pop

boolean

Indicates whether it is a point of presence (PoP) of Alibaba Cloud. Valid values:

-   **true**
-   **false**

false

ChinaMainland

boolean

Indicates whether the region is in the Chinese mainland. Valid values:

-   **true**
-   **false**

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6",
  "Regions": [
    {
      "LocalName": "China (Qingdao)\n",
      "RegionId": "cn-qingdao",
      "Pop": false,
      "ChinaMainland": true
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ga/2019-11-20/ListAvailableBusiRegions?updateTime=2023-07-06#workbench-doc-change-demo)
