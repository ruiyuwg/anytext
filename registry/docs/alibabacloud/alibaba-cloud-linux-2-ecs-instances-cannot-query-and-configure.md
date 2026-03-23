This topic describes the causes of and solutions to the issue that you cannot query or configure the routing information of an Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 2.

## Problem description

You cannot query or configure the routing information of an ECS instance with the following configurations:

-   Image version: `aliyun-2.1903-x64-20G-alibase-20190507.vhd` or earlier.
    
-   Kernel version: `kernel-4.19.34-11.al7` or earlier. Run the `uname -r` command to check the kernel version.
    

In the following examples, a secondary elastic network interface (ENI) named `eth1` is used. Replace the IP addresses and other information in the commands with the actual values.

-   You cannot query a created route table.
    
    1.  View the gateway address of `eth1`.
        
        ```
        ip a
        ```
        
    2.  Create a route table.
        
        ```
        sudo ip -4 route add default via <Gateway address of eth1> dev eth1 table 1001
        ```
        
    3.  View information about the route table. The command output does not contain the information.
        
        ```
        ip route list table 1001
        ```
        
    4.  Re-create a route table.
        
        ```
        sudo ip -4 route add default via <Gateway address of eth1> dev eth1 table 1001
        ```
        
        The following error message is returned.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8859676471/p951451.png)
        
-   You cannot create policy-based routes for the instance.
    
    Create a policy-based route for the instance.
    
    ```
    sudo ip -4 rule add from <Source IP address> lookup 1001
    ```
    
    The following error message is returned.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8859676471/p951453.png)
    

## Cause

Policy-based routes rely on the `CONFIG_IP_MULTIPLE_TABLES` module. In kernel version `kernel-4.19.34-11.al7` or earlier, this module is disabled.

## Solution

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
