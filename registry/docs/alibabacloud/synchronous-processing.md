Use the `x-oss-process` query parameter to process OSS objects synchronously. OSS returns the processed result directly in the HTTP response — the calling application waits for the result before proceeding. This mode suits low-latency operations such as image processing and document processing.

## Supported operations

The `x-oss-process` value uses the format `<category>/<action>,<parameters>`. Replace the asterisk (`*`) in the operation column below with the actual action for your use case. For example, `x-oss-process=image/resize` resizes an image.

**Feature**

**Operation prefix**

**Access methods**

Image processing

`x-oss-process=image/*`

File URLs, Alibaba Cloud SDK, RESTful API

Document processing

`x-oss-process=doc/*`

Alibaba Cloud SDK, RESTful API

Media processing — video

`x-oss-process=video/*`

—

Media processing — audio

`x-oss-process=audio/*`

—

Image intelligence (except decoding blind watermarks)

`x-oss-process=image/*`

—

**Note**

Image processing supports file URLs for anonymous access. Document processing requires authentication — use the Alibaba Cloud SDK or RESTful API with a signed request.

For available actions and parameters, see:

-   Image processing: [IMG parameters](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8)
    
-   Document processing: [Online document preview](/help/en/oss/user-guide/online-object-preview), [Online file editing](/help/en/oss/user-guide/online-object-editing), [Document snapshot](/help/en/oss/user-guide/document-snapshot)
    
-   Media processing: [Video information extraction](/help/en/oss/user-guide/video-information-extraction), [Audio information extraction](/help/en/oss/user-guide/audio-information-extraction)
    
-   Image intelligence: [Image intelligence](/help/en/oss/user-guide/what-is-image-intelligent-in-imm/)
    

## Combine multiple operations

Chain multiple operations in a single request by separating them with a forward slash (`/`).

**Image processing via file URL**

For operations that allow anonymous access, append multiple parameters directly to the file URL:

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_300,h_300/watermark,image_cGFuZGEucG5n,t_90
```

This example resizes the image and applies a watermark — both in a single request.

**Document processing via SDK**

For operations that require authentication, use the Alibaba Cloud SDK and pass the chained parameters to the request:

```
// OSS SDK for Java: Convert format and capture a snapshot of a document in one request
getObjectRequest.setProcess("doc/convert,target_jpg,source_docx/snapshot,target_jpg,source_docx,page_2");
```

This example converts the document to JPG format, then captures a snapshot of page 2.

## What's next

To save processed results as new objects in OSS, see [Save As](/help/en/oss/user-guide/sys-or-saveas).
