You can add annotations to the YAML file of a Service to configure load balancing. This topic describes how to use annotations to configure Edge Load Balancer (ELB) instances, listeners, backend server groups, and edge elastic IP addresses (edge EIPs).

## Precautions

-   The content of annotations is case-sensitive. Use lowercase letters.
    
-   Set the Service type to `type: LoadBalancer`.
    
-   To use ELB instances, set the load balancer type to `loadBalancerClass: alibabacloud.com/elb`.
    

## **ELB**

**Important**

For more information about ELB instance types and billing methods, see [CreateLoadBalancer](/help/en/ens/api-createloadbalancer). You cannot update the configuration of a load balancer after the load balancer is created.

### **Create an ELB instance that is managed by the** EdgeControllerManager (ECM)

-   You must specify the NodePoolSelector in one of the following ways:
    
    -   `key1=val1,key2=val2`: ELB instances are created for Edge Node Service (ENS) node pools that meet both the `key1=val1` and `key2=val2` conditions. The logical relationship among multiple labels is AND.
        
    -   `key in (val1,val2)`: ELB instances are created for ENS node pools that meet the `key=val1` or `key=val2` condition. The logical relationship among multiple values is OR.
        
-   `openyurt.io/topologyKeys: openyurt.io/nodepool` specifies the Service topology of a node pool. This ensures that traffic is forwarded only to application pods in the specified node pool.
    
    YAML content:
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx
      namespace: default
      annotations:
        openyurt.io/topologyKeys: openyurt.io/nodepool           #Enable the Service topology feature.
        service.openyurt.io/nodepool-labelselector: key1=val1    #Select ENS node pools. 
    spec:
      ports:
      - name: nginx-80
        port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx
      type: LoadBalancer
      loadBalancerClass: alibabacloud.com/elb
    ```
    

### **Specify an ELB instance type and billing method**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec

For more information about ELB instance types, see [Instance types and billing](/help/en/ens/what-is-elb#section-y9y-y38-sk2). You can set this parameter to specify an ELB instance type.

**elb.s2.small**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-pay-type

The billing method of the ELB instance. Only the pay-as-you-go (PostPaid) billing method is supported. For more information about billing rules, see [Pricing](/help/en/ens/what-is-elb#57d615e1ec85a).

**PostPaid**

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool          
    service.openyurt.io/nodepool-labelselector: key1=val1   
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: elb.s1.small
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-pay-type: PostPaid    
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

### **Specify the Service expose mode**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type

The mode in which the ELB instance exposes Services:

-   internet: Services are exposed to the Internet. In this mode, you need to buy an internal-facing ELB instance and assign an EIP to the ELB instance.
    
-   intranet: Services are exposed to private networks. In this mode, you need only to buy an internal-facing ELB instance.
    

**internet**

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool          
    service.openyurt.io/nodepool-labelselector: key1=val1
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: internet 
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

### **Specify the EIP specifications when Services are exposed to the Internet**

To expose Services to the Internet, you need to buy an internal-facing ELB instance and an EIP.

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-bandwidth

The Internet bandwidth indicates the maximum bandwidth of the EIP. Unit: Mbit/s.

**10**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-isp

ISP information:

-   cmcc: China Mobile.
    
-   unicom: China Unicom.
    
-   elecom: China Telecom.
    

**None**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-instance-charge-type

The billing method of the EIP. Only the pay-as-you-go (PostPaid) billing method is supported.

**PostPaid**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-internet-charge-type

The billing method of Internet bandwidth. Only the pay-by-monthly-95th-percentile (95BandwidthByMonth) billing method is supported.

**95BandwidthByMonth**

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool           #Enable the Service topology feature.
    service.openyurt.io/nodepool-labelselector: key1=val1    #Select ENS node pools.
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: internet     
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-bandwidth: "10"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-isp: cmcc
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-instance-charge-type: "PostPaid"
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-eip-internet-charge-type: "95BandwidthByMonth"
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

## **Backend server groups**

-   In local mode, the external traffic policy distributes traffic only to nodes (backend servers) that host application pods. If multiple Services share one ELB instance, you cannot set the external traffic policy to the **local mode**.
    
-   You must set the external traffic policy to the cluster mode. In this mode, the policy distributes traffic to all ENS nodes (backend servers) in the virtual private cloud (VPC).
    

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool           #Enable the Service topology feature.
    service.openyurt.io/nodepool-labelselector: key1=val1    #Select ENS node pools.
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
  externalTrafficPolicy: Local
```

### **Add edge nodes with specified labels as backend servers**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label

Specify the labels of worker nodes that you want to add as backend servers. Separate multiple labels with commas (,), for example, `k1=v1,k2=v2`. The logical relationship among multiple labels is AND.

N/A

To exclude edge nodes when you add backend servers, add the `node.kubernetes.io/exclude-from-external-load-balancers=true` label to edge nodes.

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    service.openyurt.io/nodepool-labelselector: key1=val1
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label: key2=val2
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
  externalTrafficPolicy: Local
```

### **Configure backend server weights**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-weight

If listeners use the weight round-robin (WRR) method, requests are distributed to backend servers based on the weights of the backend servers. You must separate multiple node and weight pairs with commas (,).

For example, in `base=50,node1=80,node2=90`, `base` indicates the weight that is assigned to all backend servers by default. Node 1 and Node 2 are assigned the specified weights.

base=100

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    service.openyurt.io/nodepool-labelselector: key1=val1,key2=val2
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-weight: base=50,node1=80,node2=90
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

## **Listeners**

The ECM automatically creates listeners based on the Spec.ports of a Service. The backend server ports that the listeners listen on are allocated by the cluster. To listen on specific backend server ports, specify `nodePort: ${YOUR_SPEC_PORT}`. YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    service.openyurt.io/nodepool-labelselector: key1=val1
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    nodePort: 30080
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

### **Configure a scheduling algorithm for listeners**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler

Listeners support the following scheduling algorithms:

-   **wrr**: Backend servers with higher weights receive more requests.
    
-   **rr**: Requests are evenly distributed to all backend servers.
    
-   **wlc**: Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections to a backend server.
    
-   **sch**: Consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **qch**: Consistent hashing based on Quick UDP Internet Connection (QUIC) IDs. Requests that contain the same QUIC ID are scheduled to the same backend server.
    
-   **iqch**: Consistent hashing based on three specific bytes of iQUIC CID. Requests with the same second, third, and forth bytes are scheduled to the same backend server.
    

**rr**

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    service.openyurt.io/nodepool-labelselector: key1=val1
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler: "wrr"
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    nodePort: 30080
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

### **Configure the session persistence period for TCP listeners**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-persistence-timeout

The session persistence period. This annotation applies only to TCP listeners. If an ELB instance has multiple TCP listeners, the configuration applies to all TCP listeners by default.

Unit: seconds. Valid values: 0 to 3600. A value of 0 indicates that session persistence is disabled.

**0**

### **Configure the connection timeout period for TCP listeners**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-established-timeout

The connection timeout period. Unit: seconds. Valid values: 10 to 900.

**500**

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    service.openyurt.io/nodepool-labelselector: key1=val1,key2=val2
    service.beta.kubernetes.io/alibaba-cloud-loadbalancer-established-timeout: "900"
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    nodePort: 30080
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

### **Configure health checks for listeners**

**Annotation**

**Description**

**Default value**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold

The number of times that a backend server must consecutively pass health checks before its status can change from fail (unavailable) to success (available). Valid values: **2** to **10**.

**3**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold

The number of times that a backend server must consecutively fail health checks before its status can change from success (available) to fail (unavailable). Valid values: **2** to **10**.

**3**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-check-interval

The interval between two consecutive health checks. Valid values: **2** to **10**. Unit: seconds.

**2**

service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout

The timeout period of health check responses. If a backend server does not respond within the specified timeout period, the server fails to pass the health check. Valid values: **1** to **300**. Unit: seconds.

**5**

YAML content:

```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: default
  annotations:
   openyurt.io/topologyKeys: openyurt.io/nodepool
   service.openyurt.io/nodepool-labelselector: key1=val1,key2=val2
   service.beta.kubernetes.io/alibaba-cloud-loadbalancer-healthy-threshold: "5"
   service.beta.kubernetes.io/alibaba-cloud-loadbalancer-unhealthy-threshold: "5"
   service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-interval: "2"
   service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-connect-timeout: "5"
spec:
  ports:
  - name: nginx-80
    port: 80
    protocol: TCP
    nodePort: 30080
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
  loadBalancerClass: alibabacloud.com/elb
```

### **Advanced configuration**

This section describes the advanced configuration of ELB.

1.  Create Services in different scenarios.
    
    #### Specify an existing ELB instance
    
    To specify an existing ELB instance, you must specify the network ID and ELB instance ID.
    
    -   Create a Service based on the following YAML content:
        
        ```
        apiVersion: v1
        kind: Service
        metadata:
          name: nginx
          namespace: default
          annotations:
            openyurt.io/topologyKeys: openyurt.io/nodepool           #Enable the Service topology feature.
            service.openyurt.io/nodepool-labelselector: key1=val1
            service.beta.kubernetes.io/alibaba-cloud-loadbalancer-managed-by-user: "true"
        spec:
          ports:
          - name: nginx-80
            port: 80
            protocol: TCP
            targetPort: 80
          selector:
            app: nginx
          type: LoadBalancer
          loadBalancerClass: alibabacloud.com/elb
        ```
        
    
    #### Create multiple Services that share one ELB instance
    
    -   You must set the external traffic policy to the cluster mode.
        
    -   You must use a self-managed ELB instance and specify the ELB instance.
        
    -   To use EIPs to enable Internet access, you must manually create and manage an EIP.
        
    -   You must forcefully overwrite listeners by setting the corresponding parameter to true.
        
    
    YAML content:
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx
      namespace: default
      annotations:
        openyurt.io/topologyKeys: openyurt.io/nodepool           #Enable the Service topology feature.
        service.openyurt.io/nodepool-labelselector: key1=val1
        service.openyurt.io/elb-force-override-listeners: "true"
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-managed-by-user: "true"
    spec:
      ports:
      - name: nginx-80
        port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx
      type: LoadBalancer
      loadBalancerClass: alibabacloud.com/elb
    ```
    
2.  Find the PoolService corresponding to the node pool (ENS VPC) and run the following command to configure load balancing:
    
    ```
    kubectl annotate ps {<SERVICENAME>-NodePoolID} service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id=<lb_ID>
    ```
    
    **Note**
    
    Replace `<SERVICENAME>` in the preceding command with the name of the PoolService of the node pool (ENS VPC).
    
    Replace `<lb_ID>` with the ID of the ELB instance.
