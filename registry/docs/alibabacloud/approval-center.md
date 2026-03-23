The DataWorks Approval Center helps you manage data authorization and control sensitive operations. You can define approval scopes and create custom approval flows to meet your enterprise's compliance requirements.

## Function introduction

When you manage data development in DataWorks, you can easily control permissions for resources, such as table data and DataService APIs. To manage permissions, you can customize approval flows in the **Approval Center**. If your tasks involve [compute engine approval policies](/help/en/dataworks/user-guide/request-processing-policies-for-compute-engine-data#task-2095441), you can also use the default approval flow for [data access control](/help/en/dataworks/user-guide/data-access-control/) provided by the DataWorks **Security Center**.

After you create a custom approval flow, DataWorks automatically checks whether a permission request requires the custom flow. If the request matches the criteria, DataWorks routes it according to the custom flow.

You can perform the following operations in the DataWorks **Approval Center**:

-   Define approval policies. You can specify the scope of approval objects and define approval flows to control critical data resources and sensitive operations. You can also configure notifications to be sent by text message, email, or DingTalk.
    
-   Process approval flows. The Approval Center allows both request initiators and approvers to manage the approval process.
    

For more information about managing custom approval policies, see [Compute engine approval policy](/help/en/dataworks/user-guide/request-processing-policies-for-compute-engine-data#task-2095441), [DataService Studio approval policy](/help/en/dataworks/user-guide/request-processing-policies-for-dataservice-studio#task-2096317), and [Extension program approval policy](/help/en/dataworks/user-guide/extension-approval-policy).

After you configure a custom approval policy, the procedures for requesting and approving permissions for table fields and for operations in DataService Studio are described in [Requesting and processing procedure for permissions on table fields](#title-j3v-k71-6y8) and [Requesting and processing procedure for permissions on APIs, functions, and service orchestration in DataService Studio](#title-w38-340-bnz).

## Table field permission request and approval flow

The following figure shows the approval flow for requesting permissions for table fields in **Security Center** after a custom approval policy is configured in **Approval Center**.![申请具体表字段权限](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4746940361/p295377.png)

-   When a user requests permissions for a MaxCompute table field in the Security Center, DataWorks determines the appropriate approval flow based on the requested field.
    
    -   If the requested field is within the data scope of a custom approval policy, the request is processed according to that policy in the Approval Center.
        
    -   If the requested field is outside the data scope of any custom approval policy, the request is processed according to the default approval flow in the Security Center.
        
-   If a request hits multiple custom approval policies, DataWorks uses the policy priority that is set in the Approval Center to determine which policy to apply.
    
    When you set a custom approval policy, you can define its data scope based on the project or data classification. You can also specify details such as approvers and notification methods. Additionally, you can set a priority for the policy to resolve cases where a request matches multiple policies. For more information, see [Compute Engine Approval Policies](/help/en/dataworks/user-guide/request-processing-policies-for-compute-engine-data#task-2095441).
    

## DataService Studio permission request and approval flow

After you create an approval flow for DataService Studio, the flow is triggered when a user performs a controlled operation, such as publishing an API, function, or service orchestration, in a project that is covered by the policy.

The following figure shows the flow after an applicant submits a permission request in **Security Center**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1046288671/CAEQUxiBgICby83R3hkiIGQ4MTMxZTgxY2JkYTQ2MTFiNzQ3ZmI4NzFmYjk2YTU55457972_20250714103200.940.svg)

-   When a user submits an API, function, or service orchestration, the system checks whether a custom approval flow is configured for the workspace to determine if a custom approval process is required.
    
    -   If the request hits a custom approval flow, it is processed according to the flow defined in the Approval Center.
        
    -   If the request does not hit a custom approval flow, the operation is approved automatically without requiring a manual approval process.
        
-   When a custom approval flow is triggered, DataWorks routes the request according to the approval policy set in the Approval Center.
    
    When you configure a custom approval policy, you can define the scope by project and specify details such as approvers and notification methods. For more information, see [DataService Studio approval policy](/help/en/dataworks/user-guide/request-processing-policies-for-dataservice-studio#task-2096317).
