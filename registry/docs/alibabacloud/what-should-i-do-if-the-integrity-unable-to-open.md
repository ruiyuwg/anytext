This topic describes the cause of and resolution to the issue that the "integrity: Unable to open file" error messages appear in the kernel logs of an Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 2.

## Problem description

When you run the `dmesg` command to view the kernel logs of an ECS instance that runs Alibaba Cloud Linux 2, "integrity: Unable to open file" error messages appear in the kernel logs.

-   Image: `aliyun_2_1903_x64_20G_alibase_20200529.vhd` and later versions.
    
-   Kernel: `kernel-4.19.91-19.1.al7` and later versions. You can run the `uname -r` command to view the kernel version.
    

```
[    2.960294] integrity: Unable to open file: /etc/keys/x509_ima.der (-2)
[    2.960295] integrity: Unable to open file: /etc/keys/x509_evm.der (-2)
```

## Cause

The CONFIG\_IMA\_LOAD\_X509 and CONFIG\_EVM\_LOAD\_X509 features are enabled in the kernel of Alibaba Cloud Linux 2, and the following configurations are specified to provide the required certificate paths for the kernel integrity subsystem:

```
CONFIG_IMA_X509_PATH="/etc/keys/x509_ima.der"
CONFIG_EVM_X509_PATH="/etc/keys/x509_evm.der"
```

-   If the operating system of the ECS instance is not a trusted system, the preceding path configurations are not specified and the corresponding files cannot be opened. As a result, the "integrity: Unable to open file" error messages appear.
    
-   If the operating system of the ECS instance is a trusted system, the preceding path configurations are specified. In this case, no error messages appear when the files are opened.
    

**Note**

Run the `ll /dev/tpm*` command. If `/dev/tpm0` or `/dev/tpmrm0` is displayed, the operating system is a trusted system.

## Solution

This issue is only related to configurations and does not affect the operating system. You can ignore the error messages.
