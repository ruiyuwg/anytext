If your Alibaba Cloud account is not assigned the service-linked role AliyunServiceRoleForGaNlb and you specify a Network Load Balancer (NLB) instance as an endpoint of Global Accelerator (GA), the system automatically creates the service-linked role AliyunServiceRoleForGaNlb.

## Introduction to the service-linked role AliyunServiceRoleForGaNlb

AliyunServiceRoleForGaNlb is a service-linked role for Global Accelerator. If you want to specify an NLB instance as an endpoint of Global Accelerator, you must assign the service-linked role to Global Accelerator.

**Note**

A service-linked role is a Resource Access Management (RAM) role that is associated with an Alibaba Cloud service. In some cases, if you want to use a feature of a cloud service, you must be granted permissions on other cloud services. Service-linked roles simplify the authorization process and prevent accidental operations. For more information about service-linked roles, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Permissions that are required to create the service-linked role AliyunServiceRoleForGaNlb

By default, an Alibaba Cloud account is authorized to create the service-linked role AliyunServiceRoleForGaNlb. If a RAM user wants to create the service-linked role, you must grant the following permissions to the RAM user:

```
{
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "nlb.ga.aliyuncs.com"
        }
      }
}
```

You can grant the RAM user the required permissions by using one of the following methods:

-   Attach the AliyunGlobalAccelerationFullAccess administrator policy to the RAM user. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    
    **Note**
    
    In most cases, the permissions to create the Global Accelerator service-linked role AliyunServiceRoleForGaNlb are included in the AliyunGlobalAccelerationFullAccess administrator policy. If the RAM user has administrator permissions on Global Accelerator, the RAM user can create the service-linked role AliyunServiceRoleForGaNlb for Global Accelerator.
    
-   Attach a custom policy to the RAM user. The following code block shows the content of the custom policy:
    
    ```
    {
          "Action": "ram:CreateServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "nlb.ga.aliyuncs.com"
            }
          }
    }
    ```
    
    For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    

## Create the service-linked role AliyunServiceRoleForGaNlb

If you specify an NLB instance as an endpoint of a Global Accelerator instance, the system determines whether the Global Accelerator is assigned the service-linked role AliyunServiceRoleForGaNlb:

-   If your Alibaba Cloud account is not assigned the service-linked role AliyunServiceRoleForGaNlb, the system automatically creates the service-linked role and adds a policy named AliyunServiceRoleForGaNlb to the service-linked role to grant Global Accelerator the permissions to access NLB. The following code block shows the content of the policy:
    
    ```
    {
      "Version": "1"
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
                    "nlb:GetLoadBalancerAttribute",
                    "nlb:UpdateLoadBalancerProtection"
                ],
          "Resource": "*"
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "nlb.ga.aliyuncs.com"
            }
          }
        }
      ],
    }
    ```
    
-   If your Alibaba Cloud account is assigned the service-linked role AliyunServiceRoleForGaNlb, the system does not re-create the service-linked role.
    

## Delete the service-linked role AliyunServiceRoleForGaNlb

The system does not automatically delete the service-linked role AliyunServiceRoleForGaNlb. To delete the service-linked role, you must first delete the NLB instance that serves as an endpoint of your GA instance. For more information, see the following topics:

1.  [Delete an endpoint group](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#section-s9l-1hz-hqc)
    
2.  [Delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)
