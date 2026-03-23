This topic provides answers to some frequently asked questions (FAQ) about Logtail.

## What is Logtail?

Logtail is a log collection agent that is provided by Simple Log Service. Logtail allows you to collect logs from different data sources to Simple Log Service. After you install Logtail on the server from which you want to collect logs, Logtail monitors the specified log files and uploads logs that are newly written to the log files to a specified Logstore.

## Can Logtail collect data from static log files?

Logtail monitors modification events in the file system to determine whether log files are modified. If log files are modified, Logtail collects the logs that are generated in real time and sends the logs to Simple Log Service. If log files are not modified, Logtail does not collect data from the log files.

## Which operating systems does Logtail support?

-   Linux
    
    -   You can install Logtail on servers that run one of the following x86-64 Linux operating systems:
        
        -   Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3
            
        -   Anolis OS 7 and Anolis OS 8
            
        -   CentOS Linux 6, CentOS Linux 7, and CentOS Linux 8
            
        -   Debian GNU/Linux 8, Debian GNU/Linux 9, Debian GNU/Linux 10, Debian GNU/Linux 11, and Debian GNU/Linux 12
            
        -   Red Hat Enterprise Linux 6, Red Hat Enterprise Linux 7, Red Hat Enterprise Linux 8, and Red Hat Enterprise Linux 9
            
        -   openSUSE 15.1, openSUSE 15.2, and openSUSE 42.3
            
        -   SUSE Linux Enterprise Server 11, SUSE Linux Enterprise Server 12, and SUSE Linux Enterprise Server 15
            
        -   Ubuntu 14.04, Ubuntu 16.04, Ubuntu 18.04, Ubuntu 20.04, Ubuntu 22.04, and Ubuntu 24.04
            
        -   Linux operating systems based on GNU C Library version 2.5 or later
            
            **Note**
            
            For Logtail later than version 2.0, GNU C Library version 2.6 or later is required.
            
        -   Linux operating systems that support the SSE4.2 and AVX instruction sets (Logtail later than version 2.0)
            
    -   You can install Logtail on servers that run one of the following ARM64 Linux operating systems:
        
        -   Alibaba Cloud Linux 3.2 for ARM
            
        -   Anolis OS 8.2 for ARM or later
            
        -   CentOS Linux 8.4 for ARM
            
        -   Debian 11.2 and Debian 12.2 for ARM
            
        -   Ubuntu 20.04, Ubuntu 22.04, and Ubuntu 24.04 for ARM
            
        -   Linux operating systems that support ARMv8.2-A (Logtail later than version 2.0)
            
-   Windows
    
    **Note**
    
    -   If your server uses Windows Server 2008 or Windows 7, make sure that the operating systems run on x86 or x86\_64.
        
    -   If your server uses a different Windows operating system, make sure that the operating system runs on x86\_64.
        
    
    -   Microsoft Windows Server 2008
        
    -   Microsoft Windows Server 2012
        
    -   Microsoft Windows Server 2016
        
    -   Microsoft Windows Server 2019
        
    -   Microsoft Windows Server 2022
        
    -   Microsoft Windows 7
        
    -   Microsoft Windows 10
        
    -   Microsoft Windows Server Version 1909
        
    -   Microsoft Windows Server Version 2004
        

## How do I install and upgrade Logtail?

-   For more information about how to install Logtail, see [Install Logtail on ECS instances](/help/en/sls/install-logtail-on-ecs-instances#task-2561331), [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb), [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#concept-j22-xnv-vdb), and [Install Logtail components in a Kubernetes cluster](/help/en/sls/install-logtail-components-in-a-kubernetes-cluster#task-2428344).
    
-   For more information about how to upgrade Logtail, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#section-jcz-xmv-vdb), [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#section-fks-lwg-cfb), [Upgrade Logtail (ACK cluster)](/help/en/sls/install-logtail-components-in-a-kubernetes-cluster#02651a802fcyj), and [Upgrade Logtail (self-managed Kubernetes cluster)](/help/en/sls/install-the-logtail-component-self-built-kubernetes-cluster#2169ce602fn10).
    
    **Important**
    
    If Logtail is running, you must manually upgrade Logtail.
    

## How do I configure Logtail to collect logs?

Simple Log Service allows you to collect text logs and container logs by using Logtail. You can also collect logs by using Logtail plug-ins. For more information, see the following topics:

-   [Collect text logs from servers](/help/en/sls/collect-host-logs)
    
-   [Collect text logs from Kubernetes containers in DaemonSet mode](/help/en/sls/collect-container-text-logs-through-the-daemonset-console)
    
-   [Collect text logs from Kubernetes containers in Sidecar mode](/help/en/sls/collect-container-text-logs-through-sidecar-console)
    
-   [Collect stdout and stderr from Kubernetes containers in DaemonSet mode (old version)](/help/en/sls/collect-container-stdout-and-stderr-in-daemonset-mode-1)
    
-   [Logtail plug-ins overview](/help/en/sls/overview-19)
    

## How does Logtail collect logs?

Logtail collects logs in the following process: monitors log files, reads log files, processes logs, filters logs, aggregates logs, and sends logs. For more information, see [Log collection process of Logtail](/help/en/sls/log-collection-process-of-logtail#concept-bjz-3hp-1fb).

## Does Logtail support log file rotation?

Yes, Logtail supports log file rotation. For example, during log file rotation for the app.LOG file, the app.LOG.1 and app.LOG.2 files are generated. Logtail can detect the process of log file rotation and ensure that no logs are lost during this process.

## How does Logtail handle network exceptions?

When the network experiences fluctuations, Logtail attempts to resend data. If the network issues persist, Logtail switches to a backup link. If no backup link is available, Logtail stops collecting logs but keeps the current log files open, retrying at intervals.

-   For Logtail versions 1.5.1 and later, Logtail automatically detects the default link while using a backup link and switches back to the default link as soon as the network stabilizes.
    
-   For earlier versions of Logtail, after Logtail switches to a backup link, it remains there unless the backup link becomes very unstable. If your default link is the intranet, even brief disruptions may cause data to be continuously sent through the Internet. We recommend that you upgrade Logtail to the latest version to avoid this issue.
    

## What is the collection latency when Logtail collects logs?

Logtail collects logs based on the monitoring of modification events and sends the collected logs to Simple Log Service within three seconds.

## How do I collect historical logs?

If the interval from the time when a log is generated to the system time when Logtail processes the log exceeds 5 minutes, the log is considered a historical log. By default, Logtail collects only incremental logs. If you want to collect historical logs, you can use the historical log import feature that is provided by Logtail. For more information, see [Import historical logs from log files](/help/en/sls/import-historical-logs#task-g1x-q2s-g2b).

## When does a Logtail configuration take effect after I modify it?

After you modify a Logtail configuration in the Simple Log Service console, the Logtail configuration takes effect within three minutes.

## How do I resolve the issues that occur when Logtail collects logs?

You can perform the following operations to troubleshoot the issues. For more information, see [Troubleshoot Logtail collection errors](/help/en/sls/what-do-i-do-if-errors-occur-when-i-use-logtail-to-collect-logs#LogService-user-guide-0083)

1.  Check whether the heartbeat status of Logtail is OK.
    
2.  Check whether the logs in the specified log files are generated in real time.
    
3.  Check whether the regular expression in the Logtail configuration matches the content of the logs.
