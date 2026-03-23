Object Storage Service (OSS) triggers let Function Compute run your functions automatically when OSS events occur. When an object is created, deleted, modified, or replicated in a bucket, OSS fires an event that invokes the associated function. This enables real-time, event-driven processing of images, audio, logs, and other data at scale -- without managing infrastructure.

For example, uploading an image through the [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) operation can trigger a function that generates thumbnails and stores them in another bucket.

## How it works

1.  An OSS event occurs in a bucket (for example, a file upload or deletion).
    
2.  OSS encodes the event as a JSON string and passes it to the associated function. For the event payload format, see [Event notifications](/help/en/oss/user-guide/real-time-processing-file-changes-oss-event-notifications#section-b01-shv-in3).
    
3.  Function Compute runs the function and returns the result.
    

## Native and EventBridge-based triggers

Function Compute supports two types of OSS triggers. Choose the type that fits your use case.

**Capability**

**[Native OSS trigger](/help/en/functioncompute/fc/user-guide/configure-a-native-oss-trigger-1)**

**[EventBridge-based OSS trigger](/help/en/functioncompute/fc/user-guide/configure-an-eventbridge-based-oss-trigger)**

Multiple file prefixes and suffixes per trigger

Not supported

Supported

More than 10 triggers per bucket

Not supported

Supported

Same event type triggering different functions

Not supported

Supported

Regular expression matching for prefix/suffix

Not supported

Not supported

**Note**

For native OSS triggers, do not associate more than 10 triggers with a single bucket. Create a new bucket and set up triggers for it instead.

## Supported event types

Each event type maps to an OSS API operation. When the operation completes, the function runs once.

### ObjectCreated

Triggered when objects are added to a bucket.

**Event name**

**API operation**

**Description**

`oss:ObjectCreated:PutObject`

[PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb)

Upload an object

`oss:ObjectCreated:PostObject`

[PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb)

Upload an object through an HTML form

`oss:ObjectCreated:CopyObject`

[CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db)

Copy an existing object

`oss:ObjectCreated:PutSymlink`

[PutSymlink](/help/en/oss/developer-reference/putsymlink#reference-qzz-qzw-wdb)

Create a symbolic link to a target object

`oss:ObjectCreated:AppendObject`

[AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db)

Upload an object by appending data

`oss:ObjectCreated:InitiateMultipartUpload`

[InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb)

Initialize a multipart upload

`oss:ObjectCreated:UploadPart`

[UploadPart](/help/en/oss/developer-reference/uploadpart#reference-pnq-2px-wdb)

Upload a part in a multipart upload

`oss:ObjectCreated:UploadPartCopy`

[UploadPartCopy](/help/en/oss/developer-reference/uploadpartcopy#reference-t4b-vpx-wdb)

Upload a part by copying from an existing object

`oss:ObjectCreated:CompleteMultipartUpload`

[CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb)

Complete a multipart upload

`oss:ObjectCreated:*`

All of the above

Any ObjectCreated operation

### ObjectRemoved

Triggered when objects are removed from a bucket.

**Event name**

**API operation**

**Description**

`oss:ObjectRemoved:DeleteObject`

[DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb)

Delete a single object

`oss:ObjectRemoved:DeleteObjects`

[DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb)

Delete multiple objects in a batch

`oss:ObjectRemoved:AbortMultipartUpload`

[AbortMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload#reference-txp-bvx-wdb)

Abort a multipart upload

### ObjectModified

Triggered when object metadata is updated.

**Event name**

**API operation**

**Description**

`oss:ObjectModified:UpdateObjectMeta`

UpdateObjectMeta

Modify the properties of an object

**Note**

This event is supported only in the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Shenzhen), and China (Chengdu).

### ObjectReplication

Triggered during data replication operations.

**Event name**

**Description**

`oss:ObjectReplication:ObjectCreated`

A write operation during data replication

`oss:ObjectReplication:ObjectModified`

An overwrite operation during data replication

`oss:ObjectReplication:ObjectRemoved`

A delete operation during data replication

## Avoid loop triggering

**Warning**

Writing function output back to the same bucket that triggered the function creates an infinite loop. Each write triggers the function again, which generates more writes, leading to runaway invocations and costs.

**Prevention:** Use different file prefixes for input and output. For example, set the file prefix of the triggering object to `src` and the prefix of the generated output to `dst`. This way, output files do not match the trigger condition.

If no file prefix or suffix is configured, the trigger matches all objects in the bucket. For details, see [Step 1: Create an OSS trigger](/help/en/functioncompute/fc/user-guide/configure-a-native-oss-trigger-1#section-lo1-872-rwb).

## Trigger conflict rules for native OSS triggers

Within a bucket, each native OSS trigger must have a unique combination of **event type**, **file prefix**, and **file suffix**. A new trigger can only be created if its combination does not conflict with an existing trigger.

A conflict exists when **both** of the following conditions are true:

-   **Event type conflict** -- The event types overlap. For example, `oss:ObjectCreated:PutObject` conflicts with `oss:ObjectCreated:*` because the wildcard is a superset of the specific event.
    
-   **Path matching conflict** -- Both the file prefix and file suffix match. Prefixes are matched from the start of the object name; suffixes are matched from the end.
    

If only one condition is true, there is no conflict and the trigger can be created.

### Event type conflict

**Existing trigger event type**

**New trigger event type**

**Conflict?**

`oss:ObjectCreated:PutObject`

`oss:ObjectCreated:*`

Yes. The wildcard includes PutObject.

`oss:ObjectCreated:*`

`oss:ObjectCreated:PostObject`

Yes. The wildcard includes PostObject.

`oss:ObjectCreated:PutObject`

`oss:ObjectCreated:PostObject`

No. Different specific event types.

### Path matching conflict

**Existing trigger path**

**New trigger path**

**Conflict?**

Prefix: `source`, Suffix: `.zip`

Prefix: `1source`, Suffix: `.zip`

No. Prefix does not match.

Prefix: `source`, Suffix: `.zip`

Prefix: `source`, Suffix: `.zip1`

No. Suffix does not match.

Prefix: `source`, Suffix: `.zip`

Prefix: `source`, Suffix: `.zip`

Yes. Both prefix and suffix match.

**Note**

If the file prefix or file suffix is not set, it matches objects with any prefix or suffix. For example, if a new trigger has event type `oss:ObjectCreated:PutObject`, prefix `source`, and no suffix, it conflicts with an existing trigger that has event type `oss:ObjectCreated:PutObject`, prefix `source`, and suffix `.zip` -- because the empty suffix matches all suffixes, including `.zip`.

### Configuration examples

The following table shows whether a new native OSS trigger can be created alongside an existing trigger with event type `oss:ObjectCreated:PutObject`, file prefix `source`, and file suffix `zip`.

**New trigger event type**

**New file prefix**

**New file suffix**

**Result**

**Reason**

`oss:ObjectCreated:*`

`source`

`zip`

Failed

Event type conflict (wildcard includes PutObject) and path conflict (same prefix and suffix).

`oss:ObjectCreated:PutObject`

`source1`

`zip1`

Success

Same event type, but different prefix and suffix -- no path conflict.

`oss:ObjectCreated:PutObject`

`source`

`zip`

Failed

Same event type and same prefix/suffix -- both conflicts exist.

`oss:ObjectCreated:PutObject`

`source`

`1zip`

Failed

Same event type; prefix matches, and `1zip` ends with `zip`, so the suffix also matches.

`oss:ObjectCreated:PutObject`

`source1`

`zip`

Failed

Same event type; suffix matches, and `source1` starts with `source`, so the prefix also matches.

`oss:ObjectCreated:PutObject`

`source`

(none)

Failed

Same event type; prefix matches, and an empty suffix matches all suffixes including `zip`.

`oss:ObjectCreated:PutObject`

(none)

`zip`

Failed

Same event type; suffix matches, and an empty prefix matches all prefixes including `source`.

`oss:ObjectCreated:PutObject`

`source1`

`zip1`

Success

Same event type, but different prefix and suffix.

`oss:ObjectCreated:PutObject`

`1source`

`1zip`

Success

Same event type, but different prefix and suffix.

`oss:ObjectCreated:PostObject`

`source`

`zip`

Success

Different event type -- no event type conflict.

**Important**

To use the same OSS event type to trigger different functions for different processing tasks, [create an EventBridge-based OSS trigger](/help/en/functioncompute/fc/user-guide/configure-an-eventbridge-based-oss-trigger).

## FAQ

-   [What do I do if a trigger fails to execute a function?](/help/en/functioncompute/fc/what-to-do-if-a-trigger-cannot-trigger-function-execution)
    
-   [What do I do if a function is executed multiple times when a file is uploaded to OSS?](/help/en/functioncompute/fc/what-to-do-if-a-function-is-triggered-multiple-times-upon-object-uploads)
    

## References

-   **Configure triggers**: [Configure a native OSS trigger](/help/en/functioncompute/fc/user-guide/configure-a-native-oss-trigger-1) | [Configure an EventBridge-based OSS trigger](/help/en/functioncompute/fc/user-guide/configure-an-eventbridge-based-oss-trigger)
    
-   **Log event types**: To check which event triggered a function, print the event type in your function code. See [Log records](/help/en/functioncompute/fc/user-guide/basics#section-8ba-eug-2or).
    
-   **Call functions from functions**: See [Can functions call each other?](/help/en/functioncompute/fc/can-functions-invoke-each-other-1)
