kube-flannel-ds-windows is a container network plug-in used by ACK managed clusters. You can use it to build a l2bridge cluster network to allow Windows containers to communicate. This topic introduces kube-flannel-ds-windows and describes the usage notes and release notes for kube-flannel-ds-windows.

## Usage notes

If you choose Flannel as the network plug-in when you create an ACK managed cluster, kube-flannel-ds-windows is automatically deployed as a DaemonSet in the cluster. kube-flannel-ds-windows is dependent on the privileged processes hosted on Windows nodes. kube-flannel-ds-windows can be deployed only on Windows nodes that have the `windows.alibabacloud.com/deployment-topology=2.0` label. By default, the `windows.alibabacloud.com/deployment-topology=2.0` label is added to a Windows node when the node is created.

## Release notes

### **May 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.15.2-aliyun

registry-${region}.ack.aliyuncs.com/acs/flannel-windows:v0.15.2-aliyun

2024-05-08

-   Flannel is updated.
    
-   Windows Server version 1809 (10.0.17763.2114) and Windows Server version 2022 (10.0.20348.2322) are supported.
    

No impact on workloads.

### **January 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.15.1.1-6e1a57c8-aliyun

registry-vpc.${region}.aliyuncs.com/acs/flannel-windows:v0.15.1.1-6e1a57c8-aliyun

2022-01-21

-   Flannel is updated.
    
-   The following Windows operating systems are supported: Windows Server version 1809 (10.0.17763.2114), Windows Server version 1909 (10.0.18363.1556), and Windows Server version 2004 (10.0.19041.1165).
    

No impact on workloads.

### **August 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.13.1-aliyun.3

registry-vpc.${region}.aliyuncs.com/acs/flannel-windows:v0.13.1-aliyun.3

2021-08-22

-   The base images are updated. The original version number is overwritten.
    
-   The following Windows operating systems are supported: Windows Server version 1809 (10.0.17763.2114), Windows Server version 1909 (10.0.18363.1556), and Windows Server version 2004 (10.0.19041.1165).
    

No impact on workloads.

### **July 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.13.1-aliyun.3

registry-vpc.${region}.aliyuncs.com/acs/flannel-windows:v0.13.1-aliyun.3

2021-07-05

-   The base images are updated. The original version number is overwritten.
    
-   The following Windows operating systems are supported: Windows Server version 1809 (10.0.17763.1999), Windows Server version 1909 (10.0.18363.1556), and Windows Server version 2004 (10.0.19041.1052).
    

No impact on workloads.

### **June 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.13.1-aliyun.3

registry-vpc.${region}.aliyuncs.com/acs/flannel-windows:v0.13.1-aliyun.3

2021-06-17

-   The base images are updated.
    
-   The following Windows systems are supported: Windows Server version 1809 (10.0.17763.1935), Windows Server version 1909 (10.0.18363.1556), and Windows Server version 2004 (10.0.19041.985).
    

No impact on workloads.

### **May 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.13.1-aliyun.2

registry-vpc.${region}.aliyuncs.com/acs/flannel-windows:v0.13.1-aliyun.2

2021-05-13

-   Container Network Interface (CNI) configurations can be automatically shifted when containerd is used as the container runtime.
    
-   The following Windows operating systems are supported: Windows Server version 1809 (10.0.17763.1879), Windows Server version 1909 (10.0.18363.1500), and Windows Server version 2004 (10.0.19041.928).
    

No impact on workloads.

### **April 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.13.1-aliyun.1

registry-vpc.${region}.aliyuncs.com/acs/flannel-windows:v0.13.1-aliyun.1

2021-04-22

-   Rancher Wins is automatically installed on a Windows node with the `windows.alibabacloud.com/deployment-topology=2.0` label. You can deploy Flannel on a Windows node by using Rancher Wins.
    
-   kube-flannel-ds-windows can be used to construct l2bridge and overlay networks. By default, Alibaba Cloud uses l2bridge networks.
    
-   The following Windows operating systems are supported: Windows Server version 1809 (10.0.17763.1879), Windows Server version 1909 (10.0.18363.1500), and Windows Server version 2004 (10.0.19041.928).
    

No impact on workloads.
