Object Storage Service (OSS) SDK for Go V2 provides various download operations. You can select suitable operations based on your business scenarios.

**Type**

**API Name**

**Description**

[Simple download](/help/en/oss/developer-reference/v2-download-objects-as-files)

[Client.GetObject](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.GetObject)

-   Perform streaming download. The type of the response body is io.ReadCloser.
    
-   Do not support CRC-64.
    
-   Do not directly support the progress bar feature.
    
-   Do not support reconnection for failed connections during streaming read.
    

[Client.GetObjectToFile](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.GetObjectToFile)

-   Download objects as local files.
    
-   Download using a single connection.
    
-   Support CRC-64 (enabled by default).
    
-   Support the progress bar feature.
    
-   Support reconnection for failed connections.
    

[Range download](/help/en/oss/developer-reference/v2-range-download)

[Client.GetObject](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.GetObject)

-   Download a specific range of data.
    

[Read-only class file (Go SDK V2)](/help/en/oss/developer-reference/v2-file-like-read)

ReadOnlyFile

[ReadOnlyFile.Read](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#ReadOnlyFile.Read)

[ReadOnlyFile.Seek](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#ReadOnlyFile.Seek)

[ReadOnlyFile.Close](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#ReadOnlyFile.Close)

-   Provide File-Like operations that support operations of the io.Reader, io.Seeker, and io.Closer types.
    
-   Provide the Seek capability.
    
-   Support the single-stream mode (default).
    
-   Support the asynchronous prefetch mode to improve the read speed.
    
-   Specify the prefetch of blocks and the number of prefetch chunks.
    
-   Do not support CRC-64.
    
-   Do not directly support the progress bar feature.
    
-   Support reconnection for failed connections.
    

[A signed URL](/help/en/oss/developer-reference/v2-presign-download)

[Client.Presign](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.Presign)

-   Generate a signed URL that allows HTTP GET requests and has a validity period to authorize users to download an object.
    

[File Download Manager (Go SDK V2)](/help/en/oss/developer-reference/v2-downloader)

[Downloader.DownloadFile](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Downloader.DownloadFile)

-   Download objects as local files by performing multipart download.
    
-   Specify the size of parts and number of parts that can be downloaded in parallel.
    
-   Support CRC-64 (enabled by default).
    
-   Support the progress bar feature.
    
-   Support reconnection for failed connections.
    
-   Support resumable download.
    
-   Download an object to a temporary object and rename the temporary object (enabled by default). You can modify the configurations.
