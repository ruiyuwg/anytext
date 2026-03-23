## **Use case overview**

This topic describes how to use MaxLake to implement a unified data lakehouse architecture, covering data ingestion, data warehousing, and the orchestration of multiple analytics use cases. Using Internet of Vehicles (IoV) data as an example, the workflow shows how to analyze vehicle mileage and speed based on GPS location data reported by in-vehicle terminals. By integrating multiple compute engines, you can derive multi-faceted value from a single data source to support diverse use cases, namely, real-time OLAP reporting, secure cross-team data sharing with dynamic masking, and AI model training. The overall architecture and process are illustrated below:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6699685671/p1034494.png)

### **Automated data discovery (ODS Layer)**

Raw data is stored in **Object Storage Service (OSS)**. In this example, vehicle terminals upload raw files (`parquet` and `orc`) containing GPS location information, partitioned by hour.

1.  Create a `**CONNECTION**` in MaxCompute to manage credentials for external storage.
    
2.  Then, use a `**DataScan**` task to automatically discover these files and register them as structured external tables (ODS layer).
    

### **Incremental data processing (DWD and ADS Layers)**

Filter invalid data from the ODS layer and unify field formats. Examples include formatting time values and validating longitude and latitude coordinates.

### **Multi-engine orchestration for multiple use cases**

-   **Online Analytical Processing (OLAP) + AI**: Connect the **StarRocks** engine to the processed data for sub-second real-time queries and dashboarding (e.g., visualizing total fleet mileage).
    
-   **Secure cross-team collaboration:** Use MaxCompute's fine-grained security to share data with third-party teams using the **Spark** engine.
    
-   **AI training**: The cleaned high-quality data serves as the foundation for model training using frameworks like **PyTorch.**
    
    Dynamic data masking is applied to sensitive fields (like Vehicle IDs) to ensure privacy compliance during collaboration.
    

## **Procedure**

1.  **Upload test data.**
    
    1.  Log on to the [Object Storage Service (OSS) console](https://oss.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, click **Buckets**.
        
        On the **Buckets** page, click **Create Bucket**.
        
        In this example, the bucket name is `vehicle-raw`.
        
    3.  On the **Buckets** page, click the target **Bucket Name** to open the **Objects** page.
        
        Click **Upload Object** to upload the unzipped test data file [Maxlake\_example\_parquet.zip](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20251215/gfpseu/Maxlake_example_parquet.zip).
        
2.  **Grant permissions.**
    
    1.  If you are using a RAM user (not the root account) to manage connections, you must possess the tenant-level `Connection_Admin` role. For more information, see [Tenant-level role authorization](/help/en/maxcompute/user-guide/perform-access-control-based-on-tenant-level-roles).
        
    2.  An Alibaba Cloud account or a user with the tenant-level `Super_Administrator` and `Admin` roles can grant the `Connection_Admin` role.
        
        1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
            
        2.  In the navigation pane on the left, choose **Manage Configurations** > **Tenants** .
            
        3.  On the **Tenants** page, click the **Roles** tab.
            
        4.  On the **Roles** tab, select `Connection_Admin` and `Datascan_Admin`, and click **New Authorization** in the **Actions** column.
            
        5.  In the **Newly Added Authorization** dialog box, add the users to be authorized and click **OK**.
            
3.  **In MaxCompute, create a** `CONNECTION`.
    
    1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
        
    2.  In the left navigation pane, choose **MaxLake** > **Data Lake Connection**.
        
    3.  On the **Data Lake Connection (CONNECTION)** page, click **Establish a connection**.
        
    4.  In the **Create Data Lake Connection** dialog box, set the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Data Connection Name**
        
        The name of the data lake connection. The name must be unique within the tenant.
        
        **RAMRoleARN**
        
        Select the RAMRoleARN of a RAM role that has permissions to access OSS.
        
        You can create a custom role and specify its RAMRoleARN. For more information, see [STS mode authorization](/help/en/maxcompute/security-and-compliance/sts-authorization#li-htl-p7w-45r).
        
        **Data Connection Description**
        
        The description of the data lake connection.
        
4.  **Create a** DataScan **job.**
    
    1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
        
    2.  In the navigation pane on the left, choose **MaxLake** > **Data Discovery**.
        
    3.  On the **Data Discovery** page, click **Create a data discovery task**.
        
    4.  In the **Create Task** dialog box, set the following parameters and click **Create**.
        
        -   **Basic configuration**
            
            **Parameter**
            
            **Description**
            
            **Task Name**
            
            The name of the task. The name must be unique within the tenant.
            
            **Task cycle**
            
            5 minutes
            
        -   **Lake Data Configuration**
            
            **Parameter**
            
            **Description**
            
            **Connection**
            
            Select `CONNECTION` as the external storage access credential.
            
            **Location**
            
            Enter the OSS path where your data files are stored.
            
            -   **Format**: `oss://<Bucket name>/<OSS path>/`
                
                The OSS bucket and the MaxCompute DataScak task must be in the same region and belong to the same Alibaba Cloud account.
                
            -   **Example**: `oss://vehicle-raw/Maxlake_example_parquet`
                
            
        -   **Catalog Configuration**
            
            **Parameter**
            
            **Description**
            
            **Project**
            
            Select the MaxCompute project where the external table will be created.
            
            **Schema**
            
            Select a schema.
            
            Ensure the Schema does not already contain user-created tables with names identical to the folders/files you expect DataScan to discover. If a name conflict exists, the external table will not be created.
            
    5.  The data discovery task runs every 5 minutes. Wait for the task to run. Once successful, verify that the IoV tables have been created and partitions are automatically added.
        
        **Note**
        
        -   If the scan fails, check your OSS bucket for system files like `.DS_Store`. These can cause parsing errors. You must manually delete them.
            
        -   Future versions will support automatic exclusion of such files.
            
        
5.  **SQL data processing scripts.** Run the following SQL scripts in your MaxCompute SQL editor.
    
    1.  Verify ODS layer (raw data).
        
        ```
        -- Business scenario design
        -- Scenario: An IoV platform obtains real-time vehicle location data (GPS) and calculates the hourly mileage and average speed for each vehicle.
        
        -- Data source: In-vehicle terminals report location, speed, and other data every few seconds.
        -- ODS: Stores the raw reported data directly.
        -- DWD: Cleanses, parses, and transforms the data into individual report records.
        -- ADS: Calculates the total hourly mileage and average speed for each vehicle.
        
        -- ODS: Raw reported data table
        -- Stores raw IoV location data, partitioned by hour.
        
        SHOW PARTITIONS ods_vehicle_gps_raw;
        SET odps.sql.allow.fullscan=true;
        
        SELECT  * FROM ods_vehicle_gps_raw WHERE dt='2025-09-17' AND hh='23';
        
        -- Sample results
        +------------+------------+-------------+------------+------------+------------+-------------+------------+------------+
        | vin        | device_id  | report_time | lng        | lat        | speed      | raw_payload | dt         | hh         | 
        +------------+------------+-------------+------------+------------+------------+-------------+------------+------------+
        | VIN001     | DEV001     | 2025-09-16 00:00:00 | 120.00023573730152 | 30.39975989605289 | 73.3843581906447 | mock_payload | 2025-09-17 | 23         | 
        | VIN002     | DEV002     | 2025-09-16 00:00:00 | 120.00517998985256 | 30.33811818824062 | 67.43035716350673 | mock_payload | 2025-09-17 | 23         | 
        | VIN003     | DEV003     | 2025-09-16 00:00:00 | 120.24295999679852 | 30.143229002199707 | 40.8918776553552 | mock_payload | 2025-09-17 | 23         | 
        | VIN001     | DEV001     | 2025-09-16 00:30:00 | 120.24754980497414 | 30.373484773735274 | 49.50436236779409 | mock_payload | 2025-09-17 | 23         | 
        | VIN002     | DEV002     | 2025-09-16 00:30:00 | 120.00510501582413 | 30.42486370328109 | 55.8400627485663 | mock_payload | 2025-09-17 | 23         | 
        | VIN003     | DEV003     | 2025-09-16 00:30:00 | 120.36073125682805 | 30.065016013833237 | 61.82996654036919 | mock_payload | 2025-09-17 | 23         | 
        | VIN002     | DEV002     | 2025-09-16 19:30:00 | 120.29488938268968 | 30.12474152125639 | 66.48209032904454 | mock_payload | 2025-09-17 | 23         | 
        | VIN002     | DEV002     | 2025-09-16 19:00:00 | 120.35157954057287 | 30.459823299646295 | 76.36574370617315 | mock_payload | 2025-09-17 | 23         | 
        | VIN001     | DEV001     | 2025-09-16 19:30:00 | 120.3113710027241 | 30.33402715522518 | 62.601762741153024 | mock_payload | 2025-09-17 | 23         | 
        +------------+------------+-------------+------------+------------+------------+-------------+------------+------------+
        ```
        
    2.  Generate DWD layer (data cleansing).
        
        ```
        -- DWD layer (dwd_vehicle_gps)
        -- Based on the ODS layer, this layer filters invalid data and unifies field formats, such as time formatting and longitude and latitude validation.
        CREATE TABLE IF NOT EXISTS dwd_vehicle_gps (
          vin          STRING COMMENT 'Unique vehicle identifier',
          event_time   DATETIME COMMENT 'Report time',
          lng          DOUBLE COMMENT 'Longitude',
          lat          DOUBLE COMMENT 'Latitude',
          speed        DOUBLE COMMENT 'Speed (km/h)',
          loc_valid    BOOLEAN COMMENT 'Indicates whether the location is valid'
        )
        PARTITIONED BY (dt STRING, hh STRING);
        
        -- Transformation SQL
        INSERT OVERWRITE TABLE dwd_vehicle_gps PARTITION (dt='2025-09-17', hh='23')
        SELECT
        vin,
        TO_DATE(report_time,'yyyy-MM-dd HH:mi:ss') AS event_time,
        lng, lat,
        speed,
        CASE WHEN lng BETWEEN 70 AND 140 AND lat BETWEEN 10 AND 60 THEN TRUE ELSE FALSE END AS loc_valid
        FROM ods_vehicle_gps_raw
        WHERE dt='2025-09-17' AND hh='23'
        AND speed >= 0
        AND vin IS NOT NULL;
        
        SELECT  * FROM dwd_vehicle_gps WHERE dt='2025-09-17' AND hh='23';
        
        -- Sample results
        +------------+------------+------------+------------+------------+-----------+------------+------------+
        | vin        | event_time | lng        | lat        | speed      | loc_valid | dt         | hh         | 
        +------------+------------+------------+------------+------------+-----------+------------+------------+
        | VIN001     | 2025-09-16 00:00:00 | 120.00023573730152 | 30.39975989605289 | 73.3843581906447 | true      | 2025-09-17 | 23         | 
        | VIN002     | 2025-09-16 00:00:00 | 120.00517998985256 | 30.33811818824062 | 67.43035716350673 | true      | 2025-09-17 | 23         | 
        | VIN003     | 2025-09-16 00:00:00 | 120.24295999679852 | 30.143229002199707 | 40.8918776553552 | true      | 2025-09-17 | 23         | 
        | VIN001     | 2025-09-16 00:30:00 | 120.24754980497414 | 30.373484773735274 | 49.50436236779409 | true      | 2025-09-17 | 23         | 
        | VIN003     | 2025-09-16 00:30:00 | 120.36073125682805 | 30.065016013833237 | 61.82996654036919 | true      | 2025-09-17 | 23         | 
        | VIN001     | 2025-09-16 05:00:00 | 120.13891993725622 | 30.39267490566367 | 53.99676876794396 | true      | 2025-09-17 | 23         | 
        | VIN003     | 2025-09-16 05:30:00 | 120.04798104849084 | 30.012209889484666 | 65.01092831837522 | true      | 2025-09-17 | 23         | 
        | VIN002     | 2025-09-16 20:00:00 | 120.42721760246307 | 30.051330581564144 | 79.73892066615583 | true      | 2025-09-17 | 23         | 
        | VIN003     | 2025-09-16 20:00:00 | 120.47715870033818 | 30.302941456112517 | 58.61057150112957 | true      | 2025-09-17 | 23         | 
        | VIN001     | 2025-09-16 20:30:00 | 120.3067564206695 | 30.179763514166588 | 47.77533756931095 | true      | 2025-09-17 | 23         | 
        +------------+------------+-------------+------------+------------+------------+-------------+------------+------------+
        ```
        
    3.  Generate ADS layer (aggregation).
        
        ```
        -- ADS layer (ads_vehicle_hourly_stat)
        -- Calculates the total hourly mileage (using a simple location difference calculation) and average speed for each vehicle.
        CREATE TABLE IF NOT EXISTS ads_vehicle_hourly_stat (
          vin           STRING COMMENT 'Unique vehicle identifier',
          stat_hour     STRING COMMENT 'Statistics hour (yyyy-MM-dd HH)',
          total_distance DOUBLE COMMENT 'Total mileage (km)',
          avg_speed     DOUBLE COMMENT 'Average speed (km/h)'
        )
        PARTITIONED BY (dt STRING, hh STRING);
        
        -- Statistical transformation SQL
        -- Note: A simplified formula is used here to calculate the distance for demonstration purposes. You can use the haversine formula in a real-world scenario.
        -- A simple approximation of distance based on the difference in longitude and latitude (for demonstration).
        SET odps.sql.type.system.odps2=true;
        
        WITH ordered AS (
          SELECT
          vin, event_time, lng, lat, speed,
          ROW_NUMBER() OVER (PARTITION BY vin ORDER BY event_time) AS rn
          FROM dwd_vehicle_gps
          WHERE dt='2025-09-17' AND hh='23' AND loc_valid = TRUE
        ),
        with_prev AS (
          SELECT
          a.vin, a.event_time, a.speed,
          -- A simple approximation using Euclidean distance. Here, a 1-degree difference in longitude or latitude is about 111 km. This is not precise but is sufficient for this demo.
          ABS(a.lng - b.lng)*111 AS dx,
          ABS(a.lat - b.lat)*111 AS dy
          FROM ordered a
          LEFT JOIN ordered b
          ON a.vin = b.vin AND a.rn = b.rn + 1
        )
        INSERT OVERWRITE TABLE ads_vehicle_hourly_stat PARTITION (dt='2025-09-17', hh='23')
          SELECT
          vin,
          '2025-09-17 23' AS stat_hour,
          SUM( SQRT( COALESCE(dx,0)*COALESCE(dx,0) + COALESCE(dy,0)*COALESCE(dy,0) ) ) AS total_distance,
          AVG(speed) AS avg_speed
          FROM with_prev
          GROUP BY vin;
        
        -- Query the mileage and average speed for vehicle VIN001.
        SET odps.sql.allow.fullscan=true;
        SELECT * FROM ads_vehicle_hourly_stat WHERE vin='VIN001'
          ORDER BY stat_hour DESC;
          
        -- Results.
        +------------+---------------+--------------------+-------------------+------------+------------+
        | vin        | stat_hour     | total_distance     | avg_speed         | dt         | hh         | 
        +------------+---------------+--------------------+-------------------+------------+------------+
        | VIN001     | 2025-09-17 23 | 1510.7384548492398 | 59.33624859907179 | 2025-09-17 | 23         | 
        +------------+---------------+--------------------+-------------------+------------+------------+
        
        SET odps.sql.allow.fullscan=true;
        SELECT
        vin AS vehicle_id,
        stat_hour AS stat_time,
        CONCAT(CAST(ROUND(total_distance, 2) AS STRING), ' km') AS mileage,
        CONCAT(CAST(ROUND(avg_speed, 2) AS STRING), ' km/h') AS avg_speed
        FROM ads_vehicle_hourly_stat WHERE vin='VIN001'
          ORDER BY stat_hour DESC;
          
        -- Results.
        +------------+---------------+------------+------------+
        | vehicle_id | stat_time     | mileage    | avg_speed  | 
        +------------+---------------+------------+------------+
        | VIN001     | 2025-09-17 23 | 1510.74 km | 59.34 km/h | 
        +------------+---------------+------------+------------+
        ```
        
    4.  Establish the cross-team role and grant query permissions.
        
        ```
        -- Cross-team collaboration and secure data sharing. Enable dynamic data masking for a third-party team that uses the Spark engine for data analytics.
        CREATE role thirdparty;
        GRANT CreateInstance, List ON project <project_name> TO ROLE thirdparty;
        GRANT SELECT ON TABLE ods_vehicle_gps_raw TO ROLE thirdparty;
        
        ADD USER RAM$<your Alibaba Cloud account>;
        GRANT thirdparty TO RAM$<your Alibaba Cloud account>;
        ```
        
    5.  De-identify the total vehicle mileage table. Mask the unique vehicle ID by retaining only the first and last characters and replacing the other characters with asterisks (\*).
        
        ```
        -- Enable the data masking feature for the project.
        setproject odps.data.masking.policy.enable=true;
        
        -- De-identify the total vehicle mileage table. Mask the unique vehicle ID by retaining only the first and last characters and replacing the other characters with asterisks (*).
        CREATE data masking policy IF NOT EXISTS masking_vin
        TO role (thirdparty)
        USING MASKED_STRING_UNMASKED_BA(1, 1);
        
        apply data masking policy masking_vin bind TO
        TABLE ads_vehicle_hourly_stat COLUMN vin;
        ```
