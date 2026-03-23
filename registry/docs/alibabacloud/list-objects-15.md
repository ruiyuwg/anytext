Use the OSS C# SDK V1 to list objects in a bucket — by count, prefix, marker, or asynchronously.

## Prerequisites

Before you begin, make sure that:

-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables are set with your access credentials
    
-   You have the `oss:ListObjects` permission. See [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an `OssClient` instance using an OSS endpoint. To use a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Request parameters

**Parameter**

**Type**

**Default**

**Max**

**Description**

`MaxKeys`

int

100

1000

Maximum number of objects returned per request

`Prefix`

string

—

—

Filters results to objects whose keys start with this string

`Marker`

string

—

—

Returns objects whose keys come after this value, in alphabetical order

When a result set is truncated, `result.IsTruncated` is `true` and `result.NextMarker` contains the starting point for the next request.

## List up to 100 objects

`ListObjectsRequest` returns up to 100 objects by default.

```
using Aliyun.OSS;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var listObjectsRequest = new ListObjectsRequest(bucketName);
    var result = client.ListObjects(listObjectsRequest);

    Console.WriteLine("List objects succeeded");
    foreach (var summary in result.ObjectSummaries)
    {
        Console.WriteLine("File name:{0}", summary.Key);
    }
}
catch (Exception ex)
{
    Console.WriteLine("List objects failed. {0}", ex.Message);
}
```

## List a specific number of objects

Set `MaxKeys` to control how many objects are returned per request. The default is 100; the maximum is 1000.

```
using Aliyun.OSS;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var listObjectsRequest = new ListObjectsRequest(bucketName)
    {
        MaxKeys = 200,
    };
    var result = client.ListObjects(listObjectsRequest);

    Console.WriteLine("List objects succeeded");
    foreach (var summary in result.ObjectSummaries)
    {
        Console.WriteLine(summary.Key);
    }
}
catch (Exception ex)
{
    Console.WriteLine("List objects failed. {0}", ex.Message);
}
```

## List objects by prefix

Set `Prefix` to filter results to objects whose keys start with a specific string. This example lists all objects whose keys start with `test`, paging through the full result set.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var prefix = "test";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var keys = new List<string>();
    ObjectListing result = null;
    string nextMarker = string.Empty;

    do
    {
        var listObjectsRequest = new ListObjectsRequest(bucketName)
        {
            Marker = nextMarker,
            MaxKeys = 100,
            Prefix = prefix,
        };
        result = client.ListObjects(listObjectsRequest);

        foreach (var summary in result.ObjectSummaries)
        {
            Console.WriteLine(summary.Key);
            keys.Add(summary.Key);
        }

        // Pass NextMarker to the next request to continue listing from where this page left off.
        nextMarker = result.NextMarker;
    } while (result.IsTruncated);

    Console.WriteLine("Listed {0} objects with prefix '{1}' in bucket: {2}", keys.Count, prefix, bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed. Error code: {0}; Error info: {1}. \nRequestID: {2}\tHostID: {3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed. {0}", ex.Message);
}
```

## List objects after a marker

Set `Marker` to start listing from a specific position in alphabetical order. Objects whose keys come after the marker value are returned.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var marker = "exampleobject.txt";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var keys = new List<string>();
    ObjectListing result = null;
    string nextMarker = marker;

    do
    {
        var listObjectsRequest = new ListObjectsRequest(bucketName)
        {
            Marker = nextMarker,
            MaxKeys = 100,
        };
        result = client.ListObjects(listObjectsRequest);

        foreach (var summary in result.ObjectSummaries)
        {
            Console.WriteLine(summary.Key);
            keys.Add(summary.Key);
        }

        // Pass NextMarker to the next request to continue listing from where this page left off.
        nextMarker = result.NextMarker;
    } while (result.IsTruncated);

    Console.WriteLine("List objects succeeded");
}
catch (OssException ex)
{
    Console.WriteLine("Failed. Error code: {0}; Error info: {1}. \nRequestID: {2}\tHostID: {3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed. {0}", ex.Message);
}
```

## List all objects with pagination

When a bucket contains more objects than `MaxKeys` allows per response, `result.IsTruncated` is `true`. Pass `result.NextMarker` as the `Marker` for the next request and repeat until `IsTruncated` is `false`.

```
using Aliyun.OSS;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

public void ListAllObjects(string bucketName)
{
    try
    {
        ObjectListing result = null;
        string nextMarker = string.Empty;

        do
        {
            var listObjectsRequest = new ListObjectsRequest(bucketName)
            {
                Marker = nextMarker,
                MaxKeys = 100,
            };
            result = client.ListObjects(listObjectsRequest);

            foreach (var summary in result.ObjectSummaries)
            {
                Console.WriteLine("Name:{0}", summary.Key);
            }

            // Pass NextMarker to the next request to continue listing from where this page left off.
            nextMarker = result.NextMarker;
        } while (result.IsTruncated);
    }
    catch (Exception ex)
    {
        Console.WriteLine("List objects failed. {0}", ex.Message);
    }
}
```

## List objects asynchronously

Use `BeginListObjects` and `EndListObjects` to list objects without blocking the calling thread. Implement a callback to process results after the operation completes.

```
using System;
using System.IO;
using System.Threading;
using Aliyun.OSS;

namespace AsyncListObjects
{
    class Program
    {
        static string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        static string accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
        static string accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
        static string bucketName = "examplebucket";
        static AutoResetEvent _event = new AutoResetEvent(false);
        const string region = "cn-hangzhou";

        static OssClient CreateClient()
        {
            var conf = new ClientConfiguration();
            conf.SignatureVersion = SignatureVersion.V4;
            var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
            client.SetRegion(region);
            return client;
        }

        static readonly OssClient client = CreateClient();

        static void Main(string[] args)
        {
            AsyncListObjects();
            Console.ReadKey();
        }

        public static void AsyncListObjects()
        {
            try
            {
                var listObjectsRequest = new ListObjectsRequest(bucketName);
                // Begin the async operation and register the callback.
                client.BeginListObjects(listObjectsRequest, ListObjectCallback, null);
                _event.WaitOne();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Async list objects failed. {0}", ex.Message);
            }
        }

        // Called automatically when the listing operation completes.
        private static void ListObjectCallback(IAsyncResult ar)
        {
            try
            {
                var result = client.EndListObjects(ar);
                foreach (var summary in result.ObjectSummaries)
                {
                    Console.WriteLine("Object name: {0}", summary.Key);
                }
                _event.Set();
                Console.WriteLine("Async list objects succeeded");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Async list objects failed. {0}", ex.Message);
            }
        }
    }
}
```

## References

-   Complete sample code for synchronous listing: [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/ListObjectsSample.cs)
    
-   Complete sample code for asynchronous listing: [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/ListObjectsSample.cs)
    
-   API reference for listing objects: [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb)
