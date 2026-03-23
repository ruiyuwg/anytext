Data Lake Formation (DLF) provides the metadata extraction and data exploration features. This topic describes how to use DLF to analyze the sample data of Taobao user behavior.

## **Prerequisites**

An Object Storage Service (OSS) bucket is created. For more information about how to create a bucket, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4#DAS).

## Process

1.  Service activation: Create an Alibaba Cloud account and activate DLF and OSS.
    
2.  Sample dataset download and import: Download sample data to a CSV file and upload the file to OSS.
    
3.  Metadata extraction: Use the metadata extraction feature of DLF to automatically identify file schemas and create metadata tables.
    
4.  Data exploration: Use the data exploration feature of DLF to analyze user behavior, including user engagement and funnel models.
    

## Data description

The Taobao user behavior dataset used in an Alibaba Cloud Tianchi competition is used in the test. To improve test performance, the dataset is pruned. The dataset stores user behavior data and product sample data in the CSV format.

For more information about the Taobao user behavior dataset, visit [https://tianchi.aliyun.com/dataset/dataDetail?dataId=46](https://tianchi.aliyun.com/dataset/dataDetail?dataId=46).

Time range of data in the dataset: December 1, 2014 to December 7, 2014

Data format:

## User table

**Column**

**Description**

**Remarks**

user\_id

The user ID.

Sampled and desensitized. The ID is not a real ID.

item\_id

The item ID.

Desensitized. The ID is not a real ID.

behavior\_type

The type of the user behavior.

Valid values: 1, 2, 3, and 4. 1 indicates clicks, 2 indicates add-to-favorites, 3 indicates add-to-cart, and 4 indicates payment.

user\_geohash

The geographical location of the user when the behavior occurs. The value may be empty.

Generated based on the latitude and longitude of the user and by using a confidential algorithm.

item\_category

The category ID of the item.

Desensitized. The ID is not a real ID.

time

The time when the behavior occurs.

Accurate to the nearest hours.

## Item table

**Column**

**Description**

**Remarks**

item\_id

The item ID.

Sampled and desensitized. The ID is not a real ID.

item\_ geohash

The geographical location of the item when the behavior occurs. The value may be empty.

Generated based on the latitude and longitude of the item and by using a confidential algorithm.

item\_category

The category ID of the item.

Desensitized. The ID is not a real ID.

## Procedure

### Step 1: Activate DLF and OSS

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  Activate DLF and OSS and grant required permissions. (Skip this step if you have activated the services.)
    
    1.  If you have not activated the DLF service, you are prompted to activate the service when you log on to the console. Click **Activate Data Lake Formation for Free**.
        
    2.  After the service is activated, return to the homepage of the DLF console. You are prompted to activate OSS and grant DLF the permissions to access the dependent data sources. Click **Activate** to activate OSS and grant the required permissions.
        
3.  The [homepage of the DLF console](https://dlf.console.alibabacloud.com/) appears.
    

### Step 2: Upload the data files to be analyzed to OSS

1.  [Download the sample code](https://dlf-lib.oss-cn-hangzhou.aliyuncs.com/sample_data/user_behavior_data.zip) to a local disk.
    
    Decompress the downloaded package. The user\_behavior\_data file is obtained. This file contains the item and user folders, which contain the CSV data files. The test in this section focuses on the user folder. The following figure shows an example of some data in the folder.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p878765.png)
    
2.  Upload the user\_behavior\_data folder to OSS. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload#section-m0o-q5e-y70).
    
    The following figure shows the directory structure in OSS. item and user indicates the data folders of the two tables.
    
    **Note**
    
    You must delete the .DS\_Store file in the folders.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p878785.png)
    

### Step 3: Extract metadata from DLF

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  Creates a database.
    
    1.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
        
    2.  Click the **Database** tab, select the catalog that you want to manage from the **Catalog List** drop-down list, and then click **Create Database**.
        
    3.  On the page that appears, configure the following parameters and click **OK**.
        
        -   **Catalog**: Select a catalog.
            
        -   **Database Name**: Enter a database name.
            
        -   **Database Description**: Optional. Enter the database description.
            
        -   **Select Path**: Select the OSS path where the user\_behavior\_data file in the previous step is stored.
            
    4.  Check that the database is created. The following figure shows the created database.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p885201.png)
        
3.  Use DLF to extract metadata.
    
    1.  In the left-side navigation pane, choose **Metadata** > **Metadata Discovery**.
        
    2.  On the Metadata Discovery page, click **Create Extraction Task**. On the page that appears, configure the parameters. For more information, see [Metadata discovery](/help/en/dlf/dlf-1-0/user-guide/implement-metadata-discovery#title-qtz-s59-x5g).
        
    3.  Configure the parameters in the Set Extraction Source section and click **Next**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p878857.png)
        
    4.  Specify the Destination Database parameter and click **Next**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p878865.png)
        
    5.  Configure the parameters in the Set Extraction Task section.
        
        -   **RAM Role**: Select the RAM role to be used. By default, the AliyunDLFWorkFlowDefaultRole role that has been granted required permissions in the activation phase is displayed.
            
        -   **Execution Policy**: Select **Manual**.
            
        -   **Extraction Policy**: Set this parameter to **Extract All**. When DLF extracts metadata, it scans all metadata in each file. If the amount of data is large, this extraction method is time-consuming. The results of Extract All are more accurate.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p880317.png)
        
    6.  Confirm the information and click **Save and Execute**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p880321.png)
        
    7.  The system returns to the Metadata Discovery page. The new task is being created and then automatically executed. If the amount of data is large, this extraction method is time-consuming.
        
        Move the pointer over the question mark icon in the status column. A message is displayed, indicating that two metadata tables were created.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p880335.png)
        
4.  Query the tables.
    
    1.  Click the **Database** link. On the page that appears, click the **Table List** tab to view the table information in the database.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p880339.png)
        
    2.  Click the table name to check whether the structure of the extracted table is as expected.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p880341.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p880340.png)
        

### Step 4: Analyze user behavior data

The process of data analysis consists of three steps:

1.  Preview and check data.
    
2.  Preprocess data.
    
3.  Analyze user engagement, funnels, and item popularity.
    

#### **Preview and check data**

In the left-side navigation pane, click **Data Exploration**. In the SQL editor, enter the following statements to view the file data:

```
SET spark.sql.legacy.timeParserPolicy=LEGACY;
-- Preview data.
SELECT * FROM `demo_db`.`user` limit 10;
SELECT * FROM `demo_db`.`item` limit 10;

-- Number of users.
SELECT COUNT(DISTINCT user_id) FROM `demo_db`.`user`;

-- Number of items.
SELECT COUNT(DISTINCT item_id) FROM `demo_db`.`item`;

-- Number of behavior records.
SELECT COUNT(*) FROM `demo_db`.`user`;
```

The following figure shows the result.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p882015.png)

#### **Preprocess data**

You can preprocess the raw data to improve data readability and analysis performance.

-   Create the user\_log table in the Parquet format and partition the table by date.
    
-   Convert the values of behavior\_type into strings that are easy to understand. Valid values: 1, 2, 3, and 4. 1 indicates clicks, 2 indicates add-to-favorites, 3 indicates add-to-cart, and 4 indicates payment.
    
-   Divide the time column of the logs into the date and hour columns, and add a days of week column. This helps you analyze data at the date and hour levels.
    
-   Filter out unnecessary fields. Then, store the required data in the new table named user\_log.
    

User behavior will be analyzed based on the new table.

```
CREATE TABLE `demo_db`.`user_log` 
USING PARQUET
PARTITIONED BY (date)
AS SELECT 
    user_id, 
    item_id,
    CASE 
      WHEN behavior_type = 1 THEN 'click'
      WHEN behavior_type = 2 THEN 'collect'
      WHEN behavior_type = 3 THEN 'cart'
      WHEN behavior_type = 4 THEN 'pay'
    END AS behavior, 
    item_category, 
    time,
    date_format(time, 'yyyy-MM-dd') AS date,
    date_format(time, 'H') AS hour,
    date_format(time, 'u') AS day_of_week
  FROM `dlf_demo`.`user`;
  
 -- View the result.  
SELECT * FROM `demo_db`.`user_log` limit 10; 
```

The following figure shows the result.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p882104.png)

#### **Analyze user behavior**

1.  Based on the funnel model, analyze the behavior of all users from clicks, add-to-carts, and add-to-favorites to purchase.
    
    ```
    -- The analysis takes 13 seconds.
    SELECT
      behavior, COUNT(*) AS total
    FROM `demo_db`.`user_log`
    GROUP BY behavior
    ORDER BY total DESC
    ```
    
    The following figure shows the result.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p882114.png)
    
2.  Analyze the user behavior on each day of a week.
    
    ```
    -- The analysis takes 14 seconds.
    SELECT 
      date, day_of_week,
      COUNT(DISTINCT(user_id)) as uv,
      SUM(CASE WHEN behavior = 'click' THEN 1 ELSE 0 END) AS click,
      SUM(CASE WHEN behavior = 'cart' THEN 1 ELSE 0 END) AS cart,
      SUM(CASE WHEN behavior = 'collect' THEN 1 ELSE 0 END) AS collect,
      SUM(CASE WHEN behavior = 'pay' THEN 1 ELSE 0 END) AS pay
    FROM `demo_db`.`user_log`
    GROUP BY date, day_of_week
    ORDER BY date
    ```
    
    The following figure shows the result. (The analysis result is distorted because the dataset is pruned.)
    
3.  Analyze the 10 most popular item categories in the dataset based on the item table.
    
    ```
    -- The analysis takes 1 minute and 10 seconds.
    SELECT item.item_category, COUNT(*) AS times
    FROM `demo_db`.`item` item
      JOIN `demo_db`.`user_log` log
      ON item.item_id = log.item_id
    WHERE log.behavior='pay'
    GROUP BY item.item_category
    ORDER BY times DESC
    LIMIT 10;
    ```
    
    The following figure shows the result.
    
4.  (Optional) Download the analysis results.
    
    DLF allows you to download analysis results as a CSV file. Before the download, you must specify an OSS path for saving analysis results. The analysis results are saved to the specified path.
    
    1.  In the upper-right corner of the **Data Exploration** page, click **Path Settings**. In the Select OSS Path dialog box, specify the **Result Storage Path** parameter. You can select an existing folder or create a folder.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871036371/p882252.png)
        
    2.  After the configuration is complete, run the SQL statements. On the **Running History** tab, you can click **Download** in the Actions column of the record to download the file. You can also access and download the file in the OSS console.
        
5.  (Optional) Save the SQL statements.
    
    You can click **Save** to save the SQL statements that you execute in previous steps. Then, you can execute the saved SQL statements on the **Saved Query** tab if required.
    

## **FAQ**

If you have questions or you want to further explore data lake technologies, follow the official account Data Lake Technology Circle in WeChat.
