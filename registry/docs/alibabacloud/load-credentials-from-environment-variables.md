SelectObject lets you run SQL queries directly on objects in Object Storage Service (OSS) and retrieve only the matching data—without downloading the entire object first. This reduces bandwidth consumption and lowers CPU and memory usage on the client side, making OSS-based data analytics more efficient.

## How it works

When you use GetObject, your application downloads the full object before filtering. SelectObject moves the filtering to OSS itself: you send SQL conditions and projections, and OSS returns only the matching rows.

The query flow:

1.  Submit a SelectObject request with a SQL `SELECT ... FROM ... WHERE` statement and the output format.
    
2.  OSS scans the object and applies your conditions and projections server-side.
    
3.  OSS streams only the matching records back to your client.
    
4.  For large objects, call CreateSelectObjectMeta first to get the total number of splits, then run parallel queries using `split-range`.
    

## Supported object types

**Type**

**Details**

**CSV** (including TSV and similar formats)

Must conform to RFC 4180. Supports custom row and column delimiters and quote characters.

**JSON (UTF-8 encoded)**

Two formats: **JSON DOCUMENT** (a single JSON object) and **JSON LINES** (one JSON object per line, separated by `\n` or `\r\n`; no delimiter configuration needed).

**Standard and Infrequent Access (IA) objects**

Queryable directly. Archive, Cold Archive, and Deep Cold Archive objects must be restored before querying.

**Encrypted objects**

Objects encrypted by OSS-managed encryption or by customer master keys (CMKs) managed by Key Management Service (KMS).

## Limits

**Limit**

**Details**

Unsupported bucket type

Buckets without zone attributes (no-header-region) do not support SelectObject.

Console data limit

The OSS console supports selecting up to **40 MB** of data from objects up to **128 MB** in size.

SDK support

Only OSS SDK for Java and OSS SDK for Python support SelectObject.

Compression

Only GZIP compression is supported when querying compressed objects.

LIKE case sensitivity

LIKE-based fuzzy matches are case-sensitive.

## Billing

SelectObject charges are based on the amount of data scanned:

-   **Standard objects**: data scanning fees.
    
-   **IA, Archive, Cold Archive, and Deep Cold Archive objects**: data scanning fees plus data retrieval fees.
    

For pricing details, see [Data processing fees](/help/en/oss/data-processing-fees#concept-2558464).

## Supported SQL syntax

**Category**

**Supported**

**Statement**

`SELECT ... FROM ossobject [WHERE ...]`

**Data types**

`string`, `int` (64-bit), `double` (64-bit), `decimal` (128-bit), `timestamp`, `bool`

**Logical operators**

`AND`, `OR`, `NOT`

**Arithmetic operators**

`+`, `-`, `*`, `/`, `%`

**Comparison operators**

`>`, `=`, `<`, `>=`, `<=`, `!=`

**String operators**

`LIKE`, `||` (concatenation)

**Aggregate functions**

`COUNT`, `MAX`, `MIN`, `AVG`, `SUM`

**Type conversion**

`CAST` function

### Data types in CSV vs. JSON

CSV data defaults to the `string` type. Use `CAST` to convert:

```
-- Explicit conversion
SELECT * FROM ossobject WHERE CAST(_1 AS int) > CAST(_2 AS int)

-- Implicit conversion via WHERE clause arithmetic
SELECT _1 FROM ossobject WHERE _1 + _2 > 100
```

JSON objects retain their original types (Null, Bool, Int64, Double, String). For high-precision floating-point numbers, set `ParseJsonNumberAsString` to `true` and cast to `decimal`:

```
SELECT s.a FROM ossobject s WHERE CAST(s.a AS decimal) > 123456789.12345
```

## SQL examples

### CSV queries

Column indexes start at `_1`. If the CSV has a header row, you can reference columns by name.

**Goal**

**SQL statement**

Return the first 10 rows

`SELECT * FROM ossobject LIMIT 10`

Return rows where column 1 (int) > column 3 (int)

`SELECT _1, _3 FROM ossobject WHERE CAST(_1 AS int) > CAST(_3 AS int)`

Count rows where column 1 starts with X

`SELECT COUNT(*) FROM ossobject WHERE _1 LIKE 'X%'`

Return rows where column 2 is after a timestamp and column 3 > 200

`SELECT * FROM ossobject WHERE _2 > CAST('2018-08-09 11:30:25' AS timestamp) AND _3 > 200`

Aggregate functions on column 6 (double)

`SELECT AVG(CAST(_6 AS double)), SUM(CAST(_6 AS double)), MAX(CAST(_6 AS double)), MIN(CAST(_6 AS double)) FROM ossobject`

Concatenated columns matching a pattern

`SELECT * FROM ossobject WHERE (_1 || _3) LIKE 'Tom%Anderson'`

Rows where column 1 is divisible by 3

`SELECT * FROM ossobject WHERE (_1 % 3) = 0`

Rows where column 1 is between 1995 and 2012

`SELECT * FROM ossobject WHERE _1 BETWEEN 1995 AND 2012`

Rows where column 5 is one of N, M, G, L

`SELECT * FROM ossobject WHERE _5 IN ('N', 'M', 'G', 'L')`

Rows where (col2 x col3) > (col5 + 100)

`SELECT * FROM ossobject WHERE _2 * _3 > _5 + 100`

### JSON queries

Use dot notation and array wildcards to navigate nested structures. Narrowing the path in the `FROM` clause improves performance.

Given this sample object:

```
{
  "contacts": [
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 27,
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
      },
      "phoneNumbers": [
        { "type": "home", "number": "212 555-1234" },
        { "type": "office", "number": "646 555-4567" },
        { "type": "mobile", "number": "123 456-7890" }
      ],
      "children": [],
      "spouse": null
    }
  ]
}
```

**Goal**

**SQL statement**

Contacts where age = 27

`SELECT * FROM ossobject.contacts[*] s WHERE s.age = 27`

All home phone numbers

`SELECT s.number FROM ossobject.contacts[*].phoneNumbers[*] s WHERE s.type = 'home'`

Contacts where spouse is null

`SELECT * FROM ossobject s WHERE s.spouse IS NULL`

Contacts with an empty children array

`SELECT * FROM ossobject s WHERE s.children[0] IS NULL`

Street addresses with postal codes starting with 10021

`SELECT s.streetAddress FROM ossobject.contacts[*].address s WHERE s.postalCode LIKE '10021%'`

**Note**

Narrowing the `FROM` path (e.g., `ossobject.contacts[*].address`) is more efficient than a broad path followed by dot-notation access (e.g., `ossobject.contacts[*]` then `s.address.streetAddress`).

## Query objects using the OSS console

**Important**

The console supports selecting up to 40 MB of data from objects up to 128 MB in size.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. Find and click the target bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  In the **Actions** column for the target object, choose **![more ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2197678661/p508856.jpg)** > **Select Content**.
    
5.  In the **Select Content** panel, configure the parameters:
    
    **Parameter**
    
    **Description**
    
    **Object Type**
    
    `CSV` or `JSON`
    
    **Delimiter**
    
    CSV only. `,` or Custom
    
    **Title Row**
    
    CSV only. Whether the first row contains column headers
    
    **JSON Display Mode**
    
    JSON only. `JSON_LINES` or `JSON_DOCUMENT`
    
    **Compression Format**
    
    GZIP only
    
6.  Click **Preview** to preview the selected data.
    
    **Important**
    
    Previewing a Standard object incurs data scanning fees. Previewing an IA, Archive, Cold Archive, or Deep Cold Archive object incurs data scanning fees plus data retrieval fees. For details, see [Data processing fees](/help/en/oss/data-processing-fees#concept-2558464).
    
7.  Click **Next**, then enter and run a SQL statement. Example: A CSV object named `People` has three columns: `Name`, `Company`, and `Age`. Column indexes are `_1` (Name), `_2` (Company), and `_3` (Age).
    
    -   Query people over 50 whose names start with Lora:
        
        ```
        SELECT * FROM ossobject WHERE _1 LIKE 'Lora*' AND _3 > 50
        ```
        
    -   Get row count, maximum age, and minimum age:
        
        ```
        SELECT COUNT(*), MAX(CAST(_3 AS int)), MIN(CAST(_3 AS int)) FROM oss_object
        ```
        
8.  View the results. Click **Download** to save the output to your local machine.
    

## Query objects using OSS SDKs

Only OSS SDK for Java and OSS SDK for Python support SelectObject.

### Java example

The Java SDK uses `createSelectObjectMetadata` to build split metadata and `selectObject` to run queries. Credentials are loaded from environment variables `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`.

```
import com.aliyun.oss.model.*;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;

public class SelectObjectSample {
    // Replace with the endpoint for your bucket's region.
    // Example: https://oss-cn-hangzhou.aliyuncs.com
    private static String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
    private static String bucketName = "examplebucket";

    public static void main(String[] args) throws Exception {
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        // Query a CSV object.
        selectCsvSample("test.csv", ossClient);
        // Query a JSON LINES object.
        selectJsonSample("test.json", ossClient);

        ossClient.shutdown();
    }

    private static void selectCsvSample(String key, OSS ossClient) throws Exception {
        // Upload sample CSV data with a header row.
        String content = "name,school,company,age\r\n" +
                "Lora Francis,School A,Staples Inc,27\r\n" +
                "Eleanor Little,School B,\"Conectiv, Inc\",43\r\n" +
                "Rosie Hughes,School C,Western Gas Resources Inc,44\r\n" +
                "Lawrence Ross,School D,MetLife Inc.,24";
        ossClient.putObject(bucketName, key, new ByteArrayInputStream(content.getBytes()));

        // Build split metadata for the object (recommended before multipart queries).
        SelectObjectMetadata selectObjectMetadata = ossClient.createSelectObjectMetadata(
            new CreateSelectObjectMetadataRequest(bucketName, key)
                .withInputSerialization(
                    new InputSerialization().withCsvInputFormat(
                        new CSVFormat()
                            .withHeaderInfo(CSVFormat.Header.Use)
                            .withRecordDelimiter("\r\n"))));
        System.out.println("Total lines: " + selectObjectMetadata.getCsvObjectMetadata().getTotalLines());
        System.out.println("Total splits: " + selectObjectMetadata.getCsvObjectMetadata().getSplits());

        // Query rows where the 4th column (age) is greater than 40.
        SelectObjectRequest selectObjectRequest =
            new SelectObjectRequest(bucketName, key)
                .withInputSerialization(
                    new InputSerialization().withCsvInputFormat(
                        new CSVFormat()
                            .withHeaderInfo(CSVFormat.Header.Use)
                            .withRecordDelimiter("\r\n")))
                .withOutputSerialization(new OutputSerialization().withCsvOutputFormat(new CSVFormat()));
        selectObjectRequest.setExpression("SELECT * FROM ossobject WHERE _4 > 40");

        OSSObject ossObject = ossClient.selectObject(selectObjectRequest);
        BufferedReader reader = new BufferedReader(new InputStreamReader(ossObject.getObjectContent()));
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
        reader.close();
        ossClient.deleteObject(bucketName, key);
    }

    private static void selectJsonSample(String key, OSS ossClient) throws Exception {
        // Upload sample JSON LINES data (one JSON object per line).
        final String content = "{\"name\":\"Lora Francis\",\"age\":27,\"company\":\"Staples Inc\"}\n" +
                "{\"name\":\"Eleanor Little\",\"age\":43,\"company\":\"Conectiv, Inc\"}\n" +
                "{\"name\":\"Rosie Hughes\",\"age\":44,\"company\":\"Western Gas Resources Inc\"}\n" +
                "{\"name\":\"Lawrence Ross\",\"age\":24,\"company\":\"MetLife Inc.\"}";
        ossClient.putObject(bucketName, key, new ByteArrayInputStream(content.getBytes()));

        // Query records where age > 40.
        SelectObjectRequest selectObjectRequest =
            new SelectObjectRequest(bucketName, key)
                .withInputSerialization(new InputSerialization()
                    .withCompressionType(CompressionType.NONE)
                    .withJsonInputFormat(new JsonFormat().withJsonType(JsonType.LINES)))
                .withOutputSerialization(new OutputSerialization()
                    .withCrcEnabled(true)
                    .withJsonOutputFormat(new JsonFormat()))
                .withExpression("SELECT * FROM ossobject AS s WHERE s.age > 40");

        OSSObject ossObject = ossClient.selectObject(selectObjectRequest);
        BufferedReader reader = new BufferedReader(new InputStreamReader(ossObject.getObjectContent()));
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
        reader.close();
        ossClient.deleteObject(bucketName, key);
    }
}
```

### Python example

The Python SDK provides `create_select_object_meta`, `select_object`, and `select_object_to_file`. Credentials are loaded from environment variables `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`.

```
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

def select_callback(consumed_bytes, total_bytes=None):
    print(f"Consumed bytes: {consumed_bytes}")

# Load credentials from environment variables.
auth = oss2.ProviderAuthV4(EnvironmentVariableCredentialsProvider())

endpoint = "https://oss-cn-hangzhou.aliyuncs.com"  # Replace with your bucket's endpoint.
region = "cn-hangzhou"                              # Replace with your bucket's region.
bucket = oss2.Bucket(auth, endpoint, "examplebucket", region=region)

# --- CSV query ---

key = "python_select.csv"
content = "Tom Hanks,USA,45\r\n" * 1024
bucket.put_object(key, content)

# Build split metadata.
csv_meta_params = {"RecordDelimiter": "\r\n"}
csv_header = bucket.create_select_object_meta(key, csv_meta_params)
print(f"Total rows: {csv_header.rows}, total splits: {csv_header.splits}")

# Query rows where column 3 > 44.
select_csv_params = {
    "CsvHeaderInfo": "None",
    "RecordDelimiter": "\r\n",
    "LineRange": (500, 1000),
}
result = bucket.select_object(
    key, "SELECT * FROM ossobject WHERE _3 > 44", select_callback, select_csv_params
)
print(result.read())

# Save results to a local file.
bucket.select_object_to_file(
    key, "python_select.csv", "SELECT * FROM ossobject WHERE _3 > 44",
    select_callback, select_csv_params
)
bucket.delete_object(key)

# --- JSON DOCUMENT query ---

key = "python_select.json"
content = '{"contacts":[{"key1":1,"key2":"hello world1"},{"key1":2,"key2":"hello world2"}]}'
bucket.put_object(key, content)

select_json_params = {"Json_Type": "DOCUMENT"}
result = bucket.select_object(
    key,
    "SELECT s.key2 FROM ossobject.contacts[*] s WHERE s.key1 = 1",
    None,
    select_json_params,
)
print(result.read())
bucket.delete_object(key)

# --- JSON LINES query ---

key = "python_select_lines.json"
content = '{"key1":1,"key2":"hello world1"}\n{"key1":2,"key2":"hello world2"}'
bucket.put_object(key, content)

select_json_params = {"Json_Type": "LINES"}
json_header = bucket.create_select_object_meta(key, select_json_params)
print(f"Total rows: {json_header.rows}, total splits: {json_header.splits}")

result = bucket.select_object(
    key, "SELECT s.key2 FROM ossobject s WHERE s.key1 = 1", None, select_json_params
)
print(result.read())
bucket.delete_object(key)
```

## Query objects using the OSS API

To call SelectObject directly via RESTful API, include signature calculation in your code. For details, see [SelectObject](/help/en/oss/developer-reference/selectobject#reference-lz1-r1x-b2b).

## Run parallel queries on large objects

For large objects, split the query across multiple concurrent requests using `split-range`.

**When to use splits vs. byte ranges:**

**Method**

**When to use**

**By split** (recommended)

A split spans multiple rows with approximately equal sizes. Use for JSON objects and CSV objects whose column values may contain embedded line feeds.

**By byte range**

Simpler; no metadata required. Use only for CSV objects where column values do not contain line feeds.

**Steps for split-based parallel query:**

1.  Call CreateSelectObjectMeta to get the total number of splits. Call this asynchronously before the first query to avoid extra scanning overhead.
    
2.  Choose a concurrency level `n` based on available client resources.
    
3.  Divide the total number of splits by `n` to get the splits-per-request count.
    
4.  Submit `n` concurrent SelectObject requests, each with a `split-range` parameter. For example: `split-range=1-20`.
    
5.  Concatenate the results in order.
    

## What's next

-   [SelectObject API reference](/help/en/oss/developer-reference/selectobject#reference-lz1-r1x-b2b)
    
-   [Data processing fees](/help/en/oss/data-processing-fees#concept-2558464)
