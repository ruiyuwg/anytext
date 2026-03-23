Use the `probe` command to diagnose network connectivity between your local client and Object Storage Service (OSS), measure upload and download bandwidth, and check symbolic links before bulk uploads.

## Prerequisites

Before you begin, ensure that you have:

-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304)
    
-   The required RAM permissions:
    
    -   Upload bandwidth check: `oss:GetObject`, `oss:PutObject`, and `oss:DeleteObject`
        
    -   Download bandwidth check: `oss:GetObject`
        
    -   For permission setup, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
        

## How it works

The `probe` command supports three modes:

**Mode**

**What it does**

**Key flag**

Network connectivity check

Uploads or downloads an object to verify the connection between your client and a bucket

`--upload` or `--download`

Bandwidth measurement

Tests upload or download speed across increasing concurrency levels and recommends the optimal setting

`--probe-item upload-speed` or `--probe-item download-speed`

Symbolic link check

Scans a local directory for abnormal symbolic links before you upload

`--probe-item cycle-symlink`

**How connectivity checks work:** ossutil uploads or downloads an object and runs a ping test against a network address (default: `www.aliyun.com`). If you don't specify an object name, ossutil generates a temporary object and deletes it after the check. Specify an actual object name when you want the uploaded or downloaded object to persist.

**How bandwidth measurement works:** ossutil tests with increasing concurrency levels (parallel=2, 3, 4, ...) and reports the average, current, and peak speeds at each level. Based on your CPU core count and the measured speeds, it recommends the concurrency level that maximizes bandwidth utilization.

**Reading results:** In connectivity check output, `[✓]` means a step passed and `[✗]` means it failed. If a check fails, ossutil returns error codes to help you troubleshoot. For error code details, see [Error codes](/help/en/oss/user-guide/overview-14#concept-dt2-hq3-wdb). After each check, ossutil saves a detailed log to `logOssProbe<timestamp>.log` in the ossutil installation directory.

## Check network connectivity by uploading an object

ossutil uploads an object to a bucket to verify the connection.

**Syntax**

```
ossutil probe {--upload [file_name]} {--bucketname bucket_name} [--object object_name] [--addr domain_name] [--upmode]
```

**Parameters**

**Parameter**

**Required**

**Description**

`--upload`

Yes

Runs connectivity detection by uploading an object.

`file_name`

No

Local file path to upload. If omitted, ossutil generates a temporary object and deletes it after the check.

`--bucketname`

No

Name of the bucket to check.

`--object`

No

Object name to assign the uploaded file. If specified, the object is stored in the bucket after the check. If omitted, the uploaded file is deleted after the check.

`--addr`

No

Network address for the ping test. Default: `www.aliyun.com`.

`--upmode`

No

Upload method. Valid values: `normal` (simple upload, default), `append` (append upload), `multipart` (multipart upload).

**Examples**

Quick connectivity check with a temporary object:

```
ossutil probe --upload --bucketname examplebucket --addr aliyun.com
```

Expected output:

```
begin parse parameters and prepare file...[✓]
begin network detection...[✓]
begin upload file(normal)...[✓]

*************************  upload result  *************************
upload file:success
upload file size:122880(byte)
upload time consuming:245(ms)
(only the time consumed by probe command)


************************* report log info*************************
report log file:/root/logOssProbe20201201173031.log
```

Upload a specific file using simple upload (default) and delete it after the check:

```
ossutil probe --upload example.txt --bucketname examplebucket
```

Upload a specific file using append upload and keep it in the bucket after the check:

```
ossutil probe --upload example.txt --bucketname examplebucket --object example.txt --upmode append
```

## Check network connectivity by downloading an object using its URL

ossutil downloads an object using a direct URL to verify the connection.

**Syntax**

```
ossutil probe {--download} {--url http_url} [--addr=domain_name] [file_name]
```

**Parameters**

**Parameter**

**Required**

**Description**

`--download`

Yes

Runs connectivity detection by downloading an object.

`--url`

Yes

URL of the object to download. For public-read objects, use the plain URL (e.g., `https://examplebucket.oss-cn-beijing.aliyuncs.com/example.jpg`). For private objects, use the signed URL enclosed in double quotation marks (e.g., `"https://examplebucket.oss-cn-beijing.aliyuncs.com/example.jpg?Expires=1552015472&OSSAccessKeyId=TMP.*�PH1�*"`).

`--addr`

No

Network address for the ping test. Default: `www.aliyun.com`.

`file_name`

No

Local path to save the downloaded object. If you specify only a file name (no directory), the object is saved with that name in the ossutil installation directory. If you specify only a directory, the object is saved with its original name in that directory. If omitted, the object is saved with its original name in the ossutil installation directory.

**Examples**

Download a public-read object and save it to a specific path:

```
ossutil probe --download --url https://examplebucket.oss-cn-beijing.aliyuncs.com/example.txt /localfile/test.txt
```

Expected output:

```
begin parse parameters and prepare object...[✓]
begin network detection...[✓]
begin download file...[✓]

*************************  download result  *************************
download file:success
download file size:57374182(byte)
download time consuming:1246(ms)
(only the time consumed by probe command)

download file is /localfile/test.txt

************************* report log info*************************
report log file:/root/logOssProbe20201202171639.log
```

Download an object and run a ping test against a custom address:

```
ossutil probe --download --url https://examplebucket.oss-cn-beijing.aliyuncs.com/example.txt --addr aliyun.com
```

## Check network connectivity by downloading an object from a bucket

ossutil downloads an object directly from a bucket to verify the connection.

**Syntax**

```
ossutil probe {--download} {--bucketname bucket_name} [--object object_name] [--addr domain_name] [file_name]
```

**Parameters**

**Parameter**

**Required**

**Description**

`--download`

Yes

Runs connectivity detection by downloading an object.

`--bucketname`

Yes

Name of the bucket to check.

`--object`

No

Name of the object to download. If specified, ossutil downloads that object. If omitted, ossutil generates a temporary object, uploads it to the bucket, downloads it, and then deletes it.

`--addr`

No

Network address for the ping test. Default: `www.aliyun.com`.

`file_name`

No

Local path to save the downloaded object. Follows the same rules as the URL-based download.

**Examples**

Download a specific object and save it to a local path:

```
ossutil probe --download --bucketname examplebucket --object ossfolder/example.txt /localfolder/text.txt
```

Expected output:

```
begin parse parameters and prepare object...[✓]
begin network detection...[✓]
begin download file...[✓]

*************************  download result  *************************
download file:success
download file size:57374182(byte)
download time consuming:1108(ms)
(only the time consumed by probe command)

download file is /localfolder/text.txt

************************* report log info*************************
report log file:/root/logOssProbe20201202173032.log
```

Run a quick check with a temporary object:

```
ossutil probe --download --bucketname examplebucket --addr aliyun.com
```

## Check a specific item

Use `--probe-item` to measure bandwidth or check symbolic links. ossutil returns results with actionable recommendations.

**Syntax**

```
ossutil probe {--probe-item item_value} {--bucketname bucket_name} [--object object_name] [--parallel <value>] [--part-size <value>] [--runtime <value>]
```

**Parameters**

**Parameter**

**Required**

**Description**

`--probe-item`

Yes

Item to check. Valid values: `cycle-symlink` (check for abnormal symbolic links in a local path), `upload-speed` (measure upload bandwidth), `download-speed` (measure download bandwidth), `download-time` (measure the time to download an object).

`--bucketname`

Required unless `--probe-item` is `cycle-symlink`

Name of the bucket.

`--object`

Required when `--probe-item` is `download-speed`

Path of the object to download. The object must exist. Use an object larger than 5 MB for accurate results. Example: `ossfolder/example.txt`.

`--parallel`

No

Number of concurrent tasks for a single-object operation. Default: `1`. Takes effect only when `--probe-item` is `download-time`.

`--part-size`

No

Part size in bytes. Valid range: `1` to `9223372036854775807`. By default, ossutil determines the part size based on the object size. Takes effect only when `--probe-item` is `download-time`.

`--runtime`

No

Maximum execution time in seconds. The command stops when this limit is reached. Takes effect only when `--probe-item` is `upload-speed` or `download-speed`.

**Examples**

Check for abnormal symbolic links in a directory:

```
ossutil probe --probe-item cycle-symlink /root/localfolder
```

If a symbolic link is broken, ossutil reports the error:

```
Error: stat /root/localfolder/example.jpg: no such file or directory
```

Fix any broken links before uploading. A broken symbolic link causes the upload to fail.

Measure upload bandwidth:

```
ossutil probe --probe-item upload-speed --bucketname examplebucket
```

ossutil tests with increasing concurrency levels and recommends the level with the highest average speed:

```
cpu core count:2
parallel:2,average speed:679.72(KB/s),current speed:1344.00(KB/s),max speed:1440.00(KB/s))
parallel:3,average speed:643.31(KB/s),current speed:704.00(KB/s),max speed:1632.00(KB/s))
parallel:4,average speed:646.62(KB/s),current speed:512.00(KB/s),max speed:1600.00(KB/s))

suggest parallel is 2, max average speed is 679.72(KB/s)
```

Use the recommended parallel value in your upload commands to maximize throughput.

Measure download bandwidth:

```
ossutil probe --probe-item download-speed --bucketname examplebucket --object example.txt
```

Expected output:

```
cpu core count:2
parallel:2,average speed:12524.93(KB/s),current speed:12288.63(KB/s),max speed:14302.25(KB/s)
parallel:3,average speed:12564.45(KB/s),current speed:12144.39(KB/s),max speed:14484.24(KB/s)
parallel:4,average speed:12545.21(KB/s),current speed:12766.58(KB/s),max speed:13534.42(KB/s)

suggest parallel is 3, max average speed is 12564.45(KB/s)
```

Measure download bandwidth with a maximum execution time:

```
ossutil probe --probe-item download-speed --bucketname examplebucket --object example.zip --runtime 2
```

Measure the time to download an object:

```
ossutil probe --probe-item download-time --bucketname examplebucket --object example.txt
```

Expected output:

```
downloading average speed:6178.75(KB/s),current speed:14446.02(KB/s),max speed:14446.02(KB/s)
download-speed part-size:-1, parallel:1 total bytes:31707929, cost:4.918 s, avg speed:7741.00(kB/s)

5.206202(s) elapsed
```

Measure download time with a custom part size:

```
ossutil probe --probe-item download-time --bucketname examplebucket --object example.zip --part-size 10000000
```

Measure download time with a custom concurrency level:

```
ossutil probe --probe-item download-time --bucketname examplebucket --object example.zip --parallel 3
```
