Simple upload uses a single PUT request to upload an object to OSS. It supports objects up to 5 GiB. For objects larger than 5 GiB, use [multipart upload](https://www.alibabacloud.com/help/en/oss/developer-reference/multipart-upload-overview). CRC-64 data validation is enabled by default for every upload.

All examples on this page use `PutObject` or `PutObjectFromFile` from the OSS Go SDK V2.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket in the target region
    
-   The `oss:PutObject` permission on the target bucket (see [Permissions](#section-aae8c684) for additional permissions)
    
-   OSS Go SDK V2 installed: `github.com/aliyun/alibabacloud-oss-go-sdk-v2`
    
-   Access credentials configured as environment variables (see [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-by-using-oss-sdk-for-go-v2))
    

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default. Grant the required permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**When required**

PutObject

`oss:PutObject`

Always

PutObject

`oss:PutObjectTagging`

When specifying object tags via `x-oss-tagging`

PutObject

`kms:GenerateDataKey`

When `X-Oss-Server-Side-Encryption: KMS` is set in object metadata

PutObject

`kms:Decrypt`

When `X-Oss-Server-Side-Encryption: KMS` is set in object metadata

## Method definitions

```
func (c *Client) PutObject(ctx context.Context, request *PutObjectRequest, optFns ...func(*Options)) (*PutObjectResult, error)

func (c *Client) PutObjectFromFile(ctx context.Context, request *PutObjectRequest, filePath string, optFns ...func(*Options)) (*PutObjectResult, error)
```

**Method**

**Description**

`Client.PutObject`

Uploads an object from an `io.Reader`. If the body also implements `io.Seeker`, the SDK automatically retries on upload failure. Maximum object size: 5 GiB. CRC-64 validation and progress tracking are supported.

`Client.PutObjectFromFile`

Same capabilities as `Client.PutObject`. Reads the request body from a local file path.

### Parameters

**Parameter**

**Type**

**Description**

`ctx`

`context.Context`

Request context. Use this to set a total timeout for the request.

`request`

`*PutObjectRequest`

Upload parameters — storage class, access control list (ACL), metadata, progress callback, and more. See [PutObjectRequest](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#PutObjectRequest).

`optFns`

`...func(*Options)`

(Optional) Operation-level configuration. See [Options](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Options).

`filePath`

`string`

(`PutObjectFromFile` only) Path to the local file to upload.

### Return values

**Return value**

**Type**

**Description**

`result`

`*PutObjectResult`

Upload result. Valid when `err` is nil. See [PutObjectResult](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#PutObjectResult).

`err`

`error`

Non-nil if the request fails.

## Sample code

The following example uploads a local file to a bucket. It sets the storage class to Standard and the ACL to private, and adds custom metadata.

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

	// Load credentials from environment variables and set the region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	// Path to the local file to upload.
	localFile := "/Users/localpath/exampleobject.txt"

	putRequest := &oss.PutObjectRequest{
		Bucket:       oss.Ptr(bucketName),
		Key:          oss.Ptr(objectName),
		StorageClass: oss.StorageClassStandard, // Storage class: Standard
		Acl:          oss.ObjectACLPrivate,     // ACL: private
		Metadata: map[string]string{
			"yourMetadataKey1": "yourMetadataValue1",
		},
	}

	result, err := client.PutObjectFromFile(context.TODO(), putRequest, localFile)
	if err != nil {
		log.Fatalf("failed to put object from file: %v", err)
	}

	log.Printf("put object from file result: %#v\n", result)
}
```

> The sample code uses `cn-hangzhou` as the region ID (China (Hangzhou)) and accesses OSS through the public endpoint by default. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint. For region IDs and endpoint formats, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## Common scenarios

### **Upload a string**

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

	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	// Use strings.NewReader to wrap the string content.
	body := strings.NewReader("hi oss")

	request := &oss.PutObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
		Body:   body,
	}

	result, err := client.PutObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to put object: %v", err)
	}

	log.Printf("put object result: %#v\n", result)
}
```

### **Upload a byte array**

```
package main

import (
	"bytes"
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

	// Use bytes.NewReader to wrap the byte array.
	body := bytes.NewReader([]byte("yourObjectValueByteArray"))

	request := &oss.PutObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
		Body:   body,
	}

	result, err := client.PutObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to put object: %v", err)
	}

	log.Printf("put object result: %#v\n", result)
}
```

### **Upload a network stream**

The following example fetches a URL and uploads the HTTP response body directly to OSS. Because `http.Response.Body` implements `io.Reader` but not `io.Seeker`, automatic retry on failure is not supported for this upload pattern.

```
package main

import (
	"context"
	"flag"
	"io"
	"log"
	"net/http"

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

	// Fetch the URL and stream the response body to OSS.
	resp, err := http.Get("https://www.aliyun.com/")
	if err != nil {
		log.Fatalf("failed to fetch URL: %v", err)
	}
	defer resp.Body.Close()

	request := &oss.PutObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
		Body:   io.Reader(resp.Body),
	}

	result, err := client.PutObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to put object: %v", err)
	}

	log.Printf("put object result: %#v\n", result)
}
```

### Track upload progress

Set the `ProgressFn` field in `PutObjectRequest` to receive a callback during upload. The callback receives three parameters: `increment`, `transferred`, and `total`.

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

	localFile := "/Users/localpath/exampleobject.txt"

	putRequest := &oss.PutObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
		// ProgressFn is called periodically during the upload.
		// Parameters: increment (bytes in this call), transferred (total so far), total (object size).
		ProgressFn: func(increment, transferred, total int64) {
			fmt.Printf("increment:%v, transferred:%v, total:%v\n", increment, transferred, total)
		},
	}

	result, err := client.PutObjectFromFile(context.TODO(), putRequest, localFile)
	if err != nil {
		log.Fatalf("failed to put object from file: %v", err)
	}

	log.Printf("put object from file result: %#v\n", result)
}
```

### Set an upload callback

OSS calls your application server after a simple upload completes. Include the callback parameters in the upload request — no separate step is needed.

All callback parameters must be JSON-serialized and Base64-encoded before being passed to the `Callback` and `CallbackVar` fields.

```
package main

import (
	"context"
	"encoding/base64"
	"encoding/json"
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

	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	// Define the callback parameters.
	callbackMap := map[string]string{
		"callbackUrl":      "http://example.com:23450",
		"callbackBody":     "bucket=${bucket}&object=${object}&size=${size}&my_var_1=${x:my_var1}&my_var_2=${x:my_var2}",
		"callbackBodyType": "application/x-www-form-urlencoded",
	}

	// JSON-serialize and Base64-encode the callback parameters.
	callbackStr, err := json.Marshal(callbackMap)
	if err != nil {
		log.Fatalf("failed to marshal callback map: %v", err)
	}
	callbackBase64 := base64.StdEncoding.EncodeToString(callbackStr)

	// Define and encode the custom callback variables.
	callbackVarMap := map[string]string{
		"x:my_var1": "thi is var 1",
		"x:my_var2": "thi is var 2",
	}
	callbackVarStr, err := json.Marshal(callbackVarMap)
	if err != nil {
		log.Fatalf("failed to marshal callback var: %v", err)
	}
	callbackVarBase64 := base64.StdEncoding.EncodeToString(callbackVarStr)

	body := strings.NewReader("Hello, OSS!")

	request := &oss.PutObjectRequest{
		Bucket:      oss.Ptr(bucketName),
		Key:         oss.Ptr(objectName),
		Body:        body,
		Callback:    oss.Ptr(callbackBase64),
		CallbackVar: oss.Ptr(callbackVarBase64),
	}

	result, err := client.PutObject(context.TODO(), request)
	if err != nil {
		log.Fatalf("failed to put object: %v", err)
	}

	log.Printf("put object result: %#v\n", result)
}
```

## References

-   Full sample code: [put\_object.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/sample/put_object.go) and [put\_object\_from\_file.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/sample/put_object_form_file.go) on GitHub
    
-   API reference: [PutObject](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.PutObject) and [PutObjectFromFile](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.PutObjectFromFile)
