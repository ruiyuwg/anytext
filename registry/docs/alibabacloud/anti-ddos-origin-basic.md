Distributed Denial of Service (DDoS) attacks are cyber attacks against targeted systems that make services unavailable to users. Alibaba Cloud provides Anti-DDoS Origin Basic for elastic IP addresses (EIPs) free of charge. Anti-DDoS Origin Basic can mitigate DDoS attacks at up to 5 Gbit/s.

## How Anti-DDoS Origin Basic works

By default, Anti-DDoS Origin Basic is enabled for an EIP and can mitigate DDoS attacks at up to 5 Gbit/s. All traffic from the Internet must pass through Alibaba Cloud Security before the traffic reaches an EIP. Alibaba Cloud Security scrubs the traffic to mitigate attacks. For more information, see [What is Anti-DDoS Origin?](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin#concept-63643-zh).

**Note** If the amount of Internet traffic to a cluster exceeds the capacity of Anti-DDoS, the traffic is routed to a blackhole to protect the cluster. In this case, all traffic is blocked. For more information about the default thresholds at which Anti-DDoS Origin Basic automatically triggers blackhole filtering in each region, see [View the thresholds that trigger blackhole filtering in Anti-DDoS Origin Basic](/help/en/anti-ddos/basic-ddos-protection/product-overview/view-the-thresholds-that-trigger-blackhole-filtering-in-anti-ddos-origin-basic#concept-40033-zh). The thresholds to trigger blackhole filtering for EIPs are determined by the region and bandwidth. For more information, see [Assets](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.22a43610XH5l5g&p=ddos#/asset/eip/cn-hangzhou).

Whether traffic scrubbing is triggered is determined by the following factors:

-   Traffic patterns. If traffic patterns match the patterns of attack traffic, traffic scrubbing is triggered.
-   Traffic amounts. Anti-DDoS Origin Basic automatically sets scrubbing thresholds based on the bandwidth of EIPs. When traffic reaches a specified threshold, Alibaba Cloud Security scrubs the traffic regardless of whether the traffic is service traffic or attack traffic.

The methods of traffic scrubbing include attack packet filtering, bandwidth throttling, and packet throttling. The following scrubbing thresholds are provided by Anti-DDoS Origin Basic:

-   Scrubbing threshold based on bits per second (BPS): When the amount of inbound traffic per second exceeds this value, scrubbing is triggered.
-   Scrubbing threshold based on packets per second (PPS): When the number of inbound packets per second exceeds this value, scrubbing is triggered.

## Scrubbing threshold

The following table describes how to calculate the scrubbing thresholds of an EIP:

Table 1. Maximum BPS-based scrubbing threshold  

EIP bandwidth (Unit: Mbit/s)

Maximum BPS-based scrubbing threshold (Unit: Mbit/s)

≤ 300

450

\> 300

EIP bandwidth × 1.5

Table 2. Maximum PPS-based scrubbing threshold  

EIP bandwidth (Unit: Mbit/s)

Maximum PPS-based scrubbing threshold (Unit: packets per second)

≤ 100

100,000

\> 100

EIP bandwidth × 1,000

For example, if the bandwidth of an EIP is 200 Mbit/s, the maximum BPS-based scrubbing threshold is 450 Mbit/s and the maximum PPS-based scrubbing threshold is 200,000 packets per second.

After the EIP is associated with a cloud resource, the scrubbing thresholds are changed. For more information, see the [Assets](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.22a43610XH5l5g&p=ddos#/asset/eip/cn-hangzhou) page in the Anti-DDoS console. For more information, see [View the Assets page](/help/en/anti-ddos/basic-ddos-protection/user-guide/view-the-assets-page#task-2363018).

## View the scrubbing thresholds of an EIP

1.  Log on to the [EIP console](https://vpc.console.alibabacloud.com/eip).
2.  In the top navigation bar, select the region where the EIP is created.
3.  On the Elastic IP Addresses page, find the EIP that you want to manage. In the Protection column, move the pointer over the Alibaba Cloud Security icon. In the tooltip that appears, view the BPS-based scrubbing threshold, PPS-based scrubbing threshold, and blackhole filtering threshold.
