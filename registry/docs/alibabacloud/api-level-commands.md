API-level commands provide direct access to Object Storage Service (OSS) API operations.

An OSS API request contains the API operation name and the following parameters: the bucket name, object key, header parameters, query parameters, and body parameters.

-   API operation names
    
    Each API operation corresponds to a command in ossutil, with the API name in lowercase and individual words connected by the hyphen (-).
    
    For example, the equivalent ossutil command of the PutBucketAcl operation is put-bucket-acl. For more information about OSS API operations, see [List of operations by function](/help/en/oss/developer-reference/list-of-operations-by-function).
    
-   API operation parameters
    
    **API operation parameter**
    
    **Option**
    
    **Description**
    
    Bucket name
    
    \--bucket string
    
    The name of the bucket.
    
    Object key
    
    \--key string
    
    The object key.
    
    Header parameters
    
    \--acl string
    
    Each header parameter in an OSS API request corresponds to an option in ossutil.
    
    The option is the lowercase form of the header parameter without the x-oss prefix.
    
    For example, the equivalent option of the x-oss-acl header parameter is --acl.
    
    Query parameters
    
    \--inventory-id string
    
    Each query parameter corresponds to an option in ossutil.
    
    If the query parameter is in lower camel case, the equivalent option is the lowercase form with the hyphen (-) connecting individual words.
    
    For example, the equivalent option of the inventoryId parameter is --inventory-id.
    
    Body parameters
    
    \--cors-configuration string
    
    The parameters in the body of an API request are contained in a single option.
    
    -   The option is the lowercase and hyphenated form of the XML root node name.
        
    -   The option takes a string as its value. A value that starts with file:// indicates the path to the parameter configuration file.
        
    -   The option value can be in the XML or JSON format.
