This topic provides answers to some frequently asked questions (FAQs) about connections over Express Connect circuits:

-   [Can I access VPCs in different regions after my data center is connected to Alibaba Cloud through an Express Connect circuit?](#section-hqs-bqb-12b)
    
-   [What types of physical connections does Alibaba Cloud support?](#section-iqs-bqb-12b)
    
-   [What is the maximum bandwidth supported by an Express Connect circuit?](#section-jqs-bqb-12b)
    
-   [Do Express Connect circuits support dynamic routing protocols?](#section-kqs-bqb-12b)
    
-   [Can I configure multiple Express Connect circuits to achieve disaster recovery?](#section-lqs-bqb-12b)
    
-   [How do I achieve high availability for Express Connect circuits?](#section-hlt-ylj-bvi)
    
-   [Can I use an Express Connect circuit to connect a data center to multiple VPCs?](#section-nqs-bqb-12b)
    
-   [Can I extend a VLAN from a data center to a VPC through an Express Connect circuit?](#section-pqs-bqb-12b)
    
-   [If an Express Connect circuit is connected to multiple VPCs, are these connections isolated from each other?](#section-qqs-bqb-12b)
    
-   [Do Express Connect circuits support Network Address Translation (NAT)?](#section-rqs-bqb-12b)
    
-   [What is the correlation between zones and access points?](#section-sqs-bqb-12b)
    
-   [How much will I be charged for connecting my data center to Alibaba Cloud using an Express Connect circuit?](#section-wqs-bqb-12b)
    
-   [How do I connect a data center to Alibaba Cloud through an Express Connect circuit?](#section-yqs-bqb-12b)
    
-   [How do I plan the access address of the physical connection?](#section-brs-bqb-12b)
    
-   [What is the VLAN ID of a VBR?](#section-crs-bqb-12b)
    
-   [What are the Alibaba Cloud-side and data center-side IP addresses specified on a VBR?](#section-ers-bqb-12b)
    
-   [How do I verify the network connectivity of an Express Connect circuit?](#section-grs-bqb-12b)
    
-   [How do I connect a data center to an internal endpoint of an Object Storage Service (OSS) bucket in a VPC?](#section-hrs-bqb-12b)
    
-   [What do I do if my data center cannot access the Elastic Compute Service (ECS) instance on Alibaba Cloud after the Express Connect circuit is installed?](#section-r25-a2t-fv5)
    
-   [What do I do if my Express Connect circuit is down?](#section-jrs-bqb-12b)
    
-   [What do I do if the bandwidth cannot reach the specified limit?](#section-krs-bqb-12b)
    
-   [What do I do if the system returns an error when I add or delete routes for a VBR?](#section-lrs-bqb-12b)
    
-   [What do I do if a token error message appears when adding routes?](#section-mrs-bqb-12b)
    

## Can I access virtual private clouds (VPCs) in different regions after my data center is connected to Alibaba Cloud through an Express Connect circuit?

Yes, you can access VPCs in all regions after your data center is connected to Alibaba Cloud through an Express Connect circuit.

## What types of physical connections does Alibaba Cloud support?

The access devices of Alibaba Cloud support optical ports. By default, Alibaba Cloud provides single-mode optical transceiver modules of the following specifications: 1 Gbit/s, 10 Gbit/s, 40 Gbit/s, and 100 Gbit/s. These optical transceiver modules support a maximum transmission distance of 10 kilometers.

## What is the highest bandwidth supported by an Express Connect circuit?

The highest bandwidth limit of an Express Connect circuit for which you can apply in the console is 10 Gbit/s. You can contact your customer manager to request higher bandwidth.

## Do Express Connect circuits support dynamic routing protocols?

Yes, Express Connect circuits support Border Gateway Protocol (BGP).

## Can I configure multiple Express Connect circuits to achieve disaster recovery?

Express Connect Router (ECR) networking supports up to 32 Express Connect circuits to implement equal-cost multi-path routing (ECMP).

## How do I achieve high availability?

To achieve high availability, you can use Express Connect circuits to establish active/active connections or active/standby connections between your data center and Alibaba Cloud. For more information, see the following topics:

-   [Connect a data center to Alibaba Cloud through ECR with active/standby Express Connect circuits](/help/en/express-connect/use-cases/the-local-idc-can-use-ecr-to-access-the-cloud)
    
-   [Connect a data center to Alibaba Cloud through ECR with load-balanced Express Connect circuits](/help/en/express-connect/use-cases/connect-a-data-center-to-alibaba-cloud-over-load-balanced-leased-lines-by-using-an-ecr)
    

## Can I use an Express Connect circuit to connect a data center to multiple VPCs?

Yes, you can use an Express Connect circuit to connect a data center to multiple VPCs. You must use Cloud Enterprise Network (CEN) to connect the VPCs. This way, your data center and the VPC can communicate with each other through private connections.

## Can I extend a VLAN from a data center to a VPC through an Express Connect circuit?

No, Alibaba Cloud supports only interconnections with external networks over Layer 3.

## If an Express Connect circuit is connected to multiple VPCs, are these connections isolated from each other?

To isolate the connections, assign a VLAN ID to each connection. For more information, see [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#task-2037143).

## Do Express Connect circuits support network address translation (NAT)?

No, Express Connect circuits do not support NAT. If NAT is required in certain scenarios, you must configure NAT in your data center.

## What is the correlation between zones and access points?

Both zones and access points are scoped to regions. You can access all of the zones in a region from an access point in the same region.

If the access point that you choose and the VPC that you want to connect are deployed in different regions, you must use CEN.

## How am I charged if I connect my data center to Alibaba Cloud by using an Express Connect circuit?

To connect a data center to Alibaba Cloud through an Express Connect circuit, you are charged by Alibaba Cloud and your connectivity provider. For more information, see [Billing overview](/help/en/express-connect/product-overview/billing-overview/#concept-ekt-hyq-ydb).

## How do I connect a data center to Alibaba Cloud through an Express Connect circuit?

1\. Read the Express Connect user guide. 2. Choose an access point. 3. Apply for an Express Connect circuit and pay the initial installation fee in the console. 4. Apply for a Letter of Authorization (LOA). 5. Contact your connectivity provider to install the Express Connect circuit. 6. After your connectivity provider completes the installation, update the progress in the console and wait for Alibaba Cloud to install the pigtail. 7. Pay the resource usage fee. 8. Enable the Express Connect circuit. 9. Create a VBR. 10. Attach the VBR to a CEN instance, or create a peering connection. 11. Configure routes. 12. Run a ping test to verify the network connectivity between your data center and the VPC. (If the ping test passes, the network is connected.)

## How to plan the access address of a physical connection?

The planning of dedicated line access addresses is as follows:

-   The IP address of the gateway on Alibaba Cloud and the IP address of the gateway device in the data center do not conflict with each other. You can specify only private IP addresses. If public IP addresses are used in the data center, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1255) to configure IP address mapping.
    
-   The CIDR blocks in your data center cannot include 100.64.0.0/10 to avoid conflicts with cloud service addresses.
    

## What is the VLAN ID of a VBR?

-   If the VLAN ID is set to 0, the switch port of the VBR does not use VLAN mode. Instead, it uses Layer 3 router interface mode. In Layer 3 router interface mode, each Express Connect circuit corresponds to a VBR, which means the Express Connect circuit can only connect to VPCs under the same account.
    
-   If the VLAN ID is set to a value from 1 to 2999, the switch port of the VBR is a Layer 3 VLAN subinterface. If a Layer 3 VLAN subinterface is used, each VLAN ID corresponds to a VBR. In this case, you can connect the Express Connect circuit to VPCs that belong to different Alibaba Cloud accounts.
    

For example, a company has multiple subdivisions or subsidiaries. Each subdivision or subsidiary has a separate Alibaba Cloud account. Each Alibaba Cloud account owns a VPC. Before the company connects its subdivisions or subsidiaries to Alibaba Cloud through an Express Connect circuit, the company must assign a VLAN ID to each subdivision or subsidiary. When the company creates VBRs, the company must specify different VLAN IDs for the VBRs used by different subdivisions or subsidiaries.

## What are the Alibaba Cloud-side and data center-side IP addresses specified on a VBR?

The Alibaba Cloud-side IP address is the IP address of the VBR. The data center-side IP address is the IP address of the gateway device in the data center. The IP addresses allow your data center and the VPC to communicate with each other. When you create the VBR, make sure that the IP addresses that you specify belong to the same CIDR block.

## How to test if the line is properly connected?

After your connectivity provider installs the Express Connect circuit in the Alibaba Cloud data center, the following tasks must be performed:

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region and then click **Physical Connection** in the left-side navigation pane.
    
3.  On the **Physical Connections** page, click **Confirm Delivery**.
    
    The status of the Express Connect circuit changes to **Waiting for Pigtail Installation**. Alibaba Cloud will complete the pigtail installation within one to two business days. Then, the status of the Express Connect circuit changes to **Pending for Payment**.
    
    **Note**
    
    Access points within China complete fiber pigtail laying and leased line port access within 2 business days, and access points outside China complete within 3 business days.
    
4.  Pay the resource usage fee, and the status of the Express Connect circuit changes to **Enabled**.
    
5.  Create a virtual border router (VBR) and configure routes to complete the connection over the Express Connect circuit.
    
6.  `ping` You can run the command to verify the network connectivity between the data center and the VPC.
    

## How do I connect a data center to an internal endpoint of an Object Storage Service (OSS) bucket in a VPC?

Internal OSS endpoints belong to `100.64.0.0/10`, which is reserved by Alibaba Cloud. Therefore, you cannot add a `100.64.0.0/10` route to the VBR. If necessary, you can divide `100.64.0.0/10` into smaller subnets, such as `100.64.0.0/11` and `100.96.0.0/11`. Then, you can add the routes to the route table of the VBR and set the next hop to the VPC.

## What do I do if my data center cannot access the ECS instance on Alibaba Cloud?

For more information about how to troubleshoot the issue, see [Troubleshooting](/help/en/express-connect/user-guide/troubleshooting#task-2377534).

## What do I do if my Express Connect circuit is down?

Ping the IP address of the VBR from the gateway device in the data center. If the gateway device in the data center fails to reach the specified IP address, report the issue to your connectivity provider. You can also [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1255) to Alibaba Cloud to check the access device connected to the Express Connect circuit.

If the access device in the Alibaba Cloud data center runs as expected but the issue persists, contact your connectivity provider to resolve the issue.

## What do I do if the bandwidth cannot reach the specified bandwidth limit?

If the bandwidth limit of your router interface is lower than 1 Gbit/s, use iPerf3 to measure the bandwidth. If the bandwidth does not exceed 10 Mbit/s, check whether the half duplex mode is enabled for one of the ports. You can request your connectivity provider to switch the negotiation mode to adaptive.

If the bandwidth limit of your router interface is higher than 1 Gbit/s, the bandwidth of each data stream is limited to 130 Mbit/s or 250 Mbit/s when network traffic is distributed across multiple resources.

## What do I do if the system returns an error when I add routes to or delete routes for a VBR?

The hardware of a VBR can process a limited number of requests at the same time. You can add or delete routes after the ongoing tasks are completed.

## What do I do if the `token error` error message is returned when I add routes?

The system returns the error when the cookie of your browser times out. Log out and try again later.

## How do I check if Alibaba Cloud has completed the installation of an Express Connect circuit?

You can perform the following steps to check if Alibaba Cloud has completed the pigtail installation:

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com), and select the target region from the top navigation bar.
    
2.  Find the target physical port instance and check the status of the Express Connect circuit in the **LOA Status** column.
    
3.  When the **LOA Status** changes to **Pending For Payment**, it indicates that Alibaba Cloud has completed the pigtail installation.
    

The following describes the status of each phase in the Express Connect circuit process:

**Note**

The status of the connectivity provider's installation is not displayed in the console. You need to contact the installation personnel of your connectivity provider for relevant information. All other statuses can be viewed in the **LOA Status** column on the [Physical Connection](https://expressconnect.console.alibabacloud.com/physicalconnection) page of the Express Connect console.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9186572671/CAEQTxiBgICQ3Pyx0xkiIDg3NWIwNjAwNWRmOTRlZTFiNzllOWVlODYyZDU1NjU35261039_20250609134234.495.svg)
