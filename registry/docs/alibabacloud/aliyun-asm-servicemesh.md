ALIYUN::ASM::ServiceMesh is used to create a Service Mesh (ASM) instance.

## Syntax

```
{
  "Type": "ALIYUN::ASM::ServiceMesh",
  "Properties": {
    "EnableAudit": Boolean,
    "OPA": Map,
    "IstioVersion": String,
    "ApiServerPublicEip": Boolean,
    "LocalityLoadBalancing": Boolean,
    "Telemetry": Boolean,
    "OutboundTrafficPolicy": String,
    "AuditProject": String,
    "TraceSampling": Number,
    "Name": String,
    "Proxy": Map,
    "VpcId": String,
    "PilotPublicEip": Boolean,
    "IncludeIPRanges": String,
    "VSwitches": List,
    "Tracing": Boolean,
    "CustomizedZipkin": Boolean,
    "EnableACMG": Boolean,
    "CustomizedPrometheus": Boolean,
    "MSEEnabled": Boolean,
    "WebAssemblyFilterEnabled": Boolean,
    "CRAggregationEnabled": Boolean,
    "CertChain": String,
    "ConfigSourceNacosID": String,
    "ConfigSourceEnabled": Boolean,
    "EnableSDSServer": Boolean,
    "DNSProxyingEnabled": Boolean,
    "OpaEnabled": Boolean,
    "LocalityLBConf": String,
    "GuestCluster": String,
    "KialiEnabled": Boolean,
    "ControlPlaneLogEnabled": Boolean,
    "EnableAmbient": Boolean,
    "ExistingCaKey": String,
    "ApiServerLoadBalancerSpec": String,
    "ExcludeIPRanges": String,
    "FilterGatewayClusterConfig": Boolean,
    "PilotLoadBalancerSpec": String,
    "AutoRenew": Boolean,
    "AccessLogServiceEnabled": Boolean,
    "ExistingRootCaCert": String,
    "MysqlFilterEnabled": Boolean,
    "GatewayAPIEnabled": Boolean,
    "ControlPlaneLogProject": String,
    "Edition": String,
    "UseExistingCA": Boolean,
    "ChargeType": String,
    "ExistingCaType": String,
    "PlaygroundScene": String,
    "AccessLogEnabled": Boolean,
    "AccessLogProject": String,
    "ExistingRootCaKey": String,
    "ExistingCaCert": String,
    "Period": Number,
    "ExcludeInboundPorts": String,
    "ClusterSpec": String,
    "MultiBufferPollDelay": String,
    "AccessLogServicePort": Integer,
    "ExcludeOutboundPorts": String,
    "PrometheusUrl": String,
    "AccessLogFormat": String,
    "DubboFilterEnabled": Boolean,
    "AutoRenewPeriod": Integer,
    "AccessLogFile": String,
    "MultiBufferEnabled": Boolean,
    "EnableCRHistory": Boolean,
    "AccessLogServiceHost": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC).

None.

VSwitches

List

Yes

No

The IDs of the vSwitches.

None.

ApiServerPublicEip

Boolean

No

No

Specifies whether to expose the API server to the Internet.

Valid values:

-   true
    
-   false (default)
    

AuditProject

String

No

Yes

The name of the Simple Log Service (SLS) project that is used for mesh audits.

Default value: mesh-log-{meshId}.

EnableACMG

Boolean

No

No

Specifies whether to enbale the Alibaba Centralized Mesh Gateway (ACMG) mode.

None.

CustomizedPrometheus

Boolean

No

No

Specifies whether to use a custom Prometheus instance.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

MSEEnabled

Boolean

No

No

Specifies whether to enable Microservices Engine (MSE).

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

WebAssemblyFilterEnabled

Boolean

No

No

Specifies whether to enable WebAssembly Filter.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

CRAggregationEnabled

Boolean

No

No

Specifies whether to allow the Kubernetes API of clusters on the data plane to access Istio resources.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

CertChain

String

No

No

The certificate chain from the certificate authority (CA) certificate to the root certificate. The chain must include at least two certificates.

None.

ConfigSourceNacosID

String

No

No

The instance ID of the Nacos registry.

None.

ConfigSourceEnabled

Boolean

No

No

Specifies whether to enable the external service registry.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

EnableSDSServer

Boolean

No

No

Specifies whether to enable Secret Discovery Service (SDS).

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

DNSProxyingEnabled

Boolean

No

No

Specifies whether to enable the domain name resolution (DNS) proxy feature. 

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

OpaEnabled

Boolean

No

No

Specifies whether to enable the Open Policy Agent (OPA) plug-in.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

LocalityLBConf

String

No

No

The configurations for the access to the nearest ASM instance.

None.

GuestCluster

String

No

No

The ID of the cluster that you want to add to the ASM instance when you create an ASM instance. If you do not specify this property, no cluster is added to the ASM instance.

The cluster and the ASM instance must be in the same vSwitch of the same VPC and have the same domain name.

KialiEnabled

Boolean

No

No

Specifies whether to enable the mesh topology feature.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

ControlPlaneLogEnabled

Boolean

No

No

Specifies whether to enable collection of control plane logs.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

EnableAmbient

Boolean

No

No

Specifies whether to enable the Ambient Mesh mode for the ASM instance.

None.

ExistingCaKey

String

No

No

The existing CA key.

This property is used in scenarios where you migrate open source Istio to ASM. The value of this property corresponds to the content of the ca-key.pem file in the istio-ca-secret secret in the istio-system namespace of the cluster where the open source Istio is installed.

ApiServerLoadBalancerSpec

String

No

No

The specification of the Classic Load Balancer (CLB) instance that is bound to the API server.

Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`, `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.

ExcludeIPRanges

String

No

No

The IP address ranges to be excluded from redirection to the sidecar proxy in the ASM instance.

None.

FilterGatewayClusterConfig

Boolean

No

No

Specifies whether to enable the gateway configuration filtering feature.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

PilotLoadBalancerSpec

String

No

No

The specification of the CLB instance that is bound to Istio Pilot.

Valid values: `slb.s1.small`, `slb.s2.small`, `slb.s2.medium`, `slb.s3.small`, `slb.s3.medium`, and `slb.s3.large`.

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal for the CLB instance when the CLB instance uses the subscription billing method.

Valid values:

-   `true`
    
-   `false`
    

AccessLogServiceEnabled

Boolean

No

No

Specifies whether to enable gRPC Access Log Service (ALS) of Envoy.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

ExistingRootCaCert

String

No

No

The existing root certificate.

None.

MysqlFilterEnabled

Boolean

No

No

Specifies whether to enable MySQL Filter.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

GatewayAPIEnabled

Boolean

No

No

Specifies whether to enable Gateway API.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

ControlPlaneLogProject

String

No

No

The name of the SLS project that is used to collect control plane logs.

None.

Edition

String

No

No

The free edition of the ASM instance.

None.

UseExistingCA

Boolean

No

No

Specifies whether to use an existing CA certificate and private key.

None.

ChargeType

String

No

No

The billing method of the CLB instance.

Valid values:

-   `PayOnDemand`: pay-as-you-go.
    
-   `PrePay`: subscription.
    

ExistingCaType

String

No

No

The type of the existing CA certificate.

-   1: self-signed certificate generated by Istiod. The certificate corresponds to the istio-ca-secret secret in the istio-system namespace. If you use this type of certificate, you must specify `ExistingCaCert` and `ExsitingCaKey`.
    
-   2: administrator-specified certificate. For more information, see [plugin ca cert](https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/). In most cases, the certificate corresponds to the cacerts secret in the istio-system namespace. If you use this type of certificate, you must specify `ExisingRootCaCert` and `ExisingRootCaKey`.
    

PlaygroundScene

String

No

No

The playground scenario.

Set the value to ewmaLb. A value of ewmaLb specifies the exponentially weighted moving average (EWMA) load balancing algorithm.

AccessLogEnabled

Boolean

No

No

Specifies whether to enable the access log collection feature.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

AccessLogProject

String

No

No

The SLS project from which access logs are collected.

None.

ExistingRootCaKey

String

No

No

The private key that corresponds to the root certificate.

None.

ExistingCaCert

String

No

No

The existing CA certificate, which is encoded in Base64.

This property is used in scenarios where you migrate open source Istio to ASM. The value of this property corresponds to the content of the ca-cert.pem file in the istio-ca-secret secret in the istio-system namespace of the cluster where the open source Istio is installed.

Period

Number

No

No

The subscription duration of the CLB instance when the CLB instance uses the subscription billing method. Unit: month.

This property takes effect when ChargeType is set to PrePay. If you want a one-year subscription, specify 12 as the value of Period.

ExcludeInboundPorts

String

No

No

The inbound ports to be excluded from redirection to the sidecar proxy in the ASM instance. Separate multiple port numbers with commas (,).

None.

ClusterSpec

String

No

No

The edition of the ASM instance.

Valid values:

-   `standard`: Standard Edition.
    
-   `enterprise`: Enterprise Edition.
    
-   `ultimate`: Ultimate Edition.
    

MultiBufferPollDelay

String

No

No

The pull-request latency.

Default value: 30s.

AccessLogServicePort

Integer

No

No

The port of gRPC ALS of Envoy.

None.

ExcludeOutboundPorts

String

No

No

The outbound ports to be excluded from redirection to the sidecar proxy in the ASM instance. Separate multiple port numbers with commas (,).

None.

PrometheusUrl

String

No

No

The address of the custom Prometheus instance.

None.

AccessLogFormat

String

No

No

The custom format of access logs.

The value of this property must be a JSON string that contains at least the following keys and their values: authority\_for, bytes\_received, bytes\_sent, downstream\_local\_address, downstream\_remote\_address, duration, istio\_policy\_status, method, path, protocol, requested\_server\_name, response\_code, response\_flags, route\_name, start\_time, trace\_id, upstream\_cluster, upstream\_host, upstream\_local\_address, upstream\_service\_time, upstream\_transport\_failure\_reason, user\_agent, and x\_forwarded\_for.

Example:

```
{"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}
```

DubboFilterEnabled

Boolean

No

No

Specifies whether to enable Dubbo Filter.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

AutoRenewPeriod

Integer

No

No

The auto-renewal period of the CLB instance when the CLB instance uses the subscription billing method.

This property takes effect when `ChargeType` is set to `PrePay`. If the subscription duration of the CLB instance is less than one year, the value of AutoRenewPeriod specifies the number of months for auto-renewal. If the subscription duration of the CLB instance is more than one year, the value of AutoRenewPeriod specifies the number of years for auto-renewal.

AccessLogFile

String

No

No

Specifies whether to enable the access log collection feature.

Valid values:

-   "": disables the access log collection feature.
    
-   `/dev/stdout`: enables the access log collection feature.
    

MultiBufferEnabled

Boolean

No

No

Specifies whether to enable MultiBuffer-based Transport Layer Security (TLS) acceleration.

Valid values:

-   `true`
    
-   `false`
    

Default value: `true`.

EnableCRHistory

Boolean

No

No

Specifies whether to enable the rollback feature for Istio resources.

Valid values:

-   `true`
    
-   `false`
    

Default value: `false`.

AccessLogServiceHost

String

No

No

The address of gRPC ALS of Envoy.

None.

CustomizedZipkin

Boolean

No

Yes

Specifies whether to enable self-managed Zipkin.

Valid values:

-   true
    
-   false
    

EnableAudit

Boolean

No

Yes

Specifies whether to enable the mesh audit feature.

Valid values:

-   true
    
-   false (default)
    

**Note**

To enable this feature, you must activate SLS.

IncludeIPRanges

String

No

Yes

The IP address ranges for which traffic is to be redirected to the sidecar proxy in the ASM instance.

None.

IstioVersion

String

No

No

The Istio version.

None.

LocalityLoadBalancing

Boolean

No

Yes

Specifies whether to route traffic to the nearest ASM instance.

Valid values:

-   true
    
-   false (default)
    

Name

String

No

No

The name of the ASM instance.

None.

OPA

Map

No

Yes

The configurations of the OPA plug-in.

For more information, see [OPA properties](#section-neg-4hp-p7v).

OutboundTrafficPolicy

String

No

Yes

The outbound traffic policy.

Valid values:

-   ALLOW\_ANY
    
-   REGISTRY\_ONLY
    

PilotPublicEip

Boolean

No

No

Specifies whether to expose Istio Pilot to the Internet.

Valid values:

-   true
    
-   false (default)
    

Proxy

Map

No

Yes

The proxy configurations.

For more information, see [Proxy properties](#section-v1z-87w-nh1).

Telemetry

Boolean

No

Yes

Specifies whether to enable the Prometheus monitoring feature.

We recommend that you use Alibaba Cloud Managed Service for Prometheus.

TraceSampling

Number

No

Yes

The sampling percentage of Managed Service for OpenTelemetry.

None.

Tracing

Boolean

No

Yes

Specifies whether to enable the tracing analysis feature.

Valid values:

-   true
    
-   false (default)
    

**Note**

To enable this feature, you must activate Managed Service for OpenTelemetry.

## OPA syntax

```
"OPA": {
  "OPARequestCPU": String,
  "OpenAgentPolicy": Boolean,
  "OPALogLevel": String,
  "OPALimitCPU": String,
  "OPALimitMemory": String,
  "OPARequestMemory": String
}
```

## OPA properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

OPALimitCPU

String

No

Yes

The CPU limit of the OPA container.

None.

OPALimitMemory

String

No

Yes

The memory limit the OPA container.

None.

OPALogLevel

String

No

Yes

The log level of the OPA container.

None.

OPARequestCPU

String

No

Yes

The CPU request of the OPA container.

None.

OPARequestMemory

String

No

Yes

The memory request of the OPA container.

None.

OpenAgentPolicy

Boolean

No

Yes

Specifies whether to install the OPA plug-in.

Valid values:

-   true
    
-   false (default)
    

## Proxy syntax

```
"Proxy": {
  "ClusterDomain": String,
  "ProxyLimitCPU": String,
  "ProxyLimitMemory": String,
  "ProxyRequestCPU": String,
  "ProxyRequestMemory": String
}
```

## Proxy properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ClusterDomain

String

No

Yes

The domain name of the cluster.

None.

ProxyLimitCPU

String

No

Yes

The CPU limit of the proxy.

None.

ProxyLimitMemory

String

No

Yes

The memory limit of the proxy.

None.

ProxyRequestCPU

String

No

Yes

The CPU request of the proxy.

None.

ProxyRequestMemory

String

No

Yes

The memory request of the proxy.

None.

## Return values

Fn::GetAtt

ServiceMeshId: the ID of the ASM instance.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ZoneId:
    Type: String
    Description: Create an Availability Zone for an instance to ensure that the Availability Zone supports the creation of Memcache resource specifications.
    AssociationProperty: ALIYUN::ECS::Instance::ZoneId
    Label: Zone ID
  VPC:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description: Please search the ID starts with (vpc-xxx)from console-Virtual Private Cloud
    Label: Existing VPC Instance ID
  VSwitch:
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    Type: String
    Description: Please search the business VSwitch ID starts with(vsw-xxx)from console-Virtual Private Cloud-VSwitches
    Label: Existing VSwitch ID
    AssociationPropertyMetadata:
      VpcId: VPC
      ZoneId: ZoneId
Resources:
  ServiceMesh:
    Type: ALIYUN::ASM::ServiceMesh
    Properties:
      VpcId:
        Ref: VPC
      VSwitches:
        - Ref: VSwitch
Outputs:
  ServiceMeshId:
    Description: The ID of the ASM instance.
    Value:
      Fn::GetAtt:
        - ServiceMesh
        - ServiceMeshId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "Description": "Create an Availability Zone for an instance to ensure that the Availability Zone supports the creation of Memcache resource specifications.",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Label": "Zone ID"
    },
    "VPC": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": "Please search the ID starts with (vpc-xxx)from console-Virtual Private Cloud",
      "Label": "Existing VPC Instance ID"
    },
    "VSwitch": {
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "Type": "String",
      "Description": "Please search the business VSwitch ID starts with(vsw-xxx)from console-Virtual Private Cloud-VSwitches",
      "Label": "Existing VSwitch ID",
      "AssociationPropertyMetadata": {
        "VpcId": "VPC",
        "ZoneId": "ZoneId"
      }
    }
  },
  "Resources": {
    "ServiceMesh": {
      "Type": "ALIYUN::ASM::ServiceMesh",
      "Properties": {
        "VpcId": {
          "Ref": "VPC"
        },
        "VSwitches": [
          {
            "Ref": "VSwitch"
          }
        ]
      }
    }
  },
  "Outputs": {
    "ServiceMeshId": {
      "Description": "The ID of the ASM instance.",
      "Value": {
        "Fn::GetAtt": [
          "ServiceMesh",
          "ServiceMeshId"
        ]
      }
    }
  }
}
```
