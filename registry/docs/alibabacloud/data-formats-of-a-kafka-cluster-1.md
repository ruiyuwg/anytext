When you use Data Transmission Service (DTS) to migrate or synchronize data to a message queue such as Kafka cluster or ApsaraMQ for RocketMQ, you can specify the format in which data is stored in the message queue This topic describes the formats that you can use to store data in a message queue. You can parse data based on the definition of these data formats.

## Data formats

DTS allows you to store data into a message queue in one of the following formats:

-   [DTS Avro](#section-gxp-eqj-cv9): a data serialization format into which data structures or objects can be converted to facilitate storage and transmission.
    
-   [Shareplex Json](#section-a46-8d4-tvk): the format in which the data read from a source database by using the data replication software [SharePlex](https://www.quest.com/products/shareplex/) is stored in a message queue.
    
-   [Canal Json](#section-dt3-dut-0t1): the format in which data is stored in a message queue after [Canal](https://github.com/alibaba/canal/wiki) parses the logs about the incremental data of the source database and transmits the incremental data to the message queue.
    

## DTS Avro

You must parse the data based on the schema definition of DTS Avro. For more information, see [subscribe\_example](https://github.com/LioRoger/subscribe_example/tree/master/avro) at GitHub.

**Note**

In the DTS Avro format, the Data definition language (DDL) statements are of the STRING type.

## Shareplex Json

### Parameters

**Parameter**

**Description**

`time`

The UTC time when the transaction in the database is committed. The value of this parameter is in the yyyy-MM-ddTHH:mm:ssZ format.

`userid`

The ID of the user who commits the transaction.

`op`

The operation type. Valid values: INSERT, UPDATE, DELETE, TRUNCATE, DROP COLUMN, UPDATE BEFORE, and UPDATE AFTER.

`scn`

The system change number (SCN) that identifies the version of the transaction that the database commits at a specific point in time. Each committed transaction is assigned a unique SCN.

`rowid`

A relatively unique address value that is used to identify a record in the database.

`trans`

The ID of the transaction.

`seq`

The sequence number of the operation in the transaction. The number starts from 1.

`size`

The total number of operations in the transaction.

`table`

The name of the table.

`idx`

The index of the operation in the transaction, in the `seq/size` format. For example, `1/11` indicates that the sequence number of the operation is 1 in the transaction that contains 11 operations.

`posttime`

The time when the transaction is committed to the destination database.

### Examples:

## Data inserted

```
{
    "meta": {
        "time": "2017-06-16T14:24:34", 
        "userid": 84,                                    
        "op": "ins",                                   
          "scn": "14589063118712",                  
          "rowid": "AAATGpAAIAAItcIAAA",      
        "trans": "7.0.411499",                 
        "seq": 1,                                          
        "size": 11,                                         
        "table": "CL_BIZ1.MIO_LOG",       
          "idx": "1/11",                                       
        "posttime": "2017-06-16T14:33:52"
    },
    "data": {
        "MIO_LOG_ID": "32539737"
     }
}
```

## Data updated

```
{
    "meta": {
        "time": "2017-06-16T15:38:13",
        "userid": 84,
        "op": "upd",                             
        "table": "CL_BIZ1.MIO_LOG"
        ….
    },
    "data": {                                          
        "CNTR_NO": "1171201606"
    },
    "key": {                                            
        "MIO_LOG_ID": "32537893",
        "PLNMIO_REC_ID": "31557806",
        "POL_CODE": null,
        "CNTR_TYPE": null,
        "CNTR_NO": "1171201606syui26"
    }
}
```

## Data deleted

```
{
    "meta": {
        "time": "2017-06-16T15:51:35",
        "userid": 84,
        "op": "del",                      
     },
    "data": {                                    
        "MIO_LOG_ID": "32539739",
        "PLNMIO_REC_ID": "31557806",
        "POL_CODE": null,
        "CNTR_TYPE": null,
        "CG_NO": null
     }
}
```

## Canal Json

### Parameters

**Parameter**

**Description**

`database`

The name of the database.

`es`

The time when the operation is performed in the database. The value is a 13-bit UNIX timestamp. Unit: millisecond.

**Note**

You can use a search engine to obtain a UNIX timestamp converter.

`id`

The serial number of the operation.

`isDdl`

Indicates whether the operation is a DDL operation.

-   true: The operation is a DDL operation.
    
-   false: The operation is not a DDL operation.
    

`mysqlType`

The data type of the field.

**Note**

The operation parameters such as precision type are not supported.

`old` and `data`

The data before and after update.

**Note**

For data synchronization or migration instances that were created before March 20, 2022, the value of `old` is the data after update and the value of `data` is the data before update. By default, data from all columns is included. To keep consistent with the open source community, the value of `data` is the data after update and the value of `old` is the data before update for data synchronization or migration instances that were created or restarted from March 20, 2022.

`pkNames`

The name of the primary key.

`sql`

The SQL statement.

`sqlType`

The converted field type. The valid values are the same as the valid values of the dataTypeNumber parameter. For more information, see the [Mappings between MySQL data types and dataTypeNumber values](/help/en/dts/user-guide/use-a-kafka-client-to-consume-tracked-data-2#title-35p-0ta-pkd) section in the topic of "Use a Kafka client to consume tracked data".

`table`

The name of the table.

`ts`

The time when the operation starts to be performed in the destination database. The value is a 13-bit UNIX timestamp. Unit: millisecond.

**Note**

You can use a search engine to obtain a UNIX timestamp converter.

`type`

The operation type. Valid values: DELETE, UPDATE, and INSERT.

**Note**

During full data synchronization or migration, the operation type is fixed to **INIT**.

`gtid`

The global transaction identifier (GTID) that identifies a transaction. Each transaction is assigned a globally unique GTID.

### Examples

## Data updated

**Note**

For change tracking instances that were created before March 20, 2022 and synchronized to kafka cluster by using the `DELETE` statements of the source table, the value of `old` is data and the value of `data` is NULL. To keep consistent with the open source community, the value of `data` is data and the value of `old` is NULL for change tracking instances that were created or restarted from March 20, 2022.

## **D**ata synchronization or migration instance**s that were created before March 20, 2022**

```
{
    "old": [
        {
            "shipping_type": "aaa"
        }
    ], 
    "database": "dbname", 
    "es": 1600161894000, 
    "id": 58, 
    "isDdl": false, 
    "mysqlType": {
        "id": "bigint", 
        "shipping_type": "varchar"
    }, 
    "pkNames": [
        "id"
    ], 
    "sql": "", 
    "sqlType": {
        "id": -5, 
        "shipping_type": 12
    }, 
    "table": "tablename", 
    "ts": 1600161894771, 
    "type": "DELETE"
}
```

## Data synchronization or migration instances **that were created or restarted from March 20, 2022**

```
{
    "data": [
        {
            "id": "500000287", 
            "shipping_type": null
        }
    ], 
    "database": "dbname", 
    "es": 1600161894000, 
    "id": 58, 
    "isDdl": false, 
    "mysqlType": {
        "id": "bigint", 
        "shipping_type": "varchar"
    }, 
    "pkNames": [
        "id"
    ], 
    "sql": "", 
    "sqlType": {
        "id": -5, 
        "shipping_type": 12
    }, 
    "table": "tablename", 
    "ts": 1600161894771, 
    "type": "DELETE"
}
            
```

## DDL operation

```
{
    "database":"dbname", the name of the source database
    "es":1600161894000, the time when the data in the source database is written to the binary logs.
    "id":58, the offset of the DTS cache.
    "isDdl":true, specifies whether to synchronize or migrate DDL operations.
    "sql":"eg:createxxx", the DDL statements recorded in the binary logs.
    "table":"tablename", the name of the source table.
    "ts":1600161894771, the time when DTS writes data to the destination database.
    "type":"DDL"
}
```
