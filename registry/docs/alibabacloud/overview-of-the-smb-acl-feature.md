File Storage NAS (NAS) supports access control lists (ACLs) for Server Message Block (SMB) file systems. This topic describes the default ACL of the root directory, related features, and working principle of the SMB ACL feature.

## Background information

The SMB ACL feature is designed for enterprise users. If an SMB file system is not connected to an Active Directory (AD) domain, the ACLs of the SMB file system are read-only. You can access the SMB file system as a member of the Everyone group. NAS allows you to authenticate users and control access to SMB file systems based on an AD domain. You can connect an SMB file system to a self-managed AD domain. Then, you can mount the SMB file system and configure ACLs for the files and the directories as an AD domain user or a member of the Everyone group.

## Default ACL of the root directory in an SMB file system

The following figure shows the default ACL of the root directory in an SMB file system.![SMB_ACL_default_value](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5716376461/p100367.png)

-   Considerations
    
    -   To align with Windows NTFS permissions, the SYSTEM and Administrators access control entries (ACEs) are used. The ACEs ensure that the applications with administrator permissions run as expected. After you integrate NAS with Resource Access Management (RAM), you can grant administrator permissions to a super admin.
        
    -   To implement inheritance and benchmark with Windows NTFS permissions, the CREATOR OWNER ACE is also used.
        
    -   You can modify the ACL settings of an SMB file system. For example, you can set the **Allow Anonymous Access** parameter to **No**. This way, only AD domain users can access the SMB file system and the identity of the Everyone group cannot access the SMB file system.
        
-   Compatibility with user habits
    
    -   To eliminate the impact on on-premises users, the Everyone group is granted full access to the files or directories that are created in an SMB file system before you connect the SMB file system to an AD domain. All on-premises users can mount an SMB file system as the identity of the Everyone group over NT LAN Manager (NTLM), and access the resources of the Everyone group.
        
    -   The files or subdirectories that are created by AD users do not inherit the permissions of the Everyone group. On-premises users cannot access the files or directories. Only the members of the CREATOR OWNER and Administrators groups can access the files or directories.
        
    -   An AD user can access files or directories that are created by on-premises users, which use the identity of the Everyone group.
        

## Key features

### An SMB file system cannot be mounted by using multiple identities

You can mount an SMB file system by using only one identity in a Windows session. If you log on to a Windows client and mount an SMB file system by using a domain identity (User A or User B), you cannot mount the SMB file system by using another domain identity (for example, User C) in this Windows session. If you attempt to mount an SMB file system by using a different identity, the following error message appears.![Connect_existed_network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8453328951/p100387.png)

### Ensure data security

You may be unable to access a file or directory when an unauthorized user revokes the permissions of the Administrators and Everyone groups from the file or directory. In this case, you must remount the SMB file system in which the file or directory resides and grant the permissions on the file or directory as an administrator.

SMB file systems support the super admin feature. In the NAS console, you can specify a user or group as a super admin. You can view files, modify files, or modify the permissions of files as a super admin regardless of which permissions are granted on the files. For example, if an unauthorized user assumes the ownership of a directory and revokes the access permissions on the directory from the Everyone group, you can restore the permissions to the previous permissions as a super admin.

**Note**

After you enable the super admin feature for an SMB file system, you must remount the SMB file system.

### Use Cygwin

Cygwin is a POSIX-compatible programming and runtime environment that runs on Windows. You can run POSIX-based applications in the Cygwin environment. After you enable the SMB ACL feature, the Security Identifiers (SIDs) of files, SIDs of groups, and Windows discretionary ACLs (DACLs) are converted to POSIX user IDs (UIDs), group IDs (GIDs), and ACLs. For more information, see [Cygwin ntsec.html](https://www.cygwin.com/cygwin-ug-net/ntsec.html).

-   Add the noacl option to the /etc/fstab file, as shown in the following figure.![nacal](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3343976461/p374011.png)
    
    This way, Cygwin can be used to simplify the complex process of ACL conversion and enable the default umask for new files and directories. UIDs and GIDs indicate Windows users and groups. Take note of the following basic rules:
    
    -   The default umask for directories is 755.
        
        ```
        drwxr-xr-x 1 cat Domain Users 0 Jul 25 06:18 dir
        ```
        
    -   The default umask for files is 644.
        
        ```
        -rw-r--r-- 1 cat Domain Users 0 Jul 25 06:42 file
        ```
        
    -   The umask for files can be 644 or 444.
        
        If you set the umask to 444, the DOS read-only attribute is specified. The noacl option allows you to convert the DOS read-only attribute only for files.
        
    -   You cannot run the chmod command to change the permissions on directories. You can run the chmod command to set the umask for files to 644 or 444.
        
    -   The chown or chgrp command is not supported.
        
    -   The getfacl or setfacl command is not supported.
        
    -   The umask for directories that reside on an SMB client is 755. The umask for files is 644 or 444. In specific cases, access to an object is denied by NAS even if the command output on a client shows that you can access the object.
        
    
-   Add the acl option to the /etc/fstab file.
    
    By default, the identity of the Everyone group is used to mount an SMB file system. The Everyone group corresponds to the other class in the Cygwin environment. After you create files or directories in the Cygwin environment, Cygwin automatically runs the chmod command to specify the default umask for new files or directories. Linux also performs similar operations on files or directories. Based on the preceding rules, Linux grants the other class the r-x permissions on directories and r-- permissions on files. This way, the Everyone group is granted only the r-x permissions on new directories and r-- permissions on new files. The identity of the Everyone group cannot be used to create files in a new directory.
    
    We recommend that you enable the noacl option instead of the acl option in the Cygwin environment.
    

### Use AD and ACL on Linux

-   If you run the `mount -t cifs` command to mount an SMB file system on Linux, you can specify an AD domain user and configure the parameters. The parameters include the GID, UID, default umask for new files, and default umask for new directories.
    
-   When you access an SMB file system, the Linux client checks POSIX permissions based on your UID, GID, and real identity.
    
-   Regardless of which Linux user you use to access an SMB file system, all your operations are performed on the NAS side as the AD domain user. A root user is granted only the permissions of the AD domain user instead of the administrator permissions. Permission-related commands are unavailable in Linux. These commands include chmod, chown, chgrp, getfacl, and setfacl.
    

For more information, see [Mount and use an SMB file system on a Linux client as an AD domain user](/help/en/nas/user-guide/mount-and-use-an-smb-file-system-on-a-linux-client-as-an-ad-domain-user#task-2077654).

## Working principle of the SMB ACL feature

You can join SMB clients in a virtual private cloud (VPC) and SMB clients in a data center to the same AD domain. Then, AD domain users can be used to access the SMB file system from the SMB clients. You can use the AD domain controller to manage the AD domain users and control access to the SMB file system in a centralized manner. NAS allows you to authenticate AD domain users by using the Kerberos protocol. When an AD domain user attempts to access the SMB file system from a Windows or Linux server that serves as the AD domain controller, the SMB file system verifies the identity of the AD domain user. This way, you can control access from a specific user to specific files and directories in the SMB file system.

The following figure shows the process of identity authentication and access control for SMB file systems in an AD domain.

![NAS_基于AD域系统的用户认证及访问控制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8457549951/p77479.png)

1.  Create a keytab file. For more information, see [Join the mount target of an SMB file system to an AD domain](/help/en/nas/user-guide/join-the-mount-target-of-an-smb-file-system-to-an-ad-domain#section-ra3-m38-po8).
    
2.  Enable the SMB ACL feature and upload the keytab file to join the mount target of the SMB file system to the AD domain. For more information, see [Step 2: Upload the keytab file](/help/en/nas/user-guide/join-the-mount-target-of-an-smb-file-system-to-an-ad-domain#section-u86-8zj-74a).
    
    Then, the key contained in the keytab file is stored in NAS. After the mount target of the SMB file system is joined to the AD domain, you can mount and access the SMB file system as an AD domain user. For more information, see [Mount and use an SMB file system on a Windows client as an AD domain user](/help/en/nas/user-guide/mount-and-use-an-smb-file-system-on-a-windows-client-as-an-ad-domain-user) or [Mount and use an SMB file system on a Linux client as an AD domain user](/help/en/nas/user-guide/mount-and-use-an-smb-file-system-on-a-linux-client-as-an-ad-domain-user).
    
3.  Authenticate an AD domain user who attempts to access the SMB file system.
    
    If an AD domain user from a virtual machine (VM) in the VPC or an application in the data center attempts to access the SMB file system, NAS checks whether the IP address of the AD domain user is allowed to access the file system based on the permission groups. Then, the AD domain user is authenticated based on the Kerberos protocol. The following procedure describes the process of Kerberos authentication:
    
    1.  A client sends an SMB2 NEGOTIATE request to NAS.
        
    2.  NAS checks whether Kerberos authentication is enabled for the SMB file system.
        
    3.  The client sends a request for accessing the SMB file system to the AD domain controller in the VPC or data center.
        
    4.  The AD domain controller authenticates the client. Then, the AD domain controller encrypts the information of the AD domain user by using the key that is contained in the keytab file, and sends the encrypted user information to the client.
        
    5.  The client sends an SMB2 SESSION\_SETUP request to NAS. The request message includes the encrypted user information.
        
    6.  NAS decrypts the encrypted user information by using the key that is contained in the keytab file.
        
        **Note**
        
        The authenticated AD domain user is used for all subsequent access to the SMB file system in the session.
        
    7.  After the authentication is complete, NAS sends a response to the SMB2 SESSION\_SETUP request. This indicates that NAS allows access from the client to the SMB file system. Otherwise, the SMB2 SESSION\_SETUP request is denied.
        
    8.  The client sends read, write, and other requests to the SMB file system.
        
    9.  NAS returns the result of the request to the client.
        
        NAS controls access to the SMB file system. NAS denies or allows the request based on the user information in the session and the ACLs of files and directories in the SMB file system.
