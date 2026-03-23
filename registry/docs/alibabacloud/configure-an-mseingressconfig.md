An MseIngressConfig is a CustomResourceDefinition (CRD) that is provided by Microservices Engine (MSE) Ingress Controller. MseIngressConfigs are used to manage the lifecycles of MSE cloud-native gateways and configure Ingress listening options and global settings. This topic describes how to use an MseIngressConfig to create, reuse, and delete an MSE cloud-native gateway. This topic also describes how to use an MseIngressConfig to configure global IP address blacklists and whitelists for access control at the gateway level and activate Simple Log Service and Managed Service for OpenTelemetry.

## Background information

MSE Ingress Controller listens to the resource that is defined by an MseIngressConfig in a cluster and dynamically maintains the lifecycle of the cloud-native gateway that corresponds to the resource and the association between the gateway and cluster in real time. The cluster can be a Container Service for Kubernetes (ACK) managed cluster, ACK Serverless cluster, or ACS cluster.

After the cloud-native gateway is associated with the API server of the cluster, the control plane of the MSE cloud-native gateway can obtain the changes of Ingress resources, and dynamically update the routing rules of the MSE cloud-native gateway. After the MSE cloud-native gateway receives a request, the gateway matches the request with an Ingress routing rule and routes the request to the pod that corresponds to the backend service based on the routing rule.

The following content describes the relationships among services, Ingress resources, IngressClass resources, MseIngressConfigs, and MSE Ingress Controller in a Kubernetes cluster:

-   **Service**: A service is an abstraction of backend services. A service can represent a group of replicated backend services.
    
-   **Ingress**: An Ingress contains reverse proxy rules. An Ingress specifies the service to which HTTP or HTTPS requests are routed. For example, an Ingress routes requests to different services based on the hostnames and URLs in the requests.
    
-   **IngressClass**: An IngressClass resource provides the description of an Ingress controller. An IngressClass resource is used to declare the implementation of an Ingress controller in a Kubernetes cluster. The Ingress resources that are associated with an IngressClass resource can be parsed by the Ingress controller that is declared in the IngressClass resource. You must associate an MseIngressConfig with the Parameter field of the IngressClass to implement the traffic management rule that is specified in the parsed Ingress resource description.
    
-   **MseIngressConfig**: An MseIngressConfig is a CRD that is provided by MSE Ingress Controller. An MseIngressConfig provides basic information about a cloud-native gateway.
    
-   **MSE Ingress Controller**: MSE Ingress Controller works as a control plane that is used to manage MSE cloud-native gateways and their configurations. MSE Ingress Controller does not work as a network data plane. MSE Ingress Controller is used to listen to Ingress resources defined by MseIngressConfigs in a cluster and coordinate MSE cloud-native gateways to implement the traffic management rule that is specified in the parsed Ingress resource description.
    

The following figure shows how MSE Ingress Controller works.![ingress的应用场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1876125761/p524284.png)

## Introduction to MseIngressConfigs

### Description

An MseIngressConfig is a CRD that is provided by MSE Ingress Controller. MSE Ingress Controller uses an MseIngressConfig to manage the lifecycle and global settings of an MSE cloud-native gateway.

**Note**

One MseIngressConfig corresponds to one MSE cloud-native gateway. If you want to use multiple MSE cloud-native gateways, you must create multiple MseIngressConfigs. In scenarios except for [reuse scenarios](#section-xvv-696-vaj), if you delete an MseIngressConfig, the MSE cloud-native gateway that corresponds to the MseIngressConfig is also deleted.

The following sample code shows the complete configuration of an MseIngressConfig:

```
apiVersion: mse.alibabacloud.com/v1alpha1
kind: MseIngressConfig
metadata:
  name: test
spec:
  name: mse-ingress
  common:
    pay:
      payType: POSTPAY
    instance:
      spec: 4c8g
      replicas: 3
    network:
      vSwitches:
      - "vsw-1"
      - "vsw-2"
      publicSLBSpec: slb.s2.small
    securityGroupType: normal
  global:
    tls:
      enableHardwareAcceleration: true
    ipAccessControl:
      whitelist:
      - 1.1.XX.XX
      - 2.2.XX.XX
  monitor:
    logging:
      sls:
        reuseProject: "xxx" # If this parameter is left empty, the default setting is used.
    tracing:
      xTrace:
        sampleRate: "100"
  ingress:
    local:
      ingressClass:  mse
      watchNamespace: "" # If this parameter is left empty, the cloud-native gateway listens to the Ingress resources in all namespaces.
```

**Parameter**

**Description**

**Required**

**Default value**

name

The name of the gateway.

No

mse-ingress

common.pay.payType

The billing method.

Only the pay-as-you-go billing method is supported.

No

If you do not configure this parameter, the system automatically uses the pay-as-you-go billing method.

POSTPAY

common.instance.spec

The specifications of the gateway.

Valid values:

-   2c4g
    
-   4c8g
    
-   8c16g
    
-   16c32g
    

No

4c8g

common.instance.replicas

The number of replicas of the gateway.

Valid values: 0 to 30.

No

3

common.network.vSwitches

The primary and secondary vSwitches. Specify the primary vSwitch first.

You must specify at least one vSwitch and up to two vSwitches. If you do not specify this parameter, the vSwitch on the node on which the pod of MSE Ingress Controller is deployed is used.

No

None

common.network.publicSLBSpec

The specifications of the Internet-facing Server Load Balancer (SLB) instance that you purchase for the cloud-native gateway.

Valid values:

-   slb.s1.small
    
-   slb.s2.small
    
-   slb.s2.medium
    
-   slb.s3.small
    
-   slb.s3.medium
    
-   slb.s3.large
    

No

slb.s2.small

common.network.privateSLBSpec

The specifications of the internal-facing SLB instance that you purchase for the cloud-native gateway.

Valid values:

-   slb.s1.small
    
-   slb.s2.small
    
-   slb.s2.medium
    
-   slb.s3.small
    
-   slb.s3.medium
    
-   slb.s3.large
    

No

slb.s2.small

common.securityGroupType

The type of the security group.

Valid values:

-   enterprise: advanced security group
    
-   normal: basic security group
    

No

normal

global.tls.enableHardwareAcceleration

Specifies whether to enable Transport Layer Security (TLS) hardware acceleration.

TLS hardware acceleration can significantly improve the processing performance of HTTPS traffic.

No

true

global.ipAccessControl.whitelist

The global IP address whitelist.

No

Not configured

global.ipAccessControl.blacklist

The global IP address blacklist.

No

Not configured

monitor.logging.sls

Specifies whether to activate Simple Log Service.

If you want to activate Simple Log Service, you must grant permissions on Simple Log Service to MSE Ingress Controller.

No

false

monitor.logging.sls.reuseProject

The Simple Log Service project to which access logs are delivered.

Valid values:

-   Left empty: indicates the project that is created by default.
    
-   Specified value: indicates the specified existing project.
    

No

Left empty

monitor.tracing.xTrace

Specifies whether to enable xTrace tracing analysis.

No

By default, this feature is disabled. You cannot enable xTrace tracing analysis and OpenTelemetry tracing analysis at the same time.

monitor.tracing.xTrace.sampleRate

The sampling rate for xTrace tracing analysis.

No

0

monitor.tracing.openTelemetry

Specifies whether to enable OpenTelemetry tracing analysis.

No

By default, this feature is disabled. You cannot enable xTrace tracing analysis and OpenTelemetry tracing analysis at the same time.

monitor.tracing.openTelemetry.sampleRate

The sampling rate for OpenTelemetry tracing analysis.

No

100

ingress.local.ingressClass

The IngressClass resource that is associated with Ingress resources the cloud-native gateway listens to.

Valid values:

-   Not configured: No Ingress resources are listened to.
    
-   `mse`: Ingress resources whose IngressClass is mse are listened to.
    
-   Left empty "": All the Ingress resources are listened to.
    
-   nginx: Ingress resources whose IngressClass is nginx or Ingress resources with which no IngressClass is associated are listened to.
    
-   Other values: Ingress resources that are associated with a specified IngressClass are listened to.
    

**Note**

The IngressClass resource that you use to associate with an MseIngressConfig takes precedence over the IngressClass resource that is specified by this parameter.

No

Not configured

ingress.local.watchNamespace

The cluster namespace whose Ingress resources are listened to by the cloud-native gateway.

Valid values:

-   Left empty: Ingress resources in all the cluster namespaces are listened to.
    
-   Specified value: Ingress resources in a specified namespace are listened to. Only one namespace can be specified.
    

No

Left empty

### Status description

After you create an MseIngressConfig, you can view the status of the MseIngressConfig by using the `kubectl get mseingressconfig` command. The status of the MseIngressConfig changes in the following order: Pending > Running > Listening. Status description:

-   Pending: indicates that the cloud-native gateway is being created. The creation process takes about 3 minutes.
    
-   Running: indicates that the cloud-native gateway is created and is running.
    
-   Listening: indicates that the cloud-native gateway is running and is listening to Ingress resources in a cluster.
    
-   Failed: indicates that the cloud-native gateway is invalid. You can view Message in the Status field to identify the cause.
    

### Tag description

Resource tags are added to MSE cloud-native gateways that are created or reused by using MseIngressConfigs. You can view the tags in the basic information section of MSE cloud-native gateways in the [MSE console](https://mse.console.alibabacloud.com/#/microgw).

**Important**

To prevent negative impacts on your gateways, do not edit the tags that are described in the following table in the MSE console.

**Tag name**

**Description**

**ack.aliyun.com**

Identifies the ingress traffic of an ACK cluster that is managed by an MSE cloud-native gateway.

**ingress.k8s.alibaba/MseIngressConfig**

Identifies the MseIngressConfig that is associated with an MSE cloud-native gateway.

**kubernetes.reused.by.user**

Identifies whether an MSE cloud-native gateway is reused. If you delete the MseIngressConfig that is associated with an MSE cloud-native gateway in reuse scenarios, the MSE cloud-native gateway is not deleted.

## Create an MSE cloud-native gateway

1.  Configure an MseIngressConfig.
    
    The following sample code provides an example on how to create an MSE cloud-native gateway named mse-ingress. The gateway has three replicas and uses the specifications of 2 vCPUs and 4 GB of memory. You can modify other configurations of the MseIngressConfig based on your business requirements.
    
    ```
    apiVersion: mse.alibabacloud.com/v1alpha1
    kind: MseIngressConfig
    metadata:
      name: test
    spec:
      name: mse-ingress
      common:
        instance:
          spec: 2c4g
          replicas: 3
    ```
    
2.  Create an IngressClass resource in the ACK cluster and associate the IngressClass resource with the MseIngressConfig.
    
    Create an IngressClass resource in the ACK cluster and use spec.parameters to associate the IngressClass resource with the MseIngressConfig that you created to declare MSE Ingress Controller in the ACK cluster. This way, the Ingress resources associated with the IngressClass resource in the cluster are processed and implemented by the MSE cloud-native gateway that is associated with the preceding MseIngressConfig.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: IngressClass
    metadata:
      name: mse
    spec:
      controller: mse.alibabacloud.com/ingress
      parameters:
        apiGroup: mse.alibabacloud.com
        kind: MseIngressConfig
        name: test
    ```
    

## Reuse an existing MSE cloud-native gateway

If you want to reuse an existing MSE cloud-native gateway, you can set `spec.id` to the unique ID of the MSE cloud-native gateway in the gw-xxx format and use `spec.override` to control whether to overwrite the relevant configuration of the MSE cloud-native gateway based on an MseIngressConfig when you create the MseIngressConfig.

The following sample code uses an MseIngressConfig to reuse an existing MSE cloud-native gateway. In this case, the system associates the gateway with an ACK cluster and allows the gateway to listen to the Ingress resources whose IngressClass is mse in the ACK cluster.

**Important**

-   In the following code, `spec.override` is set to `false`. This indicates that the Ingress listening options and global configurations of the existing MSE cloud-native gateway are not overwritten. If the existing MSE cloud-native gateway is not associated with the ACK cluster, the system automatically associates the gateway with the ACK cluster and configures the Ingress listening options to listen to the Ingress resources whose IngressClass is the same as the value of `spec.ingress.local.ingressClass` in the ACK cluster. In this example, the value of spec.ingress.local.ingressClass is mse. If the existing gateway is associated with the ACK cluster, the original Ingress listening options are not overwritten.
    
-   If you want to overwrite the Ingress listening options and global configurations of the existing MSE cloud-native gateway, you must make sure that the gateway parameter settings in the MseIngressConfig are valid. The parameters are related to Ingress listening options, hardware acceleration, global IP address whitelists and blacklists, and observability. Then, set `spec.override` to true. If the parameters are not specified in the MseIngressConfig and you set `spec.override` to true, the original parameter settings of the gateway are overwritten and your traffic may be negatively affected.
    

```
apiVersion: mse.alibabacloud.com/v1alpha1
kind: MseIngressConfig
metadata:
  name: reuse
spec:
  id: gw-xxxx
  override: false
  ingress:
    local:
      ingressClass: mse
```

**Parameter**

**Description**

spec.id

The ID of the MSE cloud-native gateway that you want to reuse. The ID must start with gw-.

spec.override

Specifies whether to overwrite the relevant configuration of the MSE cloud-native gateway based on the configuration of an MseIngressConfig.

-   If you set this parameter to `true`, the settings of the gateway parameters that are related to Ingress listening options, hardware acceleration, global IP address whitelists and blacklists, and observability are overwritten.
    
-   If you set this parameter to `false`, the settings of the gateway parameters that are related to Ingress listening options, hardware acceleration, global IP address whitelists and blacklists, and observability are not overwritten. However, if an existing gateway is not associated with the ACK cluster, the system automatically associates the gateway with the ACK cluster and configures the Ingress listening options to listen to the Ingress resources whose IngressClass is the same as the value of `spec.ingress.local.ingressClass` in the ACK cluster.
    

## Delete an MSE cloud-native gateway

One MseIngressConfig corresponds to one MSE cloud-native gateway. In scenarios except for reuse scenarios, if you delete an MseIngressConfig, the MSE cloud-native gateway that corresponds to the MseIngressConfig is also deleted.

The following table describes the deletion policies.

**Gateway billing method**

**Gateway automatically created by MSE Ingress Controller**

**Gateway reused in the console**

Pay-as-you-go

If an MseIngressConfig is deleted, the associated gateway is also deleted.

If an MseIngressConfig is deleted, the associated gateway retains.

Subscription

N/A.

If an MseIngressConfig is deleted, the associated gateway retains.

Run the following command to delete an MseIngressConfig:

```
kubectl delete mseingressconfig your-config-name
```

## Configure IP address whitelists and blacklists for gateways

### Configure an IP address whitelist

You can configure a global IP address whitelist for an MSE Ingress gateway to allow only the source IP addresses in the whitelist to access the gateway.

The following sample code allows you to access the MSE Ingress gateway only if the source IP address is 1.1.XX.XX or the CIDR block is 2.0.XX.XX/8.

```
apiVersion: mse.alibabacloud.com/v1alpha1
kind: MseIngressConfig
metadata:
   name: test
spec:
   ...
  global:
    ipAccessControl:
      whitelist:
      - 1.1.XX.XX
      - 2.0.XX.XX/8
   ...
```

### Configure an IP address blacklist

Configure a global IP address blacklist for an MSE Ingress gateway. This way, you can deny access to an MSE Ingress gateway from source IP addresses in the blacklist.

The following sample code denies access to an MSE Ingress gateway from the source IP address 1.1.XX.XX or the CIDR block 2.0.XX.XX/8.

```
apiVersion: mse.alibabacloud.com/v1alpha1
kind: MseIngressConfig
metadata:
   name: test
spec:
   ...
  global:
    ipAccessControl:
      blacklist:
      - 1.1.XX.XX
      - 2.0.XX.XX/8
   ...
```

## Activate Simple Log Service

Before you activate Simple Log Service, you must make sure that you have granted the permissions on Simple Log Service to MSE Ingress Controller.

-   For more information about how to grant permissions on Simple Log Service to MSE Ingress Controller in an ACK managed cluster or an ACK dedicated cluster, see the "Grant permissions to MSE Ingress Controller in an ACK dedicated cluster" section in [Grant permissions to MSE Ingress Controller](/help/en/mse/user-guide/grant-permissions-to-mse-ingress-controller-in-ack-or-ask-clusters#section-0i8-972-j1a).
    
-   For more information about how to grant permissions on Simple Log Service to MSE Ingress Controller in an ACK Serverless cluster, see the "Grant permissions to MSE Ingress Controller in an ACK Serverless cluster" section in [Grant permissions to MSE Ingress Controller](/help/en/mse/user-guide/grant-permissions-to-mse-ingress-controller-in-ack-or-ask-clusters#section-z9r-x19-75r).
    
-   For more information about how to grant permissions on Simple Log Service to MSE Ingress Controller in an ACS cluster, see the "Grant permissions to MSE Ingress Controller in an ACS cluster" section in [Grant permissions to MSE Ingress Controller](/help/en/mse/user-guide/grant-permissions-to-mse-ingress-controller-in-ack-or-ask-clusters#2918c94ac5cxw).
    

The following sample code provides an example on how to configure an MSE Ingress gateway to deliver access logs to a project named `demo`.

```
apiVersion: mse.alibabacloud.com/v1alpha1
kind: MseIngressConfig
metadata:
   name: test
spec:
   ...
  monitor:
    logging:
      sls:
        # If the parameter is left empty, access logs are automatically delivered to the default project.
        reuseProject: "demo"
    ...
```

**Note**

To activate Simple Log Service, you must configure the reuseProject parameter. If you want to use the default project, you can leave reuseProject empty.

## Activate Managed Service for OpenTelemetry

After you configure the Alibaba Cloud Managed Service for OpenTelemetry service for a gateway, you can build an end-to-end tracing and monitoring system that helps diagnose and locate online issues.

The following sample code provides an example on how to configure Managed Service for OpenTelemetry for an MSE Ingress gateway and set the sampling rate to 100%.

```
apiVersion: mse.alibabacloud.com/v1alpha1
kind: MseIngressConfig
metadata:
   name: test
spec:
   ...
  monitor:
    tracing:
      xTrace:
        sampleRate: "100"
   ...
```
