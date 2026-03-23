Agentless migration for VMware virtual machines (VMs) is non-intrusive and does not consume compute resources on the guest operating system. This approach does not impact server security or performance. This topic describes how to migrate VMware VMs by using Server Migration Center (SMC).

**Note**

You can also migrate VMware virtual machines by using the agent-based approach. For more information, see [Migrate servers to Elastic Compute Service (ECS)](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance).

## **Migration scenarios**

**Important**

Due to a change in the technical solution for intermediate instances, Server Migration Center (SMC) will no longer support migrating Windows servers to destination instances in regions outside the Chinese mainland after November 30, 2025 (UTC+8). Before this date, you can still use SMC client V2.8.5 and earlier versions. For more information about the change and its impact, see [\[Product Change\] Announcement on SMC no longer supporting the migration of Windows servers to destination instances in regions outside the Chinese mainland](/help/en/smc/product-overview/announcement-on-functional-restrictions-of-windows-server-migration-to-target-instances-in-non-mainland-china-regions).

-   **(Recommended) Migrate a server to an Alibaba Cloud ECS custom image**.
    
    If you have not purchased an Alibaba Cloud ECS instance, you can migrate your server to an Alibaba Cloud ECS custom image. Then, you can manually create an ECS instance from the custom image.
    
-   **Migrate a server to a purchased Alibaba Cloud ECS instance**.
    
    If you have an existing Alibaba Cloud ECS instance with storage, an operating system, and other configurations that are compatible with the source server, you can migrate the source server to that instance.
    
    **Warning**
    
    After the migration, the original data on the destination ECS instance is erased. The data on the source server is not affected. Therefore, do not use this migration method if the destination ECS instance contains important data.
    

## Limitations

### **Environment requirements**

The following table lists the environment requirements for each OVA template.

**OVA template**

**Connector requirements**

**vCenter deployment**

**Standalone ESXi deployment**

SMC VMware Connector 6.7 OVA

-   vCPU: At least 4 vCPUs
    
-   Memory: At least 8 GB
    
-   Disk: At least 40 GB
    

-   vCenter version: 6.0, 6.5, or 6.7
    
-   ESXi version of the host that runs the connector: 6.0, 6.5, or 6.7
    
-   ESXi version of the host that runs the VM to be migrated: 6.0, 6.5, or 6.7
    
-   Hardware version of the VM to be migrated: 11, 12, 13, 14, or 15
    

-   ESXi version: 6.0, 6.5, or 6.7
    
-   Hardware version of the VM to be migrated: 11, 12, 13, 14, or 15
    

SMC VMware Connector 8.0 OVA

-   vCPU: At least 4 vCPUs
    
-   Memory: At least 8 GB
    
-   Disk: At least 40 GB
    

-   vCenter version: 6.7, 7.0, or 8.0
    
-   ESXi version of the host that runs the connector: 6.7, 7.0, or 8.0
    
-   ESXi version of the host that runs the VM to be migrated: 6.7, 7.0, or 8.0
    

-   Hardware version of the VM to be migrated: 14, 15, 16, 17, 18, 19, 20, or 21
    

-   ESXi version: 6.7, 7.0, or 8.0
    
-   Hardware version of the VM to be migrated: 14, 15, 16, 17, 18, 19, 20, or 21
    

### **Supported operating systems**

The Server Migration Center (SMC) client automatically detects the operating system of the VM to be migrated. Supported operating systems are listed below. To check your operating system, run the `cat /proc/version` or `systeminfo` command.

```
CentOS
Ubuntu
SUSE
OpenSUSE
Debian
RedHat
Others Linux
Windows Server 2003
Windows Server 2008
Windows Server 2012
Windows Server 2016
Windows Server 2019
Windows Server 2022
```

### **Disk size limitations**

Server Migration Center (SMC) limits the size of disks for migration. Disks exceeding these limits cannot be migrated. If a disk is too large, you must transfer its data by using another method, such as cp or sftp.

-   System disk: The maximum capacity is 2 TiB.
    
-   Data disk: The maximum capacity is 32 TiB.
    

### **Roles and permissions**

-   If you use a vCenter user, the role assigned to the user on the ESXi host and VM must have the following permissions:
    
    -   Datastore > Browse datastore
        
    -   Datastore > Low-level file operations
        
    -   Host > Local operations > Create virtual machine
        
    -   Virtual machine > Change Configuration > Acquire disk lease
        
    -   Virtual machine > Change Configuration > Toggle disk change tracking
        
    -   Virtual machine > Provisioning > Allow virtual machine download
        
    -   Virtual machine > Provisioning > Allow disk access
        
    -   Virtual machine > Provisioning > Allow read-only disk access
        
    -   Virtual machine > Snapshot management > Create snapshot
        
    -   Virtual machine > Snapshot management > Remove Snapshot
        

-   If you use an ESXi user, the role must be Administrator.
    

## **Migration fee**

Server Migration Center (SMC) is available at no additional charge. However, you will incur charges for the Elastic Compute Service (ECS) resources used during the migration, such as intermediate instances and cloud disks. For more information about billing, see [SMC Billing Items](/help/en/smc/product-overview/pricing#concept-593074).

## Prerequisites

-   Complete the pre-migration preparations. For more information, see [Pre-migration preparations](/help/en/smc/user-guide/prepare-before-migration).
    
-   To prevent data loss, back up important data to an image, a snapshot, or an external storage device.
    
-   If you are migrating a source server to an existing ECS instance:
    
    -   The operating system of the target instance must match that of the source server. For example, both must be Linux or both must be Windows.
        
    -   The target instance must have at least as many data disks as the source server. If it does not, you must [attach data disks](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        

## **Procedure**

### **Step 1: Create a VMware agentless connector**

Server Migration Center (SMC) provides an Open Virtualization Appliance (OVA) template. You can import this template into your vCenter or ESXi environment to deploy a VMware agentless connector.

**Note**

-   An Open Virtualization Format (OVF) is an open standard that describes a portable, secure, efficient, and extensible format for packaging and distributing virtual appliances. An OVF package typically consists of several files, such as an .ovf manifest, an .mf file, a .cert file, .vmdk files, and .iso files. An OVA is a single-file distribution of an OVF package.
    
-   VMware vSphere is a virtualization platform that transforms data centers into aggregated computing infrastructures that include CPU, storage, and networking resources. vSphere manages these infrastructures as a unified operating environment and provides tools to manage the data centers. The two core components of vSphere are ESXi and vCenter Server. ESXi is the virtualization platform used to create and run virtual machines (VMs) and virtual appliances. vCenter Server is a service used to manage multiple connected hosts in a network and to pool their resources.
    

#### **Download and decompress the OVA template**

Click [Download OVA template](https://smc.console.alibabacloud.com/importMigrationSource?sourceServerType=VMWARE&jobType=3). In the **Import Instructions** section, download and decompress the OVA template for your VMware ESXi or vCenter version.

![lQLPJxjJZIQrsxPMl80C7rBONH3msCozYwaTnoZxcjUA_750_151](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1052105271/p828597.png)

#### **Deploy the VMware agentless connector**

Import the VMware agentless connector OVA template into your vCenter or ESXi environment to deploy it. You can deploy the connector in either a vCenter or a standalone ESXi environment.

#### **Deploy in vCenter (recommended)**

Import the VMware agentless connector OVA template into your vCenter environment to deploy the connector. The following steps use vCenter 6.7 as an example.

1.  Log in to vCenter. Right-click the vCenter host and select **Deploy OVF Template...**.![adad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p515822.png)
    
2.  On the **Deploy OVF Template** page, follow the wizard to create the virtual machine (VM).
    
    1.  Select the OVA template and click **NEXT**.
        
        Select **Local file**, click **Browse...**, and select the decompressed OVA template file.![ada](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514774.png)
        
    2.  Specify a name and location for the VM, and then click **NEXT**.
        
        Enter a name in the **Virtual machine name** field and select a deployment location.![ada56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514757.png)
        
    3.  Select a compute resource and click **NEXT**.![daa](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514759.png)
        
    4.  Verify the template details and click **NEXT**.![adsad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514761.png)
        
    5.  Select a storage location and click **NEXT**.![asdasd](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514775.png)
        
    6.  Select a network and click **NEXT**.![adad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514776.png)
        
    7.  Review the configuration details and click **FINISH**.![asd、](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514778.png)
        
    8.  After the deployment is complete, right-click the VMware agentless connector and select **Power > Power On**.
        
    9.  Configure the network to allow the deployed VMware agentless connector to connect to port 443 (default) of vCenter and port 902 (default) of the ESXi host of the VM you want to migrate.
        
    10.  On the **Summary** tab, obtain the IP address of the VMware agentless connector.![asda](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4739832761/p529349.png)
         

#### **Deploy in standalone ESXi**

Import the VMware agentless connector OVA template into your ESXi environment to deploy the connector. The following steps use ESXi 7.0 as an example.

1.  Log in to VMware ESXi. Right-click **Virtual Machines** and select **Create/Register VM**.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p677962.png)
    
2.  On the **Select Creation Type** page, select **Deploy a virtual machine from an OVF or OVA file** and click **Next**.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p677963.png)
    
3.  On the **Select OVF And VMDK Files** page, enter a name for the VM, click **Click To Select Files Or Drag/drop** to select the downloaded OVA template file, and then click **Next**.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p678384.png)
    
4.  On the **Select Storage** page, click **Next**.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p677965.png)
    
5.  On the **Deployment Options** page, click **Next**.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p677966.png)
    
6.  On the **Ready To Complete** page, click **Finish**.
    
    Wait for the VM to be deployed. The IP address of the connector is displayed in the **General Information** section. By default, the connector network is configured by using DHCP. You can change the network configuration as needed.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p677757.png)
    
7.  Configure the network to allow the deployed VMware agentless connector to connect to ports 443 and 902 (default) of the ESXi host.
    

### **Step 2: Import the migration source**

Log in to the VMware agentless connector, add and configure the source VMs, and then run the import command in the connector to import the VMs into the Server Migration Center (SMC) console.

#### **Add source VMs**

Use the `configure.sh` script to add the source VMs. You can add multiple VMs at once, and the corresponding number of migration sources will appear in the SMC console.

**Note**

-   A single VMware agentless connector can import and manage a maximum of 10 active migration sources at one time. If you configure more than 10 VMs, only 10 migration sources will appear in the SMC console. The remaining sources will be automatically imported after the current Migration Tasks are completed.
    
-   The operating system type preset in VMware vCenter may not be accurate. You must verify the actual operating system.
    

1.  Log in to the VMware agentless connector.
    
    The following steps use an SSH remote connection as an example:
    
    In a terminal that can connect to the VMware agentless connector, run the following command to remotely connect to the connector. The default username is `root`, and the password is empty by default.
    
    ```
    ssh root@<IP address of the VMware agentless connector>
    ```
    
    **Important**
    
    For security, we recommend that you change the password immediately.
    
2.  Run the following command to check whether the time is correct.
    
    ```
    date
    ```
    
    If the time is incorrect, use the ntpdate command to calibrate it. This example uses the `0.asia.pool.ntp.org` time server.
    
    ```
    ntpdate 0.asia.pool.ntp.org
    hwclock --systohc
    ```
    
    **Warning**
    
    If the time is incorrect, the migration source import will fail.
    
    ![ad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9474920761/p514818.png)
    
3.  Run the following command to configure vCenter or ESXi and the source VMs.
    
    **Note**
    
    This step retrieves a list of all hosts and VMs in the environment. If you already know the name of the host or VM you need to configure, you can skip this step and specify the name directly. For more information, see [How do I directly specify a VM or a VM under a host for agentless migration of VMware VMs?](/help/en/smc/support/faq#1c81395003f8k).
    
    ```
    cd /root/smc
    bash configure.sh
    ```
    
    Enter the IP address, username, password, and port number (the default is 443) of VMware vCenter or ESXi in sequence. The output is similar to the following.
    
    ```
    [root@localhost ~]# cd /root/smc
    [root@localhost smc]# ./configure.sh
    Please input vCenter/ESXi IP:192.168.XX.XX
    Please input username:administr****@vsphere.local
    Please input password:
    Please input port number(default 443):443
    ```
    
    A connection success message appears, and a list of hosts is generated. You are prompted to enter the ID of the host where the source VM resides. You must select a host with a status of 'Connected' (indicated by an asterisk \* in the Connected column).
    
    ```
    Test to connect the vCenter/ESXi...
    Connect success!
    save to ./vmware_connect_config.json
    ========Aliyun SMC VMware Configure Tool 1.2========
    Connect success!
     Getting host list progress:
     [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100.00%]time：1.0s
    
    
    Host List:
    ------------------------------------------------------------------------
    ID      Name                              Version            Connected
    1       192.168.XX.XX                     6.7.0                  *
    2       192.168.XX.XX                     7.0.3                  *
    ------------------------------------------------------------------------
    Please input the ID of Host(input 0 to exit):1
    ```
    
    After you enter the host ID, a list of VMs is generated. You are prompted to enter the ID of the source VM. You must select a VM with a status of 'Connected' (indicated by an asterisk \* in the `Connected` column).
    
    ```
    Test to connect 192.168.XX.XX
    Connect success!
     Getting vm list progress:
     [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100.00%]time：2.3s
    
    
    VM List of 192.168.XX.XX:
    ------------------------------------------------------------------------
    ID      Name                               Connected      CBT      Add
    1080    test1                                  *
    1084    win16bios                              *
    1011    centos7-bios-2                         *
    3008    centos7-uefi                           *
    2001    centos-hw10                            *
    ------------------------------------------------------------------------
    Please input the ID of VM to be migrated (input 0 to exit):1084
    ```
    
    Select the architecture of the source VM.
    
    ```
    --------------------------------------------------------------
    0    x86_64
    1    i386
    2    arm64
    --------------------------------------------------------------
    Please choose the architecture:0
    ```
    
    If the operating system of the current VM is not automatically detected, enter the number corresponding to the correct operating system from the list provided. For example, enter 10.
    
    ```
    ------------------------------------------------------------------------
    0	CentOS
    1	Ubuntu
    2	SUSE
    3	OpenSUSE
    4	Debian
    5	RedHat
    6	Others Linux
    7	Windows Server 2003
    8	Windows Server 2008
    9	Windows Server 2012
    10	Windows Server 2016
    11	Windows Server 2019
    12	Windows Server 2022
    ------------------------------------------------------------------------
    Current OS [Apple macOS 10.14 (64-bit)] is invalid, please choose the OS of VM:10
    ```
    
    An asterisk (`*`) in the `Add` column next to the VM name indicates that the VM was added successfully.
    
    ```
    VM List of 192.168.XX.XX:
    --------------------------------------------------------------
    ID      Name                     Connected      CBT      Add  
    481     TEST_CLONE_1                 *      
    389     win16bios                    *                    *  
    338     hanjun_test_001              *  
    386     Aliyun_SMC_Agent_6.5         *  
    393     win16uefi   
    --------------------------------------------------------------
    Please input the ID of VM to be migrated (input 0 to exit):0
    ```
    
    **Note**
    
    -   To migrate multiple VMs, continue entering the IDs of the VMs.
        
    -   If you are migrating only one VM, enter 0 to return to the host selection. To migrate VMs from other hosts, repeat the previous steps. Otherwise, enter 0 again to exit the configuration.
        
    

#### (Optional) **Configure source VMs**

Use the vmware\_migrate\_config.json file to confirm and modify VM properties, such as the operating system, disks, and migration status.

1.  Run the following command to view the generated vmware\_connect\_config.json and vmware\_migrate\_config.json files.
    
    ```
    ll
    ```
    
    The output is similar to the following.
    
    ```
    [root@localhost smc]# ll
    total 5588
    drwxrwxrwx. 4 root root     239 Oct 17 17:27 Check
    -rwxrwxrwx. 1 root root    6884 Oct 14 15:54 client_data
    -rwxrwxrwx. 1 root root     151 Oct 14 17:47 configure.sh
    drwxrwxrwx. 2 root root      72 Nov  1 01:15 dist
    -rwxrwxrwx. 1 root root   38878 Oct 14 15:54 EULA
    drwxrwxrwx. 2 root root    4096 Oct 17 17:27 Excludes
    -rwxrwxrwx. 1 root root 5633792 Oct 31 19:43 go2aliyun_client
    -rwxrwxrwx. 1 root root     146 Oct 14 15:54 user_config.json
    -rw-r--r--. 1 root root     263 Nov 10 18:05 vmware_connect_config.json
    -rw-r--r--. 1 root root   18406 Nov 10 18:07 vmware_migrate_config.json
    ```
    
2.  Check whether the properties of the VM, such as the operating system, disks, and migration status, meet your expectations.
    
    ```
    vim vmware_migrate_config.json
    ```
    
    The `vmware_migrate_config.json` file is in JSON format. Each VM corresponds to a key-value pair, where the key is the VM's Moref ID (a unique identifier for objects and resources in a VMware vSphere environment) and the value contains the VM's properties. The key-value pair for each VM is as follows:
    
    ```
     "1": {
            "vm_name": "centos7-bios-main",
            "moref_id": "1",
            "uuid": "1:525794aa-d3e9-2332-5d78-78a6e6d6d4f3:564dfd2b-91ab-1cae-2bef-cda625472b28",
            "cores": 2,
            "memory": 4.0,
            "boot_mode": "bios",
            "vdisk_num": 3,
            "host": "localhost.localdomain",
            "cpu_info": "Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz",
            "virt_type": "VMware7,1",
            "host_id": "ddbd4d56-f407-f342-a8fa-2edd5424b34e",
            "CBT_enabled": true,
            "power_state": false,
            "connect_state": true,
            "mac": "unavailable",
            "tools_state": false,
            "ipv4": null,
            "guestOS": "CentOS 7 (64-bit)",
            "host_name": null,
            "disk": [
                {
                    "key": 2000,
                    "uuid": "6000C296-2b4b-5c40-2d8b-dfbc757641a2",
                    "capacity": 20971520,
                    "file_name": "[datastore1] centos7-bios/centos7-bios-000009.vmdk",
                    "change_id": "52 fc 41 38 48 e7 cc cc-cd af c1 f8 44 f3 0d e9/21",
                    "system_disk": true,
                    "migrate": true
                },
                {
                    "key": 2002,
                    "uuid": "6000C294-4055-f564-1190-e365396eb0a6",
                    "capacity": 22020096,
                    "file_name": "[datastore1] centos7-bios/centos7-bios_2-000009.vmdk",
                    "change_id": "52 74 c8 ba 23 f6 cd 8b-2c c5 94 40 cd b1 f5 e9/21",
                    "system_disk": false,
                    "migrate": true
                },
                {
                    "key": 2003,
                    "uuid": "6000C296-24cf-80d2-e692-67a938ad036c",
                    "capacity": 24117248,
                    "file_name": "[datastore1] centos7-bios/centos7-bios_3-000009.vmdk",
                    "change_id": "52 6a de 0a 18 b4 2a 63-46 54 19 ad 07 88 bd 16/21",
                    "system_disk": false,
                    "migrate": true
                }
            ],
            "architecture": "x86_64",
            "platform": "CentOS",
            "migrate": true,
            "hardware_version": 19,
            "host_version": "7.0.3",
            "snapshot_state": true
    ```
    
3.  Configure the properties of the VM, such as the operating system, disks, and migration settings. You may need to edit the following fields:
    
    -   **platform**: The operating system of the VM. If the auto-detected OS is incorrect, you must manually set it to one of the supported operating systems listed below. SMC cannot migrate other operating systems.
        
    
    ```
    CentOS
    Ubuntu
    SUSE
    OpenSUSE
    Debian
    RedHat
    Others Linux
    Windows Server 2003
    Windows Server 2008
    Windows Server 2012
    Windows Server 2016
    Windows Server 2019
    Windows Server 2022
    ```
    
    -   **disk**: The list of disks for the VM, in array format.
        
        -   The system disk is the first disk by default, and its corresponding `system_disk` value is `true`. If the system disk of the virtual machine is not the first disk, you must change the `system_disk` value for the actual system disk to `true`, and change the `system_disk` value for the other data disks to `false`.
            
        -   By default, the `migrate` value for all disks is `true`, which indicates that the disk will be migrated. If you do not want to migrate a specific data disk, change its `migrate` value to `false`.
            
    -   **migrate**: Whether to migrate the VM.
        
        -   For a selected VM, a `migrate` value of `true` means the VM will be migrated.
            
        -   To migrate a VM whose `migrate` value is `false`, change its `migrate` value to `true` and manually configure the `platform` and `architecture`.
            
        -   `architecture` is the architecture of the virtual machine. Valid values are `x86_64/i386/arm64`.
            

#### **Import the migration source**

In the VMware agentless connector, run the SMC client from the command line to import the VMware VM information into the SMC console.

**Warning**

-   Accidental snapshot deletion
    
    While the SMC client is running, do not manually shut down, restart, create, or delete snapshots for the source VM. Doing so can cause the migration to fail. If this causes a failure, run ./dist/migrate\_configure in the SMC client's home directory (/root/smc) to refresh the VM configuration. Then, run the `./go2aliyun_client --rerun` command to restart the client.
    
-   Manually clean up residual snapshots
    
    During the synchronization phase, the SMC client automatically creates a snapshot named in the format `smc_MigrationTaskID_CurrentTime`, for example, `smc_j-bp1ho******4_2025-07-02-17:05:43`. The snapshot is automatically deleted after synchronization is complete. If you manually delete the Migration Task before synchronization finishes, this action may leave a residual snapshot. To resolve this issue, follow these steps:
    
    -   Step 1: Manually delete the snapshot
        
        In the vCenter/ESXi management interface, manually delete the snapshot. Right-click the source VM, select Snapshots > Manage Snapshots, select the snapshot, and click DELETE.
        
    -   Step 2: Run the following commands in the SMC client home directory to refresh the VM configuration and restart the client.
        
        ```
        cd /root/smc
        ./dist/migrate_configure    # Refresh the VM configuration.
        ./go2aliyun_client --rerun   # Restart the SMC client.
        ```
        

1.  Go to the [SMC console - Agentless Migration of VMware VMs](https://smc.console.alibabacloud.com/toCloud/vmware) page.
    
2.  On the **Agentless Migration of VMware VMs** page, click **Import Migration source**.
    
3.  On the **Import Migration Source** page, configure the parameters.
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Migration Source Type**
    
    **VMware VM**.
    
    **Import Method**
    
    **Use Server Migration Connector to Import VMware VM** is selected by default and cannot be changed.
    
    **Description**
    
    Follow the import instructions to import the migration source.
    
4.  Obtain an activation code.
    
    1.  (Recommended) Obtain an activation code: An SMC activation code (Access Token) consists of an Access Token ID and an Access Token Code. If you do not have one, click **Generate** in the **Description** section of the SMC console and copy the code.
        
        ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085458861/p678529.png)
        
    2.  Log on to the VMware agentless connector and run the following commands in sequence to import the migration source.
        
        ```
        chmod +x ./go2aliyun_client
        ./go2aliyun_client
        ```
        
        Enter the activation code as prompted. The output is similar to the following. When the message `Import Source Server [s-bp14zd35128xgjdbh****] Successfully!` appears, the migration source has been imported successfully.
        
        **Note**
        
        -   Run `./go2aliyun_client --help` to obtain help information.
            
        -   If importing the migration source fails due to an incorrect activation code, you can re-import it. The command is `./go2aliyun_client --accesstokenid=at-****** --accesstokencode=yK******9I`.
            
        -   You can also activate the SMC client by using an AccessKey pair. An AccessKey pair for an Alibaba Cloud account consists of an AccessKey ID and an AccessKey secret. If you have not created an AccessKey pair, create one first. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task-354412). The command is `./go2aliyun_client --accessid=****** --secretkey=******9I`.
            
        
    3.  On the **Agentless Migration of VMware VMs** page in the SMC console, check the status of the migration source in the **Real-time Migration Status** column.
        
        -   If the status is **Source Online**, the import succeeded.
            
        -   If the status is any other value, the import has failed. To resolve the issue, refer to the following solutions and then try the import again.
            
            -   Resolve the issue based on the error message in the console or by checking the log files in the SMC client directory. The default installation directory for the SMC client is /root/smc/.
                
            -   For more information about common issues and solutions, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/#concept-2267505).
                

### **Step 3: Create a Migration Task**

In the SMC console, create and start a Migration Task as prompted. SMC supports migrating VMware servers to the following **Destination Type** options:

-   (Recommended) **ECS Image**: Converts the server into a custom image. You can then use the custom image to create an ECS instance.
    
-   **ECS Instance**: Migrates the VMware VM directly to an existing ECS instance. This is suitable if you have a newly purchased instance or an existing one whose data is no longer needed. The number and size of storage volumes, the operating system, and other configurations of the VMware VM must be compatible with the target ECS instance.
    
    **Warning**
    
    After you create the Migration Task, the original data on the destination ECS instance is cleared. The data on the source server is not affected. If the ECS instance contains important data, this migration method is not recommended.
    

1.  Go to the [SMC console - Agentless Migration of VMware VMs](https://smc.console.alibabacloud.com/toCloud/vmware) page.
    
2.  Find the migration source that you want to manage and click **Start Migration** in the **Actions** column.
    
3.  Configure the parameters and click **Start Migration**.
    
    1.  Configure basic parameters.
        
        **Parameter**
        
        **Description**
        
        **Destination Type**
        
        Select the destination type based on your migration scenario:
        
        #### **ECS Image**
        
        Convert the existing source server into an ECS custom image, and then use that custom image to create a new ECS instance to complete the migration.
        
        The following table describes the configuration items:
        
        -   **Destination Region**: The Alibaba Cloud region to which you want to migrate your source server. This parameter is required. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
            
        -   **Image Name Prefix**: The name of the destination Alibaba Cloud custom image that SMC generates for the migration source.
            
        
        ##### **ECS instance**
        
        Migrate the source server directly to a purchased ECS instance. The storage, operating system, and other configurations of the source server and the purchased ECS instance must be compatible.
        
        The following table describes the configuration items:
        
        -   **Destination Region**: The Alibaba Cloud region to which you want to migrate your source server. This parameter is required. For more information about regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
            
        -   **Destination Instance**: Select an ECS instance as the destination instance.
            
        
        **Execution Method**
        
        Select an execution mode for the Migration Task:
        
        -   **Migrate Now**: Starts the migration immediately after creating the migration task. **Migrate Now** is selected by default.
            
        -   **Schedule Migration**: Creates a migration task that automatically starts at a set time.
            
            **Note**
            
            The earliest scheduled execution time can be set to 10 minutes from the current time.
            
        -   **Create Only**: Creates only a migration task. You must later manually start the migration task by clicking **Start Migration** in the **Actions** column.
            
        
        **Automatic Incremental Synchronization**
        
        Specifies whether the migration task automatically synchronizes incremental data from the source server to Alibaba Cloud. By default, automatic incremental synchronization is disabled.
        
        **Note**
        
        This feature is not supported if you select **ECS Instance** as the destination.
        
        -   If you enable this switch, you need to set the following configuration items:
            
            -   -   **Sync Repeat Frequency**: The time interval at which the incremental migration task is automatically executed periodically.
                    
                -   **Max Image Retention**: The maximum number of images that the incremental migration task retains by default.
                    
                
                The Migration Task will run periodically and synchronize incremental data to Alibaba Cloud. For more information about best practices for incremental migration, see [Agentless incremental migration for VMware VMs](/help/en/smc/use-cases/migrate-incremental-data-from-a-vmware-vm-without-an-agent).
                
        
        **Network Type**
        
        Select the network to use for transferring migration data to the intermediate instance. By default, public network transmission is used. The intermediate instance is created in the selected virtual private cloud (VPC) and vSwitch, so it is assigned a public IP address.
        
        #### **Public Network Transmission** (Default)
        
        Migration data is transferred to the intermediate instance over the public network. This mode requires the source server to have public network access. As needed, choose whether to specify a VPC and a vSwitch.
        
        -   Specify a VPC and vSwitch: The migration task creates an intermediate instance in your specified VPC and vSwitch.
            
        -   Do not specify a VPC and vSwitch: The migration task creates an intermediate instance in a system-generated VPC and vSwitch.
            
        
        #### **Private Network Transmission**
        
        Migration data is transferred to the intermediate instance over the VPC's internal network. This mode requires you to connect the source server to the Alibaba Cloud VPC and specify a VPC and vSwitch.
        
        **Note**
        
        If you can directly access a VPC in an Alibaba Cloud region from your on-premises data center, VM environment, or cloud host, we recommend using this migration method. Using the internal network provides faster and more stable data transmission than the public network, improving migration efficiency. You can connect the source server to the cloud VPC using a VPN Gateway, Express Connect circuit, physical connection, or Smart Access Gateway. For more information, see [Connect a VPC to an on-premises data center or another cloud](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud#concept-lgm-hhl-wfb).
        
        **Destination Instance IPv4 Private Address**
        
        To change the private IP address of the destination instance, you can manually specify a private IP address. This parameter appears only when **Destination Type** is set to **ECS Instance**.
        
        -   **Keep Unchanged**: By default, the migration IP address of the **destination instance** remains unchanged.
            
        -   **Manually Specify**: Allows you to enter an address within the available IP CIDR block of the vSwitch where the **destination instance** is located. When the migration source's IP address is in the vSwitch's CIDR block, you can change the destination instance's IP address to the migration source's IP address.
            
            -   When the destination instance's CIDR block is the same as the migration source's: Directly enter the private IP address of the migration source.
                
            -   When the destination instance's CIDR block is different from the migration source's: You first need to [change the VPC of the destination instance](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance) so that their CIDR blocks are the same, and then enter the private IP address of the migration source.
                
        
    2.  Configure the disk parameters. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Destination Disk Size (GiB)**
        
        Set the disk structure for the destination ECS server. Configure the parameters based on your business needs.
        
        **Important**
        
        Agentless migration for VMware does not support disk shrinking. To shrink disks, switch to an agent-based migration method.
        
        #### **System disk**
        
        The size of the system disk for the destination Alibaba Cloud ECS server, in GiB. The value must be in the range of 20 to 2,048. The destination system disk size must be greater than the source system disk size. For example, if the source system disk size is 400 GiB, the destination system disk size must be greater than 400 GiB.
        
        #### **Data disk**
        
        **Data Disk** <N>: The size of the data disk for the destination Alibaba Cloud ECS server after migration, in GiB. The value must be in the range of 20 to 32,768.
        
        -   The variable `<N>` represents the data disk number.
            
        -   The destination data disk size must be greater than the source data disk size. For example, if the source data disk size is 500 GiB, the destination data disk size must be greater than 500 GiB.
            
        
        **Note**
        
        If your migration source does not have a data disk, or if the data disk is not mounted, the **Data Disk** configuration item does not appear. For more information, see [Why is the Data Disk configuration item not displayed on the Create Migration Task page?](/help/en/smc/support/faq#section-nt4-qfc-tev).
        
    3.  (Optional) To set advanced parameters such as network mode and compression ratio, click **Advanced Settings**. The following table describes these parameters.
        
        **Parameter**
        
        **Description**
        
        **Migration Task Name**
        
        The name of the Migration Task.
        
        **Task Description**
        
        Enter a description for the Migration Task.
        
        **Transmission Speed Limit**
        
        The transfer speed limit restricts the actual network transfer speed, in Mbps. If the **Compression Ratio** is set to a value greater than 0, the actual network transfer speed (the speed of compressed data transfer) will be less than the speed displayed in the **Real-time Migration Status**.
        
        **Compression Ratio**
        
        The level of data compression during migration. Set the compression ratio based on your actual needs.
        
        -   In environments with limited bandwidth, using a high compression ratio can increase data transfer speed.
            
        -   In environments with very high bandwidth, we recommend not compressing data to reduce the CPU resource consumption on the source server.
            
        
        The value ranges from 0 to 10. The default is 7. A value of 0 means no data compression.
        
        **Checksum Verification**
        
        Disabled by default. Enabling it enhances data consistency verification but may reduce transfer speed.
        
        **SSL Encrypted Transmission**
        
        The default is **Auto Select**. Using Secure Sockets Layer (SSL) encryption for data transmission can improve data security and ensure data integrity.
        
        **License Type**
        
        Select the license type.
        
        -   **Alibaba Cloud** (Default): Currently only supports Microsoft Windows Server licenses. When you create an ECS instance from the image in Hong Kong (China) or other regions outside China, you will be charged an image license fee, and the license will be automatically activated. The specific fee is subject to the information displayed when creating the instance.
            
        -   **Bring Your Own License****:** Bring Your Own License (BYOL) migration to the cloud currently includes Microsoft, Red Hat Enterprise Linux, and SUSE Linux Enterprise Server. When you create an ECS instance from the image after migration, you will not be charged an image license fee. Please use your own license for activation.
            
            **Note**
            
            If you have already created an ECS instance, Alibaba Cloud supports quickly purchasing software licenses such as Red Hat Enterprise Linux and SUSE Linux Enterprise Server for the specified ECS instance. For more information, see [Purchase a software license for an ECS instance](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
            
        
        **Transmission Mode**
        
        -   **Automatic**: Default. This mode selects the best available transmission mode.
            
        -   **LAN**: This mode uses Local Area Network (LAN) transmission. It requires that the VMware agentless connector VM can access the ESXi host of the source VM over the LAN.
            
        -   **LAN-Free**: This mode uses storage network transmission. It requires that the VMware agentless connector VM and the source VM are on the same ESXi host.
            
        
        **Image Check**
        
        The image detection feature mainly checks whether an image is valid and whether it can be used to create a fully functional ECS instance. You can use the image detection feature when creating server migration and VMware agentless migration tasks.
        
        Image detection helps you quickly identify potential problems with the image or instance after migration and provides repair solutions to make it compliant with Alibaba Cloud standards, improving the success rate of instance startup.
        
        For more information, see [Configure image detection](/help/en/smc/user-guide/configure-image-check).
        
        **Tags**
        
        Bind tag key-value pairs to the migration task for easy querying and management. For more information, see [Use tags to manage migration sources and tasks](/help/en/smc/use-cases/use-tags-to-manage-migration-sources-and-migration-tasks) and [Implement fine-grained permission management using tags](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control).
        
        **Note**
        
        A single migration task can be bound with up to 20 tags.
        
        **Intermediate Instance Type**
        
        You can select an intermediate instance type based on your actual needs. This parameter appears only when **Destination Type** is set to **ECS Image**.
        
        -   If you specify this parameter, the system will use this instance type to create the intermediate instance. If this instance type is out of stock, the migration task creation will fail.
            
        -   If you do not select an intermediate instance type, the system will select an instance type to create the intermediate instance.
            
        
        **Important**
        
        To avoid migration errors, do not stop, start, restart, or release the intermediate instance during the migration process. After the migration is complete, the instance is automatically released.
        
        **Upload Diagnostic Logs**
        
        Automatically upload SMC client logs to the SMC server-side for error diagnosis and analysis, which helps locate problems when migration errors occur. This feature is enabled by default.
        
        SMC client logs are typically stored in the `/root/smc/Logs` directory.
        
4.  In the message that appears, read the migration notes and click **Got It**.
    
5.  On the **Agentless Migration of VMware VMs** page, monitor the real-time status of the migration.
    
    The time required for data transfer depends on factors such as the source data size and network bandwidth. Wait for the Migration Task to complete.
    
    While the Migration Task status is **Synchronizing**, you can click **Pause Migration Task** in the **Actions** column to pause the task.
    
6.  (Optional) View migration details.
    
    In the **Source ID/Name** column for the migration source, click the source ID to view the migration details.
    

## **Verify migration results**

-   A **Real-time Migration Status** of **Completed** indicates a successful migration.
    
    -   If you set **Destination Type** to **ECS Image**:
        
        After the migration is successful, a custom Alibaba Cloud image is created. You can scroll to the right and in the **Migration Deliverable** column, click **View Report** to view the image detection results. For more information, see [View image detection results](/help/en/smc/user-guide/configure-image-check#1f7c2030ebra4).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877056.png)
        
        ### **(Recommended) Manually verify the migration result**
        
        In the **Actions** column, click **Create Instance**. You are redirected to the instance creation page in the ECS console with the custom image pre-selected. For more information, see [Create an instance using a custom image or a shared image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877063.png)
        
        ### **Automatically verify the migration result**
        
        **Note**
        
        To use this feature, you need to install the Cloud Assistant plugin on the instance, and the instance's operating system version must support the plugin. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
        
        This feature uses the Alibaba Cloud-provided OOS template `ACS-SMC-CreateAndVerifyInstance` to automatically verify whether an ECS instance can be created from the image generated by the migration task and start as expected.
        
        1.  In the **Actions** column, click **Verify Migration Result**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1516890471/p877062.png)
            
        2.  In the dialog box that appears, review the verification process and click **Verify Now**.
            
            You can also click **Customize Verification Script Parameters** to manually configure verification parameters.
            
        3.  View the verification result in the **Verify Migration Result** column.
            
            -   **Verification Passed**: The migration is valid. You can click **Details** to view the verification details.
                
            -   **Verification Not Completed**: Indicates that the migration result is abnormal. You can click **View Reason** to find the cause of the error and troubleshoot the problem.
                
            
            You can also click ![...](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9714973061/p169257.png) in the Actions column and then click **Go to OOS to View Historical Verifications** to view the execution history of the OOS template.
            
        
    -   If you set **Destination Type** to **ECS Instance**, you can click **View Destination Instance** in the **Actions** column to view the details of the destination ECS instance.
        
    
    After you migrate the server, perform the following operations to ensure that your business runs as expected:
    
    -   Perform data validation and verification to ensure data integrity and correctness. For more information, see [How do I check the system after migrating a Linux server?](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check the system after migrating a Windows server?](/help/en/smc/support/faq#section-thf-9yp-xf8).
        
    -   If applications and services on the source server are not set to auto-start, you must manually start them after the migration.
        
    -   The IP address changes after the migration. If your business involves IP address configurations, you must modify the domain name resolution, ICP filing, and other settings after the migration.
        
        -   If a domain name is mapped to the source server, map the domain name to the public IP address of the destination server. For more information, see [Add a DNS record](/help/en/dns/add-an-a-record-to-a-website-domain).
            
        -   If you want to keep the original private IP address, you can manually modify it after the migration is complete.
            
            -   Migrate to an **ECS Image**: You can modify the private IP address when you create an ECS instance. For more information, see [Specify the primary private IPv4 address for the primary NIC when creating an ECS instance](/help/en/ecs/user-guide/modify-a-private-ip-address#e3c6288083hpl).
                
            -   Migrate to an **ECS Instance**: If you do not modify the private IPv4 address in the advanced configuration during the [migration settings](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance#48ee7a1a54pq6) step, you can modify it after the migration is complete. For more information, see [Modify the primary private IPv4 address of the primary NIC for an existing instance](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
                
    
-   If the **Real-time Migration Status** is **Error**, the migration task has encountered an error.
    
    In this case, you must troubleshoot the issue and retry the migration:
    
    1.  In the **Actions** column, click **Troubleshoot Error** and resolve the issue based on the error code and error message. For more information, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  After fixing the problem, click **Retry Migration** in the **Actions** column. The system will resume the migration from where it left off.
        
        **Important**
        
        If the intermediate instance has been released, you must start a new migration. For more information, see [What do I do if I accidentally release an intermediate instance?](/help/en/smc/support/faq#section-1nu-xd1-bip).
        
    

## **Clean up** resources

### **Migrate to an ECS image**

During the migration, SMC creates a temporary pay-as-you-go intermediate instance named `No_Delete_SMC_Transition_Instance` in your destination Alibaba Cloud account to assist with the migration. Whether you need to manually clean up the instance depends on the migration result:

-   Migration successful: The intermediate instance is automatically released. You do not need to clean it up manually.
    
-   Migration error: The intermediate instance persists with the migration task and incurs charges. You can release it in one of the following ways to avoid unnecessary charges:
    
    -   If you no longer need this migration task, click the source ID, and then in the **Actions** column, click **Cancel Migration**. This action deletes the migration task and automatically cleans up the intermediate instance.
        
    -   Manually [release the intermediate instance](/help/en/ecs/user-guide/release-an-instance).
        

### **Migrate to an ECS instance**

During the migration, SMC creates a temporary pay-as-you-go intermediate disk named `SMC_Temp_Disk` under the destination instance to assist with the migration. Whether you need to manually clean up this intermediate disk depends on the migration result:

-   Migration successful: The intermediate disk is automatically released. You do not need to clean it up manually.
    
-   Migration error: The intermediate disk persists with the migration task and incurs charges. You can release it in one of the following ways to avoid unnecessary charges:
    
    -   If you have confirmed that a migration task is no longer needed, click its source ID. In the **Actions** column for the task, click **Cancel Migration**. This action deletes the migration task and automatically cleans up the intermediate disk.
        
    -   Manually [release the intermediate disk](/help/en/ecs/user-guide/release-a-disk).
        

## **Related documentation**

-   Incremental migration
    
    If you need to migrate incremental data multiple times, you can perform multiple incremental migrations at custom intervals after the first full migration completes. This process synchronizes incremental data from your source server to Alibaba Cloud, reducing business downtime and shortening the final cutover time. For more information, see [Agentless incremental migration for VMware VMs](/help/en/smc/use-cases/migrate-incremental-data-from-a-vmware-vm-without-an-agent).
    
-   ECS server migration guide
    
    Alibaba Cloud provides various methods for migrating servers to the cloud and within the cloud. Examples include migrating on-premises physical machines to Alibaba Cloud, migrating Tencent Cloud servers to Alibaba Cloud, and migrating ECS instances between different accounts on Alibaba Cloud. You can choose the migration method that best fits your business scenario. For more information, see [ECS server migration guide](/help/en/ecs/user-guide/migrate-servers).
    
-   SMC also provides the following migration capabilities:
    
    -   [Migrate servers to Elastic Compute Service](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance)
        
    -   [Migrate ECS instances between accounts](/help/en/smc/user-guide/migrate-servers-between-ecs-instances)
        
    -   [Migrate Alibaba Cloud Simple Application Server instances to ECS instances](/help/en/smc/user-guide/migrate-simple-application-server-to-ecs-instances)
        
    -   [Migrate desktop servers to Elastic Desktop Service](/help/en/smc/user-guide/migrate-servers-to-alibaba-cloud-eds-in-invitational-preview)
        
    -   [Migrate lightweight servers to Alibaba Cloud Simple Application Server](/help/en/smc/user-guide/migrate-source-servers-to-lightweight-application-servers)
        
    -   [Operating system migration (Linux)](/help/en/smc/user-guide/migrate-an-operating-system)
        
    -   [Containerization migration](/help/en/smc/user-guide/migrate-source-servers-to-container-registry)
        
    -   [Edge node migration](/help/en/smc/user-guide/edge-node-migration)
        
-   The SMC client is a migration tool from Alibaba Cloud that runs on the source server during migration. For more information, see [SMC client user guide](/help/en/smc/user-guide/use-the-windows-gui-version-of-an-smc-client).
    
-   [Error S11: Network connection error with the intermediate service on the destination instance during migration](/help/en/smc/support/error-prompt-target-instance-transit-service-network-connection-error)
