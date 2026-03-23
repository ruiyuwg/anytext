OSSClient is the Ruby SDK client for Object Storage Service (OSS). Create an OSSClient instance before making any API calls to manage buckets and objects.

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)
```

## Create an OSSClient instance

Choose one of the following initialization methods based on how you provide credentials.

### Use an OSS endpoint

Use this method for standard access with long-term AccessKey credentials.

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  # Replace with the endpoint for your region.
  # This example uses China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  # Load credentials from environment variables to avoid hardcoding secrets.
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)
```

### Use STS temporary credentials

Use this method when your application obtains short-lived credentials from Security Token Service (STS). Replace the placeholder values with the `AccessKeyId`, `AccessKeySecret`, and `SecurityToken` returned by STS.

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  access_key_id: 'AccessKeyId',       # Temporary AccessKey ID from STS
  access_key_secret: 'AccessKeySecret', # Temporary AccessKey secret from STS
  sts_token: 'SecurityToken'           # Security token from STS
)
```

### Use a custom domain name

Use this method when your bucket is bound to a custom domain name (CNAME).

```
require 'aliyun/oss'

client = Aliyun::OSS::Client.new(
  endpoint: 'http://example.com',
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET'],
  cname: true
)
```

## Configure an OSSClient instance

Pass the following parameters to `Aliyun::OSS::Client.new` to customize client behavior.

**Parameter**

**Default**

**Description**

`cname`

`false`

Whether the endpoint is a CNAME. Set to `true` when using a custom domain name.

`upload_crc_enable`

`true`

Whether to enable CRC-64 cyclic redundancy check (CRC) during uploads.

`download_crc_enable`

`false`

Whether to enable CRC-64 during downloads.

`open_timeout`

`10`

Connection timeout in seconds.

`read_timeout`

`120`

Response timeout in seconds.
