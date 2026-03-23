When uploading continuous data streams — such as video surveillance feeds, live broadcasts, or application logs — you typically need to split data into many small objects and manage metadata to track them. Append upload eliminates this complexity by letting you add content directly to the end of a single appendable object. Each append operation completes immediately, and the new data is readable right away.

## How it works

OSS distinguishes three object types based on how they are created:

**Object type**

**Created by**

**Modifiable after upload?**

Normal object

Simple upload

No — overwrite only

Multipart object

Multipart upload

No — overwrite only

Appendable object

Append upload (AppendObject)

Yes — append to end

Once an object is created, its type is fixed. A Normal object cannot be appended to, and an appendable object cannot be overwritten using simple upload.

Each AppendObject call requires an **append position** — the byte offset where new data starts. For the first append, set the position to `0`. Each response returns the next position, which equals the current object length. Pass this value as the position for the next append.

## Use cases

-   **Video surveillance and live streaming**: Upload video data to the same object as it is generated, instead of splitting the stream into many small objects.
    
-   **Application logging**: Continuously append log entries to a single object without managing file chunking.
    

## Limitations

**Constraint**

**Detail**

Maximum object size

5 GB

Unsupported storage classes

Cold Archive, Deep Cold Archive

Upload callbacks

Not supported

## Usage notes

-   If the object does not exist, AppendObject creates a new appendable object.
    
-   If the object exists as an appendable object and the specified position equals the current object length, the data is appended successfully.
    
-   If the object exists as an appendable object but the specified position does not equal the current object length, OSS returns a `PositionNotEqualToLength` error.
    
-   If the object is a Normal object (created by simple upload), OSS returns an `ObjectNotAppendable` error.
    
-   You can set `x-oss-meta-*` custom metadata headers only on the first AppendObject call (when the object is created). You cannot include these headers in subsequent append operations.
    

## Prerequisites

Before you begin, ensure that you have:

-   A bucket. See [Create buckets](/help/en/oss/getting-started/create-buckets-6)
    

## Append an object

The following sections show how to use append upload with OSS SDKs, the ossutil command line interface (CLI), and the REST API.

**Use an SDK**

All examples use the AppendObject API operation. The first append starts at position `0`; subsequent appends use the `NextPosition` value returned in each response.

<details> <summary>Python</summary>

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="append object sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')
parser.add_argument('--key', help='The name of the object.', required=True)

def main():
    args = parser.parse_args()

    # Obtain access credentials from environment variables.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    data1 = b'hello'
    data2 = b' world'

    # First append: position 0.
    result = client.append_object(oss.AppendObjectRequest(
        bucket=args.bucket,
        key=args.key,
        position=0,
        body=data1,
    ))

    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' next position: {result.next_position},'
    )

    # Second append: use the next position from the previous response.
    result = client.append_object(oss.AppendObjectRequest(
        bucket=args.bucket,
        key=args.key,
        position=result.next_position,
        body=data2,
    ))

    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' next position: {result.next_position},'
    )

if __name__ == "__main__":
    main()
```

</details>

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.AppendObjectRequest;
import com.aliyun.oss.model.AppendObjectResult;
import com.aliyun.oss.model.ObjectMetadata;
import java.io.ByteArrayInputStream;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used as an example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before running the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
        String objectName = "exampledir/exampleobject.txt";
        String content1 = "Hello OSS A \n";
        String content2 = "Hello OSS B \n";
        String content3 = "Hello OSS C \n";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
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
            ObjectMetadata meta = new ObjectMetadata();
            meta.setContentType("text/plain");

            // First append: position 0.
            AppendObjectRequest appendObjectRequest = new AppendObjectRequest(bucketName, objectName, new ByteArrayInputStream(content1.getBytes()), meta);
            appendObjectRequest.setPosition(0L);
            AppendObjectResult appendObjectResult = ossClient.appendObject(appendObjectRequest);

            // Second append: use the next position from the previous response.
            appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
            appendObjectRequest.setInputStream(new ByteArrayInputStream(content2.getBytes()));
            appendObjectResult = ossClient.appendObject(appendObjectRequest);

            // Third append.
            appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
            appendObjectRequest.setInputStream(new ByteArrayInputStream(content3.getBytes()));
            appendObjectResult = ossClient.appendObject(appendObjectRequest);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
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
	"strings"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

var (
	region     string
	bucketName string
	objectName string
)

func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
	flag.StringVar(&objectName, "object", "", "The name of the object.")
}

func main() {
	flag.Parse()

	var (
		position = int64(0)
	)

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

	content := "hi append object"

	// First append: position 0.
	request := &oss.AppendObjectRequest{
		Bucket:   oss.Ptr(bucketName),
		Key:      oss.Ptr(objectName),
		Position: oss.Ptr(position),
		Body:     strings.NewReader(content),
	}

	result, err := client.AppendObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to append object %v", err)
	}

	// Second append: use NextPosition from the first response.
	request = &oss.AppendObjectRequest{
		Bucket:   oss.Ptr(bucketName),
		Key:      oss.Ptr(objectName),
		Position: oss.Ptr(result.NextPosition),
		Body:     strings.NewReader("hi append object"),
	}

	result, err = client.AppendObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to append object %v", err)
	}

	log.Printf("append object result:%#v\n", result)
}
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require('ali-oss')

const client = new OSS({
  // Specify the region in which the bucket is located. For example, if your bucket is in the China (Hangzhou) region, set the region to oss-cn-hangzhou.
  region: 'yourRegion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that you have configured environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Specify the name of the bucket. Example: examplebucket.
  bucket: 'examplebucket',
});

async function append () {
  // First append. The response includes the position for the next append.
  // Specify the full path of the object. Do not include the bucket name. Example: destfolder/examplefile.txt.
  // Specify the full path of the local file. Example: /users/local/examplefile.txt.
  let result = await client.append('objectName', 'localFile')

  // Second append. Use the next position from the previous response.
  result = await client.append('objectName', 'localFile', {
    position: result.nextAppendPosition
  })
}

append();
```

</details>

<details> <summary>PHP</summary>

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False],
    "bucket"   => ['help' => 'The name of the bucket', 'required' => True],
    "key"      => ['help' => 'The name of the object', 'required' => True],
];

$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

$options = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help'];
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];

// Obtain access credentials from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$data = 'Hello Append Object';

// First append: position 0.
$request = new Oss\Models\AppendObjectRequest(bucket: $bucket, key: $key);
$request->body = Oss\Utils::streamFor($data);
$request->position = 0;

$result = $client->appendObject($request);

printf(
    'status code: ' . $result->statusCode . PHP_EOL .
    'request id: ' . $result->requestId . PHP_EOL .
    'next append position: ' . $result->nextPosition . PHP_EOL
);
```

</details>

<details> <summary>C#</summary>

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the name of the bucket. Example: examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. Do not include the bucket name. Example: exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the full path of the local file. Example: D:\\localpath\\examplefile.txt.
var localFilename = "D:\\localpath\\examplefile.txt";
// Specify the region in which the bucket is located. For example, cn-hangzhou.
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
c.SetRegion(region);

// For the first append, the position is 0. Subsequent positions come from the previous response.
long position = 0;
try
{
    var metadata = client.GetObjectMetadata(bucketName, objectName);
    position = metadata.ContentLength;
}
catch (Exception) { }
try
{
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        var request = new AppendObjectRequest(bucketName, objectName)
        {
            ObjectMetadata = new ObjectMetadata(),
            Content = fs,
            Position = position
        };
        var result = client.AppendObject(request);
        position = result.NextAppendPosition;
        Console.WriteLine("Append object succeeded, next append position:{0}", position);
    }
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        var request = new AppendObjectRequest(bucketName, objectName)
        {
            ObjectMetadata = new ObjectMetadata(),
            Content = fs,
            Position = position
        };
        var result = client.AppendObject(request);
        position = result.NextAppendPosition;
        Console.WriteLine("Append object succeeded, next append position:{0}", position);
    }
}
catch (Exception ex)
{
    Console.WriteLine("Append object failed, {0}", ex.Message);
}
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Specify the endpoint of the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
    std::string Endpoint = "yourEndpoint";
    // Specify the region. For example, cn-hangzhou.
    std::string Region = "yourRegion";
    // Specify the bucket name. Example: examplebucket.
    std::string BucketName = "examplebucket";
    // Specify the full path of the object. Do not include the bucket name. Example: exampledir/exampleobject.txt.
    std::string ObjectName = "exampledir/exampleobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    // Obtain access credentials from environment variables.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    auto meta = ObjectMetaData();
    meta.setContentType("text/plain");

    // First append: position 0.
    std::shared_ptr<std::iostream> content1 = std::make_shared<std::stringstream>();
    *content1 <<"Thank you for using Aliyun Object Storage Service!";
    AppendObjectRequest request(BucketName, ObjectName, content1, meta);
    request.setPosition(0L);

    auto result = client.AppendObject(request);

    if (!result.isSuccess()) {
        std::cout << "AppendObject fail" <<
        ",code:" << result.error().Code() <<
        ",message:" << result.error().Message() <<
        ",requestId:" << result.error().RequestId() << std::endl;
        return -1;
    }

    // Second append: use the length from the previous response as the next position.
    std::shared_ptr<std::iostream> content2 = std::make_shared<std::stringstream>();
    *content2 <<"Thank you for using Aliyun Object Storage Service!";
    auto position = result.result().Length();
    AppendObjectRequest appendObjectRequest(BucketName, ObjectName, content2);
    appendObjectRequest.setPosition(position);

    auto outcome = client.AppendObject(appendObjectRequest);

    if (!outcome.isSuccess()) {
        std::cout << "AppendObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
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
/* Specify the endpoint. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Specify the bucket name. Example: examplebucket. */
const char *bucket_name = "examplebucket";
/* Specify the full path of the object. Do not include the bucket name. Example: exampledir/exampleobject.txt. */
const char *object_name = "exampledir/exampleobject.txt";
const char *object_content = "More than just cloud.";
/* Specify the region. For example, cn-hangzhou. */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. */
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
    aos_string_t object;
    aos_list_t buffer;
    int64_t position = 0;
    char *next_append_position = NULL;
    aos_buf_t *content = NULL;
    aos_table_t *headers1 = NULL;
    aos_table_t *headers2 = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    headers1 = aos_table_make(pool, 0);

    /* Get the current object length to determine the starting position. */
    resp_status = oss_head_object(oss_client_options, &bucket, &object, headers1, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        next_append_position = (char*)(apr_table_get(resp_headers, "x-oss-next-append-position"));
        position = atoi(next_append_position);
    }

    /* Append the content. */
    headers2 = aos_table_make(pool, 0);
    aos_list_init(&buffer);
    content = aos_buf_pack(pool, object_content, strlen(object_content));
    aos_list_add_tail(&content->node, &buffer);
    resp_status = oss_append_object_from_buffer(oss_client_options, &bucket, &object, position, &buffer, headers2, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("append object from buffer succeeded\n");
    } else {
        printf("append object from buffer failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

<details> <summary>Android (Java)</summary>

```
// Specify the name of the bucket, the full path of the object, and the full path of the local file.
// Do not include the bucket name in the full path of the object.
AppendObjectRequest append = new AppendObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

ObjectMetadata metadata = new ObjectMetadata();
metadata.setContentType("text/plain");
append.setMetadata(metadata);

// Set the starting position for the first append.
append.setPosition(0);

// Track upload progress.
append.setProgressCallback(new OSSProgressCallback<AppendObjectRequest>() {
    @Override
    public void onProgress(AppendObjectRequest request, long currentSize, long totalSize) {
        Log.d("AppendObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});

// Perform the append operation asynchronously.
OSSAsyncTask task = oss.asyncAppendObject(append, new OSSCompletedCallback<AppendObjectRequest, AppendObjectResult>() {
    @Override
    public void onSuccess(AppendObjectRequest request, AppendObjectResult result) {
        Log.d("AppendObject", "AppendSuccess");
        Log.d("NextPosition", "" + result.getNextPosition());
    }

    @Override
    public void onFailure(AppendObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});
```

</details>

<details> <summary>Objective-C</summary>

```
OSSAppendObjectRequest * append = [OSSAppendObjectRequest new];
// bucketName: the name of the bucket.
// objectKey: the full path of the object in OSS, including the file extension. Example: abc/efg/123.jpg.
append.bucketName = @"<bucketName>";
append.objectKey = @"<objectKey>";
// Set the starting position for the first append.
append.appendPosition = 0;
NSString * docDir = [self getDocumentDirectory];
append.uploadingFileURL = [NSURL fileURLWithPath:@"<filepath>"];
// Track upload progress.
append.uploadProgress = ^(int64_t bytesSent, int64_t totalByteSent, int64_t totalBytesExpectedToSend) {
    NSLog(@"%lld, %lld, %lld", bytesSent, totalByteSent, totalBytesExpectedToSend);
};
OSSTask * appendTask = [client appendObject:append];
[appendTask continueWithBlock:^id(OSSTask *task) {
    NSLog(@"objectKey: %@", append.objectKey);
    if (!task.error) {
        NSLog(@"append object success!");
        OSSAppendObjectResult * result = task.result;
        NSString * etag = result.eTag;
        long nextPosition = result.xOssNextAppendPosition;
    } else {
        NSLog(@"append object failed, error: %@" , task.error);
    }
    return nil;
}];
```

</details>

<details> <summary>Ruby</summary>

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  # Specify the endpoint. For example, the China (Hangzhou) region endpoint.
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  # Obtain access credentials from environment variables.
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

# Specify the name of the bucket. Example: examplebucket.
bucket = client.get_bucket('examplebucket')

# First append at position 0.
next_pos = bucket.append_object('my-object', 0) do |stream|
  100.times { |i| stream << i.to_s }
end
# Subsequent appends use the position returned by the previous call.
next_pos = bucket.append_object('my-object', next_pos, :file => 'local-file-1')
next_pos = bucket.append_object('my-object', next_pos, :file => 'local-file-2')
```

</details>

For other SDK languages, see [SDK overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

**Use ossutil**

The following command appends content to the `exampleobject` object as a string:

```
ossutil api append-object --bucket examplebucket --key exampleobject --position 0 --body "hi oss"
```

For installation instructions, see [Install ossutil](/help/en/oss/install-ossutil2#DAS). For the full command reference, see [append-object](/help/en/oss/developer-reference/append-object).

### Use the REST API

To call AppendObject directly, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).

## FAQ

### **Are there file type restrictions for append upload?**

No. AppendObject accepts only binary streams and has no requirements for file type.

**How do I convert a non-appendable object to an appendable object?**

OSS does not support direct conversion. Use this workaround instead:

1.  Create a new, empty appendable object using AppendObject.
    
2.  Download the original object and read its content.
    
3.  Append that content to the new object using AppendObject.
    

**Important**

After the conversion, verify that the new object is accessible and its content is complete.

## What's next

-   [Simple upload](/help/en/oss/user-guide/simple-upload#concept-bws-3bb-5db)
    
-   [Multipart upload](/help/en/oss/user-guide/multipart-upload#concept-wzs-2gb-5db)
    
-   [AppendObject API reference](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db)
