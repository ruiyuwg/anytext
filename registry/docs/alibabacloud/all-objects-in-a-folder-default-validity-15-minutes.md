OSS objects are private by default. Generate a presigned URL to give a third party temporary access to download or preview a specific file—no account or permissions required on their end. The URL carries an embedded signature and expires after a validity period you set at generation time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9062472671/CAEQTxiBgMDyh8uu0xkiIGE3MmYwMjExYmM2YzQ0YjlhNDExZmNlMjlmNGZkNjY04751395_20241112152822.507.svg)

## How it works

Presigned URL generation uses AccessKey-based encryption and query parameter concatenation:

1.  **Permission check** — The caller must have the `oss:GetObject` permission for the target object.
    
2.  **Local signature** — Using your AccessKey ID and AccessKey Secret, OSS encrypts the object path, expiration time, and related parameters to produce a signature (`x-oss-signature`).
    
3.  **Parameter append** — Signature parameters (`x-oss-date`, `x-oss-expires`, `x-oss-credential`, `x-oss-signature-version`, `x-oss-signature`) are appended to the object URL as a query string.
    
4.  **URL assembly** — The result is the complete presigned URL.
    

**URL format:**

```
https://<BucketName>.<Endpoint>/<ObjectName>?<signature parameters>
```

**Example:**

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-process=image%2Fresize%2Cp_10&x-oss-date=20241115T095058Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************%2F20241115%2Fcn-hangzhou%2Foss%2Faliyun_v4_request&x-oss-signature=6e7a*********************************
```

For the full signature specification, see [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket with at least one object
    
-   The `oss:GetObject` permission on the target object
    
-   (For online preview) A [custom domain name attached to the bucket](/help/en/oss/manage-a-domain-map-custom-domain-names#concept-ozw-m2r-5fb)
    

## Get a download link

Generate a presigned URL using the OSS default endpoint. Third parties can use this URL to download the file directly.

### OSS Management Console

In the [OSS Management Console](https://oss.console.alibabacloud.com/), go to the **Files** list of the target bucket, click the target file, and then click **Copy File URL** in the details panel on the right. The generated URL has a default validity period of 32,400 seconds (9 hours).

### SDK

All SDK examples below use Signature Version 4, which OSS SDK 2.0 applies by default. Credentials are loaded from the `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables.

## Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

import java.net.URL;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Endpoint of the region where the bucket is located. Example: China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Credentials loaded from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Full object path, without the bucket name. Example: exampleobject.txt.
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
            // Validity period: 1 hour (in milliseconds).
            Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
            URL url = ossClient.generatePresignedUrl(bucketName, objectName, expiration);
            System.out.println(url);
        } catch (OSSException oe) {
            System.out.println("Error Code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
        } catch (ClientException ce) {
            System.out.println("Error: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

For more information, see [Download files using presigned URLs in Java](/help/en/oss/developer-reference/download-using-a-presigned-url#88a40d16bczq8).

## Python

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="presign get object sample")
parser.add_argument('--region', required=True)
parser.add_argument('--bucket', required=True)
parser.add_argument('--endpoint')
parser.add_argument('--key', required=True)

def main():
    args = parser.parse_args()
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)
    pre_result = client.presign(
        oss.GetObjectRequest(
            bucket=args.bucket,
            key=args.key,
        )
    )
    print(f'method: {pre_result.method},'
          f' expiration: {pre_result.expiration.strftime("%Y-%m-%dT%H:%M:%S.000Z")},'
          f' url: {pre_result.url}')
    for key, value in pre_result.signed_headers.items():
        print(f'signed headers key: {key}, signed headers value: {value}')

if __name__ == "__main__":
    main()
```

For more information, see [Download files using presigned URLs in Python](/help/en/oss/developer-reference/python-download-using-a-presigned-url#88a40d16bczq8).

## Go

```
package main

import (
    "context"
    "flag"
    "log"
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
    if len(bucketName) == 0 || len(region) == 0 || len(objectName) == 0 {
        flag.PrintDefaults()
        log.Fatalf("invalid parameters: region, bucket, and object are required")
    }

    cfg := oss.LoadDefaultConfig().
        WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
        WithRegion(region)

    client := oss.NewClient(cfg)

    result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
        Bucket: oss.Ptr(bucketName),
        Key:    oss.Ptr(objectName),
    },
        oss.PresignExpires(10*time.Minute),
    )
    if err != nil {
        log.Fatalf("failed to presign: %v", err)
    }

    log.Printf("method: %v", result.Method)
    log.Printf("expiration: %v", result.Expiration)
    log.Printf("url: %v", result.URL)
}
```

For more information, see [Download files using presigned URLs in Go](/help/en/oss/developer-reference/v2-presign-download#98efee5d0bij5).

## Node.js

```
const OSS = require("ali-oss");

async function generateSignatureUrl(fileName) {
    const client = await new OSS({
        accessKeyId: process.env.OSS_ACCESS_KEY_ID,
        accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
        bucket: 'examplebucket',
        region: 'oss-cn-hangzhou',
        // Use HTTPS to prevent browsers from blocking the download link.
        secure: true,
        authorizationV4: true
    });

    return await client.signatureUrlV4('GET', 3600, {
        headers: {}
    }, fileName);
}

generateSignatureUrl('yourFileName').then(url => {
    console.log('Generated URL:', url);
}).catch(err => {
    console.error('Error:', err);
});
```

For more information, see [Download files using presigned URLs in Node.js](/help/en/oss/developer-reference/download-objects-using-a-presigned-url-generated-with-oss-sdk-for-node-js#88a40d16bczq8).

## PHP

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region where the bucket is located.', 'required' => true],
    "endpoint" => ['help' => 'The OSS endpoint.', 'required' => false],
    "bucket"   => ['help' => 'The bucket name.', 'required' => true],
    "key"      => ['help' => 'The object name.', 'required' => true],
];
$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] && empty($options[$key])) {
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
$request = new Oss\Models\GetObjectRequest(bucket: $options["bucket"], key: $options["key"]);
$result = $client->presign($request);

print('url: ' . $result->url . PHP_EOL);
```

For more information, see [Download files using presigned URLs in PHP](/help/en/oss/developer-reference/download-using-a-presigned-url-for-php-sdk-v2).

**Other languages:** [.NET](/help/en/oss/developer-reference/download-objects-using-presigned-urls-generated-with-oss-sdk-for-csharp-v1) | [Android](/help/en/oss/developer-reference/authorize-access#codeblock-dx8-xp0-fp5) | [iOS](/help/en/oss/developer-reference/authorize-access-4#codeblock-xcf-j6k-b4v) | [C++](/help/en/oss/developer-reference/authorized-access-4#codeblock-7c1-3sc-5om) | [Ruby](/help/en/oss/developer-reference/authorized-access-2#codeblock-0wh-ui2-gnu) | [C](/help/en/oss/developer-reference/authorized-access-1#bwiree)

### ossutil

Generate a download link with the default validity period of 15 minutes:

```
ossutil presign oss://examplebucket/example.txt
```

For more examples, see [presign (generate presigned URLs)](/help/en/oss/developer-reference/presign-generate-presigned-url).

### ossbrowser

ossbrowser supports the same object-level operations as the console. Follow the on-screen instructions to generate a presigned URL. For setup instructions, see [Common operations](/help/en/oss/developer-reference/use-ossbrowser#concept-xmg-h33-wdb).

## Get an online preview link

To generate a presigned URL that opens for inline preview in a browser rather than triggering a download, you must first [attach a custom domain name to your bucket](/help/en/oss/user-guide/access-buckets-via-custom-domain-names). Use that custom domain as the endpoint when generating the URL.

> Without a custom domain name, most browsers treat OSS default-domain URLs as downloads due to security restrictions.

### OSS Management Console

1.  Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/).[OSS console](https://oss.console.alibabacloud.com/)
    
2.  In the left navigation pane, click **Buckets**, then click the target bucket.
    
3.  Choose **Object Management** > **Objects**, then click the object name.
    
4.  In the **View Details** panel, select your custom domain name in the **Custom Domain Name** field, and click **Copy Object URL**.
    

![2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4550341071/p735128.png)

### ossbrowser

Log on to ossbrowser using the custom domain name, then generate the URL from the object details. For download instructions, see [Graphical management tool ossbrowser 1.0](/help/en/oss/developer-reference/graphical-management-tools-ossbrowser-1-0/).

### SDK (using a custom domain name)

Pass your custom domain name as the endpoint and enable CNAME support when creating the OSS client.

## Java

```
// Specify a custom domain name as the endpoint.
String endpoint = "https://static.example.com"; // Replace with your custom domain name.
String region = "cn-hangzhou";
String bucketName = "examplebucket";
String objectName = "exampleobject.txt";

EnvironmentVariableCredentialsProvider credentialsProvider =
    CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
clientBuilderConfiguration.setSupportCname(true);   // Enable CNAME
clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);

OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

try {
    Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
    GeneratePresignedUrlRequest request =
        new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.GET);
    request.setExpiration(expiration);
    URL signedUrl = ossClient.generatePresignedUrl(request);
    System.out.println("Preview URL: " + signedUrl);
} finally {
    if (ossClient != null) ossClient.shutdown();
}
```

## Python

```
cfg = oss.config.load_default()
cfg.credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
cfg.region = args.region
cfg.endpoint = "http://static.example.com"  # Replace with your custom domain name.
cfg.use_cname = True                         # Enable CNAME

client = oss.Client(cfg)
pre_result = client.presign(
    oss.GetObjectRequest(bucket=args.bucket, key=args.key)
)
print(f'url: {pre_result.url}')
```

## Go

```
cfg := oss.LoadDefaultConfig().
    WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
    WithRegion(region).
    WithEndpoint("http://static.example.com"). // Replace with your custom domain name.
    WithUseCName(true)                          // Enable CNAME

client := oss.NewClient(cfg)
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket: oss.Ptr(bucketName),
    Key:    oss.Ptr(objectName),
},
    oss.PresignExpires(10*time.Minute),
)
```

## Node.js

```
const client = await new OSS({
    endpoint: 'http://static.example.com',  // Replace with your custom domain name.
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: 'examplebucket',
    region: 'oss-cn-hangzhou',
    authorizationV4: true,
    cname: true  // Enable CNAME
});
```

## PHP

```
$cfg->setEndpoint("http://static.example.com"); // Replace with your custom domain name.
$cfg->setUseCname(true);                         // Enable CNAME
```

### ossutil (with custom domain name)

```
ossutil presign oss://examplebucket/exampleobject.txt \
  --endpoint "http://static.example.com" \
  --addressing-style "cname"
```

To avoid specifying the endpoint each time, add the custom domain name to the [ossutil configuration file](/help/en/oss/configure-ossutil2#ef49a3892ashz).

### If the file still doesn't preview in the browser

Check the following:

-   **\`Content-Type\` mismatch** — If the file's `Content-Type` doesn't match its actual type, the browser downloads it instead of rendering it. Verify the mapping in [How to set Content-Type (MIME)?](/help/en/oss/user-guide/configure-the-content-type-header#section-dje-nhg-5if), then update the metadata if needed. See [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/).
    
-   **\`Content-Disposition\` set to \`attachment\`** — This forces a download regardless of URL. Change it to `inline` in the object metadata. See [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/#concept-lkf-swy-5db).
    
-   **Stale CDN cache** — If you use CDN acceleration and changed the object metadata, refresh the CDN cache so the new configuration takes effect.
    

## Force a file to download

If the presigned URL opens for preview in a browser but you need it to download instead, use one of these methods. Method 1 takes priority over Method 2.

### Method 1: Force download for a single URL

Set the `response-content-disposition` parameter to `attachment` when generating the URL. This applies only to that specific URL.

## Java

```
// Add to GeneratePresignedUrlRequest before generating the URL.
request.getResponseHeaders().setContentDisposition("attachment");
```

## Python

```
pre_result = client.presign(
    oss.GetObjectRequest(
        bucket=args.bucket,
        key=args.key,
        response_content_disposition="attachment",
    )
)
```

## Go

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket:                     oss.Ptr(bucketName),
    Key:                        oss.Ptr(objectName),
    ResponseContentDisposition: oss.Ptr("attachment"),
})
```

### Method 2: Force download for all access (via metadata)

Modify the `Content-Disposition` field in the object's metadata to `attachment`. This applies to every access of the file, regardless of the URL used.

In the [OSS Management Console](https://oss.console.alibabacloud.com/), find the target file, click **Set File Metadata** in the file details panel, set `Content-Disposition` to `attachment`, and click **OK**.

Alternatively, update the field using the SDK or ossutil. See [Manage file metadata](/help/en/oss/user-guide/manage-object-metadata-10/).

To also customize the filename shown in the browser's save dialog, see [Customize the download filename](#section-914f30cf).

## Get a link to a specific version

Generate a presigned URL for a specific object version in a [versioning-enabled bucket](/help/en/oss/user-guide/overview-78/).

### OSS Management Console

1.  Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/).[OSS Management Console](https://oss.console.alibabacloud.com/)
    
2.  Go to the **Files** tab of the target bucket. In the upper-right corner, switch **Historical Version** to **Show**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6760472671/p979063.png)
    
3.  Click the filename of the target version, then **Copy** the URL from the details page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6760472671/p979069.png)
    

### SDK

Add the version ID to the presign request:

## Java

```
String versionId = "CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3****";
Map<String, String> queryParam = new HashMap<>();
queryParam.put("versionId", versionId);
request.setQueryParameter(queryParam);
```

## Python

```
pre_result = client.presign(
    oss.GetObjectRequest(
        bucket=bucket_name,
        key=object_name,
        version_id='CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3****',
    )
)
```

## Go

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket:    oss.Ptr(bucketName),
    Key:       oss.Ptr(objectName),
    VersionId: oss.Ptr("CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE7****"),
},
    oss.PresignExpires(10*time.Minute),
)
```

## Node.js

```
const signedUrl = await client.signatureUrlV4('GET', 3600, {
    queries: {
        "versionId": 'CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE7****'
    }
}, objectName);
```

## PHP

```
$versionId = "yourVersionId";
$request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key, versionId: $versionId);
```

### ossutil

```
ossutil presign oss://examplebucket/example.txt --version-id 123
```

## Generate links in bulk

Use ossutil to generate presigned URLs for multiple objects in one command.

```
# All objects in a folder (default validity: 15 minutes)
ossutil presign oss://examplebucket/folder/ -r

# Only .txt files in a folder
ossutil presign oss://examplebucket/folder/ -r --include "*.txt"

# All objects in a bucket
ossutil presign oss://examplebucket/ -r
```

For more options, see [presign (generate presigned URLs)](/help/en/oss/developer-reference/presign-generate-presigned-url).

### OSS Management Console (current directory only)

The console exports URLs for objects in the current directory only—subdirectories are not included.

1.  Select the objects, then click **Export URL List**.
    
    ![list](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8454811761/p510006.jpg)
    
2.  In the configuration panel, adjust parameters as needed:
    
    **Parameter**
    
    **Description**
    
    **Use HTTPS**
    
    HTTPS is used by default. Turn off to use HTTP.
    
    **Validity period**
    
    For private objects, set the URL validity period (60–32,400 seconds).
    
    **Custom domain name**
    
    Use the custom domain attached to the bucket to generate preview-compatible URLs.
    
    **Accelerate endpoint**
    
    Use the transfer acceleration endpoint for cross-region or cross-border access.
    
3.  Click **OK** to download the URL list file.
    

### SDK (list + presign pattern)

Use the [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) operation to retrieve object names, then generate a presigned URL for each one.

## Customize the download filename

Control the filename that appears in the browser's save dialog when users download the file.

### Method 1: Set for a single request

Add the `filename` parameter to `response-content-disposition` in the URL. Method 1 overrides Method 2.

## Java

```
String filename = "test.txt";
request.getResponseHeaders().setContentDisposition(
    "attachment;filename=" + URLEncoder.encode(filename, "UTF-8")
);
```

## Python

```
pre_result = client.presign(
    oss.GetObjectRequest(
        bucket=args.bucket,
        key=args.key,
        response_content_disposition="attachment;filename=test.txt",
    )
)
```

## Go

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket:                     oss.Ptr(bucketName),
    Key:                        oss.Ptr(objectName),
    ResponseContentDisposition: oss.Ptr("attachment;filename=test.txt"),
})
```

### Method 2: Set a default filename for all access (via metadata)

Modify the `Content-Disposition` field in the object metadata to `attachment; filename="yourFileName"`. This applies to every access. See [Manage file metadata](/help/en/oss/user-guide/manage-object-metadata-10/).

## Set the validity period

The validity period is set at generation time and cannot be changed afterward. A presigned URL can be accessed multiple times until it expires.

**Important**

A presigned URL expires at its configured time or when its underlying credentials expire—whichever comes first. If you generate a URL with an Security Token Service (STS) temporary token, the URL becomes invalid when the token expires, even if you set a longer validity period. STS tokens have a maximum duration of 43,200 seconds (12 hours).

### Validity period limits by tool

The maximum validity period depends on the signature version and the tool used. Signature Version 4 is recommended: it supports up to 7 days and provides stronger security than Version 1.

**Tool**

**Maximum validity period**

**Notes**

OSS SDK 2.0

V4: 604,800 s (7 days); V1: unlimited (timestamp-based)

V4 by default. Exceeding the V4 limit returns an error.

OSS SDK 1.0

V4: 604,800 s (7 days); V1: unlimited (timestamp-based)

V1 by default. Exceeding the V4 limit does not return an error.

ossutil 2.0

V4: 604,800 s (7 days); V1: unlimited (timestamp-based)

V4 by default. Exceeding the V4 limit returns an error.

ossutil 1.0

V4: 604,800 s (7 days); V1: unlimited (timestamp-based)

V1 by default. Exceeding the V4 limit does not return an error.

Console

32,400 s (9 hours)

Fixed maximum.

ossbrowser 2.0

32,400 s (9 hours)

V4 only.

ossbrowser 1.0

32,400 s (9 hours)

V1 only.

**Signature version comparison:**

-   **V4 (recommended):** Expiration = UTC time at signing + validity period. Maximum 604,800 seconds (7 days). Higher security.
    
-   **V1 (not recommended):** Uses a UNIX timestamp to represent the expiration. Longer theoretical limit, but lower security and no longer maintained.
    

For differences between V1 and V4, see [Guidelines for upgrading V1 signatures to V4 signatures](/help/en/oss/developer-reference/guidelines-for-upgrading-v1-signatures-to-v4-signatures#baedf1a26al5q).

### OSS Management Console

In the [OSS Management Console](https://oss.console.alibabacloud.com/), go to the **Files** list of the target bucket, click the target file, and set the link validity period in the **Expiration Time** field in the details panel.

### SDK

Modify the expiration parameter in the code. For authorization steps, see [Grant custom permissions to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-flo-x8e-e94).

The following examples set a 1-hour validity period:

## Java

```
// Validity period: 1 hour
Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
URL url = ossClient.generatePresignedUrl(bucketName, objectName, expiration);
```

## Python

```
pre_result = client.presign(
    oss.GetObjectRequest(bucket=args.bucket, key=args.key)
)
```

## Go

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket: oss.Ptr(bucketName),
    Key:    oss.Ptr(objectName),
},
    oss.PresignExpires(10*time.Minute), // Set validity period
)
```

## Node.js

```
// The second parameter sets the validity period in seconds. Example: 3600 = 1 hour.
return await client.signatureUrlV4('GET', 3600, {headers: {}}, fileName);
```

## PHP

See [Download objects using presigned URLs in PHP](/help/en/oss/developer-reference/download-using-a-presigned-url-for-php-sdk-v2).

**Other languages:** [.NET](/help/en/oss/developer-reference/download-objects-using-presigned-urls-generated-with-oss-sdk-for-csharp-v1) | [Android](/help/en/oss/developer-reference/authorize-access#codeblock-dx8-xp0-fp5) | [iOS](/help/en/oss/developer-reference/authorize-access-4#codeblock-xcf-j6k-b4v) | [C++](/help/en/oss/developer-reference/authorized-access-4#codeblock-7c1-3sc-5om) | [Ruby](/help/en/oss/developer-reference/authorized-access-2#codeblock-0wh-ui2-gnu) | [C](/help/en/oss/developer-reference/authorized-access-1#bwiree)

### ossutil

```
# Set an explicit validity period of 1 hour
ossutil presign oss://examplebucket/example.txt --expires-duration 1h
```

### ossbrowser

ossbrowser supports the same object-level operations as the console. See [Common operations](/help/en/oss/developer-reference/use-ossbrowser#concept-xmg-h33-wdb).

## Get a long-term valid link

Presigned URLs always expire. To provide access without an expiration date, use one of these approaches:

-   **Set the object ACL to public-read (not recommended)** — The URL is permanently valid and requires no signature. However, the object is publicly accessible to anyone with the URL, which exposes the OSS source and risks traffic abuse. If you use this method, enable [hotlink protection](/help/en/oss/user-guide/hotlink-protection) (Referer allowlist) to reduce—but not eliminate—the risk. See [Object ACL](/help/en/oss/user-guide/object-acl#concept-blw-yqm-2gb).
    
-   **Use CDN with a private bucket back-to-origin (recommended)** — Keep the object private in OSS and serve it through a CDN-accelerated domain name. After enabling [private OSS bucket back-to-origin for CDN](/help/en/cdn/user-guide/grant-alibaba-cloud-cdn-access-permissions-on-private-oss-buckets), all resources in the bucket are accessible via the CDN domain. OSS is never directly exposed, and CDN provides acceleration and access control. Enable CDN's [Referer hotlink protection](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection) and [URL signing](/help/en/cdn/user-guide/configure-url-signing) to prevent link abuse.
    

### Construct a long-term valid URL

Build the URL directly from the domain name and object path—no signature needed:

**Domain type**

**URL format**

**Example**

OSS default domain name (public network)

`https://<BucketName>.<Endpoint>/<ObjectName>`

`https://examplebucket.oss-cn-hangzhou.aliyuncs.com/example/example.jpg`

OSS default domain name (internal network, for ECS instances in the same region)

`https://<BucketName>.<InternalEndpoint>/<ObjectName>`

`https://examplebucket.oss-cn-hangzhou-internal.aliyuncs.com/example/example.jpg`

Custom domain name

`https://<YourDomainName>/<ObjectName>`

`https://example.com/example.jpg`

CDN-accelerated domain name

`https://<CDN domain name>/<ObjectName>`

`http://aliyundoc.com/image_01.jpg`

Where:

-   `<BucketName>` — The bucket name
    
-   `<ObjectName>` — The full object path (for example, `folder/example.jpg`)
    
-   `<Endpoint>` — The [endpoint for the region](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db)
    
-   `<InternalEndpoint>` — The internal network endpoint for the region (for example, `oss-cn-hangzhou-internal.aliyuncs.com`)
    
-   `<YourDomainName>` — Your [custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names)
    
-   `<CDN domain name>` — Your CDN-accelerated domain name
    

## Configure HTTPS

The URL protocol depends on the endpoint:

-   **OSS default endpoint** — HTTPS is supported by default, no configuration required.
    
-   **Custom domain name** — Complete [certificate hosting](/help/en/oss/user-guide/access-oss-by-https-protocol#section-evp-h0m-z2e) before enabling HTTPS.
    

To control the protocol:

-   **Console** — Select the protocol in the details panel when generating the URL. HTTPS is the default.
    
-   **ossutil / SDK** — The protocol follows the endpoint you set. Use `https://` in the endpoint URL to generate HTTPS links.
    

## Fix garbled text in .txt file previews

If Chinese characters appear as garbled text when previewing `.txt` files, the file is missing the correct encoding declaration. Set `Content-Type` to `text/plain;charset=utf-8` in the object metadata to force UTF-8 rendering in the browser.

1.  Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/).
    
2.  Click **Bucket List**, then click the target bucket name.
    
3.  In the left navigation pane, choose **Files** > **File List**.
    
4.  To the right of the target object, choose **Set File Metadata**.
    
5.  In the **HTTP Standard Properties** area, set **Content-Type** to `text/plain;charset=utf-8`.
    
6.  Click **OK**.
    

## Restrict access by source

Use [Referer hotlink protection](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection) to allow only specific websites to access OSS resources. Requests from other sources are denied. For example, configure an allowlist to permit only `https://example.com`.

## Grant broader access with STS

Presigned URLs support only `GetObject` (download). To grant third parties additional operations—such as listing objects, uploading, or copying—use Security Token Service (STS) temporary access credentials instead. See [Access OSS with STS temporary access credentials](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss).

## Process images

Include image processing parameters in the presigned URL to resize images, add watermarks, and more. See [Image processing](/help/en/oss/user-guide/img-implementation-modes#p-m59-yse-q8s).

## Security best practices

Follow these recommendations to reduce exposure when sharing presigned URLs:

-   **Always use HTTPS.** If a presigned URL is intercepted over HTTP, an attacker can use it to download your files until it expires. Specify `https://` in the endpoint when generating URLs.
    
-   **Set the shortest validity period that meets your use case.** A URL valid for 1 hour is less risky than one valid for 7 days.
    
-   **Use Signature Version 4.** V4 provides stronger security than V1 and is the default in OSS SDK 2.0 and ossutil 2.0.
    
-   **Do not generate URLs with long-lived STS tokens.** If a URL generated from an STS token is leaked, it remains valid until the token expires. Keep STS token validity as short as your use case allows.
    
-   **Enable Referer hotlink protection** to restrict which domains can use your URLs. See [Restrict access by source](#8a7a7f8866wg6).
    
-   **Avoid public-read ACLs for sensitive files.** Public-read removes the signature requirement entirely. Use CDN with private back-to-origin instead for permanent access. See [Get a long-term valid link](#6dc74ad4930fe).
    

## FAQ

**Why does the URL expire before the configured validity period?**

A presigned URL expires at its configured time or when its underlying credentials expire—whichever comes first. If you generate the URL with an STS token, the URL becomes invalid when the token expires, even if you set a longer validity period. STS tokens have a maximum duration of 43,200 seconds (12 hours). Check the credential type you used and make sure the credential itself hasn't expired.

**Why am I getting a 403 error when accessing the URL?**

The caller must have the `oss:GetObject` permission when generating the URL. Verify that:

1.  The RAM user or role that generated the URL has the `oss:GetObject` permission for the specific object.
    
2.  No bucket or object policy explicitly denies access.
    

See [Grant custom permissions to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-flo-x8e-e94).

**Why am I getting a signature mismatch error?**

Common causes:

-   The system clock on the machine that generated the URL is out of sync. Synchronize with an NTP server—even a small time drift invalidates the signature.
    
-   A proxy between the client and OSS is modifying headers or query parameters, which alters the signature.
    

**Why is the file downloading instead of previewing?**

The browser's behavior (preview vs. download) depends on the `Content-Disposition` and `Content-Type` headers:

-   If `Content-Disposition` is `attachment`, the browser always downloads the file. Change it to `inline` in the object metadata.
    
-   If `Content-Type` doesn't match the file type, the browser may not recognize it as previewable. Update `Content-Type` to the correct MIME type.
    
-   For preview to work, the URL must use a custom domain name (not the OSS default endpoint), because most browsers block inline rendering from OSS default endpoints.
