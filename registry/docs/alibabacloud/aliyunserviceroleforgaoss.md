When you specify an Object Storage Service (OSS) instance as an origin server, your GA instance must assume the service-linked role AliyunServiceRoleForGaOss. If your GA instance does not assume the service-linked role, the system automatically creates the role for your GA instance.

## AliyunServiceRoleForGaOss

AliyunServiceRoleForGaOss is a service-linked role of GA. To specify an OSS instance as an origin server, your GA instance must assume the service-linked role AliyunServiceRoleForGaVpcEndpoint.

**Note** A service-linked role is a Resource Access Management (RAM) role that is associated with an Alibaba Cloud service. In some cases, to use a feature of a cloud service, you must first acquire the permissions to access other cloud services. Service-linked roles simplify the authorization process and avoid risks caused by user errors. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Permissions required to create AliyunServiceRoleForGaOss

By default, an Alibaba Cloud account is authorized to create the service-linked role AliyunServiceRoleForGaOss. If a RAM user wants to create the service-linked role, you must first use the Alibaba Cloud account to grant the following permissions to the RAM user:

```
{
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "oss.ga.aliyuncs.com"
        }
      }
}
```

You can grant the RAM user the required permissions by using one of the following methods:

-   Attach the administrator permission policy AliyunGlobalAccelerationFullAccess to the RAM user. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    
    **Note** The permissions required to create the service-linked role AliyunServiceRoleForGaOss are included in the administrator permission policy AliyunGlobalAccelerationFullAccess. Therefore, after you attach the administrator permission policy to a RAM user, the RAM user can create the service-linked role AliyunServiceRoleForGaOss.
    
-   Attach a custom permission policy to a RAM user. The following code block shows the content of the custom permission policy:
    
    ```
    {
          "Action": "ram:CreateServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "oss.ga.aliyuncs.com"
            }
          }
    }
    ```
    
    For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    

## Create the service-linked role AliyunServiceRoleForGaOss

When you specify an ALB instance as an origin server, the system checks whether your GA instance assumes the service-linked role AliyunServiceRoleForGaOss.

-   If your GA instance does not assume the service-linked role AliyunServiceRoleForGaOss, the system automatically creates the service-linked role and attaches the permission policy AliyunServiceRoleForGaOss to the service-linked role. This allows GA to access OSS. The following code block shows the content of the permission policy:
    
    ```
    {
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "oss:getBucketInfo",
          "Resource": "*"
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "oss.ga.aliyuncs.com"
            }
          }
        }
      ],
      "Version": "1"
    }
    ```
    
-   If your GA instance assumes the service-linked role AliyunServiceRoleForGaOss, the system does not create the service-linked role again.

## Delete the service-linked role AliyunServiceRoleForGaOss

The system does not automatically delete the service-linked role AliyunServiceRoleForGaOss. To delete the service-linked role, you must first disassociate the OSS instance from your GA instance. Then, you can delete the service-linked role. For more information, see:

1.  [Delete an endpoint](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-81r-zee-no1)
2.  [Delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)
