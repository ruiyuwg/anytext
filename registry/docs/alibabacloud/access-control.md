For precise control over client access, enable access control for a listener. A whitelist allows access only from specific IP addresses. A blacklist denies access from specific IP addresses.

## How access control works

The access control feature consists of access control lists (ACLs) and access control modes.

-   ACL: Contain one or multiple IP address or CIDR block entries. Use an ACL to manage IP addresses that have the same security requirements.
    
-   Access control mode: You can configure a whitelist or a blacklist for listeners.
    
    -   **Whitelist**: **Allows access to a Global Accelerator listener only from specific IP addresses.** Requests are forwarded only if they originate from the IP addresses or CIDR blocks specified in the selected ACL. Whitelists are ideal for granting access only to specific clients.
        
    -   **Blacklist**: **Denies access to a Global Accelerator listener from specific IP addresses**. Requests that originate from the IP addresses or CIDR blocks specified in the selected ACL are not forwarded. Blacklists are ideal for blocking specific clients.
        

**Warning**

-   Using a whitelist carries certain risks. Once a whitelist is enabled, only the IP addresses on the whitelist can access the listener.
    
-   If you enable a whitelist for a listener but do not add any IP addresses to the associated ACL, the listener forwards all requests.
    
-   If you enable a blacklist for a listener but do not add any IP addresses to the associated ACL, the listener forwards all requests.
    

When you create an ACL, you can select IPv4 or IPv6. You can then enable an ACL of the corresponding IP version for a listener based on the IP version of the acceleration endpoint.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1986666671/CAEQUBiBgMCtgryy2BkiIGU4MjVjODJjNGI0NzQ4M2RiZGQ2MmU3MzQ0MDRlNjE13963382_20230830144006.372.svg)

## Limitations

### **Pay-as-you-go GA**

-   The access control feature is available only for smart routing listeners.
    
-   A GA instance can manage a total of 600 IP address or CIDR block entries. This is the sum of all entries in the ACLs associated with all listeners of the instance.
    
    For a listener, the maximum number of IP address entries or CIDR block entries in the associated ACL is calculated as follows:
    
    -   Total number of ports for the listener (a port range counts as one port) × Number of entries in the ACL
        
    -   If the listener protocol is HTTP/3, the calculation is: Total number of ports for the listener (a port range counts as one port) × Number of entries in the ACL × 2
        
-   An ACL can be associated with a maximum of 10 listeners.
    
-   A listener can be associated with a maximum of one IPv4 ACL and one IPv6 ACL.
    
    -   If the accelerated IP protocol is IPv4 or IPv6, and the listener is associated with both an IPv4 ACL and an IPv6 ACL, only the ACL that matches the accelerated IP version takes effect.
        
    -   If the accelerated IP protocol is dual-stack, and the listener is associated with both an IPv4 ACL and an IPv6 ACL, both ACLs take effect.
        

### **Subscription GA**

-   The access control feature is available only for smart routing listeners.
    
-   An ACL associated with a listener can contain a maximum of 200 unique IP address or CIDR block entries.
    
-   You can associate an ACL with up to 10 listeners.
    
-   A listener can be associated with a maximum of one IPv4 ACL and one IPv6 ACL.
    
-   If the accelerated IP protocol is IPv4 or IPv6, and the listener is associated with both an IPv4 ACL and an IPv6 ACL, only the ACL that matches the accelerated IP version takes effect.
    

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1986666671/CAEQUBiBgICz4rKy2BkiIDU3M2QyZDRjMWQ5MzQ5YWFiNDkyNDc3YWZiN2FkNWM34210981_20240213143608.814.svg)

## Create an ACL

Create an ACL before enabling access control.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, choose **Standard Instance** > **Access Control**.
    
3.  On the **Access Control** page, click **Create ACL**.
    
4.  In the **Create ACL** dialog box, configure the ACL based on the following information and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **ACL Name**
    
    Enter a name for the ACL.
    
    **IP Version**
    
    Select the IP version for the ACL. Select **IPv4** or **IPv6** to match the IP version of your acceleration regions.
    
    **Resource Group**
    
    Select the resource group to which the ACL belongs.
    
    This resource group is created by the current Alibaba Cloud account in Resource Management. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Tag**
    
    Add a tag to the ACL.
    
    Select or enter a **Tag Key** and a **Tag Value**.
    
    For more information, see [Tag Management](/help/en/ga/user-guide/manage-tags#task-2276082).
    

## Add entries to an ACL

Once an ACL is created, you must populate it with IP address or CIDR block entries. These entries will be used to filter traffic. You can add entries one by one or in bulk.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, choose **Standard Instance** > **Access Control**.
    
3.  Find the target ACL and click **Manage ACL** in the ****Actions**** column.
    
4.  On the ACL details page, add entries in one of the following ways:
    
    -   Add a single entry
        
        Click ****Add Rule****. In the ****Add ACL Entry**** dialog box, enter an **IP Address/CIDR Block** and ****Remark****, and then click **OK**.
        
    -   Add entries in a batch
        
        Click ****Add Multiple Rules****. In the ****Add Multiple Rules**** dialog box, add multiple IP addresses or CIDR blocks as prompted and click **OK**.
        

## Enable access control for a listener

Before enabling access control, ensure you have created a listener. For more information, see [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#task-2382120).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the ****Instances**** page, find the target Global Accelerator instance and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, click the ID of the listener.
    
4.  On the **Listener Details** tab, in the **Access Control** section, toggle the ****Access Control**** switch.
    
5.  In the **Enable Access Control** dialog box, configure the following parameters and click ****OK****.
    
    **Parameter**
    
    **Description**
    
    ****Access Control Mode****
    
    Select an access control mode:
    
    -   **Whitelist**: Allows traffic only from IPs in the specified ACL.
        
    -   **Blacklist**: Blocks traffic from IPs in the specified ACL.
        
    
    **Warning**
    
    -   Using a whitelist carries certain risks. Once a whitelist is enabled, only the IP addresses on the whitelist can access the listener.
        
    -   If you enable a whitelist for a listener but do not add any IP addresses to the associated ACL, the listener forwards all requests.
        
    -   If you enable a blacklist for a listener but do not add any IP addresses to the associated ACL, the listener forwards all requests.
        
    
    ****Select ACL****
    
    Select an ACL.
    
    You can also click **\+ Add ACL** to add two ACLs at the same time.
    

## Dissociate an ACL from a listener

You can dissociate an ACL that is no longer in use from a listener.

When all ACLs are dissociated, access control is disabled for the listener.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the ****Instances**** page, find the target Global Accelerator instance and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, click the ID of the listener.
    
4.  Under the **Listener Details** tab, find the **Access Control** section click the ![Edit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3616378561/p451956.png) icon next to **ACL**.
    
5.  In the **Modify ACL** dialog box, find the ACL that you want to dissociate, click **Dissociate** in the **Actions** column, and then click **OK**.
    

## Disable access control for a listener

If you no longer need to restrict access to a listener, disable access control for it.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the ****Instances**** page, find the target Global Accelerator instance and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, click the ID of the listener.
    
4.  On the **Listener Details** tab, in the **Access Control** section, turn off the **Access Control** switch.
    
5.  In the dialog box that appears, click **OK**.
    

## Delete entries from an ACL

You can delete IP address entries from an ACL.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, choose **Standard Instance** > **Access Control**.
    
3.  Find the target ACL and click **Manage ACL** in the ****Actions**** column.
    
4.  In the ****Actions**** column of the target IP entry, click ****Delete****. Alternatively, select multiple IP entries and click **Delete** below the list of entries.
    
5.  In the dialog box that appears, click **OK**.
    

## Delete an ACL

Delete an ACL that is no longer in use.

Before deletion, you must [dissociate an ACL from all its listeners](#section-0av-0iw-ur2).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the navigation pane on the left, choose **Standard Instance** > **Access Control**.
    
3.  Find the ACL that you want to delete and click **Delete** in the **Actions** column.
    
4.  In the dialog box that appears, click **OK**.
    

## References

-   [CreateAcl](/help/en/ga/api-createacl#doc-api-Ga-CreateAcl): Creates an ACL.
    
-   [AddEntriesToAcl](/help/en/ga/api-addentriestoacl#doc-api-Ga-AddEntriesToAcl): Adds IP entries to an ACL.
    
-   [AssociateAclsWithListener](/help/en/ga/api-associateaclswithlistener#doc-api-Ga-AssociateAclsWithListener): Associates ACLs with a listener.
    
-   [DissociateAclsFromListener](/help/en/ga/api-dissociateaclsfromlistener#doc-api-Ga-DissociateAclsFromListener): Dissociates ACLs from a listener.
    
-   [RemoveEntriesFromAcl](/help/en/ga/api-removeentriesfromacl#doc-api-Ga-RemoveEntriesFromAcl): Deletes IP entries from an ACL.
    
-   [DeleteAcl](/help/en/ga/api-deleteacl#doc-api-Ga-DeleteAcl): Deletes an ACL.
