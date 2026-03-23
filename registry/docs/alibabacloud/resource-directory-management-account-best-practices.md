You can use an Alibaba Cloud account that has passed enterprise real-name verification to enable a resource directory. After you enable a resource directory by using such an account, the account becomes the management account of the resource directory. The management account has all administrative permissions on the resource directory and the folders and members in the resource directory. Each resource directory has only one management account. This topic describes the best practices for the management account of a resource directory. You can use the best practices as a guide to improve the security of a management account.

## **Use a management account to perform only required operations**

The management account of a resource directory has all administrative permissions on the members in the resource directory. We recommend that you use the management account to perform only required operations. In addition, you must make sure that personnel who do not need to manage the resource directory do not have access permissions on the account.

You can create a RAM user for the management account and attach the AliyunResourceDirectoryFullAccess policy to the RAM user. Then, you can manage the resource directory as the RAM user.

**Note**

The AliyunResourceDirectoryFullAccess policy defines the highest permissions on resource directories. If you want to perform only specific operations as the RAM user, we recommend that you grant the RAM user only the permissions that are required to perform the operations. For information about the permissions, see [Resource Directory](/help/en/resource-management/resource-directory/developer-reference/ram-authorization#section-5yg-uil-h9z).

## **Deploy no resources within a management account**

We recommend that you do not deploy resources within a management account. [Access control policies](/help/en/resource-management/resource-directory/user-guide/control-policy-overview) do not take effect for management accounts. In this case, access control policies cannot limit the operations performed on resources within management accounts. If you deploy resources within a management account, you must grant access permissions on the management account to business personnel. This increases the risks of the management account.

## **Use a delegated administrator account to distribute the responsibilities of a management account**

We recommend that you separate resource directory management tasks from business management tasks. Use the management account of a resource directory to manage the resource directory, and use a [delegated administrator account](/help/en/resource-management/resource-directory/user-guide/manage-a-delegated-administrator-account) of a [trusted service](/help/en/resource-management/resource-directory/user-guide/overview-1) to manage business in the trusted service.

For example, a security administrator uses a delegated administrator account of Cloud Firewall to perform security management operations in Cloud Firewall. The security administrator does not need to have access permissions on the management account of your resource directory.
