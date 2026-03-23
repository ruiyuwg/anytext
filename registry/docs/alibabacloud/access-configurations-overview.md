An access configuration is a configuration template that is used by CloudSSO users to access the accounts in a resource directory. The template contains permission configurations. You can use a template to assign access permissions on the accounts in your resource directory to CloudSSO users.

## Elements

An access configuration consists of the following elements:

-   Session duration: the duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
    
-   Relay state: the initial web page displayed after a CloudSSO user uses the access configuration to access an account in your resource directory.
    
-   Permissions: the collection of access permissions that a CloudSSO user has on an account in your resource directory.
    
    -   System policy: Resource Access Management (RAM) system policies are reused.
        
    -   Inline policy: Inline policies are created based on the RAM policy syntax and structure and take effect only in the current access configuration.
        

## Provision an access configuration for the first time

To assign access permissions on an account in your resource directory to a user or group, you must specify an access configuration. If the access configuration is not provisioned for other users or groups, CloudSSO provisions the access configuration. The provisioning involves the following configurations:

-   A RAM role named `AliyunReservedSSO-<Access configuration name>` is created. For example, if the TestAccessConfiguration access configuration is provisioned, a RAM role named `AliyunReservedSSO-TestAccessConfiguration` is created.
    
-   If an inline policy is configured in the access configuration, a RAM custom policy named `AliyunReservedSSO-<Access configuration name>-InlinePolicy` is created. For example, if an inline policy is configured in the TestAccessConfiguration access configuration, a RAM custom policy named `AliyunReservedSSO-TestAccessConfiguration-InlinePolicy` is created.
    
-   All system policies and the RAM custom policies that are created for inline policies in an access configuration are attached to a RAM role.
    
-   If no access permissions on an account in your resource directory are assigned to a CloudSSO user, an identity provider (IdP) named `AliyunReservedSSO-<ID of the CloudSSO directory>` is created. This way, the CloudSSO user can access the account by using role-based single sign-on (SSO). For example, if the ID of the CloudSSO directory to which an access configuration belongs is `d-x0h0w370****`, an IdP named `AliyunReservedSSO-d-x0h0w370****` is created.
    

In the RAM console, you can view the preceding RAM role, custom policy, and IdP of the account in your resource directory. However, you cannot modify or delete them.

For more information about how to assign access permissions on accounts in a resource directory, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).

## Re-provision an access configuration

If an access configuration has been provisioned for an account in your resource directory but one of the following modifications is made to the access configuration, you must manually re-provision the access configuration for the modification to take effect. The reason is that the modification cannot be automatically applied to the account.

-   A system policy is added or removed.
-   An inline policy is created, modified, or deleted.

**Note** If the session duration and relay state are modified, you do not need to re-provision the access configuration.

For more information about how to re-provision an access configuration, see [Re-provision an access configuration](/help/en/cloudsso/user-guide/re-provision-an-access-configuration#task-2091223).

## De-provision an access configuration

You can de-provision an access configuration from an account in your resource directory. Examples:

-   When you remove the access permissions from the last CloudSSO identity that uses the access configuration, you can also de-provision the access configuration.
    
-   When you browse all access configurations that have been provisioned for the account in your resource directory, you can de-provision the access configurations that are not required.
    
-   When you browse all accounts for which the access configuration is provisioned in your resource directory, you can de-provision the access configurations that are not required.
    

For more information about how to de-provision an access configuration, see [De-provision an access configuration](/help/en/cloudsso/user-guide/de-provision-an-access-configuration#task-2091223).

## **References**

-   [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration)
    
-   [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory)
