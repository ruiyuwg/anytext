Submit batch files for asynchronous execution at **50%** of the cost of real-time calls. The service processes large-scale data offline and returns results when tasks complete or the maximum waiting time is reached.

For console operation, see [Batch inference](/help/en/model-studio/batch-inference).

## **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014653771/CAEQUxiBgMCYnLGy4BkiIDE5OTU3ZGNjMmQ3NzRlZmNhZTY3YTVkMzhhMjExYzdm6318723_20260129171731.699.svg)

## **Prerequisites**

Use the OpenAI SDK (Python, Node.js) or the HTTP API.

-   **Get an API key**: [Export your Model Studio API key as an environment variable](/help/en/model-studio/get-api-key)
    
-   **Install SDK (optional)**: Install the [OpenAI SDK](/help/en/model-studio/install-sdk) if needed.
    
-   **Service endpoints**
    
    -   **Chinese Mainland**: `https://dashscope.aliyuncs.com/compatible-mode/v1`
        
    -   **International**: `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`
        

## **Availability**

### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), both the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled across global regions, excluding the Chinese mainland.

**Supported models**: qwen-max, qwen-plus, qwen-flash, qwen-turbo.

### Chinese mainland

In the [Chinese mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), both the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are available only in the Chinese mainland.

**Supported models**:

-   **Text generation models**: Stable versions of Qwen-Max, Plus, Flash, and Long, and some `latest` versions. QwQ series (qwq-plus) and some third-party models (deepseek-r1, deepseek-v3) are also supported.
    
-   **Multimodal models**: Stable versions of Qwen-VL-Max, Plus, and Flash, plus some `latest` versions. Also supported is the Qwen-OCR model.
    
-   **Text embedding models**: text-embedding-v4.
    

Supported model names

-   **Text generation**
    
    -   [Qwen-Max](/help/en/model-studio/models#cfc131abafghw): qwen3-max, qwen-max, qwen-max-latest
        
    -   [Qwen-Plus](/help/en/model-studio/models#6c45e49509gtr): qwen3.5-plus, qwen-plus, qwen-plus-latest
        
    -   [Qwen-Flash](/help/en/model-studio/models#d617df95f1g9h): qwen3.5-flash, qwen-flash
        
    -   [Qwen-Long](/help/en/model-studio/models#27b2b3a15d5c6): qwen-long-latest
        
    -   [QwQ](/help/en/model-studio/models#874b221f2cx9k): qwq-plus
        
    -   Third-party models: deepseek-r1, deepseek-v3
        
-   **Multimodal**
    
    -   [Image and video understanding](/help/en/model-studio/vision): qwen3.5-plus, qwen3.5-flash, qwen3-vl-plus, qwen3-vl-flash, qwen-vl-max, qwen-vl-max-latest, qwen-vl-plus, qwen-vl-plus-latest
        
    -   [Text extraction](/help/en/model-studio/qwen-vl-ocr): qwen-vl-ocr
        
-   [**Text embedding models**](https://www.alibabacloud.com/help/zh/model-studio/user-guide/embedding)**:** text-embedding-v4
    

**Important**

-   Some models support thinking mode. When enabled, this mode generates thinking `tokens` and increases costs.
    
-   The `qwen3.5` series (such as `qwen3.5-plus` and `qwen3.5-flash`) enable thinking mode by default. When using hybrid-thinking models, explicitly set the `enable_thinking` parameter (`true` or `false`).
    

## **Getting started**

Before processing formal tasks, test with `batch-test-model`. This test model returns a fixed response to verify your API call chain and data format without running inference.

**Note**

**Limitations of batch-test-model:**

-   Test files must meet [Input file](#0214fa4f9dxb3) requirements: max **1 MB** size and **100** lines.
    
-   Concurrency limit: Up to **2** parallel tasks.
    
-   Cost: The test model does not incur any model inference fees.
    

### **Step 1: Prepare the input file**

Prepare a file named test\_model.jsonl with the following content:

```
{"custom_id":"1","method":"POST","url":"/v1/chat/ds-test","body":{"model":"batch-test-model","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Hello! How can I help you?"}]}}
{"custom_id":"2","method":"POST","url":"/v1/chat/ds-test","body":{"model":"batch-test-model","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"What is 2+2?"}]}}
```

### **Step 2: Run the code**

Choose a code sample based on your language, save it in the same directory as your input file, and run it. It completes the full workflow automatically.

> To adjust the file path or other parameters, modify the code as needed.

Sample code

## OpenAI Python SDK

```
import os
from pathlib import Path
from openai import OpenAI
import time

# Initialize the client
client = OpenAI(
    # If not using environment variables, use api_key="sk-xxx" with your Model Studio API key.
    # Note: API keys differ by region. Never hard-code in production to reduce leak risk.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"  # The base_url for the Model Studio service
)

def upload_file(file_path):
    print(f"Uploading the JSONL file that contains request information...")
    file_object = client.files.create(file=Path(file_path), purpose="batch")
    print(f"File uploaded successfully. File ID: {file_object.id}\n")
    return file_object.id

def create_batch_job(input_file_id):
    print(f"Creating a batch task based on the file ID...")
    # Note: The value of the endpoint parameter here must match the url field in the input file.
    # For the test model (batch-test-model), use /v1/chat/ds-test.
    # For text embedding models, use /v1/embeddings.
    # For other models, use /v1/chat/completions.
    batch = client.batches.create(input_file_id=input_file_id, endpoint="/v1/chat/ds-test", completion_window="24h")
    print(f"Batch task created. batch task ID: {batch.id}\n")
    return batch.id

def check_job_status(batch_id):
    print(f"Checking the batch task status...")
    batch = client.batches.retrieve(batch_id=batch_id)
    print(f"Batch task status: {batch.status}\n")
    return batch.status

def get_output_id(batch_id):
    print(f"Getting the output file ID for successful requests in the batch task...")
    batch = client.batches.retrieve(batch_id=batch_id)
    print(f"Output file ID: {batch.output_file_id}\n")
    return batch.output_file_id

def get_error_id(batch_id):
    print(f"Getting the output file ID for failed requests in the batch task...")
    batch = client.batches.retrieve(batch_id=batch_id)
    print(f"Error file ID: {batch.error_file_id}\n")
    return batch.error_file_id

def download_results(output_file_id, output_file_path):
    print(f"Printing and downloading the results of successful requests from the batch task...")
    content = client.files.content(output_file_id)
    # Print some content for testing
    print(f"Printing the first 1,000 characters of the successful request results: {content.text[:1000]}...\n")
    # Save the result file locally
    content.write_to_file(output_file_path)
    print(f"The complete output results have been saved to the local output file result.jsonl\n")

def download_errors(error_file_id, error_file_path):
    print(f"Printing and downloading the failure information for requests from the batch task...")
    content = client.files.content(error_file_id)
    # Print some content for testing
    print(f"Printing the first 1,000 characters of the request failure information: {content.text[:1000]}...\n")
    # Save the error information file locally
    content.write_to_file(error_file_path)
    print(f"The complete request failure information has been saved to the local error file error.jsonl\n")

def main():
    # File paths
    input_file_path = "test_model.jsonl"  # You can replace this with your input file path
    output_file_path = "result.jsonl"  # You can replace this with your output file path
    error_file_path = "error.jsonl"  # You can replace this with your error file path
    try:
        # Step 1: Upload the JSONL file containing request information to get the input file ID
        input_file_id = upload_file(input_file_path)
        # Step 2: Create a batch task based on the input file ID
        batch_id = create_batch_job(input_file_id)
        # Step 3: Check the batch task status until it is finished
        status = ""
        while status not in ["completed", "failed", "expired", "cancelled"]:
            status = check_job_status(batch_id)
            print(f"Waiting for the task to complete...")
            time.sleep(10)  # Wait 10 seconds and then query the status again
        # If the task fails, print the error message and exit
        if status == "failed":
            batch = client.batches.retrieve(batch_id)
            print(f"Batch task failed. Error message: {batch.errors}\n")
            print(f"For more information, see Error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code")
            return
        # Step 4: Download results: If the output file ID is not empty, print the first 1,000 characters of the successful request results and download the complete results to a local output file.
        # If the error file ID is not empty, print the first 1,000 characters of the request failure information and download the complete information to a local error file.
        output_file_id = get_output_id(batch_id)
        if output_file_id:
            download_results(output_file_id, output_file_path)
        error_file_id = get_error_id(batch_id)
        if error_file_id:
            download_errors(error_file_id, error_file_path)
            print(f"For more information, see Error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code")
    except Exception as e:
        print(f"An error occurred: {e}")
        print(f"For more information, see Error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code")

if __name__ == "__main__":
    main()
```

## OpenAI Node.js SDK

```
/**
 * Model Studio Batch API Test - Using OpenAI Node.js SDK
 *
 * Install dependencies: npm install openai
 * Run: node test-nodejs.js
 */

const OpenAI = require('openai');
const fs = require('fs');

// Base URL for the Singapore region
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// For Beijing, use: const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    process.exit(1);
}

// Initialize the client
const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    try {
        console.log('=== Start Batch API Test ===\n');

        // Step 1: Upload file
        console.log('Step 1: Uploading the JSONL file that contains request information...');
        const fileStream = fs.createReadStream('test_model.jsonl');
        const fileObject = await client.files.create({
            file: fileStream,
            purpose: 'batch'
        });
        const fileId = fileObject.id;
        console.log(`✓ File uploaded successfully, File ID: ${fileId}\n`);

        // Step 2: Create batch task
        console.log('Step 2: Creating batch task...');
        const batch = await client.batches.create({
            input_file_id: fileId,
            endpoint: '/v1/chat/ds-test',  // Use /v1/chat/ds-test for the test model
            completion_window: '24h'
        });
        const batchId = batch.id;
        console.log(`✓ batch task created successfully, Task ID: ${batchId}\n`);

        // Step 3: Poll task status
        console.log('Step 3: Waiting for task to complete...');
        let status = batch.status;
        let pollCount = 0;
        let latestBatch = batch;

        while (!['completed', 'failed', 'expired', 'cancelled'].includes(status)) {
            await sleep(10000); // Wait 10 seconds
            latestBatch = await client.batches.retrieve(batchId);
            status = latestBatch.status;
            pollCount++;
            console.log(`  [${pollCount}] Task status: ${status}`);
        }

        console.log(`\n✓ Task completed, final status: ${status}\n`);

        // Step 4: Process results
        if (status === 'completed') {
            console.log('Step 4: Downloading result file...');

            // Download successful results
            const outputFileId = latestBatch.output_file_id;
            if (outputFileId) {
                console.log(`  Output file ID: ${outputFileId}`);
                const content = await client.files.content(outputFileId);
                const text = await content.text();
                console.log('\n--- Successful results (first 500 characters) ---');
                console.log(text.substring(0, Math.min(500, text.length)));
                console.log('...\n');
            }

            // Download error file (if any)
            const errorFileId = latestBatch.error_file_id;
            if (errorFileId) {
                console.log(`  Error file ID: ${errorFileId}`);
                const errorContent = await client.files.content(errorFileId);
                const errorText = await errorContent.text();
                console.log('\n--- Error information ---');
                console.log(errorText);
            }

            console.log('\n=== Test completed successfully ===');
        } else if (status === 'failed') {
            console.error('\n✗ batch task failed');
            if (latestBatch.errors) {
                console.error('Error message:', latestBatch.errors);
            }
            console.error('\nSee error code documentation: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code');
        } else {
            console.log(`\nTask status: ${status}`);
        }

    } catch (error) {
        console.error('An error occurred:', error.message);
        console.error(error);
    }
}

main();
```

## Java (HTTP)

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;

/**
 * Model Studio Batch API Test - Using HTTP API
 *
 * Prerequisites:
 * 1. Ensure the environment variable DASHSCOPE_API_KEY is set
 * 2. Prepare the test file test_model.jsonl (in the project root directory)
 *
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 */
public class BatchAPITest {

    // Base URL for the Singapore region
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // If using the Beijing region, replace the above BASE_URL with:
    // private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1";

    private static String API_KEY;

    public static void main(String[] args) throws Exception {
        // Get API Key from environment variable
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.exit(1);
        }

        System.out.println("=== Start Batch API Test ===\n");

        try {
            // Step 1: Upload file
            System.out.println("Step 1: Uploading the JSONL file that contains request information...");
            String fileId = uploadFile("test_model.jsonl");
            System.out.println("✓ File uploaded successfully, File ID: " + fileId + "\n");

            // Step 2: Create batch task
            System.out.println("Step 2: Creating batch task...");
            String batchId = createBatch(fileId);
            System.out.println("✓ batch task created successfully, Task ID: " + batchId + "\n");

            // Step 3: Poll task status
            System.out.println("Step 3: Waiting for task to complete...");
            String status = "";
            int pollCount = 0;

            while (!isTerminalStatus(status)) {
                Thread.sleep(10000); // Wait 10 seconds
                String batchInfo = getBatch(batchId);
                status = parseStatus(batchInfo);
                pollCount++;
                System.out.println("  [" + pollCount + "] Task status: " + status);

                // Step 4: If completed, download results
                if ("completed".equals(status)) {
                    System.out.println("\n✓ Task completed!\n");
                    System.out.println("Step 4: Downloading result file...");

                    String outputFileId = parseOutputFileId(batchInfo);
                    if (outputFileId != null && !outputFileId.isEmpty()) {
                        System.out.println("  Output file ID: " + outputFileId);
                        String content = getFileContent(outputFileId);
                        System.out.println("\n--- Successful results (first 500 characters) ---");
                        System.out.println(content.substring(0, Math.min(500, content.length())));
                        System.out.println("...\n");
                    }

                    String errorFileId = parseErrorFileId(batchInfo);
                    if (errorFileId != null && !errorFileId.isEmpty() && !"null".equals(errorFileId)) {
                        System.out.println("  Error file ID: " + errorFileId);
                        String errorContent = getFileContent(errorFileId);
                        System.out.println("\n--- Error information ---");
                        System.out.println(errorContent);
                    }

                    System.out.println("\n=== Test completed successfully ===");
                    break;
                } else if ("failed".equals(status)) {
                    System.err.println("\n✗ batch task failed");
                    System.err.println("Task info: " + batchInfo);
                    System.err.println("\nSee error code documentation: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code");
                    break;
                } else if ("expired".equals(status) || "cancelled".equals(status)) {
                    System.out.println("\nTask status: " + status);
                    break;
                }
            }

        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Upload file
     */
    private static String uploadFile(String filePath) throws Exception {
        String boundary = "----WebKitFormBoundary" + System.currentTimeMillis();
        URL url = new URL(BASE_URL + "/files");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        conn.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);

        try (DataOutputStream out = new DataOutputStream(conn.getOutputStream())) {
            // Add purpose field
            out.writeBytes("--" + boundary + "\r\n");
            out.writeBytes("Content-Disposition: form-data; name=\"purpose\"\r\n\r\n");
            out.writeBytes("batch\r\n");

            // Add file
            out.writeBytes("--" + boundary + "\r\n");
            out.writeBytes("Content-Disposition: form-data; name=\"file\"; filename=\"" + filePath + "\"\r\n");
            out.writeBytes("Content-Type: application/octet-stream\r\n\r\n");

            byte[] fileBytes = Files.readAllBytes(Paths.get(filePath));
            out.write(fileBytes);
            out.writeBytes("\r\n");
            out.writeBytes("--" + boundary + "--\r\n");
        }

        String response = readResponse(conn);
        return parseField(response, "\"id\":\\s*\"([^\"]+)\"");
    }

    /**
     * Create batch task
     */
    private static String createBatch(String fileId) throws Exception {
        String jsonBody = String.format(
            "{\"input_file_id\":\"%s\",\"endpoint\":\"/v1/chat/ds-test\",\"completion_window\":\"24h\"}",
            fileId
        );

        String response = sendRequest("POST", "/batches", jsonBody);
        return parseField(response, "\"id\":\\s*\"([^\"]+)\"");
    }

    /**
     * Get batch task info
     */
    private static String getBatch(String batchId) throws Exception {
        return sendRequest("GET", "/batches/" + batchId, null);
    }

    /**
     * Get file content
     */
    private static String getFileContent(String fileId) throws Exception {
        return sendRequest("GET", "/files/" + fileId + "/content", null);
    }

    /**
     * Send HTTP request
     */
    private static String sendRequest(String method, String path, String jsonBody) throws Exception {
        URL url = new URL(BASE_URL + path);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);

        if (jsonBody != null) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonBody.getBytes("UTF-8"));
            }
        }

        return readResponse(conn);
    }

    /**
     * Read response
     */
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();

        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }

    /**
     * Parse JSON field (simple implementation)
     */
    private static String parseField(String json, String regex) {
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(regex);
        java.util.regex.Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }

    private static String parseStatus(String json) {
        return parseField(json, "\"status\":\\s*\"([^\"]+)\"");
    }

    private static String parseOutputFileId(String json) {
        return parseField(json, "\"output_file_id\":\\s*\"([^\"]+)\"");
    }

    private static String parseErrorFileId(String json) {
        return parseField(json, "\"error_file_id\":\\s*\"([^\"]+)\"");
    }

    /**
     * Check if status is terminal
     */
    private static boolean isTerminalStatus(String status) {
        return "completed".equals(status)
            || "failed".equals(status)
            || "expired".equals(status)
            || "cancelled".equals(status);
    }
}
```

## curl (HTTP)

```
#!/bin/bash
# Model Studio Batch API Test - Using curl
#
# Prerequisites:
# 1. Ensure the environment variable DASHSCOPE_API_KEY is set
# 2. Prepare the test file test_model.jsonl (in the current directory)
#
# Region configuration:
# - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
# - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1

API_KEY="${DASHSCOPE_API_KEY}"
BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"

# For Beijing, use: BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"

# Check API Key
if [ -z "$API_KEY" ]; then
    echo "Error: Please set the environment variable DASHSCOPE_API_KEY"
    exit 1
fi

echo "=== Start Batch API Test ==="
echo ""

# Step 1: Upload file
echo "Step 1: Uploading the JSONL file that contains request information..."
UPLOAD_RESPONSE=$(curl -s -X POST "${BASE_URL}/files" \
  -H "Authorization: Bearer ${API_KEY}" \
  -F 'file=@test_model.jsonl' \
  -F 'purpose=batch')

FILE_ID=$(echo $UPLOAD_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "✓ File uploaded successfully, File ID: ${FILE_ID}"
echo ""

# Step 2: Create batch task
echo "Step 2: Creating batch task..."
BATCH_RESPONSE=$(curl -s -X POST "${BASE_URL}/batches" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"input_file_id\":\"${FILE_ID}\",\"endpoint\":\"/v1/chat/ds-test\",\"completion_window\":\"24h\"}")

BATCH_ID=$(echo $BATCH_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "✓ batch task created successfully, Task ID: ${BATCH_ID}"
echo ""

# Step 3: Poll task status
echo "Step 3: Waiting for task to complete..."
STATUS=""
POLL_COUNT=0

while [[ "$STATUS" != "completed" && "$STATUS" != "failed" && "$STATUS" != "expired" && "$STATUS" != "cancelled" ]]; do
    sleep 10
    BATCH_INFO=$(curl -s -X GET "${BASE_URL}/batches/${BATCH_ID}" \
      -H "Authorization: Bearer ${API_KEY}")
    STATUS=$(echo $BATCH_INFO | grep -o '"status":"[^"]*"' | cut -d'"' -f4)
    POLL_COUNT=$((POLL_COUNT + 1))
    echo "  [${POLL_COUNT}] Task status: ${STATUS}"
done

echo ""
echo "✓ Task completed, final status: ${STATUS}"
echo ""

# Step 4: Download results
if [[ "$STATUS" == "completed" ]]; then
    echo "Step 4: Downloading result file..."

    OUTPUT_FILE_ID=$(echo $BATCH_INFO | grep -o '"output_file_id":"[^"]*"' | cut -d'"' -f4)
    if [[ -n "$OUTPUT_FILE_ID" && "$OUTPUT_FILE_ID" != "null" ]]; then
        echo "  Output file ID: ${OUTPUT_FILE_ID}"

        RESULT_CONTENT=$(curl -s -X GET "${BASE_URL}/files/${OUTPUT_FILE_ID}/content" \
          -H "Authorization: Bearer ${API_KEY}")

        echo ""
        echo "--- Successful results (first 500 characters) ---"
        echo "${RESULT_CONTENT:0:500}"
        echo "..."
        echo ""
    fi

    ERROR_FILE_ID=$(echo $BATCH_INFO | grep -o '"error_file_id":"[^"]*"' | cut -d'"' -f4)
    if [[ -n "$ERROR_FILE_ID" && "$ERROR_FILE_ID" != "null" ]]; then
        echo "  Error file ID: ${ERROR_FILE_ID}"

        ERROR_CONTENT=$(curl -s -X GET "${BASE_URL}/files/${ERROR_FILE_ID}/content" \
          -H "Authorization: Bearer ${API_KEY}")

        echo ""
        echo "--- Error information ---"
        echo "${ERROR_CONTENT}"
    fi

    echo ""
    echo "=== Test completed successfully ==="
elif [[ "$STATUS" == "failed" ]]; then
    echo ""
    echo "✗ batch task failed"
    echo "Task info: ${BATCH_INFO}"
    echo ""
    echo "See error code documentation: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code"
else
    echo ""
    echo "Task status: ${STATUS}"
fi
```

### **Step 3: Verify test results**

After the task succeeds, the result file `result.jsonl` will contain the fixed response `{"content":"This is a test result."}`:

```
{"id":"a2b1ae25-21f4-4d9a-8634-99a29926486c","custom_id":"1","response":{"status_code":200,"request_id":"a2b1ae25-21f4-4d9a-8634-99a29926486c","body":{"created":1743562621,"usage":{"completion_tokens":6,"prompt_tokens":20,"total_tokens":26},"model":"batch-test-model","id":"chatcmpl-bca7295b-67c3-4b1f-8239-d78323bb669f","choices":[{"finish_reason":"stop","index":0,"message":{"content":"This is a test result."}}],"object":"chat.completion"}},"error":null}
{"id":"39b74f09-a902-434f-b9ea-2aaaeebc59e0","custom_id":"2","response":{"status_code":200,"request_id":"39b74f09-a902-434f-b9ea-2aaaeebc59e0","body":{"created":1743562621,"usage":{"completion_tokens":6,"prompt_tokens":20,"total_tokens":26},"model":"batch-test-model","id":"chatcmpl-1e32a8ba-2b69-4dc4-be42-e2897eac9e84","choices":[{"finish_reason":"stop","index":0,"message":{"content":"This is a test result."}}],"object":"chat.completion"}},"error":null}
```

## **Run a formal task**

### **Input file requirements**

-   **Format**: JSONL with UTF-8 encoding. Each line must be a separate JSON object.
    
-   **Size limits**: Up to 50,000 requests per file and no larger than 500 MB.
    
-   **Line limit**: Each JSON object up to 6 MB and within the model's context window.
    
-   **Consistency**: All requests in the same file must use the same model and thinking mode (if applicable).
    
-   **Unique identifier**: Each request must include a \`custom\_id\` field that is unique within the file. This is used for matching results.
    

Example file content:

```
{"custom_id":"1","method":"POST","url":"/v1/chat/completions","body":{"model":"qwen-plus","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Hello!"}]}}
{"custom_id":"2","method":"POST","url":"/v1/chat/completions","body":{"model":"qwen-plus","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"What is 2+2?"}]}}
```

**JSONL batch generation tool**

Use this tool to quickly generate JSONL files.

 JSONL batch generation tool

**Select a mode:**

Chinese Mainland (Beijing) International

**Select a model series:** Text generation model Multimodal model General text embedding model

**Select a specific model:** qwen3-max qwen-max qwen-max-latest qwen-flash (thinking mode) qwen-flash (non-thinking mode) qwen-plus (thinking mode) qwen-plus (non-thinking mode) qwen-plus-latest (thinking mode) qwen-plus-latest (non-thinking mode) qwen-turbo (thinking mode) qwen-turbo (non-thinking mode) qwen-turbo-latest (thinking mode) qwen-turbo-latest (non-thinking mode) qwen-long qwen-long-latest qwq-plus qwq-32b-preview deepseek-r1 deepseek-v3

**Enter your requests (one request per line):** Hello! How can I help you? What is 2+2?

**Paste your media URLs (one or more per line, separated by commas):** **Enter your questions about the media:**

Generate

**Select a mode:**

Chinese Mainland (Beijing) International

**Select a model series:** Text generation model

**Select a specific model:** qwen-max qwen-plus qwen-flash (thinking mode) qwen-flash (non-thinking mode) qwen-turbo

**Enter your requests (one request per line):** Hello! How can I help you? What is 2+2?

Generate

### **1\. Modify the input file**

-   Directly modify `test_model.jsonl`. Set the model parameter to the actual model to use and configure the url field:
    
    **Type**
    
    **url**
    
    Text generation/multimodal
    
    `/v1/chat/completions`
    
    Text embedding
    
    `/v1/embeddings`
    
-   Alternatively, use the "JSONL batch generation tool" above to generate a new file. Make sure that the `model` and `url` fields are correct.
    

### **2\. Modify the code in Getting started**

1.  Change the input file path to your file name.
    
2.  Modify the endpoint parameter value to match the url field in your input file.
    

### **3\. Run the code and wait for results**

After the task succeeds, the successful request results are saved in the local result.jsonl file. If some requests fail, the error details are saved in the error.jsonl file.

-   Successful results (`output_file_id`): Each line corresponds to a successful original request and contains the `custom_id` and `response`.
    
    ```
    {"id":"3a5c39d5-3981-4e4c-97f2-e0e821893f03","custom_id":"req-001","response":{"status_code":200,"request_id":"3a5c39d5-3981-4e4c-97f2-e0e821893f03","body":{"created":1768306034,"usage":{"completion_tokens":654,"prompt_tokens":14,"total_tokens":668},"model":"qwen-plus","id":"chatcmpl-3a5c39d5-3981-4e4c-97f2-e0e821893f03","choices":[{"finish_reason":"stop","index":0,"message":{"role":"assistant","content":"Hello! Hangzhou West Lake is a famous scenic spot in China, located in the western part of Hangzhou City, Zhejiang Province, hence the name \"West Lake\". It is one of China's top ten scenic spots and a World Cultural Heritage site (listed by UNESCO in 2011). It is renowned worldwide for its beautiful natural scenery and profound cultural heritage.\n\n### I. Natural Landscape\nWest Lake is surrounded by mountains on three sides and borders the city on one side, covering an area of approximately 6.39 square kilometers, shaped like a ruyi scepter with rippling blue waters. The lake is naturally or artificially divided into multiple water areas by Solitary Hill, Bai Causeway, Su Causeway, and Yanggong Causeway, forming a layout of \"one mountain, two pagodas, three islands, and three causeways\".\n\nMain attractions include the following:\n- **Spring Dawn at Su Causeway**: During the Northern Song Dynasty, the great literary figure Su Dongpo, while serving as the prefect of Hangzhou, led the dredging of West Lake and used the excavated silt to build a causeway, later named \"Su Causeway\". In spring, peach blossoms and willows create a picturesque scene.\n- **Lingering Snow on Broken Bridge**: Located at the eastern end of Bai Causeway, this is where the reunion scene from the Legend of the White Snake took place. After snowfall in winter, it is particularly famous for its silver-white appearance.\n- **Leifeng Pagoda at Sunset**: Leifeng Pagoda glows golden under the setting sun and was once one of the \"Ten Scenes of West Lake\".\n- **Three Pools Mirroring the Moon**: On Xiaoyingzhou Island in the lake, there are three stone pagodas. During the Mid-Autumn Festival, lanterns can be lit inside the pagodas, creating a harmonious interplay of moonlight, lamplight, and lake reflections.\n- **Autumn Moon over Calm Lake**: Located at the western end of Bai Causeway, it is an excellent spot for viewing the moon over the lake.\n- **Viewing Fish at Flower Harbor**: Known for viewing flowers and fish, with peonies and koi complementing each other beautifully in the garden.\n\n### II. Cultural History\nWest Lake not only boasts beautiful scenery but also carries rich historical and cultural significance:\n- Since the Tang and Song dynasties, numerous literati such as Bai Juyi, Su Dongpo, Lin Bu, and Yang Wanli have left poems here.\n- Bai Juyi oversaw the construction of \"Bai Causeway\" and dredged West Lake, benefiting the local people.\n- Around West Lake are many historical sites, including Yuewang Temple (commemorating national hero Yue Fei), Lingyin Temple (a millennium-old Buddhist temple), Liuhe Pagoda, and Longjing Village (the origin of Longjing tea, one of China's top ten famous teas).\n\n### III. Cultural Symbolism\nWest Lake is regarded as a representative of \"paradise on earth\" and a model of traditional Chinese landscape aesthetics. It embodies the philosophical concept of \"harmony between heaven and humanity\" by integrating natural beauty with cultural depth. Many poems, paintings, and operas feature West Lake, making it an important symbol of Chinese culture.\n\n### IV. Travel Recommendations\n- Best visiting seasons: Spring (March-May) for peach blossoms and willows, Autumn (September-November) for clear skies and cool weather.\n- Recommended ways: Walking, cycling (along the lakeside greenway), or boating on the lake.\n- Local cuisine: West Lake vinegar fish, Longjing shrimp, Dongpo pork, pian'erchuan noodles.\n\nIn summary, Hangzhou West Lake is not just a natural wonder but also a living cultural museum worth exploring in detail. If you ever visit Hangzhou, don't miss this earthly paradise that is \"equally charming in light or heavy makeup\"."}}],"object":"chat.completion"}},"error":null}
    {"id":"628312ba-172c-457d-ba7f-3e5462cc6899","custom_id":"req-002","response":{"status_code":200,"request_id":"628312ba-172c-457d-ba7f-3e5462cc6899","body":{"created":1768306035,"usage":{"completion_tokens":25,"prompt_tokens":18,"total_tokens":43},"model":"qwen-plus","id":"chatcmpl-628312ba-172c-457d-ba7f-3e5462cc6899","choices":[{"finish_reason":"stop","index":0,"message":{"role":"assistant","content":"The spring breeze brushes green willows,\nNight rain nourishes red flowers.\nBird songs fill the forest,\nMountains and rivers share the same beauty."}}],"object":"chat.completion"}},"error":null}
    ```
    
-   Failure details (`error_file_id`): Contains information about failed request lines and the corresponding error reasons. For troubleshooting, see [Error codes](#97e145aeabbwf).
    

## **Detailed procedure**

The Batch API process consists of four steps: uploading a file, creating a task, querying the status, and downloading the results.

### **1\. Upload file**

Upload your JSONL file (meeting input file format requirements) using the file upload API to get a `file_id`.

> When you upload a file, the `purpose` parameter must be set to `batch`.

## OpenAI Python SDK

#### Request example

```
import os
from pathlib import Path
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    # Note: When switching regions, also update the API key accordingly.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# test.jsonl is a local sample file. purpose must be batch.
file_object = client.files.create(file=Path("test.jsonl"), purpose="batch")

print(file_object.model_dump_json())
```

## OpenAI Node.js SDK

#### Request example

```
/**
 * Model Studio Batch API - Upload file
 * 
 * If no environment variable is set, use apiKey: 'sk-xxx' (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Install dependencies: npm install openai
 */
const OpenAI = require('openai');
const fs = require('fs');

// Singapore region configuration (default)
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// If using the Beijing region, replace the above BASE_URL with:
// const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
// Note: When switching regions, also update the API key accordingly.

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    console.error('Or set in code: const apiKey = "sk-xxx";');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

const fileStream = fs.createReadStream('test.jsonl');
const fileObject = await client.files.create({
    file: fileStream,
    purpose: 'batch'
});
console.log(fileObject.id);
```

## Java (HTTP)

#### Request example

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Model Studio Batch API - Upload file
 * 
 * If no environment variable is set, use API_KEY = "sk-xxx" (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 * Note: When switching regions, also update the API key accordingly.
 */
public class BatchAPIUploadFile {
    
    // Singapore region configuration
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // For Beijing, use: private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"; and update the API key.
    
    private static String API_KEY;
    
    public static void main(String[] args) throws Exception {
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.err.println("Or set in code: API_KEY = \"sk-xxx\";");
            System.exit(1);
        }
        
String fileId = uploadFile("test.jsonl");
        System.out.println("File ID: " + fileId);
    }
    
    // === Utility methods ===
    
    private static String uploadFile(String filePath) throws Exception {
        String boundary = "----WebKitFormBoundary" + System.currentTimeMillis();
        URL url = new URL(BASE_URL + "/files");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        conn.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);

        try (DataOutputStream out = new DataOutputStream(conn.getOutputStream())) {
            // Add purpose field
            out.writeBytes("--" + boundary + "\r\n");
            out.writeBytes("Content-Disposition: form-data; name=\"purpose\"\r\n\r\n");
            out.writeBytes("batch\r\n");

            // Add file
            out.writeBytes("--" + boundary + "\r\n");
            out.writeBytes("Content-Disposition: form-data; name=\"file\"; filename=\"" + filePath + "\"\r\n");
            out.writeBytes("Content-Type: application/octet-stream\r\n\r\n");

            byte[] fileBytes = Files.readAllBytes(Paths.get(filePath));
            out.write(fileBytes);
            out.writeBytes("\r\n");
            out.writeBytes("--" + boundary + "--\r\n");
        }

        String response = readResponse(conn);
        return parseField(response, "\"id\":\\s*\"([^\"]+)\"");
    }
    
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }
    
    private static String parseField(String json, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }
}
```

## curl (HTTP)

#### Request example

```
# ======= Important =======
# API keys differ between Singapore and Beijing regions.
# The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/files
# === Delete this comment before execution ===
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
--form 'file=@"test.jsonl"' \
--form 'purpose="batch"'
```

#### Response example

```
{
    "id": "file-batch-xxx",
    "bytes": 437,
    "created_at": 1742304153,
    "filename": "test.jsonl",
    "object": "file",
    "purpose": "batch",
    "status": "processed",
    "status_details": null
}
```

### **2\. Create a batch task**

Create a batch task using the file ID returned from the file upload step.

## OpenAI Python SDK

#### Request example

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    # Note: When switching regions, also update the API key accordingly.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

batch = client.batches.create(
    input_file_id="file-batch-xxx",  # The ID returned after uploading the file
    endpoint="/v1/chat/completions",  # For the test model batch-test-model, use /v1/chat/ds-test. For text embedding models, use /v1/embeddings. For text generation/multimodal models, use /v1/chat/completions.
    completion_window="24h",
    metadata={'ds_name':"Task name",'ds_description':'Task description'} # Optional metadata field for creating task name and description
)
print(batch)
```

## OpenAI Node.js SDK

#### Request example

```
/**
 * Model Studio Batch API - Create batch task
 * 
 * If no environment variable is set, use apiKey: 'sk-xxx' (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Install dependencies: npm install openai
 */
const OpenAI = require('openai');

// Singapore region configuration (default)
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// If using the Beijing region, replace the above BASE_URL with:
// const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
// Note: When switching regions, also update the API key accordingly.

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    console.error('Or set in code: const apiKey = "sk-xxx";');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

const batch = await client.batches.create({
    input_file_id: 'file-batch-xxx',
    endpoint: '/v1/chat/completions',
    completion_window: '24h',
    metadata: {'ds_name': 'Task name', 'ds_description': 'Task description'}
});
console.log(batch.id);
```

## Java (HTTP)

#### Request example

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Model Studio Batch API - Create batch task
 * 
 * If no environment variable is set, use API_KEY = "sk-xxx" (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 * Note: When switching regions, also update the API key accordingly.
 */
public class BatchAPICreateBatch {
    
    // Singapore region configuration (default)
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // For Beijing, use: private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"; and update the API key.
    
    private static String API_KEY;
    
    public static void main(String[] args) throws Exception {
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.err.println("Or set in code: API_KEY = \"sk-xxx\";");
            System.exit(1);
        }
        
        String jsonBody = "{\"input_file_id\":\"file-batch-xxx\",\"endpoint\":\"/v1/chat/completions\",\"completion_window\":\"24h\",\"metadata\":{\"ds_name\":\"Task name\",\"ds_description\":\"Task description\"}}";
String response = sendRequest("POST", "/batches", jsonBody);
        String batchId = parseField(response, "\"id\":\\s*\"([^\"]+)\"");
        System.out.println("Batch task ID: " + batchId);
    }
    
    // === Utility methods ===
    
    private static String sendRequest(String method, String path, String jsonBody) throws Exception {
        URL url = new URL(BASE_URL + path);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        
        if (jsonBody != null) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonBody.getBytes("UTF-8"));
            }
        }
        
        return readResponse(conn);
    }
    
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }
    
    private static String parseField(String json, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }
}
```

## curl (HTTP)

#### Request example

```
# ======= Important =======
# API keys differ between Singapore and Beijing regions.
# The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/batches
# === Delete this comment before execution ===
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/batches \
  -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input_file_id": "file-batch-xxx",
    "endpoint": "/v1/chat/completions",
    "completion_window": "24h",
    "metadata":{"ds_name":"Task name","ds_description":"Task description"}
  }'
```

#### **Input parameters**

**Field**

**Type**

**Location**

**Required**

**Description**

input\_file\_id

String

Body

Yes

Specifies the file ID of the input file.

Use the file ID returned by the [Prepare and upload file](#a6e2ba320a8nt) API, such as `file-batch-xxx`.

endpoint

String

Body

Yes

The access path. This must match the url field in the input file.

-   For the test model `batch-test-model`, enter `/v1/chat/ds-test`
    
-   For other models, enter `/v1/chat/completions`
    

completion\_window

String

Body

Yes

The waiting time. Range: 24h to 336h (integers only). Supported units: "h" and "d" (e.g., "24h", "14d").

metadata

Map

Body

No

Extended metadata for the task, attached as key-value pairs.

metadata.ds\_name

String

Body

No

Task name.

Example: `"ds_name": "Batch task"`

Limit: Length cannot exceed 100 characters.

If this field is defined multiple times, the last value passed is used.

metadata.ds\_description

String

Body

No

Task description.

Example: `"ds_description": "Batch inference task test"`

Limit: Length cannot exceed 200 characters.

If this field is defined multiple times, the last value passed is used.

#### Response example

```
{
    "id": "batch_xxx",
    "object": "batch",
    "endpoint": "/v1/chat/completions",
    "errors": null,
    "input_file_id": "file-batch-xxx",
    "completion_window": "24h",
    "status": "validating",
    "output_file_id": null,
    "error_file_id": null,
    "created_at": 1742367779,
    "in_progress_at": null,
    "expires_at": null,
    "finalizing_at": null,
    "completed_at": null,
    "failed_at": null,
    "expired_at": null,
    "cancelling_at": null,
    "cancelled_at": null,
    "request_counts": {
        "total": 0,
        "completed": 0,
        "failed": 0
    },
    "metadata": {
        "ds_name": "Task name",
        "ds_description": "Task description"
    }
}
```

#### Response parameters

**Field**

**Type**

**Description**

id

String

The batch task ID for this creation.

object

String

Object type, fixed value `batch`.

endpoint

String

Access path.

errors

Map

Error message.

input\_file\_id

String

File ID.

completion\_window

String

The waiting time. Minimum waiting time is 24h, maximum is 336h. Only integers are supported.

Supported units are "h" and "d", such as "24h" or "14d".

status

String

Task status: validating, failed, in\_progress, finalizing, completed, expired, cancelling, cancelled.

output\_file\_id

String

Output file ID for successful requests.

error\_file\_id

String

Output file ID for failed requests.

created\_at

Integer

Unix timestamp (seconds) when the task was created.

in\_progress\_at

Integer

Unix timestamp (seconds) when the task started running.

expires\_at

Integer

Timestamp (seconds) when the task starts timing out.

finalizing\_at

Integer

Timestamp (seconds) when the task last started.

completed\_at

Integer

Timestamp (seconds) when the task was completed.

failed\_at

Integer

Timestamp (seconds) when the task failed.

expired\_at

Integer

Timestamp (seconds) when the task expired.

cancelling\_at

Integer

Timestamp (seconds) when the task was set to cancelling.

cancelled\_at

Integer

Timestamp (seconds) when the task was cancelled.

request\_counts

Map

Number of requests in different states.

metadata

Map

Additional information, key-value pairs.

metadata.ds\_name

String

Task name for the current task.

metadata.ds\_description

String

Task description for the current task.

### 3\. Query and manage **batch tasks**

After you create a task, use the following APIs to query its status, list historical tasks, or cancel an ongoing task.

#### Query specific task status

Query a specific batch task by its batch task ID. Currently, you can only query batch tasks that were created within the last 30 days.

## OpenAI Python SDK

#### Request example

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    # Note: When switching regions, also update the API key accordingly.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
batch = client.batches.retrieve("batch_id")  # Replace batch_id with the batch task ID
print(batch)
```

## OpenAI Node.js SDK

#### Request example

```
/**
 * Model Studio Batch API - Query single task
 * 
 * If no environment variable is set, use apiKey: 'sk-xxx' (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Install dependencies: npm install openai
 */
const OpenAI = require('openai');

// Singapore region configuration (default)
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// If using the Beijing region, replace the above BASE_URL with:
// const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
// Note: When switching regions, also update the API key accordingly.

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    console.error('Or set in code: const apiKey = "sk-xxx";');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

const batch = await client.batches.retrieve('batch_id');
console.log(batch.status);
```

## Java (HTTP)

#### Request example

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Model Studio Batch API - Query single task
 * 
 * If no environment variable is set, use API_KEY = "sk-xxx" (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 * Note: When switching regions, also update the API key accordingly.
 */
public class BatchAPIRetrieveBatch {
    
    // Singapore region configuration
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // For Beijing, use: private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"; and update the API key.
    
    private static String API_KEY;
    
    public static void main(String[] args) throws Exception {
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.err.println("Or set in code: API_KEY = \"sk-xxx\";");
            System.exit(1);
        }
        
        String batchInfo = sendRequest("GET", "/batches/batch_id", null);
        String status = parseField(batchInfo, "\"status\":\\s*\"([^\"]+)\"");
        System.out.println("Task status: " + status);
    }
    
    // === Utility methods ===
    
    private static String sendRequest(String method, String path, String jsonBody) throws Exception {
        URL url = new URL(BASE_URL + path);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        
        if (jsonBody != null) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonBody.getBytes("UTF-8"));
            }
        }
        
        return readResponse(conn);
    }
    
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }
    
    private static String parseField(String json, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }
}
```

## curl (HTTP)

#### Request example

```
# ======= Important =======
# API keys differ between Singapore and Beijing regions.
# The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/batches/batch_id
# === Delete this comment before execution ===
curl --request GET 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/batches/batch_id' \
 -H "Authorization: Bearer $DASHSCOPE_API_KEY"
```

#### **Response example**

A successful query returns detailed information about the batch task. The following is a response example for a task with a completed status:

```
{
  "id": "batch_abc123",
  "object": "batch",
  "endpoint": "/v1/chat/completions",
  "errors": null,
  "input_file_id": "file-abc123",
  "completion_window": "24h",
  "status": "completed",
  "output_file_id": "file-batch_output-xyz789",
  "error_file_id": "file-batch_error-xyz789",
  "created_at": 1711402400,
  "in_progress_at": 1711402450,
  "expires_at": 1711488800,
  "finalizing_at": 1711405000,
  "completed_at": 1711406000,
  "failed_at": null,
  "expired_at": null,
  "cancelling_at": null,
  "cancelled_at": null,
  "request_counts": {
    "total": 100,
    "completed": 95,
    "failed": 5
  },
  "metadata": {
    "customer_id": "user_123456789",
    "batch_description": "Nightly eval job"
  }
}
```

The returned JSON object contains complete information about the batch task, such as the task status, result file IDs, and request statistics. For detailed field descriptions, see the table below.

**Field**

**Type**

**Description**

id

String

Batch task ID.

status

String

Task status. Possible values include the following:

-   validating: Validating the input file.
    
-   in\_progress: Task is being processed.
    
-   finalizing: Task processing is complete, generating output files.
    
-   completed: Task completed successfully.
    
-   failed: Task failed due to a serious error.
    
-   expired: Task expired because it could not complete within the completion\_window.
    
-   cancelling: Cancelling the task.
    
-   cancelled: Task has been cancelled.
    

output\_file\_id

String

ID of the success result file, generated after task completion.

error\_file\_id

String

ID of the failure result file, generated after task completion if there are failed requests.

request\_counts

Object

Statistics object containing total, completed, and failed counts.

#### **Query task list**

Use the `batches.list()` method to query the list of batch tasks. Use pagination to retrieve the complete task list.

## OpenAI Python SDK

#### **Request example**

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    # Note: When switching regions, also update the API key accordingly.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
batches = client.batches.list(after="batch_xxx", limit=2,extra_query={'ds_name':'Task name','input_file_ids':'file-batch-xxx,file-batch-xxx','status':'completed,expired','create_after':'20250304000000','create_before':'20250306123000'})
print(batches)
```

## OpenAI Node.js SDK

#### Request example

```
/**
 * Model Studio Batch API - Query task list
 * 
 * If no environment variable is set, use apiKey: 'sk-xxx' (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Install dependencies: npm install openai
 */
const OpenAI = require('openai');

// Singapore region configuration (default)
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// If using the Beijing region, replace the above BASE_URL with:
// const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
// Note: When switching regions, also update the API key accordingly.

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    console.error('Or set in code: const apiKey = "sk-xxx";');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

const batches = await client.batches.list({
    after: 'batch_xxx',
    limit: 2,
    extra_query: {
        'ds_name': 'Task name',
        'input_file_ids': 'file-batch-xxx,file-batch-xxx',
        'status': 'completed,expired',
        'create_after': '20250304000000',
        'create_before': '20250306123000'
    }
});

for (const batch of batches.data) {
    console.log(batch.id, batch.status);
}
```

## Java (HTTP)

#### Request example

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Model Studio Batch API - Query task list
 * 
 * If no environment variable is set, use API_KEY = "sk-xxx" (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 * Note: When switching regions, also update the API key accordingly.
 */
public class BatchAPIListBatches {
    
    // Singapore region configuration
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // For Beijing, use: private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"; and update the API key.
    
    private static String API_KEY;
    
    public static void main(String[] args) throws Exception {
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.err.println("Or set in code: API_KEY = \"sk-xxx\";");
            System.exit(1);
        }
        
        String response = sendRequest("GET", "/batches?after=batch_xxx&limit=2&ds_name=Batch&input_file_ids=file-batch-xxx,file-batch-xxx&status=completed,failed&create_after=20250303000000&create_before=20250320000000", null);
// Parse JSON to get task list
        System.out.println(response);
    }
    
    // === Utility methods ===
    
    private static String sendRequest(String method, String path, String jsonBody) throws Exception {
        URL url = new URL(BASE_URL + path);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        
        if (jsonBody != null) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonBody.getBytes("UTF-8"));
            }
        }
        
        return readResponse(conn);
    }
    
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }
    
    private static String parseField(String json, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }
}
```

## curl (HTTP)

#### Request example

```
# ======= Important =======
# API keys differ between Singapore and Beijing regions.
# The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/batches?xxx same as below xxx
# === Delete this comment before execution ===
curl --request GET  'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/batches?after=batch_xxx&limit=2&ds_name=Batch&input_file_ids=file-batch-xxx,file-batch-xxx&status=completed,failed&create_after=20250303000000&create_before=20250320000000' \
 -H "Authorization: Bearer $DASHSCOPE_API_KEY"
```

> Replace `batch_id` in `after=batch_id` with the actual value. Set the `limit` parameter to the number of tasks to return. Enter a partial task name for `ds_name`. Enter one or more file IDs for input\_file\_ids. Enter one or more batch task statuses for `status`. Enter the time points for `create_after` and `create_before`.

#### **Input parameters**

**Field**

**Type**

**Location**

**Required**

**Description**

after

String

Query

No

Cursor for pagination. The value is the last task ID from the previous page.

limit

Integer

Query

No

Number of tasks to return per page, range \[1, 100\], default 20.

ds\_name

String

Query

No

Fuzzy match by task name.

input\_file\_ids

String

Query

No

Filter by file ID. Multiple IDs separated by commas, up to 20.

status

String

Query

No

Filter by task status. Multiple statuses separated by commas.

create\_after

String

Query

No

Filter tasks created after this time point, format: `yyyyMMddHHmmss`.

create\_before

String

Query

No

Filter tasks created before this time point, format: `yyyyMMddHHmmss`.

#### **Response example**

```
{
  "object": "list",
  "data": [
    {
      "id": "batch_xxx",
      "object": "batch",
      "endpoint": "/v1/chat/completions",
      "errors": null,
      "input_file_id": "file-batch-xxx",
      "completion_window": "24h",
      "status": "completed",
      "output_file_id": "file-batch_output-xxx",
      "error_file_id": null,
      "created_at": 1722234109,
      "in_progress_at": 1722234109,
      "expires_at": null,
      "finalizing_at": 1722234165,
      "completed_at": 1722234165,
      "failed_at": null,
      "expired_at": null,
      "cancelling_at": null,
      "cancelled_at": null,
      "request_counts": {
        "total": 100,
        "completed": 95,
        "failed": 5
      },
      "metadata": {}
    },
    { ... }
  ],
  "first_id": "batch_xxx",
  "last_id": "batch_xxx",
  "has_more": true
}
```

#### **Response parameters**

**Field**

**Type**

**Description**

object

String

Type, fixed value list.

data

Array

Batch task object, see response parameters for creating a batch task.

first\_id

String

First batch task ID on the current page.

last\_id

String

Last batch task ID on the current page.

has\_more

Boolean

Indicates whether there is a next page.

#### **Cancel batch task**

Cancel a task that is in progress or queued. After you make a successful call, the task status changes to cancelling and then to cancelled. You are still billed for the parts of the task that are completed before it is fully cancelled.

## OpenAI Python SDK

#### Request example

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    # Note: When switching regions, also update the API key accordingly.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
batch = client.batches.cancel("batch_id")  # Replace batch_id with the batch task ID
print(batch)
```

## OpenAI Node.js SDK

#### Request example

```
/**
 * Model Studio Batch API - Cancel task
 * 
 * If no environment variable is set, use apiKey: 'sk-xxx' (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Install dependencies: npm install openai
 */
const OpenAI = require('openai');

// Singapore region configuration (default)
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// If using the Beijing region, replace the above BASE_URL with:
// const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
// Note: When switching regions, also update the API key accordingly.

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    console.error('Or set in code: const apiKey = "sk-xxx";');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

const batch = await client.batches.cancel('batch_id');
console.log(batch.status); // cancelled
```

## Java (HTTP)

#### Request example

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Model Studio Batch API - Cancel task
 * 
 * If no environment variable is set, use API_KEY = "sk-xxx" (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 * Note: When switching regions, also update the API key accordingly.
 */
public class BatchAPICancelBatch {
    
    // Singapore region configuration
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // For Beijing, use: private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"; and update the API key.
    
    private static String API_KEY;
    
    public static void main(String[] args) throws Exception {
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.err.println("Or set in code: API_KEY = \"sk-xxx\";");
            System.exit(1);
        }
        
        String response = sendRequest("POST", "/batches/batch_id/cancel", null);
        System.out.println(response);
    }
    
    // === Utility methods ===
    
    private static String sendRequest(String method, String path, String jsonBody) throws Exception {
        URL url = new URL(BASE_URL + path);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        
        if (jsonBody != null) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonBody.getBytes("UTF-8"));
            }
        }
        
        return readResponse(conn);
    }
    
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }
    
    private static String parseField(String json, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }
}
```

## curl (HTTP)

#### Request example

```
# ======= Important =======
# API keys differ between Singapore and Beijing regions.
# The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/batches/batch_id/cancel
# === Delete this comment before execution ===
curl --request POST 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/batches/batch_id/cancel' \
 -H "Authorization: Bearer $DASHSCOPE_API_KEY"
```

> Replace `batch_id` with the actual value.

#### **Response example**

After you successfully cancel a task, the API returns detailed information about the batch task. The following is a response example for a task with a cancelling status:

```
{
  "id": "batch_abc123",
  "object": "batch",
  "endpoint": "/v1/chat/completions",
  "errors": null,
  "input_file_id": "file-abc123",
  "completion_window": "24h",
  "status": "cancelling",
  "output_file_id": null,
  "error_file_id": null,
  "created_at": 1711402400,
  "in_progress_at": 1711402450,
  "expires_at": 1711488800,
  "finalizing_at": null,
  "completed_at": null,
  "failed_at": null,
  "expired_at": null,
  "cancelling_at": 1711403000,
  "cancelled_at": null,
  "request_counts": {
    "total": 100,
    "completed": 23,
    "failed": 1
  },
  "metadata": null
}
```

> After you cancel a task, the status first changes to `cancelling` while the system waits for currently executing requests to complete. The status eventually changes to `cancelled`. Results from completed requests are still saved in the output file.

### **4\. Download Batch result file**

After a task is complete, result files (output\_file\_id) and error files (error\_file\_id) may be generated. Retrieve both types of files using the same file download API.

Only files whose `file_id` starts with `file-batch_output` can be downloaded.

## OpenAI Python SDK

Use the `content` method to retrieve the content of the batch task result file and use the `write_to_file` method to save the content to a local file.

#### Request example

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Singapore region's base_url. For Beijing, use: https://dashscope.aliyuncs.com/compatible-mode/v1 and update the API key.
    # Note: When switching regions, also update the API key accordingly.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
content = client.files.content(file_id="file-batch_output-xxx")
# Print result file content
print(content.text)
# Save result file locally
content.write_to_file("result.jsonl")
```

#### Response example

```
{"id":"c308ef7f-xxx","custom_id":"1","response":{"status_code":200,"request_id":"c308ef7f-0824-9c46-96eb-73566f062426","body":{"created":1742303743,"usage":{"completion_tokens":35,"prompt_tokens":26,"total_tokens":61},"model":"qwen-plus","id":"chatcmpl-c308ef7f-0824-9c46-96eb-73566f062426","choices":[{"finish_reason":"stop","index":0,"message":{"content":"Hello! Of course. Whether you need information, learning materials, problem-solving methods, or any other help, I am here to support you. Please tell me what you need help with."}}],"object":"chat.completion"}},"error":null}
{"id":"73291560-xxx","custom_id":"2","response":{"status_code":200,"request_id":"73291560-7616-97bf-87f2-7d747bbe84fd","body":{"created":1742303743,"usage":{"completion_tokens":7,"prompt_tokens":26,"total_tokens":33},"model":"qwen-plus","id":"chatcmpl-73291560-7616-97bf-87f2-7d747bbe84fd","choices":[{"finish_reason":"stop","index":0,"message":{"content":"2+2 equals 4."}}],"object":"chat.completion"}},"error":null}
```

## OpenAI Node.js SDK

Use the `content` method to retrieve the content of the batch task result file.

#### Request example

```
/**
 * Model Studio Batch API - Download result file
 * 
 * If no environment variable is set, use apiKey: 'sk-xxx' (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Install dependencies: npm install openai
 */
const OpenAI = require('openai');
const fs = require('fs');

// Singapore region configuration (default)
const BASE_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
// If using the Beijing region, replace the above BASE_URL with:
// const BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
// Note: When switching regions, also update the API key accordingly.

const apiKey = process.env.DASHSCOPE_API_KEY;
if (!apiKey) {
    console.error('Error: Please set the environment variable DASHSCOPE_API_KEY');
    console.error('Or set in code: const apiKey = "sk-xxx";');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: BASE_URL
});

// Download result file
const content = await client.files.content('file-batch_output-xxx');
const text = await content.text();
console.log(text);

// Save to local file
fs.writeFileSync('result.jsonl', text);
console.log('Results saved to result.jsonl');
```

## Java (HTTP)

Use a GET request to the `/files/{file_id}/content` endpoint to retrieve the file content.

#### Request example

```
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Model Studio Batch API - Download result file
 * 
 * If no environment variable is set, use API_KEY = "sk-xxx" (not in production - risk of leaks).
 * API keys differ between regions.
 * 
 * Region configuration:
 * - Beijing region: https://dashscope.aliyuncs.com/compatible-mode/v1
 * - Singapore region: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
 * Note: When switching regions, also update the API key accordingly.
 */
public class BatchAPIDownloadFile {
    
    // Singapore region configuration
    private static final String BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
    // For Beijing, use: private static final String BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"; and update the API key.
    
    private static String API_KEY;
    
    public static void main(String[] args) throws Exception {
        API_KEY = System.getenv("DASHSCOPE_API_KEY");
        if (API_KEY == null || API_KEY.isEmpty()) {
            System.err.println("Error: Please set the environment variable DASHSCOPE_API_KEY");
            System.err.println("Or set in code: API_KEY = \"sk-xxx\";");
            System.exit(1);
        }

// Download result file
String content = sendRequest("GET", "/files/file-batch_output-xxx/content", null);
System.out.println(content);

// Save to local file
        Files.write(Paths.get("result.jsonl"), content.getBytes());
        System.out.println("Results saved to result.jsonl");
    }
    
    // === Utility methods ===
    
    private static String sendRequest(String method, String path, String jsonBody) throws Exception {
        URL url = new URL(BASE_URL + path);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setRequestProperty("Authorization", "Bearer " + API_KEY);
        
        if (jsonBody != null) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonBody.getBytes("UTF-8"));
            }
        }
        
        return readResponse(conn);
    }
    
    private static String readResponse(HttpURLConnection conn) throws Exception {
        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
            return scanner.hasNext() ? scanner.next() : "";
        }
    }
    
    private static String parseField(String json, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }
}
```

## curl (HTTP)

You can download the batch task result file using the GET method and specifying the `file_id` in the URL.

#### Request example

```
# ======= Important =======
# API keys differ between Singapore and Beijing regions.
# The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/files/file-batch_output-xxx/content
# === Delete this comment before execution ===
curl -X GET https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files/file-batch_output-xxx/content \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" > result.jsonl
```

#### **Response example**

The following is an example of a single response result:

```
{
    "id": "c308ef7f-xxx",
    "custom_id": "1",
    "response": {
        "status_code": 200,
        "request_id": "c308ef7f-0824-9c46-96eb-73566f062426",
        "body": {
            "created": 1742303743,
            "usage": {
                "completion_tokens": 35,
                "prompt_tokens": 26,
                "total_tokens": 61
            },
            "model": "qwen-plus",
            "id": "chatcmpl-c308ef7f-0824-9c46-96eb-73566f062426",
            "choices": [
                {
                    "finish_reason": "stop",
                    "index": 0,
                    "message": {
                        "content": "Hello! Of course. Whether you need information, learning materials, problem-solving methods, or any other help, I am here to support you. Please tell me what you need help with."
                    }
                }
            ],
            "object": "chat.completion"
        }
    },
    "error": null
}
```

#### **Response parameters**

**Field**

**Type**

**Description**

id

String

Request ID.

custom\_id

String

User-defined ID.

response

Object

Request result.

status\_code

Integer

Status code. 200 indicates a successful request.

request\_id

String

Unique ID generated by the server for this request.

completion\_tokens

Integer

Number of tokens consumed by the model-generated reply (completion).

prompt\_tokens

Integer

Number of tokens consumed by the input content (`prompt`) sent to the model.

total\_tokens

Integer

Total number of tokens consumed by this call.

model

String

Name of the model used in this call.

error

Object

The error object. It is `null` on success. On failure, it contains the error code and detailed message.

error.code

String

Error line information and reason. Refer to [Error codes](#97e145aeabbwf) for troubleshooting.

error.message

String

Error message.

## **Advanced features**

### **Set completion notifications**

For long-running tasks, use asynchronous notifications instead of polling to save resources.

-   **Callback**: Specify a publicly accessible URL when creating the task.
    
-   **EventBridge message queue**: Deeply integrated with the Alibaba Cloud ecosystem and requires no public IP.
    

#### **Method 1: Callback**

When creating a task, specify a publicly accessible URL via `metadata`. After task completion, the system sends a POST request containing task status to the specified URL:

## OpenAI Python SDK

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable is set, use api_key="sk-xxx" (not in production - risk of leaks).
    # API keys differ between regions.
    api_key=os.getenv("DASHSCOPE_API_KEY"), 
    # Beijing region's base_url. For Singapore, use: https://dashscope-intl.aliyuncs.com/compatible-mode/v1 and update the API key.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

batch = client.batches.create(
    input_file_id="file-batch-xxx",  # The ID returned after uploading the file
    endpoint="/v1/chat/completions",  # For text embedding models, enter "/v1/embeddings". For the test model batch-test-model, enter /v1/chat/ds-test. For other models, enter /v1/chat/completions.
    completion_window="24h", 
    metadata={
            "ds_batch_finish_callback": "https://xxx/xxx"
          }
)
print(batch)
```

## curl (HTTP)

#### **Request example**

```
curl -X POST --location "https://dashscope.aliyuncs.com/compatible-mode/v1/batches" \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
          "input_file_id": "file-batch-xxxxx",
          "endpoint": "/v1/chat/completions",
          "completion_window": "24h",
          "metadata": {
            "ds_batch_finish_callback": "https://xxx/xxx"
          }
        }'
```

#### **Method 2: EventBridge message queue**

This method requires no public IP and suits complex scenarios needing integration with services like Function Compute or RocketMQ.

When a batch task completes, the system sends an event to Alibaba Cloud EventBridge. Configure EventBridge rules to listen for this event and route it to a specified target.

-   Event source (Source): `acs.dashscope`
    
-   Event type (Type): `dashscope:System:BatchTaskFinish`
    

Reference: [Route events to ApsaraMQ for RocketMQ](/help/en/eventbridge/user-guide/route-events-to-message-queue-for-apache-rocketmq).

## **Going live**

-   **File management**
    
    -   Periodically delete unnecessary files using the [File delete API](/help/en/model-studio/openai-file-interface#3457ce1d7ezr3) to avoid storage limits (10,000 files / 100 GB).
        
    -   Store large files in OSS instead.
        
-   **Task monitoring**
    
    -   Prefer using Callback or EventBridge asynchronous notifications.
        
    -   If polling is required, set the interval to more than 1 minute and use an exponential backoff strategy.
        
-   **Error handling**
    
    -   Implement exception handling covering network errors, API errors, and other potential issues.
        
    -   Download and analyze the error details in `error_file_id`.
        
    -   For common error codes, see [Error messages](/help/en/model-studio/error-code) for solutions.
        
-   **Cost optimization**
    
    -   Combine small tasks into a single batch.
        
    -   Set `completion_window` appropriately to provide greater scheduling flexibility.
        

### **Utility tools**

#### **CSV to JSONL**

If your original data is stored in a CSV file (with the first column as ID and the second column as content), use the following script to quickly generate a JSONL batch file.

> To adjust the file path or other parameters, modify the code as needed.

```
import csv
import json
def messages_builder_example(content):
    messages = [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": content}]
    return messages

with open("input_demo.csv", "r") as fin:
    with open("input_demo.jsonl", 'w', encoding='utf-8') as fout:
        csvreader = csv.reader(fin)
        for row in csvreader:
            body = {"model": "qwen-turbo", "messages": messages_builder_example(row[1])}
            # When calling a text embedding model, set the url value to "/v1/embeddings". For other models, set it to /v1/chat/completions.
            request = {"custom_id": row[0], "method": "POST", "url": "/v1/chat/completions", "body": body}
            fout.write(json.dumps(request, separators=(',', ':'), ensure_ascii=False) + "\n")
```

#### JSONL results to CSV

Use the following script to parse `result.jsonl` into `result.csv` that is easy to analyze in Excel.

> To adjust the file path or other parameters, modify the code as needed.

```
import json
import csv
columns = ["custom_id",
           "model",
           "request_id",
           "status_code",
           "error_code",
           "error_message",
           "created",
           "content",
           "usage"]

def dict_get_string(dict_obj, path):
    obj = dict_obj
    try:
        for element in path:
            obj = obj[element]
        return obj
    except:
        return None

with open("result.jsonl", "r") as fin:
    with open("result.csv", 'w', encoding='utf-8') as fout:
        rows = [columns]
        for line in fin:
            request_result = json.loads(line)
            row = [dict_get_string(request_result, ["custom_id"]),
                   dict_get_string(request_result, ["response", "body", "model"]),
                   dict_get_string(request_result, ["response", "request_id"]),
                   dict_get_string(request_result, ["response", "status_code"]),
                   dict_get_string(request_result, ["error", "error_code"]),
                   dict_get_string(request_result, ["error", "error_message"]),
                   dict_get_string(request_result, ["response", "body", "created"]),
                   dict_get_string(request_result, ["response", "body", "choices", 0, "message", "content"]),
                   dict_get_string(request_result, ["response", "body", "usage"])]
            rows.append(row)
        writer = csv.writer(fout)
        writer.writerows(rows)
```

**Solve garbled text in Excel**

-   Use a text editor (such as Sublime) to convert the CSV file's encoding to GBK, then open it in Excel.
    
-   Alternatively, create a new Excel file and specify the correct encoding format (UTF-8) when importing the data.
    

## **Rate limits**

**Interface**

**Rate limit (per Alibaba Cloud account)**

Create task

1,000 calls/minute, up to 1,000 concurrent tasks

Query task

1,000 calls/minute

Query task list

100 calls/minute

Cancel task

1,000 calls/minute

## **Billing**

-   **Unit price:** The input and output tokens for all successful requests are charged at **50%** of the real-time inference price for the corresponding model. For more information, see [Model list](/help/en/model-studio/models#9f8890ce29g5u).
    
-   **Billing scope:**
    
    -   Only requests successfully executed within a task are billed.
        
    -   Requests that fail because of file parsing errors, task execution failures, or row-level errors **do not incur charges**.
        
    -   For canceled tasks, requests successfully completed before the cancellation are still billed as normal.
        

**Note**

-   Batch inference is a separate billing item. It is not eligible for discounts, such as [subscription](https://common-buy-intl.alibabacloud.com/?commodityCode=sfm_llminference_spn_intl) (Savings Plan) or [free quotas for new users](/help/en/model-studio/new-free-quota). It also does not support features such as [context cache](/help/en/model-studio/context-cache).
    
-   Some models, such as qwen3.5-plus and qwen3.5-flash, have thinking mode enabled by default. This mode generates additional thinking tokens, which are billed at the output token price and increase costs. To control costs, set the \`enable\_thinking\` parameter based on task complexity. For more information, see [Deep thinking](/help/en/model-studio/deep-thinking).
    

## Error codes

If a call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for a solution.

## **FAQ**

1.  **How do I choose between the Batch Chat API and the Batch File API?**
    
    Use the Batch File API when you need to process a single large file with many requests asynchronously. Use the Batch Chat API when business logic requires submitting many independent conversation requests synchronously with high concurrency.
    
2.  **How is the Batch File API billed? Do I need to purchase a separate package?**
    
    Batch uses pay-as-you-go billing based on tokens in successful requests. No package purchase required.
    
3.  **Are submitted batch files executed in order?**
    
    No. The system uses dynamic scheduling based on compute load and doesn't guarantee order. Tasks may be delayed when resources are constrained.
    
4.  **How long does it take to complete a submitted batch file?**
    
    Execution time depends on system resources and task scale. If a task does not complete within the completion\_window, it expires. Unprocessed requests in expired tasks are not executed and incur no charges.
    
    **Scenario recommendations:** Use real-time calls for scenarios that require strict real-time model inference. Use batch calls for large-scale data processing scenarios that can tolerate some delay.
