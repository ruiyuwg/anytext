A Lingjun elastic network interface (LENI) is a virtual network interface that connects a GPU-accelerated Lingjun node to a virtual private cloud (VPC). This way, the Lingjun node can communicate with other cloud resources within the VPC. In scenarios that an LENI requires multiple IP addresses, you can apply for one or more secondary private IP addresses for the LENI. This way, the utilization of the associated Lingjun node is improved. This topic describes how to create and manage LENIs.

## **Overview**

### **Attributes**

The following table describes the attributes of an LENI.

**Attribute**

**Description**

VPC

The VPC to which the LENI is connected.

vSwitch

The vSwitch in which the LENI is deployed in the VPC. The Lingjun node with which the LENI is associated must reside in the same zone as the vSwitch in which the LENI is deployed.

Zone

The zone in which the Lingjun node with which the LENI is associated resides.

Type

-   System type: A default LENI of the system type is created when you create a Lingjun node. You cannot create an LENI of the system type for a Lingjun node or disassociate the default LENI of the system type from the Lingjun node.
    
-   User type: You can create additional LENIs for a Lingjun node. These LENIs are of the user type.
    

Primary private IP address

The private IPv4 address that is assigned to the LENI when the LENI is created. The primary private IP address falls in the range of the CIDR block of the vSwitch in which the LENI is deployed.

Media access control (MAC) address

The MAC address that is assigned to the LENI.

Secondary private IPv4 address

The private IPv4 address that is assigned to the LENI and is used as a secondary IP address. You can apply for one or more secondary private IP addresses for the LENI. These secondary private IP addresses can be removed from the LENI and assigned to other LENIs.

### **Usage notes**

An LENI is a network interface that is associated with a Lingjun node so that the Lingjun node can communicate with other resources. When you use an LENI, take note of the following items:

-   Multiple secondary private IP addresses can be assigned to a single LENI, each of which can be removed from the LENI.
    
-   If an LENI is released, the secondary private IP addresses that are assigned to the LENI are automatically reclaimed.
    
-   If the Lingjun node with which an LENI of the user type is associated is scaled in or reinstalled, the LENI is automatically reclaimed.
    

## **Prerequisites**

-   A Lingjun node is purchased. For more information, see the "Purchase a node" section of the [Manage Lingjun clusters and nodes](/help/en/pai/user-guide/manage-lingjun-clusters-and-lingjun-nodes#674b37a1eenoi) topic.
    
-   A VPC and a vSwitch are created. The vSwitch and the Lingjun node reside in the same zone. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    

## **Limits**

**Item**

**Description**

Number of resources for each attribute of an LENI

Primary private IP address

Default value: 1.

Secondary private IPv4 address

By default, up to 10 secondary private IPv4 addressescan be assigned to an LENI. If this quota of secondary private IPv4 addresses cannot meet your business requirements, submit an application to increase the quota in Quota Center. For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

MAC address

Default value: 1.

Number of LENIs that can be associated with a Lingjun node

The number of LENIs that can be associated with a Lingjun node varies based on the node specifications. Minimum value: 1.

## **Create an LENI**

**Note**

You can create only LENIs of the user type.

1.  Log on to the [Intelligent Computing Lingjun console](https://lingjun.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Resources** > **Elastic Network Interfaces**.
    
3.  On the Elastic Network Interface page, click **Create ENI**.
    
4.  On the **Create ENI** page, configure the parameters and click **OK**. The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Zone**
    
    The zone in which the associated Lingjun node resides.
    
    **Node ID**
    
    The ID of the associated Lingjun node.
    
    **VPC**
    
    The VPC to which the LENI is connected.
    
    **vSwitch**
    
    The vSwitch in which the LENI is deployed. The vSwitch and the associated Lingjun node must reside in the same zone.
    
    **Description**
    
    The description of the LENI for identification.
    

## **Manage LENIs**

### **View LENIs**

1.  Log on to the [Intelligent Computing Lingjun console](https://lingjun.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Resources** > **Elastic Network Interfaces**.
    
3.  On the Elastic Network Interface page, select Instance ID, Node ID, IP, Status, or Type from the drop-down list and enter a keyword to filter the LENIs that meet the filter conditions.
    
4.  Click the ID of an LENI to view the details of the LENI.
    

### **Add a secondary private IP address to an LENI**

1.  Log on to the [Intelligent Computing Lingjun console](https://lingjun.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Resources** > **Elastic Network Interfaces**.
    
3.  On the **Elastic Network Interface** page, find the LENI that you want to manage. Click the ID of the LENI to go to the details page of the LENI.
    
4.  On the **Manage Secondary Private IP Addresses** tab, click **Add** to add a secondary private IP address to the LENI.
    
    -   If you want to add a specific secondary private IP address, enter the IP address in the Secondary Private IP Address column. Then, click **OK** in the Actions column.
        
    -   If you want to add a random secondary private IP address, directly click **OK** in the Actions column. In this case, the added secondary private IP address is first in the **In Progress** state. After the secondary private IP address is assigned, the secondary private IP address is displayed. The state of the secondary private IP address becomes **Available**.
        

### **Remove a secondary private IP address from an LENI**

1.  Go to the details page of the LENI that you want to manage. For more information, see the [Add secondary private IP addresses to an LENI](#651910b081zg8) section of this topic.
    
2.  On the **Manage Secondary Private IP Addresses** tab, find the secondary private IP address that you want to remove. Click **Delete** in the **Actions** column.
    
    **Note**
    
    You can remove a secondary private IP address only if the IP address is in the Available or Unavailable state.
    

### **Delete an LENI**

1.  Log on to the [Intelligent Computing Lingjun console](https://lingjun.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Network Resources** > **Elastic Network Interfaces**.
    
3.  On the **Elastic Network Interface** page, find the LENI that you want to manage. Click **Delete** in the **Actions** column. Follow the on-screen instructions to delete the LENI.
    

## **API operations**

You can also call the following [API operations](https://api.aliyun.com/api/eflo/2022-05-30/CreateElasticNetworkInterface) to perform the preceding operations on LENIS.

**Operation**

**Description**

CreateElasticNetworkInterface

Creates an LENI.

DeleteElasticNetworkInterface

Deletes an LENI.

UpdateElasticNetworkInterface

Updates an LENI.

ListElasticNetworkInterfaces

Queries the LENIs that are associated with a Lingjun node.

GetElasticNetworkInterface

Queries the details of an LENI.

AssignLeniPrivateIpAddress

Assigns a secondary private IP address to an LENI.

UnassignLeniPrivateIpAddress

Removes a secondary private IP address from an LENI.

UpdateLeniPrivateIpAddress

Modifies the description of a secondary private IP address of an LENI.

ListLeniPrivateIpAddresses

Queries the private IP addresses that are assigned to an LENI.

GetLeniPrivateIpAddress

Queries the details of the secondary private IP addresses that are assigned to an LENI.
