Alibaba Cloud Linux images are available in the VHD and QCOW2 formats and have built-in cloud-init. You can use the images on on-premises virtual machines. Only kernel-based virtual machines (KVMs) are supported. This topic describes how to use Alibaba Cloud Linux 2 or 3 images on on-premises virtual machines.

## Background information

In this topic, the on-premises operating system is Anolis OS. An Alibaba Cloud Linux image is used to create a KVM, and cloud-init is used to initialize the system settings of the KVM. The NoCloud data source is used to create on-premises configuration files. After the configuration files are attached to the KVM as virtual disks, the KVM can be started. To download Anolis OS, go to the [Anolis OS download page](https://openanolis.cn/download) This topic is intended for users who are familiar with KVMs.

## Step 1: Download an Alibaba Cloud Linux image to your on-premises virtual machine

You can download an Alibaba Cloud Linux image in the VHD or QCOW2 format to an on-premises virtual machine from the following URLs:

-   Alibaba Cloud Linux 3: [Alibaba Cloud Linux 3 On-premise Image](http://mirrors.aliyun.com/alinux/3/image/)
    
-   Alibaba Cloud Linux 2: [Alibaba Cloud Linux 2 On-premise Image](https://mirrors.aliyun.com/alinux/image/)
    

## Step 2: Obtain the seed.img boot image from your on-premises virtual machine

Alibaba Cloud Linux images cannot directly start virtual machines. You must configure the seed.img boot image and information such as the network, account, and YUM repository for the boot image.

**Important**

-   In most cases, the image is named seed.img. You can change the name of the image, but we recommend that you do not change the name of the image.
    
-   The seed.img boot image contains only the configuration files that are required to start cloud-init. The image does not contain Alibaba Cloud Linux system files.
    

You can use one of the following methods to obtain the seed.img boot image:

-   Method 1: Download the seed.img boot image
    
    Alibaba Cloud Linux 3 and Alibaba Cloud Linux 2 provide the seed.img boot image file. You can download the **seed.img** boot image from the following URLs:
    
    -   Alibaba Cloud Linux 3: [Alibaba Cloud Linux 3 On-premise Image](http://mirrors.aliyun.com/alinux/3/image/)
        
    -   Alibaba Cloud Linux 2: [Alibaba Cloud Linux 2 On-premise Image](https://mirrors.aliyun.com/alinux/image/)
        
    
    **Note**
    
    The configurations in the image cannot be modified. In this case, the image may not be suitable for specific scenarios. Before you use the image, make sure that you are familiar with the image.
    
-   Method 2: Use the NoCloud data source to manually generate the seed.img boot image
    
    **Note**
    
    The NoCloud data source is a cloud-init data source that can provide configuration files in an on-premises environment. The files can be read and used by virtual machines.
    
    1.  In an on-premises directory, create two configuration files named `meta-data` and `user-data`.
        
        The two files are included as part of the `seed.img` boot image. When a virtual machine starts, cloud-init reads the configuration files and initializes the virtual machine based on the configuration files.
        
        1.  Create a directory named `seed` and go to the directory.
            
            ```
            sudo mkdir seed
            sudo cd seed/
            ```
            
        2.  Create a configuration file named `meta-data`.
            
            The following example shows the content of the configuration file. The name of the virtual machine is `alinux-host`. You can change the name based on your business requirements.
            
            ```
            #cloud-config
            #vim:syntax=yaml
            
            local-hostname: alinux-host                 
            ```
            
        3.  Create a configuration file named `user-data`.
            
            The following example shows the file content. You can modify the configuration as needed. If you use this example configuration directly, ensure that you fully understand the content of the image file.
            
            -   Adds an account with the username `alinux` and the password `aliyun`, and grants it permission to execute `sudo` commands.
                
            -   Adds the Alibaba Cloud Linux 3 Yellowdog Updater, Modified (YUM) source.
                
                #### **Alibaba Cloud Linux 3**
                
                ```
                #cloud-config
                #vim:syntax=yaml
                
                # Create an account named alinux and grant the account the permissions to run sudo commands. 
                users:
                  - default
                  - name: alinux
                    sudo: ['ALL=(ALL)   ALL']
                    plain_text_passwd: aliyun
                    lock_passwd: false
                
                # Create a YUM repository for Alibaba Cloud Linux 3. 
                yum_repos:
                    alinux3-module:
                        name: alinux3-module
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/module/$basearch/
                        enabled: 1
                        gpgcheck: 1
                        gpgkey: https://mirrors.aliyun.com/alinux/$releasever/RPM-GPG-KEY-ALINUX-3
                    alinux3-updates:
                        name: alinux3-updates
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/updates/$basearch/
                        enabled: 1
                        gpgcheck: 1
                        gpgkey: https://mirrors.aliyun.com/alinux/$releasever/RPM-GPG-KEY-ALINUX-3
                    alinux3-plus:
                        name: alinux3-plus
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/plus/$basearch/
                        enabled: 1
                        gpgcheck: 1
                        gpgkey: https://mirrors.aliyun.com/alinux/$releasever/RPM-GPG-KEY-ALINUX-3
                    alinux3-powertools:
                        name: alinux3-powertools
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/powertools/$basearch/
                        gpgcheck: 1
                        enabled: 1
                        gpgkey: https://mirrors.aliyun.com/alinux/$releasever/RPM-GPG-KEY-ALINUX-3
                    alinux3-os:
                        name: alinux3-os
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/os/$basearch/
                        gpgcheck: 1
                        enabled: 1
                        gpgkey: https://mirrors.aliyun.com/alinux/$releasever/RPM-GPG-KEY-ALINUX-3
                ```
                
                #### **Alibaba Cloud Linux 2**
                
                ```
                #cloud-config
                #vim:syntax=yaml
                
                # Create an account named alinux and grant the account the permissions to run sudo commands. 
                users:
                  - default
                  - name: alinux
                    sudo: ['ALL=(ALL)   ALL']
                    plain_text_passwd: aliyun
                    lock_passwd: false
                
                # Create a YUM repository for Alibaba Cloud Linux 2. 
                yum_repos:
                    base:
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/os/$basearch/
                        enabled: true
                        gpgcheck: true
                        gpgkey: https://mirrors.aliyun.com/alinux/RPM-GPG-KEY-ALIYUN
                        name: Aliyun Linux - $releasever - Base - mirrors.aliyun.com
                    updates:
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/updates/$basearch/
                        enabled: true
                        gpgcheck: true
                        gpgkey: https://mirrors.aliyun.com/alinux/RPM-GPG-KEY-ALIYUN
                        name: Aliyun Linux - $releasever - Updates - mirrors.aliyun.com
                    extras:
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/extras/$basearch/
                        enabled: true
                        gpgcheck: true
                        gpgkey: https://mirrors.aliyun.com/alinux/RPM-GPG-KEY-ALIYUN
                        name: Aliyun Linux - $releasever - Extras - mirrors.aliyun.com
                    plus:
                        baseurl: https://mirrors.aliyun.com/alinux/$releasever/plus/$basearch/
                        enabled: true
                        gpgcheck: true
                        gpgkey: https://mirrors.aliyun.com/alinux/RPM-GPG-KEY-ALIYUN
                        name: Aliyun Linux - $releasever - Plus - mirrors.aliyun.com
                ```
                
    2.  (Optional) If you use an Alibaba Cloud Linux 3 operating system, enable the epel-testing repository.
        
        1.  Open the `epel-testing.repo` file.
            
            ```
            sudo vim /etc/yum.repos.d/epel-testing.repo
            ```
            
        2.  Press the **i** key to enter the edit mode and replace `enabled=0` with `enabled=1`.
            
            ```
            [epel-testing]
            name=Extra Packages for Enterprise Linux 8 - Testing - $basearch
            baseurl=http://mirrors.cloud.aliyuncs.com/epel/testing/8/Everything/$basearch
            enabled=0
            gpgcheck=1
            countme=1
            gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-8
            ```
            
        3.  Press the `Esc` key and enter **:wq** to save the modifications.
            
    3.  Run the following command to install the `cloud-utils` software package:
        
        ```
        sudo yum install -y cloud-utils
        ```
        
    4.  Run the following command to generate the `seed.img` boot image:
        
        ```
        sudo cloud-localds seed.img user-data meta-data
        ```
        

## Step 3: Start your on-premises virtual machine

To start a KVM, you can use one of the following methods:

#### **Use libvirt to start the KVM**

1.  Create a configuration file in the XML format on your on-premises computer.
    
    The following example shows the content of the configuration file. The file name is `alinux3.xml` for Alibaba Cloud Linux 3 and `alinux2.xml` for Alibaba Cloud Linux 2. You can modify the content of the configuration file based on your business requirements.
    
    #### **Alibaba Cloud Linux 3**
    
    ```
    <domain type='kvm'>
        <name>alinux3</name>
        <memory>1048576</memory><!-- Set the memory size to 1 GB.  -->
        <vcpu>1</vcpu>
        cpu mode='host-passthrough'><!-- Start the KVM on the server of the corresponding architecture.  -->
        </cpu>
        <os>
            <type arch='x86_64'>hvm</type><!-- If the architecture of the server is ARM 64-bit, set arch to aarch64.  -->
            <boot dev='hd'/>
        </os>
        <clock sync="localtime"/>
        <on_poweroff>destroy</on_poweroff>
        <on_reboot>restart</on_reboot>
        <on_crash>restart</on_crash>
        <devices>
            <emulator>/usr/bin/qemu-kvm</emulator><!-- Configure a KVM path based on the operating system. For example, the KVM path for Ubuntu is /usr/bin/kvm.  -->
            <disk type='file' device='disk'><!-- Specify the type parameter based on the image format. Set type to qcow2 if the image is in the QCOW2 format, and set type to vpc if the image is in the VHD format.  -->
                <driver name='qemu' type='qcow2' cache='none' dataplane='on' io='native'/> <!-- If you want to create a snapshot in the QCOW2 format, disable dataplane.  -->
                <source file='path'/> <!-- Enter the absolute path of the Alibaba Cloud Linux 3 image.  -->
                <target dev='vda' bus='virtio'/>
            </disk>
            <!-- Add information about the seed.img boot image.  -->
            <disk type='file' device='disk'>
                <driver name='qemu' type='raw'/>
                <source file='/path/to/your/seed.img'/> <!-- Enter the absolute path of the seed.img boot image.  -->
                <target dev='vdb' bus='virtio'/>
            </disk>
            <interface type='network'>
                <source network='default'/>
                <model type='virtio'/>
            </interface>
            <console type='pty'>
                <target type='virtio' port='0'/>
            </console>
            <video>
                <model type='cirrus' vram='9216' heads='1'/>
                <alias name='video0'/>
            </video>
            <input type='tablet' bus='usb'/>
            <input type='mouse' bus='ps2'/>
            <graphics type='vnc' port='-1' autoport='yes'/>
        </devices>
    </domain>
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    ```
    <domain type='kvm'>
        <name>alinux2</name>
        <memory>1048576</memory> <!-- Set the memory size to 1 GB.  -->
        <vcpu>1</vcpu>
        <os>
            <type arch='x86_64'>hvm</type>
            <boot dev='hd'/>
        </os>
        <clock sync="localtime"/>
        <on_poweroff>destroy</on_poweroff>
        <on_reboot>restart</on_reboot>
        <on_crash>restart</on_crash>
        <devices>
            <emulator>/usr/bin/qemu-kvm</emulator><!-- Configure a KVM path based on the operating system. For example, the KVM path for Ubuntu is /usr/bin/kvm. -->
            <disk type='file' device='disk'><!-- Specify the type parameter based on the image format. Set type to qcow2 if the image is in the QCOW2 format, and set type to vpc if the image is in the VHD format.  -->
                <driver name='qemu' type='qcow2' cache='none' dataplane='on' io='native'/> <!-- If you want to create a snapshot in the QCOW2 format, disable dataplane.  -->
                <source file='path'/> <!-- Enter the absolute path of the Alibaba Cloud Linux 2 image.  -->
                <target dev='vda' bus='virtio'/>
            </disk>
            <!-- Add information about the seed.img boot image.  -->
            <disk type='file' device='disk'>
                <driver name='qemu' type='raw'/>
                <source file='/path/to/your/seed.img'/> <!-- Enter the absolute path of the seed.img boot image.  -->
                <target dev='vdb' bus='virtio'/>
            </disk>
            <interface type='network'>
                <source network='default'/>
                <model type='virtio'/>
            </interface>
            <console type='pty'>
                <target type='virtio' port='0'/>
            </console>
            <video>
                <model type='cirrus' vram='9216' heads='1'/>
                <alias name='video0'/>
            </video>
            <input type='tablet' bus='usb'/>
            <input type='mouse' bus='ps2'/>
            <graphics type='vnc' port='-1' autoport='yes'/>
        </devices>
    </domain>
    ```
    
2.  Run the `virsh` command to start the KVM. The following code shows sample commands.
    
    **Note**
    
    By default, libvirt is started by a common user. Make sure that common users have the permissions to manage image files and the paths of the image files.
    
    #### **Alibaba Cloud Linux 3**
    
    ```
    sudo virsh define alinux3.xml
    virsh start <KVMName>   # Enter the name of the KVM. You can run the sudo virsh list --name command to query the name of the KVM.
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    ```
    sudo virsh define alinux2.xml
    sudo virsh start <KVMName>    # Enter the name of the KVM. You can run the sudo virsh list --name command to query the name of the KVM.
    ```
    

#### **Run the** `**qemu-kvm**` **command to** start the KVM

Append the following parameter settings to the qemu-kvm command:

```
-drive file=/path/to/your/seed.img,if=virtio,format=raw
```

-   `/path/to/your/seed.img`: You can replace the path with the path of the seed.img boot image file.
    
-   `if=virtio`: virtio is used to connect to a virtual disk.
    
-   `format=raw`: The disk image file is in the RAW format.
    

Sample command:

```
sudo /usr/libexec/qemu-kvm -drive file=/home/ecs-user/seed/seed.img,if=virtio,format=raw
```

#### **Use the virt-manager graphical interface to start the KVM**

Before you start the KVM, find the configuration file of the KVM on your computer and add the absolute path of the seed.img boot image to the configuration file.

## **What to do next**

After the KVM is started, log on to the KVM by using the username and password that are included in the `user-data` configuration file.

**Note**

If you need to log to the KVM by using an SSH key pair, make sure that the public key of the SSH key pair is added to the cloud-init configuration file.

## **References**

-   [cloud-init](https://canonical-cloud-init.readthedocs-hosted.com/en/latest/) is a tool used to automatically initialize Linux virtual machines. The tool can perform a series of tasks when virtual machines start, including specifying the host name, configuring the network, and installing software packages.
    
-   libvirt, qemu-kvm, and virt-manager are commonly used to manage and run KVMs. For more information, see [Red Hat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/virtualization_deployment_and_administration_guide/index?spm=a2c63.p38356.879954.8.19345311iQWknm#sect-Installing_virtualization_packages_on_an_existing_Red_Hat_Enterprise_Linux_system-Installing_the_virtualization_packages_with_yum).
