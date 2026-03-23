PyODPS is integrated with SQLAlchemy. You can use SQLAlchemy to query data in MaxCompute. This topic describes how to connect SQLAlchemy to a MaxCompute project and call the SQLAlchemy interface.

## Connect SQLAlchemy to a MaxCompute project

Syntax

```
import os
from sqlalchemy import create_engine

# Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID to your AccessKey ID. 
# Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET to the AccessKey secret of the Alibaba Cloud account. 
# We recommend that you do not directly use your AccessKey ID or AccessKey secret.
conn_string = 'odps://%s:%s@<project>/?endpoint=<endpoint>' % (
    os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
    os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
)
engine = create_engine(conn_string)
conn = engine.connect()
```

-   ALIBABA\_CLOUD\_ACCESS\_KEY\_ID: the AccessKey ID that is used to access the MaxCompute project. We recommend that you set this parameter to an environment variable.
    
    You can obtain the AccessKey ID from the [AccessKey Pair](https://ram.console.alibabacloud.com/manage/ak) page.
    
-   ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET: the AccessKey secret that corresponds to the AccessKey ID. We recommend that you set this parameter to an environment variable.
    
    You can obtain the AccessKey secret from the [AccessKey Pair](https://ram.console.alibabacloud.com/manage/ak) page.
    
-   project: the name of the MaxCompute project that you want to access.
    
    This parameter specifies the name of your MaxCompute project instead of the DataWorks workspace to which the MaxCompute project corresponds. You can log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com). In the top navigation bar, select a region. In the left-side navigation pane, choose **Workspace** > **Projects** to view the name of the MaxCompute project.
    
-   endpoint: the endpoint of the region where your MaxCompute project resides.
    
    For more information about the endpoints of MaxCompute in different region, see [Endpoints](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    

For the existing ODPS object o, if you call the `o.to_global()` method to configure the object as a global object, you do not need to specify the preceding parameters in the connection string. Sample statements:

```
from sqlalchemy import create_engine
o.to_global()  # set ODPS object as global one
engine = create_engine('odps://')
```

## Call the SQLAlchemy interface

After you connect SQLAlchemy to a MaxCompute project, you can call the SQLAlchemy interface. The following statements show how to create tables, insert data into tables, and query data from tables.

-   Create a table
    
    ```
    from sqlalchemy import Table, Column, Integer, String, MetaData
    metadata = MetaData()
    
    users = Table('users', metadata,
        Column('id', Integer),
        Column('name', String),
        Column('fullname', String),
    )
    
    metadata.create_all(engine)
    ```
    
-   Insert data into the table
    
    ```
    ins = users.insert().values(id=1, name='jack', fullname='Jack Jones')
    conn.execute(ins)
    ```
    
-   Query data
    
    ```
    from sqlalchemy.sql import select
    s = select([users])
    result = conn.execute(s)
    for row in result:
        print(row)
    ```
    
    Return value
    
    ```
    (1, 'jack', 'Jack Jones')
    ```
