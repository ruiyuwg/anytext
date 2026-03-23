This topic describes how to query the shared directories of a NAS file system on a Windows or Linux server.

## Query the shared directories of an SMB file system on a Windows server

1.  Query the remote directories that are mounted on a local host.
    
    1.  Open the Command Prompt or PowerShell.
        
    2.  Run the `net use` command to query all SMB shared directories that are mounted on the local host.
        
    
    An output similar to the following example is returned:![net use](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5563341761/p536634.png)
    
2.  Query the shared directories of a remote host.
    
    1.  Open the Command Prompt or PowerShell.
        
    2.  Run the `net view \\[IP address of the remote host]` command to query all SMB shared directories of the remote host.
        
    
    An output similar to the following example is returned:![net view](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5563341761/p536635.png)
    
3.  Query the devices of the local host.
    
    1.  Open the Command Prompt or PowerShell.
        
    2.  Run the `net share` command to query the disks of the local host.
        
    
    An output similar to the following example is returned:![net share](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5563341761/p536637.png)
    

## Query the shared directories of an NFS or SMB file system on a Linux server

1.  Query the shared directories of an NFS file system.
    
    -   Solution 1: Run the `showmount -e [server IP address or hostname]` command on the server or client.
        
        **Note**
        
        -   If you run the preceding command on the server, you do not need to specify the IP address or `hostname`.
            
        -   You can specify the following parameters when you run the `showmount` command:
            
            -   `-d`: displays only the directories that have been loaded by the NFS client.
                
            -   `-a`: displays the shared directories on the server and the mount targets on the client.
                
        
        For example, you can run the `showmount -e 192.168.0.214` command.
        
        An output similar to the following example is returned:![linux1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5563341761/p536639.png)
        
        **Note**
        
        An asterisk (\*) indicates that the shared directory allows access from all users, as shown in the preceding figure. If an IP address is displayed, the shared directory allows access from only the specified IP address.
        
    -   Solution 2: Run the `exportfs -v` command on the server.
        
        An output similar to the following example is returned:
        
        ![exportfs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5563341761/p536640.png)
        
        **Note**
        
        <world> indicates that the shared directory allows access from all hosts, as shown in the preceding figure. If an IP address is displayed, the shared directory allows access from only the specified IP address.
        
2.  Query the shared directories of an SMB file system.
    
    Run the `smbclient -L //[server IP address] -U [samba username]` command on the server or client.
    
    **Note**
    
    If the `smbclient` command does not exist, install the tool first. For Ubuntu, you can run the `apt install smbclient` command.
    
    For example, you can run the `smbclient -L //192.168.0.215 -U test` command.
    
    **Note**
    
    If you run the preceding command on the server, you do not need to specify the IP address or `hostname`.
    
    An output similar to the following example is returned:
    
    ![smbclient](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6563341761/p536641.png)
