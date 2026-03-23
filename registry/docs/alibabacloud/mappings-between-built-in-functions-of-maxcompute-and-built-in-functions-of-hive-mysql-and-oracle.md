This topic describes the mappings between the built-in functions of MaxCompute and the built-in functions of Hive, MySQL, and Oracle. This way, you can find the built-in functions of MaxCompute that match specific built-in functions of Hive, MySQL, and Oracle.

## Date functions

   

MaxCompute

Hive

MySQL

Oracle

[DATEADD](/help/en/maxcompute/user-guide/date-functions/#section-qjz-lrl-vdb)

N/A

N/A

N/A

[DATE\_ADD](/help/en/maxcompute/user-guide/date-functions/#section-aza-roh-gfl)

DATE\_ADD

DATE\_ADD

N/A

[DATE\_SUB](/help/en/maxcompute/user-guide/date-functions/#section-02m-xan-u6n)

DATE\_SUB

DATE\_SUB

N/A

[DATEDIFF](/help/en/maxcompute/user-guide/date-functions/#section-xl2-nsl-vdb)

DATEDIFF

DATEDIFF

MONTHS\_BETWEEN

[DATEPART](/help/en/maxcompute/user-guide/date-functions/#section-am4-xtl-vdb)

N/A

DATE\_FORMAT

EXTRACT (DATETIME)

[DATETRUNC](/help/en/maxcompute/user-guide/date-functions/#section-zbr-d5l-vdb)

TRUNC

DATE\_FORMAT

EXTRACT (DATETIME)

[FROM\_UNIXTIME](/help/en/maxcompute/user-guide/date-functions/#section-c38-7d4-35t)

FROM\_UNIXTIME

FROM\_UNIXTIME

N/A

[GETDATE](/help/en/maxcompute/user-guide/date-functions/#section-o4p-45l-vdb)

CURRENT\_DATE

NOW

CURRENT\_DATE

[ISDATE](/help/en/maxcompute/user-guide/date-functions/#section-rzl-s5l-vdb)

N/A

STR\_TO\_DATE (The return value FALSE indicates that a string cannot be converted into a date value.)

N/A

[LASTDAY](/help/en/maxcompute/user-guide/date-functions/#section-vhk-w2m-vdb)

LAST\_DAY

LAST\_DAY

LAST\_DAY

[TO\_DATE](/help/en/maxcompute/user-guide/date-functions/#section-b3z-1fm-vdb)

TO\_DATE

STR\_TO\_DATE

DATE

[TO\_CHAR](/help/en/maxcompute/user-guide/date-functions/#section-a2d-rfm-vdb)

N/A

DATE\_FORMAT

TO\_CHAR (DATETIME)

[UNIX\_TIMESTAMP](/help/en/maxcompute/user-guide/date-functions/#section-k4r-zfm-vdb)

UNIX\_TIMESTAMP

UNIX\_TIMESTAMP

N/A

[WEEKDAY](/help/en/maxcompute/user-guide/date-functions/#section-g41-2gm-vdb)

N/A

WEEKDAY

N/A

[WEEKOFYEAR](/help/en/maxcompute/user-guide/date-functions/#section-rjv-hgm-vdb)

WEEKOFYEAR

WEEKOFYEAR

N/A

[ADD\_MONTHS](/help/en/maxcompute/user-guide/date-functions/#section-pyo-gp3-4mg)

ADD\_MONTHS

ADDDATE

ADD\_MONTHS

[CURRENT\_TIMESTAMP](/help/en/maxcompute/user-guide/date-functions/#section-pwp-sqq-myk)

CURRENT\_TIMESTAMP

CURRENT\_TIMESTAMP

CURRENT\_TIMESTAMP

[DAY](/help/en/maxcompute/user-guide/date-functions/#section-y8i-7ej-x66)

DAY

DAY

DAY

[DAYOFMONTH](/help/en/maxcompute/user-guide/date-functions/#section-11g-r40-z1a)

DAYOFMONTH

DAYOFMONTH

N/A

[EXTRACT](/help/en/maxcompute/user-guide/date-functions/#section-7os-6iu-7ue)

EXTRACT

EXTRACT

EXTRACT

[FROM\_UTC\_TIMESTAMP](/help/en/maxcompute/user-guide/date-functions/#section-f7q-8tj-y6p)

FROM\_UTC\_TIMESTAMP

N/A

N/A

[HOUR](/help/en/maxcompute/user-guide/date-functions/#section-0y6-hah-5s3)

HOUR

HOUR

HOUR

[LAST\_DAY](/help/en/maxcompute/user-guide/date-functions/#section-o8k-xhn-4e3)

LAST\_DAY

LAST\_DAY

N/A

[MINUTE](/help/en/maxcompute/user-guide/date-functions/#section-o49-uhr-tr3)

MINUTE

MINUTE

MINUTE

[MONTH](/help/en/maxcompute/user-guide/date-functions/#section-opy-lzo-onw)

MONTH

MONTH

MONTH

[MONTHS\_BETWEEN](/help/en/maxcompute/user-guide/date-functions/#section-s2l-btt-mal)

MONTHS\_BETWEEN

TIMESTAMPDIFF

MONTHS\_BETWEEN

[NEXT\_DAY](/help/en/maxcompute/user-guide/date-functions/#section-6pi-f0n-a4f)

NEXT\_DAY

N/A

NEXT\_DAY

[QUARTER](/help/en/maxcompute/user-guide/date-functions/#section-okg-rxb-b5l)

QUARTER

QUARTER

QUARTER

[SECOND](/help/en/maxcompute/user-guide/date-functions/#section-yxp-zv1-tzb)

SECOND

SECOND

N/A

[TO\_MILLIS](/help/en/maxcompute/user-guide/date-functions/#section-i9e-7ww-z54)

N/A

N/A

N/A

[YEAR](/help/en/maxcompute/user-guide/date-functions/#section-gb4-g3m-vdb)

YEAR

YEAR

N/A

**Note** The MaxCompute mode is enabled by default. To use the Hive-compatible mode, run one of the following commands:

```
-- Switch to the Hive-compatible mode at the project level. 
setproject odps.sql.hive.compatible=True;
-- Switch to the Hive-compatible mode at the session level. 
set odps.sql.hive.compatible=True;
```

## Mathematical functions

   

MaxCompute

Hive

MySQL

Oracle

[ABS](/help/en/maxcompute/user-guide/mathematical-functions/#section-i1v-5lm-vdb)

ABS

ABS

ABS

[ACOS](/help/en/maxcompute/user-guide/mathematical-functions/#section-cfp-qmm-vdb)

ACOS

ACOS

ACOS

[ASIN](/help/en/maxcompute/user-guide/mathematical-functions/#section-fau-d9e-7p5)

ASIN

ASIN

ASIN

[ATAN](/help/en/maxcompute/user-guide/mathematical-functions/#section-odw-jnm-vdb)

ATAN

ATAN

ATAN

[CEIL](/help/en/maxcompute/user-guide/mathematical-functions/#section-ugm-k4m-vdb)

CEIL

CEIL

CEIL

[CONV](/help/en/maxcompute/user-guide/mathematical-functions/#section-tkx-q4m-vdb)

CONV

CONV

N/A

[COS](/help/en/maxcompute/user-guide/mathematical-functions/#section-tpy-z4m-vdb)

COS

COS

COS

[COSH](/help/en/maxcompute/user-guide/mathematical-functions/#section-tnp-gpm-vdb)

COSH

N/A

COSH

[COT](/help/en/maxcompute/user-guide/mathematical-functions/#section-hhz-lpm-vdb)

COT

COT

COT

[EXP](/help/en/maxcompute/user-guide/mathematical-functions/#section-q1n-rpm-vdb)

EXP

EXP

EXP

[FLOOR](/help/en/maxcompute/user-guide/mathematical-functions/#section-yrw-wpm-vdb)

FLOOR

FLOOR

FLOOR

[LN](/help/en/maxcompute/user-guide/mathematical-functions/#section-pdm-fqm-vdb)

LN

LN

LN

[LOG](/help/en/maxcompute/user-guide/mathematical-functions/#section-iwc-4qm-vdb)

LOG

LOG

LOG

[POW](/help/en/maxcompute/user-guide/mathematical-functions/#section-gmv-wqm-vdb)

POW

POW

POWER

[RAND](/help/en/maxcompute/user-guide/mathematical-functions/#section-qlv-2rm-vdb)

RAND

RAND

N/A

[ROUND](/help/en/maxcompute/user-guide/mathematical-functions/#section-ocf-jrm-vdb)

ROUND

ROUND

ROUND

[SIN](/help/en/maxcompute/user-guide/mathematical-functions/#section-tky-gvm-vdb)

SIN

SIN

SIN

[SINH](/help/en/maxcompute/user-guide/mathematical-functions/#section-ccf-gym-vdb)

SINH

N/A

SINH

[SQRT](/help/en/maxcompute/user-guide/mathematical-functions/#section-nns-lym-vdb)

SQRT

SQRT

SQRT

[TAN](/help/en/maxcompute/user-guide/mathematical-functions/#section-ibd-rym-vdb)

TAN

TAN

TAN

[TANH](/help/en/maxcompute/user-guide/mathematical-functions/#section-pfh-wym-vdb)

TANH

N/A

TANH

[TRUNC](/help/en/maxcompute/user-guide/mathematical-functions/#section-yly-1zm-vdb)

TRUNC

TRUNCATE

TRUNC

[BIN](/help/en/maxcompute/user-guide/mathematical-functions/#section-two-s20-2sa)

BIN

BIN

BITAND

[CBRT](/help/en/maxcompute/user-guide/mathematical-functions/#section-h19-2d4-2us)

CBRT

N/A

N/A

[CORR](/help/en/maxcompute/user-guide/mathematical-functions/#section-fvu-d56-xf2)

CORR

CORR

CORR

[DEGREES](/help/en/maxcompute/user-guide/mathematical-functions/#section-42j-2cu-qig)

DEGREES

DEGREES

DEGREES

[E](/help/en/maxcompute/user-guide/mathematical-functions/#section-2yd-sed-m22)

E

N/A

N/A

[FACTORIAL](/help/en/maxcompute/user-guide/mathematical-functions/#section-wri-hoq-ld9)

FACTORIAL

N/A

N/A

[FORMAT\_NUMBER](/help/en/maxcompute/user-guide/mathematical-functions/#section-i5w-ohk-2sp)

FORMAT\_NUMBER

FORMAT

N/A

[HEX](/help/en/maxcompute/user-guide/mathematical-functions/#section-xbh-3di-611)

HEX

HEX

RAWTOHEX

[LOG2](/help/en/maxcompute/user-guide/mathematical-functions/#section-dh3-tzm-vdb)

LOG2

LOG2

LOG

[LOG10](/help/en/maxcompute/user-guide/mathematical-functions/#section-bjc-zzm-vdb)

LOG10

LOG10

LOG

[PI](/help/en/maxcompute/user-guide/mathematical-functions/#section-amf-eus-u0v)

PI

PI

PI

[RADIANS](/help/en/maxcompute/user-guide/mathematical-functions/#section-uw5-75c-nvn)

RADIANS

RADIANS

RADIANS

[SIGN](/help/en/maxcompute/user-guide/mathematical-functions/#section-gq5-lbn-vdb)

SIGN

SIGN

SIGN

[SHIFTLEFT](/help/en/maxcompute/user-guide/mathematical-functions/#section-k4z-pcn-vdb)

SHIFTLEFT

<<

N/A

[SHIFTRIGHT](/help/en/maxcompute/user-guide/mathematical-functions/#section-iyl-vcn-vdb)

SHIFTRIGHT

\>>

N/A

[SHIFTRIGHTUNSIGNED](/help/en/maxcompute/user-guide/mathematical-functions/#section-h2f-1dn-vdb)

SHIFTRIGHTUNSIGNED

\>>>

N/A

[UNHEX](/help/en/maxcompute/user-guide/mathematical-functions/#section-4n3-yv8-1ab)

UNHEX

UNHEX

HEXTORAW

[WIDTH\_BUCKET](/help/en/maxcompute/user-guide/mathematical-functions/#section-pn8-ilh-3ll)

WIDTH\_BUCKET

N/A

WIDTH\_BUCKET

**Note** The MaxCompute mode is enabled by default. To use the Hive-compatible mode, run one of the following commands:

```
-- Switch to the Hive-compatible mode at the project level. 
setproject odps.sql.hive.compatible=True;
-- Switch to the Hive-compatible mode at the session level. 
set odps.sql.hive.compatible=True;
```

## Window functions

   

MaxCompute

Hive

MySQL

Oracle

[COUNT](/help/en/maxcompute/user-guide/window-functions-1/#section-q11-32n-vdb)

COUNT

COUNT

COUNT

[AVG](/help/en/maxcompute/user-guide/window-functions-1/#section-p53-fwz-vdb)

AVG

AVG

AVG

[MAX](/help/en/maxcompute/user-guide/window-functions-1/#section-qkf-ywz-vdb)

MAX

MAX

MAX

[MIN](/help/en/maxcompute/user-guide/window-functions-1/#section-mvt-3xz-vdb)

MIN

MIN

MIN

[MEDIAN](/help/en/maxcompute/user-guide/window-functions-1/#section-ebx-txz-vdb)

N/A

N/A

MEDIAN

[STDDEV](/help/en/maxcompute/user-guide/window-functions-1/#section-e5h-3yz-vdb)

N/A

STDDEV

STDDEV

[STDDEV\_SAMP](/help/en/maxcompute/user-guide/window-functions-1/#section-skf-2zz-vdb)

N/A

STDDEV\_SAMP

STDDEV\_SAMP

[SUM](/help/en/maxcompute/user-guide/window-functions-1/#section-ggy-vzz-vdb)

SUM

SUM

SUM

[DENSE\_RANK](/help/en/maxcompute/user-guide/window-functions-1/#section-mj4-k11-wdb)

DENSE\_RANK

DENSE\_RANK

DENSE\_RANK

[RANK](/help/en/maxcompute/user-guide/window-functions-1/#section-yvx-jb1-wdb)

RANK

RANK

RANK

[LAG](/help/en/maxcompute/user-guide/window-functions-1/#section-dbf-xb1-wdb)

LAG

LAG

LAG

[LEAD](/help/en/maxcompute/user-guide/window-functions-1/#section-s5f-jc1-wdb)

LEAD

LEAD

LEAD

[PERCENT\_RANK](/help/en/maxcompute/user-guide/window-functions-1/#section-lmk-tc1-wdb)

PERCENT\_RANK

PERCENT\_RANK

PERCENT\_RANK

[ROW\_NUMBER](/help/en/maxcompute/user-guide/window-functions-1/#section-cm1-cd1-wdb)

ROW\_NUMBER

ROW\_NUMBER

ROW\_NUMBER

[CLUSTER\_SAMPLE](/help/en/maxcompute/user-guide/window-functions-1/#section-mst-md1-wdb)

N/A

N/A

N/A

[CUME\_DIST](/help/en/maxcompute/user-guide/window-functions-1/#section-bkf-1xv-rfb)

CUME\_DIST

CUME\_DIST

CUME\_DIST

[NTILE](/help/en/maxcompute/user-guide/window-functions-1/#section-gjj-c21-wdb)

NTILE

NTILE

NTILE

## Aggregate functions

   

MaxCompute

Hive

MySQL

Oracle

[AVG](/help/en/maxcompute/user-guide/aggregate-functions/#section-o4c-4j6-uct)

AVG

AVG

AVG

[COUNT](/help/en/maxcompute/user-guide/aggregate-functions/#section-x1k-xq1-wdb)

COUNT

COUNT

COUNT

[COUNT\_IF](/help/en/maxcompute/user-guide/aggregate-functions/#section-lgm-gjq-07p)

N/A

N/A

N/A

[MAX](/help/en/maxcompute/user-guide/aggregate-functions/#section-rys-tr1-wdb)

MAX

MAX

MAX

[MIN](/help/en/maxcompute/user-guide/aggregate-functions/#section-mll-yr1-wdb)

MIN

MIN

MIN

[MEDIAN](/help/en/maxcompute/user-guide/aggregate-functions/#section-m5y-cs1-wdb)

N/A

N/A

MEDIAN

[STDDEV](/help/en/maxcompute/user-guide/aggregate-functions/#section-gg5-dv1-wdb)

STDDEV

STDDEV

STDDEV

[STDDEV\_SAMP](/help/en/maxcompute/user-guide/aggregate-functions/#section-sgk-jv1-wdb)

STDDEV\_SAMP

STDDEV\_SAMP

STDDEV\_SAMP

[SUM](/help/en/maxcompute/user-guide/aggregate-functions/#section-okf-4v1-wdb)

SUM

SUM

SUM

[WM\_CONCAT](/help/en/maxcompute/user-guide/aggregate-functions/#section-ddm-tv1-wdb)

N/A

GROUP\_CONCAT

WM\_CONCAT

[ANY\_VALUE](/help/en/maxcompute/user-guide/aggregate-functions/#section-gq4-i9o-wlo)

N/A

N/A

N/A

[APPROX\_DISTINCT](/help/en/maxcompute/user-guide/aggregate-functions/#section-8re-ac2-nuw)

N/A

N/A

N/A

[ARG\_MAX](/help/en/maxcompute/user-guide/aggregate-functions/#section-70u-fei-oad)

N/A

N/A

N/A

[ARG\_MIN](/help/en/maxcompute/user-guide/aggregate-functions/#section-d1y-y37-885)

N/A

N/A

N/A

[COLLECT\_LIST](/help/en/maxcompute/user-guide/aggregate-functions/#section-fth-1w1-wdb)

COLLECT LIST

N/A

COLLECT

[COLLECT\_SET](/help/en/maxcompute/user-guide/aggregate-functions/#section-skl-fw1-wdb)

COLLECT SET

N/A

COLLECT

[COVAR\_POP](/help/en/maxcompute/user-guide/aggregate-functions/#section-sal-3e0-zpf)

COVAR\_POP

N/A

COVAR\_POP

[COVAR\_SAMP](/help/en/maxcompute/user-guide/aggregate-functions/#section-7cp-io7-oy4)

COVAR\_SAMP

N/A

COVAR\_SAMP

[NUMERIC\_HISTOGRAM](/help/en/maxcompute/user-guide/aggregate-functions/#section-ywu-uag-f4d)

NUMERIC\_HISTOGRAM

N/A

N/A

[PERCENTILE](/help/en/maxcompute/user-guide/aggregate-functions/#section-zbp-2r7-qxf)

PERCENTILE

N/A

N/A

[PERCENTILE\_APPROX](/help/en/maxcompute/user-guide/aggregate-functions/#section-do0-b0t-s3q)

PERCENTILE\_APPROX

N/A

N/A

[VARIANCE/VAR\_POP](/help/en/maxcompute/user-guide/aggregate-functions/#section-emm-lw1-wdb)

VARIANCE/VAR\_POP

VAR\_POP

VARIANCE/VAR\_POP

[VAR\_SAMP](/help/en/maxcompute/user-guide/aggregate-functions/#section-dt5-tw1-wdb)

VAR\_SAMP

VAR\_SAMP

VAR\_SAMP

**Note** The MaxCompute mode is enabled by default. To use the Hive-compatible mode, run one of the following commands:

```
-- Switch to the Hive-compatible mode at the project level. 
setproject odps.sql.hive.compatible=True;
-- Switch to the Hive-compatible mode at the session level. 
set odps.sql.hive.compatible=True;
```

## String functions

   

MaxCompute

Hive

MySQL

Oracle

[ASCII](/help/en/maxcompute/user-guide/string-functions/#section-i8s-84b-fux)

ASCII

ASCII

ASCII

[CHAR\_MATCHCOUNT](/help/en/maxcompute/user-guide/string-functions/#section-mnd-gvz-vdb)

N/A

N/A

N/A

[CHR](/help/en/maxcompute/user-guide/string-functions/#section-s5r-lwz-vdb)

CHR

CHAR

CHR

[CONCAT](/help/en/maxcompute/user-guide/string-functions/#section-3u6-raw-wjm)

CONCAT

CONCAT

CONCAT

[ENCODE](/help/en/maxcompute/user-guide/string-functions/#section-1lr-sd9-05c)

ENCODE

N/A

N/A

[FIND\_IN\_SET](/help/en/maxcompute/user-guide/string-functions/#section-lb5-wjy-vtt)

FIND\_IN\_SET

FIND\_IN\_SET

N/A

[FORMAT\_NUMBER](/help/en/maxcompute/user-guide/string-functions/#section-hia-g4n-z7l)

FORMAT\_NUMBER

FORMAT

N/A

[FROM\_JSON](/help/en/maxcompute/user-guide/string-functions/#section-143-hgq-bc6)

N/A

N/A

N/A

[GET\_JSON\_OBJECT](/help/en/maxcompute/user-guide/string-functions/#section-mqf-tp0-h7s)

GET\_JSON\_OBJECT

JSON\_EXTRACT

N/A

[INSTR](/help/en/maxcompute/user-guide/string-functions/#section-vft-yxz-vdb)

INSTR

INSTR

INSTR

[IS\_ENCODING](/help/en/maxcompute/user-guide/string-functions/#section-qdj-kyz-vdb)

N/A

N/A

N/A

[KEYVALUE](/help/en/maxcompute/user-guide/string-functions/#section-lnq-tyz-vdb)

N/A

N/A

N/A

[LENGTH](/help/en/maxcompute/user-guide/string-functions/#section-ewt-jzz-vdb)

LENGTH

LENGTH

LENGTH

[LENGTHB](/help/en/maxcompute/user-guide/string-functions/#section-o3y-pzz-vdb)

LENGTHB

LENGTHB

LENGTHB

[LOCATE](/help/en/maxcompute/user-guide/string-functions/#section-8r9-nzm-7ry)

LOCATE

LOCATE

N/A

[LTRIM](/help/en/maxcompute/user-guide/string-functions/#section-ete-j9a-onl)

LTRIM

LTRIM

LTRIM

[MD5](/help/en/maxcompute/user-guide/string-functions/#section-hbw-xzz-vdb)

MD5

MD5

N/A

[PARSE\_URL](/help/en/maxcompute/user-guide/string-functions/#section-x6p-fbt-3ep)

PARSE\_URL

N/A

N/A

[PARSE\_URL\_TUPLE](/help/en/maxcompute/user-guide/string-functions/#section-y37-hco-z7r)

PARSE\_URL\_TUPLE

N/A

N/A

[REGEXP\_COUNT](/help/en/maxcompute/user-guide/string-functions/#section-ctz-0l2-qyd)

N/A

N/A

REGEXP\_COUNT

[REGEXP\_EXTRACT](/help/en/maxcompute/user-guide/string-functions/#section-ms1-lc1-wdb)

REGEXP\_EXTRACT

N/A

N/A

[REGEXP\_INSTR](/help/en/maxcompute/user-guide/string-functions/#section-jpn-5c1-wdb)

N/A

REGEXP\_INSTR

REGEXP\_INSTR

[REGEXP\_REPLACE](/help/en/maxcompute/user-guide/string-functions/#section-k2w-2d1-wdb)

REGEXP\_REPLACE

REGEXP\_REPLACE

REGEXP\_REPLACE

[REGEXP\_SUBSTR](/help/en/maxcompute/user-guide/string-functions/#section-k5b-qd1-wdb)

N/A

REGEXP\_SUBSTR

REGEXP\_SUBSTR

[REPEAT](/help/en/maxcompute/user-guide/string-functions/#section-dyt-hgm-1z7)

REPEAT

REPEAT

REPEAT

[REVERSE](/help/en/maxcompute/user-guide/string-functions/#section-9yy-9kb-94l)

REVERSE

REVERSE

REVERSE

[RTRIM](/help/en/maxcompute/user-guide/string-functions/#section-imh-j3t-whc)

RTRIM

RTRIM

RTRIM

[SPACE](/help/en/maxcompute/user-guide/string-functions/#section-899-dqw-ffv)

SPACE

SPACE

SPACE

[SPLIT\_PART](/help/en/maxcompute/user-guide/string-functions/#section-ecy-k21-wdb)

N/A

N/A

N/A

[SUBSTR](/help/en/maxcompute/user-guide/string-functions/#section-nkj-1f1-wdb)

SUBSTR

SUBSTR

SUBSTR

[SUBSTRING](/help/en/maxcompute/user-guide/string-functions/#section-s1h-3f1-wdb)

SUBSTRING

SUBSTRING

SUBSTR

[TO\_CHAR](/help/en/maxcompute/user-guide/string-functions/#section-mdh-lbk-ggy)

N/A

N/A

N/A

[TO\_JSON](/help/en/maxcompute/user-guide/string-functions/#section-iov-43s-99k)

N/A

N/A

N/A

[TOLOWER](/help/en/maxcompute/user-guide/string-functions/#section-nzz-lg1-wdb)

LOWER

LOWER

LOWER

[TOUPPER](/help/en/maxcompute/user-guide/string-functions/#section-qvg-sg1-wdb)

UPPER

UPPER

UPPER

[TRIM](/help/en/maxcompute/user-guide/string-functions/#section-mf1-3h1-wdb)

TRIM

TRIM

TRIM

[URL\_DECODE](/help/en/maxcompute/user-guide/string-functions/#section-hor-9cn-ovu)

N/A

N/A

N/A

[URL\_ENCODE](/help/en/maxcompute/user-guide/string-functions/#section-57t-23k-068)

N/A

N/A

PERCENTILE\_CONT

[CONCAT\_WS](/help/en/maxcompute/user-guide/string-functions/#section-xnf-sj1-wdb)

CONCAT\_WS

CONCAT\_WS

N/A

[JSON\_TUPLE](/help/en/maxcompute/user-guide/string-functions/#section-6ra-i4a-kyk)

JSON\_TUPLE

N/A

N/A

[LPAD](/help/en/maxcompute/user-guide/string-functions/#section-mcj-zj1-wdb)

LPAD

LPAD

LPAD

[RPAD](/help/en/maxcompute/user-guide/string-functions/#section-k1f-3k1-wdb)

RPAD

RPAD

RPAD

[REPLACE](/help/en/maxcompute/user-guide/string-functions/#section-ln3-5k1-wdb)

REPLACE

REPLACE

REPLACE

[SOUNDEX](/help/en/maxcompute/user-guide/string-functions/#section-z2z-1l1-wdb)

SOUNDEX

SOUNDEX

SOUNDEX

[SUBSTRING\_INDEX](/help/en/maxcompute/user-guide/string-functions/#section-uw3-hl1-wdb)

SUBSTRING\_INDEX

SUBSTRING\_INDEX

N/A

[TRANSLATE](/help/en/maxcompute/user-guide/string-functions/#section-bk1-nl1-wdb)

TRANSLATE

N/A

TRANSLATE

**Note** The MaxCompute mode is enabled by default. To use the Hive-compatible mode, run one of the following commands:

```
-- Switch to the Hive-compatible mode at the project level. 
setproject odps.sql.hive.compatible=True;
-- Switch to the Hive-compatible mode at the session level. 
set odps.sql.hive.compatible=True;
```

## Other functions

   

MaxCompute

Hive

MySQL

Oracle

[BASE64](/help/en/maxcompute/user-guide/other-functions/#section-fz3-uxp-zzf)

BASE64

TO\_BASE64

UTL\_ENCODE.BASE64\_ENCODE

[BETWEEN AND expression](/help/en/maxcompute/user-guide/other-functions/#section-j2t-01z-qaq)

BETWEEN AND

BETWEEN AND

BETWEEN AND

[CASE WHEN expression](/help/en/maxcompute/user-guide/other-functions/#section-jvg-uf1-mnr)

CASE WHEN

CASE WHEN

CASE WHEN

[CAST](/help/en/maxcompute/user-guide/other-functions/#section-bpc-dy1-wdb)

CAST

CAST

CAST

[COALESCE](/help/en/maxcompute/user-guide/other-functions/#section-dts-3y1-wdb)

COALESCE

COALESCE

COALESCE

[COMPRESS](/help/en/maxcompute/user-guide/other-functions/#section-ylm-jlf-0jp)

N/A

COMPRESS

UTL\_COMPRESS.LZ\_COMPRESS

[CRC32](/help/en/maxcompute/user-guide/other-functions/#section-yt2-qa5-pnq)

CRC32

CRC32

N/A

[DECODE](/help/en/maxcompute/user-guide/other-functions/#section-ygq-4y1-wdb)

DECODE

N/A

DECODE

[DECOMPRESS](/help/en/maxcompute/user-guide/other-functions/#section-buw-wn5-i1j)

N/A

UNCOMPRESS

UTL\_COMPRESS.LZ\_UNCOMPRESS

[GET\_IDCARD\_AGE](/help/en/maxcompute/user-guide/other-functions/#section-j2q-1z1-wdb)

N/A

N/A

N/A

[GET\_IDCARD\_BIRTHDAY](/help/en/maxcompute/user-guide/other-functions/#section-tfq-dz1-wdb)

N/A

N/A

N/A

[GET\_IDCARD\_SEX](/help/en/maxcompute/user-guide/other-functions/#section-akt-gz1-wdb)

N/A

N/A

N/A

[GET\_USER\_ID](/help/en/maxcompute/user-guide/other-functions/#section-2zc-j25-j1e)

CURRENT\_USER

CURRENT\_USER

UID

[GREATEST](/help/en/maxcompute/user-guide/other-functions/#section-n1g-kz1-wdb)

GREATEST

GREATEST

N/A

[HASH](/help/en/maxcompute/user-guide/other-functions/#section-ff9-6g0-lqc)

HASH

N/A

ORA\_HASH

[IF](/help/en/maxcompute/user-guide/other-functions/#section-7fo-xfg-nhg)

IF

IF

IF

[LEAST](/help/en/maxcompute/user-guide/other-functions/#section-hlz-grk-bb9)

LEAST

LEAST

LEAST

[MAX\_PT](/help/en/maxcompute/user-guide/other-functions/#section-16z-4vq-iys)

N/A

N/A

N/A

[NULLIF](/help/en/maxcompute/user-guide/other-functions/#section-cth-bm8-bip)

NULLIF

NULLIF

NULLIF

[NVL](/help/en/maxcompute/user-guide/other-functions/#section-oau-ajn-osy)

NVL

IFNULL

N/A

[ORDINAL](/help/en/maxcompute/user-guide/other-functions/#section-pcj-pz1-wdb)

N/A

N/A

N/A

[PARTITION\_EXISTS](/help/en/maxcompute/user-guide/other-functions/#section-gy2-h1b-kb1)

N/A

N/A

N/A

[SAMPLE](/help/en/maxcompute/user-guide/other-functions/#section-cm0-whl-xbc)

N/A

N/A

N/A

[SHA](/help/en/maxcompute/user-guide/other-functions/#section-6zq-k20-82q)

SHA

SHA

N/A

[SHA1](/help/en/maxcompute/user-guide/other-functions/#section-6so-1tl-okq)

SHA1

SHA1

N/A

[SHA2](/help/en/maxcompute/user-guide/other-functions/#section-15y-7je-tmo)

SHA2

SHA2

N/A

[SIGN](/help/en/maxcompute/user-guide/other-functions/#section-ehj-ian-ogk)

SIGN

SIGN

SIGN

[SPLIT](/help/en/maxcompute/user-guide/other-functions/#section-omq-nbb-wdb)

SPLIT

SPLIT

N/A

[STACK](/help/en/maxcompute/user-guide/other-functions/#section-85x-l33-h2m)

STACK

N/A

N/A

[STR\_TO\_MAP](/help/en/maxcompute/user-guide/other-functions/#section-p1z-xrj-dfb)

STR\_TO\_MAP

N/A

N/A

[TABLE\_EXISTS](/help/en/maxcompute/user-guide/other-functions/#section-ky9-3so-zof)

N/A

N/A

N/A

[TRANS\_ARRAY](/help/en/maxcompute/user-guide/other-functions/#section-y21-vnb-wdb)

N/A

N/A

N/A

[TRANS\_COLS](/help/en/maxcompute/user-guide/other-functions/#section-vxw-9dg-ypz)

N/A

N/A

N/A

[UNBASE64](/help/en/maxcompute/user-guide/other-functions/#section-ywn-zlz-ckc)

UNBASE64

FROM\_BASE64

UTL\_ENCODE.BASE64\_DECODE

[UNIQUE\_ID](/help/en/maxcompute/user-guide/other-functions/#section-x4q-g5f-rav)

N/A

N/A

N/A

[UUID](/help/en/maxcompute/user-guide/other-functions/#section-9c2-6h7-cbg)

N/A

UUID

UID

**Note** The MaxCompute mode is enabled by default. To use the Hive-compatible mode, run one of the following commands:

```
-- Switch to the Hive-compatible mode at the project level. 
setproject odps.sql.hive.compatible=True;
-- Switch to the Hive-compatible mode at the session level. 
set odps.sql.hive.compatible=True;
```

## Complex type functions

    

Function type

MaxCompute

Hive

MySQL

Oracle

ARRAY

[ALL\_MATCH](/help/en/maxcompute/user-guide/complex-type-functions#section-qv9-71e-4gw)

N/A

N/A

N/A

[ANY\_MATCH](/help/en/maxcompute/user-guide/complex-type-functions#section-6xi-q8m-llc)

N/A

N/A

N/A

[ARRAY](/help/en/maxcompute/user-guide/complex-type-functions#section-zln-uwi-ar5)

ARRAY

N/A

N/A

[ARRAY\_CONTAINS](/help/en/maxcompute/user-guide/complex-type-functions#section-nul-93z-vzx)

ARRAY\_CONTAINS

N/A

N/A

[ARRAY\_DISTINCT](/help/en/maxcompute/user-guide/complex-type-functions#section-2aw-7ah-jqx)

N/A

N/A

N/A

[ARRAY\_EXCEPT](/help/en/maxcompute/user-guide/complex-type-functions#section-e0m-o6l-r0k)

N/A

N/A

N/A

[ARRAY\_INTERSECT](/help/en/maxcompute/user-guide/complex-type-functions#section-ac3-qy7-702)

N/A

N/A

N/A

[ARRAY\_JOIN](/help/en/maxcompute/user-guide/complex-type-functions#section-pc4-90e-0rl)

N/A

N/A

N/A

[ARRAY\_MAX](/help/en/maxcompute/user-guide/complex-type-functions#section-v0b-tse-4qr)

N/A

N/A

N/A

[ARRAY\_MIN](/help/en/maxcompute/user-guide/complex-type-functions#section-lvi-hpj-dth)

N/A

N/A

N/A

[ARRAY\_POSITION](/help/en/maxcompute/user-guide/complex-type-functions#section-l8p-gj6-p2t)

N/A

N/A

N/A

[ARRAY\_REMOVE](/help/en/maxcompute/user-guide/complex-type-functions#section-mlm-mla-j4k)

N/A

N/A

N/A

[ARRAY\_REDUCE](/help/en/maxcompute/user-guide/complex-type-functions#section-yzp-slx-wef)

N/A

N/A

N/A

[ARRAY\_REPEAT](/help/en/maxcompute/user-guide/complex-type-functions#section-vfr-5rb-q6x)

N/A

N/A

N/A

[ARRAY\_SORT](/help/en/maxcompute/user-guide/complex-type-functions#section-g67-jxi-rnk)

N/A

N/A

N/A

[ARRAY\_UNION](/help/en/maxcompute/user-guide/complex-type-functions#section-jb0-17b-27j)

N/A

N/A

N/A

[ARRAYS\_OVERLAP](/help/en/maxcompute/user-guide/complex-type-functions#section-5jo-vf6-4rk)

N/A

N/A

N/A

[ARRAYS\_ZIP](/help/en/maxcompute/user-guide/complex-type-functions#section-1ul-sbs-1wu)

N/A

N/A

N/A

[CONCAT](/help/en/maxcompute/user-guide/complex-type-functions#section-ioq-7gu-ywe)

CONCAT

N/A

N/A

[EXPLODE](/help/en/maxcompute/user-guide/complex-type-functions#section-7rk-9a6-0la)

EXPLODE

N/A

N/A

[FILTER](/help/en/maxcompute/user-guide/complex-type-functions#section-ehc-9gp-hpq)

N/A

N/A

N/A

[INDEX](/help/en/maxcompute/user-guide/complex-type-functions#section-t0k-akb-62x)

\[\] operator

N/A

N/A

[POSEXPLODE](/help/en/maxcompute/user-guide/complex-type-functions#section-2yc-ymd-p11)

POSEXPLODE

N/A

N/A

[SIZE](/help/en/maxcompute/user-guide/complex-type-functions#section-muq-ppd-2xl)

SIZE

N/A

N/A

[SLICE](/help/en/maxcompute/user-guide/complex-type-functions#section-uii-ken-off)

N/A

N/A

N/A

[SORT\_ARRAY](/help/en/maxcompute/user-guide/complex-type-functions#section-hjt-i1k-6qh)

SORT\_ARRAY

N/A

N/A

[TRANSFORM](/help/en/maxcompute/user-guide/complex-type-functions#section-ieh-8c6-6pv)

N/A

N/A

N/A

[ZIP\_WITH](/help/en/maxcompute/user-guide/complex-type-functions#section-3iq-jds-c09)

N/A

N/A

N/A

MAP

[EXPLODE](/help/en/maxcompute/user-guide/complex-type-functions#section-7rk-9a6-0la)

EXPLODE

N/A

N/A

[INDEX](/help/en/maxcompute/user-guide/complex-type-functions#section-t0k-akb-62x)

\[\] operator

N/A

N/A

[MAP](/help/en/maxcompute/user-guide/complex-type-functions#section-1uq-s39-4zh)

MAP

N/A

N/A

[MAP\_CONCAT](/help/en/maxcompute/user-guide/complex-type-functions#section-cyp-vio-ve0)

N/A

N/A

N/A

[MAP\_ENTRIES](/help/en/maxcompute/user-guide/complex-type-functions#section-gn1-mah-d8o)

N/A

N/A

N/A

[MAP\_FILTER](/help/en/maxcompute/user-guide/complex-type-functions#section-si5-t2f-qkn)

N/A

N/A

N/A

[MAP\_FROM\_ARRAYS](/help/en/maxcompute/user-guide/complex-type-functions#section-7ue-e91-m0s)

N/A

N/A

N/A

[MAP\_FROM\_ENTRIES](/help/en/maxcompute/user-guide/complex-type-functions#section-ao9-yc4-71a)

N/A

N/A

N/A

[MAP\_KEYS](/help/en/maxcompute/user-guide/complex-type-functions#section-oaa-81e-cjj)

MAP\_KEYS

N/A

N/A

[MAP\_VALUES](/help/en/maxcompute/user-guide/complex-type-functions#section-0dq-ltn-r7e)

MAP\_VALUES

N/A

N/A

[MAP\_ZIP\_WITH](/help/en/maxcompute/user-guide/complex-type-functions#section-oin-kzh-1ic)

N/A

N/A

N/A

[SIZE](/help/en/maxcompute/user-guide/complex-type-functions#section-muq-ppd-2xl)

SIZE

N/A

N/A

[TRANSFORM\_KEYS](/help/en/maxcompute/user-guide/complex-type-functions#section-dyt-zgf-3jf)

N/A

N/A

N/A

[TRANSFORM\_VALUES](/help/en/maxcompute/user-guide/complex-type-functions#section-pmk-9wz-mtt)

N/A

N/A

N/A

STRUCT

[FIELD](/help/en/maxcompute/user-guide/complex-type-functions#section-eip-iz6-vsy)

. operator

N/A

N/A

[INLINE](/help/en/maxcompute/user-guide/complex-type-functions#section-brn-bso-uyw)

INLINE

N/A

N/A

[STRUCT](/help/en/maxcompute/user-guide/complex-type-functions#section-5gq-p2j-h0f)

STRUCT

N/A

N/A

[NAMED\_STRUCT](/help/en/maxcompute/user-guide/complex-type-functions#section-y2r-o40-itj)

N/A

N/A

N/A

JSON

[FROM\_JSON](/help/en/maxcompute/user-guide/complex-type-functions#section-4at-wo3-wll)

N/A

N/A

N/A

[GET\_JSON\_OBJECT](/help/en/maxcompute/user-guide/complex-type-functions#section-un5-mvg-on2)

GET\_JSON\_OBJECT

JSON\_EXTRACT

N/A

[JSON\_TUPLE](/help/en/maxcompute/user-guide/complex-type-functions#section-5zh-fyi-nr0)

JSON\_TUPLE

N/A

N/A

[TO\_JSON](/help/en/maxcompute/user-guide/complex-type-functions#section-7nq-0gr-t4n)

N/A

N/A

N/A

**Note** The MaxCompute mode is enabled by default. To use the Hive-compatible mode, run one of the following commands:

```
-- Switch to the Hive-compatible mode at the project level. 
setproject odps.sql.hive.compatible=True;
-- Switch to the Hive-compatible mode at the session level. 
set odps.sql.hive.compatible=True;
```
