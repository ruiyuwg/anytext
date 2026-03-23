This topic describes the syntax and parameters of the date functions that are supported by MaxCompute. This topic also provides examples on how to use date functions. You can select an appropriate date function to perform date calculation or conversion based on your business requirements.

**Function**

**Description**

[ADD\_MONTHS](#section-pyo-gp3-4mg)

Returns a date value that is obtained after a number of months are added to a specified date.

[CURRENT\_TIMESTAMP](#section-pwp-sqq-myk)

Returns the current timestamp.

[CURRENT\_TIMEZONE](#section-hf8-qqh-1cc)

Returns the time zone of the current system.

[DATE\_ADD](#section-aza-roh-gfl)

Adds or subtracts a number of days to or from a date value based on the interval specified by delta. Only changes by day are supported. The DATE\_ADD function is the inverse of the `DATE_SUB` function.

[DATEADD](#section-qjz-lrl-vdb)

Changes a date value based on the time unit specified by datepart and the interval specified by delta. Changes by year, month, day, hour, minute, or second are supported.

[DATE\_FORMAT](#section-y7n-pzm-v0t)

Converts a date value into a string in a specified format.

[DATE\_SUB](#section-02m-xan-u6n)

Adds or subtracts a number of days to or from a date value based on the interval specified by delta. The DATE\_SUB function is the inverse of the `DATE_ADD` function.

[DATEDIFF](#section-xl2-nsl-vdb)

Calculates the difference between two date values based on the time unit specified by datepart.

[DATEPART](#section-am4-xtl-vdb)

Returns a specified component of a date value based on the time unit specified by datepart.

[DATETRUNC](#section-zbr-d5l-vdb)

Truncates a date value based on the time unit specified by datepart.

[DAY](#section-y8i-7ej-x66)

Returns the day in which a date value falls.

[DAYOFMONTH](#section-11g-r40-z1a)

Returns the day component of a date value.

[DAYOFWEEK](#section-gsm-zri-o2q)

Returns the day of the week in which a date value falls.

[DAYOFYEAR](#section-vqd-lpd-g4n)

Returns an integer that represents the sequential day of the year.

[EXTRACT](#section-7os-6iu-7ue)

Returns a specified component of a timestamp.

[FROM\_UNIXTIME](#section-c38-7d4-35t)

Converts a UNIX timestamp of the BIGINT type into a date value of the DATETIME type.

[FROM\_UTC\_TIMESTAMP](#section-f7q-8tj-y6p)

Converts a UTC timestamp into a timestamp for a specified time zone.

[GETDATE](#section-o4p-45l-vdb)

Returns the current system time as a date value.

[HOUR](#section-0y6-hah-5s3)

Returns the hour component of a date value.

[ISDATE](#section-rzl-s5l-vdb)

Determines whether a date string can be converted to a date value in a specified format.

[LAST\_DAY](#section-o8k-xhn-4e3)

Returns the last day of the month in which a date value falls.

[LASTDAY](#section-vhk-w2m-vdb)

Returns the last day of the month in which a date value falls.

[MINUTE](#section-o49-uhr-tr3)

Returns the minute component of a date value.

[MONTH](#section-opy-lzo-onw)

Returns the month in which a date value falls.

[MONTHS\_BETWEEN](#section-s2l-btt-mal)

Returns the number of months between specified date values.

[NEXT\_DAY](#section-6pi-f0n-a4f)

Returns the date of the first weekday that is later than a date value and matches the specified week.

[NOW](#255eac9009r6b)

Returns the current system date and time.

[QUARTER](#section-okg-rxb-b5l)

Returns the quarter in which a date value falls.

[SECOND](#section-yxp-zv1-tzb)

Returns the second component of a date value.

[TO\_CHAR](#section-a2d-rfm-vdb)

Converts a date value to a string in a specified format.

[TO\_DATE](#section-b3z-1fm-vdb)

Converts a string into a date value in a specified format.

[TO\_MILLIS](#section-i9e-7ww-z54)

Converts a date value into a UNIX timestamp that is accurate to the millisecond.

[TRUNC\_TIME](/help/en/maxcompute/user-guide/trunc-time)

Truncates date or time data according to the specified datepart time unit, and returns data of STRING type.

[UNIX\_TIMESTAMP](#section-k4r-zfm-vdb)

Converts a date value to a UNIX timestamp that is an integer.

[WEEKDAY](#section-g41-2gm-vdb)

Returns a number that represents the day of the week in which a date value falls.

[WEEKOFYEAR](#section-rjv-hgm-vdb)

Returns a number that represents the week of the year in which a date value falls.

[YEAR](#section-gb4-g3m-vdb)

Returns the year in which a date value falls.

## Usage notes

MaxCompute V2.0 provides additional functions. If the functions that you use involve new data types that are supported in the MaxCompute V2.0 data type edition, you must execute the SET statement to enable the MaxCompute V2.0 data type edition. The new data types include TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, and BINARY.

-   Session level: To use the MaxCompute V2.0 data type edition, you must add `set odps.sql.type.system.odps2=true;` before the SQL statement that you want to execute, and commit and execute them together.
    
-   Project level: The project owner can enable the MaxCompute V2.0 data type edition for the project based on the project requirements. The configuration takes effect after 10 to 15 minutes. To enable the MaxCompute V2.0 data type edition at the project level, run the following command:
    
    ```
    setproject odps.sql.type.system.odps2=true; 
    ```
    
    For more information about `setproject`, see [Project operations](/help/en/maxcompute/user-guide/project-operations#concept-qg3-s32-vdb). For more information about the precautions that you must take when you enable the MaxCompute V2.0 data type edition at the project level, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
    

## Sample data

This section provides sample source data for you to understand how to use date functions. In this topic, a table named mf\_date\_fun\_t is created and data is inserted into the table. Sample statements:

```
CREATE TABLE IF NOT EXISTS mf_date_fun_t(
    id      INT,
    date1   DATE,
    datetime1   DATETIME,
    timestamp1 TIMESTAMP,
    date2   DATE,
    datetime2   DATETIME,
    timestamp2 TIMESTAMP,
    date3 STRING,
    date4 BIGINT);
    
INSERT INTO mf_date_fun_t VALUES 
(1,DATE'2021-11-29',DATETIME'2021-11-29 00:01:00',TIMESTAMP'2021-01-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-20',123456780),
(2,DATE'2021-11-28',DATETIME'2021-11-28 00:02:00',TIMESTAMP'2021-02-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-21',123456781),
(3,DATE'2021-11-27',DATETIME'2021-11-27 00:03:00',TIMESTAMP'2021-03-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-22',123456782),
(4,DATE'2021-11-26',DATETIME'2021-11-26 00:04:00',TIMESTAMP'2021-04-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-23',123456783),
(5,DATE'2021-11-25',DATETIME'2021-11-25 00:05:00',TIMESTAMP'2021-05-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-24',123456784),
(6,DATE'2021-11-24',DATETIME'2021-11-24 00:06:00',TIMESTAMP'2021-06-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-25',123456785),
(7,DATE'2021-11-23',DATETIME'2021-11-23 00:07:00',TIMESTAMP'2021-07-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-26',123456786),
(8,DATE'2021-11-22',DATETIME'2021-11-22 00:08:00',TIMESTAMP'2021-08-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-27',123456787),
(9,DATE'2021-11-21',DATETIME'2021-11-21 00:09:00',TIMESTAMP'2021-09-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-28',123456788),
(10,DATE'2021-11-20',DATETIME'2021-11-20 00:10:00',TIMESTAMP'2021-10-11 00:00:00.123456789',DATE'2021-10-29',DATETIME'2021-10-29 00:00:00',TIMESTAMP'2021-10-11 00:00:00.123456789','2021-11-29',123456789);
```

Query data from the mf\_date\_fun\_t table. Sample statement:

```
SELECT * FROM mf_date_fun_t;
```

The following result is returned.

```
+------------+------------+---------------------+-------------------------+------------+---------------------+-------------------------+------------+------------+
| id         | date1      | datetime1           | timestamp1              | date2      | datetime2           | timestamp2              | date3      | date4      |
+------------+------------+---------------------+-------------------------+------------+---------------------+-------------------------+------------+------------+
| 1          | 2021-11-29 | 2021-11-29 00:01:00 | 2021-01-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-20 | 123456780  |
| 2          | 2021-11-28 | 2021-11-28 00:02:00 | 2021-02-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-21 | 123456781  |
| 3          | 2021-11-27 | 2021-11-27 00:03:00 | 2021-03-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-22 | 123456782  |
| 4          | 2021-11-26 | 2021-11-26 00:04:00 | 2021-04-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-23 | 123456783  |
| 5          | 2021-11-25 | 2021-11-25 00:05:00 | 2021-05-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-24 | 123456784  |
| 6          | 2021-11-24 | 2021-11-24 00:06:00 | 2021-06-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-25 | 123456785  |
| 7          | 2021-11-23 | 2021-11-23 00:07:00 | 2021-07-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-26 | 123456786  |
| 8          | 2021-11-22 | 2021-11-22 00:08:00 | 2021-08-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-27 | 123456787  |
| 9          | 2021-11-21 | 2021-11-21 00:09:00 | 2021-09-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-28 | 123456788  |
| 10         | 2021-11-20 | 2021-11-20 00:10:00 | 2021-10-11 00:00:00.123 | 2021-10-29 | 2021-10-29 00:00:00 | 2021-10-11 00:00:00.123 | 2021-11-29 | 123456789  |
+------------+------------+---------------------+-------------------------+------------+---------------------+-------------------------+------------+------------+
```

## ADD\_MONTHS

-   Syntax
    
    ```
    STRING ADD_MONTHS(DATE|DATETIME|TIMESTAMP|STRING <startdate>, INT <num_months>)
    ```
    
-   Description
    
    Returns a date value that is obtained after the number of months specified by num\_months is added to startdate. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    startdate
    
    Yes
    
    A value of the DATE, DATETIME, TIMESTAMP, or STRING type. The value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss.ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and must not contain extra strings.
    
    num\_months
    
    Yes
    
    A value of the INT type.
    
-   Return value
    
    A value of the STRING type is returned. The return value is in the `yyyy-mm-dd` format. The return value varies based on the following rules:
    
    -   If the value of startdate is not of the DATE, DATETIME, TIMESTAMP, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of startdate is null, an error is returned.
        
    -   If the value of num\_months is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2017-05-14. 
        SELECT ADD_MONTHS('2017-02-14',3);
        
        -- The return value is 0017-05-14. 
        SELECT ADD_MONTHS('17-2-14',3);
        
        -- The return value is 2017-05-14. 
        SELECT ADD_MONTHS('2017-02-14 21:30:00',3);
        
        -- The return value is NULL. 
        SELECT ADD_MONTHS('20170214',3);
        
        -- The return value is NULL. 
        SELECT ADD_MONTHS('2017-02-14 21:30:00',null);
        ```
        
    -   Examples of table data
        
        Convert date values in the date1, datetime1, timestamp1, and date3 columns into UNIX timestamps that are integers. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               ADD_MONTHS(date1,1) AS date1_add_months, 
               datetime1, 
               ADD_MONTHS(datetime1, 2) AS datetime1_add_months, 
               timestamp1, 
               ADD_MONTHS(timestamp1,3) AS timestamp1_add_months, 
               date3, 
               ADD_MONTHS(date3,4) AS date3_add_months 
        FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------------+---------------------+----------------------+-------------------------------+-----------------------+------------+------------------+
        | date1      | date1_add_months | datetime1           | datetime1_add_months | timestamp1                    | timestamp1_add_months | date3      | date3_add_months |
        +------------+------------------+---------------------+----------------------+-------------------------------+-----------------------+------------+------------------+
        | 2021-11-29 | 2021-12-29       | 2021-11-29 00:01:00 | 2022-01-29           | 2021-01-11 00:00:00.123456789 | 2021-04-11            | 2021-11-20 | 2022-03-20       |
        | 2021-11-28 | 2021-12-28       | 2021-11-28 00:02:00 | 2022-01-28           | 2021-02-11 00:00:00.123456789 | 2021-05-11            | 2021-11-21 | 2022-03-21       |
        | 2021-11-27 | 2021-12-27       | 2021-11-27 00:03:00 | 2022-01-27           | 2021-03-11 00:00:00.123456789 | 2021-06-11            | 2021-11-22 | 2022-03-22       |
        | 2021-11-26 | 2021-12-26       | 2021-11-26 00:04:00 | 2022-01-26           | 2021-04-11 00:00:00.123456789 | 2021-07-11            | 2021-11-23 | 2022-03-23       |
        | 2021-11-25 | 2021-12-25       | 2021-11-25 00:05:00 | 2022-01-25           | 2021-05-11 00:00:00.123456789 | 2021-08-11            | 2021-11-24 | 2022-03-24       |
        | 2021-11-24 | 2021-12-24       | 2021-11-24 00:06:00 | 2022-01-24           | 2021-06-11 00:00:00.123456789 | 2021-09-11            | 2021-11-25 | 2022-03-25       |
        | 2021-11-23 | 2021-12-23       | 2021-11-23 00:07:00 | 2022-01-23           | 2021-07-11 00:00:00.123456789 | 2021-10-11            | 2021-11-26 | 2022-03-26       |
        | 2021-11-22 | 2021-12-22       | 2021-11-22 00:08:00 | 2022-01-22           | 2021-08-11 00:00:00.123456789 | 2021-11-11            | 2021-11-27 | 2022-03-27       |
        | 2021-11-21 | 2021-12-21       | 2021-11-21 00:09:00 | 2022-01-21           | 2021-09-11 00:00:00.123456789 | 2021-12-11            | 2021-11-28 | 2022-03-28       |
        | 2021-11-20 | 2021-12-20       | 2021-11-20 00:10:00 | 2022-01-20           | 2021-10-11 00:00:00.123456789 | 2022-01-11            | 2021-11-29 | 2022-03-29       |
        +------------+------------------+---------------------+----------------------+-------------------------------+-----------------------+------------+------------------+
        ```
        

## CURRENT\_TIMESTAMP

-   Syntax
    
    ```
    TIMESTAMP CURRENT_TIMESTAMP()
    ```
    
-   Description
    
    Returns the current timestamp. The return value is not fixed. This function is an additional function of MaxCompute V2.0.
    
-   Return value
    
    A value of the TIMESTAMP type is returned.
    
-   Examples
    
    ```
    -- The return value is '2017-08-03 11:50:30.661'. 
    SET odps.sql.type.system.odps2=true;
    SELECT CURRENT_TIMESTAMP(); 
    ```
    

## CURRENT\_TIMEZONE

-   Syntax
    
    ```
    STRING CURRENT_TIMEZONE()
    ```
    
-   Description
    
    Returns the time zone of the current system.
    
-   Return value
    
    A value of the STRING type is returned.
    
-   Examples
    
    ```
    -- The return value is Asia/Shanghai. 
    SELECT CURRENT_TIMEZONE();
    ```
    

## DATE\_ADD

-   Syntax
    
    ```
    DATE DATE_ADD(DATE|TIMESTAMP|STRING <startdate>, BIGINT <delta>)
    ```
    
-   Description
    
    Adds or subtracts a number of days that is specified by delta to or from a date value that is specified by startdate.
    
    **Note**
    
    -   To add or subtract a number of days to or from the current time, you can use this function with the [GETDATE](#section-o4p-45l-vdb) function.
        
    -   If you need to make precise adjustments at the hour, minute, or second level, refer to the [DATEADD](#section-qjz-lrl-vdb) function. This function only supports incrementing or decrementing a single unit among years, months, days, hours, minutes, or seconds. If you need to adjust multiple granularities simultaneously, we recommend that you use a user-defined function.
        
    -   The logic of this function is opposite to that of the [DATE\_SUB](#section-02m-xan-u6n) function.
        
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    startdate
    
    Yes
    
    The start date. A value of the DATE, DATETIME, or STRING type is supported.
    
    If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the DATE type before calculation. The input value of the STRING type must include at least the `'yyyy-mm-dd'` part, such as `'2019-12-27'`.
    
    delta
    
    Yes
    
    The number of days that you want to add or subtract. The value of this parameter must be of the BIGINT type. If the value of delta is greater than 0, a number of days is **added** to the start date. If the value of delta is less than 0, a number of days is **subtracted** from the start date. If the value of delta is 0, the date value remains unchanged.
    
-   Return value
    
    A value of the DATE type is returned. The return value is in the `yyyy-mm-dd` format. The return value varies based on the following rules:
    
    -   If the value of startdate is not of the DATE, DATETIME, or STRING type, an error is returned.
        
    -   If the value of startdate is null, an error is returned.
        
    -   If the value of delta is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2005-03-01. After one day is added, the result is beyond the last day of February. The first day of March is returned. 
        SELECT DATE_ADD(DATETIME '2005-02-28 00:00:00', 1);
        
        -- The return value is 2005-02-27. One day is subtracted. 
        SELECT DATE_ADD(DATE '2005-02-28', -1);
        
        -- The return value is 2005-03-20. 
        SET odps.sql.type.system.odps2=false; 
        SELECT DATE_ADD('2005-02-28 00:00:00', 20);
        
        -- If the current time is 2020-11-17 16:31:44, the return value is 2020-11-16. 
        SELECT DATE_ADD(getdate(),-1);
        
        -- The return value is NULL. 
        SELECT DATE_ADD('2005-02-28 00:00:00', null);
        ```
        
    -   Examples of table data
        
        Change date values in the date1, datetime1, and timestamp1 columns based on the number of days specified by delta. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DATE_ADD(date1, 1) AS date1_date_add, 
               datetime1, 
               DATE_ADD(datetime1, -1) AS datetime1_date_add, 
               timestamp1, 
               DATE_ADD(timestamp1, 0) AS timestamp1_date_add 
        FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+----------------+---------------------+-------------------+-------------------------------+--------------------+
        | date1      | date1_date_add | datetime1           | datetime1_date_add| timestamp1                    | timestamp1_date_add|
        +------------+----------------+---------------------+-------------------+-------------------------------+--------------------+
        | 2021-11-29 | 2021-11-30     | 2021-11-29 00:01:00 | 2021-11-28        | 2021-01-11 00:00:00.123456789 | 2021-01-11         |
        | 2021-11-28 | 2021-11-29     | 2021-11-28 00:02:00 | 2021-11-27        | 2021-02-11 00:00:00.123456789 | 2021-02-11         |
        | 2021-11-27 | 2021-11-28     | 2021-11-27 00:03:00 | 2021-11-26        | 2021-03-11 00:00:00.123456789 | 2021-03-11         |
        | 2021-11-26 | 2021-11-27     | 2021-11-26 00:04:00 | 2021-11-25        | 2021-04-11 00:00:00.123456789 | 2021-04-11         |
        | 2021-11-25 | 2021-11-26     | 2021-11-25 00:05:00 | 2021-11-24        | 2021-05-11 00:00:00.123456789 | 2021-05-11         |
        | 2021-11-24 | 2021-11-25     | 2021-11-24 00:06:00 | 2021-11-23        | 2021-06-11 00:00:00.123456789 | 2021-06-11         |
        | 2021-11-23 | 2021-11-24     | 2021-11-23 00:07:00 | 2021-11-22        | 2021-07-11 00:00:00.123456789 | 2021-07-11         |
        | 2021-11-22 | 2021-11-23     | 2021-11-22 00:08:00 | 2021-11-21        | 2021-08-11 00:00:00.123456789 | 2021-08-11         |
        | 2021-11-21 | 2021-11-22     | 2021-11-21 00:09:00 | 2021-11-20        | 2021-09-11 00:00:00.123456789 | 2021-09-11         |
        | 2021-11-20 | 2021-11-21     | 2021-11-20 00:10:00 | 2021-11-19        | 2021-10-11 00:00:00.123456789 | 2021-10-11         |
        +------------+----------------+---------------------+-------------------+-------------------------------+--------------------+
        ```
        

## DATEADD

-   Syntax
    
    ```
    DATE|DATETIME DATEADD(DATE|DATETIME|TIMESTAMP <date>, BIGINT <delta>, STRING <datepart>)
    ```
    
-   Description
    
    Changes a date value based on the time unit specified by datepart and the interval specified by delta. To add or subtract an interval to or from the current time, you can use this function with the [GETDATE](#section-o4p-45l-vdb) function.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    A date value of the DATE, DATETIME, or TIMESTAMP type. A value of the STRING type is implicitly converted into a value of the DATETIME type before calculation if the value format conforms to the DATETIME-type format `yyyy-mm-dd hh:mi:ss`, such as `2021-08-28 00:00:00`, and the MaxCompute V1.0 data type edition is used.
    
    delta
    
    Yes
    
    The interval that you want to add to or subtract from the specified component of a date value. The value of this parameter must be of the BIGINT type. If the value of delta is greater than 0, an interval is added to the date value. Otherwise, an interval is subtracted from the date value. If the input value is of the STRING or DOUBLE type, the value is implicitly converted into a value of the BIGINT type before calculation.
    
    **Note**
    
    -   If you add or subtract the interval specified by delta based on the time unit specified by datepart, a carry or return at more significant date components may occur. The year, month, hour, minute, and second parts are computed according to the base-10, base-12, base-24, and base-60 numeral systems, respectively.
        
    -   If the DATEADD function adds the interval specified by delta to the month component of a date value and this operation does not cause an overflow on the day component, retain the value of the day component. Otherwise, set the value of the day component to the last day of the specified month.
        
    
    datepart
    
    Yes
    
    The date part that you want to modify in the date value. The value is a constant of the STRING type. If the format of the input value is invalid or the input value is not a constant of the STRING type, an error is returned.
    
    The value of this parameter is specified in compliance with the rules of conversions between the STRING and DATETIME types. The value `yyyy` indicates the year component of a date value. The value `mm` indicates the month component of a date value. The value `dd` indicates the day component of a date value. For more information about the rules for type conversions, see [Type conversions](/help/en/maxcompute/user-guide/type-conversions#concept-wyb-sgl-vdb). The Extended Date/Time Format (EDTF) is also supported, such as `-year`, `-month`, `-mon`, `-day`, or `-hour`.
    
-   Return value
    
    A value of the DATE or DATETIME type is returned. The return value is in the `yyyy-mm-dd` or `yyyy-mm-dd hh:mi:ss` format. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATE, DATETIME, or TIMESTAMP type, an error is returned.
        
    -   If the value of date is null, an error is returned.
        
    -   If the value of delta or datepart is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        -   Example 1: common use
            
            ```
            -- The return value is 2005-03-01 00:00:00. After one day is added, the result is beyond the last day of February. The first day of March is returned. 
            SELECT DATEADD(DATETIME '2005-02-28 00:00:00', 1, 'dd');
            
            -- The return value is 2005-02-27 00:00:00. One day is subtracted. 
            SELECT DATEADD(DATETIME '2005-02-28 00:00:00', -1, 'dd');
            
            -- The return value is 2006-10-28 00:00:00. After 20 months are added, the month overflows, and the year value increases by 1. 
            SELECT DATEADD(DATETIME '2005-02-28 00:00:00', 20, 'mm');
            
            -- The return value is 2005-03-28 00:00:00. 
            SELECT DATEADD(DATETIME '2005-02-28 00:00:00', 1, 'mm');
            
            -- The return value is 2005-02-28 00:00:00. February in 2005 has only 28 days. Therefore, the last day of February is returned. 
            SELECT DATEADD(DATETIME '2005-01-29 00:00:00', 1, 'mm');
            
            -- The return value is 2005-02-28 00:00:00. 
            SELECT DATEADD(DATETIME '2005-03-30 00:00:00', -1, 'mm');
            
            -- The return value is 2005-03-18. 
            SELECT DATEADD(DATE '2005-02-18', 1, 'mm');
            
            -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. The return value is 2005-03-18 00:00:00.0. 
            SET odps.sql.type.system.odps2=true;
            SELECT DATEADD(TIMESTAMP '2005-02-18 00:00:00', 1, 'mm');
            
            -- If the current time is 2020-11-17 16:31:44, the return value is 2020-11-16 16:31:44. 
            SELECT DATEADD(GETDATE(),-1,'dd');
            
            -- The return value is NULL. 
            SELECT DATEADD(DATE '2005-02-18', 1, null);
            
            -- The return value is 2005-03-30 02:24:00, with 3 hours subtracted. 
            SELECT DATEADD(DATETIME '2005-03-30 05:24:00', -3, 'hh');
            
            -- The return value is 2005-03-30 04:54:00, with 30 minutes subtracted. 
            SELECT DATEADD(DATETIME '2005-03-30 05:24:00', -30, 'mi');
            
            -- The return value is 2005-03-30 05:23:30, with 30 seconds subtracted.
            SELECT DATEADD(DATETIME '2005-03-30 05:24:00', -30, 'ss');
            ```
            
        -   Example 2: use of DATEADD in which a value of the DATETIME type is expressed as a constant.
            
            In MaxCompute SQL statements, a value of the DATETIME type cannot be directly expressed as a constant. The following statement uses an **invalid expression** of a value of the DATETIME type:
            
            ```
            SELECT DATEADD(2005-03-30 00:00:00, -1, 'mm');
            ```
            
            To describe a constant of the DATETIME type, use a **valid expression** of a value of the DATETIME type in the following statement:
            
            ```
            -- Explicitly convert a constant of the STRING type into the DATETIME type. The return value is 2005-02-28 00:00:00. 
            SELECT DATEADD(CAST("2005-03-30 00:00:00" AS datetime), -1, 'mm');
            ```
            
        -   Example 3: The input value is of the STRING type.
            
            ```
            -- The input value is of the STRING type but does not conform to the DATETIME-type format. As a result, an error is returned. 
            SELECT DATEADD('2021-08-27',1,'dd');
            
            -- The input value is of the STRING type and conforms to the DATETIME-type format, and the MaxCompute V1.0 data type edition is used in your project. The return value is 2005-03-01 00:00:00. 
            SET odps.sql.type.system.odps2=false;
            SELECT DATEADD('2005-02-28 00:00:00', 1, 'dd');
            ```
            
    -   Examples of table data
        
        Change date values in the date1, datetime1, and timestamp1 columns based on the time unit specified by datepart and the interval specified by delta. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DATEADD(date1,1,'dd') AS date1_dateadd, 
               datetime1, 
               DATEADD(datetime1,1,'mm') AS datetime1_dateadd, 
               timestamp1, 
               DATEADD(timestamp1,-1,'yyyy') AS timestamp1_dateadd 
        FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------+---------------------+---------------------+-------------------------------+-------------------------------+
        | date1      | date1_dateadd | datetime1           | datetime1_dateadd   | timestamp1                    | timestamp1_dateadd            |
        +------------+---------------+---------------------+---------------------+-------------------------------+-------------------------------+
        | 2021-11-29 | 2021-11-30    | 2021-11-29 00:01:00 | 2021-12-29 00:01:00 | 2021-01-11 00:00:00.123456789 | 2020-01-11 00:00:00.123456789 |
        | 2021-11-28 | 2021-11-29    | 2021-11-28 00:02:00 | 2021-12-28 00:02:00 | 2021-02-11 00:00:00.123456789 | 2020-02-11 00:00:00.123456789 |
        | 2021-11-27 | 2021-11-28    | 2021-11-27 00:03:00 | 2021-12-27 00:03:00 | 2021-03-11 00:00:00.123456789 | 2020-03-11 00:00:00.123456789 |
        | 2021-11-26 | 2021-11-27    | 2021-11-26 00:04:00 | 2021-12-26 00:04:00 | 2021-04-11 00:00:00.123456789 | 2020-04-11 00:00:00.123456789 |
        | 2021-11-25 | 2021-11-26    | 2021-11-25 00:05:00 | 2021-12-25 00:05:00 | 2021-05-11 00:00:00.123456789 | 2020-05-11 00:00:00.123456789 |
        | 2021-11-24 | 2021-11-25    | 2021-11-24 00:06:00 | 2021-12-24 00:06:00 | 2021-06-11 00:00:00.123456789 | 2020-06-11 00:00:00.123456789 |
        | 2021-11-23 | 2021-11-24    | 2021-11-23 00:07:00 | 2021-12-23 00:07:00 | 2021-07-11 00:00:00.123456789 | 2020-07-11 00:00:00.123456789 |
        | 2021-11-22 | 2021-11-23    | 2021-11-22 00:08:00 | 2021-12-22 00:08:00 | 2021-08-11 00:00:00.123456789 | 2020-08-11 00:00:00.123456789 |
        | 2021-11-21 | 2021-11-22    | 2021-11-21 00:09:00 | 2021-12-21 00:09:00 | 2021-09-11 00:00:00.123456789 | 2020-09-11 00:00:00.123456789 |
        | 2021-11-20 | 2021-11-21    | 2021-11-20 00:10:00 | 2021-12-20 00:10:00 | 2021-10-11 00:00:00.123456789 | 2020-10-11 00:00:00.123456789 |
        +------------+---------------+---------------------+---------------------+-------------------------------+-------------------------------+
        ```
        

## DATE\_FORMAT

-   Syntax
    
    ```
    STRING DATE_FORMAT(DATE|TIMESTAMP|STRING <date>, STRING <format>)
    ```
    
-   Description
    
    Converts a date value into a string in a specified format.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    The date value that you want to convert. The date value can be of the DATE, TIMESTAMP, or STRING type.
    
    -   Date values of the DATE or STRING type are supported only when the Hive-compatible data type edition is enabled. You can run the `set odps.sql.hive.compatible=true;` command to enable the Hive-compatible data type edition.
        
    -   If the date value is of the STRING type, only the following formats are supported:
        
        -   `'yyyy-MM-dd'`, such as `'2019-12-27'`.
            
        -   `'yyyy-MM-dd hh:mm:ss'`, such as `'2019-12-27 12:23:10'`.
            
        -   `'yyyy-MM-dd hh:mm:ss.SSS'`, such as `'2019-12-27 12:23:10.123'`.
            
    
    format
    
    Yes
    
    A constant of the STRING type. format specifies the date format, such as `yyyy-MM-dd hh:mm:ss:SSS` and `yyyy-MM-dd hh:mi:ss:SSS`. The value consists of the following components:
    
    -   `YYYY` or `yyyy`: the year. yyyy represents the calendar year and YYYY represents the year of the week.
        
        **Note**
        
        The year of the week may be inconsistent with the actual year. Exercise caution when you use the year of the week format.
        
    -   `MM`: the month.
        
    -   `mm`: the minute.
        
    -   `dd`: the day.
        
    -   `HH`: the hour that is expressed in the 24-hour clock.
        
    -   `hh`: the hour that is expressed in the 12-hour clock.
        
    -   `mi`: the minute.
        
    -   `ss`: the second.
        
    -   `SSS`: the millisecond.
        
    
    **Important**
    
    -   If the Hive-compatible data type edition is disabled, both `HH` and `hh` indicate that a 24-hour clock is used. In this case, the date format must be `yyyy-MM-dd hh:mi:ss`. If `yyyy-MM-dd hh:mm:ss` is used, the `mm` component takes the same value as the MM component.
        
    -   If the Hive-compatible data type edition is enabled, `HH` indicates that a 24-hour clock is used, and `hh` indicates that a 12-hour clock is used. In this case, the date format must be `yyyy-MM-dd hh:mm:ss`. If `yyyy-MM-dd hh:mi:ss` is used, null is returned.
        
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATE or TIMESTAMP type, null is returned.
        
    -   If the value of date is null, an error is returned.
        
    -   If the value of format is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- Enable the Hive-compatible data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.hive.compatible=true;
        
        -- If the current time is 2022-04-24 15:49, the return value is 2022-04-24 03:49:01.902. 
        SELECT DATE_FORMAT(FROM_UTC_TIMESTAMP(CURRENT_TIMESTAMP(), 'UTC'),'yyyy-MM-dd hh:mm:ss.SSS');
        
        -- The return value is 2022-04-24. 
        SELECT DATE_FORMAT('2022-04-24','yyyy-MM-dd');
        ```
        
    -   Examples of table data
        
        Convert date values in the datetime1 and timestamp1 columns into strings in a specified format. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the Hive-compatible data type edition and the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.hive.compatible=true;
        SET odps.sql.type.system.odps2=true;
        SELECT datetime1, timestamp1, DATE_FORMAT(datetime1,'yyyy/MM/dd'),
               DATE_FORMAT(datetime1,'yyyy/MM/dd HH:mm:ss'),
               DATE_FORMAT(timestamp1,'yyyy/MM/dd HH:mm:ss')
        FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+-----+-----+-----+
        | datetime1  | timestamp1 | _c2 | _c3 | _c4 |
        +------------+------------+-----+-----+-----+
        | 2021-11-29 00:01:00 | 2021-01-11 00:00:00.123456789 | 2021/11/29 | 2021/11/29 00:01:00 | 2021/01/11 00:00:00 |
        | 2021-11-28 00:02:00 | 2021-02-11 00:00:00.123456789 | 2021/11/28 | 2021/11/28 00:02:00 | 2021/02/11 00:00:00 |
        | 2021-11-27 00:03:00 | 2021-03-11 00:00:00.123456789 | 2021/11/27 | 2021/11/27 00:03:00 | 2021/03/11 00:00:00 |
        | 2021-11-26 00:04:00 | 2021-04-11 00:00:00.123456789 | 2021/11/26 | 2021/11/26 00:04:00 | 2021/04/11 00:00:00 |
        | 2021-11-25 00:05:00 | 2021-05-11 00:00:00.123456789 | 2021/11/25 | 2021/11/25 00:05:00 | 2021/05/11 00:00:00 |
        | 2021-11-24 00:06:00 | 2021-06-11 00:00:00.123456789 | 2021/11/24 | 2021/11/24 00:06:00 | 2021/06/11 00:00:00 |
        | 2021-11-23 00:07:00 | 2021-07-11 00:00:00.123456789 | 2021/11/23 | 2021/11/23 00:07:00 | 2021/07/11 00:00:00 |
        | 2021-11-22 00:08:00 | 2021-08-11 00:00:00.123456789 | 2021/11/22 | 2021/11/22 00:08:00 | 2021/08/11 00:00:00 |
        | 2021-11-21 00:09:00 | 2021-09-11 00:00:00.123456789 | 2021/11/21 | 2021/11/21 00:09:00 | 2021/09/11 00:00:00 |
        | 2021-11-20 00:10:00 | 2021-10-11 00:00:00.123456789 | 2021/11/20 | 2021/11/20 00:10:00 | 2021/10/11 00:00:00 |
        +------------+------------+-----+-----+-----+
        ```
        

## DATE\_SUB

-   Syntax
    
    ```
    DATE DATE_SUB(DATE|TIMESTAMP|STRING <startdate>, BIGINT <delta>)
    ```
    
-   Description
    
    Adds or subtracts a number of days that is specified by delta to or from a date value that is specified by startdate.
    
    **Note**
    
    -   To add or subtract a number of days to or from the current time, you can use this function with the [GETDATE](#section-o4p-45l-vdb) function.
        
    -   If you need to make precise adjustments at the hour, minute, or second level, refer to the [DATEADD](#section-qjz-lrl-vdb) function. This function only supports incrementing or decrementing a single unit among years, months, days, hours, minutes, or seconds. If you need to adjust multiple granularities simultaneously, we recommend that you use a user-defined function.
        
    -   The logic of this function is opposite to that of the [DATE\_ADD](#section-aza-roh-gfl) function.
        
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    startdate
    
    Yes
    
    The start date. A value of the DATE, DATETIME, or STRING type is supported. If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the DATE type before calculation. The input value of the STRING type must include at least the `'yyyy-mm-dd'` part, such as `'2019-12-27'`.
    
    delta
    
    Yes
    
    The number of days that you want to add or subtract. The value of this parameter must be of the BIGINT type. If the value of delta is greater than 0, a number of days are **subtracted** from the start date. If the value of delta is less than 0, a number of days are **added** to the start date. If the value of delta is 0, the date value remains unchanged.
    
-   Return value
    
    A value of the DATE type is returned. The return value is in the `yyyy-mm-dd` format. The return value varies based on the following rules:
    
    -   If the value of startdate is not of the DATE, DATETIME, or STRING type, an error is returned.
        
    -   If the value of startdate is null, an error is returned.
        
    -   If the value of delta is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        
        -- The return value is 2005-02-28. One day is subtracted. The last day of February is returned. 
        SELECT DATE_SUB(datetime '2005-03-01 00:00:00', 1);
        
        -- The return value is 2005-03-01. One day is added. 
        SELECT DATE_SUB(date '2005-02-28', -1);
        
        -- The return value is 2005-02-27. Two days are subtracted. 
        SET odps.sql.type.system.odps2=false; 
        SELECT DATE_SUB('2005-03-01 00:00:00', 2);
        
        -- If the current time is 2021-09-10 16:31:44, the return value is 2021-09-09. 
        SELECT DATE_SUB(GETDATE(),1);
        
        -- The return value is NULL. 
        SELECT DATE_SUB('2005-03-01 00:00:00', null);
        ```
        
    -   Examples of table data
        
        Change date values in the date1, datetime1, and timestamp1 columns based on the number of days specified by delta. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DATE_SUB(date1,1) AS date1_date_sub, 
               datetime1, 
               DATE_SUB(datetime1,-1) AS datetime1_date_sub, 
               timestamp1, 
               DATE_SUB(timestamp1,0) AS timestamp1_date_sub 
        FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+----------------+---------------------+--------------------+-------------------------------+---------------------+
        | date1      | date1_date_sub | datetime1           | datetime1_date_sub | timestamp1                    | timestamp1_date_sub |
        +------------+----------------+---------------------+--------------------+-------------------------------+---------------------+
        | 2021-11-29 | 2021-11-28     | 2021-11-29 00:01:00 | 2021-11-30         | 2021-01-11 00:00:00.123456789 | 2021-01-11          |
        | 2021-11-28 | 2021-11-27     | 2021-11-28 00:02:00 | 2021-11-29         | 2021-02-11 00:00:00.123456789 | 2021-02-11          |
        | 2021-11-27 | 2021-11-26     | 2021-11-27 00:03:00 | 2021-11-28         | 2021-03-11 00:00:00.123456789 | 2021-03-11          |
        | 2021-11-26 | 2021-11-25     | 2021-11-26 00:04:00 | 2021-11-27         | 2021-04-11 00:00:00.123456789 | 2021-04-11          |
        | 2021-11-25 | 2021-11-24     | 2021-11-25 00:05:00 | 2021-11-26         | 2021-05-11 00:00:00.123456789 | 2021-05-11          |
        | 2021-11-24 | 2021-11-23     | 2021-11-24 00:06:00 | 2021-11-25         | 2021-06-11 00:00:00.123456789 | 2021-06-11          |
        | 2021-11-23 | 2021-11-22     | 2021-11-23 00:07:00 | 2021-11-24         | 2021-07-11 00:00:00.123456789 | 2021-07-11          |
        | 2021-11-22 | 2021-11-21     | 2021-11-22 00:08:00 | 2021-11-23         | 2021-08-11 00:00:00.123456789 | 2021-08-11          |
        | 2021-11-21 | 2021-11-20     | 2021-11-21 00:09:00 | 2021-11-22         | 2021-09-11 00:00:00.123456789 | 2021-09-11          |
        | 2021-11-20 | 2021-11-19     | 2021-11-20 00:10:00 | 2021-11-21         | 2021-10-11 00:00:00.123456789 | 2021-10-11          |
        +------------+----------------+---------------------+--------------------+-------------------------------+---------------------+
        ```
        

## DATEDIFF

-   Syntax
    
    ```
    BIGINT DATEDIFF(DATE|DATETIME|TIMESTAMP <date1>, DATE|DATETIME|TIMESTAMP <date2>, STRING <datepart>)
    ```
    
-   Description
    
    Calculates the difference between date1 and date2. The difference is measured in the time unit specified by datepart.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date1 and date2
    
    Yes
    
    A value of the DATE, DATETIME, or TIMESTAMP type. The parameters specify the minuend and subtrahend. If the input values are of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input values are implicitly converted into the DATETIME type before calculation.
    
    **Note**
    
    Only the MaxCompute V2.0 data type edition supports the TIMESTAMP type. For more information, see [MaxCompute data type system version 2.0](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition).
    
    datepart
    
    No
    
    The time unit, which is a constant of the STRING type.
    
    If you enable the MaxCompute V2.0 data type edition, you can leave datepart empty. Default value: day. For more information about the MaxCompute V2.0 data type edition, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db). The EDTF is also supported, such as `-year`, `-month`, `-mon`, `-day`, or `-hour`.
    
    **Note**
    
    This function omits the lower unit based on the time unit specified by datepart and then calculates the result.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of date1 or date2 is not of the DATE, DATETIME, or TIMESTAMP type, an error is returned.
        
    -   If date1 is less than date2, the return value is negative.
        
    -   If the value of date1 or date2 is null, null is returned.
        
    -   If the value of datepart is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        -   Example 1
            
            ```
            SET odps.sql.type.system.odps2=true;
            SELECT DATEDIFF(TIMESTAMP '2006-01-01 00:00:00', TIMESTAMP '2005-12-31 23:59:59', 'dd'); 
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 1          |
            +------------+
            ```
            
        -   Example 2
            
            ```
            SET odps.sql.type.system.odps2=true;
            SELECT DATEDIFF(TIMESTAMP '2006-01-01 00:00:00', TIMESTAMP '2005-12-31 23:59:59', 'mm'); 
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 1          |
            +------------+
            ```
            
        -   Example 3
            
            ```
            SELECT  DATEDIFF(DATETIME '2013-05-31 13:00:00', DATETIME '2013-05-31 12:30:00','ss');
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 1800       |
            +------------+
            ```
            
        -   Example 4
            
            ```
            SET odps.sql.type.system.odps2 = false;
            SELECT DATEDIFF('2013-05-31 13:00:00','2013-05-31 12:30:00','mi');
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 30         |
            +------------+
            ```
            
        -   Example 5
            
            ```
            -- Date values that are accurate to the millisecond do not adopt the standard DATETIME format and cannot be implicitly converted into the DATETIME type. In this case, an explicit conversion is required.
            SELECT  DATEDIFF(
              TO_DATE('2018-06-04 19:33:23.250','yyyy-mm-dd hh:mi:ss.ff3'),
              TO_DATE('2018-06-04 19:33:23.234','yyyy-mm-dd hh:mi:ss.ff3'),
              'ff3');
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 16         |
            +------------+
            ```
            
        -   Example 6
            
            ```
            SET odps.sql.type.system.odps2=true;
            SELECT  DATEDIFF(DATE '2013-05-21',DATE '2013-05-10',NULL);
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | NULL       |
            +------------+
            ```
            
    -   Examples of table data
        
        Calculate the differences between the values in the date1 and date2 columns, between the values in the datetime1 and datetime2 columns, and between the values in the timestamp1 and timestamp2 columns. The differences are measured in the specified time unit. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2 = true;
        
        SELECT  date1, 
                date2, 
                DATEDIFF(date1,date2,'dd') AS date1_date2_datediff, 
                datetime1, 
                datetime2, 
                DATEDIFF(datetime1,datetime2,'dd') AS datetime1_datetime2_datediff, 
                timestamp1, 
                timestamp2, 
                DATEDIFF(timestamp1,timestamp2,'mm') AS timestamp1_timestamp2_datediff
        FROM    mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+----------------------+---------------------+---------------------+------------------------------+-------------------------------+-------------------------------+--------------------------------+
        | date1      | date2      | date1_date2_datediff | datetime1           | datetime2           | datetime1_datetime2_datediff | timestamp1                    | timestamp2                    | timestamp1_timestamp2_datediff |
        +------------+------------+----------------------+---------------------+---------------------+------------------------------+-------------------------------+-------------------------------+--------------------------------+
        | 2021-11-29 | 2021-10-29 | 31                   | 2021-11-29 00:01:00 | 2021-10-29 00:00:00 | 31                           | 2021-01-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -9                             |
        | 2021-11-28 | 2021-10-29 | 30                   | 2021-11-28 00:02:00 | 2021-10-29 00:00:00 | 30                           | 2021-02-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -8                             |
        | 2021-11-27 | 2021-10-29 | 29                   | 2021-11-27 00:03:00 | 2021-10-29 00:00:00 | 29                           | 2021-03-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -7                             |
        | 2021-11-26 | 2021-10-29 | 28                   | 2021-11-26 00:04:00 | 2021-10-29 00:00:00 | 28                           | 2021-04-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -6                             |
        | 2021-11-25 | 2021-10-29 | 27                   | 2021-11-25 00:05:00 | 2021-10-29 00:00:00 | 27                           | 2021-05-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -5                             |
        | 2021-11-24 | 2021-10-29 | 26                   | 2021-11-24 00:06:00 | 2021-10-29 00:00:00 | 26                           | 2021-06-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -4                             |
        | 2021-11-23 | 2021-10-29 | 25                   | 2021-11-23 00:07:00 | 2021-10-29 00:00:00 | 25                           | 2021-07-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -3                             |
        | 2021-11-22 | 2021-10-29 | 24                   | 2021-11-22 00:08:00 | 2021-10-29 00:00:00 | 24                           | 2021-08-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -2                             |
        | 2021-11-21 | 2021-10-29 | 23                   | 2021-11-21 00:09:00 | 2021-10-29 00:00:00 | 23                           | 2021-09-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -1                             |
        | 2021-11-20 | 2021-10-29 | 22                   | 2021-11-20 00:10:00 | 2021-10-29 00:00:00 | 22                           | 2021-10-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | 0                              |
        +------------+------------+----------------------+---------------------+---------------------+------------------------------+-------------------------------+-------------------------------+--------------------------------+
        ```
        

## DATEPART

-   Syntax
    
    ```
    BIGINT DATEPART(DATE|DATETIME|TIMESTAMP <date>, STRING <datepart>)
    ```
    
-   Description
    
    Returns a specified component of a date value based on the time unit specified by datepart.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    A value of the DATE, DATETIME, or TIMESTAMP type. If the input values are of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input values are implicitly converted into the DATETIME type before calculation.
    
    datepart
    
    Yes
    
    A constant of the STRING type. This parameter supports EDTF.
    
    The value of this parameter is specified in compliance with the rules of conversions between the STRING and DATETIME types. The value `yyyy` indicates the year component of a date value. The value `mm` indicates the month component of a date value. The value `dd` indicates the day component of a date value. For more information about the rules for type conversions, see [Type conversions](/help/en/maxcompute/user-guide/type-conversions#concept-wyb-sgl-vdb). EDTF is also supported, such as `-year`, `-month`, `-mon`, `-day`, or `-hour`.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATE, DATETIME, or TIMESTAMP type, an error is returned.
        
    -   If the value of date is null, an error is returned.
        
    -   If the value of datepart is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2013. 
        SELECT DATEPART(DATETIME '2013-06-08 01:10:00', 'yyyy'); 
        
        -- The return value is 6. 
        SELECT DATEPART(DATETIME '2013-06-08 01:10:00', 'mm');
        
        -- The return value is 2013. 
        SELECT DATEPART(DATE '2013-06-08', 'yyyy');
        
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. The return value is 2013. 
        SET odps.sql.type.system.odps2=true;
        SELECT DATEPART(TIMESTAMP '2013-06-08 01:10:00', 'yyyy');
        
        -- The return value is 2013. 
        SET odps.sql.type.system.odps2=false;
        SELECT DATEPART('2013-06-08 01:10:00', 'yyyy');
        
        -- The return value is NULL. 
        SELECT DATEPART(DATE '2013-06-08', null);
        ```
        
    -   Examples of table data
        
        Extract date values from the date1, datetime1, and timestamp1 columns based on the time unit specified by datepart. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DATEPART(date1,'yyyy') AS date1_datepart, datetime1, 
               DATEPART(datetime1,'dd') AS datetime1_datepart, 
               timestamp1, 
               datepart(timestamp1,'mm') AS timestamp1_datepart 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+----------------+---------------------+-------------------------+-------------------------------+---------------------+
        | date1      | date1_datepart | datetime1           | datetime1_datepart      | timestamp1                    | timestamp1_datepart |
        +------------+----------------+---------------------+-------------------------+-------------------------------+---------------------+
        | 2021-11-29 | 2021           | 2021-11-29 00:01:00 | 29                      | 2021-01-11 00:00:00.123456789 | 1                   |
        | 2021-11-28 | 2021           | 2021-11-28 00:02:00 | 28                      | 2021-02-11 00:00:00.123456789 | 2                   |
        | 2021-11-27 | 2021           | 2021-11-27 00:03:00 | 27                      | 2021-03-11 00:00:00.123456789 | 3                   |
        | 2021-11-26 | 2021           | 2021-11-26 00:04:00 | 26                      | 2021-04-11 00:00:00.123456789 | 4                   |
        | 2021-11-25 | 2021           | 2021-11-25 00:05:00 | 25                      | 2021-05-11 00:00:00.123456789 | 5                   |
        | 2021-11-24 | 2021           | 2021-11-24 00:06:00 | 24                      | 2021-06-11 00:00:00.123456789 | 6                   |
        | 2021-11-23 | 2021           | 2021-11-23 00:07:00 | 23                      | 2021-07-11 00:00:00.123456789 | 7                   |
        | 2021-11-22 | 2021           | 2021-11-22 00:08:00 | 22                      | 2021-08-11 00:00:00.123456789 | 8                   |
        | 2021-11-21 | 2021           | 2021-11-21 00:09:00 | 21                      | 2021-09-11 00:00:00.123456789 | 9                   |
        | 2021-11-20 | 2021           | 2021-11-20 00:10:00 | 20                      | 2021-10-11 00:00:00.123456789 | 10                  |
        +------------+----------------+---------------------+-------------------------+-------------------------------+---------------------+
        ```
        

## DATETRUNC

-   Syntax
    
    ```
    DATE|DATETIME DATETRUNC(DATE|DATETIME|TIMESTAMP <date>, STRING <datepart>)
    ```
    
-   Description
    
    Truncates a date value based on the time unit specified by datepart.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    A value of the DATE, DATETIME, or TIMESTAMP type. If the input values are of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input values are implicitly converted into the DATETIME type before calculation.
    
    datepart
    
    Yes
    
    A constant of the STRING type. This parameter supports EDTF.
    
    The value of this parameter is specified in compliance with the rules of conversions between the STRING and DATETIME types. The value `yyyy` indicates the year component of a date value. The value `mm` indicates the month component of a date value. The value `dd` indicates the day component of a date value. For more information about the rules for type conversions, see [Type conversions](/help/en/maxcompute/user-guide/type-conversions#concept-wyb-sgl-vdb). EDTF is also supported, such as `-year`, `-month`, `-mon`, `-day`, or `-hour`.
    
-   Return value
    
    A value of the DATE or DATETIME type is returned. The return value is in the `yyyy-mm-dd` or `yyyy-mm-dd hh:mi:ss` format. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATE, DATETIME, or TIMESTAMP type, an error is returned.
        
    -   If the value of date is null, an error is returned.
        
    -   If the value of datepart is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2011-01-01 00:00:00. 
        SELECT DATETRUNC(DATETIME '2011-12-07 16:28:46', 'yyyy');
        
        -- The return value is 2011-12-01 00:00:00. 
        SELECT DATETRUNC(DATETIME'2011-12-07 16:28:46', 'month');
        
        -- The return value is 2011-12-07 00:00:00. 
        SELECT DATETRUNC(DATETIME'2011-12-07 16:28:46', 'DD');
        
        -- The return value is 2011-01-01. 
        SELECT DATETRUNC(DATE '2011-12-07', 'yyyy');
        
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. The return value is 2011-01-01 00:00:00.0. 
        SET odps.sql.type.system.odps2=true;
        SELECT DATETRUNC(TIMESTAMP '2011-12-07 16:28:46', 'yyyy');
        
        -- The return value is 2011-01-01 00:00:00.0. 
        SET odps.sql.type.system.odps2=false;
        SELECT DATETRUNC('2011-12-07 16:28:46', 'yyyy');
        
        -- The return value is NULL. 
        SELECT DATETRUNC(DATE '2011-12-07', null);
        ```
        
    -   Examples of table data
        
        Truncate date values in the date1, datetime1, and timestamp1 columns based on the time unit specified by datepart. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DATETRUNC(date1,'yyyy') AS date1_datetrunc, 
               datetime1, 
               DATETRUNC(datetime1,'dd') AS datetime1_datetrunc, 
               timestamp1, 
               DATETRUNC(timestamp1,'mm') AS timestamp1_datetrunc 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+-----------------+---------------------+---------------------+-------------------------------+----------------------+
        | date1      | date1_datetrunc | datetime1           | datetime1_datetrunc | timestamp1                    | timestamp1_datetrunc |
        +------------+-----------------+---------------------+---------------------+-------------------------------+----------------------+
        | 2021-11-29 | 2021-01-01      | 2021-11-29 00:01:00 | 2021-11-29 00:00:00 | 2021-01-11 00:00:00.123456789 | 2021-01-01 00:00:00  |
        | 2021-11-28 | 2021-01-01      | 2021-11-28 00:02:00 | 2021-11-28 00:00:00 | 2021-02-11 00:00:00.123456789 | 2021-02-01 00:00:00  |
        | 2021-11-27 | 2021-01-01      | 2021-11-27 00:03:00 | 2021-11-27 00:00:00 | 2021-03-11 00:00:00.123456789 | 2021-03-01 00:00:00  |
        | 2021-11-26 | 2021-01-01      | 2021-11-26 00:04:00 | 2021-11-26 00:00:00 | 2021-04-11 00:00:00.123456789 | 2021-04-01 00:00:00  |
        | 2021-11-25 | 2021-01-01      | 2021-11-25 00:05:00 | 2021-11-25 00:00:00 | 2021-05-11 00:00:00.123456789 | 2021-05-01 00:00:00  |
        | 2021-11-24 | 2021-01-01      | 2021-11-24 00:06:00 | 2021-11-24 00:00:00 | 2021-06-11 00:00:00.123456789 | 2021-06-01 00:00:00  |
        | 2021-11-23 | 2021-01-01      | 2021-11-23 00:07:00 | 2021-11-23 00:00:00 | 2021-07-11 00:00:00.123456789 | 2021-07-01 00:00:00  |
        | 2021-11-22 | 2021-01-01      | 2021-11-22 00:08:00 | 2021-11-22 00:00:00 | 2021-08-11 00:00:00.123456789 | 2021-08-01 00:00:00  |
        | 2021-11-21 | 2021-01-01      | 2021-11-21 00:09:00 | 2021-11-21 00:00:00 | 2021-09-11 00:00:00.123456789 | 2021-09-01 00:00:00  |
        | 2021-11-20 | 2021-01-01      | 2021-11-20 00:10:00 | 2021-11-20 00:00:00 | 2021-10-11 00:00:00.123456789 | 2021-10-01 00:00:00  |
        +------------+-----------------+---------------------+---------------------+-------------------------------+----------------------+
        ```
        

## DAY

-   Syntax
    
    ```
    INT DAY(DATETIME|TIMESTAMP|DATE|STRING <date>)
    ```
    
-   Description
    
    Returns the day in which a date value falls. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The value 1 is returned. 
        SELECT DAY('2014-09-01');
        
        -- The return value is NULL. 
        SELECT DAY('20140901');
        
        -- The return value is NULL. 
        SELECT DAY(null);
        ```
        
    -   Examples of table data
        
        Obtain the day in which each date value in the date1, datetime1, timestamp1, and date3 columns falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DAY(date1) AS date1_day, 
               datetime1, 
               DAY(datetime1) AS datetime1_day, 
               timestamp1, 
               DAY(timestamp1) AS timestamp1_day, 
               date3, 
               DAY(date3) AS date3_day 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+-----------+---------------------+---------------+-------------------------------+----------------+------------+-----------+
        | date1      | date1_day | datetime1           | datetime1_day | timestamp1                    | timestamp1_day | date3      | date3_day |
        +------------+-----------+---------------------+---------------+-------------------------------+----------------+------------+-----------+
        | 2021-11-29 | 29        | 2021-11-29 00:01:00 | 29            | 2021-01-11 00:00:00.123456789 | 11             | 2021-11-20 | 20        |
        | 2021-11-28 | 28        | 2021-11-28 00:02:00 | 28            | 2021-02-11 00:00:00.123456789 | 11             | 2021-11-21 | 21        |
        | 2021-11-27 | 27        | 2021-11-27 00:03:00 | 27            | 2021-03-11 00:00:00.123456789 | 11             | 2021-11-22 | 22        |
        | 2021-11-26 | 26        | 2021-11-26 00:04:00 | 26            | 2021-04-11 00:00:00.123456789 | 11             | 2021-11-23 | 23        |
        | 2021-11-25 | 25        | 2021-11-25 00:05:00 | 25            | 2021-05-11 00:00:00.123456789 | 11             | 2021-11-24 | 24        |
        | 2021-11-24 | 24        | 2021-11-24 00:06:00 | 24            | 2021-06-11 00:00:00.123456789 | 11             | 2021-11-25 | 25        |
        | 2021-11-23 | 23        | 2021-11-23 00:07:00 | 23            | 2021-07-11 00:00:00.123456789 | 11             | 2021-11-26 | 26        |
        | 2021-11-22 | 22        | 2021-11-22 00:08:00 | 22            | 2021-08-11 00:00:00.123456789 | 11             | 2021-11-27 | 27        |
        | 2021-11-21 | 21        | 2021-11-21 00:09:00 | 21            | 2021-09-11 00:00:00.123456789 | 11             | 2021-11-28 | 28        |
        | 2021-11-20 | 20        | 2021-11-20 00:10:00 | 20            | 2021-10-11 00:00:00.123456789 | 11             | 2021-11-29 | 29        |
        +------------+-----------+---------------------+---------------+-------------------------------+----------------+------------+-----------+
        ```
        

## DAYOFMONTH

-   Syntax
    
    ```
    INT DAYOFMONTH(DATETIME|TIMESTAMP|DATE|STRING <date>)
    ```
    
-   Description
    
    Returns the day component of a date value. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The value 1 is returned. 
        SELECT DAYOFMONTH('2014-09-01');
        
        -- The return value is NULL. 
        SELECT DAYOFMONTH('20140901');
        
        -- The return value is NULL. 
        SELECT DAYOFMONTH(null);
        ```
        
    -   Examples of table data
        
        Obtain the day components of date values in the date1, datetime1, timestamp1, and date3 columns. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               DAYOFMONTH(date1) AS date1_dayofmonth, 
               datetime1, 
               DAYOFMONTH(datetime1) AS datetime1_dayofmonth, 
               timestamp1, 
               DAYOFMONTH(timestamp1) AS timestamp1_dayofmonth, 
               date3, 
               DAYOFMONTH(date3) AS date3_dayofmonth 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------------+---------------------+----------------------+-------------------------------+-----------------------+------------+------------------+
        | date1      | date1_dayofmonth | datetime1           | datetime1_dayofmonth | timestamp1                    | timestamp1_dayofmonth | date3      | date3_dayofmonth |
        +------------+------------------+---------------------+----------------------+-------------------------------+-----------------------+------------+------------------+
        | 2021-11-29 | 29               | 2021-11-29 00:01:00 | 29                   | 2021-01-11 00:00:00.123456789 | 11                    | 2021-11-20 | 20               |
        | 2021-11-28 | 28               | 2021-11-28 00:02:00 | 28                   | 2021-02-11 00:00:00.123456789 | 11                    | 2021-11-21 | 21               |
        | 2021-11-27 | 27               | 2021-11-27 00:03:00 | 27                   | 2021-03-11 00:00:00.123456789 | 11                    | 2021-11-22 | 22               |
        | 2021-11-26 | 26               | 2021-11-26 00:04:00 | 26                   | 2021-04-11 00:00:00.123456789 | 11                    | 2021-11-23 | 23               |
        | 2021-11-25 | 25               | 2021-11-25 00:05:00 | 25                   | 2021-05-11 00:00:00.123456789 | 11                    | 2021-11-24 | 24               |
        | 2021-11-24 | 24               | 2021-11-24 00:06:00 | 24                   | 2021-06-11 00:00:00.123456789 | 11                    | 2021-11-25 | 25               |
        | 2021-11-23 | 23               | 2021-11-23 00:07:00 | 23                   | 2021-07-11 00:00:00.123456789 | 11                    | 2021-11-26 | 26               |
        | 2021-11-22 | 22               | 2021-11-22 00:08:00 | 22                   | 2021-08-11 00:00:00.123456789 | 11                    | 2021-11-27 | 27               |
        | 2021-11-21 | 21               | 2021-11-21 00:09:00 | 21                   | 2021-09-11 00:00:00.123456789 | 11                    | 2021-11-28 | 28               |
        | 2021-11-20 | 20               | 2021-11-20 00:10:00 | 20                   | 2021-10-11 00:00:00.123456789 | 11                    | 2021-11-29 | 29               |
        +------------+------------------+---------------------+----------------------+-------------------------------+-----------------------+------------+------------------+
        ```
        

## DAYOFWEEK

-   Syntax
    
    ```
    INT DAYOFWEEK(DATETIME|TIMESTAMP|DATE|STRING <date>)
    ```
    
-   Description
    
    Returns the day of the week in which a date value falls. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    -   The return value ranges from 1 to 7. The value 1 indicates Sunday, the value 2 indicates Monday, and the same rule applies to other values.
        
    
-   Examples
    
    ```
    -- The return value is 5. The return value indicates Thursday. 
    SELECT DAYOFWEEK('2009-07-30');
    ```
    

## DAYOFYEAR

-   Syntax
    
    ```
    INT DAYOFYEAR(DATETIME|TIMESTAMP|DATE|STRING <date>)
    ```
    
-   Description
    
    Returns an integer that represents the sequential day of the year. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    ```
    -- The return value is 100. 
    SELECT DAYOFYEAR('2016-04-09');
    ```
    

## EXTRACT

-   Syntax
    
    ```
    INT EXTRACT(<datepart> FROM DATE|DATETIME|TIMESTAMP <date>)
    ```
    
-   Description
    
    Extracts the date component specified by datepart from a date value specified by date. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    datepart
    
    Yes
    
    The value can be YEAR, MONTH, DAY, HOUR, MINUTE, or SECOND.
    
    date
    
    Yes
    
    A date value of the DATE, DATETIME, TIMESTAMP, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss.ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and must not contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of datepart is not YEAR, MONTH, DAY, HOUR, MINUTE, or SECOND, an error is returned.
        
    -   If the value of datepart is null, an error is returned.
        
    -   If the value of date is not of the DATE, DATETIME, TIMESTAMP, or STRING type or is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT  EXTRACT(YEAR FROM '2019-05-01 11:21:00') YEAR, 
                EXTRACT(MONTH FROM '2019-05-01 11:21:00') MONTH, 
                EXTRACT(DAY FROM '2019-05-01 11:21:00') DAY, 
                EXTRACT(HOUR FROM '2019-05-01 11:21:00') HOUR, 
                EXTRACT(MINUTE FROM '2019-05-01 11:21:00') MINUTE;
                
        -- The following result is returned: 
        +------+-------+------+------+--------+
        | year | month | day  | hour | minute |
        +------+-------+------+------+--------+
        | 2019 | 5     | 1    | 11   | 21     |
        +------+-------+------+------+--------+
        
        -- The return value is NULL. 
        SELECT  EXTRACT(YEAR FROM null);
        ```
        
    -   Examples of table data
        
        Extract the specified date components from date values in the timestamp1 column. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT timestamp1, 
               EXTRACT(YEAR FROM timestamp1) YEAR, 
               timestamp2, 
               EXTRACT(MONTH from timestamp2) MONTH 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-------------------------------+------+-------------------------------+-------+
        | timestamp1                    | year | timestamp2                    | month |
        +-------------------------------+------+-------------------------------+-------+
        | 2021-01-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-02-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-03-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-04-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-05-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-06-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-07-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-08-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-09-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        | 2021-10-11 00:00:00.123456789 | 2021 | 2021-10-11 00:00:00.123456789 | 10    |
        +-------------------------------+------+-------------------------------+-------+
        ```
        

## FROM\_UNIXTIME

-   Syntax
    
    ```
    DATETIME FROM_UNIXTIME(BIGINT <unixtime>)
    ```
    
-   Description
    
    Converts unixtime of the BIGINT type into a date value of the DATETIME type.
    
-   Parameters
    
    unixtime: required. A date value of the BIGINT type in the UNIX format. The value of this parameter is accurate to the second. Valid values: \[-62167305600, 253402387200\].
    
    **Note**
    
    If the input value is of the STRING, DOUBLE, or DECIMAL type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the BIGINT type before calculation.
    
-   Return value
    
    A value of the DATETIME type is returned. The return value is in the `yyyy-mm-dd hh:mi:ss` format. If the value of unixtime is null, null is returned.
    
    **Note**
    
    You can run the `set odps.sql.hive.compatible=true;` command to enable the Hive-compatible data type edition. In the Hive-compatible data type edition, take note of the following rules:
    
    -   If the input value is of the STRING type, a date value of the STRING type is returned.
        
    -   You can specify the second input parameter to determine the format of the return value. For example, you can specify the date and time format for the return value in the second input parameter to yyyy-MM-dd or YYYY-MM-dd. yyyy represents the calendar year and YYYY represents the year of the week. The year of the week may be inconsistent with the actual year. Exercise caution when you use the year of the week format.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 1973-11-30 05:33:09. 
        SELECT FROM_UNIXTIME(123456789);
        
        -- The return value is 1973-11-30 05:33:09. 
        SET odps.sql.type.system.odps2=false;
        SELECT FROM_UNIXTIME('123456789');
        
        -- The return value is NULL. 
        SELECT FROM_UNIXTIME(null);
        ```
        
    -   Examples of table data
        
        Convert values in the date4 column into date values. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT date4, FROM_UNIXTIME(date4) AS date4_from_unixtime FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------------+
        | date4      | date4_from_unixtime |
        +------------+---------------------+
        | 123456780  | 1973-11-30 05:33:00 |
        | 123456781  | 1973-11-30 05:33:01 |
        | 123456782  | 1973-11-30 05:33:02 |
        | 123456783  | 1973-11-30 05:33:03 |
        | 123456784  | 1973-11-30 05:33:04 |
        | 123456785  | 1973-11-30 05:33:05 |
        | 123456786  | 1973-11-30 05:33:06 |
        | 123456787  | 1973-11-30 05:33:07 |
        | 123456788  | 1973-11-30 05:33:08 |
        | 123456789  | 1973-11-30 05:33:09 |
        +------------+---------------------+
        ```
        

## FROM\_UTC\_TIMESTAMP

-   Syntax
    
    ```
    TIMESTAMP FROM_UTC_TIMESTAMP({any primitive type}*, STRING <timezone>)
    ```
    
-   Description
    
    Returns a timestamp that is converted from Coordinated Universal Time (UTC) into a specified time zone. This function is an additional function of MaxCompute V2.0.
    
    **Important**
    
    The return value of the FROM\_UTC\_TIMESTAMP function is also affected by the value of `odps.sql.timezone` that you configure for your project. If you configure `odps.sql.timezone=Asia/Shanghai`, the UTC+8 time zone is used, which is 8 hours ahead of UTC. In this case, 8 hours are added to the calculation result of the FROM\_UTC\_TIMESTAMP function. For example, the `FROM_UTC_TIMESTAMP(0, 'Asia/Shanghai')` function converts a timestamp with UTC+0 into a timestamp with Beijing time (UTC+08:00), and the calculation result is `0 + 8 x 3600 = 28800`. The `odps.sql.timezone=Asia/Shanghai` configuration requires another 8-hour offset. As a result, the return value is `1970-01-01 16:00:00`.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    {any primitive type}\*
    
    Yes
    
    A timestamp of the TIMESTAMP, DATETIME, TINYINT, SMALLINT, INT, or BIGINT type. If the value is of the TINYINT, SMALLINT, INT, or BIGINT type, the time unit is accurate to the millisecond.
    
    timezone
    
    Yes
    
    The new time zone.
    
    **Note**
    
    You can search for the time zone list by using a search engine.
    
-   Return value
    
    A value of the TIMESTAMP type is returned. The return value is in the `yyyy-mm-dd hh:mi:ss.ff3` format. The return value varies based on the following rules:
    
    -   If the value of {any primitive type}\* is not of the TIMESTAMP, DATETIME, TINYINT, SMALLINT, INT, or BIGINT type, an error is returned.
        
    -   If the value of {any primitive type}\* is null, an error is returned.
        
    -   If the value of timezone is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The time unit of the input value is accurate to the millisecond and the return value is 2017-08-01 04:24:00.0. 
        SELECT FROM_UTC_TIMESTAMP(1501557840000, 'PST'); 
        
        -- The return value is 1970-01-30 08:00:00.0. 
        SELECT FROM_UTC_TIMESTAMP('1970-01-30 16:00:00','PST'); 
        
        -- The return value is 1970-01-29 16:00:00.0. 
        SELECT FROM_UTC_TIMESTAMP('1970-01-30','PST'); 
        
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. The return value is 2011-12-25 17:00:00:00.123. 
        SET odps.sql.type.system.odps2=true;
        SELECT FROM_UTC_TIMESTAMP(timestamp '2011-12-25 09:00:00.123456', 'Asia/Shanghai');
        
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. The return value is 2011-12-25 01:55:00.0. 
        SET odps.sql.type.system.odps2=true;
        SELECT FROM_UTC_TIMESTAMP(timestamp '2011-12-25 06:55:00', 'America/Toronto');
        
        -- The return value is NULL. 
        SELECT FROM_UTC_TIMESTAMP('1970-01-30',null);
        ```
        
    -   Examples of table data
        
        Convert date values in the datetime1 and timestamp1 columns into timestamps in a specified time zone. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT datetime1, 
               FROM_UTC_TIMESTAMP(datetime1,'PST') pst, 
               timestamp1, 
               FROM_UTC_TIMESTAMP(timestamp1,'Asia/Shanghai') asia 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+---------------------+-------------------------------+-------------------------------+
        | datetime1           | pst                 | timestamp1                    | asia                          |
        +---------------------+---------------------+-------------------------------+-------------------------------+
        | 2021-11-29 00:01:00 | 2021-11-28 16:01:00 | 2021-01-11 00:00:00.123456789 | 2021-01-11 08:00:00.123456789 |
        | 2021-11-28 00:02:00 | 2021-11-27 16:02:00 | 2021-02-11 00:00:00.123456789 | 2021-02-11 08:00:00.123456789 |
        | 2021-11-27 00:03:00 | 2021-11-26 16:03:00 | 2021-03-11 00:00:00.123456789 | 2021-03-11 08:00:00.123456789 |
        | 2021-11-26 00:04:00 | 2021-11-25 16:04:00 | 2021-04-11 00:00:00.123456789 | 2021-04-11 08:00:00.123456789 |
        | 2021-11-25 00:05:00 | 2021-11-24 16:05:00 | 2021-05-11 00:00:00.123456789 | 2021-05-11 08:00:00.123456789 |
        | 2021-11-24 00:06:00 | 2021-11-23 16:06:00 | 2021-06-11 00:00:00.123456789 | 2021-06-11 08:00:00.123456789 |
        | 2021-11-23 00:07:00 | 2021-11-22 16:07:00 | 2021-07-11 00:00:00.123456789 | 2021-07-11 08:00:00.123456789 |
        | 2021-11-22 00:08:00 | 2021-11-21 16:08:00 | 2021-08-11 00:00:00.123456789 | 2021-08-11 08:00:00.123456789 |
        | 2021-11-21 00:09:00 | 2021-11-20 16:09:00 | 2021-09-11 00:00:00.123456789 | 2021-09-11 08:00:00.123456789 |
        | 2021-11-20 00:10:00 | 2021-11-19 16:10:00 | 2021-10-11 00:00:00.123456789 | 2021-10-11 08:00:00.123456789 |
        +---------------------+---------------------+-------------------------------+-------------------------------+
        ```
        

## GETDATE

-   Syntax
    
    ```
    DATETIME GETDATE()
    ```
    
-   Description
    
    Returns the current system time as a date value. MaxCompute uses UTC+8 as the standard time zone.
    
-   Return value
    
    The current date and time are returned, which are of the DATETIME type.
    
    **Note**
    
    In MaxCompute SQL, `GETDATE` always returns a fixed value. The return value is an arbitrary time during the execution of the MaxCompute SQL task. The time is accurate to the second. If you enable the MaxCompute V2.0 data type edition, the time is accurate to the millisecond.
    

## HOUR

-   Syntax
    
    ```
    INT HOUR(DATETIME|TIMESTAMP|STRING <date>)
    ```
    
-   Description
    
    Returns the hour component of a date value.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, or STRING type. The date value is in the `yyyy-mm-dd hh:mi:ss` or `yyyy-mm-dd hh:mi:ss.ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and must not contain extra strings. This function is an additional function of MaxCompute V2.0.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 12. 
        SELECT HOUR('2014-09-01 12:00:00');
        
        -- The return value is 12. 
        SELECT HOUR('12:00:00');
        
        -- The return value is NULL. 
        SELECT HOUR('20140901120000');
        
        -- The return value is NULL. 
        SELECT HOUR(null);
        ```
        
    -   Examples of table data
        
        Obtain the hour components of date values in the datetime1 and timestamp1 columns. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statements:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT datetime1, 
               HOUR(datetime1) AS datetime1_hour, 
               timestamp1, 
               HOUR(timestamp1) AS timestamp1_hour 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+----------------+-------------------------------+-----------------+
        | datetime1           | datetime1_hour | timestamp1                    | timestamp1_hour |
        +---------------------+----------------+-------------------------------+-----------------+
        | 2021-11-29 00:01:00 | 0              | 2021-01-11 00:00:00.123456789 | 0               |
        | 2021-11-28 00:02:00 | 0              | 2021-02-11 00:00:00.123456789 | 0               |
        | 2021-11-27 00:03:00 | 0              | 2021-03-11 00:00:00.123456789 | 0               |
        | 2021-11-26 00:04:00 | 0              | 2021-04-11 00:00:00.123456789 | 0               |
        | 2021-11-25 00:05:00 | 0              | 2021-05-11 00:00:00.123456789 | 0               |
        | 2021-11-24 00:06:00 | 0              | 2021-06-11 00:00:00.123456789 | 0               |
        | 2021-11-23 00:07:00 | 0              | 2021-07-11 00:00:00.123456789 | 0               |
        | 2021-11-22 00:08:00 | 0              | 2021-08-11 00:00:00.123456789 | 0               |
        | 2021-11-21 00:09:00 | 0              | 2021-09-11 00:00:00.123456789 | 0               |
        | 2021-11-20 00:10:00 | 0              | 2021-10-11 00:00:00.123456789 | 0               |
        +---------------------+----------------+-------------------------------+-----------------+
        ```
        

## ISDATE

-   Syntax
    
    ```
    BOOLEAN ISDATE(STRING <date>, STRING <format>)
    ```
    
-   Description
    
    Determines whether a date string can be converted to a date value in a specified format. If the date string can be converted into a date value in the specified format, true is returned. Otherwise, false is returned.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    A value of the STRING type. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME type, the value is implicitly converted to a value of the STRING type before calculation.
    
    format
    
    Yes
    
    A constant of the STRING type. This parameter does not support EDTF. If redundant format strings exist in format, this function converts the date string that corresponds to the first format string into a date value. The rest strings are considered delimiters. For example, `isdate("1234-yyyy", "yyyy-yyyy")` returns true.
    
-   Return value
    
    A value of the BOOLEAN type is returned. If the value of date or format is null, null is returned.
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is true. 
        SELECT ISDATE('2021-10-11','yyyy-mm-dd');
        
        -- The return value is false. 
        SET odps.sql.type.system.odps2=false;
        SELECT ISDATE(1678952314,'yyyy-mm-dd');
        ```
        
    -   Examples of table data
        
        Determine whether date strings in the date3 column can be converted into date values in a specified format. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT date3, ISDATE(date3,'yyyy-mm-dd') AS date3_isdate FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+--------------+
        | date3      | date3_isdate |
        +------------+--------------+
        | 2021-11-20 | true         |
        | 2021-11-21 | true         |
        | 2021-11-22 | true         |
        | 2021-11-23 | true         |
        | 2021-11-24 | true         |
        | 2021-11-25 | true         |
        | 2021-11-26 | true         |
        | 2021-11-27 | true         |
        | 2021-11-28 | true         |
        | 2021-11-29 | true         |
        +------------+--------------+
        ```
        

## LAST\_DAY

-   Syntax
    
    ```
    STRING LAST_DAY(DATE|DATETIME|TIMESTAMP|STRING <date>)
    ```
    
-   Description
    
    Returns the last day of the month in which a date value falls. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATE, DATETIME, TIMESTAMP, or STRING type. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and must not contain extra strings.
    
-   Return value
    
    A value of the STRING type is returned. The return value is in the `yyyy-mm-dd` format. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATE, DATETIME, TIMESTAMP, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, an error is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2017-03-31. 
        SELECT LAST_DAY('2017-03-04');
        
        -- The return value is 2017-07-31. 
        SELECT LAST_DAY('2017-07-04 11:40:00');
        
        -- The return value is NULL. 
        SELECT LAST_DAY('20170304');
        ```
        
    -   Examples of table data
        
        Obtain the last day of the month in which each date value in the date1, datetime1, timestamp1, and date3 columns falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true; 
        SELECT date1, 
               LAST_DAY(date1) AS date1_lastday, 
               datetime1, 
               LAST_DAY(datetime1) AS datetime1_lastday, 
               timestamp1, 
               LAST_DAY(timestamp1) AS timestamp1_lastday, 
               date3, 
               LAST_DAY(date3) AS date3_lastday 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------+---------------------+-------------------+-------------------------------+--------------------+------------+---------------+
        | date1      | date1_lastday | datetime1           | datetime1_lastday | timestamp1                    | timestamp1_lastday | date3      | date3_lastday |
        +------------+---------------+---------------------+-------------------+-------------------------------+--------------------+------------+---------------+
        | 2021-11-29 | 2021-11-30    | 2021-11-29 00:01:00 | 2021-11-30        | 2021-01-11 00:00:00.123456789 | 2021-01-31         | 2021-11-20 | 2021-11-30    |
        | 2021-11-28 | 2021-11-30    | 2021-11-28 00:02:00 | 2021-11-30        | 2021-02-11 00:00:00.123456789 | 2021-02-28         | 2021-11-21 | 2021-11-30    |
        | 2021-11-27 | 2021-11-30    | 2021-11-27 00:03:00 | 2021-11-30        | 2021-03-11 00:00:00.123456789 | 2021-03-31         | 2021-11-22 | 2021-11-30    |
        | 2021-11-26 | 2021-11-30    | 2021-11-26 00:04:00 | 2021-11-30        | 2021-04-11 00:00:00.123456789 | 2021-04-30         | 2021-11-23 | 2021-11-30    |
        | 2021-11-25 | 2021-11-30    | 2021-11-25 00:05:00 | 2021-11-30        | 2021-05-11 00:00:00.123456789 | 2021-05-31         | 2021-11-24 | 2021-11-30    |
        | 2021-11-24 | 2021-11-30    | 2021-11-24 00:06:00 | 2021-11-30        | 2021-06-11 00:00:00.123456789 | 2021-06-30         | 2021-11-25 | 2021-11-30    |
        | 2021-11-23 | 2021-11-30    | 2021-11-23 00:07:00 | 2021-11-30        | 2021-07-11 00:00:00.123456789 | 2021-07-31         | 2021-11-26 | 2021-11-30    |
        | 2021-11-22 | 2021-11-30    | 2021-11-22 00:08:00 | 2021-11-30        | 2021-08-11 00:00:00.123456789 | 2021-08-31         | 2021-11-27 | 2021-11-30    |
        | 2021-11-21 | 2021-11-30    | 2021-11-21 00:09:00 | 2021-11-30        | 2021-09-11 00:00:00.123456789 | 2021-09-30         | 2021-11-28 | 2021-11-30    |
        | 2021-11-20 | 2021-11-30    | 2021-11-20 00:10:00 | 2021-11-30        | 2021-10-11 00:00:00.123456789 | 2021-10-31         | 2021-11-29 | 2021-11-30    |
        +------------+---------------+---------------------+-------------------+-------------------------------+--------------------+------------+---------------+
        ```
        

## LASTDAY

-   Syntax
    
    ```
    DATETIME LASTDAY(DATETIME <date>)
    ```
    
-   Description
    
    Returns the last day of the month in which a date value falls. Only the day component is truncated. The hour, minute, and second components are expressed as `00:00:00`.
    
-   Parameters
    
    date: a date value of the DATETIME type. The date value is in the `yyyy-mm-dd hh:mi:ss` format. If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the DATETIME type before calculation.
    
-   Return value
    
    A value of the DATETIME type is returned. The return value is in the `yyyy-mm-dd hh:mi:ss` format. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME or STRING type or the format does not meet the requirements, an error is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2013-06-30 00:00:00. 
        SELECT LASTDAY (DATETIME '2013-06-08 01:10:00');
        
        -- The return value is 2013-06-30 00:00:00. 
        SET odps.sql.type.system.odps2=false;
        SELECT LASTDAY ('2013-06-08 01:10:00');
        
        -- The return value is NULL. 
        SELECT LASTDAY (null);
        ```
        
    -   Examples of table data
        
        Obtain the last day of the month in which each date value in the datetime1 column falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT datetime1, LASTDAY(datetime1) AS datetime1_lastday FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+---------------------+
        | datetime1           | datetime1_lastday   |
        +---------------------+---------------------+
        | 2021-11-29 00:01:00 | 2021-11-30 00:00:00 |
        | 2021-11-28 00:02:00 | 2021-11-30 00:00:00 |
        | 2021-11-27 00:03:00 | 2021-11-30 00:00:00 |
        | 2021-11-26 00:04:00 | 2021-11-30 00:00:00 |
        | 2021-11-25 00:05:00 | 2021-11-30 00:00:00 |
        | 2021-11-24 00:06:00 | 2021-11-30 00:00:00 |
        | 2021-11-23 00:07:00 | 2021-11-30 00:00:00 |
        | 2021-11-22 00:08:00 | 2021-11-30 00:00:00 |
        | 2021-11-21 00:09:00 | 2021-11-30 00:00:00 |
        | 2021-11-20 00:10:00 | 2021-11-30 00:00:00 |
        +---------------------+---------------------+
        ```
        

## MINUTE

-   Syntax
    
    ```
    INT MINUTE(DATETIME|TIMESTAMP|STRING <date>)
    ```
    
-   Description
    
    Returns the minute component of a date value. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, or STRING type. The date value is in the `yyyy-mm-dd hh:mi:ss` or `yyyy-mm-dd hh:mi:ss.ff3` format.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 30.  
        SELECT MINUTE('2014-09-01 12:30:00'); 
        
        -- The return value is 30. 
        SELECT MINUTE('12:30:00');
        
        -- The return value is NULL. 
        SELECT MINUTE('20140901120000');
        
        -- The return value is NULL. 
        SELECT MINUTE(null);
        ```
        
    -   Examples of table data
        
        Obtain the minute components of date values in the datetime1 and timestamp1 columns. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT datetime1, 
               MINUTE(datetime1) AS datetime1_minute, 
               timestamp1, 
               MINUTE(timestamp1) AS timestamp1_minute 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+------------------+-------------------------------+-------------------+
        | datetime1           | datetime1_minute | timestamp1                    | timestamp1_minute |
        +---------------------+------------------+-------------------------------+-------------------+
        | 2021-11-29 00:01:00 | 1                | 2021-01-11 00:00:00.123456789 | 0                 |
        | 2021-11-28 00:02:00 | 2                | 2021-02-11 00:00:00.123456789 | 0                 |
        | 2021-11-27 00:03:00 | 3                | 2021-03-11 00:00:00.123456789 | 0                 |
        | 2021-11-26 00:04:00 | 4                | 2021-04-11 00:00:00.123456789 | 0                 |
        | 2021-11-25 00:05:00 | 5                | 2021-05-11 00:00:00.123456789 | 0                 |
        | 2021-11-24 00:06:00 | 6                | 2021-06-11 00:00:00.123456789 | 0                 |
        | 2021-11-23 00:07:00 | 7                | 2021-07-11 00:00:00.123456789 | 0                 |
        | 2021-11-22 00:08:00 | 8                | 2021-08-11 00:00:00.123456789 | 0                 |
        | 2021-11-21 00:09:00 | 9                | 2021-09-11 00:00:00.123456789 | 0                 |
        | 2021-11-20 00:10:00 | 10               | 2021-10-11 00:00:00.123456789 | 0                 |
        +---------------------+------------------+-------------------------------+-------------------+
        ```
        

## MONTH

-   Syntax
    
    ```
    INT MONTH(DATETIME|TIMESTAMP|DATE|STRING <date>) 
    ```
    
-   Description
    
    Returns the month in which a date value falls. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 9.  
        SELECT MONTH('2014-09-01');
        
        -- The return value is NULL. 
        SELECT MONTH('20140901');
        
        -- The return value is NULL. 
        SELECT MONTH(null);
        ```
        
    -   Examples of table data
        
        Obtain the month component of each date value in the date1, datetime1, timestamp1, and date3 columns. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement.  
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               MONTH(date1) AS date1_month, 
               datetime1, 
               MONTH(datetime1) AS datetime1_month, 
               timestamp1, 
               MONTH(timestamp1) AS timestamp1_month, 
               date3, 
               MONTH(date3) AS date3_month 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+-------------+---------------------+-----------------+-------------------------------+------------------+------------+-------------+
        | date1      | date1_month | datetime1           | datetime1_month | timestamp1                    | timestamp1_month | date3      | date3_month |
        +------------+-------------+---------------------+-----------------+-------------------------------+------------------+------------+-------------+
        | 2021-11-29 | 11          | 2021-11-29 00:01:00 | 11              | 2021-01-11 00:00:00.123456789 | 1                | 2021-11-20 | 11          |
        | 2021-11-28 | 11          | 2021-11-28 00:02:00 | 11              | 2021-02-11 00:00:00.123456789 | 2                | 2021-11-21 | 11          |
        | 2021-11-27 | 11          | 2021-11-27 00:03:00 | 11              | 2021-03-11 00:00:00.123456789 | 3                | 2021-11-22 | 11          |
        | 2021-11-26 | 11          | 2021-11-26 00:04:00 | 11              | 2021-04-11 00:00:00.123456789 | 4                | 2021-11-23 | 11          |
        | 2021-11-25 | 11          | 2021-11-25 00:05:00 | 11              | 2021-05-11 00:00:00.123456789 | 5                | 2021-11-24 | 11          |
        | 2021-11-24 | 11          | 2021-11-24 00:06:00 | 11              | 2021-06-11 00:00:00.123456789 | 6                | 2021-11-25 | 11          |
        | 2021-11-23 | 11          | 2021-11-23 00:07:00 | 11              | 2021-07-11 00:00:00.123456789 | 7                | 2021-11-26 | 11          |
        | 2021-11-22 | 11          | 2021-11-22 00:08:00 | 11              | 2021-08-11 00:00:00.123456789 | 8                | 2021-11-27 | 11          |
        | 2021-11-21 | 11          | 2021-11-21 00:09:00 | 11              | 2021-09-11 00:00:00.123456789 | 9                | 2021-11-28 | 11          |
        | 2021-11-20 | 11          | 2021-11-20 00:10:00 | 11              | 2021-10-11 00:00:00.123456789 | 10               | 2021-11-29 | 11          |
        +------------+-------------+---------------------+-----------------+-------------------------------+------------------+------------+-------------+
        ```
        

## MONTHS\_BETWEEN

-   Syntax
    
    ```
    DOUBLE MONTHS_BETWEEN(DATETIME|TIMESTAMP|DATE|STRING <date1>, DATETIME|TIMESTAMP|DATE|STRING <date2>) 
    ```
    
-   Description
    
    Returns the number of months between date1 and date2. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date1 and date2: required. Values of the DATETIME, TIMESTAMP, DATE, or STRING type. The input values are in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, `yyyy-mm-dd hh:mi:ss.ff3` format. If the input values are of the STRING type, the values must include at least the `yyyy-mm-dd` part and must not contain extra strings.
    
-   Return value
    
    A value of the DOUBLE type is returned. The return value varies based on the following rules:
    
    -   If date1 is later than date2, a positive value is returned. If date2 is later than date1, a negative value is returned.
        
    -   If date1 and date2 correspond to the last days of two months, the return value is an integer that represents the number of months. Otherwise, the return value is calculated by using the following formula: (date1 - date2)/31.
        
    -   If the value of date1 or date2 is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 3.9495967741935485.  
        SELECT MONTHS_BETWEEN('1997-02-28 10:30:00', '1996-10-30');
        
        -- The return value is -3.9495967741935485. 
        SELECT MONTHS_BETWEEN('1996-10-30','1997-02-28 10:30:00' );
        
        -- The return value is -3.0. 
        SELECT MONTHS_BETWEEN('1996-09-30','1996-12-31');
        
        -- The return value is NULL. 
        SELECT MONTHS_BETWEEN('1996-09-30', null);
        ```
        
    -   Examples of table data
        
        Calculate the number of months between date values in the timestamp1 and timestamp2 columns. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true; 
        SELECT timestamp1, timestamp2, MONTHS_BETWEEN(timestamp1, timestamp2) FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +-------------------------------+-------------------------------+------------+
        | timestamp1                    | timestamp2                    | _c2        |
        +-------------------------------+-------------------------------+------------+
        | 2021-01-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -9.0       |
        | 2021-02-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -8.0       |
        | 2021-03-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -7.0       |
        | 2021-04-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -6.0       |
        | 2021-05-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -5.0       |
        | 2021-06-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -4.0       |
        | 2021-07-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -3.0       |
        | 2021-08-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -2.0       |
        | 2021-09-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | -1.0       |
        | 2021-10-11 00:00:00.123456789 | 2021-10-11 00:00:00.123456789 | 0.0        |
        +------------+------------+------------+
        ```
        

## NEXT\_DAY

-   Syntax
    
    ```
    STRING NEXT_DAY(TIMESTAMP|DATE|DATETIME|STRING <startdate>, STRING <week>)
    ```
    
-   Description
    
    Returns the date of the first day that is later than startdate and matches the week value. The date of the specified day in the next week is returned. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    startdate
    
    Yes
    
    A date value of the DATE, DATETIME, TIMESTAMP, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss.ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and must not contain extra strings.
    
    week
    
    Yes
    
    A value of the STRING type. The value of this parameter can be the first two or three letters of a weekday or the full name of a weekday, such as MO, TUE, or FRIDAY.
    
-   Return value
    
    A value of the STRING type is returned. The return value is in the `yyyy-mm-dd` format. The return value varies based on the following rules:
    
    -   If the value of date is not of the TIMESTAMP, DATE, DATETIME, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, an error is returned.
        
    -   If the value of week is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2017-08-08.  
        SELECT NEXT_DAY('2017-08-01','TU');
        
        -- The return value is 2017-08-08. 
        SELECT NEXT_DAY('2017-08-01 23:34:00', 'TU');
        
        -- The return value is NULL. 
        SELECT NEXT_DAY('20170801','TU');
        
        -- The return value is NULL. 
        SELECT NEXT_DAY('2017-08-01 23:34:00', null);
        ```
        
    -   Examples of table data
        
        Obtain the date of the day in the next week to which each date value in the date1, datetime1, timestamp1, and date3 columns corresponds. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement.  
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               NEXT_DAY(date1,'MON') AS date1_next_day, 
               datetime1, 
               NEXT_DAY(datetime1,'TUE') AS datetime1_next_day, 
               timestamp1, 
               NEXT_DAY(timestamp1,'WED') AS timestamp1_next_day, 
               date3, 
               NEXT_DAY(date3,'THU') AS date3_next_day 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+----------------+---------------------+--------------------+-------------------------------+---------------------+------------+----------------+
        | date1      | date1_next_day | datetime1           | datetime1_next_day | timestamp1                    | timestamp1_next_day | date3      | date3_next_day |
        +------------+----------------+---------------------+--------------------+-------------------------------+---------------------+------------+----------------+
        | 2021-11-29 | 2021-12-06     | 2021-11-29 00:01:00 | 2021-11-30         | 2021-01-11 00:00:00.123456789 | 2021-01-13          | 2021-11-20 | 2021-11-25     |
        | 2021-11-28 | 2021-11-29     | 2021-11-28 00:02:00 | 2021-11-30         | 2021-02-11 00:00:00.123456789 | 2021-02-17          | 2021-11-21 | 2021-11-25     |
        | 2021-11-27 | 2021-11-29     | 2021-11-27 00:03:00 | 2021-11-30         | 2021-03-11 00:00:00.123456789 | 2021-03-17          | 2021-11-22 | 2021-11-25     |
        | 2021-11-26 | 2021-11-29     | 2021-11-26 00:04:00 | 2021-11-30         | 2021-04-11 00:00:00.123456789 | 2021-04-14          | 2021-11-23 | 2021-11-25     |
        | 2021-11-25 | 2021-11-29     | 2021-11-25 00:05:00 | 2021-11-30         | 2021-05-11 00:00:00.123456789 | 2021-05-12          | 2021-11-24 | 2021-11-25     |
        | 2021-11-24 | 2021-11-29     | 2021-11-24 00:06:00 | 2021-11-30         | 2021-06-11 00:00:00.123456789 | 2021-06-16          | 2021-11-25 | 2021-12-02     |
        | 2021-11-23 | 2021-11-29     | 2021-11-23 00:07:00 | 2021-11-30         | 2021-07-11 00:00:00.123456789 | 2021-07-14          | 2021-11-26 | 2021-12-02     |
        | 2021-11-22 | 2021-11-29     | 2021-11-22 00:08:00 | 2021-11-23         | 2021-08-11 00:00:00.123456789 | 2021-08-18          | 2021-11-27 | 2021-12-02     |
        | 2021-11-21 | 2021-11-22     | 2021-11-21 00:09:00 | 2021-11-23         | 2021-09-11 00:00:00.123456789 | 2021-09-15          | 2021-11-28 | 2021-12-02     |
        | 2021-11-20 | 2021-11-22     | 2021-11-20 00:10:00 | 2021-11-23         | 2021-10-11 00:00:00.123456789 | 2021-10-13          | 2021-11-29 | 2021-12-02     |
        +------------+----------------+---------------------+--------------------+-------------------------------+---------------------+------------+----------------+
        ```
        

## **NOW**

-   Syntax
    
    ```
    DATETIME NOW()
    ```
    
-   Description
    
    Returns the current system date and time.
    
-   Return value
    
    A value of the DATETIME type is returned. The return value is in the `yyyy-mm-dd hh:mi:ss.SSS` format.
    
-   Examples
    
    -   No format is specified. The millisecond part in the returned value may include 1, 2, or 3 bits.
        
        ```
        SELECT NOW(); 
        ```
        
        The following result is returned.
        
        ```
        +------+
        | _c0  |
        +------+
        | 2023-06-13 10:53:24.967 |
        +------+
        ```
        
    -   The time format is specified.
        
        ```
        SELECT  DATE_FORMAT(NOW(),'yyyy-MM-dd hh:mi:ss.SSS'); 
        ```
        
        The following result is returned.
        
        ```
        +-----+
        | _c0 |
        +-----+
        | 2023-06-13 10:53:53.899 |
        +-----+
        ```
        
    

## QUARTER

-   Syntax
    
    ```
    INT QUARTER(DATETIME|TIMESTAMP|DATE|STRING <date>) 
    ```
    
-   Description
    
    Returns the quarter in which a date value falls. Valid values: 1 to 4. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 4.  
        SELECT QUARTER('1970-11-12 10:00:00');
        
        -- The return value is 4. 
        SELECT QUARTER('1970-11-12');
        
        -- The return value is NULL. 
        SELECT QUARTER(null);
        ```
        
    -   Examples of table data
        
        Obtain the quarter in which each date value in the date1, datetime1, timestamp1, and date3 columns falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement.  
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               QUARTER(date1) AS date1_quarter, 
               datetime1, 
               QUARTER(datetime1) AS datetime1_quarter, 
               timestamp1, 
               QUARTER(timestamp1) AS timestamp1_quarter, 
               date3, 
               QUARTER(date3) AS date3_quarter 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------+---------------------+-------------------+-------------------------------+--------------------+------------+---------------+
        | date1      | date1_quarter | datetime1           | datetime1_quarter | timestamp1                    | timestamp1_quarter | date3      | date3_quarter |
        +------------+---------------+---------------------+-------------------+-------------------------------+--------------------+------------+---------------+
        | 2021-11-29 | 4             | 2021-11-29 00:01:00 | 4                 | 2021-01-11 00:00:00.123456789 | 1                  | 2021-11-20 | 4             |
        | 2021-11-28 | 4             | 2021-11-28 00:02:00 | 4                 | 2021-02-11 00:00:00.123456789 | 1                  | 2021-11-21 | 4             |
        | 2021-11-27 | 4             | 2021-11-27 00:03:00 | 4                 | 2021-03-11 00:00:00.123456789 | 1                  | 2021-11-22 | 4             |
        | 2021-11-26 | 4             | 2021-11-26 00:04:00 | 4                 | 2021-04-11 00:00:00.123456789 | 2                  | 2021-11-23 | 4             |
        | 2021-11-25 | 4             | 2021-11-25 00:05:00 | 4                 | 2021-05-11 00:00:00.123456789 | 2                  | 2021-11-24 | 4             |
        | 2021-11-24 | 4             | 2021-11-24 00:06:00 | 4                 | 2021-06-11 00:00:00.123456789 | 2                  | 2021-11-25 | 4             |
        | 2021-11-23 | 4             | 2021-11-23 00:07:00 | 4                 | 2021-07-11 00:00:00.123456789 | 3                  | 2021-11-26 | 4             |
        | 2021-11-22 | 4             | 2021-11-22 00:08:00 | 4                 | 2021-08-11 00:00:00.123456789 | 3                  | 2021-11-27 | 4             |
        | 2021-11-21 | 4             | 2021-11-21 00:09:00 | 4                 | 2021-09-11 00:00:00.123456789 | 3                  | 2021-11-28 | 4             |
        | 2021-11-20 | 4             | 2021-11-20 00:10:00 | 4                 | 2021-10-11 00:00:00.123456789 | 4                  | 2021-11-29 | 4             |
        +------------+---------------+---------------------+-------------------+-------------------------------+--------------------+------------+---------------+
        ```
        

## SECOND

-   Syntax
    
    ```
    INT SECOND(DATETIME|TIMESTAMP|STRING <date>)
    ```
    
-   Description
    
    Returns the second component of a date value. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, or STRING type. The date value is in the `yyyy-mm-dd hh:mi:ss` or `yyyy-mm-dd hh:mi:ss.ff3` format.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 45.  
        SELECT SECOND('2014-09-01 12:30:45');
        
        -- The return value is 45. 
        SELECT SECOND('12:30:45');
        
        -- The return value is NULL. 
        SELECT SECOND('20140901123045');
        
        -- The return value is NULL. 
        SELECT SECOND(null);
        ```
        
    -   Examples of table data
        
        Obtain the second components of date values in the datetime1 and timestamp1 columns. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement.  
        SET odps.sql.type.system.odps2=true;
        SELECT datetime1, 
               SECOND(datetime1) AS datetime1_second, 
               timestamp1, 
               SECOND(timestamp1) AS timestamp1_second 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+------------------+-------------------------------+-------------------+
        | datetime1           | datetime1_second | timestamp1                    | timestamp1_second |
        +---------------------+------------------+-------------------------------+-------------------+
        | 2021-11-29 00:01:00 | 0                | 2021-01-11 00:00:00.123456789 | 0                 |
        | 2021-11-28 00:02:00 | 0                | 2021-02-11 00:00:00.123456789 | 0                 |
        | 2021-11-27 00:03:00 | 0                | 2021-03-11 00:00:00.123456789 | 0                 |
        | 2021-11-26 00:04:00 | 0                | 2021-04-11 00:00:00.123456789 | 0                 |
        | 2021-11-25 00:05:00 | 0                | 2021-05-11 00:00:00.123456789 | 0                 |
        | 2021-11-24 00:06:00 | 0                | 2021-06-11 00:00:00.123456789 | 0                 |
        | 2021-11-23 00:07:00 | 0                | 2021-07-11 00:00:00.123456789 | 0                 |
        | 2021-11-22 00:08:00 | 0                | 2021-08-11 00:00:00.123456789 | 0                 |
        | 2021-11-21 00:09:00 | 0                | 2021-09-11 00:00:00.123456789 | 0                 |
        | 2021-11-20 00:10:00 | 0                | 2021-10-11 00:00:00.123456789 | 0                 |
        +---------------------+------------------+-------------------------------+-------------------+
        ```
        

## TO\_CHAR

-   Syntax
    
    ```
    STRING TO_CHAR(DATETIME <date>, STRING <format>) 
    ```
    
-   Description
    
    Converts a date value of the DATETIME type into a string in a specified format.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    A date value of the DATETIME type. The date value is in the `yyyy-mm-dd hh:mi:ss` format. If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the DATETIME type before calculation.
    
    format
    
    Yes
    
    A constant of the STRING type. In the value of format, the date format part is replaced by the related data and the other characters remain unchanged in the output.
    
-   Return value
    
    A value of the STRING type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME or STRING type, an error is returned.
        
    -   If the value of date is null, an error is returned.
        
    -   If the value of format is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        -   Example 1
            
            ```
            --If the MaxCompute client runs in Windows, Chinese characters may not be properly displayed in the returned result. 
            SELECT TO_CHAR(DATETIME '2010-12-03 00:00:00','Alibaba Finance yyyy-mm*dd');
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | Alibaba Finance 2010-12*03 |
            +------------+
            ```
            
        -   Example 2
            
            ```
            SELECT TO_CHAR(DATETIME '2008-07-18 00:00:00','yyyymmdd'); 
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 20080718   |
            +------------+
            ```
            
        -   Example 3
            
            ```
            SET odps.sql.type.system.odps2=false; 
            SELECT TO_CHAR('2008-07-18 00:00:00', 'yyyymmdd');
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | 20080718   |
            +------------+
            ```
            
        -   Example 4
            
            ```
            -- 'Alibaba 2010-12*3' cannot be converted into a standard date value, and an error is returned.  
            SELECT TO_CHAR(DATETIME 'Alibaba 2010-12*3', 'Alibaba yyyy-mm*dd');
            ```
            
        -   Example 5
            
            ```
            --'20102401' is not a standard date value, and an error is returned.  
            SELECT TO_CHAR(DATETIME '20102401', 'yyyy');
            ```
            
        -   Example 6
            
            ```
            SELECT TO_CHAR(DATETIME '2010-12-03 00:00:00', null); 
            ```
            
            The following result is returned.
            
            ```
            +------------+
            | _c0        |
            +------------+
            | NULL       |
            +------------+
            ```
            
    -   Examples of table data
        
        Convert date values in the datetime1 column into strings in a specified format. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT  datetime1, TO_CHAR(datetime1,'yyyy-mm-dd') AS datetime1_to_char
        FROM mf_date_fun_t; 
        ```
        
        The following result is returned.
        
        ```
        +---------------------+-------------------+
        | datetime1           | datetime1_to_char |
        +---------------------+-------------------+
        | 2021-11-29 00:01:00 | 2021-11-29        |
        | 2021-11-28 00:02:00 | 2021-11-28        |
        | 2021-11-27 00:03:00 | 2021-11-27        |
        | 2021-11-26 00:04:00 | 2021-11-26        |
        | 2021-11-25 00:05:00 | 2021-11-25        |
        | 2021-11-24 00:06:00 | 2021-11-24        |
        | 2021-11-23 00:07:00 | 2021-11-23        |
        | 2021-11-22 00:08:00 | 2021-11-22        |
        | 2021-11-21 00:09:00 | 2021-11-21        |
        | 2021-11-20 00:10:00 | 2021-11-20        |
        +---------------------+-------------------+
        ```
        

## TO\_DATE

-   Syntax
    
    ```
    DATETIME|DATE TO_DATE(STRING <date>[, STRING <format>])
    ```
    
-   Description
    
    Converts a string into a date value in a specified format.
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    date
    
    Yes
    
    A date value of the STRING type. This parameter specifies the date string that you want to convert. If the input value is of the BIGINT, DOUBLE, DECIMAL, or DATETIME data type, the value is implicitly converted into a value of the STRING type before calculation. The date string can also be in the ISO 8601 format.
    
    format
    
    No
    
    -   A constant of the STRING type. This parameter specifies the date format. format does not support EDTF. Other characters are omitted as invalid characters during parsing.
        
    -   The value must contain `yyyy`. Otherwise, NULL is returned. If redundant format strings exist in format, this function converts the date string that corresponds to the first format string into a date value. The rest strings are considered delimiters. For example, `TO_DATE("1234-2234", "yyyy-yyyy")` returns `1234-01-01 00:00:00`.
        
    -   `yyyy` indicates a 4-digit year. `mm` indicates a 2-digit month. `dd` indicates a 2-digit day. `hh` indicates an hour based on the 24-hour clock. `mi` indicates a 2-digit minute. `ss` indicates a 2-digit second. `ff3` indicates a 3-digit millisecond.
        
    
-   Return value
    
    A value of the DATE or DATETIME type is returned.
    
    -   If the format parameter is not included in the input parameters and the string that needs to be converted is in the yyyy-mm-dd or `yyyy-mm-dd hh:mi:ss` format, a value of the DATE type that is in the `yyyy-mm-dd` format is returned. If the format parameter is not included in the input parameters and the string that needs to be converted is not in the yyyy-mm-dd or yyyy-mm-dd hh:mi:ss format, null is returned.
        
    -   If the format parameter is included in the input parameters, a value of the DATETIME type that is in the `yyyy-mm-dd hh:mi:ss` format is returned. If the value of date or format is null, null is returned.
        

-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 2010-12-03 00:00:00.  
        SELECT TO_DATE('Alibaba 2010-12*03', 'Alibaba yyyy-mm*dd');
        
        -- The return value is 2008-07-18 00:00:00. 
        SELECT TO_DATE('20080718', 'yyyymmdd');
        
        -- The return value is 2008-07-18 20:30:00. 
        SELECT TO_DATE('200807182030','yyyymmddhhmi');
        
        -- '2008718' cannot be converted to a standard date value, and an error is returned. The value must be written as '20080718'. 
        SELECT TO_DATE('2008718', 'yyyymmdd');
        
        -- 'Alibaba 2010-12*3' cannot be converted into a standard date value, and an error is returned. The value must be written as 'Alibaba 2010-12*03'. 
        SELECT TO_DATE('Alibaba 2010-12*3', 'Alibaba yyyy-mm*dd');
        
        -- '2010-24-01' cannot be converted into a standard date value, and an error is returned. The value must be written as '2010-01-24'. 
        SELECT TO_DATE('2010-24-01', 'yyyy-mm-dd');
        
        -- The return value is 2018-10-30 15:13:12. 
        SELECT TO_DATE('20181030 15-13-12.345','yyyymmdd hh-mi-ss.ff3');
        
        -- The return value is NULL. 
        SELECT TO_DATE(null,'yyyymmdd hh-mi-ss.ff3');
        
        -- The return value is NULL. 
        SELECT TO_DATE('20181030 15-13-12.345', null);
        
        -- If the input value is in the ISO 8601 format, the return value is 2021-09-24 13:39:34. 
        SELECT TO_DATE('2021-09-24T13:39:34.119Z', 'yyyy-MM-ddThh:mi:ss.ff3Z');
        
        -- The return value is 2021-09-24, and the data type is DATE. 
        SELECT TO_DATE('2021-09-24');
        
        -- The return value is 2021-09-24, and the data type is DATE. 
        SELECT TO_DATE('2021-09-24 13:39:34');
        
        -- The return value is NULL. 
        SELECT TO_DATE('20210924');
        ```
        
    -   Examples of table data
        
        Convert date values in the date3 column into date values in a specified format. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT date3, TO_DATE(date3, 'yyyy-mm-dd') AS date3_to_date FROM mf_date_fun_t; 
        ```
        
        The following result is returned.
        
        ```
        +------------+---------------------+
        | date3      | date3_to_date       |
        +------------+---------------------+
        | 2021-11-20 | 2021-11-20 00:00:00 |
        | 2021-11-21 | 2021-11-21 00:00:00 |
        | 2021-11-22 | 2021-11-22 00:00:00 |
        | 2021-11-23 | 2021-11-23 00:00:00 |
        | 2021-11-24 | 2021-11-24 00:00:00 |
        | 2021-11-25 | 2021-11-25 00:00:00 |
        | 2021-11-26 | 2021-11-26 00:00:00 |
        | 2021-11-27 | 2021-11-27 00:00:00 |
        | 2021-11-28 | 2021-11-28 00:00:00 |
        | 2021-11-29 | 2021-11-29 00:00:00 |
        +------------+---------------------+
        ```
        

## TO\_MILLIS

-   Syntax
    
    ```
    BIGINT TO_MILLIS(DATETIME|TIMESTAMP <date>);
    ```
    
-   Description
    
    Converts a date value into a UNIX timestamp that is accurate to the millisecond. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME or TIMESTAMP type. The date value is in the `yyyy-mm-dd hh:mi:ss` or `yyyy-mm-dd hh:mi:ss.ff3` format.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME or TIMESTAMP type, an error is returned.
        
    -   If the value of date is null, an error is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 1617174900000.  
        SELECT TO_MILLIS(datetime '2021-03-31 15:15:00');
        
        -- The return value is 1617174900000. 
        SET odps.sql.type.system.odps2=true;
        SELECT TO_MILLIS(timestamp '2021-03-31 15:15:00');
        ```
        
    -   Examples of table data
        
        Convert date values in the datetime1 and timestamp1 columns into UNIX timestamps that are accurate to the millisecond. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true; 
        SELECT datetime1, 
               TO_MILLIS(datetime1) AS datetime1_to_millis, 
               timestamp1, 
               TO_MILLIS(timestamp1) AS timestamp1_to_millis 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +---------------------+---------------------+-------------------------------+----------------------+
        | datetime1           | datetime1_to_millis | timestamp1                    | timestamp1_to_millis |
        +---------------------+---------------------+-------------------------------+----------------------+
        | 2021-11-29 00:01:00 | 1638115260000       | 2021-01-11 00:00:00.123456789 | 1610294400123        |
        | 2021-11-28 00:02:00 | 1638028920000       | 2021-02-11 00:00:00.123456789 | 1612972800123        |
        | 2021-11-27 00:03:00 | 1637942580000       | 2021-03-11 00:00:00.123456789 | 1615392000123        |
        | 2021-11-26 00:04:00 | 1637856240000       | 2021-04-11 00:00:00.123456789 | 1618070400123        |
        | 2021-11-25 00:05:00 | 1637769900000       | 2021-05-11 00:00:00.123456789 | 1620662400123        |
        | 2021-11-24 00:06:00 | 1637683560000       | 2021-06-11 00:00:00.123456789 | 1623340800123        |
        | 2021-11-23 00:07:00 | 1637597220000       | 2021-07-11 00:00:00.123456789 | 1625932800123        |
        | 2021-11-22 00:08:00 | 1637510880000       | 2021-08-11 00:00:00.123456789 | 1628611200123        |
        | 2021-11-21 00:09:00 | 1637424540000       | 2021-09-11 00:00:00.123456789 | 1631289600123        |
        | 2021-11-20 00:10:00 | 1637338200000       | 2021-10-11 00:00:00.123456789 | 1633881600123        |
        +---------------------+---------------------+-------------------------------+----------------------+
        ```
        

## **TRUNC\_TIME**

-   Command format
    
    ```
    string TRUNC_TIME(date|datetime|timestamp|timestamp_ntz <date>, string <datepart>)
    ```
    
-   Description
    
    Truncates a date or time type data according to the time unit specified by datepart and returns a STRING type data.
    
-   Parameters
    
    -   **date**: Required. Supports DATE, DATETIME, TIMESTAMP, or TIMESTAMP\_NTZ type. If the input is STRING type and the data type version of the MaxCompute project is 1.0, it will be implicitly converted to DATETIME type before calculation.
        
    -   **datepart**: Required. STRING type constant, case-insensitive, supports `year`, `month`, `day`, and `hour`.
        
-   Return value
    
    Returns STRING type.
    
    The STRING format is as follows:
    
    -   When **datepart** is 'year': Returns STRING format `yyyy`.
        
    -   When **datepart** is 'month': Returns STRING format `yyyy-mm`.
        
    -   When **datepart** is 'day': Returns STRING format `yyyy-mm-dd`.
        
    -   When **datepart** is 'hour': Returns STRING format `yyyy-mm-dd hh:mm:ss`.
        
    
    Return rules:
    
    -   When **date** is not DATE, DATETIME, TIMESTAMP, or TIMESTAMP\_NTZ type, an error is returned. STRING type for **date** is only supported when the data type version of the MaxCompute project is 1.0.
        
    -   When **datepart** is NULL, an error is returned.
        
-   Examples
    
    -   Time as DATETIME type
        
        For example, when the current Session or Project timezone is UTC+8, the local time is datetime '2025-06-03 07:15:08', the TRUNC\_TIME function first converts the local time to UTC time '2025-06-02 23:15:08', then truncates according to datepart, and returns the result as STRING type.
        
        ```
        SET odps.sql.timezone=Asia/Shanghai;
        SELECT 
               TRUNC_TIME(datetime '2025-06-03 07:15:08','year') as tc_year,
               TRUNC_TIME(datetime '2025-06-03 07:15:08','month') as tc_month,
               TRUNC_TIME(datetime '2025-06-03 07:15:08','day') as tc_date,
               TRUNC_TIME(datetime '2025-06-03 07:15:08','hour') as tc_hour;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+------------+------------+
        | tc_year    | tc_month   | tc_date    | tc_hour    |
        +------------+------------+------------+------------+
        | 2025       | 2025-06    | 2025-06-02 | 2025-06-02 23:00:00 |
        +------------+------------+------------+------------+
        ```
        
    -   Time as DATE type
        
        For example, the input time is date '2025-06-10', the TRUNC\_TIME function truncates the DATE type data according to the time unit specified by datepart, and returns STRING type.
        
        ```
        SELECT 
               TRUNC_TIME(date '2025-06-10','year' ),
               TRUNC_TIME(date '2025-06-10','month' ),
               TRUNC_TIME(date '2025-06-10','day' );
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+------------+
        | _c0        | _c1        | _c2        |
        +------------+------------+------------+
        | 2025       | 2025-06    | 2025-06-10 |
        +------------+------------+------------+
        ```
        
    -   Time as STRING type
        
        For example, the input time is STRING type '2025-06-03 15:30:30'. You must set the data type version of the MaxCompute project to 1.0 for it to be implicitly converted to DATETIME type before calculation. Otherwise, an error will be returned.
        
        ```
        SET odps.sql.type.system.odps2=false;
        SELECT TRUNC_TIME('2025-06-03 15:30:30','hour');
        ```
        
        The following result is returned.
        
        ```
        +------------+
        | _c0        |
        +------------+
        | 2025-06-03 07:00:00 |
        +------------+
        ```
        

## UNIX\_TIMESTAMP

-   Syntax
    
    ```
    BIGINT UNIX_TIMESTAMP(DATETIME|DATE|TIMESTAMP|STRING <date>) 
    ```
    
-   Description
    
    Converts a date value into a UNIX timestamp that is an integer.
    
-   Parameters
    
    date: required. A date value of the DATETIME, DATE, TIMESTAMP, or STRING type. The input value is in the `yyyy-mm-dd hh:mi:ss`, `yyyy-mm-dd`, or `yyyy-mm-dd hh:mi:ss.ff3` format. If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into a value of the DATETIME type before calculation. For more information about the MaxCompute V1.0 data type edition, see [MaxCompute V1.0 data type edition](/help/en/maxcompute/user-guide/maxcompute-v1-0-data-type-edition). If you enable the MaxCompute V2.0 data type edition, the implicit conversion fails. In this case, you must use the `CAST` function, such as `unix_timestamp(cast(... as datetime))`, to convert data types. You can also disable the MaxCompute V2.0 data type edition. For more information about the MaxCompute V2.0 data type edition, see [MaxCompute data type system version 2.0](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition).
    
    **Note**
    
    If the input value is a constant and is not a value in the table, the input value is in the `DATETIME'yyyy-mm-dd hh:mi:ss'`, `DATE'yyyy-mm-dd'`, or `TIMESTAMP'yyyy-mm-dd hh:mi:ss.ff3'` format. If the input value does not contain the keyword of the data type and is in the `'yyyy-mm-dd hh:mi:ss'` format, the input value is recognized as a value of the STRING type.
    
-   Return value
    
    A UNIX timestamp of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, DATE, TIMESTAMP, or STRING type or the format does not meet the requirements, an error is returned or null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 1699585860. 
        SELECT UNIX_TIMESTAMP(DATETIME'2023-11-10 11:11:00'); 
         
        -- The return value is 1699545600.
        SET odps.sql.type.system.odps2=true;
        SELECT UNIX_TIMESTAMP(DATE'2023-11-10');
        
        -- The return value is 1699585860.
        SET odps.sql.type.system.odps2=true;
        SELECT UNIX_TIMESTAMP(TIMESTAMP'2023-11-10 11:11:00.123456789');
        
        -- The return value is 1237518660. 
        SET odps.sql.type.system.odps2=false;
        SELECT UNIX_TIMESTAMP('2009-03-20 11:11:00'); 
        
        -- The return value is NULL. 
        SELECT UNIX_TIMESTAMP(null);
        ```
        
    -   Examples of table data
        
        Convert date values in the date1, datetime1, and timestamp1 columns into UNIX timestamps that are integers. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement.  
        SET odps.sql.type.system.odps2=true;
        SELECT date1, 
               UNIX_TIMESTAMP(date1) AS date1_unix_timestamp, 
               datetime1, 
               UNIX_TIMESTAMP(datetime1) AS datetime1_unix_timestamp, 
               timestamp1, 
               UNIX_TIMESTAMP(timestamp1) AS timestamp1_unix_timestamp 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+----------------------+---------------------+--------------------------+------------------------------+---------------------------+
        | date1      | date1_unix_timestamp | datetime1           | datetime1_unix_timestamp | timestamp1                   | timestamp1_unix_timestamp |
        +------------+----------------------+---------------------+--------------------------+------------------------------+---------------------------+
        | 2021-11-29 | 1638115200           | 2021-11-29 00:01:00 | 1638115260               | 2021-01-11 00:00:00.123456789 | 1610294400                |
        | 2021-11-28 | 1638028800           | 2021-11-28 00:02:00 | 1638028920               | 2021-02-11 00:00:00.123456789 | 1612972800                |
        | 2021-11-27 | 1637942400           | 2021-11-27 00:03:00 | 1637942580               | 2021-03-11 00:00:00.123456789 | 1615392000                |
        | 2021-11-26 | 1637856000           | 2021-11-26 00:04:00 | 1637856240               | 2021-04-11 00:00:00.123456789 | 1618070400                |
        | 2021-11-25 | 1637769600           | 2021-11-25 00:05:00 | 1637769900               | 2021-05-11 00:00:00.123456789 | 1620662400                |
        | 2021-11-24 | 1637683200           | 2021-11-24 00:06:00 | 1637683560               | 2021-06-11 00:00:00.123456789 | 1623340800                |
        | 2021-11-23 | 1637596800           | 2021-11-23 00:07:00 | 1637597220               | 2021-07-11 00:00:00.123456789 | 1625932800                |
        | 2021-11-22 | 1637510400           | 2021-11-22 00:08:00 | 1637510880               | 2021-08-11 00:00:00.123456789 | 1628611200                |
        | 2021-11-21 | 1637424000           | 2021-11-21 00:09:00 | 1637424540               | 2021-09-11 00:00:00.123456789 | 1631289600                |
        | 2021-11-20 | 1637337600           | 2021-11-20 00:10:00 | 1637338200               | 2021-10-11 00:00:00.123456789 | 1633881600                |
        +------------+----------------------+---------------------+--------------------------+------------------------------+---------------------------+
        ```
        

## WEEKDAY

-   Syntax
    
    ```
    BIGINT WEEKDAY(DATETIME <date>)
    ```
    
-   Description
    
    Returns a number that represents the day of the week in which a date value falls.
    
-   Parameters
    
    date: required. A value of the DATETIME type. The date value must be in the `yyyy-mm-dd hh:mi:ss` format. If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the DATETIME type before calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   Monday is considered the first day of a week and its return value is 0. Days of a week are numbered in ascending order starting from 0. The return value of Sunday is 6.
        
    -   If the value of date is not of the DATETIME or STRING type or the format does not meet the requirements, an error is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 4. 
        SELECT WEEKDAY(datetime '2009-03-20 11:11:00'); 
        
        -- The return value is 4. 
        SET odps.sql.type.system.odps2=false;
        SELECT WEEKDAY('2009-03-20 11:11:00');
        
        -- The return value is NULL. 
        SELECT WEEKDAY(null);
        ```
        
    -   Examples of table data
        
        Calculate the day of the week in which each date value in the datetime1 column falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT datetime1, WEEKDAY(datetime1) AS datetime1_weekday FROM mf_date_fun_t; 
        ```
        
        The following result is returned.
        
        ```
        +---------------------+-------------------+
        | datetime1           | datetime1_weekday |
        +---------------------+-------------------+
        | 2021-11-29 00:01:00 | 0                 |
        | 2021-11-28 00:02:00 | 6                 |
        | 2021-11-27 00:03:00 | 5                 |
        | 2021-11-26 00:04:00 | 4                 |
        | 2021-11-25 00:05:00 | 3                 |
        | 2021-11-24 00:06:00 | 2                 |
        | 2021-11-23 00:07:00 | 1                 |
        | 2021-11-22 00:08:00 | 0                 |
        | 2021-11-21 00:09:00 | 6                 |
        | 2021-11-20 00:10:00 | 5                 |
        +---------------------+-------------------+
        ```
        

## WEEKOFYEAR

-   Syntax
    
    ```
    BIGINT WEEKOFYEAR(DATETIME <date>)
    ```
    
-   Description
    
    Returns a number that represents the week of the year in which a date value falls. Monday is considered the first day of the week.
    
    **Note**
    
    To determine whether a week belongs to the current year or to the next year, find the year in which more than four days of the week fall. If the week belongs to the current year, it is considered the last week of the year. If the week belongs to the next year, it is considered the first week of the next year.
    
-   Parameters
    
    date: required. A value of the DATETIME type. The date value must be in the `yyyy-mm-dd hh:mi:ss` format. If the input value is of the STRING type and the MaxCompute V1.0 data type edition is used in your project, the input value is implicitly converted into the DATETIME type before calculation.
    
-   Return value
    
    A value of the BIGINT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The value 1 is returned. 20141229 is in year 2014, but most days of the week fall in year 2015. Therefore, the return value 1 indicates the first week of year 2015.  
        SELECT WEEKOFYEAR(TO_DATE("20141229", "yyyymmdd"));  
        
        -- The return value is 1.     
        SELECT WEEKOFYEAR(TO_DATE("20141231", "yyyymmdd")); 
        
        -- The return value is 53.  
        SELECT WEEKOFYEAR(TO_DATE("20151229", "yyyymmdd"));
        
        -- The return value is 48. 
        SET odps.sql.type.system.odps2=false;
        SELECT WEEKOFYEAR('2021-11-29 00:01:00');
        
        -- The return value is NULL. 
        SELECT WEEKOFYEAR('20141231');
        
        -- The return value is NULL. 
        SELECT WEEKOFYEAR(null);
        ```
        
    -   Examples of table data
        
        Calculate the nth week of the year in which each date in the datetime1 column falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        SELECT datetime1, WEEKOFYEAR(datetime1) AS datetime1_weekofyear FROM mf_date_fun_t; 
        ```
        
        The following result is returned.
        
        ```
        +---------------------+----------------------+
        | datetime1           | datetime1_weekofyear |
        +---------------------+----------------------+
        | 2021-11-29 00:01:00 | 48                   |
        | 2021-11-28 00:02:00 | 47                   |
        | 2021-11-27 00:03:00 | 47                   |
        | 2021-11-26 00:04:00 | 47                   |
        | 2021-11-25 00:05:00 | 47                   |
        | 2021-11-24 00:06:00 | 47                   |
        | 2021-11-23 00:07:00 | 47                   |
        | 2021-11-22 00:08:00 | 47                   |
        | 2021-11-21 00:09:00 | 46                   |
        | 2021-11-20 00:10:00 | 46                   |
        +---------------------+----------------------+
        ```
        

## YEAR

-   Syntax
    
    ```
    INT YEAR(DATETIME|TIMESTAMP|DATE|STRING <date>) 
    ```
    
-   Description
    
    Returns the year in which a date value falls. This function is an additional function of MaxCompute V2.0.
    
-   Parameters
    
    date: required. A date value of the DATETIME, TIMESTAMP, DATE, or STRING type. The input value is in the `yyyy-mm-dd`, `yyyy-mm-dd hh:mi:ss`, or `yyyy-mm-dd hh:mi:ss:ff3` format. If the value is of the STRING type, the value must include at least the `yyyy-mm-dd` part and cannot contain extra strings.
    
-   Return value
    
    A value of the INT type is returned. The return value varies based on the following rules:
    
    -   If the value of date is not of the DATETIME, TIMESTAMP, DATE, or STRING type or the format does not meet the requirements, null is returned.
        
    -   If the value of date is null, null is returned.
        
    
-   Examples
    
    -   Examples of static data
        
        ```
        -- The return value is 1970. 
        SELECT YEAR('1970-01-01 12:30:00');
        
        -- The return value is 1970. 
        SELECT YEAR('1970-01-01'); 
        
        -- The return value is 70. 
        SELECT YEAR('70-01-01');
        
        -- The return value is NULL. 
        SELECT YEAR('1970/03/09'); 
        
        -- The return value is NULL. 
        SELECT YEAR(null); 
        ```
        
    -   Examples of table data
        
        Obtain the year in which each date value in the date1, datetime1, timestamp1, and date3 columns falls. Data in [Sample data](#section-xn7-iyz-bkv) is used in this example. Sample statement:
        
        ```
        -- Enable the MaxCompute V2.0 data type edition. Commit the following SET statement together with the SQL statement. 
        SET odps.sql.type.system.odps2=true;
        SELECT date1,  
               YEAR(date1) AS date1_year, 
               datetime1, 
               YEAR(datetime1) AS datetime1_year, 
               timestamp1, 
               YEAR(timestamp1) AS timestamp1_year, 
               date3, 
               YEAR(date3) AS date3_year 
          FROM mf_date_fun_t;
        ```
        
        The following result is returned.
        
        ```
        +------------+------------+---------------------+----------------+-------------------------------+-----------------+------------+------------+
        | date1      | date1_year | datetime1           | datetime1_year | timestamp1                    | timestamp1_year | date3      | date3_year |
        +------------+------------+---------------------+----------------+-------------------------------+-----------------+------------+------------+
        | 2021-11-29 | 2021       | 2021-11-29 00:01:00 | 2021           | 2021-01-11 00:00:00.123456789 | 2021            | 2021-11-20 | 2021       |
        | 2021-11-28 | 2021       | 2021-11-28 00:02:00 | 2021           | 2021-02-11 00:00:00.123456789 | 2021            | 2021-11-21 | 2021       |
        | 2021-11-27 | 2021       | 2021-11-27 00:03:00 | 2021           | 2021-03-11 00:00:00.123456789 | 2021            | 2021-11-22 | 2021       |
        | 2021-11-26 | 2021       | 2021-11-26 00:04:00 | 2021           | 2021-04-11 00:00:00.123456789 | 2021            | 2021-11-23 | 2021       |
        | 2021-11-25 | 2021       | 2021-11-25 00:05:00 | 2021           | 2021-05-11 00:00:00.123456789 | 2021            | 2021-11-24 | 2021       |
        | 2021-11-24 | 2021       | 2021-11-24 00:06:00 | 2021           | 2021-06-11 00:00:00.123456789 | 2021            | 2021-11-25 | 2021       |
        | 2021-11-23 | 2021       | 2021-11-23 00:07:00 | 2021           | 2021-07-11 00:00:00.123456789 | 2021            | 2021-11-26 | 2021       |
        | 2021-11-22 | 2021       | 2021-11-22 00:08:00 | 2021           | 2021-08-11 00:00:00.123456789 | 2021            | 2021-11-27 | 2021       |
        | 2021-11-21 | 2021       | 2021-11-21 00:09:00 | 2021           | 2021-09-11 00:00:00.123456789 | 2021            | 2021-11-28 | 2021       |
        | 2021-11-20 | 2021       | 2021-11-20 00:10:00 | 2021           | 2021-10-11 00:00:00.123456789 | 2021            | 2021-11-29 | 2021       |
        +------------+------------+---------------------+----------------+-------------------------------+-----------------+------------+------------+
        ```
        

## **References**

-   If the preceding built-in functions do not meet your business requirements, MaxCompute also supports user-defined functions (UDFs). For more information about UDFs, see [Overview](/help/en/maxcompute/user-guide/overview-22).
    
-   For more information about FAQ about MaxCompute SQL, see the following topics:
    
    -   [FAQ about DDL operations](/help/en/maxcompute/user-guide/faq-about-ddl-operations)
        
    -   [FAQ about DML operations](/help/en/maxcompute/user-guide/faq-about-dml-operations)
        
    -   [FAQ about DQL operations](/help/en/maxcompute/user-guide/faq-about-dql-operations)
        
    -   [Other FAQ about SQL](/help/en/maxcompute/user-guide/other-faq-about-sql)
        
-   For more information about common errors and FAQ about built-in functions of MaxCompute, see the following topics:
    
    -   [Common errors for built-in functions](/help/en/maxcompute/user-guide/common-errors-for-built-in-functions)
        
    -   [FAQ about built-in functions](/help/en/maxcompute/user-guide/faq-about-built-in-functions)
