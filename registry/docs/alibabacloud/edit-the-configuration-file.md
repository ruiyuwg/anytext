Alibaba Cloud Linux 2 ships with pre-tuned system and kernel parameters optimized for cloud workloads. This topic covers how to view and modify these parameters, manage the kdump crash dump service, and install debugging, source code, and experimental software packages.

## System parameters

System parameters control runtime kernel behavior. Alibaba Cloud Linux 2 stores its default tuning in `/etc/sysctl.d/50-aliyun.conf`.

### Pre-configured system parameters

The following parameters are set in `/etc/sysctl.d/50-aliyun.conf`:

**Parameter**

**Value**

**Purpose**

`kernel.hung_task_timeout_secs`

`240`

Extends the hung\_task timeout to 240 seconds to prevent frequent false-positive hung\_task warnings

`kernel.panic_on_oops`

`1`

Triggers a kernel panic on an Oops error. If kdump is enabled, the system automatically captures failure details

`kernel.watchdog_thresh`

`50`

Sets watchdog thresholds for high resolution timer (hrtimer), non-maskable interrupt (NMI), soft lockup, and hard lockup events to reduce false positives

`kernel.hardlockup_panic`

`1`

Triggers a kernel panic on a hard lockup error. If kdump is enabled, the system automatically captures failure details

### View system parameters

To view all current values:

```
sysctl -a
```

To view a specific parameter:

```
sysctl kernel.hung_task_timeout_secs
```

### Modify a system parameter temporarily

Changes made with `sysctl` take effect immediately but revert after a reboot.

```
sudo sysctl kernel.hung_task_timeout_secs=300
```

Verify the change:

```
sysctl kernel.hung_task_timeout_secs
```

Expected output:

```
kernel.hung_task_timeout_secs = 300
```

### Modify a system parameter permanently

To persist a change across reboots, edit the configuration file and reload:

```
# Edit the configuration file
sudo vi /etc/sysctl.d/50-aliyun.conf

# Apply the changes without rebooting
sudo sysctl -p /etc/sysctl.d/50-aliyun.conf
```

**Important**

Modifying system parameters on a production instance requires careful planning. Incorrect values can cause kernel instability or require a reboot. Test changes in a non-production environment first.

## Kernel parameters

Kernel parameters are boot-time settings passed to the kernel during startup. Unlike system parameters, kernel parameters cannot be changed at runtime. A reboot is required to apply any changes.

To view the current kernel boot parameters:

```
cat /proc/cmdline
```

### Pre-configured kernel parameters

**Parameter**

**Purpose**

`crashkernel=0M-2G:0M,2G-8G:192M,8G-:256M`

Reserves memory for kdump based on total system memory: no reservation below 2 GiB, 192 MiB for 2--8 GiB, 256 MiB above 8 GiB

`cryptomgr.notests`

Disables crypto self-tests during boot to accelerate startup

`cgroup.memory=nokmem`

Disables kernel memory accounting in the memory cgroup to prevent potential kernel instability

`rcupdate.rcu_cpu_stall_timeout=300`

Extends the RCU CPU Stall Detector timeout to 300 seconds to reduce false positives

## Manage the kdump service

kdump is a kernel crash dump mechanism. When a kernel panic occurs, kdump uses kexec to boot into a reserved second kernel and capture the contents of system memory into a vmcore dump file. This dump file is critical for post-mortem analysis of kernel failures.

**Note** kdump requires more than 2 GiB of instance memory. If the instance type has 2 GiB or less, kdump is unavailable because the `crashkernel` parameter does not reserve memory for instances in that range.

### Enable kdump

```
# Enable the kdump service to start on boot
sudo systemctl enable kdump.service

# Start the kdump service
sudo systemctl restart kdump.service
```

Verify that kdump is running:

```
sudo systemctl status kdump.service
```

### Disable kdump

Disabling kdump involves three steps: release reserved memory, disable the service, and stop the service.

```
# Release the reserved crash kernel memory back to the operating system
sudo sh -c 'echo 0 > /sys/kernel/kexec_crash_size'

# Disable the kdump service so it does not start on boot
sudo systemctl disable kdump.service

# Stop the kdump service
sudo systemctl stop kdump.service
```

**Important**

After releasing crash kernel memory, reboot the system before re-enabling kdump. The memory reservation is a boot-time allocation that cannot be restored at runtime.

## Install Debuginfo and source code packages

### Install a Debuginfo package

Debuginfo packages contain symbol tables and source references needed for debugging with tools like gdb.

```
# Install yum-utils (provides the debuginfo-install command)
sudo yum install -y yum-utils

# Install the Debuginfo package for a specific package
sudo debuginfo-install -y <package-name>
```

Replace `<package-name>` with the target package name. For example, to install kernel debug symbols:

```
sudo debuginfo-install -y kernel
```

If `debuginfo-install` fails, enable all debug repositories manually:

```
sudo yum install --enablerepo=*-debug <package-name>
```

For example:

```
sudo yum install --enablerepo=*-debug kernel-debuginfo
```

### Install a source code package

```
# Enable the source code repository
sudo yum install -y alinux-release-source

# Install yum-utils (provides the yumdownloader command)
sudo yum install -y yum-utils

# Download the source RPM for a specific package
sudo yumdownloader --source <source-package-name>
```

Replace `<source-package-name>` with the target package name. For example:

```
sudo yumdownloader --source kernel
```

## Use experimental software packages

Experimental packages are provided by Alibaba Cloud but are not fully tested. Alibaba Cloud does not guarantee the quality of these packages. Evaluate them in a non-production environment before relying on them for production workloads.

### Regular experimental packages

Available packages:

-   `Golang 1.12`
    
-   `Golang 1.13`
    

Install a regular experimental package:

```
# Enable the experimental Yellowdog Updater Modified (YUM) repository
sudo yum install -y alinux-release-experimentals

# Install the package
sudo yum install -y <package-name>
```

### Software Collections (SCL) development kits

SCL packages provide newer versions of GNU Compiler Collection (GCC) and associated development tools without replacing the system default versions.

Available development kits:

**Development kit**

**GCC version**

devtoolset-7

GCC 7.3.1

devtoolset-8

GCC 8.2.1

devtoolset-9

GCC 9.1.1

Each kit includes `gcc`, `gdb`, `binutils`, and `make`.

Install SCL development kits:

```
# Install scl-utils
sudo yum install -y scl-utils

# Enable the experimental YUM repository
sudo yum install -y alinux-release-experimentals

# Install the development kits
# The following commands install all three kits. Install only the ones you need.
sudo yum install -y devtoolset-7-gcc devtoolset-7-gdb devtoolset-7-binutils devtoolset-7-make
sudo yum install -y devtoolset-8-gcc devtoolset-8-gdb devtoolset-8-binutils devtoolset-8-make
sudo yum install -y devtoolset-9-gcc devtoolset-9-gdb devtoolset-9-binutils devtoolset-9-make
```

### Use an SCL development kit

After installation, use `scl enable` to activate a development kit in a new shell session:

```
# Check installed components for a specific kit
scl -l devtoolset-7

# Run a command with the SCL environment activated
scl enable devtoolset-7 'gcc --version'
```

The `scl enable` command creates a sub-shell with the selected development kit on the PATH. Your system default GCC remains unchanged.
