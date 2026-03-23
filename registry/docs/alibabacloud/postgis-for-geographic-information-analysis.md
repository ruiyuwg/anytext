PostGIS extends Hologres with spatial data types, functions, and operators. Use it to store, query, and analyze geographic data — from bounding box filters and proximity searches to polygon intersection checks and distance calculations.

Hologres supports PostGIS 3.0.0. In Hologres V1.3 and later, most PostGIS functions run on the Hologres Query Engine (HQE) developed by Alibaba Cloud, which delivers better query performance. Earlier versions fall back to the PostgreSQL Query Engine (PQE).

## Limits

-   Fields of the `geometry` or `geography` data type cannot be used as primary keys. Use an integer surrogate key instead.
    
-   Spatial indexes are not supported. For large datasets, apply bounding box pre-filters (such as `ST_MakeBox2D` + `ST_Covers`) before more expensive spatial predicates to reduce the scan scope.
    
-   In Hologres instances earlier than V1.3, all PostGIS functions run on PQE. Performance may be lower than HQE.
    

## Install the PostGIS extension

Run the following statement as a superuser to install PostGIS in a database. Installation is per-database — repeat this step for each database that needs spatial support.

```
CREATE EXTENSION IF NOT EXISTS postgis;
```

> PostGIS cannot be installed in the `pg_catalog` schema.

To verify the installation, run:

```
SELECT postgis_full_version();
```

A successful install returns a version string such as `POSTGIS="3.0.0 ..."`.

To remove the extension:

```
DROP EXTENSION postgis;
```

**Important**

Do not use `DROP EXTENSION postgis CASCADE`. The `CASCADE` option drops all dependent objects — including PostGIS data, roaring bitmap data, Proxima data, binary log data, BSI data, and metadata such as tables, views, and server data — and cannot be undone.

## Create and query a geometry table

PostGIS supports two spatial data types in Hologres: `geometry` (planar/Cartesian coordinates) and `geography` (spherical longitude/latitude coordinates). For details on the `geography` type, see the [PostGIS geography documentation](https://postgis.net/docs/manual-dev/using_postgis_dbmanagement.html#PostGIS_Geography).

The `geometry` type is more commonly used. The following steps show how to create a geometry table and run spatial queries.

### 1\. Create a geometry table

When creating a table, you can specify a geometry subtype. Supported subtypes: `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`.

Without a subtype:

```
CREATE TABLE holo_gis_1 (
  id   INT,
  geom geometry,
  PRIMARY KEY (id)
);
```

With a subtype and spatial reference system identifier (SRID):

```
CREATE TABLE holo_gis_2 (
  id   INT,
  geom geometry(point, 4326),
  PRIMARY KEY (id)
);
```

In this example, the subtype is `Point` and the SRID is `4326` (WGS 84). If no SRID is specified, the default is `0`. For more information about SRIDs, see the [PostGIS documentation](https://postgis.net/docs/manual-dev/using_postgis_dbmanagement.html).

### 2\. Insert spatial data

```
-- Without SRID
INSERT INTO holo_gis_1 VALUES (1, ST_GeomFromText('point(116 39)'));

-- With SRID 4326
INSERT INTO holo_gis_2 VALUES (1, ST_GeomFromText('point(116 39)', 4326));
```

For more information about spatial functions, see [Spatial functions](#section-7i3-sr4-p4o).

### 3\. Query spatial data

After inserting data, you can run the following types of queries.

**Rectangular range query**

Returns all points within a bounding box.

Without SRID:

```
SELECT st_astext(geom)
FROM holo_gis_1
WHERE ST_Covers(
  ST_MakeBox2D(ST_Point(116, 39), ST_Point(117, 40)),
  geom
);
```

With SRID:

```
SELECT st_astext(geom)
FROM holo_gis_2
WHERE ST_Covers(
  ST_SetSRID(ST_MakeBox2D(ST_Point(116, 39), ST_Point(117, 40)), 4326),
  geom
);
```

Both queries return:

```
st_astext
-------------
POINT(116 39)
```

**Polygon intersection check**

To find points inside or on the boundary of a polygon, use `ST_Covers`. The syntax is the same as the rectangular range query above — `ST_MakeBox2D` produces a rectangular polygon that includes its boundary in the coverage test.

Without SRID:

```
SELECT st_astext(geom)
FROM holo_gis_1
WHERE ST_Covers(
  ST_MakeBox2D(ST_Point(116, 39), ST_Point(117, 40)),
  geom
);
```

With SRID:

```
SELECT st_astext(geom)
FROM holo_gis_2
WHERE ST_Covers(
  ST_SetSRID(ST_MakeBox2D(ST_Point(116, 39), ST_Point(117, 40)), 4326),
  geom
);
```

Both queries return:

```
st_astext
-------------
POINT(116 39)
```

## Spatial functions

PostGIS provides spatial functions to convert and analyze geometry values. The function syntax uses the following parameters:

-   **geom**: a `geometry` value or an expression that evaluates to `geometry`
    
-   **precision**: `INTEGER`; coordinate precision in the range 1–20; default `15`
    
-   **index**: `INTEGER`; a 1-based index unless otherwise noted
    
-   **srid**: `INTEGER`; a spatial reference system identifier
    

The **Required engine** column indicates which query engine executes each function:

**Engine**

**When it applies**

**Performance**

**HQE** (Hologres Query Engine)

Hologres V1.3 and later

Higher — optimized for analytical workloads

**PQE** (PostgreSQL Query Engine)

All versions; required for certain functions

Lower — compatibility mode

For the complete PostGIS function specification, see the [PostGIS reference documentation](https://postgis.net/docs/reference.html#Management_Functions).

### Geometry constructors

All functions in this group require **HQE in Hologres V1.3**.

**Function**

**Syntax**

**Returns**

**Description**

`ST_LineFromMultiPoint`

`ST_LineFromMultiPoint(geom)`

`GEOMETRY`

Creates a linestring from a multipoint geometry, preserving point order. The returned geometry has the same SRID as the input.

`ST_MakeEnvelope`

`ST_MakeEnvelope(xmin, ymin, xmax, ymax)`  
`ST_MakeEnvelope(xmin, ymin, xmax, ymax, srid)`  

`GEOMETRY` (POINT, LINESTRING, or POLYGON)

Creates a geometry from corner coordinates. Returns a point if the coordinates collapse to a point, a linestring if they form a line, or a polygon otherwise. If an SRID is provided, the returned geometry uses that SRID.

`ST_MakeLine`

`ST_MakeLine(geom1, geom2)`

`GEOMETRY` (LINESTRING)

Creates a linestring from two input geometries.

`ST_MakePoint`

`ST_MakePoint(x, y)`

`GEOMETRY` (POINT)

Creates a point from coordinate values.

`ST_Point`

`ST_Point(x, y)`

`GEOMETRY` (POINT)

Creates a point from coordinate values.

`ST_Polygon`

`ST_Polygon(linestring, srid)`

`GEOMETRY` (POLYGON)

Creates a polygon whose exterior ring is the input linestring, with the given SRID.

### Geometry accessors

All functions in this group require **HQE in Hologres V1.3**.

**Function**

**Syntax**

**Returns**

**Description**

`GeometryType`

`GeometryType(geom)`

`VARCHAR`

Returns the subtype name of the input geometry as a string.

`ST_Boundary`

`ST_Boundary(geom)`

`GEOMETRY`

Returns the boundary of the input geometry. An empty geometry returns the input as-is; a point or non-empty multipoint returns an empty geometry collection; a linestring returns a multipoint of its boundary points; a polygon without interior rings returns a closed linestring; a polygon with interior rings or a multipolygon returns a multilinestring of all boundary rings.

`ST_Dimension`

`ST_Dimension(geom)`

`INTEGER`

Returns the intrinsic dimension of the geometry subtype.

`ST_Envelope`

`ST_Envelope(geom)`

`GEOMETRY`

Returns the minimum bounding box of the input geometry. Returns a point if the box degenerates to a point, a two-point linestring if it is one-dimensional, or a clockwise-oriented polygon otherwise. The returned geometry has the same SRID as the input.

`ST_ExteriorRing`

`ST_ExteriorRing(geom)`

`GEOMETRY` (LINESTRING)

Returns the exterior ring of a polygon as a closed linestring.

`ST_GeometryN`

`ST_GeometryN(geom, index)`

`GEOMETRY`

Returns the geometry at the given 1-based index. For simple geometries (point, linestring, polygon) with index 1, returns the geometry itself; otherwise returns null. For collections, returns the element at the index.

`ST_GeometryType`

`ST_GeometryType(geom)`

`VARCHAR`

Returns the subtype name of the input geometry as a string.

`ST_InteriorRingN`

`ST_InteriorRingN(geom, index)`

`GEOMETRY` (LINESTRING)

Returns the interior ring of a polygon at the given index position as a closed linestring.

`ST_IsClosed`

`ST_IsClosed(geom)`

`BOOLEAN`

Returns `true` if the geometry is closed. A point or multipoint is always closed. A linestring is closed when its start and end points coincide. A polygon is closed when all rings are non-empty and their start and end points coincide.

`ST_IsCollection`

`ST_IsCollection(geom)`

`BOOLEAN`

Returns `true` if the geometry is a `GEOMETRYCOLLECTION`, `MULTIPOINT`, `MULTILINESTRING`, or `MULTIPOLYGON`.

`ST_IsEmpty`

`ST_IsEmpty(geom)`

`BOOLEAN`

Returns `true` if the geometry contains no points.

`ST_IsPolygonCCW`

`ST_IsPolygonCCW(geom)`

`BOOLEAN`

Returns `true` if the input polygon is oriented counterclockwise. Also returns `true` for points, linestrings, multipoints, and multilinestrings, and for geometry collections where all elements are counterclockwise.

`ST_IsSimple`

`ST_IsSimple(geom)`

`BOOLEAN`

Returns `true` if the geometry has no anomalous geometric points such as self-intersections.

`ST_NPoints`

`ST_NPoints(geom)`

`INTEGER`

Returns the number of points in the geometry.

`ST_NRings`

`ST_NRings(geom)`

`INTEGER`

Returns the number of rings in the geometry.

`ST_NumGeometries`

`ST_NumGeometries(geom)`

`INTEGER`

Returns the number of elements in a geometry collection.

`ST_NumInteriorRings`

`ST_NumInteriorRings(geom)`

`INTEGER`

Returns the number of interior rings in a polygon.

`ST_NumPoints`

`ST_NumPoints(geom)`

`INTEGER`

Returns the number of points in the geometry.

`ST_PointN`

`ST_PointN(geom, index)`

`GEOMETRY` (POINT)

Returns the point at the given index in a linestring. Negative index values count from the end: `-1` returns the last point.

`ST_Points`

`ST_Points(geom)`

`GEOMETRY` (MULTIPOINT)

Returns all non-empty points in the geometry as a multipoint. Duplicate points, including ring start and end points, are preserved.

`ST_StartPoint`

`ST_StartPoint(geom)`

`GEOMETRY`

Returns the first point of a linestring. The returned geometry has the same SRID as the input.

`ST_X`

`ST_X(point)`

`DOUBLE`

Returns the X coordinate of a point.

`ST_Y`

`ST_Y(point)`

`DOUBLE`

Returns the Y coordinate of a point.

### Geometry editors

All functions in this group require **HQE in Hologres V1.3**.

**Function**

**Syntax**

**Returns**

**Description**

`ST_AddPoint`

`ST_AddPoint(geom1, geom2)`

`GEOMETRY`

Returns a linestring with a point added to it.

`ST_Multi`

`ST_Multi(geom)`

`GEOMETRY` (MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, or GEOMETRYCOLLECTION)

Converts a geometry to its corresponding multi-type. If the input is already a multi-type or collection, returns a copy.

`ST_RemovePoint`

`ST_RemovePoint(geom, index)`

`GEOMETRY`

Returns a linestring with the point at the given zero-based index removed. The returned geometry has the same SRID as the input.

`ST_Reverse`

`ST_Reverse(geom)`

`GEOMETRY`

Reverses the vertex order of a linear or areal geometry. For a point or multipoint, returns a copy. For a collection, reverses vertices for each element.

`ST_SetPoint`

`ST_SetPoint(geom1, index, geom2)`

`GEOMETRY`

Returns a linestring with the point at the given index replaced by the input point's coordinates.

### Geometry validation

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_IsValid`

`ST_IsValid(geom)`

`BOOLEAN`

PQE

Returns `true` if the geometry is valid according to the OGC specification.

### Spatial reference system functions

All functions in this group require **HQE in Hologres V1.3**.

**Function**

**Syntax**

**Returns**

**Description**

`ST_SetSRID`

`ST_SetSRID(geom, srid)`

`GEOMETRY`

Returns the input geometry with its SRID updated to the given value. Does not reproject the coordinates.

`ST_SRID`

`ST_SRID(geom)`

`INTEGER`

Returns the SRID of the input geometry.

### Geometry input

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_GeomFromText`

`ST_GeomFromText(wkt_string)`  
`ST_GeomFromText(wkt_string, srid)`  

`GEOMETRY`

PQE

Constructs a geometry from its well-known text (WKT) representation.

### Geometry output

All functions in this group require **HQE in Hologres V1.3**.

**Function**

**Syntax**

**Returns**

**Description**

`ST_AsBinary`

`ST_AsBinary(geom)`

`BYTEA`

Returns the well-known binary (WKB) representation of the geometry, encoded as a hex string using ASCII characters `0`–`9` and `A`–`F`.

`ST_AsEWKB`

`ST_AsEWKB(geom)`

`BYTEA`

Returns the extended well-known binary (EWKB) representation of the geometry.

`ST_AsEWKT`

`ST_AsEWKT(geom)`

`VARCHAR`

Returns the extended well-known text (EWKT) representation of the geometry.

`ST_AsGeoJSON`

`ST_AsGeoJSON(geom)`  
`ST_AsGeoJSON(geom, precision)`  

`VARCHAR`

Returns the GeoJSON representation of the geometry.

`ST_AsText`

`ST_AsText(geom)`  
`ST_AsText(geom, precision)`  

`VARCHAR`

Returns the WKT representation of the geometry.

### Spatial relationship predicates

Most functions in this group run on **PQE**. `ST_DWithin_S2` runs on **HQE** (Hologres V2.0.8 and later).

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_Contains`

`ST_Contains(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if every point of `geom2` is in `geom1` and their interiors intersect. Equivalent to `ST_Within(geom2, geom1)`.

`ST_ContainsProperly`

`ST_ContainsProperly(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if both geometries are non-empty and all points of `geom2` lie in the interior (not the boundary) of `geom1`.

`ST_CoveredBy`

`ST_CoveredBy(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if every point of `geom1` is in `geom2`. Equivalent to `ST_Covers(geom2, geom1)`.

`ST_Covers`

`ST_Covers(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if every point of `geom2` is in `geom1`. Equivalent to `ST_CoveredBy(geom2, geom1)`.

`ST_Crosses`

`ST_Crosses(geom1, geom2)`

`BOOLEAN`

N/A

Returns `true` if the two geometries intersect.

`ST_Disjoint`

`ST_Disjoint(geom1, geom2)`

`BOOLEAN`

N/A

Returns `true` if the two geometries share no points.

`ST_DWithin`

`ST_DWithin(geom1, geom2, threshold)`

`BOOLEAN`

PQE

Returns `true` if the Euclidean distance between the two geometries does not exceed the threshold.

`ST_DWithin_S2`

`ST_DWithin_S2(x1, y1, x2, y2, threshold)`

`BOOLEAN`

HQE (V2.0.8)

Returns `true` if the spherical distance between two geographic locations is less than or equal to `threshold` (unit: meters). Parameters in order: longitude of Location 1, latitude of Location 1, longitude of Location 2, latitude of Location 2, distance threshold. Input values cannot be constants.

`ST_Equals`

`ST_Equals(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if the two geometries have equal point sets and their interiors intersect.

`ST_Intersects`

`ST_Intersects(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if the two geometries share at least one point.

`ST_Touches`

`ST_Touches(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if the two geometries touch — they intersect but share no interior points.

`ST_Within`

`ST_Within(geom1, geom2)`

`BOOLEAN`

PQE

Returns `true` if every point of `geom1` is in `geom2` and their interiors intersect. Equivalent to `ST_Contains(geom2, geom1)`.

### Measurement functions

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_Angle`

`ST_Angle(geom1, geom2, geom3)`  
`ST_Angle(geom1, geom2, geom3, geom4)`  

`DOUBLE`

PQE

Returns the clockwise angle in radians in the range \[0, 2π). With three points, measures the rotation from P1 to P3 around P2. With four points, measures the angle between directed lines P1–P2 and P3–P4; returns null if P1 equals P2 or P3 equals P4.

`ST_Area`

`ST_Area(geom)`

`DOUBLE`

HQE (V1.3)

Returns the Cartesian area of the geometry in the same units as the coordinate system. Returns `0` for points, linestrings, and their multi-types. For collections, returns the sum of all element areas.

`ST_Azimuth`

`ST_Azimuth(point1, point2)`

`DOUBLE`

HQE (V1.3)

Returns the north-based Cartesian azimuth defined by two points.

`ST_Distance`

`ST_Distance(geom1, geom2)`

`DOUBLE`

HQE (V1.3)

Returns the spherical central angle between two geometries.

`ST_Distance_Sphere_S2`

`ST_Distance_Sphere_S2(x1, y1, x2, y2)`

`DOUBLE`

HQE (V2.0.8)

Returns the spherical distance between two geographic locations in meters. Parameters in order: longitude of Location 1, latitude of Location 1, longitude of Location 2, latitude of Location 2. Valid latitude range: \[−90, +90\]. Valid longitude range: \[−180, +180\]. Input values cannot be constants.

`ST_Length`

`ST_Length(geom)`

`DOUBLE`

HQE (V1.3)

Returns the Cartesian length of a linear geometry in the same units as the coordinate system. Returns `0` for points, multipoints, and areal geometries. For collections, returns the total length.

`ST_Perimeter`

`ST_Perimeter(geom)`

`DOUBLE`

HQE (V1.3)

Returns the Cartesian perimeter (boundary length) of an areal geometry in the same units as the coordinate system. Returns `0` for points, multipoints, and linear geometries. For collections, returns the sum of all element perimeters.

### Overlay function

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_Intersection`

`ST_Intersection(geom1, geom2)`

`GEOMETRY`

HQE (V1.3)

Returns the geometric intersection of two geometries.

### Geometry processing functions

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_Buffer`

`ST_Buffer(geography, float8)`

`GEOMETRY`

PQE

Returns the geometry representing all points within the given distance from the input geography.

`ST_ConvexHull`

`ST_ConvexHull(geom)`

`GEOMETRY`

HQE (V1.3)

Returns the convex hull of all non-empty points in the input geometry.

`ST_Simplify`

`ST_Simplify(geom, tolerance)`

`GEOMETRY`

HQE (V1.3)

Returns a simplified copy of the geometry using the Ramer-Douglas-Peucker algorithm with the given tolerance. Topology may not be preserved.

### Bounding box functions

All functions in this group run on **PQE**.

**Function**

**Syntax**

**Returns**

**Description**

`ST_XMax`

`ST_XMax(geom)`

`DOUBLE`

Returns the maximum X coordinate of the geometry.

`ST_XMin`

`ST_XMin(geom)`

`DOUBLE`

Returns the minimum X coordinate of the geometry.

`ST_YMax`

`ST_YMax(geom)`

`DOUBLE`

Returns the maximum Y coordinate of the geometry.

`ST_YMin`

`ST_YMin(geom)`

`DOUBLE`

Returns the minimum Y coordinate of the geometry.

### Linear referencing function

**Function**

**Syntax**

**Returns**

**Required engine**

**Description**

`ST_LineInterpolatePoint`

`ST_LineInterpolatePoint(geom, fraction)`

`GEOMETRY` (POINT)

HQE (V1.3)

Returns the point at a fractional distance along the line, measured from the start. For example, `fraction=0.5` returns the midpoint.

## Best practices for using spatial functions

For end-to-end examples of common geographic analysis patterns, see [Use spatial functions to query data](/help/en/hologres/use-cases/use-spatial-functions-to-query-data#task-2088461).
