By default, public Linux images from Alibaba Cloud are command-line only to ensure server performance and stability. However, for certain use cases, installing a graphical user interface (GUI) can enhance the user experience and operational efficiency.

## Applicability and risk assessment

Before you begin, confirm the following limitations and risks.

-   **Operating system compatibility**: Alibaba Cloud Linux, the official operating system of Alibaba Cloud, **does not support** GUI installation.
    
-   **Remote connection tool limitations**: After you install a GUI, VNC connections through the Elastic Compute Service (ECS) console display the graphical interface by default. Workbench and Session Manager can continue to be used for command-line operations.
    
-   **Performance impact**: A GUI places a constant load on CPU and memory resources, typically an additional 1 GiB to 2 GiB of memory. This resource consumption can cause **slower response times** on low-specification instances. Install a GUI only for specific scenarios, such as automated testing or graphics rendering. For routine server management, use command-line tools.
    

## Quick selection guide

Select a desktop environment based on your instance specifications and requirements. A lighter desktop environment reduces resource consumption.

**Desktop Environment (DE)**

**Resource Usage (Memory)**

**Recommended Minimum Instance Specifications**

[**XFCE**](https://www.xfce.org/)

Low (approx. 500 MB to 800 MB)

2 vCPU, 2 GiB

[**MATE**](https://mate-desktop.org/)

Medium (approx. 800 MB to 1.2 GiB)

2 vCPU, 4 GiB

[**GNOME**](https://www.gnome.org/)

High (approx. 1.5 GiB or more)

4 vCPU, 8 GiB

## Installation guide

**Important**

[Create snapshot manually](/help/en/ecs/user-guide/create-a-snapshot) of the instance's system disk before you begin. This allows you to restore the instance if an unexpected issue occurs.

### Install the XFCE desktop on Ubuntu 18/20/22/24

1.  [Connect to the instance by using ECS console VNC.](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc)
    
2.  Update the package list and installed packages.
    
    ```
    sudo apt update && sudo apt upgrade -y
    ```
    
3.  Install the XFCE desktop environment, its related utilities, and the LightDM display manager.
    
    ```
    sudo apt install -y xfce4 xfce4-goodies lightdm lightdm-gtk-greeter
    ```
    
    > LightDM is a lightweight display manager that loads the logon window, authenticates the user, and starts the desktop session when the system starts.
    
4.  Restart the instance.
    
    ```
    sudo reboot
    ```
    
5.  After the instance restarts, reconnect by using ECS console VNC.
    
    The XFCE login screen appears if the installation is successful.
    
    > Ubuntu does not allow the `root` user to log in to a graphical session by default. Create a non-root user for desktop sessions and grant sudo privileges as needed.
    

#### Remove the graphical interface

To remove the XFCE desktop and its related packages, run the following commands:

```
# Stop the display manager and purge XFCE packages
sudo apt-get purge -y xfce4* lightdm*

# Automatically remove unnecessary dependency packages
sudo apt-get autoremove -y --purge

# Restart the instance
sudo reboot
```

### Install the GNOME desktop on Anolis 8/CentOS Stream

1.  [Connect to the instance by using ECS console VNC.](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc)
    
2.  Update all installed packages.
    
    ```
    sudo dnf update -y
    ```
    
3.  Install the GNOME desktop environment.
    
    ```
    sudo dnf groupinstall "Server with GUI" -y
    ```
    
    > The "Server with GUI" package group includes GNOME and other common graphical tools.
    
4.  Set the system to boot into the graphical target by default.
    
    ```
    sudo systemctl set-default graphical.target
    ```
    
5.  Restart the instance to apply the changes.
    
    ```
    sudo reboot
    ```
    
    After the instance restarts, reconnect by using ECS console VNC. At the GNOME login screen, enter your instance credentials to access the desktop.
    

#### Remove the graphical interface

To remove the GNOME desktop, run the following commands:

```
# Switch back to the command-line target
sudo systemctl set-default multi-user.target

# Remove the graphical interface package group
sudo dnf groupremove "Server with GUI" -y

# Automatically remove unnecessary dependency packages
sudo dnf autoremove -y

# Restart the instance
sudo reboot
```

### Install the MATE desktop on CentOS 7/8

**Important**

CentOS 7/8 has reached its End of Life (EOL). Official software repositories are no longer available from the CentOS project. Continued use poses security risks, and package installation may fail.

1.  [Connect to the instance by using ECS console VNC.](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc)
    
2.  Update all installed packages.
    
    ```
    sudo yum -y upgrade
    ```
    
3.  Install the MATE desktop environment and the underlying X Window System.
    
    ```
    sudo yum groups install "X Window System"
    sudo yum groups install "MATE Desktop"
    ```
    
4.  Set the system to boot into the graphical target by default.
    
    ```
    sudo systemctl set-default graphical.target
    ```
    
5.  Restart the instance.
    
    ```
    sudo reboot
    ```
    

#### Remove the graphical interface

```
# View installed groups
sudo yum group list installed

# Uninstall MATE Desktop
sudo yum groupremove "MATE Desktop"
sudo yum groupremove "X Window System"

# Automatically remove dependencies that are no longer needed
sudo yum autoremove

# Set the system to start in multi-user (text) mode
sudo systemctl set-default multi-user.target

# Restart the system
sudo reboot
```

## Best practices for production

If you use a GUI in a production environment, follow these best practices.

-   **Resource planning**: Allocate sufficient CPU and memory for your chosen desktop environment. Continuously monitor resource utilization by [viewing instance monitoring information](/help/en/ecs/user-guide/view-the-monitoring-information-of-an-ecs-instance) and upgrade the instance configuration if necessary.
    
-   **Security hardening**:
    
    -   **Principle of least privilege**: Create a dedicated non-root user for GUI login. Avoid operating the desktop directly as root to minimize security risks.
        
    -   **System updates**: Regularly run `sudo dnf update` or `sudo apt upgrade` to patch security vulnerabilities in the desktop environment and the underlying system.
        

## FAQ

#### How do I resolve keyboard and mouse issues on CentOS 7 after installing a GUI?

**Symptom**

After installing a GUI on a CentOS 7 instance, the keyboard and mouse do not function in the ECS console VNC session.

**Cause**

The default input drivers loaded by the X Window System are not compatible with the VNC environment.

**Resolution**

Configure the X server to use the `evdev` input driver.

1.  Install the `evdev` driver package.
    
    ```
    yum install xorg-x11-drv-evdev
    ```
    
2.  Create the `/etc/X11/xorg.conf` configuration file.
    
    ```
    Xorg -configure
    ```
    
3.  Back up the configuration file.
    
    ```
    cp xorg.conf.new /etc/X11/xorg.conf
    ```
    
4.  Edit the `/etc/X11/xorg.conf` configuration file and change the mouse and keyboard driver type to evdev.
    
    ```
    Identifier "Keyboard0"
    Driver "evdev"       # Change to evdev
    Option "Device" "/dev/input/event3"
    EndSection
    Section "InputDevice"
    Identifier "Mouse0"
    Driver "evdev"       # Change to evdev
    Option "Device" "/dev/input/event5"
    Option "Mode" "Absolute"
    EndSection
    ```
    
    -   The configuration file before the modification.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0364947571/p1005121.png)
        
    -   The configuration file after the modification.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0364947571/p1005122.png)
        
5.  Restart the instance and confirm that you can use the mouse and keyboard.
    

#### What do I do if the GNOME desktop is unavailable because the messagebus and haldaemon services do not start on a CentOS system?

##### **Symptoms**

After you install the GNOME desktop environment and restart the ECS instance, you cannot log on to the instance after you enter your username and password. The following error is reported:

```
"You are currently trying to run as the root super user. The super user is a specialized account that is not designed to run a normal user session. Various programs will not function properly, and actions performed under this account can cause unrecoverable damage to the operating system."
```

##### **Cause**

This issue occurs because the messagebus and haldaemon services do not start automatically. To improve system performance and stability, public Linux images do not have the messagebus and haldaemon services configured to start automatically by default.

##### **Solution**

1.  Roll back the operating system using a historical snapshot. For more information, see [Roll back disk using snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot).
    
2.  Follow the steps in this topic to reinstall the graphical desktop.
    
3.  Configure the messagebus and haldaemon services to start automatically on system startup.
    
    ```
    chkconfig --level 35 messagebus on
    chkconfig --level 35 haldaemon on
    ```
    
    > Set the runlevel to Level 3 (multi-user, command-line only) and then start the desktop environment using the `startx` command to test its availability. If any issues occur, you can switch to terminal mode for troubleshooting and resolution. After confirming that the desktop environment starts without problems, change the runlevel to Level 5 (multi-user, with GUI).
    

#### How do I resolve "unmet dependencies" errors when installing a GUI on Ubuntu?

##### **Symptoms**

The following error may be reported during the installation of a graphical desktop on Ubuntu 18:![安装报错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0364947571/p1005123.png)

##### **Cause**

This error typically occurs when the package manager's dependency tree requires specific versions of packages, but different versions are already installed. To resolve this, you must remove the conflicting packages, allowing `apt` to install the correct versions as dependencies.

##### **Solution**

1.  Uninstall the later versions of the packages.
    
    ```
    apt-get remove update-manager-core libparted2 python3-update-manager
    ```
    
2.  Reinstall the graphical desktop.
    
    ```
    apt-get update
    apt-get install ubuntu-desktop
    ```
    

**What do I do if the** `**Invalid configuration value: failovermethod=priority**` **error occurs when I run the** `**yum groupinstall "Server with GUI" -y**` **command?**

##### **Symptoms**

When running a `yum` or `dnf` command on CentOS 8, you receive the following error:

```
Invalid configuration value: failovermethod=priority in /etc/yum.repos.d/CentOS-epel.repo; Configuration: OptionBinding with id "failovermethod" does not exist
CentOS Linux 8 - AppStream
```

##### **Cause**

The EPEL (Extra Packages for Enterprise Linux) repository file contains the `failovermethod=priority` option, which is not supported by the `dnf` package manager used in CentOS 8.

##### **Solution**

Edit the EPEL repository configuration file to remove or comment out the `failovermethod=priority` line.

1.  Edit the EPEL repository configuration file.
    
    Open the `/etc/yum.repos.d/CentOS-epel.repo` file. For example:
    
    ```
    sudo vi /etc/yum.repos.d/CentOS-epel.repo
    ```
    
2.  Find and comment out the `failovermethod=priority` line.
    
    In the open file, find the line that contains `failovermethod=priority`.
    
    To comment out the line, add a `#` symbol to the beginning of the line.
    
    ```
    # failovermethod=priority
    ```
    
3.  Clear the YUM cache to ensure that the new configuration takes effect.
    
    ```
    sudo yum clean all
    sudo yum makecache
    ```
    
4.  Try to install the GUI again.
    
    ```
    sudo yum groupinstall "Server with GUI" -y
    ```
    

#### How do I resolve system lag after installing a GUI?

If the system runs slowly after you install a graphical user interface, the cause may be high resource consumption from the selected desktop environment or an instance with a low system configuration.

Xrdp can use the native Remote Desktop (mstsc) program in Windows, which provides improved stability. With a good network connection, Xrdp can offer a smoother remote experience. The following commands show how to install Xrdp:

```
sudo apt install xrdp -y
sudo adduser xrdp ssl-cert
sudo ufw allow 3389/tcp
sudo systemctl status xrdp
sudo systemctl enable xrdp
```

If the Linux system has insufficient resources or the desktop environment is too resource-intensive, you can use a more lightweight desktop environment to improve performance.
