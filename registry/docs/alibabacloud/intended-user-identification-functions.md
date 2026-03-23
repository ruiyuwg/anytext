This topic describes the syntax of the detailed audience segmentation functions bit\_construct and bit\_match.

## Background information

In audience segmentation scenarios, you often need to segment users based on detail tables. For example, a user may have multiple records, and each record meets different conditions. Detailed audience segmentation typically involves identifying users who meet a specific combination of conditions.

The following table is an example of a detail table. You need to find users who have performed both the `click shopping cart` and `view favorites page` behaviors. In this example, user A meets the conditions.

**user**

**action**

**page**

A

click

shopping cart

B

click

home page

A

view

favorites page

B

click

shopping cart

A

click

favorites page

The traditional query method requires multiple rounds of conditional filtering and JOIN statements to obtain results. This approach involves writing complex SQL and consumes significant resources due to multiple JOIN operations. Starting with Hologres V0.10, the bit\_construct and bit\_match functions are available for detailed audience segmentation scenarios. You can retrieve the target audience with a single round of filtering and function calculation, which simplifies development and delivers results quickly.

## Limits

The following limits apply when you use detailed audience segmentation functions in Hologres:

-   These functions are supported only in Hologres V0.10 and later. Check your current instance version in the Hologres console. If your instance version is earlier than V0.10, see [Common errors that cause upgrade preparation to fail](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   Before using the detailed audience segmentation functions, run the following statement to enable the extension. The extension is a DB-level feature. You only need to run this statement once per database. If you create a new database, you must run the statement again.
    
    ```
    --Create an extension.
    CREATE EXTENSION flow_analysis;
    ```
    
    **Note**
    
    To uninstall the extension, run the following command.
    
    ```
    DROP EXTENSION flow_analysis;
    ```
    

## bit\_construct

Hologres V0.10 and later provides the bit\_construct function for detailed audience segmentation scenarios.

-   **Function description**
    
    bit\_construct returns a bitmap of up to 32 bits as an integer based on the specified filter conditions.
    
-   **Syntax example**
    
    ```
    bit_construct(
      a ,
      b ,
      ....,
      a6
    )
    ```
    
-   **Parameter Description**
    
    -   Parameters a, b, and so on represent the filter conditions. They are of the bool type. Up to 32 conditions are supported. Valid parameter names range from a to z and a1 to a6.
        
    -   The function returns a value of the int type.
        

## bit\_match

Hologres V0.10 and later provides the bit\_match function for detailed audience segmentation scenarios.

-   **Function description**
    
    bit\_match performs further calculations on the results filtered by bit\_construct.
    
-   **Syntax example**
    
    ```
    bit_match('expression', bitmask)
    ```
    
-   **Parameter Description**
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    expression
    
    The conditional expression in the bit\_construct function. It supports `&` (and), `|` (or), `!` (not), and `^` (XOR).
    
    a&b
    
    bitmask
    
    The name of the bitmap created by bit\_construct.
    
    None
    

## Usage example

The following example shows the complete syntax for using the detailed audience segmentation functions:

1.  Enable the extension.
    
    A superuser runs the following statement in the database to enable the extension:
    
    ```
    CREATE EXTENSION flow_analysis;
    ```
    
2.  Prepare a table and data.
    
    The following code creates a detail table that records user shopping behaviors. The table includes the user ID (uid) and the behavior along the shopping path. Sample data is also inserted into the table.
    
    ```
    create table ods_app_dwd(
    event_time timestamptz,
    uid bigint,
    action text,
    page text,
    product_code text,
    from_days int
    );
    
    insert into ods_app_dwd values('2021-04-03 10:01:30', 274649163, 'click', 'shopping cart', 'MDS', 1);
    insert into ods_app_dwd values('2021-04-03 10:04:30', 274649163, 'view', 'favorites page', 'MDS', 4);
    insert into ods_app_dwd values('2021-04-03 10:06:30', 274649165, 'click', 'shopping cart', 'MMS', 8);
    insert into ods_app_dwd values('2021-04-03 10:09:30', 274649165, 'view', 'shopping cart', 'MDS', 10);
    ```
    
3.  Query data.
    
    Query users who both added a product to the shopping cart and added it to the favorites page within a specific time range.
    
    You can query data using either of the following methods:
    
    -   Use a WHERE clause to query data.
        
        **Note**
        
        The fewer data records filtered by the WHERE clause in the query statement, the better the query performance.
        
        ```
        WITH tbl as (
        SELECT uid, bit_or(bit_construct(
          a := (action='click' and page='shopping cart'),
          b := (action='view' and page='favorites page'))) as uid_mask
          FROM ods_app_dwd
        WHERE event_time > '2021-04-03 10:00:00' AND event_time < '2021-04-04 10:00:00'
        GROUP BY uid )
        SELECT uid from tbl where bit_match('a&b', uid_mask);
        ```
        
        The following list explains the SQL statement:
        
        -   bit\_construct: Condition a filters users who added a product to the shopping cart. Condition b filters users who added a product to the favorites page.
            
        -   bit\_or: Performs a logical OR operation on the filtered conditions a and b. In this example, if any record for a user satisfies a condition, the user is considered to meet that condition.
            
        -   bit\_match: a&b returns the intersection of users who satisfy both condition a and condition b.
            
        
    -   Use a HAVING clause to query data.
        
        ```
        SELECT uid FROM (
            SELECT uid, bit_or(bit_construct(
              a := (action='click' AND page='shopping cart'),
              b := (action='view' AND page='favorites page'))) as uid_mask
            FROM ods_app_dwd
            WHERE event_time > '2021-04-03 10:00:00' AND event_time < '2021-04-04 10:00:00'
            GROUP BY uid 
            HAVING bit_match('a&b', bit_or(bit_construct(
              a := (action='click' and page='shopping cart'),
              b := (action='view' and page='favorites page'))))
        ) t
        ```
