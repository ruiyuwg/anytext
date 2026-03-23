This topic provides relevant examples of resource change logs that are delivered to Simple Message Queue (formerly MNS) for storage. The following sections describe the content of the examples and the parameters that are used.

## Examples

The following three snippets show sample resource change logs for the create, modify, and delete operations on resources:

-   Create a resource
    
    In single-account mode, you use an Alibaba Cloud account whose ID is `132585902944****` to create an Object Storage Service (OSS) bucket named `test_bucket` in the China (Beijing) region. The following code shows the corresponding resource change log:
    
    ```
    {
        "requestId": "c9e582cf-8aba-47bc-8bf3-8c2c5c7fa615",
        "dataType": "ConfigurationItemChangeNotification",
        "eventName": "ResourceAdd",
        "configurationItemDiff": {
            "changedProperties": {},
            "changeType": "DISCOVERED"
        },
        "eventType": "ResourceChange",
        "notificationCreationTime": 1629883217558,
        "configurationItem": {
            "accountId": 132585902944****,
            "resourceCreateTime": 1629883110000,
            "resourceId": "test_bucket",
            "resourceStatus": "",
            "regionId": "cn-beijing",
            "configuration": {
                "AccessControlList": {
                    "Grant": "private"
                },
                "ServerSideEncryptionRule": {
                    "SSEAlgorithm": "None"
                },
                "Comment": "",
                "CreationDate": "2021-08-25T09:18:30.000Z",
                "Owner": {
                    "DisplayName": "132585902944****",
                    "ID": "132585902944****"
                },
                "StorageClass": "Standard",
                "DataRedundancyType": "LRS",
                "AllowEmptyReferer": "true",
                "Name": "test_bucket",
                "BucketPolicy": {
                    "LogPrefix": "",
                    "LogBucket": ""
                },
                "ExtranetEndpoint": "oss-cn-beijing.aliyuncs.com",
                "IntranetEndpoint": "oss-cn-beijing-internal.aliyuncs.com",
                "Location": "oss-cn-beijing"
            },
            "captureTime": 1629883213000,
            "resourceName": "test_bucket",
            "availabilityZone": "",
            "resourceType": "ACS::OSS::Bucket",
            "tags": {}
        }
    }
    ```
    
-   Modify a resource
    
    In single-account mode, you use an Alibaba Cloud account whose ID is `100931896542****` to change the name of a disk in Elastic Compute Service (ECS) in the China (Hohhot) region from `test_disk1` to `test_disk2`. The following code shows the corresponding resource change log:
    
    ```
    {
        "requestId": "bb6f19ff-9c58-45c3-b79d-a20469c37eae",
        "dataType": "ConfigurationItemChangeNotification",
        "eventName": "ResourceUpdate",
        "configurationItemDiff": {
            "changedProperties": {
                "DiskName": {
                    "changeType": "MODIFY",
                    "previousValue": "test_disk1",
                    "updatedValue": "test_disk2"
                }
            },
            "changeType": "MODIFY"
        },
        "eventType": "ResourceChange",
        "notificationCreationTime": 1629879815173,
        "configurationItem": {
            "accountId": 100931896542****,
            "resourceCreateTime": 162987938****,
            "resourceId": "d-hp3ezlgii0ltupns****",
            "resourceStatus": "Available",
            "regionId": "cn-huhehaote",
            "configuration": {
                "DetachedTime": "",
                "Category": "cloud_essd",
                "KMSKeyId": "",
                "Description": "",
                "ResourceGroupId": "",
                "Size": 40,
                "Encrypted": false,
                "DeleteAutoSnapshot": false,
                "DiskChargeType": "PostPaid",
                "MultiAttach": "Disabled",
                "ExpiredTime": "2029-09-08T16:00Z",
                "ImageId": "",
                "StorageSetId": "",
                "Tags": {
                    "Tag": []
                },
                "Status": "Available",
                "AttachedTime": "",
                "StorageClusterId": "",
                "ZoneId": "cn-huhehaote-a",
                "InstanceId": "",
                "ProductCode": "",
                "SourceSnapshotId": "",
                "Device": "",
                "PerformanceLevel": "PL1",
                "DeleteWithInstance": false,
                "EnableAutomatedSnapshotPolicy": false,
                "EnableAutoSnapshot": true,
                "AutoSnapshotPolicyId": "",
                "DiskName": "test_disk2",
                "BdfId": "",
                "OperationLocks": {
                    "OperationLock": []
                },
                "Portable": true,
                "Type": "data",
                "SerialNumber": "hp3ezlgii0ltupns****",
                "CreationTime": "2021-08-25T08:16:20Z",
                "RegionId": "cn-huhehaote",
                "DiskId": "d-hp3ezlgii0ltupns****"
            },
            "captureTime": 1629879808000,
            "resourceName": "test_disk2",
            "availabilityZone": "cn-huhehaote-a",
            "resourceType": "ACS::ECS::Disk",
            "tags": {}
        }
    }
    ```
    
-   Delete a resource
    
    In single-account mode, you use an Alibaba Cloud account whose ID is `120886317861****` to delete an OSS bucket named `test_bucket` in the China (Beijing) region. The following code shows the corresponding resource change log:
    
    ```
    {
        "requestId": "e63b8fca-74d4-4709-9ea3-b7e0a3159294",
        "dataType": "ConfigurationItemChangeNotification",
        "eventName": "ResourceDelete",
        "configurationItemDiff": {
            "changedProperties": {},
            "changeType": "REMOVE"
        },
        "eventType": "ResourceChange",
        "notificationCreationTime": 1629883026181,
        "configurationItem": {
            "accountId": 132585902944****,
            "resourceCreateTime": 1629882024000,
            "resourceId": "test_bucket",
            "resourceStatus": "",
            "regionId": "cn-beijing",
            "configuration": {
                "AccessControlList": {
                    "Grant": "private"
                },
                "ServerSideEncryptionRule": {
                    "SSEAlgorithm": "None"
                },
                "Comment": "",
                "CreationDate": "2021-08-25T09:00:24.000Z",
                "Owner": {
                    "DisplayName": "132585902944****",
                    "ID": "132585902944****"
                },
                "StorageClass": "Standard",
                "DataRedundancyType": "LRS",
                "AllowEmptyReferer": "true",
                "Name": "test_bucket",
                "BucketPolicy": {
                    "LogPrefix": "",
                    "LogBucket": ""
                },
                "ExtranetEndpoint": "oss-cn-beijing.aliyuncs.com",
                "IntranetEndpoint": "oss-cn-beijing-internal.aliyuncs.com",
                "Location": "oss-cn-beijing"
            },
            "captureTime": 1629883020000,
            "resourceName": "test_bucket",
            "availabilityZone": "",
            "resourceType": "ACS::OSS::Bucket",
            "tags": {}
        }
    }
    ```
    

## Parameters

The following table describes the parameters used in resource change logs that are delivered to SMQ.

**Parameter**

**Description**

dataType

The type of the message received by SMQ. Valid values:

-   ConfigurationItemChangeNotification: resource change log
    
-   NonCompliantNotification: resource non-compliance event
    

eventName

The name of the event. Valid values:

-   ResourceAdd: A resource is created.
    
-   ResourceUpdate: A resource is modified.
    
-   ResourceDelete: A resource is deleted.
    

configurationItemDiff

The information about the resource change, including the change type and details.

eventType

The type of the event. Valid values:

-   ResourceChange: resource change event
    
-   ResourceCompliance: resource non-compliance event
    

notificationCreationTime

The timestamp when the message was generated.

configurationItem

The current configuration of the resource, including the ID and status of the resource, the region where the resource resides, and the ID of the account to which the resource belongs.

captureTime

The timestamp when Cloud Config detected the resource change and generated the event.

resourceName

The name of the resource.

availabilityZone

The ID of the zone where the resource resides.

resourceType

The type of resource. For more information about the resource types supported by Cloud Config, see [Supported resource types and relationships in Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config#concept-127411-zh).

tags

The tags of the resource.
