Use the `cors` command to create, modify, query, or delete cross-origin resource sharing (CORS) configurations for a bucket. CORS is a standard cross-origin solution provided by HTML5 that allows web application servers to control cross-origin access and ensures the security of data transmission across origins.

## Prerequisites

Before you begin, make sure that you have:

-   An OSS bucket
    
-   The required permission for the operation you want to perform: To attach these permissions to a RAM user, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
    **Operation**
    
    **Required permission**
    
    Create or modify a CORS configuration
    
    `oss:PutBucketCors`
    
    Query a CORS configuration
    
    `oss:GetBucketCors`
    
    Delete a CORS configuration
    
    `oss:DeleteBucketCors`
    
-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

For background on how CORS works with OSS, see [CORS](/help/en/oss/user-guide/cors-settings#concept-bwn-tjd-5db).

## Create or modify a CORS configuration

Running `cors --method put` creates a new CORS configuration if none exists, or overwrites the existing one.

**Syntax**

```
ossutil cors --method put oss://<bucketname> <local_xml_file>
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The name of the bucket.

`local_xml_file`

Yes

Path to a local XML file that contains the CORS configuration. Example: `localfile.txt`.

**Example**

1.  Create a local file named `localfile.txt` with the following CORS configuration. This example allows cross-origin `PUT` requests from `www.aliyun.com` and instructs the browser to cache preflight (OPTIONS) responses for 10,000 seconds.
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <CORSConfiguration>
         <CORSRule>
           <AllowedOrigin>www.aliyun.com</AllowedOrigin>
           <AllowedMethod>PUT</AllowedMethod>
           <MaxAgeSeconds>10000</MaxAgeSeconds>
         </CORSRule>
       </CORSConfiguration>
    ```
    
2.  Apply the configuration to `examplebucket`:
    
    ```
       ossutil cors --method put oss://examplebucket localfile.txt
    ```
    
    Expected output:
    
    ```
       0.299514(s) elapsed
    ```
    

## Query a CORS configuration

**Syntax**

```
ossutil cors --method get oss://<bucketname> [<local_xml_file>]
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The name of the bucket.

`local_xml_file`

No

Path to a local file where the CORS configuration is saved. If omitted, the configuration is printed to the screen.

**Example**

Run the following command to query the CORS configuration of `examplebucket` and save it to `localfile.txt`:

```
ossutil cors --method get oss://examplebucket localfile.txt
```

Expected output:

```
0.212407(s) elapsed
```

The CORS configuration is written to `localfile.txt`. To print the configuration to the screen instead, omit the file path:

```
ossutil cors --method get oss://examplebucket
```

## Delete a CORS configuration

**Syntax**

```
ossutil cors --method delete oss://<bucketname>
```

**Example**

```
ossutil cors --method delete oss://examplebucket
```

Expected output:

```
0.530750(s) elapsed
```

## Common options

To operate on a bucket in a different region or owned by a different Alibaba Cloud account, add the following options:

**Option**

**Description**

`-e <endpoint>`

Endpoint of the region where the bucket is located.

`-i <AccessKey ID>`

AccessKey ID of the account that owns the bucket.

`-k <AccessKey secret>`

AccessKey secret of the account that owns the bucket.

**Example:** Create a CORS configuration for `testbucket`, which is located in the China (Hangzhou) region and belongs to a different account:

```
ossutil cors --method put oss://testbucket localfile.txt -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
