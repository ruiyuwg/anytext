To build a knowledge base for RAG (Retrieval-Augmented Generation) applications, import your source data into Alibaba Cloud Model Studio. This data serves as the initial source for your knowledge base.

**Important**

-   **Console access:** Only **International Edition users** who created applications before **April 21, 2025** can access the **Application Development** tab. This tab includes Applications ([agent application](/help/en/model-studio/single-agent-application) and [workflow application](/help/en/model-studio/workflow-application/)), Components ([prompt engineering](/help/en/model-studio/prompt-template) and [plug-in](/help/en/model-studio/plug-in-overview)), and Data ([knowledge base](/help/en/model-studio/rag-knowledge-base) and [application data](/help/en/model-studio/data-import-instructions)). **These are all preview features. Use them with caution in production environments.** ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0799390671/p1017153.png)
    
-   **API access:** Only **International Edition users** who created applications before **April 21, 2025** can call the [application data, knowledge base, and prompt engineering APIs](/help/en/model-studio/api-bailian-2023-12-29-dir/).
    

Model Studio supports three import methods:

**Import method**

**Source**

**Destination**

[Upload local files](#334272641fpez)

Files from your computer

**File** tab, organized by categories

[Upload local tables](#a9e41e9b77m40)

Spreadsheets from your computer

**Table** tab, organized by data tables

[Import from OSS](#672549f96e6ti)

Files from Object Storage Service (OSS)

**File** tab, organized by categories

**Note**

Model Studio does not support direct import of JSON, CSV, or YAML files. Convert these files to XLSX or XLS format before importing.

For supported data formats and capacity limits, see [Knowledge base quotas and limits](/help/en/model-studio/rag-knowledge-base-specifications).

## Parsing methods

When importing files (local or OSS), select a parsing method that matches your content type. Choose **Default Settings** for the standard configuration, or **Custom Settings** to define parsing rules for specific formats.

**Parsing method**

**Best for**

**How it works**

**Digital Parsing**

Text-only documents

Does not parse illustrations or charts in files.

**Intelligent Parsing**

Documents with illustrations

Detects images, extracts text from them, and generates summaries. These summaries and other text content are chunked, converted into vectors, and used for knowledge base retrieval.

**LLM Parsing**

Visual Q&A over illustrations and charts

Uses the [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo) model to detect and interpret visual content, enabling agent applications to answer questions about illustrations and charts.

**Qwen VL Parsing**

Image files only

Select a Qwen-VL model and write a prompt to specify the layout, elements, and content for detection. Provides the same capabilities as LLM Parsing but is limited to image formats.

**Note**

If your documents contain figures, charts, or images, use **Intelligent Parsing**, **LLM Parsing**, or **Qwen VL Parsing** instead of Digital Parsing.

**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8060835471/p946164.png)**

**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p935554.png)**

[How to make a Model Studio application display illustrations from a file in its answers](/help/en/model-studio/rag-knowledge-base#9e13851641b37)

## Import local files

1.  Go to the [File](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center?dataType=0) tab.
    
2.  In **Category Management** on the left, select an existing category or click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1603762371/p839829.png) icon to create one.
    
    **Note**
    
    Model Studio uses categories to organize imported files.
    
3.  Click **Import Data**. On the **Import Data** page, set the import method to **Upload Local File**.
    
4.  Select a **Parsing Method**. For details, see [Parsing methods](#section-310e7dcb).
    
5.  (Optional) **Configure Tags** for the file.
    
    **Note**
    
    Tags help filter files during knowledge base retrieval. When [calling an application through an API](/help/en/model-studio/application-calling-guide), specify tags in the `tags` request parameter. For [agent applications](/help/en/model-studio/single-agent-application), set tags when debugging the knowledge base in the console.
    
6.  Click **Confirm** to start parsing and importing. Track progress on the page.
    
    **Note**
    
    Model Studio converts the file into a processable format. During peak hours, this may take several hours.
    
7.  After the import completes, click **Details** next to the file to review it.
    

### Post-import behavior

-   Imported files are stored as independent replicas in free platform storage. Replicas are not linked to your original data, and no capacity limit applies.
    
-   Files imported within the last 90 days can be viewed. After 90 days, files remain stored but are no longer viewable.
    
-   Imported files are accessible only within the current workspace. Model Studio does not use them for commercial purposes or make them public.
    

## Import local tables

1.  Go to the [Table](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center?dataType=1) tab.
    
2.  In **Table Management** on the left, select an existing data table or click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1603762371/p839829.png) icon to create a new one.
    
    **Note**
    
    Model Studio manages imported tabular data using data tables.
    

### Import to a new data table

1.  Enter a **Table Name**. Then configure the table schema by choosing either **Upload Excel File** or **Custom Header**:
    
    -   **Upload Excel File**: Model Studio auto-detects the table header in the uploaded file, uses it to create the data table schema, and imports the remaining rows as data records.
        
    -   **Custom Header**: **Column Name** and **Type** are required. **Description** is optional.
        
    
    **Warning**
    
    The table structure (column name, description, and type) cannot be modified after confirmation.
    
    **Important**
    
    -   The schema of the uploaded file (column count and column names) must exactly match the target data table schema. Otherwise, the import fails. Add or remove fields by clicking **New Columns** or **Delete** in the **Actions** column.
        
    -   Provide a clear, natural-language description for each field to help the model understand its meaning. For example, specify that the `age` field represents a user's age.
        
    -   If the field type is `image_url`, the value must be a **publicly accessible** image URL (for example: `https://example.com/downloads/pic.jpg`). When creating a knowledge base, `image_url` fields generate an **image index** -- Model Studio accesses the image, extracts its features, converts them into a vector using image embedding, and saves it. During retrieval, this vector is compared with the user-uploaded image vector for similarity matching.
        
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3334474271/p816622.png) icon to select and upload a file in XLSX or XLS format.
    
    **Note**
    
    The file must contain a table header. Otherwise, the import fails.
    
3.  Click **OK** to start the import. The new data table appears in the **Table Management** navigation tree on the left.
    

### Import to an existing data table

1.  In **Table Management** on the left, select the target data table and click **Import Data**.
    
2.  Set the import type to **Upload and Overwrite** or **Incremental Upload**.
    
    **Note**
    
    Click **Download Template** to download a blank file that contains only the table header. Insert new data into this file and use it for an overwrite or incremental upload.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3334474271/p816622.png) icon to select and upload a file in XLSX or XLS format.
    
    **Note**
    
    The file must contain a table header that matches the structure of the current data table. Otherwise, the import fails.
    

## Import OSS files

1.  Go to the [File](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center?dataType=0) tab.
    
2.  In **Category Management** on the left, select an existing category or click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1603762371/p839829.png) icon to create one.
    
3.  Click **Import Data**. On the **Import Data** page, set the import method to **OSS**.
    
    **Note**
    
    First-time OSS imports require authorization. Complete the authorization as prompted and add the `bailian-datahub-access` tag to the target bucket. For details, see [Configure file import from OSS](#a2b61704136bj).
    
    **Important**
    
    -   Buckets with the Archive, Cold Archive, or Deep Cold Archive storage class are not supported.
        
    -   Root directory access is not supported. Select an existing subdirectory or create a new one.
        
    -   Buckets with content encryption and private buckets are supported.
        
    -   If the bucket has [Referer hotlink protection](/help/en/oss/configure-referer-policy-to-prevent-other-websites-from-referring-to-oss-files) enabled, add `*.console.aliyun.com` to the Referer whitelist. For details, see [Allow access only from trusted websites](/help/en/oss/user-guide/hotlink-protection).
        
    
4.  Select a **Parsing Method**. For details, see [Parsing methods](#section-310e7dcb).
    
5.  (Optional) **Configure Tags** for the file.
    
    **Note**
    
    Tags help filter files during knowledge base retrieval. When [calling an application through an API](/help/en/model-studio/application-calling-guide), specify tags in the `tags` request parameter. For [agent applications](/help/en/model-studio/single-agent-application), set tags when debugging the knowledge base in the console.
    
6.  Click **OK** to start parsing and importing. Track progress on the page.
    
    **Note**
    
    Model Studio converts the file into a processable format. During peak hours, this may take several hours.
    
7.  After the import completes, click **Details** next to the file to view the results.
    
    **Note**
    
    Imported files are stored as independent replicas in free platform storage, separate from your original data with no capacity limit. Files are accessible only within the current workspace. Model Studio does not use them for commercial purposes or make them public.
    

## Next step

[Create a knowledge base](/help/en/model-studio/rag-knowledge-base#6028cfefaauhu)

## Configure file import from OSS

When importing files from OSS for the first time, grant Model Studio access to your OSS resources. The authorization flow differs for an [Alibaba Cloud account](/help/en/model-studio/permission-management-overview#24ca2dad7djzs) and a RAM user.

### Alibaba Cloud account authorization

1.  Click **Authorize Now**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p937184.png)
    
2.  In the dialog box, click **Confirm Authorization**. This automatically creates an [OSS service-linked role](/help/en/model-studio/bailian-service-linked-role#32a41eac73z64) that grants Model Studio access to your OSS resources.
    
    **Note**
    
    The authorization usually takes effect within seconds, but a slight delay may occur during peak hours.
    
    **Note**
    
    If you receive the error "This request failed. Try submitting again or contact an administrator. Error code: 10041495", see [Resolve error code 10041495](#section-908cc7a1).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p937216.png)
    
3.  Add the `bailian-datahub-access` tag to the target OSS bucket. This tag marks the buckets that Model Studio can access. Buckets without this tag are inaccessible.
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). In the left navigation pane, click **Buckets**. Find the target bucket.
        
    2.  Hover over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6062842571/p978639.png) icon and click **Edit**.
        
    3.  On the Bucket Tag page, click **Create Tag** if no tags exist, or click **Settings** to modify existing tags.
        
    4.  Click **Tag**, set the tag key to `bailian-datahub-access` and the tag value to `read`, then click **Save**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9212286371/p903517.png)
    
4.  Return to the **Import Data** page, reselect the target bucket, and retry the import.
    
    **Important**
    
    Model Studio does not support accessing files in the root directory of a bucket. Select an existing subdirectory or create a new one.
    

### RAM user authorization

1.  Click **Authorize Now**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p937184.png)
    
2.  In the dialog box, click **Confirm Authorization**. If you receive an **Authorization Failed** or **No Permission** error, grant the RAM user permission to create service-linked roles first:
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the left navigation pane, choose **Permissions** > **Policies**, then click **Create Policy**.
        
    2.  Click the **JSON** tab, paste the following policy, then click **OK**: \`\``json { "Action": [ "ram:CreateServiceLinkedRole" ], "Resource": "*", "Effect": "Allow", "Condition": { "StringEquals": { "ram:ServiceName": "datahub.sfm.aliyuncs.com" } } }` \`\` ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9212286371/p903452.png)
        
    3.  Enter a policy name and click **OK**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9212286371/p903416.png)
        
    4.  In the left navigation pane, choose **Identities** > **Users**. Find the target RAM user and click **Add Permissions** in the **Actions** column.
        
    5.  Select the custom policy you just created and click **Grant permissions**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p907087.png)
        
3.  Grant the RAM user permission to access OSS through Model Studio:
    
    1.  Return to the **Import Data** page and click **Authorize Now**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p937184.png)
        
    2.  In the dialog box, click **Confirm Authorization** to automatically create the required [OSS service-linked role](/help/en/model-studio/bailian-service-linked-role#32a41eac73z64).
        
        **Note**
        
        The authorization usually takes effect within seconds, but a slight delay may occur during peak hours.
        
        **Note**
        
        If you receive the error "The request failed. Try to submit again or contact an administrator. Error code: 10041495", see [Resolve error code 10041495](#section-908cc7a1).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2775663471/p937216.png)
        
4.  Add the `bailian-datahub-access` tag to the target OSS bucket. This tag marks the buckets that Model Studio can access. Buckets without this tag are inaccessible.
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). In the left navigation pane, click **Buckets**. Find the target bucket.
        
    2.  Hover over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6062842571/p978639.png) icon and click **Edit**.
        
    3.  On the Bucket Tag page, click **Create Tag** if no tags exist, or click **Settings** to modify existing tags.
        
    4.  Click **Tag**, set the tag key to `bailian-datahub-access` and the tag value to `read`, then click **Save**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9212286371/p903517.png)
    
5.  Return to the **Import Data** page, reselect the target bucket, and retry the import.
    
    **Important**
    
    Model Studio does not support accessing files in the root directory of a bucket. Select an existing subdirectory or create a new one.
    

## FAQ

### Resolve "You are not authorized to access this module" during data import

By default, a [RAM user](/help/en/model-studio/permission-management-overview#24ca2dad7djzs) cannot perform write operations such as data import or knowledge base creation. Use the Alibaba Cloud account to assign the RAM user [page permissions](/help/en/model-studio/member-management#febd776ce5lbx) for **Administrator**, or at minimum, both **Application Data - Operations** and **Knowledge Base - Operations**.

### Resolve error code 10041495

This error typically means the Alibaba Cloud account has not activated OSS.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) with the Alibaba Cloud account and activate OSS as prompted.
    
2.  Return to the Model Studio **Import Data** page and retry the authorization.
