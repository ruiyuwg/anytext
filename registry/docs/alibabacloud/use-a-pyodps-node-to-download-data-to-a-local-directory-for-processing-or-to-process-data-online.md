This topic describes how to use a PyODPS node to avoid downloading data to a local directory for processing or to process data online.

## Background information

PyODPS provides multiple methods to download data to a local directory. You can download data to a local directory for processing and then upload the data to MaxCompute. However, local data processing is inefficient because the massively parallel processing capability of MaxCompute cannot be used if you download data to a local directory. If the data volume is greater than 10 MB, we recommend that you do not download data to a local directory for processing. You can use one of the following methods to download data to a local directory:

-   Use the head, tail, or to\_pandas method. In most cases, use the `head` or `tail` method to obtain small volumes of data. If you want to obtain large volumes of data, use the persist method to store data in a MaxCompute table. For more information, see [Execution](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb).
    
-   Use the open\_reader method. You can execute open\_reader on a table or an SQL instance to obtain the data. If you need to process large volumes of data, we recommend that you use PyODPS DataFrame or MaxCompute SQL. A PyODPS DataFrame object is created based on a MaxCompute table. This method provides higher efficiency than local data processing.
    

## Sample code

Convert a JSON string to multiple rows. Each row consists of a key and its value.

-   For local testing, use the `head` method to obtain small volumes of data
    
    ```
    In [12]: df.head(2)
                   json
    0  {"a": 1, "b": 2}
    1  {"c": 4, "b": 3}
    
    In [14]: from odps.df import output
    
    In [16]: @output(['k', 'v'], ['string', 'int'])
        ...: def h(row):
        ...:     import json
        ...:     for k, v in json.loads(row.json).items():
        ...:         yield k, v
        ...:   
    
    In [21]: df.apply(h, axis=1).head(4)
    
       k  v
    0  a  1
    1  b  2
    2  c  4
    3  b  3
    ```
    
-   For online production, use the `persist` method to store large volumes of data in a MaxCompute table
    
    ```
    In [14]: from odps.df import output
    
    In [16]: @output(['k', 'v'], ['string', 'int'])
        ...: def h(row):
        ...:     import json
        ...:     for k, v in json.loads(row.json).items():
        ...:         yield k, v
        ...:   
    
    In [21]: df.apply(h, axis=1).persist('my_table')
    ```
