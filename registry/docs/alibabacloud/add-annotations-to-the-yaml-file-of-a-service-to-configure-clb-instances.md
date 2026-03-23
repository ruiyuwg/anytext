You can use advanced load balancing features by adding annotations to your Service YAML file to configure CLB instances, listeners, and backend server groups.

## **Index**

**Category**

**Feature category**

**Configuration link**

[Annotation usage notes](#section-nxq-mig-6eb)

[Common CLB operations](#section-4mf-l5q-9pu)

Create a load balancer

-   [Create an Internet-facing SLB instance](#c047bb10f5nhr)
    
-   [Create an internal-facing SLB instance](#c047bb11f5hmz)
    
-   [Create a bandwidth-based SLB instance](#c0480935f5a1t)
    
-   [Specify primary and secondary zones when creating an SLB instance](#c0480932f53n8)
    
-   [Create a pay-by-usage SLB instance](#c048a571f5qoa)
    
-   [Create an IPv6 SLB instance](#c0483047f5eel)
    

Use an existing instance

-   [Use an existing SLB instance](#c047e220f533g)
    
-   [Use an existing SLB instance and force override existing listeners](#c047e227f53jc)
    

Configure the load balancer

-   [Specify the SLB instance specification](#c047bb12f5xwt)
    
-   [Specify a vSwitch for the SLB instance](#c0483042f5dhx)
    
-   [Specify an IP address for an internal-facing SLB instance](#f2afdbb012chu)
    
-   [Add extra tags to the SLB instance](#f0d8358012pih)
    
-   [Specify the SLB instance name](#c0485754f5g86)
    
-   [Specify the resource group for the SLB instance](#c0485755f53gm)
    
-   [Set a hostname for the Service](#c0487e61f5xix)
    

Enable instance protection

-   [Enable deletion protection for the SLB instance](#c0485751f5f7a)
    
-   [Enable configuration modification protection for the SLB instance](#c0485753f581m)
    
-   [Preserve automatically created SLB instances when deleting a Service](#bf30168cef1g3)
    

[Common listener operations](#section-ynz-cbo-l0h)

Configure session persistence

-   [Configure session persistence timeout for TCP SLB instances](#c048a575f5046)
    
-   [Configure session persistence (insert cookie) for HTTP and HTTPS listeners](#c048cc82f5ix3)
    

Configure ports and protocols

-   [Specify the redirection port for the SLB instance](#c048cc8af5bnf)
    
-   [Create a listener with health checks](#c0491aa3f5wbx)
    
-   [Create a UDP listener](#c048f397f5c3s)
    
-   [Create an HTTP listener](#c0491aa0f5fpp)
    
-   [Create an HTTPS listener](#a6b8b9806c7xv)
    
-   [Configure extended domain name certificates for HTTPS listeners](#24a2850ff567b)
    
-   [Configure both TCP and UDP protocols for a listener](#c049b6e2f5qab)
    
-   [Configure Proxy Protocol for TCP and UDP listeners](#c049b6e4f5gkx)
    

Advanced configuration

-   [Set the scheduling algorithm for the SLB instance](#c048f393f51w4)
    
-   [Configure an access control policy group for the SLB instance](#c048cc86f5o1d)
    
-   [Configure a security policy for the listener](#c049b6e0f546t)
    
-   [Configure connection draining for the listener](#c04941b3f5myy)
    
-   [Configure additional request headers for the listener](#c04941b4f5cz7)
    
-   [Set the idle connection timeout for the listener](#c04941b6f5qy1)
    
-   [Configure the request timeout for the listener](#c04968c0f5384)
    
-   [Set the connection timeout for the listener](#c0498fd0f5ft0)
    
-   [Disable HTTP/2 for the listener](#c04941b8f5jx1)
    

[Common backend server group operations](#section-ouy-so3-ojv)

Configuration management

-   [Use Worker nodes with specified labels as backend servers](#c049b6e6f5pob)
    
-   [Use nodes where Pods run as backend servers](#c049ddf0f5zq9)
    
-   [Remove unschedulable nodes from the CLB backend server group](#c049ddf1f59ps)
    
-   [Mount Pod ENIs directly to the CLB backend](#c049ddf4f5uba)
    
-   [Reuse an existing vServer group](#c04a0501f5dox)
    
-   [Set the traffic weight for the Service](#c04a0502f5dto)
    
-   [Ignore updates to backend server weights](#Fj4nd)
    

[References](#related-links-v53-lzb-nsv)

## Annotation usage notes

-   Annotation values are case-sensitive.
    
-   Before using an annotation, verify the supported Cloud Controller Manager (CCM) version in this topic. To upgrade CCM, see [Manage components](/help/en/ack/manage-system-components). For CCM release notes, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager).
    
-   Starting September 11, 2019, the `annotations` field changed from `alicloud` to `alibaba-cloud`.
    
    For example:
    
    Before: `service.beta.kubernetes.io/alicloud-loadbalancer-id`
    
    After: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id`
    
    The system still supports the `alicloud` format. You do not need to make any changes.
    

## Common CLB operations

### **Create an Internet-facing SLB instance**

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create an internal-facing SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type`

**Description**

**Supported CCM version**

Specify whether the SLB instance is internal-facing. Valid values:

-   `internet`: The service is accessible over the Internet. The corresponding CLB **Address Type** must be set to **Internet**.
    
-   `intranet`: The service is accessible only within the private network. The corresponding CLB **Address Type** must be set to **Intranet**.
    

Default value: `internet`

We recommend that you manually specify a vSwitch for the SLB instance. See [Specify a vSwitch for the SLB instance](#c0483042f5dhx). If you do not specify one, the system selects one automatically based on the CCM version:

-   CCM versions earlier than v2.13.0: Use the first vSwitch configured for the cluster control plane.
    
-   Versions 2.13.0 and later automatically select an available vSwitch.
    

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Specify the SLB instance specification**

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type

The billing method for the SLB instance. Valid values:

-   `PayBySpec`: Pay by specification.
    
-   `PayByCLCU`: Pay by usage.
    

Default value: `PayBySpec`

**Important**

-   The default value changes to `PayByCLCU` for [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) v2.5.0 or later.
    
-   You cannot change the specification of a pay-by-LCU SLB instance. This means that the value `PayByCLCU` and the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec` annotation cannot be specified at the same time.
    

v2.4.0 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec

The specification of the SLB instance. Use this parameter to create an SLB instance with a specific specification or update the specification of an existing SLB instance. Valid values:

-   slb.s1.small
    
-   slb.s2.small
    
-   slb.s2.medium
    
-   slb.s3.small
    
-   slb.s3.medium
    
-   slb.s3.large
    

Default value: `slb.s1.small`

For more valid values, see [CreateLoadBalancer](/help/en/slb/api-createloadbalancer-2#doc-api-Slb-CreateLoadBalancer).

**Important**

If you modify the SLB instance specification in the CLB console (only supported for pay-by-specification SLB instances), CCM may revert it to the original specification. Proceed with caution.

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type: "PayBySpec"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: "slb.s1.small"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Use an existing SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id`

**Description**

**Supported CCM version**

**Important**

-   To avoid unexpected behavior such as cluster unavailability or traffic interruption, do not reuse the API Server CLB instance or CLB instances created by CCM. Create a new instance manually in the [Classic Load Balancer (CLB) console](https://slb.console.alibabacloud.com/slb).
    
-   Do not add or modify reuse annotations for existing LoadBalancer Services. This operation might cause reuse to fail or prevent the original load balancer created by CCM from being released properly.
    

The ID of the SLB instance. Use this annotation to specify an existing CLB instance.

-   By default, reusing an existing SLB instance does not override existing listeners. To force override, set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners` to `"true"`. This setting overrides only the listeners for the current Service and does not affect other listeners.
    
    **Note**
    
    Reusing an existing SLB instance does not override existing listeners by default for two reasons:
    
    -   Forcing override may interrupt business if existing listeners are bound to services.
        
    -   CCM currently supports limited backend configurations and cannot handle complex ones. For complex backend configurations, configure listeners manually in the console without overriding them.
        
    
    Because of these considerations, we do not recommend forcing override. Only force override if the existing listener port is no longer in use.
    
-   (CCM versions earlier than v2.10.0) Adding extra tags (`annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags`) is not supported when reusing an existing SLB instance.
    

v1.9.3.81-gca19cd4-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: "${YOUR_LOADBALANCER_ID}"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Use an existing SLB instance and force override existing listeners**

**Annotation**: Multiple, as shown in the following table. Force override deletes existing listeners if port conflicts occur.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id

**Important**

To avoid unexpected behavior such as cluster unavailability or traffic interruption, do not reuse the API Server CLB instance or CLB instances created by CCM. Create a new instance manually in the [Classic Load Balancer (CLB) console](https://slb.console.alibabacloud.com/slb).

The ID of the SLB instance. Use this annotation to specify an existing Server Load Balancer.

-   By default, reusing an existing SLB instance does not override existing listeners. To force override, set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners` to `"true"`. This setting overrides only the listeners for the current Service and does not affect other listeners.
    
    **Note**
    
    Reusing an existing SLB instance does not override existing listeners by default for two reasons:
    
    -   Forcing override may interrupt business if existing listeners are bound to services.
        
    -   CCM currently supports limited backend configurations and cannot handle complex ones. For complex backend configurations, configure listeners manually in the console without overriding them.
        
    
    Because of these considerations, we do not recommend forcing override. Only force override if the existing listener port is no longer in use.
    
-   (CCM versions earlier than v2.10.0) Adding extra tags (`annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags`) is not supported when reusing an existing SLB instance.
    

v1.9.3.81-gca19cd4-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners

Determines whether CCM synchronizes CLB listener configurations with the Service when binding to an existing SLB instance.

-   `"true"`: CCM automatically manages associated CLB listeners (create, update, delete) for the Service. Other listeners remain unaffected.
    
-   `"false"`: CCM does not manage CLB listeners.
    

Default value: `"false"`

**Important**

When reusing an existing CLB and setting `force-override` to `"true"`, do not reuse the same listener across multiple Services. This causes listener configuration conflicts.

v1.9.3.81-gca19cd4-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: "${YOUR_LOADBALANCER_ID}"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners: "true"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Specify primary and secondary zones when creating an SLB instance**

**Annotation**: Multiple, as shown in the following table. After creation, primary and secondary zones cannot be modified.

Some regions do not support primary and secondary zones for SLB instances. Check the CLB console for details.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-master-zoneid

The zone ID of the primary backend server.

v1.9.3.10-gfb99107-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-slave-zoneid

The zone ID of the backup backend server.

v1.9.3.10-gfb99107-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-master-zoneid: "cn-hangzhou-k"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-slave-zoneid: "cn-hangzhou-j"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create a bandwidth-based SLB instance**

**Annotation**: Multiple, as shown in the following table. Both annotations are required.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-charge-type

The billing method for the SLB instance. Valid values:

-   paybytraffic
    
-   paybybandwidth
    

Default value: `paybytraffic`

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth

The bandwidth limit for the SLB instance, in Mbps. Default value: 50. Applies only to Internet-facing SLB instances. For other limits, see [Modify the billing method for an Internet-facing SLB instance](/help/en/slb/api-modifyloadbalancerinstancespec#doc-api-Slb-ModifyLoadBalancerInstanceSpec).

v1.9.3.10-gfb99107-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-charge-type: "paybybandwidth"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth: "2"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Specify a vSwitch for the SLB instance**

**Annotation**: Multiple, as shown in the following table. Both annotations are required.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type

Specify whether the SLB instance is internal-facing. Valid values:

-   `internet`: The service is accessible over the Internet. The corresponding CLB **Address Type** must be set to **Internet**.
    
-   `intranet`: The service is accessible only within the private network. The corresponding CLB **Address Type** must be set to **Intranet**.
    

Default value: `internet`

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id

The VSwitch ID for the SLB instance. The VSwitch must belong to the same VPC as the Kubernetes cluster.

When you set this parameter, also set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type` to `"intranet"`.

You can find the VSwitch ID in the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/vpc).

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
   service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"
   service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id: "${YOUR_VSWITCH_ID}"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### Specify an IP address for an internal-facing SLB instance

**Annotation**: Multiple, as shown in the following table. All three annotations are required.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type

Specify whether the SLB instance is internal-facing. Valid values:

-   `internet`: The service is accessible over the Internet. This is the default value. The corresponding CLB **Address Type** must be set to **Internet**.
    
-   `intranet`: The service is accessible only within the private network. The corresponding CLB **Address Type** must be set to **Intranet**.
    

Default value: `internet`

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id

The VSwitch ID for the SLB instance. The VSwitch must belong to the same VPC as the Kubernetes cluster.

When you set this parameter, also set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type` to intranet.

You can find the VSwitch ID in the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/vpc).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip

The IP address for the internal-facing SLB instance.

-   This IP address must be in the CIDR block of the specified VSwitch. Only IPv4 addresses are supported. You must use this annotation with `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id`.
    
-   You cannot change the IP address after creation.
    

v2.7.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vswitch-id: "${YOUR_VSWITCH_ID}"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip: "192.168.x.x"
  name: nginx
  namespace: default
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 80
      name: http
  selector:
    app: nginx
```

### **Add extra tags to the SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags`

**Description**

**Supported CCM version**

A list of tags to add. Separate multiple tags with commas (,). Example: `"k1=v1,k2=v2"`. Starting with CCM v2.10.0, you can modify tags for both newly created and reused instances.

**Important**

Adding this annotation to set extra tags may overwrite manual tag modifications made in the console for the corresponding SLB instance.

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags: "Key1=Value1,Key2=Value2" 
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create an IPv6 SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip-version`

**Description**

**Supported CCM version**

The IP version for the SLB instance. You cannot change the IP version after creation. The kube-proxy proxy mode for the cluster must be IPVS. Valid values:

-   `ipv4`: IPv4.
    
-   `ipv6`: IPv6. The generated IPv6 address is accessible only in IPv6-enabled environments.
    

Default value: `ipv4`

v1.9.3.220-g24b1885-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip-version: "ipv6"
  name: nginx
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Enable deletion protection for the SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-delete-protection`

**Description**

**Supported CCM version**

Enable deletion protection for the SLB instance. Valid values:

-   `on`
    
-   `off`
    

Default value: `on`

**Important**

For SLB instances created by LoadBalancer Services, you can still delete the associated SLB instance using `kubectl delete svc {your-svc-name}`, even if deletion protection is enabled in the CLB console.

v1.9.3.313-g748f81e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-delete-protection: "on"
  name: nginx
spec:
  externalTrafficPolicy: Local
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Enable configuration modification protection for the SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-modification-protection`

**Description**

**Supported CCM version**

Enable configuration modification protection for the SLB instance. Valid values:

-   `ConsoleProtection`
    
-   `NonProtection`
    

Default value: `ConsoleProtection`

v1.9.3.313-g748f81e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-modification-protection: "ConsoleProtection"
  name: nginx
spec:
  externalTrafficPolicy: Local
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Specify the SLB instance name**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-name`

**Description**

**Supported CCM version**

The name of the SLB instance. Length: 2–128 characters. Must start with a letter or Chinese character. Can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

v1.9.3.313-g748f81e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-name: "your-svc-name"
  name: nginx
spec:
  externalTrafficPolicy: Local
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Specify the resource group for the SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id`

**Description**

**Supported CCM version**

The resource group ID for the SLB instance. You cannot change the resource group ID after assignment. Find the resource group ID in the [Alibaba Cloud Resource Management console](https://resourcemanager.console.alibabacloud.com/).

v1.9.3.313-g748f81e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id: "rg-xxxx"
  name: nginx
spec:
  externalTrafficPolicy: Local
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Set a hostname for the Service**

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-hostname

Set a hostname for the Service. The hostname must comply with DNS naming rules.

Important notes:

-   After adding this annotation, the Service's EXTERNAL-IP changes from the default CLB IP to `your_service_name`. When accessing the CLB IP from inside the cluster, traffic routes through the CLB before forwarding to the cluster.
    
-   After adding this annotation, if the listener protocol is TCP or UDP, accessing the CLB IP from inside the cluster may cause loopback issues. For details, see and [Clients cannot access load balancer](/help/en/slb/why-am-i-unable-to-access-an-slb-instance).
    
-   Adding this annotation does not automatically bind the CLB to a domain name. To bind a domain, go to the Domain Names page to purchase a domain and bind it to the CLB. For instructions, see [Purchase a domain name](/help/en/dws/product-overview/what-is-domains#section-vvz-phj-wgb).
    

v2.3.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-hostname: "${your_service_hostname}"
  name: nginx-svc
  namespace: default
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

Expected output:

```
NAME         TYPE           CLUSTER-IP       EXTERNAL-IP            PORT(S)                      AGE
nginx-svc    loadBalancer   47.100.XX.XX     www.example.com        80:30248/TCP,443:32670/TCP   10s
```

### **Create a pay-by-usage SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type`

**Description**

**Supported CCM version**

The billing method for the SLB instance. Valid values:

-   `PayBySpec`: Default. Pay by specification.
    
-   `PayByCLCU`: Pay by usage.
    

Default value: `PayBySpec`

**Important**

-   The default value changes to `PayByCLCU` for [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) v2.5.0 or later.
    
-   You cannot set a specification for a pay-by-usage SLB instance. Do not use `PayByCLCU` together with `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec`.
    

v2.4.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type: "PayByCLCU"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### Preserve automatically created SLB instances when deleting a Service

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-lb-on-delete`

**Description**

**Supported CCM version**

When deleting a LoadBalancer Service, preserve the SLB instance created by the Service and remove the `kubernetes.do.not.delete` and `ack.aliyun.com` tags from the SLB instance. Existing servers in the vServer group remain unchanged.

When enabled, a Warning event of type `PreservedOnDelete` appears during Service synchronization. After configuring this annotation, check for this event to confirm successful activation.

Valid values:

-   Non-empty: Enable preservation.
    
-   Empty or unset: Disable preservation.
    

**Important**

Delete the Service instead of changing its type to perform this operation. Otherwise, the Service may incorrectly reattach to a previously preserved SLB instance.

v2.10.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-lb-on-delete: "true"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

## Common listener operations

### **Configure session persistence timeout for TCP SLB instances**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-persistence-timeout`

**Description**

**Supported CCM version**

The session persistence timeout. Applies only to TCP listeners. If the SLB instance has multiple TCP listeners, this setting applies to all of them.

Unit: seconds. Valid values: \[0, 3600\]. Default value: 0, which disables session persistence. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-persistence-timeout: "1800"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure session persistence (insert cookie) for HTTP and HTTPS listeners**

**Annotation**: Multiple, as shown in the following table. All four annotations are required when inserting cookies.

-   Applies only to HTTP and HTTPS SLB instances.
    
-   If you configure multiple HTTP or HTTPS listener ports, this session persistence setting applies to all of them by default.
    

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session

Enable session persistence. Applies only to HTTP and HTTPS listeners. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener#doc-api-Slb-CreateLoadBalancerHTTPListener) and [CreateLoadBalancerHTTPSListener](/help/en/slb/api-createloadbalancerhttpslistener#doc-api-Slb-CreateLoadBalancerHTTPSListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session-type

The cookie handling method. Applies only to HTTP and HTTPS listeners. Required when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session` is set to `on`. Valid values:

-   `insert`: Insert cookie.
    
-   `server`: Rewrite cookie.
    

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener#doc-api-Slb-CreateLoadBalancerHTTPListener) and [CreateLoadBalancerHTTPSListener](/help/en/slb/api-createloadbalancerhttpslistener#doc-api-Slb-CreateLoadBalancerHTTPSListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cookie-timeout

The cookie timeout. Required when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session` is `on` and `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session-type` is `insert`. Unit: seconds. Valid values: \[1, 86400\].

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener#doc-api-Slb-CreateLoadBalancerHTTPListener) and [CreateLoadBalancerHTTPSListener](/help/en/slb/api-createloadbalancerhttpslistener#doc-api-Slb-CreateLoadBalancerHTTPSListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cookie

The cookie name configured on the server.

Length: 1–200 characters. Can contain only ASCII letters and digits. Cannot contain commas (,), semicolons (;), or spaces. Cannot start with a dollar sign ($).

Required when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session` is `on` and `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session-type` is `server`.

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener#doc-api-Slb-CreateLoadBalancerHTTPListener) and [CreateLoadBalancerHTTPSListener](/help/en/slb/api-createloadbalancerhttpslistener#doc-api-Slb-CreateLoadBalancerHTTPSListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-sticky-session-type: "insert"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cookie-timeout: "1800"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure an access control policy group for the SLB instance**

**Annotation**: Multiple, as shown in the following table. All three annotations are required.

Before using this annotation, create an access control policy group in the [Classic Load Balancer (CLB) console](https://slb.console.alibabacloud.com/slb) and record the ACL ID.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-status

Enable access control. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

v1.9.3.164-g2105d2e-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-id

The ACL ID to attach to the listener. Required when `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-status` is set to `"on"`.

v1.9.3.164-g2105d2e-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-type

The access control type. Valid values:

-   `white`: Forward requests only from IP addresses or CIDR blocks in the selected access control policy group. Use white lists when your application allows access only from specific IPs. Setting a white list carries some risk. Once enabled, only IPs in the white list can access the listener. If you enable a white list but do not add any IPs, the listener forwards all requests.
    
-   `black`: Block all requests from IP addresses or CIDR blocks in the selected access control policy group. Use black lists when your application restricts access from specific IPs. If you enable a black list but do not add any IPs, the listener forwards all requests. Required when AclStatus is set to on.
    

v1.9.3.164-g2105d2e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-status: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-id: "${YOUR_ACL_ID}" # Multiple policy groups are not supported.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-type: "white"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Specify the redirection port for the SLB instance**

Port forwarding redirects HTTP requests to an HTTPS port.

**Annotation**: Multiple, as shown in the following table. All three annotations are required.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

The certificate ID in Alibaba Cloud.

Log on to the [CLB console](https://slb.console.alibabacloud.com/slb/cn-shenzhen/certs) and view the certificate ID on the **Certificate Management** page.

**Note**

To create a certificate, see [Select an Alibaba Cloud-issued certificate](/help/en/slb/classic-load-balancer/user-guide/use-a-certificate-from-alibaba-cloud-ssl-certificates-service#task-1597562).

v1.9.3.164-g2105d2e-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-forward-port

Redirect HTTP requests to an HTTPS port. Example: `80:443`.

v1.9.3.164-g2105d2e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "https:443,http:80"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${YOUR_CERT_ID}"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-forward-port: "80:443"
  name: nginx
  namespace: default
spec:
  ports:
  - name: https
    port: 443
    protocol: TCP
    targetPort: 80
  - name: http
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Set the scheduling algorithm for the SLB instance**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler`

**Description**

**Supported CCM version**

The scheduling algorithm. Valid values:

-   `wrr`: Weighted round-robin. Higher weights increase the probability of being selected.
    
-   `rr`: Round-robin. Distribute requests sequentially to backend servers.
    
-   `sch`: Source IP hash. Requests from the same source IP go to the same backend server.
    
-   `tch`: Four-tuple hash (source IP + destination IP + source port + destination port). Requests in the same flow go to the same backend server.
    

Default value: `rr`.

For more valid values, see the `Scheduler` field in the CLB API for creating the corresponding listener type (such as [Create TCP Listener](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-createloadbalancertcplistener)).

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler: "wrr"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create a UDP listener**

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: UDP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create an HTTP listener**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port`

-   Health check: Health checks for HTTP listeners are disabled by default. To ensure backend service availability, configure HTTP or TCP health checks for the listener port.
    
-   Access from inside the cluster: When accessing the service via the CLB IP from inside the cluster, traffic may be intercepted internally, causing access failures. See [Set a hostname for the Service](#c0487e61f5xix) to force traffic to route through the CLB by adding an annotation. For details, see [Notes on accessing the External IP of a LoadBalancer Service from inside the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#add3f9a05apnz).
    

**Description**

**Supported CCM version**

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create an HTTPS listener**

**Annotation**: Multiple, as shown in the following table.

HTTPS requests are decrypted at the CLB layer and sent to backend pods as HTTP requests.

-   Health check: Health checks for HTTPS listeners are disabled by default. To ensure backend service availability, configure HTTP or TCP health checks for the listener port.
    
-   Access from inside the cluster: When accessing the service via the CLB IP from inside the cluster, traffic may be intercepted internally, causing access failures. See [Set a hostname for the Service](#c0487e61f5xix) to force traffic to route through the CLB by adding an annotation. For details, see [Notes on accessing the External IP of a LoadBalancer Service from inside the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#add3f9a05apnz).
    

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

The certificate ID in Alibaba Cloud.

Log on to the [CLB console](https://slb.console.alibabacloud.com/slb/cn-shenzhen/certs) and view the certificate ID on the **Certificate Management** page.

**Note**

To create a certificate, see [Select an Alibaba Cloud-issued certificate](/help/en/slb/classic-load-balancer/user-guide/use-a-certificate-from-alibaba-cloud-ssl-certificates-service#task-1597562).

v1.9.3.164-g2105d2e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "https:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${YOUR_CERT_ID}"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

#### **SSL protocol errors when accessing CLB from inside the cluster**

**Issue**

After you [create an HTTPS listener](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#c0491aa1f5fje) for a Service, the service is accessible from outside the cluster. However, when you use curl to access the HTTPS port of the CLB instance associated with the Service from a node or Pod inside the cluster, the following error is returned:

```
curl: (35) error:1408F10B:SSL routines:ssl3_get_record:wrong version number
```

**Cause**

This issue is caused by IPVS rules on the node:

1.  **Service configuration**: Because CLB HTTPS listeners support only HTTP as the backend protocol, the Service forwards traffic from `port: 443` to `targetPort: 80`. ACK creates IPVS rules on the node to forward traffic destined for port `443` directly to port `80` on the backend.
    
2.  **Layer 4 forwarding**: IPVS operates at Layer 4 of the TCP/IP stack and forwards only TCP packets. It does not parse application-layer protocols like TLS/HTTPS.
    
3.  **Protocol mismatch**: The client (curl) sends an HTTPS request (TLS handshake data) that IPVS forwards directly to the HTTP port `80` on the backend service. Since this port is not configured for TLS, it cannot parse the TLS request and returns an HTTP `400` error. The client reports an SSL protocol error.
    

**Solution**

Add the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-hostname` annotation to the Service. This annotation prevents IPVS rules from being created on the node and forces traffic from inside the cluster to route through the CLB, ensuring TLS is handled correctly at the CLB. For detailed steps, see [](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#c0487e61f5xix).

#### **Configure extended domain name certificates for HTTPS listeners**

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

The certificate ID in Alibaba Cloud.

Log on to the [CLB console](https://slb.console.alibabacloud.com/slb/cn-shenzhen/certs) and view the certificate ID on the **Certificate Management** page.

**Note**

To create a certificate, see [Select an Alibaba Cloud-issued certificate](/help/en/slb/classic-load-balancer/user-guide/use-a-certificate-from-alibaba-cloud-ssl-certificates-service#task-1597562).

v1.9.3.164-g2105d2e-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-domain-extensions

Specify extended domain names and their certificate IDs in the format `{domain}:{certificate-ID}`. Separate multiple entries with commas (,).

Log on to the [CLB console](https://slb.console.alibabacloud.com/slb/cn-shenzhen/certs) and view the certificate ID on the **Certificate Management** page.

v2.13.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "https:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${YOUR_CERT_ID}"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-domain-extensions: "${DOMAIN_1}:${CERT_ID_1},${DOMAIN_2}:${CERT_ID_2}"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Create a listener with health checks**

#### **Configure TCP health checks**

**Annotation**: Multiple, as shown in the following table. All annotations are required.

TCP port health checks are enabled by default.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch

Enable health checks for TCP and UDP listeners. Valid values:

-   `on`
    
-   `off`
    

Default value: `on`

v2.6.0 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type

The health check type. Valid values:

-   `tcp`
    
-   `http`
    

Default value: `tcp`. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout

The time to wait for a response from the health check. Applies to TCP mode. If the backend ECS does not respond correctly withinthe specified time, the health check fails. Unit: seconds. Valid values: \[1, 300\].

If the value of `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout` is less than the value of `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval`, the former is invalid, and the timeout is set to the latter's value. Default value: 5. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold

The number of consecutive successful health checks required to change the backend server's status from `fail` to `success`.

Valid values: \[2, 10\]. Default value: 3. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold

The number of consecutive failed health checks required to change the backend server's status from success to fail. Valid values: \[2, 10\]. Default value: 3. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval

The health check interval. Unit: seconds. Valid values: \[1, 50\]. Default value: 2. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type: "tcp"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout: "8"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval: "3"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

#### **Configure UDP health checks**

**Annotation**: Multiple, as shown in the following table. All annotations are required.

UDP port health checks are enabled by default.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch

Enable health checks for TCP and UDP listeners. Valid values:

-   `on`
    
-   `off`
    

Default value: `on`

v2.6.0 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout

The time to wait for a response from the health check. Applies to TCP mode. If the backend ECS does not respond correctly within the specified time, the health check fails. Unit: seconds. Valid values: \[1, 300\].

If the value of `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout` is less than the value of `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval`, the former is invalid, and the timeout is set to the latter's value. Default value: 5. For more information, see [CreateLoadBalancerUDPListener](/help/en/slb/api-createloadbalancerudplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold

The number of consecutive successful health checks required to change the backend server's status from fail to success.

Valid values: \[2, 10\]. Default value: 3. For more information, see [CreateLoadBalancerUDPListener](/help/en/slb/api-createloadbalancerudplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold

The number of consecutive failed health checks required to change the backend server's status from success to fail. Valid values: \[2, 10\]. Default value: 3. For more information, see [CreateLoadBalancerUDPListener](/help/en/slb/api-createloadbalancerudplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval

The health check interval. Unit: seconds. Valid values: \[1, 50\]. Default value: 2. For more information, see [CreateLoadBalancerUDPListener](/help/en/slb/api-createloadbalancerudplistener).

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval: "5"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout: "10"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold: "3"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold: "3"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: UDP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

#### **Disable health checks for TCP and UDP listeners**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch`

**Description**

**Supported CCM version**

Enable health checks for TCP and UDP listeners. Valid values:

-   `on`
    
-   `off`
    

Default value: `on`

v2.6.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch: "off" # Disable health check
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

#### **Configure HTTP health checks**

**Annotation**: Multiple, as shown in the following table.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-flag

Valid values:

-   `on`: For TCP listeners, the default is `on` and cannot be changed. You do not need to change this annotation for TCP.
    
-   `off`: For HTTP listeners, the default is `off`.
    

Default value: `off`

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type

The health check type. Valid values:

-   `tcp`
    
-   `http`
    

Default value: `tcp`

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-uri

The URI for the health check. This annotation is not required for TCP health checks.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-httpcode

The HTTP status codes for a successful health check. Separate multiple codes with commas (,). Valid values:

-   `http_2xx`
    
-   `http_3xx`
    
-   `http_4xx`
    
-   `http_5xx`
    

Default value: `http_2xx`

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-domain

The domain name for the health check. Valid values:

-   `$_ip`: The private IP of the backend server. If you specify an IP or do not specify this parameter, the SLB instance uses the private IP of each backend server as the domain name for health checks.
    
-   `domain`: The domain name must be 1–80 characters long and can contain only letters, digits, periods (.), and hyphens (-).
    

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-timeout

The time to wait for a response from the health check. Applies to HTTP mode. If the backend ECS does not respond correctly within the specified time, the health check fails.

Unit: seconds. Valid values: \[1, 300\].

If the value of `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-timeout` is less than the value of service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval, `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-timeout` is invalid, and the timeout is set to the value of `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval`.

For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold

The number of consecutive successful health checks required to change the backend server's status from fail to success.

Valid values: \[2, 10\]. Default value: 3. For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold

The number of consecutive failed health checks required to change the backend server's status from success to fail. Valid values: \[2, 10\]. Default value: 3. For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval

The health check interval. Unit: seconds. Valid values: \[1, 50\]. Default value: 2. For more information, see [CreateLoadBalancerHTTPListener](/help/en/slb/api-createloadbalancerhttplistener).

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-method

The health check method for HTTP listeners. Valid values:

-   `head`
    
-   `get`
    

v2.3.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-flag: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-type: "http"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-uri: "/test/index.html"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold: "4"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-timeout: "10"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval: "3"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
    # Optional. Set the HTTP status code for the health check.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-httpcode: "http_4xx"
    # Optional. Set the domain name for the health check.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-domain: "www.aliyun.com"
    # Optional. Set the health check method.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-method: "head"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure connection draining for the listener**

**Annotation**: Multiple, as shown in the following table. All annotations are required.

Applies only to TCP and UDP protocols.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain

Enable connection draining. Valid values:

-   `on`
    
-   `off`
    

v2.0.1 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain-timeout

Set the connection draining timeout. Unit: seconds. Valid values: \[10, 900\].

v2.0.1 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain-timeout: "30"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure additional request headers for the listener**

**Annotation**: Multiple, as shown in the following table.

Applies only to HTTP and HTTPS protocols.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-proto

Configure whether to use the X-Forwarded-Proto header to get the CLB listener protocol. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

v2.1.0 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-slbport

Configure whether to use the XForwardedFor\_SLBPORT header to get the SLB instance listener port. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

v2.9.1 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-clientsrcport

Configure whether to use the XForwardedFor\_ClientSrcPort header to get the port of the client accessing the SLB instance. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

v2.9.1 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-proto: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-slbport: "on"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-clientsrcport: "on"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Set the idle connection timeout for the listener**

**Annotation**: Multiple, as shown in the following table.

Applies only to HTTP and HTTPS protocols.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-idle-timeout

Set the idle connection timeout for the listener. Unit: seconds. Valid values: \[1, 60\].

Default value: 15

v2.1.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-idle-timeout: "30"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Disable HTTP/2 for the listener**

**Annotation**: Multiple, as shown in the following table.

Applies only to the HTTPS protocol.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

The certificate ID in Alibaba Cloud.

Log on to the [CLB console](https://slb.console.alibabacloud.com/slb/cn-shenzhen/certs) and view the certificate ID on the **Certificate Management** page.

**Note**

To create a certificate, see [Select an Alibaba Cloud-issued certificate](/help/en/slb/classic-load-balancer/user-guide/use-a-certificate-from-alibaba-cloud-ssl-certificates-service#task-1597562).

v1.9.3.164-g2105d2e-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-http2-enabled

Enable HTTP/2. Valid values:

-   `on`
    
-   `off`
    

Default value: `on`

v2.1.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "https:443"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${YOUR_CERT_ID}"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-http2-enabled: "off"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure the request timeout for the listener**

**Annotation**: Multiple, as shown in the following table.

Applies only to HTTP and HTTPS protocols.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-request-timeout

Specify the request timeout. Unit: seconds. Valid values: \[1, 180\]. Default value: 60

If the backend server does not respond within the timeout period, the SLB instance stops waiting and returns an HTTP 504 error code to the client.

v2.3.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "http:80"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-request-timeout: "60"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Set the connection timeout for the listener**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-established-timeout`

Applies only to the TCP protocol.

**Description**

**Supported CCM version**

The connection timeout. Unit: seconds. Valid values: \[10, 900\]. For more information, see [CreateLoadBalancerTCPListener](/help/en/slb/api-createloadbalancertcplistener#doc-api-Slb-CreateLoadBalancerTCPListener).

v2.3.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-established-timeout: "60"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure a security policy for the listener**

**Annotation**: Multiple, as shown in the following table.

Applies only to the HTTPS protocol.

**Annotation**

**Description**

**Supported CCM version**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port

Separate multiple values with commas (,). Example: `https:443,http:80`.

v1.9.3 or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id

The certificate ID in Alibaba Cloud.

Log on to the [CLB console](https://slb.console.alibabacloud.com/slb/cn-shenzhen/certs) and view the certificate ID on the **Certificate Management** page.

**Note**

To create a certificate, see [Select an Alibaba Cloud-issued certificate](/help/en/slb/classic-load-balancer/user-guide/use-a-certificate-from-alibaba-cloud-ssl-certificates-service#task-1597562).

v1.9.3.164-g2105d2e-aliyun or later

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-tls-cipher-policy

The security policy includes optional TLS versions and their corresponding encryption algorithm suites for HTTPS. For more information, see [CreateLoadBalancerHTTPSListener](/help/en/slb/api-createloadbalancerhttpslistener#doc-api-Slb-CreateLoadBalancerHTTPSListener). Valid values:

-   `tls_cipher_policy_1_0`
    
-   `tls_cipher_policy_1_1`
    
-   `tls_cipher_policy_1_2`
    
-   `tls_cipher_policy_1_2_strict`
    
-   `tls_cipher_policy_1_2_strict_with_1_3`
    

Default value: `tls_cipher_policy_1_0`

v2.4.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-protocol-port: "https:443,http:80"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id: "${YOUR_CERT_ID}"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-tls-cipher-policy: "tls_cipher_policy_1_2"
  name: nginx
  namespace: default
spec:
  ports:
  - name: https
    port: 443
    protocol: TCP
    targetPort: 443
  - name: http
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Configure both TCP and UDP protocols for a listener**

**Note**

This feature requires Kubernetes v1.24 or later. To upgrade your cluster, see [Upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
spec:
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
  type: LoadBalancer
```

### **Configure Proxy Protocol for TCP and UDP listeners**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol`

When you access a Service through a CLB IP within a cluster, request traffic may be intercepted internally, resulting in abnormal access. For more information, see [Setting a Hostname for a Service](#c0487e61f5xix), which describes how to add an annotation to force traffic to bypass the CLB. For details, see [Considerations for Accessing the External IP of a LoadBalancer Service from Within a Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#add3f9a05apnz).

**Description**

**Supported CCM version**

Configure Proxy Protocol for TCP and UDP listeners. After configuration, Proxy Protocol can carry the client's source address to the backend server. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

**Important**

This feature does not support smooth online migration. Switching Proxy Protocol requires a service outage for the upgrade. Configure with caution.

v2.6.0 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol: "on"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

## Common backend server group operations

### **Use Worker nodes with specified labels as backend servers**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label`

**Description**

**Supported CCM version**

Specify which Worker nodes to attach to the CLB backend using labels. Separate multiple labels with commas (,), for example, `"k1=v1,k2=v2"`. Multiple labels have an AND relationship. This is effective only when the backend server type is `ecs`.

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label: "failure-domain.beta.kubernetes.io/zone=ap-southeast-5a"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

### **Use nodes where Pods run as backend servers**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler`

By default, `externalTrafficPolicy` is set to Cluster mode, which attaches all nodes in the cluster to the backend server group. Local mode attaches only the nodes where the Pods are running.

**Description**

**Supported CCM version**

The scheduling algorithm. Valid values:

-   `wrr`: Weighted round-robin. Higher weights increase the probability of being selected.
    
    Local mode requires setting the scheduling policy to weighted round-robin (`wrr`).
    
    **Note**
    
    For CCM v1.9.3.164-g2105d2e-aliyun and later, services with the external traffic policy set to **Local** mode automatically set node weights based on the number of Pods on each node. For the weight calculation rule, see [How are node weights automatically set in Local mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-7xa-hpn-yfw).
    
-   `rr`: Round-robin. Distribute requests sequentially to backend servers.
    

Default value: `rr`

v1.9.3 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler: "wrr"
  name: nginx
  namespace: default
spec:
  externalTrafficPolicy: Local
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: LoadBalancer
```

### **Remove** **unschedulable** **nodes from the CLB backend server group**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-remove-unscheduled-backend`

**Description**

**Supported CCM version**

Remove SchedulingDisabled nodes from the CLB backend. Valid values:

-   `on`: Remove **unschedulable** nodes from the CLB backend server group.
    
-   `off`: The `kubectl cordon` and `kubectl drain` commands set nodes to the **unschedulable** state. This setting does not remove **unschedulable** nodes from the CLB backend server group.
    

Default value: `off`

v1.9.3.164-g2105d2e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-remove-unscheduled-backend: "on"
  name: nginx
spec:
  externalTrafficPolicy: Local
  ports:
  - name: http
    port: 30080
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Mount Pod ENIs directly to the CLB backend**

**Annotation**: `service.beta.kubernetes.io/backend-type`

**Description**

**Default value**

**Supported CCM version**

The CLB backend server type. Valid values:

-   `eni`: Attach Pods to the CLB backend to improve network forwarding performance. This is effective only in Terway network mode.
    
    You can also manually change `eni` to `ecs` in `service.beta.kubernetes.io/backend-type: "eni"` to attach ECS to the CLB backend.
    
-   `ecs`: Attach ECS instances to the CLB backend.
    

-   Flannel network mode: `ecs`
    
-   Terway network mode:
    
    -   For Terway clusters created before August 10, 2020: `ecs`
        
    -   For Terway clusters created after August 10, 2020: `eni`
        

v1.9.3.164-g2105d2e-aliyun or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/backend-type: "eni"
  name: nginx
spec:
  ports:
  - name: http
    port: 30080
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

### **Reuse an existing vServer group**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vgroup-port`

Supports reusing an existing vServer group. This is effective only when reusing an existing CLB instance. For a usage example, see [Deploy services across clusters by reusing an existing SLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-ccm-to-deploy-services-across-clusters#task-2129459).

### **Set the traffic weight for the Service**

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-weight`

When multiple Services reuse the same CLB instance, you can use this annotation to set the traffic weight for the current Service. This annotation is effective only when reusing an existing vServer group. For a usage example, see [Deploy services across clusters by reusing an existing SLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-ccm-to-deploy-services-across-clusters#task-2129459).

### Ignore updates to backend server weights

**Annotation**: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ignore-weight-update`

**Description**

**Supported CCM version**

During Service synchronization, skip updating the weights of backend servers in the vServer group. This configuration is suitable for scenarios where you need to manually manage backend server weights using mechanisms other than CCM. Valid values:

-   `on`
    
-   `off`
    

Default value: `off`

v2.11.1 or later

```
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ignore-weight-update: "on"
  name: nginx
  namespace: default
spec:
  ports:
  - port: 443
    protocol: TCP
    targetPort: 443
  selector:
    run: nginx
  type: LoadBalancer
```

## References

-   For notes on configuring Service load balancing and CCM's resource update policy, see [Notes on configuring Service load balancing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1).
    
-   If you encounter issues when using ACK Services, such as an annotation not taking effect, see [Service FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#task-2039653) for troubleshooting.
