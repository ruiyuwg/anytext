Delete one or more objects from an OSS bucket using the Go SDK V1. For versioning-enabled buckets, deletion behavior depends on whether you specify a `versionId`: omitting it inserts a delete marker (soft delete), while specifying it permanently removes that object version.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:DeleteObject` permission on the target bucket. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies).
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured. For details, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    

## Usage notes

-   The code examples use the China (Hangzhou) public endpoint. To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The code examples create an OSSClient instance using an OSS endpoint. To use custom domain names or Security Token Service (STS) instead, see [Configure OSSClient instances](/help/en/oss/initialization-9).
    

## How deletion works with versioning

The following table shows what happens based on whether you specify a `versionId`:

**Scenario**

**What OSS does**

**Result of GetObject**

No `versionId` (soft delete)

Inserts a delete marker for the current version; the version itself is not deleted

Returns `404 Not Found` with `x-oss-delete-marker: true` and the new marker's version ID in `x-oss-version-id`

With `versionId` (permanent delete)

Permanently removes the specific version identified by `versionId`

Object version no longer exists

> A value of `true` for `x-oss-delete-marker` indicates that the version corresponding to the returned `x-oss-version-id` is a delete marker.

> To delete a version whose ID is `"null"`, set `versionId` to the string `"null"`.

To restore a soft-deleted object, see [Restore files](/help/en/oss/user-guide/manage-objects-in-a-versioning-enabled-bucket#section-y71-fc5-oe7).

## Delete a single object

### Permanent delete (with versionId)

Call `bucket.DeleteObject` with `oss.VersionId` to permanently remove a specific object version.

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for a bucket in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Set yourRegion to the region where the bucket is located. For example, for a bucket in the China (Hangzhou) region, set the region to cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set yourBucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Set yourObjectName to the full path of the object. Do not include the bucket name.
	// Set yourObjectVersionId to the version ID of the object to permanently delete.
	objectName := "yourObjectName"
	objectVersionId := "yourObjectVersionId"
	err = bucket.DeleteObject(objectName, oss.VersionId(objectVersionId))
	if err != nil {
		log.Fatalf("Failed to delete object '%s' with version ID '%s': %v", objectName, objectVersionId, err)
	}

	log.Println("Object deleted successfully.")
}
```

### Soft delete (without versionId)

Call `bucket.DeleteObject` without a `versionId` to add a delete marker. Use `oss.GetResponseHeader` to inspect the resulting marker details.

```
package main

import (
	"log"
	"net/http"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for a bucket in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Set yourRegion to the region where the bucket is located. For example, for a bucket in the China (Hangzhou) region, set the region to cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set yourBucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Soft delete the object without specifying a versionId. OSS adds a delete marker instead of removing the object.
	// Set yourObjectName to the full path of the object. Do not include the bucket name.
	objectName := "yourObjectName"
	var retHeader http.Header
	err = bucket.DeleteObject(objectName, oss.GetResponseHeader(&retHeader))
	if err != nil {
		log.Fatalf("Failed to delete object '%s': %v", objectName, err)
	}

	// Print the delete marker information.
	log.Printf("x-oss-version-id: %s", oss.GetVersionId(retHeader))
	log.Printf("x-oss-delete-marker: %t", oss.GetDeleteMark(retHeader))

	log.Println("Object deleted successfully.")
}
```

## Delete multiple objects

All three examples below use `bucket.DeleteObjectVersions`, which accepts a slice of `oss.DeleteObject` structs. Include `VersionId` for permanent deletion; omit it for soft deletion.

### Permanently delete multiple objects by specifying version IDs

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for a bucket in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Set yourRegion to the region where the bucket is located. For example, for a bucket in the China (Hangzhou) region, set the region to cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set yourBucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Specify the version IDs of the objects to permanently delete.
	keyArray := []oss.DeleteObject{
		{Key: "objectName1", VersionId: "objectVersionId1"},
		{Key: "objectName2", VersionId: "objectVersionId2"},
	}

	// Delete the specified object versions.
	ret, err := bucket.DeleteObjectVersions(keyArray)
	if err != nil {
		log.Fatalf("Failed to delete objects: %v", err)
	}

	// Print the deleted object details.
	for _, object := range ret.DeletedObjectsDetail {
		log.Printf("Key: %s, VersionId: %s", object.Key, object.VersionId)
	}

	log.Println("Objects deleted successfully.")
}
```

### Permanently delete multiple delete markers by specifying version IDs

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for a bucket in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Set yourRegion to the region where the bucket is located. For example, for a bucket in the China (Hangzhou) region, set the region to cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set yourBucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Specify the version IDs of the delete markers to permanently remove.
	keyArray := []oss.DeleteObject{
		{Key: "objectName1", VersionId: "objectVersionId1"},
		{Key: "objectName2", VersionId: "objectVersionId2"},
	}

	// Permanently delete the specified delete markers.
	ret, err := bucket.DeleteObjectVersions(keyArray)
	if err != nil {
		log.Fatalf("Failed to delete objects: %v", err)
	}

	// Print the deleted object and delete marker details.
	for _, object := range ret.DeletedObjectsDetail {
		log.Printf("Key: %s, VersionId: %s, DeleteMarker: %t, DeleteMarkerVersionId: %s",
			object.Key, object.VersionId, object.DeleteMarker, object.DeleteMarkerVersionId)
	}

	log.Println("Objects deleted successfully.")
}
```

### Soft delete multiple objects without specifying version IDs

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for a bucket in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Set yourRegion to the region where the bucket is located. For example, for a bucket in the China (Hangzhou) region, set the region to cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set yourBucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Soft delete multiple objects without specifying version IDs. OSS adds delete markers instead of removing the objects.
	keyArray := []oss.DeleteObject{
		{Key: "objectName1"},
		{Key: "objectName2"},
	}

	// Execute the delete operation.
	res, err := bucket.DeleteObjectVersions(keyArray)
	if err != nil {
		log.Fatalf("Failed to delete objects: %v", err)
	}

	// Print the delete marker details for each object.
	for _, object := range res.DeletedObjectsDetail {
		log.Printf("Key: %s, DeleteMarker: %t, DeleteMarkerVersionId: %s",
			object.Key, object.DeleteMarker, object.DeleteMarkerVersionId)
	}

	log.Println("Objects deleted successfully.")
}
```

## References

-   [DeleteObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.DeleteObject) — API reference for deleting a single object
    
-   [DeleteObjectVersions](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.DeleteObjectVersions) — API reference for deleting a specified version of an object
