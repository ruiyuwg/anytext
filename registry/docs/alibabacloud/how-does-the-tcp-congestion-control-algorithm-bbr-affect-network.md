Alibaba Cloud Linux 2 supports the following kernel TCP congestion control algorithms: Reno, Bottleneck Bandwidth and Round-trip propagation time (BBR), and CUBIC. These algorithms perform differently in various network scenarios. This topic describes the cause of and solutions to the issue that the BBR algorithm affects the network performance of an Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 2.

## Problem description

BBR is used as the default TCP congestion control algorithm of an ECS instance with the following configurations. When the instance's CPU utilization and packet forwarding rate are high, BBR affects its network performance, such as degrading the performance of Redis databases.

-   Image version: `aliyun_2_1903_64_20G_alibase_20190619.vhd` or earlier.
    
-   Kernel version: `kernel-4.19.48-14.al7` or earlier.
    

## Cause

When the BBR algorithm is used for kernel TCP congestion control but the network interfaces' `qdisc` does not use the `fq` scheduler, the TCP stack falls back to its internal high-resolution timer (hrtimer). This increases CPU utilization per connection.

## Solutions

-   Replace BBR with another algorithm.
    
    If applications on the instance provide services only over the internal network, run the following commands to replace BBR with CUBIC. CUBIC is suitable for high-bandwidth and low-latency internal network environments.
    
    ```
    sudo sysctl -w net.ipv4.tcp_congestion_control=cubic
    echo "net.ipv4.tcp_congestion_control=cubic" | sudo tee -a /etc/sysctl.d/50-aliyun.conf
    ```
    
-   Change the scheduling policy of the network interfaces.
    
    If applications on the instance provide services over the Internet, run the following command to change the scheduling policy of the network interfaces used by the applications to `tc-fq`.
    
    Replace `<$DEV>` with the actual network interface name.
    
    ```
    sudo tc qdisc add dev <$DEV> root fq
    ```
    
-   Use the `tc-fq` scheduling policy to reduce CPU utilization.
    
-   Upgrade the instance's kernel to the latest version.
    
    **Warning**
    
    -   Kernel upgrades may cause compatibility and stability issues. Review the kernel features in [release notes for Alibaba Cloud Linux 2](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux2) and exercise caution when you upgrade the kernel version.
        
    -   The restart operation temporarily stops the instance, which may interrupt running services and lead to data loss. Therefore, back up critical instance data and then restart the instance during off-peak hours.
        
    
    1.  Upgrade to the latest kernel version.
        
        ```
        sudo yum update kernel
        ```
        
    2.  Restart the instance for the new kernel version to take effect.
        
        ```
        sudo reboot
        ```
