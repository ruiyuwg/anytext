This topic describes the methods that can be used to import multiple data records to an ApsaraDB RDS for SQL Server instance at a time. The import methods include the data import feature of Database Management (DBS), bcp utility, SQLServerBulkCopy for Java Database Connectivity (JDBC), and ADO.NET SQLBulkCopy.

**Note**

Take note of the following items:

-   Before you perform high-risk operations, such as modifying the configurations or data of Alibaba Cloud instances, we recommend that you check the disaster recovery and fault tolerance capabilities of the instances to ensure data security.
    
-   Before you modify the configurations or data of an instance, such as an Elastic Compute Service (ECS) instance or an RDS instance, we recommend that you create snapshots or enable backup for the instance. For example, you can enable log backup for an RDS instance.
    
-   If you granted permissions on sensitive information or submitted sensitive information in the Alibaba Cloud Management Console, we recommend that you modify the sensitive information at the earliest opportunity. Sensitive information includes usernames and passwords.
    

## Usage notes

ApsaraDB RDS for SQL Server allows you to execute the BULK INSERT statement to import multiple data records at a time. However, if you execute the statement on an RDS instance that runs SQL Server 2008 R2, a bug occurs. To prevent the bug, you must enable the CHECK constraints when you execute the statement. For more information, see [Controlling Constraint Checking by Bulk Import Operations](https://docs.microsoft.com/en-us/previous-versions/sql/sql-server-2008-r2/ms186247\(v=sql.105\)).

The method that is used to enable the `CHECK constraints` varies based on the import method.

-   If you use the bcp utility, you must include `/h "CHECK_CONSTRAINTS"` in the required command.
    
-   If you use the `SQLServerBulkCopy` class for the JDBC driver, you must specify `setCheckConstraints(true)` in `SQLServerBulkCopyOptions`.
    
-   If you use the `SqlBulkCopy` class in the ADO.NET framework, you must specify `SqlBulkCopyOptions.CheckConstraints` in constructor functions.
    

## **Method 1: Use the data import feature of DMS**

You can use the [data import](/help/en/dms/import-data) feature of DMS to import multiple data files to your RDS for SQL Server instance at a time. Only **SQL scripts**, **CSV files**, or **Excel files** can be imported by using this method.

## **Method 2: Use the bcp utility**

You can use the bcp utility to generate an XML file and use the generated file to import multiple data files to your RDS instance at a time.

1.  Run the following command to generate an XML file:
    
    ```
    bcp [Database name].[Architecture].Table name format nul /c /t"," /x /f "Path\XML-file name.xml" /U Username /P Password /S "Server addresses,Port"
    ```
    
    Sample command:
    
    ```
    bcp jacky.dbo.my_bcp_test format nul /c /t"," /x /f "d:\tmp\my_bcp_test.xml"  /U jacky /P xxxx /S "xxx.sqlserver.rds.aliyuncs.com,3333"
    ```
    
2.  Run the following command to import data:
    
    ```
    bcp [Database name].[Architecture].Table name in "Path to data files" /f "Path to the generated XML file" /q /k /h "CHECK_CONSTRAINTS" /U Username /P Password /S "Server addresses,Port"
    ```
    
    Sample command:
    
    ```
    bcp jacky.dbo.my_bcp_test in "d:\tmp\my_test_data_file.txt" /f "d:\tmp\my_bcp_test.xml"  /q /k /h "CHECK_CONSTRAINTS"  /U jacky /P xxx /S "rm-bp1sc****.sqlserver.rds.aliyuncs.com, 1433"
    ```
    

## **Method 3: Use JDBC SQLServerBulkCopy**

Use the `SQLServerBulkCopy` class to import multiple data records at a time.

```
SQLServerBulkCopyOptions copyOptions = new SQLServerBulkCopyOptions();
                        copyOptions.setCheckConstraints(true);
```

**Note**

For more information, see [Using bulk copy with the JDBC driver](https://msdn.microsoft.com/zh-cn/library/mt221490\(v=sql.110\).aspx?spm=a2c4g.11186623.2.14.4b887039rL38Y9).

## **Method 4: Use ADO.NET SQLBulkCopy**

Use the `SQLServerBulkCopy` class in the ADO.NET framework to import multiple data records at a time.

```
static void Main()
        {

            string srcConnString = "Data Source=(local);Integrated Security=true;Initial Catalog=testdb";
            string desConnString = "Data Source=****.sqlserver.rds.aliyuncs.com,3433;User ID=**;Password=**;Initial Catalog=testdb";

            SqlConnection srcConnection = new SqlConnection();
            SqlConnection desConnection = new SqlConnection();

            SqlCommand sqlcmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();
            DataTable dt = new DataTable();

            srcConnection.ConnectionString = srcConnString;
            desConnection.ConnectionString = desConnString;
            sqlcmd.Connection = srcConnection;

            sqlcmd.CommandText = @"SELECT top 1000000 [PersonType],[NameStyle],[Title],[FirstName],[MiddleName],[LastName],[Suffix],[EmailPromotion]
                             ,[AdditionalContactInfo],[Demographics],NULL as rowguid,[ModifiedDate] FROM [testdb].[dbo].[Person]";
            sqlcmd.CommandType = CommandType.Text;
            sqlcmd.Connection.Open();
            da.SelectCommand = sqlcmd;
            da.Fill(dt);


            using (SqlBulkCopy blkcpy = new SqlBulkCopy(desConnString, SqlBulkCopyOptions.CheckConstraints))
            //using (SqlBulkCopy blkcpy = new SqlBulkCopy(desConnString, SqlBulkCopyOptions.Default))
            {
                blkcpy.BatchSize = 2000;
                blkcpy.BulkCopyTimeout = 5000;
                blkcpy.SqlRowsCopied += new SqlRowsCopiedEventHandler(OnSqlRowsCopied);
                blkcpy.NotifyAfter = 2000;

                foreach (DataColumn dc in dt.Columns)
                {
                    blkcpy.ColumnMappings.Add(dc.ColumnName, dc.ColumnName);
                }

                try
                {
                    blkcpy.DestinationTableName = "Person";
                    blkcpy.WriteToServer(dt);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                finally
                {
                    sqlcmd.Clone();
                    srcConnection.Close();
                    desConnection.Close();

                }
            }

        }

        private static void OnSqlRowsCopied(
            object sender, SqlRowsCopiedEventArgs e)
        {
            Console.WriteLine("Copied {0} so far...", e.RowsCopied);
        }
```

## **Reference**

[Data migration and synchronization](/help/en/rds/apsaradb-rds-for-sql-server/data-migration-and-synchronization/)

## **Application scope**

ApsaraDB RDS for SQL Server
