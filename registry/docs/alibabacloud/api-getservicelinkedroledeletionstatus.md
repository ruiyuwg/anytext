Queries the status of the task that is used to delete a service-linked role.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetServiceLinkedRoleDeletionStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetServiceLinkedRoleDeletionStatus)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

DeletionTaskId

string

No

The ID of the deletion task.

task/acs-service-role/hdr.aliyuncs.com/AliyunServiceRoleForHdr/c4d22c52-247f-4ee1-83a2-6c0460bd\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Reason

object

The cause for the failure of the deletion task.

Message

string

The failure information.

Service-Linked Role acs:ram::196813227629\*\*\*\*:role/aliyunserviceroleforhdr cannot be deleted as it is in use by hdr.aliyuncs.com.

RoleUsages

array<object>

The information about the resources that the service-linked role can use.

RoleUsage

object

The information about the resources that the service-linked role can use.

Region

string

The region.

global

Resources

array

The information about resources.

Resource

string

The information about resources.

acs:hdr::196813227629\*\*\*\*:sitepair/s-000h0y6kld0zwk8l\*\*\*\*

RequestId

string

The request ID.

07194EB1-DB50-4513-A51D-99B30D635AEF

Status

string

The status of the task.

-   SUCCEEDED
-   IN\_PROGRESS
-   FAILED
-   NOT\_STARTED
-   INTERNAL\_ERROR

FAILED

## Examples

Sample success responses

`JSON`format

```
{
  "Reason": {
    "Message": "Service-Linked Role acs:ram::196813227629****:role/aliyunserviceroleforhdr cannot be deleted as it is in use by hdr.aliyuncs.com.",
    "RoleUsages": {
      "RoleUsage": [
        {
          "Region": "global",
          "Resources": {
            "Resource": [
              "acs:hdr::196813227629****:sitepair/s-000h0y6kld0zwk8l****"
            ]
          }
        }
      ]
    }
  },
  "RequestId": "07194EB1-DB50-4513-A51D-99B30D635AEF",
  "Status": "FAILED"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.DeletionTaskId

The DeletionTaskId is invalid.

The DeletionTaskId is invalid.

400

InvalidParameter.DeletionTaskId.Length

The length of DeletionTaskId must be between 26 and 255 characters.

The length of DeletionTaskId must be between 26 and 255 characters.

404

EntityNotExist.ServiceLinkedRole.DeletionTask

The deletion task for the given ID does not exist.

The deletion task for the given ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
