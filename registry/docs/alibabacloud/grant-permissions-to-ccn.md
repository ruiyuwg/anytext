After a Cloud Connect Network (CCN) instance is connected to a transit router, the on-premises network associated with the CCN instance can access the Private Zone service through the transit router. You must grant permissions to the CCN instance before the on-premises network can access the Private Zone service. This topic describes how to grant permissions to a CCN instance in different scenarios.

## Case 1: Instances in the same account

![云连接网-场景一-架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8091715561/p424073.png)

As shown in the figure, the CCN instance, the virtual private cloud (VPC) instance where Private Zone is deployed, and the transit router all belong to the same Alibaba Cloud account. In this scenario, you can grant permissions to the CCN instance directly in the Cloud Enterprise Network (CEN) console. The following table lists the account IDs for each instance.

**Resource**

**Account ID**

transit router

253460731706911258

VPC instance

253460731706911258

CCN instance

253460731706911258

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the same region as the VPC associated with Private Zone and click its ID.
    
4.  On the details page of the transit router, click the **Private Zone** tab and click **Authorize Now**. On the quick authorization page of Resource Access Management (RAM), click **Authorize**.
    
    **Note**
    
    Grant permissions to Smart Access Gateway (SAG) only when you configure access to Private Zone for the first time. After you grant the permissions, the CCN instance that is connected to the transit router can access Private Zone. The CCN instance is a component of SAG.
    
    After you grant the permissions, a RAM role named **AliyunSmartAGAccessingPVTZRole** is automatically created for the current account. Go to the [RAM console](https://ram.console.alibabacloud.com/roles) and on the **Identities** > **Roles** page, search for the role to view its information.![查看AliyunSmartAGAccessingPVTZRole角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5482727071/p38863.png)
    

## Case 2: CCN in a different account

![云连接网授权-场景二-架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8141715561/p424077.png)

The transit router and the VPC where Private Zone is deployed belong to one Alibaba Cloud account, and the CCN instance belongs to another Alibaba Cloud account. In this case, you must modify the trust policy of the account that owns the VPC. The following table lists the account IDs for each instance.

**Resource**

**Account ID**

transit router

253460731706911258

VPC instance

253460731706911258

CCN instance

271598332402530847

1.  In the account that owns the VPC, grant permissions to allow CCN instances within that account to access Private Zone.
    
    1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/) using the account that owns the VPC.
        
    2.  On the **Instances** page, find the CEN instance that you want to manage and click its ID.
        
    3.  On the **Basic Information** > **Transit Router** tab, find the transit router in the same region as the VPC associated with Private Zone and click its ID.
        
    4.  On the details page of the transit router, click the **Private Zone** tab and then click **Authorize Now**. On the quick authorization page of Resource Access Management (RAM), click **Authorize**.
        
        **Note**
        
        Grant permissions to Smart Access Gateway (SAG) only when you configure access to Private Zone for the first time. After you grant the permissions, the CCN instance that is connected to the transit router can access Private Zone. The CCN instance is a component of SAG.
        
2.  Modify the trust policy of the **AliyunSmartAGAccessingPVTZRole** role in the account that owns the VPC to allow the cross-account CCN instance to access Private Zone.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles) using the account that owns the VPC.
        
    2.  In the navigation pane on the left, choose **Identities** > **Roles**.
        
    3.  On the **Roles** page, enter AliyunSmartAGAccessingPVTZRole in the search box to find the role, and then click the role name.
        
    4.  On the role details page, click the **Trust Policy** tab and then click **Edit Trust Policy**.
        
    5.  In the Service section, add the following record: `"Alibaba Cloud account ID of the CCN instance@smartag.aliyuncs.com"`. Then, click **OK**.
        
        ![云连接网授权-场景二](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0221534071/p423148.png)
        

## Case 3: TR in a different account

![云连接网授权-场景三-架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8141715561/p424083.png)

The CCN instance and the VPC where Private Zone is deployed belong to one Alibaba Cloud account, and the transit router belongs to another Alibaba Cloud account. In this case, you must create an access policy in the account that owns the VPC. The following table lists the account IDs for each instance.

**Resource**

**Account ID**

transit router

271598332402530847

VPC instance

253460731706911258

CCN instance

253460731706911258

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles) using the account that owns the VPC.
    
2.  In the navigation pane on the left, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click **Create Role**.
    
4.  In the **Create Role** panel, create a role based on the following information.
    
    1.  For **Principal Type**, select **Cloud Service**.
        
    2.  For **Principal Name**, select **Smart Access Gateway**.
        
    3.  Click **OK**. Enter `AliyunSmartAGAccessingPVTZRole` for **Role Name** and click **OK**.
        
    4.  Return to the **Roles** page.
        
5.  On the **Roles** page, search for the `AliyunSmartAGAccessingPVTZRole` role that you created and click the role name.
    
6.  On the **Permissions** tab, click **Grant Permission** to open the **Grant Permission** panel.
    
7.  In the search box under **Policy**, enter the keyword pvtz. Select the **AliyunPvtzReadOnlyAccess** policy and click **Grant Permission**.
    
8.  In the **Grant Permission** panel, click **Close** to return to the role details page.
    
9.  On the role details page, click the **Trust Policy** tab to view the authorization information.
    
    ![场景三：查看信任策略](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5482727071/p60148.png)
    

## Case 4: Each instance in a separate account

![云连接网授权-场景四-架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8141715561/p424085.png)

The CCN instance, the VPC where Private Zone is deployed, and the transit router all belong to different Alibaba Cloud accounts. In this case, you must complete two authorization tasks. The following table lists the account IDs for each instance.

**Resource**

**Account ID**

transit router

253460731706911258

VPC instance

283117732402483989

CCN instance

271598332402530847

1.  Follow the steps in [Scenario 3](#section-pil-zh5-23b) to create a role and grant permissions in the account that owns the VPC.
    
2.  Follow the steps in [Scenario 2](#section-8m7-zgv-bbw) to grant permissions to the CCN instance in the account that owns the VPC.
    

If you have multiple CCN instances that belong to different Alibaba Cloud accounts, you can add all CCN instances that need to access Private Zone to the trust policy, as shown in the following figure.

**Resource**

**Account ID**

transit router

253460731706911258

VPC instance

283117732402483989

CCN instance 1

271598332402530847

CCN instance 2

244831332402557259

CCN instance 3

287683832402436789

![云连接网授权-场景四](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0221534071/p423180.png)

## What to do next

[Configure access to Private Zone](/help/en/cen/user-guide/configure-privatezone-2#task-zp5-nwy-pgb)
