In Elastic Desktop Service (EDS) Enterprise, a cloud computer policy defines configurations for managing cloud computers, covering data security, access control, user experience, and collaboration. EDS Enterprise provides a default cloud computer policy that cannot be modified or deleted. To meet your business requirements, you can create custom policies. This topic describes how to create and manage custom policies.

## **Create a custom policy**

You can use different methods to create a custom policy.

#### **Create from scratch**

You can create a custom policy from scratch.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

#### **Clone an existing custom policy**

If you want to quickly create a custom policy whose configurations are the same as or similar to an existing custom policy, we recommend that you clone the existing custom policy and modify the configurations based on your business requirements.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, find the existing custom policy that you want to clone and click **Clone** in the **Actions** column.
    
4.  In the **Clone Policy** dialog box, specify a name for the custom policy that you want to create and click **OK**.
    
    After you clone the existing custom policy, you can view the clone of the policy in the policy list and modify the configurations of the policy based on your business requirements.
    

#### **Import a policy configuration file**

You can import a standard policy configuration file in the JSON format to quickly create a custom policy.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Import Policy**.
    
4.  In the **Import Policy** dialog box, specify a name for the custom policy that you want to create, upload a policy configuration file in the JSON format, and then click **OK**.
    

## Switch from region-specific policies to global policies

Custom policies created before October 2024 are specific to individual regions and can only be applied to cloud computers in the same region. Custom policies created after October 2024 are not region-specific and can be applied to cloud computers across regions. For custom policies created before October 2024, you can switch them from region-specific to globally applicable. This allows you to bind them to cloud computers from any regions.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, find the custom policy that you want to manage and click **Switch to Global Policy** in the **Actions** column. In the message that appears, click **OK**.
    

## **Change an associated policy**

If the custom policy for your regular or multi-shared cloud computer no longer meets your business needs, you can replace it with another custom policy that does.

#### **Replace the existing policy of a cloud computer**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  On the **Cloud Computers** page, perform the following operations to replace the existing policy of one or more cloud computers based on your business requirements:
    
    -   Replace the existing policy of a single cloud computer: Find the cloud computer that you want to manage, click the ⋮ icon in the **Actions** column, and then select **Change Policy**.
        
    -   Replace the existing policy of multiple cloud computers at the same time: Select the cloud computers and choose **More** > **Change Policy** in the lower part of the page.
        
    
4.  In the **Change Policy** panel, perform the following operations based on your business requirements and click **OK**:
    
    -   **Replace a required policy**
        
        A required policy applies to all CIDR blocks and can only be assigned to a single cloud computer at a time. If you want to replace a required policy, click **Change Policy** in the **Actions** column on the **Required Policy** tab. In the **Change Policy** dialog box, select a new policy and click **Confirm**.
        
        **Note**
        
        You cannot directly replace the policy for the cloud computers if the resource group containing them has an associated policy. You can either replace the policy for the resource group or remove the cloud computers from the resource group and then replace the policy for the cloud computers.
        
    -   **Replace an optional policy**
        
        An optional policy applies to only specific CIDR blocks. Each cloud computer can be associated with up to four optional policies at the same time. Optional policies have a higher priority than required policies, and their priority can be adjusted by changing their sorting order.
        
        -   If you want to add an optional policy, click **Associate Policy** on the **Optional Policies** tab. In the **Associate Policy** dialog box, select one or more policies and click **Confirm**.
            
        -   If you want to remove an optional policy, click **Disassociate** in the **Actions** column on the **Optional Policies** tab.
            
5.  In the confirmation message that appears, click **OK**.
    

#### **Replace the existing policy of a** **multi-shared cloud computer**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
    
3.  On the **Shared Cloud Computer** page, find the cloud computer whose policy you want to replace and click its ID.
    
4.  On the **Basic Information** tab, find the **Policy Group Name** parameter and click the icon.
    
5.  In the **Change Policy** panel, clear the current policy, select a new policy, and then click **OK**.
    

#### **Replace the existing policy of a resource group**

After you associate a policy with a resource group, this policy applies to all cloud computers within the resource group. The policy previously associated with these cloud computers will expire.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Resource Groups**
    
3.  On the **Resource Groups** page, find the resource group with which you want to associate a policy and click the ⋮ icon in the **Actions** column. Then, click **Associate Policy**.
    
4.  In the **Associate Policy** panel, select the policy that you want to associate and click **OK**.
    
    **Note**
    
    A resource group can be associated with one policy that applies to all CIDR blocks and up to four additional policies, each applying to specific CIDR blocks.
    

## Modify a custom policy

If the custom policy associated with your cloud computer cannot meet your business requirements, you can modify the policy.

### Procedure

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, find the custom policy that you want to modify and click **Change Policy** in the **Actions** column.
    
4.  On the **Modify Policy** page, modify the configurations based on your business requirements and click **OK**.
    

### Effective time of modifications

After you modify a policy that is associated with a cloud computer, the rules determine the time when the modifications take effect. Modifications to the following rules immediately take effect. End users do not need to disconnect from and reconnect to cloud computers.

-   Display mode
    
-   Watermark
    
-   Security group control
    
-   Domain name access control
    
-   Screen recording audit
    
-   Remote assistance
    

Modifications to other rules take effect the next time end users connect to the cloud computers with which the policy is associated.

## Specify the CIDR blocks on which a custom policy takes effect

By default, a custom policy takes effect on all CIDR blocks. If you want the custom policy to take effect only on specific CIDR blocks, specify the CIDR blocks. This way, when end users connect to cloud computers that are associated with the custom policy from Alibaba Cloud Workspace terminals, the system checks whether the egress IP addresses of the terminals fall within the specified CIDR blocks to determine if the policy should be enforced.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9555491471/CAEQORiBgMDV876AqxkiIGU3Y2JlYjFkMDdlNDRmYWE4MGY0OGQ1ZTJiNzc2NzAw3963382_20230830144006.372.svg)

### **Procedure**

To specify a CIDR block on which a policy takes effect, perform the following steps:

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, find the custom policy that you want to manage and click **Change Policy** in the **Actions** column.
    
4.  In the upper part of the **Modify Policy** page, select **Specific CIDR Block** for the **Valid IP Address** parameter and click **Add CIDR Block**.
    
    **Note**
    
    -   For policies that are not associated with cloud computers and policies that are associated with cloud computers but take effect on specific CIDR blocks, you can directly change the CIDR blocks.
        
    -   For policies that are associated with cloud computers and take effect on all CIDR blocks, you must disassociate the policies from cloud computers. Then, you can specify the CIDR blocks on which the policies take effect. If you do not want to disassociate the policies, you can clone them to create new policies that have the same configurations, specify CIDR blocks for the new policies to take effect, and then associate the new policies with the cloud computers. For more information about how to clone a custom policy, see [Create a custom policy](#sc-create-policy).
        
    
5.  In the **Add CIDR Block** dialog box, enter up to three CIDR blocks and click **OK**.
    
    After you specify CIDR blocks for a policy and associate the policy with a cloud computer, the policy takes effect the next time the cloud computer is connected.
    
    **Note**
    
    You must associate each cloud computer with exactly one policy that takes effect on all CIDR blocks. You can associate a cloud computer with up to four policies that take effect on specific CIDR blocks.
    

## **Export a policy**

You can export policies. The exported policies are configuration files in the JSON format. If you share the files with other users, the users can import the files to quickly create policies.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, find the policy that you want to export and click **Export Policy** in the **Actions** column.
    
    After you export the policy, a file in the JSON format is generated, and you can download the file to your on-premises device.
    

## Delete a custom policy

If you no longer require a policy, you can delete the policy.

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, perform the following operations to delete one or more custom policies.
    
    **Note**
    
    If the policy that you want to delete is associated with cloud computers, you must replace the policy with a different policy and then proceed with the delete operation. For more information, see [Replace the existing policy of a cloud computer](#sc-change-policy-cloud-computer).
    
    -   Delete a policy: Find the custom policy that you want to delete and click **Delete** in the **Actions** column.
        
    -   Delete multiple policies at the same time: Select one or more custom policies that you want to delete and click **Delete** in the lower part of the page.
        
4.  In the confirmation message that appears, click **OK**.
