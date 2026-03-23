**Warning**

Deleted objects cannot be recovered. Before you proceed, review the safeguards below to protect objects against accidental deletion.

OSS lets you delete one or more objects from a bucket manually or automatically. This page covers both approaches and all supported tools.

**Important**

If your bucket has OSS-HDFS enabled, do not delete objects from the `.dlsdata/` directory. Doing so may cause data loss or destabilize the OSS-HDFS service.

## Before you delete

Permanent deletion is irreversible. Consider these safeguards before running any delete operation:

-   **Use lifecycle rules for bulk cleanup.** For deleting objects that meet criteria such as a specific prefix or last-modified date, configure a lifecycle rule instead of running delete commands manually. See [Lifecycle](/help/en/oss/user-guide/overview-54/#concept-2118096).
    

## Deletion methods

OSS supports two deletion modes:

**Mode**

**When to use**

**Manual**

Delete specific objects on demand using the console, OSS API, SDK, ossbrowser, or ossutil

**Automatic**

Delete objects matching a rule (prefix or last-modified date) using lifecycle rules

A single delete request can remove up to **1,000 objects**. To delete more, send multiple requests.

## Delete objects manually

### **OSS console**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the target bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    

#### Delete OSS objects

1.  On the **OSS Object** tab, select one or more objects, then click **Permanently Delete** below the object list.
    
2.  Click **OK** to confirm.
    

#### Delete HDFS objects

1.  On the **HDFS** tab, find the object you want to delete and click **Permanently Delete** in the **Actions** column.
    
2.  Click **OK** to confirm.
    

> The **HDFS** tab does not support bulk deletion. Delete HDFS objects one at a time.

### **Use ossbrowser**

You can use ossbrowser to perform the same object-level operations that you can perform in the OSS console. You can follow the on-screen instructions in ossbrowser to delete objects. For more information, see [Common operations](/help/en/oss/developer-reference/use-ossbrowser#concept-xmg-h33-wdb).

### **OSS SDKs**

The examples below delete a single object. All examples use environment variables for credentials — set `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` before running.

For other languages or deleting multiple objects at once, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

### **Java**

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Specify the endpoint for your region. Example: China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name and object path (do not include the bucket name in the path).
        String bucketName = "examplebucket";
        String objectName = "exampleobject.txt";
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
            // Delete the object. To delete a directory, first empty it.
            ossClient.deleteObject(bucketName, objectName);
        } catch (OSSException oe) {
            System.out.println("OSS error: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### **Python**

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="delete object sample")
parser.add_argument('--region', help='The region where the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The endpoint for accessing OSS.')
parser.add_argument('--key', help='The name of the object.', required=True)

def main():
    args = parser.parse_args()

    # Load credentials from environment variables.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    result = client.delete_object(oss.DeleteObjectRequest(
        bucket=args.bucket,
        key=args.key,
    ))

    # HTTP 204 indicates successful deletion.
    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' version id: {result.version_id},'
          f' delete marker: {result.delete_marker}')

if __name__ == "__main__":
    main()
```

### **Go**

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
	objectName string
)

func init() {
	flag.StringVar(&region, "region", "", "The region where the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
	flag.StringVar(&objectName, "object", "", "The name of the object.")
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
	if len(objectName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, object name required")
	}

	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	request := &oss.DeleteObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
	}

	result, err := client.DeleteObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to delete object: %v", err)
	}

	log.Printf("delete object result: %#v\n", result)
}
```

### **Node.js**

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'oss-cn-hangzhou',      // Region where the bucket is located
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'examplebucket',
});

async function deleteObject() {
  try {
    // Specify the full object path, excluding the bucket name.
    const result = await client.delete('exampleobject.txt');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

deleteObject();
```

### **PHP**

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region where the bucket is located.', 'required' => true],
    "endpoint" => ['help' => 'The OSS endpoint.', 'required' => false],
    "bucket"   => ['help' => 'The name of the bucket.', 'required' => true],
    "key"      => ['help' => 'The name of the object.', 'required' => true],
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

$client  = new Oss\Client($cfg);
$request = new Oss\Models\DeleteObjectRequest(bucket: $bucket, key: $key);
$result  = $client->deleteObject($request);

// HTTP 204 indicates successful deletion.
printf(
    'status code: %s' . PHP_EOL .
    'request id: %s' . PHP_EOL,
    $result->statusCode,
    $result->requestId
);
```

### **Browser.js**

> To avoid exposing your AccessKey pair in browser code, use temporary access credentials from Security Token Service (STS). Temporary credentials include an AccessKey ID, an AccessKey secret, and a security token. For details, see [Authorize access (Browser.js SDK)](/help/en/oss/developer-reference/authorize-access-6#section-iy3-bfe-7mn).

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
</head>
<body>
  <button id="delete">Delete</button>
  <!-- Import the OSS SDK. -->
  <script type="text/javascript" src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"></script>
  <script type="text/javascript">
    const client = new OSS({
      region: 'yourRegion',
      authorizationV4: true,
      // Temporary credentials from STS.
      accessKeyId: 'yourAccessKeyId',
      accessKeySecret: 'yourAccessKeySecret',
      stsToken: 'yourSecurityToken',
      bucket: 'examplebucket',
    });

    document.getElementById('delete').addEventListener('click', async () => {
      // Specify the full object path, excluding the bucket name.
      let result = await client.delete('exampledir/exampleobject.txt');
      console.log(result);
    });
  </script>
</body>
</html>
```

### **C#**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var objectName = "exampledir/exampleobject.txt";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    client.DeleteObject(bucketName, objectName);
    Console.WriteLine("Delete object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Delete object failed. {0}", ex.Message);
}
```

### **Android-Java**

```
// Specify the bucket name and the full object path (do not include the bucket name).
DeleteObjectRequest delete = new DeleteObjectRequest("examplebucket", "exampledir/exampleobject.txt");

// Delete asynchronously.
OSSAsyncTask deleteTask = oss.asyncDeleteObject(delete, new OSSCompletedCallback<DeleteObjectRequest, DeleteObjectResult>() {
    @Override
    public void onSuccess(DeleteObjectRequest request, DeleteObjectResult result) {
        Log.d("asyncDeleteObject", "success!");
    }

    @Override
    public void onFailure(DeleteObjectRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            // Network or client-side error.
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            // Server-side error.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

### **Objective-C**

```
OSSDeleteObjectRequest *delete = [OSSDeleteObjectRequest new];
// Specify the bucket name.
delete.bucketName = @"examplebucket";
// Specify the full object path, excluding the bucket name.
delete.objectKey = @"exampleobject.txt";

OSSTask *deleteTask = [client deleteObject:delete];

[deleteTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        // Deletion succeeded.
    }
    return nil;
}];
// Uncomment to block until the task completes.
// [deleteTask waitUntilFinished];
```

### **C++**

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Set the endpoint, region, bucket name, and object path.
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    // To delete a folder, set ObjectName to the folder name.
    // The folder must be empty before deletion.
    std::string ObjectName = "exampleobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    DeleteObjectRequest request(BucketName, ObjectName);
    auto outcome = client.DeleteObject(request);

    if (!outcome.isSuccess()) {
        std::cout << "DeleteObject failed"
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

### **C**

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name = "examplebucket";
const char *object_name = "exampleobject.jpg";
const char *region = "yourRegion";

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

    aos_string_t bucket;
    aos_string_t object;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    resp_status = oss_delete_object(oss_client_options, &bucket, &object, &resp_headers);

    if (aos_status_is_ok(resp_status)) {
        printf("delete object succeeded\n");
    } else {
        printf("delete object failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

### **Ruby**

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')
# Specify the full object path, excluding the bucket name.
bucket.delete_object('exampledir/exampleobject.txt')
```

### **ossutil**

Install ossutil first: [Install ossutil](/help/en/oss/install-ossutil2#DAS).

**Delete a single object:**

```
ossutil api delete-object --bucket examplebucket --key exampleobject
```

See [delete-object](/help/en/oss/developer-reference/delete-object) for all options.

**Delete multiple objects in one request:**

```
ossutil api delete-multiple-objects \
  --bucket examplebucket \
  --delete "{\"Quiet\":\"false\",\"Object\":[{\"Key\":\"multipart.data\"},{\"Key\":\"test.jpg\"}]}"
```

See [delete-multiple-objects](/help/en/oss/developer-reference/delete-multiple-objects) for all options.

## API reference

The tools above are built on the OSS RESTful API. Call the API directly if your use case requires custom request handling. Include the required signature in each request.

**Operation**

**Description**

[DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb)

Delete a single object

[DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb)

Delete up to 1,000 objects in one request
