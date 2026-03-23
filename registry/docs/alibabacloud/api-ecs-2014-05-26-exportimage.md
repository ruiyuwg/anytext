Exports a custom image to an Object Storage Service (OSS) bucket in the same region.

## Operation description

Take note of the following items:

-   Make sure that you are familiar with the prerequisites and considerations. For more information, see [Export a custom image](/help/en/ecs/user-guide/export-a-custom-image).
    
-   The `ImageFormat` parameter is available only for the following regions: Japan (Tokyo), Indonesia (Jakarta), Germany (Frankfurt), UAE (Dubai), US (Virginia), UK (London), Singapore, Malaysia (Kuala Lumpur), and US (Silicon Valley). By default, custom images are exported in the RAW format in regions where the ImageFormat parameter is unsupported.
    
-   Use Resource Access Management (RAM) to authorize Elastic Compute Service (ECS) to write data to OSS. To complete the authorization, perform the following operations:
    
    -   Create a role named `AliyunECSImageExportDefaultRole` and attach the following policy to the role:
        
        ```
           {
             "Statement": [
               {
                 "Action": "sts:AssumeRole",
                 "Effect": "Allow",
                 "Principal": {
                   "Service": [
                     "ecs.aliyuncs.com"
                   ]
                 }
               }
             ],
             "Version": "1"
           }
        ```
        
    -   Attach the `AliyunECSImageExportRolePolicy` system policy, which is the default policy that grants ECS the permissions to export images, to the `AliyunECSImageExportDefaultRole` role. For more information, go to the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/?spm=5176.2020520101.0.0.64c64df5dfpmdY#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunECSImageImportDefaultRole%22,%20%22TemplateId%22:%20%22ECSImportRole%22%7D,%20%22request2%22:%20%7B%22RoleName%22:%20%22AliyunECSImageExportDefaultRole%22,%20%22TemplateId%22:%20%22ECSExportRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fecs.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22ECS%22%7D) page. You can also create a custom policy that contains the following content and attach the policy to the role:
        
        ```
             {
               "Version": "1",
               "Statement": [
                 {
                   "Action": [
                     "oss:GetObject",
                     "oss:PutObject",
                     "oss:DeleteObject",
                     "oss:GetBucketLocation",
                     "oss:GetBucketInfo",
                     "oss:AbortMultipartUpload",
                     "oss:ListMultipartUploads",
                     "oss:ListParts"
                   ],
                   "Resource": "*",
                   "Effect": "Allow"
                 }
               ]
             }
        ```
        

After you export the images, take note of the following items:

Each exported custom image is stored in the specified OSS bucket. You can download the custom image. For more information, see [Download OSS objects by using simple download](/help/en/oss/upload-download-and-manage-objects-download-objects).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ExportImage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ExportImage)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:ExportImage

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the custom image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ImageId

string

Yes

The custom image ID.

m-bp67acfmxazb4p\*\*\*\*

OSSBucket

string

Yes

The OSS bucket in which you want to store the exported custom image.

testexportImage

OSSPrefix

string

No

The prefix for the name of the OSS object. The prefix must be 1 to 30 characters in length and can contain digits and letters.

EcsExport

ImageFormat

string

No

The format in which you want to export the custom image. Valid values:

-   raw
-   vhd
-   qcow2
-   vmdk
-   vdi

Default value: raw.

raw

RoleName

string

No

The name of the RAM role that you want to use to export the custom image.

AliyunECSImageExportDefaultRole

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

C8B26B44-0189-443E-9816-D951F596\*\*\*\*

TaskId

string

The ID of the task that is used to export the custom image.

tsk-bp67acfmxazb4p\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C8B26B44-0189-443E-9816-D951F596****",
  "TaskId": "tsk-bp67acfmxazb4p****",
  "RegionId": "cn-hangzhou"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

An input parameter "RegionId" that is mandatory for processing the request is not supplied.

\-

400

MissingParameter

An input parameter "ImageId" that is mandatory for processing the request is not supplied.

\-

400

MissingParameter

An input parameter "OSSBucket" that is mandatory for processing the request is not supplied.

\-

400

InvalidImageName.Malformed

The specified Image name is wrongly formed.

The specified image name is invalid. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. It can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-). It cannot contain http:// or https://.

400

InvalidOSSPrefix.Malformed

The specified OSSPrefix format is wrongly formed.

The specified OssPrefix parameter is invalid.

400

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

400

InvalidRegion.NotSupport

The specified region does not support image import or export.

The specified region does not support the operation.

400

IncorrectImageStatus

The specified Image is not available.

\-

400

InvalidImageFormat.Malformed

The specified Image Format is wrongly formed.

The specified image format is invalid.

400

InvalidOSSBucket.NotFound

The specified OSS bucket does not exist in this region.

The specified bucket does not exist.

400

OperationDenied

The specified image contains the snapshot of the data disk,does not support this operation.

Images that contain data disk snapshots do not support this operation.

400

InvalidImage.DiskAmountOrSize

%s

The image cannot be exported because it contains more than four data disk snapshots or because one of its data disk snapshot exceeds 500 GiB in size.

400

ImageNotSupported

The specified Image contains encrypted snapshots, do not support export.

The specified image contains encrypted snapshots and cannot be exported.

400

InvalidOSSObject.NeedRestore

The specified OSS object is a archive object, need restore first.

\-

400

InvalidOSSBucket.NotMatched

The specified OSS bucket is incorrect, %s.

The specified DiskDeviceMapping.N.OSSBucket parameter is invalid. For more information, see the return value of the %s placeholder in the error message.

400

InvalidImage.DiskAmountOrSize

The diskSize of the image exceeds the maximum size.

\-

400

InvalidImageFormat.RegionNotSupported

The specified image format is not supported in current region.

\-

403

ImageNotSupported

The specified image from the image market, do not support export image.

The specified image is an Alibaba Cloud Marketplace image and cannot be exported.

403

ImageIsExporting

The specified Image is being exported. You can use the DescribeTasks API to check the status of existing tasks.

The specified image is being exported. You can use the DescribeTasks API to query the status of tasks in progress.

403

ExportImageFailed

Exporting image is failed, Please contact the administrator.

The image cannot be exported. Contact your system administrator.

403

UserNotInTheWhiteList

The user is not in the white list of exporting image.

You are not authorized to export images.

403

NoSetRoletoECSServiceAcount

ECS service account Have no right to access your OSS.please attach a role of access your oss to ECS service account.

The official ECS website service account does not have permissions to access your specified OSS bucket and object.

403

InvalidOSS.NotAuthorized

The specified OSS bucket or object is not allowed to access.

You do not have the permission to access the specified OSS bucket and object.

403

ConcurrentQuotaExceed.ExportImage

%s

\-

403

WeeklyQuotaExceed.ExportImage

%s

\-

403

InvalidImageLicense.NotSupported

%s

\-

403

InvalidImageCategory.NotSupported

The specified image category is not supported.

The type of mirror to which the specified mirror belongs (ImageCategory or more commonly known as ImageOwnerAlias) does not support this operation.

403

InvalidOSSBucket.EncryptUnsupported

Accessing objects from encrypted OSS bucket is not supported.

You cannot read objects from encrypted OSS buckets.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

InvalidImageId.NotFound

The specified image %s does not exist.

The specified image does not exist under the current account. check whether the image id is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ExportImage?updateTime=2025-04-29#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ExportImage?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ExportImage?updateTime=2024-12-17#workbench-doc-change-demo)

2023-05-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ExportImage?updateTime=2023-05-26#workbench-doc-change-demo)
