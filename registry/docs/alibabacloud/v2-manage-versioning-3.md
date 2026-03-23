The versioning state of a bucket applies to all objects in the bucket. If you enable versioning for a bucket, you can recover any previous version of an object in the bucket if it is accidentally overwritten or deleted.

## **Notes**

-   The sample code in this topic uses the region ID `cn-hangzhou` for the China (Hangzhou) region as an example. By default, a public endpoint is used. If you want to access OSS from other Alibaba Cloud products in the same region, use an internal endpoint. For more information about the mappings between OSS regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   This topic provides an example of how to obtain access credentials from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-by-using-oss-sdk-for-go-v2).
    
-   To set the versioning state of a bucket, you must have the `oss:PutBucketVersioning` permission. To obtain the versioning state of a bucket, you must have the `oss:GetBucketVersioning` permission. For more information, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## **Method definitions**

#### **Set the versioning state of a bucket**

```
func (c *Client) PutBucketVersioning(ctx context.Context, request *PutBucketVersioningRequest, optFns ...func(*Options)) (*PutBucketVersioningResult, error)
```

#### **Obtain the versioning state of a bucket**

```
func (c *Client) GetBucketVersioning(ctx context.Context, request *GetBucketVersioningRequest, optFns ...func(*Options)) (*GetBucketVersioningResult, error)
```

#### **Request parameters**

Parameter

Type

Description

ctx

context.Context

The context of a request. You can use this parameter to set the total timeout period of a request.

request

\*PutBucketVersioningRequest

The request parameters to set the versioning state of a bucket. For more information, see [PutBucketVersioningRequest](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#PutBucketVersioningRequest).

\*GetBucketVersioningRequest

The request parameters to obtain the versioning state of a bucket. For more information, see [GetBucketVersioningRequest](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#GetBucketVersioningRequest).

optFns

...func(\*Options)

(Optional) The operation-level configuration parameters. For more information, see [Options](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Options).

#### **Return values**

Return value

Type

Description

result

\*PutBucketVersioningResult

The return value of the operation to set the versioning state of a bucket. This parameter is valid when err is nil. For more information, see [PutBucketVersioningResult](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#PutBucketVersioningResult).

\*GetBucketVersioningResult

The return value of the operation to obtain the versioning state of a bucket. This parameter is valid when err is nil. For more information, see [GetBucketVersioningResult](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#GetBucketVersioningResult).

err

error

The status of the request. If the request fails, err is not nil.

## **Sample code**

### **Set the versioning state of a bucket**

You can use the following code to set the versioning state of a bucket to Enabled.

```
package main

import (
	"context"
	"flag"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	// Parse command-line parameters.
	flag.Parse()

	// Check whether the bucket name is empty.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}

	// Check whether the region is empty.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}

	// Load the default configurations and set the credential provider and region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	// Create an OSS client.
	client := oss.NewClient(cfg)

	// Create a request to set the versioning state of the bucket.
	putRequest := &oss.PutBucketVersioningRequest{
		Bucket: oss.Ptr(bucketName), // The bucket name.
		VersioningConfiguration: &oss.VersioningConfiguration{
			Status: oss.VersionEnabled, // Enable versioning.
		},
	}

	// Execute the request to enable versioning for the bucket.
	putResult, err := client.PutBucketVersioning(context.TODO(), putRequest)
	if err != nil {
		log.Fatalf("failed to put bucket versioning %v", err)
	}

	// Print the result of enabling versioning for the bucket.
	log.Printf("put bucket versioning result:%#v\n", putResult)
}
```

### **Obtain the versioning state of a bucket**

You can use the following code to obtain the versioning state of a bucket.

```
package main

import (
	"context"
	"flag"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	// Parse command-line parameters.
	flag.Parse()

	// Check whether the bucket name is empty.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}

	// Check whether the region is empty.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}

	// Load the default configurations and set the credential provider and region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	// Create an OSS client.
	client := oss.NewClient(cfg)

	// Create a request to obtain the versioning state of the bucket.
	getRequest := &oss.GetBucketVersioningRequest{
		Bucket: oss.Ptr(bucketName), // The bucket name.
	}

	// Execute the operation to obtain the versioning state of the bucket.
	getResult, err := client.GetBucketVersioning(context.TODO(), getRequest)
	if err != nil {
		log.Fatalf("failed to get bucket versioning %v", err)
	}

	// Print the result of obtaining the versioning state of the bucket.
	log.Printf("get bucket versioning result:%#v\n", getResult)
}
```

## References

-   For more information about the API operation to set the versioning state of a bucket, see [PutBucketVersioning](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.PutBucketVersioning).
    
-   For more information about the API operation to obtain the versioning state of a bucket, see [GetBucketVersioning](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.GetBucketVersioning).
