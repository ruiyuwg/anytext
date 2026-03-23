After log data is shipped from Simple Log Service to Object Storage Service (OSS), the log data can be stored in different formats. This topic describes the JSON format.

**Important**

The old version of shipping logs to OSS is discontinued. Refer to the [new version](/help/en/sls/shipping-logs-to-oss-new-version/).

## Parameter

The following figure shows the parameter that you must configure if you specify **json** for the **Storage Format** in a shipping rule. For more information, see [Configure a data shipping rule](/help/en/sls/ship-log-data-from-log-service-to-oss#task-1958310).

![json](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1251378561/p368271.png)

**Parameter**

**Description**

**Ship Tags**

Specifies whether to ship the tag field of logs. Tag example: \_\_tag\_\_:abc.

## Sample URLs of OSS files

After logs are shipped to OSS, the logs are stored in OSS buckets. The following table provides examples of the URLs of the files that store the logs.

**Compression type**

**File extension**

**Sample URL**

**Description**

Not compressed

None

oss://oss-shipper-shenzhen/ecs\_test/2016/01/26/20/54\_1453812893059571256\_937

You can download the JSON files that are not compressed to your computer and open the files as text files. Sample file:

```
{"__time__":"1453809242","__topic__":"","__source__":"10.170.***.***","ip":"10.200.**.***","time":"26/Jan/2016:19:54:02 +0800","url":"POST
              /PutData?Category=YunOsAccountOpLog&AccessKeyId=<yourAccessKeyId>&Date=Fri%2C%2028%20Jun%202013%2006%3A53%3A30%20GMT&Topic=raw&Signature=<yourSignature>
              HTTP/1.1","status":"200","user-agent":"aliyun-sdk-java"}
```

snappy

.snappy

oss://oss-shipper-shenzhen/ecs\_test/2016/01/26/20/54\_1453812893059571256\_937.snappy

For information about how to decompress a file that is compressed by using Snappy, see [Decompression tools for Snappy-compressed files](/help/en/sls/decompression-tools-for-snappy-compressed-files#concept-kpb-v4z-xgb).
