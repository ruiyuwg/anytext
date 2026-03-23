Delete a single object or multiple objects from a versioned bucket using OSS PHP SDK V1.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with versioning enabled
    
-   The `oss:DeleteObjectVersion` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured
    

## How it works

Deleting an object from a versioned bucket behaves differently depending on whether you specify a version ID.

**Soft delete (no version ID specified)**

OSS does not delete the current object version. Instead, it inserts a delete marker, which becomes the new current version. Any subsequent GET request returns `404 Not Found`, along with the `x-oss-delete-marker: true` header and the `x-oss-version-id` of the new delete marker.

**Permanent deletion (version ID specified)**

OSS permanently deletes the specified version. Pass the version ID using the `OssClient::OSS_VERSION_ID` constant in the options array. To delete a version whose ID is the string `"null"`, pass `OssClient::OSS_VERSION_ID => "null"` — OSS treats the string `"null"` as the version ID and removes that version.

**Warning**

Permanent deletion cannot be undone. Once a specific object version is deleted, it cannot be recovered.

**Note**

To delete a version with the ID `"null"`, set the version ID to the string `"null"` in your request. OSS treats it as a literal version ID, not an absence of value.

## Delete a single object

Both examples use `$ossClient->deleteObject()`. All examples read credentials from environment variables and use Signature Version 4.

### Permanent deletion

Permanently delete an object by specifying its version ID:

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
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
$provider = new EnvironmentVariableCredentialsProvider();
// Replace with your actual endpoint.
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<your-bucket-name>";
// Full object path, not including the bucket name. Example: example/test.txt
$object = "<your-object-name>";
$versionId = "<your-object-version-id>";

$config = array(
    "provider"         => $provider,
    "endpoint"         => $endpoint,
    "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
    "region"           => "cn-hangzhou"
);
$ossClient = new OssClient($config);

try {
    // Permanently delete the specified object version.
    $ossClient->deleteObject($bucket, $object, array(OssClient::OSS_VERSION_ID => $versionId));
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}

print(__FUNCTION__ . ": OK\n");
```

### Soft delete

Soft-delete an object without specifying a version ID. OSS inserts a delete marker and returns its version ID:

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
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
$provider = new EnvironmentVariableCredentialsProvider();
// Replace with your actual endpoint.
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<your-bucket-name>";
$object = "<your-object-name>";

$config = array(
    "provider"         => $provider,
    "endpoint"         => $endpoint,
    "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
    "region"           => "cn-hangzhou"
);
$ossClient = new OssClient($config);

try {
    // Soft-delete the object. OSS inserts a delete marker instead of removing the object.
    $ret = $ossClient->deleteObject($bucket, $object);
    print("delete marker: " . $ret['x-oss-delete-marker'] . "\n");
    print("version ID: " . $ret['x-oss-version-id'] . "\n");
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}

print(__FUNCTION__ . ": OK\n");
```

For the full API specification, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).

## Delete multiple objects

Both examples use `$ossClient->deleteObjectVersions()` with an array of `DeleteObjectInfo` instances. Each instance maps to one object version to delete.

### Permanent deletion

Permanently delete multiple objects by specifying their version IDs:

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
use OSS\Model\DeleteObjectInfo;

// Load credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
$provider = new EnvironmentVariableCredentialsProvider();
// Replace with your actual endpoint.
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<your-bucket-name>";

$config = array(
    "provider"         => $provider,
    "endpoint"         => $endpoint,
    "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
    "region"           => "cn-hangzhou"
);
$ossClient = new OssClient($config);

try {
    // Specify objects and their version IDs to permanently delete.
    $objects   = array();
    $objects[] = new DeleteObjectInfo("<your-object1-name>", "<object1-version-id>");
    $objects[] = new DeleteObjectInfo("<your-object2-name>", "<object2-version-id>");

    $deletedObjectList = $ossClient->deleteObjectVersions($bucket, $objects);

    // Print the deletion result.
    if (!empty($deletedObjectList)) {
        print("Deleted objects:\n");
        foreach ($deletedObjectList as $deletedObjectInfo) {
            print($deletedObjectInfo->getKey() . ", ");
            print($deletedObjectInfo->getVersionId() . ", ");
            print($deletedObjectInfo->getDeleteMarker() . ", ");
            print($deletedObjectInfo->getDeleteMarkerVersionId() . "\n");
        }
    }
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}

print(__FUNCTION__ . ": OK\n");
```

### Soft delete

Soft-delete multiple objects without specifying version IDs. OSS inserts a delete marker for each object:

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
use OSS\Model\DeleteObjectInfo;

// Load credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
$provider = new EnvironmentVariableCredentialsProvider();
// Replace with your actual endpoint.
$endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
$bucket = "<your-bucket-name>";

$config = array(
    "provider"         => $provider,
    "endpoint"         => $endpoint,
    "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
    "region"           => "cn-hangzhou"
);
$ossClient = new OssClient($config);

try {
    // Omit version IDs to soft-delete. OSS inserts a delete marker for each object.
    $objects   = array();
    $objects[] = new DeleteObjectInfo("<your-object1-name>");
    $objects[] = new DeleteObjectInfo("<your-object2-name>");

    $deletedObjectList = $ossClient->deleteObjectVersions($bucket, $objects);

    // Print the deletion result.
    if (!empty($deletedObjectList)) {
        print("Deleted objects:\n");
        foreach ($deletedObjectList as $deletedObjectInfo) {
            print($deletedObjectInfo->getKey() . ", ");
            print($deletedObjectInfo->getVersionId() . ", ");
            print($deletedObjectInfo->getDeleteMarker() . ", ");
            print($deletedObjectInfo->getDeleteMarkerVersionId() . "\n");
        }
    }
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}

print(__FUNCTION__ . ": OK\n");
```

For the full API specification, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb).

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region (`oss-cn-hangzhou.aliyuncs.com`). To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. For a full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To use a custom domain or Security Token Service (STS) credentials, see [Create an OssClient](/help/en/oss/developer-reference/initialization-6).
