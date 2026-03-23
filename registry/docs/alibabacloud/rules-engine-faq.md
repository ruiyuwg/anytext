This topic aims to address FAQs about the rules.

## **How do I identify private CIDR blocks?**

Certain Internet service providers (ISPs) might assign private IP addresses to clients in specific areas, which can cause the ESA points of presence (POPs) to receive client IPs within private CIDR blocks. This can lead to inaccurate identification of client requests when using parameters such as country/region, province or carrier in the rules.

Follow the steps to identify private CIDR blocks:

### **Step 1: Create a new IP list**

1.  Navigate to **Global Settings** > **Lists**, click **Create List**, and add the following three private **IP Address/CIDR Block**:
    
    -   Class A private IP address: 10.0.0.0 to 10.255.255.255, subnet mask: 10.0.0.0/8.
        
    -   Class B private IP address: 172.16.0.0 to 172.31.255.255, subnet mask: 172.16.0.0/12.
        
    -   Class C private IP address: 192.168.0.0 to 192.168.255.255, subnet mask: 192.168.0.0/16.
        
2.  As shown in the figure, click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3614029371/p912818.png)
    

### **Step 2: Add a rule**

1.  Take **WAF Custom Rules** as an example. Navigate to the WAF custom rules page, click **Add Rule**, and fill in the fields.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3614029371/p912861.png)
    
2.  Click **OK** to complete the process.
    

After adding the rule conditions, client requests using private IP CIDR blocks will be accurately identified by the rules.
