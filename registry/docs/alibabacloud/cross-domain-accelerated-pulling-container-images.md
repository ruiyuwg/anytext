To pull container images from overseas sources across regions in an ACK cluster, you can create a Global Accelerator (GA) instance to use its global network acceleration service.

## **Prerequisites**

An ACK managed cluster Pro version with version 1.24 or later has been created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/). To upgrade a cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

## **Considerations**

You must regulate your network access behavior. If the target website you are accessing contains illegal information, you may not be able to access it normally.

## **Billing**

When you use this feature, in addition to the [associated costs](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing) of the ACK cluster, you also incur GA instance fees. These fees include instance fees, performance Capacity Unit (CU) fees, and network bandwidth fees. For more information, see [Product Billing](/help/en/ga/product-overview/billing-overview/).

## **Step 1: Create a medium** GA **instance**

A medium GA instance provides a fully connected network with multiple access regions and multiple source site regions, supporting Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS) protocol acceleration. You can configure the overseas regions that require network acceleration for the GA instance, and the access addresses of the image repositories to be pulled (such as docker.io).

**Note**

The acceleration network line of the medium GA instance created in this example is set to premium bandwidth cross-border acceleration by default.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, click **Create Standard Pay-as-you-go Instance**. Follow the page prompts to configure settings on different configuration wizard pages, carefully read the notes on the page, and then complete the review and submission of configuration items.
    
    This step introduces how to create a pay-as-you-go medium GA instance based on some main configuration items. For more information, see [Create and manage a medium Global Accelerator instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances).
    
    **Configuration**
    
    **Description**
    
    **Basic Instance Configuration**
    
    **Instance Billing Method**
    
    The default is **Pay-As-You-Go**.
    
    The fees for a pay-as-you-go Standard GA instance include the [GA instance fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#section-29l-vls-0j9), [CU fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#4af14fc025v6q), and [data transfer fee](/help/en/ga/product-overview/pay-by-data-transfer).
    
    **Configure Acceleration Area**
    
    **Acceleration Area**
    
    Select the region where your ACK cluster is located as the acceleration area. In this example, Hangzhou and Shanghai are selected.
    
    **Note**
    
    For the acceleration areas supported by GA, see [Acceleration areas and regions](/help/en/ga/user-guide/overview-1/#05cc333029x1g).
    
    **Assign Bandwidth**
    
    -   **Maximum Bandwidth**: The bandwidth for the acceleration region. In this example, both are set to 200 Mbps.
        
    -   **IP Protocol**: The IP address protocol for accessing GA. In this example, both are set to **IPv4**.
        
    
    **Configure listeners**
    
    **Protocol**
    
    The network transmission protocol type for the listener. In this example, it is set to TCP.
    
    **Port**
    
    Specify a port for the listener to receive and forward requests to endpoints. Valid values: **1 to 65499**.
    
    You can specify up to 30 ports for each listener. Separate multiple listener ports with commas (,). For example, you can enter 80,90,8080.
    
    In this example, it is set to `80,443`.
    
    ****Configure an endpoint group****
    
    **Region**
    
    The overseas region that requires network acceleration. In this example, it is set to US (Virginia).
    
    **Endpoint Configuration**
    
    An endpoint is the target host that the client requests to access. You can configure endpoints according to the following examples.
    
    -   **Backend Service Type**: In this example, select **Custom Domain Name**.
        
    -   **Backend Service**: The access domain name address of the image Registry to be pulled. In this example, it is set to `docker.io`.
        
    -   **Weight**: Enter a weight for the endpoint. The valid values are 0 to 255. Global Accelerator routes traffic to endpoints based on the weights that you configure.
        
        **Warning**
        
        If you set the weight of an endpoint to 0, Global Accelerator stops distributing network traffic to the endpoint. Proceed with caution.
        
        In this example, it is set to `255`.
        
    
    After completing the configuration, follow the page prompts to go to the GA instance details page.
    
3.  On the GA instance details page, click the **Acceleration Areas** tab. In the **Accelerated IP Address** column of the area list, record the accelerated IP information for the region where the ACK cluster is located, for use in [Step 3: Configure DNS records](#b3e13e50bf7bf).
    

## **Step 2: Configure forwarding rules for the GA instance**

To configure forwarding rules for other related domain name addresses of the target image, you can add a virtual endpoint group to the listener.

After creating a virtual endpoint group for the listener, you can create custom forwarding rules and associate them with the virtual endpoint group. After association, the listener can forward access requests that meet the forwarding conditions to the corresponding default endpoint group or virtual endpoint group, allowing one Global Accelerator instance to accelerate access to multiple target endpoints. For more information, see [Add and manage forwarding rules](/help/en/ga/user-guide/create-and-manage-forwarding-rules#task-2039265).

1.  On the GA instance details page, click the **Listener**s tab, and then click the listener ID in the ID and Name column of the listener list to go to the **Listeners Details** page.
    
2.  Click the **Endpoint Group** tab, and then click **Add Virtual Endpoint Group**. Complete the configuration according to the page prompts.
    
    The example configuration for **Endpoint Configuration** is as follows:
    
    -   **Backend Service Type**: Select Custom domain name.
        
    -   **Backend Service**: The related domain name address involved in the image source to be pulled (such as `production.cloudflare.docker.com`).
        
    -   **Weight**: Keep it as `255`.
        
3.  On the listener configuration page, click the **Forwarding Rule** tab, and then click **Add Forwarding Rule**. Configure the new forwarding rule according to the page prompts.
    
    The example configuration for the main configuration items is as follows:
    
    -   **Host****:** For the domain name matching rule, select **Exact Match**. The forwarding domain name is the related domain name address involved in the target image source to be pulled (such as `production.cloudflare.docker.com`).
        
    -   **Then****:** Configure forwarding to the virtual endpoint group, and select the virtual endpoint group added in the previous step.
        

## Step 3: Configure DNS records

You can implement local domain name resolution by adding resolution records to the `/etc/hosts` file on the ACK cluster nodes. You can also implement internal DNS resolution by configuring [internal DNS resolution (PrivateZone)](/help/en/dns/introduction-to-intranet-analysis) domain name resolution records, which will incur charges after configuration takes effect. For billing information, see [Product Billing](/help/en/dns/product-billing). Below is a comparison of the two configuration methods.

**Attribute**

**Local domain name resolution records**

**Cloud DNS PrivateZone resolution records**

Configuration location

Configured in the `/etc/hosts` file on the target node.

Configured in Alibaba Cloud DNS PrivateZone.

Applicable scope

Limited to node configuration. To apply to pods, you need to configure [custom Hosts](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns#d542dca5c80wi).

Applies to all nodes within the VPC and the pods inside them.

Maintainability

Requires manual configuration and maintenance on the nodes.

Centralized management, easier to maintain and update.

Scenarios

Suitable for quickly solving problems on specific nodes temporarily or for small-scale deployments.

Suitable for unified domain name resolution needs in large-scale clusters, ensuring long-term stability.

Update effectiveness speed

Modifications take effect immediately, but require manual operations on multiple nodes.

Depends on TTL configuration, internal DNS refresh, no need for manual updates on individual nodes.

Cache time (TTL)

Configured in local files, takes effect immediately after modification, no cache delay impact.

Default is 1 minute, can be adjusted, affects the time it takes for resolution record updates to take effect in various locations.

## Local domain name resolution records

After creating the forwarding rule, you need to add domain name resolution records to the ACK cluster nodes so that the nodes can access the domain name address of the image to be pulled through the accelerated IP of the GA instance.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  Configure local resolution.
    
    -   Existing nodes: In the node list, select the nodes that need to pull images, click **Batch Operations** at the bottom of the page, then select **Run Shell Scripts** as the operation type, and click **OK**.
        
    -   New nodes: In the navigation pane on the left, choose **Nodes** > **Node Pools**, click **Edit** in the **Actions** column of the target node pool. In **Advanced Options (Optional)**, configure the following Shell script content in **User Data**, and click **Confirm**.
        
        ```
        echo "47.XX.XX.5  production.cloudflare.docker.com" >> /etc/hosts
        echo "47.XX.XX.5  docker.io" >> /etc/hosts
        echo "47.XX.XX.5  registry-1.docker.io" >> /etc/hosts    # Docker registry domain name.
        echo "47.XX.XX.5  auth.docker.io"  >> /etc/hosts         # Docker authentication service domain name.
        ```
        
4.  Select ACS-ECS-BulkyRunCommand as the execution template, which supports running Cloud Assistant commands in batches on multiple ECS instances. You can use the default configuration items for the rest, and then proceed to the next step.
    
5.  According to the page prompts, fill in the Shell script to add the corresponding domain name resolution records (A records) in bulk to the `/etc/hosts` file of the nodes. Configure the IP address as the two accelerated IPs obtained in [Step 2: Configure forwarding rules for the GA instance](#8f834bd609c5y), and the domain URLs as the related domain name addresses of the target image to be pulled. Complete the parameter configuration and create this task.
    
    For example, you can implement domain name resolution using the `echo` command:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1938290571/p969014.png)
    
    After the task is completed, you can log on to the ECS instance to confirm that the corresponding domain name resolution records exist on the node, and test whether the node can normally pull container images from overseas sources.
    

## **Cloud DNS PrivateZone resolution records**

After creating the forwarding rule, you also need to configure Cloud DNS PrivateZone to add the corresponding domain name resolution records, so that nodes can access the domain name address of the image to be pulled through the accelerated IP of the GA instance.

1.  Obtain the CNAME accelerated domain name of the target GA instance.
    
    1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
        
    2.  In the navigation pane on the left, select **Standard Instance** > **Instances**.
        
    3.  On the **Instances** page, find the target basic Global Accelerator instance, and click the instance ID.
        
    4.  On the **Instance Information** page, obtain the CNAME accelerated domain name of the target GA instance.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5978770271/p817721.png)
        
    
2.  Obtain the virtual private cloud (VPC) ID to which the target ACK cluster nodes belong.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
        
    3.  On the **Cluster Information** page, click the **Basic Information** tab, and obtain the VPC ID in the **Network** section.
        
    
3.  Configure Cloud DNS PrivateZone domain name resolution records
    
    Configure the CNAME resolution record for the access domain name DNS to the accelerated domain name in the GA instance. For `docker.io` and `production.cloudflare.docker.com`, since they have different top-level domains, you need to create two authoritative domains: `io` and `cloudflare.docker.com`. The following example shows how to create the `cloudflare.docker.com` authoritative domain.
    
    1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
        
    2.  Click **Private Zone** in the navigation pane on the left, then select the **Authoritative Zone** > **User Defined Zones** tab.
        
    3.  On the **User Defined Zones** tab, click **Add Zone**, enter `cloudflare.docker.com` in the **Authoritative Zone** section, enable **Recursive Resolution Proxy for Subdomain Names**, and then click **OK**.
        
    4.  On the **User Defined Zones** tab, click **Settings** in the **Actions** column of `cloudflare.docker.com`. Then on the **Settings** tab, click **Add Record**.
        
    5.  In the **Add Record** dialog box, select **Form Editor Mode**. After completing the resolution record parameter configuration, click **OK** to complete the configuration.
        
        **Parameter**
        
        **Configuration**
        
        **Record Type**
        
        Select CNAME, which points a domain name to another domain name.
        
        **Hostname**
        
        -   When the built-in authoritative domain name (Zone) is `cloudflare.docker.com`, enter `production`.
            
        -   When the built-in authoritative domain name (Zone) is `io`, enter the following domain names in sequence.
            
            -   `docker`: `docker.io` is the Docker main domain name.
                
            -   `registry-1.docker`: `registry-1.docker.io` is the Docker registry domain name.
                
            -   `auth.docker`: `auth.docker.io` is the Docker authentication service domain name.
                
        
        **Record Values**
        
        Enter the CNAME accelerated domain name obtained in [Step 1](#f5d3975aa5j5p).
        
        **TTL**
        
        Cache time. The smaller the value, the faster the record modification takes effect in various locations. The default is 1 minute.
        
    6.  On the **User Defined Zones** tab, click **Effective Scope** in the **Actions** column of `cloudflare.docker.com`.
        
    7.  In the **Effective Scope** dialog, under **Effective in VPCs**, select **Current Account** > **Standard VPC**, and select the region where the target cluster instance is located. Select the VPC ID obtained in [Step 2](#fa4b383b6cobs) (hover the mouse over the VPC name to view the corresponding VPC ID), and click **OK**.
        
    

After the configuration is complete, you can log on to the ECS instance to test whether the node can normally pull container images from overseas sources.

## **References**

-   You can use Container Registry (ACR) to implement automatic image building, pulling, and management. For more information, see [Pull images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-images/).
    
-   If you encounter problems during product use or have product-related usage suggestions, please [contact us](/help/en/ack/ack-managed-and-ack-dedicated/support/contact-us).
