Use the `x-oss-async-process` header to submit a processing task in asynchronous mode. Unlike synchronous processing, asynchronous mode lets your application continue running other tasks without waiting for the current task to finish. This is well-suited for long-running operations such as document conversion, video transcoding, and video stitching.

When you submit an asynchronous task, the workflow is:

1.  **Submit**: Send the request with the `x-oss-async-process` header. OSS accepts the task and returns immediately — the processed output is not included in the response.
    
2.  **Save**: Use [Save As](/help/en/oss/user-guide/sys-or-saveas) to write the processed output to an OSS bucket.
    
3.  **Get notified**: Enable [Message Notification](/help/en/oss/user-guide/message-notification) to receive task completion status.
    

## Supported operations

> Replace the asterisk (`*`) in each operation with the actual processing parameter. For example, use `x-oss-async-process=doc/convert` to run document conversion.

**Feature**

**Operation**

**References**

**Methods**

Document processing

`x-oss-async-process=doc/*`

[Document conversion](/help/en/oss/user-guide/document-conversion)

Alibaba Cloud SDK, RESTful APIs

Media processing (video)

`x-oss-async-process=video/*`

[Video transcoding](/help/en/oss/user-guide/video-transcoding), [Video-to-animated-image conversion](/help/en/oss/user-guide/convert-videos-to-animated-images), [Generate CSS sprites from video snapshots](/help/en/oss/user-guide/video-cut-sprite), [Frame capture](/help/en/oss/user-guide/video-frame-cutting), [Video merging](/help/en/oss/user-guide/video-stitching)

Alibaba Cloud SDK, RESTful APIs

Media processing (audio)

`x-oss-async-process=audio/*`

[Audio transcoding](/help/en/oss/user-guide/audio-transcoding), [Audio merging](/help/en/oss/user-guide/audio-stitching)

Alibaba Cloud SDK, RESTful APIs

## What's next

-   [Save As](/help/en/oss/user-guide/sys-or-saveas) — save processed files to OSS
    
-   [Message Notification](/help/en/oss/user-guide/message-notification) — get notified when asynchronous tasks complete
