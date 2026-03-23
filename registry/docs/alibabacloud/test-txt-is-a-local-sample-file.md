Upload files for document Q&A and data extraction with [Qwen-Long](/help/en/model-studio/long-context-qwen-long) and [Qwen-Doc-Turbo](/help/en/model-studio/data-mining-qwen-doc). This interface also supports uploading input files for batch tasks.

## Usage

Call the file interface using the OpenAI SDK (Python or Java) or HTTP API. The interface supports file upload, query, and deletion.

### **Prerequisites**

-   An Alibaba Cloud Model Studio API key: [Create an API key](/help/en/model-studio/get-api-key) and [Export the API key as environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).
    
-   To use the OpenAI SDK, install the [OpenAI SDK](/help/en/model-studio/install-sdk).
    

## Model availability

You can use file IDs in the following scenarios:

-   **Qwen-Long**: Perform Q&A on long documents.
    
-   **Qwen-Doc-Turbo**: Extract data and perform Q&A on files.
    
-   [Batch processing](/help/en/model-studio/batch-interfaces-compatible-with-openai/#80d1d39cf85zk): Upload batch files.
    

## Getting started

### **Upload a file**

Storage limits are 10,000 files maximum and 100 GB total. Files do not expire.

### For document analysis

Set \`purpose\` to `file-extract`. Supported formats include text files (TXT, DOCX, PDF, XLSX, EPUB, MOBI, MD, CSV, JSON) and images (BMP, PNG, JPG/JPEG, GIF, scanned PDFs). The maximum file size is **150 MB**.

> For more information about document analysis using a file\_id, see [long context (Qwen-Long)](/help/en/model-studio/long-context-qwen-long).

#### **Request examples**

Python

```
import os
from pathlib import Path
from openai import OpenAI

client = OpenAI(
    # If you have not configured an environment variable, replace the following line with api_key="sk-xxx" and use your Model Studio API key.
    # API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# test.txt is a local sample file.
file_object = client.files.create(file=Path("test.txt"), purpose="file-extract")

print(file_object.model_dump_json())
```

Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.FileCreateParams;
import com.openai.models.FileObject;
import com.openai.models.FilePurpose;

import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
                .baseUrl("https://dashscope-intl.aliyuncs.com/compatible-mode/v1")
                .build();
        // Set the file path. Modify the path and filename as needed.
        Path filePath = Paths.get("src/main/java/org/example/test.txt");
        // Create file upload parameters.
        FileCreateParams params = FileCreateParams.builder()
                .file(filePath)
                .purpose(FilePurpose.of("file-extract"))
                .build();

        // Upload the file.
        FileObject fileObject = client.files().create(params);
        System.out.println(fileObject);
    }
}
```

curl

```
# ======= Important =======
# API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files
# === Delete this comment before running ===

curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
--form 'file=@"test.txt"' \
--form 'purpose="file-extract"'
```

#### **Sample response**

```
{
    "id": "file-fe-xxx",
    "bytes": 2055,
    "created_at": 1729065448,
    "filename": "test.txt",
    "object": "file",
    "purpose": "file-extract",
    "status": "processed",
    "status_details": null
}
```

### **For batch processing**

Set \`purpose\` to `batch`. The input file must be in JSONL format and conform to [Batch file requirements](/help/en/model-studio/batch-interfaces-compatible-with-openai/#578afe12c1uvz). The maximum file size is 500 MB.

> For more information about batch calls, see [OpenAI compatible - Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/).

#### **Request examples**

Python

```
import os
from pathlib import Path
from openai import OpenAI


client = OpenAI(
    # If you have not configured an environment variable, replace the following line with api_key="sk-xxx" and use your Model Studio API key.
    # API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# test.jsonl is a local sample file.
file_object = client.files.create(file=Path("test.jsonl"), purpose="batch")

print(file_object.model_dump_json())
```

Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.FileCreateParams;
import com.openai.models.FileObject;
import com.openai.models.FilePurpose;

import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
                .baseUrl("https://dashscope-intl.aliyuncs.com/compatible-mode/v1")
                .build();
        // Set the file path. Modify the path and filename as needed.
        Path filePath = Paths.get("src/main/java/org/example/test.txt");
        // Create file upload parameters.
        FileCreateParams params = FileCreateParams.builder()
                .file(filePath)
                .purpose(FilePurpose.of("batch"))
                .build();

        // Upload the file.
        FileObject fileObject = client.files().create(params);
        System.out.println(fileObject);
    }
}
```

curl

```
# ======= Important =======
# API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files
# === Delete this comment before running ===

curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
--form 'file=@"test.jsonl"' \
--form 'purpose="batch"'
```

#### **Sample response**

```
{
    "id": "file-batch-xxx",
    "bytes": 231,
    "created_at": 1729065815,
    "filename": "test.jsonl",
    "object": "file",
    "purpose": "batch",
    "status": "processed",
    "status_details": null
}
```

### **Query file information**

Specify the `file_id` in the retrieve or GET method to query file information.

## OpenAI Python SDK

#### Request examples

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

file = client.files.retrieve(file_id="file-batch-xxx")

print(file.model_dump_json())
```

#### **Sample response**

```
{
  "id": "file-batch-xxx",
  "bytes": 27,
  "created_at": 1722480306,
  "filename": "test.txt",
  "object": "file",
  "purpose": "batch",
  "status": "processed",
  "status_details": null
}
```

## OpenAI Java SDK

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.FileObject;
import com.openai.models.FileRetrieveParams;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
                .baseUrl("https://dashscope-intl.aliyuncs.com/compatible-mode/v1")
                .build();
        // Create file query parameters. Replace the fileId as needed.
        FileRetrieveParams params= FileRetrieveParams.builder()
                .fileId("file-batch-xxx")
                .build();
        //Query the file.
        FileObject fileObject = client.files().retrieve(params);
        System.out.println(fileObject);
    }
}
```

## HTTP

#### Endpoint

```
Singapore region: GET https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files/{file_id}
China (Beijing) region: GET https://dashscope.aliyuncs.com/compatible-mode/v1/files/{file_id}
```

#### **Request examples**

```
# ======= Important =======
# API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files/file-batch-xxx
# === Delete this comment before running ===
curl -X GET https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files/file-batch-xxx \
-H "Authorization: Bearer $DASHSCOPE_API_KEY"
```

> If you use a model in the China (Beijing) region, you must use an [API KEY](https://bailian.console.alibabacloud.com/?tab=model#/api-key) from the China (Beijing) region and replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files/file-batch-xxx

#### **Sample response**

```
{
    "id": "file-batch-xxx",
    "object": "file",
    "bytes": 499719,
    "created_at": 1715935833,
    "filename": "test.txt",
    "purpose": "batch",
    "status": "processed"
}
```

### Query a list of files

This operation returns all file information, including uploaded files and batch result files.

**Note**

This operation supports more filtering parameters. For more information, see [Parameter description](#a9b268386f7x8).

## OpenAI Python SDK

#### Request examples

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
     # The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

file_stk = client.files.list(after="file-batch-xxx",limit=20)
print(file_stk.model_dump_json())
```

#### **Sample response**

```
{
  "data": [
    {
      "id": "file-batch-xxx",
      "bytes": 27,
      "created_at": 1722480543,
      "filename": "test.txt",
      "object": "file",
      "purpose": "batch",
      "status": "processed",
      "status_details": null
    },
    {
      "id": "file-batch-yyy",
      "bytes": 431986,
      "created_at": 1718089390,
      "filename": "test.pdf",
      "object": "file",
      "purpose": "batch",
      "status": "processed",
      "status_details": null
    }
  ],
  "object": "list",
  "has_more": false
}
```

## OpenAI Java SDK

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.FileListPage;
import com.openai.models.FileListParams;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
                .baseUrl("https://dashscope-intl.aliyuncs.com/compatible-mode/v1")
                .build();
        // Create file list query parameters.
        FileListParams params = FileListParams.builder()
                .after("file-batch-xxx")
                .limit(20)
                .build();
        //Query the file list.
        FileListPage file_stk = client.files().list(params);
        System.out.println(file_stk);
    }
}
```

## HTTP

#### Endpoint

```
Singapore region: GET https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files
China (Beijing) region: GET https://dashscope.aliyuncs.com/compatible-mode/v1/files
```

#### **Request examples**

```
# ======= Important =======
# API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files
# === Delete this comment before running ===
curl -X GET https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files \
-H "Authorization: Bearer $DASHSCOPE_API_KEY"
```

> If you use a model in the China (Beijing) region, you must use an [API KEY](https://bailian.console.alibabacloud.com/?tab=model#/api-key) from the China (Beijing) region and replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files

#### **Sample response**

```
{
    "object": "list",
    "has_more": true,
    "data": [
        {
            "id": "file-batch-xxx",
            "object": "file",
            "bytes": 84889,
            "created_at": 1715569225,
            "filename": "example.txt",
            "purpose": "batch",
            "status": "processed"
        },
        {
            "id": "file-batch-yyy",
            "object": "file",
            "bytes": 722355,
            "created_at": 1715413868,
            "filename": "Agent_survey.pdf",
            "purpose": "batch",
            "status": "processed"
        }
    ]
}
```

### Delete a file

Delete a file by `file_id`. Use [Query a list of files](#77a1a1d0bdq4n) API to find file IDs.

## OpenAI Python SDK

#### **Request examples**

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

file_object = client.files.delete("file-batch-xxx")
print(file_object.model_dump_json())
```

#### **Sample response**

```
{
  "object": "file",
  "deleted": true,
  "id": "file-batch-xxx"
}
```

## OpenAI Java SDK

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.FileDeleteParams;
import com.openai.models.FileListPage;
import com.openai.models.FileListParams;

public class Main {
    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
                .baseUrl("https://dashscope-intl.aliyuncs.com/compatible-mode/v1")
                .build();
        FileDeleteParams params = FileDeleteParams.builder()
                .fileId("file-batch-xxx")
                .build();

        System.out.println(client.files().delete(params));
    }
}
```

## HTTP

#### Endpoint

```
Singapore region: DELETE https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files/{file_id}
China (Beijing) region: https://dashscope.aliyuncs.com/compatible-mode/v1/files/{file_id}
```

#### **Request examples**

```
# ======= Important =======
# API keys for the Singapore and China (Beijing) regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the URL for the Singapore region. If you use a model in the China (Beijing) region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files/file-batch-xxx
# === Delete this comment before running ===
curl -X  DELETE https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files/file-batch-xxx \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" 
```

> If you use a model from the China (Beijing) region, you must use an [API KEY](https://bailian.console.alibabacloud.com/?tab=model#/api-key) from the China (Beijing) region and replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/files/file-batch-xxx

#### **Sample response**

```
{
  "object": "file",
  "deleted": true,
  "id": "file-batch-oLIon7bzfxELqJBTS5okwC4E"
}
```

## Billing

File upload, storage, and query are free. Charges apply only to input and output tokens when calling models.

## Rate limiting

The QPS limit for file upload is 3. The total QPS limit for query, list, and delete operations is 10.

## Going live

-   **Periodic cleanup**: Delete unused files regularly to stay within the 10,000-file limit.
    
-   **Status check**: Verify `status` is `processed` before using uploaded files.
    
-   **Rate limit check**: Ensure compliance with QPS limits (upload: 3 QPS, query/list/delete: 10 QPS total).
    
-   **Error handling**: Implement exception handling for network errors, API errors, and other failures.
    

## FAQ

### **1\. What do I do if the file status remains "processing" after upload?**

File processing usually completes within seconds. If the status remains "processing" for an extended period:

-   Check whether the file format is supported.
    
-   Check whether the file size exceeds the limit.
    
-   Use the `retrieve` API to periodically query the status.
    

### **2\. Can file IDs be used across different accounts?**

No. File IDs are valid only within the Alibaba Cloud account that created them and cannot be shared across accounts.

### **3\. Are uploaded files stored permanently?**

Yes. Files are permanently stored in your account unless deleted. Clean up unnecessary files periodically.

### **4\. What are the possible reasons for a file upload failure?**

-   The API key is invalid or has not been exported.
    
-   The file format is not supported.
    
-   The file size exceeds the limit (file-extract: 150 MB, batch: 500 MB).
    
-   The maximum number of files (10,000) or the total size limit (100 GB) has been reached.
    
-   The QPS limit for the file upload interface has been exceeded. The limit is 3 QPS.
    

### **5\. Should I choose file-extract or batch for the purpose parameter?**

-   `file-extract`: Use this for document analysis scenarios with Qwen-Long or Qwen-Doc-Turbo.
    
-   `batch`: Use this for batch tasks. The file must be a JSONL file that meets the format requirements.
    

## **Parameter description**

**Category**

**Parameter**

**Type**

**Required**

**Description**

**Example**

File upload

file

_File_

Yes

The file to upload.

Path("test.txt")

purpose

_String_

Yes

Specifies the purpose of the uploaded file. Valid values:

`file-extract`: For document understanding with the qwen-long model.

`batch`: For [OpenAI compatible - Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/) jobs. The file must be in the format specified in [OpenAI compatible - Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/#578afe12c1uvz).

"file-extract"

File query

file\_id

_String_

Yes

The ID of the file to query.

"file-fe-xxx"

after

_String_

No

The cursor used for pagination in the [Query a list of files](#77a1a1d0bdq4n) task.

Set `after` to the last \`file\_id\` on the current page to retrieve the next page. Example: if the last \`file\_id\` is \`file-batch-xxx\`, set `after="file-batch-xxx"` in the next query.

"file-fe-xxx"

create\_before

_String_

No

Timestamp (string format) for [Query a list of files](#77a1a1d0bdq4n). Returns file IDs created **before** the specified time.

`"20250306123000"`, `"2025-11-12 10:10:10"`, `"2025-11-12"`, `"20251112"`

create\_after

_String_

No

Timestamp (string format) for [Query a list of files](#77a1a1d0bdq4n). Returns file IDs created **after** the specified time.

`"20250306123000"`, `"2025-11-12 10:10:10"`, `"2025-11-12"`, `"20251112"`

purpose

_String_

No

For [Query a list of files](#77a1a1d0bdq4n): filters by purpose (`file-extract` or `batch`).

"batch"

limit

_Integer_

No

Number of files per query in [Query a list of files](#77a1a1d0bdq4n). Range: 1-2,000. Default: 2,000.

2000

File deletion

file\_id

_String_

Yes

The ID of the file to delete.

"file-fe-xxx"

**Response parameters**

Common response parameters

id

_String_

\\

The ID of the file.

For [Delete a file](#3457ce1d7ezr3): the deleted file ID.

"file-fe-xxx"

bytes

_Integer_

The size of the file in bytes.

81067

created\_at

_Integer_

The UNIX timestamp in seconds when the file was created.

1617981067

filename

_String_

The name of the uploaded file.

"text.txt"

object

_String_

The object type. Always "list" for [Query a list of files](#77a1a1d0bdq4n), "file" for other operations.

"file"

purpose

_String_

The purpose of the file. The valid values are `batch`, `file-extract`, and `batch_output`.

"file-extract"

status

_String_

The current status of the file.

"processed"

Query file list

has\_more

_Boolean_

Indicates whether there is a next page of data.

false

data

_Array_

List of files. Each element follows common response parameter format.

```
[{
 "id": "xxx",
 "bytes": 27,
 "created_at": 1722480543,
 "filename": "test.txt",
 "object": "file",
 "purpose": "batch",
 "status": "processed",
 "status_details": null
 }]
```

Delete file

deleted

_Boolean_

Indicates deletion success. Returns \`true\` if successful.

true

## Error codes

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.
