CloudBox is a fully managed cloud service provided by Alibaba Cloud. The hardware infrastructure of the cloud boxes that you purchase is deployed in your data center and delivered in racks. Before you deploy the purchased cloud boxes in your data center, Alibaba Cloud engineers make an appointment with you to perform an on-site engineering survey on your data center and accordingly determine whether the data center meets the deployment requirements. This topic describes the requirements that must be met to deploy cloud boxes in a data center.

## Environment requirements

**Item**

**Requirement**

Rack

-   Each cloud box is delivered in a standard 42U rack. The dimensions of the rack are 600 mm × 2,055 mm × 1,200 mm (width × height × depth). The height includes the casters, and the depth excludes the front and rear doors.
    
-   Each rack requires a front clearance of 1,220 mm and a rear clearance of 610 mm for operations.
    
-   Adequate clear space must be maintained in the elevators and corridors of your data center to ensure that a rack can be transported to the geographical location that you specify. The transportation corridors must have a clear height of at least 2,200 mm.
    
-   Each rack must be connected to the ground or the base with tightened bolts at the four corners.
    

**Important**

Alibaba Cloud provides maintenance services for servers and network devices in a rack. You cannot move or operate the devices in a cloud box unless you are authorized by Alibaba Cloud to do so.

Temperature and humidity

-   Operating ambient temperature (air inlet temperature) of servers: 5℃ to 30℃.
    
-   Change rate of the ambient temperature: lower than 20℃ per hour and 5℃ per 15 minutes.
    
-   Air volume: Each rack requires a minimum air volume of 160 cubic feet per minute (CFM) per kW in regions in the Chinese mainland and 145 CFM per kW in regions outside the Chinese mainland.
    
-   Dew point temperature (DP): 5.5℃ to 15℃.
    
-   Relative humidity (RH): 30% to 80%.
    

**Important**

If the monitored temperature of the data center in which the cloud boxes are deployed exceeds 40°C for four consecutive hours and Alibaba Cloud cannot contact your data center contact, Alibaba Cloud has the right to temporarily disable your cloud boxes to prevent unexpected disasters that are caused by further temperature increases in the data center.

Weight

The bearing capacity of the installation foundation in the specified geographical location must be greater than the maximum weight of the hardware infrastructure in the order that you place.

Altitude

The altitude of your data center can be at most 1,500 m.

Lightning protection

The lightning protection and grounding systems of your data center must follow the regulations in **GB 50689-2011 Code for Design of Lightning Protection and Earthing Engineering for Telecommunication Bureaus (Stations)**.

Seismic design

The seismic design category of the buildings of your data center must be located at least Category C.

Electrostatic discharge

The absolute value of the electrostatic voltage to earth of the floor, workbench, communications equipment, and operators in your data center must be at least 200 V. The installation of the electrostatic discharge (ESD) floor must meet the technical requirements specified in **SJ/T 10796-2001 General Specification for Raised Access Floors for Electrostatic Protection**. The surface resistance and system resistance of the ESD floor must range from 1 × 10^5 Ω to 1 × 10^9 Ω.

Electromagnet

The strength of the radio interference field in the data center and the auxiliary area cannot exceed 130 dB (µV/m) at frequencies from 80 MHz to 1,000 MHz and from 1,400 MHz to 2,000 MHz. The strength of the power-frequency magnetic field cannot exceed 30 A/m.

## **Network requirements**

Cloud boxes can be connected to the Alibaba Cloud public cloud over Express Connect circuits. Only dedicated Express Connect circuits are supported. For more information, see [Connect to Alibaba Cloud through a dedicated Express Connect circuit](/help/en/express-connect/user-guide/process-of-creating-a-dedicated-physical-connection/#concept-2365500).

The following section describes the deployment requirements that must be met if you use the connection over an Express Connect circuit.

-   Upstream switches
    
    -   One or two upstream switches with physical interfaces at 10 Gbit/s must be provided in each cloud box. We recommend that you use two upstream switches in each cloud box.
        
    -   The upstream switches must support Border Gateway Protocol (BGP), Layer 3 subinterfaces, and IEEE 802.1Q.
        
    -   External Border Gateway Protocol (EBGP), virtual local area networks (VLANs), and subinterfaces must be supported for the connections between the upstream switches and cloud boxes. The virtual routing and forwarding (VRF) feature is optional for the connections.
        
    -   The cloud connection channel and the Express Connect circuit must support physical interfaces at 10 Gbit/s. Each upstream switch must provide at least two physical interfaces for one rack or four physical interfaces for multiple racks to connect to the one or more cloud boxes. The number of `/30` CIDR blocks required varies based on the number of physical interfaces.
        
        **Note**
        
        The cloud connection channel provides a network connection between the cloud boxes and the Alibaba Cloud public cloud. The channel carries the traffic for cloud box management and migration to Alibaba Cloud. The Express Connect circuit provides a network connection between the cloud boxes and your on-premises devices.
        
-   Configurations
    
    The rack of each cloud box contains two top-of-rack (ToR) switches. The business traffic that passes through each ToR switch is routed to the upstream switches. Four connection links are provided for each data processing business. The following table describes the configuration requirements.
    
    **User-side switch**
    
    **Switch in the cloud box**
    
    **Type of connection**
    
    **Number of upstream ports**
    
    **Number of single-mode optical transceiver modules**
    
    **Number of /30 CIDR blocks**
    
    **BGP ASN planning**
    
    SW-1
    
    HASW-P1-1
    
    Cloud connection channel
    
    1
    
    2
    
    1
    
    An autonomous system number (ASN) is required.
    
    Express Connect circuit
    
    1
    
    2
    
    1
    
    HASW-P1-2
    
    Cloud connection channel
    
    1
    
    2
    
    1
    
    Express Connect circuit
    
    1
    
    2
    
    1
    
    SW-2
    
    HASW-P1-1
    
    Cloud connection channel
    
    1
    
    2
    
    1
    
    Express Connect circuit
    
    1
    
    2
    
    1
    
    HASW-P1-2
    
    Cloud connection channel
    
    1
    
    2
    
    1
    
    Express Connect circuit
    
    1
    
    2
    
    1
    
    Total
    
    Four ports per user-side switch × 2
    
    Eight modules per switch in the cloud box × 2
    
    8
    
    An ASN is required.
    
-   Network bandwidth
    
    To ensure a better user experience, we recommend that you allocate a minimum network bandwidth of 50 Mbit/s for cloud boxes. This ensures that Elastic Compute Service (ECS) instances and cloud disks can be created when the cloud boxes are connected to the Alibaba Cloud public cloud. A bandwidth of more than 50 Mbit/s is required if the number of racks in your data center is large and the cloud boxes need to communicate with virtual private clouds (VPCs) in the Alibaba Cloud public cloud.
    

## Power supply requirements

Each rack supports the 10 kW and 20 kW power supplies. The power supply configuration of a cloud box depends on the total power consumption of different types of compute stock keeping units (SKUs) that you purchase for the cloud box. For example, if the maximum power consumption of the purchased compute SKUs is at most 10 kW, you can use the 10 kW power supply. You can obtain information about the maximum power consumption of different types of compute SKUs in your order.

**Power**

**Input voltage and frequency**

**Current**

**Number of primary and secondary power distribution units (configured at a ratio of 1:1)**

10 kW

Single-phase 220 V, 50 Hz or 60 Hz

63 A

1 + 1

20 kW

Single-phase 220 V, 50 Hz or 60 Hz

63 A

2 + 2

## Delivery requirements

After you place an order online, Alibaba Cloud engineers make an appointment with you on specific dates to perform an on-site engineering survey on your data center and deliver the cloud boxes that you purchase. After the cloud boxes are delivered, you must verify and confirm the completion of the order at the earliest opportunity. After the completion of the order is confirmed, the billing cycle of the cloud boxes starts.

**Phase**

**Requirement**

On-site engineering survey

You must appoint network engineers and electrical engineers to cooperate with Alibaba Cloud engineers to complete the engineering survey. A physical report on the results of the engineering survey is provided by Alibaba Cloud. You can renovate your data center based on the suggestions in the report as needed.

On-site delivery

-   The Alibaba Cloud delivery team transports the racks to the specified location based on your requirements.
    
-   The electrical engineers that you appoint are required to install the racks and get the racks electrically connected. You must ensure that the installation, electrical connection, and related alterations are conducted by authorized electricians based on applicable laws, regulations, and best practices.
    
-   The network engineers that you appoint must cooperate with Alibaba Cloud engineers to connect on-site networks and debug connectivity issues.
    
-   Alibaba Cloud cannot be held responsible for any risks caused by the electrical connections, installations, cables, or alterations of the cloud boxes.
    
-   You cannot make any alterations to the hardware of the cloud boxes.
    
-   The Alibaba Cloud delivery team establishes network connections for the cloud boxes based on the upstream data links provided by you.
    

Acceptance

After the cloud boxes are delivered, you must verify and confirm the completion of the order at the earliest opportunity by performing the following operations:

1.  Log on to the Alibaba Cloud Management Console by using the specified account.
    
2.  Go to the details pages of the cloud boxes to check whether the computing resources and storage capacities meet your expectations.
    
3.  Test whether you can create ECS instances and cloud disks in the cloud boxes. If yes, the cloud boxes are successfully deployed.
    
4.  Confirm the completion of the order in the console.
