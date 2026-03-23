When you specify an Application Load Balancer (ALB) instance as an origin server, your GA instance must assume the service-linked role AliyunServiceRoleForGaAlb. If your GA instance does not assume the service-linked role, the system automatically creates the role for your GA instance.

## AliyunServiceRoleForGaAlb

AliyunServiceRoleForGaAlb is a service-linked role of GA. To specify an ALB instance as an origin server, your GA instance must assume the service-linked role AliyunServiceRoleForGaAlb.

**Note**

A service-linked role is a Resource Access Management (RAM) role that is associated with an Alibaba Cloud service. In some cases, to use a feature of a cloud service, you must first acquire the permissions to access other cloud services. Service-linked roles simplify the authorization process and prevent accidental operations. For more information about service-linked roles, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Permissions required to create AliyunServiceRoleForGaAlb

By default, an Alibaba Cloud account is authorized to create the service-linked role AliyunServiceRoleForGaAlb. If a RAM user wants to create the service-linked role, you must first use the Alibaba Cloud account to grant the following permissions to the RAM user:

```
{
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "alb.ga.aliyuncs.com"
        }
      }
}
```

You can grant the RAM user the required permissions by using one of the following methods:

-   Attach the administrator permission policy AliyunGlobalAccelerationFullAccess to the RAM user. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    
    **Note** The permissions required to create the service-linked role AliyunServiceRoleForGaAlb are included in the administrator permission policy AliyunGlobalAccelerationFullAccess. Therefore, after you attach the administrator permission policy to a RAM user, the RAM user can create the service-linked role AliyunServiceRoleForGaAlb.
    
-   Attach a custom permission policy to a RAM user. The following code block shows the content of the custom permission policy:
    
    ```
    {
          "Action": "ram:CreateServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "alb.ga.aliyuncs.com"
            }
          }
    }
    ```
    
    For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    

## Create the service-linked role AliyunServiceRoleForGaAlb

When you specify an ALB instance as an origin server, the system checks whether your GA instance assumes the service-linked role AliyunServiceRoleForGaAlb.

-   If your GA instance does not assume the service-linked role AliyunServiceRoleForGaAlb, the system automatically creates the service-linked role and attaches the permission policy AliyunServiceRoleForGaAlb to the service-linked role. This allows GA to access ALB. The following code block shows the content of the permission policy:
    
    ```
    {
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "alb:GetLoadBalancerAttribute",
          "Resource": "*"
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "alb.ga.aliyuncs.com"
            }
          }
        }
      ],
      "Version": "1"
    }
    ```
    
-   If your GA instance assumes the service-linked role AliyunServiceRoleForGaAlb, the system does not create the service-linked role again.

## Delete the service-linked role AliyunServiceRoleForGaAlb

The system does not automatically delete the service-linked role AliyunServiceRoleForGaAlb. To delete the service-linked role, you must first disassociate the ALB instance from your GA instance. Then, you can delete the service-linked role. For more information, see:

1.  [Delete an endpoint](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-81r-zee-no1)
2.  [Delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)
