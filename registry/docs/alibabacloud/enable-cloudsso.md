You must enable CloudSSO before you can use it. After you enable CloudSSO, you can use CloudSSO free of charge.

## Prerequisites

-   A resource directory is enabled, and the multi-account organizational structure is built.
    
    For more information, see [Resource Directory overview](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#concept-2436329).
    
-   Only the management account of a resource directory or a RAM user that has administrative rights within the management account can be used to enable CloudSSO.
    
    -   Management account
        
        A management account is the account that is used to enable a resource directory and is the super administrator of the resource directory. The management account has full permissions on the resource directory and the members in the resource directory. You must use an Alibaba Cloud account that has passed [enterprise identity verification](/help/en/account/account-verification-faqs) to enable a resource directory. Each resource directory has only one management account.
        
    -   RAM users
        
        You must attach the AliyunCloudSSOFullAccess system policy to the RAM users of the management account. For more information, see [Grant permissions to RAM users](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        

## Procedure

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  Read Terms of Service and select **Read and Agree to Terms of Service**.
    
3.  Click **Activate Now**.
    
    After you enable CloudSSO, CloudSSO automatically establishes a trusted relationship with your resource directory. Then, you can use CloudSSO to access the folders and members in your resource directory.
    

## What to do next

After you enable CloudSSO, you must create the CloudSSO directory. For more information, see [Create the CloudSSO directory](/help/en/cloudsso/user-guide/create-the-cloudsso-directory#task-2089674).
