When you need multiple nodes to concurrently read and write to the same cloud disk to achieve efficient data sharing and fast failover, you can use the multi-attach feature to attach a single ESSD, ESSD AutoPL, or other types of cloud disks to multiple nodes that support the NVMe protocol in the same zone, or attach a single zone-redundant storage ESSD to multiple nodes in the same region. This topic demonstrates how to use the NVMe cloud disk multi-attach and Reservation features in an ACK cluster.

## Before you begin

To better use the NVMe cloud disk multi-attach and Reservation features, we recommend that you understand the following information before reading this document:

-   For information about the NVMe protocol, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
    
-   For information about the cloud disk multi-attach feature and its limits, see [Cloud disk multi-attach feature](/help/en/ecs/user-guide/enable-multi-attach).
    

## Scenarios

The multi-attach feature is suitable for the following scenarios:

-   **Data sharing**
    
    Data sharing is the simplest use scenario of NVMe. After data is written to a shared NVMe disk from one attachment node, all other attachment nodes can access the data. This reduces storage costs and improves read/write performance. For example, a single NVMe-capable container image in the cloud can be read and loaded by multiple instances that run the same operating system.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6484151571/CAEQLBiBgIChg9rkihkiIGIyOWFiMDQzYWVhZDRjZjBiZGU2NjFkNWI4NTUzNmY03963382_20230830144006.372.svg)
    
-   **High-availability failover**
    
    High service availability is one of the most common application scenarios of shared disks. Traditional SAN-based databases, such as Oracle Real Application Clusters (RAC), SAP High-performance ANalytic Appliance (HANA), and cloud-native high-availability databases, may encounter single points of failure (SPOFs) in actual business scenarios. Shared NVMe disks can be used to ensure business continuity and high availability in terms of cloud-based storage and networks in case of SPOFs. Compute nodes encounter frequent outages, downtime, and hardware failures. To achieve high availability of compute nodes, you can deploy business in primary/secondary mode.
    
    For example, in a database scenario, if the primary database fails, the secondary database quickly takes over to provide services. After the instance that hosts the primary database is switched to the instance that hosts the secondary database, you can run an NVMe Persistent Reservation (PR) command to revoke the write permissions on the faulty primary database. This helps prevent data from being written to the faulty primary database, which ensures data consistency. The following figure shows the failover process.
    
    **Note**
    
    PR is a part of the NVMe protocol that can precisely control read and write permissions on a cloud disk to ensure that the compute nodes can write data as expected. For more information, see [NVM Express Base Specification](https://nvmexpress.org/wp-content/uploads/NVM-Express-1_3c-2018.05.24-Ratified.pdf).
    
    1.  The primary database instance (Database Instance 1) fails, which causes the service to stop.
        
    2.  Run an NVMe PR command to prevent data from being written to Database Instance 1 and allow data to be written to the secondary database instance (Database Instance 2).
        
    3.  Restore Database Instance 2 to the same state as Database Instance 1 by using different methods such as log replay.
        
    4.  Database Instance 2 takes over as the primary database instance to provide services externally.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7484151571/CAEQORiBgMDd5pDyrhkiIDZhNzdiODFjNGVmMDRkYzFhZjFlZWQ4NjhlMTk0ZWM43963382_20230830144006.372.svg)
    
-   **Distributed data cache acceleration**
    
    Multi-attach-enabled cloud disks deliver high performance, IOPS, and throughput and can facilitate performance acceleration for storage systems with slow and medium speeds. For example, data lakes are commonly built on top of Object Storage Service (OSS). Each data lake can be simultaneously accessed by multiple clients. Data lakes deliver high sequential read throughput and high append write throughput, but have low sequential read/write throughput, high latency, and low random read/write performance. To greatly improve the access performance in scenarios such as data lakes, you can attach a high-speed, multi-attach-enabled cloud disk as a cache to compute nodes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7484151571/CAEQLBiBgID8hNrkihkiIDNlYzQyNTU1ZTYxNjQyYzRhMDhkMTUzYjdiNGUwNjFk3963382_20230830144006.372.svg)
    
-   **Machine learning**
    
    In machine learning scenarios, after a sample is labeled and written, the sample is split and distributed across multiple nodes to facilitate parallel distributed computing. The multi-attach feature allows each compute node to directly access shared storage resources without the need to frequently transmit data over the network. This reduces data transfer latency and accelerates the model training process. The combination of high performance and the multi-attach feature allows cloud disks to provide an efficient and flexible storage solution for machine learning scenarios, such as large-scale model training tasks that require high-speed data access and processing. The storage solution significantly improves the efficiency and effectiveness of the machine learning process.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7484151571/CAEQLBiBgMDwhdrkihkiIDE0NTJhNjc1NzAwZjQxZGI4NDI3MTVhNjFhNGFjZmNh3963382_20230830144006.372.svg)
    

## Limits

-   A single NVMe cloud disk can be attached to a maximum of 16 ECS instances in the same zone at the same time.
    
-   If you want to read and write to a cloud disk from multiple nodes at the same time, you must mount the cloud disk by using volumeDevices. This method mounts the cloud disk as a block device and does not support access through a file system.
    
-   For more information about the limits, see [Limits of the multi-attach feature](/help/en/ecs/user-guide/enable-multi-attach#section-0x9-psy-lmw).
    

## Preparations

-   An ACK managed cluster is created, and the Kubernetes version of the cluster is 1.20 or later. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
-   The csi-plugin and csi-provisioner components are installed, and the version of the components is v1.24.10-7ae4421-aliyun or later. For information about how to upgrade the csi-plugin and csi-provisioner components, see [Manage the csi-plugin and csi-provisioner components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#task-vgg-45s-vdb).
    
-   The cluster contains at least two nodes that are in the same zone and support the multi-attach feature. For information about the instance families that support the multi-attach feature, see [Limits of the multi-attach feature](/help/en/ecs/user-guide/enable-multi-attach#section-0x9-psy-lmw).
    
-   A business application that meets the following requirements is prepared and packaged into a container image for deployment in the ACK cluster:
    
    -   The application supports accessing data on the same cloud disk from multiple replicas at the same time.
        
    -   The application can ensure data consistency by using standard features such as NVMe Reservation.
        

## Billing description

The multi-attach feature does not incur additional fees. Resources that support the NVMe protocol are still billed based on their original billing methods. For more information about the billing of cloud disks, see [Elastic Block Storage volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/disk-volume-overview-3/#section-faz-0po-91a).

## **Application** example

This topic uses the source code and Dockerfile of the following application example. After the application is built, upload it to an image repository for deployment in the cluster. In this application example, multiple replicas jointly manage a lease, but only one replica holds the lease. If the replica cannot work properly, other replicas automatically take over the lease. Note the following when you write an application:

-   In the example, `O_DIRECT` is used to open the block device for read and write operations to prevent any cache from affecting the test.
    
-   In the example, [the simplified interface of Reservation provided by the Linux kernel](https://docs.kernel.org/block/pr.html) is used. You can also use one of the following methods to run Reservation-related commands. These methods require privileges.
    
    -   C code: `ioctl(fd, NVME_IOCTL_IO_CMD, &cmd);`
        
    -   Command line interface: `nvme-cli`
        
-   For more information about the NVMe Reservation feature, see [NVMe Specification](https://nvmexpress.org/specifications/).
    

**Expand to view the source code of the application example**

C

```
#define _GNU_SOURCE
#include <assert.h>
#include <errno.h>
#include <fcntl.h>
#include <linux/pr.h>
#include <signal.h>
#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ioctl.h>
#include <time.h>
#include <unistd.h>

const char *disk_device = "/dev/data-disk";
uint64_t magic = 0x4745D0C5CD9A2FA4;

void panic(const char *restrict format, ...) {
    va_list args;
    va_start(args, format);
    vfprintf(stderr, format, args);
    va_end(args);
    exit(EXIT_FAILURE);
}

struct lease {
    uint64_t magic;
    struct timespec acquire_time;
    char holder[64];
};

volatile bool shutdown = false;
void on_term(int signum) {
    shutdown = true;
}

struct lease *lease;
const size_t lease_alloc_size = 512;

void acquire_lease(int disk_fd) {
    int ret;

    struct pr_registration pr_reg = {
        .new_key = magic,
        .flags = PR_FL_IGNORE_KEY,
    };
    ret = ioctl(disk_fd, IOC_PR_REGISTER, &pr_reg);
    if (ret != 0)
        panic("failed to register (%d): %s\n", ret, strerror(errno));

    struct pr_preempt pr_pre = {
        .old_key = magic,
        .new_key = magic,
        .type  = PR_WRITE_EXCLUSIVE,
    };
    ret = ioctl(disk_fd, IOC_PR_PREEMPT, &pr_pre);
    if (ret != 0)
        panic("failed to preempt (%d): %s\n", ret, strerror(errno));

    // register again in case we preempted ourselves
    ret = ioctl(disk_fd, IOC_PR_REGISTER, &pr_reg);
    if (ret != 0)
        panic("failed to register (%d): %s\n", ret, strerror(errno));
    fprintf(stderr, "Register as key %lx\n", magic);


    struct pr_reservation pr_rev = {
        .key   = magic,
        .type  = PR_WRITE_EXCLUSIVE,
    };
    ret = ioctl(disk_fd, IOC_PR_RESERVE, &pr_rev);
    if (ret != 0)
        panic("failed to reserve (%d): %s\n", ret, strerror(errno));

    lease->magic = magic;
    gethostname(lease->holder, sizeof(lease->holder));

    while (!shutdown) {
        clock_gettime(CLOCK_MONOTONIC, &lease->acquire_time);
        ret = pwrite(disk_fd, lease, lease_alloc_size, 0);
        if (ret < 0)
            panic("failed to write lease: %s\n", strerror(errno));
        fprintf(stderr, "Refreshed lease\n");
        sleep(5);
    }
}

int timespec_compare(const struct timespec *a, const struct timespec *b) {
    if (a->tv_sec < b->tv_sec)
        return -1;
    if (a->tv_sec > b->tv_sec)
        return 1;
    if (a->tv_nsec < b->tv_nsec)
        return -1;
    if (a->tv_nsec > b->tv_nsec)
        return 1;
    return 0;
}

int main() {
    assert(lease_alloc_size >= sizeof(struct lease));
    lease = aligned_alloc(512, lease_alloc_size);
    if (lease == NULL)
        panic("failed to allocate memory\n");

    // char *reg_key_str = getenv("REG_KEY");
    // if (reg_key_str == NULL)
    //     panic("REG_KEY env not specified");

    // uint64_t reg_key = atoll(reg_key_str) | (magic << 32);
    // fprintf(stderr, "Will register as key %lx", reg_key);


    int disk_fd = open(disk_device, O_RDWR|O_DIRECT);
    if (disk_fd < 0)
        panic("failed to open disk: %s\n", strerror(errno));

    // setup signal handler
    struct sigaction sa = {
        .sa_handler = on_term,
    };
    sigaction(SIGTERM, &sa, NULL);
    sigaction(SIGINT, &sa, NULL);

    struct timespec last_active_local;
    struct timespec last_active_remote;

    int ret = pread(disk_fd, lease, lease_alloc_size, 0);
    if (ret < 0)
        panic("failed to read lease: %s\n", strerror(errno));

    if (lease->magic != magic) {
        // new disk, no lease
        acquire_lease(disk_fd);
    } else {
        // someone else has the lease
        while (!shutdown) {
            struct timespec now;
            clock_gettime(CLOCK_MONOTONIC, &now);
            if (timespec_compare(&lease->acquire_time, &last_active_remote)) {
                fprintf(stderr, "Remote %s refreshed lease\n", lease->holder);
                last_active_remote = lease->acquire_time;
                last_active_local = now;
            } else if (now.tv_sec - last_active_local.tv_sec > 20) {
                // remote is dead
                fprintf(stderr, "Remote is dead, preempting\n");
                acquire_lease(disk_fd);
                break;
            }
            sleep(5);
            int ret = pread(disk_fd, lease, lease_alloc_size, 0);
            if (ret < 0)
                panic("failed to read lease: %s\n", strerror(errno));
        }
    }

    close(disk_fd);
}
```

Bash

```
#!/bin/bash

set -e

DISK_DEVICE="/dev/data-disk"
MAGIC=0x4745D0C5CD9A2FA4

SHUTDOWN=0
trap "SHUTDOWN=1" SIGINT SIGTERM

function acquire_lease() {
    # racqa:
    # 0: aquire
    # 1: preempt

    # rtype:
    # 1: write exclusive

    nvme resv-register $DISK_DEVICE --iekey --nrkey=$MAGIC
    nvme resv-acquire $DISK_DEVICE --racqa=1 --rtype=1 --prkey=$MAGIC --crkey=$MAGIC
    # register again in case we preempted ourselves
    nvme resv-register $DISK_DEVICE --iekey --nrkey=$MAGIC
    nvme resv-acquire $DISK_DEVICE --racqa=0 --rtype=1 --prkey=$MAGIC --crkey=$MAGIC

    while [[ $SHUTDOWN -eq 0 ]]; do
        echo "$MAGIC $(date +%s) $HOSTNAME" | dd of=$DISK_DEVICE bs=512 count=1 oflag=direct status=none
        echo "Refreshed lease"
        sleep 5
    done
}

LEASE=$(dd if=$DISK_DEVICE bs=512 count=1 iflag=direct status=none)

if [[ $LEASE != $MAGIC* ]]; then
    # new disk, no lease
    acquire_lease
else
    last_active_remote=-1
    last_active_local=-1
    while [[ $SHUTDOWN -eq 0 ]]; do
        now=$(date +%s)
        read -r magic timestamp holder < <(echo $LEASE)
        if [ "$last_active_remote" != "$timestamp" ]; then
            echo "Remote $holder refreshed the lease"
            last_active_remote=$timestamp
            last_active_local=$now
        elif (($now - $last_active_local > 10)); then
            echo "Remote is dead, preempting"
            acquire_lease
            break
        fi
        sleep 5
        LEASE=$(dd if=$DISK_DEVICE bs=512 count=1 iflag=direct status=none)
    done
fi
```

The YAML file used for deployment in the following sections is only applicable to the C language version. When deploying the Bash version, you need to grant permissions to the container in the YAML:

```
securityContext:
  capabilities:
    add: ["SYS_ADMIN"]
```

**Expand to view the Dockerfile**

Dockerfile for the C language version:

```
# syntax=docker/dockerfile:1.4

FROM buildpack-deps:bookworm as builder

COPY lease.c /usr/src/nvme-resv/
RUN gcc -o /lease -O2 -Wall /usr/src/nvme-resv/lease.c

FROM debian:bookworm-slim

COPY --from=builder --link /lease /usr/local/bin/lease
ENTRYPOINT ["/usr/local/bin/lease"]
```

Dockerfile for the Bash version:

```
# syntax=docker/dockerfile:1.4
FROM debian:bookworm-slim

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources && \
    rm -f /etc/apt/apt.conf.d/docker-clean && \
    apt-get update && \
    apt-get install -y nvme-cli

COPY --link lease.sh /usr/local/bin/lease
ENTRYPOINT ["/usr/local/bin/lease"]
```

## **Step 1: Deploy the application and configure the multi-attach feature**

Create a StorageClass named alicloud-disk-shared and enable the multi-attach feature for cloud disks.

Create a PVC named data-disk and set `accessModes` to `ReadWriteMany` and `volumeMode` to `Block`.

Create a StatefulSet application named lease-test and use the image of the application example in this topic.

1.  Create a lease.yaml file with the following content.
    
    Replace the container image address in the following YAML with the actual image address of your application.
    
    **Important**
    
    -   Because NVMe Reservation takes effect at the node level, multiple pods on the same node may interfere with each other. Therefore, `podAntiAffinity` is used in this example to prevent multiple pods from being scheduled to the same node.
        
    -   If your cluster includes other nodes that do not use the NVMe protocol, you need to configure affinity to ensure that pods are scheduled to nodes that use the NVMe protocol.
        
    
    **Expand to view the lease.yaml file**
    
    ```
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alicloud-disk-shared
    parameters:
      type: cloud_essd # Currently supports cloud_essd, cloud_auto, and cloud_regional_disk_auto
      multiAttach: "true"
    provisioner: diskplugin.csi.alibabacloud.com
    reclaimPolicy: Delete
    volumeBindingMode: WaitForFirstConsumer
    ---
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: data-disk
    spec:
      accessModes: [ "ReadWriteMany" ]
      storageClassName: alicloud-disk-shared
      volumeMode: Block
      resources:
        requests:
          storage: 20Gi
    ---
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: lease-test
    spec:
      replicas: 2
      serviceName: lease-test
      selector:
        matchLabels:
          app: lease-test
      template:
        metadata:
          labels:
            app: lease-test
        spec:
          affinity:
            podAntiAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
              - labelSelector:
                  matchExpressions:
                  - key: app
                    operator: In
                    values:
                    - lease-test
                topologyKey: "kubernetes.io/hostname"
          containers:
          - name: lease
            image: <IMAGE OF APP>   # Replace with the image address of your application.
            volumeDevices:
            - name: data-disk
              devicePath: /dev/data-disk  
          volumes:
          - name: data-disk
            persistentVolumeClaim:
              claimName: data-disk
    ```
    
    **Parameter**
    
    **Configuration description for the multi-attach feature**
    
    **Configuration description for normal mounting**
    
    StorageClass
    
    parameters.multiAttach
    
    Set to true to enable the multi-attach feature for cloud disks.
    
    No configuration required
    
    PVC
    
    accessModes
    
    ReadWriteMany
    
    ReadWriteOnce
    
    volumeMode
    
    Block
    
    Filesystem
    
    Storage volume mounting method
    
    volumeDevices: Directly access data on the cloud disk through a block device.
    
    volumeMounts: Mainly used to mount volumes of the file system type.
    
2.  Run the following command to deploy the application:
    
    ```
    kubectl apply -f lease.yaml
    ```
    

## Step 2: Verify the multi-attach and Reservation effects

To ensure data consistency on the NVMe cloud disk, you can control read and write permissions through Reservation in your application. If one pod performs a write operation, other pods can only perform read operations.

### Multiple nodes can read and write to the same cloud disk

Run the following command to view the pod logs:

```
kubectl logs -l app=lease-test --prefix -f
```

Expected results:

```
[pod/lease-test-0/lease] Register as key 4745d0c5cd9a2fa4
[pod/lease-test-0/lease] Refreshed lease
[pod/lease-test-0/lease] Refreshed lease
[pod/lease-test-1/lease] Remote lease-test-0 refreshed lease
[pod/lease-test-0/lease] Refreshed lease
[pod/lease-test-1/lease] Remote lease-test-0 refreshed lease
[pod/lease-test-0/lease] Refreshed lease
[pod/lease-test-1/lease] Remote lease-test-0 refreshed lease
[pod/lease-test-0/lease] Refreshed lease
[pod/lease-test-1/lease] Remote lease-test-0 refreshed lease
```

The expected results indicate that Pod lease-test-1 can immediately read the content written by Pod lease-test-0.

### NVMe Reservation is created successfully

1.  Run the following command to obtain the cloud disk ID:
    
    ```
    kubectl get pvc data-disk -ojsonpath='{.spec.volumeName}'
    ```
    
2.  Log on to either of the two nodes and run the following command to check whether NVMe Reservation is created successfully:
    
    Replace `2zxxxxxxxxxxx` in the following code with the content after `d-` in the cloud disk ID that you obtained in the previous step.
    
    ```
    nvme resv-report -c 1 /dev/disk/by-id/nvme-Alibaba_Cloud_Elastic_Block_Storage_2zxxxxxxxxxxx
    ```
    
    Expected results:
    
    ```
    NVME Reservation status:
    
    gen       : 3
    rtype     : 1
    regctl    : 1
    ptpls     : 1
    regctlext[0] :
      cntlid     : ffff
      rcsts      : 1
      rkey       : 4745d0c5cd9a2fa4
      hostid     : 4297c540000daf4a4*****
    ```
    
    The expected results indicate that NVMe Reservation is created successfully.
    

### Reservation can block write I/O operations from abnormal nodes

1.  Log on to the node where Pod lease-test-0 is located and run the following command to pause the process to simulate a failure scenario:
    
    ```
    pkill -STOP -f /usr/local/bin/lease
    ```
    
2.  Wait for 30 seconds and then run the following command to view the logs again:
    
    ```
    kubectl logs -l app=lease-test --prefix -f
    ```
    
    Expected results:
    
    ```
    [pod/lease-test-1/lease] Remote lease-test-0 refreshed lease
    [pod/lease-test-1/lease] Remote is dead, preempting
    [pod/lease-test-1/lease] Register as key 4745d0c5cd9a2fa4
    [pod/lease-test-1/lease] Refreshed lease
    [pod/lease-test-1/lease] Refreshed lease
    [pod/lease-test-1/lease] Refreshed lease
    ```
    
    The expected results indicate that Pod lease-test-1 has taken over and holds the lease as the primary node of the service.
    
3.  Log on to the node where Pod lease-test-0 is located again and run the following command to resume the paused process:
    
    ```
    pkill -CONT -f /usr/local/bin/lease
    ```
    
4.  Run the following command to view the logs again:
    
    ```
    kubectl logs -l app=lease-test --prefix -f
    ```
    
    Expected results:
    
    ```
    [pod/lease-test-0/lease] failed to write lease: Invalid exchange
    ```
    
    The expected results indicate that Pod lease-test-0 can no longer write to the cloud disk, and the lease container automatically restarts. This indicates that the write I/O operation has been successfully blocked by Reservation.
    

## References

If your NVMe cloud disk does not have enough space or is full, see [Expand a cloud disk volume](/help/en/doc-detail/469979.html).
