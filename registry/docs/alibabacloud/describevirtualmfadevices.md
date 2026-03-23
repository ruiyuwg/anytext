Retrieves information about virtual multi-factor authentication (MFA) devices associated with Active Directory (AD) accounts.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeVirtualMFADevices)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeVirtualMFADevices)

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

The region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to get the list of regions supported by Elastic Desktop Service (EDS).

cn-hangzhou

MaxResults

integer

No

The maximum number of entries to return. Valid values: 1 to 500. Default value: 100.

100

NextToken

string

No

The pagination token. Set this parameter to the NextToken value returned in the previous API call.

caeba0bbb2be03f84eb48b699f0a4883

OfficeSiteId

string

No

The office network ID.

cn-hangzhou+dir-269345\*\*\*\*

EndUserId

array

No

The list of Active Directory (AD) usernames.

testuser

string

No

The AD username.

testuser

Filter

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned information.

NextToken

string

The token for the next query. If NextToken is empty, no further page exists.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL23as

RequestId

string

The request ID.

FB550AAB-FB36-4A91-93F6-F4374AF65403

VirtualMFADevices

array<object>

Details of the virtual MFA devices.

array<object>

Information about a virtual MFA device.

SerialNumber

string

The serial number of the virtual MFA device.

a25f297f-f2e1-4a44-bbf1-5f48a6e5\*\*\*\*

GmtUnlock

string

The automatic unlock time for a locked virtual MFA device. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in YYYY-MM-DDThh:mm:ssZ format and uses UTC+0.

2020-12-21T15:21:28Z

EndUserId

string

The AD username that uses this virtual MFA device.

usertest

ConsecutiveFails

integer

The number of consecutive failures to bind or verify the virtual MFA device.

1

OfficeSiteId

string

The workspace ID.

cn-hangzhou+dir-269345\*\*\*\*

status

string

The status of the virtual MFA device.

**Valid values:**

-   LOCKED :
    
    locked
    
-   UNBOUND :
    
    Not associated
    
-   NORMAL :
    
    Normal
    

NORMAL

DirectoryId

string

**Note**

This parameter is in invitational preview and is not publicly available.

cn-hangzhou+dir-gx2x1dhsmu52rd\*\*\*\*

GmtEnabled

string

The time when the virtual MFA device was enabled. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in YYYY-MM-DDThh:mm:ssZ format and uses UTC+0.

2020-12-20T14:52:28Z

AdUser

object

EndUser

string

DisplayName

string

DisplayNameNew

string

UserPrincipalName

string

## Examples

Success response

`JSON` format

```
{
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL23as",
  "RequestId": "FB550AAB-FB36-4A91-93F6-F4374AF65403",
  "VirtualMFADevices": [
    {
      "SerialNumber": "a25f297f-f2e1-4a44-bbf1-5f48a6e5****",
      "GmtUnlock": "2020-12-21T15:21:28Z",
      "EndUserId": "usertest",
      "ConsecutiveFails": 1,
      "OfficeSiteId": "cn-hangzhou+dir-269345****",
      "status": "NORMAL",
      "DirectoryId": "cn-hangzhou+dir-gx2x1dhsmu52rd****",
      "GmtEnabled": "2020-12-20T14:52:28Z",
      "AdUser": {
        "EndUser": "",
        "DisplayName": "",
        "DisplayNameNew": "",
        "UserPrincipalName": ""
      }
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeVirtualMFADevices#workbench-doc-change-demo) for a complete list.
