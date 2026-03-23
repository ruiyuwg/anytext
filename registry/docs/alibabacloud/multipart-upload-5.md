Use multipart upload to upload large objects to OSS in parts. Upload parts in parallel for better throughput, resume interrupted uploads without starting over, and begin uploading before you know the final object size.

## Prerequisites

Before you begin, make sure you have:

-   Go SDK V2.2.5 or later installed
    
-   The `oss:PutObject` permission on your bucket. See [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set. See [Configure access credentials](/help/en/oss/go-configure-access-credentials)
    
-   An OSSClient instance. See [Configure OSSClient instances](/help/en/oss/initialization-9)
    

> The examples in this topic use the public endpoint for the China (Hangzhou) region. If your application and OSS bucket are in the same region, use an internal endpoint to avoid data transfer costs. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## How it works

A multipart upload requires three steps:

1.  **Initialize** — Call `Bucket.InitiateMultipartUpload`. OSS returns a globally unique upload ID.
    
2.  **Upload parts** — Call `Bucket.UploadPart` for each part, identified by a part number that determines its position in the final object. Uploading a new part with the same part number overwrites the existing part. OSS returns the MD5 hash of each received part in the `ETag` header and validates it against the SDK-calculated hash. If they don't match, OSS returns an `InvalidDigest` error.
    
3.  **Complete** — Call `Bucket.CompleteMultipartUpload` to merge all uploaded parts into a single object.
    

## Upload an object in parts

The following example uploads a local file using multipart upload with a part size of 5 MiB.

```
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code,
	// make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for a bucket in the
	// China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Set yourRegion to the region where the bucket is located. For example, cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	bucketName := "examplebucket"
	objectName := "exampleobject.txt"
	// If no local path is specified, the file is read from the directory of the sample program.
	localFilename := "/localpath/exampleobject.txt"

	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	// Set the part size to 5 MiB.
	partSize := int64(5 * 1024 * 1024)

	if err := uploadMultipart(bucket, objectName, localFilename, partSize); err != nil {
		log.Fatalf("Failed to upload multipart: %v", err)
	}
}

func uploadMultipart(bucket *oss.Bucket, objectName, localFilename string, partSize int64) error {
	// Split the local file into parts based on the specified part size.
	chunks, err := oss.SplitFileByPartSize(localFilename, partSize)
	if err != nil {
		return fmt.Errorf("failed to split file into chunks: %w", err)
	}

	file, err := os.Open(localFilename)
	if err != nil {
		return fmt.Errorf("failed to open file: %w", err)
	}
	defer file.Close()

	// Step 1: Initialize the multipart upload. OSS returns a unique upload ID.
	imur, err := bucket.InitiateMultipartUpload(objectName)
	if err != nil {
		return fmt.Errorf("failed to initiate multipart upload: %w", err)
	}

	// Step 2: Upload each part. The chunk number determines the part's position in the final object.
	var parts []oss.UploadPart
	for _, chunk := range chunks {
		part, err := bucket.UploadPart(imur, file, chunk.Size, chunk.Number)
		if err != nil {
			// Abort the upload to release storage for any parts already uploaded.
			if abortErr := bucket.AbortMultipartUpload(imur); abortErr != nil {
				log.Printf("Failed to abort multipart upload: %v", abortErr)
			}
			return fmt.Errorf("failed to upload part: %w", err)
		}
		parts = append(parts, part)
	}

	// Set the object ACL to private. By default, the object inherits the bucket ACL.
	objectAcl := oss.ObjectACL(oss.ACLPrivate)

	// Step 3: Complete the multipart upload by merging all uploaded parts.
	_, err = bucket.CompleteMultipartUpload(imur, parts, objectAcl)
	if err != nil {
		if abortErr := bucket.AbortMultipartUpload(imur); abortErr != nil {
			log.Printf("Failed to abort multipart upload: %v", abortErr)
		}
		return fmt.Errorf("failed to complete multipart upload: %w", err)
	}

	log.Printf("Multipart upload completed successfully.")
	return nil
}
```

## FAQ

### How do I abort a multipart upload?

Call `Bucket.AbortMultipartUpload` to stop a multipart upload and release storage for all parts uploaded so far. Abort the upload when a file is corrupted, the network is unreliable, storage space is limited, or an upload was started by mistake.

```
...
if err = bucket.AbortMultipartUpload(imur); err != nil {
    log.Fatalf("failed to abort multipart upload: %v", err)
}

log.Printf("Multipart upload aborted successfully.")
```

#### **How do I list uploaded parts?**

Call `Bucket.ListUploadedParts` to see which parts have been successfully uploaded for a given upload ID. This is useful for monitoring upload progress, identifying parts to retry after a failure, or managing storage usage.

```
...
lsRes, err := bucket.ListUploadedParts(imur)
if err != nil {
    log.Fatalf("Failed to list uploaded parts: %v", err)
}

for _, upload := range lsRes.UploadedParts {
    log.Printf("PartNumber: %d, ETag: %s, LastModified: %v\n", upload.PartNumber, upload.ETag, upload.LastModified)
}
```

### How do I list all ongoing multipart uploads in a bucket?

Call `Bucket.ListMultipartUploads` to list all multipart uploads that have been initiated but not yet completed or aborted. Use this to monitor batch uploads, detect stalled uploads, or identify uploads to clean up.

The following parameters let you filter and paginate results:

**Parameter**

**Description**

**Default**

`Delimiter`

Groups object names that share a common prefix before the first occurrence of the delimiter

—

`MaxUploads`

Maximum number of uploads to return

1000 (also the maximum)

`KeyMarker`

Returns uploads with object names lexicographically greater than this value

—

`Prefix`

Returns only uploads whose object names start with this prefix

—

`UploadIDMarker`

Used with `KeyMarker`: returns uploads with the same object name but an upload ID greater than this value. Ignored if `KeyMarker` is not set

—

**Use default parameters:**

```
...
lsRes, err := bucket.ListMultipartUploads(oss.KeyMarker(keyMarker), oss.UploadIDMarker(uploadIdMarker))
if err != nil {
    log.Fatalf("failed to list multipart uploads: %v", err)
}

for _, upload := range lsRes.Uploads {
    log.Printf("Key: %s, UploadID: %s\n", upload.Key, upload.UploadID)
}
```

**Filter by prefix:**

```
...
lsRes, err := bucket.ListMultipartUploads(oss.Prefix("file"))
if err != nil {
    log.Fatalf("failed to list multipart uploads with prefix: %v", err)
}

log.Printf("Uploads: %v", lsRes.Uploads)
```

**Limit the number of results:**

```
...
lsRes, err := bucket.ListMultipartUploads(oss.MaxUploads(100))
if err != nil {
    log.Fatalf("failed to list multipart uploads with limit: %v", err)
}

log.Printf("Uploads: %v", lsRes.Uploads)
```

**Combine prefix and limit:**

```
...
lsRes, err := bucket.ListMultipartUploads(oss.Prefix("file"), oss.MaxUploads(100))
if err != nil {
    log.Fatalf("failed to list multipart uploads with prefix and limit: %v", err)
}

log.Printf("Uploads: %v", lsRes.Uploads)
```

## What's next

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/put_object.go).
    
-   [InitiateMultipartUpload](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.InitiateMultipartUpload)
    
-   [UploadPart](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.UploadPart)
    
-   [CompleteMultipartUpload](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.CompleteMultipartUpload)
    
-   [AbortMultipartUpload](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.AbortMultipartUpload)
    
-   [ListUploadedParts](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.ListUploadedParts)
    
-   [ListMultipartUploads](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.ListMultipartUploads)
