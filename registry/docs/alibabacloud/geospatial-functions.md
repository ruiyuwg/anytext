This topic describes the syntax of geospatial functions and provides examples on how to use the functions.

## Introduction

Geospatial functions that start with the ST\_ prefix comply with the SQL/MM standard and the OpenGIS Abstract Specification of the Open Geospatial Consortium (OGC). Geospatial functions use well-known text (WKT) representations to describe geometries, such as points, line strings, and polygons. The following table describes the geometries and the WKT representations that are used to describe the geometries.

**Geometry**

**WKT representation**

Point

POINT (0 0)

Line string

LINESTRING (0 0, 1 1, 1 2)

Polygon

POLYGON((0 0, 4 0, 4 4, 0 4, 0 0), (1 1, 2 1, 2 2, 1 2, 1 1))

Multipoint

MULTIPOINT(0 0, 1 2)

Multilinestring

MULTILINESTRING((0 0, 1 1, 1 2), (2 3, 3 2, 5 4))

Multipolygon

MULTIPOLYGON(((0 0, 4 0, 4 4, 0 4, 0 0), (1 1, 2 1, 2 2, 1 2, 1 1)), ((-1 -1, -1 -2, -2 -2, -2 -1, -1 -1)))

Geometry collection

GEOMETRYCOLLECTION(POINT(2 3), LINESTRING(2 3, 3 4))

## Functions

**Type**

**Function**

**Syntax**

**Limit**

Support for SQL

Support for SPL

Constructors

[ST\_AsText function](#section-uf9-ooi-du2)

ST\_AsText(_x_)

Returns the WKT representation of a geometry.

√

×

[ST\_GeometryFromText function](#section-48m-m4j-06b)

ST\_GeometryFromText(_x_)

Returns a geometry from the specified WKT representation.

√

×

[ST\_LineFromText function](#section-8m7-og8-h4e)

ST\_LineFromText(_x_)

Returns a line string from the specified WKT representation.

√

×

[ST\_Polygon function](#section-cm1-cek-75m)

ST\_Polygon(_x_)

Returns a polygon from the specified WKT representation.

√

×

[ST\_Point function](#section-rlo-dkw-8bj)

ST\_Point(_x_, _y_)

Returns a point from the specified WKT representation.

√

×

Operator

[ST\_Boundary function](#section-bot-4rj-c7w)

ST\_Boundary(_x_)

Returns the closure of the combinatorial boundary of a geometry.

√

×

[ST\_Buffer function](#section-f6n-liv-3xh)

ST\_Buffer(_x_, _distance_)

Returns a geometry that represents all points whose distance from the specified geometry is less than or equal to the specified distance.

√

×

[ST\_Difference function](#section-dqo-a0n-w1f)

ST\_Difference(_x_, _y_)

Returns a geometry that represents the point set difference of two specified geometries.

√

×

[ST\_Envelope function](#section-qcu-yqo-xo7)

ST\_Envelope(_x_)

Returns the bounding rectangular polygon of a geometry.

√

×

[ST\_ExteriorRing function](#section-5e0-e34-uct)

ST\_ExteriorRing(_x_)

Returns a line string that represents the exterior ring of a geometry.

√

×

[ST\_Intersection function](#section-whq-rb9-eo4)

ST\_Intersection(_x_, _y_)

Returns a geometry that represents the point set intersection of two specified geometries.

√

×

[ST\_SymDifference function](#section-5ym-66t-xom)

ST\_SymDifference(_x_, _y_)

Returns a geometry that represents the point set symmetric difference of two specified geometries.

√

×

Spatial relationship tests

[ST\_Contains function](#section-bwh-0yi-d6k)

ST\_Contains(_x_, _y_)

Returns true if no points of the second geometry lie in the exterior of the first geometry and at least one point of the interior of the first geometry lies in the interior of the second geometry. If the array contains the specified element, the function returns true.

√

×

[ST\_Crosses function](#section-3dz-03v-q35)

ST\_Crosses(_x_, _y_)

Returns true if two specified geometries have several interior points in common. If yes, the function returns true.

√

×

[ST\_Disjoint function](#section-b65-y0a-140)

ST\_Disjoint(_x_, _y_)

Returns true if two specified geometries do not share a portion of two-dimensional space. If two specified geometries do not share a portion of two-dimensional space, the function returns true.

√

×

[ST\_Equals function](#section-8do-nhl-2uh)

ST\_Equals(_x_, _y_)

Returns true if two specified geometries represent the same geometry. If yes, the function returns true.

√

×

[ST\_Intersects function](#section-l5z-7sj-s8l)

ST\_Intersects(_x_, _y_)

Returns true if two specified geometries share a portion of two-dimensional space. If yes, the function returns true.

√

×

[ST\_Overlaps function](#section-htm-799-jbx)

ST\_Overlaps(_x_, _y_)

Returns true if two specified geometries share space and have the same dimension but are not completely contained by each other. If yes, the function returns true.

√

×

[ST\_Relate function](#section-euf-ym7-sg7)

ST\_Relate(_x_, _y_, _patternMatrix string_)

Returns true if two specified geometries have a spatial relationship. If yes, the function returns true.

√

×

[ST\_Touches function](#section-akl-aqy-hmu)

ST\_Touches(_x_, _y_)

Returns true if two specified geometries have at least one point in common but their interiors do not intersect. If yes, the function returns true.

√

×

[ST\_Within function](#section-1cr-ecg-owu)

ST\_Within(_x_, _y_)

Returns true if the first geometry is completely inside the second geometry. If yes, the function returns true.

√

×

Accessors

[ST\_Area function](#section-8s0-ka8-0os)

ST\_Area(_x_)

Calculates the projected area of a geometry on a two-dimensional plane by using the Euclidean distance method.

√

×

[ST\_Centroid function](#section-ge2-pko-nu9)

ST\_Centroid(_x_)

Returns the point value that represents the mathematical centroid of a geometry.

√

×

[ST\_CoordDim function](#section-nqn-1a7-z02)

ST\_CoordDim(_x_)

Returns the coordinate dimension of a geometry.

√

×

[ST\_Dimension function](#section-vtn-hlz-pqn)

ST\_Dimension(_x_)

Returns the inherent dimension of a geometry. The inherent dimension must be less than or equal to the coordinate dimension.

√

×

[ST\_Distance function](#section-qk5-p6p-406)

ST\_Distance(_x_, _y_)

Returns the minimum distance between two geometries.

√

×

[ST\_EndPoint function](#section-vod-0jn-1by)

ST\_EndPoint(_x_)

Returns the last point of a line string.

√

×

[ST\_IsClosed function](#section-gp6-nhp-wf6)

ST\_IsClosed(_x_)

Returns true if the start point of a line string coincides with the end point. If yes, the function returns true.

√

×

[ST\_IsEmpty function](#section-w0e-bpe-zdt)

ST\_IsEmpty(_x_)

Returns true if a geometry is empty. If yes, the function returns true.

√

×

[ST\_IsRing function](#section-vyq-1f8-6jr)

ST\_IsRing(_x_)

Returns true if a line string is closed and simple. If yes, the function returns true.

√

×

[ST\_Length function](#section-f0k-9qv-413)

ST\_Length(_x_)

Calculates the projected length of a line string on a two-dimensional plane by using the Euclidean distance method. If multiple line strings exist, the function returns the sum of the lengths of the multiple line strings.

√

×

[ST\_NumPoints function](#section-hff-e0e-7cr)

ST\_NumPoints(_x_)

Returns the number of points in a geometry.

√

×

[ST\_NumInteriorRing function](#section-209-wyy-8xk)

ST\_NumInteriorRing(_x_)

Returns the number of interior rings in a geometry.

√

×

[ST\_StartPoint function](#section-erh-jm1-h6w)

ST\_StartPoint(_x_)

Returns the first point of a line string.

√

×

[ST\_X function](#section-ntz-66g-q2w)

ST\_X(_x_)

Returns the first X-axis coordinate of the input point.

√

×

[ST\_XMax function](#section-imm-d1d-7y9)

ST\_XMax(_x_)

Returns the maximum first X-coordinate of a geometry.

√

×

[ST\_XMin function](#section-ypd-gr0-y7z)

ST\_XMin(_x_)

Returns the minimum first X-coordinate of a geometry.

√

×

[ST\_Y function](#section-zsp-j85-b7e)

ST\_Y(_x_)

Returns the first Y-axis coordinate of the input point.

√

×

[ST\_YMax function](#section-8k6-97u-weu)

ST\_YMax(_x_)

Returns the maximum first Y-coordinate of a geometry.

√

×

[ST\_YMin function](#section-6mk-z79-5jg)

ST\_YMin(_x_)

Returns the minimum first Y-coordinate of a geometry.

√

×

Bing tiles

[bing\_tile function](#section-lnq-1qa-6gi)

bing\_tile(_x_, _y_, _zoom\_level_)

The following function returns a Bing tile based on the X-coordinate, Y-coordinate, and zoom level.

√

×

bing\_tile(_quadKey_)

The following function returns a Bing tile based on the quadtree key.

√

×

[bing\_tile\_at function](#section-a72-l72-134)

bing\_tile\_at(_x_, _y_, _zoom\_level_)

Returns a Bing tile based on the latitude, longitude, and zoom level.

√

×

[bing\_tile\_coordinates function](#section-5ly-1yr-thl)

bing\_tile\_coordinates(_x_)

Returns the X- and Y-coordinates of a Bing tile.

√

×

[bing\_tile\_polygon function](#section-o76-del-7dd)

bing\_tile\_polygon(_x_)

Returns the polygon format of a Bing tile.

√

×

[bing\_tile\_quadkey function](#section-kup-fo0-d4n)

bing\_tile\_quadkey(_x_)

Obtain the quadtree key of a Bing tile.

√

×

[bing\_tile\_zoom\_level function](#section-lly-hw4-8vo)

bing\_tile\_zoom\_level(_x_)

Obtain the zoom level of a Bing tile.

√

×

## ST\_AsText function

The ST\_AsText function returns the WKT representation of a geometry.

### Syntax

```
ST_AsText(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The varchar type.

### Examples

Obtain the WKT representation of a point.

-   Query statement
    
    ```
    * | SELECT ST_AsText(ST_Point(1,1))
    ```
    
-   Query and analysis results![ST_AsText](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0105160461/p304082.png)
    

## ST\_GeometryFromText function

The ST\_GeometryFromText function returns a geometry from the WKT representation that you specify.

### Syntax

```
ST_GeometryFromText(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varchar type.

### Return value type

The geometry type.

### Examples

Construct multiple polygons.

-   Query statement
    
    ```
    * | SELECT ST_GeometryFromText('multipolygon(((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))')
    ```
    
-   Query and analysis results![ST_GeometryFromText](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0105160461/p304085.png)
    

## ST\_LineFromText function

The ST\_LineFromText function returns a line string from the WKT representation that you specify.

### Syntax

```
ST_LineFromText(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varchar type.

### Return value type

The linestring type.

### Examples

Construct a line string.

-   Query statement
    
    ```
    * | SELECT ST_LineFromText('linestring(10 10,20 20)')
    ```
    
-   Query and analysis results![ST_LineFromText](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0105160461/p304089.png)
    

## ST\_Polygon function

The ST\_Polygon function returns a polygon from the WKT representation that you specify.

### Syntax

```
ST_Polygon(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varchar type.

### Return value type

The polygon type.

### Examples

Construct a polygon.

-   Query statement
    
    ```
    * | SELECT ST_Polygon('polygon((10 10,10 20,20 20,20 15,10 10))')
    ```
    
-   Query and analysis results![ST_Polygon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p304095.png)
    

## ST\_Point function

The ST\_Point function returns a point from the WKT representation that you specify.

### Syntax

```
ST_Point(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The point type.

### Examples

Construct a point.

-   Query statement
    
    ```
    * | SELECT ST_Point(0,0)
    ```
    
-   Query and analysis results![ST_Point](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p308878.png)
    

## ST\_Boundary function

The ST\_Boundary function returns the closure of the combinatorial boundary of a geometry.

-   The closure of the combinatorial boundary of a point is empty. If the geometry that you specify is a point, the function returns POINT EMPTY.
    
-   The closure of the combinatorial boundary of a line string is composed of the end points of the line string.
    
-   The closure of the combinatorial boundary of a polygon is composed of line strings, including the exterior and interior rings of the polygon.
    

### Syntax

```
ST_Boundary(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geography type.

### Return value type

The geography type.

### Examples

Use the ST\_Polygon function to return a polygon. Then, use the ST\_Boundary function to return the closure of the combinatorial boundary of the polygon.

-   Query statement
    
    ```
    * | SELECT  ST_Boundary(ST_Polygon('polygon((10 10,10 20,20 20,20 15,10 10))'))
    ```
    
-   Query and analysis results![ST_Boundary](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p311101.png)
    

## ST\_Buffer function

The ST\_Buffer function returns a geometry that represents all points whose distance from the specified geometry is less than or equal to the specified distance.

### Syntax

```
ST_Buffer(x, distance)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_distance_

The distance.

### Return value type

The geometry type.

### Examples

Use the ST\_Point function to return a point. Then, use the ST\_Buffer function to return a polygon that represents all points whose distance from the point is less than or equal to the specified distance.

-   Query statement
    
    ```
    * | SELECT ST_Buffer(ST_Point(1,1),1)
    ```
    
-   Query and analysis results![ST_Buffer](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p308883.png)
    

## ST\_Difference function

The ST\_Difference function returns a geometry that represents the point set difference of two specified geometries.

### Syntax

```
ST_Difference(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The geometry type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Difference function to return a geometry that represents the point set difference of the two geometries.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Difference(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,0 15,0 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      ) AS "Difference"
    ```
    
-   Query and analysis results![ST_Difference](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307448.png)
    

## ST\_Envelope function

The ST\_Envelope function returns the bounding rectangular polygon of a geometry.

### Syntax

```
ST_Envelope(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The geometry type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_Envelope function to return the bounding rectangular polygon of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Envelope(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      ) 
    ```
    
-   Query and analysis results![ST_Envelope](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307450.png)
    

## ST\_ExteriorRing function

The ST\_ExteriorRing function returns a line string that represents the exterior ring of a geometry.

### Syntax

```
ST_ExteriorRing(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The geometry type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_ExteriorRing function to return a line string that represents the exterior ring of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_ExteriorRing(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_ExteriorRing](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307454.png)
    

## ST\_Intersection function

The ST\_Intersection function returns a geometry that represents the point set intersection of two specified geometries.

### Syntax

```
ST_Intersection(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The geometry type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Intersection function to return a geometry that represents the point set intersection of the two geometries.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Intersection(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      ) 
    ```
    
-   Query and analysis results![ST_Intersection](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307460.png)
    

## ST\_SymDifference function

The ST\_SymDifference function returns a geometry that represents the point set symmetric difference of two specified geometries.

### Syntax

```
ST_SymDifference(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The geometry type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_SymDifference function to return a geometry that represents the point set symmetric difference of the two geometries.

-   Query statement
    
    ```
    * |
    SELECT
      ST_SymDifference(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_SymDifference](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307467.png)
    

## ST\_Contains function

The ST\_Contains function checks whether no points of the second geometry lie in the exterior of the first geometry and at least one point of the interior of the first geometry lies in the interior of the second geometry. If yes, the function returns true.

### Syntax

```
ST_Contains(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Contains function to check whether no points of the second geometry lie in the exterior of the first geometry and at least one point of the interior of the first geometry lies in the interior of the second geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Contains(
        ST_GeometryFromText(
          'polygon((10 10,10 20,20 20,20 15,10 10))'
        ),
        ST_GeometryFromText(
          'point(11 11)'
        )
      )
    ```
    
-   Query and analysis results![ ST_Contains](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307468.png)
    

## ST\_Crosses function

The ST\_Crosses function checks whether two specified geometries have several interior points in common. If yes, the function returns true.

### Syntax

```
ST_Crosses(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Crosses function to check whether the two geometries have several interior points in common.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Crosses(
        ST_GeometryFromText(
          'multipolygon (((10 10, 10 20, 20 20, 20 15 , 10 10), (50 40, 50 50, 60 50, 60 40, 50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10, 10 20, 20 20, 20 15 , 10 10), (50 40, 50 50, 60 50, 60 40, 50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Disjoint function

The ST\_Disjoint function checks whether two specified geometries share a portion of two-dimensional space. If not, the function returns true.

### Syntax

```
ST_Disjoint(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Disjoint function to check whether the two geometries do not share any portion of two-dimensional space.

-   Query statement
    
    ```
    * |
    SELECT
       ST_Disjoint(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Equals function

The ST\_Equals function checks whether two specified geometries represent the same geometry. If yes, the function returns true.

### Syntax

```
ST_Equals(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Equals function to check whether the two geometries represent the same geometry.

-   Query statement
    
    ```
    * |
    SELECT
       ST_Equals(
        ST_GeometryFromText(
          'multipolygon(((10 10,10 20,20 20,20 15,10 10),(50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon(((10 10,10 20,20 20,20 15,10 10),(50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Intersects function

The ST\_Intersects function checks whether two specified geometries share a portion of two-dimensional space. If yes, the function returns true.

### Syntax

```
ST_Intersects(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Intersects function to check whether the two geometries share a portion of two-dimensional space.

-   Query statement
    
    ```
    * |
    SELECT
       ST_Intersects(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ ST_Contains](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307468.png)
    

## ST\_Overlaps function

The ST\_Overlaps function checks whether two specified geometries share space and have the same dimension but are not completely contained by each other. If yes, the function returns true.

### Syntax

```
ST_Overlaps(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Overlaps function to check whether the two geometries share space and have the same dimension but are not completely contained by each other.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Overlaps(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Relate function

The ST\_Relate function checks whether two specified geometries have a spatial relationship. If yes, the function returns true.

### Syntax

```
ST_Relate(x, y, patternMatrix string)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

_patternMatrix string_

The DE-9IM pattern matrix string. The value of this parameter is of the varchar type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Relate function to check whether the two geometries have a spatial relationship.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Relate(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        ),  '****T****'
      )
    ```
    
-   Query and analysis results![ ST_Contains](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307468.png)
    

## ST\_Touches function

The ST\_Touches function checks whether two specified geometries have at least one point in common but their interiors do not intersect. If yes, the function returns true.

### Syntax

```
ST_Touches(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Touches function to check whether the two geometries have at least one point in common but their interiors do not intersect.

-   Query statement
    
    ```
    * |
    SELECT
       ST_Touches(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Within function

The ST\_Within function checks whether the first geometry is completely inside the second geometry. If yes, the function returns true.

### Syntax

```
ST_Within(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_GeometryFromText function to return two geometries. Then, use the ST\_Within function to check whether the first geometry is completely inside the second geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Within(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Area function

The ST\_Area function calculates the projected area of a geometry on a two-dimensional plane by using the Euclidean distance method.

### Syntax

```
ST_Area(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_Area function to calculate the projected area of the geometry on a two-dimensional plane.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Area(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Area](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2105160461/p307481.png)
    

## ST\_Centroid function

The ST\_Centroid function returns the point value that represents the mathematical centroid of a geometry.

### Syntax

```
ST_Centroid(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The geometry type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_Centroid function to return the point value that represents the mathematical centroid of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Centroid(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Centroid](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2105160461/p307484.png)
    

## ST\_CoordDim function

The ST\_CoordDim function returns the coordinate dimension of a geometry.

### Syntax

```
ST_CoordDim(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The bigint type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_CoordDim function to return the coordinate dimension of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_CoordDim(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_CoordDim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2105160461/p307494.png)
    

## ST\_Dimension function

The ST\_Dimension function returns the inherent dimension of a geometry. The inherent dimension must be less than or equal to the coordinate dimension.

### Syntax

```
ST_Dimension(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

-   If _x_ is a point or an empty geometry, the function returns 0.
    
-   If _x_ is a line string, the function returns 1.
    
-   If _x_ is a polygon, the function returns 2.
    
-   If _x_ is a geometry, the function returns the largest dimension of the collection.
    

### Return value type

The bigint type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_Dimension function to return the inherent dimension of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Dimension(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Dimension](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2105160461/p307497.png)
    

## ST\_Distance function

The ST\_Distance function returns the minimum distance between two geometries.

### Syntax

```
ST_Distance(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

_y_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_GeometryFromText function to return two geometries.Then, use the ST\_Distance function to return the minimum distance between the two geometries.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Distance(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 50)))'
        ),
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_Distance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2105160461/p307499.png)
    

## ST\_EndPoint function

The ST\_EndPoint function returns the last point of a line string.

### Syntax

```
ST_EndPoint(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The point type.

### Examples

Use the ST\_LineFromText function to return a line string. Then, use the ST\_EndPoint function to return the last point of the line string.

-   Query statement
    
    ```
    * |
    SELECT
      ST_EndPoint(
        ST_LineFromText(
          'linestring (10 10,20 20)'
        )
      )
    ```
    
-   Query and analysis results![ST_EndPoint](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p308071.png)
    

## ST\_IsClosed function

The ST\_IsClosed function checks whether the start point of a line string coincides with the end point. If yes, the function returns true.

### Syntax

```
ST_IsClosed(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_LineFromText function to return a line string. Then, use the ST\_IsClosed function to check whether the start point of the line string coincides with the end point.

-   Query statement
    
    ```
    * |
    SELECT
      ST_IsClosed(
        ST_LineFromText(
          'linestring (10.05 10.28 , 20.95 20.89 )'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_IsEmpty function

The ST\_IsEmpty function checks whether a geometry is empty. If yes, the function returns true.

### Syntax

```
ST_IsEmpty(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_Point function to return a point. Then, use the ST\_IsEmpty function to check whether the point is empty.

-   Query statement
    
    ```
    * | SELECT ST_IsEmpty(ST_Point(1,1))
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_IsRing function

The ST\_IsRing function checks whether a line string is closed and simple. If yes, the function returns true.

### Syntax

```
ST_IsRing(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The Boolean type.

### Examples

Use the ST\_LineFromText function to return a line string. Then, use the ST\_IsRing function to check whether the line string is closed and simple.

-   Query statement
    
    ```
    * |
    SELECT
      ST_IsRing(
        ST_LineFromText(
          'linestring (10.05 10.28,20.95 20.89 )'
        )
      )
    ```
    
-   Query and analysis results![ST_Crosses](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105160461/p307469.png)
    

## ST\_Length function

The ST\_Length function calculates the projected length of a line string on a two-dimensional plane by using the Euclidean distance method. If multiple line strings exist, the function returns the sum of the lengths of the multiple line strings.

### Syntax

```
ST_Length(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_LineFromText function to return a line string. Then, use the ST\_Length function to calculate the projected length of the line string.

-   Query statement
    
    ```
    * |
    SELECT
      ST_Length(
        ST_LineFromText(
          'linestring (10.05 10.28,20.95 20.89)'
        )
      )
    ```
    
-   Query and analysis results![ST_Length](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307553.png)
    

## ST\_NumPoints function

The ST\_NumPoints function returns the number of points in a geometry.

### Syntax

```
ST_NumPoints(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The bigint type.

### Examples

Use the ST\_LineFromText function to return a line string. Then, use the ST\_NumPoints function to return the number of points in the line string.

-   Query statement
    
    ```
    * |
    SELECT
      ST_NumPoints(
        ST_LineFromText('linestring (10 10,20 20)')
      )
    ```
    
-   Query and analysis results![ST_NumPoints](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307554.png)
    

## ST\_NumInteriorRing function

The ST\_NumInteriorRing function returns the number of interior rings in a geometry.

### Syntax

```
ST_NumInteriorRing(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The bigint type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_NumInteriorRing function to return the number of interior rings in the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_NumInteriorRing(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_NumInteriorRing](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307555.png)
    

## ST\_StartPoint function

The ST\_StartPoint function returns the first point of a line string.

### Syntax

```
ST_StartPoint(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The point type.

### Examples

Use the ST\_LineFromText function to return a line string. Then, use the ST\_StartPoint function to return the first point of the line string.

-   Query statement
    
    ```
    * |
    SELECT
      ST_StartPoint(
        ST_LineFromText(
          'linestring (10 10,20 20 )'
        )
      )
    ```
    
-   Query and analysis results![ST_StartPoint](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307558.png)
    

## ST\_X function

The ST\_X function returns the X-coordinate of a specified point.

### Syntax

```
ST_X(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the point type.

### Return value type

The double type.

### Examples

Use the ST\_Point function to return a point. Then, use the ST\_X function to return the X-coordinate of the point.

-   Query statement
    
    ```
    * | SELECT ST_X(ST_Point(1,3))
    ```
    
-   Query and analysis results![ST_X](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307559.png)
    

## ST\_XMax function

The ST\_XMax function returns the maximum first X-coordinate of a geometry.

### Syntax

```
ST_XMax(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_XMax function to return the maximum first X-coordinate of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_XMax(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_XMax](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307561.png)
    

## ST\_XMin function

The ST\_XMin function returns the minimum first X-coordinate of a geometry.

### Syntax

```
ST_XMin(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_XMin function to return the minimum first X-coordinate of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_XMin(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_XMin](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8738470461/p307563.png)
    

## ST\_Y function

The ST\_Y function returns the Y-coordinate of a specified point.

### Syntax

```
ST_Y(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the point type.

### Return value type

The double type.

### Examples

Use the ST\_Point function to return a point. Then, use the ST\_Y function to return the Y-coordinate of the point.

-   Query statement
    
    ```
    * | SELECT ST_Y(ST_Point(1,3))
    ```
    
-   Query and analysis results![ST_Y](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3105160461/p307560.png)
    

## ST\_YMax function

The ST\_YMax function returns the maximum first Y-coordinate of a geometry.

### Syntax

```
ST_YMax(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_YMax function to return the maximum first Y-coordinate of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_YMax(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_YMax](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p307564.png)
    

## ST\_YMin function

The ST\_YMin function returns the minimum first Y-coordinate of a geometry.

### Syntax

```
ST_YMin(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the geometry type.

### Return value type

The double type.

### Examples

Use the ST\_GeometryFromText function to return a geometry. Then, use the ST\_YMin function to return the minimum first Y-coordinate of the geometry.

-   Query statement
    
    ```
    * |
    SELECT
      ST_YMin(
        ST_GeometryFromText(
          'multipolygon (((10 10,10 20,20 20,20 15,10 10), (50 40,50 50,60 50,60 40,50 40)))'
        )
      )
    ```
    
-   Query and analysis results![ST_YMin](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p307565.png)
    

## bing\_tile function

The bing\_tile function returns a Bing tile.

### Syntax

-   The following function returns a Bing tile based on the X-coordinate, Y-coordinate, and zoom level.
    
    ```
    bing_tile(x, y, zoom_level)
    ```
    
-   The following function returns a Bing tile based on the quadtree key.
    
    ```
    bing_tile(quadKey)
    ```
    

### Parameters

**Parameter**

**Description**

_x_

The X-coordinate. The value of this parameter is of the integer type.

_y_

The Y-coordinate. The value of this parameter is of the integer type.

_zoom\_level_

The zoom level. Valid values: \[1,23\]. The value of this parameter is of the integer type.

_quadKey_

The quadtree key.

### Return value type

The BingTile type.

### Examples

-   Example 1: Create a Bing tile based on the X-coordinate, Y-coordinate, and zoom level.
    
    -   Query statement
        
        ```
        * | SELECT bing_tile(10, 20, 20)
        ```
        
    -   Query and analysis results![bing_tile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324876.png)
        
-   Example 2: Create a Bing tile based on the quadtree key.
    
    -   Query statement
        
        ```
        * | SELECT bing_tile(bing_tile_quadkey(bing_tile(10, 20, 20)))
        ```
        
    -   Query and analysis results![bing_tile](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324876.png)
        

## bing\_tile\_at function

The bing\_tile\_at function returns a Bing tile based on the latitude, longitude, and zoom level.

### Syntax

```
bing_tile_at(x, y, zoom_level)
```

### Parameters

**Parameter**

**Description**

_x_

The latitude. Valid values: \[-85.05112878,85.05112878\]. The value of this parameter is of the double type.

_y_

The longitude. Valid values: \[-180,180\]. The value of this parameter is of the double type.

_zoom\_level_

The zoom level. Valid values: \[1,23\]. The value of this parameter is of the integer type.

### Return value type

The BingTile type.

### Examples

Create a Bing tile.

-   Query statement
    
    ```
    * | SELECT bing_tile_at(47.265511, -122.465691, 12)
    ```
    
-   Query and analysis results![bing_tile_at](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324930.png)
    

## bing\_tile\_coordinates function

The bing\_tile\_coordinates function returns the X- and Y-coordinates of a Bing tile.

### Syntax

```
bing_tile_coordinates(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the BingTile type.

### Return value type

The array(integer,integer) type.

### Examples

Obtain the X- and Y-coordinates of a Bing tile.

-   Query statement
    
    ```
    * | SELECT bing_tile_coordinates(bing_tile_at(47.265511, -122.465691, 12))
    ```
    
-   Query and analysis results![bing_tile_coordinates](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324937.png)
    

## bing\_tile\_polygon function

The bing\_tile\_polygon function returns the polygon representation of a Bing tile.

### Syntax

```
bing_tile_polygon(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the BingTile type.

### Return value type

The polygon type.

### Examples

Obtain the polygon representation of a Bing tile.

-   Query statement
    
    ```
    * | SELECT bing_tile_polygon(bing_tile_at(30.26, 120.19, 12))
    ```
    
-   Query and analysis results![bing_tile_polygon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324943.png)
    

## bing\_tile\_quadkey function

The bing\_tile\_quadkey function returns the quadtree key of a Bing tile.

### Syntax

```
bing_tile_quadkey(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the BingTile type.

### Return value type

The varchar type.

### Examples

Obtain the quadtree key of a Bing tile.

-   Query statement
    
    ```
    * | SELECT bing_tile_quadkey(bing_tile(10, 20, 20))
    ```
    
-   Query and analysis results![bing_tile_quadkey](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324961.png)
    

## bing\_tile\_zoom\_level function

The bing\_tile\_zoom\_level function returns the zoom level of a Bing tile.

### Syntax

```
bing_tile_zoom_level(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the BingTile type.

### Return value type

The double type.

### Examples

Obtain the zoom level of a Bing tile.

-   Query statement
    
    ```
    * | SELECT bing_tile_zoom_level(bing_tile(10, 20, 20))
    ```
    
-   Query and analysis results![bing_tile_zoom_level](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105160461/p324963.png)
