Create distributed training jobs in Deep Learning Containers (DLC), monitor execution status, search logs by keyword, and clone or delete jobs.

## Prerequisites

-   **Alibaba Cloud account**: No additional authorization required.
    
-   **RAM user**: Add the RAM user as a workspace member and assign a role with required permissions. For each role's permissions, see [Appendix: Roles and permissions list](/help/en/pai/appendix-list-of-roles-and-permissions#987cd5b6aeo9y).
    

## Create a training job

Create a DLC distributed training job on the **Deep Learning Containers (DLC)** tab:

1.  Access the job management page:
    
    1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/console).
        
    2.  In the left navigation pane, click **Workspace List**, and then click the workspace name.
        
    3.  In the left navigation pane of the workspace page, choose **AI Asset Management** > **Jobs**.
        
2.  On the **Deep Learning Containers (DLC)** tab, click **Create Job**.
    
3.  Configure parameters and click **OK**.
    
    For parameter descriptions, see [Create a training task](/help/en/pai/user-guide/create-a-training-task/#task-2037310).
    

## Manage training jobs

The job list aggregates jobs from DLC, Designer algorithm nodes running on DLC, and DLC command line interface:![a95d0b5d2be165babe046176dcf0cdc8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2998358671/p807533.png)

**Warning**

Deleted jobs cannot be recovered.

-   ①: Search jobs by name, ID, time range, framework, or status.
    
-   ②: Click a job name to view execution status, instance status, resource view, and logs.
    
-   ③: Hover over the status icon to view execution status.
    
-   ④: **Clone** a job, or click **TensorBoard** in the **Actions** column to create a TensorBoard instance for viewing training results.
    

## Query aggregated logs by keyword

### Query logs

Query log events by keyword on the **Log** tab:

1.  In the left navigation pane, choose **AI Asset Management** > **Jobs**. On the **Deep Learning Containers (DLC)** page, click the job name.
    
2.  Click the **Log** tab and configure settings:
    
    1.  Above **Job Information**, select a time range for log collection.
        
        **Note**
        
        Log collection may extend beyond the job end time. Select a time range that meets your requirements.
        
    2.  In **Instance List**, select instances.
        
    3.  In the search box, enter keywords to search for logs or events.
        

### Basic query rules

Use complete words when querying logs. DLC uses Simple Log Service (SLS) for log search, which tokenizes search terms. A term search might not find an exact match for your keyword phrase.

For example, keyword **abc def** returns all logs containing **abc** and all logs containing **def**, not just logs containing the exact phrase **abc def**.

### Fuzzy query rules

Use asterisk (\*) and question mark (?) for fuzzy queries. Other special characters are not supported.

-   Asterisk (\*) matches multiple characters. Question mark (?) matches a single character.
    
-   Place asterisk (\*) or question mark (?) in the middle or at the end of a keyword. Wildcards cannot be placed at the start.
    

For example, **abc\*** finds terms starting with abc. **ab?d** finds terms starting with ab, ending with d, and containing one character between them.

**Note**

During a fuzzy query, the service searches up to 100 matching terms in the Logstore and returns logs containing these terms. If your fuzzy query uses a short prefix matching more than 100 terms, results may be inaccurate. Use a more specific term for better accuracy.

### Tokenizer limitations

SLS treats these common characters as delimiters when tokenizing training logs: `, '";=()[\",\"]{}?@&<>/:\n\t\r`

Delimiters split log content into tokens for querying. Keywords consisting only of delimiters are not treated as complete words and return no results.

Example 1: Keyword **&&&** finds no matching logs. Build keywords based on the context of the content to search for.

Example 2: To query logs containing **a&b**, use **a&b** as the keyword instead of **&**. This query returns logs containing both **a** and **b**. More detailed keywords produce more accurate results.

### Query examples

**Query requirement**

**Keyword**

Logs containing **Error**

**Error**

Logs containing both **loss** and **acc**

**loss acc**

All logs related to **Traceback**

**Traceback\***

Logs containing **abc&def**

**abc&def**
