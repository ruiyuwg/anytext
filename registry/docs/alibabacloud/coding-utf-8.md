A bucket access control list (ACL) is a bucket-level access control mechanism in Object Storage Service (OSS) that lets you set public or private access permissions for a bucket. When an object is uploaded without a specified ACL, it automatically inherits the bucket's ACL settings.

## How it works

A bucket ACL controls access to a bucket using predefined permissions. OSS supports the following three permissions:

**Permission value**

**Description**

**private (default)**

Private. Only the bucket owner or authorized users can read and write objects in the bucket. Other users cannot access the objects.

public-read

Public-read. Only the bucket owner or authorized users can write objects. Anyone, including anonymous users, can read objects.

public-read-write

Public-read-write. Anyone, including anonymous users, can read and write objects in the bucket.

**Important**

-   **public-read-write**: Anyone on the Internet can access and write to the objects in this bucket. This can cause data leaks, a surge in fees, or the malicious writing of illegal information. Do not set this permission except in special scenarios.
    
-   **public-read**: Anyone on the Internet can access the objects in this bucket. This can cause data leaks and a surge in fees. Exercise caution.
    

## Set a bucket ACL

When you create a bucket, [Block Public Access](/help/en/oss/user-guide/block-public-access) is enabled by default. Therefore, the bucket ACL can only be set to private. To set the ACL to public-read or public-read-write, you must first disable Block Public Access.

## Console

1.  Go to the [Buckets](https://oss.console.alibabacloud.com/bucket) page and click the name of the target bucket.
    
2.  In the navigation pane on the left, choose **Permission Control** > **ACL (Access Control List)**.
    
3.  Click **Configure** and modify the bucket ACL as needed.
    
4.  Click **Save** to save the settings.
    

## ossutil

You can use the [put-bucket-acl](/help/en/oss/developer-reference/manage-bucket-access-permissions) command of [ossutil V2.0](/help/en/oss/developer-reference/ossutil-overview/#DAS) to set the bucket ACL.

```
ossutil api put-bucket-acl --bucket example-bucket --acl private
```

## SDKs

The following code provides examples of how to change a bucket ACL using common SDKs. For code examples for other SDKs, see the SDK Reference.

Java

```
// This example shows how to set the access control list (ACL) for a bucket.
// Before you run this code, configure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.

import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.StaticCredentialsProvider;
import com.aliyun.sdk.service.oss2.models.*;

public class SetBucketAcl {

    public static void main(String[] args) {
        String bucketName = "example-bucket";

        String accessKeyId = System.getenv("OSS_ACCESS_KEY_ID");
        String accessKeySecret = System.getenv("OSS_ACCESS_KEY_SECRET");
        CredentialsProvider provider = new StaticCredentialsProvider(accessKeyId, accessKeySecret);

        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(provider)
                .region("<region-id>")
                .build()) {

            // Set the bucket ACL to private.
            // Valid values: "private", "public-read", and "public-read-write".
            PutBucketAclRequest putRequest = PutBucketAclRequest.newBuilder()
                    .bucket(bucketName)
                    .acl("private")
                    .build();
            PutBucketAclResult putResult = client.putBucketAcl(putRequest);
            System.out.println("Set Bucket ACL successfully. RequestId: " + putResult.requestId());

            // Get the bucket ACL.
            GetBucketAclRequest getRequest = GetBucketAclRequest.newBuilder()
                    .bucket(bucketName)
                    .build();
            GetBucketAclResult getResult = client.getBucketAcl(getRequest);
            System.out.println("Current Bucket ACL: " + getResult.accessControlPolicy().accessControlList().grant());

        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

Python

```
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# This example shows how to set the access control list (ACL) for a bucket.
# Before you run this code, configure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.

import alibabacloud_oss_v2 as oss


def main() -> None:
    bucket_name = "example-bucket"

    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = "<region-id>"

    client = oss.Client(cfg)

    # Set the bucket ACL to private.
    # Valid values: "private", "public-read", and "public-read-write".
    put_result = client.put_bucket_acl(oss.PutBucketAclRequest(
        bucket=bucket_name,
        acl="private"
    ))
    print(f"Set Bucket ACL successfully. RequestId: {put_result.request_id}")

    # Get the bucket ACL.
    get_result = client.get_bucket_acl(oss.GetBucketAclRequest(
        bucket=bucket_name
    ))
    print(f"Current Bucket ACL: {get_result.acl}")


if __name__ == "__main__":
    main()
```

Go

```
// This example shows how to set the access control list (ACL) for a bucket.
// Before you run this code, configure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.

package main

import (
	"context"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

func main() {
	bucketName := "example-bucket"

	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion("<region-id>")

	client := oss.NewClient(cfg)

	// Set the bucket ACL to private.
	// Valid values: oss.BucketACLPrivate, oss.BucketACLPublicRead, and oss.BucketACLPublicReadWrite.
	putResult, err := client.PutBucketAcl(context.TODO(), &oss.PutBucketAclRequest{
		Bucket: oss.Ptr(bucketName),
		Acl:    oss.BucketACLPrivate,
	})
	if err != nil {
		log.Fatalf("Failed to set Bucket ACL: %v", err)
	}
	log.Printf("Set Bucket ACL successfully. RequestId: %s", putResult.Headers.Get("X-Oss-Request-Id"))

	// Get the bucket ACL.
	getResult, err := client.GetBucketAcl(context.TODO(), &oss.GetBucketAclRequest{
		Bucket: oss.Ptr(bucketName),
	})
	if err != nil {
		log.Fatalf("Failed to get Bucket ACL: %v", err)
	}
	log.Printf("Current Bucket ACL: %s", *getResult.ACL)
}
```

PHP

```
<?php
// This example shows how to set the access control list (ACL) for a bucket.
// Before you run this code, configure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.

require_once __DIR__ . '/vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$bucketName = 'example-bucket';

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion('<region-id>');

$client = new Oss\Client($cfg);

try {
    // Set the bucket ACL to private.
    // Valid values: BucketACLType::PRIVATE, BucketACLType::PUBLIC_READ, and BucketACLType::PUBLIC_READ_WRITE.
    $putResult = $client->putBucketAcl(new Oss\Models\PutBucketAclRequest(
        bucket: $bucketName,
        acl: Oss\Models\BucketACLType::PRIVATE
    ));
    printf("Set Bucket ACL successfully. RequestId: %s\n", $putResult->requestId);

    // Get the bucket ACL.
    $getResult = $client->getBucketAcl(new Oss\Models\GetBucketAclRequest(
        bucket: $bucketName
    ));
    printf("Current Bucket ACL: %s\n", $getResult->accessControlList->grant);
} catch (Exception $e) {
    printf("Operation failed: %s\n", $e->getMessage());
}
```

C#

```
// This example shows how to set the access control list (ACL) for a bucket.
// Before you run this code, configure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.

using OSS = AlibabaCloud.OSS.V2;

var bucketName = "example-bucket";
var region = "<region-id>";

var cfg = OSS.Configuration.LoadDefault();
cfg.CredentialsProvider = new OSS.Credentials.EnvironmentVariableCredentialsProvider();
cfg.Region = region;

using var client = new OSS.Client(cfg);

try
{
    // Set the bucket ACL to private.
    // Valid values: "private", "public-read", and "public-read-write".
    var putResult = await client.PutBucketAclAsync(new OSS.Models.PutBucketAclRequest()
    {
        Bucket = bucketName,
        Acl = "private"
    });
    Console.WriteLine($"Set Bucket ACL successfully. RequestId: {putResult.RequestId}");

    // Get the bucket ACL.
    var getResult = await client.GetBucketAclAsync(new OSS.Models.GetBucketAclRequest()
    {
        Bucket = bucketName
    });
    Console.WriteLine($"Current Bucket ACL: {getResult.AccessControlPolicy?.AccessControlList?.Grant}");
}
catch (Exception ex)
{
    Console.WriteLine($"Operation failed: {ex.Message}");
}
```

Node.js

```
// This example shows how to set the access control list (ACL) for a bucket.
// Before you run this code, configure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.

const OSS = require('ali-oss');

async function main() {
    const bucketName = 'example-bucket';

    const client = new OSS({
        region: 'oss-<region-id>',
        accessKeyId: process.env.OSS_ACCESS_KEY_ID,
        accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
        authorizationV4: true,
    });

    try {
        // Set the bucket ACL to private.
        // Valid values: 'private', 'public-read', and 'public-read-write'.
        await client.putBucketACL(bucketName, 'private');
        console.log('Set Bucket ACL successfully.');

        // Get the bucket ACL.
        const result = await client.getBucketACL(bucketName);
        console.log(`Current Bucket ACL: ${result.acl}`);
    } catch (err) {
        console.error('Operation failed:', err.message);
    }
}

main();
```

## Query bucket ACL change records

If you detect abnormal bucket access or accidental data exposure, receive a security alert, or need to perform a regular audit, you can use ActionTrail to track changes to the bucket ACL. ActionTrail records who made the changes and when.

1.  Go to the [ActionTrail console](https://actiontrail.console.alibabacloud.com/). In the navigation pane on the left, choose **Events** > **Event Query**.
    
2.  At the top of the page, select the region where the bucket is located. Set **Service Name** to `Object Storage Service (OSS)` and **Event Name** to `PutBucketAcl`. The system automatically queries for and displays matching records of bucket ACL changes.
    
3.  On the right side of the page, disable the **Grouped List** option. In the Actions column of a change record, click **View Details**, and then click **Configuration Timeline** to view the values before and after the bucket ACL was changed.
    

## FAQ

#### **Does CDN origin fetch from OSS require the bucket ACL to be public-read or public-read-write?**

You do not need to set the public-read permission. You can enable CDN to perform an origin fetch from a bucket even if its ACL is set to private. For more information, see [Set up origin fetch for a private bucket](/help/en/oss/user-guide/cdn-acceleration#8d071ec96e64o).

## References

-   For scenarios that require a high level of customization, you can send REST API requests directly. Note that if you send REST API requests, you must manually write code to calculate signatures. For more information about the API, see [PutBucketAcl](/help/en/oss/developer-reference/putbucketacl#reference-zzr-hk5-tdb).
    
-   To grant long-term, fine-grained permissions to other users, such as read-only or write-only permissions on objects with a specific prefix in a bucket, you can use a [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/) or a [RAM policy](/help/en/oss/user-guide/ram-policy/).
    
-   To grant temporary, fine-grained permissions to other users, such as the permission to list all objects in a bucket, you can use Security Token Service (STS) temporary authorization. For more information, see [Use temporary credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss).
