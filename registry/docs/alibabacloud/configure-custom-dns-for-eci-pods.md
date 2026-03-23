In hybrid cloud scenarios, if you want to pull images from an image repository in an internal network or a container needs to access an internal domain name, you must configure the Domain Name System (DNS) server of the Elastic Container Instance-based pod to the internal DNS server. Then, you can use the internal DNS server to resolve the internal domain name. This topic describes how to configure a custom DNS server for an Elastic Container Instance-based pod.

## **Background information**

In hybrid cloud scenarios, if a Kubernetes cluster contains an on-premises node and an image repository resides on a on-premises node, pods may be unable to access the on-premises internal network environment because the DNS server of the cluster cannot resolve the local internal network. Elastic Container Instance provides the custom DNS server feature. You can configure custom DNS servers for Elastic Container Instance-based pods to resolve internal domain names. Then, you can access the local internal network.

## **Configuration description**

You can add the `k8s.aliyun.com/eci-custom-dnsconfig` annotation to the metadata in the configuration file of a pod to specify that the pod uses the custom DNS server. The value of this annotation is in the `{\"nameservers\":\"20.1.xx.xx,20.1.xx.xx\",\"searches\":\"xx.com,xx.eee\",\"options\":\"ndots:2,edns0\"}` format. The following table describes the fields that are included in the configuration file.

**Field**

**Description**

nameservers

The IP addresses of the DNS server. A maximum of two IP addresses are supported. Extra IP addresses are automatically ignored.

In addition, the system automatically adds the IP address of the Alibaba Cloud DNS server to the end of the field value to ensure that the system works as expected.

searches

The search domains of the DNS server. A maximum of 32 search domains are allowed.

If you enter an incomplete domain name for resolution, the system tries to use the domain name suffix in the value of the searches field to complement the domain name and then resolves the domain name.

options

The DNS resolution options. The values can be multiple key-value pairs. Common options include:

-   ndots: specifies that the minimum number of periods (.) that a DNS server name must contain to be considered as an absolute domain name. Otherwise, DNS tries to resolve the domain name in the search domain.
    
-   edns0: enables EDNS0 extension to support larger User Datagram Protocol (UDP) packets and improve security.
    
-   timeout: specifies the timeout period for DNS queries.
    
-   attempts: specifies the number of DNS query tries.
    

Configuration example:

**Note**

You can configure the `dnsPolicy` field for the pod based on your business requirements. We recommend that you set the `dnsPolicy` field to `Default`, which indicates that the pod inherits the DNS configuration of the node where the pod resides.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-custom-dnsconfig: "{\"nameservers\":\"20.1.xx.xx,20.1.xx.xx\",\"searches\":\"xx.com,xx.eee\",\"options\":\"ndots:2,edns0\"}"
    spec:
      dnsPolicy: Default  
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

## **References**

For more information about DNS configurations, see [DNS overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/).
