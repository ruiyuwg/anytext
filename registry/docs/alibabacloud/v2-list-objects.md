This topic describes how to use the OSS SDK for Go to list all files in a specified bucket.

## **Notes**

-   The sample code in this topic uses the region ID `cn-hangzhou` for the China (Hangzhou) region as an example. By default, a public endpoint is used. If you want to access OSS from other Alibaba Cloud products in the same region, use an internal endpoint. For more information about the mappings between OSS-supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   This topic provides an example of how to retrieve access credentials from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-by-using-oss-sdk-for-go-v2).
    
-   To list files, you must have the `oss:ListObjects` permission. For more information, see [Grant custom permissions to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## **Method definitions**

#### **Premium Edition API for listing files**

**Important**

-   For frequently used list API operations, the latest version of the OSS SDK for Go V2 provides a **Paginator** that supports automatic paging. The paginator automatically retrieves the results for the next page when you make multiple calls. This means you only need to write the code to process the results.
    
-   The paginator consists of a paginator object <OperationName>Paginator and a paginator creation method New<OperationName>Paginator. The paginator creation method returns a paginator object that implements the HasNext and NextPage methods. These methods are used to determine whether more pages exist and to call the operation to retrieve the next page.
    

The API operation for listing files is defined as follows:

```
type ListObjectsV2Paginator struct

func (p *ListObjectsV2Paginator) HasNext() bool

func (p *ListObjectsV2Paginator) NextPage(ctx context.Context, optFns ...func(*Options)) (*ListObjectsV2Result, error)

func (c *Client) NewListObjectsV2Paginator(request *ListObjectsV2Request, optFns ...func(*PaginatorOptions)) *ListObjectsV2Paginator
```

#### Request parameters

Parameter

Type

Description

request

\*ListObjectsV2Request

The request parameters of the API operation.

For more information, see [ListObjectsV2Request](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#ListObjectsV2Request).

optFns

...func(\*PaginatorOptions)

Optional. The operation-level configuration parameters. For more information, see [PaginatorOptions](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#PaginatorOptions).

The following table describes the common parameters of [ListObjectsV2](/help/en/oss/developer-reference/listobjects-v2).

**Parameter**

**Description**

prefix

Specifies that the returned files must have the specified prefix.

maxKeys

The maximum number of files to return for each list operation.

delimiter

A character used to group files by name. All files whose names contain the specified prefix and the characters between the prefix and the first occurrence of the delimiter are grouped as a CommonPrefixes element.

startAfter

The start position for the list operation.

fetchOwner

Specifies whether to include the Owner information in the return value.

-   true: The Owner information is included in the return value.
    
-   false: The Owner information is not included in the return value.
    

#### Return values

Return value

Description

\*ListObjectsV2Paginator

The paginator object that implements the HasNext and NextPage methods. The methods are used to determine whether more pages exist and call the operation to obtain the next page.

#### **Basic Edition API for listing files**

```
func (c *Client) ListObjectsV2(ctx context.Context, request *ListObjectsV2Request, optFns ...func(*Options)) (*ListObjectsV2Result, error)
```

#### **Request parameters**

Parameter

Type

Description

ctx

context.Context

The context of the request. You can use this parameter to set the total timeout period for the request.

request

\*ListObjectsV2Request

The request parameters of the API operation. For more information, see [ListObjectsV2Request](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#ListObjectsV2Request).

optFns

...func(\*Options)

Optional. The operation-level configuration parameters. For more information, see [Options](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Options).

#### **Return values**

Return value name

Type

Description

result

\*ListObjectsV2Result

The return value of the API operation. This parameter is valid only when err is nil. For more information, see [ListObjectsV2Result](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#ListObjectsV2Result).

err

error

The status of the request. If the request fails, err is not nil.

## **Sample code**

### **List files using the Premium Edition API**

The following sample code shows how to list all files in a specified bucket using the paginator.

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
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
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

	// Create a request to list files.
	request := &oss.ListObjectsV2Request{
		Bucket: oss.Ptr(bucketName),
	}

	// Create a paginator.
	p := client.NewListObjectsV2Paginator(request)

	// Initialize the page number counter.
	var i int
	log.Println("Objects:")

	// Traverse each page in the paginator.
	for p.HasNext() {
		i++

		// Obtain the data of the next page.
		page, err := p.NextPage(context.TODO())
		if err != nil {
			log.Fatalf("failed to get page %v, %v", i, err)
		}

		// Print the information of each file on the page.
		for _, obj := range page.Contents {
			log.Printf("Object:%v, %v, %v\n", oss.ToString(obj.Key), obj.Size, oss.ToTime(obj.LastModified))
		}
	}
}
```

### **List files using the Basic Edition API**

The following sample code shows how to list all files in a specified bucket using the ListObjectsV2 API operation.

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

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
}

func main() {
	flag.Parse() // Parse command-line parameters.

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

	// Create a ListObjectsV2 request.
	request := &oss.ListObjectsV2Request{
		Bucket:            oss.Ptr(bucketName),
	}

	for {
		// Execute the operation to list all files.
		lsRes, err := client.ListObjectsV2(context.TODO(), request)
		if err != nil {
			log.Fatalf("Failed to list objects: %v", err)
		}

		// Print the list results.
		for _, object := range lsRes.Contents {
			log.Printf("Object Key: %s, Type: %s, Size: %d, ETag: %s, LastModified: %s, StorageClass: %s\n",
				*object.Key, *object.Type, object.Size, *object.ETag, object.LastModified.Format(time.RFC3339), *object.StorageClass)
		}

		// If more files need to be listed, update the continuationToken and continue the loop.
		if lsRes.IsTruncated {
			request.ContinuationToken = lsRes.NextContinuationToken
		} else {
			break // If there are no more files, exit the loop.
		}
	}

	log.Println("All objects have been listed.")
}
```

## **Scenarios**

### **List all files in a specified folder**

#### **Use the Paginator**

The following sample code shows how to list information about all files in a specified folder, including the file size, last modified time, and file name, by setting the Prefix parameter.

```
package main

import (
	"context"
	"flag"
	"fmt"
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
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
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

	// Create a request to list files.
	request := &oss.ListObjectsV2Request{
		Bucket:  oss.Ptr(bucketName),
		Prefix:  oss.Ptr("exampledir/"), // List all files in the specified folder.
	}

	// Create a paginator.
	p := client.NewListObjectsV2Paginator(request)

	// Initialize the page number counter.
	var i int
	log.Println("Objects:")

	// Traverse each page in the paginator.
	for p.HasNext() {
		i++

		fmt.Printf("Page %v\n", i)

		// Obtain the data of the next page.
		page, err := p.NextPage(context.TODO())
		if err != nil {
			log.Fatalf("failed to get page %v, %v", i, err)
		}

		// Print the continuation token.
		log.Printf("ContinuationToken:%v\n", oss.ToString(page.ContinuationToken))
		// Print the information of each file on the page.
		for _, obj := range page.Contents {
			log.Printf("Object:%v, %v, %v\n", oss.ToString(obj.Key), obj.Size, oss.ToTime(obj.LastModified))
		}
	}
}
```

#### **Use ListObjectsV2**

The following sample code shows how to list information about all files in a specified folder, including the file size, last modified time, and file name, by setting the Prefix parameter.

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

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
}

func main() {
	flag.Parse() // Parse command-line parameters.

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

	// Create a ListObjectsV2 request.
	request := &oss.ListObjectsV2Request{
		Bucket:            oss.Ptr(bucketName),
		Prefix:            oss.Ptr("exampledir/"), // List all files in the specified folder.
	}

	for {
		lsRes, err := client.ListObjectsV2(context.TODO(), request)
		if err != nil {
			log.Fatalf("Failed to list objects: %v", err)
		}

		// Print the list results.
		for _, object := range lsRes.Contents {
			log.Printf("Object Key: %s, Type: %s, Size: %d, ETag: %s, LastModified: %s, StorageClass: %s\n",
				*object.Key, *object.Type, object.Size, *object.ETag, object.LastModified.Format(time.RFC3339), *object.StorageClass)
		}

		// If more files need to be listed, update the continuationToken and continue the loop.
		if lsRes.IsTruncated {
			request.ContinuationToken = lsRes.NextContinuationToken
		} else {
			break // If there are no more files, exit the loop.
		}
	}

	log.Println("All objects have been listed.")
}
```

### **List files with a specified prefix**

#### Use the Paginator

The following sample code shows how to list information about files with a specified prefix, including the file size, last modified time, and file name, by setting the Prefix parameter.

```
package main

import (
	"context"
	"flag"
	"fmt"
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
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
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

	// Create a request to list files.
	request := &oss.ListObjectsV2Request{
		Bucket: oss.Ptr(bucketName),
		Prefix: oss.Ptr("my-object-"), // List all files with the specified prefix.
	}

	// Create a paginator.
	p := client.NewListObjectsV2Paginator(request)

	// Initialize the page number counter.
	var i int
	log.Println("Objects:")

	// Traverse each page in the paginator.
	for p.HasNext() {
		i++

		fmt.Printf("Page %v\n", i)

		// Obtain the data of the next page.
		page, err := p.NextPage(context.TODO())
		if err != nil {
			log.Fatalf("failed to get page %v, %v", i, err)
		}

		// Print the continuation token.
		log.Printf("ContinuationToken:%v\n", oss.ToString(page.ContinuationToken))
		// Print the information of each file on the page.
		for _, obj := range page.Contents {
			log.Printf("Object:%v, %v, %v\n", oss.ToString(obj.Key), obj.Size, oss.ToTime(obj.LastModified))
		}
	}
}
```

#### Use ListObjectsV2

The following sample code shows how to list information about files with a specified prefix, including the file size, last modified time, and file name, by setting the Prefix parameter.

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

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
}

func main() {
	flag.Parse() // Parse command-line parameters.

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

	// Create a ListObjectsV2 request.
	request := &oss.ListObjectsV2Request{
		Bucket:            oss.Ptr(bucketName),
		Prefix:            oss.Ptr("my-object-"),
	}

	for {
		lsRes, err := client.ListObjectsV2(context.TODO(), request)
		if err != nil {
			log.Fatalf("Failed to list objects: %v", err)
		}

		// Print the list results.
		for _, object := range lsRes.Contents {
			log.Printf("Object Key: %s, Type: %s, Size: %d, ETag: %s, LastModified: %s, StorageClass: %s\n",
				*object.Key, *object.Type, object.Size, *object.ETag, object.LastModified.Format(time.RFC3339), *object.StorageClass)
		}

		// If more files need to be listed, update the continuationToken and continue the loop.
		if lsRes.IsTruncated {
			request.ContinuationToken = lsRes.NextContinuationToken
		} else {
			break // If there are no more files, exit the loop.
		}
	}

	log.Println("All objects have been listed.")
}
```

### **List a specified number of files**

#### Use the Paginator

The following sample code shows how to list information about a specified number of files, including the file size, last modified time, and file name, by setting the MaxKeys parameter.

```
package main

import (
	"context"
	"flag"
	"fmt"
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
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
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

	// Create a request to list files.
	request := &oss.ListObjectsV2Request{
		Bucket:  oss.Ptr(bucketName),
		MaxKeys: 10, // The maximum number of files to return for each list operation.
	}

	// Create a paginator.
	p := client.NewListObjectsV2Paginator(request)

	// Initialize the page number counter.
	var i int
	log.Println("Objects:")

	// Traverse each page in the paginator.
	for p.HasNext() {
		i++

		fmt.Printf("Page %v\n", i)

		// Obtain the data of the next page.
		page, err := p.NextPage(context.TODO())
		if err != nil {
			log.Fatalf("failed to get page %v, %v", i, err)
		}

		// Print the continuation token.
		log.Printf("ContinuationToken:%v\n", oss.ToString(page.ContinuationToken))
		// Print the information of each file on the page.
		for _, obj := range page.Contents {
			log.Printf("Object:%v, %v, %v\n", oss.ToString(obj.Key), obj.Size, oss.ToTime(obj.LastModified))
		}
	}
}
```

#### Use ListObjectsV2

The following sample code shows how to list information about a specified number of files, including the file size, last modified time, and file name, by setting the MaxKeys parameter.

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

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
}

func main() {
	flag.Parse() // Parse command-line parameters.

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

	// Create a ListObjectsV2 request.
	request := &oss.ListObjectsV2Request{
		Bucket:            oss.Ptr(bucketName),
		MaxKeys:           10, // The maximum number of files to return for each list operation.
	}

	for {
		lsRes, err := client.ListObjectsV2(context.TODO(), request)
		if err != nil {
			log.Fatalf("Failed to list objects: %v", err)
		}

		// Print the list results.
		for _, object := range lsRes.Contents {
			log.Printf("Object Key: %s, Type: %s, Size: %d, ETag: %s, LastModified: %s, StorageClass: %s\n",
				*object.Key, *object.Type, object.Size, *object.ETag, object.LastModified.Format(time.RFC3339), *object.StorageClass)
		}

		// If more files need to be listed, update the continuationToken and continue the loop.
		if lsRes.IsTruncated {
			request.ContinuationToken = lsRes.NextContinuationToken
		} else {
			break // If there are no more files, exit the loop.
		}
	}

	log.Println("All objects have been listed.")
}
```

### **List files after a specified start position**

#### Use the Paginator

The following sample code shows how to use the StartAfter parameter to specify the start position for a listing. The operation returns all files that are sorted in lexicographical order after the value of StartAfter.

```
package main

import (
	"context"
	"flag"
	"fmt"
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
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
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

	// Create a request to list files.
	request := &oss.ListObjectsV2Request{
		Bucket:     oss.Ptr(bucketName),
		StartAfter: oss.Ptr("my-object"), // Specify the start position for listing files.
	}

	// Create a paginator.
	p := client.NewListObjectsV2Paginator(request)

	// Initialize the page number counter.
	var i int
	log.Println("Objects:")

	// Traverse each page in the paginator.
	for p.HasNext() {
		i++

		fmt.Printf("Page %v\n", i)

		// Obtain the data of the next page.
		page, err := p.NextPage(context.TODO())
		if err != nil {
			log.Fatalf("failed to get page %v, %v", i, err)
		}

		// Print the continuation token.
		log.Printf("ContinuationToken:%v\n", oss.ToString(page.ContinuationToken))
		// Print the information of each file on the page.
		for _, obj := range page.Contents {
			log.Printf("Object:%v, %v, %v\n", oss.ToString(obj.Key), obj.Size, oss.ToTime(obj.LastModified))
		}
	}
}
```

#### Use ListObjectsV2

The following sample code shows how to use the StartAfter parameter to specify the start position for a listing. The operation returns all files that are sorted in lexicographical order after the value of StartAfter.

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

// Define global variables.
var (
	region     string // The region.
	bucketName string // The bucket name.
)

// The init function is used to initialize command-line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
}

func main() {
	flag.Parse() // Parse command-line parameters.

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

	// Create a ListObjectsV2 request.
	request := &oss.ListObjectsV2Request{
		Bucket:            oss.Ptr(bucketName),
		StartAfter:        oss.Ptr("my-object"), // Specify the start position for listing files.
	}

	for {
		lsRes, err := client.ListObjectsV2(context.TODO(), request)
		if err != nil {
			log.Fatalf("Failed to list objects: %v", err)
		}

		// Print the list results.
		for _, object := range lsRes.Contents {
			log.Printf("Object Key: %s, Type: %s, Size: %d, ETag: %s, LastModified: %s, StorageClass: %s\n",
				*object.Key, *object.Type, object.Size, *object.ETag, object.LastModified.Format(time.RFC3339), *object.StorageClass)
		}

		// If more files need to be listed, update the continuationToken and continue the loop.
		if lsRes.IsTruncated {
			request.ContinuationToken = lsRes.NextContinuationToken
		} else {
			break // If there are no more files, exit the loop.
		}
	}

	log.Println("All objects have been listed.")
}
```

### **List all subdirectories in the root directory**

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
	flag.StringVar(&bucketName, "bucket", "", "The `name` of the bucket.")
}

func main() {
	flag.Parse() // Parse command-line parameters.

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

	// Create a ListObjectsV2 request and set the separator to "/".
	request := &oss.ListObjectsV2Request{
		Bucket:            oss.Ptr(bucketName),
		Delimiter:         oss.Ptr("/"), // Use "/" as the separator.
		MaxKeys:           100,          // The maximum number of files to return for each request.
	}

	// Used to store all subdirectories.
	var subdirectories []oss.CommonPrefix

	for {
		lsRes, err := client.ListObjectsV2(context.TODO(), request)
		if err != nil {
			log.Fatalf("Failed to list objects: %v", err)
		}

		// Print and collect subdirectories (CommonPrefixes).
		for _, prefix := range lsRes.CommonPrefixes {
			log.Printf("Subdirectory: %v\n", *prefix.Prefix)
			subdirectories = append(subdirectories, prefix)
		}

		// If more files need to be listed, update the continuationToken and continue the loop.
		if lsRes.IsTruncated {
			request.ContinuationToken = lsRes.NextContinuationToken
		} else {
			break // If there are no more files, exit the loop.
		}
	}

	log.Println("All subdirectories have been listed.")
	log.Printf("Total subdirectories: %d\n", len(subdirectories))
}
```

## References

-   For the complete sample code for listing files, see [GitHub example](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/sample/list_objects_v2.go).
    
-   For more information about the Premium Edition API operation for listing files, see [NewListObjectsV2Paginator](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.NewListObjectsV2Paginator).
    
-   For more information about the Basic Edition API operation for listing files, see [ListObjectsV2](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.ListObjectsV2).
    
-   For more information about the paginator, see [Developer Guide](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/DEVGUIDE-CN.md#%E5%88%86%E9%A1%B5%E5%99%A8).
