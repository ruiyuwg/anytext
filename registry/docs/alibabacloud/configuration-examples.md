This topic provides several common examples of lifecycle configurations so that you can better manage objects in your bucket.

## Specify a filter condition

Each lifecycle rule contains at least one filter condition, which determines whether the lifecycle rule applies to specific or all objects in a bucket. The following examples show how to specify a filter condition in lifecycle configurations:

### Example 1: Convert the storage class of and delete the objects whose names contain a specific prefix after a specific number of days has elapsed

In the lifecycle rule configurations, the `doc/` prefix is specified as a filter condition. This condition specifies that the lifecycle rule applies only to objects whose names are prefixed with `doc/`, such as `doc/test1.txt` and `doc/test2.jpg`. The rule specifies that the storage class of objects that match the rule is converted to Infrequent Access (IA) 180 days after the objects are last modified and the objects that match the rule are deleted 365 days after the objects are last modified.

The following examples show the configurations of the lifecycle rule in the XML format and in the Object Storage Service (OSS) console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule0</ID>
        <Prefix>doc/</Prefix>
        <Status>Enabled</Status>    
        <Transition>
          <Days>180</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
        <Expiration>
          <Days>365</Days>
        </Expiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    ![rule1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363856.jpg)
    

### Example 2: Delete all objects in the bucket after a specific number of days has elapsed

In the following lifecycle configuration example, the filter condition specifies that the lifecycle rule applies to all objects in the bucket. All objects in the bucket expire 300 days after the objects are last modified based on the lifecycle rule.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule1</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <Expiration>
          <Days>300</Days>
        </Expiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    ![rule2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363907.jpg)
    

### Example 3: Delete all objects that are modified before a specific date in the bucket

In the following lifecycle configuration example, the Prefix parameter is not configured and the filter condition specifies that the lifecycle rule applies to all objects in the bucket. All objects that are modified before December 30, 2023 expire based on the lifecycle rule.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule0</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <Expiration>
          <CreatedBeforeDate>2023-12-30T00:00:00.000Z</CreatedBeforeDate>
        </Expiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    ![rule3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363913.jpg)
    

## Specify overlapping filter conditions

The following examples show whether the operations specified in lifecycle rules conflict when the filter conditions of the lifecycle rules overlap.

### Example 1: Operations specified by lifecycle rules based on overlapping prefixes (no conflicts)

This example shows how lifecycle rules are applied when the conditions specified in the lifecycle rules do not conflict. Assume that you specify the following lifecycle rules in which overlapped prefixes are configured:

-   Rule 1 applies to objects whose names contain the test/ prefix and specifies that the storage class of these objects is converted to Archive 30 days after the objects are last modified.
    
-   Rule 2 applies to all objects in the bucket and specifies that objects are deleted 365 days after the objects are last modified.
    

Execution result: The two rules do not conflict. Therefore, the operations specified in the two lifecycle rules take effect.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule1</ID>
        <Prefix>test/</Prefix>
        <Status>Enabled</Status>
        <Transition>
          <Days>30</Days>
          <StorageClass>Archive</StorageClass>
        </Transition>
      </Rule>
     <Rule>
        <ID>test-rule2</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <Expiration>
          <Days>365</Days>
        </Expiration>
      </Rule>  
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    -   Rule 1![rule7](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363967.jpg)
        
    -   Rule 2![rule6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363943.jpg)
        

### Example 2: Operations specified by lifecycle rules based on tags (conflicts)

This example shows how lifecycle rules are applied when the conditions specified in the lifecycle rules conflict. Assume that you specify the following lifecycle rules:

-   Rule 1 specifies a filter condition based on Tag A (tag1/value1) and specifies that the storage class of objects to which the tag is added is converted to IA 180 days after the objects are last modified.
    
-   Rule 2 specifies a filter condition based on Tag B (tag2/value2) and specifies that objects to which the tag is added expire 10 days after the objects are last modified.
    

If an object has the two tags specified in the two lifecycle rules, both lifecycle rules apply to the object.

Execution result: The object expires 10 days after the object is last modified. After the object is deleted, the storage class conversion operation specified in the first lifecycle rule cannot be performed. Therefore, only the expiration operation specified in the second lifecycle rule takes effect.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule1</ID>
        <Prefix></Prefix>
        <Tag>
          <Key>tag1</Key>
          <Value>value1</Value>
        </Tag>
        <Status>Enabled</Status>
        <Transition>
          <Days>180</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
      </Rule>
      <Rule>
        <ID>test-rule2</ID>
        <Prefix></Prefix>
        <Tag>
          <Key>tag2</Key>
          <Value>value2</Value>
        </Tag>
        <Status>Enabled</Status>
        <Expiration>
          <Days>10</Days>
        </Expiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    -   Rule 1![rule4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363926.jpg)
        
    -   Rule 2![rule5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363928.jpg)
        

### Example 3: Operations specified by lifecycle rules based on the same time (conflicts)

This example shows how lifecycle rules are applied when the conditions specified in the lifecycle rules conflict. Assume that you specify the following lifecycle rules:

-   Rule 1: Specify that objects that are last modified for more than 365 days are converted to IA objects.
    
-   Rule 2: Specify that objects that are last modified for more than 365 days are deleted.
    

Execution result: The objects that match the rules are deleted after the objects are last modified for more than 365 days.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>rule1</ID>
        <Prefix></Prefix>    
        <Status>Enabled</Status>
        <Transition>
          <Days>365</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
      </Rule>
      <Rule>
        <ID>rule2</ID>
        <Prefix></Prefix>    
        <Status>Enabled</Status>
        <Expiration>
          <Days>365</Days>
        </Expiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    -   Rule 1![rule17](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p502796.jpg)
        
    -   Rule 2![rule6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363943.jpg)
        

### Example 4: Operations specified by lifecycle rules based on overlapping prefixes and the same operations (conflicts)

This example shows how lifecycle rules are applied when the conditions specified in the lifecycle rules conflict. Assume that you specify the following lifecycle rules:

-   Rule 1 specifies the storage class of objects whose names contain the logs/ prefix is converted to IA 180 days after the objects are last modified.
    

-   Rule 2 specifies the storage class of all objects is converted to IA 30 days after the objects are last modified.
    

Execution result: The storage class of all objects is converted to IA 30 days after the objects are last modified.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>rule1</ID>
        <Prefix>logs/</Prefix>
        <Status>Enabled</Status>
        <Transition>
          <Days>180</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
      </Rule>
     <Rule>
        <ID>rule2</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <Transition>
          <Days>30</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
      </Rule>  
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    -   Rule 1![rule32](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p502843.jpg)
        
    -   Rule 2![rule30](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p502840.jpg)
        

## Disable lifecycle rules

This example shows how lifecycle rules are applied when the conditions specified in the lifecycle rules conflict. Assume that you specify the following lifecycle rules:

-   Rule 1 is disabled and specifies the storage class of objects whose names contain the `logs/` prefix is converted to IA 100 days after the objects are created.
    
-   Rule 2 is enabled and specifies the storage class of objects whose names contain the `documents/` prefix is converted to Archive 50 days after the objects are created.
    

Execution result: Only the lifecycle rule in which the Status parameter is set to Enabled takes effect.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule1</ID>
        <Prefix>logs/</Prefix>
        <Status>Disabled</Status>
        <Transition>
          <Days>100</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
      </Rule>
      <Rule>
        <ID>test-rule2</ID>
        <Prefix>documents/</Prefix>
        <Status>Enabled</Status>
        <Transition>
          <Days>50</Days>
          <StorageClass>Archive</StorageClass>
        </Transition>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    -   Rule 1![rule8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p363970.jpg)
        
    -   Rule 2![rule9](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p364070.jpg)
        

## Configure lifecycle rules for versioned buckets

In a versioned bucket, each object has a current version and may have previous versions. For more information about versioning, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

### Example 1: Convert the storage class of and delete the previous versions of objects after a specific number of days has elapsed

The lifecycle rule specifies that the storage class of all objects in the bucket is converted to IA 10 days after the objects are last modified and to Archive 60 days after the objects become previous versions. In addition, objects are deleted 90 days after the objects become previous versions.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule0</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <Transition>
          <Days>10</Days>
          <StorageClass>IA</StorageClass>
        </Transition>
        <NoncurrentVersionTransition>
          <NoncurrentDays>60</NoncurrentDays>
          <StorageClass>Archive</StorageClass>
        </NoncurrentVersionTransition>
        <NoncurrentVersionExpiration>
          <NoncurrentDays>90</NoncurrentDays>
        </NoncurrentVersionExpiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    ![rule9](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p364135.jpg)
    

### Example 2: Delete expired delete markers

If the current version of an object is a delete marker and other versions of the object are deleted, the delete marker expires. You can configure the following lifecycle rule to delete expired delete markers.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>test-rule0</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <Expiration>
          <ExpiredObjectDeleteMarker>true</ExpiredObjectDeleteMarker>
        </Expiration>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    ![rule10](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p364136.jpg)
    

## Configure lifecycle rules to delete expired parts

Assume that you use multipart upload to upload an object and do not call the CompleteMultipartUpload operation to complete the multipart upload task. In this case, you can configure a lifecycle rule to specify that parts whose names contain the logs prefix expire 5 days after the parts are uploaded.

The following examples show the configurations of the lifecycle rule in the XML format and in the OSS console:

-   Configurations in the XML format
    
    ```
    <LifecycleConfiguration>
      <Rule>
        <ID>lifecyclerule1</ID>
        <Prefix>logs/</Prefix>
        <Status>Enabled</Status>
        <AbortMultipartUpload>
          <Days>5</Days>
        </AbortMultipartUpload>
      </Rule>
    </LifecycleConfiguration>
    ```
    
-   Configurations in the OSS console
    
    **Note**
    
    The following figure shows the configurations of the preceding lifecycle rule in the OSS console. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
    ![rule11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9790632271/p364138.jpg)
    

## References

-   [Fees related to lifecycle rules](/help/en/oss/user-guide/fees-related-to-lifecycle-rules)
