When using Network Load Balancer (NLB) with a Service, use annotations in the YAML file to enable more load balancing features. These features include specifying the NLB network type, enabling configuration read-only mode, and configuring mutual authentication. This topic describes how to configure NLB using annotations in the Service YAML file, covering NLB, listener, and server group resources.

## Index

**Classification**

**Feature Classification**

**Configuration Link**

[Notes](#section-11z-zdk-2tu)

[Typical NLB Operations](#section-3pw-i9f-ed8)

Create a Load Balancer

-   [Create a Public NLB](#b84640506cqxf)
    
-   [Create a Private NLB](#c89c61506cnth)
    
-   [Create a Dual-Stack NLB](#449968706ca4c)
    
-   [Specify IPv6 Public or Private Network Type](#c5f84e1dccme7)
    
-   [Use an Existing Load Balancer](#bf66e5b06csv0)
    

Instance Configuration

-   [Specify the Load Balancer Name](#cec253006ck2r)
    
-   [Specify the Load Balancer Resource Group](#fdd394606cypu)
    
-   [Add Extra Tags to the Load Balancer](#e5db7e206ct11)
    
-   [Bind an Internet Shared Bandwidth Package](#223c9aad765rf)
    
-   [Configure Cross-AZ Forwarding](#3fdd5b0031g30)
    

Security Configuration

-   [Retain Automatically Created Load Balancer Instances When Deleting a Service](#1519100b5fori)
    

[Typical Listener Operations](#section-1da-k4u-4mp)

Create a Listener

-   [Create a TCP Listener](#3f59b0b06ccir)
    
-   [Create a UDP Listener](#49fec1e06cqi3)
    
-   [Create a TCP/SSL Listener](#1cfc46d06cz5h)
    
-   [Configure Listener Port Range](#032ce7b3c8oe9)
    

Listener Configuration

-   [Configure Both TCP and UDP Protocols for a Listener](#f7924b206cjsm)
    
-   [Configure Listener New Connection Rate Limit (CPS)](#6ac434606cs4d)
    
-   [Configure Proxy Protocol](#f06f22d06czxb)
    
-   [Proxy Protocol Carries Additional Information](#941b2b08a8h7r)
    
-   [Configure Listener Connection Idle Timeout](#9f5e64206csu8)
    
-   [Configure ALPN Policy](#f8beaa37d6vfa)
    
-   [Configure Extended Certificates](#a972d923cez7y)
    

Security Configuration

-   [Enable Mutual Authentication](#172eae506cbdt)
    
-   [Configure TLS Security Policy](#a75e74606cg3s)
    
-   [Configure Listener Security Groups](#fb1641c06cgs3)
    

[Typical Server Group Operations](#section-f8f-rx9-gwg)

Server Configuration

-   [Configure Scheduling Policy](#e66c8bd06ctn0)
    
-   [Configure Connection Draining](#eeeb61a06cd2w)
    
-   [Configure Client IP Preservation](#667641906cyzw)
    
-   [Configure TCP Health Checks](#a6b1d4206c30e)
    
-   [Configure HTTP Health Checks](#aaa703206cyu0)
    
-   [Configure Server Group Type](#2e0608f06cw9q)
    
-   [Reuse an Existing Server Group](#142211506c1a6)
    
-   [Configure Service Traffic Weight](#92b6530de3bp0)
    
-   [Ignore Backend Server Weight Updates](#cc9c766c14ixh)
    

## Notes

-   The cluster version must be v1.24 or later, and the Cloud Controller Manager (CCM) version must be v2.5.0 or later. To upgrade the cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). To upgrade components, see [Manage components](/help/en/ack/manage-system-components).
    
-   Specify `spec.loadBalancerClass` as `alibabacloud.com/nlb` in the Service. If you do not specify this, a [Classic Load Balancer (CLB)](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/) is created by default.
    
-   After a Service is created, `spec.loadBalancerClass` cannot be changed. CLB and NLB resources cannot be converted to each other.
    
-   The container service console does not support NLB management. Use `kubectl` commands for operations.
    

## Typical NLB Operations

### Create a Public NLB

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps`

**Description**

**Supported CCM Versions**

Specify the NLB zone, private IP address, and EIP information in the format:

`{zone}:{vSwitchID}:{private IP address}:{EIP instance ID}`. Separate multiple configurations with commas (,).

-   Zone and vSwitchID: Required. Specify at least two, such as `cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321`.
    
    Access the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-hangzhou/nlbs) to view the regions and zones supported by NLB.
    
-   Private IP address: Optional.
    
-   EIP instance ID: Optional.
    

Zone and vSwitchID: v2.5.0 and later

Private IP address and Elastic IP Address (EIP): v2.12.1 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Create a Private NLB

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type`

**Description**

**Supported CCM Versions**

Specify the NLB as a private network type. You can change this annotation value to switch the NLB between public and private networks. Values:

-   `internet`: Public NLB.
    
-   `intranet`: Private NLB.
    

Default value: `internet`

Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-hangzhou/nlbs) to view the regions and zones supported by NLB. At least two zones are required. Separate multiple zones with commas, such as `cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321`.

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Specify the NLB Private IP Address

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps`

**Description**

**Supported CCM Versions**

Specify the NLB zone, private IP address, and EIP information in the format:

`{zone}:{vSwitchID}:{private IP address}:{EIP instance ID}`. Separate multiple configurations with commas (,).

-   Zone and vSwitchID: Required. Specify at least two, such as `cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321`.
    
    Access the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-hangzhou/nlbs) to view the regions and zones supported by NLB.
    
-   Private IP address: Optional.
    
-   EIP instance ID: Optional.
    

-   Zone and vSwitchID: v2.5.0 and later
    
-   Private IP address and Elastic IP Address (EIP): v2.12.1 and later
    

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    # For example, cn-hangzhou-k:vsw-i123456:10.1.0.1,cn-hangzhou-j:vsw-j654321:10.2.0.1
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A}:${private-ipv4-A},${zone-B}:${vsw-B}:${private-ipv4-B}"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Specify the NLB EIP Instance ID

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps`

**Description**

**Supported CCM Versions**

Specify the NLB zone, private IP address, and EIP information in the format:

`{zone}:{vSwitchID}:{private IP address}:{EIP instance ID}`. Separate multiple configurations with commas (,).

-   Zone and vSwitchID: Required. Specify at least two, such as `cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321`.
    
    Access the [NLB console](https://slb.console.alibabacloud.com/nlb/cn-hangzhou/nlbs) to view the regions and zones supported by NLB.
    
-   Private IP address: Optional.
    
-   EIP instance ID: Optional.
    

Zone and vSwitchID: v2.5.0 and later

Private IP address and Elastic IP Address (EIP): v2.12.1 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    # If a private IP address is not needed, leave it blank.
    # For example, cn-hangzhou-k:vsw-i123456::eip-12345,cn-hangzhou-j:vsw-j654321::eip-54321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A}::${eip-A},${zone-B}:${vsw-B}::${eip-B}"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Specify the NLB Name

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-name`

**Description**

**Supported CCM Versions**

Specify the NLB instance name. The NLB name must be 2 to 128 English or Chinese characters in length, start with an uppercase or lowercase letter or a Chinese character, and can contain digits, periods (.), underscores (\_), and hyphens (-).

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-name: "${your-nlb-name}" # NLB name.
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Specify the NLB Resource Group

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id`

**Description**

**Supported CCM Versions**

Specify the resource group to which the load balancer belongs. The resource group ID cannot be modified after it is specified.

Log on to the [Alibaba Cloud Resource Management platform](https://resourcemanager.console.alibabacloud.com/) to query the resource group ID.

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id:  "${your-resource-group-id}" # Resource group ID.
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Create a Dual-Stack NLB

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip-version`

**Description**

**Supported CCM Versions**

Specify the NLB protocol version. The IP type cannot be changed after creation. When using this, the kube-proxy proxy mode of the cluster must be IPVS. Values:

-   `ipv4`: IPv4 type.
    
-   `DualStack`: Dual-stack type, supporting both IPv4 and IPv6.
    
    -   Both vSwitches specified in `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps` must have IPv6 enabled.
        
    -   The generated IPv6 address is only accessible in an IPv6-enabled environment.
        

Default value: `ipv4`

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip-version: "DualStack"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Add Extra Tags to the NLB

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags`

**Description**

**Supported CCM Versions**

Add extra tags. Separate multiple tags with commas (,). For example, `k1=v1,k2=v2`. Versions v2.10.0 and later support modifying tags for existing and reused instances.

**Important**

If you add this annotation to a Service to specify extra tags, any additional modifications to the corresponding load balancer instance tags on the console might be overwritten.

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags: "Key1=Value1,Key2=Value2"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Use an Existing Load Balancer

**Important**

Do not add or modify reuse annotations for existing LoadBalancer Services. This operation might cause reuse to fail or prevent the original load balancer created by CCM from being released properly.

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id

Add the ID of an existing load balancer.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners

Determine whether to synchronize NLB listener configurations based on the Service. Values:

-   `true`: CCM creates, updates, and deletes NLB listeners based on the Service configuration.
    
-   `false`: CCM does not process NLB listeners.
    

Default value: `false`

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: "${your-nlb-id}" # NLB ID.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners: "true"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Bind an Internet Shared Bandwidth Package

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth-package-id`

**Description**

**Supported CCM Versions**

The ID of the Internet Shared Bandwidth package to bind.

Log on to the [VPC console](https://vpc.console.alibabacloud.com/cbwp/) to query the Internet Shared Bandwidth package ID.

v2.9.1 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth-package-id: "cbwp-xxxxxxxxxx" 
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Cross-AZ Forwarding

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cross-zone-enabled`

**Description**

**Supported CCM Versions**

Enable or disable cross-AZ forwarding. Values:

-   `on`
    
-   `off`
    

Default value: `on`

v2.13.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cross-zone-enabled: "off" 
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Specify IPv6 Public or Private Network Type

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip-version

Specify the NLB protocol version. The IP type cannot be changed after creation. When using this, the kube-proxy proxy mode of the cluster must be IPVS. Values:

-   `ipv4`: IPv4 type.
    
-   `DualStack`: Dual-stack type, supporting both IPv4 and IPv6.
    
    -   Both vSwitches specified in `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps` must have IPv6 enabled.
        
    -   The generated IPv6 address is only accessible in an IPv6-enabled environment.
        

Default value: `ipv4`

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ipv6-address-type

Specify the NLB IPv6 network type. Values:

-   `intranet`: Private IPv6
    
-   `internet`: Public IPv6
    

Default value: `intranet`

**Note**

When enabling public IPv6, the VPC where the NLB instance resides must have an IPv6 gateway. For more information, see [Create and manage IPv6 gateways](/help/en/ipv6-gateway/user-guide/create-and-manage-an-ipv6-gateway).

v2.9.1 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip-version: "DualStack"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ipv6-address-type: internet # Specify the IPv6 network type as public.
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Retain Automatically Created Load Balancer Instances When Deleting a Service

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-lb-on-delete`

**Description**

**Supported CCM Versions**

When deleting a LoadBalancer Service, retain the NLB instance created by the Service. Remove the `kubernetes.do.not.delete` and `ack.aliyun.com` tags from the NLB instance and server group. Existing servers within the server group are retained.

When this feature is enabled, a Warning event of type `PreservedOnDelete` is generated during Service synchronization. After configuring this annotation, check for this event to confirm that the feature is successfully enabled.

Value:

-   Not empty: Enable the retention feature.
    
-   Empty or not set: Do not enable the retention feature.
    

**Important**

Delete the Service instead of modifying the Service type. Otherwise, the Service might be incorrectly re-associated with the previously retained NLB.

v2.10.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-lb-on-delete: "true"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

## Typical Listener Operations

### Configure Listener Security Groups

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-security-group-ids`

**Description**

**Supported CCM Versions**

Configure listener security groups. Separate multiple values with commas (,). For example, `sg-aaaaa,sg-bbbbb`.

v2.6.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-security-group-ids: "sg-aaaaa,sg-bbbbb" # Separate multiple security groups with commas.
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### **Configure TCP and UDP protocols for a listener**

**Description**

**Supported CCM Versions**

This feature requires Kubernetes cluster version v1.24 or later. To upgrade the cluster version, see [Upgrade the Kubernetes version of an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).

Not applicable

```
apiVersion: v1
kind: Service
metadata:
  annotations:
      service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: udp
    port: 80
    protocol: UDP
    targetPort: 81
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Create a TCP Listener

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Create a UDP Listener

**Note**

When creating a UDP listener without manually specifying health checks, TCP health checks are enabled for the server group by default. When using UDP listeners, explicitly specify UDP health checks or disable health checks using annotations.

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: udp
    port: 80
    protocol: UDP
    targetPort: 80
  selector:
    app: nginx
  sessionAffinity: None
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Create a TCP/SSL Listener

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Configure the listener protocol type. Separate multiple values with commas, such as `TCP:80,TCPSSL:443`.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

Server certificate ID. Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and create or view it on the **SSL Certificate Management** page.

The following figure shows an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028187.png)

**Important**

Currently, TCP/SSL listeners do not support binding server groups with [client IP preservation](#667641906cyzw) enabled. This means you cannot configure `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "tcpssl:${port}"` and `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-client-ip: "on"` annotations simultaneously. To obtain client IP addresses through NLB, see [Obtain client originating IP addresses through NLB](/help/en/slb/network-load-balancer/use-cases/obtain-client-ip-addresses).

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "tcpssl:443"   
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${CertIdentifier}" 
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Listener Port Range

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-listener-port-range`

**Description**

**Supported CCM Versions**

> Only supported with the Terway network plug-in.

Configure the NLB full port forwarding listener address range to listen on a specified port range and forward traffic to the corresponding ports of backend servers.

The format is `port range:Service port`. Separate multiple values with commas (,). For example, `80-100:80,400-500:443`. Multiple ports and port ranges under the same protocol cannot overlap.

`targetPort` is the health check port of the backend server and must be an integer. Value range: 1-65535.

v2.11.4 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    # Configure listeners for port ranges 80-100 and 400-500.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-listener-port-range: "80-100:80,400-500:443"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    # targetPort is the health check port of the backend server and must be an integer.
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Enable Mutual Authentication

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Configure the listener protocol type. Separate multiple values with commas, such as `TCP:80,TCPSSL:443`.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

Server certificate ID. Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and create or view it on the **SSL Certificate Management** page.

The following figure shows an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028187.png)

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cacert-id

CA certificate ID. Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and view it in the certificate details on the **PCA Certificate Management** page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028202.png)

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cacert

Enable or disable mutual authentication. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "tcpssl:443"   
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${CertIdentifier}" 
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cacert-id: "${your-cacert-id}" 
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cacert: "on"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure TLS Security Policy

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Configure the listener protocol type. Separate multiple values with commas, such as `TCP:80,TCPSSL:443`.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

Server certificate ID. Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and create or view it on the **SSL Certificate Management** page.

The following figure shows an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028187.png)

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-tls-cipher-policy

Security policy ID. Supports system security policies and custom security policies. Values:

-   `tls_cipher_policy_1_0`
    
-   `tls_cipher_policy_1_1`
    
-   `tls_cipher_policy_1_2`
    
-   `tls_cipher_policy_1_2_strict`
    
-   `tls_cipher_policy_1_2_strict_with_1_3`
    

Default value: `tls_cipher_policy_1_0`

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "tcpssl:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${CertIdentifier}" 
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-tls-cipher-policy: "tls_cipher_policy_1_0"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Proxy Protocol

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol`

**Description**

**Supported CCM Versions**

Enable or disable carrying client source IP addresses to servers via Proxy Protocol. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

**Important**

Before enabling Proxy Protocol, check if the backend service has Proxy Protocol v2 enabled. If not, access might fail. Configure with caution.

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol: "on"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Proxy Protocol Carries Additional Information

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol

Enable or disable carrying client source IP addresses to servers via Proxy Protocol. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

**Important**

Before enabling Proxy Protocol, check if the backend service has Proxy Protocol v2 enabled. If not, access might fail. Configure with caution.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-vpc-id-enabled

Enable or disable carrying the VPC ID to backend servers via Proxy Protocol. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

v2.9.1 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-ep-id-enabled

Enable or disable carrying the PrivateLinkEpId to backend servers via Proxy Protocol. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

v2.9.1 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-eps-id-enabled

Enable or disable carrying the PrivateLinkEpsId to backend servers via Proxy Protocol. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

v2.9.1 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-ep-id-enabled: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-eps-id-enabled: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-vpc-id-enabled: "on"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Listener New Connection Rate Limit (CPS)

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cps`

**Description**

**Supported CCM Versions**

The new connection rate limit (CPS) per second for the Network Load Balancer instance. Value range: \[0, 1000000\]. 0 means no rate limit.

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cps: "100"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Listener Connection Idle Timeout

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-idle-timeout`

**Description**

**Supported CCM Versions**

Connection idle timeout. Unit: seconds. Value range: \[10, 900\].

Default value: 900

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-idle-timeout: "60"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure ALPN Policy

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Configure the listener protocol type. Separate multiple values with commas, such as `TCP:80,TCPSSL:443`.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

Server certificate ID. Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and create or view it on the **SSL Certificate Management** page.

The following figure shows an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028187.png)

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-alpn

Enable or disable ALPN. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `off`

v2.10.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-alpn-policy

ALPN policy. Values:

-   `HTTP1Only`: Negotiate only HTTP/1.x protocols. Priority: HTTP/1.1 > HTTP/1.0.
    
-   `HTTP2Only`: Negotiate only HTTP/2.0 protocol.
    
-   `HTTP2Optional`: Prioritize HTTP/1.x protocols, but also accept HTTP/2.0 protocol. Priority: HTTP/1.1 > HTTP/1.0 > HTTP/2.0.
    
-   `HTTP2Preferred`: Prioritize HTTP/2 protocol, but also accept HTTP/1.x protocols. Priority: HTTP/2.0 > HTTP/1.1 > HTTP/1.0.
    

For more values for this option, see the `AlpnPolicy` field in the [CreateListener](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-createlistener) API.

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "tcpssl:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${CertIdentifier}" 
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-alpn: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-alpn-policy: "HTTP1Only" 
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Extended Certificates

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Configure the listener protocol type. Separate multiple values with commas (,). For example, `TCP:80,TCPSSL:443`.

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

Server certificate ID. Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and create or view it on the **SSL Certificate Management** page.

The following figure shows an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028187.png)

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-cert-ids

Extended certificate IDs. Separate multiple extended certificates with commas (,). Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) and create or view them on the **SSL Certificate Management** page.

The following figure shows an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842853671/p1028187.png)

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "tcpssl:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${CertIdentifier}" 
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-cert-ids: "${CertIdentifier-1},${CertIdentifier-2}" # Separate multiple extended certificates with commas.
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

## Typical Server Group Operations

### Configure Scheduling Policy

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler`

**Description**

**Supported CCM Versions**

Scheduling algorithm. Values:

-   `wrr`: Weighted round-robin. Servers with higher weights have a higher probability of being selected.
    
-   `rr`: Round-robin. External requests are distributed to servers in sequence.
    
-   `sch`: Source IP hash. Requests from the same source IP address are scheduled to the same server.
    
-   `tch`: Four-tuple hash. Consistent hash based on the four-tuple (source IP, destination IP, source port, and destination port). The same flow is scheduled to the same server.
    
-   `wlc`: Weighted least connections. In addition to round-robin based on the weight of each backend server, this algorithm considers the actual load (number of connections) of the backend servers. When weights are equal, backend servers with fewer current connections have a higher probability of being selected.
    

Default value: `wrr`

For more values for this option, see the `Scheduler` field in the [CreateServerGroup](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-createservergroup) API.

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler: "sch"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Connection Draining

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain

Enable or disable connection draining. If enabled, when a backend server is removed or fails a health check, the following actions occur:

-   `on`: Existing connections transmit normally for a specified period. After the timeout, connections are actively closed to ensure smooth service offline.
    
-   `off`: Existing connections are not actively closed. Connections are closed only when the client actively disconnects or the persistent connection session expires.
    

Default value: `off`

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain-timeout

Configure the connection draining timeout.

-   Unit: seconds.
    
-   Valid values are \[0, 900\]. A value of 0 indicates an immediate break.
    

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain-timeout: "30"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Client IP Preservation

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-client-ip`

**Description**

**Supported CCM Versions**

Enable or disable client IP preservation. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `on`

v2.5.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-client-ip: "on"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure TCP Health Checks

**Annotation**: Multiple, as shown in the following table. All the following annotations are required to configure TCP health checks. Health checks are enabled by default for TCP ports.

**Annotation**

**Description**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-flag

Enable or disable health checks. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `on`

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type

Health check protocol. Values:

-   `tcp`
    
-   `http`
    

Default value: `tcp`

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-port

The server port for health checks. Value range: \[0, 65535\]. Default value: 0, which means using the server's port for health checks.

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout

Maximum health check response timeout. Unit: seconds. Value range: \[1, 300\].

Default value: 5

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold

The number of consecutive successful health checks required to change the server's health check status from failed to healthy. Value range: \[2, 10\].

Default value: 2

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold

The number of consecutive failed health checks required to change the server's health check status from healthy to failed. Value range: \[2, 10\].

Default value: 2

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval

Health check interval. Unit: seconds. Value range: \[1, 50\].

Default value: 10

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-flag: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type: "tcp"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout: "8"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval: "5"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure HTTP Health Checks

**Annotation**: Multiple, as shown in the following table. All the following annotations are required to configure HTTP health checks. Health checks are enabled by default for TCP ports.

**Annotation**

**Description**

**Supported CCM Versions**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-flag

Enable or disable health checks. Values:

-   `on`: Enable.
    
-   `off`: Disable.
    

Default value: `on`

v2.5.0 and later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type

Health check protocol. Values:

-   `tcp`
    
-   `http`
    

Default value: `tcp`

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-uri

Health check path. Length: 1 to 80 characters. Only letters, digits, and characters are allowed. It must start with a forward slash (/). For more information, see [CreateServerGroup](/help/en/slb/api-createservergroup-nlb#doc-api-Nlb-CreateServerGroup).

**Note**

This parameter takes effect only when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type` is `HTTP`.

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-domain

The domain name used for health checks. Values:

-   $SERVER\_IP: Use the private IP address of the backend server.
    
-   domain: Specify a specific domain name. Length limit: 1 to 80 characters. Only lowercase letters, digits, hyphens (-), and periods (.) are allowed.
    

**Note**

This parameter takes effect only when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type` is `HTTP`.

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-port

The server port for health checks. Value range: \[0, 65535\]. Default value: 0, which means using the server's port for health checks.

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout

Maximum health check response timeout. Unit: seconds. Value range: \[1, 300\].

Default value: 5

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold

The number of consecutive successful health checks required to change the server's health check status from failed to healthy. Value range: \[2, 10\].

Default value: 2

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold

The number of consecutive failed health checks required to change the server's health check status from healthy to failed. Value range: \[2, 10\].

Default value: 2

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval

Health check interval. Unit: seconds. Value range: \[1, 50\].

Default value: 10

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-method

Health check method. Values:

-   `GET`
    
-   `HEAD`
    

**Note**

This parameter takes effect only when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type` is `HTTP`.

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-flag: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type: "http"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-uri: "/test/index.html"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-domain: "www.test.com"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout: "10"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval: "5"
    # Configure the health check method. This annotation is optional.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-method: "head"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Configure Server Group Type

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-server-group-type`

**Description**

**Supported CCM Versions**

Configure the server group type. Values:

-   `Ip`: IP address type. Supports directly adding backend servers of IP address type.
    
-   `Instance` (default value): Server type. Supports adding ECS and ENI instances.
    

Default value: `Instance`

For NLB server group classification and description, see [NLB server groups](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-server-groups#section-snk-hq5-e2c).

v2.8.0 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-server-group-type: "Ip"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```

### Reuse an Existing Server Group

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vgroup-port`

Reuse an existing vServer group. This only takes effect when reusing an existing NLB. For a specific example, see [Deploy services across clusters by reusing an existing load balancer](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-ccm-to-deploy-services-across-clusters#task-2129459).

### Configure Service Traffic Weight

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-weight`

When multiple Services reuse the same NLB, use this annotation to configure the traffic weight for the current Service. This annotation only takes effect when reusing an existing server group. For a specific example, see [Deploy services across clusters by reusing an existing load balancer](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-ccm-to-deploy-services-across-clusters#task-2129459).

### Ignore Backend Server Weight Updates

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ignore-weight-update`

**Description**

**Supported CCM Versions**

During Service synchronization, skip updating the backend server weight in the server group. This configuration applies to scenarios where you need to manually manage backend server weights through mechanisms other than CCM. Values:

-   `on`
    
-   `off`
    

Default value: `off`

v2.11.1 and later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # For example, cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ignore-weight-update: "on"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - name: tcp
    port: 80
    protocol: TCP
    targetPort: 80
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  selector:
    app: nginx
  loadBalancerClass: "alibabacloud.com/nlb"
  type: LoadBalancer
```
