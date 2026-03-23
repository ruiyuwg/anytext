The ALIYUN::CS::ClusterApplication resource type deploys containerized applications.

## Syntax

```
{
  "Type": "ALIYUN::CS::ClusterApplication",
  "Properties": {
    "YamlContent": String,
    "ClusterId": String,
    "DefaultNamespace": String,
    "RolePolicy": String,
    "Stage": String,
    "WaitUntil": List,
    "ValidationMode": String,
    "CreationMode": String,
    "DefaultNamespaceDeletion": Boolean
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

ClusterId

String

Yes

No

The ID of the cluster.

None

YamlContent

String

Yes

Yes

The YAML template content for deploying the application.

None

DefaultNamespace

String

No

No

The default namespace for the application.

None

RolePolicy

String

No

Yes

The role policy.

Before deploying the application, check the policy attached to the current user's role.

Valid values:

-   EnsureAdminRoleAndBinding (default): Automatically creates a role named `ros:application-admin:${user-id}\` with administrative permissions and binds it to the current user.
    
-   None: Performs no action.
    

Stage

String

No

No

The stage to run.

Valid values:

-   All (default): All stages, including creation, update, and deletion.
    
-   Delete: The delete stage. This means the YAML is applied to the cluster only during deletion of this resource.
    

ValidationMode

String

No

No

The validation mode.

Valid values:

-   Basic: Basic validation, such as checking whether the cluster exists.
    
-   Strict: In addition to basic validation, validates the legality of WaitUntil.
    

WaitUntil

List

No

Yes

After creation or update starts, wait until all conditions are met.

For more information, see [WaitUntil property](#f0a9b50626z0s).

CreationMode

String

No

No

The creation mode.

Valid values:

-   Normal: Creates new resources. Returns an error if the resource already exists.
    
-   Apply: Behaves like kubectl apply. Creates the resource if it does not exist. Updates it if it exists. During deletion, ROS deletes newly created applications but does not delete existing applications that were updated.
    

DefaultNamespaceDeletion

Boolean

No

Yes

Specifies whether to delete the namespace specified by DefaultNamespace.

If DefaultNamespace is one of 'default', 'kube-node-lease', 'kube-public', 'kube-system', or 'arms-prom', the namespace is never deleted—even if DefaultNamespaceDeletion is true.

## WaitUntil syntax

```
"WaitUntil": [
  {
   "ApiVersion": String,
   "FirstMatch": Boolean,
   "Timeout": Integer,
   "JsonPath": String,
   "Namespace": String,
   "Stage": String,
   "Name": String,
   "ValueType": String,
   "Kind": String,
   "Value": String,
   "Operator": String
  }
]
```

## WaitUntil properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

ApiVersion

String

No

Yes

The API version.

None

Kind

String

Yes

Yes

The Kubernetes resource type to query.

None

Name

String

Yes

Yes

The name of the Kubernetes resource to query.

None

Operator

String

Yes

Yes

The operator used to compare the value against the result of the JsonPath expression.

None

FirstMatch

Boolean

No

Yes

Returns only the first match from the JsonPath filter results.

Valid values:

-   true
    
-   false (default)
    

JsonPath

String

No

Yes

The JSON path expression used to filter output.

None

Namespace

String

No

Yes

The Kubernetes namespace where the resource resides.

Default value: DefaultNamespace.

Stage

String

No

No

The stage at which to wait.

Valid values:

-   Create/Update (default): Create and update stages.
    
-   Delete: Delete stage.
    

Timeout

Integer

No

Yes

The timeout period to wait for conditions to be met.

Unit: seconds.

Value

String

No

Yes

The value to compare against the result of the JsonPath expression.

None

ValueType

String

No

Yes

The type of the value.

Default value: String.

## Return values

Fn::GetAtt

-   ClusterId: The ID of the cluster.
    
-   WaitUntilData: A list of values for each JsonPath in WaitUntil.
    

## Examples

### **Scenario 1:** Deploy an application to a container.

[QuickStart](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/cluster-application-case1.yml&pageTitle=Deploy an application to a container&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ClusterId:
    Type: String
    Description: The ID of the kubernetes cluster.
    AssociationProperty: ALIYUN::CS::Cluster::ClusterId
Resources:
  ClusterApplication:
    Type: ALIYUN::CS::ClusterApplication
    Properties:
      YamlContent: |-
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          name: test-ut-storage
          annotations:
            storageclass.beta.kubernetes.io/is-default-class: "true"
            storageclass.kubernetes.io/is-default-class: "true"
        mountOptions:
        - nolock,tcp,noresvport
        - vers=3
        parameters:
          server:  1.1.1.1
          driver: flexvolume
        provisioner: alicloud/nas
        reclaimPolicy: Delete

        ---

        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: test-ut-configmap
        data:
          k1: v1
          k2: v2
      ClusterId:
        Ref: ClusterId
Outputs:
  ClusterId:
    Description: The ID of the cluster.
    Value:
      Fn::GetAtt:
        - ClusterApplication
        - ClusterId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ClusterId": {
      "Type": "String",
      "AssociationProperty":"ALIYUN::CS::Cluster::ClusterId",
      "Description": "The ID of the kubernetes cluster."
    }
  },
  "Resources": {
    "ClusterApplication": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "Properties": {
        "YamlContent": "apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: test-ut-storage\n  annotations:\n    storageclass.beta.kubernetes.io/is-default-class: \"true\"\n    storageclass.kubernetes.io/is-default-class: \"true\"\nmountOptions:\n- nolock,tcp,noresvport\n- vers=3\nparameters:\n  server:  1.1.1.1\n  driver: flexvolume\nprovisioner: alicloud/nas\nreclaimPolicy: Delete\n\n---\n\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: test-ut-configmap\ndata:\n  k1: v1\n  k2: v2",
        "ClusterId": {
          "Ref": "ClusterId"
        }
      }
    }
  },
  "Outputs": {
    "ClusterId": {
      "Description": "The ID of the cluster.",
      "Value": {
        "Fn::GetAtt": [
          "ClusterApplication",
          "ClusterId"
        ]
      }
    }
  }
}
```

### **Scenario 2:** Create a managed Kubernetes cluster and deploy an application to a container.

[QuickStart](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/cluster-application-case2.yml&pageTitle=Create a managed Kubernetes cluster and deploy an application to a container&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: 创建托管Kubernetes集群，配置VPC、节点池、HPA及日志服务，实现容器应用的自动伸缩与监控。
  en: Create a managed Kubernetes cluster, configure Virtual Private Cloud (VPC),
    node pools, Horizontal Pod Autoscaler (HPA), and Simple Log Service to enable automatic
    scaling and monitoring of containerized applications.
Parameters:
  CommonName:
    Type: String
    Default:  k8s-hpa-cluster
  SlsProjectName:
    Type: String
    Label:
      en: Name of SLS project
      zh-cn: 日志项目的名称
    Description:
      en: The name contains 3 to 36 characters. It must start and end with a lowercase letter or number. The value can contain lowercase letters, digits, and hyphens (-).
      zh-cn: 长度为3~36个字符。必须以小写英文字母或数字开头和结尾。可包含小写英文字母、数字和短划线（-）。
    AssociationProperty: AutoCompleteInput
    AssociationPropertyMetadata:
      Length: 5
      Prefix: k8s-hpa-sls-project-
      CharacterClasses:
        - Class: lowercase
          min: 1
  ManagedKubernetesClusterName:
    Type: String
    Label:
      en: ACK managed cluster name
      zh-cn: ACK managed cluster name
    AssociationProperty: AutoCompleteInput
    AssociationPropertyMetadata:
      Length: 5
      Prefix: k8s-hpa-cluster-
      CharacterClasses:
        - Class: lowercase
          min: 1
  ZoneId1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId2
    Label:
      en: Zone 1
      zh-cn: Zone 1
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Zone 2
      zh-cn: Zone 2
  InstanceType:
    Type: CommaDelimitedList
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      CreateACKClusterParams:
        NetworkPlugin: terway-eniip
    Label:
      en: Instance Type
      zh-cn: Instance type
  InstancePassword:
    NoEcho: true
    Type: String
    Description:
      en: >-
        Server login password. Length: 8–30 characters. It must contain at least three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/."
      zh-cn: >-
        Server logon password. Length: 8–30 characters. Must contain three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
    Label:
      en: Instance Password
      zh-cn: Instance password
    ConstraintDescription:
      en: >-
        Length: 8–30 characters. It must contain at least three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/."
      zh-cn: Length: 8–30 characters. Must contain three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
    Default: null
Resources:
  Vpc:
    Type: 'ALIYUN::ECS::VPC'
    Properties:
      CidrBlock: 10.0.0.0/8
      VpcName:
        Fn::Sub: ${CommonName}-vpc
  VSwitch1:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 10.0.0.0/24
      ZoneId:
        Ref: ZoneId1
      VSwitchName:
        Fn::Sub: ${CommonName}-vsw
  VSwitch2:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 10.0.1.0/24
      ZoneId:
        Ref: ZoneId2
      VSwitchName:
        Fn::Sub: ${CommonName}-vsw
  SecurityGroup:
    Type: 'ALIYUN::ECS::SecurityGroup'
    Properties:
      VpcId:
        Ref: Vpc
      SecurityGroupName:
        Fn::Sub: ${CommonName}-sg
      SecurityGroupIngress:
        - PortRange: 443/443
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 80/80
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
  SlsProject:
    Type: 'ALIYUN::SLS::Project'
    Properties:
      Name:
        Ref: SlsProjectName
  AliyunCSManagedAutoScalerRole:
    Type: 'ALIYUN::RAM::Role'
    Properties:
      RoleName: AliyunCSManagedAutoScalerRole
      Description: CS uses this role to access your resources in other Alibaba Cloud services.
      AssumeRolePolicyDocument:
        Version: '1'
        Statement:
          - Action: sts:AssumeRole
            Effect: Allow
            Principal:
              Service:
                - cs.aliyuncs.com
      MaxSessionDuration: 3600
      IgnoreExisting: true
      DeletionForce: true
      PolicyAttachments:
        System:
          - AliyunCSManagedAutoScalerRolePolicy
  AckCluster:
    Type: 'ALIYUN::CS::ManagedKubernetesCluster'
    DependsOn: AliyunCSManagedAutoScalerRole
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchIds:
        - Ref: VSwitch1
        - Ref: VSwitch2
      PodVswitchIds:
        - Ref: VSwitch1
        - Ref: VSwitch1
      Name:
        Ref: ManagedKubernetesClusterName
      KubernetesVersion: 1.31.1-aliyun.1
      ServiceCidr: 192.168.0.0/16
      ClusterSpec: ack.pro.small
      LoadBalancerSpec: slb.s2.small
      IsEnterpriseSecurityGroup: true
      SnatEntry: true
      NumOfNodes: 0
      EndpointPublicAccess: true
      Platform: AliyunLinux
      Addons:
        - Name: ack-node-local-dns
        - Name: terway-eniip
          Config: '{"IPVlan":"false","NetworkPolicy":"false","ENITrunking":"false"}'
        - Name: csi-plugin
        - Name: csi-provisioner
        - Name: storage-operator
          Config: '{"CnfsOssEnable":"false","CnfsNasEnable":"false"}'
        - Name: nginx-ingress-controller
          Disabled: true
        - Name: logtail-ds
          Config: '{"IngressDashboardEnabled":"true"}'
        - Name: alb-ingress-controller
          Version: ""
          Config:
            Fn::Sub: >-
              {"albIngress":{"AddressType":"Internet","ZoneMappings":{"${ZoneId1}":["${VSwitch1}"],
              "${ZoneId2}":["${VSwitch2}"]},"CreateDefaultALBConfig":true}}
        - Name: ack-helm-manager
        - Name: arms-prometheus
      ProxyMode: ipvs
      DeleteOptions:
        - ResourceType: ALB
          DeleteMode: delete
        - ResourceType: SLB
          DeleteMode: delete
        - ResourceType: SLS_Data
          DeleteMode: delete
        - ResourceType: SLS_ControlPlane
          DeleteMode: delete
        - ResourceType: PrivateZone
          DeleteMode: delete
  NodePools:
    Type: 'ALIYUN::CS::ClusterNodePool'
    Properties:
      ClusterId:
        Ref: AckCluster
      NodePoolInfo:
          Name: k8s-hpa-cluster-nodepool
      ScalingGroup:
        VSwitchIds:
          - Ref: VSwitch1
          - Ref: VSwitch2
        ZoneIds:
          - Ref: ZoneId1
          - Ref: ZoneId2
        SystemDiskCategory: cloud_essd
        SystemDiskPerformanceLevel: PL0
        SystemDiskSize: 40
        InstanceTypes:
          Ref: InstanceType
        LoginPassword:
          Ref: InstancePassword
        Platform: AliyunLinux
        ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      KubernetesConfig:
        Runtime: containerd
        RuntimeVersion: 1.6.28
      AutoScaling:
        Enable: true
        MinInstances: 2
        MaxInstances: 10
  Sleep:
    Type: 'ALIYUN::ROS::Sleep'
    DependsOn: NodePools
    Properties:
      CreateDuration: 300
  AckMetricsAdapter:
    Type: 'ALIYUN::CS::ClusterHelmApplication'
    DependsOn: Sleep
    Properties:
      Namespace: kube-system
      ChartUrl: 'https://aliacs-app-catalog.oss-cn-hangzhou.aliyuncs.com/charts-incubator/ack-alibaba-cloud-metrics-adapter-1.3.3.tgz'
      ClusterId:
        Ref: AckCluster
      Name: ack-alibaba-cloud-metrics-adapter
      ChartValues:
        AlibabaCloudMetricsAdapter:
          commonLabels: ''
          replicas: 1
          resources:
            metricsAdapterDeployment:
              resources:
                limits:
                  cpu: 0.5
                  memory: 1Gi
                requests:
                  cpu: 100m
                  memory: 200Mi
            configReloader:
              resources:
                limits:
                  cpu: 20m
                  memory: 30Mi
                requests:
                  cpu: 20m
                  memory: 30Mi
          listenPort: 443
          costWeights:
            cpu: '1.0'
            memory: '0.0'
          image:
            repository: registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/alibaba-cloud-metrics-adapter-amd64
            tag: v0.2.7-f1ee5c3-aliyun
            pullPolicy: Always
          nameOverride: ''
          fullnameOverride: ''
          service:
            type: ClusterIP
          serviceAccountName: ack-alibaba-cloud-metrics-adapter
          annotations: { }
          nodeSelector: { }
          tolerations: [ ]
          env:
            - AccessKeyId: ''
            - AccessKeySecret: ''
            - Region: ''
          affinity: { }
          prometheus:
            enabled: true
            url: { }
            metricsRelistInterval: 1m
            logLevel: 5
            adapter:
              rules:
                default: false
                custom:
                  - seriesQuery: container_memory_working_set_bytes{namespace!="",pod!=""}
                    resources:
                      overrides:
                        namespace:
                          resource: namespace
                        pod:
                          resource: pod
                    name:
                      matches: ^(.*)_bytes
                      as: ${1}_bytes_per_second
                    metricsQuery: sum(<<.Series>>{<<.LabelMatchers>>}) by (<<.GroupBy>>)
                  - seriesQuery: container_cpu_usage_seconds_total{namespace!="",pod!=""}
                    resources:
                      overrides:
                        namespace:
                          resource: namespace
                        pod:
                          resource: pod
                    name:
                      matches: ^(.*)_seconds_total
                      as: ${1}_core_per_second
                    metricsQuery: sum(rate(<<.Series>>{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)
        ConfigReloader:
          image:
            repository: registry-vpc.cn-hangzhou.aliyuncs.com/acs/configmap-reload
            tag: v0.0.1
  InstallBackendApp:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: AckMetricsAdapter
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: coffee
          spec:
            replicas: 2
            selector:
              matchLabels:
                app: coffee
            template:
              metadata:
                labels:
                  app: coffee
              spec:
                containers:
                - name: coffee
                  image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest
                  ports:
                  - containerPort: 80
                  resources:
                    limits:
                      cpu: 500m
                      memory: 1Gi
                    requests:
                      cpu: 500m
                      memory: 512Mi
          ---
          apiVersion: v1
          kind: Service
          metadata:
            name: coffee-svc
          spec:
            ports:
            - port: 80
              targetPort: 80
              protocol: TCP
            selector:
              app: coffee
            type: NodePort
          ---
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: tea
          spec:
            replicas: 2
            selector:
              matchLabels:
                app: tea
            template:
              metadata:
                labels:
                  app: tea
              spec:
                containers:
                - name: tea
                  image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest
                  ports:
                  - containerPort: 80
                  resources:
                    limits:
                      cpu: 500m
                      memory: 1Gi
                    requests:
                      cpu: 500m
                      memory: 512Mi
          ---
          apiVersion: v1
          kind: Service
          metadata:
            name: tea-svc
          spec:
            ports:
            - port: 80
              targetPort: 80
              protocol: TCP
            selector:
              app: tea
            type: NodePort
  AlbConfig:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: InstallBackendApp
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: alibabacloud.com/v1
          kind: AlbConfig
          metadata:
            name: k8s-hpa-alb-config
          spec:
            config:
              name: k8s-hpa-alb
              addressType: Internet
              zoneMappings:
              - vSwitchId: ${VSwitch1}
              - vSwitchId: ${VSwitch2}
              accessLogConfig:
                logProject: ${SlsProject}
                logStore: "alb_k8s_hpa_sls_logstore"
            listeners:
              - port: 80
                protocol: HTTP
  IngressClass:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: AlbConfig
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: networking.k8s.io/v1
          kind: IngressClass
          metadata:
            name: k8s-hpa-alb-ingress-class
          spec:
            controller: ingress.k8s.alibabacloud/alb
            parameters:
              apiGroup: alibabacloud.com
              kind: AlbConfig
              name: k8s-hpa-alb-config
  Ingress:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: IngressClass
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: networking.k8s.io/v1
          kind: Ingress
          metadata:
            name: k8s-hpa-alb-ingress
          spec:
            ingressClassName: k8s-hpa-alb-ingress-class
            rules:
             - http:
                paths:
                - path: /tea
                  pathType: ImplementationSpecific
                  backend:
                    service:
                      name: tea-svc
                      port:
                        number: 80
                - path: /coffee
                  pathType: ImplementationSpecific
                  backend:
                    service:
                      name: coffee-svc
                      port: 
                        number: 80
  Hpa:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: WaitAlbIngress
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: autoscaling/v2
          kind: HorizontalPodAutoscaler
          metadata:
            name: k8s-alb-tea-hpa
          spec:
            scaleTargetRef:
              apiVersion: apps/v1
              kind: Deployment
              name: tea
            minReplicas: 2
            maxReplicas: 10
            metrics:
              - type: External
                external:
                  metric:
                    name: sls_alb_ingress_qps
                    selector:
                      matchLabels:
                        sls.project: ${SlsProject}
                        sls.logstore: "alb_k8s_hpa_sls_logstore" 
                        sls.ingress.route: "default-tea-svc-80"
                  target:
                    type: AverageValue
                    averageValue: 2
              - resource:
                  name: cpu
                  target:
                    averageUtilization: 80
                    type: Utilization
                type: Resource
              - resource:
                  name: memory
                  target:
                    averageUtilization: 80
                    type: Utilization
                type: Resource
  WaitAlbIngress:
    Type: 'ALIYUN::ROS::Sleep'
    DependsOn: Ingress
    Properties:
      CreateDuration: 120
  IngressInfo:
    Type: 'DATASOURCE::CS::ClusterApplicationResources'
    DependsOn: WaitAlbIngress
    Properties:
      ClusterId:
        Ref: AckCluster
      Kind: Ingress
      Namespace: default
      JsonPath: $.items.[0].status.loadBalancer.ingress.[0].hostname
      FirstMatch: true
Outputs:
  TeaUrl:
    Description:
      zh-cn: tea服务访问地址。
      en: The endpoint for the tea service.
    Value:
      'Fn::Sub': http://${IngressInfo}/tea
  CoffeeUrl:
    Description:
      zh-cn: coffee服务访问地址。
      en: The endpoint for the coffee service.
    Value:
      'Fn::Sub': http://${IngressInfo}/coffee
Metadata:
  'ALIYUN::ROS::Interface':
    ParameterGroups:
      - Parameters:
          - SlsProjectName
          - ManagedKubernetesClusterName
          - ZoneId1
          - ZoneId2
          - InstanceType
          - InstancePassword
    TemplateTags:
      - acs:technical-solution:micro:Implement horizontal elastic scaling for containerized applications using HPA-tech_solu_125
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "创建托管Kubernetes集群，配置VPC、节点池、HPA及日志服务，实现容器应用的自动伸缩与监控。",
    "en": "Create a managed Kubernetes cluster, configure Virtual Private Cloud (VPC), node pools, Horizontal Pod Autoscaler (HPA), and Simple Log Service to enable automatic scaling and monitoring of containerized applications."
  },
  "Parameters": {
    "CommonName": {
      "Type": "String",
      "Default": "k8s-hpa-cluster"
    },
    "SlsProjectName": {
      "Type": "String",
      "Label": {
        "en": "Name of SLS project",
        "zh-cn": "日志项目的名称"
      },
      "Description": {
        "en": "The name contains 3 to 36 characters. It must start and end with a lowercase letter or number. The value can contain lowercase letters, digits, and hyphens (-).",
        "zh-cn": "长度为3~36个字符。必须以小写英文字母或数字开头和结尾。可包含小写英文字母、数字和短划线（-）。"
      },
      "AssociationProperty": "AutoCompleteInput",
      "AssociationPropertyMetadata": {
        "Length": 5,
        "Prefix": "k8s-hpa-sls-project-",
        "CharacterClasses": [
          {
            "Class": "lowercase",
            "min": 1
          }
        ]
      }
    },
    "ManagedKubernetesClusterName": {
      "Type": "String",
      "Label": {
        "en": "ACK managed cluster name",
        "zh-cn": "ACK managed cluster name"
      },
      "AssociationProperty": "AutoCompleteInput",
      "AssociationPropertyMetadata": {
        "Length": 5,
        "Prefix": "k8s-hpa-cluster-",
        "CharacterClasses": [
          {
            "Class": "lowercase",
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
        "en": "Zone 1",
        "zh-cn": "Zone 1"
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
        "en": "Zone 2",
        "zh-cn": "Zone 2"
      }
    },
    "InstanceType": {
      "Type": "CommaDelimitedList",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "PostPaid",
        "SystemDiskCategory": "cloud_essd",
        "CreateACKClusterParams": {
          "NetworkPlugin": "terway-eniip"
        }
      },
      "Label": {
        "en": "Instance Type",
        "zh-cn": "Instance type"
      }
    },
    "InstancePassword": {
      "NoEcho": true,
      "Type": "String",
      "Description": {
        "en": "Server login password. Length: 8–30 characters. It must contain at least three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.",
        "zh-cn": "Server logon password. Length: 8–30 characters. Must contain three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/."
      },
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance password"
      },
      "ConstraintDescription": {
        "en": "Length: 8–30 characters. It must contain at least three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.",
        "zh-cn": "Length: 8–30 characters. Must contain three of the following: uppercase letters, lowercase letters, digits, or special characters ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/."
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password",
      "Default": null
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "10.0.0.0/8",
        "VpcName": {
          "Fn::Sub": "${CommonName}-vpc"
        }
      }
    },
    "VSwitch1": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "10.0.0.0/24",
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-vsw"
        }
      }
    },
    "VSwitch2": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "10.0.1.0/24",
        "ZoneId": {
          "Ref": "ZoneId2"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-vsw"
        }
      }
    },
    "SecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupName": {
          "Fn::Sub": "${CommonName}-sg"
        },
        "SecurityGroupIngress": [
          {
            "PortRange": "443/443",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "80/80",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          }
        ]
      }
    },
    "SlsProject": {
      "Type": "ALIYUN::SLS::Project",
      "Properties": {
        "Name": {
          "Ref": "SlsProjectName"
        }
      }
    },
    "AliyunCSManagedAutoScalerRole": {
      "Type": "ALIYUN::RAM::Role",
      "Properties": {
        "RoleName": "AliyunCSManagedAutoScalerRole",
        "Description": "CS uses this role to access your resources in other Alibaba Cloud services.",
        "AssumeRolePolicyDocument": {
          "Version": "1",
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Effect": "Allow",
              "Principal": {
                "Service": [
                  "cs.aliyuncs.com"
                ]
              }
            }
          ]
        },
        "MaxSessionDuration": 3600,
        "IgnoreExisting": true,
        "DeletionForce": true,
        "PolicyAttachments": {
          "System": [
            "AliyunCSManagedAutoScalerRolePolicy"
          ]
        }
      }
    },
    "AckCluster": {
      "Type": "ALIYUN::CS::ManagedKubernetesCluster",
      "DependsOn": "AliyunCSManagedAutoScalerRole",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchIds": [
          {
            "Ref": "VSwitch1"
          },
          {
            "Ref": "VSwitch2"
          }
        ],
        "PodVswitchIds": [
          {
            "Ref": "VSwitch1"
          },
          {
            "Ref": "VSwitch1"
          }
        ],
        "Name": {
          "Ref": "ManagedKubernetesClusterName"
        },
        "KubernetesVersion": "1.31.1-aliyun.1",
        "ServiceCidr": "192.168.0.0/16",
        "ClusterSpec": "ack.pro.small",
        "LoadBalancerSpec": "slb.s2.small",
        "IsEnterpriseSecurityGroup": true,
        "SnatEntry": true,
        "NumOfNodes": 0,
        "EndpointPublicAccess": true,
        "Platform": "AliyunLinux",
        "Addons": [
          {
            "Name": "ack-node-local-dns"
          },
          {
            "Name": "terway-eniip",
            "Config": "{\"IPVlan\":\"false\",\"NetworkPolicy\":\"false\",\"ENITrunking\":\"false\"}"
          },
          {
            "Name": "csi-plugin"
          },
          {
            "Name": "csi-provisioner"
          },
          {
            "Name": "storage-operator",
            "Config": "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"false\"}"
          },
          {
            "Name": "nginx-ingress-controller",
            "Disabled": true
          },
          {
            "Name": "logtail-ds",
            "Config": "{\"IngressDashboardEnabled\":\"true\"}"
          },
          {
            "Name": "alb-ingress-controller",
            "Version": "",
            "Config": {
              "Fn::Sub": "{\"albIngress\":{\"AddressType\":\"Internet\",\"ZoneMappings\":{\"${ZoneId1}\":[\"${VSwitch1}\"], \"${ZoneId2}\":[\"${VSwitch2}\"]},\"CreateDefaultALBConfig\":true}}"
            }
          },
          {
            "Name": "ack-helm-manager"
          },
          {
            "Name": "arms-prometheus"
          }
        ],
        "ProxyMode": "ipvs",
        "DeleteOptions": [
          {
            "ResourceType": "ALB",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "SLB",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "SLS_Data",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "SLS_ControlPlane",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "PrivateZone",
            "DeleteMode": "delete"
          }
        ]
      }
    },
    "NodePools": {
      "Type": "ALIYUN::CS::ClusterNodePool",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "NodePoolInfo": {
          "Name": "k8s-hpa-cluster-nodepool"
        },
        "ScalingGroup": {
          "VSwitchIds": [
            {
              "Ref": "VSwitch1"
            },
            {
              "Ref": "VSwitch2"
            }
          ],
          "ZoneIds": [
            {
              "Ref": "ZoneId1"
            },
            {
              "Ref": "ZoneId2"
            }
          ],
          "SystemDiskCategory": "cloud_essd",
          "SystemDiskPerformanceLevel": "PL0",
          "SystemDiskSize": 40,
          "InstanceTypes": {
            "Ref": "InstanceType"
          },
          "LoginPassword": {
            "Ref": "InstancePassword"
          },
          "Platform": "AliyunLinux",
          "ImageId": "aliyun_3_9_x64_20G_alibase_20231219.vhd"
        },
        "KubernetesConfig": {
          "Runtime": "containerd",
          "RuntimeVersion": "1.6.28"
        },
        "AutoScaling": {
          "Enable": true,
          "MinInstances": 2,
          "MaxInstances": 10
        }
      }
    },
    "Sleep": {
      "Type": "ALIYUN::ROS::Sleep",
      "DependsOn": "NodePools",
      "Properties": {
        "CreateDuration": 300
      }
    },
    "AckMetricsAdapter": {
      "Type": "ALIYUN::CS::ClusterHelmApplication",
      "DependsOn": "Sleep",
      "Properties": {
        "Namespace": "kube-system",
        "ChartUrl": "https://aliacs-app-catalog.oss-cn-hangzhou.aliyuncs.com/charts-incubator/ack-alibaba-cloud-metrics-adapter-1.3.3.tgz",
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "Name": "ack-alibaba-cloud-metrics-adapter",
        "ChartValues": {
          "AlibabaCloudMetricsAdapter": {
            "commonLabels": "",
            "replicas": 1,
            "resources": {
              "metricsAdapterDeployment": {
                "resources": {
                  "limits": {
                    "cpu": 0.5,
                    "memory": "1Gi"
                  },
                  "requests": {
                    "cpu": "100m",
                    "memory": "200Mi"
                  }
                }
              },
              "configReloader": {
                "resources": {
                  "limits": {
                    "cpu": "20m",
                    "memory": "30Mi"
                  },
                  "requests": {
                    "cpu": "20m",
                    "memory": "30Mi"
                  }
                }
              }
            },
            "listenPort": 443,
            "costWeights": {
              "cpu": "1.0",
              "memory": "0.0"
            },
            "image": {
              "repository": "registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/alibaba-cloud-metrics-adapter-amd64",
              "tag": "v0.2.7-f1ee5c3-aliyun",
              "pullPolicy": "Always"
            },
            "nameOverride": "",
            "fullnameOverride": "",
            "service": {
              "type": "ClusterIP"
            },
            "serviceAccountName": "ack-alibaba-cloud-metrics-adapter",
            "annotations": {},
            "nodeSelector": {},
            "tolerations": [],
            "env": [
              {
                "AccessKeyId": ""
              },
              {
                "AccessKeySecret": ""
              },
              {
                "Region": ""
              }
            ],
            "affinity": {},
            "prometheus": {
              "enabled": true,
              "url": {},
              "metricsRelistInterval": "1m",
              "logLevel": 5,
              "adapter": {
                "rules": {
                  "default": false,
                  "custom": [
                    {
                      "seriesQuery": "container_memory_working_set_bytes{namespace!=\"\",pod!=\"\"}",
                      "resources": {
                        "overrides": {
                          "namespace": {
                            "resource": "namespace"
                          },
                          "pod": {
                            "resource": "pod"
                          }
                        }
                      },
                      "name": {
                        "matches": "^(.*)_bytes",
                        "as": "${1}_bytes_per_second"
                      },
                      "metricsQuery": "sum(<<.Series>>{<<.LabelMatchers>>}) by (<<.GroupBy>>)"
                    },
                    {
                      "seriesQuery": "container_cpu_usage_seconds_total{namespace!=\"\",pod!=\"\"}",
                      "resources": {
                        "overrides": {
                          "namespace": {
                            "resource": "namespace"
                          },
                          "pod": {
                            "resource": "pod"
                          }
                        }
                      },
                      "name": {
                        "matches": "^(.*)_seconds_total",
                        "as": "${1}_core_per_second"
                      },
                      "metricsQuery": "sum(rate(<<.Series>>{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)"
                    }
                  ]
                }
              }
            }
          },
          "ConfigReloader": {
            "image": {
              "repository": "registry-vpc.cn-hangzhou.aliyuncs.com/acs/configmap-reload",
              "tag": "v0.0.1"
            }
          }
        }
      }
    },
    "InstallBackendApp": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "AckMetricsAdapter",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: coffee\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: coffee\n  template:\n    metadata:\n      labels:\n        app: coffee\n    spec:\n      containers:\n      - name: coffee\n        image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            cpu: 500m\n            memory: 1Gi\n          requests:\n            cpu: 500m\n            memory: 512Mi\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: coffee-svc\nspec:\n  ports:\n  - port: 80\n    targetPort: 80\n    protocol: TCP\n  selector:\n    app: coffee\n  type: NodePort\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: tea\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: tea\n  template:\n    metadata:\n      labels:\n        app: tea\n    spec:\n      containers:\n      - name: tea\n        image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            cpu: 500m\n            memory: 1Gi\n          requests:\n            cpu: 500m\n            memory: 512Mi\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: tea-svc\nspec:\n  ports:\n  - port: 80\n    targetPort: 80\n    protocol: TCP\n  selector:\n    app: tea\n  type: NodePort"
        }
      }
    },
    "AlbConfig": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "InstallBackendApp",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: alibabacloud.com/v1\nkind: AlbConfig\nmetadata:\n  name: k8s-hpa-alb-config\nspec:\n  config:\n    name: k8s-hpa-alb\n    addressType: Internet\n    zoneMappings:\n    - vSwitchId: ${VSwitch1}\n    - vSwitchId: ${VSwitch2}\n    accessLogConfig:\n      logProject: ${SlsProject}\n      logStore: \"alb_k8s_hpa_sls_logstore\"\n  listeners:\n    - port: 80\n      protocol: HTTP"
        }
      }
    },
    "IngressClass": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "AlbConfig",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: networking.k8s.io/v1\nkind: IngressClass\nmetadata:\n  name: k8s-hpa-alb-ingress-class\nspec:\n  controller: ingress.k8s.alibabacloud/alb\n  parameters:\n    apiGroup: alibabacloud.com\n    kind: AlbConfig\n    name: k8s-hpa-alb-config"
        }
      }
    },
    "Ingress": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "IngressClass",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: k8s-hpa-alb-ingress\nspec:\n  ingressClassName: k8s-hpa-alb-ingress-class\n  rules:\n   - http:\n      paths:\n      - path: /tea\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: tea-svc\n            port:\n              number: 80\n      - path: /coffee\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: coffee-svc\n            port:\n              number: 80"
        }
      }
    },
    "Hpa": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "WaitAlbIngress",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: k8s-alb-tea-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: tea\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: External\n      external:\n        metric:\n          name: sls_alb_ingress_qps\n          selector:\n            matchLabels:\n              sls.project: ${SlsProject}\n              sls.logstore: \"alb_k8s_hpa_sls_logstore\" \n              sls.ingress.route: \"default-tea-svc-80\"\n        target:\n          type: AverageValue\n          averageValue: 2\n    - resource:\n        name: cpu\n        target:\n          averageUtilization: 80\n          type: Utilization\n      type: Resource\n    - resource:\n        name: memory\n        target:\n          averageUtilization: 80\n          type: Utilization\n      type: Resource"
        }
      }
    },
    "WaitAlbIngress": {
      "Type": "ALIYUN::ROS::Sleep",
      "DependsOn": "Ingress",
      "Properties": {
        "CreateDuration": 120
      }
    },
    "IngressInfo": {
      "Type": "DATASOURCE::CS::ClusterApplicationResources",
      "DependsOn": "WaitAlbIngress",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "Kind": "Ingress",
        "Namespace": "default",
        "JsonPath": "$.items.[0].status.loadBalancer.ingress.[0].hostname",
        "FirstMatch": true
      }
    }
  },
  "Outputs": {
    "TeaUrl": {
      "Description": {
        "zh-cn": "tea服务访问地址。",
        "en": "The endpoint for the tea service."
      },
      "Value": {
        "Fn::Sub": "http://${IngressInfo}/tea"
      }
    },
    "CoffeeUrl": {
      "Description": {
        "zh-cn": "coffee服务访问地址。",
        "en": "The endpoint for the coffee service."
      },
      "Value": {
        "Fn::Sub": "http://${IngressInfo}/coffee"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "SlsProjectName",
            "ManagedKubernetesClusterName",
            "ZoneId1",
            "ZoneId2",
            "InstanceType",
            "InstancePassword"
          ]
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:micro:Implement horizontal elastic scaling for containerized applications using HPA-tech_solu_125"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more information, see [public templates that include this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::CS::ClusterApplication).
