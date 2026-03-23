Add Python type resources to a MaxCompute project for data processing and analysis.

## Limits

-   MaxCompute does not allow you to add external tables as resources.
    
-   Schema evolution is not allowed for tables that are added as resources. If a schema evolution is performed on a table that is added as a resource, you must add the table as a resource again.
    
-   The size of each resource file cannot exceed 2,048 MB. The size of resources referenced by a single SQL or MapReduce job cannot exceed 2,048 MB.
    
-   This statement is a CMD statement and can be executed only on the MaxCompute client (odpscmd).
    

## Syntax

```
add py <local_file> [comment '<comment>'][-f];
```

## Parameters

-   Resource type parameter:
    
    py: required. A resource type. For more information about resource types, see [Resource](/help/en/maxcompute/product-overview/resource#concept-fqd-ygb-5db).
    
-   Common parameters
    
    -   local\_file: Required. The local file path. The file name must be used as the resource name, which serves as a unique identifier. When the file is placed in the client's bin folder, you only need to write the file name without specifying the file path.
        
    -   comment: Optional. Resource comment.
        
    -   \-f: Optional. If there is a resource with the same name, this operation will overwrite the existing resource. If this option is not specified, however, the operation will fail when a resource with the same name exists.
        

## Examples

Add a Python resource to a MaxCompute project. Sample statement:

```
add py python.py [comment '<comment>'][-f];
```

The following result is returned:

```
OK: Resource 'python.py' have been created.
```

## Related statements

-   [ADD ARCHIVE](/help/en/maxcompute/user-guide/add-archive#reference-2240083): Adds an archive file as a resource.
    
-   [ADD FILE](/help/en/maxcompute/user-guide/add-file#reference-2240084): Adds a file as a resource.
    
-   [ADD JAR](/help/en/maxcompute/user-guide/add-jar#reference-2240085): Adds a JAR file as a resource.
    
-   [ADD TABLE](/help/en/maxcompute/user-guide/add-table#reference-2240088): Adds a table as a resource.
    
-   [DESC RESOURCE](/help/en/maxcompute/user-guide/desc-resource#reference-2239960): Views information about a resource.
    
-   [LIST RESOURCES](/help/en/maxcompute/user-guide/list-resources#reference-2240000): Views the information about resources.
    
-   [ALIAS](/help/en/maxcompute/user-guide/alias#reference-2240092): Creates an alias for a resource.
    
-   [GET RESOURCE](/help/en/maxcompute/user-guide/get-resource#reference-2239991): Downloads a resource.
    
-   [DROP RESOURCE](/help/en/maxcompute/user-guide/drop-resource#reference-2239980): Deletes a resource.
