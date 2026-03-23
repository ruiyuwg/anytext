A printk deadlock refers to a situation in which multiple threads in the system wait for each other to release resources and cannot continue when the `printk` function in the Linux kernel is called to print logs. printk deadlocks adversely affect the operation of system applications and services and cause kernel downtime. Therefore, preventing and resolving printk deadlocks at the earliest opportunity is critical to ensuring system stability and reliability. This topic describes why a downtime issue occurs in Alibaba Cloud Linux due to a printk deadlock and how to resolve the issue.

## **Problem description**

When a downtime issue occurs in the kernel of the Alibaba Cloud Linux operating system, the analysis of the vmcore file reveals the following symptoms.

**Note**

When the downtime issue occurs, a dump file named vmcore is generated. You can view kernel logs in the vmcore file, obtain the calltrace information that starts with "Call Trace:" to analyze the cause, and then troubleshoot the issue.

-   The kernel logs displayed after the dmesg command is run contains `warning` logs that are related to scheduling and work\_queue.
    
-   The calltrace information of a specific process has the following characteristics:
    
    -   The functions that were last called are intended to acquire spinlocks, such as the `_raw_spin_lock`, `queued_spin_lock_slowpath`, and `raw_spin_rq_lock_netsted` functions.
        
    -   The system calls the `printk` function, `console_unlock` function, and the preceding functions that acquire spinlocks in sequence.
        
    
    **Sample calltrace information**
    
    ```
    PID: 99675  TASK: ffff8901818acf80  CPU: 116  COMMAND: "kubelet"
     #0 [fffffe0001ac9e50] crash_nmi_callback at ffffffff81055acb
     #1 [fffffe0001ac9e58] nmi_handle at ffffffff81024892
     #2 [fffffe0001ac9ea0] default_do_nmi at ffffffff81a358d2
     #3 [fffffe0001ac9ec8] exc_nmi at ffffffff81a35adf
     #4 [fffffe0001ac9ef0] end_repeat_nmi at ffffffff81c013eb
        [exception RIP: native_queued_spin_lock_slowpath+65]
        RIP: ffffffff810ff9b1  RSP: ffffc9001da977d8  RFLAGS: 00000002
        RAX: 00000000005c0101  RBX: ffff897e7fb00000  RCX: ffff897e7fb38705
        RDX: 0000000000000000  RSI: 0000000000000000  RDI: ffff897e7fb33600
        RBP: ffff8901efa38000   R8: 0000000000000074   R9: ffff897e7fb32f20
        R10: 0000000000000000  R11: 0000000000000000  R12: 0000000000000000
        R13: 0000000000000002  R14: ffff8901efa38b44  R15: ffff897e7fb33600
        ORIG_RAX: ffffffffffffffff  CS: 0010  SS: 0000
    --- <NMI exception stack> ---
     #5 [ffffc9001da977d8] native_queued_spin_lock_slowpath at ffffffff810ff9b1
     #6 [ffffc9001da977d8] _raw_spin_lock at ffffffff81a435ea
     #7 [ffffc9001da977e0] try_to_wake_up at ffffffff810cf3e3
     #8 [ffffc9001da97840] __queue_work at ffffffff810b643f
     #9 [ffffc9001da97888] queue_work_on at ffffffff810b65cc
    #10 [ffffc9001da97898] soft_cursor at ffffffff815c1b51
    #11 [ffffc9001da978f0] bit_cursor at ffffffff815c1718
    #12 [ffffc9001da979c0] hide_cursor at ffffffff816591d4
    #13 [ffffc9001da979d0] vt_console_print at ffffffff81659fea
    #14 [ffffc9001da97a38] call_console_drivers.constprop.0 at ffffffff81109a32
    #15 [ffffc9001da97a60] console_unlock at ffffffff8110a04d
    #16 [ffffc9001da97b18] vprintk_emit at ffffffff8110be14
    #17 [ffffc9001da97b58] printk at ffffffff819f1053
    #18 [ffffc9001da97bb8] show_fault_oops.cold at ffffffff819e9b6b
    #19 [ffffc9001da97c10] no_context at ffffffff810714bb
    #20 [ffffc9001da97c48] exc_page_fault at ffffffff81a37628
    #21 [ffffc9001da97c70] asm_exc_page_fault at ffffffff81c00ace
    #22 [ffffc9001da97cf8] __update_load_avg_cfs_rq at ffffffff810f25ee
    #23 [ffffc9001da97d60] update_load_avg at ffffffff810d8e7a
    #24 [ffffc9001da97d98] task_tick_fair at ffffffff810daeed
    #25 [ffffc9001da97dd0] scheduler_tick at ffffffff810ceb9c
    #26 [ffffc9001da97df8] update_process_times at ffffffff81132d30
    #27 [ffffc9001da97e10] tick_sched_handle at ffffffff81144082
    #28 [ffffc9001da97e28] tick_sched_timer at ffffffff81144503
    #29 [ffffc9001da97e48] __run_hrtimer at ffffffff81133bbc
    #30 [ffffc9001da97e80] __hrtimer_run_queues at ffffffff81133d6d
    #31 [ffffc9001da97ec0] hrtimer_interrupt at ffffffff81134250
    #32 [ffffc9001da97f20] __sysvec_apic_timer_interrupt at ffffffff81059b51
    #33 [ffffc9001da97f38] sysvec_apic_timer_interrupt at ffffffff81a36e01
    #34 [ffffc9001da97f50] asm_sysvec_apic_timer_interrupt at ffffffff81c00cc2
        RIP: 0000000000429e3a  RSP: 00007f2e29ffad48  RFLAGS: 00000202
        RAX: 00c00352b0000010  RBX: 00000000075c1048  RCX: 000000c003827800
        RDX: 00c00396e8000003  RSI: 0000000000000000  RDI: 0000000000000002
        RBP: 00007f2e29ffada0   R8: 7ffffffffffb3a07   R9: 0000000000000000
        R10: 000000c000091e98  R11: 0000000000000340  R12: 0000000000000000
        R13: 0000000000000e96  R14: 0000000000000000  R15: 0000000000000000
        ORIG_RAX: ffffffffffffffff  CS: 0033  SS: 002b
    ```
    

## **Cause**

The issue is caused by a deadlock that occurs when the printk mechanism of the Linux community is used. A printk deadlock is unlikely to occur, but may occur in kernel version `5.10.134-16.3` of Alibaba Cloud Linux 3.

-   Why does a printk deadlock occur?
    
    If the printk function is called to print kernel logs after the kernel holds the spinlock of work\_queue or runqueue (rq), printk calls the underlying Direct Rendering Manager (DRM) driver to attempt to lock work\_queue or rq again. As a result, a printk deadlock occurs, which causes a system downtime issue.
    
    **Note**
    
    For information about how the DRM driver attempts to lock an object, refer to the [drm/fb-helper: Add fb\_deferred\_io support](https://patchwork.freedesktop.org/patch/84319/) patch.
    
-   Why do `warning` logs related to scheduling and work\_queue appear?
    
    When the kernel holds the spinlock of work\_queue or rq and calls the printk function to print logs, printk prints warning messages about scheduling and work\_queue to kernel logs. This is why the demesg command output contains warning logs for scheduling and work\_queue.
    
-   Why does kernel version `5.10.134-16.3` of Alibaba Cloud Linux 3 have a higher probability of printk deadlocks?
    
    `Warning` logs for scheduling and work\_queue are printed only in a few scenarios. In kernel version `5.10.134-16.3` of Alibaba Cloud Linux 3, the [asynchronous unthrottle feature](https://lore.kernel.org/all/20230515063848.77947-4-jiahao.os@bytedance.com/) that is backported from the Linux community has a regression defect. The defect increases the probability of printing `warning` logs and results in a high probability of printk deadlocks in Alibaba Cloud Linux 3.
    

## Affected versions

-   printk deadlocks are a known issue introduced in the [drm/fb-helper: Add fb\_deferred\_io support](https://patchwork.freedesktop.org/patch/84319/) patch in Linux 4.10 released by the Linux community.
    
-   The issue exists in kernel versions `4.19` and `5.10` of Alibaba Cloud Linux.
    
-   The probability of this issue is high in kernel version `5.10.134-16.3` of Alibaba Cloud Linux 3.
    

## **Solution**

Run the following command to change the log level to prevent the printk function from printing `warning` logs to a serial port.

**Important**

-   If your journal system captures logs on a serial port but not kernel logs printed by running the dmesg command, exercise caution when you change the log level.
    
-   Change in the log level causes the `warning` logs on the serial port to be missing, but does not affect the `warning` logs in the kernel logs that are printed by using the dmesg command.
    

```
sysctl -w kernel.printk="<console_loglevel> <default_message_loglevel> <minimum_console_loglevel> <default_console_loglevel>" >> /etc/sysctl.conf
```

Valid values of the `kernel.printk` parameter:

-   `console_loglevel`: specifies a log level. The printk function prints the logs whose log levels are higher than the specified log level on the serial port.
    
-   `default_message_loglevel`: specifies the default log level. If no log level is specified, the printk function is called to print logs of the default level.
    
-   `minimum_console_loglevel`: specifies the minimum value of the `console_loglevel` parameter.
    
-   `default_console_loglevel`: specifies the default value of the `console_loglevel` parameter.
    

Linux defines eight log levels of the kernel logs. A lower log level indicates a higher priority. To prevent `warning` logs from being printed on the serial port, we recommend that you set the `console_loglevel` parameter to a value less than or equal to 4. Sample command:

```
sysctl -w kernel.printk="4 4 1 7" >> /etc/sysctl.conf
```

**Note**

The following log levels are available:

```
#define LOGLEVEL_EMERG		0	/* system is unusable */
#define LOGLEVEL_ALERT		1	/* action must be taken immediately */
#define LOGLEVEL_CRIT		2	/* critical conditions */
#define LOGLEVEL_ERR		3	/* error conditions */
#define LOGLEVEL_WARNING	4	/* warning conditions */
#define LOGLEVEL_NOTICE		5	/* normal but significant condition */
#define LOGLEVEL_INFO		6	/* informational */
#define LOGLEVEL_DEBUG		7	/* debug-level messages */
```
