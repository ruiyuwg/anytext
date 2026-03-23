Accidental overwrites and deletions can cause irreversible data loss. With versioning enabled, Object Storage Service (OSS) preserves every version of each object in the bucket, so you can list, download, or restore any previous version at any time. OSS assigns a unique version ID to each version. Existing objects and their access control lists (ACLs) remain unchanged when versioning is enabled.

> The version ID of any object uploaded before versioning was enabled is set to **null**.

For more information, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

## Upload objects

When you upload an object to a versioning-enabled bucket, OSS generates a unique version ID for the uploaded object. If you upload an object with the same key as an existing object, OSS stores the new upload as the current version and retains the previous upload as a previous version.

> OSS generates a unique version ID for each object uploaded by using the PutObject, PostObject, CopyObject, or MultipartUpload operation.

**Use the OSS console**

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  On the **Objects** page, click **Upload Object**.
    
5.  On the **Upload Object** page, configure the following parameters.
    
    1.  Configure the basic settings. | Parameter | Description | |-----------|-------------| | **Upload To** | The directory where the object is stored after upload. **Current Directory**: uploads the object to the current directory. **Specified Directory**: uploads the object to a specified directory. If the directory does not exist, OSS creates it automatically. The directory name must be 1 to 254 characters in length, encoded in UTF-8, cannot start with `/` or `\`, cannot contain consecutive `/`, and cannot be `..`. | | **Object ACL** | The ACL of the object. **Inherited from Bucket**: uses the same ACL as the bucket. **Private**: only the object owner and authorized users can read and write the object. **Public Read**: all users can read the object. **Public Read/Write**: all users can read and write the object. For more information, see [Object ACLs](/help/en/oss/user-guide/object-acl#concept-blw-yqm-2gb). | | **Files to Upload** | Click **Select Files** to select a file or **Select Folders** to select a directory. You can also drag files to this section. In a versioning-enabled bucket, uploading a file with the same name as an existing object makes the existing object a previous version. |
        
    2.  Optional: Click the expand icon next to **Advanced Settings** to configure storage class, encryption, and metadata. | Parameter | Description | |-----------|-------------| | **Storage Class** | **Inherited from Bucket** (default), **Standard**, **IA** (minimum billable size: 64 KB, minimum storage duration: 30 days), **Archive** (minimum billable size: 64 KB, minimum storage duration: 60 days, restore time: approximately 1 minute), **Cold Archive** (minimum billable size: 64 KB, minimum storage duration: 180 days), or **Deep Cold Archive** (minimum billable size: 64 KB, minimum storage duration: 180 days). For more information, see [Storage classes](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb). | | **Encryption Method** | **Inherited from Bucket** (default), **OSS-Managed** (OSS manages the encryption keys), or **KMS** (uses a customer master key (CMK) stored in Key Management Service). For KMS, select a **CMK**: **alias/acs/oss** (default CMK) or **alias/\\<cmkname\\>** (custom CMK). Only AES256 is supported. For more information, see [Purchase a dedicated KMS instance](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255). | | **User-defined Metadata** | Custom metadata headers prefixed with `x-oss-meta-`. The total size of all user-defined metadata cannot exceed 8 KB. |
        
    3.  Click **Upload Object**.
        

You can view the upload progress on the **Upload Tasks** tab of the **Task List** panel.

**Use OSS SDKs**

The following examples show how to upload an object to a versioning-enabled bucket. For SDKs in other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        // This example uses the endpoint of the China (Hangzhou) region. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot include the bucket name.
        String objectName = "exampledir/object";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)
        .build();

        try {
            // This example shows how to upload a string.
            String content = "Hello OSS";
            PutObjectResult result = ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()));
            // View the VersionId of the uploaded object.
            System.out.println("result.versionid: " + result.getVersionId());
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

Node.js

```
const OSS = require('ali-oss');

const client = new OSS({
  // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to oss-cn-hangzhou.
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that you have configured environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Specify the name of the bucket.
  bucket: 'yourbucketname'
});

async function put() {
  const result = await client.put('fileName', path.normalize('D:\\localpath\\examplefile.txt');
  console.log(result.res.headers['x-oss-version-id']); // Display the version ID of the uploaded object.
}
put();
```

Python

```
import argparse
import alibabacloud_oss_v2 as oss

# Create a command line argument parser.
parser = argparse.ArgumentParser(description="put object sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')
parser.add_argument('--key', help='The name of the object.', required=True)

def main():
    args = parser.parse_args()

    # Obtain access credentials from environment variables for authentication.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Obtain the default configurations of the SDK and specify the credential provider.
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    # Use the configurations to create an OSSClient instance.
    client = oss.Client(cfg)

    # Upload a local file.
    local_file_path = '/yourLocalFilePath/yourFileName'
    with open(local_file_path, 'rb') as file:
        data = file.read()

    result = client.put_object(oss.PutObjectRequest(
        bucket=args.bucket,
        key=args.key,
        body=data,
    ))

    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' version id: {result.version_id},'
    )

if __name__ == "__main__":
    main()
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
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
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

	content := "hi oss"

	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	request := &oss.PutObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
		Body:   strings.NewReader(content),
	}

	result, err := client.PutObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to put object %v", err)
	}

	log.Printf("put object result versionId:%#v\n", *result.VersionId)
}
```

C#

```
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var objectName = "exampleobject.txt";
var objectContent = "More than just cloud.";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);
    var result = client.PutObject(bucketName, objectName, requestContent);
    Console.WriteLine("Put object succeeded versionid : {0}", result.VersionId);
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/exampleobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);
    std::shared_ptr<std::iostream> content = std::make_shared<std::stringstream>();
    *content << "test cpp sdk";
    PutObjectRequest request(BucketName, ObjectName, content);

    auto outcome = client.PutObject(request);

    if (outcome.isSuccess()) {
        std::cout << "versionid:" << outcome.result().VersionId() << std::endl;
    }
    else {
        std::cout << "PutObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

PHP

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located', 'required' => True],
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS', 'required' => False],
    "bucket" => ['help' => 'The name of the bucket', 'required' => True],
    "key" => ['help' => 'The name of the object', 'required' => True],
];

$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

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
$key = $options["key"];

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$data = 'Hello OSS';

$request = new Oss\Models\PutObjectRequest(
                bucket: $bucket,
                key: $key,
            );

$request->body = Oss\Utils::streamFor($data);

$result = $client->putObject($request);

printf(
    'status code:' . $result->statusCode . PHP_EOL .
    'request id:' . $result->requestId . PHP_EOL .
    'etag:' . $result->etag . PHP_EOL
);
```

**Use ossutil**

For more information, see [cp (upload files)](/help/en/oss/developer-reference/cp-upload-file#ab9857b49etf7).

**Use the RESTful API**

If your program requires more custom options, you can call RESTful API operations. You must include the signature calculation in your code. For more information, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).

## List objects

You can call the GetBucketVersions (ListObjectVersions) operation to list all object versions in a versioning-enabled bucket, including delete markers.

-   The GetBucket (ListObject) operation returns only current object versions that are not delete markers.
    
-   A single GetBucketVersions (ListObjectVersions) request returns a maximum of 1,000 object versions. To list all versions, send multiple requests.
    
-   Versions are returned in alphabetical order by object key, and then by the time each version was created.
    

**Use the OSS console**

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, click the name of the desired bucket.
    

The page displays the current versions of all objects. To view all versions including delete markers, click **Show** to the right of **Previous Versions** on the **Objects** page.

**Use OSS SDKs**

The following examples show how to list objects in a versioning-enabled bucket. For SDKs in other languages, see [Overview](/help/en/oss/developer-reference/overview-21).

Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
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
            String nextKeyMarker = null;
            String nextVersionMarker = null;
            VersionListing versionListing = null;
            do {
                ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                        .withBucketName(bucketName)
                        .withKeyMarker(nextKeyMarker)
                        .withVersionIdMarker(nextVersionMarker);

                versionListing = ossClient.listVersions(listVersionsRequest);
                for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                    System.out.println("key name: " + ossVersion.getKey());
                    System.out.println("versionid: " + ossVersion.getVersionId());
                    System.out.println("Is latest: " + ossVersion.isLatest());
                    System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
                }

                nextKeyMarker = versionListing.getNextKeyMarker();
                nextVersionMarker = versionListing.getNextVersionIdMarker();
            } while (versionListing.isTruncated());
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

Node.js

```
const OSS = require("ali-oss");

const client = new OSS({
  region: 'yourregion',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'yourbucketname'
});

async function getObjectVersions() {
  let nextKeyMarker = null;
  let nextVersionMarker = null;
  let versionListing = null;
  do {
    versionListing = await client.getBucketVersions({
      keyMarker: nextKeyMarker,
      versionIdMarker: nextVersionMarker,
    });

    versionListing.objects.forEach((o) => {
      console.log(`${o.name}, ${o.versionId}`);
    });
    versionListing.deleteMarker.forEach((o) => {
      console.log(`${o.name}, ${o.versionId}`);
    });

    nextKeyMarker = versionListing.NextKeyMarker;
    nextVersionMarker = versionListing.NextVersionIdMarker;
  } while (versionListing.isTruncated);
}

getObjectVersions();
```

Python

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="list object versions sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')

def main():
    args = parser.parse_args()

    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region

    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    paginator = client.list_object_versions_paginator()

    for page in paginator.iter_page(oss.ListObjectVersionsRequest(
            bucket=args.bucket,
        )
    ):
        for o in page.version:
            print(f'Object version: {o.key}, Size: {o.size}, Version_id: {o.version_id}, Last_modified: {o.last_modified}')


if __name__ == "__main__":
    main()
```

**Use ossutil**

For more information, see [ls (List resources under the account level)](/help/en/oss/developer-reference/ls-list-resources-under-the-account-level#faa993ae202xa).

**Use the RESTful API**

If your program requires more custom options, you can call RESTful API operations. You must include the signature calculation in your code. For more information, see [ListObjectVersions (GetBucketVersions)](/help/en/oss/developer-reference/listobjectversions#reference-n2s-xy3-fhb).

## Download objects

Download either the current version or a specific version of an object from a versioning-enabled bucket.

**Request type**

**Behavior**

**GetObject without version ID**

Returns the current version. If the current version is a delete marker, returns **404 Not Found**.

**GetObject with version ID**

Returns the specified version.

**Use the OSS console**

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  On the **Objects** page, click **Show** to the right of **Previous Versions**.
    
5.  Click the version that you want to download. In the panel that appears, click **Download** to the right of **Object URL**.
    

**Use OSS SDKs**

The following examples show how to download objects from a versioning-enabled bucket. For SDKs in other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

Node.js

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'yourregion',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'yourbucketname'
});

async function get() {
  const result = await client.get('filename', {
      versionId: 'versionid',
  });
  console.log(result.content);
}
get();
```

C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/exampleobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    GetObjectRequest request(BucketName, ObjectName);
    request.setVersionId("yourObjectVersionId");
    auto outcome = client.GetObject(request);
    if (outcome.isSuccess()) {
        std::cout << "getObjectToBuffer" << " success, Content-Length:" << outcome.result().Metadata().ContentLength() << std::endl;
        std::string content;
        *(outcome.result().Content()) >> content;
        std::cout << "getObjectToBuffer" << "content:" << content << std::endl;
        std::cout << "versionid:" << outcome.result().VersionId() << std::endl;
    }
    else {
            std::cout << "getObjectToBuffer fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

Python

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="get object sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')
parser.add_argument('--key', help='The name of the object.', required=True)
parser.add_argument('--version_id', help='The version ID of the object.', required=True)

def main():
    args = parser.parse_args()

    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    result = client.get_object(oss.GetObjectRequest(
        bucket=args.bucket,
        key=args.key,
        version_id=args.version_id,
    ))

    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' version id: {result.version_id},'
    )

    content = result.body.read()
    with open('./test.txt', 'wb') as f:
        f.write(content)

    print(f'File saved to test.txt successfully!')

if __name__ == "__main__":
    main()
```

Go

```
package main

import (
	"context"
	"flag"
	"io"
	"log"
	"os"

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

	outputFile := "downloaded.file"

	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	request := &oss.GetObjectRequest{
		Bucket:    oss.Ptr(bucketName),
		Key:       oss.Ptr(objectName),
		VersionId: oss.Ptr("yourVersionId"),
	}

	result, err := client.GetObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to get object %v", err)
	}
	defer result.Body.Close()

	data, err := io.ReadAll(result.Body)
	if err != nil {
		log.Fatalf("failed to read object %v", err)
	}

	err = os.WriteFile(outputFile, data, 0644)
	if err != nil {
		log.Fatalf("failed to write to output file %v", err)
	}

	log.Printf("file downloaded successfully to %s", outputFile)
}
```

PHP

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False],
    "bucket" => ['help' => 'The name of the bucket', 'required' => True],
    "key" => ['help' => 'The name of the object', 'required' => True],
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
$key = $options["key"];

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$request = new Oss\Models\GetObjectRequest(
                bucket: $bucket,
                key: $key,
                versionId:"yourVersionId",
);

$result = $client->getObject($request);

$localFilePath = './test/file.txt';
file_put_contents($localFilePath, $result->body->getContents());

printf(
    'status code:' . $result->statusCode . PHP_EOL .
    'request id:' . $result->requestId . PHP_EOL
);
```

**Use ossutil**

For more information, see [Download objects](/help/en/oss/developer-reference/cp-download-file#7449fac053umg).

**Use the RESTful API**

If your program requires more custom options, you can call RESTful API operations. You must include the signature calculation in your code. For more information, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

## Delete objects

Deleting objects in a versioning-enabled bucket works differently depending on whether you specify a version ID:

**Delete method**

**Behavior**

**Reversible?**

**Without version ID** (soft delete)

OSS adds a delete marker as the new current version. All existing versions are preserved.

Yes. Remove the delete marker or restore a previous version.

**With version ID** (permanent delete)

OSS permanently removes the specified version.

No. The deleted version cannot be recovered.

**Important**

-   By default, if you do not specify a version ID in the DeleteObject request, the current version and previous versions of the object are not deleted.
    
-   Do not enable OSS-HDFS and versioning for a bucket at the same time. Otherwise, OSS-HDFS may not work as expected. To resolve this issue, suspend versioning and configure lifecycle rules to remove delete markers. For more information, see [How do I resolve the issue that occurs after I enable OSS-HDFS and versioning for a bucket?](/help/en/oss/how-to-resolve-the-issue-that-occurs-after-you-enable-oss-hdfs-and-versioning-for-a-bucket#main-2314518)
    

### Automate version cleanup with lifecycle rules

You can configure lifecycle rules to automatically manage version expiration:

**Lifecycle element**

**Behavior**

**Reversible?**

**Expiration**

The current version becomes a previous version. A delete marker is added as the new current version.

Yes. The previous version still exists.

**NoncurrentVersionExpiration**

Permanently deletes expired previous versions.

No. Deleted versions cannot be restored.

For more information, see [Configuration elements](/help/en/oss/user-guide/configuration-elements#section-772-bn5-6mc).

**Use the OSS console**

To reduce storage costs, delete previous versions that you no longer need.

**Warning**

You cannot restore a previous version after it is permanently deleted. Proceed with caution.

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  On the **Objects** page, click **Show** to the right of **Previous Versions**.
    
5.  Find the previous version to delete: To delete multiple previous versions, select them and click **Permanently Delete** below the object list.
    
    -   If the previous version is a delete marker, click **Permanently Delete** in the **Actions** column.
        
    -   If the previous version is not a delete marker, move the pointer over the icon in the **Actions** column and click **Permanently Delete**.
        
6.  Click **OK**.
    

You can also configure lifecycle rules to periodically delete previous versions. For more information, see [Lifecycle](/help/en/oss/user-guide/overview-54/#concept-2118096).

**Use OSS SDKs**

The following examples show how to delete a specific version of an object. For SDKs in other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampledir/object";
        String versionId  = "CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****";
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
            ossClient.deleteVersion(bucketName, objectName , versionId);
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

Node.js

```
const OSS = require("ali-oss");

const client = new OSS({
  region: 'yourregion',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'yourbucketname'
});

const versionId = "versionId";
const objectName = "exampleobject.txt";
async function deleteVersionObject() {
  const result = await client.delete(objectName, {
    versionId,
  });
  console.log(result);
}

deleteVersionObject();
```

C#

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var objectName = "exampledir/exampleobject.txt";
var versionid = "yourObjectVersionidOrDelMarkerVersionid";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    var request = new DeleteObjectRequest(bucketName, objectName)
    {
        VersionId = versionid
    };
    client.DeleteObject(request);
    Console.WriteLine("Delete object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Delete object failed. {0}", ex.Message);
}
```

C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    std::string ObjectName = "exampledir/exampleobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    auto outcome = client.DeleteObject(DeleteObjectRequest(BucketName, ObjectName, "yourObjectVersionIdOrDeleteMarkerVersionId"));
    if (!outcome.isSuccess()) {
        std::cout << "DeleteObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

Go

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
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
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
		Bucket:    oss.Ptr(bucketName),
		Key:       oss.Ptr(objectName),
		VersionId: oss.Ptr("yourVersionId"),
	}

	result, err := client.DeleteObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to delete object %v", err)
	}

	log.Printf("delete object result:%#v\n", result)
}
```

PHP

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False],
    "bucket" => ['help' => 'The name of the bucket', 'required' => True],
    "key" => ['help' => 'The name of the object', 'required' => True],
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
$key = $options["key"];

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$request = new Oss\Models\DeleteObjectRequest(
            bucket: $bucket,
            key: $key,
            versionId:"yourversionid",
);

$result = $client->deleteObject($request);

printf(
    'status code:' . $result->statusCode . PHP_EOL .
    'request id:' . $result->requestId . PHP_EOL
);
```

**Use ossutil**

For more information, see [rm (delete)](/help/en/oss/developer-reference/rm-deleted#92f2e900803ke).

**Use the RESTful API**

If your program requires more custom options, you can call RESTful API operations. You must include the signature calculation in your code. For more information, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).

## Restore objects

When versioning is enabled, all versions of objects are preserved. You can restore a previous version as the current version by using one of the following methods:

**Restore method**

**How it works**

**Risk level**

**CopyObject** (recommended)

Copies a previous version to the same bucket. OSS generates a new version ID for the copy, which becomes the current version. All existing versions are retained.

Low. No data is lost.

**DeleteObject with version ID**

Permanently deletes the current version. The most recent previous version becomes the new current version.

High. The deleted version cannot be recovered.

**Important**

Use CopyObject for restoration whenever possible. DeleteObject permanently removes the current version, which cannot be recovered.

**Use the OSS console**

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  On the **Objects** page, click **Show** to the right of **Previous Versions**.
    
5.  Restore a previous version as the current version.
    
    -   **Restore a single version**: Click **Restore** in the **Actions** column of the target previous version.
        
    -   **Restore multiple versions**: Select the versions to restore and click **Restore** below the object list. In the message that appears, click **OK**.
        
    
    **Important**
    
    You can restore only one previous version at a time. The previous version to restore cannot be a delete marker.
    

**Use OSS SDKs**

The following examples show how to copy a specific version of an object to restore it. For SDKs in other languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String sourceBucketName = "srcexamplebucket";
        String sourceObjectName = "srcexampleobject.txt";
        String destinationBucketName = "desexamplebucket";
        String destinationObjectName = "desexampleobject.txt";
        String versionId  = "CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****";
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
            CopyObjectRequest copyObjectRequest = new CopyObjectRequest(sourceBucketName, sourceObjectName, destinationBucketName, destinationObjectName);
            copyObjectRequest.setSourceVersionId(versionId);
            CopyObjectResult copyObjectResult = ossClient.copyObject(copyObjectRequest);
            System.out.println("ETag: " + copyObjectResult.getETag() + " LastModified: " + copyObjectResult.getLastModified());
            System.out.println("dest object versionid: " + copyObjectResult.getVersionId());
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

Node.js

```
const OSS = require('ali-oss');

const client = new OSS({
  region: 'yourregion',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'yourbucketname'
});

const versionId = 'versionId';
const srcObject = 'srcObject.txt';
const srcBucket = 'srcBucket';
const targetObject = 'targetObject.txt';
async function Copy() {
  try {
    const result = await client.copy(targetObject, srcObject, srcBucket, {
      meta: {
        versionId: versionId
      }
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

Copy()
```

C#

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var sourceBucket = "yourSourceBucketName";
var sourceObject = "yourSourceObjectName";
var targetBucket = "yourDestBucketName";
var targetObject = "yourDestObjectName";
var versionid = "yourArchiveObjectVersionid";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    var metadata = new ObjectMetadata();
    metadata.AddHeader("mk1", "mv1");
    metadata.AddHeader("mk2", "mv2");
    var req = new CopyObjectRequest(sourceBucket, sourceObject, targetBucket, targetObject)
    {
        NewObjectMetadata = metadata,
        SourceVersionId = versionid
    };
    var result = client.CopyObject(req);
    Console.WriteLine("Copy object succeeded, vesionid:{0}", result.VersionId);
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

C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string SourceBucketName = "srcexamplebucket";
    std::string CopyBucketName = "destbucket";
    std::string SourceObjectName = "srcdir/scrobject.txt";
    std::string CopyObjectName = "destdir/destobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    CopyObjectRequest request(CopyBucketName, CopyObjectName);
    request.setCopySource(SourceBucketName, SourceObjectName);
    request.setVersionId("yourSourceObjectVersionId");

    auto outcome = client.CopyObject(request);

    if (outcome.isSuccess()) {
        std::cout << "versionid:" << outcome.result().VersionId() << std::endl;
    }
    else {
        std::cout << "CopyObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

Go

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
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
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

	request := &oss.RestoreObjectRequest{
		Bucket:    oss.Ptr(bucketName),
		Key:       oss.Ptr(objectName),
		VersionId: oss.Ptr("yourVersionId"),
		RestoreRequest: &oss.RestoreRequest{
			Days: 3,
		},
	}

	result, err := client.RestoreObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to restore object %v", err)
	}

	log.Printf("restore object result:%#v\n", result)
}
```

**Use ossutil**

For more information, see [revert](/help/en/oss/developer-reference/revert-recovery-version#d02faa916adsf).

**Use the RESTful API**

If your program requires more custom options, you can call RESTful API operations. You must include the signature calculation in your code. For more information, see [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db).
