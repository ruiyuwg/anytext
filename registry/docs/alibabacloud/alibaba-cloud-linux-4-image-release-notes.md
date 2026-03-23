Alibaba Cloud regularly updates the Alibaba Cloud Linux 4 image with the latest OS features, functionality, and security patches. This document lists the available image versions and their updates.

## Background information

Unless otherwise specified, these updates apply to Elastic Compute Service (ECS) in all available regions.

## **2026**

### **Alibaba Cloud Linux 4.0.2**

**Version number**

**Image ID**

**Release date**

**Description**

Alibaba Cloud Linux (Alinux) 4.0.2

aliyun\_4\_x64\_20G\_alibase\_20260120.vhd

2026-01-20

-   Updated the `Alibaba Cloud Linux (Alinux) 4 LTS 64-bit` base image for the x86 architecture.
    
-   Updated the kernel version to `6.6.102-5.2.alnx4.x86_64`.
    

> For more information, see [Updates](#1c4deb8e1a863).

aliyun\_4\_arm64\_20G\_alibase\_20260120.vhd

2026-01-20

-   Updated the `Alibaba Cloud Linux (Alinux) 4 LTS 64-bit` base image for the ARM architecture.
    
-   Updated the kernel version to `6.6.102-5.2.alnx4.aarch64`.
    

> For more information, see [Updates](#1c4deb8e1a863).

aliyun\_4\_x64\_20G\_container\_optimized\_alibase\_20260120.vhd

2026-01-20

-   Updated the kernel version to `6.6.102-5.2.alnx4.x86_64`.
    

> For more information, see [Updates](#1c4deb8e1a863).

aliyun\_4\_arm64\_20G\_container\_optimized\_alibase\_20260120.vhd

2026-01-20

-   Updated the kernel version to `6.6.102-5.2.alnx4.aarch64`.
    

> For more information, see [Updates](#1c4deb8e1a863).

### Updates

**Important updates**

#### **Kernel**

The Kernel has been updated to `kernel-6.6.102-5.2.alnx4`.

#### **Memory**

-   This update fixes the tmpfs Large Page allocation policy to ensure compatibility with previous versions.
    
-   This update introduces an atomic mode for RSS stats collection.
    
-   This update optimizes maple tree copying and VMA replacement in `dup_mmap()` to improve `fork()` performance.
    
-   This update backports optimization patches for VFS and ext4 block allocation from the upstream community to enhance performance in specific scenarios.
    

#### **Other BaseOS updates**

-   Breaking changes with controlled impact:
    
    -   **The default root file system for new images is now ext4.** After a comprehensive review, Alibaba Cloud Linux (Alinux) 4, starting with version 4.0.2, reverts to ext4 as the default root file system, aligning with Alinux 3. This decision is based on several factors: ext4 offers enhanced stability, proven by long-term production use and maintenance in the community's stable branch, delivers better performance in key scenarios, and provides a simpler migration path for users. Additionally, the latest ANCK-6.6 Kernel includes native support for ext4 Large Folio, making its performance in Large Page scenarios comparable to XFS. This change is transparent to most users and does not affect daily operations or maintenance workflows.
        
    -   **The auditd service now starts automatically on boot.** The `alinux-base-setup` component is updated from `alinux-base-setup-4.1-6.alnx4` to `alinux-base-setup-4.1-7.alnx4`, which enables the `auditd` service by default. This change provides continuous security monitoring and reliable data for troubleshooting, compliance audits, and security. The configuration uses the `-a task,never` setting to avoid logging events related to process creation or execution, which conserves system resources, prevents overload, and keeps the performance impact minimal.
        
-   New features:
    
    -   **New distributed middleware components** This release introduces the `rabbitmq-server` component (`rabbitmq-server-3.13.0-1.alnx4`) and its runtime dependencies: `erlang-26.2.5.15-2.alnx4`, `wxGTK3-3.2.4-1.alnx4`, `erlang-rpm-macros-0.3.6-1.alnx4`, `elixir-1.16.1-1.alnx4`, `erlang-rebar-2.6.1-1.alnx4`, `python-httpbin-0.7.0-1.alnx4`, and `python-raven-6.10.0-1.alnx4`. These components provide a distributed message queue service to enhance ecosystem support.
        
-   Enhancements:
    
    -   This release updates the `qemu` component from `qemu-8.2.0-34.alnx4` to `qemu-8.2.0-36.alnx4`, resolving an initialization issue in the VFIO HCT module, updating ACPI tables for RISC-V virtual machines to support new hardware features (such as SRAT, SLIT, PLIC, APLIC, and IMSIC), optimizing memory management, enhancing security to prevent ROP attacks, and improving code reusability.
        
    -   This release updates `erofs-utils` from `erofs-utils-1.8.4-1.alnx4` to `erofs-utils-1.8.10-1.alnx4`. This version optimizes build performance for `-Efragments` and `-Eall-fragments` and further enhances `mkfs.erofs` metadata build performance. `dump.erofs` can now output file content using the `--cat` option, and `tarerofs` now supports pre-1970 timestamps. This update also includes several stability bug fixes.
        
    -   This release updates `glibc` from `glibc-2.38-13.alnx4` to `glibc-2.38-16.alnx4`, enhancing system performance by modifying the memory allocation policy and adjusting default thresholds.
        
    -   This release updates `alinux-release` from `alinux-release-4-11.alnx4` to `alinux-release-4-12.alnx4` to mark the release of Alibaba Cloud Linux (Alinux) 4.0.2.
        

**Security updates**

**CVE ID**

**Severity**

**Affected component**

CVE-2025-10230

Critical

samba

CVE-2025-9640

High

samba

CVE-2025-8677

High

bind

CVE-2025-8067

High

udisks2

CVE-2025-66293

High

libpng

CVE-2025-64459

High

python-django

CVE-2025-64458

High

python-django

CVE-2025-6395

High

gnutls

CVE-2025-62168

High

squid

CVE-2025-6020

High

pam

CVE-2025-5994

High

unbound

CVE-2025-59682

High

python-django

CVE-2025-59681

High

python-django

CVE-2025-59088

High

python-kdcproxy

CVE-2025-58098

High

httpd

CVE-2025-57833

High

python-django

CVE-2025-57803

High

ImageMagick

CVE-2025-55780

High

mupdf

CVE-2025-55753

High

httpd

CVE-2025-55752

High

tomcat

CVE-2025-55298

High

ImageMagick

CVE-2025-55154

High

ImageMagick

CVE-2025-52881

High

runc

CVE-2025-50420

High

poppler

CVE-2025-49844

High

redis

CVE-2025-49809

High

mtr

CVE-2025-48989

High

tomcat

CVE-2025-40908

High

perl-YAML-LibYAML

CVE-2025-40780

High

bind

CVE-2025-40778

High

bind

CVE-2025-31133

High

runc

CVE-2025-26625

High

git-lfs

CVE-2025-13699

High

mariadb

CVE-2025-13016

High

firefox

CVE-2025-13012

High

firefox

CVE-2025-11715

High

firefox

CVE-2025-11714

High

firefox

CVE-2025-11711

High

firefox

CVE-2025-11710

High

firefox

CVE-2025-11709

High

firefox

CVE-2025-11708

High

firefox

CVE-2025-11561

High

sssd

CVE-2025-11230

High

haproxy

CVE-2025-11021

High

libsoup3

CVE-2025-11021

High

libsoup

CVE-2025-0686

High

grub2

CVE-2025-0624

High

grub2

CVE-2024-45779

High

grub2

CVE-2024-4467

High

qemu

CVE-2024-31082

High

tigervnc

CVE-2024-31082

High

xorg-x11-server

CVE-2024-25621

High

containerd

CVE-2024-10963

High

pam

CVE-2023-50387

High

systemd

CVE-2025-14330

High

firefox

CVE-2025-14324

High

firefox

CVE-2025-14321

High

firefox

CVE-2025-9230

Medium

openssl

CVE-2025-8291

Medium

python3.11

CVE-2025-8114

Medium

libssh

CVE-2025-7462

Medium

ghostscript

CVE-2025-7345

Medium

gdk-pixbuf2

CVE-2025-66004

Medium

usbmuxd

CVE-2025-65018

Medium

libpng

CVE-2025-64506

Medium

libpng

CVE-2025-64505

Medium

libpng

CVE-2025-64329

Medium

containerd

CVE-2025-64181

Medium

OpenEXR

CVE-2025-62689

Medium

libmicrohttpd

CVE-2025-62594

Medium

ImageMagick

CVE-2025-62231

Medium

xorg-x11-server-Xwayland

CVE-2025-62231

Medium

tigervnc

CVE-2025-62231

Medium

xorg-x11-server

CVE-2025-62230

Medium

xorg-x11-server-Xwayland

CVE-2025-62230

Medium

tigervnc

CVE-2025-62230

Medium

xorg-x11-server

CVE-2025-62229

Medium

xorg-x11-server-Xwayland

CVE-2025-62229

Medium

tigervnc

CVE-2025-62229

Medium

xorg-x11-server

CVE-2025-62171

Medium

ImageMagick

CVE-2025-61985

Medium

openssh

CVE-2025-61984

Medium

openssh

CVE-2025-61915

Medium

cups

CVE-2025-61723

Medium

golang

CVE-2025-61664

Medium

grub2

CVE-2025-61663

Medium

grub2

CVE-2025-61662

Medium

grub2

CVE-2025-61661

Medium

grub2

CVE-2025-60753

Medium

libarchive

CVE-2025-59800

Medium

ghostscript

CVE-2025-59799

Medium

ghostscript

CVE-2025-59798

Medium

ghostscript

CVE-2025-59777

Medium

libmicrohttpd

CVE-2025-59362

Medium

squid

CVE-2025-59089

Medium

python-kdcproxy

CVE-2025-58436

Medium

cups

CVE-2025-58189

Medium

golang

CVE-2025-58188

Medium

golang

CVE-2025-58185

Medium

golang

CVE-2025-58183

Medium

golang

CVE-2025-58068

Medium

python-eventlet

CVE-2025-57812

Medium

libcupsfilters

CVE-2025-57807

Medium

ImageMagick

CVE-2025-54771

Medium

grub2

CVE-2025-54770

Medium

grub2

CVE-2025-5455

Medium

qt5-qtbase

CVE-2025-53101

Medium

ImageMagick

CVE-2025-53069

Medium

mysql

CVE-2025-53062

Medium

mysql

CVE-2025-53054

Medium

mysql

CVE-2025-53053

Medium

mysql

CVE-2025-53045

Medium

mysql

CVE-2025-53044

Medium

mysql

CVE-2025-53042

Medium

mysql

CVE-2025-53040

Medium

mysql

CVE-2025-52886

Medium

poppler

CVE-2025-52885

Medium

poppler

CVE-2025-5222

Medium

icu

CVE-2025-5187

Medium

kubernetes

CVE-2025-50949

Medium

fontforge

CVE-2025-47906

Medium

golang

CVE-2025-47219

Medium

gstreamer1-plugins-good

CVE-2025-47183

Medium

gstreamer1-plugins-good

CVE-2025-46819

Medium

redis

CVE-2025-46818

Medium

redis

CVE-2025-46817

Medium

redis

CVE-2025-4673

Medium

golang

CVE-2025-46400

Medium

transfig

CVE-2025-4432

Medium

rust

CVE-2025-40929

Medium

perl-Cpanel-JSON-XS

CVE-2025-32990

Medium

gnutls

CVE-2025-32989

Medium

gnutls

CVE-2025-32988

Medium

gnutls

CVE-2025-32464

Medium

haproxy

CVE-2025-24495

Medium

microcode\_ctl

CVE-2025-23050

Medium

qt5-qtconnectivity

CVE-2025-21490

Medium

mysql

CVE-2025-20623

Medium

microcode\_ctl

CVE-2025-20103

Medium

microcode\_ctl

CVE-2025-20054

Medium

microcode\_ctl

CVE-2025-20012

Medium

microcode\_ctl

CVE-2025-14104

Medium

util-linux

CVE-2025-13946

Medium

wireshark

CVE-2025-13601

Medium

glib2

CVE-2025-13499

Medium

wireshark

CVE-2025-13193

Medium

libvirt

CVE-2025-13020

Medium

firefox

CVE-2025-13019

Medium

firefox

CVE-2025-13018

Medium

firefox

CVE-2025-13017

Medium

firefox

CVE-2025-13014

Medium

firefox

CVE-2025-13013

Medium

firefox

CVE-2025-12818

Medium

postgresql

CVE-2025-12818

Medium

libpq

CVE-2025-12748

Medium

libvirt

CVE-2025-11712

Medium

firefox

CVE-2025-11683

Medium

perl-YAML-Syck

CVE-2025-11626

Medium

wireshark

CVE-2025-11568

Medium

luksmeta

CVE-2025-11411

Medium

unbound

CVE-2025-1125

Medium

grub2

CVE-2025-1118

Medium

grub2

CVE-2025-11082

Medium

gdb

CVE-2025-10911

Medium

libxslt

CVE-2025-10158

Medium

rsync

CVE-2025-0838

Medium

abseil-cpp

CVE-2025-0690

Medium

grub2

CVE-2025-0689

Medium

grub2

CVE-2025-0685

Medium

grub2

CVE-2025-0678

Medium

grub2

CVE-2025-0677

Medium

grub2

CVE-2025-0622

Medium

grub2

CVE-2024-8176

Medium

xmlrpc-c

CVE-2024-56738

Medium

grub2

CVE-2024-56737

Medium

grub2

CVE-2024-47081

Medium

python-pip

CVE-2024-45783

Medium

grub2

CVE-2024-45782

Medium

grub2

CVE-2024-45781

Medium

grub2

CVE-2024-45780

Medium

grub2

CVE-2024-45778

Medium

grub2

CVE-2024-45777

Medium

grub2

CVE-2024-45776

Medium

grub2

CVE-2024-45775

Medium

grub2

CVE-2024-45774

Medium

grub2

CVE-2024-45332

Medium

microcode\_ctl

CVE-2024-43420

Medium

microcode\_ctl

CVE-2024-38805

Medium

edk2

CVE-2024-28956

Medium

microcode\_ctl

CVE-2024-22365

Medium

pam

CVE-2024-12243

Medium

gnutls

CVE-2024-12133

Medium

libtasn1

CVE-2024-0567

Medium

gnutls

CVE-2024-0553

Medium

gnutls

CVE-2023-46048

Medium

texlive-base

CVE-2018-17828

Medium

zziplib

CVE-2025-9403

Low

jq

CVE-2025-9230

Low

openssl1.1

CVE-2025-8277

Low

libssh

CVE-2025-66418

Low

python-urllib3

CVE-2025-64720

Low

libpng

CVE-2025-64524

Low

cups-filters

CVE-2025-6199

Low

gdk-pixbuf2

CVE-2025-6075

Low

python3.10

CVE-2025-6075

Low

python3.11

CVE-2025-55212

Low

ImageMagick

CVE-2025-53019

Low

ImageMagick

CVE-2025-53014

Low

ImageMagick

CVE-2025-4945

Low

libsoup3

CVE-2025-4945

Low

libsoup

CVE-2025-46394

Low

busybox

CVE-2025-46393

Low

ImageMagick

CVE-2025-43965

Low

ImageMagick

CVE-2025-30258

Low

gnupg2

CVE-2025-13015

Low

firefox

CVE-2025-11731

Low

libxslt

CVE-2025-0684

Low

grub2

CVE-2024-58251

Low

busybox

CVE-2024-57360

Low

binutils

CVE-2024-25177

Low

luajit

CVE-2024-13176

Low

openssl

**Bug fixes**

-   Key fixes
    
    -   Updated `glibc` from `glibc-2.38-13.alnx4` to `glibc-2.38-15.alnx4` to resolve a performance degradation issue in MySQL.
        
    -   Updated `kexec-tools` from `kexec-tools-2.0.26-10.alnx4` to `kexec-tools-2.0.26-12.alnx4` to fix a `vmcore` generation failure on the `x86` architecture for the `ecs.ebmg8i.48xlarge` instance type.
        
    -   Updated `python-blivet` from `python-blivet-3.10.0-2.alnx4` to `python-blivet-3.10.0-3.alnx4` to fix a `UUID` error during `ISO` installation with multiple `NVMe` disks.
        
    -   Updated `systemd` from `systemd-255-9.alnx4` to `systemd-255-12.alnx4` to resolve an automatic device recognition issue after device hot-plugging and fix a load failure of the `sg` driver module.
        
-   General fixes
    
    -   Updated `python-rtslib` from `python-rtslib-2.1.75-2.alnx4` to `python-rtslib-2.1.75-3.alnx4`, fixing an error in `targetcli`.
        
    -   Updated `libcgroup` from `libcgroup-3.0.0-2.alnx4` to `libcgroup-3.1.0-2.alnx4` to align the package with the upstream community version.
        
    -   Updated `gdm` from `gdm-44.1-3.alnx4` to `gdm-44.1-4.alnx4`, fixing a screen corruption issue on Inspur systems caused by a conflict between Inspur's proprietary `HAM` chip and `Wayland`.
        
-   Miscellaneous updates
    
    -   Updated `junit5` from `junit5-5.10.2-1.alnx4` to `junit5-5.10.2-2.alnx4`, fixing an inconsistent source code `MD5` checksum.
        
    -   Updated `mariadb-connector-c` from `mariadb-connector-c-3.4.4-1.alnx4` to `mariadb-connector-c-3.4.4-2.alnx4`, fixing an inconsistent source code `MD5` checksum.
        
    -   Updated `inkscape` from `inkscape-1.4.2-1.alnx4` to `inkscape-1.4.2-2.alnx4`, rebuilt after an update to `poppler`.
        
    -   Updated `vala` from `vala-0.56.9-1.alnx4` to `vala-0.56.17-1.alnx4`, fixing a `gtksourceview5` build failure.
        
    -   Updated `qemu` from `qemu-8.2.0-34.alnx4` to `qemu-8.2.0-37.alnx4` to resolve upgrade errors caused by the removal of certain binary packages in newer versions by adjusting the `Obsoletes` declaration.
        
    -   Updated `cups-filters` from `cups-filters-2.0.0-1.alnx4` to `cups-filters-2.0.1-2.alnx4` to resolve upgrade errors caused by the removal of certain binary packages in newer versions by adjusting the `Obsoletes` declaration.
        

**Known issues**

For known issues in this release, see [Known issues for Alibaba Cloud Linux 4.0.1](#0e38eef28eve6).

## **2025**

### **Alibaba Cloud Linux 4 LTS 64 bit Deb edition**

**Version number**

**Image ID**

**Release date**

**Release details**

4.2404.0

alinux\_4\_deb\_x64\_20G\_alibase\_20251223.vhd

2025-12-30

-   Base Image: `Alibaba Cloud Linux 4 LTS 64 bit Deb Edition`
    
-   Kernel Version: `6.8.0-1036-aiext_6.8.0-1036.39.100`
    

> For more information, see [Updates](#6f57ea8252a91).

### **Updates**

Alibaba Cloud Linux 4 LTS 64 bit Deb Edition offers improved training and inference performance compared to Ubuntu 24.04. The following results are from benchmarks using the openclip and bevformer models:

-   **bevformer\_base Training**
    
    The average throughput per step increases by **~6%** at FP32 precision and **~4%** at FP16 precision.
    
-   **openclip (RN50) Training and Inference**
    
    The average throughput per step increases by **~13%** for **Training** and **~30%** for **Inference**.
    

**Important updates**

Kernel `6.8.0-1036-aiext_6.8.0-1036.39.100`

-   New features
    
    -   Adds support for the large folio feature to address performance bottlenecks in CPFS-fuse.
        
-   Compatibility
    
    -   Based on nvidia-ubuntu version 1036.39.
        
    -   Changes virtio-related kconfig options to `m` to facilitate future stability fixes for virtio module exceptions.
        
-   Stability
    
    -   Fixed a virtio net `hdrlen` exception in Data Processing Unit (DPU) scenarios.
        
    -   Fixed a `vblk iohang` issue in DPU scenarios.
        

**Packages**

1.  Pre-installed `kmod-fuse_6.8.0-1036-aiext-1.0.5.2-2` enhances support for `fuse over io_uring` mode and large folio, achieving one million IOPS and 40 GB/s cache read/write bandwidth.
    
2.  `Keentune 3.4.1-1` is pre-installed. This proprietary Alibaba Cloud product uses expert knowledge and AI algorithms to optimize performance for AI workloads.
    
3.  Memboost, a User Mode Memory Optimization Component, is available in the apt repository. It uses configurable policies to balance memory performance, cost, and stability, helping AI and high-concurrency workloads run efficiently.
    

### **Alibaba Cloud Linux 4.0.1**

**Version number**

**Image ID**

**Release date**

**Release details**

Alibaba Cloud Linux 4.0.1

aliyun\_4\_x64\_20G\_alibase\_20251011.vhd

2025-10-11

-   Updated the `Alibaba Cloud Linux 4 LTS 64-bit` base image for the x86 architecture with the latest software packages.
    
-   Updated the kernel to `kernel-6.6.102-5.alnx4`.
    

> For details, see [Updates](#1c4deb8e1a863).

aliyun\_4\_arm64\_20G\_alibase\_20251011.vhd

2025-10-11

-   Released the `Alibaba Cloud Linux 4 LTS 64-bit` base image for the ARM architecture.
    
-   Kernel version: `kernel-6.6.102-5.alnx4`.
    

> For details, see [Updates](#1c4deb8e1a863).

aliyun\_4\_x64\_20G\_container\_optimized\_alibase\_20251106.vhd

2025-11-24

-   Pre-installed additional software packages for containers.
    
-   Tuned kernel parameters for containers.
    
-   Adjusted default service startup configurations for containers.
    

> For details, see [Updates](#1c4deb8e1a863).

aliyun\_4\_arm64\_20G\_container\_optimized\_alibase\_20251106.vhd

2025-11-24

-   Pre-installed additional software packages for containers.
    
-   Tuned kernel parameters for containers.
    
-   Adjusted default service startup configurations for containers.
    

> For details, see [Updates](#1c4deb8e1a863).

### Updates

**Important updates**

#### **Kernel**

Kernel updated to `kernel-6.6.102-5.alnx4`.

-   #### **Memory**
    
    -   Enabled Huge Page optimization for code in the default cmdline.
        
    -   Optimized the `mremap()` system call.
        
    -   Optimized the folio move system call.
        
    -   Optimized contiguous PTE operations.
        
    -   Optimized the creation of Huge Page mappings in tmpfs.
        
    -   Optimized the `mincore()` system call.
        
    -   Fixed the check for shmem large-order support.
        
    -   Enabled creation of the entire large mapping on a tmpfs fault.
        
    -   Fixed a performance issue caused by a semantic change in `huge=always`.
        
    -   Optimized the batch size for 64-bit kernel memory statistics.
        
    -   Backported mTHP support for `madvise_free`.
        
    -   Ported the low-power container feature.
        
-   #### **Architecture**
    
    ##### **X86**
    
    -   Added support for EDAC, ISST, PMU-Core, PMU-Uncore, and PMU-CWF-events for the Intel CFW Architecture.
        
    -   Added support for AMD Fire Range CPUs.
        
    
    ##### **RISC-V**
    
    -   Added support for the rva23 Mandatory Instruction set.
        
    -   Added support for multi-level page tables: SV32 (32-bit), SV39, SV48, and SV57 (64-bit).
        
    -   Added support for HugeTLB and Huge Pages (NAPOT Extension).
        
    -   Added support for CPU Hot-plug management through the SBI Hart State Management (HSM) Extension.
        
    -   Added support for Atomic Operation extensions (Zabha and Zacas).
        
    -   Added support for the Performance Monitoring Unit (PMU).
        
-   #### **CVE fixes**
    
    -   CVE-2024-56775: The AMD display driver failed to correctly maintain plane reference counts when backing up and restoring plane state. This could lead to a Memory Leak or Illegal Memory Access, affecting display system stability and performance.
        
    -   CVE-2025-21927: The nvme driver did not validate the NVMe-over-TCP PDU header length.
        
    -   CVE-2025-38264: The nvme-tcp driver did not validate the request list, which could lead to a request-processing loop.
        
    -   CVE-2025-39702: The ipv6/sr module did not use constant-time comparison for MAC addresses.
        
    -   CVE-2025-39711: A missing `mei_cldev_disable` call could lead to a Use-after-free vulnerability.
        
    -   CVE-2025-39746: Improper handling of unreliable hardware conditions could lead to a System Crash.
        
    -   CVE-2025-39790: Failure to detect an event pointing to an unexpected TRE could lead to a Buffer Double-free.
        
    -   CVE-2025-39833: Deleting an uninitialized Timer could cause debug warnings and system instability.
        
    -   CVE-2025-39866: The `__mark_inode_dirty` function contained a Use-after-free vulnerability.
        

**Package updates**

The BaseOS baseline for Alibaba Cloud Linux 4.0.1 is an updated release of Anolis OS 23.3.

-   Switched the default file system in Elastic Compute Service (ECS) environments from ext4 to xfs. This change improves performance with the 6.6 kernel.
    
-   Switched the Docker provider to Moby. The legacy `docker` component will no longer receive updates but is retained in the repository metadata for compatibility. Its configuration prevents co-installation with Moby and allows users to select their preferred provider.
    
-   Disabled the `rpcbind` service by default to reduce unnecessary open ports and improve the security of public images.
    
-   Added the `ossfs-1.91.7` component, a command-line interface (CLI) for Alibaba Cloud Object Storage Service (OSS). This tool enables you to manage objects in OSS by mounting buckets to the local file system.
    
-   Added `vtoa-2.1.1`, which enables a cloud server to retrieve the real client IP address in FullNAT scenarios.
    
-   Added `idlemd-2.5.2`, which provides tools for monitoring and scheduling memory to manage idle resources.
    
-   Added `fuse3-3.17`, which provides the latest community `fuse` over `io_uring`. This version also introduces the `usrbio` engine to support interfaces similar to DeepSeek-3FS.
    
-   Added `tongsuo3-8.5.0` to support post-quantum cryptography and Guomi (Chinese commercial cryptographic algorithms).
    

**Security updates**

**Package name**

**CVE ID**

**Updated version**

tigervnc

CVE-2025-49175

CVE-2025-49176

CVE-2025-49178

CVE-2025-49179

CVE-2025-49180

CVE-2024-21885

tigervnc-1.13.1-5.alnx4

systemd

CVE-2025-4598

systemd-255-9.alnx4

redis

CVE-2025-27151

CVE-2025-32023

CVE-2025-48367

redis-7.2.10-1.alnx4

qemu

CVE-2024-26327

CVE-2024-26328

CVE-2024-3446

CVE-2024-3567

CVE-2024-7409

qemu-8.2.0-34.alnx4

python-paramiko

CVE-2023-48795

python-paramiko-3.4.0-1.alnx4

postgresql

CVE-2025-8713

CVE-2025-8714

CVE-2025-8715

CVE-2025-4207

postgresql-15.14-1.alnx4

openssl1.1

CVE-2022-4450

CVE-2023-0215

openssl1.1-1.1.1q-7.alnx4

openssh

CVE-2024-39894

CVE-2025-26466

CVE-2024-6387

openssh-9.6p1-3.alnx4

openjpeg2

CVE-2025-54874

CVE-2023-39327

CVE-2023-39328

openjpeg2-2.5.3-2.alnx4

nginx

CVE-2025-53859

CVE-2025-23419

nginx-1.26.2-3.alnx4

libxml2

CVE-2025-49795

CVE-2025-49794

CVE-2025-49796

CVE-2025-6170

CVE-2025-7425

CVE-2025-24928

CVE-2025-6021

libxml2-2.11.5-15.alnx4

libssh2

CVE-2023-48795

libssh2-1.11.0-3.alnx4

libssh

CVE-2025-5351

CVE-2025-5372

CVE-2025-5987

CVE-2025-5318

libssh-0.10.5-10.alnx4

krb5

CVE-2025-24528

krb5-1.21.2-5.alnx4

jupyterlab

CVE-2024-43805

jupyterlab-4.3.2-1.alnx4

httpd

CVE-2024-43204

CVE-2024-47252

CVE-2025-49630

CVE-2025-53020

CVE-2024-42516

CVE-2025-49812

httpd-2.4.64-1.alnx4

firefox

CVE-2025-9179

CVE-2025-9180

CVE-2025-9181

CVE-2025-9185

CVE-2025-0247

CVE-2025-1943

CVE-2025-4918

CVE-2025-5283

CVE-2025-6965

CVE-2025-8027

CVE-2025-8028

CVE-2025-8034

CVE-2025-8035

firefox-140.3.0-1.alnx4

expat

CVE-2024-8176

CVE-2024-28757

CVE-2024-45490

CVE-2024-45491

CVE-2024-45492

CVE-2024-50602

expat-2.5.0-6.alnx4

aide

CVE-2025-54389

aide-0.19.2-1.alnx4

NetworkManager

CVE-2024-3661

CVE-2024-6501

NetworkManager-1.44.2-4.alnx4

yasm

CVE-2023-31975

CVE-2024-22653

yasm-1.3.0-11.alnx4

xorg-x11-server-Xwayland

CVE-2025-49175

CVE-2025-49176

CVE-2025-49177

CVE-2025-49178

CVE-2025-49179

CVE-2025-49180

xorg-x11-server-Xwayland-23.2.5-4.alnx4

xorg-x11-server

CVE-2025-49175

CVE-2025-49176

CVE-2025-49178

CVE-2025-49179

CVE-2025-49180

xorg-x11-server-1.20.14-15.alnx4

unbound

CVE-2024-43167

unbound-1.17.1-7.alnx4

tomcat

CVE-2025-52434

CVE-2025-52520

CVE-2025-53506

CVE-2025-46701

CVE-2025-48988

CVE-2025-49125

tomcat-9.0.107-1.alnx4

sqlite

CVE-2025-6965

sqlite-3.42.0-5.alnx4

ruby

CVE-2025-25186

CVE-2025-27219

CVE-2025-27221

ruby-3.3.9-5.alnx4

python3.11

CVE-2023-27043

CVE-2024-0397

CVE-2024-0450

CVE-2024-3219

CVE-2024-4032

CVE-2024-6232

CVE-2024-6923

CVE-2024-7592

CVE-2024-8088

CVE-2024-9287

CVE-2025-4516

CVE-2025-4517

CVE-2025-6069

CVE-2025-8194

python3.11-3.11.6-9.alnx4

python-virtualenv

CVE-2024-53899

python-virtualenv-20.28.0-1.alnx4

python-setuptools

CVE-2024-6345

CVE-2025-47273

python-setuptools-68.0.0-3.alnx4

python-black

CVE-2024-21503

python-black-24.3.0-1.alnx4

protobuf

CVE-2025-4565

protobuf-3.19.6-7.alnx4

polkit

CVE-2025-7519

polkit-123-2.alnx4

php

CVE-2025-1735

CVE-2025-6491

CVE-2024-11235

php-8.3.19-2.alnx4

perl

CVE-2025-40909

CVE-2024-56406

perl-5.36.3-18.alnx4

nodejs

CVE-2025-23084

nodejs-22.16.0-1.alnx4

ncurses

CVE-2025-6141

ncurses-6.4-5.20240127.alnx4

mercurial

CVE-2025-2361

mercurial-6.9.4-1.alnx4

libtiff

CVE-2025-8534

libtiff-4.7.1-1.alnx4

libsoup

CVE-2025-32052

CVE-2025-4476

CVE-2025-46421

CVE-2025-4948

libsoup-2.74.3-18.alnx4

libpq

CVE-2025-4207

libpq-15.13-1.alnx4

libarchive

CVE-2025-5916

CVE-2025-5917

CVE-2025-5918

CVE-2025-5914

CVE-2025-5915

libarchive-3.7.1-8.alnx4

keepalived

CVE-2024-41184

keepalived-2.3.2-1.alnx4

iputils

CVE-2025-47268

CVE-2025-48964

iputils-20221126-3.alnx4

iperf3

CVE-2025-54349

CVE-2025-54350

iperf3-3.19.1-1.alnx4

gstreamer1-plugins-bad-free

CVE-2025-3887

CVE-2025-6663

gstreamer1-plugins-bad-free-1.26.4-1.alnx4

gstreamer1

CVE-2025-6663

gstreamer1-1.26.4-1.alnx4

gnome-remote-desktop

CVE-2025-5024

gnome-remote-desktop-47.3-2.alnx4

gnome-control-center

CVE-2023-5616

gnome-control-center-47.3-1.alnx4

glibc

CVE-2025-8058

glibc-2.38-13.alnx4

glib2

CVE-2024-34397

CVE-2025-4056

CVE-2025-6052

glib2-2.78.3-8.alnx4

edk2

CVE-2024-38797

CVE-2024-1298

CVE-2024-38796

edk2-202402-19.alnx4

dpkg

CVE-2025-6297

dpkg-1.22.21-1.alnx4

djvulibre

CVE-2025-53367

djvulibre-3.5.28-4.alnx4

dav1d

CVE-2024-1580

dav1d-1.4.0-1.alnx4

coreutils

CVE-2024-0684

CVE-2025-5278

coreutils-9.4-6.alnx4

containerd

CVE-2024-40635

containerd-1.6.38-1.alnx4

ceph

CVE-2025-52555

ceph-18.2.1-5.alnx4

binutils

CVE-2024-53589

CVE-2025-3198

CVE-2025-5244

CVE-2025-5245

CVE-2025-7545

CVE-2025-7546

binutils-2.41-12.alnx4

augeas

CVE-2025-2588

augeas-1.14.2-2.alnx4

python-requests

CVE-2024-47081

python-requests-2.32.3-2.alnx4

fish

CVE-2023-49284

fish-3.6.0-3.alnx4

git

CVE-2024-52005

CVE-2025-48384

CVE-2025-48385

CVE-2025-48386

git-2.47.3-1.alnx4

jq

CVE-2025-49014

jq-1.8.1-1.alnx4

vim

CVE-2024-43374

CVE-2024-43802

vim-9.0.2092-8.alnx4

sudo

CVE-2025-32462

CVE-2025-32463

sudo-1.9.15p5-3.alnx4

perl-Module-ScanDeps

CVE-2024-10224

perl-Module-ScanDeps-1.31-3.alnx4

exiv2

CVE-2025-26623

exiv2-0.28.7-1.alnx4

apache-commons-io

CVE-2024-47554

apache-commons-io-2.16.1-1.alnx4

taglib

CVE-2023-47466

taglib-1.13-2.alnx4

iniparser

CVE-2025-0633

iniparser-4.1-6.alnx4

ppp

CVE-2024-58250

ppp-2.5.2-1.alnx4

transfig

CVE-2025-31162

CVE-2025-31163

CVE-2025-31164

CVE-2025-46397

CVE-2025-46398

CVE-2025-46399

transfig-3.2.9-3.alnx4

net-tools

CVE-2025-46836

net-tools-2.10-4.alnx4

yelp

CVE-2025-3155

yelp-42.2-5.alnx4

perl-Mojolicious

CVE-2024-58134

perl-Mojolicious-9.40-1.alnx4

**Bug fixes**

-   Fixed errors returned by the `mvn` command after Maven was installed.
    
-   Resolved warnings in the environment log about a missing `pam_fprintd.so` file.
    
-   Corrected an inconsistency between the `lcov` package version reported by `rpm -qi` and the actual version.
    
-   Fixed an issue that prevented `cmdline` settings configured in `alinux-base-setup` from taking effect.
    
-   Fixed an incorrect time zone path in the `tzdata` package.
    
-   Addressed an installation failure of the `nvidia-driver` package.
    

**Known issues**

-   On `ebmhfr7.48xlarge` ECS instances, the `NetworkManager-wait-online` service fails to start during boot. This instance type includes a USB network device that increases the startup time for the `NetworkManager` service. As a result, the `NetworkManager-wait-online` service times out and fails to start. If you do not use the USB network device, you can configure `NetworkManager` not to manage `usb0`. To do this, edit the \``/etc/NetworkManager/conf.d/99-unmanaged-device.conf`\` file and add the following content:
    
    ```
    [device-usb0-unmanaged]
    match-device=interface-name:usb0
    managed=0
    ```
    
    After you edit the file, restart the `NetworkManager` service for the changes to take effect. `NetworkManager` will no longer manage the `usb0` device. Restart the system and verify that the `NetworkManager-wait-online` service starts normally.
    
-   After installing a desktop environment from an ISO, the Sharing Settings menu is missing.
    
    This issue occurs because `gnome-control-center` version 47 changed the settings interface. The Sharing Settings menu now requires `gnome-remote-desktop` to enable the Remote Desktop Protocol. This feature is not supported in the current version but will be added in a future release.
    
-   After installing a desktop environment from an ISO, setting the time zone to Automatic in Date & Time Settings fails to disable manual region selection.
    
-   After installing a desktop environment from an ISO, changing the user avatar in User Settings has no effect.
    
-   After installing a desktop environment from an ISO on the x86 architecture, changing the Display Orientation in Display Settings fails.
    

### **Alibaba Cloud Linux 4.0**

**Version number**

**Image ID**

**Release date**

**Release details**

Alibaba Cloud Linux 4.0

aliyun\_4\_x64\_20G\_alibase\_20250728.vhd

2025-07-28

-   Initial release of the `Alibaba Cloud Linux 4 LTS 64-bit` x86 base image.
    
-   Kernel version: `kernel-6.6.88-4.2.alnx4`
    
-   See [Updates](#5cf0dc9689r1o) for details.
    

### **Updates**

**Security updates**

**Package name**

**CVE ID**

**Updated version**

udisks2

libblockdev

CVE-2025-6019

udisks2-2.10.90-2.alnx4

python-tornado

CVE-2025-47287

python-tornado-6.4.2-2.alnx4

libsoup

CVE-2025-2784

CVE-2025-46420

CVE-2025-32914

CVE-2025-32913

CVE-2025-32912

CVE-2025-32911

CVE-2025-32910

CVE-2025-32909

CVE-2025-32907

CVE-2025-32906

CVE-2025-32053

CVE-2025-32050

CVE-2025-32049

libsoup-2.74.3-14.alnx4

xz

CVE-2025-31115

xz-5.4.7-3.alnx4

python-jinja2

CVE-2025-27516

CVE-2024-34064

python-jinja2-3.1.3-4.alnx4

wireshark

CVE-2025-1492

wireshark-4.4.2-3.alnx4

emacs

CVE-2025-1244

CVE-2024-53920

emacs-29.4-5.alnx4

curl

CVE-2025-0725

CVE-2025-0665

CVE-2025-0167

CVE-2024-11053

CVE-2024-9681

CVE-2024-8096

CVE-2024-7264

CVE-2024-2398

CVE-2024-2004

CVE-2023-46218

CVE-2023-46219

curl-8.4.0-11.alnx4

openssl

CVE-2024-13176

CVE-2024-9143

CVE-2024-6119

CVE-2024-4741

CVE-2024-4603

CVE-2024-2511

CVE-2024-0727

CVE-2023-6237

CVE-2023-6129

CVE-2023-5678

openssl-3.0.12-13.alnx4

docker

CVE-2024-41110

CVE-2024-36623

docker-24.0.9-6.alnx4

libxml2

CVE-2025-49794

CVE-2025-49796

CVE-2025-32415

CVE-2025-32414

CVE-2025-27113

CVE-2025-24928

CVE-2025-7425

CVE-2025-6170

CVE-2025-6021

CVE-2024-56171

CVE-2024-40896

CVE-2024-34459

CVE-2024-25062

libxml2-2.11.5-11.alnx4

krb5

CVE-2024-37371

CVE-2024-37370

CVE-2024-26462

CVE-2024-26461

CVE-2024-26458

krb5-1.21.2-4.alnx4

libcdio

CVE-2024-36600

libcdio-2.1.0-2.alnx4

unbound

CVE-2024-43168

CVE-2024-33655

CVE-2024-8508

CVE-2023-50868

CVE-2023-50387

unbound-1.17.1-6.alnx4

kubernetes

CVE-2024-10220

CVE-2024-3177

kubernetes-1.27.8-4.alnx4

libtiff

CVE-2024-7006

CVE-2023-52356

CVE-2023-52355

libtiff-4.6.0-2.alnx4

libsass

CVE-2022-43358

libsass-3.6.4-2.alnx4

uboot-tools

CVE-2022-34835

CVE-2022-33967

CVE-2022-2347

uboot-tools-2022.04-5.alnx4

djvulibre

CVE-2021-46312

CVE-2021-46310

CVE-2021-32493

CVE-2021-32491

CVE-2021-32490

djvulibre-3.5.28-3.alnx4

**Important updates**

#### **Kernel**

This release is based on the long-term support (LTS) Linux kernel 6.6. The kernel version is `kernel-6.6.88-4.2.alnx4.x86_64`.

-   Scheduling
    
    -   Adds the `sched_ext` feature.
        
    -   Adds the jbd2 lock handoff feature.
        
    -   Improved EEVDF stability.
        
-   Memory
    
    -   Adds the fast Out-of-Memory (OOM) feature.
        
    -   Adds the page table page reclaim feature.
        
    -   Adds the slab lockless shrink feature to improve the concurrent performance of slab shrinkers.
        
    -   Adds the async fork feature to optimize the performance of the `fork` system call.
        
    -   Adds the `duptext` feature, with an extension for large folio support.
        
    -   The `mmap()` system call supports the THP align feature to increase the success rate of Transparent Huge Pages (THP) allocations.
        
-   Network
    
    -   Maintains compatibility with numerous features from earlier 5.10-based kernels, including eRDMA support, SMCv2 support, CQ optimization, sysctl optimizations, various stability fixes, the Write-with-Imm feature, link/lgr count optimization, packet capture, and memory watermark limits.
        
    -   Adds support for the `virtio-net` XDP zerocopy feature.
        
-   BPF
    
    -   Supports creating bpf timers with `BPF_F_TIMER_CPU_PIN`.
        
    -   Supports `__nullable` configuration for `struct_ops` input parameters.
        
    -   Allows `bpf skel` to directly access members of `struct_ops` maps.
        
    -   Supports calling subroutines while holding a `spinlock` or `rculock`.
        
    -   Supports bits iterators.
        
-   Storage
    
    -   Adds the experimental `ext4` large folio feature. This feature significantly improves buffered I/O performance. It is marked as EXPERIMENTAL and is not enabled by default. To use this feature, enable it with the `-o buffered_iomap` option.
        
    -   Addresses an issue with d2c latency statistics. Due to upstream changes, the `QUEUE_FLAG_STATS` flag is no longer set by default, which disables d2c latency statistics. Because calling `ktime_get_ns()` can degrade performance on high-speed devices, a new `sysfs` interface is now available to toggle this feature.
        
-   Driver
    
    -   The NVMe driver supports the Reservation and Cloud Disk activation features.
        
    -   Upgrades the `hct` driver module to support HCT version 2.1.
        

#### **Userspace components**

-   Core component updates
    
    -   GCC toolchain: 12.3.0
        
    -   binutils: 2.41
        
    -   systemd: 255
        
    -   grub2: 2.12
        
    -   glibc: 2.38
        
    -   util-linux: 2.39
        
    -   LLVM: 17.0.6 (default). An `llvm18` compatibility package is also available in the `devel` repository.
        
    -   OpenSSH: 9.6p1
        
    -   Python: 3.11.6
        
    -   Glib2: 2.78.3
        
    -   OpenSSL: 3.0.12 (default)
        
-   Common application component updates
    
    -   QEMU: 8.2.0 (default)
        
    -   libvirt: 9.10.0 (default)
        
    -   MySQL: 8.0.42 (default)
        
    -   MariaDB: 10.6.22 (default)
        
    -   PostgreSQL: 15.12 (default)
        
    -   SQLite: 3.42.0
        
    -   Rust: 1.84
        
    -   Go: 1.24
        
    -   Nginx: 1.26
        
    -   Apache (httpd): 2.4.62
        
    -   BIND: 9.18.34
        
    -   PHP: 8.3.19
        
    -   RPM: 4.18
        
    -   DNF: 4.16
        
    -   xfsprogs: 6.6.0
        
    -   Docker: 24.0.9 (default). Podman is no longer supported.
        
    -   Kubernetes: 1.27.8
        
    -   Ruby: 3.3.7
        
    -   Samba: 4.19.5
        
    -   The `gcc-toolset-14` series of build tools is available. You must enable the `devel` repository to use them.
        
-   Core configuration changes
    
    -   Alibaba Cloud Linux 4 enables `cgroup v2` by default. To switch to `cgroup v1`, see [How to switch to cgroup v1 in Alibaba Cloud Linux 4](/help/en/alinux/support/how-to-switch-to-cgroup-v1-in-alibaba-cloud-linux-4).
        
    -   The system disk in Alibaba Cloud Linux 4 uses the xfs file system by default. Due to features in this newer version of xfs, systems with older kernels cannot read the disk's content.
        
-   Notes
    
    -   The current kernel version does not support Group Identity co-location technology.
