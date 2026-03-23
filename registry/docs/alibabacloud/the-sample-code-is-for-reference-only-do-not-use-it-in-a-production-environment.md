Alibaba Cloud Model Studio provides open API operations for its knowledge base feature. This lets you quickly integrate knowledge bases with your existing business systems, automate operations, and handle complex retrieval needs.

## **Prerequisites**

1.  Before a [RAM user](/help/en/model-studio/application-permission-management-overview#24ca2dad7djzs) can operate on knowledge bases using Alibaba Cloud API operations, the user must obtain [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) and [join a workspace](/help/en/model-studio/grant-the-business-space-permission-to-ram-users). This is not required for an Alibaba Cloud account.
    
    > A RAM user can manage knowledge bases only in the workspaces that the user has joined. An Alibaba Cloud account can manage knowledge bases in all workspaces.
    
2.  To call knowledge base-related Alibaba Cloud API operations, you must install the latest version of [the Alibaba Cloud Model Studio SDK](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29&language=python-tea&tab=primer-doc). For installation instructions, see [the Alibaba Cloud SDK Development Reference](/help/en/sdk/developer-reference/).
    
    > If the SDK does not meet your needs, you can use [the signature mechanism](/help/en/sdk/product-overview/v3-request-structure-and-signature) to make HTTP requests to the relevant knowledge base API operations. Note that this method is more complex. For more information about specific integration methods, see [API Overview](/help/en/model-studio/api-bailian-2023-12-29-overview).
    
3.  You must [obtain an AccessKey and an AccessKey secret](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems) and [a workspace ID](/help/en/model-studio/use-workspace#3d584de2733bp). To run the sample code, you must configure them as system environment variables. The following example uses the Linux operating system:
    
    > If you use an Integrated Development Environment (IDE) or other developer plugins, you must configure the ALIBABA\_CLOUD\_ACCESS\_KEY\_ID, ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET, and WORKSPACE\_ID variables in your development environment.
    
    ```
    export ALIBABA_CLOUD_ACCESS_KEY_ID='Your Alibaba Cloud AccessKey ID'
    export ALIBABA_CLOUD_ACCESS_KEY_SECRET='Your Alibaba Cloud AccessKey secret'
    export WORKSPACE_ID='Your Alibaba Cloud Model Studio workspace ID'
    ```
    
4.  Prepare the sample knowledge document [Bailian Phones Specifications.docx](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20251104/hzzpgq/Bailian+Phones+Specifications.docx) to create a knowledge base.
    

## **Complete sample code**

## Create a knowledge base

**Important**

-   Before you call this example, you must complete all the [prerequisites](#a4a15bd543can). A RAM user must be granted the [AliyunBailianDataFullAccess policy](/help/en/model-studio/grant-data-access-permission-to-ram-user) before calling this example.
    
-   If you use an IDE or other development plugins, you must configure the `ALIBABA_CLOUD_ACCESS_KEY_ID`, `ALIBABA_CLOUD_ACCESS_KEY_SECRET`, and `WORKSPACE_ID` variables in your development environment.
    

## Python

```
# The sample code is for reference only. Do not use it in a production environment.
import hashlib
import os
import time

import requests
from alibabacloud_bailian20231229 import models as bailian_20231229_models
from alibabacloud_bailian20231229.client import Client as bailian20231229Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_tea_util import models as util_models


def check_environment_variables():
    """Check for and prompt to set the required environment variables."""
    required_vars = {
        'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Alibaba Cloud AccessKey ID',
        'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Alibaba Cloud AccessKey secret',
        'WORKSPACE_ID': 'Alibaba Cloud Model Studio workspace ID'
    }
    missing_vars = []
    for var, description in required_vars.items():
        if not os.environ.get(var):
            missing_vars.append(var)
            print(f"Error: Set the {var} environment variable ({description}).")
    
    return len(missing_vars) == 0


def calculate_md5(file_path: str) -> str:
    """
    Calculates the MD5 hash of a file.

    Parameters:
        file_path (str): The local path of the file.

    Returns:
        str: The MD5 hash of the file.
    """
    md5_hash = hashlib.md5()

    # Read the file in binary mode.
    with open(file_path, "rb") as f:
        # Read the file in chunks to avoid high memory usage for large files.
        for chunk in iter(lambda: f.read(4096), b""):
            md5_hash.update(chunk)

    return md5_hash.hexdigest()


def get_file_size(file_path: str) -> int:
    """
    Gets the file size in bytes.
    Parameters:
        file_path (str): The local path of the file.
    Returns:
        int: The file size in bytes.
    """
    return os.path.getsize(file_path)


# Initialize the client.
def create_client() -> bailian20231229Client:
    """
    Creates and configures a client.

    Returns:
        bailian20231229Client: The configured client.
    """
    config = open_api_models.Config(
        access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
    )
    # The following endpoint is a public endpoint. You can change the endpoint as needed.
    config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com'
    return bailian20231229Client(config)


# Request a file upload lease.
def apply_lease(client, category_id, file_name, file_md5, file_size, workspace_id):
    """
    Requests a file upload lease from the Model Studio service.

    Parameters:
        client (bailian20231229Client): The client.
        category_id (str): The category ID.
        file_name (str): The file name.
        file_md5 (str): The MD5 hash of the file.
        file_size (int): The file size in bytes.
        workspace_id (str): The workspace ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    request = bailian_20231229_models.ApplyFileUploadLeaseRequest(
        file_name=file_name,
        md_5=file_md5,
        size_in_bytes=file_size,
    )
    runtime = util_models.RuntimeOptions()
    return client.apply_file_upload_lease_with_options(category_id, workspace_id, request, headers, runtime)


# Upload the file to temporary storage.
def upload_file(pre_signed_url, headers, file_path):
    """
    Uploads the file to the Model Studio service.
    Parameters:
        pre_signed_url (str): The URL in the upload lease.
        headers (dict): The request headers for the upload.
        file_path (str): The local path of the file.
    """
    with open(file_path, 'rb') as f:
        file_content = f.read()
    upload_headers = {
        "X-bailian-extra": headers["X-bailian-extra"],
        "Content-Type": headers["Content-Type"]
    }
    response = requests.put(pre_signed_url, data=file_content, headers=upload_headers)
    response.raise_for_status()


# Add the file to a category.
def add_file(client: bailian20231229Client, lease_id: str, parser: str, category_id: str, workspace_id: str):
    """
    Adds the file to a specified category in the Model Studio service.

    Parameters:
        client (bailian20231229Client): The client.
        lease_id (str): The lease ID.
        parser (str): The parser for the file.
        category_id (str): The category ID.
        workspace_id (str): The workspace ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    request = bailian_20231229_models.AddFileRequest(
        lease_id=lease_id,
        parser=parser,
        category_id=category_id,
    )
    runtime = util_models.RuntimeOptions()
    return client.add_file_with_options(workspace_id, request, headers, runtime)


# Query the parsing status of the file.
def describe_file(client, workspace_id, file_id):
    """
    Gets the basic information of the file.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        file_id (str): The file ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    runtime = util_models.RuntimeOptions()
    return client.describe_file_with_options(workspace_id, file_id, headers, runtime)


# Initialize the knowledge base (index).
def create_index(client, workspace_id, file_id, name, structure_type, source_type, sink_type):
    """
    Creates a knowledge base in the Model Studio service (initialization).

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        file_id (str): The file ID.
        name (str): The knowledge base name.
        structure_type (str): The data type of the knowledge base.
        source_type (str): The data type of the application data. Categories and files are supported.
        sink_type (str): The vector storage class of the knowledge base.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    request = bailian_20231229_models.CreateIndexRequest(
        structure_type=structure_type,
        name=name,
        source_type=source_type,
        sink_type=sink_type,
        document_ids=[file_id]
    )
    runtime = util_models.RuntimeOptions()
    return client.create_index_with_options(workspace_id, request, headers, runtime)


# Submit an indexing task.
def submit_index(client, workspace_id, index_id):
    """
    Submits an indexing task to the Model Studio service.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    submit_index_job_request = bailian_20231229_models.SubmitIndexJobRequest(
        index_id=index_id
    )
    runtime = util_models.RuntimeOptions()
    return client.submit_index_job_with_options(workspace_id, submit_index_job_request, headers, runtime)


# Wait for the indexing task to complete.
def get_index_job_status(client, workspace_id, job_id, index_id):
    """
    Queries the status of an indexing task.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        job_id (str): The task ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    get_index_job_status_request = bailian_20231229_models.GetIndexJobStatusRequest(
        index_id=index_id,
        job_id=job_id
    )
    runtime = util_models.RuntimeOptions()
    return client.get_index_job_status_with_options(workspace_id, get_index_job_status_request, headers, runtime)


def create_knowledge_base(
        file_path: str,
        workspace_id: str,
        name: str
):
    """
    Creates a knowledge base using the Model Studio service.
    Parameters:
        file_path (str): The local path of the file.
        workspace_id (str): The workspace ID.
        name (str): The knowledge base name.
    Returns:
        str or None: The knowledge base ID if the call is successful. Otherwise, None is returned.
    """
    # Set default values.
    category_id = 'default'
    parser = 'DASHSCOPE_DOCMIND'
    source_type = 'DATA_CENTER_FILE'
    structure_type = 'unstructured'
    sink_type = 'DEFAULT'
    try:
        # Step 1: Create the client.
        print("Step 1: Create the client.")
        client = create_client()
        # Step 2: Prepare file information.
        print("Step 2: Prepare file information.")
        file_name = os.path.basename(file_path)
        file_md5 = calculate_md5(file_path)
        file_size = get_file_size(file_path)
        # Step 3: Request an upload lease.
        print("Step 3: Request an upload lease from Alibaba Cloud Model Studio.")
        lease_response = apply_lease(client, category_id, file_name, file_md5, file_size, workspace_id)
        lease_id = lease_response.body.data.file_upload_lease_id
        upload_url = lease_response.body.data.param.url
        upload_headers = lease_response.body.data.param.headers
        # Step 4: Upload the file.
        print("Step 4: Upload the file to Alibaba Cloud Model Studio.")
        upload_file(upload_url, upload_headers, file_path)
        # Step 5: Add the file to the server.
        print("Step 5: Add the file to the Alibaba Cloud Model Studio server.")
        add_response = add_file(client, lease_id, parser, category_id, workspace_id)
        file_id = add_response.body.data.file_id
        # Step 6: Check the file status.
        print("Step 6: Check the file status in Alibaba Cloud Model Studio.")
        while True:
            describe_response = describe_file(client, workspace_id, file_id)
            status = describe_response.body.data.status
            print(f"Current file status: {status}")
            if status == 'INIT':
                print("The file is pending parsing. Wait a moment...")
            elif status == 'PARSING':
                print("The file is being parsed. Wait a moment...")
            elif status == 'PARSE_SUCCESS':
                print("The file is parsed.")
                break
            else:
                print(f"Unknown file status: {status}. Contact technical support.")
                return None
            time.sleep(5)
        # Step 7: Initialize the knowledge base.
        print("Step 7: Create the knowledge base in Alibaba Cloud Model Studio.")
        index_response = create_index(client, workspace_id, file_id, name, structure_type, source_type, sink_type)
        index_id = index_response.body.data.id
        # Step 8: Submit an indexing task.
        print("Step 8: Submit an indexing task to Alibaba Cloud Model Studio.")
        submit_response = submit_index(client, workspace_id, index_id)
        job_id = submit_response.body.data.id
        # Step 9: Get the status of the indexing task.
        print("Step 9: Get the status of the indexing task from Alibaba Cloud Model Studio.")
        while True:
            get_index_job_status_response = get_index_job_status(client, workspace_id, job_id, index_id)
            status = get_index_job_status_response.body.data.status
            print(f"Current indexing task status: {status}")
            if status == 'COMPLETED':
                break
            time.sleep(5)
        print("The Alibaba Cloud Model Studio knowledge base is created.")
        return index_id
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def main():
    if not check_environment_variables():
        print("Environment variable check failed.")
        return
    file_path = input("Enter the local path of the file to upload. Example in Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx:")
    kb_name = input("Enter a name for your knowledge base:")
    workspace_id = os.environ.get('WORKSPACE_ID')
    create_knowledge_base(file_path, workspace_id, kb_name)


if __name__ == '__main__':
    main()
```

## Java

```
// The sample code is for reference only. Do not use it in a production environment.
import com.aliyun.bailian20231229.models.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileInputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.*;
import java.util.concurrent.TimeUnit;

public class KnowledgeBaseCreate {

    /**
     * Checks for and prompts you to set the required environment variables.
     *
     * @return true if all required environment variables are set, false otherwise.
     */
    public static boolean checkEnvironmentVariables() {
        Map<String, String> requiredVars = new HashMap<>();
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_ID", "Alibaba Cloud AccessKey ID");
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Alibaba Cloud AccessKey secret");
        requiredVars.put("WORKSPACE_ID", "Alibaba Cloud Model Studio workspace ID");

        List<String> missingVars = new ArrayList<>();
        for (Map.Entry<String, String> entry : requiredVars.entrySet()) {
            String value = System.getenv(entry.getKey());
            if (value == null || value.isEmpty()) {
                missingVars.add(entry.getKey());
                System.out.println("Error: Set the " + entry.getKey() + " environment variable (" + entry.getValue() + ")");
            }
        }

        return missingVars.isEmpty();
    }

    /**
     * Calculates the MD5 hash of a file.
     *
     * @param filePath The local path of the file.
     * @return The MD5 hash of the file.
     * @throws Exception if an error occurs during calculation.
     */
    public static String calculateMD5(String filePath) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        try (FileInputStream fis = new FileInputStream(filePath)) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                md.update(buffer, 0, bytesRead);
            }
        }
        StringBuilder sb = new StringBuilder();
        for (byte b : md.digest()) {
            sb.append(String.format("%02x", b & 0xff));
        }
        return sb.toString();
    }

    /**
     * Gets the file size in bytes.
     *
     * @param filePath The local path of the file.
     * @return The file size in bytes.
     */
    public static String getFileSize(String filePath) {
        File file = new File(filePath);
        long fileSize = file.length();
        return String.valueOf(fileSize);
    }

    /**
     * Initializes the client.
     *
     * @return The configured client object.
     */
    public static com.aliyun.bailian20231229.Client createClient() throws Exception {
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = "bailian.ap-southeast-1.aliyuncs.com";
        return new com.aliyun.bailian20231229.Client(config);
    }

    /**
     * Requests a file upload lease.
     *
     * @param client The client object.
     * @param categoryId The category ID.
     * @param fileName The file name.
     * @param fileMd5 The MD5 hash of the file.
     * @param fileSize The file size in bytes.
     * @param workspaceId The workspace ID.
     * @return The response object from the Model Studio service.
     */
    public static ApplyFileUploadLeaseResponse applyLease(com.aliyun.bailian20231229.Client client, String categoryId, String fileName, String fileMd5, String fileSize, String workspaceId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.ApplyFileUploadLeaseRequest applyFileUploadLeaseRequest = new com.aliyun.bailian20231229.models.ApplyFileUploadLeaseRequest();
        applyFileUploadLeaseRequest.setFileName(fileName);
        applyFileUploadLeaseRequest.setMd5(fileMd5);
        applyFileUploadLeaseRequest.setSizeInBytes(fileSize);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        ApplyFileUploadLeaseResponse applyFileUploadLeaseResponse = null;
        applyFileUploadLeaseResponse = client.applyFileUploadLeaseWithOptions(categoryId, workspaceId, applyFileUploadLeaseRequest, headers, runtime);
        return applyFileUploadLeaseResponse;
    }

    /**
     * Uploads the file to temporary storage.
     *
     * @param preSignedUrl The URL in the upload lease.
     * @param headers The request headers for the upload.
     * @param filePath The local path of the file.
     * @throws Exception if an error occurs during the upload.
     */
    public static void uploadFile(String preSignedUrl, Map<String, String> headers, String filePath) throws Exception {
        File file = new File(filePath);
        if (!file.exists() || !file.isFile()) {
            throw new IllegalArgumentException("The file does not exist or is not a regular file: " + filePath);
        }

        try (FileInputStream fis = new FileInputStream(file)) {
            URL url = new URL(preSignedUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("PUT");
            conn.setDoOutput(true);

            // Set the upload request headers.
            conn.setRequestProperty("X-bailian-extra", headers.get("X-bailian-extra"));
            conn.setRequestProperty("Content-Type", headers.get("Content-Type"));

            // Read and upload the file in chunks.
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                conn.getOutputStream().write(buffer, 0, bytesRead);
            }

            int responseCode = conn.getResponseCode();
            if (responseCode != 200) {
                throw new RuntimeException("Upload failed: " + responseCode);
            }
        }
    }

    /**
     * Adds the file to a category.
     *
     * @param client The client object.
     * @param leaseId The lease ID.
     * @param parser The parser for the file.
     * @param categoryId The category ID.
     * @param workspaceId The workspace ID.
     * @return The response object from the Model Studio service.
     */
    public static AddFileResponse addFile(com.aliyun.bailian20231229.Client client, String leaseId, String parser, String categoryId, String workspaceId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.AddFileRequest addFileRequest = new com.aliyun.bailian20231229.models.AddFileRequest();
        addFileRequest.setLeaseId(leaseId);
        addFileRequest.setParser(parser);
        addFileRequest.setCategoryId(categoryId);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.addFileWithOptions(workspaceId, addFileRequest, headers, runtime);
    }

    /**
     * Queries the basic information of the file.
     *
     * @param client The client object.
     * @param workspaceId The workspace ID.
     * @param fileId The file ID.
     * @return The response object from the Model Studio service.
     */
    public static DescribeFileResponse describeFile(com.aliyun.bailian20231229.Client client, String workspaceId, String fileId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.describeFileWithOptions(workspaceId, fileId, headers, runtime);
    }

    /**
     * Creates a knowledge base in the Model Studio service (initialization).
     *
     * @param client The client object.
     * @param workspaceId The workspace ID.
     * @param fileId The file ID.
     * @param name The knowledge base name.
     * @param structureType The data type of the knowledge base.
     * @param sourceType The data type of the application data. Categories and files are supported.
     * @param sinkType The vector storage class of the knowledge base.
     * @return The response object from the Model Studio service.
     */
    public static CreateIndexResponse createIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String fileId, String name, String structureType, String sourceType, String sinkType) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.CreateIndexRequest createIndexRequest = new com.aliyun.bailian20231229.models.CreateIndexRequest();
        createIndexRequest.setStructureType(structureType);
        createIndexRequest.setName(name);
        createIndexRequest.setSourceType(sourceType);
        createIndexRequest.setSinkType(sinkType);
        createIndexRequest.setDocumentIds(Collections.singletonList(fileId));
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.createIndexWithOptions(workspaceId, createIndexRequest, headers, runtime);
    }

    /**
     * Submits an indexing task to the Model Studio service.
     *
     * @param client The client object.
     * @param workspaceId The workspace ID.
     * @param indexId The knowledge base ID.
     * @return The response object from the Model Studio service.
     */
    public static SubmitIndexJobResponse submitIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.SubmitIndexJobRequest submitIndexJobRequest = new com.aliyun.bailian20231229.models.SubmitIndexJobRequest();
        submitIndexJobRequest.setIndexId(indexId);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.submitIndexJobWithOptions(workspaceId, submitIndexJobRequest, headers, runtime);
    }

    /**
     * Queries the status of an indexing task.
     *
     * @param client The client object.
     * @param workspaceId The workspace ID.
     * @param jobId The task ID.
     * @param indexId The knowledge base ID.
     * @return The response object from the Model Studio service.
     */
    public static GetIndexJobStatusResponse getIndexJobStatus(com.aliyun.bailian20231229.Client client, String workspaceId, String jobId, String indexId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.GetIndexJobStatusRequest getIndexJobStatusRequest = new com.aliyun.bailian20231229.models.GetIndexJobStatusRequest();
        getIndexJobStatusRequest.setIndexId(indexId);
        getIndexJobStatusRequest.setJobId(jobId);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        GetIndexJobStatusResponse getIndexJobStatusResponse = null;
        getIndexJobStatusResponse = client.getIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
        return getIndexJobStatusResponse;
    }

    /**
     * Creates a knowledge base using the Model Studio service.
     *
     * @param filePath The local path of the file.
     * @param workspaceId The workspace ID.
     * @param name The knowledge base name.
     * @return The knowledge base ID if the call is successful. Otherwise, null is returned.
     */
    public static String createKnowledgeBase(String filePath, String workspaceId, String name) {
        // Set default values.
        String categoryId = "default";
        String parser = "DASHSCOPE_DOCMIND";
        String sourceType = "DATA_CENTER_FILE";
        String structureType = "unstructured";
        String sinkType = "DEFAULT";
        try {
            // Step 1: Initialize the client.
            System.out.println("Step 1: Initialize the client.");
            com.aliyun.bailian20231229.Client client = createClient();

            // Step 2: Prepare file information.
            System.out.println("Step 2: Prepare file information.");
            String fileName = new File(filePath).getName();
            String fileMd5 = calculateMD5(filePath);
            String fileSize = getFileSize(filePath);

            // Step 3: Request an upload lease.
            System.out.println("Step 3: Request an upload lease from Alibaba Cloud Model Studio.");
            ApplyFileUploadLeaseResponse leaseResponse = applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId);
            String leaseId = leaseResponse.getBody().getData().getFileUploadLeaseId();
            String uploadUrl = leaseResponse.getBody().getData().getParam().getUrl();
            Object uploadHeaders = leaseResponse.getBody().getData().getParam().getHeaders();

            // Step 4: Upload the file.
            System.out.println("Step 4: Upload the file to Alibaba Cloud Model Studio.");
            // Install jackson-databind on your own.
            // Convert the uploadHeaders from the previous step to a map (key-value pairs).
            ObjectMapper mapper = new ObjectMapper();
            Map<String, String> uploadHeadersMap = (Map<String, String>) mapper.readValue(mapper.writeValueAsString(uploadHeaders), Map.class);
            uploadFile(uploadUrl, uploadHeadersMap, filePath);

            // Step 5: Add the file to the server.
            System.out.println("Step 5: Add the file to the Alibaba Cloud Model Studio server.");
            AddFileResponse addResponse = addFile(client, leaseId, parser, categoryId, workspaceId);
            String fileId = addResponse.getBody().getData().getFileId();

            // Step 6: Check the file status.
            System.out.println("Step 6: Check the file status in Alibaba Cloud Model Studio.");
            while (true) {
                DescribeFileResponse describeResponse = describeFile(client, workspaceId, fileId);
                String status = describeResponse.getBody().getData().getStatus();
                System.out.println("Current file status: " + status);

                if (status.equals("INIT")) {
                    System.out.println("The file is pending parsing. Wait a moment...");
                } else if (status.equals("PARSING")) {
                    System.out.println("The file is being parsed. Wait a moment...");
                } else if (status.equals("PARSE_SUCCESS")) {
                    System.out.println("The file is parsed.");
                    break;
                } else {
                    System.out.println("Unknown file status: " + status + ". Contact technical support.");
                    return null;
                }
                TimeUnit.SECONDS.sleep(5);
            }

            // Step 7: Initialize the knowledge base.
            System.out.println("Step 7: Create the knowledge base in Alibaba Cloud Model Studio.");
            CreateIndexResponse indexResponse = createIndex(client, workspaceId, fileId, name, structureType, sourceType, sinkType);
            String indexId = indexResponse.getBody().getData().getId();

            // Step 8: Submit an indexing task.
            System.out.println("Step 8: Submit an indexing task to Alibaba Cloud Model Studio.");
            SubmitIndexJobResponse submitResponse = submitIndex(client, workspaceId, indexId);
            String jobId = submitResponse.getBody().getData().getId();

            // Step 9: Get the status of the indexing task.
            System.out.println("Step 9: Get the status of the indexing task from Alibaba Cloud Model Studio.");
            while (true) {
                GetIndexJobStatusResponse getStatusResponse = getIndexJobStatus(client, workspaceId, jobId, indexId);
                String status = getStatusResponse.getBody().getData().getStatus();
                System.out.println("Current indexing task status: " + status);

                if (status.equals("COMPLETED")) {
                    break;
                }
                TimeUnit.SECONDS.sleep(5);
            }

            System.out.println("The Alibaba Cloud Model Studio knowledge base is created.");
            return indexId;

        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    /**
     * The main function.
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (!checkEnvironmentVariables()) {
            return;
        }

        System.out.print("Enter the local path of the file to upload. Example in Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx:");
        String filePath = scanner.nextLine();

        System.out.print("Enter a name for your knowledge base:");
        String kbName = scanner.nextLine();

        String workspaceId = System.getenv("WORKSPACE_ID");
        String result = createKnowledgeBase(filePath, workspaceId, kbName);
        if (result != null) {
            System.out.println("Knowledge base ID: " + result);
        }
    }
}
```

## PHP

```
<?php
// The sample code is for reference only. Do not use it in a production environment.
namespace AlibabaCloud\SDK\Sample;

use AlibabaCloud\Dara\Models\RuntimeOptions;
use AlibabaCloud\SDK\Bailian\V20231229\Bailian;
use AlibabaCloud\SDK\Bailian\V20231229\Models\AddFileRequest;
use \Exception;

use Darabonba\OpenApi\Models\Config;
use AlibabaCloud\SDK\Bailian\V20231229\Models\ApplyFileUploadLeaseRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\CreateIndexRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\SubmitIndexJobRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\GetIndexJobStatusRequest;

class KnowledgeBaseCreate {

    /**
    * Checks for and prompts you to set the required environment variables.
    *
    * @return bool Returns true if all required environment variables are set, false otherwise.
    */
    public static function checkEnvironmentVariables() {
        $requiredVars = [
            'ALIBABA_CLOUD_ACCESS_KEY_ID' => 'Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET' => 'Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID' => 'Alibaba Cloud Model Studio workspace ID'
        ];
        $missingVars = [];
        foreach ($requiredVars as $var => $description) {
            if (!getenv($var)) {
                $missingVars[] = $var;
                echo "Error: Set the $var environment variable ($description)\n";
            }
        }
        return count($missingVars) === 0;
    }

    /**
     * Calculates the MD5 hash of a file.
     *
     * @param string $filePath The local path of the file.
     * @return string The MD5 hash of the file.
     */
    public static function calculateMd5($filePath) {
        $md5Hash = hash_init("md5");
        $handle = fopen($filePath, "rb");
        while (!feof($handle)) {
            $chunk = fread($handle, 4096);
            hash_update($md5Hash, $chunk);
        }
        fclose($handle);
        return hash_final($md5Hash);
    }

    /**
     * Gets the file size in bytes.
     *
     * @param string $filePath The local path of the file.
     * @return int The file size in bytes.
     */
    public static function getFileSize($filePath) {
        return (string)filesize($filePath);
    }

    /**
     * Initializes the client.
     *
     * @return Bailian The configured client object.
     */
    public static function createClient(){
        $config = new Config([
            "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), 
            "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
        ]);
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        $config->endpoint = 'bailian.ap-southeast-1.aliyuncs.com';
        return new Bailian($config);
    }

    /**
     * Requests a file upload lease.
     *
     * @param Bailian $client The client.
     * @param string $categoryId The category ID.
     * @param string $fileName The file name.
     * @param string $fileMd5 The MD5 hash of the file.
     * @param int $fileSize The file size in bytes.
     * @param string $workspaceId The workspace ID.
     * @return ApplyFileUploadLeaseResponse The response from the Model Studio service.
     */
    public static function applyLease($client, $categoryId, $fileName, $fileMd5, $fileSize, $workspaceId) {
        $headers = [];
        $applyFileUploadLeaseRequest = new ApplyFileUploadLeaseRequest([
            "fileName" => $fileName,
            "md5" => $fileMd5,
            "sizeInBytes" => $fileSize
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->applyFileUploadLeaseWithOptions($categoryId, $workspaceId, $applyFileUploadLeaseRequest, $headers, $runtime);
    }

    /**
     * Uploads the file to temporary storage.
    *
    * @param string $preSignedUrl The URL in the upload lease.
    * @param array $headers The request headers for the upload.
    * @param string $filePath The local path of the file.
    */
    public static function uploadFile($preSignedUrl, $headers, $filePath) {
        $fileContent = file_get_contents($filePath);
        // Set the upload request headers.
        $uploadHeaders = [
            "X-bailian-extra" => $headers["X-bailian-extra"],
            "Content-Type" => $headers["Content-Type"]
        ];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $preSignedUrl);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fileContent);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array_map(function($key, $value) {
            return "$key: $value";
        }, array_keys($uploadHeaders), $uploadHeaders));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($httpCode != 200) {
            throw new Exception("Upload failed: " . curl_error($ch));
        }
        curl_close($ch);
    }

    /**
     * Adds the file to a category.
     *
     * @param Bailian $client The client.
     * @param string $leaseId The lease ID.
     * @param string $parser The parser for the file.
     * @param string $categoryId The category ID.
     * @param string $workspaceId The workspace ID.
     * @return AddFileResponse The response from the Model Studio service.
     */
    public static function addFile($client, $leaseId, $parser, $categoryId, $workspaceId) {
        $headers = [];
        $addFileRequest = new AddFileRequest([
            "leaseId" => $leaseId,
            "parser" => $parser,
            "categoryId" => $categoryId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->addFileWithOptions($workspaceId, $addFileRequest, $headers, $runtime);
    }

    /**
     * Queries the basic information of the file.
     *
     * @param Bailian $client The client.
     * @param string $workspaceId The workspace ID.
     * @param string $fileId The file ID.
     * @return DescribeFileResponse The response from the Model Studio service.
     */
    public static function describeFile($client, $workspaceId, $fileId) {
        $headers = [];
        $runtime = new RuntimeOptions([]);
        return $client->describeFileWithOptions($workspaceId, $fileId, $headers, $runtime);
    }

    /**
     * Creates a knowledge base in the Model Studio service (initialization).
     *
     * @param Bailian $client The client.
     * @param string $workspaceId The workspace ID.
     * @param string $fileId The file ID.
     * @param string $name The knowledge base name.
     * @param string $structureType The data type of the knowledge base.
     * @param string $sourceType The data type of the application data. Categories and files are supported.
     * @param string $sinkType The vector storage class of the knowledge base.
     * @return CreateIndexResponse The response from the Model Studio service.
     */
    public static function createIndex($client, $workspaceId, $fileId, $name, $structureType, $sourceType, $sinkType) {
        $headers = [];
        $createIndexRequest = new CreateIndexRequest([
            "structureType" => $structureType,
            "name" => $name,
            "sourceType" => $sourceType,
            "documentIds" => [
                $fileId
            ],
            "sinkType" => $sinkType
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->createIndexWithOptions($workspaceId, $createIndexRequest, $headers, $runtime);
    }

    /**
     * Submits an indexing task to the Model Studio service.
     *
     * @param Bailian $client The client.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @return SubmitIndexJobResponse The response from the Model Studio service.
     */
    public static function submitIndex($client, $workspaceId, $indexId) {
        $headers = [];
        $submitIndexJobRequest = new SubmitIndexJobRequest([
            'indexId' => $indexId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->submitIndexJobWithOptions($workspaceId, $submitIndexJobRequest, $headers, $runtime);
    }

    /**
     * Queries the status of an indexing task.
     *
     * @param Bailian $client The client.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @param string $jobId The task ID.
     * @return GetIndexJobStatusResponse The response from the Model Studio service.
     */
    public static function getIndexJobStatus($client, $workspaceId, $jobId, $indexId) {
        $headers = [];
        $getIndexJobStatusRequest = new GetIndexJobStatusRequest([
            'indexId' => $indexId,
            'jobId' => $jobId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->getIndexJobStatusWithOptions($workspaceId, $getIndexJobStatusRequest, $headers, $runtime);
    }

    /**
     * Creates a knowledge base using the Model Studio service.
     *
     * @param string $filePath The local path of the file.
     * @param string $workspaceId The workspace ID.
     * @param string $name The knowledge base name.
     * @return string|null The knowledge base ID if the call is successful. Otherwise, null is returned.
     */
    public static function createKnowledgeBase($filePath, $workspaceId, $name) {
        // Set default values.
        $categoryId = 'default';
        $parser = 'DASHSCOPE_DOCMIND';
        $sourceType = 'DATA_CENTER_FILE';
        $structureType = 'unstructured';
        $sinkType = 'DEFAULT';
        try {
            // Step 1: Initialize the client.
            echo "Step 1: Initialize the client.\n";
            $client = self::createClient();

            // Step 2: Prepare file information.
            echo "Step 2: Prepare file information.\n";
            $fileName = basename($filePath);
            echo("this is filename : $fileName");
            $fileMd5 = self::calculateMd5($filePath);
            $fileSize = self::getFileSize($filePath);

            // Step 3: Request an upload lease.
            echo "Step 3: Request an upload lease from Alibaba Cloud Model Studio.\n";
            $leaseResponse = self::applyLease($client, $categoryId, $fileName, $fileMd5, $fileSize, $workspaceId);
            $leaseId = $leaseResponse->body->data->fileUploadLeaseId;
            $uploadUrl = $leaseResponse->body->data->param->url;
            $uploadHeaders = $leaseResponse->body->data->param->headers;
            $uploadHeadersMap = json_decode(json_encode($uploadHeaders), true);

            // Step 4: Upload the file.
            echo "Step 4: Upload the file to Alibaba Cloud Model Studio.\n";
            self::uploadFile($uploadUrl, $uploadHeadersMap, $filePath);

            // Step 5: Add the file to the server.
            echo "Step 5: Add the file to the Alibaba Cloud Model Studio server.\n";
            $addResponse = self::addFile($client, $leaseId, $parser, $categoryId, $workspaceId);
            $fileId = $addResponse->body->data->fileId;
            echo("fileid: $fileId\n");
            // Step 6: Check the file status.
            echo "Step 6: Check the file status in Alibaba Cloud Model Studio.\n";
            while (true) {
                $describeResponse = self::describeFile($client, $workspaceId, $fileId);
                $status = $describeResponse->body->data->status;
                echo "Current file status: $status\n";
                if ($status == 'INIT') {
                    echo "The file is pending parsing. Wait a moment...\n";
                } elseif ($status == 'PARSING') {
                    echo "The file is being parsed. Wait a moment...\n";
                } elseif ($status == 'PARSE_SUCCESS') {
                    echo "The file is parsed.\n";
                    break;
                } else {
                    echo "Unknown file status: $status. Contact technical support.\n";
                    return null;
                }
                sleep(5);
            }

            // Step 7: Initialize the knowledge base.
            echo "Step 7: Initialize the knowledge base in Alibaba Cloud Model Studio.\n";
            $indexResponse = self::createIndex($client, $workspaceId, $fileId, $name, $structureType, $sourceType, $sinkType);
            $indexId = $indexResponse->body->data->id;

            // Step 8: Submit an indexing task.
            echo "Step 8: Submit an indexing task to Alibaba Cloud Model Studio.\n";
            $submitResponse = self::submitIndex($client, $workspaceId, $indexId);
            $jobId = $submitResponse->body->data->id;

            // Step 9: Get the status of the indexing task.
            echo "Step 9: Get the status of the indexing task from Alibaba Cloud Model Studio.\n";
            while (true) {
                $getIndexJobStatusResponse = self::getIndexJobStatus($client, $workspaceId, $jobId, $indexId);
                $status = $getIndexJobStatusResponse->body->data->status;
                echo "Current indexing task status: $status\n";
                if ($status == 'COMPLETED') {
                    break;
                }
                sleep(5);
            }
            echo "The Alibaba Cloud Model Studio knowledge base is created.\n";
            return $indexId;
        } catch (Exception $e) {
            echo "An error occurred: {$e->getMessage()}\n";
            return null;
        }
    }


    /**
     * The main function.
     */
    public static function main($args){
        if (!self::checkEnvironmentVariables()) {
            echo "Environment variable check failed.\n";
            return;
        }
        $filePath = readline("Enter the local path of the file to upload. Example in Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx:");
        $kbName = readline("Enter a name for your knowledge base:");
        $workspaceId = getenv('WORKSPACE_ID');
        $result = self::createKnowledgeBase($filePath, $workspaceId, $kbName);
       if ($result) {
           echo "Knowledge base ID: $result\n";
       } else {
           echo "Failed to create the knowledge base.\n";
       }
    }
}
// Assume that autoload.php is in the parent directory of the current code file. Adjust the path based on your project structure.
$path = __DIR__ . \DIRECTORY_SEPARATOR . '..' . \DIRECTORY_SEPARATOR . 'vendor' . \DIRECTORY_SEPARATOR . 'autoload.php';
if (file_exists($path)) {
    require_once $path;
}
KnowledgeBaseCreate::main(array_slice($argv, 1));
```

## Node.js

```
// The sample code is for reference only. Do not use it in a production environment.
'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const bailian20231229 = require('@alicloud/bailian20231229');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Tea = require('@alicloud/tea-typescript');

class KbCreate {

  /**
   * Checks for and prompts you to set the required environment variables.
   * @returns {boolean} - Returns true if all required environment variables are set. Otherwise, returns false.
   */
  static checkEnvironmentVariables() {
    const requiredVars = {
      'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Alibaba Cloud AccessKey ID',
      'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Alibaba Cloud AccessKey secret',
      'WORKSPACE_ID': 'Alibaba Cloud Model Studio workspace ID'
    };

    const missing = [];
    for (const [varName, desc] of Object.entries(requiredVars)) {
      if (!process.env[varName]) {
        console.error(`Error: Set the ${varName} environment variable (${desc})`);
        missing.push(varName);
      }
    }
    return missing.length === 0;
  }

  /**
   * Calculates the MD5 hash of a file.
   * @param {string} filePath - The local path of the file.
   * @returns {Promise<string>} - The MD5 hash of the file.
   */
  static async calculateMD5(filePath) {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(filePath);

    return new Promise((resolve, reject) => {
      stream.on('data', chunk => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
      stream.on('error', reject);
    });
  }

  /**
   * Gets the file size in bytes and returns it as a string.
   * @param {string} filePath - The local path of the file.
   * @returns {string} - The file size, such as "123456".
   */
  static getFileSize(filePath) {
    try {
      const stats = fs.statSync(filePath);
      return stats.size.toString();
    } catch (err) {
      console.error(`Failed to get the file size: ${err.message}`);
      throw err;
    }
  }

  /**
   * Creates and configures a client.
   * @return Client
   * @throws Exception
   */
  static createClient() {
    const config = new OpenApi.Config({
      accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
      accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET
    });
    // The following endpoint is a public endpoint. You can change the endpoint as needed.
    config.endpoint = `bailian.ap-southeast-1.aliyuncs.com`;
    return new bailian20231229.default(config);
  }

  /**
   * Requests a file upload lease.
   * @param {Bailian20231229Client} client - The client.
   * @param {string} categoryId - The category ID.
   * @param {string} fileName - The file name.
   * @param {string} fileMd5 - The MD5 hash of the file.
   * @param {string} fileSize - The file size in bytes.
   * @param {string} workspaceId - The workspace ID.
   * @returns {Promise<bailian20231229.ApplyFileUploadLeaseResponse>} - The response from the Model Studio service.
   */
  static async applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId) {
    const headers = {};
    const req = new bailian20231229.ApplyFileUploadLeaseRequest({
      md5: fileMd5,
      fileName,
      sizeInBytes: fileSize
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.applyFileUploadLeaseWithOptions(
      categoryId,
      workspaceId,
      req,
      headers,
      runtime
    );
  }

  /**
   * Uploads the file to temporary storage.
   * @param {string} preSignedUrl - The URL in the upload lease.
   * @param {Object} headers - The request headers for the upload.
   * @param {string} filePath - The local path of the file.
   */
  static async uploadFile(preSignedUrl, headers, filePath) {
    const uploadHeaders = {
      "X-bailian-extra": headers["X-bailian-extra"],
      "Content-Type": headers["Content-Type"]
    };
    const stream = fs.createReadStream(filePath);
    try {
      await axios.put(preSignedUrl, stream, { headers: uploadHeaders });
    } catch (e) {
      throw new Error(`Upload failed: ${e.message}`);
    }
  }

  /**
   * Adds the file to a category.
   * @param {Bailian20231229Client} client - The client.
   * @param {string} leaseId - The lease ID.
   * @param {string} parser - The parser for the file.
   * @param {string} categoryId - The category ID.
   * @param {string} workspaceId - The workspace ID.
   * @returns {Promise<bailian20231229.AddFileResponse>} - The response from the Model Studio service.
   */
  static async addFile(client, leaseId, parser, categoryId, workspaceId) {
    const headers = {};
    const req = new bailian20231229.AddFileRequest({
      leaseId,
      parser,
      categoryId
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.addFileWithOptions(workspaceId, req, headers, runtime);
  }

  /**
   * Queries the parsing status of the file.
   * @param {Bailian20231229Client} client - The client.
   * @param {string} workspaceId - The workspace ID.
   * @param {string} fileId - The file ID.
   * @returns {Promise<bailian20231229.DescribeFileResponse>} - The response from the Model Studio service.
   */
  static async describeFile(client, workspaceId, fileId) {
    const headers = {};
    const runtime = new Util.RuntimeOptions({});
    return await client.describeFileWithOptions(workspaceId, fileId, headers, runtime);
  }

  /**
   * Initializes the knowledge base (index).
   * @param {Bailian20231229Client} client - The client.
   * @param {string} workspaceId - The workspace ID.
   * @param {string} fileId - The file ID.
   * @param {string} name - The knowledge base name.
   * @param {string} structureType - The data type of the knowledge base.
   * @param {string} sourceType - The data type of the application data. Categories and files are supported.
   * @param {string} sinkType - The vector storage class of the knowledge base.
   * @returns {Promise<bailian20231229.CreateIndexResponse>} - The response from the Model Studio service.
   */
  static async createIndex(client, workspaceId, fileId, name, structureType, sourceType, sinkType) {
    const headers = {};
    const req = new bailian20231229.CreateIndexRequest({
      name,
      structureType,
      documentIds: [fileId],
      sourceType,
      sinkType
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.createIndexWithOptions(workspaceId, req, headers, runtime);
  }

  /**
   * Submits an indexing task.
   * @param {Bailian20231229Client} client - The client.
   * @param {string} workspaceId - The workspace ID.
   * @param {string} indexId - The knowledge base ID.
   * @returns {Promise<bailian20231229.SubmitIndexJobResponse>} - The response from the Model Studio service.
   */
  static async submitIndex(client, workspaceId, indexId) {
    const headers = {};
    const req = new bailian20231229.SubmitIndexJobRequest({ indexId });
    const runtime = new Util.RuntimeOptions({});
    return await client.submitIndexJobWithOptions(workspaceId, req, headers, runtime);
  }

  /**
   * Queries the status of an indexing task.
   * @param {Bailian20231229Client} client - The client.
   * @param {string} workspaceId - The workspace ID.
   * @param {string} jobId - The task ID.
   * @param {string} indexId - The knowledge base ID.
   * @returns {Promise<bailian20231229.GetIndexJobStatusResponse>} - The response from the Model Studio service.
   */
  static async getIndexJobStatus(client, workspaceId, jobId, indexId) {
    const headers = {};
    const req = new bailian20231229.GetIndexJobStatusRequest({ jobId, indexId });
    const runtime = new Util.RuntimeOptions({});
    return await client.getIndexJobStatusWithOptions(workspaceId, req, headers, runtime);
  }

  /**
   * Creates a knowledge base.
   * @param {string} filePath - The local path of the file.
   * @param {string} workspaceId - The workspace ID.
   * @param {string} name - The knowledge base name.
   * @returns {Promise<string | null>} - The knowledge base ID if the call is successful. Otherwise, null is returned.
   */
  static async createKnowledgeBase(filePath, workspaceId, name) {
    const categoryId = 'default';
    const parser = 'DASHSCOPE_DOCMIND';
    const sourceType = 'DATA_CENTER_FILE';
    const structureType = 'unstructured';
    const sinkType = 'DEFAULT';

    try {
      console.log("Step 1: Initialize the client.");
      const client = this.createClient();

      console.log("Step 2: Prepare file information.");
      const fileName = path.basename(filePath);
      const fileMd5 = await this.calculateMD5(filePath);
      const fileSize = this.getFileSize(filePath);

      console.log("Step 3: Request an upload lease from Alibaba Cloud Model Studio.")
      const leaseRes = await this.applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId);
      const leaseId = leaseRes.body.data.fileUploadLeaseId;
      const uploadUrl = leaseRes.body.data.param.url;
      const uploadHeaders = leaseRes.body.data.param.headers;

      console.log("Step 4: Upload the file to Alibaba Cloud Model Studio.")
      await this.uploadFile(uploadUrl, uploadHeaders, filePath);

      console.log("Step 5: Add the file to the Alibaba Cloud Model Studio server.")
      const addRes = await this.addFile(client, leaseId, parser, categoryId, workspaceId);
      const fileId = addRes.body.data.fileId;

      console.log("Step 6: Check the file status in Alibaba Cloud Model Studio.")
      while (true) {
        const descRes = await this.describeFile(client, workspaceId, fileId);
        const status = descRes.body.data.status;
        console.log(`Current file status: ${status}`);

        if (status === 'INIT') console.log("The file is pending parsing. Wait a moment...");
        else if (status === 'PARSING') console.log("The file is being parsed. Wait a moment...");
        else if (status === 'PARSE_SUCCESS') break;
        else {
          console.error(`Unknown file status: ${status}. Contact technical support.`);
          return null;
        }
        await this.sleep(5);
      }

      console.log("Step 7: Initialize the knowledge base in Alibaba Cloud Model Studio.")
      const indexRes = await this.createIndex(client, workspaceId, fileId, name, structureType, sourceType, sinkType);
      const indexId = indexRes.body.data.id;

      console.log("Step 8: Submit an indexing task to Alibaba Cloud Model Studio.")
      const submitRes = await this.submitIndex(client, workspaceId, indexId);
      const jobId = submitRes.body.data.id;

      console.log("Step 9: Get the status of the indexing task from Alibaba Cloud Model Studio.")
      while (true) {
        const jobRes = await this.getIndexJobStatus(client, workspaceId, jobId, indexId);
        const status = jobRes.body.data.status;
        console.log(`Current indexing task status: ${status}`);
        if (status === 'COMPLETED') break;
        await this.sleep(5);
      }
      console.log("The Alibaba Cloud Model Studio knowledge base is created.");
      return indexId;
    } catch (e) {
      console.error(`An error occurred: ${e.message}`);
      return null;
    }
  }

  /**
   * Waits for a specified number of seconds.
   * @param {number} seconds - The wait time in seconds.
   * @returns {Promise<void>}
   */
  static sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  static async main(args) {
    if (!this.checkEnvironmentVariables()) {
      console.log("Environment variable check failed.");
      return;
    }

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    try {
      const filePath = await new Promise((resolve, reject) => {
        readline.question("Enter the local path of the file to upload. Example in Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx:", (ans) => {
          ans.trim() ? resolve(ans) : reject(new Error("The path cannot be empty."));
        });
      });
      const kbName = await new Promise((resolve, reject) => {
        readline.question("Enter a name for your knowledge base:", (ans) => {
          ans.trim() ? resolve(ans) : reject(new Error("The knowledge base name cannot be empty."));
        });
      });
      const workspaceId = process.env.WORKSPACE_ID;

      const result = await KbCreate.createKnowledgeBase(filePath, workspaceId, kbName);
      if (result) console.log(`Knowledge base ID: ${result}`);
      else console.log("Failed to create the knowledge base.");
    } catch (err) {
      console.error(err.message);
    } finally {
      readline.close();
    }
  }
}

exports.KbCreate = KbCreate;
KbCreate.main(process.argv.slice(2));
```

## C#

```
// The sample code is for reference only. Do not use it in a production environment.
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Tea;
using Tea.Utils;


namespace AlibabaCloud.SDK.KnowledgeBase
{
    public class KnowledgeBaseCreate
    {
        /// <summary>
        /// Checks for and prompts you to set the required environment variables.
        /// </summary>
        /// <returns>Returns true if all required environment variables are set. Otherwise, returns false.</returns>
        public static bool CheckEnvironmentVariables()
        {
            var requiredVars = new Dictionary<string, string>
            {
                { "ALIBABA_CLOUD_ACCESS_KEY_ID", "Alibaba Cloud AccessKey ID" },
                { "ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Alibaba Cloud AccessKey secret" },
                { "WORKSPACE_ID", "Alibaba Cloud Model Studio workspace ID" }
            };

            var missingVars = new List<string>();
            foreach (var entry in requiredVars)
            {
                string value = Environment.GetEnvironmentVariable(entry.Key);
                if (string.IsNullOrEmpty(value))
                {
                    missingVars.Add(entry.Key);
                    Console.WriteLine($"Error: Set the {entry.Key} environment variable ({entry.Value})");
                }
            }

            return missingVars.Count == 0;
        }

        /// <summary>
        /// Calculates the MD5 hash of a file.
        /// </summary>
        /// <param name="filePath">The local path of the file.</param>
        /// <returns>The MD5 hash of the file.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during calculation.</exception>
        public static string CalculateMD5(string filePath)
        {
            using (var md5 = MD5.Create())
            {
                using (var stream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                {
                    byte[] hashBytes = md5.ComputeHash(stream);
                    StringBuilder sb = new StringBuilder();
                    foreach (byte b in hashBytes)
                    {
                        sb.Append(b.ToString("x2"));
                    }
                    return sb.ToString();
                }
            }
        }

        /// <summary>
        /// Gets the file size in bytes.
        /// </summary>
        /// <param name="filePath">The local path of the file.</param>
        /// <returns>The file size in bytes.</returns>
        public static string GetFileSize(string filePath)
        {
            var file = new FileInfo(filePath);
            return file.Length.ToString();
        }

        /// <summary>
        /// Initializes the client.
        /// </summary>
        /// <returns>The configured client object.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during initialization.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Client CreateClient()
        {
            var config = new AlibabaCloud.OpenApiClient.Models.Config
            {
                AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
            };
            // The following endpoint is a public endpoint. You can change the endpoint as needed.
            config.Endpoint = "bailian.ap-southeast-1.aliyuncs.com";
            return new AlibabaCloud.SDK.Bailian20231229.Client(config);
        }

        /// <summary>
        /// Requests a file upload lease.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="categoryId">The category ID.</param>
        /// <param name="fileName">The file name.</param>
        /// <param name="fileMd5">The MD5 hash of the file.</param>
        /// <param name="fileSize">The file size in bytes.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.ApplyFileUploadLeaseResponse ApplyLease(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string categoryId,
            string fileName,
            string fileMd5,
            string fileSize,
            string workspaceId)
        {
            var headers = new Dictionary<string, string>() { };
            var applyFileUploadLeaseRequest = new AlibabaCloud.SDK.Bailian20231229.Models.ApplyFileUploadLeaseRequest
            {
                FileName = fileName,
                Md5 = fileMd5,
                SizeInBytes = fileSize
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.ApplyFileUploadLeaseWithOptions(categoryId, workspaceId, applyFileUploadLeaseRequest, headers, runtime);
        }

        /// <summary>
        /// Uploads the file to temporary storage.
        /// </summary>
        /// <param name="preSignedUrl">The URL in the upload lease.</param>
        /// <param name="headers">The request headers for the upload.</param>
        /// <param name="filePath">The local path of the file.</param>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the upload.</exception>
        public static void UploadFile(string preSignedUrl, Dictionary<string, string> headers, string filePath)
        {
            var file = new FileInfo(filePath);
            if (!File.Exists(filePath))
            {
                throw new ArgumentException($"The file does not exist or is not a regular file: {filePath}");
            }

            using (var fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                var url = new Uri(preSignedUrl);
                var conn = (HttpWebRequest)WebRequest.Create(url);
                conn.Method = "PUT";
                conn.ContentType = headers["Content-Type"];
                conn.Headers.Add("X-bailian-extra", headers["X-bailian-extra"]);

                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = fs.Read(buffer, 0, buffer.Length)) > 0)
                {
                    conn.GetRequestStream().Write(buffer, 0, bytesRead);
                }

                using (var response = (HttpWebResponse)conn.GetResponse())
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                    {
                        throw new Exception($"Upload failed: {response.StatusCode}");
                    }
                }
            }
        }

        /// <summary>
        /// Adds the file to a category.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="leaseId">The lease ID.</param>
        /// <param name="parser">The parser for the file.</param>
        /// <param name="categoryId">The category ID.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.AddFileResponse AddFile(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string leaseId,
            string parser,
            string categoryId,
            string workspaceId)
        {
            var headers = new Dictionary<string, string>() { };
            var addFileRequest = new AlibabaCloud.SDK.Bailian20231229.Models.AddFileRequest
            {
                LeaseId = leaseId,
                Parser = parser,
                CategoryId = categoryId
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.AddFileWithOptions(workspaceId, addFileRequest, headers, runtime);
        }

        /// <summary>
        /// Queries the basic information of the file.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="fileId">The file ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.DescribeFileResponse DescribeFile(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string fileId)
        {
            var headers = new Dictionary<string, string>() { };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.DescribeFileWithOptions(workspaceId, fileId, headers, runtime);
        }

        /// <summary>
        /// Creates a knowledge base in the Model Studio service (initialization).
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="fileId">The file ID.</param>
        /// <param name="name">The knowledge base name.</param>
        /// <param name="structureType">The data type of the knowledge base.</param>
        /// <param name="sourceType">The data type of the application data. Categories and files are supported.</param>
        /// <param name="sinkType">The vector storage class of the knowledge base.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.CreateIndexResponse CreateIndex(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string fileId,
            string name,
            string structureType,
            string sourceType,
            string sinkType)
        {
            var headers = new Dictionary<string, string>() { };
            var createIndexRequest = new AlibabaCloud.SDK.Bailian20231229.Models.CreateIndexRequest
            {
                StructureType = structureType,
                Name = name,
                SourceType = sourceType,
                SinkType = sinkType,
                DocumentIds = new List<string> { fileId }
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.CreateIndexWithOptions(workspaceId, createIndexRequest, headers, runtime);
        }

        /// <summary>
        /// Submits an indexing task to the Model Studio service.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexJobResponse SubmitIndex(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string indexId)
        {
            var headers = new Dictionary<string, string>() { };
            var submitIndexJobRequest = new AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexJobRequest
            {
                IndexId = indexId
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.SubmitIndexJobWithOptions(workspaceId, submitIndexJobRequest, headers, runtime);
        }

        /// <summary>
        /// Queries the status of an indexing task.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="jobId">The task ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusResponse GetIndexJobStatus(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string jobId,
            string indexId)
        {
            var headers = new Dictionary<string, string>() { };
            var getIndexJobStatusRequest = new AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusRequest
            {
                IndexId = indexId,
                JobId = jobId
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.GetIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
        }

        /// <summary>
        /// Creates a knowledge base using the Model Studio service.
        /// </summary>
        /// <param name="filePath">The local path of the file.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="name">The knowledge base name.</param>
        /// <returns>The knowledge base ID if the call is successful. Otherwise, null is returned.</returns>
        public static string CreateKnowledgeBase(string filePath, string workspaceId, string name)
        {
            // Set default values.
            string categoryId = "default";
            string parser = "DASHSCOPE_DOCMIND";
            string sourceType = "DATA_CENTER_FILE";
            string structureType = "unstructured";
            string sinkType = "DEFAULT";

            try
            {
                Console.WriteLine("Step 1: Initialize the client.");
                AlibabaCloud.SDK.Bailian20231229.Client client = CreateClient();

                Console.WriteLine("Step 2: Prepare file information.");
                var fileInfo = new FileInfo(filePath);
                string fileName = fileInfo.Name;
                string fileMd5 = CalculateMD5(filePath);
                string fileSize = GetFileSize(filePath);

                Console.WriteLine("Step 3: Request an upload lease from Alibaba Cloud Model Studio.");
                Bailian20231229.Models.ApplyFileUploadLeaseResponse leaseResponse = ApplyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId);
                string leaseId = leaseResponse.Body.Data.FileUploadLeaseId;
                string uploadUrl = leaseResponse.Body.Data.Param.Url;
                var uploadHeaders = leaseResponse.Body.Data.Param.Headers;

                Console.WriteLine("Step 4: Upload the file to Alibaba Cloud Model Studio.");
                // Install Newtonsoft.Json on your own.
                var uploadHeadersMap = JsonConvert.DeserializeObject<Dictionary<string, string>>(JsonConvert.SerializeObject(uploadHeaders));
                UploadFile(uploadUrl, uploadHeadersMap, filePath);

                Console.WriteLine("Step 5: Add the file to the Alibaba Cloud Model Studio server.");
                Bailian20231229.Models.AddFileResponse addResponse = AddFile(client, leaseId, parser, categoryId, workspaceId);
                string fileId = addResponse.Body.Data.FileId;

                Console.WriteLine("Step 6: Check the file status in Alibaba Cloud Model Studio.");
                while (true)
                {
                    Bailian20231229.Models.DescribeFileResponse describeResponse = DescribeFile(client, workspaceId, fileId);
                    string status = describeResponse.Body.Data.Status;
                    Console.WriteLine($"Current file status: {status}");

                    if (status == "INIT")
                    {
                        Console.WriteLine("The file is pending parsing. Wait a moment...");
                    }
                    else if (status == "PARSING")
                    {
                        Console.WriteLine("The file is being parsed. Wait a moment...");
                    }
                    else if (status == "PARSE_SUCCESS")
                    {
                        Console.WriteLine("The file is parsed.");
                        break;
                    }
                    else
                    {
                        Console.WriteLine($"Unknown file status: {status}. Contact technical support.");
                        return null;
                    }
                    Thread.Sleep(5000);
                }

                Console.WriteLine("Step 7: Create the knowledge base in Alibaba Cloud Model Studio.");
                Bailian20231229.Models.CreateIndexResponse indexResponse = CreateIndex(client, workspaceId, fileId, name, structureType, sourceType, sinkType);
                string indexId = indexResponse.Body.Data.Id;

                Console.WriteLine("Step 8: Submit an indexing task to Alibaba Cloud Model Studio.");
                Bailian20231229.Models.SubmitIndexJobResponse submitResponse = SubmitIndex(client, workspaceId, indexId);
                string jobId = submitResponse.Body.Data.Id;

                Console.WriteLine("Step 9: Get the status of the indexing task from Alibaba Cloud Model Studio.");
                while (true)
                {
                    Bailian20231229.Models.GetIndexJobStatusResponse getStatusResponse = GetIndexJobStatus(client, workspaceId, jobId, indexId);
                    string status = getStatusResponse.Body.Data.Status;
                    Console.WriteLine($"Current indexing task status: {status}");

                    if (status == "COMPLETED")
                    {
                        break;
                    }
                    Thread.Sleep(5000);
                }

                Console.WriteLine("The Alibaba Cloud Model Studio knowledge base is created.");
                return indexId;

            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
                Console.WriteLine("Error Details: " + ex.StackTrace);
                return null;
            }
        }

        /// <summary>
        /// The main function.
        /// </summary>
        public static void Main(string[] args)
        {
            if (!CheckEnvironmentVariables())
            {
                return;
            }

            Console.Write("Enter the local path of the file to upload. Example in Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx:");
            string filePath = Console.ReadLine();

            Console.Write("Enter a name for your knowledge base:");
            string kbName = Console.ReadLine();

            string workspaceId = Environment.GetEnvironmentVariable("WORKSPACE_ID");
            string result = CreateKnowledgeBase(filePath, workspaceId, kbName);
            if (result != null)
            {
                Console.WriteLine($"Knowledge base ID: {result}");
            }
        }
    }
}
```

## Go

```
// The sample code is for reference only. Do not use it in a production environment.
package main

import (
	"bufio"
	"crypto/md5"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"time"

	bailian20231229 "github.com/alibabacloud-go/bailian-20231229/v2/client"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/go-resty/resty/v2"
)

// CheckEnvironmentVariables checks for and prompts you to set the required environment variables.
func CheckEnvironmentVariables() bool {
	// The required environment variables and their descriptions.
	requiredVars := map[string]string{
		"ALIBABA_CLOUD_ACCESS_KEY_ID":     "Alibaba Cloud AccessKey ID",
		"ALIBABA_CLOUD_ACCESS_KEY_SECRET": "Alibaba Cloud AccessKey secret",
		"WORKSPACE_ID":                    "Alibaba Cloud Model Studio workspace ID",
	}

	var missingVars []string
	for varName, desc := range requiredVars {
		if os.Getenv(varName) == "" {
			fmt.Printf("Error: Set the %s environment variable (%s).\n", varName, desc)
			missingVars = append(missingVars, varName)
		}
	}

	return len(missingVars) == 0
}

// CalculateMD5 calculates the MD5 hash of a file.
//
// Parameters:
//   - filePath (string): The local path of the file.
//
// Returns:
//   - string: The MD5 hash of the file.
//   - error: The error message.
func CalculateMD5(filePath string) (_result string, _err error) {
	file, err := os.Open(filePath)
	if err != nil {
		return "", err
	}
	defer file.Close()

	md5Hash := md5.New()
	_, err = io.Copy(md5Hash, file)
	if err != nil {
		return "", err
	}

	return fmt.Sprintf("%x", md5Hash.Sum(nil)), nil
}

// GetFileSize retrieves the file size in bytes.
//
// Parameters:
//   - filePath (string): The local path of the file.
//
// Returns:
//   - string: The file size in bytes.
//   - error: The error message.
func GetFileSize(filePath string) (_result string, _err error) {
	info, err := os.Stat(filePath)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%d", info.Size()), nil
}

// CreateClient creates and configures a client.
//
// Returns:
//   - *bailian20231229.Client: The configured client.
//   - error: The error message.
func CreateClient() (_result *bailian20231229.Client, _err error) {
	config := &openapi.Config{
		AccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
		AccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
	}
	// The following endpoint is a public endpoint. You can change the endpoint as needed.
	config.Endpoint = tea.String("bailian.ap-southeast-1.aliyuncs.com")
	_result = &bailian20231229.Client{}
	_result, _err = bailian20231229.NewClient(config)
	return _result, _err
}

// ApplyLease requests a file upload lease from the Alibaba Cloud Model Studio service.
//
// Parameters:
//   - client (*bailian20231229.Client): The client.
//   - categoryId (string): The category ID.
//   - fileName (string): The file name.
//   - fileMD5 (string): The MD5 hash of the file.
//   - fileSize (string): The file size in bytes.
//   - workspaceId (string): The workspace ID.
//
// Returns:
//   - *bailian20231229.ApplyFileUploadLeaseResponse: The response from the Alibaba Cloud Model Studio service.
//   - error: The error message.
func ApplyLease(client *bailian20231229.Client, categoryId, fileName, fileMD5 string, fileSize string, workspaceId string) (_result *bailian20231229.ApplyFileUploadLeaseResponse, _err error) {
	headers := make(map[string]*string)
	applyFileUploadLeaseRequest := &bailian20231229.ApplyFileUploadLeaseRequest{
		FileName:    tea.String(fileName),
		Md5:         tea.String(fileMD5),
		SizeInBytes: tea.String(fileSize),
	}
	runtime := &util.RuntimeOptions{}
	return client.ApplyFileUploadLeaseWithOptions(tea.String(categoryId), tea.String(workspaceId), applyFileUploadLeaseRequest, headers, runtime)
}

// UploadFile uploads a file to the Alibaba Cloud Model Studio service.
//
// Parameters:
//   - preSignedUrl (string): The presigned URL in the upload lease.
//   - headers (map[string]string): The headers of the upload request.
//   - filePath (string): The local path of the file.
func UploadFile(preSignedUrl string, headers map[string]string, filePath string) error {
	file, err := os.Open(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	body, err := io.ReadAll(file)
	if err != nil {
		return err
	}

	client := resty.New()
	uploadHeaders := map[string]string{
		"X-bailian-extra": headers["X-bailian-extra"],
		"Content-Type":    headers["Content-Type"],
	}

	resp, err := client.R().
		SetHeaders(uploadHeaders).
		SetBody(body).
		Put(preSignedUrl)

	if err != nil {
		return err
	}

	if resp.IsError() {
		return fmt.Errorf("HTTP error: %d", resp.StatusCode())
	}

	return nil
}

// AddFile adds a file to a specified category in the Alibaba Cloud Model Studio service.
//
// Parameters:
//   - client (*bailian20231229.Client): The client.
//   - leaseId (string): The lease ID.
//   - parser (string): The parser used for the file.
//   - categoryId (string): The category ID.
//   - workspaceId (string): The workspace ID.
//
// Returns:
//   - *bailian20231229.AddFileResponse: The response from the Alibaba Cloud Model Studio service.
//   - error: The error message.
func AddFile(client *bailian20231229.Client, leaseId, parser, categoryId, workspaceId string) (_result *bailian20231229.AddFileResponse, _err error) {
	headers := make(map[string]*string)
	addFileRequest := &bailian20231229.AddFileRequest{
		LeaseId:    tea.String(leaseId),
		Parser:     tea.String(parser),
		CategoryId: tea.String(categoryId),
	}
	runtime := &util.RuntimeOptions{}
	return client.AddFileWithOptions(tea.String(workspaceId), addFileRequest, headers, runtime)
}

// DescribeFile retrieves the basic information of a file.
//
// Parameters:
//   - client (*bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - fileId (string): The file ID.
//
// Returns:
//   - *bailian20231229.DescribeFileResponse: The response from the Alibaba Cloud Model Studio service.
//   - error: The error message.
func DescribeFile(client *bailian20231229.Client, workspaceId, fileId string) (_result *bailian20231229.DescribeFileResponse, _err error) {
	headers := make(map[string]*string)
	runtime := &util.RuntimeOptions{}
	return client.DescribeFileWithOptions(tea.String(workspaceId), tea.String(fileId), headers, runtime)
}

// CreateIndex creates and initializes a knowledge base in the Alibaba Cloud Model Studio service.
//
// Parameters:
//   - client (*bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - fileId (string): The file ID.
//   - name (string): The name of the knowledge base.
//   - structureType (string): The data structure type of the knowledge base.
//   - sourceType (string): The data type of the source. Valid values: category and file.
//   - sinkType (string): The vector storage class of the knowledge base.
//
// Returns:
//   - *bailian20231229.CreateIndexResponse: The response from the Alibaba Cloud Model Studio service.
//   - error: The error message.
func CreateIndex(client *bailian20231229.Client, workspaceId, fileId, name, structureType, sourceType, sinkType string) (_result *bailian20231229.CreateIndexResponse, _err error) {
	headers := make(map[string]*string)
	createIndexRequest := &bailian20231229.CreateIndexRequest{
		StructureType: tea.String(structureType),
		Name:          tea.String(name),
		SourceType:    tea.String(sourceType),
		SinkType:      tea.String(sinkType),
		DocumentIds:   []*string{tea.String(fileId)},
	}
	runtime := &util.RuntimeOptions{}
	return client.CreateIndexWithOptions(tea.String(workspaceId), createIndexRequest, headers, runtime)
}

// SubmitIndex submits an indexing job.
//
// Parameters:
//   - client (*bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//
// Returns:
//   - *bailian20231229.SubmitIndexJobResponse: The response from the Alibaba Cloud Model Studio service.
//   - error: The error message.
func SubmitIndex(client *bailian20231229.Client, workspaceId, indexId string) (_result *bailian20231229.SubmitIndexJobResponse, _err error) {
	headers := make(map[string]*string)
	submitIndexJobRequest := &bailian20231229.SubmitIndexJobRequest{
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.SubmitIndexJobWithOptions(tea.String(workspaceId), submitIndexJobRequest, headers, runtime)
}

// GetIndexJobStatus queries the status of an indexing job.
//
// Parameters:
//   - client (*bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - jobId (string): The job ID.
//   - indexId (string): The knowledge base ID.
//
// Returns:
//   - *bailian20231229.GetIndexJobStatusResponse: The response from the Alibaba Cloud Model Studio service.
//   - error: The error message.
func GetIndexJobStatus(client *bailian20231229.Client, workspaceId, jobId, indexId string) (_result *bailian20231229.GetIndexJobStatusResponse, _err error) {
	headers := make(map[string]*string)
	getIndexJobStatusRequest := &bailian20231229.GetIndexJobStatusRequest{
		JobId:   tea.String(jobId),
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.GetIndexJobStatusWithOptions(tea.String(workspaceId), getIndexJobStatusRequest, headers, runtime)
}

// CreateKnowledgeBase creates a knowledge base using the Alibaba Cloud Model Studio service.
//
// Parameters:
//   - filePath (string): The local path of the file.
//   - workspaceId (string): The workspace ID.
//   - name (string): The name of the knowledge base.
//
// Returns:
//   - string: The ID of the knowledge base if the operation is successful. Otherwise, an empty string is returned.
//   - error: The error message.
func CreateKnowledgeBase(filePath, workspaceId, name string) (_result string, _err error) {
	categoryId := "default"
	parser := "DASHSCOPE_DOCMIND"
	sourceType := "DATA_CENTER_FILE"
	structureType := "unstructured"
	sinkType := "DEFAULT"

	fmt.Println("Step 1: Initialize the client.")
	client, err := CreateClient()
	if err != nil {
		return "", err
	}

	fmt.Println("Step 2: Prepare the file information.")
	fileName := filepath.Base(filePath)
	fileMD5, err := CalculateMD5(filePath)
	if err != nil {
		return "", err
	}
	fileSizeStr, err := GetFileSize(filePath)
	if err != nil {
		return "", err
	}

	fmt.Println("Step 3: Request a file upload lease from Alibaba Cloud Model Studio.")
	leaseResponse, err := ApplyLease(client, categoryId, fileName, fileMD5, fileSizeStr, workspaceId)
	if err != nil {
		return "", err
	}

	leaseId := tea.StringValue(leaseResponse.Body.Data.FileUploadLeaseId)
	uploadURL := tea.StringValue(leaseResponse.Body.Data.Param.Url)
	uploadHeaders := leaseResponse.Body.Data.Param.Headers

	jsonData, err := json.Marshal(uploadHeaders)
	if err != nil {
		return "", err
	}

	var uploadHeadersMap map[string]string
	err = json.Unmarshal(jsonData, &uploadHeadersMap)
	if err != nil {
		return "", err
	}

	fmt.Println("Step 4: Upload the file to Alibaba Cloud Model Studio.")
	err = UploadFile(uploadURL, uploadHeadersMap, filePath)
	if err != nil {
		return "", err
	}

	fmt.Println("Step 5: Add the file to the Alibaba Cloud Model Studio server.")
	addResponse, err := AddFile(client, leaseId, parser, categoryId, workspaceId)
	if err != nil {
		return "", err
	}
	fileID := tea.StringValue(addResponse.Body.Data.FileId)

	fmt.Println("Step 6: Check the file status in Alibaba Cloud Model Studio.")
	for {
		describeResponse, err := DescribeFile(client, workspaceId, fileID)
		if err != nil {
			return "", err
		}

		status := tea.StringValue(describeResponse.Body.Data.Status)
		fmt.Printf("Current file status: %s\n", status)

		if status == "INIT" {
			fmt.Println("The file is pending parsing. Please wait...")
		} else if status == "PARSING" {
			fmt.Println("The file is being parsed. Please wait...")
		} else if status == "PARSE_SUCCESS" {
			fmt.Println("The file is parsed successfully.")
			break
		} else {
			fmt.Printf("Unknown file status: %s. Contact technical support.\n", status)
			return "", fmt.Errorf("unknown document status: %s", status)
		}
		time.Sleep(5 * time.Second)
	}

	fmt.Println("Step 7: Initialize the knowledge base in Alibaba Cloud Model Studio.")
	indexResponse, err := CreateIndex(client, workspaceId, fileID, name, structureType, sourceType, sinkType)
	if err != nil {
		return "", err
	}
	indexID := tea.StringValue(indexResponse.Body.Data.Id)

	fmt.Println("Step 8: Submit an indexing job to Alibaba Cloud Model Studio.")
	submitResponse, err := SubmitIndex(client, workspaceId, indexID)
	if err != nil {
		return "", err
	}
	jobID := tea.StringValue(submitResponse.Body.Data.Id)

	fmt.Println("Step 9: Query the status of the indexing job from Alibaba Cloud Model Studio.")
	for {
		getIndexJobStatusResponse, err := GetIndexJobStatus(client, workspaceId, jobID, indexID)
		if err != nil {
			return "", err
		}

		status := tea.StringValue(getIndexJobStatusResponse.Body.Data.Status)
		fmt.Printf("Current indexing job status: %s\n", status)

		if status == "COMPLETED" {
			break
		}
		time.Sleep(5 * time.Second)
	}

	fmt.Println("The Alibaba Cloud Model Studio knowledge base is created successfully.")
	return indexID, nil
}

// main is the entry point of the program.
func main() {
	if !CheckEnvironmentVariables() {
		fmt.Println("The environment variable check failed.")
		return
	}
	// Create a scanner to read input.
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the local path of the file to upload. Example for Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx:")
	filePath, _ := reader.ReadString('\n')
	filePath = strings.TrimSpace(filePath)
	fmt.Print("Enter a name for your knowledge base:")
	kbName, _ := reader.ReadString('\n')
	kbName = strings.TrimSpace(kbName)
	workspaceID := os.Getenv("WORKSPACE_ID")
	indexID, err := CreateKnowledgeBase(filePath, workspaceID, kbName)
	if err != nil {
		fmt.Printf("An error occurred: %v\n", err)
		return
	}
	fmt.Printf("The knowledge base is created successfully. ID: %s\n", indexID)
}
```

## Retrieving from the knowledge base

**Important**

-   Before you call this example, you must complete all the preceding [prerequisites](#a4a15bd543can). RAM users must [obtain the AliyunBailianDataFullAccess policy](/help/en/model-studio/grant-data-access-permission-to-ram-user) before they can call this example.
    
-   If you use an IDE or other development plugins, you must configure the `ALIBABA_CLOUD_ACCESS_KEY_ID`, `ALIBABA_CLOUD_ACCESS_KEY_SECRET`, and `WORKSPACE_ID` variables in the corresponding development environment.
    

## Python

```
# This sample code is for reference only. Do not use it directly in a production environment.
import os

from alibabacloud_bailian20231229 import models as bailian_20231229_models
from alibabacloud_bailian20231229.client import Client as bailian20231229Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_tea_util import models as util_models
from alibabacloud_tea_util.client import Client as UtilClient


def check_environment_variables():
    """Check for and prompt to set the required environment variables."""
    required_vars = {
        'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Your Alibaba Cloud AccessKey ID',
        'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Your Alibaba Cloud AccessKey secret',
        'WORKSPACE_ID': 'Your Alibaba Cloud Model Studio workspace ID'
    }
    missing_vars = []
    for var, description in required_vars.items():
        if not os.environ.get(var):
            missing_vars.append(var)
            print(f"Error: Set the {var} environment variable ({description}).")
    
    return len(missing_vars) == 0


# Create a client.
def create_client() -> bailian20231229Client:
    """
    Create and configure a client.

    Returns:
        bailian20231229Client: The configured client.
    """
    config = open_api_models.Config(
        access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
    )
        # The following endpoint is a public endpoint. You can change the endpoint as needed.
    config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com'
    return bailian20231229Client(config)


# Retrieve the knowledge base.
def retrieve_index(client, workspace_id, index_id, query):
    """
    Retrieve information from a specified knowledge base.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        query (str): The search query.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    retrieve_request = bailian_20231229_models.RetrieveRequest(
        index_id=index_id,
        query=query
    )
    runtime = util_models.RuntimeOptions()
    return client.retrieve_with_options(workspace_id, retrieve_request, headers, runtime)


def main():
    """
    Use the Model Studio service to retrieve a knowledge base.

    Returns:
        str or None: The retrieved text segments if the operation is successful. Otherwise, None is returned.
    """
    if not check_environment_variables():
        print("Environment variable check failed.")
        return
    try:
        print("Step 1: Create a client.")
        client = create_client()
        print("Step 2: Retrieve the knowledge base.")
        index_id = input("Enter the knowledge base ID: ")  # This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
        query = input("Enter the search query: ")
        workspace_id = os.environ.get('WORKSPACE_ID')
        resp = retrieve_index(client, workspace_id, index_id, query)
        result = UtilClient.to_jsonstring(resp.body)
        print(result)
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


if __name__ == '__main__':
    main()
```

## Java

```
// This sample code is for reference only. Do not use it directly in a production environment.
import com.aliyun.bailian20231229.models.RetrieveRequest;
import com.aliyun.bailian20231229.models.RetrieveResponse;
import com.aliyun.teautil.models.RuntimeOptions;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

public class KnowledgeBaseRetrieve {

    /**
     * Check for and prompt to set the required environment variables.
     *
     * @return true if all required environment variables are set, false otherwise.
     */
    public static boolean checkEnvironmentVariables() {
        Map<String, String> requiredVars = new HashMap<>();
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_ID", "Your Alibaba Cloud AccessKey ID");
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Your Alibaba Cloud AccessKey secret");
        requiredVars.put("WORKSPACE_ID", "Your Alibaba Cloud Model Studio workspace ID");

        List<String> missingVars = new ArrayList<>();
        for (Map.Entry<String, String> entry : requiredVars.entrySet()) {
            String value = System.getenv(entry.getKey());
            if (value == null || value.isEmpty()) {
                missingVars.add(entry.getKey());
                System.out.println("Error: Set the " + entry.getKey() + " environment variable (" + entry.getValue() + ")");
            }
        }

        return missingVars.isEmpty();
    }

    /**
     * Initialize the client.
     *
     * @return The configured client object.
     */
    public static com.aliyun.bailian20231229.Client createClient() throws Exception {
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = "bailian.ap-southeast-1.aliyuncs.com";
        return new com.aliyun.bailian20231229.Client(config);
    }

    /**
     * Retrieve information from a specified knowledge base.
     *
     * @param client         The client object (bailian20231229Client).
     * @param workspaceId    The workspace ID.
     * @param indexId        The knowledge base ID.
     * @param query          The search statement.
     * @return               The response from the Model Studio service.
     */
    public static RetrieveResponse retrieveIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId, String query) throws Exception {
        RetrieveRequest retrieveRequest = new RetrieveRequest();
        retrieveRequest.setIndexId(indexId);
        retrieveRequest.setQuery(query);
        RuntimeOptions runtime = new RuntimeOptions();
        return client.retrieveWithOptions(workspaceId, retrieveRequest, null, runtime);
    }

    /**
     * Use the Model Studio service to retrieve a knowledge base.
     */
    public static void main(String[] args) {
        if (!checkEnvironmentVariables()) {
            System.out.println("Environment variable check failed.");
            return;
        }

        try {
            // Step 1: Initialize the client.
            System.out.println("Step 1: Create a client.");
            com.aliyun.bailian20231229.Client client = createClient();

            // Step 2: Retrieve the knowledge base.
            System.out.println("Step 2: Retrieve the knowledge base.");
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter the knowledge base ID: "); // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
            String indexId = scanner.nextLine();
            System.out.print("Enter the search query: ");
            String query = scanner.nextLine();
            String workspaceId = System.getenv("WORKSPACE_ID");
            RetrieveResponse resp = retrieveIndex(client, workspaceId, indexId, query);

            // Install jackson-databind to convert the response body to a JSON string.
            ObjectMapper mapper = new ObjectMapper();
            String result = mapper.writeValueAsString(resp.getBody());
            System.out.println(result);
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## PHP

```
<?php
// This sample code is for reference only. Do not use it directly in a production environment.
namespace AlibabaCloud\SDK\Sample;

use AlibabaCloud\Dara\Models\RuntimeOptions;
use AlibabaCloud\SDK\Bailian\V20231229\Bailian;
use \Exception;

use Darabonba\OpenApi\Models\Config;
use AlibabaCloud\SDK\Bailian\V20231229\Models\RetrieveRequest;

class KnowledgeBaseRetrieve {

    /**
    * Check for and prompt to set the required environment variables.
    *
    * @return bool Returns true if all required environment variables are set, false otherwise.
    */
    public static function checkEnvironmentVariables() {
        $requiredVars = [
            'ALIBABA_CLOUD_ACCESS_KEY_ID' => 'Your Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET' => 'Your Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID' => 'Your Alibaba Cloud Model Studio workspace ID'
        ];
        $missingVars = [];
        foreach ($requiredVars as $var => $description) {
            if (!getenv($var)) {
                $missingVars[] = $var;
                echo "Error: Set the $var environment variable ($description)\n";
            }
        }
        return count($missingVars) === 0;
    }

    /**
     * Initialize the client.
     *
     * @return Bailian The configured client object.
     */
    public static function createClient(){
        $config = new Config([
            "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), 
            "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
        ]);
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        $config->endpoint = 'bailian.ap-southeast-1.aliyuncs.com';
        return new Bailian($config);
    }

     /**
     * Retrieve information from a specified knowledge base.
     *
     * @param Bailian $client The client object.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @param string $query The search statement.
     * @return RetrieveResponse The response from the Model Studio service.
     * @throws Exception
     */
    public static function retrieveIndex($client, $workspaceId, $indexId, $query) {
        $headers = [];
        $retrieveRequest = new RetrieveRequest([
            "query" => $query,
            "indexId" => $indexId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->retrieveWithOptions($workspaceId, $retrieveRequest, $headers, $runtime);
    }

    /**
     * Use the Model Studio service to retrieve a knowledge base.
     */
    public static function main($args){
        if (!self::checkEnvironmentVariables()) {
            echo "Environment variable check failed.\n";
            return;
        }

        try {
            // Step 1: Create a client.
            echo "Step 1: Create a client.\n";
            $client = self::createClient();

            // Step 2: Retrieve the knowledge base.
            echo "Step 2: Retrieve the knowledge base.\n";
            $indexId = readline("Enter the knowledge base ID: "); // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
            $query = readline("Enter the search query: "); 
            $workspaceId = getenv("WORKSPACE_ID");
            // Call the retrieval method.
            $resp = self::retrieveIndex($client, $workspaceId, $indexId, $query);
            // Convert the response body to a JSON string.
            $result = json_encode($resp->body, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            echo $result . "\n";
        } catch (Exception $e) {
            echo "An error occurred: " . $e->getMessage() . "\n";
        }
    }
}
// Assume that autoload.php is in the parent folder of the current code file. Adjust the path based on your project structure.
$path = __DIR__ . \DIRECTORY_SEPARATOR . '..' . \DIRECTORY_SEPARATOR . 'vendor' . \DIRECTORY_SEPARATOR . 'autoload.php';
if (file_exists($path)) {
    require_once $path;
}
KnowledgeBaseRetrieve::main(array_slice($argv, 1));
```

## Node.js

```
// This sample code is for reference only. Do not use it directly in a production environment.
'use strict';

const bailian20231229 = require('@alicloud/bailian20231229');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Tea = require('@alicloud/tea-typescript');

class KbRetrieve {

    /**
     * Check for and prompt to set the required environment variables.
     * @returns {boolean} - Returns true if all required environment variables are set, false otherwise.
     */
    static checkEnvironmentVariables() {
        const requiredVars = {
            'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Your Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Your Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID': 'Your Alibaba Cloud Model Studio workspace ID'
        };

        const missing = [];
        for (const [varName, desc] of Object.entries(requiredVars)) {
            if (!process.env[varName]) {
                console.error(`Error: Set the ${varName} environment variable (${desc})`);
                missing.push(varName);
            }
        }
        return missing.length === 0;
    }

    /**
     * Create and configure a client.
     * @return Client
     * @throws Exception
     */
    static createClient() {
        const config = new OpenApi.Config({
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET
        });
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com';
        return new bailian20231229.default(config);
    }

    /**
     * Retrieve information from a specified knowledge base.
     * @param {bailian20231229.Client} client The client.
     * @param {string} workspaceId The workspace ID.
     * @param {string} indexId The knowledge base ID.
     * @param {string} query The search query.
     * @returns {Promise<bailian20231229.RetrieveResponse>} The response from the Model Studio service.
     */
    static async retrieveIndex(client, workspaceId, indexId, query) {
        const headers = {};
        const req = new bailian20231229.RetrieveRequest({
            indexId,
            query
        });
        const runtime = new Util.RuntimeOptions({});
        return await client.retrieveWithOptions(workspaceId, req, headers, runtime);
    }

    /**
     * Use the Model Studio service to retrieve a knowledge base.
     */
    static async main(args) {
        if (!this.checkEnvironmentVariables()) {
            console.log("Environment variable check failed.");
            return;
        }

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        try {
            console.log("Step 1: Create a client.")
            const client = this.createClient();
            
            console.log("Step 2: Retrieve the knowledge base.")
            const indexId = await new Promise((resolve, reject) => {
                // The knowledge base ID is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
                readline.question("Enter the knowledge base ID: ", (ans) => {
                    ans.trim() ? resolve(ans) : reject(new Error("The knowledge base ID cannot be empty."));
                });
            });
            const query = await new Promise((resolve, reject) => {
                readline.question("Enter the search query: ", (ans) => {
                    ans.trim() ? resolve(ans) : reject(new Error("The search query cannot be empty."));
                });
            });
            const workspaceId = process.env.WORKSPACE_ID;
            const resp = await this.retrieveIndex(client, workspaceId, indexId, query);
            const result = JSON.stringify(resp.body);
            console.log(result);
        } catch (err) {
            console.error(`An error occurred: ${err.message}`);
            return;
        } finally {
            readline.close();
        }
    }
}

exports.KbRetrieve = KbRetrieve;
KbRetrieve.main(process.argv.slice(2));

```

## C#

```
// This sample code is for reference only. Do not use it directly in a production environment.
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Text;

using Newtonsoft.Json;
using Tea;
using Tea.Utils;


namespace AlibabaCloud.SDK.KnowledgeBase
{
    public class KnowledgeBaseRetrieve
    {
        /// <summary>
        /// Checks for and prompts you to set the required environment variables.
        /// </summary>
        /// <returns>Returns true if all required environment variables are set; otherwise, false.</returns>
        public static bool CheckEnvironmentVariables()
        {
            var requiredVars = new Dictionary<string, string>
            {
                { "ALIBABA_CLOUD_ACCESS_KEY_ID", "Your Alibaba Cloud AccessKey ID" },
                { "ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Your Alibaba Cloud AccessKey secret" },
                { "WORKSPACE_ID", "Your Alibaba Cloud Model Studio workspace ID" }
            };

            var missingVars = new List<string>();
            foreach (var entry in requiredVars)
            {
                string value = Environment.GetEnvironmentVariable(entry.Key);
                if (string.IsNullOrEmpty(value))
                {
                    missingVars.Add(entry.Key);
                    Console.WriteLine($"Error: Set the {entry.Key} environment variable ({entry.Value}).");
                }
            }

            return missingVars.Count == 0;
        }

        /// <summary>
        /// Initializes the client.
        /// </summary>
        /// <returns>The configured client object.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during initialization.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Client CreateClient()
        {
            var config = new AlibabaCloud.OpenApiClient.Models.Config
            {
                AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
            };
            // The following endpoint is a public endpoint. You can change the endpoint as needed.
            config.Endpoint = "bailian.ap-southeast-1.aliyuncs.com";
            return new AlibabaCloud.SDK.Bailian20231229.Client(config);
        }

        /// <summary>
        /// Retrieves information from a specified knowledge base.
        /// </summary>
        /// <param name="client">The client object (bailian20231229Client).</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <param name="query">The search statement.</param>
        /// <returns>The response from the Alibaba Cloud Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if the call fails.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.RetrieveResponse RetrieveIndex(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string indexId,
            string query)
        {
            var headers = new Dictionary<string, string>() { };
            var retrieveRequest = new AlibabaCloud.SDK.Bailian20231229.Models.RetrieveRequest
            {
                IndexId = indexId,
                Query = query
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.RetrieveWithOptions(workspaceId, retrieveRequest, headers, runtime);
        }

        /// <summary>
        /// Uses the Alibaba Cloud Model Studio service to retrieve a knowledge base.
        /// </summary>
        public static void Main(string[] args)
        {
            if (!CheckEnvironmentVariables())
            {
                Console.WriteLine("Environment variable check failed.");
                return;
            }

            try
            {
                // Step 1: Initialize the client.
                Console.WriteLine("Step 1: Create a client.");
                Bailian20231229.Client client = CreateClient();

                // Step 2: Retrieve the knowledge base.
                Console.WriteLine("Step 2: Retrieve the knowledge base.");
                Console.Write("Enter the knowledge base ID: "); // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Alibaba Cloud Model Studio console.
                string indexId = Console.ReadLine();
                Console.Write("Enter the search query: ");
                string query = Console.ReadLine();
                string workspaceId = Environment.GetEnvironmentVariable("WORKSPACE_ID");
                Bailian20231229.Models.RetrieveResponse resp = RetrieveIndex(client, workspaceId, indexId, query);

                // Install Newtonsoft.Json to convert the response body to a JSON string.
                var mapper = new JsonSerializerSettings { Formatting = Formatting.Indented };
                string result = JsonConvert.SerializeObject(resp.Body, mapper);
                Console.WriteLine(result);
            }
            catch (Exception e)
            {
                Console.WriteLine("An error occurred: " + e.Message);
            }
        }
    }
}
```

## Go

```
// This sample code is for reference only. Do not use it directly in a production environment.
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	bailian20231229 "github.com/alibabacloud-go/bailian-20231229/v2/client"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
)

// checkEnvironmentVariables checks for and prompts to set the required environment variables.
func checkEnvironmentVariables() bool {
	// The required environment variables and their descriptions.
	requiredVars := map[string]string{
		"ALIBABA_CLOUD_ACCESS_KEY_ID":     "Your Alibaba Cloud AccessKey ID",
		"ALIBABA_CLOUD_ACCESS_KEY_SECRET": "Your Alibaba Cloud AccessKey secret",
		"WORKSPACE_ID":                    "Your Alibaba Cloud Model Studio workspace ID",
	}

	var missingVars []string
	for varName, desc := range requiredVars {
		if os.Getenv(varName) == "" {
			fmt.Printf("Error: Set the %s environment variable (%s)\n", varName, desc)
			missingVars = append(missingVars, varName)
		}
	}

	return len(missingVars) == 0
}

// createClient creates and configures a client.
//
// Returns:
//   - *bailian20231229.Client: The configured client.
//   - error: The error message.
func createClient() (_result *bailian20231229.Client, _err error) {
	config := &openapi.Config{
		AccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
		AccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
	}
	// The following endpoint is a public endpoint. You can change the endpoint as needed.
	config.Endpoint = tea.String("bailian.ap-southeast-1.aliyuncs.com")
	_result = &bailian20231229.Client{}
	_result, _err = bailian20231229.NewClient(config)
	return _result, _err
}

// retrieveIndex retrieves information from a specified knowledge base.
//
// Parameters:
//   client: The client.
//   workspaceId: The workspace ID.
//   indexId: The knowledge base ID.
//   query: The search statement.
//
// Returns:
//   The response from the Model Studio service.
//   An error.
func retrieveIndex(client *bailian20231229.Client, workspaceId, indexId, query string) (*bailian20231229.RetrieveResponse, error) {
	headers := make(map[string]*string)
	request := &bailian20231229.RetrieveRequest{
		IndexId: tea.String(indexId),
		Query:   tea.String(query),
	}
	runtime := &util.RuntimeOptions{}
	return client.RetrieveWithOptions(tea.String(workspaceId), request, headers, runtime)
}

// The main function.
func main() {
	if !checkEnvironmentVariables() {
		fmt.Println("Environment variable check failed.")
		return
	}

	// Step 1: Initialize the client.
	fmt.Println("Step 1: Create a client.")
	client, err := createClient()
	if err != nil {
		fmt.Println("Failed to create a client:", err)
		return
	}

	// Step 2: Retrieve the knowledge base.
	fmt.Println("Step 2: Retrieve the knowledge base.")
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the knowledge base ID: ") // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
	indexId, _ := reader.ReadString('\n')
	indexId = strings.TrimSpace(indexId)
	fmt.Print("Enter the search query: ")
	query, _ := reader.ReadString('\n')
	query = strings.TrimSpace(query)
	workspaceId := os.Getenv("WORKSPACE_ID")
	resp, err := retrieveIndex(client, workspaceId, indexId, query)
	if err != nil {
		fmt.Printf("Retrieval failed: %v\n", err)
		return
	}
        fmt.Println(resp.Body)
}
```

## Update a knowledge base

**Important**

-   Before you call this example, you must complete all the [prerequisites](#a4a15bd543can). If you use a RAM user to call this example, you must grant the [AliyunBailianDataFullAccess policy](/help/en/model-studio/grant-data-access-permission-to-ram-user) to the RAM user.
    
-   If you use an IDE or other development plugins, you must configure the `ALIBABA_CLOUD_ACCESS_KEY_ID`, `ALIBABA_CLOUD_ACCESS_KEY_SECRET`, and `WORKSPACE_ID` environment variables in your development environment.
    

## Python

```
# The sample code is for reference only. Do not use it in a production environment.
import hashlib
import os
import time

import requests
from alibabacloud_bailian20231229 import models as bailian_20231229_models
from alibabacloud_bailian20231229.client import Client as bailian20231229Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_tea_util import models as util_models


def check_environment_variables():
    """Check for and prompt to set the required environment variables."""
    required_vars = {
        'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Alibaba Cloud AccessKey ID',
        'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Alibaba Cloud AccessKey secret',
        'WORKSPACE_ID': 'Model Studio workspace ID'
    }
    missing_vars = []
    for var, description in required_vars.items():
        if not os.environ.get(var):
            missing_vars.append(var)
            print(f"Error: Set the {var} environment variable ({description}).")
    
    return len(missing_vars) == 0


# Create a client.
def create_client() -> bailian20231229Client:
    """
    Create and configure a client.

    Returns:
        bailian20231229Client: The configured client.
    """
    config = open_api_models.Config(
        access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
    )
    # The following endpoint is a public endpoint. You can change the endpoint as needed.
    config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com'
    return bailian20231229Client(config)


def calculate_md5(file_path: str) -> str:
    """
    Calculate the MD5 hash of a file.

    Args:
        file_path (str): The local path of the file.

    Returns:
        str: The MD5 hash of the file.
    """
    md5_hash = hashlib.md5()

    # Read the file in binary mode.
    with open(file_path, "rb") as f:
        # Read the file in chunks to avoid high memory usage for large files.
        for chunk in iter(lambda: f.read(4096), b""):
            md5_hash.update(chunk)

    return md5_hash.hexdigest()


def get_file_size(file_path: str) -> int:
    """
    Get the size of a file in bytes.
    Args:
        file_path (str): The local path of the file.
    Returns:
        int: The file size in bytes.
    """
    return os.path.getsize(file_path)


# Request a file upload lease.
def apply_lease(client, category_id, file_name, file_md5, file_size, workspace_id):
    """
    Request a file upload lease from the Model Studio service.

    Args:
        client (bailian20231229Client): The client.
        category_id (str): The category ID.
        file_name (str): The file name.
        file_md5 (str): The MD5 hash of the file.
        file_size (int): The file size in bytes.
        workspace_id (str): The workspace ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    request = bailian_20231229_models.ApplyFileUploadLeaseRequest(
        file_name=file_name,
        md_5=file_md5,
        size_in_bytes=file_size,
    )
    runtime = util_models.RuntimeOptions()
    return client.apply_file_upload_lease_with_options(category_id, workspace_id, request, headers, runtime)


# Upload the file to temporary storage.
def upload_file(pre_signed_url, headers, file_path):
    """
    Upload the file to the Model Studio service.
    Args:
        lease_id (str): The lease ID.
        pre_signed_url (str): The URL in the upload lease.
        headers (dict): The request headers for the upload.
        file_path (str): The local path of the file.
    """
    with open(file_path, 'rb') as f:
        file_content = f.read()
    upload_headers = {
        "X-bailian-extra": headers["X-bailian-extra"],
        "Content-Type": headers["Content-Type"]
    }
    response = requests.put(pre_signed_url, data=file_content, headers=upload_headers)
    response.raise_for_status()


# Add the file to a category.
def add_file(client: bailian20231229Client, lease_id: str, parser: str, category_id: str, workspace_id: str):
    """
    Add the file to a specified category in the Model Studio service.

    Args:
        client (bailian20231229Client): The client.
        lease_id (str): The lease ID.
        parser (str): The parser for the file.
        category_id (str): The category ID.
        workspace_id (str): The workspace ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    request = bailian_20231229_models.AddFileRequest(
        lease_id=lease_id,
        parser=parser,
        category_id=category_id,
    )
    runtime = util_models.RuntimeOptions()
    return client.add_file_with_options(workspace_id, request, headers, runtime)


# Query the parsing status of the file.
def describe_file(client, workspace_id, file_id):
    """
    Get the basic information of the file.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        file_id (str): The file ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    runtime = util_models.RuntimeOptions()
    return client.describe_file_with_options(workspace_id, file_id, headers, runtime)


# Submit a task to append the file.
def submit_index_add_documents_job(client, workspace_id, index_id, file_id, source_type):
    """
    Append a parsed file to a document search knowledge base.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        file_id (str): The file ID.
        source_type(str): The data type.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    submit_index_add_documents_job_request = bailian_20231229_models.SubmitIndexAddDocumentsJobRequest(
        index_id=index_id,
        document_ids=[file_id],
        source_type=source_type
    )
    runtime = util_models.RuntimeOptions()
    return client.submit_index_add_documents_job_with_options(workspace_id, submit_index_add_documents_job_request,
                                                              headers, runtime)


# Wait for the append task to complete.
def get_index_job_status(client, workspace_id, job_id, index_id):
    """
    Query the status of an index job.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        job_id (str): The job ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    get_index_job_status_request = bailian_20231229_models.GetIndexJobStatusRequest(
        index_id=index_id,
        job_id=job_id
    )
    runtime = util_models.RuntimeOptions()
    return client.get_index_job_status_with_options(workspace_id, get_index_job_status_request, headers, runtime)


# Delete the old file.
def delete_index_document(client, workspace_id, index_id, file_id):
    """
    Permanently delete one or more files from a specified document search knowledge base.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        file_id (str): The file ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    delete_index_document_request = bailian_20231229_models.DeleteIndexDocumentRequest(
        index_id=index_id,
        document_ids=[file_id]
    )
    runtime = util_models.RuntimeOptions()
    return client.delete_index_document_with_options(workspace_id, delete_index_document_request, headers, runtime)


def update_knowledge_base(
        file_path: str,
        workspace_id: str,
        index_id: str,
        old_file_id: str
):
    """
    Update a knowledge base using the Model Studio service.
    Args:
        file_path (str): The local path of the updated file.
        workspace_id (str): The workspace ID.
        index_id (str): The ID of the knowledge base to update.
        old_file_id (str): The file ID of the file to update.
    Returns:
        str or None: The ID of the knowledge base if the update is successful. Otherwise, None.
    """
    # Set default values.
    category_id = 'default'
    parser = 'DASHSCOPE_DOCMIND'
    source_type = 'DATA_CENTER_FILE'
    try:
        # Step 1: Create a client.
        print("Step 1: Create a client.")
        client = create_client()
        # Step 2: Prepare file information.
        print("Step 2: Prepare file information.")
        file_name = os.path.basename(file_path)
        file_md5 = calculate_md5(file_path)
        file_size = get_file_size(file_path)
        # Step 3: Request an upload lease.
        print("Step 3: Request an upload lease from Alibaba Cloud Model Studio.")
        lease_response = apply_lease(client, category_id, file_name, file_md5, file_size, workspace_id)
        lease_id = lease_response.body.data.file_upload_lease_id
        upload_url = lease_response.body.data.param.url
        upload_headers = lease_response.body.data.param.headers
        # Step 4: Upload the file to temporary storage.
        print("Step 4: Upload the file to temporary storage.")
        upload_file(upload_url, upload_headers, file_path)
        # Step 5: Add the file to the category.
        print("Step 5: Add the file to the category.")
        add_response = add_file(client, lease_id, parser, category_id, workspace_id)
        file_id = add_response.body.data.file_id
        # Step 6: Check the file status.
        print("Step 6: Check the file status in Alibaba Cloud Model Studio.")
        while True:
            describe_response = describe_file(client, workspace_id, file_id)
            status = describe_response.body.data.status
            print(f"Current file status: {status}")
            if status == 'INIT':
                print("The file is waiting to be parsed. Please wait...")
            elif status == 'PARSING':
                print("The file is being parsed. Please wait...")
            elif status == 'PARSE_SUCCESS':
                print("The file is parsed.")
                break
            else:
                print(f"Unknown file status: {status}. Contact technical support.")
                return None
            time.sleep(5)
        # Step 7: Submit a task to append the file.
        print("Step 7: Submit a task to append the file.")
        index_add_response = submit_index_add_documents_job(client, workspace_id, index_id, file_id, source_type)
        job_id = index_add_response.body.data.id
        # Step 8: Query the status of the index job.
        print("Step 8: Wait for the append task to complete.")
        while True:
            get_index_job_status_response = get_index_job_status(client, workspace_id, job_id, index_id)
            status = get_index_job_status_response.body.data.status
            print(f"Current index job status: {status}")
            if status == 'COMPLETED':
                break
            time.sleep(5)
        print("Step 9: Delete the old file.")
        delete_index_document(client, workspace_id, index_id, old_file_id)
        print("The Alibaba Cloud Model Studio knowledge base is updated.")
        return index_id
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def main():
    if not check_environment_variables():
        print("Environment variable check failed.")
        return
    file_path = input("Enter the local path of the updated file to upload (for example, /home/user/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx on a Linux system):")
    index_id = input("Enter the ID of the knowledge base to update:")  # This is the Data.Id returned by the CreateIndex operation. You can also obtain the ID on the knowledge base page in the Model Studio console.
    old_file_id = input("Enter the file ID of the file to update:")  # This is the FileId returned by the AddFile operation. You can also obtain the file ID by clicking the ID icon next to the file name on the application data page in the Model Studio console.
    workspace_id = os.environ.get('WORKSPACE_ID')
    update_knowledge_base(file_path, workspace_id, index_id, old_file_id)


if __name__ == '__main__':
    main()
```

## Java

```
// The sample code is for reference only. Do not use it in a production environment.
import com.aliyun.bailian20231229.models.*;
import com.aliyun.teautil.models.RuntimeOptions;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileInputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.util.*;

public class KnowledgeBaseUpdate {

    /**
     * Check for and prompt to set the required environment variables.
     *
     * @return true if all required environment variables are set, false otherwise.
     */
    public static boolean checkEnvironmentVariables() {
        Map<String, String> requiredVars = new HashMap<>();
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_ID", "Alibaba Cloud AccessKey ID");
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Alibaba Cloud AccessKey secret");
        requiredVars.put("WORKSPACE_ID", "Alibaba Cloud Model Studio workspace ID");

        List<String> missingVars = new ArrayList<>();
        for (Map.Entry<String, String> entry : requiredVars.entrySet()) {
            String value = System.getenv(entry.getKey());
            if (value == null || value.isEmpty()) {
                missingVars.add(entry.getKey());
                System.out.println("Error: Set the " + entry.getKey() + " environment variable (" + entry.getValue() + ")");
            }
        }

        return missingVars.isEmpty();
    }

    /**
     * Create and configure a client.
     *
     * @return The configured client.
     */
    public static com.aliyun.bailian20231229.Client createClient() throws Exception {
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = "bailian.ap-southeast-1.aliyuncs.com";
        return new com.aliyun.bailian20231229.Client(config);
    }

    /**
     * Calculate the MD5 hash of a file.
     *
     * @param filePath The local path of the file.
     * @return The MD5 hash of the file.
     */
    public static String calculateMD5(String filePath) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        try (FileInputStream fis = new FileInputStream(filePath)) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                md.update(buffer, 0, bytesRead);
            }
        }
        StringBuilder sb = new StringBuilder();
        for (byte b : md.digest()) {
            sb.append(String.format("%02x", b & 0xff));
        }
        return sb.toString();
    }

    /**
     * Get the size of a file in bytes.
     *
     * @param filePath The local path of the file.
     * @return The file size in bytes.
     */
    public static String getFileSize(String filePath) {
        File file = new File(filePath);
        long fileSize = file.length();
        return String.valueOf(fileSize);
    }

    /**
     * Request a file upload lease.
     *
     * @param client The client object.
     * @param categoryId The category ID.
     * @param fileName The file name.
     * @param fileMd5 The MD5 hash of the file.
     * @param fileSize The file size in bytes.
     * @param workspaceId The workspace ID.
     * @return The response object from the Model Studio service.
     */
    public static ApplyFileUploadLeaseResponse applyLease(com.aliyun.bailian20231229.Client client, String categoryId, String fileName, String fileMd5, String fileSize, String workspaceId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.ApplyFileUploadLeaseRequest applyFileUploadLeaseRequest = new com.aliyun.bailian20231229.models.ApplyFileUploadLeaseRequest();
        applyFileUploadLeaseRequest.setFileName(fileName);
        applyFileUploadLeaseRequest.setMd5(fileMd5);
        applyFileUploadLeaseRequest.setSizeInBytes(fileSize);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        ApplyFileUploadLeaseResponse applyFileUploadLeaseResponse = null;
        applyFileUploadLeaseResponse = client.applyFileUploadLeaseWithOptions(categoryId, workspaceId, applyFileUploadLeaseRequest, headers, runtime);
        return applyFileUploadLeaseResponse;
    }

    /**
     * Upload the file to temporary storage.
     *
     * @param preSignedUrl The URL in the upload lease.
     * @param headers The request headers for the upload.
     * @param filePath The local path of the file.
     * @throws Exception if an error occurs during the upload.
     */
    public static void uploadFile(String preSignedUrl, Map<String, String> headers, String filePath) throws Exception {
        File file = new File(filePath);
        if (!file.exists() || !file.isFile()) {
            throw new IllegalArgumentException("The file does not exist or is not a regular file: " + filePath);
        }

        try (FileInputStream fis = new FileInputStream(file)) {
            URL url = new URL(preSignedUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("PUT");
            conn.setDoOutput(true);

            // Set the upload request headers.
            conn.setRequestProperty("X-bailian-extra", headers.get("X-bailian-extra"));
            conn.setRequestProperty("Content-Type", headers.get("Content-Type"));

            // Read and upload the file in chunks.
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                conn.getOutputStream().write(buffer, 0, bytesRead);
            }

            int responseCode = conn.getResponseCode();
            if (responseCode != 200) {
                throw new RuntimeException("Upload failed: " + responseCode);
            }
        }
    }

    /**
     * Add the file to a category.
     *
     * @param client The client object.
     * @param leaseId The lease ID.
     * @param parser The parser for the file.
     * @param categoryId The category ID.
     * @param workspaceId The workspace ID.
     * @return The response object from the Model Studio service.
     */
    public static AddFileResponse addFile(com.aliyun.bailian20231229.Client client, String leaseId, String parser, String categoryId, String workspaceId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.AddFileRequest addFileRequest = new com.aliyun.bailian20231229.models.AddFileRequest();
        addFileRequest.setLeaseId(leaseId);
        addFileRequest.setParser(parser);
        addFileRequest.setCategoryId(categoryId);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.addFileWithOptions(workspaceId, addFileRequest, headers, runtime);
    }

    /**
     * Query the basic information of the file.
     *
     * @param client The client object.
     * @param workspaceId The workspace ID.
     * @param fileId The file ID.
     * @return The response object from the Model Studio service.
     */
    public static DescribeFileResponse describeFile(com.aliyun.bailian20231229.Client client, String workspaceId, String fileId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.describeFileWithOptions(workspaceId, fileId, headers, runtime);
    }

    /**
     * Append a parsed file to a document search knowledge base.
     *
     * @param client The client.
     * @param workspaceId The workspace ID.
     * @param indexId The knowledge base ID.
     * @param fileId The file ID.
     * @param sourceType The data type.
     * @return The response from the Model Studio service.
     */
    public static SubmitIndexAddDocumentsJobResponse submitIndexAddDocumentsJob(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId, String fileId, String sourceType) throws Exception {
        Map<String, String> headers = new HashMap<>();
        SubmitIndexAddDocumentsJobRequest submitIndexAddDocumentsJobRequest = new SubmitIndexAddDocumentsJobRequest();
        submitIndexAddDocumentsJobRequest.setIndexId(indexId);
        submitIndexAddDocumentsJobRequest.setDocumentIds(Collections.singletonList(fileId));
        submitIndexAddDocumentsJobRequest.setSourceType(sourceType);
        RuntimeOptions runtime = new RuntimeOptions();
        return client.submitIndexAddDocumentsJobWithOptions(workspaceId, submitIndexAddDocumentsJobRequest, headers, runtime);
    }

    /**
     * Query the status of an index job.
     *
     * @param client The client object.
     * @param workspaceId The workspace ID.
     * @param jobId The job ID.
     * @param indexId The knowledge base ID.
     * @return The response object from the Model Studio service.
     */
    public static GetIndexJobStatusResponse getIndexJobStatus(com.aliyun.bailian20231229.Client client, String workspaceId, String jobId, String indexId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.GetIndexJobStatusRequest getIndexJobStatusRequest = new com.aliyun.bailian20231229.models.GetIndexJobStatusRequest();
        getIndexJobStatusRequest.setIndexId(indexId);
        getIndexJobStatusRequest.setJobId(jobId);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        GetIndexJobStatusResponse getIndexJobStatusResponse = null;
        getIndexJobStatusResponse = client.getIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
        return getIndexJobStatusResponse;
    }

    /**
     * Permanently delete one or more files from a specified document search knowledge base.
     *
     * @param client The client.
     * @param workspaceId The workspace ID.
     * @param indexId The knowledge base ID.
     * @param fileId The file ID.
     * @return The response from the Model Studio service.
     */
    public static DeleteIndexDocumentResponse deleteIndexDocument(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId, String fileId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        DeleteIndexDocumentRequest deleteIndexDocumentRequest = new DeleteIndexDocumentRequest();
        deleteIndexDocumentRequest.setIndexId(indexId);
        deleteIndexDocumentRequest.setDocumentIds(Collections.singletonList(fileId));
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.deleteIndexDocumentWithOptions(workspaceId, deleteIndexDocumentRequest, headers, runtime);
    }

    /**
     * Update a knowledge base using the Model Studio service.
     *
     * @param filePath The local path of the updated file.
     * @param workspaceId The workspace ID.
     * @param indexId The ID of the knowledge base to update.
     * @param oldFileId The file ID of the file to update.
     * @return The ID of the knowledge base if the update is successful. Otherwise, null.
     */
    public static String updateKnowledgeBase(String filePath, String workspaceId, String indexId, String oldFileId) {
        // Set default values.
        String categoryId = "default";
        String parser = "DASHSCOPE_DOCMIND";
        String sourceType = "DATA_CENTER_FILE";
        try {
            // Step 1: Initialize the client.
            System.out.println("Step 1: Create a client.");
            com.aliyun.bailian20231229.Client client = createClient();

            // Step 2: Prepare file information for the updated file.
            System.out.println("Step 2: Prepare file information.");
            String fileName = Paths.get(filePath).getFileName().toString();
            String fileMd5 = calculateMD5(filePath);
            String fileSize = getFileSize(filePath);

            // Step 3: Request an upload lease.
            System.out.println("Step 3: Request an upload lease from Alibaba Cloud Model Studio.");
            ApplyFileUploadLeaseResponse leaseResponse = applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId);
            String leaseId = leaseResponse.getBody().getData().getFileUploadLeaseId();
            String uploadUrl = leaseResponse.getBody().getData().getParam().getUrl();
            Object uploadHeaders = leaseResponse.getBody().getData().getParam().getHeaders();

            // Step 4: Upload the file to temporary storage.
            // Install jackson-databind.
            System.out.println("Step 4: Upload the file to temporary storage.");
            // Convert the uploadHeaders from the previous step to a map of key-value pairs.
            ObjectMapper mapper = new ObjectMapper();
            Map<String, String> uploadHeadersMap = (Map<String, String>) mapper.readValue(mapper.writeValueAsString(uploadHeaders), Map.class);
            uploadFile(uploadUrl, uploadHeadersMap, filePath);

            // Step 5: Add the file to the category.
            System.out.println("Step 5: Add the file to the category.");
            AddFileResponse addResponse = addFile(client, leaseId, parser, categoryId, workspaceId);
            String fileId = addResponse.getBody().getData().getFileId();

            // Step 6: Check the status of the updated file.
            System.out.println("Step 6: Check the file status in Alibaba Cloud Model Studio.");
            while (true) {
                DescribeFileResponse describeResponse = describeFile(client, workspaceId, fileId);
                String status = describeResponse.getBody().getData().getStatus();
                System.out.println("Current file status: " + status);
                if ("INIT".equals(status)) {
                    System.out.println("The file is waiting to be parsed. Please wait...");
                } else if ("PARSING".equals(status)) {
                    System.out.println("The file is being parsed. Please wait...");
                } else if ("PARSE_SUCCESS".equals(status)) {
                    System.out.println("The file is parsed.");
                    break;
                } else {
                    System.out.println("Unknown file status: " + status + ". Contact technical support.");
                    return null;
                }
                Thread.sleep(5000);
            }

            // Step 7: Submit a task to append the file.
            System.out.println("Step 7: Submit a task to append the file.");
            SubmitIndexAddDocumentsJobResponse indexAddResponse = submitIndexAddDocumentsJob(client, workspaceId, indexId, fileId, sourceType);
            String jobId = indexAddResponse.getBody().getData().getId();

            // Step 8: Wait for the append task to complete.
            System.out.println("Step 8: Wait for the append task to complete.");
            while (true) {
                GetIndexJobStatusResponse jobStatusResponse = getIndexJobStatus(client, workspaceId, jobId, indexId);
                String status = jobStatusResponse.getBody().getData().getStatus();
                System.out.println("Current index job status: " + status);
                if ("COMPLETED".equals(status)) {
                    break;
                }
                Thread.sleep(5000);
            }

            // Step 9: Delete the old file.
            System.out.println("Step 9: Delete the old file.");
            deleteIndexDocument(client, workspaceId, indexId, oldFileId);

            System.out.println("The Alibaba Cloud Model Studio knowledge base is updated.");
            return indexId;
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
            return null;
        }
    }

    /**
     * The main function.
     */
    public static void main(String[] args) {
        if (!checkEnvironmentVariables()) {
            System.out.println("Environment variable check failed.");
            return;
        }

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the local path of the updated file to upload (for example, /home/user/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx on a Linux system):");
        String filePath = scanner.nextLine();

        System.out.print("Enter the ID of the knowledge base to update:"); // This is the Data.Id returned by the CreateIndex operation. You can also obtain the ID on the knowledge base page in the Model Studio console.
        String indexId = scanner.nextLine();

        System.out.print("Enter the file ID of the file to update:"); // This is the FileId returned by the AddFile operation. You can also obtain the file ID by clicking the ID icon next to the file name on the application data page in the Model Studio console.
        String oldFileId = scanner.nextLine();

        String workspaceId = System.getenv("WORKSPACE_ID");
        String result = updateKnowledgeBase(filePath, workspaceId, indexId, oldFileId);
        if (result != null) {
            System.out.println("Knowledge base updated. The knowledge base ID is: " + result);
        } else {
            System.out.println("Failed to update the knowledge base.");
        }
    }
}
```

## PHP

```
<?php
// The sample code is for reference only. Do not use it in a production environment.
namespace AlibabaCloud\SDK\Sample;

use AlibabaCloud\Dara\Models\RuntimeOptions;
use AlibabaCloud\SDK\Bailian\V20231229\Bailian;
use AlibabaCloud\SDK\Bailian\V20231229\Models\AddFileRequest;
use \Exception;

use Darabonba\OpenApi\Models\Config;
use AlibabaCloud\SDK\Bailian\V20231229\Models\ApplyFileUploadLeaseRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\DeleteIndexDocumentRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\GetIndexJobStatusRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\SubmitIndexAddDocumentsJobRequest;

class KnowledgeBaseUpdate {

    /**
    * Check for and prompt to set the required environment variables.
    *
    * @return bool Returns true if all required environment variables are set, false otherwise.
    */
    public static function checkEnvironmentVariables() {
        $requiredVars = [
            'ALIBABA_CLOUD_ACCESS_KEY_ID' => 'Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET' => 'Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID' => 'Alibaba Cloud Model Studio workspace ID'
        ];
        $missingVars = [];
        foreach ($requiredVars as $var => $description) {
            if (!getenv($var)) {
                $missingVars[] = $var;
                echo "Error: Set the $var environment variable ($description)\n";
            }
        }
        return count($missingVars) === 0;
    }

    /**
     * Calculate the MD5 hash of a file.
     *
     * @param string $filePath The local path of the file.
     * @return string The MD5 hash of the file.
     */
    public static function calculateMd5($filePath) {
        $md5Hash = hash_init("md5");
        $handle = fopen($filePath, "rb");
        while (!feof($handle)) {
            $chunk = fread($handle, 4096);
            hash_update($md5Hash, $chunk);
        }
        fclose($handle);
        return hash_final($md5Hash);
    }

    /**
     * Get the size of a file in bytes.
     *
     * @param string $filePath The local path of the file.
     * @return int The file size in bytes.
     */
    public static function getFileSize($filePath) {
        return (string)filesize($filePath);
    }

    /**
     * Initialize a client.
     *
     * @return Bailian The configured client object.
     */
    public static function createClient(){
        $config = new Config([
            "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), 
            "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
        ]);
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        $config->endpoint = 'bailian.ap-southeast-1.aliyuncs.com';
        return new Bailian($config);
    }

    /**
     * Request a file upload lease.
     *
     * @param Bailian $client The client.
     * @param string $categoryId The category ID.
     * @param string $fileName The file name.
     * @param string $fileMd5 The MD5 hash of the file.
     * @param int $fileSize The file size in bytes.
     * @param string $workspaceId The workspace ID.
     * @return ApplyFileUploadLeaseResponse The response from the Model Studio service.
     */
    public static function applyLease($client, $categoryId, $fileName, $fileMd5, $fileSize, $workspaceId) {
        $headers = [];
        $applyFileUploadLeaseRequest = new ApplyFileUploadLeaseRequest([
            "fileName" => $fileName,
            "md5" => $fileMd5,
            "sizeInBytes" => $fileSize
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->applyFileUploadLeaseWithOptions($categoryId, $workspaceId, $applyFileUploadLeaseRequest, $headers, $runtime);
    }

    /**
     * Upload the file to temporary storage.
    *
    * @param string $preSignedUrl The URL in the upload lease.
    * @param array $headers The request headers for the upload.
    * @param string $filePath The local path of the file.
    */
    public static function uploadFile($preSignedUrl, $headers, $filePath) {
        $fileContent = file_get_contents($filePath);
        // Set the upload request headers.
        $uploadHeaders = [
            "X-bailian-extra" => $headers["X-bailian-extra"],
            "Content-Type" => $headers["Content-Type"]
        ];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $preSignedUrl);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fileContent);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array_map(function($key, $value) {
            return "$key: $value";
        }, array_keys($uploadHeaders), $uploadHeaders));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($httpCode != 200) {
            throw new Exception("Upload failed: " . curl_error($ch));
        }
        curl_close($ch);
    }

    /**
     * Add the file to a category.
     *
     * @param Bailian $client The client.
     * @param string $leaseId The lease ID.
     * @param string $parser The parser for the file.
     * @param string $categoryId The category ID.
     * @param string $workspaceId The workspace ID.
     * @return AddFileResponse The response from the Model Studio service.
     */
    public static function addFile($client, $leaseId, $parser, $categoryId, $workspaceId) {
        $headers = [];
        $addFileRequest = new AddFileRequest([
            "leaseId" => $leaseId,
            "parser" => $parser,
            "categoryId" => $categoryId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->addFileWithOptions($workspaceId, $addFileRequest, $headers, $runtime);
    }

    /**
     * Query the basic information of the file.
     *
     * @param Bailian $client The client.
     * @param string $workspaceId The workspace ID.
     * @param string $fileId The file ID.
     * @return DescribeFileResponse The response from the Model Studio service.
     */
    public static function describeFile($client, $workspaceId, $fileId) {
        $headers = [];
        $runtime = new RuntimeOptions([]);
        return $client->describeFileWithOptions($workspaceId, $fileId, $headers, $runtime);
    }

    /**
     * Append a parsed file to a document search knowledge base.
     *
     * @param Bailian $client The client object.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @param string $fileId The file ID.
     * @param string $sourceType The data type.
     * @return SubmitIndexAddDocumentsJobResponse The response from the Model Studio service.
     * @throws Exception
     */
    public static function submitIndexAddDocumentsJob($client, $workspaceId, $indexId, $fileId, $sourceType) {
        $headers = [];
        $submitIndexAddDocumentsJobRequest = new SubmitIndexAddDocumentsJobRequest([
            "indexId" =>$indexId,
            "sourceType" => $sourceType,
            "documentIds" => [
                $fileId
            ]
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->submitIndexAddDocumentsJobWithOptions($workspaceId, $submitIndexAddDocumentsJobRequest, $headers, $runtime);
    }

    /**
     * Query the status of an index job.
     *
     * @param Bailian $client The client.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @param string $jobId The job ID.
     * @return GetIndexJobStatusResponse The response from the Model Studio service.
     */
    public static function getIndexJobStatus$client, $workspaceId, $jobId, $indexId) {
        $headers = [];
        $getIndexJobStatusRequest = new GetIndexJobStatusRequest([
            'indexId' => $indexId,
            'jobId' => $jobId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->getIndexJobStatusWithOptions($workspaceId, $getIndexJobStatusRequest, $headers, $runtime);
    }

    /**
     * Permanently delete a file from a specified document search knowledge base.
     *
     * @param Bailian $client The client object.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @param string $fileId The file ID.
     * @return mixed The response from the Model Studio service.
     * @throws Exception
     */
    public static function deleteIndexDocument($client, $workspaceId, $indexId, $fileId) {
        $headers = [];
        $deleteIndexDocumentRequest = new DeleteIndexDocumentRequest([
            "indexId" => $indexId,
            "documentIds" => [
                $fileId
            ]
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->deleteIndexDocumentWithOptions($workspaceId, $deleteIndexDocumentRequest, $headers, $runtime);
    }

    /**
     * Update a knowledge base using the Model Studio service.
     *
     * @param string $filePath The local path of the updated file.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The ID of the knowledge base to update.
     * @param string $oldFileId The file ID of the file to update.
     * @return string| null The ID of the knowledge base if the update is successful. Otherwise, null.
     */
    public static function updateKnowledgeBase($filePath, $workspaceId, $indexId, $oldFileId) {
        $categoryId = "default";
        $parser = "DASHSCOPE_DOCMIND";
        $sourceType = "DATA_CENTER_FILE";

        try {
            // Step 1: Create a client.
            echo "Step 1: Create a client.\n";
            $client = self::createClient();

            // Step 2: Prepare file information.
            echo "Step 2: Prepare file information.\n";
            $fileName = basename($filePath);
            $fileMd5 = self::calculateMD5($filePath);
            $fileSize = self::getFileSize($filePath);

            // Step 3: Request an upload lease.
            echo "Step 3: Request an upload lease from Alibaba Cloud Model Studio.\n";
            $leaseResponse = self::applyLease($client, $categoryId, $fileName, $fileMd5, $fileSize, $workspaceId);
            $leaseId = $leaseResponse->body->data->fileUploadLeaseId;
            $uploadUrl = $leaseResponse->body->data->param->url;
            $uploadHeaders = $leaseResponse->body->data->param->headers;
            $uploadHeadersMap = json_decode(json_encode($uploadHeaders), true);

            // Step 4: Upload the file to temporary storage.
            echo "Step 4: Upload the file to temporary storage.\n";
            self::uploadFile($uploadUrl, $uploadHeadersMap, $filePath);

            // Step 5: Add the file to the category.
            echo "Step 5: Add the file to the category.\n";
            $addResponse = self::addFile($client, $leaseId, $parser, $categoryId, $workspaceId);
            $fileId = $addResponse->body->data->fileId;

            // Step 6: Check the file status.
            echo "Step 6: Check the file status in Alibaba Cloud Model Studio.\n";
            while (true) {
                $describeResponse = self::describeFile($client, $workspaceId, $fileId);
                $status = $describeResponse->body->data->status;
                echo "Current file status: " . $status . "\n";

                if ($status === "INIT") {
                    echo "The file is waiting to be parsed. Please wait...\n";
                } elseif ($status === "PARSING") {
                    echo "The file is being parsed. Please wait...\n";
                } elseif ($status === "PARSE_SUCCESS") {
                    echo "The file is parsed.\n";
                    break;
                } else {
                    echo "Unknown file status: " . $status . ". Contact technical support.\n";
                    return null;
                }
                sleep(5);
            }

            // Step 7: Submit a task to append the file.
            echo "Step 7: Submit a task to append the file.\n";
            $indexAddResponse = self::submitIndexAddDocumentsJob($client, $workspaceId, $indexId, $fileId, $sourceType);
            $jobId = $indexAddResponse->body->data->id;

            // Step 8: Wait for the task to complete.
            echo "Step 8: Wait for the append task to complete.\n";
            while (true) {
                $jobStatusResponse = self::getIndexJobStatus($client, $workspaceId, $jobId, $indexId);
                $status = $jobStatusResponse->body->data->status;
                echo "Current index job status: " . $status . "\n";

                if ($status === "COMPLETED") {
                    break;
                }
                sleep(5);
            }

            // Step 9: Delete the old file.
            echo "Step 9: Delete the old file.\n";
            self::deleteIndexDocument($client, $workspaceId, $indexId, $oldFileId);

            echo "The Alibaba Cloud Model Studio knowledge base is updated.\n";
            return $indexId;

        } catch (Exception $e) {
            echo "An error occurred: " . $e->getMessage() . "\n";
            return null;
        }
    }


    /**
     * The main function.
     */
    public static function main($args){
        if (!self::checkEnvironmentVariables()) {
            echo "Environment variable check failed.\n";
            return;
        }
        $filePath = readline("Enter the local path of the updated file to upload (for example, /home/user/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx on a Linux system):");
        $indexId = readline("Enter the ID of the knowledge base to update:"); // This is the Data.Id returned by the CreateIndex operation. You can also obtain the ID on the knowledge base page in the Model Studio console.
        $oldFileId = readline("Enter the file ID of the file to update:"); // This is the FileId returned by the AddFile operation. You can also obtain the file ID by clicking the ID icon next to the file name on the application data page in the Model Studio console.
        $workspaceId = getenv('WORKSPACE_ID');
        $result = self::updateKnowledgeBase($filePath, $workspaceId, $indexId, $oldFileId);

        if ($result !== null) {
            echo "Knowledge base updated. The knowledge base ID is: " . $result . "\n";
        } else {
            echo "Failed to update the knowledge base.\n";
        }
    }
}
// Assume that autoload.php is in the parent directory of the current code file. Adjust the path based on your project structure.
$path = __DIR__ . \DIRECTORY_SEPARATOR . '..' . \DIRECTORY_SEPARATOR . 'vendor' . \DIRECTORY_SEPARATOR . 'autoload.php';
if (file_exists($path)) {
    require_once $path;
}
KnowledgeBaseUpdate::main(array_slice($argv, 1));
```

## Node.js

```
// The sample code is for reference only. Do not use it in a production environment.
'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const bailian20231229 = require('@alicloud/bailian20231229');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Tea = require('@alicloud/tea-typescript');

class KbUpdate {

    /**
     * Check for and prompt to set the required environment variables.
     * @returns {boolean} - Returns true if all required environment variables are set, false otherwise.
     */
    static checkEnvironmentVariables() {
        const requiredVars = {
            'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID': 'Alibaba Cloud Model Studio workspace ID'
        };

        const missing = [];
        for (const [varName, desc] of Object.entries(requiredVars)) {
            if (!process.env[varName]) {
                console.error(`Error: Set the ${varName} environment variable (${desc})`);
                missing.push(varName);
            }
        }
        return missing.length === 0;
    }

    /**
     * Calculate the MD5 hash of a file.
     * @param {string} filePath - The local path of the file.
     * @returns {Promise<string>} - The MD5 hash of the file.
     */
    static async calculateMD5(filePath) {
        const hash = crypto.createHash('md5');
        const stream = fs.createReadStream(filePath);

        return new Promise((resolve, reject) => {
            stream.on('data', chunk => hash.update(chunk));
            stream.on('end', () => resolve(hash.digest('hex')));
            stream.on('error', reject);
        });
    }

    /**
     * Get the size of a file in bytes and return it as a string.
     * @param {string} filePath - The local path of the file.
     * @returns {string} - The file size, for example, "123456".
     */
    static getFileSize(filePath) {
        try {
            const stats = fs.statSync(filePath);
            return stats.size.toString();
        } catch (err) {
            console.error(`Failed to get file size: ${err.message}`);
            throw err;
        }
    }

    /**
     * Create and configure a client.
     * @return Client
     * @throws Exception
     */
    static createClient() {
        const config = new OpenApi.Config({
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET
        });
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = `bailian.ap-southeast-1.aliyuncs.com`;
        return new bailian20231229.default(config);
    }

    /**
     * Request a file upload lease.
     * @param {Bailian20231229Client} client - The client.
     * @param {string} categoryId - The category ID.
     * @param {string} fileName - The file name.
     * @param {string} fileMd5 - The MD5 hash of the file.
     * @param {string} fileSize - The file size in bytes.
     * @param {string} workspaceId - The workspace ID.
     * @returns {Promise<bailian20231229.ApplyFileUploadLeaseResponse>} - The response from the Model Studio service.
     */
    static async applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId) {
        const headers = {};
        const req = new bailian20231229.ApplyFileUploadLeaseRequest({
            md5: fileMd5,
            fileName,
            sizeInBytes: fileSize
        });
        const runtime = new Util.RuntimeOptions({});
        return await client.applyFileUploadLeaseWithOptions(
            categoryId,
            workspaceId,
            req,
            headers,
            runtime
        );
    }

    /**
     * Upload the file to temporary storage.
     * @param {string} preSignedUrl - The URL in the upload lease.
     * @param {Object} headers - The request headers for the upload.
     * @param {string} filePath - The local path of the file.
     */
    static async uploadFile(preSignedUrl, headers, filePath) {
        const uploadHeaders = {
            "X-bailian-extra": headers["X-bailian-extra"],
            "Content-Type": headers["Content-Type"]
        };
        const stream = fs.createReadStream(filePath);
        try {
            await axios.put(preSignedUrl, stream, { headers: uploadHeaders });
        } catch (e) {
            throw new Error(`Upload failed: ${e.message}`);
        }
    }

    /**
     * Add the file to a category.
     * @param {Bailian20231229Client} client - The client.
     * @param {string} leaseId - The lease ID.
     * @param {string} parser - The parser for the file.
     * @param {string} categoryId - The category ID.
     * @param {string} workspaceId - The workspace ID.
     * @returns {Promise<bailian20231229.AddFileResponse>} - The response from the Model Studio service.
     */
    static async addFile(client, leaseId, parser, categoryId, workspaceId) {
        const headers = {};
        const req = new bailian20231229.AddFileRequest({
            leaseId,
            parser,
            categoryId
        });
        const runtime = new Util.RuntimeOptions({});
        return await client.addFileWithOptions(workspaceId, req, headers, runtime);
    }

    /**
     * Query the parsing status of the file.
     * @param {Bailian20231229Client} client - The client.
     * @param {string} workspaceId - The workspace ID.
     * @param {string} fileId - The file ID.
     * @returns {Promise<bailian20231229.DescribeFileResponse>} - The response from the Model Studio service.
     */
    static async describeFile(client, workspaceId, fileId) {
        const headers = {};
        const runtime = new Util.RuntimeOptions({});
        return await client.describeFileWithOptions(workspaceId, fileId, headers, runtime);
    }

    /**
     * Submit a task to append the file.
     * @param {Bailian20231229Client} client - The client.
     * @param {string} workspaceId - The workspace ID.
     * @param {string} indexId - The knowledge base ID.
     * @param {string} fileId - The file ID.
     * @param {string} sourceType - The data type.
     * @returns {Promise<bailian20231229.SubmitIndexAddDocumentsJobResponse>} - The response from the Model Studio service.
     */
    static async submitIndexAddDocumentsJob(client, workspaceId, indexId, fileId, sourceType) {
        const headers = {};
        const req = new bailian20231229.SubmitIndexAddDocumentsJobRequest({
            indexId,
            documentIds: [fileId],
            sourceType,
        });
        const runtime = new Util.RuntimeOptions({});
        return await client.submitIndexAddDocumentsJobWithOptions(workspaceId, req, headers, runtime);
    }

    /**
     * Query the status of an index job.
     * @param {Bailian20231229Client} client - The client.
     * @param {string} workspaceId - The workspace ID.
     * @param {string} jobId - The job ID.
     * @param {string} indexId - The knowledge base ID.
     * @returns {Promise<bailian20231229.GetIndexJobStatusResponse>} - The response from the Model Studio service.
     */
    static async getIndexJobStatus(client, workspaceId, jobId, indexId) {
        const headers = {};
        const req = new bailian20231229.GetIndexJobStatusRequest({ jobId, indexId });
        const runtime = new Util.RuntimeOptions({});
        return await client.getIndexJobStatusWithOptions(workspaceId, req, headers, runtime);
    }

    /**
     * Delete the old file.
     * @param {Bailian20231229Client} client - The client.
     * @param {string} workspaceId - The workspace ID.
     * @param {string} indexId - The knowledge base ID.
     * @param {string} fileId - The file ID.
     * @returns {Promise<bailian20231229.DeleteIndexDocumentResponse>} - The response from the Model Studio service.
     */
    static async deleteIndexDocument(client, workspaceId, indexId, fileId) {
        const headers = {};
        const req = new bailian20231229.DeleteIndexDocumentRequest({
            indexId,
            documentIds: [fileId],
        });
        const runtime = new Util.RuntimeOptions({});
        return await client.deleteIndexDocumentWithOptions(workspaceId, req, headers, runtime);
    }

    /**
     * Update a knowledge base using the Model Studio service.
     * @param {string} filePath - The local path of the updated file.
     * @param {string} workspaceId - The workspace ID.
     * @param {string} indexId - The ID of the knowledge base to update.
     * @param {string} oldFileId - The file ID of the file to update.
     * @returns {Promise<string | null>} - The ID of the knowledge base if the update is successful. Otherwise, null.
     */
    static async updateKnowledgeBase(filePath, workspaceId, indexId, oldFileId) {
        const categoryId = 'default';
        const parser = 'DASHSCOPE_DOCMIND';
        const sourceType = 'DATA_CENTER_FILE';

        try {
            console.log("Step 1: Create a client.");
            const client = this.createClient();

            console.log("Step 2: Prepare file information.");
            const fileName = path.basename(filePath);
            const fileMd5 = await this.calculateMD5(filePath);
            const fileSize = this.getFileSize(filePath);

            console.log("Step 3: Request an upload lease from Alibaba Cloud Model Studio.");
            const leaseRes = await this.applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId);
            const leaseId = leaseRes.body.data.fileUploadLeaseId;
            const uploadUrl = leaseRes.body.data.param.url;
            const uploadHeaders = leaseRes.body.data.param.headers;

            console.log("Step 4: Upload the file to temporary storage.");
            await this.uploadFile(uploadUrl, uploadHeaders, filePath);

            console.log("Step 5: Add the file to the category.");
            const addRes = await this.addFile(client, leaseId, parser, categoryId, workspaceId);
            const fileId = addRes.body.data.fileId;

            console.log("Step 6: Check the file status in Alibaba Cloud Model Studio.");
            while (true) {
                const descRes = await this.describeFile(client, workspaceId, fileId);
                const status = descRes.body.data.status;
                console.log(`Current file status: ${status}`);

                if (status === 'INIT') {
                    console.log("The file is waiting to be parsed. Please wait...");
                } else if (status === 'PARSING') {
                    console.log("The file is being parsed. Please wait...");
                } else if (status === 'PARSE_SUCCESS') {
                    console.log("The file is parsed.");
                    break;
                } else {
                    console.error(`Unknown file status: ${status}. Contact technical support.`);
                    return null;
                }
                await this.sleep(5);
            }

            console.log("Step 7: Submit a task to append the file.");
            const indexAddResponse = await this.submitIndexAddDocumentsJob(client, workspaceId, indexId, fileId, sourceType);
            const jobId = indexAddResponse.body.data.id;

            console.log("Step 8: Wait for the append task to complete.");
            while (true) {
                const getJobStatusResponse = await this.getIndexJobStatus(client, workspaceId, jobId, indexId);
                const status = getJobStatusResponse.body.data.status;
                console.log(`Current index job status: ${status}`);
                if (status === 'COMPLETED') {
                    break;
                }
                await this.sleep(5);
            }

            console.log("Step 9: Delete the old file.");
            await this.deleteIndexDocument(client, workspaceId, indexId, oldFileId);

            console.log("The Alibaba Cloud Model Studio knowledge base is updated.");
            return indexId;
        } catch (e) {
            console.error(`An error occurred: ${e.message}`);
            return null;
        }
    }

    /**
     * Wait for a specified number of seconds.
     * @param {number} seconds - The wait time in seconds.
     * @returns {Promise<void>}
     */
    static sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    static async main(args) {
        if (!this.checkEnvironmentVariables()) {
            console.log("Environment variable check failed.");
            return;
        }

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        try {
            const filePath = await new Promise((resolve, reject) => {
                readline.question("Enter the local path of the updated file to upload (for example, /home/user/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx on a Linux system):", (ans) => {
                    ans.trim() ? resolve(ans) : reject(new Error("The path cannot be empty."));
                });
            });
            const indexId = await new Promise((resolve, reject) => {
                // The knowledge base ID is the Data.Id returned by the CreateIndex operation. You can also obtain the ID on the knowledge base page in the Model Studio console.
                readline.question("Enter the ID of the knowledge base to update:", (ans) => {
                    ans.trim() ? resolve(ans) : reject(new Error("The knowledge base ID cannot be empty."));
                });
            });
            const oldFileId = await new Promise((resolve, reject) => {
                // The file ID is the FileId returned by the AddFile operation. You can also obtain the file ID by clicking the ID icon next to the file name on the application data page in the Model Studio console.
                readline.question("Enter the file ID of the file to update:", (ans) => {
                    ans.trim() ? resolve(ans) : reject(new Error("The file ID cannot be empty."));
                });
            });
            const workspaceId = process.env.WORKSPACE_ID;

            const result = await this.updateKnowledgeBase(filePath, workspaceId, indexId, oldFileId);
            if (result) console.log(`Knowledge base ID: ${result}`);
            else console.log("Failed to update the knowledge base.");
        } catch (err) {
            console.error(err.message);
        } finally {
            readline.close();
        }
    }
}

exports.KbUpdate = KbUpdate;
KbUpdate.main(process.argv.slice(2));
```

## C#

```
// The sample code is for reference only. Do not use it in a production environment.
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

using Tea;
using Tea.Utils;

namespace AlibabaCloud.SDK.KnowledgeBase
{
    public class KnowledgeBaseUpdate
    {
        /// <summary>
        /// Check for and prompt to set the required environment variables.
        /// </summary>
        /// <returns>Returns true if all required environment variables are set, false otherwise.</returns>
        public static bool CheckEnvironmentVariables()
        {
            var requiredVars = new Dictionary<string, string>
            {
                { "ALIBABA_CLOUD_ACCESS_KEY_ID", "Alibaba Cloud AccessKey ID" },
                { "ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Alibaba Cloud AccessKey secret" },
                { "WORKSPACE_ID", "Alibaba Cloud Model Studio workspace ID" }
            };

            var missingVars = new List<string>();
            foreach (var entry in requiredVars)
            {
                string value = Environment.GetEnvironmentVariable(entry.Key);
                if (string.IsNullOrEmpty(value))
                {
                    missingVars.Add(entry.Key);
                    Console.WriteLine($"Error: Set the {entry.Key} environment variable ({entry.Value})");
                }
            }

            return missingVars.Count == 0;
        }

        /// <summary>
        /// Calculate the MD5 hash of a file.
        /// </summary>
        /// <param name="filePath">The local path of the file.</param>
        /// <returns>The MD5 hash of the file.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the calculation.</exception>
        public static string CalculateMD5(string filePath)
        {
            using (var md5 = MD5.Create())
            {
                using (var stream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                {
                    byte[] hashBytes = md5.ComputeHash(stream);
                    StringBuilder sb = new StringBuilder();
                    foreach (byte b in hashBytes)
                    {
                        sb.Append(b.ToString("x2"));
                    }
                    return sb.ToString();
                }
            }
        }

        /// <summary>
        /// Get the size of a file in bytes.
        /// </summary>
        /// <param name="filePath">The local path of the file.</param>
        /// <returns>The file size in bytes.</returns>
        public static string GetFileSize(string filePath)
        {
            var file = new FileInfo(filePath);
            return file.Length.ToString();
        }

        /// <summary>
        /// Initialize a client.
        /// </summary>
        /// <returns>The configured client object.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during initialization.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Client CreateClient()
        {
            var config = new AlibabaCloud.OpenApiClient.Models.Config
            {
                AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
            };
            // The following endpoint is a public endpoint. You can change the endpoint as needed.
            config.Endpoint = "bailian.ap-southeast-1.aliyuncs.com";
            return new AlibabaCloud.SDK.Bailian20231229.Client(config);
        }

        /// <summary>
        /// Request a file upload lease.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="categoryId">The category ID.</param>
        /// <param name="fileName">The file name.</param>
        /// <param name="fileMd5">The MD5 hash of the file.</param>
        /// <param name="fileSize">The file size in bytes.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.ApplyFileUploadLeaseResponse ApplyLease(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string categoryId,
            string fileName,
            string fileMd5,
            string fileSize,
            string workspaceId)
        {
            var headers = new Dictionary<string, string>() { };
            var applyFileUploadLeaseRequest = new AlibabaCloud.SDK.Bailian20231229.Models.ApplyFileUploadLeaseRequest
            {
                FileName = fileName,
                Md5 = fileMd5,
                SizeInBytes = fileSize
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.ApplyFileUploadLeaseWithOptions(categoryId, workspaceId, applyFileUploadLeaseRequest, headers, runtime);
        }

        /// <summary>
        /// Upload the file to temporary storage.
        /// </summary>
        /// <param name="preSignedUrl">The URL in the upload lease.</param>
        /// <param name="headers">The request headers for the upload.</param>
        /// <param name="filePath">The local path of the file.</param>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the upload.</exception>
        public static void UploadFile(string preSignedUrl, Dictionary<string, string> headers, string filePath)
        {
            var file = new FileInfo(filePath);
            if (!File.Exists(filePath))
            {
                throw new ArgumentException($"The file does not exist or is not a regular file: {filePath}");
            }

            using (var fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                var url = new Uri(preSignedUrl);
                var conn = (HttpWebRequest)WebRequest.Create(url);
                conn.Method = "PUT";
                conn.ContentType = headers["Content-Type"];
                conn.Headers.Add("X-bailian-extra", headers["X-bailian-extra"]);

                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = fs.Read(buffer, 0, buffer.Length)) > 0)
                {
                    conn.GetRequestStream().Write(buffer, 0, bytesRead);
                }

                using (var response = (HttpWebResponse)conn.GetResponse())
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                    {
                        throw new Exception($"Upload failed: {response.StatusCode}");
                    }
                }
            }
        }

        /// <summary>
        /// Add the file to a category.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="leaseId">The lease ID.</param>
        /// <param name="parser">The parser for the file.</param>
        /// <param name="categoryId">The category ID.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.AddFileResponse AddFile(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string leaseId,
            string parser,
            string categoryId,
            string workspaceId)
        {
            var headers = new Dictionary<string, string>() { };
            var addFileRequest = new AlibabaCloud.SDK.Bailian20231229.Models.AddFileRequest
            {
                LeaseId = leaseId,
                Parser = parser,
                CategoryId = categoryId
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.AddFileWithOptions(workspaceId, addFileRequest, headers, runtime);
        }

        /// <summary>
        /// Query the basic information of the file.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="fileId">The file ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.DescribeFileResponse DescribeFile(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string fileId)
        {
            var headers = new Dictionary<string, string>() { };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.DescribeFileWithOptions(workspaceId, fileId, headers, runtime);
        }

        /// <summary>
        /// Append a parsed file to a document search knowledge base.
        /// </summary>
        /// <param name="client">The client.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <param name="fileId">The file ID.</param>
        /// <param name="sourceType">The data type.</param>
        /// <returns>The response from the Model Studio service.</returns>
        public static AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexAddDocumentsJobResponse SubmitIndexAddDocumentsJob(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string indexId,
            string fileId,
            string sourceType)
        {
            var headers = new Dictionary<string, string>() { };
            var submitIndexAddDocumentsJobRequest = new AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexAddDocumentsJobRequest
            {
                IndexId = indexId,
                DocumentIds = new List<string> { fileId },
                SourceType = sourceType
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.SubmitIndexAddDocumentsJobWithOptions(workspaceId, submitIndexAddDocumentsJobRequest, headers, runtime);
        }

        /// <summary>
        /// Query the status of an index job.
        /// </summary>
        /// <param name="client">The client object.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="jobId">The job ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <returns>The response object from the Model Studio service.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusResponse GetIndexJobStatus(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string jobId,
            string indexId)
        {
            var headers = new Dictionary<string, string>() { };
            var getIndexJobStatusRequest = new AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusRequest
            {
                IndexId = indexId,
                JobId = jobId
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.GetIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
        }

        /// <summary>
        /// Permanently delete one or more files from a specified document search knowledge base.
        /// </summary>
        /// <param name="client">The client.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <param name="fileId">The file ID.</param>
        /// <returns>The response from the Model Studio service.</returns>
        public static AlibabaCloud.SDK.Bailian20231229.Models.DeleteIndexDocumentResponse DeleteIndexDocument(
            AlibabaCloud.SDK.Bailian20231229.Client client,
            string workspaceId,
            string indexId,
            string fileId)
        {
            var headers = new Dictionary<string, string>() { };
            var deleteIndexDocumentRequest = new AlibabaCloud.SDK.Bailian20231229.Models.DeleteIndexDocumentRequest
            {
                IndexId = indexId,
                DocumentIds = new List<string> { fileId }
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.DeleteIndexDocumentWithOptions(workspaceId, deleteIndexDocumentRequest, headers, runtime);
        }

        /// <summary>
        /// Update a knowledge base using the Model Studio service.
        /// </summary>
        /// <param name="filePath">The local path of the updated file.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="indexId">The ID of the knowledge base to update.</param>
        /// <param name="oldFileId">The file ID of the file to update.</param>
        /// <returns>The ID of the knowledge base if the update is successful. Otherwise, null.</returns>
        public static string UpdateKnowledgeBase(string filePath, string workspaceId, string indexId, string oldFileId)
        {
            // Set default values.
            string categoryId = "default";
            string parser = "DASHSCOPE_DOCMIND";
            string sourceType = "DATA_CENTER_FILE";

            try
            {
                Console.WriteLine("Step 1: Create a client.");
                var client = CreateClient();

                Console.WriteLine("Step 2: Prepare file information.");
                string fileName = Path.GetFileName(filePath);
                string fileMd5 = CalculateMD5(filePath);
                string fileSize = GetFileSize(filePath);

                Console.WriteLine("Step 3: Request an upload lease from Alibaba Cloud Model Studio.");
                Bailian20231229.Models.ApplyFileUploadLeaseResponse leaseResponse = ApplyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId);
                string leaseId = leaseResponse.Body.Data.FileUploadLeaseId;
                string uploadUrl = leaseResponse.Body.Data.Param.Url;
                var uploadHeaders = leaseResponse.Body.Data.Param.Headers;

                Console.WriteLine("Step 4: Upload the file to temporary storage.");
                // Install Newtonsoft.Json.
                var uploadHeadersMap = JsonConvert.DeserializeObject<Dictionary<string, string>>(JsonConvert.SerializeObject(uploadHeaders));
                UploadFile(uploadUrl, uploadHeadersMap, filePath);

                Console.WriteLine("Step 5: Add the file to the category.");
                Bailian20231229.Models.AddFileResponse addResponse = AddFile(client, leaseId, parser, categoryId, workspaceId);
                string fileId = addResponse.Body.Data.FileId;

                Console.WriteLine("Step 6: Check the file status in Alibaba Cloud Model Studio.");
                while (true)
                {
                    Bailian20231229.Models.DescribeFileResponse describeResponse = DescribeFile(client, workspaceId, fileId);
                    string status = describeResponse.Body.Data.Status;
                    Console.WriteLine("Current file status: " + status);
                    if ("INIT".Equals(status))
                    {
                        Console.WriteLine("The file is waiting to be parsed. Please wait...");
                    }
                    else if ("PARSING".Equals(status))
                    {
                        Console.WriteLine("The file is being parsed. Please wait...");
                    }
                    else if ("PARSE_SUCCESS".Equals(status))
                    {
                        Console.WriteLine("The file is parsed.");
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Unknown file status: " + status + ". Contact technical support.");
                        return null;
                    }
                    Thread.Sleep(5000);
                }

                Console.WriteLine("Step 7: Submit a task to append the file.");
                Bailian20231229.Models.SubmitIndexAddDocumentsJobResponse indexAddResponse = SubmitIndexAddDocumentsJob(client, workspaceId, indexId, fileId, sourceType);
                string jobId = indexAddResponse.Body.Data.Id;

                Console.WriteLine("Step 8: Wait for the append task to complete.");
                while (true)
                {
                    Bailian20231229.Models.GetIndexJobStatusResponse jobStatusResponse = GetIndexJobStatus(client, workspaceId, jobId, indexId);
                    string status = jobStatusResponse.Body.Data.Status;
                    Console.WriteLine("Current index job status: " + status);
                    if ("COMPLETED".Equals(status))
                    {
                        break;
                    }
                    Thread.Sleep(5000);
                }

                Console.WriteLine("Step 9: Delete the old file.");
                DeleteIndexDocument(client, workspaceId, indexId, oldFileId);

                Console.WriteLine("The Alibaba Cloud Model Studio knowledge base is updated.");
                return indexId;
            }
            catch (Exception e)
            {
                Console.WriteLine("An error occurred: " + e.Message);
                return null;
            }
        }

        /// <summary>
        /// The main function.
        /// </summary>
        public static void Main(string[] args)
        {
            if (!CheckEnvironmentVariables())
            {
                Console.WriteLine("Environment variable check failed.");
                return;
            }

            Console.Write("Enter the local path of the updated file to upload (for example, /home/user/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx on a Linux system):");
            string filePath = Console.ReadLine();

            Console.Write("Enter the ID of the knowledge base to update:"); // This is the Data.Id returned by the CreateIndex operation. You can also obtain the ID on the knowledge base page in the Model Studio console.
            string indexId = Console.ReadLine();

            Console.Write("Enter the file ID of the file to update:"); // This is the FileId returned by the AddFile operation. You can also obtain the file ID by clicking the ID icon next to the file name on the application data page in the Model Studio console.
            string oldFileId = Console.ReadLine();

            string workspaceId = Environment.GetEnvironmentVariable("WORKSPACE_ID");
            string result = UpdateKnowledgeBase(filePath, workspaceId, indexId, oldFileId);
            if (result != null)
            {
                Console.WriteLine("Knowledge base updated. The knowledge base ID is: " + result);
            }
            else
            {
                Console.WriteLine("Failed to update the knowledge base.");
            }
        }
    }
}
```

## Go

```
// The sample code is for reference only. Do not use it in a production environment.
package main

import (
	"bufio"
	"crypto/md5"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"time"

	bailian20231229 "github.com/alibabacloud-go/bailian-20231229/v2/client"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/go-resty/resty/v2"
)

// CheckEnvironmentVariables checks for and prompts to set the required environment variables.
func CheckEnvironmentVariables() bool {
	// The required environment variables and their descriptions.
	requiredVars := map[string]string{
		"ALIBABA_CLOUD_ACCESS_KEY_ID":     "Alibaba Cloud AccessKey ID",
		"ALIBABA_CLOUD_ACCESS_KEY_SECRET": "Alibaba Cloud AccessKey secret",
		"WORKSPACE_ID":                    "Alibaba Cloud Model Studio workspace ID",
	}

	var missingVars []string
	for varName, desc := range requiredVars {
		if os.Getenv(varName) == "" {
			fmt.Printf("Error: Set the %s environment variable (%s)\n", varName, desc)
			missingVars = append(missingVars, varName)
		}
	}

	return len(missingVars) == 0
}

// CalculateMD5 calculates the MD5 hash of a file.
//
// Args:
//   - filePath (string): The local path of the file.
//
// Returns:
//   - string: The MD5 hash of the file.
//   - error: The error message.
func CalculateMD5(filePath string) (_result string, _err error) {
	file, err := os.Open(filePath)
	if err != nil {
		return "", err
	}
	defer file.Close()

	md5Hash := md5.New()
	_, err = io.Copy(md5Hash, file)
	if err != nil {
		return "", err
	}

	return fmt.Sprintf("%x", md5Hash.Sum(nil)), nil
}

// GetFileSize gets the size of a file in bytes.
//
// Args:
//   - filePath (string): The local path of the file.
//
// Returns:
//   - string: The file size in bytes.
//   - error: The error message.
func GetFileSize(filePath string) (_result string, _err error) {
	info, err := os.Stat(filePath)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%d", info.Size()), nil
}

// CreateClient creates and configures a client.
//
// Returns:
//   - *client.Bailian20231229Client: The configured client.
//   - error: The error message.
func CreateClient() (_result *bailian20231229.Client, _err error) {
	config := &openapi.Config{
		AccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
		AccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
	}
	// The following endpoint is a public endpoint. You can change the endpoint as needed.
	config.Endpoint = tea.String("bailian.ap-southeast-1.aliyuncs.com")
	_result = &bailian20231229.Client{}
	_result, _err = bailian20231229.NewClient(config)
	return _result, _err
}

// ApplyLease requests a file upload lease from the Model Studio service.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - categoryId (string): The category ID.
//   - fileName (string): The file name.
//   - fileMD5 (string): The MD5 hash of the file.
//   - fileSize (string): The file size in bytes.
//   - workspaceId (string): The workspace ID.
//
// Returns:
//   - *bailian20231229.ApplyFileUploadLeaseResponse: The response from the Model Studio service.
//   - error: The error message.
func ApplyLease(client *bailian20231229.Client, categoryId, fileName, fileMD5 string, fileSize string, workspaceId string) (_result *bailian20231229.ApplyFileUploadLeaseResponse, _err error) {
	headers := make(map[string]*string)
	applyFileUploadLeaseRequest := &bailian20231229.ApplyFileUploadLeaseRequest{
		FileName:    tea.String(fileName),
		Md5:         tea.String(fileMD5),
		SizeInBytes: tea.String(fileSize),
	}
	runtime := &util.RuntimeOptions{}
	return client.ApplyFileUploadLeaseWithOptions(tea.String(categoryId), tea.String(workspaceId), applyFileUploadLeaseRequest, headers, runtime)
}

// UploadFile uploads the file to the Model Studio service.
//
// Args:
//   - preSignedUrl (string): The URL in the upload lease.
//   - headers (map[string]string): The request headers for the upload.
//   - filePath (string): The local path of the file.
func UploadFile(preSignedUrl string, headers map[string]string, filePath string) error {
	file, err := os.Open(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	body, err := io.ReadAll(file)
	if err != nil {
		return err
	}

	client := resty.New()
	uploadHeaders := map[string]string{
		"X-bailian-extra": headers["X-bailian-extra"],
		"Content-Type":    headers["Content-Type"],
	}

	resp, err := client.R().
		SetHeaders(uploadHeaders).
		SetBody(body).
		Put(preSignedUrl)

	if err != nil {
		return err
	}

	if resp.IsError() {
		return fmt.Errorf("HTTP error: %d", resp.StatusCode())
	}

	return nil
}

// AddFile adds the file to a specified category in the Model Studio service.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - leaseId (string): The lease ID.
//   - parser (string): The parser for the file.
//   - categoryId (string): The category ID.
//   - workspaceId (string): The workspace ID.
//
// Returns:
//   - *bailian20231229.AddFileResponse: The response from the Model Studio service.
//   - error: The error message.
func AddFile(client *bailian20231229.Client, leaseId, parser, categoryId, workspaceId string) (_result *bailian20231229.AddFileResponse, _err error) {
	headers := make(map[string]*string)
	addFileRequest := &bailian20231229.AddFileRequest{
		LeaseId:    tea.String(leaseId),
		Parser:     tea.String(parser),
		CategoryId: tea.String(categoryId),
	}
	runtime := &util.RuntimeOptions{}
	return client.AddFileWithOptions(tea.String(workspaceId), addFileRequest, headers, runtime)
}

// DescribeFile gets the basic information of the file.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - fileId (string): The file ID.
//
// Returns:
//   - *bailian20231229.DescribeFileResponse: The response from the Model Studio service.
//   - error: The error message.
func DescribeFile(client *bailian20231229.Client, workspaceId, fileId string) (_result *bailian20231229.DescribeFileResponse, _err error) {
	headers := make(map[string]*string)
	runtime := &util.RuntimeOptions{}
	return client.DescribeFileWithOptions(tea.String(workspaceId), tea.String(fileId), headers, runtime)
}

// SubmitIndexAddDocumentsJob appends a parsed file to a document search knowledge base.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//   - fileId(string): The file ID.
//   - sourceType(string): The data type.
//
// Returns:
//   - *bailian20231229.SubmitIndexAddDocumentsJobResponse: The response from the Model Studio service.
//   - error: The error message.
func SubmitIndexAddDocumentsJob(client *bailian20231229.Client, workspaceId, indexId, fileId, sourceType string) (_result *bailian20231229.SubmitIndexAddDocumentsJobResponse, _err error) {
	headers := make(map[string]*string)
	submitIndexAddDocumentsJobRequest := &bailian20231229.SubmitIndexAddDocumentsJobRequest{
		IndexId:     tea.String(indexId),
		SourceType:  tea.String(sourceType),
		DocumentIds: []*string{tea.String(fileId)},
	}
	runtime := &util.RuntimeOptions{}
	return client.SubmitIndexAddDocumentsJobWithOptions(tea.String(workspaceId), submitIndexAddDocumentsJobRequest, headers, runtime)
}

// GetIndexJobStatus queries the status of an index job.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - jobId (string): The job ID.
//   - indexId (string): The knowledge base ID.
//
// Returns:
//   - *bailian20231229.GetIndexJobStatusResponse: The response from the Model Studio service.
//   - error: The error message.
func GetIndexJobStatus(client *bailian20231229.Client, workspaceId, jobId, indexId string) (_result *bailian20231229.GetIndexJobStatusResponse, _err error) {
	headers := make(map[string]*string)
	getIndexJobStatusRequest := &bailian20231229.GetIndexJobStatusRequest{
		JobId:   tea.String(jobId),
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.GetIndexJobStatusWithOptions(tea.String(workspaceId), getIndexJobStatusRequest, headers, runtime)
}

// DeleteIndexDocument permanently deletes one or more files from a specified document search knowledge base.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//   - fileId (string): The file ID.
//
// Returns:
//   - *bailian20231229.DeleteIndexDocumentResponse: The response from the Model Studio service.
//   - error: The error message.
func DeleteIndexDocument(client *bailian20231229.Client, workspaceId, indexId, fileId string) (*bailian20231229.DeleteIndexDocumentResponse, error) {
	headers := make(map[string]*string)
	deleteIndexDocumentRequest := &bailian20231229.DeleteIndexDocumentRequest{
		IndexId:     tea.String(indexId),
		DocumentIds: []*string{tea.String(fileId)},
	}
	runtime := &util.RuntimeOptions{}
	return client.DeleteIndexDocumentWithOptions(tea.String(workspaceId), deleteIndexDocumentRequest, headers, runtime)
}

// UpdateKnowledgeBase updates a knowledge base using the Model Studio service.
//
// Args:
//   - filePath (string): The local path of the updated file.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The ID of the knowledge base to update.
//   - oldFileId (string): The file ID of the file to update.
//
// Returns:
//   - string: The ID of the knowledge base if the update is successful. Otherwise, an empty string.
//   - error: The error message.
func UpdateKnowledgeBase(filePath, workspaceId, indexId, oldFileId string) (_result string, _err error) {
	// Set default values.
	categoryId := "default"
	parser := "DASHSCOPE_DOCMIND"
	sourceType := "DATA_CENTER_FILE"

	fmt.Println("Step 1: Create a client.")
	client, err := CreateClient()
	if err != nil {
		return "", err
	}

	fmt.Println("Step 2: Prepare file information.")
	fileName := filepath.Base(filePath)
	fileMD5, err := CalculateMD5(filePath)
	if err != nil {
		return "", err
	}
	fileSizeStr, err := GetFileSize(filePath)
	if err != nil {
		return "", err
	}

	fmt.Println("Step 3: Request an upload lease from Alibaba Cloud Model Studio.")
	leaseResponse, err := ApplyLease(client, categoryId, fileName, fileMD5, fileSizeStr, workspaceId)
	if err != nil {
		return "", err
	}

	leaseId := tea.StringValue(leaseResponse.Body.Data.FileUploadLeaseId)
	uploadURL := tea.StringValue(leaseResponse.Body.Data.Param.Url)
	uploadHeaders := leaseResponse.Body.Data.Param.Headers

	jsonData, err := json.Marshal(uploadHeaders)
	if err != nil {
		return "", err
	}

	var uploadHeadersMap map[string]string
	err = json.Unmarshal(jsonData, &uploadHeadersMap)
	if err != nil {
		return "", err
	}

	fmt.Println("Step 4: Upload the file to temporary storage.")
	err = UploadFile(uploadURL, uploadHeadersMap, filePath)
	if err != nil {
		return "", err
	}

	fmt.Println("Step 5: Add the file to the category.")
	addResponse, err := AddFile(client, leaseId, parser, categoryId, workspaceId)
	if err != nil {
		return "", err
	}
	fileId := tea.StringValue(addResponse.Body.Data.FileId)

	fmt.Println("Step 6: Check the file status in Alibaba Cloud Model Studio.")
	for {
		describeResponse, err := DescribeFile(client, workspaceId, fileId)
		if err != nil {
			return "", err
		}

		status := tea.StringValue(describeResponse.Body.Data.Status)
		fmt.Printf("Current file status: %s\n", status)

		if status == "INIT" {
			fmt.Println("The file is waiting to be parsed. Please wait...")
		} else if status == "PARSING" {
			fmt.Println("The file is being parsed. Please wait...")
		} else if status == "PARSE_SUCCESS" {
			fmt.Println("The file is parsed.")
			break
		} else {
			fmt.Printf("Unknown file status: %s. Contact technical support.\n", status)
			return "", fmt.Errorf("unknown document status: %s", status)
		}
		time.Sleep(5 * time.Second)
	}

	// Submit a task to append the file.
	fmt.Println("Step 7: Submit a task to append the file.")
	indexAddResponse, err := SubmitIndexAddDocumentsJob(client, workspaceId, indexId, fileId, sourceType)
	if err != nil {
		return "", err
	}
	jobId := tea.StringValue(indexAddResponse.Body.Data.Id)

	// Wait for the task to complete.
	fmt.Println("Step 8: Wait for the append task to complete.")
	for {
		getIndexJobStatusResponse, err := GetIndexJobStatus(client, workspaceId, jobId, indexId)
		if err != nil {
			return "", err
		}

		status := tea.StringValue(getIndexJobStatusResponse.Body.Data.Status)
		fmt.Printf("Current index job status: %s\n", status)

		if status == "COMPLETED" {
			break
		}
		time.Sleep(5 * time.Second)
	}

	// Delete the old file.
	fmt.Println("Step 9: Delete the old file.")
	_, err = DeleteIndexDocument(client, workspaceId, indexId, oldFileId)
	if err != nil {
		return "", err
	}

	fmt.Println("The Alibaba Cloud Model Studio knowledge base is updated.")
	return indexId, nil
}

// The main function.
func main() {
	if !CheckEnvironmentVariables() {
		fmt.Println("Environment variable check failed.")
		return
	}
	// Create a scanner to read input.
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the local path of the updated file to upload (for example, /home/user/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx on a Linux system):")
	filePath, _ := reader.ReadString('\n')
	filePath = strings.TrimSpace(filePath)

	fmt.Print("Enter the ID of the knowledge base to update:") // This is the Data.Id returned by the CreateIndex operation. You can also obtain the ID on the knowledge base page in the Model Studio console.
	indexId, _ := reader.ReadString('\n')
	indexId = strings.TrimSpace(indexId)

	fmt.Print("Enter the file ID of the file to update:") // This is the FileId returned by the AddFile operation. You can also obtain the file ID by clicking the ID icon next to the file name on the application data page in the Model Studio console.
	oldFileId, _ := reader.ReadString('\n')
	oldFileId = strings.TrimSpace(oldFileId)

	workspaceId := os.Getenv("WORKSPACE_ID")
	result, err := UpdateKnowledgeBase(filePath, workspaceId, indexId, oldFileId)
	if err != nil {
		fmt.Printf("An error occurred: %v\n", err)
		return
	}

	if result != "" {
		fmt.Printf("Knowledge base updated. The knowledge base ID is: %s\n", result)
	} else {
		fmt.Println("Failed to update the knowledge base.")
	}
}
```

## Managing knowledge bases

**Important**

-   Before you call this example, you must complete all the preceding [prerequisites](#a4a15bd543can). RAM users must also [obtain the AliyunBailianDataFullAccess policy](/help/en/model-studio/grant-data-access-permission-to-ram-user).
    
-   If you use an IDE or other development plugins, you must configure the `ALIBABA_CLOUD_ACCESS_KEY_ID`, `ALIBABA_CLOUD_ACCESS_KEY_SECRET`, and `WORKSPACE_ID` variables in your development environment.
    

## Python

```
# The sample code is for reference only. Do not use it directly in a production environment.
import os

from alibabacloud_bailian20231229 import models as bailian_20231229_models
from alibabacloud_bailian20231229.client import Client as bailian20231229Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_tea_util import models as util_models
from alibabacloud_tea_util.client import Client as UtilClient


def check_environment_variables():
    """Checks for and prompts to set the required environment variables."""
    required_vars = {
        'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Alibaba Cloud AccessKey ID',
        'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Alibaba Cloud AccessKey secret',
        'WORKSPACE_ID': 'Alibaba Cloud Model Studio workspace ID'
    }
    missing_vars = []
    for var, description in required_vars.items():
        if not os.environ.get(var):
            missing_vars.append(var)
            print(f"Error: Set the {var} environment variable ({description})")

    return len(missing_vars) == 0


# Create a client.
def create_client() -> bailian20231229Client:
    """
    Creates and configures a client.

    Returns:
        bailian20231229Client: The configured client.
    """
    config = open_api_models.Config(
        access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
    )
    # The following endpoint is a public endpoint. You can change the endpoint as needed.
    config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com'
    return bailian20231229Client(config)


# List knowledge bases.
def list_indices(client, workspace_id):
    """
    Gets the details of one or more knowledge bases in a specified workspace.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    list_indices_request = bailian_20231229_models.ListIndicesRequest()
    runtime = util_models.RuntimeOptions()
    return client.list_indices_with_options(workspace_id, list_indices_request, headers, runtime)


# Delete a knowledge base.
def delete_index(client, workspace_id, index_id):
    """
    Permanently deletes the specified knowledge base.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    delete_index_request = bailian_20231229_models.DeleteIndexRequest(
        index_id=index_id
    )
    runtime = util_models.RuntimeOptions()
    return client.delete_index_with_options(workspace_id, delete_index_request, headers, runtime)


def main():
    if not check_environment_variables():
        print("Environment variable verification failed.")
        return
    try:
        start_option = input(
            "Select an operation to perform:\n1. List knowledge bases\n2. Delete a knowledge base\nEnter an option (1 or 2):")
        if start_option == '1':
            # List knowledge bases.
            print("\nList knowledge bases")
            workspace_id = os.environ.get('WORKSPACE_ID')
            client = create_client()
            list_indices_response = list_indices(client, workspace_id)
            print(UtilClient.to_jsonstring(list_indices_response.body.data))
        elif start_option == '2':
            print("\nDelete a knowledge base")
            workspace_id = os.environ.get('WORKSPACE_ID')
            index_id = input("Enter the knowledge base ID:")  # This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
            # Confirm before deletion.
            while True:
                confirm = input(f"Are you sure you want to permanently delete the knowledge base {index_id}? (y/n): ").strip().lower()
                if confirm == 'y':
                    break
                elif confirm == 'n':
                    print("The deletion is canceled.")
                    return
                else:
                    print("Invalid input. Enter y or n.")
            client = create_client()
            resp = delete_index(client, workspace_id, index_id)
            if resp.body.status == 200:
                print(f"Knowledge base {index_id} is deleted.")
            else:
                err_info = UtilClient.to_jsonstring(resp.body)
                print(f"An error occurred: {err_info}")
        else:
            print("Invalid option. The program exits.")
            return
    except Exception as e:
        print(f"An error occurred: {e}")
        return


if __name__ == '__main__':
    main()
```

## Java

```
// The sample code is for reference only. Do not use it directly in a production environment.
import com.aliyun.bailian20231229.models.DeleteIndexResponse;
import com.aliyun.bailian20231229.models.ListIndicesResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

public class KnowledgeBaseManage {

    /**
     * Checks for and prompts to set the required environment variables.
     *
     * @return true if all required environment variables are set. Otherwise, returns false.
     */
    public static boolean checkEnvironmentVariables() {
        Map<String, String> requiredVars = new HashMap<>();
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_ID", "Alibaba Cloud AccessKey ID");
        requiredVars.put("ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Alibaba Cloud AccessKey secret");
        requiredVars.put("WORKSPACE_ID", "Alibaba Cloud Model Studio workspace ID");

        List<String> missingVars = new ArrayList<>();
        for (Map.Entry<String, String> entry : requiredVars.entrySet()) {
            String value = System.getenv(entry.getKey());
            if (value == null || value.isEmpty()) {
                missingVars.add(entry.getKey());
                System.out.println("Error: Set the " + entry.getKey() + " environment variable (" + entry.getValue() + ")");
            }
        }

        return missingVars.isEmpty();
    }

    /**
     * Creates and configures a client.
     *
     * @return The configured client.
     */
    public static com.aliyun.bailian20231229.Client createClient() throws Exception {
        com.aliyun.credentials.Client credential = new com.aliyun.credentials.Client();
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                .setCredential(credential);
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = "bailian.ap-southeast-1.aliyuncs.com";
        return new com.aliyun.bailian20231229.Client(config);
    }

    /**
     * Gets the details of one or more knowledge bases in a specified workspace.
     *
     * @param client      The client.
     * @param workspaceId The workspace ID.
     * @return The response from the Model Studio service.
     */
    public static ListIndicesResponse listIndices(com.aliyun.bailian20231229.Client client, String workspaceId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.ListIndicesRequest listIndicesRequest = new com.aliyun.bailian20231229.models.ListIndicesRequest();
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.listIndicesWithOptions(workspaceId, listIndicesRequest, headers, runtime);
    }

    /**
     * Permanently deletes the specified knowledge base.
     *
     * @param client      The client.
     * @param workspaceId The workspace ID.
     * @param indexId     The knowledge base ID.
     * @return The response from the Model Studio service.
     */
    public static DeleteIndexResponse deleteIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId) throws Exception {
        Map<String, String> headers = new HashMap<>();
        com.aliyun.bailian20231229.models.DeleteIndexRequest deleteIndexRequest = new com.aliyun.bailian20231229.models.DeleteIndexRequest();
        deleteIndexRequest.setIndexId(indexId);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        return client.deleteIndexWithOptions(workspaceId, deleteIndexRequest, headers, runtime);
    }

    /**
     * The main function.
     */
    public static void main(String[] args) {
        if (!checkEnvironmentVariables()) {
            System.out.println("Environment variable verification failed.");
            return;
        }

        try {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Select an operation to perform:\n1. List knowledge bases\n2. Delete a knowledge base\nEnter an option (1 or 2):");
            String startOption = scanner.nextLine();
            com.aliyun.bailian20231229.Client client = createClient();
            if (startOption.equals("1")) {
                // List knowledge bases.
                System.out.println("\nList knowledge bases");
                String workspaceId = System.getenv("WORKSPACE_ID");
                ListIndicesResponse response = listIndices(client, workspaceId);
                // Install jackson-databind to convert the response to a JSON string.
                ObjectMapper mapper = new ObjectMapper();
                String result = mapper.writeValueAsString(response.getBody().getData());
                System.out.println(result);
            } else if (startOption.equals("2")) {
                System.out.println("\nDelete a knowledge base");
                String workspaceId = System.getenv("WORKSPACE_ID");
                System.out.print("Enter the knowledge base ID:"); // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
                String indexId = scanner.nextLine();
                // Confirm before deletion.
                boolean confirm = false;
                while (!confirm) {
                    System.out.print("Are you sure you want to permanently delete the knowledge base " + indexId + "? (y/n): ");
                    String input = scanner.nextLine().trim().toLowerCase();
                    if (input.equals("y")) {
                        confirm = true;
                    } else if (input.equals("n")) {
                        System.out.println("The deletion is canceled.");
                        return;
                    } else {
                        System.out.println("Invalid input. Enter y or n.");
                    }
                }
                DeleteIndexResponse resp = deleteIndex(client, workspaceId, indexId);
                if (resp.getBody().getStatus().equals("200")) {
                    System.out.println("Knowledge base " + indexId + " is deleted.");
                } else {
                    ObjectMapper mapper = new ObjectMapper();
                    System.out.println("An error occurred: " + mapper.writeValueAsString(resp.getBody()));
                }
            } else {
                System.out.println("Invalid option. The program exits.");
            }
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## PHP

```
<?php
// This is a sample code. Do not use it in a production environment.
namespace AlibabaCloud\SDK\KnowledgeBase;

use AlibabaCloud\Dara\Models\RuntimeOptions;
use AlibabaCloud\SDK\Bailian\V20231229\Bailian;
use AlibabaCloud\SDK\Bailian\V20231229\Models\DeleteIndexRequest;
use AlibabaCloud\SDK\Bailian\V20231229\Models\ListIndexDocumentsRequest;
use \Exception;

use Darabonba\OpenApi\Models\Config;

class KnowledgeBaseManage {

    /**
    * Checks for and prompts to set the required environment variables.
    *
    * @return bool Returns true if all required environment variables are set. Otherwise, returns false.
    */
    public static function checkEnvironmentVariables() {
        $requiredVars = [
            'ALIBABA_CLOUD_ACCESS_KEY_ID' => 'Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET' => 'Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID' => 'Alibaba Cloud Model Studio workspace ID'
        ];
        $missingVars = [];
        foreach ($requiredVars as $var => $description) {
            if (!getenv($var)) {
                $missingVars[] = $var;
                echo "Error: Please set the $var environment variable ($description)\n";
            }
        }
        return count($missingVars) === 0;
    }

    /**
     * Initializes the client.
     *
     * @return Bailian The configured client object.
     */
    public static function createClient(){
        $config = new Config([
            "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), 
            "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
        ]);
        // The following endpoint is a public endpoint of Alibaba Cloud. You can change the endpoint as needed.
        $config->endpoint = 'bailian.ap-southeast-1.aliyuncs.com';
        return new Bailian($config);
    }

     /**
     * Retrieves the details of one or more knowledge bases in a specified workspace.
     *
     * @param Bailian $client The client object.
     * @param string $workspaceId The workspace ID.
     * @return ListIndicesResponse The response from the Alibaba Cloud Model Studio service.
     * @throws Exception
     */
    public static function listIndices($client, $workspaceId) {
        $headers = [];
        $listIndexDocumentsRequest = new ListIndexDocumentsRequest([]);
        $runtime = new RuntimeOptions([]);
        // Call the client method.
        return $client->listIndicesWithOptions($workspaceId, $listIndexDocumentsRequest, $headers, $runtime);
    }

    /**
     * Permanently deletes the specified knowledge base.
     *
     * @param Bailian $client The client object.
     * @param string $workspaceId The workspace ID.
     * @param string $indexId The knowledge base ID.
     * @return mixed The response from the Alibaba Cloud Model Studio service.
     * @throws Exception
     */
    public static function deleteIndex($client, $workspaceId, $indexId) {
        $headers = [];
        $deleteIndexRequest = new DeleteIndexRequest([
            "indexId" => $indexId
        ]);
        $runtime = new RuntimeOptions([]);
        return $client->deleteIndexWithOptions($workspaceId, $deleteIndexRequest, $headers, $runtime);
    }

    /**
     * The main function.
     */
    public static function main($args) {
        if (!self::checkEnvironmentVariables()) {
            echo "Environment variable verification failed.\n";
            return;
        }

        try {
            echo "Select an operation:\n1. View knowledge bases\n2. Delete a knowledge base\nPlease enter an option (1 or 2): ";
            $startOption = trim(fgets(STDIN));
            $client = self::createClient();
            if ($startOption === "1") {
                // View knowledge bases.
                echo "\nView knowledge bases\n";
                $workspaceId = getenv("WORKSPACE_ID");
                $response = self::listIndices($client, $workspaceId);
                // Convert the response to a JSON string.
                $result = json_encode($response->body->data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                echo $result . "\n";
            } elseif ($startOption === "2") {
                echo "\nDelete a knowledge base\n";
                $workspaceId = getenv("WORKSPACE_ID");
                $indexId = readline("Enter the knowledge base ID: "); // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the Knowledge Base page in the Alibaba Cloud Model Studio console.
                // Double-check before deletion.
                while (true) {
                    $confirm = strtolower(trim(readline("Are you sure you want to permanently delete the knowledge base $indexId? (y/n): ")));
                    if ($confirm === 'y') {
                        break;
                    } elseif ($confirm === 'n') {
                        echo "The deletion is canceled.\n";
                        return;
                    } else {
                        echo "Invalid input. Please enter y or n.\n";
                    }
                }
                $response = self::deleteIndex($client, $workspaceId, $indexId);
                if ($response->body->status == "200")
                    echo "Knowledge base " . $indexId . " deleted successfully!\n";
                else 
                    echo "An error occurred: " . json_encode($response->body) . "\n";
            } else {
                echo "Invalid option. The program exits.\n";
            }
        } catch (Exception $e) {
            echo "An error occurred: " . $e->getMessage() . "\n";
        }
    }
}
// Assume that autoload.php is in the parent directory of the current code file. Adjust the path based on your project structure.
$path = __DIR__ . \DIRECTORY_SEPARATOR . '..' . \DIRECTORY_SEPARATOR . 'vendor' . \DIRECTORY_SEPARATOR . 'autoload.php';
if (file_exists($path)) {
    require_once $path;
}
KnowledgeBaseManage::main(array_slice($argv, 1));
```

## Node.js

```
// The sample code is for reference only. Do not use it directly in a production environment.
'use strict';

const bailian20231229 = require('@alicloud/bailian20231229');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');
const Tea = require('@alicloud/tea-typescript');

class KbManage {

    /**
     * Checks for and prompts to set the required environment variables.
     * @returns {boolean} - Returns true if all required environment variables are set. Otherwise, returns false.
     */
    static checkEnvironmentVariables() {
        const requiredVars = {
            'ALIBABA_CLOUD_ACCESS_KEY_ID': 'Alibaba Cloud AccessKey ID',
            'ALIBABA_CLOUD_ACCESS_KEY_SECRET': 'Alibaba Cloud AccessKey secret',
            'WORKSPACE_ID': 'Alibaba Cloud Model Studio workspace ID'
        };

        const missing = [];
        for (const [varName, desc] of Object.entries(requiredVars)) {
            if (!process.env[varName]) {
                console.error(`Error: Set the ${varName} environment variable (${desc})`);
                missing.push(varName);
            }
        }

        return missing.length === 0;
    }

    /**
     * Creates and configures a client.
     * @return Client
     * @throws Exception
     */
    static createClient() {
        const config = new OpenApi.Config({
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET
        });
        // The following endpoint is a public endpoint. You can change the endpoint as needed.
        config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com';
        return new bailian20231229.default(config);
    }

    /**
     * Gets the details of one or more knowledge bases in a specified workspace.
     * @param {bailian20231229.Client} client The client.
     * @param {string} workspaceId The workspace ID.
     * @returns {Promise<bailian20231229.ListIndicesResponse>} The response from the Model Studio service.
     */
    static async listIndices(client, workspaceId) {
        const headers = {};
        const listIndicesRequest = new bailian20231229.ListIndicesRequest();
        const runtime = new Util.RuntimeOptions({});
        return await client.listIndicesWithOptions(workspaceId, listIndicesRequest, headers, runtime);
    }

    /**
     * Permanently deletes the specified knowledge base.
     * @param {bailian20231229.Client} client The client.
     * @param {string} workspaceId The workspace ID.
     * @param {string} indexId The knowledge base ID.
     * @returns {Promise<bailian20231229.DeleteIndexResponse>} The response from the Model Studio service.
     */
    static async deleteIndex(client, workspaceId, indexId) {
        const headers = {};
        const deleteIndexRequest = new bailian20231229.DeleteIndexRequest({
            indexId
        });
        const runtime = new Util.RuntimeOptions({});
        return await client.deleteIndexWithOptions(workspaceId, deleteIndexRequest, headers, runtime);
    }

    /**
     * Uses the Model Studio service to perform operations (list or delete knowledge bases).
     */
    static async main(args) {
        if (!this.checkEnvironmentVariables()) {
            console.log("Environment variable verification failed.");
            return;
        }

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        try {
            const startOption = await new Promise((resolve) => {
                readline.question("Select an operation to perform:\n1. List knowledge bases\n2. Delete a knowledge base\nEnter an option (1 or 2):", (ans) => {
                    resolve(ans.trim());
                });
            });

            if (startOption === '1') {
                console.log("\nList knowledge bases");
                const workspaceId = process.env.WORKSPACE_ID;
                const client = this.createClient();
                const response = await this.listIndices(client, workspaceId);
                console.log(JSON.stringify(response.body.data));
            } else if (startOption === '2') {
                console.log("\nDelete a knowledge base");
                const workspaceId = process.env.WORKSPACE_ID;
                const indexId = await new Promise((resolve) => {
                    readline.question("Enter the knowledge base ID:", (ans) => { // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
                        resolve(ans.trim());
                    });
                });
                // Confirm before deletion.
                let confirm = '';
                while (confirm !== 'y' && confirm !== 'n') {
                    confirm = (await new Promise((resolve) => {
                        readline.question(`Are you sure you want to permanently delete the knowledge base ${indexId}? (y/n): `, (ans) => {
                            resolve(ans.trim().toLowerCase());
                        });
                    })).toLowerCase();
                    if (confirm === 'n') {
                        console.log("The deletion is canceled.");
                        return;
                    } else if (confirm !== 'y') {
                        console.log("Invalid input. Enter y or n.");
                    }
                }
                const client = this.createClient();
                const resp = await this.deleteIndex(client, workspaceId, indexId);
                if (resp.body.status == '200')
                    console.log(`Knowledge base ${indexId} is deleted.`);
                else {
                    const errInfo = JSON.stringify(resp.body);
                    console.error(`An error occurred: ${errInfo}`)
                }
            } else {
                console.log("Invalid option. The program exits.");
            }
        } catch (err) {
            console.error(`An error occurred: ${err.message}`);
        } finally {
            readline.close();
        }
    }
}

exports.KbManage = KbManage;
KbManage.main(process.argv.slice(2));
```

## C#

```
// The sample code is for reference only. Do not use it directly in a production environment.
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Text;

using Newtonsoft.Json;
using Tea;
using Tea.Utils;


namespace AlibabaCloud.SDK.KnowledgeBase
{
    public class KnowledgeBaseManage
    {
        /// <summary>
        /// Checks for and prompts to set the required environment variables.
        /// </summary>
        /// <returns>Returns true if all required environment variables are set. Otherwise, returns false.</returns>
        public static bool CheckEnvironmentVariables()
        {
            var requiredVars = new Dictionary<string, string>
            {
                { "ALIBABA_CLOUD_ACCESS_KEY_ID", "Alibaba Cloud AccessKey ID" },
                { "ALIBABA_CLOUD_ACCESS_KEY_SECRET", "Alibaba Cloud AccessKey secret" },
                { "WORKSPACE_ID", "Alibaba Cloud Model Studio workspace ID" }
            };

            var missingVars = new List<string>();
            foreach (var entry in requiredVars)
            {
                string value = Environment.GetEnvironmentVariable(entry.Key);
                if (string.IsNullOrEmpty(value))
                {
                    missingVars.Add(entry.Key);
                    Console.WriteLine($"Error: Set the {entry.Key} environment variable ({entry.Value})");
                }
            }

            return missingVars.Count == 0;
        }

        /// <summary>
        /// Initializes a client.
        /// </summary>
        /// <returns>The configured client object.</returns>
        /// <exception cref="Exception">An exception is thrown if an error occurs during initialization.</exception>
        public static AlibabaCloud.SDK.Bailian20231229.Client CreateClient()
        {
            var config = new AlibabaCloud.OpenApiClient.Models.Config
            {
                AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
            };
            // The following endpoint is a public endpoint. You can change the endpoint as needed.
            config.Endpoint = "bailian.ap-southeast-1.aliyuncs.com";
            return new AlibabaCloud.SDK.Bailian20231229.Client(config);
        }

        /// <summary>
        /// Gets the details of one or more knowledge bases in a specified workspace.
        /// </summary>
        /// <param name="client">The client.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <returns>The response from the Model Studio service.</returns>
        public static AlibabaCloud.SDK.Bailian20231229.Models.ListIndicesResponse ListIndices(AlibabaCloud.SDK.Bailian20231229.Client client, string workspaceId)
        {
            var headers = new Dictionary<string, string>() { };
            var listIndicesRequest = new Bailian20231229.Models.ListIndicesRequest();
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.ListIndicesWithOptions(workspaceId, listIndicesRequest, headers, runtime);
        }

        /// <summary>
        /// Permanently deletes the specified knowledge base.
        /// </summary>
        /// <param name="client">The client.</param>
        /// <param name="workspaceId">The workspace ID.</param>
        /// <param name="indexId">The knowledge base ID.</param>
        /// <returns>The response from the Model Studio service.</returns>
        public static AlibabaCloud.SDK.Bailian20231229.Models.DeleteIndexResponse DeleteIndex(AlibabaCloud.SDK.Bailian20231229.Client client, string workspaceId, string indexId)
        {
            var headers = new Dictionary<string, string>() { };
            var deleteIndexRequest = new Bailian20231229.Models.DeleteIndexRequest
            {
                IndexId = indexId
            };
            var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
            return client.DeleteIndexWithOptions(workspaceId, deleteIndexRequest, headers, runtime);
        }

        /// <summary>
        /// The main function.
        /// </summary>
        public static void Main(string[] args)
        {
            if (!CheckEnvironmentVariables())
            {
                Console.WriteLine("Environment variable verification failed.");
                return;
            }
            try
            {
                Console.Write("Select an operation to perform:\n1. List knowledge bases\n2. Delete a knowledge base\nEnter an option (1 or 2):");
                string startOption = Console.ReadLine();
                if (startOption == "1")
                {
                    Console.WriteLine("\nList knowledge bases");
                    string workspaceId = Environment.GetEnvironmentVariable("WORKSPACE_ID");
                    Bailian20231229.Client client = CreateClient();
                    Bailian20231229.Models.ListIndicesResponse listIndicesResponse = ListIndices(client, workspaceId);
                    // Install Newtonsoft.Json to convert the response object to a JSON string for output.
                    var json = JsonConvert.SerializeObject(listIndicesResponse.Body.Data, Formatting.Indented);
                    Console.WriteLine(json);
                }
                else if (startOption == "2")
                {
                    Console.WriteLine("\nDelete a knowledge base");
                    string workspaceId = Environment.GetEnvironmentVariable("WORKSPACE_ID");
                    Console.Write("Enter the knowledge base ID:"); // This is the Data.Id returned by the CreateIndex operation. You can also obtain it from the knowledge base page in the Model Studio console.
                    string indexId = Console.ReadLine();
                    // Confirm before deletion.
                    while (true)
                    {
                        Console.Write($"Are you sure you want to permanently delete the knowledge base {indexId}? (y/n): ");
                        string confirm = Console.ReadLine()?.ToLower();
                        if (confirm == "y")
                        {
                            break;
                        }
                        else if (confirm == "n")
                        {
                            Console.WriteLine("The deletion is canceled.");
                            return;
                        }
                        else
                        {
                            Console.WriteLine("Invalid input. Enter y or n.");
                        }
                    }
                    Bailian20231229.Client client = CreateClient();
                    Bailian20231229.Models.DeleteIndexResponse resp = DeleteIndex(client, workspaceId, indexId);
                    if (resp.Body.Status == "200")
                    {
                        Console.WriteLine($"Knowledge base {indexId} is deleted.");
                    }
                    else
                    {
                        var mapper = new JsonSerializerSettings { Formatting = Formatting.Indented };
                        string errInfo = JsonConvert.SerializeObject(resp.Body, mapper);
                        Console.WriteLine($"An error occurred: {errInfo}");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid option. The program exits.");
                    return;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("An error occurred: " + e.Message);
            }
        }
    }
}
```

## Go

```
// The sample code is for reference only. Do not use it directly in a production environment.
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	bailian20231229 "github.com/alibabacloud-go/bailian-20231229/v2/client"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
)

// checkEnvironmentVariables checks for and prompts to set the required environment variables.
func checkEnvironmentVariables() bool {
	// The required environment variables and their descriptions.
	requiredVars := map[string]string{
		"ALIBABA_CLOUD_ACCESS_KEY_ID":     "Alibaba Cloud AccessKey ID",
		"ALIBABA_CLOUD_ACCESS_KEY_SECRET": "Alibaba Cloud AccessKey secret",
		"WORKSPACE_ID":                    "Alibaba Cloud Model Studio workspace ID",
	}

	var missingVars []string
	for varName, desc := range requiredVars {
		if os.Getenv(varName) == "" {
			fmt.Printf("Error: Set the %s environment variable (%s)\n", varName, desc)
			missingVars = append(missingVars, varName)
		}
	}

	return len(missingVars) == 0
}

// createClient creates and configures a client.
//
// Returns:
//   - *client.Bailian20231229Client: The configured client.
func createClient() (_result *bailian20231229.Client, _err error) {
	config := &openapi.Config{
		AccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
		AccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
	}
	// The following endpoint is a public endpoint. You can change the endpoint as needed.
	config.Endpoint = tea.String("bailian.ap-southeast-1.aliyuncs.com")
	_result = &bailian20231229.Client{}
	_result, _err = bailian20231229.NewClient(config)
	return _result, _err
}

// listIndices gets the details of one or more knowledge bases in a specified workspace.
//
// Parameters:
//   - client      *bailian20231229.Client: The client.
//   - workspaceId string: The workspace ID.
//
// Returns:
//   - *bailian20231229.ListIndicesResponse: The response from the Model Studio service.
//   - error: The error message.
func listIndices(client *bailian20231229.Client, workspaceId string) (_result *bailian20231229.ListIndicesResponse, _err error) {
	headers := make(map[string]*string)
	listIndicesRequest := &bailian20231229.ListIndicesRequest{}
	runtime := &util.RuntimeOptions{}
	return client.ListIndicesWithOptions(tea.String(workspaceId), listIndicesRequest, headers, runtime)
}

// deleteIndex permanently deletes the specified knowledge base.
//
// Parameters:
//   - client      *bailian20231229.Client: The client.
//   - workspaceId string: The workspace ID.
//   - indexId     string: The knowledge base ID.
//
// Returns:
//   - *bailian20231229.DeleteIndexResponse: The response from the Model Studio service.
//   - error: The error message.
func deleteIndex(client *bailian20231229.Client, workspaceId, indexId string) (_result *bailian20231229.DeleteIndexResponse, _err error) {
	headers := make(map[string]*string)
	deleteIndexRequest := &bailian20231229.DeleteIndexRequest{
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.DeleteIndexWithOptions(tea.String(workspaceId), deleteIndexRequest, headers, runtime)

}

// The main function.
func main() {
	if !checkEnvironmentVariables() {
		fmt.Println("Environment variable verification failed.")
		return
	}

	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("Select an operation to perform:\n1. List knowledge bases\n2. Delete a knowledge base\nEnter an option (1 or 2):")

	// Make sure to read the input.
	if !scanner.Scan() {
		fmt.Println("Failed to read the input.")
		return
	}
	startOption := scanner.Text()

	client, err := createClient()
	if err != nil {
		fmt.Println("Failed to create a client:", err)
		return
	}

	if strings.TrimSpace(startOption) == "1" {
		fmt.Println("\nList knowledge bases")
		workspaceId := os.Getenv("WORKSPACE_ID")
		resp, err := listIndices(client, workspaceId)
		if err != nil {
			fmt.Println("Failed to obtain the list of knowledge bases:", err)
			return
		}
		fmt.Printf("List of knowledge bases:\n%+v\n", resp.Body.Data)
	} else if strings.TrimSpace(startOption) == "2" {
		fmt.Println("\nDelete a knowledge base")
		workspaceId := os.Getenv("WORKSPACE_ID")
		fmt.Print("Enter the knowledge base ID:")
		if !scanner.Scan() {
			fmt.Println("Failed to read the knowledge base ID.")
			return
		}
		indexId := scanner.Text()
		for {
			fmt.Printf("Are you sure you want to permanently delete the knowledge base %s? (y/n): ", indexId)
			if !scanner.Scan() {
				fmt.Println("Failed to read the confirmation.")
				return
			}
			confirm := strings.ToLower(strings.TrimSpace(scanner.Text()))

			if confirm == "y" {
				break
			} else if confirm == "n" {
				fmt.Println("The deletion is canceled.")
				return
			} else {
				fmt.Println("Invalid input. Enter y or n.")
			}
		}
		resp, err := deleteIndex(client, workspaceId, indexId)
		if err != nil {
			fmt.Println("Failed to delete the knowledge base:", err)
		} else {
			if tea.StringValue(resp.Body.Status) == "200" {
				fmt.Printf("Knowledge base %s is deleted.\n", indexId)
			} else {
				fmt.Println(resp.Body)
			}
		}
	} else {
		fmt.Println("Invalid option. The program exits.")
	}
}
```

## **Create a knowledge base**

The following example shows how to create a document search knowledge base in a specified workspace.

### **1\. Initialize the client**

Before you can upload files and create a knowledge base, you must initialize the client. Use your [configured AccessKey and AccessKey secret](#a4a15bd543can) to complete identity verification and `endpoint` configuration.

-   **Public endpoints:**
    
    > Ensure that your client can access the Internet.
    
    -   Public cloud: `bailian.ap-southeast-1.aliyuncs.com`
        
-   **VPC endpoints:**
    
    > If your client is deployed in a [VPC](/help/en/vpc/what-is-vpc) in the Alibaba Cloud Singapore region `ap-southeast-1`
    
    -   Public cloud: `bailian-vpc.ap-southeast-1.aliyuncs.com`
        

After the client is created, you obtain a Client object for subsequent API calls.

## Python

```
def create_client() -> bailian20231229Client:
    """
    Create and configure a client.

    Returns:
        bailian20231229Client: The configured client.
    """
    config = open_api_models.Config(
        access_key_id=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        access_key_secret=os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
    )
    # The following endpoint is a public endpoint for the public cloud. Replace it as needed.
    config.endpoint = 'bailian.ap-southeast-1.aliyuncs.com'
    return bailian20231229Client(config)
```

## Java

```
/**
* Initialize the client.
*
* @return The configured client object.
*/
public static com.aliyun.bailian20231229.Client createClient() throws Exception {
    com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
            .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
            .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
    // The following endpoint is a VPC endpoint for the public cloud. Replace it as needed.
    config.endpoint = "bailian-vpc.ap-southeast-1.aliyuncs.com";
    return new com.aliyun.bailian20231229.Client(config);
}
```

## PHP

```
/**
 * Initialize the client.
 *
 * @return Bailian The configured client object.
 */
public static function createClient(){
    $config = new Config([
        "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), 
        "accessKeySecret" => getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
    ]);
    // The following endpoint is a VPC endpoint for the public cloud. Replace it as needed.
    $config->endpoint = 'bailian-vpc.ap-southeast-1.aliyuncs.com';
    return new Bailian($config);
}
```

## Node.js

```
/**
 * Create and configure a client.
 * @return Client
 * @throws Exception
 */
static createClient() {
  const config = new OpenApi.Config({
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET
  });
  // The following endpoint is a VPC endpoint for the public cloud. Replace it as needed.
  config.endpoint = `bailian-vpc.ap-southeast-1.aliyuncs.com`;
  return new bailian20231229.default(config);
}
```

## C#

```
/// <summary>
/// Initialize the client.
/// </summary>
/// <returns>The configured client object.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during initialization.</exception>
public static AlibabaCloud.SDK.Bailian20231229.Client CreateClient()
{
    var config = new AlibabaCloud.OpenApiClient.Models.Config
    {
        AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"),
        AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"),
    };
    // The following endpoint is a VPC endpoint for the public cloud. Replace it as needed.
    config.Endpoint = "bailian-vpc.ap-southeast-1.aliyuncs.com";
    return new AlibabaCloud.SDK.Bailian20231229.Client(config);
}
```

## Go

```
// CreateClient creates and configures a client.
//
// Returns:
//   - *client.Bailian20231229Client: The configured client.
//   - error: An error message.
func CreateClient() (_result *bailian20231229.Client, _err error) {
	config := &openapi.Config{
		AccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
		AccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
	}
	// The following endpoint is a VPC endpoint for the public cloud. Replace it as needed.
	config.Endpoint = tea.String("bailian-vpc.ap-southeast-1.aliyuncs.com")
	_result = &bailian20231229.Client{}
	_result, _err = bailian20231229.NewClient(config)
	return _result, _err
}
```

### **2\. Upload files for the knowledge base**

#### **2.1. Requesting a file upload lease**

Before you can create a knowledge base, you must upload files to **the same workspace** to serve as the source of knowledge. Before you upload a file, you must call the [ApplyFileUploadLease](/help/en/model-studio/api-bailian-2023-12-29-applyfileuploadlease) operation to request a file upload lease. The lease is a temporary authorization that lets you upload a file within a limited time. The lease is valid for several minutes.

-   **workspace\_id:** For more information, see [How to obtain a workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo).
    
-   **category\_id:** In this example, pass `default`. Alibaba Cloud Model Studio uses categories to manage your uploaded files. The system automatically creates a default category. You can also call the [AddCategory](/help/en/model-studio/api-bailian-2023-12-29-addcategory) operation to create a new category and obtain the corresponding `category_id`.
    
-   **file\_name:** The exact name of the file to upload, including the file extension. For example, to upload the file shown in the figure, specify `Alibaba Cloud Model Studio Phone Series Product Introduction.docx`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2377286571/p904944.png)
    
-   **file\_md5:** Enter the MD5 hash of the file to upload. Alibaba Cloud does not currently verify this value. This lets you upload files from a URL.
    
    > For example, in Python, you can obtain the MD5 hash using the hashlib module. For other languages, see the [complete sample code](#17d78ffbdafbj).
    
    **Code example**
    
    ```
    import hashlib
    
    
    def calculate_md5(file_path):
        """
        Calculate the MD5 hash of a file.
    
        Args:
            file_path (str): The local path of the file.
    
        Returns:
            str: The MD5 hash of the file.
        """
        md5_hash = hashlib.md5()
    
        # Read the file in binary mode.
        with open(file_path, "rb") as f:
            # Read the file in chunks to avoid high memory usage for large files.
            for chunk in iter(lambda: f.read(4096), b""):
                md5_hash.update(chunk)
    
        return md5_hash.hexdigest()
    
    
    # Example usage
    file_path = "Replace this with the actual local path of the file to upload, for example, /xxx/xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx"
    md5_value = calculate_md5(file_path)
    print(f"The MD5 hash of the file is: {md5_value}")
    ```
    
    Replace the `file_path` variable in the code with the actual local path of the file and run the code. You can then obtain the MD5 hash of the object file, as shown in the following example:
    
    ```
    The MD5 hash of the file is: 2ef7361ea907f3a1b91e3b9936f5643a
    ```
    
-   **file\_size:** Enter the size of the file to upload, in bytes.
    
    > For example, in Python, you can obtain this value using the os module. For other languages, see [complete sample code](#17d78ffbdafbj).
    
    **Code example**
    
    ```
    import os
    
    
    def get_file_size(file_path: str) -> int:
        """
        Get the size of the file in bytes.
    
        Args:
            file_path (str): The actual local path of the file.
    
        Returns:
            int: The file size in bytes.
        """
        return os.path.getsize(file_path)
    
    
    # Example usage
    file_path = "Replace this with the actual local path of the file to upload, for example, /xxx/xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx"
    file_size = get_file_size(file_path)
    print(f"The size of the file in bytes is: {file_size}")
    ```
    
    Replace the `file_path` variable in the code with the file's actual local path and run it to obtain the target file's size in bytes. For example:
    
    ```
    The size of the file in bytes is: 14015
    ```
    

After you successfully request a temporary upload lease, you obtain:

-   **A set of temporary upload parameters:**
    
    -   `Data.FileUploadLeaseId`
        
    -   `Data.Param.Method`
        
    -   `X-bailian-extra` in `Data.Param.Headers`
        
    -   `Content-Type` in `Data.Param.Headers`
        
-   **A temporary upload URL:**`Data.Param.Url`
    

You will use these in the next step.

**Important**

-   A RAM user must be granted the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this example.
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/ApplyFileUploadLease) and the generation of [sample code](https://api.alibabacloud.com/api/bailian/2023-12-29/ApplyFileUploadLease?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def apply_lease(client, category_id, file_name, file_md5, file_size, workspace_id):
    """
    Request a file upload lease from Alibaba Cloud Model Studio.

    Args:
        client (bailian20231229Client): The client.
        category_id (str): The category ID.
        file_name (str): The file name.
        file_md5 (str): The MD5 hash of the file.
        file_size (int): The file size in bytes.
        workspace_id (str): The workspace ID.

    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    headers = {}
    request = bailian_20231229_models.ApplyFileUploadLeaseRequest(
        file_name=file_name,
        md_5=file_md5,
        size_in_bytes=file_size,
    )
    runtime = util_models.RuntimeOptions()
    return client.apply_file_upload_lease_with_options(category_id, workspace_id, request, headers, runtime)
```

## Java

```
/**
 * Request a file upload lease.
 *
 * @param client      The client object.
 * @param categoryId  The category ID.
 * @param fileName    The file name.
 * @param fileMd5     The MD5 hash of the file.
 * @param fileSize    The file size in bytes.
 * @param workspaceId The workspace ID.
 * @return The response object from Alibaba Cloud Model Studio.
 */
public ApplyFileUploadLeaseResponse applyLease(com.aliyun.bailian20231229.Client client, String categoryId, String fileName, String fileMd5, String fileSize, String workspaceId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.bailian20231229.models.ApplyFileUploadLeaseRequest applyFileUploadLeaseRequest = new com.aliyun.bailian20231229.models.ApplyFileUploadLeaseRequest();
    applyFileUploadLeaseRequest.setFileName(fileName);
    applyFileUploadLeaseRequest.setMd5(fileMd5);
    applyFileUploadLeaseRequest.setSizeInBytes(fileSize);
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    ApplyFileUploadLeaseResponse applyFileUploadLeaseResponse = null;
    applyFileUploadLeaseResponse = client.applyFileUploadLeaseWithOptions(categoryId, workspaceId, applyFileUploadLeaseRequest, headers, runtime);
    return applyFileUploadLeaseResponse;
}
```

## PHP

```
/**
 * Request a file upload lease.
 *
 * @param Bailian $client The client.
 * @param string $categoryId The category ID.
 * @param string $fileName The file name.
 * @param string $fileMd5 The MD5 hash of the file.
 * @param int $fileSize The file size in bytes.
 * @param string $workspaceId The workspace ID.
 * @return ApplyFileUploadLeaseResponse The response from Alibaba Cloud Model Studio.
 */
public function applyLease($client, $categoryId, $fileName, $fileMd5, $fileSize, $workspaceId) {
    $headers = [];
    $applyFileUploadLeaseRequest = new ApplyFileUploadLeaseRequest([
        "fileName" => $fileName,
        "md5" => $fileMd5,
        "sizeInBytes" => $fileSize
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->applyFileUploadLeaseWithOptions($categoryId, $workspaceId, $applyFileUploadLeaseRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Request a file upload lease.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} categoryId - The category ID.
 * @param {string} fileName - The file name.
 * @param {string} fileMd5 - The MD5 hash of the file.
 * @param {string} fileSize - The file size in bytes.
 * @param {string} workspaceId - The workspace ID.
 * @returns {Promise<bailian20231229.ApplyFileUploadLeaseResponse>} - The response from Alibaba Cloud Model Studio.
 */
async function applyLease(client, categoryId, fileName, fileMd5, fileSize, workspaceId) {
  const headers = {};
  const req = new bailian20231229.ApplyFileUploadLeaseRequest({
    md5: fileMd5,
    fileName,
    sizeInBytes: fileSize
 });
 const runtime = new Util.RuntimeOptions({});
 return await client.applyFileUploadLeaseWithOptions(
    categoryId,
    workspaceId,
    req,
    headers,
    runtime
  );
}
```

## C#

```
/// <summary>
/// Request a file upload lease.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="categoryId">The category ID.</param>
/// <param name="fileName">The file name.</param>
/// <param name="fileMd5">The MD5 hash of the file.</param>
/// <param name="fileSize">The file size in bytes.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <returns>The response object from Alibaba Cloud Model Studio.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.ApplyFileUploadLeaseResponse ApplyLease(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string categoryId,
    string fileName,
    string fileMd5,
    string fileSize,
    string workspaceId)
{
    var headers = new Dictionary<string, string>() { };
    var applyFileUploadLeaseRequest = new AlibabaCloud.SDK.Bailian20231229.Models.ApplyFileUploadLeaseRequest
    {
        FileName = fileName,
        Md5 = fileMd5,
        SizeInBytes = fileSize
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.ApplyFileUploadLeaseWithOptions(categoryId, workspaceId, applyFileUploadLeaseRequest, headers, runtime);
}
```

## Go

```
// ApplyLease requests a file upload lease from Alibaba Cloud Model Studio.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - categoryId (string): The category ID.
//   - fileName (string): The file name.
//   - fileMD5 (string): The MD5 hash of the file.
//   - fileSize (string): The file size in bytes.
//   - workspaceId (string): The workspace ID.
//
// Returns:
//   - *bailian20231229.ApplyFileUploadLeaseResponse: The response from Alibaba Cloud Model Studio.
//   - error: An error message.
func ApplyLease(client *bailian20231229.Client, categoryId, fileName, fileMD5 string, fileSize string, workspaceId string) (_result *bailian20231229.ApplyFileUploadLeaseResponse, _err error) {
	headers := make(map[string]*string)
	applyFileUploadLeaseRequest := &bailian20231229.ApplyFileUploadLeaseRequest{
		FileName:    tea.String(fileName),
		Md5:         tea.String(fileMD5),
		SizeInBytes: tea.String(fileSize),
	}
	runtime := &util.RuntimeOptions{}
	return client.ApplyFileUploadLeaseWithOptions(tea.String(categoryId), tea.String(workspaceId), applyFileUploadLeaseRequest, headers, runtime)
}
```

**Request example**

```
{
  "CategoryId": "default",
  "FileName": "Alibaba_Cloud_Model_Studio_Series_Mobile_Products_Introduction.docx",
  "Md5": "2ef7361ea907f3a1b91e3b9936f5643a",
  "SizeInBytes": "14015",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "RequestId": "778C0B3B-59C2-5FC1-A947-36EDD1XXXXXX",
  "Success": true,
  "Message": "",
  "Code": "success",
  "Status": "200",
  "Data": {
    "FileUploadLeaseId": "1e6a159107384782be5e45ac4759b247.1719325231035",
    "Type": "HTTP",
    "Param": {
      "Method": "PUT",
      "Url": "https://bailian-datahub-data-origin-prod.oss-cn-hangzhou.aliyuncs.com/1005426495169178/10024405/68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847.pdf?Expires=1716699536&OSSAccessKeyId=TestID&Signature=HfwPUZo4pR6DatSDym0zFKVh9Wg%3D",
      "Headers": "        \"X-bailian-extra\": \"MTAwNTQyNjQ5NTE2OTE3OA==\",\n        \"Content-Type\": \"application/pdf\""
    }
  }
}
```

#### **2.2. Upload the file to temporary storage**

After you obtain an upload lease, you can use the temporary upload parameters and URL in the lease to upload files from your local storage or a public URL to the Alibaba Cloud Model Studio server. Each workspace supports up to 10,000 files. The supported file formats are PDF, DOCX, DOC, TXT, Markdown, PPTX, PPT, XLSX, XLS, HTML, PNG, JPG, JPEG, BMP, and GIF.

-   **pre\_signed\_url:** Pass the `Data.Param.Url` returned by the [request for a file upload lease](#9eb81df79bvkg).
    
    > This is a pre-signed URL. It does not support FormData uploads. You must upload the file in binary format. For more information, see the sample code.
    

**Important**

Online debugging and multi-language sample code generation are not available in this example.

## Upload from local storage

## Python

```
import requests
from urllib.parse import urlparse

def upload_file(pre_signed_url, file_path):
    """
    Upload a local file to temporary storage.

    Args:
        pre_signed_url (str): The URL from the upload lease.
        file_path (str): The local path of the file.
    
    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    try:
        # Set the request headers.
        headers = {
            "X-bailian-extra": "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
            "Content-Type": "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."
        }

        # Read the file and upload it.
        with open(file_path, 'rb') as file:
            # The request method for file upload must be the same as the value of the Data.Param.Method field returned by the ApplyFileUploadLease operation in the previous step.
            response = requests.put(pre_signed_url, data=file, headers=headers)

        # Check the status code of the response.
        if response.status_code == 200:
            print("File uploaded successfully.")
        else:
            print(f"Failed to upload the file. ResponseCode: {response.status_code}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":

    pre_signed_url_or_http_url = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step."

    # Upload a local file to temporary storage.
    file_path = "Replace this with the actual local path of the file to upload (for example, on Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx)."
    upload_file(pre_signed_url_or_http_url, file_path)
```

## Java

```
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class UploadFile {
    public static void uploadFile(String preSignedUrl, String filePath) {
        HttpURLConnection connection = null;
        try {
            // Create a URL object.
            URL url = new URL(preSignedUrl);
            connection = (HttpURLConnection) url.openConnection();
            // The request method for file upload must be the same as the value of the Data.Param.Method field returned by the ApplyFileUploadLease operation in the previous step.
            connection.setRequestMethod("PUT");
            // Allow output to the connection because this connection is used to upload the file.
            connection.setDoOutput(true);
            connection.setRequestProperty("X-bailian-extra", "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.");
            connection.setRequestProperty("Content-Type", "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value.");
            // Read the file and upload it through the connection.
            try (DataOutputStream outStream = new DataOutputStream(connection.getOutputStream());
                 FileInputStream fileInputStream = new FileInputStream(filePath)) {
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = fileInputStream.read(buffer)) != -1) {
                    outStream.write(buffer, 0, bytesRead);
                }
                outStream.flush();
            }
            // Check the response.
            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                // The file was uploaded successfully.
                System.out.println("File uploaded successfully.");
            } else {
                // The file failed to be uploaded.
                System.out.println("Failed to upload the file. ResponseCode: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }
    }

    public static void main(String[] args) {
        String preSignedUrlOrHttpUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";
        // Upload a local file to temporary storage.
        String filePath = "Replace this with the actual local path of the file to upload (for example, on Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx).";
        uploadFile(preSignedUrlOrHttpUrl, filePath);
    }
}
```

## PHP

```
<?php

/**
 * Upload a local file to temporary storage.
 *
 * @param string $preSignedUrl The pre-signed URL or HTTP address obtained from the ApplyFileUploadLease operation.
 * @param array $headers An array of request headers containing "X-bailian-extra" and "Content-Type".
 * @param string $filePath The local file path.
 * @throws Exception If the upload fails.
 */
function uploadFile($preSignedUrl, $headers, $filePath) {
    // Read the file content.
    $fileContent = file_get_contents($filePath);
    if ($fileContent === false) {
        throw new Exception("Cannot read the file: " . $filePath);
    }

    // Initialize a cURL session.
    $ch = curl_init();

    // Set cURL options.
    curl_setopt($ch, CURLOPT_URL, $preSignedUrl);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT"); // Use the PUT method.
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fileContent); // Set the request body to the file content.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response instead of outputting it directly.

    // Build the request headers.
    $uploadHeaders = [
        "X-bailian-extra: " . $headers["X-bailian-extra"],
        "Content-Type: " . $headers["Content-Type"]
    ];
    curl_setopt($ch, CURLOPT_HTTPHEADER, $uploadHeaders);

    // Execute the request.
    $response = curl_exec($ch);

    // Get the HTTP status code.
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Close the cURL session.
    curl_close($ch);

    // Check the status code.
    if ($httpCode != 200) {
        throw new Exception("Upload failed. HTTP status code: " . $httpCode . ". Error message: " . $response);
    }

    // The upload is successful.
    echo "File uploaded successfully.\n";
}

/**
 * Main function: Upload a local file.
 */
function main() {
    // Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.
    $preSignedUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";

    // Replace these with the values of X-bailian-extra and Content-Type in Data.Param.Headers returned by the ApplyFileUploadLease operation in the previous step.
    $headers = [
        "X-bailian-extra" => "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
        "Content-Type" => "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."
    ];

    // Upload a local file to temporary storage.
    $filePath = "Replace this with the actual local path of the file to upload (for example, on Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx).";

    try {
        uploadFile($preSignedUrl, $headers, $filePath);
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    }
}

// Call the main function.
main();

?>
```

## Node.js

```
const fs = require('fs');
const axios = require('axios');

/**
 * Upload a local file to temporary storage.
 *
 * @param {string} preSignedUrl - The URL from the upload lease.
 * @param {Object} headers - The headers for the upload request.
 * @param {string} filePath - The local path of the file.
 * @throws {Error} If the upload fails.
 */
async function uploadFile(preSignedUrl, headers, filePath) {
    // Build the request headers required for the upload.
    const uploadHeaders = {
        "X-bailian-extra": headers["X-bailian-extra"],
        "Content-Type": headers["Content-Type"]
    };

    // Create a file read stream.
    const fileStream = fs.createReadStream(filePath);

    try {
        // Use axios to send a PUT request.
        const response = await axios.put(preSignedUrl, fileStream, {
            headers: uploadHeaders
        });

        // Check the status code of the response.
        if (response.status === 200) {
            console.log("File uploaded successfully.");
        } else {
            console.error(`Failed to upload the file. ResponseCode: ${response.status}`);
            throw new Error(`Upload failed with status code: ${response.status}`);
        }
    } catch (error) {
        // Handle errors.
        console.error("Error during upload:", error.message);
        throw new Error(`Upload failed: ${error.message}`);
    }
}

/**
 * Main function: Upload a local file.
 */
function main() {
    const preSignedUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";

    const headers = {
        "X-bailian-extra": "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
        "Content-Type": "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."
    };

    // Upload a local file to temporary storage.
    const filePath = "Replace this with the actual local path of the file to upload (for example, on Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx).";

    uploadFile(preSignedUrl, headers, filePath)
        .then(() => {
            console.log("Upload completed.");
        })
        .catch((err) => {
            console.error("Upload failed:", err.message);
        });
}

// Call the main function.
main();
```

## C#

```
using System;
using System.IO;
using System.Net;

public class UploadFilExample
{
    public static void UploadFile(string preSignedUrl, string filePath)
    {
        HttpWebRequest connection = null;
        try
        {
            // Create a URL object.
            Uri url = new Uri(preSignedUrl);
            connection = (HttpWebRequest)WebRequest.Create(url);
            // The request method for file upload must be the same as the value of the Data.Param.Method field returned by the ApplyFileUploadLease operation in the previous step.
            connection.Method = "PUT";
            // Allow output to the connection because this connection is used to upload the file.
            connection.AllowWriteStreamBuffering = false;
            connection.SendChunked = false;
            // Set the request headers to be the same as the field values in Data.Param.Headers returned by the ApplyFileUploadLease operation in the previous step.
            connection.Headers["X-bailian-extra"] = "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.";
            connection.ContentType = "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value.";
            // Read the file and upload it through the connection.
            using (var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            using (var requestStream = connection.GetRequestStream())
            {
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = fileStream.Read(buffer, 0, buffer.Length)) != 0)
                {
                    requestStream.Write(buffer, 0, bytesRead);
                }
                requestStream.Flush();
            }
            // Check the response.
            using (HttpWebResponse response = (HttpWebResponse)connection.GetResponse())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    // The file was uploaded successfully.
                    Console.WriteLine("File uploaded successfully.");
                }
                else
                {
                    // The file failed to be uploaded.
                    Console.WriteLine($"Failed to upload the file. ResponseCode: {response.StatusCode}");
                }
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            e.StackTrace.ToString();
        }
        finally
        {
            if (connection != null)
            {
                connection.Abort();
            }
        }
    }

    public static void Main(string[] args)
    {
        string preSignedUrlOrHttpUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";
        // Upload a local file to temporary storage.
        string filePath = "Replace this with the actual local path of the file to upload (for example, on Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx).";
        UploadFile(preSignedUrlOrHttpUrl, filePath);
    }
}
```

## Go

```
package main

import (
    "fmt"
    "io"
    "os"

    "github.com/go-resty/resty/v2"
)

// UploadFile uploads a local file to temporary storage.
//
// Args:
//   - preSignedUrl (string): The URL from the upload lease.
//   - headers (map[string]string): The headers for the upload request.
//   - filePath (string): The local path of the file.
//
// Returns:
//   - error: An error message if the upload fails, otherwise nil.
func UploadFile(preSignedUrl string, headers map[string]string, filePath string) error {
    // Open the local file.
    file, err := os.Open(filePath)
    if err != nil {
        return fmt.Errorf("failed to open file: %w", err)
    }
    defer file.Close()

    // Read the content.
    body, err := io.ReadAll(file)
    if err != nil {
        return fmt.Errorf("failed to read file: %w", err)
    }

    // Create a REST client.
    client := resty.New()

    // Build the request headers required for the upload.
    uploadHeaders := map[string]string{
        "X-bailian-extra": headers["X-bailian-extra"],
        "Content-Type":    headers["Content-Type"],
    }

    // Send a PUT request.
    resp, err := client.R().
        SetHeaders(uploadHeaders).
        SetBody(body).
        Put(preSignedUrl)

    if err != nil {
        return fmt.Errorf("failed to send request: %w", err)
    }

    // Check the HTTP response status code.
    if resp.IsError() {
        return fmt.Errorf("HTTP error: %d", resp.StatusCode())
    }

    fmt.Println("File uploaded successfully.")
    return nil
}

// main function
func main() {
    // Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.
    preSignedUrl := "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step."

    // Replace these with the values of X-bailian-extra and Content-Type in Data.Param.Headers returned by the ApplyFileUploadLease operation in the previous step.
    headers := map[string]string{
        "X-bailian-extra": "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
        "Content-Type":    "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value.",
    }

    // Upload a local file to temporary storage.
    filePath := "Replace this with the actual local path of the file to upload (for example, on Linux: /xxx/xxx/Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx)."

    // Call the upload function.
    err := UploadFile(preSignedUrl, headers, filePath)
    if err != nil {
        fmt.Printf("Upload failed: %v\n", err)
    }
}
```

## Upload from a URL

> Ensure that the URL is publicly accessible and points to a valid file.

## Python

```
import requests
from urllib.parse import urlparse

def upload_file_link(pre_signed_url, source_url_string):
    """
    Upload a file from a public URL to temporary storage.

    Args:
        pre_signed_url (str): The URL from the upload lease.
        source_url_string (str): The URL of the file.
    
    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    try:
        # Set the request headers.
        headers = {
            "X-bailian-extra": "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
            "Content-Type": "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."
        }

        # Set the request method to GET to access the file URL.
        source_response = requests.get(source_url_string)
        if source_response.status_code != 200:
            raise RuntimeError("Failed to get source file.")

        # The request method for file upload must be the same as the value of the Data.Param.Method field returned by the ApplyFileUploadLease operation in the previous step.
        response = requests.put(pre_signed_url, data=source_response.content, headers=headers)

        # Check the status code of the response.
        if response.status_code == 200:
            print("File uploaded successfully.")
        else:
            print(f"Failed to upload the file. ResponseCode: {response.status_code}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":

    pre_signed_url_or_http_url = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."

    # The URL of the file.
    source_url = "Replace this with the URL of the file to upload."
    upload_file_link(pre_signed_url_or_http_url, source_url)
```

## Java

```
import java.io.BufferedInputStream;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class UploadFile {
    public static void uploadFileLink(String preSignedUrl, String sourceUrlString) {
        HttpURLConnection connection = null;
        try {
            // Create a URL object.
            URL url = new URL(preSignedUrl);
            connection = (HttpURLConnection) url.openConnection();
            // The request method for file upload must be the same as the value of the Data.Param.Method field returned by the ApplyFileUploadLease operation in the previous step.
            connection.setRequestMethod("PUT");
            // Allow output to the connection because this connection is used to upload the file.
            connection.setDoOutput(true);
            connection.setRequestProperty("X-bailian-extra", "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.");
            connection.setRequestProperty("Content-Type", "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value.");
            URL sourceUrl = new URL(sourceUrlString);
            HttpURLConnection sourceConnection = (HttpURLConnection) sourceUrl.openConnection();
            // Set the request method to GET to access the file URL.
            sourceConnection.setRequestMethod("GET");
            // Get the response code. 200 indicates that the request was successful.
            int sourceFileResponseCode = sourceConnection.getResponseCode();
            // Read the file from the URL and upload it through the connection.
            if (sourceFileResponseCode != HttpURLConnection.HTTP_OK) {
                throw new RuntimeException("Failed to get source file.");
            }
            try (DataOutputStream outStream = new DataOutputStream(connection.getOutputStream());
                 InputStream in = new BufferedInputStream(sourceConnection.getInputStream())) {
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = in.read(buffer)) != -1) {
                    outStream.write(buffer, 0, bytesRead);
                }
                outStream.flush();
            }
            // Check the response.
            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                // The file was uploaded successfully.
                System.out.println("File uploaded successfully.");
            } else {
                // The file failed to be uploaded.
                System.out.println("Failed to upload the file. ResponseCode: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }
    }

    public static void main(String[] args) {
        String preSignedUrlOrHttpUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";
        
        String sourceUrl = "Replace this with the URL of the file to upload.";
        uploadFileLink(preSignedUrlOrHttpUrl, sourceUrl);
    }
}
```

## PHP

```
<?php

/**
 * Upload a file from a public URL to temporary storage.
 *
 * @param string $preSignedUrl The pre-signed URL or HTTP address obtained from the ApplyFileUploadLease operation.
 * @param array $headers An array of request headers containing "X-bailian-extra" and "Content-Type".
 * @param string $sourceUrl The URL of the file.
 * @throws Exception If the upload fails.
 */
function uploadFile($preSignedUrl, $headers, $sourceUrl) {

    $fileContent = file_get_contents($sourceUrl);
    if ($fileContent === false) {
        throw new Exception("Cannot download the file from the given URL: " . $sourceUrl);
    }
    // Initialize a cURL session.
    $ch = curl_init();

    // Set cURL options.
    curl_setopt($ch, CURLOPT_URL, $preSignedUrl);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT"); // Use the PUT method.
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fileContent); // Set the request body to the file content.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response instead of outputting it directly.

    // Build the request headers.
    $uploadHeaders = [
        "X-bailian-extra: " . $headers["X-bailian-extra"],
        "Content-Type: " . $headers["Content-Type"]
    ];
    curl_setopt($ch, CURLOPT_HTTPHEADER, $uploadHeaders);

    // Execute the request.
    $response = curl_exec($ch);

    // Get the HTTP status code.
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Close the cURL session.
    curl_close($ch);

    // Check the status code.
    if ($httpCode != 200) {
        throw new Exception("Upload failed. HTTP status code: " . $httpCode . ". Error message: " . $response);
    }

    // The upload is successful.
    echo "File uploaded successfully.\n";
}

/**
 * Main function: Upload a file from a public URL to temporary storage.
 */
function main() {
    // Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.
    $preSignedUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";

    // Replace these with the values of X-bailian-extra and Content-Type in Data.Param.Headers returned by the ApplyFileUploadLease operation in the previous step.
    $headers = [
        "X-bailian-extra" => "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
        "Content-Type" => "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."
    ];

    $sourceUrl = "Replace this with the URL of the file to upload.";

    try {
        uploadFile($preSignedUrl, $headers, $sourceUrl);
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    }
}

// Call the main function.
main();

?>
```

## Node.js

```
const axios = require('axios');

/**
 * Upload a file from a public URL to temporary storage.
 *
 * @param {string} preSignedUrl - The URL from the upload lease.
 * @param {Object} headers - The headers for the upload request.
 * @param {string} sourceUrl - The URL of the file.
 * @throws {Error} If the upload fails.
 */
async function uploadFileFromUrl(preSignedUrl, headers, sourceUrl) {
    // Build the request headers required for the upload.
    const uploadHeaders = {
        "X-bailian-extra": headers["X-bailian-extra"],
        "Content-Type": headers["Content-Type"]
    };

    try {
        // Download the file from the given URL.
        const response = await axios.get(sourceUrl, {
            responseType: 'stream'
        });

        // Use axios to send a PUT request.
        const uploadResponse = await axios.put(preSignedUrl, response.data, {
            headers: uploadHeaders
        });

        // Check the status code of the response.
        if (uploadResponse.status === 200) {
            console.log("File uploaded successfully from URL.");
        } else {
            console.error(`Failed to upload the file. ResponseCode: ${uploadResponse.status}`);
            throw new Error(`Upload failed with status code: ${uploadResponse.status}`);
        }
    } catch (error) {
        // Handle errors.
        console.error("Error during upload:", error.message);
        throw new Error(`Upload failed: ${error.message}`);
    }
}

/**
 * Main function: Upload a publicly downloadable file to temporary storage.
 */
function main() {
    const preSignedUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";

    const headers = {
        "X-bailian-extra": "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
        "Content-Type": "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value."
    };

    const sourceUrl = "Replace this with the URL of the file to upload.";

    uploadFileFromUrl(preSignedUrl, headers, sourceUrl)
        .then(() => {
            console.log("Upload completed.");
        })
        .catch((err) => {
            console.error("Upload failed:", err.message);
        });
}

// Call the main function.
main();
```

## C#

```
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

public class UploadFileExample
{
    public static async Task UploadFileFromUrl(string preSignedUrl, string url)
    {
        try
        {
            // Create an HTTP client to download the file from the given URL.
            using (HttpClient httpClient = new HttpClient())
            {
                HttpResponseMessage response = await httpClient.GetAsync(url, HttpCompletionOption.ResponseHeadersRead);
                response.EnsureSuccessStatusCode();

                // Get the file stream.
                using (Stream fileStream = await response.Content.ReadAsStreamAsync())
                {
                    // Create a URL object.
                    Uri urlObj = new Uri(preSignedUrl);
                    HttpWebRequest connection = (HttpWebRequest)WebRequest.Create(urlObj);

                    // Set the request method for file upload.
                    connection.Method = "PUT";
                    connection.AllowWriteStreamBuffering = false;
                    connection.SendChunked = false;

                    // Set the request headers. Replace with actual values.
                    connection.Headers["X-bailian-extra"] = "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.";
                    connection.ContentType = "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value.";

                    // Get the request stream and write the file stream to it.
                    using (Stream requestStream = connection.GetRequestStream())
                    {
                        byte[] buffer = new byte[4096];
                        int bytesRead;
                        while ((bytesRead = await fileStream.ReadAsync(buffer, 0, buffer.Length)) > 0)
                        {
                            await requestStream.WriteAsync(buffer, 0, bytesRead);
                        }
                        await requestStream.FlushAsync();
                    }

                    // Check the response.
                    using (HttpWebResponse responseResult = (HttpWebResponse)connection.GetResponse())
                    {
                        if (responseResult.StatusCode == HttpStatusCode.OK)
                        {
                            Console.WriteLine("File uploaded successfully from URL.");
                        }
                        else
                        {
                            Console.WriteLine($"Failed to upload the file. ResponseCode: {responseResult.StatusCode}");
                        }
                    }
                }
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            Console.WriteLine(e.StackTrace);
        }
    }

    public static async Task Main(string[] args)
    {
        string preSignedUrlOrHttpUrl = "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.";
        string url = "Replace this with the URL of the file to upload.";   

        await UploadFileFromUrl(preSignedUrlOrHttpUrl, url);
    }
}
```

## Go

```
package main
 
import (
    "fmt"
    "net/http"
 
    "github.com/go-resty/resty/v2"
)
 
// UploadFileFromUrl uploads a file from a public URL to temporary storage.
//
// Args:
//   - preSignedUrl (string): The URL from the upload lease.
//   - headers (map[string]string): The headers for the upload request.
//   - sourceUrl (string): The URL of the file.
//
// Returns:
//   - error: An error message if the upload fails, otherwise nil.
func UploadFileFromUrl(preSignedUrl string, headers map[string]string, sourceUrl string) error {
    // Download the file from the given URL.
    resp, err := http.Get(sourceUrl)
    if err != nil {
        return fmt.Errorf("failed to get file: %w", err)
    }
    defer resp.Body.Close()
 
    if resp.StatusCode != http.StatusOK {
        return fmt.Errorf("failed to get file, status code: %d", resp.StatusCode)
    }
 
    // Create a REST client.
    client := resty.New()
 
    // Build the request headers required for the upload.
    uploadHeaders := map[string]string{
        "X-bailian-extra": headers["X-bailian-extra"],
        "Content-Type":    headers["Content-Type"],
    }
 
    // Send a PUT request.
    response, err := client.R().
        SetHeaders(uploadHeaders).
        SetBody(resp.Body).
        Put(preSignedUrl)
 
    if err != nil {
        return fmt.Errorf("failed to send request: %w", err)
    }
 
    if err != nil {
        return fmt.Errorf("failed to send request: %w", err)
    }
 
    // Check the HTTP response status code.
    if response.IsError() {
        return fmt.Errorf("HTTP error: %d", response.StatusCode())
    }
 
    fmt.Println("File uploaded successfully from URL.")
    return nil
}
 
// main function
func main() {
    // Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step.
    preSignedUrl := "Replace this with the value of the Data.Param.Url field returned by the ApplyFileUploadLease operation in the previous step."
 
    // Replace these with the values of X-bailian-extra and Content-Type in Data.Param.Headers returned by the ApplyFileUploadLease operation in the previous step.
    headers := map[string]string{
        "X-bailian-extra": "Replace this with the value of the Data.Param.Headers.X-bailian-extra field returned by the ApplyFileUploadLease operation in the previous step.",
        "Content-Type":    "Replace this with the value of the Data.Param.Headers.Content-Type field returned by the ApplyFileUploadLease operation in the previous step. If an empty value is returned, pass an empty value.",
    }
 
    sourceUrl := "Replace this with the URL of the file to upload."
 
    // Call the upload function.
    err := UploadFileFromUrl(preSignedUrl, headers, sourceUrl)
    if err != nil {
        fmt.Printf("Upload failed: %v\n", err)
    }
}
```

#### **2.3. Add the file to a category**

Alibaba Cloud Model Studio uses categories to manage your uploaded files. Therefore, you must call the [AddFile](/help/en/model-studio/api-bailian-2023-12-29-addfile) operation to add the uploaded file to a category in the same workspace.

-   **parser:** Enter `DASHSCOPE_DOCMIND`.
    
-   **lease\_id:** Enter the `Data.FileUploadLeaseId` that is returned when you [request a file upload lease](#9eb81df79bvkg).
    
-   **category\_id:** In this example, enter `default`. If you uploaded the file to a custom category, enter the corresponding `category_id`.
    

After the file is added, Alibaba Cloud Model Studio returns the `FileId` for the file and automatically starts to parse your file. The `lease_id` immediately becomes invalid. **Do not use the same lease ID to submit again**.

**Important**

-   A RAM user must be granted the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this example.
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/AddFile) and [sample code generation](https://api.alibabacloud.com/api/bailian/2023-12-29/AddFile?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def add_file(client: bailian20231229Client, lease_id: str, parser: str, category_id: str, workspace_id: str):
    """
    Add a file to a specified category in Alibaba Cloud Model Studio.

    Args:
        client (bailian20231229Client): The client.
        lease_id (str): The lease ID.
        parser (str): The parser for the file.
        category_id (str): The category ID.
        workspace_id (str): The workspace ID.

    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    headers = {}
    request = bailian_20231229_models.AddFileRequest(
        lease_id=lease_id,
        parser=parser,
        category_id=category_id,
    )
    runtime = util_models.RuntimeOptions()
    return client.add_file_with_options(workspace_id, request, headers, runtime)
```

## Java

```
/**
 * Add a file to a category.
 *
 * @param client      The client object.
 * @param leaseId     The lease ID.
 * @param parser      The parser for the file.
 * @param categoryId  The category ID.
 * @param workspaceId The workspace ID.
 * @return The response object from Alibaba Cloud Model Studio.
 */
public AddFileResponse addFile(com.aliyun.bailian20231229.Client client, String leaseId, String parser, String categoryId, String workspaceId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.bailian20231229.models.AddFileRequest addFileRequest = new com.aliyun.bailian20231229.models.AddFileRequest();
    addFileRequest.setLeaseId(leaseId);
    addFileRequest.setParser(parser);
    addFileRequest.setCategoryId(categoryId);
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.addFileWithOptions(workspaceId, addFileRequest, headers, runtime);
}
```

## PHP

```
/**
 * Add a file to a category.
 *
 * @param Bailian $client The client.
 * @param string $leaseId The lease ID.
 * @param string $parser The parser for the file.
 * @param string $categoryId The category ID.
 * @param string $workspaceId The workspace ID.
 * @return AddFileResponse The response from Alibaba Cloud Model Studio.
 */
public function addFile($client, $leaseId, $parser, $categoryId, $workspaceId) {
    $headers = [];
    $addFileRequest = new AddFileRequest([
        "leaseId" => $leaseId,
        "parser" => $parser,
        "categoryId" => $categoryId
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->addFileWithOptions($workspaceId, $addFileRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Add a file to a category.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} leaseId - The lease ID.
 * @param {string} parser - The parser for the file.
 * @param {string} categoryId - The category ID.
 * @param {string} workspaceId - The workspace ID.
 * @returns {Promise<bailian20231229.AddFileResponse>} - The response from Alibaba Cloud Model Studio.
 */
async function addFile(client, leaseId, parser, categoryId, workspaceId) {
 const headers = {};
 const req = new bailian20231229.AddFileRequest({
  leaseId,
  parser,
  categoryId
});
 const runtime = new Util.RuntimeOptions({});
 return await client.addFileWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Add a file to a category.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="leaseId">The lease ID.</param>
/// <param name="parser">The parser for the file.</param>
/// <param name="categoryId">The category ID.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <returns>The response object from Alibaba Cloud Model Studio.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.AddFileResponse AddFile(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string leaseId,
    string parser,
    string categoryId,
    string workspaceId)
{
    var headers = new Dictionary<string, string>() { };
    var addFileRequest = new AlibabaCloud.SDK.Bailian20231229.Models.AddFileRequest
    {
        LeaseId = leaseId,
        Parser = parser,
        CategoryId = categoryId
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.AddFileWithOptions(workspaceId, addFileRequest, headers, runtime);
}
```

## Go

```
// AddFile adds a file to a specified category in Alibaba Cloud Model Studio.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - leaseId (string): The lease ID.
//   - parser (string): The parser for the file.
//   - categoryId (string): The category ID.
//   - workspaceId (string): The workspace ID.
//
// Returns:
//   - *bailian20231229.AddFileResponse: The response from Alibaba Cloud Model Studio.
//   - error: An error message.
func AddFile(client *bailian20231229.Client, leaseId, parser, categoryId, workspaceId string) (_result *bailian20231229.AddFileResponse, _err error) {
	headers := make(map[string]*string)
	addFileRequest := &bailian20231229.AddFileRequest{
		LeaseId:    tea.String(leaseId),
		Parser:     tea.String(parser),
		CategoryId: tea.String(categoryId),
	}
	runtime := &util.RuntimeOptions{}
	return client.AddFileWithOptions(tea.String(workspaceId), addFileRequest, headers, runtime)
}
```

**Request example**

```
{
  "CategoryId": "default",
  "LeaseId": "d92bd94fa9b54326a2547415e100c9e2.1742195250069",
  "Parser": "DASHSCOPE_DOCMIND",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "Status": "200",
  "Message": "",
  "RequestId": "5832A1F4-AF91-5242-8B75-35BDC9XXXXXX",
  "Data": {
    "FileId": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
    "Parser": "DASHSCOPE_DOCMIND"
  },
  "Code": "Success",
  "Success": "true"
}
```

#### **2.4. Query the file parsing status**

Files that are not parsed cannot be used in a knowledge base. During peak hours, this process can take several hours. You can call the [DescribeFile](/help/en/model-studio/api-bailian-2023-12-29-describefile) operation to query the parsing status of a file.

-   **file\_id:** Enter the `FileId` returned when you [added the file to a category](#494345d4b1hx2).
    

When the `Data.Status` field in the response is `PARSE_SUCCESS`, the file has been parsed and you can import it into a knowledge base.

**Important**

-   A RAM user must be granted the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess or AliyunBailianDataReadOnlyAccess policy) before calling this example.
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/DescribeFile) and [sample code generation](https://api.alibabacloud.com/api/bailian/2023-12-29/DescribeFile?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def describe_file(client, workspace_id, file_id):
    """
    Get the basic information about a file.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        file_id (str): The file ID.

    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    headers = {}
    runtime = util_models.RuntimeOptions()
    return client.describe_file_with_options(workspace_id, file_id, headers, runtime)
```

## Java

```
/**
 * Query the basic information about a file.
 *
 * @param client      The client object.
 * @param workspaceId The workspace ID.
 * @param fileId      The file ID.
 * @return The response object from Alibaba Cloud Model Studio.
 */
public DescribeFileResponse describeFile(com.aliyun.bailian20231229.Client client, String workspaceId, String fileId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.describeFileWithOptions(workspaceId, fileId, headers, runtime);
}
```

## PHP

```
/**
 * Query the basic information about a file.
 *
 * @param Bailian $client The client.
 * @param string $workspaceId The workspace ID.
 * @param string $fileId The file ID.
 * @return DescribeFileResponse The response from Alibaba Cloud Model Studio.
 */
public function describeFile($client, $workspaceId, $fileId) {
    $headers = [];
    $runtime = new RuntimeOptions([]);
    return $client->describeFileWithOptions($workspaceId, $fileId, $headers, $runtime);
}
```

## Node.js

```
/**
 * Query the parsing status of a file.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} fileId - The file ID.
 * @returns {Promise<bailian20231229.DescribeFileResponse>} - The response from Alibaba Cloud Model Studio.
 */
async function describeFile(client, workspaceId, fileId) {
 const headers = {};
 const runtime = new Util.RuntimeOptions({});
 return await client.describeFileWithOptions(workspaceId, fileId, headers, runtime);
}
```

## C#

```
/// <summary>
/// Query the basic information about a file.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="fileId">The file ID.</param>
/// <returns>The response object from Alibaba Cloud Model Studio.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.DescribeFileResponse DescribeFile(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string fileId)
{
    var headers = new Dictionary<string, string>() { };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.DescribeFileWithOptions(workspaceId, fileId, headers, runtime);
}
```

## Go

```
// DescribeFile gets the basic information about a file.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - fileId (string): The file ID.
//
// Returns:
//   - any: The response from Alibaba Cloud Model Studio.
//   - error: An error message.
func DescribeFile(client *bailian20231229.Client, workspaceId, fileId string) (_result *bailian20231229.DescribeFileResponse, _err error) {
	headers := make(map[string]*string)
	runtime := &util.RuntimeOptions{}
	return client.DescribeFileWithOptions(tea.String(workspaceId), tea.String(fileId), headers, runtime)
}
```

**Request example**

```
{
  "FileId": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "Status": "200",
  "Message": "",
  "RequestId": "B9246251-987A-5628-8E1E-17BB39XXXXXX",
  "Data": {
    "CategoryId": "cate_206ea350f0014ea4a324adff1ca13011_10xxxxxx",
    "Status": "PARSE_SUCCESS",
    "FileType": "docx",
    "CreateTime": "2025-03-17 15:47:13",
    "FileName": "Alibaba_Cloud_Model_Studio_Phone_Series_Introduction.docx",
    "FileId": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
    "SizeInBytes": "14015",
    "Parser": "DASHSCOPE_DOCMIND"
  },
  "Code": "Success",
  "Success": "true"
}
```

### **3\. Create the knowledge base**

#### **3.1. Initialize the knowledge base**

After a file is parsed, you can import it into a knowledge base in the same workspace. To initialize a document search knowledge base without making a final commit, you can call the [CreateIndex](/help/en/model-studio/api-bailian-2023-12-29-createindex) API operation.

-   **workspace\_id:** For more information, see [How to obtain a workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo).
    
-   **file\_id:** Enter the `FileId` returned when you [added the file to a category](#494345d4b1hx2).
    
    > If the \`source\_type\` parameter is set to `DATA_CENTER_FILE`, this parameter is required. Otherwise, an error is reported.
    
-   **structure\_type:** In this example, enter `unstructured`.
    
-   **source\_type:** In this example, enter `DATA_CENTER_FILE`.
    
-   **sink\_type:** In this example, enter `BUILT_IN`.
    

The value of the `Data.Id` field in the response is the knowledge base ID. This ID is used for subsequent index building.

> Keep the knowledge base ID secure. You will need it for all subsequent API operations that are related to this knowledge base.

**Important**

-   A RAM user must be granted the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this example.
    
-   This operation supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/CreateIndex) and the generation of [sample code](https://api.alibabacloud.com/api/bailian/2023-12-29/CreateIndex?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def create_index(client, workspace_id, file_id, name, structure_type, source_type, sink_type):
    """
    Create (initialize) a knowledge base in Alibaba Cloud Model Studio.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        file_id (str): The file ID.
        name (str): The name of the knowledge base.
        structure_type (str): The data type of the knowledge base.
        source_type (str): The data type of the application data. Category and file types are supported.
        sink_type (str): The vector storage type of the knowledge base.

    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    headers = {}
    request = bailian_20231229_models.CreateIndexRequest(
        structure_type=structure_type,
        name=name,
        source_type=source_type,
        sink_type=sink_type,
        document_ids=[file_id]
    )
    runtime = util_models.RuntimeOptions()
    return client.create_index_with_options(workspace_id, request, headers, runtime)
```

## Java

```
/**
 * Create (initialize) a knowledge base in Alibaba Cloud Model Studio.
 *
 * @param client        The client object.
 * @param workspaceId   The workspace ID.
 * @param fileId        The file ID.
 * @param name          The name of the knowledge base.
 * @param structureType The data type of the knowledge base.
 * @param sourceType    The data type of the application data. Category and file types are supported.
 * @param sinkType      The vector storage type of the knowledge base.
 * @return The response object from Alibaba Cloud Model Studio.
 */
public CreateIndexResponse createIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String fileId, String name, String structureType, String sourceType, String sinkType) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.bailian20231229.models.CreateIndexRequest createIndexRequest = new com.aliyun.bailian20231229.models.CreateIndexRequest();
    createIndexRequest.setStructureType(structureType);
    createIndexRequest.setName(name);
    createIndexRequest.setSourceType(sourceType);
    createIndexRequest.setSinkType(sinkType);
    createIndexRequest.setDocumentIds(Collections.singletonList(fileId));
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.createIndexWithOptions(workspaceId, createIndexRequest, headers, runtime);
}
```

## PHP

```
/**
 * Create (initialize) a knowledge base in Alibaba Cloud Model Studio.
 *
 * @param Bailian $client The client.
 * @param string $workspaceId The workspace ID.
 * @param string $fileId The file ID.
 * @param string $name The name of the knowledge base.
 * @param string $structureType The data type of the knowledge base.
 * @param string $sourceType The data type of the application data. Category and file types are supported.
 * @param string $sinkType The vector storage type of the knowledge base.
 * @return CreateIndexResponse The response from Alibaba Cloud Model Studio.
 */
public function createIndex($client, $workspaceId, $fileId, $name, $structureType, $sourceType, $sinkType) {
    $headers = [];
    $createIndexRequest = new CreateIndexRequest([
        "structureType" => $structureType,
        "name" => $name,
        "sourceType" => $sourceType,
        "documentIds" => [
            $fileId
        ],
        "sinkType" => $sinkType
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->createIndexWithOptions($workspaceId, $createIndexRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Initialize a knowledge base (index).
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} fileId - The file ID.
 * @param {string} name - The name of the knowledge base.
 * @param {string} structureType - The data type of the knowledge base.
 * @param {string} sourceType - The data type of the application data. Category and file types are supported.
 * @param {string} sinkType - The vector storage type of the knowledge base.
 * @returns {Promise<bailian20231229.CreateIndexResponse>} - The response from Alibaba Cloud Model Studio.
 */
async function createIndex(client, workspaceId, fileId, name, structureType, sourceType, sinkType) {
 const headers = {};
 const req = new bailian20231229.CreateIndexRequest({
   name,
   structureType,
   documentIds: [fileId],
   sourceType,
   sinkType
 });
 const runtime = new Util.RuntimeOptions({});
 return await client.createIndexWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Create (initialize) a knowledge base in Alibaba Cloud Model Studio.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="fileId">The file ID.</param>
/// <param name="name">The name of the knowledge base.</param>
/// <param name="structureType">The data type of the knowledge base.</param>
/// <param name="sourceType">The data type of the application data. Category and file types are supported.</param>
/// <param name="sinkType">The vector storage type of the knowledge base.</param>
/// <returns>The response object from Alibaba Cloud Model Studio.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.CreateIndexResponse CreateIndex(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string fileId,
    string name,
    string structureType,
    string sourceType,
    string sinkType)
{
    var headers = new Dictionary<string, string>() { };
    var createIndexRequest = new AlibabaCloud.SDK.Bailian20231229.Models.CreateIndexRequest
    {
        StructureType = structureType,
        Name = name,
        SourceType = sourceType,
        SinkType = sinkType,
        DocumentIds = new List<string> { fileId }
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.CreateIndexWithOptions(workspaceId, createIndexRequest, headers, runtime);
}
```

## Go

```
// CreateIndex creates (initializes) a knowledge base in Alibaba Cloud Model Studio.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - fileId (string): The file ID.
//   - name (string): The name of the knowledge base.
//   - structureType (string): The data type of the knowledge base.
//   - sourceType (string): The data type of the application data. Category and file types are supported.
//   - sinkType (string): The vector storage type of the knowledge base.
//
// Returns:
//   - *bailian20231229.CreateIndexResponse: The response from Alibaba Cloud Model Studio.
//   - error: An error message.
func CreateIndex(client *bailian20231229.Client, workspaceId, fileId, name, structureType, sourceType, sinkType string) (_result *bailian20231229.CreateIndexResponse, _err error) {
	headers := make(map[string]*string)
	createIndexRequest := &bailian20231229.CreateIndexRequest{
		StructureType: tea.String(structureType),
		Name:          tea.String(name),
		SourceType:    tea.String(sourceType),
		SinkType:      tea.String(sinkType),
		DocumentIds:   []*string{tea.String(fileId)},
	}
	runtime := &util.RuntimeOptions{}
	return client.CreateIndexWithOptions(tea.String(workspaceId), createIndexRequest, headers, runtime)
}
```

**Request example**

```
{
  "Name": "Alibaba Cloud Model Studio Mobile Phone Knowledge Base",
  "SinkType": "BUILT_IN",
  "SourceType": "DATA_CENTER_FILE",
  "StructureType": "unstructured",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx",
  "DocumentIds": [
    "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx"
  ]
}
```

**Response example**

```
{
  "Status": "200",
  "Message": "success",
  "RequestId": "87CB0999-F1BB-5290-8C79-A875B2XXXXXX",
  "Data": {
    "Id": "mymxbdxxxx"
  },
  "Code": "Success",
  "Success": "true"
}
```

#### **3.2. Submit an index job**

After you initialize the knowledge base, you must call the [SubmitIndexJob](/help/en/model-studio/api-bailian-2023-12-29-submitindexjob) operation to submit an index job. This starts the index building for the knowledge base.

-   **index\_id:** Enter the `Data.Id` returned when you [initialized the knowledge base](#00ded5ee90ffx).
    

After you submit the job, Alibaba Cloud Model Studio starts to build the index as an asynchronous task. The `Data.Id` returned by this operation is the corresponding job ID. In the next step, you will use this ID to query the latest status of the job.

**Important**

-   A RAM user must be granted the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this example.
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/SubmitIndexJob) and the generation of [sample code](https://api.alibabacloud.com/api/bailian/2023-12-29/SubmitIndexJob?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def submit_index(client, workspace_id, index_id):
    """
    Submit an index job to Alibaba Cloud Model Studio.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.

    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    headers = {}
    submit_index_job_request = bailian_20231229_models.SubmitIndexJobRequest(
        index_id=index_id
    )
    runtime = util_models.RuntimeOptions()
    return client.submit_index_job_with_options(workspace_id, submit_index_job_request, headers, runtime)
```

## Java

```
/**
 * Submit an index job to Alibaba Cloud Model Studio.
 *
 * @param client      The client object.
 * @param workspaceId The workspace ID.
 * @param indexId     The knowledge base ID.
 * @return The response object from Alibaba Cloud Model Studio.
 */
public SubmitIndexJobResponse submitIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.bailian20231229.models.SubmitIndexJobRequest submitIndexJobRequest = new com.aliyun.bailian20231229.models.SubmitIndexJobRequest();
    submitIndexJobRequest.setIndexId(indexId);
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.submitIndexJobWithOptions(workspaceId, submitIndexJobRequest, headers, runtime);
}
```

## PHP

```
/**
 * Submit an index job to Alibaba Cloud Model Studio.
 *
 * @param Bailian $client The client.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @return SubmitIndexJobResponse The response from Alibaba Cloud Model Studio.
 */
public static function submitIndex($client, $workspaceId, $indexId) {
    $headers = [];
    $submitIndexJobRequest = new SubmitIndexJobRequest([
        'indexId' => $indexId
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->submitIndexJobWithOptions($workspaceId, $submitIndexJobRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Submit an index job.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} indexId - The knowledge base ID.
 * @returns {Promise<bailian20231229.SubmitIndexJobResponse>} - The response from Alibaba Cloud Model Studio.
 */
async function submitIndex(client, workspaceId, indexId) {
  const headers = {};
  const req = new bailian20231229.SubmitIndexJobRequest({ indexId });
  const runtime = new Util.RuntimeOptions({});
  return await client.submitIndexJobWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Submit an index job to Alibaba Cloud Model Studio.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <returns>The response object from Alibaba Cloud Model Studio.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexJobResponse SubmitIndex(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string indexId)
{
    var headers = new Dictionary<string, string>() { };
    var submitIndexJobRequest = new AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexJobRequest
    {
           IndexId = indexId
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.SubmitIndexJobWithOptions(workspaceId, submitIndexJobRequest, headers, runtime);
}
```

## Go

```
// SubmitIndex submits an index job.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//
// Returns:
//   - *bailian20231229.SubmitIndexJobResponse: The response from Alibaba Cloud Model Studio.
//   - error: An error message.
func SubmitIndex(client *bailian20231229.Client, workspaceId, indexId string) (_result *bailian20231229.SubmitIndexJobResponse, _err error) {
	headers := make(map[string]*string)
	submitIndexJobRequest := &bailian20231229.SubmitIndexJobRequest{
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.SubmitIndexJobWithOptions(tea.String(workspaceId), submitIndexJobRequest, headers, runtime)
}
```

**Request example**

```
{
  "IndexId": "mymxbdxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "Status": "200",
  "Message": "success",
  "RequestId": "7774575F-571D-5854-82C2-634AB8XXXXXX",
  "Data": {
    "IndexId": "mymxbdxxxx",
    "Id": "3cd6fb57aaf44cd0b4dd2ca584xxxxxx"
  },
  "Code": "Success",
  "Success": "true"
}
```

#### **3.3. Wait for the index job to complete**

The index job takes some time to complete. During peak hours, this process can take several hours. To query its execution status, you can call the [GetIndexJobStatus](/help/en/model-studio/api-bailian-2023-12-29-getindexjobstatus) operation.

-   **job\_id:** Enter the `Data.Id` returned when you [submit the index job](#bf14fb34a58vy).
    

When the value of the `Data.Status` field in the response is `COMPLETED`, the knowledge base is created.

**Important**

-   A RAM user must be granted the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this operation.
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/SubmitIndexJob) and the generation of [sample code](https://api.alibabacloud.com/api/bailian/2023-12-29/SubmitIndexJob?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def get_index_job_status(client, workspace_id, index_id, job_id):
    """
    Query the status of an index job.

    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        job_id (str): The job ID.

    Returns:
        The response from Alibaba Cloud Model Studio.
    """
    headers = {}
    get_index_job_status_request = bailian_20231229_models.GetIndexJobStatusRequest(
        index_id=index_id,
        job_id=job_id
    )
    runtime = util_models.RuntimeOptions()
    return client.get_index_job_status_with_options(workspace_id, get_index_job_status_request, headers, runtime)
```

## Java

```
/**
 * Query the status of an index job.
 *
 * @param client      The client object.
 * @param workspaceId The workspace ID.
 * @param jobId       The job ID.
 * @param indexId     The knowledge base ID.
 * @return The response object from Alibaba Cloud Model Studio.
 */
public GetIndexJobStatusResponse getIndexJobStatus(com.aliyun.bailian20231229.Client client, String workspaceId, String jobId, String indexId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.bailian20231229.models.GetIndexJobStatusRequest getIndexJobStatusRequest = new com.aliyun.bailian20231229.models.GetIndexJobStatusRequest();
    getIndexJobStatusRequest.setIndexId(indexId);
    getIndexJobStatusRequest.setJobId(jobId);
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    GetIndexJobStatusResponse getIndexJobStatusResponse = null;
    getIndexJobStatusResponse = client.getIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
    return getIndexJobStatusResponse;
}
```

## PHP

```
/**
 * Query the status of an index job.
 *
 * @param Bailian $client The client.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @param string $jobId The job ID.
 * @return GetIndexJobStatusResponse The response from Alibaba Cloud Model Studio.
 */
public function getIndexJobStatus($client, $workspaceId, $jobId, $indexId) {
    $headers = [];
    $getIndexJobStatusRequest = new GetIndexJobStatusRequest([
        'indexId' => $indexId,
        'jobId' => $jobId
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->getIndexJobStatusWithOptions($workspaceId, $getIndexJobStatusRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Query the status of an index job.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} jobId - The job ID.
 * @param {string} indexId - The knowledge base ID.
 * @returns {Promise<bailian20231229.GetIndexJobStatusResponse>} - The response from Alibaba Cloud Model Studio.
 */
async function getIndexJobStatus(client, workspaceId, jobId, indexId) {
  const headers = {};
  const req = new bailian20231229.GetIndexJobStatusRequest({ jobId, indexId });
  const runtime = new Util.RuntimeOptions({});
  return await client.getIndexJobStatusWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Query the status of an index job.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="jobId">The job ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <returns>The response object from Alibaba Cloud Model Studio.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusResponse GetIndexJobStatus(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string jobId,
    string indexId)
{
    var headers = new Dictionary<string, string>() { };
    var getIndexJobStatusRequest = new AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusRequest
    {
        IndexId = indexId,
        JobId = jobId
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.GetIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
}
```

## Go

```
// GetIndexJobStatus queries the status of an index job.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - jobId (string): The job ID.
//   - indexId (string): The knowledge base ID.
//
// Returns:
//   - *bailian20231229.GetIndexJobStatusResponse: The response from Alibaba Cloud Model Studio.
//   - error: An error message.
func GetIndexJobStatus(client *bailian20231229.Client, workspaceId, jobId, indexId string) (_result *bailian20231229.GetIndexJobStatusResponse, _err error) {
	headers := make(map[string]*string)
	getIndexJobStatusRequest := &bailian20231229.GetIndexJobStatusRequest{
		JobId:   tea.String(jobId),
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.GetIndexJobStatusWithOptions(tea.String(workspaceId), getIndexJobStatusRequest, headers, runtime)
}
```

**Request example**

```
{
  "IndexId": "mymxbdxxxx",
  "JobId": "3cd6fb57aaf44cd0b4dd2ca584xxxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "Status": "200",
  "Message": "success",
  "RequestId": "E83423B9-7D6D-5283-836B-CF7EAEXXXXXX",
  "Data": {
    "Status": "COMPLETED",
    "Documents": [
      {
        "Status": "FINISH",
        "DocId": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
        "Message": "Import successful",
        "DocName": "Alibaba_Cloud_Model_Studio_Phone_Series_Introduction",
        "Code": "FINISH"
      }
    ],
    "JobId": "3cd6fb57aaf44cd0b4dd2ca584xxxxxx"
  },
  "Code": "Success",
  "Success": "true"
}
```

By following these steps, you have successfully created a knowledge base that contains the uploaded file.

## **Retrieve a knowledge base**

You can retrieve information from a knowledge base in two ways:

-   **Using an Alibaba Cloud Model Studio application:** When you [call the application](/help/en/model-studio/application-calling-guide#4100253b7chc3), you can specify the knowledge base ID `index_id` in the `rag_options` parameter to supplement your Large Language Model (LLM) application with private knowledge and provide the latest information.
    
-   **Using the Alibaba Cloud API:** Call the [Retrieve](/help/en/model-studio/api-bailian-2023-12-29-retrieve) API operation to retrieve information from a specified knowledge base and return the original text segments.
    

The first method sends the retrieved text segments to your configured model. The model then combines these segments with the user's original query to generate and return a final answer. The second method directly returns the text segments.

This topic describes how to **use an Alibaba Cloud API**.

You can call the [Retrieve](/help/en/model-studio/api-bailian-2023-12-29-retrieve) API operation to retrieve information from a specified knowledge base and return text segments.

-   **client:** [How to obtain the client](#52ff2774f0pq9)
    
-   **workspace\_id:** The workspace where the knowledge base is located. [How to obtain the workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo)
    
    > RAM users can retrieve knowledge bases only from [workspaces they have joined](/help/en/model-studio/grant-the-business-space-permission-to-ram-users).
    

If the result returned by this operation contains excessive irrelevant information, you can specify [SearchFilters](/help/en/model-studio/how-to-use-search-filters) in the request to set filter conditions, such as filtering by [tags](/help/en/model-studio/rag-knowledge-base#0a4efa5d7dta6), to exclude the irrelevant information.

**Important**

-   Before calling this example, a RAM user must obtain [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy).
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/Retrieve) and multi-language [code sample generation](https://api.alibabacloud.com/api/bailian/2023-12-29/Retrieve?tab=DEMO&lang=JAVA).
    

## Python

```
def retrieve_index(client, workspace_id, index_id, query):
    """
    Retrieves information from a specified knowledge base.
        
    Args:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        query (str): The original input prompt.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    retrieve_request = bailian_20231229_models.RetrieveRequest(
        index_id=index_id,
        query=query
    )
    runtime = util_models.RuntimeOptions()
    return client.retrieve_with_options(workspace_id, retrieve_request, headers, runtime)
```

## Java

```
/**
 * Retrieves information from a specified knowledge base.
 *
 * @param client         The client object (bailian20231229Client).
 * @param workspaceId    The workspace ID.
 * @param indexId        The knowledge base ID.
 * @param query          The search statement.
 * @return               The response from the Model Studio service.
 */
public RetrieveResponse retrieveIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId, String query) throws Exception {
    RetrieveRequest retrieveRequest = new RetrieveRequest();
    retrieveRequest.setIndexId(indexId);
    retrieveRequest.setQuery(query);
    RuntimeOptions runtime = new RuntimeOptions();
    return client.retrieveWithOptions(workspaceId, retrieveRequest, null, runtime);
}
```

## PHP

```
/**
 * Retrieves information from a specified knowledge base.
 *
 * @param Bailian $client The client object.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @param string $query The search statement.
 * @return RetrieveResponse The response from the Model Studio service.
 * @throws Exception
 */
public function retrieveIndex($client, $workspaceId, $indexId, $query) {
    $headers = [];
    $retrieveRequest = new RetrieveRequest([
        "query" => $query,
        "indexId" => $indexId
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->retrieveWithOptions($workspaceId, $retrieveRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Retrieves information from a specified knowledge base
 * @param {bailian20231229.Client} client The client.
 * @param {string} workspaceId The workspace ID.
 * @param {string} indexId The knowledge base ID.
 * @param {string} query The retrieval query.
 * @returns {Promise<bailian20231229.RetrieveResponse>} The response from the Model Studio service.
 */
async function retrieveIndex(client, workspaceId, indexId, query) {
    const headers = {};
    const req = new bailian20231229.RetrieveRequest({
        indexId,
        query
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.retrieveWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Retrieves information from a specified knowledge base.
/// </summary>
/// <param name="client">The client object (bailian20231229Client).</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <param name="query">The search statement.</param>
/// <returns>The response from the Model Studio service.</returns>
/// <exception cref="Exception">If the call fails.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.RetrieveResponse RetrieveIndex(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string indexId,
    string query)
{
    var headers = new Dictionary<string, string>() { };
    var retrieveRequest = new AlibabaCloud.SDK.Bailian20231229.Models.RetrieveRequest
    {
        IndexId = indexId,
        Query = query
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.RetrieveWithOptions(workspaceId, retrieveRequest, headers, runtime);
}
```

## Go

```
// retrieveIndex retrieves information from a specified knowledge base.
//
// Args:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//   - query (string): The search statement
//
// Returns:
//   - *bailian20231229.RetrieveResponse: The response from the Model Studio service.
//   - error: The error message.
func retrieveIndex(client *bailian20231229.Client, workspaceId, indexId, query string) (*bailian20231229.RetrieveResponse, error) {
	headers := make(map[string]*string)
	request := &bailian20231229.RetrieveRequest{
		IndexId: tea.String(indexId),
		Query:   tea.String(query),
	}
	runtime := &util.RuntimeOptions{}
	return client.RetrieveWithOptions(tea.String(workspaceId), request, headers, runtime)
}
```

**Request example**

```
{
  "IndexId": "mymxbdxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx",
  "Query": "Please introduce the Alibaba Cloud Model Studio X1 phone."
}
```

**Response example**

```
{
  "Status": "200",
  "Message": "success",
  "RequestId": "17316EA2-1F4D-55AC-8872-53F6F1XXXXXX",
  "Data": {
    "Nodes": [
      {
        "Score": 0.6294550895690918,
        "Metadata": {
          "file_path": "https://bailian-datahub-data-prod.oss-cn-beijing.aliyuncs.com/10285263/multimodal/docJson/Alibaba_Cloud_Model_Studio_Phone_Series_Product_Introduction_1742197778230.json?Expires=1742457465&OSSAccessKeyId=TestID&Signature=ptFkSObdnBrbJNEw8CnlOSP%2FTeI%3D",
          "is_displayed_chunk_content": "true",
          "_rc_v_score": 0.7449869735535081,
          "image_url": [],
          "nid": "9ad347d9e4d7465d2c1e693a08b0077c|d6f7fbf8403e0df796258e5ada1ee1c1|4772257e93ed64ea087ff4be0d5e4620|7ce1370e4a1958842c9268144a452cc7",
          "_q_score": 1,
          "source": "0",
          "_score": 0.6294550895690918,
          "title": "Alibaba Cloud Model Studio Phone Product Introduction",
          "doc_id": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
          "content": "Alibaba Cloud Model Studio Phone Product Introduction Alibaba Cloud Model Studio X1 — Enjoy the ultimate visual experience: Features a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120 Hz refresh rate for a smooth and vivid visual experience. The powerful combination of 256 GB of mass storage and 12 GB of RAM handles large games and multitasking with ease. A long-lasting 5000 mAh battery and an ultra-sensitive quad-camera system capture every wonderful moment of your life. Reference price: 4599–4999 Tongyi Vivid 7 — A new experience in smart photography: It has a 6.5-inch 1080 x 2400 pixel full screen. The AI smart photography feature ensures every photo shows professional-grade color and detail. 8 GB of RAM and 128 GB of storage ensure smooth operation, and the 4500 mAh battery meets daily needs. Side fingerprint unlock is convenient and secure. Reference price: 2999–3299 Stardust S9 Pro — An innovative visual feast: A groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design provides a borderless visual experience. Top-tier configuration with 512 GB of storage and 16 GB of RAM, combined with a 6000 mAh battery and 100 W fast charging technology, delivers both performance and endurance, leading the tech trend. Reference price: 5999–6499.",
          "_rc_score": 0,
          "workspace_id": "llm-4u5xpd1xdjqpxxxx",
          "hier_title": "Alibaba Cloud Model Studio Phone Product Introduction",
          "_rc_t_score": 0.05215025693178177,
          "doc_name": "Alibaba Cloud Model Studio Series Phone Product Introduction",
          "pipeline_id": "mymxbdxxxx",
          "_id": "llm-4u5xpd1xdjqp8itj_mymxbd6172_file_0b21e0a852cd40cd9741c54fefbb61cd_10285263_0_0"
        },
        "Text": "Alibaba Cloud Model Studio Phone Product Introduction Alibaba Cloud Model Studio X1 — Enjoy the ultimate visual experience: Features a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120 Hz refresh rate for a smooth and vivid visual experience. The powerful combination of 256 GB of mass storage and 12 GB of RAM handles large games and multitasking with ease. A long-lasting 5000 mAh battery and an ultra-sensitive quad-camera system capture every wonderful moment of your life. Reference price: 4599–4999 Tongyi Vivid 7 — A new experience in smart photography: It has a 6.5-inch 1080 x 2400 pixel full screen. The AI smart photography feature ensures every photo shows professional-grade color and detail. 8 GB of RAM and 128 GB of storage ensure smooth operation, and the 4500 mAh battery meets daily needs. Side fingerprint unlock is convenient and secure. Reference price: 2999–3299 Stardust S9 Pro — An innovative visual feast: A groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design provides a borderless visual experience. Top-tier configuration with 512 GB of storage and 16 GB of RAM, combined with a 6000 mAh battery and 100 W fast charging technology, delivers both performance and endurance, leading the tech trend. Reference price: 5999–6499."
      },
      {
        "Score": 0.5322970747947693,
        "Metadata": {
          "file_path": "https://bailian-datahub-data-prod.oss-cn-beijing.aliyuncs.com/10285263/multimodal/docJson/Alibaba_Cloud_Model_Studio_Phone_Series_Product_Introduction_1742197778230.json?Expires=1742457465&OSSAccessKeyId=TestID&Signature=ptFkSObdnBrbJNEw8CnlOSP%2FTeI%3D",
          "is_displayed_chunk_content": "true",
          "_rc_v_score": 0.641660213470459,
          "image_url": [],
          "nid": "00be1864c18b4c39c59f83713af80092|4f2bfb02cc9fc4e85597b2e717699207",
          "_q_score": 0.9948930557644994,
          "source": "0",
          "_score": 0.5322970747947693,
          "title": "Alibaba Cloud Model Studio Phone Product Introduction",
          "doc_id": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
          "content": "Alibaba Cloud Model Studio Flex Fold+ — A new era of foldable screens: Combining innovation and luxury, it features a 7.6-inch 1800 x 2400 pixel main screen and a 4.7-inch 1080 x 2400 pixel external screen. The multi-angle free-stop hinge design meets the needs of different scenarios. Alibaba Cloud Model Studio Flex Fold+ — A new era of foldable screens: Combining innovation and luxury, it features a 7.6-inch 1800 x 2400 pixel main screen and a 4.7-inch 1080 x 2400 pixel external screen. The multi-angle free-stop hinge design meets the needs of different scenarios. 512 GB of storage, 12 GB of RAM, a 4700 mAh battery, and UTG ultra-thin flexible glass open a new chapter in the era of foldable screens. In addition, this phone supports Dual SIM Dual Standby and satellite calls, helping you stay connected anywhere in the world. Reference retail price: 9999–10999. Each phone is a masterpiece of craftsmanship, designed to be a work of technological art in your hands. Choose your smart companion and start a new chapter of future tech life.",
          "_rc_score": 0,
          "workspace_id": "llm-4u5xpd1xdjqpxxxx",
          "hier_title": "Alibaba Cloud Model Studio Phone Product Introduction",
          "_rc_t_score": 0.05188392847776413,
          "doc_name": "Alibaba Cloud Model Studio Series Phone Product Introduction",
          "pipeline_id": "mymxbdxxxx",
          "_id": "llm-4u5xpd1xdjqp8itj_mymxbd6172_file_0b21e0a852cd40cd9741c54fefbb61cd_10285263_0_2"
        },
        "Text": "Alibaba Cloud Model Studio Flex Fold+ — A new era of foldable screens: Combining innovation and luxury, it features a 7.6-inch 1800 x 2400 pixel main screen and a 4.7-inch 1080 x 2400 pixel external screen. The multi-angle free-stop hinge design meets the needs of different scenarios. Alibaba Cloud Model Studio Flex Fold+ — A new era of foldable screens: Combining innovation and luxury, it features a 7.6-inch 1800 x 2400 pixel main screen and a 4.7-inch 1080 x 2400 pixel external screen. The multi-angle free-stop hinge design meets the needs of different scenarios. 512 GB of storage, 12 GB of RAM, a 4700 mAh battery, and UTG ultra-thin flexible glass open a new chapter in the era of foldable screens. In addition, this phone supports Dual SIM Dual Standby and satellite calls, helping you stay connected anywhere in the world. Reference retail price: 9999–10999. Each phone is a masterpiece of craftsmanship, designed to be a work of technological art in your hands. Choose your smart companion and start a new chapter of future tech life."
      },
      {
        "Score": 0.5050643086433411,
        "Metadata": {
          "file_path": "https://bailian-datahub-data-prod.oss-cn-beijing.aliyuncs.com/10285263/multimodal/docJson/Alibaba_Cloud_Model_Studio_Phone_Series_Product_Introduction_1742197778230.json?Expires=1742457465&OSSAccessKeyId=TestID&Signature=ptFkSObdnBrbJNEw8CnlOSP%2FTeI%3D",
          "is_displayed_chunk_content": "true",
          "_rc_v_score": 0.6757396459579468,
          "image_url": [],
          "nid": "f05d1b51eb6b033b32a162d90a9da71b|5cb6b848be8d11eb168c031025415cc5|4f2bfb02cc9fc4e85597b2e717699207",
          "_q_score": 0.9890713450653327,
          "source": "0",
          "_score": 0.5050643086433411,
          "title": "Alibaba Cloud Model Studio Phone Product Introduction",
          "doc_id": "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx",
          "content": "Top-tier configuration with 512 GB of storage and 16 GB of RAM, combined with a 6000 mAh battery and 100 W fast charging technology, delivers both performance and endurance, leading the tech trend. Reference price: 5999–6499. Alibaba Cloud Model Studio Ace Ultra — The gamer's choice: Equipped with a 6.67-inch 1080 × 2400 pixel screen, 10 GB of RAM, and 256 GB of storage to ensure silky-smooth gameplay. The 5500 mAh battery with a liquid cooling system stays cool even during long gaming sessions. High-dynamic dual speakers upgrade the gaming experience with immersive sound effects. Reference price: 3999–4299. Alibaba Cloud Model Studio Zephyr Z9 — The art of being thin and portable: A lightweight 6.4-inch 1080 × 2340 pixel design, with 128 GB of storage and 6 GB of RAM, is more than enough for daily use. The 4000 mAh battery ensures a full day of use without worry. The 30x digital zoom lens captures distant details. It is thin but powerful. Reference price: 2499–2799. Alibaba Cloud Model Studio Flex Fold+ — A new era of foldable screens: Combining innovation and luxury, it features a 7.6-inch 1800 × 2400 pixel main screen and a 4.7-inch 1080 × 2400 pixel external screen. The multi-angle free-stop hinge design meets the needs of different scenarios.",
          "_rc_score": 0,
          "workspace_id": "llm-4u5xpd1xdjqpxxxx",
          "hier_title": "Alibaba Cloud Model Studio Phone Product Introduction",
          "_rc_t_score": 0.05158032476902008,
          "doc_name": "Alibaba Cloud Model Studio Series Phone Product Introduction",
          "pipeline_id": "mymxbdxxxx",
          "_id": "llm-4u5xpd1xdjqp8itj_mymxbd6172_file_0b21e0a852cd40cd9741c54fefbb61cd_10285263_0_1"
        },
        "Text": "Top-tier configuration with 512 GB of storage and 16 GB of RAM, combined with a 6000 mAh battery and 100 W fast charging technology, delivers both performance and endurance, leading the tech trend. Reference price: 5999–6499. Alibaba Cloud Model Studio Ace Ultra — The gamer's choice: Equipped with a 6.67-inch 1080 × 2400 pixel screen, 10 GB of RAM, and 256 GB of storage to ensure silky-smooth gameplay. The 5500 mAh battery with a liquid cooling system stays cool even during long gaming sessions. High-dynamic dual speakers upgrade the gaming experience with immersive sound effects. Reference price: 3999–4299. Alibaba Cloud Model Studio Zephyr Z9 — The art of being thin and portable: A lightweight 6.4-inch 1080 × 2340 pixel design, with 128 GB of storage and 6 GB of RAM, is more than enough for daily use. The 4000 mAh battery ensures a full day of use without worry. The 30x digital zoom lens captures distant details. It is thin but powerful. Reference price: 2499–2799. Alibaba Cloud Model Studio Flex Fold+ — A new era of foldable screens: Combining innovation and luxury, it features a 7.6-inch 1800 × 2400 pixel main screen and a 4.7-inch 1080 × 2400 pixel external screen. The multi-angle free-stop hinge design meets the needs of different scenarios."
      }
    ]
  },
  "Code": "Success",
  "Success": "true"
}
```

## **Update a knowledge base**

This topic describes how to update a document search knowledge base. Any applications that use the knowledge base reflect the updates in real time. New content can be searched and retrieved, and deleted content is no longer available.

> You cannot update data query or image Q&A pair knowledge bases using an API. For more information, see [Update a knowledge base](/help/en/model-studio/rag-knowledge-base#b2f92e9d2car8).

-   **Incremental update:** You can follow these three steps: upload the updated file, append the file to the knowledge base, and then delete the old file. No other method is available.
    
-   **Full update:** For each file in the knowledge base, perform the three steps to complete the update.
    
-   **How to automatically update or synchronize a knowledge base:** For more information, see [How to automatically update or synchronize a knowledge base](#827f8c570a9ni).
    
-   **File limit for a single update:** Do not update more than 10,000 files at a time. If you exceed this limit, the knowledge base might not update correctly.
    

### **1\. Upload the updated file**

Follow the procedure in [Create a knowledge base: Step 2](#4b4a1236aalno) to upload the updated file to the workspace of the knowledge base.

> You must request a new file upload lease to generate a new set of upload parameters for the updated file.

### **2\. Append the file to the knowledge base**

#### **2.1. Submit a task to append the file**

After the uploaded file is parsed, you can call the [SubmitIndexAddDocumentsJob](/help/en/model-studio/api-bailian-2023-12-29-submitindexadddocumentsjob) operation to append the new file to the knowledge base and rebuild the knowledge base index.

-   **client:** For more information, see [How to obtain the client](#52ff2774f0pq9).
    
-   **workspace\_id:** For more information, see [How to obtain a workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo).
    
-   **file\_id:** Enter the `FileId` that is returned when you [add a file to a category](#494345d4b1hx2).
    
-   **source\_type:** In this example, enter `DATA_CENTER_FILE`.
    

After you submit the task, Alibaba Cloud Model Studio starts to rebuild the knowledge base as an asynchronous task. The `Data.Id` returned by this operation is the task ID (job\_id). You can use this ID in the next step to query the latest status of the task.

**Important**

-   After you call the SubmitIndexAddDocumentsJob operation, the task runs for a period of time. You can use the `job_id` to query the task status. **Do not resubmit the task before it is complete.**
    

**Important**

-   Before a RAM user calls this example, obtain the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy).
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/SubmitIndexAddDocumentsJob) and [code example generation](https://api.alibabacloud.com/api/bailian/2023-12-29/SubmitIndexAddDocumentsJob?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def submit_index_add_documents_job(client, workspace_id, index_id, file_id, source_type):
    """
    Appends and imports a parsed file to a document search knowledge base.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        file_id (str): The file ID.
        source_type(str): The data type.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    submit_index_add_documents_job_request = bailian_20231229_models.SubmitIndexAddDocumentsJobRequest(
        index_id=index_id,
        document_ids=[file_id],
        source_type=source_type
    )
    runtime = util_models.RuntimeOptions()
    return client.submit_index_add_documents_job_with_options(workspace_id, submit_index_add_documents_job_request, headers, runtime)
```

## Java

```
/**
 * Appends and imports a parsed file to a document search knowledge base.
 *
 * @param client      The client.
 * @param workspaceId The workspace ID.
 * @param indexId     The knowledge base ID.
 * @param fileId      The file ID.
 * @param sourceType  The data type.
 * @return The response from the Model Studio service.
 */
public SubmitIndexAddDocumentsJobResponse submitIndexAddDocumentsJob(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId, String fileId, String sourceType) throws Exception {
    Map<String, String> headers = new HashMap<>();
    SubmitIndexAddDocumentsJobRequest submitIndexAddDocumentsJobRequest = new SubmitIndexAddDocumentsJobRequest();
    submitIndexAddDocumentsJobRequest.setIndexId(indexId);
    submitIndexAddDocumentsJobRequest.setDocumentIds(Collections.singletonList(fileId));
    submitIndexAddDocumentsJobRequest.setSourceType(sourceType);
    RuntimeOptions runtime = new RuntimeOptions();
    return client.submitIndexAddDocumentsJobWithOptions(workspaceId, submitIndexAddDocumentsJobRequest, headers, runtime);
}
```

## PHP

```
/**
 * Appends and imports a parsed file to a document search knowledge base.
 *
 * @param Bailian $client The client object.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @param string $fileId The file ID.
 * @param string $sourceType The data type.
 * @return SubmitIndexAddDocumentsJobResponse The response from the Model Studio service.
 * @throws Exception
 */
public function submitIndexAddDocumentsJob($client, $workspaceId, $indexId, $fileId, $sourceType) {
    $headers = [];
    $submitIndexAddDocumentsJobRequest = new SubmitIndexAddDocumentsJobRequest([
        "indexId" =>$indexId,
        "sourceType" => $sourceType,
        "documentIds" => [
            $fileId
        ]
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->submitIndexAddDocumentsJobWithOptions($workspaceId, $submitIndexAddDocumentsJobRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Submits a job to append a file.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} indexId - The knowledge base ID.
 * @param {string} fileId - The file ID.
 * @param {string} sourceType - The data type.
 * @returns {Promise<bailian20231229.SubmitIndexAddDocumentsJobResponse>} - The response from the Model Studio service.
 */
async function submitIndexAddDocumentsJob(client, workspaceId, indexId, fileId, sourceType) {
    const headers = {};
    const req = new bailian20231229.SubmitIndexAddDocumentsJobRequest({
        indexId,
        documentIds: [fileId],
        sourceType,
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.submitIndexAddDocumentsJobWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Appends and imports a parsed file to a document search knowledge base.
/// </summary>
/// <param name="client">The client.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <param name="fileId">The file ID.</param>
/// <param name="sourceType">The data type.</param>
/// <returns>The response from the Model Studio service.</returns>
public AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexAddDocumentsJobResponse SubmitIndexAddDocumentsJob(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string indexId,
    string fileId,
    string sourceType)
{
    var headers = new Dictionary<string, string>() { };
    var submitIndexAddDocumentsJobRequest = new AlibabaCloud.SDK.Bailian20231229.Models.SubmitIndexAddDocumentsJobRequest
    {
        IndexId = indexId,
        DocumentIds = new List<string> { fileId },
        SourceType = sourceType
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.SubmitIndexAddDocumentsJobWithOptions(workspaceId, submitIndexAddDocumentsJobRequest, headers, runtime);
}
```

## Go

```
// SubmitIndexAddDocumentsJob appends and imports a parsed file to a document search knowledge base.
//
// Parameters:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//   - fileId(string): The file ID.
//   - sourceType(string): The data type.
//
// Returns:
//   - *bailian20231229.SubmitIndexAddDocumentsJobResponse: The response from the Model Studio service.
//   - error: The error message.
func SubmitIndexAddDocumentsJob(client *bailian20231229.Client, workspaceId, indexId, fileId, sourceType string) (_result *bailian20231229.SubmitIndexAddDocumentsJobResponse, _err error) {
	headers := make(map[string]*string)
	submitIndexAddDocumentsJobRequest := &bailian20231229.SubmitIndexAddDocumentsJobRequest{
		IndexId:     tea.String(indexId),
		SourceType:  tea.String(sourceType),
		DocumentIds: []*string{tea.String(fileId)},
	}
	runtime := &util.RuntimeOptions{}
	return client.SubmitIndexAddDocumentsJobWithOptions(tea.String(workspaceId), submitIndexAddDocumentsJobRequest, headers, runtime)
}
```

**Request example**

```
{
  "IndexId": "mymxbdxxxx",
  "SourceType": "DATA_CENTER_FILE",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx",
  "DocumentIds": [
    "file_247a2fd456a349ee87d071404840109b_10xxxxxx"
  ]
}
```

**Response example**

```
{
  "Status": "200",
  "RequestId": "F693EB60-FEFC-559A-BF56-A41F52XXXXXX",
  "Message": "success",
  "Data": {
    "Id": "d8d189a36a3248438dca23c078xxxxxx"
  },
  "Code": "Success",
  "Success": "true"
}
```

#### **2.2. Wait for the append task to complete**

The indexing task takes time to complete. During peak hours, this process can take several hours. You can call the [GetIndexJobStatus](/help/en/model-studio/api-bailian-2023-12-29-getindexjobstatus) operation to query the execution status.

-   **job\_id:** Enter the `Data.Id` that is returned when you [submit an append file task](#b2f19a956bcsl).
    

If the value of the `Data.Status` field in the response is `COMPLETED`, all updated files have been successfully appended to the knowledge base.

> The `Documents` list in the response contains all files for the append task, which is uniquely identified by the `job_id` that you provided.

**Important**

-   Before a RAM user calls this operation, obtain the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy).
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/GetIndexJobStatus) and [code example generation](https://api.alibabacloud.com/api/bailian/2023-12-29/GetIndexJobStatus?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def get_index_job_status(client, workspace_id, index_id, job_id):
    """
    Queries the status of an indexing task.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        job_id (str): The task ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    get_index_job_status_request = bailian_20231229_models.GetIndexJobStatusRequest(
        index_id=index_id,
        job_id=job_id
    )
    runtime = util_models.RuntimeOptions()
    return client.get_index_job_status_with_options(workspace_id, get_index_job_status_request, headers, runtime)
```

## Java

```
/**
 * Queries the status of an indexing task.
 *
 * @param client      The client object.
 * @param workspaceId The workspace ID.
 * @param jobId       The task ID.
 * @param indexId     The knowledge base ID.
 * @return The response object from the Model Studio service.
 */
public GetIndexJobStatusResponse getIndexJobStatus(com.aliyun.bailian20231229.Client client, String workspaceId, String jobId, String indexId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    com.aliyun.bailian20231229.models.GetIndexJobStatusRequest getIndexJobStatusRequest = new com.aliyun.bailian20231229.models.GetIndexJobStatusRequest();
    getIndexJobStatusRequest.setIndexId(indexId);
    getIndexJobStatusRequest.setJobId(jobId);
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    GetIndexJobStatusResponse getIndexJobStatusResponse = null;
    getIndexJobStatusResponse = client.getIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
    return getIndexJobStatusResponse;
}
```

## PHP

```
/**
 * Queries the status of an indexing task.
 *
 * @param Bailian $client The client.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @param string $jobId The task ID.
 * @return GetIndexJobStatusResponse The response from the Model Studio service.
 */
public function getIndexJobStatus($client, $workspaceId, $jobId, $indexId) {
    $headers = [];
    $getIndexJobStatusRequest = new GetIndexJobStatusRequest([
        'indexId' => $indexId,
        'jobId' => $jobId
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->getIndexJobStatusWithOptions($workspaceId, $getIndexJobStatusRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Queries the status of an indexing task.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} jobId - The task ID.
 * @param {string} indexId - The knowledge base ID.
 * @returns {Promise<bailian20231229.GetIndexJobStatusResponse>} - The response from the Model Studio service.
 */
static getIndexJobStatus(client, workspaceId, jobId, indexId) {
    const headers = {};
    const req = new bailian20231229.GetIndexJobStatusRequest({ jobId, indexId });
    const runtime = new Util.RuntimeOptions({});
    return await client.getIndexJobStatusWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Queries the status of an indexing task.
/// </summary>
/// <param name="client">The client object.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="jobId">The task ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <returns>The response object from the Model Studio service.</returns>
/// <exception cref="Exception">An exception is thrown if an error occurs during the call.</exception>
public AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusResponse GetIndexJobStatus(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string jobId,
    string indexId)
{
    var headers = new Dictionary<string, string>() { };
    var getIndexJobStatusRequest = new AlibabaCloud.SDK.Bailian20231229.Models.GetIndexJobStatusRequest
    {
        IndexId = indexId,
        JobId = jobId
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.GetIndexJobStatusWithOptions(workspaceId, getIndexJobStatusRequest, headers, runtime);
}
```

## Go

```
// GetIndexJobStatus queries the status of an indexing task.
//
// Parameters:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - jobId (string): The task ID.
//   - indexId (string): The knowledge base ID.
//
// Returns:
//   - *bailian20231229.GetIndexJobStatusResponse: The response from the Model Studio service.
//   - error: The error message.
func GetIndexJobStatus(client *bailian20231229.Client, workspaceId, jobId, indexId string) (_result *bailian20231229.GetIndexJobStatusResponse, _err error) {
	headers := make(map[string]*string)
	getIndexJobStatusRequest := &bailian20231229.GetIndexJobStatusRequest{
		JobId:   tea.String(jobId),
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.GetIndexJobStatusWithOptions(tea.String(workspaceId), getIndexJobStatusRequest, headers, runtime)
}
```

**Request example**

```
{
  "IndexId": "mymxbdxxxx",
  "JobId": "76f243b9ee534d59a61f156ff0xxxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "Status": 200,
  "Message": "success",
  "RequestId": "7F727D58-D90E-51E7-B56E-985A42XXXXXX",
  "Data": {
    "Status": "COMPLETED",
    "Documents": [
      {
        "Status": "FINISH",
        "DocId": "file_247a2fd456a349ee87d071404840109b_10xxxxxx",
        "Message": "Import successful",
        "DocName": "Alibaba_Cloud_Model_Studio_Phone_Series_Introduction",
        "Code": "FINISH"
      }
    ],
    "JobId": "76f243b9ee534d59a61f156ff0xxxxxx"
  },
  "Code": "Success",
  "Success": true
}
```

### **3\. Delete the old file**

Finally, you can call the [DeleteIndexDocument](/help/en/model-studio/api-bailian-2023-12-29-deleteindexdocument) operation to permanently delete the old version of the file from the specified knowledge base. This prevents old information from being retrieved by mistake.

-   **file\_id:** Enter the `FileId` of the old file.
    

**Note**

You can delete only files in the knowledge base that have a status of import failed (INSERT\_ERROR) or import successful (FINISH). To query the status of files in the knowledge base, you can call the [ListIndexDocuments](/help/en/model-studio/api-bailian-2023-12-29-listindexdocuments) operation.

**Important**

-   Before a RAM user calls this example, obtain the required [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy).
    
-   This example supports [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/DeleteIndexDocument) and [code example generation](https://api.alibabacloud.com/api/bailian/2023-12-29/DeleteIndexDocument?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def delete_index_document(client, workspace_id, index_id, file_id):
    """
    Permanently deletes one or more files from a specified document search knowledge base.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.
        file_id (str): The file ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    delete_index_document_request = bailian_20231229_models.DeleteIndexDocumentRequest(
        index_id=index_id,
        document_ids=[file_id]
    )
    runtime = util_models.RuntimeOptions()
    return client.delete_index_document_with_options(workspace_id, delete_index_document_request, headers, runtime)
```

## Java

```
/**
 * Permanently deletes one or more files from a specified document search knowledge base.
 *
 * @param client      The client.
 * @param workspaceId The workspace ID.
 * @param indexId     The knowledge base ID.
 * @param fileId      The file ID.
 * @return The response from the Model Studio service.
 */
public DeleteIndexDocumentResponse deleteIndexDocument(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId, String fileId) throws Exception {
    Map<String, String> headers = new HashMap<>();
    DeleteIndexDocumentRequest deleteIndexDocumentRequest = new DeleteIndexDocumentRequest();
    deleteIndexDocumentRequest.setIndexId(indexId);
    deleteIndexDocumentRequest.setDocumentIds(Collections.singletonList(fileId));
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.deleteIndexDocumentWithOptions(workspaceId, deleteIndexDocumentRequest, headers, runtime);
}
```

## PHP

```
/**
 * Permanently deletes files from a specified document search knowledge base.
 *
 * @param Bailian $client The client object.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @param string $fileId The file ID.
 * @return mixed The response from the Model Studio service.
 * @throws Exception
 */
public function deleteIndexDocument($client, $workspaceId, $indexId, $fileId) {
    $headers = [];
    $deleteIndexDocumentRequest = new DeleteIndexDocumentRequest([
        "indexId" => $indexId,
        "documentIds" => [
            $fileId
        ]
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->deleteIndexDocumentWithOptions($workspaceId, $deleteIndexDocumentRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Deletes the old file.
 * @param {Bailian20231229Client} client - The client.
 * @param {string} workspaceId - The workspace ID.
 * @param {string} indexId - The knowledge base ID.
 * @param {string} fileId - The file ID.
 * @returns {Promise<bailian20231229.DeleteIndexDocumentResponse>} - The response from the Model Studio service.
 */
async function deleteIndexDocument(client, workspaceId, indexId, fileId) {
    const headers = {};
    const req = new bailian20231229.DeleteIndexDocumentRequest({
        indexId,
        documentIds: [fileId],
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.deleteIndexDocumentWithOptions(workspaceId, req, headers, runtime);
}
```

## C#

```
/// <summary>
/// Permanently deletes one or more files from a specified document search knowledge base.
/// </summary>
/// <param name="client">The client.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <param name="fileId">The file ID.</param>
/// <returns>The response from the Model Studio service.</returns>
public AlibabaCloud.SDK.Bailian20231229.Models.DeleteIndexDocumentResponse DeleteIndexDocument(
    AlibabaCloud.SDK.Bailian20231229.Client client,
    string workspaceId,
    string indexId,
    string fileId)
{
    var headers = new Dictionary<string, string>() { };
    var deleteIndexDocumentRequest = new AlibabaCloud.SDK.Bailian20231229.Models.DeleteIndexDocumentRequest
    {
        IndexId = indexId,
        DocumentIds = new List<string> { fileId }
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.DeleteIndexDocumentWithOptions(workspaceId, deleteIndexDocumentRequest, headers, runtime);
}
```

## Go

```
// DeleteIndexDocument permanently deletes one or more files from a specified document search knowledge base.
//
// Parameters:
//   - client (bailian20231229.Client): The client.
//   - workspaceId (string): The workspace ID.
//   - indexId (string): The knowledge base ID.
//   - fileId (string): The file ID.
//
// Returns:
//   - *bailian20231229.DeleteIndexDocumentResponse: The response from the Model Studio service.
//   - error: The error message.
func DeleteIndexDocument(client *bailian20231229.Client, workspaceId, indexId, fileId string) (*bailian20231229.DeleteIndexDocumentResponse, error) {
	headers := make(map[string]*string)
	deleteIndexDocumentRequest := &bailian20231229.DeleteIndexDocumentRequest{
		IndexId:     tea.String(indexId),
		DocumentIds: []*string{tea.String(fileId)},
	}
	runtime := &util.RuntimeOptions{}
	return client.DeleteIndexDocumentWithOptions(tea.String(workspaceId), deleteIndexDocumentRequest, headers, runtime)
}
```

**Request example**

```
{
  "DocumentIds": [
    "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx"
  ],
  "IndexId": "mymxbdxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Response example**

```
{
  "Status": "200",
  "RequestId": "2D8505EC-C667-5102-9154-00B6FEXXXXXX",
  "Message": "success",
  "Data": {
    "DeletedDocument": [
      "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx"
    ]
  },
  "Code": "Success",
  "Success": "true"
}
```

## **Manage knowledge bases**

> [Creating and using knowledge bases](/help/en/model-studio/rag-knowledge-base#81f57beb71zs1) is not supported through API operations. You must perform these operations in the [Model Studio console](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base).

### **View a knowledge base**

You can call the [ListIndices](/help/en/model-studio/api-bailian-2023-12-29-listindices) API operation to view information about one or more knowledge bases in a specified workspace.

-   **client:** [How to obtain the client](#52ff2774f0pq9)
    
-   **workspace\_id:** [How to obtain the workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo)
    
    > A RAM user can view knowledge bases only in their [joined workspaces](/help/en/model-studio/grant-the-business-space-permission-to-ram-users).
    

**Important**

-   A RAM user must obtain [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this example.
    
-   You can [test this operation online](https://api.alibabacloud.com/api/bailian/2023-12-29/ListIndices) and [generate code examples](https://api.alibabacloud.com/api/bailian/2023-12-29/ListIndices?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def list_indices(client, workspace_id):
    """
    Gets the details of one or more knowledge bases in a specified workspace.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    list_indices_request = bailian_20231229_models.ListIndicesRequest()
    runtime = util_models.RuntimeOptions()
    return client.list_indices_with_options(workspace_id, list_indices_request, headers, runtime)
```

## Java

```
/**
 * Gets the details of one or more knowledge bases in a specified workspace.
 *
 * @param client      The client.
 * @param workspaceId The workspace ID.
 * @return The response from the Model Studio service.
 */
public ListIndicesResponse listIndices(com.aliyun.bailian20231229.Client client, String workspaceId) throws Exception {
    java.util.Map<String, String> headers = new java.util.HashMap<>();
    com.aliyun.bailian20231229.models.ListIndicesRequest listIndicesRequest = new com.aliyun.bailian20231229.models.ListIndicesRequest();
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.listIndicesWithOptions(workspaceId, listIndicesRequest, headers, runtime);
}
```

## PHP

```
/**
 * Gets the details of one or more knowledge bases in a specified workspace.
 *
 * @param Bailian $client The client object.
 * @param string $workspaceId The workspace ID.
 * @return ListIndicesResponse The response from the Model Studio service.
 * @throws Exception
 */
public function listIndices($client, $workspaceId) {
    $headers = [];
    $listIndexDocumentsRequest = new ListIndexDocumentsRequest([]);
    $runtime = new RuntimeOptions([]);
    return $client->listIndicesWithOptions($workspaceId, $listIndexDocumentsRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Gets the details of one or more knowledge bases in a specified workspace.
 * @param {bailian20231229.Client} client The client.
 * @param {string} workspaceId The workspace ID.
 * @returns {Promise<bailian20231229.ListIndicesResponse>} The response from the Model Studio service.
 */
async function listIndices(client, workspaceId) {
    const headers = {};
    const listIndicesRequest = new bailian20231229.ListIndicesRequest();
    const runtime = new Util.RuntimeOptions({});
    return await client.listIndicesWithOptions(workspaceId, listIndicesRequest, headers, runtime);
}
```

## C#

```
/// <summary>
/// Gets the details of one or more knowledge bases in a specified workspace.
/// </summary>
/// <param name="client">The client.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <returns>The response from the Model Studio service.</returns>
public AlibabaCloud.SDK.Bailian20231229.Models.ListIndicesResponse ListIndices(AlibabaCloud.SDK.Bailian20231229.Client client, string workspaceId)
{
    var headers = new System.Collections.Generic.Dictionary<string, string>() { };
    var listIndicesRequest = new Bailian20231229.Models.ListIndicesRequest();
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.ListIndicesWithOptions(workspaceId, listIndicesRequest, headers, runtime);
}
```

## Go

```
// listIndices gets the details of one or more knowledge bases in a specified workspace.
//
// Parameters:
//   - client      *bailian20231229.Client: The client.
//   - workspaceId string: The workspace ID.
//
// Returns:
//   - *bailian20231229.ListIndicesResponse: The response from the Model Studio service.
//   - error: The error message.
func listIndices(client *bailian20231229.Client, workspaceId string) (_result *bailian20231229.ListIndicesResponse, _err error) {
	headers := make(map[string]*string)
	listIndicesRequest := &bailian20231229.ListIndicesRequest{}
	runtime := &util.RuntimeOptions{}
	return client.ListIndicesWithOptions(tea.String(workspaceId), listIndicesRequest, headers, runtime)
}
```

**Sample request**

```
{
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Sample response**

```
{
  "Status": "200",
  "RequestId": "5ACB2EB3-6C9A-5B0F-8E60-3FBE7EXXXXXX",
  "Message": "success",
  "Data": {
    "TotalCount": "1",
    "PageSize": "10",
    "PageNumber": "1",
    "Indices": [
      {
        "DocumentIds": [
          "file_0b21e0a852cd40cd9741c54fefbb61cd_10xxxxxx"
        ],
        "Description": "",
        "OverlapSize": 100,
        "SinkInstanceId": "gp-2zegk3i6ca4xxxxxx",
        "SourceType": "DATA_CENTER_FILE",
        "RerankModelName": "gte-rerank-hybrid",
        "SinkRegion": "cn-beijing",
        "Name": "Model Studio Phone Knowledge Base",
        "ChunkSize": 500,
        "EmbeddingModelName": "text-embedding-v2",
        "RerankMinScore": 0.01,
        "Id": "mymxbdxxxx",
        "SinkType": "BUILT_IN",
        "Separator": " |,|，|。|？|！|\n|\\?|\\!"
      }
    ]
  },
  "Code": "Success",
  "Success": "true"
}
```

### **Delete a knowledge base**

To permanently delete a knowledge base, you can call the [DeleteIndex](/help/en/model-studio/api-bailian-2023-12-29-deleteindex) API operation. Before you delete the knowledge base, you must [disassociate all associated Alibaba Cloud Model Studio applications](/help/en/model-studio/rag-knowledge-base#a78dc244578vx). This can be done only in the Alibaba Cloud Model Studio console. Otherwise, the deletion fails.

-   **client:** [How to obtain the client](#52ff2774f0pq9)
    
-   **workspace\_id:** [How to obtain the workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo)
    
    > A RAM user can delete knowledge bases only in their own [joined workspaces](/help/en/model-studio/grant-the-business-space-permission-to-ram-users).
    
-   **index\_id:** Pass the `Data.Id` that is returned by the API when you [initialize the knowledge base](#00ded5ee90ffx).
    

Note: This operation does not delete files that you have [added to the category](#494345d4b1hx2).

**Important**

-   A RAM user must obtain [API permissions](/help/en/model-studio/member-management#a2e8c1d6246s2) (the AliyunBailianDataFullAccess policy) before calling this example.
    
-   You can [test this operation online](https://api.alibabacloud.com/api/bailian/2023-12-29/DeleteIndex) and [generate code examples](https://api.alibabacloud.com/api/bailian/2023-12-29/DeleteIndex?tab=DEMO&lang=JAVA) for multiple languages.
    

## Python

```
def delete_index(client, workspace_id, index_id):
    """
    Permanently deletes the specified knowledge base.

    Parameters:
        client (bailian20231229Client): The client.
        workspace_id (str): The workspace ID.
        index_id (str): The knowledge base ID.

    Returns:
        The response from the Model Studio service.
    """
    headers = {}
    delete_index_request = bailian_20231229_models.DeleteIndexRequest(
        index_id=index_id
    )
    runtime = util_models.RuntimeOptions()
    return client.delete_index_with_options(workspace_id, delete_index_request, headers, runtime)
```

## Java

```
/**
 * Permanently deletes the specified knowledge base.
 *
 * @param client      The client.
 * @param workspaceId The workspace ID.
 * @param indexId     The knowledge base ID.
 * @return The response from the Model Studio service.
 */
public DeleteIndexResponse deleteIndex(com.aliyun.bailian20231229.Client client, String workspaceId, String indexId) throws Exception {
    java.util.Map<String, String> headers = new java.util.HashMap<>();
    com.aliyun.bailian20231229.models.DeleteIndexRequest deleteIndexRequest = new com.aliyun.bailian20231229.models.DeleteIndexRequest();
    deleteIndexRequest.setIndexId(indexId);
    com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
    return client.deleteIndexWithOptions(workspaceId, deleteIndexRequest, headers, runtime);
}
```

## PHP

```
/**
 * Permanently deletes the specified knowledge base.
 *
 * @param Bailian $client The client object.
 * @param string $workspaceId The workspace ID.
 * @param string $indexId The knowledge base ID.
 * @return mixed The response from the Model Studio service.
 * @throws Exception
 */
public function deleteIndex($client, $workspaceId, $indexId) {
    $headers = [];
    $deleteIndexRequest = new DeleteIndexRequest([
        "indexId" => $indexId
    ]);
    $runtime = new RuntimeOptions([]);
    return $client->deleteIndexWithOptions($workspaceId, $deleteIndexRequest, $headers, $runtime);
}
```

## Node.js

```
/**
 * Permanently deletes the specified knowledge base.
 * @param {bailian20231229.Client} client The client.
 * @param {string} workspaceId The workspace ID.
 * @param {string} indexId The knowledge base ID.
 * @returns {Promise<bailian20231229.DeleteIndexResponse>} The response from the Model Studio service.
 */
async function deleteIndex(client, workspaceId, indexId) {
    const headers = {};
    const deleteIndexRequest = new bailian20231229.DeleteIndexRequest({
        indexId
    });
    const runtime = new Util.RuntimeOptions({});
    return await client.deleteIndexWithOptions(workspaceId, deleteIndexRequest, headers, runtime);
}
```

## C#

```
/// <summary>
/// Permanently deletes the specified knowledge base.
/// </summary>
/// <param name="client">The client.</param>
/// <param name="workspaceId">The workspace ID.</param>
/// <param name="indexId">The knowledge base ID.</param>
/// <returns>The response from the Model Studio service.</returns>
public AlibabaCloud.SDK.Bailian20231229.Models.DeleteIndexResponse DeleteIndex(AlibabaCloud.SDK.Bailian20231229.Client client, string workspaceId, string indexId)
{
    var headers = new System.Collections.Generic.Dictionary<string, string>() { };
    var deleteIndexRequest = new Bailian20231229.Models.DeleteIndexRequest
    {
        IndexId = indexId
    };
    var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
    return client.DeleteIndexWithOptions(workspaceId, deleteIndexRequest, headers, runtime);
}
```

## Go

```
// deleteIndex permanently deletes the specified knowledge base.
//
// Parameters:
//   - client      *bailian20231229.Client: The client.
//   - workspaceId string: The workspace ID.
//   - indexId     string: The knowledge base ID.
//
// Returns:
//   - *bailian20231229.DeleteIndexResponse: The response from the Model Studio service.
//   - error: The error message.
func deleteIndex(client *bailian20231229.Client, workspaceId, indexId string) (_result *bailian20231229.DeleteIndexResponse, _err error) {
	headers := make(map[string]*string)
	deleteIndexRequest := &bailian20231229.DeleteIndexRequest{
		IndexId: tea.String(indexId),
	}
	runtime := &util.RuntimeOptions{}
	return client.DeleteIndexWithOptions(tea.String(workspaceId), deleteIndexRequest, headers, runtime)

}
```

**Sample request**

```
{
  "IndexId": "mymxbdxxxx",
  "WorkspaceId": "llm-4u5xpd1xdjqpxxxx"
}
```

**Sample response**

```
{
  "Status": "200",
  "Message": "success",
  "RequestId": "118CB681-75AA-583B-8D84-25440CXXXXXX",
  "Code": "Success",
  "Success": "true"
}
```

## API reference

For more information, see [API Catalog (Knowledge Base)](/help/en/model-studio/api-bailian-2023-12-29-dir-knowledge-base/) for the latest, complete list of knowledge base API operations and their request and response parameters.

## FAQ

1.  **How can I automatically update or synchronize a knowledge base?**
    
    ## Document search knowledge bases
    
    To do this, you must integrate the API operations for Alibaba Cloud OSS, FC, and Alibaba Cloud Model Studio knowledge bases. You can follow these steps:
    
    1.  **Create a bucket:** Go to the [OSS console](https://oss.console.alibabacloud.com/bucket) and create an OSS bucket to store your source files.
        
    2.  **Create a knowledge base**: [Create a document search knowledge base](/help/en/model-studio/rag-knowledge-base#b1bfab3bec5da) to store your private knowledge content.
        
    3.  **Create a user-defined function**: Go to the [FC console](https://fc.console.alibabacloud.com) and create a function for file change events, such as add or delete operations. For more information, see [Create a function](/help/en/functioncompute/fc/user-guide/creating-a-web-function). These functions call the relevant [Update a knowledge base](#e2be95c9722ns) API operations to synchronize file changes from OSS to your knowledge base.
        
    4.  **Create an OSS trigger**: In FC, associate an [OSS trigger](/help/en/functioncompute/fc/user-guide/overview-of-oss-trigger) with the user-defined function that you created in the previous step. When a file change event is detected, such as a new file upload to OSS, the trigger activates and causes FC to execute the function. For more information, see [Triggers](/help/en/functioncompute/fc/user-guide/cloud-product-event-triggers-overview).
        
    
    ## Data query or image Q&A knowledge bases
    
    This is not supported.
    

2.  **Why is my new knowledge base empty?**
    
    This is usually because the [Submit an index job](#bf14fb34a58vy) step was not executed or failed to execute. If you call the [CreateIndex](/help/en/model-studio/api-bailian-2023-12-29-createindex) API operation but do not successfully call the [SubmitIndexJob](/help/en/model-studio/api-bailian-2023-12-29-submitindexjob) API operation, you will obtain an empty knowledge base. In this case, you only need to execute the [Submit an index job](#bf14fb34a58vy) step again and [wait for the index job to complete](#402c6d08c3k71).
    

3.  **What should I do if I receive the error "Access your uploaded file failed. Please check if your upload action was successful"?**
    
    This error usually occurs because the [Upload the file to temporary storage](#a275d1cdd2gph) step was not executed or did not run successfully. You can call the [AddFile](/help/en/model-studio/api-bailian-2023-12-29-addfile) API operation after you confirm that this step has run successfully.
    

4.  **What should I do if I receive the error "Access denied: Either you are not authorized to access this workspace, or the workspace does not exist"?**
    
    Common causes include the following:
    
    -   **The requested endpoint (**[service endpoint](/help/en/model-studio/api-bailian-2023-12-29-endpoint)**) is incorrect:** For example, if you access the service over the Internet, users of the China site (aliyun.com) must use the endpoint in the Beijing region for public cloud or the Shanghai region for Finance Cloud. Users of the international site (alibabacloud.com) must use the endpoint in the Singapore region. If you are using the [online debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/CreateIndex) feature, you must make sure that you select the correct endpoint, as shown in the following figures.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1468410571/p952093.png)
        
    -   **The WorkspaceId value is incorrect, or you are not a member of the workspace:** You must make sure that the `WorkspaceId` value is correct and that you are a member of the workspace before you call the API operation. For more information, see [How to be added as a member of a workspace](/help/en/model-studio/grant-the-business-space-permission-to-ram-users).
        

5.  **What should I do if I receive the error "Specified access key is not found or invalid"?**
    
    This error usually occurs because the provided `access_key_id` or `access_key_secret` is incorrect, or the `access_key_id` has been [disabled](/help/en/ram/user-guide/disable-an-accesskey-pair-of-a-ram-user). You must ensure that the `access_key_id` is correct and has not been disabled before you call the API operation.
    

## Billing

-   All knowledge base features and API calls are free. For more information, see [Knowledge Base: Billing](/help/en/model-studio/rag-knowledge-base#bb7f7287f29ak).
    
-   The storage space required for data, such as files, imported into Model Studio is free of charge.
    

## Error codes

If a call to an API operation in this topic fails and returns an error message, see [Error Center](https://api.alibabacloud.com/document/bailian/2023-12-29/errorCode) to resolve the issue.
