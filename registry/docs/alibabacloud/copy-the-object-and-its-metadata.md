Copy an object from a source bucket to a destination bucket within the same region without modifying the object's content.

With the CopyObject operation, you can:

-   Back up objects to another bucket within the same region.
    
-   Migrate objects between buckets without downloading and re-uploading.
    
-   Change an object's storage class, access control list (ACL), metadata, or tags by copying to the same key.
    

## Prerequisites

Before you copy an object, make sure that you have:

-   Read permission on the source object
    
-   Read and write permissions on the destination bucket
    

The copy operation fails if either permission is missing.

## Limitations

-   Cross-region copy is not supported. For example, you cannot copy objects between China (Hangzhou) and China (Shanghai).
    
-   Objects larger than 1 GB must use the multipart copy method (UploadPartCopy). ossbrowser supports objects up to 5 GB.
    
-   If a retention policy is configured on the source or destination bucket, the copy operation returns the error: `The object you specified is immutable`.
    

## Choose a copy method

**Method**

**Object size**

**Notes**

ossbrowser

Up to 5 GB

GUI tool; no code required

OSS SDKs (CopyObject)

Up to 1 GB

Recommended for programmatic access

OSS SDKs (UploadPartCopy)

Over 1 GB

Multipart copy; see [Overview](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb)

ossutil

Any size

CLI tool

CopyObject API

Up to 1 GB per call

Direct API call; signature calculation required

## Overwrite behavior

By default, copying an object with the same key as an existing object in the destination bucket overwrites it. To prevent accidental overwrites, use one of the following methods:

-   **Enable versioning on the destination bucket.** Overwritten objects are saved as previous versions and can be recovered at any time. For details, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).
    
-   **Set the \`x-oss-forbid-overwrite\` header to \`true\`.** If the destination key already exists, the copy fails and OSS returns the `FileAlreadyExists` error code.
    

## Cost considerations

Copying a large number of objects and immediately setting their storage class to Deep Cold Archive may incur high PUT request fees. To reduce costs, configure [lifecycle rules](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time) to transition objects to Deep Cold Archive after copying.

## Copy objects

### Use OSS SDKs

The following examples use the CopyObject operation to copy objects smaller than 1 GB. For objects larger than 1 GB, use UploadPartCopy — see [Overview](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

All examples read credentials from environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`). Set these variables before running the code.

**Metadata behavior during copy**

By default, OSS copies the source object's metadata to the destination object (COPY mode). To replace the metadata, set `x-oss-metadata-directive` to `REPLACE` and specify new metadata values in the request. If you replace metadata, you must explicitly declare all metadata fields — omitting a field removes it from the destination object.

<details> <summary>Python</summary>

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="copy object sample")
parser.add_argument('--region', required=True, help='The region in which the bucket is located.')
parser.add_argument('--bucket', required=True, help='The name of the destination bucket.')
parser.add_argument('--endpoint', help='The endpoint of the region.')
parser.add_argument('--key', required=True, help='The key of the destination object.')
parser.add_argument('--source_key', required=True, help='The key of the source object.')
parser.add_argument('--source_bucket', required=True, help='The name of the source bucket.')

def main():
    args = parser.parse_args()

    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region

    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    result = client.copy_object(oss.CopyObjectRequest(
        bucket=args.bucket,
        key=args.key,
        source_key=args.source_key,
        source_bucket=args.source_bucket,
    ))

    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' version id: {result.version_id},'
          f' hash crc64: {result.hash_crc64},'
          f' source version id: {result.source_version_id},'
          f' server side encryption: {result.server_side_encryption},'
          f' server side data encryption: {result.server_side_data_encryption},'
          f' last modified: {result.last_modified},'
          f' etag: {result.etag}')

if __name__ == "__main__":
    main()
```

</details>

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com"; // Replace with your endpoint
        String region = "cn-hangzhou";                            // Replace with your region
        String sourceBucketName = "srcexamplebucket";
        String sourceKey = "srcexampleobject.txt";
        String destinationBucketName = "desexamplebucket";        // Must be in the same region
        String destinationKey = "desexampleobject.txt";

        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);

        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            CopyObjectRequest copyObjectRequest = new CopyObjectRequest(
                sourceBucketName, sourceKey,
                destinationBucketName, destinationKey
            );

            CopyObjectResult result = ossClient.copyObject(copyObjectRequest);
            System.out.println("ETag: " + result.getETag() + " LastModified: " + result.getLastModified());
        } catch (OSSException oe) {
            System.out.println("Error Code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
        } catch (ClientException ce) {
            System.out.println("Client Error: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

</details>

<details> <summary>Go</summary>

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
    region         string
    srcBucketName  string
    srcObjectName  string
    destBucketName string
    destObjectName string
)

func init() {
    flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
    flag.StringVar(&srcBucketName, "src-bucket", "", "The name of the source bucket.")
    flag.StringVar(&srcObjectName, "src-object", "", "The name of the source object.")
    flag.StringVar(&destBucketName, "dest-bucket", "", "The name of the destination bucket.")
    flag.StringVar(&destObjectName, "dest-object", "", "The name of the destination object.")
}

func main() {
    flag.Parse()

    if len(srcBucketName) == 0 {
        log.Fatalf("invalid parameters, source bucket name required")
    }
    if len(region) == 0 {
        log.Fatalf("invalid parameters, region required")
    }
    if len(destBucketName) == 0 {
        destBucketName = srcBucketName // Default to source bucket for same-bucket copy
    }
    if len(srcObjectName) == 0 {
        log.Fatalf("invalid parameters, source object name required")
    }
    if len(destObjectName) == 0 {
        log.Fatalf("invalid parameters, destination object name required")
    }

    cfg := oss.LoadDefaultConfig().
        WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
        WithRegion(region)

    client := oss.NewClient(cfg)

    request := &oss.CopyObjectRequest{
        Bucket:       oss.Ptr(destBucketName),
        Key:          oss.Ptr(destObjectName),
        SourceKey:    oss.Ptr(srcObjectName),
        SourceBucket: oss.Ptr(srcBucketName),
    }

    result, err := client.CopyObject(context.TODO(), request)
    if err != nil {
        log.Fatalf("failed to copy object %v", err)
    }
    log.Printf("copy object result: %#v\n", result)
}
```

</details>

<details> <summary>PHP</summary>

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"     => ['help' => 'The region in which the bucket is located.', 'required' => true],
    "endpoint"   => ['help' => 'The endpoint of the region.', 'required' => false],
    "bucket"     => ['help' => 'The name of the destination bucket.', 'required' => true],
    "key"        => ['help' => 'The key of the destination object.', 'required' => true],
    "src-bucket" => ['help' => 'The name of the source bucket.', 'required' => false],
    "src-key"    => ['help' => 'The key of the source object.', 'required' => true],
];

$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === true && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'] . PHP_EOL;
        exit(1);
    }
}

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($options["region"]);

if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$request = new Oss\Models\CopyObjectRequest(
    bucket: $options["bucket"],
    key: $options["key"]
);

if (!empty($options["src-bucket"])) {
    $request->sourceBucket = $options["src-bucket"];
}
$request->sourceKey = $options["src-key"];

$result = $client->copyObject($request);

printf(
    'status code: %s' . PHP_EOL .
    'request id: %s' . PHP_EOL,
    $result->statusCode,
    $result->requestId
);
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'yourRegion',                                    // Replace with your region
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'examplebucket',
});

async function copyObject() {
  try {
    const result = await client.copy('destexampleobject.txt', 'srcexampleobject.txt');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

copyObject();
```

</details>

<details> <summary>C#</summary>

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com"; // Replace with your endpoint
var region = "cn-hangzhou";                            // Replace with your region
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var sourceBucket = "srcexamplebucket";
var sourceObject = "srcdir/srcobject.txt";
var targetBucket = "destbucket";             // Must be in the same region
var targetObject = "destdir/destobject.txt";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var req = new CopyObjectRequest(sourceBucket, sourceObject, targetBucket, targetObject);
    client.CopyObject(req);
    Console.WriteLine("Copy object succeeded");
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID: {2} \tHostID: {3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

</details>

<details> <summary>Ruby</summary>

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com', # Replace with your endpoint
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')

# Copy the object and its metadata
bucket.copy_object('destobject.txt', 'srcobject.txt',
  :meta_directive => Aliyun::OSS::MetaDirective::COPY)

# Copy the object and replace its metadata
bucket.copy_object('destobject.txt', 'srcobject.txt',
  :metas => {'year' => '2017'},
  :meta_directive => Aliyun::OSS::MetaDirective::REPLACE)
```

</details>

<details> <summary>Android (Java)</summary>

```
String srcBucketName = "srcbucket";
String srcObjectKey = "dir1/srcobject.txt";
String destBucketName = "destbucket"; // Must be in the same region
String destObjectKey = "dir2/destobject.txt";

CopyObjectRequest copyObjectRequest = new CopyObjectRequest(
    srcBucketName, srcObjectKey,
    destBucketName, destObjectKey
);

OSSAsyncTask copyTask = oss.asyncCopyObject(copyObjectRequest,
    new OSSCompletedCallback<CopyObjectRequest, CopyObjectResult>() {
        @Override
        public void onSuccess(CopyObjectRequest request, CopyObjectResult result) {
            Log.d("copyObject", "copy success!");
        }

        @Override
        public void onFailure(CopyObjectRequest request,
                              ClientException clientException,
                              ServiceException serviceException) {
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

</details>

<details> <summary>iOS (Objective-C)</summary>

```
OSSCopyObjectRequest *copy = [OSSCopyObjectRequest new];
copy.sourceBucketName = @"sourcebucket";
copy.sourceObjectKey = @"dir1/srcobject.txt";
copy.bucketName = @"destbucket";
copy.objectKey = @"dir2/destobject.txt";

OSSTask *task = [client copyObject:copy];
[task continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        NSLog(@"copy object success!");
    } else {
        NSLog(@"copy object failed, error: %@", task.error);
    }
    return nil;
}];
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint"; // Replace with your endpoint
    std::string Region = "yourRegion";     // Replace with your region
    std::string SourceBucketName = "srcexamplebucket";
    std::string CopyBucketName = "destbucket"; // Must be in the same region
    std::string SourceObjectName = "srcdir/srcobject.txt";
    std::string CopyObjectName = "destdir/destobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    CopyObjectRequest request(CopyBucketName, CopyObjectName);
    request.setCopySource(SourceBucketName, SourceObjectName);

    auto outcome = client.CopyObject(request);

    if (!outcome.isSuccess()) {
        std::cout << "CopyObject failed"
                  << ", code: " << outcome.error().Code()
                  << ", message: " << outcome.error().Message()
                  << ", requestId: " << outcome.error().RequestId() << std::endl;
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

const char *endpoint = "yourEndpoint";          // Replace with your endpoint
const char *region = "yourRegion";              // Replace with your region
const char *source_bucket_name = "yourSourceBucketName";
const char *source_object_name = "yourSourceObjectName";
const char *dest_bucket_name = "yourDestBucketName";  // Must be in the same region
const char *dest_object_name = "yourDestObjectName";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
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

    aos_string_t source_bucket, source_object, dest_bucket, dest_object;
    aos_table_t *headers = NULL, *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&source_bucket, source_bucket_name);
    aos_str_set(&source_object, source_object_name);
    aos_str_set(&dest_bucket, dest_bucket_name);
    aos_str_set(&dest_object, dest_object_name);
    headers = aos_table_make(pool, 0);

    resp_status = oss_copy_object(oss_client_options,
        &source_bucket, &source_object,
        &dest_bucket, &dest_object,
        headers, &resp_headers);

    if (aos_status_is_ok(resp_status)) {
        printf("copy object succeeded\n");
    } else {
        printf("copy object failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

### **Use ossutil**

Copy `srcObject` from `srcBucket` to `examplebucket`:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /srcBucket/srcObject
```

For installation instructions, see [Install ossutil](/help/en/oss/install-ossutil2#DAS). For the full parameter reference, see [copy-object](/help/en/oss/developer-reference/copy-objects-by-calling-an-api-operation).

### Use the CopyObject API directly

The methods above are all based on the [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db) API operation. Call the API directly if your use case requires custom request construction. Direct API calls require signature calculation in your code.

## What's next

-   To copy objects larger than 1 GB, use the UploadPartCopy operation. See [Overview](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).
    
-   To protect objects from accidental overwrites, enable [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb) on the destination bucket.
    
-   To manage storage costs after copying, configure [lifecycle rules](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time) to transition objects to lower-cost storage classes automatically.
