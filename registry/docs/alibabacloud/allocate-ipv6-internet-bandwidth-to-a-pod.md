By default, IPv6 addresses support only internal-facing access. To allow a pod to access public IPv6 addresses, you must configure IPv6 Internet bandwidth using an IPv6 gateway. This topic describes how to assign a bandwidth plan to a pod's IPv6 address and configure egress rules.

## Prerequisites

-   You have created an ACK managed cluster or an ACK dedicated cluster. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) and [Create an ACK dedicated cluster (no longer available for new clusters)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb). The cluster must meet the following requirements:
    
    -   You have enabled IPv6 dual-stack. For more information about IPv6 gateways, see [What is an IPv6 gateway?](/help/en/ipv6-gateway/product-overview/what-is-an-ipv6-gateway/#concept-kjx-3nt-zfb)
        
    -   The cluster uses the Terway network plug-in.
        
-   You have created an IPv6 gateway in your VPC and deployed the ipv6gw controller. For more information, see [Create and manage an IPv6 gateway](/help/en/ipv6-gateway/user-guide/create-and-manage-an-ipv6-gateway#task-2202006).
    

**Important**

Only some ECS instances support IPv6. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

## Limits

-   This topic describes how to use the **ack-extend-network-controller** component to enable IPv6 gateway features. The component configures IPv6 Internet bandwidth using annotations such as `k8s.aliyun.com/ipv6-bandwidth`. This method supports only standard ECS nodes and pods. It does not support ECI or ACS instances. To configure IPv6 Internet bandwidth for ECI and ACS instances, see [Assign IPv6 addresses to ECI pods](/help/en/eci/user-guide/assign-an-ipv6-address-to-an-elastic-container-instance) and [Assign IPv6 addresses to ACS pods](/help/en/cs/user-guide/assign-ipv6-addresses-to-pods).
    
-   The bandwidth and the number of configuration entries are limited by the capabilities of the IPv6 gateway. For more information about the limits, see [Limits](/help/en/ipv6-gateway/product-overview/limits#concept-x1s-cyt-zfb).
    

## Enable IPv6 gateway features in ack-extend-network-controller

The ack-extend-network-controller component uses Alibaba Cloud OpenAPI to create resources. You must configure the required permissions in RAM. Then, you need to install the ack-extend-network-controller component from the Alibaba Cloud Marketplace. Finally, you can use annotations to create an IPv6 gateway and associate it with a specific pod.

### Step 1: Configure RAM permissions for IPv6

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Cluster Information**.
    
3.  On the **Cluster Information** page, go to the **Basic Information** tab. Click the link next to **Worker RAM Role**.
    
4.  Create a custom policy that contains the following content. For more information, see [Step 1: Create a custom policy](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-e1o-r03-6ck).
    
    ```
    {
          "Effect": "Allow",
          "Action": [
            "vpc:DescribeIpv6Addresses",
            "vpc:CreateIpv6EgressOnlyRule",
            "vpc:DeleteIpv6EgressOnlyRule",
            "vpc:DescribeIpv6EgressOnlyRules",
            "vpc:AllocateIpv6InternetBandwidth",
            "vpc:DeleteIpv6InternetBandwidth"
          ],
          "Resource": [
            "*"
          ],
          "Condition": {}
        }
    ```
    
5.  Grant the custom policy to the Worker RAM role of your cluster. For more information, see [Step 2: Grant permissions to the Worker RAM role of your cluster](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-fos-elh-uul).
    

### Step 2: Enable the ipv6gw controller for the ack-extend-network-controller component

Install the ack-extend-network-controller component from the ACK Marketplace and enable the ipv6gw controller. For more information, see [Marketplace](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/app-marketplace#task-dby-n5y-ne0).

The ipv6gw controller configuration parameters are as follows.

```
clusterID: "c11ba338192xxxxxxx"          # Replace with your actual cluster ID.
regionID: "cn-hangzhou"                  # Replace with your actual region ID.
vpcID: "vpc-bp1rkq0zxxxxxx"              # Replace with your actual VPC ID.
enableControllers:
  - ipv6gw                               # Enable the IPv6 gateway controller.
networkController:
  ipv6GatewayController:
    maxConcurrentReconciles: 10          # Set the maximum concurrent reconciliations.

credential:                               # Use AccessKey pairs. For ACK managed and ACK dedicated clusters, we recommend using RAM roles instead.
  accessKey: ""
  accessSecret: ""
```

## Configure bandwidth and egress rules for IPv6 networks on pods

Use the following pod annotations to configure bandwidth, billing methods, and egress rules for IPv6 networks:

**Pod annotation**

**Value**

k8s.aliyun.com/ipv6-bandwidth

The public bandwidth of the IPv6 gateway, in Mbps. Valid values: 1 to 5000.

For more information, see [AllocateIpv6InternetBandwidth](/help/en/ipv6-gateway/developer-reference/api-allocateipv6internetbandwidth#doc-api-Vpc-AllocateIpv6InternetBandwidth).

k8s.aliyun.com/ipv6-internet-charge-type

The billing method for IPv6 Internet bandwidth. Valid values:

-   `PayByTraffic`: Pay-by-traffic.
    
-   `PayByBandwidth` (default): Pay-by-bandwidth.
    

For more information, see [AllocateIpv6InternetBandwidth](/help/en/ipv6-gateway/developer-reference/api-allocateipv6internetbandwidth#doc-api-Vpc-AllocateIpv6InternetBandwidth).

k8s.aliyun.com/ipv6-egress-only

Create an egress-only rule.

## Console procedure

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workloads** > **Deployments**.
    
3.  In the upper-right corner of the **Deployments** page, click **Create from YAML**. Paste the following YAML example into the **Templates** editor, and then click **Create**.
    
    This example configures 10 Mbps IPv6 bandwidth for the pod and creates an egress-only rule.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: example
      labels:
        app: example
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: example
      template:
        metadata:
          labels:
            app: example
          annotations:
            k8s.aliyun.com/ipv6-bandwidth: "10" # Set the IPv6 gateway's public bandwidth to 10 Mbps.
            k8s.aliyun.com/ipv6-egress-only: "" # Create an egress-only rule.
        spec:
          containers:
          - name: example
            image: nginx
    ```
    
4.  On the **Deployments** page, click the deployment named **example**. On the **example** overview page, find the name of the pod that is created.
    
5.  Run the following command to query the `podipv6gws.alibabacloud.com` resource that has the same name as the pod. You can check the status of the assigned bandwidth plan and the egress-only rule in the output.
    
    ```
    kubectl get podipv6gws.alibabacloud.com  -oyaml example-674b897446-q****
    ```
    
    Expected output:
    
    ```
    apiVersion: alibabacloud.com/v1beta1
    kind: PodIPv6GW
    metadata:
      creationTimestamp: "2024-02-07T06:00:48Z"
      finalizers:
      - ipv6gw-controller.alibabacloud.com/finalizer
      generation: 1
      name: example-674b897446-q****
      namespace: default
      ownerReferences:
      - apiVersion: v1
        kind: Pod
        name: example-674b897446-q****
        uid: bdf86c45-7**5-4**4-b**3-9b****
      resourceVersion: "11488"
      uid: 78747d60-9**8-4**e-b**8-f7f7c****
    spec:
      bandwidth: 10
      egressOnlyRule: true
      ipv6Address: 2408:4006:1115:xxxx:xxxx:xxxx:xxxx:xxxx
     status:
        ipv6AddressID: ipv6-xxx
        ipv6EgressOnlyRuleID: ipv6py-xxx
        ipv6GatewayID: ipv6gw-xxx
        ipv6InternetBandwidthID: ipv6bw-xxx
    ```
    

## kubectl procedure

1.  Create a file named example.yaml that contains the following content.
    
    This example configures 10 Mbps IPv6 bandwidth for the pod and creates an egress-only rule.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: example
      labels:
        app: example
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: example
      template:
        metadata:
          labels:
            app: example
          annotations:
            k8s.aliyun.com/ipv6-bandwidth: "10" # Set the IPv6 gateway's public bandwidth to 10 Mbps.
            k8s.aliyun.com/ipv6-egress-only: "" # Create an egress-only rule.
        spec:
          containers:
          - name: example
            image: nginx
    ```
    
2.  Run the following command to create the resource.
    
    ```
    kubectl apply -f example.yaml
    ```
    
    Expected output:
    
    ```
    deployment.apps/example created
    ```
    
3.  Run the following command to view the name of the pod that is created.
    
    ```
    kubectl get podipv6gws -n <namespace where example is deployed>
    ```
    
4.  Run the following command to query the `podipv6gws.alibabacloud.com` resource that has the same name as the pod. You can check the status of the assigned bandwidth plan and the egress-only rule in the output.
    
    ```
    kubectl get podipv6gws.alibabacloud.com  -oyaml example-674b897446-q****
    ```
    
    Expected output:
    
    ```
    apiVersion: alibabacloud.com/v1beta1
    kind: PodIPv6GW
    metadata:
      creationTimestamp: "2024-02-07T06:00:48Z"
      finalizers:
      - ipv6gw-controller.alibabacloud.com/finalizer
      generation: 1
      name: example-674b897446-q****
      namespace: default
      ownerReferences:
      - apiVersion: v1
        kind: Pod
        name: example-674b897446-q****
        uid: bdf86c45-7**5-4**4-b**3-9b****
      resourceVersion: "11488"
      uid: 78747d60-9**8-4**e-b**8-f7f7c****
    spec:
      bandwidth: 10
      egressOnlyRule: true
      ipv6Address: 2408:4006:1115:xxxx:xxxx:xxxx:xxxx:xxxx
     status:
        ipv6AddressID: ipv6-xxx
        ipv6EgressOnlyRuleID: ipv6py-xxx
        ipv6GatewayID: ipv6gw-xxx
        ipv6InternetBandwidthID: ipv6bw-xxx
    ```
    

## FAQ

### How do I deploy the ack-extend-network-controller component in an ACK serverless cluster?

We do not recommend that you deploy this component in an ACK serverless cluster. If you must deploy the component, you must first generate an AccessKey pair for a RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540) and [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286). Then, when you deploy the component from the Marketplace, specify the AccessKey pair in the corresponding fields.

## References

For more information about accessing external networks from pods, see [Notes on accessing external networks from pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-pod-to-access-an-external-network).
