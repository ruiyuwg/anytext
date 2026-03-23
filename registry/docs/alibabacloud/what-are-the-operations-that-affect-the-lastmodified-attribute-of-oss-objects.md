LastModified (last modified time) is an important attribute of Object Storage Service (OSS) objects. It is used in billing, incremental migration, and lifecycle rules. When you perform specific operations on objects, the LastModified values of the objects are updated.

The following table lists the operations that update the LastModified values of objects.

**Action**

**Operation**

Modify the access control list (ACL) of an object

CopyObject

PutObjectACL

Modify the user metadata of an object

CopyObject

Modify the storage class of an object

CopyObject

Modify the encryption algorithm of an object

CopyObject

Overwrite an existing object

PutObject: upload an object whose name is the same as the existing object

CopyObject: copy an object whose name is the same as the existing object

**Important**

-   When you change the storage class of an object by using the OSS console, ossutil, ossbrowser, or OSS SDKs, OSS generates a new object of the specified storage class to overwrite the original object.
    
-   The last modified time of an object is updated when the object is overwritten or the storage class and encryption method are changed by using CopyObject. If the object whose last modified time is updated is an Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive object and is stored for less than the minimum storage duration, extra charge for the unutilised storage duration will be incurred. For more information, see [Storage fees](/help/en/oss/storage-fees#concept-2558327).
    
    For example, if you change the storage class of an object from IA to Archive by using the OSS console after the object is stored for 12 days, the last modified time of the object is updated. An IA object has a minimum storage duration of 30 days. In this case, you are charged based on the total size and storage duration (12 days) of the IA objects and storage usage of the IA object that is stored for less than the minimum storage duration (18 days).
