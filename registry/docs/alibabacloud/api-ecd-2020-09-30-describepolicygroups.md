Queries the details of a cloud computer policy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribePolicyGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribePolicyGroups)

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the regions supported by Elastic Desktop Service (EDS).

cn-hangzhou

MaxResults

integer

No

The number of entries per page.

-   Valid values: 1 to 100
    
-   Default value: 10
    

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

caeba0bbb2be03f84eb48b699f0a4883

PolicyGroupId

array

No

The IDs of the cloud computer policies.

system-all-enabled-policy

string

No

The ID of the cloud computer policy.

system-all-enabled-policy

Scope

string

No

The effective scope of the cloud computer policy.

**Valid values:**

-   ALL :
    
-   IP :
    
-   GLOBAL :
    

GLOBAL

ExternalPolicyGroupIds

array

No

The array of cloud computer policy IDs to be excluded.

string

No

The cloud computer policy ID to be excluded.

pg-0cid8v30p16k4\*\*\*\*

PageNumber

integer

No

PageSize

integer

No

BusinessChannel

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

Count

integer

PageNumber

integer

PageSize

integer

DescribePolicyGroups

array<object>

The details of the cloud computer policies.

array<object>

The details of the cloud computer policy.

PolicyStatus

string

The status of the cloud computer policy.

**Valid values:**

-   AVAILABLE :
    
-   CREATING :
    

AVAILABLE

Html5Access

string

Specifies whether to allow web client access.

**Valid values:**

-   off :
    
    (Default)
    
-   on :
    

off

WatermarkType

string

The watermark content.

**Valid values:**

-   EndUserId :
    
    The username.
    
-   Custom :
    
-   DesktopIp :
    
    The IP address of the cloud computer.
    
-   ClientIp :
    
    The IP address of the Alibaba Cloud Workspace client.
    
-   HostName :
    
    The rightmost 15 digits of the cloud computer ID.
    
-   ClientTime :
    
    the current time displayed on the cloud computer.
    

EndUserId

PreemptLogin

string

The cloud computer preemption feature.

**Note**

To ensure user experience and data security, when a cloud computer is used by an end user, other end users cannot connect to the cloud computer. By default, this parameter is set to `off`, which cannot be modified.

**Valid values:**

-   off :
    
    Preemption is not allowed.
    

off

WatermarkCustomText

string

If you set `WatermarkType` to `custom`, you must also specify `WatermarkCustomText`.

custom-watermark

Clipboard

string

The permissions on the clipboard.

**Valid values:**

-   read :
    
    Specifies one-way transfer. You can copy files only from local devices to cloud computers.
    
-   readwrite :
    
    Specifies two-way transfer. You can copy files between local devices and cloud computers.
    
-   write :
    
    Specifies one-way transfer. You can only copy files from cloud computers to local devices.
    
-   off :
    
    Disables both one-way and two-way transfer. Files cannot be copied between local devices and cloud computers.
    

off

PolicyGroupId

string

The ID of the cloud computer policy.

pg-gx2x1dhsmthe9\*\*\*\*

PrinterRedirection

string

Indicates whether the printer redirection feature is enabled.

**Valid values:**

-   off :
    
-   on :
    

on

WatermarkTransparency

string

The watermark transparency.

**Valid values:**

-   LIGHT :
    
-   DARK :
    
-   MIDDLE :
    

LIGHT

Html5FileTransfer

string

The file transfer feature on the web client.

**Valid values:**

-   all :
    
    Files can be uploaded and downloaded between local computers and the web client.
    
-   download :
    
    Files on the web client can be downloaded to local computers.
    
-   upload :
    
    Files on local computers can be uploaded to the web client.
    
-   off :
    
    (Default) Files cannot be transferred between the web client and local computers.
    

off

UsbRedirect

string

Indicates whether the USB redirection feature is enabled.

**Valid values:**

-   off :
    
-   on :
    

on

PolicyGroupType

string

The type of the cloud computer policy.

**Valid values:**

-   SYSTEM :
    
-   CUSTOM :
    

SYSTEM

Watermark

string

The watermarking feature.

**Valid values:**

-   blind :
    
    Invisible watermarks are applied.
    
-   off :
    
    The watermarking feature is disabled.
    
-   on :
    
    Visible watermarks are applied.
    

on

VisualQuality

string

The image display quality.

**Valid values:**

-   high :
    
    High-definition (HD)
    
-   low :
    
    Fluent
    
-   medium :
    
    (Default) Adaptive
    
-   lossless :
    
    No quality loss
    

medium

EdsCount

integer

The number of cloud computers that are associated with the policy. The number of cloud computers that are associated only with custom policies is returned.

2

Name

string

The name of the cloud computer policy.

testPolicyGroupName

LocalDrive

string

The permissions on local disk mapping.

**Valid values:**

-   read :
    
    Read-only. Local disk mapping is available on cloud computers. However, you can only read (copy) local files but cannot modify the files.
    
-   readwrite :
    
    read and write. Local disk mapping is available on cloud computers. You can read (copy) and write (modify) local files.
    
-   off :
    
    (Default) None.
    

readwrite

AuthorizeSecurityPolicyRules

array<object>

The security group rules.

object

The security group rule.

Type

string

The direction of the security group rule.

**Valid values:**

-   outflow :
    
    Outbound
    
-   inflow :
    
    Inbound
    

inflow

Policy

string

The authorization of the security group rule.

**Valid values:**

-   drop :
    
    Denies all access requests.
    
-   accept :
    
    Accepts all requests.
    

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

**Valid values:**

-   tcp :
    
    Transmission Control Protocol (TCP)
    
-   udp :
    
    User Datagram Protocol (UDP)
    
-   all :
    
    All protocols
    
-   gre :
    
    Generic Routing Encapsulation (GRE)
    
-   icmp :
    
    Internet Control Message Protocol (ICMP) for IPv4
    

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

The client IP address whitelist. End users can access cloud computers only from the IP addresses in the whitelist.

object

The client IP address in the whitelist.

Description

string

The remarks on the CIDR block that is allowed to access the client.

test

CidrIp

string

The CIDR block that is allowed to access the client. The value is an IPv4 CIDR block.

47.100.XX.XX/16

ClientTypes

array<object>

The logon method control rules to limit the type of the Alibaba Cloud Workspace client used by end users to connect to cloud computers.

object

The logon method control rule.

Status

string

Indicates whether end users are allowed to use a specific type of the client to connect to cloud computers.

**Valid values:**

-   OFF :
    
-   ON :
    

ON

ClientType

string

The client type.

**Valid values:**

-   html5 :
    
    Web client
    
-   android :
    
    Android client
    
-   windows :
    
    Windows client
    
-   ios :
    
    iOS client
    
-   macos :
    
    macOS client
    

windows

PreemptLoginUsers

array

The usernames that can preempt to connect to the cloud computer.

string

The username that can preempt to connect to the cloud computer.

Alice

GpuAcceleration

string

Indicates whether the Image Quality Control feature is enabled. If you have high requirements on the performance and user experience in scenarios such as professional design, we recommend that you enable this feature.

**Valid values:**

-   off :
    
-   on :
    

off

UsbSupplyRedirectRule

array<object>

The USB redirection rule.

object

The USB redirection rule.

VendorId

string

The vendor ID (VID). For more information, see [Valid USB VIDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

04\*\*

ProductId

string

The product ID.

08\*\*

Description

string

The rule description.

测试规则

UsbRedirectType

integer

Indicates whether USB redirection is allowed.

**Valid values:**

-   1 :
    
    Allowed
    
-   2 :
    
    Not allowed
    

1

DeviceClass

string

The device class. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).

0Eh

DeviceSubclass

string

The subclass of the device. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).

xxh

UsbRuleType

integer

The type of the USB redirection rule.

**Valid values:**

-   1 :
    
    By device class
    
-   2 :
    
    By device vendor
    

1

DomainResolveRuleType

string

Indicates whether the switch for domain name resolution is turned on.

**Valid values:**

-   off :
    
-   on :
    

on

DomainResolveRule

array<object>

The domain name resolution rules.

object

The details of the domain name resolution rule.

Domain

string

The destination domain name.

\*.example.com

Policy

string

Indicates whether the domain name resolution rule is allowed.

**Valid values:**

-   allow :
    
-   block :
    

allow

Description

string

The rule description.

测试规则

NetRedirectRule

array<object>

The network redirection rule.

**Note**

This parameter is in invitational preview for specific users and not available to the public.

object

The details of the network redirection rule.

**Note**

This parameter is in invitational preview for specific users and not available to the public.

Domain

string

The rule content.

\*.example.com

RuleType

string

The rule type.

**Valid values:**

-   prc :
    
    Process
    
-   domain :
    
    Domain name
    

domain

Policy

string

Indicates whether the rule is allowed.

**Valid values:**

-   allow :
    
-   block :
    

allow

Recording

string

Indicates whether the screen recording feature is enabled.

**Valid values:**

-   byaction\_cmd\_ft :
    
    Enables the operation-triggered screen recording upon command execution and file transfer.
    
-   ALLTIME :
    
    Enables the whole-process screen recording. That is, the recording starts when cloud computers are connected and ends when the cloud computers are disconnected.
    
-   PERIOD :
    
    Enables the interval-based screen recording. You must specify an interval between the start time and end time of this type of recording.
    
-   byaction\_commands :
    
    Enables the operation-triggered screen recording upon command execution.
    
-   OFF :
    
    Disables the screen recording feature.
    
-   byaction\_file\_transfer :
    
    Enables the operation-triggered screen recording upon file transfer.
    

OFF

RecordingStartTime

string

The time when the screen recording was started. The value is in the HH:MM:SS format. The value takes effect only when Recording is set to PERIOD.

08:00:00

RecordingEndTime

string

The time when the screen recording ended. The value is in the HH:MM:SS format. The value takes effect only when Recording is set to PERIOD.

08:59:00

RecordingFps

integer

The frame rate of screen recording. Unit: fps.

**Valid values:**

-   2 :
    
-   5 :
    
-   10 :
    
-   15 :
    

5

RecordingExpires

integer

The retention period of the screen recording file. Valid values: 1 to 180. Unit: days.

15

CameraRedirect

string

Indicates whether the webcam redirection feature is enabled.

**Valid values:**

-   off :
    
-   on :
    
    (Default)
    

on

NetRedirect

string

Indicates whether the network redirection feature is enabled.

**Note**

This parameter is in invitational preview for specific users and not available to the public.

**Valid values:**

-   off :
    
    (Default)
    
-   on :
    

off

AppContentProtection

string

Indicates whether the anti-screenshot feature is enabled.

**Valid values:**

-   off :
    
    (Default)
    
-   on :
    

off

RecordContent

string

Indicates whether the custom screen recording feature is enabled.

**Valid values:**

-   off :
    
    (Default)
    
-   on :
    

off

RecordContentExpires

integer

The period when the custom screen recording can be retained before expiration. Default value: 30 days.

30

RemoteCoordinate

string

The permissions on keyboard and mouse control during remote assistance.

**Valid values:**

-   optionalControl :
    
    By default, you are not granted the permissions. You can apply for the permissions.
    
-   fullControl :
    
    You are granted the full permissions.
    
-   disableControl :
    
    You are not granted the permissions.
    

fullControl

RecordingDuration

integer

The file length of the screen recording. Unit: minutes. Screen recording files are split based on the specified file length and uploaded to Object Storage Service (OSS) buckets. When a screen recording file reaches 300 MB in size, the system preferentially performs rolling update for the file.

**Valid values:**

-   10 :
    
-   20 :
    
-   30 :
    
-   60 :
    

10

Scope

string

The effective scope of the policy.

**Valid values:**

-   IP :
    
    The policy takes effect based on the IP address.
    
-   GLOBAL :
    
    The policy takes effect globally.
    

GLOBAL

ScopeValue

array

This parameter is required when the `Scope` parameter is set to `IP`.\`\`\`\`

string

The effective scope specified by a CIDR block.

47.100.XX.XX/24

RecordingAudio

string

Indicates whether audio files generated from cloud computers are recorded.

**Valid values:**

-   off :
    
    (Default) Records only video files.
    
-   on :
    
    Records video and audio files.
    

on

InternetCommunicationProtocol

string

The protocol for network communication.

**Valid values:**

-   TCP :
    
    (Default) TCP.
    
-   BOTH :
    
    TCP and UDP.
    

BOTH

VideoRedirect

string

Indicates whether the multimedia redirection feature is enabled.

**Valid values:**

-   off :
    
-   on :
    

off

WatermarkTransparencyValue

integer

The watermark transparency. A greater value indicates that the watermark is less transparent. Valid values: 10 to 100.

10

WatermarkColor

integer

The font color in red, green, and blue (RGB) of the watermark. Valid values: 0 to 16777215.

0

WatermarkFontSize

integer

The font size of the watermark. Valid values: 10 to 20.

10

WatermarkFontStyle

string

The watermark font style.

**Valid values:**

-   plain :
    
-   bold :
    

plain

WatermarkDegree

number

The slope of the watermark. Valid values: -10 to -30.

\-10

WatermarkRowAmount

integer

The number of watermark rows.

**Note**

This parameter is not available for public use.

5

EndUserApplyAdminCoordinate

string

Indicates whether the Contact Administrator for Help switch is turned on.

**Valid values:**

-   off :
    
-   on :
    

on

EndUserGroupCoordinate

string

Indicates whether the User Stream Collaboration switch is turned on.

**Valid values:**

-   off :
    
-   on :
    

on

CpuProtectedMode

string

Indicates whether the CPU spike protection switch is turned on.

**Valid values:**

-   off :
    
-   on :
    

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

The process whitelist that is not restricted by the CPU usage limit.

string

The process name.

chrome.exe

MemoryProtectedMode

string

Indicates whether the memory spike protection switch is turned on.

**Valid values:**

-   off :
    
-   on :
    

on

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

The memory usage of a single process. Valid values: 30 to 60. Unit: %.

30

MemoryDownGradeDuration

integer

The memory underclocking duration for a single process. Valid values: 30 to 120. Unit: seconds.

30

MemoryProcessors

array

The whitelist of processes that are not restricted by the memory usage limit.

string

The process name.

notepad.exe

WatermarkSecurity

string

Indicates whether the security priority feature is enabled for invisible watermarks.

**Valid values:**

-   off :
    
-   on :
    

on

WatermarkAntiCam

string

Indicates whether the anti-screen photo feature is enabled for invisible watermarks.

**Valid values:**

-   off :
    
-   on :
    

off

WatermarkPower

string

The watermark enhancement feature.

**Valid values:**

-   high :
    
-   low :
    
-   medium :
    

medium

RecordingUserNotify

string

Indicates whether the screen recording notification feature is enabled after end users log on to the Alibaba Cloud Workspace client.

**Valid values:**

-   off :
    
-   on :
    

off

RecordingUserNotifyMessage

string

The notification content of screen recording. By default, this parameter is left empty.

您的云电脑正在被录屏

AdminAccess

string

Indicates whether end users are granted the administrator permissions.

**Note**

This parameter is in invitational preview for specific users and not available to the public.

deny

MaxReconnectTime

integer

The maximum retry period for reconnecting to cloud computers when the cloud computers are disconnected due to none-human reasons. Valid values: 30 to 7200. Unit: seconds.

120

DisplayMode

string

The display mode.

Valid values:

-   clientCustom:
    
-   adminOffice: suitable for daily office scenarios.
    
-   adminDesign:
    
-   adminCustom: administrator-customized scenarios
    

**Valid values:**

-   clientCustom :
    
    Suitable for user-defined scenarios.
    
-   adminOffice :
    
    Suitable for daily office scenarios.
    
-   adminDesign :
    
    Suitable for 3D application scenarios.
    
-   adminCustom :
    
    Administrator-customized scenarios
    

adminCustom

StreamingMode

string

The streaming mode.

**Valid values:**

-   intelligent :
    
    Suitable for daily office scenarios (Intelligent Mode).
    
-   smooth :
    
    Suitable for design and 3D application scenarios (Smooth Mode).
    

smooth

ColorEnhancement

string

Indicates whether the Color Enhancement switch is turned on in design and 3D scenarios.

**Valid values:**

-   off :
    
-   on :
    

off

SmoothEnhancement

string

Indicates whether the Smooth Enhancement switch is turned on.

**Valid values:**

-   off :
    
-   on :
    

off

QualityEnhancement

string

Indicates whether the Image Quality Enhancement switch is turned on for design and 3D scenarios.

**Valid values:**

-   off :
    
-   on :
    

off

VideoEncPolicy

string

The video encoding feature.

**Valid values:**

-   qualityFirst :
    
    The priority given to the image quality.
    
-   bandwidthFirst :
    
    The priority given to the bitrate.
    

qualityFirst

TargetFps

integer

The destination frame rate. Valid values: 10 to 60. Unit: fps.

30

VideoEncMinQP

integer

The minimum quantizer parameter (QP) of video files. A smaller QP value indicates higher video quality. Valid values: 0 to 51.

20

VideoEncMaxQP

integer

The maximum quantizer parameter (QP) of video files. A larger QP value indicates worse video quality. Valid values: 0 to 51.

20

VideoEncAvgKbps

integer

The average bitrate for video encoding. Valid values: 1000 to 50000.

1000

VideoEncPeakKbps

integer

The peak bitrate for video encoding. Valid values: 1000 to 50000.

1000

DeviceRedirects

array<object>

The device redirection rules.

object

The device redirection rule.

DeviceType

string

The peripheral type.

**Valid values:**

-   printer :
    
-   scanner :
    
-   camera :
    
-   adb :
    
    The Android Debug Bridge (ADB) device.
    

camera

RedirectType

string

The redirection type. Valid values:

-   usbRedirect
    
-   deviceRedirect
    
-   off: direction disabled.
    

usbRedirect

DeviceRules

array<object>

The custom peripheral rules.

object

The custom peripheral rule.

DeviceType

string

The peripheral type.

**Valid values:**

-   usbKey :
    
-   other :
    
-   graphicsTablet :
    
-   printer :
    
-   cardReader :
    
-   scanner :
    
-   storage :
    
-   camera :
    
-   adb :
    
-   networkInterfaceCard :
    
    The NIC device.
    

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

**Valid values:**

-   deviceRedirect :
    
-   usbRedirect :
    
-   off :
    
    Redirection disabled.
    

usbRedirect

OptCommand

string

The link optimization command.

2:0

Platforms

string

WyAssistant

string

Specifies whether to provide the AI Assistant function in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace desktop clients (including the Windows client and the macOS client).

**Note**

Desktop clients of V7.7 and higher versions required.

**Valid values:**

-   off :
    
    The AI Aisstant function is not provided.
    
-   on :
    
    The AI Aisstant function is provided.
    

on

ResourceRegionId

string

The region of the cloud computer policy.

**Note**

The value of a region-less policy is `center`.

center

DomainList

string

Specifies whether to enable the access control for domain names. Domain names support wildcards (\*). Separate multiple domain names with commas (,).

**Valid values:**

-   off :
    
-   on :
    

off

StatusMonitor

string

Specifies whether to provide the Metrics function in the DesktopAssistant.

**Valid values:**

-   off :
    
    Not provided.
    
-   on :
    
    Provided.
    

on

MobileRestart

string

Specifies whether to display the restart button in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace mobile clients (including the Android client and the iOS client).

**Note**

Mobile clients of V7.4 and higher versions required.

**Valid values:**

-   off :
    
    Not provided.
    
-   on :
    
    Provided.
    

off

MobileShutdown

string

Specifies whether to display the shut down button in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace mobile clients (including the Android client and the iOS client).

**Note**

Mobile clients of V7.4 and higher versions required.

**Valid values:**

-   off :
    
    Not provided.
    
-   on :
    
    Provided.
    

off

DesktopCount

integer

The number of cloud computers bound with this policy.

1

DesktopGroupCount

integer

The number of shared cloud computers bound with this policy.

1

ResourceGroupCount

integer

The number of resource groups bound with this policy.

1

RecordEventFilePaths

array

The array of absolute paths of the monitored files in the screen recording audit policy.

string

The absolute path of the monitored file in the screen recording audit policy.

d:/data

RecordEventRegisters

array

The array of absolute paths of the monitored registry entries in the screen recording audit policy.

string

The absolute path of the monitored registry entry in the screen recording audit policy.

计算机\\HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR

RecordEventDuration

integer

The recording duration since a target event is detected by the screen recording audit policy. Unit: Minute. Valid values: 10-60.

10

ResetDesktop

string

Resets the cloud computer.

null

FileTransfer

string

Transfers files.

null

DeviceConnectHint

string

ResolutionModel

string

ResolutionWidth

integer

ResolutionHeight

integer

FileMigrate

string

WuyingKeeper

string

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

AutoReconnect

string

The automatic client connection recovery configurations.

off

MobileWuyingKeeper

string

Indicates whether the Cloud Computer Manager is enabled for mobile clients.

off

MobileSafeMenu

string

Indicates whether the Windows security control is enabled for mobile clients.

off

MobileWyAssistant

string

Indicates whether the Xiaoying AI Assistant is enabled for mobile clients.

off

ExternalDrive

string

ClientCreateSnapshot

string

WatermarkShadow

string

AcademicProxy

string

ModelLibrary

string

PortProxy

string

DiskOverload

string

CpuOverload

string

MemoryOverload

string

ResolutionDpi

integer

HoverConfigMsg

string

MultiScreen

string

HoverShutdown

string

HoverRestart

string

HoverHibernate

string

ClientShutdown

string

ClientRestart

string

ClientHibernate

string

RecordEventLevels

array<object>

Indicates whether the screen recording event severity is enabled.

object

EventType

string

The event type.

EventLevel

string

The event severity.

RecordEventFileExts

array

The screen recording file suffix.

string

## Examples

Success response

`JSON` format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "Count": 0,
  "PageNumber": 0,
  "PageSize": 0,
  "DescribePolicyGroups": [
    {
      "PolicyStatus": "AVAILABLE",
      "Html5Access": "off",
      "WatermarkType": "EndUserId",
      "PreemptLogin": "off",
      "WatermarkCustomText": "custom-watermark",
      "Clipboard": "off",
      "PolicyGroupId": "pg-gx2x1dhsmthe9****",
      "PrinterRedirection": "on",
      "WatermarkTransparency": "LIGHT",
      "Html5FileTransfer": "off",
      "UsbRedirect": "on",
      "PolicyGroupType": "SYSTEM",
      "Watermark": "on",
      "VisualQuality": "medium",
      "EdsCount": 2,
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
          "Status": "ON",
          "ClientType": "windows"
        }
      ],
      "PreemptLoginUsers": [
        "Alice"
      ],
      "GpuAcceleration": "off",
      "UsbSupplyRedirectRule": [
        {
          "VendorId": "04**",
          "ProductId": "08**",
          "Description": "测试规则",
          "UsbRedirectType": 1,
          "DeviceClass": "0Eh",
          "DeviceSubclass": "xxh",
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
      "Recording": "OFF",
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
      "InternetCommunicationProtocol": "BOTH",
      "VideoRedirect": "off",
      "WatermarkTransparencyValue": 10,
      "WatermarkColor": 0,
      "WatermarkFontSize": 10,
      "WatermarkFontStyle": "plain",
      "WatermarkDegree": -10,
      "WatermarkRowAmount": 5,
      "EndUserApplyAdminCoordinate": "on",
      "EndUserGroupCoordinate": "on",
      "CpuProtectedMode": "on",
      "CpuRateLimit": 70,
      "CpuSampleDuration": 10,
      "CpuSingleRateLimit": 70,
      "CpuDownGradeDuration": 30,
      "CpuProcessors": [
        "chrome.exe"
      ],
      "MemoryProtectedMode": "on",
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
      "RecordingUserNotifyMessage": "您的云电脑正在被录屏",
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
      "VideoEncPeakKbps": 1000,
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
      "ResourceRegionId": "center",
      "DomainList": "off",
      "StatusMonitor": "on",
      "MobileRestart": "off",
      "MobileShutdown": "off",
      "DesktopCount": 1,
      "DesktopGroupCount": 1,
      "ResourceGroupCount": 1,
      "RecordEventFilePaths": [
        "d:/data"
      ],
      "RecordEventRegisters": [
        "计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR"
      ],
      "RecordEventDuration": 10,
      "ResetDesktop": "null",
      "FileTransfer": "null",
      "DeviceConnectHint": "",
      "ResolutionModel": "",
      "ResolutionWidth": 0,
      "ResolutionHeight": 0,
      "FileMigrate": "",
      "WuyingKeeper": "",
      "InternetPrinter": "",
      "SafeMenu": "",
      "ScreenDisplayMode": "",
      "ClientControlMenu": "",
      "FileTransferSpeedLocation": "",
      "FileTransferAddress": "",
      "FileTransferSpeed": "",
      "CpdDriveClipboard": "",
      "UseTime": "",
      "AutoReconnect": "off",
      "MobileWuyingKeeper": "off",
      "MobileSafeMenu": "off",
      "MobileWyAssistant": "off",
      "ExternalDrive": "",
      "ClientCreateSnapshot": "",
      "WatermarkShadow": "",
      "AcademicProxy": "",
      "ModelLibrary": "",
      "PortProxy": "",
      "DiskOverload": "",
      "CpuOverload": "",
      "MemoryOverload": "",
      "ResolutionDpi": 0,
      "HoverConfigMsg": "",
      "MultiScreen": "",
      "HoverShutdown": "",
      "HoverRestart": "",
      "HoverHibernate": "",
      "ClientShutdown": "",
      "ClientRestart": "",
      "ClientHibernate": "",
      "RecordEventLevels": [
        {
          "EventType": "",
          "EventLevel": ""
        }
      ],
      "RecordEventFileExts": [
        ""
      ]
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribePolicyGroups#workbench-doc-change-demo) for a complete list.
