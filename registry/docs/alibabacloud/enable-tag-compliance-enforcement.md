You can use a tag policy to implement pre-event interception of non-compliant tags for your resources to standardize tag-related operations.

## **Scenarios**

![强制标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8066221561/p409378.png)

### **Scenario 1: Intercept non-compliant tags when you create a resource**

#### **Default feature**

**When you create a resource, you add a tag whose key is defined in a tag policy to the resource. However, the value of the tag is not defined in the tag policy. In this case, the system determines that the tag is non-compliant and blocks the resource creation. As a result, the resource fails to be created.**

For example, you create a tag policy in which the `CostCenter:Beijing` tag is defined for Elastic Compute Service (ECS) instances and attach the tag policy to an Alibaba Cloud account. When you create an ECS instance, if you **add** a non-compliant tag such as `CostCenter:beijing` or `CostCenter:Shenzhen` to the instance, the instance fails to be created.

For information about the resource types and API operations that support the default feature, see the **API operation that supports the default feature for pre-event interception of non-compliant tags** column in the [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6) section of the Overview topic.

#### **Strong verification feature**

**When you create a resource, the tags defined in a tag policy are not added to the resource. In this case, the system blocks the resource creation. As a result, the resource fails to be created.**

For example, you create a tag policy in which the `CostCenter:Beijing` tag is defined for ECS instances and attach the tag policy to an Alibaba Cloud account. When you create an ECS instance, if you **do not add** the compliant tag `CostCenter:Beijing` or you add no tags to the instance, the instance fails to be created.

The strong verification feature takes effect only after you manually enable it. For a resource directory, this feature takes effect on all members in the resource directory after the feature is enabled.

You can log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags) and choose **Tag Policy** > **Settings** in the left-side navigation pane to enable the strong verification feature for your resource directory or the current account. If you do not require this feature, you can disable it at any time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1709054371/p812802.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0720581471/p925636.png)

For information about the resource types and API operations that support the strong verification feature, see the **API operation that supports strong verification for pre-event interception of non-compliant tags** column in the [Services that support tag policies](/help/en/resource-management/tag/user-guide/overview#section-5ob-hk3-fl6) section of the Overview topic.

### **Scenario 2: Intercept non-compliant tags when you add tags to a resource**

When you add tags to a resource, the system checks whether the tag keys and tag values of the tags meet the requirements of a tag policy. You can add tags to the resource only if the tag keys and tag values of the tags meet the requirements of the tag policy.

## **Best practices**

-   If you enable pre-event interception of non-compliant tags, the production of resources may be affected. Before you enable pre-event interception of non-compliant tags in the production environment, we recommend that you perform a test by using a test account.
    
-   Enabling pre-event interception of non-compliant tags for a cloud service may affect other cloud services. For example, if you enable pre-event interception of non-compliant tags for ECS instances, resource scaling in Auto Scaling or Container Service for Kubernetes (ACK) may fail because compliant tags are not added to the related ECS instances. Before you enable pre-event interception of non-compliant tags, make sure that you can perform tag-related operations that meet the requirements of the related services.
    

## Procedure

Pre-event interception of non-compliant tags can be used to intercept non-compliant tag-related operations within the current account or the members in a resource directory. In this example, the management account of a resource directory is used to enable the Tag Policy feature that is in resource directory mode and create a tag policy. The tag policy defines that a cost center tag must be added to an ECS instance when you use a member in the resource directory to create the ECS instance. The tag key of the cost center tag is `CostCenter`, and the tag value is `Beijing` or `Shanghai`. The ECS instance can be successfully created only if the defined cost center tag is added to the instance.

For security purposes, we recommend that you create a RAM user within the management account of your resource directory, attach the AdministratorAccess policy to the RAM user, and then use the RAM user as the administrator of the resource directory. You need to perform the following operations by using the RAM user. For information about how to create a RAM user and grant permissions to the RAM user, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  Enable the Tag Policy feature that is in resource directory mode.
    
    For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature#task-2182800).
    
3.  Create a tag policy.
    
    1.  On the **Resource Directory** tab of the **Policy Library** page, click **Create Tag Policy**.
        
    2.  On the Create Tag Policy page, enter a policy name in the Policy Name field.
        
    3.  Enter a policy description in the Policy Description field.
        
    4.  Configure the tag policy on the **Quick Mode** tab.
        
        1.  Select **Add Tags with Specified Tag Values to Resources** for the Policy Scenario parameter.
            
        2.  In the **Tag Key** field, enter `CostCenter`.
            
        3.  Enter one or more tag values in the Specify Allowed Tag Values field.
            
            You can specify multiple tag values for each tag key. You must make sure that each tag value occupies one row. In this example, two tag values `Beijing` and `Shanghai` are specified for the tag key.
            
        4.  Select **Pre-event Interception** and click **Specify Resource Types**.
            
        5.  In the **Specify Scope for Pre-event Interception** dialog box, read the prompt message for risks of pre-event interception, accept the risks, choose **Elastic Compute Service** > **Instance** in the Resource Type column, and then click **OK**.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1177837471/p955686.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1177837471/p955687.png)
        
    5.  Click **Create**.
        
4.  Attach the tag policy.
    
    1.  Go back to the Resource Directory tab of the Policy Library page, find the tag policy that is created in Step [3](#step-gme-tr5-21d) and click **Attach** in the **Actions** column.
        
    2.  In the **Attach** dialog box, select the object to which you want to attach the tag policy and click **OK**.
        
        You can attach the tag policy to one of the following objects. You can attach the tag policy to a member for testing. If the test is successful, you can attach the tag policy to the Root folder or a specific folder.
        
        -   Root folder: If you attach the tag policy to the Root folder, the tag policy takes effect for all members in the resource directory.
            
        -   Specific folder: If you attach the tag policy to a specific folder, the tag policy takes effect for all members in the folder and its subfolders.
            
        -   Specific member: If you attach the tag policy to a specific member, the tag policy takes effect only for the member.
            
        
5.  Check whether the tag policy is in effect.
    
    1.  Use the member to which the tag policy is attached in Step [4](#step-grk-g2l-9gd) to log on to the Alibaba Cloud Management Console.
        
        For more information, see [Use a member to log on to the Alibaba Cloud Management Console](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console#task-snm-hs1-dhb).
        
    2.  Create an ECS instance within the member to check whether the tag policy is in effect.
        
        -   Creation successful
            
            If you add the `CostCenter:Beijing` or `CostCenter:Shanghai` tag to the ECS instance when you create the ECS instance, the ECS instance will be successfully created.
            
        -   Creation failed
            
            By default, pre-event interception of non-compliant tags takes effect only for tags that are defined in the tag policy. In the following scenarios, the ECS instance will fail to be created:
            
            -   The case of the tag key or tag value that you enter when you add the tag to the ECS instance is inconsistent with that of the tag key or tag value defined in the tag policy. For example, `costCenter:beijing` is a non-compliant tag.
                
            -   You add the tag key `CostCenter` to the ECS instance, but you do not add a tag value or you add a non-compliant tag value to the ECS instance.
                
            
            If you enable the strong verification feature but you do not add tags to the ECS instance or you add other tags to the ECS instance, the ECS instance fails to be created.
            
        

## Error codes

**Error code**

**Sample error message**

**Description**

Forbidden.TagPolicy

The operation is failure, because the valid tag policy values of 'TagValue' are \["red","green","orange","blue","pink","white","black","grey"\], but the value is "xxx".

The tag value is non-compliant and the resource fails to be created. Enter the `tag value` that is defined in the tag policy.

The operation is failure, because the valid tag policy values of 'TagKey' are \["colorful"\], but the value is "colorFul".

The case of the tag key is non-compliant and the resource fails to be created. Enter a tag key whose case is consistent with the case of the `tag key` that is defined in the tag policy.

The operation is failure, because the tag policy keys \["color"\] are necessary.

The tag key `color` is not specified and the resource fails to be created. Enter the tag key `color` that is defined in the tag policy.
