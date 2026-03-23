The CentOS operating system has reached its end-of-life (EOL). Using an EOL system exposes it to security vulnerabilities, makes it a target for attacks, and can lead to non-compliance with security regulations. Assess the risks to your Elastic Compute Service (ECS) instances and take action to ensure your services remain stable and secure.

## **Impacts of CentOS EOL**

As of June 30, 2024, the CentOS operating system has reached its EOL. Continued use presents a **security risk**. Existing Elastic Compute Service (ECS) instances can continue to run, but they **will no longer receive software maintenance or support, such as bug fixes and feature updates**.

**Version**

**Release date**

**EOL date**

**Recommended action**

CentOS 8

2019-09-24

2021-12-31

Migrate immediately

CentOS 7

2014-07-07

2024-06-30

Migrate immediately

CentOS 6

2011-11-27

2020-11-30

Migrate immediately

CentOS 5

2007-04-12

2017-03-31

Migrate immediately

## **Recommendations after CentOS EOL**

You must address the risks associated with the operating system EOL. For services that are exposed to the public internet or require high system stability and security, you must assess the EOL risks and promptly develop a response plan.

-   **For new services:** Use a CentOS-compatible operating system that is in its mainstream support phase to ensure long-term support and security. Do not use CentOS images that have already reached EOL to create new ECS instances.
    
-   **For existing services:** Immediately prepare to [replace the operating system](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance) or perform an [operating system migration](/help/en/ecs/user-guide/migrate-the-operating-system-of-an-ecs-instance).
    

### **Replace or upgrade the operating system**

Step 1: Choose a target operating system

Before you migrate or replace your operating system, select a [Linux operating system to replace CentOS](#84bab7a268cc5) based on factors such as security compliance, stability, operating system compatibility, budget, and long-term strategy.

Step 2: Preparations

Before you perform a migration or replacement, complete the following preparations:

-   **Application testing:** Create a staging environment with the target operating system. Deploy your applications and perform comprehensive functional, performance, and compatibility testing. Ensure that all business logic works correctly in the new environment.
    
-   **Migration drill:** Rehearse your chosen migration solution in a non-production environment to familiarize yourself with the process and potential issues. For more information, see [Troubleshooting Linux operating system migration issues](/help/en/smc/support/faqs-in-linux-operating-system-migration/).
    
-   **Plan a migration window**: During the migration process, the system kernel and software packages of the original instance are updated, and the instance is restarted multiple times. Your services will be unavailable during this period. Assess the impact and plan a suitable migration window to avoid business disruptions.
    

Step 3: Perform the operating system migration

**Important**

Before migration, create [snapshots](/help/en/ecs/user-guide/create-a-snapshot) for the system disk and all data disks of your instance to prevent data loss. If a snapshot is being created when you start the migration, the migration fails. Wait for the snapshot creation to complete before you start the migration.

**Solution**

**Scenarios**

**Impacts**

**Procedure**

**In-place migration**

Your business environment is complex and difficult to rebuild. You need to retain all data and configurations on the system disk.

-   Data on the system disk is retained.
    
-   The ECS instance restarts and is unavailable during the migration.
    

In-place migration is applicable only to [operating systems that are binary-compatible with CentOS](#08c49d8c291w5):

-   To migrate from CentOS 7 or 8 to Alibaba Cloud Linux, Anolis OS, or Red Hat Enterprise Linux, see [OS migration](/help/en/ecs/user-guide/migrate-the-operating-system-of-an-ecs-instance-1#task-2229313) to complete the migration in the ECS console.
    
-   To migrate from CentOS 7 to AlmaLinux, see [ELevating CentOS 7 to AlmaLinux](https://wiki.almalinux.org/elevate/ELevating-CentOS7-to-AlmaLinux-10.html) and log on to the ECS instance to perform the migration.
    
-   To migrate from CentOS 7 or 8 to Rocky Linux 8 or 9, see [How to migrate to Rocky Linux from CentOS](https://docs.rockylinux.org/guides/migrate2rocky/) and log on to the ECS instance to perform the migration.
    

**Replace the system disk**

You want to retain the original instance configuration, such as the IP address and instance ID, and the application can be redeployed.

-   The system disk is released and its data cannot be recovered.
    
-   The ECS instance restarts and is unavailable during the replacement.
    

After [replacing the operating system (system disk)](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance), redeploy your applications and services. After you verify your services, switch the business traffic. Before you switch, back up data and collect information from the original instance.

**Redeploy the environment**

Your business cannot tolerate downtime and requires a smooth traffic switch.

You are responsible for migrating data and traffic, and for the cost of the new ECS instance.

Replace the original instance by [creating a custom instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard). After you purchase the new instance, redeploy your applications and services. After you verify your services, switch the business traffic to the new instance and stop the original instance.

## FAQ

#### **Which operating systems can I migrate CentOS to?**

**Operating systems that are binary-compatible with CentOS**

A binary-compatible OS lets you run your existing applications and software immediately after migration without needing to recompile them. Migrating to a CentOS-compatible operating system does not guarantee bug-for-bug compatibility. You must consult the community support documentation for the target operating system to resolve any related issues.

**Operating system**

**Description**

**Pricing**

**Technical support**

[Alibaba Cloud Linux](https://www.alibabacloud.com/zh/product/alibaba-cloud-linux-2)

Provided by Alibaba Cloud and fully compatible with RHEL/CentOS. This operating system is highly optimized for Alibaba Cloud and includes free long-term support and maintenance.

No

Alibaba Cloud support

[Anolis OS](https://openanolis.cn/)

Provided by the OpenAnolis community, it is 100% compatible with the CentOS 8 software ecosystem and also compatible with other mainstream Linux distributions. It is a fully open source, neutral, and open distribution with enterprise-grade performance, stability, security, and reliability.

No

Alibaba Cloud support

[Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)

An enterprise operating system provided by Red Hat. It requires a paid subscription to use and access Red Hat's services.

Involves operating system license fees for the image. For more information, see [Red Hat](/help/en/ecs/images#1ed6b5939fopi).

Joint support from Alibaba Cloud and Red Hat

[CentOS Stream](https://www.centos.org/centos-stream/)

CentOS Stream is a rolling-release distribution provided by the official CentOS project.

No

Community support

[Rocky Linux](https://rockylinux.org/)

A community-driven, enterprise-grade operating system that is compatible with RHEL and serves as a replacement for CentOS.

No

Community support

[AlmaLinux](https://almalinux.org/)

A community fork of CentOS built by the CloudLinux team. It is 1:1 binary compatible with RHEL and supports replacing the operating system without downtime.

No

Community support

**Other operating systems**

**Operating system**

**Description**

**Pricing**

**Technical support**

[SUSE Linux Enterprise Server](https://www.suse.com/)

An operating system from SUSE that adapts to any environment and is optimized for performance, security, and reliability.

Involves operating system license fees for the image. For more information, see [Image billing](/help/en/ecs/images#29fd473e57agt).

Joint support from Alibaba Cloud and SUSE

[Ubuntu](https://ubuntu.com/)

A Linux distribution developed by Canonical. You can install a graphical desktop on Ubuntu for ease of use.

No

Community support

[Debian](https://www.debian.org/)

Debian is a popular Linux operating system known for its stability, security, and free software principles.

No

Community support

[OpenSUSE](https://www.opensuse.org/)

An operating system based on the Linux kernel, developed and maintained by the OpenSUSE project community with sponsorship from companies such as SUSE.

No

Community support

#### **How do I convert CentOS 7 to Red Hat Enterprise Linux (RHEL) 7?**

The following procedure describes how to manually convert CentOS 7 to RHEL 7 by running commands on the instance. To automate these steps, you can use the [operating system migration](/help/en/ecs/user-guide/migrate-the-operating-system-of-an-ecs-instance-1#f05e95a2bewll) feature.

**Important**

Before the conversion, stop important applications, database services, and data storage services. Also, [create snapshots](/help/en/ecs/user-guide/create-a-snapshot) to back up important data and prevent data loss or errors.

1.  (Conditional) If your server is an Alibaba Cloud server with Security Center installed, first [uninstall the Security Center client](/help/en/security-center/user-guide/uninstall-the-security-center-agent).
    
    > Security Center is the default security enhancement tool for CentOS, while RHEL 7 uses security tools provided by Red Hat. Incompatibilities and conflicts may exist between Security Center and the tools in RHEL 7. Therefore, you must uninstall the Security Center client during the conversion process to ensure system stability and compatibility.
    
2.  Download the new Alibaba Cloud repository files.
    
    ```
    sudo wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
    sudo wget -O /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo
    ```
    
3.  Update the system packages and restart the system.
    
    ```
    sudo yum -y update
    sudo reboot
    ```
    
4.  Download and install the convert2rhel tool from the official Red Hat website.
    
    ```
    sudo curl -o /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release https://security.access.redhat.com/data/fd431d51.txt
    sudo curl -o /etc/yum.repos.d/convert2rhel.repo https://cdn-public.redhat.com/content/public/repofiles/convert2rhel-for-rhel-7-x86_64.repo
    sudo yum -y install convert2rhel
    ```
    
5.  On Alibaba Cloud, [purchase a software license for the ECS instance](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
    
    You must purchase and activate a Red Hat Enterprise Linux license to download RHEL software.
    
6.  Convert CentOS 7 to RHEL 7.
    
    ```
    sudo convert2rhel -y  --no-rhsm --enablerepo rhui-rhel-7-server-rhui-rpms --enablerepo rhui-rhel-7-server-rhui-extras-rpms --enablerepo rhui-rhel-7-server-rhui-optional-rpms
    ```
    
    The process takes some time. A message similar to the following appears when the conversion is complete.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5946326071/p742484.png)
    
7.  Restart the system.
    
    After the conversion is complete, you are prompted to restart the system. Restarting allows the system to boot with the new RHEL kernel. Then, run `cat /etc/redhat-release` to verify that the operating system was successfully converted.
    
    ```
    sudo reboot
    ```
    
8.  [Calibrate the operating system of the instance](/help/en/ecs/user-guide/calibrate-the-operating-system).
    
    After the conversion, the **Operating System** value on the ECS instance details page, which is based on the OS property of the image used to create the instance, will differ from the actual operating system (Red Hat Enterprise Linux Server release 7.9). You can [calibrate the operating system of the instance](/help/en/ecs/user-guide/calibrate-the-operating-system) to update its operating system platform information.
    

#### **How do I switch repository addresses for CentOS 6 after EOL?**

The content at the CentOS 6 repository address `http://mirror.centos.org/centos-6/` has been removed. Third-party mirror sites have also removed their CentOS 6 repositories. Alibaba Cloud's repositories at `http://mirrors.cloud.aliyuncs.com` and `http://mirrors.aliyun.com` can no longer synchronize with the CentOS 6 repository. Continuing to use the default CentOS 6 repository configuration on Alibaba Cloud results in an error. An example of the error is shown below:![centos 6 error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4328707061/p187588.png)

**Solutions**

**Important**

This topic describes operations and configurations for ECS instances. If your server is not an ECS instance, ensure that it has public network access, and replace `http://mirrors.cloud.aliyuncs.com` with `http://mirrors.aliyun.com`. For example, switch the yum repository to `http://mirrors.aliyun.com/centos-vault/6.10/` and the epel repository to `http://mirrors.aliyun.com/epel-archive/6/`.

1.  Log on to the ECS instance.
    
    1.  Go to the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region) page. In the top-left corner, select the resource group and region where your target resource is located.
        
    2.  Navigate to the details page of the target instance, click **Connect**, and select **Workbench**. Follow the prompts to log on and access the terminal.
        
2.  Switch the yum repository.
    
    ```
    sudo vim /etc/yum.repos.d/CentOS-Base.repo 
    ```
    
    Press i to enter edit mode and replace the content with the following.
    
    ```
    [base]
    name=CentOS-6.10
    enabled=1
    failovermethod=priority
    baseurl=http://mirrors.cloud.aliyuncs.com/centos-vault/6.10/os/$basearch/
    gpgcheck=1
    gpgkey=http://mirrors.cloud.aliyuncs.com/centos-vault/RPM-GPG-KEY-CentOS-6
    
    [updates]
    name=CentOS-6.10
    enabled=1
    failovermethod=priority
    baseurl=http://mirrors.cloud.aliyuncs.com/centos-vault/6.10/updates/$basearch/
    gpgcheck=1
    gpgkey=http://mirrors.cloud.aliyuncs.com/centos-vault/RPM-GPG-KEY-CentOS-6
    
    [extras]
    name=CentOS-6.10
    enabled=1
    failovermethod=priority
    baseurl=http://mirrors.cloud.aliyuncs.com/centos-vault/6.10/extras/$basearch/
    gpgcheck=1
    gpgkey=http://mirrors.cloud.aliyuncs.com/centos-vault/RPM-GPG-KEY-CentOS-6
    ```
    
    After editing, press the Esc key, enter `:wq`, and press Enter to save and exit the file.
    
3.  Switch the epel repository.
    
    ```
    sudo vim /etc/yum.repos.d/epel.repo
    ```
    
    To switch the repository, press i to enter edit mode and change the content as follows.
    
    ```
    [epel]
    name=Extra Packages for Enterprise Linux 6 - $basearch
    enabled=1
    failovermethod=priority
    baseurl=http://mirrors.cloud.aliyuncs.com/epel-archive/6/$basearch
    gpgcheck=0
    gpgkey=http://mirrors.cloud.aliyuncs.com/epel-archive/RPM-GPG-KEY-EPEL-6
    ```
    
    After editing, press the Esc key, enter `:wq`, and press Enter to save your changes and exit.
    
4.  Run the `yum repolist` command. If the repository list is displayed successfully without a 404 error, the repository switch is successful.
    

#### **How to switch the source configuration on a CentOS 6 instance?**

When you use a custom image to create a new ECS instance, `cloud-init` automatically initializes the repository configuration of the system on startup. If you want to create a custom image from an instance that has a custom repository configuration and preserve that configuration, you must modify the `cloud-init` configuration file /etc/cloud/cloud.cfg on the source instance before you create the custom image.

1.  Edit the /etc/cloud/cloud.cfg file.
    
    ```
    sudo vim /etc/cloud/cloud.cfg
    ```
    
2.  Press i to enter edit mode and use `#` to comment out the `- source-address` module under `cloud_init_modules:`.
    
    After you comment out the module, the configuration in the file appears as follows:![cloudinit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2014351361/p243823.png)
    
3.  After editing, press the Esc key, enter `:wq`, and press Enter to save and exit the file.
    

## **References**

For an overview of the operating system lifecycle, its stages, and standard solutions for end-of-life or extended support phases, see [Operating system lifecycle overview](/help/en/ecs/user-guide/eol-overview#concept-2442176).
