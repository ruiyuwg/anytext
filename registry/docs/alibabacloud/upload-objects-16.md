The OSS console is a web-based interface for managing your Object Storage Service (OSS) resources without writing code. This guide walks you through the core workflow: create a bucket, upload and download a file, share it with others, and clean up when you're done.

## Prerequisites

Before you begin, ensure that you have:

-   An [Alibaba Cloud account](https://account.alibabacloud.com/register/intl_register.htm?spm=a2c45.11132027.495866.3.121a5455M9EN53). If you don't have one, create a free account first[Alibaba Cloud account](https://account.alibabacloud.com/register/intl_register.htm?spm=a2c45.11132027.495866.3.121a5455M9EN53)
    
-   [OSS activated](https://oss.console.alibabacloud.com/overview). Activation is free and is required before you can use any OSS resource plan
    

## Step 1: Create a bucket

A bucket is a container for storing objects in OSS. All files you upload are stored as objects inside a bucket.

1.  In the left-side navigation pane, go to the **[Buckets](https://oss.console.alibabacloud.com/bucket)** page and click **Create Bucket**.
    
2.  Configure the following parameters and keep the default values for the rest:
    
    -   **Bucket Name**: Enter a globally unique name. Combine a project name, region, and a random string to help ensure uniqueness—for example, `my-project-singapore-a1b2c3d4`.
        
    -   **Region**: Select the region closest to you to minimize access latency, such as `Singapore`.
        
    
    **Important**
    
    Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting March 20, 2025, new OSS users must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#1e43238a95bb6) (CNAME) to perform data API operations on buckets in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access data over HTTPS, [bind a valid SSL certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain—this is mandatory for OSS console access.
    
3.  Click **Create**.
    

> [Block Public Access](/help/en/oss/user-guide/block-public-access) is enabled by default when you create a bucket using the OSS console. With Block Public Access enabled, you cannot set public ACLs (Access Control Lists)—including public read and public read/write—or bucket policies that allow public access. Disable this feature after bucket creation if your use case requires public access.

You've created your first bucket. Next, upload a file to it.

## Step 2: Upload a file

Once a bucket exists, you can upload files of any type—images, videos, documents, and more. Each file is stored as an object.

> The console supports single-file uploads up to 5 GB. For larger files, use [ossutil](/help/en/oss/command-line-tools-ossutil-quickstart).

1.  If you don't have a test file handy, download [exampleobject.jpg](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250427/wrehhn/exampleobject.jpg).
    
2.  On the **[Buckets](https://oss.console.alibabacloud.com/bucket)** page, click the name of the bucket you just created.
    
3.  In the left-side navigation pane, choose **Object Management** > **Objects**, then click **Upload Object**.
    
4.  Drag `exampleobject.jpg` from your local directory to the **File to Upload** area, or click **Select Files** to browse for it.
    
5.  Keep the default settings and click **Upload Object**.
    

Track progress on the **Upload Tasks** tab. After the upload completes, the file name, size, and storage class appear in the destination path.

You've uploaded your first object. Next, download it to verify the upload.

## Step 3: Download an object

After uploading an object, you can download it to your computer to verify the content or share it locally.

1.  On the **Objects** page, find `exampleobject.jpg`.
    
2.  Select the checkbox next to the file, then click **Download** below the list.
    
3.  Click **OK**.
    

You've downloaded the object successfully. Next, generate a shareable link so others can access it.

## Step 4: Share an object

Generate a temporary URL to share an object stored in a private bucket. The URL is time-limited.

1.  On the **Objects** page, click the object name `exampleobject.jpg`.
    
2.  In the **View Details** panel on the right, set **Validity Period (Seconds)** to your desired value (default: 600 seconds), then click **Copy Object URL**. Keep the following in mind before sharing:
    
    -   **Billing:** The URL uses a public endpoint. Downloads via this URL incur outbound internet traffic fees.
        
    -   **Security:** Verify the object contains no sensitive data before sharing.
        
    -   **Validity:** The URL expires after the specified period. Generate a new URL to share again.
        
3.  Paste the URL into a browser to access the image.
    
    > By default, accessing an image URL triggers a download rather than an in-browser preview. To enable in-browser previews, [map a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#1e43238a95bb6) and use it when generating the URL.
    

You've shared an object using a temporary URL. Next, clean up the resources to avoid ongoing charges.

## Step 5: Clean up resources

To stop incurring charges, delete the objects in your bucket and then delete the bucket itself. Storage fees accrue for any objects left in place, so complete this step when you no longer need the tutorial resources.

**Deletion cannot be undone.**

### Delete an object

1.  In the left-side navigation pane, choose **Object Management** > **Objects**.
    
2.  Select `exampleobject.jpg`.
    
3.  Click **Permanently Delete** below the list, then click **OK** in the dialog box.
    

### Delete a bucket

> After deleting a bucket, wait usually 4 to 8 hours before creating another bucket with the same name.

1.  On the **Buckets** page, click the name of the bucket.
    
2.  In the left-side navigation pane, click **Delete Bucket** and follow the on-screen prompts to complete the deletion.
    

## Billing

This tutorial may generate the following charges:

**Item**

**When charged**

**Storage fees**

For the duration that objects remain in the bucket

**Outbound internet traffic fees**

When others download the object via the shared URL

**Request fees**

For each API operation during upload and download

For pricing details, see the [OSS pricing](https://www.alibabacloud.com/en/product/oss/pricing?_p_lc=1) page.

## What's next

-   **Understand billing**: Learn how charges are calculated in the [Billing overview](/help/en/oss/billing-overview), then apply [resource plans](/help/en/oss/resource-plan/) to reduce costs.
    
-   **Automate operations**: Use the [OSS SDK quickstart](/help/en/oss/user-guide/oss-sdk-quick-start) to manage OSS programmatically from your application.
    
-   **Manage objects**: Explore the [Feature guide](/help/en/oss/user-guide/object-overview#a47cf1e035u7e) to learn about more features for managing your objects.
    
-   **Control access**: Configure [permissions and access control](/help/en/oss/user-guide/permissions-and-access-control-overview) to restrict who can access your objects.
    

## FAQ

-   [FAQ about uploading files](/help/en/oss/usage-query/)
    
-   [FAQ about sharing files](/help/en/oss/data-upload-and-download/)
    
-   [Resource plans](/help/en/oss/resource-plan/)
