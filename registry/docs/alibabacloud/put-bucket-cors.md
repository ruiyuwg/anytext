Sets cross-origin resource sharing (CORS) rules for a bucket.

## Syntax

```
ossutil api put-bucket-cors --bucket <value> --cors-configuration <value> [flags]
```

## Parameters

**Parameter**

**Type**

**Description**

`--bucket`

string

The bucket to configure CORS rules for.

`--cors-configuration`

string

The CORS rules to apply. Accepts a file path (`file://<filename>`) or an inline JSON string.

> For a full list of global flags, see [Command-line options](/help/en/oss/command-line-options).

This command corresponds to the [PutBucketCors](/help/en/oss/developer-reference/putbucketcors) API operation.

## \--cors-configuration format

The `--cors-configuration` parameter accepts XML or JSON.

### XML

```
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>string</AllowedOrigin>        <!-- required; multiple elements supported -->
    <AllowedMethod>string</AllowedMethod>        <!-- required; multiple elements supported -->
    <AllowedHeader>string</AllowedHeader>
    <ExposeHeader>string</ExposeHeader>          <!-- multiple elements supported -->
    <MaxAgeSeconds>integer</MaxAgeSeconds>
  </CORSRule>
  <!-- additional CORSRule elements supported -->
  <ResponseVary>boolean</ResponseVary>
</CORSConfiguration>
```

### JSON

```
{
  "CORSRule": [
    {
      "AllowedOrigin": ["string", ...],    // required
      "AllowedMethod": ["string", ...],    // required
      "AllowedHeader": "string",
      "ExposeHeader": ["string", ...],
      "MaxAgeSeconds": integer
    }
  ],
  "ResponseVary": boolean
}
```

> The JSON format omits the `CORSConfiguration` root element.

## Examples

All examples configure CORS for `examplebucket` with `www.aliyun.com` as the allowed origin, `PUT` and `GET` as the allowed methods, and a 10,000-second preflight cache.

### Use an XML configuration file

`cors-configuration.xml`:

```
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>www.aliyun.com</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <MaxAgeSeconds>10000</MaxAgeSeconds>
  </CORSRule>
</CORSConfiguration>
```

```
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration file://cors-configuration.xml
```

### Use a JSON configuration file

`cors-configuration.json`:

```
{
  "CORSRule": {
    "AllowedOrigin": ["www.aliyun.com"],
    "AllowedMethod": ["PUT","GET"],
    "MaxAgeSeconds": 10000
  }
}
```

```
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration file://cors-configuration.json
```

### Pass inline JSON

```
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration "{\"CORSRule\":{\"AllowedOrigin\":[\"www.aliyun.com\"],\"AllowedMethod\":[\"PUT\",\"GET\"],\"MaxAgeSeconds\":10000}}"
```
