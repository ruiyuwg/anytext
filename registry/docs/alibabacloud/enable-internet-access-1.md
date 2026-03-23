By default, the system assigns only a private IP address to an Elastic Container Instance-based pod. If you want to connect a pod to the Internet, for example, if you want to pull an image over the Internet, you can associate an elastic IP address (EIP) with the pod or create an Internet NAT gateway in the virtual private cloud (VPC) to which the pod belongs.

## Background information

The following table describes two methods used to enable Internet access for an elastic container instance.

Method

Description

Billing

Associate an EIP with an elastic container instance

EIPs are public IP addresses that can be separately purchased and managed. You can enable Internet access for an elastic container instance by associating an EIP with the instance.

EIPs support the subscription and pay-as-you-go billing methods and the pay-by-bandwidth and pay-by-data-transfer metering methods. When you associate an EIP with an elastic container instance, you are not charged a configuration fee but may be charged an association fee. For more information, see [Billing overview](/help/en/eip/billing-overview#concept-645525).

Attach a NAT gateway to the VPC in which an elastic container instance resides

NAT gateways are Internet gateways that can be individually purchased. After you associate an EIP with a NAT gateway, the NAT gateway can provide Internet services for all elastic container instances within the associated VPC.

NAT gateways support the pay-as-you-go billing method. A NAT gateway can provide Internet services only after it is associated with an EIP. You must pay for NAT gateways and their associated EIPs. For more information, see [Billing of Internet NAT gateways](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb).

Use appropriate methods to enable Internet access for elastic container instances based on your business requirements.

-   Scenario 1: Enable Internet access to NGINX deployed on an elastic container instance
    
    If you want to deploy the NGINX service on an elastic container instance, you must associate an EIP with the instance when you create the instance. When NGINX starts, the elastic container instance exposes port 80 to the associated EIP. You can then use the EIP and the port number to access NGINX.
    
-   Scenario 2: Allow multiple elastic container instances to pull images from Docker Hub over the Internet
    
    By default, Elastic Container Instance does not provide external links for pulling public images over the Internet. If one or more elastic container instances in a VPC need to pull images from Docker Hub, you must attach a NAT gateway to the VPC to provide Internet access for the instances. Otherwise, the images cannot be pulled.
    

**Note**

When you configure Internet access for elastic container instances, make sure that rules are added to the security groups of the instances to allow traffic on specified ports and to or from specified IP addresses. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).

## **Associate an EIP with the elastic container instance**

When you create a pod, you can add annotations to the metadata in the configuration file of the pod to associate an existing EIP, or allow the system to automatically create an EIP and associate the EIP with the pod.

**Note**

Each EIP can be associated with a single elastic container instance at a time and provide Internet services only for its associated elastic container instance. If multiple elastic container instances need to access the Internet, you must associate an EIP with each of these instances or attach NAT gateways to the VPCs in which the instances reside.

-   **Associate an existing EIP with the pod**
    
    **Annotation**
    
    **Example**
    
    **Description**
    
    k8s.aliyun.com/eci-eip-instanceid
    
    "eip-bp1q5n8cq4p7f6dzu\*\*\*\*"
    
    Specifies the ID of the EIP that you want to associate.
    
-   **Automatically create an EIP and associate the EIP with the pod**
    
    **Annotation**
    
    **Example**
    
    **Description**
    
    k8s.aliyun.com/eci-with-eip
    
    "true"
    
    Specifies whether to automatically create an EIP and associate the EIP with the pod.
    
    k8s.aliyun.com/eip-bandwidth
    
    "10"
    
    Specifies the maximum bandwidth of the EIP. Unit: Mbit/s. Default value: 5.
    
    k8s.aliyun.com/eip-common-bandwidth-package-id
    
    "cbwp-2zeukbj916scmj51m\*\*\*\*"
    
    Specifies the ID of an existing EIP bandwidth plan that you want to associate with the instance. For more information, see [What is an Internet Shared Bandwidth?](/help/en/internet-shared-bandwidth/product-overview/what-is-internet-shared-bandwidth)
    
    k8s.aliyun.com/eip-isp
    
    BGP
    
    Specifies the line type of the EIP. This annotation is applicable only to pay-as-you-go EIPs. Default value: BGP. Valid values:
    
    -   BGP: BGP (Multi-ISP) lines
        
    -   BGP\_PRO: BGP (Multi-ISP) Pro lines
        
    
    For more information, see the "Line types" section of the [Elastic IP Addresses](/help/en/eip/product-overview/what-is-eip#section-vzi-lqi-chm) topic.
    
    k8s.aliyun.com/eip-internet-charge-type
    
    PayByTraffic
    
    Specifies the metering method of the EIP. Valid values:
    
    -   PayByBandwidth: pay-by-bandwidth
        
    -   PayByTraffic: pay-by-traffic
        
    
    For more information about the billing of EIPs, see [Billing overview](/help/en/eip/billing-overview#section-j0c-7wh-cko).
    
    k8s.aliyun.com/eip-public-ip-address-pool-id
    
    pippool-bp187arfugi543y1s\*\*\*\*
    
    Specifies the ID of the IP address pool. The EIP is allocated from the IP address pool. For more information, see [Create and manage IP address pools](/help/en/eip/create-and-manage-ip-address-pools).
    

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Sample configurations:

-   **Example 1: Associate an existing EIP**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
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
            k8s.aliyun.com/eci-eip-instanceid: "eip-bp1q5n8cq4p7f6dzu****"    # Specifies an existing EIP that you want to associate.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
    ```
    
-   **Example 2: Create and associate an EIP and specify the maximum bandwidth of the EIP**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
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
            k8s.aliyun.com/eci-with-eip: "true"   # Creates and associates an EIP.
            k8s.aliyun.com/eip-bandwidth: "10"   # Specifies the maximum bandwidth of the EIP.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
    ```
    
-   **Example 3: Create and associate an EIP and associate an EIP bandwidth plan with the EIP**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: test
    spec:
      replicas: 1
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
            k8s.aliyun.com/eci-with-eip: "true"   # Creates and associates an EIP.
            k8s.aliyun.com/eip-common-bandwidth-package-id: "cbwp-2zeukbj916scmj51m****"  # Associates an EIP bandwidth plan with the EIP.
        spec:
          containers:
          - name: nginx
            image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
    ```
    

## Method 2: Attach a NAT gateway to the VPC in which an elastic container instance resides

In the VPC console, you can attach a NAT gateway to a VPC and associate an EIP with the NAT gateway to implement the following features:

-   SNAT: allows elastic container instances within the VPC to access the Internet when these instances are not assigned public IP addresses.
    
-   DNAT: maps the EIP to the IP addresses of elastic container instances within the VPC so that the instances can provide Internet-facing services.
    

Perform the following steps:

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Internet NAT Gateway** page, create a NAT gateway.
    
    1.  In the left-side navigation pane, choose **NAT Gateway** > **Internet NAT Gateway**.
        
    2.  Click **Create NAT Gateway**.
        
    3.  Configure the parameters for the NAT gateway.
        
        Make sure that the region, zone, VPC, and vSwitch that you specify for the NAT gateway are the same as those of the elastic container instance. For more information, see [Purchase an Internet NAT gateway](/help/en/nat-gateway/purchase-a-nat-gateway#task-2003027).
        
    4.  Confirm the configurations and fees and click **Buy Now**.
        
4.  On the **Elastic IP Addresses** page, create an EIP.
    
    1.  In the left-side navigation pane, choose **Access to Internet** > **Elastic IP Addresses**.
        
    2.  Click **Create EIP**.
        
    3.  Configure the parameters for the EIP.
        
        Make sure that region of the EIP is the same as that of the elastic container instance. For more information, see [Apply for an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).
        
    4.  Confirm the configurations and fees and click **Buy Now**.
        
5.  Associate the EIP with the NAT gateway.
    
    1.  On the **Internet NAT Gateway** page, find the NAT gateway with which you want to associate the EIP and click **Associate Now** in the EIP column.
        
    2.  In the Associate EIP dialog box, select the EIP that you want to associate and click **OK**.
        
6.  To allow your elastic container instance to access the Internet, you must create an SNAT entry for the NAT gateway.
    
    1.  On the **Internet NAT Gateway** page, find the NAT gateway that you want to manage and click **Configure SNAT** in the Actions column.
        
    2.  Click **Create SNAT Entry**.
        
    3.  Configure the parameters for the SNAT entry.
        
        Take note of the parameters that are described in the following table. For more information, see [Create and manage SNAT entries](/help/en/nat-gateway/create-a-snat-entry#task-491135).
        
        Parameter
        
        Description
        
        SNAT Entry
        
        Select a value for this parameter based on factors such as service networking and security:
        
        -   **Specify VPC**: All elastic container instances in the specified VPC can use SNAT to access the Internet.
            
        -   **Specify vSwitch**: All elastic container instances that are connected to the selected vSwitches can use SNAT to access the Internet.
            
        -   **Specify Custom CIDR Block**: All elastic container instances that belong to the specified CIDR block can use SNAT to access the Internet.
            
        
        Select vSwitch
        
        If you set the SNAT Entry parameter to **Specify vSwitch**, you must select one or more vSwitches that are used to create your elastic container instance.
        
        Custom CIDR block
        
        If you set the SNAT Entry parameter to **Specify Custom CIDR Block**, you must specify the CIDR block to which your elastic container instance that will access the Internet belongs.
        
        Select Public IP Address
        
        Select one or more EIPs that are associated with the NAT gateway to access the Internet.
        
    4.  Click **OK**.
        
    
    **Note**
    
    If your elastic container instance has an associated EIP, the instance uses this EIP instead of the SNAT feature of the NAT gateway to access the Internet.
    
7.  To allow your elastic container instance to provide Internet-facing services, you must create a DNAT entry for the NAT gateway.
    
    1.  On the **Internet NAT Gateway** page, find the NAT gateway that you want to manage and click **Configure DNAT** in the Actions column.
        
    2.  Click **Create DNAT Entry**.
        
    3.  Configure the parameters for the DNAT entry.
        
        Take note of the parameters that are described in the following table. For more information, see [Create and manage DNAT entries](/help/en/nat-gateway/create-a-dnat-entry#task-491131).
        
        Parameter
        
        Description
        
        Select Public IP Address
        
        The EIP that is associated with the NAT gateway to access the Internet.
        
        Select Private IP Address
        
        The elastic container instance that needs to communicate with the Internet by using the DNAT entry. You can specify the elastic network interface (ENI) that is bound to the instance or enter the private IP address of the instance.
        
        Port Settings
        
        The DNAT mapping method. Valid values:
        
        -   Any Port: specifies IP address mapping. The NAT gateway forwards the requests destined for the associated EIP to the selected elastic container instance.
            
        -   Specific Port: specifies port mapping. The NAT gateway forwards the requests from a specific protocol and port destined for the associated EIP to the corresponding port on the selected elastic container instance.
            
        
    4.  Click **OK**.
