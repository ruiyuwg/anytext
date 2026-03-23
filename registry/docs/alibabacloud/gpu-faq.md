This topic helps you troubleshoot and resolve issues with Elastic GPU Service by summarizing common issues encountered when using GPUs.

**Category**

**Related questions**

GPU-accelerated instance

-   [Do GPU-accelerated instances support Android emulators?](#section-gom-fhl-1i5)
    
-   [Can the configuration of a GPU-accelerated instance be changed?](#section-bye-de9-au0)
    
-   [Can a standard ECS instance family be upgraded or changed to a GPU-accelerated instance family?](#section-5ey-q0y-b93)
    
-   [How do I transfer data between a GPU-accelerated instance and a standard ECS instance?](#section-0hl-8x2-4z9)
    
-   [What is the difference between a GPU and a CPU?](#section-z5v-4ai-2kj)
    

GPU card

-   [After I purchase a GPU-accelerated instance, why can't the nvidia-smi command find the GPU card?](#section-eoc-gvi-l8l)
    
-   [How do I view the details of a GPU card?](#0615f86d4ambz)
    
-   [A GPU initialization failure (such as RmInitAdapter failed!) occurs when I use a GPU on Linux](#8979f286b5wvi)
    

GPU memory

-   [Why does an instance with 48 GB of GPU memory show about 3 GB less in nvidia-smi?](#e024adec61bfa)
    
-   [How do I disable the ECC feature to free up GPU memory?](#434ec33423mgq)
    
-   [What do I do if an error indicating a GPU is in use by another client occurs when I disable ECC?](#14acce90a6oh6)
    

GPU driver

-   [What driver do I need to install for a vGPU-accelerated instance?](#section-05p-qz0-r97)
    
-   [Can I upgrade CUDA to 12.4 or the NVIDIA driver to 550 or later on a vGPU-accelerated instance?](#acab924ac0zz0)
    
-   [What driver do I need to install to use tools such as OpenGL and Direct3D for graphics acceleration on a GPU-accelerated compute-optimized instance?](#section-fbx-q9k-t9a)
    
-   [Why is the CUDA version I see after installation different from the one I selected when creating the GPU-accelerated instance?](#ddf464a6ffl2g)
    
-   [After I install a GRID driver on a Windows GPU-accelerated instance, what do I do if a black screen appears when I use a VNC connection from the console?](#acc68af085h3t)
    
-   [How do I get a GRID License?](#641749ba65psi)
    
-   [How do I upgrade a GPU driver (Tesla or GRID)?](#85b9207ed6f9l)
    
-   [A system crash and a 'kernel NULL pointer dereference' error occur after you install NVIDIA driver version 570.124.xx (Linux) or 572.61 (Windows)](#3f0746e136nky)
    
-   [The nvidia-smi command returns a "No devices were found" error if you select NVIDIA Proprietary for the kernel module type during driver installation](#f1424fe383ibr)
    

GPU monitoring

[How do I view the resource usage (vCPU, network traffic, bandwidth, and disk) of a GPU-accelerated instance?](#section-bw6-p0r-k1l)

Others

[How do I install the cGPU service?](#section-ryp-bov-jse)

[The nvidia-smi -r command hangs after you install the cGPU service](#240cd05392gv4)

## **GPU-accelerated instances**

### **Do GPU-accelerated instances support Android emulators?**

Android emulators can be installed on only some GPU-accelerated instances.

Android emulators are supported only on the following GPU-accelerated compute-optimized ECS Bare Metal Instance families: ebmgn7e, ebmgn7i, ebmgn7, ebmgn6ia, ebmgn6e, ebmgn6v, ebmgn6i.

### **Can the configuration of a GPU-accelerated instance be changed?**

You can change the configuration of only some GPU-accelerated instances.

For more information about the instance types that support configuration changes, see [Instance type change restrictions and checks](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#concept-mdh-2rb-1fb).

### **Can a standard ECS instance family be upgraded or changed to a GPU-accelerated instance family?**

No, you cannot directly upgrade or change a standard ECS instance family to a GPU-accelerated instance family.

For more information about the instance types that support configuration changes, see [Instance type change restrictions and checks](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#concept-mdh-2rb-1fb).

### **How do I transfer data between a GPU-accelerated instance and a standard ECS instance?**

No special settings are required to transfer data.

A GPU-accelerated instance provides the same user experience as a standard ECS instance but with added GPU acceleration. By default, GPU-accelerated instances and ECS instances in the same security group can communicate over the internal network. No special configuration is required.

### **What is the difference between a GPU and a CPU?**

The following table compares GPUs and CPUs.

**Comparison**

**GPU**

**CPU**

Arithmetic Logic Unit (ALU)

Has many ALUs that excel at handling large-scale concurrent computations.

It has a small number of powerful Arithmetic Logic Units (ALUs).

Control unit

Has a relatively simple control unit.

Has a complex control unit.

Cache

Has a small cache that serves threads instead of storing accessed data.

Has large cache structures that can store data to improve access speed and reduce latency.

Response method

Integrates all tasks before batch processing.

Responds to individual tasks in real-time.

Scenarios

Suitable for compute-intensive, highly similar, and multi-threaded parallel high-throughput computing scenarios.

Suitable for logically complex serial computing scenarios that require fast response times.

## **GPU cards**

### **After I purchase a GPU-accelerated instance, why can't the** `**nvidia-smi**` **command find the GPU card?**

**Cause**: If the `nvidia-smi` command cannot find the GPU card, it is because the Tesla or GRID driver is not installed or the installation failed on your GPU-accelerated instance.

**Solution**: To use the high-performance features of your GPU-accelerated instance, you must install the correct driver for your instance type. The following instructions describe how to install the driver:

-   For a vGPU-accelerated instance, you must install a GRID driver. For more information, see:
    
    -   [Install a GRID driver on a vGPU-accelerated instance (Linux)](/help/en/egs/install-a-grid-driver-on-a-linux-vgpu-accelerated-instance#task-265413)
        
    -   [Install a GRID driver on a GPU-accelerated compute-optimized or vGPU-accelerated Windows instance](/help/en/egs/user-guide/install-a-grid-driver-on-a-gpu-accelerated-compute-optimized-windows-instance-or-a-vgpu-accelerated-windows-instance#task-2100730)
        
-   For a GPU-accelerated compute-optimized instance, you can install a Tesla or GRID driver. For more information, see:
    
    -   [Manually install a Tesla driver on a GPU-accelerated compute-optimized instance (Linux)](/help/en/egs/user-guide/install-a-gpu-driver-on-a-gpu-accelerated-compute-optimized-linux-instance#concept-ecy-qrz-wgb)
        
    -   [Manually install a Tesla driver on a GPU-accelerated compute-optimized instance (Windows)](/help/en/egs/user-guide/install-a-gpu-driver-on-a-gpu-accelerated-compute-optimized-windows-instance#task-2100724)
        
    -   [Install a GRID driver on a GPU-accelerated compute-optimized or vGPU-accelerated Windows instance](/help/en/egs/user-guide/install-a-grid-driver-on-a-gpu-accelerated-compute-optimized-windows-instance-or-a-vgpu-accelerated-windows-instance#task-2100730)
        

### **How do I view the details of a GPU card?**

The steps to view GPU card details vary by operating system. The following instructions describe how to view the details:

-   On Linux, you can run the `nvidia-smi` command to view the GPU card details.
    
-   On Windows, you can view the GPU card details in **Device Manager** > **Display Adapters**.
    

**Note**

To view information such as GPU idle rate, usage, temperature, and power, go to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/). For more information, see [GPU monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/gpu-monitoring#task-2085092).

### **A GPU initialization failure (such as RmInitAdapter failed!) occurs when I use a GPU on Linux**

-   **Symptoms:** The GPU device goes offline, and the system cannot detect the GPU card. For example, when you use a GPU on Linux, a GPU initialization failure error is reported. After you run the `sh nvidia-bug-report.sh` command, you can see the `RmInitAdapter failed` error message in the generated log, as shown in the following figure:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4288433671/p1026967.png)
    
-   **Cause:** The GPU System Processor (GSP) component may be in an abnormal state. This causes the device to go offline and the system to be unable to detect the GPU card.
    
-   **Solution:** [Restart the instance](/help/en/egs/user-guide/restart-instances) from the console. This action performs a complete GPU reset and usually resolves the issue. If the issue persists, see [GPU device loss due to XID 119/XID 120 errors when using a GPU](/help/en/egs/support/a-gpu-has-fallen-off-the-bus-due-to-an-xid-119-or-xid-120-error) for further troubleshooting. We recommend that you disable the GSP feature.
    

## **GPU memory**

### **Why does an instance with 48 GB of GPU memory show about 3 GB less in nvidia-smi?**

This occurs because the Error-Correcting Code (ECC) feature is enabled. ECC occupies a portion of the GPU memory. For an instance with 48 GB of memory, ECC uses approximately 2 GB to 3 GB. You can run the `nvidia-smi` command to check the ECC status. \`OFF\` indicates that ECC is disabled, and \`ON\` indicates that ECC is enabled.

### **How do I disable the ECC feature to free up GPU memory?**

1.  **Command line:** Stop all processes that use the GPU. Run `nvidia-smi -e 0` to disable ECC. Then, run `nvidia-smi -r` to reset the GPU.
    
2.  **Startup script:** Add `nvidia-smi -e 0` and `nvidia-smi -r` to the first line of the `/etc/rc.local` startup script. For some systems, the path is `/etc/rc.d/rc.local`. Then, [restart the instance](/help/en/egs/user-guide/restart-instances).
    

### **What do I do if an error indicating a GPU is in use by another client occurs when I disable ECC?**

This error indicates that a component or process is still using the GPU. Make sure no GPU processes are running on the machine. If you cannot stop them manually, create a snapshot backup. Then, add the `nvidia-smi -e 0` and `nvidia-smi -r` commands to the `/etc/rc.local` startup script. For some systems, the path is `/etc/rc.d/rc.local`. [Restart the instance](/help/en/egs/user-guide/restart-instances) for the changes to take effect.

## **GPU drivers**

### **What driver do I need to install for a vGPU-accelerated instance?**

vGPU-accelerated instances require a GRID driver.

For general-purpose computing or graphics acceleration scenarios, you can load the GRID driver when you create the GPU-accelerated instance, or install it using Cloud Assistant after creation. The following instructions describe how to install the driver:

-   Load the GRID driver when you create a new instance. For more information, see [Load a GRID driver from an image with a pre-installed driver](/help/en/egs/user-guide/use-an-alibaba-cloud-marketplace-image-with-a-pre-installed-driver-to-load-a-grid-driver).
    
-   Install the GRID driver using Cloud Assistant after you create the instance. For more information, see:
    
    -   [Install a GRID driver on a vGPU-accelerated instance (Linux)](/help/en/egs/user-guide/use-cloud-assistant-to-automatically-install-and-upgrade-grid-drivers)
        
    -   [Install a GRID driver on a GPU-accelerated compute-optimized or vGPU-accelerated Windows instance](/help/en/egs/user-guide/install-a-grid-driver-on-a-gpu-accelerated-compute-optimized-windows-instance-or-a-vgpu-accelerated-windows-instance)
        

### **Can I upgrade CUDA to 12.4 or the NVIDIA driver to 550 or later on a vGPU-accelerated instance?**

This is not supported.

vGPU-accelerated instances depend on the platform-provided GRID driver. The driver version is restricted, and you cannot install drivers from the official NVIDIA website. To upgrade, you must use a gn or ebm series GPU-accelerated instance.

### **What driver do I need to install to use tools such as OpenGL and Direct3D for graphics acceleration on a GPU-accelerated compute-optimized instance?**

Install the driver based on the operating system of your GPU-accelerated instance. The following instructions describe how to install the driver:

-   For a Linux GPU-accelerated compute-optimized instance, install a Tesla driver. For more information, see:
    
    -   [Automatically install or load a Tesla driver when you create a GPU-accelerated instance](/help/en/egs/user-guide/automatically-install-or-load-tesla-drivers-via-imgaes)
        
    -   [Manually install a Tesla driver on a GPU-accelerated compute-optimized instance (Linux)](/help/en/egs/user-guide/install-a-gpu-driver-on-a-gpu-accelerated-compute-optimized-linux-instance#concept-ecy-qrz-wgb)
        
-   For a Windows GPU-accelerated compute-optimized instance, install a GRID driver. For more information, see:
    
    -   [Load a GRID driver from an image with a pre-installed driver](/help/en/egs/user-guide/use-an-alibaba-cloud-marketplace-image-with-a-pre-installed-driver-to-load-a-grid-driver)
        
    -   [Install a GRID driver on a GPU-accelerated compute-optimized or vGPU-accelerated Windows instance](/help/en/egs/user-guide/install-a-grid-driver-on-a-gpu-accelerated-compute-optimized-windows-instance-or-a-vgpu-accelerated-windows-instance)
        

### **Why is the CUDA version I see after installation different from the one I selected when creating the GPU-accelerated instance?**

The CUDA version returned by the `nvidia-smi` command shows the highest CUDA version that your GPU-accelerated instance supports. It does not represent the CUDA version you selected when you created the instance.

### **After I install a GRID driver on a Windows GPU-accelerated instance, what do I do if a black screen appears when I use a VNC connection from the console?**

-   **Cause**: After you install a GRID driver on a Windows GPU-accelerated instance, the GRID driver takes control of the virtual machine's (VM) display output. VNC can no longer obtain the image from the integrated graphics. This causes a black screen, which is expected behavior.
    
-   **Solution**: Connect to the GPU-accelerated instance using Workbench. For more information, see [Connect to a Windows instance using Workbench](/help/en/egs/user-guide/connect-to-a-windows-instance-by-using-a-password-or-key#task-2370976).
    

### **How do I get a GRID License?**

The method to obtain a license depends on your operating system. The following instructions describe how to obtain a license:

-   To install the GRID driver on a GPU-accelerated instance that runs Windows, you can use a pre-installed driver image or install the driver manually.
    
    -   [Load a GRID driver from an image with a pre-installed driver](/help/en/egs/user-guide/use-an-alibaba-cloud-marketplace-image-with-a-pre-installed-driver-to-load-a-grid-driver)
        
    -   [Install a GRID driver on a GPU-accelerated compute-optimized or vGPU-accelerated Windows instance](/help/en/egs/user-guide/install-a-grid-driver-on-a-gpu-accelerated-compute-optimized-windows-instance-or-a-vgpu-accelerated-windows-instance#task-2100730)
        
-   To install a GRID driver on a Linux GPU-accelerated instance, you can obtain the license from a pre-installed driver image or using Cloud Assistant.
    
    -   [Load a GRID driver from an image with a pre-installed driver](/help/en/egs/user-guide/use-an-alibaba-cloud-marketplace-image-with-a-pre-installed-driver-to-load-a-grid-driver)
        
    -   [Install a GRID driver on a vGPU-accelerated instance (Linux)](/help/en/egs/install-a-grid-driver-on-a-linux-vgpu-accelerated-instance#task-265413)
        

### **How do I upgrade a GPU driver (Tesla or GRID)?**

You cannot directly upgrade a GPU driver (Tesla or GRID). You must first uninstall the old version, restart the system, and then install the new version. For more information, see [Upgrade a Tesla or GRID driver](/help/en/egs/user-guide/upgrade-and-downgrade-an-nvidia-driver).

**Important**

Upgrade the driver during off-peak hours. Before you upgrade, create a snapshot to back up disk data to prevent data loss. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot).

### **A system crash and a** `**kernel NULL pointer dereference**` **error occur after you install NVIDIA driver version 570.124.xx (Linux) or 572.61 (Windows)**

-   **Symptoms:** On some instance types, the system reports a `kernel NULL pointer dereference` error when you install NVIDIA driver version 570.124.xx (Linux) or 572.61 (Windows), or when you run the `nvidia-smi` command after the installation. The following log shows the error:
    
    **Error log**
    
    ```
    [  305.164082] BUG: kernel NULL pointer dereference, address: 00000000000000c4
    [  305.164303] #PF: supervisor read access in kernel mode
    [  305.164447] #PF: error_code(0x0000) - not-present page
    [  305.164626] PGD 0 P4D 0
    [  305.164724] Oops: 0000 [#1] SMP NOPTI
    [  305.164852] CPU: 29 PID: 23659 Comm: nv_open_q Kdump: loaded Tainted: G           OE     5.10.134-19.1.al8.x86_64 #1
    [  305.165241] Hardware name: Alibaba Cloud Alibaba Cloud ECS, BIOS 2.0.0 04/23/2024
    [  305.165450] RIP: 0010:pci_read_config_dword+0x5/0x40
    [  305.165630] Code: 44 89 c6 e9 5d fc ff ff b8 ff ff ff ff 66 89 02 b8 86 00 00 00 c3 cc cc cc cc 66 66 2e 0f 1f 84 00 00 00 00 00 0f 1f 44 00 00 <83> bf c4 00 00 00 03 48 89 d1 74 12 44 8b 47 38 48 8b 7f 10 89 f2
    [  305.166323] RSP: 0018:ffffbc6ac0f1b9f0 EFLAGS: 00010293
    [  305.166469] RAX: 0000000000000000 RBX: ffff9e9ba33e0020 RCX: 0000000000000002
    [  305.166724] RDX: ffffbc6ac0f1ba0c RSI: 0000000000000000 RDI: 0000000000000000
    [  305.166977] RBP: ffffbc6ac0f1ba10 R08: 0000000000000000 R09: 0000000000000000
    [  305.167243] R10: 00000000000922f8 R11: ffffffffac163048 R12: 0000000000000000
    [  305.167506] R13: 0000000000000001 R14: 0000000000000004 R15: 0000000000000000
    [  305.167766] FS:  0000000000000000(0000) GS:ffff9ef785480000(0000) knlGS:0000000000000000
    [  305.168060] CS:  0010 DS: 0000 ES: 0000 CR0: 0000000080050033
    [  305.168270] CR2: 00000000000000c4 CR3: 0000004130a12003 CR4: 0000000002770ee0
    [  305.168531] DR0: 0000000000000000 DR1: 0000000000000000 DR2: 0000000000000000
    [  305.168793] DR3: 0000000000000000 DR6: 00000000fffe07f0 DR7: 0000000000000400
    [  305.169052] PKRU: 55555554
    [  305.169157] Call Trace:
    [  305.169252]  ? __die+0x20/0x70
    [  305.169372]  ? no_context+0x5f/0x260
    [  305.169504]  ? exc_page_fault+0x68/0x130
    [  305.169651]  ? asm_exc_page_fault+0x1e/0x30
    [  305.169815]  ? pci_read_config_dword+0x5/0x40
    [  305.170080]  os_pci_read_dword+0x12/0x30 [nvidia]
    [  305.170357]  ? osPciReadDword+0x15/0x20 [nvidia]
    [  305.170637]  gpuReadPcieConfigCycle_GB202+0x66/0xd0 [nvidia]
    [  305.170962]  kbifSavePcieConfigRegistersFn1_GB202+0x65/0xc0 [nvidia]
    [  305.171297]  kbifSavePcieConfigRegisters_GH100+0xd2/0x1e0 [nvidia]
    [  305.171619]  kbifStateLoad_IMPL+0xa1/0xe0 [nvidia]
    [  305.171893]  gpuStateLoad_IMPL+0x267/0xd60 [nvidia]
    [  305.172129]  ? _rmGpuLocksAcquire.constprop.0+0x352/0xbf0 [nvidia]
    [  305.172375]  ? portSyncSpinlockAcquire+0x1d/0x50 [nvidia]
    [  305.172585]  ? _tlsThreadEntryGet+0x82/0x90 [nvidia]
    [  305.172780]  ? tlsEntryGet+0x31/0x80 [nvidia]
    [  305.172979]  gpumgrStateLoadGpu+0x5b/0x70 [nvidia]
    [  305.173209]  RmInitAdapter+0xf08/0x1c00 [nvidia]
    [  305.173433]  ? os_get_current_tick+0x28/0x70 [nvidia]
    [  305.173671]  rm_init_adapter+0xad/0xc0 [nvidia]
    [  305.173845]  nv_start_device+0x2a9/0x6f0 [nvidia]
    [  305.174328]  ? nv_open_device+0x9b/0x220 [nvidia]
    [  305.174791]  ? nvidia_open_deferred+0x3c/0x100 [nvidia]
    [  305.175248]  ? nvidia_modeset_resume+0x20/0x20 [nvidia]
    [  305.175705]  ? _main_loop+0x9e/0x160 [nvidia]
    [  305.176128]  ? nvidia_modeset_resume+0x20/0x20 [nvidia]
    [  305.176527]  ? kthread+0x118/0x140
    [  305.176869]  ? __kthread_bind_mask+0x60/0x60
    [  305.177230]  ? ret_from_fork+0x1f/0x30
    [  305.177575] Modules linked in: nvidia_drm(OE) nvidia_modeset(OE) nvidia(OE) ecc rfkill intel_rapl_msr intel_rapl_common intel_uncore_frequency_common isst_if_common skx_edac_common nfit intel_powerclamp crct10dif_pclmul crc32_pclmul ghash_clmulni_intel rapl snd_intel8x0 snd_ac97_codec ac97_bus snd_pcm erdma snd_timer ib_uverbs snd soundcore ib_core virtio_balloon pcspkr i2c_piix4 sunrpc vfat fat cirrus drm_kms_helper syscopyarea sysfillrect sysimgblt fb_sys_fops drm nvme libcrc32c virtio_net crc32c_intel net_failover nvme_core serio_raw i2c_core failover virtio_console t10_pi floppy [last unloaded: ecc]
    [  305.180787] CR2: 00000000000000c4
    [  305.181132] ---[ end trace 85d65b7e0a10dcf8 ]---
    [  305.181512] RIP: 0010:pci_read_config_dword+0x5/0x40
    [  305.181903] Code: 44 89 c6 e9 5d fc ff ff b8 ff ff ff ff 66 89 02 b8 86 00 00 00 c3 cc cc cc cc 66 66 2e 0f 1f 84 00 00 00 00 00 0f 1f 44 00 00 <83> bf c4 00 00 00 03 48 89 d1 74 12 44 8b 47 38 48 8b 7f 10 89 f2
    [  305.183045] RSP: 0018:ffffbc6ac0f1b9f0 EFLAGS: 00010293
    [  305.183463] RAX: 0000000000000000 RBX: ffff9e9ba33e0020 RCX: 0000000000000002
    [  305.183955] RDX: ffffbc6ac0f1ba0c RSI: 0000000000000000 RDI: 0000000000000000
    [  305.184443] RBP: ffffbc6ac0f1ba10 R08: 0000000000000000 R09: 0000000000000000
    [  305.184931] R10: 00000000000922f8 R11: ffffffffac163048 R12: 0000000000000000
    [  305.185415] R13: 0000000000000001 R14: 0000000000000004 R15: 0000000000000000
    [  305.185913] FS:  0000000000000000(0000) GS:ffff9ef785480000(0000) knlGS:0000000000000000
    [  305.186426] CS:  0010 DS: 0000 ES: 0000 CR0: 0000000080050033
    [  305.186870] CR2: 00000000000000c4 CR3: 0000004130a12003 CR4: 0000000002770ee0
    [  305.187363] DR0: 0000000000000000 DR1: 0000000000000000 DR2: 0000000000000000
    [  305.187866] DR3: 0000000000000000 DR6: 00000000fffe07f0 DR7: 0000000000000400
    [  305.188361] PKRU: 55555554
    [  305.188719] Kernel panic - not syncing: Fatal exception
    [  305.190378] Kernel Offset: 0x29000000 from 0xffffffff81000000 (relocation range: 0xffffffff80000000-0xffffffffbfffffff)
    ```
    
-   **Solution:** Avoid using driver version 570.124.xx (Linux) or 572.61 (Windows). We recommend that you use version 570.133.20 (Linux) or 572.83 (Windows) or later.
    

### **The nvidia-smi command returns a "No devices were found" error if you select NVIDIA Proprietary for the kernel module type during driver installation**

-   **Symptoms**: On some instance types, if you select NVIDIA Proprietary for the kernel module type during driver installation, the nvidia-smi command returns a `No devices were found` error after the installation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7044772671/p1025332.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7044772671/p1025333.png)
    
-   **Cause**: Not all GPU models are compatible with the NVIDIA Proprietary driver.
    
-   **Recommended kernel module type configuration**:
    
    -   For **Blackwell** architecture GPUs: You must use the open-source driver (select `MIT/GPL`).
        
    -   For **Turing**, **Ampere**, **Ada Lovelace**, and **Hopper** architecture GPUs: We recommend that you use the open-source driver (select `MIT/GPL`).
        
    -   For **Maxwell**, **Pascal**, and **Volta** architecture GPUs: You can only select `NVIDIA Proprietary`.
        

## **GPU monitoring**

### **How do I view the resource usage (vCPU, network traffic, bandwidth, and disk) of a GPU-accelerated instance?**

You can use one of the following methods to view monitoring data such as vCPU usage, memory, average system load, internal bandwidth, public bandwidth, network connections, disk usage and reads, GPU usage, GPU memory usage, and GPU power.

-   **Product console**
    
    -   ECS console: This console provides metrics such as vCPU usage, network traffic, disk I/O, and GPU monitoring. For more information, see [View monitoring information in the ECS console](/help/en/ecs/user-guide/view-the-monitoring-information-of-an-ecs-instance#section-o2c-nxz-xdb).
        
    -   CloudMonitor console: This console provides more fine-grained monitoring, such as infrastructure monitoring, operating system monitoring, GPU monitoring, network monitoring, process monitoring, and disk monitoring. For more information, see [Host monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/host-monitoring/).
        
-   **Expenses and Costs center**
    
    On the **View Usage Details** page, you can filter by the following fields to view the traffic usage of an ECS instance: **Time Period**, **Commodity Name**, **Billable Item**, **Billable Item**, and **Time Unit**. Click **Export CSV** to export the resource usage information for the instance. For more information, see [Billing details](/help/en/user-center/billing-details-1).
    
    ![用量明细-zh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3174391471/p924291.png)
    
    **Note**
    
    The data in the usage details is the raw resource usage. It is different from the billable usage data in the billing details. The query results are for reference only and cannot be used for reconciliation.
    

## **Others**

### **How do I install the cGPU service?**

You can install and use the cGPU service through the Docker runtime environment of ACK. This is the recommended method for both enterprise users and individual users who have completed identity verification. For more information, see [Manage the shared GPU scheduling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#task-1997635).

### **The nvidia-smi -r command hangs after you install the cGPU service**

-   **Symptoms**: In an environment where the cGPU service is loaded (which you can confirm by running the `lsmod | grep cgpu` command), the `nvidia-smi -r` command hangs and cannot be terminated when you try to reset the GPU. An error message also appears in the `dmesg` system log.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5186667671/p1041536.png)
    
-   **Cause**: The cGPU component is still using the GPU device. This blocks the hardware reset operation.
    
-   **Solution**:
    
    1.  **Uninstall cGPU**: Uninstall the cGPU component. After the uninstallation, the `nvidia-smi -r` command resumes and returns a result.
        
    2.  **Restart the instance**: If the issue persists after the uninstallation, [restart the instance](/help/en/egs/user-guide/restart-instances) from the console. Running the reboot command inside the instance is not effective.
        
    
    **Important**
    
    Do not reset the GPU by running commands such as `nvidia-smi -r`, detaching the device, or reinstalling the driver when the cGPU service is loaded. Always uninstall the cGPU service first to prevent failures.
