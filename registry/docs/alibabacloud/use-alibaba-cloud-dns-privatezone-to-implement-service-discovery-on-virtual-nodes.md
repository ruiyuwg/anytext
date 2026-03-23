ACK virtual nodes support service discovery based on Alibaba Cloud DNS PrivateZone. This feature synchronizes DNS records of Headless, ClusterIP, and internal LoadBalancer type Services to PrivateZone. This topic describes how to enable PrivateZone and synchronize DNS records of Services bound to ECI pods to PrivateZone, allowing you to access the corresponding Services using domain names.

## **Background information**

Alibaba Cloud DNS PrivateZone ([internal DNS resolution](/help/en/dns/introduction-to-intranet-analysis)) is a comprehensive DNS resolution service for corporate intranet scenarios, primarily for Alibaba Cloud VPC intranet environments. It provides domain name resolution and internal domain name acceleration services for various clients (such as ECS instances and containers) in VPC intranet environments. Using PrivateZone incurs fees. For more information, see [Billing](/help/en/dns/product-billing).

## Prerequisites

-   The [ack-virtual-node](/help/en/ack/product-overview/ack-virtual-node) component is installed in the cluster. For more information, see [Deploy the ack-virtual-node component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods#section-nz6-jj2-383).
    
-   This feature cannot be used with CoreDNS. Ensure that the [CoreDNS](/help/en/ack/product-overview/coredns) component is not installed in the cluster.
    
-   PrivateZone is activated in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/privateDNS).
    

## Enable PrivateZone

1.  Modify the eci-profile configuration to enable PrivateZone.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
        
    3.  Select **Namespace** as **kube-system**, find **eci-profile**, and then click **Edit**.
        
    4.  Change the value of `enablePrivateZone` to `true`, and then click **OK**.
        
2.  Confirm that PrivateZone is enabled.
    
    1.  In the navigation pane on the left of the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/privateDNS), click **Private Zone**.
        
    2.  On the **User Defined Zones** under the **Authoritative Zone** tab, verify that a zone named **s****vc.cluster.local.<cluster ID>** is generated.
        

## Synchronize DNS records of Services to PrivateZone

1.  Create a Deployment and Services for testing.
    
    1.  Save the following YAML content as test-pz.yaml.
        
        The following YAML creates one Deployment and three Services. The types of the Services are Headless, ClusterIP, and LoadBalancer.
        
        **Important**
        
        By default, DNS records of Services are not synchronized to PrivateZone. After you add the `service.beta.kubernetes.io/alibaba-cloud-private-zone-enable: "true"` annotation to a Service, the virtual node controller synchronizes the DNS records of the Service to PrivateZone.
        
        ```
        apiVersion: v1
        kind: Service
        metadata:
          name: nginx-headless-service
          annotations:
             service.beta.kubernetes.io/alibaba-cloud-private-zone-enable: "true"
        spec:
          ports:
          - port: 80
            protocol: TCP
          selector:
            app: nginx
          clusterIP: None
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: nginx-clusterip-service
          annotations:
             service.beta.kubernetes.io/alibaba-cloud-private-zone-enable: "true"
        spec:
          ports:
          - port: 80
            protocol: TCP
          selector:
            app: nginx
          type: ClusterIP
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: nginx-intranet-service
          annotations:
            service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type: "intranet"
            service.beta.kubernetes.io/alibaba-cloud-private-zone-enable: "true"
        spec:
          ports:
          - port: 80
            protocol: TCP
          selector:
            app: nginx
          type: LoadBalancer
        ---  
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: nginx-deployment
          labels:
            app: nginx
        spec:
          replicas: 3
          selector:
            matchLabels:
              app: nginx
          template:
            metadata:
              labels:
                app: nginx
                alibabacloud.com/eci: "true"          # Add a specific label to schedule pods to ECI
            spec:
              containers:
              - name: nginx
                image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
                ports:
                - containerPort: 80
        ```
        
    2.  Create the Deployment and Services.
        
        ```
        kubectl create -f test-pz.yaml
        ```
        
2.  Confirm that the DNS records of the Services are synchronized to PrivateZone.
    
    1.  In the navigation pane on the left of the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/privateDNS), click **Private Zone**.
        
    2.  On the **User Defined Zones** under the **Authoritative Zone** tab, find the zone named **svc.cluster.local.<cluster ID>**, and click **Settings**.
        
    3.  On the **Settings** tab, you can see that the DNS records of the Services are automatically synchronized.
        
        The format of DNS records in the zone is `<service-name>.<namespace>`, which corresponds to the respective IP resolution. The resolution rules are as follows:
        
        -   Headless Service: corresponds to multiple DNS records, each for the IP address of a backend pod.
            
        -   ClusterIP Service: corresponds to one DNS record for the Cluster IP (a virtual IP address assigned by the cluster to the Service for internal communication within the cluster).
            
        -   LoadBalancer Service: corresponds to one DNS record for the Cluster IP (a virtual IP address assigned by the cluster to the Service for internal communication within the cluster).
            
        
        ![service解析记录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9077772571/p980401.png)
        
        After synchronization, you can access Services through private domain names in the VPC environment.
        
        -   Short domain name access: Within the cluster, access a Service in the same namespace using `<service-name>`, or access a Service in another namespace using `<service-name>.<namespace>`.
            
        -   Long domain name access: Outside the cluster, access a Service using `<service-name>.<namespace>.svc.cluster.local.<clusterId>`. This applies only to Headless Services.
