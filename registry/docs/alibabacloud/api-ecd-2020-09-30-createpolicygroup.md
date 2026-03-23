Creates a cloud computer policy.

## Operation description

A cloud computer policy is a set of rules for performance and security. These rules configure features such as local disk mapping, USB redirection, watermarks, and DNS control. For more information, see [Policy overview](/help/en/wuying-workspace/user-guide/cloud-computer-policy-overview).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreatePolicyGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/CreatePolicyGroup)

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

The region ID. Call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to obtain the list of regions that support WUYING Workspace.

cn-hangzhou

Clipboard

string

No

The clipboard permission.

**Valid values:**

-   read :
    
    one-way transfer. You can copy content from your local computer to the cloud computer, but not the other way around.
    
-   readwrite :
    
    bidirectional transfer. You can copy content between your local computer and the cloud computer.
    
-   write :
    
    one-way transfer. You can copy content from the cloud computer to your local computer, but not the other way around.
    
-   off :
    
    disabled. You cannot copy content between the cloud computer and your local computer. \[Default\]
    

off

LocalDrive

string

No

The local disk mapping permission.

**Valid values:**

-   read :
    
    read-only. The local disk is mapped to the cloud computer. You can read and copy local files, but you cannot modify them.
    
-   readwrite :
    
    read and write. The local disk is mapped to the cloud computer. You can read, copy, and modify local files.
    
-   off :
    
    disabled. The local disk is not mapped to the cloud computer. \[Default\]
    

off

UsbRedirect

string

No

USB redirection.

**Valid values:**

-   off :
    
    disabled \[Default\]
    
-   on :
    
    enabled
    

off

VisualQuality

string

No

The image display quality policy.

**Valid values:**

-   high :
    
    high definition
    
-   low :
    
    low definition
    
-   lossless :
    
    lossless
    
-   medium :
    
    adaptive \[Default\]
    

medium

Html5Access

string

No

The policy for access from web clients.

**Note**

Use the `ClientType` parameters to manage logon methods.

**Valid values:**

-   off :
    
    disabled \[Default\]
    
-   on :
    
    enabled
    

off

Html5FileTransfer

string

No

The file transfer policy for web clients.

**Valid values:**

-   all :
    
    allows uploads and downloads
    
-   download :
    
    allows downloads
    
-   upload :
    
    allows uploads
    
-   off :
    
    disabled \[Default\]
    

off

Watermark

string

No

The watermark feature.

**Valid values:**

-   blind :
    
    enables invisible watermarks
    
-   off :
    
    disables watermarks \[Default\]
    
-   on :
    
    enables visible watermarks
    

off

Name

string

No

The policy name.

testPolicyGroupName

WatermarkType

string

No

The type of watermark. You can specify up to three types. Separate multiple types with commas (,).

**Note**

If you set this parameter to `custom`, you must also specify the `WatermarkCustomText` parameter.

**Valid values:**

-   EndUserId :
    
    username
    
-   Custom :
    
    custom text
    
-   DesktopIp :
    
    cloud computer IP address
    
-   ClientIp :
    
    client IP address
    
-   HostName :
    
    the last 15 characters of the cloud computer ID
    
-   ClientTime :
    
    current time of the cloud computer
    

EndUserId

WatermarkTransparency

string

No

The transparency of the watermark.

**Valid values:**

-   LIGHT :
    
    light \[Default\]
    
-   DARK :
    
    dark
    
-   MIDDLE :
    
    medium
    

LIGHT

PreemptLogin

string

No

The preemption policy.

**Note**

To ensure the user experience and data security of the end users who are using cloud computers, mutual preemption among multiple users is not allowed. This parameter is set to `off` by default and cannot be changed.

**Valid values:**

-   off :
    
    Mutual preemption among multiple users is not allowed. \[Default\]
    

off

DomainList

string

No

The policy for controlling access to domain names. You can use a wildcard character (\*). Separate multiple domain names with commas (,).

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled
    

off

PrinterRedirection

string

No

The printer redirection policy.

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled
    

on

PreemptLoginUser

array

No

The usernames of the users that are allowed to preempt the cloud computer. You can specify up to five usernames.

**Note**

To ensure the user experience and data security of the end users who are using cloud computers, mutual preemption among multiple users is not allowed.

Alice

string

No

The username of a user that can preempt the cloud computer.

Alice

AuthorizeSecurityPolicyRule

array<object>

No

The list of security group rules.

object

No

A security group rule.

Type

string

No

The direction of the security group rule.

**Valid values:**

-   outflow :
    
    outbound
    
-   inflow :
    
    inbound
    

inflow

Policy

string

No

The authorization policy of the security group rule.

**Valid values:**

-   drop :
    
    denies all access requests. No rejection message is returned. The requester receives a timeout error or fails to establish a connection.
    
-   accept :
    
    accepts all access requests. \[Default\]
    

accept

PortRange

string

No

The port range of the security group rule. The value of this parameter depends on the value of the \`IpProtocol\` parameter.

-   If \`IpProtocol\` is set to TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start port and the end port. For example: 1/200.
    
-   If \`IpProtocol\` is set to ICMP, the port range is -1/-1.
    
-   If \`IpProtocol\` is set to GRE, the port range is -1/-1.
    
-   If \`IpProtocol\` is set to all, the port range is -1/-1.
    

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

-   TCP :
    
    TCP
    
-   UDP :
    
    UDP
    
-   ALL :
    
    all protocols
    
-   GRE :
    
    GRE
    
-   ICMP :
    
    ICMP for IPv4
    

tcp

Priority

string

No

The priority of the security group rule. A smaller value indicates a higher priority.  
Valid values: 1 to 60.  
Default value: 1.  
  
  
  
  

1

CidrIp

string

No

The object of the security group rule. The value is an IPv4 CIDR block.

47.100.XX.XX/16

AuthorizeAccessPolicyRule

array<object>

No

The client IP address whitelist. After you configure this parameter, only IP addresses in the whitelist can access the cloud computer.

object

No

The client IP address whitelist.

Description

string

No

The description of the client IP address whitelist.

华北分公司

CidrIp

string

No

The client IP address CIDR block. The value is an IPv4 CIDR block.

47.100.XX.XX/16

ClientType

array<object>

No

The list of logon method control rules. These rules control which clients can be used to access the cloud computer.

object

No

A logon method control rule.

Status

string

No

Logon method control. Specifies whether to allow a specific type of client to log on to the cloud computer.

**Note**

If you do not configure the `ClientType` parameters, all types of clients are allowed to log on to the cloud computer by default.

**Valid values:**

-   OFF :
    
    not allowed
    
-   ON :
    
    allowed
    

ON

ClientType

string

No

Logon method control. Specifies the client type.

**Note**

If you do not configure the `ClientType` parameters, all types of clients are allowed to log on to the cloud computer by default.

**Valid values:**

-   html5 :
    
    web client
    
-   android :
    
    Android client
    
-   ios :
    
    iOS client
    
-   windows :
    
    Windows client
    
-   macos :
    
    macOS client
    

windows

GpuAcceleration

string

No

Specifies whether to enable the image quality policy for graphics cloud computers. Enable this policy for scenarios that require high performance and user experience, such as professional design.

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled
    

off

UsbSupplyRedirectRule

array<object>

No

The USB redirection rules.

object

No

A USB redirection rule.

VendorId

string

No

The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

04\*\*

ProductId

string

No

The product ID (PID).

08\*\*

Description

string

No

The rule description.

测试规则

UsbRedirectType

integer

No

The USB redirection type.

**Valid values:**

-   1 :
    
    allow
    
-   2 :
    
    deny
    

1

DeviceClass

string

No

The device class. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).

0Eh

DeviceSubclass

string

No

The device subclass. This parameter is required when `usbRuleType` is set to 1. For more information, see [Defined Class Codes](https://www.usb.org/defined-class-codes).

xxh

UsbRuleType

integer

No

The USB redirection rule type.

**Valid values:**

-   1 :
    
    device class
    
-   2 :
    
    device vendor
    

1

DomainResolveRuleType

string

No

The type of the domain name resolution policy.

**Valid values:**

-   OFF :
    
    disabled
    
-   ON :
    
    enabled
    

OFF

DomainResolveRule

array<object>

No

The details of the domain name resolution policy.

object

No

A domain name resolution policy.

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
    
    allow
    
-   block :
    
    deny
    

allow

Description

string

No

The policy description.

测试规则

Recording

string

No

Specifies whether to enable screen recording.

**Valid values:**

-   byaction\_cmd\_ft :
    
    records the screen when a user runs a command or transfers a file.
    
-   ALLTIME :
    
    records the screen for the entire session, from when a user connects to the cloud computer to when the user disconnects.
    
-   session :
    
    records the screen based on the session lifecycle.
    
-   PERIOD :
    
    records the screen at specified intervals. You must set the start and end times for recording.
    
-   byaction\_commands :
    
    records the screen only when a user runs a command.
    
-   OFF :
    
    disables screen recording.
    
-   byaction\_file\_transfer :
    
    records the screen only when a user transfers a file.
    

OFF

RecordingStartTime

string

No

The time when screen recording starts. The value is in the HH:MM:SS format. This parameter is valid only when \`Recording\` is set to \`PERIOD\`.

08:00:00

RecordingEndTime

string

No

The time when screen recording ends. The value is in the HH:MM:SS format. This parameter is valid only when \`Recording\` is set to \`PERIOD\`.

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
    

2

RecordingExpires

integer

No

The retention period of the recording file. Valid values: 1 to 180. Unit: days.

15

CameraRedirect

string

No

Specifies whether to enable local camera redirection.

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled \[Default\]
    

on

NetRedirect

string

No

Specifies whether to enable network redirection.

**Note**

This feature is in invitational preview and is not available to the public.

**Valid values:**

-   off :
    
    disabled \[Default\]
    
-   on :
    
    enabled
    

off

AppContentProtection

string

No

Specifies whether to enable the anti-screenshot feature.

**Valid values:**

-   off :
    
    disabled \[Default\]
    
-   on :
    
    enabled
    

off

RecordContent

string

No

Specifies whether to enable custom screen recording.

**Valid values:**

-   off :
    
    disabled \[Default\]
    
-   on :
    
    enabled
    

OFF

RecordContentExpires

integer

No

The expiration time of custom recording files. The default value is 30. Unit: days.

30

RemoteCoordinate

string

No

The keyboard and mouse control permissions for remote assistance.

**Valid values:**

-   optionalControl :
    
    disabled by default (can be requested to be enabled)
    
-   fullControl :
    
    full control
    
-   disableControl :
    
    no control
    

fullControl

RecordingDuration

integer

No

The duration for viewing the recording file. Unit: minutes. The recording file is automatically split based on the specified duration and uploaded to a bucket. If a file reaches 300 MB, it is rolled over first.

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
    
    takes effect based on the IP address
    
-   GLOBAL :
    
    takes effect globally
    

GLOBAL

ScopeValue

array

No

This parameter is required when `Scope` is set to `IP`. It takes effect only when `Scope` is set to `IP`.

string

No

The CIDR block that takes effect.

47.100.XX.XX/24

RecordingAudio

string

No

The option to record audio from the cloud computer.

**Valid values:**

-   off :
    
    records only the screen, not the audio
    
-   on :
    
    records both the screen and audio
    

on

InternetCommunicationProtocol

string

No

The network communication protocol.

**Valid values:**

-   TCP :
    
    allows only TCP \[Default\]
    
-   BOTH :
    
    allows automatic switching between TCP and UDP
    

both

VideoRedirect

string

No

Multimedia redirection.

**Valid values:**

-   off :
    
    disables media redirection
    
-   on :
    
    enables media redirection
    

on

WatermarkTransparencyValue

integer

No

The opacity of the watermark. A larger value indicates lower transparency. Valid values: 10 to 100.

10

WatermarkColor

integer

No

The font color of the watermark. Valid values: 0 to 16777215.

0

WatermarkDegree

number

No

The rotation angle of the watermark. Valid values: -10 to -30.

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
    
    plain
    
-   bold :
    
    bold
    

plain

WatermarkRowAmount

integer

No

The number of watermark rows.

**Note**

This parameter is not yet available.

5

EndUserApplyAdminCoordinate

string

No

Specifies whether to allow end users to request assistance from administrators.

**Valid values:**

-   OFF :
    
    disabled
    
-   ON :
    
    enabled
    

ON

EndUserGroupCoordinate

string

No

Specifies whether to enable stream collaboration between users.

**Valid values:**

-   OFF :
    
    disabled
    
-   ON :
    
    enabled
    

ON

WatermarkSecurity

string

No

The security priority rule for invisible watermarks.

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled
    

on

AdminAccess

string

No

Specifies whether a user has administrative permissions after logging on to the cloud computer.

**Note**

This feature is in invitational preview and is not available to the public.

deny

WatermarkAntiCam

string

No

The anti-screen-recording feature for invisible watermarks.

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled
    

off

WatermarkPower

string

No

The enhanced feature for invisible watermarks.

**Valid values:**

-   high :
    
    high
    
-   low :
    
    low
    
-   medium :
    
    medium
    

medium

RecordingUserNotify

string

No

The feature that sends notifications to the client when screen recording is in progress.

**Valid values:**

-   off :
    
    disabled
    
-   on :
    
    enabled
    

off

RecordingUserNotifyMessage

string

No

The content of the notification that is sent to the client when screen recording is in progress. You do not need to specify this parameter.

您的云电脑正在被录屏

MaxReconnectTime

integer

No

The maximum amount of time to retry the connection if the cloud computer is disconnected due to an unexpected event. Valid values: 30 to 7200. Unit: seconds.

120

DeviceRedirects

array<object>

No

The list of device redirection rules.

object

No

A device redirection rule.

DeviceType

string

No

The peripheral type.

**Valid values:**

-   printer :
    
    printer
    
-   scanner :
    
    scanner
    
-   camera :
    
    camera
    
-   adb :
    
    Android device
    

camera

RedirectType

string

No

The redirection type.

**Valid values:**

-   deviceRedirect :
    
    device redirection
    
-   usbRedirect :
    
    USB redirection
    
-   off :
    
    disables redirection
    

deviceRedirect

DeviceRules

array<object>

No

The list of custom peripheral rules.

object

No

A custom peripheral rule.

DeviceType

string

No

The peripheral type.

**Valid values:**

-   usbKey :
    
    UKey
    
-   other :
    
    other
    
-   graphicsTablet :
    
    graphics tablet
    
-   printer :
    
    printer
    
-   cardReader :
    
    card reader
    
-   scanner :
    
    scanner
    
-   storage :
    
    storage device
    
-   camera :
    
    camera
    
-   adb :
    
    Android device
    
-   networkInterfaceCard :
    
    network interface controller (NIC)
    

storage

DeviceName

string

No

The device name.

sandisk

DeviceVid

string

No

The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

0x0781

DevicePid

string

No

The product ID (PID).

0x55b1

RedirectType

string

No

The redirection type.

**Valid values:**

-   deviceRedirect :
    
    device redirection
    
-   usbRedirect :
    
    USB redirection
    
-   off :
    
    disables redirection
    

usbRedirect

OptCommand

string

No

The link optimization instruction.

2:0

Platforms

string

No

WyAssistant

string

No

When you connect to a cloud computer from a desktop client (including a Windows client and a macOS client), specifies whether to display the entry for the WUYING AI assistant in the floating ball on the cloud computer.

**Note**

This feature is available only for desktop clients of V7.7 or later.

**Valid values:**

-   off :
    
    does not display the entry
    
-   on :
    
    displays the entry
    

on

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

PolicyGroupId

string

The ID of the cloud computer policy.

pg-gx2x1dhsmthe9\*\*\*\*

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PolicyGroupId": "pg-gx2x1dhsmthe9****",
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/CreatePolicyGroup#workbench-doc-change-demo) for a complete list.
