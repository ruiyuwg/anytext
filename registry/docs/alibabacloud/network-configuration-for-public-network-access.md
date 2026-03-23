This topic applies to scenarios where edge nodes (on-premises nodes) of an ACK Edge cluster access the Alibaba Cloud Container Service platform over the public network. It lists the domain names and ports that must be allowed.

## Ports to expose on edge nodes (inbound)

In an ACK Edge cluster, the control plane and monitoring components need to access edge nodes from the cloud or other nodes. You can allow the following ports in the host CIDR block of the edge node.

**Protocol**

**Port**

**Source address or CIDR block**

**Comment**

TCP

10250, 10255

Host CIDR block of the edge node.

The API Server and Metrics Server access the kubelet port. This connection is proxied to the edge node by the Raven component. Therefore, you must allow traffic from the host CIDR block of the edge node.

9100, 9445

Host CIDR block of the edge node.

Prometheus accesses the Node-Exporter port. This connection is proxied by the Raven component. Therefore, you must allow traffic from the host CIDR block of the edge node.

UDP

8472

Host CIDR block of the edge node.

Flannel VXLAN uses UDP port 8472 on the node to build a VXLAN tunnel. Therefore, you must allow traffic from the host CIDR block of the edge node.

## **Domains that edge nodes must access (outbound)**

To ensure that your IDC devices or edge devices can connect to the ACK Edge cluster, allow access to the domain names in the following table. In the table, `{region}` is the region ID of the cluster, such as `cn-hangzhou` for the China (Hangzhou) region. For more information, see [Regions and zones](/help/en/ack/product-overview/supported-regions).

**Access object**

**Public endpoint**

**Port**

**Description**

Container Service control plane

-   cs-anony.aliyuncs.com
    
-   cs-anony.{region}.aliyuncs.com
    

-   TCP 443 (for clusters v1.26 or later)
    
-   TCP 80 (for clusters earlier than v1.26)
    

Container Service management endpoint.

Component packages

aliacs-k8s-{region}.oss-{region}.aliyuncs.com

-   TCP 443 (for clusters v1.26 or later)
    
-   TCP 80 and 443 (for clusters earlier than v1.26)
    

OSS download address. Use this address to download installation packages such as edgeadm, kubelet, CNI, runtime, and edgehub from OSS.

API Server public endpoint

Find this on the **Basic Information** tab of the cluster details page.

TCP 6443

For interaction with the kube-apiserver.

Tunnel-server public SLB (for clusters earlier than v1.26)

Find this in the cluster's Service resources:

kube-system/x-tunnel-server-svc

TCP 10262, 10263

Edge tunnel.

Raven cloud gateway SLB

Find this in the cluster's Service resources:

-   kube-system/x-raven-proxy-svc-gw-cloud-xxx
    
-   kube-system/x-raven-tunnel-svc-gw-cloud-xxx
    

-   TCP \[10280,10284\]
    
-   UDP 4500
    

Raven tunnel.

NTP

ntp1.aliyun.com cn.ntp.org.cn

Related to the NTP protocol. Typically, this is UDP port 123.

Clock synchronization server address.

This address is not required if you set the `selfHostNtpServer` parameter to `true` during node registration. This setting indicates that you have already synchronized the clock manually.

System component image addresses

-   dockerauth.{region}.aliyuncs.com
    
    **Important**
    
    If the region is China (Zhangjiakou), change the public Docker endpoint to dockerauth-{region}.aliyuncs.com.
    
-   dockerauth-ee.{region}.aliyuncs.com
    
-   registry-{region}.ack.aliyuncs.com
    

TCP 443

Addresses required for system component images.

System tools

Online installation of system tools (no extra domain names required)

net-tools, iproute, chrony (or ntpdate), crontabs, pciutils, socat, ebtables, iptables, conntrack-tools

Not applicable

The system checks if the required system tools are installed on the node that you want to add. If the tools are not installed, the system installs them online. The specific endpoint used for the installation depends on the node's yum or apt source configuration.

-   For Ubuntu, the system uses `apt-get` to install the tools.
    
-   For CentOS, the system uses `yum` to install the tools.
