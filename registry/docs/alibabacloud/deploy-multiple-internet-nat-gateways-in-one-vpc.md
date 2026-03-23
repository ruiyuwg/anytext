You can create multiple Internet NAT gateways in one VPC to forward traffic to different destinations. This approach helps you better manage traffic destined for the Internet. You can also protect each Internet NAT gateway with different services based on your requirements.

## Scenarios

This topic uses the scenario shown in the following figure to demonstrate how to deploy multiple Internet NAT gateways in a VPC and use them with **route tables** to flexibly allocate and isolate public egresses for multiple business systems.

-   Deploy multiple Internet NAT gateways (NATGW-1 and NATGW-2) in one VPC, located in vSwitch-A1 and vSwitch-A2 respectively.
    
-   Bind vSwitch-A1 and vSwitch-A2 to different route tables, and add default routes (0.0.0.0/0) pointing to different NAT gateways to split internal network traffic.
    
-   Configure SNAT entries for ECS instances of different businesses, specify elastic IP addresses to split and isolate public network traffic.
    
-   Configure DNAT entries to forward external users' public network traffic to internal ECS instances to meet remote access requirements of external users.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/CAEQUBiBgICO6M2y2BkiIDg2OGUzNDExZTJlNDRkYzFhYTJmNmIyODIzOGEwMDhk5359156_20250624182026.849.svg)

## **Configuration steps**

### **Step 1: Prepare cloud network resources**

Before deploying Internet NAT gateways for vSwitches, you need to create cloud resources such as VPC, vSwitch, ECS, and EIP.

**Cloud network resource**

**Specification**

**Quantity**

**Operation**

VPC

**Region**: China (Chengdu).

1

[Create a VPC and a vSwitch](/help/en/vpc/getting-started/create-vpc-with-ipv4#section-ts2-ab8-rfj)

vSwitch

2

ECS instance

-   **Region**: China (Chengdu).
    
-   **Network And Zone**:
    
    -   ECS1 is deployed in vSwitch-A1.
        
    -   ECS2 and ECS3 are deployed in vSwitch-A2.
        
-   **Public IP**: Do not assign public IPv4 address.
    
    **Note**
    
    If a public IP is assigned to an ECS instance, the instance will access the Internet directly through that public IP, and cannot access the Internet through the elastic IP address bound to the Internet NAT gateway.
    

3

[Create ECS instances](/help/en/vpc/getting-started/create-vpc-with-ipv4#section-o0d-7va-dk9)

EIP

Region: China (Chengdu).

3

[Apply for EIPs](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb)

### **Step 2: Create Internet NAT gateways**

1.  Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat).
    
2.  On the **Internet NAT Gateway** page, click **Create Internet NAT Gateway**.
    
3.  On the **NAT Gateway** page, configure the purchase information, and then click **Buy Now**.
    
    **Configuration**
    
    **Description**
    
    **Instance Name**
    
    Create two Internet NAT gateways with instance names `**NATGW-1**` and `**NATGW-2**`, for selection when adding route entries later.
    
    **Region**
    
    Select the region where you want to create the Internet NAT gateway.
    
    **Network And Zone**
    
    Select the VPC and vSwitch to which the NAT gateway belongs. After the NAT gateway is created, you cannot change the VPC or vSwitch.
    
    -   Select vSwitch-A1 for the `**NATGW-1**` instance.
        
    -   Select vSwitch-A2 for the `**NATGW-2**` instance.
        
    
    **Network Type**
    
    In this topic, select **Internet NAT Gateway**.
    
    -   **Internet NAT Gateway**: provides Network Address Translation capabilities and can be associated with EIPs to allow ECS instances to access the Internet, enabling communication between private and public networks.
        
    -   **VPC NAT Gateway**: also provides Network Address Translation capabilities but cannot be associated with EIPs. It can only provide address translation within private networks for ECS instances, suitable for scenarios such as hiding internal addresses and avoiding address conflicts.
        
    
    **Elastic IP Address**
    
    In this topic, **Configure Later** is selected.
    

### **Step 3: Bind elastic IP addresses**

Bind EIP1 to NATGW-1, and bind EIP2 and EIP3 to NATGW-2.

1.  On the **Internet NAT Gateway** page, find the target instance, and click **Associate Now** in the **Elastic IP Address** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p978915.png)
    
2.  In the **Associate EIP** panel, select **Select Existing EIPs**, and then select an EIP from the drop-down list.
    
    Take binding EIP2 and EIP3 to NATGW-2 as an example.
    
    **Note**
    
    Each EIP that you associate with a NAT gateway occupies a private IP address of the vSwitch to which the NAT gateway belongs. Make sure that the vSwitch has sufficient available private IP addresses. Otherwise, you cannot associate new EIPs with the NAT gateway.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p978925.png)
    

### **Step 4: Create SNAT entries and DNAT entries**

1.  On the **Internet NAT Gateway** page, find the target Internet NAT gateway instance, and then click **Configure SNAT** in the **Actions** column.
    
2.  On the **SNAT Management** tab, click **Create SNAT Entry**.
    
3.  On the **Create SNAT Entry** page, configure the following parameters, and then click **Confirm**.
    
    Taking **NATGW-2** as an example, create an SNAT entry to provide **ECS2 instance** with the ability to access the Internet through EIP1. You can adjust the SNAT entry granularity according to your needs.
    
    **Configuration**
    
    **Description**
    
    **SNAT Entry Granularity**
    
    In this case, select **ECS/ENI Granularity**, and select **ECS2 instance** from the **Select By ECS Or ENI** drop-down list.
    
    -   **VPC Granularity**: Suitable for scenarios where all ECS instances in the VPC, along with ECS instances in other VPCs or data centers that have achieved internal network interconnection through CEN or dedicated lines and have configured 0.0.0.0/0 route entries pointing to this VPC, need to access the Internet through the same elastic IP address.
        
    -   **VSwitch Granularity**: Suitable for scenarios that require fine-grained control over Internet access, allowing only specified vSwitches to have Internet access capability.
        
    -   **ECS/ENI Granularity**: Suitable for scenarios that require fine-grained control over Internet access, allowing only specified ECS instances or elastic network interfaces to have Internet access capability.
        
    -   **Custom CIDR Block Granularity**: Suitable for scenarios that require flexible specification of any IP CIDR blocks to configure Internet access capability through NAT gateway uniformly, covering various network environments such as within VPC, across VPCs, or across on-premises data centers, meeting the needs of complex or customized network structures.
        
    
    **Note**
    
    If you select multiple vSwitches or ECS instances/ENIs, multiple SNAT entries will be created using the same public IP address.
    
    **Select Elastic IP Address**
    
    Click **Elastic IP Address** and select EIP2 from the drop-down list.
    
4.  On the **DNAT Management** tab, click **Create DNAT Entry**.
    
5.  On the **Create DNAT Entry** page, configure the following parameters, and then click **Confirm**.
    
    Create a DNAT entry for ECS3. This topic uses SSH service as a verification method for remote access. Please ensure that port 22 is allowed in the security group to which the ECS3 instance belongs. For specific operations, see [Manage security group rules](/help/en/ecs/user-guide/manage-security-group-rules#concept-sm5-2wz-xdb). You can create DNAT entries according to your actual needs.
    
    **Note**
    
    SSH: a cryptographic network protocol that uses TCP and port 22.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p979012.png)
    

### **Step 5: Bind a custom route table to vSwitch-A2**

A route table consists of route entries. Each route entry specifies the destination to which network traffic is routed. You can use the default route table or create a custom route table to manage network traffic.

1.  In the left-side navigation pane, click **Route Tables**. On the **Route Tables** page, click Create Route Table.
    
2.  On the **Route Tables** page, find the route table and click **Associate Resource**\>**Bind**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p978838.png)
    
3.  On the **Route Entry List** tab, click **Custom Route Entry** > **Add Route Entry**. After the configuration is complete, it appears as shown in the following figure:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p978894.png)
    

## **Verification**

### **ECS instances accessing the Internet**

Log on to ECS1 and ECS2 instances through the [Workbench console](https://ecs-workbench.aliyun.com/view/instance/network/vpc/access) and execute the following commands.

```
ping 223.5.5.5
curl myip.ipip.net
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p981130.png)

### **External users remotely logging on to ECS instances**

Log on to an on-premises device. Taking Windows operating system as an example, open the command prompt (CMD) and execute the following commands.

```
ssh root@EIP3
ifconfig
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1383445671/p981132.png)
