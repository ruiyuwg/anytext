Modifies cloud computer policies.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyPolicyGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyPolicyGroup)

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

The ID of the region. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to query the regions that WUYING Workspace supports.

cn-hangzhou

PolicyGroupId

string

Yes

The ID of the cloud computer policy.

pg-gx2x1dhsmthe9\*\*\*\*

Name

string

No

The name of the cloud computer policy.

testPolicyGroupName

Clipboard

string

No

The clipboard redirection policy.

**Valid values:**

-   read :
    
    One-way transfer. Copy content from your local computer to the cloud computer. You cannot copy content from the cloud computer to your local computer.
    
-   readwrite :
    
    Two-way transfer. Copy content between your local computer and the cloud computer.
    
-   write :
    
    One-way transfer. Copy content from the cloud computer to your local computer. You cannot copy content from your local computer to the cloud computer.
    
-   off :
    
    Disabled. Prevents copying content between the cloud computer and your local computer. This is the default value.
    

off

LocalDrive

string

No

The local disk mapping policy.

**Valid values:**

-   read :
    
    Read-only. Maps local disks to the cloud computer. You can read (copy) local files but cannot modify them.
    
-   readwrite :
    
    Read and write. Maps local disks to the cloud computer. You can read (copy) and modify local files.
    
-   off :
    
    Disabled. Does not map local disks to the cloud computer. This is the default value.
    

off

UsbRedirect

string

No

The USB redirection policy.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

off

VisualQuality

string

No

The image display quality.

**Valid values:**

-   high :
    
    High
    
-   low :
    
    Low
    
-   lossless :
    
    Lossless
    
-   medium :
    
    Medium. This is the default value.
    

low

Html5Access

string

No

The policy for access from web clients.

**Note**

Use the `ClientType` parameter to manage logon methods.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

off

Html5FileTransfer

string

No

The policy for file transfers from web clients.

**Valid values:**

-   all :
    
    Allows file uploads and downloads
    
-   download :
    
    Allows file downloads
    
-   upload :
    
    Allows file uploads
    
-   off :
    
    Disabled. This is the default value.
    

off

Watermark

string

No

The watermark policy.

**Valid values:**

-   blind :
    
    Enables blind watermarks
    
-   off :
    
    Disables watermarks
    
-   on :
    
    Enables visible watermarks
    

off

WatermarkType

string

No

The type of watermark. You can specify up to three types. Separate them with commas.

**Note**

If you set this parameter to `Custom`, you must also specify the custom text in the `WatermarkCustomText` parameter.

**Valid values:**

-   EndUserId :
    
    Username
    
-   Custom :
    
    Custom text
    
-   DesktopIp :
    
    IP address of the cloud computer
    
-   ClientIp :
    
    IP address of the client
    
-   HostName :
    
    The last 15 characters of the cloud computer ID
    
-   ClientTime :
    
    Current time on the cloud computer
    

EndUserId

WatermarkTransparency

string

No

The transparency of the watermark.

**Valid values:**

-   LIGHT :
    
    Light. This is the default value.
    
-   DARK :
    
    Dark
    
-   MIDDLE :
    
    Medium
    

LIGHT

PreemptLogin

string

No

The policy for preemptible logon.

**Note**

To ensure the user experience and data security of the current user, other users cannot preempt the cloud computer. This parameter is set to `off` by default and cannot be changed.

**Valid values:**

-   off :
    
    Multiple users cannot preempt each other. This is the default value.
    

off

DomainList

string

No

The domain names that can be accessed. Wildcard characters (\*) are supported. Separate multiple domain names with commas.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

on

PrinterRedirection

string

No

The printer redirection policy.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

off

PreemptLoginUser

array

No

The usernames of users who can preempt the logon of a cloud computer. You can specify up to five usernames.

**Note**

To ensure the user experience and data security of the current user, other users cannot preempt the cloud computer.

string

No

The username of the user who can preempt the cloud computer.

Alice

AuthorizeSecurityPolicyRule

array<object>

No

A list of security group rules.

object

No

The security group rule.

Type

string

No

The direction of the security group rule.

**Valid values:**

-   outflow :
    
    Outbound
    
-   inflow :
    
    Inbound
    

inflow

Policy

string

No

The policy of the security group rule.

**Valid values:**

-   drop :
    
    Deny. Denies all access requests. The system does not return a rejection message. The request times out or fails to connect.
    
-   accept :
    
    Allow. Allows all access requests.
    

accept

PortRange

string

No

The port range of the security group rule. The value of this parameter depends on the \`IpProtocol\` parameter:

-   If the protocol is TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start and end port numbers. For example: 1/200.
    
-   If the protocol is ICMP, the port range is -1/-1.
    
-   If the protocol is GRE, the port range is -1/-1.
    
-   If IpProtocol is set to all, the port range is -1/-1.
    

For more information about common ports, see [Common ports](/help/en/ecs/user-guide/common-ports).

22/22

Description

string

No

The description of the security group rule.

test

IpProtocol

string

No

The protocol type of the security group rule.

**Valid values:**

-   UDP :
    
    UDP
    
-   TCP :
    
    TCP
    
-   ALL :
    
    All protocols
    
-   GRE :
    
    GRE
    
-   ICMP :
    
    ICMP (IPv4)
    

TCP

Priority

string

No

The priority of the security group rule. A smaller value indicates a higher priority. Valid values: 1 to 60. Default value: 1.

1

CidrIp

string

No

The destination IPv4 address range. Specify the value in CIDR notation.

10.0.XX.XX/8

RevokeSecurityPolicyRule

array<object>

No

The security group rules to delete.

object

No

The security group rule to delete.

Type

string

No

The direction of the security group rule to delete.

**Valid values:**

-   outflow :
    
    Outbound
    
-   inflow :
    
    Inbound
    

outflow

Policy

string

No

The policy of the security group rule to delete.

**Valid values:**

-   drop :
    
    Deny. Denies all access requests. The system does not return a rejection message. The request times out or fails to connect.
    
-   accept :
    
    Allow. Allows all access requests. This is the default value.
    

accept

PortRange

string

No

The port range of the security group rule to delete. The value of this parameter depends on the \`IpProtocol\` parameter:

-   If the protocol is TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start and end port numbers. For example: 1/200.
    
-   If the protocol is ICMP, the port range is -1/-1.
    
-   If the protocol is GRE, the port range is -1/-1.
    
-   If IpProtocol is set to all, the port range is -1/-1.
    

For more information about common ports, see [Common ports](/help/en/ecs/user-guide/common-ports).

22/22

Description

string

No

The description of the security group rule to delete.

test

IpProtocol

string

No

The protocol type of the security group rule to delete.

**Valid values:**

-   TCP :
    
    TCP
    
-   UDP :
    
    UDP
    
-   ALL :
    
    All protocols
    
-   GRE :
    
    GRE
    
-   ICMP :
    
    ICMP (IPv4)
    

tcp

Priority

string

No

The priority of the security group rule to delete. A smaller value indicates a higher priority. Valid values: 1 to 60. Default value: 1.

1

CidrIp

string

No

The destination IPv4 address range to delete. Specify the value in CIDR notation.

47.100.XX.XX/16

AuthorizeAccessPolicyRule

array<object>

No

The client IP address whitelist.

object

No

The client IP address whitelist object.

Description

string

No

The description of the client IP address whitelist.

test

CidrIp

string

Yes

The client IP address range. Specify the value in CIDR notation.

47.100.XX.XX/16

RevokeAccessPolicyRule

array<object>

No

The client IP address whitelist to delete.

object

No

The client IP address whitelist to delete.

Description

string

No

The description of the client IP address whitelist to delete.

test

CidrIp

string

No

The client IP address range to delete. Specify the value in CIDR notation.

47.100.XX.XX/16

ClientType

array<object>

No

A list of logon method control rules.

object

No

The logon method control rule.

ClientType

string

No

The type of client.

**Note**

If you do not specify this parameter, logons from all client types are allowed by default.

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

Status

string

No

Specifies whether to allow logons from this client type.

**Note**

If you do not specify this parameter, logons from all client types are allowed by default.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

ON

GpuAcceleration

string

No

Specifies whether to enable the image quality policy for graphics cloud desktops. Enabling this policy improves performance and user experience in professional design scenarios.

**Valid values:**

-   off :
    
    Disable
    
-   on :
    
    Enable
    

off

UsbSupplyRedirectRule

array<object>

No

The USB redirection rules.

object

No

The USB redirection rule.

VendorId

string

No

The vendor ID (VID). For more information, see [Valid USB Vendor IDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

04\*\*

ProductId

string

No

The product ID (PID).

08\*\*

Description

string

No

The description of the rule.

测试规则

UsbRedirectType

integer

No

The USB redirection type.

**Valid values:**

-   1 :
    
    Allow
    
-   2 :
    
    Deny
    

1

DeviceClass

string

No

The device class. This parameter is required when \`UsbRuleType\` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).

0Eh

DeviceSubclass

string

No

The device subclass. This parameter is required when \`UsbRuleType\` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).

xxh

UsbRuleType

integer

No

The type of USB redirection rule.

**Valid values:**

-   1 :
    
    Device class
    
-   2 :
    
    Device vendor
    

1

DomainResolveRuleType

string

No

The type of domain name resolution policy.

**Valid values:**

-   OFF :
    
    Disabled
    
-   ON :
    
    Enabled
    

OFF

DomainResolveRule

array<object>

No

The details of the domain name resolution policy.

object

No

The details of the domain name resolution policy.

Domain

string

No

The domain name.

\*.example.com

Policy

string

No

The resolution policy.

**Valid values:**

-   allow :
    
    Allow
    
-   block :
    
    Block
    

allow

Description

string

No

The description of the policy.

策略描述。

Recording

string

No

Specifies whether to enable screen recording.

**Valid values:**

-   byaction\_cmd\_ft :
    
    Records user actions. Recording is triggered by both command execution and file transfers.
    
-   ALLTIME :
    
    Records the entire session, from when a user connects to the cloud computer to when the user disconnects.
    
-   session :
    
    Records the session lifecycle.
    
-   PERIOD :
    
    Records during a specified time period. You must set the start and end times for the recording.
    
-   byaction\_commands :
    
    Records user actions. Recording is triggered only by command execution.
    
-   OFF :
    
    Disables screen recording.
    
-   byaction\_file\_transfer :
    
    Records user actions. Recording is triggered only by file transfers.
    

OFF

RecordingStartTime

string

No

The start time of the screen recording. The time is in the HH:MM:SS format. This parameter is valid only when \`Recording\` is set to \`PERIOD\`.

08:00:00

RecordingEndTime

string

No

The end time of the screen recording. The time is in the HH:MM:SS format. This parameter is valid only when \`Recording\` is set to \`PERIOD\`.

08:59:00

RecordingFps

integer

No

The frame rate for screen recording. Unit: frames per second (fps).

**Valid values:**

-   2 :
    
    2
    
-   5 :
    
    5
    
-   10 :
    
    10
    
-   15 :
    
    15
    

5

RecordingExpires

integer

No

The retention period of screen recording files. Valid values: 1 to 180. Unit: days.

15

NetRedirect

string

No

Specifies whether to enable network redirection.

**Note**

This feature is available only for invitational preview. It is not publicly available.

**Valid values:**

-   off :
    
    Disabled. This is the default value.
    
-   on :
    
    Enabled
    

on

CameraRedirect

string

No

Specifies whether to enable local camera redirection.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled. This is the default value.
    

on

AppContentProtection

string

No

Specifies whether to enable screen capture prevention.

**Valid values:**

-   off :
    
    Disabled. This is the default value.
    
-   on :
    
    Enabled
    

on

RecordContent

string

No

Specifies whether to enable custom screen recording.

**Valid values:**

-   off :
    
    Disabled. This is the default value.
    
-   on :
    
    Enabled
    

OFF

RecordContentExpires

integer

No

The expiration time of custom screen recording files. The default value is 30. Unit: days.

30

RemoteCoordinate

string

No

The remote assistance policy for keyboard and mouse control.

**Valid values:**

-   optionalControl :
    
    Disabled by default. Users can request to enable it.
    
-   fullControl :
    
    Full control
    
-   disableControl :
    
    No control
    

fullControl

RecordingDuration

integer

No

The duration for viewing a screen recording file. Unit: minutes. The recorded files are automatically split into chunks and uploaded to a bucket based on the specified duration. When a file reaches 300 MB, it is overwritten on a rolling basis.

**Valid values:**

-   10 :
    
    10
    
-   20 :
    
    20
    
-   30 :
    
    30
    
-   60 :
    
    60
    

10

Scope

string

No

The scope of the policy.

**Valid values:**

-   IP :
    
    The policy takes effect based on the IP address.
    
-   GLOBAL :
    
    The policy takes effect globally.
    

GLOBAL

ScopeValue

array

No

The value of the scope. This parameter is valid only when \`Scope\` is set to \`IP\`.

string

No

The CIDR block to which the policy applies.

47.100.XX.XX/24

RecordingAudio

string

No

Specifies whether to record audio from the cloud computer.

**Valid values:**

-   off :
    
    Records only video without audio.
    
-   on :
    
    Records both video and audio.
    

on

InternetCommunicationProtocol

string

No

The network communication protocol.

**Valid values:**

-   TCP :
    
    Allows only TCP. This is the default value.
    
-   BOTH :
    
    Allows automatic switching between TCP and UDP.
    

BOTH

VideoRedirect

string

No

Specifies whether to enable multimedia redirection.

on

WatermarkTransparencyValue

integer

No

The transparency of the watermark. A larger value indicates lower transparency. Valid values: 10 to 100.

10

WatermarkColor

integer

No

The font color of the watermark. Valid values: 0 to 16777215.

0

WatermarkDegree

number

No

The angle of the watermark. Valid values: -10 to -30.

\-10

WatermarkFontSize

integer

No

The font size of the watermark. Valid values: 10 to 20.

10

WatermarkFontStyle

string

No

The font style of the watermark.

**Valid values:**

-   plain :
    
    Plain
    
-   bold :
    
    Bold
    

plain

WatermarkRowAmount

integer

No

The number of watermark rows.

**Note**

This parameter is not yet available.

3

EndUserApplyAdminCoordinate

string

No

Specifies whether to allow users to request assistance from the administrator.

**Valid values:**

-   off :
    
    Off
    
-   on :
    
    On
    

on

EndUserGroupCoordinate

string

No

Specifies whether to enable stream collaboration between users.

**Valid values:**

-   off :
    
    Off
    
-   on :
    
    On
    

on

WatermarkSecurity

string

No

The security priority rule for watermarks.

**Valid values:**

-   off :
    
    Disables the rule.
    
-   on :
    
    Enables the rule.
    

off

AdminAccess

string

No

Specifies whether a user has administrative permissions after logging on to the cloud computer.

**Note**

This feature is available only for invitational preview. It is not publicly available.

deny

WatermarkAntiCam

string

No

Specifies whether to enable the screen capture prevention watermark feature.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

off

WatermarkPower

string

No

The strength of the blind watermark.

**Valid values:**

-   high :
    
    High
    
-   low :
    
    Low
    
-   medium :
    
    Medium
    

medium

RecordingUserNotify

string

No

Specifies whether to send a notification to the client when a screen recording starts.

**Valid values:**

-   off :
    
    Disabled
    
-   on :
    
    Enabled
    

off

RecordingUserNotifyMessage

string

No

The content of the screen recording notification. This parameter is optional.

您的云电脑正在被录屏

MaxReconnectTime

integer

No

The maximum amount of time that the client can attempt to reconnect to the cloud computer after an unexpected disconnection. Valid values: 30 to 7200. Unit: seconds.

120

DeviceRedirects

array<object>

No

The device redirection rules.

object

No

The device redirection rule.

DeviceType

string

No

The type of peripheral device.

**Valid values:**

-   printer :
    
    Printer
    
-   scanner :
    
    Scanner
    
-   camera :
    
    Camera
    
-   adb :
    
    Android device
    

camera

RedirectType

string

No

The redirection type.

**Valid values:**

-   deviceRedirect :
    
    Device redirection
    
-   usbRedirect :
    
    USB redirection
    
-   off :
    
    Disable redirection
    

usbRedirect

DeviceRules

array<object>

No

The custom peripheral device rules.

object

No

The custom peripheral device rule.

DeviceType

string

No

The type of peripheral device.

**Valid values:**

-   usbKey :
    
    UKey
    
-   other :
    
    Other
    
-   graphicsTablet :
    
    Graphics tablet
    
-   printer :
    
    Printer
    
-   cardReader :
    
    Card reader
    
-   scanner :
    
    Scanner
    
-   storage :
    
    Storage device
    
-   camera :
    
    Camera
    
-   adb :
    
    Android device
    
-   networkInterfaceCard :
    
    Network interface controller (NIC)
    

storage

DeviceName

string

No

The name of the device.

sandisk

DevicePid

string

No

The product ID (PID).

0x0781

DeviceVid

string

No

The vendor ID (VID). For more information, see [Valid USB Vendor IDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

0x55b1

RedirectType

string

No

The redirection type.

**Valid values:**

-   deviceRedirect :
    
    Device redirection
    
-   usbRedirect :
    
    USB redirection
    
-   off :
    
    Disabled
    

usbRedirect

OptCommand

string

No

The link optimization command.

2:0

Platforms

string

No

WyAssistant

string

No

Specifies whether to display the entry for Alibaba Cloud AI Assistant in the floating bar of the cloud computer.

**Valid values:**

-   off :
    
    Hides the entry for Alibaba Cloud AI Assistant.
    
-   on :
    
    Displays the entry for Alibaba Cloud AI Assistant.
    

on

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

RequestId

string

The ID of the request.

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

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyPolicyGroup#workbench-doc-change-demo) for a complete list.
