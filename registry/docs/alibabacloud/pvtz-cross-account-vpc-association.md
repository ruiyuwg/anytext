By default, a private zone only resolves DNS queries from virtual private clouds (VPCs) within the same Alibaba Cloud account. If your organization uses multiple accounts, you can use the cross-account VPC association feature to extend a zone's effective scope to include VPCs owned by other accounts. This enables centralized private DNS management without duplicating zones in each account.

## **Prerequisites**

1.  Log on to the console using an **Alibaba Cloud account** or a **Resource Access Management (RAM) user** that has the AliyunDNSFullAccess permission.
    
2.  You have created a **User Defined Zones**.
    
3.  You have obtained the email address or username of the destination Alibaba Cloud account. The destination account must have at least one VPC available for association.
    

## Limits

Note the following rules before you associate VPCs across accounts:

-   **Destination account type**: You can only add a destination account by using its root account credentials (email or username). RAM user credentials are not supported.
    
-   **Site restrictions**: You can only associate accounts on the same site. For example, you can associate accounts on the China site (Chinese Mainland) with each other, and accounts on the International site with each other. Cross-site association is not supported.
    
-   **VPC read delay**: VPCs from an associated account are not synced in real time. After you add an associated account, wait approximately one hour before the VPCs become available for selection.
    
-   **Billing:** The account that owns the zone is billed for the DNS resolution service. For details, see [Product billing](/help/en/dns/pubz-product-billing).
    

## Procedure

Associating VPCs across accounts takes two steps. First, add a linked account. Then, select the VPC from the linked account when you set the effective scope for the domain name. Follow these steps:

### Step 1: Add a linked account

1.  Go to the [Alibaba Cloud DNS - PrivateZone](https://dnsnext.console.alibabacloud.com/privateDNS) page.
    
2.  Click **Open Service Guide**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1463798671/p1046878.png)
    
3.  In the guide panel, click **Unified Management of Private Zone**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0091946571/p994458.png)
    
4.  In the dialog box that appears on the right, click **Add Alibaba Cloud Account**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1463798671/p1046939.png)
    
5.  In the dialog box, configure the following parameters:
    
    **Field**
    
    **Description**
    
    **Alibaba Cloud Account (Email/Username)**
    
    Enter the email address or username of the destination Alibaba Cloud root account. Do not enter the account UID. RAM user credentials are not supported.
    
    **Verification Code**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1463798671/p1046909.png)
    
    Click **Send Verification Code**. A verification code is sent to the email address and mobile phone number associated with the destination account. Enter the received code to verify the account owner's identity.
    
6.  After verification succeeds, the associated account appears in the account table with its UID and the time it was added. You can add more accounts by repeating the preceding steps.
    

### **Step 2: Configure the effective scope**

1.  On the **Private Zone (Compatible with on-premises DNS)** page, click the ****Private Zone**** tab, and then select **User Defined Zones**.
    
2.  On the **User Defined Zones** page, click **Effective Scope** in the Actions column of the target domain name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1463798671/p1046921.png)
    
3.  On the **Effective Scope** page, find the **Effective in VPCs** section. Select the VPC from the linked account. Click Submit to set the effective scope across accounts.
    
    **Note**
    
    **VPCs in a linked account are not read in real time**. If you cannot find the VPC, wait for about an hour and try again.
