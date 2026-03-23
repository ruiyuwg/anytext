`CONFIG_PARAVIRT_SPINLOCK` stands for paravirtualization layer for spinlocks. It is a Linux kernel option that is designed for virtualized environments that support paravirtualization. In the Alibaba Cloud Linux operating system, the kernel option `CONFIG_PARAVIRT_SPINLOCK` is disabled by default. If you are uncertain about how to resolve the kernel performance degradation, do not enable the `CONFIG_PARAVIRT_SPINLOCK` option. This topic describes the cause of and solution to the performance degradation that may occur if the kernel option `CONFIG_PARAVIRT_SPINLOCK` is enabled.

## **Problem description**

After you enable the kernel option `CONFIG_PARAVIRT_SPINLOCK` on an Elastic Compute Service (ECS) instance that has multiple vCPUs, application performance is significantly affected if applications intensively compete for locks. For example, the capability of processing short-lived connections in the NGINX application is greatly reduced. You may observe performance degradation in applications.

## **Cause**

Enabling the `CONFIG_PARAVIRT_SPINLOCK` option may introduce additional overheads and increase complexity in the spinlock mechanism of the kernel. As a result, the kernel performance degrades.

**Note**

A spinlock is a synchronization mechanism that prevents shared resources from being accessed by multiple threads or processes at the same time and helps ensure data consistency.

## **Solution**

1.  Run the following command to view the `CONFIG_PARAVIRT_SPINLOCK` setting in the kernel configuration file that is stored in the `/boot` directory:
    
    ```
    grep CONFIG_PARAVIRT_SPINLOCK /boot/config-$(uname -r)
    ```
    
    Check the command output to determine whether the `CONFIG_PARAVIRT_SPINLOCK` option is enabled for the kernel.
    
    -   `CONFIG_PARAVIRT_SPINLOCKS=y`: The `CONFIG_PARAVIRT_SPINLOCK` option is enabled.
        
    -   `CONFIG_PARAVIRT_SPINLOCKS is not set`: The `CONFIG_PARAVIRT_SPINLOCK` option is disabled.
        
2.  (Conditionally required) If the `CONFIG_PARAVIRT_SPINLOCK` option is enabled, recompile and re-install the kernel and then disable the `CONFIG_PARAVIRT_SPINLOCK` option.
    
    **Note**
    
    Proceed with caution when you change the kernel configuration, because the operation involves the underlying layer and key components. In addition, this operation poses risks if you are unfamiliar with kernel compilation or installation. If you are uncertain about how to edit the kernel configuration file or compile and install the kernel, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact Alibaba Cloud technical support.
