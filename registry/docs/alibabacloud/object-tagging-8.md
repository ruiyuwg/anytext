Object tags are key-value pairs you attach to OSS objects to classify and manage them at scale. Once tagged, objects can be targeted by lifecycle rules for automated cleanup and by RAM policies for fine-grained access control.

Tags work alongside prefixes: prefixes organize objects into folder-like paths, but a single object can only belong to one path. Tags add a second dimension — an object in `logs/2025/app.log` can simultaneously carry tags like `env=production`, `team=platform`, and `retention=30d`, letting multiple lifecycle rules and policies act on it independently.

## Use cases

-   **Automated cleanup**: Tag periodically generated objects (such as temporary exports or processing artifacts), then configure lifecycle rules to delete them after a set number of days.
    
-   **Fine-grained access control**: Grant RAM users access only to objects with specific tags — for example, allowing a data team to read objects tagged `project=analytics` without exposing other objects in the same bucket.
    
-   **Cross-region replication (CRR)**: Tags are automatically replicated to destination objects, so tag-based policies apply consistently across regions.
    

## Tagging rules

Tags are key-value pairs. Each key must be unique within a single object.

**Constraint**

**Limit**

Tags per object

10

Maximum key length

128 characters

Maximum value length

256 characters

Case sensitivity

Keys and values are case-sensitive

Valid characters

Uppercase and lowercase letters, numbers, spaces, and `+ - = . _ : /`

When setting tags via HTTP headers, URL-encode both the key and value.

## Permissions and billing

-   Only the bucket owner and RAM users granted the `oss:PutObjectTagging` permission can read and write object tags.
    
-   Tags can be set during simple upload, multipart upload, append upload, and copy operations, or added to already-uploaded objects.
    
-   Editing tags does not update an object's `Last-Modified` timestamp.
    
-   Tags are billed hourly based on the number of tags applied. See [Object tagging fees](/help/en/oss/object-tagging-fees#concept-2558598).
    

## Tag objects using the console

**Prerequisites:** You have the `oss:PutObjectTagging` permission.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the target bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  Find the object to tag:
    
    -   **Versioning not enabled**: Find the object, then choose **!\[more\](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6528678661/p509142.jpg)** > **Tag**.
        
    -   **Versioning enabled**: Find the object version, then choose **!\[more\](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6528678661/p509142.jpg)** > **Tag**.
        
5.  In the **Tag** panel, enter the **Key** and **Value** for each tag.
    
6.  Click **OK**.
    

## Tag objects using OSS SDKs

The following examples show how to set tags during a simple upload. All examples use the `x-oss-tagging` HTTP header (URL-encoded key=value pairs) or the SDK's tagging parameter to attach tags at upload time.

For tagging during other operations — multipart upload, append upload, and copy — and for additional languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

Python

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="put object tagging sample")
parser.add_argument('--region',    help='The region where the bucket is located.', required=True)
parser.add_argument('--bucket',    help='The name of the bucket.', required=True)
parser.add_argument('--endpoint',  help='The OSS endpoint.')
parser.add_argument('--key',       help='The name of the object.', required=True)
parser.add_argument('--tag_key',   help='The tag key.', required=True)
parser.add_argument('--tag_value', help='The tag value.', required=True)

def main():
    args = parser.parse_args()

    # Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    # To set multiple tags, add more oss.Tag objects to the list.
    # tags = [oss.Tag(key=args.tag_key, value=args.tag_value), oss.Tag(key='key2', value='value2')]
    tags = [oss.Tag(key=args.tag_key, value=args.tag_value)]

    result = client.put_object_tagging(oss.PutObjectTaggingRequest(
        bucket=args.bucket,
        key=args.key,
        tagging=oss.Tagging(
            tag_set=oss.TagSet(tags=tags),
        ),
    ))

    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' version id: {result.version_id}')

if __name__ == "__main__":
    main()
```

Java

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Specify the endpoint of the region where the bucket is located.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampledir/exampleobject.txt";
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
            // Define the tags to attach to the object.
            Map<String, String> tags = new HashMap<String, String>();
            tags.put("owner", "John");
            tags.put("type", "document");

            // Set the tags in the object metadata.
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setObjectTagging(tags);

            // Upload the object with the tags.
            String content = "<yourContent>";
            ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()), metadata);
        } catch (OSSException oe) {
            System.out.println("OSS error — " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
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

Go

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
    flag.StringVar(&region, "region", "", "The region where the bucket is located.")
    flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
    flag.StringVar(&objectName, "object", "", "The name of the object.")
}

func main() {
    flag.Parse()

    if len(bucketName) == 0 {
        log.Fatalf("invalid parameters, bucket name required")
    }
    if len(region) == 0 {
        log.Fatalf("invalid parameters, region required")
    }
    if len(objectName) == 0 {
        log.Fatalf("invalid parameters, object name required")
    }

    content := "hi oss"

    // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
    cfg := oss.LoadDefaultConfig().
        WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
        WithRegion(region)

    client := oss.NewClient(cfg)

    request := &oss.PutObjectRequest{
        Bucket:  oss.Ptr(bucketName),
        Key:     oss.Ptr(objectName),
        Body:    strings.NewReader(content),
        Tagging: oss.Ptr("tag1=value1&tag2=value2"), // URL-encoded key=value pairs
    }

    result, err := client.PutObject(context.TODO(), request)
    if err != nil {
        log.Fatalf("failed to put object: %v", err)
    }

    log.Printf("put object result: %#v\n", result)
}
```

PHP

```
<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region where the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The endpoint for OSS access.', 'required' => False],
    "bucket"   => ['help' => 'The name of the bucket.', 'required' => True],
    "key"      => ['help' => 'The name of the object.', 'required' => True],
];

$longopts = array_map(function ($key) { return "$key:"; }, array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        echo "Error: --$key is required ({$value['help']})" . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];

// Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$data = 'Hello OSS';

// Set tags as a URL-encoded string in the tagging parameter.
$request = new Oss\Models\PutObjectRequest(
    bucket: $bucket,
    key: $key,
    tagging: "key1=value1&key2=value2"
);
$request->body = Oss\Utils::streamFor($data);

$result = $client->putObject($request);

printf(
    'status code: %s' . PHP_EOL .
    'request id: %s' . PHP_EOL .
    'etag: %s' . PHP_EOL,
    $result->statusCode,
    $result->requestId,
    $result->etag
);
```

Node.js

```
const OSS = require('ali-oss')

const client = new OSS({
  // Specify the region where the bucket is located. Example: oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
  // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'examplebucket'
});

const objectName = 'exampledir/exampleobject.txt'
const localFilepath = 'D:\\localpath\\examplefile.txt'

// Pass tags as a URL-encoded string in the x-oss-tagging header.
const headers = {
  'x-oss-tagging': 'owner=John&type=document',
}

client.put(objectName, localFilepath, { headers })
```

C#

```
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Util;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var objectName = "exampleobject.txt";
var objectContent = "More than just cloud.";

String UrlEncodeKey(String key)
{
    const string CharsetName = "utf-8";
    const char separator = '/';
    var segments = key.Split(separator);

    var encodedKey = new StringBuilder();
    encodedKey.Append(HttpUtils.EncodeUri(segments[0], CharsetName));
    for (var i = 1; i < segments.Length; i++)
        encodedKey.Append(separator).Append(HttpUtils.EncodeUri(segments[i], CharsetName));

    if (key.EndsWith(separator.ToString()))
    {
        foreach (var ch in key)
        {
            if (ch == separator)
                encodedKey.Append(separator);
            else
                break;
        }
    }
    return encodedKey.ToString();
}

const string region = "cn-hangzhou";
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);

    var meta = new ObjectMetadata();
    // URL-encode tag keys and values when setting them via HTTP headers.
    string str = UrlEncodeKey("key1") + "=" + UrlEncodeKey("value1") + "&" + UrlEncodeKey("key2") + "=" + UrlEncodeKey("value2");
    meta.AddHeader("x-oss-tagging", str);
    var putRequest = new PutObjectRequest(bucketName, objectName, requestContent);
    putRequest.Metadata = meta;

    client.PutObject(putRequest);
    Console.WriteLine("Put object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed: {0}", ex.Message);
}
```

C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
    std::string Region = "cn-hangzhou";
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/exampleobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::shared_ptr<std::iostream> content = std::make_shared<std::stringstream>();
    *content << "test cpp sdk";
    PutObjectRequest request(BucketName, ObjectName, content);

    // Attach tags to the request.
    Tagging tagging;
    tagging.addTag(Tag("key1", "value1"));
    tagging.addTag(Tag("key2", "value2"));
    request.setTagging(tagging.toQueryParameters());

    auto outcome = client.PutObject(request);

    if (!outcome.isSuccess()) {
        std::cout << "PutObject failed"
            << ", code: " << outcome.error().Code()
            << ", message: " << outcome.error().Message()
            << ", requestId: " << outcome.error().RequestId() << std::endl;
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

## Tag objects using ossutil

Install ossutil first. See [Install ossutil](/help/en/oss/install-ossutil2#DAS).

Run the following command to add or update tags on an object in `examplebucket`:

```
ossutil api put-object-tagging --bucket examplebucket --key exampleobject --tagging "{\"TagSet\":{\"Tag\":[{\"Key\":\"key1\",\"Value\":\"value1\"},{\"Key\":\"key2\",\"Value\":\"value2\"}]}}"
```

For the full parameter reference, see [put-object-tagging](/help/en/oss/developer-reference/put-object-tagging).

## Lifecycle rules based on tags

Combine tags with prefixes to target specific subsets of objects in a lifecycle rule. For example, the following rule deletes objects with the prefix `dir1` and the tag `key1=value1` 30 days after they were last updated:

```
<LifecycleConfiguration>
  <Rule>
    <ID>rule1</ID>
    <Prefix>dir1</Prefix>
    <Tag><Key>key1</Key><Value>value1</Value></Tag>
    <Status>Enabled</Status>
    <Expiration>
      <Days>30</Days>
    </Expiration>
  </Rule>
</LifecycleConfiguration>
```

## Access control based on tags

Use a RAM policy with the `oss:ExistingObjectTag/<key>` condition to restrict access to objects with specific tags. The following policy grants `oss:GetObject` only on objects tagged `key2=value2`:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "oss:GetObject",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "oss:ExistingObjectTag/key2": [
            "value2"
          ]
        }
      }
    }
  ]
}
```

To grant additional permissions — such as write access to tagged objects — add the corresponding actions to the policy. For supported actions, see [RAM policies](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb).

## API reference

The console, SDKs, and ossutil all call the underlying REST API. To call the API directly, include signature calculation in your code. See [PutObjectTagging](/help/en/oss/developer-reference/putobjecttagging#reference-185784).
