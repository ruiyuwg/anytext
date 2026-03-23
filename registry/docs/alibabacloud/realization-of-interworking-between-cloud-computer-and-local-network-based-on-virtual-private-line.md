The Elastic Desktop Service (EDS) virtual private line is a lightweight, low-cost networking solution for cloud computers. It lets you use a simple configuration to connect the office network of your cloud computers to your on-premises network, establishing end-to-cloud network connectivity.

## **Capabilities**

The virtual private line provides bidirectional connectivity between your cloud computers and your on-premises network. It allows cloud computers to securely access your on-premises resources, such as databases, NAS, OA systems, and network printers. Private encrypted tunneling technology ensures secure data transmission without requiring changes to your existing network architecture. This solution is ideal for scenarios such as hybrid cloud offices, cross-region team collaboration, and isolated access to sensitive data. It helps you efficiently build a low-cost, high-availability (HA) hybrid network environment.

## **Key advantages**

**Advantage**

**Description**

Security and compliance

Encrypts data transmission through private tunnels to prevent Internet exposure threats. Supports source IP tracing to meet enterprise-level data compliance requirements.

Cost optimization

No need to build expensive physical Express Connect circuits. Simply activate an EDS bandwidth plan to use the virtual private line feature.

Quick configuration

If your on-premises network device is ready, you can set up the virtual private line in under 15 minutes through console and client configurations.

Traffic shaping

Supports global return, IP CIDR-based split tunneling, domain-based split tunneling, and application process-based split tunneling.

High availability

Supports attaching multiple on-premises network devices in the same network environment to achieve active geo-redundancy and load balancing.

## **Configure a virtual private line**

### **Prerequisites**

-   Ensure that your on-premises network device, on-premises network, and the devices required in the [configuration guide](#55e7635834cow) are ready.
    
-   Ensure that you are using a Premium office network. Basic office networks do not support virtual private lines. For more information, see [Deploy an office network (formerly workspace)](/help/en/wuying-workspace/user-guide/deploy-office-networks/).
    

### **Limits**

The network bottleneck of a virtual private line is typically limited by the following factors:

-   When downloading from the cloud: Limited by the smaller value between the maximum downstream bandwidth of the cloud computer's office network and the maximum upstream bandwidth of the on-premises network.
    
-   When downloading from the on-premises network: Limited by the smaller value between the maximum upstream bandwidth of the cloud computer's office network and the maximum downstream bandwidth of the on-premises network.
    

### **Procedure**

1.  Activate the virtual private line and configure split tunneling rules.
    
    1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
        
    3.  In the upper-left corner of the top navigation bar, select a region.
        
    4.  On the **Office Networks** page, find the office network that you want to manage and click its ID.
        
    5.  In the **Network Information** section of the office network details page, click **Configure Rule** in the **Virtual Private Network Rule** section.
        
    6.  On the **Configure Rule** page, click **Generate Binding Code** in the **On-premises Network Device** section, and then click **Copy** to save the code for later use.
        
        **Note**
        
        -   The binding code is used to attach the on-premises network device to the virtual private line.
            
        -   The binding code is valid for one hour. If it expires, you must generate a new one.
            
        
    7.  In the **Configure Bypass Rules** section, Click the **Edit** button to the right of **Bypass Rules**.
        
        **Split Tunneling Mode**
        
        **Description**
        
        Global Return
        
        All network requests from the cloud computer are returned to the on-premises network through the virtual private line tunnel. The on-premises network device forwards and manages the traffic.
        
        Whitelist Return (Multiple selections allowed)
        
        IP CIDR block
        
        -   Matches traffic based on the destination IP address range (IPv4/IPv6) and directs requests to the specified network segment to the virtual private line.
            
        -   Example: `10.0.0.1/24`
            
        
        Domain name
        
        -   Uses DNS parsing to route access requests for specified domain names to the virtual private line. Three domain name matching patterns are supported.
            
        -   Example:
            
            -   Exact match: `aliyun.com`
                
            -   String match: `aliyun`
                
            -   Wildcard domain name match: `*.aliyun.com`
                
        
        Application
        
        -   Identifies and routes traffic based on transport-layer protocols (TCP/UDP) and port numbers, or application-layer protocol features.
            
        -   Example: `explorer.exe`
            
        
    8.  Click **Confirm**.
        

2.  Configure the on-premises network device for the virtual private line and attach the Premium office network by following the guide.
    
    **Device Model**
    
    **Configuration Guide**
    
    iKuai AL88 series
    
    [Virtual Private Line Device-side Configuration Guide (EDS x iKuai)](https://developer.aliyun.com/article/1657607?spm=a2c6h.12873581.group.9.3ea81a73vbsoRX)
    
    Panabit AL88 series
    
    [Virtual Private Line Device-side Configuration Guide (EDS x Panabit)](https://developer.aliyun.com/article/1657608?spm=a2c6h.12873581.group.6.3ea81a73vbsoRX)
    

## **Manage on-premises network devices**

### **View on-premises network device information**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Office Networks** page, find the office network that you want to manage and click its ID.
    
5.  In the **Network Information** section of the office network details page, click **Edit** in the Virtual Private Network section.
    
6.  On the edit page, if you have successfully attached a network device, you can view the device's ID, brand and model, status, attachment time, and remarks.
    

### **Delete an on-premises network device**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Office Networks** page, find the office network that you want to manage and click its ID.
    
5.  In the **Network Information** section of the office network details page, click **Edit** in the **Virtual Private Network** section.
    
6.  In the **On-premises Network Device** section, click **Delete** in the **Actions** column for the target on-premises network device.
    
7.  In the pop-up window, confirm the information and click **Confirm**.
