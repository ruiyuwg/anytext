ContainerOS is Alibaba Cloud’s official operating system, optimized for containerized workloads and fully compatible with the Kubernetes ecosystem. Built on Alibaba Cloud Linux 3, ContainerOS delivers enhanced security, faster boot times, and a streamlined set of system services and packages. It includes cloud-native components by default and works out of the box.

## Supported Scenarios

-   You can use ContainerOS in node pools of ACK managed clusters. Your cluster version must be 1.24 or later, and your container runtime must be containerd. For details, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb). To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
    
-   ContainerOS does not support nodes based on Arm architecture or instance types with local disks.
    

## About ContainerOS

In containerized deployments, using cloud-native components—such as container runtimes and Kubernetes—lets you focus on application development instead of infrastructure details. Traditional operating systems include many user-mode tools, packages, and system services to support diverse use cases. This leads to bloated systems, slow boot times, and fragmented package versions, which complicate operations and maintenance.

To address these challenges in cloud-native environments and improve usability, ACK designed ContainerOS specifically for containers. Compared with traditional operating systems, ContainerOS is lighter and more modular. It starts and runs containers faster. It also provides stronger security and lower resource requirements—making it ideal for cloud computing and large-scale deployments.

## Features

**Feature**

**Description**

Image Streamlining

Includes only the packages and system services required to run Kubernetes pods. Full-system integration and optimization significantly reduce boot time. ContainerOS includes about 210 system packages. In contrast, traditional operating systems—such as Alibaba Cloud Linux 3, Alibaba Cloud Linux 2, and CentOS—ship with about 600 packages by default.

-   Reduces disk usage: ContainerOS cuts package count by over 60%, greatly lowering storage footprint.
    
-   Reduces CVE exposure: Fewer packages mean fewer known vulnerabilities and a smaller attack surface.
    

ContainerOS does not include Python support or direct SSH login. Focus on developing and running your applications—not managing the OS.

Fast boot

End-to-end OS optimizations speed up boot time and shorten node scale-out time in ACK. Simplified boot flow and preloaded container images for cluster management reduce delays caused by image pulls during node startup. Combined with ACK control-plane optimizations, node scaling becomes even faster.

For example, ContainerOS scales 1,000 nodes to readiness in just 53 seconds (P90). This outperforms CentOS and the [Alibaba Cloud Linux 2 custom image](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-custom-images#task-2047009) optimization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9598742771/CAEQVBiBgMD2lfC_5RkiIDJmYzA4MDMzZjMxNTQwYmNiNjljNTRkOTU1ZDZlYmMy3963382_20230830144006.372.svg)

**Important**

The values shown here are theoretical. Actual results may vary slightly due to product improvements. Use your own environment for accurate measurements.

Security hardening

The root file system is read-only. Only the /etc and /var directories are writable to support basic configuration needs. This design follows the immutable infrastructure principle for cloud-native workloads and helps prevent escaped containers from modifying the host file system. ContainerOS blocks direct system logins for untraceable operations. Instead, it provides a dedicated [administrative container](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros#task-2143510) for non-routine O&M tasks.

Atomic upgrades

Following the immutable infrastructure principle, ContainerOS does not include the `yum` package manager. Instead, it supports image-level updates, rollbacks (disk replacement), and limited layered hot upgrades. This ensures consistent software versions and configurations across all cluster nodes.

Each image undergoes strict internal testing before release. Unlike traditional OS upgrades that apply individual RPM packages—and introduce uncertainty—image-level testing and publishing guarantee stability after upgrades.

## Benefits

**Benefit**

**Description**

Vertical optimization for containers

Optimized specifically for container workloads. Features include fast boot, security hardening, and an immutable root file system. These features boost performance and simplify cluster-wide O&M and management while ensuring high node consistency.

Fast node scaling

Tight integration between ACK control-plane optimizations and OS-level improvements speeds up node scaling. Currently, node scaling accounts for over 90% of total ACK node autoscaling time. Using ContainerOS significantly improves the node pool autoscaling experience.

OS maintainability

When used with ACK control, ContainerOS supports continuous updates for Kubernetes and other system software, timely CVE fixes, and on-demand image releases. Compared with the [Alibaba Cloud Linux 2 custom image](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-custom-images#task-2047009) approach—which also uses preloaded images to speed up node startup—ContainerOS provides official maintenance and CVE coverage. This reduces effort spent on maintaining, upgrading, and fixing critical issues in custom OS images.

Joint optimizations with ACK also cut node downtime caused by O&M tasks, helping keep your applications running smoothly.

Alibaba Cloud Linux 3 compatibility

ContainerOS uses the same kernel version and most packages as [Alibaba Cloud Linux 3](/help/en/alinux/product-overview/alibaba-cloud-linux-overview#concept-rgv-rvd-2hb). It ships with the latest kernel 5.10 LTS, delivering the newest Linux community features for cloud applications.

## **Security notes**

ContainerOS applies the following design principles to enhance security.

### Operating system security

**Feature**

**Description**

Minimal execution environment

ContainerOS includes only packages and system services needed for containers—about 210 packages. Fewer packages mean fewer CVEs and a smaller attack surface. High-risk packages—such as binutils, Python, OpenSSH, and tcpdump—are removed. ContainerOS minimizes scripting language support and does not support Python, Perl, or Ruby scripts.

ContainerOS node O&M method

Uses a minimal execution environment and an immutable root file system for stronger security. O&M methods for ContainerOS nodes differ from standard Linux systems. For details, see [O&M ContainerOS nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros).

Immutable root file system

Does not support package managers such as yum. Uses rpm-ostree for traceable OS changes and rollbacks. The root file system `/` and core directory `/usr`—which holds binaries and shared libraries—are read-only. The `/etc` directory—used for dynamic configuration—and the `/var` directory—used for logs and container images—remain writable.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0698742771/CAEQVBiBgIDW7vG_5RkiIDEzODZiMGYyMGNkMzQ5YjU4ZmVlNTZiZGRlMDI1YTEw5444871_20250707104458.187.svg)

**Expand to view paths, attributes, and recommended usage in the file system**

**Path**

**Properties**

**Purpose**

`/`

`/usr`

Read-only

Executable

The root file system `/` and the `/usr` directory are mounted as read-only to ensure system integrity and prevent tampering.

`/etc`

Writable

Stateful

This directory contains system configuration files, such as custom systemd service files and personalized software configurations. These files are retained after a system upgrade.

`/var`

Writable

Stateful

This directory stores directories created by components at runtime, such as `/var/run/NetworkManager`, and component working directories, such as `/var/lib/containerd`. The contents of this directory are retained after a system upgrade.

`/home`

`/mnt`

`/opt`

`/root`

`/usr/local`

Writable

Stateful

These directories are symbolic links within the `/var` directory. This makes them available for use during system operation, such as creating new users in the `/home` directory or mounting other data disks in the `/mnt` directory.

`/run`

`/tmp`

Writable

Stateless

These directories are mounted as tmpfs and store temporary files required by the system. Data in these directories is cleared upon restart.

Read-only system disk

The system disk is set to read-only mode to protect the OS from tampering and persistent attacks. To ensure normal boot and operation, attach a separate data disk.

User data is stored on the data disk, isolating it from the system disk. By default, the data disk mounts to `/var`.

Available only in [ContainerOS 3.5.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-release-record#49b7a0b547law) and later.

Removed shell interpreters

Shell interpreters—such as /bin/bash and /bin/sh—are removed from the system. This blocks shell script execution and lowers the risk of malicious script attacks.

New Bootstrap container

The Bootstrap container runs custom user data (User Data) scripts before the main container starts. After initialization completes, the Bootstrap container exits automatically—avoiding security risks to the host system or primary application containers.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0698742771/CAEQVBiBgID.gvW_5RkiIDExMGE4ZjFiYTUzNTQyNjg5MDRhNzU5MDExZTc2MGE15444871_20250707105456.326.svg)

### Infrastructure security

Based on the Alibaba Cloud Linux package ecosystem: [Alibaba Cloud Linux](/help/en/alinux/product-overview/alibaba-cloud-linux-overview#concept-rgv-rvd-2hb) is Alibaba Cloud’s Linux server distribution and the most widely used OS on Alibaba Cloud. ContainerOS builds on Alibaba Cloud Linux and adds extensive cloud-specific optimizations. It reuses years of Alibaba Cloud Linux packaging and image delivery experience. Before each image release, ContainerOS undergoes OS baseline testing and ACK integration testing to ensure availability and security.

## Billing

ContainerOS is a free image. You can use ContainerOS in ACK node pools at no cost and receive long-term support from Alibaba Cloud.

However, other resources used with ContainerOS—such as vCPUs, memory, storage, public bandwidth, and snapshots—are billed separately. For details, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).

## References

-   To use ContainerOS as a node pool OS, see [Use ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-managed-node-pool-to-run-containeros).
    
-   To review ContainerOS image release history, see [ContainerOS image release history](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-release-record).
