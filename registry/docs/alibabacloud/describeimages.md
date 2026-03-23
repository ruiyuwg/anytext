Queries the information about images.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeImages)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeImages)

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

ecd:DescribeImages

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/describeregions) operation to query the most recent region list.

cn-hangzhou

MaxResults

integer

No

The maximum number of entries to return on each page.

-   Maximum value: 100.
-   Default value: 10.

10

NextToken

string

No

The token that determines the start point of the next query. If you do not specify this parameter, all results are returned.

caeba0bbb2be03f84eb48b699f0a4883

ImageType

string

No

The type of the image.

SYSTEM

ImageStatus

string

No

The state of the image.

Available

GpuCategory

boolean

No

Specifies whether the images are GPU-accelerated images.

Valid values:

-   true
    
-   false
    

false

ProtocolType

string

No

The protocol type.

Valid values:

-   HDX: High-definition Experience (HDX) protocol
-   ASP: in-house Adaptive Streaming Protocol (ASP) (recommended)

ASP

LanguageType

string

No

The language of the OS.

en-US

DesktopInstanceType

string

No

The instance type of the cloud computer. You can call the [DescribeDesktopTypes](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktoptypes) operation to obtain the parameter value.

ecd.graphics.xlarge

ImageId

array

No

The IDs of the images. You can specify one or more image IDs.

string

No

The ID of the image.

m-gx2x1dhsmusr2\*\*\*\*

OsType

string

No

The type of the operating system of the images. Default value: `null`.

Valid values:

-   Linux
    
-   Windows
    

Windows

GpuDriverVersion

string

No

The version of the GPU driver.

417.22

SessionType

string

No

The session type.

SINGLE\_SESSION

FotaVersion

string

No

The image version.

0.0.3-R-20220616.133609

ImageName

string

No

The image name.

Win\_01

## Response parameters

Parameter

Type

Description

Example

object

Schema of response.

NextToken

string

The token that determines the start point of the next query. If this parameter is empty, all results are returned.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

The ID of the request.

4636DBE0-BBB4-4076-8B8E-94D21A9A3CFB

Images

array<object>

The details of the images.

Image

object

The details of the image.

CreationTime

string

The time when the image was created.

2018-01-10T01:01:10Z

Status

string

The status of the image.

Valid values:

-   Creating
    
-   Available
    
-   CreateFailed
    

Available

Progress

string

The creation progress of the image. Unit: %.

100%

DataDiskSize

integer

The size of the data disk. Unit: GiB.

150

ImageType

string

The type of the image.

Valid values:

-   SYSTEM
    
-   CUSTOM
    

SYSTEM

Description

string

The description of the image.

This is description.

Size

integer

The size of the image. Unit: GiB.

40

OsType

string

The type of the operating system.

WINDOWS

ProtocolType

string

The protocol type.

Valid values:

-   HDX: High-definition Experience (HDX) protocol
-   ASP: in-house Adaptive Streaming Protocol (ASP) (recommended)

ASP

Name

string

The name of the image.

testImageName

ImageId

string

The ID of the image.

m-gx2x1dhsmusr2\*\*\*\*

GpuCategory

boolean

Indicates whether the image is a GPU-accelerated image.

false

SupportedLanguages

array

The languages of the operating system.

Language

string

The languages of the operating system. One or more languages are supported.

Valid values:

-   en-US: American English.
-   zh-HK: traditional Chinese (Hong Kong, China)
-   zh-CN: simple Chinese
-   ja-JP: Japanese

en-US

GpuDriverVersion

string

The version number of the GPU driver.

417.22

AppVersion

string

The version of the image.

1.0.0

VolumeEncryptionEnabled

boolean

Indicates whether disk encryption is enabled.

false

VolumeEncryptionKey

string

The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [ListKeys](/help/en/kms/key-management-service/developer-reference/api-listkeys) operation to query the list of KMS keys.

08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4\*\*\*\*

SharedCount

integer

The number of shared images.

1

SessionType

string

The type of the image session.

Valid values:

-   SINGLE\_SESSION: single-session image.
    
-   MULTIPLE\_SESSION: multi-session image.
    

MULTIPLE\_SESSION

UpdateTime

string

The time when the image was last modified.

2021-12-22T02:48:43Z

Platform

string

The operating system type of the image.

Valid values:

-   Ubuntu
    
-   Windows Server 2022
    
-   UOS
    
-   CentOS
    
-   Windows Server 2019
    
-   SQL Server 2016
    
-   Windows 10
    

Enumeration Value:

-   Ubuntu: Ubuntu.
-   Windows Server 2022: Windows Server 2022.
-   UOS: UOS.
-   CentOS: CentOS.
-   Windows Server 2019: Windows Server 2019.
-   Windows Server 2016: Windows Server 2016.
-   Windows 10: Windows 10.

Windows Server 2019

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "4636DBE0-BBB4-4076-8B8E-94D21A9A3CFB",
  "Images": [
    {
      "CreationTime": "2018-01-10T01:01:10Z",
      "Status": "Available",
      "Progress": "100%",
      "DataDiskSize": 150,
      "ImageType": "SYSTEM",
      "Description": "This is description.",
      "Size": 40,
      "OsType": "WINDOWS",
      "ProtocolType": "ASP",
      "Name": "testImageName",
      "ImageId": "m-gx2x1dhsmusr2****",
      "GpuCategory": false,
      "SupportedLanguages": [
        "en-US"
      ],
      "GpuDriverVersion": 417.22,
      "AppVersion": "1.0.0",
      "VolumeEncryptionEnabled": false,
      "VolumeEncryptionKey": "08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****",
      "SharedCount": 1,
      "SessionType": "MULTIPLE_SESSION",
      "UpdateTime": "2021-12-22T02:48:43Z",
      "Platform": "Windows Server 2019"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-06-13

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeImages?updateTime=2023-06-13#workbench-doc-change-demo)

2021-10-28

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeImages?updateTime=2021-10-28#workbench-doc-change-demo)

2021-10-28

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeImages?updateTime=2021-10-28#workbench-doc-change-demo)
