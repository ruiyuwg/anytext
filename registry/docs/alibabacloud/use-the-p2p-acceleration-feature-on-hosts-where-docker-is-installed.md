You can use the P2P acceleration feature on hosts where Docker is installed to accelerate image pulling and reduce the time used to deploy applications. This topic describes how to use the P2P acceleration feature on hosts where Docker is installed.

## Prerequisites

-   A Container Registry Enterprise Edition instance is created. The Container Registry Enterprise Edition instance must be of the Standard Edition or Advanced Edition. For more information, see [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance#task488).
    
-   The Container Registry Enterprise Edition instance is configured to allow access from the required hosts over the Internet. For more information, see [Enable the ACL feature for Internet access](/help/en/acr/user-guide/configure-access-over-the-internet#task484).
    

## Procedure

1.  Obtain the ID of the Container Registry Enterprise Edition instance
    
    1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    2.  In the top navigation bar, select a region.
    3.  In the left-side navigation pane, click **Instances**.
    4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
        
        In the **Instance** section of the **Overview** page, obtain the ID of the Container Registry Enterprise Edition instance.
        
2.  Log on to the Elastic Compute Service (ECS) instance. For more information, see [Connect to a Linux instance by using an SSH key pair](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair#concept-ucj-wrx-wdb).
    
3.  Run the following command to download the installation package of the P2P component:
    
    ```
    docker run --rm -v /var/lib/aliyun-acr/p2p:/var/lib/aliyun-acr/p2p registry.cn-hangzhou.aliyuncs.com/acr-toolkit/p2p-installer-manual:v1.0.6-b6b9f5f9-aliyun
    ```
    
4.  Configure the P2P component.
    
    ```
    /var/lib/aliyun-acr/p2p/scripts/01-init.sh --ak <aliyun-ak> --sk <aliyun-sk> --port 65001 --instance <acr-ee-instance-id>
    ```
    
    In the command line, replace the AccessKey ID, AccessKey secret, the ID of the Container Registry Enterprise Edition instance, and the port number of the P2P component. The default port number of the P2P component is 65001.
    
    **Note**
    
    The AccessKey ID and AccessKey secret are only used to obtain the information of the Container Registry Enterprise Edition instance during the initialization configuration.
    
    After you configure the P2P component, the system generates the /var/lib/aliyun-acr/p2p directory.
    
5.  Run the following command to start the P2P component.
    
    **Note**
    
    If you need to install the P2P component on multiple ECS instances, you must copy the configuration directory in step [4](#step-3nt-od0-bza) to other instances, and then run the command that is used to start the P2P component.
    
    ```
    /var/lib/aliyun-acr/p2p/scripts/02-run.sh
    ```
    
6.  Run the following command to log on to an image repository by using the P2P-accelerated domain name:
    
    ```
    docker login <P2P-accelerated domain name of the Container Registry Enterprise Edition instance>
    ```
    
    The P2P-accelerated domain name is in the following format: <Name of the Container Image Enterprise Edition instance>-registry-vpc.distributed.<Region in which the Container Registry Enterprise Edition instance resides>.cr.aliyuncs.com:<Port used by the P2P component>.
    
7.  Run the following command to pull an image by using the P2P-accelerated domain name:
    
    ```
    docker pull <P2P-accelerated domain name of the Container Registry Enterprise Edition instance>/test/busybox:latest
    ```
    
8.  **Optional:** Run the following command to uninstall the P2P component:
    
    ```
    /var/lib/aliyun-acr/p2p/scripts/03-uninstall.sh
    ```
