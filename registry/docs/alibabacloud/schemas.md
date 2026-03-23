Schemas are used to associate projects with tables, resources, and functions in MaxCompute. You can use schemas to further classify tables, resources, and functions. This topic describes the basic operations on schemas.

## Prepare the runtime environment

PyODPS can run on a PyODPS node in DataWorks or on an on-premises machine. Before you run PyODPS, you must select a tool and prepare the runtime environment.

-   DataWorks: If you want to run PyODPS in DataWorks, you must create a PyODPS 2 node or a PyODPS 3 node. For more information, see [Use PyODPS in DataWorks](/help/en/maxcompute/user-guide/use-pyodps-in-dataworks#concept-ch1-lwf-cfb).
    
-   On-premises machine: If you want to run PyODPS on an on-premises machine, you must install PyODPS and initialize the MaxCompute entry object.
    

## Perform basic operations

If you want to use the schema feature of MaxCompute, you can enable it through [Schema-related operations](/help/en/maxcompute/user-guide/schema-related-operations).

-   Create a schema.
    
    ```
    schema = o.create_schema("**schema_name**")
    print(schema)
    ```
    
-   Delete a schema.
    
    ```
    schema = o.delete_schema("**schema_name**")
    ```
    
-   List all schemas.
    
    ```
    for schema in o.list_schemas():
        print(schema)
    ```
    
-   After you enable the schema feature, all MaxCompute objects on which MaxCompute entry objects can perform operations are located in the schema named `DEFAULT`. To perform operations on objects in other schemas, you must specify a schema when you create an entry object. Sample code:
    
    ```
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID to your AccessKey ID. 
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET to your AccessKey secret. 
    # We recommend that you do not directly use your AccessKey ID or AccessKey secret.
    o = ODPS(
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
        project='<your-default-project>',
        endpoint='<your-end-point>',
        schema='<your-schema-name>',
    )
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    your-default-project
    
    The name of the MaxCompute project.
    
    your-end-point
    
    The endpoint of the MaxCompute project. You must configure this parameter based on the region and network connection method that you selected when you create the MaxCompute project. For more information about the endpoints that correspond to each region and network, see [Endpoints](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
    **Important**
    
    If you specify an invalid endpoint, an error occurs when you access MaxCompute.
    
    your-schema-name
    
    The name of the schema.
    
-   Specify the `schema` parameter for the operation methods of different objects. Sample code:
    
    ```
    # List all tables in the test_schema table.
    for table in o.list_tables(schema='**schema_name**'):
        print(table)
    ```
    
-   Specify the default schema when you execute an SQL statement. Sample code:
    
    ```
    o.execute_sql("SELECT * FROM dual", default_schema="**schema_name**")
    ```
