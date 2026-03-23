By default, Alibaba Cloud Linux enables mitigations for CPU vulnerabilities, which can affect system performance. This document explains how to disable these mitigations if the performance impact is a concern for your workload. It covers specific CPU vulnerabilities, how to check their status using vulnerability status files, and how to disable the mitigations.

## **Background information**

In January 2018, [Google Project Zero](https://github.com/googleprojectzero) disclosed the [Spectre](https://spectreattack.com/spectre.pdf) and [Meltdown](https://meltdownattack.com/meltdown.pdf) security vulnerabilities that affect modern processors. Attackers may exploit these vulnerabilities to steal privileged data, posing a severe threat to system security. These vulnerabilities affect most modern processors, including Intel, AMD, and ARM architectures, and have been widely discussed since their disclosure. Alibaba Cloud products are also affected by these vulnerabilities. In response, operating systems like Linux implemented software mitigations. Since the initial disclosure, new variants have emerged, and these vulnerabilities are expected to be a persistent issue.

**Important**

-   These vulnerabilities exploit hardware features like Speculative Execution and Out-of-order Execution, essential for modern processor performance. As a result, mitigating these vulnerabilities can cause performance degradation.
    
-   Software mitigations can usually only reduce the risk of exploitation. They do not fix the underlying hardware vulnerability.
    

## **Vulnerabilities**

This section details the security vulnerabilities in Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 and explains how to disable the software mitigations using the boot command line.

## Alibaba Cloud Linux 3

### **x86**

**CVE**

**Path to the mitigation status file****①**

**Default handling method**

**Method for disabling mitigations**

[Spectre Variant 1 (Bounds Check Bypass)](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-1)

/sys/devices/system/cpu/vulnerabilities/spectre\_v1

Mitigation enabled by default

Mitigations are force enabled and cannot be disabled.

[Spectre Variant 1 (swapgs)](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-1-swapgs)

/sys/devices/system/cpu/vulnerabilities/spectre\_v1

Mitigation enabled by default

Add the `nospectre_v1` parameter.

[Spectre Variant 2](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-2)

/sys/devices/system/cpu/vulnerabilities/spectre\_v2

Mitigation enabled by default

Add the `nospectre_v2` parameter.

[Spectre Variant 4 (Speculative Store Bypass)](https://www.intel.com/content/www/us/en/developer/topic-technology/software-security-guidance/overview.html)

/sys/devices/system/cpu/vulnerabilities/spec\_store\_bypass

The kernel automatically enables mitigation based on hardware features.

Add one of the following parameters:

-   `nospec_store_bypass_disable`
    
-   `spec_store_bypass_disable=off`
    

[Meltdown](https://meltdownattack.com/meltdown.pdf?file=meltdown.pdf)

/sys/devices/system/cpu/vulnerabilities/meltdown

Mitigation enabled by default

Add one of the following parameters:

-   `pti=off`
    
-   `nopti`
    

[L1TF](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/l1tf.html#l1tf-l1-terminal-fault)

/sys/devices/system/cpu/vulnerabilities/l1tf

Mitigation enabled by default

Add the `l1tf=off` parameter.

[MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html#mds-microarchitectural-data-sampling)

/sys/devices/system/cpu/vulnerabilities/mds

Mitigation enabled by default

Add the following parameters:

-   `mds=off`
    
-   `tsx_async_abort=off`
    

[SRBDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/special-register-buffer-data-sampling.html)

/sys/devices/system/cpu/vulnerabilities/srbds

Mitigated by processor microcode by default

Add the `srbds=off` parameter.

[MMIO Stale Data](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/processor_mmio_stale_data.html)

/sys/devices/system/cpu/vulnerabilities/mmio\_stale\_data

Mitigation enabled by default

Add the following parameters:

-   `mmio_stale_data=off`
    
    **Note**
    
    Supported only in kernel version `5.10.134-12` and later.
    
-   `mds=off`
    
-   `tsx_async_abort=off`
    

[TAA](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/tsx_async_abort.html)

/sys/devices/system/cpu/vulnerabilities/tsx\_async\_abort

Mitigation enabled by default

Add the following parameters:

-   `tsx_async_abort=off`
    
-   `mds=off`
    

[RETBleed](https://comsec.ethz.ch/research/microarch/retbleed/)

/sys/devices/system/cpu/vulnerabilities/retbleed

Mitigation enabled by default

Add the `retbleed=off` parameter.

**Note**

Supported only in kernel version `5.10.134-12` and later.

N/A

N/A

N/A

Add the `mitigations=off` parameter to disable all CPU vulnerability mitigations.

### **ARM64**

**CVE**

**Path to the mitigation status file****①**

**Default handling method**

**Method for disabling mitigations**

[Spectre Variant 1 (Bounds Check Bypass)](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-1)

/sys/devices/system/cpu/vulnerabilities/spectre\_v1

Mitigation enabled by default

Mitigations are force enabled and cannot be disabled.

[Spectre Variant 2](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-2)

/sys/devices/system/cpu/vulnerabilities/spectre\_v2

Mitigation enabled by default

Add the `nospectre_v2` parameter. For more information, see the [Disable mitigations](#aab0bdc03be9y).

[Spectre Variant 2 (BHB)](https://developer.arm.com/Arm%20Security%20Center/Spectre-BHB)

/sys/devices/system/cpu/vulnerabilities/spectre\_v2

Mitigation enabled by default

Add the `nospectre_bhb` parameter.

**Note**

Supported only in kernel version `5.10.134-12` and later.

[Spectre Variant 4 (Speculative Store Bypass)](https://www.intel.com/content/www/us/en/developer/topic-technology/software-security-guidance/overview.html)

/sys/devices/system/cpu/vulnerabilities/spec\_store\_bypass

Mitigation enabled by default

Add the `ssbd=force-off` parameter.

[Meltdown](https://meltdownattack.com/meltdown.pdf?file=meltdown.pdf)

/sys/devices/system/cpu/vulnerabilities/meltdown

Mitigation enabled by default

Add the `kpti=0` parameter.

N/A

N/A

N/A

Add the `mitigations=off` parameter to disable all mitigations for CPU vulnerabilities.

## Alibaba Cloud Linux 2

**CVE**

**Path to the mitigation status file****①**

**Default handling method**

**Method for disabling mitigations**

[Spectre Variant 1 (Bounds Check Bypass)](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-1)

/sys/devices/system/cpu/vulnerabilities/spectre\_v1

Mitigation enabled by default

Mitigations are force enabled and cannot be disabled.

[Spectre Variant 1 (swapgs)](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-1-swapgs)

/sys/devices/system/cpu/vulnerabilities/spectre\_v1

Mitigation enabled by default

Add the nospectre\_v1=off parameter.

**Note**

Supported only in kernel version `4.19.57-15.al7` and later.

[Spectre Variant 2](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/spectre.html#spectre-variant-2)

/sys/devices/system/cpu/vulnerabilities/spectre\_v2

Mitigation enabled by default (spectre\_v2=auto)

Add one of the following parameters:

-   nospectre\_v2
    
-   spectre\_v2=off
    

**Note**

Supported only in kernel version `4.19.43-13.al7` and later.

[Spectre Variant 4 (Speculative Store Bypass)](https://www.intel.com/content/www/us/en/developer/topic-technology/software-security-guidance/overview.html)

/sys/devices/system/cpu/vulnerabilities/spec\_store\_bypass

Enabled if the processor supports `Speculative Store Bypass Disable`; otherwise, disabled.

(spec\_store\_bypass\_disable=auto)

Add one of the following parameters:

-   spec\_store\_bypass\_disable=off
    
-   nospec\_store\_bypass\_disable
    

**Note**

Supported only in kernel version `4.19.43-13.al7` and later.

[Meltdown](https://meltdownattack.com/meltdown.pdf?file=meltdown.pdf)

/sys/devices/system/cpu/vulnerabilities/meltdown

Mitigation enabled by default

Add one of the following parameters:

-   pti=off
    
-   nopti
    

**Note**

Supported only in kernel version `4.19.43-13.al7` and later.

[L1TF](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/l1tf.html#l1tf-l1-terminal-fault)

/sys/devices/system/cpu/vulnerabilities/l1tf

Only `PTE Inversion` mitigation is enabled in the guest kernel.

Add the l1tf=off parameter.

**Note**

Supported only in kernel version `4.19.43-13.al7` and later.

[MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html#mds-microarchitectural-data-sampling)

/sys/devices/system/cpu/vulnerabilities/mds

Mitigation enabled by default

Add the mds=off parameter.

**Note**

Supported only in kernel version `4.19.43-13.al7` and later.

N/A

N/A

N/A

Add the `mitigations=off` parameter to disable all CPU vulnerability mitigations.

**Note**

**①** The vulnerability status file shows if the instance's CPU is vulnerable and which mitigation, if any, is active. The states are:

-   `Not affected`: The current CPU is not affected by this vulnerability.
    
-   `Vulnerable`: The CPU is affected, but no mitigation is active.
    
-   `Mitigation`: The CPU is affected, and a software mitigation is active.
    

## **Disable mitigations**

The following example shows how to disable the `spectre_v2` mitigation in Alibaba Cloud Linux 3.

1.  Add the `nospectre_v2` parameter to the default kernel `boot cmdline`. This disables the security mitigation.
    
    ```
    sudo grubby --update-kernel=`sudo grubby --default-kernel` --args='nospectre_v2'
    ```
    
2.  Reboot the instance and apply the changes.
    
    **Warning**
    
    Rebooting an instance stops its services, which can interrupt business operations. Before proceeding, back up critical data and schedule the reboot for off-peak hours.
    
    ```
    sudo reboot
    ```
    
3.  Check the vulnerability status file and confirm that the mitigation is disabled.
    
    ```
    cd /sys/devices/system/cpu/vulnerabilities/
    for i in `ls`;do echo -n $i": ";cat $i;done
    ```
    
    The output `spectre_v2: Vulnerable`, shown below, confirms that the `spectre_v2` mitigation is disabled.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2451740071/p706920.png)
