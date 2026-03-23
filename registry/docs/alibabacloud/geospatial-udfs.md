This topic describes how to use open source geospatial user-defined functions (UDFs) to analyze spatial data.

## Prerequisites

Make sure that the following requirements are met:

-   Git is installed.
    
-   Maven is installed and environment variables are configured.
    
-   The MaxCompute client is installed.
    
    For more information about how to install the MaxCompute client, see [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    

## Background information

Apache Hive provides a set of open source geospatial UDFs. For more information, visit [GitHub](https://github.com/Esri/spatial-framework-for-hadoop). MaxCompute allows you to directly use Hive UDFs, including Hive geospatial UDFs, in MaxCompute.

For more information about how to use Hive UDFs in MaxCompute, see [Develop a UDF in Java](/help/en/maxcompute/user-guide/java-udfs#section-why-mqf-vdb).

**Note**

If you encounter an issue when you use UDFs, submit your issue on GitHub for help.

## Step 1: Prepare a local UDF

You can use one of the following methods to prepare a local UDF:

-   Download the source code and compile the source code into a JAR package.
    
    1.  Obtain the URL to download the code package of [geospatial UDFs](https://github.com/Esri/spatial-framework-for-hadoop).![下载链接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7425080261/p251077.png)
        
    2.  Open the Git command-line tool, and download the geospatial UDF code package for Hive 2.1.0 to your on-premises machine. Hive 2.1.0 corresponds to Hadoop 2.7.2. Sample commands:
        
        -   ```
            git clone https://github.com/Esri/spatial-framework-for-hadoop.git
            ```
            
        -   ```
            git clone -b "v2.1.0" --single-branch git@github.com:Esri/spatial-framework-for-hadoop.git
            ```
            
    3.  Use Maven to create a project.
        
        Sample commands:
        
        ```
        cd spatial-framework-for-hadoop
        mvn clean package -DskipTests -P java-8,hadoop-2.7,hive-2.1
        ```
        
    4.  Copy the created JAR package. This JAR package contains all methods of the open source geospatial UDFs.
        
        Sample command:
        
        ```
        cp hive/target/spatial-sdk-hive-2.1.1-SNAPSHOT.jar ../spatial-sdk-hive.jar
        ```
        
    5.  Download the JAR package that the project depends on.
        
        Sample commands:
        
        -   ```
            wget 'https://repo1.maven.org/maven2/com/esri/geometry/esri-geometry-api/2.2.0/esri-geometry-api-2.2.0.jar' -O esri-geometry-api.jar
            ```
            
        -   ```
            cp ~/.m2/repository/com/esri/geometry/esri-geometry-api/2.2.0/esri-geometry-api-2.2.0.jar ../esri-geometry-api.jar
            ```
            
        
-   Download the compiled JAR packages.
    
    1.  Obtain the [Spatial JAR](https://github.com/Esri/spatial-framework-for-hadoop/releases/download/v2.2.0/spatial-sdk-hive-2.2.0.jar) package and rename the package as `spatial-sdk-hive.jar`.
        
    2.  Obtain the [Esri Geometry JAR](https://repo1.maven.org/maven2/com/esri/geometry/esri-geometry-api/2.2.0/esri-geometry-api-2.2.0.jar) package and rename the package as `esri-geometry-api.jar`.
        
    
    **Note**
    
    If the packages fail to be downloaded, you can directly access the GitHub repository that corresponds to the packages.
    

## Step 2: Register UDFs with MaxCompute

1.  Run the following commands on the [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to upload the two JAR packages to the project as resources:
    
    For more information about how to add resources, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w).
    
    ```
    add jar esri-geometry-api.jar;
    add jar spatial-sdk-hive.jar;
    ```
    
2.  Run the following commands to register the UDFs:
    
    ```
    CREATE FUNCTION ST_Aggr_ConvexHull  AS  'com.esri.hadoop.hive.ST_Aggr_ConvexHull' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Aggr_Intersection    AS  'com.esri.hadoop.hive.ST_Aggr_Intersection'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Aggr_Union   AS  'com.esri.hadoop.hive.ST_Aggr_Union'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Area AS  'com.esri.hadoop.hive.ST_Area'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_AsBinary AS  'com.esri.hadoop.hive.ST_AsBinary'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_AsGeoJson    AS  'com.esri.hadoop.hive.ST_AsGeoJson'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_AsJson   AS  'com.esri.hadoop.hive.ST_AsJson'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_AsShape  AS  'com.esri.hadoop.hive.ST_AsShape' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_AsText   AS  'com.esri.hadoop.hive.ST_AsText'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Bin  AS  'com.esri.hadoop.hive.ST_Bin' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_BinEnvelope  AS  'com.esri.hadoop.hive.ST_BinEnvelope' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Boundary AS  'com.esri.hadoop.hive.ST_Boundary'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Buffer   AS  'com.esri.hadoop.hive.ST_Buffer'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Centroid AS  'com.esri.hadoop.hive.ST_Centroid'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Contains AS  'com.esri.hadoop.hive.ST_Contains'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_ConvexHull   AS  'com.esri.hadoop.hive.ST_ConvexHull'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_CoordDim AS  'com.esri.hadoop.hive.ST_CoordDim'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Crosses  AS  'com.esri.hadoop.hive.ST_Crosses' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Difference   AS  'com.esri.hadoop.hive.ST_Difference'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Dimension    AS  'com.esri.hadoop.hive.ST_Dimension'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Disjoint AS  'com.esri.hadoop.hive.ST_Disjoint'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Distance AS  'com.esri.hadoop.hive.ST_Distance'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_EndPoint AS  'com.esri.hadoop.hive.ST_EndPoint'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Envelope AS  'com.esri.hadoop.hive.ST_Envelope'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_EnvIntersects    AS  'com.esri.hadoop.hive.ST_EnvIntersects'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Equals   AS  'com.esri.hadoop.hive.ST_Equals'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_ExteriorRing AS  'com.esri.hadoop.hive.ST_ExteriorRing'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeodesicLengthWGS84  AS  'com.esri.hadoop.hive.ST_GeodesicLengthWGS84' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeomCollection   AS  'com.esri.hadoop.hive.ST_GeomCollection'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Geometry AS  'com.esri.hadoop.hive.ST_Geometry'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeometryN    AS  'com.esri.hadoop.hive.ST_GeometryN'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeometryType AS  'com.esri.hadoop.hive.ST_GeometryType'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeomFromGeoJson  AS  'com.esri.hadoop.hive.ST_GeomFromGeoJson' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeomFromJson AS  'com.esri.hadoop.hive.ST_GeomFromJson'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeomFromShape    AS  'com.esri.hadoop.hive.ST_GeomFromShape'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeomFromText AS  'com.esri.hadoop.hive.ST_GeomFromText'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_GeomFromWKB  AS  'com.esri.hadoop.hive.ST_GeomFromWKB' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_InteriorRingN    AS  'com.esri.hadoop.hive.ST_InteriorRingN'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Intersection AS  'com.esri.hadoop.hive.ST_Intersection'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Intersects   AS  'com.esri.hadoop.hive.ST_Intersects'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Is3D AS  'com.esri.hadoop.hive.ST_Is3D'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_IsClosed AS  'com.esri.hadoop.hive.ST_IsClosed'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_IsEmpty  AS  'com.esri.hadoop.hive.ST_IsEmpty' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_IsMeasured   AS  'com.esri.hadoop.hive.ST_IsMeasured'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_IsRing   AS  'com.esri.hadoop.hive.ST_IsRing'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_IsSimple AS  'com.esri.hadoop.hive.ST_IsSimple'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Length   AS  'com.esri.hadoop.hive.ST_Length'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_LineFromWKB  AS  'com.esri.hadoop.hive.ST_LineFromWKB' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_LineString   AS  'com.esri.hadoop.hive.ST_LineString'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_M    AS  'com.esri.hadoop.hive.ST_M'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MaxM AS  'com.esri.hadoop.hive.ST_MaxM'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MaxX AS  'com.esri.hadoop.hive.ST_MaxX'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MaxY AS  'com.esri.hadoop.hive.ST_MaxY'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MaxZ AS  'com.esri.hadoop.hive.ST_MaxZ'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MinM AS  'com.esri.hadoop.hive.ST_MinM'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MinX AS  'com.esri.hadoop.hive.ST_MinX'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MinY AS  'com.esri.hadoop.hive.ST_MinY'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MinZ AS  'com.esri.hadoop.hive.ST_MinZ'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MLineFromWKB AS  'com.esri.hadoop.hive.ST_MLineFromWKB'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MPointFromWKB    AS  'com.esri.hadoop.hive.ST_MPointFromWKB'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MPolyFromWKB AS  'com.esri.hadoop.hive.ST_MPolyFromWKB'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MultiLineString  AS  'com.esri.hadoop.hive.ST_MultiLineString' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MultiPoint   AS  'com.esri.hadoop.hive.ST_MultiPoint'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_MultiPolygon AS  'com.esri.hadoop.hive.ST_MultiPolygon'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_NumGeometries    AS  'com.esri.hadoop.hive.ST_NumGeometries'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_NumInteriorRing  AS  'com.esri.hadoop.hive.ST_NumInteriorRing' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_NumPoints    AS  'com.esri.hadoop.hive.ST_NumPoints'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Overlaps AS  'com.esri.hadoop.hive.ST_Overlaps'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Point    AS  'com.esri.hadoop.hive.ST_Point'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_PointFromWKB AS  'com.esri.hadoop.hive.ST_PointFromWKB'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_PointN   AS  'com.esri.hadoop.hive.ST_PointN'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_PointZ   AS  'com.esri.hadoop.hive.ST_PointZ'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_PolyFromWKB  AS  'com.esri.hadoop.hive.ST_PolyFromWKB' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Polygon  AS  'com.esri.hadoop.hive.ST_Polygon' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Relate   AS  'com.esri.hadoop.hive.ST_Relate'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_SetSRID  AS  'com.esri.hadoop.hive.ST_SetSRID' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_SRID AS  'com.esri.hadoop.hive.ST_SRID'    USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_StartPoint   AS  'com.esri.hadoop.hive.ST_StartPoint'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_SymmetricDiff    AS  'com.esri.hadoop.hive.ST_SymmetricDiff'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Touches  AS  'com.esri.hadoop.hive.ST_Touches' USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Union    AS  'com.esri.hadoop.hive.ST_Union'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Within   AS  'com.esri.hadoop.hive.ST_Within'  USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_X    AS  'com.esri.hadoop.hive.ST_X'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Y    AS  'com.esri.hadoop.hive.ST_Y'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    CREATE FUNCTION ST_Z    AS  'com.esri.hadoop.hive.ST_Z'   USING 'spatial-sdk-hive.jar,esri-geometry-api.jar';
    ```
    

## Step 3: Test a UDF

Submit an SQL statement on the MaxCompute client to test whether a UDF can be normally used. Sample commands:

```
-- Enable Hive compatibility and submit a UDF for testing. 
set odps.sql.hive.compatible=true;
select ST_AsText(ST_Point(1, 2));
```

The following returned result indicates that the UDF is registered with MaxCompute.

```
+-----+
| _c0 |
+-----+
| POINT (1 2) |
+-----+
```

For more information about how to use open source UDFs, see [UDF documentation](https://github.com/Esri/spatial-framework-for-hadoop/wiki/UDF-Documentation).
