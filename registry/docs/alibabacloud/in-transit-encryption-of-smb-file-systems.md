General-purpose Server Message Block (SMB) file systems of File Storage NAS (NAS) supports the encryption in transit feature. The feature uses Authenticated Encryption (AE) to protect the data transmitted between your Elastic Compute Service (ECS) instance and NAS file system against interception or tampering.

## Usage notes

-   Operating systems supported by clients
    
    You must use operating systems that support SMB 3.0 or later. The following table lists the operating systems.
    
    **Operating system**
    
    **Version**
    
    Windows Server
    
    -   Windows Server 2012 R2 Datacenter 64-bit (Chinese version) and later
        
    -   Windows Server 2012 R2 Datacenter 64-bit (English version) and later
        
    
    Alibaba Cloud Linux
    
    -   Alibaba Cloud Linux 2 (kernel version: 4.19.34 and later)
        
    -   Alibaba Cloud Linux 3
        
    
    Red Hat
    
    Red Hat Enterprise Linux 7.5 64-bit and later
    
    CentOS
    
    CentOS 7.6 64-bit and later
    
    Ubuntu
    
    Ubuntu 18.04 64-bit and later
    
    Debian
    
    Debian 10.2 64-bit and later
    
    SUSE Linux
    
    SUSE Linux Enterprise Server 12 SP2 64-bit and later
    
    openSUSE
    
    openSUSE Leap 42.3 64-bit and later
    
    CoreOS
    
    CoreOS 4.19.43 and later
    
-   Permissions for encryption in transit
    
    Anonymous users are not allowed to use the encryption in transit feature. Only Active Directory (AD) domain users can use this feature after they mount SMB file systems.
    
-   Performance loss
    
    Compared with a file system for which you disable encryption in transit, a file system for which you enable encryption in transit can be accessed with a 10% more latency and 10% less IOPS.
    

## Enable encryption in transit

You can enable the encryption in transit feature for an SMB file system only if you use the access control list (ACL) feature for the SMB file system. The following table describes the parameters that you can specify to enable the encryption in transit feature.

**Parameter**

**Description**

Enable Encryption in Transit

Select **Yes** to enable the encryption in transit feature for the SMB file system.

Deny Access from Non-encrypted Clients

Specifies whether to deny access from clients that do not support encryption to the SMB file system.

-   **Yes**: You can mount the SMB file system by using a client or which the encryption in transit feature is enabled. This means that you can use an AD domain user to mount the SMB file system on a client whose operating system supports the encryption in transit feature.
    
    However, you cannot mount the SMB file system as an anonymous user or by using a client that does not support the encryption in transit feature.
    
-   **No**: You can mount the SMB file system from all types of clients. However, the encryption in transit feature can be enabled only if you use an AD domain user to mount the SMB file system on a client whose operating system supports the encryption in transit feature.
    

For more information, see [Overview of the SMB ACL feature](/help/en/nas/user-guide/overview-of-the-smb-acl-feature#task-2475611).
