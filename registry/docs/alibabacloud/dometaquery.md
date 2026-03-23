Call the DoMetaQuery operation to query objects that meet specified conditions and list the object information based on a specified field and sorting order. You can also use nested Query elements to perform complex queries and use aggregate operations to collect and analyze statistics on the values of different fields.

## Precautions

To query objects that meet specified conditions, you must have the `oss:DoMetaQuery` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Request syntax

### **Scalar retrieval**

```
POST /?metaQuery&comp=query&mode=basic HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue 
<?xml version="1.0" encoding="UTF-8"?>
<MetaQuery>
  <NextToken></NextToken>
  <MaxResults>5</MaxResults>
  <Query>{"Field": "Size","Value": "1048576","Operation": "gt"}</Query>
  <Sort>Size</Sort>
  <Order>asc</Order>
  <Aggregations>
    <Aggregation>
      <Field>Size</Field>
      <Operation>sum</Operation>
    </Aggregation>
    <Aggregation>
      <Field>Size</Field>
      <Operation>max</Operation>
    </Aggregation>
  </Aggregations>
</MetaQuery>
```

### **Vector retrieval**

```
POST /?metaQuery&comp=query&mode=semantic HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue 
<?xml version="1.0" encoding="UTF-8"?>
<MetaQuery>
  <MaxResults>99</MaxResults>
  <Query>An aerial view of a snow-covered forest</Query>
  <MediaTypes>
    <MediaType>image</MediaType>
  </MediaTypes>  
  <SimpleQuery>{"Operation":"gt", "Field": "Size", "Value": "30"}</SimpleQuery>
</MetaQuery>
```

## Request headers

All headers in a DescribeRegions request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request elements

### **Scalar retrieval**

**Name**

**Type**

**Required**

**Example**

**Description**

mode

String

Yes

basic

Specifies that the retrieval mode is scalar retrieval.

MetaQuery

Container

Yes

N/A

The container for query conditions.

Child nodes: NextToken, MaxResults, Query, Sort, Order, and Aggregations

NextToken

String

No

MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw\*\*\*\*

The token used for pagination when the total number of objects is greater than the value of MaxResults.

The list of object information is returned in lexicographical order starting from the object that is specified by NextToken.

When you call this operation for the first time, leave this field empty.

Parent node: MetaQuery

MaxResults

Integer

No

5

The maximum number of objects to return. Valid values: 0 to 100.

If you do not set this parameter or set it to 0, the default value is 100.

Parent node: MetaQuery

Query

String

Yes

{"Field": "Size","Value": "1048576","Operation": "gt"}

The query condition. It includes the following options:

-   Operation: The operator. Valid values: eq (equal to), gt (greater than), gte (greater than or equal to), lt (less than), lte (less than or equal to), match (fuzzy query), prefix (prefix query), and (logical AND), or (logical OR), and not (logical NOT).
    
-   Field: The field name. For more information about the supported fields and the operators supported by each field, see [Appendix: Fields and operators for scalar retrieval](/help/en/oss/developer-reference/appendix-supported-fields-and-operators#concept-2084036).
    
-   Value: The field value.
    
-   SubQueries: The subquery conditions. The options are the same as those for simple query conditions. You need to set subquery conditions only when Operation is a logical operator (and, or, or not).
    

For more information about Query examples, see [DoMetaQuery](#).

Parent node: MetaQuery

Sort

String

No

Size

Sorts the results by a specified field. For more information about the fields that support sorting, see [Appendix: Fields and operators for scalar retrieval](/help/en/oss/developer-reference/appendix-supported-fields-and-operators#concept-2084036).

Parent node: MetaQuery

Order

String

No

asc

The sorting order. Valid values:

-   asc: ascending
    
-   desc (default): descending
    

Parent node: MetaQuery

Aggregations

Container

No

N/A

The container for the information about aggregate operations.

Child node: Aggregation

Parent node: MetaQuery

Aggregation

Container

No

N/A

The container for the information about a single aggregate operation.

Child nodes: Field and Operation

Parent node: Aggregations

Field

String

No

Size

The field name. For more information about the supported fields and the operators supported by each field, see [Appendix: Fields and operators for scalar retrieval](/help/en/oss/developer-reference/appendix-supported-fields-and-operators#concept-2084036).

Parent node: Aggregation

Operation

String

No

sum

The operator in the aggregate operation. Valid values:

-   min: minimum value
    
-   max: maximum value
    
-   average: average value
    
-   sum: sum
    
-   count: count
    
-   distinct: deduplicated count
    
-   group: group count
    

Parent node: Aggregation

### **Vector retrieval**

**Name**

**Type**

**Required**

**Example**

**Description**

mode

String

Yes

semantic

Specifies that the retrieval mode is vector retrieval.

MetaQuery

Container

Yes

N/A

The container for query conditions.

Child nodes: MaxResults, Query, MediaTypes, and SimpleQuery

MaxResults

Integer

No

5

The maximum number of objects to return. Valid values: 0 to 100.

If you do not set this parameter or set it to 0, the default value is 100.

Parent node: MetaQuery

Query

String

Yes

An aerial view of a snow-covered forest

The content to retrieve.

Parent node: MetaQuery

MediaTypes

Container

Yes

N/A

The multimedia metadata retrieval conditions.

Parent node: MetaQuery

MediaType

String

Yes

image

The type of multimedia to retrieve. Valid values:

-   image
    
-   video
    
-   audio
    
-   document
    

Parent node: MediaTypes

SimpleQuery

String

No

{"Operation":"gt", "Field": "Size", "Value": "30"}

The query condition. It includes the following options:

-   Operation: The operator. Valid values: eq (equal to), gt (greater than), gte (greater than or equal to), lt (less than), lte (less than or equal to), match (fuzzy query), prefix (prefix query), and (logical AND), or (logical OR), and not (logical NOT).
    
-   Field: The field name. For more information about the supported fields and the operators supported by each field, see [Appendix: Fields and operators for vector retrieval](/help/en/oss/developer-reference/appendix-list-of-fields-and-operators-for-vector-retrieval).
    
-   Value: The field value.
    
-   SubQueries: The subquery conditions. The options are the same as those for simple query conditions. You need to set subquery conditions only when Operation is a logical operator (and, or, or not).
    

Parent node: MetaQuery

## Response headers

All headers in the response to a DescribeRegions request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Response elements

### **Scalar retrieval**

**Name**

**Type**

**Example**

**Description**

MetaQuery

Container

N/A

The container for query results.

Child nodes: NextToken, Files, and Aggregations

NextToken

String

MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw\*\*\*\*

The token used for pagination when the total number of objects is greater than the value of MaxResults.

In the next request to list object information, use this value for NextToken to return the remaining results.

This parameter is returned only when not all objects are returned.

Parent node: MetaQuery

Files

Container

N/A

The container for object information.

Child node: File

Parent node: MetaQuery

File

Container

N/A

The container for the information about a single object.

Child nodes: Filename, Size, FileModifiedTime, OSSObjectType, OSSStorageClass, ObjectACL, ETag, OSSTaggingCount, OSSTagging, and OSSCRC64

Parent node: Files

Filename

String

exampleobject.txt

The full path of the object.

Parent node: File

Size

Integer

120

The size of the object in bytes.

Parent node: File

FileModifiedTime

String

2025-05-19T16:14:38+08:00

The last modified time of the object. The format is RFC3339Nano.

Parent node: File

OSSObjectType

String

Normal

The type of the object. Valid values:

-   Normal: The object is uploaded by calling the PutObject operation or created by calling the CreateDirectory operation.
    
-   Appendable: The object is uploaded by calling the AppendObject operation.
    
-   Multipart: The object is uploaded by calling the MultipartUpload operation.
    
-   Symlink: The symbolic link is created by calling the PutSymlink operation.
    

Parent node: File

OSSStorageClass

String

Standard

The storage class of the object. Valid values:

-   Standard: The Standard storage class provides a highly reliable, highly available, and high-performance object storage service that supports frequent data access.
    
-   IA: The Infrequent Access storage class is suitable for data that is stored for a long time but infrequently accessed (once or twice a month on average).
    
-   Archive: The Archive Storage class is suitable for archived data that requires long-term storage (more than six months is recommended). The data is rarely accessed during its storage lifecycle. It takes 1 minute to restore the data before it can be read.
    
-   ColdArchive: The Cold Archive storage class is suitable for data that is stored for a long time and is rarely accessed.
    

Parent node: File

ObjectACL

String

default

The access control list (ACL) of the object. Valid values:

-   default: The object inherits the access permissions of the bucket in which it is stored.
    
-   private: The object is a private resource. Only the object owner and authorized users have read and write permissions on the object. Other users cannot access the object.
    
-   public-read: The object is a public-read resource. Only the object owner and authorized users have read and write permissions on the object. Other users have only read permissions on the object. Use this permission with caution.
    
-   public-read-write: The object is a public-read-write resource. All users have read and write permissions on the object. Use this permission with caution.
    

Parent node: File

ETag

String

"fba9dede5f27731c9771645a3986\*\*\*\*"

When an object is created, a corresponding ETag is generated. The ETag is used to identify the content of an object.

-   For an object created by a PutObject request, the ETag value is the MD5 hash of its content.
    
-   For an object created in other ways, the ETag value is a unique value generated based on specific calculation rules, but it is not the MD5 hash of its content.
    

**Note**

The ETag value can be used to check whether the object content has changed. We do not recommend that you use the ETag value as the MD5 hash of the object content to verify data integrity.

Parent node: File

OSSTaggingCount

Integer

2

The number of tags of the object.

Parent node: File

OSSTagging

Container

N/A

The container for tag information.

Child node: Tagging

Parent node: File

Tagging

Container

N/A

The container for the information about a single tag.

Child nodes: Key and Value

Parent node: OSSTagging

Key

String

owner

The key of the tag or user-defined metadata.

The key of user-defined metadata must be prefixed with `x-oss-meta-`.

Parent nodes: Tagging and UserMeta

Value

String

John

The value of the tag or user-defined metadata.

Parent nodes: Tagging and UserMeta

OSSCRC64

String

4858A48BD1466884

The 64-bit CRC value of the object. The 64-bit CRC value is calculated based on the CRC-64/XZ standard.

Parent node: File

Aggregations

Container

N/A

The container for the information about aggregate operations.

Child nodes: Field, Operation, Operation, Value, and Groups

Parent node: MetaQuery

Field

String

Size

The field name.

Parent node: Aggregations

Operation

String

sum

The aggregate operator.

Parent node: Aggregations

Value

Floating-point number

200

The result value of the aggregate operation.

Parent node: Aggregations

Groups

Container

N/A

The list of results of grouping and aggregation.

Child nodes: Value and Count

Parent node: Aggregations

Value

String

100

The value of the grouping and aggregation.

Parent node: Groups

Count

Integer

5

The total number of grouping and aggregation results.

Parent node: Groups

### **Vector retrieval**

**Name**

**Type**

**Example**

**Description**

MetaQuery

Container

N/A

The container for query results.

Child node: Files

Files

Container

N/A

The list of object information.

Child node: File

Parent node: MetaQuery

File

Container

N/A

The information about a single object.

Parent node: Files

URI

String

oss://examplebucket/test-object.jpg

The full path of the object.

Parent node: File

Filename

String

exampleobject.txt

The name of the object.

Parent node: File

Size

Integer

120

The size of the object in bytes.

Parent node: File

ObjectACL

String

default

The access control list (ACL) of the object. Valid values:

-   default: The object inherits the access permissions of the bucket in which it is stored.
    
-   private: The object is a private resource. Only the object owner and authorized users have read and write permissions on the object. Other users cannot access the object.
    
-   public-read: The object is a public-read resource. Only the object owner and authorized users have read and write permissions on the object. Other users have only read permissions on the object. Use this permission with caution.
    
-   public-read-write: The object is a public-read-write resource. All users have read and write permissions on the object. Use this permission with caution.
    

Parent node: File

FileModifiedTime

String

2025-05-19T16:15:33+08:00

The last modified time of the object. The format is RFC3339Nano.

Parent node: File

ETag

String

"fba9dede5f27731c9771645a3986\*\*\*\*"

When an object is created, a corresponding ETag is generated. The ETag is used to identify the content of an object.

-   For an object created by a PutObject request, the ETag value is the MD5 hash of its content.
    
-   For an object created in other ways, the ETag value is a unique value generated based on specific calculation rules, but it is not the MD5 hash of its content.
    

**Note**

The ETag value can be used to check whether the object content has changed. We do not recommend that you use the ETag value as the MD5 hash of the object content to verify data integrity.

Parent node: File

OSSCRC64

String

4858A48BD1466884

The 64-bit CRC value of the object. The 64-bit CRC value is calculated based on the CRC-64/XZ standard.

Parent node: File

ProduceTime

String

2021-06-29T14:50:13.011643661+08:00

The time when the photo or video was captured by the device.

Parent node: File

ContentType

String

image/jpeg

The Multipurpose Internet Mail Extensions (MIME) type.

Parent node: File

MediaType

String

image

The media type.

Parent node: File

LatLong

String

30.134390,120.074997

The latitude and longitude information.

Parent node: File

Title

String

test

The title of the file.

Parent node: File

OSSExpiration

String

2124-12-01T12:00:00.000Z

The expiration time of the file.

Parent node: File

AccessControlAllowOrigin

String

[https://aliyundoc.com](https://aliyundoc.com)

The origin that is allowed to send cross-origin requests.

Parent node: File

AccessControlRequestMethod

String

PUT

The method used in the cross-origin request.

Parent node: File

CacheControl

String

no-cache

The web page caching behavior when the object is downloaded.

Parent node: File

ContentDisposition

String

attachment; filename =test.jpg

The name of the object when it is downloaded.

Parent node: File

ContentEncoding

String

UTF-8

The content encoding format when the object is downloaded.

Parent node: File

ContentLanguage

String

zh-CN

The language used in the object content.

Parent node: File

ImageHeight

Integer

500

The height of the image in pixels (px).

Parent node: File

ImageWidth

Integer

270

The width of the image in pixels (px).

Parent node: File

VideoWidth

Integer

1080

The width of the video frame in pixels (px).

Parent node: File

VideoHeight

Integer

1920

The height of the video frame in pixels (px).

Parent node: File

VideoStreams

Container

N/A

The list of video streams.

Parent node: File

VideoStream

Container

N/A

The video stream.

Parent node: VideoStreams

CodecName

String

h264

The name of the encoder.

Parent node: VideoStream

Language

String

en

The language used in the video stream. The format is BCP 47.

Parent node: VideoStream

Bitrate

Integer

5407765

The bitrate in bit/s.

Parent node: VideoStream

FrameRate

String

25/1

The frame rate of the video stream.

Parent node: VideoStream

StartTime

Double-precision floating-point number

0.000000

The start time of the video stream in seconds (s).

Parent node: VideoStream

Duration

Double-precision floating-point number

22.88

The duration of the video stream in seconds (s).

Parent node: VideoStream

FrameCount

Integer

572

The number of video frames.

Parent node: VideoStream

BitDepth

Integer

8

The pixel bit depth.

Parent node: VideoStream

PixelFormat

String

yuv420p

The pixel format of the video stream.

Parent node: VideoStream

ColorSpace

String

bt709

The color space.

Parent node: VideoStream

Height

Integer

720

The height of the video stream frame in pixels (px).

Parent node: VideoStream

Width

Integer

1280

The width of the video stream frame in pixels (px).

Parent node: VideoStream

AudioStreams

Container

N/A

The list of audio streams.

Parent node: File

AudioStream

Container

N/A

The audio stream.

Parent node: AudioStreams

CodecName

String

aac

The name of the encoder.

Parent node: AudioStream

Bitrate

Integer

320087

The bitrate in bit/s.

Parent node: AudioStream

SampleRate

Integer

48000

The sample rate in hertz (Hz).

Parent node: AudioStream

StartTime

Double-precision floating-point number

0.0235

The start time of the audio stream in seconds (s).

Parent node: AudioStream

Duration

Double-precision floating-point number

3.690667

The duration of the audio stream in seconds (s).

Parent node: AudioStream

Channels

Integer

2

The number of sound channels.

Parent node: AudioStream

Language

String

en

The language used in the audio stream. The format is BCP 47.

Parent node: AudioStream

Subtitles

Container

N/A

The list of caption streams.

Parent node: File

Subtitle

Container

N/A

The caption stream.

Parent node: Subtitles

CodecName

String

mov\_text

The name of the encoder.

Parent node: Subtitle

Language

String

en

The language of the caption. The format is BCP 47.

Parent node: Subtitle

StartTime

Double-precision floating-point number

0.000000

The start time of the caption stream in seconds (s).

Parent node: Subtitle

Duration

Double-precision floating-point number

71.378

The duration of the caption stream in seconds (s).

Parent node: Subtitle

Bitrate

Integer

13091201

The bitrate in bit/s.

Parent node: File

Artist

String

Jane

The artist.

Parent node: File

AlbumArtist

String

Jenny

Artist.

Parent node: File

Composer

String

Jane

The composer.

Parent node: File

Performer

String

Jane

The performer.

Parent node: File

Album

String

FirstAlbum

The album.

Parent node: File

Duration

Double-precision floating-point number

15.263000

The total duration of the video in seconds.

Parent node: File

Addresses

Container

N/A

The address information.

Parent node: File

Address

Container

N/A

The address information.

Parent node: Addresses

AddressLine

String

No. 969, Wenyi West Road, Yuhang District, Hangzhou, Zhejiang, China

The full address.

Parent node: Address

City

String

Hangzhou

The city.

Parent node: Address

District

String

Yuhang District

The district.

Parent node: Address

Language

String

zh-Hans

The language. The format is BCP 47.

Parent node: Address

Province

String

Zhejiang

The province.

Parent node: Address

Township

String

Wenyi West Road

The street.

Parent node: Address

OSSObjectType

String

Normal

The type of the object.

Parent node: File

OSSStorageClass

String

Standard

The storage class of the object.

Parent node: File

OSSTaggingCount

Integer

2

The number of tags of the object.

Parent node: File

OSSTagging

Container

N/A

The list of tag information.

Child node: Tagging

Parent node: File

Tagging

Container

N/A

The container for the information about a single tag.

Child nodes: Key and Value

Parent node: OSSTagging

Key

String

owner

The key of the tag.

Parent node: Tagging

Value

String

John

The value of the tag.

Parent node: Tagging

Key

String

owner

The key of the user-defined metadata.

Parent node: Tagging

Value

String

John

The value of the user-defined metadata.

Parent node: Tagging

## Examples

### **Request examples**

#### **Scalar retrieval**

```
POST /?metaQuery&comp=query&mode=basic HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue 
<?xml version="1.0" encoding="UTF-8"?>
<MetaQuery>
  <NextToken></NextToken>
  <MaxResults>5</MaxResults>
  <Query>{"Field": "Size","Value": "1048576","Operation": "gt"}</Query>
  <Sort>Size</Sort>
  <Order>asc</Order>
  <Aggregations>
    <Aggregation>
      <Field>Size</Field>
      <Operation>sum</Operation>
    </Aggregation>
    <Aggregation>
      <Field>Size</Field>
      <Operation>max</Operation>
    </Aggregation>
  </Aggregations>
</MetaQuery>
```

#### **Vector retrieval**

```
POST /?metaQuery&comp=query&mode=semantic HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: Thu, 12 Sep 2024 13:08:38 GMT
Authorization: SignatureValue 
<?xml version="1.0" encoding="UTF-8"?>
<MetaQuery>
  <MaxResults>99</MaxResults>
  <Query>An aerial view of a snow-covered forest</Query> // Required
  <MediaTypes>
    <MediaType>image</MediaType>
  </MediaTypes>
  // SimpleQuery is equivalent to the Query field in simple mode.
  <SimpleQuery>{"Operation":"gt", "Field": "Size", "Value": "30"}</SimpleQuery>
</MetaQuery>
```

### **Response examples**

#### **Scalar retrieval**

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Mon, 26 Jul 2021 13:08:38 GMT
Content-Length: 118
Content-Type: application/xml
Connection: keep-alive
Server: AliyunOSS
<?xml version="1.0" encoding="UTF-8"?>
<MetaQuery>
  <NextToken>MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****</NextToken>
  <Files>
    <File>
      <Filename>exampleobject.txt</Filename>
      <Size>120</Size>
      <FileModifiedTime>2025-05-19T16:14:38+08:00</FileModifiedTime>
      <OSSObjectType>Normal</OSSObjectType>
      <OSSStorageClass>Standard</OSSStorageClass>
      <ObjectACL>default</ObjectACL>
      <ETag>"fba9dede5f27731c9771645a3986****"</ETag>
      <OSSCRC64>4858A48BD1466884</OSSCRC64>
      <OSSTaggingCount>2</OSSTaggingCount>
      <OSSTagging>
        <Tagging>
          <Key>owner</Key>
          <Value>John</Value>
        </Tagging>
        <Tagging>
          <Key>type</Key>
          <Value>document</Value>
        </Tagging>
      </OSSTagging>
    </File>
  </Files>
</MetaQuery>
```

#### **Vector retrieval**

##### **Example of a response for an image retrieval request**

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Thu, 12 Sep 2024 13:08:38 GMT
Content-Length: 118
Content-Type: application/xml
Connection: keep-alive
Server: AliyunOSS
<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<MetaQuery>
  <Files>
    <File>
      <URI>oss://examplebucket/test-object.jpg</URI>
      <Filename>sampleobject.jpg</Filename>
      <Size>1000</Size>
      <ObjectACL>default</ObjectACL>
      <FileModifiedTime>2025-05-19T16:14:38+08:00</FileModifiedTime>
      <ETag>\"1D9C280A7C4F67F7EF873E28449****\"</ETag>
      <OSSCRC64>559890638950338001</OSSCRC64>
      <ProduceTime>2021-06-29T14:50:15.011643661+08:00</ProduceTime>
      <ContentType>image/jpeg</ContentType>
      <MediaType>image</MediaType>
      <LatLong>30.134390,120.074997</LatLong>
      <Title>test</Title>
      <OSSExpiration>2024-12-01T12:00:00.000Z</OSSExpiration>
      <AccessControlAllowOrigin>https://aliyundoc.com</AccessControlAllowOrigin>
      <AccessControlRequestMethod>PUT</AccessControlRequestMethod>
      <CacheControl>no-cache</CacheControl>
      <ContentDisposition>attachment; filename =test.jpg</ContentDisposition>
      <ContentEncoding>UTF-8</ContentEncoding>
      <ContentLanguage>zh-CN</ContentLanguage>
      <ImageHeight>500</ImageHeight>
      <ImageWidth>270</ImageWidth>
      <Addresses>
        <Address>
          <AddressLine>No. 969, Wenyi West Road, Yuhang District, Hangzhou, Zhejiang, China</AddressLine>
          <City>Hangzhou</City>
          <Country>China</Country>
          <District>Yuhang District</District>
          <Language>zh-Hans</Language>
          <Province>Zhejiang</Province>
          <Township>Wenyi West Road</Township>
        </Address>
        <Address>
          <AddressLine>No. 970, Wenyi West Road, Yuhang District, Hangzhou, Zhejiang, China</AddressLine>
          <City>Hangzhou</City>
          <Country>China</Country>
          <District>Yuhang District</District>
          <Language>zh-Hans</Language>
          <Province>Zhejiang</Province>
          <Township>Wenyi West Road</Township>
        </Address>
      </Addresses>
      <OSSObjectType>Normal</OSSObjectType>
      <OSSStorageClass>Standard</OSSStorageClass>
      <OSSTaggingCount>2</OSSTaggingCount>
      <OSSTagging>
        <Tagging>
          <Key>key</Key>
          <Value>val</Value>
        </Tagging>
        <Tagging>
          <Key>key</Key>
          <Value>val</Value>
        </Tagging>
      </OSSTagging>
    </File>
  </Files>
</MetaQuery>
```

##### **Example of a response for an audio or video retrieval request**

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Thu, 12 Sep 2024 13:08:38 GMT
Content-Length: 118
Content-Type: application/xml
Connection: keep-alive
Server: AliyunOSS
<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<MetaQuery>
  <Files>
    <File>
      <URI>oss://examplebucket/test-object.jpg</URI>
      <Filename>sampleobject.jpg</Filename>
      <Size>1000</Size>
      <ObjectACL>default</ObjectACL>
      <FileModifiedTime>2021-06-29T14:50:14.011643661+08:00</FileModifiedTime>
      <ETag>\"1D9C280A7C4F67F7EF873E28449****\"</ETag>
      <OSSCRC64>559890638950338001</OSSCRC64>
      <ProduceTime>2021-06-29T14:50:15.011643661+08:00</ProduceTime>
      <ContentType>image/jpeg</ContentType>
      <MediaType>image</MediaType>
      <LatLong>30.134390,120.074997</LatLong>
      <Title>test</Title>
      <OSSExpiration>2024-12-01T12:00:00.000Z</OSSExpiration>
      <AccessControlAllowOrigin>https://aliyundoc.com</AccessControlAllowOrigin>
      <AccessControlRequestMethod>PUT</AccessControlRequestMethod>
      <CacheControl>no-cache</CacheControl>
      <ContentDisposition>attachment; filename =test.jpg</ContentDisposition>
      <ContentEncoding>UTF-8</ContentEncoding>
      <ContentLanguage>zh-CN</ContentLanguage>
      <VideoWidth>1080</VideoWidth>
      <VideoHeight>1920</VideoHeight>
      <VideoStreams>
        <VideoStream>
          <CodecName>h264</CodecName>
          <Language>en</Language>
          <Bitrate>5407765</Bitrate>
          <FrameRate>25/1</FrameRate>
          <StartTime>0</StartTime>
          <Duration>22.88</Duration>
          <FrameCount>572</FrameCount>
          <BitDepth>8</BitDepth>
          <PixelFormat>yuv420p</PixelFormat>
          <ColorSpace>bt709</ColorSpace>
          <Height>720</Height>
          <Width>1280</Width>
        </VideoStream>
        <VideoStream>
          <CodecName>h264</CodecName>
          <Language>en</Language>
          <Bitrate>5407765</Bitrate>
          <FrameRate>25/1</FrameRate>
          <StartTime>0</StartTime>
          <Duration>22.88</Duration>
          <FrameCount>572</FrameCount>
          <BitDepth>8</BitDepth>
          <PixelFormat>yuv420p</PixelFormat>
          <ColorSpace>bt709</ColorSpace>
          <Height>720</Height>
          <Width>1280</Width>
        </VideoStream>
      </VideoStreams>
      <AudioStreams>
        <AudioStream>
          <CodecName>aac</CodecName>
          <Bitrate>1048576</Bitrate>
          <SampleRate>48000</SampleRate>
          <StartTime>0.0235</StartTime>
          <Duration>3.690667</Duration>
          <Channels>2</Channels>
          <Language>en</Language>
        </AudioStream>
      </AudioStreams>
      <Subtitles>
        <Subtitle>
          <CodecName>mov_text</CodecName>
          <Language>en</Language>
          <StartTime>0</StartTime>
          <Duration>71.378</Duration>
        </Subtitle>
        <Subtitle>
          <CodecName>mov_text</CodecName>
          <Language>en</Language>
          <StartTime>72</StartTime>
          <Duration>71.378</Duration>
        </Subtitle>
      </Subtitles>
      <Bitrate>5407765</Bitrate>
      <Artist>Jane</Artist>
      <AlbumArtist>Jenny</AlbumArtist>
      <Composer>Jane</Composer>
      <Performer>Jane</Performer>
      <Album>FirstAlbum</Album>
      <Duration>71.378</Duration>
      <Addresses>
        <Address>
          <AddressLine>No. 969, Wenyi West Road, Yuhang District, Hangzhou, Zhejiang, China</AddressLine>
          <City>Hangzhou</City>
          <Country>China</Country>
          <District>Yuhang District</District>
          <Language>zh-Hans</Language>
          <Province>Zhejiang</Province>
          <Township>Wenyi West Road</Township>
        </Address>
        <Address>
          <AddressLine>No. 970, Wenyi West Road, Yuhang District, Hangzhou, Zhejiang, China</AddressLine>
          <City>Hangzhou</City>
          <Country>China</Country>
          <District>Yuhang District</District>
          <Language>zh-Hans</Language>
          <Province>Zhejiang</Province>
          <Township>Wenyi West Road</Township>
        </Address>
      </Addresses>
      <OSSObjectType>Normal</OSSObjectType>
      <OSSStorageClass>Standard</OSSStorageClass>
      <OSSTaggingCount>2</OSSTaggingCount>
      <OSSTagging>
        <Tagging>
          <Key>key</Key>
          <Value>val</Value>
        </Tagging>
        <Tagging>
          <Key>key</Key>
          <Value>val</Value>
        </Tagging>
      </OSSTagging>
    </File>
  </Files>
</MetaQuery>
```

## Query examples

You can nest Query elements to build complex query conditions and precisely query for the content you need.

-   To search for an object named exampleobject.txt that is smaller than 1000 bytes, configure the Query element as follows:
    
    ```
    
    {
      "SubQueries":[
        {
          "Field":"Filename",
          "Value": "exampleobject.txt",
          "Operation":"eq"
        },         
        {
          "Field":"Size",
          "Value":"1000",
          "Operation":"lt"
        }
      ],
      "Operation":"and"
    }
                
    ```
    
-   To search for objects that have the `exampledir/` prefix, contain the `type=document` or `owner=John` tag, and are larger than 10 MB, configure the Query element as follows:
    
    ```
    
    {
      "SubQueries": [
        {
          "Field": "Filename",
          "Value": "exampledir/",
          "Operation": "prefix"
        },
        {
          "Field": "Size",
          "Value": "1048576",
          "Operation": "gt"
        },
        {
          "SubQueries": [
            {
              "Field": "OSSTagging.type",
              "Value": "document",
              "Operation": "eq"
            },
            {
              "Field": "OSSTagging.owner",
              "Value": "John",
              "Operation": "eq"
            }
          ],
          "Operation": "or"
        }
      ],
      "Operation": "and"
    }
            
                
    ```
    

In addition to these search conditions, you can use aggregate operations to perform statistical analysis on different data. For example, you can calculate the total size, count, average value, or maximum or minimum value of all objects that meet the search criteria, or collect statistics on the size distribution of all images that meet the search criteria.

## SDK

The following SDKs are available for this operation:

-   [Java](/help/en/oss/developer-reference/data-indexing-2)
    
-   [Python V2](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/data-indexing-3)
    
-   PHP V2
    

## **ossutil command-line tool**

The DoMetaQuery operation corresponds to the [do-meta-query](/help/en/oss/developer-reference/do-meta-query) command in ossutil.
