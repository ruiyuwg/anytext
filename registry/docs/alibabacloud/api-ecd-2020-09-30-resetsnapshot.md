Recovers disk data from a snapshot.

## Operation description

When calling this interface, ensure the following:

-   You must back up any data on the disk that you want to save.
    
    **Note**
    
    Data recovery is an irreversible operation. After you call this interface, the disk will revert to its state at the time the snapshot was created. Any data created between the snapshot creation time and the current time will be lost. Therefore, back up important data.
    
-   You must shut down the cloud computer to which the disk belongs.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ResetSnapshot)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ResetSnapshot)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID.

cn-hzngahou

SnapshotId

string

Yes

The ID of the snapshot used to recover disk data.

s-2zeipxmnhej803x7\*\*\*\*

StopDesktop

boolean

No

Indicates whether to shut down and recover the disk using the snapshot.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response elements.

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ResetSnapshot#workbench-doc-change-demo) for a complete list.
