Use the Ruby SDK to list objects in a bucket. You can filter by prefix, paginate with a marker, and simulate directory traversal with a delimiter.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with objects uploaded
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid credentials
    
-   The Alibaba Cloud OSS Ruby SDK installed
    

## List all objects in a bucket

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  # Replace with the endpoint for your bucket's region.
  # Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')
objects = bucket.list_objects
objects.each { |o| puts o.key }
```

## List objects whose names contain a specific prefix

Pass `:prefix` to filter objects whose keys start with a given string.

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')
# Returns only objects whose keys start with 'my-'.
objects = bucket.list_objects(:prefix => 'my-')
objects.each { |o| puts o.key }
```

## List objects whose names are alphabetically after a specific marker

Pass `:marker` to start listing after a specific key, in lexicographic order. Combine with `:prefix` to paginate within a filtered result set.

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')
# Returns objects with keys that start with 'my-' and come after 'my-object' alphabetically.
objects = bucket.list_objects(:prefix => 'my-', :marker => 'my-object')
objects.each { |o| puts o.key }
```

> To paginate through large result sets, set `:marker` to the last key returned in each response, then repeat the call. Continue until the response returns no objects.

## Folder features

OSS uses a flat structure — there are no real directories. A directory is a zero-byte object whose name ends with `/`. In the OSS console, objects with keys ending in `/` are displayed as directories.

To simulate directory listing, pass both `:prefix` and `:delimiter`. Without `:delimiter`, the entire subtree under the prefix is returned:

```
foo/x
foo/y
foo/bar/a
foo/bar/b
foo/hello/C/1
foo/hello/C/2
...
foo/hello/C/9999
```

With `:delimiter => '/'`, only immediate children are returned. Deeper paths are collapsed into common prefixes (subdirectories), which the SDK returns as strings rather than `Aliyun::OSS::Object` instances.

The `list_dir` function below recursively lists objects and subdirectories:

```
require 'aliyun/oss'

def list_dir(dir, bucket)
  objects = bucket.list_objects(:prefix => dir, :delimiter => '/')
  objects.each do |obj|
    if obj.is_a?(Aliyun::OSS::Object) # regular object
      puts "Object: #{obj.key}"
    else # common prefix (subdirectory)
      puts "SubDir: #{obj}"
      list_dir(obj, bucket) # recursively process subdirectories
    end
  end
end

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)

bucket = client.get_bucket('examplebucket')
list_dir('foo/', bucket)
```

Output:

```
SubDir: foo/bar/
Object: foo/bar/
Object: foo/bar/3.txt
Object: foo/bar/oss.jpg
SubDir: foo/hello/
Object: foo/hello/
Object: foo/hello/001.avi
Object: foo/hello/007.avi
Object: foo/
```

## References

For more information about the API operation used to list objects, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb).
