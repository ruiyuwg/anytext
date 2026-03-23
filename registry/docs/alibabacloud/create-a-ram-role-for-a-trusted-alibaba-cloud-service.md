A service role is a type of Resource Access Management (RAM) role that an Alibaba Cloud service can assume to access resources in your account on your behalf. You can create a standard service role for custom use cases or use a service-linked role (SLR) for easier, service-managed integration.

## Types of service roles

When you grant an Alibaba Cloud service access to your resources, you can use one of two types of roles:

-   **Standard service role**: A customizable role where you define the role name, specify the trusted service, and attach your own permission policies. This provides fine-grained control for specific workflows.
    
-   [**SLR**](/help/en/ram/user-guide/service-linked-roles#concept-2448621): A predefined role that is linked to a specific Alibaba Cloud service. The role's name, trust policy, and permissions are managed by the service. SLRs simplify setup and are the recommended method when supported by a service.
    

## Create a standard service role

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click **Create Role**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0477234371/p886754.png)
    
4.  On the **Create Role** page, set **Principal Type** to **Cloud Service**, select the service that will assume the role from the **Principal Name** drop-down list, and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6493391471/p918937.png)
    
    **Note**
    
    The list of trusted services is subject to change. For the most current list, refer to the RAM console.
    
5.  (Optional) To define an advanced trust policy, such as trusting a service in another Alibaba Cloud account, click **Switch to Policy Editor** in the upper-right corner on the **Create Role** page. You can use the Visual Editor or JSON Editor.
    
    The following JSON example configures the role to be assumed by the ActionTrail service from account `177*******6878`.
    
    -   Visual Editor
        
        Specify a trusted Alibaba Cloud service for the **Principal** element.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6493391471/p918963.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6493391471/p918974.png)
        
    -   JSON Editor
        
        Specify a trusted Alibaba Cloud service in the `Service` field of the `Principal` parameter.
        
        ```
        {
          "Version": "1",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "Service": "177*******6878@actiontrail.aliyuncs.com"
              },
              "Action": "sts:AssumeRole"
            }
          ]
        }
        ```
        
    
6.  In the **Create Role** dialog box, configure the **Role Name** parameter and click **OK**.
    

After the role is created, you must attach permission policies to it before it can be used. For more information, see [Manage permissions for a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).

## Create an SLR

An SLR is the easiest way to grant permissions to a service. Many services will prompt you to create an SLR automatically the first time you use a feature that requires it. You can also create one manually.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click **Create Role**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0477234371/p886754.png)
    
4.  In the upper-right corner of the **Create Role** page, click **Create Service Linked Role**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6493391471/p918989.png)
    
5.  On the **Create Service Linked Role** page, select the trusted Alibaba Cloud service and click **Create Service Linked Role**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6493391471/p918991.png)
    
    **Note**
    
    For a list of supported services, refer to the RAM console.
    

The SLR is created with a predefined name (such as `AliyunServiceRoleForTag`) and a permission policy that is defined and managed by the trusted service.

## References

-   [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole)
    
-   [CreateServiceLinkedRole](/help/en/resource-management/api-createservicelinkedrole)
