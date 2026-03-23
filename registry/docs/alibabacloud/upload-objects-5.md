The OSS Go SDK provides several methods to upload files. You can choose the method that fits your scenario.

**Method**

**Description**

[Simple upload (Go SDK V1)](/help/en/oss/developer-reference/simple-upload-4)

-   Use a simple upload to upload a `File` object, `BLOB` data, or an `OSS Buffer` to OSS.
    
-   This method is suitable for fast uploads of files up to 5 GB.
    

[Append upload (Go SDK V1)](/help/en/oss/developer-reference/perform-append-upload)

-   Use an append upload to add content to the end of an existing appendable object.
    
-   The file cannot exceed 5 GB.
    

[Resumable upload (Go SDK V1)](/help/en/oss/developer-reference/perform-resumable-upload)

-   Use a resumable upload for stable uploads of large files.
    
-   Resumable uploads record breakpoints. If a network error or program crash occurs, the upload can resume from the last recorded breakpoint.
    
-   The file cannot exceed 48.8 TB.
    

[Multipart upload (Go SDK V1)](/help/en/oss/developer-reference/multipart-upload-5)

-   Use a multipart upload for files larger than 100 MB and smaller than 48.8 TB.
    
-   A multipart upload splits a large file into multiple parts and uploads them separately. After all parts are uploaded, call the `CompleteMultipartUpload` operation to combine the parts into a single file.
    

[Upload callback (Go SDK V1)](/help/en/oss/developer-reference/upload-callback)

-   Use an upload callback to send a notification to an application server after a file is uploaded.
    
-   This lets you perform specific operations after a successful upload, such as recording logs or triggering other processes.
    

[Upload using a signed URL (Go SDK V1)](/help/en/oss/developer-reference/upload-an-object-using-a-signed-url-generated-with-oss-sdk-for-go)

-   To grant temporary permission for others to upload files to your bucket, generate a signed URL. Others can then use this URL to upload files.
