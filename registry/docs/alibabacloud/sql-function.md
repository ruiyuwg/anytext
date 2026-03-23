This topic provides an overview of SQL functions.

## **Overview**

**Classification**

**Description**

**Common functions**

[Aggregate functions](/help/en/sls/aggregate-function)

Perform summary calculations on the target dataset to generate a single statistical result.

-   [avg function](/help/en/sls/aggregate-function#section-r3j-gup-zms)
    
-   [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw)
    
-   [max function](/help/en/sls/aggregate-function#section-vbl-gik-lpa)
    
-   [min function](/help/en/sls/aggregate-function#section-9c3-xat-3a6)
    
-   [sum function](/help/en/sls/aggregate-function#section-j8m-dem-alf)
    

[String functions](/help/en/sls/string-functions-1)

Process text data, including search, replace, substring, concatenate, and format.

-   [concat function](/help/en/sls/string-functions-1#section-dgb-jac-rw0)
    
-   [length function](/help/en/sls/string-functions-1#section-wav-jjp-xgi)
    
-   [position function](/help/en/sls/string-functions-1#section-0se-ywm-xaf)
    
-   [replace function](/help/en/sls/string-functions-1#section-zf1-rxu-ort)
    
-   [split function](/help/en/sls/string-functions-1#section-f4d-tjb-ugm)
    

[Date and time functions](/help/en/sls/date-and-time-functions-1)

Perform format conversion, grouping, and aggregation on dates and times in logs.

-   [current\_date function](/help/en/sls/date-and-time-functions-1#section-ola-y3u-id5)
    
-   [date function](/help/en/sls/date-and-time-functions-1#section-nvv-obo-0hp)
    
-   [day function](/help/en/sls/date-and-time-functions-1#section-y88-f4w-u2q)
    
-   [date\_trunc function](/help/en/sls/date-and-time-functions-1#section-zpc-jv2-4fb)
    
-   [time\_series function](/help/en/sls/date-and-time-functions-1#section-wsz-wt2-4fb)
    

[JSON functions](/help/en/sls/json-functions)

Process JSON objects, including extraction, transformation, and statistics.

-   [json\_array\_contains function](/help/en/sls/json-functions#section-e8j-1om-8k0)
    
-   [json\_array\_get function](/help/en/sls/json-functions#section-jjn-dv3-4y9)
    
-   [json\_array\_length function](/help/en/sls/json-functions#section-697-fqh-nng)
    
-   [json\_extract function](/help/en/sls/json-functions#section-uqz-6yr-bun)
    
-   [json\_extract\_scalar function](/help/en/sls/json-functions#section-8jj-a1y-076)
    

[Regular expression functions](/help/en/sls/regular-expression-functions-1)

Pattern matching and text processing.

-   [regexp\_extract\_all function](/help/en/sls/regular-expression-functions-1#section-rra-f3x-ek1)
    
-   [regexp\_extract function](/help/en/sls/regular-expression-functions-1#section-0wa-zya-8tj)
    
-   [regexp\_extract\_bool function](/help/en/sls/regular-expression-functions-1#a7d61afabftlt)
    
-   [regexp\_replace function](/help/en/sls/regular-expression-functions-1#section-un6-0un-8l7)
    
-   [regexp\_split function](/help/en/sls/regular-expression-functions-1#section-tn8-doo-c82)
    

[Year-on-year and month-on-month functions](/help/en/sls/interval-valued-and-periodicity-valued-comparison-functions)

Calculate relative changes in time series data.

-   [compare function](/help/en/sls/interval-valued-and-periodicity-valued-comparison-functions#section-gmx-4ja-9rz)
    
-   [ts\_compare function](/help/en/sls/interval-valued-and-periodicity-valued-comparison-functions#section-hcx-rhd-p2b)
    

[Array functions and operators](/help/en/sls/array-functions-and-operators)

Perform addition, deletion, modification, query, traversal, and transformation on arrays.

-   [Subscript operator](/help/en/sls/array-functions-and-operators#section-hc8-r42-4f1)
    
-   [array\_distinct function](/help/en/sls/array-functions-and-operators#section-res-w0o-tyn)
    
-   [array\_intersect function](/help/en/sls/array-functions-and-operators#section-dow-rd7-j1s)
    
-   [array\_join function](/help/en/sls/array-functions-and-operators#section-y0i-i9z-xty)
    
-   [reverse function](/help/en/sls/array-functions-and-operators#section-i9q-wgg-jdp)
    

[Map mapping functions and operators](/help/en/sls/map-functions-and-operators)

Operate on key-value pairs.

-   [cardinality function](/help/en/sls/map-functions-and-operators#section-0nm-iy2-da2)
    
-   [element\_at function](/help/en/sls/map-functions-and-operators#section-vfk-elr-juy)
    
-   [histogram function](/help/en/sls/map-functions-and-operators#section-1xz-lm7-hp1)
    
-   [histogram\_u function](/help/en/sls/map-functions-and-operators#section-dif-xc9-s5s)
    
-   [map function](/help/en/sls/map-functions-and-operators#section-ts6-0ub-rlt)
    

[Mathematical calculation functions](/help/en/sls/mathematical-calculation-functions)

Numerical calculations, rounding, random numbers, trigonometric functions, and more.

-   [abs function](/help/en/sls/mathematical-calculation-functions#section-i8z-xqe-edx)
    
-   [ceil function](/help/en/sls/mathematical-calculation-functions#section-mrr-q32-znp)
    
-   [log function](/help/en/sls/mathematical-calculation-functions#section-kr0-4ia-sp4)
    
-   [mod function](/help/en/sls/mathematical-calculation-functions#section-yc3-or0-js0)
    
-   [random function](/help/en/sls/mathematical-calculation-functions#section-5uq-zst-swa)
    

[Mathematical statistics functions](/help/en/sls/mathematical-statistics-functions)

Data distribution analysis and numerical calculations.

-   [corr function](/help/en/sls/mathematical-statistics-functions#section-hvp-xo2-b3l)
    
-   [covar\_pop function](/help/en/sls/mathematical-statistics-functions#section-dvz-55i-e4p)
    
-   [regr\_intercept function](/help/en/sls/mathematical-statistics-functions#section-rnu-6w0-32w)
    
-   [beta\_cdf function](/help/en/sls/mathematical-statistics-functions#section-5bg-1or-fsx)
    
-   [inverse\_chi\_squared\_cdf function](/help/en/sls/mathematical-statistics-functions#section-a5u-c0u-c17)
    

[Type conversion functions](/help/en/sls/data-type-conversion-functions)

Handle conversions between data types.

-   [cast function](/help/en/sls/data-type-conversion-functions#section-w7c-n7h-7k0)
    
-   [try\_cast function](/help/en/sls/data-type-conversion-functions#section-3o5-9kg-9hc)
    
-   [typeof function](/help/en/sls/data-type-conversion-functions#section-jng-3t0-izs)
    

[Window functions](/help/en/sls/window-functions)

Aggregation or sorting based on data windows.

-   [Aggregate functions](/help/en/sls/window-functions#section-42t-cj8-nio)
    
-   [dense\_rank function](/help/en/sls/window-functions#section-2sg-x7c-k6i)
    
-   [lag function](/help/en/sls/window-functions#section-ugb-0vt-tdz)
    

[IP functions](/help/en/sls/ip-functions)

Parse and calculate IP addresses.

-   [ip\_to\_city function](/help/en/sls/ip-functions#section-05n-xcd-8eb)
    
-   [ip\_prefix function](/help/en/sls/ip-functions#section-9wy-gmk-tia)
    
-   [ipv6\_to\_city function](/help/en/sls/ip-functions#section-14r-fdt-q25)
    

[URL functions](/help/en/sls/url-functions)

Parse URL structures.

-   [url\_encode function](/help/en/sls/url-functions#section-ygm-6yz-yuh)
    
-   [url\_decode function](/help/en/sls/url-functions#section-57j-2ij-dq0)
    
-   [url\_extract\_fragment function](/help/en/sls/url-functions#section-7ks-rmc-4ba)
    
-   [url\_extract\_path function](/help/en/sls/url-functions#section-exf-2fp-47y)
    
-   [url\_extract\_query function](/help/en/sls/url-functions#section-zsb-1xh-9kd)
    

[Estimation functions](/help/en/sls/approximate-functions)

Predict data or fill in missing values.

-   [approx\_distinct function](/help/en/sls/approximate-functions#section-7e3-oue-n8d)
    
-   [approx\_percentile function](/help/en/sls/approximate-functions#section-408-f86-n42)
    
-   [numeric\_histogram function](/help/en/sls/approximate-functions#section-0jv-o9t-uqn)
    
-   [numeric\_histogram\_u function](/help/en/sls/approximate-functions#section-wkn-k1v-ejt)
    

[Binary functions](/help/en/sls/binary-functions)

Process binary data types.

-   [from\_base64 function](/help/en/sls/binary-functions#section-9og-jyd-ps0)
    
-   [from\_big\_endian\_64 function](/help/en/sls/binary-functions#section-oxn-3kn-a8b)
    
-   [from\_hex function](/help/en/sls/binary-functions#section-a4v-mgy-ywe)
    
-   [to\_hex function](/help/en/sls/binary-functions#section-xg5-lhn-jpi)
    
-   [sha256 function](/help/en/sls/binary-functions#section-5fp-yu1-g0b)
    

[Bitwise operation functions](/help/en/sls/bitwise-functions)

Directly operate on binary bits.

-   [bit\_count function](/help/en/sls/bitwise-functions#section-aib-2nh-wyg)
    
-   [bitwise\_and function](/help/en/sls/bitwise-functions#section-s2v-apf-tdu)
    
-   [bitwise\_not function](/help/en/sls/bitwise-functions#section-nwe-g6f-mk2)
    
-   [bitwise\_or function](/help/en/sls/bitwise-functions#section-oxc-w47-xz8)
    
-   [bitwise\_xor function](/help/en/sls/bitwise-functions#section-9bf-ttf-aey)
    

[Spatial geometry functions](/help/en/sls/geospatial-functions)

Process spatial geometries.

-   [ST\_AsText function](/help/en/sls/geospatial-functions#section-uf9-ooi-du2)
    
-   [ST\_GeometryFromText function](/help/en/sls/geospatial-functions#section-48m-m4j-06b)
    
-   [ST\_Boundary function](/help/en/sls/geospatial-functions#section-bot-4rj-c7w)
    
-   [ST\_Buffer function](/help/en/sls/geospatial-functions#section-f6n-liv-3xh)
    
-   [ST\_Contains function](/help/en/sls/geospatial-functions#section-bwh-0yi-d6k)
    

[Geographic functions](/help/en/sls/geo-functions)

Geographic location analysis and map calculations.

-   [geohash function](/help/en/sls/geo-functions#section-v65-fai-y9f)
    

[Color functions](/help/en/sls/color-functions)

Color representation and conversion.

-   [bar function](/help/en/sls/color-functions#section-wfn-p5x-yfk)
    
-   [color function](/help/en/sls/color-functions#section-x72-svx-d1s)
    
-   [render function](/help/en/sls/color-functions#section-4tb-hmv-kom)
    
-   [rgb function](/help/en/sls/color-functions#section-5yb-uhm-wer)
    

[HyperLogLog functions](/help/en/sls/hyperloglog-functions)

Perform statistical processing on large datasets, sacrificing accuracy to save memory.

-   [approx\_set function](/help/en/sls/hyperloglog-functions#section-1v0-ncu-00b)
    
-   [cardinality function](/help/en/sls/hyperloglog-functions#section-db0-lqn-1rb)
    
-   [empty\_approx\_set function](/help/en/sls/hyperloglog-functions#section-bzw-cc3-42e)
    
-   [merge function](/help/en/sls/hyperloglog-functions#section-ot3-qji-4d0)
    

[Comparison operators](/help/en/sls/comparison-operators)

Determine the size relationship of parameters, applicable to any comparable data type (double, bigint, varchar, timestamp, and date).

-   [Basic operators](/help/en/sls/comparison-operators#section-vog-htc-ev2)
    
-   [ALL operator](/help/en/sls/comparison-operators#section-atq-sq4-ksq)
    
-   [ANY operator](/help/en/sls/comparison-operators#section-atq-sq4-ksq)
    
-   [BETWEEN operator](/help/en/sls/comparison-operators#section-rff-unu-zow)
    
-   [DISTINCT operator](/help/en/sls/comparison-operators#section-ejz-umu-isp)
    

[Logical operators](/help/en/sls/logical-operators)

Combine multiple Boolean conditions to control logical flow.

-   [AND operator](/help/en/sls/logical-operators#section-pw8-5ul-lcn)
    
-   [OR operator](/help/en/sls/logical-operators#section-cog-9xl-z3f)
    
-   [NOT operator](/help/en/sls/logical-operators#section-nes-1zb-hjv)
    

[Unit conversion functions](/help/en/sls/unit-conversion-functions)

Convert units of data size or time intervals.

-   [convert\_data\_size function](/help/en/sls/unit-conversion-functions#section-cks-tj3-d5x)
    
-   [format\_duration function](/help/en/sls/unit-conversion-functions#section-vvp-aaz-1nv)
    

[Window funnel functions](/help/en/sls/window-funnel-function)

Analyze user behavior, app traffic, product goal conversion, and other data.

-   [window\_funnel function](/help/en/sls/window-funnel-function#section-8mg-51s-lxf)
    

[Lambda expressions](/help/en/sls/lambda-expressions)

Define lambda expressions in SQL analytic statements and SPL statements, and pass them to specified functions to enrich the expression of functions.

-   [filter function](/help/en/sls/array-functions-and-operators#section-oc8-co0-0ko)
    
-   [reduce function](/help/en/sls/array-functions-and-operators#section-2sp-yn9-lqj)
    
-   [transform function](/help/en/sls/array-functions-and-operators#section-898-i2g-vgz)
    

[Conditional expressions](/help/en/sls/conditional-expressions)

Return different values based on conditional branches.

-   [CASE WHEN expression](/help/en/sls/conditional-expressions#section-zxs-v4x-zdb)
    
-   [IF expression](/help/en/sls/conditional-expressions#section-upz-kpq-tdb)
    
-   [COALESCE expression](/help/en/sls/conditional-expressions#section-pzt-mpq-tdb)
    
-   [NULLIF expression](/help/en/sls/conditional-expressions#section-xcy-npq-tdb)
    
-   [TRY expression](/help/en/sls/conditional-expressions#section-ylv-4pq-tdb)
