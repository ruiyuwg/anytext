This topic describes how to upgrade Object Storage Service (OSS) SDK for Go from V1 to V2.

## Earliest version for Go

OSS SDK for Go V2 requires that the version of Go must be 1.18 or later.

## Specify import paths

OSS SDK for Go V2 uses a new code repository, [alibabacloud-oss-go-sdk-v2](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/tree/master). The code structure is modified and organized by functional module. The following table describes the paths and descriptions of the functional modules.

Module path

Description

github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss

The core of OSS SDK for Go, which is used to call basic and advance API operations.

github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials

The access credentials.

github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/retry

The retry policies.

github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/signer

The signatures.

github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/transport

The HTTP clients.

github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/crypto

The client-side encryption configurations.

#### Example of OSS SDK for Go V1

```
import (
  "github.com/aliyun/aliyun-oss-go-sdk/oss"
)
```

#### Example of OSS SDK for Go V2

```
import (
  "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
  "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
  // Import retry, transport, or signer based on your business requirements.
  //"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/xxxx"
)
```

## Configure parameters

1.  OSS SDK for Go V2 simplifies configurations and imports the configurations to [config](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/oss/config.go). OSS SDK for Go V2 provides auxiliary functions prefixed with With to facilitate the programmatic overwriting of the default configurations.
    
2.  OSS SDK for Go V2 uses V4 signatures by default. In this case, you must specify the region.
    
3.  OSS SDK for Go V2 allows you to create an endpoint based on the region information. If you access resources in the public cloud, you do not need to create an endpoint.
    

#### Example of OSS SDK for Go V1

```
import (
  "github.com/aliyun/aliyun-oss-go-sdk/oss"
)
...

// Obtain access credentials from environment variables.
provider, err := oss.NewEnvironmentVariableCredentialsProvider()

// Set the timeout period of an HTTP connection to 20 and the read or write timeout period of an HTTP connection to 60. Unit: seconds. 
time := oss.Timeout(20,60)

// Do not verify SSL certificates.
verifySsl := oss.InsecureSkipVerify(true)

// Specify logs.
logLevel := oss.SetLogLevel(oss.LogInfo)

// Endpoint
endpoint := "oss-cn-hangzhou.aliyuncs.com"

client, err := oss.New(endpoint, "", "", oss.SetCredentialsProvider(&provider), time, verifySsl, logLevel)
```

#### Example of OSS SDK for Go V2

```
import (
  "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
  "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

...

// Obtain access credentials from environment variables.
provider := credentials.NewEnvironmentVariableCredentialsProvider()

cfg := oss.LoadDefaultConfig().
  WithCredentialsProvider(provider).
  // Set the timeout period of an HTTP connection to 20. Unit: seconds.
  WithConnectTimeout(20 * time.Second).
  // Set the read or write timeout period of an HTTP connection to 60. Unit: seconds.
  ReadWriteTimeout(60 * time.Second).
  // Do not verify SSL certificates.
  WithInsecureSkipVerify(true).
  // Specify logs.
  WithLogLevel(oss.LogInfo).
  // Specify the region.
  WithRegion("cn-hangzhou")

client := oss.NewClient(cfg)
```

## Create a client

In OSS SDK for Go V2, the client creation function is changed from New to NewClient. In addition, the client creation function no longer supports the endpoint, ak, and sk parameters.

#### Example of OSS SDK for Go V1

```
client, err := oss.New(endpoint, "ak", "sk")
```

#### Example of OSS SDK for Go V2

```
client := oss.NewClient(cfg)
```

## Call API operations

Basic API operations are merged into a single operation method in the <OperationName> format, the request parameters of an operation are merged into <OperationName>Request, and the response parameters of an operation are merged into <OperationName>Result. The operation methods are imported to Client, and context.Context needs to be specified at the same time. Syntax:

```
func (c *Client) <OperationName>(ctx context.Context, request *<OperationName>Request, optFns ...func(*Options)) (*<OperationName>Result,, error)
```

For more information, see [Basic API operations](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/DEVGUIDE-CN.md#%E5%9F%BA%E7%A1%80%E6%8E%A5%E5%8F%A3).

#### Example of OSS SDK for Go V1

```
import "github.com/aliyun/aliyun-oss-go-sdk/oss"

...

provider, err := oss.NewEnvironmentVariableCredentialsProvider()

client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider))  

bucket, err := client.Bucket("examplebucket")

err = bucket.PutObject("exampleobject.txt", bytes.NewReader([]byte("example data")))
```

#### Example of OSS SDK for Go V2

```
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"

...

cfg := oss.LoadDefaultConfig().
  WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
  WithRegion("your region")

client := oss.NewClient(cfg)

result, err := client.PutObject(context.TODO(), &oss.PutObjectRequest{
  Bucket: oss.Ptr("examplebucket"),
  Key:    oss.Ptr("exampleobject.txt"),
  Body:   bytes.NewReader([]byte("example data")),
})
```

## Generate a pre-signed URL

In OSS SDK for Go V2, the name of the operation used to generate a pre-signed URL is changed from SignURL to Pressign, and the operation is imported to Client. Syntax:

```
func (c *Client) Presign(ctx context.Context, request any, optFns ...func(*PresignOptions)) (*PresignResult, error)
```

The type of request parameters is the same as '<OperationName>Request' in the API operation.

The response contains a pre-signed URL, the HTTP method, the expiration time of the URL, and the signed request headers. Example:

```
type PresignResult struct {
  Method        string
  URL           string
  Expiration    time.Time
  SignedHeaders map[string]string
}
```

For more information, see [Pre-signed URL](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/DEVGUIDE-CN.md#%E9%A2%84%E7%AD%BE%E5%90%8D%E6%8E%A5%E5%8F%A3).

The following sample code provides an example on how to migrate an object from OSS SDK for Go V1 to OSS SDK for Go V2 by generating a pre-signed URL that is used to download the object:

#### Example of OSS SDK for Go V1

```
import "github.com/aliyun/aliyun-oss-go-sdk/oss"

...

provider, err := oss.NewEnvironmentVariableCredentialsProvider()

client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider))  

bucket, err := client.Bucket("examplebucket")

signedURL, err := bucket.SignURL("exampleobject.txt", oss.HTTPGet, 60)

fmt.Printf("Sign Url:%s\n", signedURL)
```

#### Example of OSS SDK for Go V2

```
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"

...

cfg := oss.LoadDefaultConfig().
	WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
	WithRegion("your region")

client := oss.NewClient(cfg)

result, err := client.Presign(
	context.TODO(),
	&oss.GetObjectRequest{
		Bucket: oss.Ptr("examplebucket"),
		Key:    oss.Ptr("exampleobject.txt"),
	},
	oss.PresignExpires(60*time.Second),
)

fmt.Printf("Sign Method:%v\n", result.Method)
fmt.Printf("Sign Url:%v\n", result.URL)
fmt.Printf("Sign Expiration:%v\n", result.Expiration)
for k, v := range result.SignedHeaders {
	fmt.Printf("SignedHeader %v:%v\n", k, v)
}
```

## Call resumable transfer operations

OSS SDK for Go V2 uses data transmission managers, including Uploader, Downloader, and Copier, to manage the upload, download, and copying of objects respectively. The original resumable transfer operations (Bucket.UploadFile, Bucket.DownloadFile, and Bucket.CopyFile) are deleted.

The following table describes the resumable transfer operations in OSS SDK for Go V1 and OSS SDK for Go V2.

Scenario

v2

v1

Upload an object

Uploader.UploadFile

Bucket.UploadFile

Upload a stream (io.Reader)

Uploader.UploadFrom

Not supported

Download an object to a local computer

Downloader.DownloadFile

Bucket.DownloadFile

Copy an object

Copier.Copy

Bucket.CopyFile

Changes to default values

Scenario

v2

v1

Object upload-part size

6 MiB

Configure part size by specifying parameters

Object upload-default value for concurrency

3

1

Object upload-size threshold

The size of the part

None

Object upload-record upload progress in the checkpoint file

Supported

Supported

Object download-part size

6 MiB

Configure part size by specifying parameters

Object download-default value for concurrency

3

1

Object download-size threshold

The size of the part

None

Object download-record download progress in the checkpoint file

Supported

Supported

Object copy-part size

64 MiB

Bucket.UploadFile

Object copy-default value for concurrency

3

1

Object copy-size threshold

200 MiB

None

Object copy-record copy progress in the checkpoint file

Not supported

Supported

**Note**

The object upload-size threshold, object download-size threshold, or object copy-size threshold parameters listed above specify that when the object size is greater than the value of the parameters, multipart upload, multipart download, or multipart copy, respectively, is performed.

For more information about how to use data transmission managers, see [Transfer managers](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/DEVGUIDE-CN.md#%E4%BC%A0%E8%BE%93%E7%AE%A1%E7%90%86%E5%99%A8).

## Perform client-side encryption

OSS SDK for Go V2 uses EncryptionClient to provide client encryption. OSS SDK for Go V2 also simplifies the API operations used to perform client-side encryption and adopts the same operation naming rules and calling methods as Client. In addition, OSS SDK for Go V2 only provides reference on how to perform client-side encryption by using an RSA-based, self-managed CMK.

For more information about how to perform client-side encryption by using Key Management Service (KMS), visit [sample/crypto/kms.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/sample/crypto/kms.go).

For more information about client-side encryption, see [Client-side encryption](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/DEVGUIDE-CN.md#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%8A%A0%E5%AF%86).

The following sample code provides examples on how to use an RSA-based CMK to perform client-side encryption when you upload an object by using OSS SDK for Go V1 and OSS SDK for Go V2:

#### **V1**

```
import "github.com/aliyun/aliyun-oss-go-sdk/oss"
import "github.com/aliyun/aliyun-oss-go-sdk/oss/crypto"

...

provider, err := oss.NewEnvironmentVariableCredentialsProvider()

client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider))  

materialDesc := make(map[string]string)
materialDesc["desc"] = "your master encrypt key material describe information"

masterRsaCipher, err := osscrypto.CreateMasterRsa(materialDesc, "yourRsaPublicKey", "yourRsaPrivateKey")

contentProvider := osscrypto.CreateAesCtrCipher(masterRsaCipher)

cryptoBucket, err := osscrypto.GetCryptoBucket(client, "examplebucket", contentProvider)

err = cryptoBucket.PutObject("exampleobject.txt", bytes.NewReader([]byte("example data")))
```

#### **V2**

```
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
import "github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/crypto"

cfg := oss.LoadDefaultConfig().
  WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
  WithRegion("your region")

client := oss.NewClient(cfg)

materialDesc := make(map[string]string)
materialDesc["desc"] = "your master encrypt key material describe information"

mc, err := crypto.CreateMasterRsa(materialDesc, "yourRsaPublicKey", "yourRsaPrivateKey")
eclient, err := NewEncryptionClient(client, mc)

result, err := eclient.PutObject(context.TODO(), &PutObjectRequest{
  Bucket: Ptr("examplebucket"),
  Key:    Ptr("exampleobject.txt"),
  Body:   bytes.NewReader([]byte("example data")),
})
```

## **Configure retry policies**

By default, OSS SDK for Go V2 supports retries for HTTP requests. When you upgrade OSS SDK for Go V1 to OSS SDK for Go V2, you must remove the original retry code to prevent an increase in the number of retries.

## **Reference**

For more information, see [Developer Guide](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/DEVGUIDE.md).
