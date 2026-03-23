Container Service for Kubernetes (ACK) supports the following container runtimes: containerd, Sandboxed-Container, and Docker. This topic compares these runtimes in terms of implementations, limitations, and deployment architectures to help you select the appropriate container runtime for your needs and scenarios.

## Comparison in terms of implementations and limits

**Feature**

**containerd**

**Sandboxed-Container**

**Docker (discontinued maintenance)**

Cluster types

-   ACK managed clusters
    
-   ACK dedicated clusters
    
-   ACK Edge clusters
    

-   ACK managed clusters
    
-   ACK dedicated clusters
    

All types of ACK clusters

Kubernetes version

Version 1.20 or later

Kubernetes 1.16 or later

Kubernetes 1.22 and earlier

**Note**

We recommend that you migrate to containerd. For more information, see [Migrate from Docker to containerd](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd).

Node type

-   ECS
    
-   Self-managed nodes (ACK Edge clusters)
    

Only [ECS Bare Metal Instance families](/help/en/ecs/user-guide/overview-of-instance-families#9af5c9ff078ja) are supported

ECS

Node operating system

Container Service for Kubernetes provides public images for operating systems such as [Alibaba Cloud Linux 3 container-optimized version](/help/en/alinux/alibaba-cloud-linux-3-container-optimized-images), [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/), [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3), Ubuntu, and Windows. For more information, see [Operating systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366).

-   For clusters of versions earlier than 1.30: Only [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3) and [Alibaba Cloud Linux 2 (discontinued maintenance)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-2) are supported.
    
-   For clusters of version 1.30 or later: Only [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3) is supported.
    

-   Alibaba Cloud Linux
    
-   CentOS
    

Container engine

containerd

containerd

Docker

Monitoring

Supported

Supported

Supported

Container log collection

Supported

Manual Injection (Sidecar)

Supported

Container stdout collection

Supported

Supported

Supported

RuntimeClass

Not supported

Supported (runV)

Not supported

Pod scheduling

No configuration is required.

You must add configurations based on the following rules:

-   For Kubernetes 1.14.x, you must add the following configuration to the nodeSelector parameter:
    
    ```
    alibabacloud.com/sandboxed-container: Sandboxed-Container.runv
    ```
    
-   For Kubernetes 1.16.x and later, no configuration is required.
    

No configuration is required.

HostNetwork

Supported

Not supported

Supported

Node data disk

Optional

Required. The data disk must be at least 200 GiB.

Optional

Network plug-in

-   Flannel
    
-   Terway (excluding ACK Edge clusters)
    

-   Flannel
    
-   When using [Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway), the exclusive Elastic Network Interface (ENI) mode and DataPath v2 feature are not supported.
    

-   Flannel
    
-   Terway
    

Kube-proxy mode

-   iptables
    
-   IPVS
    

-   iptables
    
-   IPVS
    

-   iptables
    
-   IPVS
    

Volume plug-in

CSI Plugin (excluding ACK Edge clusters)

CSI Plugin

CSI Plugin

Container root file system

OverlayFS

OverlayFS with disk quota configuration

OverlayFS

**Note**

-   You cannot deploy both Docker and Sandboxed-Container on the same node. You can create different node pools to deploy Docker runtime nodes and Sandboxed-Container runtime nodes together.
    
-   Sandboxed-Container is implemented based on containerd. When you view Sandboxed-Container node information using `kubectl get node` or the node list in the console, the node runtime is displayed as containerd.
    
-   For more information, see [Use CRDs to collect container text logs in Sidecar mode](/help/en/sls/use-crds-to-collect-container-text-logs-in-sidecar-mode#task-1580748).
    

## Comparison in terms of deployment architectures

**Runtime**

**Deployment architecture**

Docker

```
kubelet
└── dockerd
    └── containerd
        └── containerd-shim
            └── runC containers
```

containerd

```
kubelet
└── containerd
    └── containerd-shim
        └── runC containers
```

Sandboxed-Container v2

```
kubelet
├── (CRI) containerd
│   ├── containerd-shim
│   │   └── runC containers
│   └── containerd-shim-runv2
│       └── runV sandboxed containers
```

## Comparison of the commonly used commands provided by Docker Engine and containerd

Docker runtime and Sandboxed-Container runtime use Docker and containerd as their container engines respectively, each with unique command line interfaces for managing images and containers. The following table lists the commonly used commands.

**Operation**

**containerd**

**Docker**

**crictl (recommended)**

**ctr**

**docker**

Query containers

`crictl ps`

`ctr -n k8s.io c ls`

`docker ps`

Query container details

`crictl inspect <container>`

`ctr -n k8s.io c info <container>`

`docker inspect <container>`

Query container logs

`crictl logs <container>`

N/A

`docker logs <container>`

Run commands in containers

`crictl exec <container>`

N/A

`docker exec <container>`

Attach local stdin, stdout, and stderr to containers

`crictl attach <container>`

N/A

`docker attach <container>`

Query resource usage statistics

`crictl stats <container>`

N/A

`docker stats <container>`

Create containers

`crictl create <container>`

`ctr -n k8s.io c create <container>`

`docker create <container>`

Start containers

`crictl start <container>`

`ctr -n k8s.io run <container>`

`docker start <container>`

Stop containers

`crictl stop <container>`

ctr -n k8s.io task pause <container>

`docker stop <container>`

Delete containers

`crictl rm <container>`

`ctr -n k8s.io c del <container>`

`docker rm <container>`

Query images

`crictl images`

`ctr -n k8s.io i ls <image>`

`docker images`

Query image details

`crictl inspecti <image>`

N/A

`docker inspect <image>`

Pull images

`crictl pull <image>`

`ctr -n k8s.io i pull <image>`

`docker pull <image>`

Push images

N/A

`ctr -n k8s.io i push <image>`

`docker push <image>`

Delete images

`crictl rmi <image>`

`ctr -n k8s.io i rm <image>`

`docker rmi <image>`

Query pods

`crictl pods`

N/A

N/A

Query pod details

`crictl inspectp <pod name>`

N/A

N/A

Start pods

`crictl runp <pod name>`

N/A

N/A

Stop pods

`crictl stopp <pod name>`

N/A

N/A

## **References**

-   [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster)
    
-   [Create and manage node pools in sandboxed containers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-management-in-sandboxed-containers)
