An administrator may grant excessive permissions to Resource Access Management (RAM) identities, including RAM users and RAM roles. The access audit feature allows you to check the permissions that are granted to a RAM identity and the time when the permissions were last accessed by the RAM identity. You can identify unused permissions based on the preceding information and securely revoke them. This way, the principle of least privilege for the RAM identity is achieved.

## **Usage notes**

Before you use the access audit feature to modify the permissions of a RAM identity, take note of the following instructions:

### **Tracking period**

Only access requests since February 1, 2024 are tracked. The data of the last access time may be delayed for up to 24 hours.

### **Access attempts**

All access requests made to Alibaba Cloud services are recorded, regardless of whether the requests are successful or not. These requests include attempts to log on to the console of an Alibaba Cloud service, access an Alibaba Cloud service by using the CLI or SDK, and call an API operation of an Alibaba Cloud service. An unexpected access request that is detected by the access audit feature does not mean that your account is compromised because the access request may have been denied. You can check your ActionTrail logs to view the details of the access request.

### **Report owner**

Only the entity that generates a access audit report can view the permission access records in the report. The permission access records are not available in the Alibaba Cloud Management Console until the report is successfully generated. To use an API, SDK, or CLI to view the permission access records, the access credential must be the same as that of the report owner. If a temporary Security Token Service (STS) token of a RAM role is used to generate a report, you must use the temporary STS token of the role to view the permission access records.

### **Supported policies**

The access audit feature analyzes only identity-based policies, which are policies that are attached to RAM users, RAM user groups, and RAM roles. The access audit feature does not analyze other types of policies, including resource-based policies such as Object Storage Service (OSS) bucket policies, control policies for resource directories, and session policies.

### **Supported audit granularities**

-   **Service level**
    
    The access audit feature analyzes the permission access records of RAM identities at the service level. You can view the permissions that are granted to a RAM identity on Alibaba Cloud services, the Alibaba Cloud services that the RAM identity accessed, and the time when each of the Alibaba Cloud services was last accessed by the RAM identity. This can help you revoke unnecessary system policies or determine whether to degrade the administrator permissions of a RAM identity to the management permissions on specific Alibaba Cloud services.
    
    For more information about the Alibaba Cloud services that are supported by the access audit feature, see [Services that support the access audit feature](/help/en/ram/cloud-services-that-support-permission-auditing).
    
-   **Operation level**
    
    Apart from the service granularity, the access audit feature also analyzes the permission access records of RAM identities at the more fine-grained API operation level. You can view the permissions that are granted to a RAM identity on specific API operations, the API operations that the RAM identity accessed, and the time when each of the API operations was last accessed by the RAM identity. This can help you perform fine-grained permission control on applications and restrict high-risk permissions.
    
    For more information about the Alibaba Cloud services that support operation-level access audit, see the table provided in the [Services that support the access audit feature](/help/en/ram/cloud-services-that-support-permission-auditing) topic. In the table, **Operation** is displayed for the Alibaba Cloud services that support operation-level access audit in the **Audit granularity** column.
    
    **Important**
    
    -   The access audit feature supports only API operations that are integrated on the control plane of ActionTrail, but not API operations that are stored on the data plane of an Alibaba Cloud service, such as the GetObject operation of OSS.
        
    -   In addition, the access audit feature does not support operations that are granted permissions but are not associated with APIs, such as `ram:PassRole`.
        
    

### **Unsupported scenarios**

In some scenarios, an Alibaba Cloud service checks the permissions of an API caller on other Alibaba Cloud services on behalf of the caller. For example, when a caller uses [Resource Center](/help/en/resource-management/resource-center/product-overview/resource-center-overview) to search for resources across Alibaba Cloud services and regions, Resource Center checks whether the caller has the permissions to query the resources of the required Alibaba Cloud services and returns only the resources on which the caller has permissions. The permission check operation is not directly initiated by the caller on the required Alibaba Cloud services and thus is not included in the access audit information.

The following table lists the API operations that involve the preceding permission check operation.

**Alibaba Cloud service**

**Service code**

**API**

Resource Center

resourcecenter

SearchResources

GetResourceCounts

GetResourceConfiguration

ListResourceTypes

ExecuteSQLQuery

Resource Management

resourcemanager

ListResources

The Tag service

tag

ListTagResources

ListTagKeys

ListTagValues

## **View the access audit records of a RAM user**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, click the username of the RAM user that you want to manage.
    
4.  On the user details page, click the **Policy Access Beta** tab.
    
    The system starts to generate an access audit report for the RAM user. Wait until the report is successfully generated.
    
5.  View the access audit records.
    
    You can view the Alibaba Cloud services that the RAM user can access, the policies that are attached to the RAM user, and the time when each of the Alibaba Cloud services was last accessed by the RAM user.
    
    For Alibaba Cloud services that support operation-level access audit, you can click **View Actions** in the **Actions** column to view the list of API operations that are allowed and the time when each of the operations was last accessed by the RAM user.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8039277171/p781329.png)
    

## **View the access audit records of a RAM role**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click the name of the RAM role that you want to manage.
    
4.  On the role details page, click the **Policy Access Beta** tab.
    
    The system starts to generate an access audit report for the RAM role. Wait until the report is successfully generated.
    
    **Note**
    
    Service-linked roles do not support access audit. Therefore, the **Policy Access Beta** tab is not displayed for service-linked roles.
    
5.  View the access audit records.
    
    You can view the Alibaba Cloud services that the RAM user can access, the policies that are attached to the RAM role, and the time when each of the Alibaba Cloud services was last accessed by the RAM user.
    
    For Alibaba Cloud services that support operation-level access audit, you can click **View Actions** in the **Actions** column to view the list of API operations that are allowed and the time when each of the operations was last accessed by the RAM user.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8039277171/p781331.png)
    

## **FAQ about access audit**

### **What do I do if an empty access audit report is returned?**

An empty access audit report may be returned due to different reasons. You can perform the following steps to troubleshoot the issue:

1.  Check whether identity-based policies are attached to the RAM identity. For a RAM user, make sure that at least one policy is attached to the RAM user or the RAM user inherits a policy from a RAM user group. For a RAM role, make sure that at least one policy is attached to the RAM role.
    
2.  Check whether the policies that are attached to the RAM identity are actually authorized. The system analyzes all policies that are attached to the RAM identity and identifies the Alibaba Cloud services and API operations on which the RAM identity actually has access permissions.
    
3.  Check whether the Alibaba Cloud services or API operations on which the RAM identity has access permissions are supported by the access audit feature. For more information, see [Services that support the access audit feature](/help/en/ram/cloud-services-that-support-permission-auditing).
    

### **What do I do if the** InvalidParameter.Policy.Statement **error is reported when I try to view the access audit report?**

The error is reported because the format of a policy is invalid. The policy name and the error cause are also returned. Check the details of the policy, fix the malformed content, and then generate the access audit report again.

### **What do I do if the InvalidParameter.Policy.NotAction error is reported when I try to view the access audit report?**

The error is reported because the format of the NotAction element is invalid. The name of the policy that cannot be analyzed is also returned. Check the details of the policy, specify a valid value for the element, and then generate the access audit report again.

### **What do I do if the LengthExceedLimit.Policy error is reported when I try to view the access audit report?**

The error is reported because the document of the attached policy is too large to be analyzed. The name of the policy that cannot be analyzed is also returned. To resolve this issue, split the policy by statement and generate the access audit report again.

## **References**

-   For more information about the Alibaba Cloud services that are supported by the access audit feature and audit granularities, see [Services that support the access audit feature](/help/en/ram/cloud-services-that-support-permission-auditing).
    
-   You can use the over-privileged analyzers to continuously detect over-privileged RAM identities in a resource directory or in the current Alibaba Cloud account. For more information, see [Detect over-privileged identities](/help/en/ram/identify-over-authorization).
