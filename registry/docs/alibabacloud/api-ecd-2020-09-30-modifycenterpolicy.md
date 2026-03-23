Modifies a configuration that has no region-specific policy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyCenterPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyCenterPolicy)

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

ecd:ModifyCenterPolicy

update

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

RegionId

string

Yes

The region ID. Set the value to `cn-shanghai`.

**Valid values:**

-   cn-shanghai :
    
    China (Shanghai)
    

cn-shanghai

PolicyGroupId

string

Yes

The cloud computer policy ID.

pg-53iyi2aar0nd6\*\*\*\*

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

Clipboard

string

No

The read/write permissions on the clipboard.

**Valid values:**

-   read :
    
    Specifies one-way transfer. You can copy files only from on-premises devices to cloud computers.
    
-   readwrite :
    
    Specifies two-way transfer. You can copy files between on-premises devices and cloud computers.
    
-   write :
    
    Specifies one-way transfer. You can only copy files from cloud computers to on-premises devices.
    
-   off :
    
    (Default) Disables all transfers, both one-way and two-way. Files cannot be copied directly between on-premises devices and cloud computers.
    

off

LocalDrive

string

No

The read/write permissions on the on-premises drive.

**Valid values:**

-   read :
    
    Read-only. Cloud computers support on-premises disk mapping, but only for reading (copying) files—not modifying them.
    
-   readwrite :
    
    Read and write. Cloud computers support on-premises disk mapping, allowing you to read (copy) and write (modify) on-premises files.
    
-   off :
    
    (Default) None. Cloud computers don't support on-premises disk mapping.
    

off

UsbRedirect

string

No

Specifies whether to enable the USB redirection feature.

**Valid values:**

-   off :
    
    (Default)
    
-   on :
    

off

PrinterRedirect

string

No

The printer redirection policy. This parameter only applies if DeviceRedirects does not include a printer redirection policy.

**Valid values:**

-   deviceRedirect :
    
    (Default) Enables device redirection.
    
-   usbRedirect :
    
    Enables USB redirection.
    
-   off :
    
    Disables any type of redirection.
    

off

VisualQuality

string

No

The image display quality.

**Valid values:**

-   high :
    
    High-definition (HD).
    
-   low :
    
    Smoothness.
    
-   lossless :
    
    No quality loss.
    
-   medium :
    
    (Default) Scenario-specific adaptation.
    

low

GpuAcceleration

string

No

Specifies whether to enable Image Quality Control. This feature is highly recommended for professional design scenarios where performance and user experience are critical.

**Valid values:**

-   off :
    
-   on :
    

off

Html5FileTransfer

string

No

The file transfer policy on the web client.

**Valid values:**

-   all :
    
    File upload and download are supported.
    
-   download :
    
    Only file download is supported.
    
-   upload :
    
    Only file upload is supported.
    
-   off :
    
    (Default) File upload and download are not supported.
    

off

Watermark

string

No

The watermark policy.

**Valid values:**

-   blind :
    
    Displays invisible watermarks.
    
-   off :
    
    (Default) Displays no watermark.
    
-   on :
    
    Displays visible watermarks.
    

off

Name

string

No

The policy name.

testPolicyGroupName

WatermarkType

string

No

The watermark type. You can specify up to three types. Separate multiple values with commas (,).

**Note**

If you provide `custom` as the value for this parameter, you must configure `WatermarkCustomText` to specify custom text.

**Valid values:**

-   EndUserId :
    
    The username.
    
-   Custom :
    
    The custom text.
    
-   DesktopIp :
    
    The IP address of the cloud computer.
    
-   ClientIp :
    
    The IP address of the client.
    
-   HostName :
    
    The rightmost 15 digits of the cloud computer ID.
    
-   ClientTime :
    
    The current time displayed on the cloud computer.
    

EndUserId

WatermarkCustomText

string

No

If you set `WatermarkType` to `custom`, you must also specify `WatermarkCustomText`.

test

WatermarkTransparencyValue

integer

No

The watermark opacity. A higher value makes the watermark more opaque. Valid values: 10 to 100.

10

WatermarkSecurity

string

No

Specifies whether to enable security priority for invisible watermarks.

**Valid values:**

-   off :
    
-   on :
    

off

CameraRedirect

string

No

The on-premises camera redirection policy. This parameter only applies if DeviceRedirects does not include an on-premises camera redirection policy.

**Valid values:**

-   deviceRedirect :
    
    Enables device redirection.
    
-   off :
    
    Disables device redirection.
    

on

NetRedirect

string

No

The network redirection policy.

**Note**

This parameter is in private preview and only available to specific users.

**Valid values:**

-   all :
    
    Enables network redirection globally.
    
-   off :
    
    (Default) Disables network redirection.
    
-   on :
    
    Enables the whitelist mode.
    

on

AppContentProtection

string

No

The anti-screenshot policy.

**Valid values:**

-   off :
    
    (Default) Disables anti-screenshot.
    
-   on :
    
    Enables anti-screenshot.
    

on

RemoteCoordinate

string

No

The keyboard and mouse control permissions during remote assistance.

**Valid values:**

-   optionalControl :
    
    By default, keyboard and mouse control is disabled during remote assistance. You can request permissions as needed.
    
-   fullControl :
    
    Keyboard and mouse control is enabled during remote assistance.
    
-   disableControl :
    
    Keyboard and mouse control is disabled during remote assistance.
    

fullControl

InternetCommunicationProtocol

string

No

The network communication protocol.

**Valid values:**

-   tcp :
    
    TCP is used when UDP/AST is restricted.
    
-   rtc :
    
    AST is used for high-frequency audio and video streaming.
    
-   auto :
    
    UTO enables automatic switch between AST and UDP modes based on desktop content.
    
-   both :
    
    UDP is ideal for office and HD graphic design use.
    

both

VideoRedirect

string

No

The multimedia redirection policy.

**Valid values:**

-   off :
    
    Disables multimedia redirection.
    
-   on :
    
    Enables multimedia redirection.
    

on

WatermarkColor

integer

No

The font color of the watermark. Valid values: 0 to 16777215.

0

WatermarkDegree

number

No

The watermark rotation. Valid values: -10 to -30.

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
    
-   bold :
    

plain

WatermarkRowAmount

integer

No

The number of watermark rows. Valid values: 3 to 10.

5

CpuProtectedMode

string

No

The CPU spike protection policy.

**Valid values:**

-   off :
    
    Disables CPU spike protection.
    
-   on :
    
    Enables CPU spike protection.
    

off

CpuRateLimit

integer

No

The overall CPU usage. Valid values: 70 to 90. Unit: percentage (%).

70

CpuSampleDuration

integer

No

The overall CPU sampling duration. Valid values: 10 to 60. Unit: seconds.

30

CpuSingleRateLimit

integer

No

The single-CPU usage. Valid values: 70 to 100. Unit: %.

80

CpuDownGradeDuration

integer

No

The CPU underclocking duration. Valid values: 30 to 120. Unit: seconds.

50

MemoryProtectedMode

string

No

The memory spike protection policy.

**Valid values:**

-   off :
    
    Disables memory spike protection.
    
-   on :
    
    Enables memory spike protection.
    

off

MemoryRateLimit

integer

No

The overall memory usage. Valid values: 70 to 90. Unit: %.

70

MemorySampleDuration

integer

No

The overall memory sampling duration. Valid values: 30 to 60. Unit: seconds.

40

MemorySingleRateLimit

integer

No

The memory usage per process. Valid values: 30 to 60. Unit: %.

40

MemoryDownGradeDuration

integer

No

The memory underclocking duration per process. Valid values: 30 to 120. Unit: seconds.

40

EndUserApplyAdminCoordinate

string

No

Specifies whether to enable end users to request administrator help.

**Valid values:**

-   off :
    
    Disables end users to request administrator help.
    
-   on :
    
    Enables end users to request administrator help.
    

off

EndUserGroupCoordinate

string

No

Specifies whether to allow end users from the same office network to share cloud computers.

**Valid values:**

-   off :
    
    Doesn't allow end users from the same office network to share cloud computers.
    
-   on :
    
    Allows end users from the same office network to share cloud computers.
    

off

Scope

string

No

The effective scope of the policy.

**Valid values:**

-   IP :
    
    The policy applies to specific IP addresses.
    
-   GLOBAL :
    
    The policy applies globally.
    

GLOBAL

Recording

string

No

The screen recording policy.

**Valid values:**

-   period :
    
    Screen recording occurs at set intervals.
    
-   session :
    
    Screen recording is limited to sessions only.
    
-   off :
    
    Screen recording is disabled.
    
-   alltime :
    
    Screen recording is always enabled.
    

off

RecordingAudio

string

No

Specifies whether to record audio files generated by cloud computers.

**Valid values:**

-   off :
    
    Doesn't record audio files generated by cloud computers.
    
-   on :
    
    Records audio files generated by cloud computers.
    

on

RecordingStartTime

string

No

The screen recording's start time in HH:MM:SS format. The value is meaningful only if `Recording` is set to `PERIOD`.

08:00:00

RecordingEndTime

string

No

The screen recording's end time in HH:MM:SS format. The value is meaningful only if `Recording` is set to `PERIOD`.

08:59:00

RecordingFps

string

No

The frame rate of screen recording. Unit: fps.

5

RecordingDuration

integer

No

The length of the screen recording file (in minutes). Screen recordings are split based on the specified duration and uploaded to Object Storage Service (OSS) buckets. If a file reaches 300 MB, the system prioritizes rolling updates for that file. Valid values: 10 to 60.

10

RecordingExpires

integer

No

The retention period of the screen recording file. Valid values: 1 to 180. Unit: days.

15

RecordingUserNotify

string

No

Specifies whether to notify end users when screen recording is enabled.

**Valid values:**

-   off :
    
    doesn't notify end users when screen recording is enabled.
    
-   on :
    
    notifies end users when screen recording is enabled.
    

off

RecordingUserNotifyMessage

string

No

The notification sent to end users when screen recording is enabled.

录屏已开启

AdminAccess

string

No

Specifies whether to grant the admin permissions to end users.

**Note**

This parameter is in private preview and only available to specific users.

**Valid values:**

-   allow :
    
    Forcibly grants admin permissions.
    
-   deny :
    
    Forcibly rejects granting admin permissions.
    
-   inherited :
    
    inherits the admin permissions from the user dimension.
    

deny

EnableSessionRateLimiting

string

No

Specifies whether to enforce a bandwidth limit for sessions.

**Valid values:**

-   off :
    
    Doesn't enforce a bandwidth limit for sessions.
    
-   on :
    
    Enforces a bandwidth limit for sessions.
    

off

SessionMaxRateKbps

integer

No

The bandwidth peak allowed for sessions. Unit: Kbit/s. Valid values: 2000 to 100000.

2000

DisplayMode

string

No

The display mode.

**Valid values:**

-   clientCustom :
    
    Suitable for user-defined scenarios.
    
-   adminOffice :
    
    Suitable for daily office scenarios.
    
-   adminDesign :
    
    Suitable for design and 3D application scenarios.
    
-   adminCustom :
    
    Suitable for admin-customized scenarios.
    

clientCustom

StreamingMode

string

No

The streaming mode.

**Valid values:**

-   intelligent :
    
-   smooth :
    

smooth

ColorEnhancement

string

No

Specifies whether to enable color enhancement for design and 3D applications.

**Valid values:**

-   off :
    
    Doesn't enable color enhancement for design and 3D applications.
    
-   on :
    
    Enables color enhancement for design and 3D applications.
    

off

SmoothEnhancement

string

No

Specifies whether to enable smoothness enhancement for daily office use.

**Valid values:**

-   off :
    
    Doesn't enable smoothness enhancement for daily office use.
    
-   on :
    
    Enables smoothness enhancement for daily office use.
    

off

QualityEnhancement

string

No

Specifies whether to enable image quality enhancement for design and 3D applications.

**Valid values:**

-   off :
    
    Doesn't enable image quality enhancement for design and 3D applications.
    
-   on :
    
    Enables image quality enhancement for design and 3D applications.
    

off

VideoEncPolicy

string

No

The video encoding policy.

**Valid values:**

-   qualityFirst :
    
    Prioritizes image quality.
    
-   bandwidthFirst :
    
    Prioritizes bandwidth.
    

qualityFirst

TargetFps

integer

No

The target frame rate. Valid values: 10 to 60.

30

VideoEncMinQP

integer

No

The minimum quantizer parameter (QP) for video files. A lower QP means better video quality. Valid values: 0 to 51.

30

VideoEncMaxQP

integer

No

The maximum QP for video files. Higher QP values result in lower video quality. Valid values: 0 to 51.

30

VideoEncAvgKbps

integer

No

The average bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.

2000

VideoEncPeakKbps

integer

No

The peak bitrate allowed for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.

2000

MaxReconnectTime

integer

No

The maximum duration to retry reconnecting to cloud computers after an unexpected disconnection (non-human causes). Valid values: 30 to 7200. Unit: seconds.

120

WyAssistant

string

No

Specifies whether to display the Xiaoying AI Assistant option in the DesktopAssistant menu when end users connect to cloud computers via desktop clients (Windows and macOS).

**Note**

This feature applies to only desktop clients of version 7.7.0 or later.

**Valid values:**

-   off :
    
    Doesn't display the Xiaoying AI Assistant option in the DesktopAssistant menu.
    
-   on :
    
    Displays the Xiaoying AI Assistant option in the DesktopAssistant menu.
    

on

WatermarkAntiCam

string

No

Specifies whether to enable anti-screen capture for invisible watermarks.

**Valid values:**

-   off :
    
    Doesn't enable anti-screen capture for invisible watermarks.
    
-   on :
    
    Enables anti-screen capture for invisible watermarks.
    

off

WatermarkPower

string

No

The enhancement level for invisible watermarks.

**Valid values:**

-   high :
    
-   low :
    
-   medium :
    

medium

CpuProcessors

array

No

The CPU processors.

string

No

The CPU processor.

chrome.exe

MemoryProcessors

array

No

The memory processors.

string

No

The memory processor.

notepad.exe

DomainResolveRule

array<object>

No

The domain resolution policies.

object

No

The domain resolution policy.

Domain

string

No

The domain name.

\*.example.com

Policy

string

No

Specifies whether to allow the domain name resolution rule.

**Valid values:**

-   allow :
    
-   block :
    

allow

Description

string

No

The policy description.

策略描述。

NetRedirectRule

array<object>

No

The network redirection rules.

**Note**

This parameter is in private preview and only available to specific users.

object

No

The network redirection rule.

**Note**

This parameter is in invitational preview and not available to the public.

Domain

string

No

The domain name.

\*.example.com

RuleType

string

No

The rule type.

**Valid values:**

-   prc :
    
    Process.
    
-   domain :
    
    Domain name.
    

domain

Policy

string

No

The redirection policy.

Allow

ScopeValue

array

No

The effective scopes. This parameter is required when `Scope` is set to `IP`. If `Scope` is set to `IP`, this parameter doesn't take effect.

string

No

The effective scope specified by a CIDR block.

47.100.XX.XX/24

ClientType

array<object>

No

The types of Alibaba Cloud Workspace clients that end users can use to connect to cloud computers.

object

No

The type of the Alibaba Cloud Workspace client that end users can use to connect to cloud computers.

Status

string

No

Specifies whether end users can use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.

**Note**

If you don't specify `ClientType`, any client can be used to connect to cloud computers.

**Valid values:**

-   off :
    
    End users cannot use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
    
-   on :
    
    End users can use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
    

off

ClientType

string

No

The type of the Alibaba Cloud Workspace client that end users can use to connect to cloud computers.

**Valid values:**

-   html5 :
    
    The web client.
    
-   android :
    
    The Android client.
    
-   ios :
    
    The iOS client.
    
-   windows :
    
    The Windows client.
    
-   macos :
    
    The macOS client.
    

android

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

The vendor ID (VID). For more information, see [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

04\*\*

UsbRuleType

string

No

The type of the USB redirection rule.

**Valid values:**

-   1 :
    
    Enables USB redirection based on device manufacturers.
    

1

Description

string

No

The rule description.

测试规则

UsbRedirectType

string

No

Specifies whether to allow USB redirection.

**Valid values:**

-   1 :
    
    Allows USB redirection.
    
-   2 :
    
    Forbids USB redirection.
    

1

ProductId

string

No

The product ID (PID).

08\*\*

AuthorizeSecurityPolicyRule

array<object>

No

The security group rules.

object

No

The security group rule.

Type

string

No

The direction of the security group rule.

**Valid values:**

-   outflow :
    
    Outbound.
    
-   inflow :
    
    Inbound.
    

inflow

Policy

string

No

The authorization policy of the security group rule.

**Valid values:**

-   drop :
    
    Denies all access requests. If no ''access denied'' messages are returned, the requests either timed out or failed.
    
-   accept :
    
    (Default) Accepts all requests.
    

accept

PortRange

string

No

The port range of the security group rule. The value range of this parameter varies based on the value of IpProtocol.

-   If IpProtocol is set to TCP or UDP, the port range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
    
-   If IpProtocol is set to ICMP, set the value to -1/-1.
    
-   If IpProtocol is set to GRE, set the value to -1/-1.
    
-   If IpProtocol is set to ALL, set the value to -1/-1.
    

For more information about the common ports, see [Common ports](/help/en/ecs/user-guide/common-ports).

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
    
    The Transmission Control Protocol (TCP) protocol.
    
-   UDP :
    
    The User Datagram Protocol (UDP) protocol.
    
-   ALL :
    
    Any type of protocol.
    
-   GRE :
    
    The Generic Routing Encapsulation (GRE) protocol.
    
-   ICMP :
    
    The Internet Control Message Protocol (ICMP) for (IPv4).
    

TCP

Priority

string

No

The priority of the security group rule. A smaller value specifies a higher priority. Valid values: 1 to 60. Default value: 1.

1

CidrIp

string

No

The object of the security group rule. Specify an IPv4 CIDR block.

47.100.XX.XX/16

RevokeSecurityPolicyRule

array<object>

No

The security group rules that you want to delete.

object

No

The security group rule that you want to delete.

Type

string

No

The direction of the security group rule that you want to delete.

**Valid values:**

-   outflow :
    
    Outbound.
    
-   inflow :
    
    Inbound.
    

outflow

Policy

string

No

The authorization of the security group rule that you want to delete.

**Valid values:**

-   drop :
    
    Denies all access requests. If no ''access denied'' messages are returned, the requests either timed out or failed.
    
-   accept :
    
    (Default) Accepts all requests.
    

accept

PortRange

string

No

The port range of the security group rule that you want to delete. The value range of this parameter varies based on the value of IpProtocol.

-   If IpProtocol is set to TCP or UDP, the port range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
    
-   If IpProtocol is set to ICMP, set the value to -1/-1.
    
-   If IpProtocol is set to GRE, set the value to -1/-1.
    
-   If IpProtocol is set to ALL, set the value to -1/-1.
    

For more information about the common ports, see [Common ports](/help/en/ecs/user-guide/common-ports).

22/22

Description

string

No

The description of the security group rule that you want to delete.

test

IpProtocol

string

No

The protocol type of the security group rule that you want to delete.

**Valid values:**

-   TCP :
    
    The TCP protocol.
    
-   UDP :
    
    The UDP protocol.
    
-   ALL :
    
    Any type of protocol.
    
-   GRE :
    
    The GRE protocol.
    
-   ICMP :
    
    The ICMP for IPv4.
    

TCP

Priority

string

No

The priority of the security group rule that you want to delete. A smaller value specifies a higher priority. Valid values: 1 to 60. Default value: 1.

1

CidrIp

string

No

The object of the security group rule that you want to delete. Specify an IPv4 CIDR block.

47.100.XX.XX/16

AuthorizeAccessPolicyRule

array<object>

No

The client IP address whitelists that you want to add.

object

No

The client IP address whitelist that you want to add.

Description

string

No

The description of the client IP address whitelist.

test

CidrIp

string

No

The client CIDR block from which end users can connect to cloud computers. Specify an IPv4 CIDR block.

47.100.XX.XX/16

RevokeAccessPolicyRule

array<object>

No

The client IP address whitelists that you want to delete.

object

No

The client IP address whitelist that you want to delete.

Description

string

No

The description of the client IP address whitelist that you want to delete.

test

CidrIp

string

No

The client CIDR block that you want to delete. Specify an IPv4 CIDR block.

47.100.XX.XX/16

DeviceRedirects

array<object>

No

The device redirection rules.

object

No

The device redirection rule.

RedirectType

string

No

The redirection type.

**Valid values:**

-   deviceRedirect :
    
    Device redirection.
    
-   usbRedirect :
    
    USB redirection.
    
-   off :
    
    Any type of redirection.
    

deviceRedirect

DeviceType

string

No

The peripheral type.

**Valid values:**

-   printer :
    
-   scanner :
    
-   serialport :
    
-   camera :
    
-   adb :
    

camera

DeviceRules

array<object>

No

The custom peripheral rules.

object

No

The custom peripheral rule.

DeviceName

string

No

The device name.

sandisk

RedirectType

string

No

The redirection type.

**Valid values:**

-   deviceRedirect :
    
    Device redirection.
    
-   usbRedirect :
    
    USB redirection.
    
-   off :
    
    Redirection disabled.
    

usbRedirect

DeviceType

string

No

The peripheral type.

**Valid values:**

-   usbKey :
    
    UKeys.
    
-   other :
    
    Other peripheral devices.
    
-   graphicsTablet :
    
    Graphics tablets.
    
-   cardReader :
    
    Card readers.
    
-   printer :
    
    Printers.
    
-   scanner :
    
    Scanners.
    
-   storage :
    
    Storage devices.
    
-   camera :
    
    Web cameras.
    
-   networkInterfaceCard :
    
    NIC devices.
    

storage

OptCommand

string

No

The link optimization command.

2:0

DevicePid

string

No

The product ID (PID).

0x55b1

DeviceVid

string

No

The vendor ID (VID). For more information, see [Valid USB VIDs](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf).

0x0781

Platforms

string

No

WatermarkColumnAmount

integer

No

The number of watermark columns. Valid values: 3 to 10.

3

DomainResolveRuleType

string

No

Specifies whether to enforce the domain resolution policy.

**Valid values:**

-   off :
    
    Disables the domain resolution policy.
    
-   on :
    
    Enables the domain resolution policy.
    

off

ClipboardScope

string

No

ClipboardGraineds

array<object>

No

object

No

GrainedType

string

No

ClipboardType

string

No

ClipboardSize

integer

No

ClipboardSizeUnit

string

No

InClipboardSize

integer

No

InClipboardSizeUnit

string

No

OutClipboardSize

integer

No

OutClipboardSizeUnit

string

No

StatusMonitor

string

No

Specifies whether to display the metric status entry in the DesktopAssistant menu.

**Valid values:**

-   off :
    
    Doesn't display the metric status entry in the DesktopAssistant menu.
    
-   on :
    
    Displays the metric status entry in the DesktopAssistant menu.
    

off

MobileRestart

string

No

Specifies whether to display the Restart button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.

**Note**

This feature applies to only mobile clients of version 7.4.0 or later.

**Valid values:**

-   off :
    
    Doesn't display the Restart button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
    
-   on :
    
    Displays the Restart button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
    

off

MobileShutdown

string

No

Specifies whether to display the Stop button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.

**Note**

This feature applies to only mobile clients of version 7.4.0 or later.

**Valid values:**

-   off :
    
    Doesn't display the Stop button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
    
-   on :
    
    Displays the Stop button in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
    

off

ResolutionModel

string

No

The resolution type.

**Valid values:**

-   adaptive :
    
    Adaptive resolution.
    
-   customer :
    
    Fixed resolution.
    

adaptive

ResolutionWidth

integer

No

The width of the resolution. Unit: pixel. Valid values for cloud applications: 500 to 50000. Valid values for cloud computers: 480 to 4096.

720

ResolutionHeight

integer

No

The height of the resolution. Unit: pixel. Valid values for cloud applications: 500 to 50000. Valid values for cloud computers: 480 to 4096.

1280

Taskbar

string

No

Specifies whether to display the application taskbar.

**Note**

This parameter applies only to cloud application policies.

**Valid values:**

-   off :
    
    Doesn't display the application taskbar.
    
-   on :
    
    Displays the application taskbar.
    

off

NoOperationDisconnect

string

No

Specifies whether to enforce a disconnection upon inactivity.

**Note**

This parameter applies only to cloud application policies.

**Valid values:**

-   off :
    
    Doesn't enforce a disconnection upon inactivity.
    
-   on :
    
    Enforces a disconnection upon inactivity.
    

off

NoOperationDisconnectTime

integer

No

The duration of disconnection after inactivity. Valid values: 120 to 7200. Unit: seconds.

**Note**

This parameter applies only to cloud application policies.

120

DisconnectKeepSession

string

No

Specifies whether to retain the session upon disconnection.

**Note**

This parameter applies only to cloud application policies.

**Valid values:**

-   customTime :
    
    Retains the session for a specified time period.
    
-   persistent :
    
    Retains the session permanently.
    

customTime

DisconnectKeepSessionTime

integer

No

The retention period of the session after disconnection. Valid values: 30 to 7200. Unit: seconds.

**Note**

This parameter applies only to cloud application policies.

120

RecordEvents

array

No

The events that trigger screen recording.

string

No

The event that triggers screen recording.

**Valid values:**

-   transferWithLocal :
    
    Clipboard and file transfer events.
    
-   userInput :
    
    User input events.
    
-   usbRedirect :
    
    USB connection and disconnection events.
    

transferWithLocal

RecordEventFilePaths

array

No

The absolute paths to screen recording files.

string

No

The absolute path to the screen recording file.

C://test.txt

RecordEventRegisters

array

No

The absolute paths to screen recording registries.

string

No

The absolute path to the screen recording registry.

计算机\\HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR

RecordEventDuration

integer

No

The duration of screen recording after the specified event is detected. Unit: minutes. Valid values: 10 to 60.

10

ResetDesktop

string

No

The computer reset setting.

**Valid values:**

-   off :
    
    Disables the reset setting.
    
-   on :
    
    Enables the reset setting.
    

off

DeviceConnectHint

string

No

Specifies whether to display the peripheral connection prompt.

**Valid values:**

-   off :
    
    Doesn't display the peripheral connection prompt.
    
-   on :
    
    Displays the peripheral connection prompt.
    

off

FileMigrate

string

No

Specifies whether to enable file transfer.

**Valid values:**

-   off :
    
    Enables file transfer.
    
-   on :
    
    Disables file transfer.
    

off

WuyingKeeper

string

No

Specifies whether to enable Cloud Computer Manager.

**Valid values:**

-   off :
    
    Disables Cloud Computer Manager.
    
-   on :
    
    Enables Cloud Computer Manager.
    

off

InternetPrinter

string

No

Toggle for the Wuying Keeper on mobile devices.

off

SafeMenu

string

No

Toggle for the security button on Windows mobile systems

off

ScreenDisplayMode

string

No

Toggle for Xiao Ying on mobile devices

off

ClientControlMenu

string

No

Level of the record management event.

FileTransferSpeedLocation

string

No

Screen recording event suffix

FileTransferSpeed

string

No

FileTransferAddress

string

No

CpdDriveClipboard

string

No

UseTime

string

No

AutoReconnect

string

No

Automatically reconnect after disconnection

off

MobileWuyingKeeper

string

No

Toggle for Wuying Keeper on mobile devices

off

MobileSafeMenu

string

No

The security button toggle for Windows systems on mobile devices

off

MobileWyAssistant

string

No

Mobile Wy Assistant Toggle

off

RecordEventLevels

array<object>

No

Levels of screen recording events

object

No

EventType

string

No

Management event type

StartApplication

EventLevel

string

No

Event level

HIGH

RecordEventFileExts

array

No

File extensions for screen recording events

string

No

txt

ExternalDrive

string

No

WatermarkShadow

string

No

ClientCreateSnapshot

string

No

AcademicProxy

string

No

ModelLibrary

string

No

PortProxy

string

No

BusinessChannel

string

No

MemoryOverload

string

No

CpuOverload

string

No

DiskOverload

string

No

ResolutionDpi

integer

No

HoverConfigMsg

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

5CED7F18-43B1-5035-BBB6-2538B\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "5CED7F18-43B1-5035-BBB6-2538B***"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyCenterPolicy#workbench-doc-change-demo) for a complete list.
