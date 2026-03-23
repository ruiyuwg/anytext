This topic describes how to create an ApsaraDB for MongoDB replica set instance by using Alibaba Cloud CLI.

For more information about Alibaba Cloud CLI, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)

## Resource architecture

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548561961/p698453.png)

You can create a virtual private cloud (VPC), a vSwitch, and a replica set instance in a specific region.

## **Install Alibaba Cloud CLI**

-   Install Alibaba Cloud CLI on your local computer. For more information, see [Installation Guide](/help/en/cli/installation-guide/).
    
-   If you do not want to install Alibaba Cloud CLI on your local computer, use [Cloud Shell](https://shell.aliyun.com/) to install Alibaba Cloud CLI. Cloud Shell provides a built-in runtime environment for Alibaba Cloud CLI.
    

## **Grant required permissions to a RAM user**

In the example described in this section, you need to create a virtual private cloud (VPC), a vSwitch, and an ApsaraDB for MongoDB instance. By default, Alibaba Cloud CLI uses the credentials of the current user who logs on to the ApsaraDB for MongoDB console. In this case, the current user must be granted the following permissions:

-   _AliyunVPCFullAccess_: provides full access to the Virtual Private Cloud.
    
-   _AliyunMongoDBFullAccess_: provides full access to ApsaraDB for MongoDB.
    

## **Generate a CLI command**

1.  Log on to [OpenAPI Explorer](https://api.alibabacloud.com/).
    
2.  In the upper part of the page that appears, click **Cloud Products** and then select the cloud service that you want to manage.
    
3.  In the left-side navigation pane, click **Debugging**.
    
4.  In the left-side search box of the online debugging page, search for the API operation that you want to call. On the **Parameters** tab, enter parameter values based on the API document of the API operation. Then, click the **CLI Example** tab on the right side of the **Parameters** tab to generate an example that contains configured parameters.![CLI-调试API](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1621425271/p832932.png)
    
    -   Click the ![运行命令.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1621425271/p832933.png) icon. You are directed to [Cloud Shell](https://shell.aliyun.com/). You can debug the command in Cloud Shell.
        
    -   Click the ![复制.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1621425271/p832935.png) icon to copy the CLI command to the clipboard and paste the command to the local shell.
        
        -   Pay attention to the parameter formats when you copy and paste the CLI command to the local shell. For more information about the formats of parameters in Alibaba Cloud CLI commands, see [Parameter formats](/help/en/cli/parameter-format-overview).
            
        -   By default, the `--region` option is added to the sample command generated in OpenAPI Explorer. When you copy the command to your computer, Alibaba Cloud CLI ignores the region information in the default identity credential configurations and environment variable settings, and preferentially uses the specified region to call the command. You can delete or retain this option based on your business requirements.
            

## **Call an API operation**

If you use Alibaba Cloud CLI to call an API operation, make sure that you are familiar with the basic command structure.

```
aliyun <product> <APIName> [--parameter1 value1 --parameter2 value2 ...]
```

-   `product`: the code of the Alibaba Cloud service whose API operation you want to call. For example, the product code of ApsaraDB for MongoDB is `dds`.
    
-   `APIName`: the name of the API operation that you want to call. For example, to create a replica set instance, you need to call the `CreateDBInstance` operation.
    
-   `--parameter`: the request parameters that you must specify.
    

### **Create a VPC**

To create a VPC, call the `CreateVpc` operation. For more information, see [CreateVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpc).

Example:

```
aliyun vpc CreateVpc --RegionId cn-hangzhou
```

Sample command output:

```
{
        "RequestId": "E8410523-E996-5345-9E4D-35D6C47A****",
        "ResourceGroupId": "rg-acfmz7u4zzr****",
        "RouteTableId": "vtb-bp1dcxc8j4jys18id****",
        "VRouterId": "vrt-bp1w2lsqfm9f7k2dy****",
        "VpcId": "vpc-bp191olzz22cgl073****"
}
```

### **Create a vSwitch**

To create a vSwitch, call the `CreateVSwitch` operation. For more information, see [CreateVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvswitch).

Example:

```
aliyun vpc CreateVSwitch --ZoneId cn-hangzhou-i --CidrBlock 172.16.1.0/24 --VpcId vpc-bp191olzz22cgl073****
```

Sample command output:

```
{
        "RequestId": "D3316995-CAB6-58A3-97E5-F1CBFE2E****",
        "VSwitchId": "vsw-bp10cm6ujv0na2vlp****"
}
```

### **Create an ApsaraDB for MongoDB instance**

To create an ApsaraDB for MongoDB instance, call the `CreateDBInstance` operation. For more information, see [CreateDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createdbinstance).

Example:

```
aliyun dds CreateDBInstance --RegionId cn-hangzhou --ZoneId cn-hangzhou-i --EngineVersion 7.0 --DBInstanceClass mdb.shard.4x.large.d --DBInstanceStorage 20 --VpcId vpc-bp191olzz22cgl073**** --VSwitchId vsw-bp10cm6ujv0na2vlp****
```

Sample command output:

```
{
        "DBInstanceId": "dds-bp1df136c811****",
        "OrderId": "23705179664****",
        "RequestId": "1336E68C-86A4-5355-A12A-D0A0C27A****"
}
```
