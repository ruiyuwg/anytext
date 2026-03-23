After you remove a member to which you granted permissions in CloudSSO from your resource directory, the CloudSSO-related resources and access configurations of the member are automatically deleted, and CloudSSO users can no longer access the resources of the member. This topic describes the impacts of removing a member from your resource directory.

-   The following CloudSSO-related resources of the member are automatically deleted:
    -   The RAM roles whose names start with AliyunReservedSSO
    -   The identity providers (IdPs) whose names start with AliyunReservedSSO
    -   The custom policies whose names start with AliyunReservedSSO
    -   The service-linked role AliyunServiceRoleForCloudSSO
-   The permissions on the member and the access configurations that are provisioned for the member are automatically deleted from CloudSSO.
-   CloudSSO users can no longer access the resources of the member.
