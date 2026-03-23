The OSS Python SDK provides multiple methods to upload files. You can choose a method based on your business scenario.

**Method**

**Description**

[Simple upload (Python SDK V1)](/help/en/oss/developer-reference/simple-upload-1#concept-88426-zh)

-   You can use simple upload to upload `File` objects, `BLOB` data, or `OSS Buffer` data to OSS.
    
-   This method is suitable for quickly uploading files up to 5 GB in size.
    

[Append upload (Python SDK V1)](/help/en/oss/developer-reference/append-upload-2#concept-88432-zh)

-   You can use append upload to append content to the end of an existing appendable object.
    
-   The maximum file size is 5 GB.
    

[Resumable upload (Python SDK V1)](/help/en/oss/developer-reference/resumable-upload-1#concept-edl-r2j-kfb)

-   You can use resumable upload to reliably upload large files.
    
-   Resumable upload records breakpoints. If the upload is interrupted by a network error or program crash, it can be resumed from the last recorded breakpoint.
    
-   The maximum file size is 48.8 TB.
    

[Multipart upload (Python SDK V1)](/help/en/oss/developer-reference/use-oss-python-sdk-to-multipart-upload#concept-88434-zh)

-   You can use multipart upload for large files that are larger than 100 MB and smaller than 48.8 TB.
    
-   Multipart upload splits a large file into multiple parts. These parts are uploaded separately. After all parts are uploaded, the `CompleteMultipartUpload` operation is called to combine them into a single file.
    

[Upload progress bar (Python SDK V1)](/help/en/oss/developer-reference/upload-progress-bar)

-   You can use the progress bar feature to view the real-time upload progress.
    

[Upload callback (Python SDK V1)](/help/en/oss/developer-reference/upload-callbacks-2#concept-88437-zh)

-   You can use upload callback to send a callback to an application server after a file is uploaded.
    
-   This lets you perform specific operations after a successful upload, such as recording logs or triggering subsequent processes.
    

[Upload using a signed URL (Python SDK V1)](/help/en/oss/developer-reference/upload-an-object-using-a-signed-url-generated-with-oss-sdk-for-python)

-   You can use this method to generate a signed URL to grant temporary authorization to other users to upload files to a bucket.
