The ALIYUN::SAE::Application resource type creates a Serverless App Engine (SAE) application.

## Syntax

```
{
  "Type": "ALIYUN::SAE::Application",
  "Properties": {
    "Timezone": String,
    "AppDescription": String,
    "MountDesc": String,
    "NasId": String,
    "WarStartOptions": String,
    "Liveness": String,
    "Memory": Integer,
    "WebContainer": String,
    "SlsConfigs": String,
    "Cpu": Integer,
    "Deploy": Boolean,
    "PackageVersion": String,
    "AppName": String,
    "Jdk": String,
    "JarStartArgs": String,
    "PreStop": String,
    "Readiness": String,
    "PackageType": String,
    "CommandArgs": String,
    "Envs": String,
    "VSwitchId": String,
    "ImageUrl": String,
    "PostStart": String,
    "JarStartOptions": String,
    "MountHost": String,
    "Replicas": Integer,
    "CustomHostAlias": String,
    "VpcId": String,
    "Tags": List,
    "SecurityGroupId": String,
    "Command": String,
    "EdasContainerVersion": String,
    "PackageUrl": String,
    "NamespaceId": String,
    "AssociateEip": Boolean,
    "AcrInstanceId": String,
    "OssAkId": String,
    "ProgrammingLanguage": String,
    "OssAkSecret": String,
    "Python": String,
    "BaseAppId": String,
    "EnableEbpf": String,
    "PhpArmsConfigLocation": String,
    "PhpConfig": String,
    "MicroRegistrationConfig": String,
    "TerminationGracePeriodSeconds": Integer,
    "ConfigMapMountDesc": String,
    "PvtzDiscoverySvc": String,
    "AcrAssumeRoleArn": String,
    "TomcatConfig": String,
    "AppSource": String,
    "PythonModules": String,
    "NasConfigs": String,
    "MicroRegistration": String,
    "ServiceTags": String,
    "ImagePullSecrets": String,
    "AutoConfig": Boolean,
    "KafkaConfigs": String,
    "Php": String,
    "OssMountDescs": List,
    "PhpConfigLocation": String,
    "SaeVersion": String,
    "NewSaeVersion": String,
    "EnableNewArms": Boolean,
    "EnableSidecarResourceIsolated": Boolean,
    "SidecarContainersConfig": List,
    "InitContainersConfig": List
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraint**

AppName

String

Yes

No

The name of the application.

The name must be 1 to 36 characters long. It must start with a letter and can contain letters, digits, and hyphens (-).

Cpu

Integer

Yes

No

The CPU required by each instance. Only fixed specifications are supported.

Valid values:

-   500
    
-   1000
    
-   2000
    
-   4000
    
-   8000
    
-   16000
    
-   32000
    

Unit: milli-cores.

Memory

Integer

Yes

No

The memory required by each instance. Only fixed specifications are supported.

Memory and CPU have a one-to-one mapping. The following combinations are supported:

-   1024: Represents 500 millicores of CPU.
    
-   2048 corresponds to CPU values of 500 and 1000 millicores.
    
-   4096: Corresponds to 1000 and 2000 millicores of CPU.
    
-   8192: corresponds to a CPU allocation of 2000 or 4000 millicores.
    
-   16384: Corresponds to a CPU with either 4000 millicores or 8000 millicores.
    
-   32768: Represents 16,000 millicores of CPU.
    
-   65536 represents CPUs with 8,000, 16,000, or 32,000 millicores.
    
-   131072: Represents a CPU with 32,000 millicores.
    

Unit: MB.

Replicas

Integer

Yes

No

The initial number of instances.

None

PackageType

String

Yes

No

The package type of the application.

Valid values:

-   FatJar
    
-   War
    
-   Image
    

Timezone

String

No

Yes

The time zone.

Default value: Asia/Shanghai.

AppDescription

String

No

No

The description of the application.

The description must be up to 1024 characters long.

MountDesc

String

No

Yes

The mount description.

None

NasId

String

No

Yes

The ID of the NAS file system to mount.

The NAS file system must have available mount target quotas, or its mount targets must already exist in the vSwitches of the VPC. If you do not specify this parameter but specify MountDesc, SAE automatically purchases a NAS file system and mounts it to a vSwitch in the VPC.

WarStartOptions

String

No

Yes

The startup options for WAR packages.

Default startup command:`java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.

Liveness

String

No

Yes

The container health check. Containers that fail the health check restart.

Only command-based health checks inside containers are supported. Example:`{"exec":{"command":["sleep","5s"]},"initialDelaySeconds":10,"timeoutSeconds":11}`.

WebContainer

String

No

Yes

The Tomcat version on which the deployment package depends.

This parameter is not supported for images.

SlsConfigs

String

No

Yes

The configuration for file log collection.

None

Deploy

Boolean

No

No

Whether to deploy immediately.

Valid values:

-   true: Deploy immediately.
    
-   false (default): Do not deploy immediately.
    

Tags

List

No

Yes

Tags.

You can specify up to 20 tags.

For more information, see [Tags syntax](#section-rj0-0a6-c1v) and [Tags properties](#section-g5l-c9j-xv4).

PackageVersion

String

No

Yes

The version of the deployment package.

This parameter is required if PackageType is set to War or FatJar.

Jdk

String

No

Yes

The JDK version on which the deployment package depends.

This parameter is not supported for images.

JarStartArgs

String

No

Yes

The startup arguments for JAR packages.

Default startup command:`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.

PreStop

String

No

Yes

The script to run before the container is deleted.

The script to execute before the container is deleted, such as: `{"exec":{"command":"cat","/etc/group"}}`.

Readiness

String

No

Yes

The script to check the application startup status.

An application startup status check script, such as: `{"exec":{"command":["sleep","6s"]},"initialDelaySeconds":15,"timeoutSeconds":12}`.

Containers that repeatedly fail the readiness check restart. Traffic from SLB does not enter containers that fail the readiness check.

CommandArgs

String

No

Yes

The command arguments for starting an image.

None

Envs

String

No

Yes

The environment variables for the container.

Format:`[{"name":"envtmp","value":"0"}]`.

-   `name`: The name of the environment variable.
    
-   `value`: The value or reference of the environment variable.
    

VSwitchId

String

No

No

The vSwitch where the ENIs of application instances reside.

The vSwitch must be in the specified VPC. A vSwitch is bound to an EDAS namespace. If you do not specify this parameter, the vSwitch bound to the namespace is used.

ImageUrl

String

No

Yes

The image address.

Only applications of the Image type support this parameter.

PostStart

String

No

Yes

The script to run after the container starts.

You can execute a script after the container starts. For example: `{"exec":{"command":"cat","/etc/group"}}`.

JarStartOptions

String

No

Yes

The startup options for JAR packages.

Default startup command:`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.

MountHost

String

No

Yes

The mount target of the NAS file system in the VPC.

None

CustomHostAlias

String

No

Yes

The custom host mapping in the container.

Custom host mapping in the container. Format: `[{"hostName":"samplehost","ip":"127.0.XX.XX"}]`.

-   `hostName`: The domain name or hostname.
    
-   `ip`: The IP address.
    

VpcId

String

No

No

The VPC corresponding to the SAE namespace.

In SAE, a namespace can correspond to only one VPC, and this binding cannot be changed. The first application created in a namespace establishes the binding. Multiple namespaces can correspond to one VPC. If you do not specify this parameter, the VPC bound to the namespace is used.

SecurityGroupId

String

No

No

The security group ID.

None

Command

String

No

Yes

The command to start an image.

The command must be an executable object in the container. Example: sleep.

Specifying this command overrides the default startup command of the image.

EdasContainerVersion

String

No

Yes

The runtime environment used by EDAS Pandora applications.

None

PackageUrl

String

No

Yes

The URL of the deployment package.

This parameter takes effect only when PackageType is set to War or FatJar.

NamespaceId

String

Yes

No

The ID of the EDAS namespace.

Only namespaces whose names consist of lowercase letters and hyphens (-) are supported. The name must start with a lowercase letter.

AssociateEip

Boolean

No

No

Whether to associate an EIP.

Valid values:

-   **true**: Attach.
    
-   **false**: Do not attach.
    

AcrInstanceId

String

No

Yes

The ID of the ACR Enterprise instance.

None

OssAkId

String

No

No

The AccessKey ID for OSS read and write operations.

None

ProgrammingLanguage

String

No

No

The programming language of the application.

Valid values:

-   **java**: Java
    
-   **php**: PHP
    
-   **other**: Multi-language, such as Python, C++, Go, .NET, and Node.js
    

OssAkSecret

String

No

No

The AccessKey secret for OSS read and write operations.

None

Python

String

No

No

The Python environment.

Python 3.9.15 is supported.

BaseAppId

String

No

No

The ID of the base application.

None

EnableEbpf

String

No

No

Enables application monitoring for non-Java applications based on eBPF technology.

Valid values:

-   **true**: Enable.
    
-   **false**: Disable. This is the default value.
    

PhpArmsConfigLocation

String

No

No

The mount path for PHP application monitoring configuration. Ensure that the PHP server loads the configuration file from this path.

You do not need to manage the configuration content. SAE automatically renders the correct configuration file.

PhpConfig

String

No

No

The content of the PHP configuration file.

None

MicroRegistrationConfig

String

No

No

The registration center configuration.

None

TerminationGracePeriodSeconds

Integer

No

No

The graceful shutdown timeout period.

Default value: 30. Valid values: 1 to 300. Unit: seconds.

ConfigMapMountDesc

String

No

No

**ConfigMap** mount description.

Inject configuration information into containers using ConfigMaps created on the namespace configuration page. Parameters:

-   **configMapId**: The ConfigMap instance ID.
    
-   **key**: The key.
    
-   **mountPath**: The mount path.
    

**Note**

You can mount all keys by passing the `sae-sys-configmap-all` parameter.

PvtzDiscoverySvc

String

No

No

Enables K8s Service registration and discovery.

The valid values are as follows:

-   **serviceName**: The service name. Format: `custom-namespace ID`. The suffix `-namespace ID` cannot be customized and must match the namespace of the application. For example, if you select the default namespace in the China (Beijing) region, the suffix is `-cn-beijing-default`.
    
-   **namespaceId**: The namespace ID.
    
-   **portProtocols**: The port and protocol. Valid port range: \[1,65535\]. Supported protocols: **TCP** and **UDP**.
    
-   **portAndProtocol**: The port and protocol. Valid port range: \[1,65535\]. Supported protocols: **TCP** and **UDP**. **We recommend that you use portProtocols. If portProtocols is specified, only portProtocols takes effect.**
    
-   **enable**: Enables K8s Service registration and discovery.
    

AcrAssumeRoleArn

String

No

No

The ARN of the RAM role required for pulling images across accounts.

For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).

TomcatConfig

String

No

No

Tomcat file configuration.

Set this parameter to "" or "{}" to delete the configuration:

-   **port**: Valid port range: 1024 to 65535. Ports below 1024 require root permissions. Because containers run with admin permissions, specify a port greater than 1024. Default value: 8080.
    
-   **contextPath**: The access path. Default value: root directory "/".
    
-   **maxThreads**: The size of the connection pool. Default value: 400.
    
-   uriEncoding: The encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default value: **ISO-8859-1**.
    
-   **useBodyEncodingForUri**: Specifies whether to use **BodyEncoding for URL**. Default value: **true**.
    

AppSource

String

No

No

Microservice application.

Valid values:

-   micro\_service
    

PythonModules

String

No

No

Custom module dependencies.

By default, dependencies defined in requirements.txt in the root directory are installed. If no configuration or custom packages are specified, you can specify the dependencies to install.

NasConfigs

String

No

No

The configuration for mounting NAS.

The following lists the valid values:

-   **mountPath**: The container mount path.
    
-   **readOnly**: Specifies whether the mount has read and write permissions. Set to **false** for read and write permissions.
    
-   **nasId**: The NAS ID.
    
-   **mountDomain**: The container mount target address. For more information, see [DescribeMountTargets](/help/en/nas/api-describemounttargets).
    
-   **nasPath**: The relative file directory in NAS.
    

MicroRegistration

String

No

No

Selects the Nacos registry.

Valid values:

-   **0**: Built-in Nacos in SAE.
    
-   **1**: Self-managed Nacos.
    
-   **2**: MSE commercial Nacos.
    

ServiceTags

String

No

No

The grayscale tags configured for the application.

None

ImagePullSecrets

String

No

No

The ID of the secret.

None

AutoConfig

Boolean

No

No

Whether to automatically configure the network environment.

Valid values:

-   **true**: SAE automatically configures the network environment when creating the application. The values of **NamespaceId**, **VpcId**, **vSwitchId**, and **SecurityGroupId** are ignored.
    
-   **false**: Manually configure the network environment when creating the application.
    

**Note**

If you set this parameter to **true**, other values of **NamespaceId** are ignored.

KafkaConfigs

String

No

No

The aggregated configuration for log collection to Kafka.

The values are as follows:

-   **kafkaEndpoint**: The service endpoint for Kafka API.
    
-   **kafkaInstanceId**: The Kafka instance ID.
    
-   **kafkaConfigs**: The aggregated configuration for one or more logs. For more information, see the request parameter [KafkaConfigs](#069a0755f548p) in this topic.
    

Php

String

No

No

The PHP version on which the PHP deployment package depends.

None.

OssMountDescs

List

No

No

The OSS mount description.

Parameters:

-   **bucketName**: The bucket name.
    
-   **bucketPath**: The directory or OSS object you created in OSS. If the OSS mount directory does not exist, an exception occurs.
    
-   **mountPath**: The container path in SAE. If the path exists, it is overwritten. If the path does not exist, it is created.
    
-   **readOnly**: Specifies whether the container path has read permissions on the mounted directory. Valid values:
    
    -   **true**: Read-only permission.
        
    -   **false**: Read and write permission.
        

PhpConfigLocation

String

No

No

The mount path for PHP application startup configuration.

Ensure that the PHP server uses this configuration file to start.

SaeVersion

String

No

No

The SAE version.

Supported versions:

-   **v1**
    
-   **v2**
    

NewSaeVersion

String

No

No

The new SAE version.

Valid values:

-   lite
    
-   std
    
-   pro
    

EnableNewArms

Boolean

No

No

Whether to enable the new ARMS feature.

Valid values:

-   true: Enable
    
-   false: Disable
    

EnableSidecarResourceIsolated

Boolean

No

Yes

Whether to enable sidecar resource isolation.

Valid values:

-   true: Perform fencing.
    
-   false: Do not isolate resources
    

SidecarContainersConfig

List

No

Yes

The list of container configurations.

For more information, see [SidecarContainersConfig properties](#d26263b5e1ttc).

InitContainersConfig

List

No

Yes

The list of init container configurations.

For more information, see [InitContainersConfig properties](#9cfef9f347lm9).

## SidecarContainersConfig syntax

```
"SidecarContainersConfig": [
  {
    "CommandArgs": String,
    "AcrInstanceId": String,
    "Memory": Integer,
    "Name": String,
    "EmptyDirDesc": String,
    "Command": String,
    "ImageUrl": String,
    "Cpu": Integer,
    "Envs": String,
    "ConfigMapMountDesc": String
  }
]  
```

## SidecarContainersConfig properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraint**

CommandArgs

String

No

Yes

The command arguments to run in the init container.

None

AcrInstanceId

String

No

Yes

The ID of the ACR instance.

None

Memory

Integer

Yes

Yes

The amount of memory allocated to the sidecar container.

None

Name

String

Yes

Yes

The name of the sidecar container.

None

EmptyDirDesc

String

No

Yes

The EMPTYDIR mount description.

None

Command

String

No

Yes

The command to run in the init container.

None

ImageUrl

String

No

Yes

The image address.

You can configure a Registry Address only for image-based applications.

Cpu

Integer

Yes

Yes

The number of CPU cores allocated to the sidecar container.

None

Envs

String

No

Yes

The environment variables for the container.

Example:

```
[{ \"name\": \"envtmp\", \"value\": \"0\"}]
```

ConfigMapMountDesc

String

No

Yes

The ConfigMap mount description.

None

## InitContainersConfig syntax

```
"InitContainersConfig": [
  {
    "Command": String,
    "ConfigMapMountDesc": String,
    "ImageUrl": String,
    "CommandArgs": String,
    "Envs": String,
    "Name": String
  }
]  
```

## InitContainersConfig properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraint**

Command

String

No

Yes

The command to run in the init container.

None

ConfigMapMountDesc

String

No

No

The ConfigMap mount description.

None

ImageUrl

String

No

Yes

The image address.

Only applications of the Image type support this parameter.

CommandArgs

String

No

Yes

The command arguments to run in the init container.

None

Envs

String

No

Yes

The environment variables for the container.

Example:

```
[{ \"name\": \"envtmp\", \"value\": \"0\"}]
```

Name

String

Yes

Yes

The name of the init container.

None

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The key must be 1 to 128 characters long. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The value can be 0 to 128 characters long. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   AppId: The application ID.
    
-   ChangeOrderId: The release order ID, which is used to query the task execution status.
    

## Examples

### **Scenario 1:** Create an SAE application.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/sae/application-case1.yml&pageTitle=Create%20SAE%20application&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  NamespaceId:
    Type: String
    Description: |-
      EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
      Namespace can interface to obtain from DescribeNamespaceList.
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
  SecurityGroupId:
    Type: String
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
Resources:
  Application:
    Type: ALIYUN::SAE::Application
    Properties:
      AppName: TestApp
      NamespaceId:
        Ref: NamespaceId
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      SecurityGroupId:
        Ref: SecurityGroupId
      Cpu: 500
      Memory: 1024
      Replicas: 2
      PackageType: War
      Deploy: true
      Timezone: Asia/Shanghai
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "NamespaceId": {
      "Type": "String",
      "Description": "EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.\nNamespace can interface to obtain from DescribeNamespaceList."
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      }
    },
    "SecurityGroupId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      }
    }
  },
  "Resources": {
    "Application": {
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "TestApp",
        "NamespaceId": {
          "Ref": "NamespaceId"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "Cpu": 500,
        "Memory": 1024,
        "Replicas": 2,
        "PackageType": "War",
        "Deploy": true,
        "Timezone": "Asia/Shanghai"
      }
    }
  },
  "Outputs": {
  }
}
```

### **Scenario 2:** Create an SAE application, namespace, and SLB binding.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/sae/application-case2.yml&pageTitle=Create%20SAE%20application%2C%20namespace%2C%20and%20SLB%20binding&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Create SAE applications, namespaces, and SLB bindings, configure ECS resources with load balancing, and automate the deployment of containerized applications.
  en: Create SAE applications, namespaces, and SLB bindings, configure ECS resources with load balancing, and automate the deployment of containerized applications.
Parameters:
  ZoneId:
    Type: String
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: VpcId
      ZoneId: ZoneId
  SecurityGroupId:
    Type: String
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: VpcId
  NamespaceName:
    Type: String
    Description: Namespace name
    Default: mytest
  NamespaceId:
    Type: String
    Description: Namespace ID
    Default: mytest
  Description:
    Type: String
    Description: Description of the namespace
    Default: null
  AppName:
    Type: String
    Description: Application name
    Default: test
  LoadBalancerSpec:
    Type: String
    Description: The specification of the SLB instance
    Default: slb.s2.medium
Resources:
  LoadBalancer:
    Type: ALIYUN::SLB::LoadBalancer
    Properties:
      MasterZoneId:
        Ref: ZoneId
      LoadBalancerSpec:
        Ref: LoadBalancerSpec
  Namespace:
    Type: ALIYUN::SAE::Namespace
    Properties:
      NamespaceName:
        Ref: NamespaceName
      NamespaceId:
        Fn::Sub: ${ALIYUN::Region}:${NamespaceId}
      NamespaceDescription:
        Ref: Description
    DependsOn: LoadBalancer
  SaeApp:
    Type: ALIYUN::SAE::Application
    Properties:
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      SecurityGroupId:
        Ref: SecurityGroupId
      AppName:
        Ref: AppName
      NamespaceId:
        Fn::GetAtt:
        - Namespace
        - NamespaceId
      Cpu: 500
      Memory: 1024
      Replicas: 2
      Deploy: true
      Timezone: Asia/Shanghai
      SaeVersion: v2
      AutoConfig: false

      PackageType: Image
      Jdk: Dragonwell 21
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:web-springboot-hellosae-v1.0
      ProgrammingLanguage: java
      AppSource: micro_service
    DependsOn:
    - Namespace
  BindSlb:
    Type: ALIYUN::SAE::SlbBinding
    Properties:
      AppId:
        Ref: SaeApp
      Intranet: '[{"port": 80, "targetPort": 8080, "protocol": "TCP"}]'
      InternetSlbId:
        Ref: LoadBalancer
    DependsOn:
    - LoadBalancer
    - SaeApp
Outputs:
  AppId:
    Value:
      Fn::GetAtt:
      - SaeApp
      - AppId
  ChangeOrderId:
    Value:
      Fn::GetAtt:
      - SaeApp
      - ChangeOrderId
  NamespaceId:
    Value:
      Fn::GetAtt:
      - Namespace
      - NamespaceId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Create SAE applications, namespaces, and SLB bindings, configure ECS resources with load balancing, and automate the deployment of containerized applications.",
    "en": "Create SAE applications, namespaces, and SLB bindings, configure ECS resources with load balancing, and automate the deployment of containerized applications."
  },
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "VpcId",
        "ZoneId": "ZoneId"
      }
    },
    "SecurityGroupId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "AssociationPropertyMetadata": {
        "VpcId": "VpcId"
      }
    },
    "NamespaceName": {
      "Type": "String",
      "Description": "Namespace name",
      "Default": "mytest"
    },
    "NamespaceId": {
      "Type": "String",
      "Description": "Namespace ID",
      "Default": "mytest"
    },
    "Description": {
      "Type": "String",
      "Description": "Description of the namespace",
      "Default": null
    },
    "AppName": {
      "Type": "String",
      "Description": "Application name",
      "Default": "test"
    },
    "LoadBalancerSpec": {
      "Type": "String",
      "Description": "The specification of the SLB instance",
      "Default": "slb.s2.medium"
    }
  },
  "Resources": {
    "LoadBalancer": {
      "Type": "ALIYUN::SLB::LoadBalancer",
      "Properties": {
        "MasterZoneId": {
          "Ref": "ZoneId"
        },
        "LoadBalancerSpec": {
          "Ref": "LoadBalancerSpec"
        }
      }
    },
    "Namespace": {
      "Type": "ALIYUN::SAE::Namespace",
      "Properties": {
        "NamespaceName": {
          "Ref": "NamespaceName"
        },
        "NamespaceId": {
          "Fn::Sub": "${ALIYUN::Region}:${NamespaceId}"
        },
        "NamespaceDescription": {
          "Ref": "Description"
        }
      },
      "DependsOn": "LoadBalancer"
    },
    "SaeApp": {
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "AppName": {
          "Ref": "AppName"
        },
        "NamespaceId": {
          "Fn::GetAtt": [
            "Namespace",
            "NamespaceId"
          ]
        },
        "Cpu": 500,
        "Memory": 1024,
        "Replicas": 2,
        "Deploy": true,
        "Timezone": "Asia/Shanghai",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "PackageType": "Image",
        "Jdk": "Dragonwell 21",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:web-springboot-hellosae-v1.0"
        },
        "ProgrammingLanguage": "java",
        "AppSource": "micro_service"
      },
      "DependsOn": [
        "Namespace"
      ]
    },
    "BindSlb": {
      "Type": "ALIYUN::SAE::SlbBinding",
      "Properties": {
        "AppId": {
          "Ref": "SaeApp"
        },
        "Intranet": "[{\"port\": 80, \"targetPort\": 8080, \"protocol\": \"TCP\"}]",
        "InternetSlbId": {
          "Ref": "LoadBalancer"
        }
      },
      "DependsOn": [
        "LoadBalancer",
        "SaeApp"
      ]
    }
  },
  "Outputs": {
    "AppId": {
      "Value": {
        "Fn::GetAtt": [
          "SaeApp",
          "AppId"
        ]
      }
    },
    "ChangeOrderId": {
      "Value": {
        "Fn::GetAtt": [
          "SaeApp",
          "ChangeOrderId"
        ]
      }
    },
    "NamespaceId": {
      "Value": {
        "Fn::GetAtt": [
          "Namespace",
          "NamespaceId"
        ]
      }
    }
  }
}
```

### **Scenario 3:** Deploy the production environment Dify platform through Serverless App Engine.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/sae/application-case3.yml&pageTitle=Deploy%20the%20production%20environment%20Dify%20platform%20through%20Serverless%20App%20Engine&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Deploy the production environment Dify platform through Serverless App Engine.
  en: Deploy a production-ready Dify platform using Serverless App Engine (SAE).
Parameters:
  CommonName:
    Type: String
    Default: Dify
  NamespaceName:
    Type: String
    Label:
      en: Namespace name
      zh-cn: Namespace name
    Description:
      zh-cn: Namespace name, only lowercase letters and numbers are supported
      en: The name of the namespace. Only lowercase letters and numbers are supported.
    AllowedPattern: '^[a-z0-9]+$'
    AssociationProperty: AutoCompleteInput
    AssociationPropertyMetadata:
      Length: 3
      Prefix: dify
      CharacterClasses:
        - Class: lowercase
          min: 2
        - Class: "number"
          min: 1
  ZoneId1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId2
    Label:
      en: Availability Zone 1
      zh-cn: Availability Zone 1
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Availability Zone 2
      zh-cn: Availability Zone 2
  InstanceType:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      ZoneId: ${ZoneId1}
    Label:
      en: Instance type
      zh-cn: Instance type
  ADBPGAccount:
    Default: dify
    Type: String
    Label:
      zh-cn: Database account
      en: Database account
  ADBPGPassword:
    NoEcho: true
    Type: String
    Label:
      zh-cn: Database account password
      en: Database account password
    AssociationProperty: ALIYUN::RDS::Instance::AccountPassword
  InstancePassword:
    Type: String
    Label:
      en: Instance login password
      zh-cn: Logon password
    Description:
      en: The login password for the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
      zh-cn: Server logon password. Length: 8 to 30 characters. Must contain at least three of the following types: uppercase letters, lowercase letters, digits, and special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    AssociationProperty: ALIYUN::ECS::Instance::Password
  RedisInstancePassword:
    Type: String
    Label:
      en: Redis instance password
      zh-cn: Instance password
    Description:
      en: The password for the Redis instance used by Dify. The password must be 8 to 32 characters in length and contain only uppercase letters, lowercase letters, and digits.
      zh-cn: The Redis password used by Dify must be 8 to 32 characters long and can contain only uppercase letters, lowercase letters, and digits. Do not use other characters.
    ConstraintDescription:
      en: The password for the Redis instance used by Dify. The password must be 8 to 32 characters in length and contain only uppercase letters, lowercase letters, and digits.
      zh-cn: The Redis password used by Dify must be 8 to 32 characters long and can contain only uppercase letters, lowercase letters, and digits. Do not use other characters.
    AllowedPattern: ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9]{8,32}$
    MinLength: '8'
    MaxLength: '32'
    NoEcho: true
  DBInstanceClass:
    Type: String
    Label:
      en: Instance type
      zh-cn: Instance type
    Default: pg.n4m.2c.2m
    Required: true
    AssociationProperty: ALIYUN::RDS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId}
      EngineVersion: '17.0'
      Engine: PostgreSQL
      Category: HighAvailability
      InstanceChargeType: Postpaid
      DBInstanceStorageType: cloud_essd
      CommodityCode: bards
  PostgresSQLPassword:
    Type: String
    NoEcho: true
    Label:
      en: Database account password
      zh-cn: Database account password
    AssociationProperty: ALIYUN::RDS::Instance::AccountPassword
  PostgresSQLUserName:
    Type: String
    Label:
      en: Database account
      zh-cn: Database account
    # This rule applies to MySQL 5.7 and 8.0
    AllowedPattern: ^(?!dbo\b|login\b|admin\b|administrator\b|adminsys\b|alimail\b|aliyun\b|apache\b|appadmin\b|apsara\b|aurora\b|bulkadmin\b|cangjie\b|cdn\b|client\b|cm\b|dataengine\b|dayu\b|dba\b|dbcreator\b|developer\b|diskadmin\b|distribution\b|dns\b|download\b|eagleye\b|f5\b|faq\b|fuxi\b|galaxy\b|gongcao\b|gongming\b|groupon\b|ha\b|help\b|host\b|hostmaster\b|houyi\b|hr\b|info\b|information_schema\b|kuafu\b|lvs\b|manager\b|master\b|meituan\b|model\b|monitor\b|msdb\b|mssqld\b|mssqlsystemresource\b|mysql\b|nas\b|net\b|netops\b|netweb\b|news\b|no-reply\b|ntp\b|nuwa\b|nvwa\b|operator\b|opr\b|ops\b|opsdb\b|oracle\b|pangu\b|pe\b|post\b|postmaster\b|processadmin\b|public\b|qq\b|replicator\b|reply\b|root\b|sa\b|sales\b|san\b|security\b|securityadmin\b|serveradmin\b|services\b|setupadmin\b|shennong\b|siteops\b|sqlengine\b|sqlonline\b|squid\b|ssladmin\b|support\b|sys\b|sysadmin\b|syslog\b|system\b|taoyun\b|tempdb\b|test\b|tianyun\b|wangwang\b|eb\b|webmaster\b|webnet\b|xtrabak\b|youchao\b|yum\b|yunti\b|zhongkui\b|database\b|add\b|except\b|percent\b|all\b|exec\b|plan\b|alter\b|execute\b|precision\b|and\b|exists\b|primary\b|any\b|exit\b|print\b|as\b|fetch\b|proc\b|asc\b|file\b|procedure\b|authorization\b|fillfactor\b|public\b|backup\b|for\b|raiserror\b|begin\b|foreign\b|read\b|between\b|freetext\b|readtext\b|break\b|freetexttable\b|reconfigure\b|browse\b|from\b|references\b|bulk\b|full\b|replication\b|by\b|function\b|restore\b|cascade\b|goto\b|restrict\b|case\b|grant\b|return\b|check\b|group\b|revoke\b|checkpoint\b|having\b|right\b|close\b|holdlock\b|rollback\b|clustered\b|identity\b|rowcount\b|coalesce\b|identity_insert\b|rowguidcol\b|collate\b|identitycol\b|rule\b|column\b|if\b|save\b|commit\b|in\b|schema\b|compute\b|index\b|select\b|constraint\b|inner\b|session_user\b|contains\b|insert\b|set\b|containstable\b|intersect\b|setuser\b|continue\b|into\b|shutdown\b|convert\b|is\b|some\b|create\b|join\b|statistics\b|cross\b|key\b|system_user\b|current\b|kill\b|table\b|current_date\b|left\b|textsize\b|current_time\b|like\b|then\b|current_timestamp\b|lineno\b|to\b|current_user\b|load\b|top\b|cursor\b|national\b|tran\b|database\b|nocheck\b|transaction\b|dbcc\b|nonclustered\b|trigger\b|deallocate\b|not\b|truncate\b|declare\b|null\b|tsequal\b|default\b|nullif\b|union\b|delete\b|of\b|unique\b|deny\b|off\b|update\b|desc\b|offsets\b|updatetext\b|disk\b|on\b|use\b|distinct\b|open\b|user\b|distributed\b|opendatasource\b|values\b|double\b|openquery\b|varying\b|drop\b|openrowset\b|view\b|dummy\b|openxml\b|waitfor\b|dump\b|option\b|when\b|else\b|or\b|where\b|end\b|order\b|while\b|errlvl\b|outer\b|with\b|escape\b|over\b|writetext\b|add\b|analyze\b|asc\b|between\b|blob\b|call\b|change\b|check\b|condition\b|continue\b|cross\b|current_timestamp\b|database\b|day_microsecond\b|dec\b|default\b|desc\b|distinct\b|double\b|each\b|enclosed\b|exit\b|fetch\b|float8\b|foreign\b|goto\b|having\b|hour_minute\b|ignore\b|infile\b|insensitive\b|int1\b|int4\b|interval\b|iterate\b|keys\b|leading\b|like\b|lines\b|localtimestamp\b|longblob\b|low_priority\b|mediumint\b|minute_microsecond\b|modifies\b|no_write_to_binlog\b|on\b|optionally\b|out\b|precision\b|purge\b|read\b|references\b|rename\b|require\b|revoke\b|schema\b|select\b|set\b|spatial\b|sqlexception\b|sql_big_result\b|ssl\b|table\b|tinyblob\b|to\b|true\b|unique\b|update\b|using\b|utc_timestamp\b|varchar\b|when\b|with\b|xor\b|all\b|and\b|asensitive\b|bigint\b|both\b|cascade\b|char\b|collate\b|connection\b|convert\b|current_date\b|current_user\b|databases\b|day_minute\b|decimal\b|delayed\b|describe\b|distinctrow\b|drop\b|else\b|escaped\b|explain\b|float\b|for\b|from\b|grant\b|high_priority\b|hour_second\b|in\b|inner\b|insert\b|int2\b|int8\b|into\b|join\b|kill\b|leave\b|limit\b|load\b|lock\b|longtext\b|match\b|mediumtext\b|minute_second\b|natural\b|null\b|optimize\b|or\b|outer\b|primary\b|raid0\b|reads\b|regexp\b|repeat\b|restrict\b|right\b|schemas\b|sensitive\b|show\b|specific\b|sqlstate\b|sql_calc_found_rows\b|starting\b|terminated\b|tinyint\b|trailing\b|undo\b|unlock\b|usage\b|utc_date\b|values\b|varcharacter\b|where\b|write\b|year_month\b|alter\b|as\b|before\b|binary\b|by\b|case\b|character\b|column\b|constraint\b|create\b|current_time\b|cursor\b|day_hour\b|day_second\b|declare\b|delete\b|deterministic\b|div\b|dual\b|elseif\b|exists\b|false\b|float4\b|force\b|fulltext\b|group\b|hour_microsecond\b|if\b|index\b|inout\b|int\b|int3\b|integer\b|is\b|key\b|label\b|left\b|linear\b|localtime\b|long\b|loop\b|mediumblob\b|middleint\b|mod\b|not\b|numeric\b|option\b|order\b|outfile\b|procedure\b|range\b|real\b|release\b|replace\b|return\b|rlike\b|second_microsecond\b|separator\b|smallint\b|sql\b|sqlwarning\b|sql_small_result\b|straight_join\b|then\b|tinytext\b|trigger\b|union\b|unsigned\b|use\b|utc_time\b|varbinary\b|varying\b|while\b|x509\b|zerofill)([a-zA-Z][a-zA-Z0-9_]{0,30}[a-zA-Z0-9])$
    ConstraintDescription:
      en: The account name can contain letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. The name can be up to 32 characters in length. For more information, see <a href="https://www.alibabacloud.com/help/en/rds/developer-reference/forbidden-keywords" target="_blank">Forbidden keywords</a>.
      zh-cn: The value can contain lowercase letters, uppercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. The maximum length is 32 characters. For more information about invalid characters, see <a href="https://www.alibabacloud.com/help/zh/rds/developer-reference/forbidden-keywords" target="_blank">Forbidden keywords table</a>.
    Default: db_user
Resources:
  Vpc:
    Type: 'ALIYUN::ECS::VPC'
    Properties:
      CidrBlock: 192.168.0.0/16
      VpcName:
        Fn::Sub: ${CommonName}-VPC_HZ
  VSwitch1:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 192.168.1.0/24
      ZoneId:
        Ref: ZoneId1
      VSwitchName:
        Fn::Sub: ${CommonName}-vsw_001
  VSwitch2:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 192.168.2.0/24
      ZoneId:
        Ref: ZoneId2
      VSwitchName:
        Fn::Sub: ${CommonName}-vsw_002
  Sleep:
    DependsOn:
      - VSwitch1
      - VSwitch2
    Type: ALIYUN::ROS::Sleep
    Properties:
      DeleteDuration: 300
  SecurityGroup:
    Type: 'ALIYUN::ECS::SecurityGroup'
    Properties:
      VpcId:
        Ref: Vpc
      SecurityGroupName:
        Fn::Sub: ${CommonName}-SecurityGroup_1
      SecurityGroupIngress:
        - PortRange: 80/80
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 3000/3000
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 5001/5001
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 5002/5002
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 5003/5003
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 8080/8080
          Priority: 1
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
  EcsInstance:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      VpcId:
        Ref: Vpc
      ZoneId:
        Ref: ZoneId1
      VSwitchId:
        Ref: VSwitch1
      SecurityGroupId:
        Ref: SecurityGroup
      ImageId: aliyun_3_x64_20G_alibase_
      InstanceName:
        Fn::Sub: ${CommonName}-ecs
      InstanceType:
        Ref: InstanceType
      SystemDiskCategory: cloud_essd
      MaxAmount: 1
      SystemDiskSize: 40
      InternetMaxBandwidthOut: 5
      Password:
        Ref: InstancePassword
  RunCommand:
    Type: ALIYUN::ECS::RunCommand
    Properties:
      CommandContent:
        Fn::Sub:
          |
          #!/bin/sh
          echo "sk-$(openssl rand -hex 16)"
      Type: RunShellScript
      InstanceIds:
        - Ref: EcsInstance
  RunCommand2:
    DependsOn:
      - RunCommand
    Type: ALIYUN::ECS::RunCommand
    Properties:
      CommandContent:
        Fn::Sub:
          |
          #!/bin/sh
          export ROS_DEPLOY=true
          curl -fsSL https://help-static-aliyun-doc.aliyuncs.com/install-script/dify/sae/install.sh | bash
      Type: RunShellScript
      InstanceIds:
        - Ref: EcsInstance
  RedisInstance:
    Type: ALIYUN::REDIS::Instance
    Properties:
      ZoneId:
        Ref: ZoneId1
      SecondaryZoneId:
        Ref: ZoneId2
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch1
      InstanceClass: redis.shard.large.y.ee
      EvictionPolicy: noeviction
      InstanceName:
        Fn::Sub: ${CommonName}-Redis
      EngineVersion: '7.0'
      Password:
        Ref: RedisInstancePassword
  REDISWhitelist:
    Type: ALIYUN::REDIS::Whitelist
    Properties:
      InstanceId:
        Ref: RedisInstance
      SecurityIps: 192.168.0.0/16
  ADBPGInstance:
    Type: ALIYUN::GPDB::DBInstance
    Properties:
      EngineVersion: '7.0'
      VectorConfigurationStatus: True
      InstanceSpec: 4C32G
      ZoneId:
        Ref: ZoneId1
      VSwitchId:
        Ref: VSwitch1
      SegNodeNum: 4
      SegStorageType: cloud_essd
      SegDiskPerformanceLevel: pl1
      StorageSize: 50
      VPCId:
        Ref: Vpc
      SecurityIPList: 192.168.0.0/16
      DBInstanceDescription:
        Fn::Sub: ${CommonName}
      PayType: Postpaid
      DBInstanceCategory: HighAvailability
      DBInstanceMode: StorageElastic
      ProdType: standard
  GPDBAccount:
    Type: ALIYUN::GPDB::Account
    Properties:
      DBInstanceId:
        Fn::GetAtt:
          - ADBPGInstance
          - DBInstanceId
      AccountPassword:
        Ref: ADBPGPassword
      AccountName:
        Ref: ADBPGAccount
  SaeNamespace:
    DependsOn:
      - PostgreSQLInstance
      - RedisInstance
      - ADBPGInstance
      - PluginNas
      - APINas
    Type: ALIYUN::SAE::Namespace
    Properties:
      NamespaceName:
        Ref: NamespaceName
      NamespaceId:
        Fn::Sub: ${ALIYUN::Region}:${NamespaceName}
      VpcId:
        Ref: Vpc
  PostgreSQLInstance:
    Type: ALIYUN::RDS::DBInstance
    Properties:
      ZoneId:
        Ref: ZoneId1
      SlaveZoneIds:
        - Ref: ZoneId2
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch1
      DBInstanceClass:
        Ref: DBInstanceClass
      DBInstanceStorage: 50
      Engine: PostgreSQL
      EngineVersion: '17.0'
      SecurityIPList: 192.168.0.0/16
      Category: HighAvailability
      MasterUserType: Super
      MasterUserPassword:
        Ref: PostgresSQLPassword
      MasterUsername:
        Ref: PostgresSQLUserName
      DBInstanceStorageType: cloud_essd
  DifyDataBase:
    Type: ALIYUN::RDS::Database
    Properties:
      CharacterSetName: utf8
      DBInstanceId:
        Fn::GetAtt:
          - PostgreSQLInstance
          - DBInstanceId
      DBName: dify
  DifySetUpDataBase:
    Type: ALIYUN::RDS::Database
    DependsOn: DifyDataBase
    Properties:
      CharacterSetName: UTF8
      DBInstanceId:
        Fn::GetAtt:
          - PostgreSQLInstance
          - DBInstanceId
      DBName: dify_setups
  RdsAccountPrivilege:
    Type: ALIYUN::RDS::AccountPrivilege
    DependsOn: DifySetUpDataBase
    Properties:
      AccountPrivilege: DBOwner
      DBInstanceId:
        Ref: PostgreSQLInstance
      DBName: dify
      AccountName:
        Ref: PostgresSQLUserName
  NatGateway:
    Type: ALIYUN::VPC::NatGateway
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch1
      NatGatewayName:
        Fn::Sub: ${CommonName}-nat
      InternetChargeType: PayByLcu
      EipBindMode: NAT
  Eip:
    Type: 'ALIYUN::VPC::EIP'
    Properties:
      DeletionProtection: false
      Isp: BGP
      Bandwidth: 200
      InternetChargeType: PayByTraffic
  EipAssociation:
    Type: 'ALIYUN::VPC::EIPAssociation'
    Properties:
      InstanceId:
        Ref: NatGateway
      AllocationId:
        Ref: Eip
  SNat:
    Type: 'ALIYUN::VPC::SnatEntry'
    DependsOn: EipAssociation
    Properties:
      SnatTableId:
        Fn::GetAtt:
          - NatGateway
          - SNatTableId
      SnatEntryName:
        Fn::Sub: ${CommonName}-snat
      SourceVSwitchIds:
        - Ref: VSwitch1
        - Ref: VSwitch2
      SnatIp:
        Fn::GetAtt:
          - Eip
          - EipAddress
  APINas:
    Type: ALIYUN::NAS::FileSystem
    Properties:
      ProtocolType: NFS
      FileSystemType: standard
      DeletionForce: true
      StorageType: Performance
      Description:
        Fn::Sub: ${CommonName}-API-NAS
  APINasMountTarget:
    Type: ALIYUN::NAS::MountTarget
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch1
      NetworkType: Vpc
      AccessGroupName: DEFAULT_VPC_GROUP_NAME
      FileSystemId:
        Ref: APINas
  PluginNas:
    Type: ALIYUN::NAS::FileSystem
    Properties:
      ProtocolType: NFS
      FileSystemType: standard
      DeletionForce: true
      StorageType: Performance
      Description:
        Fn::Sub: ${CommonName}-Plugin-NAS
  PluginNasMountTarget:
    Type: ALIYUN::NAS::MountTarget
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch1
      NetworkType: Vpc
      AccessGroupName: DEFAULT_VPC_GROUP_NAME
      FileSystemId:
        Ref: PluginNas
  SuperOpsUser:
    Type: 'ALIYUN::RAM::User'
    Properties:
      UserName:
        Fn::Sub: SuperOps-${ALIYUN::StackId}
      Policies:
        - PolicyName:
            'Fn::Join':
              - '-'
              - - DifySuperOpsPolicy
                - Ref: 'ALIYUN::StackName'
          PolicyDocument:
            Version: '1'
            Statement:
              - Effect: Allow
                Action:
                  - 'gpdb:*'
                Resource:
                  - '*'
      PolicyAttachments:
        System:
          - AliyunSTSAssumeRoleAccess
          - AliyunRAMReadOnlyAccess
  AccessKey:
    Type: 'ALIYUN::RAM::AccessKey'
    Properties:
      UserName:
        'Fn::GetAtt':
          - SuperOpsUser
          - UserName
  DifyApiConfigMap:
    Type: ALIYUN::SAE::ConfigMap
    Properties:
      Data:
        MAIL_DEFAULT_SEND_FROM: 'YOUR EMAIL FROM (eg: no-reply <no-reply@dify.ai>)'
        SENTRY_PROFILES_SAMPLE_RATE: '1'
        MARKETPLACE_ENABLED: 'true'
        DB_PORT: '5432'
        VECTOR_STORE: analyticdb
        LOG_LEVEL: INFO
        DB_DATABASE: dify
        REDIS_USE_SSL: 'false'
        STORAGE_LOCAL_PATH: /app/api/storage
        SENTRY_TRACES_SAMPLE_RATE: '1'
        MODE: api
        WEB_API_CORS_ALLOW_ORIGINS: '*'
        RESEND_API_URL: https://api.resend.com
        ANALYTICDB_INSTANCE_ID:
          Fn::GetAtt:
            - ADBPGInstance
            - DBInstanceId
        CODE_EXECUTION_ENDPOINT: http://dify-sandbox:8194
        REDIS_HOST:
          Fn::GetAtt:
            - RedisInstance
            - ConnectionDomain
        REDIS_DB: '0'
        REDIS_PORT: '6379'
        MAIL_TYPE: resend
        ANALYTICDB_REGION_ID:
          Ref: ALIYUN::Region
        MIGRATION_ENABLED: 'true'
        CONSOLE_CORS_ALLOW_ORIGINS: '*'
        PLUGIN_DAEMON_URL: http://dify-plugin-daemon:5002
        STORAGE_TYPE: local
        DB_HOST:
          Fn::GetAtt:
            - PostgreSQLInstance
            - InnerConnectionString
      NamespaceId:
        Ref: SaeNamespace
      Name: dify-api
  DifyApiSecret:
    Type: 'ALIYUN::SAE::Secret'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      SecretName: dify-api
      SecretType: Opaque
      SecretData:
        ANALYTICDB_ACCOUNT:
          Ref: ADBPGAccount
        ANALYTICDB_KEY_ID:
          Fn::GetAtt:
            - AccessKey
            - AccessKeyId
        ANALYTICDB_KEY_SECRET:
          Fn::GetAtt:
            - AccessKey
            - AccessKeySecret
        ANALYTICDB_NAMESPACE: difyns
        ANALYTICDB_NAMESPACE_PASSWORD:
          Ref: ADBPGPassword
        ANALYTICDB_PASSWORD:
          Ref: ADBPGPassword
        CELERY_BROKER_URL:
          Fn::Sub:
            - redis://:${REDIS_PASSWORD}@${REDIS_HOST}:6379/0
            - REDIS_PASSWORD:
                Ref: RedisInstancePassword
              REDIS_HOST:
                Fn::GetAtt:
                  - RedisInstance
                  - ConnectionDomain
        CODE_EXECUTION_API_KEY: dify-sandbox
        DB_PASSWORD:
          Ref: PostgresSQLPassword
        DB_USERNAME:
          Ref: PostgresSQLUserName
        INNER_API_KEY_FOR_PLUGIN: QaHbTe77CtuXmsfyhR7+vRjI/+XbV1AaFy691iy+kGDv2Jvy0/eAh8Y1
        PLUGIN_DAEMON_KEY: lYkiYYT6owG+71oLerGzA7GXCgOT++6ovaezWAjpCjf+Sjc3ZtU+qUEi
        REDIS_PASSWORD:
          Ref: RedisInstancePassword
        REDIS_USERNAME: default
        RESEND_API_KEY: xxxx
        SECRET_KEY:
          !Base64Decode
          Fn::Jq:
            - First
            - .[0].Output
            - Fn::GetAtt:
                - RunCommand
                - InvokeResults
  DifyWorkerConfigMap:
    Type: ALIYUN::SAE::ConfigMap
    Properties:
      Data:
        MAIL_DEFAULT_SEND_FROM: 'YOUR EMAIL FROM (eg: no-reply <no-reply@dify.ai>)'
        SENTRY_PROFILES_SAMPLE_RATE: '1'
        MARKETPLACE_ENABLED: 'true'
        DB_PORT: '5432'
        VECTOR_STORE: analyticdb
        LOG_LEVEL: INFO
        DB_DATABASE: dify
        REDIS_USE_SSL: 'false'
        STORAGE_LOCAL_PATH: /app/api/storage
        SENTRY_TRACES_SAMPLE_RATE: '1'
        MODE: worker
        WEB_API_CORS_ALLOW_ORIGINS: '*'
        RESEND_API_URL: https://api.resend.com
        ANALYTICDB_INSTANCE_ID:
          Fn::GetAtt:
            - ADBPGInstance
            - DBInstanceId
        REDIS_HOST:
          Fn::GetAtt:
            - RedisInstance
            - ConnectionDomain
        REDIS_DB: '0'
        REDIS_PORT: '6379'
        MAIL_TYPE: resend
        ANALYTICDB_REGION_ID:
          Ref: ALIYUN::Region
        MIGRATION_ENABLED: 'true'
        CONSOLE_CORS_ALLOW_ORIGINS: '*'
        PLUGIN_DAEMON_URL: http://dify-plugin-daemon:5002
        STORAGE_TYPE: local
        DB_HOST:
          Fn::GetAtt:
            - PostgreSQLInstance
            - InnerConnectionString
      NamespaceId:
        Ref: SaeNamespace
      Name: dify-worker

  DifyWorkerSecret:
    Type: 'ALIYUN::SAE::Secret'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      SecretName: dify-worker
      SecretType: Opaque
      SecretData:
        ANALYTICDB_ACCOUNT:
          Ref: ADBPGAccount
        ANALYTICDB_KEY_ID:
          Fn::GetAtt:
            - AccessKey
            - AccessKeyId
        ANALYTICDB_KEY_SECRET:
          Fn::GetAtt:
            - AccessKey
            - AccessKeySecret
        ANALYTICDB_NAMESPACE: difyns
        ANALYTICDB_NAMESPACE_PASSWORD:
          Ref: ADBPGPassword
        ANALYTICDB_PASSWORD:
          Ref: ADBPGPassword
        CELERY_BROKER_URL:
          Fn::Sub:
            - redis://:${REDIS_PASSWORD}@${REDIS_HOST}:6379/0
            - REDIS_PASSWORD:
                Ref: RedisInstancePassword
              REDIS_HOST:
                Fn::GetAtt:
                  - RedisInstance
                  - ConnectionDomain
        DB_PASSWORD:
          Ref: PostgresSQLPassword
        DB_USERNAME:
          Ref: PostgresSQLUserName
        INNER_API_KEY_FOR_PLUGIN: QaHbTe77CtuXmsfyhR7+vRjI/+XbV1AaFy691iy+kGDv2Jvy0/eAh8Y1
        PLUGIN_DAEMON_KEY: lYkiYYT6owG+71oLerGzA7GXCgOT++6ovaezWAjpCjf+Sjc3ZtU+qUEi
        REDIS_PASSWORD:
          Ref: RedisInstancePassword
        REDIS_USERNAME: default
        RESEND_API_KEY: xxxx
        SECRET_KEY:
          !Base64Decode
          Fn::Jq:
            - First
            - .[0].Output
            - Fn::GetAtt:
                - RunCommand
                - InvokeResults
  DifyPluginDaemonConfigMap:
    Type: 'ALIYUN::SAE::ConfigMap'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      Name: dify-plugin-daemon
      Data:
        SERVER_PORT: "5002"
        PLUGIN_REMOTE_INSTALLING_HOST: "0.0.0.0"
        REDIS_DB: "0"
        REDIS_HOST:
          Fn::GetAtt:
            - RedisInstance
            - ConnectionDomain
        MARKETPLACE_ENABLED: "true"
        DB_PORT: "5432"
        REDIS_USE_SSL: "false"
        PLUGIN_WORKING_PATH: /app/storage/cwd
        DB_HOST:
          Fn::GetAtt:
            - PostgreSQLInstance
            - InnerConnectionString
        PIP_MIRROR_URL: http://mirrors.aliyun.com/pypi/simple/
        REDIS_PORT: "6379"
        PLUGIN_REMOTE_INSTALLING_PORT: "5003"
        MAX_PLUGIN_PACKAGE_SIZE: "52428800"
        DB_DATABASE: dify_plugin
        DIFY_INNER_API_URL: http://dify-api:5001
  DifyPluginDaemonSecret:
    Type: 'ALIYUN::SAE::Secret'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      SecretName: dify-plugin-daemon
      SecretType: Opaque
      SecretData:
        DB_PASSWORD:
          Ref: PostgresSQLPassword
        DB_USERNAME:
          Ref: PostgresSQLUserName
        DIFY_INNER_API_KEY: QaHbTe77CtuXmsfyhR7+vRjI/+XbV1AaFy691iy+kGDv2Jvy0/eAh8Y1
        REDIS_PASSWORD:
          Ref: RedisInstancePassword
        REDIS_USERNAME: default
        SERVER_KEY: lYkiYYT6owG+71oLerGzA7GXCgOT++6ovaezWAjpCjf+Sjc3ZtU+qUEi
  DifySandboxConfigMap:
    Type: 'ALIYUN::SAE::ConfigMap'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      Name: dify-sandbox
      Data:
        GIN_MODE: release
        SANDBOX_PORT: "8194"
  DifySandboxSecret:
    Type: 'ALIYUN::SAE::Secret'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      SecretName: dify-sandbox
      SecretType: Opaque
      SecretData:
        API_KEY: dify-sandbox
  DifyWebConfigMap:
    Type: 'ALIYUN::SAE::ConfigMap'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      Name: dify-web
      Data:
        MARKETPLACE_ENABLED: "true"
        MARKETPLACE_URL: https://marketplace.dify.ai
        MARKETPLACE_API_URL: https://marketplace.dify.ai
  DifyNginxConfigMap:
    Type: 'ALIYUN::SAE::ConfigMap'
    Properties:
      NamespaceId:
        Ref: SaeNamespace
      Name: dify-nginx
      Data:
        default.conf: |-
          server {
                  listen 80;
                  server_name _;

                  location /console/api {
                    proxy_pass http://dify-api:5001;
                    include proxy.conf;
                  }

                  location /api {
                    proxy_pass http://dify-api:5001;
                    include proxy.conf;
                  }

                  location /v1 {
                    proxy_pass http://dify-api:5001;
                    include proxy.conf;
                  }

                  location /files {
                    proxy_pass http://dify-api:5001;
                    include proxy.conf;
                  }

                  location /explore {
                    proxy_pass http://dify-web:3000;
                    proxy_set_header Dify-Hook-Url $scheme://$host$request_uri;
                    include proxy.conf;
                  }

                  location /e/ {
                    proxy_pass http://dify-plugin-daemon:5002;
                    proxy_set_header Dify-Hook-Url $scheme://$host$request_uri;
                    include proxy.conf;
                  }

                  location / {
                    proxy_pass http://dify-web:3000;
                    include proxy.conf;
                  }
              }
        nginx.conf: |-
          user  nginx;
              worker_processes  auto;
              pid        /var/run/nginx.pid;


              events {
                  worker_connections  1024;
              }


              http {
                  include       /etc/nginx/mime.types;
                  default_type  application/octet-stream;

                  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                                    '$status $body_bytes_sent "$http_referer" '
                                    '"$http_user_agent" "$http_x_forwarded_for"';

                  sendfile        on;
                  #tcp_nopush     on;

                  keepalive_timeout  65;

                  #gzip  on;
                  client_max_body_size 15M;

                  include /etc/nginx/conf.d/*.conf;
              }
        proxy.conf: |-
          proxy_set_header Host $host;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_set_header X-Forwarded-Port $server_port;
          proxy_http_version 1.1;
          proxy_set_header Connection "";
          proxy_buffering off;
          proxy_read_timeout 3600s;
          proxy_send_timeout 3600s;
  DifyApiApp:
    DependsOn:
      - SaeNamespace
      - DifyApiConfigMap
      - DifyApiSecret
      - ADBPGInstance
    Type: 'ALIYUN::SAE::Application'
    Properties:
      AppName: dify-api
      SaeVersion: v2
      AutoConfig: false
      VpcId:
        Ref: Vpc
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Fn::Sub:
          - '${VSwitch1},${VSwitch2}'
          - VSwitch1:
              Ref: VSwitch1
            VSwitch2:
              Ref: VSwitch2
      Replicas: 1
      NamespaceId:
        Ref: SaeNamespace
      Cpu: 1000
      Memory: 2048
      PackageType: Image
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-api-v1.6.0
      ProgrammingLanguage: python
      AppSource: micro_service
      Timezone: Asia/Shanghai
      NasConfigs:
        Fn::Sub:
          - '[{"mountDomain":"${MOUNT_DOMAIN}","mountPath":"/app/api/storage","nasId":"${NAS_ID}","nasPath":"dify-api","readOnly":false,"volumeName":"nas-1"}]'
          - MOUNT_DOMAIN:
              Fn::GetAtt:
                - APINasMountTarget
                - MountTargetDomain
            NAS_ID:
              Fn::GetAtt:
                - APINas
                - FileSystemId
      PvtzDiscoverySvc:
        Fn::Sub:
          - '{"enable":"true","namespaceId":"${REGION_ID}:${NAMESPACE}","portAndProtocol":{"5001:TCP":"5001"},"portProtocols":[],"pvtzDiscoveryName":"${REGION_ID}-${USER_ID}","serviceName":"dify-api.${NAMESPACE}"}'
          - NAMESPACE:
              Ref: NamespaceName
            USER_ID:
              Ref: ALIYUN::TenantId
            REGION_ID:
              Ref: ALIYUN::Region
      Envs:
        Fn::Sub:
          - '[{"name":"APP_WEB_URL"},{"name":"FILES_URL"},{"name":"CODE_MAX_DEPTH","value":"5"},{"name":"CODE_MAX_OBJECT_ARRAY_LENGTH","value":"30"},{"name":"CHECK_UPDATE_URL"},{"name":"CODE_MAX_STRING_ARRAY_LENGTH","value":"30"},{"name":"SERVICE_API_URL"},{"name":"sae-sys-secret-all-dify-api","valueFrom":{"secretRef":{"secretId":${SECRET_ID},"key":""}}},{"name":"CODE_MAX_PRECISION","value":"20"},{"name":"CONSOLE_API_URL"},{"name":"TEMPLATE_TRANSFORM_MAX_LENGTH","value":"80000"},{"name":"CODE_MAX_NUMBER","value":"9223372036854775807"},{"name":"CODE_MAX_NUMBER_ARRAY_LENGTH","value":"1000"},{"name":"CONSOLE_WEB_URL"},{"name":"CODE_MIN_NUMBER","value":"-9223372036854775808"},{"name":"CODE_MAX_STRING_LENGTH","value":"80000"},{"name":"SENTRY_DSN"},{"name":"CODE_EXECUTION_API_KEY","valueFrom":{"secretRef":{"secretId":${SANDBOX_SECRET_ID},"key":"API_KEY"}}},{"name":"sae-sys-configmap-all-dify-api","valueFrom":{"configMapRef":{"configMapId":${CONFIGMAP_ID},"key":""}}}]'
          - CONFIGMAP_ID:
              Fn::GetAtt:
                - DifyApiConfigMap
                - ConfigMapId
            SECRET_ID:
              Fn::GetAtt:
                - DifyApiSecret
                - SecretId
            SANDBOX_SECRET_ID:
              Fn::GetAtt:
                - DifySandboxSecret
                - SecretId
  DifyWorkerApp:
    DependsOn:
      - SaeNamespace
      - DifyWorkerConfigMap
      - DifyWorkerSecret
    Type: 'ALIYUN::SAE::Application'
    Properties:
      AppName: dify-worker
      SaeVersion: v2
      AutoConfig: false
      VpcId:
        Ref: Vpc
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Fn::Sub:
          - '${VSwitch1},${VSwitch2}'
          - VSwitch1:
              Ref: VSwitch1
            VSwitch2:
              Ref: VSwitch2
      Replicas: 1
      NamespaceId:
        Ref: SaeNamespace
      Cpu: 1000
      Memory: 2048
      PackageType: Image
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-api-v1.6.0
      ProgrammingLanguage: python
      AppSource: micro_service
      Timezone: Asia/Shanghai
      NasConfigs:
        Fn::Sub:
          - '[{"mountDomain":"${MOUNT_DOMAIN}","mountPath":"/app/api/storage","nasId":"${NAS_ID}","nasPath":"dify-api","readOnly":false,"volumeName":"nas-1"}]'
          - MOUNT_DOMAIN:
              Fn::GetAtt:
                - APINasMountTarget
                - MountTargetDomain
            NAS_ID:
              Fn::GetAtt:
                - APINas
                - FileSystemId
      Envs:
        Fn::Sub:
          - '[{"name":"sae-sys-secret-all-dify-worker","valueFrom":{"secretRef":{"secretId":${SECRET_ID},"key":""}}},{"name":"sae-sys-configmap-all-dify-worker","valueFrom":{"configMapRef":{"configMapId":${CONFIGMAP_ID},"key":""}}},{"name":"CONSOLE_WEB_URL"}]'
          - CONFIGMAP_ID:
              Fn::GetAtt:
                - DifyWorkerConfigMap
                - ConfigMapId
            SECRET_ID:
              Fn::GetAtt:
                - DifyWorkerSecret
                - SecretId
  DifyPluginDaemonApp:
    DependsOn:
      - SaeNamespace
      - DifyPluginDaemonConfigMap
      - DifyPluginDaemonSecret
    Type: 'ALIYUN::SAE::Application'
    Properties:
      AppName: dify-plugin-daemon
      SaeVersion: v2
      AutoConfig: false
      VpcId:
        Ref: Vpc
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Fn::Sub:
          - '${VSwitch1},${VSwitch2}'
          - VSwitch1:
              Ref: VSwitch1
            VSwitch2:
              Ref: VSwitch2
      Replicas: 1
      NamespaceId:
        Ref: SaeNamespace
      Cpu: 1000
      Memory: 2048
      PackageType: Image
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-plugin-daemon-v0.1.3-local
      ProgrammingLanguage: golang
      AppSource: micro_service
      Timezone: Asia/Shanghai
      NasConfigs:
        Fn::Sub:
          - '[{"mountDomain":"${MOUNT_DOMAIN}","mountPath":"/app/storage","nasId":"${NAS_ID}","nasPath":"dify-plugin-daemon","readOnly":false,"volumeName":"nas-1"}]'
          - MOUNT_DOMAIN:
              Fn::GetAtt:
                - PluginNasMountTarget
                - MountTargetDomain
            NAS_ID:
              Fn::GetAtt:
                - PluginNas
                - FileSystemId
      PvtzDiscoverySvc:
        Fn::Sub:
          - '{"enable":"true","namespaceId":"${REGION_ID}:${NAMESPACE}","portAndProtocol":{"5003:TCP":"5003","5002:TCP":"5002"},"portProtocols":[],"pvtzDiscoveryName":"${REGION_ID}-${USER_ID}","serviceName":"dify-plugin-daemon.${NAMESPACE}"}'
          - NAMESPACE:
              Ref: NamespaceName
            USER_ID:
              Ref: ALIYUN::TenantId
            REGION_ID:
              Ref: ALIYUN::Region
      Envs:
        Fn::Sub:
          - '[{"name":"sae-sys-secret-all-dify-plugin-daemon","valueFrom":{"secretRef":{"secretId":${SECRET_ID},"key":""}}},{"name":"sae-sys-configmap-all-dify-plugin-daemon","valueFrom":{"configMapRef":{"configMapId":${CONFIGMAP_ID},"key":""}}}]'
          - CONFIGMAP_ID:
              Fn::GetAtt:
                - DifyPluginDaemonConfigMap
                - ConfigMapId
            SECRET_ID:
              Fn::GetAtt:
                - DifyPluginDaemonSecret
                - SecretId
  DifySandboxApp:
    DependsOn:
      - SaeNamespace
      - DifySandboxConfigMap
      - DifySandboxSecret
    Type: 'ALIYUN::SAE::Application'
    Properties:
      AppName: dify-sandbox
      SaeVersion: v2
      AutoConfig: false
      VpcId:
        Ref: Vpc
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Fn::Sub:
          - '${VSwitch1},${VSwitch2}'
          - VSwitch1:
              Ref: VSwitch1
            VSwitch2:
              Ref: VSwitch2
      Replicas: 1
      NamespaceId:
        Ref: SaeNamespace
      Cpu: 1000
      Memory: 2048
      PackageType: Image
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-sandbox-v0.2.12
      ProgrammingLanguage: golang
      AppSource: micro_service
      Timezone: Asia/Shanghai
      PvtzDiscoverySvc:
        Fn::Sub:
          - '{"enable":"true","namespaceId":"${REGION_ID}:${NAMESPACE}","portAndProtocol":{"8194:TCP":"8194"},"portProtocols":[],"pvtzDiscoveryName":"${REGION_ID}-${USER_ID}","serviceName":"dify-sandbox.${NAMESPACE}"}'
          - NAMESPACE:
              Ref: NamespaceName
            USER_ID:
              Ref: ALIYUN::TenantId
            REGION_ID:
              Ref: ALIYUN::Region
      Envs:
        Fn::Sub:
          - '[{"name":"sae-sys-secret-all-dify-sandbox","valueFrom":{"secretRef":{"secretId":${SECRET_ID},"key":""}}},{"name":"WORKER_TIMEOUT","value":"15"},{"name":"sae-sys-configmap-all-dify-sandbox","valueFrom":{"configMapRef":{"configMapId":${CONFIGMAP_ID},"key":""}}}]'
          - CONFIGMAP_ID:
              Fn::GetAtt:
                - DifySandboxConfigMap
                - ConfigMapId
            SECRET_ID:
              Fn::GetAtt:
                - DifySandboxSecret
                - SecretId
  DifyWebApp:
    DependsOn:
      - SaeNamespace
      - DifyWebConfigMap
    Type: 'ALIYUN::SAE::Application'
    Properties:
      AppName: dify-web
      SaeVersion: v2
      AutoConfig: false
      VpcId:
        Ref: Vpc
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Fn::Sub:
          - '${VSwitch1},${VSwitch2}'
          - VSwitch1:
              Ref: VSwitch1
            VSwitch2:
              Ref: VSwitch2
      Replicas: 1
      NamespaceId:
        Ref: SaeNamespace
      Cpu: 1000
      Memory: 2048
      PackageType: Image
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-web-v1.6.0
      ProgrammingLanguage: other
      AppSource: micro_service
      Timezone: Asia/Shanghai
      PvtzDiscoverySvc:
        Fn::Sub:
          - '{"enable":"true","namespaceId":"${REGION_ID}:${NAMESPACE}","portAndProtocol":{"3000:TCP":"3000"},"portProtocols":[],"pvtzDiscoveryName":"${REGION_ID}-${USER_ID}","serviceName":"dify-web.${NAMESPACE}"}'
          - NAMESPACE:
              Ref: NamespaceName
            USER_ID:
              Ref: ALIYUN::TenantId
            REGION_ID:
              Ref: ALIYUN::Region
      Envs:
        Fn::Sub:
          - '[{"name":"sae-sys-configmap-all-dify-web","valueFrom":{"configMapRef":{"configMapId":${CONFIGMAP_ID},"key":""}}},{"name":"APP_API_URL"},{"name":"CONSOLE_API_URL"},{"name":"EDITION","value":"SELF_HOSTED"}]'
          - CONFIGMAP_ID:
              Fn::GetAtt:
                - DifyWebConfigMap
                - ConfigMapId
  DifyNginxApp:
    DependsOn:
      - SaeNamespace
      - DifyNginxConfigMap
    Type: 'ALIYUN::SAE::Application'
    Properties:
      AppName: dify-nginx
      SaeVersion: v2
      AutoConfig: false
      VpcId:
        Ref: Vpc
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Fn::Sub:
          - '${VSwitch1},${VSwitch2}'
          - VSwitch1:
              Ref: VSwitch1
            VSwitch2:
              Ref: VSwitch2
      Replicas: 1
      NamespaceId:
        Ref: SaeNamespace
      Cpu: 1000
      Memory: 2048
      PackageType: Image
      ImageUrl:
        Fn::Sub: registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:nginx-v1.23.4
      ProgrammingLanguage: other
      AppSource: micro_service
      Timezone: Asia/Shanghai
      ConfigMapMountDesc:
        Fn::Sub:
          - '[{"MountPath":"/etc/nginx/conf.d/default.conf","ConfigMapId":${CONFIGMAP_ID},"ConfigMapName":"dify-nginx","Key":"default.conf"},{"MountPath":"/etc/nginx/nginx.conf","ConfigMapId":${CONFIGMAP_ID},"ConfigMapName":"dify-nginx","Key":"nginx.conf"},{"MountPath":"/etc/nginx/proxy.conf","ConfigMapId":${CONFIGMAP_ID},"ConfigMapName":"dify-nginx","Key":"proxy.conf"}]'
          - CONFIGMAP_ID:
              Fn::GetAtt:
                - DifyNginxConfigMap
                - ConfigMapId
  InternetClb:
    Type: ALIYUN::SLB::LoadBalancer
    Properties:
      LoadBalancerName:
        Ref: ALIYUN::StackName
      LoadBalancerSpec: slb.s2.medium
      AddressType: internet
  BackendAppBindClb:
    Type: 'ALIYUN::SAE::SlbBinding'
    DependsOn:
      - DifyNginxApp
      - InternetClb
    Properties:
      InternetSlbId:
        Fn::GetAtt:
          - InternetClb
          - LoadBalancerId
      Internet: '[{"port": 80, "targetPort": 80, "protocol": "TCP"}]'
      AppId:
        Fn::GetAtt:
          - DifyNginxApp
          - AppId
Outputs:
  DifyAddress:
    Label:
      zh-cn: Dify service address.
      en: Dify service address
    Description:
      zh-cn: Dify service address.
      en: The service address of the Dify platform.
    Value:
      Fn::Sub:
        - http://${ServerAddress}:80
        - ServerAddress:
            Fn::GetAtt:
              - InternetClb
              - IpAddress
  PostgresName:
    Label:
      zh-cn: Postgres username
      en: Postgres username
    Description:
      zh-cn: The username of AnalyticDB for PostgreSQL.
      en: The username for the AnalyticDB for PostgreSQL database.
    Value:
      Ref: ADBPGAccount
  PostgresPassword:
    Label:
      zh-cn: Postgres password
      en: Postgres password
    Description:
      zh-cn: The password of AnalyticDB for PostgreSQL.
      en: The password for the AnalyticDB for PostgreSQL database.
    NoEcho: true
    Value:
      Ref: ADBPGPassword
  PostgresConnectionString:
    Label:
      zh-cn: Postgres database address
      en: Postgres database address
    Description:
      zh-cn: The internal endpoint of AnalyticDB for PostgreSQL.
      en: The internal endpoint of the AnalyticDB for PostgreSQL database.
    Value:
      Fn::GetAtt:
        - ADBPGInstance
        - ConnectionString
  APINasFileSystemId:
    Label:
      zh-cn: API NAS file system
      en: API NAS file system
    Description:
      zh-cn: The NAS file system.
      en: The ID of the NAS file system for the API.
    Value:
      Ref: APINas
  APINasMountTarget:
    Label:
      zh-cn: API NAS mount target
      en: API NAS mount target
    Description:
      zh-cn: The NAS mount target.
      en: The mount target of the NAS file system for the API.
    Value:
      Ref: APINasMountTarget
  PluginNasFileSystemId:
    Label:
      zh-cn: Plugin NAS file system
      en: Plugin NAS file system
    Description:
      zh-cn: The NAS file system.
      en: The ID of the NAS file system for plugins.
    Value:
      Ref: PluginNas
  PluginNasMountTarget:
    Label:
      zh-cn: Plugin NAS mount target
      en: Plugin NAS mount target
    Description:
      zh-cn: The NAS mount target.
      en: The mount target of the NAS file system for plugins.
    Value:
      Ref: PluginNasMountTarget
  RedisConnectionString:
    Label:
      zh-cn: Redis connection address
      en: Redis connection address
    Description:
      zh-cn: The Redis connection address.
      en: The connection endpoint of the Redis instance.
    Value:
      Fn::GetAtt:
        - RedisInstance
        - ConnectionDomain
  RedisName:
    Label:
      zh-cn: Redis username
      en: Redis username
    Description:
      zh-cn: The Redis username.
      en: The username for the Redis instance.
    Value: default
  RedisInstancePassword:
    Label:
      zh-cn: Redis password
      en: Redis password
    Description:
      zh-cn: The Redis password.
      en: The password for the Redis instance.
    NoEcho: true
    Value:
      Ref: RedisInstancePassword
  PostgreSQLDBName:
    Label:
      zh-cn: Database name
      en: Database name
    Description:
      zh-cn: The database name of ApsaraDB RDS for PostgreSQL.
      en: The database name of the ApsaraDB RDS for PostgreSQL instance.
    Value: dify
  PostgreSQLConnectionString:
    Label:
      zh-cn: RDS database address
      en: RDS database address
    Description:
      zh-cn: The internal endpoint of ApsaraDB RDS for PostgreSQL.
      en: The internal endpoint of the ApsaraDB RDS for PostgreSQL instance.
    Value:
      Fn::GetAtt:
        - PostgreSQLInstance
        - InnerConnectionString
  PostgreSQLAccount:
    Label:
      zh-cn: RDS username
      en: RDS username
    Description:
      zh-cn: The username of ApsaraDB RDS for PostgreSQL.
      en: The username for the ApsaraDB RDS for PostgreSQL instance.
    Value:
      Ref: PostgresSQLUserName
  PostgreSQLPassword:
    Label:
      zh-cn: RDS password
      en: RDS password
    Description:
      zh-cn: The password of ApsaraDB RDS for PostgreSQL.
      en: The password for the ApsaraDB RDS for PostgreSQL instance.
    NoEcho: true
    Value:
      Ref: PostgresSQLPassword
  NameSpace:
    Label:
      zh-cn: Namespace
      en: Namespace
    Description:
      zh-cn: The namespace.
      en: The ID of the SAE namespace.
    Value:
      Fn::Sub: ${ALIYUN::Region}:${NamespaceName}
  Vpc:
    Label:
      zh-cn: VPC ID
      en: VPC ID
    Description:
      zh-cn: The VPC ID.
      en: The ID of the VPC.
    Value:
      Ref: Vpc
  Vsw:
    Label:
      zh-cn: vSwitch ID
      en: vSwitch ID
    Description:
      zh-cn: The vSwitch ID.
      en: The ID of the vSwitch.
    Value:
      Ref: VSwitch1
  Sg:
    Label:
      zh-cn: Security group ID
      en: Security group ID
    Description:
        zh-cn: The security group ID.
        en: The ID of the security group.
    Value:
        Ref: SecurityGroup
  SecretKey:
    Label:
      zh-cn: Secret key
      en: Secret key
    Description:
      zh-cn: Used for secure signatures and encrypting sensitive information in the database.
      en: The key used for secure signatures and for encrypting sensitive information in the database.
    NoEcho: true
    Value:
      !Base64Decode
        Fn::Jq:
          - First
          - .[0].Output
          - Fn::GetAtt:
              - RunCommand
              - InvokeResults
  dify-nginx:
    Label:
      zh-cn: Application address of dify-nginx
      en: dify-nginx application address
    Description:
      zh-cn: The application address of dify-nginx. In the application access settings, view the public endpoint based on CLB access.
      en: The address of the dify-nginx application. To view the public endpoint for SLB access, go to the application access settings.
    Value:
      Fn::Sub: https://sae.console.alibabacloud.com/${ALIYUN::Region}/app-list/${DifyNginxApp.AppId}/micro-app/base?name=dify-nginx
  ECSInstanceId:
    Label:
      zh-cn: ECS instance ID
      en: ECS instance ID
    Description:
      zh-cn: The ECS instance ID. This instance deploys the sample e-commerce system.
      en: The ID of the ECS instance. This instance is used to run the installation script.
    Value:
      Fn::Select:
        - 0
        - Fn::GetAtt:
            - EcsInstance
            - InstanceIds
  Console@DemoUrl:
    Description:
      zh-cn: The application access domain name, which is the address of the e-commerce system in this solution.
      en: The public IP address of the ECS instance.
    Value:
      Fn::Sub:
        - http://${PublicIp}
        - PublicIp:
            Fn::Select:
              - 0
              - Fn::GetAtt:
                  - EcsInstance
                  - PublicIps
Metadata:
  'ALIYUN::ROS::Interface':
    Outputs:
      - DifyAddress
      - ECSInstanceId
      - Console@DemoUrl
      - dify-nginx
      - NameSpace
      - Vpc
      - Vsw
      - Sg
      - PostgreSQLDBName
      - PostgreSQLConnectionString
      - PostgreSQLAccount
      - PostgreSQLPassword
      - PostgresName
      - PostgresPassword
      - PostgresConnectionString
      - APINasFileSystemId
      - APINasMountTarget
      - PluginNasFileSystemId
      - PluginNasMountTarget
      - RedisConnectionString
      - RedisName
      - RedisInstancePassword
      - SecretKey
    ParameterGroups:
      - Parameters:
          - ZoneId1
          - ZoneId2
        Label:
          default:
            en: Availability Zone
            zh-cn: Availability zone
      - Parameters:
          - InstanceType
          - InstancePassword
        Label:
          default:
            en: Elastic Compute Service
            zh-cn: Elastic Compute Service
      - Parameters:
          - RedisInstancePassword
        Label:
          default:
            en: ApsaraDB for Redis
            zh-cn: ApsaraDB for Redis
      - Parameters:
          - ADBPGAccount
          - ADBPGPassword
        Label:
          default:
            en: AnalyticDB for PostgreSQL
            zh-cn: AnalyticDB for PostgreSQL
      - Parameters:
          - DBInstanceClass
          - RdsDatabaseName
          - PostgresSQLUserName
          - PostgresSQLPassword
        Label:
          default:
            en: ApsaraDB RDS for PostgreSQL
            zh-cn: ApsaraDB RDS for PostgreSQL
      - Parameters:
          - NamespaceName
        Label:
          default:
            en: Serverless App Engine
            zh-cn: Serverless App Engine
    TemplateTags:
      - acs:technical-solution:internet-application-development:Deploy a production-ready Dify platform using Serverless App Engine-tech_solu_251
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Deploy the production environment Dify platform through Serverless App Engine.",
    "en": "Deploy a production-ready Dify platform using Serverless App Engine (SAE)."
  },
  "Parameters": {
    "CommonName": {
      "Type": "String",
      "Default": "Dify"
    },
    "NamespaceName": {
      "Type": "String",
      "Label": {
        "en": "Namespace name",
        "zh-cn": "Namespace name"
      },
      "Description": {
        "zh-cn": "Namespace name, only lowercase letters and numbers are supported",
        "en": "The name of the namespace. Only lowercase letters and numbers are supported."
      },
      "AllowedPattern": "^[a-z0-9]+$",
      "AssociationProperty": "AutoCompleteInput",
      "AssociationPropertyMetadata": {
        "Length": 3,
        "Prefix": "dify",
        "CharacterClasses": [
          {
            "Class": "lowercase",
            "min": 2
          },
          {
            "Class": "number",
            "min": 1
          }
        ]
      }
    },
    "ZoneId1": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId2"
        ]
      },
      "Label": {
        "en": "Availability Zone 1",
        "zh-cn": "Availability Zone 1"
      }
    },
    "ZoneId2": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId1"
        ]
      },
      "Label": {
        "en": "Availability Zone 2",
        "zh-cn": "Availability Zone 2"
      }
    },
    "InstanceType": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "PostPaid",
        "SystemDiskCategory": "cloud_essd",
        "ZoneId": "${ZoneId1}"
      },
      "Label": {
        "en": "Instance type",
        "zh-cn": "Instance type"
      }
    },
    "ADBPGAccount": {
      "Default": "dify",
      "Type": "String",
      "Label": {
        "zh-cn": "Database account",
        "en": "Database account"
      }
    },
    "ADBPGPassword": {
      "NoEcho": true,
      "Type": "String",
      "Label": {
        "zh-cn": "Database account password",
        "en": "Database account password"
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::AccountPassword"
    },
    "InstancePassword": {
      "Type": "String",
      "Label": {
        "en": "Instance login password",
        "zh-cn": "Logon password"
      },
      "Description": {
        "en": "The login password for the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "zh-cn": "Server logon password. Length: 8 to 30 characters. Must contain at least three of the following types: uppercase letters, lowercase letters, digits, and special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password"
    },
    "RedisInstancePassword": {
      "Type": "String",
      "Label": {
        "en": "Redis instance password",
        "zh-cn": "Instance password"
      },
      "Description": {
        "en": "The password for the Redis instance used by Dify. The password must be 8 to 32 characters in length and contain only uppercase letters, lowercase letters, and digits.",
        "zh-cn": "The Redis password used by Dify must be 8 to 32 characters long and can contain only uppercase letters, lowercase letters, and digits. Do not use other characters."
      },
      "ConstraintDescription": {
        "en": "The password for the Redis instance used by Dify. The password must be 8 to 32 characters in length and contain only uppercase letters, lowercase letters, and digits.",
        "zh-cn": "The Redis password used by Dify must be 8 to 32 characters long and can contain only uppercase letters, lowercase letters, and digits. Do not use other characters."
      },
      "AllowedPattern": "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\\d)[A-Za-z0-9]{8,32}$",
      "MinLength": "8",
      "MaxLength": "32",
      "NoEcho": true
    },
    "DBInstanceClass": {
      "Type": "String",
      "Label": {
        "en": "Instance type",
        "zh-cn": "Instance type"
      },
      "Default": "pg.n4m.2c.2m",
      "Required": true,
      "AssociationProperty": "ALIYUN::RDS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}",
        "EngineVersion": "17.0",
        "Engine": "PostgreSQL",
        "Category": "HighAvailability",
        "InstanceChargeType": "Postpaid",
        "DBInstanceStorageType": "cloud_essd",
        "CommodityCode": "bards"
      }
    },
    "PostgresSQLPassword": {
      "Type": "String",
      "NoEcho": true,
      "Label": {
        "en": "Database account password",
        "zh-cn": "Database account password"
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::AccountPassword"
    },
    "PostgresSQLUserName": {
      "Type": "String",
      "Label": {
        "en": "Database account",
        "zh-cn": "Database account"
      },
      "AllowedPattern": "^(?!dbo\\b|login\\b|admin\\b|administrator\\b|adminsys\\b|alimail\\b|aliyun\\b|apache\\b|appadmin\\b|apsara\\b|aurora\\b|bulkadmin\\b|cangjie\\b|cdn\\b|client\\b|cm\\b|dataengine\\b|dayu\\b|dba\\b|dbcreator\\b|developer\\b|diskadmin\\b|distribution\\b|dns\\b|download\\b|eagleye\\b|f5\\b|faq\\b|fuxi\\b|galaxy\\b|gongcao\\b|gongming\\b|groupon\\b|ha\\b|help\\b|host\\b|hostmaster\\b|houyi\\b|hr\\b|info\\b|information_schema\\b|kuafu\\b|lvs\\b|manager\\b|master\\b|meituan\\b|model\\b|monitor\\b|msdb\\b|mssqld\\b|mssqlsystemresource\\b|mysql\\b|nas\\b|net\\b|netops\\b|netweb\\b|news\\b|no-reply\\b|ntp\\b|nuwa\\b|nvwa\\b|operator\\b|opr\\b|ops\\b|opsdb\\b|oracle\\b|pangu\\b|pe\\b|post\\b|postmaster\\b|processadmin\\b|public\\b|qq\\b|replicator\\b|reply\\b|root\\b|sa\\b|sales\\b|san\\b|security\\b|securityadmin\\b|serveradmin\\b|services\\b|setupadmin\\b|shennong\\b|siteops\\b|sqlengine\\b|sqlonline\\b|squid\\b|ssladmin\\b|support\\b|sys\\b|sysadmin\\b|syslog\\b|system\\b|taoyun\\b|tempdb\\b|test\\b|tianyun\\b|wangwang\\b|eb\\b|webmaster\\b|webnet\\b|xtrabak\\b|youchao\\b|yum\\b|yunti\\b|zhongkui\\b|database\\b|add\\b|except\\b|percent\\b|all\\b|exec\\b|plan\\b|alter\\b|execute\\b|precision\\b|and\\b|exists\\b|primary\\b|any\\b|exit\\b|print\\b|as\\b|fetch\\b|proc\\b|asc\\b|file\\b|procedure\\b|authorization\\b|fillfactor\\b|public\\b|backup\\b|for\\b|raiserror\\b|begin\\b|foreign\\b|read\\b|between\\b|freetext\\b|readtext\\b|break\\b|freetexttable\\b|reconfigure\\b|browse\\b|from\\b|references\\b|bulk\\b|full\\b|replication\\b|by\\b|function\\b|restore\\b|cascade\\b|goto\\b|restrict\\b|case\\b|grant\\b|return\\b|check\\b|group\\b|revoke\\b|checkpoint\\b|having\\b|right\\b|close\\b|holdlock\\b|rollback\\b|clustered\\b|identity\\b|rowcount\\b|coalesce\\b|identity_insert\\b|rowguidcol\\b|collate\\b|identitycol\\b|rule\\b|column\\b|if\\b|save\\b|commit\\b|in\\b|schema\\b|compute\\b|index\\b|select\\b|constraint\\b|inner\\b|session_user\\b|contains\\b|insert\\b|set\\b|containstable\\b|intersect\\b|setuser\\b|continue\\b|into\\b|shutdown\\b|convert\\b|is\\b|some\\b|create\\b|join\\b|statistics\\b|cross\\b|key\\b|system_user\\b|current\\b|kill\\b|table\\b|current_date\\b|left\\b|textsize\\b|current_time\\b|like\\b|then\\b|current_timestamp\\b|lineno\\b|to\\b|current_user\\b|load\\b|top\\b|cursor\\b|national\\b|tran\\b|database\\b|nocheck\\b|transaction\\b|dbcc\\b|nonclustered\\b|trigger\\b|deallocate\\b|not\\b|truncate\\b|declare\\b|null\\b|tsequal\\b|default\\b|nullif\\b|union\\b|delete\\b|of\\b|unique\\b|deny\\b|off\\b|update\\b|desc\\b|offsets\\b|updatetext\\b|disk\\b|on\\b|use\\b|distinct\\b|open\\b|user\\b|distributed\\b|opendatasource\\b|values\\b|double\\b|openquery\\b|varying\\b|drop\\b|openrowset\\b|view\\b|dummy\\b|openxml\\b|waitfor\\b|dump\\b|option\\b|when\\b|else\\b|or\\b|where\\b|end\\b|order\\b|while\\b|errlvl\\b|outer\\b|with\\b|escape\\b|over\\b|writetext\\b|add\\b|analyze\\b|asc\\b|between\\b|blob\\b|call\\b|change\\b|check\\b|condition\\b|continue\\b|cross\\b|current_timestamp\\b|database\\b|day_microsecond\\b|dec\\b|default\\b|desc\\b|distinct\\b|double\\b|each\\b|enclosed\\b|exit\\b|fetch\\b|float8\\b|foreign\\b|goto\\b|having\\b|hour_minute\\b|ignore\\b|infile\\b|insensitive\\b|int1\\b|int4\\b|interval\\b|iterate\\b|keys\\b|leading\\b|like\\b|lines\\b|localtimestamp\\b|longblob\\b|low_priority\\b|mediumint\\b|minute_microsecond\\b|modifies\\b|no_write_to_binlog\\b|on\\b|optionally\\b|out\\b|precision\\b|purge\\b|read\\b|references\\b|rename\\b|require\\b|revoke\\b|schema\\b|select\\b|set\\b|spatial\\b|sqlexception\\b|sql_big_result\\b|ssl\\b|table\\b|tinyblob\\b|to\\b|true\\b|unique\\b|update\\b|using\\b|utc_timestamp\\b|varchar\\b|when\\b|with\\b|xor\\b|all\\b|and\\b|asensitive\\b|bigint\\b|both\\b|cascade\\b|char\\b|collate\\b|connection\\b|convert\\b|current_date\\b|current_user\\b|databases\\b|day_minute\\b|decimal\\b|delayed\\b|describe\\b|distinctrow\\b|drop\\b|else\\b|escaped\\b|explain\\b|float\\b|for\\b|from\\b|grant\\b|high_priority\\b|hour_second\\b|in\\b|inner\\b|insert\\b|int2\\b|int8\\b|into\\b|join\\b|kill\\b|leave\\b|limit\\b|load\\b|lock\\b|longtext\\b|match\\b|mediumtext\\b|minute_second\\b|natural\\b|null\\b|optimize\\b|or\\b|outer\\b|primary\\b|raid0\\b|reads\\b|regexp\\b|repeat\\b|restrict\\b|right\\b|schemas\\b|sensitive\\b|show\\b|specific\\b|sqlstate\\b|sql_calc_found_rows\\b|starting\\b|terminated\\b|tinyint\\b|trailing\\b|undo\\b|unlock\\b|usage\\b|utc_date\\b|values\\b|varcharacter\\b|where\\b|write\\b|year_month\\b|alter\\b|as\\b|before\\b|binary\\b|by\\b|case\\b|character\\b|column\\b|constraint\\b|create\\b|current_time\\b|cursor\\b|day_hour\\b|day_second\\b|declare\\b|delete\\b|deterministic\\b|div\\b|dual\\b|elseif\\b|exists\\b|false\\b|float4\\b|force\\b|fulltext\\b|group\\b|hour_microsecond\\b|if\\b|index\\b|inout\\b|int\\b|int3\\b|integer\\b|is\\b|key\\b|label\\b|left\\b|linear\\b|localtime\\b|long\\b|loop\\b|mediumblob\\b|middleint\\b|mod\\b|not\\b|numeric\\b|option\\b|order\\b|outfile\\b|procedure\\b|range\\b|real\\b|release\\b|replace\\b|return\\b|rlike\\b|second_microsecond\\b|separator\\b|smallint\\b|sql\\b|sqlwarning\\b|sql_small_result\\b|straight_join\\b|then\\b|tinytext\\b|trigger\\b|union\\b|unsigned\\b|use\\b|utc_time\\b|varbinary\\b|varying\\b|while\\b|x509\\b|zerofill)([a-zA-Z][a-zA-Z0-9_]{0,30}[a-zA-Z0-9])$",
      "ConstraintDescription": {
        "en": "The account name can contain letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. The name can be up to 32 characters in length. For more information, see <a href=\"https://www.alibabacloud.com/help/en/rds/developer-reference/forbidden-keywords\" target=\"_blank\">Forbidden keywords</a>.",
        "zh-cn": "The value can contain lowercase letters, uppercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. The maximum length is 32 characters. For more information about invalid characters, see <a href=\"https://www.alibabacloud.com/help/zh/rds/developer-reference/forbidden-keywords\" target=\"_blank\">Forbidden keywords table</a>."
      },
      "Default": "db_user"
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "192.168.0.0/16",
        "VpcName": {
          "Fn::Sub": "${CommonName}-VPC_HZ"
        }
      }
    },
    "VSwitch1": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "192.168.1.0/24",
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-vsw_001"
        }
      }
    },
    "VSwitch2": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "192.168.2.0/24",
        "ZoneId": {
          "Ref": "ZoneId2"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-vsw_002"
        }
      }
    },
    "Sleep": {
      "DependsOn": [
        "VSwitch1",
        "VSwitch2"
      ],
      "Type": "ALIYUN::ROS::Sleep",
      "Properties": {
        "DeleteDuration": 300
      }
    },
    "SecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupName": {
          "Fn::Sub": "${CommonName}-SecurityGroup_1"
        },
        "SecurityGroupIngress": [
          {
            "PortRange": "80/80",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "3000/3000",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "5001/5001",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "5002/5002",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "5003/5003",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "8080/8080",
            "Priority": 1,
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          }
        ]
      }
    },
    "EcsInstance": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "ImageId": "aliyun_3_x64_20G_alibase_",
        "InstanceName": {
          "Fn::Sub": "${CommonName}-ecs"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        },
        "SystemDiskCategory": "cloud_essd",
        "MaxAmount": 1,
        "SystemDiskSize": 40,
        "InternetMaxBandwidthOut": 5,
        "Password": {
          "Ref": "InstancePassword"
        }
      }
    },
    "RunCommand": {
      "Type": "ALIYUN::ECS::RunCommand",
      "Properties": {
        "CommandContent": {
          "Fn::Sub": "#!/bin/sh\necho \"sk-$(openssl rand -hex 16)\"\n"
        },
        "Type": "RunShellScript",
        "InstanceIds": [
          {
            "Ref": "EcsInstance"
          }
        ]
      }
    },
    "RunCommand2": {
      "DependsOn": [
        "RunCommand"
      ],
      "Type": "ALIYUN::ECS::RunCommand",
      "Properties": {
        "CommandContent": {
          "Fn::Sub": "#!/bin/sh\nexport ROS_DEPLOY=true\ncurl -fsSL https://help-static-aliyun-doc.aliyuncs.com/install-script/dify/sae/install.sh | bash\n"
        },
        "Type": "RunShellScript",
        "InstanceIds": [
          {
            "Ref": "EcsInstance"
          }
        ]
      }
    },
    "RedisInstance": {
      "Type": "ALIYUN::REDIS::Instance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "SecondaryZoneId": {
          "Ref": "ZoneId2"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "InstanceClass": "redis.shard.large.y.ee",
        "EvictionPolicy": "noeviction",
        "InstanceName": {
          "Fn::Sub": "${CommonName}-Redis"
        },
        "EngineVersion": "7.0",
        "Password": {
          "Ref": "RedisInstancePassword"
        }
      }
    },
    "REDISWhitelist": {
      "Type": "ALIYUN::REDIS::Whitelist",
      "Properties": {
        "InstanceId": {
          "Ref": "RedisInstance"
        },
        "SecurityIps": "192.168.0.0/16"
      }
    },
    "ADBPGInstance": {
      "Type": "ALIYUN::GPDB::DBInstance",
      "Properties": {
        "EngineVersion": "7.0",
        "VectorConfigurationStatus": true,
        "InstanceSpec": "4C32G",
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "SegNodeNum": 4,
        "SegStorageType": "cloud_essd",
        "SegDiskPerformanceLevel": "pl1",
        "StorageSize": 50,
        "VPCId": {
          "Ref": "Vpc"
        },
        "SecurityIPList": "192.168.0.0/16",
        "DBInstanceDescription": {
          "Fn::Sub": "${CommonName}"
        },
        "PayType": "Postpaid",
        "DBInstanceCategory": "HighAvailability",
        "DBInstanceMode": "StorageElastic",
        "ProdType": "standard"
      }
    },
    "GPDBAccount": {
      "Type": "ALIYUN::GPDB::Account",
      "Properties": {
        "DBInstanceId": {
          "Fn::GetAtt": [
            "ADBPGInstance",
            "DBInstanceId"
          ]
        },
        "AccountPassword": {
          "Ref": "ADBPGPassword"
        },
        "AccountName": {
          "Ref": "ADBPGAccount"
        }
      }
    },
    "SaeNamespace": {
      "DependsOn": [
        "PostgreSQLInstance",
        "RedisInstance",
        "ADBPGInstance",
        "PluginNas",
        "APINas"
      ],
      "Type": "ALIYUN::SAE::Namespace",
      "Properties": {
        "NamespaceName": {
          "Ref": "NamespaceName"
        },
        "NamespaceId": {
          "Fn::Sub": "${ALIYUN::Region}:${NamespaceName}"
        },
        "VpcId": {
          "Ref": "Vpc"
        }
      }
    },
    "PostgreSQLInstance": {
      "Type": "ALIYUN::RDS::DBInstance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "SlaveZoneIds": [
          {
            "Ref": "ZoneId2"
          }
        ],
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "DBInstanceClass": {
          "Ref": "DBInstanceClass"
        },
        "DBInstanceStorage": 50,
        "Engine": "PostgreSQL",
        "EngineVersion": "17.0",
        "SecurityIPList": "192.168.0.0/16",
        "Category": "HighAvailability",
        "MasterUserType": "Super",
        "MasterUserPassword": {
          "Ref": "PostgresSQLPassword"
        },
        "MasterUsername": {
          "Ref": "PostgresSQLUserName"
        },
        "DBInstanceStorageType": "cloud_essd"
      }
    },
    "DifyDataBase": {
      "Type": "ALIYUN::RDS::Database",
      "Properties": {
        "CharacterSetName": "utf8",
        "DBInstanceId": {
          "Fn::GetAtt": [
            "PostgreSQLInstance",
            "DBInstanceId"
          ]
        },
        "DBName": "dify"
      }
    },
    "DifySetUpDataBase": {
      "Type": "ALIYUN::RDS::Database",
      "DependsOn": "DifyDataBase",
      "Properties": {
        "CharacterSetName": "UTF8",
        "DBInstanceId": {
          "Fn::GetAtt": [
            "PostgreSQLInstance",
            "DBInstanceId"
          ]
        },
        "DBName": "dify_setups"
      }
    },
    "RdsAccountPrivilege": {
      "Type": "ALIYUN::RDS::AccountPrivilege",
      "DependsOn": "DifySetUpDataBase",
      "Properties": {
        "AccountPrivilege": "DBOwner",
        "DBInstanceId": {
          "Ref": "PostgreSQLInstance"
        },
        "DBName": "dify",
        "AccountName": {
          "Ref": "PostgresSQLUserName"
        }
      }
    },
    "NatGateway": {
      "Type": "ALIYUN::VPC::NatGateway",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "NatGatewayName": {
          "Fn::Sub": "${CommonName}-nat"
        },
        "InternetChargeType": "PayByLcu",
        "EipBindMode": "NAT"
      }
    },
    "Eip": {
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "DeletionProtection": false,
        "Isp": "BGP",
        "Bandwidth": 200,
        "InternetChargeType": "PayByTraffic"
      }
    },
    "EipAssociation": {
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Ref": "NatGateway"
        },
        "AllocationId": {
          "Ref": "Eip"
        }
      }
    },
    "SNat": {
      "Type": "ALIYUN::VPC::SnatEntry",
      "DependsOn": "EipAssociation",
      "Properties": {
        "SnatTableId": {
          "Fn::GetAtt": [
            "NatGateway",
            "SNatTableId"
          ]
        },
        "SnatEntryName": {
          "Fn::Sub": "${CommonName}-snat"
        },
        "SourceVSwitchIds": [
          {
            "Ref": "VSwitch1"
          },
          {
            "Ref": "VSwitch2"
          }
        ],
        "SnatIp": {
          "Fn::GetAtt": [
            "Eip",
            "EipAddress"
          ]
        }
      }
    },
    "APINas": {
      "Type": "ALIYUN::NAS::FileSystem",
      "Properties": {
        "ProtocolType": "NFS",
        "FileSystemType": "standard",
        "DeletionForce": true,
        "StorageType": "Performance",
        "Description": {
          "Fn::Sub": "${CommonName}-API-NAS"
        }
      }
    },
    "APINasMountTarget": {
      "Type": "ALIYUN::NAS::MountTarget",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "NetworkType": "Vpc",
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME",
        "FileSystemId": {
          "Ref": "APINas"
        }
      }
    },
    "PluginNas": {
      "Type": "ALIYUN::NAS::FileSystem",
      "Properties": {
        "ProtocolType": "NFS",
        "FileSystemType": "standard",
        "DeletionForce": true,
        "StorageType": "Performance",
        "Description": {
          "Fn::Sub": "${CommonName}-Plugin-NAS"
        }
      }
    },
    "PluginNasMountTarget": {
      "Type": "ALIYUN::NAS::MountTarget",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "NetworkType": "Vpc",
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME",
        "FileSystemId": {
          "Ref": "PluginNas"
        }
      }
    },
    "SuperOpsUser": {
      "Type": "ALIYUN::RAM::User",
      "Properties": {
        "UserName": {
          "Fn::Sub": "SuperOps-${ALIYUN::StackId}"
        },
        "Policies": [
          {
            "PolicyName": {
              "Fn::Join": [
                "-",
                [
                  "DifySuperOpsPolicy",
                  {
                    "Ref": "ALIYUN::StackName"
                  }
                ]
              ]
            },
            "PolicyDocument": {
              "Version": "1",
              "Statement": [
                {
                  "Effect": "Allow",
                  "Action": [
                    "gpdb:*"
                  ],
                  "Resource": [
                    "*"
                  ]
                }
              ]
            }
          }
        ],
        "PolicyAttachments": {
          "System": [
            "AliyunSTSAssumeRoleAccess",
            "AliyunRAMReadOnlyAccess"
          ]
        }
      }
    },
    "AccessKey": {
      "Type": "ALIYUN::RAM::AccessKey",
      "Properties": {
        "UserName": {
          "Fn::GetAtt": [
            "SuperOpsUser",
            "UserName"
          ]
        }
      }
    },
    "DifyApiConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "Data": {
          "MAIL_DEFAULT_SEND_FROM": "YOUR EMAIL FROM (eg: no-reply <no-reply@dify.ai>)",
          "SENTRY_PROFILES_SAMPLE_RATE": "1",
          "MARKETPLACE_ENABLED": "true",
          "DB_PORT": "5432",
          "VECTOR_STORE": "analyticdb",
          "LOG_LEVEL": "INFO",
          "DB_DATABASE": "dify",
          "REDIS_USE_SSL": "false",
          "STORAGE_LOCAL_PATH": "/app/api/storage",
          "SENTRY_TRACES_SAMPLE_RATE": "1",
          "MODE": "api",
          "WEB_API_CORS_ALLOW_ORIGINS": "*",
          "RESEND_API_URL": "https://api.resend.com",
          "ANALYTICDB_INSTANCE_ID": {
            "Fn::GetAtt": [
              "ADBPGInstance",
              "DBInstanceId"
            ]
          },
          "CODE_EXECUTION_ENDPOINT": "http://dify-sandbox:8194",
          "REDIS_HOST": {
            "Fn::GetAtt": [
              "RedisInstance",
              "ConnectionDomain"
            ]
          },
          "REDIS_DB": "0",
          "REDIS_PORT": "6379",
          "MAIL_TYPE": "resend",
          "ANALYTICDB_REGION_ID": {
            "Ref": "ALIYUN::Region"
          },
          "MIGRATION_ENABLED": "true",
          "CONSOLE_CORS_ALLOW_ORIGINS": "*",
          "PLUGIN_DAEMON_URL": "http://dify-plugin-daemon:5002",
          "STORAGE_TYPE": "local",
          "DB_HOST": {
            "Fn::GetAtt": [
              "PostgreSQLInstance",
              "InnerConnectionString"
            ]
          }
        },
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Name": "dify-api"
      }
    },
    "DifyApiSecret": {
      "Type": "ALIYUN::SAE::Secret",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "SecretName": "dify-api",
        "SecretType": "Opaque",
        "SecretData": {
          "ANALYTICDB_ACCOUNT": {
            "Ref": "ADBPGAccount"
          },
          "ANALYTICDB_KEY_ID": {
            "Fn::GetAtt": [
              "AccessKey",
              "AccessKeyId"
            ]
          },
          "ANALYTICDB_KEY_SECRET": {
            "Fn::GetAtt": [
              "AccessKey",
              "AccessKeySecret"
            ]
          },
          "ANALYTICDB_NAMESPACE": "difyns",
          "ANALYTICDB_NAMESPACE_PASSWORD": {
            "Ref": "ADBPGPassword"
          },
          "ANALYTICDB_PASSWORD": {
            "Ref": "ADBPGPassword"
          },
          "CELERY_BROKER_URL": {
            "Fn::Sub": [
              "redis://:${REDIS_PASSWORD}@${REDIS_HOST}:6379/0",
              {
                "REDIS_PASSWORD": {
                  "Ref": "RedisInstancePassword"
                },
                "REDIS_HOST": {
                  "Fn::GetAtt": [
                    "RedisInstance",
                    "ConnectionDomain"
                  ]
                }
              }
            ]
          },
          "CODE_EXECUTION_API_KEY": "dify-sandbox",
          "DB_PASSWORD": {
            "Ref": "PostgresSQLPassword"
          },
          "DB_USERNAME": {
            "Ref": "PostgresSQLUserName"
          },
          "INNER_API_KEY_FOR_PLUGIN": "QaHbTe77CtuXmsfyhR7+vRjI/+XbV1AaFy691iy+kGDv2Jvy0/eAh8Y1",
          "PLUGIN_DAEMON_KEY": "lYkiYYT6owG+71oLerGzA7GXCgOT++6ovaezWAjpCjf+Sjc3ZtU+qUEi",
          "REDIS_PASSWORD": {
            "Ref": "RedisInstancePassword"
          },
          "REDIS_USERNAME": "default",
          "RESEND_API_KEY": "xxxx",
          "SECRET_KEY": {
            "Fn::Base64Decode": {
              "Fn::Jq": [
                "First",
                ".[0].Output",
                {
                  "Fn::GetAtt": [
                    "RunCommand",
                    "InvokeResults"
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "DifyWorkerConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "Data": {
          "MAIL_DEFAULT_SEND_FROM": "YOUR EMAIL FROM (eg: no-reply <no-reply@dify.ai>)",
          "SENTRY_PROFILES_SAMPLE_RATE": "1",
          "MARKETPLACE_ENABLED": "true",
          "DB_PORT": "5432",
          "VECTOR_STORE": "analyticdb",
          "LOG_LEVEL": "INFO",
          "DB_DATABASE": "dify",
          "REDIS_USE_SSL": "false",
          "STORAGE_LOCAL_PATH": "/app/api/storage",
          "SENTRY_TRACES_SAMPLE_RATE": "1",
          "MODE": "worker",
          "WEB_API_CORS_ALLOW_ORIGINS": "*",
          "RESEND_API_URL": "https://api.resend.com",
          "ANALYTICDB_INSTANCE_ID": {
            "Fn::GetAtt": [
              "ADBPGInstance",
              "DBInstanceId"
            ]
          },
          "REDIS_HOST": {
            "Fn::GetAtt": [
              "RedisInstance",
              "ConnectionDomain"
            ]
          },
          "REDIS_DB": "0",
          "REDIS_PORT": "6379",
          "MAIL_TYPE": "resend",
          "ANALYTICDB_REGION_ID": {
            "Ref": "ALIYUN::Region"
          },
          "MIGRATION_ENABLED": "true",
          "CONSOLE_CORS_ALLOW_ORIGINS": "*",
          "PLUGIN_DAEMON_URL": "http://dify-plugin-daemon:5002",
          "STORAGE_TYPE": "local",
          "DB_HOST": {
            "Fn::GetAtt": [
              "PostgreSQLInstance",
              "InnerConnectionString"
            ]
          }
        },
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Name": "dify-worker"
      }
    },
    "DifyWorkerSecret": {
      "Type": "ALIYUN::SAE::Secret",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "SecretName": "dify-worker",
        "SecretType": "Opaque",
        "SecretData": {
          "ANALYTICDB_ACCOUNT": {
            "Ref": "ADBPGAccount"
          },
          "ANALYTICDB_KEY_ID": {
            "Fn::GetAtt": [
              "AccessKey",
              "AccessKeyId"
            ]
          },
          "ANALYTICDB_KEY_SECRET": {
            "Fn::GetAtt": [
              "AccessKey",
              "AccessKeySecret"
            ]
          },
          "ANALYTICDB_NAMESPACE": "difyns",
          "ANALYTICDB_NAMESPACE_PASSWORD": {
            "Ref": "ADBPGPassword"
          },
          "ANALYTICDB_PASSWORD": {
            "Ref": "ADBPGPassword"
          },
          "CELERY_BROKER_URL": {
            "Fn::Sub": [
              "redis://:${REDIS_PASSWORD}@${REDIS_HOST}:6379/0",
              {
                "REDIS_PASSWORD": {
                  "Ref": "RedisInstancePassword"
                },
                "REDIS_HOST": {
                  "Fn::GetAtt": [
                    "RedisInstance",
                    "ConnectionDomain"
                  ]
                }
              }
            ]
          },
          "DB_PASSWORD": {
            "Ref": "PostgresSQLPassword"
          },
          "DB_USERNAME": {
            "Ref": "PostgresSQLUserName"
          },
          "INNER_API_KEY_FOR_PLUGIN": "QaHbTe77CtuXmsfyhR7+vRjI/+XbV1AaFy691iy+kGDv2Jvy0/eAh8Y1",
          "PLUGIN_DAEMON_KEY": "lYkiYYT6owG+71oLerGzA7GXCgOT++6ovaezWAjpCjf+Sjc3ZtU+qUEi",
          "REDIS_PASSWORD": {
            "Ref": "RedisInstancePassword"
          },
          "REDIS_USERNAME": "default",
          "RESEND_API_KEY": "xxxx",
          "SECRET_KEY": {
            "Fn::Base64Decode": {
              "Fn::Jq": [
                "First",
                ".[0].Output",
                {
                  "Fn::GetAtt": [
                    "RunCommand",
                    "InvokeResults"
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "DifyPluginDaemonConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Name": "dify-plugin-daemon",
        "Data": {
          "SERVER_PORT": "5002",
          "PLUGIN_REMOTE_INSTALLING_HOST": "0.0.0.0",
          "REDIS_DB": "0",
          "REDIS_HOST": {
            "Fn::GetAtt": [
              "RedisInstance",
              "ConnectionDomain"
            ]
          },
          "MARKETPLACE_ENABLED": "true",
          "DB_PORT": "5432",
          "REDIS_USE_SSL": "false",
          "PLUGIN_WORKING_PATH": "/app/storage/cwd",
          "DB_HOST": {
            "Fn::GetAtt": [
              "PostgreSQLInstance",
              "InnerConnectionString"
            ]
          },
          "PIP_MIRROR_URL": "http://mirrors.aliyun.com/pypi/simple/",
          "REDIS_PORT": "6379",
          "PLUGIN_REMOTE_INSTALLING_PORT": "5003",
          "MAX_PLUGIN_PACKAGE_SIZE": "52428800",
          "DB_DATABASE": "dify_plugin",
          "DIFY_INNER_API_URL": "http://dify-api:5001"
        }
      }
    },
    "DifyPluginDaemonSecret": {
      "Type": "ALIYUN::SAE::Secret",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "SecretName": "dify-plugin-daemon",
        "SecretType": "Opaque",
        "SecretData": {
          "DB_PASSWORD": {
            "Ref": "PostgresSQLPassword"
          },
          "DB_USERNAME": {
            "Ref": "PostgresSQLUserName"
          },
          "DIFY_INNER_API_KEY": "QaHbTe77CtuXmsfyhR7+vRjI/+XbV1AaFy691iy+kGDv2Jvy0/eAh8Y1",
          "REDIS_PASSWORD": {
            "Ref": "RedisInstancePassword"
          },
          "REDIS_USERNAME": "default",
          "SERVER_KEY": "lYkiYYT6owG+71oLerGzA7GXCgOT++6ovaezWAjpCjf+Sjc3ZtU+qUEi"
        }
      }
    },
    "DifySandboxConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Name": "dify-sandbox",
        "Data": {
          "GIN_MODE": "release",
          "SANDBOX_PORT": "8194"
        }
      }
    },
    "DifySandboxSecret": {
      "Type": "ALIYUN::SAE::Secret",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "SecretName": "dify-sandbox",
        "SecretType": "Opaque",
        "SecretData": {
          "API_KEY": "dify-sandbox"
        }
      }
    },
    "DifyWebConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Name": "dify-web",
        "Data": {
          "MARKETPLACE_ENABLED": "true",
          "MARKETPLACE_URL": "https://marketplace.dify.ai",
          "MARKETPLACE_API_URL": "https://marketplace.dify.ai"
        }
      }
    },
    "DifyNginxConfigMap": {
      "Type": "ALIYUN::SAE::ConfigMap",
      "Properties": {
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Name": "dify-nginx",
        "Data": {
          "default.conf": "server {\n        listen 80;\n        server_name _;\n\n        location /console/api {\n          proxy_pass http://dify-api:5001;\n          include proxy.conf;\n        }\n\n        location /api {\n          proxy_pass http://dify-api:5001;\n          include proxy.conf;\n        }\n\n        location /v1 {\n          proxy_pass http://dify-api:5001;\n          include proxy.conf;\n        }\n\n        location /files {\n          proxy_pass http://dify-api:5001;\n          include proxy.conf;\n        }\n\n        location /explore {\n          proxy_pass http://dify-web:3000;\n          proxy_set_header Dify-Hook-Url $scheme://$host$request_uri;\n          include proxy.conf;\n        }\n\n        location /e/ {\n          proxy_pass http://dify-plugin-daemon:5002;\n          proxy_set_header Dify-Hook-Url $scheme://$host$request_uri;\n          include proxy.conf;\n        }\n\n        location / {\n          proxy_pass http://dify-web:3000;\n          include proxy.conf;\n        }\n    }",
          "nginx.conf": "user  nginx;\n    worker_processes  auto;\n    pid        /var/run/nginx.pid;\n\n\n    events {\n        worker_connections  1024;\n    }\n\n\n    http {\n        include       /etc/nginx/mime.types;\n        default_type  application/octet-stream;\n\n        log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n                          '$status $body_bytes_sent \"$http_referer\" '\n                          '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n        sendfile        on;\n        #tcp_nopush     on;\n\n        keepalive_timeout  65;\n\n        #gzip  on;\n        client_max_body_size 15M;\n\n        include /etc/nginx/conf.d/*.conf;\n    }",
          "proxy.conf": "proxy_set_header Host $host;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_set_header X-Forwarded-Proto $scheme;\nproxy_set_header X-Forwarded-Port $server_port;\nproxy_http_version 1.1;\nproxy_set_header Connection \"\";\nproxy_buffering off;\nproxy_read_timeout 3600s;\nproxy_send_timeout 3600s;"
        }
      }
    },
    "DifyApiApp": {
      "DependsOn": [
        "SaeNamespace",
        "DifyApiConfigMap",
        "DifyApiSecret",
        "ADBPGInstance"
      ],
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "dify-api",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Fn::Sub": [
            "${VSwitch1},${VSwitch2}",
            {
              "VSwitch1": {
                "Ref": "VSwitch1"
              },
              "VSwitch2": {
                "Ref": "VSwitch2"
              }
            }
          ]
        },
        "Replicas": 1,
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Cpu": 1000,
        "Memory": 2048,
        "PackageType": "Image",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-api-v1.6.0"
        },
        "ProgrammingLanguage": "python",
        "AppSource": "micro_service",
        "Timezone": "Asia/Shanghai",
        "NasConfigs": {
          "Fn::Sub": [
            "[{\"mountDomain\":\"${MOUNT_DOMAIN}\",\"mountPath\":\"/app/api/storage\",\"nasId\":\"${NAS_ID}\",\"nasPath\":\"dify-api\",\"readOnly\":false,\"volumeName\":\"nas-1\"}]",
            {
              "MOUNT_DOMAIN": {
                "Fn::GetAtt": [
                  "APINasMountTarget",
                  "MountTargetDomain"
                ]
              },
              "NAS_ID": {
                "Fn::GetAtt": [
                  "APINas",
                  "FileSystemId"
                ]
              }
            }
          ]
        },
        "PvtzDiscoverySvc": {
          "Fn::Sub": [
            "{\"enable\":\"true\",\"namespaceId\":\"${REGION_ID}:${NAMESPACE}\",\"portAndProtocol\":{\"5001:TCP\":\"5001\"},\"portProtocols\":[],\"pvtzDiscoveryName\":\"${REGION_ID}-${USER_ID}\",\"serviceName\":\"dify-api.${NAMESPACE}\"}",
            {
              "NAMESPACE": {
                "Ref": "NamespaceName"
              },
              "USER_ID": {
                "Ref": "ALIYUN::TenantId"
              },
              "REGION_ID": {
                "Ref": "ALIYUN::Region"
              }
            }
          ]
        },
        "Envs": {
          "Fn::Sub": [
            "[{\"name\":\"APP_WEB_URL\"},{\"name\":\"FILES_URL\"},{\"name\":\"CODE_MAX_DEPTH\",\"value\":\"5\"},{\"name\":\"CODE_MAX_OBJECT_ARRAY_LENGTH\",\"value\":\"30\"},{\"name\":\"CHECK_UPDATE_URL\"},{\"name\":\"CODE_MAX_STRING_ARRAY_LENGTH\",\"value\":\"30\"},{\"name\":\"SERVICE_API_URL\"},{\"name\":\"sae-sys-secret-all-dify-api\",\"valueFrom\":{\"secretRef\":{\"secretId\":${SECRET_ID},\"key\":\"\"}}},{\"name\":\"CODE_MAX_PRECISION\",\"value\":\"20\"},{\"name\":\"CONSOLE_API_URL\"},{\"name\":\"TEMPLATE_TRANSFORM_MAX_LENGTH\",\"value\":\"80000\"},{\"name\":\"CODE_MAX_NUMBER\",\"value\":\"9223372036854775807\"},{\"name\":\"CODE_MAX_NUMBER_ARRAY_LENGTH\",\"value\":\"1000\"},{\"name\":\"CONSOLE_WEB_URL\"},{\"name\":\"CODE_MIN_NUMBER\",\"value\":\"-9223372036854775808\"},{\"name\":\"CODE_MAX_STRING_LENGTH\",\"value\":\"80000\"},{\"name\":\"SENTRY_DSN\"},{\"name\":\"CODE_EXECUTION_API_KEY\",\"valueFrom\":{\"secretRef\":{\"secretId\":${SANDBOX_SECRET_ID},\"key\":\"API_KEY\"}}},{\"name\":\"sae-sys-configmap-all-dify-api\",\"valueFrom\":{\"configMapRef\":{\"configMapId\":${CONFIGMAP_ID},\"key\":\"\"}}}]",
            {
              "CONFIGMAP_ID": {
                "Fn::GetAtt": [
                  "DifyApiConfigMap",
                  "ConfigMapId"
                ]
              },
              "SECRET_ID": {
                "Fn::GetAtt": [
                  "DifyApiSecret",
                  "SecretId"
                ]
              },
              "SANDBOX_SECRET_ID": {
                "Fn::GetAtt": [
                  "DifySandboxSecret",
                  "SecretId"
                ]
              }
            }
          ]
        }
      }
    },
    "DifyWorkerApp": {
      "DependsOn": [
        "SaeNamespace",
        "DifyWorkerConfigMap",
        "DifyWorkerSecret"
      ],
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "dify-worker",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Fn::Sub": [
            "${VSwitch1},${VSwitch2}",
            {
              "VSwitch1": {
                "Ref": "VSwitch1"
              },
              "VSwitch2": {
                "Ref": "VSwitch2"
              }
            }
          ]
        },
        "Replicas": 1,
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Cpu": 1000,
        "Memory": 2048,
        "PackageType": "Image",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-api-v1.6.0"
        },
        "ProgrammingLanguage": "python",
        "AppSource": "micro_service",
        "Timezone": "Asia/Shanghai",
        "NasConfigs": {
          "Fn::Sub": [
            "[{\"mountDomain\":\"${MOUNT_DOMAIN}\",\"mountPath\":\"/app/api/storage\",\"nasId\":\"${NAS_ID}\",\"nasPath\":\"dify-api\",\"readOnly\":false,\"volumeName\":\"nas-1\"}]",
            {
              "MOUNT_DOMAIN": {
                "Fn::GetAtt": [
                  "APINasMountTarget",
                  "MountTargetDomain"
                ]
              },
              "NAS_ID": {
                "Fn::GetAtt": [
                  "APINas",
                  "FileSystemId"
                ]
              }
            }
          ]
        },
        "Envs": {
          "Fn::Sub": [
            "[{\"name\":\"sae-sys-secret-all-dify-worker\",\"valueFrom\":{\"secretRef\":{\"secretId\":${SECRET_ID},\"key\":\"\"}}},{\"name\":\"sae-sys-configmap-all-dify-worker\",\"valueFrom\":{\"configMapRef\":{\"configMapId\":${CONFIGMAP_ID},\"key\":\"\"}}},{\"name\":\"CONSOLE_WEB_URL\"}]",
            {
              "CONFIGMAP_ID": {
                "Fn::GetAtt": [
                  "DifyWorkerConfigMap",
                  "ConfigMapId"
                ]
              },
              "SECRET_ID": {
                "Fn::GetAtt": [
                  "DifyWorkerSecret",
                  "SecretId"
                ]
              }
            }
          ]
        }
      }
    },
    "DifyPluginDaemonApp": {
      "DependsOn": [
        "SaeNamespace",
        "DifyPluginDaemonConfigMap",
        "DifyPluginDaemonSecret"
      ],
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "dify-plugin-daemon",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Fn::Sub": [
            "${VSwitch1},${VSwitch2}",
            {
              "VSwitch1": {
                "Ref": "VSwitch1"
              },
              "VSwitch2": {
                "Ref": "VSwitch2"
              }
            }
          ]
        },
        "Replicas": 1,
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Cpu": 1000,
        "Memory": 2048,
        "PackageType": "Image",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-plugin-daemon-v0.1.3-local"
        },
        "ProgrammingLanguage": "golang",
        "AppSource": "micro_service",
        "Timezone": "Asia/Shanghai",
        "NasConfigs": {
          "Fn::Sub": [
            "[{\"mountDomain\":\"${MOUNT_DOMAIN}\",\"mountPath\":\"/app/storage\",\"nasId\":\"${NAS_ID}\",\"nasPath\":\"dify-plugin-daemon\",\"readOnly\":false,\"volumeName\":\"nas-1\"}]",
            {
              "MOUNT_DOMAIN": {
                "Fn::GetAtt": [
                  "PluginNasMountTarget",
                  "MountTargetDomain"
                ]
              },
              "NAS_ID": {
                "Fn::GetAtt": [
                  "PluginNas",
                  "FileSystemId"
                ]
              }
            }
          ]
        },
        "PvtzDiscoverySvc": {
          "Fn::Sub": [
            "{\"enable\":\"true\",\"namespaceId\":\"${REGION_ID}:${NAMESPACE}\",\"portAndProtocol\":{\"5003:TCP\":\"5003\",\"5002:TCP\":\"5002\"},\"portProtocols\":[],\"pvtzDiscoveryName\":\"${REGION_ID}-${USER_ID}\",\"serviceName\":\"dify-plugin-daemon.${NAMESPACE}\"}",
            {
              "NAMESPACE": {
                "Ref": "NamespaceName"
              },
              "USER_ID": {
                "Ref": "ALIYUN::TenantId"
              },
              "REGION_ID": {
                "Ref": "ALIYUN::Region"
              }
            }
          ]
        },
        "Envs": {
          "Fn::Sub": [
            "[{\"name\":\"sae-sys-secret-all-dify-plugin-daemon\",\"valueFrom\":{\"secretRef\":{\"secretId\":${SECRET_ID},\"key\":\"\"}}},{\"name\":\"sae-sys-configmap-all-dify-plugin-daemon\",\"valueFrom\":{\"configMapRef\":{\"configMapId\":${CONFIGMAP_ID},\"key\":\"\"}}}]",
            {
              "CONFIGMAP_ID": {
                "Fn::GetAtt": [
                  "DifyPluginDaemonConfigMap",
                  "ConfigMapId"
                ]
              },
              "SECRET_ID": {
                "Fn::GetAtt": [
                  "DifyPluginDaemonSecret",
                  "SecretId"
                ]
              }
            }
          ]
        }
      }
    },
    "DifySandboxApp": {
      "DependsOn": [
        "SaeNamespace",
        "DifySandboxConfigMap",
        "DifySandboxSecret"
      ],
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "dify-sandbox",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Fn::Sub": [
            "${VSwitch1},${VSwitch2}",
            {
              "VSwitch1": {
                "Ref": "VSwitch1"
              },
              "VSwitch2": {
                "Ref": "VSwitch2"
              }
            }
          ]
        },
        "Replicas": 1,
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Cpu": 1000,
        "Memory": 2048,
        "PackageType": "Image",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-sandbox-v0.2.12"
        },
        "ProgrammingLanguage": "golang",
        "AppSource": "micro_service",
        "Timezone": "Asia/Shanghai",
        "PvtzDiscoverySvc": {
          "Fn::Sub": [
            "{\"enable\":\"true\",\"namespaceId\":\"${REGION_ID}:${NAMESPACE}\",\"portAndProtocol\":{\"8194:TCP\":\"8194\"},\"portProtocols\":[],\"pvtzDiscoveryName\":\"${REGION_ID}-${USER_ID}\",\"serviceName\":\"dify-sandbox.${NAMESPACE}\"}",
            {
              "NAMESPACE": {
                "Ref": "NamespaceName"
              },
              "USER_ID": {
                "Ref": "ALIYUN::TenantId"
              },
              "REGION_ID": {
                "Ref": "ALIYUN::Region"
              }
            }
          ]
        },
        "Envs": {
          "Fn::Sub": [
            "[{\"name\":\"sae-sys-secret-all-dify-sandbox\",\"valueFrom\":{\"secretRef\":{\"secretId\":${SECRET_ID},\"key\":\"\"}}},{\"name\":\"WORKER_TIMEOUT\",\"value\":\"15\"},{\"name\":\"sae-sys-configmap-all-dify-sandbox\",\"valueFrom\":{\"configMapRef\":{\"configMapId\":${CONFIGMAP_ID},\"key\":\"\"}}}]",
            {
              "CONFIGMAP_ID": {
                "Fn::GetAtt": [
                  "DifySandboxConfigMap",
                  "ConfigMapId"
                ]
              },
              "SECRET_ID": {
                "Fn::GetAtt": [
                  "DifySandboxSecret",
                  "SecretId"
                ]
              }
            }
          ]
        }
      }
    },
    "DifyWebApp": {
      "DependsOn": [
        "SaeNamespace",
        "DifyWebConfigMap"
      ],
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "dify-web",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Fn::Sub": [
            "${VSwitch1},${VSwitch2}",
            {
              "VSwitch1": {
                "Ref": "VSwitch1"
              },
              "VSwitch2": {
                "Ref": "VSwitch2"
              }
            }
          ]
        },
        "Replicas": 1,
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Cpu": 1000,
        "Memory": 2048,
        "PackageType": "Image",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:dify-web-v1.6.0"
        },
        "ProgrammingLanguage": "other",
        "AppSource": "micro_service",
        "Timezone": "Asia/Shanghai",
        "PvtzDiscoverySvc": {
          "Fn::Sub": [
            "{\"enable\":\"true\",\"namespaceId\":\"${REGION_ID}:${NAMESPACE}\",\"portAndProtocol\":{\"3000:TCP\":\"3000\"},\"portProtocols\":[],\"pvtzDiscoveryName\":\"${REGION_ID}-${USER_ID}\",\"serviceName\":\"dify-web.${NAMESPACE}\"}",
            {
              "NAMESPACE": {
                "Ref": "NamespaceName"
              },
              "USER_ID": {
                "Ref": "ALIYUN::TenantId"
              },
              "REGION_ID": {
                "Ref": "ALIYUN::Region"
              }
            }
          ]
        },
        "Envs": {
          "Fn::Sub": [
            "[{\"name\":\"sae-sys-configmap-all-dify-web\",\"valueFrom\":{\"configMapRef\":{\"configMapId\":${CONFIGMAP_ID},\"key\":\"\"}}},{\"name\":\"APP_API_URL\"},{\"name\":\"CONSOLE_API_URL\"},{\"name\":\"EDITION\",\"value\":\"SELF_HOSTED\"}]",
            {
              "CONFIGMAP_ID": {
                "Fn::GetAtt": [
                  "DifyWebConfigMap",
                  "ConfigMapId"
                ]
              }
            }
          ]
        }
      }
    },
    "DifyNginxApp": {
      "DependsOn": [
        "SaeNamespace",
        "DifyNginxConfigMap"
      ],
      "Type": "ALIYUN::SAE::Application",
      "Properties": {
        "AppName": "dify-nginx",
        "SaeVersion": "v2",
        "AutoConfig": false,
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Fn::Sub": [
            "${VSwitch1},${VSwitch2}",
            {
              "VSwitch1": {
                "Ref": "VSwitch1"
              },
              "VSwitch2": {
                "Ref": "VSwitch2"
              }
            }
          ]
        },
        "Replicas": 1,
        "NamespaceId": {
          "Ref": "SaeNamespace"
        },
        "Cpu": 1000,
        "Memory": 2048,
        "PackageType": "Image",
        "ImageUrl": {
          "Fn::Sub": "registry.${ALIYUN::Region}.aliyuncs.com/sae-serverless-demo/sae-demo:nginx-v1.23.4"
        },
        "ProgrammingLanguage": "other",
        "AppSource": "micro_service",
        "Timezone": "Asia/Shanghai",
        "ConfigMapMountDesc": {
          "Fn::Sub": [
            "[{\"MountPath\":\"/etc/nginx/conf.d/default.conf\",\"ConfigMapId\":${CONFIGMAP_ID},\"ConfigMapName\":\"dify-nginx\",\"Key\":\"default.conf\"},{\"MountPath\":\"/etc/nginx/nginx.conf\",\"ConfigMapId\":${CONFIGMAP_ID},\"ConfigMapName\":\"dify-nginx\",\"Key\":\"nginx.conf\"},{\"MountPath\":\"/etc/nginx/proxy.conf\",\"ConfigMapId\":${CONFIGMAP_ID},\"ConfigMapName\":\"dify-nginx\",\"Key\":\"proxy.conf\"}]",
            {
              "CONFIGMAP_ID": {
                "Fn::GetAtt": [
                  "DifyNginxConfigMap",
                  "ConfigMapId"
                ]
              }
            }
          ]
        }
      }
    },
    "InternetClb": {
      "Type": "ALIYUN::SLB::LoadBalancer",
      "Properties": {
        "LoadBalancerName": {
          "Ref": "ALIYUN::StackName"
        },
        "LoadBalancerSpec": "slb.s2.medium",
        "AddressType": "internet"
      }
    },
    "BackendAppBindClb": {
      "Type": "ALIYUN::SAE::SlbBinding",
      "DependsOn": [
        "DifyNginxApp",
        "InternetClb"
      ],
      "Properties": {
        "InternetSlbId": {
          "Fn::GetAtt": [
            "InternetClb",
            "LoadBalancerId"
          ]
        },
        "Internet": "[{\"port\": 80, \"targetPort\": 80, \"protocol\": \"TCP\"}]",
        "AppId": {
          "Fn::GetAtt": [
            "DifyNginxApp",
            "AppId"
          ]
        }
      }
    }
  },
  "Outputs": {
    "DifyAddress": {
      "Label": {
        "zh-cn": "Dify service address.",
        "en": "Dify service address"
      },
      "Description": {
        "zh-cn": "Dify service address.",
        "en": "The service address of the Dify platform."
      },
      "Value": {
        "Fn::Sub": [
          "http://${ServerAddress}:80",
          {
            "ServerAddress": {
              "Fn::GetAtt": [
                "InternetClb",
                "IpAddress"
              ]
            }
          }
        ]
      }
    },
    "PostgresName": {
      "Label": {
        "zh-cn": "Postgres username",
        "en": "Postgres username"
      },
      "Description": {
        "zh-cn": "The username of AnalyticDB for PostgreSQL.",
        "en": "The username for the AnalyticDB for PostgreSQL database."
      },
      "Value": {
        "Ref": "ADBPGAccount"
      }
    },
    "PostgresPassword": {
      "Label": {
        "zh-cn": "Postgres password",
        "en": "Postgres password"
      },
      "Description": {
        "zh-cn": "The password of AnalyticDB for PostgreSQL.",
        "en": "The password for the AnalyticDB for PostgreSQL database."
      },
      "NoEcho": true,
      "Value": {
        "Ref": "ADBPGPassword"
      }
    },
    "PostgresConnectionString": {
      "Label": {
        "zh-cn": "Postgres database address",
        "en": "Postgres database address"
      },
      "Description": {
        "zh-cn": "The internal endpoint of AnalyticDB for PostgreSQL.",
        "en": "The internal endpoint of the AnalyticDB for PostgreSQL database."
      },
      "Value": {
        "Fn::GetAtt": [
          "ADBPGInstance",
          "ConnectionString"
        ]
      }
    },
    "APINasFileSystemId": {
      "Label": {
        "zh-cn": "API NAS file system",
        "en": "API NAS file system"
      },
      "Description": {
        "zh-cn": "The NAS file system.",
        "en": "The ID of the NAS file system for the API."
      },
      "Value": {
        "Ref": "APINas"
      }
    },
    "APINasMountTarget": {
      "Label": {
        "zh-cn": "API NAS mount target",
        "en": "API NAS mount target"
      },
      "Description": {
        "zh-cn": "The NAS mount target.",
        "en": "The mount target of the NAS file system for the API."
      },
      "Value": {
        "Ref": "APINasMountTarget"
      }
    },
    "PluginNasFileSystemId": {
      "Label": {
        "zh-cn": "Plugin NAS file system",
        "en": "Plugin NAS file system"
      },
      "Description": {
        "zh-cn": "The NAS file system.",
        "en": "The ID of the NAS file system for plugins."
      },
      "Value": {
        "Ref": "PluginNas"
      }
    },
    "PluginNasMountTarget": {
      "Label": {
        "zh-cn": "Plugin NAS mount target",
        "en": "Plugin NAS mount target"
      },
      "Description": {
        "zh-cn": "The NAS mount target.",
        "en": "The mount target of the NAS file system for plugins."
      },
      "Value": {
        "Ref": "PluginNasMountTarget"
      }
    },
    "RedisConnectionString": {
      "Label": {
        "zh-cn": "Redis connection address",
        "en": "Redis connection address"
      },
      "Description": {
        "zh-cn": "The Redis connection address.",
        "en": "The connection endpoint of the Redis instance."
      },
      "Value": {
        "Fn::GetAtt": [
          "RedisInstance",
          "ConnectionDomain"
        ]
      }
    },
    "RedisName": {
      "Label": {
        "zh-cn": "Redis username",
        "en": "Redis username"
      },
      "Description": {
        "zh-cn": "The Redis username.",
        "en": "The username for the Redis instance."
      },
      "Value": "default"
    },
    "RedisInstancePassword": {
      "Label": {
        "zh-cn": "Redis password",
        "en": "Redis password"
      },
      "Description": {
        "zh-cn": "The Redis password.",
        "en": "The password for the Redis instance."
      },
      "NoEcho": true,
      "Value": {
        "Ref": "RedisInstancePassword"
      }
    },
    "PostgreSQLDBName": {
      "Label": {
        "zh-cn": "Database name",
        "en": "Database name"
      },
      "Description": {
        "zh-cn": "The database name of ApsaraDB RDS for PostgreSQL.",
        "en": "The database name of the ApsaraDB RDS for PostgreSQL instance."
      },
      "Value": "dify"
    },
    "PostgreSQLConnectionString": {
      "Label": {
        "zh-cn": "RDS database address",
        "en": "RDS database address"
      },
      "Description": {
        "zh-cn": "The internal endpoint of ApsaraDB RDS for PostgreSQL.",
        "en": "The internal endpoint of the ApsaraDB RDS for PostgreSQL instance."
      },
      "Value": {
        "Fn::GetAtt": [
          "PostgreSQLInstance",
          "InnerConnectionString"
        ]
      }
    },
    "PostgreSQLAccount": {
      "Label": {
        "zh-cn": "RDS username",
        "en": "RDS username"
      },
      "Description": {
        "zh-cn": "The username of ApsaraDB RDS for PostgreSQL.",
        "en": "The username for the ApsaraDB RDS for PostgreSQL instance."
      },
      "Value": {
        "Ref": "PostgresSQLUserName"
      }
    },
    "PostgreSQLPassword": {
      "Label": {
        "zh-cn": "RDS password",
        "en": "RDS password"
      },
      "Description": {
        "zh-cn": "The password of ApsaraDB RDS for PostgreSQL.",
        "en": "The password for the ApsaraDB RDS for PostgreSQL instance."
      },
      "NoEcho": true,
      "Value": {
        "Ref": "PostgresSQLPassword"
      }
    },
    "NameSpace": {
      "Label": {
        "zh-cn": "Namespace",
        "en": "Namespace"
      },
      "Description": {
        "zh-cn": "The namespace.",
        "en": "The ID of the SAE namespace."
      },
      "Value": {
        "Fn::Sub": "${ALIYUN::Region}:${NamespaceName}"
      }
    },
    "Vpc": {
      "Label": {
        "zh-cn": "VPC ID",
        "en": "VPC ID"
      },
      "Description": {
        "zh-cn": "The VPC ID.",
        "en": "The ID of the VPC."
      },
      "Value": {
        "Ref": "Vpc"
      }
    },
    "Vsw": {
      "Label": {
        "zh-cn": "vSwitch ID",
        "en": "vSwitch ID"
      },
      "Description": {
        "zh-cn": "The vSwitch ID.",
        "en": "The ID of the vSwitch."
      },
      "Value": {
        "Ref": "VSwitch1"
      }
    },
    "Sg": {
      "Label": {
        "zh-cn": "Security group ID",
        "en": "Security group ID"
      },
      "Description": {
        "zh-cn": "The security group ID.",
        "en": "The ID of the security group."
      },
      "Value": {
        "Ref": "SecurityGroup"
      }
    },
    "SecretKey": {
      "Label": {
        "zh-cn": "Secret key",
        "en": "Secret key"
      },
      "Description": {
        "zh-cn": "Used for secure signatures and encrypting sensitive information in the database.",
        "en": "The key used for secure signatures and for encrypting sensitive information in the database."
      },
      "NoEcho": true,
      "Value": {
        "Fn::Base64Decode": {
          "Fn::Jq": [
            "First",
            ".[0].Output",
            {
              "Fn::GetAtt": [
                "RunCommand",
                "InvokeResults"
              ]
            }
          ]
        }
      }
    },
    "dify-nginx": {
      "Label": {
        "zh-cn": "Application address of dify-nginx",
        "en": "dify-nginx application address"
      },
      "Description": {
        "zh-cn": "The application address of dify-nginx. In the application access settings, view the public endpoint based on CLB access.",
        "en": "The address of the dify-nginx application. To view the public endpoint for SLB access, go to the application access settings."
      },
      "Value": {
        "Fn::Sub": "https://sae.console.alibabacloud.com/${ALIYUN::Region}/app-list/${DifyNginxApp.AppId}/micro-app/base?name=dify-nginx"
      }
    },
    "ECSInstanceId": {
      "Label": {
        "zh-cn": "ECS instance ID",
        "en": "ECS instance ID"
      },
      "Description": {
        "zh-cn": "The ECS instance ID. This instance deploys the sample e-commerce system.",
        "en": "The ID of the ECS instance. This instance is used to run the installation script."
      },
      "Value": {
        "Fn::Select": [
          0,
          {
            "Fn::GetAtt": [
              "EcsInstance",
              "InstanceIds"
            ]
          }
        ]
      }
    },
    "Console@DemoUrl": {
      "Description": {
        "zh-cn": "The application access domain name, which is the address of the e-commerce system in this solution.",
        "en": "The public IP address of the ECS instance."
      },
      "Value": {
        "Fn::Sub": [
          "http://${PublicIp}",
          {
            "PublicIp": {
              "Fn::Select": [
                0,
                {
                  "Fn::GetAtt": [
                    "EcsInstance",
                    "PublicIps"
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "Outputs": [
        "DifyAddress",
        "ECSInstanceId",
        "Console@DemoUrl",
        "dify-nginx",
        "NameSpace",
        "Vpc",
        "Vsw",
        "Sg",
        "PostgreSQLDBName",
        "PostgreSQLConnectionString",
        "PostgreSQLAccount",
        "PostgreSQLPassword",
        "PostgresName",
        "PostgresPassword",
        "PostgresConnectionString",
        "APINasFileSystemId",
        "APINasMountTarget",
        "PluginNasFileSystemId",
        "PluginNasMountTarget",
        "RedisConnectionString",
        "RedisName",
        "RedisInstancePassword",
        "SecretKey"
      ],
      "ParameterGroups": [
        {
          "Parameters": [
            "ZoneId1",
            "ZoneId2"
          ],
          "Label": {
            "default": {
              "en": "Availability Zone",
              "zh-cn": "Availability zone"
            }
          }
        },
        {
          "Parameters": [
            "InstanceType",
            "InstancePassword"
          ],
          "Label": {
            "default": {
              "en": "Elastic Compute Service",
              "zh-cn": "Elastic Compute Service"
            }
          }
        },
        {
          "Parameters": [
            "RedisInstancePassword"
          ],
          "Label": {
            "default": {
              "en": "ApsaraDB for Redis",
              "zh-cn": "ApsaraDB for Redis"
            }
          }
        },
        {
          "Parameters": [
            "ADBPGAccount",
            "ADBPGPassword"
          ],
          "Label": {
            "default": {
              "en": "AnalyticDB for PostgreSQL",
              "zh-cn": "AnalyticDB for PostgreSQL"
            }
          }
        },
        {
          "Parameters": [
            "DBInstanceClass",
            "RdsDatabaseName",
            "PostgresSQLUserName",
            "PostgresSQLPassword"
          ],
          "Label": {
            "default": {
              "en": "ApsaraDB RDS for PostgreSQL",
              "zh-cn": "ApsaraDB RDS for PostgreSQL"
            }
          }
        },
        {
          "Parameters": [
            "NamespaceName"
          ],
          "Label": {
            "default": {
              "en": "Serverless App Engine",
              "zh-cn": "Serverless App Engine"
            }
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:internet-application-development:Deploy a production-ready Dify platform using Serverless App Engine-tech_solu_251"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [Public templates that contain this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::SAE::Application).
