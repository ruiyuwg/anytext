An IP whitelist template lets you centrally manage which IP addresses can connect to multiple Tair (Redis OSS-compatible) instances. Instead of updating whitelists on each instance individually, create a template and associate it with instances that share the same access rules. Updates to the template automatically propagate to all associated instances.

**Constraint**

**Detail**

Region

A template can only be associated with instances in the same region

Multiple templates

An instance can be associated with multiple IP whitelist templates

Association effect

Template IP addresses are added to the instance whitelist. Existing whitelist entries are not affected

Disassociation effect

Template IP addresses are removed from the instance whitelist. Those IP addresses can no longer connect to the instance

## Create an IP whitelist template

1.  Log on to the [console](https://kvstore.console.alibabacloud.com/).
    
2.  In the upper-left corner of the page, select a region.
    
3.  In the left-side navigation pane, click **IP Whitelist Templates**.
    
4.  In the upper-left corner of the page, click **Create IP Whitelist Template**.
    
5.  In the panel that appears, configure the following parameters:
    
    **Important**
    
    Disassociating a template from an instance removes the template's IP addresses from the instance's whitelist. Those IP addresses can no longer connect to the instance.
    
    **Parameter**
    
    **Description**
    
    **IP Whitelist Template Name**
    
    A descriptive name that identifies the template.
    
    **IP Addresses in Whitelist**
    
    The IP addresses or CIDR blocks to add. Separate multiple entries with commas (,). Up to 1,000 entries are supported.
    
    **Associate Instance**
    
    Select instances from the **Available Instances** section. To remove an instance, click it in the **Selected Instances** section.
    
6.  Click **OK**.
    
7.  In the dialog box that appears, click **OK**.
    

## Modify an IP whitelist template

1.  Log on to the [Tair (Redis OSS-compatible) console](https://kvstore.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **IP Whitelist Templates**.
    
3.  Find the template and click **Modify** in the **Actions** column.
    
4.  Update the parameters as needed and click **OK**.
    

## Delete an IP whitelist template

If the template is associated with instances, deleting it removes the template's IP addresses from all associated instances. To keep the IP addresses on the instances, disassociate the template from all instances before deleting it. You can disassociate a template from an instance on the **Whitelist Setting** tab.

1.  Log on to the [Tair (Redis OSS-compatible) console](https://kvstore.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **IP Whitelist Templates**.
    
3.  Find the template and click **Delete** in the **Actions** column.
    
4.  In the message that appears, click **Delete**.
    

## **References**

[Configure whitelists](/help/en/redis/user-guide/configure-whitelists)
