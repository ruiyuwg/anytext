Security Center provides the feature of asset management rules. You can configure rule conditions in an asset management rule. You can manage servers that meet the specified rule condition by group or tag. This improves your efficiency of managing assets. This topic describes how to use the feature of asset management rules.

## Limits

When you create an asset management rule, you can select an existing group or tag. After the rule is created, the rule does not take effect on the servers that belong to the existing group or the servers to which the existing tag is added. The rule takes effect only on the servers that do not belong to the group and the servers to which the tag is not added. If you do not want to select an existing group or tag, you can create a group or tag before you create the asset management rule. For more information about how to create a group or tag, see [Manage server groups, importance levels, and tags](/help/en/security-center/user-guide/manage-servers#section-9tv-hrx-ncn).

## Create an asset management rule

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Configuration** > **Feature Settings**.
    
3.  On the **Multi-cloud Configuration Management** tab, click the **Asset Management Rule** tab. Then, click **Create Rule**.
    
4.  In the **Asset Management Rule** panel, configure parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    The name of the asset management rule.
    
    **Rule Description**
    
    The description of the asset management rule.
    
    **Actions**
    
    The type of the asset management rule. Valid values:
    
    -   **Group**: If you select Group for Actions, the servers that meet a specified rule condition are added to the group that you select after you create the rule.
        
    -   **Tag**: If you select Tag for Actions, the servers that meet a specified rule condition are added with the tag that you select after you create the rule.
        
    
    **Apply Rule to All Servers**
    
    Specifies whether the asset management rule takes effect on existing servers.
    
    -   If you select Apply Rule to All Servers, the rule takes effect on existing servers.
        
    -   If you clear Apply Rule to All Servers, the rule takes effect only on newly purchased servers.
        
    
    **Rule Condition**
    
    The rule condition of the asset management rule. You can add rules or rule groups.
    
5.  Click **OK**.
    
    After the asset management rule is created, you can view the rule in the rule list of the Asset Management Rule tab. You can also view the results on the **Server** tab of the **Assets** > **Host** page. To check whether the servers that meet the specified rule condition are added to the selected group, choose **Attribute** > **Server Group** in the left-side navigation tree of the Server tab. To check whether the selected tag is added to the servers that meet the specified rule condition, click the name of the tag below **Tag** in the left-side navigation tree of the Server tab.
    

## Modify an asset management rule

1.  On the **Multi-cloud Configuration Management** tab, click the **Asset Management Rule** tab.
    
2.  On the **Asset Management Rule** tab, find the asset management rule that you want to modify.
    
3.  Click **Modify** in the **Actions** column.
    
    You can modify the settings of the following parameters: **Rule Name**, **Rule Description**, **Actions**, **Apply Rule to All Servers**, and **Rule Condition**.
    
4.  Click **OK**.
    
    Security Center manages your servers based on the asset management rule after modification.
    

## Delete an asset management rule

If you no longer require an asset management rule, you can delete the rule. Perform the following steps to delete a rule:

1.  On the **Asset Management Rule** tab, find the asset management rule that you want to delete.
    
2.  In the **Actions** column, click **Delete**.
    
3.  In the message that appears, click **OK**.
    
    **Note**
    
    After you delete an asset management rule, the group or tag that is specified in the rule is not affected.
