An error message appears if you upgrade the kernel of an Alibaba Cloud Linux 3.8 image. This topic describes the impact of and the solution to the issue.

## **Problem description**

When you upgrade the kernel of an Alibaba Cloud Linux 3.8 image, an error message similar to the message shown in the following figure appears during the installation of the kernel package but the kernel package can be installed as expected.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2332629071/p718677.png)

## **Cause**

To allow Alibaba Cloud Linux 3.8 images to support more instance types, Alibaba Cloud adds more kernel modules to the dracut tool of the images. Specific added kernel modules are built into the kernel vmlinuz file. As a result, the dracut tool cannot find the kernel modules and reports an error during the subsequent installation of the kernel package. The error does not affect the kernel package installation or the kernel version upgrade.

## **Impact scope**

Images whose release dates in the image ID are in the range from 20230727 to 20230925 and that run the following Alibaba Cloud Linux 3 versions:

-   Alibaba Cloud Linux 3.2104 LTS 64-bit
    
-   Alibaba Cloud Linux 3.2104 LTS 64-bit (Quick Start)
    
-   Alibaba Cloud Linux 3.2104 LTS 64-bit (UEFI)
    
-   Alibaba Cloud Linux 3.2104 LTS 64-bit for Arm
    

You can run the `cat /etc/image-id` command to query the image ID and image version. A command output similar to the following command output is returned:

```
image_name="Alibaba Cloud Linux 3.2104 LTS 64 bit"
image_id="aliyun_3_x64_20G_alibase_20230727.vhd"
release_date="20230728162541"
```

## **Solution**

1.  Log on to the Elastic Compute Service (ECS) instance that uses an Alibaba Cloud Linux 3.8 image.
    
    For more information, see [Connect to a Linux instance by using a password or key](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following commands to remove duplicate kernel modules from the kernel:
    
    -   x86 architecture
        
        ```
        sudo sed -i "s/virtio_blk//" /etc/dracut.conf.d/virt-drivers.conf
        ```
        
    -   Arm architecture
        
        ```
        sudo sed -i "s/xen-blkfront xen-netfront//" /etc/dracut.conf.d/virt-drivers.conf
        ```
        
3.  Run the following command to upgrade the kernel and check whether the error is resolved:
    
    ```
    sudo yum install kernel
    ```
