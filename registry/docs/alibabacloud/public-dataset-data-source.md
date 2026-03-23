DataWorks provides a built-in, ready-to-use public dataset data source. This lets you quickly test single-table offline data synchronization with zero configuration. This topic describes the data synchronization capabilities that DataWorks supports for public datasets.

## Supported datasets and regions

-   For a list of supported public datasets and their details, see the **Alibaba Cloud Marketplace Datasets** category in [DataWorks Gallery](https://dataworks.console.aliyun.com/gallery). You must subscribe to a dataset before you can use it in a sync task.
    
-   The public dataset data source is available in the following regions:
    
    Beijing, Shanghai, Hangzhou, Shenzhen, Zhangjiakou, Chengdu, Ulanqab, China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia).
    

## Develop a data synchronization task

For the configuration entry point and the general configuration process for a data sync task, see the guide below.

### Configure a single-table offline sync task

-   For the procedure, see [Configure in codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script demo for configuring a task in the code editor, see [Appendix: Script demo and parameter descriptions](#title-65q-hih-va5).
    

## Appendix: Script demo and parameter descriptions

### Configure an offline task script

If you use the code editor to configure an offline task, you must write the parameters in the script in the standard format. For more information, see [Configure in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following section describes the data source parameters for the code editor.

### Reader script demo

```
{
    "type": "job",
    "version": "2.0",
    "steps": [
        {
            "stepType": "public_dataset",
            "parameter": {
                "datasource": "Curated Book Dataset",
                "column": [
                    "bookid",
                    "title",
                    "authors",
                    "average_rating",
                    "isbn",
                    "isbn13",
                    "language_code",
                    "__num_pages",
                    "ratings_count",
                    "text_reviews_count",
                    "publication_date",
                    "publisher"
                ],
                "table": "good_reads_books"
            },
            "name": "Reader",
            "category": "reader"
        },
        {
            "stepType": "stream",
            "parameter": {
                "print": true
            },
            "name": "Writer",
            "category": "writer"
        }
    ],
    "setting": {
        "errorLimit": {
            "record": "0"
        },
        "locale": "zh_CN",
        "speed": {
            "concurrent": 2,
            "throttle": false
        }
    }
}
```

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the public dataset. For example: Curated Book Dataset.

Yes

None

**table**

The name of the table to sync. Find the table name in the dataset details.

Yes

None

**column**

The fields to read from the public dataset table. Separate fields with commas. For example: **"column": \["id", "name", "age"\]**.

Yes

None
