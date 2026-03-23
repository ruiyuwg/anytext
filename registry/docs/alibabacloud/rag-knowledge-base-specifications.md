## **Quotas**

**Type**

**Description**

**Limit**

**Number of knowledge bases**

The number of knowledge bases that can be created by each [Alibaba Cloud account](/help/en/model-studio/permission-management-overview#24ca2dad7djzs).

Unlimited

**Number of categories**

The number of categories (parent and child) that can be created in each [workspace](/help/en/model-studio/use-workspace).

500

**Number of files**

The number of files that can be uploaded to each workspace.

10,000

**Number of data tables**

The number of data tables that can be created in each workspace.

1,000

## **File uploads**

### **Supported formats**

**Knowledge bases for document search**

**Supported format**

**Limits**

pdf, docx, doc, pptx, ppt

-   Up to 100 MB
    
-   Up to 1,000 pages
    

txt, markdown, html

Up to 100 MB

xlsx, xls

Up to 20 MB

png, jpg / jpeg, bmp, gif

-   Up to 20 MB
    
-   The shorter side must be longer than 15 pixels, the longer side must be shorter than 8,192 pixels, and the aspect ratio must be less than 50.
    

**Knowledge bases for data query and image Q&A**

**Supported format**

**Limits**

xlsx, xls

-   Up to 100,000 rows
    
-   Up to 100 columns
    

### **Upload operations**

**Type**

**Description**

**Limit**

**Number of files per import**

The number of files that can be imported at one time in the console.

> This limit does not apply to batch imports that use an API. However, import no more than 10,000 files at a time.

50

**Number of tags**

The number of tags that can be attached to a single file.

32

## **Data processing**

### **Chunking**

**Type**

**Description**

**Limit**

**Number of text chunks**

The number of text chunks for a single file.

Unlimited

**Text chunk length**

The number of tokens in a single text chunk.

6,000

### **Embedding**

> For more information, see [Text and multimodal embedding](/help/en/model-studio/embedding).

**Type**

**Description**

**Embedding model**

-   **Knowledge bases for document search and data query:** The text-embedding-v2 model is supported.
    
-   **Knowledge bases for image Q&A:** Only the multimodal-embedding-v1 model is supported.
    

**Embedding dimensions**

-   text-embedding-v2: 1,536
    
-   multimodal-embedding-v1: 1,024
    

> The preceding embedding dimensions cannot be changed.

## **Retrieval**

**Type**

**Description**

**Limit**

**Number of retrieved text chunks**

The number of text chunks that can be retrieved in a single query.

20
