You can add assets in Internet data centers (IDCs) to Security Center and manage them through the Security Center console.

## **How it works**

After installing the Security Center agent on an IDC server, you can create an IDC probe and scan tasks. The IDC probe scans servers within the specified CIDR block in the data center at defined intervals. When a server is detected, the IDC probe automatically adds it to the scan list in the IDC Probe Finding tab on the **Assets** > **Host** page.

**Detected servers are not protected by Security Center. You must install the Security Center agent on these servers to use its security features.**

**Note**

-   You can only add an IDC probe on an IDC server with the Security Center agent installed.
    
-   If your data centers cannot communicate with each other, you must add an IDC probe in each data center.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505014471/CAEQORiBgMCxldjRsBkiIGZhNzdhOThiY2I0NDRmOTY4Mjk1NGFkNzZmZmM1OWYy4016427_20230922114659.224.svg)

## **Prerequisite**

You have [installed the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent) on a server in your data center.

## **Add an IDC probe**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region of the assets you want to protect: **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Configuration** > **Feature Settings**.
    
3.  In the **Multi-cloud Configuration Management** > **IDC Probe** tab, click **Add Probe**.
    
    On the **Assets** > **Host** page, hover over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6505014471/p936644.png) icon in the **Add Multi-cloud Asset** section, and click **Add** under **IDC** to open the **Add Assets Outside Cloud** panel.
    
4.  In the **Add Assets Outside Cloud** panel, configure the IDC probe and click **Next**.
    
    -   **Data Center**: Enter the name of the data center where the server is deployed.
        
    -   **CIDR Block Settings**: Specify the CIDR block that the IDC probe scans.
        
        **Important**
        
        You can specify only class C IP addresses, such as 192.168.0.10/24.
        
    -   **Period Settings**: Set the interval for the IDC probe to scan servers.
        
    -   **Linux Port**: Specify the Secure Shell (SSH) port for the Linux server being scanned.
        
    -   **Windows Port**: Specify the Remote Desktop Protocol (RDP) port for the Windows server being scanned; a non-standard port can be used.
        
    -   **Region**: Specify the region where the IDC server is deployed by entering a city name. This will be displayed on the **Assets** page.
        
    
5.  In the **Add Assets Outside Cloud** panel, select the servers to run scan tasks. You can select multiple servers. Then, click **OK**.
    
    Ensure the selected servers have the Security Center agent installed and can communicate with servers in the specified CIDR block.
    

## **View** IDC probe **findings**

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Assets** > **Host**.
    
3.  On the ****Host**** page, click the **IDC Probe Finding** tab to view the details and agent status of the IDC servers synchronized to Security Center.
    
    The displayed information includes:
    
    -   **Start Time**: the time the server was detected.
        
    -   **IP Address/Port/CIDR Block**: the IP address, port, and CIDR block of the detected server.
        
    -   **Data Center**: the name of the data center where the detected server is deployed.
        
    -   **Agent**: the status of the Security Center agent on the detected server.
        
    -   **Asset Finding**: the operating system of the detected server.
        
    -   **Probe**: the name, public IP address, and private IP address of the server on which the IDC probe is installed.
        
    
    If the agent status of a detected server is **Unknown**, check whether the Security Center agent is installed. To use the protection features of Security Center, you need to [install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent) on that server.
    

**Note**

If you no longer want the IDC probe to scan a server, you can add the server to the whitelist.

## **Disable an IDC probe**

If you no longer need a probe server, you can disable or delete it on the **Multi-cloud Configuration Management** > **IDC Probe** page.

Once the IDC probe is disabled, Security Center will stop scanning the servers in that data center. If a new server is added, its information will not be synchronized with Security Center.

## **Add a server to the whitelist**

If you want to prevent the IDC probe from scanning a specific server, follow these steps to add it to the whitelist:

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Assets** > **Host**.
    
3.  On the ******Host****** page, click the ****IDC Probe Finding**** tab.
    
    -   In the scan list on the **IDC Probe Finding** tab, click **Add to Whitelist** in the **Actions** column for the server you want to whitelist.
        
        After adding the server to the whitelist, the system will no longer scan or record information about that server.
        
    -   To view the servers on the whitelist, click **Whitelist** in the upper-right corner of the scan results list on the ******IDC Probe Finding****** tab.
        

## **What to do next**

1.  You can [install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent) on the detected servers in the data center to enable detection and protection features offered by Security Center.
    
2.  You can [manage quotas](/help/en/security-center/user-guide/authorization-number-management) and bind a specific edition to the servers with the Security Center agent installed, allowing them to utilize the protection features of the corresponding edition.
