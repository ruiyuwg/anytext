OSS returns a `SignatureDoesNotMatch` error when the signature in your request does not match the one the server computed. The error response body includes diagnostic fields that identify exactly where the mismatch is.

**Error response example:**

```
<?xml version="1.0" encoding="UTF-8"?>
<Error>
  <Code>SignatureDoesNotMatch</Code>
  <Message>The request signature we calculated does not match the signature you provided. Check your key and signing method.</Message>
  <RequestId>646DCB189AE2D1333018****</RequestId>
  <HostId>bucket.oss-cn-hangzhou.aliyuncs.com</HostId>
  <OSSAccessKeyId>LTAI****************</OSSAccessKeyId>
  <SignatureProvided>tPN3LTAI******** </SignatureProvided>
  <StringToSign>PUT\n\n\nTue, 23 May 2023 15:24:55 GMT\n/bucket/?acl</StringToSign>
  <StringToSignBytes>50 55 54 0A 0A 0A 54 75 65 2C 20 32 33 20 4D 61 79 20 32 30 32 33 20 31 35 3A 32 34 3A 35 35 20 47 4D 54 0A 2F 64 69 6E 61 72 79 2F 3F 61 63 6C </StringToSignBytes>
  <EC>0002-00000040</EC>
</Error>
```

**Field**

**Description**

`SignatureProvided`

The signature string your client sent

`StringToSign`

The string the server used to compute the expected signature

`StringToSignBytes`

The hex byte values of `StringToSign` — useful for diagnosing encoding issues

`RequestId`

A unique request identifier to provide when contacting Alibaba Cloud Support

## Troubleshooting

Work through the following steps in order. Stop at the step that resolves the error.

### Step 1: Verify your AccessKey ID and AccessKey secret

Log in to [ossbrowser](/help/en/oss/developer-reference/install-ossbrowser-1-0) with the AccessKey ID and AccessKey secret your application is using. If login fails, the credentials are invalid or have been revoked — rotate them and update your application.

### Step 2: Verify the signing method

OSS supports two signing methods. Make sure your code implements the correct algorithm for the method you are using.

**Method 1: Include signatures in the Authorization header**

For details, see [Include signatures in the Authorization header](/help/en/oss/developer-reference/include-signatures-in-the-authorization-header).

```
StringToSign = VERB + "\n"
             + Content-MD5 + "\n"              /* MD5 hash of the request body; leave blank if no body */
             + Content-Type + "\n"             /* MIME type; leave blank if not set */
             + Date + "\n"                     /* HTTP Date header value */
             + CanonicalizedOSSHeaders         /* Sorted x-oss-* headers */
             + CanonicalizedResource           /* Bucket + path + subresource */

Signature = base64(hmac-sha1(AccessKeySecret, StringToSign))
```

**Method 2: Add signatures to URLs**

For details, see [Add signatures to URLs](/help/en/oss/developer-reference/ddd-signatures-to-urls).

```
StringToSign = VERB + "\n"
             + CONTENT-MD5 + "\n"              /* Usually blank for presigned URLs */
             + CONTENT-TYPE + "\n"             /* Usually blank for presigned URLs */
             + EXPIRES + "\n"                  /* Unix timestamp when the URL expires */
             + CanonicalizedOSSHeaders         /* Sorted x-oss-* headers */
             + CanonicalizedResource           /* Bucket + path + subresource */

Signature = urlencode(base64(hmac-sha1(AccessKeySecret, StringToSign)))
```

> **Note:** To avoid implementing the signature algorithm manually, use an [OSS SDK](/help/en/oss/developer-reference/overview-63/). SDKs handle signature computation automatically.

### Step 3: Compare StringToSign values

The server includes the `StringToSign` it computed in the error response. Compare it against the `StringToSign` your client generated.

**Example request:**

```
PUT /bucket/abc?acl
Date: Wed, 24 May 2023 02:12:30 GMT
Authorization: OSS qn6q**************:77Dv****************
x-oss-abc: mymeta
```

**Resulting StringToSign:**

```
PUT\n                              /* HTTP method */
\n                                 /* Content-MD5 (blank — no body) */
\n                                 /* Content-Type (blank — not set) */
Wed, 24 May 2023 02:12:30 GMT\n   /* Date */
x-oss-abc:mymeta\n                /* CanonicalizedOSSHeaders */
/bucket/abc?acl                   /* CanonicalizedResource */
```

Check each field in order:

**Field**

**What to check**

HTTP method

Matches the HTTP verb of the request (`PUT`, `GET`, etc.)

Content-MD5

Blank unless you set the `Content-MD5` header in the request

Content-Type

Blank unless you set the `Content-Type` header in the request

Date

Matches the `Date` header value exactly, including whitespace

CanonicalizedOSSHeaders

All `x-oss-*` headers are included, lowercased, trimmed, and sorted alphabetically

CanonicalizedResource

Bucket name, object path, and subresource are all present and correctly formatted

If the `StringToSign` in the error response differs from what your client generated, the discrepancy tells you which field to fix.

> **Tip:** Use `StringToSignBytes` from the error response to detect invisible characters or encoding issues. Paste the hex sequence into a decoder and compare it byte-by-byte against your client's output.
