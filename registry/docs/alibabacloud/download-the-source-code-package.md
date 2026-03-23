If you need to enable a specific feature in the Alibaba Cloud Linux kernel, or disable a default feature for performance or security reasons, you can build custom kernel RPM packages from the source code. This process ensures that your custom kernel remains compatible with the Alibaba Cloud Linux distribution. This guide explains how to modify and build Alibaba Cloud Linux kernel RPM packages in a container on an Alibaba Cloud Linux Elastic Compute Service (ECS) instance.

## **Prerequisites**

You need an ECS instance running Alibaba Cloud Linux. For more information, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).

-   **Image**: Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3.
    
-   **Instance type**: An instance type with 32 vCPUs or more is recommended.
    
    **Note**
    
    Building RPM packages is time-consuming. To speed up the process, use an instance with 32 vCPUs or more.
    

## **Step 1: Prepare the environment**

1.  Connect to your ECS instance.
    
    For more information, see [Connect to a Linux instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following commands to download the Docker image and enter the container.
    
    ```
    #Install Docker.
    sudo yum install -y docker
    #Pull a Docker image.
    sudo docker pull <image_url>
    #Start the Docker container.
    sudo docker run -itd --net host --name alinux-build <image_url> bash
    #Access the Docker container.
    sudo docker exec -it alinux-build bash
    ```
    
    Replace `<image_url>` with the Docker image URL for your Alibaba Cloud Linux version.
    
    Image
    
    Docker image URL
    
    Alibaba Cloud Linux 2
    
    alibaba-cloud-linux-2-registry.cn-hangzhou.cr.aliyuncs.com/alinux2/alinux2
    
    Alibaba Cloud Linux 3
    
    alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/alinux3
    
    This example uses the Docker image for Alibaba Cloud Linux 3.
    
    ```
    sudo yum install -y docker
    sudo docker pull alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/alinux3
    sudo docker run -itd --net host --name alinux-build alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/alinux3 bash
    sudo docker exec -it alinux-build bash
    ```
    

## **Step 2: Download the source code**

Run the following commands to download and install the source RPM package.

```
# Download the source code package.
yum install -y wget
wget <rpm_url>/<src.rpm_name>
# Install the source code package.
rpm -ivh <src.rpm_name>
```

-   `<rpm_url>` is the URL to the RPM package repository for Alibaba Cloud Linux 2 or 3.
    
    Image
    
    RPM package URL
    
    Alibaba Cloud Linux 2
    
    [https://mirrors.aliyun.com/alinux/2/plus/source/SRPMS/](https://mirrors.aliyun.com/alinux/2/plus/source/SRPMS/)
    
    Alibaba Cloud Linux 3
    
    [https://mirrors.aliyun.com/alinux/3/plus/source/SRPMS/kernels/](https://mirrors.aliyun.com/alinux/3/plus/source/SRPMS/kernels/)
    
-   `<src.rpm_name>` is the name of the source RPM package you want to modify.
    

This example downloads the `kernel-5.10.134-13.1.al8.src.rpm` package for Alibaba Cloud Linux 3.

```
yum install -y wget
wget https://mirrors.aliyun.com/alinux/3/plus/source/SRPMS/kernels/kernel-5.10.134-13.1.al8.src.rpm
rpm -ivh kernel-5.10.134-13.1.al8.src.rpm
```

After the source package is installed, the files are saved in the `/root/rpmbuild` directory. To view the files, run the `ls /root/rpmbuild` command. The output is similar to the following:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0635770861/p603485.png)

## **Step 3: Modify the source code**

1.  Run the following commands to install dependencies.
    
    ```
    yum install -y rpm-build yum-utils
    yum-builddep -y <src.rpm_name>
    ```
    
    Replace `<src.rpm_name>` with the name of your source RPM package. In this example, the package name is `kernel-5.10.134-13.1.al8.src.rpm`.
    
    ```
    yum install -y rpm-build yum-utils
    yum-builddep -y kernel-5.10.134-13.1.al8.src.rpm
    ```
    
2.  Run the following commands to extract the source package.
    
    ```
    # Enter the source code directory.
    cd /root/rpmbuild/SOURCES
    # Decompress the source code package.
    tar xf <Name of the compressed source code package>
    ```
    
    In this example, `<source_archive_name>` is `linux-5.10.134-13.1.al8.tar.xz`.
    
    ```
    cd /root/rpmbuild/SOURCES
    tar xf linux-5.10.134-13.1.al8.tar.xz
    ```
    
3.  Run the following command to go to the extracted directory.
    
    ```
    cd <Name of the decompressed source code package>
    ```
    
    In this example, `<extracted_source_directory_name>` is `linux-5.10.134-13.1.al8`.
    
    ```
    cd linux-5.10.134-13.1.al8
    ```
    
4.  (Optional) Modify the configuration files.
    
    Modify the source code or a `config` file as needed. This section covers how to modify a `config` file.
    
    1.  Run the following command to view and select the configuration file you want to modify.
        
        ```
        ls /root/rpmbuild/SOURCES
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0635770861/p603513.png)
        
        There are four `config` files in the `/root/rpmbuild/SOURCES` directory.
        
        **config file**
        
        **Description**
        
        kernel-5.10.134-aarch64.config
        
        The configuration file of the Arm architecture and the release version.
        
        kernel-5.10.134-aarch64-debug.config
        
        The configuration file of the Arm architecture and the debug version, which can be used only for testing.
        
        kernel-5.10.134-x86\_64.config
        
        The configuration file of the x86 architecture and the release version.
        
        kernel-5.10.134-x86\_64-debug.config
        
        The configuration file of the x86 architecture and the debug version, which is used only for testing.
        
        Choose the file that matches your platform's architecture. You can also modify the configurations for both platforms.
        
    2.  Run the following command to modify the configuration file.
        
        This example uses the `kernel-5.10.134-x86_64.config` file for the x86 architecture.
        
        1.  Copy the configuration file to the source directory.
            
            ```
            cd /root/rpmbuild/SOURCES
            cp kernel-5.10.134-x86_64.config linux-5.10.134-13.1.al8/.config
            ```
            
        2.  Go to the source directory.
            
            ```
            cd linux-5.10.134-13.1.al8
            ```
            
        3.  Apply default values for any new configuration options.
            
            ```
            make olddefconfig
            ```
            
        4.  To make changes, use `make menuconfig`. This command ensures that all configuration dependencies are handled correctly.
            
            ```
            make menuconfig
            ```
            
            The `menuconfig` interface opens. To search for the item you want to modify, press the `/` key, and then make changes as needed.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0635770861/p604951.png)
            
        5.  To overwrite the original file, copy the modified configuration file.
            
            ```
            cp .config ../kernel-5.10.134-x86_64.config
            ```
            
        6.  Return to the parent directory.
            
            ```
            cd ..
            ```
            
        
        **Note**
        
        You can use the same method to modify the configuration file for the Arm architecture.
        
5.  Run the following commands to update the version number.
    
    ```
    cd /root/rpmbuild/SPECS
    vi kernel.spec
    ```
    
    Press `I` to enter Insert mode. When you are finished, press `Esc`, type `:wq`, and press `Enter` to save and exit.
    
    **Versioning recommendations**: To distinguish your build from an official version, update the version number. For example:
    
    -   Change a major version like `5.10.134-12` to `5.10.134-12.0.1`.
        
    -   Change a minor version like `5.10.134-13.1` to `5.10.134-13.1.1`.
        
    
    This example updates the version number from `5.10.134-13.1` to `5.10.134-13.1.1`.
    
    In the file, find the `%define pkgrelease %{?KREL:%{KREL}}%{?!KREL:13.1}` line and update it to `%define pkgrelease %{?KREL:%{KREL}}%{?!KREL:13.1.1}`.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2073455071/p606477.png)
    
    You can also describe your changes in the changelog section of the `kernel.spec` file. ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2073455071/p606478.png)
    

## **Step 4: Rebuild the RPM packages**

1.  Run the following commands to recompress the modified source code.
    
    In this example, the source directory name is `linux-5.10.134-13.1.al8`.
    
    1.  Go to the `SOURCES` directory.
        
        ```
        cd /root/rpmbuild/SOURCES/
        ```
        
    2.  Rename the source directory.
        
        In the previous step, the version number was updated from `5.10.134-13.1` to `5.10.134-13.1.1`. Therefore, rename the source directory to `linux-5.10.134-13.1.1.al8`.
        
        ```
        mv linux-5.10.134-13.1.al8 linux-5.10.134-13.1.1.al8
        ```
        
    3.  Recompress the directory into a tarball.
        
        ```
        tar cJf linux-5.10.134-13.1.1.al8.tar.xz linux-5.10.134-13.1.1.al8
        ```
        
    4.  Remove the original source directory and the old tarball.
        
        ```
        rm -rf linux-5.10.134-13.1.al8
        rm -f linux-5.10.134-13.1.al8.tar.xz
        ```
        
2.  Run the following command to rebuild the source RPM package.
    
    ```
    cd /root
    rpmbuild -bs rpmbuild/SPECS/kernel.spec
    ```
    
    When the command finishes, the output shows the new source RPM package's location: `/root/rpmbuild/SRPMS/kernel-5.10.134-13.1.1.al8.src.rpm`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2073455071/p603525.png)
    
3.  (Optional) Run the following command to downgrade the `dwarves` package.
    
    If your installed source RPM kernel version is `5.10.134-13.1.al8` or earlier, the build requires `dwarves-1.22-1.al8` to prevent errors.
    
    ```
    yum downgrade dwarves-1.22-1.al8 -y
    ```
    
4.  Run the following command to rebuild the RPM packages.
    
    ```
    rpmbuild --rebuild /root/rpmbuild/SRPMS/<src.rpm_name>
    ```
    
    Replace `<src.rpm_name>` with the name of your modified source RPM package. In this example, the package name is `kernel-5.10.134-13.1.1.al8.src.rpm`.
    
    ```
    rpmbuild --rebuild /root/rpmbuild/SRPMS/kernel-5.10.134-13.1.1.al8.src.rpm
    ```
    
    The build process is time-consuming. When the following message appears, the RPM packages have been built successfully. ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0635770861/p604985.png)
