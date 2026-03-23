OSS provides three ways to apply Image Processing (IMG) to image objects: object URLs, OSS SDKs, and the OSS API. Choose the method that fits your workflow.

**Method**

**Best for**

**Object URLs**

Quick sharing, browser previews, or CDN delivery of public images

**OSS SDKs**

Application-level processing — download processed images directly or generate signed URLs for private images

**OSS API**

Custom integrations where you build and sign requests yourself

**Important**

By default, accessing an image object via URL downloads the file instead of displaying it in a browser. To enable in-browser preview, map a custom domain name to your bucket and add a CNAME record. For details, see [Map custom domain names](/help/en/oss/manage-a-domain-map-custom-domain-names#concept-ozw-m2r-5fb).

## **Use object URLs**

Append IMG parameters or image style parameters directly to the object URL. The method you use depends on the object's access control list (ACL).

**Public images (public read or public read/write)**

For objects with a public read or public read/write ACL, add parameters to the URL without signing.

**URL formats:**

**Mode**

**URL format**

IMG parameters

`https://bucketname.endpoint/objectname?x-oss-process=image/action,param_value`

Image style

`https://bucketname.endpoint/objectname?x-oss-process=style/stylename`

**URL components:**

**Component**

**Description**

`https://bucketname.endpoint/objectname`

The full object URL. See [How do I get the URL of an uploaded object?](/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects#concept-39607-zh)

`x-oss-process=image/`

Fixed prefix that indicates IMG parameters follow.

`action,param_value`

The operation name and its parameters. Chain multiple operations with `/`. OSS applies them left to right.

`x-oss-process=style/`

Fixed prefix that indicates an image style follows.

`stylename`

The name of a style created in the OSS console. See [Create an image style](/help/en/oss/user-guide/image-styles#section-qu7-jfq-ckj).

**Processing order:** OSS applies IMG operations in the order they appear in the URL. For example, `image/resize,w_200/rotate,90` first resizes the image to 200 px wide, then rotates it 90 degrees.

**Examples:**

```
# IMG parameters: resize to 300 px wide, then set quality to 90
https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_300/quality,q_90

# Image style
https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=style/panda_style
```

**Custom delimiter:** If you configure a custom delimiter, it replaces `?x-oss-process=style/` to produce shorter URLs. For example, with `!` as the delimiter: `https://bucketname.endpoint/objectname!stylename`. Configure this in the "Configure source image protection" section of [Configure image styles](/help/en/oss/configure-image-styles#section-76l-28j-mbb).

**Private images**

Private objects require a signed URL — a time-limited URL that embeds your credentials in the signature. Without a valid signature, OSS returns an authorization error.

Use an OSS SDK to generate a signed URL with IMG parameters embedded. For other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;
import java.net.URL;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name in the full path.
        String objectName = "exampleobject.jpg";

        // Create an OSSClient instance.
        OSS ossClient = new OSSClientBuilder().build(endpoint, credentialsProvider);

        try {
            // Resize the image to 100 x 100 pixels and rotate it 90 degrees.
            String style = "image/resize,m_fixed,w_100,h_100/rotate,90";
            // Set the signed URL to expire in 10 minutes.
            Date expiration = new Date(new Date().getTime() + 1000 * 60 * 10);
            GeneratePresignedUrlRequest req = new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.GET);
            req.setExpiration(expiration);
            req.setProcess(style);
            URL signedUrl = ossClient.generatePresignedUrl(req);
            System.out.println(signedUrl);
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

</details>

<details> <summary>Python</summary>

```
# -*- coding: utf-8 -*-
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

# Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
# Specify the endpoint and bucket name.
bucket = oss2.Bucket(auth, 'https://oss-cn-hangzhou.aliyuncs.com', 'examplebucket')

key = 'exampledir/example.jpg'

# Resize the image to 100 x 100 pixels and rotate it 90 degrees.
style = 'image/resize,m_fixed,w_100,h_100/rotate,90'
# Generate a signed URL valid for 600 seconds.
url = bucket.sign_url('GET', key, 10 * 60, params={'x-oss-process': style})
print(url)
```

</details>

<details> <summary>Go</summary>

```
package main

import (
    "fmt"
    "os"
    "github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func HandleError(err error) {
    fmt.Println("Error:", err)
    os.Exit(-1)
}

func main() {
    // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
    provider, err := oss.NewEnvironmentVariableCredentialsProvider()
    if err != nil {
        fmt.Println("Error:", err)
        os.Exit(-1)
    }

    // Specify the endpoint of the region in which the bucket is located.
    client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider))
    if err != nil {
        HandleError(err)
    }

    bucketName := "examplebucket"
    bucket, err := client.Bucket(bucketName)
    if err != nil {
        HandleError(err)
    }

    ossImageName := "exampledir/example.jpg"
    // Generate a signed URL valid for 600 seconds with image/format,png applied.
    signedURL, err := bucket.SignURL(ossImageName, oss.HTTPGet, 600, oss.Process("image/format,png"))
    if err != nil {
        HandleError(err)
    } else {
        fmt.Println(signedURL)
    }
}
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require("ali-oss");

const client = new OSS({
  // Specify the region in which the bucket is located. Example: oss-cn-hangzhou.
  region: "oss-cn-hangzhou",
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Specify the name of the bucket.
  bucket: "examplebucket",
});

// Generate a signed URL valid for 600 seconds with image/resize,w_300 applied.
const signUrl = client.signatureUrl("example.png", {
  expires: 600,
  process: "image/resize,w_300",
});
console.log("signUrl=" + signUrl);
```

</details>

<details> <summary>PHP</summary>

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use OSS\Credentials\EnvironmentVariableCredentialsProvider;
use OSS\OssClient;

// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
$provider = new EnvironmentVariableCredentialsProvider();
// Specify the endpoint of the region in which the bucket is located.
$endpoint = "yourEndpoint";
// Specify the name of the bucket. Example: examplebucket.
$bucket = "examplebucket";
// Specify the full path of the object. Example: exampledir/exampleobject.jpg. Do not include the bucket name.
$object = "exampledir/exampleobject.jpg";

$config = array(
    "provider" => $provider,
    "endpoint" => $endpoint,
);
$ossClient = new OssClient($config);

// Generate a signed URL valid for 3,600 seconds that includes IMG parameters.
// The URL can be used directly in a browser to view the processed image.
$timeout = 3600;
$options = array(
    // Resize the image to 100 x 100 pixels.
    OssClient::OSS_PROCESS => "image/resize,m_fixed,h_100,w_100"
);

$signedUrl = $ossClient->signUrl($bucket, $object, $timeout, "GET", $options);
print("Signed URL: \n" . $signedUrl);
```

</details>

<details> <summary>C#</summary>

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket and object names.
var bucketName = "examplebucket";
var objectName = "exampledir/exampledir.jpg";

var client = new OssClient(endpoint, accessKeyId, accessKeySecret);
try
{
    // Resize the image to 100 x 100 pixels.
    var process = "image/resize,m_fixed,w_100,h_100";
    var req = new GeneratePresignedUriRequest(bucketName, objectName, SignHttpMethod.Get)
    {
        Expiration = DateTime.Now.AddHours(1),
        Process = process
    };
    var uri = client.GeneratePresignedUri(req);
    Console.WriteLine("Generate Presigned Uri:{0} with process:{1} succeeded ", uri, process);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Specify the endpoint of the region in which the bucket is located. */
    std::string Endpoint = "yourEndpoint";
    /* Specify the bucket and object names. */
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/example.jpg";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);

    /* Generate a signed URL with IMG parameters. */
    std::string Process = "image/resize,m_fixed,w_100,h_100";
    GeneratePresignedUrlRequest request(BucketName, ObjectName, Http::Get);
    request.setProcess(Process);
    auto outcome = client.GeneratePresignedUrl(request);

    if (outcome.isSuccess()) {
        std::cout << "Generated presigned URL: " << outcome.result() << std::endl;
    } else {
        std::cout << "Failed to generate presigned URL. Error code: " << outcome.error().Code()
                  << ", Message: " << outcome.error().Message()
                  << ", RequestId: " << outcome.error().RequestId() << std::endl;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

</details>

<details> <summary>C</summary>

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Specify the endpoint of the region in which the bucket is located. */
const char *endpoint = "yourEndpoint";
/* Specify the name of the bucket. Example: examplebucket. */
const char *bucket_name = "examplebucket";
/* Specify the full path of the object. Do not include the bucket name. Example: exampledir/exampleobject.txt. */
const char *object_name = "exampledir/exampleobject.txt";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    /* Specify whether to use CNAME. 0 = do not use CNAME. */
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
    aos_table_t *params = NULL;
    aos_http_request_t *req;
    char *url_str;
    apr_time_t now;
    int64_t expire_time;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Resize the image to 100 x 100 pixels. */
    params = aos_table_make(pool, 1);
    apr_table_set(params, OSS_PROCESS, "image/resize,m_fixed,w_100,h_100");
    req = aos_http_request_create(pool);
    req->method = HTTP_GET;
    req->query_params = params;

    /* Set the validity period to 10 minutes. */
    now = apr_time_now();
    expire_time = now / 1000000 + 10 * 60;

    url_str = oss_gen_signed_url(oss_client_options, &bucket, &object, expire_time, req);
    printf("url: %s\n", url_str);

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

## **Use OSS SDKs**

OSS SDKs let you apply IMG parameters or image styles to download a processed image directly to a file. Each SDK call specifies the process string the same way as in a URL, using `/` to chain multiple operations.

**Apply IMG parameters**

Set the `process` option to an `image/` string and call the SDK's get-object method. OSS applies the operations left to right.

For other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.model.GetObjectRequest;
import java.io.File;

public class Demo {
    public static void main(String[] args) throws Throwable {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampleobject.jpg";
        // Specify the local path to save the processed image.
        String pathName = "D:\\localpath\\example-new.jpg";

        OSS ossClient = new OSSClientBuilder().build(endpoint, credentialsProvider);

        try {
            // Resize the image to 100 x 100 pixels and rotate it 90 degrees.
            String style = "image/resize,m_fixed,w_100,h_100/rotate,90";
            GetObjectRequest request = new GetObjectRequest(bucketName, objectName);
            request.setProcess(style);
            ossClient.getObject(request, new File("D:\\localpath\\example-new.jpg"));
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

</details>

<details> <summary>Python</summary>

```
# -*- coding: utf-8 -*-
import os
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

# Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
bucket = oss2.Bucket(auth, 'https://oss-cn-hangzhou.aliyuncs.com', 'examplebucket')

key = 'exampledir/example.jpg'
new_pic = 'exampledir/newexample.jpg'

# Resize the image to 100 x 100 pixels and rotate it 90 degrees.
style = 'image/resize,m_fixed,w_100,h_100/rotate,90'
bucket.get_object_to_file(key, new_pic, process=style)
```

</details>

<details> <summary>Go</summary>

```
package main

import (
    "fmt"
    "os"
    "github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func HandleError(err error) {
    fmt.Println("Error:", err)
    os.Exit(-1)
}

func main() {
    // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
    provider, err := oss.NewEnvironmentVariableCredentialsProvider()
    if err != nil {
        fmt.Println("Error:", err)
        os.Exit(-1)
    }

    client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider))
    if err != nil {
        HandleError(err)
    }

    bucketName := "examplebucket"
    bucket, err := client.Bucket(bucketName)
    if err != nil {
        HandleError(err)
    }

    sourceImageName := "exampledir/example.jpg"
    targetImageName := "exampledir/newexample.jpg"
    // Resize the image to 100 x 100 pixels and rotate it 90 degrees.
    style := "image/resize,m_fixed,w_100,h_100/rotate,90"
    err = bucket.GetObjectToFile(sourceImageName, targetImageName, oss.Process(style))
    if err != nil {
        HandleError(err)
    }
}
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: 'yourbucketname'
});

// Resize the image to 100 x 100 pixels.
async function scale() {
  try {
    const result = await client.get('example.jpg', './example-resize.jpg', { process: 'image/resize,m_fixed,w_100,h_100' });
  } catch (e) {
    console.log(e);
  }
}

scale();

// Crop the image to 100 x 100 pixels starting from coordinate (100, 100).
async function cut() {
  try {
    const result = await client.get('example.jpg', './example-crop.jpg', { process: 'image/crop,w_100,h_100,x_100,y_100,r_1' });
  } catch (e) {
    console.log(e);
  }
}

cut();

// Rotate the image 90 degrees.
async function rotate() {
  try {
    const result = await client.get('example.jpg', './example-rotate.jpg', { process: 'image/rotate,90' });
  } catch (e) {
    console.log(e);
  }
}

rotate();

// Sharpen the image with a value of 100.
async function sharpen() {
  try {
    const result = await client.get('example.jpg', './example-sharpen.jpg', { process: 'image/sharpen,100' });
  } catch (e) {
    console.log(e);
  }
}

sharpen();

// Add a watermark.
async function watermark() {
  try {
    const result = await client.get('example.jpg', './example-watermark.jpg', { process: 'image/watermark,text_SGVsbG8g5Zu-54mH5pyN5YqhIQ' });
  } catch (e) {
    console.log(e);
  }
}

watermark();

// Convert the image format.
async function format() {
  try {
    const result = await client.get('example.jpg', './example-format.jpg', { process: 'image/format,png' });
  } catch (e) {
    console.log(e);
  }
}

format();

// Get image metadata.
async function info() {
  try {
    const result = await client.get('example.jpg', './example-info.txt', { process: 'image/info' });
  } catch (e) {
    console.log(e);
  }
}

info();
```

</details>

<details> <summary>PHP</summary>

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}
use OSS\Credentials\EnvironmentVariableCredentialsProvider;
use OSS\OssClient;

// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
$provider = new EnvironmentVariableCredentialsProvider();
$endpoint = "yourEndpoint";
$bucket = "examplebucket";
$object = "exampledir/exampleobject.jpg";
$download_file = "D:\\localpath\\example-new.jpg";

$config = array(
    "provider" => $provider,
    "endpoint" => $endpoint,
);
$ossClient = new OssClient($config);

// Resize the image to 100 x 100 pixels and rotate it 90 degrees.
$style = "image/resize,m_fixed,w_100,h_100/rotate,90";

$options = array(
    OssClient::OSS_FILE_DOWNLOAD => $download_file,
    OssClient::OSS_PROCESS => $style
);

$ossClient->getObject($bucket, $object, $options);
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/example.jpg";

    InitializeSdk();

    ClientConfiguration conf;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);

    /* Resize the image to 100 x 100 pixels and rotate it 90 degrees. */
    std::string Process = "image/resize,m_fixed,w_100,h_100/rotate,90";
    GetObjectRequest request(BucketName, ObjectName);
    request.setProcess(Process);
    auto outcome = client.GetObject(request);
    if (outcome.isSuccess()) {
        std::cout << "Image processed successfully." << std::endl;
    } else {
        std::cout << "Failed to process image. Error code: " << outcome.error().Code()
                  << ", Message: " << outcome.error().Message()
                  << ", RequestId: " << outcome.error().RequestId() << std::endl;
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

const char *endpoint = "yourEndpoint";
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
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
    aos_string_t file;
    aos_table_t *headers = NULL;
    aos_table_t *params = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Resize the image to 100 x 100 pixels and rotate it 90 degrees. */
    params = aos_table_make(pool, 1);
    apr_table_set(params, OSS_PROCESS, "image/resize,m_fixed,w_100,h_100/rotate,90");

    aos_str_set(&file, "yourLocalFileName");
    resp_status = oss_get_object_to_file(oss_client_options, &bucket, &object, headers, params, &file, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("get object to file succeeded\n");
    } else {
        printf("get object to file failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

**Apply image styles**

An image style bundles multiple IMG parameters into a single named preset, making it easy to apply the same transformations across many images. This approach lets you reuse transformations, shorten complex URLs, and hide transformation details from delivery URLs. Create styles in the OSS console, then reference them by name in SDK calls.

All examples use `style/yourCustomStyleName` as the process string. Replace `yourCustomStyleName` with the name of a style you created in the OSS console.

For other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.model.GetObjectRequest;
import java.io.File;

public class Demo {
    public static void main(String[] args) throws Throwable {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampleobject.jpg";
        String pathName = "D:\\localpath\\example-new.jpg";

        OSS ossClient = new OSSClientBuilder().build(endpoint, credentialsProvider);

        try {
            // Replace yourCustomStyleName with the name of the image style you created in the OSS console.
            String style = "style/yourCustomStyleName";
            GetObjectRequest request = new GetObjectRequest(bucketName, objectName);
            request.setProcess(style);
            ossClient.getObject(request, new File(pathName));
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

</details>

<details> <summary>Python</summary>

```
# -*- coding: utf-8 -*-
import os
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

# Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
bucket = oss2.Bucket(auth, 'https://oss-cn-hangzhou.aliyuncs.com', 'examplebucket')

key = 'exampledir/example.jpg'
new_pic = 'exampledir/newexample.jpg'

# Replace yourCustomStyleName with the name of the image style you created in the OSS console.
style = 'style/yourCustomStyleName'
bucket.get_object_to_file(key, new_pic, process=style)
```

</details>

<details> <summary>Go</summary>

```
package main

import (
    "fmt"
    "github.com/aliyun/aliyun-oss-go-sdk/oss"
    "os"
)

func HandleError(err error) {
    fmt.Println("Error:", err)
    os.Exit(-1)
}

func main() {
    // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
    provider, err := oss.NewEnvironmentVariableCredentialsProvider()
    if err != nil {
        fmt.Println("Error:", err)
        os.Exit(-1)
    }

    client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider))
    if err != nil {
        fmt.Println("Error:", err)
        os.Exit(-1)
    }

    bucketName := "examplebucket"
    bucket, err := client.Bucket(bucketName)
    if err != nil {
        HandleError(err)
    }

    sourceImageName := "example/example.jpg"
    targetImageName := "D:\\localpath\\newexample.jpg"
    // Replace yourCustomStyleName with the name of the image style you created in the OSS console.
    style := "style/yourCustomStyleName"
    err = bucket.GetObjectToFile(sourceImageName, targetImageName, oss.Process(style))
    if err != nil {
        HandleError(err)
    }
}
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: 'yourbucketname'
});

// Resize the image to 100 x 100 pixels.
async function scale() {
  try {
    const result = await client.get('example.jpg', './example-resize.jpg', { process: 'image/resize,m_fixed,w_100,h_100' });
  } catch (e) {
    console.log(e);
  }
}

scale();

// Crop the image to 100 x 100 pixels starting from coordinate (100, 100).
async function cut() {
  try {
     const result = await client.get('example.jpg', './example-crop.jpg', { process: 'image/crop,w_100,h_100,x_100,y_100,r_1'});
  } catch (e) {
    console.log(e);
  }
}

cut();

// Rotate the image 90 degrees.
async function rotate() {
  try {
    const result = await client.get('example.jpg', './example-rotate.jpg', { process: 'image/rotate,90'});
  } catch (e) {
    console.log(e);
  }
}

rotate();

// Sharpen the image with a value of 100.
async function sharpen() {
  try {
    const result = await client.get('example.jpg', './example-sharpen.jpg', { process: 'image/sharpen,100'});
  } catch (e) {
    console.log(e);
  }
}

sharpen();

// Add a watermark.
async function watermark() {
  try {
    const result = await client.get('example.jpg', './example-watermark.jpg', { process: 'image/watermark,text_SGVsbG8g5Zu-54mH5pyN5YqhIQ'});
  } catch (e) {
    console.log(e);
  }
}

watermark();

// Convert the image format.
async function format() {
  try {
    const result = await client.get('example.jpg', './example-format.jpg', { process: 'image/format,png'});
  } catch (e) {
    console.log(e);
  }
}

format();

// Get image metadata.
async function info() {
  try {
    const result = await client.get('example.jpg', './example-info.txt', {process: 'image/info'});
  } catch (e) {
    console.log(e);
  }
}

info();
```

</details>

<details> <summary>PHP</summary>

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}
use OSS\Credentials\EnvironmentVariableCredentialsProvider;
use OSS\OssClient;

// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
$provider = new EnvironmentVariableCredentialsProvider();
$endpoint = "yourEndpoint";
$bucket = "examplebucket";
$object = "exampledir/exampleobject.jpg";
$download_file = "D:\\localpath\\example-new.jpg";

$config = array(
    "provider" => $provider,
    "endpoint" => $endpoint,
);
$ossClient = new OssClient($config);

// Replace yourCustomStyleName with the name of the image style you created in the OSS console.
$style = "style/yourCustomStyleName";

$options = array(
    OssClient::OSS_FILE_DOWNLOAD => $download_file,
    OssClient::OSS_PROCESS => $style
);

$ossClient->getObject($bucket, $object, $options);
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/example.jpg";

    InitializeSdk();

    ClientConfiguration conf;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);

    /* Replace yourCustomStyleName with the name of the image style you created in the OSS console. */
    std::string Process = "style/yourCustomStyleName";
    GetObjectRequest request(BucketName, ObjectName);
    request.setProcess(Process);
    auto outcome = client.GetObject(request);
    if (outcome.isSuccess()) {
        std::cout << "Image processed successfully." << std::endl;
    } else {
        std::cout << "Failed to process image. Error code: " << outcome.error().Code()
                  << ", Message: " << outcome.error().Message()
                  << ", RequestId: " << outcome.error().RequestId() << std::endl;
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

const char *endpoint = "yourEndpoint";
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
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
    aos_string_t file;
    aos_table_t *headers = NULL;
    aos_table_t *params = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Replace yourCustomStyleName with the name of the image style you created in the OSS console. */
    params = aos_table_make(pool, 1);
    apr_table_set(params, OSS_PROCESS, "style/yourCustomStyleName");

    aos_str_set(&file, "yourLocalFileName");
    resp_status = oss_get_object_to_file(oss_client_options, &bucket, &object, headers, params, &file, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("get object to file succeeded\n");
    } else {
        printf("get object to file failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

## **Use the OSS API**

For custom integrations, add IMG parameters or image style parameters directly to GetObject requests. Include the signature calculation in your code. For details, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

**IMG parameters:**

```
GET /oss.jpg?x-oss-process=image/resize,w_100 HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Date: Fri, 28 Oct 2022 06:40:10 GMT
Authorization: OSS qn6qrrqxo2oawuk53otf****:UNQDb7GapEgJkcde6OhZ9J****
```

**Image style:**

```
GET /oss.jpg?x-oss-process=style/styleexample HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Date: Fri, 28 Oct 2022 06:40:10 GMT
Authorization: OSS qn6qrrawuk53oqxo2otf****:UNapEgQDb7GJkcde6OhZ9J****
```

## Save processed images

By default, IMG does not save processed images. Add the `saveas` parameter to an IMG request to persist the result to a specified bucket. For details, see [Save processed images](/help/en/oss/user-guide/save-processed-images#concept-bf1-ssc-wdb).
