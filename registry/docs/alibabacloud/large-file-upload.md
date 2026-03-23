To improve the efficiency of uploading a large object, Object Storage Service (OSS) provides two methods: resumable upload and multipart upload. This topic describes the preceding upload methods and provides links to the related documents for further reference.

## **Usage notes**

Uploading large files using a simple method such as `PutObject` can cause the following issues:

-   **Object size limit**: You cannot use the `PutObject` method to upload files larger than 5 GB. If you attempt to upload a file that exceeds this limit, the operation will fail.
    
-   **Amount of time required for object upload**: A long period of time is required to upload a large object, especially when the network connection is poor. Long-term data transmission is vulnerable to network fluctuations, which may cause transmission interruption or timeout issues.
    
-   **Memory consumption**: Uploading a large object may increase memory consumption, especially when the memory is small or the environment is limited, which affects the system stability and performance.
    

Therefore, we recommend that you use resumable upload or multipart upload to improve efficiency and reliability when you upload a large object.

## **Resumable upload**

[Resumable upload](/help/en/oss/developer-reference/perform-resumable-upload) is an efficient method to upload large objects, especially when the network connection is unstable or the object size exceeds 5 GB. Resumable upload automatically splits an object into multiple parts and uploads the parts in parallel. During resumable upload, the upload progress is recorded in a checkpoint file. If the object upload is interrupted, the object is re-uploaded from the position that is recorded in the checkpoint file. You do not need to re-upload the whole object, which significantly improves the upload efficiency and reliability.

## **Multipart upload**

[Multipart upload](/help/en/oss/developer-reference/multipart-upload-5) is a common method to upload large objects. You must manually split a large object into multiple parts and then call the multipart upload operations to upload the parts. Compared with resumable upload, multipart upload provides higher flexibility and lets you dynamically adjust the size of parts and cancel multipart upload tasks during the upload process. Multipart upload is suitable for scenarios in which fine-grained management of the upload process is required.

## **Method comparison**

**Attribute**

**Resumable upload**

**Multipart upload**

**Scenario**

Users want to upload large objects in a simple and fast manner and do not want to focus on specific details.

Users require fine-grained management of the upload process and have technical capabilities.

**Concurrent upload**

Supported.

Supported.

**Object re-upload from the failed position**

Supported. You can re-upload the object from the position that is recorded in the checkpoint file.

Not supported. You cannot directly re-upload the object from the position that is recorded in the checkpoint file.

**Part size**

You must preset the size of parts.

You can dynamically adjust the size of parts.

**Reliability**

High. Resumable upload can reduce upload failures due to network fluctuations.

High, but you must still handle breakpoints manually.

**Management difficulty**

Low. You need to only call the UploadFile operation.

High. You need to call the InitiateMultipartUpload, UploadPart, and CompleteMultipartUpload operations.

**Flexibility**

You cannot manage the upload process in a fine-grained manner.

High. You can manually manage the upload process to facilitate real-time monitoring of multipart upload tasks.

**Ease of development**

This process is highly efficient and lets you upload large files with a single upload function call.

This process is complex because it requires you to manually shard large files, write additional control logic to call multiple APIs to complete the multipart upload, and handle various abnormal situations.

## **References**

[Resumable upload](/help/en/oss/developer-reference/perform-resumable-upload)

[Multipart upload](/help/en/oss/developer-reference/multipart-upload-5)
