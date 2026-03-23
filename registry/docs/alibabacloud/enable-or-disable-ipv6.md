This topic shows you how to enable or disable IPv6 on an Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 2.

## Prerequisites

-   The instance type must support IPv6. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   The instance must be in an IPv6-enabled region and deployed in a Virtual Private Cloud (VPC) with an IPv6 CIDR block. For more information, see [Create a VPC with an IPv6 CIDR block](/help/en/ipv6-gateway/getting-started/create-a-vpc-with-an-ipv6-cidr-block#task-1512598).
    

## Background information

In Alinux images earlier than `aliyun-2.1903-x64-20G-alibase-20190829.vhd`, IPv6 is disabled by default. Starting from version `aliyun_2_1903_x64_20G_alibase_20200221.vhd`, IPv6 is enabled by default.

## Enable IPv6

#### **Temporarily enable IPv6**

**Important**

This temporary configuration is lost when the instance stops or restarts. Use this method with caution.

In image versions `aliyun_2_1903_64_20G_alibase_20190619.vhd` and earlier, the `.network` files in the `/etc/systemd/network/` directory are configured only with `DHCP=ipv4`. To temporarily enable IPv6, modify the file as follows:

1.  Connect to the ECS instance.
    
    For more information, see [Connect to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following command to go to the /etc/systemd/network/ directory:
    
    ```
    cd /etc/systemd/network/
    ```
    
3.  Run the `ls` command to find the .network file in the directory.
    
    This topic uses the 50-dhcp.network file as an example.![alinux2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3275405761/p100127.png)
    
4.  Modify the 50-dhcp.network file.
    
    ```
    vi /etc/systemd/network/50-dhcp.network
    ```
    
5.  Press I to enter Insert mode.
    
    Change the `DHCP` setting under `[Network]` to `yes`.
    
    **Note**
    
    The `Name=eth*` parameter matches all network interfaces, which means that all network interfaces will have their IP addresses and routes configured by using DHCP. To configure a specific network interface, change the `Name` parameter to that interface, for example, `Name=eth0`. For more information about `.network` files, see [systemd.network](https://www.freedesktop.org/software/systemd/man/systemd.network.html).
    
    ```
    [Match]
    Name=eth*
    
    [Network]
    DHCP=yes
    ```
    
    After making the changes, press `Esc`, enter `:wq`, and press `Enter` to save and exit.
    
6.  Run the following commands to enable IPv6.
    
    -   Enable IPv6 for all network interfaces.
        
        ```
        sudo sysctl -w net.ipv6.conf.all.disable_ipv6=0
        sudo sysctl -w net.ipv6.conf.default.disable_ipv6=0
        ```
        
    -   Enable IPv6 for a specific network interface (for example, `eth0`).
        
        ```
        sudo sysctl -w net.ipv6.conf.eth0.disable_ipv6=0
        ```
        
    

#### **Permanently enable IPv6**

To permanently enable IPv6, follow these steps: This configuration persists after the instance restarts.

1.  Connect to the ECS instance.
    
    For more information, see [Connect to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Modify the `/etc/sysctl.conf` file.
    
    ```
    vi /etc/sysctl.conf
    ```
    
3.  Press i to enter Insert mode. Modify the file content by using one of the following methods:
    
    -   Delete the following configuration lines:
        
        ```
        net.ipv6.conf.all.disable_ipv6 = 1
        net.ipv6.conf.default.disable_ipv6 = 1
        net.ipv6.conf.lo.disable_ipv6 = 1
        ```
        
    -   Change the values in the configuration lines to the following:
        
        ```
        net.ipv6.conf.all.disable_ipv6 = 0
        net.ipv6.conf.default.disable_ipv6 = 0
        net.ipv6.conf.lo.disable_ipv6 = 0
        ```
        
        To enable IPv6 for a specific network interface, use the following example configuration.
        
        ```
        net.ipv6.conf.eth0.disable_ipv6 = 0
        ```
        
    
    After making the changes, press `Esc`, enter `:wq`, and press `Enter` to save and exit.
    
4.  Check for differences between the `/etc/sysctl.conf` file and the `/etc/sysctl.conf` file within initramfs.
    
    ```
    diff -u /etc/sysctl.conf <(lsinitrd -f /etc/sysctl.conf)
    ```
    
    **Note**
    
    Alibaba Cloud Linux 2 uses an initial RAM filesystem (initramfs). If the `/etc/sysctl.conf` file within the initramfs differs from the main `/etc/sysctl.conf` file, the system might load the initramfs configuration at startup, overriding your changes.
    
5.  If the two files are different, run the following command to regenerate the initramfs:
    
    ```
    sudo dracut -v -f
    ```
    
6.  Reboot the instance.
    
    ```
    sudo reboot
    ```
    
7.  Run the `ifconfig` command to verify that IPv6 is enabled.
    
    If the output includes the following lines, IPv6 is enabled:
    
    ```
    inet6 <Unicast address that starts with fe80::>
    inet6 <IPv6 address of the instance>
    ```
    

## Disable IPv6

#### **Temporarily disable IPv6**

Run the following commands to temporarily disable IPv6.

**Important**

This temporary configuration is lost when the instance stops or restarts. Use this method with caution.

-   Disable IPv6 for all network interfaces.
    
    ```
    sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
    sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
    ```
    
-   Disable IPv6 for a specific network interface (for example, `eth0`).
    
    ```
    sudo sysctl -w net.ipv6.conf.eth0.disable_ipv6=1
    ```
    

#### **Permanently disable IPv6**

The following steps permanently disable IPv6. The configuration persists after the instance restarts. You can disable IPv6 by using either of the following methods.

-   Permanently disable IPv6 by using one of the following kernel parameters.
    
    -   ```
        sudo grubby --args="ipv6.disable_ipv6=1" --update-kernel=/boot/vmlinuz-$(uname -r)
        ```
        
    -   ```
        sudo grubby --args="ipv6.disable=1" --update-kernel=/boot/vmlinuz-$(uname -r)
        ```
        
    
    **Note**
    
    The `--args="ipv6.disable_ipv6=1"` parameter disables IPv6 for network interfaces, while `--args="ipv6.disable=1"` disables the entire IPv6 kernel module. For more information, visit [Linux kernel IPv6](https://www.kernel.org/doc/Documentation/networking/ipv6.txt).
    
-   Modify the /etc/sysctl.conf file to permanently disable IPv6.
    
    1.  Modify the `/etc/sysctl.conf` file.
        
        ```
        vi /etc/sysctl.conf
        ```
        
    2.  Press I to enter Insert mode and change the configuration to the following:
        
        ```
        net.ipv6.conf.all.disable_ipv6=1
        net.ipv6.conf.default.disable_ipv6=1
        ```
        
        Disable IPv6 for a specific network interface. Example:
        
        ```
        net.ipv6.conf.eth0.disable_ipv6=1
        ```
        
    3.  Reboot the instance.
        
        ```
        sudo reboot
        ```
        
    4.  Run the `ifconfig` command to verify that IPv6 is disabled.
        
        If the output does not include the following lines, IPv6 is disabled:
        
        ```
        inet6 <Unicast address that starts with fe80::>
        inet6 <IPv6 address of the instance>
        ```
        

## Configure IPv6 for multiple network interfaces

To configure multiple IPv6 addresses, follow these steps.

1.  Connect to the ECS instance.
    
    For more information, see [Connect to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following command to go to the `/etc/systemd/network/` directory:
    
    ```
    cd /etc/systemd/network/
    ```
    
3.  Run the `ls` command to find the `.network` file in the directory.
    
    In this example, the 10-eth0.network file is used.
    
4.  Run the `cp` command to copy it to a new configuration file.
    
    For example:
    
    ```
    cp 10-eth0.network 20-dhcp.network
    ```
    
5.  Run the following command to modify the new configuration file.
    
    ```
    sed -i 's/^Name.*$/Name=*/g' /etc/systemd/network/20-dhcp.network
    ```
    
6.  Restart the systemd-networkd service to apply the changes.
    
    ```
    sudo systemctl restart systemd-networkd
    ```
