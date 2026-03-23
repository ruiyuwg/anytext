Adds JAR resources to a MaxCompute project.

## Limits

-   MaxCompute does not allow you to add external tables as resources.
    
-   The maximum size of a resource file is 2048 MB. The size of resources referenced by a single SQL or MapReduce job cannot exceed 2,048 MB.
    
-   This statement is a CMD statement and can only be executed on the MaxCompute client (odpscmd).
    

## Syntax

```
add jar <localfile> [comment '<comment>'][-f];
```

## Parameters

-   Resource type parameter:
    
    jar: required. A resource type. For more information about resource types, see [Resource](/help/en/maxcompute/product-overview/resource#concept-fqd-ygb-5db).
    
-   Common parameters
    
    -   local\_file: required. The path of the file that you want to add. The file name is used as the resource name, which uniquely identifies a resource.
        
    -   alias: optional. The name of the resource. If this parameter is not specified, the file name is used as the resource name. JAR packages or Python script files that are used as resources do not support this parameter.
        
    -   comment: optional. The comment of the resource.
        
    -   \-f: optional. If a duplicate resource name exists, the existing resource is replaced. If you do not specify this option and a duplicate resource name exists, the resource fails to be added.
        

## Related statements

-   [ADD ARCHIVE](/help/en/maxcompute/user-guide/add-archive#reference-2240083): Adds an archive file as a resource.
    
-   [ADD FILE](/help/en/maxcompute/user-guide/add-file#reference-2240084): Adds a file as a resource.
    
-   [ADD PY](/help/en/maxcompute/user-guide/add-py#reference-2240086): Adds Python code as a resource.
    
-   [ADD TABLE](/help/en/maxcompute/user-guide/add-table#reference-2240088): Adds a table as a resource.
    
-   [DESC RESOURCE](/help/en/maxcompute/user-guide/desc-resource#reference-2239960): Views information about a resource.
    
-   [LIST RESOURCES](/help/en/maxcompute/user-guide/list-resources#reference-2240000): Views the information about resources.
    
-   [ALIAS](/help/en/maxcompute/user-guide/alias#reference-2240092): Creates an alias for a resource.
    
-   [GET RESOURCE](/help/en/maxcompute/user-guide/get-resource#reference-2239991): Downloads a resource.
    
-   [DROP RESOURCE](/help/en/maxcompute/user-guide/drop-resource#reference-2239980): Deletes a resource.
