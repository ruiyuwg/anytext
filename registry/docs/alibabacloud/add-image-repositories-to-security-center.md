Before you can use Security Center to scan images, you must add image repositories to Security Center. This topic describes how to add image repositories to Security Center.

## Limits

You can add the following types of image repositories to Security Center:

-   Image repositories of Container Registry Enterprise Edition and Container Registry Personal Edition.
    
    You can synchronize information about the images in these image repositories to Security Center. Security Center can scan only the images of Container Registry Enterprise Edition.
    
-   Third-party image repositories: Harbor, Quay, and GitLab repositories.
    

## Prerequisites

The [container image scan feature is enabled](/help/en/security-center/user-guide/enable-container-image-scan). For more information, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).

## Add an image repository of Container Registry to Security Center

If you use Container Registry Personal Edition, you can add image repositories of a Container Registry Personal Edition instance to Security Center after you create the instance. If you use Container Registry Enterprise Edition, you can add image repositories of a Container Registry Enterprise Edition instance to Security Center only after you configure a virtual private cloud (VPC) access control list (ACL) for the instance. For more information, see [Configure a VPC ACL](/help/en/acr/user-guide/configure-access-over-vpcs#task1305).

You can use one of the following methods to synchronize the information about the images in the image repositories of Container Registry Enterprise Edition and Container Registry Personal Edition:

-   Automatic synchronization: Security Center automatically synchronizes the information in the early morning every day.
    
-   Manual synchronization: You can manually synchronize the most recent information. For more information, see [View security information about containers](/help/en/security-center/user-guide/view-security-information-about-containers#section-yil-qpz-mgz).
    

## Add a third-party image repository to Security Center

If you create an access control policy for your image repository, make sure that the access control policy allows access from the IP address pools in the region in which the image repository resides.

View IP address pools from which access must be allowed

**Region**

**Public IP address**

**Private IP address**

China (Hangzhou)

47.96.166.214

100.104.12.64/26

China (Shanghai)

139.224.15.48, 101.132.180.26, 47.100.18.171, 47.100.0.176, 139.224.8.64, 101.132.70.106, 101.132.156.228, 106.15.36.12, 139.196.168.125, 47.101.178.223, and 47.101.220.176

100.104.43.0/26

China (Qingdao)

47.104.111.68

100.104.87.192/26

China (Beijing)

47.95.202.245

100.104.114.192/26

China (Zhangjiakou)

39.99.229.195

100.104.187.64/26

China (Hohhot)

39.104.147.68

100.104.36.0/26

China (Shenzhen)

120.78.64.225

100.104.250.64/26

China (Guangzhou)

8.134.118.184

100.104.111.0/26

China (Hong Kong)

8.218.59.176

100.104.130.128/26

Japan (Tokyo)

47.74.24.20

100.104.69.0/26

Singapore

8.219.240.137

100.104.67.64/26

US (Silicon Valley)

47.254.39.224

100.104.145.64/26

US (Virginia)

47.252.4.238

100.104.36.0/26

Germany (Frankfurt)

47.254.158.71

172.16.0.0/20

UK (London)

8.208.14.12

172.16.0.0/20

Indonesia (Jakarta)

149.129.238.99

100.104.193.128/26

1.  If your third-party image service is deployed in a data center and connected over VPCs, you must forward the traffic destined for the image service. In this case, you must use an Elastic Compute Service (ECS) instance to forward traffic to the server in the data center in which the third-party image service is deployed.
    
    In the following sample commands, traffic on Port A of the ECS instance is forwarded to Port B of the on-premises server that uses the IP address 192.168.XX.XX.
    
    -   Sample commands for CentOS 7
        
        -   Use firewall-cmd
            
            ```
            firewall-cmd --permanent --add-forward-port=port=<Port A>:proto=tcp:toaddr=<192.168.XX.XX>:toport=<Port B>
            ```
            
        -   Use iptables:
            
            1.  Enable port forwarding.
                
                ```
                echo "1" > /proc/sys/net/ipv4/ip_forward                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                ```
                
            2.  Configure port forwarding.
                
                ```
                iptables -t nat -A PREROUTING -p tcp --dport <Port A> -j DNAT --to-destination <192.168.XX.XX>:<Port B>
                ```
                
    -   Sample commands for Windows
        
        ```
        netsh interface portproxy add v4tov4 listenport=<Port A> listenaddress=* connectaddress=<192.168.XX.XX> connectport=<Port B> protocol=tcp
        ```
        
2.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
3.  In the left-side navigation pane, choose **Assets** > **Container**.
    
4.  On the **Container** page, click the **Image** tab. On this tab, click **Add** below **Add Third-party Image Repository**. ![接入第三方镜像仓库](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9532436171/p558751.png) 
    
5.  In the **Add Image Repository** panel, configure the following parameters and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Private Repository Type**
    
    The type of the third-party image repository. Valid values: **harbor**, **quay** and **gitlab**.
    
    **Version**
    
    The version of the third-party image repository. Valid values:
    
    -   **V1**: If the version of the image repository is 1.X.X, select this option.
        
    -   **V2**: If the version of the image repository is 2.X.X or later, select this option.
        
    -   When you select **gitlab** as the **Private Repository Type**, **V1** is the default option and cannot be changed.
        
    
    **Communication Type**
    
    The protocol that you want Security Center to use to communicate with the third-party image repository. Valid values:
    
    -   **http**
        
    -   **https**
        
    
    **Network Type**
    
    The network type of the third-party image repository. Valid values:
    
    -   **Internet**
        
    -   **VPC**
        
    
    **RegionId**
    
    The ID of the region in which the third-party image repository resides.
    
    **IP**
    
    The IP address and port number of the third-party image repository. If you configured traffic forwarding rules for your image service, you must set the IP parameter and port number to the ones of the ECS instance that forwards traffic destined for the image service.
    
    **Port**
    
    **Domain Name**
    
    The domain name of the third-party image repository.
    
    **Speed Limit**
    
    The number of images that can be added to Security Center per hour. Default value: **10**.
    
    **Important**
    
    If a large number of images are added per hour, your services may be adversely affected. In most cases, we do not recommend that you set this parameter to **Unlimited**.
    
    **Username**
    
    The username of the account that has administrative rights and is used to access the third-party image repository.
    
    **Password**
    
    The password of the account.
    
    **Quay Namespace Information**
    
    This parameter is required only if you set **Private Repository Type** to **quay**.
    
    In the **Image Repository Organization** field, enter the name of the organization to which the image repository belongs. In the **Auth\_token** field, enter the Auth\_token that corresponds to the organization.
    
    You can click **Add** to specify organizations to which multiple image repositories belong.
    
    **GitLab Group Information**
    
    This parameter is required only if you set **Private Repository Type** to **gitlab**.
    
    In the **Group Information** field, enter the name of the group to which the image repository belongs. In the **Access\_token** field, enter the Access\_token that corresponds to the group.
    
    You can click **Add** to specify groups to which multiple image repositories belong.
    
    After the third-party image repository is added to Security Center, choose **Protection Configuration** > **Container Protection** > ****Container Image Scan**** in the left-side navigation pane, click **Scan Settings** in the upper-right corner to view information about the added image repository.
    

## Error codes

**Error code**

**Error message**

**Solution**

FailedToVerifyUsernameOrPwd

The error message returned because the username or password is invalid.

Check whether the username and password are correct.

RegistryVersionError

The error message returned because the version of the image repository is invalid.

Check whether the version of the image repository is valid.

UserDoesNotHaveAdminRole

The error message returned because you do not have administrative rights.

Log on to the server on which harbor repositories are deployed and obtain administrative rights.

NetworkConnectError

The error message returned because the network connection timed out.

Check whether the network can be connected and whether port 80 or port 443 is enabled.

## What to do next

After your image repository is added to Security Center, the images in the image repository are protected by Security Center. You can view the information about the images on the **Image** tab of the Container page. For more information, see [View security information about containers](/help/en/security-center/user-guide/view-security-information-about-containers#task-2424021).

You must use Security Center to scan the images in the image repository for risks. For more information, see [Scan images](/help/en/security-center/user-guide/scan-images#task-1986095).
