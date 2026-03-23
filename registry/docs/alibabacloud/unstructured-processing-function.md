MaxCompute can access unstructured data and its metadata stored in data warehouses or data lakes. This topic describes the functions that MaxCompute provides for processing unstructured data.

## **Use Object Tables and OSS object processing functions**

MaxCompute provides the Object Table feature. This feature enables the compute engine to access unstructured data and its metadata stored in Object Storage Service (OSS). MaxCompute also provides functions to process data in OSS files. For more information, see [OBJECT TABLE definition](/help/en/maxcompute/user-guide/object-table).

**Function**

**Features**

[GET\_DATA\_FROM\_OSS](/help/en/maxcompute/user-guide/get-data-from-oss)

Reads all or part of an object and returns the content in binary format.

[GET\_SIGNED\_URL\_FROM\_OSS](/help/en/maxcompute/user-guide/get-signed-url-from-oss)

Generates a signed URL to download or upload data from OSS. This URL lets users directly read from or write to OSS files using the HTTP protocol.
