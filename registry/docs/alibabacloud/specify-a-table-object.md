DataFrame is an API used for processing structured data. You can perform data processing by using the DataFrame API provided by PyODPS. This improves development efficiency. This topic describes how to create a DataFrame object by referencing data sources.

## **Prerequisites**

The sample table **pyodps\_iris** is available. For more information about how to create the sample table, see [Use DataFrame to process data](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).

## Background information

To use a DataFrame object, you must familiarize yourself with the operations on the `Collection` (`DataFrame`), `Sequence`, and `Scalar` objects. Collection indicates a tabular data structure (two-dimensional structure). Sequence indicates a column (one-dimensional structure). Scalar indicates a scalar object.

If you use Pandas to create a DataFrame object, the object contains the actual data. If you use a MaxCompute table to create a DataFrame object, the object does not contain the actual data. The object contains only data operations. After a DataFrame object is created, MaxCompute can store and compute data.

## Procedure

DataFrame object is the only Collection object that you must create. A DataFrame object can be used to reference MaxCompute tables, MaxCompute partitions, Pandas DataFrame objects, and SQLAlchemy tables (database tables). The reference operations for these data sources are the same. You can process data without the need to modify code. You only need to change the input and output pointers. This way, you can migrate small amounts of test code that is running locally to MaxCompute. The accuracy of the migration is ensured by PyODPS DataFrame.

### **Create a DataFrame object from a MaxCompute table**

If you want to create a DataFrame object from a MaxCompute table, specify the table object in the DataFrame method, or use the `to_df` method of the table. Sample code:

```
from odps.df import DataFrame

# Specify a table object. 
iris = DataFrame(o.get_table('pyodps_iris'))
# Use the to_df method of the MaxCompute table. 
iris2 = o.get_table('pyodps_iris').to_df() 
```

### Create a DataFrame object by using a partition in a MaxCompute table

If you want to create a DataFrame object by using a partition in a MaxCompute table, specify the partition in the DataFrame method, or use the `to_df` method of the partition. Sample code:

```
from odps.df import DataFrame

# (Optional) Create a partitioned table named partitioned_table. If a partitioned table exists, you can replace the existing partitioned table with the partitioned table partitioned_table based on your business requirements. 
o.create_table('partitioned_table', ('num bigint, num2 double', 'pt string'), if_not_exists=True)
# Specify a table object. 
pt_df = DataFrame(o.get_table('partitioned_table').get_partition('pt=20171111'))
# Use the to_df method of the partition. 
pt_df2 = o.get_table('partitioned_table').get_partition('pt=20171111').to_df();
```

### **Create a DataFrame object by using a Pandas DataFrame object**

If you want to create a DataFrame object by using a Pandas DataFrame object, specify the Pandas DataFrame object in the DataFrame method.

-   **Sample code**
    
    ```
    from odps.df import DataFrame
    
    # Create a DataFrame object by using a Pandas DataFrame object. 
    import pandas as pd
    import numpy as np
    df = DataFrame(pd.DataFrame(np.arange(9).reshape(3, 3), columns=list('abc')))
    ```
    
-   **Usage notes**
    
    If you create a DataFrame object by using a Pandas DataFrame object, take note of the following items during the initialization of the DataFrame object:
    
    -   PyODPS DataFrame attempts to infer the NUMPY OBJECT or STRING data type. If a column is empty, an error is returned. To prevent these errors, set `unknown_as_string` to True, and convert the data type of this column into STRING.
        
    -   You can use the `as_type` parameter to forcefully convert the data type. If a basic data type is used, this type is forcefully converted when you create a PyODPS DataFrame object. If a Pandas DataFrame object contains a LIST or DICT column, the system does not infer the data type of this column. You must manually configure `as_type`. The `as_type` parameter must be set to DICT.
        
    
    **Examples**
    
    -   Example 1: Set the data type of the `null_col2` column to `float`.
        
        ```
        df2 = DataFrame(df, unknown_as_string=True, as_type={'null_col2': 'float'})
        print(df2.dtypes)
        ```
        
        The following result is returned:
        
        ```
        odps.Schema {
          sepallength           float64
          sepalwidth            float64
          petallength           float64
          petalwidth            float64
          name                  string
          null_col1             string   # The data type cannot be identified. You can set unknown_as_string to True to convert the data type into STRING. 
          null_col2             float64  # The data type is forcefully converted into FLOAT. 
        }
        ```
        
    -   Example 2: Set the data type of the `list_col` column to `list<int64>`.
        
        ```
        df4 = DataFrame(df3, as_type={'list_col': 'list<int64>'})
        print(df4.dtypes)
        ```
        
        The following result is returned:
        
        ```
        odps.Schema {
          id        int64
          list_col  list<int64>  # The data type cannot be identified or automatically converted. You must specify as_type. 
        }
        ```
        
    
    **Note**
    
    PyODPS does not allow you to upload Object Storage Service (OSS) or Tablestore external tables to MaxCompute.
    

### **Create a DataFrame object by using an** SQLAlchemy **table**

If you want to create a DataFrame object by using an SQLAlchemy table, specify the SQLAlchemy table object in the DataFrame method. For more information about how to connect SQLAlchemy to a MaxCompute project and the parameters, see [Connect SQLAlchemy to a MaxCompute project](/help/en/maxcompute/user-guide/sqlalchemy#section-4h8-uz8-q1d). The following sample code provides an example:

```
from odps.df import DataFrame
import sqlalchemy

# Create a DataFrame object by using an SQLAlchemy table. 
# Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID to the AccessKey ID of your Alibaba Cloud account. 
# Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET to the AccessKey secret of your Alibaba Cloud account. 
# We recommend that you do not directly use your AccessKey ID or AccessKey secret.
conn_string = 'odps://%s:%s@<project>/?endpoint=<endpoint>' % (
    os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
    os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
)
engine = sqlalchemy.create_engine(conn_string)
metadata = sqlalchemy.MetaData(bind=engine) # Bind the metadata to a database engine. 
table = sqlalchemy.Table('pyodps_iris', metadata, extend_existing=True, autoload=True)
iris = DataFrame(table)
```
