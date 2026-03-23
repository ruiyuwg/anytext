Elastic Desktop Service (EDS) Enterprise provides secure and controlled network access for cloud computers. It offers public bandwidth to ensure reliable connectivity while employing advanced security measures to protect against both external and internal threats. Additionally, EDS Enterprise enforces granular access control through security group policies and domain name restrictions, enabling precise management of user network permissions to meet enterprise office security requirements.

## 01 Network access

### **1.1 Security group policies**

EDS Enterprise provides administrators with security group policies to control network access permissions for organizational cloud computers. These policies comprise custom rules that mirror Elastic Compute Service security group rules, allowing configuration of traffic direction (inbound or outbound), authorization actions (allow or deny), priority levels, protocol types, port ranges, authorized objects (IPs or CIDR blocks), and rule description. By strategically combining rules with different scopes and priorities, administrators can implement precise whitelist controls to restrict network access as needed.

You can configure security group rules to control inbound and outbound traffic for cloud computers based on your business requirements. The following scenarios provide sample configurations for security group rules:

#### Scenario 1

By default, cloud computers allow all outbound access. You can configure outbound access rules to restrict connections to specific IP addresses.

-   Rule 1: Deny all outbound access. Sample configurations:
    
    **Direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    Outbound
    
    Deny
    
    2
    
    All
    
    \-1/-1
    
    0.0.0.0/0
    
-   Rule 2: Allow access to specific IP addresses based on Rule 1. This rule must have a higher priority than Rule 1. Sample configurations:
    
    **Direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    Outbound
    
    Allow
    
    1
    
    Select a protocol type.
    
    Specify a port range.
    
    The CIDR block that cloud computers can access. Example: 192.168.1.1/32.
    

#### Scenario 2

In enterprise private network environments such as virtual private clouds (VPCs), you can configure inbound rules to allow access to cloud computers from specific IP addresses. Sample configurations:

**Direction**

**Authorization**

**Priority**

**Protocol type**

**Port range**

**Authorization object**

Inbound

Allow

1

Select a protocol type.

Specify a port range.

The CIDR block from which cloud computers can be accessed. Example: 192.168.1.1/32.

#### Scenario 3

Cloud Computers A and B are associated with Policies 1 and 2, respectively. By default, cloud computers in VPC environments deny all inbound access, preventing communication between Cloud Computers A and B. To enable access between them, you can add the following inbound rules to Policies 1 and 2.

-   Add the following inbound rule to Policy 1 to allow access from Cloud Computer B: Sample configurations:
    
    **Direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    Inbound
    
    Allow
    
    1
    
    Select a protocol type.
    
    Specify a port range.
    
    The IP address of Cloud Computer B.
    
-   Add the following inbound rule to Policy 2 to allow access from Cloud Computer B. Sample configurations:
    
    **Direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol type**
    
    **Port range**
    
    **Authorization object**
    
    Inbound
    
    Allow
    
    1
    
    Select a protocol type.
    
    Specify a port range.
    
    The IP address of Cloud Computer A.
    

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
    -   Rule quantity
        
        You can configure up to 200 security group rules.
        
    -   Inbound rule
        
        By default, cloud computers allow all outbound access. Inbound access is subject to the following principles:
        
        -   In Internet environments, cloud computers do not permit any inbound access requests. Inbound rules, even if configured, will not take effect.
            
        -   In enterprise VPC environments, cloud computers deny all inbound access requests by default. However, you can configure inbound rules to allow access requests from specific IP addresses.
            
-   References: [Security group control](/help/en/wuying-workspace/user-guide/security-related-rules#58dd4cabc5fqf)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

In the **Security Group Control** section, click **Add Rule**. In the **Add Rule** dialog box, configure the following parameters as needed and click **OK**.

**Parameter**

**Description**

Direction

-   Inbound: specifies whether requests to cloud computers are allowed.
    
-   Outbound: specifies whether requests from cloud computers are allowed.
    

Authorization

-   Allow: allows access requests.
    
-   Deny: denies access requests, drops data packets, and returns no responses.
    

Priority

Valid values: 1 to 60. A smaller value specifies a higher priority. The rule with the highest priority applies when multiple rules of the same type exist.

Protocol

The TCP, UDP, ICMP (IPv4), and GRE protocols are supported.

Port Range

The ports that are allowed for applications or protocols. If you set the Protocol parameter to **Custom TCP** or **Custom UDP**, you can specify ports. When you specify ports, you can enter a port number, such as port `80`, or port range, such as `1/80`. For more information, see [Common ports](/help/en/ecs/user-guide/common-ports#concept-gbt-s21-ydb).

Authorization Object

The IPv4 CIDR block.

Description

The description of the security group rule.

### **1.2 Domain name control**

EDS Enterprise offers domain name control policies, enabling administrators to manage network access for organizational cloud computers through DNS rules. Unlike security group policies, these controls operate at the domain level, requiring only simple configuration of domain names (including wildcard \*) and authorization actions (allow or deny). This approach significantly simplifies website and service access management while maintaining precise control.

For implementation, administrators can configure the DNS rules with specific domain names (as shown in the following table) to achieve granular control.

**Domain name**

**Example**

**Access policy**

**Description**

Second-level domain name

`example.com`

Allow

Cloud computers can access `example.com`, and end users can open the web page on the cloud computers as expected.

Third-level domain name

`writer.examplec.com`

Deny

When cloud computers attempt to access `writer.example.com`, error code 404 is returned.

`developer.example.com`

Allow

Cloud computers can access `developer.example.com`, and end users can open the web page on the cloud computers as expected.

Fourth-level domain name

`image.developer.example.com`

Deny

When cloud computers attempt to access `image.developer.example.com`, error code 404 is returned.

`video.developer.example.com`

Allow

Cloud computers can access `video.developer.example.com` and `guide.developer.example.com`, and end users can open the web pages on the cloud computers as expected.

`guide.developer.example.com`

Allow

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
    -   Domain name
        
        To maintain optimal performance of cloud computers, the following reserved domain names are excluded from DNS rule control. These domain names will remain accessible from cloud computers, and blocking them by using DNS rules will be ineffective.
        
        -   `*.gws.aliyun`
            
        -   `*.aliyun.com`
            
        -   `*.alicdn.com`
            
        -   `*.aliyunpds.com`
            
        -   `*.aliyuncds.com`
            
        -   `*.aliyuncs.com`
            
    -   OS
        
        Domain name access control takes effect only on Windows cloud computers.
        
    -   Rule quantity
        
        You can configure only up to 300 DNS rules.
        
-   References: [Domain name access control](/help/en/wuying-workspace/user-guide/security-related-rules#4a1b829758vyg)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

To configure DNS rules, you can perform the following operations: Click **Add Rule** in the **Domain Name Access Control (Formerly DNS Feature)** section. Configure the following parameters in the **Add Rule** dialog box. Then, click **OK**.

**Parameter**

**Description**

Domain Name

The domain name for which you need to configure a DNS rule. You can enter only one domain name each time. Asterisk wildcards (`*`) are supported.

Description

The description of the DNS rule.

Access Policy

The access policy. You can select **Allow** or **Deny**.

**Note**

-   If you need to configure multiple DNS rules in which the Access Policy parameter is set to Allow, you must add a rule in which the parameter is set to Deny.
    
-   Rules are prioritized based on their order in the list, with the first rule having the highest priority. You can adjust the priority by changing the display order.
    

## **02 Network boundaries**

### **2.1 Cloud computer interoperability within office networks**

Cloud computers operate within an automatically provisioned security group tied to their office networks (formerly workspaces). These resources have no visible IP addresses or open ports, with the security group to block all external traffic except Adaptive Streaming Protocol (ASP)-based connections from the streaming gateway. This is a fundamental, immutable security layer provided by EDS Enterprise.

By default, the security group prevents inter-cloud-computer communication, eliminating risks of cross-infection or internal attacks between compromised systems. Administrators can enable controlled access between specific cloud computers within their office networks, while implementing supplemental network policies to maintain security.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
-   References: [Enable interconnection between cloud computers in an office network](/help/en/wuying-workspace/user-guide/create-or-delete-a-convenience-office-network#sc-enable-inner-connectivity)
    

**Configuration or usage**

Cloud computers in an office network are mutually isolated. To allow connectivity, you can turn on **Interconnection Between Cloud Computers in Office Network** on the details page of the office network.

1.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Office Networks** page, find the office network that you want to manage and click its ID.
    
4.  In the **Network Information** section of the details page, turn on **Interconnectivity**.
