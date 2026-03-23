Alibaba Cloud CLI is a command-line tool that allows you to call Alibaba Cloud API operations in a terminal or a command-line interface to create, configure, and manage Alibaba Cloud resources. This topic describes how to call Elastic Compute Service (ECS) API operations by using Alibaba Cloud CLI to create and manage ECS instances and provides examples.

**Note**

For more information about Alibaba Cloud CLI, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)

## Use Alibaba Cloud **CLI**

### **Install and configure Alibaba Cloud CLI**

#### **Use an on-premises terminal**

1.  Install Alibaba Cloud CLI.
    
    You can install Alibaba Cloud CLI on Windows, Linux, and macOS. Download an installation package that is suitable for the operating system that runs on your computer. For information about how to install Alibaba Cloud CLI in different operating systems, see the following topics:
    
    -   [Windows](/help/en/cli/install-cli-on-windows#task-525890)
        
    -   [Linux](/help/en/cli/install-cli-on-linux#task-592837)
        
    -   [macOS](/help/en/cli/install-cli-on-macos#task-592875)
        
2.  Configure Alibaba Cloud CLI.
    
    Configure the credentials, regions, and languages that are required to call Alibaba Cloud resources. For more information, see the [Identity credential configuration methods](/help/en/cli/configure-credentials#b265231e1dwy9) section of the "Configure credentials" topic.
    
    **Important**
    
    To ensure the security of your Alibaba Cloud account, we recommend that you create a Resource Access Management (RAM) user that is used for calling API operations and create an AccessKey pair for the RAM user. For information about how to use an AccessKey pair in a secure manner, see [Credential security solutions](/help/en/openapi/accesskey-security-solution).
    

#### Use Cloud Shell (for debugging scenarios)

You can directly use Alibaba Cloud CLI in Cloud Shell without the need for installation or configuration. Due to the fact that the virtual machine (VM) destruction feature of Cloud Shell may cause data loss, we recommend that you run commands on Alibaba Cloud CLI in Cloud Shell to perform simple and quick operations, such as debugging.

**Important**

-   Destruction on expiration: Each VM that is created by Cloud Shell is valid for only 1 hour. When the VM expires, Cloud Shell immediately destroys the VM. When you restart Cloud Shell, a new VM is created.
    
-   Destruction due to no operations: If no interactive operation is performed on a VM for 30 minutes or all sessions are closed, the VM is destroyed in 15 minutes. When you restart Cloud Shell, a new VM is created. For more information, see [Limits](/help/en/cloud-shell/restrictions-on-use).
    

Log on to the [ECS console](https://ecs.console.alibabacloud.com) and click the Cloud Shell icon in the upper-right corner to go to the Cloud Shell console.

![Cloud Shell](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0880983561/p440303.png)

### Use Alibaba Cloud CLI to call ECS API operations

**Important**

-   For information about the formats supported by the fields of different data types, see [Parameter formats](/help/en/cli/parameter-format-overview).
    
-   For information about the command syntax, see the [Syntax](/help/en/cli/sample-commands#1640a5c2c077i) section of the "Generate and run CLI commands" topic.
    
-   Before you call an API operation, we recommend that you read the usage notes of the API operation.
    

After you install and configure Alibaba Cloud CLI, you can run commands in the following format to call ECS API operations:

```
aliyun ecs <API operation name> --<Parameter 1 Value 1> --<Parameter 2 Value 2> ...
```

#### **Use OpenAPI Explorer (also called OpenAPI Portal) to generate a CLI command for an API operation**

1.  Log on to the [OpenAPI Portal](https://api.alibabacloud.com/api/Ecs/2014-05-26/RunInstances?RegionId=cn-hangzhou&params={%22RegionId%22:%22cn-hangzhou%22}).
    
2.  Select the API operation for which you want to generate a CLI command and specify parameters.
    
3.  Click the **CLI Example** tab in the right-side pane to view the CLI command that is generated with the specified parameters.
    
    ![2024-08-12_10-30-57.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7965517271/p833664.png)
    

## Usage examples

The following example describes how to use Alibaba Cloud CLI to call ECS API operations.

**Important**

The following sample requests are only for reference. Modify the CLI commands based on your business requirements.

### Create an ECS instance

The following example describes how to create a subscription ECS instance from an Alibaba Cloud Linux image in the China (Hangzhou) region by using Alibaba Cloud CLI.

1.  Make preparations.
    
    Before you create an ECS instance, create a virtual private cloud (VPC), a vSwitch, and a security group, and obtain the IDs of the preceding resources.
    
    **Note**
    
    If you already created the preceding resources and the resources meet your business requirements, skip this step.
    
    1.  **Call the** [CreateVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpc) **operation to create a VPC.**
        
        In this example, a VPC is created in the **China (Hangzhou)** region and associated with the CIDR block 192.168.0.0/16.
        
        -   Sample command
            
            ```
            aliyun vpc CreateVpc \
            --RegionId cn-hangzhou \
            --CidrBlock 192.168.0.0/16 
            ```
            
        -   Sample command output
            
            ```
            {
              "RequestId": "EC94C73B-8103-4B86-B353-E65C7C9E****",
              "ResourceGroupId": "rg-acfmzw2jz2z****",
              "RouteTableId": "vtb-bp1jxpr9ji5wcn4yv****",
              "VRouterId": "vrt-bp1dyxemup2q4ouga****",
              "VpcId": "vpc-bp1d9v4763ym2hlzt****"
            }
            ```
            
        
    2.  **Call the** [CreateVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvswitch) **operation to create a vSwitch in the VPC.**
        
        In this example, a vSwitch is created in the VPC whose ID is _vpc-bp1d9v4763ym2hlzt\*\*\*\*_ and is associated with the CIDR block 192.168.0.0/24.
        
        -   Sample command
            
            ```
            aliyun vpc CreateVSwitch \
            --CidrBlock 192.168.0.0/24 \
            --VpcId vpc-bp1d9v4763ym2hlzt**** \
            --ZoneId=cn-hangzhou-i
            ```
            
        -   Sample command output
            
            ```
            {
                    "RequestId": "AF1787C4-0D81-44F0-A324-D5C54EA0****",
                    "VSwitchId": "vsw-bp11hf5r945gewysp****"
            }
            ```
            
        
    3.  **Call the** [CreateSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsecuritygroup) **operation to create a security group in the VPC.**
        
        -   Sample command
            
            ```
            aliyun ecs CreateSecurityGroup \
            --RegionId cn-hangzhou \
            --VpcId vpc-bp1d9v4763ym2hlzt****
            ```
            
        -   Sample command output
            
            ```
            {
                    "RequestId": "B1C25C34-9B84-49E3-9E50-FB7D7970****",
                    "SecurityGroupId": "sg-bp18z2q1jg4gq95t****"
            }
            ```
            
        
    4.  **Call the** [AuthorizeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroup#doc-api-Ecs-AuthorizeSecurityGroup) **operation to create a security group rule in the security group.**
        
        In this example, an inbound security group rule that allows TCP traffic on port 22 is added to the security group whose ID is sg-bp18z2q1jg4gq95t\*\*\*\*.
        
        -   Sample command
            
            ```
            aliyun ecs AuthorizeSecurityGroup \
            --RegionId cn-hangzhou \
            --SecurityGroupId sg-bp18z2q1jg4gq95t**** \
            --IpProtocol tcp \
            --SourceCidrIp 0.0.0.0/0 \
            --PortRange 22/22
            ```
            
        -   Sample command output
            
            ```
            {
             "RequestId": "FA8B1E61-C9C9-4D91-9628-64B8E2F4****"
            }
            ```
            
        
2.  Create an ECS instance.
    
    **Call the** [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) **operation to create a subscription ECS instance.**
    
    1.  Example scenario
        
        **Parameter**
        
        **Description and example**
        
        RegionId
        
        The ID of the region in which you want to create the ECS instance. Example: _cn-hangzhou_.
        
        ImageId
        
        The ID of the image. We recommend that you select the Alibaba Cloud Linux image whose ID is _aliyun\_3\_x64\_20G\_alibase\_20240528.vhd_.
        
        InstanceType
        
        The instance type. Examples:
        
        -   For personal applications, we recommend that you select the _ecs.e-c1m1.large_ instance type that has 2 vCPUs and 2 GiB of memory.
            
        -   For the applications of small and medium-sized enterprises, we recommend that you select the _ecs.c7.large_ instance type that has 2 vCPUs and 4 GiB of memory.
            
        
        SecurityGroupId
        
        The ID of the security group. Obtain the value from the response of the [CreateSecurityGroup](/help/en/ecs/api-createsecuritygroup#doc-api-Ecs-CreateSecurityGroup) operation.
        
        Example: _sg-bp18z2q1jg4gq95t\*\*\*\*_.
        
        VSwitchId
        
        The ID of the vSwitch. Obtain the value from the response of the [CreateVSwitch](/help/en/vpc/api-createvswitch#doc-api-Vpc-CreateVSwitch) operation.
        
        Example: _vsw-bp11hf5r945gewysp\*\*\*\*_.
        
        InstanceName
        
        The name of the ECS instance.
        
        Example: _ecs\_cli\_demo_.
        
        InstanceChargeType
        
        The billing method of the ECS instance. To create a subscription ECS instance, set the value to _PrePaid_.
        
        **Note**
        
        Make sure that your account balance is sufficient.
        
        PeriodUnit
        
        The unit of the subscription duration. Example: _Month_.
        
        Period
        
        The subscription duration. Example: _1_.
        
        InternetMaxBandwidthOut
        
        The maximum outbound public bandwidth. Example: _1_.
        
        Password
        
        The logon password of the ECS instance. Example: _<yourPassword>_.
        
        **Note**
        
        To ensure instance security, you must specify a complex password.
        
        SystemDisk.Category
        
        The category of the system disk. Example: cloud\_essd.
        
        SystemDisk.Size
        
        The size of the system disk. Example: 40.
        
    2.  Sample command
        
        ```
        aliyun ecs RunInstances \
        --RegionId cn-hangzhou \
        --ImageId aliyun_3_x64_20G_alibase_20240528.vhd \
        --InstanceType ecs.c7.large \
        --SecurityGroupId sg-bp18z2q1jg4gq95t**** \
        --VSwitchId vsw-bp11hf5r945gewys**** \
        --InstanceName ecs_cli_demo \
        --InstanceChargeType PrePaid \
        --PeriodUnit Month \
        --Period 1 \
        --InternetMaxBandwidthOut 1 \
        --Password <yourPassword>  \
        --SystemDisk.Category cloud_essd \
        --SystemDisk.Size 40
        ```
        
    3.  Sample command output
        
        ```
        { 
                "InstanceIdSets": {
                        "InstanceIdSet": [
                                "i-bp1de173dp87k5uv****"
                        ]
                },
                "OrderId": 23577729747****,
                "RequestId": "B0855F1A-279F-5153-BAA9-C245E073****",
                "TradePrice": ****
        }
        ```
        
    

### **Connect to an ECS instance**

1.  Obtain the public IP address of an ECS instance.
    
    Call the [DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) operation with the ID of an ECS instance to query the public IP address of the instance. In this example, the ID of the ECS instance is `i-bp1ducce5hs1jm98****`.
    
    -   Sample command
        
        ```
        aliyun ecs DescribeInstances \
        --RegionId cn-hangzhou \
        --InstanceIds '["i-bp1ducce5hs1jm98****"]'
        ```
        
    -   Sample command output
        
        The PublicIpAddresses parameter indicates the public IP address of the ECS instance.
        
        ![公网IP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9957219951/p100712.png)
        
2.  Connect to the ECS instance.
    
    ```
    ssh <Username>@<Public IP address>
    ```
    
    ![ssh登录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1576621861/p100726.png)
    

### Start an ECS instance

Call the [StartInstance](/help/en/ecs/api-startinstance#doc-api-Ecs-StartInstance) operation to start an ECS instance.

-   Example scenario: Start an ECS instance whose ID is `i-bp1aq39j2yul5y01****` in the China (Hangzhou) region (cn-hangzhou) after a dry run, and do not perform troubleshooting during instance startup.
    
-   Sample command
    
    ```
    aliyun ecs StartInstance \
    --RegionId cn-hangzhou \
    --InstanceId i-bp1aq39j2yul5y01**** \
    --InitLocalDisk false \
    --DryRun false
    ```
    
-   Sample command output
    
    ```
    {
     "RequestId": "2DD09CBD-1F4D-4923-94C7-F3BD67137BBE"
    }
    ```
    

### Query the details of ECS instances

Call the [DescribeInstances](/help/en/ecs/api-describeinstances#doc-api-Ecs-DescribeInstances) operation to query the details of one or more ECS instances.

**Example 1: Query an ECS instance by instance ID**

In this example, the details of an ECS instance whose ID is `i-bp14a7xie8erwsvo****` are queried.

-   Sample command
    
    ```
    aliyun ecs DescribeInstances \
    --RegionId cn-hangzhou \
    --InstanceIds '["i-bp14a7xie8erwsvo****"]' \
    --output cols=InstanceId,InstanceName,Description,ImageId,Status rows=Instances.Instance[]
    ```
    
-   Sample command output
    
    ```
    InstanceId             | InstanceName | Description | ImageId                               | Status
    ----------             | ------------ | ----------- | -------                               | ------
    i-bp1de173dp87k5uv**** | ecs_cli_demo |             | aliyun_3_x64_20G_alibase_20240528.vhd | Running
    ```
    

**Example 2: Query ECS instances by tag**

In this example, the details of ECS instances to which `owner:zhangsan` tags are added are queried.

-   Sample command
    
    ```
    aliyun ecs DescribeInstances \
    --RegionId cn-hangzhou \
    --Tag.1.Key owner \
    --Tag.1.Value zhangsan \
    --output cols=InstanceId,InstanceName,Description,ImageId,Status rows=Instances.Instance[]
    ```
    
-   Sample command output
    
    ```
    InstanceId             | InstanceName | Description | ImageId                               | Status
    ----------             | ------------ | ----------- | -------                               | ------
    i-bp1de173dp87k5uv**** | ecs_cli_demo |             | aliyun_3_x64_20G_alibase_20240528.vhd | Running
    ```
    

**Example 3: Query ECS instances by image ID**

In this example, the details of ECS instances whose images have the `m-bp12qhgxbmp5eh02****` tag are queried.

-   Sample command
    
    ```
    aliyun ecs DescribeInstances \
    --RegionId cn-hangzhou \
    --ImageId m-bp12qhgxbmp5eh02**** \
    --output cols=InstanceId,InstanceName,Description,ImageId,Status rows=Instances.Instance[]
    ```
    
-   Sample command output
    
    ```
    InstanceId             | InstanceName | Description | ImageId                | Status
    ----------             | ------------ | ----------- | -------                | ------
    i-bp14a7xie8erwsvo**** | demo01       | desc01      | m-bp12qhgxbmp5eh02**** | Running
    i-bp1aq39j2yul5y01**** | demo02       | desc02      | m-bp12qhgxbmp5eh02**** | Stopped
    ```
    

**Example 4: Query ECS instances in a specific VPC**

In this example, the details of ECS instances that reside in a VPC whose ID is `vpc-bp1vwnn14rqpyiczj****` and are connected to a vSwitch whose ID is `vsw-bp1ddbrxdlrcbim46****` are queried.

-   Sample command
    
    ```
    aliyun ecs DescribeInstances \
    --RegionId cn-hangzhou \
    --VpcId vpc-bp1vwnn14rqpyiczj**** \
    --VSwitchId vsw-bp1ddbrxdlrcbim46**** \
    --output cols=InstanceId,InstanceName,ImageId,Status rows=Instances.Instance[]
    ```
    
-   Sample command output
    
    ```
    InstanceId             | InstanceName | ImageId                               | Status
    ----------             | ------------ | -------                               | ------
    i-bp14a7xie8erwsvo**** | namedemo01   | m-bp12qhgxbmp5eh02****                | Running
    i-bp1c271nqm264lwj**** | namedemo02   | P2VSImageLnx125                       | Running
    i-bp18a6ub0vt1tvn1**** | namedemo03   | aliyun_3_x64_20G_alibase_20240528.vhd | Running
    i-bp1aq39j2yul5y01**** | namedemo04   | m-bp12qhgxbmp5eh02****                | Stopped
    ```
    

**Example 5: Query ECS instances by page**

Call the [DescribeInstances](/help/en/ecs/api-describeinstances) operation to query ECS instances in the China (Hangzhou) region by page. Each page displays five entries.

-   Sample command
    
    ```
    aliyun ecs DescribeInstances \
    --RegionId cn-hangzhou \
    --PageNumber 2 \
    --PageSize 5 \
    --output cols=InstanceId,InstanceName,ImageId,Status rows=Instances.Instance[]
    ```
    
-   Sample command output
    
    ```
    InstanceId             | InstanceName | ImageId                                 | Status
    ----------             | ------------ | -------                                 | ------
    i-bp1akazu9o0rm7q0**** | demoname01   | centos_8_0_x64_20G_alibase_20191225.vhd | Running
    i-bp134jm1g6kqyiqu**** | demoname02   | m-bp1bc3g3b032o0ja****                  | Running
    i-bp17qwke5y0v7hk2**** | demoname03   | centos_7_02_64_20G_alibase_20170818.vhd | Running
    i-bp18a6ub0vt1tvn1**** | demoname04   | centos_7_02_64_20G_alibase_20170818.vhd | Running
    i-bp1aq39j2yul5y01**** | demoname05   | m-bp12qhgxbmp5eh02****                  | Stopped
    ```
    

### Create a snapshot

Call the [CreateSnapshot](/help/en/ecs/api-createsnapshot#doc-api-Ecs-CreateSnapshot) operation to create a snapshot for a disk.

-   Example scenario: Create a snapshot for an Enterprise SSD (ESSD) whose ID is `d-bp14bjlwo3t3owin****`. Set the snapshot name to demoname, the description to demo, and the retention period to three days.
    
-   Sample command
    
    ```
    aliyun ecs CreateSnapshot \
    --DiskId d-bp14bjlwo3t3owin**** \
    --SnapshotName demoname \
    --Description demo \
    --RetentionDays 3
    ```
    
-   Sample command output
    
    ```
    {
     "RequestId": "DFB0B01F-420D-4932-911E-7328920C2012",
     "SnapshotId": "s-bp1eyr9nxxoo9icj****"
    }
    ```
    

### Create a custom image from an ECS instance

Call the [CreateImage](/help/en/ecs/api-createimage#doc-api-Ecs-CreateImage) operation to create a custom image from an ECS instance.

-   Example scenario
    
    **Parameter**
    
    **Description and example**
    
    InstanceId
    
    The ID of the ECS instance. Example: i-bp1aq39j2yul5y01\*\*\*\*.
    
    Platform
    
    The operating system distribution for the system disk in the custom image. Example: Aliyun, which indicates Alibaba Cloud Linux.
    
    RegionId
    
    The ID of the region in which to create the custom image. Example: cn-hangzhou.
    
-   Sample command
    
    ```
    aliyun ecs CreateImage \
    --RegionId cn-hangzhou \
    --InstanceId i-bp1aq39j2yul5y01**** \
    --ImageName demoimage \
    --Description demoimage \
    --Platform Aliyun
    ```
    
-   Sample command output
    
    ```
    {
     "ImageId": "m-bp1503ydxxrppctb****",
     "RequestId": "011AE447-20CE-4043-81AC-7AF2BBC4****"
    }
    ```
    

### Stop an ECS instance

Call the [StopInstance](/help/en/ecs/api-stopinstance#doc-api-Ecs-StopInstance) operation with ForceStop parameter set to false and StoppedMode set to KeepCharging to stop an ECS instance in the Running (`Running`) state after a dry run. The ECS instance is stopped in standard mode, and billing for the ECS instance continues.

-   Example scenario: Stop an ECS instance whose ID is i-bp1aq39j2yul5y01\*\*\*\* in the China (Hangzhou) (cn-hangzhou) region.
    
-   Sample command
    
    ```
    aliyun ecs StopInstance \
    --RegionId cn-hangzhou \
    --InstanceId i-bp1aq39j2yul5y01**** \
    --ForceStop false \
    --StoppedMode KeepCharging \
    --DryRun false
    ```
    
-   Sample command output
    
    ```
    {
        "RequestId": "121B5745-4983-57B1-BC97-C3A3536E****"
    }
    ```
    

## **References**

This topic describes specific API operations. For information about other API operations, see [List of operations by function](/help/en/ecs/developer-reference/api-ecs-2014-05-26-overview).

In Alibaba Cloud CLI, you can specify command line options to change the behaviors of commands or implement the extended features of commands based on your business requirements. For more information, see [Command line options for API calls](/help/en/cli/command-line-options).
