If you want to complete system configurations or run specific business scripts when you create an Elastic Compute Service (ECS) instance, such as pre-installing NGINX and Docker or modifying the hostname, you can configure the **User Data** parameter.

## Instance user data

Instance user data refers to data that is uploaded to an ECS instance, such as scripts, instructions, and configuration files. You can use instance user data to initialize or configure an ECS instance. For example, the first time an ECS instance is started, the instance automatically uses instance user data to run service startup scripts, install software, and print logs. Instance user data can be automatically run the first time an ECS instance is started. Instance user data in specific formats can also be run each time a Linux ECS instance is started. For more information, see [Formats and running frequencies of instance user data](#8c8d45e05fro5).

## Limits

-   The instances must be deployed in virtual private clouds (VPCs).
    
-   The instances must be created from public images of the following operating systems or custom images that are derived from the public images:
    
    -   Alibaba Cloud Linux, CentOS, CentOS Stream, Ubuntu, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, openSUSE, Debian, AlmaLinux, Rocky Linux, and Fedora
        
    -   Windows Server 2008 R2 or later
        
-   For [retired instance types](/help/en/ecs/user-guide/retired-instance-types#concept-t1v-lxw-wgb), I/O optimized instances support user data and non-I/O optimized instances do not support user data.
    

## Use instance user data when you create an ECS instance

### Step 1: Prepare instance user data

During instance initialization, the initialization tool reads instance user data to complete custom configurations. Linux and Windows ECS instances use different initialization tools. Each initialization tool supports multiple instance user data formats. The following section describes the instance user data formats supported by Linux and Windows ECS instances and the running frequencies of instance user data in different formats.

**Formats and running frequencies of instance user data**

## Linux instance

Linux instances use the `cloud-init` component to complete initialization configurations. Different configurations are run based on whether the instance is started for the first time. Specific instances that use early versions of images can also use `Upstart Job` to complete initialization configurations.

The instance user data formats supported by the `cloud-init` component include `User-Data` and `Cloud Config` data that can be directly used to configure ECS instances. The component also supports other user data formats. The most common formats are `include` files and `Gzip` compressed content. In addition to the `cloud-init` component, specific instances that use early versions of images can use `Upstart Job` to complete initialization configurations.

**Note**

-   For more information about the formats of instance user data, see [User data formats](https://cloudinit.readthedocs.io/en/latest/topics/format.html) of the cloud-init documentation.
    
-   If the size of a user-data script, cloud-config data, or include file exceeds 32 KB, we recommend that you select **Gzip compressed content** as the data format.
    
-   If you want to run a user-data script each time an instance is started, we recommend that you select **Cloud Config data** or **Upstart Job** as the data format.
    

## User-data scripts

-   **Overview**
    
    After a user-data script is passed to a Linux instance, the script is executed as a shell script and is run only once the first time the instance is started.
    
-   **Running frequency**
    
    -   Instance startup: A user-data script is run only once the first time an ECS instance is started. The script is not run on instance restart.
        
    -   Operating system replacement: A user-data script is automatically run.
        
    -   System disk re-initialization: A user-data script is automatically run.
        
    
    **Important**
    
    The script is not automatically run in the following scenarios:
    
    -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
        
    -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
        
    
-   **Format**
    
    The script must begin with a shebang (`#!`).
    
-   **Sample user-data scripts**
    
    -   **Run a custom script**
        
        ```
        #!/bin/sh
        echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
        ```
        
        The sample user-data script is run only once the first time an ECS instance is started, and writes the system time to the userdata\_test.txt file.
        
    -   **Customize software repository, DNS resolution, and time synchronization service configurations for an ECS instance**
        
        When you create an ECS instance, you can use a user-data script to customize software repository, DNS resolution, and time synchronization service configurations for the instance. In the following sample code, CentOS Stream 9 is used. Replace the configurations based on your operating system.
        
        **Important**
        
        When an instance starts, the system configures the default YUM repository, the Network Time Protocol (NTP) service, and the Domain Name System (DNS) services. You can use the user data of the instance to change the default YUM repository and NTP and DNS services that are configured. Take note of the following items:
        
        -   If you use a custom YUM repository, Alibaba Cloud stops providing YUM repository support.
            
        -   If you customize the NTP service, Alibaba Cloud stops providing time synchronization services.
            
        
        ```
        #!/bin/sh
        # Modify DNS
        echo "nameserver 114.114.114.114" | tee /etc/resolv.conf
        # Modify yum repo and update
        cp /etc/yum.repos.d/centos.repo /etc/yum.repos.d/centos.repo.bak
        cp /etc/yum.repos.d/centos-addons.repo /etc/yum.repos.d/centos-addons.repo.bak
        sed -i "s@http://mirrors.cloud.aliyuncs.com/centos-stream/@https://mirror.stream.centos.org/@g" /etc/yum.repos.d/centos.repo
        sed -i "s@http://mirrors.cloud.aliyuncs.com/centos-stream/@https://mirror.stream.centos.org/@g" /etc/yum.repos.d/centos-addons.repo
        yum update -y
        # Modify NTP Server
        echo "server ntp1.aliyun.com" | tee /etc/ntp.conf
        systemctl restart ntpd.service
        ```
        
        **Note**
        
        Replace `114.114.114.114` with the actual DNS server address, `https://mirror.stream.centos.org` with the actual YUM repository address of CentOS Stream, and `server ntp1.aliyun.com` with the actual NTP server address of Alibaba Cloud.
        
        You can also use cloud-config data to change the YUM repository. However, cloud-config data is less flexible than user-data scripts and is unsuitable for scenarios in which specific YUM repositories are preconfigured by Alibaba Cloud. We recommend that you use user-data scripts.
        
    -   **Specify an administrator account**
        
        By default, Linux instances use the root account as the administrator account. You can use instance user data on an instance to specify another account as the administrator account.
        
        ```
        #!/bin/sh
        useradd test-user
        echo "test-user   ALL=(ALL)        NOPASSWD:ALL" | tee -a /etc/sudoers
        mkdir /home/test-user/.ssh
        touch /home/test-user/.ssh/authorized_keys
        echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCRnnUveAis****" | tee -a /home/test-user/.ssh/authorized_keys
        ```
        
        **Note**
        
        Replace _ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCRnnUveAis\*\*\*\*_ in the preceding code with your actual public key.
        

**Note**

If an issue occurs when a user-data script is run, you can run the following common Cloud Assistant command to obtain the error logs: `ACS-ECS-UserData-Check-for-linux.sh`. If an error message appears in the logs, an error occurred when the script was run. If no error message appears in the logs, no error occurred when the script was run. In this case, check the script from other aspects to identify the cause of the issue. For information about common Cloud Assistant commands, see [View and run common commands](/help/en/ecs/user-guide/view-and-run-common-cloud-assistant-commands).

## Cloud-config data

-   **Overview**
    
    Cloud-config is a declarative syntax used to instruct cloud-init on how to configure an instance. It uses modules to perform specific tasks, such as installing packages or configuring network settings. When an instance starts, cloud-init processes this data to automatically configure and deploy the instance.
    
-   **Running frequency**
    
    -   Instance startup: Whether to execute the tasks in the cloud-config data is determined by the running frequency of the modules corresponding to the tasks. For information about the modules, see [Modules](https://cloudinit.readthedocs.io/en/latest/topics/modules.html).
        
        -   Once-per-instance: A module is run only once the first time an ECS instance is started. For example, modules such as Apt and Set Passwords are configured and run at a frequency of Once-per-instance. The modules are not run on instance restart.
            
        -   Always: A module is run each time an ECS instance is started. For example, when modules such as Bootcmd and Update Etc Hosts are run at a frequency of Always, the modules are run each time an ECS instance is started.
            
    -   Operating system replacement: A module is automatically run.
        
    -   System disk re-initialization: A module is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    -   The first line starts with `#cloud-config`, and the header does not contain spaces.
        
    -   Cloud-config data must follow the YAML syntax.
        
-   **Sample cloud-config data**
    
    -   **Specify a software repository for an ECS instance**
        
        In the **User Data** field for an ECS instance, enter the following content to specify a software repository for the instance. In this example, an Ubuntu image is used to create the ECS instance. If you use another image, replace the configurations in the sample code with the actual configurations for the image.
        
        ```
        #cloud-config
        apt:
          preserve_sources_list: false
          disable_suites:
            - $RELEASE-updates
            - backports
            - $RELEASE
            - mysuite
          primary:
            - arches:
                - amd64
                - i386
                - default
              uri: http://us.archive.ubuntu.com/ubuntu
        ```
        
    -   **Configure automatic installation for the NGINX service**
        
        In the **User Data** field for an ECS instance, enter the following content to allow the instance to automatically install the NGINX service:
        
        ```
        #cloud-config
        packages: 
         - nginx 
        runcmd: 
         - systemctl start nginx.service
        ```
        
    -   **Specify a hostname**
        
        In the **User Data** field for an ECS instance, enter the following content to specify a hostname for the instance:
        
        ```
        #cloud-config
        hostname: my-instance
        fqdn: my-instance.localdomain
        ```
        
    -   **Allow a custom script to automatically run**
        
        In the **User Data** field for an ECS instance, enter the following content to allow a shell script to automatically run each time the instance is started:
        
        ```
        #cloud-config
        bootcmd:
        - echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
        ```
        

## Include files

-   **Overview**
    
    An include file contains one or more links to user-data scripts or cloud-config data. Each link occupies a separate line. When an ECS instance is started, cloud-init reads and parses the links one by one. If an error occurs when cloud-init reads a link, cloud-init stops reading the remaining links.
    
    **Note**
    
    You can use Alibaba Cloud Object Storage Service (OSS) to upload user-data scripts or cloud-config data to an ECS instance, obtain links, and specify the validity period of links. For more information, see [Get started with the OSS console](/help/en/oss/user-guide/console-quick-start).
    

-   **Running frequency**
    
    -   Instance startup: The running frequency varies based on the content to which a link is directed. For example, if a link is directed to a user-data script, the script is run only once the first time an ECS instance is started. If the link is directed to cloud-config data, the running frequency of cloud-config data prevails.
        
    -   Operating system replacement: An include file is automatically run.
        
    -   System disk re-initialization: An include file is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    The first line starts with `#include`, and the header does not contain spaces.
    
-   **Sample include file**
    
    ```
    #include
    https://ecs-image-test.oss-cn-hangzhou.aliyuncs.com/userdata/myscript.sh
    ```
    
    In this example, the include file contains a link to a user-data script, and the script is run only once the first time an ECS instance is started.
    
    **Note**
    
    If you use an include file or Gzip compressed content, use a storage service to upload the script, obtain the script link, and specify the validity period of the link. We recommend that you use Alibaba Cloud OSS. For more information, see [Get started with the OSS console](/help/en/oss/user-guide/console-quick-start).
    

## Gzip compressed content

-   **Overview**
    
    If your user data (such as a user-data script, cloud-config data, or an include file) exceeds 32 KB, you can compress it into a `.gz` file, upload it to a URL, and then reference that URL in an include file. Cloud-init automatically decompresses the Gzip compressed content. The result of running the decompressed content is the same as the result of running uncompressed content that is directly passed to an ECS instance.
    
    **Note**
    
    You can also use Alibaba Cloud OSS to upload user-data scripts or cloud-config data to an ECS instance, obtain links, and specify the validity period of links. For more information, see [Get started with the OSS console](/help/en/oss/user-guide/console-quick-start).
    

-   **Running frequency**
    
    -   Instance startup: The running frequency varies based on the script type and module type. For example, if a link is directed to Gzip compressed content that is a user-data script, the Gzip compressed content is run only once the first time an ECS instance is started.
        
    -   Operating system replacement: Gzip compressed content is automatically run.
        
    -   System disk re-initialization: Gzip compressed content is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    The first line starts with `#include`, and the header does not contain spaces.
    
-   **Sample code for Gzip compressed content**
    
    ```
    #include
    https://ecs-image-test.oss-cn-hangzhou.aliyuncs.com/userdata/myscript.gz
    ```
    
    In this example, an include file contains a link to Gzip compressed content that is a user-data script. After cloud-init reads the user-data script that is Gzip compressed, the script is automatically decompressed and run only once the first time the instance is started.
    

## Upstart jobs

**Note**

To use an Upstart job on an instance, install the Upstart service on the instance. The instance must run one of the following operating systems: CentOS 6, Ubuntu 10, Ubuntu 12, Ubuntu 14, Debian 6, and Debian 7.

-   **Overview**
    
    Upstart is an event-driven initialization system. An Upstart job is a configuration file that defines when to start or stop and how to run a service or task. An Upstart job file has a file extension of .conf and is located in the /etc/init/ directory.
    
-   **Running frequency**
    
    -   Instance startup: An Upstart job is automatically run each time an ECS instance is started.
        
    -   Operating system replacement: An Upstart job is automatically run.
        
    -   System disk re-initialization: An Upstart job is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    The first line starts with `#upstart-job`, and the header does not contain spaces.
    
-   **Sample Upstart job**
    
    ```
    #upstart-job
    description "upstart test"
    start on runlevel [2345] #Starts at run levels 2, 3, 4, and 5.
    stop on runlevel [!2345] #Stops at run levels other than 2, 3, 4, and 5.
    exec echo "Hello World. The time is now $(date -R)!" | tee /root/output.txt
    ```
    
    The sample Upstart job returns a message that contains a timestamp when the system runs at the specified run level and adds the message to the `/root/output.txt` file. The Upstart job stops when the system runs at a run level that is different from the preceding specified run levels.
    

## **MIME multi-part files**

-   **Overview**
    
    MIME multi-part files can transmit multiple types of instructions. For example, you can use MIME multi-part files to include both `text/cloud-config` (for cloud-init configuration) and `text/x-shellscript` (shell scripts) in user data. Cloud-init parses and executes the instructions separately.
    
-   **Running frequency**
    
    -   Instance startup: The running frequency depends on the part type of MIME message and the cloud-init configuration. For example, if a part of a MIME message is a user-data script, the script is run only once the first time an ECS instance is started. If a part of a MIME message is cloud-config data, the running frequency of cloud-config data prevails.
        
    -   Operating system replacement: A MIME multi-part file is automatically run.
        
    -   System disk re-initialization: A MIME multi-part file is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    -   The first line starts with `Content-Type: multipart/mixed: boundary="****"`, where `boundary` can be customized, and the header does not contain spaces.
        
    -   The second line specifies the version `MIME-Version: 1.0`, which is typically required in every MIME message.
        
-   **Sample MIME multi-part file**
    
    ```
    Content-Type: multipart/mixed; boundary="//"
    MIME-Version: 1.0
    
    --//
    Content-Type: text/cloud-config; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-Disposition: attachment; filename="cloud-config.txt"
    
    #cloud-config
    runcmd:
    - [ mkdir, /test-cloudinit ]
    write_files:
    - path: /test-cloudinit/cloud-init.txt
    write_files:
    - content: |
        Created by cloud-init
      path:  /test-cloudinit/cloud-init.txt
      append: true
    
    --//
    Content-Type: text/x-shellscript; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-Disposition: attachment; filename="userdata.txt"
    
    #!/bin/bash
    mkdir test-userscript
    touch /test-userscript/userscript.txt
    echo "Created by bash shell script" >> /test-userscript/userscript.txt
    --//--
    ```
    
    The sample MIME multi-part file contains cloud-init instructions and a Bash shell script.
    
    -   The cloud-init instructions create a file (`/test-cloudinit/cloud-init.txt`) and write `Created by cloud-init` to it.
        
    -   The Bash shell script creates a file (`/test-userscript/userscript.txt`) and writes `Created by bash shell script` to it.
        

## Windows instance

A Windows instance uses the Plugin\_Main\_CloudinitUserData plug-in of the Vminit component to run instance user data scripts. The plug-in is run only once the first time the instance is started. The plug-in supports batch and PowerShell scripts.

## Batch scripts

-   **Running frequency**
    
    -   Instance startup: A batch script is run only once the first time an ECS instance is started. The script is not run on instance restart.
        
    -   Operating system replacement: A batch script is automatically run.
        
    -   System disk re-initialization: A batch script is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    -   The first line is `[bat]`, and the header does not contain spaces.
        
    -   You can enter only half-width characters. No other characters are allowed.
        
    -   The path to which the instance user data is written cannot be `C:\Users`. Otherwise, the instance user data fails to be run.
        
        **Note**
        
        In Windows, `C:\Users` and its subdirectories are the default storage locations for user profiles and data, which can be accessed only after you log on to the system. User data is executed during system initialization before you log on. Therefore, any attempt to write data to the `C:\Users` directory fails.
        
-   **Sample batch script**
    
    -   **Run a custom script**
        
        ```
        [bat]
        echo "bat test" > C:\userdata_test.txt
        ```
        
        In this example, the batch script is run only once the first time an ECS instance is started and writes `"bat test"` to the userdata\_test.txt file.
        

## PowerShell scripts

-   **Running frequency**
    
    -   Instance startup: A PowerShell script is run only once the first time an ECS instance is started. The script is not run on instance restart.
        
    -   Operating system replacement: A PowerShell script is automatically run.
        
    -   System disk re-initialization: A PowerShell script is automatically run.
        
        **Important**
        
        The script is not automatically run in the following scenarios:
        
        -   If you use a custom image to replace the operating system of the source instance from which the custom image was created, the system determines that the instance is not started for the first time and does not run the script.
            
        -   If you use a custom image to create an ECS instance, the system disk of the instance stores data. When you initialize the system disk, the system determines that the instance is not started for the first time and does not run the script.
            
        
-   **Format**
    
    -   The first line is `[powershell]`, and the header does not contain spaces.
        
    -   You can enter only half-width characters. No other characters are allowed.
        
    -   The path to which the instance user data is written cannot be `C:\Users`. Otherwise, the instance user data fails to be run.
        
        **Note**
        
        In Windows, `C:\Users` and its subdirectories are the default storage locations for user profiles and data, which can be accessed only after you log on to the system. User data is executed during system initialization before you log on. Therefore, any attempt to write data to the `C:\Users` directory fails.
        
-   **Sample PowerShell script**
    
    -   **Run a custom script**
        
        ```
        [powershell]
        write-output "powershell test" | Out-File C:\userdata_test.txt
        ```
        
        In this example, the PowerShell script is run only once the first time an ECS instance is started and writes `powershell test` to the userdata\_test.txt file.
        

### Step 2: Use the prepared instance user data when you create an ECS instance

-   **Create an ECS instance in the ECS console**
    
    On the [Custom Launch](https://ecs-buy.alibabacloud.com/wizard/#/) tab of the ECS instance buy page, expand the **Advanced Settings(Optional)** section. In the **User Data** field, enter the instance user data.
    
    **Important**
    
    If your user data is already Base64-encoded, select **Enter Base64 Encoded Information**. Note that the original, unencoded data must not exceed 32 KB. If you provide plain text, do not select this option; the system automatically encodes it for you.
    
-   **Create an ECS instance by calling an API operation**
    
    If you create an ECS instance by calling the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) or [CreateInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createinstance) operation, specify the `UserData` parameter.
    

### **Step 3: Check whether the instance user data can be run as expected**

Check whether a custom script can be run as expected based on the content of the script. In this example, the following user-data script is passed to a Linux instance:

```
#!/bin/sh
echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt
```

The sample user-data script is run only once the first time the ECS instance is started, and writes the system time to the userdata\_test.txt file. To check whether the script can be run as expected, run the `cat userdata_test.txt` command. The following command output indicates that the system time is written to the `userdata_test.txt` file.

![view-result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8276941261/p272241.png)

**Note**

If an issue occurs when a user-data script is run, you can run the following common Cloud Assistant command to obtain the error logs: `ACS-ECS-UserData-Check-for-linux.sh`. If an error message appears in the logs, an error occurred when the script was run. If no error message appears in the logs, no error occurred when the script was run. In this case, check the script from other aspects to identify the cause of the issue. For information about common Cloud Assistant commands, see [View and run common commands](/help/en/ecs/user-guide/view-and-run-common-cloud-assistant-commands).

## **Other operations**

### **View the instance user data of an existing ECS instance**

After instance user data is passed to an ECS instance, you can view the instance user data by using the metadata service, in the ECS console, or by calling an API operation.

## View instance user data by using the metadata service (security hardening mode)

-   Linux instance
    
    ```
    TOKEN=`curl -X PUT "http://100.100.100.200/latest/api/token" -H "X-aliyun-ecs-metadata-token-ttl-seconds:180"`
    curl -H "X-aliyun-ecs-metadata-token: $TOKEN" http://100.100.100.200/latest/user-data
    ```
    
-   Windows instance
    
    ```
    $token = Invoke-RestMethod -Headers @{"X-aliyun-ecs-metadata-token-ttl-seconds" = "180"} -Method PUT -Uri http://100.100.100.200/latest/api/token
    Invoke-RestMethod -Headers @{"X-aliyun-ecs-metadata-token" = $token} -Method GET -Uri http://100.100.100.200/latest/user-data
    ```
    

**Note**

-   In the preceding example, the validity period of the token is 180 seconds. You can change the validity period based on your business scenario.
    
-   In this example, the security hardening mode of the metadata service is used to obtain metadata. For more information about how to obtain metadata by using the metadata service, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/#52259e7d5fk8e).
    
-   For more information about metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).
    

## View instance user data in the ECS console

1.  Make sure that the ECS instance is in the **Stopped** state.
    
    **Important**
    
    If the ECS instance is billed by using the pay-as-you-go billing method and resides in a VPC, we recommend that you select **Standard Mode** in the **Stop Mode** section when you stop the instance. If you select **Economical Mode**, the computing resources (vCPUs and memory) of the instance are recycled. As a result, the instance may fail to be restarted due to insufficient resources. For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    
2.  Click the ID of the ECS instance whose instance user data you want to view to go to the instance details page. In the upper-right corner of the page, click **All Actions**. In the pane that appears, search for and click **Set User Data**. In the **User Data** field of the dialog box that appears, view the instance user data that you configured.
    

## Query instance user data by calling an API operation

To query the instance user data of an ECS instance, you can call the DescribeUserData operation. For more information, see [DescribeUserData](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeuserdata).

### **Modify the instance user data of an existing ECS instance**

To modify the instance user data of an existing ECS instance, perform the following steps in the ECS console:

1.  Make sure that the ECS instance is in the **Stopped** state.
    
    **Important**
    
    If the ECS instance is billed by using the pay-as-you-go billing method and resides in a VPC, we recommend that you select **Standard Mode** in the **Stop Mode** section when you stop the instance. If you select **Economical Mode**, the computing resources (vCPUs and memory) of the instance are recycled. As a result, the instance may fail to be restarted due to insufficient resources. For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    
2.  Click the ID of the ECS instance that you want to manage to go to the instance details page. In the upper-right corner of the page, click **All Actions**. In the pane that appears, search for and click **Set User Data**. In the **User Data** field, enter instance user data.
    

**Important**

After you modify the instance user data of an existing ECS instance, whether the instance user data is run after the instance is started is determined by the format and running frequency of the instance user data. You must identify your requirements before you modify the instance user data. For more information, see [Formats and running frequencies of instance user data](#8c8d45e05fro5).

## **References**

-   You can use the User Data feature of Auto Scaling to allow multiple ECS instances to automatically run configured scripts or commands when the instances are started. This ensures the consistency of ECS instance configurations and simplifies O&M. For more information, see [Use instance user data to automatically configure ECS instances](/help/en/auto-scaling/use-cases/enable-the-instance-user-data-feature-to-automatically-configure-ecs-instances).
    
-   If you want a service or a script to rapidly recover when the service or script is interrupted due to an issue such as a program exception, instance restart, or power failure, use the Cloud Assistant plug-in named `ecs-tool-servicekeepalive`. For more information, see [Use a Cloud Assistant plugin to keep services alive](/help/en/ecs/user-guide/use-the-cloud-assistant-plugin-for-service-keepalive).
    
-   For information about how to manage instance initialization configurations, see [Initialization tools](/help/en/ecs/user-guide/manage-the-instance-initialization-configuration).
