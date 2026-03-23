In ACK Edge clusters, nodes in different physical locations belong to separate network domains and cannot communicate using Pod IPs or service IPs by default. raven-agent-ds is the network agent component of Raven, the cross-region O&M communication system for ACK Edge clusters, that bridges these isolated domains. It runs as a DaemonSet on every node in host network mode and handles both Layer 3 tunnel networking and Layer 7 proxy traffic between cloud and edge environments.

## How it works

raven-agent-ds supports two complementary modes:

-   **Tunnel mode**: Configures VXLAN devices, forwarding databases (FDBs), and routes on cluster nodes, then establishes IPsec-VPN connections to enable direct container-to-container communication across regions.
    
-   **Proxy mode**: Runs a Layer 7 proxy service on the gateway node to route cloud-edge HTTP/HTTPS traffic, including O&M operations and monitoring.
    

## Choose a mode

**Scenario**

**Recommended mode**

Container-to-container communication across regions using Pod IPs or service IPs

Tunnel mode

Cross-region HTTP/HTTPS requests, cloud-edge O&M, or cloud-edge monitoring

Proxy mode

By default, proxy mode is enabled. For configuration instructions, see [Work with the cloud-edge communication component Raven](/help/en/ack/ack-edge/user-guide/using-the-cloud-side-communication-raven-component).

## Usage notes

-   ACK Edge clusters must run Kubernetes 1.26.3 or later.
    
-   raven-agent-ds is automatically installed in ACK Edge clusters. No manual installation is required.
    
-   For a full architectural overview of Raven, see [Cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/using-the-cloud-side-communication-raven-component).
    

## Release notes

### March 2025

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.8

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.8

Enhancement

Added WebSocket protocol support.

2025-03-15

No impact on workloads.

### February 2025

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.7

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.7

Enhancement / Bug fix

Metrics collection is now supported. Fixed an issue that caused occasional panics. Custom resource requests and limits can now be defined.

2025-02-14

No impact on workloads.

### November 2024

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.6

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.6

Enhancement

Optimized regular VPN connection checks. Optimized how the public IP address is retrieved at the edge.

2024-11-15

No impact on workloads.

### June 2024

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.5

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.5

Bug fix

Fixed IP rule and VPN rule leakage. Added scheduled rule-checking.

2024-06-25

No impact on workloads.

### April 2024

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.4

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.4

Enhancement / Bug fix / Security

Fixed broadcast storms during cross-region data transfer. Added compatibility with both iptables and nftables kernel modules. Fixed an issue where the proxy service was disabled when gateway resources were deleted. Added AdvancedRollingUpdate mode support. Fixed CVE issues and improved image security.

2024-04-15

No impact on workloads.

### March 2024

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.3

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.3

Bug fix / Security

Fixed an issue where access control list (ACL) entries failed to be added. Patched CVE issues.

2024-03-01

No impact on workloads.

### January 2024

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.2

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.2

Enhancement

Added KeepAlive and automatic reconnection support for cross-domain VPN tunnels. Optimized cloud-edge communication to reduce cross-region traffic.

2024-01-23

No impact on workloads.

### November 2023

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.1

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.1

Enhancement

Added ARM64 architecture support. Edge nodes can now connect to the cloud over Internet connections and Express Connect circuits simultaneously.

2023-11-20

No impact on workloads.

### October 2023

**Version**

**Image address**

**Type**

**Description**

**Release date**

**Impact**

v0.4.0

registry-{.{regionId}}-vpc.ack.aliyuncs.com/acs/raven-agent:v0.4.0

Enhancement

Introduced tunnel mode for cross-region container communication. Introduced proxy mode for cloud-edge O&M tunnels.

2023-10-25

No impact on workloads.
