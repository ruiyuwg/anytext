This topic describes the limits of CPFS for Lingjun file systems.

## File system limits

**Limit**

**Threshold**

**Notes**

Mount targets per file system

1

One VPC mount target per file system.

Subdirectory mounting

Supported

You can mount a subdirectory.

Maximum capacity

1 PiB

For larger (up to 20 PiB), [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

Maximum files or directories

10 billion

Grows with capacity.

Max nodes via VSC

4,000

Per file system.

Max path length

4,096 bytes

Linux VFS limit.

Max file name length

255 bytes

Max ECS instances per VPC mount target

6,000

500 ECS per 300 TiB. For more, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

## Mounting

CPFS for Lingjun can only be mounted from Platform for AI (PAI) (Lingjun resources, PAI general computing, or PAI Lingjun single-tenant) and Container Compute Service (ACS) (high-performance networking GPU workloads). ECS instances are not supported.

## Supported OS

**OS**

**Distribution**

**Kernel version**

Alibaba Cloud Linux

Alibaba Cloud Linux 3

5.10.134-13 or later

Ubuntu

Ubuntu 24.04

6.8.0-79 or later

## Protocol

Only POSIX is supported.

## Scaling

Scale-out only. Step: 10,240 GiB. Max: 1 PiB. For 20 PiB, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

## Dataflow

### Dataflow

-   Same account: CPFS for Lingjun 2.4.0 and later. Cross-account: 2.6.0 and later.
    
-   Max 10 dataflow per file system.
    
-   One file path maps to one OSS bucket.
    
-   Source and destination must be in the same region.
    

### Path and filename restrictions

**Supported**

**Not supported**

Letters, digits, `!`, `-`, `_`, `.`, `*`, `()`

`..`, `\`, `\\`, `/` in names, paths > 1023 chars

Do not rename non-empty directories in dataflow paths. Avoid special characters.

### Dataflow tasks

-   Supported in CPFS for Lingjun 2.6.0 and later. OpenAPI only.
    
-   Max 4 batch tasks per dataflow No limit on dataflow tasks.
    

### Import limits

-   Symlinks become regular files. Symlink info is lost.
    
-   Only latest object version is copied from OSS.
    
-   No file or directory names longer than 255 bytes.
    

### Export limits

-   Symlinks become empty OSS objects. Targets are not synced.
    
-   Hard links become regular files.
    
-   Socket, Device, and Pipe files become empty objects.
    
-   Directory paths > 1023 chars not supported.
    

## Fileset

**Important**

Fileset is whitelist-only. [Submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?product=learn) to request access.

### Fileset limits

**Limit**

**Threshold**

CPFS version

V2.7.0 and later

Filesets per file system

500 (default). Up to 3,000 via ticket.

Files/directories per fileset

10 billion

Nested filesets

Not supported

Hard links across filesets

Not supported

### Fileset path rules

-   Path must start and end with `/`.
    
-   Path must be new. Cannot modify existing paths.
    
-   Parent directory must exist for multi-layer paths.
    
-   Max depth: 8 layers (root = 0). Max path length: 990 chars.
    
-   Single-layer name: max 255 chars. Allowed: letters, digits, `_`, `.`, `-`.
    

### Fileset deletion

Delete via console or API. Storage is reclaimed after 24 hours. To free immediately, clear data first, then delete. Deleted data cannot be recovered.

### Fileset quota

**Limit**

**Description**

Version

CPFS Compute Edition 2.7.0 and later

Quotas per path

1

Capacity quota

Min 10 GiB, step 1 GiB

File count quota

Min 10,000, step 1, max 10 billion

When quota reached

No new writes

Statistics latency

~15 minutes

Modify quota

New value must exceed used capacity or file count

## Next steps

-   [Create a file system](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system)
    
-   [Product specifications](/help/en/cpfs/bmcpfs/product-overview/product-specifications)
    
-   [CPFS for Lingjun dataflow](/help/en/cpfs/bmcpfs/user-guide/cpfs-for-lingjun-data-flow-overview/)
