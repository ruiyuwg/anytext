The extensions of GanosBase include Alibaba Cloud-developed extensions and PostGIS extensions. This topic describes how to update the extensions.

## Update Alibaba Cloud-developed extensions of GanosBase

### Query the installed extensions of GanosBase

1.  Use the PostgreSQL CLI to connect to an ApsaraDB RDS for PostgreSQL instance.
    
2.  Execute the following SQL statements to query the installed extensions of GanosBase:
    
    ```
    SELECT
      *,
      installed_version < default_version AS need_update
    FROM
      pg_available_extensions
    WHERE
      name LIKE 'ganos%';
    ```
    
    Sample output:
    
    ```
                    name           | default_version | installed_version |                                                       comment                        | need_update
    -------------------------------+-----------------+-------------------+--------------------------------------------------------------------------------------+-------------
     ganos_trajectory              | 5.5             | 5.4               | Ganos trajectory extension for PostgreSQL                                            | t
     ganos_pointcloud_geometry     | 5.5             | 5.4               | Ganos_pointcloud LIDAR data and ganos_geometry data for PostgreSQL                   | t
     ganos_raster                  | 5.5             | 5.4               | Ganos raster extension for PostgreSQL                                                | t
     ganos_networking              | 5.5             | 5.4               | Ganos networking extension for PostgreSQL                                            | t
     ganos_geometry_pyramid        | 5.5             | 5.4               | Ganos Geometry Pyramid extension for PostgreSQL                                      | t
     ganos_scene                   | 5.5             | 5.4               | Ganos scene extension for PostgreSQL                                                 | t
     ganos_geometry_topology       | 5.5             | 5.4               | Ganos geometry topology spatial types and functions extension for PostgreSQL         | t
     ganos_tiger_geocoder          | 5.5             | 5.4               | Ganos tiger geocoder and reverse geocoder                                            | t
     ganos_importer                | 5.5             | 5.4               | Ganos Spatial importer extension for PostgreSQL                                      | t
     ganos_vomesh                  | 5.5             | 5.4               | Ganos volumn mesh extension for PostgreSQL                                           | t
    ...
    ```
    
    **Parameter**
    
    **Description**
    
    name
    
    The name of the extension.
    
    default\_version
    
    The version of the extension that can be installed on the RDS instance.
    
    installed\_version
    
    The version of the extension that is installed on the RDS instance.
    
    comment
    
    The description of the extension.
    
    need\_update
    
    Indicates whether an update is required.
    
    **Note**
    
    In the sample output, if the value of the **need\_update** parameter is **t**, an update is required.
    

### **Update Alibaba Cloud-developed extensions of** GanosBase

-   If the versions of the extensions of GanosBase are 3.1 or later, execute the following statement to update all extensions of GanosBase:
    
    ```
    SELECT ganos_update();
    ```
    
-   If the versions of the extensions of GanosBase are earlier than 3.1, create a function to update all self-developed extensions of GanosBase. The following code snippet is an example:
    
    ```
    CREATE OR REPLACE FUNCTION ganos_update()
        RETURNS text AS
    $$
    DECLARE
        rec RECORD;
        sql text;
    BEGIN
        FOR rec IN
            SELECT extname
            FROM pg_extension
            WHERE extname like 'ganos_%'
            LOOP
                sql = 'ALTER EXTENSION '
                    || rec.extname
                    || ' UPDATE ';
                RAISE NOTICE '%', sql;
                EXECUTE sql;
            END LOOP;
        return 'All Ganos extensions have updated to latest version';
    END
    $$ LANGUAGE 'plpgsql' volatile STRICT;
    ```
    

## Update the PostGIS extensions

### **Query the PostGIS extensions that are installed.**

1.  Use the PostgreSQL CLI to connect to your RDS instance.
    
2.  Execute the following SQL statements to query the PostGIS extensions that are installed:
    
    ```
    SELECT
      *,
      installed_version < default_version AS need_update
    FROM
      pg_available_extensions
    WHERE
      name LIKE 'postgis%';
    ```
    
    Sample output:
    
    ```
              name          | default_version | installed_version |              comment               | need_update 
    ------------------------+-----------------+-------------------+------------------------------------+-------------
     postgis                | 3.3.2           | 3.1.4             | Ganos PostGIS+                     | t
     postgis_tiger_geocoder | 3.3.2           | 3.1.4             | Ganos PostGIS+ tiger geocoder      | t
     postgis_raster         | 3.3.2           | 3.1.4             | PostGIS raster types and functions | t
     ...
    ```
    
    **Parameter**
    
    **Description**
    
    name
    
    The name of the extension.
    
    default\_version
    
    The version of the extension that can be installed on the RDS instance.
    
    installed\_version
    
    The version of the extension that is installed on the RDS instance.
    
    comment
    
    The description of the extension.
    
    need\_update
    
    Indicates whether an update is required.
    
    **Note**
    
    In the sample output, if the value of the **need\_update** parameter is **t**, an update is required.
    

### **Update the PostGIS extensions**

The method to update the PostGIS extensions varies based on the major engine version of the RDS instance.

**Note**

The following operations are applicable only to a single database. If the RDS instance contains multiple databases, you must perform the following operations on each database.

-   If the RDS instance runs PostgreSQL 10, PostgreSQL 13, PostgreSQL 14, or PostgreSQL 15, you can use the following method to update the PostGIS extensions for the RDS instance:
    
    Execute the following SQL statement:
    
    ```
    ALTER EXTENSION <Extension name> UPDATE;
    ```
    
    **Note**
    
    -   You must execute the preceding statement to update each extension.
        
    -   You can also call the PostGIS\_Extensions\_Upgrade function to update the PostGIS extensions. For more information, see [PostGIS\_Extensions\_Upgrade](https://postgis.net/docs/PostGIS_Extensions_Upgrade.html).
        
    
    ```
    SELECT PostGIS_Extensions_Upgrade();
    ```
    
-   If the RDS instance runs PostgreSQL 11 or PostgreSQL 12, you can use the following method to update the PostGIS extensions for the RDS instance:
    
    Execute the following SQL statements:
    
    ```
    do
    $$
    DECLARE
        with_pgis boolean;
        with_ganos boolean;
    BEGIN
        SELECT ((SELECT 1 FROM pg_extension WHERE extname='postgis') IS NOT null)
        INTO with_pgis;
    
        SELECT ((SELECT 1 FROM pg_extension WHERE extname='ganos_geometry') IS NOT null)
        INTO with_ganos;
    
        IF with_pgis AND with_ganos THEN
            PERFORM ganos_update();
        ELSIF with_ganos THEN
            PERFORM ganos_update();
        ELSIF with_pgis THEN
            PERFORM PostGIS_Extensions_Upgrade();
        END IF;
    
        return 'PostGIS has update to ' || postgis_lib_version();
    END
    $$ LANGUAGE 'plpgsql' ;
    ```
