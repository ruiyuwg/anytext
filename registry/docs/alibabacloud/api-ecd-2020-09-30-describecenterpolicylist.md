Queries center policies.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeCenterPolicyList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeCenterPolicyList)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

ecd:DescribeCenterPolicyList

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageNumber

integer

No

The page number.  
Default value: 1.

1

PageSize

integer

No

The number of entries per page.

20

PolicyGroupId

array

No

The IDs of the cloud computer policies.

string

No

The ID of the cloud computer policy.

pg-53iyi2aar0nd6\*\*\*\*

Scope

string

No

The effective scope of the cloud computer policy.

**Valid values:**

-   IP :
    
    The policy applies to specific IP addresses.
    
-   GLOBAL :
    
    The policy applies globally.
    

GLOBAL

BusinessType

integer

Yes

The business type.

**Valid values:**

-   1 :
    
    Public cloud.
    
-   8 :
    
    Commercial edition.
    

1

ResourceType

string

Yes

The resource type.

**Valid values:**

-   app :
    
    Cloud applications.
    
-   desktop :
    
    Cloud computers.
    

desktop

PortProxy

string

No

ModelLibrary

string

No

AcademicProxy

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of entries returned.

20

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

DescribePolicyGroups

array<object>

The details about the cloud computer policies.

array<object>

The details about the cloud computer policy.

PolicyStatus

string

The status of the cloud computer policy.

AVAILABLE

Html5Access

string

The web client access policy.

off

WatermarkType

string

The watermark type.

EndUserId

WatermarkCustomText

string

If you set `WatermarkType` to `custom`, you must also specify `WatermarkCustomText`.

custom-watermark

Clipboard

string

The read/write permissions on the clipboard.

off

PolicyGroupId

string

The policy ID.

pg-gx2x1dhsmthe9\*\*\*\*

PrinterRedirection

string

The printer redirection policy.

off

Html5FileTransfer

string

The file transfer feature on the web client.

off

UsbRedirect

string

The USB redirection policy.

off

PolicyGroupType

string

The type of the policy.

SYSTEM

Watermark

string

The watermark policy.

on

VisualQuality

string

The image quality policy.

medium

Name

string

The policy name.

testPolicyGroupName

LocalDrive

string

The read/write permissions on the on-premises drive.

readwrite

AuthorizeSecurityPolicyRules

array<object>

The security group rules.

object

The security group rule.

Type

string

The direction of the security group rule.

inflow

Policy

string

The authorization policy of the security group rule.

accept

Description

string

The description of the security group rule.

test

PortRange

string

The port range of the security group rule.

22/22

IpProtocol

string

The protocol type of the security group rule.

tcp

Priority

string

The priority of the security group rule. A smaller value indicates a higher priority.

1

CidrIp

string

The object to which the security group rule applies. The value is an IPv4 CIDR block.

47.100.XX.XX/16

AuthorizeAccessPolicyRules

array<object>

The client IP address whitelists.

object

The client IP address whitelist.

Description

string

The remarks on the client CIDR block.

test

CidrIp

string

The client CIDR block from which end users can connect to cloud computers. The value is an IPv4 CIDR block.

47.100.XX.XX/16

ClientTypes

array<object>

The logon method control rules.

object

The logon method control rule.

Status

string

Indicates whether a specific client type can connect to cloud computers.

on

ClientType

string

The client type.

windows

GpuAcceleration

string

Indicates whether image quality control is enabled. For optimal computer performance and user experience in professional design scenarios, we recommend enabling this feature.

off

UsbSupplyRedirectRule

array<object>

The USB redirection rules.

object

The USB redirection rule.

VendorId

string

The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

04\*\*

ProductId

string

The product ID (PID).

08\*\*

Description

string

The rule description.

测试规则

UsbRedirectType

integer

Indicates whether USB redirection is allowed.

1

UsbRuleType

integer

The type of the USB redirection rule.

1

DomainResolveRuleType

string

Indicates whether domain name resolution is allowed.

on

DomainResolveRule

array<object>

The domain resolution policies.

object

The domain resolution policy.

Domain

string

The domain name.

\*.example.com

Policy

string

The resolution policy.

allow

Description

string

The policy description.

测试规则

NetRedirectRule

array<object>

The network redirection policies.

**Note**

This parameter is in private preview and only available to specific users.

object

The network redirection policy.

**Note**

This parameter is in private preview and only available to specific users.

Domain

string

The domain name.

\*.example.com

RuleType

string

The rule type.

domain

Policy

string

The redirection policy.

allow

Recording

string

Indicates whether screen recording is enabled.

off

RecordingStartTime

string

The start time of screen recording. The value is in the HH:MM:SS format. The value is meaningful only when you set Recording to period.

08:00:00

RecordingEndTime

string

The end time of screen recording. The value is in the HH:MM:SS format. The value is meaningful only when you set Recording to period.

08:59:00

RecordingFps

integer

The frame rate of screen recording. Unit: fps.

5

RecordingExpires

integer

The retention period of the screen recording file. Valid values: 1 to 180. Unit: days.

15

CameraRedirect

string

Indicates whether on-premises webcam redirection is enabled.

on

NetRedirect

string

The network redirection policy.

**Note**

This parameter is in private preview and only available to specific users.

off

AppContentProtection

string

Indicates whether anti-screenshot is enabled.

off

RecordContent

string

Indicates whether custom screen recording is enabled.

off

RecordContentExpires

integer

The duration for which custom screen recordings are kept before they expire. Default value: 30 days.

30

RemoteCoordinate

string

The keyboard and mouse control permissions during remote assistance.

fullControl

RecordingDuration

integer

The length of the screen recording file. Unit: minutes. Screen recording files are split by the specified length and uploaded to OSS buckets. Once a file reaches 300 MB, the system prioritizes rolling updates for that file.

10

Scope

string

The effective scope of the policy.

GLOBAL

ScopeValue

array

The effective scopes specified by CIDR blocks.

string

The effective scope specified by a CIDR block.

47.100.XX.XX/24

RecordingAudio

string

Indicates whether audio files generated on cloud computers are recorded.

on

InternetCommunicationProtocol

string

The network communication protocol.

tcp

VideoRedirect

string

Indicates whether multimedia redirection is enabled.

off

WatermarkTransparencyValue

integer

The watermark transparency. A higher value means the watermark is less transparent. Valid values: 10 to 100.

10

WatermarkColor

integer

The font color of the watermark. Valid values: 0 to 16777215.

0

WatermarkFontSize

integer

The font size of the watermark. Valid values: 10 to 20.

10

WatermarkFontStyle

string

The font style of the watermark.

plain

WatermarkDegree

number

The watermark rotation. Valid values: -10 to -30.

\-10

WatermarkRowAmount

integer

The number of watermark rows.

3

EndUserApplyAdminCoordinate

string

Indicates whether end users are allowed to request administrator help.

off

EndUserGroupCoordinate

string

Indicates whether end users in the same office network can share cloud computers.

off

CpuProtectedMode

string

The CPU spike protection policy.

on

CpuRateLimit

integer

The overall CPU usage. Valid values: 70 to 90. Unit: percentage (%).

70

CpuSampleDuration

integer

The overall CPU sampling duration. Valid values: 10 to 60. Unit: seconds.

10

CpuSingleRateLimit

integer

The single-CPU usage. Valid values: 70 to 100. Unit: %.

70

CpuDownGradeDuration

integer

The CPU underclocking duration. Valid values: 30 to 120. Unit: seconds.

30

CpuProcessors

array

The CPU processors.

string

The CPU processor.

chrome.exe

MemoryProtectedMode

string

The memory spike protection policy.

off

MemoryRateLimit

integer

The overall memory usage. Valid values: 70 to 90. Unit: %.

70

MemorySampleDuration

integer

The overall memory sampling duration. Valid values: 30 to 60. Unit: seconds.

30

MemorySingleRateLimit

integer

The memory usage per process. Valid values: 30 to 60. Unit: %.

30

MemoryDownGradeDuration

integer

The memory underclocking duration per process. Valid values: 30 to 120. Unit: seconds.

30

MemoryProcessors

array

The memory processors.

string

The memory processor.

notepad.exe

WatermarkSecurity

string

Indicates whether security priority is enabled for invisible watermarks.

on

WatermarkAntiCam

string

Indicates whether anti-screen capture is enabled for invisible watermarks.

off

WatermarkPower

string

The enhancement level for invisible watermarks.

medium

RecordingUserNotify

string

Indicates whether to notify end users when screen recording is enabled.

off

RecordingUserNotifyMessage

string

The notification sent to end users when screen recording is enabled.

录屏已开启

AdminAccess

string

Indicates whether the admin permissions are granted to end users.

**Note**

This parameter is in private preview and only available to specific users.

deny

MaxReconnectTime

integer

The maximum duration to retry reconnecting to cloud computers after an unexpected disconnection (non-human causes). Valid values: 30 to 7200. Unit: seconds.

120

DisplayMode

string

The display mode.

adminCustom

StreamingMode

string

The streaming mode.

smooth

ColorEnhancement

string

Indicates whether color enhancement is enabled for design and 3D applications.

off

SmoothEnhancement

string

Indicates whether smoothness enhancement is enabled for daily office use.

off

QualityEnhancement

string

Indicates whether image quality enhancement is enabled for design and 3D applications.

off

VideoEncPolicy

string

The video encoding policy.

qualityFirst

TargetFps

integer

The target frame rate. Valid values: 10 to 60. Unit: fps.

30

VideoEncMinQP

integer

The minimum quantizer parameter (QP) for video files. A lower QP means better video quality. Valid values: 0 to 51.

20

VideoEncMaxQP

integer

The maximum QP for video files. Higher QP values result in lower video quality. Valid values: 0 to 51.

20

VideoEncAvgKbps

integer

The average bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.

1000

VideoEncPeakKbps

integer

The peak bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.

2000

DeviceRedirects

array<object>

The device redirection rules.

object

The device redirection rule.

DeviceType

string

The peripheral type.

camera

RedirectType

string

The redirection type.

usbRedirect

DeviceRules

array<object>

The custom peripheral rules.

object

The custom peripheral rule.

DeviceType

string

The peripheral type.

storage

DeviceName

string

The device name.

sandisk

DeviceVid

string

The vendor ID (VID). For more information, see [Valid USB VIDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

0x0781

DevicePid

string

The product ID (PID).

0x55b1

RedirectType

string

The redirection type.

usbRedirect

OptCommand

string

The link optimization command.

2:0

Platforms

string

WyAssistant

string

Indicates whether the Xiaoying AI Assistant entry is displayed in the DesktopAssistant menu.

on

StatusMonitor

string

Indicates whether the metric status entry is displayed in the DesktopAssistant menu.

on

MobileRestart

string

Indicates whether the Restart button is displayed in the DesktopAssistant menu when end users connect to cloud computers from Android clients.

**Note**

This feature applies to only mobile clients of version 7.4.0 or later.

off

MobileShutdown

string

Indicates whether the Stop button is displayed in the DesktopAssistant menu when end users connect to cloud computers from Android clients.

**Note**

This feature applies to only mobile clients of version 7.4.0 or later.

off

DesktopCount

integer

The number of cloud computers that are associated with the policy.

1

DesktopGroupCount

integer

The number of cloud computer shares that are associated with the policy.

1

ResourceGroupCount

integer

The number of resource groups that are associated with the policy.

1

ResolutionModel

string

The resolution type.

adaptive

ResolutionWidth

integer

The width of the resolution. Unit: pixel.

1920

ResolutionHeight

integer

The height of the resolution. Unit: pixel.

1280

Taskbar

string

Indicates whether the application taskbar is displayed.

**Note**

This parameter applies only to cloud application policies.

off

NoOperationDisconnect

string

Indicates whether a disconnection is enforced upon inactivity.

**Note**

This parameter applies only to cloud application policies.

off

NoOperationDisconnectTime

integer

The duration of disconnection after inactivity. Unit: seconds.

**Note**

This parameter applies only to cloud application policies.

120

DisconnectKeepSession

string

Indicates whether the session is retained after disconnection.

**Note**

This parameter applies only to cloud application policies.

persistent

DisconnectKeepSessionTime

integer

The retention period of the session after disconnection. Unit: seconds.

**Note**

This parameter applies only to cloud application policies.

120

DomainRegisterValue

string

The field where the domain resolution policy is applied.

xxxx

RecordEventFilePaths

array

The absolute paths to screen recording files.

string

The absolute path to the screen recording file.

d:/data

RecordEventRegisters

array

The absolute paths to screen recording registries.

string

The absolute path to the screen recording registry.

计算机\\HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR

RecordEventDuration

integer

The duration of screen recording after the specified event is detected. Unit: minutes. Valid values: 10 to 60.

10

InternetPrinter

string

SafeMenu

string

ScreenDisplayMode

string

ClientControlMenu

string

FileTransferSpeedLocation

string

FileTransferAddress

string

FileTransferSpeed

string

CpdDriveClipboard

string

UseTime

string

ResolutionDpi

integer

HoverConfigMsg

string

ClientHibernate

string

ClientRestart

string

ClientShutdown

string

HoverHibernate

string

HoverRestart

string

HoverShutdown

string

MultiScreen

string

AcademicProxy

string

ModelLibrary

string

PortProxy

string

WatermarkShadow

string

MobileWyAssistant

string

MobileSafeMenu

string

MobileWuyingKeeper

string

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 20,
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "DescribePolicyGroups": [
    {
      "PolicyStatus": "AVAILABLE",
      "Html5Access": "off",
      "WatermarkType": "EndUserId",
      "WatermarkCustomText": "custom-watermark",
      "Clipboard": "off",
      "PolicyGroupId": "pg-gx2x1dhsmthe9****",
      "PrinterRedirection": "off",
      "Html5FileTransfer": "off",
      "UsbRedirect": "off",
      "PolicyGroupType": "SYSTEM",
      "Watermark": "on",
      "VisualQuality": "medium",
      "Name": "testPolicyGroupName",
      "LocalDrive": "readwrite",
      "AuthorizeSecurityPolicyRules": [
        {
          "Type": "inflow",
          "Policy": "accept",
          "Description": "test",
          "PortRange": "22/22",
          "IpProtocol": "tcp",
          "Priority": "1",
          "CidrIp": "47.100.XX.XX/16"
        }
      ],
      "AuthorizeAccessPolicyRules": [
        {
          "Description": "test",
          "CidrIp": "47.100.XX.XX/16"
        }
      ],
      "ClientTypes": [
        {
          "Status": "on",
          "ClientType": "windows"
        }
      ],
      "GpuAcceleration": "off",
      "UsbSupplyRedirectRule": [
        {
          "VendorId": "04**",
          "ProductId": "08**",
          "Description": "测试规则",
          "UsbRedirectType": 1,
          "UsbRuleType": 1
        }
      ],
      "DomainResolveRuleType": "on",
      "DomainResolveRule": [
        {
          "Domain": "*.example.com",
          "Policy": "allow",
          "Description": "测试规则"
        }
      ],
      "NetRedirectRule": [
        {
          "Domain": "*.example.com",
          "RuleType": "domain",
          "Policy": "allow"
        }
      ],
      "Recording": "off",
      "RecordingStartTime": "08:00:00",
      "RecordingEndTime": "08:59:00",
      "RecordingFps": 5,
      "RecordingExpires": 15,
      "CameraRedirect": "on",
      "NetRedirect": "off",
      "AppContentProtection": "off",
      "RecordContent": "off",
      "RecordContentExpires": 30,
      "RemoteCoordinate": "fullControl",
      "RecordingDuration": 10,
      "Scope": "GLOBAL",
      "ScopeValue": [
        "47.100.XX.XX/24"
      ],
      "RecordingAudio": "on",
      "InternetCommunicationProtocol": "tcp",
      "VideoRedirect": "off",
      "WatermarkTransparencyValue": 10,
      "WatermarkColor": 0,
      "WatermarkFontSize": 10,
      "WatermarkFontStyle": "plain",
      "WatermarkDegree": -10,
      "WatermarkRowAmount": 3,
      "EndUserApplyAdminCoordinate": "off",
      "EndUserGroupCoordinate": "off",
      "CpuProtectedMode": "on",
      "CpuRateLimit": 70,
      "CpuSampleDuration": 10,
      "CpuSingleRateLimit": 70,
      "CpuDownGradeDuration": 30,
      "CpuProcessors": [
        "chrome.exe"
      ],
      "MemoryProtectedMode": "off",
      "MemoryRateLimit": 70,
      "MemorySampleDuration": 30,
      "MemorySingleRateLimit": 30,
      "MemoryDownGradeDuration": 30,
      "MemoryProcessors": [
        "notepad.exe"
      ],
      "WatermarkSecurity": "on",
      "WatermarkAntiCam": "off",
      "WatermarkPower": "medium",
      "RecordingUserNotify": "off",
      "RecordingUserNotifyMessage": "录屏已开启",
      "AdminAccess": "deny",
      "MaxReconnectTime": 120,
      "DisplayMode": "adminCustom",
      "StreamingMode": "smooth",
      "ColorEnhancement": "off",
      "SmoothEnhancement": "off",
      "QualityEnhancement": "off",
      "VideoEncPolicy": "qualityFirst",
      "TargetFps": 30,
      "VideoEncMinQP": 20,
      "VideoEncMaxQP": 20,
      "VideoEncAvgKbps": 1000,
      "VideoEncPeakKbps": 2000,
      "DeviceRedirects": [
        {
          "DeviceType": "camera",
          "RedirectType": "usbRedirect"
        }
      ],
      "DeviceRules": [
        {
          "DeviceType": "storage",
          "DeviceName": "sandisk",
          "DeviceVid": "0x0781",
          "DevicePid": "0x55b1",
          "RedirectType": "usbRedirect",
          "OptCommand": "2:0",
          "Platforms": ""
        }
      ],
      "WyAssistant": "on",
      "StatusMonitor": "on",
      "MobileRestart": "off",
      "MobileShutdown": "off",
      "DesktopCount": 1,
      "DesktopGroupCount": 1,
      "ResourceGroupCount": 1,
      "ResolutionModel": "adaptive",
      "ResolutionWidth": 1920,
      "ResolutionHeight": 1280,
      "Taskbar": "off",
      "NoOperationDisconnect": "off",
      "NoOperationDisconnectTime": 120,
      "DisconnectKeepSession": "persistent",
      "DisconnectKeepSessionTime": 120,
      "DomainRegisterValue": "xxxx",
      "RecordEventFilePaths": [
        "d:/data"
      ],
      "RecordEventRegisters": [
        "计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR"
      ],
      "RecordEventDuration": 10,
      "InternetPrinter": "",
      "SafeMenu": "",
      "ScreenDisplayMode": "",
      "ClientControlMenu": "",
      "FileTransferSpeedLocation": "",
      "FileTransferAddress": "",
      "FileTransferSpeed": "",
      "CpdDriveClipboard": "",
      "UseTime": "",
      "ResolutionDpi": 0,
      "HoverConfigMsg": "",
      "ClientHibernate": "",
      "ClientRestart": "",
      "ClientShutdown": "",
      "HoverHibernate": "",
      "HoverRestart": "",
      "HoverShutdown": "",
      "MultiScreen": "",
      "AcademicProxy": "",
      "ModelLibrary": "",
      "PortProxy": "",
      "WatermarkShadow": "",
      "MobileWyAssistant": "",
      "MobileSafeMenu": "",
      "MobileWuyingKeeper": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeCenterPolicyList#workbench-doc-change-demo) for a complete list.
