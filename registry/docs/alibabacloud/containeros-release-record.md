Alibaba Cloud releases new ContainerOS images on a regular basis. Each release includes the latest OS features, feature updates, and security patches. This topic describes the release notes for ContainerOS images and provides links to relevant references.

For more information about the features, benefits, use scenarios, and billing rules of ContainerOS, see [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/).

## ContainerOS 3.6.1

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.6.1

lifsea\_3\_x64\_5G\_alibase\_20251101.qcow2

2025-11-05

\-

> This version is in canary release.

-   The containerd version is upgraded to 2.1.4.1.
    
-   Patched three high-severity vulnerabilities (CVE-2025-31133, CVE-2025-52565, and CVE-2025-52881) that could lead to container escape.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

containerd.io

CVE-2025-31133, CVE-2025-52565, CVE-2025-52881

2.1.4-2.alios7.x86\_64

### Software package updates

**Upgraded packages**

```
containerd.io, 2.1.3-20250627164416.alios7->2.1.4-2.alios7
```

## ContainerOS 3.6.0

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.6.0

lifsea\_3\_x64\_5G\_alibase\_20250916.qcow2

2025-10-10

\-

-   Security hardening mode for Elastic Compute Service (ECS) [instance metadata](/help/en/ecs/user-guide/view-instance-metadata/) is supported.
    
-   GPU instances are supported.
    
-   Container O&M: Cloud Assistant is upgraded to version 2.2.4.990.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

glibc

CVE-2025-0395, CVE-2025-4802, CVE-2025-8058

2.32-1.21.al8.lifsea8

libxml2

CVE-2025-7425, CVE-2025-32415

2.9.7-21.0.1.1.al8.3

sqlite

CVE-2025-6965

3.26.0-20.al8

### Software package updates

**Upgraded packages**

```
NetworkManager, 1:1.40.16-18.0.1.al8.x86_64->1:1.40.16-19.0.1.1.al8.x86_64
NetworkManager-libnm, 1:1.40.16-18.0.1.al8.x86_64->1:1.40.16-19.0.1.1.al8.x86_64
device-mapper, 8:1.02.181-14.0.1.al8.x86_64->8:1.02.181-15.0.1.al8.x86_64
device-mapper-libs, 8:1.02.181-14.0.1.al8.x86_64->8:1.02.181-15.0.1.al8.x86_64
fuse, 2.9.7-19.al8.x86_64->2.9.7-19.1.al8.x86_64
fuse-common, 3.3.0-19.al8.x86_64->3.3.0-19.1.al8.x86_64
fuse-devel, 2.9.7-19.al8.x86_64->2.9.7-19.1.al8.x86_64
fuse-libs, 2.9.7-19.al8.x86_64->2.9.7-19.1.al8.x86_64
glibc, 2.32-1.20.al8.lifsea8.x86_64->2.32-1.21.al8.lifsea8.x86_64
ignition, 2.9.0-2.git1d56dc8.17.al8.x86_64->2.9.0-2.git1d56dc8.18.al8.x86_64
libarchive, 3.5.3-5.al8.x86_64->3.5.3-6.al8.x86_64
libblkid, 2.32.1-46.0.3.al8.x86_64->2.32.1-46.0.4.1.al8.x86_64
libcurl, 7.61.1-35.0.2.al8.x86_64->7.61.1-35.0.2.al8.3.x86_64
libcurl-devel, 7.61.1-35.0.2.al8.x86_64->7.61.1-35.0.2.al8.3.x86_64
libfdisk, 2.32.1-46.0.3.al8.x86_64->2.32.1-46.0.4.1.al8.x86_64
libmount, 2.32.1-46.0.3.al8.x86_64->2.32.1-46.0.4.1.al8.x86_64
libselinux, 2.9-8.2.al8.x86_64->2.9-10.1.al8.x86_64
libselinux-devel, 2.9-8.2.al8.x86_64->2.9-10.1.al8.x86_64
libselinux-utils, 2.9-8.2.al8.x86_64->2.9-10.1.al8.x86_64
libsemanage, 2.9-9.al8.x86_64->2.9-11.0.1.al8.x86_64
libsmartcols, 2.32.1-46.0.3.al8.x86_64->2.32.1-46.0.4.1.al8.x86_64
libtirpc, 1.3.3-8.0.1.al8.x86_64->1.3.3-9.0.1.al8.x86_64
libuuid, 2.32.1-46.0.3.al8.x86_64->2.32.1-46.0.4.1.al8.x86_64
libxml2, 2.9.7-21.0.1.1.al8.1.x86_64->2.9.7-21.0.1.1.al8.3.x86_64
libxml2-devel, 2.9.7-21.0.1.1.al8.1.x86_64->2.9.7-21.0.1.1.al8.3.x86_64
lifsea-cli, 0.4.2-1.al8.x86_64->0.4.3-1.al8.x86_64
lifsea-release, 3-14.al8.x86_64->3-15.al8.x86_64
numactl-libs, 2.0.16-3.0.1.al8.x86_64->2.0.18-2.0.3.al8.x86_64
openldap, 2.4.46-19.al8.x86_64->2.4.46-21.al8.x86_64
pam, 1.3.1-37.al8.x86_64->1.3.1-38.al8.x86_64
quota, 1:4.06-6.0.1.al8.x86_64->1:4.09-2.0.1.al8.x86_64
quota-nls, 1:4.06-6.0.1.al8.noarch->1:4.09-2.0.1.al8.noarch
rpm, 4.14.3-31.0.2.1.al8.x86_64->4.14.3-32.0.1.1.al8.x86_64
rpm-libs, 4.14.3-31.0.2.1.al8.x86_64->4.14.3-32.0.1.1.al8.x86_64
rpm-plugin-selinux, 4.14.3-31.0.2.1.al8.x86_64->4.14.3-32.0.1.1.al8.x86_64
sqlite-libs, 3.26.0-19.al8.x86_64->3.26.0-20.al8.x86_64
tzdata, 2024b-1.0.1.1.al8.noarch->2025b-1.0.1.1.al8.noarch
util-linux, 2.32.1-46.0.3.al8.x86_64->2.32.1-46.0.4.1.al8.x86_64
```

**New software packages**

```
libatomic-10.2.1-3.8.al8.x86_64
```

## ContainerOS 3.5.1

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.5.1

lifsea\_3\_x64\_5G\_alibase\_20250805.qcow2

2025-08-11

\-

-   The kernel version is upgraded to kernel-5.10.134-19.1.1.lifsea8.
    
-   The containerd version is upgraded to 2.1.3 to resolve image pull failures from certain repositories.
    

**Important**

The Kubernetes version of Container Service for Kubernetes (ACK) clusters must be 1.31 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For detailed changes, see the section below.

### Major updates

-   The kernel is upgraded to `kernel-5.10.134-19.1.1.lifsea8` to fix a memory leak in the Berkeley Packet Filter (BPF) module and patch several known Common Vulnerabilities and Exposures (CVEs), improving system security.
    
-   Administrative container enhancements: The `start_sshd.sh` script is integrated to enable direct SSH logon to the container. After logging on to the instance from the ECS console (password-free), start the SSH service within the container by running `sudo start_sshd.sh`. Use the key pair associated with the ECS instance to SSH directly into the administrative container.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

kernel

CVE-2022-48635, CVE-2022-48639, CVE-2022-48644, CVE-2022-48651, CVE-2022-48675, CVE-2022-48828, CVE-2022-48946, CVE-2022-48981, CVE-2022-48993, CVE-2022-49014, CVE-2022-49046, CVE-2022-49190, CVE-2022-49219, CVE-2022-49398, CVE-2022-49443, CVE-2022-49444, CVE-2022-49562, CVE-2022-49711, CVE-2023-52448, CVE-2023-52463, CVE-2023-5246, CVE-2023-52477, CVE-2023-52486, CVE-2023-52503, CVE-2023-52618, CVE-2023-52702, CVE-2023-52756, CVE-2023-52759, CVE-2023-52789, CVE-2023-52836, CVE-2023-52880, CVE-2023-52898, CVE-2023-52917, CVE-2024-26591, CVE-2024-26598, CVE-2024-26629, CVE-2024-26641, CVE-2024-26642, CVE-2024-26718, CVE-2024-26749, CVE-2024-26778, CVE-2024-26808, CVE-2024-26810, CVE-2024-26812, CVE-2024-26934, CVE-2024-26970, CVE-2024-26977, CVE-2024-26988, CVE-2024-27020, CVE-2024-27389, CVE-2024-27437, CVE-2024-35791, CVE-2024-35947, CVE-2024-36476, CVE-2024-36489, CVE-2024-36953, CVE-2024-37356, CVE-2024-38577, CVE-2024-38601, CVE-2024-38605, CVE-2024-39468, CVE-2024-39480, CVE-2024-41004, CVE-2024-41023, CVE-2024-41045, CVE-2024-42084, CVE-2024-42143, CVE-2024-42161, CVE-2024-42239, CVE-2024-42246, CVE-2024-42283, CVE-2024-42312, CVE-2024-43098, CVE-2024-43817, CVE-2024-43846, CVE-2024-43883, CVE-2024-43889, CVE-2024-43890, CVE-2024-43892, CVE-2024-43893, CVE-2024-43894, CVE-2024-43914, CVE-2024-44944, CVE-2024-44989, CVE-2024-44990, CVE-2024-45006, CVE-2024-46674, CVE-2024-46675, CVE-2024-46707, CVE-2024-46719, CVE-2024-46735, CVE-2024-46743, CVE-2024-46750, CVE-2024-46763, CVE-2024-46782, CVE-2024-46787, CVE-2024-46829, CVE-2024-47667, CVE-2024-47668, CVE-2024-47671, CVE-2024-47679, CVE-2024-47685, CVE-2024-47692, CVE-2024-47695, CVE-2024-47705, CVE-2024-47706, CVE-2024-47707, CVE-2024-47736, CVE-2024-47737, CVE-2024-47739, CVE-2024-47742, CVE-2024-47755, CVE-2024-48881, CVE-2024-49569, CVE-2024-49851, CVE-2024-49858, CVE-2024-49878, CVE-2024-49924, CVE-2024-49933, CVE-2024-49948, CVE-2024-49949, CVE-2024-49952, CVE-2024-49954, CVE-2024-49963, CVE-2024-49975, CVE-2024-49978, CVE-2024-50002, CVE-2024-50036, CVE-2024-50045, CVE-2024-50046, CVE-2024-50059, CVE-2024-50082, CVE-2024-50083, CVE-2024-50115, CVE-2024-50131, CVE-2024-50150, CVE-2024-50151, CVE-2024-50153, CVE-2024-50179, CVE-2024-50180, CVE-2024-50251, CVE-2024-50256, CVE-2024-50258, CVE-2024-50264, CVE-2024-50267, CVE-2024-50269, CVE-2024-50301, CVE-2024-50304, CVE-2024-53054, CVE-2024-53066, CVE-2024-53068, CVE-2024-53103, CVE-2024-53104, CVE-2024-53119, CVE-2024-53122, CVE-2024-53124, CVE-2024-53125, CVE-2024-53140, CVE-2024-53141, CVE-2024-53146, CVE-2024-53157, CVE-2024-53161, CVE-2024-53172, CVE-2024-53174, CVE-2024-53194, CVE-2024-53214, CVE-2024-53234, CVE-2024-56558, CVE-2024-56569, CVE-2024-56570, CVE-2024-56583, CVE-2024-56600, CVE-2024-56602, CVE-2024-56605, CVE-2024-56606, CVE-2024-56610, CVE-2024-56614, CVE-2024-56636, CVE-2024-56637, CVE-2024-56642, CVE-2024-56644, CVE-2024-56664, CVE-2024-56672, CVE-2024-56686, CVE-2024-56688, CVE-2024-56694, CVE-2024-56698, CVE-2024-56739, CVE-2024-56747, CVE-2024-56751, CVE-2024-56756, CVE-2024-56779, CVE-2024-56780, CVE-2024-57807, CVE-2024-57888, CVE-2024-57889, CVE-2024-57903, CVE-2024-57913, CVE-2024-57917, CVE-2024-57929, CVE-2024-57951, CVE-2024-57981, CVE-2024-58010, CVE-2025-21656, CVE-2025-21664, CVE-2025-21683, CVE-2025-21689, CVE-2025-21699, CVE-2025-21704, CVE-2025-21724, CVE-2025-21726, CVE-2025-21727, CVE-2025-21728, CVE-2025-21731, CVE-2025-21734, CVE-2025-21745, CVE-2025-21787, CVE-2025-21804, CVE-2025-21814, CVE-2025-21844, CVE-2025-21853, CVE-2025-21887

5.10.134-19.1.1.lifsea8

libxml2

CVE-2025-49794, CVE-2025-49796, CVE-2025-6021, CVE-2025-32414

2.9.7-21.0.1.1.al8.1

sudo

CVE-2025-32462

1.9.5p2-1.0.2.al8.1

jq

CVE-2024-23337, CVE-2025-48060

1.6-17.al8.2

libarchive

CVE-2025-25724

3.5.3-5.al8

glib2

CVE-2024-52533, CVE-2025-4373

2.68.4-16.0.1.al8.2

pam

CVE-2025-6020

1.3.1-37.al8

### Software package updates

**Upgraded packages**

```
glib2, 2.68.4-14.0.2.al8.x86_64->2.68.4-16.0.1.al8.2.x86_64
jq 1.6-16.al8.x86_64->1.6-17.al8.2.x86_64
kernel-core, 5.10.134-18.0.2.lifsea8.x86_64->5.10.134-19.1.1.lifsea8.x86_64
libarchive, 3.5.3-4.al8.x86_64->3.5.3-5.al8.x86_64
libxml2, 2.9.7-19.0.1.1.al8.x86_64->2.9.7-21.0.1.1.al8.1.x86_64
libxml2-devel, 2.9.7-19.0.1.1.al8.x86_64->2.9.7-21.0.1.1.al8.1.x86_64
lifsea-cli, 0.4.1-1.al8.x86_64->0.4.2-1.al8.x86_64
pam, 1.3.1-36.al8.x86_64->1.3.1-37.al8.x86_64
sudo, 1.9.5p2-1.0.2.al8.x86_64->1.9.5p2-1.0.2.al8.1.x86_64
```

## ContainerOS 3.5.0

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.5.0

lifsea\_3\_x64\_5G\_alibase\_20250619.qcow2

2025-06-20

\-

-   Shell interpreters are removed to enhance system security and stability.
    
-   The containerd version is upgraded to 2.1.1.
    

**Important**

The Kubernetes version of ACK clusters must be 1.31 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For full release notes, see the following details.

### Major updates

-   Security enhancements:
    
    -   Shell interpreters (`/bin/bash` and `/bin/sh`) are removed to block execution of shell scripts, mitigating malicious script attacks.
        
    -   The `/etc` directory is mounted with `noexec` flag to prevent binary execution in system configuration paths.
        
    -   Cloud Assistant command execution is migrated to the administrative container for isolated operations. For administrative container details, see [Maintain ContainerOS nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros).
        
-   System disk partition sizes are adjusted. The `rootfs` partition is set to 3 GiB and the system metadata partition is set to 2 GiB, optimizing storage allocation.
    
-   The `cirrus` kernel module is loaded by default to fix undersized Virtual Network Computing (VNC) logon windows.
    
-   Redundant packages are removed (see the following change list) and shell dependencies in core components are eliminated.
    
-   The privileged bootstrap container is introduced for executing user-defined `user-data` scripts during node initialization.
    
    -   The bootstrap container shares `PID Namespace` and `NET Namespace` with host OS for kernel/network consistency.
        
    -   Critical system directories (`/etc`, `/opt`, and `/usr/local`) are mounted as writable volumes into the bootstrap container. Modifications made within the container are directly persisted to the host OS.
        
    -   Running `systemctl` commands within the container is supported.
        
-   Usage limitations:
    
    -   [Terway](/help/en/ack/product-overview/terway) 1.14.1 or later is required. To update it, see [Components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview).
        
    -   Incompatible with the ack-advanced-audit component.
        
    -   To use Apsara File Storage NAS (NAS) or CPFS volumes, install [cnfs-nas-daemon](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-cnfs-nas-daemon).
        
    -   Exactly 1 data disk per node pool.
        
    -   Both the **Pre-defined Custom Data** and **User Data** specified in the node pool configuration are executed within a bootstrap container. As a result, they cannot directly write to the host OS filesystem, including directories such as `/etc/hosts`, `/etc/resolv.conf`, and `/usr`.
        

### Security updates

**Package name**

**CVE ID**

**Package version**

grub2

CVE-2025-0624

1:2.02-165.0.2.al8

freetype

CVE-2025-27363

2.10.4-10.al8

expat

CVE-2024-8176

2.2.5-17.al8

libtasn1

CVE-2024-12133

4.13-5.0.1.al8

krb5

CVE-2025-24528

1.18.2-32.0.1.al8

### Software package updates

**Upgraded packages**

```
expat, 2.2.5-16.al8.x86_64->2.2.5-17.al8.x86_64
freetype, 2.10.4-9.al8.x86_64->2.10.4-10.al8.x86_64
grub2-common, 1:2.02-150.0.2.al8.noarch->1:2.02-165.0.2.al8.noarch
grub2-efi-x64, 1:2.02-150.0.2.al8.x86_64->1:2.02-165.0.2.al8.x86_64
grub2-tools, 1:2.02-150.0.2.al8.x86_64->1:2.02-165.0.2.al8.x86_64
grub2-tools-extra, 1:2.02-150.0.2.al8.x86_64->1:2.02-165.0.2.al8.x86_64
grub2-tools-minimal, 1:2.02-150.0.2.al8.x86_64->1:2.02-165.0.2.al8.x86_64
ignition, 2.9.0-2.git1d56dc8.16.al8.x86_64->2.9.0-2.git1d56dc8.17.al8.x86_64
krb5-devel, 1.18.2-30.0.1.al8.x86_64->1.18.2-32.0.1.al8.x86_64
krb5-libs, 1.18.2-30.0.1.al8.x86_64->1.18.2-32.0.1.al8.x86_64
libkadm5, 1.18.2-30.0.1.al8.x86_64->1.18.2-32.0.1.al8.x86_64
libtasn1, 4.13-4.0.1.al8.x86_64->4.13-5.0.1.al8.x86_64
lifsea-cli, 0.3.0-1.al8.x86_64->0.4.1-1.al8.x86_64
lifsea-release, 3-13.al8.x86_64->3-14.al8.x86_64
systemd, 239-82.0.3.5.al8.lifsea8.3.x86_64->239-82.0.4.2.al8.lifsea8.5.x86_64
systemd-libs, 239-82.0.3.5.al8.lifsea8.3.x86_64->239-82.0.4.2.al8.lifsea8.5.x86_64
systemd-udev, 239-82.0.3.5.al8.lifsea8.3.x86_64->239-82.0.4.2.al8.lifsea8.5.x86_64
```

**Deleted packages**

```
cloud-utils-growpart-0.33-0.0.1.al8.noarch
json-c-0.13.1-3.0.1.al8.x86_64
libmodulemd-2.13.0-1.0.1.al8.x86_64
librepo-1.14.2-4.0.1.al8.x86_64
librhsm-0.0.3-5.0.1.al8.x86_64
libsolv-0.7.20-6.al8.x86_64
libyaml-0.1.7-5.2.al8.x86_64
lifsea-repos-1.0-5.al8.noarch
lifsea-repos-ostree-1.0-5.al8.noarch
rpm-ostree-2022.10.117.g52714b51-3.0.1.al8.lifsea8.x86_64
rpm-ostree-libs-2022.10.117.g52714b51-3.0.1.al8.lifsea8.x86_64
```

## ContainerOS 3.4.0

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.4.0

lifsea\_3\_x64\_5G\_alibase\_20250410.qcow2

2025-04-14

\-

-   The kernel version is upgraded to kernel-5.10.134-18.0.2.lifsea8.
    
-   The containerd version is upgraded to 1.6.38.
    
-   The system disk is changed to read-only. To make sure that the system can be launched as expected, attach a data disk.
    
-   The default image size is reduced to 5 GiB. The size of the `rootfs` partition is 4 GiB and the size of the system metadata partition is 1 GiB.
    
-   The image acceleration component is pre-installed by default.
    

**Important**

-   Only available in [clusters with Auto Mode enabled](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode).
    
-   The Kubernetes version of ACK clusters must be 1.30 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For full release notes, see the following details.
    

### Major updates

-   Kernel updates:
    
    -   The kernel version is upgraded to kernel-5.10.134-18.0.2.lifsea8, where the issue that the DNS cache becomes unavailable in IP Virtual Server (IPVS) mode is fixed.
        
-   Security enhancements:
    
    -   A fifth partition is created on the system disk to store system metadata. The partition is mounted to the /etc directory by using OverlayFS.
        
    -   User data is stored on a data disk, which is mounted to the /var directory by default.
        
-   The version of the administrative container is updated and common O&M tools are pre-installed.
    
-   The Unified Extensible Firmware Interface (UEFI) boot mode is supported to enable support for more ECS instance types, such as ECS bare metal instances.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

libcap

CVE-2025-1390

2.48-6.0.2.al8

libxml2

CVE-2024-56171, CVE-2025-24928

2.9.7-19.0.1.1.al8

NetworkManager

CVE-2024-3661

1:1.40.16-18.0.1.al8

bzip2-libs

CVE-2019-12900

1.0.6-28.al8

### Software package updates

**Upgraded packages**

```
NetworkManager, 1.40.16-15.0.1.al8->1.40.16-18.0.1.al8
NetworkManager-libnm, 1.40.16-15.0.1.al8->1.40.16-18.0.1.al8
audit-libs, 3.0.7-5.0.1.al8->3.1.2-1.0.2.al8
bash, 4.4.20-4.al8->4.4.20-5.0.1.al8
bzip2-libs, 1.0.6-27.al8->1.0.6-28.al8
ca-certificates, 2023.2.60_v7.0.306-80.0.al8->2024.2.69_v8.0.303-80.0.al8
chrony, 4.2-1.0.1.al8->4.5-2.0.1.al8
cmake-filesystem, 3.26.5-1.0.2.al8->3.26.5-2.0.2.al8
cpio, 2.12-11.0.1.al8->2.12-11.0.2.al8
device-mapper, 8:1.02.181-13.al8.0.1.al8->8:1.02.181-14.0.1.al8
device-mapper-libs, 8:1.02.181-13.al8.0.1.al8->8:1.02.181-14.0.1.al8
diffutils, 3.6-6.1.al8->3.6-6.2.al8
dnsmasq, 2.79-32.0.1.al8->2.79-33.al8
e2fsprogs, 1.46.0-1.0.1.al8->1.46.0-1.0.3.al8
e2fsprogs-libs, 1.46.0-1.0.1.al8->1.46.0-1.0.3.al8
elfutils-libelf, 0.189-3.al8->0.190-2.0.2.al8
file-libs, 5.33-25.al8->5.33-26.al8
findutils, 1:4.6.0-21.0.1.al8->1:4.6.0-23.0.1.al8
fuse, 2.9.7-17.al8->2.9.7-19.al8
fuse-common, 3.3.0-17.al8->3.3.0-19.al8
fuse-devel, 2.9.7-17.al8->2.9.7-19.al8
fuse-libs, 2.9.7-17.al8->2.9.7-19.al8
gawk, 4.2.1-4.0.1.al8->4.2.1-4.0.2.al8
gnutls, 3.6.16-8.0.1.al8.3->3.6.16-8.0.2.al8
gpgme, 1.13.1-11.0.1.al8->1.13.1-12.0.2.al8
gzip, 1.9-14.al8->1.9-14.0.1.al8
hwdata, 0.314-8.19.0.2.1.al8->0.314-8.22.0.1.2.al8
ignition, 2.9.0-2.git1d56dc8.15.al8->2.9.0-2.git1d56dc8.16.al8
iptables, 1.8.5-9.0.1.al8->1.8.5-11.0.1.al8
iptables-libs, 1.8.5-9.0.1.al8->1.8.5-11.0.1.al8
iptables-services, 1.8.5-9.0.1.al8->1.8.5-11.0.1.al8
jq, 1.6-15.al8->1.6-16.al8
kernel-core, 5.10.134-18.0.1.lifsea8->5.10.134-18.0.2.lifsea8
kmod-25, 19.0.2.al8->25-20.0.1.al8
kmod-libs, 25-19.0.2.al8->25-20.0.1.al8
less, 530-1.2.al8->530-3.0.1.al8
libacl, 2.2.53-1.2.al8->2.2.53-3.0.1.al8
libblkid, 2.32.1-45.0.1.1.al8.1->2.32.1-46.0.3.al8
libcap, 2.48-6.0.1.al8->2.48-6.0.2.al8
libcom_err, 1.46.0-1.0.1.al8->1.46.0-1.0.3.al8
libcom_err-devel, 1.46.0-1.0.1.al8->1.46.0-1.0.3.al8
libdb, 5.3.28-42.0.1.al8->5.3.28-42.0.3.al8
libdb-utils, 5.3.28-42.0.1.al8->5.3.28-42.0.3.al8
libfdisk, 2.32.1-45.0.1.1.al8.1->2.32.1-46.0.3.al8
libffi, 3.1-24.0.1.al8->3.1-24.0.4.al8
libibverbs, 46.0-1.0.3.al8.1->48.0-1.0.1.al8
libmount, 2.32.1-45.0.1.1.al8.1->2.32.1-46.0.3.al8
libnfsidmap, 1:2.3.3-59.0.3.al8.lifsea8->1:2.3.3-59.0.4.al8.lifsea8
libpcap, 14:1.9.1-5.1.al8->14:1.9.1-5.2.al8
libpsl, 0.20.2-6.1.al8->0.20.2-6.1.0.1.al8
libseccomp, 2.5.2-1.0.6.al8->2.5.2-1.0.9.al8
libsigsegv, 2.11-5.2.al8->2.11-5.3.al8
libsmartcols, 2.32.1-45.0.1.1.al8.1->2.32.1-46.0.3.al8
libss, 1.46.0-1.0.1.al8->1.46.0-1.0.3.al8
libtirpc, 1.3.2-1.0.1.al8->1.3.3-8.0.1.al8
libuuid, 2.32.1-45.0.1.1.al8.1->2.32.1-46.0.3.al8
libxml2, 2.9.7-18.0.3.1.al8->2.9.7-19.0.1.1.al8
libxml2-devel, 2.9.7-18.0.3.1.al8->2.9.7-19.0.1.1.al8
lifsea-cli, 0.2.1-1.al8->0.3.0-1.al8
lifsea-release, 3-12.al8->3-13.al8
lua-libs, 5.3.4-12.0.2.al8->5.3.4-12.0.3.al8
ncurses-base, 6.1-10.20180224.0.1.al8->6.1-10.20180224.0.2.al8
ncurses-libs, 6.1-10.20180224.0.1.al8->6.1-10.20180224.0.2.al8
nfs-utils, 1:2.3.3-59.0.3.al8.lifsea8->1:2.3.3-59.0.4.al8.lifsea8
numactl-libs, 2.0.16-1.0.1.al8->2.0.16-3.0.1.al8
ostree, 2022.2-9.al8.lifsea8->2022.2-11.al8.lifsea8
ostree-libs, 2022.2-9.al8.lifsea8->2022.2-11.al8.lifsea8
ostree-prepare-root, 2022.2-9.al8.lifsea8->2022.2-11.al8.lifsea8
p11-kit, 0.23.22-1.1.al8->0.23.22-2.al8
p11-kit-trust, 0.23.22-1.1.al8->0.23.22-2.al8
pciutils, 3.7.0-3.0.1.al8->3.8.0-1.0.2.al8
pciutils-libs, 3.7.0-3.0.1.al8->3.8.0-1.0.2.al8
pcre, 8.42-6.0.1.al8->8.42-6.0.2.al8
pcre2, 10.32-3.0.1.al8->10.32-3.0.2.al8
pcre2-devel, 10.32-3.0.1.al8->10.32-3.0.2.al8
pcre2-utf16, 10.32-3.0.1.al8->10.32-3.0.2.al8
pcre2-utf32, 10.32-3.0.1.al8->10.32-3.0.2.al8
policycoreutils, 2.9-24.al8->2.9-26.al8
procps-ng, 3.3.15-14.0.1.al8->3.3.15-14.0.3.al8
quota, 1:4.06-6.al8->1:4.06-6.0.1.al8
quota-nls, 1:4.06-6.al8->1:4.06-6.0.1.al8
readline, 7.0-10.2.al8->7.0-10.3.al8
rpm, 4.14.3-27.0.5.2.al8->4.14.3-31.0.2.1.al8
rpm-libs, 4.14.3-27.0.5.2.al8->4.14.3-31.0.2.1.al8
rpm-ostree, 2022.10.117.g52714b51-2.0.2.al8.lifsea8->2022.10.117.g52714b51-3.0.1.al8.lifsea8
rpm-ostree-libs, 2022.10.117.g52714b51-2.0.2.al8.lifsea8->2022.10.117.g52714b51-3.0.1.al8.lifsea8
rpm-plugin-selinux, 4.14.3-27.0.5.2.al8->4.14.3-31.0.2.1.al8
sed, 4.5-5.0.1.al8->4.5-5.0.2.al8
selinux-policy, 3.14.3-128.0.1.al8.1->3.14.3-139.0.1.al8
selinux-policy-targeted, 3.14.3-128.0.1.al8.1->3.14.3-139.0.1.al8
shadow-utils, 2:4.6-19.0.1.al8->2:4.6-22.0.1.al8
sudo, 1.9.5p2-1.0.1.al8->1.9.5p2-1.0.2.al8
systemd, 239-78.0.4.1.al8.lifsea8->239-82.0.3.5.al8.lifsea8.3
systemd-libs, 239-78.0.4.1.al8.lifsea8->239-82.0.3.5.al8.lifsea8.3
systemd-udev, 239-78.0.4.1.al8.lifsea8->239-82.0.3.5.al8.lifsea8.3
tar, 2:1.30-9.0.1.al8->2:1.30-9.0.2.al8
tzdata, 2024a-1.0.1.6.al8->2024b-1.0.1.1.al8
util-linux, 2.32.1-45.0.1.1.al8.1->2.32.1-46.0.3.al8
vim-minimal, 2:8.0.1763-19.0.1.al8.4->2:8.0.1763-19.0.2.al8.5
xfsprogs, 5.0.0-12.0.1.al8->5.0.0-12.0.2.al8
xz-devel, 5.4.4-2.al8->5.4.4-2.0.1.al8
xz-libs, 5.4.4-2.al8->5.4.4-2.0.1.al8
```

**New software packages**

```
bootupd-0.2.5-3.1.al8
dracut-049-233.git20240115.0.2.al8
efi-filesystem-3-3.1.al8
efivar-libs-37-4.2.al8
file-5.33-26.al8
freetype-2.10.4-9.al8
fwupd-1.7.8-2.0.1.al8
gdisk-1.0.7-5.al8
gettext-0.19.8.1-17.2.al8
gettext-libs-0.19.8.1-17.2.al8
graphite2-1.3.14-9.0.1.al8
grub2-common-1:2.02-150.0.2.al8
grub2-efi-x64-1:2.02-150.0.2.al8
grub2-tools-1:2.02-150.0.2.al8
grub2-tools-extra-1:2.02-150.0.2.al8
grub2-tools-minimal-1:2.02-150.0.2.al8
harfbuzz-2.7.4-10.0.1.al8
libcroco-0.6.12-4.3.al8.1
libgcab1-1.4-6.0.1.al8
libgomp-10.2.1-3.8.al8
libgudev-237-1.0.1.al8
libgusb-0.3.0-1.2.al8
libkcapi-1.4.0-2.0.1.1.al8
libkcapi-hmaccalc-1.4.0-2.0.1.1.al8
libpng-2:1.6.34-5.2.al8
libsmbios-2.4.1-2.2.al8
libxmlb-0.1.15-1.2.al8
mokutil-1:0.3.0-12.0.1.al8
os-prober-1.74-9.0.1.al8
overlaybd-snapshotter-1.3.0-20250219063650.c5dd4fa
t-storage-overlaybd-open-1.0.13-20250226164315.c185019.al8
polkit-libs-0.115-15.al8.2
shared-mime-info-2.1-5.0.1.al8
shim-x64-15.8-2.0.1.1.al8
xz-5.4.4-2.0.1.al8
```

## ContainerOS 3.3.3

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.3.3

lifsea\_3\_x64\_10G\_alibase\_20250210.qcow2

2025-02-14

\-

-   The kernel version is upgraded to kernel-5.10.134-18.0.1.lifsea8.
    
-   The containerd version is upgraded to 1.6.36.
    
-   Terway is upgraded to 1.9.12.
    

**Important**

The Kubernetes version of ACK clusters must be 1.28 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For full release notes, see the following details.

### Major updates

-   Kernel updates:
    
    -   The kernel version is upgraded to kernel-5.10.134-18.0.1.lifsea8.
        
-   Halt polling is disabled to improve network service-level agreement (SLA) metrics.
    
-   The classic network configurations are removed from chrony.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

glibc

CVE-2024-33599, CVE-2024-33600, CVE-2024-33601, CVE-2024-33602, CVE-2022-23218, CVE-2022-23219

2.32-1.20.al8.lifsea8

kernel

CVE-2023-52478, CVE-2023-52628, CVE-2024-36883, CVE-2024-36886, CVE-2024-36889, CVE-2024-36898, CVE-2024-38544, CVE-2024-38564, CVE-2024-38579, CVE-2024-38583, CVE-2024-38588, CVE-2024-39487, CVE-2024-41012, CVE-2024-41014, CVE-2024-41040, CVE-2024-41087, CVE-2024-41090, CVE-2024-41091, CVE-2024-42232, CVE-2024-42265, CVE-2024-42280, CVE-2024-42285, CVE-2024-42286, CVE-2024-42288, CVE-2024-42289, CVE-2024-42292, CVE-2024-43861, CVE-2024-43871, CVE-2024-43882, CVE-2024-44931, CVE-2024-44958, CVE-2024-44987, CVE-2024-45003, CVE-2024-45018, CVE-2024-45025, CVE-2024-46673, CVE-2024-46695, CVE-2024-46715, CVE-2024-46722, CVE-2024-46723, CVE-2024-46737, CVE-2024-46738, CVE-2024-46739, CVE-2024-46744, CVE-2024-46755, CVE-2024-46756, CVE-2024-46758, CVE-2024-46759, CVE-2024-46761, CVE-2024-46777

5.10.134-18.0.1.lifsea8

pam

CVE-2024-10041, CVE-2024-10963

1.3.1-36.al8

### Software package updates

**Upgraded packages**

```
containerd.io, 1.6.34-20240829163547.alios7->1.6.36-20241017174428.alios7
glibc, 2.32-1.17.al8.lifsea8->2.32-1.20.al8.lifsea8
ignition, 2.9.0-2.git1d56dc8.14.al8->2.9.0-2.git1d56dc8.15.al8
kernel-core, 5.10.134-17.3.1.lifsea8->5.10.134-18.0.1.lifsea8
pam, 1.3.1-28.al8->1.3.1-36.al8
```

### Fixed issues

-   The issues that occur on images when Non-Volatile Memory Express (NVMe) disks fail to be resized are fixed.
    

## ContainerOS 3.3.2

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.3.2

lifsea\_3\_x64\_10G\_alibase\_20241202.qcow2

2024-12-06

\-

-   The kernel version is upgraded to kernel-5.10.134-17.3.1.lifsea8.
    
-   Terway is upgraded to 1.9.10.
    

**Important**

The Kubernetes version of ACK clusters must be 1.28 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For full release notes, see the following details.

### Major updates

-   Kernel updates:
    
    -   The kernel version is upgraded to kernel-5.10.134-17.3.1.lifsea8.
        
    -   The `CONFIG_RANDOM_TRUST_CPU` parameter is enabled by default to accelerate random number initialization for the kernel.
        
-   The default startup status of specific system services are modified to ensure consistency between ContainerOS 3.3.2 and Alibaba Cloud Linux 3.2104 U10.1. The following system services are included:
    
    -   The following services are disabled by default:
        
        -   `fstrim.timer`
            
    -   The following services are enabled by default:
        
        -   `NetworkManager-dispatcher.service`
            
-   The root directory can be mounted only in read-only mode. Data disks cannot be directly mounted to the root directory.
    
-   The `chpasswd` tool is provided to allow for temporary password setting during maintenance.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

bubblewrap

CVE-2024-42472

0.4.0-2.1.al8

bzip2-libs

CVE-2019-12900

1.0.6-27.al8

curl

CVE-2023-28322, CVE-2023-38546, CVE-2023-46218, CVE-2024-2398

7.61.1-35.0.2.al8

expat

CVE-2024-50602, CVE-2024-45490, CVE-2024-45491, CVE-2024-45492

2.2.5-16.al8

glib2

CVE-2024-34397

2.68.4-14.0.2.al8

gnutls

CVE-2024-0553, CVE-2024-28834

3.6.16-8.0.1.al8.3

krb5

CVE-2024-3596

1.18.2-30.0.1.al8

nghttp2

CVE-2024-28182

1.33.0-6.0.1.al8.1

openssl

CVE-2024-5535

1.1.1k-14.0.2.al8

wget

CVE-2024-38428

1.19.5-12.0.1.al8

### Software package updates

**Upgraded packages**

```
bubblewrap, 0.4.0-2.1.al8->0.4.0-2.2.al8
bzip2-libs, 1.0.6-26.2.al8->1.0.6-27.al8
curl, 7.61.1-34.0.1.al8->7.61.1-35.0.2.al8
expat, 2.2.5-13.al8->2.2.5-16.al8
glib2, 2.68.4-11.1.al8->2.68.4-14.0.2.al8
gnutls, 3.6.16-8.0.2.al8->3.6.16-8.0.1.al8.3
kernel-core, 5.10.134-17.2.1.lifsea8->5.10.134-17.3.1.lifsea8
krb5-devel, 1.18.2-26.0.1.al8->1.18.2-30.0.1.al8
krb5-libs, 1.18.2-26.0.1.al8->1.18.2-30.0.1.al8
libcurl, 7.61.1-34.0.1.al8->7.61.1-35.0.2.al8
libcurl-devel, 7.61.1-34.0.1.al8->7.61.1-35.0.2.al8
libkadm5, 1.18.2-26.0.1.al8->1.18.2-30.0.1.al8
libnghttp2, 1.33.0-5.al8->1.33.0-6.0.1.al8.1
lifsea-release, 3-11.al8->3-12.al8
openldap, 2.4.46-18.al8->2.4.46-19.al8
openssl-devel, 1.1.1k-12.0.1.al8->1.1.1k-14.0.2.al8
openssl-libs, 1.1.1k-12.0.1.al8->1.1.1k-14.0.2.al8
tzdata, 2024a-1.0.1.3.al8->2024a-1.0.1.6.al8
wget, 1.19.5-11.0.1.al8->1.19.5-12.0.1.al8
```

## ContainerOS 3.3.1

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.3.1

lifsea\_3\_x64\_10G\_alibase\_20240918.qcow2

2024-09-12

\-

-   The ContainerOS base image is updated to the latest software version.
    
-   The kernel version is upgraded to kernel-5.10.134-17.2.1.lifsea8.
    
-   The containerd version is upgraded to 1.6.34.
    

**Important**

The Kubernetes version of ACK clusters must be 1.28 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For full release notes, see the following details.

### Major updates

-   Kernel updates:
    
    -   The kernel version is upgraded to kernel-5.10.134-17.2.1.lifsea8.
        
-   The containerd version is upgraded to 1.6.34.
    
-   Folders can be created in the root directory and custom data disks can be mounted to the created folders.
    

### Software package updates

**Upgraded packages**

```
bubblewrap, 0.4.0-1.1.al8->0.4.0-2.1.al8
containerd.io, 1.6.28-20240202134619.alios7->1.6.34-20240829163547.alios7
glib2, 2.68.4-11.al8->2.68.4-11.1.al8
ignition, 2.9.0-2.git1d56dc8.13.al8->2.9.0-2.git1d56dc8.14.al8
kernel-core, 5.10.134-17.0.2.lifsea8->5.10.134-17.2.1.lifsea8
libndp, 1.7-6.0.1.al8->1.7-7.0.1.al8
libxml2, 2.9.7-18.0.3.al8->2.9.7-18.0.3.1.al8
libxml2-devel, 2.9.7-18.0.3.al8->2.9.7-18.0.3.1.al8
lifsea-cli, 0.2.0-2.al8->0.2.1-1.al8
tzdata, 2024a-1.0.1.1.al8->2024a-1.0.1.3.al8
```

### Fixed issues

-   The prompts provided by `lifsea-cli` are optimized to remind users to restart the system after they use `lifsea-cli` to update the kernel.
    

## ContainerOS 3.3

**Version**

**Image ID**

**Release date**

**Description**

ContainerOS 3.3

lifsea\_3\_x64\_10G\_containerd\_1\_6\_28\_alibase\_20240705.vhd

2024-07-05

\-

-   The ContainerOS base image is updated to the latest software version.
    
-   The kernel version is upgraded to kernel-5.10.134-17.0.2.lifsea8.
    
-   The cgroup v2 mode is supported by default.
    

**Important**

The Kubernetes version of ACK clusters must be 1.28 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). For full release notes, see the following details.

### Major updates

-   Kernel updates:
    
    -   The kernel version is upgraded to kernel-5.10.134-17.0.2.lifsea8.
        
    -   Startup acceleration is disabled for the `CONFIG_BT` bluetooth module.
        
-   The cgroup v2 mode is supported by default.
    
-   The default values of the following scheduling-related kernel parameters are modified to improve the performance of CPU-intensive jobs:
    
    -   `kernel.sched_wakeup_granularity_ns=15000000`
        
    -   `kernel.sched_min_granularity_ns=10000000`
        
-   The default values of the following kernel parameters are modified based on the official Alibaba Cloud Linux 3 image:
    
    ```
      kernel.hung_task_timeout_secs = 240
      kernel.panic_on_oops = 1
      kernel.watchdog_thresh = 50
      kernel.hardlockup_panic = 1
      kernel.sysrq = 1
      net.ipv4.neigh.default.gc_stale_time = 120
      net.ipv4.conf.all.rp_filter = 0
      net.ipv4.conf.default.rp_filter = 0
      net.ipv4.conf.default.arp_announce = 2
      net.ipv4.conf.lo.arp_announce = 2
      net.ipv4.conf.all.arp_announce = 2
      net.ipv4.tcp_max_tw_buckets = 5000
      net.ipv4.tcp_syncookies = 1
      net.ipv4.tcp_synack_retries = 2
      net.ipv4.tcp_slow_start_after_idle = 0
      vm.swappiness = 0
    ```
    
-   The default value of Transparent Huge Pages (THP) is changed from `always` to `madvise`.
    

### Security updates

**Package name**

**CVE ID**

**Package version**

curl

CVE-2023-38546

7.61.1-34.0.1.al8

dnsmasq

CVE-2023-28450, CVE-2023-50387, CVE-2023-50868

2.79-32.0.1.al8

expat

CVE-2023-52425

2.2.5-13.al8

glib2

CVE-2023-29499, CVE-2023-32611, CVE-2023-32665

2.68.4-11.al8

glibc

CVE-2024-2961

2.32-1.17.al8.lifsea8

gmp

CVE-2021-43618

6.2.0-13.0.1.al8

gnutls

CVE-2023-5981

3.6.16-8.0.2.al8

kernel-core

CVE-2022-3114, CVE-2022-3114, CVE-2022-3424, CVE-2022-38096, CVE-2022-3903, CVE-2022-45887, CVE-2023-0160, CVE-2023-0615, CVE-2023-1206, CVE-2023-20569, CVE-2023-20588, CVE-2023-20593, CVE-2023-28464, CVE-2023-2860, CVE-2023-3006, CVE-2023-31083, CVE-2023-31085, CVE-2023-3358, CVE-2023-3567, CVE-2023-3772, CVE-2023-3863, CVE-2023-39192, CVE-2023-4015, CVE-2023-4132, CVE-2023-4155, CVE-2023-42753, CVE-2023-42754, CVE-2023-42755, CVE-2023-45863, CVE-2023-45871, CVE-2023-4622, CVE-2023-4623, CVE-2023-4921, CVE-2023-51042, CVE-2023-51779, CVE-2023-5178, CVE-2023-52438, CVE-2023-52445, CVE-2023-5717, CVE-2023-6176, CVE-2023-6546, CVE-2023-6817, CVE-2023-6915, CVE-2023-6931, CVE-2023-6932, CVE-2024-0565, CVE-2024-0646, CVE-2024-1086, CVE-2024-22099, CVE-2024-23307, CVE-2024-24855, CVE-2024-24860, CVE-2024-26589, CVE-2024-26597

5.10.134-17.0.2.lifsea8

libssh

CVE-2023-6004, CVE-2023-6918, CVE-2023-48795

0.9.6-12.al8

libxml2

CVE-2024-25062

2.9.7-18.0.3.al8

oniguruma

CVE-2019-13224, CVE-2019-16163, CVE-2019-19012, CVE-2019-19203, CVE-2019-19204

6.8.2-3.0.1.al8

openssl

CVE-2023-3446, CVE-2023-3817, CVE-2023-5678

1.1.1k-12.0.1.al8

pam

CVE-2024-22365

1.3.1-28.al8

procps-ng

CVE-2023-4016

3.3.15-14.0.1.al8

rpm

CVE-2021-35937, CVE-2021-35938, CVE-2021-35939

4.14.3-27.0.5.2.al8

shadow-utils

CVE-2023-4641

4.6-19.0.1.al8

sudo

CVE-2023-28486, CVE-2023-28487, CVE-2023-42465

1.9.5p2-1.0.1.al8

util-linux

CVE-2024-28085

2.32.1-45.0.1.1.al8.1

### Software package updates

**Upgraded packages**

```
NetworkManager, 1.40.16-4.0.1.al8->1.40.16-15.0.1.al8
NetworkManager-libnm, 1.40.16-4.0.1.al8->1.40.16-15.0.1.al8
acpid, 2.0.32-6.0.1.al8->2.0.32-7.al8
audit-libs, 3.0.7-4.0.1.al8->3.0.7-5.0.1.al8
chkconfig, 1.19.1-1.al8->1.19.2-1.al8
cmake-filesystem, 3.20.2-5.al8->3.26.5-1.0.2.al8
coreutils-single, 8.30-15.al8->8.30-15.0.3.al8
crypto-policies, 20221215-1.gitece0092.al8->20230731-1.git3177e06.al8
curl, 7.61.1-31.0.3.al8.2->7.61.1-34.0.1.al8
dbus, 1.12.8-25.0.1.al8->1.12.8-26.0.1.al8
dbus-common, 1.12.8-25.0.1.al8->1.12.8-26.0.1.al8
dbus-daemon, 1.12.8-25.0.1.al8->1.12.8-26.0.1.al8
dbus-libs, 1.12.8-25.0.1.al8->1.12.8-26.0.1.al8
dbus-tools, 1.12.8-25.0.1.al8->1.12.8-26.0.1.al8
device-mapper, 1.02.181-9.0.1.al8->1.02.181-13.al8.0.1.al8
device-mapper-libs, 1.02.181-9.0.1.al8->1.02.181-13.al8.0.1.al8
dnsmasq, 2.79-27.al8->2.79-32.0.1.al8
elfutils-libelf, 0.188-3.0.1.al8->0.189-3.al8
expat, 2.2.5-11.al8->2.2.5-13.al8
file-libs, 5.33-24.al8->5.33-25.al8
findutils, 4.6.0-20.2.al8->4.6.0-21.0.1.al8
fuse, 2.9.7-16.al8->2.9.7-17.al8
fuse-common, 3.3.0-16.al8->3.3.0-17.al8
fuse-devel, 2.9.7-16.al8->2.9.7-17.al8
fuse-libs, 2.9.7-16.al8->2.9.7-17.al8
glib2, 2.68.4-6.al8->2.68.4-11.al8
glibc, 2.32-1.13.2.lifsea8->2.32-1.17.al8.lifsea8
gmp, 6.2.0-10.0.1.al8->6.2.0-13.0.1.al8
gnutls, 3.6.16-6.0.1.al8->3.6.16-8.0.2.al8
gzip, 1.9-13.al8->1.9-14.al8
hwdata, 0.314-8.16.al8->0.314-8.19.0.2.1.al8
ignition, 2.9.0-2.git1d56dc8.11.al8->2.9.0-2.git1d56dc8.13.al8
iptables, 1.8.4-24.0.1.al8->1.8.5-9.0.1.al8
iptables-libs, 1.8.4-24.0.1.al8->1.8.5-9.0.1.al8
iptables-services, 1.8.4-24.0.1.al8->1.8.5-9.0.1.al8
irqbalance, 1.9.0-4.0.1.al8->1.9.2-1.0.1.al8
jq, 1.6-14.al8->1.6-15.al8
kernel-core, 5.10.134-16.1.1.lifsea8->5.10.134-17.0.2.lifsea8
krb5-devel, 1.18.2-25.0.1.al8->1.18.2-26.0.1.al8
krb5-libs, 1.18.2-25.0.1.al8->1.18.2-26.0.1.al8
libblkid, 2.32.1-42.0.1.al8->2.32.1-45.0.1.1.al8.1
libcap, 2.48-5.al8->2.48-6.0.1.al8
libcurl, 7.61.1-31.0.3.al8.2->7.61.1-34.0.1.al8
libcurl-devel, 7.61.1-31.0.3.al8.2->7.61.1-34.0.1.al8
libfdisk, 2.32.1-42.0.1.al8->2.32.1-45.0.1.1.al8.1
libgcc, 10.2.1-3.5.al8->10.2.1-3.8.al8
libibverbs, 44.0-2.0.1.al8.1->46.0-1.0.3.al8.1
libkadm5, 1.18.2-25.0.1.al8->1.18.2-26.0.1.al8
libmount, 2.32.1-42.0.1.al8->2.32.1-45.0.1.1.al8.1
libnfsidmap, 2.3.3-41.2.lifsea8->2.3.3-59.0.3.al8.lifsea8
libnftnl, 1.1.5-5.0.1.al8->1.2.2-3.0.1.al8
libnghttp2, 1.33.0-4.0.1.al8.1->1.33.0-5.al8
libsmartcols, 2.32.1-42.0.1.al8->2.32.1-45.0.1.1.al8.1
libsolv, 0.7.20-4.al8->0.7.20-6.al8
libssh, 0.9.6-10.al8->0.9.6-12.al8
libssh-config, 0.9.6-10.al8->0.9.6-12.al8
libstdc++, 10.2.1-3.5.al8->10.2.1-3.8.al8
libuuid, 2.32.1-42.0.1.al8->2.32.1-45.0.1.1.al8.1
libxml2, 2.9.7-18.0.2.al8->2.9.7-18.0.3.al8
libxml2-devel, 2.9.7-18.0.2.al8->2.9.7-18.0.3.al8
lifsea-release, 3-8.al8->3-11.al8
lifsea-repos, 1.0-4.al8->1.0-5.al8
lifsea-repos-ostree, 1.0-4.al8->1.0-5.al8
nfs-utils, 2.3.3-41.2.lifsea8->2.3.3-59.0.3.al8.lifsea8
numactl-libs, 2.0.14-9.al8->2.0.16-1.0.1.al8
oniguruma, 6.8.2-2.1.al8->6.8.2-3.0.1.al8
openssl-devel, 1.1.1k-9.0.1.al8->1.1.1k-12.0.1.al8
openssl-libs, 1.1.1k-9.0.1.al8->1.1.1k-12.0.1.al8
ostree, 2022.2-5.0.1.3.lifsea8->2022.2-9.al8.lifsea8
ostree-libs, 2022.2-5.0.1.3.lifsea8->2022.2-9.al8.lifsea8
ostree-prepare-root, 2022.2-5.0.1.3.lifsea8->2022.2-9.al8.lifsea8
pam, 1.3.1-25.0.1.al8->1.3.1-28.al8
procps-ng, 3.3.15-13.0.1.al8->3.3.15-14.0.1.al8
rpcbind, 1.2.5-8.2.lifsea8->1.2.5-10.0.2.al8.lifsea8
rpm, 4.14.3-26.0.6.al8->4.14.3-27.0.5.2.al8
rpm-libs, 4.14.3-26.0.6.al8->4.14.3-27.0.5.2.al8
rpm-ostree, 2022.10.115.g15eba7b1-2.0.1.4.lifsea8->2022.10.117.g52714b51-2.0.2.al8.lifsea8
rpm-ostree-libs, 2022.10.115.g15eba7b1-2.0.1.4.lifsea8->2022.10.117.g52714b51-2.0.2.al8.lifsea8
rpm-plugin-selinux, 4.14.3-26.0.6.al8->4.14.3-27.0.5.2.al8
selinux-policy, 3.14.3-54.4.lifsea8->3.14.3-128.0.1.al8.1
selinux-policy-targeted, 3.14.3-54.4.lifsea8->3.14.3-128.0.1.al8.1
shadow-utils, 4.6-17.0.1.al8->4.6-19.0.1.al8
sqlite-libs, 3.26.0-18.al8->3.26.0-19.al8
sudo, 1.8.29-10.al8->1.9.5p2-1.0.1.al8
systemd, 239-74.0.3.lifsea8.3.1->239-78.0.4.1.al8.lifsea8
systemd-libs, 239-74.0.3.lifsea8.3.1->239-78.0.4.1.al8.lifsea8
systemd-udev, 239-74.0.3.lifsea8.3.1->239-78.0.4.1.al8.lifsea8
tzdata, 2023c-1.0.1.al8->2024a-1.0.1.1.al8
util-linux, 2.32.1-42.0.1.al8->2.32.1-45.0.1.1.al8.1
which, 2.21-18.0.1.al8->2.21-20.0.1.al8
xfsprogs, 5.0.0-11.0.1.al8->5.0.0-12.0.1.al8
```

### Fixed issues

-   The issue that NVMe-based system disks cannot be automatically resized is fixed.
