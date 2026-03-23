You can use the extended attributes of an In-Memory Column Index (IMCI) to customize the IMCI. This topic describes the extended attributes of an IMCI. This topic also describes how to use these extended attributes to customize the IMCI.

## **Extended attributes**

### **pack\_shift**

This attribute is used to configure the row group size of IMCI data. The row group size of the IMCI mainly affects the amount of data that resides in memory. If a large number of tables or partitioned tables are used, you can adjust this attribute. The value of this attribute must be an integer. The valid values of this attribute range from 6 to 18. By default, if you do not specify this attribute, the value of the `loose_imci_default_pack_shift` parameter is used.

For more information about the `loose_imci_default_pack_shift` parameter, see [IMCI-related parameters](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-parameter-description). You can view and configure the `loose_imci_default_pack_shift` parameter in the PolarDB console. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

### **codec\_opt**

This attribute is used to configure a compression algorithm for the IMCI. For more information, see [Set a compression algorithm](/help/en/polardb/polardb-for-mysql/user-guide/set-a-compression-algorithm).

### **order\_key**

This attribute is used to configure a sort key for the IMCI. For more information, see [Configure sort keys for IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imci-based-data-sorting).

### **pruner/pruner\_minmax/pruner\_bloom**

This attribute is used to specify whether to create secondary indexes on string columns to accelerate data scanning. For more information, see [IMCI optimization for statistic queries](/help/en/polardb/polardb-for-mysql/user-guide/imci-optimization-for-statistic-queries).

**Note**

By default, if the cluster version is of PolarDB for MySQL 8.0.1.1.35 or later, minmax indexes and Bloom filters are created on string columns.

### **prefix\_len**

This attribute is used to configure the prefix length of the minmax pruners of the string type. The prefix length is measured in bytes. The valid values of this attribute range from 1 to 255. The default value of this attribute is 20. For more information, see the "Create minmax indexes when you create a table" section of the [IMCI optimization for statistic queries](/help/en/polardb/polardb-for-mysql/user-guide/imci-optimization-for-statistic-queries#sectiondiv-tz0-14x-fq6) topic.

### **write\_policy**

This attribute is used to configure a write policy for IMCI data. This attribute mainly affects the amount of space occupied by IMCI data and the performance of write operations. Valid values of the write\_policy attribute:

-   **0**: ForCapacity. This policy indicates that storage space is prioritized, and IMCI data is split and written across multiple files to minimize the fragmentation percentage. If this policy is used, a maximum of one fragment of 4 KB is generated in each write operation.
    
-   **1**: ForPerformance. This policy indicates that I/O performance is prioritized each time IMCI data is written to a file named ExtentSize. This policy ensures the best I/O performance, but results in the maximum fragmentation percentage and high space waste.
    
-   **2**: Skip4K. This policy indicates that 16-KB data meets performance requirements based on the features of Page Free Space (PFS) and data is split by using a logic similar to the ForCapacity policy. When the size of written data is more than 4 KB, the 4 KB extent is ignored. A maximum of one fragment of 16 KB is generated in each write operation.
    
-   **3**: Tradeoff. This policy has a higher priority than the Skip4K policy. If the size of written data is less than 1 MB (the unit of I/O size of IMCIs), this policy works in the same manner as the ForPerformance policy. When the size of written data is greater than or equal to 1 MB, data is divided into different files.
    

By default, if you do not configure the write\_policy attribute, the value of the `loose_imci_default_write_policy` parameter is used. The `loose_imci_default_write_policy` parameter has the same valid values as the write\_policy attribute. You can view and configure the `loose_imci_default_write_policy` parameter in the PolarDB console. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

## **Usage of the attributes**

-   Specify extended attributes when you create a table.
    
    ```
    CREATE TABLE lineitem (l_orderkey       INTEGER NOT NULL,
                           l_partkey        INTEGER NOT NULL,
                           l_suppkey        INTEGER NOT NULL,
                           l_linenumber     INTEGER NOT NULL,
                           l_quantity       DECIMAL(15,2) NOT NULL,
                           l_extendedprice  DECIMAL(15,2) NOT NULL,
                           l_discount       DECIMAL(15,2) NOT NULL,
                           l_tax            DECIMAL(15,2) NOT NULL,
                           l_returnflag     CHAR(1) NOT NULL,
                           l_linestatus     CHAR(1) NOT NULL,
                           l_shipdate       DATE NOT NULL,
                           l_commitdate     DATE NOT NULL,
                           l_receiptdate    DATE NOT NULL,
                           l_shipinstruct   CHAR(25) NOT NULL,
                           l_shipmode       CHAR(10) NOT NULL,
                           l_comment        VARCHAR(44) NOT NULL
                          ) COMMENT "COLUMNAR=1 <optName>=<optValue>";
    ```
    
-   Execute the following DDL statement to specify extended attributes:
    
    ```
    CREATE TABLE lineitem COMMENT "COLUMNAR=1 <optName>=<optValue>";
    ```
    

The following table describes parameters included in the preceding statement.

**Parameter**

**Description**

optName

The name of the extended attribute. Example: pack\_shift.

optValue

The value of the extended attribute.
