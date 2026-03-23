Queries the details of one or more image caches.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eci/2018-08-08/DescribeImageCaches)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eci/2018-08-08/DescribeImageCaches)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

eci:DescribeImageCaches

get

ImageCache

`acs:eci:{#regionId}:{#accountId}:imagecache/*`

ImageCache

`acs:eci:{#regionId}:{#accountId}:imagecache/{#imagecacheId}`

-   eci:tag

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID.

cn-hangzhou

RegionId

string

Yes

The region ID.

cn-hangzhou

ImageCacheId

string

No

The ID of the image cache.

imc-bp195erqe9o2pb09\*\*\*\*

ImageCacheName

string

No

The name of the image cache.

testcache

SnapshotId

string

No

The ID of the snapshot that corresponds to the image cache.

s-2zec5oj8e1yhxijt\*\*\*\*

Image

string

No

The container image.

nginx

ResourceGroupId

string

No

The ID of the resource group to which the image cache belongs.

rg-2df3isufhi38\*\*\*\*

Tag

array<object>

No

The tags that are attached to the image cache.

object

No

The tags that are attached to the image cache. You can specify up to 20 tags.

Key

string

No

The key of the tag.

imc

Value

string

No

The value of the tag.

test

MatchImage

array

No

The container images that are used to query the matched image caches. You can specify up to 100 images.

registry-vpc.cn-hangzhou.aliyuncs.com/eci\_open/nginx:1.15.10-perl

string

No

The container images that are used to query the matched image caches. You can specify up to 100 images.

registry-vpc.cn-hangzhou.aliyuncs.com/eci\_open/nginx:1.15.10-perl

Limit

integer

No

The maximum number of entries to return.

20

NextToken

string

No

The token that is used for the next query. You can obtain the token from the \`NextToken\` parameter in the response to the previous API call.

AAAAAdDWBF2\*\*\*\*

ImageFullMatch

boolean

No

Specifies whether to perform an exact match for the container images.  
This parameter is used to further filter the query results when \`MatchImage\` is specified.  
  

true

ImageMatchCountRequest

integer

No

The number of image caches that exactly match the container images.  
This parameter is used to further filter the query results when \`MatchImage\` is specified.  
  

3

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

39FC2E43-3DD7-4CEF-9EF4-E4AD6E635301

ImageCaches

array<object>

The list of image caches.

array<object>

The list of image caches.

Images

array

The list of images in the image cache.

string

The list of images in the image cache.

registry-vpc.cn-hangzhou.aliyuncs.com/eci\_open/nginx:1.15.10-perl

CreationTime

string

The time when the image cache was created.

2021-02-09T02:24:07Z

Status

string

The status of the image cache. Valid values:

-   Preparing: The image cache is being prepared.
    
-   Creating: The image cache is being created.
    
-   Ready: The image cache is created.
    
-   Failed: The image cache failed to be created.
    
-   Updating: The image cache is being updated.
    
-   UpdateFailed: The image cache failed to be updated.
    

The image cache can be used only when it is in the Ready state.

Ready

Progress

string

The progress of creating the snapshot for the image cache.

**Note**

If the instant image cache feature is enabled, a temporary local snapshot is created before a standard snapshot is created. This parameter indicates the progress of creating the standard snapshot.

100%

ExpireDateTime

string

The expiration time.

2019-11-10T09:00:48Z

LastMatchedTime

string

The last time when the image cache was matched.

2021-08-18T03:48:10Z

ContainerGroupId

string

The ID of the container group.

eci-bp18oq3m15prd9jb\*\*\*\*

Tags

array<object>

The list of tags of the image cache.

object

The list of tags of the image cache.

Key

string

The tag key.

imc

Value

string

The tag value.

test

Events

array<object>

The events that are generated when the image is pulled for the image cache.

object

The events that are generated when the image is pulled for the image cache.

Type

string

The type of the event.

Normal

LastTimestamp

string

The time when the event ended.

2021-02-09T02:24:48Z

Message

string

The event message.

Successfully check image cache resource.

Name

string

The name of the event.

imagetest.1661f31f851a\*\*\*\*

Count

integer

The number of events.

1

FirstTimestamp

string

The time when the event started.

2021-02-09T02:24:48Z

Reason

string

The reason for the event.

Started

ImageCacheId

string

The ID of the image cache.

imc-bp195erqe9o2pb09\*\*\*\*

RegionId

string

The region ID.

cn-beijing

SnapshotId

string

The ID of the snapshot that corresponds to the image cache.

s-2zec5oj8e1yhxijt\*\*\*\*

FlashSnapshotId

string

The ID of the local snapshot. If the instant image cache feature is enabled, a temporary local snapshot is created.

s-bp12w3v37sit96t6\*\*\*\*

ResourceGroupId

string

The ID of the resource group.

rg-2df3isufhi38\*\*\*\*

ImageCacheSize

integer

The size of the image cache. Unit: GiB.

20

ImageCacheName

string

The name of the image cache.

imagetest

EliminationStrategy

string

The policy for retaining the image cache. If you leave this parameter empty, the image cache is always retained.

You can set this parameter to LRU. This value indicates that the image cache can be automatically deleted. When the number of image caches reaches the quota limit, the system automatically deletes the least recently used image caches for which \`EliminationStrategy\` is set to \`LRU\`.

LRU

NextToken

string

The returned pagination token.

AAAAAdDWBF2\*\*\*\*

TotalCount

integer

The total number of entries returned.

15

## Examples

Success response

`JSON` format

```
{
  "RequestId": "39FC2E43-3DD7-4CEF-9EF4-E4AD6E635301",
  "ImageCaches": [
    {
      "Images": [
        "registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.15.10-perl"
      ],
      "CreationTime": "2021-02-09T02:24:07Z",
      "Status": "Ready",
      "Progress": "100%",
      "ExpireDateTime": "2019-11-10T09:00:48Z",
      "LastMatchedTime": "2021-08-18T03:48:10Z",
      "ContainerGroupId": "eci-bp18oq3m15prd9jb****",
      "Tags": [
        {
          "Key": "imc",
          "Value": "test"
        }
      ],
      "Events": [
        {
          "Type": "Normal",
          "LastTimestamp": "2021-02-09T02:24:48Z",
          "Message": "Successfully check image cache resource.",
          "Name": "imagetest.1661f31f851a****",
          "Count": 1,
          "FirstTimestamp": "2021-02-09T02:24:48Z",
          "Reason": "Started"
        }
      ],
      "ImageCacheId": "imc-bp195erqe9o2pb09****",
      "RegionId": "cn-beijing",
      "SnapshotId": "s-2zec5oj8e1yhxijt****",
      "FlashSnapshotId": "s-bp12w3v37sit96t6****",
      "ResourceGroupId": "rg-2df3isufhi38****",
      "ImageCacheSize": 20,
      "ImageCacheName": "imagetest",
      "EliminationStrategy": "LRU"
    }
  ],
  "NextToken": "AAAAAdDWBF2****",
  "TotalCount": 15
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Account.Arrearage

Your account has an outstanding payment.

Your account has an outstanding payment.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

ServiceNotEnabled

%s

The service on which this request depends has not been activated. Please activate and try again.

403

Forbidden.SubUser

The specified action is not available for you.

403

Forbidden.UserBussinessStatus

This operation is not allowed, because you have overdue bills. Pay the overdue bill and try again.

403

Forbidden.UserNotRealNameAuthentication

This operation is not allowed, because you have not passed the real-name verification.

403

NoPermission

The RAM role does not belong to ECS.

See [Error Codes](https://api.alibabacloud.com/document/Eci/2018-08-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eci/2018-08-08/DescribeImageCaches#workbench-doc-change-demo) for a complete list.
