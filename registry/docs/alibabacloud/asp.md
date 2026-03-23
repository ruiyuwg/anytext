Alibaba Cloud Workspace provides an integrated device-cloud synergy protocol named Adaptive Streaming Protocol (ASP). A device refers to an Alibaba Cloud Workspace terminal. The protocol provides high-quality and low-latency interactive experience in real time. This topic describes the ASP benefits and the differences between the ASP protocol and the High-definition Experience (HDX) protocol, and compares the management of ASP-based and HDX-based cloud computers.

## Benefits

The ASP protocol can provide excellent performance, high reliability, and enhanced security for streaming. The ASP technical design integrates graphics command streams, graphics streams, and audio and video streams. The ASP protocol integrates multiple key technologies, such as image analysis, encoding, live streaming media, and network quality of service (QoS) optimization. The protocol also supports multi-platform SDKs.

### Intelligent streaming engine

Streaming involves a continuous transmission of encoded data to a client for decoding and visualization by using a network transmission module. The ASP-based streaming engine can intelligently select scenario-specific streaming methods for regular and GPU-accelerated cloud computers in the following scenarios: scenarios that do not have rapid and continuous changes (such as document operations and web browsing) and scenarios that have rapid and continuous changes (such as video playback and games).

### Advanced compression algorithm

Mixed content is often displayed on the screen of a cloud computer. For example, the content can include computer-generated images, such as the text on web pages, and camera-taken photos or videos on web pages. In most cases, simple image encoding and video stream encoding cannot achieve the optimal compression effect for images that are generated in the preceding scenarios. For mixed content, the ASP protocol provides the adaptive encoding technology that transmits only the updated content, and classifies and encodes the content based on image analysis and detection. This reduces bandwidth usage and improves image quality.

### High-quality network transmission

In conventional network solutions, the quality of network transmission in not guaranteed in specific scenarios. For example, the quality of real-time interaction is affected if network jitter occurs or network environments are unstable. In audio and video call scenarios, bandwidth is not properly allocated and effectively used. The ASP protocol resolves these issues based on the following methods:

-   Use the virtual multi-channel mechanism is introduced by using the multiplexing method. A single connection can send packets by priority.
    
-   Use Transmission Control Protocol (TCP) or User Datagram Protocol (UDP) to configure Quality of Service (QoS) policies, predict bandwidth, and perform congestion control in different scenarios at the underlying layer.
    
-   Use the caching mechanism introduced to deeply optimize the audio effects of upstream and downstream audio channels for better audio experience.
    

### Multi-client SDKs

ASP SDKs are compatible with diverse platforms. You can use ASP SDKs to build universal libraries across platforms based on underlying resources. The libraries cover various modules, such as packet analysis, session management, I/O events (upstream), image stream decoding, and audio and video stream decoding. The SDKs are available for the following types of Alibaba Cloud Workspace terminals. You can use the terminals to access Alibaba Cloud Workspace services anytime, anywhere.

## Protocol comparison

The following table describes the differences of the ASP and the HDX protocols in terms of basic capabilities, graphics, multimedia, networking, security, SDKs, and guest OSs.

**Term**

**Item**

**ASP protocol**

**HDX protocol**

Basic capabilities

Downstream links: content streaming of cloud computers

Yes

Yes

Upstream links: data reporting from terminals

Yes

Yes

Regular cloud computers

Yes

Yes

GPU-accelerated cloud computers

Yes

Yes

Virtual multi-channel mechanism

Yes

Yes

Bidirectional copy of text or images

Yes

Yes

Bidirectional copy of files

Yes

Yes

Custom configurations on terminals

Yes

No

Graphics

Joint Photographic Experts Group (JPEG) encoding

Yes

Yes

Image caching

Yes

Yes

Dirty region update

Yes

Yes

Encoding compression by region

Yes

Yes

Lossless file compression

Yes

Yes

Video stream

Yes

Yes

Multi-display

Yes

Yes

Resolution adjustment

Yes

Yes

Watermarking

Yes

Yes

Configurations of image display quality

Yes

Yes

Stream division (stream collaboration)

Yes

No

Relative mouse

Yes

Yes

Multimedia

Opus encoding

Yes

Yes

H.264 encoding

Yes

Yes

H.265 encoding

Yes

Yes

Audio encoding

No

Yes

Audio and video call

Yes

Yes

Audio and video redirection

Yes

Yes

Regional video stream encoding

Yes

Yes

Full-screen video stream encoding

Yes

Yes

Browser content redirection

No

Yes

Windows media redirection

No

Yes

Network

TCP-based reliable transmission

Yes

Yes

UDP-based unreliable transmission

Yes

Yes

Automatic reconnection upon network downtime

Yes

Yes

Display of bandwidth and latency

Yes

Yes

SDK

Windows

Yes

Yes

macOS

Yes

Yes

Linux

Yes

Yes

Web

Yes

Yes

Android

Yes

Yes

iOS

Yes

Yes

Guest OS

Windows Server 2016

Yes

Yes

Windows Server 2019

Yes

Yes

Windows Server 2022

Yes

No

Ubuntu Linux

Yes

Yes

## Management capability comparison

The following section compares management capabilities of the ASP-based and HDX-based cloud computers.

**Category**

**Feature**

**ASP-based cloud computer (Windows)**

**ASP-based cloud computer (Linux)**

**HDX-based cloud computer (Windows)**

**HDX-based Linux cloud computers (Linux)**

Basic policy

**Network transfer**

After you enable the feature, ASP-based cloud computers use the UDP/TCP adaptive mode. By default, ASP-based cloud computers use the UDP protocol, which provides better user experience in weak network conditions. If the UDP protocol fails to take effect, the TCP protocol is automatically used.

Yes

Yes

No

No

**Image quality control**

You can enable the feature to control the image display quality of the Enterprise Graphics cloud computer.

No

No

Yes

Yes

**Printer redirection**

After you enable the feature, end users can use local printers on cloud computers.

Yes

No

Yes

Yes

**USB redirection**

After you enable the feature, end users can use local USB devices on cloud computers.

Yes

No

Yes

Yes

**Webcam redirection**

After you enable the feature, end users can use local webcams on cloud computers.

Yes

No

No

No

Screen recording audit

**Whole-process**

The EDS system records all user operations on the cloud computers. The recording starts when end users connect to cloud computers and stops when the end users disconnect from the cloud computers.

Yes

Yes

Yes

No

**Interval-based**

The recording is performed during a specific period of time. During the specific period of time, the recording immediately starts when end users connect to cloud computers and ends when the end users disconnect from the cloud computers. The system does not record operations performed by the end users on the cloud computers outside the period of time.

Yes

Yes

Yes

No

**Operation-triggered**

Screen recording is triggered by specific operations that are performed by end users.

Yes

Yes

Yes

No

**Session lifecycle listening**

The system records all user operations during cloud computer sessions. The recording starts when the session of a cloud computer is established and ends when the session is closed.

Yes

Yes

No

No

**Audio**

The system records the audio generated from cloud computers.

Yes

Yes

No

No

Cloud Computer

**Scheduled task upon inactivity**

The system performs scheduled tasks if no mouse or keyboard inputs are made on the cloud computer for a specific period of time.

Yes

No

No

No

Session

**Session management**

A session is a logical connection established between an end user and a cloud computer by using a client. You can enable the session management feature based on your business requirements. After you enable the feature, the utilization of cloud computers is greatly improved.

Yes

No

No

No

Monitoring

**Session disconnection**

When active sessions of end users are closed, the disconnected sessions are resumed when end users reconnect to the sessions within a specific period of time.

Yes

No

No

No

**Session logoff**

When end users close cloud computer sessions, unsaved data is deleted. After sessions are closed, new sessions are started when end users reconnect to the cloud computers.

Yes

No

No

No

**Message sending**

The system sends messages to sessions of end users.

Yes

No

No

No

**Applications**

You can view all applications used by end users.

Yes

No

No

No

**Remote assistance**

You can initiate remote assistance for end users.

Yes

No

No

No

AD office network

**Conditional forwarders and trust relationships**

If you do not configure a conditional forwarder and a trust relationship for an AD office network, you can create only ASP-based cloud computers. If you configure a conditional forwarder and a trust relationship for an AD office network, you can create ASP-based or HDX-based cloud computers.

The protocols that can be used by cloud computers in AD office networks are determined by the configurations of conditional forwarders and trust relationships.
