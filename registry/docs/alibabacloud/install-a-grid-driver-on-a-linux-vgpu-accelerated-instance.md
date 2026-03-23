To unlock the full capabilities of your GPU and ensure smooth graphics rendering for high-performance computing workloads, such as AI, or for applications like OpenGL, Direct3D, and cloud gaming, install the GRID driver. This topic describes how to use Cloud Assistant to quickly install the GRID driver.

**Note**

Before using Cloud Assistant to install the GRID driver, review its features. For more information, see [Cloud Assistant overview](/help/en/ecs/user-guide/overview-10). The Cloud Assistant plugin is pre-installed when you create a GPU-accelerated instance.

## **Supported instances**

Cloud Assistant can install the GRID driver only on Linux vGPU-accelerated instances of the following instance families: **sgn8ia**, **vgn6i-vws**, **vgn7i-vws**, and **sgn7i-vws**. For more information, see [vGPU-accelerated instance families (vgn and sgn series)](/help/en/egs/vgpu-accelerated-instance-families). The following table lists the supported GRID driver and CUDA versions for these instances.

**Instance family**

**Public image version**

**NVIDIA GRID driver version**

**CUDA version**

sgn8ia

-   Alibaba Cloud Linux 2/3
    
-   Ubuntu 22.04/20.04/18.04
    
-   CentOS 8.x/7.x
    

535.183.06

12.2

vgn6i-vws,

vgn7i-vws, and sgn7i-vws

-   Alibaba Cloud Linux 2/3
    
-   Ubuntu 22.04/20.04/18.04
    
-   CentOS 8.x/7.x
    

470.256.03

11.4

**Important**

You do not need to install a GRID driver on Linux GPU-accelerated compute-optimized instances, such as gn7i, gn6i, ebmgn7i, and ebmgn6i. The standard driver from the official NVIDIA website supports graphics acceleration. For more information, see [GPU-accelerated compute-optimized instance families (gn, ebm, and scc series)](/help/en/egs/gpu-accelerated-compute-optimized-instance-families).

## **Procedure**

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Maintenance & Monitoring** > **Cloud Assistant**.
    
3.  In the top-left corner of the page, select the region where your target instance is located.
    
    ![地域.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6739339961/p709215.png)
    
4.  On the **ECS Instances** tab, find the target instance and click **Run Command** in the **Actions** column.
    
    ![linux.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6739339961/p724829.png)
    
5.  In the **Create Command** pane, configure the parameters in the **Command Information** section.
    
    Configure the main parameters as described below and keep the default values for the other parameters. For more information, see [Create a command in the ECS console](/help/en/ecs/user-guide/create-a-command#section-e69-uaz-q0z).
    
    **Important**
    
    You must set the parameters to the exact values provided below. Otherwise, the Cloud Assistant command may fail to run.
    
    ![linux命令.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6739339961/p724848.png)
    
    -   ① **Command Type**: Select **Shell**.
        
    -   ② **Command content**: Paste the following command. For more examples of Shell commands, see [View the system configurations of ECS instances](/help/en/ecs/user-guide/view-instance-configurations#concept-2417790).
        
        -   Cloud Assistant command for **sgn8ia** instances:
            
            ```
            if acs-plugin-manager --list --local | grep gpu_grid_driver_install > /dev/null 2>&1
            then
                acs-plugin-manager --remove --plugin gpu_grid_driver_install
            fi
            
            acs-plugin-manager --exec --plugin gpu_grid_driver_install
            ```
            
        -   Cloud Assistant command for **vgn6i-vws**, **vgn7i-vws**, and **sgn7i-vws** instances:
            
            ```
            if acs-plugin-manager --list --local | grep grid_driver_install > /dev/null 2>&1
            then
                acs-plugin-manager --remove --plugin grid_driver_install
            fi
            
            acs-plugin-manager --exec --plugin grid_driver_install
            ```
            
    -   ③ **Timeout**: The maximum execution time in seconds. If the command takes longer than this time to run, Cloud Assistant forcibly terminates the process. Set the value to **600**.
        
        **Note**
        
        The **Timeout** value must be a positive integer in seconds. The value can range from 10 to 86,400 (24 hours).
        
6.  Click **Run** install the GRID driver by using the Cloud Assistant command.
    
    After the command finishes, you can view the execution result on the execution details page.
    
    **Important**
    
    If another version of the GRID driver is already installed on the instance, Cloud Assistant automatically uninstalls the existing version before installing the latest one.
    
    ![linux安装成功.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6739339961/p725658.png)
    
7.  Connect to the GPU-accelerated instance.
    
    For more information, see [Connect to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
8.  Run the following command to verify that the GRID driver is installed.
    
    ```
    nvidia-smi
    ```
    
    If the command output is similar to the following, the GRID driver has been installed or upgraded successfully.
    
    ![SMI.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2531739171/p807567.jpg)
    

## Verify the installation

This section describes how to use a GLX test program to verify graphics acceleration on an Ubuntu 18.04 64-bit instance after installing the GRID driver.

1.  Prepare the graphics test environment.
    
    1.  Run the following command to install x11vnc:
        
        ```
        apt-get install x11vnc
        ```
        
    2.  Run the `lspci | grep NVIDIA` command to find the GPU BusID.In this example, the GPU BusID is `00:07.0`.
        
        In this example, the GPU BusID is `00:07.0`.
        
    3.  Configure the X Server environment and reboot the system.
        
        1.  Run the `nvidia-xconfig --enable-all-gpus --separate-x-screens` command.
            
        2.  Edit the `/etc/X11/xorg.conf` file and add the GPU BusID in the `Section "Device"` block. For example: `BusID "PCI:0:7:0"`.![重启.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163868071/p746193.png)
            
        3.  Run the `reboot` command.
            
        
2.  Run the following command to install the GLX test program.
    
    ```
    apt-get install mesa-utils                    
    ```
    
3.  Run the `startx` command to start X Server.
    
    -   If the `startx` command is not found, run `apt-get install xinit` to install it.
        
    -   The `startx` command might return a `hostname: Name or service not known` error. This error does not prevent the X Server from starting. To resolve it, run the `hostname` command to find your instance's hostname. Then, edit the `/etc/hosts` file and replace the hostname entry after `127.0.0.1` with your actual hostname.![启动.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163868071/p746194.png)
        
    
4.  Open a new SSH client terminal and run the following command to start x11vnc.
    
    ```
    x11vnc -display :1
    ```
    
    If output similar to the following figure appears, x11vnc has started successfully. You can now connect to the instance with a VNC client, such as VNC Viewer.![连接.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1163868071/p746196.png)
    
5.  To allow VNC connections to the instance, log on to the [ECS console](https://ecs.console.alibabacloud.com/), and in the security group of the instance, add a security group rule to allow inbound traffic on TCP port 5900.
    
    For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
6.  On your local machine, use a VNC client, such as VNC Viewer, to connect to the instance at `<public_ip_address>:5900` and access the KDE desktop.
    
7.  Use the `glxinfo` command to view the configurations supported by the current GRID driver.
    
    1.  Open a new SSH client terminal.
        
    2.  Run the `export DISPLAY=:1` command.
        
    3.  Run the `glxinfo -t` command to list the configurations supported by the current GRID driver.
        
8.  Follow these steps to test the GRID driver with the `glxgears` command.
    
    1.  On the KDE desktop, right-click the desktop and select **Run Command**.
        
    2.  Run the `glxgears` command to start the gear graphics test program.
        
        If a window with moving gears appears, as shown in the following figure, the GRID driver is functioning correctly.![驱动正常.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2163868071/p746195.png)
        

## **References**

-   For Windows-based vGPU-accelerated instances, install a GRID driver to enable graphics acceleration for scenarios, such as OpenGL, Direct3D, and cloud gaming. For more information, see [Install GRID drivers on Windows GPU-accelerated compute-optimized or vGPU-accelerated instances](/help/en/egs/user-guide/install-a-grid-driver-on-a-gpu-accelerated-compute-optimized-windows-instance-or-a-vgpu-accelerated-windows-instance).
    
-   To automatically install the GRID driver when you create GPU-accelerated instances. For more information, see [Create a GPU-accelerated instance](/help/en/egs/user-guide/create-a-gpu-instance).
