The Logical Volume Manager (LVM) lets you combine data disks or partitions into a single Storage Pool that can be dynamically expanded.

## **How it works**

Creating a logical volume (LV) involves four main steps:

1.  **Create a physical volume (pvcreate):** Mark a data disk for use by LVM.
    
2.  **Create a volume group (vgcreate):** Combine the marked Physical Volumes (PV) into a Storage Pool.
    
3.  **Create a LV (lvcreate):** Carve out a logical partition of a specific size from the Volume Group (VG).
    
4.  **Create and mount a file system (mkfs & mount):** Create a file system and a mount point (access path) for the LV.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1139401671/CAEQThiBgMCH0LuX0BkiIDliMmNiOTdhYzA0NDQwYzJiMTllODBhMzU3N2Q3MmI43743795_20230609154853.955.svg)

As shown in the diagram, two 40 GiB data disks (`/dev/vdb` and `/dev/vdc`) are initialized as PV and added to a VG named `vg_01`, forming an 80 GiB Storage Pool. A 55 GiB LV named `lv01` is then carved out from the pool for use.

## **Procedure**

### Step 1: Create a PV

**Important**

Creating a PV erases all data on the data disk. Ensure the data disk is empty or you have backed up all necessary data.

1.  Log on to the Elastic Compute Server (ECS) instance.
    
    1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance. Click **Connect** and select **Workbench**. Follow the on-screen prompts to log on and open the terminal.
        
2.  Install the LVM tool.
    
    #### **Alibaba Cloud Linux and CentOS**
    
    ```
    sudo yum install -y lvm2
    ```
    
    #### **Debian and Ubuntu**
    
    ```
    sudo apt-get install -y lvm2
    ```
    
3.  To find the target device names, run the `sudo lsblk -f` command.
    
    ```
    sudo lsblk -f
    ```
    
    ```
    NAME   FSTYPE LABEL UUID                                 MOUNTPOINT
    vda                                                      
    ├─vda1                                                   
    ├─vda2 vfat         7938-FA03                            /boot/efi
    └─vda3 ext4   root  33b46ac5-7482-4aa5-8de0-60ab4c3a4c78 /
    vdb                                                      
    vdc                                                      
    vdd                                                      
    └─vdd1                                   
    ```
    
    -   If the `FSTYPE` column is not empty, the device has already been initialized and cannot be used as a PV.
        
    -   If the `FSTYPE` column is empty:
        
        -   If the device does not have partitions, the **target device name** is the same as the device name. In the example, the **target device name** for data disk `vdb` is `vdb`, and for **data disk** `vdc` it is `vdc`.
            
        -   If the device has partitions, the **target device name** is the name of the desired partition. In the example, the **target device name** for data disk `vdd` is `vdd1`.
            
4.  Create the PVs.
    
    Separate device names with spaces. Replace `<target_device_name>` with the device names you found in the [previous step.](#180bcc800a3y5)
    
    ```
    sudo pvcreate /dev/<target device name>.../dev/<target device name>
    ```
    
    > For example, to use `vdb` and `vdc` as target devices, run `sudo pvcreate /dev/vdb /dev/vdc`. This command creates two 40 GiB PVs.
    
    Output including `successfully created` confirms the operation was successful.
    

### **Step 2: Create a** VG

1.  Create the VG.
    
    Specify a custom `<vg_name>` and replace `<target_device_name>` with the device names from [Step 1.](#180bcc800a3y5)
    
    ```
    sudo vgcreate <vg_name> /dev/<target device name>.../dev/<target device name>
    ```
    
    > For example, to create a VG named `vg_01` and add `vdb` and `vdc` to it, run: `sudo vgcreate vg_01 /dev/vdb /dev/vdc`.
    
    If the output includes `successfully created`, the VG was created successfully.
    
2.  Check the VG's free space.
    
    Run the `sudo vgs` command. Note the value in the `VFree` column, which indicates the remaining available capacity.
    
    ```
    sudo vgs
    ```
    

### **Step 3: Create a LV**

1.  Create the LV.
    
    ```
    sudo lvcreate -L <lv_size> -n <lv_name> <vg_name>
    ```
    
    > For example, to create an LV named `lv01` with a size of 55 GiB from the VG `vg_01`, run: `sudo lvcreate -L 55g -n lv01 vg_01`.
    
    **Parameter**
    
    **Description**
    
    `<lv_size>`
    
    Must be less than the [VG's available free space.](#step-b9l-1ex-t7t)
    
    `<lv_name>`
    
    A custom name for the new LV.
    
    `<vg_name>`
    
    The name of [the VG you created.](#step-sg7-em8-ybj)
    
    If the output is `Logical volume "<lv_name>" created`, the LV was created successfully.
    
2.  View the LV information.
    
    Run the `sudo lvdisplay` command. Note the `LV Path`. You will need it later to create the file system.
    
    ```
    sudo lvdisplay
    ```
    
    ```
      --- Logical volume ---
      LV Path                /dev/vg_01/lv01
      LV Name                lv01
      VG Name                vg_01
      LV UUID                NgcCdz-efSY-vCrm-E35b-Dg6p-LNYq-xxxxxx
      LV Write Access        read/write
      LV Creation host, time iZbp13kehgn0kh64txxxxxx, 2025-09-15 16:57:21 +0800
      LV Status              available
      # open                 0
      LV Size                55.00 GiB
      Current LE             14080
      Segments               2
      Allocation             inherit
      Read ahead sectors     auto
      - currently set to     256
      Block device           252:0
    ```
    
    In this example, the `LV Path` for `lv01` is `/dev/vg_01/lv01`.
    

### **Step 4: Create and mount a file system**

1.  Create a file system.
    
    The ext4 file system is better suited for handling small files than xfs.
    
    #### **ext4**
    
    1.  Create an ext4 file system.
        
        Replace `<lv_path>` with the LV Path you obtained in [Step 3.](#9939efce735si)
        
        ```
        sudo mkfs -t ext4 <lv_path>
        ```
        
        > In our example, the LV Path is `/dev/vg_01/lv01`, so you would run `sudo mkfs -t ext4 /dev/vg_01/lv01`.
        
    2.  Verify the creation.
        
        Run `sudo lsblk -f`. If the `FSTYPE` for the target device is `ext4`, the setup was successful.
        
    
    #### **xfs**
    
    1.  Install the xfsprogs tool.
        
        -   For Alibaba Cloud Linux and CentOS:
            
            ```
            sudo yum install -y xfsprogs
            ```
            
        -   For Debian and Ubuntu:
            
            ```
            sudo apt-get install -y xfsprogs
            ```
            
    2.  Create an xfs file system.
        
        Create an xfs file system.Replace `<lv_path>` with the LV Path you obtained in [Step 3.](#9939efce735si)
        
        ```
        sudo mkfs -t xfs <lv_path>
        ```
        
        > In our example, the LV Path is `/dev/vg_01/lv01`, so you would run `sudo mkfs -t xfs /dev/vg_01/lv01`.
        
    3.  Verify the creation.
        
        Run `sudo lsblk -f`. If the `FSTYPE` for the target device is `xfs`, the setup was successful.
        
    
2.  Create a mount point and mount the file system.
    
    ```
    sudo mkdir <mount point> && sudo mount <lv_path> <mount point>
    ```
    
    **Parameter**
    
    **Description**
    
    `<lv_path>`
    
    The LV Path obtained when you [created the LV.](#9939efce735si)
    
    `<mount point>`
    
    A custom, empty directory path that starts with `/`. Mounting to a non-empty directory hides its original contents, which can disrupt services and make the original files inaccessible.
    
    For example, to mount the LV at `/dev/vg_01/lv01` to a new directory `/mnt/lv01`, run: `sudo mkdir /mnt/lv01 && sudo mount /dev/vg_01/lv01 /mnt/lv01`.
    
3.  Check if the file system is mounted successfully.
    
    Run the `sudo lsblk` command. If the target device has a value in the `MOUNTPOINT` column, the file system is mounted successfully.
    
    **Important**
    
    This mount is temporary and will be lost after a reboot. To ensure the mount persists after a reboot, we recommend [configuring automatic mounting at startup.](/help/en/ecs/user-guide/configure-uuids-in-the-fstab-file-to-automatically-attach-data-disks)
    

## **FAQ**

-   #### **How do I add a new PV to an existing VG?**
    
    1.  Log on to the ECS instance.
        
        1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
            
        2.  On the instance details page, click **Connect** and select **Workbench**.
            
    2.  View PV and VG information.
        
        1.  View PVs.
            
            Run `sudo pvdisplay`. Find and record the PV name from the `PV Name` field.
            
        2.  View existing VGs.
            
            Run `sudo vgs`. Find and record the VG name from the `VG` field.
            
    3.  ##### **Add other created PVs.**
        
        Replace `<vg_name>` and `<pv_name>` with the information from the [previous step.](#fa8fd5ff78rn7)
        
        ```
        sudo vgextend <vg_name> <pv_name>...<pv_name>
        ```
        
-   #### Why do I get a "404 Not Found" error when installing **tools?**
    
    **Cause**: This error occurs because CentOS 6 and Debian 9/10/11 have reached their End-of-Life (EOL), and their default package repositories are no longer active.
    
    **Solution**: You must update your system's repository source to point to an official archive server. After updating the source, you can run the installation command again.
    
    -   For CentOS 6, follow the guide to [switch the CentOS repository source.](/help/en/ecs/user-guide/options-for-dealing-with-centos-linux-end-of-life#9af60aea1c07i)
        
    -   For Debian 9/10/11, follow the guide to [switch the Debian repository source.](/help/en/ecs/user-guide/other-operating-systems#28cccd1868txd)
        
-   #### **What does my LV mount information is missing after** a reboot, and how do I fix it?
    
    **Cause**: The volume was mounted manually, but an entry for it was not added to the `/etc/fstab` file. This file manages which file systems are automatically mounted at boot.
    
    **Solution**:
    
    1.  First, mount the file system manually again if it is not already mounted, as described in [Step 4.](#5b3c45abc8xsq)
        
    2.  To make the mount permanent, you must [configure automatic mounting at startup](/help/en/ecs/user-guide/configure-uuids-in-the-fstab-file-to-automatically-attach-data-disks) by adding an entry for the volume to your `/etc/fstab` file.
        
-   #### When running `lvcreate`, why do I get the error **"**Volume group "vg01" has insufficient free space (23038 extents): 51200 required.**" when creating a** LV**?**
    
    **Cause**: This error means the size you specified for the new LV (`-L <lv_size>`) is larger than the available free space in the `vg_01`.
    
    **Solution**:
    
    1.  Check the available space in your VG by running `sudo vgs` and noting the value in the `VFree` column.
        
    2.  Re-run the `lvcreate` command with a size that is less than or equal to the available free space.
        

## **Reference**

If your LV runs out of space, you can use the `lvextend` command to [extend the LV.](/help/en/ecs/user-guide/extend-an-lv-by-using-lvm#task-1797418)
