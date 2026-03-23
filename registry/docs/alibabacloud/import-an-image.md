You can import an on-premises image file to Alibaba Cloud to create a custom image. Use the custom image to launch new ECS instances or replace the operating system on the system disk of existing ECS instances. This supports diverse business requirements and application scenarios.

## Import a Linux image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0338872771/CAEQUxiBgIDzhIr75BkiIDM1YWU2NTY2NTU2NDRkNmY5ODhmMmM1NzEwNTk0Mjc44549071_20240725135523.090.svg)

1.  Review the [Alibaba Cloud Linux image requirements](/help/en/ecs/user-guide/cloud-marketplace-mirror-specification).
    
2.  Prepare a valid on-premises image file.
    
    1.  [Create a virtual machine and install an operating system](/help/en/ecs/user-guide/create-a-virtual-machine-and-install-an-operating-system-1#task-2261226): Install VirtualBox on the server where you build the image. In VirtualBox, create a virtual machine and install an operating system.
        
    2.  Install required plug-ins in the virtual machine.
        
        -   [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init#concept-e3k-vnm-xdb): To ensure that instances created from the image initialize successfully.
            
        -   [Install the virtio driver](/help/en/ecs/user-guide/install-the-virtio-driver#concept-dvq-cqs-xdb): To ensure that ECS instances created from the image start properly.
            
        -   [Customize a Linux image](/help/en/ecs/user-guide/customize-linux-images#concept-nt5-4km-xdb) (Optional): If your image's OS is not on the list of supported platforms and you cannot install cloud-init, select the **Customized Linux** option during import.
            
    3.  [Check and fix the image](/help/en/ecs/user-guide/check-whether-an-image-meets-the-import-requirements#StandardImageFacilitator): Use the `image compliance tool` to check for and fix compliance issues.
        
    4.  [Obtain the Linux image file](/help/en/ecs/user-guide/obtain-a-linux-image-file#task-2261275).
        
    5.  [Convert the image format](/help/en/ecs/user-guide/convert-the-format-of-an-image#concept-obj-qpm-xdb): ECS only supports images in RAW, VHD, QCOW2, and VMDK formats. If your image uses a different format, you must convert it first.
        
3.  [Import the custom image](/help/en/ecs/user-guide/import-a-custom-image#concept-w4x-4ms-xdb): Upload the image file to Object Storage Service (OSS) and then import it to ECS.
    
4.  [Use a custom image to create one or more instances](/help/en/ecs/user-guide/use-a-custom-image-to-create-one-or-more-instances#task-2258822).
    

## Import a Windows image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0338872771/CAEQTxiBgIDk5p.v0xkiIDllNDkwNDM5YjY1ODQ5ZWM4MWI3NTk1YTNhNmNhNmNm4549071_20240725135523.090.svg)

1.  Review the [Alibaba Cloud Windows image requirements](/help/en/ecs/user-guide/requirements-on-alibaba-cloud-marketplace-windows-images).
    
2.  Prepare a valid on-premises image file.
    
    1.  [Create a virtual machine and install an operating system](/help/en/ecs/user-guide/create-a-virtual-machine-and-install-an-operating-system#task-2261228): Install VirtualBox on the server where you build the image. In VirtualBox, create a virtual machine and install an operating system.
        
    2.  Install required plug-ins in the virtual machine.
        
        -   [Install Vminit](/help/en/ecs/user-guide/install-vminit): To ensure that instances created from the image initialize successfully.
            
        -   [Install the Alibaba Cloud virtio driver](/help/en/ecs/user-guide/install-the-virtio-driver-1#concept-dvq-cqs-xdb): To ensure that ECS instances created from the image start properly.
            
    3.  [Obtain the Windows image file](/help/en/ecs/user-guide/obtain-a-windows-image-file#task-2261289).
        
    4.  [Convert the image format](/help/en/ecs/user-guide/convert-the-format-of-an-image#concept-obj-qpm-xdb): ECS only supports images in RAW, VHD, QCOW2, and VMDK formats. If your image uses a different format, you must convert it first.
        
3.  [Import the custom image](/help/en/ecs/user-guide/import-a-custom-image#concept-w4x-4ms-xdb): Upload the image file to OSS and then import it to ECS.
    
4.  [Use a custom image to create one or more instances](/help/en/ecs/user-guide/use-a-custom-image-to-create-one-or-more-instances#task-2258822).
