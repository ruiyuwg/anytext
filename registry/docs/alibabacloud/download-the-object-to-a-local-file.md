Simple download uses the GetObject operation to download an object from an Object Storage Service (OSS) bucket over HTTP.

Use simple download for individual objects of any size. For large objects where you need fault-tolerant, resumable transfers, see [Resumable download](/help/en/oss/user-guide/oss-resumable-download#concept-zjn-31c-5db) instead.

**Important**

Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a), starting March 20, 2025, new OSS users must [bind a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets in Chinese mainland regions. Default public endpoints are restricted for these operations. If you access OSS via HTTPS, [bind a valid SSL certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain — this is required for OSS console access, which enforces HTTPS.

## Prerequisites

Before you begin, make sure that:

-   The object you want to download exists in a bucket. See [Upload objects](/help/en/oss/user-guide/upload-objects-to-oss/).
    
-   (Archive objects) The object is restored, or real-time access is enabled for the bucket. See [Restore objects](/help/en/oss/upload-download-and-manage-objects-restore-objects#task-727806) and [Real-time access to Archive objects](/help/en/oss/user-guide/archive-direct-reading#main-2356182).
    
-   (Cold Archive or Deep Cold Archive objects) The object is restored. See [Restore objects](/help/en/oss/upload-download-and-manage-objects-restore-objects#task-727806).
    

## Download an object

Choose the method that fits your workflow:

**Method**

**Best for**

OSS console

One-off downloads; no code required

ossbrowser

GUI-based management, same capabilities as the console

ossutil

Command-line scripting and automation

OSS SDKs

Application integration

REST API

Full customization with direct HTTP calls

**Important**

Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting **March 20, 2025, new OSS users** must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets located in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access your data via HTTPS, you must [bind a valid SSL Certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain. This is **mandatory for OSS Console access**, as the console enforces HTTPS.

### **Use the OSS console**

> The OSS console cannot download directories or subdirectories. Use ossbrowser, ossutil, OSS SDKs, or the API instead.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. Find and click the target bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  Download objects:
    
    -   **Single object** — In the **Actions** column, choose **!\[more\](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2197678661/p508856.jpg)** > **Download**. Alternatively, click the object name or click **View Details** in the **Actions** column, then click **Download** in the **View Details** panel. > **Note:** If you moved **Download** from the default **Added to More** section to the **Common object operations** section, the action appears directly without expanding the ![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2197678661/p508856.jpg) icon.
        
    -   **Multiple objects** — Select the objects and click **Download** below the object list. You can download up to 100 objects at a time.
        

### **Use ossbrowser**

ossbrowser supports the same object-level operations as the OSS console. Follow the on-screen instructions to download objects. For setup instructions, see [ossbrowser 2.0](/help/en/oss/developer-reference/ossbrowser-2-0-overview/#5e106bb4ea9if).

### **Use ossutil**

The following command downloads `exampleobject` from `examplebucket`:

```
ossutil api get-object --bucket examplebucket --key exampleobject
```

For installation instructions, see [Install ossutil](/help/en/oss/install-ossutil2#DAS). For the full parameter reference, see [get-object](/help/en/oss/developer-reference/get-object).

### **Use OSS SDKs**

All examples below call `GetObject` and read credentials from environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`). Set these variables before running the code.

For SDKs not listed here, see [Overview](/help/en/oss/developer-reference/overview-21#concept-xmg-h33-wdb).

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GetObjectRequest;
import java.io.File;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Specify the endpoint for your region. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, object path, local file path, and region.
        String bucketName = "examplebucket";
        String objectName = "testfolder/exampleobject.txt";
        String pathName = "D:\\localpath\\examplefile.txt";
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
            // Download the object to the specified local path.
            // If a file with the same name exists, it is overwritten.
            ossClient.getObject(new GetObjectRequest(bucketName, objectName), new File(pathName));
        } catch (OSSException oe) {
            System.out.println("OSS error — " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
        } catch (ClientException ce) {
            System.out.println("Client error — " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'yourRegion',         // e.g., oss-cn-hangzhou
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'examplebucket'
});

async function get() {
  try {
    // Downloads exampleobject.txt to the specified local path.
    // If a file with the same name exists, it is overwritten.
    const result = await client.get('exampleobject.txt', 'D:\\localpath\\examplefile.txt');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

get();
```

</details>

<details> <summary>HTML (browser)</summary>

The browser SDK uses a signed URL to trigger a download. The URL includes a `content-disposition` header that prompts the browser to save the file with the specified name.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <script
      type="text/javascript"
      src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"
    ></script>
    <script type="text/javascript">
      const client = new OSS({
        region: "yourRegion",         // e.g., oss-cn-hangzhou
        authorizationV4: true,
        // Use temporary credentials from STS.
        accessKeyId: "yourAccessKeyId",
        accessKeySecret: "yourAccessKeySecret",
        stsToken: "yoursecurityToken",
        bucket: "examplebucket",
      });

      // Set the response header to prompt the browser to download the file.
      const filename = "examplefile.txt";
      const response = {
        "content-disposition": `attachment; filename=${encodeURIComponent(filename)}`,
      };

      // Generate a signed URL for the object.
      const url = client.signatureUrl("exampleobject.txt", { response });
      console.log(url);
    </script>
  </body>
</html>
```

</details>

<details> <summary>Android (Java)</summary>

```
// Specify the bucket name and full object path (exclude the bucket name).
GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");

 oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        long length = result.getContentLength();
        if (length > 0) {
            byte[] buffer = new byte[(int) length];
            int readCount = 0;
            while (readCount < length) {
                try {
                    readCount += result.getObjectContent().read(buffer, readCount, (int) length - readCount);
                } catch (Exception e) {
                    OSSLog.logInfo(e.toString());
                }
            }
            // Write the object content to a local file.
            try {
                FileOutputStream fout = new FileOutputStream("download_filePath");
                fout.write(buffer);
                fout.close();
            } catch (Exception e) {
                OSSLog.logInfo(e.toString());
            }
        }
    }

    @Override
    public void onFailure(GetObjectRequest request, ClientException clientException,
                          ServiceException serviceException) {
        // Handle errors here.
    }
});
```

</details>

<details> <summary>Objective-C</summary>

```
OSSGetObjectRequest *request = [OSSGetObjectRequest new];

// Specify the bucket name and full object path (exclude the bucket name).
request.bucketName = @"examplebucket";
request.objectKey = @"exampledir/exampleobject.txt";

// Track download progress (optional).
request.downloadProgress = ^(int64_t bytesWritten, int64_t totalBytesWritten, int64_t totalBytesExpectedToWrite) {
    NSLog(@"Downloaded: %lld / %lld bytes", totalBytesWritten, totalBytesExpectedToWrite);
};
// request.range = [[OSSRange alloc] initWithStart:0 withEnd:99]; // Download bytes 0-99 only.
// request.downloadToFileURL = [NSURL fileURLWithPath:@"<filepath>"];  // Save directly to a file.

OSSTask *getTask = [client getObject:request];

[getTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        NSLog(@"Download succeeded.");
        OSSGetObjectResult *getResult = task.result;
        NSLog(@"Downloaded data: %@", getResult.downloadedData);
    } else {
        NSLog(@"Download failed: %@", task.error);
    }
    return nil;
}];

// [getTask waitUntilFinished];
// [request cancel];
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
#include <memory>
#include <fstream>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Specify your endpoint, region, bucket, object path, and local file path.
    std::string Endpoint = "yourEndpoint";       // e.g., https://oss-cn-hangzhou.aliyuncs.com
    std::string Region = "yourRegion";           // e.g., cn-hangzhou
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/exampleobject.txt";
    std::string FileNametoSave = "D:\\localpath\\examplefile.txt";
    // If a file with the same name exists, it is overwritten.

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    GetObjectRequest request(BucketName, ObjectName);
    request.setResponseStreamFactory([=]() {
        return std::make_shared<std::fstream>(
            FileNametoSave,
            std::ios_base::out | std::ios_base::in | std::ios_base::trunc | std::ios_base::binary
        );
    });

    auto outcome = client.GetObject(request);

    if (outcome.isSuccess()) {
        std::cout << "Downloaded successfully. Content length: "
                  << outcome.result().Metadata().ContentLength() << std::endl;
    } else {
        std::cout << "Download failed — "
                  << "code: " << outcome.error().Code()
                  << ", message: " << outcome.error().Message()
                  << ", request ID: " << outcome.error().RequestId() << std::endl;
        ShutdownSdk();
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

</details>

<details> <summary>C</summary>

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint = "yourEndpoint";         // e.g., https://oss-cn-hangzhou.aliyuncs.com
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *local_filename = "yourLocalFilename";
const char *region = "yourRegion";             // e.g., cn-hangzhou

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    // Load credentials from environment variables.
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
    oss_request_options_t *oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket, object, file;
    aos_table_t *params, *headers = NULL, *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file, local_filename);
    params = aos_table_make(pool, 0);

    // Download the object to the local file.
    // If a file with the same name exists, it is overwritten.
    resp_status = oss_get_object_to_file(oss_client_options, &bucket, &object, headers, params, &file, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("Download succeeded.\n");
    } else {
        printf("Download failed.\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

<details> <summary>Ruby</summary>

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',  # Specify your endpoint.
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')
# Download the object to a local file.
bucket.get_object('exampleobject.txt', :file => 'D:\\localpath\\examplefile.txt')
```

</details>

<details> <summary>Go</summary>

```
package main

import (
    "context"
    "flag"
    "log"
    "net/http"
    "time"

    "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
    "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

var (
    region     string
    bucketName string
    objectName string
)

func init() {
    flag.StringVar(&region, "region", "", "The region where the bucket is located.")
    flag.StringVar(&bucketName, "bucket", "", "The bucket name.")
    flag.StringVar(&objectName, "object", "", "The object name.")
}

func main() {
    flag.Parse()

    if len(bucketName) == 0 {
        log.Fatalf("bucket name is required")
    }
    if len(region) == 0 {
        log.Fatalf("region is required")
    }
    if len(objectName) == 0 {
        log.Fatalf("object name is required")
    }

    cfg := oss.LoadDefaultConfig().
        WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
        WithRegion(region)

    client := oss.NewClient(cfg)

    localFile := "download.file"

    // Optional: download only if the object was modified after this date.
    date := time.Date(2024, time.October, 21, 18, 43, 2, 0, time.UTC)

    // Optional: download only if the object's ETag matches.
    etag := "\"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\""

    getRequest := &oss.GetObjectRequest{
        Bucket:          oss.Ptr(bucketName),
        Key:             oss.Ptr(objectName),
        IfModifiedSince: oss.Ptr(date.Format(http.TimeFormat)), // Conditional: modified after date.
        IfMatch:         oss.Ptr(etag),                         // Conditional: ETag must match.
    }

    result, err := client.GetObjectToFile(context.TODO(), getRequest, localFile)
    if err != nil {
        log.Fatalf("download failed: %v", err)
    }

    log.Printf("download result: %#v\n", result)
}
```

</details>

<details> <summary>Python</summary>

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="GetObject sample")
parser.add_argument('--region', required=True, help='Region where the bucket is located.')
parser.add_argument('--bucket', required=True, help='Bucket name.')
parser.add_argument('--key', required=True, help='Object name.')
parser.add_argument('--endpoint', help='Custom endpoint (optional).')

def main():
    args = parser.parse_args()

    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    result = client.get_object(oss.GetObjectRequest(
        bucket=args.bucket,
        key=args.key,
    ))

    # Method 1: Read the entire object into memory, then save to a file.
    with result.body as body_stream:
        data = body_stream.read()
        path = "./downloaded-object.txt"
        with open(path, 'wb') as f:
            f.write(data)
        print(f"Saved to {path} ({len(data)} bytes)")

    # Method 2: Read in chunks (useful for large objects).
    # with result.body as body_stream:
    #     with open("./downloaded-object-chunks.txt", 'wb') as f:
    #         for chunk in body_stream.iter_bytes(block_size=256 * 1024):  # 256 KB chunks
    #             f.write(chunk)

if __name__ == "__main__":
    main()
```

</details>

<details> <summary>PHP</summary>

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'Region where the bucket is located.', 'required' => true],
    "endpoint" => ['help' => 'Custom endpoint (optional).', 'required' => false],
    "bucket"   => ['help' => 'Bucket name.', 'required' => true],
    "key"      => ['help' => 'Object name.', 'required' => true],
];

$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'] . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];

// Load credentials from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key);
$result  = $client->getObject($request);

// Save the object content to a local file.
$localFilePath = 'path/to/local/file.txt';
file_put_contents($localFilePath, $result->body->getContents());

printf("Status code: %s\nRequest ID: %s\n", $result->statusCode, $result->requestId);
```

</details>

### Use the REST API

GetObject is a RESTful API operation. Call it directly if your use case requires custom request construction. You must compute the request signature in your code. See [GetObject](/help/en/oss/developer-reference/getobject#concept-dcn-tp1-kfb).

## Permissions

By default, an Alibaba Cloud account has full permissions on its resources. RAM users and RAM roles have no permissions by default and must be granted access via [RAM policies](/help/en/oss/ram-policy-overview/) or [bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**Action**

**When required**

`oss:GetObject`

Always required to download an object

`oss:GetObjectVersion`

Required when specifying `versionId` to download a specific object version

`kms:Decrypt`

Required when the object is encrypted with KMS (indicated by `X-Oss-Server-Side-Encryption: KMS` in the object metadata)

## Billing

**Billable item**

**Trigger**

GET requests

Charged per successful GetObject request

Outbound traffic over the Internet

Charged when using a public endpoint (e.g., `oss-cn-hangzhou.aliyuncs.com`) or acceleration endpoint (e.g., `oss-accelerate.aliyuncs.com`)

Infrequent Access (IA) data retrieval

Charged based on the size of retrieved IA objects

Archive data retrieval (real-time access)

Charged based on the size of Archive objects retrieved from a bucket with real-time access enabled

Transfer acceleration

Charged when transfer acceleration is enabled and an acceleration endpoint is used

For unit prices, see [Object Storage Service pricing](https://www.alibabacloud.com/product/oss/pricing).

## Troubleshooting

**403 Forbidden**

The request lacks the required permissions. Check that:

-   The RAM user or RAM role has the `oss:GetObject` action in its RAM policy or bucket policy.
    
-   If you specified `versionId`, the policy also includes `oss:GetObjectVersion`.
    
-   If the object is KMS-encrypted, the caller also has the `kms:Decrypt` permission.
    
-   The bucket ACL or object ACL allows read access for the caller's account.
    

For more help, see [Overview of permissions and access control](/help/en/oss/user-guide/permissions-and-access-control-overview#concept-e4s-mhv-tdb).

**404 NoSuchKey**

The object key does not exist in the bucket. Verify:

-   The object key is spelled correctly, including path separators (e.g., `folder/object.txt`).
    
-   The object was uploaded successfully and has not been deleted.
    
-   If versioning is enabled on the bucket, the specific version you requested exists.
    

**Archive or Cold Archive object not accessible**

The object must be restored before you can download it. Check the object's restore status and wait for restoration to complete. For Archive objects, alternatively enable real-time access on the bucket to skip restoration. See [Restore objects](/help/en/oss/upload-download-and-manage-objects-restore-objects#task-727806).

## What's next

-   [Object operations in a versioning-enabled bucket](/help/en/oss/user-guide/manage-objects-in-a-versioning-enabled-bucket#section-npj-rcu-mni) — Download specific object versions.
    
-   [Manage objects in a versioning-suspended bucket](/help/en/oss/user-guide/manage-objects-in-a-versioning-suspended-bucket) — Download from buckets with versioning suspended.
    
-   [Overview of permissions and access control](/help/en/oss/user-guide/permissions-and-access-control-overview#concept-e4s-mhv-tdb) — Configure ACLs for buckets and objects to control download access.
    
-   [Resumable download](/help/en/oss/user-guide/oss-resumable-download#concept-zjn-31c-5db) — Resume interrupted downloads of large objects.
    
-   [Authorize third-party users to download objects](/help/en/oss/user-guide/authorize-third-party-users-to-download-objects#concept-xpq-p1c-5db) — Grant download access to users without OSS credentials using Security Token Service (STS) or signed URLs.
    
-   [Conditional download](/help/en/oss/user-guide/conditional-download) — Download an object only when specified conditions are met.
