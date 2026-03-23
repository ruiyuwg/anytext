To use a Key Management Service (KMS) hardware key management instance, you must connect it to a Cloud Hardware Security Module (CloudHSM) cluster. A CloudHSM cluster provides automatic data synchronization, load balancing, and high availability. This topic describes how to configure a CloudHSM cluster for a KMS hardware key management instance.

## Architecture example

Integrating KMS with a CloudHSM cluster combines the flexibility of key management with hardware-level security. This integration meets compliance requirements such as China's SM standards or FIPS 140-2 Level 3. KMS manages keys and ensures that their lifecycles are strictly controlled, which reduces the complexity of using HSMs. The HSMs use hardware-level security to securely store key material. The communication between KMS and the CloudHSM cluster uses a bidirectional Transport Layer Security (TLS) authenticated encryption channel to ensure secure transmission.

The HSM management tool can be installed only on an Alibaba Cloud Elastic Compute Service (ECS) instance. Therefore, you must deploy an ECS instance in the virtual private cloud (VPC) subnet of the master HSM. You can then use the ECS instance to connect to the master HSM and perform configurations. You can also use a local terminal to perform configurations, but you must make sure that the terminal can connect to the HSM network.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7773684671/CAEQTxiBgID3v9Kn1xkiIDkxNGM4OWI5ZTk4NTRhMTM4M2E2ZGQ4MzA4YmQ5ZDk45018950_20250326153612.750.svg)

## **Notes**

-   A KMS hardware key management instance can be associated only with a **General-purpose HSM**.
    
-   The HSMs, the KMS hardware key management instance, and the ECS instance must be deployed in the same region and the same VPC.
    
-   To manage HSMs in the Chinese mainland, the ECS instance must run a Windows operating system. To manage HSMs outside the Chinese mainland, the ECS instance must run a CentOS 8 or Alibaba Cloud Linux operating system.
    

## **Supported regions and zones for HSMs**

-   The Chinese mainland
    
    **Region**
    
    **Region ID**
    
    **Zone**
    
    China (Hangzhou)
    
    cn-hangzhou
    
    Zone A, Zone G
    
    China (Shanghai)
    
    cn-shanghai
    
    Zone A, Zone B, Zone F
    
    China (Beijing)
    
    cn-beijing
    
    Zone A, Zone F, Zone K
    
    China (Shenzhen)
    
    cn-shenzhen
    
    Zone A, Zone E
    
    China (Chengdu)
    
    cn-chengdu
    
    Zone A, Zone B
    
-   Outside the Chinese mainland
    
    **Region**
    
    **Region ID**
    
    **Zone**
    
    China (Hong Kong)
    
    cn-hongkong
    
    Zone B, Zone C
    
    Singapore
    
    ap-southeast-1
    
    Zone A, Zone B
    
    Malaysia (Kuala Lumpur)
    
    ap-southeast-3
    
    Zone A, Zone B
    
    SAU (Riyadh - Partner Region)
    
    me-central-1
    
    Zone A, Zone B
    
    Indonesia (Jakarta)
    
    ap-southeast-5
    
    Zone A, Zone B
    

## Prerequisites

-   A VPC is created, and a vSwitch is created in two different zones. For more information, see [Create a VPC and vSwitches](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx).
    
-   An ECS instance is created in the same VPC as the master HSM. For more information, see [Create an instance using the wizard](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
    **Note**
    
    -   To manage HSMs in the Chinese mainland, the ECS instance must run a Windows operating system. To manage HSMs outside the Chinese mainland, the ECS instance must run a CentOS 8 or Alibaba Cloud Linux operating system.
        
    -   This topic uses an ECS instance as an example. You can also use a local terminal to manage the HSM. If you use a local terminal, you must connect it to the VPC that contains the HSM using a VPN or an Express Connect circuit. For more information, see [Connect a client to a VPC using an SSL-VPN connection](/help/en/vpn/sub-product-ssl-vpn/getting-started/connect-a-client-to-a-vpc) or [Connect an on-premises IDC to a VPC using an Express Connect circuit](/help/en/express-connect/getting-started/connect-a-data-center-to-a-vpc-by-using-an-express-connect-circuit).
        
    

## **Configure a GVSM (Guomi) HSM cluster**

### **Step 1: Purchase an HSM cluster**

You can use an HSM cluster to associate and manage a group of HSM instances that are in different zones of the same region and are dedicated to the same application. An HSM cluster provides high availability, load balancing, and horizontal scaling of cryptographic operations.

1.  Log on to the [Cloud Hardware Security Module console](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list/ap-southeast-1). In the top navigation bar, select the required region.
    
2.  On the **VSMs** tab, click **Create HSM**.
    
3.  On the CloudHSM purchase page, configure the instance based on the following table, click **Buy Now**, and complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select a region for the HSM instance.
    
    **Important**
    
    You can use an HSM instance only in a VPC. The HSM instance, your VPC, and your KMS hardware key management instance must be in the same region.
    
    **Crypto Service Type**
    
    Select **General-purpose Server HSM GVSM**.
    
    **Deployment Mode**
    
    Select **Dual-zone Deployment**.
    
    **Cluster Name**
    
    The name must be 1 to 24 characters in length and start with a letter, a digit, or a Chinese character. It can contain digits, underscores (\_), and hyphens (-).
    
    **VPC**
    
    Select the VPC to which the HSM belongs.
    
    **Whitelist**
    
    Select **Yes**. HSM adds the VPC network segment to the cluster whitelist so that all IP addresses in the VPC can access the HSM cluster.
    
    **vSwitch**
    
    Select two to four vSwitches. The vSwitches must be in different zones.
    
    **generate\_cert**
    
    Select **Yes**. HSM then automatically generates the certificate required for encrypted communication and completes the certificate configuration within the HSM. KMS automatically retrieves the relevant certificate file and completes the client configuration. You do not need to manage the certificate generation and configuration process. KMS and the HSM cluster use a TLS bidirectional authenticated encryption channel to ensure secure transmission. The certificate validity period is 10 years.
    
    **Important**
    
    **Do not register a UKEY administrator for the HSM.** The certificates are valid for 10 years. HSM can automatically rotate the certificates before they expire. If you register a UKEY administrator, the rotation will fail.
    
    **Data Backup and Restore**
    
    This feature lets you back up and restore HSM instance data to ensure data security and durability. Each backup can back up the data of one HSM.
    
    If the HSM is released, backup images of the HSM are retained for 90 days. After the retention period elapses, the backup images are automatically deleted. In addition, the cross-region image replication feature is provided to enhance disaster recovery capabilities. For more information, see [Data backup and recovery](/help/en/kms/cloud-hardware-security-module/user-guide/data-backup-and-restoration).
    
    **Image Quota**
    
    The number of images in the backup. Each image can back up the data of one HSM.
    
    The HSM instance is automatically backed up at 00:00 (UTC+8) every day to generate an image. When the number of images reaches the upper limit, the system automatically overwrites the earliest image.
    
    **Quantity**
    
    The default value is 2. You do not need to change this value.
    
    **Subscription Period**
    
    Select a subscription duration.
    
    To prevent the permanent loss of keys, which can occur if your CloudHSM service expires because it was not renewed on time, select **Auto-renewal** at the time of purchase. When you select **Auto-renewal**, Alibaba Cloud automatically charges the payment account that you used to purchase the HSM 9 calendar days before the service expires. To prevent payment failure, ensure that your payment account has a sufficient balance.
    
4.  Read the **Terms of Service**, click **Buy Now**, and then click **Subscribe** to complete the purchase.
    
    After the purchase is complete, you can view the HSM instance on the **VSMs** page. The HSM cluster is created in approximately 5 minutes.
    

### **Step 2: Synchronize cluster data**

Check the synchronization mode of the cluster to determine whether you need to synchronize data for the HSMs in the cluster.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4191358571/p934127.png)

-   **Automatic Synchronization Cluster**
    
    The data of the HSMs in the cluster is automatically synchronized. You do not need to manually synchronize data.
    
-   **Manual Synchronization Cluster**
    
    After you create and activate a cluster for the first time, you must manually synchronize the data of the master HSM to the subordinate HSMs in the cluster. When you scale out the cluster, the cluster data is automatically synchronized to the newly added HSM instances.
    
    1.  In the **Actions** column, click **Synchronize Cluster** to synchronize the data of the master HSM to the subordinate HSM.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4191358571/p934130.png) During synchronization, the cluster status is **Synchronizing**.
        
    2.  After the cluster synchronization is complete, check whether the HSM digests are consistent.
        
        Check the digest on the HSM product page. If the digests for the two HSMs are identical, the HSM cluster configuration is complete. If the digests are different, repeat the data synchronization. If the digests are still different, [contact us](/help/en/kms/cloud-hardware-security-module/support/hsm-contact-us).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4191358571/p934138.png)
        

## **Configure a FIPS-compliant HSM cluster**

### **Step 1: Purchase two HSM instances**

1.  Log on to the [Cloud Hardware Security Module console](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list/ap-southeast-1). In the top navigation bar, select the required region.
    
2.  On the **VSMs** tab, click **Create HSM**.
    
3.  On the CloudHSM purchase page, configure the instance based on the following table and click **Buy Now**.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select a region for the HSM instance.
    
    **Important**
    
    You can use an HSM instance only in a VPC. The HSM instance, your VPC, and your KMS hardware key management instance must be in the same region.
    
    **Crypto Service Type**
    
    Select **GVSM**.
    
    **Deployment Mode**
    
    Select Dual-zone deployment. The specific zones are assigned by HSM.
    
    **Data Backup and Restore**
    
    Each backup contains the data from a single HSM. After you enable this feature, you must select the number of images. Each image allows for one backup of the HSM data. For more information, see [Data backup and recovery](/help/en/kms/cloud-hardware-security-module/user-guide/mirror-backup).
    
    **Quantity**
    
    The default value is 2. You do not need to change this value.
    
    **Subscription Period**
    
    The subscription duration. Select the same subscription duration as your KMS hardware key management instance.
    
    **Note**
    
    Select **Auto-renewal** when you make a purchase to prevent the permanent loss of keys, which can occur if the CloudHSM service is not renewed before it expires. If you select Auto-renewal, Alibaba Cloud automatically deducts fees from the payment account that you used to purchase the HSM nine calendar days before the CloudHSM service expires.
    
4.  Read the **Terms of Service**, click **Buy Now**, and then click **Pay** to complete the purchase.
    

### **Step 2: Enable the HSM instance**

You need to enable only the master HSM. You do not need to enable the subordinate HSM.

1.  Go to the [VSMs](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list) page of the Cloud Hardware Security Module console. In the top navigation bar, select a region.
    
2.  Enable the master HSM.
    
    In the **HSM Instance Configuration** dialog box, configure the HSM instance and click **OK**. After the configuration is complete, the **Status** of the HSM instance changes to **Enabled**.
    
    **Parameter**
    
    **Description**
    
    **VPC ID**
    
    Select the VPC to which you want to attach the HSM instance. The VPC must be the same as the VPC to which the KMS hardware key management instance belongs.
    
    **VPC Subnet**
    
    Select the VPC subnet to which the HSM instance belongs. This is one of the vSwitches in the VPC.
    
    **Private IP Address**
    
    Configure a private IP address for the HSM instance.
    
    **Important**
    
    -   The private IP address must be within the CIDR block of the VPC subnet. Otherwise, the configuration fails.
        
    -   Do not use IP addresses that end with 253, 254, or 255. These are system reserved IP addresses.
        
    
    **Configure HSM Whitelist**
    
    You do not need to configure this parameter in this scenario.
    
    You will set a whitelist for the HSM cluster when you create and activate the cluster. The cluster whitelist takes precedence over the whitelists of individual HSM instances in the cluster. Therefore, you do not need to configure this parameter in this scenario.
    

### **Step 3: Create and activate a cluster**

You can use an HSM cluster to associate and manage a group of HSM instances that are in different zones of the same region and are dedicated to the same application. An HSM cluster provides high availability, load balancing, and horizontal scaling of cryptographic operations.

Use the master HSM to create a cluster, and then add the subordinate HSM.

1.  Go to the [VSMs](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list) page of the Cloud Hardware Security Module console. In the top navigation bar, select a region.
    
2.  Locate the master HSM instance, and in the **Actions** column, click **Create Cluster**.
    
3.  In the **Create and Activate Cluster** panel, complete the **①Create Cluster** step, and then click **Next**.
    
    **Configuration item**
    
    **Description**
    
    **Cluster Name**
    
    The name of the cluster. The name must be unique and cannot exceed 24 characters in length.
    
    **Configure Whitelist**
    
    The IP addresses that are allowed to access the cluster.
    
    IP addresses and CIDR blocks are supported. You can specify one IP address or one CIDR block in each row. You can specify up to 10 rows in total.
    
    In this example, make sure that the following IP addresses are added to the whitelist.
    
    -   The CIDR blocks of the vSwitches where the HSM instances in the cluster are located.
        
        For example, if the CIDR blocks of the VPC subnets (vSwitches) to which the HSM instances belong are 172.16.1.0/24 and 172.16.2.0/24, enter 172.16.1.0/24 and 172.16.2.0/24 in two separate lines.
        
    -   The private IP address of the ECS instance.
        
        For example, if the private IP address of the ECS instance is 172.16.3.0, enter 172.16.3.0 in a separate line.
        
    -   The CIDR block of the vSwitch to which the KMS instance is attached.
        
        If you have not purchased a KMS instance, purchase and enable a KMS instance, and then add this whitelist entry for the cluster.
        
    
    **Important**
    
    -   The whitelist of a cluster has a higher priority than the whitelist of an HSM in the cluster. For example, if you add 10.10.10.10 to the whitelist of an HSM and add 172.16.0.1 to the whitelist of the cluster that includes the HSM, you can access the HSM only from 172.16.0.1.
        
    -   The whitelist configuration of 0.0.0.0/0 is not supported. If you enter 0.0.0.0/0, requests from all IP addresses are allowed.
        
        For security reasons, we recommend that you do not allow requests from all IP addresses. If you need to allow requests from all IP addresses, do not configure the whitelist.
        
    
    **Specify vSwitches**
    
    Configure the vSwitch to which the other HSM instance is attached.
    
4.  In the **Create and Activate Cluster** panel, complete the **②Activate Cluster** step.
    
    1.  Import a cluster certificate.
        
        1.  In the **Upload Cluster Certificate** section, click **Cluster CSR Certificate** to download a certificate signing request (CSR) file. Then, upload the file to an ECS instance and save it. For example, you can save the file as cluster.csr.
            
        2.  Create a private key and set a security token for the private key as prompted. For example, you can save the private key as issuerCA.key.
            
            ```
            openssl genrsa -aes256 -out issuerCA.key 2048
            ```
            
        3.  Create a self-signed certificate. For example, you can save the certificate as issuerCA.crt.
            
            ```
            openssl req -new -x509 -days 3652 -key issuerCA.key -out issuerCA.crt
            ```
            
        4.  Sign the cluster CSR. The issued cluster certificate is stored in the cluster.crt file.
            
            **Note**
            
            This step uses the cluster.csr, issuerCA.key, and issuerCA.crt files.
            
            ```
            openssl x509 -req -in cluster.csr -days 3652 -CA issuerCA.crt -CAkey issuerCA.key -set_serial 01 -out cluster.crt
            ```
            
        5.  Return to the CloudHSM console, import the cluster certificate, and click **Submit**.
            
            -   In the **Enter the issuer certificate in the PEM format** area, enter the content of the issuerCA.crt file.
                
            -   In the **Enter the issued cluster certificate in the PEM format** area, enter the content of the cluster.crt file.
                
    2.  Initialize the master HSM instance.
        
        **Step**
        
        Description
        
        Step 1: Download the HSM management tool.
        
        **Important**
        
        The HSM management tool can be installed only on a Linux operating system.
        
        You can download the tool in one of the following ways:
        
        -   [Download the HSM management tool](https://yundun-hsm4.oss-ap-southeast-1.aliyuncs.com/hsm-client-v2.03.15.10-1.x86_64.rpm).
            
        -   Run the following command to download the HSM management tool. The ECS instance must be connected to the Internet.
            
            ```
            wget -O hsm-client-v2.03.15.10-1.x86_64.rpm 'https://yundun-hsm4.oss-ap-southeast-1.aliyuncs.com/hsm-client-v2.03.15.10-1.x86_64.rpm'
            ```
            
        -   On the **VSMs** page, find the target HSM instance, click the information in the instance specification column, and then click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7773684671/p1032492.png) to download HSM Management Tool.
            
        -   On the **Activate Cluster** page, click **Download HSM Management Tool**.
            
        
        Step 2: Install the HSM management tool.
        
        Run the following command to install the program and configuration file to the /opt/hsm folder.
        
        ```
        sudo yum install -y hsm-client-v2.03.15.10-1.x86_64.rpm
        ```
        
        Step 3: Modify the client configuration file.
        
        In the installation folder of the HSM management tool, modify the **servers** configuration item in the /opt/hsm/etc/hsm\_mgmt\_tool.cfg file.
        
        -   Set **name and hostname** to the private IP address of the master HSM.
            
        -   Set **owner\_cert\_path** to the file path of issuerCA.crt.
            
        
        hsm\_mgmt\_tool.cfg file example
        
        ```
        {
        	"servers": [{
        		"name": "172.16.XX.XX",
        		"hostname": "172.16.XX.XX",
        		"port": 2225,
        		"certificate": "/opt/hsm/etc/client.crt",
        		"pkey": "/opt/hsm/etc/client.key",
        		"CAfile": "",
        		"CApath": "/opt/hsm/etc/certs",
        		"ssl_ciphers": "",
        		"server_ssl": "yes",
        		"enable": "yes",
        		"owner_cert_path": "<issuerCA.crt file path>"
        	}],
        	"scard": {
        		"enable": "no",
        		"port": 2225,
        		"ssl": "no",
        		"ssl_ciphers": "",
        		"certificate": "cert-sc",
        		"pkey": "pkey-sc",
        	}
        }
        ```
        
        Step 4: Log on to the master HSM and view the user list.
        
        1.  Run the following command to log on to the master HSM.
            
            ```
            /opt/hsm/bin/hsm_mgmt_tool /opt/hsm/etc/hsm_mgmt_tool.cfg
            ```
            
        2.  Run the `listUsers` command to display the user list.
            
            ```
            cloudmgmt>listUsers
            Users on server 0(172.16.XX.XX):
            Number of users found:2
            
                User Id            User Type          User Name                     MofnPubKey       LoginFailureCnt            2FA
                     1             PRECO          admin                                       NO               0                     NO
                     2             AU             app_user                                    NO               0                     NO
            ```
            
        
        Step 5: Change the PRECO user to a CO user.
        
        1.  Run the `loginHSM` command and log on to the HSM as a PRECO user.
            
            ```
            server0>loginHSM PRECO admin password
            loginHSM success
            ```
            
        2.  Run the `changePswd` command to change the password for the PRECO user. After you change the password, the PRECO user becomes a CO user.
            
            ```
            cloudmgmt>changePswd PRECO admin <NewPassword>
            
            *************************CAUTION********************************
            This is a CRITICAL operation, should be done on all nodes in the
            cluster. Cav server does NOT synchronize these changes with the
            nodes on which this operation is not executed or failed, please
            ensure this operation is executed on all nodes in the cluster.
            ****************************************************************
            
            Do you want to continue(y/n)?y
            Changing password for admin(PRECO) on 1 nodes
            ```
            
        3.  Run the `listUsers` command to view the user list and verify whether the PRECO user is changed to a CO user.
            
            ```
            cloudmgmt>listUsers
            Users on server 0(172.16.XX.XX):
            Number of users found:2
            
                User Id            User Type          User Name                     MofnPubKey       LoginFailureCnt            2FA
                     1             CO             admin                                       NO               0                     NO
                     2             AU             app_user                                    NO               0                     NO
            ```
            
        
        Step 6: Create a crypto user (CU user)
        
        **Warning**
        
        You must create the CU user before you add the subordinate HSM to the cluster. Otherwise, the CU user is not automatically synchronized to the subordinate HSM.
        
        For security purposes, the KMS hardware key management instance accesses the HSM cluster as a CU user named kmsuser.
        
        1.  Use the HSM management tool to log on to the master HSM and run the `createUser` command to create a Crypto User (CU) named kmsuser.
            
            ```
            createUser CU kmsuser <enter password>
            ```
            
            **Important**
            
            Remember the initial password for kmsuser. This password is required when you enable the KMS hardware key management instance.
            
        2.  Run the `listUsers` command to verify that the CU user was created.
            
            ```
            cloudmgmt>listUsers
            Users on server 0(172.16.XX.XX):
            Number of users found:3
            
                User Id         User Type       User Name                  MofnPubKey    LoginFailureCnt         2FA
                     1          CO          admin                                    NO               0               NO
                     2          AU          app_user                                 NO               0               NO
                     3          CU          kmsuser                                  NO               0               NO
            ```
            
        3.  Run the `quit` command to exit the management tool.
            
            ```
            cloudmgmt>quit
            disconnecting from servers, please wait...
            ```
            
        
        Step 7: Verify the status of the master HSM
        
        Return to the CloudHSM console. On the **Activate Cluster** page, click the ![update](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7816583861/p619454.png) icon to refresh the HSM status and then click **Next**.
        
    
5.  On the **③Add HSM** page, add the subordinate HSM to the cluster as prompted and click **Complete**.
    
    **Note**
    
    If the HSM instance that you want to add has a status of Initialized, it cannot be added to the cluster. In this case, [contact us](/help/en/kms/cloud-hardware-security-module/support/hsm-contact-us).
    
    After the configuration is complete, the cluster automatically synchronizes the master key data to the subordinate HSM. For example, the kmsuser on the master HSM is synchronized to the subordinate HSM. You only need to check whether the digest information of the two HSM instances in the cluster is the same. If the digest information is different, [contact us](/help/en/kms/cloud-hardware-security-module/support/hsm-contact-us).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4191358571/p934454.png)
    

## What to do next

Go to the KMS console to purchase a KMS hardware key management instance and complete the required configurations. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
