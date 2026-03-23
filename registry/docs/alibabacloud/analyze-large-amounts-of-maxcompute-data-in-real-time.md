This topic describes how to query large amounts of MaxCompute data and analyze and display the query results in a visualized manner.

## Prerequisites

-   MaxCompute is activated. For more information, see [Activate MaxCompute and DataWorks](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
    **Note**
    
    Make sure that you activate the MaxCompute and Hologres services in the same region.
    
-   A Hologres instance is purchased and connected to HoloWeb. For more information, see [Connect to HoloWeb and perform queries](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    
-   Quick BI is activated. For more information, see [Prerequisites](/help/en/quick-bi/prerequisites#concept-szg-hcl-2gb).
    

## Background information

Hologres is a real-time interactive analytics engine. Hologres is compatible with PostgreSQL and seamlessly integrated with MaxCompute at the underlying layer.

You can create foreign tables to accelerate queries of MaxCompute data.

A Taobao store is used in the example to describe how to create a customer persona with the following information: the regional distribution and age composition of customers, the number of preferred customers, and the regional distribution of preferred customers who were born between 1980 and 1990.

The following figure shows the process of using Hologres to directly query data in MaxCompute.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2579509271/p859701.png)

1.  Save data of customers who visited the store to MaxCompute tables.
    
2.  Create a foreign table in Hologres to accelerate queries of data in MaxCompute.
    
3.  Connect Quick BI to a Hologres instance to display the customer persona in a visualized manner.
    

## Procedure

1.  Prepare a MaxCompute data source.
    
    Create a table in MaxCompute and import data to the table. For more information, see [Create tables](/help/en/maxcompute/getting-started/create-tables-1#concept-rkk-kcy-5db).
    
    This best practice uses the following existing tables in the MaxCompute project **public\_data**.
    
    **MaxCompute table**
    
    **Data entries**
    
    customer
    
    12 million
    
    customer\_address
    
    6 million
    
    customer\_demographics
    
    1.92 million
    
2.  Create a foreign table in Hologres and query the table.
    
    Create a foreign table in [HoloWeb](https://holoweb-cn-shanghai.data.aliyun.com/connect) to accelerate queries of data in MaxCompute. Procedure:
    
    1.  Create a foreign table.
        
        Log on to the [HoloWeb](https://holoweb-cn-shanghai.data.aliyun.com/connect) console. In the top navigation bar, choose **Metadata Management** > **MaxCompute Query Acceleration** > **Create Foreign Table** to create a foreign table in a visualized manner.
        
        Enter the name of the MaxCompute table to be queried, such as `public_data.customer`. Then, fields in the table are displayed. Select the fields that you want to synchronize and click **Submit**.
        
        **Note**
        
        -   Hologres does not allow you to query MaxCompute tables that reside in a different region from the Hologres instance.
            
        -   A foreign server is required for storing a foreign table. You can directly call the **odps\_server** server created at the underlying layer of Hologres. For more information, see [postgres\_fdw](https://www.postgresql.org/docs/11/postgres-fdw.html?spm=a2c4g.11186623.2.11.7e476020Gyif3k).
            
        
        You can execute the following SQL statement to create multiple foreign tables at a time:
        
        ```
        IMPORT FOREIGN SCHEMA public_data LIMIT to(
          customer,
          customer_address,
          customer_demographics,
          inventory,item,
          date_dim,
          warehouse) 
        FROM server odps_server INTO PUBLIC options(if_table_exist 'update');
        ```
        
    2.  Preview data in the foreign table.
        
        In the **Instance Management** panel, right-click the foreign table that you create and select **Open Table**. On the table details page, click **Data Preview** to preview the data of the MaxCompute table.
        
        **Note**
        
        The **Data Preview** tab only shows partial data in the foreign table.
        
    3.  Query data in the MaxCompute table by using the foreign table in Hologres.
        
        On the table details page, click **Query table**. On the **Ad-hoc Query** page, enter the following sample SQL statements in the code editor and click the **Run** icon to query data in the foreign table.
        
        Sample SQL statements:
        
        ```
        # SQL 1: Query the number of customers with the preferred flag specified, and sort the query results in descending order based on the number of customers. 
        SELECT c_preferred_cust_flag,
               count(*) AS cnt
        FROM customer
        WHERE c_preferred_cust_flag IS NOT NULL
        GROUP BY c_preferred_cust_flag
        ORDER BY cnt DESC LIMIT 10;
        
        # SQL 2: Query the number of customers who were born in each year, and display the years in which more than 1,000 customers were born in descending order based on the number of customers. 
        SELECT c_birth_year,
               count(*) AS cnt
        FROM customer
        WHERE c_birth_year IS NOT NULL
        GROUP BY c_birth_year HAVING count(*) > 1000
        ORDER BY cnt DESC LIMIT 10;
        
        # SQL 3: Query the number of customers in each city, and display the cities where more than 10 customers reside in descending order based on the number of customers. 
        SELECT ca_city,
               count(*) AS cnt
        FROM customer ,
             customer_address
        WHERE c_current_addr_sk = ca_address_sk
          AND ca_city IS NOT NULL
        GROUP BY ca_city HAVING count(*) > 10
        ORDER BY cnt DESC LIMIT 10;
        
        # SQL 4: Query the number of customers who were born between 1980 and 1989 in each city, and display the cities where more than 10 customers born between 1980 and 1989 reside in descending order based on the number of customers. 
        SELECT ca_city,
               count(*) AS cnt
        FROM customer ,
             customer_address
        WHERE c_current_addr_sk = ca_address_sk
          AND c_birth_year >= 1980
          AND c_birth_year < 1990
          AND c_preferred_cust_flag = 'Y'
          AND ca_city IS NOT NULL
        GROUP BY ca_city HAVING count(*) > 10
        ORDER BY cnt DESC LIMIT 10;
        ```
        
3.  Use Quick BI to analyze data.
    
    Connect Quick BI to the Hologres instance to analyze and display data queried from MaxCompute in a visualized manner. Procedure:
    
    1.  Add a data source.
        
        Log on to the Quick BI console and add a PostgreSQL data source to Hologres. For more information, see [Quick BI](/help/en/hologres/user-guide/quick-bi#task-2004225).
        
    2.  Create a dataset.
        
        After you connect Quick BI to Hologres, create a dataset and import the required data to the dataset to produce reports.
        
    3.  Display the customer persona in a visualized manner.
        
        Display reports based on your business requirements.
