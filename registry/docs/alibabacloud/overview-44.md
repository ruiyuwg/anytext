An object is the basic unit of data in Object Storage Service (OSS). The OSS Node.js SDK provides several methods for uploading files:

-   [Upload a local file (Node.js SDK)](/help/en/oss/developer-reference/upload-a-local-file): The maximum file size is 5 GB.
    
-   [Upload data from memory (Node.js SDK)](/help/en/oss/developer-reference/upload-from-local-memory): The maximum size is 5 GB.
    
-   [Streaming upload (Node.js SDK)](/help/en/oss/developer-reference/streaming-upload-1): The maximum size is 5 GB.
    
-   [Multipart upload (Node.js SDK)](/help/en/oss/developer-reference/multipart-upload-3): Use this method to upload large files. The maximum file size is 48.8 TB.
    
-   [Append upload (Node.js SDK)](/help/en/oss/developer-reference/append-upload-4): Use the AppendObject method to append content to an existing appendable object. The maximum object size is 5 GB.
    
-   [Resumable upload (Node.js SDK)](/help/en/oss/developer-reference/resumable-upload-5): This method is suitable for uploading large files and supports concurrent uploads, resumable uploads, and custom part sizes. The maximum file size is 48.8 TB.
    
-   [Upload callback (Node.js SDK)](/help/en/oss/developer-reference/upload-callbacks-4): This method sends a callback to an application server after an upload is complete.
