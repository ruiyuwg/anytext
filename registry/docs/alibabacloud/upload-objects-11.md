This topic covers how to upload objects to versioning-enabled and versioning-suspended buckets using PHP SDK V1. It includes three upload methods: simple upload, append upload, and multipart upload.

**Method**

**Best for**

Simple upload

Single-request uploads

Append upload

Streaming or log-style data appended incrementally to a single object

Multipart upload

Large files, or when resumable upload is required

## Prerequisites

Before you begin, ensure that you have:

-   Set the `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables with valid credentials
    
-   Granted the `oss:PutObject` permission to your RAM user. See [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   Created an OSSClient instance. The examples below use the China (Hangzhou) public endpoint. To use a custom domain or Security Token Service (STS), see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-6). For other regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints)
    

## Simple upload

Versioning behavior:

**Bucket state**

**Version ID assigned**

**Overwrite behavior**

Versioning enabled

Globally unique random string

Each upload creates a new version

Versioning suspended

`"null"`

Same-name upload overwrites the existing `"null"` version

The version ID is returned in the `x-oss-version-id` response header.

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
use OSS\CoreOssException;

// Load credentials from environment variables.
$provider = new EnvironmentVariableCredentialsProvider();
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<yourBucketName>";
// Specify the full object path, excluding the bucket name. Example: example/test.txt.
$object = "<yourObjectName>";
$content = "hello world";

$config = array(
    "provider" => $provider,
    "endpoint" => $endpoint,
    "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
    "region" => "cn-hangzhou"
);
$ossClient = new OssClient($config);

try {
    $ret = $ossClient->putObject($bucket, $object, $content);
    // Print the version ID assigned to the uploaded object.
    print("versionId: " . $ret[OssClient::OSS_HEADER_VERSION_ID]);
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}

print(__FUNCTION__ . ": OK" . "\n");
```

For API details, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).

## Append upload

Append upload lets you incrementally add data to an existing appendable object using the AppendObject operation.

**Constraints in versioned buckets:**

**Condition**

**Result**

Current version is Appendable type

AppendObject succeeds; no new historical version is created

Current version is a Normal Object or delete marker

AppendObject fails

Only historical versions are Appendable type

AppendObject fails

PutObject or DeleteObject on an appendable object

The appendable object is saved as a historical version; further appends are not possible

The example below performs three consecutive appends. The first append starts at position `0`; each subsequent append starts at the position returned by the previous call.

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
use OSS\CoreOssException;

// Load credentials from environment variables.
$provider = new EnvironmentVariableCredentialsProvider();
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<yourBucketName>";
$object = "<yourObjectName>";
// After the three appends, the object content is "Hello OSSHi OSSOSS OK".
$content_array = array('Hello OSS', 'Hi OSS', 'OSS OK');

try {
    $config = array(
        "provider" => $provider,
        "endpoint" => $endpoint,
        "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
        "region" => "cn-hangzhou"
    );
    $ossClient = new OssClient($config);

    // First append: start at position 0. Returns the starting position for the next append.
    $position = $ossClient->appendObject($bucket, $object, $content_array[0], 0);
    $position = $ossClient->appendObject($bucket, $object, $content_array[1], $position);
    $position = $ossClient->appendObject($bucket, $object, $content_array[2], $position);
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}
print(__FUNCTION__ . ": OK" . "\n");
```

For API details, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).

## Multipart upload

Use multipart upload for large files. The process has three steps:

1.  **Initiate**: Call `initiateMultipartUpload` to get an upload ID that identifies the session.
    
2.  **Upload parts**: Split the file into parts and upload each one. The example below uses 10 MiB parts with MD5 validation enabled.
    
3.  **Complete**: Call `completeMultipartUpload` with the list of part numbers and ETags. OSS assembles the parts and returns a version ID in the `x-oss-version-id` response header.
    

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
use OSS\CoreOssException;
use OSS\Core\OssUtil;

// Load credentials from environment variables.
$provider = new EnvironmentVariableCredentialsProvider();
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<yourBucketName>";
$object = "<yourObjectName>";
// Specify the full path of the local file to upload.
$uploadFile = "<yourLocalFile>";

/**
 * Step 1: Initiate the multipart upload and get the upload ID.
 * The upload ID uniquely identifies this upload session. Use it to upload parts and complete or abort the upload.
 */
try {
    $config = array(
        "provider" => $provider,
        "endpoint" => $endpoint,
        "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
        "region" => "cn-hangzhou"
    );
    $ossClient = new OssClient($config);

    $uploadId = $ossClient->initiateMultipartUpload($bucket, $object);
} catch (OssException $e) {
    printf(__FUNCTION__ . ": initiateMultipartUpload FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}
print(__FUNCTION__ . ": initiateMultipartUpload OK" . "\n");

/**
 * Step 2: Upload parts.
 * Split the file into 10 MiB parts and upload each one. MD5 validation is enabled.
 */
$partSize = 10 * 1024 * 1024;
$uploadFileSize = sprintf('%u', filesize($uploadFile));
$pieces = $ossClient->generateMultiuploadParts($uploadFileSize, $partSize);
$responseUploadPart = array();
$uploadPosition = 0;
$isCheckMd5 = true;

foreach ($pieces as $i => $piece) {
    $fromPos = $uploadPosition + (integer)$piece[$ossClient::OSS_SEEK_TO];
    $toPos = (integer)$piece[$ossClient::OSS_LENGTH] + $fromPos - 1;
    $upOptions = array(
        $ossClient::OSS_FILE_UPLOAD => $uploadFile,
        $ossClient::OSS_PART_NUM   => ($i + 1),
        $ossClient::OSS_SEEK_TO    => $fromPos,
        $ossClient::OSS_LENGTH     => $toPos - $fromPos + 1,
        // Enable MD5 validation for each part.
        $ossClient::OSS_CHECK_MD5  => $isCheckMd5,
    );
    if ($isCheckMd5) {
        $contentMd5 = OssUtil::getMd5SumForFile($uploadFile, $fromPos, $toPos);
        $upOptions[$ossClient::OSS_CONTENT_MD5] = $contentMd5;
    }
    try {
        $responseUploadPart[] = $ossClient->uploadPart($bucket, $object, $uploadId, $upOptions);
    } catch (OssException $e) {
        printf(__FUNCTION__ . ": uploadPart - part#{$i} FAILED\n");
        printf($e->getMessage() . "\n");
        return;
    }
    printf(__FUNCTION__ . ": uploadPart - part#{$i} OK\n");
}

// Build the parts list: each entry contains a part number and its ETag.
$uploadParts = array();
foreach ($responseUploadPart as $i => $eTag) {
    $uploadParts[] = array(
        'PartNumber' => ($i + 1),
        'ETag'       => $eTag,
    );
}

/**
 * Step 3: Complete the upload.
 * OSS verifies all parts, assembles them into the final object, and returns a version ID.
 */
try {
    $ret = $ossClient->completeMultipartUpload($bucket, $object, $uploadId, $uploadParts);
    // Print the version ID assigned to the assembled object.
    print("versionId: " . $ret[OssClient::OSS_HEADER_VERSION_ID]);
} catch (OssException $e) {
    printf(__FUNCTION__ . ": completeMultipartUpload FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}
printf(__FUNCTION__ . ": completeMultipartUpload OK\n");
```

For API details, see [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb), [UploadPart](/help/en/oss/developer-reference/uploadpart#reference-pnq-2px-wdb), and [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb).
