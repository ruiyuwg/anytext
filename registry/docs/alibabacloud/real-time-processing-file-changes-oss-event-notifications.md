Configure event notification rules to process, synchronize, monitor, log, or trigger workflows based on real-time changes to objects in Object Storage Service (OSS). These rules let you specify which objects to monitor and receive timely notifications about relevant events.

## Prerequisite

Simple Message Queue (SMQ) is activated. You can activate SMQ on the [SMQ product page](https://www.alibabacloud.com/product/message-service?spm=a2796.7919406.6791778070.535.10863c37LYZmSP).

## Usage notes

-   Event notification triggers calls from OSS to SMQ. When an operation in OSS matches an event notification rule, OSS sends a notification message via SMQ. This call can fail. To verify that the message was sent, check the `x-oss-event-status` value in the response header. The value is Base64-encoded. If the decoded value is `{"Result": "Ok"}`, the message was sent successfully.
    
-   Using event notification incurs SMQ fees. For more information, see [Billing](/help/en/mns/product-overview/billing-overview#concept-2028746).
    
-   For a list of regions that support event notification configuration for buckets, see [Regions and endpoints](/help/en/mns/product-overview/regions-and-endpoints#ab424872466pm).
    
-   You can configure a maximum of 10 event notification rules per region. If more rules are required, contact [technical support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
    
-   TS and M3U8 objects generated from Real-Time Messaging Protocol (RTMP) streams do not trigger event notification rules. For more information about RTMP streaming, see [LiveChannel-related operations](/help/en/oss/developer-reference/livechannel-operations/#concept-njb-pbd-xdb).
    

## How it works

After you create an event notification rule, if a request to your OSS bucket triggers the rule, SMQ sends a message about the event to the HTTP server or SMQ queue that you configured. The following figure illustrates this process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6530898671/CAEQQRiBgICa7ePQvhkiIDdhYzIwZDVjZjE0NjQwN2E5YTI5MjMwZjU3NzlmZjIw3963382_20230830144006.372.svg)

## Events

**Event**

**Type**

**Description**

ObjectCreated (Create an object)

ObjectCreated:PutObject

The PutObject operation is called to upload an object. For more information, see [PutObject](/help/en/oss/developer-reference/putobject).

ObjectCreated:PostObject

The PostObject operation is called to upload an object. For more information, see [PostObject](/help/en/oss/developer-reference/postobject).

ObjectCreated:CopyObject

The CopyObject operation is called to copy objects within a bucket or between buckets. For more information, see [CopyObject](/help/en/oss/developer-reference/copyobject).

ObjectCreated:AppendObject

The AppendObject operation is called to upload an object by appending the object to an existing object. For more information, see [AppendObject](/help/en/oss/developer-reference/appendobject).

ObjectCreated:InitiateMultipartUpload

The InitiateMultipartUpload operation is called to initiate a multiple upload task in OSS. For more information, see [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload).

ObjectCreated:UploadPart

The UploadPart operation is called to upload data in parts. For more information, see [UploadPart](/help/en/oss/developer-reference/uploadpart).

ObjectCreated:UploadPartCopy

The UploadPartCopy operation is called to copy data in parts. For more information, see [UploadPartCopy](/help/en/oss/developer-reference/uploadpartcopy).

ObjectCreated:CompleteMultipartUpload

The CompleteMultipartUpload operation is called to complete multiple upload tasks. For more information, see [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload).

ObjectCreated:PutSymlink

The PutSymlink operation is called to create a symbolic link that points to a destination object. For more information, see [PutSymlink](/help/en/oss/developer-reference/putsymlink).

ObjectCreated:\*

The event name in a notification can be any event that starts with `ObjectCreated:`.

**Note**

This type of event includes all new events that start with ObjectCreated. For example, if the event name in a notification is ObjectCreated:test, you can push the event to a specific receiver.

ObjectDownloaded (Download an object)

ObjectDownloaded:GetObject

The GetObject operation is called to obtain an object by performing simple download.

ObjectModified (Modify an object)

ObjectModified:UpdateObjectMeta

The UpdateObjectMeta operation is called to modify the attributes of an object.

ObjectModified:ChangeStorageClass

The ChangeStorageClass operation is called to modify storage type based on lifecycle rules.

ObjectModified:\*

The event name in a notification can be any event that starts with `ObjectModified:`.

**Note**

This type of event includes all new events that start with ObjectModified. For example, if the event name in a notification is ObjectModified:test, you can push the event to a specific receiver.

ObjectRemoved (Remove an object)

ObjectRemoved:DeleteObject

The DeleteObject operation is called to delete an object. For more information, see [DeleteObject](/help/en/oss/developer-reference/deleteobject).

ObjectRemoved:DeleteObjects

The DeleteObjects operation is called to delete multiple objects. For more information, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects).

ObjectRemoved:AbortMultipartUpload

The AbortMultipartUpload operation is called to cancel a multipart upload task and delete the parts uploaded in the task. For more information, see [AbortMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload).

ObjectRemoved:\*

The event name in a notification can be any event that starts with `ObjectRemoved:`.

**Note**

This type of event includes all new events that start with ObjectRemoved. For example, if the event name in a notification is ObjectRemoved:test, you can push the event to a specific receiver.

ObjectReplication (Copy an object)

ObjectReplication:ObjectCreated

An object is created in a data replication task.

ObjectReplication:ObjectRemoved

An object is deleted in a data replication task.

ObjectReplication:ObjectModified

An object is overwritten in a data replication task.

ObjectReplication:\*

The event name in a notification can be any event that starts with `ObjectReplication:`.

**Note**

This type of event includes all new events that start with ObjectReplication. For example, if the event name in a notification is ObjectReplication:test, you can push the event to a specific receiver.

ObjectRestore (Restore an object)

ObjectRestore:FinishRestore

An object restoration operation is complete. Cold Archive object is restored before it can be accessed. The event type supports only Cold Archive and Deep Cold Archive objects.

## Event notifications

The content of OSS event notifications is Base64-encoded. After the content is decoded, the content is in the JSON format. The following sample code provides an example of the decoded event notification content:

```
{"events": [
      {
        "eventName": "",  // The event name. 
        "eventSource": "", // The source that triggers the event notification rule. Valid value: acs:oss. 
        "eventTime": "", // The time when the event occurred. The time is a timestamp in the ISO 8601 standard. 
        "eventVersion": "", // The version of the event notification. The current version is 1.0. 
        "oss": {
            "bucket": {
                "arn": "", // The Alibaba Cloud Resource Name (ARN) of the bucket in the following format: acs:oss:region:uid:bucketname. 
                "name": "", // The name of the bucket that contains the objects to which the event notification rule applies. 
                "ownerIdentity": "" // The owner of the bucket. 
            }, 
            "object": {
                "deltaSize": "", // The size difference between the new object and the original object. If an object is created, the value of this parameter indicates the size of the object. If an object is overwritten, the value indicates the difference between the sizes of the new object and the original object. The value may be negative. 
                "eTag": "", // The ETag value of the object. 
                "key": "", // The name of the object. 
                "position": "", // The position from which the AppendObject operation starts. This parameter applies only to the ObjectCreated:AppendObject event. The first AppendObject operation on an object starts from byte 0 of the object. 
                "readFrom": "", // The position from which the GetObject operation starts. This parameter applies only to the ObjectDownloaded:GetObject event. If the GetObject operation is not performed by range, the value of this parameter is 0. Otherwise, the value refers to the position of the byte from which the GetObject operation starts. 
                "readTo": "", // The position at which the GetObject operation ends. This parameter applies only to the ObjectDownloaded:GetObject event. If the GetObject operation is not performed by range, the value of this parameter is the object size. Otherwise, the value refers to the position of the first byte after the byte at which the GetObject operation ends. 
                "size": "" // The size of the object. 
                }, 
        "ossSchemaVersion": "", // The version of the schema. The current value is 1.0. 
        "ruleId": "GetObject", // The ID of the event notification rule that is triggered by the event. 
        "region": "", // The region in which the bucket is located. 
        "requestParameters": {
            "sourceIPAddress": "" // The source IP address from which the request is sent. 
            }, 
        "responseElements": {
            "requestId": "" // The ID of the request. 
            }, 
        "userIdentity": {
            "principalId": "" // The UID of the requester. 
            }, 
        "xVars": {  // The custom parameters of an OSS callback. 
            "x:callback-var1":"value1",
            "x:vallback-var2":"value2"
            }
        }        
     }
  ]
}
```

The following sample code provides an example of an event notification:

```
{"events": [
      {
        "eventName": "ObjectDownloaded:GetObject",
        "eventSource": "acs:oss",
        "eventTime": "2016-07-01T11:17:30.000Z",
        "eventVersion": "1.0",
        "oss": {
            "bucket": {
                "arn": "acs:oss:cn-shenzhen:114895646818****:event-notification-test-shenzhen",
                "name": "event-notification-test-shenzhen",
                "ownerIdentity": "114895646818****"},
            "object": {
                "deltaSize": 0,
                "eTag": "0CC175B9C0F1B6468E1199E269772661",
                "key": "test",
                "readFrom": 0,
                "readTo": 1,
                "size": 1
            },
        "ossSchemaVersion": "1.0",
        "ruleId": "GetObjectRule",
        "region": "cn-shenzhen",
        "requestParameters": {
            "sourceIPAddress": "198.51.100.1"
            },
        "responseElements": {
            "requestId": "5FF16B65F05BC932307A3C3C"
            },
        "userIdentity": {
            "principalId": "114895646818****"
            },
        "xVars": {
            "x:callback-var1":"value1",
            "x:vallback-var2":"value2"
            }
        }        
     }
  ]
}
```

## **Procedure**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the left-side navigation tree, choose **Data Processing** > **Event Notification**.
    
4.  On the **Event Notification** page, click **Create Rule**.
    
5.  In the **Create Rule** panel, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the event notification rule.
    
    The name of an event notification rule must be unique in a region within an Alibaba Cloud account. The name must start with a letter and can contain only letters, digits, and hyphens (-). The name cannot exceed 85 characters in length.
    
    **Match Object**
    
    Select one or more events from the drop-down list. For example, if you want to receive a notification when a specific object is created or overwritten by copying an object, select CopyObject.
    
    You can configure an event notification rule for a specific object and specify multiple events that can trigger the rule. You can also configure multiple event notification rules for an object. When you configure multiple event notification rules, take note of the following items:
    
    -   If multiple event notification rules apply to the same object, the events configured in these rules must be different. For example, if you select CopyObject for Event Type when you create an event notification rule for objects whose names contain the `images` prefix, you cannot select CopyObject for Event Type when you create another event notification rule that applies to objects whose names contain the same prefix.
        
    -   If multiple event notification rules apply to different objects, the values of this parameter in these rules can be the same or different. For example, if you select PutObject for Event Type when you create an event notification rule for objects whose names contain the `images` prefix and the `.png` extension, you can select PutObject or DeleteObject for Event Type when you create another event notification rule for objects whose names contain the `log` prefix and the `.jpg` extension.
        
    
    **Important**
    
    If you delete an object from a versioning-enabled bucket without specifying a version ID, the event notification rule for the DeleteObject or DeleteObjects event is not triggered. In this case, no version of the object is deleted. The current version of the object is stored as a previous version and a delete marker is added to the object.
    
    For more information about object operations that can trigger events, see [Use event notifications to monitor object changes in real time](/help/en/oss/user-guide/real-time-processing-file-changes-oss-event-notifications#section-pez-4v9-nwv).
    
    **Resource Description**
    
    Specify the objects to which you want to apply the event notification rule.
    
    -   Select **Full Name** to apply the rule to an object whose name is the same as the specified name.
        
        -   To create a rule that applies to an object named exampleobject.txt in the root directory of the bucket, enter exampleobject.txt.
            
        -   To create a rule that applies to an object named myphoto.jpg in the destdir directory within the root directory of the bucket, enter destdir/myphoto.jpg.
            
    -   Select **Prefix/Suffix** to apply the rule to objects whose names contain a specific prefix and extension.
        
        -   To create a rule that applies to all objects in the bucket, leave Prefix and Suffix empty.
            
        -   To create a rule that applies to all objects in the examplefolder directory within the root directory of the bucket, set Prefix to examplefolder/ and leave Suffix empty.
            
        -   To create a rule that applies to all JPG objects in the bucket, leave Prefix empty and set Suffix to .jpg.
            
        -   To create a rule that applies to all MP3 objects in the examplefolder directory within the root directory of the bucket, set Prefix to examplefolder/ and Suffix to .mp3.
            
    
    To add another Resource Description entry, click **Add Condition**. You can specify up to five entries in an event notification rule.
    
    **Subscription Endpoint**
    
    Specify the endpoint to which event notifications are sent. Valid values include **HTTP** and **Queue**.
    
6.  Click **OK**.
    
    After you configure an event notification rule, the rule takes effect after approximately 10 minutes.
    

## FAQ

[Why do I receive no notifications when I delete objects?](/help/en/oss/user-guide/why-does-deleting-a-file-not-trigger-an-event-notification)

## References

-   You can configure event notification rules to monitor specific objects in OSS and receive notifications about object changes. For more information, see [Tutorial: Use SMQ to send notifications of OSS events](/help/en/oss/user-guide/tutorial-use-mns-to-send-notifications-for-oss-events#task-2092253).
    
-   If you fail to receive a message body at your HttpEndpoint, the POST method might be the cause. To resolve the issue, see [Cannot receive the message body with a PHP HttpEndpoint in Simple Message Queue (formerly MNS)](/help/en/mns/support/fail-to-receive-the-http-body-when-i-write-the-httpendpoint-operation-in-php)
    
-   Refer to [Upload callbacks](/help/en/oss/user-guide/upload-callbacks-12) to implement upload callbacks.
