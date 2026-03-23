When you create a data synchronization or migration task in Data Transmission Service (DTS), you can add extra columns to the destination table and assign values to them. After data is written to the destination table, you can filter by the values in these additional columns. This lets you perform operations such as metadata management, sorting, and removing duplicates. This helps you better manage and process the data transferred to the destination.

## Notes

-   You can add additional columns to synchronization or migration instances in the following scenarios:
    
    -   The **Database Type** for the destination database is **DataHub**, **Lindorm**, **Kafka**, or **ClickHouse**.
        
    -   The **Database Type** for the source database is **DB2 for LUW** or **DB2 for iSeries (AS/400)**, and the **Database Type** for the destination database is **MySQL** or **PolarDB for MySQL**.
        
    -   The **Database Type** of the source database is **MySQL**, **MariaDB**, or **PolarDB for MySQL**, and the **Database Type** of the destination database is **MySQL**, **MariaDB**, or **PolarDB for MySQL**.
        
    -   The source database's **Database Type** is **MySQL**, and the destination database's **Database Type** is **Tair/Redis**, **AnalyticDB for PostgreSQL**, or **AnalyticDB for MySQL 3.0**.
        
    -   The **Database Type** for the source database is **PolarDB for PostgreSQL**, and the **Database Type** for the destination database is **AnalyticDB for PostgreSQL**.
        
    -   The **Database Type** for the source database is **SQL Server**, and the **Database Type** for the destination database is **MySQL**.
        
-   For synchronization instances, set **Synchronization Types** to **Schema Synchronization**. For migration instances, set **Migration Types** to **Schema Migration**.
    
-   Before you modify the rules for additional columns in a data synchronization task, evaluate whether the names of the additional columns conflict with existing columns in the destination table.
    
-   If the source database of a synchronization task is MongoDB, the collections in the destination database cannot contain fields named **\_id** or **\_value**. Otherwise, the synchronization fails.
    
-   If you right-click a database in the **Selected Objects** section, DTS adds the configured additional columns to all tables within the corresponding destination database.
    

## Procedure

This section uses a DTS synchronization instance as an example to describe how to add additional columns.

1.  Go to the Data Synchronization Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, click **Data + AI**.
        
    3.  In the left-side navigation pane, choose **DTS (DTS)** > **Data Synchronization**.
        
    
    **Note**
    
    -   Operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode console](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
    -   You can also go to the [Data Synchronization Tasks page of the new DTS console](https://dts.alibabacloud.com/sync/cn-hangzhou?resourceGroupId=).
        
    
2.  Click **Create Task** and configure the source and destination databases.
    
    **Note**
    
    Click **Reselect Objects** to add additional columns to a **Running** synchronization instance.
    
3.  Follow the prompts to the **Configure Objects** step to complete the configuration.
    
    You can add additional columns in this step.
    
    1.  Set **Synchronization Types** to **Schema Synchronization**.
        
    2.  In the **Source Objects** section, select the databases or tables to synchronize, and then click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2033256071/p751639.png) to move them to the **Selected Objects** box.
        
    3.  In the **Selected Objects** section, right-click the database or table that you want to sync.
        
    4.  In the **Additional Columns** section of the dialog box, click the **Add Column** button.
        
    5.  Enter the **Column Name**, **Type**, and **Assign Value** for the additional column.
        
        **Note**
        
        For **Assign Value**, you can click the ![...](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7383256071/p469142.png) icon to the right of the text box to customize the expression for the value of the additional column. For more information, see [Assignment configuration](#section-cew-su4-sbd).
        
    6.  Click **OK**.
        
    
4.  Follow the prompts to complete the rest of the data synchronization task configuration.
    
    **Note**
    
    If the extract, transform, and load (ETL) feature is configured for the synchronization task, the data to be synchronized is first processed by the rules for additional columns to generate a value. Then, the ETL script is applied to calculate the final value, which is then synchronized to the destination database.
    

## Assignment configuration

The value of an additional column is composed of constants, variables, operators, and expression functions.

**Note**

-   The syntax is compatible with the data processing DSL (Domain-Specific Language) for ETL.
    
-   In expressions, column names are enclosed in backticks (\` \`), not single quotation marks (' ').
    

-   ### **Constants**
    
    **Type**
    
    **Example**
    
    int
    
    123
    
    float
    
    123.4
    
    string
    
    "hello1\_world"
    
    boolean
    
    true or false
    
    datetime
    
    DATETIME('2021-01-01 10:10:01')
    
-   ### **Variables**
    
    **Variable**
    
    **Description**
    
    **Data type**
    
    **Example value**
    
    \_\_TB\_\_
    
    The name of the table in the database.
    
    string
    
    table
    
    \_\_DB\_\_
    
    The name of the database.
    
    string
    
    mydb
    
    \_\_OPERATION\_\_
    
    The type of the operation.
    
    string
    
    \_\_OP\_INSERT\_\_,\_\_OP\_UPDATE\_\_,\_\_OP\_DELETE\_\_
    
    \_\_COMMIT\_TIMESTAMP\_\_
    
    The time when the transaction was committed.
    
    datetime
    
    '2021-01-01 10:10:01'
    
    \`column\`
    
    The value of the column for a data record.
    
    string
    
    \`id\`, \`name\`
    
    \_\_SCN\_\_
    
    System Change Number (SCN). It records the version and time of a transaction commit in the database and is unique.
    
    string
    
    22509\*\*\*\*
    
    \_\_ROW\_ID\_\_
    
    **Note**
    
    MySQL does not support \_\_ROW\_ID\_\_.
    
    The address ID of a data record. It locates the data and is unique.
    
    string
    
    AAAgWHAAKAAJgX\*\*\*\*
    
-   ### **Expression functions**
    
    -   #### **Numerical operations**
        
        **Function**
        
        **Syntax**
        
        **Value range**
        
        **Return value**
        
        **Example**
        
        Addition (+)
        
        -   op\_sum(value1, value2)
            
        -   value1+value2
            
        
        -   value1: an integer or a floating-point number
            
        -   value2: an integer or a floating-point number
            
        
        If both parameters are integers, an integer is returned. Otherwise, a floating-point number is returned.
        
        -   op\_sum(\`col1\`, 1.0)
            
        -   \`col1\`+1.0
            
        
        Subtraction (-)
        
        -   op\_sub(value1, value2)
            
        -   value1-value2
            
        
        -   value1: an integer or a floating-point number
            
        -   value2: an integer or a floating-point number
            
        
        If both parameters are integers, an integer is returned. Otherwise, a floating-point number is returned.
        
        -   op\_sub(\`col1\`, 1.0)
            
        -   \`col1\`-1.0
            
        
        Multiplication (\*)
        
        -   op\_mul(value1, value2)
            
        -   value1\*value2
            
        
        -   value1: an integer or a floating-point number
            
        -   value2: an integer or a floating-point number
            
        
        If both parameters are integers, an integer is returned. Otherwise, a floating-point number is returned.
        
        -   op\_mul(\`col1\`, 1.0)
            
        -   \`col1\`\*1.0
            
        
        Division (/)
        
        -   op\_div\_true(value1, value2)
            
        -   value1/value2
            
        
        -   value1: an integer or a floating-point number
            
        -   value2: an integer or a floating-point number
            
        
        If both parameters are integers, an integer is returned. Otherwise, a floating-point number is returned.
        
        -   op\_div\_true(\`col1\`, 2.0). If col1=15, 7.5 is returned.
            
        -   \`col1\`/1.0
            
        
        Modulo operation
        
        op\_mod(value1, value2)
        
        -   value1: an integer or a floating-point number
            
        -   value2: an integer or a floating-point number
            
        
        If both parameters are integers, an integer is returned. Otherwise, a floating-point number is returned.
        
        op\_mod(\`col1\`, 10). If col1=23, 3 is returned.
        
    -   #### **Logical operations**
        
        **Feature**
        
        **Syntax**
        
        **Value range**
        
        **Return value**
        
        **Example**
        
        Equals
        
        op\_eq(value1, value2)
        
        -   value1: integer, floating-point number, or string
            
        -   value2: integer, floating-point number, or string
            
        
        boolean: true or false
        
        op\_eq(\`col1\`, 23)
        
        Greater than
        
        op\_gt(value1, value2)
        
        -   value1: integer, floating-point number, or string
            
        -   value2: integer, floating-point number, or string
            
        
        boolean: true or false
        
        op\_gt(\`col1\`, 1.0)
        
        Less than
        
        op\_lt(value1, value2)
        
        -   value1: integer, floating-point number, or string
            
        -   value2: integer, floating-point number, or string
            
        
        boolean: true or false
        
        op\_lt(\`col1\`, 1.0)
        
        Greater than or equal to
        
        op\_ge(value1, value2)
        
        -   value1: integer, floating-point number, or string
            
        -   value2: integer, floating-point number, or string
            
        
        boolean: true or false
        
        op\_ge(\`col1\`, 1.0)
        
        Less than or equal to
        
        op\_le(value1, value2)
        
        -   value1: integer, floating-point number, or string
            
        -   value2: integer, floating-point number, or string
            
        
        boolean: true or false
        
        op\_le(\`col1\`, 1.0)
        
        AND operation
        
        op\_and(value1, value2)
        
        -   value1: boolean
            
        -   value2: boolean
            
        
        boolean: true or false
        
        op\_and(\`is\_male\`, \`is\_student\`)
        
        OR operation
        
        op\_or(value1, value2)
        
        -   value1: boolean
            
        -   value2: boolean
            
        
        boolean: true or false
        
        op\_or(\`is\_male\`, \`is\_student\`)
        
        IN operation
        
        op\_in(value, json\_array)
        
        -   value: any type
            
        -   json\_array: a string in the JSON format
            
        
        boolean: true or false
        
        op\_in(\`id\`,json\_array('\["0","1","2","3","4","5","6","7","8"\]'))
        
        Is null
        
        op\_is\_null(value)
        
        value: any type
        
        boolean: true or false
        
        op\_is\_null(\`name\`)
        
        Is not null
        
        op\_is\_not\_null(value)
        
        value: any type
        
        boolean: true or false
        
        op\_is\_not\_null(\`name\`)
        
    -   #### **String functions**
        
        **Feature**
        
        **Syntax**
        
        **Value range**
        
        **Return value**
        
        **Example**
        
        String concatenation
        
        op\_add(str\_1,str\_2,...,str\_n)
        
        -   str\_1: string
            
        -   str\_2: string
            
        -   ...
            
        -   str\_n: string
            
        
        The concatenated string
        
        op\_add(\`col\`,'hangzhou','dts')
        
        String formatting and concatenation
        
        str\_format(format, value1, value2, value3, ...)
        
        -   format: a string that uses curly braces ({}) as placeholders, such as "part1: {}, part2: {}".
            
        -   value1: any
            
        -   value2: any
            
        
        The formatted string
        
        str\_format("part1: {}, part2: {}", \`col1\`, \`col2\`). If col1="ab" and col2="12", "part1: ab, part2: 12" is returned.
        
        String replacement
        
        str\_replace(original, oldStr, newStr, count)
        
        -   original: the original string
            
        -   oldStr: the string to be replaced
            
        -   newStr: the replacement string
            
        -   count: an integer that specifies the maximum number of replacements. If you set this parameter to -1, all occurrences are replaced.
            
        
        The string after replacement
        
        str\_replace(\`name\`, "a", 'b', 1). If name="aba", "bba" is returned. str\_replace(\`name\`, "a", 'b', -1). If name="aba", "bbb" is returned.
        
        Replace values in all string-type fields (such as varchar, text, and char)
        
        tail\_replace\_string\_field(search, replace, all)
        
        -   search: the string to be replaced
            
        -   replace: the replacement string
            
        -   all: specifies whether to replace all matched strings. This parameter supports only **true**.
            
            **Note**
            
            If you do not need to replace all matched strings, use the `str_replace` function.
            
        
        The string after replacement
        
        tail\_replace\_string\_field('\\u000f','',true). Replaces "\\u000f" with a space in the values of all string-type fields.
        
        Remove specific characters from the beginning and end of a string
        
        str\_strip(string\_val, charSet)
        
        -   string\_val: the original string
            
        -   char\_set: the collection of characters to be removed
            
        
        The string after the characters are removed from the beginning and end
        
        str\_strip(\`name\`, 'ab'). If name=axbzb, xbz is returned.
        
        Convert a string to lowercase
        
        str\_lower(value)
        
        value: a string column or string constant
        
        A lowercase string
        
        str\_lower(\`str\_col\`)
        
        Convert a string to uppercase
        
        str\_upper(value)
        
        value: a string column or string constant
        
        An uppercase string
        
        str\_upper(\`str\_col\`)
        
        Convert a string to a number
        
        cast\_string\_to\_long(value)
        
        value: string
        
        Integer
        
        cast\_string\_to\_long(\`col\`)
        
        Convert a number to a string
        
        cast\_long\_to\_string(value)
        
        value: integer
        
        String
        
        cast\_long\_to\_string(\`col\`)
        
        Count occurrences of a substring
        
        str\_count(str,pattern)
        
        -   str: a string column or string constant
            
        -   pattern: the substring to find
            
        
        The number of occurrences of the substring
        
        str\_count(\`str\_col\`, 'abc'). If str\_col="zabcyabcz", 2 is returned.
        
        Find a substring
        
        str\_find(str, pattern)
        
        -   str: a string column or string constant
            
        -   pattern: the substring to find
            
        
        The position of the first match of the substring. If no match is found, \`-1\` is returned.
        
        str\_find(\`str\_col\`, 'abc'). If \`str\_col="xabcy"\`, \`1\` is returned.
        
        Check if a string consists of only letters
        
        str\_isalpha(str)
        
        str: a string column or string constant
        
        true or false
        
        str\_isalpha(\`str\_col\`)
        
        Check if a string consists of only digits
        
        str\_isdigit(str)
        
        -   str: a string column or string constant
            
        
        true or false
        
        str\_isdigit(\`str\_col\`)
        
        Regular expression matching
        
        regex\_match(str,regex)
        
        -   str: a string column or string constant
            
        -   regex: a regular expression string column or string constant
            
        
        true or false
        
        regex\_match(\_\_TB\_\_,'user\_\\\\d+')
        
        Mask a part of a string with a specified character. This can be used for data masking, such as replacing the last four digits of a phone number with asterisks.
        
        str\_mask(str, start, end, maskStr)
        
        -   str: a string column or string constant
            
        -   start: an integer that specifies the start position of the mask. The minimum value is 0.
            
        -   end: an integer that specifies the end position of the mask. The maximum value is the string length minus 1.
            
        -   maskStr: a string of length 1, such as '#'.
            
        
        The string after the part from the start position to the end position is masked
        
        str\_mask(\`phone\`, 7, 10, '#')
        
        Get the substring after a specified string
        
        substring\_after(str, cond)
        
        -   str: the original string
            
        -   cond: string
            
        
        String
        
        **Note**
        
        The return value does not include the string cond.
        
        substring\_after(\`col\`, 'abc')
        
        Get the substring before a specified string
        
        substring\_before(str, cond)
        
        -   str: the original string
            
        -   cond: string
            
        
        String
        
        **Note**
        
        The return value does not include the string cond.
        
        substring\_before(\`col\`, 'efg')
        
        Get the substring between two specified strings
        
        substring\_between(str, cond1, cond2)
        
        -   str: the original string
            
        -   cond1: string
            
        -   cond2: string
            
        
        String
        
        **Note**
        
        The return value does not include the strings cond1 and cond2.
        
        substring\_between(\`col\`, 'abc','efg')
        
        Check if the value is a string
        
        is\_string\_value(value)
        
        value: a string or column name
        
        boolean: true or false
        
        is\_string\_value(\`col1\`)
        
        Replace content in string-type fields, starting in reverse from the end.
        
        tail\_replace\_string\_field(search, replace, all)
        
        search: the string to be replaced
        
        replace: the replacement string
        
        all: specifies whether to replace all occurrences. The value can be true or false.
        
        The string after replacement
        
        Replace "\\u000f" with a space in the values of all string-type fields.
        
        tail\_replace\_string\_field('\\u000f','',true)
        
        Get the value of a field in MongoDB
        
        bson\_value("field1","field2","field3",...)
        
        -   field1: the name of the level-1 field.
            
        -   field2: the name of the level-2 field.
            
        
        The value of the corresponding field in the document
        
        -   e\_set(\`user\_id\`, bson\_value("id"))
            
        -   e\_set(\`user\_name\`, bson\_value("person","name"))
            
        
    -   #### **Conditional expressions**
        
        **Feature**
        
        **Syntax**
        
        **Value range**
        
        **Return value**
        
        **Example**
        
        Similar to the ternary operator (`? :`) in C. Returns a value based on a condition.
        
        (cond ? val\_1 : val\_2)
        
        -   cond: a boolean field or expression
            
        -   val\_1: return value 1
            
        -   val\_2: return value 2
            
            **Note**
            
            val\_1 and val\_2 must be of the same type.
            
        
        If cond is true, val\_1 is returned. Otherwise, val\_2 is returned.
        
        (id>1000? 1 : 0)
        
    -   #### **Time functions**
        
        **Feature**
        
        **Syntax**
        
        **Value range**
        
        **Return value**
        
        **Example**
        
        Current system time
        
        dt\_now()
        
        None
        
        DATETIME, accurate to the second
        
        dts\_now()
        
        dt\_now\_millis()
        
        None
        
        DATETIME, accurate to the millisecond
        
        dt\_now\_millis()
        
        Convert a UTC timestamp (in seconds) to DATETIME
        
        dt\_fromtimestamp(value,\[timezone\])
        
        -   value: integer
            
        -   timezone: the time zone. This is an optional parameter.
            
        
        DATETIME, accurate to the second
        
        dt\_fromtimestamp(1626837629)
        
        dt\_fromtimestamp(1626837629,'GMT+08')
        
        Convert a UTC timestamp (in milliseconds) to DATETIME
        
        dt\_fromtimestamp\_millis(value,\[timezone\])
        
        -   value: integer
            
        -   timezone: the time zone. This is an optional parameter.
            
        
        DATETIME, accurate to the millisecond
        
        dt\_fromtimestamp\_millis(1626837629123);
        
        dt\_fromtimestamp\_millis(1626837629123,'GMT+08')
        
        Convert DATETIME to a UTC timestamp (in seconds)
        
        dt\_parsetimestamp(value,\[timezone\])
        
        -   value: DATETIME
            
        -   timezone: the time zone. This is an optional parameter.
            
        
        Integer
        
        dt\_parsetimestamp(\`datetime\_col\`)
        
        dt\_parsetimestamp(\`datetime\_col\`,'GMT+08')
        
        Convert DATETIME to a UTC timestamp (in milliseconds)
        
        dt\_parsetimestamp\_millis(value,\[timezone\])
        
        -   value: DATETIME
            
        -   timezone: the time zone. This is an optional parameter.
            
        
        Integer
        
        dt\_parsetimestamp\_millis(\`datetime\_col\`)
        
        dt\_parsetimestamp\_millis(\`datetime\_col\`,'GMT+08')
        
        Convert DATETIME to a string
        
        dt\_str(value, format)
        
        -   value: DATETIME
            
        -   format: a string in the yyyy-MM-dd HH:mm:ss format
            
        
        String
        
        dt\_str(\`col1\`, 'yyyy-MM-dd HH:mm:ss')
        
        Convert a string to DATETIME
        
        dt\_strptime(value,format)
        
        -   value: string
            
        -   format: a string in the yyyy-MM-dd HH:mm:ss format
            
        
        DATETIME
        
        dt\_strptime('2021-07-21 03:20:29', 'yyyy-MM-dd hh:mm:ss')
        
        Modify the time by adding or subtracting a value from the year, month, day, hour, minute, or second
        
        dt\_add(value, \[years=intVal\],
        
        \[months=intVal\],
        
        \[days=intVal\],
        
        \[hours=intVal\],
        
        \[minutes=intVal\]
        
        )
        
        -   value: DATETIME
            
        -   intVal: integer
            
            **Note**
            
            A minus sign (-) indicates subtraction.
            
        
        DATETIME
        
        -   dt\_add(datetime\_col,years=-1)
            
        -   dt\_add(datetime\_col,years=1,months=1)
            
        

## **FAQ**

**How do I configure custom keys and values for a DTS task from MySQL to Redis?**

**Scenario description**

When you synchronize or migrate data from MySQL to Redis, DTS provides three **Cache Mapping Mode** that map the entire data row by default. To extract only specific columns and create key-value pairs, you must use custom configurations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6076277671/p1039370.png)

**Configuration method**

1.  When you configure objects, move the databases and tables that you want to synchronize or migrate to the right pane, and then click the edit button for the destination Redis DB.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6076277671/p1039373.png)
    
2.  Add the following columns: `__DTS_TP_TO_REDIS_KEY__` and `__DTS_TP_TO_REDIS_VALUE__`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6076277671/p1039376.png)
    
3.  Customize the value assignment based on the DSL syntax. For example, consider the MySQL `aes` table:
    
    ```
    CREATE TABLE `aes` (
        `id`            BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Auto-increment primary key',
        `login_time`    INT(10)             NOT NULL DEFAULT '0'    COMMENT 'Logon identifier time',
        `pay_time`      INT(10)             NOT NULL DEFAULT '0'    COMMENT 'Payment identifier time',
        `gid`           INT(10)             NOT NULL DEFAULT '0'    COMMENT 'Game ID',
        `cid`           INT(10)             NOT NULL DEFAULT '0'    COMMENT 'Channel ID',
        `gcp_code`      VARCHAR(40)         NOT NULL DEFAULT ''     COMMENT 'Channel package number. An empty value indicates a new entry for the gid.',
        `uname`         VARCHAR(120)        CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT 'Account',
        PRIMARY KEY (`id`),
        UNIQUE KEY `idx_uq` (`gid`, `gcp_code`, `uname`),
        KEY `idx_uname` (`uname`)
    )ENGINE=InnoDB AUTO_INCREMENT=48022 DEFAULT CHARSET=utf8 COMMENT='Game account activation time information table';
    ```
    
    **Business scenario**:
    
    -   The key is `stat_create_day:{gcp_code}:{uname}`. This key uses two fields from the `aes` table: `gcp_code` and `uname`.
        
    -   The value is `{login_time}` . This value uses one field that must be converted to the `datetime` format.
        
    
    **Reference value assignments**:
    
    -   Value for `__DTS_TP_TO_REDIS_KEY__`: `` 'stat_create_day'+':'+`gcp_code`+':'+`uname` ``
        
    -   Value for `__DTS_TP_TO_REDIS_VALUE__`: ``dt_fromtimestamp(cast_string_to_long(`login_time`))``
        
4.  After the data is synchronized or migrated to Redis, the key-value pair appears as follows: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6076277671/p1039378.png)
