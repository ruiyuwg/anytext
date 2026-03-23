Delete a bucket when you no longer need it. OSS charges are primarily for resources inside a bucket, and deleting the bucket is the most reliable way to ensure no billable resources remain. To stop OSS billing entirely, delete all buckets under your account.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1988294671/CAEQThiBgMDSir2wzhkiIDBhYjhmNzk5YjQ1YzQzM2U5ODRlYzJkYzQyN2NkNmM55487192_20250728162203.616.svg)

## Prerequisites

Before you begin, make sure that:

-   No services (websites, apps, or CDN) are actively accessing the bucket. Deletion causes **immediate** interruption for all dependent services.
    
-   You have backed up any data you need. Deletion is permanent — all files, previous versions, and parts are irrecoverable. OSS does not support soft delete.
    
-   Cross-region or same-region replication is disabled or accounted for. Deleting a bucket may also clear data from the destination bucket.
    
-   You have the [AliyunOSSFullAccess](https://ram.console.alibabacloud.com/policies/detail?policyType=System&policyName=AliyunOSSFullAccess) permission, or both list and delete permissions. Without these, deletion will fail partway through.
    

> If you want to keep the bucket name, **do not delete the bucket**. Instead, empty the objects and keep the bucket. After deletion, the bucket name enters a cool-down period of 4–8 hours before it can be reused — and once released, any user can register it.

## How it works

Deleting a bucket requires two stages:

1.  **Clear all resources** — remove all objects, parts, access points, accelerators, and RTMP ingest URLs.
    
2.  **Delete the empty bucket** — once the bucket is confirmed empty, delete it from the console or CLI.
    

The OSS console provides a **deletion wizard** that scans and lists all resources that must be removed.

## Check what needs to be cleared

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. Find and click the bucket you want to delete.
    
3.  In the left navigation pane, scroll to the bottom and click **Delete Bucket**.
    
4.  On the **Delete Bucket** page, click the **Delete Bucket** button. You can then view the items that must be cleared.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3916600671/p995726.png)
    
5.  On the **Delete Bucket** page, click **Delete Bucket** to view all items that must be cleared.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3916600671/p995726.png)

The wizard lists the following resource types that block deletion: **Objects**, **Parts**, **Access Points**, **Accelerators**, and **RTMP Ingest URLs**.

## Clean up resources

### Clean up objects

If the **Objects** resource shows that HDFS is enabled, delete HDFS files first (see [Delete HDFS files](#bdf6e8571d5o3)). If versioning is enabled, deleting all objects also removes all previous versions.

#### OSS console

1.  On the **Delete Bucket** page, click **Delete Bucket**. Find **Objects** and click **Delete**.
    
2.  Select all objects and click **Permanently Delete** at the bottom.
    
3.  In the dialog box, click **OK**.
    

#### ossutil

Delete all objects, including all versions:

```
ossutil rm oss://examplebucket/ -r
```

For more information, see [rm (delete)](/help/en/oss/developer-reference/rm-deleted).

### Delete HDFS files

#### OSS console

1.  For the **Objects** resource, click **Pause Now** in the status column to stop the HDFS background task.
    
2.  Click **Delete** to go to the HDFS tab.
    
3.  Click **Permanently Delete** for each HDFS file.
    

#### HDFS shell commands

```
hdfs dfs -rm -r -skipTrash oss://examplebucket.cn-hangzhou.oss-dls.aliyuncs.com/*
```

For more information, see [Perform common operations for the OSS-HDFS service using HDFS shell commands](/help/en/oss/user-guide/connect-non-emr-clusters-to-oss-hdfs#step-6xd-gtc-nit).

### Clean up parts

Parts are unmerged fragments from multipart uploads. They incur storage charges even when no corresponding object exists.

#### OSS console

1.  On the **Delete Bucket** page, click **Delete Bucket** and then click **Delete** for the **Parts** resource.
    
2.  On the **Object** page, click the **Parts** tab.
    
3.  In the **Parts** panel, click **Delete All**.
    
4.  In the dialog box, click **OK**.
    

#### ossutil

Delete all parts from incomplete or canceled multipart uploads:

```
ossutil rm oss://examplebucket -m -r -f
```

For more information, see [rm (delete)](/help/en/oss/developer-reference/rm-deleted).

### Delete access points

1.  In the left navigation pane, click **Access Point**.
    
2.  For each access point, click **Delete Access Point**.
    
3.  Follow the instructions to delete the corresponding access policy.
    
4.  After deleting the access policy, return to the access point list. Enter the access point name and click **OK**.
    

### Delete accelerators

Deleting an accelerator only clears its cached data — objects in the bucket are not affected.

1.  In the left navigation pane, click **Bucket Settings** > **Accelerator**.
    
2.  In the accelerator list, click **Delete** in the **Actions** column.
    
3.  Enter the accelerator name and click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0884653471/p936257.png)

### Delete RTMP ingest URLs

LiveChannels cannot be managed from the console or ossutil — use the API or SDK. The following Java example deletes a specified LiveChannel.

For the API reference, see [DeleteLiveChannel](/help/en/oss/developer-reference/deletelivechannel).

```
import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.LiveChannelGenericRequest;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Endpoint for the region where the bucket is located
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String liveChannelName = "examplelivechannel";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            LiveChannelGenericRequest request = new LiveChannelGenericRequest(bucketName, liveChannelName);
            ossClient.deleteLiveChannel(request);
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Clean up large numbers of objects with lifecycle rules

When a bucket contains millions of objects, use a lifecycle rule to delete them automatically. This is the most efficient and cost-effective approach — it avoids the API request fees that accumulate when manually deleting large numbers of files, and handles deletion automatically without requiring ongoing intervention.

**Warning**

Object deletion is irreversible. Test lifecycle rules in a separate test bucket before applying them to production.

### For buckets with versioning disabled

Configure one lifecycle rule to delete objects 1 day after their last modification and delete parts older than 1 day.

1.  Log on to the OSS console. Go to the [Buckets](https://oss.console.alibabacloud.com/bucket) page and find the bucket.
    
2.  In the left navigation pane, choose **Content Security** > **Versioning**. Verify that versioning is disabled.
    

![未开启版本控制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980583.png)

1.  In the left navigation pane, choose **Data Management** > **Lifecycle**. Set a lifecycle rule that deletes objects **1** day after last modification and deletes parts older than **1** day.
    

![screenshot_2025-07-01_17-59-32](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980603.png)

### For buckets with versioning enabled

When versioning is enabled, a bucket can contain current versions, previous versions, parts, and delete markers. Configure one lifecycle rule to clean up all of these.

1.  Log on to the OSS console. Go to the [Buckets](https://oss.console.alibabacloud.com/bucket) page and find the bucket.
    
2.  In the left navigation pane, choose **Content Security** > **Versioning**. Verify that versioning is enabled.
    

![screenshot_2025-07-02_10-58-23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980726.png)

1.  In the left navigation pane, choose **Data Management** > **Lifecycle**. Set a lifecycle rule to delete current and previous versions **1** day after last modification, delete parts older than **1** day, and remove delete markers.
    

![screenshot_2025-07-02_10-58-23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3345561571/p980775.png)

## Delete the bucket

After all resources are cleared, delete the empty bucket.

### OSS console

1.  Navigate to the **Delete Bucket** page for the bucket.
    
2.  Click **Delete Bucket**. In the dialog box, click **Delete**, then **OK**.
    

### ossutil

```
ossutil api delete-bucket --bucket examplebucket
```

For more information, see [delete-bucket](/help/en/oss/developer-reference/delete-bucket).

### OSS SDK

The following examples show how to delete a bucket using common SDKs. For other SDKs, see [SDK overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

### Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ossClient.deleteBucket(bucketName);
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### Python

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="Delete a specified OSS bucket.")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket to delete.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS.')

def main():
    args = parser.parse_args()

    # Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region

    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    request = oss.DeleteBucketRequest(bucket=args.bucket)

    try:
        result = client.delete_bucket(request)
        print(f'status code: {result.status_code},'
              f' request id: {result.request_id}')
    except oss.exceptions.OssError as e:
        print(f"Failed to delete bucket: {e}")

if __name__ == "__main__":
    main()
```

### Go

```
package main

import (
	"context"
	"flag"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

var (
	region     string
	bucketName string
)

func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	flag.Parse()

	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}

	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}

	// Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	request := &oss.DeleteBucketRequest{
		Bucket: oss.Ptr(bucketName),
	}

	result, err := client.DeleteBucket(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to delete bucket %v", err)
	}

	log.Printf("delete bucket result:%#v\n", result)
}
```

### PHP

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False],
    "bucket"   => ['help' => 'The name of the bucket.', 'required' => True],
];
$longopts = \array_map(function ($key) { return "$key:"; }, array_keys($optsdesc));
$options = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help'];
        echo "Error: the following arguments are required: --$key, $help";
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];

// Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$request = new Oss\Models\DeleteBucketRequest($bucket);
$result = $client->deleteBucket($request);

printf(
    'status code:' . $result->statusCode . PHP_EOL .
    'request id:' . $result->requestId
);
```

### Node.js

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'oss-cn-hangzhou',
  // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'examplebucket',
});

async function deleteBucket() {
  try {
    const result = await client.deleteBucket('examplebucket');
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

deleteBucket();
```

### .NET

```
using System;
using Aliyun.OSS;
using Aliyun.OSS.Common;

namespace Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
            var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
            var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
            var bucketName = "examplebucket314";
            const string region = "cn-hangzhou";

            var conf = new ClientConfiguration();
            conf.SignatureVersion = SignatureVersion.V4;

            var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
            client.SetRegion(region);

            try
            {
                client.DeleteBucket(bucketName);
                Console.WriteLine("Delete bucket succeeded");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Delete bucket failed. {0}", ex.Message);
            }
        }
    }
}
```

### Android

```
DeleteBucketRequest deleteBucketRequest = new DeleteBucketRequest("examplebucket");

OSSAsyncTask deleteBucketTask = oss.asyncDeleteBucket(deleteBucketRequest, new OSSCompletedCallback<DeleteBucketRequest, DeleteBucketResult>() {
    @Override
    public void onSuccess(DeleteBucketRequest request, DeleteBucketResult result) {
        Log.d("asyncDeleteBucket", "Success!");
    }
    @Override
    public void onFailure(DeleteBucketRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

### iOS

```
OSSDeleteBucketRequest * delete = [OSSDeleteBucketRequest new];
// Specify the bucket name
delete.bucketName = @"examplebucket";
OSSTask * deleteTask = [client deleteBucket:delete];
[deleteTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        NSLog(@"delete bucket success!");
    } else {
        NSLog(@"delete bucket failed, error: %@", task.error);
    }
    return nil;
}];
```

### C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
    std::string Region = "cn-hangzhou";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    DeleteBucketRequest request(BucketName);
    auto outcome = client.DeleteBucket(request);

    if (outcome.isSuccess()) {
        std::cout << "Delete bucket successfully." << std::endl;
    } else {
        std::cout << "Failed to delete bucket. Error code: " << outcome.error().Code()
                  << ", Message: " << outcome.error().Message()
                  << ", RequestId: " << outcome.error().RequestId() << std::endl;
    }

    ShutdownSdk();
    return 0;
}
```

### C

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name = "examplebucket";
const char *region = "cn-hangzhou";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    aos_str_set(&bucket, bucket_name);

    resp_status = oss_delete_bucket(oss_client_options, &bucket, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("delete bucket succeeded\n");
    } else {
        printf("delete bucket failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

### Ruby

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  # Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

client.delete_bucket('examplebucket')
```

## FAQ

### What do I do if I get a "Bucket is not empty" error?

The bucket still contains resources. Use the deletion wizard in the OSS console to see what remains, clean up the resources, and then retry. For instructions, see [Check what needs to be cleared](#section-752d3460).

### Why can't I create a bucket with the same name right after deleting it?

After deletion, the bucket name enters a cool-down period of **4–8 hours**. During this period, no user can register the name. If you attempt to create a bucket with the same name during this window, you will receive a `BucketAlreadyExists` error. Use a different name if you need to create a bucket immediately.

After the cool-down period ends, the name becomes available to all users. If retaining the name matters, empty the objects and keep the bucket instead of deleting it.

### How do I delete multiple buckets in a batch?

**Warning**

Batch deletion is irreversible and can cause permanent data loss. Verify your bucket list carefully and back up all necessary data before proceeding.

The OSS console does not support batch deletion. Use ossutil with a script:

1.  Create a text file listing the names of all buckets to delete.
    
2.  For each bucket name, run the following steps in sequence:
    
    1.  Empty the bucket resources using ossutil.
        
    2.  After confirming the bucket is empty, delete it using ossutil.
        

### What do I do if I get an "Insufficient permissions" error?

Deleting a bucket requires list and delete permissions across multiple resource types. Grant the [AliyunOSSFullAccess](https://ram.console.alibabacloud.com/policies/detail?policyType=System&policyName=AliyunOSSFullAccess) permission to your RAM identity to avoid partial failures caused by missing permissions.

### How do I completely stop OSS billing?

Delete **all buckets under your account**. As long as any bucket exists — even if empty — you may still incur OSS charges. Outstanding bills are settled separately.

### Can I recover a deleted bucket?

No. OSS does not support soft delete. Deletion is permanent and cannot be undone. Always back up data before deleting a bucket.
