You can use Resource Orchestration Service (ROS) to call API operations of ENS. This topic describes how to create a ROS template and use the template to automatically create an ENS instance.

## **Supported resources**

-   ROS is an Alibaba Cloud service that simplifies the management of cloud computing resources. You can create a template to describe the required cloud computing resources such as Elastic Compute Service (ECS) and ApsaraDB RDS instances, and the dependencies between the resources. ROS automatically creates and configures all resources based on the template to implement automated deployment and O&M. For more information, see [What is ROS?](/help/en/ros/product-overview/what-is-ros)
    
-   You can use ROS to call API operations of ENS. Resources that can be orchestrated using ROS include regular resources and data resources.
    
    -   Regular resources:
        
        -   [ALIYUN::ENS::Disk](/help/en/ros/developer-reference/aliyun-ens-disk): creates a pay-as-you-go or subscription data disk.
            
        -   [ALIYUN::ENS::DiskInstanceAttachment](/help/en/ros/developer-reference/aliyun-ens-diskinstanceattachment): attaches a data disk to an ENS instance.
            
        -   [ALIYUN::ENS::Instance](/help/en/ros/developer-reference/aliyun-ens-instance): creates an ENS instance.
            
        -   [ALIYUN::ENS::InstanceSecurityGroupAttachment](/help/en/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment): adds an ENS instance to a security group.
            
        -   [ALIYUN::ENS::KeyPair](/help/en/ros/developer-reference/aliyun-ens-keypair): imports the public key of a Rivest-Shamir-Adleman (RSA)-encrypted key pair.
            
        -   [ALIYUN::ENS::Network](/help/en/ros/developer-reference/aliyun-ens-network): creates a virtual private cloud (VPC).
            
        -   [ALIYUN::ENS::NetworkAcl](/help/en/ros/developer-reference/aliyun-ens-networkacl): creates a network access control list (ACL).
            
        -   [ALIYUN::ENS::NetworkAclAssociation](/help/en/ros/developer-reference/aliyun-ens-networkaclassociation): associates an ACL with networks.
            
        -   [ALIYUN::ENS::SecurityGroup](/help/en/ros/developer-reference/aliyun-ens-securitygroup): creates a security group.
            
        -   [ALIYUN::ENS::Snapshot](/help/en/ros/developer-reference/aliyun-ens-snapshot): creates a snapshot.
            
        -   [ALIYUN::ENS::VSwitch](/help/en/ros/developer-reference/aliyun-ens-vswitch): creates a vSwitch.
            
    -   Data resources:
        
        -   [DATASOURCE::ENS::Instances](/help/en/ros/developer-reference/datasource-ens-instances): queries the details of ENS instances.
            

## Permissions

In this example, you need to create an ENS instance. By default, Resource Orchestration Service uses the credentials of the user who logs on to the ROS console. The user must be granted the following permissions:

-   **_AliyunENSFullAccess_**: permissions to manage ENS resources.
    

An Alibaba Cloud account has permissions on all API operations. Security risks may arise if you use an Alibaba Cloud account to call API operations. We strongly recommend that you call API operations or perform routine O&M as a RAM user. Before you call API operations as a RAM user, grant the required permissions to the RAM user as needed. The RAM user must have the permissions to manage ENS resources. For more information, see [System policies for ENS](/help/en/ens/security-and-compliance/ens).

## **Procedure**

1.  Log on to the [ROS](https://ros-intl.console.alibabacloud.com/cn-shanghai/stacks) console. In the top navigation bar, select a region from the Region drop-down list.
    
2.  On the **Stacks** page, click **Create Stack**. In the **Specify Template** section, click **Select an Existing Template**.
    
    **Note**
    
    -   If you select **Create a New Template** or **ROS Infrastructure Composer**, you are redirected to the corresponding page.
        
    
3.  For **Template Import Method**, select **Enter Template Content**. For **Template Content**, select **ROS**, and enter the code.
    
    For more information about the syntax, description, and examples of how to create an ENS instance, see [ALIYUN::ENS::Instance](/help/en/ros/developer-reference/aliyun-ens-instance).
    
    `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      ENSInstance:
        Type: ALIYUN::ENS::Instance
        Properties:
          EnsRegionId: cn-chengdu-telecom-3
          ImageId: centos_6_08_64_20G_alibase_20171208
          InstanceType: ens.sn1.stiny
          InternetChargeType: 95BandwidthByMonth
          Password: Enstest1xx
          Period: 1
          Quantity: 2
          SystemDiskSize: 20
          DataDiskSize: 20
          PaymentType: Subscription
    Outputs: {}
    ```
    
    `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "ENSInstance": {
          "Type": "ALIYUN::ENS::Instance",
          "Properties": {
            "EnsRegionId": "cn-chengdu-telecom-3",
            "ImageId": "centos_6_08_64_20G_alibase_20171208",
            "InstanceType": "ens.sn1.stiny",
            "InternetChargeType": "95BandwidthByMonth",
            "Password": "Enstest1xx",
            "Period": 1,
            "Quantity": 2,
            "SystemDiskSize": 20,
            "DataDiskSize": 20,
            "PaymentType": "Subscription"
          }
        }
      },
      "Outputs": {
      }
    }
    ```
    
4.  Click **Next** and **Create** to execute the created stack.
    
5.  After the ENS instance is created, call API operations, use SDKs, or go to the ENS console to view the created ENS instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1006345271/p818199.png)
