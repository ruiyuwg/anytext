Resource is a concept specific to MaxCompute. To accomplish jobs by using user-defined functions (UDFs) or MapReduce, you must upload files as MaxCompute resources. This topic describes common operations on resources, such as adding, viewing, downloading, and deleting resources.

The following table describes common resource operations.

**Operation**

**Description**

**Performed by**

**Operation platform**

[Add resources](#section-533-s8q-d9w)

Adds resources to a MaxCompute project.

Users who have the Write permission on resources.

-   [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [Cloud Shell (odpscmd)](/help/en/maxcompute/user-guide/connect-using-the-cloud-command-line-odpscmd)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    

[Create an alias for a resource](#section-ubu-8pi-8h2)

Creates an alias for a resource.

Users who have the Write permission on resources.

[Download resources](#section-h3g-7t7-xlc)

Downloads resources in a MaxCompute project to your on-premises machine.

Users who have the Write permission on resources.

[View resource information](#section-zz1-bbk-a6g)

Views the detailed information of a resource.

Users who have the Read permission on resources.

-   [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [Cloud Shell (odpscmd)](/help/en/maxcompute/user-guide/connect-using-the-cloud-command-line-odpscmd)
    
-   [DataWorks](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    

[View a resource list](#section-2jw-n1u-714)

Views the information of resources in the project.

Users who have the List permission on objects in a project

[Delete resources](#section-3ie-els-ff3)

Deletes existing resources from a MaxCompute project.

Users who have the Delete permission on resources.

## Add resources

Adds resources to a MaxCompute project.

-   Limits
    
    -   MaxCompute does not allow you to add external tables as resources.
        
    -   The maximum size of a resource file is 2048 MB. The size of resources referenced by a single SQL or MapReduce job cannot exceed 2,048 MB.
        
-   Syntax
    
    ```
    add file <local_file> [as <alias>] [comment '<comment>'][-f];
    add archive <local_file> [as <alias>] [comment '<comment>'][-f];
    add table <table_name> [partition (<spec>)] [as <alias>] [comment '<comment>'][-f];
    add py|jar <localfile> [comment '<comment>'][-f];
    ```
    
-   Parameters
    
    -   file|archive|table|py|jar: required. The type of the [resource](/help/en/maxcompute/product-overview/resource#concept-fqd-ygb-5db).
        
    -   local\_file: required. The path of the file that you want to add. The file name is used as the resource name, which uniquely identifies a resource.
        
    -   table\_name: required. The name of a table in MaxCompute.
        
    -   spec: required. If the resource that you want to add is a partitioned table, MaxCompute takes only a partition in the table as a resource, instead of taking the whole table as a resource.
        
    -   alias: optional. The name of the resource. If this parameter is not specified, the file name is used as the resource name. JAR packages or Python script files that are used as resources do not support this parameter.
        
    -   comment: optional. The comment of the resource.
        
    -   \-f: optional. If a duplicate resource name exists, the existing resource is replaced. If you do not specify this option and a duplicate resource name exists, the resource fails to be added.
        
-   Examples
    
    -   Example 1: Add a file as a resource to a MaxCompute project.
        
        ```
        add file banking.txt;
        ```
        
        The following result is returned:
        
        ```
        OK: Resource 'banking.txt' have been created.
        ```
        
    -   Example 2: Add a partitioned table whose alias is sale.res as a resource to MaxCompute.
        
        ```
        add table sale_detail partition (ds='20150602') as sale.res comment 'sale detail on 20150602' -f;
        ```
        
        The following result is returned:
        
        ```
        OK: Resource 'sale.res' have been updated.
        ```
        
    -   Example 3: Add a Python file as a resource to MaxCompute.
        
        ```
        add py python.py [comment '<comment>'][-f];
        ```
        
        The following result is returned:
        
        ```
        OK: Resource 'python.py' have been created.
        ```
        

## View resource information

Views the information of a specified resource in the project. The information includes the resource name, owner, resource type, resource size, creation time, last modification time, and MD5 value of the resource file.

-   Syntax
    
    ```
    desc resource <resource_name>;
    ```
    
-   Parameters
    
    resource\_name: required. The name of an existing resource.
    
-   Return value
    
    -   Name: the name of the resource.
        
    -   Owner: the account that owns the resource.
        
    -   Type: the type of the resource.
        
    -   Comment: the comment of the resource.
        
    -   CreatedTime: the time when the resource was created.
        
    -   LastModifiedTime: the time when the resource was last updated.
        
    -   LastUpdator: the account that performed the last update operation.
        
    -   Size: the size of the resource file. Unit: MB.
        
    -   Md5sum: the MD5 value of the resource file.
        
    
    **Note**
    
    The name of a MaxCompute resource is not case-sensitive. resource\_A and resource\_a represent the same resource.
    
-   Examples
    
    ```
    -- View information of resource topn_new.jar. 
    desc resource topn_new.jar;
    ```
    
    The following result is returned:
    
    ```
    Name                                    topn_new.jar
    Owner                                   ALIYUN$****@test.aliyunid.com
    Type                                    JAR
    Comment                                 cloudopenapi
    CreatedTime                             2020-12-29 13:55:11
    LastModifiedTime                        2020-12-29 13:55:11
    LastUpdator
    Size                                    11438795
    Md5sum                                  8bcf6aabf****56c0
    ```
    

## View a resource list

Views the information of resources in a project. The information includes the resource name, owner, creation time, last modification time, and resource type.

-   Syntax
    
    ```
    list resources;
    ```
    
-   Examples
    
    ```
    list resources;
    ```
    
    The following result is returned:
    
    ```
    Resource Name         Owner                 Creation Time         Last Modified Time    Type          Last Updator Resource Size  Source         comment
    getaddr.jar           ALIYUN$****           2020-06-18 15:47:28   2020-06-18 15:47:28   jar           1353716                                    cloudopenapi
    ip.dat                ALIYUN$****           2020-06-18 15:49:46   2020-06-18 15:49:46   file          8525962                                    cloudopenapi
    2 resources
    ```
    

## Create an alias for a resource

Creates an alias for a resource. The alias command can be used in [MapReduce](/help/en/maxcompute/overview-24#concept-fml-smf-vdb) or [UDF](/help/en/maxcompute/user-guide/overview-22#concept-dkq-tn2-vdb) code to read different resources based on a specified resource name. During this process, you do not need to modify the code.

-   Syntax
    
    ```
    alias <alias>=<real>;
    ```
    
-   Parameters
    
    -   alias: the alias of the resource.
        
    -   real: the name of the resource.
        
-   Examples
    
    ```
    -- Add resources res_20121208 and res_20121209. 
    add table sale_detail partition (ds='20121208') as res_20121208;
    add table sale_detail partition (ds='20121209') as res_20121209;
    -- Set the alias of the resource res_20121208 to resName and call this resource. 
    alias resName=res_20121208;
    jar -resources resName -libjars work.jar  -classpath ./work.jar com.company.MainClass args ...;  
    -- Set the alias of the resource res_20121209 to resName and call this resource. 
    alias resName=res_20121209;
    jar -resources resName -libjars work.jar  -classpath ./work.jar com.company.MainClass args ...; 
    ```
    

In this example, the `resName` alias references different resource tables in two jobs. You can read different copies of data without the need to modify the code.

## Download resources

Downloads resources in a MaxCompute project to your on-premises machine. The resource type must be FILE, JAR, ARCHIVE, or PY. The TABLE type is not supported.

-   Syntax
    
    ```
    get resource <resource_name> <path>;
    ```
    
-   Parameters
    
    -   resource\_name: required. The name of the resource that you want to download.
        
    -   path: required. The path where the resource is saved on your on-premises machine.
        
-   Examples
    
    ```
    get resource getaddr.jar D:\;
    ```
    

## Delete resources

Deletes existing resources from a MaxCompute project.

-   Syntax
    
    ```
    drop resource <resource_name>;
    ```
    
-   Parameters
    
    resource\_name: the name of the resource that you want to delete.
    
-   Examples
    
    ```
    drop resource getaddr.jar;
    ```
    
    The following result is returned:
    
    ```
    Confirm to "drop resource getaddr.jar" (yes/no)? y
    OK
    ```
