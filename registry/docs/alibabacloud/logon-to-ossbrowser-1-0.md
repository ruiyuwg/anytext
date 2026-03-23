This topic describes the logon options for ossbrowser 1.0 and the related configuration items.

## **Configure permissions for logon accounts**

Before you log on, make sure that the account you use has the required permissions to perform operations in ossbrowser 1.0.

-   **Alibaba Cloud account**: An Alibaba Cloud account has all permissions on resources that belong to the account. No additional permissions are required.
    
-   **RAM user**: To log on and view all buckets and files, make sure the RAM user has at least the `oss:ListBuckets`, `oss:ListObjects`, and `oss:GetBucketInfo` permissions on all buckets.
    
-   **STS temporary access credentials**: To log on and view the file list in a specific bucket, the credentials must have at least the `oss:ListObjects` permission on the specified bucket.
    
-   **Authorization code**: The permissions of an authorization code are configured by the Alibaba Cloud account or RAM account administrator after they log on to ossbrowser 1.0 using the [Generate an authorization code](#d997d273d35am) operation.
    

After you log on to ossbrowser 1.0 using a RAM account or STS temporary access credentials, you must configure the corresponding permission policies to perform related operations. You can configure permissions based on the following table according to the required operations. For more information about how to customize permission policies and grant permissions to RAM users, see [Create a custom permission policy](/help/en/ram/create-a-custom-policy#title-3km-fsu-3en) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

**Permissions required for operations in each feature module of ossbrowser 1.0**

**Feature module**

**Action**

**Description**

**Recommended permission configuration**

Log on to ossbrowser 1.0

oss:ListBuckets

Lists all buckets that you own.

The `oss:ListBuckets` permission is not required if you want to access only specific buckets. However, you cannot view the bucket list without this permission.

oss:ListObjects

Lists all objects in a bucket.

To view the file list, you must have the `oss:ListObjects` permission.

Manage buckets

oss:ListBuckets

Lists all buckets that you own.

To view the bucket list, you must have the `oss:ListBuckets` permission.

oss:PutBucket

Creates a bucket.

To create a bucket, you must have the `oss:PutBucket` permission.

oss:GetBucketInfo

Queries information about a bucket.

To obtain basic information about a bucket, you must have the `oss:GetBucketInfo` permission.

oss:DeleteBucket

Deletes a bucket.

To delete a bucket, you must have the `oss:DeleteBucket` permission. Grant this permission with caution.

File list

oss:ListObjects

Lists all objects in a bucket.

To list files, you must have the `oss:ListObjects` permission.

Upload and download

oss:ListObjects

Lists all objects in a bucket.

To download a folder, you must have the `oss:ListObjects` permission.

oss:GetObject

Queries an object.

To download files, you must have the `oss:GetObject` permission.

oss:PutObject

Uploads a file.

To upload a file, you must have the `oss:PutObject` permission.

Copy, move, and rename

oss:ListBuckets

Lists all buckets that you own.

To copy and move files across buckets, you must have the `oss:ListBuckets` permission.

oss:ListObjects

Lists all objects in a bucket.

To copy, move, or rename folders, you must have the `oss:ListObjects` permission.

oss:GetObject

Queries an object.

You must have the `oss:GetObject` permission on the source bucket.

oss:PutObject

Uploads a file.

You must have the `oss:PutObject` permission on the target bucket.

oss:DeleteObject

Deletes an object.

To move or rename files, you must have the `oss:DeleteObject` permission on the source bucket. Otherwise, the source file is not deleted after the operation.

File deletion

oss:ListObjects

Lists all objects in a bucket.

To delete a folder, you must have the `oss:ListObjects` permission.

oss:DeleteObject

oss:DeleteObject

To delete a file, you must have the `oss:DeleteObject` permission. Grant this permission with caution.

## **Procedure**

1.  ossbrowser 1.0 provides three logon methods, as described in the following table.
    
    **Logon method**
    
    **Description**
    
    **AK Logon**
    
    If you are a resource owner or a team member who needs to access OSS resources for a long time and requires long-term logon validity, we recommend that you log on to ossbrowser 1.0 using the AccessKey (AK) information of an **Alibaba Cloud account** or a **RAM user**.
    
    **STS logon**
    
    If you want a team member to temporarily manage your OSS resources, you can use a RAM user to assume a RAM role to use Security Token Service (STS) to obtain temporary access credentials. Other members of the team can also use the temporary access credentials to log on to ossbrowser and perform operations on your OSS resources.
    
    **Authorization Code Logon**
    
    If you want a team member to temporarily or permanently manage some of your OSS resources, you can log on to ossbrowser 1.0 using an AK, **authorize OSS resources, and generate an authorization code**. Other members of the team can also use the authorization code to log on to ossbrowser 2.0 and perform operations on the OSS resources based on the permissions that you specified.
    
2.  Select a logon method based on your scenario.
    
    **Note**
    
    Starting from 00:00:00 (UTC+8) on March 20, 2025, new OSS users cannot use default public OSS domain names, such as \`bucketname.oss-cn-region.aliyuncs.com\`. Attempts to access these domain names are blocked and the \`PublicEndpointForbidden\` error code is returned. If you are a new user who needs to access buckets in the Chinese mainland, you must use a custom domain name (CNAME) or an internal endpoint. For more information, see the [announcement](https://www.alibabacloud.com/zh/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a?_p_lc=1).
    
    ### **Log on using an AccessKey pair**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001645471/p948518.png)
    
    When you log on using an AK, you must complete the following configuration items.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Endpoint**
    
    **Default (Public Cloud)**: Uses the endpoint of the region where the destination bucket is located to log on. If you select this logon method, you can select **HTTPS** to encrypt the transmission process.
    
    **Important**
    
    For regions that do not support this access method, you must select **Custom** as the logon method.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941218.png)
    
    **Custom**: If you select this logon method, you can use any endpoint of OSS in the public cloud. For more information about the mapping between regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **Note**
    
    If you do not use an internal endpoint, Internet traffic is generated. You are charged for the generated traffic. For more information, see [Traffic fees](/help/en/oss/traffic-fees).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941232.png)
    
    **cname**: If you want to access OSS resources using a custom domain name, you must first map a custom domain name. For more information, see [Map custom domain names](/help/en/oss/manage-a-domain-map-custom-domain-names#concept-ozw-m2r-5fb). After you map a custom domain name to the bucket, you can use the custom domain name to access the bucket.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941235.png)
    
    **AccessKeyId**, **AccessKeySecret**
    
    Enter the AccessKey pair of your account. For more information about how to obtain an AccessKey pair, see [Create an AccessKey](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task968).
    
    **Important**
    
    For data security, log on to ossbrowser using the AK of a RAM user. To authorize files, you must also grant the `AliyunOSSFullAccess`, `AliyunRAMFullAccess`, and `AliyunSTSAssumeRoleAccess` permissions to the RAM user before you log on. For more information, see [Permission management](/help/en/oss/developer-reference/permission-management-1#concept-c3k-mvr-gfb).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941241.png)
    
    **Preset OSS Path**
    
    Specify a preset OSS path if the current account has permissions on only a specific bucket or a path within a bucket, or if you log on using a CNAME. The format is oss://bucketname/path.
    
    **Important**
    
    If the bucket you are authorized to access has pay-by-requester mode enabled and you are not the bucket owner, select **Pay-by-requester Mode**. Otherwise, an `AccessDenied` error occurs when you try to access resources in the preset OSS path. After you select **Pay-by-requester Mode**, you can access the resources. You are charged for the traffic and requests generated from accessing the bucket. For more information about the pay-by-requester mode, see [Pay by requester](/help/en/oss/user-guide/enable-pay-by-requester-1#concept-yls-jm2-2fb).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941242.png)
    
    **Region**
    
    If you specify a **Preset OSS Path**, specify the **Region** where the bucket in the path is located.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941245.png)
    
    **Keep Me Logged In**
    
    If you select this option, ossbrowser remains logged on the next time you start ossbrowser.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941247.png)
    
    **Remember**
    
    If you select this option, your AccessKey pair used to log on to ossbrowser is saved. The next time you log on, you can click **AK History** and select the specified AccessKey pair to log on.
    
    **Warning**
    
    To ensure security, we recommend that you do not select this option if you use a shared computer.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941248.png)
    
    ### **Log on using STS**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1863385471/p806454.png)
    
    When you log on using STS, you must specify the following configuration items.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Endpoint**
    
    **Default (Public Cloud)**: Uses the endpoint of the region where the destination bucket is located to log on. If you select this logon method, you can select **HTTPS** to encrypt the transmission process.
    
    **Important**
    
    For regions that do not support this access method, you must select **Custom** as the logon method.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941218.png)
    
    **Custom**: If you select this logon method, you can use any endpoint of OSS in the public cloud. For more information about the mapping between regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **Note**
    
    If you do not use an internal endpoint, Internet traffic is generated. You are charged for the generated traffic. For more information, see [Traffic fees](/help/en/oss/traffic-fees).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941232.png)
    
    **cname**: If you want to access OSS resources using a custom domain name, you must first map a custom domain name. For more information, see [Map custom domain names](/help/en/oss/manage-a-domain-map-custom-domain-names#concept-ozw-m2r-5fb). After you map a custom domain name to the bucket, you can use the custom domain name to access the bucket.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941235.png)
    
    **AccessKeyId**, **AccessKeySecret**, **STS Token**
    
    The temporary access credentials obtained from STS. The temporary access credentials consist of an AccessKey pair and an STS token. For more information about how to obtain temporary access credentials, see [Use STS temporary access credentials to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#section-5xa-zdn-s0q).
    
    **Note**
    
    Enter an **STS Token** only if the **AccessKeyId** is in the `STS.XXX` format.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941252.png)
    
    **Preset OSS Path**
    
    Specify a preset OSS path if the current account has permissions on only a specific bucket or a path within a bucket, or if you log on using a CNAME. The format is oss://bucketname/path.
    
    **Important**
    
    If the bucket you are authorized to access has pay-by-requester mode enabled and you are not the bucket owner, select **Pay-by-requester Mode**. Otherwise, an `AccessDenied` error occurs when you try to access resources in the preset OSS path. After you select **Pay-by-requester Mode**, you can access the resources. You are charged for the traffic and requests generated from accessing the bucket. For more information about the pay-by-requester mode, see [Pay by requester](/help/en/oss/user-guide/enable-pay-by-requester-1#concept-yls-jm2-2fb).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941242.png)
    
    **Region**
    
    If you specify a **Preset OSS Path**, specify the **Region** where the bucket in the path is located.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941245.png)
    
    **Keep Me Logged In**
    
    If you select this option, ossbrowser remains logged on the next time you start ossbrowser.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941247.png)
    
    **Remember**
    
    If you select this option, your AccessKey pair used to log on to ossbrowser is remembered. The next time you log on, you can click **AK History** and select the specified AccessKey pair to log on.
    
    **Warning**
    
    For security reasons, do not select this option if you use a shared computer.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p941248.png)
    
    ### **Log on using an authorization code**
    
    1.  Click Authorization code logon and enter the authorization code that you obtained.
        
        **Generate an authorization code**
        
        1.  Log on to ossbrowser using an AccessKey pair.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1981568271/p855894.png)
            
        2.  Click the name of the destination bucket.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1981568271/p855891.png)
            
        3.  Select the directory that you want to temporarily authorize, and click **More** > **Generate Authorization Code**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1981568271/p855907.png)
            
            **Important**
            
            You can generate an authorization code only for a single directory.
            
            To perform operations on multiple directories at the same time, log on to ossbrowser using an AccessKey pair or STS.
            
        4.  Set the permissions, validity period, and role, and then click **OK**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1981568271/p855908.png)
            
        5.  Click **Copy** to obtain the generated authorization code.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1981568271/p855911.png)
            
        6.  Log off, click **Authorization Code Logon**, and paste the generated authorization code.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1981568271/p855897.png)
            
        
    2.  Click Log On to log on to ossbrowser using the authorization code, as shown in the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0916974471/p855913.png)
