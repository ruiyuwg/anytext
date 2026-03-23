## Problem description

A trigger cannot trigger function execution.

## Possible causes

The following items describe the possible causes:

-   The triggering rules that you configured are not met.
    
-   The role that you configured for the trigger is incorrect.
    

## Solution

### Solution 1: Check whether the triggering rules are met

The following items describe trigger rules of common triggers:

-   OSS triggers
    
    -   The Object Storage Service (OSS) bucket and your function must reside in the same region.
        
    -   The prefix or suffix of the uploaded object must be the same as the object prefix or suffix that you specified for the trigger.
        
        For example, if you set the object prefix to ab, and upload objects a/b.zip, ab.zip, and abc.zip to OSS, only ab.zip and abc.zip can trigger function execution.
        
    -   The OSS event must be the same as the trigger event. Otherwise, function execution cannot be triggered. The following items describe the cases in which the OSS event does not match the trigger event.
        
        -   You use ossbrowser to upload an object by using multipart upload. After the upload, the name of the event is `oss:ObjectCreated:CompleteMultipartUpload`. If the name of the trigger event that you configured is `oss:ObjectCreated:PutObject` or `oss:ObjectCreated:PostObject`, function execution cannot be triggered.
            
        -   You upload an object in the Function Compute console, and the name of the event is `oss:ObjectCreated:PostObject`. However, the name of the trigger event that you configured is `oss:ObjectCreated:PutObject`. You upload an object by calling the `oss:ObjectCreated:PutObject` operation, and the name of the event is `oss:ObjectCreated:PutObject`. However, the name of the trigger event that you configured is `oss:ObjectCreated:PostObject`.
            
    -   When you delete an object from an OSS bucket for which versioning is enabled, you must specify a version ID.
        
        If you do not specify a version ID when you use ossbrowser to delete the object, the `oss:ObjectRemoved:DeleteObject` or `oss:ObjectRemoved:DeleteObjects` event is not triggered. The current version of the object becomes a historical version, and a delete marker is added. For more information, see the "FAQ" section of the [Overview](/help/en/oss/user-guide/real-time-processing-file-changes-oss-event-notifications#section-m5x-808-5mc) topic.
        
-   Tablestore triggers
    
    You must set the Stream Information parameter to Enabled for the data table of a Tablestore instance. For more information, see the "Step 1: Enable the Stream feature for a data table" section of the [Use Function Compute](/help/en/tablestore/use-cases/use-function-compute#section-g0j-ctj-wql) topic.
    

### Solution 2: Check whether the role of a trigger is correct

You must check whether the role that you configured for a trigger is deleted, or whether the role has the required permissions. We recommend that you configure a standard role for the trigger. For example, you can configure the `AliyunOSSEventNotificationRole` role for an OSS trigger. For more information, see [Configure a native OSS trigger](/help/en/functioncompute/fc/user-guide/configure-a-native-oss-trigger-1).

## Technical support

If the issue persists after you try the preceding solutions, join the DingTalk user group (ID: **11721331**) for technical support. You must provide the following information for technical support: your Alibaba Cloud account, OSS bucket, service name, function name, and event source.
