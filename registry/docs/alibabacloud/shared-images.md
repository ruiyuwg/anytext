You can share a custom image with Alibaba Cloud accounts or within your enterprise organization in the same region. This lets you quickly deploy consistent application environments without repeatedly building the same image.

## Usage notes

-   Image sharing is limited to accounts within the same region.
    
-   Only custom images created by your account are shareable. Re-sharing an image received from another Alibaba Cloud account is not permitted.
    
-   Custom images from the Alibaba Cloud Marketplace cannot be shared between accounts on the China site (aliyun.com) and the international site (alibabacloud.com).
    

## Sharing methods

**Sharing method**

**Use case**

**Benefits**

**Limitations**

Share with specified accounts

Share an image with a small, fixed number of partners or individual accounts.

Simple to use.

Requires you to manually manage the recipient account IDs.

Share within an enterprise organization

Use [resource directory](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#concept-2436329) to dynamically share an image with the entire organization or with member accounts in specific resource folders.

Permissions are automatically synchronized as members join or leave the organization, simplifying centralized management.

This method depends on the resource directory service to [share resources](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview#title-c0b-k4s-aup). Your account must meet one of the following conditions:

-   The account has not enabled resource directory but is a member of a resource directory.
    
-   The account has completed [enterprise verification](/help/en/account/account-verification-faqs), has [enabled resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory) and has [enabled resource sharing for the organization](/help/en/resource-management/resource-sharing/user-guide/enable-resource-sharing).
    

## Before you begin

Before sharing an image, complete the required security checks to protect your data and ensure permission compliance.

-   **Obtain recipient's information:**
    
    -   To share with a specified account: Obtain the Alibaba Cloud account ID of the recipient's Alibaba Cloud account.
        
    -   To share within an enterprise organization: Make sure your account has enabled resource directory and the resource sharing feature.
        
-   **Clean sensitive data from the image:** To prevent data leaks, clean sensitive data from the image before sharing it. Remove historical records, SSH keys, network configurations, temporary files, and any unnecessary access credentials before you create the image.
    
-   **(Required for encrypted images) Prepare the required permissions:** To share an encrypted image, you must create and authorize the `AliyunECSShareEncryptImageDefaultRole` role. For more information, see [Share encrypted resources across accounts](/help/en/ecs/user-guide/encryption-related-permissions#77c2183a04yob).
    

## **Procedure**

### Share an image with a specified Alibaba Cloud account

## Console

1.  Go to the [ECS console - Images](https://ecs.console.alibabacloud.com/image) page. Select the resource group and region of your target image.
    
2.  On the **Custom Images** tab, find the custom image you want to share, and in the **Actions** column, click **Share Image**.
    
3.  In the Share Image dialog box, complete the following configurations:
    
    1.  Enter the recipient's Alibaba Cloud account ID in the **Sharee Account ID** field.
        
    2.  Read the **Security Confirmation**, select the checkbox, and then click **Confirm**.
        

## API

You can call the [ModifyImageSharePermission - Manage image sharing permissions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyimagesharepermission) operation to share a custom image from your Alibaba Cloud account with another Alibaba Cloud account.

### Share an image within an enterprise organization

1.  Go to the [ECS console - Images](https://ecs.console.alibabacloud.com/image) page. Select the resource group and region of your target image.
    
2.  On the **Custom Images** tab, find the custom image you want to share, and in the **Actions** column, click **Share Image**.
    
3.  For **Sharee Type**, click **Share Within Organization** to open the [Resource Sharing console](https://resourcemanager.console.alibabacloud.com/resource-share). Follow the instructions in [Create a resource share](/help/en/resource-management/resource-sharing/user-guide/create-a-resource-share-1#task-2436332) to complete the sharing operation. For the resource to be shared, select **ECS Image**.
    
    > Only the management account or a member account that has enabled resource directory can share resources within an organization. If you do not see the **Share Within Organization** option, [enable resource directory](/help/en/doc-detail/183645.html#task-2152699) first.
    

**Important**

To prevent data inconsistencies in resource directory, do not share an image by specifying an account ID if you have already shared it with the same account through resource directory.

## Billing

The image sharing feature is free. However, if the shared image originates from a paid image, the recipient pays the image fee when they create an Elastic Compute Server (ECS) instance from it.

> For example: Image A is a paid image. Alibaba Cloud account A shares this image with Alibaba Cloud account B. When account B uses the shared image to create an instance, account B is charged for the image in addition to the instance resource fees.

## Limitations

-   A quota limits the number of accounts you can share an image with. Image sharing does not consume the recipient's custom image quota. To view or [request a quota increase](/help/en/ecs/user-guide/quota-management), go to the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas?spm=a2c4g.11186623.0.0.376656addmG73f) and find the **Quota of users that can be shared per custom image**.
    
-   ECS does not support sharing a custom image for use with a Simple Application Server. However, you can [share a custom image created on a Simple Application Server to ECS](/help/en/simple-application-server/user-guide/share-a-custom-image).
    

## FAQ

#### **How can I view the** recipient **of a shared image?**

## Console

After an image is successfully shared, on the **Custom Images** tab, hover over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2656704961/p692514.png) icon for the shared image to view the Alibaba Cloud account IDs of the recipients.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1303195071/p755069.png)

## API

You can call the [DescribeImageSharePermission](/help/en/ecs/api-describeimagesharepermission#doc-api-Ecs-DescribeImageSharePermission) operation to query all users with whom a custom image is shared.

#### **How can I share an image across regions?**

You must first [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb) to the target region and then share it from within that region.

#### **How can I delete a shared image?**

You cannot delete a shared image. To delete it, you must first [unshare it](/help/en/ecs/user-guide/unshare-custom-images).

#### **How can I find my Alibaba Cloud account ID?**

Hover over your user avatar in the upper-right corner of the console. If the account is identified as a **Main Account** in the user information box, the displayed account ID is your Alibaba Cloud account ID.
