ApigConfig is a Custom Resource Definition (CRD) provided by the APIG Controller. You can use ApigConfig to manage the lifecycle of APIG gateway instances, configure Ingress listener options, and set global configurations. ApigConfig also lets you implement instance-level global IP access control using blacklists and whitelists, log collection, and Tracing Analysis.

## ApigConfig description

### Configuration description

ApigConfig is a CRD that the APIG Controller uses to manage the lifecycle and global configurations of APIG gateway instances.

> One ApigConfig corresponds to one APIG gateway instance. To use multiple APIG gateway instances, you must create multiple ApigConfigs.

> **Except in reuse scenarios**, deleting an ApigConfig will cascade delete the corresponding APIG gateway instance.

The following sample code shows a complete ApigConfig configuration.

```
apiVersion: apig.alibabacloud.com/v1alpha1
kind: ApigConfig
metadata:
  name: apig-ingress
spec:
  name: apig-ingress
  common:
    pay:
      payType: POSTPAY
    instance:
      spec: apigw.small.x1
    network:
      vSwitches:
      - "vsw-1"
      - "vsw-2"
      networkType: Internet
    securityGroupType: enterprise
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
        reuseProject: "xxx" # An empty value indicates that the default project is used.
    tracing:
      openTelemetry:
        sampleRate: "100"
  ingress:
    local:
      ingressClass:  apig
      watchNamespace: "" # "" indicates Ingress resources in all namespaces.
```

**Parameter**

**Description**

**Default value**

`name`

The name of the gateway.

apig-ingress

`common.pay.payType`

The billing method.

Currently, only pay-as-you-go is supported. If you do not configure this parameter, pay-as-you-go is used by default.

POSTPAY

`common.instance.spec`

The instance type of the gateway.

Valid values:

-   apigw.small.x1
    
-   apigw.small.x2
    
-   apigw.small.x4
    
-   apigw.medium.x1
    
-   apigw.medium.x2
    
-   apigw.medium.x3
    
-   apigw.large.x1
    
-   apigw.large.x2
    
-   apigw.large.x3
    

apigw.small.x1

`common.network.vSwitches`

The primary and secondary vSwitches. The primary vSwitch is listed first, followed by the secondary one.

Specify at least one and at most two vSwitches. If you leave this empty, the vSwitches are obtained from the node where the Controller pod runs.

None

`common.network.networkType`

The type of the Internet-facing SLB instance that is purchased for the gateway.

Valid values:

-   Internet
    
-   Intranet
    

Internet

`common.securityGroupType`

The type of the security group.

Valid values:

-   enterprise: advanced security group
    
-   normal: basic security group
    

normal

`global.tls.enableHardwareAcceleration`

Enables or disables TLS hardware acceleration.

Enabling this feature can significantly improve the performance of HTTPS traffic.

Enabled

`global.ipAccessControl.whitelist`

The global IP whitelist for access control.

Not configured

`global.ipAccessControl.blacklist`

The global IP blacklist for access control.

Not configured

`monitor.logging.sls`

Enables or disables Simple Log Service (SLS).

To enable this feature, grant the Controller the required SLS permissions.

shutdown

`monitor.logging.sls.reuseProject`

The destination project in SLS to which access logs are delivered.

Valid values:

-   Empty: A default project is created and used.
    
-   Specified value: An existing project is used.
    

Empty

`monitor.tracing.xTrace.sampleRate`

Sample rate for OpenTelemetry Tracing Analysis

0

`monitor.tracing.openTelemetry`

Enables or disables OpenTelemetry Tracing Analysis.

This option is disabled by default and is mutually exclusive with OpenTelemetry.

`monitor.tracing.openTelemetry.sampleRate`

The sample rate for OpenTelemetry Tracing Analysis.

100

`ingress.local.ingressClass`

The Ingress resources under a specific IngressClass in the cluster that the APIG gateway listens to.

Valid values:

-   Not configured: Does not listen to any Ingress resources.
    
-   Set to `apig`: Listens to Ingress resources whose IngressClass is apig.
    
-   Set to an empty string `""`: Listens to all Ingress resources.
    
-   Set to `nginx`: Listens to Ingress resources whose IngressClass is nginx or that are not associated with any IngressClass.
    
-   Set to another value: Listens to Ingress resources whose IngressClass is the specified value.
    

**Note**

This configuration has a lower priority than associating ApigConfig through an IngressClass resource.

Not configured

`ingress.local.watchNamespace`

The namespaces in the cluster whose Ingress resources the APIG gateway listens to.

Valid values:

-   Empty: Listens to all namespaces.
    
-   Specified value: Listens to the specified namespace. Only one namespace is supported.
    

Empty

### Status description

After you create an ApigConfig resource, you can run the `kubectl get ApigConfig` command to view its status. The status of ApigConfig changes in the following order: Pending \> Running \> Listening. The statuses are described as follows:

-   `Pending`: The APIG gateway is being created. This process takes about 3 minutes.
    
-   `Running`: The APIG gateway is created and running.
    
-   `Listening`: The APIG gateway is running and listening for Ingress resources in the cluster.
    
-   `Failed`: The APIG gateway is in an invalid state. For more information, see the message in the Status field.
    

### Tag description

APIG gateway instances that are created or reused through ApigConfig are assigned resource tags. You can view the tags of the target gateway in the basic information section of the [APIG console](https://apignew.console.alibabacloud.com/).

**Important**

Do not edit the tags in the following table from the APIG gateway console. This action can affect your gateway instance.

**Tag name**

**Description**

**ack.aliyun.com**

Manages the inbound traffic of the container service cluster for the APIG gateway.

**ingress.k8s.alibaba/ApigConfig**

Associates the APIG gateway with ApigConfig.

**kubernetes.reused.by.user**

Indicates whether the APIG gateway is reused. If it is a reuse scenario, the APIG gateway instance is not deleted when the associated ApigConfig is deleted.

## Create an APIG gateway instance

1.  Configure ApigConfig.
    
    The following sample code creates an APIG gateway instance named apig-ingress with the instance type \`apigw.small.x1\`. You can modify other ApigConfig settings as needed.
    
    ```
    apiVersion: apig.alibabacloud.com/v1alpha1
    kind: ApigConfig
    metadata:
      name: apig-ingress
    spec:
      name: apig-ingress
      common:
        instance:
          spec: apigw.small.x1
    ```
    
2.  Create an IngressClass resource in the container service cluster and associate it with ApigConfig through spec.parameters to declare an Ingress processor in the cluster.
    
    After you complete the configuration, Ingress resources in the cluster that are associated with this IngressClass are processed by the APIG gateway instance that is associated with the ApigConfig.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: IngressClass
    metadata:
      name: apig
    spec:
      controller: apig.alibabacloud.com/ingress
      parameters:
        apiGroup: apig.alibabacloud.com
        kind: ApigConfig
        name: apig-ingress
    ```
    

## Reuse an existing APIG gateway instance

To reuse an existing APIG gateway instance, specify the unique ID of the APIG gateway instance (in the `gw-xxx` format) in `spec.id` when you create the ApigConfig. Use the `spec.override` parameter to control whether to overwrite the configurations of the reused APIG gateway instance with the settings from the ApigConfig.

The following sample code reuses an existing APIG gateway instance through ApigConfig. It associates the gateway instance with a container cluster and sets it to listen for Ingress resources in the cluster that have an ingressClass of apig.

**Important**

-   In the following configuration, `spec.override` is set to `false`. This setting prevents the existing Ingress listener options and global configurations of the APIG gateway from being overwritten. If the gateway instance is not already associated with the container cluster, it is automatically associated. The Ingress listener is then configured to listen for Ingress resources in the cluster whose ingressClass matches the value of `spec.ingress.local.ingressClass`, which is apig in this example. If the gateway instance is already associated with the container cluster, its original Ingress listener options are retained.
    
-   To overwrite the existing Ingress listener options and global configurations of the APIG gateway, you must first ensure that all required gateway parameters, such as Ingress listener options, hardware acceleration, global blacklists and whitelists, and observability, are correctly configured in your ApigConfig. Then, set `spec.override` to \`true\`. If you set `spec.override` to \`true\` without specifying these configurations in the ApigConfig, the original gateway parameters are overwritten, which may negatively affect traffic.
    

```
apiVersion: apig.alibabacloud.com/v1alpha1
kind: ApigConfig
metadata:
  name: reuse
spec:
  id: gw-xxxx
  override: false
  ingress:
    local:
      ingressClass: apig
```

**Parameter**

**Description**

`spec.id`

The ID of the target APIG gateway instance to reuse. The format is \`gw-xxx\`.

`spec.override`

Specifies whether to overwrite the configurations of the reused APIG gateway instance based on the ApigConfig.

-   Set to `true`: Overwrites the original gateway parameter configurations (Ingress listener options, hardware acceleration, global blacklists and whitelists, and observability).
    
-   Set to `false`: Does not overwrite the original gateway parameter configurations (Ingress listener options, hardware acceleration, global blacklists and whitelists, and observability). However, if the existing gateway instance is not associated with the container cluster, it will be automatically associated. The Ingress listener options will be set to listen to Ingress resources in the cluster where the ingressClass matches the value of `spec.ingress.local.ingressClass`.
    

## Delete an APIG gateway instance

One ApigConfig corresponds to one APIG gateway instance. Except in reuse scenarios, deleting an ApigConfig will cascade delete the corresponding APIG gateway instance.

The deletion policies are shown in the following table.

**Gateway billing method**

**Automatic creation by APIG Controller**

**Reuse of a gateway purchased in the console**

Pay-as-you-go

Delete the ApigConfig to automatically delete the gateway instance.

Delete the ApigConfig, but the gateway instance is retained.

Run the following command to delete the ApigConfig.

```
kubectl delete ApigConfig your-config-name
```

## Configure global, instance-level IP access control

### Configure an IP whitelist

You can configure a global, instance-level IP whitelist to allow only specific source IPs to access the APIG Ingress.

The following sample code configures the APIG Ingress gateway instance to allow access only from the source IP address `1.1.XX.XX` or the CIDR block `2.0.XX.XX/8`.

```
apiVersion: apig.alibabacloud.com/v1alpha1
kind: ApigConfig
metadata:
   name: apig-ingress
spec:
   ...
  global:
    ipAccessControl:
      whitelist:
      - 1.1.XX.XX
      - 2.0.XX.XX/8
   ...
```

### Configure an IP blacklist

You can configure a global, instance-level IP blacklist to deny access from specific source IPs to the APIG Ingress.

The following sample code configures the APIG Ingress gateway instance to deny access from the source IP address `1.1.XX.XX` or the CIDR block `2.0.XX.XX/8`.

```
apiVersion: apig.alibabacloud.com/v1alpha1
kind: ApigConfig
metadata:
   name: apig-ingress
spec:
   ...
  global:
    ipAccessControl:
      blacklist:
      - 1.1.XX.XX
      - 2.0.XX.XX/8
   ...
```

## Enable SLS logs

Before you enable SLS logs, make sure you have granted the required SLS permissions to the APIG Controller.

The following sample code configures the APIG Ingress gateway to deliver access logs to a project named `demo`.

```
apiVersion: apig.alibabacloud.com/v1alpha1
kind: ApigConfig
metadata:
   name: apig-ingress
spec:
   ...
  monitor:
    logging:
      sls:
        # Configure reuseProject to enable SLS. To use the default project, leave this empty.
        reuseProject: "demo"
    ...
```

## Enable OpenTelemetry Tracing Analysis

After you configure Alibaba Cloud OpenTelemetry Tracing Analysis for the gateway, you can build an end-to-end tracing and monitoring system to quickly diagnose and locate online issues.

The following sample code configures OpenTelemetry Tracing Analysis for the APIG Ingress gateway with a sample rate (`sampleRate`) of 100%.

```
apiVersion: apig.alibabacloud.com/v1alpha1
kind: ApigConfig
metadata:
   name: apig-ingress
spec:
   ...
  monitor:
    tracing:
      openTelemetry:
        sampleRate: "100"
   ...
```

## **More configurations**

The gateway instance used by APIG Ingress supports additional configurations.

To apply these configurations, log on to the [Cloud-native API Gateway console](https://apignew.console.alibabacloud.com/). In the **APIG Gateway** > **Gateway List** menu, find the gateway instance used or automatically created by the APIG Controller. Click the instance ID, and click **Parameter Settings** in the navigation pane on the left.

**Configuration item**

**Type**

**Description**

`EnableGenerateRequestId`

Bool

Applies to the request scope. Generates a request ID in the request header for request tracing.

`EnableGzip`

Bool

Applies to the request and response stages. Enabling gzip compresses requests and responses. This reduces gateway traffic but increases gateway CPU consumption.

`EnableSlashMerge`

Bool

Specifies whether to merge redundant `'/'` characters in a request. If you enable this feature, the redundant `'/'` in `www.a.com//b` is merged, making the URL the same as `www.a.com/b`.

`DownstreamConnectionBufferLimits`

Int

Applies to gateway connections. The buffer size for a single connection. This setting affects throughput and gateway memory usage.

Value range: \[0, 2147483647\].

`XffTrustedNum`

Int

Applies to the request stage. The number of trusted proxies in front of the gateway. This affects whether the gateway uses client-generated request headers such as `x-forwarded-for` and `x-request-id`.

Value range: \[0, 10\]. Unit: proxies.

`DownstreamHttp2MaxConcurrentStream`

Int

Applies to the request stage. The maximum number of concurrent streams on a single connection when the client uses HTTP/2.

Value range: \[0, 2147483647\]. Unit: byte.

`InitialStreamWindowSize`

Int

Applies to the request stage. The initial `stream` window size negotiated between the gateway and the client when using HTTP/2.

Value range: \[65535, 2147483647\]. Unit: byte.

`InitialConnectionWindowSize`

Int

Applies to the request stage. The initial connection-level window size when the gateway and client use HTTP/2.

Value range: \[65535, 2147483647\]. Unit: byte.

`EnableHttp3`

Bool

Specifies whether to support the HTTP/3 protocol.

HTTP/3 is not compatible with the hardware acceleration feature. Disable hardware acceleration before you enable HTTP/3 support.

`PathWithEscapedSlashes`

String

Determines the action for requests whose URI paths contain escaped characters such as %2F, %2f, %5C, or %5c. The default value is `KEEP_UNCHANGED`, which means the characters are kept as they are.

Valid values: `KEEP_UNCHANGED`, `REJECT_REQUEST`, `UNESCAPE_AND_REDIRECT`, `UNESCAPE_AND_FORWARD`.

`ZipAlgorithm`

List<String>

The compression algorithm that is used after compression is enabled. If `EnableGzip` is disabled, the `EnableGzip` option is automatically enabled.

Valid values: `brotli`, `gzip`.

`EnableProxyProtocol`

Bool

Specifies whether to enable the PROXY protocol. If the gateway's inbound traffic is accessed through an NLB, you must enable this to obtain the originating IP address of the client. Enabling this does not affect non-PROXY protocol requests.

`EnableCustomAuthConfigPush`

Bool

Applies to scenarios where a self-built authorization service is used. When enabled, changes to authorization rules do not cause connection interruptions. This is suitable for WebSocket and online business scenarios.

`KeepaliveHeaderTimeout`

Int

Generates a Keep-Alive response header to inform the client about the connection keepalive time. For example, if set to 10, the response header `keep-alive: timeout=10` is returned. If set to 0, this response header is not returned.

Value range: \[0, 600\]. Unit: s.

`WebsocketTermGracePeriod`

Int

The keepalive time maintained for WebSocket connections when the gateway instance needs to close connections, such as during an upgrade or restart.

Value range: \[20, 900\]. Unit: s.

EnableGzipHardwareAccelerate

Bool

Performs Gzip compression based on dedicated hardware. When enabled, it compresses requests and responses, significantly reducing gateway traffic. It offers higher performance and lower CPU consumption compared to software-based Gzip. This feature cannot be enabled in unsupported regions or if Gzip hardware acceleration was not specified at the time of purchase. After this is enabled, `EnableGzip` and `ZipAlgorithm` will not take effect.

EnableK8sSourceWorkloadFilter

Bool

Filters Ingress, Service, and pod resources based on specified tags when adding a service source. Inverse filtering is supported.
