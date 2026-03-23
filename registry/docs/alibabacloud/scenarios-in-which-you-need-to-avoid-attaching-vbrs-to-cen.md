This topic describes the scenarios in which loops may occur in BGP routing after you attach your virtual border routers (VBRs) to Cloud Enterprise Network (CEN) and the cause of the loops. The loops can cause route flapping and adversely affect your business.

**Important** If risks are detected in your VBR, the details page of the VBR in the Express Connect console will display a message to indicate the risks.

## Issue

Some access devices on the Alibaba Cloud side cannot pass the AS\_PATH attribute. When you use CEN to connect a data center to Alibaba Cloud, the VBR created on the access device on the Alibaba Cloud side cannot pass the original AS number to the data center after the VBR is attached to CEN.

In the following scenario, the preceding issue can cause loops in BGP routing and result in route flapping: Two Express Connect circuits are used to connect the data center to Alibaba Cloud. VBR1 or VPNGW (VPN gateway to which the IPsec-VPN connection is created) learns routes from the data center through BGP. VBR2 advertises these routes to Data Center 2 through CEN. However, VBR2 cannot advertise the original AS number to Data Center 2. The routes accepted by Data Center 2 from VBR2 do not contain the original AS number that is advertised by VBR1 or VPNGW to Alibaba Cloud. This causes loops in BGP routing and result in route flapping or other issues.

## Scenarios and solutions

### Scenario 1: Multiple data centers are connected to Alibaba Cloud by using Express Connect

In this example, two data centers are connected to Alibaba Cloud by using Express Connect.

In the following figure, Data Center 1 and Data Center 2 are connected to Alibaba Cloud. VBR1 learns a route that contains AS 65000 from Data Center 1. VBR2 advertises the route to Data Center 2 whose AS number is 65001. The route contains AS 45104 instead of AS 65000 because VBR2 cannot pass the AS\_PATH attribute. The two data centers are not directly connected through BGP, but can communicate with each other over CEN. In this scenario, no BGP loops will occur and you can attach your VBRs to CEN. ![Figure 5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242788761/p561104.png)

In the following figure, Data Center 1 and Data Center 2 can communicate with each other through the Alibaba Cloud network and BGP connections are created between the two data centers. VBR1 learns a route that contains AS 65000 from Data Center 1. VBR2 advertises the route to Data Center 2 whose AS number is 65001. The route contains AS 45104 instead of AS 65000 because VBR2 cannot pass the AS\_PATH attribute. If Data Center 2 advertises the route to Data Center 1 and Data Center 1 prioritizes the route accepted from Data Center 2, Data Center 1 withdraws the original route that is advertised to VBR1. As a result, CEN withdraws the route that VBR2 advertised to Data Center 2 and Data Center 2 withdraws the route that it advertised to Data Center 1. Then, Data Center reselects the local route and advertises the route to VBR1. This creates a loop and causes route flapping.

In this scenario, we recommend that you use static routing instead of BGP routing and configure specific routes. If you want to attach your VBRs to CEN through BGP, make sure that you can control route advertisement, such as the range of the route advertisement and the priorities of the routes, on the routers on the data center side.

![Figure 6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242788761/p561106.png)

### Scenario 2: Only static routes are used between a data center and Alibaba Cloud

Some access devices cannot pass the AS\_PATH attribute. If you configure static routes between the VBR and data center instead of BGP routing, you can directly attach the VBR to CEN. No loops will occur in BGP routing.

### Scenario 3: A data center is connected to Alibaba Cloud by using two Express Connect circuits

If you use two Express Connect circuits to connect a data center to Alibaba Cloud, **VBR2 does not need to advertise the route that VBR1 learns from the data center.** Therefore, no loops will occur in BGP routing. In this scenario, you can directly attach the VBR to CEN. Make sure that the following default routing policy is created to forbid route advertisement between the VBRs that are attached to CEN:

-   Policy Direction: Export from Regional Gateway.
-   Routing Policy Action: Reject.
-   Match Conditions: Source Instance Type, which includes VPNs, VBRs, and Cloud Connect Network (CCN) instances.

If the preceding routing policy does not exist, create one. After you create the routing policy, you can attach the VBRs to CEN.

The following figure shows the network architecture.![Figure 1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242788761/p560518.png)

### Scenario 4: A data center is connected to Alibaba Cloud by using IPsec-VPN and BGP routing

In the following figure, the data center is connected to Alibaba Cloud by using IPsec-VPN and BGP routing.![Figure 2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242788761/p561525.png)

When the connection over the Express Connect circuit is down, traffic is forwarded over the IPsec-VPN connection. ![Figure 3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242788761/p561532.png)

The IPsec-VPN connection learns route 10.0.0.0/24 from the data center. At the point in time when the connection over the Express Connect circuit and BGP routing recover, the VBR will advertise route 10.0.0.0/24 to the peer of the connection over the Express Connect circuit because the VBR cannot pass the AS\_PATH attribute. As a result, loops will occur in BGP routing. ![Figure 4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242788761/p561540.png)

Make sure that the following default routing policy is created to forbid route advertisement between the VBRs that are attached to CEN:

-   Policy Direction: Export from Regional Gateway.
-   Routing Policy Action: Reject.
-   Match Conditions: Source Instance Type, which includes VPNs, VBRs, and Cloud Connect Network (CCN) instances.

If the preceding routing policy does not exist, create one. After you create the routing policy, you can attach the VBR to CEN.
