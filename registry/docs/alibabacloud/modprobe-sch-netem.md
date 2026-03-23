To simulate complex network conditions, such as network latency or packet loss, on Alibaba Cloud Linux 3, the kernel requires the `sch_netem` module. This article shows how to fix the missing `sch_netem` module on systems with kernel versions older than `5.10.134-16`.

**Note**

The `sch_netem` module is a Linux kernel module for network emulation. It simulates network latency and packet loss for tasks like network performance testing and Quality of Service (QoS) configuration.

## **Problem description**

When you try to load the `sch_netem` module, the system returns an error similar to the following:

```
# modprobe sch_netem
modprobe: FATAL: Module sch_netem not found in directory /lib/modules/5.10.134-14.al8.x86_64
```

## **Cause**

In Alibaba Cloud Linux 3, kernel modules are split into multiple RPM packages, such as `kernel-core`, `kernel-modules`, `kernel-modules-extra`, and `kernel-modules-internal`. The `sch_netem` module is in the `kernel-modules-extra` package. By default, an image build or kernel installation includes only the `kernel-core` and `kernel-modules` packages. Consequently, the system cannot find the `sch_netem` module.

## **Solution**

This issue is resolved in kernel version `5.10.134-16`. To check your current kernel version, run the `uname -r` command.

If you encounter this issue on an earlier kernel version, run the following command to install the `sch_netem` kernel module.

```
sudo yum install -y kernel-modules-extra-<Kernel version>
```

**Note**

The `kernel-modules-internal` package contains other optional modules. To prevent similar issues, you can also install this package:

```
sudo yum install -y kernel-modules-internal-<Kernel version>
```
